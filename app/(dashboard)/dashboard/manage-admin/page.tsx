import React from "react";
import { Metadata } from "next";

import DashboardManageAdminFeature from "@/features/Dashboard/ManageAdmin";

export const metadata: Metadata = {
  title: "Dashboard Manage Admin",
};

const DashboardManageAdmin = () => {
  return <DashboardManageAdminFeature />;
};

export default DashboardManageAdmin;
