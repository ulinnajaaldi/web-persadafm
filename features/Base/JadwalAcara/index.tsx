"use client";

import React from "react";

import { useGetJadwalAcara } from "@/useCase/JadwalAcaraUsecCase";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const JadwalAcaraFeature = () => {
  const [today, _] = React.useState(
    new Date().toLocaleDateString("id-ID", { weekday: "long" }),
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(null as any);

  const { data, isLoading } = useGetJadwalAcara({
    value: "",
  });

  const dateNow = data?.data?.results.filter((item: any) => {
    return item.day.toLowerCase() === today.toLowerCase();
  });

  const otherDay = data?.data?.results.filter((item: any) => {
    return item.day.toLowerCase() !== today.toLowerCase();
  });

  if (isLoading)
    return (
      <div className="container">
        <h1 className="text-center">Loading...</h1>
      </div>
    );

  return (
    <main>
      <section className="container my-10">
        <h1 className="mb-5 pb-5 text-center text-xl font-bold sm:text-3xl md:text-4xl">
          Jadwal Acara Hari Ini
        </h1>
        <div className="w-full overflow-x-auto">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableCaption className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500">
              Daftar acara pada hari ini{" "}
              <span className="font-semibold text-gray-900">{today}</span>
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Jam
                </TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Nama Acara
                </TableHead>
                <TableHead className="w-full px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:w-[400px]">
                  Keterangan
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-200 bg-white">
              {dateNow[0].events.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap px-6 py-4 font-medium">
                    {item.hours}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-6 py-4">
                    {item.name}
                  </TableCell>
                  <TableCell
                    className="whitespace-nowrap px-6 py-4"
                    dangerouslySetInnerHTML={{
                      __html: item.description.replace(/\n/g, "<br />"),
                    }}
                  ></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="container my-10">
        <h1 className="mb-5 pb-5 text-center text-xl font-bold sm:text-3xl md:text-4xl">
          Jadwal Acara Dihari Lainnya
        </h1>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-10">
          {otherDay.map((item: any, index: number) => (
            <div
              key={index}
              className="group relative flex h-[120px] cursor-pointer items-center justify-center rounded-lg border bg-white p-5 shadow-md"
              onClick={() => {
                setIsOpen(true);
                setIsSelected(item);
              }}
            >
              <h2 className="text-center text-xl font-bold">{item.day}</h2>
              <p className="absolute bottom-0 right-0 m-2 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                Klik untuk lihat detail
              </p>
            </div>
          ))}
        </div>

        {isSelected && (
          <Dialog open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
            <DialogContent className="w-full overflow-x-scroll sm:max-w-4xl">
              <div className="min-w-max">
                <DialogHeader>
                  <DialogTitle>JADWAL ACARA HARI {isSelected.day}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-[80vh]">
                  <Table className="min-w-full divide-y divide-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Jam
                        </TableHead>
                        <TableHead className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                          Nama Acara
                        </TableHead>
                        <TableHead className="w-full px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:w-[400px]">
                          Keterangan
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-200 bg-white">
                      {isSelected.events.map((item: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell className="whitespace-nowrap px-6 py-4 font-medium">
                            {item.hours}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-6 py-4">
                            {item.name}
                          </TableCell>
                          <TableCell
                            className="whitespace-nowrap px-6 py-4"
                            dangerouslySetInnerHTML={{
                              __html: item.description.replace(/\n/g, "<br />"),
                            }}
                          ></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </section>
    </main>
  );
};

export default JadwalAcaraFeature;
