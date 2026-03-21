import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      {/* Relative position yahan zaroori hai taaki 
        Navbar is container ke top (0,0) par fixed rahe 
      */}
      <div className="relative font-sans antialiased bg-white">
        
        {/* Navbar Fixed hai, isliye ye neeche ke content ke upar float karega */}
        <Navbar />
        
        {/* Main area mein padding-top mat dena, 
          taaki Routes ke andar wale components top:0 se start ho 
        */}
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/e-auction" element={<AuctionPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/tender-contract" element={<TenderPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppBtn />
      </div>
    </Router>
  );
}

export default App;