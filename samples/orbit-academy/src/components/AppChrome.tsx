import type { ReactNode } from "react";
import type { StoredProgress } from "../lib/progressStore";

interface AppChromeProps {
  stored: StoredProgress;
  activeView: "start" | "playing" | "end";
  onHome: () => void;
  onShowData: () => void;
  onReset: () => void;
  children: ReactNode;
}

const XP_PER_POINT = 50;
const XP_PER_LEVEL = 1000;

/**
 * Pretend "local app" around the lesson: a desktop window with a title bar,
 * a sidebar and a learner card. None of this is Teacharium; it shows that the
 * player is just a component you drop into your own product.
 */
export const AppChrome = ({
  stored,
  activeView,
  onHome,
  onShowData,
  onReset,
  children,
}: AppChromeProps) => {
  const totalPoints = stored.attempts.reduce((sum, a) => sum + a.score, 0);
  const xp = totalPoints * XP_PER_POINT;
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const levelProgress = ((xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;
  const hasData = stored.attempts.length > 0 || stored.inProgress !== null;

  return (
    <div className="desktop">
      <div className="window" role="application" aria-label="Orbit Academy">
        <header className="titlebar">
          <div className="traffic-lights" aria-hidden="true">
            <span className="light light--close" />
            <span className="light light--min" />
            <span className="light light--max" />
          </div>
          <div className="titlebar__title">
            <span className="titlebar__logo" aria-hidden="true">🪐</span>
            Orbit Academy
          </div>
          <div className="titlebar__status">
            <span className="chip chip--ok" title="Progress is saved in this browser">
              <span className="chip__dot" /> Saved on this device
            </span>
          </div>
        </header>

        <div className="window__body">
          <aside className="sidebar">
            <nav className="sidebar__nav" aria-label="Main">
              <button
                type="button"
                className={`nav-item ${activeView !== "playing" ? "nav-item--active" : ""}`}
                onClick={onHome}
              >
                <span aria-hidden="true">🚀</span> Missions
              </button>
              <button
                type="button"
                className={`nav-item ${activeView === "playing" ? "nav-item--active" : ""}`}
                disabled={activeView !== "playing"}
              >
                <span aria-hidden="true">🎧</span> Now playing
              </button>
              <div className="nav-item nav-item--ghost" aria-disabled="true">
                <span aria-hidden="true">🏅</span> Badges
                <span className="nav-item__count">{stored.attempts.length}</span>
              </div>
              <div className="nav-item nav-item--ghost" aria-disabled="true">
                <span aria-hidden="true">📓</span> Star log
              </div>
            </nav>

            <div className="learner-card">
              <div className="learner-card__top">
                <div className="avatar" aria-hidden="true">AX</div>
                <div>
                  <div className="learner-card__name">Alex Nova</div>
                  <div className="learner-card__meta">Space Cadet · Level {level}</div>
                </div>
              </div>
              <div
                className="xp-bar"
                role="progressbar"
                aria-label="Experience points"
                aria-valuemin={0}
                aria-valuemax={XP_PER_LEVEL}
                aria-valuenow={xp % XP_PER_LEVEL}
              >
                <div className="xp-bar__fill" style={{ width: `${levelProgress}%` }} />
              </div>
              <div className="learner-card__xp">{xp} XP</div>
            </div>

            <div className="sidebar__dev">
              <div className="sidebar__dev-label">Developer tools</div>
              <button type="button" className="dev-button" onClick={onShowData}>
                <span aria-hidden="true">{"{ }"}</span> View saved data
              </button>
              <button
                type="button"
                className="dev-button dev-button--danger"
                onClick={onReset}
                disabled={!hasData}
              >
                <span aria-hidden="true">↺</span> Reset progress
              </button>
            </div>
          </aside>

          <main className="stage">{children}</main>
        </div>
      </div>
    </div>
  );
};
