# Memilih kerangka kerja teknologi informasi kita

* Status: permintaan komentar
* Tanggal: 2026-10-14
* Pengambil keputusan: Chief Information Officer dan Chief Technology Officer (akan dikonfirmasi)
* Pemilik: Kepala Operasi Teknologi

Ringkasan: Pekerjaan yang sedang berjalan. Ini adalah titik awal bagi kelompok teknologi yang diminta mengadopsi beberapa kerangka kerja (misalnya ITIL, Manifesto Agile, Extreme Programming, dan Six Sigma) dan perlu memutuskan mana yang digunakan, untuk pekerjaan apa, dan dalam urutan apa. Ini menunjukkan bagaimana tim dapat membingkai pertanyaan, memperdebatkan opsi, dan mengumpulkan informasi. Tidak ada keputusan yang dicatat.

## Masalah

Para pemimpin yang berbeda telah meminta kelompok teknologi mengadopsi ITIL untuk manajemen layanan, Manifesto Agile untuk pengiriman, Extreme Programming untuk rekayasa, dan Six Sigma untuk kualitas, kadang di tim yang sama dan periode yang sama. Setiap permintaan masuk akal sendiri-sendiri, tetapi bersama-sama mereka tumpang tindih, menggunakan kosakata berbeda, dan meminta orang berubah lebih cepat daripada yang dapat mereka serap.

Pertanyaan yang harus dijawab:

* Masalah apa yang diselesaikan setiap kerangka kerja, dan untuk jenis pekerjaan apa?
* Di mana mereka tumpang tindih atau bertentangan, dan mana yang harus diutamakan?
* Dalam urutan apa kita memperkenalkannya, dan berapa banyak perubahan yang dapat diserap tim sekaligus?
* Bagaimana kita tahu apakah kombinasinya membantu?

## Asumsi

Setiap asumsi adalah sesuatu yang harus diuji.

* **Setiap kerangka kerja bekerja paling baik pada jenis pekerjaan yang dirancang untuknya.** Uji: baca sumbernya dan bicaralah dengan orang yang telah menggunakan setiap kerangka kerja.
* **Tim dapat menyerap satu kerangka kerja baru dalam satu waktu**, bukan beberapa. Uji: tanyakan kepada tim perubahan apa yang sudah berjalan dan kapasitas apa yang mereka miliki.
* **Sponsor akan menerima menunggu** jika mereka tahu urutan dan alasannya. Uji: bicaralah dengan mereka sejak dini.
* **Batas tertulis antar kerangka kerja akan mengurangi konflik.** Uji: susun satu dan uji pada contoh nyata konflik.

## Kendala

* Kelompok memiliki kapasitas terbatas untuk perubahan dalam satu periode.
* Kerangka kerja menggunakan kosakata berbeda, sehingga istilah bersama seperti insiden, perubahan, rilis, dan cacat harus didefinisikan sekali.
* Adopsi penuh beberapa kerangka kerja bisa memakan waktu bertahun-tahun.
* Tidak diketahui, akan dikonfirmasi: praktik saat ini, ekspektasi kontrak atau audit, dan kerangka kerja apa pun yang sudah digunakan.

## Opsi yang dipertimbangkan

Untuk setiap opsi, perkirakan nilai, biaya, linimasa, dan kebutuhan kapabilitas, serta catat bukti apa yang akan mengubah pikiran tim.

* **Adopsi setiap kerangka kerja yang diminta di mana-mana.**
  * Nilai: setiap sponsor mendapat apa yang mereka minta.
  * Risiko: kelebihan beban; panduan yang bertentangan (misalnya persetujuan perubahan tetap vs. rilis berkelanjutan); mustahil membedakan perubahan mana yang menyebabkan hasil mana.
* **Adopsi satu kerangka kerja sebagai standar tunggal.**
  * Nilai: sederhana dijelaskan.
  * Risiko: tidak ada satu kerangka kerja pun yang mencakup operasi layanan, pengiriman produk, praktik rekayasa, dan kualitas dengan sama baiknya.
* **Tetapkan setiap kerangka kerja pada jenis pekerjaan yang cocok dengannya, dan terapkan bertahap satu per satu.** Misalnya praktik ITIL untuk menjalankan layanan aktif, nilai Manifesto Agile untuk bagaimana tim pengiriman merencanakan dan bekerja, praktik Extreme Programming untuk membangun perangkat lunak, dan Six Sigma untuk proses di mana cacat dapat diukur.
  * Nilai: lebih jelas bagi tim; lebih mudah dipelajari.
  * Pendorong biaya: dokumen batas tertulis; koordinasi; program yang panjang.
* **Adopsi payung tata kelola atau standar** seperti ISO/IEC 38500 (tata kelola TI) atau ISO/IEC 20000-1, dan biarkan tim memilih metode di dalamnya.
* **Jangan adopsi satu pun secara menyeluruh**; pilih praktik yang menjawab masalah terukur kelompok.

## Argumen

Poin perdebatan yang harus diantisipasi tim:

* **Kerangka kerja atau hasil?** Tujuannya adalah hasil yang lebih baik bagi pelanggan, bukan mengadopsi kerangka kerja. Hasil mana yang paling penting?
* **Konflik.** Ketika panduan bertentangan, siapa yang memutuskan?
* **Urutan.** Mana yang lebih dulu: yang tekanan sponsornya paling besar, atau yang mendukung yang lain?
* **Kosakata.** Kata bersama mengurangi gesekan, tetapi kesetaraan palsu menyembunyikan perbedaan nyata.

Bagaimana tim dapat mengevaluasi biaya dan pertukaran:

1. Daftar masalah dan hasil yang diinginkan terlebih dahulu, dengan ukuran (misalnya dari riset DORA tentang kinerja pengiriman perangkat lunak, ditambah ukuran layanan dan kualitas).
2. Untuk setiap kerangka kerja, perkirakan biaya dengan istilah organisasi sendiri: pelatihan, perubahan proses, perangkat, waktu hilang, dan dukungan berkelanjutan. Tunjukkan rentang.
3. Perkirakan kapasitas perubahan setiap tim, dan urutkan agar tidak ada tim yang memikul lebih dari yang dapat diserapnya.
4. Bandingkan opsi dalam skenario terbaik, paling mungkin, dan terburuk; pilih yang paling mudah disesuaikan jika bukti berubah.
5. Tinjau setelah dua kerangka kerja pertama dan tinjau ulang urutan jika bukti menyarankan yang lebih baik.

## Keputusan

**Belum diputuskan.** Ini adalah titik awal. Tim yang menggunakannya harus mengganti bagian ini dengan keputusannya sendiri.

Cara yang disarankan untuk mencapai keputusan:

* Konfirmasi siapa yang memutuskan dan siapa yang harus dikonsultasikan (termasuk para sponsor).
* Sepakati kriteria dan bobot terlebih dahulu.
* Kumpulkan bukti di atas dan catat apa yang ditemukan.
* Bagikan untuk komentar, lalu putuskan dan perbarui Status.

## Implikasi

Jika tim memutuskan menetapkan kerangka kerja menurut jenis pekerjaan dan menerapkannya bertahap, tim perlu:

* Menunjuk pemilik dokumen batas dan cara menyelesaikan konflik, dengan eskalasi.
* Memulai hanya satu kerangka kerja dalam satu tim pada satu waktu, dan memulai yang berikutnya hanya ketika yang sebelumnya telah memenuhi ukuran keluarnya sendiri.
* Memberi tahu sponsor kerangka kerja berikutnya tentang urutan dan alasannya sekarang.
* Mendefinisikan istilah bersama sekali, di dokumen batas.
* Meninjau seluruh pendekatan setelah dua kerangka kerja pertama.

## Keputusan terkait

* [Manifesto Agile](../manifesto-agile/), [ITIL 5](../itil-5/), [Extreme Programming](../extreme-programming/), dan [Six Sigma](../six-sigma/): keputusan untuk masing-masing kerangka kerja.
* [Kerangka kerja bisnis](../kerangka-kerja-bisnis/): pola adopsi bertahap yang umum.
* Keputusan yang belum dibuat: perangkat; urutan kerangka kerja berikutnya.

## Catatan terkait

* Butir terbuka: daftar praktik saat ini; tanyakan kepada sponsor hasil apa yang mereka inginkan; susun draf dokumen batas pertama.
* Pelajari lebih lanjut:
  * Wikipedia: [ITIL](https://en.wikipedia.org/wiki/ITIL), [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development), [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma), [COBIT](https://en.wikipedia.org/wiki/COBIT), [Corporate governance of information technology](https://en.wikipedia.org/wiki/Corporate_governance_of_information_technology), [DevOps](https://en.wikipedia.org/wiki/DevOps)
  * ISO: [ISO/IEC 38500:2024, Governance of IT for the organization](https://www.iso.org/standard/81684.html), [ISO/IEC 20000-1:2018, Service management system requirements](https://www.iso.org/standard/70636.html), [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO 13053-1:2011, Six Sigma: DMAIC methodology](https://www.iso.org/standard/52901.html)
  * Video: [The ITIL 4 Service Value System (SVS) Explained](https://www.youtube.com/watch?v=2rFqjrAMgIw) (Aspirex); [Agile Product Ownership in a Nutshell](https://www.youtube.com/watch?v=502ILHjX9EE) (Henrik Kniberg)
  * Baca: [DORA](https://dora.dev/); [Manifesto for Agile Software Development](https://agilemanifesto.org/)
