import React from "react";

export default function LuxuryFooter() {
  return (
    <footer className="py-32 px-16 glass-ultra border-t-0 border-white/40">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="col-span-5">
            <h2 className="text-4xl font-black tracking-tighter mb-10">PREMIUM AI</h2>
            <p className="text-xl font-light text-primary/50 max-w-sm leading-relaxed">
              The intersection of human emotion and technical precision. Redefining the everyday through the lens of luxury.
            </p>
          </div>

          {/* Links & Newsletter */}
          <div className="col-span-7 flex justify-between">
            {/* Collections */}
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-primary/30">
                Collections
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Visionary X</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Bespoke Series</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Archival Items</a></li>
              </ul>
            </div>

            {/* Maison */}
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-primary/30">
                Maison
              </h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ethical Matrix</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ateliers</a></li>
              </ul>
            </div>

            {/* Inquiry / Newsletter */}
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-primary/30">
                Inquiry
              </h5>
              <div className="flex gap-4 border-b border-primary/10 pb-4">
                <input
                  className="bg-transparent border-none p-0 text-sm w-48 focus:ring-0 placeholder:text-primary/20"
                  placeholder="Subscribe to Journal"
                  type="text"
                />
                <button className="material-symbols-outlined text-sm">north_east</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.5em] text-primary/30">
          <p>© 2024 LUXURY COLLECTIVE</p>
          <div className="flex gap-12">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
