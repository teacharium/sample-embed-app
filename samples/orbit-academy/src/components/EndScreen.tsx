import type { TeachariumLessonExport } from "@teacharium/player";
import type { Attempt } from "../lib/progressStore";
import { questionResults, starRating } from "../lib/results";

interface EndScreenProps {
  lesson: TeachariumLessonExport;
  attempt: Attempt;
  attemptNumber: number;
  onReview: () => void;
  onPlayAgain: () => void;
  onHome: () => void;
}

const BADGES = [
  { min: 3, emoji: "🌟", title: "Galaxy Genius", text: "You aced the solar system!" },
  { min: 2, emoji: "🛰️", title: "Star Navigator", text: "Great flying, cadet!" },
  { min: 1, emoji: "🚀", title: "Rookie Rocketeer", text: "Nice launch! Try again to earn more stars." },
  { min: 0, emoji: "🌱", title: "Space Sprout", text: "Every explorer starts somewhere. Give it another go!" },
];

const CONFETTI_COLORS = ["#f472b6", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa", "#fb923c"];

/**
 * The app's own end screen, built from the `CompletionResult` the player
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
  const stars = starRating(correct, results.length);
  const badge = BADGES.find((b) => stars >= b.min) ?? BADGES[BADGES.length - 1];

  return (
    <div className="end">
      {stars >= 2 && (
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 36 }, (_, i) => (
            <span
              key={i}
              style={{
                left: `${(i * 97) % 100}%`,
                background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                animationDelay: `${(i % 12) * 0.12}s`,
                animationDuration: `${2.4 + (i % 5) * 0.35}s`,
              }}
            />
          ))}
        </div>
      )}

      <section className="end__card">
        <div className="badge" aria-hidden="true">{badge.emoji}</div>
        <span className="eyebrow">Mission report · Attempt {attemptNumber}</span>
        <h1 className="end__title">{badge.title}</h1>
        <p className="end__subtitle">{badge.text}</p>

        <div className="stars" role="img" aria-label={`${stars} out of 3 stars`}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`star ${i < stars ? "star--on" : ""}`} style={{ animationDelay: `${0.2 + i * 0.18}s` }}>
              ★
            </span>
          ))}
        </div>

        <div className="score-row">
          <div className="score-tile">
            <div className="score-tile__value">
              {correct}/{results.length}
            </div>
            <div className="score-tile__label">questions right</div>
          </div>
          <div className="score-tile">
            <div className="score-tile__value">
              {attempt.score}/{attempt.maxScore}
            </div>
            <div className="score-tile__label">points</div>
          </div>
          <div className="score-tile">
            <div className="score-tile__value">+{attempt.score * 50}</div>
            <div className="score-tile__label">XP earned</div>
          </div>
        </div>

        <ol className="result-list">
          {results.map((result, i) => (
            <li key={result.stepId} className={`result ${result.correct ? "result--ok" : "result--miss"}`}>
              <span className="result__num">{i + 1}</span>
              <span className="result__name">{result.stepName}</span>
              <span className="result__mark">
                {result.correct ? "✓ Correct" : result.attempted ? "✗ Not quite" : "– Skipped"}
              </span>
            </li>
          ))}
        </ol>

        <div className="end__actions">
          <button type="button" className="btn btn--back" onClick={onHome}>
            🏠 Home
          </button>
          <button type="button" className="btn btn--hint" onClick={onReview}>
            🔭 Review answers
          </button>
          <button type="button" className="btn btn--go" onClick={onPlayAgain}>
            🚀 Play again
          </button>
        </div>
      </section>
    </div>
  );
};
