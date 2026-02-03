import React from "react";

const Signup = () => {
  return (
    <>
      {/* Custom styles */}
      <style>{`
        .stage {
          perspective: 1600px;
        }

        .card-3d {
          transform-style: preserve-3d;
          backdrop-filter: blur(28px);
          background:
            radial-gradient(120% 120% at 0% 0%, rgba(139,92,246,.15), transparent 60%),
            radial-gradient(120% 120% at 100% 100%, rgba(34,211,238,.12), transparent 60%),
            rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 80px 160px rgba(0,0,0,.45),
            inset 0 0 0 0.5px rgba(255,255,255,.25);
        }

        .card-3d::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(
            120deg,
            transparent 20%,
            rgba(139,92,246,.6),
            rgba(34,211,238,.6),
            transparent 80%
          );
          filter: blur(20px);
          opacity: .35;
          z-index: -1;
        }

        .field {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .field:focus {
          outline: none;
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139,92,246,.35);
        }

        .primary-btn {
          background: linear-gradient(135deg, #8b5cf6, #22d3ee);
          box-shadow: 0 30px 80px rgba(139,92,246,.55);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 45px 120px rgba(139,92,246,.75);
        }
      `}</style>

     <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xl text-white font-[Manrope] stage flex items-center justify-center px-6">

        <div className="card-3d relative rounded-[2.75rem] max-w-5xl w-full overflow-hidden">

          {/* HEADER */}
          <div className="px-16 pt-14 pb-10 border-b border-white/10">
            <p className="text-xs tracking-[0.35em] uppercase text-white/50">
              Account Creation
            </p>

            <h1 className="text-4xl md:text-5xl font-light mt-4">
              Build your digital <br />
              <span className="font-semibold bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                presence
              </span>
            </h1>

            <p className="text-white/60 mt-4 max-w-xl">
              A secure, modern identity designed for next-generation platforms.
            </p>
          </div>

          {/* BODY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-16 py-14">

            {/* FORM */}
            <form className="space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/50">
                  Username
                </label>
                <input
                  className="field mt-2 w-full h-14 rounded-xl px-5 text-sm text-white placeholder:text-white/35"
                  placeholder="yourname"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-widest text-white/50">
                  Email
                </label>
                <input
                  className="field mt-2 w-full h-14 rounded-xl px-5 text-sm text-white placeholder:text-white/35"
                  placeholder="you@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">
                    Password
                  </label>
                  <input
                    type="password"
                    className="field mt-2 w-full h-14 rounded-xl px-5 text-sm text-white placeholder:text-white/35"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-widest text-white/50">
                    Confirm
                  </label>
                  <input
                    type="password"
                    className="field mt-2 w-full h-14 rounded-xl px-5 text-sm text-white placeholder:text-white/35"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="button"
                className="primary-btn w-full h-16 rounded-xl font-bold uppercase tracking-[0.25em] text-sm text-black mt-4"
              >
                Create Account →
              </button>

              <p className="text-xs text-white/40 mt-4">
                By continuing, you agree to our terms & privacy policy.
              </p>
            </form>

            {/* SIDE INFO */}
            <div className="hidden lg:flex flex-col justify-center space-y-8 text-white/60">
              <div>
                <h3 className="text-xs uppercase tracking-widest mb-2">
                  Security First
                </h3>
                <p className="text-sm leading-relaxed">
                  Encrypted credentials and modern authentication standards.
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest mb-2">
                  Future Ready
                </h3>
                <p className="text-sm leading-relaxed">
                  Designed to scale across devices and platforms.
                </p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest mb-2">
                  Clean & Powerful
                </h3>
                <p className="text-sm leading-relaxed">
                  Minimal interface focused on clarity and performance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
