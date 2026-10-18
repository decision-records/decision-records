# Mengurangi risiko konsentrasi pada satu vendor

* Status: permintaan komentar
* Tanggal: 2026-05-20
* Pengambil keputusan: COO (akan dikonfirmasi)
* Pemilik: Kepala Pengadaan

Ringkasan: Pekerjaan yang sedang berjalan. Ini adalah titik awal bagi tim yang sedang mempertimbangkan cara menanggapi ketergantungan besar pada satu vendor untuk layanan kritis. Ini menunjukkan bagaimana tim dapat membingkai risiko, memperdebatkan opsi, dan mengumpulkan informasi. Tidak ada keputusan yang dicatat.

## Masalah

Tinjauan risiko internal menemukan bahwa sebagian besar pengeluaran infrastruktur kritis mengalir ke satu vendor. Vendor itu mengalami gangguan yang tidak direncanakan yang mengganggu layanan yang dihadapi pelanggan, dan harganya naik tanpa batas kontraktual. Melanjutkan seperti sekarang membiarkan organisasi terpapar risiko ketersediaan dan pertumbuhan biaya yang tak terkendali.

Pertanyaan yang harus dijawab:

* Seberapa banyak dari apa yang kita andalkan sebenarnya terkonsentrasi, dan apa yang terjadi pada bisnis jika vendor gagal atau menaikkan harga lagi?
* Seberapa mungkin dan seberapa parah peristiwa itu, dan apa yang bersedia kita terima?
* Apa cara realistis untuk mengurangi risiko, dengan biaya berapa, dan seberapa cepat?
* Seperti apa jalan keluar atau cadangan yang aman?

## Asumsi

Setiap asumsi adalah sesuatu yang harus diuji.

* **Gangguan dan kenaikan harga mencerminkan pola yang bertahan lama**, bukan kejadian sekali. Uji: tinjau riwayat insiden, komunikasi vendor, dan harga pasar.
* **Vendor kedua dapat menjalankan sebagian beban kerja kritis dengan kualitas yang dapat diterima.** Uji: buat daftar pendek kandidat dan jalankan uji coba terbatas.
* **Vendor utama akan memperbaiki ketentuan jika melihat alternatif yang kredibel.** Uji: minta proposal pembaruan sambil mengevaluasi opsi lain.
* **Migrasi bertahap dapat menghindari gangguan layanan.** Uji: tinjau ketergantungan teknis dan batasan kontrak soal memindahkan beban kerja.

## Kendala

* Layanan yang dihadapi pelanggan tidak boleh terganggu selama transisi apa pun.
* Ketentuan kontrak dapat membatasi seberapa cepat beban kerja dapat dipindahkan, dan dapat mencakup biaya untuk keluar.
* Setiap vendor baru harus dinilai dengan kriteria yang sama dengan yang asli.
* Tidak diketahui, akan dikonfirmasi: portabilitas data, layanan proprietari yang digunakan, biaya keluar, dan ekspektasi regulasi tentang risiko pihak ketiga.

## Opsi yang dipertimbangkan

Untuk setiap opsi, perkirakan nilai, biaya, linimasa, dan kebutuhan kapabilitas, serta catat bukti apa yang akan mengubah pikiran tim.

* **Terima risiko dan pantau.**
  * Nilai: tanpa biaya atau upaya jangka dekat.
  * Risiko: membiarkan paparan gangguan dan harga; tinjauan risiko mungkin tidak mengizinkannya pada konsentrasi saat ini.
* **Negosiasi ulang dengan vendor yang ada** untuk tingkat layanan, batas harga, dan ketentuan keluar yang lebih baik; tetap satu vendor.
  * Nilai: menangani harga dan akuntabilitas.
  * Risiko: tidak menghilangkan titik kegagalan tunggal.
* **Diversifikasi: pindahkan sebagian beban kerja kritis ke vendor kedua** dan negosiasi ulang kontrak utama untuk sisanya.
  * Nilai: mengurangi konsentrasi; memperkuat posisi tawar.
  * Pendorong biaya: pemilihan vendor; upaya migrasi; biaya operasional ganda untuk sementara; kompleksitas operasional tambahan (dua set prosedur dan keterampilan).
  * Bentuk linimasa: bertahap, dengan titik periksa.
* **Bangun ketahanan tanpa vendor kedua**: cadangan, prosedur pemulihan yang teruji, dan perubahan desain yang memungkinkan peralihan nanti.
* **Beralih sepenuhnya ke vendor lain.** Gangguan terbesar; hanya dibenarkan jika vendor saat ini tidak dapat diterima.

## Argumen

Poin perdebatan yang harus diantisipasi tim:

* **Selera risiko.** Tingkat ketergantungan apa yang dapat diterima? Siapa yang memutuskan?
* **Biaya ketahanan.** Redundansi punya harga berkelanjutan; apakah asuransi itu sepadan, dan untuk layanan mana?
* **Kompleksitas.** Dua vendor menambah kompleksitas operasional. Apakah tim punya keterampilannya?
* **Penguncian.** Seberapa besar organisasi bergantung pada fitur proprietari satu vendor, dan berapa biaya berpindah?

Bagaimana tim dapat mengevaluasi biaya dan pertukaran:

1. Identifikasi layanan kritis dan ketergantungannya. Untuk masing-masing, perkirakan dampak bisnis dari gangguan dengan durasi berbeda, sebagai rentang.
2. Perkirakan kemungkinan kegagalan dan perubahan harga menggunakan riwayat dan bukti vendor, dengan ketidakpastian.
3. Hitung biaya setiap opsi: migrasi, biaya operasional ganda, perangkat, pelatihan, pengadaan, dan kompleksitas berkelanjutan; sertakan biaya keluar untuk kedua vendor.
4. Bandingkan pengurangan risiko yang diharapkan terhadap biaya, dan uji sensitivitas terhadap perkiraan kemungkinan.
5. Tentukan indikator utama dan titik pemicu, misalnya pelanggaran tingkat layanan, perubahan harga, atau peristiwa keamanan.

## Keputusan

**Belum diputuskan.** Ini adalah titik awal. Tim yang menggunakannya harus mengganti bagian ini dengan keputusannya sendiri.

Cara yang disarankan untuk mencapai keputusan:

* Konfirmasi siapa yang memutuskan, dan selera risiko yang berlaku.
* Sepakati kriteria dan bobotnya terlebih dahulu.
* Kumpulkan bukti di atas dan catat apa yang ditemukan.
* Bagikan untuk komentar, lalu putuskan dan perbarui Status.

## Implikasi

Jika tim memutuskan diversifikasi, tim perlu:

* Menjalankan proses pemilihan vendor dengan kriteria yang sama dengan yang asli.
* Merencanakan migrasi bertahap yang menghindari gangguan.
* Menegosiasikan ulang kontrak utama secara paralel.
* Menerima kompleksitas operasional tambahan, dengan runbook untuk setiap vendor.
* Melaporkan konsentrasi dan ketentuan tingkat layanan secara berkala hingga target tercapai.

## Keputusan terkait

* [Memilih basis data utama](../pilihan-basis-data/): contoh teknologi dari pertanyaan penguncian yang sama.
* [Membangun atau membeli untuk sebuah proyek](../membangun-atau-membeli/): pilihan sumber terkait.
* Keputusan yang belum dibuat: rencana keluar dan kesinambungan; pemilihan vendor.

## Catatan terkait

* Butir terbuka: daftar layanan kritis dan vendornya; kumpulkan riwayat insiden; baca kontrak untuk ketentuan keluar dan harga.
* Pelajari lebih lanjut:
  * Wikipedia: [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in), [Concentration risk](https://en.wikipedia.org/wiki/Concentration_risk), [Single point of failure](https://en.wikipedia.org/wiki/Single_point_of_failure), [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning), [Disaster recovery](https://en.wikipedia.org/wiki/Disaster_recovery), [Multicloud](https://en.wikipedia.org/wiki/Multicloud), [Risk register](https://en.wikipedia.org/wiki/Risk_register)
  * ISO: [ISO 31000 family, Risk management](https://www.iso.org/standards/popular/iso-31000-family), [ISO 22301:2019, Business continuity management systems](https://www.iso.org/standard/75106.html), [ISO 20400:2017, Sustainable procurement guidance](https://www.iso.org/standard/63026.html)
  * Video: [Preparing for Vendor Lock-In: The Importance of an Exit Strategy](https://www.youtube.com/watch?v=vtdprxMFlH8) (Razorwire)
  * Baca: [NIST SP 800-161 Rev. 1, Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)
