# 🚀 FORESVI - Hub de Herramientas

Hub centralizado para acceder rápidamente a todas tus herramientas de análisis y cálculo. Carga desde `config.json` para máxima flexibilidad.

## 📁 Estructura Actual

```
GENERAL FORESVI/
├── index.html                           # 🏠 Portal principal (ABRE ESTO)
├── config.json                          # ⚙️ Configuración de herramientas
├── README.md                            # Este archivo
├── 1 FORESVI Manual de marca.pdf        # Guía de identidad visual
│
├── 📊 DINERO
│   ├── simulador aumentos y descuentos.html
│   ├── simulador-holding .html
│   └── simulador_nomina_dividendos .html
│
└── 💰 ESPECÍFICOS CLIENTES
    ├── comisiones .html
    ├── calculadora-roi .html
    └── comparador-mieles .html
```

## ⚡ Cómo Usar

1. **Abre `index.html`** en tu navegador
2. **Navega por categorías** en el menú lateral izquierdo
3. **Haz clic en una herramienta** para abrirla en el portal
4. **Botón "Nueva ventana"** (🔗) para abrir en pestaña/ventana independiente

## ➕ Cómo Agregar Nuevas Herramientas

### ✅ Opción A: Panel de Configuración (Recomendado)
1. Abre el portal (`index.html`)
2. Haz clic en **⚙️ Configuración** (botón azul en el sidebar)
3. Elige entre:
   - **Agregar herramienta**: Formulario visual
   - **Editar JSON**: Edición directa de `config.json`

#### Agregar vía Formulario:
- Categoría: Dinero, Específicos, etc.
- ID: `mi-herramienta-nueva` (sin espacios)
- Nombre: "Mi Herramienta Nueva"
- Descripción: Texto descriptivo
- Tipo: `html` (local) o `url` (web externa)
- Ruta/URL: Ruta del archivo HTML o URL completa

**✨ Se guarda en localStorage automáticamente**

### Opción B: Editar `config.json` Directamente
Abre `config.json` y agrega en la categoría correspondiente:

```json
{
  "herramientas": {
    "dinero": [
      {
        "id": "mi-herramienta",
        "nombre": "Mi Herramienta",
        "descripcion": "Descripción detallada",
        "tipo": "html",
        "ruta": "mi-herramienta.html"
      }
    ]
  }
}
```

Para URLs externas:
```json
{
  "id": "google",
  "nombre": "Google",
  "descripcion": "Buscador",
  "tipo": "url",
  "ruta": "https://google.com"
}
```

## 📚 Categorías Disponibles

| # | Categoría | Descripción |
|---|-----------|-------------|
| 0 | **Específicos** | Herramientas custom para clientes |
| 1 | **Destino** | Análisis de objetivos y metas |
| 2 | **Dinero** | Simuladores financieros y cálculos |
| 3 | **Tiempo** | Gestión y proyecciones temporales |
| 4 | **Servicio** | Herramientas de servicio al cliente |
| 5 | **Marketing & Ventas** | Marketing (5.1) y Ventas (5.2) |
| 6 | **Sistema** | Herramientas de infraestructura |
| 7 | **Equipo** | Gestión de recursos humanos |
| 8 | **Sinergia** | Análisis de sinergias y colaboración |
| 9 | **General** | Utilidades generales |

## 🎨 Personalización

Puedes editar los estilos del `index.html`:
- **Colores**: Busca `#667eea` o `#764ba2`
- **Tipografía**: Busca `font-family`
- **Ancho del menú**: Busca `width: 280px`

## 📝 Notas Importantes

⚠️ **Los archivos HTML son de proyectos que pueden cambiar**
- Mantén copias de respaldo si es necesario
- Documenta cambios importantes en cada herramienta
- Si una herramienta se discontinúa, simplemente elimina la referencia en `const tools`

## 🔗 Próximos Pasos

- [ ] Organizar archivos en estructura de carpetas
- [ ] Crear más herramientas para otras categorías
- [ ] Agregar descripción detallada en cada herramienta
- [ ] Implementar búsqueda global
- [ ] Agregar historial de últimas herramientas usadas

---

**Última actualización**: 2026-03-09
**Autor**: FORESVI Tools Hub
