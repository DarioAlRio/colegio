'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, card, split, checks, stats, faq, docs, gallery, table, cta, grid, arrowLink, note, prose } = L;
const { phero } = require('../layout');
const { NEWS } = require('../data');

/* ---------------------------------------------------------------- Noticias */
const noticias = {
  file: 'noticias.html',
  title: 'Noticias',
  description: 'Actualidad del Colegio Quercus: proyectos, premios, viajes, graduaciones y todo lo que ocurre en el centro.',
  ogImage: 'noticia-elvalordelaamistad-26.jpg',
  body: phero({
    eyebrow: 'Vida Quercus',
    title: 'Nuestras noticias',
    lede: 'Lo último que ocurre en el colegio, contado por su comunidad educativa.',
    crumbs: [{ label: 'Vida Quercus' }, { label: 'Noticias' }]
  }) +

    sec({
      body: `<div class="filters reveal" data-filters="#all-news" role="group" aria-label="Filtrar noticias">
        <button type="button" data-filter="*" aria-pressed="true">Todas</button>
        <button type="button" data-filter="primaria" aria-pressed="false">Primaria</button>
        <button type="button" data-filter="secundaria" aria-pressed="false">Secundaria</button>
        <button type="button" data-filter="bachillerato" aria-pressed="false">Bachillerato</button>
        <button type="button" data-filter="fp" aria-pressed="false">Formación Profesional</button>
      </div>
      <div id="all-news" class="grid grid--3">
        ${NEWS.map((n, i) => card({ ...n, link: { href: n.href, text: 'Leer más' } }, i)).join('')}
      </div>
      ${note('El archivo histórico completo de noticias, con más de mil entradas desde 2017, sigue disponible en <a href="https://www.colegioquercus.com/blog/" target="_blank" rel="noopener">el blog del centro</a>.')}`
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Síguenos en redes sociales',
      text: 'Publicamos a diario lo que ocurre en el colegio en Instagram, Facebook y YouTube.',
      buttons: [
        { text: 'Instagram', href: 'https://www.instagram.com/colegioquercus/', style: 'gold' },
        { text: 'YouTube', href: 'https://www.youtube.com/ColegioQuercusVideo', style: 'light' }
      ]
    })}</section>`
};

/* ------------------------------------------------------------- Vida Quercus */
const vidaQuercus = {
  file: 'vida-quercus.html',
  title: 'Vida Quercus',
  description: 'Proyectos, actividades complementarias, revista escolar, antiguos alumnos y días sin cole del Colegio Quercus.',
  body: phero({
    image: 'quercusaulamaker.jpg',
    eyebrow: 'Vida Quercus',
    title: 'Más allá del aula',
    lede: 'Innovación, solidaridad, sostenibilidad y experiencias que completan la formación académica de nuestro alumnado.',
    crumbs: [{ label: 'Vida Quercus' }]
  }) +

    sec({
      head: { eyebrow: 'Proyectos', title: 'Los que marcan nuestro curso', center: true },
      body: grid(3, [
        { image: 'aulamaker-pag4.jpg', title: 'Aula Maker', text: 'Un espacio adaptable y con tecnología integrada, diseñado para facilitar un aprendizaje flexible y trabajar las competencias del siglo XXI.', link: { href: 'aula-maker.html', text: 'Ver proyecto' } },
        { image: 'ecoescuelamundo.jpg', title: 'Ecoescuela', text: 'Con el objetivo de mejorar la sostenibilidad del centro, este proyecto busca implicar a los alumnos en el cuidado y respeto del medio ambiente.', link: { href: 'ecoescuela.html', text: 'Ver proyecto' } },
        { image: 'alimentasonrisas3.jpg', title: 'Quercus Solidario', text: 'Campañas solidarias en las que animamos a participar a toda la comunidad: si todos ponemos de nuestra parte, podemos conseguir un mundo mejor.', link: { href: 'solidario.html', text: 'Ver campañas' } },
        { image: '4esoempresabanner.jpg', title: '4.º ESO + Empresa', text: 'Programa de la Comunidad de Madrid que acerca el sistema educativo y el mundo empresarial mediante estancias educativas.', link: { href: '#eso-empresa', text: 'Más información' } },
        { image: 'irlanda.jpg', title: 'Viajes de idiomas', text: 'Programas de inmersión lingüística en Irlanda, Estados Unidos y otros destinos para mejorar el inglés en situaciones reales.', link: { href: 'viajes-idiomas.html', text: 'Ver programas' } },
        { image: 'noticia-campamentoverano23-2.jpg', title: 'Campamentos', text: 'Talleres, juegos, deporte y salidas para que los más pequeños disfruten de un verano inolvidable mientras aprenden.', link: { href: 'campamentos.html', text: 'Ver campamentos' } }
      ].map(card).join(''))
    }) +

    sec({
      id: 'eso-empresa',
      variant: 'soft',
      body: split({
        image: '4esomasempresafoto1.png',
        imageAlt: 'Programa 4.º ESO + Empresa',
        eyebrow: 'Secundaria',
        title: '4.º ESO + Empresa',
        body: `<p>Es un programa educativo de la Comunidad de Madrid dirigido a estudiantes de 4.º de la ESO cuyo objetivo es acercar el sistema educativo y el mundo laboral, facilitando que estén mejor preparados para tomar decisiones sobre su futuro académico y profesional.</p>
          <p>Los estudiantes viven una inmersión en un entorno de trabajo adulto haciendo énfasis en la parte educativa y de aprendizaje. En el Colegio Quercus las estancias son de <strong>cuatro días lectivos consecutivos</strong> entre marzo y abril.</p>`,
        checks: [
          'Sensibilizar a los alumnos con el entorno tecnológico, económico y profesional',
          'Poner en práctica conocimientos adquiridos en el aula',
          'Descubrir qué les gustaría hacer profesionalmente',
          'Ganar experiencia práctica en el mundo laboral'
        ],
        buttons: [
          { text: 'Documentación del programa', href: 'https://drive.google.com/file/d/19B_GQMytYawIb-bYYpA4POiSBo1ep1Nw/view?usp=sharing', style: 'primary' },
          { text: 'Web oficial del programa', href: 'http://www.educa2.madrid.org/web/4eso-empresa', style: 'ghost' }
        ]
      })
    }) +

    sec({
      id: 'complementarias',
      head: {
        eyebrow: 'Actividades complementarias',
        title: 'Aprender en otro contexto',
        lede: 'Cada departamento organiza a lo largo del curso distintas actividades lúdicas y formativas en un contexto diferente al habitual.'
      },
      body: prose(`
        <p>Estas actividades propician nuevas formas de relación entre los alumnos, no solo creando vínculos más fuertes sino permitiendo, a través de la convivencia, el desarrollo de valores como el trabajo en equipo, la corresponsabilidad y la solidaridad mediante la ayuda al compañero.</p>
        <p>La relación entre alumnos y profesores también se ve favorecida: el marco donde se realizan estas actividades facilita el acercamiento y el conocimiento mutuos, y ayuda al profesorado a abrir otros canales de comunicación.</p>
      `) +
        `<div class="grid grid--4 mt-3">${[
          { icon: 'globe', color: 'var(--mint)', title: 'Viaje a Irlanda', text: 'Inmersión lingüística consolidada', href: 'viajes-idiomas.html' },
          { icon: 'spark', color: 'var(--sky-600)', title: 'Semana de esquí', text: 'Actividad de invierno para Secundaria', href: 'vida-quercus.html#dias-sin-cole' },
          { icon: 'cap', color: 'var(--gold)', title: 'Viajes de fin de etapa', text: 'Cierre de Primaria, ESO y Bachillerato', href: 'contacto.html' },
          { icon: 'compass', color: 'var(--coral)', title: 'Salidas culturales', text: 'A distintos puntos de España en Secundaria', href: 'contacto.html' }
        ].map(lcard).join('')}</div>`
    }) +

    sec({
      id: 'quercuriosos',
      variant: 'warm',
      body: split({
        alt: true,
        image: 'quercusbiblioteca.jpg',
        imageAlt: 'Biblioteca del centro',
        eyebrow: 'Revista escolar',
        title: 'Quercuriosos',
        body: `<p>Nuestra revista digital, hecha por y para nuestros estudiantes. Alumnas y alumnos del colegio reflejan su opinión, realizan entrevistas y recopilan toda clase de información relacionada con el centro.</p>`,
        buttons: [{ text: 'Acceder a Quercuriosos', href: 'https://sites.google.com/colegioquercus.com/quercuriosos/inicio', style: 'primary' }]
      })
    }) +

    sec({
      id: 'dias-sin-cole',
      head: {
        eyebrow: 'Días sin cole',
        title: 'Planes para los días no lectivos',
        lede: 'En los días no lectivos el centro propone excursiones y actividades dirigidas al alumnado de 3, 4 y 5 años de Infantil, Primaria y ESO.'
      },
      body: grid(4, [
        { icon: 'flask', color: 'var(--sky-600)', title: 'MUNCYT', text: 'Museo Nacional de Ciencia y Tecnología' },
        { icon: 'spark', color: 'var(--violet)', title: 'Iniciación al esquí', text: 'Curso de tres días en la pista indoor de Xanadú' },
        { icon: 'leaf', color: 'var(--mint)', title: 'Zoo Aquarium', text: 'Jornada completa en el zoo de Madrid' },
        { icon: 'heart', color: 'var(--coral)', title: 'Parque Warner', text: 'Salida de fin de curso' }
      ].map(fcard).join('')) +
        `<div class="mt-3">${docs([
          { title: 'Dosier informativo de excursiones', text: 'Actividades de días sin cole', href: 'https://drive.google.com/file/d/1nSSCgvedZSQrvlVxyv5Fxx2EaETOkp0z/view', icon: 'ext' }
        ])}</div>`
    }) +

    sec({
      id: 'antiguos',
      variant: 'soft',
      body: split({
        image: 'webquercusmayores1.jpg',
        imageAlt: 'Antiguos alumnos del Colegio Quercus',
        eyebrow: 'Comunidad',
        title: 'Antiguos alumnos',
        body: `<p>¿Eres antiguo alumno del Quercus? No te pierdas los eventos exclusivos, las reuniones y las noticias del centro. Mantente en contacto con la Familia Quercus y participa en las actividades que organizamos cada curso.</p>`,
        buttons: [
          { text: 'Escríbenos', href: 'contacto.html', style: 'primary' },
          { text: 'Abonos de piscina', href: 'piscina.html', style: 'ghost' }
        ]
      })
    })
};

/* --------------------------------------------------------------- Aula Maker */
const aulaMaker = {
  file: 'aula-maker.html',
  title: 'Aula Maker',
  description: 'Aula LEGO Innovation Studio del Colegio Quercus: robótica, programación y competencias del siglo XXI.',
  ogImage: 'aulamaker-pag4.jpg',
  body: phero({
    image: 'quercusaulamaker.jpg',
    eyebrow: 'Vida Quercus',
    title: 'Aula Maker · LEGO Innovation Studio',
    lede: 'Un espacio versátil que combina laboratorio, taller y aula, inaugurado en septiembre de 2019 en nuestra apuesta por la innovación educativa.',
    crumbs: [{ label: 'Vida Quercus' }, { label: 'Aula Maker' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">El Colegio Quercus inauguró su «aula maker» con el objetivo de incorporar de manera efectiva las últimas tendencias y herramientas tecnológicas para mejorar el proceso de enseñanza-aprendizaje.</p>
        <p>Además, el colegio recibió, gracias a este espacio y tras la formación de varios docentes, el sello <strong>«Aula LEGO Education»</strong>, que convirtió a nuestro centro en el primero con este reconocimiento en todo el municipio de Boadilla del Monte.</p>
        <h3>Un espacio que cambia con la actividad</h3>
        <p>Cuenta con mobiliario móvil —mesas y sillas—, una zona de grada, tarima, pared chroma y una importante dotación de materiales para las actividades de tecnología y robótica.</p>
        <h3>Del área de Ciencias a Tecnología y Robótica</h3>
        <p>En el curso 2019-20 se implementó en toda la etapa de Primaria la materia «Tecnología y Recursos Digitales para el Aprendizaje», con una sesión semanal en el aula maker. Actualmente, tras la implantación de la LOMLOE, se ha transformado en la asignatura <strong>«Tecnología y Robótica»</strong>.</p>
        <p>Su metodología se basa en el <strong>aprendizaje por descubrimiento</strong>: el profesor actúa como guía y activador de la actividad, con el objetivo de fomentar el trabajo de las competencias del siglo XXI y los Objetivos de Desarrollo Sostenible entre el alumnado.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Equipamiento', title: 'Qué encontrarás dentro', center: true },
      body: grid(4, [
        { icon: 'cpu', color: 'var(--coral)', title: 'Kits LEGO por edades', text: 'Robótica adaptada a cada etapa, con el sello Aula LEGO Education.' },
        { icon: 'camera', color: 'var(--violet)', title: 'Pared chroma', text: 'Para producción audiovisual y proyectos de comunicación digital.' },
        { icon: 'users', color: 'var(--green)', title: 'Mobiliario móvil y grada', text: 'El espacio se reconfigura según la dinámica de trabajo.' },
        { icon: 'spark', color: 'var(--gold)', title: 'Robots educativos', text: 'Dispositivos programables para iniciarse en la lógica y la secuenciación.' }
      ].map(fcard).join(''))
    }) +

    sec({
      head: { eyebrow: 'Galería', title: 'El aula en funcionamiento', center: true },
      body: gallery([
        { image: 'aulamaker-pag1.jpg', title: 'Trabajo por equipos', size: 'wide' },
        { image: 'aulamaker-pag2.jpg', title: 'Robótica LEGO' },
        { image: 'aulamaker-pag3v2.jpg', title: 'Programación' },
        { image: 'aulamaker-pag4.jpg', title: 'Aprendizaje por descubrimiento' },
        { image: 'quercusaulamaker.jpg', title: 'El espacio' }
      ])
    })
};

/* --------------------------------------------------------------- Ecoescuela */
const ecoescuela = {
  file: 'ecoescuela.html',
  title: 'Ecoescuela',
  description: 'Proyecto Ecoescuela del Colegio Quercus: bandera verde, recreo residuo cero, patrulla verde y decálogo de sostenibilidad.',
  ogImage: 'ecoescuelamundo.jpg',
  body: phero({
    image: 'ecoescuelamundo.jpg',
    eyebrow: 'Vida Quercus',
    title: 'Ecoescuela',
    lede: 'Con el objetivo central de mejorar la sostenibilidad de nuestro centro nace este proyecto, que busca implicar a los alumnos en el cuidado y respeto del medio ambiente.',
    crumbs: [{ label: 'Vida Quercus' }, { label: 'Ecoescuela' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">El programa «Ecoescuela», llevado a cabo por el <strong>Comité de Alumnos</strong>, se centra en la puesta en marcha de una serie de acciones que buscan concienciar sobre el cuidado del entorno sin comprometer las capacidades de las generaciones futuras: preocuparse por el ahora para que el mañana sea mucho más fácil.</p>
        <p>Estas medidas, que se van implantando progresivamente, giran en torno a varias propuestas con un denominador común: el cuidado de nuestro planeta.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Acciones', title: 'Qué estamos haciendo' },
      body: grid(2, [
        `<article class="card reveal">
          <div class="card__media">${img('recreoresiduo0.gif', 'Recreo de residuo cero')}<span class="card__tag">Cada miércoles</span></div>
          <div class="card__body">
            <h3>Recreo de residuo cero</h3>
            <p>De manera semanal se propone a las familias establecer los miércoles como el día en el que se intenta reducir o eliminar todo tipo de residuos en los desayunos que los alumnos toman en el patio.</p>
            <p>Se propone sustituir los bricks por botellas reutilizables o cambiar el papel de aluminio por materiales biodegradables. Junto a esto, están disponibles los contenedores de colores donde depositar los residuos clasificados.</p>
          </div>
        </article>`,
        `<article class="card reveal reveal-d1">
          <div class="card__media">${img('patrullaverde.gif', 'Patrulla verde')}<span class="card__tag">1.º y 2.º de la ESO</span></div>
          <div class="card__body">
            <h3>Patrulla verde</h3>
            <p>Un grupo de voluntarios de primero y segundo de la ESO nos ayuda a mejorar nuestros hábitos en el colegio y recuerda el Decálogo de Ecoescuela.</p>
            <p>Durante el recreo pasan por las clases de Primaria y Secundaria para comprobar si las luces y el proyector están apagados. Después observan si el uso de las papeleras es el adecuado. Su función no es controlar ni denunciar, sino acompañar y concienciar.</p>
          </div>
        </article>`
      ].join(''))
    }) +

    sec({
      head: { eyebrow: 'Decálogo', title: 'Nuestros diez compromisos', center: true },
      body: gallery([
        { image: 'ecoescuela-decalogo1.1.png', title: 'Decálogo de Ecoescuela · 1', size: 'wide' },
        { image: 'ecoescuela-decalogo2.png', title: 'Decálogo de Ecoescuela · 2', size: 'wide' },
        { image: 'certbanderaecoescuela.jpg', title: 'Bandera verde Ecoescuela' },
        { image: 'comedorsostenible.gif', title: 'Comedor sostenible' }
      ]) +
        `<div class="mt-3">${docs([
          { title: 'Presentación del proyecto Ecoescuela', text: 'Google Slides', href: 'https://docs.google.com/presentation/d/1OkKwJ629Dc5zOQ3g7dQQRoAvY9_UEPEzxSPyhai0spI/edit?usp=sharing', icon: 'ext' }
        ])}</div>`
    })
};

/* ---------------------------------------------------------------- Solidario */
const solidario = {
  file: 'solidario.html',
  title: 'Quercus Solidario',
  description: 'Campañas solidarias del Colegio Quercus: Alimenta Sonrisas, recogida de tapones, construcción de un pozo en Gambia y más.',
  ogImage: 'alimentasonrisas3.jpg',
  body: phero({
    image: 'alimentasonrisas3.jpg',
    eyebrow: 'Vida Quercus',
    title: 'Quercus Solidario',
    lede: 'El colegio presenta una serie de campañas solidarias en las que estamos trabajando y os animamos a involucraros: si todos ponemos de nuestra parte, podemos conseguir un mundo mejor.',
    crumbs: [{ label: 'Vida Quercus' }, { label: 'Quercus Solidario' }]
  }) +

    sec({
      head: { eyebrow: 'Campañas actuales', title: 'En las que puedes participar hoy' },
      body: grid(2, [
        { icon: 'heart', color: 'var(--rose)', title: 'Bruno, ¡juntos por ti!', text: 'Bruno es un niño de 6 años que, junto a su familia, pertenece a la gran familia del Quercus. Necesita diferentes terapias de estimulación y un centro educativo especializado; con carreras, mercadillos y eventos ayudamos a su familia a costearlos.' },
        { icon: 'utensils', color: 'var(--coral)', title: 'Alimenta Sonrisas', text: 'Campaña de recogida de alimentos con la que el colegio colabora para atender a familias en situación de vulnerabilidad del entorno.' },
        { icon: 'leaf', color: 'var(--mint)', title: 'Recogida de tapones', text: 'En colaboración con la Fundación ALMAR: los tapones de plástico recogidos se transforman en ayuda para tratamientos médicos.' },
        { icon: 'globe', color: 'var(--sky-600)', title: 'Construcción de un pozo en Gambia', text: 'Proyecto de cooperación para garantizar el acceso al agua potable en una comunidad gambiana.' }
      ].map(fcard).join(''))
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Historial', title: 'Campañas realizadas' },
      body: grid(3, [
        { icon: 'utensils', color: 'var(--gold)', title: 'Banco de Alimentos', text: 'Recogida anual en colaboración con el Banco de Alimentos de Madrid', href: 'solidario.html' },
        { icon: 'globe', color: 'var(--green)', title: 'Naya Nagar', text: 'Colaboración con la ONG y campaña solidaria 2014-2015', href: 'solidario.html' },
        { icon: 'heart', color: 'var(--rose)', title: 'Jornadas Solidarias 2018', text: 'Actividades de sensibilización con toda la comunidad', href: 'solidario.html' },
        { icon: 'camera', color: 'var(--violet)', title: 'Dibujos desde la India', text: 'Intercambio artístico con alumnado indio', href: 'solidario.html' },
        { icon: 'leaf', color: 'var(--mint)', title: 'Tapones para Diego', text: 'Campaña de recogida solidaria de tapones', href: 'solidario.html' },
        { icon: 'book', color: 'var(--sky-600)', title: 'Bookcrossing', text: 'Liberación de libros por el centro para fomentar la lectura', href: 'solidario.html' }
      ].map(lcard).join(''))
    }) +

    sec({
      head: { eyebrow: 'Galería', title: 'Momentos solidarios', center: true },
      body: gallery([
        { image: 'alimentasonrisas2.jpg', title: 'Alimenta Sonrisas', size: 'wide' },
        { image: 'recogidatapones22014-15.jpg', title: 'Recogida de tapones' },
        { image: 'naya.png', title: 'ONG Naya Nagar' },
        { image: 'fotopozo1.jpg', title: 'Pozo en Gambia' },
        { image: 'fotopozo2.jpg', title: 'Pozo en Gambia' },
        { image: 'fotopozo3.jpg', title: 'Pozo en Gambia' },
        { image: 'dibujosindia1.png', title: 'Dibujos desde la India' },
        { image: 'dibujosindia2.png', title: 'Dibujos desde la India' }
      ])
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Quieres colaborar?',
      text: 'Escríbenos y te contamos cómo participar en cualquiera de las campañas abiertas.',
      buttons: [
        { text: 'Contactar', href: 'contacto.html', style: 'gold' },
        { text: 'Fundación ALMAR', href: 'https://www.fundacionalmar.org/', style: 'light' }
      ]
    })}</section>`
};

/* -------------------------------------------------------------- Campamentos */
const campamentos = {
  file: 'campamentos.html',
  title: 'Campamentos',
  description: 'Campamentos de verano del Colegio Quercus: ¡Qué Verano!, intensivo de natación y Summer Camp en inglés.',
  ogImage: 'noticia-campamentoverano23-2.jpg',
  body: phero({
    image: 'noticia-campamentoverano23-2.jpg',
    eyebrow: 'Vida Quercus',
    title: 'Campamentos de verano',
    lede: 'Dos emocionantes opciones para que los más pequeños disfruten de un verano inolvidable mientras aprenden y se divierten.',
    crumbs: [{ label: 'Vida Quercus' }, { label: 'Campamentos' }]
  }) +

    sec({
      body: grid(3, [
        { image: 'bannerweb-campamentos26v3.png', title: '¡Qué Verano!', text: 'Para quienes prefieren quedarse en el corazón de nuestro colegio: talleres, juegos, actividades deportivas y salidas diseñadas para estimular la creatividad, el aprendizaje y la diversión.', link: { href: 'https://drive.google.com/file/d/1Id2MaL7qaOf8JLQ9FuZ0q2LPPUIhyTgh/view?usp=sharing', text: 'Dosier del campamento' } },
        { image: 'piscina.jpg', title: 'Intensivo de natación', text: 'Durante cinco días podrás perfeccionar tu técnica según tu nivel —iniciación, aprendizaje o tecnificación— en grupos reducidos y en nuestra piscina cubierta.', link: { href: 'contacto.html', text: 'Solicitar información' } },
        { image: 'noticia-summercamp24-1.png', title: 'Summer Camp en inglés', text: 'Sumérgete en el inglés de una manera única y divertida: actividades recreativas, deportes y talleres creativos en un entorno completamente bilingüe.', link: { href: '#summer', text: 'Ver destinos' } }
      ].map(card).join(''))
    }) +

    sec({
      id: 'summer',
      variant: 'soft',
      head: {
        eyebrow: 'Summer Camp',
        title: 'Destinos disponibles',
        lede: 'Aprender inglés viviendo aventuras y haciendo nuevos amigos.'
      },
      body: grid(3, [
        { image: 'noticia-summercamp24-2.png', title: 'Llanes', text: 'Descenso del Sella, kayak, paddle surf, trekking por la montaña y visita al Parque Natural de Cabárceno, todo en inglés.' },
        { image: 'noticia-summercamp24-3.png', title: 'Campamento urbano', text: 'Semanas temáticas en el propio colegio con talleres, deporte, piscina y excursiones.' },
        { image: 'irlanda.jpg', title: 'Irlanda', text: 'La opción con más trayectoria del Colegio Quercus: convivencia, currículo irlandés y actividades culturales.' }
      ].map(card).join('')) +
        `<div class="mt-3">${docs([
          { title: 'Dosier del campamento urbano', text: '¡Qué Verano!', href: 'https://drive.google.com/file/d/1Id2MaL7qaOf8JLQ9FuZ0q2LPPUIhyTgh/view?usp=sharing', icon: 'ext' },
          { title: 'Menús de campamento', text: 'Adaptados a alergias e intolerancias', href: 'comedor.html' }
        ])}</div>`
    }) +

    `<section class="sec sec--tight">${cta({
      title: 'Elige el campamento que más te guste',
      text: 'Prepárate para vivir un verano inolvidable. Consúltanos plazas y precios.',
      buttons: [{ text: 'Solicitar información', href: 'contacto.html', style: 'gold' }]
    })}</section>`
};

/* ---------------------------------------------------------- Viajes de idiomas */
const viajesIdiomas = {
  file: 'viajes-idiomas.html',
  title: 'Viajes de idiomas',
  description: 'Programas de inmersión lingüística del Colegio Quercus: Irlanda, Estados Unidos y estancias de curso escolar.',
  ogImage: 'irlanda.jpg',
  body: phero({
    image: 'irlanda.jpg',
    eyebrow: 'Etapas y estudios',
    title: 'Viajes de idiomas',
    lede: 'Creemos en la importancia de la inmersión lingüística para dominar un idioma. Nuestros programas combinan clases dinámicas con actividades y excursiones culturales.',
    crumbs: [{ label: 'Etapas y estudios' }, { label: 'Viajes de idiomas' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">Ya sea explorando las calles de una ciudad, disfrutando de un paisaje impresionante o participando en actividades deportivas, nuestro alumnado tiene la oportunidad de practicar inglés en situaciones reales y auténticas.</p>
        <p>Además, la atención personalizada garantiza que cada estudiante reciba el apoyo que necesita para maximizar su progreso y su confianza en el idioma.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Programas', title: 'Elige tu experiencia' },
      body: grid(2, [
        { image: 'irlanda.jpg', title: '3 semanas en Irlanda', text: 'El viaje de inmersión lingüística con más trayectoria del Colegio Quercus. Más de cinco años ofreciendo esta experiencia en un país acogedor, dirigida a estudiantes de 6.º de Primaria a 1.º de Bachillerato que deseen seguir el currículo escolar irlandés.' },
        { image: 'irlandacursoescolar.jpg', title: 'Curso escolar en Irlanda', text: 'Estancia larga para quienes buscan una inmersión completa: convivencia con familia anfitriona y escolarización en un centro irlandés durante un trimestre o un curso completo.' },
        { image: 'nueva-york.jpg', title: 'Nueva York', text: 'Programa de inmersión en Estados Unidos que combina clases de inglés con la experiencia cultural de una de las ciudades más singulares del mundo.' },
        { image: 'roosevelt_highschool.jpg', title: 'Roosevelt High School', text: 'Integración en un instituto estadounidense: asistencia a clases regulares, deporte escolar y actividades extracurriculares junto a estudiantes locales.' }
      ].map(card).join(''))
    }) +

    sec({
      head: { eyebrow: 'Inmersión lingüística', title: 'La primera toma de contacto' },
      body: prose('<p>Si lo que quieres es empezar a probar con los viajes al extranjero, esta es tu opción: la experiencia perfecta como primera toma de contacto. El programa proporciona una completa inmersión de los estudiantes en el idioma, realizando <strong>todas las actividades programadas durante tres semanas en inglés</strong>.</p>') +
        note('El colegio cuenta además con proyectos europeos <strong>Erasmus+</strong> y <strong>e-Twinning</strong>, que permiten al alumnado participar en intercambios y proyectos colaborativos con centros de toda Europa.')
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Te interesa alguno de los programas?',
      text: 'Escríbenos y te enviamos toda la información sobre fechas, destinos y condiciones.',
      buttons: [{ text: 'Solicitar información', href: 'contacto.html', style: 'gold' }]
    })}</section>`
};

module.exports = [noticias, vidaQuercus, aulaMaker, ecoescuela, solidario, campamentos, viajesIdiomas];
