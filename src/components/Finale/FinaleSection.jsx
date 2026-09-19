import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

export function FinaleSection() {
  return (
    <section id="contact" className="finale-section" aria-label="Finale and Contact">
      <div className="finale-ambient-glow" />
      <div className="finale-noise" />

      <div className="finale-container">
        <div className="section-chapter-tag">
          <span className="chapter-num">SCENE 05</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">CONTACT</span>
        </div>

        {/* Closing Statement */}
        <div className="finale-hero-block">
          <span className="finale-eyebrow">
            <Sparkles size={14} className="text-accent" />
            <span>LET'S CONNECT</span>
          </span>

          <h2 className="finale-title">
            BUILDING<br />
            WHAT'S <em>NEXT.</em>
          </h2>

          <p className="finale-subtitle">
            Open for software engineering opportunities, backend development roles, and technical collaborations.
          </p>
        </div>

        {/* Contact Matrix */}
        <div className="finale-links-grid">
          <a
            href={profileData.socials.email}
            className="contact-card"
            data-cursor="EMAIL"
          >
            <div className="contact-card-icon">
              <Mail size={20} className="text-accent" />
            </div>
            <div className="contact-card-info">
              <span className="contact-type">EMAIL</span>
              <strong className="contact-val">{profileData.socials.emailRaw}</strong>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>

          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            data-cursor="GITHUB"
          >
            <div className="contact-card-icon">
              <Github size={20} className="text-accent" />
            </div>
            <div className="contact-card-info">
              <span className="contact-type">GITHUB</span>
              <strong className="contact-val">github.com/Akshanth07</strong>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>

          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            data-cursor="LINKEDIN"
          >
            <div className="contact-card-icon">
              <Linkedin size={20} className="text-accent" />
            </div>
            <div className="contact-card-info">
              <span className="contact-type">LINKEDIN</span>
              <strong className="contact-val">Akshanth N</strong>
            </div>
            <ArrowUpRight size={16} className="contact-arrow" />
          </a>
        </div>

        {/* System Terminal Status Bar */}
        <div className="finale-system-terminal">
          <div className="terminal-left">
            <span className="terminal-dot" />
            <code>SYSTEM STATUS: ONLINE</code>
          </div>
          <div className="terminal-right">
            <span>BUILDING DIGITAL SYSTEMS</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="finale-footer">
          <div className="footer-left">
            <span className="footer-brand">AKSHANTH N</span>
            <span className="footer-tag">Computer Science & Engineering (IoT) · SRMIST</span>
          </div>
          <div className="footer-right">
            <span>© 2026 AKSHANTH N</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
