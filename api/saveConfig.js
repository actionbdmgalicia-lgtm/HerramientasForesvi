// Vercel Function para guardar configuración en GitHub de forma segura
export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { config, commitMessage = 'Actualizar herramientas' } = req.body;

    if (!config) {
      return res.status(400).json({ error: 'Configuración no proporcionada' });
    }

    // Obtener el token desde variables de entorno (nunca expuesto en el navegador)
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'actionbdmgalicia-lgtm';
    const GITHUB_REPO = 'HerramientasForesvi';
    const GITHUB_FILE = 'config.json';

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'Token de GitHub no configurado en servidor' });
    }

    // Primero, obtener el SHA actual del archivo
    const fileUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

    const getResponse = await fetch(fileUrl, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!getResponse.ok) {
      return res.status(500).json({ error: 'No se pudo obtener el archivo de GitHub' });
    }

    const fileData = await getResponse.json();
    const currentSha = fileData.sha;

    // Codificar la configuración en base64
    const content = Buffer.from(JSON.stringify(config, null, 2)).toString('base64');

    // Actualizar el archivo en GitHub
    const updateResponse = await fetch(fileUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: commitMessage,
        content: content,
        sha: currentSha
      })
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      return res.status(500).json({ error: 'Error al guardar en GitHub: ' + error.message });
    }

    const result = await updateResponse.json();

    return res.status(200).json({
      success: true,
      message: 'Configuración guardada correctamente en GitHub',
      sha: result.content.sha
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Error en el servidor: ' + error.message });
  }
}
