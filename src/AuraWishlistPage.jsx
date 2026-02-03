import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuraWishlistPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#FAFAF9] dark:bg-[#111c21] font-['Inter',sans-serif] text-[#0e171b] dark:text-white transition-colors duration-300 min-h-screen pb-24">
      {/* Global Styles for Glassmorphism and Masonry */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .glass-card {
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .dark .glass-card {
            background: rgba(17, 28, 33, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .masonry-grid {
            column-count: 3;
            column-gap: 1.5rem;
        }
        @media (max-width: 1024px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 640px) { .masonry-grid { column-count: 1; } }
        .masonry-item {
            break-inside: avoid;
            margin-bottom: 1.5rem;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-1 { font-variation-settings: 'FILL' 1; }
      `}} />



      <main className="max-w-[1440px] mx-auto px-6 py-12 flex gap-8">
        {/* Sidebar Rail */}
        <aside className="w-64 hidden xl:flex flex-col gap-8 sticky top-32 h-fit">
          <div className="flex flex-col gap-2">
            <h3 className="px-4 text-xs font-bold uppercase tracking-widest text-[#47baeb]/60 mb-2">Library</h3>
            <a className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#47baeb] text-white font-bold" href="#">
              <span className="material-symbols-outlined">grid_view</span>
              <span className="text-sm">All Items</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-colors font-medium" href="#">
              <span className="material-symbols-outlined">folder</span>
              <span className="text-sm">Moodboards</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-colors font-medium" href="#">
              <span className="material-symbols-outlined">colors_spark</span>
              <span className="text-sm">AI Suggestions</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-colors font-medium" href="#">
              <span className="material-symbols-outlined">archive</span>
              <span className="text-sm">Archive</span>
            </a>
          </div>

          <div className="glass-card p-6 rounded-lg border-[#47baeb]/20 bg-[#47baeb]/5">
            <p className="text-sm font-semibold mb-2">Refine your look</p>
            <p className="text-xs opacity-70 leading-relaxed mb-4">Let our AI analyze your wishlist to find complementary pieces.</p>
            <button className="w-full py-3 bg-[#47baeb] text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#47baeb]/20">
              <span className="material-symbols-outlined text-lg">magic_button</span>
              AI Refine
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {/* Page Heading */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-black tracking-tight mb-4">Wishlist & <span className="text-[#47baeb]">Moodboards</span></h1>
              <p className="text-lg opacity-60 leading-relaxed">Curate your personal aesthetic. Our AI suggests textures and tones based on your saved items.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 glass-card rounded-full font-bold text-sm hover:bg-white/80 transition-all">
                <span className="material-symbols-outlined text-lg">ios_share</span>
                Share Gallery
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-black/5 dark:border-white/5 mb-8">
            <a className="pb-4 text-sm font-bold border-b-2 border-[#47baeb] text-[#47baeb]" href="#">All Items (24)</a>
            <a className="pb-4 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">Recent Boards</a>
            <a className="pb-4 text-sm font-medium opacity-50 hover:opacity-100 transition-opacity" href="#">Collaborative</a>
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {/* Product Card 1 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
               onClick={() => navigate("/ethereal")} 
               className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCinhB61Som_XVF1bogYl-vYTvByR-wjiYu3PHJj6U-oColIqkdGM1xbQwnH8sxIJRzsNNFg-woSzLjxH5ym4ZsLQeYcqYsdGeXy7TfXEqCDSNjxnr2s_e-l1KB3FzStUaTchElZRm9a4C110KJ7nPkvd79aZ9NgTUvRLHZB7cHdsXZUxAi5QVZnKL9B3w2rqsgsoXpY5Gqw6uhvkB9i-o8gFWrbqpTZUgVqly3GitWStbrc2mWPPJmEb8P4fpmHNrncjCwm4HTql0" alt="Linen armchair" />
                <button className="absolute top-3 right-3 glass-card size-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-red-400 fill-1">favorite</span>
                </button>
              </div>
              <div 
               onClick={() => navigate("/premium-product")}
              className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">FURNITURE</p>
                  <h4 className="font-bold text-sm">Orbital Lounge Chair</h4>
                </div>
                <p className="text-sm font-black">$840</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
              onClick={() => navigate("/ethereal")}
              className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAW2sIo5mgDxAkNQPpMH6bGx9CrVY_dCDv5ZoGfTy8BtZHQp3X-v3EEi_WSjpvdx_pSev9HJXI0Sf-WhNeRy_ujPH1eJEhcMOYi_SQX4GJWgaJh98bDVKumGQseKqscUt_bEua1hYxz68ySAtscTDjDblNnwWqynTLfGNlZ5WyeF5GMqyhL8S8uJS1fM0R-qjhwq-hqR5aFM99RjRhiESS4Z7UDbu9p7p-yh13mERDk7xMR2RDY_HThSdpqHfrT46wUyCt348-IE" alt="Ceramic vase" />
                <div className="absolute bottom-3 left-3 px-3 py-1 glass-card rounded-full text-[10px] font-black uppercase tracking-widest">AI Suggested</div>
              </div>
              <div 
               onClick={() => navigate("/premium-product")}
              className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">DECOR</p>
                  <h4 className="font-bold text-sm">Matte Sculptural Vase</h4>
                </div>
                <p className="text-sm font-black">$120</p>
              </div>
            </div>

    

            {/* Product Card 4 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
              onClick={() => navigate("/ethereal")}
              className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhGuc2GHXHJ78xqE3RnNtiZqONxwS_D325IcaeLEPjZ3y5GYz6GJ5N3yoJ1oJiYZM38zp156qd71J287EbpY0tPIeYmR0asylcLe-2evHDaGsZGaUmNdGpgHzs9A7n73xz77vLomCvXHPq7myQ1SpiUG_wdw64rkK1zjwemvLugD1Y87ey_IN9dVNfn6sDB_96_DOCj1a2t166JtCZtbJjKTVJgVGE-fiurg129nVuBNVr9oj3lPYAeDoEFSgiituo79PbfsAMDh8" alt="Woven blanket" />
              </div>
              <div 
              onClick={() => navigate("/premium-product")}
              className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">TEXTILES</p>
                  <h4 className="font-bold text-sm">Woven Cloud Throw</h4>
                </div>
                <p className="text-sm font-black">$85</p>
              </div>
            </div>
                      {/* Product Card 1 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
              onClick={() => navigate("/ethereal")}
              className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCinhB61Som_XVF1bogYl-vYTvByR-wjiYu3PHJj6U-oColIqkdGM1xbQwnH8sxIJRzsNNFg-woSzLjxH5ym4ZsLQeYcqYsdGeXy7TfXEqCDSNjxnr2s_e-l1KB3FzStUaTchElZRm9a4C110KJ7nPkvd79aZ9NgTUvRLHZB7cHdsXZUxAi5QVZnKL9B3w2rqsgsoXpY5Gqw6uhvkB9i-o8gFWrbqpTZUgVqly3GitWStbrc2mWPPJmEb8P4fpmHNrncjCwm4HTql0" alt="Linen armchair" />
                <button className="absolute top-3 right-3 glass-card size-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-red-400 fill-1">favorite</span>
                </button>
              </div>
              <div 
               onClick={() => navigate("/premium-product")} className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">FURNITURE</p>
                  <h4 className="font-bold text-sm">Orbital Lounge Chair</h4>
                </div>
                <p className="text-sm font-black">$840</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
              onClick={() => navigate("/ethereal")} 
              className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAW2sIo5mgDxAkNQPpMH6bGx9CrVY_dCDv5ZoGfTy8BtZHQp3X-v3EEi_WSjpvdx_pSev9HJXI0Sf-WhNeRy_ujPH1eJEhcMOYi_SQX4GJWgaJh98bDVKumGQseKqscUt_bEua1hYxz68ySAtscTDjDblNnwWqynTLfGNlZ5WyeF5GMqyhL8S8uJS1fM0R-qjhwq-hqR5aFM99RjRhiESS4Z7UDbu9p7p-yh13mERDk7xMR2RDY_HThSdpqHfrT46wUyCt348-IE" alt="Ceramic vase" />
                <div className="absolute bottom-3 left-3 px-3 py-1 glass-card rounded-full text-[10px] font-black uppercase tracking-widest">AI Suggested</div>
              </div>
              <div 
              onClick={() => navigate("/premium-product")}
              className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">DECOR</p>
                  <h4 className="font-bold text-sm">Matte Sculptural Vase</h4>
                </div>
                <p className="text-sm font-black">$120</p>
              </div>
            </div>

    

            {/* Product Card 4 */}
            <div className="masonry-item glass-card p-4 rounded-xl group transition-all hover:-translate-y-2">
              <div 
              onClick={() => navigate("/ethereal")}
              className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-white/30">
                <img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhGuc2GHXHJ78xqE3RnNtiZqONxwS_D325IcaeLEPjZ3y5GYz6GJ5N3yoJ1oJiYZM38zp156qd71J287EbpY0tPIeYmR0asylcLe-2evHDaGsZGaUmNdGpgHzs9A7n73xz77vLomCvXHPq7myQ1SpiUG_wdw64rkK1zjwemvLugD1Y87ey_IN9dVNfn6sDB_96_DOCj1a2t166JtCZtbJjKTVJgVGE-fiurg129nVuBNVr9oj3lPYAeDoEFSgiituo79PbfsAMDh8" alt="Woven blanket" />
              </div>
              <div 
              onClick={() => navigate("/premium-product")}
              className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-[#47baeb] mb-1">TEXTILES</p>
                  <h4 className="font-bold text-sm">Woven Cloud Throw</h4>
                </div>
                <p className="text-sm font-black">$85</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating AI Suggestion Bar
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 z-50">
        <div className="glass-card rounded-full p-2 pl-6 flex items-center justify-between shadow-2xl shadow-[#47baeb]/30 border-[#47baeb]/30 ring-4 ring-[#47baeb]/5">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="size-8 rounded-full border-2 border-white bg-blue-100"></div>
              <div className="size-8 rounded-full border-2 border-white bg-purple-100"></div>
              <div className="size-8 rounded-full border-2 border-white bg-pink-100"></div>
            </div>
            <div>
              <p className="text-xs font-black">AI REFINING</p>
              <p className="text-[10px] opacity-60">Matching textures to "Summer Minimalist"</p>
            </div>
          </div>
          <button className="bg-[#47baeb] text-white px-6 py-2.5 rounded-full text-xs font-black flex items-center gap-2 hover:bg-[#47baeb]/90 transition-colors">
            <span className="material-symbols-outlined text-lg">auto_fix_high</span>
            View Suggestions
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default AuraWishlistPage;