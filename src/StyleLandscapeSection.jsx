// import React from "react";

// const StyleLandscapeSection = () => {
//   return (
//     <>
//       <section className="py-40 px-16 bg-[#FAFAF9]">
//         <div className="max-w-7xl mx-auto">
//           {/* Title */}
//           <div className="text-center mb-32">
//             <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary/30">
//               AI Composition
//             </span>
//             <h2 className="text-8xl mt-6">
//               <span className="text-magazine">Style</span>
//               <span className="text-magazine-bold">Landscape</span>
//             </h2>
//           </div>

//           {/* Main visual container */}
//           <div className="relative h-[800px] glass-ultra rounded-[4rem] overflow-hidden border-white/60">
//             {/* Background gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-pearl via-champagne/10 to-chrome/20"></div>

//             {/* Floating elements */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               {/* Large floating image */}
//               <div
//                 className="relative z-30 size-96 floating-subtle"
//                 style={{ animationDelay: "-2s" }}
//               >
//                 <div
//                   className="w-full h-full bg-center bg-no-repeat bg-contain"
//                   style={{
//                     backgroundImage:
//                       'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg")',
//                   }}
//                 ></div>
//               </div>

//               {/* Top-left floating circle */}
//               <div
//                 className="absolute top-20 left-1/4 size-48 glass-iridescent p-4 rounded-full floating-subtle"
//                 style={{ animationDelay: "-5s" }}
//               >
//                 <div
//                   className="w-full h-full bg-cover bg-center rounded-full"
//                   style={{
//                     backgroundImage:
//                       'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk3_9E0nGxNuQo2pjmjYZBkAlckxsvqUPNdVSTSuCJjhGjbuLlzc1R_LsGjpCudm2nE9FYxNGsX7VwCZt6SPuXpnFtQneuFgC6UltvSt7_BpT7k-2hdEQTX5fDzkfjkxYxV1Ku9vQ2K5ogEJ49pKAIpnd_bTLiRSeQZ2fNd19spc7Z8bVdt2fE-VTjX2mxvaNRzjpyoqoDGq1iw33FmuED99DuFvfqqAhXKrgJj96WIdAoGvFZIzJNA5tP-mvkJHPWCNZJb3z22QA")',
//                   }}
//                 ></div>
//               </div>

//               {/* Bottom-right floating circle */}
//               <div
//                 className="absolute bottom-20 right-1/4 size-64 glass-iridescent p-6 rounded-full floating-subtle"
//                 style={{ animationDelay: "-8s" }}
//               >
//                 <div
//                   className="w-full h-full bg-cover bg-center rounded-full"
//                   style={{
//                     backgroundImage:
//                       'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg")',
//                   }}
//                 ></div>
//               </div>

//               {/* Top-right linen texture */}
//               <div
//                 className="absolute top-1/3 right-1/4 size-32 glass-iridescent p-4 rounded-full floating-subtle"
//                 style={{ animationDelay: "-1s" }}
//               >
//                 <div className="w-full h-full bg-zinc-200 rounded-full flex items-center justify-center">
//                   <span className="text-[10px] font-bold text-black/30">Linen Texture</span>
//                 </div>
//               </div>
//             </div>

//             {/* Cohesion score card */}
//             <div className="absolute bottom-16 left-16 glass-ultra p-10 max-w-sm rounded-3xl">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="size-3 bg-champagne rounded-full animate-pulse"></div>
//                 <h5 className="text-xs font-black uppercase tracking-widest">
//                   Cohesion Score: 98%
//                 </h5>
//               </div>
//               <p className="text-sm font-light leading-relaxed text-primary/70">
//                 "The X-1 series integrates seamlessly with your existing minimalism palette. The pearl accents of the frame mirror the highlights in your archived outerwear collection."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default StyleLandscapeSection;




import React from "react";

const StyleLandscapeSection = () => {
  // 4 click handlers for the floating elements
  const handleLargeImageClick = () => {
    alert("Large image clicked!");
  };

  const handleTopLeftClick = () => {
    alert("Top-left circle clicked!");
  };

  const handleBottomRightClick = () => {
    alert("Bottom-right circle clicked!");
  };

  const handleTopRightClick = () => {
    alert("Top-right linen texture clicked!");
  };

  return (
    <section className="py-40 px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.8em] font-black text-primary/30">
            AI Composition
          </span>
          <h2 className="text-8xl mt-6">
            <span className="text-magazine">Style</span>
            <span className="text-magazine-bold">Landscape</span>
          </h2>
        </div>

        {/* Main visual container */}
        <div className="relative h-[800px] glass-ultra rounded-[4rem] overflow-hidden border-white/60">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pearl via-champagne/10 to-chrome/20"></div>

          {/* Floating elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Large floating image */}
            <div
              className="relative z-30 size-96 floating-subtle cursor-pointer"
              style={{ animationDelay: "-2s" }}
              onClick={handleLargeImageClick}
            >
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg")',
                }}
              ></div>
            </div>

            {/* Top-left floating circle */}
            <div
              className="absolute top-20 left-1/4 size-48 glass-iridescent p-4 rounded-full floating-subtle cursor-pointer"
              style={{ animationDelay: "-5s" }}
              onClick={handleTopLeftClick}
            >
              <div
                className="w-full h-full bg-cover bg-center rounded-full"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk3_9E0nGxNuQo2pjmjYZBkAlckxsvqUPNdVSTSuCJjhGjbuLlzc1R_LsGjpCudm2nE9FYxNGsX7VwCZt6SPuXpnFtQneuFgC6UltvSt7_BpT7k-2hdEQTX5fDzkfjkxYxV1Ku9vQ2K5ogEJ49pKAIpnd_bTLiRSeQZ2fNd19spc7Z8bVdt2fE-VTjX2mxvaNRzjpyoqoDGq1iw33FmuED99DuFvfqqAhXKrgJj96WIdAoGvFZIzJNA5tP-mvkJHPWCNZJb3z22QA")',
                }}
              ></div>
            </div>

            {/* Bottom-right floating circle */}
            <div
              className="absolute bottom-20 right-1/4 size-64 glass-iridescent p-6 rounded-full floating-subtle cursor-pointer"
              style={{ animationDelay: "-8s" }}
              onClick={handleBottomRightClick}
            >
              <div
                className="w-full h-full bg-cover bg-center rounded-full"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg")',
                }}
              ></div>
            </div>

            {/* Top-right linen texture */}
            <div
              className="absolute top-1/3 right-1/4 size-32 glass-iridescent p-4 rounded-full floating-subtle cursor-pointer"
              style={{ animationDelay: "-1s" }}
              onClick={handleTopRightClick}
            >
              <div className="w-full h-full bg-zinc-200 rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-black/30">Linen Texture</span>
              </div>
            </div>
          </div>

          {/* Cohesion score card */}
          <div className="absolute bottom-16 left-16 glass-ultra p-10 max-w-sm rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="size-3 bg-champagne rounded-full animate-pulse"></div>
              <h5 className="text-xs font-black uppercase tracking-widest">
                Cohesion Score: 98%
              </h5>
            </div>
            <p className="text-sm font-light leading-relaxed text-primary/70">
              "The X-1 series integrates seamlessly with your existing minimalism palette. The pearl accents of the frame mirror the highlights in your archived outerwear collection."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleLandscapeSection;
