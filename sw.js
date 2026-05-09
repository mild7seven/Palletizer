const CACHE_NAME = 'fg-tracker-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  // Dependencies PWA Utama
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://unpkg.com/html5-qrcode',
  // Dependencies Tesseract untuk Smart Scanner
  'https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js',
  'https://unpkg.com/tesseract.js-core@4.0.1/tesseract-core.wasm.js',
  'https://tessdata.projectnaptha.com/4.0.0/eng.traineddata'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response, kalau tidak ada fetch dari network
        return response || fetch(event.request).then(
          (response) => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            let responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
