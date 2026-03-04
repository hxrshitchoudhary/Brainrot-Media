import React from 'react';
import { FaBullhorn, FaUsers, FaRocket, FaFingerprint } from 'react-icons/fa';

export const servicesData = [
    {
        id: "influencer-marketing",
        title: "Influencer Marketing",
        desc: "End-to-end campaigns that resonate. We connect your brand with the right audience.",
        longDesc: "Our marketing approach isn't just about paying for posts. We use data-driven insights to match your brand with creators who actually bring results. From creating the initial brief to managing contracts and reporting on performance, we handle the entire process for you.",
        details: ["Campaign Strategy", "Creator Vetting", "Contract Management", "Performance Analytics", "Cross-Platform Planning"],
        icon: <FaBullhorn />,
        color: "#a020f0",
        tags: ["Strategy", "Campaigns", "Analytics"]
    },
    {
        id: "talent-management",
        title: "Talent Management",
        desc: "Contract negotiation, legal protection, and career guidance. We handle the hard work.",
        longDesc: "We treat creators like growing businesses. Our management team provides support with legal documents, overall well-being, and long-term career planning. We help you move beyond basic ad revenue into long-term brand partnerships and owning your own products.",
        details: ["Legal & Contracts", "Career Guidance", "Brand Outreach", "Issue Management", "Financial Planning"],
        icon: <FaUsers />,
        color: "#F4BBF1",
        tags: ["Representation", "Legal", "Growth"]
    },
    {
        id: "creator-products",
        title: "Creator Products",
        desc: "Merchandise design, digital products, and building your own standalone brand.",
        longDesc: "Don't just rely on an audience on a social app, build your own loyal customer base. We help creators build independent brands. Whether it's a high-quality merchandise line or a digital product, our design and development teams help bring your ideas to life.",
        details: ["Product Design", "Supply Chain", "Online Store Setup", "Customer Support", "Global Shipping"],
        icon: <FaRocket />,
        color: "#00d2ff",
        tags: ["Merch", "Products", "Ecommerce"]
    },
    {
        id: "personal-branding",
        title: "Personal Branding",
        desc: "Visual identity design, public relations, and building your authority in your niche.",
        longDesc: "Your reputation is everything. We refine how you look and sound across all platforms, ensuring you come across as professional and consistent. Our public relations team works to get you featured in major publications and podcasts to grow your reach.",
        details: ["Visual Identity", "PR & Media", "Content Strategy", "Website Creation", "Media Kits"],
        icon: <FaFingerprint />,
        color: "#ff0055",
        tags: ["Identity", "PR", "Authority"]
    }
];

export const campaignsData = [
    { id: 1, title: "Neon Energy Drink", service: "Influencer Marketing", reelUrl: "https://www.instagram.com/reel/C9_k-M9o1Zp/embed" },
    { id: 2, title: "Cyberpunk 2077 Launch", service: "Talent Management", reelUrl: "https://www.instagram.com/reel/C-Xk3s3oK-V/embed" },
    { id: 3, title: "Vapor Wave Apparel", service: "Creator Products", reelUrl: "https://www.instagram.com/p/C_BqL2toA2M/embed" },
    { id: 4, title: "TechTalk Summit", service: "Personal Branding", reelUrl: "https://www.instagram.com/reel/C-Yl0gAIfcE/embed" },
    { id: 5, title: "Crypto Exchange App", service: "Influencer Marketing", reelUrl: "https://www.instagram.com/reel/DAA0L2ZogXn/embed" },
    { id: 6, title: "Skincare Glow Up", service: "Talent Management", reelUrl: "https://www.instagram.com/p/DAA0L2ZogXn/embed" },
];

export const creatorsData = [
    { id: 1, name: "Lakshay Chaudhary", img: "/creators/lakshay.jpg", },
    { id: 2, name: "EzSnippet", img: "/creators/ezsnippet.jpg", insta: "#" },
    { id: 3, name: "Sanyam Sharma", img: "/creators/sharmaji.jpg", insta: "#" },
    { id: 4, name: "Karan Sehgal", img: "/creators/karansehgal.jpg", insta: "#" },
    { id: 5, name: "Devansh Kaushik", img: "/creators/devanshkaushik.jpg", insta: "#" },
    { id: 6, name: "Shreya Mahendru", img: "/creators/shreya.jpg", insta: "#" },
    { id: 7, name: "Dr Rakshita SIngh", img: "/creators/drrakshita.jpg", insta: "#" },
    { id: 9, name: "Rachit Singh", img: "/creators/rachitsingh.jpg", insta: "#" },
    { id: 10, name: "Lakshay Chaudhari ", img: "/creators/lakshaychaudhari.jpg", insta: "#" },
    { id: 11, name: "Prakhar Gupta", img: "/creators/prakhargupta.jpg", insta: "#" },
    { id: 12, name: "Saurabh Ghadke", img: "/creators/saurabh.jpg", insta: "#" },
    { id: 13, name: "Sukrit Sindhu", img: "/creators/sukrit.jpg", insta: "#" },
    { id: 14, name: "Player Shaan", img: "/creators/playershaan.jpg", insta: "#" },
    { id: 15, name: "Vikanshu", img: "/creators/vikanshuh.jpg", insta: "#" },
    { id: 16, name: "Nitin Joshi", img: "/creators/nitinjoshi.jpg", insta: "#" },
    { id: 18, name: "Hard Toonz", img: "/creators/hardtoonz.jpg", insta: "#" },
];

export const brandsList = [
    { name: "Godrej", img: "/brands/godrej.jpg" },
    { name: "Swiggy", img: "/brands/swiggy.jpg" },
    { name: "Upliance", img: "/brands/upliance.jpg" },
    { name: "Growth School", img: "/brands/growthschool.jpg" },
    { name: "Masai", img: "/brands/masai.jpg" },
    { name: "Poco", img: "/brands/poco.jpg" },
    { name: "Flipkart", img: "/brands/flipkart.jpg" },
    { name: "Amazon", img: "/brands/amazon.jpg" },
    { name: "Michelin", img: "/brands/michelin.jpg" },
    { name: "ITC", img: "/brands/itc.jpg" },
    { name: "Lenskart", img: "/brands/lenskart.jpg" }
];