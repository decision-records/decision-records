# Panduan: Catatan Keputusan untuk Para Pemimpin

Panduan ini menjelaskan apa itu catatan keputusan, mengapa hal ini penting bagi para pemimpin di setiap fungsi bisnis, bagaimana menyusunnya, dan bagaimana menjalankan praktik ini dengan baik.

Daftar isi:

* [Apa itu catatan keputusan?](#apa-itu-catatan-keputusan)
* [Mengapa pemimpin, bukan hanya insinyur, perlu menggunakan catatan keputusan](#mengapa-pemimpin-bukan-hanya-insinyur-perlu-menggunakan-catatan-keputusan)
* [Catatan keputusan berlaku untuk setiap bagian bisnis](#catatan-keputusan-berlaku-untuk-setiap-bagian-bisnis)
* [Anatomi sebuah catatan keputusan](#anatomi-sebuah-catatan-keputusan)
* [Siklus hidup catatan keputusan](#siklus-hidup-catatan-keputusan)
* [Peran dan tata kelola](#peran-dan-tata-kelola)
* [Praktik terbaik](#praktik-terbaik)
* [Jebakan umum](#jebakan-umum)
* [Memulai di organisasi Anda](#memulai-di-organisasi-anda)
* [Bacaan lanjutan](#bacaan-lanjutan)

## Apa itu catatan keputusan?

**Catatan keputusan (DR)** merekam satu pilihan penting: situasi yang melatarbelakanginya, opsi yang ditimbang, pilihan yang diambil, dan konsekuensi yang diharapkan. **Log keputusan (DL)** adalah kumpulan berkelanjutan dari setiap catatan keputusan milik sebuah tim, fungsi, atau organisasi, yaitu pada dasarnya memori institusional tentang "mengapa kita melakukan hal ini dengan cara begini."

Catatan keputusan bukanlah:

* Notulen rapat (catatan tentang apa yang *dibahas*, bukan apa yang *diputuskan dan mengapa*).
* Rencana proyek (catatan tentang *apa yang terjadi selanjutnya*, bukan *mengapa jalur ini dipilih dibanding yang lain*).
* Dokumen kebijakan (catatan tentang *aturan tetap*, meskipun catatan keputusan sering menghasilkan satu).

Catatan keputusan berada di antara semuanya: artefak singkat dan tahan lama yang ada khusus agar alasan di balik suatu pilihan bertahan lebih lama daripada rapat tempat pilihan itu dibuat.

## Mengapa pemimpin, bukan hanya insinyur, perlu menggunakan catatan keputusan

Tim perangkat lunak yang pertama kali mengadopsi praktik ini karena kode mahal untuk dibatalkan dan insinyur baru terus bertanya "mengapa ini dibangun seperti ini?" Setiap pemimpin menghadapi dinamika yang persis sama:

* **Memori institusional ikut keluar bersama orang yang pergi.** Ketika seorang VP Penjualan yang memilih model wilayah saat ini pergi, alasannya ikut pergi kecuali sudah ditulis.
* **Reorganisasi dan pergantian kepemimpinan memicu perdebatan ulang.** Tanpa catatan, pemimpin baru menghabiskan berminggu-minggu memperdebatkan ulang keputusan yang sebelumnya sudah dibuat dengan cermat, atau lebih buruk lagi, membalikkannya tanpa menyadari mengapa keputusan itu ada.
* **Orientasi lebih cepat dengan "mengapa", bukan hanya "apa".** Karyawan baru yang dapat membaca belasan keputusan terakhir di fungsinya memahami cara organisasi menilai, bukan hanya keadaannya saat ini.
* **Menuliskannya memperbaiki keputusan itu sendiri.** Menuangkan konteks, opsi, dan pertukaran ke dalam halaman, sebelum memutuskan, memunculkan celah dan asumsi yang tak terucapkan yang terlewat dalam diskusi lisan.
* **Menciptakan akuntabilitas tanpa birokrasi.** Catatan keputusan menyebutkan siapa yang memutuskan, kapan, dan mengapa, yang melindungi pengambil keputusan (pilihan yang terdokumentasi dan beralasan) maupun organisasi (pemilik yang jelas untuk meninjau ulang jika keadaan berubah).
* **Memperluas komunikasi lintas jarak dan waktu.** Bagi tim jarak jauh dan asinkron, serta pemangku kepentingan yang tidak hadir di ruangan, catatan keputusan yang ditulis dengan baik melakukan pekerjaan yang harus diulang oleh rapat langsung.

Tidak satu pun dari ini khusus untuk perangkat lunak. Ini khusus untuk *setiap* keputusan yang mahal untuk dibalikkan, memengaruhi orang di luar pengambil keputusan, atau mungkin dipertanyakan di kemudian hari.

## Catatan keputusan berlaku untuk setiap bagian bisnis

Perlakukan "catatan keputusan" sebagai sebuah genre, bukan alat milik satu departemen. Struktur enam bagian yang sama berfungsi baik keputusannya bersifat arsitektural maupun komersial:

* **Catatan Keputusan Strategi** — masuk atau keluar pasar, sikap kompetitif, taruhan multi-tahun.
* **Catatan Keputusan Penjualan** — desain wilayah, rencana kompensasi, pilihan CRM/perangkat, strategi saluran.
* **Catatan Keputusan Pemasaran** — positioning merek, bauran saluran, agensi vs. internal, komunikasi harga.
* **Catatan Keputusan Produk** — model harga, pertukaran peta jalan, bangun vs. beli, keputusan penghentian.
* **Catatan Keputusan Proyek** — metodologi pengiriman, pemilihan vendor, pertukaran lingkup.
* **Catatan Keputusan Risiko** — penerimaan, mitigasi, transfer, atau penghindaran risiko, beserta alasannya.
* **Catatan Keputusan Sumber Daya Manusia** — perubahan kebijakan (kerja jarak jauh, penjenjangan, pita kompensasi), desain organisasi.
* **Catatan Keputusan Hubungan Masyarakat** — sikap komunikasi krisis, kebijakan juru bicara, aturan keterlibatan media.
* **Catatan Keputusan Pengembangan Profesional** — investasi pelatihan, kriteria promosi, pilihan suksesi.
* **Catatan Keputusan Desain Berpusat pada Pengguna** — pilihan metode riset, pertukaran aksesibilitas, arah UX.
* **Catatan Keputusan Arsitektur Perangkat Lunak / Rekayasa** — kasus penggunaan asli: pilihan teknologi, platform, dan desain.

Direktori [contoh](../contoh/index.md) memiliki sampel kerja di sebagian besar domain ini. Banyak organisasi yang mengadopsi catatan keputusan untuk rekayasa kemudian menemukan bahwa tim strategi, SDM, atau penjualan mereka menginginkan disiplin yang sama persis, sering kali dalam momen "lampu menyala" yang dijelaskan tim yang sekadar mengganti nama praktik ini menjadi "keputusan" alih-alih "catatan keputusan", sehingga polanya terasa asli bagi tim non-teknis, bukan dipinjam dari rekayasa.

## Anatomi sebuah catatan keputusan

Dua templat tersedia di [templat/index.md](../templat/index.md): versi **ringan** enam kolom untuk keputusan sehari-hari, dan versi **komprehensif** untuk keputusan berisiko tinggi dengan pengawasan tinggi. Keduanya memakai logika inti yang sama:

1. **Judul** — pernyataan singkat, berbentuk kini, dan aktif tentang keputusan itu sendiri (misalnya, "Adopsi OKR kuartalan," bukan "Diskusi OKR"). Usahakan di bawah 50 karakter.
2. **Status** — posisi keputusan dalam hidupnya: permintaan komentar, diusulkan, diterima, ditolak, usang, atau digantikan.
3. **Konteks (Masalah)** — situasi, kekuatan, dan kendala yang membuat keputusan ini diperlukan. Ditulis agar pembaca yang tidak ingat rapatnya memahami mengapa pertanyaan itu muncul.
4. **Opsi yang Dipertimbangkan (Posisi)** — alternatif yang realistis, dinyatakan sebagai fakta dan pertukaran, bukan barisan lawan semu yang membuat opsi terpilih tampak jelas benar. Jika seseorang bisa bertanya "apakah Anda mempertimbangkan X?" dan jawabannya tidak ada di catatan, catatan itu belum lengkap.
5. **Keputusan** — pilihan, dalam bahasa yang lugas dan aktif: "Kita akan melakukan X." Bukan ringkasan pro dan kontra, melainkan pernyataan jelas tentang apa yang dipilih.
6. **Konsekuensi (Implikasi)** — apa yang berubah akibatnya, termasuk biaya, risiko, keputusan lanjutan, dan apa pun yang dilepaskan karena tidak memilih alternatif. Konsekuensi yang baik terbaca sebagai "kita sekarang melakukan X, bukan Y," bukan rekap pro/kontra dari keputusan yang sudah dibuat.

Templat komprehensif menambahkan kolom yang berguna untuk keputusan berisiko lebih tinggi: **Asumsi**, **Kendala**, **Pendapat** (siapa menyarankan apa, dan mengapa), **Keputusan/persyaratan/artefak/prinsip terkait**, dan subbagian analisis terstruktur (analisis biaya, SWOT, PEST) untuk keputusan yang layak diperiksa lebih dalam.

## Siklus hidup catatan keputusan

Catatan keputusan biasanya melewati lima tahap:

**Memulai → Meneliti → Mengevaluasi → Memutuskan → Memelihara (→ Mengakhiri)**

* *Memulai* — seseorang mengidentifikasi bahwa suatu pilihan cukup signifikan untuk dicatat dan membuka draf.
* *Meneliti* — opsi, kendala, dan asumsi dikumpulkan; pemangku kepentingan dikonsultasikan.
* *Mengevaluasi* — catatan dibagikan untuk komentar, biasanya dengan batas waktu yang ditentukan (satu minggu adalah default umum).
* *Memutuskan* — pengambil keputusan (individu atau kelompok, sesuai model tata kelola Anda) menerima, menolak, atau mengembalikannya untuk dikerjakan lagi; status diperbarui sesuai hasil.
* *Memelihara* — catatan tetap mudah ditemukan dan ditinjau kembali jika keadaan berubah secara material.
* *Mengakhiri* — jika digantikan, status catatan lama berubah menjadi "digantikan" dan menautkan ke yang baru. Catatan lama tidak pernah dihapus, karena riwayat itulah intinya.

## Peran dan tata kelola

Untuk setiap catatan keputusan, tetapkan:

* **Pemilik / pengusul** — menyusun draf catatan dan mendorongnya hingga menjadi keputusan.
* **Pengambil keputusan** — orang, peran, atau komite yang berwenang menerimanya. Nyatakan ini secara eksplisit per jenis keputusan (misalnya, "perubahan harga: VP Produk; masuk pasar: CEO + Dewan").
* **Kontributor** — orang yang masukannya secara material membentuk opsi atau pertukaran.
* **Pemilik yang akuntabel ke depannya** — yang memelihara keputusan, meninjaunya secara berkala (tahunan adalah ritme umum), dan bertanggung jawab untuk akhirnya menghentikannya.

Pertanyaan tata kelola yang layak diselesaikan sekali, secara tertulis, untuk organisasi Anda (lihat juga [daftar periksa](../daftar-periksa/index.md)):

* Siapa yang dapat *mengusulkan* catatan keputusan? (Sering: siapa saja.)
* Siapa yang dapat *menyetujuinya*, dan apakah itu bervariasi menurut jenis keputusan atau ambang dolar/risiko?
* Apa yang memutus kebuntuan atau menyelesaikan ketidaksepakatan: konsensus, penyetuju yang ditunjuk, atau eskalasi?
* Seberapa dapat diubah catatan setelah diterima? Banyak tim menyukai model "dokumen hidup": informasi baru ditambahkan dengan stempel waktu, bukan menulis ulang riwayat secara diam-diam.

## Praktik terbaik

* **Satu keputusan per catatan.** Tahan godaan menggabungkan beberapa pilihan dalam satu dokumen, karena akan mustahil untuk dirujuk, digantikan, atau dicari nanti.
* **Singkat dan padat.** Satu halaman, bukan laporan. Jika melebihi satu halaman, keputusannya mungkin lebih dari satu keputusan.
* **Tulis konteks untuk orang asing.** Anggap pembaca tidak memiliki konteks bersama dari rapat, dan tidak akan memilikinya dua tahun lagi.
* **Nyatakan keputusan dalam kalimat aktif.** "Kita akan bermigrasi ke X," bukan "X dipandang sebagai arah yang disukai."
* **Jelaskan konsekuensi sebagai apa yang berubah, bukan pro dan kontra.** Perdebatan pertukaran ada di "Opsi yang Dipertimbangkan"; "Konsekuensi" membahas apa yang terjadi selanjutnya.
* **Simpan catatan di tempat tim sudah bekerja.** Folder `decisions/` yang dikendalikan versinya, ruang wiki, atau folder drive bersama; lokasi penyimpanan terbaik adalah yang benar-benar akan dibuka tim Anda.
* **Sediakan catatan keputusan untuk keputusan yang sulit dibalikkan, lintas fungsi, atau mungkin dipertanyakan nanti.** Tidak setiap pilihan membutuhkannya, lihat [daftar periksa](../daftar-periksa/index.md#daftar-periksa-apakah-keputusan-ini-memerlukan-catatan-keputusan).
* **Gantikan, jangan hapus diam-diam.** Ketika keputusan berubah, tulis catatan baru dan tautkan kembali ke catatan yang digantikannya.

## Jebakan umum

* **Mengubahnya menjadi kerja administrasi setelah kejadian.** Jika catatan keputusan ditulis untuk membenarkan pilihan yang sudah dibuat dan diumumkan, sebagian besar nilainya hilang. Tujuannya adalah mempertajam pemikiran *sebelum* berkomitmen, bukan menghasilkan artefak kepatuhan sesudahnya.
* **Kelelahan log.** Mencatat setiap pilihan kecil mengubur yang signifikan dan melatih orang berhenti membaca log. Batasi catatan pada keputusan yang benar-benar sulit dibalikkan atau berdampak luas.
* **Menulis pro/kontra alih-alih keputusan.** Catatan yang berakhir dengan daftar pertukaran tanpa kalimat jelas "kita akan melakukan X" bukan catatan keputusan, melainkan memo opsi.
* **Tidak ada pemilik yang akuntabel.** Catatan keputusan tanpa pengambil keputusan atau peninjau yang disebutkan cenderung menjadi usang dan tidak lagi dipercaya.
* **Memperlakukan templat sebagai birokrasi, bukan daftar periksa.** Nilai templat adalah bahwa ia daftar periksa untuk pemikiran dan komunikasi yang baik, bukan formulir untuk diisi demi formalitas.

## Memulai di organisasi Anda

1. Pilih satu fungsi atau tim yang memiliki keputusan yang sudah diperdebatkan atau sulit dibalikkan.
2. Susun satu keputusan itu dengan [templat ringan](../templat/index.md#templat-ringan).
3. Sosialisasikan dengan pengambil keputusan dan pemangku kepentingan yang sebenarnya; beri batas waktu untuk umpan balik.
4. Simpan di tempat yang tahan lama dan mudah ditemukan.
5. Begitu praktik ini terbukti berguna sekali, usulkan sebagai standar ringan untuk tim, bukan mandat dari atas. Catatan keputusan bekerja paling baik sebagai sesuatu yang diadopsi tim karena membuat hidup mereka sendiri lebih mudah, bukan sebagai kerja administrasi paksaan.

Lihat [tutorial](../tutorial/index.md) untuk panduan langkah demi langkah lengkap.

## Bacaan lanjutan

* [spec/decision-record.md](https://github.com/decision-records/decision-records/blob/main/spec/decision-record.md) — spesifikasi ringkas yang dikembangkan oleh panduan ini.
* [Architectural decision (Wikipedia)](https://wikipedia.org/wiki/Architectural_decision)
* [Documenting architecture decisions — Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
* [Markdown Architectural Decision Records (MADR)](https://adr.github.io/madr/)
* [AWS Prescriptive Guidance: ADR process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)
* [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)
* [joelparkerhenderson/decision-record](https://github.com/joelparkerhenderson/decision-record) — proyek sumber yang lebih lengkap yang digeneralisasi panduan ini untuk audiens bisnis.
