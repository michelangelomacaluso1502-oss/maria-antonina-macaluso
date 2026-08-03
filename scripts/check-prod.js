new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    if (!ov) {
      resolve(JSON.stringify({ exists: false, at: '1.5s' }));
      return;
    }
    const cs = getComputedStyle(ov);
    resolve(JSON.stringify({
      exists: true,
      classes: ov.className,
      opacity: cs.opacity,
      zIndex: cs.zIndex,
      bg: cs.backgroundColor,
      nameWhite: document.querySelector('.intro-name-white')?.textContent.trim(),
      nameGold: document.querySelector('.intro-name-gold')?.textContent.trim(),
      tagline: document.querySelector('.intro-tagline')?.textContent.trim(),
      profession: document.querySelector('.intro-profession')?.textContent.trim(),
      bodyOverflow: getComputedStyle(document.body).overflow,
      at: '1.5s'
    }));
  }, 1500);
});
