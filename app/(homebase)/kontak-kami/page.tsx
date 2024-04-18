import KontakKamiFeature from "@/features/Base/KontakKami";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontak Kami",
};

const KontakKami = () => {
  return <KontakKamiFeature />;
};

export default KontakKami;
