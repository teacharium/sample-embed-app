import type { TeachariumLessonExport } from "@teacharium/player";
import type { Attempt } from "../lib/progressStore";
import { questionResults } from "../lib/results";
import { CheckIcon } from "./Icons";

interface EndScreenProps {
  lesson: TeachariumLessonExport;
  attempt: Attempt;
  attemptNumber: number;
  onReview: () => void;
  onStartNew: () => void;
  onBack: () => void;
}

const letterGrade = (pct: number) =>
  pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "F";

/**
 * The portal's submission receipt, built from the `CompletionResult` the
 * player passed to `onComplete` (saved as an Attempt).
 */
export const EndScreen = ({
  lesson,
  attempt,
  attemptNumber,
  onReview,
  onStartNew,
  onBack,
}: EndScreenProps) => {
  const results = questionResults(lesson, attempt);
  const pct =
    attempt.maxScore > 0
      ? Math.round((attempt.score / attempt.maxScore) * 100)
      : 0;
  const grade = letterGrade(pct);
  const submitted = new Date(attempt.completedAt).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  const confirmation = attempt.id.slice(0, 8).toUpperCase();

  return (
    <div className="receipt">
      <div className="receipt__banner" role="status">
        <CheckIcon />
        <span>
          Submission received · Confirmation <strong>{confirmation}</strong>
        </span>
      </div>

      <section className="panel receipt__summary">
        <div>
          <div className="eyebrow">Problem Set 3 · Attempt {attemptNumber}</div>
          <h1 className="receipt__title">Submission summary</h1>
          <p className="muted">Submitted {submitted}</p>
        </div>
        <div className="grade">
          <div className={`grade__letter grade__letter--${grade}`}>{grade}</div>
          <div className="grade__detail">
            <div className="grade__score">
              {attempt.score} / {attempt.maxScore}
            </div>
            <div className="grade__pct">{pct}%</div>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2 className="panel__title">Gradebook detail</h2>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Topic</th>
                <th scope="col">Result</th>
                <th scope="col" className="num">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, i) => {
                const status = result.correct
                  ? "correct"
                  : result.attempted
                    ? "incorrect"
                    : "unanswered";
                return (
                  <tr key={result.stepId}>
                    <td>{i + 1}</td>
                    <td>{result.stepName}</td>
                    <td>
                      <span className={`result result--${status}`}>
                        {status === "correct"
                          ? "Correct"
                          : status === "incorrect"
                            ? "Incorrect"
                            : "Not answered"}
                      </span>
                    </td>
                    <td className="num">
                      {result.score} / {result.maxScore}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th scope="row" colSpan={3}>
                  Total
                </th>
                <td className="num">
                  {attempt.score} / {attempt.maxScore}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="actions">
          <button type="button" className="btn btn--primary" onClick={onReview}>
            Review submission
          </button>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={onStartNew}
          >
            Start new attempt
          </button>
          <button type="button" className="text-button" onClick={onBack}>
            Back to course
          </button>
        </div>
      </section>
    </div>
  );
};
