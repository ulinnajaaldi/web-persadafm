import React from "react";
import { Metadata } from "next";

import KabarPersadaFeature from "@/features/Base/KabarPersada";

export const metadata: Metadata = {
  title: "Kabar persada",
};

const KabarPersada = () => {
  return <KabarPersadaFeature />;
};

export default KabarPersada;
