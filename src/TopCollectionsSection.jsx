// // import React from "react";

// // const TopCollectionsSection = () => {
// //   const collections = [
// //     {
// //       id: "01",
// //       title: "The Serenity Series",
// //       subtitle: "Editorial Selection",
// //       image:
// //         "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
// //       span: "Editorial Selection",
// //       large: true,
// //     },
// //     {
// //       id: "02",
// //       title: "Cyber Rituals",
// //       image:
// //         "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399qRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
// //       large: false,
// //     },
// //     {
// //       id: "03",
// //       title: "Clay & Glass",
// //       image:
// //         "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
// //       large: false,
// //     },
// //   ];

// //   const handleCardClick = (title) => {
// //     alert(`You clicked on "${title}"! 🎯`);
// //   };

// //   return (
// //     <section className="max-w-7xl mx-auto px-6 mb-40">
// //       <div className="flex justify-between items-end mb-16">
// //         <div>
// //           <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
// //             Curated Vault
// //           </span>
// //           <h2 className="text-4xl font-bold">Top Collections</h2>
// //         </div>
// //         <button className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-all text-sm font-bold">
// //           View Archive
// //         </button>
// //       </div>

// //       <div className="grid grid-cols-12 gap-6 h-[800px]">
// //         {/* Large left card */}
// //         <div
// //           onClick={() => handleCardClick(collections[0].title)}
// //           className="col-span-8 h-full glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
// //         >
// //           <div
// //             className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
// //             style={{ backgroundImage: `url('${collections[0].image}')` }}
// //           >
// //             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
// //             <div className="absolute bottom-10 left-10 text-white">
// //               <p className="text-xs font-bold tracking-widest uppercase mb-2">
// //                 {collections[0].span}
// //               </p>
// //               <h3 className="text-4xl font-bold">{collections[0].title}</h3>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right smaller cards */}
// //         <div className="col-span-4 h-full flex flex-col gap-6">
// //           {collections.slice(1).map((col) => (
// //             <div
// //               key={col.id}
// //               onClick={() => handleCardClick(col.title)}
// //               className="flex-1 glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
// //             >
// //               <div
// //                 className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 relative group-hover:scale-105"
// //                 style={{ backgroundImage: `url('${col.image}')` }}
// //               >
// //                 <div className="absolute bottom-8 left-8 text-white">
// //                   <h3 className="text-2xl font-bold">{col.title}</h3>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopCollectionsSection;
// import React from "react";

// const TopCollectionsSection = () => {
//   const collections = [
//     {
//       id: "01",
//       title: "The Serenity Series",
//       subtitle: "Editorial Selection",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
//       span: "Editorial Selection",
//       large: true,
//     },
//     {
//       id: "02",
//       title: "Cyber Rituals",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399qRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
//       large: false,
//     },
//     {
//       id: "03",
//       title: "Clay & Glass",
//       image:
//         "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
//       large: false,
//     },
//   ];

//   const handleCardClick = (title) => {
//     alert(`You clicked on "${title}"! 🎯`);
//   };

//   return (
//     <section className="mt-[50px]  ">
//       {/* SIDE SPACING WRAPPER */}
//       <div className="flex w-full">
//         {/* LEFT 9% */}
//         <div className="w-[9%]" />

//         {/* MAIN CONTENT */}
//         <div className="w-[90%] max-w-7xl mx-auto px-6 mb-40">
//           {/* Header */}
//           <div className="flex justify-between items-end mb-16 pt-16">
//             <div>
//               <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
//                 Curated Vault
//               </span>
//               <h2 className="text-4xl font-bold">Top Collections</h2>
//             </div>
//             <button className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-all text-sm font-bold">
//               View Archive
//             </button>
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-12 gap-6 h-[800px]">
//             {/* Large left card */}
//             <div
//               onClick={() => handleCardClick(collections[0].title)}
//               className="col-span-8 h-full glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
//             >
//               <div
//                 className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
//                 style={{ backgroundImage: `url('${collections[0].image}')` }}
//               >
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
//                 <div className="absolute bottom-10 left-10 text-white">
//                   <p className="text-xs font-bold tracking-widest uppercase mb-2">
//                     {collections[0].span}
//                   </p>
//                   <h3 className="text-4xl font-bold">
//                     {collections[0].title}
//                   </h3>
//                 </div>
//               </div>
//             </div>

//             {/* Right cards */}
//             <div className="col-span-4 h-full flex flex-col gap-6">
//               {collections.slice(1).map((col) => (
//                 <div
//                   key={col.id}
//                   onClick={() => handleCardClick(col.title)}
//                   className="flex-1 glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
//                 >
//                   <div
//                     className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
//                     style={{ backgroundImage: `url('${col.image}')` }}
//                   >
//                     <div className="absolute bottom-8 left-8 text-white">
//                       <h3 className="text-2xl font-bold">{col.title}</h3>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>


//       </div>
//     </section>
//   );
// };

// export default TopCollectionsSection;
import React from "react";

const TopCollectionsSection = () => {
  const collections = [
    {
      id: "01",
      title: "The Serenity Series",
      span: "Editorial Selection",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw",
    },
    {
      id: "02",
      title: "Cyber Rituals",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBV_O0E0neG6KlmFe8VGQmKAO89399qRJU15UCPJ1Ar_21MtrNOmJcY50wln-rYBX-ETZfdCoA2TznNFn3FHMn7VHf97sXGwxxuH86UOCx2FmTWmKg2DLwZbS_gdgqVTe7nMSqT61urx3r0_LwpWnDikErIkYvDLJh7Esf87reBYs-Dmi_Ne2ppbAY2nswPFh4qD1bCelxLzaFaWE_rN2utJSJ_gApe6SdNmK0T-2u5jqW4r7Ax74T858RkDvRjsjLF8YP-KQF62Ig",
    },
    {
      id: "03",
      title: "Clay & Glass",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAvqUHgvoZJdA9UR9BgUqLJH4hNhDAjsFbN9LByTLMWuTj-CaLPLt8S9mcl-_iMyiq3s07t5S_-T2W93VxAQppQO2vTwnWO9py0CysZw5HwMx26vIaNLDVu1XrBf1REGejB65baRaHQcgnrDDDs4O2w1wq1wuXgCRvGSO_KkONPVkqY9jb7ZoYQNOE6j5pADTCjh06OWDZWSaq9J3l1nONkrNCOnPPFB11oyqrNEpy3dMHCmz8QiA3vdEdzeKOV_uMniKw358s3Rp0",
    },
  ];

  const handleCardClick = (title) => {
    alert(`You clicked on "${title}"! 🎯`);
  };

  return (
    <section className="w-full mt-[50px]">
      {/* 90% RESPONSIVE WRAPPER */}
      <div className="w-[86%] max-w-[1600px] mx-auto pt-16 mb-40">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold">Top Collections</h2>
          </div>
          <button className="px-8 py-3 rounded-full border border-black/10 hover:bg-black/5 transition-all text-sm font-bold">
            View Archive
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6 h-[800px]">
          {/* Large Card */}
          <div
            onClick={() => handleCardClick(collections[0].title)}
            className="col-span-8 glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
          >
            <div
              className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
              style={{ backgroundImage: `url('${collections[0].image}')` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-bold tracking-widest uppercase mb-2">
                  {collections[0].span}
                </p>
                <h3 className="text-4xl font-bold">
                  {collections[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Stack */}
          <div className="col-span-4 flex flex-col gap-6">
            {collections.slice(1).map((col) => (
              <div
                key={col.id}
                onClick={() => handleCardClick(col.title)}
                className="flex-1 glass-card p-4 group cursor-pointer overflow-hidden rounded-[2rem]"
              >
                <div
                  className="w-full h-full rounded-[1.5rem] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 relative"
                  style={{ backgroundImage: `url('${col.image}')` }}
                >
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold">{col.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCollectionsSection;
