new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.querySelector('[role="progressbar"]');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '2s', note: 'intro removed' }));
      return;
    }
    
    // Check tutti gli elementi
    const allMotionDivs = intro.querySelectorAll('[style*="opacity"]');
    const elements = [];
    
    // Verifica ogni elemento chiave
    const checks = [
      { name: 'letterbox-top', sel: '.bg-black.z-20' },
      { name: 'icon', sel: 'svg' },
      { name: 'tagline', sel: 'p.text-\\[\\#FF6B35\\]' },
      { name: 'h1-name', sel: 'h1 span.block' },
      { name: 'mono', sel: 'div.flex.items-center' },
    ];
    
    checks.forEach(c => {
      const el = intro.querySelector(c.sel);
      if (el) {
        const cs = getComputedStyle(el);
        elements.push({
          name: c.name,
          opacity: parseFloat(cs.opacity).toFixed(2),
          display: cs.display,
          visibility: cs.visibility,
          height: cs.height,
          filter: cs.filter,
          text: el.textContent?.substring(0, 30)?.trim()
        });
      } else {
        elements.push({ name: c.name, found: false });
      }
    });
    
    // Check font-display
    const h1 = intro.querySelector('h1');
    const h1Font = h1 ? getComputedStyle(h1).fontFamily : null;
    
    resolve(JSON.stringify({
      exists: true,
      elements,
      h1Font,
      at: '2s'
    }, null, 2));
  }, 2000);
});
