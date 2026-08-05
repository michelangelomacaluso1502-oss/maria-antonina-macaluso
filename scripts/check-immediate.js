(() => {
  const intro = document.querySelector('[role="progressbar"]');
  if (!intro) return JSON.stringify({ exists: false, note: 'intro removed or session already seen' });
  
  const cs = getComputedStyle(intro);
  const tagline = intro.querySelector('p');
  const h1 = intro.querySelector('h1');
  const svg = intro.querySelector('svg');
  const stars = intro.querySelectorAll('.rounded-full');
  
  return JSON.stringify({
    exists: true,
    bg: cs.backgroundImage.substring(0, 80),
    taglineText: tagline?.textContent?.trim(),
    taglineColor: tagline ? getComputedStyle(tagline).color : null,
    h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim().substring(0, 40),
    h1Color: h1 ? getComputedStyle(h1).color : null,
    svgExists: !!svg,
    svgFill: svg ? getComputedStyle(svg).color : null,
    starsCount: stars.length,
    ariaLabel: intro.getAttribute('aria-label'),
    ariaValuenow: intro.getAttribute('aria-valuenow'),
    zIndex: cs.zIndex,
  }, null, 2);
})();
