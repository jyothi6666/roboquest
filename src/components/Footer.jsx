import React from 'react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="app-footer">
      <div className="footer-robot-line">
        🤖 Made for curious young engineers & robotics clubs
      </div>
      <p style={{ marginBottom: '14px', color: 'var(--text-dim)' }}>
        Explore the physical and digital world of machines · Keep building & experimenting
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', margin: '14px 0' }}>
        <button className="nav-link-btn" onClick={() => setActiveTab('design')} style={{ padding: '4px 10px', fontSize: '0.85rem' }}>Anatomy</button>
        <button className="nav-link-btn" onClick={() => setActiveTab('code')} style={{ padding: '4px 10px', fontSize: '0.85rem' }}>Code Maze</button>
        <button className="nav-link-btn" onClick={() => setActiveTab('games')} style={{ padding: '4px 10px', fontSize: '0.85rem' }}>Trivia Arena</button>
        <button className="nav-link-btn" onClick={() => setActiveTab('facts')} style={{ padding: '4px 10px', fontSize: '0.85rem' }}>Articles & Video</button>
        <button className="nav-link-btn" onClick={() => setActiveTab('updates')} style={{ padding: '4px 10px', fontSize: '0.85rem' }}>2026 Timeline</button>
      </div>

      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '16px' }} className="mono-font">
        RoboQuest 2026 Edition · Powered by Physical AI, Open Simulations & Hands-On Engineering
      </div>
    </footer>
  );
}
