(() => {
  // Verifica che il body possa scorrere
  const body = document.body;
  const html = document.documentElement;
  const bodyStyle = getComputedStyle(body);
  const htmlStyle = getComputedStyle(html);
  
  // Verifica overflow
  const bodyOverflowX = bodyStyle.overflowX;
  const bodyOverflowY = bodyStyle.overflowY;
  const htmlOverflow = htmlStyle.overflow;
  
  // Verifica touch-action
  const bodyTouchAction = bodyStyle.touchAction;
  
  // Verifica intro overlay
  const intro = document.querySelector('[role="progressbar"]');
  const introStyle = intro ? getComputedStyle(intro) : null;
  const introPointerEvents = introStyle?.pointerEvents;
  
  // Verifica scrollHeight vs clientHeight (se scrollHeight > clientHeight, la pagina è scorrevile)
  const canScroll = body.scrollHeight > body.clientHeight;
  
  // Prova a scrollare
  const scrollBefore = window.scrollY;
  window.scrollTo(0, 100);
  const scrollAfter = window.scrollY;
  window.scrollTo(0, scrollBefore);
  
  return JSON.stringify({
    bodyOverflowX,
    bodyOverflowY,
    htmlOverflow,
    bodyTouchAction,
    introExists: !!intro,
    introPointerEvents,
    canScrollVertically: canScroll,
    scrollTestWorked: scrollAfter === 100,
    bodyScrollHeight: body.scrollHeight,
    bodyClientHeight: body.clientHeight,
  }, null, 2);
})();
