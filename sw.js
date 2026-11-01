const CACHE_NAME = 'street-fit-v1';
const ASSETS = [
  '/SWAPP/',
  '/SWAPP/index.html',
  '/SWAPP/manifest.json',
  // Include your specific css or js files here
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event (Mandatory requirement for Chrome mobile installation)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
