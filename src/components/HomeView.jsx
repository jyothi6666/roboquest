import React from 'react';
import RobotMascot from './RobotMascot';
import { playClickSound } from '../utils/sound';

export default function HomeView({ setActiveTab }) {
  const navigateTo = (tab) => {
    playClickSound();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modules = [
    {
      id: 'design',
      num: '01 · Design',
      icon: '🦾',
      title: 'Robot Anatomy',
      desc: "What's a robot actually made of? Explore chassis, sensors, controller brains, actuators, and power in an interactive 3D-style schematic.",
      actionText: 'Explore anatomy →'
    },
    {
      id: 'code',
      num: '02 · Code Lab',
      icon: '⌨️',
      title: 'Block-Coding Maze',
      desc: 'Program our robot through multi-stage maze obstacles using drag-and-drop style command queues — the exact logic powering Scratch and ROS.',
      actionText: 'Launch maze lab →'
    },
    {
      id: 'games',
      num: '03 · Trivia Arena',
      icon: '🎮',
      title: 'Robotics Challenge',
      desc: 'Test your knowledge on mechatronics, sensors, AI decision loops, and famous student competitions with instant feedback and streaks.',
      actionText: 'Play trivia arena →'
    },
    {
      id: 'facts',
      num: '04 · Facts & Tech',
      icon: '💡',
      title: 'Physical AI & Guides',
      desc: 'Explore good-to-know FAQs and deep-dive 2026 articles on NVIDIA Cosmos, Figure humanoids, Agility Digit, and curated video explainers.',
      actionText: 'Read tech facts →'
    },
    {
      id: 'updates',
      num: '05 · 2026 Updates',
      icon: '📡',
      title: 'The Robotics Evolution',
      desc: 'A student-friendly timeline snapshot of where robotics stands right now — classroom assistants, affordable kits, and CES breakthroughs.',
      actionText: 'View timeline →'
    }
  ];

  return (
    <div className="home-view-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <div className="hero-eyebrow">
            <span>●</span> Robotics Club & Starter Lab · 2026
          </div>
          <h1 className="hero-title">
            Build, code, and <span className="gradient-text">play</span> with robots.
          </h1>
          <p className="hero-subtitle">
            A hands-on home base for young roboticists. Discover how physical machines think, program our robot through interactive maze puzzles, test your trivia skills, and explore real-world humanoids working in 2026.
          </p>
          <div className="hero-cta-group">
            <button className="btn-primary" onClick={() => navigateTo('code')}>
              <span>▶</span> Start Coding Robot
            </button>
            <button className="btn-ghost" onClick={() => navigateTo('design')}>
              <span>🦾</span> Explore Anatomy
            </button>
            <button className="btn-ghost" onClick={() => navigateTo('games')}>
              <span>🎮</span> Take Trivia Quiz
            </button>
          </div>
        </div>

        <RobotMascot size={230} />
      </section>

      {/* Quick Stats Bar */}
      <div className="quick-stats-strip glass-panel">
        <div className="stat-item">
          <span className="stat-val">05</span>
          <span className="stat-label">Learning Modules</span>
        </div>
        <div className="stat-item">
          <span className="stat-val">3 Levels</span>
          <span className="stat-label">Block-Coding Maze</span>
        </div>
        <div className="stat-item">
          <span className="stat-val">100%</span>
          <span className="stat-label">Interactive Labs</span>
        </div>
        <div className="stat-item">
          <span className="stat-val">2026</span>
          <span className="stat-label">Physical AI Guides</span>
        </div>
      </div>

      <div className="circuit-divider" />

      {/* Module Entrance Grid */}
      <section style={{ marginTop: '20px' }}>
        <div className="section-header">
          <span className="badge-tag">Start Here</span>
          <h2>Five Paths into Robotics</h2>
          <p>
            Each module is an interactive launchpad. Choose where your curiosity takes you first!
          </p>
        </div>

        <div className="module-cards-grid">
          {modules.map((m) => (
            <div
              key={m.id}
              className="module-card glass-panel glass-card-interactive"
              onClick={() => navigateTo(m.id)}
              role="button"
              tabIndex={0}
            >
              <div className="module-top">
                <div className="module-num">{m.num}</div>
                <div className="module-icon-wrap">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
              <div className="module-link-action">
                <span>{m.actionText}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2026 Feature Spotlight Banner */}
      <div 
        className="glass-panel" 
        style={{ 
          marginTop: '60px', 
          padding: '36px', 
          background: 'linear-gradient(135deg, rgba(28, 35, 84, 0.7) 0%, rgba(13, 17, 45, 0.9) 100%)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center'
        }}
      >
        <div>
          <span className="badge-tag" style={{ color: 'var(--cyan)' }}>2026 Breakthrough</span>
          <h3 style={{ fontSize: '1.7rem', margin: '10px 0 12px' }}>
            Why "Physical AI" is Changing Everything
          </h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.96rem', lineHeight: '1.65' }}>
            In 2026, robots are no longer confined to scripting rigid, pre-recorded motions. Through digital twin simulations and demonstration learning, machines can reason about friction, gravity, and touch in real-time.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn-primary" onClick={() => navigateTo('facts')}>
            <span>🌍</span> Read Physical AI Deep-Dive
          </button>
          <button className="btn-ghost" onClick={() => navigateTo('updates')}>
            <span>📡</span> See CES 2026 Humanoid Milestones
          </button>
        </div>
      </div>
    </div>
  );
}
