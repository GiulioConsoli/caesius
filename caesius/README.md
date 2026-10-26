# Caesius

Sitio de [Caesius](https://caesius.es), análisis cuantitativos en español.
Sitio estático generado con [Astro](https://astro.build) y publicado en Netlify.

## Cómo funciona

- Los artículos son archivos Markdown en `src/content/analisis/`.
- Los autores son archivos Markdown en `src/content/autores/`.
- Las imágenes de los gráficos van en `public/figuras/<artículo>/`.
- Los gráficos interactivos (Plotly, exportados desde Python) van en `src/figuras/`.
- Cada cambio en la rama `main` dispara una compilación en Netlify y se publica en unos minutos.

## Añadir un análisis

1. Crear `src/content/analisis/nombre-del-articulo.md` (el nombre del archivo es la URL).
2. Rellenar la cabecera:

```yaml
---
titulo: "Título del análisis"
sumario: "Dos frases que resumen el hallazgo."
autores: [giulio-consoli]       # nombres de archivo en src/content/autores/, en orden
fecha: 2026-11-02
temas: [elecciones, internacional]
figura:
  src: /figuras/nombre-del-articulo/principal.svg
  alt: "Descripción de la figura para quien no la ve."
  pie: "Figura 1. …"
  # interactiva: nombre-del-articulo-principal   # opcional, véase abajo
fuentes:
  - nombre: Instituto Nacional de Estadística
    url: https://www.ine.es
periodo: 2015–2025
metodo: "Una o dos frases sobre el tratamiento de los datos."
repositorio: https://github.com/GiulioConsoli/…
---
```

3. Escribir el texto en Markdown debajo de la cabecera. Las figuras internas se insertan como HTML:

```html
<figure class="figura">
  <img src="/figuras/nombre-del-articulo/figura-2.svg" alt="…" loading="lazy" />
  <figcaption>Figura 2. …</figcaption>
</figure>
```

4. Subir los archivos al repositorio.

### Gráficos interactivos

Desde Python, con Plotly:

```python
fig.write_html("nombre-del-articulo-principal.html", include_plotlyjs=False, full_html=False)
```

Copiar el archivo a `src/figuras/` y poner su nombre (sin `.html`) en `figura.interactiva`.
La página cargará Plotly (copia local en `/vendor/`, versión fijada en `package-lock.json`) y
mostrará el gráfico interactivo; la imagen de `figura.src` queda como reserva para lectores sin
JavaScript, buscadores y vistas previas en redes.

### Borradores

`borrador: true` en la cabecera excluye el artículo del sitio (índices, RSS, sitemap).

## Temas

Los nombres visibles de los temas están en `src/lib/format.ts` (`TEMAS`). Un tema sin
artículos no genera página ni enlace.

## Desarrollo local (opcional)

Requiere Node.js 22.23.4 o superior (versión fijada en `.nvmrc`).

```sh
npm install
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera el sitio en dist/
```

## Licencia

El código del sitio se publica bajo licencia MIT (véase `LICENSE`). La licencia de los
textos y figuras de los artículos queda por decidir; hasta entonces, todos los derechos
reservados.
