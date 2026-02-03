// // // import React from 'react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// // // const OrderSuccessTracking = () => {
// // //   return (
// // //     <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-['Inter',sans-serif] text-[#0f171a] dark:text-white transition-colors duration-300 min-h-screen">
// // //       {/* Dynamic Style Injection for Custom Effects */}
// // //       <style>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
// // //         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

// // //         .glass-card {
// // //             background: rgba(255, 255, 255, 0.7);
// // //             backdrop-filter: blur(12px);
// // //             border: 1px solid rgba(255, 255, 255, 0.3);
// // //         }
// // //         .dark .glass-card {
// // //             background: rgba(18, 28, 32, 0.7);
// // //             border: 1px solid rgba(255, 255, 255, 0.05);
// // //         }
// // //         .success-glow {
// // //             box-shadow: 0 0 50px 10px rgba(108, 192, 228, 0.2);
// // //         }
// // //         .tracking-line-dashed {
// // //             background-image: linear-gradient(to right, #6cc0e4 50%, transparent 50%);
// // //             background-size: 10px 2px;
// // //             background-repeat: repeat-x;
// // //         }
// // //       `}</style>

 
// // //       {/* Main Content */}
// // //       <main className="xl:px-40 lg:px-20 px-4 pb-20">
// // //         <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          
// // //           {/* Success Hero Section */}
// // //           <div className="flex flex-col items-center py-12">
// // //             <div className="relative mb-6">
// // //               <div className="absolute inset-0 bg-[#6cc0e4]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
// // //               <div className="relative bg-white dark:bg-[#121c20] rounded-full p-6 shadow-xl border border-[#6cc0e4]/10 flex items-center justify-center success-glow">
// // //                 <span className="material-symbols-outlined text-[#6cc0e4] text-6xl">check_circle</span>
// // //               </div>
// // //             </div>
// // //             <h1 className="text-[#0f171a] dark:text-white tracking-light text-[32px] md:text-[42px] font-bold leading-tight text-center pb-3">
// // //               Success! Your order is on its way.
// // //             </h1>
// // //             <p className="text-[#538093] dark:text-gray-400 text-base font-normal leading-normal text-center max-w-lg">
// // //               Order #AI-8829104 • We've sent a confirmation email to you. Our AI is currently optimizing the fastest delivery route for your package.
// // //             </p>
// // //           </div>

// // //           {/* Content Area: Glassmorphic Cards */}
// // //           <div className="w-full space-y-8">
            
// // //             {/* Order Status Tracking */}
// // //             <div className="glass-card rounded-xl p-8 shadow-sm">
// // //               <div className="flex items-center justify-between mb-8">
// // //                 <h2 className="text-[#0f171a] dark:text-white text-xl font-bold">Track Shipment</h2>
// // //                 <span className="px-4 py-1 bg-[#6cc0e4]/10 text-[#6cc0e4] text-xs font-bold rounded-full uppercase tracking-wider">In Transit</span>
// // //               </div>
              
// // //               <div className="grid grid-cols-4 items-start w-full relative">
// // //                 {/* Step 1 */}
// // //                 <div className="flex flex-col items-center gap-2 group z-10">
// // //                   <div className="bg-[#6cc0e4] text-white rounded-full p-2 flex items-center justify-center shadow-lg shadow-[#6cc0e4]/30">
// // //                     <span className="material-symbols-outlined text-lg">check</span>
// // //                   </div>
// // //                   <div className="hidden md:flex flex-col items-center mt-2">
// // //                     <p className="text-xs font-bold text-[#0f171a] dark:text-white">Ordered</p>
// // //                     <p className="text-[10px] text-[#538093]">Oct 24, 10:30 AM</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Step 2 */}
// // //                 <div className="flex flex-col items-center gap-2 z-10">
// // //                   <div className="bg-[#6cc0e4] text-white rounded-full p-2 flex items-center justify-center shadow-lg shadow-[#6cc0e4]/30">
// // //                     <span className="material-symbols-outlined text-lg">settings</span>
// // //                   </div>
// // //                   <div className="hidden md:flex flex-col items-center mt-2">
// // //                     <p className="text-xs font-bold text-[#0f171a] dark:text-white">Processing</p>
// // //                     <p className="text-[10px] text-[#538093]">Oct 24, 02:15 PM</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Step 3 (Active) */}
// // //                 <div className="flex flex-col items-center gap-2 z-10">
// // //                   <div className="bg-white dark:bg-gray-800 border-2 border-[#6cc0e4] text-[#6cc0e4] rounded-full p-2 flex items-center justify-center animate-pulse">
// // //                     <span className="material-symbols-outlined text-lg">local_shipping</span>
// // //                   </div>
// // //                   <div className="hidden md:flex flex-col items-center mt-2">
// // //                     <p className="text-xs font-bold text-[#6cc0e4]">Shipped</p>
// // //                     <p className="text-[10px] text-[#538093]">Est. Oct 26</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Step 4 */}
// // //                 <div className="flex flex-col items-center gap-2 z-10">
// // //                   <div className="bg-[#d1dfe5] dark:bg-gray-700 text-white rounded-full p-2 flex items-center justify-center">
// // //                     <span className="material-symbols-outlined text-lg">inventory_2</span>
// // //                   </div>
// // //                   <div className="hidden md:flex flex-col items-center mt-2">
// // //                     <p className="text-xs font-bold text-[#538093]">Delivered</p>
// // //                     <p className="text-[10px] text-[#538093]">Est. Oct 28</p>
// // //                   </div>
// // //                 </div>

// // //                 {/* Progress Lines (Desktop) */}
// // //                 <div className="absolute top-5 left-0 w-full hidden md:flex items-center px-[12.5%]">
// // //                     <div className="h-[2px] w-1/3 bg-[#6cc0e4]"></div>
// // //                     <div className="h-[2px] w-1/3 tracking-line-dashed"></div>
// // //                     <div className="h-[2px] w-1/3 bg-[#d1dfe5] dark:bg-gray-700"></div>
// // //                 </div>
// // //               </div>

// // //               {/* Mobile Timeline Display */}
// // //               <div className="md:hidden mt-6 border-l-2 border-[#6cc0e4] ml-4 pl-4 space-y-4">
// // //                 <p className="text-sm font-medium text-[#6cc0e4]">Oct 25: Package has arrived at the sorting facility.</p>
// // //               </div>
// // //             </div>

// // //             {/* Order Summary & Details Grid */}
// // //             <div className="grid md:grid-cols-2 gap-8">
              
// // //               {/* Left Column: Items */}
// // //               <div className="glass-card rounded-xl p-6 shadow-sm flex flex-col">
// // //                 <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
// // //                   <span className="material-symbols-outlined text-[#6cc0e4]">shopping_bag</span>
// // //                   Items Summary
// // //                 </h3>
// // //                 <div className="space-y-6 flex-1">
// // //                   {/* Product 1 */}
// // //                   <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Luxe SmartWatch Series X</h4>
// // //                       <p className="text-xs text-[#538093]">Midnight Gray • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$349.00</p>
// // //                   </div>
// // //                   {/* Product 2 */}
// // //                   <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9JYibZKiNrxJz3wkvR1kw5eZ4dBfqObgLQNpfHjxSbtMAQ26GoDg0fCrCWgGFTAKhdHcT9q5QtGV9RQCeNx1nBeag3_fQMYWt7F4STACjil8mD591DGpBXyXeoqX4R9700Iga8SrBRVXOD-1noBungOzcIzerne6ggUaamxpZTgOCxk28T3O_hKJlv2wgXC5oD6nHx5z5rDcN6w_Ypj5xd-iwN8TwLcIHd-fW_dZM7bbJHILctDvn0O5PcB7iinec-UYfmL9eYnI")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Sonic Pro Headphones</h4>
// // //                       <p className="text-xs text-[#538093]">Alpine White • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$199.00</p>
// // //                   </div>
// // //                     <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Luxe SmartWatch Series X</h4>
// // //                       <p className="text-xs text-[#538093]">Midnight Gray • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$349.00</p>
// // //                   </div>
// // //                   {/* Product 2 */}
// // //                   <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9JYibZKiNrxJz3wkvR1kw5eZ4dBfqObgLQNpfHjxSbtMAQ26GoDg0fCrCWgGFTAKhdHcT9q5QtGV9RQCeNx1nBeag3_fQMYWt7F4STACjil8mD591DGpBXyXeoqX4R9700Iga8SrBRVXOD-1noBungOzcIzerne6ggUaamxpZTgOCxk28T3O_hKJlv2wgXC5oD6nHx5z5rDcN6w_Ypj5xd-iwN8TwLcIHd-fW_dZM7bbJHILctDvn0O5PcB7iinec-UYfmL9eYnI")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Sonic Pro Headphones</h4>
// // //                       <p className="text-xs text-[#538093]">Alpine White • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$199.00</p>
// // //                   </div>
// // //                     <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Luxe SmartWatch Series X</h4>
// // //                       <p className="text-xs text-[#538093]">Midnight Gray • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$349.00</p>
// // //                   </div>
// // //                   {/* Product 2 */}
// // //                   <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9JYibZKiNrxJz3wkvR1kw5eZ4dBfqObgLQNpfHjxSbtMAQ26GoDg0fCrCWgGFTAKhdHcT9q5QtGV9RQCeNx1nBeag3_fQMYWt7F4STACjil8mD591DGpBXyXeoqX4R9700Iga8SrBRVXOD-1noBungOzcIzerne6ggUaamxpZTgOCxk28T3O_hKJlv2wgXC5oD6nHx5z5rDcN6w_Ypj5xd-iwN8TwLcIHd-fW_dZM7bbJHILctDvn0O5PcB7iinec-UYfmL9eYnI")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Sonic Pro Headphones</h4>
// // //                       <p className="text-xs text-[#538093]">Alpine White • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$199.00</p>
// // //                   </div>
// // //                     <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Luxe SmartWatch Series X</h4>
// // //                       <p className="text-xs text-[#538093]">Midnight Gray • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$349.00</p>
// // //                   </div>
// // //                   {/* Product 2 */}
// // //                   <div className="flex items-center gap-4">
// // //                     <div 
// // //                       className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5" 
// // //                       style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9JYibZKiNrxJz3wkvR1kw5eZ4dBfqObgLQNpfHjxSbtMAQ26GoDg0fCrCWgGFTAKhdHcT9q5QtGV9RQCeNx1nBeag3_fQMYWt7F4STACjil8mD591DGpBXyXeoqX4R9700Iga8SrBRVXOD-1noBungOzcIzerne6ggUaamxpZTgOCxk28T3O_hKJlv2wgXC5oD6nHx5z5rDcN6w_Ypj5xd-iwN8TwLcIHd-fW_dZM7bbJHILctDvn0O5PcB7iinec-UYfmL9eYnI")' }}
// // //                     ></div>
// // //                     <div className="flex-1">
// // //                       <h4 className="text-sm font-semibold">Sonic Pro Headphones</h4>
// // //                       <p className="text-xs text-[#538093]">Alpine White • Qty 1</p>
// // //                     </div>
// // //                     <p className="text-sm font-bold">$199.00</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 space-y-2">
// // //                   <div className="flex justify-between text-sm">
// // //                     <span className="text-[#538093]">Subtotal</span>
// // //                     <span>$548.00</span>
// // //                   </div>
// // //                   <div className="flex justify-between text-sm">
// // //                     <span className="text-[#538093]">Shipping</span>
// // //                     <span className="text-green-500 font-medium">Free</span>
// // //                   </div>
// // //                   <div className="flex justify-between text-lg font-bold mt-4">
// // //                     <span>Total Paid</span>
// // //                     <span className="text-[#6cc0e4]">$548.00</span>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Right Column: Shipping & Actions */}
// // //               <div className="flex flex-col gap-8 sticky top-24 self-start">
// // //                 <div className="glass-card rounded-xl p-6 shadow-sm">
// // //                   <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
// // //                     <span className="material-symbols-outlined text-[#6cc0e4]">distance</span>
// // //                     Shipping Address
// // //                   </h3>
// // //                   <div className="text-sm leading-relaxed text-[#538093]">
// // //                     <p className="font-bold text-[#0f171a] dark:text-white">Johnathan Doe</p>
// // //                     <p>1248 Innovation Drive, Suite 100</p>
// // //                     <p>Palo Alto, CA 94304</p>
// // //                     <p>United States</p>
// // //                   </div>
// // //                   <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6cc0e4]">
// // //                     <span className="material-symbols-outlined text-sm">info</span>
// // //                     Estimated Delivery: Oct 28 - Oct 30
// // //                   </div>
// // //                 </div>

// // //                 {/* Action Buttons */}
// // //                 <div className="flex flex-col gap-4">
// // //                   <button className="w-full bg-[#6cc0e4] hover:bg-[#6cc0e4]/90 text-white font-bold py-4 rounded-full shadow-lg shadow-[#6cc0e4]/25 transition-all flex items-center justify-center gap-2">
// // //                     <span className="material-symbols-outlined">map</span>
// // //                     Track Order Details
// // //                   </button>
// // //                   <button className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0f171a] dark:text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2">
// // //                     <span className="material-symbols-outlined">arrow_back</span>
// // //                     Continue Shopping
// // //                   </button>
// // //                 </div>
                
// // //                 <div className="text-center">
// // //                   <a className="text-xs text-[#538093] hover:text-[#6cc0e4] transition-colors underline underline-offset-4" href="#">
// // //                     Need help with your order? Contact Support
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

  
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default OrderSuccessTracking;

// // import React, { useState } from 'react';

// // const PRODUCT_IMAGE =
// //   'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE';

// // const orders = [
// //   {
// //     id: 1,
// //     name: 'Luxe SmartWatch Series X',
// //     status: 'Ordered',
// //     badge: 'Ordered',
// //     address: {
// //       name: 'Johnathan Doe',
// //       line1: '1248 Innovation Drive',
// //       city: 'Palo Alto, CA 94304',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 2,
// //     name: 'Sonic Pro Headphones',
// //     status: 'Processing',
// //     badge: 'Processing',
// //     address: {
// //       name: 'Emma Watson',
// //       line1: '88 Market Street',
// //       city: 'San Francisco, CA 94103',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 3,
// //     name: 'Wireless Charging Pad',
// //     status: 'Shipped',
// //     badge: 'In Transit',
// //     address: {
// //       name: 'Alex Turner',
// //       line1: '402 Sunset Blvd',
// //       city: 'Los Angeles, CA 90028',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 4,
// //     name: 'Smart Home Plug',
// //     status: 'Out for Delivery',
// //     badge: 'Out for Delivery',
// //     address: {
// //       name: 'Sarah Lee',
// //       line1: '19 Baker Street',
// //       city: 'New York, NY 10012',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 5,
// //     name: 'Bluetooth Speaker',
// //     status: 'Delivered',
// //     badge: 'Delivered',
// //     address: {
// //       name: 'Michael Scott',
// //       line1: '1725 Slough Ave',
// //       city: 'Scranton, PA 18505',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 6,
// //     name: 'Laptop Stand',
// //     status: 'Shipped',
// //     badge: 'In Transit',
// //     address: {
// //       name: 'Pam Beesly',
// //       line1: '401 Paper Rd',
// //       city: 'Scranton, PA 18505',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 7,
// //     name: 'Noise Cancelling Earbuds',
// //     status: 'Processing',
// //     badge: 'Processing',
// //     address: {
// //       name: 'Jim Halpert',
// //       line1: '78 Office Park',
// //       city: 'Stamford, CT 06901',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 8,
// //     name: 'Portable Power Bank',
// //     status: 'Ordered',
// //     badge: 'Ordered',
// //     address: {
// //       name: 'Dwight Schrute',
// //       line1: 'Schrute Farms',
// //       city: 'Honesdale, PA 18431',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 9,
// //     name: 'USB-C Fast Cable',
// //     status: 'Delivered',
// //     badge: 'Delivered',
// //     address: {
// //       name: 'Andy Bernard',
// //       line1: '12 Cornell Way',
// //       city: 'Ithaca, NY 14850',
// //       country: 'United States',
// //     },
// //   },
// //   {
// //     id: 10,
// //     name: 'Smart RGB Light Strip',
// //     status: 'Out for Delivery',
// //     badge: 'Out for Delivery',
// //     address: {
// //       name: 'Kelly Kapoor',
// //       line1: '55 Fashion Ave',
// //       city: 'New York, NY 10018',
// //       country: 'United States',
// //     },
// //   },
// // ];

// // const OrderSuccessTracking = () => {
// //   const [activeOrder, setActiveOrder] = useState(orders[0]);

// //   return (
// //     <div className="bg-[#f6f7f8] dark:bg-[#121c20] min-h-screen px-4 lg:px-20 xl:px-40">
// //       <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-8 py-12">

// //         {/* LEFT — ITEMS */}
// //         <div className="glass-card rounded-xl p-6">
// //           <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
// //             <span className="material-symbols-outlined text-[#6cc0e4]">
// //               shopping_bag
// //             </span>
// //             Items Summary
// //           </h3>

// //           <div className="space-y-6">
// //             {orders.map((order) => (
// //               <div
// //                 key={order.id}
// //                 onClick={() => setActiveOrder(order)}
// //                 className={`flex items-center gap-4 cursor-pointer rounded-lg p-2 transition ${
// //                   activeOrder.id === order.id
// //                     ? 'bg-[#6cc0e4]/10'
// //                     : 'hover:bg-black/5'
// //                 }`}
// //               >
// //                 <div
// //                   className="size-16 rounded-lg bg-cover bg-center"
// //                   style={{ backgroundImage: `url(${PRODUCT_IMAGE})` }}
// //                 />
// //                 <div className="flex-1">
// //                   <h4 className="text-sm font-semibold">{order.name}</h4>
// //                   <p className="text-xs text-[#538093]">{order.status}</p>
// //                 </div>
// //                 <span className="text-xs font-bold text-[#6cc0e4]">
// //                   View
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT — STICKY DETAILS */}
// //         <div className="flex flex-col gap-8 sticky top-24 self-start">
// //           <div className="glass-card rounded-xl p-6">
// //             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
// //               <span className="material-symbols-outlined text-[#6cc0e4]">
// //                 distance
// //               </span>
// //               Shipping Address
// //             </h3>

// //             <div className="text-sm leading-relaxed text-[#538093]">
// //               <p className="font-bold text-[#0f171a] dark:text-white">
// //                 {activeOrder.address.name}
// //               </p>
// //               <p>{activeOrder.address.line1}</p>
// //               <p>{activeOrder.address.city}</p>
// //               <p>{activeOrder.address.country}</p>
// //             </div>

// //             <div className="mt-6 text-xs font-medium text-[#6cc0e4]">
// //               Status: {activeOrder.badge}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderSuccessTracking;



// import React, { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: "Luxe SmartWatch Series X",
//     variant: "Midnight Gray • Qty 1",
//     price: "$349.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Ordered",
//     timeline: [
//       { step: "Ordered", date: "Feb 1, 09:00 AM" },
//       { step: "Processing", date: "Feb 2, 11:00 AM" },
//       { step: "Shipped", date: "Est. Feb 5" },
//       { step: "Delivered", date: "Est. Feb 8" },
//     ],
//     address: {
//       name: "Johnathan Doe",
//       street: "1248 Innovation Drive, Suite 100",
//       city: "Palo Alto, CA 94304",
//       country: "United States",
//       deliveryEst: "Feb 8 - Feb 10"
//     }
//   },
//   {
//     id: 2,
//     name: "Sonic Pro Headphones",
//     variant: "Alpine White • Qty 1",
//     price: "$199.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Processing",
//     timeline: [
//       { step: "Ordered", date: "Jan 28, 10:00 AM" },
//       { step: "Processing", date: "Jan 29, 03:00 PM" },
//       { step: "Shipped", date: "Est. Feb 2" },
//       { step: "Delivered", date: "Est. Feb 6" },
//     ],
//     address: {
//       name: "Alice Johnson",
//       street: "221B Baker Street",
//       city: "London, UK",
//       country: "United Kingdom",
//       deliveryEst: "Feb 6 - Feb 8"
//     }
//   },
//   {
//     id: 3,
//     name: "Gaming Laptop Pro 17",
//     variant: "Black Edition • Qty 1",
//     price: "$1,499.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Shipped",
//     timeline: [
//       { step: "Ordered", date: "Jan 15, 08:00 AM" },
//       { step: "Processing", date: "Jan 16, 02:00 PM" },
//       { step: "Shipped", date: "Est. Jan 20" },
//       { step: "Delivered", date: "Est. Jan 23" },
//     ],
//     address: {
//       name: "Robert Smith",
//       street: "500 Tech Avenue",
//       city: "San Francisco, CA 94107",
//       country: "United States",
//       deliveryEst: "Jan 23 - Jan 25"
//     }
//   },
//   {
//     id: 4,
//     name: "Ultra HD 4K Monitor",
//     variant: "27-inch • Qty 1",
//     price: "$399.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Delivered",
//     timeline: [
//       { step: "Ordered", date: "Feb 1, 10:00 AM" },
//       { step: "Processing", date: "Feb 2, 01:00 PM" },
//       { step: "Shipped", date: "Feb 3" },
//       { step: "Delivered", date: "Feb 4" },
//     ],
//     address: {
//       name: "Emily Clark",
//       street: "88 Innovation Road",
//       city: "New York, NY 10001",
//       country: "United States",
//       deliveryEst: "Feb 4 - Feb 6"
//     }
//   },
//   {
//     id: 5,
//     name: "Wireless Gaming Mouse",
//     variant: "RGB Edition • Qty 1",
//     price: "$89.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Processing",
//     timeline: [
//       { step: "Ordered", date: "Feb 3, 02:00 PM" },
//       { step: "Processing", date: "Feb 4, 11:00 AM" },
//       { step: "Shipped", date: "Est. Feb 6" },
//       { step: "Delivered", date: "Est. Feb 9" },
//     ],
//     address: {
//       name: "Michael Brown",
//       street: "742 Evergreen Terrace",
//       city: "Springfield, IL 62704",
//       country: "United States",
//       deliveryEst: "Feb 9 - Feb 11"
//     }
//   },
//   {
//     id: 6,
//     name: "Smart Home Hub",
//     variant: "Voice Control • Qty 1",
//     price: "$129.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
//     status: "Ordered",
//     timeline: [
//       { step: "Ordered", date: "Feb 2, 12:00 PM" },
//       { step: "Processing", date: "Feb 3, 09:00 AM" },
//       { step: "Shipped", date: "Est. Feb 7" },
//       { step: "Delivered", date: "Est. Feb 10" },
//     ],
//     address: {
//       name: "Sophia Lee",
//       street: "12 Maple Street",
//       city: "Toronto, ON M5V 2T6",
//       country: "Canada",
//       deliveryEst: "Feb 10 - Feb 12"
//     }
//   },
// ];


// const OrderSuccessTracking = () => {
//   const [selectedProduct, setSelectedProduct] = useState(products[0]);

//   return (
//     <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-['Inter',sans-serif] text-[#0f171a] dark:text-white transition-colors duration-300 min-h-screen">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
//         .glass-card {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//         .dark .glass-card {
//           background: rgba(18, 28, 32, 0.7);
//           border: 1px solid rgba(255, 255, 255, 0.05);
//         }
//         .success-glow {
//           box-shadow: 0 0 50px 10px rgba(108, 192, 228, 0.2);
//         }
//         .tracking-line-dashed {
//           background-image: linear-gradient(to right, #6cc0e4 50%, transparent 50%);
//           background-size: 10px 2px;
//           background-repeat: repeat-x;
//         }
//       `}</style>

//       <main className="xl:px-40 lg:px-20 px-4 pb-20">
//         <div className="max-w-[1500px] mx-auto flex flex-col items-center">
//           {/* Hero */}
//           <div className="flex flex-col items-center py-12">
//             <div className="relative mb-6">
//               <div className="absolute inset-0 bg-[#6cc0e4]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
//               <div className="relative bg-white dark:bg-[#121c20] rounded-full p-6 shadow-xl border border-[#6cc0e4]/10 flex items-center justify-center success-glow">
//                 <span className="material-symbols-outlined text-[#6cc0e4] text-6xl">check_circle</span>
//               </div>
//             </div>
//             <h1 className="text-[#0f171a] dark:text-white tracking-light text-[32px] md:text-[42px] font-bold leading-tight text-center pb-3">
//               Success! Your order is on its way.
//             </h1>
//             <p className="text-[#538093] dark:text-gray-400 text-base font-normal leading-normal text-center max-w-lg">
//               Order #{selectedProduct.id} • Confirmation email sent. Track your delivery below.
//             </p>
//           </div>

//           {/* Content Area */}
//           <div className="w-full space-y-8">
//             {/* Order Status Tracking */}
//             <div className="glass-card rounded-xl p-8 shadow-sm">
//               <div className="flex items-center justify-between mb-8">
//                 <h2 className="text-[#0f171a] dark:text-white text-xl font-bold">Track Shipment</h2>
//                 <span className="px-4 py-1 bg-[#6cc0e4]/10 text-[#6cc0e4] text-xs font-bold rounded-full uppercase tracking-wider">
//                   {selectedProduct.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-4 items-start w-full relative">
//                 {selectedProduct.timeline.map((step, idx) => (
//                   <div key={idx} className="flex flex-col items-center gap-2 z-10">
//                     <div className={`rounded-full p-2 flex items-center justify-center ${idx < selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
//                       ? "bg-[#6cc0e4] text-white shadow-lg shadow-[#6cc0e4]/30"
//                       : idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
//                         ? "bg-white dark:bg-gray-800 border-2 border-[#6cc0e4] text-[#6cc0e4] animate-pulse"
//                         : "bg-[#d1dfe5] dark:bg-gray-700 text-white"
//                     }`}>
//                       <span className="material-symbols-outlined text-lg">
//                         {idx < selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
//                           ? "check"
//                           : idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
//                             ? "local_shipping"
//                             : "inventory_2"
//                         }
//                       </span>
//                     </div>
//                     <div className="hidden md:flex flex-col items-center mt-2">
//                       <p className={`text-xs font-bold ${idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status) ? "text-[#6cc0e4]" : "text-[#0f171a] dark:text-white"}`}>{step.step}</p>
//                       <p className="text-[10px] text-[#538093]">{step.date}</p>
//                     </div>
//                   </div>
//                 ))}
//                 {/* Progress Lines */}
//                 <div className="absolute top-5 left-0 w-full hidden md:flex items-center px-[12.5%]">
//                   <div className="h-[2px] w-1/3 bg-[#6cc0e4]"></div>
//                   <div className="h-[2px] w-1/3 tracking-line-dashed"></div>
//                   <div className="h-[2px] w-1/3 bg-[#d1dfe5] dark:bg-gray-700"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Order Summary & Details Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Left Column: Items */}
//               <div className="glass-card rounded-xl p-6 shadow-sm flex flex-col">
//                 <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
//                   <span className="material-symbols-outlined text-[#6cc0e4]">shopping_bag</span>
//                   Items Summary
//                 </h3>
//                 <div className="space-y-6 flex-1">
//                   {products.map((prod) => (
//                     <div
//                       key={prod.id}
//                       className="flex items-center gap-4 cursor-pointer hover:bg-[#6cc0e4]/10 p-2 rounded-lg transition-colors"
//                       onClick={() => setSelectedProduct(prod)}
//                     >
//                       <div
//                         className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5"
//                         style={{ backgroundImage: `url("${prod.image}")` }}
//                       ></div>
//                       <div className="flex-1">
//                         <h4 className="text-sm font-semibold">{prod.name}</h4>
//                         <p className="text-xs text-[#538093]">{prod.variant}</p>
//                       </div>
//                       <p className="text-sm font-bold">{prod.price}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Right Column: Shipping & Actions */}
//               <div className="flex flex-col gap-8 sticky top-24 self-start">
//                 <div className="glass-card rounded-xl p-6 shadow-sm">
//                   <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
//                     <span className="material-symbols-outlined text-[#6cc0e4]">distance</span>
//                     Shipping Address
//                   </h3>
//                   <div className="text-sm leading-relaxed text-[#538093]">
//                     <p className="font-bold text-[#0f171a] dark:text-white">{selectedProduct.address.name}</p>
//                     <p>{selectedProduct.address.street}</p>
//                     <p>{selectedProduct.address.city}</p>
//                     <p>{selectedProduct.address.country}</p>
//                   </div>
//                   <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6cc0e4]">
//                     <span className="material-symbols-outlined text-sm">info</span>
//                     Estimated Delivery: {selectedProduct.address.deliveryEst}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col gap-4">
//                   <button className="w-full bg-[#6cc0e4] hover:bg-[#6cc0e4]/90 text-white font-bold py-4 rounded-full shadow-lg shadow-[#6cc0e4]/25 transition-all flex items-center justify-center gap-2">
//                     <span className="material-symbols-outlined">map</span>
//                     Track Order Details
//                   </button>
//                   <button className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0f171a] dark:text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2">
//                     <span className="material-symbols-outlined">arrow_back</span>
//                     Continue Shopping
//                   </button>
//                 </div>

//                 <div className="text-center">
//                   <a className="text-xs text-[#538093] hover:text-[#6cc0e4] transition-colors underline underline-offset-4" href="#">
//                     Need help with your order? Contact Support
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OrderSuccessTracking;
const products = [
  {
    id: 1,
    name: "Luxe SmartWatch Series X",
    variant: "Midnight Gray • Qty 1",
    price: "$349.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Ordered",
    timeline: [
      { step: "Ordered", date: "Feb 1, 09:00 AM" },
      { step: "Processing", date: "Feb 2, 11:00 AM" },
      { step: "Shipped", date: "Est. Feb 5" },
      { step: "Delivered", date: "Est. Feb 8" },
    ],
    address: {
      name: "Johnathan Doe",
      street: "1248 Innovation Drive, Suite 100",
      city: "Palo Alto, CA 94304",
      country: "United States",
      deliveryEst: "Feb 8 - Feb 10"
    }
  },
  {
    id: 2,
    name: "Sonic Pro Headphones",
    variant: "Alpine White • Qty 1",
    price: "$199.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Processing",
    timeline: [
      { step: "Ordered", date: "Jan 28, 10:00 AM" },
      { step: "Processing", date: "Jan 29, 03:00 PM" },
      { step: "Shipped", date: "Est. Feb 2" },
      { step: "Delivered", date: "Est. Feb 6" },
    ],
    address: {
      name: "Alice Johnson",
      street: "221B Baker Street",
      city: "London, UK",
      country: "United Kingdom",
      deliveryEst: "Feb 6 - Feb 8"
    }
  },
  {
    id: 3,
    name: "Gaming Laptop Pro 17",
    variant: "Black Edition • Qty 1",
    price: "$1,499.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Shipped",
    timeline: [
      { step: "Ordered", date: "Jan 15, 08:00 AM" },
      { step: "Processing", date: "Jan 16, 02:00 PM" },
      { step: "Shipped", date: "Est. Jan 20" },
      { step: "Delivered", date: "Est. Jan 23" },
    ],
    address: {
      name: "Robert Smith",
      street: "500 Tech Avenue",
      city: "San Francisco, CA 94107",
      country: "United States",
      deliveryEst: "Jan 23 - Jan 25"
    }
  },
  {
    id: 4,
    name: "Ultra HD 4K Monitor",
    variant: "27-inch • Qty 1",
    price: "$399.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Delivered",
    timeline: [
      { step: "Ordered", date: "Feb 1, 10:00 AM" },
      { step: "Processing", date: "Feb 2, 01:00 PM" },
      { step: "Shipped", date: "Feb 3" },
      { step: "Delivered", date: "Feb 4" },
    ],
    address: {
      name: "Emily Clark",
      street: "88 Innovation Road",
      city: "New York, NY 10001",
      country: "United States",
      deliveryEst: "Feb 4 - Feb 6"
    }
  },
  {
    id: 5,
    name: "Wireless Gaming Mouse",
    variant: "RGB Edition • Qty 1",
    price: "$89.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Processing",
    timeline: [
      { step: "Ordered", date: "Feb 3, 02:00 PM" },
      { step: "Processing", date: "Feb 4, 11:00 AM" },
      { step: "Shipped", date: "Est. Feb 6" },
      { step: "Delivered", date: "Est. Feb 9" },
    ],
    address: {
      name: "Michael Brown",
      street: "742 Evergreen Terrace",
      city: "Springfield, IL 62704",
      country: "United States",
      deliveryEst: "Feb 9 - Feb 11"
    }
  },
  {
    id: 6,
    name: "Smart Home Hub",
    variant: "Voice Control • Qty 1",
    price: "$129.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfI1IMGH5FDWMSBnQLiInAVs3YGGNpGuWEgwchse2MZv37Gx20OtVZsxeb0NxWNIfisyVHUpkoZ-vYvYTyepMWpZ1bwbOZnjFVBE6uqJIwEmhzG49rg7E3E0RWXL10vXi3E-UnKUHFeoJ96_XicfFZViVkjQ3udyTOk-1oyjhJI_UV231aVlKsjCtXoBwHBilrJKCKZwrq3XUSE6kfySewEd4xfrkCbSOwV_aQx5gdxAsShAej8LbS3YRH-tgUPkW5L8TC-z48jE",
    status: "Ordered",
    timeline: [
      { step: "Ordered", date: "Feb 2, 12:00 PM" },
      { step: "Processing", date: "Feb 3, 09:00 AM" },
      { step: "Shipped", date: "Est. Feb 7" },
      { step: "Delivered", date: "Est. Feb 10" },
    ],
    address: {
      name: "Sophia Lee",
      street: "12 Maple Street",
      city: "Toronto, ON M5V 2T6",
      country: "Canada",
      deliveryEst: "Feb 10 - Feb 12"
    }
  },
];
const OrderSuccessTracking = () => {  
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const navigate = useNavigate(); // for navigation

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#121c20] font-['Inter',sans-serif] text-[#0f171a] dark:text-white transition-colors duration-300 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .dark .glass-card {
          background: rgba(18, 28, 32, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .success-glow {
          box-shadow: 0 0 50px 10px rgba(108, 192, 228, 0.2);
        }
        .tracking-line-dashed {
          background-image: linear-gradient(to right, #6cc0e4 50%, transparent 50%);
          background-size: 10px 2px;
          background-repeat: repeat-x;
        }
      `}</style>

      <main className="xl:px-40 lg:px-20 px-4 pb-20">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          {/* Hero */}
          <div className="flex flex-col items-center py-12">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#6cc0e4]/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <div className="relative bg-white dark:bg-[#121c20] rounded-full p-6 shadow-xl border border-[#6cc0e4]/10 flex items-center justify-center success-glow">
                <span className="material-symbols-outlined text-[#6cc0e4] text-6xl">check_circle</span>
              </div>
            </div>
            <h1 className="text-[#0f171a] dark:text-white tracking-light text-[32px] md:text-[42px] font-bold leading-tight text-center pb-3">
              Success! Your order is on its way.
            </h1>
            <p className="text-[#538093] dark:text-gray-400 text-base font-normal leading-normal text-center max-w-lg">
              Order #{selectedProduct.id} • Confirmation email sent. Track your delivery below.
            </p>
          </div>

          {/* Content Area */}
          <div className="w-full space-y-8">
            {/* Order Status Tracking */}
            <div className="glass-card rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[#0f171a] dark:text-white text-xl font-bold">Track Shipment</h2>
                <span className="px-4 py-1 bg-[#6cc0e4]/10 text-[#6cc0e4] text-xs font-bold rounded-full uppercase tracking-wider">
                  {selectedProduct.status}
                </span>
              </div>
              <div className="grid grid-cols-4 items-start w-full relative">
                {selectedProduct.timeline.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 z-10">
                    <div className={`rounded-full p-2 flex items-center justify-center ${idx < selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
                      ? "bg-[#6cc0e4] text-white shadow-lg shadow-[#6cc0e4]/30"
                      : idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
                        ? "bg-white dark:bg-gray-800 border-2 border-[#6cc0e4] text-[#6cc0e4] animate-pulse"
                        : "bg-[#d1dfe5] dark:bg-gray-700 text-white"
                    }`}>
                      <span className="material-symbols-outlined text-lg">
                        {idx < selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
                          ? "check"
                          : idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status)
                            ? "local_shipping"
                            : "inventory_2"
                        }
                      </span>
                    </div>
                    <div className="hidden md:flex flex-col items-center mt-2">
                      <p className={`text-xs font-bold ${idx === selectedProduct.timeline.findIndex(t => t.step === selectedProduct.status) ? "text-[#6cc0e4]" : "text-[#0f171a] dark:text-white"}`}>{step.step}</p>
                      <p className="text-[10px] text-[#538093]">{step.date}</p>
                    </div>
                  </div>
                ))}
                {/* Progress Lines */}
                <div className="absolute top-5 left-0 w-full hidden md:flex items-center px-[12.5%]">
                  <div className="h-[2px] w-1/3 bg-[#6cc0e4]"></div>
                  <div className="h-[2px] w-1/3 tracking-line-dashed"></div>
                  <div className="h-[2px] w-1/3 bg-[#d1dfe5] dark:bg-gray-700"></div>
                </div>
              </div>
            </div>

            {/* Order Summary & Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: Items */}
              <div className="glass-card rounded-xl p-6 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#6cc0e4]">shopping_bag</span>
                  Items Summary
                </h3>
                <div className="space-y-6 flex-1">
                  {products.map((prod) => (
                    <div
                      key={prod.id}
                      className="flex items-center gap-4 cursor-pointer hover:bg-[#6cc0e4]/10 p-2 rounded-lg transition-colors"
                      onClick={() => setSelectedProduct(prod)}
                    >
                      <div
                      onClick={() => navigate("/product-journey")}
                        className="size-16 rounded-lg bg-cover bg-center border border-gray-100 dark:border-white/5"
                        style={{ backgroundImage: `url("${prod.image}")` }}
                      ></div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold">{prod.name}</h4>
                        <p className="text-xs text-[#538093]">{prod.variant}</p>
                      </div>
                      <p className="text-sm font-bold">{prod.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Shipping & Actions */}
              <div className="flex flex-col gap-8 sticky top-24 self-start">
                <div className="glass-card rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#6cc0e4]">distance</span>
                    Shipping Address
                  </h3>
                  <div className="text-sm leading-relaxed text-[#538093]">
                    <p className="font-bold text-[#0f171a] dark:text-white">{selectedProduct.address.name}</p>
                    <p>{selectedProduct.address.street}</p>
                    <p>{selectedProduct.address.city}</p>
                    <p>{selectedProduct.address.country}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#6cc0e4]">
                    <span className="material-symbols-outlined text-sm">info</span>
                    Estimated Delivery: {selectedProduct.address.deliveryEst}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <button
                    className="w-full bg-[#6cc0e4] hover:bg-[#6cc0e4]/90 text-white font-bold py-4 rounded-full shadow-lg shadow-[#6cc0e4]/25 transition-all flex items-center justify-center gap-2"
                    onClick={() => alert("Tracking order...")}
                  >
                    <span className="material-symbols-outlined">map</span>
                    Track Order Details
                  </button>

                  <button
                    className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0f171a] dark:text-white font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2"
                    onClick={() => navigate("/")}
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                    Continue Shopping
                  </button>
                </div>

                <div className="text-center">
                  <a className="text-xs text-[#538093] hover:text-[#6cc0e4] transition-colors underline underline-offset-4" href="#">
                    Need help with your order? Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default OrderSuccessTracking;