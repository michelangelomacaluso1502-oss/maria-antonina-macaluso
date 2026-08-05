new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '1.5s' }));
      return;
    }
    const cs = getComputedStyle(intro);
    const tagline = intro.querySelector('p:nth-of-type(1)');
    const h1 = intro.querySelector('h1');
    const role = intro.querySelector('p:nth-of-type(2)');
    const svg = intro.querySelector('svg');
    const stars = intro.querySelectorAll('.bg-\\[\\#d4af37\\]').length;
    const progressBar = intro.querySelector('.bg-\\[\\#d4af37\\]:last-child');
    resolve(JSON.stringify({
      exists: true,
      bg: cs.backgroundImage.substring(0, 100),
      taglineText: tagline?.textContent?.trim(),
      taglineColor: tagline ? getComputedStyle(tagline).color : null,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      h1Color: h1 ? getComputedStyle(h1).color : null,
      roleText: role?.textContent?.trim(),
      svgExists: !!svg,
      svgColor: svg ? getComputedStyle(svg).color : null,
      starsCount: stars,
      ariaLabel: intro.getAttribute('aria-label'),
      ariaValuenow: intro.getAttribute('aria-valuenow'),
      at: '1.5s'
    }, null, 2));
  }, 1500);
});
