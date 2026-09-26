import React, { useState } from 'react';
import { playClickSound, setSoundEnabled } from '../utils/sound';

export default function Navbar({ activeTab, setActiveTab, starsCount = 0, soundOn, setSoundOn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'design', label: 'Design', icon: '🦾' },
    { id: 'code', label: 'Code Lab', icon: '⌨️' },
    { id: 'games', label: 'Trivia Arena', icon: '🎮' },
    { id: 'facts', label: 'Facts & Tech', icon: '💡' },
    { id: 'updates', label: '2026 Updates', icon: '📡' }
  ];

  const handleNavClick = (id) => {
    playClickSound();
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClickSound();
  };

  return (
    <>
      <header className="nav-container">
        <nav className="nav-bar">
          <div className="nav-brand" onClick={() => handleNavClick('home')} role="button" tabIndex={0}>
            <span className="brand-dot" />
            <span>RoboQuest</span>
          </div>

          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>

          <div className="nav-right-actions">
            <div className="stats-badge" title="Stars earned in the code maze">
              <span>⭐</span>
              <span>{starsCount}</span>
            </div>

            <button
              className="audio-toggle-btn"
              onClick={toggleSound}
              title={soundOn ? 'Sound Effects Enabled (Click to Mute)' : 'Sound Muted (Click to Enable)'}
              aria-label="Toggle sound effects"
            >
              {soundOn ? '🔊' : '🔇'}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="nav-brand">
                <span className="brand-dot" />
                <span>RoboQuest</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.4rem', color: 'var(--text-dim)' }}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`mobile-nav-link ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-line)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Audio SFX</span>
                <button className="audio-toggle-btn" onClick={toggleSound}>
                  {soundOn ? '🔊' : '🔇'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
