import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import { profileData } from '../../data/profile';

export function Hero() {
  const root = useRef(null);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Initial state
      tl.set('.hero-video-wrapper', { opacity: 0, scale: 1.08, filter: 'brightness(0.3) contrast(1.1)' })
        .set('.hero-word span', { yPercent: 120, opacity: 0, rotateX: -30 })
        .set('.hero-top-tag', { opacity: 0, y: -15 })
        .set('.hero-role-display', { opacity: 0, y: 25 })
        .set('.hero-meta-col', { opacity: 0, y: 20 })
        .set('.hero-scroll-indicator', { opacity: 0, y: 15 })
        .set('.hero-ambient-glow', { opacity: 0, scale: 0.8 });

      // Sequence Choreography
      tl.to('.hero-ambient-glow', { opacity: 0.65, scale: 1, duration: 2.2 }, 0.3)
        .to('.hero-video-wrapper', { opacity: 1, filter: 'brightness(0.82) contrast(1.08)', duration: 1.8 }, 0.8)
        .to('.hero-video-wrapper', { scale: 1, duration: 4.8, ease: 'power2.out' }, 0.8)
        .to('.hero-word span', {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.06,
          duration: 1.2,
          ease: 'power4.out'
        }, 1.6)
        .to('.hero-top-tag', { opacity: 1, y: 0, duration: 0.8 }, 2.2)
        .to('.hero-role-display', { opacity: 1, y: 0, duration: 0.9 }, 2.4)
        .to('.hero-meta-col', { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }, 2.6)
        .to('.hero-scroll-indicator', { opacity: 1, y: 0, duration: 0.8 }, 3.0);

      // Smooth mouse parallax
      const onMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        gsap.to('.hero-video-wrapper', {
          x: x * 18,
          y: y * 12,
          duration: 1.4,
          ease: 'power3.out'
        });

        gsap.to('.hero-word', {
          x: x * -14,
          y: y * -10,
          duration: 1.6,
          ease: 'power3.out'
        });

        gsap.to('.hero-ambient-glow', {
          x: x * 35,
          y: y * 25,
          duration: 2.0,
          ease: 'power3.out'
        });

        gsap.to('.hero-meta-container', {
          x: x * 8,
          y: y * 6,
          duration: 1.2,
          ease: 'power3.out'
        });
      };

      window.addEventListener('pointermove', onMouseMove, { passive: true });
      return () => window.removeEventListener('pointermove', onMouseMove);
    }, root);

    return () => ctx.revert();
  }, []);

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.warn('Hero video fallback engaged');
    setVideoFailed(true);
  };

  return (
    <section id="hero" ref={root} className="hero-section" aria-label="Hero Scene">
      {/* Atmosphere Layers */}
      <div className="hero-noise-layer" />
      <div className="hero-vignette-layer" />
      <div className="hero-ambient-glow" />

      {/* Top Header Tag */}
      <div className="hero-top-bar">
        <div className="hero-top-tag">
          <span className="pulse-dot" />
          <span className="badge-text">COMPUTER SCIENCE × IoT · SRMIST</span>
        </div>
        <div className="hero-system-status">
          <span className="status-label">PORTFOLIO</span>
          <span className="status-val">— 2026</span>
        </div>
      </div>

      {/* Main Visual Stage (Composited Video + Movie Letterforms) */}
      <div className="hero-stage">
        <div className="hero-video-wrapper">
          {!videoFailed ? (
            <video
              ref={videoRef}
              className="hero-video-element"
              src="/assets/hero/akshanth.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={handleVideoCanPlay}
              onError={handleVideoError}
              aria-label="Akshanth walking in cinematic digital space"
            />
          ) : (
            <div className="hero-fallback-silhouette">
              <div className="silhouette-glow" />
            </div>
          )}
          <div className="hero-video-depth-shadow" />
          <div className="hero-video-gradient-mask" />
        </div>

        {/* Large Movie Title Typography */}
        <div className="hero-title-container">
          <div className="hero-word" aria-label="AKSHANTH">
            {'AKSHANTH'.split('').map((char, index) => (
              <span key={index} className="hero-letter">
                {char}
              </span>
            ))}
          </div>

          <div className="hero-role-display">
            <span className="role-main">AI · BACKEND · IoT</span>
            <span className="role-sub">COMPUTER SCIENCE & ENGINEERING (IoT)</span>
          </div>
        </div>
      </div>

      {/* Simplified Factual Metadata Footer */}
      <div className="hero-meta-container">
        <div className="hero-meta-col">
          <span className="meta-label">EDUCATION</span>
          <p className="meta-value">B.Tech in CSE (Internet of Things)</p>
          <span className="meta-sub">SRM Institute of Science and Technology</span>
        </div>

        <div className="hero-meta-col">
          <span className="meta-label">FOCUS</span>
          <p className="meta-value">AI · Backend · IoT Systems</p>
          <span className="meta-sub">Java, Spring Boot, Python & Machine Learning</span>
        </div>

        <div className="hero-meta-col">
          <span className="meta-label">EXPERIENCE</span>
          <p className="meta-value">Saint-Gobain</p>
          <span className="meta-sub">Java, Spring Boot & REST APIs</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <a href="#tech" className="scroll-btn" data-cursor="EXPLORE" aria-label="Scroll to Tech Universe">
          <span className="scroll-line" />
          <span className="scroll-text">SCROLL TO EXPLORE</span>
          <ArrowDown size={14} className="scroll-icon" />
        </a>
      </div>
    </section>
  );
}
