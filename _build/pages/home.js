'use strict';
const L = require('../lib');
const { I, leaf, img, sec, shead, btnRow, card, stage, fcard, lcard, stats, certs, cta, banners, grid, arrowLink } = L;
const { NEWS, CERTS, STAGES } = require('../data');

const QUICK = [
  { color: 'var(--green)', icon: 'key', title: 'Admisiones 26/27', text: 'Plazos, requisitos y solicitud para las etapas concertadas y privadas.', href: 'matriculacion.html', link: 'Ver proceso' },
  { color: 'var(--gold)', icon: 'calendar', title: 'Ven a conocernos', text: 'Reserva una visita guiada y descubre el centro por dentro.', href: 'contacto.html#visita', link: 'Pedir cita' },
  { color: 'var(--sky-600)', icon: 'utensils', title: 'Comedor y menús', text: 'Dos cocinas propias y hasta 10 menús adaptados a cada necesidad.', href: 'comedor.html', link: 'Ver menús' },
  { color: 'var(--coral)', icon: 'cap', title: 'Ciclos Formativos', text: 'Grado Medio y Grado Superior con prácticas en empresa.', href: 'ciclos-formativos.html', link: 'Ver oferta' }
];

const REASONS = [
  { num: '01', color: 'var(--green)', title: 'Proyecto consolidado', text: 'Desde 1 año hasta la Universidad, un proyecto contrastado que abarca todas las etapas educativas.' },
  { num: '02', color: 'var(--gold)', title: 'Formación integral', text: 'Más allá de los contenidos: fortalecemos la autoestima y educamos en valores.' },
  { num: '03', color: 'var(--coral)', title: 'Profesorado comprometido', text: 'Cercanía e implicación del equipo docente: la ya famosa «Familia Quercus».' },
  { num: '04', color: 'var(--sky-600)', title: 'Comunicación abierta', text: 'Agendas electrónicas, plataformas propias, tutorías personalizadas y reuniones de familias.' },
  { num: '05', color: 'var(--violet)', title: 'Apostamos por los idiomas', text: 'Programas de inmersión lingüística y actividades que amplían el contenido en inglés y alemán.' },
  { num: '06', color: 'var(--green-600)', title: 'Estamos a la última', text: 'Aula LEGO Innovation Studio, aula multisensorial y metodologías activas en todas las etapas.' }
];

const PROJECTS = [
  { icon: 'cpu', color: 'var(--coral)', title: 'Aula Maker', text: 'Aula LEGO Innovation Studio con robótica, programación y competencias del siglo XXI.', href: 'aula-maker.html' },
  { icon: 'leaf', color: 'var(--mint)', title: 'Ecoescuela', text: 'Bandera verde y comité de alumnos trabajando por la sostenibilidad del centro.', href: 'ecoescuela.html' },
  { icon: 'heart', color: 'var(--rose)', title: 'Quercus Solidario', text: 'Campañas solidarias en las que participa toda la comunidad educativa.', href: 'solidario.html' },
  { icon: 'briefcase', color: 'var(--green)', title: '4.º ESO + Empresa', text: 'Estancias educativas de cuatro días en empresas e instituciones del entorno.', href: 'vida-quercus.html#eso-empresa' },
  { icon: 'globe', color: 'var(--sky-600)', title: 'Viajes de idiomas', text: 'Inmersión lingüística en Irlanda, Estados Unidos y otros destinos.', href: 'viajes-idiomas.html' },
  { icon: 'megaphone', color: 'var(--violet)', title: 'Quercuriosos', text: 'La revista digital escrita por y para nuestro alumnado.', href: 'vida-quercus.html#quercuriosos' }
];

const body = `
<section class="hero">
  <div class="hero__media">${img('webquercusninos2.jpg', '', { eager: true })}</div>
  ${leaf('hero__leaf')}
  <div class="wrap">
    <div class="hero__in">
      <p class="eyebrow">Boadilla del Monte · Madrid</p>
      <h1>Un colegio donde aprender y <em>ser feliz</em></h1>
      <p class="hero__lede">Centro concertado, laico y abierto a todo tipo de alumnado. Acompañamos a cada alumno desde los cuatro meses hasta la Universidad, con un proyecto educativo propio y un equipo docente estable.</p>
      ${btnRow([
  { text: 'Admisiones 26/27', href: 'matriculacion.html', style: 'gold' },
  { text: 'Ven a conocernos', href: 'contacto.html#visita', style: 'light' }
])}
      <div class="hero__meta">
        <span>${I.check}Etapas concertadas de Infantil a Secundaria</span>
        <span>${I.check}Bachillerato y Formación Profesional</span>
        <span>${I.check}Escuela infantil propia desde 4 meses</span>
      </div>
    </div>
  </div>
</section>

<div class="quick">
  <div class="wrap">
    <div class="quick__grid">
      ${QUICK.map((q, i) => `<a class="qcard reveal reveal-d${i}" href="${q.href}" style="--c:${q.color}">
        <span class="qcard__icon">${I[q.icon]}</span>
        <h3>${q.title}</h3>
        <p>${q.text}</p>
        <span class="arrow">${q.link} ${I.arrow}</span>
      </a>`).join('')}
    </div>
  </div>
</div>

${sec({
  variant: null,
  body: `<div class="split">
      <div class="split__media split__media--frame reveal">
        ${img('webquercusmayores1.jpg', 'Alumnado del Colegio Quercus')}
        <div class="split__badge"><strong>4 meses<br>a 18 años</strong><span>Todo el itinerario educativo en un mismo campus</span></div>
      </div>
      <div class="reveal reveal-d1">
        <p class="eyebrow">Quiénes somos</p>
        <h2>La enseñanza entendida como un servicio público</h2>
        <div class="prose mt-1">
          <p>El Colegio Quercus es un centro concertado, laico y abierto a todo tipo de alumnado, sin discriminación alguna. Queremos que, en el seno de un clima educativo adecuado, se haga realidad el sentimiento colectivo de comunidad escolar y la formación integral de los alumnos.</p>
          <p>La cooperativa <strong>Avantis</strong>, titular del colegio, surge del impulso de un grupo de profesionales de la educación decididos a poner en marcha un centro docente en el que se plasme un proyecto educativo propio.</p>
        </div>
        ${btnRow([
    { text: '¿Quiénes somos?', href: 'quienes-somos.html', style: 'primary' },
    { text: 'Proyecto educativo', href: 'proyecto-educativo.html', style: 'ghost' }
  ], 'mt-2')}
      </div>
    </div>`
})}

${sec({
  variant: 'dark',
  cls: 'sec--tight',
  body: stats([
    { value: '4', count: 4, suffix: '', label: 'Meses: la edad a la que empieza nuestro proyecto' },
    { value: '20', count: 20, suffix: '+', label: 'Espacios e instalaciones especializados' },
    { value: '10', count: 10, suffix: '', label: 'Menús diferentes para alergias e intolerancias' },
    { value: '6', count: 6, suffix: ' h', label: 'Jornada lectiva ampliada en Primaria' }
  ])
})}

${sec({
  id: 'etapas',
  variant: 'soft',
  head: {
    eyebrow: 'Oferta educativa',
    title: 'Una etapa para cada momento',
    lede: 'Acompañamos a tus hijos durante todo el periodo de escolarización, desde los cuatro meses hasta la Universidad, sin cambiar de centro.',
    center: true
  },
  body: grid(3, STAGES.map(stage).join('')) + `<div class="btn-row btn-row--center mt-3 reveal">
      <a class="btn btn--primary" href="que-ofrecemos.html">Ver toda la oferta educativa ${I.arrow}</a>
    </div>`
})}

${sec({
  head: {
    eyebrow: 'Por qué elegirnos',
    title: 'Seis de las diez razones',
    lede: 'Llega la hora de matricular a tu hijo en un nuevo centro escolar y surgen las dudas. Estas son algunas de las razones por las que las familias eligen el Quercus.'
  },
  body: grid(3, REASONS.map(fcard).join('')) + `<div class="mt-3 reveal">${arrowLink('por-que-elegirnos.html', 'Ver las diez razones completas')}</div>`
})}

${sec({
  variant: 'warm',
  head: {
    eyebrow: 'Vida Quercus',
    title: 'Proyectos que van más allá del currículo',
    lede: 'Innovación, sostenibilidad, solidaridad e internacionalización. Así completamos la formación académica de nuestro alumnado.',
    center: true
  },
  body: grid(3, PROJECTS.map(p => lcard({ ...p, text: p.text })).join('')) +
    `<div class="btn-row btn-row--center mt-3 reveal"><a class="btn btn--ghost" href="vida-quercus.html">Descubrir Vida Quercus ${I.arrow}</a></div>`
})}

${sec({
  id: 'noticias',
  head: {
    eyebrow: 'Actualidad',
    title: 'Nuestras noticias',
    lede: 'Lo último que ocurre en el colegio, contado por su comunidad educativa.'
  },
  body: `<div class="filters reveal" data-filters="#home-news" role="group" aria-label="Filtrar noticias">
      <button type="button" data-filter="*" aria-pressed="true">Todas</button>
      <button type="button" data-filter="primaria" aria-pressed="false">Primaria</button>
      <button type="button" data-filter="secundaria" aria-pressed="false">Secundaria</button>
      <button type="button" data-filter="bachillerato" aria-pressed="false">Bachillerato</button>
      <button type="button" data-filter="fp" aria-pressed="false">FP</button>
    </div>
    <div id="home-news" class="grid grid--3">
      ${NEWS.slice(0, 6).map((n, i) => card({ ...n, tag: null, link: { href: n.href, text: 'Leer más' } }, i)).join('')}
    </div>
    <div class="btn-row btn-row--center mt-3 reveal"><a class="btn btn--primary" href="noticias.html">Más noticias ${I.arrow}</a></div>`
})}

${sec({
  variant: 'soft',
  head: { eyebrow: 'Destacados', title: 'Campañas abiertas', center: true },
  body: banners([
    { image: 'cabecera1y2anosmod26.png', alt: 'Escuela infantil: 1 y 2 años', href: 'escuela-infantil.html' },
    { image: 'bannerweb-ciclos-formativos-07.png', alt: 'Ciclos formativos', href: 'ciclos-formativos.html' },
    { image: 'bannerweb-campamentos26v3.png', alt: 'Campamentos de verano', href: 'campamentos.html' },
    { image: 'notas-pau-2026.png', alt: 'Notas PAU 2026', href: 'proyecto-educativo.html#resultados' },
    { image: 'bnnerwebtiendaonline-24.png', alt: 'Tienda online de uniformes y libros', href: 'https://www.colegioquercus.com/venta-uniformes-libros' },
    { image: 'banneraulasclima2-17.png', alt: 'Aulas climatizadas', href: 'instalaciones.html' }
  ])
})}

${sec({
  head: {
    eyebrow: 'Reconocimientos',
    title: 'Distinciones y certificaciones',
    lede: 'Desde el Premio Nacional «Laurel de Oro» hasta el sello de UNICEF que nos acredita como escuela amiga.',
    center: true
  },
  body: certs(CERTS) + `<div class="btn-row btn-row--center mt-3 reveal"><a class="btn btn--ghost" href="distinciones.html">Ver todas las distinciones ${I.arrow}</a></div>`
})}

<section class="sec sec--tight">
  ${cta({
  eyebrow: 'Admisiones 2026 / 2027',
  title: '¿Quieres conocer el Colegio Quercus?',
  text: 'Rellena el formulario y contactaremos contigo lo antes posible para organizar una visita guiada por el centro.',
  buttons: [
    { text: 'Solicitar visita', href: 'contacto.html#visita', style: 'gold' },
    { text: 'Proceso de admisión', href: 'matriculacion.html', style: 'light' }
  ]
})}
</section>
`;

module.exports = {
  file: 'index.html',
  title: 'Inicio',
  description: 'Colegio concertado de Boadilla del Monte, laico y que concibe la enseñanza como un servicio público. Educación infantil, primaria, secundaria, bachillerato y formación profesional.',
  ogImage: 'webquercusninos2.jpg',
  body
};
