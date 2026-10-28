# Memilih basis data utama

* Status: permintaan komentar
* Tanggal: 2026-03-22
* Pengambil keputusan: CTO (akan dikonfirmasi)
* Pemilik: Kepala Rekayasa Platform

Ringkasan: Pekerjaan yang sedang berjalan. Ini adalah titik awal bagi tim yang sedang memilih basis data utama untuk produk yang berkembang. Ini adalah satu-satunya contoh teknologi dalam kumpulan ini, dan menunjukkan bahwa keputusan arsitektur mengikuti pola yang sama dengan keputusan bisnis lain dalam koleksi ini. Ini menunjukkan bagaimana tim dapat membingkai pertanyaan, memperdebatkan opsi, dan mengumpulkan informasi. Tidak ada keputusan yang dicatat.

## Masalah

Basis data saat ini mendekati batas penskalaannya, dan tim rekayasa memperkirakan pertumbuhan akan mencapai batas itu tak lama lagi. Pengganti atau cara penskalaan yang berbeda harus dipilih sebelum peluncuran produk besar berikutnya.

Pertanyaan yang harus dijawab:

* Apa batas sebenarnya saat ini (baca, tulis, penyimpanan, latensi, operasi), dan seberapa cepat kita mendekatinya?
* Kualitas mana yang paling penting (konsistensi, ketersediaan, latensi, biaya, kemudahan operasi, kepatuhan), dan dalam urutan apa?
* Apakah kita menskalakan yang ada, pindah ke layanan terkelola, atau menjalankan sesuatu sendiri?
* Bagaimana kita bermigrasi, dan bagaimana kita keluar lagi jika harus?

## Asumsi

Setiap asumsi adalah sesuatu yang harus diuji.

* **Proyeksi pertumbuhan realistis.** Uji: bandingkan dengan pertumbuhan masa lalu dan rencana penjualan serta produk; pertimbangkan kasus tinggi dan rendah.
* **Basis data saat ini dapat diskalakan lebih jauh, dengan harga tertentu.** Uji: tanyakan kepada vendor dan tim berapa ruang yang tersisa dan berapa biayanya.
* **Beban kerja kita cocok dengan desain yang dapat diskalakan secara horizontal.** Uji: pelajari kueri dan transaksi; cari operasi yang membutuhkan konsistensi kuat lintas rekaman.
* **Tim dapat mengoperasikan opsi yang dipilih.** Uji: daftar keterampilan yang dibutuhkan dan siapa yang memilikinya.

## Kendala

* Perubahan harus siap sebelum peluncuran, dengan migrasi bertahap yang tidak mengganggunya.
* Biaya berulang harus sesuai dengan anggaran yang disetujui.
* Kewajiban perlindungan data dan keamanan berlaku pada setiap pilihan.
* Tidak diketahui, akan dikonfirmasi: volume data, persyaratan retensi, persyaratan regional, integrasi dengan sistem lain, dan komitmen vendor.

## Opsi yang dipertimbangkan

Untuk setiap opsi, perkirakan nilai, biaya, linimasa, dan kebutuhan kapabilitas, serta catat bukti apa yang akan mengubah pikiran tim.

* **Skalakan basis data saat ini secara vertikal** (mesin atau paket yang lebih besar).
  * Nilai: risiko migrasi terendah; tidak ada perubahan aplikasi.
  * Risiko: membeli waktu yang terbatas; biaya naik tajam.
* **Pindah ke layanan basis data terkelola yang dapat diskalakan secara horizontal.**
  * Nilai: menghilangkan penskalaan dan banyak pekerjaan operasional; dukungan vendor.
  * Pendorong biaya: biaya layanan berulang; migrasi; perubahan aplikasi; biaya egress dan keluar.
  * Risiko: ketergantungan pada fitur dan harga vendor.
* **Pindah ke basis data yang di-host sendiri dan dapat diskalakan secara horizontal.**
  * Nilai: berpotensi biaya berulang lebih rendah; kendali lebih besar.
  * Pendorong biaya: membangun keterampilan operasional; beban siaga; perangkat; pembaruan.
  * Risiko: beban operasional mungkin lebih tinggi dari yang diperkirakan.
* **Rancang ulang lapisan data** (misalnya caching, replika baca, partisi, atau pemisahan beban kerja) untuk memperpanjang basis data saat ini.
* **Gunakan basis data berbeda untuk beban kerja berbeda** (polyglot persistence), dengan biaya lebih banyak sistem untuk dijalankan.

## Argumen

Poin perdebatan yang harus diantisipasi tim:

* **Konsistensi vs. ketersediaan.** Teorema CAP menyatakan sistem terdistribusi yang terpartisi tidak dapat menjamin keduanya. Mana yang lebih penting untuk setiap bagian produk? Banyak beban kerja dapat menoleransi konsistensi yang tertunda; beberapa tidak.
* **Terkelola vs. di-host sendiri.** Biaya layanan lebih tinggi vs. risiko operasional lebih rendah. Bagaimana tim harus menilai waktu insinyur?
* **Penguncian.** Apa yang hilang dengan memakai fitur khusus vendor, dan apa yang diperoleh?
* **Standar.** Seberapa besar kita mengandalkan SQL (distandarkan dalam ISO/IEC 9075) vs. model kueri khusus vendor?

Bagaimana tim dapat mengevaluasi biaya dan pertukaran:

1. Uji dengan beban kerja Anda sendiri: buat benchmark realistis dan ukur setiap kandidat pada beban yang diharapkan dan puncak, termasuk skenario kegagalan.
2. Perkirakan total biaya kepemilikan untuk horizon yang dinyatakan dengan istilah organisasi sendiri: biaya layanan atau lisensi, hosting, migrasi, waktu rekayasa, siaga, pelatihan, dukungan, dan keluar. Tunjukkan rentang.
3. Beri skor kandidat pada matriks berbobot dari kualitas yang penting (model kualitas produk ISO/IEC 25010 menawarkan kosakata untuk ini), dan uji sensitivitas terhadap bobot.
4. Perkirakan berapa lama setiap opsi membeli waktu, dan berapa biayanya saat batas tercapai lagi.
5. Rencanakan keluar: bagaimana data dan kode berpindah dari setiap pilihan?

## Keputusan

**Belum diputuskan.** Ini adalah titik awal. Tim yang menggunakannya harus mengganti bagian ini dengan keputusannya sendiri.

Cara yang disarankan untuk mencapai keputusan:

* Konfirmasi siapa yang memutuskan dan siapa yang harus dikonsultasikan (keamanan, keuangan, produk).
* Sepakati kriteria dan bobotnya terlebih dahulu.
* Kumpulkan bukti di atas, termasuk hasil benchmark, dan catat apa yang ditemukan.
* Bagikan untuk komentar, lalu putuskan dan perbarui Status.

## Implikasi

Jika tim memutuskan bermigrasi, tim perlu:

* Merencanakan migrasi bertahap dengan periode berjalan paralel sebelum peralihan penuh.
* Mengonfirmasi anggaran untuk biaya berulang.
* Merencanakan keputusan lanjutan, misalnya tentang connection pooling dan replika baca.
* Mencatat jalur keluar yang diharapkan.

## Keputusan terkait

* [Membangun atau membeli untuk sebuah proyek](../membangun-atau-membeli/): penalaran umum bangun/beli.
* [Mengurangi risiko konsentrasi pada satu vendor](../ketergantungan-satu-vendor/): ketergantungan pada satu vendor.
* Keputusan yang belum dibuat: strategi caching dan replika; retensi data.

## Catatan terkait

* Butir terbuka: kumpulkan metrik produksi; tuliskan karakteristik beban kerja; buat daftar pendek kandidat untuk benchmark.
* Pelajari lebih lanjut:
  * Wikipedia: [Database](https://en.wikipedia.org/wiki/Database), [Relational database](https://en.wikipedia.org/wiki/Relational_database), [NoSQL](https://en.wikipedia.org/wiki/NoSQL), [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem), [ACID](https://en.wikipedia.org/wiki/ACID), [Eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency), [Scalability](https://en.wikipedia.org/wiki/Scalability), [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning)
  * ISO: [ISO/IEC 9075-1:2023, SQL framework](https://www.iso.org/standard/76583.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html), [ISO/IEC 27001:2022, Information security management](https://www.iso.org/standard/27001)
  * Video: [CAP Theorem Explained](https://www.youtube.com/watch?v=9gfeDlQrvhs) (DatabaseTown)
