// Utilidades de formato compartidas por las páginas.

const fechaLarga = new Intl.DateTimeFormat('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const fechaCorta = new Intl.DateTimeFormat('es-ES', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function formatearFecha(fecha: Date, estilo: 'larga' | 'corta' = 'larga'): string {
  return estilo === 'larga' ? fechaLarga.format(fecha) : fechaCorta.format(fecha);
}

export function fechaISO(fecha: Date): string {
  return fecha.toISOString().slice(0, 10);
}

// Minutos de lectura a partir del cuerpo en Markdown (≈ 220 palabras/minuto).
export function tiempoLectura(cuerpo: string | undefined): number {
  if (!cuerpo) return 1;
  const palabras = cuerpo
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_`>\[\]()!-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 220));
}

// "vivienda" -> "Vivienda"; "politica-economica" -> "Política económica" no se
// puede inferir: los nombres bonitos de los temas se definen en TEMAS.
export const TEMAS: Record<string, string> = {
  elecciones: 'Elecciones',
  vivienda: 'Vivienda',
  economia: 'Economía',
  demografia: 'Demografía',
  opinion: 'Opinión pública',
  instituciones: 'Instituciones',
  internacional: 'Internacional',
};

export function nombreTema(slug: string): string {
  return TEMAS[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1);
}
