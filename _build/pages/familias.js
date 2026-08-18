'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, split, checks, stats, faq, docs, gallery, table, cta, grid, arrowLink, note, prose } = L;
const { phero } = require('../layout');

/* ------------------------------------------------ Información a las familias */
const familias = {
  file: 'familias.html',
  title: 'Información a las familias',
  description: 'Portal de familias del Colegio Quercus: oferta educativa, servicios complementarios, programas, documentación del centro y contactos.',
  body: phero({
    eyebrow: 'Familias',
    title: 'Toda la información en un solo lugar',
    lede: 'Aquí encontrarás reunida la información que deben contener las páginas web de los centros educativos de la Comunidad de Madrid, en cumplimiento de la Ley 1/2022, de 10 de febrero.',
    crumbs: [{ label: 'Familias' }, { label: 'Información a las familias' }]
  }) +

    sec({
      body: `<div class="grid grid--2 reveal">
        <a class="lcard" href="https://www.youtube.com/watch?v=TmsgQAqlm6I" target="_blank" rel="noopener" style="--c:var(--rose)">
          <span class="lcard__icon">${I.camera}</span>
          <span><strong>Vídeo de presentación</strong><span>Conoce el centro en cinco minutos</span></span>
          <span class="lcard__go">${I.arrow}</span>
        </a>
        <a class="lcard" href="https://drive.google.com/file/d/188aqbkbkYUufvxIvT8A9NzFQ1Dr_MzTY/view?usp=sharing" target="_blank" rel="noopener" style="--c:var(--gold)">
          <span class="lcard__icon">${I.book}</span>
          <span><strong>Libreto de presentación</strong><span>Visión general del Colegio Quercus</span></span>
          <span class="lcard__go">${I.arrow}</span>
        </a>
      </div>`
    }) +

    sec({
      id: 'oferta',
      variant: 'soft',
      head: { eyebrow: 'Oferta educativa', title: 'Enseñanzas, etapas y niveles' },
      body: grid(3, [
        { icon: 'cap', color: 'var(--green)', title: 'Etapas y niveles', text: 'De la escuela infantil al Bachillerato', href: 'que-ofrecemos.html' },
        { icon: 'compass', color: 'var(--sky-600)', title: 'Itinerarios y modalidades', text: 'Bachillerato de Ciencias y de Humanidades', href: 'que-ofrecemos.html#bachillerato' },
        { icon: 'briefcase', color: 'var(--coral)', title: 'Formación Profesional', text: 'Ciclos de Grado Medio y Grado Superior', href: 'ciclos-formativos.html' }
      ].map(lcard).join(''))
    }) +

    sec({
      id: 'servicios',
      head: { eyebrow: 'Servicios complementarios', title: 'De carácter voluntario y no lucrativo' },
      body: grid(3, [
        { icon: 'shield', color: 'var(--green)', title: 'Servicio de salud', text: 'Enfermería, seguros y protección tecnológica', href: 'servicios-complementarios.html#salud' },
        { icon: 'clock', color: 'var(--gold)', title: 'Horario ampliado', text: 'De 7:00 a 9:00 y de 17:00 a 18:00', href: 'servicios-complementarios.html#horario' },
        { icon: 'users', color: 'var(--violet)', title: 'Gabinete Psicopedagógico', text: 'Orientación y atención a la diversidad', href: 'orientacion.html' },
        { icon: 'utensils', color: 'var(--coral)', title: 'Comedor', text: 'Dos cocinas propias y hasta 10 menús', href: 'comedor.html' },
        { icon: 'book', color: 'var(--sky-600)', title: 'Servicio de biblioteca', text: 'Horario ampliado de 17:00 a 18:00', href: 'servicios-complementarios.html#biblioteca' },
        { icon: 'doc', color: 'var(--green-600)', title: 'Tarifas', text: 'Disponibles en las secretarías del centro', href: 'secretaria.html' }
      ].map(lcard).join(''))
    }) +

    sec({
      id: 'programas',
      variant: 'warm',
      head: { eyebrow: 'Programas y proyectos', title: 'Los que se desarrollan en el centro', center: true },
      body: grid(3, [
        { icon: 'heart', color: 'var(--rose)', title: 'Aulas TEA', text: 'Dos aulas para alumnado con necesidades educativas especiales', href: 'orientacion.html' },
        { icon: 'cpu', color: 'var(--coral)', title: 'Aula Maker', text: 'Aula LEGO Innovation Studio con tendencias STEM', href: 'aula-maker.html' },
        { icon: 'shield', color: 'var(--green)', title: 'Proyecto TEI', text: 'Programa antibullying de tutoría entre iguales', href: 'proyecto-educativo.html#convivencia' },
        { icon: 'compass', color: 'var(--sky-600)', title: 'Proyecto Orión', text: 'Ayuda en la toma de decisiones sobre los estudios', href: 'orientacion.html#academica' },
        { icon: 'cap', color: 'var(--violet)', title: 'Bachillerato Dual', text: 'Doble titulación española y americana', href: 'bachillerato-dual.html' },
        { icon: 'spark', color: 'var(--gold)', title: 'Altas capacidades', text: 'Programa de atención al alumnado con altas capacidades', href: 'orientacion.html' },
        { icon: 'globe', color: 'var(--mint)', title: 'Proyecto e-Twinning', text: 'Colaboración europea e intercambio tecnológico', href: 'vida-quercus.html' },
        { icon: 'megaphone', color: 'var(--gold-600)', title: 'Revista Quercuriosos', text: 'Revista digital realizada por el alumnado', href: 'vida-quercus.html#quercuriosos' },
        { icon: 'leaf', color: 'var(--green-600)', title: 'Eco-Escuela', text: 'Proyecto de sostenibilidad del centro', href: 'ecoescuela.html' }
      ].map(lcard).join(''))
    }) +

    sec({
      id: 'documentacion',
      head: { eyebrow: 'Documentación del centro', title: 'Descargas oficiales' },
      body: docs([
        { title: 'Proyecto Educativo de Centro', text: 'Líneas básicas del PEC', href: 'https://drive.google.com/file/d/1fMvrYKhPrSDLjhEwPbtDkyuG6qnh5iJO/view?usp=drive_link', icon: 'ext' },
        { title: 'Normas de Organización y Funcionamiento', text: 'NOF del Colegio Quercus', href: 'https://drive.google.com/file/d/1jBLWrPIvWxHsXyWEGJlq5CA0V83cLFPQ/view?usp=sharing', icon: 'ext' },
        { title: 'Plan Digital de Centro', text: 'Estrategia digital del colegio', href: 'https://drive.google.com/file/d/1O9UKARk9OKsJRrSr05ujNIbSQ265hd1E/view?usp=sharing', icon: 'ext' },
        { title: 'Plan de Orientación Académica y Profesional (POAP)', text: 'Documento de orientación', href: 'https://drive.google.com/file/d/10Jr0Ud29vv-PZTEq9x5bPPKSH5U2kyPM/view', icon: 'ext' },
        { title: 'Listado de actividades extraescolares', text: 'Dosier del curso', href: 'https://drive.google.com/file/d/1XiQyoG1jd9XjrsRTohs0pG8_9w2kBWvF/view?usp=sharing', icon: 'ext' },
        { title: 'Información sobre el Seguro Escolar Obligatorio', text: 'Prestaciones para 3.º y 4.º de la ESO y Bachillerato', href: 'https://www.colegioquercus.com/wp-content/uploads/2019/09/INFORMACI%C3%93N-SEGURO-ESCOLAR.pdf', icon: 'ext' }
      ])
    }) +

    sec({
      id: 'emails',
      variant: 'soft',
      head: {
        eyebrow: 'Contactos',
        title: 'Correos del profesorado',
        lede: 'Listados de correos electrónicos del profesorado del centro, divididos por etapas.'
      },
      body: docs([
        { title: 'Mails de Educación Infantil', href: 'https://drive.google.com/file/d/1-7sTs1RTt-iWUn90AfyDBy9K63LzmJvo/view?usp=drive_link', icon: 'ext' },
        { title: 'Mails de Educación Primaria', href: 'https://drive.google.com/file/d/15xqJ1wKNFVZQH4A6Q0YsksNcuzJBd8dU/view?usp=drive_link', icon: 'ext' },
        { title: 'Mails de Educación Secundaria Obligatoria', href: 'https://drive.google.com/file/d/1dN-vr66wi_TBpUexTdnbFlBMV_eWDuJm/view?usp=drive_link', icon: 'ext' },
        { title: 'Mails de Bachillerato', href: 'https://drive.google.com/file/d/1_9udLSakKjZjEDzQIqoUwM10HiZV-p-Y/view?usp=drive_link', icon: 'ext' },
        { title: 'Mails de Dirección y Departamentos', href: 'https://drive.google.com/file/d/1Fyk9HhQ0WWmNCXM035gD08arPfHtZXdd/view?usp=drive_link', icon: 'ext' }
      ]) + note('Para cualquier consulta general puedes escribir a <a href="mailto:secretaria@colegioquercus.com">secretaria@colegioquercus.com</a> o llamar al <a href="tel:+34916338516">916 338 516</a>.')
    }) +

    sec({
      head: { eyebrow: 'Enlaces rápidos', title: 'Matriculación, resultados y AMPA' },
      body: grid(4, [
        { icon: 'key', color: 'var(--green)', title: 'Proceso de admisión', text: 'Curso 2026/2027', href: 'matriculacion.html' },
        { icon: 'medal', color: 'var(--gold)', title: 'Ayudas y becas', text: 'Quercus y Comunidad de Madrid', href: 'becas.html' },
        { icon: 'chart', color: 'var(--coral)', title: 'Resultados del centro', text: 'Pruebas externas y PAU', href: 'proyecto-educativo.html#resultados' },
        { icon: 'users', color: 'var(--sky-600)', title: 'AMPA Quercus', text: 'Asociación de madres y padres', href: 'https://ampaquercus.com/' }
      ].map(lcard).join(''))
    })
};

/* ------------------------------------------------------------------ Comedor */
const comedor = {
  file: 'comedor.html',
  title: 'Comedor',
  description: 'Comedor del Colegio Quercus: dos cocinas propias, productos frescos de temporada y hasta 10 menús adaptados a alergias e intolerancias.',
  ogImage: 'comedorquercusbanner.png',
  body: phero({
    image: 'comedor.jpg',
    eyebrow: 'Familias',
    title: 'Comedor con cocina propia',
    lede: 'Nos preocupamos por la salud y el bienestar de nuestros alumnos. Conscientes de nuestro papel en el desarrollo de hábitos de vida saludables, nos esforzamos cada día por ofrecer el mejor servicio.',
    crumbs: [{ label: 'Familias' }, { label: 'Comedor' }]
  }) +

    sec({
      variant: 'tight',
      body: stats([
        { value: '2', count: 2, label: 'Comedores y cocinas propias' },
        { value: '10', count: 10, label: 'Menús diferentes disponibles' },
        { value: '100', count: 100, suffix: ' %', label: 'Productos frescos y de temporada' },
        { value: '1', count: 1, label: 'Equipo de nutrición y cocina propio' }
      ])
    }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <p class="lead">La elaboración de los menús está compuesta por productos frescos, de temporada y primera calidad. Cada uno de ellos se adecúa en función de las necesidades de las diferentes etapas del centro por nuestro equipo de nutrición y cocina.</p>
            <p>Las <strong>alergias e intolerancias alimenticias</strong> son atendidas con especial rigor. Contamos con hasta diez menús diferentes para adaptarnos a las necesidades de los alumnos que acrediten la imposibilidad de ingerir determinados alimentos que perjudican su salud: gluten, lactosa, legumbres, frutos secos, etc.</p>
            <h3>Estrategia NAOS</h3>
            <p>Según la Organización Mundial de la Salud, seis de los siete principales factores determinantes de la salud están ligados a la práctica de actividad física y a la alimentación. Por ello fomentamos la <strong>Estrategia NAOS</strong> (Nutrición, Actividad Física y Prevención de la Obesidad), bajo la premisa «Come sano y muévete».</p>
          `)}
          ${checks([
        '<strong>Base de la pirámide</strong>, a diario y varias veces: arroz, pastas, patatas, verduras, hortalizas, frutas, lácteos y aceite de oliva.',
        '<strong>Nivel intermedio</strong>, varias veces cada semana: carne, pescados, huevos, legumbres y frutos secos.',
        '<strong>Cúspide</strong>, ocasionalmente: dulces, helados y refrescos.',
        'Y siempre, beber agua: cuanta más, mejor.'
      ], 'mt-2')}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>Menús del mes</h4>
            <p>Consulta los menús escolares actualizados en el portal de nuestro proveedor.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="http://easy.es.sodexo.com/es/quercus/comedores/" target="_blank" rel="noopener">Ver menús</a>
          </div>
          <div class="abox">
            <h4>También te interesa</h4>
            <ul>
              <li><a href="servicios-complementarios.html">Servicios complementarios</a></li>
              <li><a href="becas.html">Becas de comedor</a></li>
              <li><a href="escuela-infantil.html">Escuela infantil</a></li>
            </ul>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Descargas', title: 'Menús disponibles', lede: 'Menús en PDF publicados por el centro. Se actualizan cada mes.' },
      body: docs([
        { title: 'Menú 1.er Ciclo', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/06/MENU-1oCiclo.pdf' },
        { title: 'Menú 1.er Ciclo (purés)', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/06/MENU-JULIO-1o-CICLO.pdf' },
        { title: 'Menú de campamento', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/07/MENU-CAMPA-JULIO-DEL-6-AL-24.pdf' },
        { title: 'Menú sin gluten', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/07/MENU-CAMPA-JULIO-GLUTEN.pdf' },
        { title: 'Menú sin frutos secos', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/07/MENU-CAMPA-JULIO-FRUTOS-SECOS.pdf' },
        { title: 'Menú sin legumbres', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/07/MENU-CAMPA-JULIO-LENTEJAS.pdf' },
        { title: 'Menú sin cerdo', href: 'https://www.colegioquercus.com/wp-content/uploads/2026/07/MENU-CAMPA-JULIO-CERDO.pdf' }
      ])
    }) +

    sec({
      head: { eyebrow: 'Alimentación saludable', title: 'Educar en alimentación empieza en casa', center: true },
      body: gallery([
        { image: 'comedorquercusbanner.png', title: 'Nuestro comedor', size: 'wide' },
        { image: 'piramidenaos1.jpg', title: 'Pirámide NAOS' },
        { image: 'agriculture-1867744_1920.jpg', title: 'Productos frescos y de temporada' },
        { image: 'porcentaje-alimentacion.png', title: 'Reparto de la alimentación diaria' },
        { image: 'comedorsostenible.gif', title: 'Comedor sostenible' }
      ])
    })
};

/* ----------------------------------------------------------------- Uniforme */
const uniforme = {
  file: 'uniforme.html',
  title: 'Uniforme',
  description: 'Uniforme del Colegio Quercus: prendas, calzado, tallas, horario de la tienda y política de cambios.',
  ogImage: 'segundocicloinfantilquercus-3-6.jpg',
  body: phero({
    eyebrow: 'Familias',
    title: 'El uniforme del Quercus',
    lede: 'Todo el alumnado del colegio, salvo Bachillerato y el aula de bebés, asiste a clase con el uniforme escolar diseñado específicamente para el centro.',
    crumbs: [{ label: 'Familias' }, { label: 'Uniforme' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <p class="lead">Todas las prendas llevan el logotipo del colegio y se pueden adquirir de manera exclusiva en la tienda, situada en la secretaría de Primaria y Secundaria.</p>
            <p>Que el alumnado de Bachillerato esté exento de acudir con uniforme no le exime de asistir con la debida corrección en cuanto a vestimenta y aseo personal.</p>
            <h3>Calzado</h3>
            <p>Es de uso obligatorio el <strong>calzado escolar de color marrón chocolate</strong> los días de uniforme, excluyéndose bailarinas, botas y similares. En la tienda del colegio disponen de dicho calzado desde la talla 25 hasta la 38.</p>
            <p>Las zapatillas de deporte deberán ser preferiblemente <strong>de color blanco</strong> —sin cordones para el alumnado que no tenga autonomía—, excluyéndose los modelos que no sean aptos para educación física.</p>
            <h3>Transición de prendas</h3>
            <p>Será <strong>2.º de Primaria</strong> el curso de transición entre las uniformidades de pichi y falda.</p>
            <p>Recordamos la importancia de marcar todas las prendas del uniforme: el colegio no se hace responsable de posibles pérdidas. Disponemos de cajas de objetos perdidos en la secretaría de Primaria y Secundaria.</p>
          `)}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>Horario de la tienda</h4>
            <p><strong>Martes y viernes</strong><br>de 16:30 a 17:45 h</p>
            <p class="mt-1"><strong>Miércoles</strong><br>de 9:30 a 10:30 h</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="https://www.colegioquercus.com/venta-uniformes-libros" target="_blank" rel="noopener">Tienda online</a>
          </div>
          <div class="abox">
            <h4>Cambios</h4>
            <p>Los cambios urgentes se realizan a domicilio con un coste de 6 € + IVA. El resto se hacen gratuitamente en el centro, dejando la prenda en el cajón habilitado de la secretaría principal dentro del paquete original y con una etiqueta indicando la talla deseada.</p>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Guía de tallas', title: 'Consulta las tallas por etapa' },
      body: docs([
        { title: 'Tallas · Primer ciclo de Infantil', text: 'De 4 meses a 3 años', href: 'https://www.colegioquercus.com/tallasuniformeprimerciclo/', icon: 'ext' },
        { title: 'Tallas · Segundo ciclo de Infantil', text: 'De 3 a 6 años', href: 'https://www.colegioquercus.com/tallasuniformesegudocicloinf', icon: 'ext' },
        { title: 'Tallas · Primaria y Secundaria', text: 'Uniforme de diario', href: 'https://www.colegioquercus.com/tallasuniformeprimariasecundaria/', icon: 'ext' },
        { title: 'Tallas · Primaria y Secundaria (deporte)', text: 'Chándal y equipación deportiva', href: 'https://www.colegioquercus.com/tallasuniformeprimariasecundaria-deporte/', icon: 'ext' },
        { title: 'Tallas · Piscina', text: 'Bañador, gorro y toalla', href: 'https://www.colegioquercus.com/tallasuniformepiscina/', icon: 'ext' }
      ])
    }) +

    sec({
      head: { eyebrow: 'Prendas', title: 'Así es el uniforme', center: true },
      body: gallery([
        { image: 'primercicloinfantilquercus-0-3.jpg', title: 'Primer ciclo de Infantil', text: '0 a 3 años' },
        { image: 'segundocicloinfantilquercus-3-6.jpg', title: 'Segundo ciclo de Infantil', text: '3 a 6 años' },
        { image: 'segundocicloinfantilquercus-3-6-2.jpg', title: 'Segundo ciclo de Infantil', text: 'Equipación deportiva' },
        { image: 'primariaysecundaria.jpg', title: 'Primaria y Secundaria' },
        { image: 'primariaysecundaria-2.jpg', title: 'Primaria y Secundaria', text: 'Chándal' },
        { image: 'uniformepiscinaquercus.jpg', title: 'Uniforme de piscina' },
        { image: 'zapato1.png', title: 'Calzado escolar', text: 'Marrón chocolate' },
        { image: 'zapatillas-blancas.jpg', title: 'Zapatillas de deporte', text: 'Preferiblemente blancas' }
      ])
    })
};

/* ----------------------------------------------------------- Extraescolares */
const extraescolares = {
  file: 'extraescolares.html',
  title: 'Extraescolares',
  description: 'Actividades extraescolares del Colegio Quercus: robótica, programación, vuelo de drones, danza, natación y muchas más.',
  body: phero({
    eyebrow: 'Familias',
    title: 'Actividades extraescolares',
    lede: 'Multitud de actividades voluntarias y sin ánimo de lucro para aprender, pensar y crear: desde robótica, programación y vuelo de drones hasta danza.',
    crumbs: [{ label: 'Familias' }, { label: 'Extraescolares' }]
  }) +

    sec({
      head: { eyebrow: 'Cómo funciona', title: 'Altas, bajas y horarios' },
      body: grid(3, [
        { icon: 'clock', color: 'var(--green)', title: 'Cuándo se realizan', text: 'En el descanso de la mañana y en el horario ampliado de tarde, de 17:00 a 18:00 h.' },
        { icon: 'doc', color: 'var(--gold)', title: 'Altas y bajas', text: 'A través del formulario oficial. La baja debe solicitarse antes del día 27 de cada mes.' },
        { icon: 'heart', color: 'var(--coral)', title: 'Sin ánimo de lucro', text: 'Todas las actividades son voluntarias y no persiguen beneficio económico.' }
      ].map(fcard).join('')) +
        `<div class="mt-3">${docs([
          { title: 'Dosier informativo de extraescolares', text: 'Toda la oferta del curso', href: 'https://drive.google.com/file/d/1XiQyoG1jd9XjrsRTohs0pG8_9w2kBWvF/view?usp=sharing', icon: 'ext' },
          { title: 'Formulario de altas y bajas', text: 'Google Forms', href: 'https://forms.gle/wg2rouPF7yKmzeUH8', icon: 'ext' },
          { title: 'Club de Natación · Aquamad Sincro', text: 'Información de la actividad', href: 'https://www.aquamadsincro.com/', icon: 'ext' }
        ])}</div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Ámbitos', title: 'Qué puedes encontrar', center: true },
      body: grid(4, [
        { icon: 'cpu', color: 'var(--coral)', title: 'Tecnología', text: 'Robótica, programación y vuelo de drones en el Aula Maker.' },
        { icon: 'swim', color: 'var(--sky-600)', title: 'Deporte y natación', text: 'Club de natación, escalada en rocódromo y deportes de equipo.' },
        { icon: 'spark', color: 'var(--violet)', title: 'Artes escénicas', text: 'Danza, teatro y actividades de expresión corporal.' },
        { icon: 'globe', color: 'var(--green)', title: 'Idiomas', text: 'Refuerzo y preparación de exámenes oficiales de inglés.' }
      ].map(fcard).join(''))
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Dudas sobre alguna actividad?',
      text: 'Escríbenos y te informamos sobre horarios, plazas disponibles y condiciones.',
      buttons: [{ text: 'Consúltanos', href: 'contacto.html', style: 'gold' }]
    })}</section>`
};

/* -------------------------------------------------- Servicios complementarios */
const servicios = {
  file: 'servicios-complementarios.html',
  title: 'Servicios complementarios',
  description: 'Horario ampliado, comedor, enfermería, seguros escolares, protección tecnológica, biblioteca y material escolar del Colegio Quercus.',
  body: phero({
    eyebrow: 'Familias',
    title: 'Servicios complementarios',
    lede: 'De carácter voluntario y no lucrativo, excepto el seguro escolar obligatorio.',
    crumbs: [{ label: 'Familias' }, { label: 'Servicios complementarios' }]
  }) +

    sec({
      id: 'horario',
      body: split({
        image: 'quercussalaestudio.jpg',
        imageAlt: 'Sala de estudio del Colegio Quercus',
        eyebrow: 'Horario ampliado',
        title: 'El colegio, abierto de 7:00 a 18:00',
        body: `<p>Los alumnos que necesiten asistir al colegio antes o después del periodo lectivo serán atendidos por el profesorado del centro.</p>`,
        checks: [
          'Horario ampliado de mañana: de 7:00 a 9:00 h',
          'Horario ampliado de tarde: de 17:00 a 18:00 h',
          'Gratuidad del horario ampliado durante el primer curso para el alumnado que se matricule en 3 años'
        ],
        buttons: [{ text: 'Consultar tarifas en secretaría', href: 'secretaria.html', style: 'ghost' }]
      })
    }) +

    sec({
      id: 'comedor',
      variant: 'soft',
      body: split({
        alt: true,
        image: 'comedor.jpg',
        imageAlt: 'Comedor escolar',
        eyebrow: 'Comedor',
        title: 'Dos comedores y dos cocinas propias',
        body: `<p>La elaboración de los menús está compuesta por productos frescos, de temporada y primera calidad. Cada uno se adecúa a las necesidades de las diferentes etapas por nuestro equipo de nutrición y cocina.</p>
          <p>Contamos con hasta diez menús diferentes para adaptarnos a las necesidades de los alumnos que acrediten la imposibilidad de ingerir determinados alimentos.</p>`,
        buttons: [{ text: 'Ver comedor y menús', href: 'comedor.html', style: 'primary' }]
      })
    }) +

    sec({
      id: 'salud',
      head: {
        eyebrow: 'Servicio de salud y protección tecnológica',
        title: 'Protección integral del alumno',
        lede: 'Un servicio complementario de carácter voluntario y sin ánimo de lucro que incluye los siguientes apartados.'
      },
      body: faq([
        { id: 'enf', q: 'Enfermería', a: '<p>El colegio dispone de una <strong>enfermera titulada</strong> a lo largo de toda la jornada escolar. Sus funciones son atender las incidencias sanitarias que puedan producirse en el centro, desarrollar el Programa de Educación para la Salud en todas las etapas educativas y supervisar las alergias e intolerancias en la dieta de los alumnos que hacen uso del comedor.</p>' },
        { id: 'seguro', q: 'Seguro de accidentes escolar', a: '<p>El colegio dispone de un seguro médico de accidentes en el ámbito educativo en el que se incluyen los mejores hospitales y clínicas de Madrid. El seguro cubre posibles accidentes dentro del colegio o en actividades escolares fuera del centro. En caso de necesidad se desplazará al menor a un centro sanitario avisando a la familia.</p>' },
        { id: 'tec', q: 'Seguro tecnológico', a: '<p>Protección frente al ciberacoso y protección digital para menores.</p>' },
        { id: 'obligatorio', q: 'Seguro Escolar Obligatorio', a: '<p>Diferenciado del seguro médico y de accidentes escolar, se abona desde el centro y está gestionado por la Seguridad Social, para alumnos a partir de 3.º de la ESO.</p><p><a href="https://www.colegioquercus.com/wp-content/uploads/2019/09/INFORMACI%C3%93N-SEGURO-ESCOLAR.pdf" target="_blank" rel="noopener">Ver prestaciones del Seguro Escolar Obligatorio</a></p>' }
      ])
    }) +

    sec({
      id: 'biblioteca',
      variant: 'warm',
      body: split({
        image: 'quercusbiblioteca.jpg',
        imageAlt: 'Biblioteca del Colegio Quercus',
        eyebrow: 'Servicio de biblioteca',
        title: 'Horario ampliado en biblioteca',
        body: `<p>Disponible de lunes a viernes de <strong>17:00 a 18:00 h</strong>. Las horas de recogida de los alumnos serán a las 17:30 y a las 18:00 en la cancela del patio de primaria.</p>
          <p>Una vez apuntado el alumno, debéis enviar un correo al tutor informando de los días que haréis uso de este servicio. Las plazas están <strong>limitadas a 32</strong>, por lo que rogamos que quienes se apunten hagan uso efectivo de la biblioteca. No está permitido el uso del teléfono móvil.</p>`,
        buttons: [{ text: 'Formulario de reserva', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfcyV2Pt6q4FIi4yeHd_zBIF6uzwaxIA57m4sd-kHNLdivRHg/viewform?usp=dialog', style: 'primary' }]
      })
    }) +

    sec({
      id: 'material',
      head: { eyebrow: 'Material escolar', title: 'Incluido y entregado en clase' },
      body: prose('<p>Los alumnos de Infantil, Primaria y Secundaria recibirán material escolar: cuadernos, lápices, etc. Todo este material se irá entregando en clase al alumno conforme lo vaya precisando.</p>') +
        note('<strong>Bajas de servicios.</strong> La baja de cualquier servicio complementario debe solicitarse expresamente <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNkOaDhhvYm8eNV448WxYdgh8PfEubL_AMVcpDjBacUCdGqw/viewform?usp=header" target="_blank" rel="noopener">a través de este formulario</a> antes del día 27 de cada mes, y será efectiva el mes siguiente.')
    })
};

/* -------------------------------------------------------------- Orientación */
const orientacion = {
  file: 'orientacion.html',
  title: 'Gabinete Psicopedagógico',
  description: 'Gabinete Psicopedagógico y de Orientación del Colegio Quercus: atención a la diversidad, dificultades de aprendizaje y orientación académica.',
  ogImage: 'webquercusdo.jpg',
  body: phero({
    image: 'webquercusdo.jpg',
    eyebrow: 'Familias',
    title: 'Gabinete Psicopedagógico y de Orientación',
    lede: 'Un servicio complementario de carácter voluntario y sin ánimo de lucro que el centro pone a disposición del alumnado.',
    crumbs: [{ label: 'Familias' }, { label: 'Gabinete Psicopedagógico' }]
  }) +

    sec({
      narrow: true,
      body: prose(`
        <p class="lead">El Gabinete participa en la planificación y desarrollo de las actuaciones diseñadas para atender a la diversidad del alumnado, tanto en lo que se refiere a su capacidad de aprender como a sus intereses y motivaciones.</p>
        <p>Asimismo, tiene la responsabilidad de <strong>identificar las necesidades</strong> de estos alumnos y llevar a cabo el seguimiento de su proceso educativo, facilitando el apoyo necesario al conjunto de la comunidad escolar. De igual modo coordina el tratamiento de las dificultades de aprendizaje que puedan ser detectadas.</p>
        <p>Cada una de las etapas del colegio dispone de una <strong>orientadora</strong>, que trabaja en colaboración con un equipo de especialistas en audición y lenguaje y pedagogía terapéutica.</p>
        <p>Los alumnos con necesidades educativas especiales en las etapas concertadas tienen garantizada la atención y la orientación psicopedagógica, al estar financiadas parcialmente con fondos públicos, independientemente de si contratan el servicio del Gabinete.</p>
      `)
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Recursos', title: 'Cómo trabajamos la atención a la diversidad', center: true },
      body: grid(4, [
        { icon: 'users', color: 'var(--green)', title: 'Una orientadora por etapa', text: 'Seguimiento cercano en Infantil, Primaria, Secundaria y Bachillerato.' },
        { icon: 'megaphone', color: 'var(--sky-600)', title: 'Audición y lenguaje', text: 'Especialistas en AL trabajando de forma coordinada con el aula.' },
        { icon: 'book', color: 'var(--gold)', title: 'Pedagogía terapéutica', text: 'Apoyo específico para las dificultades de aprendizaje detectadas.' },
        { icon: 'heart', color: 'var(--rose)', title: 'Aulas TEA', text: 'Dos aulas para alumnado con necesidades educativas especiales.' }
      ].map(fcard).join(''))
    }) +

    sec({
      id: 'academica',
      body: split({
        alt: true,
        image: 'webquercusmayores1.jpg',
        imageAlt: 'Orientación académica',
        eyebrow: 'Orientación académica',
        title: 'Acompañamiento en la toma de decisiones',
        body: `<p>Somos conscientes de la importancia de la toma de decisiones académicas y profesionales de nuestro alumnado. Por ello ofrecemos un servicio de orientación académica integral diseñado para acompañar a cada alumno, ayudándole a descubrir su potencial y a elegir el itinerario más adecuado.</p>
          <p>Nuestro equipo de orientadores trabaja de manera cercana y personalizada, proporcionando asesoramiento tanto a estudiantes como a sus familias.</p>`,
        checks: [
          'Elección de asignaturas optativas e itinerarios',
          'Modalidades de Bachillerato y salidas académicas',
          'Formación Profesional y estudios superiores',
          'Proyecto Orión de la Universidad Pontificia Comillas'
        ],
        buttons: [
          { text: 'Plan de Orientación (POAP)', href: 'https://drive.google.com/file/d/10Jr0Ud29vv-PZTEq9x5bPPKSH5U2kyPM/view', style: 'primary' },
          { text: 'Ciclos formativos', href: 'ciclos-formativos.html', style: 'ghost' }
        ]
      })
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿Necesitas hablar con el Gabinete?',
      text: 'Contacta con la secretaría del centro y te pondremos en contacto con la orientadora de la etapa correspondiente.',
      buttons: [
        { text: 'Contactar', href: 'contacto.html', style: 'gold' },
        { text: 'Llamar al centro', href: 'tel:+34916338516', style: 'light' }
      ]
    })}</section>`
};

module.exports = [familias, comedor, uniforme, extraescolares, servicios, orientacion];
