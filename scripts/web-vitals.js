(() => {
  const nav = performance.getEntriesByType('navigation')[0] || {};
  const paints = performance.getEntriesByType('paint');
  const fp = paints.find(p => p.name === 'first-paint');
  const fcp = paints.find(p => p.name === 'first-contentful-paint');
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  const lcp = lcpEntries[lcpEntries.length - 1];

  // CLS calculation
  let cls = 0;
  const layoutShifts = performance.getEntriesByType('layout-shift');
  layoutShifts.forEach(e => { cls += e.value; });

  return JSON.stringify({
    navigation: {
      dns: nav.dnsLookupEnd - nav.dnsLookupStart,
      tcp: nav.connectEnd - nav.connectStart,
      ssl: nav.connectEnd - nav.secureConnectionStart,
      ttfb: nav.responseStart - nav.requestStart,
      download: nav.responseEnd - nav.responseStart,
      domInteractive: nav.domInteractive - nav.navigationStart,
      domComplete: nav.domComplete - nav.navigationStart,
      loadEvent: nav.loadEventEnd - nav.navigationStart,
      transferSize: nav.transferSize,
      encodedBodySize: nav.encodedBodySize,
      decodedBodySize: nav.decodedBodySize,
    },
    paint: {
      firstPaint: fp ? fp.startTime : null,
      firstContentfulPaint: fcp ? fcp.startTime : null,
    },
    largestContentfulPaint: lcp ? {
      startTime: lcp.startTime,
      renderTime: lcp.renderTime,
      size: lcp.size,
      element: lcp.element?.tagName,
    } : null,
    cumulativeLayoutShift: cls,
    resourceCount: performance.getEntriesByType('resource').length,
    totalTransferSize: performance.getEntriesByType('resource').reduce((s, r) => s + (r.transferSize || 0), 0),
  }, null, 2);
})();
