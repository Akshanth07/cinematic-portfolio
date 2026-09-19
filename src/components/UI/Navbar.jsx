import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar({ activeSection = 'hero' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: '01 HERO', href: '#hero' },
    { id: 'tech', label: '02 TECH', href: '#tech' },
    { id: 'journey', label: '03 JOURNEY', href: '#journey' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'projects', label: '04 WORK', href: '#projects' },
    { id: 'contact', label: '05 CONTACT', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
            <span className="brand-dot" />
            <span className="brand-text">AKSHANTH N</span>
            <span className="brand-badge">SRMIST</span>
          </a>

          <nav className="nav-desktop" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span className="nav-link-index">{item.label.split(' ')[0]}</span>
                <span className="nav-link-text">{item.label.split(' ').slice(1).join(' ') || item.label}</span>
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              href="https://github.com/Akshanth07"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn"
              data-cursor="GITHUB"
            >
              <span>GITHUB</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="mobile-nav-menu">
          <div className="mobile-nav-header">
            <div className="mobile-nav-title">AKSHANTH N</div>
            <div className="mobile-nav-tag">PORTFOLIO — 2026</div>
          </div>

          <nav className="mobile-nav-links">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{ '--delay': `${index * 0.06}s` }}
              >
                <span className="mobile-link-num">0{index + 1}</span>
                <span className="mobile-link-name">{item.label.replace(/^\d+\s*/, '')}</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-footer-meta">
              <p>B.Tech CSE (IoT) · SRMIST</p>
              <p>AI · Backend · IoT Developer</p>
            </div>
            <div className="mobile-footer-links">
              <a href="https://github.com/Akshanth07" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/akshanth-n-524a87258/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:akshanth2004@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
