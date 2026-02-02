import React, { useState } from "react";
// import "./globals.css"; // Make sure Tailwind + CSS animations are imported

const objects = [
  {
    label: "Object of Desire",
    title: "Visionary X-1 Series",
    description:
      "Sculpted for the senses. An architectural approach to personal audio.",
    price: "$1,850.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg",
  },
  {
    label: "Next Gen Audio",
    title: "Zenith Pro 7",
    description:
      "Where innovation meets craftsmanship for the perfect audio experience.",
    price: "$1,999.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBacAwWU4DsjNKjqVzU8D0rBo8i2oHvTmIro5EoGwy-aHsZcaUc1h1OXnjIwEqrYGozBYaucGmGwcOrnZXs4K0lqf2AqbikoTiHbHsGTFJWHaOr6RWxRPv3xWqVWzyot21r_C1_5XNkrJLV0bgX3pS7V6FG0XsSeIK-TjfxvHTiXmKjkR4HYsiFh-8vndB9YrH_5jMlJkse-OWy78mBbuNQVHPLslp-pzV-UksN-tLEkTE9Rb8ZQE1DFFsetCOjPtZRsv3kkZFH5bg",
  },
];

const AdvancedLuxuryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const currentObject = objects[currentIndex];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % objects.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? objects.length - 1 : prev - 1));

  const handleAcquireClick = (e) => {
    e.stopPropagation();
    alert(`Acquire button clicked for ${currentObject.title} 🎯`);
  };

  const handleClickAnimation = () => setClicked(!clicked);

  return (
    <section className="w-full h-screen flex items-center justify-center relative bg-[#FAFAF9] overflow-hidden">
      {/* Left Text Panel */}
      <div
        className="w-1/2 h-full flex flex-col justify-center px-16 cursor-pointer z-10"
        onClick={handleNext}
      >
        <span className="text-[12px] font-bold tracking-[0.5em] uppercase mb-4 text-primary/40">
          {currentObject.label}
        </span>
        <h1 className="text-7xl font-extrabold mb-6 text-magazine">
          {currentObject.title}
        </h1>
        <p className="text-xl font-light mb-12 max-w-md">{currentObject.description}</p>
        <div className="flex items-center gap-12">
          <button
            onClick={handleAcquireClick}
            className="px-14 py-6 bg-gray-900 text-white font-bold uppercase rounded-full hover:bg-gray-700 transition-all"
          >
            Acquire Edition
          </button>
          <span className="text-3xl font-bold">{currentObject.price}</span>
        </div>
      </div>

      {/* Right Image Panel */}
      <div
        className="w-1/2 h-full relative flex items-center justify-center cursor-pointer"
        onClick={() => {
          handlePrev();
          handleClickAnimation();
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Main Image */}
          <div
            className={`relative z-20 w-[55%] h-[55%] rounded-[2rem] overflow-hidden bg-center bg-contain bg-no-repeat main-float floating-subtle ${clicked ? "clicked" : ""}`}
            style={{ backgroundImage: `url(${currentObject.image})` }}
          ></div>

          {/* Top-left Circle */}
          <div
            className={`absolute top-16 left-16 w-48 h-48 glass-iridescent p-4 rounded-full circle floating-subtle ${clicked ? "clicked" : ""}`}
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-full"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk3_9E0nGxNuQo2pjmjYZBkAlckxsvqUPNdVSTSuCJjhGjbuLlzc1R_LsGjpCudm2nE9FYxNGsX7VwCZt6SPuXpnFtQneuFgC6UltvSt7_BpT7k-2hdEQTX5fDzkfjkxYxV1Ku9vQ2K5ogEJ49pKAIpnd_bTLiRSeQZ2fNd19spc7Z8bVdt2fE-VTjX2mxvaNRzjpyoqoDGq1iw33FmuED99DuFvfqqAhXKrgJj96WIdAoGvFZIzJNA5tP-mvkJHPWCNZJb3z22QA")',
              }}
            ></div>
          </div>

          {/* Bottom-right Circle */}
          <div
            className={`absolute bottom-16 right-16 w-48 h-48 glass-iridescent p-4 rounded-full circle floating-subtle ${clicked ? "clicked" : ""}`}
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-full"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJOQy5ZmjwF45bsrGnt-4YlDu8EeMBU7p6U8qe5x-VlZI7G5ADYGmz0xX6RfJoyL_Xsr4-e7R1nD92opsD7syAgDgMXe4FfeTuSbPysLXeS6oyIMJQweCJWb66WtWRo0i82d36CFHGe09pt7nmHNeB93AQyDzwlkXebyt2oHDMORDyV3YCkXzBFuN0eJZKZ37CAv_vRxxIA_PpBazPxphjGqgWuV1aCBMd8rfkusP18ox6dIHrJErNb3-G_FxgWJcmVDW9_p_Sodg")',
              }}
            ></div>
          </div>

          {/* Top-right Linen */}
          <div
            className={`absolute top-24 right-16 w-32 h-32 glass-iridescent p-4 rounded-full circle floating-subtle ${clicked ? "clicked" : ""}`}
          >
            <div className="w-full h-full bg-zinc-200 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-black/30">Linen Texture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedLuxuryPage;
