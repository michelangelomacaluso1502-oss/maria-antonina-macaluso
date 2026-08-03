new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    if (!ov) { resolve(JSON.stringify({ exists: false, at: '1.5s' })); return; }
    const cs = getComputedStyle(ov);
    const mono = document.querySelector('.intro-monogram');
    const monoCs = mono ? getComputedStyle(mono) : null;
    resolve(JSON.stringify({
      exists: true,
      opacity: cs.opacity,
      monoExists: !!mono,
      monoOpacity: monoCs ? monoCs.opacity : null,
      monoFilter: monoCs ? monoCs.filter : null,
      monoTransform: monoCs ? monoCs.transform : null,
      mLetters: Array.from(document.querySelectorAll('.intro-m-letter')).map(e => e.textContent),
      mDot: document.querySelector('.intro-m-dot')?.textContent,
      nameWhite: document.querySelector('.intro-name-white')?.textContent.trim(),
      nameGold: document.querySelector('.intro-name-gold')?.textContent.trim(),
      tagline: document.querySelector('.intro-tagline')?.textContent.trim(),
      at: '1.5s'
    }));
  }, 1500);
});
