"use client";

import React, { type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { IconType } from "react-icons/lib";
import useAuthStore from "@/hook/useAuth";
import { useShallow } from "zustand/react/shallow";
import { GrUserAdmin } from "react-icons/gr";

export interface SidebarItems {
  title: string;
  icon: IconType;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

interface DashboardNavProps {
  items: SidebarItems[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const DashboardSidebarMenu: React.FC<DashboardNavProps> = ({
  items,
  setOpen,
}) => {
  const path = usePathname();
  const [data] = useAuthStore(useShallow((state) => [state.data]));

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
      {data?.data?.role === "Superadmin" && (
        <Link
          href="/dashboard/manage-admin"
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
        >
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <GrUserAdmin className="mr-2 h-4 w-4" />
            <span>Manage Admin</span>
          </span>
        </Link>
      )}
    </nav>
  );
};

export default DashboardSidebarMenu;
