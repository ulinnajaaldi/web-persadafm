import React from "react";
import { Metadata } from "next";

import ProgramAcaraFeature from "@/features/Base/ProgramAcara";

export const metadata: Metadata = {
  title: "Progam Acara",
};

const ProgramAcara = () => {
  return <ProgramAcaraFeature />;
};

export default ProgramAcara;
