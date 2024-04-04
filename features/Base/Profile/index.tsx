import Image from "next/image";
import React from "react";

const ProfileFeature = () => {
  const MISI = [
    "Mewujudkan Visi dari segi program.",
    " Menjadi radio swasta yang kredibel dan dikelola secara profesional dalam mengemban fungsi sosial.",
    "Mewujudkan Visi dari segi teknis.",
    "Memanfaatkan teknologi mutakhir sehingga mampu menyajikan siaran sesuai standar yang ditetapkan.",
    "Mewujudkan visi dari segi manajemen.",
    " Menjalankan organisasi dengan efektif dan efisien serta tanggap atas segala perubahan yang terjadi berdasarkan Latar belakang.",
  ];

  const MEDIASOSIAL = [
    "Youtube : 102,2 Persada FM",
    "Facebook : 102,2 Persada FM",
    "Instagram : @radiopersadafm",
  ];

  const DETAIL_PERUSAHAAN = [
    {
      title: "Perusahaan",
      description: "PT. Radio Gema Persada Insani",
    },
    {
      title: "Nama Radio",
      description: "Persada FM",
    },
    {
      title: "Frekuensi",
      description: "FM 102,2 MHz",
    },
    {
      title: "Format",
      description: "Religi, News dan Talkshow",
    },
    {
      title: "Segmentasi",
      description: "Keluarga",
    },
    {
      title: "Sapaan Pendengar",
      description: "Saudaraku Pendengar Persada FM",
    },
    {
      title: "Slogan",
      description: "Pilihan Pas Kita dan Keluarga",
    },
    {
      title: "Jam Siar",
      description: "05.00 – 24.00 WIB ",
    },
    {
      title: "Alamat Kantor",
      description:
        "Jl. Cilosari No. 214, Semanggi, Pasar Kliwon, Surakarta. Kode Pos (57117)",
    },
    {
      title: "0271 – 664748",
      description: "Telepon/fax",
    },
    {
      title: "0852-9299-9906",
      description: "Marketing",
    },
    {
      title: "Website",
      description: "www.radiopersadafm.com",
    },
  ];

  return (
    <main>
      <section className="container grid grid-cols-1 gap-10 md:grid-cols-2">
        <Image
          src="/images/profile-persada-base.png"
          alt="Profile Persada FM"
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">Persada FM</h1>
          <p className="text-lg font-medium">
            Lembaga Penyiaran Swasta dengan basis pendengar dewasa, remaja dan
            anak-anak kelas menengah, Menyajikan ragam program yang mendidik dan
            mencerahkan, dengan format religi, news & talkshow. Mengudara secara
            resmi mulai 31 Desember 2010, jangkauan siaran meliputi Sragen,
            Solo, Karanganyar, Sukoharjo, Klaten, Boyolali dan Wonogiri.
          </p>
        </div>
      </section>

      <section className="my-10 bg-[#F7EEDD] py-10">
        <div className="container space-y-10 ">
          <div className="space-y-3">
            <h2 className="text-center text-4xl font-semibold">VISI</h2>
            <p className="bg-sky-400 px-5 py-3 text-center text-xl text-white">
              Terbangunnya keluarga Indonesia yang sakinah berkualitas dan
              produktif.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-center text-4xl font-semibold">MISI</h2>
            <ul className="list-inside list-decimal space-y-1 bg-sky-400 px-5 py-5 text-lg text-white">
              {MISI.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container my-10">
        <h3 className="pb-5 text-center text-3xl font-semibold">
          Detail Perusahaan
        </h3>
        <div className="grid grid-cols-3 gap-5">
          {DETAIL_PERUSAHAAN.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center bg-sky-400 px-5 py-10"
            >
              <h4 className="text-center text-xl font-semibold">
                {item.description}
              </h4>
              <p className="absolute left-0 top-0 bg-teal-200 px-4 py-1 text-center font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="my-10 bg-[#F7EEDD] py-10">
        <div className="container grid grid-cols-3 gap-5 space-y-10">
          <Image
            src="/images/profile-mediasosial.png"
            alt="Profile Persada FM"
            width={500}
            height={500}
            className="col-span-1 h-full w-full object-cover"
          />
          <div className="col-span-2 space-y-5">
            <h3 className="text-3xl font-semibold">Media Sosial</h3>
            <div className="space-y-4">
              {MEDIASOSIAL.map((item, index) => (
                <p
                  key={index}
                  className="bg-sky-400 py-2 text-center text-2xl font-semibold"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container my-10">
        <h3 className="pb-5 text-center text-3xl font-semibold">
          Berniaga bersama Persada FM
        </h3>
        <div className="flex flex-col gap-5 md:flex-row">
          <Image
            src="/images/profile-berniaga.png"
            alt="Berniaga bersama Persada FM"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
          <p className="text-lg font-medium">
            Persada FM memiliki jangkauan siaran yang luas serta jaringan
            diberbagai wilayah di Indonesia, dengan segmen pendengar yang jelas,
            hubungi kami untuk mendapatkan penawaran terbaik kami
            di 0852-9299-9906
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProfileFeature;
