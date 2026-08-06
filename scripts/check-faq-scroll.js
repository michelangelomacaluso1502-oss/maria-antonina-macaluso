(() => {
  // Scorri fino alla sezione FAQ
  const faqSection = document.getElementById('faq');
  if (faqSection) {
    faqSection.scrollIntoView({ behavior: 'instant' });
  }
  
  return new Promise(resolve => {
    setTimeout(() => {
      const faqButtons = document.querySelectorAll('#faq button[aria-expanded]');
      const allLinks = document.querySelectorAll('#faq a');
      const blueLinks = document.querySelectorAll('#faq a[class*="text-blue"], #faq a.faq-link');
      
      const links = Array.from(allLinks).map(a => ({
        href: a.getAttribute('href'),
        text: a.textContent?.substring(0, 40),
        classes: a.className?.substring(0, 50),
      }));
      
      resolve(JSON.stringify({
        faqSectionFound: !!faqSection,
        faqButtonsCount: faqButtons.length,
        allLinksCount: allLinks.length,
        blueLinksCount: blueLinks.length,
        links: links.slice(0, 10),
      }, null, 2));
    }, 1000);
  });
})();
