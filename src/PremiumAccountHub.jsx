import React from 'react';

const PremiumAccountHub = () => {
  return (
    <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-['Inter',sans-serif] text-[#0f171a] dark:text-white min-h-screen">
      {/* Dynamic Style Injection for Glassmorphism and Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        }
        .dark .glass-card {
            background: rgba(18, 28, 32, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />



      <main className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-72 flex flex-col gap-6">
            <div className="glass-card p-6 rounded-xl flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-[#538093] uppercase tracking-widest px-3">Account Menu</p>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#6cc0e4] text-white font-medium shadow-lg shadow-[#6cc0e4]/20" href="#">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-sm">Profile Details</span>
                  </a>
                  <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#538093] dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all" href="#">
                    <span className="material-symbols-outlined">package_2</span>
                    <span className="text-sm">Order History</span>
                  </a>
                  <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#538093] dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all" href="#">
                    <span className="material-symbols-outlined">location_on</span>
                    <span className="text-sm">Saved Addresses</span>
                  </a>
                  <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#538093] dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all" href="#">
                    <span className="material-symbols-outlined">payments</span>
                    <span className="text-sm">Payment Methods</span>
                  </a>
                  <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#538093] dark:text-gray-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all" href="#">
                    <span className="material-symbols-outlined">verified_user</span>
                    <span className="text-sm">Security & Privacy</span>
                  </a>
                </nav>
              </div>
              <div className="flex flex-col gap-2 border-t border-black/5 dark:border-white/5 pt-6">
                <a className="flex items-center gap-3 px-4 py-3 rounded-full text-[#538093] dark:text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all" href="#">
                  <span className="material-symbols-outlined">logout</span>
                  <span className="text-sm font-medium">Log Out</span>
                </a>
              </div>
            </div>

            {/* Premium Status Card */}
            <div className="bg-gradient-to-br from-[#6cc0e4] to-[#4da8cf] p-6 rounded-xl text-white shadow-xl shadow-[#6cc0e4]/10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/80">workspace_premium</span>
                  <p className="text-xs font-bold uppercase tracking-widest">Gold Status</p>
                </div>
                <p className="text-lg font-bold leading-tight">Your AI Stylist is ready to curate.</p>
                <p className="text-xs text-white/80">3 new personalized drops based on your recent activity.</p>
                <button className="mt-2 w-full py-2 bg-white text-[#6cc0e4] font-bold text-xs rounded-full hover:bg-opacity-90 transition-all">View Recommendations</button>
              </div>
              <div className="absolute -right-4 -bottom-4 size-24 bg-white/20 rounded-full blur-2xl"></div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight text-[#0f171a] dark:text-white">Account Dashboard</h1>
                <p className="text-[#538093] dark:text-gray-400 max-w-lg">Manage your personal details, secure your account, and optimize your shopping preferences.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-white/10 border border-white/50 dark:border-white/10 rounded-full text-[#0f171a] dark:text-white font-bold text-sm shadow-sm hover:shadow-md transition-all">
                <span className="material-symbols-outlined text-xl">edit</span>
                Edit Profile
              </button>
            </div>

            {/* Profile Info */}
            <div className="glass-card p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 group">
              <div className="relative">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 ring-4 ring-[#6cc0e4]/20 group-hover:ring-[#6cc0e4]/40 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa5Zvyo7CRqsZApBSZFeY4J9T4HZVb4GcpLXJtWELZLS-CKPGsm7gsHRVrehczfbUaPEcSdVe0KHtTLdRdhA9ovmdlzcrXwrBD9yzKMtaRJgTjUMWDxh9HOnzSta2yPyxFQqYVz3ju5w2oRqgEShOswPlp2liM8gVdKHVeM6WFE8uUg9gs17sByUGg8MjRwqfZZFDJwZB-bS9eRA4dLDh9ZTI0LlTRbohaNrQbTBva1918RLREJ0WkypCCkk9UurlZWijkcGHmXF0")'}}></div>
                <button className="absolute bottom-0 right-0 bg-white shadow-lg p-2 rounded-full text-[#6cc0e4] flex items-center justify-center ring-1 ring-black/5">
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                </button>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#0f171a] dark:text-white">Alex Johnson</h3>
                <p className="text-[#538093] dark:text-gray-400">alex.j@premium-ai.com</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                  <span className="px-4 py-1.5 bg-[#6cc0e4]/10 text-[#6cc0e4] text-xs font-bold rounded-full border border-[#6cc0e4]/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">bolt</span>
                    AI-Powered Insights Enabled
                  </span>
                  <span className="px-4 py-1.5 bg-white/50 dark:bg-white/5 text-[#538093] dark:text-gray-400 text-xs font-bold rounded-full border border-black/5 dark:border-white/5">Member since Oct 2023</span>
                </div>
              </div>
            </div>

            {/* Saved Addresses */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-bold">Saved Addresses</h2>
                <button className="text-[#6cc0e4] text-sm font-bold flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Add New
                </button>
              </div>
              <div className="glass-card p-6 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/40 dark:bg-white/5 border border-white/20 ring-1 ring-[#6cc0e4]/30">
                  <span className="material-symbols-outlined text-[#6cc0e4]">home</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm">Primary Home</p>
                    <p className="text-xs text-[#538093] dark:text-gray-400 mt-1">123 Silicon Valley Drive, Floor 4<br/>Palo Alto, CA 94301</p>
                  </div>
                  <span className="px-2 py-0.5 bg-[#6cc0e4]/20 text-[#6cc0e4] text-[10px] font-bold rounded-full uppercase">Default</span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white/20 dark:bg-white/5 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[#538093]">apartment</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm">The Office HQ</p>
                    <p className="text-xs text-[#538093] dark:text-gray-400 mt-1">500 Innovation Way, Suite 200<br/>Austin, TX 78701</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-xl font-bold">Payment Methods</h2>
                <button className="px-6 py-2 bg-[#6cc0e4]/10 text-[#6cc0e4] border border-[#6cc0e4]/20 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#6cc0e4]/20 transition-all">
                  <span className="material-symbols-outlined text-lg">add_card</span>
                  Add New Method
                </button>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Credit Cards */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-[#538093] uppercase tracking-widest px-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">credit_card</span>
                    Saved Luxury Cards
                  </p>
                  <div className="flex flex-col gap-4">
                    {/* Platinum Card */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white shadow-2xl">
                      <div className="flex justify-between items-start relative z-10">
                        <div className="flex flex-col gap-1">
                          <p className="text-[10px] tracking-[0.2em] font-medium opacity-60 uppercase">Infinite Wealth Member</p>
                          <h4 className="text-lg font-bold tracking-tight">PLATINUM ELITE</h4>
                        </div>
                        <img alt="Mastercard" className="h-8 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz8hazlfiUcqi_UFufgU3HARInv5hZ5EMRKcGR2LfSHvuqlmDooiMqxn47VpGpSON3kvnprvnxG8WOSlSVX5_feJdnZ7rUQUPdtb7ODsk9Dwl0xILDoMScx3mhc9TTIQfGUrO2sumgDkN6s-AYc88KZ-cG-_nF4kCMOPsyVBnhhOzIGOTvsInaJ1sEDt7B52A-07wLUCUNtqOuPuBfEkcU8ZtTLj-auOQVhNlZWYMFshGdmORpNRbHDC0nodwiEiZG0iM2cfbxQVc"/>
                      </div>
                      <div className="mt-12 relative z-10 text-2xl font-medium tracking-[0.15em] flex justify-between">
                        <span>••••</span> <span>••••</span> <span>••••</span> <span>4421</span>
                      </div>
                      <div className="mt-8 flex justify-between items-end relative z-10">
                        <div className="flex gap-8">
                          <div className="flex flex-col">
                            <p className="text-[8px] uppercase opacity-50 tracking-widest mb-1">Card Holder</p>
                            <p className="text-xs font-bold tracking-wider">ALEX JOHNSON</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[8px] uppercase opacity-50 tracking-widest mb-1">Expires</p>
                            <p className="text-xs font-bold tracking-wider">09/26</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-[#6cc0e4]/20 backdrop-blur-md text-[#6cc0e4] text-[10px] font-bold rounded-lg border border-[#6cc0e4]/30 uppercase">Primary</span>
                      </div>
                      <div className="absolute -right-20 -top-20 size-64 bg-[#6cc0e4]/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* Visa Card */}
                    <div className="glass-card p-8 rounded-2xl relative overflow-hidden bg-white text-gray-800 border-white/50">
                      <div className="flex justify-between items-start relative z-10">
                        <span className="material-symbols-outlined text-3xl opacity-60">contactless</span>
                        <p className="text-lg font-bold italic text-blue-800 opacity-60">VISA</p>
                      </div>
                      <div className="mt-12 relative z-10 text-2xl font-medium tracking-[0.15em] flex justify-between text-gray-400">
                        <span>••••</span> <span>••••</span> <span>••••</span> <span className="text-gray-800">8892</span>
                      </div>
                      <div className="mt-8 flex flex-col relative z-10">
                        <p className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-1">Corporate Card</p>
                        <p className="text-xs font-bold tracking-widest uppercase">The Office HQ</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wallets & UPI */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-bold text-[#538093] uppercase tracking-widest px-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                    Instant UPI & Wallets
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="glass-card p-6 rounded-2xl flex items-center gap-6 bg-gradient-to-br from-blue-50/50 to-white dark:from-white/5 dark:to-transparent border-[#6cc0e4]/20">
                      <div className="size-20 bg-white p-2 rounded-xl shadow-inner flex items-center justify-center">
                        <div className="size-full bg-[#F2F3F5] rounded-lg flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#6cc0e4] text-3xl">qr_code_2</span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-[9px] font-bold rounded uppercase">Active</span>
                          <span className="text-[9px] font-bold text-gray-400 uppercase">Primary UPI</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">alex.johnson@okaxis</p>
                        <p className="text-xs text-[#538093]">Verified Banking ID</p>
                        <div className="flex gap-4 mt-1">
                          <button className="text-[10px] font-bold text-[#6cc0e4] uppercase hover:underline">Show QR</button>
                          <button className="text-[10px] font-bold text-gray-400 uppercase hover:underline">Edit ID</button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Google Pay", label: "Ending in 4421", icon: "payments", color: "text-blue-600" },
                        { name: "PhonePe", label: "Secondary Wallet", icon: "account_balance_wallet", color: "text-purple-600" },
                        { name: "Apple Pay", label: "Secured by FaceID", icon: "brand_awareness", color: "text-gray-900" }
                      ].map((wallet, idx) => (
                        <div key={idx} className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-[#6cc0e4]/40 transition-all cursor-pointer">
                          <div className={`size-10 bg-white rounded-lg flex items-center justify-center ${wallet.color}`}>
                            <span className="material-symbols-outlined">{wallet.icon}</span>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm font-bold">{wallet.name}</p>
                            <p className="text-[10px] text-[#538093]">{wallet.label}</p>
                          </div>
                        </div>
                      ))}
                      <div className="glass-card p-4 rounded-xl border-dashed border-2 flex items-center justify-center gap-2 text-[#6cc0e4] hover:bg-[#6cc0e4]/5 transition-all cursor-pointer">
                        <span className="material-symbols-outlined text-lg">add</span>
                        <p className="text-sm font-bold">Add Wallet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Banner */}
            <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-white/80 to-blue-50/50">
              <div className="size-14 bg-[#6cc0e4]/10 rounded-2xl flex items-center justify-center text-[#6cc0e4] relative">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
                <div className="absolute -top-1 -right-1 size-4 bg-[#6cc0e4] text-white rounded-full flex items-center justify-center border-2 border-white">
                  <span className="material-symbols-outlined text-[10px]">key</span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-bold text-lg">Bank-Grade Encryption</h4>
                <p className="text-sm text-[#538093] mt-1">Your payment identifiers are vaulted with AES-256 encryption. We utilize hardware-level security modules (HSM) to ensure your luxury acquisitions are processed with zero-knowledge architecture.</p>
              </div>
              <div className="hidden md:flex flex-col items-center gap-1 border-l border-black/5 pl-8">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PCI DSS</p>
                <p className="text-xs font-black text-gray-800">COMPLIANT</p>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold px-4">Notification Preferences</h2>
              <div className="glass-card p-8 rounded-xl flex flex-col gap-8">
                {[
                  { title: "AI-Curated Shopping Alerts", desc: "Get notified when products matching your taste profile go on sale.", active: true },
                  { title: "Order Status Updates", desc: "Receive real-time tracking and delivery confirmations via SMS.", active: true },
                  { title: "Newsletter & Drops", desc: "Monthly digest of the latest tech and premium curated lifestyle items.", active: false }
                ].map((pref, idx, arr) => (
                  <div key={idx} className={`flex items-center justify-between ${idx !== arr.length - 1 ? 'pb-6 border-b border-black/5 dark:border-white/5' : ''}`}>
                    <div className="flex flex-col gap-1">
                      <p className="font-bold text-[#0f171a] dark:text-white">{pref.title}</p>
                      <p className="text-sm text-[#538093] dark:text-gray-400">{pref.desc}</p>
                    </div>
                    <button className={`w-12 h-6 rounded-full relative p-1 transition-all ${pref.active ? 'bg-[#6cc0e4]' : 'bg-gray-300 dark:bg-white/10'}`}>
                      <span className={`size-4 bg-white rounded-full absolute transition-all ${pref.active ? 'right-1' : 'left-1'}`}></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

     
          </div>
        </div>
      </main>
    </div>
  );
};

export default PremiumAccountHub;