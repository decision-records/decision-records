# Tutorial: Tulis Catatan Keputusan Pertama Anda

Ini adalah panduan praktis untuk pemimpin yang belum pernah menulis catatan keputusan. Tutorial ini memakai skenario bisnis yang realistis, bukan contoh perangkat lunak, karena catatan keputusan adalah alat kepemimpinan yang umum. Di akhir, Anda akan telah menulis satu catatan nyata dan tahu cara memperkenalkan praktik ini ke tim Anda.

Perkiraan waktu: 20 menit untuk Bagian 1, ditambah latihan berkelanjutan untuk Bagian 2–4.

Daftar isi:

* [Bagian 1: Tulis satu catatan keputusan (20 menit)](#bagian-1-tulis-satu-catatan-keputusan-20-menit)
* [Bagian 2: Minta ditinjau dan diterima](#bagian-2-minta-ditinjau-dan-diterima)
* [Bagian 3: Mulai log keputusan](#bagian-3-mulai-log-keputusan)
* [Bagian 4: Tetapkan ritme peninjauan](#bagian-4-tetapkan-ritme-peninjauan)
* [Skenario kerja secara lengkap](#skenario-kerja-secara-lengkap)

## Bagian 1: Tulis satu catatan keputusan (20 menit)

Pilih keputusan nyata yang sedang Anda hadapi, idealnya yang sudah sedikit diperdebatkan agar Anda langsung merasakan nilainya. Jika tidak ada yang terlintas, gunakan contoh berjalan tutorial ini: **"Haruskah kita berganti penyedia penggajian?"**

### Langkah 1 — Judul (2 menit)

Tulis judul singkat, berbentuk kini, dan aktif. Bukan pertanyaan, melainkan pernyataan keputusan akhirnya:

> Ganti penyedia penggajian ke [Penyedia]

Jangan khawatir belum yakin; Anda bisa mengubah judul setelah keputusan jatuh.

### Langkah 2 — Status dan metadata (1 menit)

```markdown
* Status: permintaan komentar
* Tanggal: 2026-08-19
* Pengambil keputusan: CFO
* Pemilik: Kepala Operasi SDM
```

Menyebutkan pengambil keputusan sekarang, sebelum perdebatan, menghindari pertengkaran soal kewenangan setelah pendapat sudah mengeras.

### Langkah 3 — Konteks (5 menit)

Tulis situasinya seolah menjelaskan kepada karyawan baru tanpa latar belakang sama sekali:

> Penyedia penggajian kami saat ini telah melewatkan dua tenggat pengajuan dalam setahun
> terakhir, yang menyebabkan denda keterlambatan pembayaran di dua negara bagian. Kontrak
> kami diperbarui dalam 60 hari. Keuangan dan Operasi SDM sepakat bahwa penyedia saat ini
> adalah risiko, tetapi berbeda pendapat soal urgensinya dan apakah berganti kuartal ini
> sepadan dengan gangguan pada masa pendaftaran terbuka.

Perhatikan bahwa ini belum membela jawaban tertentu; hanya menyatakan kekuatan yang bermain.

### Langkah 4 — Opsi yang dipertimbangkan (5 menit)

Daftarkan alternatif nyata, termasuk "tidak melakukan apa-apa," dengan pertukaran yang jujur:

> * **Tetap dengan penyedia saat ini, negosiasi ulang SLA** — gangguan terkecil, tetapi tidak
>   memperbaiki akar masalah; penyedia tidak responsif terhadap eskalasi sebelumnya.
> * **Ganti ke Penyedia B** — rekam jejak kepatuhan lebih kuat, tetapi implementasi
>   tumpang tindih dengan pendaftaran terbuka, menambah risiko pada proses itu.
> * **Ganti ke Penyedia C** — harga lebih baik, tetapi tim dukungan jauh lebih kecil
>   dan dua panggilan referensi menyampaikan kekhawatiran soal kecepatan respons.

Jika Anda mendapati diri hanya menulis satu opsi nyata dan dua lawan semu, berhenti; itu tanda keputusan sudah dibuat secara informal dan catatan dipakai untuk membenarkannya, bukan mempertajamnya. Kembalilah dan minta pendapat kedua tentang alternatifnya lebih dulu.

### Langkah 5 — Keputusan (2 menit)

Setelah pengambil keputusan benar-benar memutuskan (ini mungkin tidak terjadi dalam sesi yang sama dengan langkah 1–4), tulis dalam kalimat aktif yang lugas:

> Kita akan berganti ke Penyedia B, dengan implementasi dimulai setelah pendaftaran terbuka ditutup.

### Langkah 6 — Konsekuensi (5 menit)

Nyatakan apa yang berubah, bukan pengulangan pertukaran yang sudah dibahas di atas:

> * Kontrak saat ini harus dihentikan dengan pemberitahuan 30 hari sebelum masa baru dimulai.
> * Operasi SDM akan menjalankan siklus uji penggajian paralel sebelum peralihan.
> * Linimasa pendaftaran terbuka terlindungi; peralihan diurutkan setelah pendaftaran ditutup.
> * Kita menerima jendela implementasi yang dipadatkan sebagai ganti berkurangnya risiko
>   kepatuhan; inilah pertukaran yang kita pilih secara eksplisit.

Itulah catatan keputusan ringan yang lengkap. Bandingkan dengan [templat](../templat/index.md#templat-ringan); Anda seharusnya dapat memetakan setiap bagian.

## Bagian 2: Minta ditinjau dan diterima

1. Bagikan draf dengan pemangku kepentingan yang sebenarnya (di sini: Keuangan, Operasi SDM, dan siapa pun yang terdampak peralihan) dengan permintaan jelas dan tenggat: *"Komentar paling lambat Jumat; setelah itu saya akan menandai ini diterima kecuali ada perubahan material."*
2. Catat informasi baru sebagai tambahan bertanggal, bukan menulis ulang bagian sebelumnya secara diam-diam; ini menjaga jejak alasan.
3. Setelah pengambil keputusan mengonfirmasi, ubah `Status` menjadi `diterima` dan catat tanggal akhirnya.

## Bagian 3: Mulai log keputusan

Satu catatan keputusan berguna sekali. **Log keputusan**, kumpulan setiap catatan tim Anda, berguna selamanya.

1. Buat lokasi bersama yang tahan lama: folder `decisions/` di drive bersama, ruang wiki, atau repositori berversi milik tim Anda. Pakai yang sudah dibuka tim setiap hari; alat terbaik adalah yang benar-benar akan digunakan orang.
2. Simpan setiap catatan baru dengan nama yang jelas dan dapat diurutkan, mis. `2026-08-19-switch-payroll-provider.md`.
3. Pertahankan halaman indeks yang mendaftar setiap catatan dengan judul, status, dan tanggalnya; lihat [contoh/index.md](../contoh/index.md) untuk contoh nyata pola ini.
4. Beberapa tim merasa kata "keputusan" (membuang "catatan" sama sekali) membuat praktik ini terasa asli, bukan dipinjam dari rekayasa; gunakan nama apa pun yang membuat tim Anda benar-benar menulisnya.

## Bagian 4: Tetapkan ritme peninjauan

Keputusan menua. Tetapkan ritme tata kelola yang ringan agar log tetap tepercaya dan tidak menjadi kuburan pilihan usang:

* **Pemilik per catatan** meninjau catatannya sendiri minimal setahun sekali, atau kapan pun situasi dasarnya berubah secara material.
* **Ketika keputusan dibalikkan atau diganti**, tulis catatan baru dan atur status yang lama menjadi `digantikan`, dengan tautan ke penggantinya. Jangan pernah menghapus diam-diam; riwayat tentang *mengapa kita berubah pikiran* sering lebih berharga daripada jawaban saat ini.
* **Setiap kuartal atau tahun**, telusuri seluruh log untuk catatan yang masih bertanda `permintaan komentar` atau `diusulkan` dan tidak pernah selesai, lalu tutup atau arsipkan secara eksplisit.

Lihat [daftar periksa](../daftar-periksa/index.md) untuk versi ringkas dan berulang dari keempat bagian di atas.

## Skenario kerja secara lengkap

Untuk contoh terisi dari keputusan serupa, lihat [contoh/index.md](../contoh/index.md), misalnya contoh [Membangun atau membeli untuk sebuah proyek](../contoh/membangun-atau-membeli/). Contoh itu memakai templat komprehensif, di mana Implikasi sesuai dengan bagian Konsekuensi di atas, dan merupakan pekerjaan yang sedang berjalan yang menunjukkan bagaimana tim membuat kemajuan pada keputusan, bukan catatan yang sudah selesai.
