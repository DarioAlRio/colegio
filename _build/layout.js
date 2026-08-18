/* Estructura común de todas las páginas: head, cabecera, cajón móvil y pie */
'use strict';

const { I, leaf, esc, img, cls, linkAttrs, IMG } = require('./lib');
const { NAV, QUICKLINKS, SOCIAL, SITE } = require('./nav');

/* ------------------------------------------------------------- mega menú */
function megaColumn(col) {
  return `<div class="mega__col">
        <p class="mega__col-title">${esc(col.title)}</p>
        <ul>${col.items.map(it => `<li><a class="${it.ext ? 'mega__ext' : ''}" href="${it.href}"${linkAttrs(it.href)}>${esc(it.label)}${it.sub ? `<small>${esc(it.sub)}</small>` : ''}</a></li>`).join('')}</ul>
      </div>`;
}

function navBar(current) {
  return `<nav class="nav" aria-label="Navegación principal">
      <ul class="nav__list">
        ${NAV.map((g, i) => {
    const active = g.columns.some(c => c.items.some(it => it.href.split('#')[0] === current));
    return `<li class="nav__item has-mega">
          <button class="nav__link" type="button" aria-expanded="false" aria-controls="mega-${g.id}"${active ? ' aria-current="page"' : ''}>${esc(g.label)}${I.chev}</button>
          <div class="mega" id="mega-${g.id}">
            <div class="wrap mega__in">
              <div class="mega__intro">
                <h3>${esc(g.intro.title)}</h3>
                <p>${esc(g.intro.text)}</p>
                <a class="arrow" href="${g.intro.link.href}"${linkAttrs(g.intro.link.href)}>${esc(g.intro.link.text)} ${I.arrow}</a>
              </div>
              <div class="mega__cols${g.cols === 2 ? ' mega__cols--2' : ''}">
                ${g.columns.map(megaColumn).join('')}
              </div>
            </div>
          </div>
        </li>`;
  }).join('')}
      </ul>
    </nav>`;
}

/* ---------------------------------------------------------- cajón móvil */
function drawer(current) {
  return `<div class="scrim" id="scrim"></div>
  <aside class="drawer" id="drawer" aria-label="Menú de navegación">
    <div class="drawer__head">
      <a href="index.html" aria-label="Colegio Quercus, inicio">${img(SITE.logo, 'Colegio Quercus')}</a>
      <button class="drawer__close" type="button" aria-label="Cerrar menú">${I.close}</button>
    </div>
    <div class="drawer__body">
      <a class="acc__solo" href="index.html"${current === 'index.html' ? ' aria-current="page"' : ''}>Inicio</a>
      ${NAV.map(g => `<div class="acc__item">
        <button class="acc__btn" type="button" aria-expanded="false" aria-controls="acc-${g.id}">${esc(g.label)}${I.chevDown}</button>
        <div class="acc__panel" id="acc-${g.id}">
          <div class="acc__panel-in">
            ${g.columns.map(col => `<p class="acc__group">${esc(col.title)}</p>
              <ul>${col.items.map(it => `<li><a href="${it.href}"${linkAttrs(it.href)}${it.href === current ? ' aria-current="page"' : ''}>${esc(it.label)}</a></li>`).join('')}</ul>`).join('')}
          </div>
        </div>
      </div>`).join('')}
    </div>
    <div class="drawer__foot">
      <a class="btn btn--gold" href="matriculacion.html">Admisiones 26/27</a>
      <a class="btn btn--ghost" href="${SITE.phoneHref}">${I.phone} ${SITE.phone}</a>
      <p class="drawer__meta">C/ Valle Inclán, 12 · Boadilla del Monte</p>
    </div>
  </aside>`;
}

/* ------------------------------------------------------------- cabecera */
function header(current) {
  return `<header class="hdr" id="hdr">
    <div class="hdr__top">
      <div class="wrap hdr__top-in">
        <a class="hdr__top-phone" href="${SITE.phoneHref}">${I.phone}<span>${SITE.phone}</span></a>
        <a href="mailto:${SITE.email}">${I.mail}<span>${SITE.email}</span></a>
        <a href="como-llegar.html">${I.pin}<span>C/ Valle Inclán, 12 · Boadilla del Monte</span></a>
        <div class="hdr__top-right">
          ${QUICKLINKS.map(q => `<a class="hdr__pill" href="${q.href}"${linkAttrs(q.href)}>${esc(q.label)}</a>`).join('')}
          <span class="hdr__social">${SOCIAL.map(s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${I[s.icon]}</a>`).join('')}</span>
        </div>
      </div>
    </div>
    <div class="hdr__bar">
      <div class="wrap hdr__bar-in">
        <a class="logo" href="index.html" aria-label="Colegio Quercus, inicio">
          <img src="${IMG(SITE.logo)}" alt="Colegio Quercus" width="190" height="59">
        </a>
        ${navBar(current)}
        <div class="hdr__cta">
          <a class="btn btn--gold btn--sm" href="matriculacion.html">Admisiones 26/27</a>
          <button class="burger" id="burger" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="drawer">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="brandbar" aria-hidden="true"></div>`;
}

/* ------------------------------------------------------------------ pie */
function footer() {
  const col = (title, items) => `<div>
      <h4>${title}</h4>
      <ul>${items.map(i => `<li><a href="${i.href}"${linkAttrs(i.href)}>${esc(i.label)}</a></li>`).join('')}</ul>
    </div>`;

  return `<footer class="ftr">
    <div class="brandbar" aria-hidden="true"></div>
    <div class="ftr__main">
      <div class="wrap ftr__grid">
        <div>
          <span class="ftr__logo">${img(SITE.logo, 'Colegio Quercus', { width: 190, height: 59 })}</span>
          <p>Centro concertado, laico y abierto en Boadilla del Monte. Acompañamos a cada alumno desde los 4 meses hasta la Universidad.</p>
          <div class="ftr__contact">
            <div>${I.pin}<span>${SITE.address}</span></div>
            <div>${I.phone}<a href="${SITE.phoneHref}">${SITE.phone}</a></div>
            <div>${I.mail}<a href="mailto:${SITE.email}">${SITE.email}</a></div>
            <div>${I.clock}<span>${SITE.hours}</span></div>
          </div>
          <div class="ftr__social">
            ${SOCIAL.map(s => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${I[s.icon]}</a>`).join('')}
          </div>
        </div>
        ${col('El Colegio', [
    { href: 'quienes-somos.html', label: '¿Quiénes somos?' },
    { href: 'proyecto-educativo.html', label: 'Proyecto educativo' },
    { href: 'que-ofrecemos.html', label: 'Oferta educativa' },
    { href: 'instalaciones.html', label: 'Instalaciones' },
    { href: 'distinciones.html', label: 'Distinciones' },
    { href: 'organigrama.html', label: 'Organigrama' }
  ])}
        ${col('Familias', [
    { href: 'familias.html', label: 'Información a las familias' },
    { href: 'comedor.html', label: 'Comedor' },
    { href: 'uniforme.html', label: 'Uniforme' },
    { href: 'extraescolares.html', label: 'Extraescolares' },
    { href: 'servicios-complementarios.html', label: 'Servicios complementarios' },
    { href: 'https://ampaquercus.com/', label: 'AMPA Quercus' }
  ])}
        ${col('Admisiones y contacto', [
    { href: 'matriculacion.html', label: 'Matriculación 26/27' },
    { href: 'becas.html', label: 'Ayudas y becas' },
    { href: 'secretaria.html', label: 'Secretaría' },
    { href: 'contacto.html', label: 'Consúltanos' },
    { href: 'como-llegar.html', label: '¿Cómo llegar?' },
    { href: 'trabaja-con-nosotros.html', label: 'Trabaja con nosotros' }
  ])}
      </div>
      <div class="wrap ftr__badges">
        ${img('idiomas-quercus-1.png', 'Programa de idiomas del Colegio Quercus')}
        ${img('certmicole2024.png', 'Uno de los mejores colegios según MiCole')}
        ${img('certbanderaecoescuela.jpg', 'Bandera verde Ecoescuela')}
      </div>
    </div>
    <div class="ftr__bottom">
      <div class="wrap ftr__bottom-in">
        <p>© <span data-year>2026</span> Colegio Quercus · Cooperativa Avantis S. Coop. Mad.</p>
        <nav class="ftr__legal" aria-label="Enlaces legales">
          <a href="https://www.colegioquercus.com/wp-content/uploads/2021/09/COLEGIO_QUERCUS_AVANTIS_SC_Politica_de_PRIVACIDAD_PD_WEB_FORM.pdf" target="_blank" rel="noopener">Política de privacidad</a>
          <a href="https://www.colegioquercus.com/wp-content/uploads/2021/09/COLEGIO_QUERCUS_AVANTIS_SC_Politica_de_cookies_PD_COOKIE_CAPTURE.pdf" target="_blank" rel="noopener">Política de cookies</a>
          <a href="https://www.colegioquercus.com/wp-content/uploads/2021/09/COLEGIO_QUERCUS_AVANTIS_SC_Aviso_legal.pdf" target="_blank" rel="noopener">Aviso legal</a>
          <a href="https://www.colegioquercus.com/canal-del-informante/" target="_blank" rel="noopener">Canal del informante</a>
          <a href="https://www.colegioquercus.com/canal-denuncia-drogas" target="_blank" rel="noopener">Buzón denuncia drogas CM</a>
        </nav>
      </div>
    </div>
  </footer>`;
}

/* --------------------------------------------------------------- página */
function page(o) {
  const title = o.title === 'Inicio'
    ? 'Colegio Quercus · Boadilla del Monte (Madrid)'
    : `${o.title} · Colegio Quercus`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(o.description)}">
<meta name="theme-color" content="#005435">
<meta name="format-detection" content="telephone=no">
<link rel="canonical" href="https://www.colegioquercus.com/${o.file === 'index.html' ? '' : o.file}">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="Colegio Quercus">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(o.description)}">
<meta property="og:image" content="assets/img/${o.ogImage || 'webquercusninos2.jpg'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/img/favicon.jpg">
<link rel="apple-touch-icon" href="assets/img/favicon.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Raleway:wght@400;500;600;700&family=Newsreader:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/site.css">
${o.file === 'index.html' ? `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"School","name":"Colegio Quercus","url":"https://www.colegioquercus.com/","telephone":"+34916338516","email":"direccion@colegioquercus.com","address":{"@type":"PostalAddress","streetAddress":"Calle Valle Inclán, 12","postalCode":"28660","addressLocality":"Boadilla del Monte","addressRegion":"Madrid","addressCountry":"ES"},"sameAs":["https://www.facebook.com/ColegioQuercus/","https://www.instagram.com/colegioquercus/","https://www.youtube.com/ColegioQuercusVideo","https://twitter.com/ColegioQuercus"]}
</script>` : ''}
</head>
<body>
<a class="skip" href="#main">Saltar al contenido</a>
${header(o.file)}
<main id="main">
${o.body}
</main>
${footer()}
${drawer(o.file)}
<div class="lbox" id="lbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
  <button class="lbox__btn lbox__close" type="button" aria-label="Cerrar">${I.close}</button>
  <button class="lbox__btn lbox__prev" type="button" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
  <button class="lbox__btn lbox__next" type="button" aria-label="Siguiente"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>
  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="">
  <p class="lbox__cap"></p>
</div>
<button class="totop" id="totop" type="button" aria-label="Volver arriba">${I.arrowUp}</button>
<script src="assets/js/site.js" defer></script>
</body>
</html>`;
}

/* ------------------------------------------------------- héroe interior */
function phero(o) {
  const crumbs = (o.crumbs || []).map(c => c.href
    ? `<a href="${c.href}">${esc(c.label)}</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>`
    : `<span>${esc(c.label)}</span>`).join('');

  return `<section class="${cls('phero', !o.image && 'phero--plain')}">
    ${o.image ? `<div class="phero__media">${img(o.image, '', { eager: true })}</div>` : ''}
    ${leaf('phero__leaf')}
    <div class="wrap">
      <nav class="crumbs" aria-label="Miga de pan"><a href="index.html">Inicio</a><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>${crumbs}</nav>
      ${o.eyebrow ? `<p class="eyebrow">${esc(o.eyebrow)}</p>` : ''}
      <h1>${o.title}</h1>
      ${o.lede ? `<p class="phero__lede">${o.lede}</p>` : ''}
    </div>
  </section>`;
}

module.exports = { page, phero, header, footer, drawer };
