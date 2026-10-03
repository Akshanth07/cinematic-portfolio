import React from 'react';
import { Cpu, ShieldCheck, Terminal, Award, Globe, Code2, Layers } from 'lucide-react';
import { profileData } from '../../data/profile';

export function AboutSection() {
  return (
    <section id="about" className="about-section" aria-label="About Akshanth">
      <div className="about-noise" />
      
      <div className="about-container">
        <div className="section-chapter-tag">
          <span className="chapter-num">PROFILE</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">ABOUT</span>
        </div>

        <div className="about-main-layout">
          {/* Left Column: Background Statement */}
          <div className="about-hero-col">
            <h2 className="about-display-title">
              DEVELOPER &<br />
              ENGINEERING<br />
              <em>STUDENT.</em>
            </h2>

            <div className="about-bio-text">
              <p>
                {profileData.summary}
              </p>
              <p>
                {profileData.experience.description}
              </p>
            </div>

            <div className="about-credentials-row">
              <div className="credential-pill">
                <Award size={15} className="text-accent" />
                <span>{profileData.institutionShort} — {profileData.cgpa} CGPA</span>
              </div>
              <div className="credential-pill">
                <ShieldCheck size={15} className="text-accent" />
                <span>SAINT-GOBAIN INTERNSHIP</span>
              </div>
              <div className="credential-pill">
                <Terminal size={15} className="text-accent" />
                <span>SIH 2026 QUALIFIED</span>
              </div>
              <div className="credential-pill">
                <Globe size={15} className="text-accent" />
                <span>{profileData.location.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Areas */}
          <div className="about-pillars-col">
            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">01</span>
                <Layers size={18} className="text-accent" />
              </div>
              <h3 className="pillar-title">Backend Development</h3>
              <p className="pillar-desc">
                Developing APIs, CRUD operations, database persistence, and service layers with Java, Spring Boot, Python, FastAPI, and SQL.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">02</span>
                <Cpu size={18} className="text-accent" />
              </div>
              <h3 className="pillar-title">AI & Machine Learning</h3>
              <p className="pillar-desc">
                Building machine learning anomaly detection models, regression models, and computer vision pipelines using Python, Scikit-learn, and OpenCV.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">03</span>
                <Code2 size={18} className="text-accent" />
              </div>
              <h3 className="pillar-title">IoT & Hardware Systems</h3>
              <p className="pillar-desc">
                Interfacing Arduino Uno, ESP microcontrollers, and sensors with software applications and telemetry dashboards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
