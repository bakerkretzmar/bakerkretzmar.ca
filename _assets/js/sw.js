'use strict';

var CACHE_VERSION = 5;
var CURRENT_CACHES = {
  'prefetch': 'prefetch-cache-v' + CACHE_VERSION,
  'read-through': 'read-through-cache-v' + CACHE_VERSION
};

var cachableResources = [
  '/',
  '/index.html',
  '/contact/',
  '/contact/index.html',
  '/work/',
  '/work/index.html',
  '/manifest.json',
  '/DINPro-Bold.ttf',
  '/DINPro-Bold.woff',
  '/DINPro-Bold.woff2',
  '/icon-128x128.png',
  '/apple-touch-icon.png',
  '/chrome-touch-icon.png',
  '/ms-touch-icon.png'
];


self.addEventListener('install', function(event) {
  console.log('Installing worker and caching resources...');
  event.waitUntil(
    caches.open(CURRENT_CACHES['prefetch'])
      .then(function(cache) {
        return cache.addAll(cachableResources);
      })
      .then(function() {
        console.log('  Install completed and resources cached!');
      })
      .catch(function(err) {
        console.error('  Install and caching failed: ', error);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for ', event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('  Found response in cache:', response);
        return response;
      }

      console.log('  No response for %s found in cache. About to fetch from network...', event.request.url);

      return fetch(event.request, { mode: 'no-cors' }).then(function(response) {
        console.log('  Response for %s from network is: %O', event.request.url, response);
        caches.open(CURRENT_CACHES['read-through']).then(function(cache) {
          if (response.status < 400 && response.type == 'basic') {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      }).catch(function(error) {
        console.error('  Read-through fetch and caching failed:', error);
        throw error;
      });
    })
  );
});

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
