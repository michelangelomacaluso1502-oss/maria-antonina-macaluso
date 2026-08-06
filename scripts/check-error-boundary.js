(() => {
  // Cerca il fallback dell'ErrorBoundary
  const errorBoundary = document.querySelector('.flex.min-h-\\[60vh\\]');
  const errorText = errorBoundary?.textContent?.trim();
  
  // Verifica se ci sono elementi con "Qualcosa è andato storto"
  const allText = document.body.textContent || '';
  const hasErrorText = allText.includes('Qualcosa è andato storto') || allText.includes('errore imprevisto');
  
  // Verifica se l'intro animation è presente
  const intro = document.querySelector('[role="progressbar"]');
  
  // Verifica se la pagina ha contenuti normali
  const hero = document.querySelector('#top');
  const header = document.querySelector('header');
  
  return JSON.stringify({
    errorBoundaryVisible: !!errorBoundary,
    errorText: errorText?.substring(0, 100),
    hasErrorText,
    introExists: !!intro,
    heroExists: !!hero,
    headerExists: !!header,
    bodyLength: document.body.innerHTML.length,
  });
})();
