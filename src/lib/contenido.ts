// Acceso a los artículos publicados, ordenados del más reciente al más antiguo.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Idioma } from './i18n';

export type Analisis = CollectionEntry<'analisis'>;

// El archivo inglés termina en -en, pero la URL mantiene el slug común.
export function slugDe(entrada: Analisis): string {
  return entrada.id.replace(/-en$/, '');
}

export async function analisisPublicados(idioma: Idioma = 'es'): Promise<Analisis[]> {
  const todos = await getCollection(
    'analisis',
    ({ data }) => !data.borrador && data.idioma === idioma,
  );

  return todos.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

// Temas con al menos un artículo publicado en la lengua solicitada.
export async function temasConArticulos(idioma: Idioma = 'es'): Promise<Map<string, number>> {
  const articulos = await analisisPublicados(idioma);
  const recuento = new Map<string, number>();

  for (const a of articulos) {
    for (const t of a.data.temas) {
      recuento.set(t, (recuento.get(t) ?? 0) + 1);
    }
  }

  return recuento;
}
