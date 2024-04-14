"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DashboardNavbar from "./dashboard-navbar";
import { ROUTES_PATH } from "@/constants/routes";

const DashboardHeader: React.FC = () => {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="block">
          <Link href={ROUTES_PATH.home}>
            <Image
              src="/images/persada-logo.png"
              alt="Persada FM Logo"
              width={160}
              height={160}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          PersadaFM Dashboard
          <DashboardNavbar />
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
