import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PremiumProductPage = () => {
  const navigate = useNavigate();
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [activeColor, setActiveColor] = useState('Sky Blue');

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0f171a] dark:text-white min-h-screen">
      {/* Dynamic Style Injection for Custom Config */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap');

        :root {
          --primary: #6cc0e4;
          --mint: #9FE0C3;
          --background-light: #f6f7f8;
          --background-dark: #121c20;
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

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Tailwind-compatible custom classes */
        .text-primary { color: var(--primary); }
        .bg-primary { background-color: var(--primary); }
        .border-primary { border-color: var(--primary); }
        .bg-mint { background-color: var(--mint); }
        .text-mint { color: var(--mint); }
        .bg-background-light { background-color: var(--background-light); }
        .dark .bg-background-dark { background-color: var(--background-dark); }
      `}</style>

      <div className="layout-container flex h-full grow flex-col font-['Inter',sans-serif]">
   

        <main className="px-4 lg:px-20 py-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 py-4 mb-4">
            <a className="text-[#538093] dark:text-white/60 text-sm font-medium hover:underline" href="#">Home</a>
            <span className="text-[#538093]/50 text-sm">/</span>
            <a className="text-[#538093] dark:text-white/60 text-sm font-medium hover:underline" href="#">Electronics</a>
            <span className="text-[#538093]/50 text-sm">/</span>
            <span className="text-primary text-sm font-semibold">Visionary X-1 AI Headset</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Product Preview */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative w-full aspect-square rounded-[1rem] glass flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                  <span className="material-symbols-outlined text-[14px]">3d_rotation</span>
                  Drag to rotate
                </div>
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-contain transition-transform duration-700 hover:scale-105" 
                  style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/${7 + activeThumbnail}")` }}
                ></div>
                {/* Mini Thumbnails Rail */}
                <div className="absolute bottom-6 flex gap-3">
                  {[8, 9, 10].map((imgId, idx) => (
                    <div 
                      key={imgId}
                      onClick={() => setActiveThumbnail(idx)}
                      className={`size-16 rounded-lg glass overflow-hidden cursor-pointer p-1 transition-all ${activeThumbnail === idx ? 'border-2 border-primary' : 'border border-white/20 hover:border-primary/50'}`}
                    >
                      <div className="w-full h-full bg-cover bg-center rounded" style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/${imgId}")` }}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  Community Sentiments
                  <span className="text-sm font-normal text-[#538093] bg-primary/10 px-2 py-0.5 rounded-full">4.9 ★</span>
                </h3>
                <div className="space-y-4">
                  <div className="glass p-6 rounded-xl relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all border-l-4 border-l-primary">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">JD</div>
                        <div>
                          <p className="font-bold text-sm">Julian De Luca</p>
                          <p className="text-[10px] text-[#538093] uppercase tracking-widest">Verified Aesthetician</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-primary">expand_more</span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-80">The noise cancellation isn't just silence; it's a curated environment. The AI assistant predicts my focus tracks perfectly.</p>
                  </div>
                </div>
                <button className="mt-4 text-primary font-bold text-sm hover:underline">Read all 1,240 reviews</button>
              </div>
            </div>

            {/* Right Column: Controls */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-8">
                <div>
                  <span className="px-3 py-1 rounded-full bg-mint/20 text-mint text-xs font-bold uppercase tracking-wider mb-3 inline-block">AI Pick of the Month</span>
                  <h1 className="text-5xl font-black leading-tight tracking-tight mb-4">Visionary X-1 AI Headset</h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold">$349.00</span>
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">Free Next-Day Shipping</span>
                  </div>
                  <p className="text-[#538093] dark:text-white/60 text-lg leading-relaxed">
                    Experience spatial audio redefined. Our AI chipset analyzes your ear shape in real-time to deliver a bespoke soundscape.
                  </p>
                </div>

                {/* Variant Selectors */}
                <div className="space-y-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#538093]">Frame Finish</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: 'Sky Blue', color: 'bg-primary' },
                      { name: 'Frost White', color: 'bg-[#E5E7EB]' },
                      { name: 'Midnight', color: 'bg-[#1F2937]' }
                    ].map((variant) => (
                      <button 
                        key={variant.name}
                        onClick={() => setActiveColor(variant.name)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full glass pill-shadow text-sm transition-all ${activeColor === variant.name ? 'border-2 border-primary font-bold' : 'border border-transparent opacity-70 hover:opacity-100'}`}
                      >
                        <span className={`size-4 rounded-full ${variant.color} ring-2 ring-offset-2 ring-black/10`}></span>
                        {variant.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                
                 <button
        onClick={() => navigate("/luxury")} // ✅ navigate to home on click
        className="w-full bg-primary hover:bg-primary/90 text-white h-16 rounded-full text-lg font-bold pill-shadow transition-all flex items-center justify-center gap-3 active:scale-95"
      >
        Add to Cart
        {/* <span className="material-symbols-outlined">shopping_bag</span> */}
      </button>

      {/* Review button (optional, no navigation) */}
      <button
        onClick={() => navigate("/product-journey")} 
        className="w-full glass hover:bg-white/60 dark:hover:bg-white/10 h-16 rounded-full text-lg font-bold pill-shadow transition-all flex items-center justify-center gap-3"
      >
        {/* <span className="material-symbols-outlined text-primary">auto_awesome</span> */}
        Review
      </button>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass p-4 rounded-xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-mint">verified_user</span>
                    <div>
                      <p className="text-xs font-bold uppercase">Warranty</p>
                      <p className="text-xs text-[#538093]">2-Year Premium Care</p>
                    </div>
                  </div>
                  <div className="glass p-4 rounded-xl flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">sync</span>
                    <div>
                      <p className="text-xs font-bold uppercase">Returns</p>
                      <p className="text-xs text-[#538093]">60-Day Trial Period</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommended Rail */}
          <section className="mt-24 pb-20">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Curated for you</p>
                <h2 className="text-4xl font-black">AI Recommendations</h2>
              </div>
              <div className="flex gap-2">
                <button className="size-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
                <button className="size-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
              {[
                { name: 'OmniMount Glass Stand', price: '$59.00', match: '98% Match', id: 11, color: 'text-primary' },
                { name: 'WaveSync Mini Speaker', price: '$129.00', match: 'Top Complement', id: 12, color: 'text-mint' },
                { name: 'LuxeTravel Armor Case', price: '$45.00', match: 'Essentials', id: 13, color: 'text-primary' },
                { name: 'Volt Pad Ultra', price: '$79.00', match: 'Smart Charging', id: 14, color: 'text-mint' }
              ].map((item) => (
                <div key={item.id} className="min-w-[280px] glass rounded-2xl p-4 group cursor-pointer transition-all hover:translate-y-[-4px]">
                  <div className="w-full aspect-square rounded-xl bg-background-light dark:bg-white/5 mb-4 overflow-hidden">
                    <div className="w-full h-full bg-center bg-no-repeat bg-contain group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url("http://googleusercontent.com/profile/picture/${item.id}")` }}></div>
                  </div>
                  <p className={`text-xs font-bold uppercase mb-1 ${item.color}`}>{item.match}</p>
                  <h4 className="font-bold mb-2">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{item.price}</span>
                    <button className="size-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

      </div>
    </div>
  );
};

export default PremiumProductPage;