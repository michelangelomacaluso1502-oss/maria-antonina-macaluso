(() => {
  const intro = document.querySelector('[role="progressbar"]');
  const allElements = document.querySelectorAll('*');
  const bodyChildren = Array.from(document.body.children).map(c => 
    c.tagName + (c.id ? '#' + c.id : '') + (c.className && typeof c.className === 'string' ? '.' + c.className.split(' ')[0] : '')
  );
  
  // Check if framer-motion loaded
  const hasFramer = !!document.querySelector('[style*="transform"]');
  
  // Check sessionStorage
  let seen = null;
  try { seen = sessionStorage.getItem('intro-seen'); } catch(e) {}
  
  return JSON.stringify({
    introExists: !!intro,
    introHTML: intro ? intro.innerHTML.substring(0, 200) : null,
    introOpacity: intro ? getComputedStyle(intro).opacity : null,
    introDisplay: intro ? getComputedStyle(intro).display : null,
    introZIndex: intro ? getComputedStyle(intro).zIndex : null,
    sessionStorageSeen: seen,
    bodyChildren: bodyChildren.slice(0, 15),
    hasFramerMotion: hasFramer,
    readyState: document.readyState,
    totalElements: allElements.length,
  }, null, 2);
})();
