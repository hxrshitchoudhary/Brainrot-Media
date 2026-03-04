import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { FaBolt, FaArrowCircleRight, FaUsers, FaArrowRight, FaGlobe, FaHandshake, FaBullhorn } from 'react-icons/fa';
import { servicesData, creatorsData } from '../data/constants';
import { pageTransition, smoothTransition } from '../utils/animations';
import Counter from '../components/Counter';
import BrandsMarqueeComponent from '../components/BrandsMarquee';

const HeroSection = () => (
    <section className="hero-warp hero-centered">
        <div className="hero-bg-glow-left"></div>
        <div className="hero-bg-glow-right"></div>
        <motion.div className="container hero-center-content" initial="hidden" animate="visible">
            <motion.div className="speed-tag center-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <FaBolt /> POWERING THE NEXT GENERATION
            </motion.div>
            <div className="hero-titles-wrapper">
                <motion.h1 className="warp-title hero-text-small" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}>
                    ACCELERATING
                </motion.h1>
                <motion.h1 className="warp-title hero-text-large video-text-mask" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
                    INFLUENCE
                </motion.h1>
            </div>
            <motion.p className="warp-desc center-desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                We don't just manage talent. We help you grow. Brainrot Media is the launchpad for creators who want to stand out and build a real business.
            </motion.p>
            <motion.div className="warp-btns center-btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                <Link to="/contact"><button className="btn btn-primary">Let's Connect <FaArrowCircleRight style={{ marginLeft: '11px' }} /></button></Link>
                <Link to="/about"><button className="btn btn-outline">Our Story</button></Link>
            </motion.div>
        </motion.div>
    </section>
);

const IdentitySection = () => {
    const text = "UNLOCK THE POWER OF INFLUENCE WITH OUR DIVERSE NETWORK OF CREATORS, CONNECTING YOUR BRAND TO THE CULTURE.";
    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
    };

    return (
        <section className="scroll-reveal-section">
            <div className="container">
                <div className="scroll-reveal-speed-tag">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        className="speed-tag"
                    >
                        <FaBolt /> THE STRATEGY
                    </motion.div>
                </div>
                <motion.h2 
                    className="scroll-reveal-text"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {words.map((word, i) => (
                        <motion.span 
                            key={i} 
                            variants={wordVariants} 
                            style={{ display: 'inline-block', marginRight: '0.25em', willChange: 'transform, opacity, filter' }}
                        >
                            {word === "INFLUENCE" || word === "CULTURE." ? (
                                <span className="text-accent">{word}</span>
                            ) : (
                                word
                            )}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>
        </section>
    );
};

const TalentMatrixItem = ({ creator }) => (
    <div className="talent-matrix-item">
        <img 
            src={creator.img} 
            alt={creator.name} 
            className="talent-matrix-img" 
            onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.parentElement.classList.add('fallback-bg'); 
            }} 
        />
        <div className="talent-matrix-overlay">
            <h3 className="talent-matrix-name">{creator.name}</h3>
        </div>
    </div>
);

const TalentMatrixSection = () => {
    const col1 = creatorsData.slice(0, 6);
    const col2 = creatorsData.slice(6, 12);
    const col3 = creatorsData.slice(12, 18);
    const col4 = creatorsData.slice(18, 24);

    return (
        <section className="talent-matrix-section">
            <div className="container text-center" style={{ marginBottom: '40px' }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="speed-tag" style={{ margin: '0 auto 20px', display: 'inline-flex' }}>
                    <FaUsers /> THE TALENT
                </motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title" style={{ marginBottom: 0 }}>
                    CREATORS WE'VE <span className="text-accent">WORKED WITH.</span>
                </motion.h2>
            </div>
            
            <div className="talent-matrix-wrapper">
                <div className="talent-matrix-container">
                    <div className="talent-col scroll-up">
                        {col1.map((c) => <TalentMatrixItem key={c.id} creator={c} />)}
                        {col1.map((c) => <TalentMatrixItem key={`dup-${c.id}`} creator={c} />)}
                    </div>
                    <div className="talent-col scroll-down">
                        {col2.map((c) => <TalentMatrixItem key={c.id} creator={c} />)}
                        {col2.map((c) => <TalentMatrixItem key={`dup-${c.id}`} creator={c} />)}
                    </div>
                    <div className="talent-col scroll-up">
                        {col3.map((c) => <TalentMatrixItem key={c.id} creator={c} />)}
                        {col3.map((c) => <TalentMatrixItem key={`dup-${c.id}`} creator={c} />)}
                    </div>
                    <div className="talent-col scroll-down">
                        {col4.map((c) => <TalentMatrixItem key={c.id} creator={c} />)}
                        {col4.map((c) => <TalentMatrixItem key={`dup-${c.id}`} creator={c} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }, [mouseX, mouseY]);

    return (
        <motion.div 
            className="service-card will-change-transform" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "0px" }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            onMouseMove={handleMouseMove}
        >
            <motion.div className="card-spotlight" style={{ background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(244, 187, 241, 0.15), transparent 80%)` }} />
            <motion.div className="card-border-glow" style={{ background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(244, 187, 241, 0.6), transparent 80%)` }} />
            <div className="card-content">
                <div className="service-icon-wrapper">
                    {service.icon}
                    <div className="icon-blur" style={{ background: service.color }}></div>
                </div>
                <h3 className="service-title"><span className="service-num">0{index + 1}.</span> {service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-tags">{service.tags.map((tag, i) => <span key={i} className="service-tag">{tag}</span>)}</div>
                <div className="service-btn-wrapper">
                    <Link to={`/service/${service.id}`} style={{ textDecoration: 'none' }}>
                        <button className="btn-solid-anim">Know More <FaArrowRight className="btn-arrow" /></button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const ServicesSection = () => (
    <section className="services-section">
        <div className="container">
            <div className="services-header text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="speed-tag" style={{ margin: '0 auto 20px', display: 'inline-flex' }}><FaBolt /> WHAT WE DO</motion.div>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">FROM IDEA TO <span className="text-accent">IMPACT.</span></motion.h2>
            </div>
            <div className="services-grid">
                {servicesData.map((s, index) => <ServiceCard key={index} service={s} index={index} />)}
            </div>
        </div>
    </section>
);

const ImpactStats = () => {
    return (
        <section className="impact-bento-section">
            <div className="impact-bento-glow"></div>
            <div className="container relative z-10">
                <div className="stats-header text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="speed-tag" style={{ margin: '0 auto 20px', display: 'inline-flex' }}><FaBolt /> OUR IMPACT</motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={smoothTransition} className="section-title">GLOBAL <span className="text-accent">REACH.</span></motion.h2>
                </div>
                
                <div className="bento-grid">
                    <motion.div className="bento-box bento-large" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <div className="bento-icon"><FaGlobe /></div>
                        <div className="bento-content">
                            <h3 className="bento-number"><Counter from={0} to={120} suffix="M+" /></h3>
                            <p className="bento-label">Total Views Generated</p>
                        </div>
                        <div className="bento-bg-gradient color-blue"></div>
                    </motion.div>

                    <motion.div className="bento-box bento-tall" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <div className="bento-icon"><FaHandshake /></div>
                        <div className="bento-content">
                            <h3 className="bento-number"><Counter from={0} to={20} suffix="+" /></h3>
                            <p className="bento-label">Brand Partners</p>
                        </div>
                        <div className="bento-bg-gradient color-pink"></div>
                    </motion.div>

                    <motion.div className="bento-box bento-small" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="bento-icon"><FaBullhorn /></div>
                        <div className="bento-content">
                            <h3 className="bento-number"><Counter from={0} to={25} suffix="+" /></h3>
                            <p className="bento-label">Campaigns Launched</p>
                        </div>
                        <div className="bento-bg-gradient color-purple"></div>
                    </motion.div>

                    <motion.div className="bento-box bento-small" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <div className="bento-icon"><FaUsers /></div>
                        <div className="bento-content">
                            <h3 className="bento-number"><Counter from={0} to={2} suffix="+" /></h3>
                            <p className="bento-label">Creators Managed</p>
                        </div>
                        <div className="bento-bg-gradient color-green"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const WorkCard = ({ p }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);
    const glareX = useTransform(x, [-150, 150], [0, 100]);
    const glareY = useTransform(y, [-150, 150], [0, 100]);

    const handleMouse = useCallback((event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }, [x, y]);
    
    const handleReset = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

    const isImageFile = p.img.includes('/') || p.img.includes('.');
    const bgStyle = isImageFile ? { backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { background: p.img };

    return (
        <motion.div className="holo-card-wrapper" style={{ perspective: 1000 }} onMouseMove={handleMouse} onMouseLeave={handleReset}>
            <motion.div className="holo-card-inner will-change-transform" style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                <div className="holo-bg" style={bgStyle}></div>
                <div className="holo-grid-texture"></div>
                <motion.div className="holo-glare" style={{ background: useTransform([glareX, glareY], ([latestX, latestY]) => `radial-gradient(circle at ${latestX}% ${latestY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`) }} />
                <div className="holo-content" style={{ transform: "translateZ(40px)" }}>
                    <div className="holo-top"><span className="holo-tag">{p.cat}</span><FaBolt className="holo-icon-corner" /></div>
                    <div className="holo-bottom">
                        <h3 className="holo-title">{p.title}</h3>
                        <div className="holo-meta"><span>{p.date || '2026'}</span><div className="holo-line"></div><span>CASE STUDY</span></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const WorkSection = () => {
    const projects = [
        { id: 1, title: "Neon Energy", cat: "CAMPAIGN", img: "/campaign1.jpg" },
        { id: 2, title: "Cyber Launch", cat: "PRODUCTION", img: "/campaign2.jpg" },
        { id: 3, title: "Vapor Wave", cat: "SOCIAL", img: "/campaign3.jpg" },
    ];
    const containerVars = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVars = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0, transition: smoothTransition } };
    
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title text-center">Selected <span className="text-accent">Work</span></h2>
                <motion.div className="work-grid" variants={containerVars} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
                    {projects.map((p) => (<motion.div key={p.id} variants={itemVars} className="will-change-transform"><WorkCard p={p} /></motion.div>))}
                </motion.div>
                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <Link to="/campaigns"><button className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '1rem' }}>View All Campaigns <FaArrowRight style={{ marginLeft: '10px' }} /></button></Link>
                </div>
            </div>
        </section>
    );
};

const HomePage = () => (
    <motion.div {...pageTransition}>
        <HeroSection />
        <IdentitySection />
        <TalentMatrixSection /> 
        <BrandsMarqueeComponent />
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <Link to="/brands">
                <button className="btn btn-outline" style={{ padding: '12px 32px', fontSize: '0.9rem' }}>
                    View All Brands <FaArrowRight style={{ marginLeft: '10px' }} />
                </button>
            </Link>
        </div>

        <ImpactStats />
        <WorkSection />
        <ServicesSection />
    </motion.div>
);

export default HomePage;