import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/laravel.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools7,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Gapura",
    desk: "Sistem berbasis web untuk mengelola pengadaan barang dan jasa, dibangun dengan Laravel Blade dan fokus pada efisiensi alur kerja pengguna. Project ini dikembangkan selama program magang sebagai bagian dari tim pengembang di UPA TIK Undiksha.",
    tools: ["Laravel-12", "Bootstrap", "DataTables"],
    dad: "200",
    slug: "gapura",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "EIS UNDIKSHA",
    desk: "Redesign Excecutive Information System Universitas Pendidikan Ganesha menggunakan Laravel 12 untuk meningkatkan tampilan dan interaktivitas. Project ini dikembangkan selama program magang sebagai bagian dari tim pengembang di UPA TIK Undiksha.",
    tools: ["Laravel-12", "Bootstrap", "DataTables"],
    dad: "300",
    slug: "EIS-UNDIKSHA",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Sistem Pembayaran SPP",
    desk: "Komitpay yaitu sistem pembayaran SPP yang dirancang untuk mempermudah proses pembayaran SPP di suatu sekolah atau institusi pendidikan. Project ini dikembangkan selama proses perkuliahan mata kuliah UI/UX Design.",
    tools: ["Figma"],
    slug: "komitpay",
    dad: "400",
  },
];
