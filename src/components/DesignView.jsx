import React, { useState } from 'react';
import { ANATOMY_PARTS } from '../data/roboticsData';
import { playClickSound } from '../utils/sound';

export default function DesignView() {
  const [activePartId, setActivePartId] = useState('sensors');

  const activePart = ANATOMY_PARTS.find((p) => p.id === activePartId) || ANATOMY_PARTS[0];

  const handleSelectPart = (id) => {
    playClickSound();
    setActivePartId(id);
  };

  return (
    <div className="design-view-container">
      <div className="section-header">
        <span className="badge-tag">01 · Mechanical & Electronic Architecture</span>
        <h2>What's a robot actually made of?</h2>
        <p>
          Every robot — from a three-dollar line follower to a million-dollar bipedal humanoid — is built from the same five core physical ingredients, plus the engineering design loop.
        </p>
      </div>

      {/* Interactive Anatomy Explorer */}
      <div className="anatomy-explorer-container glass-panel">
        {/* Left column: Part Selectors & Visual Target */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--cyan)' }}>
            Select an Anatomy Subsystem:
          </h3>
          <div className="anatomy-parts-list">
            {ANATOMY_PARTS.map((part) => (
              <button
                key={part.id}
                className={`anatomy-part-selector ${activePartId === part.id ? 'active' : ''}`}
                onClick={() => handleSelectPart(part.id)}
              >
                <span style={{ fontSize: '1.6rem' }}>{part.icon}</span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.05rem', color: activePartId === part.id ? 'var(--cyan)' : 'var(--text-main)' }}>
                    {part.name}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }} className="mono-font">
                    {part.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right column: Deep Subsystem Inspection */}
        <div className="anatomy-details-panel glass-panel" style={{ background: 'rgba(12, 16, 42, 0.7)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid var(--border-line)', paddingBottom: '16px' }}>
            <span style={{ fontSize: '2.5rem' }}>{activePart.icon}</span>
            <div>
              <span className="badge-tag">{activePart.role}</span>
              <h3 style={{ fontSize: '1.6rem', marginTop: '4px' }}>{activePart.name}</h3>
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.65' }}>
            {activePart.summary}
          </p>

          <p style={{ fontSize: '0.94rem', color: 'var(--text-dim)', lineHeight: '1.65' }}>
            {activePart.description}
          </p>

          <div>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.06em' }} className="mono-font">
              Key Hardware & Components
            </h4>
            <div className="anatomy-chip-list">
              {activePart.components.map((c, i) => (
                <span key={i} className="anatomy-chip">
                  ⚙️ {c}
                </span>
              ))}
            </div>
          </div>

          <div className="anatomy-funfact-box">
            <strong>💡 Did You Know?</strong>
            {activePart.funFact}
          </div>
        </div>
      </div>

      <div className="circuit-divider" />

      {/* Grid of the 6 Building Blocks */}
      <div className="section-header" style={{ marginTop: '40px' }}>
        <span className="badge-tag">Comprehensive Specs</span>
        <h2>The 6 Pillars of Robotics</h2>
        <p>
          Mix and match these components differently and you get an entirely different machine — whether a robotic rover, an underwater drone, or an automated surgical arm.
        </p>
      </div>

      <div className="module-cards-grid">
        {ANATOMY_PARTS.map((part) => (
          <div 
            key={part.id} 
            className="module-card glass-panel glass-card-interactive"
            onClick={() => {
              handleSelectPart(part.id);
              window.scrollTo({ top: 180, behavior: 'smooth' });
            }}
          >
            <div className="module-top">
              <div className="module-icon-wrap">{part.icon}</div>
              <span className="badge-tag" style={{ marginBottom: '8px' }}>{part.role}</span>
              <h3 style={{ marginTop: '8px' }}>{part.name}</h3>
              <p style={{ marginTop: '6px' }}>{part.summary}</p>
            </div>
            <div className="module-link-action">
              <span>Inspect subsystem specs →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
