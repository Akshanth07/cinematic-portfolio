import React, { useState } from 'react';
import { Terminal, Server, Eye, Radio, Globe } from 'lucide-react';
import { skillsData } from '../../data/skills';

export function TechFilm({ progress, mousePos }) {
  const [activeNode, setActiveNode] = useState(skillsData[0]);

  // Scene 02 active range: 0.20 to 0.46
  const isActive = progress >= 0.20 && progress < 0.46;

  const clusters = [
    {
      id: 'backend',
      index: '01',
      title: 'BACKEND ARCHITECTURE',
      subtitle: 'DISTRIBUTED SERVICES & DATA ENGINES',
      start: 0.20,
      end: 0.265,
      techs: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Git'],
      coords: 'LOC: [Z: -140m · SEC: 01-BE]',
      icon: Server,
    },
    {
      id: 'ai',
      index: '02',
      title: 'INTELLIGENT SYSTEMS',
      subtitle: 'MACHINE LEARNING & COMPUTER VISION',
      start: 0.265,
      end: 0.33,
      techs: ['Machine Learning', 'Computer Vision', 'YOLO', 'PyTorch', 'OpenCV'],
      coords: 'LOC: [Z: -300m · SEC: 02-AI]',
      icon: Eye,
    },
    {
      id: 'iot',
      index: '03',
      title: 'IoT & EMBEDDED MATRIX',
      subtitle: 'HARDWARE SENSING & REAL-TIME STREAMS',
      start: 0.33,
      end: 0.395,
      techs: ['Arduino', 'Sensors', 'Embedded Systems'],
      coords: 'LOC: [Z: -460m · SEC: 03-IOT]',
      icon: Radio,
    },
    {
      id: 'frontend',
      index: '04',
      title: 'CLIENT & SPATIAL GRAPHICS',
      subtitle: 'REACTIVE INTERFACES & WEBGL ENGINES',
      start: 0.395,
      end: 0.46,
      techs: ['React', 'JavaScript', 'Three.js'],
      coords: 'LOC: [Z: -620m · SEC: 04-FE]',
      icon: Globe,
    },
  ];

  const px = mousePos.x * 15;
  const py = mousePos.y * 10;

  // Scene overall fade in at 0.20, fade out at 0.45
  let sceneOpacity = 0;
  if (progress >= 0.20 && progress < 0.22) {
    sceneOpacity = (progress - 0.20) / 0.02;
  } else if (progress >= 0.22 && progress <= 0.44) {
    sceneOpacity = 1;
  } else if (progress > 0.44 && progress <= 0.46) {
    sceneOpacity = Math.max(0, 1 - (progress - 0.44) / 0.02);
  }

  // Find currently active cluster cleanly without overlaps
  const currentClusterIdx = clusters.findIndex(c => progress >= c.start && progress < c.end);
  const activeCluster = clusters[currentClusterIdx >= 0 ? currentClusterIdx : (progress < 0.20 ? 0 : 3)];

  // Calculate smooth in-place fade & scale for the current cluster
  let itemOpacity = 1;
  let itemTranslateY = 0;
  if (activeCluster) {
    const span = activeCluster.end - activeCluster.start;
    const local = (progress - activeCluster.start) / span; // 0.0 -> 1.0
    if (local < 0.15) {
      itemOpacity = local / 0.15;
      itemTranslateY = (1 - itemOpacity) * 20;
    } else if (local > 0.85) {
      itemOpacity = Math.max(0, (1 - local) / 0.15);
      itemTranslateY = (1 - itemOpacity) * -20;
    }
  }

  const IconComp = activeCluster.icon;

  return (
    <div
      className="film-scene tech-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive && sceneOpacity > 0 ? 'visible' : 'hidden',
      }}
    >
      {/* 3D Coordinate Grid */}
      <div 
        className="tech-matrix-grid"
        style={{
          transform: `perspective(1000px) rotateX(65deg) translate3d(${px * 0.2}px, ${(progress - 0.20) * 500}px, 0)`,
        }}
      />

      {/* Spatial HUD Overhead */}
      <div className="tech-film-hud">
        <div className="tech-hud-header">
          <div className="section-chapter-tag">
            <span className="chapter-num">SCENE 02</span>
            <span className="chapter-divider">/</span>
            <span className="chapter-title">SPATIAL TECH WORLD</span>
          </div>
          <div className="tech-hud-telemetry">
            <span>TRAJECTORY: DOLLY_FORWARD</span>
            <span className="hud-divider">·</span>
            <span>VELOCITY: 32 km/s</span>
            <span className="hud-divider">·</span>
            <span className="tech-active-cluster">CLUSTER {activeCluster.index} // 04</span>
          </div>
        </div>
      </div>

      {/* Single Clean Focused Cluster Stage (No overlapping cards!) */}
      <div 
        className="tech-spatial-clusters-container"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        <div
          className="spatial-tech-cluster dominant-cluster"
          style={{
            opacity: itemOpacity,
            transform: `translate3d(0, ${itemTranslateY}px, 0)`,
            transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          }}
        >
          <div className="cluster-frame-border" />
          
          <div className="cluster-meta-bar">
            <div className="cluster-index-badge">
              <IconComp size={14} className="text-accent" />
              <span>CLUSTER {activeCluster.index}</span>
            </div>
            <span className="cluster-coords-tag">{activeCluster.coords}</span>
          </div>

          <h3 className="cluster-main-title">{activeCluster.title}</h3>
          <p className="cluster-subtitle">{activeCluster.subtitle}</p>

          <div className="cluster-tech-nodes-cloud">
            {activeCluster.techs.map((techName, tIdx) => {
              const matchingData = skillsData.find((n) => n.name.toLowerCase() === techName.toLowerCase()) || {
                name: techName,
                category: activeCluster.title,
                related: ['Core Tech'],
                context: `Core technology utilized in ${activeCluster.title.toLowerCase()}.`,
              };

              const isSelected = activeNode?.name === techName;

              return (
                <button
                  key={techName}
                  className={`spatial-tech-node ${isSelected ? 'node-active' : ''}`}
                  onClick={() => setActiveNode(matchingData)}
                  data-cursor="INSPECT"
                >
                  <span className="node-indicator-dot" />
                  <span className="node-label">{techName}</span>
                  <span className="node-layer-tag">L{tIdx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Node Telemetry Inspector */}
      {activeNode && (
        <aside className="tech-inspector-hud" aria-label="Technology Inspector">
          <div className="inspector-panel">
            <div className="inspector-top">
              <div className="inspector-live-tag">
                <Terminal size={11} className="text-accent" />
                <span>SPATIAL NODE INSPECTOR</span>
              </div>
              <span className="inspector-cat">{activeNode.category?.toUpperCase()}</span>
            </div>

            <h4 className="inspector-tech-name">{activeNode.name}</h4>

            <div className="inspector-detail-block">
              <span className="detail-lbl">RELATED SYSTEM MODULES</span>
              <div className="detail-tag-cloud">
                {activeNode.related?.map((item) => (
                  <span key={item} className="detail-chip">{item}</span>
                ))}
              </div>
            </div>

            <div className="inspector-detail-block">
              <span className="detail-lbl">ENGINEERING CONTEXT</span>
              <p className="detail-context-txt">{activeNode.context}</p>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}
