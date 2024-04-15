import React from "react";
import { Metadata } from "next";

import DashboardKabarPersadaFeature from "@/features/Dashboard/KabarPersada";

export const metadata: Metadata = {
  title: "Dashboard Kabar Berita",
};

const DashboardKabarPersada = () => {
  return <DashboardKabarPersadaFeature />;
};

export default DashboardKabarPersada;
