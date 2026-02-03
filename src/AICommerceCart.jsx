// // // import React, { useState } from 'react';

// // // /**
// // //  * AICommerceCart Component
// // //  * A complete copy of the provided HTML/Tailwind design.
// // //  */
// // // const AICommerceCart = () => {
// // //   const [quantities, setQuantities] = useState({ item1: 1, item2: 2 });

// // //   const updateQty = (item, delta) => {
// // //     setQuantities(prev => ({
// // //       ...prev,
// // //       [item]: Math.max(1, prev[item] + delta)
// // //     }));
// // //   };

// // //   return (
// // //     <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-['Inter',sans-serif] text-[#0f171a] dark:text-[#f8fafb] min-h-screen transition-colors duration-300">
// // //       {/* Required External Styles */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
// // //         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

// // //         .glass-card {
// // //             background: rgba(255, 255, 255, 0.7);
// // //             backdrop-filter: blur(12px);
// // //             -webkit-backdrop-filter: blur(12px);
// // //             border: 1px solid rgba(255, 255, 255, 0.3);
// // //         }
// // //         .dark .glass-card {
// // //             background: rgba(18, 28, 32, 0.7);
// // //             border: 1px solid rgba(255, 255, 255, 0.05);
// // //         }
// // //         input::-webkit-outer-spin-button,
// // //         input::-webkit-inner-spin-button {
// // //             -webkit-appearance: none;
// // //             margin: 0;
// // //         }
// // //       `}</style>

  

// // //       <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
// // //         {/* Progress Bar Section */}
// // //         <div className="mb-10 max-w-[800px] mx-auto">
// // //           <div className="flex flex-col gap-4 p-4">
// // //             <div className="flex gap-6 justify-between items-end">
// // //               <h1 className="text-[#0f171a] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Your Cart</h1>
// // //               <p className="text-[#6cc0e4] text-sm font-bold leading-normal uppercase tracking-widest">Step 1 of 3</p>
// // //             </div>
// // //             <div className="relative pt-2">
// // //               <div className="rounded-full bg-[#d1dfe5] dark:bg-[#2a3a42] overflow-hidden">
// // //                 <div className="h-2 rounded-full bg-[#6cc0e4]" style={{ width: '33.33%' }}></div>
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-between text-[#538093] text-xs font-semibold uppercase tracking-wider">
// // //               <span className="text-[#6cc0e4]">Cart</span>
// // //               <span>Shipping</span>
// // //               <span>Payment</span>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flex flex-col lg:flex-row gap-10">
// // //           {/* Left Side: Cart Items */}
// // //           <div className="flex-1 flex flex-col gap-6">
// // //             <p className="text-[#538093] dark:text-[#a0b8c3] text-sm font-medium">Review your items before proceeding to checkout.</p>
            
// // //             {/* Item 1 */}
// // //             <div className="glass-card rounded-xl p-6 flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
// // //               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-32 shadow-inner border border-white/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5j0GQVJSYkYHyCDwzPB5TSgvsrrMtsdl1jB20BiRdu36oxO56ZQrlNKe1HmKmjLgZAIN1xVllOtP_t-8eSZRca7KW5rpy6sB3Gp03U_AjXVSaN9aJuzg3Juca_x5lx6PHsf_O95DY6ZqauF6CwhOnFsPuaZywCH4dTD9GLrrNrThq8o6PBWcpHmAiqFnk6nuCIRqDegChUC4jxyOiej7i4F3Z4y4_kdpR0jSiH4a-QU1Cn0GmhyA0O8d08CdoBs_CIlFDuM2Xyyc")' }}></div>
// // //               <div className="flex flex-1 flex-col justify-between h-32">
// // //                 <div>
// // //                   <div className="flex justify-between items-start">
// // //                     <h3 className="text-[#0f171a] dark:text-white text-xl font-bold">Premium Wireless Headphones</h3>
// // //                     <button className="text-[#538093] hover:text-red-500 transition-colors">
// // //                       <span className="material-symbols-outlined">delete</span>
// // //                     </button>
// // //                   </div>
// // //                   <p className="text-[#538093] dark:text-[#a0b8c3] text-sm mt-1">Size: One Size | Color: Midnight Blue</p>
// // //                 </div>
// // //                 <div className="flex items-center justify-between mt-4">
// // //                   <p className="text-[#6cc0e4] text-xl font-black">$299.00</p>
// // //                   <div className="flex items-center gap-4 bg-[#e8eff2] dark:bg-[#1e2d35] p-1.5 rounded-full">
// // //                     <button onClick={() => updateQty('item1', -1)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#2a3a42] shadow-sm hover:bg-[#6cc0e4]/10 transition-colors">
// // //                       <span className="material-symbols-outlined text-[18px]">remove</span>
// // //                     </button>
// // //                     <span className="text-base font-bold w-6 text-center">{quantities.item1}</span>
// // //                     <button onClick={() => updateQty('item1', 1)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#2a3a42] shadow-sm hover:bg-[#6cc0e4]/10 transition-colors">
// // //                       <span className="material-symbols-outlined text-[18px]">add</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Item 2 */}
// // //             <div className="glass-card rounded-xl p-6 flex gap-6 items-center shadow-sm hover:shadow-md transition-shadow">
// // //               <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-32 shadow-inner border border-white/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsFstrEha0CGACCJ5_ffwcZJZmrs3to_wQhRQ9fTaDygtlwYXi7HoithmvNJH2lbP3PO3XDWQ2D6p8iC1R3iXqWhCZ8ltKLykHCia72hZFwS7jyupfURXi1hyIiPUv36HadYmSNLc_CFfev79m9tEpX7M6MwHsZPmzf7pVFwjo97uFpPYm-_JI72jZ9cN0OmPlwsAAOy-BQIkUcUTtI5O7Lku9KvkOpCT0qbFQ4M_I0Z3Uc4Y30cd1ZyaG28kyrypZXhc8x5LmJeo")' }}></div>
// // //               <div className="flex flex-1 flex-col justify-between h-32">
// // //                 <div>
// // //                   <div className="flex justify-between items-start">
// // //                     <h3 className="text-[#0f171a] dark:text-white text-xl font-bold">Minimalist Desk Lamp</h3>
// // //                     <button className="text-[#538093] hover:text-red-500 transition-colors">
// // //                       <span className="material-symbols-outlined">delete</span>
// // //                     </button>
// // //                   </div>
// // //                   <p className="text-[#538093] dark:text-[#a0b8c3] text-sm mt-1">Material: Brushed Aluminum</p>
// // //                 </div>
// // //                 <div className="flex items-center justify-between mt-4">
// // //                   <p className="text-[#6cc0e4] text-xl font-black">$89.00</p>
// // //                   <div className="flex items-center gap-4 bg-[#e8eff2] dark:bg-[#1e2d35] p-1.5 rounded-full">
// // //                     <button onClick={() => updateQty('item2', -1)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#2a3a42] shadow-sm hover:bg-[#6cc0e4]/10 transition-colors">
// // //                       <span className="material-symbols-outlined text-[18px]">remove</span>
// // //                     </button>
// // //                     <span className="text-base font-bold w-6 text-center">{quantities.item2}</span>
// // //                     <button onClick={() => updateQty('item2', 1)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#2a3a42] shadow-sm hover:bg-[#6cc0e4]/10 transition-colors">
// // //                       <span className="material-symbols-outlined text-[18px]">add</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* AI recommendation card */}
// // //             <div className="mt-4 p-5 rounded-xl border border-dashed border-[#6cc0e4]/40 bg-[#6cc0e4]/5 flex items-center justify-between">
// // //               <div className="flex items-center gap-4">
// // //                 <div className="size-10 rounded-full bg-[#6cc0e4]/20 flex items-center justify-center text-[#6cc0e4]">
// // //                   <span className="material-symbols-outlined">auto_awesome</span>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm font-bold text-[#0f171a] dark:text-white">AI Suggestion</p>
// // //                   <p className="text-xs text-[#538093] dark:text-[#a0b8c3]">Add the Travel Case for your headphones and save 15%</p>
// // //                 </div>
// // //               </div>
// // //               <button className="px-4 py-2 bg-[#6cc0e4]/20 text-[#6cc0e4] text-xs font-bold rounded-full hover:bg-[#6cc0e4] hover:text-white transition-all">Add +$24.99</button>
// // //             </div>
// // //           </div>

// // //           {/* Right Side: Checkout Panel */}
// // //           <div className="w-full lg:w-[400px]">
// // //             <div className="glass-card rounded-xl p-8 sticky top-28 shadow-xl">
// // //               <h2 className="text-2xl font-black mb-6">Order Summary</h2>
// // //               <div className="flex flex-col gap-4 text-sm mb-8 border-b border-[#e8eff2] dark:border-[#2a3a42] pb-6">
// // //                 <div className="flex justify-between">
// // //                   <span className="text-[#538093] dark:text-[#a0b8c3]">Subtotal</span>
// // //                   <span className="font-bold">$477.00</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span className="text-[#538093] dark:text-[#a0b8c3]">Shipping</span>
// // //                   <span className="font-bold text-green-500 uppercase text-xs">Free</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span className="text-[#538093] dark:text-[#a0b8c3]">Estimated Tax</span>
// // //                   <span className="font-bold">$38.16</span>
// // //                 </div>
// // //               </div>
// // //               <div className="flex justify-between items-center mb-8">
// // //                 <span className="text-lg font-bold">Total Amount</span>
// // //                 <span className="text-3xl font-black text-[#6cc0e4]">$515.16</span>
// // //               </div>
// // //               <div className="flex flex-col gap-4">
// // //                 <button className="w-full bg-[#6cc0e4] text-white py-4 rounded-full font-bold text-lg shadow-lg shadow-[#6cc0e4]/30 hover:shadow-[#6cc0e4]/50 transition-all flex items-center justify-center gap-2">
// // //                   Secure Checkout
// // //                   <span className="material-symbols-outlined">lock</span>
// // //                 </button>
// // //                 <div className="mt-4">
// // //                   <label className="block text-xs font-bold text-[#538093] uppercase tracking-wider mb-2 ml-1">Promo Code</label>
// // //                   <div className="flex gap-2">
// // //                     <input className="flex-1 rounded-full bg-[#e8eff2] dark:bg-[#1e2d35] border-none text-sm px-4 focus:ring-2 focus:ring-[#6cc0e4]/40" placeholder="Enter code" type="text" />
// // //                     <button className="px-6 py-2 bg-[#e8eff2] dark:bg-[#2a3a42] rounded-full text-xs font-bold hover:bg-[#6cc0e4]/20 transition-colors">Apply</button>
// // //                   </div>
// // //                 </div>
// // //                 <div className="mt-10 flex flex-col items-center gap-4">
// // //                   <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
// // //                     <span className="material-symbols-outlined text-4xl">payments</span>
// // //                     <span className="material-symbols-outlined text-4xl">credit_card</span>
// // //                     <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
// // //                   </div>
// // //                   <p className="text-[10px] text-[#538093] flex items-center gap-1 text-center">
// // //                     <span className="material-symbols-outlined text-[14px]">verified_user</span>
// // //                     AES-256 Bit Encryption Secured Checkout
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {/* Secondary Actions */}
// // //             <div className="mt-6 flex justify-center gap-6">
// // //               <button className="text-sm font-semibold text-[#538093] hover:text-[#6cc0e4] transition-colors flex items-center gap-2">
// // //                 <span className="material-symbols-outlined text-[18px]">arrow_back</span>
// // //                 Continue Shopping
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </main>


// // //     </div>
// // //   );
// // // };

// // // export default AICommerceCart;

// // import React, { useState } from "react";

// // const productsBase = [
// //   {
// //     title: "Premium Wireless Headphones",
// //     price: 299,
// //     details: "Size: One Size | Color: Midnight Blue",
// //     image:
// //       "https://lh3.googleusercontent.com/aida-public/AB6AXuD5j0GQVJSYkYHyCDwzPB5TSgvsrrMtsdl1jB20BiRdu36oxO56ZQrlNKe1HmKmjLgZAIN1xVllOtP_t-8eSZRca7KW5rpy6sB3Gp03U_AjXVSaN9aJuzg3Juca_x5lx6PHsf_O95DY6ZqauF6CwhOnFsPuaZywCH4dTD9GLrrNrThq8o6PBWcpHmAiqFnk6nuCIRqDegChUC4jxyOiej7i4F3Z4y4_kdpR0jSiH4a-QU1Cn0GmhyA0O8d08CdoBs_CIlFDuM2Xyyc",
// //   },
// //   {
// //     title: "Minimalist Desk Lamp",
// //     price: 89,
// //     details: "Material: Brushed Aluminum",
// //     image:
// //       "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFstrEha0CGACCJ5_ffwcZJZmrs3to_wQhRQ9fTaDygtlwYXi7HoithmvNJH2lbP3PO3XDWQ2D6p8iC1R3iXqWhCZ8ltKLykHCia72hZFwS7jyupfURXi1hyIiPUv36HadYmSNLc_CFfev79m9tEpX7M6MwHsZPmzf7pVFwjo97uFpPYm-_JI72jZ9cN0OmPlwsAAOy-BQIkUcUTtI5O7Lku9KvkOpCT0qbFQ4M_I0Z3Uc4Y30cd1ZyaG28kyrypZXhc8x5LmJeo",
// //   },
// // ];

// // // repeat 2 products → 10 items
// // const cartItems = Array.from({ length: 10 }, (_, i) => ({
// //   ...productsBase[i % 2],
// //   id: i,
// // }));

// // export default function AICommerceCart() {
// //   const [quantities, setQuantities] = useState(
// //     Object.fromEntries(cartItems.map(item => [item.id, 1]))
// //   );

// //   const updateQty = (id, delta) => {
// //     setQuantities(prev => ({
// //       ...prev,
// //       [id]: Math.max(1, prev[id] + delta),
// //     }));
// //   };

// //   return (
// //     <div className="bg-[#f6f7f8] min-h-screen px-6 py-10">
// //       <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
        
// //         {/* LEFT – CART ITEMS */}
// //         <div className="flex-1 flex flex-col gap-6">
// //           {cartItems.map(item => (
// //             <div
// //               key={item.id}
// //               className="glass-card rounded-xl p-6 flex gap-6 items-center shadow-sm"
// //             >
// //               <div
// //                 className="bg-cover bg-center size-32 rounded-lg border"
// //                 style={{ backgroundImage: `url(${item.image})` }}
// //               />

// //               <div className="flex-1 flex flex-col justify-between h-32">
// //                 <div>
// //                   <div className="flex justify-between">
// //                     <h3 className="text-xl font-bold">{item.title}</h3>
// //                     <span className="material-symbols-outlined text-gray-400">
// //                       delete
// //                     </span>
// //                   </div>
// //                   <p className="text-sm text-gray-500">{item.details}</p>
// //                 </div>

// //                 <div className="flex justify-between items-center">
// //                   <p className="text-xl font-black text-[#6cc0e4]">
// //                     ${item.price}.00
// //                   </p>

// //                   <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
// //                     <button onClick={() => updateQty(item.id, -1)}>
// //                       <span className="material-symbols-outlined">remove</span>
// //                     </button>
// //                     <span className="font-bold">
// //                       {quantities[item.id]}
// //                     </span>
// //                     <button onClick={() => updateQty(item.id, 1)}>
// //                       <span className="material-symbols-outlined">add</span>
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* RIGHT – SUMMARY (UNCHANGED UI) */}
// //         <div className="w-full lg:w-[400px]">
// //           <div className="glass-card rounded-xl p-8 shadow-xl sticky top-10">
// //             <h2 className="text-2xl font-black mb-6">Order Summary</h2>
// //             <div className="flex justify-between mb-4">
// //               <span>Subtotal</span>
// //               <span className="font-bold">$—</span>
// //             </div>
// //             <button className="w-full bg-[#6cc0e4] text-white py-4 rounded-full font-bold">
// //               Secure Checkout
// //             </button>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";

// const productsBase = [
//   {
//     title: "Premium Wireless Headphones",
//     price: 299,
//     details: "Size: One Size | Color: Midnight Blue",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuD5j0GQVJSYkYHyCDwzPB5TSgvsrrMtsdl1jB20BiRdu36oxO56ZQrlNKe1HmKmjLgZAIN1xVllOtP_t-8eSZRca7KW5rpy6sB3Gp03U_AjXVSaN9aJuzg3Juca_x5lx6PHsf_O95DY6ZqauF6CwhOnFsPuaZywCH4dTD9GLrrNrThq8o6PBWcpHmAiqFnk6nuCIRqDegChUC4jxyOiej7i4F3Z4y4_kdpR0jSiH4a-QU1Cn0GmhyA0O8d08CdoBs_CIlFDuM2Xyyc",
//   },
//   {
//     title: "Minimalist Desk Lamp",
//     price: 89,
//     details: "Material: Brushed Aluminum",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFstrEha0CGACCJ5_ffwcZJZmrs3to_wQhRQ9fTaDygtlwYXi7HoithmvNJH2lbP3PO3XDWQ2D6p8iC1R3iXqWhCZ8ltKLykHCia72hZFwS7jyupfURXi1hyIiPUv36HadYmSNLc_CFfev79m9tEpX7M6MwHsZPmzf7pVFwjo97uFpPYm-_JI72jZ9cN0OmPlwsAAOy-BQIkUcUTtI5O7Lku9KvkOpCT0qbFQ4M_I0Z3Uc4Y30cd1ZyaG28kyrypZXhc8x5LmJeo",
//   },
// ];

// // repeat 2 products → 10 items
// const initialItems = Array.from({ length: 10 }, (_, i) => ({
//   ...productsBase[i % 2],
//   id: i,
// }));

// export default function AICommerceCart() {
//   const [items, setItems] = useState(initialItems);
//   const [quantities, setQuantities] = useState(
//     Object.fromEntries(initialItems.map(item => [item.id, 1]))
//   );

//   const updateQty = (id, delta) => {
//     setQuantities(prev => ({
//       ...prev,
//       [id]: Math.max(1, prev[id] + delta),
//     }));
//   };

//   const deleteItem = id => {
//     alert("Item removed from cart");
//     setItems(prev => prev.filter(item => item.id !== id));
//   };

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * (quantities[item.id] || 1),
//     0
//   );

//   return (
//     <div className="bg-[#f6f7f8] min-h-screen px-6 py-10">
//       <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">

//         {/* LEFT – CART ITEMS */}
//         <div className="flex-1 flex flex-col gap-6">
//           {items.map(item => (
//             <div
//               key={item.id}
//               className="glass-card rounded-xl p-6 flex gap-6 items-center shadow-sm"
//             >
//               <div
//                 className="bg-cover bg-center size-32 rounded-lg border"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />

//               <div className="flex-1 flex flex-col justify-between h-32">
//                 <div>
//                   <div className="flex justify-between">
//                     <h3 className="text-xl font-bold">{item.title}</h3>
//                     <button
//                       onClick={() => deleteItem(item.id)}
//                       className="material-symbols-outlined text-gray-400 hover:text-red-500"
//                     >
//                       delete
//                     </button>
//                   </div>
//                   <p className="text-sm text-gray-500">{item.details}</p>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <p className="text-xl font-black text-[#6cc0e4]">
//                     ${item.price}.00
//                   </p>

//                   <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
//                     <button
//                       onClick={() => {
//                         updateQty(item.id, -1);
//                         alert("Quantity updated");
//                       }}
//                     >
//                       <span className="material-symbols-outlined">remove</span>
//                     </button>

//                     <span className="font-bold">
//                       {quantities[item.id]}
//                     </span>

//                     <button
//                       onClick={() => {
//                         updateQty(item.id, 1);
//                         alert("Quantity updated");
//                       }}
//                     >
//                       <span className="material-symbols-outlined">add</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT – SUMMARY */}
//         <div className="w-full lg:w-[400px]">
//           <div className="glass-card rounded-xl p-8 shadow-xl sticky top-10">
//             <h2 className="text-2xl font-black mb-6">Order Summary</h2>

//             <div className="flex justify-between mb-6">
//               <span>Subtotal</span>
//               <span className="font-bold">${subtotal.toFixed(2)}</span>
//             </div>

//             <button
//               onClick={() => alert("Proceed to checkout")}
//               className="w-full bg-[#6cc0e4] text-white py-4 rounded-full font-bold"
//             >
//               Secure Checkout
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productsBase = [
  {
    title: "Premium Wireless Headphones",
    price: 299,
    details: "Size: One Size | Color: Midnight Blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5j0GQVJSYkYHyCDwzPB5TSgvsrrMtsdl1jB20BiRdu36oxO56ZQrlNKe1HmKmjLgZAIN1xVllOtP_t-8eSZRca7KW5rpy6sB3Gp03U_AjXVSaN9aJuzg3Juca_x5lx6PHsf_O95DY6ZqauF6CwhOnFsPuaZywCH4dTD9GLrrNrThq8o6PBWcpHmAiqFnk6nuCIRqDegChUC4jxyOiej7i4F3Z4y4_kdpR0jSiH4a-QU1Cn0GmhyA0O8d08CdoBs_CIlFDuM2Xyyc",
  },
  {
    title: "Minimalist Desk Lamp",
    price: 89,
    details: "Material: Brushed Aluminum",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsFstrEha0CGACCJ5_ffwcZJZmrs3to_wQhRQ9fTaDygtlwYXi7HoithmvNJH2lbP3PO3XDWQ2D6p8iC1R3iXqWhCZ8ltKLykHCia72hZFwS7jyupfURXi1hyIiPUv36HadYmSNLc_CFfev79m9tEpX7M6MwHsZPmzf7pVFwjo97uFpPYm-_JI72jZ9cN0OmPlwsAAOy-BQIkUcUTtI5O7Lku9KvkOpCT0qbFQ4M_I0Z3Uc4Y30cd1ZyaG28kyrypZXhc8x5LmJeo",
  },
];

// repeat → 10 items
const initialItems = Array.from({ length: 10 }, (_, i) => ({
  ...productsBase[i % 2],
  id: i,
}));

export default function AICommerceCart() {
   const navigate = useNavigate(); // ✅ hook inside component

  // Separate function to navigate
  const goToCelebrations = () => {
    navigate("/celebration");
  };

  // Handler for button click
  const handleCheckout = () => {
    alert("Proceed to checkout"); // first show alert
    goToCelebrations();           // then navigate
  };

  const [items, setItems] = useState(initialItems);
  const [quantities, setQuantities] = useState(
    Object.fromEntries(initialItems.map(item => [item.id, 1]))
  );

  const updateQty = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, prev[id] + delta),
    }));
  };

  const deleteItem = id => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  return (
    <div className="bg-[#f6f7f8] min-h-screen px-6 py-10">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">

        {/* LEFT – CART ITEMS */}
        <div className="flex-1 flex flex-col gap-6">
          {items.map(item => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-6 flex gap-6 items-center shadow-sm"
            >
              <div
              onClick={() => navigate("/product-journey")}
                className="bg-cover bg-center size-32 rounded-lg border"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              <div className="flex-1 flex flex-col justify-between h-32">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="material-symbols-outlined text-gray-400 hover:text-red-500"
                    >
                      delete
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">{item.details}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-black text-[#6cc0e4]">
                    ${item.price}.00
                  </p>

                  <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2 py-1">
                    <button onClick={() => updateQty(item.id, -1)}>
                      <span className="material-symbols-outlined">remove</span>
                    </button>

                    <span className="font-bold">
                      {quantities[item.id]}
                    </span>

                    <button onClick={() => updateQty(item.id, 1)}>
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="w-full lg:w-[400px]">
          <div className="glass-card rounded-xl p-8 shadow-xl sticky top-10">
            <h2 className="text-2xl font-black mb-6">Order Summary</h2>

            <div className="flex justify-between mb-6">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>

              <button
      onClick={handleCheckout} // attach click handler
      className="w-full bg-[#6cc0e4] text-white py-4 rounded-full font-bold"
    >
      Secure Checkout
    </button>
          </div>
        </div>

      </div>
    </div>
  );
}
