new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '6.5s' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const h1Spans = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
    const allNameVisible = h1Spans.length > 0 && h1Spans.every(s => {
      const cs = getComputedStyle(s);
      return parseFloat(cs.opacity) > 0.8 && cs.filter === 'blur(0px)';
    });
    
    // Find monogram (the div with filter blur)
    const allDivs = intro.querySelectorAll('div');
    let monoDiv = null;
    allDivs.forEach(d => {
      const cs = getComputedStyle(d);
      if (cs.filter && cs.filter !== 'none' && d.querySelector('span')) {
        const spans = d.querySelectorAll('span');
        if (spans.length >= 2) monoDiv = d;
      }
    });
    
    const monoCs = monoDiv ? getComputedStyle(monoDiv) : null;
    
    resolve(JSON.stringify({
      exists: true,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      allNameVisible,
      letterCount: h1Spans.length,
      monoExists: !!monoDiv,
      monoFilter: monoCs ? monoCs.filter : null,
      monoOpacity: monoCs ? parseFloat(monoCs.opacity).toFixed(2) : null,
      monoIsBlurred: monoCs ? (monoCs.filter !== 'none' && monoCs.filter !== 'blur(0px)') : null,
      at: '6.5s (reference state: name clear, M·M blurred)'
    }, null, 2));
  }, 6500);
});
