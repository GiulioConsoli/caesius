// Resolución de los autores de un artículo (uno o varios), en orden.
import { getEntries, type CollectionEntry } from 'astro:content';

export type Autor = CollectionEntry<'autores'>;

export async function autoresDe(entrada: CollectionEntry<'analisis'>): Promise<Autor[]> {
  return getEntries(entrada.data.autores);
}

// "Ana Pérez", "Ana Pérez y Luis Gómez", "Ana Pérez, Luis Gómez y Marta Ruiz"
export function nombresEnlazados(autores: Autor[]): { nombre: string; href: string }[] {
  return autores.map((a) => ({ nombre: a.data.nombre, href: `/autores/${a.id}` }));
}
