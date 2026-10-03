import React from 'react';
import { Activity, Database, Calendar, Video, Clock, Server } from 'lucide-react';

export function ProjectCardVisual({ projectId }) {
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
              <span>TELEMEDICINE PORTAL</span>
            </div>
            <span className="preview-room-tag">ROOM #CTR-804</span>
          </div>

          <div className="preview-schedule-grid">
            <div className="schedule-item active">
              <div className="schedule-item-header">
                <Calendar size={11} className="text-accent" />
                <span>CLINICAL APPOINTMENT</span>
              </div>
              <strong className="schedule-patient">Doctor & Patient Teleconsultation</strong>
              <div className="schedule-meta-row">
                <span>FastAPI + Supabase</span>
                <span className="status-badge-ok">CONNECTED</span>
              </div>
            </div>

            <div className="telemed-controls-row">
              <div className="telemed-btn"><Video size={10} /> <span>WEBRTC</span></div>
              <div className="telemed-btn"><Clock size={10} /> <span>BLE SYNC</span></div>
              <div className="telemed-btn"><Database size={10} /> <span>POSTGRES</span></div>
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
              <span>SENSOR ACQUISITION</span>
            </div>
            <span className="preview-room-tag">ISOLATION FOREST ML</span>
          </div>

          <div className="safety-telemetry-box">
            <div className="telemetry-reading-item">
              <span className="sensor-tag">SENSOR ARRAY</span>
              <strong className="sensor-val">Arduino Uno + ESP8266</strong>
            </div>

            <div className="telemetry-reading-item alert-status">
              <span className="sensor-tag">DETECTION PIPELINE</span>
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
              <span>ORDER FULFILLMENT</span>
            </div>
            <span className="preview-room-tag">MYSQL + STREAMLIT</span>
          </div>

          <div className="ecommerce-routes-box">
            <div className="route-pill">
              <span className="http-method post">QUEUE</span>
              <span className="route-path">Customer Ordering & Billing</span>
            </div>
            <div className="route-pill">
              <span className="http-method get">ADMIN</span>
              <span className="route-path">Streamlit Analytics Engine</span>
            </div>
            <div className="route-pill">
              <span className="http-method auth">TENANT</span>
              <span className="route-path">Vendor Order Management</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
