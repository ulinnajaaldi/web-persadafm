import React from "react";
import { Metadata } from "next";

import DashboardGaleriFeature from "@/features/Dashboard/Galeri";

export const metadata: Metadata = {
  title: "Dashboard Galeri",
};

const DashboardGaleri = () => {
  return <DashboardGaleriFeature />;
};

export default DashboardGaleri;
