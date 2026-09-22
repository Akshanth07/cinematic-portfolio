import React, { useState } from 'react';
import { Github, ArrowUpRight, CheckCircle2, X, Terminal, ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCardVisual } from '../Projects/ProjectCardVisual';

export function ProjectsFilm({ progress, mousePos }) {
  const [inspectedProject, setInspectedProject] = useState(null);

  // Scene 04 active range: 0.70 to 0.92
  const isActive = progress >= 0.70 && progress < 0.92;

  // 5 Projects cleanly partitioned
  const projectRanges = [
    { id: 'curatrack', start: 0.70, end: 0.744, index: 0 },
    { id: 'safetysense', start: 0.744, end: 0.788, index: 1 },
    { id: 'finbud', start: 0.788, end: 0.832, index: 2 },
    { id: 'ecommerce', start: 0.832, end: 0.876, index: 3 },
    { id: 'foodcourt', start: 0.876, end: 0.92, index: 4 },
  ];

  const px = mousePos.x * 15;
  const py = mousePos.y * 10;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.70 && progress < 0.72) {
    sceneOpacity = (progress - 0.70) / 0.02;
  } else if (progress >= 0.72 && progress <= 0.90) {
    sceneOpacity = 1;
  } else if (progress > 0.90 && progress <= 0.92) {
    sceneOpacity = Math.max(0, 1 - (progress - 0.90) / 0.02);
  }

  // Find currently active project cleanly
  const activeProjObj = projectRanges.find(p => progress >= p.start && progress < p.end) || projectRanges[0];
  const activeProj = projects[activeProjObj.index];

  // In-place opacity/transform for current project
  let projOpacity = 1;
  let projTranslateY = 0;
  if (activeProjObj) {
    const span = activeProjObj.end - activeProjObj.start;
    const local = (progress - activeProjObj.start) / span;
    if (local < 0.15) {
      projOpacity = local / 0.15;
      projTranslateY = (1 - projOpacity) * 20;
    } else if (local > 0.85) {
      projOpacity = Math.max(0, (1 - local) / 0.15);
      projTranslateY = (1 - projOpacity) * -20;
    }
  }

  return (
    <div
      className="film-scene projects-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive && sceneOpacity > 0 ? 'visible' : 'hidden',
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
          <span>STAGE [0{activeProjObj.index + 1} / 05]</span>
        </div>
      </div>

      {/* SINGLE CLEAN PROJECT MONOLITH (Zero card overlap) */}
      {activeProj && (
        <div 
          className="projects-spatial-track"
          style={{
            transform: `translate3d(${px}px, ${py}px, 0)`,
          }}
        >
          <article
            className="spatial-project-monolith dominant-project"
            onClick={() => setInspectedProject(activeProj)}
            style={{
              opacity: projOpacity,
              transform: `translate3d(0, ${projTranslateY}px, 0)`,
              transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
              '--accent-color': activeProj.color,
            }}
            data-cursor="EXPAND"
          >
            <div className="monolith-frame-glow" />

            <div className="monolith-header">
              <div className="monolith-repo-tag">
                <Github size={13} />
                <span>{activeProj.repoName}</span>
              </div>
              <div className="monolith-category-badge">{activeProj.category}</div>
            </div>

            <div className="monolith-title-box">
              <span className="monolith-number">0{activeProjObj.index + 1} // REPOSITORY</span>
              <h3 className="monolith-project-title">{activeProj.title}</h3>
              <p className="monolith-subtitle">{activeProj.subtitle}</p>
            </div>

            <div className="monolith-ui-viewport">
              <ProjectCardVisual projectId={activeProj.id} />
            </div>

            <div className="monolith-footer-row">
              <div className="monolith-tech-tags">
                {activeProj.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="monolith-tech-chip">{tech}</span>
                ))}
                {activeProj.technologies.length > 4 && (
                  <span className="monolith-tech-more">+{activeProj.technologies.length - 4}</span>
                )}
              </div>

              <button 
                className="monolith-inspect-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setInspectedProject(activeProj);
                }}
                data-cursor="INSPECT"
              >
                <span>INSPECT DETAILS</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </article>
        </div>
      )}

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
