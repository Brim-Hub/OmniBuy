// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // const Navbar = () => {
// //   const navStyle = {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: "10px",
// //     padding: "12px 20px",
// //     backgroundColor: "#1c1c1c",
// //     position: "sticky",   // 👈 REQUIRED for zIndex to work
// //     top: 0,
// //     zIndex: 1000,         // 👈 FIXED
// //     boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
// //   }

// //   const buttonStyle = {
// //     padding: "10px 15px",
// //     border: "none",
// //     borderRadius: "5px",
// //     cursor: "pointer",
// //     textDecoration: "none",
// //     fontWeight: "bold",
// //     color: "white",
// //     backgroundColor: "#444",
// //     transition: "all 0.2s ease",
// //   };

// //   const activeButtonStyle = {
// //     backgroundColor: "#00bcd4",
// //     color: "#fff",
// //   };

// //   return (
// //     <nav>
// //       <ul style={navStyle}>
// //         {[
// //           { path: "/", label: "UltraLuxuryAI" },
// //           { path: "/dash", label: "Dash" },
// //           { path: "/home", label: "Home" },
// //           { path: "/product-discovery", label: "ProductDiscoveryPage" },
// //           { path: "/product-journey", label: "ProductJourney" },
// //           { path: "/premium-product", label: "PremiumProductPage" },
// //           { path: "/ai-cart", label: "AICommerceCart" },
// //           { path: "/order-success", label: "OrderSuccessTracking" },
// //           { path: "/premium-hub", label: "PremiumAccountHub" },
// //           { path: "/wishlist", label: "AuraWishlistPage" },
// //           { path: "/celebration", label: "CelebrationOfPurchase" },
// //           { path: "/ethereal-cart", label: "EtherealCart" },
// //         ].map((link) => (
// //           <li key={link.path}>
// //             <NavLink
// //               to={link.path}
// //               end
// //               style={({ isActive }) =>
// //                 isActive
// //                   ? { ...buttonStyle, ...activeButtonStyle }
// //                   : buttonStyle
// //               }
// //             >
// //               {link.label}
// //             </NavLink>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const linkBase = "text-sm font-semibold transition-opacity";
//   const linkInactive = "opacity-60 hover:opacity-100";
//   const linkActive = "text-[#47baeb] opacity-100";

//   const iconBase =
//     "flex items-center justify-center rounded-full size-10 transition-all";
//   const iconBg =
//     "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

//   return (
//     <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">
      
//       {/* LEFT: Logo + Links */}
//       <div className="flex items-center gap-8">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white">
//             <span className="material-symbols-outlined">auto_awesome</span>
//           </div>
//           <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex items-center gap-6">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Explore
//           </NavLink>

//           <NavLink
//             to="/wishlist"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Wishlist
//           </NavLink>

//           <NavLink
//             to="/styles"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Styles
//           </NavLink>

//           <NavLink
//             to="/luxury"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Luxury
//           </NavLink>

//           <NavLink
//             to="/product"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Discovery
//           </NavLink>

//           <NavLink
//             to="/order"
//             className={({ isActive }) =>
//               `${linkBase} ${isActive ? linkActive : linkInactive}`
//             }
//           >
//             Orders
//           </NavLink>
//         </nav>
//       </div>

//       {/* CENTER: Search */}
//       <div className="flex flex-1 justify-center max-w-md mx-8">
//         <div className="relative w-full">
//           <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
//             search
//           </span>
//           <input
//             className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
//             placeholder="Search your aesthetic..."
//             type="text"
//           />
//         </div>
//       </div>

//       {/* RIGHT: Icons */}
//       <div className="flex items-center gap-3">
//         {/* Favorite */}
//         <NavLink
//           to="/favorites"
//           className={({ isActive }) =>
//             `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
//           }
//         >
//           <span className="material-symbols-outlined text-[20px] fill-1">
//             favorite
//           </span>
//         </NavLink>

//         {/* Cart */}
//         <NavLink
//           to="/cart"
//           className={({ isActive }) =>
//             `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
//           }
//         >
//           <span className="material-symbols-outlined text-[20px]">
//             shopping_bag
//           </span>
//           <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
//             2
//           </span>
//         </NavLink>

//         {/* Profile */}
//         <div
//           className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
//           style={{
//             backgroundImage:
//               'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
//           }}
//         />
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkBase = "text-sm font-semibold transition-opacity";
  const linkInactive = "opacity-60 hover:opacity-100";
  const linkActive = "text-[#47baeb] opacity-100";

  const iconBase =
    "flex items-center justify-center rounded-full size-10 transition-all";
  const iconBg =
    "bg-[#e8eff2] dark:bg-[#1e2d35] text-[#0f171a] dark:text-white hover:bg-[#6cc0e4]/20";

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b-0 px-6 py-4 flex items-center justify-between mx-auto max-w-[1440px] mt-4 rounded-full">

      {/* LEFT: Logo + Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        
              <NavLink
            to="/"
            end
          >
            <div className="flex items-center gap-3">
          <div className="size-10 bg-[#47baeb] rounded-full flex items-center justify-center text-white">
            
          </div>
          <h2 className="text-xl font-black tracking-tight">Aura AI</h2>
        </div>
          </NavLink>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 flex-wrap">
    

          <NavLink
            to="/dash"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Dash
          </NavLink>
   {/* <NavLink
            to="/signup"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Signup
          </NavLink>
     <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Login
          </NavLink> */}

  

   

          <NavLink
            to="/order"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Order Tracking
          </NavLink>


          <NavLink
            to="/product-discovery"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Product Discovery
          </NavLink>


        </nav>
      </div>

      {/* CENTER: Search */}
      <div className="flex flex-1 justify-center max-w-md mx-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#47baeb]">
            search
          </span>
          <input
            className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-4 py-2.5 focus:ring-2 focus:ring-[#47baeb]/50 placeholder:text-gray-400 text-sm"
            placeholder="Search your aesthetic..."
            type="text"
          />
        </div>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-3">
        {/* Favorite */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `${iconBase} ${iconBg} ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
          }
        >
          
          {/* <span className="material-symbols-outlined text-[20px] fill-1">
            favorite
          </span> */}
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/luxury"
          className={({ isActive }) =>
            `${iconBase} ${iconBg} relative ${isActive ? "ring-2 ring-[#47baeb]" : ""}`
          }
        >
          {/* <span className="material-symbols-outlined text-[20px]">
            shopping_bag
          </span> */}
          <span className="absolute -top-1 -right-1 bg-[#6cc0e4] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#f6f7f8] dark:border-[#121c20]">
            2
          </span>
        </NavLink>

        {/* Profile */}
       <NavLink
      to="/premium-account" // ✅ the route you want to navigate to
      className="ssize-10 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-800"
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATH_-fpaWUviKCO9PDWz-qUz0l7PhpcaCUfldK0kCUvkUHyzaiZe0e0NZ4Jb2Gtb6eIz_35MJlIPoc3ePg1JYVoPDbgEsOZG9PG2v-MyO_spaXRJOGAfYonqr03O1vq3PvaMvvyhGinzFiblCKbMPqQpmhjSJLW28-MPg7TwPjdN5WRVt4G7jHaFbZ1ar3f7evyHENZJqxkK1dnNzzIgQbc0F9p9FJw_NUZvi3kZohu366FH9sMQSP3WA4lACHCtjJ-8vLuX2NZSs")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "50px",
        height: "50px",
        display: "inline-block",
      }}
    />
      </div>




    </header>
  );
};

export default Navbar;
