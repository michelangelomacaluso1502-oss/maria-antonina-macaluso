(() => {
  // Trova e clicca il primo button FAQ per aprire la risposta
  const faqButtons = document.querySelectorAll('button[aria-expanded]');
  if (faqButtons.length === 0) return JSON.stringify({ error: 'Nessun button FAQ trovato' });
  
  // Apri l'ultima FAQ (che contiene i link social)
  const lastButton = faqButtons[faqButtons.length - 1];
  lastButton.click();
  
  // Aspetta che si apra
  return new Promise(resolve => {
    setTimeout(() => {
      const faqLinks = document.querySelectorAll('a.faq-link, a[class*="text-blue"]');
      const links = Array.from(faqLinks).map(a => ({
        href: a.getAttribute('href'),
        target: a.getAttribute('target'),
        text: a.textContent?.substring(0, 30),
      }));
      
      const fbEmbed = document.querySelector('a[href*="facebook.com/share"]');
      
      resolve(JSON.stringify({
        faqLinksCount: faqLinks.length,
        faqLinks: links.slice(0, 8),
        fbEmbedExists: !!fbEmbed,
        fbEmbedHref: fbEmbed?.getAttribute('href'),
      }, null, 2));
    }, 500);
  });
})();
