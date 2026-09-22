import React from 'react';
import { Activity, ShieldCheck, Database, Calendar, Video, Clock, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Lock, Server } from 'lucide-react';

export function ProjectCardVisual({ projectId }) {
  if (projectId === 'curatrack') {
    return (
      <div className="project-visual-preview curatrack-preview" aria-hidden="true">
        <div className="preview-top-bar">
          <span className="preview-dot red" />
          <span className="preview-dot yellow" />
          <span className="preview-dot green" />
          <span className="preview-title-bar">curatrack-v2 // clinical-portal</span>
        </div>
        <div className="preview-content">
          <div className="preview-header-row">
            <div className="preview-badge-status">
              <span className="live-pulse-dot" />
              <span>CONSULTATION ACTIVE</span>
            </div>
            <span className="preview-room-tag">ROOM #CTR-804</span>
          </div>

          <div className="preview-schedule-grid">
            <div className="schedule-item active">
              <div className="schedule-item-header">
                <Calendar size={11} className="text-accent" />
                <span>CLINICAL APPOINTMENT</span>
              </div>
              <strong className="schedule-patient">Dr. David Ross · Patient Portal</strong>
              <div className="schedule-meta-row">
                <span>FastAPI Backend</span>
                <span className="status-badge-ok">CONNECTED</span>
              </div>
            </div>

            <div className="telemed-controls-row">
              <div className="telemed-btn"><Video size={10} /> <span>VIDEO</span></div>
              <div className="telemed-btn"><Clock size={10} /> <span>14:30 EST</span></div>
              <div className="telemed-btn"><Database size={10} /> <span>POSTGRES</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'finbud') {
    return (
      <div className="project-visual-preview finbud-preview" aria-hidden="true">
        <div className="preview-top-bar">
          <span className="preview-dot red" />
          <span className="preview-dot yellow" />
          <span className="preview-dot green" />
          <span className="preview-title-bar">finbud // financial-os</span>
        </div>
        <div className="preview-content">
          <div className="preview-header-row">
            <div className="preview-badge-status">
              <TrendingUp size={11} className="text-accent" />
              <span>MUTUAL FUND SYNC</span>
            </div>
            <span className="preview-room-tag">ALEMBIC DB v2.1</span>
          </div>

          <div className="finbud-ledger-box">
            <div className="ledger-stat-row">
              <div className="ledger-stat">
                <span className="stat-lbl">SCHEME SYNC</span>
                <strong className="stat-val">sync_schemes.py</strong>
              </div>
              <div className="ledger-stat">
                <span className="stat-lbl">DATABASE ORM</span>
                <strong className="stat-val">SQLAlchemy</strong>
              </div>
            </div>

            <div className="finbud-spark-bars">
              <div className="spark-bar" style={{ height: '40%' }} />
              <div className="spark-bar" style={{ height: '65%' }} />
              <div className="spark-bar" style={{ height: '55%' }} />
              <div className="spark-bar" style={{ height: '80%' }} />
              <div className="spark-bar" style={{ height: '95%' }} />
              <div className="spark-bar active" style={{ height: '70%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'safetysense') {
    return (
      <div className="project-visual-preview safetysense-preview" aria-hidden="true">
        <div className="preview-top-bar">
          <span className="preview-dot red" />
          <span className="preview-dot yellow" />
          <span className="preview-dot green" />
          <span className="preview-title-bar">safetysense // telemetry-stream</span>
        </div>
        <div className="preview-content">
          <div className="preview-header-row">
            <div className="preview-badge-status">
              <Activity size={11} className="text-accent" />
              <span>ARDUINO INGESTION</span>
            </div>
            <span className="preview-room-tag">SUPERVISED ML</span>
          </div>

          <div className="safety-telemetry-box">
            <div className="telemetry-reading-item">
              <span className="sensor-tag">SENSOR ARRAY</span>
              <strong className="sensor-val">Hardware Live (server.js)</strong>
            </div>

            <div className="telemetry-reading-item alert-status">
              <span className="sensor-tag">DETECTION SCRIPT</span>
              <strong className="sensor-val">anomaly_detection.py</strong>
            </div>

            <div className="sensor-wave-graphic">
              <div className="wave-line" />
              <div className="wave-marker" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'ecommerce') {
    return (
      <div className="project-visual-preview ecommerce-preview" aria-hidden="true">
        <div className="preview-top-bar">
          <span className="preview-dot red" />
          <span className="preview-dot yellow" />
          <span className="preview-dot green" />
          <span className="preview-title-bar">spring-boot // rest-api-service</span>
        </div>
        <div className="preview-content">
          <div className="preview-header-row">
            <div className="preview-badge-status">
              <Server size={11} className="text-accent" />
              <span>SPRING SECURITY / JWT</span>
            </div>
            <span className="preview-room-tag">POSTGRESQL JPA</span>
          </div>

          <div className="ecommerce-routes-box">
            <div className="route-pill">
              <span className="http-method post">POST</span>
              <span className="route-path">/api/orders/checkout</span>
            </div>
            <div className="route-pill">
              <span className="http-method get">GET</span>
              <span className="route-path">/api/products/category</span>
            </div>
            <div className="route-pill">
              <span className="http-method auth">AUTH</span>
              <span className="route-path">RBAC: ROLE_USER / ROLE_ADMIN</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'foodcourt') {
    return (
      <div className="project-visual-preview foodcourt-preview" aria-hidden="true">
        <div className="preview-top-bar">
          <span className="preview-dot red" />
          <span className="preview-dot yellow" />
          <span className="preview-dot green" />
          <span className="preview-title-bar">foodcourt // multi-tenant-dbms</span>
        </div>
        <div className="preview-content">
          <div className="preview-header-row">
            <div className="preview-badge-status">
              <Activity size={11} className="text-accent" />
              <span>TOKEN FULFILLMENT</span>
            </div>
            <span className="preview-room-tag">MYSQL + STREAMLIT</span>
          </div>

          <div className="ecommerce-routes-box">
            <div className="route-pill">
              <span className="http-method post">QUEUE</span>
              <span className="route-path">Real-Time Token Ingest</span>
            </div>
            <div className="route-pill">
              <span className="http-method get">ADMIN</span>
              <span className="route-path">Streamlit Analytics Engine</span>
            </div>
            <div className="route-pill">
              <span className="http-method auth">TENANT</span>
              <span className="route-path">Vendor Sales & Billing</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

