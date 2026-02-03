// import React from "react";

// const MaterialIntegritySection = () => {
  
//   const handleImageClick = () => {
//     alert("Image clicked! 🎯");
//   };

//   return (
//     <section className="py-40 px-16 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-12 gap-16 items-center">
//           {/* Left Text Column */}
//           <div className="col-span-5">
//             <h2 className="text-7xl mb-12">
//               <span className="text-magazine italic block">Material</span>
//               <span className="text-magazine-bold block">Integrity</span>
//             </h2>
//             <div className="space-y-16">
//               <div className="glass-iridescent p-12 rounded-xl">
//                 <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
//                   Liquid Silicon
//                 </h4>
//                 <p className="text-primary/60 font-light leading-relaxed">
//                   Hypoallergenic architecture that contours to the human form,
//                   offering a thermal-neutral experience that feels like second
//                   skin.
//                 </p>
//               </div>
//               <div className="glass-iridescent p-12 rounded-xl">
//                 <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
//                   Soft Chrome
//                 </h4>
//                 <p className="text-primary/60 font-light leading-relaxed">
//                   Individually polished frame providing structural rigidity with
//                   the weight of a whisper.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Image Column */}
//           <div className="col-span-7">
//             <div className="aspect-[4/5] glass-ultra p-4 rounded-xl relative group">
//               <div
//                 onClick={handleImageClick}
//                 className="w-full h-full bg-cover bg-center rounded-lg grayscale hover:grayscale-0 cursor-pointer transition-all duration-1000"
//                 style={{
//                   backgroundImage:
//                     'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFUJJaUD00YBbz4MpADx-3tY13brrwPMIb1jGrjqCk22Saqf2PEUef3kjgdum8HsnroDTvxj5YkDcLSOS3lI89AyREh93vi2v-FzbEs48tKZDAx80G6Q48XFWY5tssUZqqsg_8dUK94ODkCZ5AMW-PGT42tjHpNmWI3EZTw5KtoQNGI-9aa-dTduugUes6zaTY3nmOhdwTOT5TjCBfkVDXJeyHHolJ1QKfuI2bjBTSJPoiQtDLF22tCEblY8pqGk9T7VFiOwHDhtQ")',
//                 }}
//               ></div>

//               {/* Overlay for glass effect */}
//               <div className="absolute inset-0 border border-white/40 rounded-xl pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.5)]"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MaterialIntegritySection;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaterialIntegritySection = () => {
   const navigate = useNavigate();
  const [isWhiteBg, setIsWhiteBg] = useState(true);

  const toggleBg = () => {
    setIsWhiteBg(prev => !prev);
  };

  // const handleImageClick = (e) => {
  //   e.stopPropagation(); // prevents section toggle if image is clicked
  //   alert("Image clicked! 🎯");
  // };
    const handleImageClick = (e) => {
    e.stopPropagation();
    navigate("/product-journey"); // ✅ programmatic navigation
  };

  return (
    <section
      onClick={toggleBg}
      className={`py-40 px-16 transition-colors duration-500 ${
        isWhiteBg ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <div className="col-span-5">
            <h2 className="text-7xl mb-12">
              <span className="text-magazine italic block">Material</span>
              <span className="text-magazine-bold block">Integrity</span>
            </h2>

            <div className="space-y-16">
              <div className="glass-iridescent p-12 rounded-xl">
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                  Liquid Silicon
                </h4>
                <p className="text-primary/60 font-light leading-relaxed">
                  Hypoallergenic architecture that contours to the human form,
                  offering a thermal-neutral experience that feels like second skin.
                </p>
              </div>

              <div className="glass-iridescent p-12 rounded-xl">
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
                  Soft Chrome
                </h4>
                <p className="text-primary/60 font-light leading-relaxed">
                  Individually polished frame providing structural rigidity with
                  the weight of a whisper.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-span-7">
            <div className="aspect-[4/5] glass-ultra p-4 rounded-xl relative group">
              <div
                onClick={handleImageClick}
                className="w-full h-full bg-cover bg-center rounded-lg grayscale hover:grayscale-0 cursor-pointer transition-all duration-1000"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFUJJaUD00YBbz4MpADx-3tY13brrwPMIb1jGrjqCk22Saqf2PEUef3kjgdum8HsnroDTvxj5YkDcLSOS3lI89AyREh93vi2v-FzbEs48tKZDAx80G6Q48XFWY5tssUZqqsg_8dUK94ODkCZ5AMW-PGT42tjHpNmWI3EZTw5KtoQNGI-9aa-dTduugUes6zaTY3nmOhdwTOT5TjCBfkVDXJeyHHolJ1QKfuI2bjBTSJPoiQtDLF22tCEblY8pqGk9T7VFiOwHDhtQ")',
                }}
              />
              <div className="absolute inset-0 border border-white/40 rounded-xl pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialIntegritySection;
