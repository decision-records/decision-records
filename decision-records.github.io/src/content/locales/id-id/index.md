# Catatan keputusan (DR)

Catatan keputusan (DR) adalah cara untuk memulai, memperdebatkan, dan mengarsipkan pilihan penting, beserta konteks dan konsekuensinya.

Daftar isi:

- [Apa itu catatan keputusan?](#apa-itu-catatan-keputusan)
- [Templat catatan keputusan](#templat-catatan-keputusan)
- [Cara mulai menggunakan catatan keputusan](#cara-mulai-menggunakan-catatan-keputusan)
- [Mengapa catatan keputusan lebih baik daripada sekadar catatan biasa?](#mengapa-catatan-keputusan-lebih-baik-daripada-sekadar-catatan-biasa)
- [Cara mulai menggunakan catatan keputusan dengan perangkat](#cara-mulai-menggunakan-catatan-keputusan-dengan-perangkat)
- [Keterampilan pada AI](#keterampilan-pada-ai)
- [Saran untuk menulis catatan keputusan yang baik](#saran-untuk-menulis-catatan-keputusan-yang-baik)
- [Saran kerja sama tim untuk catatan keputusan](#saran-kerja-sama-tim-untuk-catatan-keputusan)
- [Pertanyaan kerja sama tim untuk catatan keputusan](#pertanyaan-kerja-sama-tim-untuk-catatan-keputusan)
- [Untuk informasi lebih lanjut](#untuk-informasi-lebih-lanjut)

Isi repositori ini:

- [panduan](panduan) - apa itu catatan keputusan, mengapa orang menggunakannya, siklus hidup, tata kelola, dan lainnya.
- [templat](templat) - templat salin-tempel dengan format Markdown dan saran langkah demi langkah.
- [tutorial](tutorial) - panduan praktis langkah demi langkah: tulis catatan keputusan pertama Anda dalam waktu kurang dari 20 menit.
- [contoh](contoh) - contoh titik awal (pekerjaan yang sedang berjalan, bukan keputusan final) di berbagai keputusan strategi, penjualan, pemasaran, produk, SDM, risiko, proyek, dan teknologi.
- [daftar periksa](daftar-periksa): daftar periksa untuk memutuskan apakah perlu menulis satu, menulisnya dengan baik, meninjaunya, dan menjalankan praktik ini di seluruh organisasi.
- [bantuan](bantuan) — FAQ, pemecahan masalah, dan glosarium untuk pertanyaan umum yang diajukan para pemimpin saat mengadopsi ini.
- [spec](https://github.com/decision-records/decision-records/tree/main/spec) — spesifikasi repositori ini: tata letak, konten, locale, situs web, dan agen.
- [locales](https://github.com/decision-records/decision-records/tree/main/locales) — konten, satu direktori per locale; `en-us` adalah sumber kebenaran bahasa Inggris.
- [skills](https://github.com/decision-records/decision-records/tree/main/skills) — Claude Skills yang menerapkan templat dan daftar periksa repositori ini di dalam asisten AI: satu untuk menulis catatan keputusan, satu untuk memelihara repositori ini.
- [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) — sumber SvelteKit 3 untuk [decision-records.github.io](https://decision-records.github.io), yang mempromosikan skills di atas.

## Apa itu catatan keputusan?

**Catatan keputusan** (DR) adalah cara untuk memulai, memperdebatkan, dan mengarsipkan pilihan penting, beserta konteks dan konsekuensinya.

**Log keputusan** (DL) adalah kumpulan semua DR yang dibuat dan dipelihara untuk suatu proyek (atau organisasi) tertentu.

**Keputusan** dalam konteks ini adalah pilihan organisasi yang menjawab suatu persyaratan signifikan.

**Persyaratan signifikan** (SR) adalah kebutuhan proyek yang berdampak terukur pada sistem proyek.

Semua istilah ini berada dalam topik **manajemen pengetahuan** (KM).

Tujuan dokumen ini adalah memberikan gambaran cepat tentang catatan keputusan.

## Catatan keputusan adalah cara kerja bagi organisasi

Di mana pun suatu pilihan sulit dibalikkan, memengaruhi orang lain, atau akan dipertanyakan nanti, pilihan itu layak mendapat catatan keputusan.

- Strategi: Masuk atau keluar pasar, pilih sikap pertumbuhan vs. profitabilitas, tetapkan taruhan 3 tahun
- Penjualan: Ubah model wilayah, pilih CRM, susun ulang kompensasi
- Pemasaran: Reposisi merek, pilih bauran saluran, pilih agensi vs. model internal
- Produk: Tetapkan model harga, pilih bangun-vs-beli, hentikan fitur atau lini produk
- Keuangan: Pilih struktur pembiayaan, tetapkan kebijakan alokasi modal
- Sumber Daya Manusia: Tetapkan kebijakan kerja jarak jauh, rancang ulang penjenjangan dan pita kompensasi
- Risiko & Hukum: Terima, mitigasi, atau transfer risiko tertentu; pilih batas konsentrasi vendor
- Operasi: Bangun vs. beli, insource vs. outsource, pilih metodologi pengiriman
- Hubungan Masyarakat: Pilih sikap komunikasi krisis, tetapkan kebijakan keterlibatan media
- Pengembangan Profesional: Tetapkan kebijakan investasi promosi atau pelatihan
- Teknologi: Pilih basis data penyedia cloud, pola integrasi, metodologi perangkat lunak

Jika Anda bisa membayangkan seseorang di tim Anda bertanya "tunggu, mengapa kita melakukannya dengan cara ini?" setahun dari sekarang, keputusan itu adalah kandidat untuk catatan keputusan.

## Templat catatan keputusan

Lihat berkas [templat](templat/index.md) kami yang menggunakan bagian-bagian utama ini:

- **Judul**: imperatif bentuk kini yang singkat, hingga 50 karakter.

- **Status**: permintaan komentar | diusulkan | diterima | ditolak | usang | digantikan

- **Masalah**: jelaskan masalah yang ingin Anda tangani, dan jangan sisakan pertanyaan tentang mengapa.

- **Asumsi**: jelaskan asumsi, premis, persyaratan lintas proyek, dan sebagainya.

- **Kendala**: catat kendala terhadap lingkungan yang mungkin ditimbulkan keputusan ini.

- **Posisi**: daftarkan opsi kandidat potensial sebagai fakta dan data, bukan opini.

- **Pendapat**: dari tim dan pemangku kepentingan, dan juga penasihat dan peninjau pihak ketiga.

- **Pilihan**: jelaskan mengapa Anda memilih suatu posisi, dengan tujuan dan akuntabilitas.

- **Implikasi**: nyatakan implikasi keputusan Anda, seperti kebutuhan perubahan apa pun.

- **Terkait**: seperti untuk referensi, pekerjaan lintas proyek, dan kebutuhan lanjutan.

## Cara mulai menggunakan catatan keputusan

Untuk mulai menggunakan catatan keputusan, bicarakan area-area ini dengan rekan tim Anda.

Identifikasi keputusan:

- Seberapa mendesak dan seberapa penting keputusan itu?

- Apakah harus dibuat sekarang, atau bisa menunggu hingga lebih banyak diketahui?

- Pengalaman pribadi maupun kolektif, serta metode dan praktik desain yang diakui, dapat membantu identifikasi keputusan.

- Idealnya pelihara daftar tugas keputusan, yang melengkapi daftar tugas produk.

Pengambilan keputusan:

- Sejumlah teknik pengambilan keputusan ada, baik yang umum maupun yang khusus perangkat lunak, misalnya pemetaan dialog.

- Pengambilan keputusan kelompok adalah topik riset yang aktif.

Pemberlakuan dan penegakan keputusan:

- Keputusan harus dikomunikasikan kepada, dan diterima oleh, pemangku kepentingan sistem yang mendanai, mengembangkan, dan mengoperasikannya.

- Gaya pengodean yang jelas secara arsitektural dan tinjauan kode yang berfokus pada perhatian dan keputusan arsitektural adalah dua praktik yang berkaitan.

- Keputusan dapat dipertimbangkan kembali ketika membuat perubahan signifikan pada sistem, seperti mengembangkan sistem, meningkatkan sistem, atau menyesuaikan sistem untuk persyaratan yang berubah.

Berbagi keputusan (opsional):

- Banyak keputusan berulang di berbagai proyek.

- Oleh karena itu, pengalaman dengan keputusan masa lalu, baik maupun buruk, dapat menjadi aset yang dapat digunakan kembali dan bernilai ketika menerapkan strategi manajemen pengetahuan yang eksplisit.

- Pengambilan keputusan kelompok adalah topik riset yang aktif.

Dokumentasi keputusan:

- Banyak templat dan perangkat ada untuk perencanaan keputusan dan pencatatan keputusan.

- Lihat komunitas agile, mis. catatan keputusan arsitektural M. Nygard.

- Lihat proses rekayasa perangkat lunak dan desain arsitektur tradisional, mis. tata letak tabel yang disarankan oleh IBM UMF dan oleh Tyree dan Akerman dari CapitalOne.

Panduan keputusan:

- Langkah-langkah di atas diadopsi dari entri Wikipedia tentang [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision)

- Sejumlah teknik pengambilan keputusan ada, baik yang umum maupun yang khusus perangkat lunak dan arsitektur perangkat lunak, misalnya pemetaan dialog.

## Mengapa catatan keputusan lebih baik daripada sekadar catatan biasa?

Catatan keputusan menambahkan sedikit struktur pada catatan bebas.

Templat catatan keputusan menambahkan daftar butir yang harus dicakup, yang berfungsi sebagai daftar periksa.

Hasil pentingnya adalah tim dapat menggunakan catatan keputusan dan templat untuk meningkatkan kerja sama tim: catatan keputusan dan templat sama-sama berfungsi sebagai daftar periksa, yang membantu tim memastikan mereka mencakup semua aspek, dan mereka berkomunikasi secara efisien dan efektif.

Keuntungan catatan keputusan cenderung tumbuh seiring ukuran tim, perluasan proyek, peluang integrasi, keterlibatan pemangku kepentingan, pemeliharaan jangka panjang, dan evolusi dari waktu ke waktu.

Misalnya, kami menggunakan catatan keputusan dengan tim besar, lintas banyak departemen, dengan banyak organisasi mitra, pada proyek multi-tahun, dan anggaran jutaan dolar. Dengan ukuran dan cakupan seperti ini, kami lebih suka menggunakan komunikasi terstruktur daripada sekadar catatan bebas.

Dalam praktiknya, kami juga suka menggunakan catatan keputusan karena mendorong lebih banyak partisipasi di antara rekan tim jarak jauh, lebih banyak komunikasi asinkron, evaluasi opsi yang lebih efisien, dan lebih banyak peringkasan ke depan. Semua aspek ini juga membantu mengorientasikan rekan tim baru karena keputusannya jelas, lengkap, ringkas, dan tercatat.

## Cara mulai menggunakan catatan keputusan dengan perangkat

Anda dapat mulai menggunakan catatan keputusan dengan perangkat dengan cara apa pun yang Anda inginkan.

Misalnya:

- Jika Anda menyukai Google Drive dan Google Docs, buat folder `decisions`, dan satu dokumen per catatan keputusan.

- Jika Anda menyukai kontrol versi kode sumber, buat direktori `decisions`, dan satu berkas teks per catatan keputusan.

- Jika Anda menyukai perangkat perencanaan proyek, seperti Atlassian Jira, gunakan pelacak perencanaan perangkat itu.

- Jika Anda menyukai wiki, seperti MediaWiki, buat wiki catatan keputusan, dengan satu halaman wiki per catatan keputusan.

## Keterampilan pada AI

Jika Anda menggunakan [Claude Code](https://claude.com/claude-code) atau agen lain yang mendukung [Claude Skills](https://code.claude.com/docs/en/skills), repositori ini menyertakan dua keterampilan pada AI di [skills](https://github.com/decision-records/decision-records/tree/main/skills):

- [decision-records-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-skill) — untuk siapa pun yang menulis catatan keputusan. Memandu apakah suatu pilihan membutuhkannya, memilih templat ringan atau komprehensif, menyusun draf, menyimpannya, dan daftar periksa sebelum publikasi.

- [decision-records-maintainer-skill](https://github.com/decision-records/decision-records/tree/main/skills/decision-records-maintainer-skill) — untuk pemelihara repositori ini sendiri: menambahkan contoh kerja, menjaga indeks contoh dan referensi silang tetap konsisten, dan konvensi berkas repositori ini.

Untuk menggunakan salah satunya, klon repositori ini dan salin folder skill yang Anda inginkan ke tempat agen Anda memuat skills proyek (untuk Claude Code, biasanya `.claude/skills/<name>` di proyek Anda sendiri), lalu minta asisten Anda menggunakannya. Lihat [decision-records.github.io/skills](https://decision-records.github.io/skills/) untuk selengkapnya, dan [decision-records.github.io](https://github.com/decision-records/decision-records/tree/main/decision-records.github.io) untuk sumber halaman itu.

## Saran untuk menulis catatan keputusan yang baik

Karakteristik catatan keputusan yang baik:

- Titik waktu - Identifikasi kapan keputusan dibuat

- Rasionalitas - Jelaskan alasan membuat keputusan tertentu itu.

- Catatan yang tidak dapat diubah - Keputusan yang dibuat dalam catatan keputusan yang telah diterbitkan sebelumnya tidak boleh diubah.

- Kekhususan - Setiap catatan keputusan harus tentang satu keputusan.

Karakteristik konteks yang baik dalam catatan keputusan:

- Jelaskan situasi organisasi Anda dan prioritas bisnis

- Sertakan alasan dan pertimbangan berdasarkan susunan sosial dan keterampilan tim Anda.

Karakteristik konsekuensi yang baik dalam catatan keputusan::

- Pendekatan yang benar - "Kita perlu mulai melakukan X alih-alih Y"

- Pendekatan yang salah - Jangan jelaskan keputusan dalam bentuk "Pro" dan "Kontra" dari AD tertentu yang telah dibuat

Catatan keputusan baru dapat menggantikan catatan keputusan sebelumnya:

- Ketika keputusan dibuat yang menggantikan atau membatalkan catatan keputusan sebelumnya, buat keputusan baru, dan rujuk keputusan lama.

## Saran kerja sama tim untuk catatan keputusan

Jika Anda mempertimbangkan menggunakan catatan keputusan bersama tim Anda, berikut saran yang kami pelajari dari bekerja dengan banyak tim.

Anda berkesempatan memimpin rekan tim Anda, dengan bersama-sama membicarakan "mengapa", alih-alih mewajibkan "apa". Misalnya, catatan keputusan adalah cara bagi tim untuk berpikir lebih cerdas dan berkomunikasi lebih baik; catatan keputusan tidak bernilai jika hanya persyaratan kerja administrasi paksaan setelah kejadian.

Beberapa tim lebih menyukai nama "keputusan" daripada singkatan "catatan keputusan". Ketika beberapa tim memakai nama direktori "decisions", seolah lampu menyala, dan tim mulai memasukkan lebih banyak informasi ke dalam direktori, seperti keputusan vendor, keputusan perencanaan, keputusan penjadwalan, dll. Semua jenis informasi ini dapat memakai templat yang sama. Kami berhipotesis bahwa orang belajar lebih cepat dengan kata ("keputusan") daripada singkatan ("catatan keputusan"), dan orang lebih termotivasi menulis dokumen pekerjaan yang sedang berjalan ketika kata "catatan" dihilangkan, dan juga sebagian pengembang dan sebagian manajer tidak menyukai kata "arsitektur".

Secara teori, ketidakberubahan itu ideal. Dalam praktik, keberubahan bekerja lebih baik bagi tim kami. Kami menyisipkan info baru ke catatan keputusan yang ada, dengan stempel tanggal, dan catatan bahwa info itu tiba setelah keputusan. Pendekatan seperti ini mengarah pada "dokumen hidup" yang dapat kami perbarui bersama. Pembaruan tipikal terjadi ketika kami mendapat informasi berkat rekan tim baru, atau penawaran baru, atau hasil nyata dari penggunaan kami, atau perubahan pihak ketiga setelah kejadian seperti kemampuan vendor, paket harga, perjanjian lisensi, dll.

## Pertanyaan kerja sama tim untuk catatan keputusan

### Siapa yang dapat membuat catatan keputusan?

Pertimbangkan area seperti orang tertentu, peran tertentu, tim tertentu, atau departemen tertentu; pertimbangkan juga apakah ada orang, peran, tim, atau departemen yang dapat memberi mandat catatan keputusan, yaitu mereka meminta satu yang akan ditulis orang lain.

Contoh jawaban: Siapa pun di organisasi kami yang telah membaca halaman README catatan keputusan arsitektur dapat mengusulkan catatan keputusan, artinya orang itu dapat mulai menulisnya, dan membagikannya dengan tim.

### Apa yang membenarkan pembuatan catatan keputusan?

Pertimbangkan area seperti cara kerja tim organisasi Anda, struktur sistem perangkat lunak Anda, koordinasi lintas tim, pemeliharaan jangka panjang, antarmuka eksternal, siapa yang ingin Anda untungkan, dan sejenisnya.

Contoh jawaban: Kami ingin membuat catatan keputusan ketika kami ingin pengembang masa depan memahami "mengapa" dari apa yang kami lakukan.

### Apa yang membenarkan tidak membuat catatan keputusan?

Pertimbangkan area seperti keputusan yang bukan tentang arsitektur, atau kecil seperti berisiko minimal atau mandiri atau satu pengembang, atau sudah sepenuhnya tercakup di tempat lain seperti oleh standar atau kebijakan atau dokumentasi, atau bersifat sementara seperti solusi sementara atau bukti konsep atau eksperimen.

Contoh jawaban: Kami ingin melewatkan catatan keputusan ketika keputusan terbatas dalam lingkup dan waktu dan risiko dan biaya, atau sudah tercakup di tempat lain.

### Apa siklus hidup catatan keputusan?

Pertimbangkan area seperti proses pembuatan, proses riset, proses pengambilan keputusan, proses implementasi, dan proses penghentian. Pertimbangkan bagaimana melacak siklus hidup catatan keputusan dari waktu ke waktu, seperti bagaimana memindahkan catatan keputusan dari satu keadaan ke keadaan berikutnya, dan juga bagaimana mengomunikasikan ini kepada pemangku kepentingan.

Contoh jawaban: Kami ingin catatan keputusan memiliki lima tahap siklus hidup: Memulai → Meneliti → Mengevaluasi → Mengimplementasikan → Memelihara → Mengakhiri.

### Apa kriteria untuk langkah siklus hidup catatan keputusan?

Pertimbangkan area seperti kriteria penerimaan untuk catatan keputusan, artinya bagaimana Anda tahu itu cukup baik untuk maju dari satu langkah siklus hidup ke berikutnya? Apakah masalahnya diartikulasikan dengan jelas? Apakah alternatif telah dipertimbangkan? Apakah pertukaran cukup dipahami dan didokumentasikan?
Apakah semua konteks yang relevan sudah ada? Apakah semua pemangku kepentingan yang relevan terlibat? Apakah semua umpan balik telah dimasukkan?

Contoh jawaban: Kami ingin catatan keputusan dipilih oleh pemangku kepentingan ketika tim aktif telah 1) menyelesaikan riset mereka, 2) menyelesaikan evaluasi mereka, 3) menerbitkan proposal catatan keputusan kepada pemangku kepentingan dengan permintaan komentar dan batas waktu satu minggu, 4) semua komentar pemangku kepentingan telah dimasukkan dan ditangani.

### Peran dan tanggung jawab apa yang berinteraksi dengan catatan keputusan?

Pertimbangkan peran seperti pengusul, peneliti, evaluator, peninjau, penyetuju, pemelihara, dan sejenisnya. Pertimbangkan tanggung jawab seperti komunikasi dengan pemangku kepentingan, memastikan ekspektasi terpenuhi, berbagi di situs web atau intranet, dan meninjau pekerjaan secara berkala dan terutama ketika perubahan yang relevan terjadi.

Contoh jawaban: Kami ingin setiap catatan keputusan selalu memiliki orang kontak utama, orang kontak sekunder, dan tim akuntabel; mereka bertanggung jawab atas komunikasi, publikasi, pemeliharaan, tinjauan berkala setidaknya setahun sekali, dan akhirnya penghentian bila diperlukan.

### Bagaimana tata kelola berinteraksi dengan catatan keputusan?

Pertimbangkan area seperti cara kerja organisasi Anda, kebutuhan kepatuhan khusus seperti aspek hukum atau sumber daya manusia, bagaimana Anda ingin menangani konsensus vs. konflik vs. eskalasi. Apakah ada area atau orang atau tim yang dapat memiliki pengaruh lebih besar daripada yang lain terkait catatan keputusan, seperti dapat menyetujuinya, atau memilihnya, atau memvetonya?

Contoh jawaban: Tata kelola catatan keputusan berada dalam urutan prioritas ini: CEO, CTO, CLO, tim yang mengimplementasikan catatan keputusan, para ahli di tim yang paling berpengetahuan tentang ADD. Tidak ada orang lain yang memiliki tata kelola kecuali dijelaskan dalam catatan keputusan.

### Prinsip apa yang berinteraksi dengan catatan keputusan?

Pertimbangkan area seperti cara kerja organisasi Anda yang mencakup bergerak cepat vs. bergerak lambat, untuk konsensus keputusan vs. konflik keputusan, dan untuk preferensi risiko vs. preferensi keselamatan, diskusi publik vs. diskusi privat, dan sejenisnya.

Contoh jawaban: Kami menggunakan prinsip kepemimpinan bias untuk bertindak, tidak setuju-dan-berkomitmen, perkiraan 70% sudah cukup baik untuk keputusan yang mudah dibalikkan dan mudah diisolasi, dan cara kerja publik dengan pengecualian informasi rahasia seperti dijelaskan dalam perjanjian kerahasiaan organisasi kami.

## Untuk informasi lebih lanjut

Pengantar:

- [Architectural decision (wikipedia.org)](https://wikipedia.org/wiki/Architectural_decision)

- [Architecturally significant requirements (wikipedia.org)](https://wikipedia.org/wiki/Architecturally_significant_requirements)

Templat:

- [Documenting architecture decisions - Michael Nygard (thinkrelevance.com)](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)

- [Markdown Architectural Decision Records (adr.github.io)](https://adr.github.io/madr/)

- [Template for documenting architecture alternatives and decisions (stackoverflow.com)](http://stackoverflow.com/questions/7104735/template-for-documenting-architecture-alternatives-and-decisions)

Mendalam:

- [ADMentor XML project (github.com)](https://github.com/IFS-HSR/ADMentor)

- [Architectural Decision Guidance across Projects: Problem Space Modeling, Decision Backlog Management and Cloud Computing Knowledge (ifs.hsr.ch)](https://www.ifs.hsr.ch/fileadmin/user_upload/customers/ifs.hsr.ch/Home/projekte/ADMentor-WICSA2015ubmissionv11nc.pdf)

- [The Decision View's Role in Software Architecture Practice (computer.org)](https://www.computer.org/csdl/mags/so/2009/02/mso2009020036-abs.html)

- [Documenting Software Architectures: Views and Beyond (resources.sei.cmu.edu)](http://resources.sei.cmu.edu/library/asset-view.cfm?assetID=30386)

- [Architecture Decisions: Demystifying Architecture (utdallas.edu)](https://www.utdallas.edu/~chung/SA/zz-Impreso-architecture_decisions-tyree-05.pdf)

- [ThoughtWorks Technology Radar: Lightweight Architecture Decision Records (thoughtworks.com)](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

- [A Skeptic’s Guide to Software Architecture Decisions (infoq.com)](https://www.infoq.com/articles/architecture-skeptics-guide/)

- [Architectural Decisions — The Making Of](https://ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html)

- [Architectural Retrospectives: the Key to Getting Better at Architecting](https://www.infoq.com/articles/architectural-retrospectives/)

- [Software Architecture Monday with Mark Richards](https://developertoarchitect.com/lessons/) - pelajaran arsitektur perangkat lunak bulanan gratis

Perangkat:

- [Command-line tools for working with Architecture Decision Records](https://github.com/npryce/adr-tools)

- [Command line tools with python - by Victor Sluiter](https://bitbucket.org/tinkerer_/adr-tools-python/src/master/)

- [Architectural Design Decision Support Framework (ADvISE)](https://swa.univie.ac.at/Software_Architecture/research-projects/architectural-design-decision-support-framework-advise/)

Panduan khusus perusahaan:

- [Amazon: AWS Prescriptive Guidance: ADR Process](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html)

- [GitHub: ADR GitHub organization](https://adr.github.io/)

- [RedHat: Why you should use ADRs](https://www.redhat.com/architect/architecture-decision-records)

Contoh:

- [Repository of Architecture Decision Records made for the Arachne Framework](https://github.com/arachne-framework/architecture)

Video:

- [The C4 model for visualising software architecture - by Simon Brown](https://www.youtube.com/watch?v=KvoBrUd1-5E)

Podcast:

- [Software Architecture Bookclub Podcast](https://www.developertoarchitect.com/bookclub-podcast.html)

Buku:

- [Software Architecture Metrics: Case Studies to Improve the Quality of Your Architecture - by Christian Ciceri, Dave Farley, Neal Ford, Andrew Harmel-Law, Michael Keeling and Carola Lilienthal](https://www.amazon.com/Software-Architecture-Metrics-Christian-Ciceri-ebook/dp/B0B1NZ8Z5V)

- [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives - by Nick Rozanski and Eoin Woods](https://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/032171833X)

- [Software Architecture in Practice (SEI Series in Software Engineering)](https://www.amazon.com/Software-Architecture-Practice-SEI-Engineering-ebook/dp/B094CPJ96B)

- [Documenting Software Architectures: Views and Beyond (SEI Series in Software Engineering)](https://www.amazon.com/Documenting-Software-Architectures-Beyond-Engineering-ebook/dp/B0046XS3RO)

- [The Software Architect Elevator: Redefining the Architect's Role in the Digital Enterprise](https://www.amazon.com/Software-Architect-Elevator-Redefining-Architects-ebook/dp/B086WQ9XL1)

- [Fundamentals of Software Architecture: An Engineering Approach - by Mark Richards and Neal Ford](https://www.amazon.com/Fundamentals-Software-Architecture-Engineering-Approach-ebook/dp/B0849MPK73)

- [Building Evolutionary Architectures - by Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage](https://www.amazon.com/Building-Evolutionary-Architectures-Neal-Ford-ebook/dp/B0BN4T1P27?crid=37FA31IFLAS0Z)

- [Foundations of Decision Analysis by Ronald Howard and Ali Abbas](https://www.amazon.com/Foundations-Decision-Analysis-Ronald-Howard-ebook/dp/B00SZECJTI?crid=14BK5SDP76UN6)

- [Head First Software Architecture - by Raju Gandhi, Neal Ford and Mark Richards](https://www.amazon.com/Head-First-Software-Architecture-Architectural-ebook/dp/B0CW1JMNF2)

- [Communication Patterns: A Guide for Developers and Architects - by Jacqui Read](https://www.amazon.com/Communication-Patterns-Guide-Developers-Architects/dp/1098140540)

Lihat juga:

- REMAP (Representation and Maintenance of Process Knowledge)

- DRL (Decision Representation Language)

- IBIS (Issue-Based Information System)

- QOC (Questions, Options, and Criteria)

- IBM’s e-Business Reference Architecture Framework
