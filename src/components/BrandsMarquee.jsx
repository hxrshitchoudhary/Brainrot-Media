import React from 'react';
import { brandsList } from '../data/constants';

const BrandsMarqueeComponent = () => (
    <div className="brands-marquee-section">
        <h2 className="section-title text-center" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '40px' }}>
            TRUSTED BY <span className="text-accent">TOP BRANDS.</span>
        </h2>
        <div className="brands-marquee-container">
            <div className="brands-marquee-track">
                {brandsList.map((brand, i) => (
                    <div key={i} className="brand-logo-item">
                        <img 
                            src={brand.img} 
                            alt={brand.name} 
                            className="brand-logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('fallback-logo');
                                e.target.parentElement.setAttribute('data-name', brand.name);
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="brands-marquee-track">
                {brandsList.map((brand, i) => (
                    <div key={`dup-${i}`} className="brand-logo-item">
                        <img 
                            src={brand.img} 
                            alt={brand.name} 
                            className="brand-logo-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('fallback-logo');
                                e.target.parentElement.setAttribute('data-name', brand.name);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default BrandsMarqueeComponent;