import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const KontakKamiFeature = () => {
  return (
    <main>
      <section className="container my-10">
        <h1 className="pb-5 text-center text-xl font-bold sm:text-3xl md:text-4xl">
          KONTAK KAMI
        </h1>

        <div className="mt-3 grid grid-cols-1 gap-10 md:mt-10 md:grid-cols-2 md:gap-0">
          <div className="flex justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-base font-bold md:text-3xl">
                  Get in Touch
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
                  Silahkan hubungi kami untuk informasi lebih lanjut.
                </p>
              </div>
              <form
                action="mailto:info@example.com?subject=New%20Message&body="
                className="space-y-4"
                method="get"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" placeholder="eg. John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="eg. john@gmail.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="subject untuk pesan"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    className="min-h-[120px]"
                    id="message"
                    placeholder="Masukan pesan"
                    required
                  />
                </div>
                <Button
                  className="w-full bg-sky-500 transition-colors hover:bg-sky-500/80"
                  type="submit"
                >
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h1>
                <span className="bg-sky-500 px-10 py-2 text-white">
                  Media Sosial
                </span>
              </h1>
              <div className="space-y-5 rounded-md border p-3 md:p-5">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <FaInstagram className="h-5 w-5" />
                  <p>Instagram : @radiopersadafm</p>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <FaFacebook className="h-5 w-5" />
                  <p>Facebook : 102,2 Persada FM</p>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <FaYoutube className="h-5 w-5" />
                  <p>Youtube : 102,2 Persada FM</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1>
                <span className="bg-sky-500 px-10 py-2 text-white">
                  Maps Persada FM
                </span>
              </h1>
              <div className="relative w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3954.9168385635235!2d110.833251!3d-7.584031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1641eb386cf9%3A0x6017cb93548ce907!2sMTA%20FM!5e0!3m2!1sid!2sus!4v1713400839082!5m2!1sid!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KontakKamiFeature;
