(() => {
  return JSON.stringify({
    readyState: document.readyState,
    hasIntroLock: document.documentElement.classList.contains('intro-lock'),
    overlayExists: !!document.getElementById('intro-overlay'),
    overlayClasses: document.getElementById('intro-overlay')?.className,
  });
})();
