import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import DesignView from './components/DesignView';
import CodeView from './components/CodeView';
import GamesView from './components/GamesView';
import FactsView from './components/FactsView';
import UpdatesView from './components/UpdatesView';
import { getSoundEnabled, playSuccessSound } from './utils/sound';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'design', 'code', 'games', 'facts', 'updates'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const [starsCount, setStarsCount] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('roboquest_stars');
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [soundOn, setSoundOn] = useState(() => getSoundEnabled());

  // Keep hash in sync with activeTab
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.hash = activeTab;
    }
  }, [activeTab]);

  // Listen to hash changes (e.g. browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'design', 'code', 'games', 'facts', 'updates'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleEarnStar = () => {
    setStarsCount((prev) => {
      const updated = prev + 1;
      localStorage.setItem('roboquest_stars', updated.toString());
      return updated;
    });
  };

  const handleHighScoreUpdate = (newScore) => {
    const prevHigh = parseInt(localStorage.getItem('roboquest_quiz_highscore') || '0', 10);
    if (newScore > prevHigh) {
      localStorage.setItem('roboquest_quiz_highscore', newScore.toString());
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        starsCount={starsCount}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />

      <main className="main-content">
        {activeTab === 'home' && <HomeView setActiveTab={setActiveTab} />}
        {activeTab === 'design' && <DesignView />}
        {activeTab === 'code' && <CodeView onEarnStar={handleEarnStar} />}
        {activeTab === 'games' && <GamesView onHighScoreUpdate={handleHighScoreUpdate} />}
        {activeTab === 'facts' && <FactsView />}
        {activeTab === 'updates' && <UpdatesView />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
