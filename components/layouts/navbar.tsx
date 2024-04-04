"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href ? "text-teal-200" : "text-white";
  };

  const HEADER_DATA = [
    {
      text: "(0271) 638 123",
      logo: FaPhone,
      href: "tel:+62271638123",
    },
    {
      text: "officialmtatv@gmail.com",
      logo: MdEmail,
      href: "mailto:",
    },
    {
      text: "Website Resmi MTA TV",
      logo: BsGlobe2,
      href: "https://mtatv.co.id",
    },
  ];

  const SOSIAL_MEDIA = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/mtatv/",
      logo: SlSocialFacebook,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/mtatv/",
      logo: SlSocialInstagram,
    },
    {
      title: "Youtube",
      href: "https://www.youtube.com/channel/UC2J8Hw4Qj3JZ7Tm5W1k3G3w",
      logo: SlSocialYoutube,
    },
  ];

  const NAVBAR_DATA = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Profile",
      href: "/profile",
    },
    {
      text: "Progam Acara",
      href: "/program-acara",
    },
    {
      text: "Kabar Persada",
      href: "/kabar-persada",
    },
    {
      text: "Jadwal Acara",
      href: "/jadwal-acara",
    },
    {
      text: "Galeri",
      href: "/galeri",
    },
    {
      text: "Kontak Kami",
      href: "/kontak-kami",
    },
  ];

  const Search = () => (
    <div className="flex gap-1">
      <Input placeholder="Search" />
      <Button variant="outline" size="icon">
        <FaMagnifyingGlass />
      </Button>
    </div>
  );

  return (
    <>
      <header>
        <div className=" w-full bg-sky-400 px-5 py-3">
          <div className="container flex items-center justify-between">
            <div className="hidden gap-5 md:flex">
              {HEADER_DATA.map((item, index) => (
                <a
                  key={index}
                  href={item.href + item.text}
                  className="flex items-center justify-center gap-2"
                >
                  <item.logo className="h-5 w-5 text-teal-100" />
                  <p>{item.text}</p>
                </a>
              ))}
            </div>
            <div className="flex w-full items-center justify-center gap-2 md:w-auto">
              {SOSIAL_MEDIA.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <item.logo className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-3 py-2 md:flex-row md:gap-0 md:py-5">
          <Image
            src="/images/persada-logo.png"
            alt="Persada Logo"
            width={200}
            height={100}
          />
          <div className="hidden md:block">
            <Search />
          </div>
        </div>
      </header>
      <nav className="sticky top-0 z-50 hidden md:block">
        <div className="bg-teal-100 pb-2 pt-2">
          <div className="bg-sky-400 py-3 text-white">
            <ul className="container flex items-center justify-between gap-5 ">
              {NAVBAR_DATA.map((item, index) => (
                <li
                  key={index}
                  className={`text-sm font-semibold uppercase ${isActive(item.href)}`}
                >
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="sticky top-0 z-50 block md:hidden">
        <div className="container grid grid-cols-4 items-center justify-between gap-4 bg-white py-3 drop-shadow-md">
          <div className="col-span-3">
            <Search />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="justify-self-end"
              >
                <GiHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col gap-3">
                  {NAVBAR_DATA.map((item, index) => (
                    <li key={index} className="py-1 font-semibold uppercase">
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
