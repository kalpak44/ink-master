import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const CanvasBackground = () => {
    const canvasRef = useRef(null);
    const particlesRef = useRef(null);
    const rendererRef = useRef(null);
    const sceneRef = useRef(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight, true);
        renderer.setClearColor(0x000000, 1);
        rendererRef.current = renderer;

        // Scene & Camera
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Create particles once
        const createParticles = () => {
            const count = window.innerWidth < 640 ? 8000 : 20000;
            const positions = new Float32Array(count * 3);
            for (let i = 0; i < count; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 10;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            const material = new THREE.PointsMaterial({
                size: window.innerWidth < 640 ? 0.04 : 0.02,
                color: 0xffffff,
                opacity: 0.5,
                transparent: true,
                sizeAttenuation: true,
            });
            const points = new THREE.Points(geometry, material);
            scene.add(points);
            particlesRef.current = points;
        };

        createParticles();

        // Animation loop
        let frameId;
        const animate = () => {
            frameId = requestAnimationFrame(animate);
            const pts = particlesRef.current;
            if (pts) {
                pts.rotation.y += 0.0005;
                pts.rotation.x += 0.0003;
            }
            renderer.render(scene, camera);
        };
        animate();

        // Resize handler — update size and camera only
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight, true);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount: cancel animation and dispose resources
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(frameId);

            const pts = particlesRef.current;
            if (pts) {
                scene.remove(pts);
                pts.geometry.dispose();
                pts.material.dispose();
            }
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="bg-canvas"
            className="fixed top-0 left-0 w-screen h-screen -z-99 blur-sm"
        />
    );
};
