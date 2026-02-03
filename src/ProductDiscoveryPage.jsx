// // // import React, { useState } from 'react';

// // // /**
// // //  * ProductDiscoveryGrid Component
// // //  * A 100% faithful React conversion of the AI Curated Product Grid.
// // //  * Includes glassmorphism, responsive sidebar, and dark mode support.
// // //  */
// // // const ProductDiscoveryGrid = () => {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   // Dynamic Product Data
// // //   const products = [
// // //     { id: 1, match: 98, brand: "Aura Design House", title: "Ceramic Flow Vase", desc: "Handcrafted minimalist ceramic with a matte finish.", price: "120.00", rating: 4, img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&q=80&w=400" },
// // //     { id: 2, match: 95, brand: "Sonic Labs", title: "Zenith Wireless Speaker", desc: "Premium audio quality wrapped in sustainable sand-stone fabric.", price: "349.00", rating: 5, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=400" },
// // //     { id: 3, match: 92, brand: "Lux Lighting", title: "Lumina Smart Beam", desc: "Adaptive lighting with smart sensors and a sleek aluminum profile.", price: "245.00", rating: 3, img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400" },
// // //     { id: 4, match: 89, brand: "Earth Workshop", title: "Komorebi Desk Mat", desc: "Sustainable felt and cork blend for an organized, tactile workspace.", price: "65.00", rating: 5, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400" },
// // //     { id: 5, match: 85, brand: "Clear Craft", title: "Nebula Crystal Set", desc: "Hand-blown gradient glass set for an elevated dining experience.", price: "150.00", rating: 4, img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
// // //     { id: 6, match: 82, brand: "Ethereal Silk", title: "Silk Dream Wrap", desc: "Ultra-luxurious mulberry silk for unmatched softness and breathability.", price: "85.00", rating: 4, img: "https://images.unsplash.com/photo-1520006403993-4bc13583e130?auto=format&fit=crop&q=80&w=400" },
// // //   ];

// // //   // Helper classes to match original <style> block
// // //   const glassCardClass = "bg-white/40 dark:bg-[#121c20]/60 backdrop-blur-xl border border-white/30 dark:border-white/10";
// // //   const frostedBtnClass = "bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/10";

// // //   return (
// // //     <div className={`${darkMode ? 'dark' : ''}`}>
// // //       <div className="bg-[#FAFAF9] dark:bg-[#121c20] font-['Inter'] text-[#0f171a] dark:text-white antialiased transition-colors duration-300">
// // //         <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
          
// // //           {/* Header */}
// // //           <header className={`sticky top-0 z-50 ${glassCardClass} border-b px-8 lg:px-20 py-4`}>
// // //             <div className="max-w-[1400px] mx-auto flex items-center justify-between">
// // //               <div className="flex items-center gap-10">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="size-8 bg-[#6cc0e4] rounded-full flex items-center justify-center text-white">
// // //                     <span className="material-symbols-outlined !text-xl">auto_awesome</span>
// // //                   </div>
// // //                   <h1 className="text-xl font-black tracking-tight uppercase">Curated</h1>
// // //                 </div>
// // //                 <div className="hidden md:flex items-center bg-white/50 dark:bg-white/10 rounded-full border border-white/40 px-4 py-2 w-80">
// // //                   <span className="material-symbols-outlined text-[#538093]">search</span>
// // //                   <input 
// // //                     className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-[#538093] outline-none px-2" 
// // //                     placeholder="Search premium aesthetic..." 
// // //                     type="text" 
// // //                   />
// // //                 </div>
// // //               </div>
// // //               <nav className="flex items-center gap-8">
// // //                 <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
// // //                   <a className="hover:text-[#6cc0e4] transition-colors" href="#exclusives">Exclusives</a>
// // //                   <a className="hover:text-[#6cc0e4] transition-colors" href="#collections">Collections</a>
// // //                   <a className="hover:text-[#6cc0e4] transition-colors" href="#spaces">Spaces</a>
// // //                 </div>
// // //                 <div className="flex items-center gap-3">
// // //                   <button 
// // //                     onClick={() => setDarkMode(!darkMode)}
// // //                     className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center hover:bg-[#6cc0e4] hover:text-white transition-all`}
// // //                   >
// // //                     <span className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
// // //                   </button>
// // //                   <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center hover:bg-[#6cc0e4] hover:text-white transition-all relative`}>
// // //                     <span className="material-symbols-outlined">shopping_bag</span>
// // //                   </button>
// // //                   <div 
// // //                     className="size-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm cursor-pointer" 
// // //                     style={{ backgroundImage: 'url("https://i.pravatar.cc/100?img=32")' }}
// // //                   ></div>
// // //                 </div>
// // //               </nav>
// // //             </div>
// // //           </header>

// // //           <main className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 py-10 flex gap-10">
// // //             {/* Sidebar / Aside */}
// // //             <aside className="w-64 shrink-0 hidden xl:flex flex-col gap-6">
// // //               <div className={`${glassCardClass} rounded-xl p-6 flex flex-col gap-6`}>
// // //                 <div>
// // //                   <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Discovery</h3>
// // //                   <div className="flex flex-col gap-2">
// // //                     <div className="flex items-center gap-3 px-3 py-2.5 rounded-full bg-[#6cc0e4]/20 text-[#0f171a] dark:text-white font-medium">
// // //                       <span className="material-symbols-outlined !text-lg text-[#6cc0e4]">auto_fix_high</span>
// // //                       <span className="text-sm">AI Personal Match</span>
// // //                     </div>
// // //                     <button className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white">
// // //                       <span className="material-symbols-outlined !text-lg">trending_up</span>
// // //                       <span className="text-sm">Trending Now</span>
// // //                     </button>
// // //                     <button className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white">
// // //                       <span className="material-symbols-outlined !text-lg">eco</span>
// // //                       <span className="text-sm">Sustainable</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 <div className="h-px bg-white/30 dark:bg-white/10"></div>
// // //                 <div>
// // //                   <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Refine By</h3>
// // //                   <div className="flex flex-col gap-4">
// // //                     <div className="flex flex-col gap-2">
// // //                       <label className="text-xs font-semibold px-1">Price Range</label>
// // //                       <div className="h-1 bg-[#6cc0e4]/20 rounded-full relative mt-2">
// // //                         <div className="absolute left-1/4 right-1/4 h-full bg-[#6cc0e4] rounded-full"></div>
// // //                         <div className="absolute left-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-[#6cc0e4] rounded-full shadow-sm"></div>
// // //                         <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-[#6cc0e4] rounded-full shadow-sm"></div>
// // //                       </div>
// // //                       <div className="flex justify-between text-[10px] text-[#538093] mt-1 px-1">
// // //                         <span>$50</span>
// // //                         <span>$2,500</span>
// // //                       </div>
// // //                     </div>
// // //                     <div className="flex flex-col gap-2">
// // //                       <label className="text-xs font-semibold px-1">Categories</label>
// // //                       <div className="flex flex-wrap gap-2">
// // //                         {['Living', 'Kitchen', 'Tech', 'Wellness'].map((cat) => (
// // //                           <button key={cat} className="px-3 py-1 rounded-full border border-[#e8eff2] dark:border-white/10 text-[11px] bg-white dark:bg-white/5 hover:bg-[#6cc0e4] hover:text-white transition-all">
// // //                             {cat}
// // //                           </button>
// // //                         ))}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <button className="w-full py-3 bg-[#6cc0e4] text-white text-xs font-bold rounded-full mt-2 shadow-lg shadow-[#6cc0e4]/30 hover:shadow-[#6cc0e4]/50 transition-all active:scale-95">
// // //                   Apply Filters
// // //                 </button>
// // //               </div>
// // //             </aside>

// // //             {/* Main Content Area */}
// // //             <div className="flex-1 flex flex-col gap-8">
// // //               <div className="flex flex-col gap-6">
// // //                 <div className="flex flex-wrap items-end justify-between gap-4">
// // //                   <div className="flex flex-col gap-2">
// // //                     <p className="text-[#6cc0e4] text-sm font-bold uppercase tracking-[0.2em]">Discovery</p>
// // //                     <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Curated for You</h2>
// // //                     <p className="text-[#538093] max-w-md mt-2">Premium aesthetic products personalized by our intelligent style engine.</p>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-xs font-medium text-[#538093] px-3">Sort by: <span className="text-[#0f171a] dark:text-white">AI Match</span></span>
// // //                     <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center`}>
// // //                       <span className="material-symbols-outlined">expand_more</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 <div className="flex gap-3 overflow-x-auto pb-2">
// // //                   <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#6cc0e4]/10 border border-[#6cc0e4]/20 px-5 transition-all hover:bg-[#6cc0e4]/20">
// // //                     <p className="text-[#0f171a] dark:text-white text-xs font-bold">Minimalist</p>
// // //                     <span className="material-symbols-outlined !text-sm">close</span>
// // //                   </button>
// // //                   <button className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full ${glassCardClass} px-5 transition-all hover:bg-white/60`}>
// // //                     <p className="text-[#0f171a] dark:text-white text-xs font-bold">Eco-Friendly</p>
// // //                   </button>
// // //                   <button className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full ${glassCardClass} px-5 transition-all hover:bg-white/60`}>
// // //                     <p className="text-[#0f171a] dark:text-white text-xs font-bold">Under $500</p>
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Product Grid */}
// // //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //                 {products.map((product) => (
// // //                   <div key={product.id} className={`group relative flex flex-col p-4 ${glassCardClass} rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
// // //                     <div className="absolute top-6 left-6 z-10">
// // //                       <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
// // //                         <span className="text-[#6cc0e4]">{product.match}% Match</span>
// // //                       </div>
// // //                     </div>
// // //                     <button className={`absolute top-6 right-6 z-20 size-10 rounded-full ${frostedBtnClass} flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors`}>
// // //                       <span className="material-symbols-outlined !text-xl">favorite</span>
// // //                     </button>
// // //                     <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 flex items-center justify-center">
// // //                       <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f7] to-[#e8eff2] dark:from-white/5 dark:to-white/10 opacity-50"></div>
// // //                       <img 
// // //                         className="relative z-1 object-cover h-full w-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
// // //                         src={product.img} 
// // //                         alt={product.title}
// // //                       />
// // //                     </div>
// // //                     <div className="px-2 flex flex-col flex-1">
// // //                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#538093] mb-1">{product.brand}</p>
// // //                       <h4 className="text-lg font-bold leading-tight">{product.title}</h4>
// // //                       <p className="text-xs text-[#538093] mt-1 mb-4 italic">{product.desc}</p>
// // //                       <div className="flex items-center justify-between mb-6">
// // //                         <p className="text-[#6cc0e4] font-black text-xl">${product.price}</p>
// // //                         <div className="flex gap-0.5">
// // //                           {[...Array(5)].map((_, i) => (
// // //                             <span key={i} className={`material-symbols-outlined !text-[10px] ${i < product.rating ? 'text-yellow-400 fill-icon' : 'text-slate-300'}`} style={i < product.rating ? {fontVariationSettings: "'FILL' 1"} : {}}>star</span>
// // //                           ))}
// // //                         </div>
// // //                       </div>
// // //                       <button className={`mt-auto w-full py-3 ${frostedBtnClass} text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(110,193,228,0.4)] active:scale-95`}>
// // //                         Add to Cart
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               {/* Pagination */}
// // //               <div className="flex items-center justify-center py-10 gap-2">
// // //                 <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center hover:bg-[#6cc0e4] hover:text-white transition-all`}>
// // //                   <span className="material-symbols-outlined">chevron_left</span>
// // //                 </button>
// // //                 <button className="size-10 rounded-full bg-[#6cc0e4] text-white flex items-center justify-center text-sm font-bold">1</button>
// // //                 <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center text-sm font-bold hover:bg-white/60`}>2</button>
// // //                 <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center text-sm font-bold hover:bg-white/60`}>3</button>
// // //                 <span className="px-2 text-[#538093]">...</span>
// // //                 <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center text-sm font-bold hover:bg-white/60`}>12</button>
// // //                 <button className={`size-10 rounded-full ${glassCardClass} flex items-center justify-center hover:bg-[#6cc0e4] hover:text-white transition-all`}>
// // //                   <span className="material-symbols-outlined">chevron_right</span>
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </main>

// // //           {/* Footer */}
// // //           <footer className="bg-white/40 dark:bg-black/20 backdrop-blur-md border-t border-white/30 dark:border-white/10 py-12 px-8 lg:px-20 mt-20">
// // //             <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
// // //               <div className="flex flex-col gap-4">
// // //                 <div className="flex items-center gap-3">
// // //                   <div className="size-6 bg-[#6cc0e4] rounded-full"></div>
// // //                   <h2 className="text-lg font-black tracking-tight uppercase">Curated</h2>
// // //                 </div>
// // //                 <p className="text-sm text-[#538093] leading-relaxed">Redefining high-end discovery through ethical AI and premium minimalist design. Based in Zurich.</p>
// // //               </div>
// // //               <div className="flex flex-col gap-4">
// // //                 <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white">The Experience</h4>
// // //                 <ul className="flex flex-col gap-2 text-sm text-[#538093]">
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">How AI Matches</a></li>
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">Style Consultation</a></li>
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">Exclusives</a></li>
// // //                 </ul>
// // //               </div>
// // //               <div className="flex flex-col gap-4">
// // //                 <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white">Support</h4>
// // //                 <ul className="flex flex-col gap-2 text-sm text-[#538093]">
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">Logistics</a></li>
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">Returns</a></li>
// // //                   <li><a className="hover:text-[#6cc0e4] transition-colors" href="#">Sustainability</a></li>
// // //                 </ul>
// // //               </div>
// // //               <div className="flex flex-col gap-4">
// // //                 <h4 className="text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white">Insider</h4>
// // //                 <div className="flex flex-col gap-3">
// // //                   <p className="text-sm text-[#538093]">Join the aesthetic circle.</p>
// // //                   <div className="flex bg-white dark:bg-white/5 rounded-full border border-white/40 p-1">
// // //                     <input className="flex-1 bg-transparent border-none text-sm px-3 focus:ring-0 outline-none" placeholder="Email" type="email" />
// // //                     <button className="bg-[#6cc0e4] text-white rounded-full px-4 py-2 text-xs font-bold">Join</button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="max-w-[1400px] mx-auto border-t border-white/20 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#538093]">
// // //               <p>© 2024 AI Curated Platforms AG.</p>
// // //               <div className="flex gap-6">
// // //                 <a className="hover:text-[#6cc0e4] transition-colors" href="#">Instagram</a>
// // //                 <a className="hover:text-[#6cc0e4] transition-colors" href="#">Pinterest</a>
// // //               </div>
// // //             </div>
// // //           </footer>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDiscoveryGrid;




// // // import React, { useState } from 'react';

// // // const ProductDiscoveryGrid = () => {
// // //   const TOTAL_PAGES = 10;
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   return (
// // //     <div className="bg-background-light dark:bg-background-dark font-display text-[#0f171a] dark:text-white antialiased min-h-screen">
// // //       {/* Required External Assets (Note: In a real app, move these to your index.html or Layout) */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        
// // //         .glass-card {
// // //             background: rgba(255, 255, 255, 0.4);
// // //             backdrop-filter: blur(12px);
// // //             -webkit-backdrop-filter: blur(12px);
// // //             border: 1px solid rgba(255, 255, 255, 0.3);
// // //             width:80%;
// // //         }
// // //         .dark .glass-card {
// // //             background: rgba(18, 28, 32, 0.6);
// // //             border: 1px solid rgba(255, 255, 255, 0.1);
// // //         }
// // //         .frosted-btn {
// // //             background: rgba(255, 255, 255, 0.5);
// // //             backdrop-filter: blur(8px);
// // //             -webkit-backdrop-filter: blur(8px);
// // //             border: 0.5px solid rgba(255, 255, 255, 0.4);
// // //         }
// // //         .dark .frosted-btn {
// // //             background: rgba(255, 255, 255, 0.1);
// // //             border: 0.5px solid rgba(255, 255, 255, 0.1);
// // //         }
// // //         .add-to-cart-glow:hover {
// // //             box-shadow: 0 0 20px rgba(110, 193, 228, 0.4);
// // //         }
// // //         .product-hover {
// // //             transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
// // //         }
// // //         .product-hover:hover {
// // //             transform: translateY(-8px);
// // //             box-shadow: 0 20px 40px rgba(0,0,0,0.05);
// // //         }
// // //         .material-symbols-outlined {
// // //             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
// // //         }
// // //         .fill-icon {
// // //             font-variation-settings: 'FILL' 1;
// // //         }
// // //       `}</style>

// // //       <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
     

// // //         {/* Main Section */}
// // //         <main className="max-w-[1900px] mx-auto w-full px-8 lg:px-20 py-10 flex gap-10">
// // //           {/* Sidebar */}
// // //           <aside className=" shrink-0 hidden xl:flex flex-col gap-6">
// // //             <div className=" glass-card rounded-xl p-6 flex flex-col gap-6">
// // //               <div>
// // //                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Discovery</h3>
// // //                 <div className="flex flex-col gap-2">
// // //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full bg-primary/20 text-[#0f171a] dark:text-white font-medium">
// // //                     <span className="material-symbols-outlined !text-lg text-primary">auto_fix_high</span>
// // //                     <span className="text-sm">AI Personal Match</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
// // //                     <span className="material-symbols-outlined !text-lg">trending_up</span>
// // //                     <span className="text-sm">Trending Now</span>
// // //                   </div>
// // //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
// // //                     <span className="material-symbols-outlined !text-lg">eco</span>
// // //                     <span className="text-sm">Sustainable</span>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="h-px bg-white/30 dark:bg-white/10"></div>
// // //               <div>
// // //                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Refine By</h3>
// // //                 <div className="flex flex-col gap-4">
// // //                   <div className="flex flex-col gap-2">
// // //                     <label className="text-xs font-semibold px-1">Price Range</label>
// // //                     <div className="h-1 bg-primary/20 rounded-full relative mt-2">
// // //                       <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
// // //                       <div className="absolute left-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
// // //                       <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
// // //                     </div>
// // //                     <div className="flex justify-between text-[10px] text-[#538093] mt-1 px-1">
// // //                       <span>$50</span>
// // //                       <span>$2,500</span>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex flex-col gap-2">
// // //                     <label className="text-xs font-semibold px-1">Categories</label>
// // //                     <div className="flex flex-wrap gap-2">
// // //                       {['Living', 'Kitchen', 'Tech', 'Wellness'].map((cat) => (
// // //                         <button key={cat} className="px-3 py-1 rounded-full border border-[#e8eff2] dark:border-white/10 text-[11px] bg-white dark:bg-white/5 hover:bg-primary hover:text-white transition-all">
// // //                           {cat}
// // //                         </button>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <button className="w-full py-3 bg-primary text-white text-xs font-bold rounded-full mt-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
// // //                 Apply Filters
// // //               </button>
// // //             </div>
// // //           </aside>

// // //           {/* Grid Content */}
// // //           <div className="flex-1 flex flex-col gap-8">
// // //             <div className="flex flex-col gap-6">
// // //               <div className="flex flex-wrap items-end justify-between gap-4">
// // //                 <div className="flex flex-col gap-2">
// // //                   <p className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Discovery</p>
// // //                   <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Curated for You</h2>
// // //                   <p className="text-[#538093] max-w-md mt-2">Premium aesthetic products personalized by our intelligent style engine.</p>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-xs font-medium text-[#538093] px-3">Sort by: <span className="text-[#0f171a] dark:text-white">AI Match</span></span>
// // //                   <button className="size-10 rounded-full glass-card flex items-center justify-center">
// // //                     <span className="material-symbols-outlined">expand_more</span>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //               <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
// // //                 <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/20 px-5 transition-all hover:bg-primary/20">
// // //                   <p className="text-[#0f171a] dark:text-white text-xs font-bold">Minimalist</p>
// // //                   <span className="material-symbols-outlined !text-sm">close</span>
// // //                 </button>
// // //                 <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full glass-card px-5 transition-all hover:bg-white/60">
// // //                   <p className="text-[#0f171a] dark:text-white text-xs font-bold">Eco-Friendly</p>
// // //                 </button>
// // //                 <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full glass-card px-5 transition-all hover:bg-white/60">
// // //                   <p className="text-[#0f171a] dark:text-white text-xs font-bold">Under $500</p>
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //               {/* Product Card Template */}
// // //               {[
// // //                 { id: 1, brand: "Aura Design House", name: "Ceramic Flow Vase", price: "120.00", desc: "Handcrafted minimalist ceramic with a matte finish.", match: "98%" },
// // //                 { id: 2, brand: "Sonic Labs", name: "Zenith Wireless Speaker", price: "349.00", desc: "Premium audio quality wrapped in sustainable sand-stone fabric.", match: "95%" },
// // //                 { id: 3, brand: "Lux Lighting", name: "Lumina Smart Beam", price: "245.00", desc: "Adaptive lighting with smart sensors and a sleek aluminum profile.", match: "92%" },
// // //                 { id: 4, brand: "Earth Workshop", name: "Komorebi Desk Mat", price: "65.00", desc: "Sustainable felt and cork blend for an organized, tactile workspace.", match: "89%" },
// // //                 { id: 5, brand: "Clear Craft", name: "Nebula Crystal Set", price: "150.00", desc: "Hand-blown gradient glass set for an elevated dining experience.", match: "85%" },
// // //                 { id: 6, brand: "Ethereal Silk", name: "Silk Dream Wrap", price: "85.00", desc: "Ultra-luxurious mulberry silk for unmatched softness and breathability.", match: "82%" },
// // //               ].map((product) => (
// // //                 <div key={product.id} className="group product-hover relative flex flex-col p-4 glass-card rounded-xl">
// // //                   <div className="absolute top-6 left-6 z-10">
// // //                     <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
// // //                       <span className="text-primary">{product.match} Match</span>
// // //                     </div>
// // //                   </div>
// // //                   <button className="absolute top-6 right-6 z-20 size-10 rounded-full frosted-btn flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors">
// // //                     <span className="material-symbols-outlined !text-xl">favorite</span>
// // //                   </button>
// // //                   <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 flex items-center justify-center">
// // //                     <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f7] to-[#e8eff2] dark:from-white/5 dark:to-white/10 opacity-50"></div>
// // //                     <img 
// // //                       className="relative z-1 object-contain h-5/6 w-5/6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
// // //                       src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg`} 
// // //                       alt={product.name}
// // //                     />
// // //                   </div>
// // //                   <div className="px-2 flex flex-col flex-1">
// // //                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#538093] mb-1">{product.brand}</p>
// // //                     <h4 className="text-lg font-bold leading-tight">{product.name}</h4>
// // //                     <p className="text-xs text-[#538093] mt-1 mb-4 italic">{product.desc}</p>
// // //                     <div className="flex items-center justify-between mb-6">
// // //                       <p className="text-primary font-black text-xl">${product.price}</p>
// // //                       <div className="flex gap-0.5">
// // //                         {[1, 2, 3, 4].map((s) => <span key={s} className="material-symbols-outlined !text-[10px] text-yellow-400 fill-icon">star</span>)}
// // //                         <span className="material-symbols-outlined !text-[10px] text-slate-300">star</span>
// // //                       </div>
// // //                     </div>
// // //                     <button className="mt-auto w-full py-3 frosted-btn add-to-cart-glow text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white rounded-full transition-all active:scale-95">
// // //                       Add to Cart
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Pagination */}
// // //             {/* <div className="flex items-center justify-center py-10 gap-2">
// // //               <button className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all">
// // //                 <span className="material-symbols-outlined">chevron_left</span>
// // //               </button>
// // //               <button className="size-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</button>
// // //               <button className="size-10 rounded-full glass-card flex items-center justify-center text-sm font-bold hover:bg-white/60">2</button>
// // //               <button className="size-10 rounded-full glass-card flex items-center justify-center text-sm font-bold hover:bg-white/60">3</button>
// // //               <span className="px-2 text-[#538093]">...</span>
// // //               <button className="size-10 rounded-full glass-card flex items-center justify-center text-sm font-bold hover:bg-white/60">12</button>
// // //               <button className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all">
// // //                 <span className="material-symbols-outlined">chevron_right</span>
// // //               </button>
// // //             </div> */}
// // // <div className="flex items-center justify-center py-10 gap-2">
// // //   {/* PREVIOUS */}
// // //   <button
// // //     onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
// // //     className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all"
// // //   >
// // //     <span className="material-symbols-outlined">chevron_left</span>
// // //   </button>

// // //   {/* PAGE NUMBERS */}
// // //   {(() => {
// // //     const pages = [];

// // //     // Case 1: Near the end → show last 3 pages
// // //     if (currentPage >= TOTAL_PAGES - 2) {
// // //       for (let p = TOTAL_PAGES - 2; p <= TOTAL_PAGES; p++) {
// // //         if (p >= 1) pages.push(p);
// // //       }
// // //     } 
// // //     // Case 2: Normal → current, next, next+1, ..., last
// // //     else {
// // //       pages.push(currentPage);
// // //       pages.push(currentPage + 1);
// // //       pages.push(currentPage + 2);
// // //     }

// // //     return (
// // //       <>
// // //         {pages.map((page) => (
// // //           <button
// // //             key={page}
// // //             onClick={() => setCurrentPage(page)}
// // //             className={`size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
// // //               currentPage === page
// // //                 ? "bg-primary text-white"
// // //                 : "glass-card hover:bg-white/60"
// // //             }`}
// // //           >
// // //             {page}
// // //           </button>
// // //         ))}

// // //         {/* DOTS */}
// // //         {currentPage < TOTAL_PAGES - 2 && (
// // //           <span className="px-2 text-[#538093]">...</span>
// // //         )}

// // //         {/* LAST PAGE */}
// // //         {currentPage < TOTAL_PAGES - 2 && (
// // //           <button
// // //             onClick={() => setCurrentPage(TOTAL_PAGES)}
// // //             className={`size-10 rounded-full flex items-center justify-center text-sm font-bold ${
// // //               currentPage === TOTAL_PAGES
// // //                 ? "bg-primary text-white"
// // //                 : "glass-card hover:bg-white/60"
// // //             }`}
// // //           >
// // //             {TOTAL_PAGES}
// // //           </button>
// // //         )}
// // //       </>
// // //     );
// // //   })()}

// // //   {/* NEXT */}
// // //   <button
// // //     onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
// // //     className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all"
// // //   >
// // //     <span className="material-symbols-outlined">chevron_right</span>
// // //   </button>
// // // </div>



// // //           </div>
// // //         </main>

    
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDiscoveryGrid;

// // import React, { useState } from 'react';

// // const ProductDiscoveryGrid = () => {
// //   // 1. Generate 60 Demo Objects
// //   const allProducts = Array.from({ length: 60 }, (_, i) => ({
// //     id: i + 1,
// //     brand: ["Aura Design House", "Sonic Labs", "Lux Lighting", "Earth Workshop", "Clear Craft", "Ethereal Silk"][i % 6],
// //     name: ["Ceramic Flow Vase", "Zenith Wireless Speaker", "Lumina Smart Beam", "Komorebi Desk Mat", "Nebula Crystal Set", "Silk Dream Wrap"][i % 6],
// //     price: (Math.random() * (500 - 50) + 50).toFixed(2),
// //     desc: "Handcrafted minimalist design for an elevated aesthetic experience.",
// //     match: `${Math.floor(Math.random() * (99 - 80) + 80)}%`
// //   }));

// //   // 2. Pagination Logic
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 6;
// //   const TOTAL_PAGES = Math.ceil(allProducts.length / itemsPerPage);
  
// //   // Calculate which items to display
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

// //   return (
// //     <div className="bg-background-light dark:bg-background-dark font-display text-[#0f171a] dark:text-white antialiased min-h-screen">
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
// //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        
// //         .glass-card {
// //             background: rgba(255, 255, 255, 0.4);
// //             backdrop-filter: blur(12px);
// //             -webkit-backdrop-filter: blur(12px);
// //             border: 1px solid rgba(255, 255, 255, 0.3);
// //         }
// //         .dark .glass-card {
// //             background: rgba(18, 28, 32, 0.6);
// //             border: 1px solid rgba(255, 255, 255, 0.1);
// //         }
// //         .frosted-btn {
// //             background: rgba(255, 255, 255, 0.5);
// //             backdrop-filter: blur(8px);
// //             -webkit-backdrop-filter: blur(8px);
// //             border: 0.5px solid rgba(255, 255, 255, 0.4);
// //         }
// //         .dark .frosted-btn {
// //             background: rgba(255, 255, 255, 0.1);
// //             border: 0.5px solid rgba(255, 255, 255, 0.1);
// //         }
// //         .add-to-cart-glow:hover {
// //             box-shadow: 0 0 20px rgba(110, 193, 228, 0.4);
// //         }
// //         .product-hover {
// //             transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
// //         }
// //         .product-hover:hover {
// //             transform: translateY(-8px);
// //             box-shadow: 0 20px 40px rgba(0,0,0,0.05);
// //         }
// //         .material-symbols-outlined {
// //             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
// //         }
// //         .fill-icon {
// //             font-variation-settings: 'FILL' 1;
// //         }
// //       `}</style>

// //       <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
// //         <main className="max-w-[1900px] mx-auto w-full px-8 lg:px-20 py-10 flex gap-10">
          
// //           {/* Sidebar */}
// //                 <aside className=" shrink-0 hidden xl:flex flex-col gap-6">
// //             <div className=" glass-card rounded-xl p-6 flex flex-col gap-6">
// //               <div>
// //                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Discovery</h3>
// //                 <div className="flex flex-col gap-2">
// //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full bg-primary/20 text-[#0f171a] dark:text-white font-medium">
// //                     <span className="material-symbols-outlined !text-lg text-primary">auto_fix_high</span>
// //                     <span className="text-sm">AI Personal Match</span>
// //                   </div>
// //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
// //                     <span className="material-symbols-outlined !text-lg">trending_up</span>
// //                     <span className="text-sm">Trending Now</span>
// //                   </div>
// //                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
// //                     <span className="material-symbols-outlined !text-lg">eco</span>
// //                     <span className="text-sm">Sustainable</span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="h-px bg-white/30 dark:bg-white/10"></div>
// //               <div>
// //                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Refine By</h3>
// //                 <div className="flex flex-col gap-4">
// //                   <div className="flex flex-col gap-2">
// //                     <label className="text-xs font-semibold px-1">Price Range</label>
// //                     <div className="h-1 bg-primary/20 rounded-full relative mt-2">
// //                       <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
// //                       <div className="absolute left-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
// //                       <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
// //                     </div>
// //                     <div className="flex justify-between text-[10px] text-[#538093] mt-1 px-1">
// //                       <span>$50</span>
// //                       <span>$2,500</span>
// //                     </div>
// //                   </div>
// //                   <div className="flex flex-col gap-2">
// //                     <label className="text-xs font-semibold px-1">Categories</label>
// //                     <div className="flex flex-wrap gap-2">
// //                       {['Living', 'Kitchen', 'Tech', 'Wellness'].map((cat) => (
// //                         <button key={cat} className="px-3 py-1 rounded-full border border-[#e8eff2] dark:border-white/10 text-[11px] bg-white dark:bg-white/5 hover:bg-primary hover:text-white transition-all">
// //                           {cat}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <button className="w-full py-3 bg-primary text-white text-xs font-bold rounded-full mt-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
// //                 Apply Filters
// //               </button>
// //             </div>
// //           </aside>


// //           {/* Grid Content */}
// //           <div className="flex-1 flex flex-col gap-8">
// //             <div className="flex flex-col gap-6">
// //               <div className="flex flex-wrap items-end justify-between gap-4">
// //                 <div className="flex flex-col gap-2">
// //                   <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">Discovery</p>
// //                   <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Curated for You</h2>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Product Grid */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {currentItems.map((product) => (
// //                 <div key={product.id} className="group product-hover relative flex flex-col p-4 glass-card rounded-xl">
// //                   <div className="absolute top-6 left-6 z-10">
// //                     <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
// //                       <span className="text-blue-600">{product.match} Match</span>
// //                     </div>
// //                   </div>
// //                   <button className="absolute top-6 right-6 z-20 size-10 rounded-full frosted-btn flex items-center justify-center text-slate-400 hover:text-pink-500 transition-colors">
// //                     <span className="material-symbols-outlined !text-xl">favorite</span>
// //                   </button>
// //                   <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 flex items-center justify-center">
// //                     <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f7] to-[#e8eff2] dark:from-white/5 dark:to-white/10 opacity-50"></div>
// //                     <img 
// //                       className="relative z-1 object-contain h-5/6 w-5/6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
// //                       src={`https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg`} 
// //                       alt={product.name}
// //                     />
// //                   </div>
// //                   <div className="px-2 flex flex-col flex-1">
// //                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#538093] mb-1">{product.brand}</p>
// //                     <h4 className="text-lg font-bold leading-tight">{product.name} #{product.id}</h4>
// //                     <p className="text-xs text-[#538093] mt-1 mb-4 italic">{product.desc}</p>
// //                     <div className="flex items-center justify-between mb-6">
// //                       <p className="text-blue-600 font-black text-xl">${product.price}</p>
// //                       <div className="flex gap-0.5">
// //                         {[1, 2, 3, 4].map((s) => <span key={s} className="material-symbols-outlined !text-[10px] text-yellow-400 fill-icon">star</span>)}
// //                         <span className="material-symbols-outlined !text-[10px] text-slate-300">star</span>
// //                       </div>
// //                     </div>
// //                     <button className="mt-auto w-full py-3 frosted-btn add-to-cart-glow text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white rounded-full transition-all active:scale-95">
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Functional Pagination UI */}
// //             <div className="flex items-center justify-center py-10 gap-2">
// //               <button
// //                 onClick={() => {
// //                     setCurrentPage((p) => Math.max(1, p - 1));
// //                     window.scrollTo({ top: 0, behavior: 'smooth' });
// //                 }}
// //                 disabled={currentPage === 1}
// //                 className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
// //               >
// //                 <span className="material-symbols-outlined">chevron_left</span>
// //               </button>

// //               {(() => {
// //                 const pages = [];
// //                 if (currentPage >= TOTAL_PAGES - 2) {
// //                   for (let p = Math.max(1, TOTAL_PAGES - 3); p <= TOTAL_PAGES; p++) {
// //                     pages.push(p);
// //                   }
// //                 } else {
// //                   pages.push(currentPage, currentPage + 1, currentPage + 2);
// //                 }

// //                 return (
// //                   <>
// //                     {pages.map((page) => (
// //                       <button
// //                         key={page}
// //                         onClick={() => {
// //                             setCurrentPage(page);
// //                             window.scrollTo({ top: 0, behavior: 'smooth' });
// //                         }}
// //                         className={`size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
// //                           currentPage === page
// //                             ? "bg-blue-600 text-white"
// //                             : "glass-card hover:bg-white/60"
// //                         }`}
// //                       >
// //                         {page}
// //                       </button>
// //                     ))}
// //                     {currentPage < TOTAL_PAGES - 2 && <span className="px-2 text-[#538093]">...</span>}
// //                     {currentPage < TOTAL_PAGES - 2 && (
// //                       <button
// //                         onClick={() => {
// //                             setCurrentPage(TOTAL_PAGES);
// //                             window.scrollTo({ top: 0, behavior: 'smooth' });
// //                         }}
// //                         className="size-10 rounded-full glass-card flex items-center justify-center text-sm font-bold hover:bg-white/60"
// //                       >
// //                         {TOTAL_PAGES}
// //                       </button>
// //                     )}
// //                   </>
// //                 );
// //               })()}

// //               <button
// //                 onClick={() => {
// //                     setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1));
// //                     window.scrollTo({ top: 0, behavior: 'smooth' });
// //                 }}
// //                 disabled={currentPage === TOTAL_PAGES}
// //                 className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
// //               >
// //                 <span className="material-symbols-outlined">chevron_right</span>
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDiscoveryGrid;


// import React, { useState } from 'react'; 

// const ProductDiscoveryGrid = () => {
//   // 1. Generate 60 Demo Objects
//   const allProducts = Array.from({ length: 60 }, (_, i) => ({
//     id: i + 1,
//     brand: ["Aura Design House", "Sonic Labs", "Lux Lighting", "Earth Workshop", "Clear Craft", "Ethereal Silk"][i % 6],
//     name: ["Ceramic Flow Vase", "Zenith Wireless Speaker", "Lumina Smart Beam", "Komorebi Desk Mat", "Nebula Crystal Set", "Silk Dream Wrap"][i % 6],
//     price: (Math.random() * (500 - 50) + 50).toFixed(2),
//     desc: "Handcrafted minimalist design for an elevated aesthetic experience.",
//     match: `${Math.floor(Math.random() * (99 - 80) + 80)}%`
//   }));

//   // 2. Pagination Logic
//   const [currentPage, setCurrentPage] = useState(1);
//   const [favorites, setFavorites] = useState([]);
//   const itemsPerPage = 6;
//   const TOTAL_PAGES = Math.ceil(allProducts.length / itemsPerPage);
  
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

//   // Handlers
//   const handleCardClick = (product) => {
//     console.log("Card clicked:", product);
//   };

//   const handleFavoriteClick = (productId) => {
//     setFavorites((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleAddToCart = (product) => {
//     console.log("Added to cart:", product);
//   };

//   return (
//     <div className="bg-background-light dark:bg-background-dark font-display text-[#0f171a] dark:text-white antialiased min-h-screen">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        
//         .glass-card {
//             background: rgba(255, 255, 255, 0.4);
//             backdrop-filter: blur(12px);
//             -webkit-backdrop-filter: blur(12px);
//             border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//         .dark .glass-card {
//             background: rgba(18, 28, 32, 0.6);
//             border: 1px solid rgba(255, 255, 255, 0.1);
//         }
//         .frosted-btn {
//             background: rgba(255, 255, 255, 0.5);
//             backdrop-filter: blur(8px);
//             -webkit-backdrop-filter: blur(8px);
//             border: 0.5px solid rgba(255, 255, 255, 0.4);
//         }
//         .dark .frosted-btn {
//             background: rgba(255, 255, 255, 0.1);
//             border: 0.5px solid rgba(255, 255, 255, 0.1);
//         }
//         .add-to-cart-glow:hover {
//             box-shadow: 0 0 20px rgba(110, 193, 228, 0.4);
//         }
//         .product-hover {
//             transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
//             cursor: pointer;
//         }
//         .product-hover:hover {
//             transform: translateY(-8px);
//             box-shadow: 0 20px 40px rgba(0,0,0,0.05);
//         }
//         .material-symbols-outlined {
//             font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
//         }
//         .fill-icon {
//             font-variation-settings: 'FILL' 1;
//         }
//       `}</style>

//       <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
//         <main className="max-w-[1900px] mx-auto w-full px-8 lg:px-20 py-10 flex gap-10">
          
//           {/* Sidebar */}
//               <aside className=" shrink-0 hidden xl:flex flex-col gap-6">
//             <div className=" glass-card rounded-xl p-6 flex flex-col gap-6">
//               <div>
//                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Discovery</h3>
//                 <div className="flex flex-col gap-2">
//                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full bg-primary/20 text-[#0f171a] dark:text-white font-medium">
//                     <span className="material-symbols-outlined !text-lg text-primary">auto_fix_high</span>
//                     <span className="text-sm">AI Personal Match</span>
//                   </div>
//                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
//                     <span className="material-symbols-outlined !text-lg">trending_up</span>
//                     <span className="text-sm">Trending Now</span>
//                   </div>
//                   <div className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer">
//                     <span className="material-symbols-outlined !text-lg">eco</span>
//                     <span className="text-sm">Sustainable</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="h-px bg-white/30 dark:bg-white/10"></div>
//               <div>
//                 <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Refine By</h3>
//                 <div className="flex flex-col gap-4">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-xs font-semibold px-1">Price Range</label>
//                     <div className="h-1 bg-primary/20 rounded-full relative mt-2">
//                       <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
//                       <div className="absolute left-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
//                       <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
//                     </div>
//                     <div className="flex justify-between text-[10px] text-[#538093] mt-1 px-1">
//                       <span>$50</span>
//                       <span>$2,500</span>
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-xs font-semibold px-1">Categories</label>
//                     <div className="flex flex-wrap gap-2">
//                       {['Living', 'Kitchen', 'Tech', 'Wellness'].map((cat) => (
//                         <button key={cat} className="px-3 py-1 rounded-full border border-[#e8eff2] dark:border-white/10 text-[11px] bg-white dark:bg-white/5 hover:bg-primary hover:text-white transition-all">
//                           {cat}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button className="w-full py-3 bg-primary text-white text-xs font-bold rounded-full mt-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95">
//                 Apply Filters
//               </button>
//             </div>
//           </aside>


//           {/* Grid Content */}
//           <div className="flex-1 flex flex-col gap-8">
//             <div className="flex flex-col gap-6">
//               <div className="flex flex-wrap items-end justify-between gap-4">
//                 <div className="flex flex-col gap-2">
//                   <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">Discovery</p>
//                   <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Curated for You</h2>
//                 </div>
//               </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {currentItems.map((product) => (
//                 <div 
//                   key={product.id} 
//                   className="group product-hover relative flex flex-col p-4 glass-card rounded-xl"
//                   onClick={() => handleCardClick(product)}
//                 >
//                   <div className="absolute top-6 left-6 z-10">
//                     <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
//                       <span className="text-blue-600">{product.match} Match</span>
//                     </div>
//                   </div>

//                   {/* Favorite Heart */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click
//                       handleFavoriteClick(product.id);
//                     }}
//                     className="absolute top-6 right-6 z-20 size-10 rounded-full frosted-btn flex items-center justify-center transition-colors"
//                   >
//                     <span 
//                       className="material-symbols-outlined !text-xl"
//                       style={{ color: favorites.includes(product.id) ? "red" : "gray" }}
//                     >
//                       favorite
//                     </span>
//                   </button>

//                   <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 flex items-center justify-center">
//                     <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f7] to-[#e8eff2] dark:from-white/5 dark:to-white/10 opacity-50"></div>
//                     <img 
//                       className="relative z-1 object-contain h-5/6 w-5/6 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
//                       src={`https://via.placeholder.com/300?text=Product+${product.id}`} 
//                       alt={product.name}
//                     />
//                   </div>

//                   <div className="px-2 flex flex-col flex-1">
//                     <p className="text-[10px] font-bold uppercase tracking-widest text-[#538093] mb-1">{product.brand}</p>
//                     <h4 className="text-lg font-bold leading-tight">{product.name} #{product.id}</h4>
//                     <p className="text-xs text-[#538093] mt-1 mb-4 italic">{product.desc}</p>
//                     <div className="flex items-center justify-between mb-6">
//                       <p className="text-blue-600 font-black text-xl">${product.price}</p>
//                       <div className="flex gap-0.5">
//                         {[1, 2, 3, 4].map((s) => <span key={s} className="material-symbols-outlined !text-[10px] text-yellow-400 fill-icon">star</span>)}
//                         <span className="material-symbols-outlined !text-[10px] text-slate-300">star</span>
//                       </div>
//                     </div>

//                     {/* Add to Cart */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation(); // Prevent card click
//                         handleAddToCart(product);
//                       }}
//                       className="mt-auto w-full py-3 frosted-btn add-to-cart-glow text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white rounded-full transition-all active:scale-95"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination UI */}
//             <div className="flex items-center justify-center py-10 gap-2">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
//               >
//                 <span className="material-symbols-outlined">chevron_left</span>
//               </button>

//               {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
//                 <button
//                   key={page}
//                   onClick={() => setCurrentPage(page)}
//                   className={`size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
//                     currentPage === page ? "bg-blue-600 text-white" : "glass-card hover:bg-white/60"
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               <button
//                 onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
//                 disabled={currentPage === TOTAL_PAGES}
//                 className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
//               >
//                 <span className="material-symbols-outlined">chevron_right</span>
//               </button>
//             </div>

//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductDiscoveryGrid;
import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';

const ProductDiscoveryGrid = () => {
   const navigate = useNavigate();
  // 1. Generate 60 Demo Objects
  const allProducts = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    brand: ["Aura Design House", "Sonic Labs", "Lux Lighting", "Earth Workshop", "Clear Craft", "Ethereal Silk"][i % 6],
    name: ["Ceramic Flow Vase", "Zenith Wireless Speaker", "Lumina Smart Beam", "Komorebi Desk Mat", "Nebula Crystal Set", "Silk Dream Wrap"][i % 6],
    price: (Math.random() * (500 - 50) + 50).toFixed(2),
    desc: "Handcrafted minimalist design for an elevated aesthetic experience.",
    match: `${Math.floor(Math.random() * (99 - 80) + 80)}%`
  }));

  // 2. Pagination Logic
  
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const itemsPerPage = 6;
  const TOTAL_PAGES = Math.ceil(allProducts.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Handlers
 const handleCardClick = (product) => {
    // alert(`Card clicked: ${product.name}`); // show alert
    navigate("/premium-product"); // navigate programmatically
  };

  const handleFavoriteClick = (productId, productName) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
    alert(`Favorite clicked: ${productName}`);
  };


  const handleAddToCart = (product) => {
    // alert(`Add1 to Cart clicked: ${product.name}`);
    navigate("/luxury"); // ✅ navigate programmatically to /luxury
  };
{/* Category Button Component */}
const CategoryButton = ({ label }) => {
  const [selected, setSelected] = React.useState(false);
  return (
    <button
      onClick={() => {
        setSelected(!selected);
        alert(`${label} category clicked`);
      }}
      className={`px-3 py-1 rounded-full border border-[#e8eff2] dark:border-white/10 text-[11px] transition-all ${
        selected
          ? "bg-primary text-white"
          : "bg-white dark:bg-white/5 hover:bg-primary hover:text-white"
      }`}
    >
      {label}
    </button>
  );
};
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0f171a] dark:text-white antialiased min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        
        .glass-card {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .dark .glass-card {
            background: rgba(18, 28, 32, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .frosted-btn {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 0.5px solid rgba(255, 255, 255, 0.4);
        }
        .dark .frosted-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 0.5px solid rgba(255, 255, 255, 0.1);
        }
        .add-to-cart-glow:hover {
            box-shadow: 0 0 20px rgba(110, 193, 228, 0.4);
        }
        .product-hover {
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            cursor: pointer;
        }
        .product-hover:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.05);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <main className="max-w-[1900px] mx-auto w-full px-8 lg:px-20 py-10 flex gap-10">
          
       {/* Sidebar */}
{/* Sidebar */}
<aside className="shrink-0 hidden xl:flex flex-col gap-6">
  <div className="glass-card rounded-xl p-6 flex flex-col gap-6">

    {/* Discovery Section */}
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Discovery</h3>
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-full bg-primary/20 text-[#0f171a] dark:text-white font-medium cursor-pointer"
          onClick={() => alert('AI Personal Match clicked')}
        >
          <span className="material-symbols-outlined !text-lg text-primary">auto_fix_high</span>
          <span className="text-sm">AI Personal Match</span>
        </div>

        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer"
          onClick={() => alert('Trending Now clicked')}
        >
          <span className="material-symbols-outlined !text-lg">trending_up</span>
          <span className="text-sm">Trending Now</span>
        </div>

        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-white/50 dark:hover:bg-white/5 transition-all text-[#538093] hover:text-[#0f171a] dark:hover:text-white cursor-pointer"
          onClick={() => alert('Sustainable clicked')}
        >
          <span className="material-symbols-outlined !text-lg">eco</span>
          <span className="text-sm">Sustainable</span>
        </div>
      </div>
    </div>

    <div className="h-px bg-white/30 dark:bg-white/10"></div>

    {/* Refine By Section */}
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#538093] mb-4">Refine By</h3>

      {/* Price Range */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold px-1">Price Range</label>
        <div
          className="h-1 bg-primary/20 rounded-full relative mt-2 cursor-pointer"
          onClick={() => alert('Price Range clicked')}
        >
          {/* Example of visual change on click: filled bar changes color */}
          <div className="absolute left-1/4 right-1/4 h-full bg-blue-500 rounded-full"></div>
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-primary rounded-full shadow-sm"></div>
        </div>
        <div className="flex justify-between text-[10px] text-[#538093] mt-1 px-1">
          <span>$50</span>
          <span>$2,500</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-xs font-semibold px-1">Categories</label>
        <div className="flex flex-wrap gap-2">
          {['Living', 'Kitchen', 'Tech', 'Wellness'].map((cat) => (
            <CategoryButton key={cat} label={cat} />
          ))}
        </div>
      </div>
    </div>

    {/* Apply Filters Button */}
    <button
      onClick={() => alert('Apply Filters clicked')}
      className="w-full py-3 bg-primary text-white text-xs font-bold rounded-full mt-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all active:scale-95"
    >
      Apply Filters
    </button>
  </div>
</aside>




          {/* Grid Content */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">Discovery</p>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">Curated for You</h2>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((product) => (
                <div 
                  key={product.id} 
                  className="group product-hover relative flex flex-col p-3 glass-card rounded-xl"
                  onClick={() => handleCardClick(product)}
                  style={{ height: '420px' }} // reduced height
                >
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm">
                      <span className="text-blue-600">{product.match} Match</span>
                    </div>
                  </div>

                  {/* Favorite Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFavoriteClick(product.id, product.name);
                    }}
                    className="absolute top-4 right-4 z-20 size-10 rounded-full frosted-btn flex items-center justify-center transition-colors"
                  >
                    <span 
                      className="material-symbols-outlined !text-xl"
                      style={{ color: favorites.includes(product.id) ? "red" : "gray" }}
                    >
                      favorite
                    </span>
                  </button>

                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-2 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#f0f4f7] to-[#e8eff2] dark:from-white/5 dark:to-white/10 opacity-50"></div>
                    <img 
                      className="relative z-1 object-contain h-4/5 w-4/5 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" 
                      src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBvOKlCMjhOXCSUvGsEJa6hEiYqteEeIWSi0megZMThJcwgpNd1jcTAKdvCELpjRXAxvWsoG1BICr7U-mLkhMlbEKdGAkJVT7bNCNmamildHx3tjDxKc5RlMkXkbxxcIIIOQdJDDkeLl_zuKoHRTdg7Z-e682tzSqucmyVW-n8TgJo9Jrg0i7ck3aWypN4F9aqs92BZiM7Ag5hUW5uJ5wCIv6Rqq10vLZiaxn-QMH80VWCsAO-e_RvMLHTPdW0kURpMMP-s8nhA7Gw`} 
                      alt={product.name}
                    />
                  </div>

                  <div className="px-2 flex flex-col flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#538093] mb-1">{product.brand}</p>
                    <h4 className="text-lg font-bold leading-tight">{product.name} #{product.id}</h4>
                    <p className="text-xs text-[#538093] mt-1 mb-2 italic">{product.desc}</p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-blue-600 font-black text-xl">${product.price}</p>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4].map((s) => <span key={s} className="material-symbols-outlined !text-[10px] text-yellow-400 fill-icon">star</span>)}
                        <span className="material-symbols-outlined !text-[10px] text-slate-300">star</span>
                      </div>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="mt-auto w-full py-2 frosted-btn add-to-cart-glow text-xs font-bold uppercase tracking-widest text-[#0f171a] dark:text-white rounded-full transition-all active:scale-95"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination UI */}
            <div className="flex items-center justify-center py-6 gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    currentPage === page ? "bg-blue-600 text-white" : "glass-card hover:bg-white/60"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                disabled={currentPage === TOTAL_PAGES}
                className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all disabled:opacity-30"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductDiscoveryGrid;
