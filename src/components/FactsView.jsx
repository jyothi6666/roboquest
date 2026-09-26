import React, { useState } from 'react';
import { GOOD_TO_KNOW_FACTS, CUTTING_EDGE_TOPICS, IN_DEPTH_ARTICLES, YOUTUBE_CURATED_VIDEOS } from '../data/roboticsData';
import { playClickSound } from '../utils/sound';

export default function FactsView() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openAccordions, setOpenAccordions] = useState({ 0: true });

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'basics', label: 'Beginner FAQs' },
    { id: 'tech', label: '2026 Physical AI' },
    { id: 'articles', label: 'Deep Articles' },
    { id: 'videos', label: 'Curated Videos' }
  ];

  const toggleAccordion = (index) => {
    playClickSound();
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const matchesSearch = (text) => {
    if (!searchQuery) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="facts-view-container">
      <div className="section-header">
        <span className="badge-tag">04 · Knowledge Base & Media</span>
        <h2>Good-to-Know Facts & 2026 Breakthroughs</h2>
        <p>
          Robotics is accelerating faster than ever. Here is what is happening right now in Physical AI, humanoids, and digital twin simulations — explained clearly with real-world video case studies.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        <input
          type="text"
          placeholder="🔎 Search facts, terms (e.g. Physical AI, LiDAR, Atlas, Digit, Sensors)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 20px',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(20, 25, 62, 0.7)',
            border: '1px solid var(--border-line)',
            color: 'var(--text-main)',
            fontSize: '1rem',
            outline: 'none',
            backdropFilter: 'blur(12px)'
          }}
        />

        <div className="filter-pills-row">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter-pill ${activeCategory === c.id ? 'active' : ''}`}
              onClick={() => {
                playClickSound();
                setActiveCategory(c.id);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. Beginner FAQs Accordion */}
      {(activeCategory === 'all' || activeCategory === 'basics') && (
        <section style={{ marginBottom: '48px' }}>
          <div className="section-header">
            <span className="badge-tag">Fundamentals</span>
            <h3>Common Questions Young Roboticists Ask</h3>
          </div>

          <div>
            {GOOD_TO_KNOW_FACTS.filter((f) => matchesSearch(f.question + ' ' + f.answer)).map((fact, idx) => {
              const isOpen = !!openAccordions[`faq-${idx}`];
              return (
                <div key={idx} className="accordion-item">
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(`faq-${idx}`)}
                  >
                    <span>{fact.question}</span>
                    <span style={{ color: 'var(--cyan)', fontSize: '1.4rem' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body">
                      <p>{fact.answer}</p>
                      <span className="badge-tag" style={{ marginTop: '10px' }}>
                        {fact.tag}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. Cutting Edge Topics (2026 Quick Takes) */}
      {(activeCategory === 'all' || activeCategory === 'tech') && (
        <section style={{ marginBottom: '48px' }}>
          <div className="section-header">
            <span className="badge-tag">
              Quick Takes <span className="badge-new">New 2026</span>
            </span>
            <h3>What's Happening in Robotics Right Now</h3>
          </div>

          <div>
            {CUTTING_EDGE_TOPICS.filter((t) => matchesSearch(t.title + ' ' + t.content)).map((topic, idx) => {
              const isOpen = !!openAccordions[`tech-${idx}`];
              return (
                <div key={idx} className="accordion-item" style={{ borderLeft: '3px solid var(--violet)' }}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(`tech-${idx}`)}
                  >
                    <div>
                      <span>{topic.title}</span>
                      <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 400, marginTop: '2px' }}>
                        {topic.summary}
                      </span>
                    </div>
                    <span style={{ color: 'var(--violet)', fontSize: '1.4rem' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body">
                      <p>{topic.content}</p>
                      <span className="badge-tag" style={{ marginTop: '10px', color: 'var(--violet)', borderColor: 'var(--violet)' }}>
                        {topic.tag}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 3. In-Depth Articles & Video Walkthroughs */}
      {(activeCategory === 'all' || activeCategory === 'articles') && (
        <section style={{ marginBottom: '48px' }}>
          <div className="section-header">
            <span className="badge-tag">Deep-Dive Guides</span>
            <h3>The Full Story, Explained with Case Studies</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {IN_DEPTH_ARTICLES.filter((a) => matchesSearch(a.title + ' ' + a.dek + ' ' + a.calloutText)).map((art) => (
              <article key={art.id} className="article-card-full glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.4rem' }}>{art.icon}</span>
                  <span className="badge-tag" style={{ color: 'var(--violet)' }}>{art.eyebrow}</span>
                </div>

                <h3 style={{ fontSize: '1.65rem', marginBottom: '10px' }}>{art.title}</h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  {art.dek}
                </p>

                {art.sections.map((sec, i) => (
                  <div key={i} style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--cyan)', marginBottom: '6px' }}>
                      {sec.heading}
                    </h4>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: '1.65' }}>
                      {sec.body}
                    </p>
                  </div>
                ))}

                <div style={{ margin: '20px 0' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.06em' }} className="mono-font">
                    Key Milestones:
                  </h4>
                  <ul style={{ paddingLeft: '22px', color: 'var(--text-dim)', fontSize: '0.92rem', marginTop: '8px', lineHeight: '1.7' }}>
                    {art.bulletPoints.map((bp, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>{bp}</li>
                    ))}
                  </ul>
                </div>

                {/* Video Embed */}
                <div className="video-frame-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${art.videoId}`}
                    title={art.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                  <b>Video:</b> {art.videoCaption}
                </p>

                <div className="anatomy-funfact-box" style={{ marginTop: '20px' }}>
                  <strong>{art.calloutTitle}</strong>
                  {art.calloutText}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 4. Curated YouTube Videos Grid */}
      {(activeCategory === 'all' || activeCategory === 'videos') && (
        <section style={{ marginBottom: '48px' }}>
          <div className="section-header">
            <span className="badge-tag">Curated Video Library</span>
            <h3>Top Robotics Videos for Young Engineers</h3>
            <p>From introductory kid-friendly physics to state-of-the-art electric humanoids.</p>
          </div>

          <div className="video-grid-curated">
            {YOUTUBE_CURATED_VIDEOS.filter((v) => matchesSearch(v.title + ' ' + v.description)).map((video) => (
              <div key={video.id} className="video-item-card glass-panel">
                <h4 style={{ fontSize: '1rem', marginBottom: '6px' }}>{video.title}</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: '1.5', minHeight: '40px' }}>
                  {video.description}
                </p>
                <div className="video-frame-container" style={{ margin: '10px 0 0' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
