import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveBackground3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    
    // Smooth camera perspective
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Generate a glowing round texture for particles
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.2, "rgba(197, 160, 89, 1)"); // Gold
        gradient.addColorStop(0.6, "rgba(31, 77, 58, 0.2)"); // Forest Muted
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    // 3. Create particles
    const particleCount = window.innerWidth < 768 ? 45 : 90; // Fewer particles on mobile for performance
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const basePositions: { x: number; y: number; z: number }[] = [];

    // Spread particles in a 3D box
    const range = 120;
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * range * 1.5;
      const y = (Math.random() - 0.5) * range;
      const z = (Math.random() - 0.5) * range;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      basePositions.push({ x, y, z });

      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.08,
      });
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 4 : 5.5,
      map: particleTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // 4. Set up line segments for constellation connections
    const maxConnections = particleCount * 4;
    const linePositions = new Float32Array(maxConnections * 2 * 3); // 2 points per line, 3 coords each
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 5. Light settings
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xc5a059, 1.2);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // 6. Mouse Interaction Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 25;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Handle Resize using ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        const w = newWidth || container.clientWidth;
        const h = newHeight || container.clientHeight;

        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    });
    resizeObserver.observe(container);

    // 8. Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse parallax interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate particle system slightly
      particleSystem.rotation.y = mouse.x * 0.015 + 0.002 * performance.now() * 0.01;
      particleSystem.rotation.x = mouse.y * 0.015;

      lineSegments.rotation.y = particleSystem.rotation.y;
      lineSegments.rotation.x = particleSystem.rotation.x;

      // Move individual particles gently
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const positionsArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        positionsArray[i * 3] += velocities[i].x;
        positionsArray[i * 3 + 1] += velocities[i].y;
        positionsArray[i * 3 + 2] += velocities[i].z;

        // Bounce back if they wander out of limits
        const limitX = range * 0.8;
        const limitY = range * 0.55;
        const limitZ = range * 0.55;

        if (Math.abs(positionsArray[i * 3]) > limitX) velocities[i].x *= -1;
        if (Math.abs(positionsArray[i * 3 + 1]) > limitY) velocities[i].y *= -1;
        if (Math.abs(positionsArray[i * 3 + 2]) > limitZ) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update lines based on proximity
      let lineIndex = 0;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const linePositionsArray = linePosAttr.array as Float32Array;
      const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
      const lineColorsArray = lineColAttr.array as Float32Array;

      // Proximity threshold for connecting lines
      const connectDist = window.innerWidth < 768 ? 22 : 28;

      for (let i = 0; i < particleCount; i++) {
        const x1 = positionsArray[i * 3];
        const y1 = positionsArray[i * 3 + 1];
        const z1 = positionsArray[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positionsArray[j * 3];
          const y2 = positionsArray[j * 3 + 1];
          const z2 = positionsArray[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDist && lineIndex < maxConnections) {
            // Add Line Vertex A
            linePositionsArray[lineIndex * 6] = x1;
            linePositionsArray[lineIndex * 6 + 1] = y1;
            linePositionsArray[lineIndex * 6 + 2] = z1;

            // Add Line Vertex B
            linePositionsArray[lineIndex * 6 + 3] = x2;
            linePositionsArray[lineIndex * 6 + 4] = y2;
            linePositionsArray[lineIndex * 6 + 5] = z2;

            // Fade intensity based on distance
            const alpha = 1 - dist / connectDist;
            
            // Gold line coloring
            lineColorsArray[lineIndex * 6] = 0.77 * alpha; // R
            lineColorsArray[lineIndex * 6 + 1] = 0.63 * alpha; // G
            lineColorsArray[lineIndex * 6 + 2] = 0.35 * alpha; // B

            lineColorsArray[lineIndex * 6 + 3] = 0.77 * alpha;
            lineColorsArray[lineIndex * 6 + 4] = 0.63 * alpha;
            lineColorsArray[lineIndex * 6 + 5] = 0.35 * alpha;

            lineIndex++;
          }
        }
      }

      // Reset remaining line coordinates to 0 to prevent render artifacts
      for (let k = lineIndex; k < maxConnections; k++) {
        linePositionsArray[k * 6] = 0;
        linePositionsArray[k * 6 + 1] = 0;
        linePositionsArray[k * 6 + 2] = 0;
        linePositionsArray[k * 6 + 3] = 0;
        linePositionsArray[k * 6 + 4] = 0;
        linePositionsArray[k * 6 + 5] = 0;
      }

      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-transparent"
      id="3d-interactive-bg"
    />
  );
}
