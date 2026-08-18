/* Modelo de navegación agrupada.
   El menú original tenía 4 bloques planos y muy largos; aquí se reorganiza
   en 6 familias temáticas con mega-menú por columnas. */
'use strict';

const NAV = [
  {
    id: 'colegio',
    label: 'El Colegio',
    intro: {
      title: 'Una comunidad educativa',
      text: 'Centro concertado y laico en Boadilla del Monte que entiende la enseñanza como un servicio público, desde los 4 meses hasta la Universidad.',
      link: { href: 'quienes-somos.html', text: 'Conócenos' }
    },
    columns: [
      {
        title: 'Identidad',
        items: [
          { href: 'quienes-somos.html', label: '¿Quiénes somos?', sub: 'Centro concertado y laico' },
          { href: 'proyecto-educativo.html', label: 'Proyecto educativo', sub: 'Nuestra forma de enseñar' },
          { href: 'organigrama.html', label: 'Organigrama', sub: 'Equipo y estructura' },
          { href: 'proyecto-educativo.html#convivencia', label: 'Plan de convivencia' }
        ]
      },
      {
        title: 'Por qué Quercus',
        items: [
          { href: 'que-ofrecemos.html', label: '¿Qué ofrecemos?', sub: 'De los 4 meses a la Universidad' },
          { href: 'por-que-elegirnos.html', label: '¿Por qué elegirnos?', sub: '10 razones' },
          { href: 'distinciones.html', label: 'Distinciones y certificaciones' },
          { href: 'proyecto-educativo.html#resultados', label: 'Resultados del centro' }
        ]
      },
      {
        title: 'Espacios',
        items: [
          { href: 'instalaciones.html', label: 'Instalaciones', sub: '20 espacios especializados' },
          { href: 'aula-maker.html', label: 'Aula Maker · LEGO' },
          { href: 'piscina.html', label: 'Piscina cubierta' },
          { href: 'contacto.html#galeria', label: 'Galería de imágenes' }
        ]
      }
    ]
  },
  {
    id: 'estudios',
    label: 'Etapas y estudios',
    intro: {
      title: 'Todo el itinerario',
      text: 'Escuela infantil propia, etapas concertadas hasta Secundaria, Bachillerato y Formación Profesional en el mismo campus.',
      link: { href: 'que-ofrecemos.html', text: 'Ver oferta educativa' }
    },
    columns: [
      {
        title: 'Etapas',
        items: [
          { href: 'escuela-infantil.html', label: 'Escuela Infantil', sub: 'De 4 meses a 3 años' },
          { href: 'que-ofrecemos.html#infantil', label: 'Educación Infantil', sub: '3 a 6 años' },
          { href: 'que-ofrecemos.html#primaria', label: 'Educación Primaria' },
          { href: 'que-ofrecemos.html#secundaria', label: 'Secundaria (ESO)' },
          { href: 'que-ofrecemos.html#bachillerato', label: 'Bachillerato' }
        ]
      },
      {
        title: 'Formación Profesional',
        items: [
          { href: 'ciclos-formativos.html', label: 'Ciclos Formativos', sub: 'Qué son y cómo acceder' },
          { href: 'ciclos-formativos.html#medio', label: 'Grado Medio', sub: 'Gestión Administrativa' },
          { href: 'ciclos-formativos.html#superior', label: 'Grado Superior', sub: 'Agencias de Viajes · Asistencia a la Dirección' }
        ]
      },
      {
        title: 'Programas',
        items: [
          { href: 'bachillerato-dual.html', label: 'Bachillerato Dual Americano' },
          { href: 'proyecto-educativo.html#enriquecimiento', label: 'Enriquecimiento curricular' },
          { href: 'orientacion.html#academica', label: 'Orientación académica' },
          { href: 'viajes-idiomas.html', label: 'Viajes de idiomas' }
        ]
      }
    ]
  },
  {
    id: 'familias',
    label: 'Familias',
    intro: {
      title: 'Información a las familias',
      text: 'Servicios, documentación y canales de contacto reunidos en un solo lugar, según la Ley 1/2022 de la Comunidad de Madrid.',
      link: { href: 'familias.html', text: 'Ir al portal de familias' }
    },
    columns: [
      {
        title: 'Día a día',
        items: [
          { href: 'familias.html', label: 'Información a las familias', sub: 'Portal completo' },
          { href: 'comedor.html', label: 'Comedor', sub: 'Menús y cocina propia' },
          { href: 'uniforme.html', label: 'Uniforme', sub: 'Prendas, tallas y tienda' },
          { href: 'servicios-complementarios.html', label: 'Servicios complementarios' }
        ]
      },
      {
        title: 'Acompañamiento',
        items: [
          { href: 'orientacion.html', label: 'Gabinete Psicopedagógico' },
          { href: 'servicios-complementarios.html#biblioteca', label: 'Servicio de Biblioteca' },
          { href: 'servicios-complementarios.html#salud', label: 'Enfermería y seguros' },
          { href: 'familias.html#emails', label: 'E-mails del profesorado' }
        ]
      },
      {
        title: 'Actividades',
        items: [
          { href: 'extraescolares.html', label: 'Extraescolares' },
          { href: 'campamentos.html', label: 'Campamentos' },
          { href: 'vida-quercus.html#dias-sin-cole', label: 'Días sin cole' },
          { href: 'https://ampaquercus.com/', label: 'AMPA Quercus', ext: true }
        ]
      }
    ]
  },
  {
    id: 'admisiones',
    label: 'Admisiones',
    highlight: true,
    intro: {
      title: 'Curso 2026 / 2027',
      text: 'Plazo de solicitudes del 11 al 25 de marzo de 2026 para las etapas concertadas. Las etapas privadas se gestionan directamente en secretaría.',
      link: { href: 'matriculacion.html', text: 'Proceso de admisión' }
    },
    cols: 2,
    columns: [
      {
        title: 'Proceso',
        items: [
          { href: 'matriculacion.html', label: 'Matriculación 26/27', sub: 'Plazos, requisitos y listados' },
          { href: 'secretaria.html', label: 'Secretaría', sub: 'Horarios y trámites' },
          { href: 'becas.html', label: 'Ayudas y becas', sub: 'Becas Quercus y Comunidad de Madrid' }
        ]
      },
      {
        title: 'Antes de decidir',
        items: [
          { href: 'contacto.html#visita', label: 'Ven a conocernos', sub: 'Solicita una visita guiada' },
          { href: 'por-que-elegirnos.html', label: '10 razones para elegirnos' },
          { href: 'como-llegar.html', label: '¿Cómo llegar?' }
        ]
      }
    ]
  },
  {
    id: 'vida',
    label: 'Vida Quercus',
    intro: {
      title: 'Lo que ocurre cada día',
      text: 'Proyectos, solidaridad, sostenibilidad y experiencias que completan la formación académica de nuestro alumnado.',
      link: { href: 'vida-quercus.html', text: 'Ver todos los proyectos' }
    },
    columns: [
      {
        title: 'Actualidad',
        items: [
          { href: 'noticias.html', label: 'Noticias', sub: 'Última hora del centro' },
          { href: 'vida-quercus.html#quercuriosos', label: 'Revista Quercuriosos' },
          { href: 'vida-quercus.html#antiguos', label: 'Antiguos alumnos' }
        ]
      },
      {
        title: 'Proyectos',
        items: [
          { href: 'aula-maker.html', label: 'Aula Maker · LEGO Innovation' },
          { href: 'ecoescuela.html', label: 'Ecoescuela' },
          { href: 'solidario.html', label: 'Quercus Solidario' },
          { href: 'vida-quercus.html#eso-empresa', label: '4º ESO + Empresa' }
        ]
      },
      {
        title: 'Experiencias',
        items: [
          { href: 'campamentos.html', label: 'Campamentos de verano' },
          { href: 'viajes-idiomas.html', label: 'Viajes de idiomas' },
          { href: 'vida-quercus.html#dias-sin-cole', label: 'Días sin cole' },
          { href: 'vida-quercus.html#complementarias', label: 'Actividades complementarias' }
        ]
      }
    ]
  },
  {
    id: 'contacto',
    label: 'Contacto',
    cols: 2,
    intro: {
      title: 'Hablemos',
      text: 'C/ Valle Inclán, 12 · 28660 Boadilla del Monte (Madrid). Secretaría abierta de 9:00 a 17:00.',
      link: { href: 'tel:+34916338516', text: '91 633 85 16' }
    },
    columns: [
      {
        title: 'Escríbenos',
        items: [
          { href: 'contacto.html', label: 'Consúltanos', sub: 'Formulario de contacto' },
          { href: 'contacto.html#visita', label: 'Ven a conocernos' },
          { href: 'trabaja-con-nosotros.html', label: 'Trabaja con nosotros' }
        ]
      },
      {
        title: 'Servicios abiertos',
        items: [
          { href: 'como-llegar.html', label: '¿Cómo llegar?', sub: 'Coche, bus, metro ligero y bici' },
          { href: 'piscina.html', label: 'Abonos de piscina' },
          { href: 'familias.html#emails', label: 'Directorio de correos' }
        ]
      }
    ]
  }
];

/* Enlaces externos de la barra superior */
const QUICKLINKS = [
  { href: 'https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=YOgraG7uASA%3d', label: 'Alexia' },
  { href: 'https://www.colegioquercus.com/venta-uniformes-libros', label: 'Tienda online' }
];

const SOCIAL = [
  { href: 'https://www.facebook.com/ColegioQuercus/', label: 'Facebook', icon: 'fb' },
  { href: 'https://www.instagram.com/colegioquercus/', label: 'Instagram', icon: 'ig' },
  { href: 'https://www.youtube.com/ColegioQuercusVideo', label: 'YouTube', icon: 'yt' },
  { href: 'https://twitter.com/ColegioQuercus', label: 'X', icon: 'x' }
];

const SITE = {
  name: 'Colegio Quercus',
  tagline: 'Boadilla del Monte · Madrid',
  phone: '91 633 85 16',
  phoneHref: 'tel:+34916338516',
  email: 'direccion@colegioquercus.com',
  address: 'C/ Valle Inclán, 12<br>28660 Boadilla del Monte (Madrid)',
  hours: 'Secretaría: L-V de 9:00 a 17:00',
  logo: 'logo-colegio-quercus22trans.gif'
};

module.exports = { NAV, QUICKLINKS, SOCIAL, SITE };
