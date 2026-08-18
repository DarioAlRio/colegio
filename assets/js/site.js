/* =============================================================
   Colegio Quercus — comportamiento de interfaz
   Sin dependencias. Compatible con Safari, Chrome, Firefox y Edge.
   ============================================================= */
(function () {
  'use strict';

  var doc = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ---------- 1. Cabecera fija ---------- */
  var hdr = $('#hdr');
  if (hdr) {
    var lastStuck = null;
    var onScroll = function () {
      var stuck = window.pageYOffset > 30;
      if (stuck !== lastStuck) { hdr.classList.toggle('is-stuck', stuck); lastStuck = stuck; }
      var top = $('#totop');
      if (top) top.classList.toggle('is-on', window.pageYOffset > 700);
    };
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
    onScroll();
  }

  /* ---------- 2. Mega menú de escritorio ---------- */
  var megaItems = $$('.nav__item.has-mega');
  var closeTimer = null;

  function closeAllMega(except) {
    megaItems.forEach(function (li) {
      if (li === except) return;
      li.classList.remove('is-open');
      var b = $('.nav__link', li);
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  function openMega(li) {
    closeAllMega(li);
    li.classList.add('is-open');
    var b = $('.nav__link', li);
    if (b) b.setAttribute('aria-expanded', 'true');
  }
  function closeMega(li) {
    li.classList.remove('is-open');
    var b = $('.nav__link', li);
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  megaItems.forEach(function (li) {
    var btn = $('.nav__link', li);
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

    li.addEventListener('mouseenter', function () {
      if (!finePointer.matches) return;
      window.clearTimeout(closeTimer);
      openMega(li);
    });
    li.addEventListener('mouseleave', function () {
      if (!finePointer.matches) return;
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(function () { closeMega(li); }, 160);
    });

    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        if (li.classList.contains('is-open')) closeMega(li); else openMega(li);
      });
    }

    // Cerrar al salir del bloque con el teclado
    li.addEventListener('focusout', function (e) {
      if (!li.contains(e.relatedTarget)) closeMega(li);
    });
  });

  doc.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeAllMega(null);
      closeDrawer();
      closeLightbox();
    }
  });
  doc.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.nav')) closeAllMega(null);
  });

  /* ---------- 3. Cajón móvil ---------- */
  var drawer = $('#drawer');
  var scrim = $('#scrim');
  var burger = $('#burger');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-on');
    if (scrim) scrim.classList.add('is-on');
    if (burger) burger.setAttribute('aria-expanded', 'true');
    doc.body.classList.add('is-locked');
    var first = $('.drawer__close', drawer);
    if (first) first.focus();
  }
  function closeDrawer() {
    if (!drawer || !drawer.classList.contains('is-on')) return;
    drawer.classList.remove('is-on');
    if (scrim) scrim.classList.remove('is-on');
    if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    doc.body.classList.remove('is-locked');
  }
  if (burger) burger.addEventListener('click', function () {
    if (drawer && drawer.classList.contains('is-on')) closeDrawer(); else openDrawer();
  });
  if (scrim) scrim.addEventListener('click', closeDrawer);
  var dClose = $('.drawer__close');
  if (dClose) dClose.addEventListener('click', closeDrawer);

  // Mantener el foco dentro del cajón
  if (drawer) {
    drawer.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var f = $$('a[href], button:not([disabled]), input, select, textarea', drawer)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------- 4. Acordeones (menú móvil + FAQ) ---------- */
  function setupAccordion(btn, panel, openClass, host) {
    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        panel.style.height = panel.scrollHeight + 'px';
        // forzar reflow para animar el cierre
        void panel.offsetHeight;
        panel.style.height = '0px';
        btn.setAttribute('aria-expanded', 'false');
        if (host && openClass) host.classList.remove(openClass);
      } else {
        panel.style.height = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
        if (host && openClass) host.classList.add(openClass);
        var done = function () {
          if (btn.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto';
          panel.removeEventListener('transitionend', done);
        };
        panel.addEventListener('transitionend', done);
      }
    });
  }

  $$('.acc__btn').forEach(function (btn) {
    var panel = doc.getElementById(btn.getAttribute('aria-controls'));
    if (panel) setupAccordion(btn, panel, null, null);
  });

  $$('.faq__btn').forEach(function (btn) {
    var panel = doc.getElementById(btn.getAttribute('aria-controls'));
    if (panel) setupAccordion(btn, panel, 'is-open', btn.closest('.faq__item'));
  });

  // Recalcular alturas abiertas al redimensionar
  var rz;
  window.addEventListener('resize', function () {
    window.clearTimeout(rz);
    rz = window.setTimeout(function () {
      $$('.acc__panel, .faq__panel').forEach(function (p) {
        if (p.style.height && p.style.height !== '0px') p.style.height = 'auto';
      });
    }, 200);
  });

  /* ---------- 5. Animaciones al hacer scroll ---------- */
  var revealables = $$('.reveal');
  if (revealables.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealables.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- 6. Filtros de tarjetas ---------- */
  $$('[data-filters]').forEach(function (bar) {
    var targetSel = bar.getAttribute('data-filters');
    var items = $$(targetSel + ' [data-cat]');
    $$('button', bar).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var f = btn.getAttribute('data-filter');
        $$('button', bar).forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
        items.forEach(function (it) {
          var cats = (it.getAttribute('data-cat') || '').split(/\s+/);
          var show = f === '*' || cats.indexOf(f) !== -1;
          it.classList.toggle('is-hidden', !show);
        });
      });
    });
  });

  /* ---------- 7. Lightbox de galería ---------- */
  var lbox = $('#lbox');
  var lboxImg = lbox ? $('img', lbox) : null;
  var lboxCap = lbox ? $('.lbox__cap', lbox) : null;
  var galItems = $$('.gal__item');
  var lboxIndex = 0;
  var lastFocused = null;

  function showLightbox(i) {
    if (!lbox || !galItems.length) return;
    lboxIndex = (i + galItems.length) % galItems.length;
    var a = galItems[lboxIndex];
    var img = $('img', a);
    if (!img) return;
    lboxImg.src = a.getAttribute('data-full') || img.currentSrc || img.src;
    lboxImg.alt = img.alt || '';
    if (lboxCap) lboxCap.textContent = a.getAttribute('data-caption') || img.alt || '';
    lbox.classList.add('is-on');
    doc.body.classList.add('is-locked');
    var c = $('.lbox__close', lbox);
    if (c) c.focus();
  }
  function closeLightbox() {
    if (!lbox || !lbox.classList.contains('is-on')) return;
    lbox.classList.remove('is-on');
    doc.body.classList.remove('is-locked');
    if (lastFocused) lastFocused.focus();
  }

  galItems.forEach(function (a, i) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      lastFocused = a;
      showLightbox(i);
    });
  });
  if (lbox) {
    var pv = $('.lbox__prev', lbox), nx = $('.lbox__next', lbox), cl = $('.lbox__close', lbox);
    if (pv) pv.addEventListener('click', function () { showLightbox(lboxIndex - 1); });
    if (nx) nx.addEventListener('click', function () { showLightbox(lboxIndex + 1); });
    if (cl) cl.addEventListener('click', closeLightbox);
    lbox.addEventListener('click', function (e) { if (e.target === lbox) closeLightbox(); });
    doc.addEventListener('keydown', function (e) {
      if (!lbox.classList.contains('is-on')) return;
      if (e.key === 'ArrowRight') showLightbox(lboxIndex + 1);
      if (e.key === 'ArrowLeft') showLightbox(lboxIndex - 1);
    });
  }

  /* ---------- 8. Volver arriba ---------- */
  var totop = $('#totop');
  if (totop) totop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---------- 9. Contadores ---------- */
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        cio.unobserve(el);
        var end = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, t0 = null;
        var step = function (ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = end % 1 === 0 ? Math.round(end * eased) : (end * eased).toFixed(1);
          el.textContent = val + suffix;
          if (p < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* ---------- 10. Formularios (demo, sin backend) ---------- */
  $$('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = $('.form__result', form);
      if (!note) {
        note = doc.createElement('p');
        note.className = 'form__result note mt-1';
        form.appendChild(note);
      }
      note.innerHTML = '<strong>Formulario de demostración.</strong> Conecta este envío con el gestor de correo del centro para recibir las solicitudes.';
      note.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    });
  });

  /* ---------- 11. Año en curso ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = String(new Date().getFullYear()); });
})();
