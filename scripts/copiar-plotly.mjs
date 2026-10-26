// Copia la versión fijada de Plotly (package-lock.json) desde node_modules a
// public/vendor/, para servirla desde el propio sitio sin depender de un CDN.
// Se ejecuta automáticamente antes de cada build (script "prebuild").
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const raiz = dirname(dirname(fileURLToPath(import.meta.url)));

const origen = require.resolve('plotly.js-dist-min/plotly.min.js');
const destinoDir = join(raiz, 'public', 'vendor');
const destino = join(destinoDir, 'plotly.min.js');

if (!existsSync(destinoDir)) mkdirSync(destinoDir, { recursive: true });
copyFileSync(origen, destino);

const { version } = require('plotly.js-dist-min/package.json');
console.log(`Plotly ${version} copiado a public/vendor/plotly.min.js`);
