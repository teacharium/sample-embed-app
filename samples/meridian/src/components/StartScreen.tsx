import type { LoadedLesson } from "../lib/lessonLoader";
import type { StoredProgress } from "../lib/progressStore";
import { lessonSteps, questionResults } from "../lib/results";

interface StartScreenProps {
  loaded: LoadedLesson;
  stored: StoredProgress;
  onStartNew: () => void;
  onResume: () => void;
  onReview: () => void;
  onOpenReceipt: (attemptId: string) => void;
}

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

const percent = (score: number, max: number) =>
  max > 0 ? Math.round((score / max) * 100) : 0;

/**
 * The portal's "assignment overview". The player is mounted with
 * `showStartButton={false}`, so this replaces its built-in Start overlay and
 * lets the student choose how to open the assignment.
 */
export const StartScreen = ({
  loaded,
  stored,
  onStartNew,
  onResume,
  onReview,
  onOpenReceipt,
}: StartScreenProps) => {
  const { lesson, manifest } = loaded;
  const steps = lessonSteps(lesson);
  const latest = stored.attempts.at(-1);

  // Points: use the max score recorded by a finished attempt when we have one
  // (a matrix question is worth one point per row), else one per question.
  const totalPoints = latest?.maxScore || steps.length;

  // Where the unfinished attempt is: the step of its current history entry.
  const inProgress = stored.inProgress;
  const resumeVisit = inProgress?.stepHistory[inProgress.currentHistoryIndex];
  const resumeIndex = resumeVisit
    ? steps.findIndex((s) => s.id === resumeVisit.stepId)
    : -1;
  const canResume = inProgress !== null && resumeIndex >= 0;

  return (
    <div className="overview">
      <header className="overview__header">
        <div className="eyebrow">Unit 3 · Assignment</div>
        <h1 className="overview__title">
          Problem Set 3: Supply, Demand &amp; Equilibrium
        </h1>
        <dl className="facts">
          <div>
            <dt>Due</dt>
            <dd>Fri, Nov 20 · 11:59 PM</dd>
          </div>
          <div>
            <dt>Questions</dt>
            <dd>{steps.length}</dd>
          </div>
          <div>
            <dt>Points</dt>
            <dd>{totalPoints}</dd>
          </div>
          <div>
            <dt>Attempts allowed</dt>
            <dd>Unlimited</dd>
          </div>
          <div>
            <dt>Estimated time</dt>
            <dd>15 minutes</dd>
          </div>
        </dl>
      </header>

      <section className="panel">
        <h2 className="panel__title">Instructions</h2>
        <p>
          This problem set checks your understanding of the law of demand,
          shifts versus movements along a curve, market equilibrium, price
          controls and price elasticity (Mankiw, Chapter 4). Each question gives
          feedback when you submit it. You may leave and resume at any time;
          your work is saved after every question. Only your most recent
          submission is reviewed.
        </p>
        <p className="muted small">
          Lesson v{manifest.versionNumber} · published{" "}
          {new Date(manifest.publishedAt).toLocaleDateString()}
        </p>

        <div className="actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={onStartNew}
          >
            Start new attempt
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={onResume}
            disabled={!canResume}
          >
            Resume attempt
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={onReview}
            disabled={!latest}
          >
            Review latest submission
          </button>
        </div>
        <p className="actions__hint" aria-live="polite">
          {canResume && inProgress
            ? `In progress: question ${resumeIndex + 1} of ${steps.length}, last saved ${formatDateTime(inProgress.updatedAt)}. Starting a new attempt discards it.`
            : latest
              ? "No attempt in progress."
              : "You haven't submitted this assignment yet."}
        </p>
      </section>

      <section className="panel">
        <h2 className="panel__title">Attempts</h2>
        {stored.attempts.length === 0 ? (
          <p className="muted">No submissions yet.</p>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Attempt</th>
                  <th scope="col">Submitted</th>
                  <th scope="col">Correct</th>
                  <th scope="col" className="num">
                    Score
                  </th>
                  <th scope="col" className="num">
                    %
                  </th>
                  <th scope="col">
                    <span className="sr-only">Receipt</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {stored.attempts
                  .map((attempt, index) => ({ attempt, index }))
                  .reverse()
                  .map(({ attempt, index }) => {
                    const results = questionResults(lesson, attempt);
                    const correct = results.filter((r) => r.correct).length;
                    return (
                      <tr key={attempt.id}>
                        <td>#{index + 1}</td>
                        <td>{formatDateTime(attempt.completedAt)}</td>
                        <td>
                          {correct} / {results.length}
                        </td>
                        <td className="num">
                          {attempt.score} / {attempt.maxScore}
                        </td>
                        <td className="num">
                          {percent(attempt.score, attempt.maxScore)}%
                        </td>
                        <td>
                          <button
                            type="button"
                            className="link-button"
                            onClick={() => onOpenReceipt(attempt.id)}
                          >
                            View receipt
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};
