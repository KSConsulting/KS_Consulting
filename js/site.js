// KS Consulting — site behaviour: CTA wiring, scroll reveal, lead form.
(() => {
  // ─── EDITE AQUI ────────────────────────────────────────────────────────────
  const CONFIG = {
    whatsapp: '5511939388572',                  // DDI+DDD+numero, so digitos
    // Pagina de agendamentos do Google Calendar (o visitante reserva o horario).
    calendly: 'https://calendar.app.google/vKKCXnH49fx6Uycy7',
    mensagem: 'Ola! Vim pelo site da KS Consulting e quero agendar o diagnostico de 30 minutos.',
    mensagemAgenda: 'Ola! Quero marcar um horario para o diagnostico de 30 minutos da KS Consulting.',
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
        msg.style.color = '#20A4FF';
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
      msg.style.color = '#BAFC04';
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

  // Lucide icons (stroke 1.75 conforme o design system).
  const drawIcons = () => window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.75 } });
  if (window.lucide) drawIcons(); else window.addEventListener('load', drawIcons);
})();
