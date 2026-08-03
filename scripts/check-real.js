(() => {
  const ov = document.getElementById('intro-overlay');
  if (!ov) return JSON.stringify({ exists: false, note: 'overlay già rimosso' });
  const cs = getComputedStyle(ov);
  const rect = ov.getBoundingClientRect();
  return JSON.stringify({
    exists: true,
    classes: ov.className,
    opacity: cs.opacity,
    visibility: cs.visibility,
    display: cs.display,
    zIndex: cs.zIndex,
    bg: cs.backgroundColor,
    rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
    parentTag: ov.parentElement?.tagName,
    parentClass: ov.parentElement?.className?.substring(0, 80),
    isHidden: ov.hidden,
    ariaHidden: ov.getAttribute('aria-hidden'),
    note: 'snapshot realtime'
  });
})();
