/* Biblioteca de componentes e iconos para el generador estático */
'use strict';

/* ------------------------------------------------------------------ iconos */
const I = {
  chev: '<svg class="nav__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  chevDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8"/></svg>',
  cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-6.7 6-9"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v6.5L4.6 18a2 2 0 001.7 3h11.4a2 2 0 001.7-3L14 9.5V3"/><path d="M7 15h10"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18 15 15 0 010-18z"/></svg>',
  utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 3v7a3 3 0 003 3v8M7 3v7M10 3v7"/><path d="M18 3c-1.7 1.2-2.5 3-2.5 5.5S16.3 13 18 13v8"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2l5 3-1.5 5L16 9v13H8V9l-2.5 1L4 5l5-3a3 3 0 006 0z"/></svg>',
  bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 10h18M7 21v-2M17 21v-2"/><circle cx="7.5" cy="14" r="1"/><circle cx="16.5" cy="14" r="1"/></svg>',
  swim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 17c1.5 0 1.5 1.5 3 1.5S6.5 17 8 17s1.5 1.5 3 1.5S12.5 17 14 17s1.5 1.5 3 1.5S18.5 17 20 17"/><path d="M6 14l5-4-3-2.5"/><circle cx="17" cy="6" r="2"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.2 6.1L20 10l-5.8 1.9L12 18l-2.2-6.1L4 10l5.8-1.9L12 2z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M7 21V10M12 21V4M17 21v-7"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L21 2M17 6l3 3M14 9l2.5 2.5"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="15" r="6"/><path d="M8.2 10L5 2h5l2.5 5.5M15.8 10L19 2h-5"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8a2 2 0 012-2h2l1.5-2h7L17 6h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5M11 8v6M8 11h6"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11v2a2 2 0 002 2h1l9 5V4L6 9H5a2 2 0 00-2 2z"/><path d="M18.5 8.5a5 5 0 010 7"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22C18.34 21.2 22 17.06 22 12.06z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.6-.46-5.32a2.78 2.78 0 00-1.95-1.96C18.88 4.25 12 4.25 12 4.25s-6.88 0-8.59.47a2.78 2.78 0 00-1.95 1.96C1 8.4 1 12 1 12s0 3.6.46 5.32a2.78 2.78 0 001.95 1.96c1.71.47 8.59.47 8.59.47s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.96C23 15.6 23 12 23 12zM9.75 15.27V8.73L15.5 12z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23zm-1.16 17.52h1.83L7.02 4.13H5.05z"/></svg>'
};

/* Hoja de roble decorativa (Quercus = roble) */
const LEAF = '<svg class="__CLS__" viewBox="0 0 200 200" fill="currentColor" aria-hidden="true" focusable="false"><path d="M100 8c-5 14-14 22-27 25 6 5 9 11 9 18-13-6-25-5-36 3 9 3 15 8 18 15-14-2-25 2-33 12 10 1 17 5 21 12-14 2-24 9-29 21 11-2 19 0 25 5-12 7-19 17-20 30 10-5 19-6 27-3-8 10-11 21-8 33 8-8 17-12 26-12-3 12-1 23 7 32 5-10 12-17 21-20-1 5-1 10 1 15h10c-1-16-1-32 1-48 8-6 16-13 24-21-10 4-19 7-27 8 1-6 2-11 4-17 9-4 18-10 26-18-9 3-17 6-25 7 1-6 3-12 5-17 8-5 15-11 21-19-7 3-14 6-21 7 2-6 4-11 7-17 12-13 18-28 19-45-13 6-24 15-33 27-2-8-6-15-13-22z"/></svg>';

/* ------------------------------------------------------------ utilidades */
const esc = (s) => String(s).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (o) => Object.keys(o || {}).filter(k => o[k] !== undefined && o[k] !== null && o[k] !== false)
  .map(k => `${k}="${String(o[k]).replace(/"/g, '&quot;')}"`).join(' ');
const IMG = (file) => `assets/img/${file}`;
const cls = (...a) => a.filter(Boolean).join(' ');
const isExt = (h) => /^https?:|^mailto:|^tel:/.test(h);
const linkAttrs = (h) => isExt(h) && !/^mailto:|^tel:/.test(h) ? ' target="_blank" rel="noopener"' : '';

/* Imagen responsive con lazy-loading y proporción declarada */
function img(file, alt, opt) {
  opt = opt || {};
  return `<img src="${IMG(file)}" alt="${esc(alt || '')}"${opt.eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${opt.width ? ` width="${opt.width}"` : ''}${opt.height ? ` height="${opt.height}"` : ''}${opt.cls ? ` class="${opt.cls}"` : ''}>`;
}

const leaf = (c) => LEAF.replace('__CLS__', c);
const arrowLink = (href, text) => `<a class="arrow" href="${href}"${linkAttrs(href)}>${esc(text)} ${I.arrow}</a>`;

/* -------------------------------------------------------- componentes UI */

function shead(o) {
  return `<div class="${cls('shead', o.center && 'shead--center', o.wide && 'shead--wide', 'reveal')}">
      ${o.eyebrow ? `<p class="eyebrow">${esc(o.eyebrow)}</p>` : ''}
      <h2>${o.title}</h2>
      ${o.lede ? `<p>${o.lede}</p>` : ''}
    </div>`;
}

function btnRow(buttons, extra) {
  if (!buttons || !buttons.length) return '';
  return `<div class="${cls('btn-row', extra)}">${buttons.map(b =>
    `<a class="btn btn--${b.style || 'primary'}" href="${b.href}"${linkAttrs(b.href)}>${esc(b.text)}${b.icon ? ' ' + I[b.icon] : ''}</a>`).join('')}</div>`;
}

function fcard(c, i) {
  return `<article class="fcard reveal ${i !== undefined ? 'reveal-d' + (i % 4) : ''}" style="--c:${c.color || 'var(--green)'}">
      ${c.num ? `<div class="fcard__num">${c.num}</div>` : c.icon ? `<div class="fcard__icon">${I[c.icon] || I.spark}</div>` : ''}
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      ${c.link ? arrowLink(c.link.href, c.link.text) : ''}
    </article>`;
}

function card(c, i) {
  const inner = `${c.image ? `<div class="card__media">${img(c.image, c.imageAlt || c.title)}${c.tag ? `<span class="card__tag">${esc(c.tag)}</span>` : ''}</div>` : ''}
      <div class="card__body">
        ${c.date ? `<span class="card__date">${esc(c.date)}</span>` : ''}
        <h3>${c.title}</h3>
        ${c.text ? `<p>${c.text}</p>` : ''}
        ${c.link ? arrowLink(c.link.href, c.link.text || 'Leer más') : ''}
      </div>`;
  return `<article class="card reveal ${i !== undefined ? 'reveal-d' + (i % 4) : ''}"${c.cat ? ` data-cat="${c.cat}"` : ''}>${inner}</article>`;
}

function lcard(c) {
  return `<a class="lcard reveal" href="${c.href}"${linkAttrs(c.href)} style="--c:${c.color || 'var(--green)'}">
      <span class="lcard__icon">${I[c.icon] || I.doc}</span>
      <span><strong>${c.title}</strong><span>${c.text || ''}</span></span>
      <span class="lcard__go">${I.arrow}</span>
    </a>`;
}

function stage(s, i) {
  return `<article class="stage reveal reveal-d${i % 4}" style="--c:${s.color}">
      <div class="stage__top">
        <span class="stage__age">${esc(s.age)}</span>
        <h3>${s.title}</h3>
      </div>
      <div class="stage__body">
        <p>${s.text}</p>
        ${s.points ? `<ul>${s.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
        ${s.link ? arrowLink(s.link.href, s.link.text) : ''}
      </div>
    </article>`;
}

function split(o) {
  return `<div class="${cls('split', o.alt && 'split--alt')}">
      <div class="split__media split__media--frame reveal">
        ${img(o.image, o.imageAlt || '')}
        ${o.badge ? `<div class="split__badge"><strong>${o.badge.value}</strong><span>${o.badge.label}</span></div>` : ''}
      </div>
      <div class="reveal reveal-d1">
        ${o.eyebrow ? `<p class="eyebrow">${esc(o.eyebrow)}</p>` : ''}
        ${o.title ? `<h2>${o.title}</h2>` : ''}
        <div class="prose mt-1">${o.body}</div>
        ${o.checks ? checks(o.checks, 'mt-2') : ''}
        ${btnRow(o.buttons, 'mt-2')}
      </div>
    </div>`;
}

function checks(items, extra) {
  return `<ul class="${cls('checks', extra)}">${items.map(t => `<li>${I.check}<span>${t}</span></li>`).join('')}</ul>`;
}

function stats(items) {
  return `<div class="stats reveal">${items.map(s =>
    `<div class="stat"><strong${s.count ? ` data-count="${s.count}"${s.suffix ? ` data-suffix="${s.suffix}"` : ''}` : ''}>${s.value}</strong><span>${s.label}</span></div>`).join('')}</div>`;
}

function faq(items) {
  return `<div class="faq">${items.map((f, i) => `<div class="faq__item reveal">
      <h3><button class="faq__btn" id="fq-b-${f.id || i}" aria-expanded="false" aria-controls="fq-p-${f.id || i}">
        <span>${f.q}</span><span class="faq__sign">${I.chevDown}</span></button></h3>
      <div class="faq__panel" id="fq-p-${f.id || i}" role="region" aria-labelledby="fq-b-${f.id || i}">
        <div class="faq__panel-in">${f.a}</div>
      </div>
    </div>`).join('')}</div>`;
}

function docs(items) {
  return `<div class="docs reveal">${items.map(d => `<a class="doc" href="${d.href}"${linkAttrs(d.href)}>
      <span class="doc__icon">${I[d.icon] || I.doc}</span>
      <span><strong>${d.title}</strong><span>${d.text || 'Documento externo'}</span></span>
      <span class="doc__go">${d.icon === 'ext' ? I.ext : I.download}</span>
    </a>`).join('')}</div>`;
}

function gallery(items) {
  return `<div class="gal">${items.map(g => `<a class="gal__item" href="${IMG(g.image)}" data-full="${IMG(g.image)}" data-caption="${esc(g.title + (g.text ? ' — ' + g.text : ''))}">
      ${img(g.image, g.title)}
      <span class="gal__cap">${esc(g.title)}${g.text ? `<small>${esc(g.text)}</small>` : ''}
        <span class="gal__zoom">${I.zoom}Ampliar</span>
      </span>
    </a>`).join('')}</div>`;
}

function certs(items) {
  return `<div class="certs reveal">${items.map(c =>
    `<figure class="cert" title="${esc(c.title)}">${img(c.image, c.title)}</figure>`).join('')}</div>`;
}

function table(head, rows) {
  return `<div class="tablewrap reveal"><table class="tbl">
      <thead><tr>${head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row" style="font-weight:700;color:var(--ink)">${c}</th>` : `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
}

function cta(o) {
  return `<div class="wrap"><div class="cta reveal">
      ${leaf('cta__leaf')}
      <div class="cta__in">
        <div>
          ${o.eyebrow ? `<p class="eyebrow">${esc(o.eyebrow)}</p>` : ''}
          <h2>${o.title}</h2>
          ${o.text ? `<p>${o.text}</p>` : ''}
        </div>
        ${btnRow(o.buttons)}
      </div>
    </div></div>`;
}

function banners(items) {
  return `<div class="banners">${items.map(b =>
    `<a class="banner reveal" href="${b.href}"${linkAttrs(b.href)} aria-label="${esc(b.alt)}">${img(b.image, b.alt)}</a>`).join('')}</div>`;
}

function note(html) { return `<div class="note reveal">${html}</div>`; }

function prose(html) { return `<div class="prose reveal">${html}</div>`; }

function grid(n, inner) { return `<div class="grid grid--${n}">${inner}</div>`; }

/* Sección genérica */
function sec(o) {
  return `<section class="${cls('sec', o.variant && 'sec--' + o.variant, o.cls)}"${o.id ? ` id="${o.id}"` : ''}>
      <div class="${cls('wrap', o.narrow && 'wrap--narrow')}">
        ${o.head ? shead(o.head) : ''}
        ${o.body}
      </div>
    </section>`;
}

module.exports = {
  I, LEAF, leaf, esc, attr, IMG, img, cls, isExt, linkAttrs, arrowLink,
  shead, btnRow, fcard, card, lcard, stage, split, checks, stats, faq, docs,
  gallery, certs, table, cta, banners, note, prose, grid, sec
};
