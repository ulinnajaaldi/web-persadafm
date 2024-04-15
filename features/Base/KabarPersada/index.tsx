"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useGetKabarBerita } from "@/useCase/KabarBeritaUseCase";
import { convertDate } from "@/lib/utils";
import { ROUTES_PATH } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const KabarPersadaFeature = () => {
  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(12);

  const { data: dataKabarBerita, isLoading: isLoadingKabarBerita } =
    useGetKabarBerita({
      value,
      page,
      limit,
    });

  const newKabarBeita = dataKabarBerita?.data?.results[0];

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <section className="container my-10">
        <h1 className="pb-5 text-center text-xl font-bold sm:text-3xl md:text-4xl">
          KABAR PERSADA
        </h1>

        <div className="my-5">
          <h2 className="pb-3 text-lg font-semibold sm:text-xl md:text-2xl">
            POST TERBARU
          </h2>
          {isLoadingKabarBerita ? (
            <div className="group relative h-full rounded-lg border p-4">
              <div className="h-[467px] overflow-hidden">
                <div className="h-full w-full animate-pulse bg-gray-300"></div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="h-6 w-8/12 animate-pulse bg-gray-300"></div>
                <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                <div className="h-4 w-1/2 animate-pulse bg-gray-300"></div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border p-5">
              <div className="h-[467px]">
                <Image
                  src={newKabarBeita.image}
                  alt={newKabarBeita.title}
                  width={1000}
                  height={500}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 pb-4 pt-2 ">
                <p>{convertDate(newKabarBeita.createdAt)}</p>
                <h3 className="text-justify text-lg font-semibold md:text-xl">
                  {newKabarBeita.title}
                </h3>
                <p
                  className="line-clamp-3 text-justify text-sm font-medium md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: newKabarBeita.content,
                  }}
                ></p>
              </div>
              <Button
                className="bg-sky-500 transition-colors hover:bg-sky-500/80"
                asChild
              >
                <Link href={`${ROUTES_PATH.kabarBerita}/${newKabarBeita?.id}`}>
                  Read More
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      <section className="container mb-10">
        {isLoadingKabarBerita ? (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="group relative h-full rounded-lg border p-4"
              >
                <div className="h-[200px] overflow-hidden">
                  <div className="h-full w-full animate-pulse bg-gray-300"></div>
                </div>
                <div className="mt-2 space-y-3">
                  <div className="h-6 w-8/12 animate-pulse bg-gray-300"></div>
                  <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                  <div className="h-4 w-1/2 animate-pulse bg-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3">
              {dataKabarBerita?.data?.results.slice(1, 12).map((item: any) => (
                <div key={item.id} className="space-y-1 rounded-md border p-3">
                  <div className="h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <p className="text-sm">{convertDate(item.createdAt)}</p>
                  <h2 className="text-justify text-sm font-semibold md:text-base">
                    {item.title}
                  </h2>
                  <p className="line-clamp-3 text-justify text-sm md:text-base">
                    {item.content}
                  </p>
                  <Button
                    className="bg-sky-500 transition-colors hover:bg-sky-500/80"
                    size="sm"
                    asChild
                  >
                    <Link href={`${ROUTES_PATH.kabarBerita}/${item?.id}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
            {dataKabarBerita?.data.totalPages > 1 && (
              <Pagination className="mt-5 w-full">
                <PaginationContent className="flex w-full justify-between">
                  {dataKabarBerita.data.prevPage !== null && (
                    <PaginationItem>
                      <PaginationPrevious
                        className="cursor-pointer"
                        onClick={handlePrevPage}
                      />
                    </PaginationItem>
                  )}
                  {dataKabarBerita.data.nextPage !== null && (
                    <PaginationItem>
                      <PaginationNext
                        className="cursor-pointer"
                        onClick={handleNextPage}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default KabarPersadaFeature;
