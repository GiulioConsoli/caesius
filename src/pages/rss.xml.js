// Canal RSS: /rss.xml
import rss from '@astrojs/rss';
import { analisisPublicados } from '../lib/contenido';

export async function GET(context) {
  const articulos = await analisisPublicados();
  return rss({
    title: 'Caesius',
    description: 'Análisis cuantitativos sobre política, economía y sociedad.',
    site: context.site,
    items: articulos.map((a) => ({
      title: a.data.titulo,
      description: a.data.sumario,
      pubDate: a.data.fecha,
      link: `/analisis/${a.id}`,
      categories: a.data.temas,
    })),
    customData: '<language>es</language>',
  });
}
