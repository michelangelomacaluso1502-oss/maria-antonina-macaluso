new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '8.5s' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const role = intro.querySelector('p:nth-of-type(2)');
    const monoSpans = Array.from(intro.querySelectorAll('span')).filter(s => {
      const t = s.textContent.trim();
      return t === 'M' && getComputedStyle(s).WebkitBackgroundClip === 'text';
    });
    // Check which letters are visible (opacity > 0.5)
    const h1Spans = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
    const visibleLetters = h1Spans.filter(s => {
      const cs = getComputedStyle(s);
      return parseFloat(cs.opacity) > 0.5 && cs.filter === 'blur(0px)';
    }).map(s => s.textContent);
    resolve(JSON.stringify({
      exists: true,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      visibleLettersCount: visibleLetters.length,
      visibleLetters: visibleLetters.join(''),
      roleText: role?.textContent?.trim(),
      roleOpacity: role ? getComputedStyle(role).opacity : null,
      monoSpansCount: monoSpans.length,
      monoOpacity: monoSpans.length > 0 ? getComputedStyle(monoSpans[0].parentElement).opacity : null,
      progress: intro.getAttribute('aria-valuenow'),
      at: '8.5s (all should be visible)'
    }, null, 2));
  }, 8500);
});
