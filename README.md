# Brainrot Media 🚀

A high-performance, immersive marketing agency website built to capture attention. This project features interactive 3D backgrounds, smooth scroll animations, and a highly modular React architecture.

## 💻 Tech Stack

* **Framework:** [React 18](https://react.dev/) powered by [Vite](https://vitejs.dev/)
* **3D Graphics:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Routing:** [React Router v6](https://reactrouter.com/)
* **Forms:** [EmailJS](https://www.emailjs.com/)
* **Styling:** Custom CSS with modern variables and flex/grid layouts

## 📂 Project Structure

The repository is organized for scalability and clean separation of concerns:

```text
brainrot-media/
├── public/                 # Static assets (images, logos, creators)
│   ├── brands/
│   ├── creators/
│   └── founder.jpg
├── src/
│   ├── components/         # Reusable UI & 3D components
│   │   ├── BrandsMarquee.jsx
│   │   ├── CanvasBackground.jsx
│   │   ├── Counter.jsx
│   │   └── Navigation.jsx  # Navbar & Footer
│   ├── data/               # Static data arrays and configurations
│   │   └── constants.jsx
│   ├── pages/              # Individual route views
│   │   ├── Home.jsx
│   │   └── SecondaryPages.jsx
│   ├── utils/              # Helper functions and animation configs
│   │   └── animations.js
│   ├── App.css             # Global styles and component styling
│   ├── App.jsx             # Main application layout and routing
│   ├── index.css           # CSS resets
│   └── main.jsx            # React entry point
├── index.html
├── package.json
└── vite.config.js