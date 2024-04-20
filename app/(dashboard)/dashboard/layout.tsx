import React from "react";

import DashboardHeader from "@/components/layouts/dashboard-header";
import DashboardSidebar from "@/components/layouts/dashboard-sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebar />
        <main className="hidden w-full pt-16 md:block">{children}</main>
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5 text-black md:hidden">
          <p className="break-words px-5 text-center font-bold">
            Untuk dashboard silahkan untuk menggunakan perangkat desktop
          </p>
          <Button variant="outline" asChild>
            <Link href="/">Kembali ke halaman utama</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
