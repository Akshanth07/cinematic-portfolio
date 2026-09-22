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
                I am a Computer Science & Engineering student specializing in Internet of Things at <strong>SRM Institute of Science and Technology</strong> with a <strong>9.36 / 10 CGPA</strong>.
              </p>
              <p>
                My engineering focus spans <strong>enterprise backend architectures</strong> with Java and Spring Boot, <strong>asynchronous Python & FastAPI microservices</strong>, <strong>machine learning anomaly detection</strong>, and <strong>real-time IoT/WebRTC systems</strong>.
              </p>
              <p>
                I have hands-on enterprise development experience as a Backend Intern at <strong>Saint-Gobain</strong> (Oxygen & Transition platforms) and qualified for <strong>Smart India Hackathon 2026 (SIH26133)</strong> building rural telemedicine solutions.
              </p>
            </div>

            <div className="about-credentials-row">
              <div className="credential-pill">
                <Award size={15} className="text-accent" />
                <span>SRMIST — 9.36 / 10 CGPA</span>
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
                <span>CHENNAI, INDIA</span>
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
              <h3 className="pillar-title">Backend Engineering</h3>
              <p className="pillar-desc">
                Developing robust APIs and server-side systems with Java, Spring Boot, Python, FastAPI, and PostgreSQL.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">02</span>
                <Cpu size={18} className="text-accent" />
              </div>
              <h3 className="pillar-title">AI & Machine Learning</h3>
              <p className="pillar-desc">
                Building machine learning anomaly detection models and computer vision pipelines using Python and OpenCV.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-num">03</span>
                <Code2 size={18} className="text-accent" />
              </div>
              <h3 className="pillar-title">IoT & Embedded Systems</h3>
              <p className="pillar-desc">
                Connecting physical Arduino microcontrollers and sensor hardware with web dashboards and software services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
