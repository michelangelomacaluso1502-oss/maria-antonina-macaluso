// Check at exactly 4.8s — overlay should be removed (cleanup runs at 4.7s)
new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    resolve(JSON.stringify({
      exists: !!ov,
      at: '4.8s'
    }));
  }, 4800);
});
