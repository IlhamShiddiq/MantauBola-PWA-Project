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
        
        !function(e){var i={};function n(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,i,r){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)n.d(r,o,function(i){return e[i]}.bind(null,o));return r},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=0)}([function(e,i){importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");var n=workbox.routing.registerRoute,r=workbox.strategies,o=r.CacheFirst,t=r.StaleWhileRevalidate,a=workbox.expiration.ExpirationPlugin;(0,workbox.precaching.precacheAndRoute)([{url:"/bundle.js",revision:"v1"},{url:"/detail-team.html",revision:"v1"},{url:"/fav-icon.jpg",revision:"v1"},{url:"/index.html",revision:"v1"},{url:"/manifest.json",revision:"v1"},{url:"/nav.html",revision:"v1"},{url:"/images/icons/icon-72x72.png",revision:"v1"},{url:"/images/icons/icon-96x96.png",revision:"v1"},{url:"/images/icons/icon-128x128.png",revision:"v1"},{url:"/images/icons/icon-144x144.png",revision:"v1"},{url:"/images/icons/icon-152x152.png",revision:"v1"},{url:"/images/icons/icon-192x192.png",revision:"v1"},{url:"/images/icons/icon-384x384.png",revision:"v1"},{url:"/images/icons/icon-512x512.png",revision:"v1"},{url:"/pages/champions-l.html",revision:"v1"},{url:"/pages/favorit.html",revision:"v1"},{url:"/pages/home.html",revision:"v1"},{url:"/pages/ligue-1.html",revision:"v1"},{url:"/pages/primera-division.html",revision:"v1"},{url:"/pages/seriea.html",revision:"v1"},{url:"/src/image/nobar.png",revision:"v1"},{url:"/src/image/nobar-2.png",revision:"v1"},{url:"/src/image/star.png",revision:"v1"}],{ignoreURLParametersMatching:[/.*/]}),n((function(e){return"image"===e.request.destination}),new o({cacheName:"image-cache",plugins:[new a({maxEntries:20,maxAgeSeconds:604800})]})),n((function(e){return e.url.pathname.startsWith("/v2/")}),new t({cacheName:"mantau-bola",plugins:[new a({maxEntries:30,maxAgeSeconds:604800})]})),self.addEventListener("push",(function(e){var i={body:e.data?e.data.text():"Push message no payload",icon:"img/notification.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Push Notification",i))}))}]);