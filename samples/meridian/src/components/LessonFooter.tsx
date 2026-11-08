import { useEffect } from "react";
import type { PlayerFooterControls } from "@teacharium/player";
import { ArrowLeftIcon, ArrowRightIcon, InfoIcon } from "./Icons";

interface LessonFooterProps {
  controls: PlayerFooterControls;
}

/** Strip the light markdown lessons use in feedback (**bold**, _em_). */
const plainText = (markdown: string) => markdown.replace(/[*_`]/g, "");

const FEEDBACK_LABELS: Record<string, string> = {
  correct: "Correct",
  incorrect: "Not quite",
  hint: "Hint",
  info: "Note",
};

/**
 * The portal's own pager, rendered by the player through `renderFooter`.
 *
 * `controls` stays in sync with the lesson: a question can disable Next until
 * it's answered, ask for a footer Check Answer or Hint button, relabel Next,
 * or show feedback. This footer only draws that state.
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
    dismissFeedback,
  } = controls;

  const current = progress.lessonStepIndex;
  const total = progress.lessonStepCount;
  const nextDisabled =
    nextButton.status === "disabled" || (!isLastStep && !canGoNext);

  const nextLabel = isLastStep
    ? mode === "review"
      ? "Finish review"
      : "Submit assignment"
    : "Next";

  // Feedback can ask to hide itself after a delay.
  const { isVisible, autoHideMs } = feedback;
  useEffect(() => {
    if (!isVisible || !autoHideMs) return;
    const timer = setTimeout(dismissFeedback, autoHideMs);
    return () => clearTimeout(timer);
  }, [isVisible, autoHideMs, dismissFeedback]);

  return (
    <div className="pager">
      {feedback.isVisible && (
        <div
          className={`pager__notice pager__notice--${feedback.variant}`}
          role="status"
        >
          <InfoIcon />
          <p>
            <strong>{FEEDBACK_LABELS[feedback.variant] ?? "Note"}.</strong>{" "}
            {plainText(feedback.message)}
          </p>
          {feedback.showNextButton && (
            <button
              type="button"
              className="text-button"
              onClick={controls.feedbackNext}
            >
              {isLastStep ? "Submit" : "Continue"}
            </button>
          )}
          <button
            type="button"
            className="pager__dismiss"
            onClick={dismissFeedback}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      <div className="pager__bar">
        <button
          type="button"
          className="btn btn--secondary"
          onClick={controls.previous}
          disabled={!canGoPrevious}
        >
          <ArrowLeftIcon /> Previous
        </button>

        <ol
          className="pager__steps"
          aria-label={`Question ${current + 1} of ${total}`}
        >
          {Array.from({ length: total }, (_, i) => (
            <li
              key={i}
              className={`pager__step ${
                i < current ? "is-done" : i === current ? "is-current" : ""
              }`}
              aria-current={i === current ? "step" : undefined}
            >
              {i + 1}
            </li>
          ))}
        </ol>

        <div className="pager__actions">
          {hintButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={controls.showHint}
              disabled={hintButton.status === "disabled"}
            >
              {hintButton.label}
            </button>
          )}
          {checkAnswerButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={controls.checkAnswer}
              disabled={checkAnswerButton.status === "disabled"}
            >
              {checkAnswerButton.label}
            </button>
          )}
          {nextButton.status !== "hidden" && (
            <button
              type="button"
              className={`btn ${isLastStep ? "btn--accent" : "btn--primary"}`}
              onClick={controls.next}
              disabled={nextDisabled}
            >
              {nextLabel} {!isLastStep && <ArrowRightIcon />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
