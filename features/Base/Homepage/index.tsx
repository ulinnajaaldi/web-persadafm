"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { IoCalendarClearOutline } from "react-icons/io5";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomepageFeature = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const HERO_CARAUSEL = [
    {
      title: "Ekosistem Digital di Solo, Asah Bakat-bakat Digital Masa Depan",
      image: "/images/hero-1.jpg",
    },
    {
      title: "Kolaborasi dengan Komunitas, Membangun Ekosistem Digital di Solo",
      image: "/images/hero-2.jpg",
    },
  ];

  const PROGAM_ACARA = [
    {
      title: "JIHAD PAGI",
      image: "/images/progam-acara-jihad.png",
      date: "October 6,2022",
    },
    {
      title: "JIHAD PAGI",
      image: "/images/progam-acara-jihad.png",
      date: "October 6,2022",
    },
    {
      title: "JIHAD PAGI",
      image: "/images/progam-acara-jihad.png",
      date: "October 6,2022",
    },
  ];

  const GALERI = [
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
    {
      image: "/images/galeri-base.png",
      description:
        'Bupati Sragen, dr. Kusdinar Untung Yuni Sukowati hadir sebagai narasumber program "Man Jadda Wa Jada" yang disiarkan live di Radio Persada FM, Kamis, 30 Juni 2022.',
    },
  ];

  return (
    <main>
      <section className="container">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {HERO_CARAUSEL.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative flex aspect-video items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                  <h1 className="absolute text-2xl font-semibold text-white">
                    {item.title}
                  </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="container mb-10 mt-5">
        <h2 className="pb-2 text-3xl font-bold">PROFIL PERSADA FM</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Image
            src="/images/profil-persada-fm.png"
            alt="Profil Persada FM"
            width={500}
            height={500}
            className="col-span-1 h-full w-full object-cover "
          />
          <p className="col-span-2 font-medium">
            RADIO PERSADA FM adalah sebuah perusahaan yang berkedudukan dan
            berkantor di Jl. Raden Qosim (Kawasan Sunan Drajat) Paciran
            Lamongan, Jawa Timur No. Tlp. (0322) 662970, 662261 Fax. (0322)
            662261 dengan format siar Radio yang dikembangkan adalah Radio
            hiburan, informasi, pendidikan dan dakwah, dengan menyajikan
            musik-musik popular terkini dan penyampaian informasi yang cepat,
            actual dengan standart mutu signifikan menduduki urutan teratas
            prioritas pelayanan pada customer, adalah landasan yang berkiprah di
            masa sekarang maupun akan daring.
          </p>
        </div>
      </section>

      <section className="bg-[#F7EEDD] py-10">
        <h2 className="pb-5 text-center text-3xl font-bold">Progam Acara</h2>
        <div className="container relative grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="rounded-lg bg-white">
            <Image
              src="/images/progam-acara-base.png"
              alt="Program Acara"
              width={1000}
              height={500}
              className="rounded-t-lg"
            />
            <div className="flex flex-col gap-3 px-10 pb-4 pt-2">
              <h3 className="text-xl font-semibold">MUTIARA KATA BERMAKNA</h3>
              <div className="flex items-center gap-1 font-medium">
                <IoCalendarClearOutline className="h-6 w-6" />
                <p>October 6,2022</p>
              </div>
              <p className="text-lg font-medium">
                Rekaman pembacaan brosur Pengajian Ahad Pagi yang sayang jika
                Anda lewatkan. Hadir selama dua kali sehari untuk menambah
                wawasan Anda
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {PROGAM_ACARA.map((item, index) => (
              <div key={index} className="rounded-lg bg-white">
                <div className="grid h-[120px] max-h-[120px] grid-cols-3">
                  <div className="relative col-span-1">
                    <Image
                      src="/images/progam-acara-jihad.png"
                      alt="Program Acara"
                      width={500}
                      height={500}
                      className="absolute h-full w-full rounded-l-lg object-cover"
                    />
                  </div>

                  <div className="col-span-2 flex flex-col items-start justify-center gap-2 px-2">
                    <h3 className="text-lg font-semibold uppercase">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 font-medium">
                      <IoCalendarClearOutline className="h-5 w-5" />
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-[80%] self-end bg-sky-500 hover:bg-sky-500/80">
              LIHAT PROGRAM ACARA LAINNYA
            </Button>
          </div>
        </div>
      </section>

      <section className="container my-10 flex flex-col gap-4">
        <h2 className="pb-5 text-center text-3xl font-bold">Jadwal Acara</h2>
        <div className="relative mx-auto h-[300px] w-full md:w-[700px]">
          <Image
            src="/images/jadwal-acara.jpg"
            alt="Jadwal Acara"
            width={1000}
            height={500}
            className="absolute h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="mx-auto">
          <Button className="self-end bg-sky-500 px-10 hover:bg-sky-500/80">
            BACA DISINI
          </Button>
        </div>
      </section>

      <section className="bg-[#F7EEDD] py-10">
        <h2 className="pb-5 text-center text-3xl font-bold">Galeri</h2>
        <div className="container flex  items-center justify-center px-20">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {GALERI.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white">
                    <Image
                      src={item.image}
                      alt="Galeri"
                      width={500}
                      height={500}
                    />
                    <div className="p-2">
                      <p className="line-clamp-3 text-sm font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Button className="bg-sky-500 px-10 hover:bg-sky-500/80">
            LIHAT GALERI LAINNYA
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomepageFeature;
