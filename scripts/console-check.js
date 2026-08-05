(() => {
  const errors = [];
  const originalError = console.error;
  console.error = function(...args) {
    errors.push(args.join(' '));
    originalError.apply(console, args);
  };

  // Check for hydration errors
  const ov = document.getElementById('intro-overlay');
  const hasReactErrors = document.querySelector('nextjs-portal') !== null;

  // Check scroll performance
  const scrollY = window.scrollY;
  const startTime = performance.now();
  window.scrollTo(0, 500);
  window.scrollTo(0, scrollY);
  const scrollTime = performance.now() - startTime;

  // Check if all images loaded
  const images = Array.from(document.querySelectorAll('img'));
  const loadedImages = images.filter(img => img.complete && img.naturalWidth > 0).length;

  // Check memory info (Chrome only)
  const memory = performance.memory ? {
    usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) + 'MB',
    totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024) + 'MB',
    jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024) + 'MB',
  } : null;

  return JSON.stringify({
    errors: errors.slice(0, 5),
    overlayExists: !!ov,
    totalImages: images.length,
    loadedImages,
    scrollTimeMs: scrollTime,
    memory,
    connectionType: navigator.connection?.effectiveType || 'unknown',
    downlink: navigator.connection?.downlink || 'unknown',
    rtt: navigator.connection?.rtt || 'unknown',
  }, null, 2);
})();
