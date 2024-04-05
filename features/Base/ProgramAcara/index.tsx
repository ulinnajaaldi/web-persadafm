import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProgramAcaraFeature = () => {
  const PROGAM_ACARA = [
    {
      title: "Mutiara kata bermakna",
      date: "Minggu, JAM: 05.00 - 07.00 WIB",
      description:
        "Rekaman pembacaan brosur Pengajian Ahad Pagi yang sayang jika Anda lewatkan. Hadir selama dua kali sehari untuk menambah wawasan Anda..",
      image: "/images/progam-acara-base.png",
    },
    {
      title: "KATA NUSANTARA",
      date: "Senin, JAM : 07.00 WIB",
      description:
        "Berbagai kabar geliat dakwah Majlis tafsir Al Qur’an yang dihimpun dari para kontributor di berbagai wilayah di Indonesia terangkum dalam..",
      image: "/images/progam-acara-nusantara.png",
    },
    {
      title: "PRESISI",
      date: "Senin - Jumat, JAM : 08.00 - 09.00 WIB",
      description:
        "Perbincangan tentang dunia pendidikan dalam PRESISI, Prestasi dan Edukasi. Menghadirkan narasumber dari para praktisi pendidikan dengan mengusung tema up to..",
      image: "/images/progam-acara-presisi.png",
    },
    {
      title: "KABAR PERSADA AKHIR PEKAN",
      date: "Minggu, JAM : 10.00 - 11.00 WIB",
      description:
        "Berbagai kabar terkini dalam sepekan kami rangkum dalam KABAR PERSADA AKHIR PEKAN. Selalu menyajikan topik-topik terhangat dalam segmen Kabar Pekan..",
      image: "/images/progam-acara-kabar.png",
    },
    {
      title: "KAJIAN SORE",
      date: "Senin - Minggu, JAM : 16.00 - 17.30 WIB",
      description:
        "Hari sore Anda semakin bermakna dengan mendengarkan tausiyah dari ustadz-ustadz di Yayasan Majlis Tafsir Al-Qur’an (MTA). Dengan bahasan yang lebih..",
      image: "/images/progam-acara-kajian.png",
    },
    {
      title: "FAJAR HIDAYAH",
      date: "Senin - Minggu, JAM : 05.00 - 07.00 WIB",
      description:
        "Mengawali pagi hari dengan me-recharge hati bersama ustadz pengampu dalam Fajar Hidayah..",
      image: "/images/progam-acara-fajar.png",
    },
    {
      title: "MAN JADDA WA JADDA",
      date: "Kamis dan Jumat, JAM : 12.00 - 14.00 WIB",
      description:
        "Menghadirkan sosok-sosok inspiratif yang akan berbagi kisah perjuangannya dalam mewujudkan mimpi-mimpinya. Bagaimana semangat kesungguhan mereka dalam menggapai..",
      image: "/images/progam-acara-man-jadda.png",
    },
    {
      title: "TAHSIN",
      date: "Sabtu, JAM : 09.00 - 12.00 WIB",
      description:
        "Tempat untuk kita memperbaiki kualitas bacaan Al-Qur’an yang baik dan benar. Dipandu langsung oleh ustadz-ustadz pemimbing. Ustadz yang mengampu akan..",
      image: "/images/progam-acara-taksir.png",
    },
  ];

  return (
    <main>
      <section className="">
        <h1 className="pb-5 text-center text-4xl font-bold">Progam Acara</h1>
        <div className="container">
          <Image
            src="/images/progam-acara-hero.png"
            alt="Program Acara"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="mt-5 bg-sky-400 py-4 text-white">
          <div className="container flex gap-2 md:gap-4">
            <p className="text-xs sm:text-base">
              Sabtu, 25 November 2023 15.00 WIB
            </p>
            <h2 className="text-lg font-semibold md:text-2xl">TAMAN INDIRA</h2>
            <p className="text-sm font-medium sm:text-base md:text-lg">
              Taman Indria kini hadir dengan format siaran yang baru. Siaran ini
              dikemas semakin menarik karena bisa ditonton secara visual lewat
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div className="bg-sky-400 py-3 text-white">
          <div className="container">
            <h1 className="text-center text-xl font-bold sm:text-3xl md:text-4xl">
              Progam Acara Lainnya
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {PROGAM_ACARA.map((item, index) => (
              <div
                key={index}
                className="relative h-full rounded-lg border p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={400}
                  className="h-[180px] w-full object-cover sm:h-[240px] md:h-[300px]"
                />
                <div className="space-y-3">
                  <h3 className="bg-sky-400 py-2 text-center text-base font-semibold uppercase text-white sm:text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base">{item.date}</p>
                  <p className="line-clamp-3 text-sm font-medium md:text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-end">
                    <Button className="">Selengkapnya</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProgramAcaraFeature;
