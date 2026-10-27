import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada análisis es un archivo .md en src/content/analisis/.
// El nombre del archivo (sin .md) es la URL: /analisis/<nombre>.
const analisis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/analisis' }),
  schema: z.object({
    titulo: z.string(),
    tituloSeo: z.string().optional(),
    // Dos frases, como máximo. Aparece bajo el título y en las tarjetas.
    sumario: z.string(),
    idioma: z.enum(['es', 'en']).default('es'),
    // Uno o más autores, en el orden en que deben aparecer.
    autores: z.array(reference('autores')).min(1),
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    temas: z.array(z.string()).min(1),
    // Figura principal.
    //   src: imagen estática en public/figuras/ (ruta absoluta desde /).
    //   interactiva: nombre (sin extensión) de un archivo en src/figuras/
    //     exportado desde Python con
    //     fig.write_html("nombre.html", include_plotlyjs=False, full_html=False)
    //     Si está presente, la página carga Plotly y muestra el gráfico
    //     interactivo en lugar de la imagen (que queda como reserva).
    figura: z.object({
      src: z.string(),
      alt: z.string(),
      pie: z.string().optional(),
      interactiva: z.string().optional(),
    }),
    // Recuadro "Datos y método" al final del artículo.
    fuentes: z
      .array(
        z.object({
          nombre: z.string(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
    periodo: z.string().optional(),
    metodo: z.string().optional(),
    repositorio: z.string().url().optional(),
    // true = no se publica (ni en índices, ni en RSS, ni en el sitemap).
    borrador: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

// Cada autor es un archivo .md en src/content/autores/.
// El cuerpo del archivo es la biografía.
const autores = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/autores' }),
  schema: z.object({
    nombre: z.string(),
    rol: z.string(),
    idioma: z.enum(['es', 'en']).default('es'),
    // Iniciales para el monograma (p. ej. "GC"). Si hay foto, se usa la foto.
    iniciales: z.string().max(3),
    foto: z.string().optional(),
    enlaces: z
      .array(
        z.object({
          etiqueta: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
  }),
});

export const collections = { analisis, autores };
