(() => {
  // Verifica che i link FAQ siano presenti e cliccabili
  const faqLinks = document.querySelectorAll('a.faq-link, a[class*="text-blue"]');
  const links = Array.from(faqLinks).map(a => ({
    href: a.getAttribute('href'),
    target: a.getAttribute('target'),
    rel: a.getAttribute('rel'),
    text: a.textContent?.substring(0, 30),
    hasOnClick: a.hasAttribute('onclick') || a.onclick !== null,
  }));
  
  // Verifica FacebookEmbed
  const fbEmbed = document.querySelector('a[href*="facebook.com/share"]');
  
  // Verifica overflow hidden sui container FAQ
  const faqContainer = document.querySelector('[class*="grid-rows"]');
  const faqContainerStyle = faqContainer ? getComputedStyle(faqContainer) : null;
  
  return JSON.stringify({
    faqLinksCount: faqLinks.length,
    faqLinks: links.slice(0, 5),
    fbEmbedExists: !!fbEmbed,
    fbEmbedHref: fbEmbed?.getAttribute('href'),
    faqContainerOverflow: faqContainerStyle?.overflow,
    faqContainerPointerEvents: faqContainerStyle?.pointerEvents,
  }, null, 2);
})();
