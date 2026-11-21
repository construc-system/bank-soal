// ======================================================================
//  MODUL GAMBAR  -  soal/gambar.js
//  Satu-satunya tempat untuk mengisi URL gambar soal.
// ======================================================================
//  CARA PAKAI
//  1. Cari entri gambar yang url-nya masih kosong ('').
//  2. Baca bagian "isi" (apa yang harus tampak) dan "jangan" (yang harus dihindari).
//     Bagian "soal" dan "jawaban" ditampilkan agar kamu tahu gambar dipakai untuk apa.
//  3. Cari / buat gambarnya, upload, lalu tempel link-nya ke  url: '...'
//  4. Simpan. File soal (pkn-a.js, mat-a.js, dst.) tidak perlu diubah:
//     baris GAMBAR: di file soal hanya berisi ID (contoh: mat-a-5) yang dicocokkan ke sini.
//
//  SYARAT URL
//  - Harus https:// dan langsung menuju file gambar (berakhiran .png / .jpg / .webp),
//    BUKAN link halaman web. Cek: kalau link dibuka di tab baru yang tampil hanya gambarnya.
//  - Hosting yang aman: GitHub (link raw / github.io), Imgur (i.imgur.com/xxx.png),
//    ImgBB, Cloudinary, atau upload.wikimedia.org untuk foto dari Wikimedia Commons.
//  - Hindari link Google Drive / Google Foto karena sering gagal tampil.
//
//  Kalau url dikosongkan, di layar soal muncul kotak abu-abu "Gambar belum diisi (ID ...)".
//
//  Soal yang punya gambar (total 40 gambar):
//    PPKn A & B       : no. 7 dan 38
//    Matematika A & B : no. 1, 3, 5, 6, 9, 21, 27, 32, 34
//    Bahasa Jawa A & B: no. 7 dan 28
//    PJOK A & B       : no. 3, 7, 11, 14, 16, 29, 34
//    (Bahasa Indonesia dan IPAS tidak memakai gambar)
//
//  Kolom "soal" dan "jawaban" di bawah disalin otomatis dari file soal, jadi
//  gambar yang kamu cari harus cocok dengan soal + kunci jawaban itu.
// ======================================================================
window.GAMBAR_DATA = window.GAMBAR_DATA || {};
Object.assign(window.GAMBAR_DATA, {

  // ============================== PPKN - MODUL A ==============================
  "pkn-a-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vqEG97F3YFPQZS-nyA5wt3Txw3kghFgFTw4pU1eumw&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Foto Mr. Muhammad Yamin",
    mapel: "PPKn", modul: "A", no: 7,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar tokoh di atas! Tokoh perumus Pancasila tersebut menyampaikan gagasan dasar negara dalam sidang pertama BPUPKI pada tanggal...",
    jawaban: "A. 29 Mei 1945",
    isi: [
      "Potret Mr. Muhammad Yamin (perumus Pancasila yang menyampaikan gagasan dasar negara pada 29 Mei 1945).",
      "Hanya SATU orang dalam foto, wajah terlihat jelas (menghadap depan atau sedikit menyamping).",
      "Foto hitam putih / foto lama boleh, asal wajah masih jelas dan tidak buram.",
    ],
    jangan: [
      "Nama tokoh TIDAK boleh tertulis di foto (caption, watermark, atau teks lain). Kalau ada, crop atau tutup. Soal ini menguji pengenalan wajah tokoh.",
    ],
    tips: [
      "Pastikan orangnya BENAR. Cocokkan dengan minimal 2 sumber tepercaya, karena tokoh BPUPKI sering tertukar satu sama lain.",
      "Utamakan foto berlisensi bebas (Wikimedia Commons) atau arsip resmi. Di Wikimedia: klik foto, pilih Original file, lalu salin link yang berawalan upload.wikimedia.org.",
    ],
    kataKunci: [
      "Muhammad Yamin potret",
      "Mohammad Yamin Wikimedia Commons",
      "Muhammad Yamin tokoh BPUPKI foto",
    ],
  },
  "pkn-a-38": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6j1oYrznwTLX-vDo62feMEHe3TWcHloc4ZqNSiRvn9g&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Pengendara motor menerobos lampu merah di persimpangan",
    mapel: "PPKn", modul: "A", no: 38,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Gambar menunjukkan seorang pengendara motor menerobos lampu merah di persimpangan jalan. Jenis norma yang dilanggar adalah...",
    jawaban: "D. Norma hukum",
    isi: [
      "Persimpangan jalan dengan lampu lalu lintas yang MENYALA MERAH dan terlihat jelas.",
      "Ada SATU sepeda motor beserta pengendaranya yang tetap melaju melewati garis henti / zebra cross saat lampu merah.",
      "Kalau ada kendaraan lain, sebaiknya tampak berhenti di belakang garis henti, supaya jelas siapa yang melanggar.",
      "Foto asli maupun ilustrasi kartun boleh. Pilih yang ramah anak SD.",
    ],
    jangan: [
      "Tulisan apa pun yang membocorkan jawaban (contoh: 'pelanggaran', 'norma hukum', 'dilarang').",
      "Gambar kecelakaan, darah, atau korban.",
      "Plat nomor atau wajah pengendara yang terbaca jelas (privasi).",
    ],
    kataKunci: [
      "motorcycle running red light intersection illustration",
      "pengendara motor terobos lampu merah ilustrasi",
      "red light violation motorbike cartoon",
    ],
  },

  // ============================== PPKN - MODUL B ==============================
  "pkn-b-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6F-YJLJduMaWPNm29GVr97gJ7GHfu1KxcPpm81ktHQ&s',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Foto Prof. Dr. Soepomo",
    mapel: "PPKn", modul: "B", no: 7,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar tokoh di atas! Tokoh perumus Pancasila tersebut menyampaikan gagasan dasar negara dalam sidang pertama BPUPKI pada tanggal...",
    jawaban: "B. 31 Mei 1945",
    isi: [
      "Potret Prof. Dr. Soepomo (perumus Pancasila yang menyampaikan gagasan dasar negara pada 31 Mei 1945).",
      "Hanya SATU orang dalam foto, wajah terlihat jelas (menghadap depan atau sedikit menyamping).",
      "Foto hitam putih / foto lama boleh, asal wajah masih jelas dan tidak buram.",
    ],
    jangan: [
      "Nama tokoh TIDAK boleh tertulis di foto (caption, watermark, atau teks lain). Kalau ada, crop atau tutup. Soal ini menguji pengenalan wajah tokoh.",
    ],
    tips: [
      "Pastikan orangnya BENAR. Cocokkan dengan minimal 2 sumber tepercaya, karena tokoh BPUPKI sering tertukar satu sama lain.",
      "Utamakan foto berlisensi bebas (Wikimedia Commons) atau arsip resmi. Di Wikimedia: klik foto, pilih Original file, lalu salin link yang berawalan upload.wikimedia.org.",
    ],
    kataKunci: [
      "Soepomo potret",
      "Raden Soepomo Wikimedia Commons",
      "Prof Soepomo tokoh BPUPKI foto",
    ],
  },
  "pkn-b-38": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWwi0a-7wy9J655eKbgT00ao4Mk_VzdgwMO4WunHdXQUR6F8l',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Remaja berbicara kasar dan tidak memberi tempat duduk kepada nenek di bus",
    mapel: "PPKn", modul: "B", no: 38,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Gambar menunjukkan seorang remaja berbicara kasar dan tidak mau memberi tempat duduk kepada seorang nenek di dalam bus. Jenis norma yang dilanggar adalah...",
    jawaban: "A. Norma kesopanan",
    isi: [
      "Suasana di dalam bus / angkutan umum.",
      "Seorang remaja duduk dengan sikap acuh dan terlihat berbicara kasar (misalnya wajah ketus / membentak, boleh pakai balon ucapan berisi simbol seperti !?# saja).",
      "Seorang nenek (lansia, rambut putih, boleh membawa tongkat) berdiri berpegangan, sedangkan remaja tersebut tetap duduk dan tidak mau memberi tempat.",
      "Ilustrasi kartun sangat disarankan supaya ramah anak SD.",
    ],
    jangan: [
      "Kata-kata kasar yang ditulis nyata di gambar (pakai simbol saja).",
      "Kekerasan fisik terhadap nenek.",
      "Tulisan yang membocorkan jawaban (contoh: 'norma kesopanan', 'tidak sopan').",
    ],
    kataKunci: [
      "remaja tidak memberi tempat duduk nenek bus ilustrasi",
      "teenager refusing seat elderly woman bus cartoon",
      "tidak menghormati orang tua di bus kartun",
    ],
  },

  // ============================== MATEMATIKA - MODUL A ==============================
  "mat-a-1": {
    url: 'gambar/mat-a-1.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Tiga pita P, Q, R (perbandingan pecahan)",
    mapel: "Matematika", modul: "A", no: 1,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Tiga pita P, Q, dan R sama panjang dan dibagi sama besar. Bagian pita yang berwarna menunjukkan bagian yang terpakai. Perhatikan pernyataan berikut! (1) Bagian berwarna pita P sama dengan 3/4 bagian. (2) Bagian berwarna pita Q lebih besar daripada pita P. (3) Bagian berwarna pita R sama dengan 1/2 bagian. (4) Bagian berwarna pita Q sama dengan 2/3 bagian. Pernyataan yang benar ditunjukkan oleh nomor...",
    jawaban: "D. (1), (3), dan (4)",
    isi: [
      "TIGA pita (persegi panjang) bertumpuk atas-bawah, sama panjang, diberi huruf P, Q, R di sisi kiri (urut dari atas).",
      "Setiap pita dibagi menjadi 12 kotak sama besar (garis pemisah terlihat).",
      "Pita P: 9 kotak berwarna (dari kiri), 3 kotak putih.",
      "Pita Q: 8 kotak berwarna (dari kiri), 4 kotak putih.",
      "Pita R: 6 kotak berwarna (dari kiri), 6 kotak putih.",
      "Warna isi sama untuk ketiga pita.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-a-3": {
    url: 'gambar/mat-a-3.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Lima gelas berisi sirup",
    mapel: "Matematika", modul: "A", no: 3,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Seluruh sirup pada gambar akan dituang ke dalam satu wadah besar. Banyak sirup di dalam wadah adalah... liter",
    jawaban: "D. 3 3/4",
    isi: [
      "LIMA gelas identik, berjajar satu baris.",
      "Tiap gelas diberi garis skala sehingga terbagi 4 bagian sama tinggi.",
      "Di tiap gelas, 3 bagian terisi sirup (misal merah) dan 1 bagian paling atas kosong.",
      "Di bawah SETIAP gelas ada tulisan: 3/4 liter.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Tulisan jumlah total sirup (misal 'total', '3 3/4').",
    ],
  },
  "mat-a-5": {
    url: 'gambar/mat-a-5.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Empat kartu bilangan desimal",
    mapel: "Matematika", modul: "A", no: 5,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Urutan bilangan pada kartu dari yang terkecil sampai terbesar adalah...",
    jawaban: "D. 0,405; 0,45; 0,504; 0,54",
    isi: [
      "EMPAT kartu persegi panjang berjajar dari kiri ke kanan dengan isi PERSIS berurutan: 0,45 | 0,405 | 0,54 | 0,504.",
      "Gunakan tanda KOMA (bukan titik) pada semua bilangan.",
      "Ukuran huruf besar dan sama di semua kartu.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Nomor, huruf, atau panah urutan pada kartu.",
    ],
  },
  "mat-a-6": {
    url: 'gambar/mat-a-6.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Lingkaran 6 bagian, 4 diarsir",
    mapel: "Matematika", modul: "A", no: 6,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Pecahan yang senilai dengan bagian berwarna pada gambar adalah...",
    jawaban: "D. 2/3",
    isi: [
      "SATU lingkaran dibagi menjadi 6 juring sama besar.",
      "4 juring diarsir / diwarnai, 2 juring dibiarkan putih.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-a-9": {
    url: 'gambar/mat-a-9.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Tiga piring berisi kue",
    mapel: "Matematika", modul: "A", no: 9,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Rasio satuan banyak kue terhadap banyak piring adalah...",
    jawaban: "B. 4 kue untuk setiap 1 piring",
    isi: [
      "TIGA piring berjajar satu baris.",
      "Setiap piring berisi tepat 4 kue yang sama jenisnya (total 12 kue), tersusun rapi agar mudah dihitung.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka atau tulisan apa pun di gambar.",
    ],
  },
  "mat-a-21": {
    url: 'gambar/mat-a-21.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Penawaran pita merah dan pita biru",
    mapel: "Matematika", modul: "A", no: 21,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Perhatikan pernyataan berikut! (1) Harga pita merah Rp 5.000 per meter. (2) Harga pita biru Rp 4.000 per meter. (3) Pita merah lebih murah per meter daripada pita biru. (4) Pita biru lebih murah per meter daripada pita merah. Pernyataan yang benar ditunjukkan oleh nomor...",
    jawaban: "B. (1), (2), dan (4)",
    isi: [
      "DUA kartu penawaran berdampingan, tiap kartu ada gambar gulungan pita.",
      "Kartu kiri: gambar pita MERAH, tulisan 'Pita Merah', '3 meter', 'Rp 15.000'.",
      "Kartu kanan: gambar pita BIRU, tulisan 'Pita Biru', '5 meter', 'Rp 20.000'.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Harga per meter (ini yang harus dihitung murid).",
    ],
  },
  "mat-a-27": {
    url: 'gambar/mat-a-27.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Pizza 8 potong, 3 sudah dimakan",
    mapel: "Matematika", modul: "A", no: 27,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar pizza di atas! Potongan pizza yang berwarna abu-abu sudah dimakan. Pecahan yang menyatakan bagian pizza yang tersisa adalah...",
    jawaban: "C. 5/8",
    isi: [
      "SATU pizza berbentuk lingkaran dibagi 8 potong sama besar.",
      "3 potong berwarna ABU-ABU (sudah dimakan), 5 potong berwarna normal (utuh).",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-a-32": {
    url: 'gambar/mat-a-32.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Infografik sampah plastik per kelas",
    mapel: "Matematika", modul: "A", no: 32,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan infografik di atas! Urutan kelas dari yang paling sedikit sampai paling banyak mengumpulkan sampah plastik beserta alasannya adalah...",
    jawaban: "B. Kelas 6B, Kelas 6D, Kelas 6A, Kelas 6C, karena 18 kg, 21 kg, 24 kg, 30 kg",
    isi: [
      "Diagram batang vertikal berjudul: Sampah Plastik yang Terkumpul (kg).",
      "EMPAT batang dengan urutan tampil: Kelas 6A = 24, Kelas 6B = 18, Kelas 6C = 30, Kelas 6D = 21.",
      "Angka (24, 18, 30, 21) tertulis di atas masing-masing batang. Sumbu mendatar berisi nama kelas, sumbu tegak berisi skala kg.",
      "Tampilan boleh dibuat menarik (ikon botol, warna), asalkan angkanya terbaca jelas.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Peringkat / urutan juara atau keterangan 'terbanyak' dan 'tersedikit'.",
    ],
  },
  "mat-a-34": {
    url: 'gambar/mat-a-34.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Dua paket susu kotak",
    mapel: "Matematika", modul: "A", no: 34,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Bu Dewi ingin membeli susu kotak dengan harga yang lebih hemat. Pilihan dan alasan yang tepat adalah...",
    jawaban: "A. Merek Q, karena harga per kotak Rp 4.200 lebih murah daripada Rp 4.500",
    isi: [
      "DUA paket susu kotak berdampingan, masing-masing dengan label harga.",
      "Paket kiri: tulisan 'Merek P', 'isi 6 kotak', 'Rp 27.000'.",
      "Paket kanan: tulisan 'Merek Q', 'isi 10 kotak', 'Rp 42.000'.",
      "Boleh ditambah gambar kotak susu sebanyak isinya (6 dan 10), asalkan jumlahnya persis.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Harga per kotak dan tulisan 'lebih hemat' / 'termurah'.",
    ],
  },

  // ============================== MATEMATIKA - MODUL B ==============================
  "mat-b-1": {
    url: 'gambar/mat-b-1.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Tiga batang X, Y, Z (perbandingan pecahan)",
    mapel: "Matematika", modul: "B", no: 1,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Tiga batang X, Y, dan Z sama panjang dan dibagi sama besar. Bagian batang yang berwarna menunjukkan bagian yang sudah dicat. Perhatikan pernyataan berikut! (1) Bagian berwarna batang X sama dengan 7/10 bagian. (2) Bagian berwarna batang Y sama dengan 1/2 bagian. (3) Bagian berwarna batang Z lebih besar daripada batang Y. (4) Bagian berwarna batang Z sama dengan 4/5 bagian. Pernyataan yang benar ditunjukkan oleh nomor...",
    jawaban: "C. (1) dan (2)",
    isi: [
      "TIGA batang (persegi panjang) bertumpuk atas-bawah, sama panjang, diberi huruf X, Y, Z di sisi kiri (urut dari atas).",
      "Setiap batang dibagi menjadi 10 kotak sama besar (garis pemisah terlihat).",
      "Batang X: 7 kotak berwarna (dari kiri), 3 kotak putih.",
      "Batang Y: 5 kotak berwarna (dari kiri), 5 kotak putih.",
      "Batang Z: 4 kotak berwarna (dari kiri), 6 kotak putih.",
      "Warna isi sama untuk ketiga batang.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-b-3": {
    url: 'gambar/mat-b-3.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Empat botol berisi jus",
    mapel: "Matematika", modul: "B", no: 3,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Seluruh jus pada gambar akan dituang ke dalam satu teko besar. Banyak jus di dalam teko adalah... liter",
    jawaban: "A. 3 1/3",
    isi: [
      "EMPAT botol identik, berjajar satu baris.",
      "Tiap botol diberi garis skala sehingga terbagi 6 bagian sama tinggi.",
      "Di tiap botol, 5 bagian terisi jus (misal oranye) dan 1 bagian paling atas kosong.",
      "Di bawah SETIAP botol ada tulisan: 5/6 liter.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Tulisan jumlah total jus (misal 'total', '3 1/3').",
    ],
  },
  "mat-b-5": {
    url: 'gambar/mat-b-5.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Empat kartu bilangan desimal",
    mapel: "Matematika", modul: "B", no: 5,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Urutan bilangan pada kartu dari yang terbesar sampai terkecil adalah...",
    jawaban: "C. 0,72; 0,702; 0,27; 0,207",
    isi: [
      "EMPAT kartu persegi panjang berjajar dari kiri ke kanan dengan isi PERSIS berurutan: 0,27 | 0,72 | 0,207 | 0,702.",
      "Gunakan tanda KOMA (bukan titik) pada semua bilangan.",
      "Ukuran huruf besar dan sama di semua kartu.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Nomor, huruf, atau panah urutan pada kartu.",
    ],
  },
  "mat-b-6": {
    url: 'gambar/mat-b-6.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Batang 10 kotak, 6 diarsir",
    mapel: "Matematika", modul: "B", no: 6,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Pecahan yang senilai dengan bagian berwarna pada gambar adalah...",
    jawaban: "C. 3/5",
    isi: [
      "SATU persegi panjang dibagi menjadi 10 kotak sama besar (satu baris).",
      "6 kotak diarsir / diwarnai (dari kiri), 4 kotak dibiarkan putih.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-b-9": {
    url: 'gambar/mat-b-9.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Lima kotak pensil berisi pensil warna",
    mapel: "Matematika", modul: "B", no: 9,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Rasio satuan banyak pensil terhadap banyak kotak pensil adalah...",
    jawaban: "A. 6 pensil untuk setiap 1 kotak",
    isi: [
      "LIMA kotak pensil berjajar (boleh dua baris, tapi mudah dihitung).",
      "Setiap kotak berisi tepat 6 pensil warna (total 30 pensil), pensil terlihat jelas satu per satu.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka atau tulisan apa pun di gambar.",
    ],
  },
  "mat-b-21": {
    url: 'gambar/mat-b-21.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Penawaran beras kemasan X dan Y",
    mapel: "Matematika", modul: "B", no: 21,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Perhatikan pernyataan berikut! (1) Harga beras kemasan X Rp 13.000 per kg. (2) Beras kemasan X lebih murah per kg daripada kemasan Y. (3) Harga beras kemasan Y Rp 12.000 per kg. (4) Beras kemasan Y lebih murah per kg daripada kemasan X. Pernyataan yang benar ditunjukkan oleh nomor...",
    jawaban: "A. (1), (3), dan (4)",
    isi: [
      "DUA kartu penawaran berdampingan, tiap kartu ada gambar karung / kemasan beras.",
      "Kartu kiri: tulisan 'Kemasan X', '4 kg', 'Rp 52.000'.",
      "Kartu kanan: tulisan 'Kemasan Y', '6 kg', 'Rp 72.000'.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Harga per kg (ini yang harus dihitung murid).",
    ],
  },
  "mat-b-27": {
    url: 'gambar/mat-b-27.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Batang cokelat 12 kotak, 5 sudah dimakan",
    mapel: "Matematika", modul: "B", no: 27,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar batang cokelat di atas! Kotak cokelat yang berwarna abu-abu sudah dimakan Raka. Pecahan yang menyatakan bagian cokelat yang tersisa adalah...",
    jawaban: "D. 7/12",
    isi: [
      "SATU batang cokelat persegi panjang terdiri atas 12 kotak sama besar (susunan 3 baris x 4 kolom).",
      "5 kotak berwarna ABU-ABU (sudah dimakan), 7 kotak berwarna cokelat (utuh).",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Angka pecahan, persen, atau jawaban apa pun yang tertulis di gambar (kecuali yang disebut tegas di atas).",
    ],
  },
  "mat-b-32": {
    url: 'gambar/mat-b-32.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Infografik buku yang dibaca siswa",
    mapel: "Matematika", modul: "B", no: 32,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan infografik di atas! Urutan siswa dari yang paling banyak sampai paling sedikit membaca buku beserta alasannya adalah...",
    jawaban: "A. Cinta, Ani, Dodi, Budi, karena 17 buku, 14 buku, 12 buku, 9 buku",
    isi: [
      "Diagram batang horizontal berjudul: Banyak Buku yang Dibaca dalam Sebulan.",
      "EMPAT batang dengan urutan tampil: Ani = 14, Budi = 9, Cinta = 17, Dodi = 12.",
      "Angka (14, 9, 17, 12) tertulis di ujung masing-masing batang. Nama siswa di sisi kiri.",
      "Tampilan boleh dibuat menarik (ikon buku, warna), asalkan angkanya terbaca jelas.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Peringkat / urutan juara atau keterangan 'terbanyak' dan 'tersedikit'.",
    ],
  },
  "mat-b-34": {
    url: 'gambar/mat-b-34.svg',   // SVG buatan sendiri, file ada di folder gambar/
    judul: "Dua botol sabun cair",
    mapel: "Matematika", modul: "B", no: 34,
    cara: "SUDAH DIBUAT (SVG di folder gambar/)",
    soal: "Perhatikan gambar di atas! Bu Lina ingin membeli sabun cair dengan harga yang lebih hemat. Pilihan dan alasan yang tepat adalah...",
    jawaban: "B. Botol Q, karena harga per mililiter Rp 45 lebih murah daripada Rp 50",
    isi: [
      "DUA botol sabun cair berdampingan, masing-masing dengan label harga.",
      "Botol kiri: tulisan 'Botol P', '250 ml', 'Rp 12.500'.",
      "Botol kanan: tulisan 'Botol Q', '400 ml', 'Rp 18.000'.",
      "Botol Q harus tampak lebih besar daripada botol P.",
      "Latar putih bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
      "Semua jumlah kotak / bagian / angka HARUS PERSIS sama dengan yang tertulis di bawah ini. Satu kotak saja salah, jawaban soal ikut salah.",
    ],
    jangan: [
      "Harga per ml dan tulisan 'lebih hemat' / 'termurah'.",
    ],
  },

  // ============================== BAHASA JAWA - MODUL A ==============================
  "baja-a-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOYWajx8junh0QRIRGzeR-rxgfaj4TCvM90g0bCrGYg&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tokoh wayang Semar (Punakawan)",
    mapel: "Bahasa Jawa", modul: "A", no: 7,
    cara: "CARI DI INTERNET",
    soal: "Waspadakna gambar paraga Punakawan ing dhuwur! Ciri-ciri fisik kang diduweni dening tokoh ing gambar kasebut yaiku...",
    jawaban: "C. Awak lemu, weteng buncit, lan rambute kuncung",
    isi: [
      "SATU tokoh wayang Punakawan, yaitu SEMAR, terlihat utuh dan jelas (wayang kulit atau ilustrasi kartun boleh).",
      "Ciri yang HARUS tampak jelas: badan gemuk / bulat, perut buncit, dan rambut kuncung di kepala.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Nama tokoh TIDAK boleh tertulis di gambar (caption, watermark, atau teks lain). Soal ini menguji pengenalan tokoh dari bentuknya.",
      "Tokoh lain di dalam gambar yang sama. Hanya Semar saja, supaya tidak membingungkan.",
      "Gambar Gareng, Petruk, atau Bagong, dan gambar gabungan semua Punakawan.",
    ],
    tips: [
      "Pastikan tokohnya benar-benar Semar. Cocokkan dengan minimal 2 sumber, karena Semar dan Bagong sama-sama bertubuh gemuk.",
      "Cari di Wikimedia Commons atau situs budaya Jawa agar lisensinya jelas.",
    ],
    kataKunci: [
      "Semar wayang kulit",
      "Semar Punakawan wayang illustration",
      "Semar wayang Wikimedia Commons",
    ],
  },
  "baja-a-28": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSoC68igqzp1BTWkE48zcw0F4A7Le8AV0Sw2HkdPFKQ&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tokoh wayang Raden Arjuna (Pandhawa)",
    mapel: "Bahasa Jawa", modul: "A", no: 28,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar tokoh Pandhawa ing dhuwur! Tokoh kasebut yaiku Raden Arjuna. Kesatriyan/papan dununge Raden Arjuna yaiku ing...",
    jawaban: "B. Madukara",
    isi: [
      "SATU tokoh wayang Pandhawa, yaitu RADEN ARJUNA (Janaka), terlihat utuh dan jelas (wayang kulit atau ilustrasi kartun boleh).",
      "Ciri yang sebaiknya tampak: ksatria berwajah halus dan bertubuh ramping, boleh membawa busur dan panah.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan nama kesatriyan / tempat tinggal (Madukara, Jodhipati, Ngamarta, Sawojajar). Itu adalah jawaban soal.",
      "Tokoh Pandhawa lain di dalam gambar yang sama (Werkudara, Puntadewa, Nakula, Sadewa).",
    ],
    tips: [
      "Nama 'Raden Arjuna' sudah disebut di soal, jadi boleh tertulis di gambar. Tulisan lain tetap tidak boleh.",
      "Cocokkan dengan minimal 2 sumber agar tidak tertukar dengan Pandhawa lain.",
    ],
    kataKunci: [
      "Arjuna wayang kulit",
      "Raden Arjuna Pandawa wayang",
      "Arjuna wayang Wikimedia Commons",
    ],
  },

  // ============================== BAHASA JAWA - MODUL B ==============================
  "baja-b-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcFA5wYTz-V7sJBY6pdPsfgaw7DMqKIVm-f-aCf6xIXA&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tokoh wayang Petruk (Punakawan)",
    mapel: "Bahasa Jawa", modul: "B", no: 7,
    cara: "CARI DI INTERNET",
    soal: "Waspadakna gambar paraga Punakawan ing dhuwur! Ciri-ciri fisik kang paling khas saka tokoh ing gambar kasebut yaiku...",
    jawaban: "B. Awak dhuwur lan irung dawa banget",
    isi: [
      "SATU tokoh wayang Punakawan, yaitu PETRUK, terlihat utuh dan jelas (wayang kulit atau ilustrasi kartun boleh).",
      "Ciri yang HARUS tampak jelas: badan tinggi langsing dan hidung sangat panjang.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Nama tokoh TIDAK boleh tertulis di gambar (caption, watermark, atau teks lain). Soal ini menguji pengenalan tokoh dari bentuknya.",
      "Tokoh lain di dalam gambar yang sama. Hanya Petruk saja, supaya tidak membingungkan.",
      "Gambar Semar, Gareng, atau Bagong, dan gambar gabungan semua Punakawan.",
    ],
    tips: [
      "Pastikan tokohnya benar-benar Petruk (tinggi, hidung panjang), bukan Gareng (tangan bengkok, mata juling).",
      "Cari di Wikimedia Commons atau situs budaya Jawa agar lisensinya jelas.",
    ],
    kataKunci: [
      "Petruk wayang kulit",
      "Petruk Punakawan wayang illustration",
      "Petruk wayang Wikimedia Commons",
    ],
  },
  "baja-b-28": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVnOUCDnPfQBV-zShqBqOOZXUBEyFt3Fy9m56VtrOyg&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tokoh wayang Raden Werkudara / Bima (Pandhawa)",
    mapel: "Bahasa Jawa", modul: "B", no: 28,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar tokoh Pandhawa ing dhuwur! Tokoh kasebut yaiku Raden Werkudara (Bima). Kesatriyan/papan dununge Raden Werkudara yaiku ing...",
    jawaban: "B. Jodhipati",
    isi: [
      "SATU tokoh wayang Pandhawa, yaitu RADEN WERKUDARA (Bima), terlihat utuh dan jelas (wayang kulit atau ilustrasi kartun boleh).",
      "Ciri yang sebaiknya tampak: tubuh tinggi besar dan kekar, boleh membawa gada dan memakai kain poleng (kotak hitam putih).",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan nama kesatriyan / tempat tinggal (Jodhipati, Madukara, Ngamarta, Sawojajar, Bumireta). Itu adalah jawaban soal.",
      "Tokoh Pandhawa lain di dalam gambar yang sama.",
    ],
    tips: [
      "Nama 'Raden Werkudara (Bima)' sudah disebut di soal, jadi boleh tertulis di gambar. Tulisan lain tetap tidak boleh.",
      "Cocokkan dengan minimal 2 sumber agar tidak tertukar dengan Pandhawa lain.",
    ],
    kataKunci: [
      "Bima Werkudara wayang kulit",
      "Werkudara Pandawa wayang",
      "Bima wayang Wikimedia Commons",
    ],
  },

  // ============================== PJOK - MODUL A ==============================
  "pjok-a-3": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBeA3g63XCe1UUJI8wOsN2mrH_HM1A0umj-pC8kzNpA&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Dribbling bola tangan dengan satu tangan",
    mapel: "PJOK", modul: "A", no: 3,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Variasi gerakan menggiring bola (dribbling) pada permainan bola tangan yang ditunjukkan gambar dilakukan dengan cara...",
    jawaban: "A. Memantulkan bola ke lantai menggunakan satu tangan sambil berjalan atau berlari",
    isi: [
      "SATU pemain bola tangan menggiring bola sambil berlari / berjalan.",
      "Bola tampak MEMANTUL ke lantai dan dikontrol dengan SATU tangan.",
      "Lapangan bola tangan atau lapangan dalam ruangan, pemain terlihat utuh dari kepala sampai kaki.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'dribbling', 'menggiring', atau keterangan cara yang membocorkan jawaban.",
      "Pemain melempar bola tinggi dengan dua tangan, menendang, atau memukul bola dengan pemukul.",
    ],
    tips: [
      "Foto / ilustrasi dribbling bola basket boleh dipakai bila sulit mencari bola tangan, asalkan bola terlihat memantul ke lantai dengan satu tangan.",
    ],
    kataKunci: [
      "handball player dribbling bounce ball",
      "bola tangan menggiring bola",
      "handball dribble illustration",
    ],
  },
  "pjok-a-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe1paKmAI-OM22K-K8C2lAnuiZLRDVwOynzJjsBZO-w&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Passing bawah bola voli",
    mapel: "PJOK", modul: "A", no: 7,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar gerakan passing di atas! Gerakan kedua lengan dirapatkan lurus ke depan bawah dan diayunkan dari bawah ke atas saat bola menyentuh lengan. Gerakan ini merupakan teknik...",
    jawaban: "B. Passing bawah",
    isi: [
      "SATU pemain bola voli melakukan passing bawah.",
      "Kedua lengan lurus dan dirapatkan ke depan bawah, tangan saling menggenggam, bola mengenai lengan bagian bawah.",
      "Posisi lutut sedikit ditekuk, pemain terlihat utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'passing bawah', 'passing atas', atau nama teknik lain.",
      "Gerakan passing atas (tangan di depan dahi), servis, atau smash.",
    ],
    tips: [
      "Tampak samping paling jelas untuk menunjukkan lengan lurus ke depan bawah.",
    ],
    kataKunci: [
      "volleyball underhand pass bump",
      "passing bawah bola voli",
      "volleyball forearm pass illustration",
    ],
  },
  "pjok-a-11": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPzJ7XgDc5C9mgGxvcIRMHMPQ_xEGZPZp6xr12C4S0Q&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Lemparan melambung (bola dilempar dari atas kepala)",
    mapel: "PJOK", modul: "A", no: 11,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar kombinasi gerak di atas! Berdasarkan gambar tersebut, gerakan melempar dan menangkap bola dilakukan dengan ayunan tangan dari atas kepala secara menyilang yang dinamakan lemparan...",
    jawaban: "B. Lemparan melambung / atas",
    isi: [
      "Seorang anak melempar bola dengan ayunan tangan dari atas kepala (lemparan atas).",
      "Lintasan bola terlihat MELENGKUNG naik lalu turun (boleh dengan garis putus-putus).",
      "Boleh ada teman di depan yang bersiap menangkap bola.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'melambung', 'lemparan atas', atau nama jenis lemparan lain.",
      "Lemparan menyusur tanah atau lemparan mendatar lurus.",
    ],
    tips: [
      "Soal menyebut 'ayunan tangan dari atas kepala', jadi pastikan tangan pelempar berada di atas kepala.",
    ],
    kataKunci: [
      "overhand throw ball kids illustration",
      "lempar tangkap bola lemparan atas",
      "throwing and catching ball PE",
    ],
  },
  "pjok-a-14": {
    url: 'https://files.catbox.moe/mvz9xo.png',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Elakan bawah pencak silat",
    mapel: "PJOK", modul: "A", no: 14,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar sikap bela diri di atas! Pesilat memindahkan tumpuan badan ke belakang atau membungkuk ke bawah tanpa memindahkan posisi kaki untuk menghindari serangan lawan. Jenis elakan ini dinamakan...",
    jawaban: "A. Elakan bawah",
    isi: [
      "DUA pesilat berhadapan. Penyerang melakukan pukulan lurus ke arah kepala.",
      "Pesilat yang bertahan MERENDAHKAN / membungkukkan badan ke bawah (atau menarik badan ke belakang) untuk menghindar.",
      "Kaki tumpuan pesilat bertahan tidak berpindah tempat. Keduanya memakai seragam pencak silat dan terlihat utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'elakan', 'elakan bawah', atau nama gerakan lain.",
      "Tangkisan, tendangan, atau elakan ke samping.",
    ],
    tips: [
      "Pilih ilustrasi yang menonjolkan badan merunduk dengan jelas.",
    ],
    kataKunci: [
      "pencak silat elakan bawah",
      "pencak silat dodge duck punch",
      "pencak silat defense illustration",
    ],
  },
  "pjok-a-16": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9GqNlr0tiVdeyrjqAxQAq4SRsGCYEtfiZnygHn4hWA&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Rangkaian gerakan guling lenting",
    mapel: "PJOK", modul: "A", no: 16,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan rangkaian gambar senam lantai di atas! Gerakan diawali dengan berguling ke depan lalu melentingkan badan dan kedua kaki mendarat secara bersamaan dinamakan...",
    jawaban: "B. Guling lenting (neck spring/head spring)",
    isi: [
      "Rangkaian 3 sampai 4 gambar berurutan dari kiri ke kanan di atas matras.",
      "Urutan: (1) berjongkok / bersiap, (2) berguling ke depan, (3) badan dilentingkan dengan kaki dilemparkan ke depan atas, (4) mendarat berdiri dengan kedua kaki bersamaan.",
      "Kesatuan gerak harus jelas terlihat sebagai guling lenting, bukan guling depan biasa.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan nama gerakan ('guling lenting', 'guling depan', 'meroda', 'kayang').",
      "Gerakan meroda atau kayang di dalam rangkaian.",
    ],
    tips: [
      "Pastikan ada fase badan MELENTING ke atas sebelum mendarat. Fase itu yang membedakan dengan guling depan.",
    ],
    kataKunci: [
      "neck spring gymnastics sequence",
      "guling lenting senam lantai",
      "head spring gymnastics illustration",
    ],
  },
  "pjok-a-29": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KQwJuWFMA08fRHOmEfBDHB_BoJUxujBw6MXtkJvD3NsQ_iSHpz_zsNwA&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Raket dan shuttlecock (bola bulu)",
    mapel: "PJOK", modul: "A", no: 29,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar peralatan olahraga di atas! Alat pemukul (raket) dan bola bulu (shuttlecock) pada gambar digunakan dalam cabang olahraga net yaitu...",
    jawaban: "A. Bulu tangkis (Badminton)",
    isi: [
      "Gambar peralatan: SATU raket bulu tangkis dan SATU shuttlecock (bola bulu).",
      "Latar polos, peralatan terlihat jelas dan utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'bulu tangkis' / 'badminton' atau nama cabang olahraga lain.",
      "Peralatan olahraga lain (bet tenis meja, bola voli, bola takraw) di dalam gambar.",
    ],
    tips: [
      "Foto produk dengan latar putih paling cocok. Lisensi bebas (Wikimedia Commons) lebih aman.",
    ],
    kataKunci: [
      "badminton racket and shuttlecock",
      "raket dan shuttlecock bulu tangkis",
      "badminton equipment white background",
    ],
  },
  "pjok-a-34": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRodC6NgjL0JZkrHe46RxyGyfwSXOF-mgqcCw0E4Wfiw&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tendangan T pencak silat",
    mapel: "PJOK", modul: "A", no: 34,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar gerakan tendangan pencak silat di atas! Serangan kaki dengan posisi tubuh menyamping dan telapak kaki membentuk huruf T dinamakan tendangan...",
    jawaban: "B. Tendangan T",
    isi: [
      "SATU pesilat menendang lawan dengan posisi tubuh MENYAMPING.",
      "Tendangan memakai sisi luar telapak kaki / sol sepatu, kaki yang menendang lurus ke arah lawan sehingga bersama kaki tumpu membentuk huruf T.",
      "Pesilat memakai seragam pencak silat dan terlihat utuh. Boleh ada lawan di depannya.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'tendangan T', 'tendangan lurus', atau nama tendangan lain.",
      "Tendangan lurus (badan menghadap depan), tendangan melingkar, atau tendangan belakang.",
    ],
    tips: [
      "Tampak samping paling jelas untuk menunjukkan badan menyamping dan bentuk huruf T.",
    ],
    kataKunci: [
      "pencak silat tendangan T",
      "pencak silat side kick",
      "pencak silat kick illustration",
    ],
  },

  // ============================== PJOK - MODUL B ==============================
  "pjok-b-3": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA3BtF0jknOTXw71s5JgP1sLnmtlLAR_ndZAc4u9WzA&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Dribbling zig-zag melewati kerucut (bola tangan)",
    mapel: "PJOK", modul: "B", no: 3,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar latihan bola tangan di atas! Pemain melakukan gerakan menggiring bola secara berbelok-belok melewati rintangan kerucut (cone). Tujuan dari variasi dribbling zig-zag ini adalah...",
    jawaban: "A. Melatih kelincahan dan kontrol bola saat menghindari kejaran lawan",
    isi: [
      "SATU pemain bola tangan menggiring bola melewati 4 sampai 5 kerucut (cone) yang tersusun berjajar lurus.",
      "Lintasan pemain terlihat BERKELOK-KELOK (zig-zag) di antara kerucut, boleh digambar dengan garis putus-putus.",
      "Bola terlihat dikontrol di dekat kaki / tangan pemain.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan tujuan latihan yang membocorkan jawaban (contoh: 'kelincahan', 'kontrol bola', 'agility').",
      "Lawan yang sedang mengejar atau gawang dengan penembak (soal ini tentang latihan melewati rintangan).",
    ],
    tips: [
      "Latihan dribbling zig-zag bola basket / bola tangan sama-sama boleh, asalkan kerucut dan lintasan berkelok jelas.",
    ],
    kataKunci: [
      "zigzag dribbling cones drill",
      "handball dribbling cone drill",
      "latihan dribble zig-zag kerucut",
    ],
  },
  "pjok-b-7": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdIZz1D7BaRMFAdQVcsBkjD1Xz_NCDB5DHVuYrihOtMQ&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Passing atas bola voli",
    mapel: "PJOK", modul: "B", no: 7,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar teknik passing bola voli di atas! Gerakan mendorong bola melayang menggunakan bagian dalam ruas jari-jari kedua tangan di atas depan dahi dinamakan...",
    jawaban: "A. Passing atas",
    isi: [
      "SATU pemain bola voli melakukan passing atas.",
      "Kedua tangan berada di atas depan dahi dengan jari-jari terbuka membentuk corong, bola tepat di atas tangan.",
      "Lutut sedikit ditekuk, pemain terlihat utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'passing atas', 'passing bawah', atau nama teknik lain.",
      "Gerakan passing bawah (lengan lurus ke depan bawah), block, atau servis.",
    ],
    tips: [
      "Tampak depan atau samping sama-sama boleh, asalkan posisi tangan di depan dahi terlihat jelas.",
    ],
    kataKunci: [
      "volleyball overhead pass setting",
      "passing atas bola voli",
      "volleyball set technique illustration",
    ],
  },
  "pjok-b-11": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLgTeY3ofBReFzQSgozEZohVo1R3Ju2ABEY9gYITm3Q&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Lemparan menyusur tanah (ayunan tangan dari bawah)",
    mapel: "PJOK", modul: "B", no: 11,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Pemain melempar bola dengan ayunan tangan dari bawah menyusur atau menggelinding di atas rumput. Jenis lemparan ini adalah...",
    jawaban: "A. Lemparan menyusur tanah (underhand throw)",
    isi: [
      "Seorang anak melempar bola dengan ayunan tangan dari BAWAH (underhand).",
      "Bola terlihat MENGGELINDING di atas rumput / tanah, tidak melambung.",
      "Boleh ada teman di depan yang bersiap menangkap bola.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'menyusur tanah', 'underhand', atau nama jenis lemparan.",
      "Lemparan melambung tinggi atau lemparan mendatar lurus.",
    ],
    tips: [
      "Pastikan bola berada dekat tanah, bukan di udara.",
    ],
    kataKunci: [
      "underhand roll ball kids",
      "lemparan menyusur tanah bola",
      "rolling ball underhand throw illustration",
    ],
  },
  "pjok-b-14": {
    url: 'https://files.catbox.moe/5ggzo5.png',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Elakan samping pencak silat",
    mapel: "PJOK", modul: "B", no: 14,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar elakan pencak silat di atas! Pesilat menggeser posisi badan ke arah samping kiri atau kanan tanpa memindahkan tumpuan kaki utama untuk mengelak dari serangan lurus lawan. Gerakan ini adalah...",
    jawaban: "A. Elakan samping",
    isi: [
      "DUA pesilat berhadapan. Penyerang melakukan pukulan lurus ke arah badan / kepala.",
      "Pesilat yang bertahan MENGGESER badan ke samping (kiri atau kanan) sehingga pukulan lewat di sisi badan.",
      "Kaki tumpuan utama tidak berpindah. Keduanya memakai seragam pencak silat dan terlihat utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'elakan', 'elakan samping', atau nama gerakan lain.",
      "Gerakan merunduk (elakan bawah), tangkisan, atau tendangan.",
    ],
    tips: [
      "Pilih ilustrasi yang menonjolkan badan bergeser ke samping dengan jelas.",
    ],
    kataKunci: [
      "pencak silat elakan samping",
      "pencak silat sidestep dodge",
      "pencak silat defense illustration",
    ],
  },
  "pjok-b-16": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_Wvy8nslwRtDyvaOBwdm0nzxU5_vrfuM_OtRO3BGht6zjShfeQpqag2H&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tumpuan tengkuk pada guling lenting",
    mapel: "PJOK", modul: "B", no: 16,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Saat melakukan guling lenting, bagian tubuh yang pertama kali menyentuh matras setelah tumpuan kedua telapak tangan adalah...",
    jawaban: "A. Tengkuk / leher bagian belakang",
    isi: [
      "SATU anak melakukan guling lenting di atas matras, terlihat dari samping.",
      "Fase yang ditampilkan: kedua telapak tangan menumpu matras, bagian TENGKUK / leher belakang menyentuh matras, pinggul terangkat ke atas.",
      "Dahi, lutut, dan pinggang TIDAK menyentuh matras pada fase ini.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan nama bagian tubuh ('tengkuk', 'leher') atau tanda panah / label yang membocorkan jawaban.",
      "Fase lain yang membuat bagian tubuh yang bertumpu tidak jelas.",
    ],
    tips: [
      "Pilih gambar samping agar terlihat jelas bagian tubuh yang menyentuh matras.",
    ],
    kataKunci: [
      "neck spring gymnastics side view",
      "guling lenting tengkuk senam",
      "forward roll neck gymnastics mat",
    ],
  },
  "pjok-b-29": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAAAlaIXXxGp-MgMXjSk2WQM5BSS_w7bnYMMNt1QIlw&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Meja dan bet tenis meja",
    mapel: "PJOK", modul: "B", no: 29,
    cara: "CARI DI INTERNET",
    soal: "Perhatikan gambar peralatan olahraga di atas! Meja dengan net rendah di tengah serta kayu pemukul bertapis karet (bet) digunakan pada permainan...",
    jawaban: "A. Tenis meja (Pingpong)",
    isi: [
      "Gambar peralatan: SATU meja pingpong dengan net rendah di tengah, ditambah SATU bet (kayu pemukul bertapis karet) dan bola kecil.",
      "Peralatan terlihat jelas dan utuh.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'tenis meja' / 'pingpong' atau nama cabang olahraga lain.",
      "Peralatan olahraga lain (raket bulu tangkis, bola voli, bola takraw, kasti) di dalam gambar.",
    ],
    tips: [
      "Net harus tampak RENDAH dan berada di tengah meja.",
    ],
    kataKunci: [
      "table tennis table paddle ball",
      "meja dan bet tenis meja",
      "ping pong equipment illustration",
    ],
  },
  "pjok-b-34": {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgORIzDOlu06S0P3YvUTdy_mV4_JqgYOfg0ZfP_X2dw&s=10',   // <-- TEMPEL URL GAMBAR DI SINI
    judul: "Tendangan melingkar (sabit) pencak silat",
    mapel: "PJOK", modul: "B", no: 34,
    cara: "CARI DI INTERNET atau BUAT SENDIRI",
    soal: "Perhatikan gambar di atas! Pesilat melakukan serangan kaki dengan lintasan melengkung/melingkar dari samping menuju pinggang lawan. Tendangan ini dinamakan...",
    jawaban: "A. Tendangan melingkar / sabit",
    isi: [
      "SATU pesilat menendang dengan lintasan kaki MELENGKUNG dari samping menuju pinggang / rusuk lawan.",
      "Lintasan kaki boleh diberi garis lengkung putus-putus. Pesilat memakai seragam pencak silat dan terlihat utuh. Boleh ada lawan di depannya.",
      "Latar putih / bersih, gambar jelas dan tidak buram (lebar minimal 800 px, format PNG/JPG).",
    ],
    jangan: [
      "Tulisan 'tendangan melingkar', 'sabit', atau nama tendangan lain.",
      "Tendangan lurus, tendangan T, atau tendangan belakang.",
    ],
    tips: [
      "Pilih gambar yang jelas memperlihatkan lintasan kaki yang melengkung.",
    ],
    kataKunci: [
      "pencak silat tendangan sabit",
      "pencak silat roundhouse kick",
      "pencak silat kick illustration",
    ],
  },
});
