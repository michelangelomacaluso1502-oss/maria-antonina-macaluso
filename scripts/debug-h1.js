new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '3s' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const cs = h1 ? getComputedStyle(h1) : null;
    const h1Spans = h1 ? Array.from(h1.querySelectorAll('span > span')) : [];
    
    // Verifica visibility reale
    const rect = h1 ? h1.getBoundingClientRect() : null;
    
    // Conta quante lettere sono visibili
    let visibleCount = 0;
    let totalOpacity = 0;
    h1Spans.forEach(s => {
      const scs = getComputedStyle(s);
      const op = parseFloat(scs.opacity);
      totalOpacity += op;
      if (op > 0.5) visibleCount++;
    });
    
    resolve(JSON.stringify({
      exists: true,
      h1Exists: !!h1,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      h1Color: cs?.color,
      h1FontSize: cs?.fontSize,
      h1Opacity: cs?.opacity,
      h1Display: cs?.display,
      h1Visibility: cs?.visibility,
      h1Filter: cs?.filter,
      h1Rect: rect ? { x: rect.x, y: rect.y, w: rect.width, h: rect.height } : null,
      totalSpans: h1Spans.length,
      visibleSpans: visibleCount,
      avgOpacity: h1Spans.length > 0 ? (totalOpacity / h1Spans.length).toFixed(2) : 0,
      at: '3s'
    }, null, 2));
  }, 3000);
});
