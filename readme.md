# Factory Pallet Tracker (PWA) 🏭📦

Aplikasi berbasis web (Progressive Web App / PWA) yang dirancang khusus untuk area lantai produksi (Shop Floor). Aplikasi ini mendigitalkan proses pencatatan *handover* (serah terima) sisa produk yang belum mencapai 1 pallet penuh antar shift produksi (Work In Progress/WIP).

Dengan sistem *Offline-First* dan *Auto-Save*, aplikasi ini sangat tangguh digunakan di area pabrik yang minim koneksi internet (blank spot) dan mencegah hilangnya data akibat *human error*.

## ✨ Fitur Utama

- **Master Data Dinamis:** Penambahan nama mesin, kode produk, dan kapasitas dus/pallet dapat dikonfigurasi langsung dari antarmuka aplikasi tanpa perlu mengubah kode sumber.
- **Otomatisasi Kalkulasi:** Menghitung total *cases* (dus), membaginya menjadi jumlah *Full Pallet*, dan menampilkan sisa *cases* yang akan dilanjutkan oleh shift berikutnya.
- **Multi-Mesin & Multi-Produk:** Mendukung pelacakan beberapa lini mesin yang berjalan secara paralel dengan varian produk yang berbeda-beda. Termasuk penandaan kode *batch* waktu (M/A/N).
- **Auto-Save (Local Storage):** Setiap ketikan operator akan langsung disimpan secara lokal. Data tidak akan hilang meskipun tab *browser* tertutup secara tidak sengaja atau halaman ter-*refresh*.
- **Multi-Format Export:** Log hasil rekapitulasi shift dapat diunduh tanpa koneksi internet ke dalam format:
  - `.txt` (Log teks sederhana)
  - `.csv` (Untuk olah data di Microsoft Excel)
  - `.pdf` (Laporan formal dengan tabel otomatis)
- **PWA Ready:** Dapat di-*install* langsung ke *homescreen* Android, iOS, maupun Windows (via Chrome/Edge), terasa seperti aplikasi *native*.

## 📂 Struktur File

Proyek ini menggunakan arsitektur Vanilla JavaScript tanpa *framework* berat (Zero Dependencies), memastikan aplikasi berjalan sangat ringan di perangkat operasional standar.

```text
📁 factory-pallet-tracker/
├── 📄 index.html      # Antarmuka utama (UI), logika kalkulasi, & manajemen LocalStorage
├── 📄 manifest.json   # Konfigurasi identitas PWA (Nama, Tema Warna, Ikon)
├── 📄 sw.js           # Service Worker untuk *caching* aset (Offline Support)
└── 📄 README.md       # Dokumentasi proyek ini
