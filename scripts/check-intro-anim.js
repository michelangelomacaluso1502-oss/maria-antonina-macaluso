(() => {
  const intro = document.getElementById('intro-animation');
  if (!intro) {
    return JSON.stringify({ exists: false, note: 'intro già rimosso o sessionStorage attivo' });
  }
  const cs = getComputedStyle(intro);
  const stars = intro.querySelectorAll('span[style*="twinkle"], span[style*="borderRadius"]').length;
  const h1 = intro.querySelector('h1');
  const h1Text = h1?.textContent?.replace(/\s+/g, ' ').trim();
  const role = intro.querySelector('p')?.textContent?.trim();
  const svgs = intro.querySelectorAll('svg').length;
  const progressbar = intro.getAttribute('role');
  const ariaLabel = intro.getAttribute('aria-label');
  const ariaValuenow = intro.getAttribute('aria-valuenow');
  return JSON.stringify({
    exists: true,
    opacity: cs.opacity,
    bg: cs.backgroundImage.substring(0, 80),
    zIndex: cs.zIndex,
    starsCount: stars,
    h1Text,
    h1Color: h1 ? getComputedStyle(h1).color : null,
    h1Font: h1 ? getComputedStyle(h1).fontFamily : null,
    roleText: role,
    svgCount: svgs,
    progressbarRole: progressbar,
    ariaLabel: ariaLabel?.substring(0, 60),
    ariaValuenow,
    bodyOverflow: getComputedStyle(document.body).overflow,
  }, null, 2);
})();
