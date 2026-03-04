import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }, 10);
    }, [pathname]);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    return null;
};

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container nav-content">
                <Link to="/" className="logo" onClick={handleHomeClick}>
                    BRAINROT<span className="text-accent">.</span>
                </Link>
                
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={handleHomeClick}>Home</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/brands" onClick={closeMenu}>Brands</Link>
                    <Link to="/campaigns" onClick={closeMenu}>Work</Link>
                    
                    <div style={{ display: isOpen ? 'block' : 'none', width: '80%', marginTop: '10px' }}>
                        <Link to="/contact" onClick={closeMenu} style={{ width: '100%', padding: 0, background: 'transparent', border: 'none' }}>
                            <button className="btn btn-primary" style={{ width: '100%' }}>Book Call</button>
                        </Link>
                    </div>
                </div>
                
                <div style={{ display: isOpen ? 'none' : 'block' }} className="desktop-contact-btn">
                    <Link to="/contact">
                        <button className="btn btn-primary" style={{ padding: '10px 24px' }}>Book Call</button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export const Footer = () => {
    const handleScrollTop = () => { 
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); 
    };
    
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-card">
                    <div className="footer-grid">
                        <div className="footer-brand-col">
                            <Link to="/" className="footer-logo" onClick={handleScrollTop}>
                                BRAINROT<span className="text-accent">.</span>
                            </Link>
                            <p className="footer-desc">Empowering the next generation of creators and brands. We help you grow and stand out.</p>
                            <div className="footer-socials-row">
                                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="footer-links-col">
                            <h4>Explore</h4>
                            <ul>
                                <li><Link to="/" onClick={handleScrollTop}>Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/campaigns">Our Work</Link></li>
                                <li><Link to="/brands">For Brands</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-col">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/contact">Contact Support</Link></li>
                                <li><Link to="/privacy">Data & Privacy</Link></li>
                                <li><Link to="/terms">Terms of Engagement</Link></li>
                            </ul>
                        </div>
                        <div className="footer-links-col contact-col">
                            <h4>Get In Touch</h4>
                            <p className="footer-desc" style={{ marginBottom: '25px', maxWidth: '280px' }}>
                                A leading agency connecting brands with top influencers to create impactful campaigns and drive engagement.
                            </p>
                            <div className="footer-contact-details">
                                <h3 className="footer-phone">+91 9054624138</h3>
                                <a href="mailto:thebrainrotmedia@gmail.com" className="footer-email">
                                    thebrainrotmedia@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-bar">
                    <p>© 2026 Brainrot Media. All rights reserved.</p>
                    <button onClick={handleScrollTop} className="scroll-top-text">Back to Top <FaArrowUp /></button>
                </div>
            </div>
        </footer>
    );
};