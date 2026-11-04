// KS Consulting — site behaviour: CTA wiring, scroll reveal, lead form.
(() => {
  // ─── EDITE AQUI ────────────────────────────────────────────────────────────
  const CONFIG = {
    whatsapp: '5511939388572',                  // DDI+DDD+numero, so digitos
    // Pagina de agendamentos do Google Calendar (o visitante reserva o horario).
    calendly: 'https://calendar.app.google/vKKCXnH49fx6Uycy7',
    mensagem: 'Ola! Vim pelo site da KS Consulting e quero agendar o diagnostico cirurgico.',
    mensagemAgenda: 'Ola! Quero marcar um horario para o diagnostico cirurgico da KS Consulting.',
  };
  // ───────────────────────────────────────────────────────────────────────────

  const waUrl = (text) =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text || CONFIG.mensagem)}`;

  document.querySelectorAll('[data-cta="whatsapp"]').forEach((el) => {
    el.href = waUrl();
    el.target = '_blank';
    el.rel = 'noopener';
  });
  document.querySelectorAll('[data-cta="calendly"]').forEach((el) => {
    el.href = CONFIG.calendly || waUrl(CONFIG.mensagemAgenda);
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // Lead form → abre o WhatsApp com os dados preenchidos (sem backend).
  const form = document.getElementById('lead-form');
  if (form) {
    const msg = document.createElement('p');
    msg.className = 'ks-form__msg';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const required = ['nome', 'empresa', 'whatsapp'];
      const missing = required.filter((k) => !String(d.get(k) || '').trim());
      if (missing.length) {
        msg.textContent = 'Preencha nome, empresa e WhatsApp.';
        msg.style.color = '#FB923C';
        form.appendChild(msg);
        return;
      }
      const text =
        `Diagnostico KS\n` +
        `Nome: ${d.get('nome')}\n` +
        `Empresa: ${d.get('empresa')}\n` +
        `WhatsApp: ${d.get('whatsapp')}\n` +
        `Gargalo: ${d.get('gargalo') || '-'}`;
      msg.textContent = 'Abrindo o WhatsApp com seus dados…';
      msg.style.color = '#34D399';
      form.appendChild(msg);
      window.open(waUrl(text), '_blank', 'noopener');
    });
  }

  // Scroll reveal: fade + slide-up 30px com stagger de 90ms.
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        (en.target.__kids || []).forEach((k, i) => {
          k.style.transitionDelay = Math.min(i * 90, 540) + 'ms';
          k.classList.add('is-in');
        });
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

    document.querySelectorAll('section, footer').forEach((sec) => {
      if (sec.getBoundingClientRect().top < innerHeight * 0.9) return;
      const kids = Array.from(sec.children)
        .flatMap((c) => {
          const inner = Array.from(c.children);
          return inner.length > 1 && inner.length < 8 ? inner : [c];
        })
        .filter((n) => n.nodeType === 1 && getComputedStyle(n).position !== 'absolute');
      kids.forEach((k) => k.classList.add('reveal'));
      sec.__kids = kids;
      io.observe(sec);
    });
  }

  // Vídeo de case: respeita o recorte (data-clip-start / data-clip-end).
  document.querySelectorAll('video[data-clip-start]').forEach((v) => {
    const start = parseFloat(v.dataset.clipStart || '0');
    const end = parseFloat(v.dataset.clipEnd || '0');
    const seekIn = () => { if (v.currentTime < start - 0.5) v.currentTime = start; };
    v.addEventListener('loadedmetadata', seekIn);
    v.addEventListener('play', seekIn);
    v.addEventListener('timeupdate', () => {
      if (end && v.currentTime >= end) { v.pause(); v.currentTime = start; }
    });
  });

  // Vídeo vertical (ImobFlow): sem áudio, toca mudo em loop só quando está na tela.
  // preload="none" no HTML evita baixar o arquivo antes de o visitante chegar à seção.
  const inview = document.querySelectorAll('video[data-inview-play]');
  if (!reduced && inview.length && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        if (en.isIntersecting) { v.muted = true; v.play().catch(() => {}); }
        else if (!v.paused) v.pause();
      });
    }, { threshold: 0.4 });
    inview.forEach((v) => vio.observe(v));
  }

  // Cases por área: um card aberto por vez; link direto com #cases-pesquisa etc.
  const areaCards = Array.from(document.querySelectorAll('.area-card'));
  const closeMore = (panel) => {
    panel.querySelectorAll('.more-btn').forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('[data-more]').textContent = 'Saiba mais';
    });
    panel.querySelectorAll('.area-more').forEach((m) => { m.hidden = true; });
  };
  const openArea = (id) => {
    areaCards.forEach((card) => {
      const panel = document.getElementById(card.dataset.area);
      const isOpen = card.dataset.area === id;
      card.setAttribute('aria-expanded', String(isOpen));
      card.querySelector('[data-go]').textContent = isOpen ? 'Fechar' : 'Ver cases';
      if (!isOpen) {
        panel.querySelectorAll('video').forEach((v) => v.pause());
        closeMore(panel);
      }
      panel.hidden = !isOpen;
    });
  };
  const fromHash = () => {
    const id = location.hash.slice(1);
    const card = areaCards.find((c) => c.dataset.area === id);
    if (!card) return;
    openArea(id);
    card.scrollIntoView({ block: 'start' });
  };
  areaCards.forEach((card) => {
    card.addEventListener('click', () => {
      const wasOpen = card.getAttribute('aria-expanded') === 'true';
      openArea(wasOpen ? null : card.dataset.area);
      history.replaceState(null, '', wasOpen ? '#cases' : '#' + card.dataset.area);
      if (!wasOpen && matchMedia('(max-width:900px)').matches) card.scrollIntoView({ block: 'start' });
    });
  });
  document.querySelectorAll('.more-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const more = document.getElementById(btn.getAttribute('aria-controls'));
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('[data-more]').textContent = open ? 'Ver menos' : 'Saiba mais';
      if (!open) more.querySelectorAll('video').forEach((v) => v.pause());
      more.hidden = !open;
    });
  });
  addEventListener('hashchange', fromHash);
  fromHash();
  // A altura da página muda quando fontes e imagens terminam de carregar: refaz a rolagem.
  addEventListener('load', () => { (document.fonts ? document.fonts.ready : Promise.resolve()).then(fromHash); });

  // Logo animado: reinicia a animação a cada 10s. SVG dentro de <img> não roda
  // script, então trocamos o src por um blob novo (mesmo conteúdo, sem rede).
  const LOGO_RESTART_MS = 10000;
  const logos = document.querySelectorAll('img.site-logo');
  if (!reduced && logos.length && window.fetch && window.URL && URL.createObjectURL) {
    fetch(logos[0].src)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((svg) => {
        let current = null;
        setInterval(() => {
          if (document.hidden) return;
          const next = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
          logos.forEach((img) => { img.src = next; });
          if (current) URL.revokeObjectURL(current);
          current = next;
        }, LOGO_RESTART_MS);
      })
      .catch(() => {});
  }

  // Header flutuante: reforça o vidro depois que a página rola.
  const hdr = document.getElementById('hdr');
  if (hdr) {
    const onScroll = () => hdr.classList.toggle('is-scrolled', scrollY > 24);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Lucide icons (stroke 1.75 conforme o design system).
  const drawIcons = () => window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });
  if (window.lucide) drawIcons(); else window.addEventListener('load', drawIcons);
})();
