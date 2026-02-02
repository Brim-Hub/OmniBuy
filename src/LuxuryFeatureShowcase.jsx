import React from "react";

const collections = [
  {
    id: "01",
    title: "The Serenity Series",
    subtitle: "Editorial Selection",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
  },
  {
    id: "02",
    title: "Cyber Rituals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399rRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
  },
  {
    id: "03",
    title: "Clay & Glass",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
  },
];

export default function LuxuryFeatureShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Featured Collections
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          A curated selection showcasing artistry, elegance, and modern luxury.
        </p>
      </div>

      {/* Featured Cards Layout */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-end gap-8 md:gap-12 relative">
        {/* Left Card */}
        <div className="relative w-64 md:w-72 lg:w-80 transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 shadow-2xl rounded-3xl overflow-hidden cursor-pointer group">
          <div
            className="w-full h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${collections[1].image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="uppercase text-xs tracking-widest opacity-70">Collection 2</span>
            <h3 className="text-2xl font-bold mt-2">{collections[1].title}</h3>
            <button className="mt-4 px-5 py-2 rounded-full bg-white text-black font-semibold uppercase shadow-md hover:shadow-lg transition-all">
              Explore
            </button>
          </div>
        </div>

        {/* Center Featured Card */}
        <div className="relative w-80 md:w-96 lg:w-[28rem] transform hover:scale-105 transition-all duration-500 shadow-2xl rounded-3xl overflow-hidden cursor-pointer group z-10">
          <div
            className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${collections[0].image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="uppercase text-sm tracking-widest opacity-70">Collection 1</span>
            <h3 className="text-3xl font-bold mt-2">{collections[0].title}</h3>
            {collections[0].subtitle && (
              <p className="text-base italic opacity-80 mt-1">{collections[0].subtitle}</p>
            )}
            <button className="mt-5 px-6 py-2 rounded-full bg-white text-black font-semibold uppercase shadow-md hover:shadow-lg transition-all">
              Explore
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-64 md:w-72 lg:w-80 transform rotate-[5deg] hover:rotate-0 transition-all duration-500 shadow-2xl rounded-3xl overflow-hidden cursor-pointer group">
          <div
            className="w-full h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${collections[2].image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="uppercase text-xs tracking-widest opacity-70">Collection 3</span>
            <h3 className="text-2xl font-bold mt-2">{collections[2].title}</h3>
            <button className="mt-4 px-5 py-2 rounded-full bg-white text-black font-semibold uppercase shadow-md hover:shadow-lg transition-all">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div className="absolute -top-20 -left-20 w-36 h-36 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-300 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-400 opacity-15 blur-3xl pointer-events-none"></div>
    </section>
  );
}
