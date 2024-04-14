import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle } from "react-icons/gr";
import { FaImages } from "react-icons/fa";
import { MdOutlineVideoCameraBack } from "react-icons/md";

import type { SidebarItems } from "@/components/layouts/dashboard-sidebar-menu";

export const ROUTES_PATH = {
  home: "/",
  login: "/auth/login",
  profile: "/profile",
  progamAcara: "/program-acara",
  dashboard: {
    index: "/dashboard",
    progamAcara: "/dashboard/progam-acara",
    admin: "/dashboard/admin",
  },
};

export const SIDEBAR_ITEMS: SidebarItems[] = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    href: ROUTES_PATH.dashboard.index,
  },
  {
    title: "Progam Acara",
    icon: GrArticle,
    href: ROUTES_PATH.dashboard.progamAcara,
  },
];
