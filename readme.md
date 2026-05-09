# Finish Goods Tracker

PWA (Progressive Web App) untuk pencatatan lini produksi pabrik dan pelacakan barang jadi. Aplikasi ini dilengkapi dengan **Smart Scanner** berbasis OCR (Optical Character Recognition) yang berjalan sepenuhnya offline di peramban web perangkat.

## Fitur Utama
- **Dashboard Produksi**: Pemantauan visual total palet menggunakan Chart.js.
- **Manajemen Lini**: Membuka blok lini mesin dan memasukkan data sisa vs barang baru.
- **Smart Scanner (Offline)**: Ekstraksi teks dari karton produksi (seperti SKU dan nama produk) otomatis ke form database, menggunakan Tesseract.js.
- **Dukungan Penuh Offline**: Menyimpan status produksi di IndexedDB dan caching aset dengan Service Worker.

## Instalasi dan Setup
1. Tempatkan `index.html`, `sw.js`, dan `manifest.json` di direktori yang sama pada server atau lokal Anda.
2. Sediakan ikon ( `icon-192x192.png` dan `icon-512x512.png` ) di direktori yang sama untuk mendukung instalasi PWA di smartphone Android/iOS.
3. Akses melalui HTTPS (atau `localhost`).
4. Buka aplikasi, lalu browser akan otomatis men-*download* berkas yang dibutuhkan melalui Service Worker. Pada kunjungan selanjutnya, aplikasi dapat dijalankan tanpa kuota internet.

## Konfigurasi Kustomisasi Regex (Smart Scanner)
Jika supplier kardus Anda berubah, Anda dapat memperbarui aturan Regex di dalam fungsi event listener `cameraInput` di `index.html`:
```javascript
// Ganti angka 8 digit jika format pabrik berbeda
const kodeMatch = text.match(/\b\d{8}\b/); 
