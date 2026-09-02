/* ============================================================
   Shared page components — header and footer.

   Each page carries an empty placeholder div and loads this
   script. The fragments (/nav.html, /footer.html) are fetched
   and swapped in, so the markup lives in exactly one file.

   Same pattern as the main nomadsummercamp.com site.

   Note: the header is `position: sticky`, not `fixed`, so it
   occupies normal layout space and needs no spacer or height
   measurement. CSS reserves the placeholder's height, so the
   swap causes no layout shift.
   ============================================================ */
(function () {

  /* Fetch a fragment and replace its placeholder with the markup.
     `always` runs once the attempt settles (injected, skipped, or
     failed) so callers can wait for every fragment to be in the DOM. */
  function inject(placeholderId, url, onDone, always) {
    var placeholder = document.getElementById(placeholderId);
    if (!placeholder) { if (always) always(); return; }

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error(url + ' returned ' + res.status);
        return res.text();
      })
      .then(function (html) {
        var tmp = document.createElement('div');
        tmp.innerHTML = html;
        placeholder.replaceWith.apply(placeholder, Array.from(tmp.childNodes));
        if (onDone) onDone();
      })
      .catch(function (err) {
        console.error('[components] could not load', url, err);
      })
      .finally(function () {
        if (always) always();
      });
  }

  /* "/about/index.html", "/about/" and "/about" all mean the same page. */
  function normalize(path) {
    return path.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';
  }

  function initNav() {
    var here = normalize(window.location.pathname);

    document.querySelectorAll('.site-header__link').forEach(function (link) {
      if (normalize(link.getAttribute('href') || '') === here) {
        link.classList.add('site-header__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });

    /* Tally scanned the document before this markup existed, so the
       header's CTA has to be registered by hand. */
    if (window.Tally) window.Tally.loadEmbeds();

    var header = document.getElementById('site-header');
    if (!header) return;

    /* Mobile dropdown menu. The links live in the same <nav> that shows
       inline on desktop; below 768px style.css turns it into a panel and
       this just toggles .site-header--menu-open. */
    var toggle = header.querySelector('.site-header__menu-toggle');
    var nav = document.getElementById('site-header-nav');
    if (toggle && nav) {
      var setMenu = function (open) {
        header.classList.toggle('site-header--menu-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
      toggle.addEventListener('click', function () {
        setMenu(!header.classList.contains('site-header--menu-open'));
      });
      nav.addEventListener('click', function (e) {
        if (e.target.closest('.site-header__link')) setMenu(false);
      });
      document.addEventListener('click', function (e) {
        if (header.classList.contains('site-header--menu-open') && !header.contains(e.target)) {
          setMenu(false);
        }
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && header.classList.contains('site-header--menu-open')) {
          setMenu(false);
          toggle.focus();
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) setMenu(false);
      });
    }

    /* One scroll listener drives both:
       - desktop (>=1101px): collapse the 80px bar to 50px once scrolled
         (heights + transition live in style.css)
       - mobile only (<=768px, where the dropdown menu lives): auto-hide —
         the header slides up on scroll-down and back in on scroll-up, but
         never while the menu is open or within the header's height of the
         top. Tablet keeps the header put. */
    var lastY = window.scrollY;
    var headerH = header.offsetHeight;
    var onScroll = function () {
      var y = window.scrollY < 0 ? 0 : window.scrollY;
      header.classList.toggle('site-header--scrolled', y > 0);

      if (window.innerWidth > 768 ||
          header.classList.contains('site-header--menu-open') ||
          y <= 8) {
        header.classList.remove('site-header--hidden');
      } else if (Math.abs(y - lastY) > 6) {
        header.classList.toggle('site-header--hidden', y > lastY && y > headerH);
      }
      lastY = y;
    };
    window.addEventListener('resize', function () { headerH = header.offsetHeight; });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initFooter() {
    /* Tally scanned the document before this markup existed, so the
       footer's CTA has to be registered by hand — same as the header. */
    if (window.Tally) window.Tally.loadEmbeds();
  }

  /* Newsletter popup.

     The triggers (.js-beehiiv-newsletter) live in both fragments and the
     #nsc-newsletter-overlay lives in the footer fragment, so this must run
     once *both* fragments are in the DOM.

     The overlay's beehiiv embed iframe is in the markup from the start, so
     opening the popup is just a class toggle — instant. (The previous
     approach, beehiiv's v3/loader.js, *built* the popup on click, which
     took ~1s, and its click handler was single-use so it only ever opened
     once.) beehiiv's embed.js just watches the iframe and resizes it. */
  var fragmentsPending = 2;

  function initNewsletter() {
    var overlay = document.getElementById('nsc-newsletter-overlay');
    if (!overlay) return;

    if (!document.querySelector('script[src*="subscribe-forms.beehiiv.com/embed.js"]')) {
      var s = document.createElement('script');
      s.async = true;
      s.src = 'https://subscribe-forms.beehiiv.com/embed.js';
      document.body.appendChild(s);
    }

    var open = function (e) {
      if (e) e.preventDefault();
      overlay.classList.add('nsc-nl-overlay--open');
      document.documentElement.style.overflow = 'hidden';
    };
    var close = function () {
      overlay.classList.remove('nsc-nl-overlay--open');
      document.documentElement.style.overflow = '';
    };

    document.querySelectorAll('.js-beehiiv-newsletter').forEach(function (el) {
      el.addEventListener('click', open);
    });
    overlay.querySelector('.nsc-nl-overlay__close').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('nsc-nl-overlay--open')) close();
    });
  }

  function fragmentSettled() {
    fragmentsPending -= 1;
    if (fragmentsPending === 0) initNewsletter();
  }

  inject('nav-placeholder', '/nav.html', initNav, fragmentSettled);
  inject('footer-placeholder', '/footer.html', initFooter, fragmentSettled);

})();
