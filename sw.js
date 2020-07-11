const CACHE_NAME = "mantaubola-v2";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/detail-team.html",
  "/manifest.json",
  "/images/icons/icon-72x72.png",
  "/images/icons/icon-96x96.png",
  "/images/icons/icon-128x128.png",
  "/images/icons/icon-144x144.png",
  "/images/icons/icon-152x152.png",
  "/images/icons/icon-192x192.png",
  "/images/icons/icon-384x384.png",
  "/images/icons/icon-512x512.png",
  "/pages/favorit.html",
  "/pages/home.html",
  "/pages/ligue-1.html",
  "/pages/primera-division.html",
  "/pages/seriea.html",
  "/pages/champions-l.html",
  "/src/image/nobar.png",
  "/src/script/api.js",
  "/src/script/font-awesome.js",
  "/src/script/materialize.min.js",
  "/src/script/nav.js",
  "/src/script/jquery.js",
  "/src/script/reg-sw.js",
  "/src/script/swiper-opt.js",
  "/src/script/swiper.js",
  "/src/style/font-awesome.css",
  "/src/style/materialize.min.css",
  "/src/style/responsive.css",
  "/src/style/style.css",
  "/src/style/swiper-opt.css",
  "/src/style/swiper.css"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  var base_url = "https://api.football-data.org/v2/";
  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then(function(response) {
          return response || fetch (event.request);
      })
    )
  }
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