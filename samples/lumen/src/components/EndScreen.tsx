import type { TeachariumLessonExport } from "@teacharium/player";
import type { Attempt } from "../lib/progressStore";
import { questionResults } from "../lib/results";

interface EndScreenProps {
  lesson: TeachariumLessonExport;
  attempt: Attempt;
  attemptNumber: number;
  onReview: () => void;
  onPlayAgain: () => void;
  onHome: () => void;
}

const VERDICTS = [
  {
    min: 1,
    title: "Perfect run.",
    text: "Every answer locked in. You know this cold.",
  },
  {
    min: 0.8,
    title: "Solid.",
    text: "Almost flawless. Review the one or two you missed.",
  },
  {
    min: 0.5,
    title: "Getting there.",
    text: "Good base. Run it back and close the gaps.",
  },
  {
    min: 0,
    title: "Warm-up done.",
    text: "Everyone starts somewhere. Review, then try again.",
  },
];

const RING_RADIUS = 52;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

/**
 * Lumen's results screen, built from the `CompletionResult` the player
 * passed to `onComplete` (saved as an Attempt).
 */
export const EndScreen = ({
  lesson,
  attempt,
  attemptNumber,
  onReview,
  onPlayAgain,
  onHome,
}: EndScreenProps) => {
  const results = questionResults(lesson, attempt);
  const correct = results.filter((r) => r.correct).length;
  const accuracy = results.length ? correct / results.length : 0;
  const verdict =
    VERDICTS.find((v) => accuracy >= v.min) ?? VERDICTS[VERDICTS.length - 1];

  return (
    <div className="results">
      <section className="results__hero">
        <div
          className="ring"
          role="img"
          aria-label={`${Math.round(accuracy * 100)}% correct`}
        >
          <svg viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={RING_RADIUS} className="ring__track" />
            <circle
              cx="60"
              cy="60"
              r={RING_RADIUS}
              className="ring__fill"
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={RING_LENGTH * (1 - accuracy)}
            />
          </svg>
          <span className="ring__value">
            {Math.round(accuracy * 100)}
            <small>%</small>
          </span>
        </div>
        <div className="results__copy">
          <span className="label">Run #{attemptNumber} complete</span>
          <h1>{verdict.title}</h1>
          <p>{verdict.text}</p>
          <div className="results__chips">
            <span className="chip">
              {correct}/{results.length} correct
            </span>
            <span className="chip">
              {attempt.score}/{attempt.maxScore} pts
            </span>
            <span className="chip chip--lime">+{attempt.score * 25} XP</span>
          </div>
        </div>
      </section>

      <ol className="breakdown">
        {results.map((result, i) => (
          <li
            key={result.stepId}
            className={`breakdown__item ${result.correct ? "is-correct" : result.attempted ? "is-wrong" : "is-skipped"}`}
          >
            <span className="breakdown__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="breakdown__name">{result.stepName}</span>
            <span className="breakdown__mark">
              {result.correct
                ? "Correct"
                : result.attempted
                  ? "Missed"
                  : "Skipped"}
            </span>
          </li>
        ))}
      </ol>

      <div className="results__actions">
        <button
          type="button"
          className="btn btn--primary btn--lg"
          onClick={onPlayAgain}
        >
          Run it back <span aria-hidden="true">↻</span>
        </button>
        <button
          type="button"
          className="btn btn--ghost btn--lg"
          onClick={onReview}
        >
          Review answers
        </button>
        <button
          type="button"
          className="btn btn--ghost btn--lg"
          onClick={onHome}
        >
          Home
        </button>
      </div>
    </div>
  );
};
