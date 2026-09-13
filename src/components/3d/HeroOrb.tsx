'use client';

import React, { useRef, Suspense, useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('WebGL initialization failed, falling back to CSS canvas orb:', error.message);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function FallbackOrb() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center relative">
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
        {/* Animated outer morphing aura */}
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8f135 0%, rgba(200, 241, 53, 0.1) 70%, transparent 100%)' }}
        />
        {/* Organic CSS rotating gradient sphere */}
        <div
          className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-[#c8f135]/40 shadow-[0_0_50px_rgba(200,241,53,0.3)] relative overflow-hidden"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #e2fa7a 0%, #c8f135 40%, #5d7506 85%, #080808 100%)',
            animation: 'floatOrb 6s ease-in-out infinite alternate',
          }}
        >
          {/* Internal specular highlight */}
          <div className="absolute top-4 left-6 w-16 h-10 rounded-full bg-white/40 blur-md transform -rotate-12" />
        </div>
      </div>
      <style>{`
        @keyframes floatOrb {
          0% { transform: translateY(0) scale(1) rotate(0deg); border-radius: 50%; }
          50% { transform: translateY(-10px) scale(1.04) rotate(180deg); border-radius: 46% 54% 52% 48% / 48% 46% 54% 52%; }
          100% { transform: translateY(0) scale(1) rotate(360deg); border-radius: 50%; }
        }
      `}</style>
    </div>
  );
}

function OrbMesh({ color = '#c8f135' }: { color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<any>(null);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current || !matRef.current) return;
    const t = clock.getElapsedTime();

    meshRef.current.rotation.y = t * 0.12 + pointer.x * 0.25;
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.15 + pointer.y * 0.2;

    const morph = 0.08;
    meshRef.current.scale.set(
      1 + Math.sin(t * 0.9) * morph,
      1 + Math.cos(t * 1.1) * morph,
      1 + Math.sin(t * 1.3) * morph
    );

    matRef.current.distort = 0.32 + Math.sin(t * 0.8) * 0.12;
  });

  return (
    <Sphere ref={meshRef} args={[1.3, 64, 64]}>
      <MeshDistortMaterial
        ref={matRef}
        color={color}
        roughness={0.25}
        metalness={0.7}
        speed={1.6}
        distort={0.35}
      />
    </Sphere>
  );
}

export default function HeroOrb({ color = '#c8f135' }: { color?: string }) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (hasWebGL === false) {
    return <FallbackOrb />;
  }

  if (hasWebGL === null) {
    return <div className="w-full h-full min-h-[300px]" />;
  }

  return (
    <WebGLErrorBoundary fallback={<FallbackOrb />}>
      <div className="w-full h-full min-h-[300px] sm:min-h-[380px] flex items-center justify-center relative select-none pointer-events-auto">
        <div
          className="absolute w-56 h-56 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c8f135 0%, transparent 70%)' }}
        />
        <Canvas
          camera={{ position: [0, 0, 3.8], fov: 48 }}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 5, 4]} intensity={1.4} color="#ffffff" />
            <directionalLight position={[-4, -3, -2]} intensity={0.6} color="#c8f135" />
            <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
              <OrbMesh color={color} />
            </Float>
          </Suspense>
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
