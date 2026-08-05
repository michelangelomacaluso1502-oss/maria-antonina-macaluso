new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.getElementById('intro-animation');
    resolve(JSON.stringify({
      exists: !!intro,
      at: '3.5s (should be removed)'
    }));
  }, 3500);
});
