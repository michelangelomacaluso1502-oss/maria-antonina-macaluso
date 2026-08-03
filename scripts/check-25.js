new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    if (!ov) { resolve(JSON.stringify({ exists: false, at: '2.5s' })); return; }
    const name = document.querySelector('.intro-name-big');
    const nameCs = name ? getComputedStyle(name) : null;
    const prof = document.querySelector('.intro-profession');
    const profCs = prof ? getComputedStyle(prof) : null;
    resolve(JSON.stringify({
      exists: true,
      overlayOpacity: getComputedStyle(ov).opacity,
      monoOpacity: getComputedStyle(document.querySelector('.intro-monogram')).opacity,
      nameOpacity: nameCs ? nameCs.opacity : null,
      nameFilter: nameCs ? nameCs.filter : null,
      nameWhite: document.querySelector('.intro-name-white')?.textContent.trim(),
      nameGold: document.querySelector('.intro-name-gold')?.textContent.trim(),
      professionText: prof?.textContent.trim(),
      professionOpacity: profCs ? profCs.opacity : null,
      at: '2.5s'
    }));
  }, 2500);
});
