// // FeaturedProductsPage.jsx
// import { useNavigate } from 'react-router-dom';

// const FeaturedProductsPage = () => {
//   const navigate = useNavigate();

//   const products = [
//     { name: 'OmniMount Stand', price: '$240.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ0FAGYAtwBlqtv9PZMce20me8GBcYcRTqH61SNk_N3zWoir-tPJ9ozWZe0mOXD45N9dfI4ntnyWxGHczujW43EF8y1sn_xJPR1_I15FG8mEqPKwNdq9OYbxlxx2Tfft23aD5ce2_oj3NQf4Mxexw9LbsrnTs-1ok9zz5aSwlUxJJQmk1FPQeBM0tPkIUUM--WV3Uzgrfz2BYWEMO-Fll0TGC9vPrMSY7Pl7nOFZj0FZrMUnXGnn3Fq5EprG2v_F8f5Ro7lPmBXU' },
//     { name: 'Volt Pad Ultra', price: '$180.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr17lcmCNO1pqUqKtcmaLpGlrCtDtjXbvWeOymkBNz3f6HDvprY47ZRChqXiE6AkI89xwjZQUpzxEefsH71X9wZhoTDP80ZPzUmb55H1TJ5dOWDfoty4Fev7wMWE7IW4B3uB1mixmD2vUgyE8MtfHIpZmPxSBm64DWXUld2-CzFnREFME8zQpYld7HjwCpKY2TzVKl77t_1lEWFymuFX7Gq_IfLKjd1NeBabbQCa42RCaU_Taf-vgeZ2jI-AFlj_dWiYpBf80Gxbw' },
//     { name: 'LuxeTravel Armor', price: '$450.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg' },
//     { name: 'EchoLamp Stand', price: '$120.00', img: 'https://via.placeholder.com/400x500?text=Item+4' },
//     { name: 'AeroDesk Holder', price: '$300.00', img: 'https://via.placeholder.com/400x500?text=Item+5' },
//     { name: 'NeoChair Cushion', price: '$220.00', img: 'https://via.placeholder.com/400x500?text=Item+6' },
//     { name: 'PixelDesk Light', price: '$190.00', img: 'https://via.placeholder.com/400x500?text=Item+7' },
//     { name: 'LumaStand Pro', price: '$350.00', img: 'https://via.placeholder.com/400x500?text=Item+8' },
//   ];

//   // Click on section
//   const handleSectionClick = () => {
//     navigate('/luxury'); // Navigate to full collection page
//   };

//   // Click on individual card
//   const handleCardClick = (productName) => {
//     navigate(`/luxury`); // Navigate to product detail
//   };

//   return (
//     <section 
//       className="mt-[1px] py-20 w-full border-gray-300 rounded-3xl shadow-lg cursor-pointer"
//       onClick={handleSectionClick}
//     >
//       <div className="w-full px-2 md:px-8">
//         {/* Section Title */}
//         <div className="mb-16 text-center md:text-left">
//           <h2 className="text-5xl text-magazine uppercase tracking-tighter">
//             Complete the Aesthetic
//           </h2>
//         </div>

//         {/* Horizontal Scroll Items */}
//         <div className="flex gap-6 md:gap-8 overflow-x-auto pb-[0px] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//           {products.map((item, index) => (
//             <div 
//               key={index} 
//               className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-80 snap-center"
//               onClick={(e) => { 
//                 e.stopPropagation(); // Prevent section click
//                 handleCardClick(item.name); 
//               }}
//             >
//               <div className="aspect-[4/5] bg-[#EDEFF1] mb-4 overflow-hidden group rounded-xl border border-gray-200 shadow-sm">
//                 <div
//                   className="w-full h-full bg-center bg-no-repeat bg-[length:60%] group-hover:scale-110 transition-transform duration-[2s]"
//                   style={{ backgroundImage: `url(${item.img})` }}
//                 ></div>
//               </div>
//               <div className="flex justify-between items-start">
//                 <h4 className="text-lg font-light uppercase tracking-widest">{item.name}</h4>
//                 <p className="text-sm font-bold">{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProductsPage;


import React from "react";

const FeaturedProductsPage = () => {

  const products = [
    { name: 'OmniMount Stand', price: '$240.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRJ0FAGYAtwBlqtv9PZMce20me8GBcYcRTqH61SNk_N3zWoir-tPJ9ozWZe0mOXD45N9dfI4ntnyWxGHczujW43EF8y1sn_xJPR1_I15FG8mEqPKwNdq9OYbxlxx2Tfft23aD5ce2_oj3NQf4Mxexw9LbsrnTs-1ok9zz5aSwlUxJJQmk1FPQeBM0tPkIUUM--WV3Uzgrfz2BYWEMO-Fll0TGC9vPrMSY7Pl7nOFZj0FZrMUnXGnn3Fq5EprG2v_F8f5Ro7lPmBXU' },
    { name: 'Volt Pad Ultra', price: '$180.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr17lcmCNO1pqUqKtcmaLpGlrCtDtjXbvWeOymkBNz3f6HDvprY47ZRChqXiE6AkI89xwjZQUpzxEefsH71X9wZhoTDP80ZPzUmb55H1TJ5dOWDfoty4Fev7wMWE7IW4B3uB1mixmD2vUgyE8MtfHIpZmPxSBm64DWXUld2-CzFnREFME8zQpYld7HjwCpKY2TzVKl77t_1lEWFymuFX7Gq_IfLKjd1NeBabbQCa42RCaU_Taf-vgeZ2jI-AFlj_dWiYpBf80Gxbw' },
    { name: 'LuxeTravel Armor', price: '$450.00', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg' },
  ];

  // Click on individual card
  const handleCardClick = (productName) => {
    alert(`Clicked on ${productName}`);
  };

  return (
    <section className="mt-[1px] py-20 w-full border-gray-300 rounded-3xl shadow-lg">
      <div className="w-full px-2 md:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-5xl text-magazine uppercase tracking-tighter">
            Complete the Aesthetic
          </h2>
        </div>

        {/* Horizontal Scroll Items */}
        <div className="flex gap-6 md:gap-8 overflow-x-auto pb-[0px] snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {products.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-80 snap-center"
              onClick={() => handleCardClick(item.name)}
            >
              <div className="aspect-[4/5] mb-4 overflow-hidden group rounded-xl border border-gray-200 shadow-sm floating-subtle">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-[length:60%] group-hover:scale-110 transition-transform duration-[2s]"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
              </div>
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-light uppercase tracking-widest">{item.name}</h4>
                <p className="text-sm font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes floatSubtle {
            0% { transform: translateY(0px); }
            25% { transform: translateY(-8px); }
            50% { transform: translateY(4px); }
            75% { transform: translateY(-6px); }
            100% { transform: translateY(0px); }
          }

          .floating-subtle {
            animation: floatSubtle 5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedProductsPage;
