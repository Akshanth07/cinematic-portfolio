import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Cpu, Terminal, Layers } from 'lucide-react';
import { skillsData, skillCategories } from '../../data/skills';

export function TechUniverse() {
  const root = useRef(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const filteredSkills = activeCategory === 'ALL'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-node-item',
        { opacity: 0, y: 30, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 75%'
          }
        }
      );

      gsap.to('.tech-orbit-ring-1', {
        rotate: 360,
        duration: 45,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.tech-orbit-ring-2', {
        rotate: -360,
        duration: 65,
        repeat: -1,
        ease: 'none'
      });
    }, root);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="tech" ref={root} className="tech-universe-section" aria-label="Tech Universe Scene">
      <div className="section-chapter-tag">
        <span className="chapter-num">SCENE 02</span>
        <span className="chapter-divider">/</span>
        <span className="chapter-title">THE TECH UNIVERSE</span>
      </div>

      <div className="tech-universe-container">
        {/* Heading & Summary */}
        <div className="tech-header-block">
          <div className="tech-eyebrow">
            <Cpu size={14} className="text-accent" />
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="tech-main-title">
            TOOLS I<br />
            <em>BUILD WITH.</em>
          </h2>
          <p className="tech-summary-text">
            Core technologies and tools applied across backend engineering, machine learning, computer vision, and IoT systems.
          </p>

          {/* Category Filter Pills */}
          <div className="tech-filter-pills" role="tablist" aria-label="Technology Categories">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`tech-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                data-cursor="FILTER"
              >
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Spatial Constellation Field & Active Node Inspector */}
        <div className="tech-interactive-stage">
          {/* Orbital Background Graphics */}
          <div className="tech-spatial-canvas" aria-hidden="true">
            <div className="tech-orbit-ring-1" />
            <div className="tech-orbit-ring-2" />
            <div className="tech-core-star">
              <span className="core-title">AKSHANTH</span>
              <span className="core-subtitle">SYSTEM CORE</span>
            </div>
          </div>

          {/* Technology Nodes Cloud */}
          <div className="tech-nodes-cloud">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  className={`tech-node-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  data-cursor="INSPECT"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedSkill(skill);
                    }
                  }}
                  aria-label={`${skill.name} - ${skill.domain}`}
                >
                  <div className="node-glow" />
                  <div className="node-header">
                    <span className="node-name">{skill.name}</span>
                    <span className="node-tag">{skill.domain}</span>
                  </div>
                  <div className="node-footer">
                    <span className="node-category">{skill.related[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Factual Node Inspector (No proficiency ratings) */}
          {selectedSkill && (
            <div className="tech-node-inspector" aria-live="polite">
              <div className="inspector-header">
                <span className="inspector-badge">DOMAIN: {selectedSkill.domain}</span>
                <h3 className="inspector-name">{selectedSkill.name}</h3>
              </div>

              <div className="inspector-section">
                <span className="inspector-label">PROJECT CONTEXT</span>
                <p className="inspector-desc">{selectedSkill.context}</p>
              </div>

              <div className="inspector-section">
                <span className="inspector-label">RELATED TECHNOLOGIES</span>
                <div className="inspector-tags">
                  {selectedSkill.related.map((rel) => (
                    <span key={rel} className="inspector-tag-pill">{rel}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stack Overview Footer */}
        <div className="tech-bottom-summary">
          <div className="summary-col">
            <span className="col-num">01</span>
            <span className="col-title">BACKEND DEVELOPMENT</span>
            <p className="col-desc">Java, Spring Boot, Python, FastAPI, and PostgreSQL for robust server-side APIs and database management.</p>
          </div>
          <div className="summary-col">
            <span className="col-num">02</span>
            <span className="col-title">AI & MACHINE LEARNING</span>
            <p className="col-desc">Machine learning with Python and Scikit-Learn, plus computer vision and YOLO object detection models.</p>
          </div>
          <div className="summary-col">
            <span className="col-num">03</span>
            <span className="col-title">IoT & EMBEDDED</span>
            <p className="col-desc">Arduino microcontrollers, sensor interfacing, and hardware data acquisition pipelines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
