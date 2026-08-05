(() => {
  // Verifica lo stato dell'ErrorBoundary
  const errorBoundary = document.querySelector('.flex.min-h-\\[60vh\\]');
  const introExists = !!document.querySelector('[role="progressbar"]');
  const bodyText = document.body.textContent?.substring(0, 200);
  
  return JSON.stringify({
    errorBoundaryVisible: !!errorBoundary,
    errorBoundaryText: errorBoundary ? errorBoundary.textContent?.trim() : null,
    introExists,
    bodyTextStart: bodyText,
  });
})();
