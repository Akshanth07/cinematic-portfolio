import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { SceneCanvas } from '../Canvas/SceneCanvas';
import { HeroFilm } from './HeroFilm';
import { TechFilm } from './TechFilm';
import { JourneyFilm } from './JourneyFilm';
import { ProjectsFilm } from './ProjectsFilm';
import { FinaleFilm } from './FinaleFilm';
import { CustomCursor } from '../UI/CustomCursor';
import { LoadingScreen } from '../UI/LoadingScreen';

export function FilmEngine() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);
  const trackRef = useRef(null);

  // Target progress vs smoothed progress with heavy physical damping
  const progressState = useRef({
    target: 0,
    current: 0,
  });

  // Initialize Lenis with heavy, slow, cinematic damping
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // slower, heavier response
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.7, // prevents hyper-fast scroll skipping
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = maxScroll > 0 ? Math.max(0, Math.min(1, e.scroll / maxScroll)) : 0;
      progressState.current.target = rawProgress;
    });

    // Animation frame for heavy camera inertia and progress smoothing
    let rafId;
    function raf(time) {
      lenis.raf(time);

      // Low damping factor (0.05) gives camera physical weight and inertia
      progressState.current.current += (progressState.current.target - progressState.current.current) * 0.055;
      setScrollProgress(progressState.current.current);

      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Mouse move tracker for 3D parallax
  useEffect(() => {
    const onMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Jump to chapter with slow, intentional transition
  const scrollToChapter = (targetProgress) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = targetProgress * maxScroll;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetY, { duration: 2.2 });
    } else {
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  // Determine active chapter for minimal HUD
  let currentChapterName = '01 HERO';
  let activeChapterIdx = 0;
  if (scrollProgress >= 0.92) {
    currentChapterName = '05 FINALE';
    activeChapterIdx = 4;
  } else if (scrollProgress >= 0.70) {
    currentChapterName = '04 PROJECTS';
    activeChapterIdx = 3;
  } else if (scrollProgress >= 0.46) {
    currentChapterName = '03 CHRONO';
    activeChapterIdx = 2;
  } else if (scrollProgress >= 0.20) {
    currentChapterName = '02 TECH';
    activeChapterIdx = 1;
  }

  // Paced chapter jump targets
  const chapters = [
    { label: '01 HERO', prog: 0.0 },
    { label: '02 TECH', prog: 0.26 },
    { label: '03 CHRONO', prog: 0.50 },
    { label: '04 PROJECTS', prog: 0.75 },
    { label: '05 FINALE', prog: 0.96 },
  ];

  const isNavVisible = !isLoading;

  return (
    <div className="film-engine-root">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />

      {/* 3D WebGL Camera Canvas (Fixed background layer) */}
      <SceneCanvas scrollProgress={scrollProgress} mousePos={mousePos} />

      {/* Cinematic Foreground Film Grain & Vignette */}
      <div className="film-grain-overlay" aria-hidden="true" />
      <div className="film-vignette-overlay" aria-hidden="true" />

      {/* Synchronized Spatial Chapter Layers (Fixed 100vh stage) */}
      <div className="film-stage-viewport">
        {/* Chapter 01: Hero Opening Film (0.00 – 0.24) */}
        <HeroFilm progress={scrollProgress} mousePos={mousePos} />

        {/* Chapter 02: Spatial Tech World (0.20 – 0.50) */}
        <TechFilm progress={scrollProgress} mousePos={mousePos} />

        {/* Chapter 03: Chrono Time Machine (0.46 – 0.74) */}
        <JourneyFilm progress={scrollProgress} mousePos={mousePos} />

        {/* Chapter 04: Spatial Project Universe (0.70 – 0.95) */}
        <ProjectsFilm progress={scrollProgress} mousePos={mousePos} />

        {/* Chapter 05: Finale & Transmission (0.92 – 1.00) */}
        <FinaleFilm progress={scrollProgress} mousePos={mousePos} />
      </div>

      {/* Minimal Film Navigation HUD (Anchored Top) */}
      <header 
        className={`film-navigation-hud ${isNavVisible ? 'visible' : ''}`}
        aria-label="Cinematic Navigation"
      >
        <div className="film-hud-inner">
          <div className="film-brand-identity" onClick={() => scrollToChapter(0.0)}>
            <span className="brand-dot" />
            <span className="brand-name">AKSHANTH N</span>
            <span className="brand-badge">FILM // 2026</span>
          </div>

          {/* Chapter Progress Indicators */}
          <nav className="film-chapters-track">
            {chapters.map((chap, idx) => (
              <button
                key={chap.label}
                className={`film-chapter-btn ${activeChapterIdx === idx ? 'active' : ''}`}
                onClick={() => scrollToChapter(chap.prog)}
                data-cursor="GOTO"
                aria-label={`Jump to ${chap.label}`}
              >
                <span className="chapter-tick" />
                <span className="chapter-name">{chap.label}</span>
              </button>
            ))}
          </nav>

          {/* Timeline Coordinate / Progress Meter */}
          <div className="film-progress-meter">
            <span className="meter-label">CAMERA Z:</span>
            <strong className="meter-val">{Math.round((1 - scrollProgress) * 100)}%</strong>
          </div>
        </div>
      </header>

      {/* SPACIOUS VIRTUAL SCROLL TRACK (~42 VIEWPORT HEIGHTS OF CINEMATIC RUNWAY) */}
      <div ref={trackRef} className="film-virtual-scroll-track" style={{ height: '4200vh' }} />
    </div>
  );
}
