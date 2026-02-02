

import React from "react";

const collections = [
  {
    id: "01",
    title: "The Serenity Series",
    subtitle: "Editorial Selection",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
    large: true,
  },
  {
    id: "02",
    title: "Cyber Rituals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399rRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
    large: false,
  },
  {
    id: "03",
    title: "Clay & Glass",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
    large: false,
  },
];

export default function CarouselLuxuryShowcase() {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Exclusive Collections
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Experience premium craftsmanship with every swipe. Designed for those
          who appreciate the finer things.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-x-auto gap-8 px-6 md:px-0 snap-x snap-mandatory scroll-smooth no-scrollbar">
        {collections.map((item, index) => (
          <div
            key={item.id}
            className={`relative flex-none w-[350px] md:w-[500px] snap-center rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform transform hover:scale-105 hover:rotate-1`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md transition-all duration-500 group-hover:bg-black/10"></div>

            {/* Content */}
            <div className="relative p-8 flex flex-col justify-end h-full text-white">
              <span className="uppercase text-sm tracking-widest opacity-50">
                Collection {index + 1}
              </span>
              <h3 className="text-3xl font-bold mt-2">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-2 text-lg opacity-70 italic">{item.subtitle}</p>
              )}
              <button className="mt-6 self-start px-6 py-3 rounded-full bg-white text-black font-semibold uppercase shadow-lg hover:shadow-2xl transition-all">
                Explore
              </button>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 opacity-25 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 opacity-20 blur-3xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
