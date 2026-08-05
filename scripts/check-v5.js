new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '4.5s' }));
      return;
    }
    const cs = getComputedStyle(intro);
    const tagline = intro.querySelector('p:nth-of-type(1)');
    const role = intro.querySelector('p:nth-of-type(2)');
    const h1 = intro.querySelector('h1');
    const svg = intro.querySelector('svg');
    const stars = intro.querySelectorAll('[style*="FFD700"], [style*="FFE4B5"]');
    const letterbox = intro.querySelectorAll('.bg-black');
    const monoSpans = Array.from(intro.querySelectorAll('span')).filter(s => {
      const t = s.textContent.trim();
      return t === 'M' && getComputedStyle(s).WebkitBackgroundClip === 'text';
    });
    resolve(JSON.stringify({
      exists: true,
      bg: cs.background.substring(0, 120),
      taglineText: tagline?.textContent?.trim(),
      taglineColor: tagline ? getComputedStyle(tagline).color : null,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      roleText: role?.textContent?.trim(),
      roleColor: role ? getComputedStyle(role).color : null,
      svgExists: !!svg,
      svgColor: svg ? getComputedStyle(svg).color : null,
      starsCount: stars.length,
      letterboxBars: letterbox.length,
      monoSpansCount: monoSpans.length,
      monoLetters: monoSpans.map(s => s.textContent.trim()),
      ariaValuenow: intro.getAttribute('aria-valuenow'),
      at: '4.5s (peak - all elements visible)'
    }, null, 2));
  }, 4500);
});
