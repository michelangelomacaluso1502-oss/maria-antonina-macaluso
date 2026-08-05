new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '9.5s' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const h1Spans = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
    const visibleLetters = h1Spans.filter(s => {
      const cs = getComputedStyle(s);
      return parseFloat(cs.opacity) > 0.5;
    }).map(s => s.textContent).join('');
    
    const role = intro.querySelector('p:nth-of-type(2)');
    const monoSpans = Array.from(intro.querySelectorAll('span')).filter(s => {
      const t = s.textContent.trim();
      return t === 'M' && getComputedStyle(s).WebkitBackgroundClip === 'text';
    });
    
    resolve(JSON.stringify({
      exists: true,
      h1VisibleLetters: visibleLetters,
      h1AllLettersVisible: visibleLetters.length >= 20,
      roleText: role?.textContent?.trim(),
      roleOpacity: role ? parseFloat(getComputedStyle(role).opacity) : null,
      monoExists: monoSpans.length === 2,
      monoOpacity: monoSpans.length > 0 ? parseFloat(getComputedStyle(monoSpans[0].parentElement).opacity) : null,
      progress: intro.getAttribute('aria-valuenow'),
      at: '9.5s (hold phase - all should be visible)'
    }, null, 2));
  }, 9500);
});
