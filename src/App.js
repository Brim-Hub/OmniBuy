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
import ProductDiscoveryGrid from "./ProductDiscoveryPage";
import AuraWishlistPage from "./AuraWishlistPage";
import ProductJourney from "./ProductJourney";
import CelebrationOfPurchase from "./CelebrationOfPurchase";
import PremiumProductPage from "./PremiumProductPage";
import PremiumAccountHub from "./PremiumAccountHub";
import Navbar from "./Navbar.jsx";
import EtherealCart from "./EtherealCart.jsx";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";




const Dash = ()=>{
  return<>
  <CycleLuxuryObjects/>
  {/* <StyleLandscapeSection/> */}
  <TopCollectionsSection/>
  <StyleHarmonySection/>
  
  {/* <ProductShowcase/> */}
  {/* <AdvancedLuxuryPage/> */}
  <MaterialIntegritySection/>
 
  
  {/* <CarouselLuxuryShowcase/> */}
  <LuxuryShowcaseSection/>
  <LuxuryFeatureShowcase/>
   <StyleHarmonySection/>
  <FeaturedProductsPage/>
 <LuxuryFooter/>
  </>
}
const UserView = ()=>{
  return<>
  {/* <CycleLuxuryObjects/> */}
  <AdvancedLuxuryPage/>
   <MaterialIntegritySection/>
   <StyleHarmonySection/>
  <TopCollectionsSection/>
  
  {/* <FeaturedProductsPage/> */}

  
 
 
  
  
  <LuxuryShowcaseSection/>
   <StyleHarmonySection/>
  <LuxuryFeatureShowcase/>
  
  <StyleLandscapeSection/>
 <LuxuryFooter/>
  </>
}

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

// const App = () => {
//   return (
//     <Router>
//       {/* Simple nav */}
//       <nav className="p-4 bg-gray-900 text-white flex gap-4">
//         <Link to="/" className="hover:underline">Home</Link>
//         <Link to="/dash" className="hover:underline">Dash</Link>
//         <Link to="/userview" className="hover:underline">userview</Link>
//         <Link to="/luxury" className="hover:underline">Luxury Collection</Link>
//         <Link to="/order" className="hover:underline">Luxury Collection</Link>
//         <Link to="/product" className="hover:underline">Luxury Collection</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Dash" element={<Dash />} />
//         <Route path="/userview" element={<UserView />} />
//         <Route path="/luxury" element={<AICommerceCart />} />
//         <Route path="/order" element={<OrderSuccessTracking />} />
//         <Route path="/product" element={<ProductDiscoveryGrid />} />
//       </Routes>
//     </Router>
//   );
// };



const App = () => {
  return (
    <Router>
      {/* Navigation */}
      {/* <nav className="p-4 bg-gray-900 text-white flex flex-wrap gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dash" className="hover:underline">dash</Link>
       
        <Link to="/luxury" className="hover:underline">AI Commerce</Link>
        <Link to="/wishlist" className="hover:underline">Aura Wishlist</Link>
        
        <Link to="/celebration" className="hover:underline">Celebration</Link>

        <Link to="/order" className="hover:underline">Order Tracking</Link>
        <Link to="/premium-account" className="hover:underline">Premium Account</Link>
       
        <Link to="/premium-product" className="hover:underline">Premium Product</Link>
        <Link to="/product-discovery" className="hover:underline">Product Discovery</Link>
        <Link to="/product-journey" className="hover:underline">Product Journey</Link>
      </nav> */}
      <Navbar/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash" element={<UserView />} />
        <Route path="/advanced-luxury" element={<AdvancedLuxuryPage />} />
        <Route path="/ethereal" element={<EtherealCart />} />
        <Route path="/luxury" element={<AICommerceCart />} />
        <Route path="/wishlist" element={<AuraWishlistPage />} />
        <Route path="/carousel" element={<CarouselLuxuryShowcase />} />
        <Route path="/celebration" element={<CelebrationOfPurchase />} />
        <Route path="/cycle" element={<CycleLuxuryObjects />} />
        <Route path="/featured" element={<FeaturedProductsPage />} />
        <Route path="/feature-showcase" element={<LuxuryFeatureShowcase />} />
        <Route path="/order" element={<OrderSuccessTracking />} />
        <Route path="/premium-account" element={<PremiumAccountHub />} />
     
        <Route path="/premium-product" element={<PremiumProductPage />} />
        <Route path="/product-discovery" element={<ProductDiscoveryGrid />} />
        <Route path="/product-journey" element={<ProductJourney />} />
        <Route path="/product-showcase" element={<ProductShowcase />} />
        <Route path="/style-harmony" element={<StyleHarmonySection />} />
        <Route path="/style-landscape" element={<StyleLandscapeSection />} />
        <Route path="/top-collections" element={<TopCollectionsSection />} />
      </Routes>
    </Router>
  );
};



export default App;
