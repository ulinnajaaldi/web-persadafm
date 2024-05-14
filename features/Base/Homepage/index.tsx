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
import { useGetGaleri } from "@/useCase/GaleriUseCase";
import Link from "next/link";
import { ROUTES_PATH } from "@/constants/routes";
import { useGetKabarBerita } from "@/useCase/KabarBeritaUseCase";

const HomepageFeature = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(4);

  const { data: dataBerita, isLoading: isLoadingBerita } = useGetKabarBerita({
    value: "",
    page: 1,
    limit: 4,
  });

  const { data: dataProgam, isLoading: isLoadingProgam } = useGetProgamAcara({
    value,
    page,
    limit,
  });

  const { data: dataGalery, isLoading: isLoadingGalery } = useGetGaleri({
    value: "",
    page: 1,
    limit: 6,
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

  return (
    <main>
      <section className="container">
        {isLoadingBerita ? (
          <div className="h-[200px] md:h-[500px]">
            <div className="group relative h-full rounded-lg border p-4">
              <div className="h-[120px] animate-pulse bg-gray-300"></div>
              <div className="mt-2 space-y-3">
                <div className="h-4 animate-pulse bg-gray-300 md:h-6"></div>
                <div className="h-2 animate-pulse bg-gray-300 md:h-4"></div>
                <div className="hidden h-4 animate-pulse bg-gray-300 md:block"></div>
              </div>
            </div>
          </div>
        ) : (
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {dataBerita?.data.results.map((item: any) => (
                <CarouselItem key={item.id}>
                  <div className="relative flex aspect-video items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1920}
                      height={1080}
                      className="h-full w-full object-cover"
                    />
                    <Link
                      href={`${ROUTES_PATH.kabarBerita}/${item.id}`}
                      className="absolute text-center text-lg font-semibold text-white md:text-2xl"
                    >
                      <h1>{item.title}</h1>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </section>
      <section className="container py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-1 md:gap-10">
          <div className="space-y-3">
            <h2 className="pb-2 text-xl font-bold md:text-3xl">
              PROFIL PERSADA FM
            </h2>
            <div className="h-[280px] md:h-[500px]">
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
          {/* <div className="bg-[#F7EEDD]">
            <div className="flex h-9 w-full items-center justify-center bg-sky-400 md:h-[52px]">
              <h2 className="pb-2 text-lg font-medium md:text-2xl">
                LIVE STREAMING
              </h2>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <ul className="list-inside list-disc p-5 text-sm font-medium md:text-base">
                <li>
                  <a
                    href="https://mtamedia.net:1079/;stream.nsv"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 transition-colors hover:text-sky-400"
                  >
                    LIVE MTMEDIA.net
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
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
          <Button
            className="self-end bg-sky-500 px-10 hover:bg-sky-500/80"
            asChild
          >
            <Link href={ROUTES_PATH.jadwalAcara}>BACA DISINI</Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#F7EEDD] py-10">
        <h2 className="pb-5 text-center text-3xl font-bold">Galeri</h2>
        <div className="container flex items-center justify-center px-20">
          {isLoadingGalery ? (
            <div className="grid w-full grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white">
                  <div className="h-[200px] w-full animate-pulse bg-gray-300"></div>
                  <div className="space-y-2 p-2">
                    <div className="h-4 w-3/4 animate-pulse bg-gray-300"></div>
                    <div className="h-4 w-1/2 animate-pulse bg-gray-300"></div>
                    <div className="h-4 w-3/4 animate-pulse bg-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {dataGalery.data.results.map((item: any) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-white">
                      <div className="relative h-[200px] bg-white">
                        <Image
                          src={item.image}
                          alt="Galeri"
                          width={500}
                          height={500}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="line-clamp-3 text-sm font-medium">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Button className="bg-sky-500 px-10 hover:bg-sky-500/80" asChild>
            <Link href={ROUTES_PATH.galeri}>LIHAT GALERI LAINNYA</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomepageFeature;
