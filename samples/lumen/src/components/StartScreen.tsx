import type { LoadedLesson } from "../lib/lessonLoader";
import type { StoredProgress } from "../lib/progressStore";
import { lessonSteps, questionResults } from "../lib/results";
import { AtomArt } from "./AtomArt";

interface StartScreenProps {
  loaded: LoadedLesson;
  stored: StoredProgress;
  onPlayNew: () => void;
  onResume: () => void;
  onReview: () => void;
}

const timeAgo = (iso: string) => {
  const minutes = Math.round((Date.now() - new Date(iso).getTime()) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.round(hours / 24)}d ago`;
};

/**
 * Lumen's own start screen. The player is mounted with
 * `showStartButton={false}`, so this replaces its Start overlay and offers
 * the three ways in: a new run, continue, or review.
 */
export const StartScreen = ({
  loaded,
  stored,
  onPlayNew,
  onResume,
  onReview,
}: StartScreenProps) => {
  const { lesson } = loaded;
  const steps = lessonSteps(lesson);
  const runs = stored.attempts.map((attempt) => {
    const results = questionResults(lesson, attempt);
    return {
      attempt,
      correct: results.filter((r) => r.correct).length,
      total: results.length,
    };
  });
  const latest = runs.at(-1);
  const best = runs.reduce(
    (max, r) => Math.max(max, r.total ? r.correct / r.total : 0),
    0,
  );

  const resumeVisit =
    stored.inProgress?.stepHistory[stored.inProgress.currentHistoryIndex];
  const resumeIndex = resumeVisit
    ? steps.findIndex((s) => s.id === resumeVisit.stepId)
    : -1;

  return (
    <div className="start">
      <section className="hero">
        <div className="hero__copy">
          <span className="label">Chemistry · Unit 2 · Checkpoint</span>
          <h1 className="hero__title">
            Atomic Structure <span>&amp; the Periodic Table</span>
          </h1>
          <p className="hero__sub">
            {steps.length} questions, about 6 minutes. A different question type
            every time, no filler.
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={onPlayNew}
            >
              {stored.inProgress ? "Start a new run" : "Start checkpoint"}
              <span aria-hidden="true">→</span>
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--lg"
              onClick={onResume}
              disabled={!stored.inProgress}
              title={stored.inProgress ? undefined : "No run in progress"}
            >
              {stored.inProgress && resumeIndex >= 0
                ? `Continue · Q${resumeIndex + 1}/${steps.length}`
                : "Continue"}
            </button>
            <button
              type="button"
              className="btn btn--ghost btn--lg"
              onClick={onReview}
              disabled={!latest}
              title={latest ? undefined : "Finish a run to review it"}
            >
              {latest
                ? `Review last run · ${latest.correct}/${latest.total}`
                : "Review last run"}
            </button>
          </div>
          {stored.inProgress && (
            <p className="hint">
              Starting a new run replaces your saved one (saved{" "}
              {timeAgo(stored.inProgress.updatedAt)}).
            </p>
          )}
        </div>
        <AtomArt className="hero__art" />
      </section>

      <section className="stats" aria-label="Your stats">
        <div className="stat">
          <span className="stat__value">{runs.length}</span>
          <span className="stat__label">runs</span>
        </div>
        <div className="stat">
          <span className="stat__value">{Math.round(best * 100)}%</span>
          <span className="stat__label">best accuracy</span>
        </div>
        <div className="stat">
          <span className="stat__value">
            {latest ? `${latest.correct}/${latest.total}` : "—"}
          </span>
          <span className="stat__label">last run</span>
        </div>
      </section>

      <section className="runs" aria-label="Recent runs">
        <h2 className="section-label">Recent runs</h2>
        {runs.length === 0 ? (
          <p className="empty">No runs yet. Your scores will show up here.</p>
        ) : (
          <ol className="runs__list">
            {runs
              .slice(-8)
              .reverse()
              .map(({ attempt, correct, total }) => (
                <li key={attempt.id} className="run">
                  <span className="run__bar" aria-hidden="true">
                    <span
                      style={{
                        width: `${total ? (correct / total) * 100 : 0}%`,
                      }}
                    />
                  </span>
                  <span className="run__score">
                    {correct}/{total}
                  </span>
                  <span className="run__when">
                    {timeAgo(attempt.completedAt)}
                  </span>
                </li>
              ))}
          </ol>
        )}
      </section>
    </div>
  );
};
