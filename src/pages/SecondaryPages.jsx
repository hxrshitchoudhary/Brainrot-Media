import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaFire, FaGlobe, FaBullhorn, FaUsers, FaCheckCircle, FaRocket, FaArrowRight, FaPaperPlane, FaBolt } from 'react-icons/fa';
import { servicesData, campaignsData } from '../data/constants';
import { pageTransition } from '../utils/animations';
import BrandsMarqueeComponent from '../components/BrandsMarquee';

const TeamCard = ({ member }) => (
    <motion.div 
        className="team-card-minimal will-change-transform" 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-50px" }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="team-img-container">
            <img 
                src={member.img} 
                alt={member.name} 
                className="team-img" 
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('fallback-bg'); }} 
            />
            <div className="team-img-overlay-minimal">
                <div className="team-socials-minimal">
                    <a href={member.social} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <div className="team-info-minimal">
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role text-accent">{member.role}</p>
        </div>
    </motion.div>
);

export const AboutPage = () => {
    const teamData = [
        { name: "Shaurya Pratap", role: "Founder & Director", img: "/founder.jpg", social: "https://www.instagram.com/shaury.a/", linkedin: "https://www.linkedin.com/in/shaurya-tomar-25a9ba1a2/" }
    ];

    return (
        <motion.div {...pageTransition} className="page-wrapper" style={{ paddingBottom: 0 }}>
            <div className="container about-hero-editorial">
                <div className="editorial-left">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="speed-tag"><FaFire /> THE AGENCY</motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="warp-title editorial-title">
                        WE DON'T CHASE<br/>THE <span className="text-accent text-outline">ALGORITHM.</span><br/>WE DICTATE IT.
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="editorial-desc">
                        Brainrot Media is a new-breed agency built for the creator economy. We bridge the gap between fast-moving internet culture and high-level brand strategy.
                    </motion.p>
                </div>
                <div className="editorial-right">
                   <motion.div className="editorial-stat-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
                       <h3 className="text-accent">2024</h3>
                       <p>Founded</p>
                   </motion.div>
                   <motion.div className="editorial-stat-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}>
                       <h3 className="text-accent">10M+</h3>
                       <p>Views Driven</p>
                   </motion.div>
                </div>
            </div>

            <div className="container section-padding">
                <div className="section-header-split" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '40px' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>OUR <span className="text-accent">DNA</span></h2>
                </div>
                <div className="dna-container">
                    {[
                        { num: "01", title: "SPEED", desc: "Internet culture shifts in hours, not months. We execute campaigns at the speed of the feed, ensuring your brand is always part of the current conversation." },
                        { num: "02", title: "CREATORS FIRST", desc: "We don't treat talent like billboards. We build creators into standalone empires, fostering deep, authentic connections that audiences actually trust." },
                        { num: "03", title: "DATA-DRIVEN VIRALITY", desc: "Going viral isnt luck; it's a science. We pair creative intuition with hard analytics to engineer attention and guarantee ROI." }
                    ].map((item, i) => (
                        <motion.div key={i} className="dna-row" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                            <div className="dna-num">{item.num}</div>
                            <div className="dna-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="team-section section-padding" style={{ background: 'rgba(10, 10, 10, 0.4)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="section-title" style={{ margin: 0 }}>THE <span className="text-accent">MINDS</span></h2>
                        <div className="hollow-subtitle-container">
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h3 className="hollow-animated-text glow-layer-1">THE ARCHITECTS</h3>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <h3 className="hollow-animated-text glow-layer-2">BEHIND THE SCREENS</h3>
                            </motion.div>
                        </div>
                    </div>
                    <div className="team-grid-modern">
                        {teamData.map((member, i) => <TeamCard key={i} member={member} />)}
                    </div>
                </div>
            </div>

            <div className="culture-marquee-section" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="culture-marquee-container">
                    <div className="culture-marquee-track">
                        <h1 className="marquee-text">MOVE FAST. BREAK THE FEED. GROW YOUR BRAND. OWN THE CULTURE.</h1>
                        <h1 className="marquee-text">MOVE FAST. BREAK THE FEED. GROW YOUR BRAND. OWN THE CULTURE.</h1>
                        <h1 className="marquee-text">MOVE FAST. BREAK THE FEED. GROW YOUR BRAND. OWN THE CULTURE.</h1>
                        <h1 className="marquee-text">MOVE FAST. BREAK THE FEED. GROW YOUR BRAND. OWN THE CULTURE.</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export const BrandsPage = () => (
    <motion.div {...pageTransition} className="page-wrapper" style={{ paddingBottom: 0 }}>
        <div className="container page-content text-center">
            <FaGlobe className="page-icon text-accent" />
            <h1 className="warp-title" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>For <span className="text-accent">Brands.</span></h1>
            <p className="warp-desc" style={{ margin: '0 auto' }}>Reach your audience with data-driven and creative campaigns.</p>
        </div>

        <div style={{ marginTop: '50px' }}>
            <BrandsMarqueeComponent />
        </div>

        <div className="container" style={{ paddingBottom: '100px' }}>
            <div className="features-grid" style={{ marginTop: '80px' }}>
                <div className="feature-card"><FaBullhorn className="text-accent" /><h3>Creative Strategy</h3><p>Campaigns that turn viewers into customers.</p></div>
                <div className="feature-card"><FaUsers className="text-accent" /><h3>Talent Access</h3><p>Direct access to our network of top creators.</p></div>
                <div className="feature-card"><FaCheckCircle className="text-accent" /><h3>Clear Reporting</h3><p>Real-time analytics and simple performance tracking.</p></div>
            </div>
        </div>
    </motion.div>
);

const ReelCard = ({ campaign }) => (
    <div className="reel-card-container">
        <div className="reel-card-header">
            <span className="holo-tag" style={{ display: 'inline-block', marginBottom: '8px' }}>{campaign.service}</span>
            <h3>{campaign.title}</h3>
        </div>
        <div className="reel-card-wrapper">
            <iframe 
                src={campaign.reelUrl}
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                allow="encrypted-media"
                title={campaign.title}
            ></iframe>
        </div>
    </div>
);

export const CampaignsPage = () => (
    <motion.div {...pageTransition} className="page-wrapper">
        <div className="container page-content">
            <div className="services-header text-center">
                <div className="speed-tag" style={{ margin: '0 auto 20px', display: 'inline-flex' }}><FaRocket /> OUR PORTFOLIO</div>
                <h1 className="warp-title">ALL CAMPAIGNS<span className="text-accent">.</span></h1>
                <p className="warp-desc" style={{ margin: '20px auto' }}>A collection of campaigns and content we have created.</p>
            </div>
            
            <div className="reel-grid">
                {campaignsData.map((p) => (
                    <motion.div 
                        key={p.id} 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        className="will-change-transform"
                        style={{ width: '100%' }}
                    >
                        <ReelCard campaign={p} />
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

export const ServiceDetailPage = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);
    
    if (!service) return <div className="page-wrapper container"><h1 className="warp-title">Service Not Found</h1></div>;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div {...pageTransition} className="page-wrapper">
            <div className="container page-content">
                <Link to="/" className="back-link"><FaArrowRight style={{ transform: 'rotate(180deg)' }} /> Back Home</Link>
                
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="service-detail-hero">
                    <div className="service-detail-icon">
                        {service.icon}
                    </div>
                    <h1 className="warp-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>{service.title}<span className="text-accent">.</span></h1>
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" animate="show" className="service-detail-body">
                    <motion.div variants={itemVariants} className="service-overview-card">
                        <h3>Service Overview</h3>
                        <p>{service.longDesc}</p>
                    </motion.div>

                    <motion.h3 variants={itemVariants} className="deliverables-title">What We Deliver</motion.h3>
                    
                    <motion.div className="deliverables-grid" variants={containerVariants}>
                        {service.details.map((item, i) => (
                            <motion.div key={i} variants={itemVariants} className="deliverable-item">
                                <FaCheckCircle className="text-accent" style={{ fontSize: '1.5rem' }} />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ marginTop: '80px', textAlign: 'center' }}>
                        <Link to="/contact">
                            <button className="btn btn-primary">
                                Start a Project <FaArrowRight style={{ marginLeft: '10px' }} />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export const ContactPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); setStatus(null);
        emailjs.sendForm("service_z3ntc38", "template_6n0go7s", form.current, "Cs9K_K2ZTTcVqMbe1")
            .then(() => { setLoading(false); setStatus('success'); e.target.reset(); }, () => { setLoading(false); setStatus('error'); });
    };

    return (
        <motion.div {...pageTransition} className="page-wrapper">
            <div className="container page-content">
                <div className="contact-grid">
                    <motion.div className="contact-form-col will-change-transform" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
                        <h2 className="form-title">Send a Message</h2>
                        <form ref={form} onSubmit={sendEmail} className="cool-form">
                            <div className="input-group"><input type="text" name="user_name" placeholder="Your Name" required /></div>
                            <div className="input-group"><input type="email" name="user_email" placeholder="Email Address" required /></div>
                            <div className="input-group">
                                <select name="user_type">
                                    <option value="Creator">I am a Creator</option>
                                    <option value="Brand">I represent a Brand</option>
                                    <option value="Fan">Just saying Hi</option>
                                </select>
                            </div>
                            <div className="input-group"><textarea name="message" placeholder="Tell us your vision..." rows="5" required></textarea></div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                                {loading ? 'SENDING...' : 'SEND IT'}
                                {!loading && <FaPaperPlane style={{ marginLeft: '10px' }} />}
                            </button>
                            {status === 'success' && (<p style={{ color: '#4ade80', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>Message sent successfully! 🚀</p>)}
                            {status === 'error' && (<p style={{ color: '#ef4444', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>Failed to send. Please try again. ⚠️</p>)}
                        </form>
                    </motion.div>
                    <motion.div className="contact-text-col will-change-transform" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}>
                        <div className="speed-tag"><FaBolt /> FAST RESPONSE TIME</div>
                        <h1 className="warp-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', lineHeight: 1.1, marginTop: '20px' }}>READY TO <br /><span className="text-accent">WORK TOGETHER?</span></h1>
                        <p className="warp-desc align-left" style={{ marginTop: '20px' }}>Whether you're a brand looking to grow or a creator ready to expand, we're here to help.</p>
                        <div className="contact-info-block">
                            <h3>EMAIL US DIRECTLY</h3>
                            <a href="mailto:thebrainrotmedia@gmail.com" className="text-accent link-underline">thebrainrotmedia@gmail.com</a>
                        </div>
                        <div className="contact-info-block">
                            <h3>HEADQUARTERS</h3>
                            <p style={{ color: '#888' }}>Noida, India</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export const PrivacyPolicyPage = () => {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

    return (
        <motion.div {...pageTransition} className="page-wrapper">
            <div className="container page-content" style={{ maxWidth: '900px' }}>
                <h1 className="warp-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '10px' }}>Data & Privacy <span className="text-accent">Protocol.</span></h1>
                <p className="warp-desc align-left" style={{ marginBottom: '50px' }}>Last updated: February 2026</p>

                <motion.div className="legal-content" variants={containerVariants} initial="hidden" animate="show">
                    {[
                        { title: "1. Information Collection", text: "As a marketing agency, we collect data necessary to facilitate partnerships between creators and brands. This includes contact details, brand briefs, creator analytics (audience demographics, engagement rates), and payment information required for contract execution." },
                        { title: "2. Platform APIs & Third-Party Data", text: "We utilize official APIs from platforms like YouTube, Instagram, and TikTok to gather performance metrics. We only access data authorized by the creator and use it exclusively for campaign reporting and talent matchmaking." },
                        { title: "3. How We Use Your Data", text: "Your information is used to curate campaign pitches, negotiate contracts, deliver performance reports to brand partners, and process payments. We use aggregated, anonymized data to analyze broader market trends." },
                        { title: "4. Data Sharing & Disclosure", text: "We do not sell your data. Information is only shared with involved parties in a specific campaign (e.g., sharing a creator's media kit with a prospective brand partner) or when legally required." },
                        { title: "5. Security Measures", text: "We employ industry-standard encryption and secure servers to protect sensitive documents, such as NDAs, unreleased campaign assets, and financial records, from unauthorized access." },
                        { title: "6. Your Rights & Control", text: "Creators and brands have the right to request access to, correction of, or deletion of their personal data from our active databases, subject to legal and contractual retention requirements." }
                    ].map((section, index) => (
                        <motion.div key={index} variants={itemVariants} className="legal-section">
                            <h3>{section.title}</h3>
                            <p>{section.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export const TermsConditionsPage = () => {
    const containerVariants = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

    return (
        <motion.div {...pageTransition} className="page-wrapper">
            <div className="container page-content" style={{ maxWidth: '900px' }}>
                <h1 className="warp-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '10px' }}>Agency Terms of <span className="text-accent">Engagement.</span></h1>
                <p className="warp-desc align-left" style={{ marginBottom: '50px' }}>Last updated: February 2026</p>

                <motion.div className="legal-content" variants={containerVariants} initial="hidden" animate="show">
                    {[
                        { title: "1. Scope of Services", text: "Brainrot Media provides influencer matchmaking, campaign management, talent representation, and strategy consulting. Specific deliverables, timelines, and compensation will be outlined in separate, legally binding Statements of Work (SOW) or talent contracts." },
                        { title: "2. Intellectual Property (IP)", text: "Unless explicitly stated in the campaign contract, creators retain ownership of their raw footage. Brands are granted a license to use the final approved deliverables for the duration and platforms specified in the agreement. Unauthorized whitelisting or ad-usage will incur additional fees." },
                        { title: "3. Confidentiality & NDAs", text: "Both brands and creators agree to maintain strict confidentiality regarding unreleased products, campaign concepts, compensation rates, and proprietary agency strategies. Breaches of confidentiality will result in immediate termination of services." },
                        { title: "4. Approvals & Revisions", text: "Campaigns typically include a set number of script and video revisions as outlined in the brief. Agency is not liable for delays caused by slow approval processes from the brand side. Reshoots outside the original brief scope will be billed separately." },
                        { title: "5. Payment Terms", text: "Standard agency payment terms are Net-30 from the date of invoice following successful campaign publication, unless a deposit structure is agreed upon. Late payments may be subject to a percentage fee." },
                        { title: "6. Limitation of Liability", text: "Brainrot Media acts as an intermediary and strategic partner. We are not liable for a creator's personal actions outside the scope of a campaign, nor can we guarantee specific sales conversions, as market reception varies." }
                    ].map((section, index) => (
                        <motion.div key={index} variants={itemVariants} className="legal-section">
                            <h3>{section.title}</h3>
                            <p>{section.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};