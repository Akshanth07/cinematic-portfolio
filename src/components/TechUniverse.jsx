import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  ['JAVA', 'BACKEND'], ['SPRING BOOT', 'BACKEND'], ['PYTHON', 'AI / API'],
  ['FASTAPI', 'API'], ['POSTGRESQL', 'DATA'], ['REACT', 'FRONTEND'],
  ['MACHINE LEARNING', 'AI'], ['COMPUTER VISION', 'AI'], ['IoT', 'SYSTEMS'],
  ['REST APIs', 'BACKEND'], ['THREE.JS', 'WEBGL'], ['GIT', 'TOOLS']
];

export function TechUniverse() {
  const root = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.tech-node');
      gsap.set(cards, { opacity: 0, y: 60, scale: .86 });
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((card, i) => gsap.to(card, { opacity: 1, y: 0, scale: 1, duration: .9, delay: i * .055, ease: 'power3.out' }));
        observer.disconnect();
      }, { threshold: .18 });
      observer.observe(root.current);
      gsap.to('.orbit-one', { rotate: 360, duration: 35, repeat: -1, ease: 'none' });
      gsap.to('.orbit-two', { rotate: -360, duration: 52, repeat: -1, ease: 'none' });
      return () => observer.disconnect();
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tech" ref={root} className="tech-universe">
      <div className="section-kicker">02 / THE TECH UNIVERSE</div>
      <div className="tech-copy">
        <p className="eyebrow">ENGINEERING · AI · SYSTEMS</p>
        <h2>TOOLS I<br /><em>BUILD WITH.</em></h2>
        <p className="tech-description">A connected stack across backend engineering, AI, computer vision and IoT — presented as a system, not a checklist.</p>
      </div>
      <div className="tech-field" aria-label="Technology stack">
        <div className="tech-orbit orbit-one" />
        <div className="tech-orbit orbit-two" />
        <div className="tech-core">AKSHANTH<span>ENGINEERING SYSTEM</span></div>
        {skills.map(([name, type], i) => (
          <div key={name} className={`tech-node node-${i + 1}`}>
            <span>{name}</span><small>{type}</small>
          </div>
        ))}
      </div>
      <div className="tech-footer"><span>JAVA</span><span>AI / ML</span><span>IoT</span><span>WEB</span></div>
    </section>
  );
}
