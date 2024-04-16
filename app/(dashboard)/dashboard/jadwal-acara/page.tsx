import React from "react";
import { Metadata } from "next";

import DashboardJadwalAcaraFeatuer from "@/features/Dashboard/JadwalAcara";

export const metadata: Metadata = {
  title: "Dashboard Jawdal Acara",
};

const DashboardJadwalAcara = () => {
  return <DashboardJadwalAcaraFeatuer />;
};

export default DashboardJadwalAcara;
