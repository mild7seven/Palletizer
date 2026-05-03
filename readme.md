# Finish Goods Tracker (PWA) 🏭📦

Sistem informasi berbasis web (Progressive Web App) yang dirancang secara khusus untuk mendigitalkan aktivitas pencatatan *handover* (Work In Progress) produk Finish Goods antar shift di lantai pabrik. Mengusung desain *Industrial Modern*, aplikasi ini mengedepankan fungsionalitas, visibilitas, dan kemudahan bagi operator produksi.

## ✨ Fitur Unggulan

- **Modul Master Data (Mini-MES):** Konfigurasi nama lini mesin, kode SKU, nama produk, dan standar kapasitas pallet secara mandiri. Data dapat diedit atau dihapus secara dinamis langsung dari antarmuka.
- **Auto-Fill & Live Rekap:** Saat SKU dipilih, kapasitas dus/pallet akan otomatis terisi. Hasil kalkulasi (*Total Cases, Full Pallet, Sisa Handover*) ditampilkan secara **Real-Time** (*Live*) tanpa perlu menunggu tombol hitung ditekan.
- **Traceability System:** Dilengkapi dengan *dropdown* Batch Shift Code (M = Morning, A = Afternoon, N = Night) untuk setiap baris produk demi keterlacakan.
- **Offline-First & Auto-Save:** Memanfaatkan `Service Worker` dan `localStorage`, sistem ini kebal terhadap sinyal buruk (Blank Spot) di area mesin. Data operator yang belum dikirim akan aman tersimpan meskipun *browser* tertutup.
- **Multi-Format Export (Tanpa Server):** Ekspor laporan akhir shift didukung dalam tiga format universal:
  - 📄 **TXT:** Laporan rekap cepat.
  - 📊 **CSV:** Kompatibel penuh dengan Microsoft Excel untuk pengolahan tim PPIC/Data.
  - 📑 **PDF:** Laporan formal (menggunakan jsPDF) untuk diserahkan ke *Supervisor* atau diarsipkan.

## 📂 Struktur Aplikasi

Aplikasi ini menggunakan teknologi murni *Client-Side* (Vanilla JavaScript) sehingga sangat ringan dan tidak memerlukan pemeliharaan *database* SQL atau sewa *server backend*.

```text
📁 finish-goods-tracker/
├── 📄 index.html      # Antarmuka (UI), Sistem Logika, Mode Edit, Master Data
├── 📄 manifest.json   # Konfigurasi PWA (Tema Industrial Steel Blue & Icons)
├── 📄 sw.js           # Service Worker (Cache management & Offline PDF renderer)
└── 📄 README.md       # Dokumentasi Proyek
