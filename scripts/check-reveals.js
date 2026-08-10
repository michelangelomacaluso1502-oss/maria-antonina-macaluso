new Promise(resolve => {
  setTimeout(() => {
    const reveals = document.querySelectorAll('[class*="reveal"]');
    let visible = 0;
    reveals.forEach(el => {
      if (el.classList.contains('is-visible')) visible++;
    });
    const imgs = document.querySelectorAll('img');
    let broken = 0;
    imgs.forEach(img => {
      if (img.naturalWidth === 0 && img.src) broken++;
    });
    resolve(JSON.stringify({
      totalReveals: reveals.length,
      visibleReveals: visible,
      totalImgs: imgs.length,
      brokenImgs: broken,
      visiblePercent: reveals.length > 0 ? Math.round((visible / reveals.length) * 100) : 0,
    }));
  }, 2000);
});
