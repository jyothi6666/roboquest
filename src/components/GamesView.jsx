import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/roboticsData';
import { playClickSound, playCorrectSound, playCrashSound, playSuccessSound } from '../utils/sound';

export default function GamesView({ onHighScoreUpdate }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(idx);

    const isCorrect = idx === currentQ.answer;

    if (isCorrect) {
      playCorrectSound();
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      if (newStreak % 3 === 0) {
        confetti({
          particleCount: 40,
          spread: 55,
          origin: { y: 0.7 }
        });
      }
    } else {
      playCrashSound();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    playClickSound();
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz complete!
      setIsCompleted(true);
      playSuccessSound();
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 }
      });
      if (onHighScoreUpdate) {
        onHighScoreUpdate(score + (selectedOption === currentQ.answer ? 1 : 0));
      }
    }
  };

  const handleRestartQuiz = () => {
    playClickSound();
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setStreak(0);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  const getRankBadge = (finalScore) => {
    const pct = (finalScore / totalQuestions) * 100;
    if (pct >= 90) return { title: 'AI & Robotics Grandmaster 🏆', desc: 'Incredible mastery of mechatronics, sensors, and Physical AI!' };
    if (pct >= 70) return { title: 'Senior Roboticist 🦾', desc: 'Outstanding understanding of core hardware and code systems!' };
    if (pct >= 50) return { title: 'Robotics Club Builder ⚙️', desc: 'Solid foundation in mechanics and logic. Keep experimenting!' };
    return { title: 'Apprentice Builder 🤖', desc: 'Great first test run! Review the guides and try another challenge.' };
  };

  return (
    <div className="games-view-container">
      <div className="section-header" style={{ textAlign: 'center' }}>
        <span className="badge-tag">03 · Knowledge Challenge</span>
        <h2>Robotics Trivia Arena</h2>
        <p style={{ margin: '8px auto 0' }}>
          Test your engineering knowledge against 10 questions covering hardware, software, Physical AI, and student competitions.
        </p>
      </div>

      <div className="trivia-card-container glass-panel" style={{ marginTop: '20px' }}>
        {!isCompleted ? (
          <>
            {/* Top Bar with Score & Streak */}
            <div className="trivia-top-bar">
              <span className="badge-tag" style={{ color: 'var(--cyan)' }}>
                Question {currentIdx + 1} of {totalQuestions} · {currentQ.category}
              </span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {streak >= 2 && (
                  <span className="badge-tag" style={{ color: 'var(--coral)', borderColor: 'var(--coral)' }}>
                    🔥 Streak: {streak}
                  </span>
                )}
                <span className="stats-badge">
                  Score: {score} / {currentIdx + (isAnswered ? 1 : 0)}
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="trivia-progress-track">
              <div
                className="trivia-progress-fill"
                style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h3 style={{ fontSize: '1.35rem', lineHeight: '1.4', margin: '20px 0' }}>
              {currentQ.q}
            </h3>

            {/* Options Grid */}
            <div className="trivia-options-grid">
              {currentQ.options.map((option, idx) => {
                let statusClass = '';
                if (isAnswered) {
                  if (idx === currentQ.answer) statusClass = 'correct';
                  else if (idx === selectedOption) statusClass = 'wrong';
                }

                return (
                  <button
                    key={idx}
                    className={`trivia-option-btn ${statusClass}`}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === currentQ.answer && <span>✅</span>}
                    {isAnswered && idx === selectedOption && idx !== currentQ.answer && <span>❌</span>}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Next Button */}
            {isAnswered && (
              <div className="trivia-feedback-panel">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                  <div>
                    <strong style={{ color: selectedOption === currentQ.answer ? 'var(--emerald)' : 'var(--coral)', display: 'block', marginBottom: '4px' }}>
                      {selectedOption === currentQ.answer ? '🎉 Excellent Answer!' : '💡 Good Try — Here is the Breakdown:'}
                    </strong>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.92rem' }}>
                      {currentQ.explanation}
                    </p>
                  </div>
                  <button className="btn-primary" onClick={handleNextQuestion} style={{ whiteSpace: 'nowrap' }}>
                    <span>Next ➡️</span>
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Victory & Summary Screen */
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span style={{ fontSize: '3.5rem' }}>🏆</span>
            <h3 style={{ fontSize: '2rem', margin: '14px 0 6px' }}>
              Challenge Completed!
            </h3>
            <p style={{ color: 'var(--text-dim)', marginBottom: '20px' }}>
              You scored <b>{score}</b> out of <b>{totalQuestions}</b> questions correct!
            </p>

            <div 
              style={{ 
                margin: '24px auto', 
                maxWidth: '460px', 
                padding: '20px', 
                borderRadius: '16px', 
                background: 'rgba(0, 245, 212, 0.08)',
                border: '1px solid rgba(0, 245, 212, 0.3)'
              }}
            >
              <h4 style={{ fontSize: '1.25rem', color: 'var(--cyan)' }}>
                {getRankBadge(score).title}
              </h4>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '6px' }}>
                {getRankBadge(score).desc}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '24px' }}>
              <button className="btn-primary" onClick={handleRestartQuiz}>
                <span>🔄 Play Again</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
