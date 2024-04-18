import React from "react";
import { IoCalendarClearOutline } from "react-icons/io5";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTES_PATH } from "@/constants/routes";

interface ProgamAcaraSectionProps {
  isLoading: boolean;
  data: any;
}

const ProgamAcaraSection: React.FC<ProgamAcaraSectionProps> = ({
  isLoading,
  data,
}) => {
  const router = useRouter();
  return (
    <section className="bg-[#F7EEDD] py-10">
      <h2 className="pb-5 text-center text-xl font-bold md:text-3xl">
        Progam Acara
      </h2>
      {isLoading ? (
        <div className="container relative grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="animate-pulse rounded-lg bg-white">
            <div className="h-[300px] bg-gray-300"></div>
            <div className="flex flex-col gap-3 px-10 pb-4 pt-2">
              <div className="h-6 bg-gray-300"></div>
              <div className="h-4 bg-gray-300"></div>
              <div className="h-4 bg-gray-300"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="animate-pulse rounded-lg bg-white">
                <div className="grid h-[120px] max-h-[120px] grid-cols-3">
                  <div className="relative col-span-1">
                    <div className="h-full w-full bg-gray-300"></div>
                  </div>

                  <div className="col-span-2 flex flex-col items-start justify-center gap-2 px-2">
                    <div className="h-6 bg-gray-300"></div>
                    <div className="h-4 bg-gray-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container relative grid grid-cols-1 gap-10 md:grid-cols-2">
          <div
            className="group cursor-pointer rounded-lg bg-white"
            onClick={() => {
              router.push(`${ROUTES_PATH.progamAcara}`);
            }}
          >
            <div className="h-56 md:h-[300px]">
              <Image
                src={data?.data?.results[0].image}
                alt={data?.data?.results[0].title}
                width={1000}
                height={500}
                className="h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 px-5 pb-4 pt-2 md:px-10">
              <h3 className="text-lg font-semibold transition-colors group-hover:text-sky-500 md:text-xl">
                {data?.data?.results[0].title}
              </h3>
              <div className="flex items-start gap-1 text-sm font-medium md:text-base">
                <IoCalendarClearOutline className="h-5 w-5" />
                <p>{data?.data?.results[0].time}</p>
              </div>
              <p className="line-clamp-3 text-sm font-medium md:text-base">
                {data?.data?.results[0].content}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {data?.data?.results.slice(1, 4).map((item: any, index: number) => (
              <div
                key={index}
                className="group cursor-pointer rounded-lg bg-white"
                onClick={() => {
                  router.push(`${ROUTES_PATH.progamAcara}`);
                }}
              >
                <div className="grid h-[120px] max-h-[120px] grid-cols-5 md:grid-cols-3">
                  <div className="relative col-span-3 md:col-span-1">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="absolute h-full w-full rounded-l-lg object-cover"
                    />
                  </div>

                  <div className="col-span-2 flex flex-col items-start justify-center gap-2 px-2">
                    <h3 className="text-base font-semibold uppercase transition-colors group-hover:text-sky-500 md:text-lg">
                      {item.title}
                    </h3>
                    <div className="flex items-start gap-1 text-xs font-medium md:items-center md:text-base ">
                      <IoCalendarClearOutline className="hidden h-5 w-5 md:block" />
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Button className="w-full self-end bg-sky-500 hover:bg-sky-500/80 md:w-[80%]">
              <Link href="/program-acara">LIHAT PROGRAM ACARA LAINNYA</Link>
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgamAcaraSection;
