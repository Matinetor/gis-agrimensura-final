# Análisis de Limpieza y Optimización - Argenmap

## 📋 Resumen Ejecutivo

Este documento identifica archivos, código y recursos que **NO se están utilizando** en el proyecto y pueden ser eliminados para optimizar el tamaño y mejorar el rendimiento.

---

## 🗑️ ARCHIVOS Y CARPETAS NO UTILIZADOS

### 1. **Carpeta `dist/` - PARCIAL**
**Ubicación:** `dist/`
**Razón:** Algunos archivos no se referencian en el código
- `dist/css/droid-serif.css` - ❌ No referenciado
- `dist/css/roboto-fontface.css` - ❌ No referenciado
- `dist/css/images/markers-*.png` (7 archivos) - ❌ No referenciados
- `dist/fonts/` (99 archivos) - ✅ **SE USAN** desde `src/styles/css/main.css` que referencia `../../../dist/fonts/`
- `dist/layers/geojson/oficinas_provinciales.geojson` - ❌ No referenciado (verificado: no aparece en búsquedas)

**⚠️ ADVERTENCIA:** Los archivos en `dist/fonts/` SÍ se usan indirectamente a través de `main.css`. NO eliminar esta carpeta.

### 2. **Carpeta `assets/Honduras 5111/`**
**Ubicación:** `assets/Honduras 5111/`
**Razón:** Parece ser un proyecto de ejemplo o prueba, no referenciado en el código
- `Honduras 5111.pdf`
- `Honduras 5111/proyectos/ID_0001/` (subcarpetas completas)

### 3. **Componentes JavaScript No Utilizados**

#### 3.1. **`src/js/components/data-managment/`** - COMPLETO
- `data-managment.js`
- `data-storage.js`
- `server-connection.js`
**Razón:** No se encontraron referencias en el código

#### 3.2. **`src/js/components/form-builder/`** - PARCIALMENTE USADO
- `form-builder.css` - ✅ Se carga dinámicamente en `map.js` línea 509
- `form-builder.js` - ✅ Se carga dinámicamente en `map.js` línea 519
**Estado:** Estos archivos SÍ se usan, mantenerlos

### 4. **CSS Duplicado - Font Awesome**
**Ubicación:** `index.html` líneas 20 y 105
**Problema:** Font Awesome se carga DOS veces:
- Línea 20: `font-awesome/6.0.0/css/all.min.css`
- Línea 105: `font-awesome/6.4.0/css/all.min.css`

**Solución:** Eliminar una de las dos (recomendado mantener la 6.4.0 que es más reciente)

### 5. **Script Comentado**
**Ubicación:** `index.html` línea 151
```html
<!--<script src="src/js/components/loadLayersModal/loadLayersModal.js"></script>-->
```
**Estado:** Está comentado pero el CSS se carga en línea 193. Si no se usa, eliminar también el CSS.

### 6. **Archivos de Documentación (Opcional)**
**Ubicación:** `src/docs/`
**Nota:** Estos archivos son documentación, no afectan el funcionamiento. Pueden mantenerse o eliminarse según necesidad:
- `src/docs/diagrams/*.drawio` - Diagramas de diseño
- `src/docs/ejemplos_data_json/*.json` - Ejemplos
- `src/docs/en/*` - Documentación en inglés
- `src/docs/img/*` - Imágenes de documentación

### 7. **Imágenes Potencialmente No Utilizadas**

#### 7.1. En `src/styles/images/`:
- `argenmap_logo_old.svg` - Logo antiguo, probablemente no usado
- `logo-old.png` - Logo antiguo
- `noimage.gif` - Versión GIF, se usa `noimage.webp` en su lugar
- Múltiples variantes de banners/logos que pueden no usarse todas:
  - `argenmap-banner-white.png` vs `.webp` vs `.svg`
  - `argenmap-gris.png` vs `.webp`
  - `argenmap-oscuro.png` vs `.webp`
  - `argenmap-topo.png` vs `.webp`
  - `argenmap.png` vs `.webp`

**Recomendación:** Verificar en `src/config/data.json` qué imágenes se configuran realmente.

---

## 🔍 CÓDIGO Y RECURSOS A REVISAR

### 1. **IE10 Viewport Hack** (Líneas 15-16, 128, 135)
**Ubicación:** `index.html`
**Estado:** Código legacy para IE10/Windows 8. Si no se soporta IE10, puede eliminarse:
- CSS: línea 16
- JS: líneas 128, 135

### 2. **Bootstrap Holder.js** (Línea 133)
**Ubicación:** `index.html`
**Comentario en código:** "Just to make our placeholder images work. Don't actually copy the next line!"
**Estado:** Parece ser para desarrollo/demos. Verificar si se usa.

### 3. **jQuery UI**
**Ubicación:** `index.html` línea 18 (CSS) y 100 (JS)
**Estado:** Verificar si realmente se usa jQuery UI o solo jQuery core.

### 4. **Fancybox**
**Ubicación:** `index.html` líneas 125-126
**Estado:** ✅ **SE USA** - Referenciado en `src/js/components/styles/styles.js` línea 196
**Acción:** MANTENER

### 5. **Marked.js** (Línea 161)
**Ubicación:** `index.html`
**Estado:** ✅ **SE USA** - Referenciado en `src/js/components/about/about.js` línea 19 para parsear archivos Markdown
**Acción:** MANTENER

### 6. **Leaflet Image** (Línea 172)
**Ubicación:** `index.html`
**Estado:** Plugin para exportar mapas como imágenes. Verificar si se usa la funcionalidad de exportación.

---

## 📊 ESTADÍSTICAS ESTIMADAS

### Archivos que pueden eliminarse:
- **Carpeta completa:** `dist/css/images/` (7 archivos PNG)
- **Carpeta completa:** `dist/layers/` (1 archivo GeoJSON)
- **Carpeta completa:** `assets/Honduras 5111/` (proyecto de ejemplo)
- **Carpeta completa:** `src/js/components/data-managment/` (3 archivos JS)
- **Archivos individuales:** ~10-15 imágenes duplicadas/antiguas
- **CSS duplicado:** 1 carga de Font Awesome

### Espacio estimado a liberar:
- **Imágenes:** ~2-5 MB
- **Código no usado:** ~50-100 KB
- **Proyecto ejemplo:** Depende del tamaño de archivos

---

## ✅ RECOMENDACIONES DE ACCIÓN

### Prioridad ALTA (Eliminar sin riesgo):
1. ✅ Eliminar `dist/css/images/` (7 archivos PNG de marcadores no usados)
2. ✅ Eliminar `dist/layers/geojson/oficinas_provinciales.geojson` (GeoJSON no referenciado)
3. ✅ Eliminar `dist/css/droid-serif.css` y `roboto-fontface.css` (no referenciados)
4. ✅ Eliminar `src/js/components/data-managment/` (3 archivos JS no usados)
5. ✅ Eliminar una carga duplicada de Font Awesome (línea 20, mantener línea 105)
6. ✅ Eliminar `assets/Honduras 5111/` si es solo ejemplo de prueba

### Prioridad MEDIA (Verificar antes de eliminar):
1. ⚠️ Verificar uso de `loadLayersModal` (está comentado pero tiene CSS)
2. ⚠️ Verificar uso de Leaflet Image (Fancybox y Marked.js ✅ se usan)
3. ⚠️ Revisar imágenes duplicadas en `src/styles/images/`
4. ⚠️ Verificar si jQuery UI se usa realmente

### Prioridad BAJA (Código legacy, mantener si hay dudas):
1. 📝 IE10 hacks (mantener si hay usuarios con IE10)
2. 📝 Bootstrap Holder.js (mantener si se usa en desarrollo)

---

## 🛠️ SCRIPT DE LIMPIEZA SUGERIDO

```bash
# Eliminar carpetas no usadas
rm -rf dist/css/images/          # 7 archivos PNG de marcadores
rm -rf dist/layers/geojson/     # GeoJSON no referenciado
rm -rf dist/css/droid-serif.css
rm -rf dist/css/roboto-fontface.css
rm -rf src/js/components/data-managment/  # 3 archivos JS
rm -rf assets/Honduras\ 5111/   # Proyecto de ejemplo

# Eliminar imágenes antiguas (verificar primero en data.json)
# rm src/styles/images/argenmap_logo_old.svg
# rm src/styles/images/logo-old.png
# rm src/styles/images/noimage.gif

# NOTA: NO eliminar dist/fonts/ - Se usan desde main.css
```

---

## 📝 NOTAS IMPORTANTES

1. **NO eliminar `dist/fonts/`** - Se usan desde `main.css`
2. **NO eliminar `form-builder/`** - Se carga dinámicamente
3. **Hacer backup** antes de eliminar archivos
4. **Probar la aplicación** después de cada eliminación
5. **Revisar `src/config/data.json`** para ver qué imágenes se configuran realmente

---

## 🔄 PRÓXIMOS PASOS

1. Revisar `src/config/data.json` para confirmar imágenes usadas
2. Buscar referencias dinámicas a archivos (usando `getScript`, `append`, etc.)
3. Verificar uso de plugins de terceros (Fancybox, Marked, etc.)
4. Crear script de limpieza automatizado
5. Documentar cambios en CHANGELOG

---

**Fecha de análisis:** 2025-12-28
**Versión analizada:** Argenmap v2 (master)

---

## ✅ LIMPIEZA REALIZADA

**Fecha de limpieza:** 2025-12-28

### Archivos eliminados exitosamente:

1. ✅ **dist/css/images/** - 7 archivos PNG eliminados:
   - markers-matte.png
   - markers-matte@2x.png
   - markers-plain.png
   - markers-shadow.png
   - markers-shadow@2x.png
   - markers-soft.png
   - markers-soft@2x.png

2. ✅ **dist/layers/geojson/oficinas_provinciales.geojson** - Eliminado

3. ✅ **dist/css/droid-serif.css** - Eliminado

4. ✅ **dist/css/roboto-fontface.css** - Eliminado

5. ✅ **src/js/components/data-managment/** - 3 archivos JS eliminados:
   - data-managment.js
   - data-storage.js
   - server-connection.js

6. ✅ **assets/Honduras 5111/Honduras 5111.pdf** - Eliminado

7. ✅ **index.html** - Eliminada carga duplicada de Font Awesome (línea 20)

### Carpetas vacías restantes (pueden eliminarse manualmente):
- `dist/css/images/` (carpeta vacía)
- `dist/layers/geojson/` (carpeta vacía)
- `src/js/components/data-managment/` (carpeta vacía)
- `assets/Honduras 5111/proyectos/ID_0001/` y subcarpetas (vacías)

### Resultado:
- **Archivos eliminados:** 13 archivos
- **Líneas de código limpiadas:** 1 (Font Awesome duplicado)
- **Espacio liberado estimado:** ~2-5 MB (dependiendo del tamaño de los PNG y PDF)

