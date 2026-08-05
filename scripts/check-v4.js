(() => {
  const intro = document.querySelector('[role="progressbar"]');
  if (!intro) return JSON.stringify({ exists: false, note: 'intro already removed' });
  
  const tagline = intro.querySelector('p:nth-of-type(1)');
  const role = intro.querySelector('p:nth-of-type(2)');
  const h1 = intro.querySelector('h1');
  const spans = h1 ? h1.querySelectorAll('span > span') : [];
  const mono = intro.querySelectorAll('.font-display');
  const svg = intro.querySelector('svg');
  const stars = intro.querySelectorAll('.bg-\\[\\#d4af37\\]');
  const letterbox = intro.querySelectorAll('.bg-black');
  const glow = intro.querySelector('[style*="radial-gradient"]');
  
  // Trova il monogramma M·M (3 span font-display text-4xl/5xl)
  const monoSpans = Array.from(intro.querySelectorAll('span')).filter(s => {
    const cs = getComputedStyle(s);
    return cs.fontSize === '48px' || cs.fontSize === '36px' || (cs.WebkitBackgroundClip === 'text' && s.textContent.trim() === 'M');
  });
  
  return JSON.stringify({
    exists: true,
    bg: getComputedStyle(intro).backgroundImage.substring(0, 80),
    taglineText: tagline?.textContent?.trim(),
    taglineColor: tagline ? getComputedStyle(tagline).color : null,
    h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
    roleText: role?.textContent?.trim(),
    roleColor: role ? getComputedStyle(role).color : null,
    svgExists: !!svg,
    monoSpansCount: monoSpans.length,
    monoLetters: monoSpans.map(s => s.textContent.trim()),
    starsCount: stars.length,
    letterboxBars: letterbox.length,
    glowExists: !!glow,
    ariaLabel: intro.getAttribute('aria-label'),
    ariaValuenow: intro.getAttribute('aria-valuenow'),
    zIndex: getComputedStyle(intro).zIndex,
  }, null, 2);
})();
