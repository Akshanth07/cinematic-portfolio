import React from 'react';
import { Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../../data/journey';
import { profileData } from '../../data/profile';

export function JourneyFilm({ progress, mousePos }) {
  // Scene 03 active range: 0.40 to 0.64
  const isActive = progress >= 0.40 && progress < 0.64;

  // 3 Years cleanly partitioned (2024 -> 2025 -> 2026)
  const milestoneRanges = [
    { year: '2024', start: 0.40, end: 0.47, index: 0 },
    { year: '2025', start: 0.47, end: 0.54, index: 1 },
    { year: '2026', start: 0.54, end: 0.61, index: 2 },
  ];

  const px = mousePos.x * 15;
  const py = mousePos.y * 10;

  // Dial Rotation
  const localProg = Math.max(0, Math.min(1, (progress - 0.40) / 0.24));
  const dialRotation = localProg * 360;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.40 && progress < 0.42) {
    sceneOpacity = (progress - 0.40) / 0.02;
  } else if (progress >= 0.42 && progress <= 0.62) {
    sceneOpacity = 1;
  } else if (progress > 0.62 && progress <= 0.64) {
    sceneOpacity = Math.max(0, 1 - (progress - 0.62) / 0.02);
  }

  // Narrative Bridge active 0.59 to 0.64
  const isNarrativeActive = progress >= 0.59;
  let narrativeOpacity = 0;
  if (progress >= 0.59 && progress < 0.605) {
    narrativeOpacity = (progress - 0.59) / 0.015;
  } else if (progress >= 0.605 && progress <= 0.63) {
    narrativeOpacity = 1;
  } else if (progress > 0.63 && progress <= 0.64) {
    narrativeOpacity = Math.max(0, 1 - (progress - 0.63) / 0.01);
  }

  // Find currently active milestone cleanly
  const activeMilestoneObj = milestoneRanges.find(m => progress >= m.start && progress < m.end) || milestoneRanges[0];
  const activeMilestone = journeyMilestones[activeMilestoneObj.index];

  // In-place opacity/transform for current year
  let yearOpacity = 1;
  let yearTranslateY = 0;
  if (activeMilestoneObj) {
    const span = activeMilestoneObj.end - activeMilestoneObj.start;
    const local = (progress - activeMilestoneObj.start) / span;
    if (local < 0.15) {
      yearOpacity = local / 0.15;
      yearTranslateY = (1 - yearOpacity) * 20;
    } else if (local > 0.85) {
      yearOpacity = Math.max(0, (1 - local) / 0.15);
      yearTranslateY = (1 - yearOpacity) * -20;
    }
  }

  return (
    <div
      className="film-scene journey-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive && sceneOpacity > 0 ? 'visible' : 'hidden',
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
          <span>CHRONOLOGICAL TIMELINE: 2024 — 2026</span>
          <span className="hud-divider">·</span>
          <span>STAGE [0{activeMilestoneObj.index + 1} / 03]</span>
        </div>
      </div>

      {/* MECHANICAL CLOCK / CHRONO DIAL STRUCTURE (3 Years: 2024, 2025, 2026) */}
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
            const angle = (idx / 3) * 360 - 90;
            const isPassed = progress >= m.start;
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

      {/* SINGLE DOMINANT YEAR IN 3D DEPTH (2024 -> 2025 -> 2026) */}
      {!isNarrativeActive && activeMilestone && (
        <div 
          className="journey-spatial-years-container"
          style={{
            transform: `translate3d(${px}px, ${py}px, 0)`,
          }}
        >
          <div
            className="spatial-year-monolith dominant-year"
            style={{
              opacity: yearOpacity,
              transform: `translate3d(0, ${yearTranslateY}px, 0)`,
              transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
            }}
          >
            <div className="monolith-year-header">
              <div className="monolith-phase-wrap">
                <span className="monolith-phase-tag">{activeMilestone.phase}</span>
                <span className="monolith-stage-badge">0{activeMilestoneObj.index + 1} / 03</span>
              </div>
              <h2 className="monolith-year-number">{activeMilestone.year}</h2>
            </div>

            <div className="monolith-body">
              <div className="monolith-divider-line" />
              <h3 className="monolith-title">{activeMilestone.title}</h3>
              <span className="monolith-loc-txt text-accent">{activeMilestone.location}</span>
              <p className="monolith-desc">{activeMilestone.description}</p>

              {/* Verified Highlights */}
              {activeMilestone.highlights && (
                <ul className="monolith-highlights-list">
                  {activeMilestone.highlights.slice(0, 3).map((item, hIdx) => (
                    <li key={hIdx} className="monolith-highlight-item">
                      <span className="highlight-bullet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="monolith-tags">
                {activeMilestone.technologies?.map((tag) => (
                  <span key={tag} className="monolith-tag-item">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CINEMATIC NARRATIVE BRIDGE (PHILOSOPHY INTERLUDE) */}
      {isNarrativeActive && (
        <div 
          className="journey-narrative-bridge"
          style={{
            opacity: narrativeOpacity,
            transform: `perspective(1200px) translate3d(0, ${(1 - narrativeOpacity) * 20}px, 0)`,
          }}
        >
          <div className="narrative-inner-card">
            <div className="narrative-eyebrow">
              <Sparkles size={12} className="text-accent" />
              <span>PROGRESSION TRAJECTORY</span>
            </div>

            <blockquote className="narrative-quote">
              "Building strong foundations, converting concepts into scalable software, and applying engineering in real-world systems."
            </blockquote>

            <div className="narrative-pillars-row">
              <div className="narrative-pillar-chip">
                <span className="pillar-num">2024</span>
                <strong>FOUNDATION</strong>
                <span className="pillar-sub">Core CS · IoT · Problem Solving</span>
              </div>
              <div className="narrative-pillar-chip">
                <span className="pillar-num">2025</span>
                <strong>BUILDING</strong>
                <span className="pillar-sub">DSA · Backends · ML & Projects</span>
              </div>
              <div className="narrative-pillar-chip">
                <span className="pillar-num">2026</span>
                <strong>INDUSTRY</strong>
                <span className="pillar-sub">Saint-Gobain · Production APIs</span>
              </div>
            </div>

            <div className="narrative-credentials-row">
              <div className="cred-item">
                <span className="cred-lbl">ACADEMIC FOUNDATION</span>
                <strong className="cred-val">{profileData.institutionShort} — {profileData.cgpa} CGPA</strong>
              </div>
              <div className="cred-item">
                <span className="cred-lbl">INDUSTRY PRACTICUM</span>
                <strong className="cred-val">{profileData.experience.company} Internship</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
