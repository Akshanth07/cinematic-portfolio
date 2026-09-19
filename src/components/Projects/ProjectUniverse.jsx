import React, { useState } from 'react';
import { ArrowUpRight, Github, Terminal } from 'lucide-react';
import { projects } from '../../data/projects';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectModal } from '../UI/ProjectModal';

export function ProjectUniverse() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'HEALTHCARE / WEB', 'FINTECH', 'IoT / AI', 'ENTERPRISE BACKEND'];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-universe-section" aria-label="Project Universe">
      <div className="projects-ambient-light" />
      
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header-block">
          <div className="section-chapter-tag">
            <span className="chapter-num">SCENE 04</span>
            <span className="chapter-divider">/</span>
            <span className="chapter-title">PROJECTS</span>
          </div>

          <div className="projects-title-row">
            <div>
              <div className="projects-eyebrow">
                <Terminal size={14} className="text-accent" />
                <span>GITHUB REPOSITORIES</span>
              </div>
              <h2 className="projects-main-title">
                FEATURED<br />
                <em>PROJECTS.</em>
              </h2>
            </div>
            <p className="projects-summary-desc">
              Applications built across backend engineering, financial tools, real-time sensor dashboards, and healthcare scheduling — with code hosted on GitHub.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="projects-filter-bar" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`project-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                data-cursor="FILTER"
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="projects-gallery-grid">
          {filteredProjects.map((proj, idx) => (
            <article
              key={proj.id}
              className="project-card"
              onClick={() => setSelectedProject(proj)}
              data-cursor="VIEW"
              style={{ '--accent-color': proj.color }}
            >
              <div className="project-card-border" />
              <div className="project-card-glow" />

              {/* Card Top Meta */}
              <div className="card-top-meta">
                <span className="project-cat-badge">{proj.category}</span>
                <span className="project-year-badge">{proj.year}</span>
              </div>

              {/* Card Title & Content */}
              <div className="card-main-content">
                <span className="project-number">0{idx + 1} // REPOSITORY</span>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-subtitle">{proj.subtitle}</p>
                <p className="project-card-desc">{proj.tagline}</p>
              </div>

              {/* Realistic Visual Interface Preview */}
              <ProjectCardVisual projectId={proj.id} />

              {/* Technology Tags */}
              <div className="project-tech-list">
                {proj.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="tech-badge-item">
                    {tech}
                  </span>
                ))}
                {proj.technologies.length > 5 && (
                  <span className="tech-badge-more">+{proj.technologies.length - 5}</span>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="project-card-footer">
                <div className="repo-indicator">
                  <Github size={14} />
                  <span>{proj.repoName}</span>
                </div>

                <button
                  className="card-inspect-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(proj);
                  }}
                  aria-label={`Inspect ${proj.title}`}
                  data-cursor="OPEN"
                >
                  <span>DETAILS</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal View for Project Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
