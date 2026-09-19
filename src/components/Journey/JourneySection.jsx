import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MapPin, Clock } from 'lucide-react';
import { journeyMilestones } from '../../data/journey';

export function JourneySection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const clockHandRef = useRef(null);
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const totalMilestones = journeyMilestones.length;
  const currentAngle = -50 + (activeYearIndex / (totalMilestones - 1)) * 100;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 900;
      if (isMobile) return;

      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 240;

      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (totalMilestones - 1));
            const clampedIndex = Math.max(0, Math.min(index, totalMilestones - 1));
            setActiveYearIndex(clampedIndex);

            if (clockHandRef.current) {
              const angle = -55 + self.progress * 110;
              gsap.to(clockHandRef.current, {
                rotate: angle,
                duration: 0.2,
                ease: 'power1.out'
              });
            }
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [totalMilestones]);

  const selectMilestone = (index) => {
    setActiveYearIndex(index);
    if (clockHandRef.current) {
      const angle = -55 + (index / (totalMilestones - 1)) * 110;
      gsap.to(clockHandRef.current, {
        rotate: angle,
        duration: 0.5,
        ease: 'power3.out'
      });
    }

    const isMobile = window.innerWidth <= 900;
    if (isMobile) {
      const element = document.getElementById(`milestone-card-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section id="journey" ref={containerRef} className="journey-section" aria-label="Journey Timeline">
      <div className="journey-bg-grid" />
      <div className="journey-ambient-glow" />

      {/* Top Chrono Header */}
      <div className="journey-telemetry-overlay">
        <div className="telemetry-coord">
          <Clock size={12} className="text-accent" />
          <span>CHRONOLOGICAL TIMELINE: 2022 — 2026</span>
        </div>
      </div>

      <div className="journey-pinned-container">
        {/* HUD Header + Chrono Dial */}
        <div className="journey-hud-layout">
          <div className="journey-header-hud">
            <div className="section-chapter-tag">
              <span className="chapter-num">SCENE 03</span>
              <span className="chapter-divider">/</span>
              <span className="chapter-title">JOURNEY</span>
            </div>

            <h2 className="journey-hud-title">
              A JOURNEY<br />
              <em>THROUGH TIME.</em>
            </h2>

            {/* Quick Year Jump Buttons */}
            <div className="journey-nav-ticks" role="tablist" aria-label="Milestone Years">
              {journeyMilestones.map((m, idx) => (
                <button
                  key={m.year}
                  role="tab"
                  aria-selected={activeYearIndex === idx}
                  className={`journey-tick-btn ${activeYearIndex === idx ? 'active' : ''}`}
                  onClick={() => selectMilestone(idx)}
                  data-cursor={`YEAR ${m.year}`}
                >
                  <span className="tick-dot" />
                  <span className="tick-year">{m.year}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mechanical Chrono Clock Dial */}
          <div className="journey-clock-mechanism" aria-hidden="true">
            <div className="clock-outer-ring">
              <div className="clock-scale-ticks" />
              <div className="clock-pivot">
                <div
                  ref={clockHandRef}
                  className="clock-hand-arm"
                  style={{ transform: `rotate(${currentAngle}deg)` }}
                >
                  <div className="clock-hand-pointer" />
                </div>
              </div>
            </div>
            <div className="clock-display-badge">
              <span className="clock-year-label">YEAR</span>
              <span className="clock-year-val">{journeyMilestones[activeYearIndex]?.year}</span>
            </div>
          </div>
        </div>

        {/* Milestone Cards Track */}
        <div ref={trackRef} className="journey-milestones-track">
          {journeyMilestones.map((m, index) => {
            const isActive = activeYearIndex === index;
            return (
              <div
                key={m.year}
                id={`milestone-card-${index}`}
                className={`journey-milestone-card ${isActive ? 'active' : ''}`}
                onClick={() => selectMilestone(index)}
              >
                {/* Frame Corners */}
                <div className="card-instrument-corner tl" />
                <div className="card-instrument-corner tr" />
                <div className="card-instrument-corner bl" />
                <div className="card-instrument-corner br" />

                <div className="milestone-card-header">
                  <span className="milestone-phase">{m.phase}</span>
                  <div className="milestone-year-badge">
                    <span className="year-num">{m.year}</span>
                  </div>
                </div>

                <div className="milestone-content">
                  <h3 className="milestone-title">{m.title}</h3>
                  <div className="milestone-location">
                    <MapPin size={13} className="text-accent" />
                    <span>{m.location}</span>
                  </div>

                  <p className="milestone-short-desc">{m.description}</p>

                  {/* Technology Tags */}
                  <div className="milestone-tags-row">
                    {m.technologies.map((tag) => (
                      <span key={tag} className="milestone-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="milestone-card-footer">
                  <span>MILESTONE</span>
                  <span className="footer-index">0{index + 1} / 05</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
