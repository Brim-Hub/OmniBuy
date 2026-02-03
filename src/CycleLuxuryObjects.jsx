// // LuxuryPage.js
// import React, { useState } from "react";

// const objects = [
//   {
//     label: "Object of Desire",
//     title: "Visionary X-1 Series",
//     description: "Sculpted for the senses. An architectural approach to personal audio.",
//     price: "$1,850.00",
//     image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg"
//   },
//   {
//     label: "Luxury Redefined",
//     title: "Aurora S-5",
//     description: "Immerse yourself in a world of pristine sound and elegance.",
//     price: "$2,200.00",
//     image: "https://example.com/image2.jpg"
//   },
//   {
//     label: "Next Gen Audio",
//     title: "Zenith Pro 7",
//     description: "Where innovation meets craftsmanship for the perfect audio experience.",
//     price: "$1,999.00",
//     image: "https://example.com/image3.jpg"
//   },
//   {
//     label: "Art of Sound",
//     title: "EchoMaster X",
//     description: "Transforming music into a living, breathing masterpiece.",
//     price: "$2,500.00",
//     image: "https://example.com/image4.jpg"
//   }
// ];

// const LuxuryPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleButtonClick = (e) => {
//     e.stopPropagation();
//     alert("Button clicked! 💥");
//   };

//   const handleImageClick = (e) => {
//     e.stopPropagation();
//     alert("Image clicked! 🖼️");
//   };

//   const handleTextDivClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
//   };

//   const handleImageDivClick = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? objects.length - 1 : prevIndex - 1
//     );
//   };

//   const currentObject = objects[currentIndex];

//   return (
//     <div>
//       <style>{`
//    body {  
//   background: #F5F1EA; /* Soft beige for elegance */
//   color: #1A1A1A; 
//   font-family: system-ui, sans-serif; 
//   -webkit-font-smoothing: antialiased; 
//   overflow-x: hidden;
// }

// .floating-luxury {
//   animation: floatLuxuryMain 15s ease-in-out infinite;
//   transform-origin: center;
//   will-change: transform, opacity;
//   filter: drop-shadow(0 10px 20px rgba(0,0,0,0.05));
// }

// /* Premium floating + rotation + subtle zoom + opacity shimmer */
// @keyframes floatLuxuryMain {
//   0% {
//     transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
//     opacity: 1;
//   }
//   15% {
//     transform: translate3d(8px, -12px, 5px) rotateX(1deg) rotateY(2deg) scale(1.02);
//     opacity: 0.97;
//   }
//   30% {
//     transform: translate3d(-10px, -25px, 10px) rotateX(-1deg) rotateY(-2deg) scale(0.98);
//     opacity: 0.98;
//   }
//   45% {
//     transform: translate3d(12px, -18px, -5px) rotateX(2deg) rotateY(1deg) scale(1.01);
//     opacity: 0.96;
//   }
//   60% {
//     transform: translate3d(-8px, -10px, 8px) rotateX(-2deg) rotateY(-1deg) scale(0.99);
//     opacity: 0.99;
//   }
//   75% {
//     transform: translate3d(5px, -20px, -10px) rotateX(1deg) rotateY(2deg) scale(1.02);
//     opacity: 0.97;
//   }
//   100% {
//     transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
//     opacity: 1;
//   }
// }


//       `}</style>

//     <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
//   {/* Text Div */}
//   <div
//     onClick={handleTextDivClick}
//     className="w-1/2 h-full flex flex-col justify-center z-10 px-8 md:px-16 cursor-pointer bg-[#F5F1EA] text-gray-900"
//   >
//     <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
//       {currentObject.label}
//     </span>
//     <h1 className="text-6xl md:text-8xl font-extrabold mb-8">{currentObject.title}</h1>
//     <p className="text-xl md:text-2xl font-light mb-12 max-w-md">{currentObject.description}</p>
//     <div className="flex items-center gap-10">
//       <button
//         onClick={handleButtonClick}
//         className="px-12 py-6 bg-gray-900 text-white text-sm font-bold uppercase rounded-full hover:bg-gray-700 transition-all"
//       >
//         Acquire Edition
//       </button>
//       <div className="text-3xl font-light">{currentObject.price}</div>
//     </div>
//   </div>

//   {/* Image Div */}
//   <div
//     onClick={handleImageDivClick}
//     className="w-1/2 h-full relative flex items-center justify-center overflow-hidden cursor-pointer bg-[#F5F1EA]"
//   >
//     <img
//       onClick={handleImageClick}
//       src={currentObject.image}
//       className="floating-drift w-[85%] h-auto object-contain cursor-pointer"
//       alt={currentObject.title}
//     />
//   </div>
// </section>

//     </div>
//   );
// };

// export default LuxuryPage;
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import ProductJourney from "./ProductJourney";

const objects = [
  {
    label: "Object of Desire",
    title: "Visionary X-1 Series",
    description: "Sculpted for the senses. An architectural approach to personal audio.",
    price: "$1,850.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg"
  },
  {
    label: "Luxury Redefined",
    title: "Aurora S-5",
    description: "Immerse yourself in a world of pristine sound and elegance.",
    price: "$2,200.00",
    image: "https://example.com/image2.jpg"
  },
  {
    label: "Next Gen Audio",
    title: "Zenith Pro 7",
    description: "Where innovation meets craftsmanship for the perfect audio experience.",
    price: "$1,999.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg"
  },
  {
    label: "Art of Sound",
    title: "EchoMaster X",
    description: "Transforming music into a living, breathing masterpiece.",
    price: "$2,500.00",
    image: "https://example.com/image4.jpg"
  }
];

const LuxuryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    alert("Button clicked! 💥");
  };

   const navigate = useNavigate(); // ✅ inside the component body

  const handleImageClick = (e) => {
    e.stopPropagation();
    navigate("/product-journey"); // ✅ programmatic navigation
  };

  const handleTextDivClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % objects.length);
  };

  const handleImageDivClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? objects.length - 1 : prevIndex - 1
    );
  };

  const currentObject = objects[currentIndex];

  return (
    <div>
      <style>{`
        body {  
          background: #F5F1EA; /* Soft beige for elegance */
          color: #1A1A1A; 
          font-family: system-ui, sans-serif; 
          -webkit-font-smoothing: antialiased; 
          overflow-x: hidden;
        }

        .floating-luxury {
          animation: floatLuxuryMain 15s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, opacity;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.05));
        }

        @keyframes floatLuxuryMain {
          0% {
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 1;
          }
          15% {
            transform: translate3d(8px, -12px, 5px) rotateX(1deg) rotateY(2deg) scale(1.02);
            opacity: 0.97;
          }
          30% {
            transform: translate3d(-10px, -25px, 10px) rotateX(-1deg) rotateY(-2deg) scale(0.98);
            opacity: 0.98;
          }
          45% {
            transform: translate3d(12px, -18px, -5px) rotateX(2deg) rotateY(1deg) scale(1.01);
            opacity: 0.96;
          }
          60% {
            transform: translate3d(-8px, -10px, 8px) rotateX(-2deg) rotateY(-1deg) scale(0.99);
            opacity: 0.99;
          }
          75% {
            transform: translate3d(5px, -20px, -10px) rotateX(1deg) rotateY(2deg) scale(1.02);
            opacity: 0.97;
          }
          100% {
            transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        {/* Text Div */}
        <div
          onClick={handleTextDivClick}
          className="w-1/2 h-full flex flex-col justify-center z-10 px-8 md:px-16 cursor-pointer bg-[#F5F1EA] text-gray-900"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
            {currentObject.label}
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8">{currentObject.title}</h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-md">{currentObject.description}</p>
          <div className="flex items-center gap-10">
            <button
              onClick={handleButtonClick}
              className="px-12 py-6 bg-gray-900 text-white text-sm font-bold uppercase rounded-full hover:bg-gray-700 transition-all"
            >
              Acquire Edition
            </button>
            <div className="text-3xl font-light">{currentObject.price}</div>
          </div>
        </div>

        {/* Image Div */}
        <div
          onClick={handleImageDivClick}
          className="w-1/2 h-full relative flex items-center justify-center overflow-hidden cursor-pointer bg-[#F5F1EA]"
        >
          <img
            onClick={handleImageClick}
            src={currentObject.image}
            className="floating-luxury w-[85%] h-auto object-contain cursor-pointer"
            alt={currentObject.title}
          />
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;










