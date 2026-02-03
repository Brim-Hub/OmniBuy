import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const EtherealCart = () => {
  const navigate = useNavigate();
  // Injecting the custom styles and fonts into the head
  useEffect(() => {
    // Add Google Fonts
    const link1 = document.createElement('link');
    link1.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@100;200;300;400&display=swap";
    link1.rel = "stylesheet";
    
    const link2 = document.createElement('link');
    link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
    link2.rel = "stylesheet";
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);

    // Add Custom CSS for animations and glassmorphism
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --luxury-glass: rgba(255, 255, 255, 0.4);
        --luxury-border: rgba(255, 255, 255, 0.6);
        --pearl-glow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        --champagne-border: #F1E5D1;
      }
      .font-serif-high { font-family: 'Playfair Display', serif; }
      .font-sans-light { font-family: 'Inter', sans-serif; font-weight: 200; letter-spacing: 0.05em; }
      
      .style-landscape {
        background: radial-gradient(circle at 10% 20%, rgba(255, 228, 230, 0.4) 0%, transparent 40%),
                    radial-gradient(circle at 90% 80%, rgba(232, 232, 255, 0.4) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, rgba(240, 253, 244, 0.3) 0%, transparent 50%);
        filter: blur(100px); opacity: 0.8; position: fixed; inset: 0; z-index: -1;
      }
      .glass-frame {
        background: var(--luxury-glass);
        backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--luxury-border); box-shadow: var(--pearl-glow);
        transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .glass-frame:hover {
        border-color: rgba(255, 255, 255, 0.9); background: rgba(255, 255, 255, 0.6);
        transform: translateY(-8px); box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.08);
      }
      .iridescent-monolith {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%);
        backdrop-filter: blur(30px); border: 1px solid var(--champagne-border);
      }
      .checkout-bar {
        background: linear-gradient(90deg, #ECFDF5 0%, #F0F9FF 100%);
        border: 1px solid rgba(255, 255, 255, 0.8); transition: all 0.5s ease;
      }
      .checkout-bar:hover {
        background: linear-gradient(90deg, #D1FAE5 0%, #E0F2FE 100%);
        letter-spacing: 0.5em;
      }
      .floating-art { animation: float 10s ease-in-out infinite; }
      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(1deg); }
      }
      body {
        background: linear-gradient(135deg, #F7F7F7 0%, #FFF5F2 50%, #F5F3FF 100%);
        background-attachment: fixed;
        color: #2D2D2D;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="font-sans-light min-h-screen">
      <div className="style-landscape"></div>



      <main className="relative pt-40 pb-40 max-w-[1400px] mx-auto px-10">
        <div className="mb-24 text-center">
          <h1 className="font-serif-high text-[#2D2D2D] text-7xl italic mb-6">The Selection</h1>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#8A8A8A]">Your personalized aesthetic curation • Dawn Edition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Cart Items */}
          <div className="col-span-1 md:col-span-8 flex flex-col gap-32">
            
            {/* Item 1 */}
            <div className="group relative flex flex-col lg:flex-row gap-16 items-center">
              <div className="glass-frame w-full max-w-[480px] aspect-[4/5] overflow-hidden p-6">
                <div 
                 onClick={() => navigate("/product-journey")}
                  className="w-full h-full bg-center bg-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105" 
                  style={{backgroundImage: `url("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000")`}}
                ></div>
              </div>
              <div className="flex-1 flex flex-col h-full py-12">
                <div className="mb-auto">
                  <h2 className="font-serif-high text-[#2D2D2D] text-5xl mb-6 leading-[1.1]">
                    Midnight Pulse<br/>
                    <span className="text-lg text-[#8A8A8A] font-sans-light uppercase tracking-[0.3em] not-italic">Wireless Acoustics</span>
                  </h2>
                  <p className="text-sm text-[#8A8A8A] max-w-xs leading-relaxed font-light">Engineered for pure silence. An extension of your sonic identity, finished in deep midnight cerulean.</p>
                </div>
                <div className="flex items-end justify-between mt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8A8A8A] mb-2">Value</p>
                    <p className="text-3xl font-serif-high text-[#2D2D2D]">$2,299.00</p>
                  </div>
                  <div className="flex items-center gap-10 border-b border-[#2D2D2D]/10 pb-3">
                    <button className="text-[#2D2D2D] hover:opacity-50 transition-all"><span className="material-symbols-outlined font-thin text-lg">remove</span></button>
                    <span className="text-sm text-[#2D2D2D] font-normal">01</span>
                    <button className="text-[#2D2D2D] hover:opacity-50 transition-all"><span className="material-symbols-outlined font-thin text-lg">add</span></button>
                  </div>
                </div>
              </div>
              <button className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity hover:!opacity-100 text-[#2D2D2D] hidden lg:block">
                <span className="material-symbols-outlined font-thin text-3xl">close</span>
              </button>
            </div>

            {/* Item 2 */}
            <div className="group relative flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="glass-frame w-full max-w-[480px] aspect-[4/5] overflow-hidden p-6">
                <div 
                   onClick={() => navigate("/product-journey")}
                  className="w-full h-full bg-center bg-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105" 
                  style={{backgroundImage: `url("https://images.unsplash.com/photo-1544433480-e44299d81961?q=80&w=1000")`}}
                ></div>
              </div>
              <div className="flex-1 flex flex-col h-full py-12 text-right">
                <div className="mb-auto">
                  <h2 className="font-serif-high text-[#2D2D2D] text-5xl mb-6 leading-[1.1]">
                    Ethereal Lumina<br/>
                    <span className="text-lg text-[#8A8A8A] font-sans-light uppercase tracking-[0.3em] not-italic">Brushed Aluminum Sculpture</span>
                  </h2>
                  <p className="text-sm text-[#8A8A8A] max-w-xs ml-auto leading-relaxed font-light">Capturing the essence of dawn. A minimalist masterpiece of form and refracted light.</p>
                </div>
                <div className="flex items-end justify-between flex-row-reverse mt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8A8A8A] mb-2 text-right">Value</p>
                    <p className="text-3xl font-serif-high text-[#2D2D2D]">$1,489.00</p>
                  </div>
                  <div className="flex items-center gap-10 border-b border-[#2D2D2D]/10 pb-3">
                    <button className="text-[#2D2D2D] hover:opacity-50 transition-all"><span className="material-symbols-outlined font-thin text-lg">remove</span></button>
                    <span className="text-sm text-[#2D2D2D] font-normal">01</span>
                    <button className="text-[#2D2D2D] hover:opacity-50 transition-all"><span className="material-symbols-outlined font-thin text-lg">add</span></button>
                  </div>
                </div>
              </div>
              <button className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity hover:!opacity-100 text-[#2D2D2D] hidden lg:block">
                <span className="material-symbols-outlined font-thin text-3xl">close</span>
              </button>
            </div>
          </div>

          {/* Checkout Sidebar */}
          <div className="col-span-1 md:col-span-4">
            <div className="sticky top-40 iridescent-monolith p-12 rounded-sm shadow-2xl">
              <h3 className="font-serif-high text-[#2D2D2D] text-3xl italic mb-12 pb-8 border-b border-[#2D2D2D]/5 text-center">Order Overview</h3>
              <div className="space-y-8 mb-16">
                <div className="flex justify-between text-[11px] uppercase tracking-[0.3em] text-[#8A8A8A]">
                  <span>Subtotal</span>
                  <span className="text-[#2D2D2D]">$3,788.00</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-[0.3em] text-[#8A8A8A]">
                  <span>Concierge Shipping</span>
                  <span className="text-[#2D2D2D] italic font-normal">Complimentary</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-[0.3em] text-[#8A8A8A]">
                  <span>Bespoke Tax</span>
                  <span className="text-[#2D2D2D]">$303.04</span>
                </div>
                <div className="pt-10 border-t border-[#2D2D2D]/5 flex justify-between items-baseline">
                  <span className="font-serif-high text-[#8A8A8A] text-xl italic">Total</span>
                  <span className="font-serif-high text-[#2D2D2D] text-5xl">$4,091.04</span>
                </div>
              </div>
              <button 
              onClick={() => navigate("/celebration")}
              className="w-full checkout-bar py-7 font-sans-light uppercase tracking-[0.4em] text-[10px] text-[#2D2D2D] rounded-full shadow-sm">
                Proceed to Checkout
              </button>
              <div className="mt-10 text-center">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#8A8A8A] flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">encrypted</span>
                  Secured White-Glove Transaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pairings Section */}
        <section className="mt-72">
          <div className="flex items-center justify-between mb-24">
            <h2 className="font-serif-high text-[#2D2D2D] text-5xl italic">Recommended Pairings</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#8A8A8A]">AI-Curated Additions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Velvet Carry Case", price: "$249.00", delay: "0s", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df" },
              { name: "Obsidian Stand", price: "$415.00", delay: "-2.5s", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae" },
              { name: "Filament Pack", price: "$89.00", delay: "-5s", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe" },
              { name: "Cleaning Kit", price: "$120.00", delay: "-7.5s", img: "https://images.unsplash.com/photo-1585298723682-7115561c51b7" }
            ].map((item, idx) => (
              <div key={idx} className="floating-art" style={{animationDelay: item.delay}}>
                <div className="glass-frame aspect-[3/4] p-5 mb-8 group cursor-pointer overflow-hidden">
                  <div 
                  onClick={() => navigate("/product-journey")}
                    className="w-full h-full bg-center bg-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    style={{backgroundImage: `url("${item.img}")`}}
                  ></div>
                </div>
                <div className="text-center">
                  <h4 className="font-serif-high text-[#2D2D2D] text-xl italic">{item.name}</h4>
                  <p className="text-[11px] uppercase tracking-widest text-[#8A8A8A] mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

  
    </div>
  );
};

export default EtherealCart;