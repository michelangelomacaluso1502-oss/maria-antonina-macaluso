(() => {
  const intro = document.querySelector('[role="progressbar"]');
  if (!intro) return JSON.stringify({ exists: false, immediate: true });
  
  const cs = getComputedStyle(intro);
  return JSON.stringify({
    exists: true,
    opacity: cs.opacity,
    display: cs.display,
    zIndex: cs.zIndex,
    height: intro.offsetHeight,
    width: intro.offsetWidth,
    rect: JSON.stringify(intro.getBoundingClientRect()),
    immediate: true
  });
})();
