"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { SIDEBAR_ITEMS } from "@/constants/routes";
import DashboardSidebarMenu from "./dashboard-sidebar-menu";

const DashboardSidebar = () => {
  return (
    <nav
      className={cn(`relative hidden h-screen w-72 border-r pt-16 lg:block`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardSidebarMenu items={SIDEBAR_ITEMS} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardSidebar;
