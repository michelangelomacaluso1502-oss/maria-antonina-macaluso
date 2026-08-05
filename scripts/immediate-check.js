(() => {
  // Check immediato — appena caricato
  const intro = document.querySelector('[role="progressbar"]');
  const allH1 = document.querySelectorAll('h1');
  const bodyHTML = document.body.innerHTML.substring(0, 500);
  
  return JSON.stringify({
    introExists: !!intro,
    introOpacity: intro ? getComputedStyle(intro).opacity : null,
    introDisplay: intro ? getComputedStyle(intro).display : null,
    totalH1: allH1.length,
    h1Texts: Array.from(allH1).map(h => h.textContent?.substring(0, 30)),
    bodyStart: bodyHTML,
    readyState: document.readyState,
    url: window.location.href,
  }, null, 2);
})();
