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

export default function CarouselLuxuryShowcase() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Exclusive Collections
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
          Discover our curated collections that define sophistication and elegance.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {collections.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer transform transition duration-500 hover:scale-105"
          >
            {/* Background Image */}
            <div
              className="w-full h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="uppercase text-xs md:text-sm tracking-widest opacity-70">
                Collection {index + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm md:text-base italic opacity-80 mt-1">{item.subtitle}</p>
              )}
              <button className="mt-5 px-6 py-2 rounded-full bg-white text-black font-semibold uppercase shadow-md hover:shadow-lg transition-all">
                Explore
              </button>
            </div>

            {/* Subtle shine effect */}
            <div className="absolute inset-0 pointer-events-none bg-white/5 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
