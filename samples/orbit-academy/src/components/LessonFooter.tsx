import { useEffect } from "react";
import type { PlayerFooterControls } from "@teacharium/player";

interface LessonFooterProps {
  controls: PlayerFooterControls;
}

const FEEDBACK_ICONS: Record<string, string> = {
  correct: "🎉",
  incorrect: "🤔",
  hint: "💡",
  info: "🛰️",
};

/** Strip the light markdown lessons use in feedback (**bold**, _em_). */
const plainText = (markdown: string) => markdown.replace(/[*_`]/g, "");

/**
 * The app's own footer, rendered by the player through `renderFooter`.
 *
 * `controls` comes from the player and stays in sync with the lesson:
 * questions can disable Next until answered, show a footer Check Answer or
 * Hint button, relabel Next, or show feedback. This footer just draws it.
 */
export const LessonFooter = ({ controls }: LessonFooterProps) => {
  const {
    mode,
    progress,
    isLastStep,
    canGoNext,
    canGoPrevious,
    nextButton,
    checkAnswerButton,
    hintButton,
    feedback,
  } = controls;

  const step = progress.lessonStepIndex + 1;
  const total = progress.lessonStepCount;

  const nextDisabled =
    nextButton.status === "disabled" || (!isLastStep && !canGoNext);

  // Feedback can ask to hide itself after a delay.
  const { isVisible, autoHideMs } = feedback;
  const { dismissFeedback } = controls;
  useEffect(() => {
    if (!isVisible || !autoHideMs) return;
    const timer = setTimeout(dismissFeedback, autoHideMs);
    return () => clearTimeout(timer);
  }, [isVisible, autoHideMs, dismissFeedback]);

  return (
    <div className="lesson-footer">
      {feedback.isVisible && (
        <div className={`toast toast--${feedback.variant}`} role="status">
          <span className="toast__icon" aria-hidden="true">
            {FEEDBACK_ICONS[feedback.variant] ?? "💡"}
          </span>
          <p className="toast__message">{plainText(feedback.message)}</p>
          {feedback.showNextButton && (
            <button type="button" className="btn btn--go btn--sm" onClick={controls.feedbackNext}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          )}
          <button
            type="button"
            className="toast__close"
            onClick={controls.dismissFeedback}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      <div className="lesson-footer__bar">
        <button
          type="button"
          className="btn btn--back"
          onClick={controls.previous}
          disabled={!canGoPrevious}
        >
          <span aria-hidden="true">◀</span> Previous
        </button>

        <div className="rocket-track" aria-label={`Mission ${step} of ${total}`} role="img">
          <div className="rocket-track__label">
            {mode === "review" ? "Reviewing" : "Mission"} {step} / {total}
          </div>
          <div className="rocket-track__rail">
            {Array.from({ length: total }, (_, i) => (
              <span
                key={i}
                className={`rocket-track__dot ${
                  i < progress.lessonStepIndex
                    ? "is-done"
                    : i === progress.lessonStepIndex
                      ? "is-current"
                      : ""
                }`}
              />
            ))}
            <span
              className="rocket-track__rocket"
              style={{ left: `${total > 1 ? (progress.lessonStepIndex / (total - 1)) * 100 : 0}%` }}
              aria-hidden="true"
            >
              🚀
            </span>
          </div>
        </div>

        <div className="lesson-footer__actions">
          {hintButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--hint"
              onClick={controls.showHint}
              disabled={hintButton.status === "disabled"}
            >
              💡 {hintButton.label}
            </button>
          )}
          {checkAnswerButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--check"
              onClick={controls.checkAnswer}
              disabled={checkAnswerButton.status === "disabled"}
            >
              ✔ {checkAnswerButton.label}
            </button>
          )}
          {nextButton.status !== "hidden" && (
            <button
              type="button"
              className={`btn ${isLastStep ? "btn--finish" : "btn--go"}`}
              onClick={controls.next}
              disabled={nextDisabled}
            >
              {isLastStep ? (mode === "review" ? "Done" : "Finish 🏁") : `${nextButton.label} ▶`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
