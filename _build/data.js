/* Datos reutilizados en varias páginas (extraídos del sitio original) */
'use strict';

const NEWS = [
  {
    date: '30 julio 2026', cat: 'secundaria', image: 'noticia-elvalordelaamistad-26.jpg',
    title: 'El valor de la amistad',
    text: 'El nacimiento de los vínculos amistosos en el entorno escolar. Más allá del estudio de matemáticas o lengua, los centros escolares son escenarios perfectos para esas amistades que nos acompañan toda la vida.',
    href: 'https://www.colegioquercus.com/el-valor-de-la-amistad/'
  },
  {
    date: '23 julio 2026', cat: 'bachillerato', image: 'entrevista-ganadoresolimpiadafilosofica-26jpg.jpg',
    title: 'Entrevistamos a los ganadores de la Olimpiada Filosófica',
    text: 'Por segundo año consecutivo, Hugo Delgado, Pablo Momblán y Gabriel Lancha, alumnos de 2.º de Bachillerato, se han alzado con el primer premio de la Olimpiada Filosófica de Madrid.',
    href: 'https://www.colegioquercus.com/entrevista-ganadores-olimpiadafilosofica-26/'
  },
  {
    date: '15 julio 2026', cat: 'secundaria', image: 'noticia-imakeai.jpg',
    title: 'I Make AI',
    text: 'Durante este curso el centro ha colaborado con una red de escuelas alemanas STEM en el proyecto «I make AI», una propuesta colaborativa que ha llevado la inteligencia artificial al aula.',
    href: 'https://www.colegioquercus.com/noticia-imakeai-26/'
  },
  {
    date: '8 julio 2026', cat: 'fp', image: 'noticia-cicloformativo26-portada.jpg',
    title: 'Nuevo Ciclo Formativo de Gestión Administrativa',
    text: 'Novedad para el curso 2026/2027 en horario de mañana: incorporamos a nuestra oferta el Ciclo de Grado Medio en Gestión Administrativa.',
    href: 'https://www.colegioquercus.com/noticia-cicloformativo-gestionadministrativa/'
  },
  {
    date: '30 junio 2026', cat: 'secundaria', image: 'entrevista-periodista-rtve-portada.png',
    title: 'El alumnado entrevista a Ángela García',
    text: 'Nuestros estudiantes de la revista Quercuriosos conversan con la periodista sobre el oficio de informar y los retos del periodismo actual.',
    href: 'https://www.colegioquercus.com/noticia-entrevista-angela-garcia/'
  },
  {
    date: '25 junio 2026', cat: 'secundaria', image: 'noticia-erasmus-italia26-portada.png',
    title: 'Erasmus+ Italia: la experiencia completa',
    text: 'Crónica del intercambio europeo que ha llevado a nuestro alumnado a convivir, aprender y trabajar junto a estudiantes italianos.',
    href: 'https://www.colegioquercus.com/noticia-erasmus-italia-completa-26/'
  },
  {
    date: '15 junio 2026', cat: 'secundaria', image: '20252026-portada-web-para-noticia-44.png',
    title: '¡Estamos listos para el reto! RetoTech 2026',
    text: 'El equipo Unibox representa al Colegio Quercus en RetoTech, el programa de innovación tecnológica de la Fundación Endesa.',
    href: 'https://www.colegioquercus.com/noticia-unibox-retotech-26/'
  },
  {
    date: '8 junio 2026', cat: 'todas', image: 'noticia-fiesta-fin-curso26-portada.png',
    title: 'Fiesta fin de curso 2026',
    text: 'Toda la comunidad educativa se reunió para despedir el curso con actuaciones, talleres y actividades para las familias.',
    href: 'https://www.colegioquercus.com/noticia-fiesta-fin-curso-26/'
  },
  {
    date: '4 junio 2026', cat: 'primaria', image: 'noticia-dramashow-lionking26-portada.png',
    title: 'Drama Show 2026: The Lion King',
    text: 'El musical en inglés del departamento de idiomas llenó el salón de actos en una nueva edición del Drama Show.',
    href: 'https://www.colegioquercus.com/noticia-dramashow-lionking26/'
  },
  {
    date: '29 mayo 2026', cat: 'bachillerato', image: 'noticia-welcome-holland-portada.png',
    title: 'Entrevistamos a Laura Sánchez',
    text: 'Una conversación con nuestra antigua alumna sobre su experiencia universitaria y profesional fuera de España.',
    href: 'https://www.colegioquercus.com/noticia-laura-sanchez/'
  },
  {
    date: '26 mayo 2026', cat: 'bachillerato', image: 'noticia-graduacion-2bto-26-portada.png',
    title: 'Graduación de 2.º de Bachillerato 2026',
    text: 'La promoción se despidió del centro en una ceremonia emotiva acompañada por familias y profesorado.',
    href: 'https://www.colegioquercus.com/noticia-graduacion-2bto-26/'
  },
  {
    date: '22 mayo 2026', cat: 'todas', image: 'noticia-adolescencia-positiva-26-portada.png',
    title: 'Escuela de Familias con Diana Al Azem',
    text: 'Taller gratuito sobre adolescencia positiva dirigido a las familias del centro, dentro del programa de Escuela de Familias.',
    href: 'https://www.colegioquercus.com/noticia-escuela-familias-diana-26/'
  }
];

const FACILITIES = [
  { image: 'piscina.jpg', title: 'Piscina cubierta', text: 'Climatizada y semiolímpica, preparada para trabajar con alumnos desde los dos años.', size: 'wide' },
  { image: 'quercusrocodromo.jpg', title: 'Rocódromo', text: 'Instalación en boulder, con disposición horizontal y baja altura, para el trabajo de escalada.' },
  { image: 'polideportivo-cubierto.jpg', title: 'Polideportivo cubierto', text: 'Pista polideportiva dotada de material didáctico para la educación física.' },
  { image: 'quercuspolivalente.jpg', title: 'Aulas polivalentes', text: 'Sala equipada para actividades deportivas, artísticas y lúdicas.' },
  { image: 'aula-psicomotricidad-1.jpg', title: 'Aulas de psicomotricidad', text: 'Espacios habilitados para trabajar el desarrollo motriz de los más pequeños.' },
  { image: 'quercusaulamaker.jpg', title: 'Aula Maker · LEGO Innovation', text: 'Laboratorio, taller y aula: colaboración, creatividad y tecnología en un mismo espacio.', size: 'wide' },
  { image: 'quercusplastica.jpg', title: 'Taller de plástica', text: 'Luz y ambiente propicios para el desarrollo de la técnica y la creatividad.' },
  { image: 'quercusbiblioteca.jpg', title: 'Biblioteca', text: 'Para consulta y estudio y para sesiones de comprensión lectora.' },
  { image: 'quercusaulaidiomas.jpg', title: 'Laboratorio de idiomas móvil', text: 'Portátiles para la práctica individual de inglés y alemán.' },
  { image: 'quercussalonactos.jpg', title: 'Salón de actos', text: '350 localidades, escenario amplio con luces LED, microfonía y proyección.' },
  { image: 'quercusbiologia.jpg', title: 'Laboratorio de Biología y Geología', text: 'Para experimentar con la vida natural a nivel microscópico y macrocelular.' },
  { image: 'quercuslabquimica.jpg', title: 'Laboratorio de Química', text: 'Con productos químicos e instrumentos para la práctica de los contenidos del aula.' },
  { image: 'laboratorio-fisica.jpg', title: 'Laboratorio de Física', text: 'Equipado para tomar medidas experimentales y comprobar teorías.' },
  { image: 'aulas-de-informatica.jpg', title: 'Aula móvil de informática', text: 'Carros móviles con ordenadores para la formación en las distintas áreas.' },
  { image: 'quercussalaestudio.jpg', title: 'Sala de trabajo', text: 'Anexa a la biblioteca, preparada para el trabajo en equipo con acceso a ordenadores.' },
  { image: 'comedor.jpg', title: 'Comedores', text: 'De infantil y de primaria y secundaria: amplios, luminosos y con varias líneas de servicio.' },
  { image: 'quercusenfermeriab.jpg', title: 'Enfermería', text: 'Atención sanitaria en horario lectivo prestada por una profesional titulada.' },
  { image: 'secretaria.jpg', title: 'Secretaría', text: 'Nuestro espacio de bienvenida y atención a cuantos se acercan al colegio.' },
  { image: 'tienda.jpg', title: 'Tienda', text: 'Con horario de mañana y tarde, dedicada a la venta de uniformes.' },
  { image: 'aulamultisensorial.jpg', title: 'Aula multisensorial', text: 'Espacio dedicado a la estimulación de los sentidos.' },
  { image: 'gimnasio.jpg', title: 'Gimnasio', text: 'Sala equipada para el trabajo físico y las actividades deportivas del centro.' }
];

const CERTS = [
  { image: 'certlaureldeoro.jpg', title: 'Premio Nacional Laurel de Oro' },
  { image: 'certunicef.jpg', title: 'Escuela Amiga de UNICEF' },
  { image: 'certmicole2024.png', title: 'Mejores Colegios 2023, 2024 y 2025 · MiCole' },
  { image: 'certlegooficial.jpg', title: 'LEGO Innovation Studio' },
  { image: 'certescuelaexcelente.png', title: 'Certificación Escuela Excelente' },
  { image: 'certbanderaecoescuela.jpg', title: 'Bandera Verde Ecoescuela' },
  { image: 'certprogramatei.jpg', title: 'Programa TEI · Tutoría entre iguales' },
  { image: 'certificadobachilleratodual.png', title: 'Bachillerato Dual Americano' },
  { image: 'certcambridge.jpg', title: 'Centro preparador Cambridge' },
  { image: 'certeducaeco2.jpg', title: 'Educaeco' }
];

const STAGES = [
  {
    age: '4 meses – 3 años', color: 'var(--sky)', title: 'Escuela Infantil',
    text: 'Edificio propio con proyecto educativo diferenciado. El juego, las rutinas y el apego como base del aprendizaje.',
    points: ['Atención individualizada', 'Estimulación temprana', 'Aula sensorial', 'Cocina propia'],
    link: { href: 'escuela-infantil.html', text: 'Ver escuela infantil' }
  },
  {
    age: '3 – 6 años', color: 'var(--mint)', title: 'Educación Infantil',
    text: 'Segundo ciclo concertado. Inglés desde los dos años en grupos reducidos y una fuerte apuesta por la lectoescritura.',
    points: ['Etapa concertada', 'Inglés en grupos reducidos', 'Psicomotricidad y natación'],
    link: { href: 'que-ofrecemos.html#infantil', text: 'Más información' }
  },
  {
    age: '6 – 12 años', color: 'var(--gold)', title: 'Educación Primaria',
    text: 'Jornada de seis horas que permite ampliar contenidos en inglés, expresión oral, laboratorios y tecnología.',
    points: ['Tutoría semanal', 'Tecnología y Robótica', 'Natación en horario lectivo', 'Alemán desde 5.º'],
    link: { href: 'que-ofrecemos.html#primaria', text: 'Más información' }
  },
  {
    age: '12 – 16 años', color: 'var(--coral)', title: 'Secundaria (ESO)',
    text: 'Etapa concertada con acción tutorial preventiva, programa TEI y orientación académica desde 3.º de la ESO.',
    points: ['Bachillerato Dual desde 3.º', '4.º ESO + Empresa', 'Proyecto Orión'],
    link: { href: 'que-ofrecemos.html#secundaria', text: 'Más información' }
  },
  {
    age: '16 – 18 años', color: 'var(--violet)', title: 'Bachillerato',
    text: 'Etapa privada en las modalidades de Ciencias —con itinerarios de Ciencias de la Salud e Ingeniería y Arquitectura— y Humanidades y Ciencias Sociales.',
    points: ['Beca de excelencia', 'Preparación PAU', 'Ferias universitarias'],
    link: { href: 'que-ofrecemos.html#bachillerato', text: 'Más información' }
  },
  {
    age: 'Formación Profesional', color: 'var(--green-600)', title: 'Ciclos Formativos',
    text: 'Grado Medio y Grado Superior con formación en centros de trabajo, titulación oficial y alta empleabilidad.',
    points: ['Gestión Administrativa', 'Agencias de Viajes y Eventos', 'Asistencia a la Dirección'],
    link: { href: 'ciclos-formativos.html', text: 'Ver ciclos formativos' }
  }
];

module.exports = { NEWS, FACILITIES, CERTS, STAGES };
