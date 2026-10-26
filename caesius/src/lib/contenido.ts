// Acceso a los artículos publicados, ordenados del más reciente al más antiguo.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Analisis = CollectionEntry<'analisis'>;

export async function analisisPublicados(): Promise<Analisis[]> {
  const todos = await getCollection('analisis', ({ data }) => !data.borrador);
  return todos.sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

// Temas con al menos un artículo publicado, con su recuento.
export async function temasConArticulos(): Promise<Map<string, number>> {
  const articulos = await analisisPublicados();
  const recuento = new Map<string, number>();
  for (const a of articulos) {
    for (const t of a.data.temas) recuento.set(t, (recuento.get(t) ?? 0) + 1);
  }
  return recuento;
}
