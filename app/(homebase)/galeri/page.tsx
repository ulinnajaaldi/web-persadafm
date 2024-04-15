import React from "react";
import { Metadata } from "next";

import GaleriFeature from "@/features/Base/Galeri";

export const metadata: Metadata = {
  title: "Galeri",
};

const Galeri = () => {
  return <GaleriFeature />;
};

export default Galeri;
