import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function SceneCanvas({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }) {
  const containerRef = useRef(null);
  const stateRef = useRef({
    scrollProgress: 0,
    mouse: { x: 0, y: 0 },
    targetMouse: { x: 0, y: 0 },
  });

  useEffect(() => {
    stateRef.current.scrollProgress = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    stateRef.current.targetMouse = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization failed, using fallback:', e);
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040404, 0.0014);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 2800);
    camera.position.set(0, 0, 120);

    // ==========================================
    // 1. 3D ATMOSPHERIC STARFIELD & DUST PARTICLES
    // ==========================================
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorWhite = new THREE.Color(0xffffff);
    const colorRed = new THREE.Color(0xff3344);
    const colorDarkRed = new THREE.Color(0x880015);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 700;
      positions[i3 + 1] = (Math.random() - 0.5) * 850 - 100;
      positions[i3 + 2] = Math.random() * 200 - Math.random() * 2500;

      const mixedColor = Math.random() > 0.7 ? (Math.random() > 0.5 ? colorRed : colorDarkRed) : colorWhite;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 2.8 + 0.6;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float scale;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vDepth;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (280.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          vDepth = -mvPosition.z;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vDepth;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.05, dist) * 0.8;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ==========================================
    // 2. SCENE 02: SPATIAL TECH MATRIX GRID & NODES
    // ==========================================
    const gridHelper = new THREE.GridHelper(600, 30, 0xff3344, 0x222222);
    gridHelper.position.set(0, -60, -350);
    gridHelper.material.opacity = 0.22;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Spatial node group
    const nodeGroup = new THREE.Group();
    const nodeGeo = new THREE.BoxGeometry(4, 4, 4);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0xff3344,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        (Math.random() - 0.5) * 320,
        (Math.random() - 0.5) * 160 - 40,
        -150 - i * 30
      );
      nodeGroup.add(node);
    }
    scene.add(nodeGroup);

    // ==========================================
    // 3. SCENE 03: CONCENTRIC CHRONO MECHANICAL RINGS
    // ==========================================
    const chronoGroup = new THREE.Group();
    chronoGroup.position.set(0, -120, -1050);

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff3344,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22,
      wireframe: true,
    });
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x555555,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });

    const chronoRing1 = new THREE.Mesh(new THREE.RingGeometry(95, 97, 48), ringMat1);
    const chronoRing2 = new THREE.Mesh(new THREE.RingGeometry(135, 136.5, 64), ringMat2);
    const chronoRing3 = new THREE.Mesh(new THREE.RingGeometry(175, 176.5, 64), ringMat1);

    chronoGroup.add(chronoRing1);
    chronoGroup.add(chronoRing2);
    chronoGroup.add(chronoRing3);
    scene.add(chronoGroup);

    // ==========================================
    // 4. SCENE 04: SPATIAL GALLERY 3D RECTANGLES
    // ==========================================
    const galleryGroup = new THREE.Group();
    galleryGroup.position.set(0, -180, -1850);

    const frameGeo = new THREE.PlaneGeometry(160, 90);
    const frameMat = new THREE.MeshBasicMaterial({
      color: 0xff3344,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });

    for (let i = 0; i < 4; i++) {
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.set(0, 0, (i - 1.5) * 220);
      galleryGroup.add(frame);
    }
    scene.add(galleryGroup);

    // ==========================================
    // 5. AMBIENT VOLUMETRIC RED RIM LIGHTS
    // ==========================================
    const ambientGlowGeo = new THREE.SphereGeometry(65, 16, 16);
    const ambientGlowMat = new THREE.MeshBasicMaterial({
      color: 0x990014,
      transparent: true,
      opacity: 0.07,
      wireframe: true,
    });
    const ambientGlow = new THREE.Mesh(ambientGlowGeo, ambientGlowMat);
    ambientGlow.position.set(40, -40, -50);
    scene.add(ambientGlow);

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      const elapsedTime = clock.getElapsedTime();

      // Direct, smooth mouse tracking
      stateRef.current.mouse.x += (stateRef.current.targetMouse.x - stateRef.current.mouse.x) * 0.08;
      stateRef.current.mouse.y += (stateRef.current.targetMouse.y - stateRef.current.mouse.y) * 0.08;

      const p = stateRef.current.scrollProgress;
      const mx = stateRef.current.mouse.x;
      const my = stateRef.current.mouse.y;

      // Silky smooth virtual camera trajectory without compounding input lag
      const targetCamZ = 120 - p * 2300;
      const targetCamY = -p * 220;
      const targetCamX = Math.sin(p * Math.PI * 2.5) * 16;

      camera.position.z += (targetCamZ - camera.position.z) * 0.12;
      camera.position.y += (targetCamY - camera.position.y) * 0.12;
      camera.position.x += (targetCamX - camera.position.x) * 0.12;

      // Mouse orbit influence
      camera.position.x += mx * 5;
      camera.position.y += -my * 5;
      camera.lookAt(
        camera.position.x * 0.25,
        camera.position.y - 12,
        camera.position.z - 160
      );

      // Rotate particles subtly
      particles.rotation.y = elapsedTime * 0.01 + p * 0.6;

      // Rotate Tech nodes
      nodeGroup.children.forEach((n, idx) => {
        n.rotation.x = elapsedTime * 0.25 + idx;
        n.rotation.y = elapsedTime * 0.2 + idx;
      });

      // Rotate Chrono mechanical rings
      chronoRing1.rotation.z = elapsedTime * 0.2 + p * 3;
      chronoRing2.rotation.z = -elapsedTime * 0.15 - p * 2.5;
      chronoRing3.rotation.z = elapsedTime * 0.1 + p * 3.5;

      renderer.render(scene, camera);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="scene-canvas-container"
      aria-hidden="true"
    />
  );
}
