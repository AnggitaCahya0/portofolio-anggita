// src/data/projects.
export const projects = [
  {
    slug: "gapura",
    title: "Sistem Manajemen Pengadaan Barang dan Jasa Untuk Universitas Pendidikan Ganesha",
    role: "UI/UX Designer & Frontend Developer",
    period: "Project Magang • 2025",
    overview:
      "Sistem berbasis web untuk membantu pengelolaan pengadaan barang dan jasa secara terpusat.",
    problems: [
      "Proses pengadaan barang dan jasa masih manual",
      "Sulit melacak proses pengadaan",
      "Proses input data rawan kesalahan",
    ],
    solutions: [
      "Dashboard terstruktur",
      "Pencarian dan filter data",
      "Validasi form untuk meminimalisir error",
    ],
    tech: ["Laravel", "Blade", "Bootstrap"],
    website: null, // atau URL
    images: [
        "../assets/Gapura/LandingPage1.png",
        "../assets/Gapura/LandingPage2.png",
        "../assets/Gapura/Dashboard1.png",
        "../assets/Gapura/Marketplace1.png",
        "../assets/Gapura/Marketplace2.png",
        "../assets/Gapura/DaftarKebutuhan.png",
        "../assets/Gapura/DaftarPengadaan.png",
        "../assets/Gapura/KodeAset.png",
        "../assets/Gapura/User.png",
        "../assets/Gapura/DetilAset.png",
    ],
  },

  {
    slug: "EIS-UNDIKSHA",
    title: "Executive Information System (EIS) Undiksha",
    period: "Magang • 2025",
    overview: ["Executive Information System (EIS) Undiksha merupakan sistem berbasis web yang berfungsi sebagai dashboard eksekutif untuk menyajikan data strategis institusi kepada pimpinan. Sistem ini digunakan untuk memantau informasi penting secara ringkas dan visual guna mendukung pengambilan keputusan. Pada project ini, saya berfokus pada peningkatan kualitas pengalaman pengguna melalui perbaikan tampilan antarmuka dan konsistensi interaksi, sehingga informasi yang ditampilkan dapat dipahami dengan lebih cepat dan nyaman oleh pengguna."
    ],
    role: ["UI/UX Designer & Frontend Developer"
    ],
    problems: ["Antarmuka lama tidak ramah pengguna dan kurang konsisten",
      "Ketidakkonsistenan penggunaan ikon dan elemen visual",
      "Indikator loading muncul ganda (double loading) sehingga membingungkan pengguna",
      "Search bar tidak berfungsi dengan baik dan tidak memberikan feedback yang jelas",
      "Terdapat menu bertuliskan “Grafik” namun tidak menampilkan visualisasi grafik, sehingga menimbulkan ekspektasi yang keliru"
    ],
    solutions: ["Mendesain ulang halaman dashboard agar lebih ringkas, konsisten, dan mudah dipahami",
      "Menyeragamkan penggunaan ikon, warna, dan komponen antarmuka",
      "Menyederhanakan indikator loading menjadi satu jenis yang jelas dan informatif",
      "Memperbaiki perilaku search bar agar berfungsi dengan baik dan memberikan feedback yang tepat",
      "Menyesuaikan konten menu agar selaras dengan label dan ekspektasi pengguna",
      "Mengimplementasikan hasil desain ke dalam sistem menggunakan Laravel 12 dan Bootstrap"
    ],
    tech: ["Laravel", "Blade", "Bootstrap"],
    website: null,
    images: ["../assets/EIS/Dashboard.png",
      "../assets/EIS/Dashboard.png",
      "../assets/EIS/Index.png",
    ],
  },

  {
    slug: "komitpay",
    title: "KOMITPAY – Aplikasi Pembayaran SPP Digital untuk Siswa SMA",
    period: "Tugas Mata Kuliah • 2023",
    overview: "KKOMITPAY adalah konsep aplikasi pembayaran SPP berbasis digital yang dirancang untuk membantu siswa SMA melakukan pembayaran sekolah dengan lebih praktis, cepat, dan terdokumentasi dengan baik. Proyek ini berfokus pada penyederhanaan alur pembayaran, pengurangan antrean, serta pengelolaan bukti pembayaran yang aman dan mudah diakses oleh pengguna.",
    role: "UI/UX Designer",
    problems: [
      "Proses pembayaran SPP masih manual dan membutuhkan banyak waktu",
      "Terjadi antrean panjang di loket pembayaran sekolah.",
      "Bukti pembayaran sering hilang atau sulit dilacak kembali.",
    ],
    solutions: [
      "Merancang alur pembayaran digital yang sederhana dan mudah dipahami oleh siswa SMA.",
      "Menyediakan fitur pencatatan pembayaran agar riwayat transaksi dapat diakses kapan saja.",
      "Menambahkan notifikasi pesan sebagai konfirmasi keberhasilan pembayaran dan pengingat tagihan."
    ],
    tech: ["Figma"],
    website: "https://www.figma.com/design/MSJ41wLR6kea7TT7wLJzAU/KOMITPAY?node-id=0-1&t=zPKCEEOyMSuw144n-1",
    images: null,
  },
];

// export const CaseStudy = {
//   aset: {
//     title: "Sistem Manajemen Pengadaan Barang dan Jasa Untuk Universitas Pendidikan Ganesha",
//     role: "UI/UX Designer & Frontend Developer",
//     period: "Project Magang • 2025",
//     overview:
//       "Sistem berbasis web untuk membantu pengelolaan pengadaan barang dan jasa secara terpusat.",
//     problems: [
//       "Proses pengadaan barang dan jasa masih manual",
//       "Sulit melacak proses pengadaan",
//       "Proses input data rawan kesalahan",
//     ],
//     solutions: [
//       "Dashboard terstruktur",
//       "Pencarian dan filter data",
//       "Validasi form untuk meminimalisir error",
//     ],
//     tech: ["Laravel", "Blade", "Bootstrap"],
//     website: null, // atau URL
//     images: [
//         "../assets/Gapura/LandingPage1.png",
//         "../assets/Gapura/LandingPage2.png",
//         "../assets/Gapura/Dashboard1.png",
//         "../assets/Gapura/Marketplace1.png",
//         "../assets/Gapura/Marketplace2.png",
//         "../assets/Gapura/DaftarKebutuhan.png",
//         "../assets/Gapura/DaftarPengadaan.png",
//         "../assets/Gapura/KodeAset.png",
//         "../assets/Gapura/User.png",
//         "../assets/Gapura/DetilAset.png",
//     ],
//   },
// };
