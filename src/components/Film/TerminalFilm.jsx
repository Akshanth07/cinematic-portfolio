import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, ExternalLink, Maximize2, RotateCcw } from 'lucide-react';
import { profileData } from '../../data/profile';
import { projects } from '../../data/projects';
import { skillsData } from '../../data/skills';

export function TerminalFilm({ progress, mousePos, onOpenProject }) {
  // Scene 05 active range: 0.82 to 0.95
  const isActive = progress >= 0.82 && progress < 0.95;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: (
        <div className="term-welcome-box">
          <div className="term-ascii-logo">
            {`╔═══════════════════════════════════════════════════════════════════╗
║  AKSHANTH N // DEVELOPER CONSOLE [SYSTEM ONLINE]                 ║
║  B.Tech CSE (IoT) · SRMIST · Backend · AI/ML · IoT                ║
║  Type "help" to view commands or click the suggestion chips.      ║
╚═══════════════════════════════════════════════════════════════════╝`}
          </div>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const px = mousePos.x * 12;
  const py = mousePos.y * 8;

  // Scene overall opacity based on entry and exit
  let sceneOpacity = 0;
  if (progress >= 0.82 && progress < 0.84) {
    sceneOpacity = (progress - 0.82) / 0.02;
  } else if (progress >= 0.84 && progress <= 0.93) {
    sceneOpacity = 1;
  } else if (progress > 0.93 && progress <= 0.95) {
    sceneOpacity = Math.max(0, 1 - (progress - 0.93) / 0.02);
  }

  // Auto scroll output
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Command Execution Engine
  const executeCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    // Record in history
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ').filter(Boolean);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    const userEntry = {
      type: 'user',
      command: trimmed,
    };

    let resultEntry = null;

    switch (cmd) {
      case 'help':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <div className="term-help-header text-accent">AVAILABLE SYSTEM COMMANDS:</div>
              <table className="term-help-table">
                <tbody>
                  <tr>
                    <td className="term-cmd-cell">whoami</td>
                    <td className="term-desc-cell">Display identity, specialization, and institution</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">about</td>
                    <td className="term-desc-cell">Display verified background summary & focus</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">education</td>
                    <td className="term-desc-cell">View SRMIST degree, CGPA, and academic record</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">skills</td>
                    <td className="term-desc-cell">List Backend, AI/ML, IoT, and Frontend proficiencies</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">experience</td>
                    <td className="term-desc-cell">View Saint-Gobain backend development internship</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">projects</td>
                    <td className="term-desc-cell">List verified engineering repositories</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">open &lt;name&gt;</td>
                    <td className="term-desc-cell">Open modal inspector (e.g. open ecommerce, open curatrack)</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">github</td>
                    <td className="term-desc-cell">Direct link to GitHub profile ({profileData.socials.github})</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">linkedin</td>
                    <td className="term-desc-cell">Direct link to LinkedIn profile</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">contact</td>
                    <td className="term-desc-cell">Display email, phone, and communication channels</td>
                  </tr>
                  <tr>
                    <td className="term-cmd-cell">clear</td>
                    <td className="term-desc-cell">Clear terminal output screen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        };
        break;

      case 'whoami':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <div className="term-title-row text-accent">{profileData.name.toUpperCase()}</div>
              <div className="term-sub-row">{profileData.roles[0]}</div>
              <div className="term-sub-row">{profileData.roleDisplay}</div>
              <div className="term-sub-row text-muted">{profileData.institutionShort} ({profileData.location})</div>
            </div>
          ),
        };
        break;

      case 'about':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <p className="term-paragraph">{profileData.summary}</p>
            </div>
          ),
        };
        break;

      case 'education':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <div className="term-title-row text-accent">{profileData.degree}</div>
              <div className="term-sub-row">{profileData.institution} · {profileData.year}</div>
              <div className="term-meta-row">
                <span className="term-badge">CGPA: {profileData.cgpa}</span>
                {profileData.education.school.map((s) => (
                  <span key={s.level} className="term-badge secondary">{s.level}: {s.score}</span>
                ))}
              </div>
            </div>
          ),
        };
        break;

      case 'skills': {
        const backendSkills = skillsData.filter((s) => s.category === 'BACKEND').map((s) => s.name);
        const aiSkills = skillsData.filter((s) => s.category === 'AI / ML').map((s) => s.name);
        const iotSkills = skillsData.filter((s) => s.category === 'IoT').map((s) => s.name);
        const feSkills = skillsData.filter((s) => s.category === 'FRONTEND').map((s) => s.name);

        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block term-skills-layout">
              <div className="term-skill-group">
                <span className="term-group-lbl text-accent">BACKEND</span>
                <span className="term-group-vals">{backendSkills.join(' · ')}</span>
              </div>
              <div className="term-skill-group">
                <span className="term-group-lbl text-accent">AI / ML</span>
                <span className="term-group-vals">{aiSkills.join(' · ')}</span>
              </div>
              <div className="term-skill-group">
                <span className="term-group-lbl text-accent">IoT</span>
                <span className="term-group-vals">{iotSkills.join(' · ')}</span>
              </div>
              <div className="term-skill-group">
                <span className="term-group-lbl text-accent">FRONTEND</span>
                <span className="term-group-vals">{feSkills.join(' · ')}</span>
              </div>
            </div>
          ),
        };
        break;
      }

      case 'experience':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <div className="term-title-row text-accent">{profileData.experience.company.toUpperCase()}</div>
              <div className="term-sub-row">{profileData.experience.role} — {profileData.experience.location}</div>
              <p className="term-paragraph">{profileData.experience.description}</p>
            </div>
          ),
        };
        break;

      case 'projects':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <div className="term-projects-list">
                {projects.map((proj, idx) => (
                  <div key={proj.id} className="term-project-line">
                    <span className="term-proj-num">0{idx + 1}</span>
                    <strong className="term-proj-title">{proj.title}</strong>
                    <span className="term-proj-year">[{proj.year}]</span>
                    <span className="term-proj-cat">— {proj.category}</span>
                    <button
                      className="term-proj-open-btn"
                      onClick={() => handleOpenProject(proj.id)}
                      data-cursor="OPEN"
                    >
                      [open {proj.id}]
                    </button>
                  </div>
                ))}
              </div>
              <div className="term-hint-txt text-muted">
                Tip: Click any <code>[open ...]</code> above or run <code>open &lt;project-name&gt;</code> (e.g. <code>open ecommerce</code>, <code>open curatrack</code>).
              </div>
            </div>
          ),
        };
        break;

      case 'open': {
        if (!arg) {
          resultEntry = {
            type: 'error',
            content: `Usage: open <project-name>. Examples: open ecommerce, open curatrack, open safetysense, open foodcourt`,
          };
          break;
        }

        const target = projects.find(
          (p) =>
            p.id.toLowerCase() === arg ||
            p.slug.toLowerCase() === arg ||
            p.title.toLowerCase().includes(arg) ||
            (arg === '1' && p.id === 'ecommerce') ||
            (arg === '2' && p.id === 'curatrack') ||
            (arg === '3' && p.id === 'safetysense') ||
            (arg === '4' && p.id === 'foodcourt')
        );

        if (target) {
          if (onOpenProject) {
            onOpenProject(target);
          }
          resultEntry = {
            type: 'output',
            content: (
              <div className="term-output-block">
                <span className="text-accent">✓ Opening deep inspection modal for: </span>
                <strong>{target.title}</strong> [{target.category}]
              </div>
            ),
          };
        } else {
          resultEntry = {
            type: 'error',
            content: `Project "${arg}" not found. Type "projects" to view valid project identifiers.`,
          };
        }
        break;
      }

      case 'github':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <span>GitHub: </span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="term-link"
              >
                {profileData.socials.github} <ExternalLink size={12} className="inline-icon" />
              </a>
            </div>
          ),
        };
        break;

      case 'linkedin':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block">
              <span>LinkedIn: </span>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="term-link"
              >
                {profileData.socials.linkedin} <ExternalLink size={12} className="inline-icon" />
              </a>
            </div>
          ),
        };
        break;

      case 'contact':
        resultEntry = {
          type: 'output',
          content: (
            <div className="term-output-block term-contact-block">
              <div>
                <span className="term-lbl">Email: </span>
                <a href={profileData.socials.email} className="term-link">
                  {profileData.socials.emailRaw}
                </a>
              </div>
              <div>
                <span className="term-lbl">Phone: </span>
                <a href={profileData.socials.phone} className="term-link">
                  {profileData.socials.phoneRaw}
                </a>
              </div>
              <div>
                <span className="term-lbl">Location: </span>
                <span>{profileData.location}</span>
              </div>
            </div>
          ),
        };
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultEntry = {
          type: 'error',
          content: `Command not found: "${trimmed}". Type "help" to see available commands.`,
        };
        break;
    }

    setHistory((prev) => [...prev, userEntry, resultEntry]);
    setInputVal('');
  };

  const handleOpenProject = (projectId) => {
    const target = projects.find((p) => p.id === projectId);
    if (target && onOpenProject) {
      onOpenProject(target);
      setHistory((prev) => [
        ...prev,
        { type: 'user', command: `open ${projectId}` },
        {
          type: 'output',
          content: (
            <div className="term-output-block">
              <span className="text-accent">✓ Opening deep inspection modal for: </span>
              <strong>{target.title}</strong>
            </div>
          ),
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
      setHistoryIdx(nextIdx);
      setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    }
  };

  const quickCommands = [
    'help',
    'whoami',
    'about',
    'education',
    'skills',
    'experience',
    'projects',
    'contact',
    'clear',
  ];

  return (
    <div
      className="film-scene terminal-film-scene"
      style={{
        opacity: sceneOpacity,
        pointerEvents: isActive ? 'auto' : 'none',
        visibility: isActive && sceneOpacity > 0 ? 'visible' : 'hidden',
      }}
    >
      {/* Chapter HUD Header */}
      <div className="terminal-film-hud">
        <div className="section-chapter-tag">
          <span className="chapter-num">SCENE 05</span>
          <span className="chapter-divider">/</span>
          <span className="chapter-title">DEVELOPER CONSOLE</span>
        </div>
        <div className="terminal-hud-telemetry">
          <TerminalIcon size={12} className="text-accent" />
          <span>INTERACTIVE SHELL v2.6</span>
          <span className="hud-divider">·</span>
          <span>SRMIST_NODE: ACTIVE</span>
        </div>
      </div>

      {/* Main Terminal Window Frame */}
      <div
        className="terminal-window-wrapper"
        style={{
          transform: `translate3d(${px}px, ${py}px, 0)`,
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-glow-border" />

        {/* Window Chrome Header Bar */}
        <div className="terminal-window-header">
          <div className="terminal-window-dots">
            <span className="dot close" />
            <span className="dot min" />
            <span className="dot max" />
          </div>
          <div className="terminal-window-title">
            <TerminalIcon size={12} className="title-icon text-accent" />
            <span>akshanth@srmist: ~ (zsh / bash)</span>
          </div>
          <div className="terminal-window-status">
            <span className="pulse-indicator" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="terminal-quick-chips-bar" onClick={(e) => e.stopPropagation()}>
          <span className="chips-label">QUICK ACTIONS:</span>
          <div className="chips-scroll-container">
            {quickCommands.map((q) => (
              <button
                key={q}
                className="term-chip-btn"
                onClick={() => executeCommand(q)}
                data-cursor="RUN"
              >
                <span>{q}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Output Body */}
        <div ref={terminalBodyRef} className="terminal-window-body">
          <div className="terminal-scanlines" />

          {history.map((item, idx) => {
            if (item.type === 'system') {
              return (
                <div key={idx} className="term-entry system">
                  {item.content}
                </div>
              );
            }
            if (item.type === 'user') {
              return (
                <div key={idx} className="term-entry user">
                  <span className="term-prompt-user">akshanth@srmist</span>
                  <span className="term-prompt-colon">:</span>
                  <span className="term-prompt-path">~</span>
                  <span className="term-prompt-dollar">$</span>
                  <span className="term-command-echo">{item.command}</span>
                </div>
              );
            }
            if (item.type === 'output') {
              return (
                <div key={idx} className="term-entry output">
                  {item.content}
                </div>
              );
            }
            if (item.type === 'error') {
              return (
                <div key={idx} className="term-entry error">
                  <span className="term-error-txt">{item.content}</span>
                </div>
              );
            }
            return null;
          })}

          {/* Active Input Line */}
          <div className="terminal-input-row">
            <span className="term-prompt-user">akshanth@srmist</span>
            <span className="term-prompt-colon">:</span>
            <span className="term-prompt-path">~</span>
            <span className="term-prompt-dollar">$</span>
            <div className="term-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                className="term-input-field"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="Interactive Terminal Command Line"
                placeholder="type a command... (e.g. help, whoami, projects)"
              />
            </div>
          </div>
        </div>

        {/* Terminal Footer Bar */}
        <div className="terminal-window-footer">
          <div className="term-footer-left">
            <span>[ENTER] Execute</span>
            <span className="divider">·</span>
            <span>[↑/↓] History</span>
            <span className="divider">·</span>
            <span>[Ctrl+L] Clear</span>
          </div>
          <div className="term-footer-right">
            <span>UTF-8 // CHENNAI_NODE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
