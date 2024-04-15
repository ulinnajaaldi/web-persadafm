import React from "react";
import { Metadata } from "next";

import KabarPersadaDetailFeature from "@/features/Base/KabarPersadaDetail";

export const metadata: Metadata = {
  title: "Kabar Persada Detail",
};

const KabarPersadaDetail = ({ params }: { params: { id: string } }) => {
  return <KabarPersadaDetailFeature params={params} />;
};

export default KabarPersadaDetail;
