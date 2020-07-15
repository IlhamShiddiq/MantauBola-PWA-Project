importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {CacheFirst, StaleWhileRevalidate} = workbox.strategies;
const {ExpirationPlugin} = workbox.expiration;


// if(workbox) {
//   console.log("jalan")
// } else {
//   console.log("nggak");
// }
 
// Image cache
registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

// API data cache
registerRoute(
  ({url}) => url.pathname.startsWith('/v2/'),
  new StaleWhileRevalidate({
    cacheName: 'mantau-bola',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function(cache) {
//       console.log(urlsToCache);
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", event => {
//   const base_url = "https://api.football-data.org/v2/";
//   if (event.request.url.indexOf(base_url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_NAME).then(cache => {
//         return fetch(event.request).then(response => {
//           cache.put(event.request.url, response.clone());
//           return response;
//         })
//       })
//     );
//   } else {
//     event.respondWith(
//       caches.match(event.request, { ignoreSearch: true }).then(response => {
//           return response || fetch (event.request);
//       })
//     )
//   }
// });

self.addEventListener("activate", event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});

self.addEventListener('push', event => {
  let body = "";
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
