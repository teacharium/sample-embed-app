import type { ReactNode } from "react";
import type { StoredProgress } from "../lib/progressStore";
import {
  BookIcon,
  ChatIcon,
  CheckIcon,
  CodeIcon,
  LockIcon,
  PencilIcon,
  PlayIcon,
  ResetIcon,
} from "./Icons";

interface AppChromeProps {
  stored: StoredProgress;
  playing: boolean;
  onHome: () => void;
  onShowData: () => void;
  onReset: () => void;
  children: ReactNode;
}

/**
 * Pretend university course portal around the lesson: a top bar with the
 * wordmark and breadcrumb, and a course-navigation rail. None of this is
 * Teacharium; it shows that the player is just a component in your product.
 */
export const AppChrome = ({
  stored,
  playing,
  onHome,
  onShowData,
  onReset,
  children,
}: AppChromeProps) => {
  const hasData = stored.attempts.length > 0 || stored.inProgress !== null;
  const submitted = stored.attempts.length > 0;

  return (
    <div className="portal">
      <header className="topbar">
        <button type="button" className="wordmark" onClick={onHome}>
          <span className="wordmark__mark" aria-hidden="true">
            M
          </span>
          <span className="wordmark__text">
            <span className="wordmark__name">Meridian</span>
            <span className="wordmark__sub">Learning Portal</span>
          </span>
        </button>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>Courses</li>
            <li>ECON 101</li>
            <li>Unit 3</li>
            <li aria-current="page">Problem Set 3</li>
          </ol>
        </nav>
        <div className="topbar__user">
          <span className="avatar" aria-hidden="true">
            JL
          </span>
          <span className="topbar__user-name">Jordan Lee</span>
        </div>
      </header>

      <div className="portal__body">
        <aside className="rail" aria-label="Course navigation">
          <div className="rail__course">
            <div className="rail__code">ECON 101 · Fall 2026</div>
            <div className="rail__title">Principles of Microeconomics</div>
          </div>

          <div className="rail__unit">
            Unit 3 · Supply, Demand &amp; Equilibrium
          </div>
          <ul className="rail__items">
            <li className="rail-item rail-item--done">
              <PlayIcon />
              <span>Lecture 3.1 · Markets</span>
              <CheckIcon className="rail-item__state" />
            </li>
            <li className="rail-item rail-item--done">
              <BookIcon />
              <span>Reading: Mankiw Ch. 4</span>
              <CheckIcon className="rail-item__state" />
            </li>
            <li>
              <button
                type="button"
                className={`rail-item rail-item--current ${playing ? "" : "rail-item--active"}`}
                onClick={onHome}
                aria-current="page"
              >
                <PencilIcon />
                <span>Problem Set 3</span>
                {submitted && <CheckIcon className="rail-item__state" />}
              </button>
            </li>
            <li className="rail-item rail-item--muted">
              <ChatIcon />
              <span>Discussion board</span>
            </li>
            <li className="rail-item rail-item--locked">
              <LockIcon />
              <span>Quiz 3</span>
              <span className="rail-item__note">Opens Nov 21</span>
            </li>
          </ul>

          <div className="rail__student">
            <div className="rail__student-name">Jordan Lee</div>
            <div className="rail__student-meta">Undergraduate · Fall 2026</div>
          </div>

          <div className="rail__dev">
            <div className="rail__dev-label">Developer tools</div>
            <button type="button" className="link-button" onClick={onShowData}>
              <CodeIcon /> View saved data
            </button>
            <button
              type="button"
              className="link-button link-button--danger"
              onClick={onReset}
              disabled={!hasData}
            >
              <ResetIcon /> Reset progress
            </button>
          </div>
        </aside>

        <main className="workspace">{children}</main>
      </div>
    </div>
  );
};
