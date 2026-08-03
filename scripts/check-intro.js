(() => {
  const ov = document.getElementById('intro-overlay');
  const tagline = document.querySelector('.intro-tagline');
  const name = document.querySelector('.intro-name-big');
  const nameWhite = document.querySelector('.intro-name-white');
  const nameGold = document.querySelector('.intro-name-gold');
  const bar = document.querySelector('.intro-progress-bar');
  const icon = document.querySelector('.intro-icon');
  const profession = document.querySelector('.intro-profession');
  
  return JSON.stringify({
    overlayExists: !!ov,
    overlayClasses: ov ? ov.className : null,
    overlayOpacity: ov ? getComputedStyle(ov).opacity : null,
    overlayVisibility: ov ? getComputedStyle(ov).visibility : null,
    taglineText: tagline ? tagline.textContent.trim() : null,
    taglineOpacity: tagline ? getComputedStyle(tagline).opacity : null,
    nameText: name ? name.textContent.replace(/\s+/g, ' ').trim() : null,
    nameOpacity: name ? getComputedStyle(name).opacity : null,
    nameFilter: name ? getComputedStyle(name).filter : null,
    nameWhiteText: nameWhite ? nameWhite.textContent.trim() : null,
    nameGoldText: nameGold ? nameGold.textContent.trim() : null,
    professionText: profession ? profession.textContent.trim() : null,
    professionOpacity: profession ? getComputedStyle(profession).opacity : null,
    iconOpacity: icon ? getComputedStyle(icon).opacity : null,
    barTransform: bar ? getComputedStyle(bar).transform : null,
    bodyOverflow: getComputedStyle(document.body).overflow,
    htmlClasses: document.documentElement.className,
  }, null, 2);
})();
