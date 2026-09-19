import React, { useState } from 'react';
import { Terminal, Server, Eye, Radio, Globe } from 'lucide-react';
import { skillsData } from '../../data/skills';

export function TechFilm({ progress, mousePos }) {
  const [activeNode, setActiveNode] = useState(skillsData[0]);

  // Scene 02 active range: 0.20 to 0.52
  const isActive = progress >= 0.20 && progress <= 0.52;

  // The 4 spatial clusters spaced with generous breathing room
  const clusters = [
    {
      id: 'backend',
      index: '01',
      title: 'BACKEND ARCHITECTURE',
      subtitle: 'DISTRIBUTED SERVICES & DATA ENGINES',
      center: 0.28,
      range: [0.24, 0.32],
      techs: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Git'],
      coords: 'LOC: [Z: -140m · SEC: 01-BE]',
      icon: Server,
    },
    {
      id: 'ai',
      index: '02',
      title: 'INTELLIGENT SYSTEMS',
      subtitle: 'MACHINE LEARNING & COMPUTER VISION',
      center: 0.34,
      range: [0.30, 0.38],
      techs: ['Machine Learning', 'Computer Vision', 'YOLO', 'PyTorch', 'OpenCV'],
      coords: 'LOC: [Z: -300m · SEC: 02-AI]',
      icon: Eye,
    },
    {
      id: 'iot',
      index: '03',
      title: 'IoT & EMBEDDED MATRIX',
      subtitle: 'HARDWARE SENSING & REAL-TIME STREAMS',
      center: 0.40,
      range: [0.36, 0.44],
      techs: ['Arduino', 'Sensors', 'Embedded Systems'],
      coords: 'LOC: [Z: -460m · SEC: 03-IOT]',
      icon: Radio,
    },
    {
      id: 'frontend',
      index: '04',
      title: 'CLIENT & SPATIAL GRAPHICS',
      subtitle: 'REACTIVE INTERFACES & WEBGL ENGINES',
      center: 0.46,
      range: [0.42, 0.50],
      techs: ['React', 'JavaScript', 'Three.js'],
      coords: 'LOC: [Z: -620m · SEC: 04-FE]',
      icon: Globe,
    },
  ];

  // Mouse parallax
  const px = mousePos.x * 20;
  const py = mousePos.y * 15;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.20 && progress < 0.24) {
    sceneOpacity = (progress - 0.20) / 0.04;
  } else if (progress >= 0.24 && progress <= 0.49) {
    sceneOpacity = 1;
  } else if (progress > 0.49 && progress <= 0.52) {
    sceneOpacity = 1 - (progress - 0.49) / 0.03;
  }

  // Find active cluster index for HUD telemetry
  let activeClusterIndex = 1;
  if (progress >= 0.43) activeClusterIndex = 4;
  else if (progress >= 0.37) activeClusterIndex = 3;
  else if (progress >= 0.31) activeClusterIndex = 2;

  return (
    <div
      className="film-scene tech-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive ? 'visible' : 'hidden',
      }}
    >
      {/* 3D Coordinate Grid & Matrix Guidelines */}
      <div 
        className="tech-matrix-grid"
        style={{
          transform: `perspective(1000px) rotateX(65deg) translate3d(${px * 0.2}px, ${(progress - 0.20) * 800}px, 0)`,
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
            <span>VELOCITY: 24 km/s</span>
            <span className="hud-divider">·</span>
            <span className="tech-active-cluster">CLUSTER 0{activeClusterIndex} // 04</span>
          </div>
        </div>
      </div>

      {/* Spatial 3D Cluster Environment */}
      <div 
        className="tech-spatial-clusters-container"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
      >
        {clusters.map((cluster) => {
          // Distance in progress units from camera focal point
          const dist = progress - cluster.center;
          
          // Smoother, heavier non-linear curve
          const clusterZ = -dist * 6000;
          const clusterScale = Math.max(0.4, 1 - Math.abs(dist) * 12);
          const clusterOpacity = Math.max(0, 1 - Math.abs(dist) * 16);
          const clusterBlur = Math.abs(dist) > 0.03 ? (Math.abs(dist) - 0.03) * 350 : 0;
          const isDominant = Math.abs(dist) < 0.035;

          const IconComp = cluster.icon;

          return (
            <div
              key={cluster.id}
              className={`spatial-tech-cluster ${isDominant ? 'dominant-cluster' : ''}`}
              style={{
                transform: `perspective(1200px) translate3d(0, 0, ${clusterZ}px) scale(${clusterScale})`,
                opacity: clusterOpacity,
                filter: clusterBlur > 0 ? `blur(${clusterBlur}px)` : 'none',
                pointerEvents: isDominant ? 'auto' : 'none',
              }}
            >
              {/* Cluster Architectural Backdrop Box */}
              <div className="cluster-frame-border" />
              
              <div className="cluster-meta-bar">
                <div className="cluster-index-badge">
                  <IconComp size={14} className="text-accent" />
                  <span>CLUSTER {cluster.index}</span>
                </div>
                <span className="cluster-coords-tag">{cluster.coords}</span>
              </div>

              <h3 className="cluster-main-title">{cluster.title}</h3>
              <p className="cluster-subtitle">{cluster.subtitle}</p>

              {/* Physical Floating Technology Nodes */}
              <div className="cluster-tech-nodes-cloud">
                {cluster.techs.map((techName, tIdx) => {
                  const matchingData = skillsData.find((n) => n.name.toLowerCase() === techName.toLowerCase()) || {
                    name: techName,
                    category: cluster.title,
                    related: ['Core Tech'],
                    context: `Core technology utilized in ${cluster.title.toLowerCase()}.`,
                  };

                  const isSelected = activeNode?.name === techName;
                  const nodeDepthZ = ((tIdx % 3) - 1) * 30;
                  const nodeY = ((tIdx % 2) === 0 ? -1 : 1) * (tIdx * 3);

                  return (
                    <button
                      key={techName}
                      className={`spatial-tech-node ${isSelected ? 'node-active' : ''}`}
                      onClick={() => setActiveNode(matchingData)}
                      style={{
                        transform: `translate3d(0, ${nodeY}px, ${nodeDepthZ}px)`,
                      }}
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
          );
        })}
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
