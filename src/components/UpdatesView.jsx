import React from 'react';
import { TIMELINE_UPDATES } from '../data/roboticsData';

export default function UpdatesView() {
  return (
    <div className="updates-view-container">
      <div className="section-header">
        <span className="badge-tag">05 · Industry & Education Milestones</span>
        <h2>How Robotics is Evolving in 2026</h2>
        <p>
          A quick, student-friendly snapshot of where the global robotics field stands right now — from classrooms to automated factories.
        </p>
      </div>

      <div className="timeline-stream">
        {TIMELINE_UPDATES.map((item, idx) => (
          <div key={idx} className="timeline-node">
            <div className="glass-panel" style={{ padding: '24px 28px', maxWidth: '780px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span className="badge-tag" style={{ color: idx % 2 === 0 ? 'var(--cyan)' : 'var(--coral)' }}>
                  {item.tag}
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', margin: '6px 0 10px' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.96rem', lineHeight: '1.65' }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="circuit-divider" />

      {/* Advice for Next-Gen Engineers */}
      <div 
        className="glass-panel"
        style={{
          marginTop: '30px',
          padding: '32px',
          borderLeft: '4px solid var(--cyan)',
          background: 'linear-gradient(135deg, rgba(20, 25, 62, 0.7), rgba(10, 14, 40, 0.9))'
        }}
      >
        <span className="badge-tag" style={{ color: 'var(--cyan)' }}>Robotics Club Roadmap</span>
        <h3 style={{ fontSize: '1.5rem', margin: '10px 0 12px' }}>
          Your Path to Becoming a Robotics Engineer
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-line)' }}>
            <h4 style={{ color: 'var(--amber)', marginBottom: '6px' }}>Step 1: Code Logic</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
              Master loops, if/else statements, and directional coordinates using block tools (like our Maze Lab or Scratch).
            </p>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-line)' }}>
            <h4 style={{ color: 'var(--cyan)', marginBottom: '6px' }}>Step 2: Circuitry</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
              Wire LEDs, distance sensors, and micro-servos to a micro:bit, Arduino, or Raspberry Pi Pico.
            </p>
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-line)' }}>
            <h4 style={{ color: 'var(--violet)', marginBottom: '6px' }}>Step 3: Join a Team</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>
              Get involved with FIRST LEGO League, VEX Robotics, or school STEM hackathons to build real machines with friends!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
