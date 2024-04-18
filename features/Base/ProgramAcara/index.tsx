"use client";

import React from "react";
import Image from "next/image";

import { useGetProgamAcara } from "@/useCase/ProgamAcaraUseCase";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProgramAcaraFeature = () => {
  const [value, setValue] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(100);

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState<any>(null);

  const { data: dataProgam, isLoading: isLoadingProgam } = useGetProgamAcara({
    value,
    page,
    limit,
  });

  const hightlightProgam = dataProgam?.data?.results.filter(
    (item: any) => item.highlight === true,
  );

  const unhightlightProgam = dataProgam?.data?.results.filter(
    (item: any) => item.highlight === false,
  );

  const handleDialogOpen = (item: any) => {
    setIsSelected(item);
    setIsDialogOpen(true);
  };

  return (
    <main>
      <section className="my-10">
        <h1 className="pb-5 text-center text-xl font-bold sm:text-3xl md:text-4xl">
          PROGRAM ACARA UNGGULAN
        </h1>
        <div className="container">
          {isLoadingProgam ? (
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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
              {hightlightProgam.map((item: any, index: number) => (
                <div
                  key={index}
                  className="group relative h-full rounded-lg border p-4"
                >
                  <div className="h-[160px] overflow-hidden md:h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-full w-full transform rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute left-0 top-0 ml-4 mt-4 rounded-br-lg rounded-tl-lg bg-sky-400 px-2 py-1 text-sm text-white transition-all duration-300 group-hover:rounded-tl-none">
                    Hightlight ⭐
                  </div>
                  <div className="space-y-3">
                    <h3 className="bg-sky-400 py-2 text-center text-base font-semibold uppercase text-white sm:text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base">{item.time}</p>
                    <p className="line-clamp-3 text-sm font-medium md:text-base">
                      {item.content}
                    </p>
                    <div className="flex items-center justify-end">
                      <Button
                        variant="secondary"
                        onClick={() => handleDialogOpen(item)}
                      >
                        Selengkapnya
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="my-20">
        <div className="bg-sky-400 py-3 text-white">
          <div className="container">
            <h1 className="text-center text-xl font-bold sm:text-3xl md:text-4xl">
              PROGRAM ACARA LAINNYA
            </h1>
          </div>
        </div>
        <div className="container mt-10">
          {isLoadingProgam ? (
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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
              {unhightlightProgam.map((item: any, index: number) => (
                <div
                  key={index}
                  className="group relative h-full rounded-lg border p-4"
                >
                  <div className="h-[160px] overflow-hidden md:h-[200px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-full w-full transform rounded-t-lg object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="bg-sky-400 py-2 text-center text-base font-semibold uppercase text-white sm:text-lg md:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base">{item.time}</p>
                    <p className="line-clamp-3 text-sm font-medium md:text-base">
                      {item.content}
                    </p>
                    <div className="flex items-center justify-end">
                      <Button
                        variant="secondary"
                        onClick={() => handleDialogOpen(item)}
                      >
                        Selengkapnya
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <DialogContent className="max-w-3xl">
          <ScrollArea className="h-[80vh] md:h-auto">
            <DialogHeader>
              <DialogTitle>{isSelected?.title}</DialogTitle>
              <div className="space-y-5">
                {isSelected?.highlight && (
                  <Badge variant="outline">Hightlight</Badge>
                )}
                <div className="h-[160px] md:h-[320px]">
                  <Image
                    src={isSelected?.image}
                    alt={isSelected?.title}
                    width={500}
                    height={500}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <p className="text-justify text-sm font-medium md:text-base">
                  Jadwal: {isSelected?.time}
                </p>
                <DialogDescription
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: isSelected?.content.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            </DialogHeader>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ProgramAcaraFeature;
