new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    if (!ov) {
      resolve(JSON.stringify({ exists: false, at: '3.5s' }));
      return;
    }
    const cs = getComputedStyle(ov);
    resolve(JSON.stringify({
      exists: true,
      classes: ov.className,
      opacity: cs.opacity,
      visibility: cs.visibility,
      at: '3.5s'
    }));
  }, 3500);
});
