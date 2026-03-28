import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import AuctionPage from './pages/AuctionPage';
import MediaPage from './pages/MediaPage';
import CareerPage from './pages/CareerPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import TenderPage from './pages/TenderPage';
import Management from './pages/Management';
import EQuotation from './pages/EQuotation';  
import Map from './components/Map';
import CustomerReview from './pages/CustomerReview';
import VisitAppointment from './pages/VisitAppointment';
import CircularPage from './pages/CircularPage';
import TextileAssociates from './pages/TextileAssociates';
import TradeEnquiry from './pages/TradeEnquiry';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Relative position is necessary here so that 
        Navbar remains fixed at the top (0,0) of this container 
      */}
      <div className="relative font-sans antialiased bg-white">
        
        {/* Navbar is Fixed, so it will float above the content below */}
        <Navbar />
        
        {/* Do not add padding-top to the main area, 
          so that components inside Routes start from top:0 
        */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/e-auction" element={<AuctionPage />} />
            <Route path="/e-quotation" element={<EQuotation />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/Management" element={<Management />} />
            <Route path="/tender-contract" element={<TenderPage />} />
            <Route path="/customer-review" element={<CustomerReview />} />
            <Route path="/visit-appointment" element={<VisitAppointment />} />
            <Route path="/circulars" element={<CircularPage />} />
            <Route path="/textile-associates" element={<TextileAssociates />} />
            <Route path="/trade-enquiry" element={<TradeEnquiry />} />
            <Route path="/Textile-Map" element={<Map />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;