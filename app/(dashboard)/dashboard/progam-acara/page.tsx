import React from "react";
import { Metadata } from "next";

import DashboardProgamAcaraFeature from "@/features/Dashboard/ProgamAcara";

export const metadata: Metadata = {
  title: "Dashboard Progam Acara",
};

const DashboardProgamAcara = () => {
  return <DashboardProgamAcaraFeature />;
};

export default DashboardProgamAcara;
