# Finish Goods Tracker Enterprise v7.0 🚀

Solusi industri terintegrasi untuk pelacakan produksi Finish Goods.

## 🌟 Fitur Unggulan v7.0
1. **Barcode Scanning:** Input SKU instan menggunakan kamera perangkat.
2. **Cloud Sync:** Sinkronisasi otomatis ke Google Sheets via Apps Script Webhook.
3. **Analytics Dashboard:** Tren grafik produksi 7 hari terakhir.
4. **Copy Last Shift:** Efisiensi input dengan menyalin konfigurasi lini dari shift sebelumnya.
5. **Target Monitoring:** Indikator progress bar visual (Aktual vs Target).

## 🔧 Integrasi Cloud (Google Sheets)
1. Buat Google Sheets baru.
2. Buka `Extensions` -> `Apps Script`.
3. Gunakan fungsi `doPost(e)` untuk menerima JSON dan menulis ke baris sheet.
4. Deploy sebagai Web App (Set access to 'Anyone').
5. Masukkan URL hasil deploy ke Menu Setup di aplikasi ini.
