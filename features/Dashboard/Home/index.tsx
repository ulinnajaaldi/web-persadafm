"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { IoMdImages } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";

import useAuthStore from "@/hook/useAuth";
import { axiosInstanceToken } from "@/lib/axios";
import { GrArticle } from "react-icons/gr";

const DashboardHomeFeature = () => {
  const [data] = useAuthStore(useShallow((state) => [state.data]));

  const { data: dataCount, isLoading } = useQuery({
    queryKey: ["dashboard-count"],
    queryFn: async () => {
      const response = await axiosInstanceToken.get("/v1/api/count");
      return response.data;
    },
  });

  return (
    <main className="flex-1 p-4 pt-6 md:p-8">
      <section className="container space-y-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <h2 className="font-medium">Hello {data?.data?.username || ""}</h2>
        {isLoading ? (
          <div className="grid animate-pulse grid-cols-3 gap-8 ">
            <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
            <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
            <div className="h-36 rounded-xl bg-gray-100 p-7 "></div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-4 rounded-xl border p-7 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Progam Acara</h2>
                <GrArticle className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold">
                Total +{dataCount.data.countProgamAcara}
              </p>
            </div>
            <div className="space-y-4 rounded-xl border p-7 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Kabar Persada</h2>
                <IoNewspaperOutline className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold">
                Total +{dataCount.data.countKabarBerita}
              </p>
            </div>
            <div className="space-y-4 rounded-xl border p-7 shadow-md">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Galeri</h2>
                <IoMdImages className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold">
                Total +{dataCount.data.countGaleriImage}
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default DashboardHomeFeature;
