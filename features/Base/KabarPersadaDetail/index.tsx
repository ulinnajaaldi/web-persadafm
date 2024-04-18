"use client";

import React from "react";
import { useGetKabarBeritaDetail } from "@/useCase/KabarBeritaUseCase";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { convertDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ROUTES_PATH } from "@/constants/routes";

const KabarPersadaDetailFeature = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const { data, isLoading } = useGetKabarBeritaDetail(params.id);

  if (isLoading)
    return (
      <main className="container my-10 grid grid-cols-1 gap-10 md:grid-cols-4">
        <section className="col-span-3 space-y-4">
          <div className="h-[200px] md:h-[400px]">
            <div className="h-full w-full animate-pulse bg-gray-300"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-20 animate-pulse bg-gray-300"></div>
          </div>
          <div className="h-6 w-8/12 animate-pulse bg-gray-300"></div>
          <div className="h-4 w-full animate-pulse bg-gray-300"></div>
          <div className="h-4 w-full animate-pulse bg-gray-300"></div>
        </section>
        <section>
          <h3 className="pb-3 text-lg font-semibold">Berita Terkait</h3>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="group grid grid-cols-5 gap-2 rounded-md border p-2"
              >
                <div className="col-span-2 h-[100px] w-full">
                  <div className="h-full w-full animate-pulse bg-gray-300"></div>
                </div>
                <div className="col-span-3 space-y-1">
                  <div className="h-6 w-8/12 animate-pulse bg-gray-300"></div>
                  <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    );

  return (
    <main className="container my-10 grid grid-cols-1 gap-10 md:grid-cols-4">
      <section className="space-y-4 md:col-span-3">
        <div className="h-[200px] md:h-[400px]">
          <Image
            src={data?.data?.image}
            alt={data?.data?.title}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">
            {convertDate(data?.data?.createdAt)}
          </p>
          <Badge className="bg-sky-500">Kabar Persada</Badge>
        </div>
        <h1 className="text-xl font-semibold md:text-3xl">
          {data?.data?.title}
        </h1>
        <p
          className="text-justify text-sm md:text-base"
          dangerouslySetInnerHTML={{
            __html: data?.data?.content.replace(/\n/g, "<br />"),
          }}
        ></p>
      </section>
      <section>
        <h3 className="pb-3 text-lg font-semibold">Berita Terkait</h3>
        <div className="flex flex-col gap-4">
          {data?.recent.map((item: any) => (
            <div
              key={item.id}
              className="group grid cursor-pointer grid-cols-5 gap-2 rounded-md border p-2"
              onClick={() => {
                router.push(`${ROUTES_PATH.kabarBerita}/${item.id}`);
              }}
            >
              <div className="col-span-2 h-[100px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="col-span-3 space-y-1">
                <h2 className="line-clamp-4 text-sm font-medium transition-colors group-hover:text-sky-500">
                  {item.title}
                </h2>
                <p className="text-xs font-medium">
                  {convertDate(item.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default KabarPersadaDetailFeature;
