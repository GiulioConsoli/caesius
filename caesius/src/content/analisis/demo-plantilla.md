---
titulo: "Artículo de demostración: así se ve un análisis en Caesius"
sumario: "Esta página existe sólo para comprobar la plantilla antes del primer análisis real. Se borra con el archivo src/content/analisis/demo-plantilla.md."
autores: [giulio-consoli]
fecha: 2026-10-26
temas: [elecciones]
figura:
  src: /figuras/demo/serie.svg
  alt: "Gráfico de líneas con dos series ficticias entre 2016 y 2025; la serie A, en azul, sube de 10 a 30; la serie B, en gris, se mantiene cerca de 12."
  pie: "Figura 1. Dos series inventadas. La figura principal va siempre antes del texto."
fuentes:
  - nombre: Datos inventados para la demostración
periodo: 2016–2025
metodo: "Sin método: los valores se han escrito a mano para rellenar el gráfico."
repositorio: https://github.com/GiulioConsoli/Caesius
---

**Este artículo es una demostración.** No contiene análisis alguno: muestra cómo se ven el título, el sumario, la figura principal, el texto, una tabla, una cita y el recuadro *Datos y método*. Cuando exista el primer análisis real, basta con borrar este archivo.

## Un título de sección

El texto va en una columna de unos sesenta y ocho caracteres de ancho, con interlineado amplio. Los enlaces se ven [en azul](/analisis), el único color de acento del sitio. Las negritas se reservan para **lo que importa**; las cursivas, para *términos* y títulos.

Un segundo párrafo, para ver el espacio entre párrafos. Las cifras dentro del texto se escriben con separador de miles a la española (1.234.567) y coma decimal (3,14).

### Una subsección

Las listas se usan con moderación:

- primer punto;
- segundo punto, algo más largo, para ver cómo se parte en dos líneas cuando la pantalla es estrecha;
- tercer punto.

## Figuras dentro del texto

Las figuras internas se escriben en HTML estándar dentro del Markdown, con la imagen en `public/figuras/<artículo>/`:

<figure class="figura">
  <img src="/figuras/demo/serie.svg" alt="La misma figura de demostración, repetida dentro del texto." loading="lazy" />
  <figcaption>Figura 2. Una figura interna. El pie va en monoespaciada y gris.</figcaption>
</figure>

## Tablas y citas

| Año | Serie A | Serie B |
|-----|--------:|--------:|
| 2023 | 25,1 | 16,8 |
| 2024 | 27,2 | 17,9 |
| 2025 | 29,0 | 17,4 |

> Una cita se marca con una línea azul a la izquierda. Se usa para reproducir textualmente una fuente, no para destacar frases propias.

---

Un separador horizontal (`---` en Markdown) se dibuja como una fila de marcas, el mismo motivo del logotipo.
