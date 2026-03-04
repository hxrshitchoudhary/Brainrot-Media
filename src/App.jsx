import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Background
import { ScrollToTop, Navbar, Footer } from './components/Navigation';
import Background3D from './components/CanvasBackground';

// Pages
import HomePage from './pages/Home';
import { AboutPage, BrandsPage, CampaignsPage, ServiceDetailPage, ContactPage, PrivacyPolicyPage, TermsConditionsPage } from './pages/SecondaryPages';

// Global Styles
import './App.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <div className="site-content">
                <div className="background-wrapper">
                    <div className="aurora-overlay"></div>
                    <Background3D />
                </div>
                
                <div className="app-wrapper">
                    <Navbar />
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/brands" element={<BrandsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/campaigns" element={<CampaignsPage />} />
                            <Route path="/service/:id" element={<ServiceDetailPage />} />
                            <Route path="/privacy" element={<PrivacyPolicyPage />} />
                            <Route path="/terms" element={<TermsConditionsPage />} />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;