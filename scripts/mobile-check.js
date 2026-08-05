(() => {
  // Simula mobile viewport
  const vp = {
    width: window.innerWidth,
    height: window.innerHeight,
    dpr: window.devicePixelRatio || 1,
    touch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    connection: navigator.connection?.effectiveType || '4g',
    saveData: navigator.connection?.saveData || false,
  };

  // Check responsive images
  const heroImg = document.querySelector('img[alt="Maria Antonina Macaluso"]');
  const heroSrc = heroImg?.srcset || heroImg?.src || 'none';

  // Check if fonts are loaded
  const fontsLoaded = document.fonts ? document.fonts.status : 'unknown';

  // Check intro overlay
  const introExists = !!document.getElementById('intro-overlay');

  // Check critical CSS (no FOUC)
  const bodyBg = getComputedStyle(document.body).backgroundColor;
  const bodyColor = getComputedStyle(document.body).color;

  return JSON.stringify({
    viewport: vp,
    heroImageSrc: heroSrc.substring(0, 100),
    fontsLoaded,
    introExists,
    bodyBg,
    bodyColor,
    readyState: document.readyState,
    domNodes: document.getElementsByTagName('*').length,
  }, null, 2);
})();
