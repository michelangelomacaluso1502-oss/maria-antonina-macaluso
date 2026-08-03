(() => {
  const ov = document.getElementById('intro-overlay');
  if (!ov) return JSON.stringify({ exists: false, at: 'realtime' });
  const cs = getComputedStyle(ov);
  const mono = document.querySelector('.intro-monogram');
  const name = document.querySelector('.intro-name-big');
  return JSON.stringify({
    exists: true,
    overlayClasses: ov.className,
    overlayOpacity: cs.opacity,
    monoOpacity: mono ? getComputedStyle(mono).opacity : null,
    nameOpacity: name ? getComputedStyle(name).opacity : null,
    at: 'realtime'
  });
})();
