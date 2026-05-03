const CACHE_NAME = 'factory-tracker-v2';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'sw.js'
];

// Pemasangan (Install)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Menyimpan aset ke cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Aktivasi (Activate) - Membersihkan cache lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SW: Menghapus cache lama:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Pengambilan (Fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Jika ada di cache, gunakan cache. Jika tidak, ambil dari jaringan.
      return response || fetch(event.request);
    })
  );
});
