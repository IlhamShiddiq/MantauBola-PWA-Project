var serviceWorkerOption = {
  "assets": [
    "/bundle.js",
    "/src/image/nobar-2.png",
    "/src/image/nobar.png",
    "/src/image/star.png",
    "/pages/champions-l.html",
    "/pages/favorit.html",
    "/pages/home.html",
    "/pages/ligue-1.html",
    "/pages/primera-division.html",
    "/pages/seriea.html",
    "/nav.html",
    "/fav-icon.jpg",
    "/manifest.json",
    "/images/icons/icon-128x128.png",
    "/images/icons/icon-144x144.png",
    "/images/icons/icon-152x152.png",
    "/images/icons/icon-192x192.png",
    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",
    "/images/icons/icon-72x72.png",
    "/images/icons/icon-96x96.png",
    "/index.html"
  ]
};
        
        !function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");var n=workbox.routing.registerRoute,r=workbox.strategies,o=r.CacheFirst,i=r.StaleWhileRevalidate,a=workbox.expiration.ExpirationPlugin;n((function(e){return"image"===e.request.destination}),new o({cacheName:"image-cache",plugins:[new a({maxEntries:20,maxAgeSeconds:604800})]})),n((function(e){return e.url.pathname.startsWith("/v2/")}),new i({cacheName:"mantau-bola",plugins:[new a({maxEntries:30,maxAgeSeconds:604800})]})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(e!=CACHE_NAME)return console.log("ServiceWorker: cache "+e+" dihapus"),caches.delete(e)})))})))})),self.addEventListener("push",(function(e){var t={body:e.data?e.data.text():"Push message no payload",icon:"img/notification.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push Notification",t))}))}]);