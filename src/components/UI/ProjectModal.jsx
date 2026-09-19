import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectCardVisual } from '../Projects/ProjectCardVisual';

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-noise" />
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-category-group">
            <span className="modal-category-badge">{project.category}</span>
            <span className="modal-year">{project.year}</span>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal" data-cursor="CLOSE">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="modal-body">
          <div className="modal-hero">
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
            <p className="modal-tagline">{project.tagline}</p>
          </div>

          {/* Realistic Interface Preview */}
          <div className="modal-visual-wrap">
            <ProjectCardVisual projectId={project.id} />
          </div>

          {/* Description */}
          <div className="modal-section">
            <span className="modal-section-title">OVERVIEW</span>
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Verified Capabilities */}
          <div className="modal-section">
            <span className="modal-section-title">VERIFIED FEATURES</span>
            <ul className="modal-features-list">
              {project.features.map((feat, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={15} className="feature-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <span className="modal-section-title">TECH STACK</span>
            <div className="modal-tech-tags">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="modal-tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <div className="modal-footer-info">
            <span>REPOSITORY:</span>
            <strong>{project.repoName}</strong>
          </div>

          <div className="modal-footer-buttons">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn primary"
              data-cursor="GITHUB"
            >
              <Github size={16} />
              <span>VIEW ON GITHUB</span>
              <ArrowRight size={14} />
            </a>

            {project.liveUrl && project.liveUrl !== project.githubUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-action-btn secondary"
                data-cursor="LIVE"
              >
                <ExternalLink size={16} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
