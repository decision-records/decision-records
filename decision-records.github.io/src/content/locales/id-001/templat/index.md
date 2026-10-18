# Templat catatan keputusan

Dua templat, keduanya Markdown biasa: salin yang Anda inginkan ke berkas baru lalu isi.

## Memilih templat yang akan digunakan

Gunakan **templat ringan** sebagai default. Sebagian besar keputusan hanya membutuhkan enam kolomnya, dan halaman yang melampaui itu biasanya memang lebih dari satu keputusan.

Beralihlah ke **templat komprehensif** ketika keputusan berisiko tinggi, memiliki beberapa pemangku kepentingan yang pendapatnya penting secara individual, atau benar-benar membutuhkan analisis biaya/SWOT/PEST terstruktur untuk membela pilihan itu nanti. Lihat [daftar periksa](../daftar-periksa/index.md#daftar-periksa-apakah-keputusan-ini-memerlukan-catatan-keputusan) untuk pertanyaan yang lebih luas tentang apakah suatu keputusan memerlukan catatan sama sekali, dan [panduan](../panduan/index.md#anatomi-sebuah-catatan-keputusan) untuk bagaimana kolom kedua templat saling berpadanan.

## Templat ringan

```markdown
# Judul (singkat, bentuk kini, aktif, hingga ~50 karakter)

- Status: permintaan komentar | diusulkan | diterima | ditolak | usang | digantikan
- Tanggal: YYYY-MM-DD
- Pengambil keputusan: [nama atau peran yang berwenang menerima ini]
- Pemilik: [siapa yang memelihara dan meninjau catatan ini secara berkala]

## Konteks

Jelaskan situasi dan kendala yang membuat keputusan ini diperlukan, ditulis agar pembaca yang tidak ingat rapatnya memahami mengapa pertanyaan itu muncul.

## Opsi yang dipertimbangkan

Daftarkan alternatif yang realistis, termasuk "tidak melakukan apa-apa" bila relevan, sebagai fakta dan pertukaran, bukan barisan lawan semu yang membuat opsi terpilih tampak jelas benar.

## Keputusan

Nyatakan pilihan dalam bahasa yang lugas dan aktif: "Kita akan melakukan X." Bukan ringkasan pro dan kontra, melainkan pernyataan jelas tentang apa yang dipilih.

## Konsekuensi

Nyatakan apa yang berubah akibatnya: biaya, risiko, keputusan lanjutan, dan apa pun yang dilepaskan karena tidak memilih alternatif. Terbaca sebagai "kita sekarang melakukan X, bukan Y," bukan rekap pro/kontra dari keputusan yang sudah dibuat.
```

Lihat [tutorial](../tutorial/index.md) untuk panduan langkah demi langkah lengkap templat ini, dan [contoh/index.md](../contoh/index.md) untuk contoh yang sudah terisi.

## Templat komprehensif

```markdown
# Judul (singkat, bentuk kini, aktif, hingga ~50 karakter)

- Status: permintaan komentar | diusulkan | diterima | ditolak | usang | digantikan
- Tanggal: YYYY-MM-DD
- Pengambil keputusan: [nama atau peran yang berwenang menerima ini]
- Pemilik: [siapa yang memelihara dan meninjau catatan ini secara berkala]

Ringkasan: satu atau dua kalimat tentang posisi saat ini dan kebutuhan yang masih terbuka.

## Masalah

Jelaskan masalah yang ingin Anda tangani. Jangan sisakan pertanyaan tentang mengapa Anda menangani masalah ini sekarang.

Ikuti pendekatan minimalis. Tangani hanya masalah yang perlu ditangani pada berbagai titik dalam siklus hidup.

Anda mungkin ingin menambahkan informasi pengelompokan, seperti tag, kata kunci, tautan basis pengetahuan, dan sebagainya.

## Asumsi

Jelaskan asumsi mendasar dalam lingkungan tempat Anda membuat keputusan.

Pastikan untuk membahas atribut kualitas yang relevan, alias persyaratan lintas fungsi.

Contoh asumsi dapat menyangkut lingkup, biaya, jadwal, teknologi, ketersediaan sumber daya, kebutuhan kualitas layanan, perjanjian tingkat layanan, dan sebagainya.

Perhatikan bahwa kendala lingkungan (seperti standar teknologi yang diterima, arsitektur perusahaan, pola yang umum digunakan, dan sebagainya) dapat membatasi opsi yang Anda pertimbangkan.

## Kendala

Catat kendala tambahan terhadap lingkungan yang mungkin ditimbulkan keputusan ini.

Pastikan untuk membahas atribut kualitas yang relevan, alias persyaratan lintas fungsi, seperti di atas.

Contoh kendala dapat menyangkut pilihan platform, pemilihan vendor, kemudahan pembatalan keputusan, dan sebagainya.

## Opsi yang dipertimbangkan (Posisi)

Daftarkan posisi, yaitu opsi layak yang sedang atau telah Anda pertimbangkan.

Gunakan fakta dan data, bukan opini. Posisi sering memerlukan penjelasan panjang, kadang bahkan model dan diagram.

Daftar ini tidak perlu lengkap; namun, Anda tidak ingin mendengar pertanyaan "Apakah Anda sudah memikirkan...?" pada tinjauan akhir, karena hal itu akan menyebabkan hilangnya kredibilitas dan mempertanyakan keputusan arsitektur lainnya.

Bagian ini juga membantu memastikan Anda telah mendengar pendapat orang lain; menyatakan pendapat lain secara eksplisit membantu melibatkan para pendukungnya dalam keputusan Anda.

### Analisis biaya (opsional)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Contoh:

- Inisiasi, seperti biaya penyiapan, waktu, dan sumber daya.

- Operasi, seperti dukungan dan pemeliharaan

- Pelatihan, seperti peningkatan keterampilan dan manajemen perubahan

- Lisensi, seperti perjanjian kontrak dan komitmen hukum

- Pengukuran, seperti bandwidth dan penggunaan CPU

### Analisis SWOT (opsional)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

- Kekuatan

- Kelemahan

- Peluang

- Ancaman

### Analisis PEST (opsional)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

- Faktor politik

- Faktor ekonomi

- Faktor sosial

- Faktor teknologi

Beberapa tim suka menambahkan ini sebagai kategori tersendiri:

- Faktor hukum - kami lebih suka memasukkannya ke faktor politik.

- Faktor regulasi - kami lebih suka memasukkannya ke faktor politik.

- Faktor lingkungan - kami lebih suka memasukkannya ke faktor ekonomi.

- Faktor demografis - kami lebih suka memasukkannya ke faktor sosial.

### Analisis lain (tambahkan ide Anda sendiri di sini)

Tambahkan ide Anda sendiri di sini...

## Pendapat

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

- Oleh tim, idealnya ditulis oleh anggota tim yang bersangkutan.

- Oleh pemangku kepentingan internal lainnya, idealnya ditulis oleh pemangku kepentingan yang bersangkutan.

- Oleh pihak eksternal, seperti penasihat, evaluator, peninjau pihak ketiga, dan sebagainya.

Untuk setiap pendapat, jelaskan dengan gamblang:

- Siapa yang memberikan pendapat

- Kandidat lain apa yang dipertimbangkan,

- Bagaimana penulis mengevaluasi kandidat?

- Mengapa penulis memilih pemenangnya?

- Apa yang terjadi sejak saat itu?

- Dengan apa yang Anda ketahui sekarang, apa yang akan Anda sarankan orang lakukan secara berbeda?

### Judul pendapat 1 (tambahkan milik Anda di sini)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Jelaskan pendapat Anda di sini.

### Judul pendapat 2 (tambahkan milik Anda di sini)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Jelaskan pendapat Anda di sini.

### Judul pendapat 3 (tambahkan milik Anda di sini)

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Jelaskan pendapat Anda di sini.

## Argumen

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Jelaskan mengapa Anda memilih suatu posisi.

Keputusan harus digerakkan oleh tujuan. Untuk menunjukkan akuntabilitas, petakan keputusan Anda secara eksplisit ke sasaran atau persyaratan.

Argumen mungkin sama pentingnya dengan keputusan itu sendiri.

Uraian ini tidak perlu lengkap; namun, Anda tidak ingin mendengar pertanyaan "Apakah Anda sudah memikirkan...?" pada tinjauan akhir, karena (seperti di atas) hal itu akan menyebabkan hilangnya kredibilitas dan mempertanyakan keputusan arsitektur lainnya.

## Implikasi

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Nyatakan implikasi keputusan Anda dengan jelas. Ini bisa sangat efektif untuk memperoleh dukungan dan membuat peta jalan eksekusi.

Misalnya, suatu keputusan mungkin menimbulkan kebutuhan untuk membuat keputusan lain, menciptakan persyaratan baru, atau mengubah persyaratan yang ada; menimbulkan kendala tambahan terhadap lingkungan; mengharuskan negosiasi ulang lingkup atau jadwal dengan pelanggan; atau memerlukan pelatihan staf tambahan.

## Keputusan terkait

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Daftarkan keputusan terkait di sini.

Kami mendapati bahwa dalam praktik, matriks keterlacakan, pohon keputusan, atau metamodel lebih berguna. Metamodel berguna untuk menunjukkan hubungan kompleks secara diagramatik (seperti model Rose).

## Persyaratan terkait

Ringkasan: jelaskan singkat bagian ini, dan idealnya soroti pencilan apa pun.

Daftarkan persyaratan terkait di sini.

Kami merasa lebih nyaman merujuk pada matriks keterlacakan. Anda dapat menilai kontribusi setiap keputusan dalam memenuhi setiap persyaratan, lalu menilai seberapa baik persyaratan terpenuhi di seluruh keputusan. Jika suatu keputusan tidak berkontribusi memenuhi persyaratan, jangan buat keputusan itu.

## Artefak terkait

Daftarkan artefak terkait di sini.

Contohnya adalah dokumen lingkup, dokumen perencanaan, model proses bisnis, dan sebagainya yang terdampak keputusan ini.

## Prinsip terkait

Jika perusahaan memiliki seperangkat prinsip yang disepakati, pastikan keputusan konsisten dengan satu atau lebih darinya. Ini membantu memastikan keselarasan di seluruh domain atau sistem.

## Catatan terkait

Karena proses pengambilan keputusan dapat memakan waktu lama, kami mendapati berguna untuk mencatat catatan dan isu yang dibahas tim selama proses sosialisasi.
```
