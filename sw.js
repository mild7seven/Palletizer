const CACHE_NAME = 'fg-tracker-v3';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'sw.js',
  // Menyimpan library PDF agar bisa export laporan saat Offline
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js'
];

// Pemasangan (Install) - Menyimpan semua aset ke memori lokal
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Menyimpan aset Finish Goods Tracker ke cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Memaksa SW baru untuk langsung aktif
});

// Aktivasi (Activate) - Membersihkan cache dari versi sebelumnya (v1, v2)
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
  self.clients.claim();
});

// Pengambilan (Fetch) - Mengutamakan Cache agar responsif di area Blank Spot
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Simpan cache baru jika ada request yang belum terdaftar (opsional)
        return caches.open(CACHE_NAME).then((cache) => {
          // Jangan cache jika request bukan metode GET (seperti ekstensi chrome)
          if(event.request.method === 'GET' && event.request.url.startsWith('http')){
            cache.put(event.request, fetchResponse.clone());
          }
          return fetchResponse;
        });
      });
    }).catch(() => {
      // Jika offline dan aset tidak ada di cache, biarkan PWA menangani
      console.log('Aplikasi sedang berjalan offline.');
    })
  );
});
