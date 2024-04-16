import { LuLayoutDashboard } from "react-icons/lu";
import { GrArticle, GrScheduleNew } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoMdImages } from "react-icons/io";

import type { SidebarItems } from "@/components/layouts/dashboard-sidebar-menu";

export const ROUTES_PATH = {
  home: "/",
  login: "/auth/login",
  profile: "/profile",
  progamAcara: "/program-acara",
  kabarBerita: "/kabar-persada",
  jadwalAcara: "/jadwal-acara",
  galeri: "/galeri",
  dashboard: {
    index: "/dashboard",
    progamAcara: "/dashboard/progam-acara",
    kabarBerita: "/dashboard/kabar-persada",
    jadwalAcara: "/dashboard/jadwal-acara",
    galeri: "/dashboard/galeri",
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
  {
    title: "Kabar Persada",
    icon: IoNewspaperOutline,
    href: ROUTES_PATH.dashboard.kabarBerita,
  },
  {
    title: "Jadwal Acara",
    icon: GrScheduleNew,
    href: ROUTES_PATH.dashboard.jadwalAcara,
  },
  {
    title: "Galeri",
    icon: IoMdImages,
    href: ROUTES_PATH.dashboard.galeri,
  },
];
