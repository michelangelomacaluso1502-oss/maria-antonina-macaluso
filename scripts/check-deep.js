(() => {
  // Check if the IntroLoader client component hydrate left any trace
  const ov = document.getElementById('intro-overlay');
  const html = document.documentElement;
  return JSON.stringify({
    overlayExists: !!ov,
    overlayClasses: ov ? ov.className : null,
    hasIntroLock: html.classList.contains('intro-lock'),
    readyState: document.readyState,
    bodyChildren: Array.from(document.body.children).map(c => c.tagName + (c.id ? '#' + c.id : '') + (c.className ? '.' + c.className.split(' ')[0] : '')).slice(0, 10),
    hasIntroLoaderScript: !!document.querySelector('script[data-intro-loader]'),
  });
})();
