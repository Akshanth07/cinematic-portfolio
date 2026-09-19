import React from 'react';
import { ArrowDown } from 'lucide-react';

export function HeroFilm({ progress, mousePos }) {
  // Hero is active from 0.00 to 0.25
  const isActive = progress <= 0.25;

  // Staged progress milestones:
  // 0.00 -> 0.04: Pure Black & subtle atmosphere
  // 0.04 -> 0.09: Video subject emerges and settles
  // 0.09 -> 0.15: Huge AKSHANTH letters emerge and lock in place (stable view)
  // 0.15 -> 0.19: Subtitles and HUD settle, allowing user to appreciate the composition
  // 0.19 -> 0.25: Slow, heavy camera dolly straight through the letters of AKSHANTH

  // Video Opacity: fades in 0.04->0.09, remains steady 0.09->0.18, then fades during dolly 0.18->0.24
  let videoOpacity = 0;
  if (progress >= 0.04 && progress < 0.09) {
    videoOpacity = (progress - 0.04) / 0.05 * 0.7;
  } else if (progress >= 0.09 && progress < 0.18) {
    videoOpacity = 0.7;
  } else if (progress >= 0.18 && progress <= 0.24) {
    videoOpacity = Math.max(0, 0.7 * (1 - (progress - 0.18) / 0.06));
  }

  // Video scale and position
  const videoScale = 1 + Math.max(0, (progress - 0.15) * 1.5);
  const videoTranslateY = -Math.max(0, (progress - 0.15) * 120);

  // Mouse parallax (subtle)
  const parallaxX = mousePos.x * 18;
  const parallaxY = mousePos.y * 12;

  // Letters of AKSHANTH with individual 3D depth parameters
  const letters = [
    { char: 'A', depth: 1.15, driftX: -90, driftY: -30, rotZ: -3 },
    { char: 'K', depth: 0.95, driftX: -60, driftY: 20, rotZ: 2 },
    { char: 'S', depth: 1.25, driftX: -30, driftY: -40, rotZ: -2 },
    { char: 'H', depth: 0.85, driftX: 0, driftY: 30, rotZ: 1 },
    { char: 'A', depth: 1.30, driftX: 35, driftY: -25, rotZ: 3 },
    { char: 'N', depth: 1.05, driftX: 65, driftY: 25, rotZ: -2 },
    { char: 'T', depth: 1.20, driftX: 95, driftY: -35, rotZ: 2 },
    { char: 'H', depth: 1.10, driftX: 125, driftY: 15, rotZ: -1 },
  ];

  // Letter emergence (0.08 -> 0.14) and dolly fly-through (0.18 -> 0.24)
  let letterBaseOpacity = 0;
  if (progress >= 0.08 && progress < 0.14) {
    letterBaseOpacity = (progress - 0.08) / 0.06;
  } else if (progress >= 0.14) {
    letterBaseOpacity = 1;
  }

  // Dolly progress through letters (only starts after 0.18)
  const dollyProg = Math.max(0, Math.min(1, (progress - 0.18) / 0.06));

  // Subtitles & HUD opacity (emerges 0.13 -> 0.16, fades during dolly 0.18 -> 0.22)
  let subOpacity = 0;
  if (progress >= 0.13 && progress < 0.16) {
    subOpacity = (progress - 0.13) / 0.03;
  } else if (progress >= 0.16 && progress < 0.18) {
    subOpacity = 1;
  } else if (progress >= 0.18 && progress <= 0.22) {
    subOpacity = Math.max(0, 1 - (progress - 0.18) / 0.04);
  }

  // Scene overall exit fade
  const sceneOpacity = progress > 0.24 ? Math.max(0, 1 - (progress - 0.24) / 0.02) : 1;

  return (
    <div 
      className="film-scene hero-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive && progress < 0.22 ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      {/* 1. ATMOSPHERIC BACKDROP & SUBTLE RED AMBIENT RIM */}
      <div 
        className="hero-film-atmosphere"
        style={{
          opacity: Math.min(1, progress * 10),
        }}
      />
      <div className="hero-film-vignette" />
      
      {/* 2. COMPOSITED VIDEO SUBJECT (MIDGROUND LAYER) */}
      <div 
        className="hero-video-composite-wrap"
        style={{
          transform: `translate3d(${parallaxX * 0.4}px, ${videoTranslateY + parallaxY * 0.4}px, 0) scale(${videoScale})`,
          opacity: videoOpacity,
        }}
      >
        <div className="video-edge-matte" />
        <div className="video-ambient-glow" />
        <video
          className="hero-subject-video"
          src="/assets/hero/akshanth.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>

      {/* 3. HUGE 3D SPATIAL TYPOGRAPHY (PHYSICAL OBJECTS IN ENVIRONMENT) */}
      <div 
        className="hero-spatial-typography"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
        }}
      >
        <div className="huge-name-track" aria-label="AKSHANTH">
          {letters.map((item, idx) => {
            // Deliberate, slow, heavy fly-through during 0.18 -> 0.24
            const letterZ = dollyProg * 850 * item.depth;
            const letterX = item.driftX * dollyProg * 2.5;
            const letterY = item.driftY * dollyProg * 2.5;
            const letterRot = item.rotZ * dollyProg * 6;
            const letterOp = letterBaseOpacity * Math.max(0, 1 - (dollyProg > 0.4 ? (dollyProg - 0.4) * 1.8 : 0));
            const letterBlur = dollyProg > 0.5 ? (dollyProg - 0.5) * 20 : 0;

            return (
              <span
                key={idx}
                className="spatial-letter"
                style={{
                  transform: `translate3d(${letterX}px, ${letterY}px, ${letterZ}px) rotateZ(${letterRot}deg)`,
                  opacity: letterOp,
                  filter: letterBlur > 0 ? `blur(${letterBlur}px)` : 'none',
                }}
              >
                {item.char}
              </span>
            );
          })}
        </div>

        {/* Cinematic Subtitle & Role */}
        <div 
          className="hero-film-subtitles"
          style={{
            transform: `translate3d(0, ${dollyProg * -60}px, 0)`,
            opacity: subOpacity,
          }}
        >
          <div className="film-role-tag">
            <span className="role-bullet" />
            <span>AI · BACKEND · IoT DEVELOPER</span>
          </div>
          <h2 className="film-focus-headline">
            COMPUTER SCIENCE & ENGINEERING (IoT) · SRMIST
          </h2>
        </div>
      </div>

      {/* 4. CINEMATIC HUD / TECHNICAL METADATA */}
      <div 
        className="hero-film-hud"
        style={{
          opacity: subOpacity,
          transform: `translate3d(0, ${-dollyProg * 30}px, 0)`,
        }}
      >
        <div className="hud-top-bar">
          <div className="hud-identity">
            <span className="hud-dot live" />
            <span className="hud-code">SYSTEM // AKSHANTH_WORLD_v2.6</span>
          </div>
          <div className="hud-coords">
            <span>COORD: [13.0827° N, 80.2707° E]</span>
            <span className="hud-divider">/</span>
            <span>CHENNAI</span>
          </div>
        </div>

        <div className="hud-bottom-bar">
          <div className="hud-meta-item">
            <span className="meta-lbl">EDUCATION</span>
            <strong className="meta-val">SRM Institute of Science & Technology</strong>
          </div>
          <div className="hud-meta-item">
            <span className="meta-lbl">EXPERIENCE</span>
            <strong className="meta-val">Saint-Gobain Alum</strong>
          </div>
          <div className="hud-scroll-prompt">
            <span className="prompt-txt">SCROLL TO ENTER ENVIRONMENT</span>
            <ArrowDown size={14} className="prompt-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
