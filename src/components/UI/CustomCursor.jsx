import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const checkHoverTarget = (e) => {
      const target = e.target.closest('a, button, [role="button"], .interactive, .project-card, .tech-node, .timeline-card');
      if (target) {
        setIsHovered(true);
        const label = target.getAttribute('data-cursor');
        if (label) {
          setCursorText(label);
        } else if (target.closest('.project-card')) {
          setCursorText('VIEW');
        } else if (target.closest('.tech-node')) {
          setCursorText('INSPECT');
        } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const render = () => {
      // Smooth lerp for outer ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', checkHoverTarget, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', checkHoverTarget);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div className={`custom-cursor-wrapper ${isVisible ? 'visible' : ''}`} aria-hidden="true">
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${cursorText ? 'has-text' : ''} ${isClicking ? 'clicking' : ''}`}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </div>
    </div>
  );
}
