'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, stage, split, checks, stats, faq, docs, gallery, certs, table, cta, grid, arrowLink, note, prose } = L;
const { phero } = require('../layout');
const { FACILITIES, CERTS, STAGES } = require('../data');

/* ------------------------------------------------------- ¿Quiénes somos? */
const quienesSomos = {
  file: 'quienes-somos.html',
  title: '¿Quiénes somos?',
  description: 'El Colegio Quercus es un centro concertado, laico y abierto, titularidad de la cooperativa Avantis, en Boadilla del Monte (Madrid).',
  ogImage: 'webquercusninos2.jpg',
  body: phero({
    image: 'webquercusninos2.jpg',
    eyebrow: 'El Colegio',
    title: 'Un centro concertado, laico y abierto',
    lede: 'Concebimos la enseñanza como un servicio público y estamos abiertos a todo tipo de alumnado, sin discriminación alguna.',
    crumbs: [{ label: 'El Colegio' }, { label: '¿Quiénes somos?' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <p class="lead">El Colegio Quercus es un centro concertado, laico y que concibe la enseñanza como un servicio público. Está abierto a todo tipo de alumnado, sin discriminación alguna.</p>
            <p>Queremos que, en el seno de un clima educativo adecuado, se haga realidad el sentimiento colectivo de comunidad escolar y la formación integral de los alumnos.</p>
            <blockquote>La cooperativa Avantis, titular del Colegio Quercus, surge del impulso de un grupo de profesionales de la educación decididos a poner en marcha un centro docente en el que se plasme un proyecto educativo propio.</blockquote>
            <p>Nuestro centro, además de la formación académica, desea hacer frente a todas las necesidades del alumno, y por ello la oferta de servicios del colegio se enriquece incorporando todo tipo de actividades culturales y deportivas.</p>
            <p>Para cubrir las necesidades de la <strong>educación inclusiva</strong>, tratamos individualmente las dificultades de aprendizaje a través del trabajo de nuestro Departamento de Orientación.</p>
          `)}
          ${btnRow([
        { text: '¿Qué ofrecemos?', href: 'que-ofrecemos.html', style: 'primary' },
        { text: '¿Por qué elegirnos?', href: 'por-que-elegirnos.html', style: 'ghost' }
      ], 'mt-3')}
        </div>
        <aside class="aside">
          <div class="abox">
            <h4>En esta sección</h4>
            <ul>
              <li><a href="quienes-somos.html" aria-current="page">¿Quiénes somos?</a></li>
              <li><a href="proyecto-educativo.html">Proyecto educativo</a></li>
              <li><a href="organigrama.html">Organigrama</a></li>
              <li><a href="instalaciones.html">Instalaciones</a></li>
              <li><a href="distinciones.html">Distinciones</a></li>
            </ul>
          </div>
          <div class="abox abox--green">
            <h4>Admisiones 26/27</h4>
            <p>El plazo de solicitudes para las etapas concertadas se abre del 11 al 25 de marzo de 2026.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="matriculacion.html">Ver proceso</a>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Señas de identidad', title: 'Lo que nos define', center: true },
      body: grid(4, [
        { icon: 'users', color: 'var(--green)', title: 'Comunidad escolar', text: 'Un sentimiento colectivo que implica a alumnado, familias y profesorado.' },
        { icon: 'heart', color: 'var(--rose)', title: 'Educación inclusiva', text: 'Tratamiento individualizado de las dificultades de aprendizaje.' },
        { icon: 'spark', color: 'var(--gold)', title: 'Proyecto propio', text: 'Impulsado por la cooperativa Avantis y su equipo de profesionales.' },
        { icon: 'cap', color: 'var(--sky-600)', title: 'Formación integral', text: 'Actividades culturales y deportivas que enriquecen lo académico.' }
      ].map(fcard).join(''))
    }) +

    sec({
      body: split({
        image: 'webquercusninos3.jpg',
        imageAlt: 'Alumnos del Colegio Quercus',
        eyebrow: 'Titularidad',
        title: 'Cooperativa Avantis S. Coop. Mad.',
        body: `<p>El colegio pertenece a una cooperativa de profesionales de la educación. Esa titularidad explica buena parte de nuestra forma de trabajar: estabilidad del claustro, decisiones pedagógicas tomadas por quienes están en el aula y reinversión en el propio centro.</p>
          <p>La estructura de gobierno y los responsables de cada etapa y departamento están publicados en el organigrama del centro.</p>`,
        buttons: [{ text: 'Ver organigrama', href: 'organigrama.html', style: 'ghost' }]
      })
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Ven a conocer el colegio por dentro',
      text: 'Organizamos visitas guiadas para las familias interesadas en cualquiera de nuestras etapas.',
      buttons: [{ text: 'Solicitar visita', href: 'contacto.html#visita', style: 'gold' }]
    })}</section>`
};

/* -------------------------------------------------------- ¿Qué ofrecemos? */
const queOfrecemos = {
  file: 'que-ofrecemos.html',
  title: '¿Qué ofrecemos?',
  description: 'Oferta educativa del Colegio Quercus: escuela infantil desde 4 meses, Infantil, Primaria, Secundaria, Bachillerato y Formación Profesional.',
  ogImage: 'webquercusninos3.jpg',
  body: phero({
    image: 'webquercusninos3.jpg',
    eyebrow: 'Oferta educativa',
    title: 'De los cuatro meses a la Universidad',
    lede: 'Acompañamos a tus hijos durante todo el periodo de escolarización, sin necesidad de cambiar de centro.',
    crumbs: [{ label: 'Etapas y estudios' }, { label: '¿Qué ofrecemos?' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">En el edificio de nuestra escuela infantil se desarrolla un proyecto educativo propio cuya seña de identidad es la <strong>atención individualizada</strong>. Educamos a través de la participación activa, el aprendizaje cooperativo y el crecimiento en las relaciones sociales, respetando el desarrollo individual de cada niño.</p>
        <p>Los niveles concertados del colegio comienzan con el segundo ciclo de Infantil, a partir de los 3 años, y se prolongan hasta la finalización de Secundaria. Por último, como etapa privada, ofertamos los dos cursos de <strong>Bachillerato</strong> en las modalidades de Ciencias —con itinerarios de Ciencias de la Salud e Ingeniería y Arquitectura— y Humanidades y Ciencias Sociales.</p>
        <p>En todas estas etapas ofrecemos una enseñanza de calidad fundamentada en nuestro equipo de profesionales, comprometidos con la educación y con amplia experiencia docente. Damos gran importancia al estudio de lenguas extranjeras, con aprendizaje del <strong>inglés desde los dos años</strong> en grupos reducidos y oferta de <strong>alemán desde quinto de Primaria</strong>.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Etapas', title: 'Recorrido educativo completo', center: true },
      body: grid(3, STAGES.map(stage).join(''))
    }) +

    sec({
      id: 'infantil',
      body: split({
        image: 'publiinfantil2.png',
        imageAlt: 'Educación Infantil en el Colegio Quercus',
        eyebrow: 'Etapa concertada · 3 a 6 años',
        title: 'Educación Infantil',
        body: `<p>El segundo ciclo de Infantil es el primer nivel concertado del colegio. Trabajamos por rutinas y experiencias, con especial atención a la <strong>estimulación temprana</strong>, la lectoescritura y la educación emocional.</p>`,
        checks: [
          'Inglés desde los dos años en grupos reducidos',
          'Aula multisensorial y espacios de psicomotricidad',
          'Natación en horario lectivo desde los dos años',
          'Comedor con cocina propia y menús adaptados'
        ],
        buttons: [{ text: 'Ver escuela infantil', href: 'escuela-infantil.html', style: 'ghost' }]
      })
    }) +

    sec({
      id: 'primaria',
      variant: 'soft',
      body: split({
        alt: true,
        image: 'aulas-de-informatica.jpg',
        imageAlt: 'Aula de informática',
        eyebrow: 'Etapa concertada · 6 a 12 años',
        title: 'Educación Primaria',
        body: `<p>Hemos fijado una <strong>jornada lectiva de seis horas</strong> que nos permite incorporar y ampliar contenidos en áreas como Inglés, Lectoescritura, Expresión Oral o prácticas en nuestros laboratorios.</p>
          <p>Además, hemos introducido una hora semanal de tutoría con los alumnos, lo que nos permite desarrollar nuestro Plan de Acción Tutorial.</p>`,
        checks: [
          'Asignatura de Tecnología y Robótica en el Aula Maker',
          'Alemán como segunda lengua extranjera desde 5.º',
          'Sesión semanal de natación en horario lectivo',
          'Sesiones formativas en la biblioteca del centro'
        ],
        buttons: [{ text: 'Enriquecimiento curricular', href: 'proyecto-educativo.html#enriquecimiento', style: 'ghost' }]
      })
    }) +

    sec({
      id: 'secundaria',
      body: split({
        image: 'webquercusmayores1.jpg',
        imageAlt: 'Alumnado de Secundaria',
        eyebrow: 'Etapa concertada · 12 a 16 años',
        title: 'Secundaria (ESO)',
        body: `<p>La acción tutorial es el eje de la etapa: solo con un plan preventivo y adecuado se pueden trabajar dimensiones como la cohesión grupal, la responsabilidad y la solidaridad.</p>
          <p>Desde 3.º de la ESO el alumnado puede simultanear el Bachillerato Dual americano, y en 4.º participa en el programa <strong>4.º ESO + Empresa</strong> de la Comunidad de Madrid.</p>`,
        checks: [
          'Programa TEI de tutoría entre iguales (antibullying)',
          'Bachillerato Dual americano desde 3.º de la ESO',
          'Estancias educativas en empresas en 4.º de la ESO',
          'Proyecto Orión de orientación académica'
        ],
        buttons: [{ text: 'Bachillerato Dual', href: 'bachillerato-dual.html', style: 'ghost' }]
      })
    }) +

    sec({
      id: 'bachillerato',
      variant: 'soft',
      body: split({
        alt: true,
        image: 'quercuslabquimica.jpg',
        imageAlt: 'Laboratorio de Química',
        eyebrow: 'Etapa privada · 16 a 18 años',
        title: 'Bachillerato',
        body: `<p>Ofertamos los dos cursos de Bachillerato en la modalidad de <strong>Ciencias</strong>, con itinerarios de Ciencias de la Salud e Ingeniería y Arquitectura, y en la modalidad de <strong>Humanidades y Ciencias Sociales</strong>.</p>
          <p>El colegio convoca cada curso una Beca de Excelencia para cursar el Bachillerato en el centro.</p>`,
        checks: [
          'Laboratorios de Física, Química y Biología propios',
          'Preparación específica para la PAU',
          'Ferias universitarias y Proyecto Orión',
          'Bachillerato Dual americano con doble titulación'
        ],
        buttons: [
          { text: 'Beca de excelencia', href: 'becas.html#excelencia', style: 'ghost' },
          { text: 'Resultados PAU', href: 'proyecto-educativo.html#resultados', style: 'ghost' }
        ]
      })
    }) +

    sec({
      id: 'horario',
      head: { eyebrow: 'Horarios y servicios', title: 'Un colegio abierto de 7:00 a 18:00' },
      body: grid(3, [
        { icon: 'clock', color: 'var(--green)', title: 'Horario ampliado de mañana', text: 'De 7:00 a 9:00 h, atendido por el profesorado del centro.' },
        { icon: 'clock', color: 'var(--gold)', title: 'Horario ampliado de tarde', text: 'De 17:00 a 18:00 h, con actividades y acompañamiento.' },
        { icon: 'spark', color: 'var(--coral)', title: 'Extraescolares', text: 'En el descanso de la mañana y en el horario ampliado de tarde.' }
      ].map(fcard).join('')) +
        `<div class="mt-3 reveal">${arrowLink('servicios-complementarios.html', 'Ver todos los servicios complementarios')}</div>`
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Consulta la disponibilidad de plazas',
      text: 'Las etapas privadas —primer ciclo de Infantil y Bachillerato— se gestionan directamente en secretaría.',
      buttons: [
        { text: 'Contactar con secretaría', href: 'secretaria.html', style: 'gold' },
        { text: 'Proceso de admisión', href: 'matriculacion.html', style: 'light' }
      ]
    })}</section>`
};

/* ----------------------------------------------------- ¿Por qué elegirnos? */
const REASONS_10 = [
  { num: '01', color: 'var(--green)', title: 'Proyecto consolidado que abarca todas las etapas', text: 'Desde 1 año hasta la Universidad tenemos un proyecto consolidado y contrastado. Gracias a un gran equipo de profesionales, tus hijos basarán su educación en unos sólidos pilares que convertirán nuestro centro en su hogar.' },
  { num: '02', color: 'var(--gold)', title: 'Formación integral', text: 'El campo educativo va más allá de la consecución de contenidos: proporcionamos una formación integral que fortalece la autoestima y educa en valores. Lo importante, ante todo, es el bienestar de nuestros alumnos.' },
  { num: '03', color: 'var(--coral)', title: 'Profesorado comprometido', text: 'Si en algo se caracteriza nuestro centro es por la cercanía. Nuestro modelo propicia la implicación y el compromiso del profesorado, creando la ya famosa «Familia Quercus».' },
  { num: '04', color: 'var(--sky-600)', title: 'Comunicación abierta', text: 'Mantenemos una comunicación fluida con las familias a través de agendas electrónicas, plataformas propias, tutorías personalizadas y reuniones de familias.' },
  { num: '05', color: 'var(--violet)', title: 'Apostamos por los idiomas', text: 'Tenemos una fuerte programación en lenguas extranjeras, con grandes programas de inmersión lingüística y actividades que aumentan el contenido en inglés o alemán.' },
  { num: '06', color: 'var(--mint)', title: 'Importancia de la estimulación temprana', text: 'Conocemos los grandes beneficios que aporta el programa de estimulación temprana de nuestra Escuela Infantil, por lo que su implantación es fundamental en esta etapa.' },
  { num: '07', color: 'var(--rose)', title: 'Somos de los mejores', text: 'En las pruebas externas oficiales obtenemos los mejores resultados y estamos certificados como uno de los mejores colegios de la Comunidad de Madrid según la plataforma MiCole. Además, obtuvimos la bandera verde que nos acredita como ecoescuela.' },
  { num: '08', color: 'var(--green-600)', title: 'Personalización de la educación', text: 'En cada etapa hacemos un seguimiento exhaustivo y personalizado del alumnado, atendiendo a sus competencias, capacidades y necesidades individuales.' },
  { num: '09', color: 'var(--gold-600)', title: 'Estamos a la última', text: 'Desde el Aula LEGO Innovation Studio hasta el aula multisensorial, pasando por la implantación de metodologías activas: la motivación es la clave de la educación.' },
  { num: '10', color: 'var(--green)', title: 'Formamos grandes líderes', text: 'El fin último de nuestro proyecto es formar personas que puedan liderar el cambio a sociedades más justas y felices. Juntos por un mundo mejor.' }
];

const porQueElegirnos = {
  file: 'por-que-elegirnos.html',
  title: '¿Por qué elegirnos?',
  description: 'Diez razones por las que las familias eligen el Colegio Quercus de Boadilla del Monte para la educación de sus hijos.',
  ogImage: 'webquercusninos4.jpg',
  body: phero({
    image: 'webquercusninos4.jpg',
    eyebrow: 'El Colegio',
    title: 'Diez razones por las que el Quercus es tu colegio',
    lede: 'Llega la hora de matricular a tu hijo en un nuevo centro escolar. Surgen las dudas, no encuentras lo que buscas… ¡No pasa nada!',
    crumbs: [{ label: 'El Colegio' }, { label: '¿Por qué elegirnos?' }]
  }) +

    sec({
      body: grid(2, REASONS_10.map(fcard).join(''))
    }) +

    sec({
      variant: 'soft',
      body: split({
        image: 'aulamultisensorial.jpg',
        imageAlt: 'Aula multisensorial del Colegio Quercus',
        eyebrow: 'Recursos',
        title: 'Los recursos más avanzados a su disposición',
        body: `<p>Nuestros alumnos tienen a su disposición los más avanzados recursos pedagógicos y tecnológicos: desde el Aula LEGO Innovation Studio hasta el aula multisensorial, pasando por la implantación de metodologías activas.</p>`,
        buttons: [
          { text: 'Ver instalaciones', href: 'instalaciones.html', style: 'primary' },
          { text: 'Aula Maker', href: 'aula-maker.html', style: 'ghost' }
        ]
      })
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'La mejor forma de decidir es visitarnos',
      text: 'Reserva una visita guiada y conoce el proyecto de primera mano.',
      buttons: [{ text: 'Ven a conocernos', href: 'contacto.html#visita', style: 'gold' }]
    })}</section>`
};

/* ----------------------------------------------------- Proyecto educativo */
const proyectoEducativo = {
  file: 'proyecto-educativo.html',
  title: 'Proyecto educativo',
  description: 'Proyecto educativo del Colegio Quercus: acción tutorial, enriquecimiento curricular, plan de convivencia y resultados del centro.',
  ogImage: 'webquercusproyectoed.jpg',
  body: phero({
    image: 'webquercusproyectoed.jpg',
    eyebrow: 'El Colegio',
    title: 'Nuestro proyecto educativo',
    lede: 'Queremos que aprendan, que se formen y que sean felices. Solo si somos capaces de generar ese clima podrán desarrollar al máximo todo su potencial.',
    crumbs: [{ label: 'El Colegio' }, { label: 'Proyecto educativo' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <p class="lead">Somos un colegio abierto, no discriminatorio, en el que se hace realidad el sentimiento colectivo de toda la comunidad escolar y en el que, a través de un clima educativo adecuado, se consigue la formación integral de nuestros alumnos.</p>
            <p>Nuestro rasgo distintivo es la importancia que damos a la relación con ellos, al conocimiento de su mundo y sus necesidades.</p>
            <h3>Un equipo estable y en formación continua</h3>
            <p>Para ello es necesario, en primer lugar, contar con un equipo de profesorado estable, competente y experimentado en continua formación. Solo así la educación puede ser verdaderamente individualizada, integral y comprometida con el conocimiento de nuestros alumnos.</p>
            <h3>La acción tutorial como eje</h3>
            <p>En este trabajo de atención y seguimiento personales es fundamental la acción tutorial. Solo con un plan de acción tutorial adecuado y preventivo se pueden trabajar dimensiones tan importantes como la cohesión grupal, la responsabilidad, la solidaridad y todos aquellos valores que consideramos fundamentales.</p>
            <h3>Con las familias</h3>
            <p>Para conseguir el éxito en este proceso es imprescindible la implicación y el apoyo de las familias. Desde la comunicación fluida, el entendimiento mutuo y el trabajo conjunto podremos progresar en este proceso de enseñanza y aprendizaje que nos afecta a todos.</p>
          `)}
          ${docs([
        { title: 'Proyecto Educativo de Centro', text: 'Documento completo · Google Drive', href: 'https://drive.google.com/file/d/1fMvrYKhPrSDLjhEwPbtDkyuG6qnh5iJO/view?usp=drive_link', icon: 'ext' }
      ])}
        </div>
        <aside class="aside">
          <div class="abox">
            <h4>En esta página</h4>
            <ul>
              <li><a href="#enriquecimiento">Enriquecimiento curricular</a></li>
              <li><a href="#convivencia">Plan de convivencia</a></li>
              <li><a href="#programas">Programas y proyectos</a></li>
              <li><a href="#resultados">Resultados del centro</a></li>
            </ul>
          </div>
          <div class="abox abox--green">
            <h4>Gabinete</h4>
            <p>El Gabinete Psicopedagógico coordina el tratamiento de las dificultades de aprendizaje detectadas en el aula.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="orientacion.html">Más información</a>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      id: 'enriquecimiento',
      variant: 'soft',
      head: {
        eyebrow: 'Enriquecimiento curricular',
        title: 'Más allá del currículo oficial',
        lede: 'Hemos fijado una jornada lectiva de seis horas que nos permite incorporar y ampliar contenidos en áreas clave.'
      },
      body: grid(3, [
        { icon: 'globe', color: 'var(--sky-600)', title: 'Idiomas', text: 'Inglés desde los dos años en grupos reducidos y alemán desde 5.º de Primaria.' },
        { icon: 'book', color: 'var(--gold)', title: 'Lectoescritura y expresión oral', text: 'Sesiones específicas y formación en la biblioteca para mantener el hábito lector.' },
        { icon: 'flask', color: 'var(--coral)', title: 'Laboratorios', text: 'Prácticas en los laboratorios de Física, Química y Biología del centro.' },
        { icon: 'users', color: 'var(--green)', title: 'Tutoría semanal', text: 'Una hora semanal en Primaria para desarrollar el Plan de Acción Tutorial.' },
        { icon: 'swim', color: 'var(--mint)', title: 'Natación', text: 'Una sesión semanal en horario lectivo en nuestra piscina cubierta.' },
        { icon: 'cpu', color: 'var(--violet)', title: 'Departamento TIC', text: 'Coordina y optimiza los recursos tecnológicos para alumnado y profesorado.' }
      ].map(fcard).join('')) +
        `<div class="mt-3">${docs([
          { title: 'Enriquecimiento curricular · Infantil', href: 'https://www.colegioquercus.com/enriquecimiento-curricular/', icon: 'ext' },
          { title: 'Enriquecimiento curricular · Primaria', href: 'https://www.colegioquercus.com/enriquecimiento-curricular/', icon: 'ext' },
          { title: 'Enriquecimiento curricular · Secundaria', href: 'https://www.colegioquercus.com/enriquecimiento-curricular/', icon: 'ext' }
        ])}</div>`
    }) +

    sec({
      id: 'convivencia',
      head: {
        eyebrow: 'Normativa',
        title: 'Plan de convivencia',
        lede: 'Nuestro colegio tiene establecidas una serie de normas para facilitar la convivencia que todos tenemos que conocer y cumplir. Se derivan de la normativa vigente y de los valores que recoge nuestro Proyecto Educativo.'
      },
      body: docs([
        { title: 'Decreto 32/2019, de 9 de abril', text: 'Comunidad de Madrid · convivencia en los centros docentes', href: 'https://drive.google.com/file/d/1ScYQw0HY_Sl-X3jeun1BIXnIA_QXtr3P/view?usp=sharing', icon: 'ext' },
        { title: 'Ley 2/2010, de 15 de junio', text: 'Boletín Oficial de la Comunidad de Madrid', href: 'https://drive.google.com/file/d/1dJ3Z-axePbT_aKbqMIT-QlZrr9qkutxI/view?usp=sharing', icon: 'ext' },
        { title: 'Normas de Organización y Funcionamiento', text: 'Documento del centro', href: 'https://drive.google.com/file/d/1jBLWrPIvWxHsXyWEGJlq5CA0V83cLFPQ/view?usp=sharing', icon: 'ext' }
      ]) + note('<strong>Programa TEI.</strong> El centro aplica el programa de tutoría entre iguales, una estrategia de prevención del acoso escolar en la que el alumnado mayor acompaña al de cursos inferiores.')
    }) +

    sec({
      id: 'programas',
      variant: 'warm',
      head: { eyebrow: 'Programas y proyectos', title: 'Lo que se desarrolla en el centro', center: true },
      body: grid(3, [
        { icon: 'heart', color: 'var(--rose)', title: 'Aulas TEA', text: 'Dos aulas para alumnado con necesidades educativas especiales.', href: 'orientacion.html' },
        { icon: 'cpu', color: 'var(--coral)', title: 'Aula Maker', text: 'Aula LEGO Innovation Studio con las últimas tendencias STEM.', href: 'aula-maker.html' },
        { icon: 'shield', color: 'var(--green)', title: 'Proyecto TEI', text: 'Programa antibullying basado en la tutoría entre iguales.', href: 'proyecto-educativo.html#convivencia' },
        { icon: 'compass', color: 'var(--sky-600)', title: 'Proyecto Orión', text: 'Acompañamiento en la toma de decisiones sobre continuidad de estudios.', href: 'orientacion.html#academica' },
        { icon: 'cap', color: 'var(--violet)', title: 'Bachillerato Dual', text: 'Doble titulación española y americana desde 3.º de la ESO.', href: 'bachillerato-dual.html' },
        { icon: 'spark', color: 'var(--gold)', title: 'Altas capacidades', text: 'Programa de atención al alumnado con altas capacidades.', href: 'orientacion.html' },
        { icon: 'globe', color: 'var(--mint)', title: 'e-Twinning', text: 'Proyecto europeo de colaboración e intercambio tecnológico.', href: 'vida-quercus.html' },
        { icon: 'leaf', color: 'var(--green-600)', title: 'Ecoescuela', text: 'Proyecto para mejorar la sostenibilidad del centro.', href: 'ecoescuela.html' },
        { icon: 'megaphone', color: 'var(--gold-600)', title: 'Quercuriosos', text: 'La revista digital realizada por nuestro alumnado.', href: 'vida-quercus.html#quercuriosos' }
      ].map(lcard).join(''))
    }) +

    sec({
      id: 'resultados',
      head: {
        eyebrow: 'Transparencia',
        title: 'Resultados del centro',
        lede: 'Publicamos los resultados de las pruebas externas oficiales y de la evaluación para el acceso a la universidad.'
      },
      body: gallery([
        { image: 'notas-pau-2026.png', title: 'Notas PAU 2026', size: 'wide' },
        { image: 'cabecera_notas_evau_24-51.png', title: 'Resultados EvAU 2024' },
        { image: 'resultados-academicos-23-24.png', title: 'Resultados académicos 2023-24' },
        { image: 'pruebas-externas-primaria.png', title: 'Pruebas externas · Primaria' },
        { image: 'pruebas-externas-secundaria.png', title: 'Pruebas externas · Secundaria' }
      ])
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Descarga nuestro Proyecto Educativo',
      text: 'Toda la información sobre nuestra forma de entender la educación, en un único documento.',
      buttons: [
        { text: 'Descargar documento', href: 'https://drive.google.com/file/d/1fMvrYKhPrSDLjhEwPbtDkyuG6qnh5iJO/view?usp=drive_link', style: 'gold' },
        { text: 'Información a las familias', href: 'familias.html', style: 'light' }
      ]
    })}</section>`
};

/* -------------------------------------------------------------- Organigrama */
const organigrama = {
  file: 'organigrama.html',
  title: 'Organigrama',
  description: 'Organigrama y estructura del Colegio Quercus: equipo directivo, etapas, departamentos y servicios.',
  body: phero({
    eyebrow: 'El Colegio',
    title: 'Organigrama del centro',
    lede: 'Estructura de gobierno, coordinaciones de etapa, departamentos didácticos y servicios del Colegio Quercus.',
    crumbs: [{ label: 'El Colegio' }, { label: 'Organigrama' }]
  }) +

    sec({
      body: `<figure class="split__media reveal" style="max-width:1000px;margin-inline:auto">
        <a class="gal__item" style="border-radius:var(--r-lg)" href="assets/img/organigrama-26.png" data-full="assets/img/organigrama-26.png" data-caption="Organigrama del Colegio Quercus, curso 2026/27">
          ${img('organigrama-26.png', 'Organigrama del Colegio Quercus')}
        </a>
        <figcaption class="small muted center mt-1">Pulsa sobre la imagen para ampliarla. Organigrama vigente en el curso 2026/2027.</figcaption>
      </figure>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Contacto directo', title: '¿A quién dirigirte?', center: true },
      body: grid(3, [
        { icon: 'mail', color: 'var(--green)', title: 'Dirección', text: 'direccion@colegioquercus.com', href: 'mailto:direccion@colegioquercus.com' },
        { icon: 'doc', color: 'var(--gold)', title: 'Secretaría', text: 'secretaria@colegioquercus.com', href: 'mailto:secretaria@colegioquercus.com' },
        { icon: 'users', color: 'var(--sky-600)', title: 'Secretaría de Infantil', text: 'secretariainfantil@colegioquercus.com', href: 'mailto:secretariainfantil@colegioquercus.com' },
        { icon: 'chart', color: 'var(--coral)', title: 'Facturación', text: 'facturacion@colegioquercus.com', href: 'mailto:facturacion@colegioquercus.com' },
        { icon: 'cap', color: 'var(--violet)', title: 'Formación Profesional', text: 'fp@colegioquercus.com', href: 'mailto:fp@colegioquercus.com' },
        { icon: 'briefcase', color: 'var(--green-600)', title: 'Recursos Humanos', text: 'rrhh@colegioquercus.com', href: 'mailto:rrhh@colegioquercus.com' }
      ].map(lcard).join('')) +
        `<div class="mt-3 reveal">${arrowLink('familias.html#emails', 'Ver directorio completo de correos del profesorado')}</div>`
    })
};

/* ----------------------------------------------------------- Instalaciones */
const instalaciones = {
  file: 'instalaciones.html',
  title: 'Instalaciones',
  description: 'Piscina cubierta, rocódromo, polideportivo, laboratorios, Aula Maker LEGO, biblioteca y más de 20 espacios especializados.',
  ogImage: 'piscina.jpg',
  body: phero({
    image: 'quercuspolivalente.jpg',
    eyebrow: 'El Colegio',
    title: 'Más de veinte espacios especializados',
    lede: 'Piscina cubierta, rocódromo, laboratorios, aula LEGO, biblioteca, salón de actos y comedores con cocina propia, todo dentro del mismo campus.',
    crumbs: [{ label: 'El Colegio' }, { label: 'Instalaciones' }]
  }) +

    sec({
      variant: 'tight',
      body: stats([
        { value: '20', count: 20, suffix: '+', label: 'Espacios e instalaciones' },
        { value: '3', count: 3, label: 'Laboratorios de ciencias' },
        { value: '350', count: 350, label: 'Localidades en el salón de actos' },
        { value: '2', count: 2, label: 'Cocinas y comedores propios' }
      ])
    }) +

    sec({
      head: {
        eyebrow: 'Recorrido',
        title: 'Conoce el colegio espacio a espacio',
        lede: 'Pulsa sobre cualquier imagen para verla ampliada.',
        center: true
      },
      body: gallery(FACILITIES)
    }) +

    sec({
      variant: 'soft',
      body: split({
        image: 'piscina.jpg',
        imageAlt: 'Piscina cubierta del Colegio Quercus',
        eyebrow: 'Abierta a la comunidad',
        title: 'Piscina cubierta, climatizada y semiolímpica',
        body: `<p>Preparada con material para el trabajo con alumnos desde los dos años, la piscina se utiliza en horario lectivo y también está disponible para familias, antiguos alumnos y usuarios externos mediante abonos.</p>`,
        buttons: [{ text: 'Ver abonos de piscina', href: 'piscina.html', style: 'primary' }]
      })
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Visítanos y recórrelas en persona',
      text: 'Organizamos visitas guiadas por el centro para las familias interesadas.',
      buttons: [{ text: 'Solicitar visita', href: 'contacto.html#visita', style: 'gold' }]
    })}</section>`
};

/* ------------------------------------------------------------ Distinciones */
const distinciones = {
  file: 'distinciones.html',
  title: 'Distinciones y certificaciones',
  description: 'Premio Laurel de Oro, Escuela Amiga de UNICEF, LEGO Innovation Studio, bandera verde Ecoescuela y otras distinciones del Colegio Quercus.',
  body: phero({
    eyebrow: 'El Colegio',
    title: 'Distinciones y certificaciones',
    lede: 'A lo largo de estos años, el Colegio Quercus ha ido obteniendo una serie de distinciones y certificaciones que avalan nuestra labor y esfuerzo.',
    crumbs: [{ label: 'El Colegio' }, { label: 'Distinciones' }]
  }) +

    sec({ body: certs(CERTS) }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Qué significa cada una', title: 'Reconocimientos explicados' },
      body: faq([
        { id: 'laurel', q: 'Laurel de Oro', a: '<p>Radio Turismo otorgó el Laurel de Oro al Colegio Quercus como reconocimiento a su positiva presencia en el sector, titulándole centro de enseñanza <strong>recomendado</strong> en el municipio de Boadilla del Monte.</p>' },
        { id: 'unicef', q: 'Escuela Amiga de UNICEF', a: '<p>La iniciativa «Escuelas Amigas de UNICEF» es un proyecto que tiene como objetivo promover un cambio de actitudes sociales, favoreciendo los valores de la Educación para el Desarrollo dentro del ámbito escolar.</p>' },
        { id: 'micole', q: 'Mejores Colegios 2023, 2024 y 2025', a: '<p>La página web MiCole nos incluye en su ranking de mejores centros de la Comunidad de Madrid, reconociendo nuestras ganas de mejorar y el proyecto educativo del que disponemos.</p>' },
        { id: 'lego', q: 'Certificación LEGO Innovation Studio', a: '<p>El Colegio Quercus y su profesorado han sido formados y certificados por LEGO por ser el <strong>primer colegio de Boadilla del Monte</strong> con un Aula LEGO Innovation Studio.</p><p><a href="aula-maker.html">Conoce el Aula Maker</a></p>' },
        { id: 'excelente', q: 'Certificación Escuela Excelente', a: '<p>«Escuela Excelente» trabaja en la mejora técnica y profesional de los centros educativos concertados, la promoción de la innovación pedagógica y la gestión de calidad, impulsando un modelo de calidad en el colegio.</p>' },
        { id: 'eco', q: 'Bandera Verde Ecoescuela', a: '<p>Distintivo internacional que acredita el trabajo del centro en sostenibilidad y educación ambiental, impulsado por nuestro Comité de Alumnos.</p><p><a href="ecoescuela.html">Ver el proyecto Ecoescuela</a></p>' },
        { id: 'tei', q: 'Programa TEI', a: '<p>Certificación del programa de tutoría entre iguales, una estrategia de prevención del acoso escolar en la que el alumnado de cursos superiores acompaña al de cursos inferiores.</p>' },
        { id: 'dual', q: 'Bachillerato Dual Americano', a: '<p>Acreditación que permite a nuestro alumnado simultanear el bachillerato español y el americano y obtener una doble titulación.</p><p><a href="bachillerato-dual.html">Más sobre el Bachillerato Dual</a></p>' }
      ])
    })
};

module.exports = [quienesSomos, queOfrecemos, porQueElegirnos, proyectoEducativo, organigrama, instalaciones, distinciones];
