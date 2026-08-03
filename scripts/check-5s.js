new Promise((resolve) => {
  setTimeout(() => {
    const ov = document.getElementById('intro-overlay');
    resolve(JSON.stringify({
      exists: !!ov,
      at: '5s (after cleanup should run)'
    }));
  }, 5000);
});
