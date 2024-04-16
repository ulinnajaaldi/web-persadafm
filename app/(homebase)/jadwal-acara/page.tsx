import React from "react";
import { Metadata } from "next";

import JadwalAcaraFeature from "@/features/Base/JadwalAcara";

export const metadata: Metadata = {
  title: "Jadwal Acara",
};

const JadwalAcara = () => {
  return <JadwalAcaraFeature />;
};

export default JadwalAcara;
