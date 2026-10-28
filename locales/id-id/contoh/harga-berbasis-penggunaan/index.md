# Harga berbasis penggunaan

* Status: permintaan komentar
* Tanggal: 2026-04-05
* Pengambil keputusan: VP Produk, dengan masukan CFO (akan dikonfirmasi)
* Pemilik: Kepala Harga & Pengemasan

Ringkasan: Pekerjaan yang sedang berjalan. Ini adalah titik awal bagi tim yang sedang mempertimbangkan apakah akan beralih dari harga tetap per kursi ke model yang menagih berdasarkan penggunaan, atau campuran keduanya. Ini menunjukkan bagaimana tim dapat membingkai pertanyaan, memperdebatkan opsi, dan mengumpulkan informasi. Tidak ada keputusan yang dicatat.

## Masalah

Sebuah produk perangkat lunak dihargai per kursi. Tim menduga hal ini menagih pengguna ringan lebih dari nilai yang mereka terima, sehingga berkontribusi pada kepergian mereka, sementara menagih terlalu rendah pelanggan yang menggunakan produk secara intensif. Pesaing beralih ke harga berbasis penggunaan atau hibrida, dan calon pelanggan bertanya mengapa perusahaan belum.

Pertanyaan yang harus dijawab:

* Apa metrik nilai produk: satuan penggunaan apa yang mencerminkan nilai yang diperoleh pelanggan?
* Apakah pelanggan ringan dan berat benar-benar berperilaku dan merasa seperti yang kita kira?
* Model harga mana yang paling cocok dengan nilai sambil menjaga pendapatan cukup dapat diprediksi untuk direncanakan?
* Bagaimana pelanggan yang ada berpindah ke model baru secara adil?

## Asumsi

Setiap asumsi adalah sesuatu yang harus diuji.

* **Penggunaan adalah proksi yang baik untuk nilai.** Uji: bandingkan penggunaan dengan hasil dan kepuasan pelanggan di berbagai akun.
* **Pengguna ringan pergi karena harga terasa terlalu tinggi.** Uji: tinjau alasan pembatalan dan bicaralah dengan pengguna ringan yang telah pergi.
* **Pengguna berat akan membayar lebih untuk nilai lebih.** Uji: tanyakan kesediaan membayar kepada sampel, dan periksa sensitivitas mereka terhadap perubahan harga.
* **Kita dapat mengukur dan menagih penggunaan secara akurat dan transparan.** Uji: periksa kualitas data, dan tanyakan kepada pelanggan apakah mereka dapat memprediksi tagihan mereka.

## Kendala

* Tidak ada pelanggan yang ada boleh menghadapi kenaikan harga bersih tanpa pemberitahuan di muka.
* Rencana kompensasi penjualan harus mencerminkan struktur baru sebelum dipakai untuk kesepakatan baru.
* Keuangan membutuhkan model peramalan yang dapat mengatasi pendapatan yang bervariasi dengan penggunaan.
* Tidak diketahui, akan dikonfirmasi: ketentuan kontrak yang mengunci harga, apa yang dapat dilakukan sistem penagihan, dan rincian harga pesaing.

## Opsi yang dipertimbangkan

Untuk setiap opsi, perkirakan nilai, biaya, linimasa, dan kebutuhan kapabilitas, serta catat bukti apa yang akan mengubah pikiran tim.

* **Pertahankan harga tetap per kursi.**
  * Nilai: sederhana; tanpa migrasi.
  * Risiko: membiarkan masalah churn dan penagihan terlalu rendah; pesaing berbeda.
* **Beralih sepenuhnya ke harga berbasis penggunaan.**
  * Nilai: harga mengikuti nilai dengan dekat; hambatan memulai rendah.
  * Pendorong biaya: sistem pengukuran, penagihan, dan pelaporan; dukungan untuk pertanyaan tagihan; perubahan penjualan.
  * Risiko: volatilitas pendapatan; pelanggan yang tidak menyukai tagihan yang tak terduga.
* **Hibrida: biaya dasar ditambah biaya berbasis penggunaan.**
  * Nilai: pendapatan lebih dapat diprediksi dibanding harga penggunaan murni, sambil tetap menangani pengguna ringan dan berat.
  * Pendorong biaya: seperti di atas, ditambah kompleksitas desain.
  * Bentuk linimasa: pelanggan baru dahulu; pelanggan yang ada dipindahkan setelah periode terlindungi.
* **Paket berjenjang dengan batas penggunaan.** Jalur tengah yang lebih sederhana yang mungkin memenuhi sebagian besar kebutuhan.
* **Bereksperimen dahulu**, menawarkan model baru kepada sebagian pelanggan baru atau satu segmen, lalu bandingkan.

## Argumen

Poin perdebatan yang harus diantisipasi tim:

* **Keterprediksian vs. keadilan.** Pelanggan dan keuangan menghargai tagihan yang dapat diprediksi; harga penggunaan terasa lebih adil tetapi bervariasi.
* **Metrik mana?** Kursi, panggilan, rekaman, hasil? Metrik yang buruk menciptakan perilaku yang salah.
* **Migrasi.** Grandfathering melindungi pelanggan tetapi menunda manfaat dan mempersulit operasi.
* **Persaingan.** Mengikuti pesaing bukan alasan dengan sendirinya. Apa kata bukti kita?

Bagaimana tim dapat mengevaluasi biaya dan pertukaran:

1. Modelkan pendapatan di bawah setiap opsi menggunakan data pelanggan yang ada: untuk setiap akun, berapa yang akan dibayar di bawah model baru? Tunjukkan pemenang dan pecundang, serta sebarannya, sebagai rentang.
2. Perkirakan elastisitas harga secara kualitatif dan melalui pengujian, dan pertimbangkan reaksi pelanggan terhadap perubahan tagihan.
3. Hitung biaya perubahan: pengukuran, penagihan, dukungan, pelatihan penjualan, perubahan hukum dan kontrak, alat peramalan.
4. Bandingkan opsi untuk tingkat pendapatan, stabilitas pendapatan, keadilan pelanggan, efek pertumbuhan, dan kompleksitas; uji sensitivitas terhadap asumsi.
5. Rencanakan eksperimen dan tentukan di muka hasil apa yang akan menyebabkan perluasan, penyesuaian, atau penghentiannya.

## Keputusan

**Belum diputuskan.** Ini adalah titik awal. Tim yang menggunakannya harus mengganti bagian ini dengan keputusannya sendiri.

Cara yang disarankan untuk mencapai keputusan:

* Konfirmasi siapa yang memutuskan dan siapa yang harus menyetujui (misalnya Keuangan).
* Sepakati kriteria dan bobotnya terlebih dahulu.
* Kumpulkan bukti di atas dan catat apa yang ditemukan.
* Bagikan untuk komentar, lalu putuskan dan perbarui Status.

## Implikasi

Jika tim memutuskan beralih ke model hibrida, tim perlu:

* Memodelkan setiap akun yang ada untuk memastikan tidak ada yang menghadapi kenaikan mendadak.
* Memperbarui kompensasi penjualan dan melatih penjualan serta dukungan.
* Merevisi peramalan pendapatan untuk menangani variasi.
* Menghubungi pelanggan berpenggunaan ringan yang berisiko sejak dini, karena mereka seharusnya melihat tagihannya turun.
* Memutuskan secara terpisah jenjang dan ambang kelebihan penggunaan yang tepat.

## Keputusan terkait

* [Memasuki segmen pasar menengah](../memasuki-segmen-menengah/): harga untuk segmen baru.
* [Reposisi merek seputar keandalan](../reposisi-merek/): sinyal harga dan positioning.
* Keputusan yang belum dibuat: jenjang penggunaan yang tepat; linimasa migrasi untuk pelanggan yang ada.

## Catatan terkait

* Butir terbuka: tentukan kandidat metrik nilai; tinjau alasan pembatalan; periksa apa yang dapat diukur penagihan. Data penagihan, penggunaan, dan pembatalan Anda sendiri adalah bukti yang lebih relevan daripada artikel umum mana pun.
* Pelajari lebih lanjut:
  * Wikipedia: [Pricing strategy](https://en.wikipedia.org/wiki/Pricing_strategy), [Price elasticity of demand](https://en.wikipedia.org/wiki/Price_elasticity_of_demand), [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service), [Subscription business model](https://en.wikipedia.org/wiki/Subscription_business_model), [Churn rate](https://en.wikipedia.org/wiki/Churn_rate), [Customer lifetime value](https://en.wikipedia.org/wiki/Customer_lifetime_value), [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis)
