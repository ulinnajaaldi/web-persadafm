"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGetProgamAcara } from "@/useCase/ProgamAcaraUseCase";
import { ProgamAcaraSection } from "./section";

const HomepageFeature = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(4);

  const { data: dataProgam, isLoading: isLoadingProgam } = useGetProgamAcara({
    value,
    page,
    limit,
  });

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
      <section className="container py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          <div className="space-y-3">
            <h2 className="pb-2 text-xl font-bold md:text-3xl">
              PROFIL PERSADA FM
            </h2>
            <div className="h-[280px]">
              <Image
                src="/images/profil-persada-fm.png"
                alt="Profil Persada FM"
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-justify text-sm font-medium md:text-base">
              RADIO PERSADA FM adalah sebuah perusahaan yang berkedudukan dan
              berkantor di Jl. Raden Qosim (Kawasan Sunan Drajat) Paciran
              Lamongan, Jawa Timur No. Tlp. (0322) 662970, 662261 Fax. (0322)
              662261 dengan format siar Radio yang dikembangkan adalah Radio
              hiburan, informasi, pendidikan dan dakwah, dengan menyajikan
              musik-musik popular terkini dan penyampaian informasi yang cepat,
              actual dengan standart mutu signifikan menduduki urutan teratas
              prioritas pelayanan pada customer, adalah landasan yang berkiprah
              di masa sekarang maupun akan daring.
            </p>
          </div>
          <div className="bg-[#F7EEDD]">
            <div className="flex h-9 w-full items-center justify-center bg-sky-400 md:h-[52px]">
              <h2 className="pb-2 text-lg font-medium md:text-2xl">
                LIVE STREAMING
              </h2>
            </div>
          </div>
        </div>
      </section>

      <ProgamAcaraSection isLoading={isLoadingProgam} data={dataProgam} />

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
