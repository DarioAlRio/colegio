'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, split, checks, stats, faq, docs, gallery, table, cta, grid, arrowLink, note, prose, card } = L;
const { phero } = require('../layout');

/* ---------------------------------------------------------- Escuela Infantil */
const escuelaInfantil = {
  file: 'escuela-infantil.html',
  title: 'Escuela Infantil',
  description: 'Escuela infantil del Colegio Quercus para niños de 4 meses a 3 años: atención individualizada, aula sensorial, cocina propia y aulas climatizadas.',
  ogImage: 'publiinfantil4.2.jpg',
  body: phero({
    image: 'publiinfantil4.2.jpg',
    eyebrow: 'Etapas y estudios',
    title: 'Un segundo hogar desde los cuatro meses',
    lede: 'La Escuela Infantil del Colegio Quercus os ofrece un entorno seguro donde los niños y niñas crecen felices, acompañados por un equipo docente con amplia experiencia.',
    crumbs: [{ label: 'Etapas y estudios' }, { label: 'Escuela Infantil' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <p class="lead">Nuestra metodología tiene como base <strong>el juego</strong> como herramienta fundamental para desarrollar las inteligencias de nuestros alumnos y alumnas, así como la capacidad de atención, concentración y memoria.</p>
            <p>Sabemos que cada niño es único y debemos potenciar todas sus fortalezas y reforzar sus debilidades: por eso una de nuestras máximas es el respeto a la individualidad del alumno y a sus ritmos de aprendizaje.</p>
            <h3>Rutinas que dan seguridad</h3>
            <p>El proyecto de nuestra escuela infantil sienta su base en las <strong>rutinas</strong> como herramienta para proporcionar seguridad y contribuir a establecer un equilibrio emocional, un mecanismo importantísimo para su educación y para la construcción de su personalidad.</p>
            <h3>Afectividad y educación emocional</h3>
            <p>Uno de los aspectos más importantes en el desarrollo de vuestro hijo o hija es la afectividad. El desarrollo del apego entre el equipo docente y el alumnado es uno de los puntos más importantes de nuestro día a día en la escuela.</p>
            <p>Dentro del aula conseguimos que sean capaces de identificar las emociones básicas, para luego poder ayudarles a comprender y expresar sus sentimientos. Trabajamos también valores como la solidaridad, el respeto, el esfuerzo y la responsabilidad.</p>
            <h3>Autonomía</h3>
            <p>Se busca alcanzar la autonomía del niño a través del propio conocimiento de su entorno: el principal objetivo de esta etapa. Una independencia que se consigue mediante actividades que acercan a los pequeños a la observación y la manipulación.</p>
          `)}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>Pedir cita</h4>
            <p>¿Ya conoces nuestra escuela infantil? Reserva una visita y te la enseñamos.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="contacto.html#visita">Solicitar visita</a>
          </div>
          <div class="abox">
            <h4>Enlaces útiles</h4>
            <ul>
              <li><a href="comedor.html">Comedor y menús</a></li>
              <li><a href="becas.html">Becas de primer ciclo</a></li>
              <li><a href="uniforme.html">Uniforme</a></li>
              <li><a href="servicios-complementarios.html">Servicios complementarios</a></li>
            </ul>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Nuestra escuela', title: 'Lo que encontrarás', center: true },
      body: grid(4, [
        { icon: 'spark', color: 'var(--sky-600)', title: 'Aula sensorial', text: 'Espacio novedoso dedicado a la estimulación de los sentidos y a las actividades por instalaciones.' },
        { icon: 'utensils', color: 'var(--gold)', title: 'Cocina propia', text: 'Menús diarios variados elaborados por nutricionistas, con especial atención a alergias e intolerancias.' },
        { icon: 'shield', color: 'var(--green)', title: 'Enfermería', text: 'Supervisión sanitaria de la dieta y atención durante toda la jornada escolar.' },
        { icon: 'heart', color: 'var(--rose)', title: 'Aulas climatizadas', text: 'Todas las aulas están climatizadas para crear un ambiente óptimo en cualquier época del año.' }
      ].map(fcard).join(''))
    }) +

    sec({
      head: { eyebrow: 'Galería', title: 'La escuela por dentro', center: true },
      body: gallery([
        { image: 'publiinfantil8.png', title: 'Aprendizaje a través del juego', size: 'wide' },
        { image: 'publiinfantil2.png', title: 'Rutinas y hábitos' },
        { image: 'publiinfantil6.png', title: 'Educación emocional' },
        { image: 'publiinfantil1.png', title: 'Estimulación temprana' },
        { image: 'publiinfantil7.png', title: 'Trabajo por rincones' },
        { image: 'sensorial.png', title: 'Aula sensorial' },
        { image: 'aula-psicomotricidad-1.jpg', title: 'Psicomotricidad' }
      ])
    }) +

    sec({
      variant: 'warm',
      body: note('<strong>Becas disponibles.</strong> Ya están abiertas las Becas Quercus y las Becas de la Comunidad de Madrid para alumnos de primer y segundo ciclo de Infantil. <a href="becas.html">Consulta las condiciones</a>.')
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Ya conoces nuestra escuela infantil?',
      text: 'Rellena el formulario de cita previa y te enseñaremos las instalaciones sin compromiso.',
      buttons: [
        { text: 'Pedir cita', href: 'contacto.html#visita', style: 'gold' },
        { text: 'Llamar al centro', href: 'tel:+34916338516', style: 'light' }
      ]
    })}</section>`
};

/* -------------------------------------------------------- Bachillerato Dual */
const bachilleratoDual = {
  file: 'bachillerato-dual.html',
  title: 'Bachillerato Dual Americano',
  description: 'Programa de Bachillerato Dual Americano en el Colegio Quercus: doble titulación española y estadounidense desde 3.º de la ESO.',
  ogImage: 'bannerdualmatriculacion.png',
  body: phero({
    eyebrow: 'Etapas y estudios',
    title: 'Bachillerato Dual Americano',
    lede: 'Simultanear el bachillerato español y el americano y obtener una doble titulación, con inmersión lingüística y tecnológica.',
    crumbs: [{ label: 'Etapas y estudios' }, { label: 'Bachillerato Dual' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">Una de las preocupaciones de nuestro colegio es la formación de nuestros alumnos y su proyección hacia estudios en el extranjero.</p>
        <p>Hoy en día la lengua inglesa no solo constituye una herramienta de comunicación esencial en el mundo laboral, sino también en el mundo académico y social. Desde el colegio siempre hemos tratado de ofrecer un alto nivel de formación en idiomas.</p>
        <p>En el marco de nuestro programa de innovación pedagógica, iniciamos en el curso 2019-2020 la implantación del <strong>Bachillerato Dual</strong>, que tiene como objetivo ofrecer a nuestros alumnos la posibilidad de simultanear los bachilleratos americano y español.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Objetivos', title: 'Tres pilares del programa', center: true },
      body: grid(3, [
        { num: '01', color: 'var(--green)', title: 'Inmersión lingüística', text: 'En un entorno real de estudio y trabajo, con profesorado y compañeros estadounidenses.' },
        { num: '02', color: 'var(--sky-600)', title: 'Inmersión tecnológica', text: 'Aprendizaje mediado por plataformas digitales y herramientas de trabajo colaborativo.' },
        { num: '03', color: 'var(--gold)', title: 'Gestión y madurez', text: 'Responsabilidad y autogestión del trabajo, competencias clave para la etapa universitaria.' }
      ].map(fcard).join(''))
    }) +

    sec({
      body: split({
        image: 'image001.jpg',
        imageAlt: 'Programa Bachillerato Dual',
        eyebrow: '¿A quién va dirigido?',
        title: 'Desde 3.º de la ESO',
        body: `<p>El Programa de Bachillerato Dual Internacional va dirigido principalmente a los alumnos que empiezan <strong>3.º de la ESO</strong>, aunque podría adelantarse un año comenzando en 2.º de la ESO.</p>`,
        checks: [
          'Doble titulación: bachillerato español y americano',
          'Mejora considerable del nivel de inglés',
          'Intercambio cultural entre países',
          'Currículum transversal valorado por universidades de prestigio'
        ],
        buttons: [
          { text: 'Más información', href: 'http://los300mejores.com/', style: 'primary' },
          { text: 'Descargar presentación', href: 'https://drive.google.com/file/d/1ammCaCY764SQnQnreKJ_A0oih148hRIg/view?usp=sharing', style: 'ghost' }
        ]
      })
    }) +

    sec({
      variant: 'warm',
      head: { eyebrow: 'Beneficios', title: 'Qué aporta a cada uno' },
      body: faq([
        { id: 'alumno', q: 'Para el alumno', a: '<p>Le proporciona una mejora considerable del inglés a través del uso y la aplicación de las nuevas tecnologías, además del intercambio cultural entre países.</p>' },
        { id: 'familia', q: 'Para las familias', a: '<p>Fomenta la madurez, la independencia y la autogestión del alumno, proporcionándole la posibilidad de acceder a nuevos métodos de enseñanza y abriéndole puertas profesionales y personales que serían más complicadas de ofrecer sin este programa.</p>' },
        { id: 'universidad', q: 'Para el acceso a la universidad', a: '<p>En un mundo globalizado, las universidades más prestigiosas buscan los mejores expedientes y alumnos con un currículum transversal lo más completo posible. Poseer <strong>dos títulos de bachillerato</strong> ya es una importante carta de presentación para cualquier candidato.</p>' },
        { id: 'centro', q: 'Para el centro', a: '<p>Permite establecer el programa dentro de su oferta educativa a través de unos estudios enfocados en aportar a los alumnos nuevas herramientas al programa curricular.</p>' }
      ])
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Inscríbete en el Bachillerato Dual',
      text: 'Consulta la documentación del programa o escríbenos para resolver tus dudas.',
      buttons: [
        { text: 'Documentación del programa', href: 'https://drive.google.com/file/d/1dYyu6jiSHv7trc1Hmf4MI_lkJyrH25Jc/view?usp=drive_link', style: 'gold' },
        { text: 'Consúltanos', href: 'contacto.html', style: 'light' }
      ]
    })}</section>`
};

/* --------------------------------------------------------- Ciclos formativos */
const ciclosFormativos = {
  file: 'ciclos-formativos.html',
  title: 'Ciclos Formativos',
  description: 'Formación Profesional en el Colegio Quercus: Grado Medio en Gestión Administrativa y Grado Superior en Agencias de Viajes y Asistencia a la Dirección.',
  ogImage: 'ciclos-formativos-web-2.png',
  body: phero({
    eyebrow: 'Etapas y estudios',
    title: 'Formación Profesional en el Quercus',
    lede: 'Enseñanzas prácticas, especializadas y adaptadas a las necesidades del mercado laboral, con titulación oficial válida en toda la Unión Europea.',
    crumbs: [{ label: 'Etapas y estudios' }, { label: 'Ciclos Formativos' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <h2>¿Qué son los ciclos formativos?</h2>
            <p>Los ciclos formativos son enseñanzas de Formación Profesional que proporcionan una formación práctica, especializada y adaptada a las necesidades del mercado laboral. Su principal objetivo es preparar a los estudiantes para <strong>acceder de forma directa y eficaz al mundo del trabajo</strong>.</p>
            <p>En España están regulados por el Ministerio de Educación y Formación Profesional, lo que garantiza una formación de calidad que cumple con los requisitos del mercado laboral tanto a nivel local como europeo.</p>
          `)}
          ${checks([
        '<strong>Enfoque práctico y orientado al empleo:</strong> incluyen formación en centros de trabajo (FCT), lo que permite adquirir experiencia real en empresas.',
        '<strong>Titulación oficial y reconocida:</strong> título de Técnico (Grado Medio) o Técnico Superior (Grado Superior), con validez nacional y en la Unión Europea.',
        '<strong>Acceso a estudios superiores:</strong> permiten continuar la formación en otro nivel de FP o en la universidad desde los Grados Superiores.',
        '<strong>Alta empleabilidad:</strong> los titulados salen con competencias técnicas y experiencia laboral.'
      ], 'mt-2')}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>Información y precios</h4>
            <p>Escríbenos a <strong>fp@colegioquercus.com</strong> o llámanos al 916 338 516 y te asesoramos sin compromiso.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="mailto:fp@colegioquercus.com">Escribir a FP</a>
          </div>
          <div class="abox">
            <h4>En esta página</h4>
            <ul>
              <li><a href="#medio">Ciclos de Grado Medio</a></li>
              <li><a href="#superior">Ciclos de Grado Superior</a></li>
              <li><a href="#acceso">Requisitos de acceso</a></li>
            </ul>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      id: 'medio',
      variant: 'soft',
      head: {
        eyebrow: 'Grado Medio',
        title: 'Gestión Administrativa',
        lede: 'Novedad para el curso 2026/2027 en horario de mañana.'
      },
      body: split({
        image: 'ciclos-formativos-web-7.png',
        imageAlt: 'Ciclo de Grado Medio en Gestión Administrativa',
        body: `<p>El Ciclo Formativo de Grado Medio en Gestión Administrativa es una titulación oficial que te capacita para desempeñar funciones esenciales dentro del área administrativa de cualquier empresa, organismo público o institución.</p>
          <p>A lo largo de la formación adquirirás conocimientos y habilidades en gestión de documentación, atención al cliente, contabilidad básica, tramitación de operaciones financieras y uso de herramientas digitales para la administración.</p>
          <p>Este ciclo combina teoría y práctica con un enfoque orientado al mundo laboral. Además, tendrás la oportunidad de realizar <strong>prácticas en empresas</strong>, lo que te permitirá aplicar tus conocimientos en entornos reales.</p>`,
        buttons: [
          { text: 'Dossier informativo', href: 'https://drive.google.com/file/d/1pBDYdzg0ndqoGhAqUhIXPvVuURZvpLkP/view?usp=sharing', style: 'primary' },
          { text: 'Más información', href: 'https://drive.google.com/file/d/19S19iLoHvIwktihfjuQs7yAo0xYlXK2C/view?usp=sharing', style: 'ghost' }
        ]
      })
    }) +

    sec({
      id: 'superior',
      head: {
        eyebrow: 'Grado Superior',
        title: 'Dos titulaciones de Técnico Superior',
        lede: 'Para quienes han finalizado Bachillerato o un ciclo de Grado Medio y quieren especializarse.'
      },
      body: grid(2, [
        `<article class="card reveal">
          <div class="card__media">${img('ciclos-formativos-web-8.png', 'Agencias de Viajes y Gestión de Eventos')}<span class="card__tag">Grado Superior</span></div>
          <div class="card__body">
            <h3>Agencias de Viajes y Gestión de Eventos</h3>
            <p>Si sueñas con trabajar en el mundo del turismo, diseñando experiencias inolvidables y organizando eventos de impacto, este ciclo es tu puerta de entrada a una carrera dinámica.</p>
            <p>Te preparará para planificar, gestionar y comercializar viajes a medida, coordinar eventos de todo tipo —corporativos, culturales, deportivos— y ofrecer un servicio de atención al cliente de excelencia.</p>
            <p class="small muted">Gestión de agencias · Planificación de itinerarios · Marketing turístico · Organización de eventos</p>
            ${arrowLink('https://drive.google.com/file/d/1d8zF7y_J2kzUekgrthJFqQi9XCYxKk1o/view?usp=drive_link', 'Más información')}
          </div>
        </article>`,
        `<article class="card reveal reveal-d1">
          <div class="card__media">${img('ciclos-formativos-web-9.png', 'Asistencia a la Dirección')}<span class="card__tag">Grado Superior</span></div>
          <div class="card__body">
            <h3>Asistencia a la Dirección</h3>
            <p>Te prepara para convertirte en un profesional clave en el ámbito empresarial, capacitado para gestionar y coordinar tareas administrativas y organizativas en cualquier tipo de empresa o institución.</p>
            <p>Adquirirás competencias para asistir a la dirección en la planificación y gestión de proyectos, optimizar la comunicación interna y externa y organizar reuniones, eventos y viajes corporativos.</p>
            <p class="small muted">Herramientas digitales avanzadas · Técnicas de protocolo · Idiomas</p>
            ${arrowLink('https://drive.google.com/file/d/1FoM1FUbA_WORw5CGJ63dypA-A-Ra58C4/view?usp=sharing', 'Más información')}
          </div>
        </article>`
      ].join(''))
    }) +

    sec({
      id: 'acceso',
      variant: 'soft',
      head: { eyebrow: 'Requisitos', title: 'Grado Medio y Grado Superior: diferencias' },
      body: table(
        ['', 'Grado Medio', 'Grado Superior'],
        [
          ['Requisito de acceso', 'Educación Secundaria Obligatoria (ESO) finalizada', 'Bachillerato o un ciclo de Grado Medio'],
          ['Edad', 'Tener 16 años o cumplirlos en el primer año lectivo', '18 años o cumplirlos en el primer año lectivo'],
          ['Duración', 'Dos cursos académicos', 'Dos cursos académicos'],
          ['Titulación', 'Técnico', 'Técnico Superior'],
          ['Continuidad', 'Grado Superior u otro ciclo', 'Universidad con convalidaciones']
        ]
      ) + note('Para información ampliada, asesoramiento y precios sobre los Ciclos Formativos escríbenos a <a href="mailto:fp@colegioquercus.com">fp@colegioquercus.com</a> o llama al <a href="tel:+34916338516">916 338 516</a>.')
    }) +

    `<section class="sec sec--tight">${cta({
      eyebrow: 'Formación Profesional',
      title: 'Solicita información sobre los ciclos',
      text: 'Déjanos tus datos y contactaremos contigo lo antes posible.',
      buttons: [
        { text: 'Contactar', href: 'contacto.html', style: 'gold' },
        { text: 'Dossier informativo', href: 'https://drive.google.com/file/d/1pBDYdzg0ndqoGhAqUhIXPvVuURZvpLkP/view?usp=sharing', style: 'light' }
      ]
    })}</section>`
};

module.exports = [escuelaInfantil, bachilleratoDual, ciclosFormativos];
