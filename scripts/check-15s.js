new Promise((resolve) => {
  setTimeout(() => {
    const intro = document.getElementById('intro-animation');
    if (!intro) {
      resolve(JSON.stringify({ exists: false, at: '1.5s' }));
      return;
    }
    const h1 = intro.querySelector('h1');
    const role = intro.querySelector('p');
    const svgs = intro.querySelectorAll('svg');
    resolve(JSON.stringify({
      exists: true,
      h1Text: h1?.textContent?.replace(/\s+/g, ' ').trim(),
      h1Color: h1 ? getComputedStyle(h1).color : null,
      roleText: role?.textContent?.trim(),
      svgCount: svgs.length,
      opacity: getComputedStyle(intro).opacity,
      at: '1.5s'
    }));
  }, 1500);
});
