export type Idioma = 'es' | 'en';

export const testi = {
  es: {
    navAnalisis: 'Análisis',
    navTemas: 'Temas',
    navAutores: 'Autores',
    ultimos: 'Últimos análisis',
    verTodos: 'Ver todos →',
    nessunAnalisi: 'Todavía no hay análisis publicados.',
    analisiPubblicati: 'análisis publicado',
    analisiPubblicatiPlural: 'análisis publicados',
    minLettura: 'min de lectura',
    aggiornato: 'actualizado el',
    datiMetodo: 'Datos y método',
    correlati: 'Relacionados',
    copiaLink: 'Copiar enlace',
    linkCopiato: 'Enlace copiado',
    copiaFallita: 'No se pudo copiar',
    fonti: 'Fuentes',
    periodo: 'Periodo',
    metodo: 'Método',
    codice: 'Código',
    autori: 'Autores',
    temi: 'Temas',
    lingua: 'Idioma',
    codiceSorgente: 'Código fuente',
  },
  en: {
    navAnalisis: 'Analysis',
    navTemas: 'Topics',
    navAutores: 'Authors',
    ultimos: 'Latest analysis',
    verTodos: 'View all →',
    nessunAnalisi: 'No analysis published yet.',
    analisiPubblicati: 'article published',
    analisiPubblicatiPlural: 'articles published',
    minLettura: 'min read',
    aggiornato: 'updated',
    datiMetodo: 'Data and method',
    correlati: 'Related analysis',
    copiaLink: 'Copy link',
    linkCopiato: 'Link copied',
    copiaFallita: 'Could not copy link',
    fonti: 'Sources',
    periodo: 'Period',
    metodo: 'Method',
    codice: 'Code',
    autori: 'Authors',
    temi: 'Topics',
    lingua: 'Language',
    codiceSorgente: 'Source code',
  },
} as const;

export function t(lang: Idioma) {
  return testi[lang];
}

const sezioni = [
  { es: '/analisis', en: '/en/analysis' },
  { es: '/temas', en: '/en/topics' },
  { es: '/autores', en: '/en/authors' },
];

// Calcola l'URL della stessa sezione nell'altra lingua.
export function urlAltraLingua(pathname: string, destinazione: Idioma): string {
  if (destinazione === 'en') {
    if (pathname === '/') return '/en/';

    for (const sezione of sezioni) {
      if (pathname === sezione.es || pathname.startsWith(`${sezione.es}/`)) {
        return `${sezione.en}${pathname.slice(sezione.es.length)}`;
      }
    }

    return '/en/';
  }

  if (pathname === '/en' || pathname === '/en/') return '/';

  for (const sezione of sezioni) {
    if (pathname === sezione.en || pathname.startsWith(`${sezione.en}/`)) {
      return `${sezione.es}${pathname.slice(sezione.en.length)}` || '/';
    }
  }

  return '/';
}
