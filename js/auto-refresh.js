/**
 * Auto-Refresh Script — Maria Antonina Macaluso
 * Rileva nuove versioni del sito e fa hard refresh automatico.
 * - Controlla /version.json ogni 60 secondi
 * - Se la versione è diversa da quella in localStorage, ricarica la pagina
 * - Bypassa cache con timestamp query string
 */
(function() {
  "use strict";
  
  var VERSION_KEY = "mam-site-version";
  var CHECK_INTERVAL = 60000; // 60 secondi
  var currentVersion = "";
  
  // Leggi versione salvata
  try {
    currentVersion = localStorage.getItem(VERSION_KEY) || "";
  } catch (e) {
    currentVersion = "";
  }
  
  function checkVersion() {
    var timestamp = Date.now();
    var url = "/version.json?t=" + timestamp; // cache-buster
    
    fetch(url, { cache: "no-store" })
      .then(function(response) { 
        if (!response.ok) return null;
        return response.json();
      })
      .then(function(data) {
        if (!data || !data.version) return;
        
        var newVersion = data.version;
        
        if (currentVersion && currentVersion !== newVersion) {
          // Versione diversa → hard refresh
          console.log("[Auto-Refresh] Nuova versione rilevata:", newVersion, "(era:", currentVersion + ")");
          try {
            localStorage.setItem(VERSION_KEY, newVersion);
          } catch (e) {}
          // Hard refresh con cache-buster
          window.location.reload(true);
        } else if (!currentVersion) {
          // Prima visita → salva versione
          try {
            localStorage.setItem(VERSION_KEY, newVersion);
          } catch (e) {}
          currentVersion = newVersion;
        }
      })
      .catch(function(e) {
        // Silently ignore errors
      });
  }
  
  // Check iniziale dopo 2 secondi
  setTimeout(checkVersion, 2000);
  
  // Check periodico ogni 60 secondi
  setInterval(checkVersion, CHECK_INTERVAL);
  
  // Check quando la tab diventa visibile
  document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
      checkVersion();
    }
  });
})();
