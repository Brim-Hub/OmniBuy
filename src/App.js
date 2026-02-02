// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CycleLuxuryObjects from "./CycleLuxuryObjects";
import FeaturedProductsPage from "./FeaturedProductsPage";
import StyleLandscapeSection from "./StyleLandscapeSection";
import AdvancedLuxuryPage from "./AdvancedLuxuryPage";
import MaterialIntegritySection from "./MaterialIntegritySection";
import StyleHarmonySection from "./StyleHarmonySection";
import TopCollectionsSection from "./TopCollectionsSection";
import ProductShowcase from "./ProductShowcase";
import CarouselLuxuryShowcase from "./ProductShowcase";
import LuxuryShowcaseSection from "./CarouselLuxuryShowcase";
import LuxuryFeatureShowcase from "./LuxuryFeatureShowcase";
import LuxuryFooter from "./LuxuryFooter";
import AICommerceCart from "./AICommerceCart";
import OrderSuccessTracking from "./OrderSuccessTracking";





const Home = ()=>{
  return<>
  <CycleLuxuryObjects/>
  <StyleLandscapeSection/>
  <TopCollectionsSection/>
  <StyleHarmonySection/>
  <FeaturedProductsPage/>
  <ProductShowcase/>
  <AdvancedLuxuryPage/>
  <MaterialIntegritySection/>
  <StyleHarmonySection/>
  <TopCollectionsSection/>
  <CarouselLuxuryShowcase/>
  <LuxuryShowcaseSection/>
  <LuxuryFeatureShowcase/>
 <LuxuryFooter/>
  </>
}

const App = () => {
  return (
    <Router>
      {/* Simple nav */}
      <nav className="p-4 bg-gray-900 text-white flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/luxury" className="hover:underline">Luxury Collection</Link>
        <Link to="/order" className="hover:underline">Luxury Collection</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/luxury" element={<AICommerceCart />} />
        <Route path="/order" element={<OrderSuccessTracking />} />
      </Routes>
    </Router>
  );
};

export default App;
