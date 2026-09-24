import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import MultiwayPage from './pages/MultiwayPage';
import CollectionsPage from './pages/CollectionsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LookbookPage from './pages/LookbookPage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multiway" element={<MultiwayPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/our-story" element={<StoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
