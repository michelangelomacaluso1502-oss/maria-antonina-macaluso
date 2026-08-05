new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '8.5s', note: 'intro già rimosso' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const h1Spans = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
    const letterStates = h1Spans.map(s => {
      const cs = getComputedStyle(s);
      return {
        char: s.textContent,
        opacity: parseFloat(cs.opacity).toFixed(2),
        filter: cs.filter,
        visible: parseFloat(cs.opacity) > 0.5 && cs.filter === 'blur(0px)'
      };
    });
    
    const mono = intro.querySelector('div.flex.items-center');
    const monoCs = mono ? getComputedStyle(mono) : null;
    
    resolve(JSON.stringify({
      exists: true,
      letters: letterStates,
      allNameVisible: letterStates.every(l => l.visible),
      monoFilter: monoCs ? monoCs.filter : null,
      monoOpacity: monoCs ? parseFloat(monoCs.opacity).toFixed(2) : null,
      at: '8.5s'
    }, null, 2));
  }, 8500);
});
