importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {CacheFirst, StaleWhileRevalidate} = workbox.strategies;
const {ExpirationPlugin} = workbox.expiration;
const {precacheAndRoute} = workbox.precaching;

// Chaching more files
precacheAndRoute([
  {url: '/bundle.js', revision: 'v1' },
  {url: '/detail-team.html', revision: 'v1' },
  {url: '/fav-icon.jpg', revision: 'v1' },
  {url: '/index.html', revision: 'v1' },
  {url: '/manifest.json', revision: 'v1' },
  {url: '/nav.html', revision: 'v1' },
  {url: '/images/icons/icon-72x72.png', revision: 'v1' },
  {url: '/images/icons/icon-96x96.png', revision: 'v1' },
  {url: '/images/icons/icon-128x128.png', revision: 'v1' },
  {url: '/images/icons/icon-144x144.png', revision: 'v1' },
  {url: '/images/icons/icon-152x152.png', revision: 'v1' },
  {url: '/images/icons/icon-192x192.png', revision: 'v1' },
  {url: '/images/icons/icon-384x384.png', revision: 'v1' },
  {url: '/images/icons/icon-512x512.png', revision: 'v1' },
  {url: '/pages/champions-l.html', revision: 'v1' },
  {url: '/pages/favorit.html', revision: 'v1' },
  {url: '/pages/home.html', revision: 'v1' },
  {url: '/pages/ligue-1.html', revision: 'v1' },
  {url: '/pages/primera-division.html', revision: 'v1' },
  {url: '/pages/seriea.html', revision: 'v1' },
  {url: '/src/image/nobar.png', revision: 'v1' },
  {url: '/src/image/nobar-2.png', revision: 'v1' },
  {url: '/src/image/star.png', revision: 'v1' },
], {
  // Ignore all URL parameters.
  ignoreURLParametersMatching: [/.*/]
});

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
