# Extreme Programming

* Status: permintaan komentar
* Tanggal: 2025-10-06
* Pengambil keputusan: Kepala Rekayasa (akan dikonfirmasi)
* Pemilik: Manajer Rekayasa

Ringkasan: Pekerjaan yang sedang berjalan. Ini adalah titik awal bagi tim rekayasa yang sedang mempertimbangkan cara memperkenalkan praktik dari Extreme Programming (XP), seperti pengembangan berbasis tes, pemrograman berpasangan, integrasi berkelanjutan, dan rilis kecil. Ini menunjukkan bagaimana tim dapat membingkai pertanyaan, memperdebatkan opsi, dan mengumpulkan informasi. Tidak ada keputusan yang dicatat.

## Masalah

Tim produk mengirim fitur dalam batch besar, dan cacat yang ditemukan terlambat itu mahal: sebagian rilis yang cukup terlihat memerlukan perbaikan mendesak setelah rilis. Pemimpin rekayasa tertarik pada praktik dari Extreme Programming, metode pengembangan perangkat lunak agile yang menekankan praktik teknis seperti pengembangan berbasis tes, pemrograman berpasangan, integrasi berkelanjutan, rilis kecil, refactoring, dan kepemilikan kode kolektif.

Praktik-praktik ini saling mendukung, tetapi juga mengubah cara insinyur bekerja setiap hari. Mengadopsi semuanya sekaligus kemungkinan menghadapi resistensi dan dilakukan secara dangkal. Pertanyaan yang harus dijawab:

* Masalah apa yang ingin kita selesaikan (cacat terlambat, umpan balik lambat, pengetahuan yang dipegang segelintir orang), dan praktik mana yang menanganinya?
* Dalam urutan apa praktik diperkenalkan, dan siapa yang pertama?
* Apa yang akan kita ukur untuk mengetahui bahwa praktik membantu?
* Apa keseimbangan yang tepat antara standar bersama dan pilihan setiap tim?

## Asumsi

Setiap asumsi adalah sesuatu yang harus diuji.

* **Cacat terlambat terutama disebabkan oleh kurangnya umpan balik otomatis yang cepat.** Uji: telusuri sampel perbaikan mendesak kembali ke tempat cacat itu bisa tertangkap.
* **Praktik dasar (integrasi berkelanjutan dan tes otomatis) memungkinkan yang lainnya.** Uji: tanyakan kepada tim yang pernah mencoba praktik mana yang bergantung pada yang mana.
* **Insinyur akan mengadopsi praktik yang mereka lihat berhasil di tim sebelah.** Uji: tanyakan kepada insinyur apa yang akan meyakinkan mereka, dan apa yang mengkhawatirkan mereka.
* **Tingkat perbaikan mendesak setelah rilis adalah ukuran kemajuan yang adil.** Uji: sepakati bagaimana menghitungnya, dan periksa bahwa ukuran lain (waktu tunggu, tingkat kegagalan perubahan) tidak menceritakan kisah yang berbeda.

## Kendala

* Tim tetap harus mengirim fitur sambil belajar, sehingga keluaran pada periode pertama kemungkinan akan lebih rendah.
* Insinyur harus tetap memiliki pilihan tentang cara berpasangan dan perangkat apa yang digunakan.
* Infrastruktur build dan tes yang ada mungkin perlu dikerjakan sebelum integrasi berkelanjutan berguna.
* Tidak diketahui, akan dikonfirmasi: seberapa banyak basis kode yang dapat diuji hari ini, dan apakah kendala regulasi atau pelanggan memengaruhi frekuensi rilis.

## Opsi yang dipertimbangkan

Untuk setiap opsi, perkirakan nilai, biaya, linimasa, dan kebutuhan kapabilitas, serta catat bukti apa yang akan mengubah pikiran tim.

* **Adopsi semua praktik sekaligus di setiap tim.**
  * Nilai: praktik saling memperkuat.
  * Pendorong biaya: pelatihan; pengiriman lebih lambat selama pembelajaran; pekerjaan perangkat di semua tim sekaligus.
  * Risiko: perubahan besar; tim tanpa keterampilan yang mendasari mungkin meninggalkan praktik dalam hitungan minggu.
* **Adopsi praktik dalam urutan tertentu, tim demi tim.** Misalnya integrasi berkelanjutan dan tes otomatis dahulu (fondasi), lalu rilis kecil dan pemrograman berpasangan, lalu pengembangan berbasis tes.
  * Nilai: setiap praktik punya waktu untuk mapan; yang awal memungkinkan yang kemudian; pengalaman tim pertama memandu yang lain.
  * Pendorong biaya: pembinaan; waktu untuk berpasangan dan menulis tes dimasukkan ke rencana; pekerjaan infrastruktur untuk pipeline.
  * Bentuk linimasa: berurutan, dengan tim berikutnya bergabung ketika tim sebelumnya telah menjaga pipeline rilisnya tetap sehat selama periode tertentu.
  * Kapabilitas yang dibutuhkan: pelatih; pipeline build yang andal; dukungan manajer untuk penurunan keluaran.
  * Risiko: lambat; praktik diadopsi tidak merata.
* **Adopsi hanya praktik yang mudah.** Upaya rendah, tetapi mungkin melewatkan yang manfaatnya terbesar, seperti pengujian otomatis.
* **Adopsi seperangkat praktik yang berbeda** (misalnya yang dijelaskan riset DORA tentang pengiriman perangkat lunak, seperti continuous delivery, trunk-based development, dan arsitektur yang terpisah longgar) dan perlakukan XP sebagai satu sumber di antara beberapa.
* **Jangan lakukan hal baru** dan tangani penyebab cacat tertentu secara langsung. Garis dasar nyata.

## Argumen

Poin perdebatan yang harus diantisipasi tim:

* **Pemrograman berpasangan.** Praktik yang diwaspadai banyak insinyur. Di mana ia membantu (berbagi pengetahuan, pekerjaan kompleks), dan di mana tidak?
* **Standarkan atau biarkan tim memilih?** Hasil bersama (lebih sedikit perbaikan mendesak, umpan balik lebih cepat) dengan kebebasan tim dalam cara mencapainya, atau standar yang lebih ketat?
* **Kualitas vs. kecepatan jangka pendek.** Apakah pemimpin bersedia menerima keluaran lebih rendah selama tim belajar?
* **TDD, sarana atau tujuan?** Beberapa praktik (seperti pengembangan berbasis tes) diperdebatkan bahkan di antara praktisi berpengalaman. Tim harus memutuskan masalah apa yang ditangani praktik itu sebelum mengadopsinya.

Bagaimana tim dapat mengevaluasi biaya dan pertukaran:

1. Hitung biaya pendekatan saat ini: upaya yang dihabiskan untuk perbaikan mendesak, penundaan yang disebabkan cacat terlambat, dampak pada pelanggan. Gunakan rentang dengan istilah organisasi sendiri.
2. Hitung biaya program: pembinaan, pelatihan, waktu berpasangan dan tes, infrastruktur pipeline, dan penurunan sementara dalam pengiriman.
3. Pilih ukuran terlebih dahulu: porsi rilis yang membutuhkan perbaikan mendesak, waktu tunggu perubahan, frekuensi deployment, waktu memulihkan layanan (ukuran DORA), dan umpan balik insinyur.
4. Bandingkan opsi dalam skenario terbaik, paling mungkin, dan terburuk; tanyakan bagaimana jawabannya berubah jika manfaat muncul lebih lambat atau lebih kecil dari harapan.
5. Gunakan matriks berbobot dan pre-mortem.

## Keputusan

**Belum diputuskan.** Ini adalah titik awal. Tim yang menggunakannya harus mengganti bagian ini dengan keputusannya sendiri.

Cara yang disarankan untuk mencapai keputusan:

* Konfirmasi siapa yang memutuskan dan kapan.
* Sepakati kriteria dan bobot terlebih dahulu.
* Kumpulkan bukti di atas dan catat apa yang ditemukan.
* Bagikan untuk komentar, lalu putuskan dan perbarui Status.

## Implikasi

Jika tim memilih pendekatan bertahap, tim perlu:

* Menunjuk pelatih dan meminta tim pertama melaporkan dengan jujur apa yang membantu dan apa yang tidak.
* Merencanakan waktu untuk berpasangan dan untuk menulis tes ke dalam rencana pengiriman.
* Berinvestasi pada pipeline build dan tes sebelum mengandalkannya.
* Menyepakati aturan berhenti: jika sebuah praktik tidak membantu setelah periode tertentu, tim dapat mengusulkan untuk menghentikannya dan mencatat alasannya.
* Mempertahankan pilihan insinyur tentang cara berpasangan dan perangkat yang digunakan; praktik harus menetapkan hasil, bukan setiap rincian cara mencapainya.

## Keputusan terkait

* [Manifesto Agile](../manifesto-agile/): keputusan lebih luas tentang nilai yang didukung praktik ini.
* [Memilih kerangka kerja teknologi informasi kita](../kerangka-kerja-teknologi-informasi/): bagaimana XP cocok dengan kerangka kerja lain.
* Keputusan yang belum dibuat: investasi pipeline dan perangkat; model kepemilikan kode.

## Catatan terkait

* Butir terbuka: ambil sampel perbaikan mendesak terbaru; tanyakan kepada insinyur tentang kekhawatiran mereka dengan berpasangan dan pengujian; periksa apa yang dapat dilakukan pipeline build hari ini.
* Pelajari lebih lanjut:
  * Wikipedia: [Extreme programming](https://en.wikipedia.org/wiki/Extreme_programming), [Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), [Pair programming](https://en.wikipedia.org/wiki/Pair_programming), [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration), [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring), [Technical debt](https://en.wikipedia.org/wiki/Technical_debt)
  * ISO: [ISO/IEC/IEEE 12207, Software life cycle processes](https://www.iso.org/standard/90219.html), [ISO/IEC 25010:2023, Product quality model](https://www.iso.org/standard/78176.html)
  * Video: [What is Extreme Programming (XP)?](https://www.youtube.com/watch?v=5VpcuwW1mQ0) (Agilemania)
  * Baca: [Extreme Programming: A gentle introduction](http://www.extremeprogramming.org/); Martin Fowler, [Continuous Integration](https://martinfowler.com/articles/continuousIntegration.html); [DORA](https://dora.dev/); *Extreme Programming Explained* (Kent Beck)
