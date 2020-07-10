const CACHE_NAME = "firstpwa-v1";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/detail-team.html",
  "/manifest.json",
  "/pages/favorit.html",
  "/pages/home.html",
  "/pages/ligue-1.html",
  "/pages/primera-division.html",
  "/pages/seriea.html",
  "/src/image/nobar.png",
  "/src/script/api.js",
  "/src/script/font-awesome.js",
  "/src/script/materialize.min.js",
  "/src/script/nav.js",
  "/src/script/swiper.js",
  "/src/style/font-awesome.css",
  "/src/style/materialize.min.css",
  "/src/style/responsive.css",
  "/src/style/style.css",
  "/src/style/swiper.css"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});