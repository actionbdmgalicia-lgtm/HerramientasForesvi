# 🔧 Troubleshooting FORESVI

## ❌ El enlace de Gemini no abre

### Posibles causas:

**1. Google bloquea accesos externos (MÁS PROBABLE)**
- Los enlaces compartidos de Gemini a menudo requieren estar logueado en tu cuenta de Google
- Google puede bloquear accesos desde navegadores automatizados o contextos externos
- El enlace puede estar restringido a usuarios específicos

**2. Bloqueador de pop-ups activo**
- Si ves un alert "El navegador bloqueó la ventana"
- Desactiva extensiones de bloqueo (AdBlock, uBlock, etc)

**3. CORS (Cross-Origin Resource Sharing)**
- El navegador bloquea ciertas URLs por razones de seguridad
- Google es restrictivo con CORS

### 🔍 Cómo verificar:

**Opción 1: Prueba directa en el navegador**
1. Abre una nueva pestaña
2. Copia y pega la URL directamente: `https://gemini.google.com/share/6be8c6128af1`
3. ¿Funciona? Si no → El problema es de Google, no de FORESVI

**Opción 2: Usa DEBUG.html**
1. Abre `DEBUG.html`
2. En "Prueba de URLs", pega la URL de Gemini
3. Click "Probar URL (nueva ventana)"
4. ¿Funciona? Si no → El problema es de Google

### ✅ Soluciones:

**Solución 1: Regenera el link compartido (Recomendado)**
1. En Google Gemini, abre tu conversación
2. Haz un nuevo "share" del contenido que necesites
3. Asegúrate de que el link esté activo y compartido públicamente
4. Vuelve a agregar en FORESVI

**Solución 2: Usa la URL de Google Gemini general**
```
https://gemini.google.com
```
En lugar de un link específico compartido

**Solución 3: Alterna: Copia el contenido a un HTML**
Si necesitas que sea accesible offline:
1. Copia el contenido de Gemini
2. Crea un archivo `gemini-content.html` con el contenido
3. Agrégalo como herramienta tipo "html"

**Solución 4: Usa un servicio intermedio**
Copia el contenido a:
- Google Docs
- Notion
- Otros servicios con URLs compartibles estables

## 📝 Otros problemas comunes

### Las herramientas no aparecen
- Abre `DEBUG.html` → "Ver localStorage"
- ¿Ves tus herramientas ahí? Si no, no se guardaron
- Intenta agregar una herramienta simple de prueba

### localStorage se limpia
- Si el navegador borra datos, pierdes los cambios
- Solución: Edita directamente `config.json` en lugar de usar localStorage

### ¿Por qué localStorage?
- localStorage persiste incluso si refrescas la página
- Es más rápido que cargar `config.json`
- Los cambios son instantáneos sin servidor

## 💡 Tips

1. **Siempre prueba URLs primero en el navegador** antes de agregarlas
2. **Usa DEBUG.html** para diagnosticar cualquier problema
3. **Los links de Google requieren estar logueado** - considera alternativas más públicas
4. **Respeta las restricciones de compartición** de Google/Gemini

---

¿Necesitas ayuda con algo específico? 🆘
