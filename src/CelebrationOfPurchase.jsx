import React from 'react';
import { useNavigate } from 'react-router-dom';

const CelebrationOfPurchase = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-b from-[#F0F9FF] via-[#F5F3FF] to-[#FFFFFF] font-['Inter'] text-slate-800 min-h-screen overflow-x-hidden relative">
      {/* Dynamic Style Injection for Animations and Custom Effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        @keyframes rotate-slow {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes aurora {
            0%, 100% { opacity: 0.5; filter: blur(60px); }
            50% { opacity: 0.8; filter: blur(80px); }
        }
        .glass-sphere {
            background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1));
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5), 0 20px 50px rgba(0, 0, 0, 0.05);
        }
        .rupee-pearl {
            background: linear-gradient(135deg, #fff 0%, #e0e7ff 25%, #fae8ff 50%, #e0f2fe 75%, #fff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 10px rgba(255,255,255,0.8));
        }
        .glass-card-layered {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        }
        .mint-pill {
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(159, 224, 195, 0.4);
            box-shadow: 0 0 20px rgba(159, 224, 195, 0.2);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mint-pill:hover {
            background: rgba(159, 224, 195, 0.2);
            box-shadow: 0 0 30px rgba(159, 224, 195, 0.4);
            transform: translateY(-2px);
        }
        .aurora-glow {
            animation: aurora 8s infinite ease-in-out;
        }
        .floating-element {
            animation: float 6s infinite ease-in-out;
        }
        .rotate-rupee {
            animation: rotate-slow 12s infinite linear;
            transform-style: preserve-3d;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />

      {/* Background Aurora Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-sky-100 rounded-full aurora-glow"></div>
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-50 rounded-full aurora-glow" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute top-20 left-10 w-24 h-24 border border-blue-200/40 rounded-full floating-element"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border border-purple-200/40 rotate-45 floating-element" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-mint-200/40 rounded-full floating-element" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">
 

        <main className="flex flex-col items-center">
          {/* Hero Celebration Section */}
          <div className="relative w-full flex flex-col items-center justify-center pt-10 pb-20">
            {/* Confetti Pieces */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-3 h-3 bg-sky-200 rounded-sm top-1/4 left-1/3 rotate-12 opacity-60"></div>
              <div className="absolute w-3 h-3 bg-purple-200 rounded-full top-1/3 right-1/4 opacity-60"></div>
              <div className="absolute w-3 h-3 bg-emerald-100 rotate-45 bottom-1/4 left-1/4 opacity-60"></div>
              <div className="absolute w-3 h-3 bg-amber-100 rounded-sm top-1/2 left-10 opacity-60"></div>
              <div className="absolute w-3 h-3 bg-rose-100 rounded-full bottom-1/3 right-10 opacity-60"></div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center floating-element">
              <div className="glass-sphere absolute inset-0 rounded-full"></div>
              <div className="rotate-rupee">
                <span className="rupee-pearl text-8xl md:text-9xl font-['Playfair_Display'] font-bold">₹</span>
              </div>
            </div>

            <div className="text-center mt-12 max-w-2xl px-4">
              <p className="font-['Playfair_Display'] text-3xl md:text-4xl italic text-slate-800 leading-tight">
                A fine choice, <span className="font-sans font-light not-italic text-slate-500">we are preparing your selection for its debut.</span>
              </p>
              <p className="mt-6 text-slate-400 tracking-widest text-xs uppercase font-medium">Order Confirmed • ID #AI-IND-8829</p>
            </div>
          </div>

          {/* Detailed Summary Card */}
          <div className="w-full max-w-4xl relative">
            <div className="absolute inset-0 bg-white/10 blur-3xl -z-10 rounded-[3rem]"></div>
            <div className="glass-card-layered rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Order Items */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Your Selection</span>
                    <div className="h-[1px] flex-1 bg-slate-200/50"></div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-cover bg-center ring-1 ring-white/20 shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE')" }}></div>
                      <div className="flex-1">
                        <h4 className="font-['Playfair_Display'] text-lg text-slate-800">Luxe SmartWatch Series X</h4>
                        <p className="text-xs text-slate-500 font-medium">Midnight Gray • Bespoke Edition</p>
                        <p className="mt-1 font-semibold text-slate-700">₹28,900</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-cover bg-center ring-1 ring-white/20 shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9JYibZKiNrxJz3wkvR1kw5eZ4dBfqObgLQNpfHjxSbtMAQ26GoDg0fCrCWgGFTAKhdHcT9q5QtGV9RQCeNx1nBeag3_fQMYWt7F4STACjil8mD591DGpBXyXeoqX4R9700Iga8SrBRVXOD-1noBungOzcIzerne6ggUaamxpZTgOCxk28T3O_hKJlv2wgXC5oD6nHx5z5rDcN6w_Ypj5xd-iwN8TwLcIHd-fW_dZM7bbJHILctDvn0O5PcB7iinec-UYfmL9eYnI')" }}></div>
                      <div className="flex-1">
                        <h4 className="font-['Playfair_Display'] text-lg text-slate-800">Sonic Pro Headphones</h4>
                        <p className="text-xs text-slate-500 font-medium">Alpine White • Active Noise AI</p>
                        <p className="mt-1 font-semibold text-slate-700">₹16,500</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200/40">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Total Investment</p>
                        <p className="text-3xl font-['Playfair_Display'] font-bold text-slate-800 mt-1">₹45,400</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Paid with AI-Secure</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="space-y-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Destination</span>
                    <div className="h-[1px] flex-1 bg-slate-200/50"></div>
                  </div>
                  <div className="bg-white/30 rounded-2xl p-6 border border-white/40">
                    <h5 className="font-['Playfair_Display'] text-xl mb-4 text-slate-800">Radha Krishnan</h5>
                    <div className="space-y-1 text-sm text-slate-600 leading-relaxed">
                      <p>14th Floor, Skyline Penthouse</p>
                      <p>Bandra West, Mumbai 400050</p>
                      <p>Maharashtra, India</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-sm">verified</span>
                      <span className="text-xs font-semibold text-slate-500">Premium White-Glove Delivery</span>
                    </div>
                  </div>
                  {/* Progress Tracker */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <span>Order Placed</span>
                      <span>In Transit</span>
                      <span>Arrival</span>
                    </div>
                    <div className="relative h-1 w-full bg-slate-200/50 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1/3 bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.5)]"></div>
                    </div>
                    <p className="text-xs text-center text-slate-400 italic font-['Playfair_Display']">Anticipated arrival: Oct 28 - Oct 30</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                <button 
                onClick={() => navigate("/order")}
                className="mint-pill px-10 py-4 rounded-full text-slate-700 font-semibold text-sm flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">distance</span>
                  Track Journey
                </button>
                <button 
                onClick={() => navigate("/")}
                className="mint-pill px-10 py-4 rounded-full text-slate-700 font-semibold text-sm flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">explore</span>
                  Explore More
                </button>
              </div>
            </div>
          </div>

  
        </main>
      </div>
    </div>
  );
};

export default CelebrationOfPurchase;