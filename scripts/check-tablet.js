(() => {
  // Simula tablet: scorri e verifica se le sezioni caricano
  const results = {};
  
  // 1. Verifica ErrorBoundary
  results.errorBoundary = !!document.querySelector('.flex.min-h-\\[60vh\\]');
  
  // 2. Verifica immagini photobook
  const pbSection = document.getElementById('photobook');
  results.photobookExists = !!pbSection;
  
  // 3. Verifica timeline
  const timelineSection = document.getElementById('timeline');
  results.timelineExists = !!timelineSection;
  
  // 4. Verifica filmography
  const filmSection = document.getElementById('filmografia');
  results.filmographyExists = !!filmSection;
  
  // 5. Conta tutte le immagini nella pagina
  const allImgs = document.querySelectorAll('img');
  results.totalImgs = allImgs.length;
  
  // 6. Verifica se ci sono immagini con src vuoto o errore
  const brokenImgs = Array.from(allImgs).filter(img => !img.src || img.naturalWidth === 0);
  results.brokenImgs = brokenImgs.length;
  
  // 7. Verifica console errors
  results.bodyLength = document.body.innerHTML.length;
  results.readyState = document.readyState;
  
  // 8. Verifica Reveal components (potrebbero non attivarsi su tablet)
  const reveals = document.querySelectorAll('[class*="reveal"]');
  results.totalReveals = reveals.length;
  const visibleReveals = Array.from(reveals).filter(el => {
    const cs = getComputedStyle(el);
    return cs.opacity !== '0' && cs.display !== 'none';
  });
  results.visibleReveals = visibleReveals.length;
  
  return JSON.stringify(results, null, 2);
})();
