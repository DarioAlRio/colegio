'use strict';
const L = require('../lib');
const { I, img, sec, btnRow, fcard, lcard, split, checks, stats, faq, docs, table, cta, grid, arrowLink, note, prose } = L;
const { phero } = require('../layout');

/* --------------------------------------------------------------- Secretaría */
const secretaria = {
  file: 'secretaria.html',
  title: 'Secretaría',
  description: 'Horarios, trámites y documentación de la secretaría del Colegio Quercus: actualización de datos, bajas de servicios y normativa.',
  ogImage: 'secretaria.jpg',
  body: phero({
    image: 'secretaria.jpg',
    eyebrow: 'Admisiones',
    title: 'Secretaría',
    lede: 'Nuestro espacio de bienvenida y atención a cuantos se acercan al colegio. Horario de atención a las familias de lunes a viernes, de 9:00 a 17:00.',
    crumbs: [{ label: 'Admisiones' }, { label: 'Secretaría' }]
  }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <h2>Horarios de atención</h2>
            <p>Os informamos del horario de secretaría para atención a las familias a partir del día 5 de septiembre: de <strong>9:00 a 17:00</strong>.</p>
            <p>Con el objetivo de mejorar la organización del centro, las entradas y salidas por la tarde fuera del horario habitual serán únicamente a las <strong>15:15</strong> y a las <strong>16:00</strong>. Para informar del horario de salida deberéis enviar un correo al tutor y a la secretaría correspondiente. En el horario de mañana recomendamos que estas entradas y salidas coincidan con los cambios de clase.</p>
            <h2>Trámites más habituales</h2>
          `)}
          ${faq([
        { id: 'datos', q: 'Actualización de datos personales', a: '<p>Presencialmente en secretaría, o bien enviando un correo con los datos a modificar a <a href="mailto:secretaria@colegioquercus.com">secretaria@colegioquercus.com</a>.</p>' },
        { id: 'bancarios', q: 'Actualización de datos bancarios', a: '<p>Presencialmente en secretaría o enviando un correo a <a href="mailto:facturacion@colegioquercus.com">facturacion@colegioquercus.com</a> con el documento SEPA cumplimentado.</p>' },
        { id: 'bajas', q: 'Baja de servicios complementarios', a: '<p>La baja de cualquier servicio complementario deberá realizarse expresamente a través del <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNkOaDhhvYm8eNV448WxYdgh8PfEubL_AMVcpDjBacUCdGqw/viewform?usp=header" target="_blank" rel="noopener">formulario de bajas</a> <strong>antes del día 27 de cada mes</strong>, y será efectiva el mes siguiente. Debe indicarse el nombre del alumno, el curso escolar y el servicio concreto.</p><p>Si la baja no fuera notificada antes de esa fecha, el servicio quedará facturado sin obligación de reembolso por parte del centro y con independencia de la efectiva prestación del servicio.</p>' },
        { id: 'tarifas', q: 'Tarifas y plazas', a: '<p>Nuestras tarifas están disponibles en las secretarías del centro. Para las etapas privadas —primer ciclo de Infantil y Bachillerato— debe consultarse en secretaría la disponibilidad de plazas.</p>' }
      ])}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>Contacto directo</h4>
            <p><strong>Secretaría general</strong><br><a href="mailto:secretaria@colegioquercus.com" style="color:#fff">secretaria@colegioquercus.com</a></p>
            <p class="mt-1"><strong>Secretaría de Infantil</strong><br><a href="mailto:secretariainfantil@colegioquercus.com" style="color:#fff">secretariainfantil@colegioquercus.com</a></p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="tel:+34916338516">91 633 85 16</a>
          </div>
          <div class="abox">
            <h4>También te interesa</h4>
            <ul>
              <li><a href="matriculacion.html">Proceso de matriculación</a></li>
              <li><a href="becas.html">Ayudas y becas</a></li>
              <li><a href="servicios-complementarios.html">Servicios complementarios</a></li>
              <li><a href="familias.html">Información a las familias</a></li>
            </ul>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Documentación', title: 'Descargas y normativa' },
      body: docs([
        { title: 'Libreto informativo del centro', text: 'Visión general del Colegio Quercus', href: 'https://drive.google.com/file/d/188aqbkbkYUufvxIvT8A9NzFQ1Dr_MzTY/view?usp=sharing', icon: 'ext' },
        { title: 'Formulario de baja de servicios', text: 'Antes del día 27 de cada mes', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeNkOaDhhvYm8eNV448WxYdgh8PfEubL_AMVcpDjBacUCdGqw/viewform?usp=header', icon: 'ext' },
        { title: 'Prestaciones del Seguro Escolar Obligatorio', text: 'Para 3.º y 4.º de la ESO y Bachillerato', href: 'https://www.colegioquercus.com/wp-content/uploads/2019/09/INFORMACI%C3%93N-SEGURO-ESCOLAR.pdf', icon: 'ext' },
        { title: 'Orden 3622/2014, de 3 de diciembre', text: 'Evaluación en Educación Primaria · BOCM', href: 'http://www.bocm.es/boletin/CM_Orden_BOCM/2014/12/10/BOCM-20141210-11.PDF', icon: 'ext' },
        { title: 'Orden 1493/2015, de 22 de mayo', text: 'Evaluación del alumnado con necesidad específica de apoyo · BOCM', href: 'http://www.bocm.es/boletin/CM_Orden_BOCM/2015/06/15/BOCM-20150615-12.PDF', icon: 'ext' },
        { title: 'Real Decreto 1533/1986', text: 'Objetividad en la evaluación · BOE', href: 'https://www.boe.es/boe/dias/1995/09/20/pdfs/A28087-28090.pdf', icon: 'ext' }
      ])
    })
};

/* ------------------------------------------------------------ Matriculación */
const matriculacion = {
  file: 'matriculacion.html',
  title: 'Matriculación 2026/2027',
  description: 'Proceso de admisión y matriculación en el Colegio Quercus para el curso 2026/2027: plazos, solicitud telemática y documentación.',
  body: phero({
    eyebrow: 'Admisiones',
    title: 'Proceso de admisión 2026 / 2027',
    lede: 'Plazo de entrega de solicitudes del 11 al 25 de marzo de 2026, ambos inclusive, para las etapas sostenidas con fondos públicos.',
    crumbs: [{ label: 'Admisiones' }, { label: 'Matriculación' }]
  }) +

    sec({
      variant: 'tight',
      body: `<div class="grid grid--3">
        ${[
        { icon: 'calendar', color: 'var(--gold)', title: 'Del 11 al 25 de marzo de 2026', text: 'Plazo de presentación de solicitudes para las etapas concertadas.' },
        { icon: 'cpu', color: 'var(--green)', title: 'Preferentemente telemática', text: 'A través de la Secretaría Virtual de la Comunidad de Madrid.' },
        { icon: 'key', color: 'var(--coral)', title: 'Una única solicitud', text: 'Dirigida al primer centro incluido en la solicitud.' }
      ].map(fcard).join('')}
      </div>`
    }) +

    sec({
      body: `<div class="withaside">
        <div>
          ${prose(`
            <h2>Etapas privadas</h2>
            <p><strong>Primer ciclo de Infantil y Bachillerato.</strong> Debe consultarse en secretaría la disponibilidad de plazas.</p>
            <h2>Etapas concertadas</h2>
            <p><strong>Segundo ciclo de Infantil, Primaria y Secundaria.</strong> La Comunidad de Madrid establece los plazos y condiciones para la admisión de alumnos en los centros sostenidos con fondos públicos.</p>
            <p>Las solicitudes serán presentadas preferiblemente por vía telemática y dirigidas al primer centro incluido en la solicitud. Para ello las familias utilizarán la <strong>Secretaría Virtual</strong>, accesible desde la página web de la Comunidad de Madrid.</p>
            <p>En aquellos casos en los que por imposibilidad técnica no sea posible presentar la solicitud por vía telemática, podrá presentarse en el centro elegido en primera opción de lunes a viernes de 09:30 a 17:30, o por correo electrónico contactando con <a href="mailto:secretaria@colegioquercus.com">secretaria@colegioquercus.com</a>.</p>
            <h3>Opciones para la presentación telemática</h3>
          `)}
          ${checks([
        'Mediante la utilización del <strong>certificado digital</strong>.',
        'A través del sistema de identificación electrónica <strong>cl@ve</strong>.',
        'Acceso sin certificado digital mediante registro en el sistema informático: DNI, nombre y apellidos, teléfono móvil, correo electrónico, clave y pregunta de seguridad. El registro se activa por SMS.'
      ], 'mt-2')}
          ${note('<strong>Importante.</strong> La solicitud debe ser cumplimentada y firmada por <em>ambos</em> padres, madres o representantes legales, salvo que se acredite la imposibilidad de hacerlo o que alguno no ostente la patria potestad. Solo debe presentarse una única solicitud por alumno. En el momento en que el alumno resulte admitido en el colegio solicitado en primera opción, pierde la plaza en el colegio de origen.')}
        </div>
        <aside class="aside">
          <div class="abox abox--green">
            <h4>¿Aún no nos conoces?</h4>
            <p>Reserva una visita guiada por el centro antes de presentar tu solicitud.</p>
            <a class="btn btn--gold btn--sm btn--block mt-1" href="contacto.html#visita">Ven a conocernos</a>
          </div>
          <div class="abox">
            <h4>Enlaces oficiales</h4>
            <ul>
              <li><a href="https://www.comunidad.madrid/servicios/educacion/solicita-tu-admision-educacion-infantil-obligatoria-bachillerato" target="_blank" rel="noopener">Secretaría Virtual · Comunidad de Madrid</a></li>
              <li><a href="becas.html">Ayudas y becas</a></li>
              <li><a href="secretaria.html">Contactar con secretaría</a></li>
            </ul>
          </div>
        </aside>
      </div>`
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Calendario', title: 'Fases del proceso' },
      body: table(
        ['Fase', 'Fecha', 'Dónde consultarlo'],
        [
          ['Presentación de solicitudes', 'Del 11 al 25 de marzo de 2026', 'Secretaría Virtual o secretaría del centro'],
          ['Relación provisional de puntuaciones', 'Próximamente', 'Tablón del centro y Secretaría Virtual'],
          ['Listado definitivo de puntuaciones', 'Próximamente', 'Tablón del centro y Secretaría Virtual'],
          ['Listado de admitidos', 'Próximamente', 'Tablón del centro y Secretaría Virtual'],
          ['Formalización de la matrícula', 'Según calendario de la Comunidad de Madrid', 'Secretaría del centro']
        ]
      )
    }) +

    sec({
      head: { eyebrow: 'Documentación', title: 'Descargas del proceso' },
      body: docs([
        { title: 'Información para las familias', text: 'Proceso de admisión 26/27', href: 'https://drive.google.com/file/d/1ia-EQnB_rXJwqpg5Kz1GH831nS7y4UE4/view?usp=sharing', icon: 'ext' },
        { title: 'Instrucciones del proceso de admisión', text: 'Comunidad de Madrid', href: 'https://drive.google.com/file/d/1AbfTSQoqBfEI5ZGIsKAGh1m1-4v0U-Ib/view?usp=sharing', icon: 'ext' },
        { title: 'Guía de matriculación', text: 'Paso a paso', href: 'https://drive.google.com/file/d/17Hi13b15RpB-sEZ0gCE9hWWt0tT4P8bu/view?usp=drive_link', icon: 'ext' },
        { title: 'Solicitud de admisión', text: 'Modelo oficial', href: 'https://drive.google.com/file/d/1kHgVjbPqWkTnKxzUyxkXF5koveio_I2W/view?usp=sharing', icon: 'ext' },
        { title: 'Libreto informativo del centro', text: 'Visión general del colegio', href: 'https://drive.google.com/file/d/188aqbkbkYUufvxIvT8A9NzFQ1Dr_MzTY/view?usp=sharing', icon: 'ext' }
      ])
    }) +

    `<section class="sec sec--tight">${cta({
      eyebrow: 'Admisiones 26/27',
      title: '¿Tienes dudas con la solicitud?',
      text: 'Nuestro equipo de secretaría te acompaña en todo el proceso, desde la solicitud hasta la formalización de la matrícula.',
      buttons: [
        { text: 'Contactar con secretaría', href: 'secretaria.html', style: 'gold' },
        { text: 'Ayudas y becas', href: 'becas.html', style: 'light' }
      ]
    })}</section>`
};

/* ------------------------------------------------------------ Ayudas y becas */
const becas = {
  file: 'becas.html',
  title: 'Ayudas y becas',
  description: 'Becas Quercus y becas de la Comunidad de Madrid: hermanos, orfandad, excelencia de Bachillerato, primer ciclo de Infantil y comedor.',
  body: phero({
    eyebrow: 'Admisiones',
    title: 'Ayudas y becas',
    lede: 'Para apoyar a las familias que lo necesiten en los gastos de la educación de sus hijos, el colegio cuenta con un programa propio de becas al que se suman las convocatorias de la Comunidad de Madrid.',
    crumbs: [{ label: 'Admisiones' }, { label: 'Ayudas y becas' }]
  }) +

    sec({
      id: 'quercus',
      head: { eyebrow: 'Becas Quercus', title: 'Nuestro programa propio' },
      body: grid(2, [
        { icon: 'users', color: 'var(--green)', title: 'Beca por hermanos', text: 'Las familias con tres o más alumnos matriculados en el centro cuentan con descuentos especiales. Consultar en secretaría.' },
        { icon: 'spark', color: 'var(--gold)', title: 'Descuento para alumnos de 3 años', text: 'Descuento aplicable a la incorporación al segundo ciclo de Infantil. Consultar en secretaría.' },
        { icon: 'heart', color: 'var(--rose)', title: 'Hijos de antiguos alumnos', text: 'Descuento específico para las familias que continúan vinculadas al colegio. Consultar en secretaría.' },
        { icon: 'clock', color: 'var(--sky-600)', title: 'Gratuidad del horario ampliado', text: 'El alumnado que se matricula en el curso de 3 años está exento del pago del horario ampliado durante su primer curso escolar. También pueden acceder los hijos de empleados de empresas con convenio.' }
      ].map(fcard).join(''))
    }) +

    sec({
      variant: 'soft',
      head: { eyebrow: 'Beca de orfandad', title: 'Apoyo en las circunstancias más difíciles' },
      body: prose('<p>Los alumnos que, estando matriculados en el centro, sufran la pérdida de alguno de sus progenitores tendrán las siguientes ayudas durante los <strong>cinco años siguientes</strong> al fallecimiento:</p>') +
        checks([
          'Gratuidad de la enseñanza obligatoria.',
          'Descuento del 25 % del importe mensual en la enseñanza privada.',
          'Gratuidad en los libros de texto.'
        ], 'mt-2')
    }) +

    sec({
      id: 'excelencia',
      body: split({
        image: 'webquercusmayores1.jpg',
        imageAlt: 'Alumnado de Bachillerato',
        eyebrow: 'Beca de excelencia',
        title: 'Beca de Excelencia de Bachillerato 26/27',
        body: `<p>El Colegio Quercus convoca cada curso una Beca de Excelencia para cursar el Bachillerato en el centro, dirigida al alumnado con mejor expediente académico.</p>`,
        buttons: [
          { text: 'Información de la beca', href: 'https://drive.google.com/file/d/17OGcP-JfEdj0z0GRpPVLSvhI61K1Kej1/view?usp=drive_link', style: 'primary' },
          { text: 'Solicitud', href: 'https://drive.google.com/file/d/1X0b9HxkT8HT6J0AkjlXHkd3ivFTjG1q3/view?usp=drive_link', style: 'ghost' }
        ]
      })
    }) +

    sec({
      id: 'cm',
      variant: 'warm',
      head: {
        eyebrow: 'Comunidad de Madrid',
        title: 'Convocatorias públicas',
        lede: 'Enlaces directos a las convocatorias oficiales vigentes.'
      },
      body: docs([
        { title: 'Becas de primer ciclo de Educación Infantil', text: 'Sede electrónica · Comunidad de Madrid', href: 'https://sede.comunidad.madrid/ayudas-becas-subvenciones/becas-educacion-infantil-2024-2025', icon: 'ext' },
        { title: 'Becas de Bachillerato 2026/2027', text: 'Sede electrónica · Comunidad de Madrid', href: 'https://sede.comunidad.madrid/ayudas-becas-subvenciones/becas-bachillerato-2026-2027', icon: 'ext' },
        { title: 'Becas de comedor escolar 2026/2027', text: 'Sede electrónica · Comunidad de Madrid', href: 'https://sede.comunidad.madrid/ayudas-becas-subvenciones/becas-comedor-escolar-2026-2027', icon: 'ext' },
        { title: 'Becas del Ministerio · FP y Bachillerato', text: 'becaseducacion.gob.es', href: 'https://www.becaseducacion.gob.es/becas-y-ayudas/fp-bachillerato-otros/tipos-de-becas.html', icon: 'ext' }
      ]) +
        note('<strong>Muy importante.</strong> Es imprescindible que la solicitud esté firmada por todos los miembros de la unidad familiar mayores de edad que figuren en ella, tanto si se presenta presencial como telemáticamente, y debe ir acompañada obligatoriamente de copia del libro de familia o del certificado de inscripción de nacimiento en el Registro Civil. Indica siempre un teléfono móvil y un correo electrónico para poder consultar el estado de tu solicitud.')
    }) +

    `<section class="sec sec--tight">${cta({
      title: '¿No sabes qué beca te corresponde?',
      text: 'En secretaría te informamos sobre las ayudas compatibles con tu situación familiar.',
      buttons: [{ text: 'Consultar en secretaría', href: 'secretaria.html', style: 'gold' }]
    })}</section>`
};

module.exports = [secretaria, matriculacion, becas];
