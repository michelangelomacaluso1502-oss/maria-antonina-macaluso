(() => {
  const imgs = document.querySelectorAll('img');
  const samples = [];
  for (let i = 0; i < Math.min(imgs.length, 5); i++) {
    const img = imgs[i];
    samples.push({
      src: img.src?.substring(0, 100),
      naturalW: img.naturalWidth,
      naturalH: img.naturalHeight,
      complete: img.complete,
      width: img.width,
      height: img.height,
    });
  }
  return JSON.stringify(samples, null, 2);
})();
