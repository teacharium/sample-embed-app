import type { LoadedLesson } from "../lib/lessonLoader";
import type { StoredProgress } from "../lib/progressStore";
import { lessonSteps, questionResults } from "../lib/results";
import { PlanetArt } from "./PlanetArt";

interface StartScreenProps {
  loaded: LoadedLesson;
  stored: StoredProgress;
  onPlayNew: () => void;
  onResume: () => void;
  onReview: () => void;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

/**
 * The app's own start screen. The player is mounted with
 * `showStartButton={false}`, so this replaces its built-in Start overlay
 * and lets the learner pick how to launch the lesson.
 */
export const StartScreen = ({
  loaded,
  stored,
  onPlayNew,
  onResume,
  onReview,
}: StartScreenProps) => {
  const { lesson, manifest } = loaded;
  const steps = lessonSteps(lesson);
  const latest = stored.attempts.at(-1);

  // Where the saved attempt is: the step of its current history entry.
  const resumeVisit =
    stored.inProgress?.stepHistory[stored.inProgress.currentHistoryIndex];
  const resumeIndex = resumeVisit
    ? steps.findIndex((s) => s.id === resumeVisit.stepId)
    : -1;

  const latestCorrect = latest
    ? questionResults(lesson, latest).filter((r) => r.correct).length
    : 0;
  const latestTotal = latest ? questionResults(lesson, latest).length : 0;

  return (
    <div className="start">
      <section className="hero">
        <div className="hero__text">
          <span className="eyebrow">Science · Grades 6–8</span>
          <h1 className="hero__title">Space Explorers</h1>
          <p className="hero__subtitle">
            Blast off on {steps.length} quick missions about our solar system.
            Every mission is a different kind of question!
          </p>
          <ul className="hero__meta">
            <li>🧭 {steps.length} missions</li>
            <li>⏱️ About 5 minutes</li>
            <li>📦 Lesson v{manifest.versionNumber}</li>
          </ul>
        </div>
        <PlanetArt className="hero__art" />
      </section>

      <h2 className="section-title">How do you want to play?</h2>
      <div className="mode-grid">
        <button type="button" className="mode-card mode-card--new" onClick={onPlayNew}>
          <span className="mode-card__icon" aria-hidden="true">🚀</span>
          <span className="mode-card__title">Play new</span>
          <span className="mode-card__text">
            Start a fresh attempt from mission 1.
            {stored.inProgress && " Your unfinished attempt will be replaced."}
          </span>
          <span className="mode-card__cta">Launch</span>
        </button>

        <button
          type="button"
          className="mode-card mode-card--resume"
          onClick={onResume}
          disabled={!stored.inProgress}
        >
          <span className="mode-card__icon" aria-hidden="true">🛰️</span>
          <span className="mode-card__title">Pick up where you left off</span>
          <span className="mode-card__text">
            {stored.inProgress && resumeIndex >= 0
              ? `You were on mission ${resumeIndex + 1} of ${steps.length}: ${steps[resumeIndex].name}.`
              : "No unfinished attempt yet."}
          </span>
          {stored.inProgress && resumeIndex >= 0 && (
            <span className="mini-progress" aria-hidden="true">
              <span
                className="mini-progress__fill"
                style={{ width: `${((resumeIndex + 1) / steps.length) * 100}%` }}
              />
            </span>
          )}
          <span className="mode-card__cta">Continue</span>
        </button>

        <button
          type="button"
          className="mode-card mode-card--review"
          onClick={onReview}
          disabled={!latest}
        >
          <span className="mode-card__icon" aria-hidden="true">🔭</span>
          <span className="mode-card__title">Review your previous</span>
          <span className="mode-card__text">
            {latest
              ? `Look back at your answers from ${formatDate(latest.completedAt)}: ${latestCorrect} of ${latestTotal} correct.`
              : "Finish the lesson once to unlock review."}
          </span>
          <span className="mode-card__cta">Review</span>
        </button>
      </div>

      {stored.attempts.length > 0 && (
        <p className="attempt-note">
          🏁 You've finished this lesson {stored.attempts.length}{" "}
          {stored.attempts.length === 1 ? "time" : "times"}.
        </p>
      )}
    </div>
  );
};
