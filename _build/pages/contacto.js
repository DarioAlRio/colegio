'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, split, checks, faq, docs, gallery, table, cta, grid, arrowLink, note, prose } = L;
const { phero } = require('../layout');
const { FACILITIES } = require('../data');

const PRIVACY = 'https://www.colegioquercus.com/wp-content/uploads/2021/09/COLEGIO_QUERCUS_AVANTIS_SC_Politica_de_PRIVACIDAD_PD_WEB_FORM.pdf';

function contactForm(id, opts) {
  opts = opts || {};
  return `<form class="form reveal" id="${id}" data-demo novalidate>
      <h3>${opts.title || 'Escríbenos'}</h3>
      <p class="small muted mt-1" style="margin-bottom:1.5rem">${opts.text || 'Déjanos tus datos y contactaremos contigo lo antes posible.'}</p>
      <div class="field--row">
        <div class="field">
          <label for="${id}-nombre">Nombre y apellidos *</label>
          <input id="${id}-nombre" name="nombre" type="text" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="${id}-tel">Teléfono</label>
          <input id="${id}-tel" name="telefono" type="tel" autocomplete="tel" inputmode="tel">
        </div>
      </div>
      <div class="field">
        <label for="${id}-email">Correo electrónico *</label>
        <input id="${id}-email" name="email" type="email" autocomplete="email" required>
      </div>
      <div class="field">
        <label for="${id}-motivo">${opts.selectLabel || 'Motivo de la consulta'}</label>
        <select id="${id}-motivo" name="motivo">
          ${(opts.options || [
      'Admisiones y matriculación',
      'Escuela infantil (4 meses – 3 años)',
      'Infantil, Primaria o Secundaria',
      'Bachillerato y Bachillerato Dual',
      'Ciclos Formativos (FP)',
      'Comedor y servicios complementarios',
      'Extraescolares y campamentos',
      'Abonos de piscina',
      'Otros'
    ]).map(o => `<option>${o}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label for="${id}-mensaje">Tu mensaje</label>
        <textarea id="${id}-mensaje" name="mensaje" rows="5"></textarea>
      </div>
      <label class="consent" for="${id}-consent">
        <input id="${id}-consent" name="consent" type="checkbox" required>
        <span>He leído y acepto la <a href="${PRIVACY}" target="_blank" rel="noopener">Política de Privacidad</a>. Utilizaremos tus datos para responder a tu consulta.</span>
      </label>
      <button class="btn btn--primary btn--block" type="submit">${opts.submit || 'Enviar consulta'} ${I.arrow}</button>
      <p class="form__note">Los campos marcados con * son obligatorios. También puedes llamarnos al <a href="tel:+34916338516">91 633 85 16</a>.</p>
    </form>`;
}

const contactInfo = (email) => `<div class="cinfo reveal">
    <div class="cinfo__row">
      <span class="cinfo__icon">${I.pin}</span>
      <div><h4>Dirección</h4><p>Calle Valle Inclán, 12<br>28660 Boadilla del Monte (Madrid)</p></div>
    </div>
    <div class="cinfo__row">
      <span class="cinfo__icon">${I.phone}</span>
      <div><h4>Teléfono</h4><a href="tel:+34916338516">91 633 85 16</a></div>
    </div>
    <div class="cinfo__row">
      <span class="cinfo__icon">${I.mail}</span>
      <div><h4>Correo electrónico</h4><a href="mailto:${email}">${email}</a></div>
    </div>
    <div class="cinfo__row">
      <span class="cinfo__icon">${I.clock}</span>
      <div><h4>Horario de secretaría</h4><p>De lunes a viernes, de 9:00 a 17:00</p></div>
    </div>
  </div>`;

/* ---------------------------------------------------------------- Contacto */
const contacto = {
  file: 'contacto.html',
  title: 'Contacto',
  description: 'Contacta con el Colegio Quercus: dirección, teléfono, correo y formulario de cita previa para visitar el centro.',
  body: phero({
    eyebrow: 'Contacto',
    title: 'Consúltanos',
    lede: 'Estamos en Boadilla del Monte, en la calle Valle Inclán, 12. Llámanos, escríbenos o reserva una visita guiada por el centro.',
    crumbs: [{ label: 'Contacto' }]
  }) +

    sec({
      body: `<div class="contact">
        <div>
          ${contactInfo('direccion@colegioquercus.com')}
          <div class="grid grid--2 mt-3">
            ${[
        { icon: 'doc', color: 'var(--green)', title: 'Secretaría', text: 'secretaria@colegioquercus.com', href: 'mailto:secretaria@colegioquercus.com' },
        { icon: 'users', color: 'var(--sky-600)', title: 'Secretaría de Infantil', text: 'secretariainfantil@colegioquercus.com', href: 'mailto:secretariainfantil@colegioquercus.com' },
        { icon: 'cap', color: 'var(--coral)', title: 'Formación Profesional', text: 'fp@colegioquercus.com', href: 'mailto:fp@colegioquercus.com' },
        { icon: 'briefcase', color: 'var(--gold)', title: 'Trabaja con nosotros', text: 'rrhh@colegioquercus.com', href: 'trabaja-con-nosotros.html' }
      ].map(lcard).join('')}
          </div>
        </div>
        ${contactForm('form-general')}
      </div>`
    }) +

    sec({
      id: 'visita',
      variant: 'soft',
      head: {
        eyebrow: 'Ven a conocernos',
        title: '¿Quieres conocer el Colegio Quercus?',
        lede: 'Rellena el formulario de cita previa y contactaremos contigo lo antes posible para organizar la visita.',
        center: true
      },
      body: `<div style="max-width:760px;margin-inline:auto">${contactForm('form-visita', {
        title: 'Solicitar visita guiada',
        text: 'Indícanos la etapa que os interesa y os propondremos día y hora.',
        selectLabel: 'Etapa que os interesa',
        submit: 'Pedir cita',
        options: [
          'Escuela Infantil (4 meses – 3 años)',
          'Educación Infantil (3 – 6 años)',
          'Educación Primaria',
          'Educación Secundaria (ESO)',
          'Bachillerato',
          'Ciclos Formativos (FP)'
        ]
      })}</div>`
    }) +

    sec({
      id: 'mapa',
      head: { eyebrow: 'Dónde estamos', title: 'Calle Valle Inclán, 12 · Boadilla del Monte' },
      body: `<div class="mapwrap reveal">
        <iframe title="Mapa de situación del Colegio Quercus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.8895%2C40.4020%2C-3.8695%2C40.4160&amp;layer=mapnik&amp;marker=40.4090%2C-3.8795"></iframe>
      </div>
      <div class="btn-row mt-2 reveal">
        <a class="btn btn--ghost" href="https://www.google.com/maps/search/?api=1&query=Calle+Valle+Incl%C3%A1n+12+Boadilla+del+Monte" target="_blank" rel="noopener">Abrir en Google Maps ${I.ext}</a>
        <a class="btn btn--ghost" href="como-llegar.html">Cómo llegar ${I.arrow}</a>
      </div>`
    }) +

    sec({
      id: 'galeria',
      variant: 'warm',
      head: { eyebrow: 'Galería', title: 'El colegio en imágenes', center: true },
      body: gallery(FACILITIES.slice(0, 12))
    })
};

/* -------------------------------------------------------------- Cómo llegar */
const comoLlegar = {
  file: 'como-llegar.html',
  title: '¿Cómo llegar?',
  description: 'Cómo llegar al Colegio Quercus en Boadilla del Monte: coche por la M-50, autobús, metro ligero ML3 y bicicleta.',
  body: phero({
    eyebrow: 'Contacto',
    title: '¿Cómo llegar?',
    lede: 'Estamos en la calle Valle Inclán, 12, en Boadilla del Monte. Puedes llegar en coche, autobús, metro ligero o bicicleta.',
    crumbs: [{ label: 'Contacto' }, { label: '¿Cómo llegar?' }]
  }) +

    sec({
      body: grid(4, [
        `<article class="fcard reveal" style="--c:var(--green)">
          <div class="fcard__icon">${I.pin}</div>
          <h3>En coche</h3>
          <p>Por la Autovía de Circunvalación <strong>M-50</strong>:</p>
          <ul class="checks" style="font-size:.9rem">
            <li>${I.check}<span>Desde el sur: salida 69 hacia M-513</span></li>
            <li>${I.check}<span>Desde el norte: salida 72 hacia M-513</span></li>
            <li>${I.check}<span>También por la Carretera de Boadilla y la M-513 desde Brunete</span></li>
          </ul>
        </article>`,
        `<article class="fcard reveal reveal-d1" style="--c:var(--gold)">
          <div class="fcard__icon">${I.bus}</div>
          <h3>En autobús</h3>
          <p>Las paradas más cercanas son:</p>
          <ul class="checks" style="font-size:.9rem">
            <li>${I.check}<span>Avenida Condesa de Chinchón – Valle Inclán</span></li>
            <li>${I.check}<span>Valle Inclán – Pío Baroja</span></li>
          </ul>
        </article>`,
        `<article class="fcard reveal reveal-d2" style="--c:var(--coral)">
          <div class="fcard__icon">${I.compass}</div>
          <h3>En metro ligero</h3>
          <p>A través de la línea <strong>ML3</strong>, en las paradas:</p>
          <ul class="checks" style="font-size:.9rem">
            <li>${I.check}<span>Puerta de Boadilla (Avda. Siglo XXI con Glorieta Virgen de la Paz)</span></li>
            <li>${I.check}<span>Infante Don Luis (Avda. Siglo XXI con C/ Infante Don Luis)</span></li>
          </ul>
        </article>`,
        `<article class="fcard reveal reveal-d3" style="--c:var(--mint)">
          <div class="fcard__icon">${I.leaf}</div>
          <h3>En bicicleta</h3>
          <p>Os animamos a venir al Colegio Quercus en el medio de transporte más limpio.</p>
          <p>Tenéis un <strong>aparcabicis</strong> en el acceso de la avenida Condesa de Chinchón, de uso completamente libre.</p>
        </article>`
      ].join(''))
    }) +

    sec({
      variant: 'soft',
      body: `<div class="mapwrap reveal">
        <iframe title="Mapa de situación del Colegio Quercus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.8895%2C40.4020%2C-3.8695%2C40.4160&amp;layer=mapnik&amp;marker=40.4090%2C-3.8795"></iframe>
      </div>
      <div class="btn-row btn-row--center mt-2 reveal">
        <a class="btn btn--primary" href="https://www.google.com/maps/dir/?api=1&destination=Calle+Valle+Incl%C3%A1n+12+Boadilla+del+Monte" target="_blank" rel="noopener">Cómo llegar con Google Maps ${I.ext}</a>
      </div>`
    }) +

    sec({
      head: { eyebrow: 'Medios de transporte', title: 'Un vistazo rápido', center: true },
      body: `<div class="certs reveal" style="grid-template-columns:repeat(4,minmax(0,1fr))">
        <figure class="cert">${img('cochequercus.png', 'Llegar en coche')}</figure>
        <figure class="cert">${img('busquercus.png', 'Llegar en autobús')}</figure>
        <figure class="cert">${img('metroligeroquercus.png', 'Llegar en metro ligero')}</figure>
        <figure class="cert">${img('biciquercus.png', 'Llegar en bicicleta')}</figure>
      </div>`
    })
};

/* ------------------------------------------------------ Trabaja con nosotros */
const trabaja = {
  file: 'trabaja-con-nosotros.html',
  title: 'Trabaja con nosotros',
  description: 'Envía tu candidatura al Colegio Quercus de Boadilla del Monte. Recursos Humanos: rrhh@colegioquercus.com.',
  body: phero({
    eyebrow: 'Contacto',
    title: 'Trabaja con nosotros',
    lede: 'Buscamos profesionales estables, competentes y en formación continua. Si compartes nuestra forma de entender la educación, queremos conocerte.',
    crumbs: [{ label: 'Contacto' }, { label: 'Trabaja con nosotros' }]
  }) +

    sec({
      body: `<div class="contact">
        <div>
          ${contactInfo('rrhh@colegioquercus.com')}
          ${note('Para que tu candidatura llegue completa, indícanos en el mensaje tu titulación, la etapa o el departamento que te interesa y tu disponibilidad. Puedes adjuntar tu currículum enviándolo directamente a <a href="mailto:rrhh@colegioquercus.com">rrhh@colegioquercus.com</a>.')}
        </div>
        ${contactForm('form-rrhh', {
      title: 'Envíanos tu candidatura',
      text: 'Cuéntanos qué te gustaría aportar al proyecto del Colegio Quercus.',
      selectLabel: 'Área de interés',
      submit: 'Enviar candidatura',
      options: [
        'Educación Infantil',
        'Educación Primaria',
        'Educación Secundaria y Bachillerato',
        'Formación Profesional',
        'Orientación y atención a la diversidad',
        'Servicios (comedor, administración, mantenimiento)',
        'Actividades extraescolares',
        'Otros'
      ]
    })}
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Cómo trabajamos', title: 'Lo que encontrarás en el Quercus', center: true },
      body: grid(4, [
        { icon: 'users', color: 'var(--green)', title: 'Claustro estable', text: 'Un equipo consolidado que permite una educación verdaderamente individualizada.' },
        { icon: 'spark', color: 'var(--gold)', title: 'Formación continua', text: 'Certificaciones LEGO, TEI, e-Twinning y planes de formación interna.' },
        { icon: 'cpu', color: 'var(--coral)', title: 'Recursos avanzados', text: 'Aula Maker, laboratorios, aula multisensorial y departamento TIC propio.' },
        { icon: 'heart', color: 'var(--rose)', title: 'Modelo cooperativo', text: 'Titularidad de la cooperativa Avantis, formada por profesionales de la educación.' }
      ].map(fcard).join(''))
    })
};

/* ----------------------------------------------------------- Abonos piscina */
const piscina = {
  file: 'piscina.html',
  title: 'Abonos de piscina',
  description: 'Abonos de la piscina cubierta del Colegio Quercus para familias, alumnos, antiguos alumnos y usuarios externos.',
  ogImage: 'piscina.jpg',
  body: phero({
    image: 'piscina.jpg',
    eyebrow: 'Contacto',
    title: 'Abonos de piscina',
    lede: 'Ponemos a vuestra disposición la piscina, formes parte del centro o seas externo. Climatizada, semiolímpica y preparada con material para completar tus ejercicios.',
    crumbs: [{ label: 'Contacto' }, { label: 'Abonos de piscina' }]
  }) +

    sec({
      head: { eyebrow: 'Modalidades', title: 'Tenemos diferentes tipos de abonos' },
      body: grid(3, [
        { icon: 'users', color: 'var(--green)', title: 'Abono adulto de 10 baños', text: 'Para familiares de alumnos. Con caducidad hasta el fin del curso escolar vigente y sujeto a horario y normativa de la piscina.' },
        { icon: 'swim', color: 'var(--sky-600)', title: 'Abono de 10 baños', text: 'Para alumnos y exalumnos. Con caducidad hasta el fin del curso escolar vigente y sujeto a horario y normativa.' },
        { icon: 'globe', color: 'var(--coral)', title: 'Abono de 10 baños externos', text: 'Para usuarios ajenos al centro. Con caducidad hasta el fin del curso escolar vigente.' },
        { icon: 'calendar', color: 'var(--gold)', title: 'Abono trimestral', text: 'Válido durante el trimestre elegido del curso escolar vigente. Personal e intransferible.' },
        { icon: 'medal', color: 'var(--violet)', title: 'Abono de curso escolar', text: 'Validez de septiembre a junio del curso escolar vigente. Personal e intransferible.' },
        { icon: 'clock', color: 'var(--green-600)', title: 'Horario', text: 'De lunes a viernes de 18:30 a 20:00 h. Consultar calendario en el acceso a la instalación.' }
      ].map(fcard).join(''))
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Normativa', title: 'Antes de venir' },
      body: checks([
        'Será necesario el uso de gorro y escarpines o calzado específico.',
        'El usuario se acoge a la normativa establecida por el centro para el uso de las instalaciones.',
        'Los abonos son personales e intransferibles y caducan al final del curso escolar vigente.',
        'El horario puede variar según el calendario publicado en el acceso a la instalación.'
      ]) +
        note('Para más información y precios: <a href="tel:+34916338516">91 633 85 16</a>, por <a href="contacto.html">correo electrónico</a> o presencialmente en cualquiera de nuestras secretarías.')
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Quieres reservar un abono?',
      text: 'Escríbenos indicando la modalidad que te interesa y te confirmamos disponibilidad y precio.',
      buttons: [
        { text: 'Consultar abonos', href: 'contacto.html', style: 'gold' },
        { text: 'Ver instalaciones', href: 'instalaciones.html', style: 'light' }
      ]
    })}</section>`
};

module.exports = [contacto, comoLlegar, trabaja, piscina];
