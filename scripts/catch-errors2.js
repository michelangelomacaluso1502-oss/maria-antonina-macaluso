(() => {
  // Cattura tutti gli errori
  const errors = [];
  const origError = console.error;
  console.error = function(...args) {
    errors.push(args.map(a => {
      try { return typeof a === 'string' ? a : (a?.message || JSON.stringify(a)); }
      catch { return String(a); }
    }).join(' '));
    origError.apply(console, args);
  };
  
  // Aspetta e raccogli errori
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.stringify({
        errors: errors.slice(0, 10),
        errorCount: errors.length,
        hasReactError: errors.some(e => e.includes('React') || e.includes('hydrate') || e.includes('Minified')),
        bodyContent: document.body?.innerHTML?.substring(0, 200),
        readyState: document.readyState,
      }));
    }, 3000);
  });
})();
