import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('INITIALIZING ENVIRONMENT...');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 12) + 8;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress < 30) {
        setPhaseText('CALIBRATING WEBGL SHADER PIPELINE...');
      } else if (currentProgress < 65) {
        setPhaseText('COMPOSITING CINEMATIC VIDEO FOOTAGE...');
      } else if (currentProgress < 90) {
        setPhaseText('SYNCHRONIZING PROJECT REPOSITORIES...');
      } else {
        setPhaseText('SYSTEM READY — ENTERING UNIVERSE');
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 1.1,
            ease: 'power3.inOut',
            onComplete: () => {
              setIsDone(true);
              if (onLoaded) onLoaded();
            }
          });
        }, 300);
      }
    }, 65);

    return () => clearInterval(interval);
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div className="loading-screen" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div className="loader-noise" />
      <div className="loader-vignette" />
      
      <div className="loader-content">
        <div className="loader-brand">
          <span className="loader-tag">PORTFOLIO · 2026</span>
          <h1 className="loader-name">AKSHANTH N</h1>
          <p className="loader-role">AI · BACKEND · IoT</p>
        </div>

        <div className="loader-progress-wrap">
          <div className="loader-bar-outer">
            <div className="loader-bar-inner" style={{ width: `${progress}%` }} />
          </div>
          <div className="loader-meta">
            <span className="loader-phase">{phaseText}</span>
            <span className="loader-percent">{progress}%</span>
          </div>
        </div>

        <div className="loader-subtext">
          <span>SRMIST</span>
          <span>SAINT-GOBAIN</span>
          <span>CHENNAI, INDIA</span>
        </div>
      </div>
    </div>
  );
}
