import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';

const StarField = () => {
    const ref = useRef();
    const [sphere] = useState(() => {
        const count = 1000; 
        const points = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 10 + Math.random() * 50;
            const theta = 2 * Math.PI * Math.random();
            points[i * 3] = r * Math.cos(theta);
            points[i * 3 + 1] = r * Math.sin(theta);
            points[i * 3 + 2] = (Math.random() * 300) - 150;
        }
        return points;
    });

    useFrame((state, delta) => {
        if (!ref.current || !ref.current.geometry || !ref.current.geometry.attributes.position) return;
        ref.current.rotation.z += delta * 0.05;
        const positions = ref.current.geometry.attributes.position.array;
        for (let i = 2; i < positions.length; i += 3) {
            positions[i] += delta * 35;
            if (positions[i] > 50) {
                positions[i] = -200;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
                <PointMaterial transparent color="#F4BBF1" size={0.15} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
            </Points>
        </group>
    );
};

const SpeedGrid = () => {
    const gridRef = useRef();
    useFrame((state, delta) => {
        if (!gridRef.current) return;
        gridRef.current.position.z += delta * 12;
        if (gridRef.current.position.z > 10) {
            gridRef.current.position.z = 0;
        }
    });
    return (
        <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]}>
            <planeGeometry args={[100, 200, 15, 15]} />
            <meshBasicMaterial color="#a020f0" wireframe transparent opacity={0.1} />
        </mesh>
    );
};

const FloatingElements = () => {
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[10, 5, -10]} rotation={[0, 0.5, 0]}>
                    <torusGeometry args={[1.5, 0.4, 12, 24]} />
                    <meshStandardMaterial color="#F4BBF1" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
                <mesh position={[-12, -5, -15]} rotation={[1, 0, 0.5]}>
                    <octahedronGeometry args={[2]} />
                    <meshStandardMaterial color="#00d2ff" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="canvas-container">
            <Canvas 
                camera={{ position: [0, 0, 15], fov: 60 }} 
                gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
                dpr={[1, 1.5]}
                performance={{ min: 0.5 }}
            >
                <Suspense fallback={null}>
                    <fog attach="fog" args={['#050505', 5, 60]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <StarField />
                    <SpeedGrid />
                    <FloatingElements />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Background3D;