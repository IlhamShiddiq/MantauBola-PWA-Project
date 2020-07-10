// REGISTER SERVICE WORKER
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(function() {
          console.log("work!");
        })
        .catch(function() {
          console.log("not work!");
        });
    });
  } else {
    console.log("ServiceWorker belum didukung browser ini.");
  }