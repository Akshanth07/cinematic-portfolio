import React from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { journeyMilestones } from '../../data/journey';

export function JourneyFilm({ progress, mousePos }) {
  // Scene 03 active range: 0.44 to 0.70
  const isActive = progress >= 0.44 && progress <= 0.70;

  // 5 Years + Narrative Interlude spaced evenly
  const milestoneRanges = [
    { year: '2022', center: 0.47, index: 0 },
    { year: '2023', center: 0.51, index: 1 },
    { year: '2024', center: 0.55, index: 2 },
    { year: '2025', center: 0.59, index: 3 },
    { year: '2026', center: 0.63, index: 4 },
  ];

  // Mouse parallax
  const px = mousePos.x * 15;
  const py = mousePos.y * 10;

  // Dial Rotation
  const localProg = Math.max(0, Math.min(1, (progress - 0.44) / 0.22));
  const dialRotation = localProg * 360;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.44 && progress < 0.46) {
    sceneOpacity = (progress - 0.44) / 0.02;
  } else if (progress >= 0.46 && progress <= 0.68) {
    sceneOpacity = 1;
  } else if (progress > 0.68 && progress <= 0.70) {
    sceneOpacity = 1 - (progress - 0.68) / 0.02;
  }

  // Narrative Bridge active 0.65 to 0.69
  const isNarrativeActive = progress >= 0.65;
  let narrativeOpacity = 0;
  if (progress >= 0.65 && progress < 0.665) {
    narrativeOpacity = (progress - 0.65) / 0.015;
  } else if (progress >= 0.665 && progress <= 0.685) {
    narrativeOpacity = 1;
  } else if (progress > 0.685 && progress <= 0.70) {
    narrativeOpacity = Math.max(0, 1 - (progress - 0.685) / 0.015);
  }

  return (
    <div
      className="film-scene journey-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      {/* Chapter HUD Indicator */}
      <div className="journey-film-hud">
        <div className="section-chapter-tag">
          <span className="chapter-num">SCENE 03</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">CHRONO TIME MACHINE</span>
        </div>
        <div className="chrono-telemetry">
          <Clock size={12} className="text-accent" />
          <span>TEMPORAL MATRIX: 2022 — 2026</span>
          <span className="hud-divider">·</span>
          <span>SRMIST × SAINT-GOBAIN</span>
        </div>
      </div>

      {/* GIANT MECHANICAL CLOCK / CHRONO DIAL STRUCTURE */}
      <div 
        className="chrono-mechanical-rig"
        style={{
          transform: `translate3d(${px * 0.3}px, ${py * 0.3}px, 0)`,
        }}
      >
        <div 
          className="chrono-outer-ring"
          style={{ transform: `rotate(${dialRotation * 0.4}deg)` }}
        />
        <div 
          className="chrono-middle-ring"
          style={{ transform: `rotate(${-dialRotation * 0.6}deg)` }}
        />
        <div 
          className="chrono-inner-ring"
          style={{ transform: `rotate(${dialRotation * 0.9}deg)` }}
        />

        <div 
          className="chrono-sweep-arm"
          style={{ transform: `rotate(${dialRotation}deg)` }}
        >
          <div className="sweep-beam" />
          <div className="sweep-pivot" />
        </div>

        <div className="chrono-dial-ticks">
          {milestoneRanges.map((m, idx) => {
            const angle = (idx / 5) * 360 - 90;
            const isPassed = progress >= m.center;
            return (
              <div 
                key={m.year} 
                className={`dial-year-marker ${isPassed ? 'passed' : ''}`}
                style={{
                  transform: `rotate(${angle}deg) translate(280px) rotate(${-angle}deg)`,
                }}
              >
                <span className="marker-dot" />
                <span className="marker-year">{m.year}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SINGLE DOMINANT YEAR IN 3D DEPTH */}
      <div 
        className="journey-spatial-years-container"
        style={{
          opacity: Math.max(0, 1 - narrativeOpacity),
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {milestoneRanges.map((m) => {
          const milestone = journeyMilestones[m.index];
          if (!milestone) return null;

          const dist = progress - m.center;

          const yearZ = -dist * 2800;
          const yearScale = Math.max(0.6, 1 - Math.abs(dist) * 6);
          const yearOpacity = Math.max(0, 1 - Math.abs(dist) * 12);
          const isDominant = Math.abs(dist) < 0.035;

          return (
            <div
              key={milestone.year}
              className={`spatial-year-monolith ${isDominant ? 'dominant-year' : ''}`}
              style={{
                transform: `perspective(1200px) translate3d(0, 0, ${yearZ}px) scale(${yearScale})`,
                opacity: yearOpacity,
                pointerEvents: isDominant ? 'auto' : 'none',
              }}
            >
              <div className="monolith-year-header">
                <span className="monolith-phase-tag">{milestone.phase}</span>
                <h2 className="monolith-year-number">{milestone.year}</h2>
              </div>

              <div className="monolith-body">
                <div className="monolith-divider-line" />
                <h3 className="monolith-title">{milestone.title}</h3>
                <p className="monolith-desc">{milestone.description}</p>

                <div className="monolith-tags">
                  {milestone.technologies?.map((tag) => (
                    <span key={tag} className="monolith-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CINEMATIC NARRATIVE BRIDGE (PHILOSOPHY INTERLUDE) */}
      <div 
        className="journey-narrative-bridge"
        style={{
          opacity: narrativeOpacity,
          pointerEvents: isNarrativeActive ? 'auto' : 'none',
          transform: `perspective(1200px) translate3d(0, ${(1 - narrativeOpacity) * 20}px, 0)`,
        }}
      >
        <div className="narrative-inner-card">
          <div className="narrative-eyebrow">
            <Sparkles size={12} className="text-accent" />
            <span>ENGINEERING PHILOSOPHY</span>
          </div>

          <blockquote className="narrative-quote">
            "I build at the intersection of connected systems, intelligent software and backend engineering."
          </blockquote>

          <div className="narrative-pillars-row">
            <div className="narrative-pillar-chip">
              <span className="pillar-num">01</span>
              <strong>AI & MACHINE LEARNING</strong>
            </div>
            <div className="narrative-pillar-chip">
              <span className="pillar-num">02</span>
              <strong>BACKEND ENGINEERING</strong>
            </div>
            <div className="narrative-pillar-chip">
              <span className="pillar-num">03</span>
              <strong>IoT & SENSOR SYSTEMS</strong>
            </div>
          </div>

          <div className="narrative-credentials-row">
            <div className="cred-item">
              <span className="cred-lbl">ACADEMIC EXCELLENCE</span>
              <strong className="cred-val">SRMIST — 9.36 / 10 CGPA</strong>
            </div>
            <div className="cred-item">
              <span className="cred-lbl">INDUSTRY PRACTICUM</span>
              <strong className="cred-val">Saint-Gobain Internship</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
