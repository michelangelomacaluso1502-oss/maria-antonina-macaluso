(() => {
  // Cattura errori console
  const errors = window.__consoleErrors = window.__consoleErrors || [];
  const origError = console.error;
  console.error = function(...args) {
    errors.push(args.map(a => String(a)).join(' '));
    origError.apply(console, args);
  };
  
  // Aspetta un attimo per catturare gli errori di idratazione
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.stringify({
        errors: errors.slice(0, 5),
        errorCount: errors.length
      }));
    }, 1500);
  });
})();
