import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';

export function FinaleFilm({ progress, mousePos }) {
  // Scene 05 active range: 0.92 to 1.00
  const isActive = progress >= 0.92;

  // Mouse parallax
  const px = mousePos.x * 16;
  const py = mousePos.y * 10;

  // Scene overall opacity based on entry
  const sceneOpacity = Math.max(0, Math.min(1, (progress - 0.92) / 0.02));

  // Progressive typographic line reveals
  const line1Opacity = Math.max(0, Math.min(1, (progress - 0.925) / 0.015));
  const line2Opacity = Math.max(0, Math.min(1, (progress - 0.94) / 0.015));
  const line3Opacity = Math.max(0, Math.min(1, (progress - 0.955) / 0.015));

  const contactsOpacity = Math.max(0, Math.min(1, (progress - 0.965) / 0.015));

  const contactLinks = [
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/Akshanth07',
      url: profileData.socials.github,
      icon: Github,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/akshanth-n',
      url: profileData.socials.linkedin,
      icon: Linkedin,
    },
    {
      id: 'email',
      label: 'EMAIL',
      value: profileData.socials.emailRaw,
      url: profileData.socials.email,
      icon: Mail,
    },
  ];

  return (
    <div
      className="film-scene finale-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      <div className="finale-deep-space-glow" />

      <div 
        className="finale-film-container"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {/* Chapter Tag */}
        <div className="section-chapter-tag text-center">
          <span className="chapter-num">SCENE 05</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">TRANSMISSION</span>
        </div>

        {/* Enormous Staggered Display Typography */}
        <div className="finale-monumental-typography">
          <span 
            className="finale-line"
            style={{
              opacity: line1Opacity,
              transform: `translate3d(0, ${(1 - line1Opacity) * 30}px, 0)`,
            }}
          >
            BUILDING
          </span>
          <span 
            className="finale-line"
            style={{
              opacity: line2Opacity,
              transform: `translate3d(0, ${(1 - line2Opacity) * 30}px, 0)`,
            }}
          >
            WHAT'S
          </span>
          <span 
            className="finale-line text-accent"
            style={{
              opacity: line3Opacity,
              transform: `translate3d(0, ${(1 - line3Opacity) * 30}px, 0)`,
            }}
          >
            NEXT.
          </span>
        </div>

        {/* Identity & Core Focus */}
        <div 
          className="finale-identity-block"
          style={{ opacity: contactsOpacity }}
        >
          <h3 className="finale-name">{profileData.name}</h3>
          <p className="finale-role">AI · BACKEND · IoT DEVELOPER · SRMIST</p>
        </div>

        {/* Direct Transmission Cards */}
        <div 
          className="finale-transmission-grid"
          style={{
            opacity: contactsOpacity,
            transform: `translate3d(0, ${(1 - contactsOpacity) * 20}px, 0)`,
          }}
        >
          {contactLinks.map((item) => {
            const IconComp = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="finale-contact-card"
                data-cursor="CONNECT"
              >
                <div className="contact-icon-bubble">
                  <IconComp size={18} />
                </div>
                <div className="contact-info-col">
                  <span className="contact-lbl">{item.label}</span>
                  <strong className="contact-val">{item.value}</strong>
                </div>
                <ArrowUpRight size={16} className="contact-ext-arrow" />
              </a>
            );
          })}
        </div>

        {/* System Online Status Bar */}
        <div 
          className="finale-terminal-bar"
          style={{ opacity: contactsOpacity }}
        >
          <div className="terminal-status-left">
            <span className="terminal-live-dot" />
            <span>SYSTEM STATUS: ONLINE // BUILDING DIGITAL SYSTEMS</span>
          </div>
          <div className="terminal-status-right">
            <span>CHENNAI, INDIA</span>
          </div>
        </div>

        {/* Cinematic Minimal Footer */}
        <footer className="finale-minimal-footer" style={{ opacity: contactsOpacity }}>
          <span>© 2026 AKSHANTH N — COMPUTER SCIENCE & ENGINEERING (IoT) · SRMIST</span>
          <span className="footer-coordinates">13.0827° N, 80.2707° E</span>
        </footer>
      </div>
    </div>
  );
}
