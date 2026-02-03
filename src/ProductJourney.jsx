import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductJourney = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0f171a] dark:text-white min-h-screen font-['Inter',sans-serif]">
      {/* Required External Assets & Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap');

        :root {
          --primary: #6cc0e4;
          --mint: #9FE0C3;
          --bg-light: #f6f7f8;
          --bg-dark: #121c20;
        }

        .glass {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .dark .glass {
          background: rgba(18, 28, 32, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pill-shadow {
          box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.05);
        }

        .hotspot {
          position: absolute;
          width: 2rem;
          height: 2rem;
          border-radius: 9999px;
          border: 1px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(110, 193, 228, 0.4);
          backdrop-filter: blur(4px);
        }

        .hotspot::after {
          content: "";
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background-color: white;
        }

        /* Tailwind specific color overrides if config is missing */
        .text-primary { color: var(--primary); }
        .bg-primary { background-color: var(--primary); }
        .text-mint { color: var(--mint); }
        .bg-mint { background-color: var(--mint); }
        .bg-background-light { background-color: var(--bg-light); }
        .dark .bg-background-dark { background-color: var(--bg-dark); }
      `}</style>

      <div className="layout-container flex h-full grow flex-col">
      

        <main className="flex flex-col gap-24 overflow-hidden">
          {/* Product Hero Section */}
          <section className="px-4 lg:px-20 py-8">
            <div className="flex flex-wrap gap-2 py-4 mb-4">
              <a className="text-[#538093] dark:text-white/60 text-sm font-medium hover:underline" href="#">Home</a>
              <span className="text-[#538093]/50 text-sm">/</span>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">Aura X-Book Pro</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="relative w-full aspect-[4/3] rounded-3xl glass flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute top-6 left-6 flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Industrial Design</span>
                    <h3 className="text-lg font-bold">Magnesium Alloy Chassis</h3>
                  </div>
                  <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg")'}}></div>
                  <div className="absolute bottom-6 flex gap-3">
                    <div className="size-16 rounded-lg glass border-2 border-primary overflow-hidden cursor-pointer p-1">
                      <div className="w-full h-full bg-cover bg-center rounded" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgt_eUoA0JBFw3jyIrDiPYdMtCwUU92g1VPHDsNeOkl-p48L04nOi72qGA9M1M35wBdriqCdjAyXuNTw5nF0ro6ohOh6R9zRHpX3cinC_AzsEV9tqsurZT932wAxwwHuXNYlsTTiu8UTjTcW_XQfLJCGYTOXEWk5jyALN8j6Untfhrp_nq7Vs8F2o9YKJDbrmPxRGboqlKyXTbB955sfHTJqTsATt_Pb4vtFoIZXZZZFiLmO8kO3XkiWBiPf8Iv59uZU_5kjtzTp8")'}}></div>
                    </div>
                    <div className="size-16 rounded-lg glass border border-white/20 overflow-hidden cursor-pointer p-1 hover:border-primary/50 transition-all">
                      <div className="w-full h-full bg-cover bg-center rounded" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBn4FGFDViSdRgmabueDXnqL_TU0VQ6EtTKwsyF0eWB8qsl8I-ryLEpuearTAsOfuJ5BaHa8fpBlVhGcBMaTI2grdoNcEKQvFR-Z0v2xtZfmG5L2YU57pgR9gP_kiG6cbdhX6pji7SSSOHG4k61icKBVhlQVjqOosIjsooPOAwOPg4Y_P7zPVOVdWs55syB_UII-QluQrIYjw-c4Tqatk0Xce--eY9yazoELxXMJWvQ7N0x4y2Mk0iXsD9uEvNX7ZVUuncqTVGWPCw")'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="sticky top-28 space-y-8">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-mint/20 text-mint text-xs font-bold uppercase tracking-wider mb-4 inline-block">Next-Gen Workstation</span>
                    <h1 className="text-6xl font-black leading-tight tracking-tighter mb-4">Aura X-Book Pro</h1>
                    <div className="flex gap-8 border-b border-white/20 mb-6">
                      <button className="pb-2 border-b-2 border-primary text-sm font-bold">Overview</button>
                      <button className="pb-2 border-b-2 border-transparent text-sm font-medium text-[#538093] hover:text-primary transition-all">Specifications</button>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-3xl font-bold tracking-tighter">$2,499.00</span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">AI-Optimized Performance</span>
                    </div>
                    <p className="text-[#538093] dark:text-white/60 text-lg leading-relaxed">
                      The ultimate tool for visionaries. Powered by the Neural-7 chipset, featuring the world's first adaptive liquid-glass display for unparalleled color fidelity.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#538093]">Memory Architecture</p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-6 py-2.5 rounded-full glass border-2 border-primary pill-shadow text-sm font-bold transition-all">32GB Unified</button>
                      <button className="px-6 py-2.5 rounded-full glass border border-transparent pill-shadow text-sm font-medium opacity-70 hover:opacity-100 transition-all">64GB Extreme</button>
                      <button className="px-6 py-2.5 rounded-full glass border border-transparent pill-shadow text-sm font-medium opacity-70 hover:opacity-100 transition-all">128GB Master</button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 pt-4">
                    <button 
                    onClick={() => navigate("/luxury")}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-16 rounded-full text-lg font-bold pill-shadow transition-all flex items-center justify-center gap-3">
                      Configure & Buy
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Components Section */}
          <section className="relative py-32 bg-white/30 dark:bg-white/5">
            <div className="max-w-7xl mx-auto px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1 h-[600px] flex items-center justify-center">
                <div className="w-full h-full bg-center bg-no-repeat bg-contain opacity-80" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFUJJaUD00YBbz4MpADx-3tY13brrwPMIb1jGrjqCk22Saqf2PEUef3kjgdum8HsnroDTvxj5YkDcLSOS3lI89AyREh93vi2v-FzbEs48tKZDAx80G6Q48XFWY5tssUZqqsg_8dUK94ODkCZ5AMW-PGT42tjHpNmWI3EZTw5KtoQNGI-9aa-dTduugUes6zaTY3nmOhdwTOT5TjCBfkVDXJeyHHolJ1QKfuI2bjBTSJPoiQtDLF22tCEblY8pqGk9T7VFiOwHDhtQ")', filter: 'contrast(1.1)'}}></div>
                <div className="absolute top-[20%] right-[-10%] glass p-4 rounded-xl w-48 shadow-2xl">
                  <p className="text-[10px] font-black text-primary uppercase mb-1">Neural-7 Chip</p>
                  <p className="text-xs leading-relaxed opacity-70">4.2 Teraflops of AI processing power, integrated into a 2nm architecture.</p>
                </div>
                <div className="absolute bottom-[30%] left-[-5%] glass p-4 rounded-xl w-48 shadow-2xl">
                  <p className="text-[10px] font-black text-mint uppercase mb-1">Carbon-Nano Battery</p>
                  <p className="text-xs leading-relaxed opacity-70">22-hour continuous runtime with thermal-optimized dissipation.</p>
                </div>
                <div className="absolute top-[10%] left-[20%] glass p-4 rounded-xl w-48 shadow-2xl">
                  <p className="text-[10px] font-black text-primary uppercase mb-1">Retina Liquid Panel</p>
                  <p className="text-xs leading-relaxed opacity-70">Over 8 million pixels with dynamic refresh up to 144Hz.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Precision Craftsmanship</p>
                <h2 className="text-5xl font-black mb-8 leading-tight">Mastery of Engineering</h2>
                <p className="text-lg text-[#538093] dark:text-white/60 leading-relaxed mb-8">
                  Every component is a masterpiece of miniaturization. We've pushed the boundaries of physics to pack desktop-level performance into a silhouette that's only 11.2mm thin.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-primary pl-6">
                    <h4 className="text-2xl font-bold">11.2mm</h4>
                    <p className="text-sm text-[#538093]">Ultra-thin profile</p>
                  </div>
                  <div className="border-l-2 border-mint pl-6">
                    <h4 className="text-2xl font-bold">1.2kg</h4>
                    <p className="text-sm text-[#538093]">Aerospace grade</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Stats */}
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-4 lg:px-20">
              <div className="text-center mb-20">
                <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">Metrics of Power</p>
                <h2 className="text-5xl font-black">Performance Visualized</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-8 rounded-[3rem] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="font-bold text-xl">Processing Speed</h4>
                      <p className="text-sm text-[#538093]">Peak Compute Cycles</p>
                    </div>
                    <span className="material-symbols-outlined text-primary">speed</span>
                  </div>
                  <div className="h-32 flex items-end gap-2 mb-6">
                    <div className="w-full bg-primary/20 rounded-t-lg h-[40%]"></div>
                    <div className="w-full bg-primary/20 rounded-t-lg h-[60%]"></div>
                    <div className="w-full bg-primary/20 rounded-t-lg h-[50%]"></div>
                    <div className="w-full bg-primary/40 rounded-t-lg h-[80%]"></div>
                    <div className="w-full bg-primary rounded-t-lg h-[100%]"></div>
                  </div>
                  <p className="text-4xl font-black tracking-tighter">3.8<span className="text-lg text-primary ml-1">GHz</span></p>
                </div>

                <div className="glass p-8 rounded-[3rem] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="font-bold text-xl">Battery Longevity</h4>
                      <p className="text-sm text-[#538093]">Mixed Usage Endurance</p>
                    </div>
                    <span className="material-symbols-outlined text-mint">battery_charging_full</span>
                  </div>
                  <div className="h-32 flex items-center justify-center mb-6">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-mint/10" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeWidth="8"></circle>
                        <circle className="text-mint" cx="56" cy="56" fill="transparent" r="48" stroke="currentColor" strokeDasharray="301.5" strokeDashoffset="60" strokeWidth="8"></circle>
                      </svg>
                      <span className="absolute text-2xl font-black">22h</span>
                    </div>
                  </div>
                  <p className="text-sm text-center font-medium opacity-70">Up to 80% charge in 35 mins</p>
                </div>

                <div className="glass p-8 rounded-[3rem] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h4 className="font-bold text-xl">Thermal Control</h4>
                      <p className="text-sm text-[#538093]">Passive Cooling Delta</p>
                    </div>
                    <span className="material-symbols-outlined text-blue-400">thermostat</span>
                  </div>
                  <div className="h-32 flex flex-col justify-center gap-4 mb-6">
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[85%]"></div>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[70%]"></div>
                    </div>
                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-400 w-[95%]"></div>
                    </div>
                  </div>
                  <p className="text-4xl font-black tracking-tighter">12%<span className="text-lg text-blue-400 ml-1">Cooler</span></p>
                </div>
              </div>
            </div>
          </section>

          {/* Immersion Section */}
          <section className="relative w-full h-[800px] overflow-hidden flex items-center justify-center bg-black">
            <div className="absolute inset-0 opacity-60 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ0FAGYAtwBlqtv9PZMce20me8GBcYcRTqH61SNk_N3zWoir-tPJ9ozWZe0mOXD45N9dfI4ntnyWxGHczujW43EF8y1sn_xJPR1_I15FG8mEqPKwNdq9OYbxlxx2Tfft23aD5ce2_oj3NQf4Mxexw9LbsrnTs-1ok9zz5aSwlUxJJQmk1FPQeBM0tPkIUUM--WV3Uzgrfz2BYWEMO-Fll0TGC9vPrMSY7Pl7nOFZj0FZrMUnXGnn3Fq5EprG2v_F8f5Ro7lPmBXU")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
            <div className="relative z-10 text-center max-w-3xl px-6">
              <p className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-4">Sensory Revelation</p>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">Pure Light.</h2>
              <p className="text-xl text-white/70 mb-12">The industry's first 10-bit P3 liquid display with over 1,600 nits of peak brightness.</p>
              <div className="flex justify-center gap-12">
                <div className="flex flex-col items-center">
                  <div className="hotspot relative mb-4"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white">4K Pixel Density</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="hotspot relative mb-4"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white">99% P3 Gamut</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="hotspot relative mb-4"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white">Delta E &lt; 1.0</p>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="py-32">
            <div className="max-w-6xl mx-auto px-4 lg:px-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4">Choose Your Power</h2>
                <p className="text-[#538093]">A configuration for every creative horizon.</p>
              </div>
              <div className="overflow-hidden glass rounded-[2rem]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="p-8 text-sm font-bold uppercase tracking-widest text-[#538093]">Feature</th>
                      <th className="p-8 text-sm font-bold uppercase tracking-widest text-[#538093]">Aura X-Book</th>
                      <th className="p-8 text-sm font-bold uppercase tracking-widest text-primary">Aura X-Book Pro</th>
                      <th className="p-8 text-sm font-bold uppercase tracking-widest text-[#538093]">Aura X-Book Ultra</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="p-8 font-medium">Display</td>
                      <td className="p-8 text-sm opacity-70">13.6" Liquid</td>
                      <td className="p-8 text-sm font-bold">14.2" Adaptive Glass</td>
                      <td className="p-8 text-sm opacity-70">16.2" Adaptive Glass</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors bg-white/5">
                      <td className="p-8 font-medium">Processor</td>
                      <td className="p-8 text-sm opacity-70">Neural-5 (8-core)</td>
                      <td className="p-8 text-sm font-bold">Neural-7 (12-core)</td>
                      <td className="p-8 text-sm opacity-70">Neural-9 (16-core)</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="p-8 font-medium">Max Memory</td>
                      <td className="p-8 text-sm opacity-70">24GB Unified</td>
                      <td className="p-8 text-sm font-bold">64GB Unified</td>
                      <td className="p-8 text-sm opacity-70">128GB Unified</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors bg-white/5">
                      <td className="p-8 font-medium">Starting Price</td>
                      <td className="p-8 text-sm opacity-70">$1,299</td>
                      <td className="p-8 text-sm font-bold text-primary text-xl">$2,499</td>
                      <td className="p-8 text-sm opacity-70">$3,499</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="pb-32 px-4">
            <div className="max-w-4xl mx-auto glass p-16 rounded-[4rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              <h2 className="text-5xl font-black mb-6">Experience the Future.</h2>
              <p className="text-lg text-[#538093] mb-10 max-w-xl mx-auto">Ships within 24 hours. Includes 2 years of Nexus Care and premium AI cloud suite.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                onClick={() => navigate("/luxury")}
                 className="px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">Add to Cart</button>
                <button 
                onClick={() => navigate("/product-discovery")}
                className="px-12 py-5 glass border border-primary/30 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  Find a Retailer</button>
              </div>
            </div>
          </section>
        </main>


      </div>
    </div>
  );
};

export default ProductJourney;