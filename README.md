# Colegio Quercus — sitio web

Rediseño responsive y multipágina de `colegioquercus.com`, manteniendo su identidad
cromática y su contenido, pero con una arquitectura de información y un lenguaje
visual completamente nuevos.

## Cómo funciona

El sitio final es **HTML estático puro**: no necesita servidor, base de datos ni
build para funcionar. Basta con subir la carpeta a cualquier hosting.

Los `.html` se generan desde plantillas de Node para evitar duplicar cabecera, pie
y menú en 31 archivos:

```bash
node build.js
```

Esto reescribe los 31 `.html`, `sitemap.xml` y `robots.txt`, y comprueba que todos
los enlaces internos y las imágenes referenciadas existen.

Para previsualizar en local:

```bash
node _build/serve.js
```

## Estructura

```
ColegioQuercus/
├─ *.html                 ← salida generada (no editar a mano: se sobrescribe)
├─ build.js               ← generador
├─ sitemap.xml, robots.txt
├─ _build/
│  ├─ nav.js              ← menú agrupado, datos de contacto y redes
│  ├─ layout.js           ← <head>, cabecera, mega-menú, cajón móvil, pie
│  ├─ lib.js              ← iconos SVG y componentes (tarjetas, galería, FAQ…)
│  ├─ data.js             ← noticias, instalaciones, certificaciones, etapas
│  ├─ serve.js            ← servidor estático de previsualización
│  └─ pages/              ← contenido de cada página
│     ├─ home.js
│     ├─ colegio.js       ← quiénes somos, oferta, proyecto, instalaciones…
│     ├─ estudios.js      ← escuela infantil, dual, ciclos formativos
│     ├─ familias.js      ← familias, comedor, uniforme, servicios, orientación
│     ├─ admisiones.js    ← secretaría, matriculación, becas
│     ├─ vida.js          ← noticias, proyectos, campamentos, viajes
│     └─ contacto.js      ← contacto, cómo llegar, empleo, piscina
└─ assets/
   ├─ css/site.css        ← sistema de diseño completo
   ├─ js/site.js          ← menús, acordeones, lightbox, filtros, contadores
   └─ img/                ← 133 imágenes descargadas del dominio original
```

### Editar contenido

Cambia el texto en el archivo correspondiente de `_build/pages/` y vuelve a
ejecutar `node build.js`. Para tocar el menú, edita `_build/nav.js`: la cabecera de
escritorio, el cajón móvil y las migas de pan se regeneran a partir de esa
estructura.

## Reorganización del menú

El menú original tenía cuatro bloques planos y muy largos que dejaban fuera buena
parte del sitio. Aquí se agrupa en **seis familias temáticas** con mega-menú por
columnas en escritorio y acordeones en móvil:

| Grupo | Contenido |
|---|---|
| El Colegio | Identidad · Por qué Quercus · Espacios |
| Etapas y estudios | Etapas · Formación Profesional · Programas |
| Familias | Día a día · Acompañamiento · Actividades |
| Admisiones | Proceso · Antes de decidir |
| Vida Quercus | Actualidad · Proyectos · Experiencias |
| Contacto | Escríbenos · Servicios abiertos |

## Sistema de diseño

Paleta tomada del CSS original del tema (`nicdark`):

| Token | Valor | Origen |
|---|---|---|
| `--green` | `#005435` | verde institucional |
| `--green-600` | `#0b7761` | verde secundario |
| `--gold` | `#d6b535` | amarillo de marca |
| `--sky` / `--violet` / `--coral` / `--rose` / `--mint` | `#74cee4` `#c389ce` `#ec774b` `#e16c6c` `#66ce9c` | acentos por etapa |
| `--brandbar` | degradado multicolor | la cinta cromática original, conservada bajo la cabecera y sobre el pie |

Tipografías: **Montserrat** (titulares) y **Raleway** (texto), las mismas del sitio
original, con **Newsreader** como cursiva de acento. Todas con pila de respaldo del
sistema.

`--gold-600` y `--muted` se ajustaron respecto a la paleta original para que el
texto pequeño cumpla el contraste AA de WCAG (≥ 4.5:1) sobre los tres fondos claros.

## Compatibilidad y accesibilidad

- Sin dependencias externas de JavaScript. El JS está escrito en ES5 con
  `IntersectionObserver` y degrada con elegancia si no existe.
- `-webkit-backdrop-filter` y `-webkit-overflow-scrolling` para Safari;
  `color-mix()` siempre con color sólido de respaldo previo.
- `env(safe-area-inset-bottom)` en el cajón móvil para iPhone con notch.
- Verificado sin desbordamiento horizontal en 375 px, 768 px y 1440 px en las 31
  páginas.
- Enlace de salto al contenido, foco visible, `aria-expanded`/`aria-controls` en
  menús y acordeones, foco atrapado en el cajón y en el visor de imágenes, y
  respeto de `prefers-reduced-motion`.

## Pendiente de conectar

Los formularios (`contacto.html`, `trabaja-con-nosotros.html`) están maquetados y
validados en cliente, pero **no envían**: muestran un aviso de demostración. Hay que
apuntarlos al gestor de correo o al formulario del centro antes de publicar.
