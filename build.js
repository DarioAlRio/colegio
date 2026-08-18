#!/usr/bin/env node
/* Generador estático del sitio del Colegio Quercus.
   Uso: node build.js
   Escribe los .html en la raíz del proyecto; assets/ ya es estático. */
'use strict';

const fs = require('fs');
const path = require('path');
const { page } = require('./_build/layout');

const ROOT = __dirname;

const PAGES = [
  require('./_build/pages/home'),
  ...require('./_build/pages/colegio'),
  ...require('./_build/pages/estudios'),
  ...require('./_build/pages/familias'),
  ...require('./_build/pages/admisiones'),
  ...require('./_build/pages/vida'),
  ...require('./_build/pages/contacto')
];

/* --------------------------------------------------------------- escritura */
let written = 0;
const seen = new Set();

for (const p of PAGES) {
  if (seen.has(p.file)) throw new Error('Archivo duplicado: ' + p.file);
  seen.add(p.file);
  const html = page(p);
  fs.writeFileSync(path.join(ROOT, p.file), html, 'utf8');
  written++;
  console.log('  ✓ ' + p.file.padEnd(34) + (html.length / 1024).toFixed(1) + ' KB');
}

/* ------------------------------------------------------------- sitemap.xml */
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url><loc>https://www.colegioquercus.com/${p.file === 'index.html' ? '' : p.file}</loc><lastmod>${today}</lastmod><priority>${p.file === 'index.html' ? '1.0' : '0.7'}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');

fs.writeFileSync(path.join(ROOT, 'robots.txt'),
  'User-agent: *\nAllow: /\n\nSitemap: https://www.colegioquercus.com/sitemap.xml\n', 'utf8');

/* ------------------------------------------------ comprobación de enlaces */
const files = new Set(PAGES.map(p => p.file));
const problems = [];
for (const p of PAGES) {
  const html = fs.readFileSync(path.join(ROOT, p.file), 'utf8');
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map(m => m[1]);
  for (const h of hrefs) {
    if (/^(https?:|mailto:|tel:|#|assets\/)/.test(h)) continue;
    const target = h.split('#')[0];
    if (!target) continue;
    if (!files.has(target)) problems.push(`${p.file} → ${h}`);
  }
  const srcs = [...html.matchAll(/src="(assets\/img\/[^"]+)"/g)].map(m => m[1]);
  for (const s of srcs) {
    if (!fs.existsSync(path.join(ROOT, s))) problems.push(`${p.file} → falta imagen ${s}`);
  }
}

console.log(`\n${written} páginas generadas · sitemap.xml y robots.txt actualizados`);
if (problems.length) {
  console.log('\n⚠ Enlaces o recursos no resueltos:');
  [...new Set(problems)].forEach(x => console.log('   ' + x));
  process.exitCode = 1;
} else {
  console.log('✓ Todos los enlaces internos y las imágenes se resuelven correctamente.');
}
