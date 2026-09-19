import React, { useState } from 'react';
import { Github, ArrowUpRight, CheckCircle2, X, Terminal, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCardVisual } from '../Projects/ProjectCardVisual';

export function ProjectsFilm({ progress, mousePos }) {
  const [inspectedProject, setInspectedProject] = useState(null);

  // Scene 04 active range: 0.72 to 0.95
  const isActive = progress >= 0.72 && progress <= 0.95;

  // 4 Projects with generous breathing room
  const projectRanges = [
    { id: 'curatrack', center: 0.755, index: 0 },
    { id: 'finbud', center: 0.805, index: 1 },
    { id: 'safetysense', center: 0.855, index: 2 },
    { id: 'ecommerce', center: 0.905, index: 3 },
  ];

  // Mouse parallax
  const px = mousePos.x * 18;
  const py = mousePos.y * 12;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.72 && progress < 0.74) {
    sceneOpacity = (progress - 0.72) / 0.02;
  } else if (progress >= 0.74 && progress <= 0.93) {
    sceneOpacity = 1;
  } else if (progress > 0.93 && progress <= 0.95) {
    sceneOpacity = 1 - (progress - 0.93) / 0.02;
  }

  // Active project index for HUD telemetry
  let activeProjIdx = 1;
  if (progress >= 0.88) activeProjIdx = 4;
  else if (progress >= 0.83) activeProjIdx = 3;
  else if (progress >= 0.78) activeProjIdx = 2;

  return (
    <div
      className="film-scene projects-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      {/* Chapter HUD Indicator */}
      <div className="projects-film-hud">
        <div className="section-chapter-tag">
          <span className="chapter-num">SCENE 04</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">SPATIAL PROJECT GALLERY</span>
        </div>
        <div className="projects-hud-telemetry">
          <Terminal size={12} className="text-accent" />
          <span>VERIFIED GITHUB ARTIFACTS</span>
          <span className="hud-divider">·</span>
          <span>STAGE [0{activeProjIdx} / 04]</span>
        </div>
      </div>

      {/* 3D SPATIAL GALLERY OF PROJECTS */}
      <div 
        className="projects-spatial-track"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {projectRanges.map((pRange) => {
          const proj = projects[pRange.index];
          if (!proj) return null;

          const dist = progress - pRange.center; // distance from focal center

          // 3D positioning along the Z-axis
          const projZ = -dist * 6500;
          const projScale = Math.max(0.35, 1 - Math.abs(dist) * 12);
          const projOpacity = Math.max(0, 1 - Math.abs(dist) * 16);
          const projBlur = Math.abs(dist) > 0.025 ? (Math.abs(dist) - 0.025) * 350 : 0;
          const isDominant = Math.abs(dist) < 0.03;

          return (
            <article
              key={proj.id}
              className={`spatial-project-monolith ${isDominant ? 'dominant-project' : ''}`}
              onClick={() => setInspectedProject(proj)}
              style={{
                transform: `perspective(1200px) translate3d(0, 0, ${projZ}px) scale(${projScale})`,
                opacity: projOpacity,
                filter: projBlur > 0 ? `blur(${projBlur}px)` : 'none',
                pointerEvents: isDominant ? 'auto' : 'none',
                '--accent-color': proj.color,
              }}
              data-cursor="EXPAND"
            >
              <div className="monolith-frame-glow" />

              {/* Monolith Header Bar */}
              <div className="monolith-header">
                <div className="monolith-repo-tag">
                  <Github size={13} />
                  <span>{proj.repoName}</span>
                </div>
                <div className="monolith-category-badge">{proj.category}</div>
              </div>

              {/* Huge Project Title */}
              <div className="monolith-title-box">
                <span className="monolith-number">0{pRange.index + 1} // REPOSITORY</span>
                <h3 className="monolith-project-title">{proj.title}</h3>
                <p className="monolith-subtitle">{proj.subtitle}</p>
              </div>

              {/* REALISTIC UI INTERFACE PREVIEW */}
              <div className="monolith-ui-viewport">
                <ProjectCardVisual projectId={proj.id} />
              </div>

              {/* Footer / Tech Badges */}
              <div className="monolith-footer-row">
                <div className="monolith-tech-tags">
                  {proj.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="monolith-tech-chip">{tech}</span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="monolith-tech-more">+{proj.technologies.length - 4}</span>
                  )}
                </div>

                <button 
                  className="monolith-inspect-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInspectedProject(proj);
                  }}
                  data-cursor="INSPECT"
                >
                  <span>INSPECT DETAILS</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* IN-WORLD PROJECT DEEP INSPECTION */}
      {inspectedProject && (
        <div 
          className="in-world-project-inspector"
          onClick={() => setInspectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="inspector-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="inspector-card-header">
              <div className="card-cat-wrap">
                <span className="inspector-cat-pill">{inspectedProject.category}</span>
                <span className="inspector-year-pill">{inspectedProject.year}</span>
              </div>
              <button 
                className="inspector-close-btn"
                onClick={() => setInspectedProject(null)}
                aria-label="Close project inspection"
                data-cursor="CLOSE"
              >
                <X size={18} />
              </button>
            </div>

            <div className="inspector-scroll-area">
              <div className="inspector-hero-block">
                <h2 className="inspector-main-title">{inspectedProject.title}</h2>
                <p className="inspector-sub-title">{inspectedProject.subtitle}</p>
                <p className="inspector-tagline-txt">{inspectedProject.tagline}</p>
              </div>

              <div className="inspector-ui-preview-wrap">
                <ProjectCardVisual projectId={inspectedProject.id} />
              </div>

              <div className="inspector-section">
                <span className="inspector-section-heading">VERIFIED CAPABILITIES</span>
                <ul className="inspector-features-list">
                  {inspectedProject.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="feature-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="inspector-section">
                <span className="inspector-section-heading">VERIFIED TECH STACK</span>
                <div className="inspector-tech-tags">
                  {inspectedProject.technologies.map((t) => (
                    <span key={t} className="inspector-tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="inspector-action-footer">
              <div className="inspector-repo-info">
                <span>REPOSITORY:</span>
                <strong>{inspectedProject.repoName}</strong>
              </div>

              <a
                href={inspectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inspector-github-btn"
                data-cursor="GITHUB"
              >
                <Github size={16} />
                <span>VIEW REPOSITORY ON GITHUB</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
