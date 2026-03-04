import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';

const Counter = ({ from = 0, to, suffix = "", duration = 2.5 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
    
    useEffect(() => {
        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: duration,
                ease: [0.25, 0.1, 0.25, 1],
                onUpdate: (value) => { node.textContent = Math.floor(value) + suffix; },
            });
            return () => controls.stop();
        }
    }, [isInView, from, to, suffix, duration]);
    
    return <span ref={nodeRef} className="counter-text">0</span>;
};

export default Counter;