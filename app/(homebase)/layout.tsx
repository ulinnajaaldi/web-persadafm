import React from "react";
import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

export default function Homebase({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="my-5">{children}</div>
      <Footer />
    </>
  );
}
