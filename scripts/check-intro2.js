(() => {
  const ov = document.getElementById('intro-overlay');
  if (!ov) return JSON.stringify({ error: 'overlay NOT in DOM' });
  
  const cs = getComputedStyle(ov);
  return JSON.stringify({
    exists: true,
    classes: ov.className,
    opacity: cs.opacity,
    visibility: cs.visibility,
    zIndex: cs.zIndex,
    bg: cs.backgroundColor,
    display: cs.display,
    rect: JSON.stringify(ov.getBoundingClientRect()),
    nameBig: document.querySelector('.intro-name-big')?.textContent.replace(/\s+/g,' ').trim() || null,
    nameWhite: document.querySelector('.intro-name-white')?.textContent.trim() || null,
    nameGold: document.querySelector('.intro-name-gold')?.textContent.trim() || null,
    profession: document.querySelector('.intro-profession')?.textContent.trim() || null,
    bodyOverflow: getComputedStyle(document.body).overflow,
  }, null, 2);
})();
