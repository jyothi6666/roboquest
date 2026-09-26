import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { MAZE_LEVELS } from '../data/roboticsData';
import { playClickSound, playStepSound, playSuccessSound, playCrashSound } from '../utils/sound';

export default function CodeView({ onEarnStar }) {
  const [levelIndex, setLevelIndex] = useState(0);
  const currentLevel = MAZE_LEVELS[levelIndex];

  const [queue, setQueue] = useState([]);
  const [robotPos, setRobotPos] = useState({ ...currentLevel.start });
  const [activeStepIdx, setActiveStepIdx] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isDizzy, setIsDizzy] = useState(false);
  const [statusMsg, setStatusMsg] = useState('Build your program queue and press Run!');
  const [playbackSpeed, setPlaybackSpeed] = useState(380); // ms per step

  const abortExecutionRef = useRef(false);

  // Reset state when level changes
  useEffect(() => {
    abortExecutionRef.current = true;
    setIsRunning(false);
    setActiveStepIdx(-1);
    setIsDizzy(false);
    setRobotPos({ ...currentLevel.start });
    setQueue([]);
    setStatusMsg(`Loaded ${currentLevel.title}. ${currentLevel.hint}`);
  }, [levelIndex]);

  const addCommand = (cmd) => {
    if (isRunning) return;
    playClickSound();
    setQueue((prev) => [...prev, cmd]);
  };

  const removeCommand = (idx) => {
    if (isRunning) return;
    playClickSound();
    setQueue((prev) => prev.filter((_, i) => i !== idx));
  };

  const clearQueue = () => {
    if (isRunning) {
      abortExecutionRef.current = true;
    }
    playClickSound();
    setQueue([]);
    setRobotPos({ ...currentLevel.start });
    setActiveStepIdx(-1);
    setIsDizzy(false);
    setStatusMsg('Queue cleared. Build a new program.');
  };

  const handleRunProgram = async () => {
    if (isRunning || queue.length === 0) return;
    abortExecutionRef.current = false;
    setIsRunning(true);
    setIsDizzy(false);
    setRobotPos({ ...currentLevel.start });
    setStatusMsg('⚡ Executing robot firmware instructions...');

    let cur = { ...currentLevel.start };

    for (let i = 0; i < queue.length; i++) {
      if (abortExecutionRef.current) break;

      setActiveStepIdx(i);
      const cmd = queue[i];
      let next = { ...cur };

      if (cmd === 'up') next.r -= 1;
      if (cmd === 'down') next.r += 1;
      if (cmd === 'left') next.c -= 1;
      if (cmd === 'right') next.c += 1;

      // Check wall collision or out of bounds
      const gridSize = currentLevel.gridSize;
      const isOutOfBounds = next.r < 0 || next.r >= gridSize || next.c < 0 || next.c >= gridSize;
      const isWall = !isOutOfBounds && currentLevel.layout[next.r][next.c] === 1;

      if (isOutOfBounds || isWall) {
        playCrashSound();
        setIsDizzy(true);
        setStatusMsg('💥 Obstacle collision! The robot bumped into a barrier. Adjust your commands.');
        setIsRunning(false);
        setActiveStepIdx(-1);
        return;
      }

      cur = next;
      setRobotPos(next);
      playStepSound();

      await new Promise((res) => setTimeout(res, playbackSpeed));
    }

    setIsRunning(false);
    setActiveStepIdx(-1);

    // Check goal condition
    if (cur.r === currentLevel.goal.r && cur.c === currentLevel.goal.c) {
      playSuccessSound();
      setStatusMsg('⭐ SUCCESS! Star reached! Outstanding autonomous navigation.');
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onEarnStar) {
        onEarnStar();
      }
    } else {
      setStatusMsg('Program finished! Robot is safe, but did not reach the star yet. Add more moves.');
    }
  };

  const commandIcons = {
    up: { icon: '⬆️', label: 'Up' },
    down: { icon: '⬇️', label: 'Down' },
    left: { icon: '⬅️', label: 'Left' },
    right: { icon: '➡️', label: 'Right' }
  };

  const cellSize = 52; // pixels

  return (
    <div className="code-view-container">
      <div className="section-header">
        <span className="badge-tag">02 · Autonomous Navigation Lab</span>
        <h2>Program a Robot to Reach the Star</h2>
        <p>
          Real robots execute an array of instructions step by step. Queue your directional commands, then press Run to watch your code control the robot in real time!
        </p>
      </div>

      {/* Level Selector */}
      <div className="level-selector-row">
        {MAZE_LEVELS.map((lvl, idx) => (
          <button
            key={lvl.id}
            className={`level-btn ${levelIndex === idx ? 'active' : ''}`}
            onClick={() => {
              playClickSound();
              setLevelIndex(idx);
            }}
          >
            {lvl.title} ({lvl.difficulty})
          </button>
        ))}
      </div>

      <div className="code-lab-grid glass-panel">
        {/* Left Side: Command Controls & Queue */}
        <div>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--cyan)' }}>
            1. Direction Palette
          </h3>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginBottom: '14px' }}>
            Click buttons to append motor movements to your command queue:
          </p>

          <div className="command-palette">
            {Object.entries(commandIcons).map(([cmdKey, meta]) => (
              <button
                key={cmdKey}
                className="cmd-palette-btn"
                onClick={() => addCommand(cmdKey)}
                disabled={isRunning}
              >
                <span>{meta.icon}</span> Move {meta.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '14px 0 6px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--amber)' }}>
              2. Command Queue ({queue.length})
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              (Click a chip to delete it)
            </span>
          </div>

          <div className="command-queue-area">
            {queue.length === 0 ? (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', padding: '10px' }}>
                No commands yet. Click Up, Down, Left, or Right above to build your program!
              </span>
            ) : (
              queue.map((cmd, idx) => (
                <span
                  key={idx}
                  className={`queue-chip ${activeStepIdx === idx ? 'running-active' : ''}`}
                  onClick={() => removeCommand(idx)}
                  title="Click to remove from queue"
                >
                  {commandIcons[cmd]?.icon} {commandIcons[cmd]?.label}
                </span>
              ))
            )}
          </div>

          <div className="lab-action-buttons">
            <button
              className="btn-primary"
              onClick={handleRunProgram}
              disabled={isRunning || queue.length === 0}
              style={{ flex: 2 }}
            >
              <span>{isRunning ? '⏳ Running...' : '▶ Run Program'}</span>
            </button>
            <button
              className="btn-ghost"
              onClick={clearQueue}
              style={{ flex: 1 }}
            >
              Clear
            </button>
            <button
              className="btn-ghost"
              onClick={() => setPlaybackSpeed(playbackSpeed === 380 ? 200 : 380)}
              title="Toggle execution speed"
              style={{ fontSize: '0.82rem', padding: '8px 12px' }}
            >
              Speed: {playbackSpeed === 380 ? '1x' : '2x ⚡'}
            </button>
          </div>

          <div style={{ marginTop: '20px', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-line)' }}>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.82rem', lineHeight: '1.5' }}>
              💡 <b>How it works:</b> This mirrors block-based tools like Scratch, Blockly, and VEXcode. Real robots like Marty and Alpha Mini use this exact sequential logic for beginners before moving to Python and C++.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Maze Grid */}
        <div className="maze-stage-wrap">
          <div
            className="maze-board"
            style={{
              gridTemplateColumns: `repeat(${currentLevel.gridSize}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${currentLevel.gridSize}, ${cellSize}px)`
            }}
          >
            {/* Board Cells */}
            {currentLevel.layout.map((row, r) =>
              row.map((val, c) => (
                <div
                  key={`${r}-${c}`}
                  className={`maze-cell ${val === 1 ? 'wall' : ''} ${val === 2 ? 'goal' : ''}`}
                  style={{ width: `${cellSize - 4}px`, height: `${cellSize - 4}px` }}
                />
              ))
            )}

            {/* Robot Token */}
            <div
              className={`robot-token-entity ${isDizzy ? 'shake-dizzy' : ''}`}
              style={{
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                transform: `translate(${robotPos.c * cellSize}px, ${robotPos.r * cellSize}px)`
              }}
            >
              🤖
            </div>
          </div>

          <div className="maze-status-bar" style={{ width: '100%', maxWidth: '420px' }}>
            {statusMsg}
          </div>
        </div>
      </div>
    </div>
  );
}
