import React from 'react';
import { ArrowDown } from 'lucide-react';

export function HeroFilm({ progress, mousePos }) {
  // Hero is active from 0.00 to 0.22
  const isActive = progress <= 0.22;

  // Video Opacity: emerges 0.02 -> 0.06, steady 0.06 -> 0.14, fades 0.14 -> 0.20
  let videoOpacity = 0;
  if (progress >= 0.02 && progress < 0.06) {
    videoOpacity = ((progress - 0.02) / 0.04) * 0.7;
  } else if (progress >= 0.06 && progress < 0.14) {
    videoOpacity = 0.7;
  } else if (progress >= 0.14 && progress <= 0.20) {
    videoOpacity = Math.max(0, 0.7 * (1 - (progress - 0.14) / 0.06));
  }

  const videoScale = 1 + Math.max(0, (progress - 0.10) * 1.5);
  const videoTranslateY = -Math.max(0, (progress - 0.10) * 100);

  const parallaxX = mousePos.x * 15;
  const parallaxY = mousePos.y * 10;

  const letters = [
    { char: 'A', depth: 1.15, driftX: -80, driftY: -25, rotZ: -3 },
    { char: 'K', depth: 0.95, driftX: -50, driftY: 18, rotZ: 2 },
    { char: 'S', depth: 1.25, driftX: -25, driftY: -30, rotZ: -2 },
    { char: 'H', depth: 0.85, driftX: 0, driftY: 25, rotZ: 1 },
    { char: 'A', depth: 1.30, driftX: 30, driftY: -20, rotZ: 3 },
    { char: 'N', depth: 1.05, driftX: 55, driftY: 20, rotZ: -2 },
    { char: 'T', depth: 1.20, driftX: 80, driftY: -30, rotZ: 2 },
    { char: 'H', depth: 1.10, driftX: 105, driftY: 15, rotZ: -1 },
  ];

  let letterBaseOpacity = 0;
  if (progress >= 0.04 && progress < 0.08) {
    letterBaseOpacity = (progress - 0.04) / 0.04;
  } else if (progress >= 0.08) {
    letterBaseOpacity = 1;
  }

  // Smooth dolly progress through letters (0.13 -> 0.20)
  const dollyProg = Math.max(0, Math.min(1, (progress - 0.13) / 0.07));

  let subOpacity = 0;
  if (progress >= 0.07 && progress < 0.10) {
    subOpacity = (progress - 0.07) / 0.03;
  } else if (progress >= 0.10 && progress < 0.14) {
    subOpacity = 1;
  } else if (progress >= 0.14 && progress <= 0.18) {
    subOpacity = Math.max(0, 1 - (progress - 0.14) / 0.04);
  }

  const sceneOpacity = progress > 0.20 ? Math.max(0, 1 - (progress - 0.20) / 0.02) : 1;

  return (
    <div 
      className="film-scene hero-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive && progress < 0.18 ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      <div 
        className="hero-film-atmosphere"
        style={{
          opacity: Math.min(1, progress * 15),
        }}
      />
      <div className="hero-film-vignette" />
      
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

      <div 
        className="hero-spatial-typography"
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
        }}
      >
        <div className="huge-name-track" aria-label="AKSHANTH">
          {letters.map((item, idx) => {
            const letterZ = dollyProg * 800 * item.depth;
            const letterX = item.driftX * dollyProg * 2.2;
            const letterY = item.driftY * dollyProg * 2.2;
            const letterRot = item.rotZ * dollyProg * 5;
            const letterOp = letterBaseOpacity * Math.max(0, 1 - (dollyProg > 0.4 ? (dollyProg - 0.4) * 1.8 : 0));

            return (
              <span
                key={idx}
                className="spatial-letter"
                style={{
                  transform: `translate3d(${letterX}px, ${letterY}px, ${letterZ}px) rotateZ(${letterRot}deg)`,
                  opacity: letterOp,
                }}
              >
                {item.char}
              </span>
            );
          })}
        </div>

        <div 
          className="hero-film-subtitles"
          style={{
            transform: `translate3d(0, ${dollyProg * -50}px, 0)`,
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

      <div 
        className="hero-film-hud"
        style={{
          opacity: subOpacity,
          transform: `translate3d(0, ${-dollyProg * 20}px, 0)`,
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
