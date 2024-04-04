import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/layouts/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Persada FM",
    default: "Persada FM",
  },
  description:
    "Persada FM adalah stasiun radio yang berlokasi di Kota Surakarta, Jawa Tengah, Indonesia. Persada FM menyajikan berbagai informasi terkini dan terpercaya seputar Kota Surakarta dan sekitarnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
