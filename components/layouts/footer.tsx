import React from "react";
import Image from "next/image";

import { Separator } from "../ui/separator";

const Footer = () => {
  const GetTimeYear = () => {
    return new Date().getFullYear();
  };

  const FOOTER_DATA = [
    {
      title: "Link",
      content: [
        {
          title: "Yayasan MTA",
          href: "https://mta.or.id/",
        },
        {
          title: "Pemuda MTA",
          href: "https://pemuda.mta.or.id/",
        },
        {
          title: "Ponpes MTA",
          href: "https://www.mta.ponpes.id/",
        },
        {
          title: "SMA MTA",
          href: "https://www.smamta-ska.sch.id/",
        },
      ],
    },
    {
      title: "Media",
      content: [
        {
          title: "Website MTATV",
          href: "http://mtatv.net/v2/",
        },
        {
          title: "Download mp3",
          href: "http://mp3.mtafm.com/",
        },
        {
          title: "Youtube MTATV",
          href: "https://www.youtube.com/user/OfficialMTATV",
        },
        {
          title: "Facebook MTATV",
          href: "https://web.facebook.com/mtatvofficial/?_rdc=1&_rdr",
        },
        {
          title: "Alamat Kajian MTA",
          href: "https://mta.or.id/alamat/",
        },
      ],
    },
    {
      title: "Alamat",
      content: [
        {
          title: "Jln. Cilosari No. 214, Semanggi",
          href: "",
        },
        {
          title: "Pasarkliwon, Solo",
          href: "",
        },
        {
          title: "Telp : (0271) 638-123",
          href: "",
        },
        {
          title: "Email: radiopersadafm@gmail.com",
          href: "",
        },
        {
          title: "Interaktif: 081 393 80 9000",
          href: "",
        },
      ],
    },
  ];

  return (
    <footer className="container">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="inline bg-sky-400 px-3 py-1 text-white">
            Tentang Kami
          </h3>
          <div className="h-1 bg-sky-400" />
          <Image
            src="/images/persada-logo.png"
            alt="Persada Logo"
            width={200}
            height={100}
            className="mt-6"
          />
        </div>
        {FOOTER_DATA.map((item, index) => (
          <div key={index}>
            <h3 className="inline bg-sky-400 px-3 py-1 text-white">
              {item.title}
            </h3>
            <div className="h-1 bg-sky-400" />
            {item.content.map((content, index) => (
              <div key={index} className="mt-4 flex flex-col text-sm">
                {content.href !== "" ? (
                  <a
                    href={content.href}
                    target="_blank"
                    rel="noreferrer"
                    className="pb-1 transition-colors hover:text-sky-400"
                  >
                    {content.title}
                  </a>
                ) : (
                  <p className="pb-1 text-gray-500">{content.title}</p>
                )}
                <Separator />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          &copy;
          <GetTimeYear /> Persada FM Radio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
