"use client";

import React from "react";
import Image from "next/image";

import { useGetGaleri } from "@/useCase/GaleriUseCase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const GaleriFeature = () => {
  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(12);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(null as any);

  const { data, isLoading } = useGetGaleri({
    value,
    page,
    limit,
  });

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
          GALERI PERSADA
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="group relative h-full rounded-lg border p-4"
                >
                  <div className="h-[467px] overflow-hidden">
                    <div className="h-full w-full animate-pulse bg-gray-300"></div>
                  </div>
                  <div className="mt-2 space-y-3">
                    <div className="h-6 w-8/12 animate-pulse bg-gray-300"></div>
                    <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                    <div className="h-4 w-full animate-pulse bg-gray-300"></div>
                  </div>
                </div>
              ))
            : data?.data?.results.map((item: any) => (
                <div
                  key={item.id}
                  className="group relative h-full cursor-pointer overflow-hidden rounded-lg border p-2 md:p-4"
                  onClick={() => {
                    setIsSelected(item);
                    setIsOpen(true);
                  }}
                >
                  <div className="relative h-[200px] overflow-hidden sm:h-[300px] md:h-[467px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={800}
                      className="h-full w-full rounded-md object-cover"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-white/30" />
                  </div>
                  <h3 className="absolute top-1/2 translate-y-40 px-5 text-center text-2xl font-semibold text-white/90 opacity-0 drop-shadow-md transition-all duration-300 ease-in-out group-hover:-translate-y-1/2 group-hover:opacity-100">
                    {item.title}
                  </h3>
                </div>
              ))}
        </div>
        {data?.data.totalPages > 1 && (
          <Pagination className="mt-5 w-full">
            <PaginationContent className="flex w-full justify-between">
              {data.data.prevPage !== null && (
                <PaginationItem>
                  <PaginationPrevious
                    className="cursor-pointer"
                    onClick={handlePrevPage}
                  />
                </PaginationItem>
              )}
              {data.data.nextPage !== null && (
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
      </section>

      {isSelected !== null && (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>{isSelected?.title || ""}</DialogTitle>
            </DialogHeader>
            <Image
              src={isSelected?.image}
              alt={isSelected?.title}
              width={800}
              height={800}
            />
          </DialogContent>
        </Dialog>
      )}
    </main>
  );
};

export default GaleriFeature;
