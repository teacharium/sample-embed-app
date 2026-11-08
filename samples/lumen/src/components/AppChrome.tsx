import type { ReactNode } from "react";
import type { StoredProgress } from "../lib/progressStore";

interface AppChromeProps {
  stored: StoredProgress;
  onHome: () => void;
  onShowData: () => void;
  onReset: () => void;
  children: ReactNode;
}

/** Consecutive days (ending today or yesterday) with at least one finished run. */
const streakDays = (stored: StoredProgress) => {
  const days = new Set(
    stored.attempts.map((a) => new Date(a.completedAt).toDateString()),
  );
  let streak = 0;
  const day = new Date();
  if (!days.has(day.toDateString())) day.setDate(day.getDate() - 1);
  while (days.has(day.toDateString())) {
    streak += 1;
    day.setDate(day.getDate() - 1);
  }
  return streak;
};

/**
 * The pretend "Lumen" study app around the lesson: a dark top bar with
 * subject tabs, a streak and XP. None of this is Teacharium; the player is
 * just one component inside it.
 */
export const AppChrome = ({
  stored,
  onHome,
  onShowData,
  onReset,
  children,
}: AppChromeProps) => {
  const xp = stored.attempts.reduce((sum, a) => sum + a.score * 25, 0);
  const streak = streakDays(stored);
  const hasData = stored.attempts.length > 0 || stored.inProgress !== null;

  return (
    <div className="shell">
      <header className="topbar">
        <button
          type="button"
          className="brand"
          onClick={onHome}
          aria-label="Lumen home"
        >
          <span className="brand__mark" aria-hidden="true" />
          lumen
        </button>

        <nav className="subjects" aria-label="Subjects">
          <button
            type="button"
            className="subject subject--active"
            onClick={onHome}
          >
            Chem
          </button>
          <span className="subject subject--muted">Bio</span>
          <span className="subject subject--muted">Physics</span>
          <span className="subject subject--muted">US History</span>
        </nav>

        <div className="topbar__right">
          <span className="stat-chip" title="Days in a row with a finished run">
            <span aria-hidden="true">🔥</span> {streak}
            <span className="sr-only"> day streak</span>
          </span>
          <span className="stat-chip stat-chip--xp" title="Experience points">
            {xp} XP
          </span>
          <div className="dev-tools" aria-label="Developer tools">
            <button type="button" className="dev-link" onClick={onShowData}>
              {"{ }"} Data
            </button>
            <button
              type="button"
              className="dev-link dev-link--danger"
              onClick={onReset}
              disabled={!hasData}
            >
              Reset
            </button>
          </div>
          <span className="avatar" role="img" aria-label="Maya R.">
            MR
          </span>
        </div>
      </header>

      <main className="stage">{children}</main>
    </div>
  );
};
