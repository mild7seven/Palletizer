# Finish Goods Tracker (PWA) 🏭📦

Sistem informasi berbasis web (Progressive Web App) yang dirancang secara khusus untuk mendigitalkan aktivitas pencatatan *handover* (Work In Progress) produk Finish Goods antar shift di lantai pabrik. Mengusung desain *Industrial Modern* dengan struktur Data Tabel berkecepatan tinggi.

## ✨ Fitur Unggulan

- **Modul Master Data (Mini-MES):** Konfigurasi nama lini mesin, kode SKU, nama produk, dan standar kapasitas pallet secara mandiri. Data dapat ditambah, diedit, dan dihapus tanpa koding ulang.
- **State-Driven Data Table:** Tampilan laporan produksi dalam wujud Tabel Dinamis per mesin. Dilengkapi fitur **RUBAH (Edit)** dan **HAPUS (Delete)** langsung di setiap baris tanpa merusak integritas sel lainnya.
- **Auto-Fill & Validasi Pintar:** Saat SKU dipilih, kapasitas dus/pallet terisi otomatis. Sistem menolak ekspor *file* jika masih ada baris tabel dalam status belum tersimpan (kuning) untuk mencegah *data loss*.
- **Traceability System:** Pengelompokan *Batch Shift Code* (M = Pagi, A = Siang, N = Malam) untuk setiap baris SKU.
- **Offline-First & Auto-Save:** Kebal terhadap sinyal buruk (Blank Spot) berkat `Service Worker v4`. Data operator disimpan dalam bentuk *state-array* ke `localStorage` secara seketika.
- **Multi-Format Export (Tanpa Server):** Ekspor laporan akhir shift didukung dalam tiga format universal:
  - 📄 **TXT:** Laporan rekap cepat.
  - 📊 **CSV:** Kompatibel penuh dengan Microsoft Excel untuk pengolahan tim PPIC/Data.
  - 📑 **PDF:** Laporan formal bergaris menggunakan *jsPDF*.

## 📂 Struktur Aplikasi

Aplikasi ini menggunakan teknologi murni *Client-Side* (Vanilla JavaScript) sehingga sangat ringan dan tidak memerlukan pemeliharaan *database* SQL atau sewa *server backend*.

```text
📁 finish-goods-tracker/
├── 📄 index.html      # UI Utama, State Management, Tabel Dinamis & Konfigurasi
├── 📄 manifest.json   # Konfigurasi PWA (Tema Industrial Steel Blue & Icons)
├── 📄 sw.js           # Service Worker v4 (Cache management & Offline PDF renderer)
└── 📄 README.md       # Dokumentasi Proyek
