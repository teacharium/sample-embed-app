import { useEffect } from "react";
import type { PlayerFooterControls } from "@teacharium/player";

interface LessonFooterProps {
  controls: PlayerFooterControls;
}

const plainText = (markdown: string) => markdown.replace(/[*_`]/g, "");

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

/**
 * ← / → step through the lesson, unless the learner is typing in an answer.
 * Lives in a hook so the footer component stays declarative.
 */
const useArrowKeyNavigation = (controls: PlayerFooterControls) => {
  const { next, previous, canGoPrevious, canGoNext, isLastStep, nextButton } =
    controls;
  const nextEnabled =
    nextButton.status === "enabled" && (isLastStep || canGoNext);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (
        event.altKey ||
        event.metaKey ||
        event.ctrlKey ||
        isTyping(event.target)
      )
        return;
      if (event.key === "ArrowRight" && nextEnabled && !isLastStep) next();
      if (event.key === "ArrowLeft" && canGoPrevious) previous();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, previous, nextEnabled, canGoPrevious, isLastStep]);
};

/** Hides feedback after `autoHideMs` when the lesson asks for it. */
const useAutoHideFeedback = (controls: PlayerFooterControls) => {
  const { isVisible, autoHideMs } = controls.feedback;
  const { dismissFeedback } = controls;
  useEffect(() => {
    if (!isVisible || !autoHideMs) return;
    const timer = setTimeout(dismissFeedback, autoHideMs);
    return () => clearTimeout(timer);
  }, [isVisible, autoHideMs, dismissFeedback]);
};

/**
 * Lumen's footer, rendered by the player via `renderFooter`: a segmented
 * progress bar, Back / Next, and anything the lesson asks for (Check, Hint,
 * feedback). The state in `controls` stays in sync with the lesson.
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
  useArrowKeyNavigation(controls);
  useAutoHideFeedback(controls);

  const step = progress.lessonStepIndex;
  const total = progress.lessonStepCount;
  const nextDisabled =
    nextButton.status === "disabled" || (!isLastStep && !canGoNext);
  const isReview = mode === "review";

  return (
    <div className="dock">
      {feedback.isVisible && (
        <div className={`notice notice--${feedback.variant}`} role="status">
          <span className="notice__dot" aria-hidden="true" />
          <p>{plainText(feedback.message)}</p>
          {feedback.showNextButton && (
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={controls.feedbackNext}
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          )}
          <button
            type="button"
            className="notice__close"
            onClick={controls.dismissFeedback}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      <div
        className="segments"
        role="progressbar"
        aria-label="Lesson progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={step + 1}
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`segment ${i < step ? "is-done" : ""} ${i === step ? "is-current" : ""}`}
          />
        ))}
      </div>

      <div className="dock__row">
        <button
          type="button"
          className="btn btn--ghost"
          onClick={controls.previous}
          disabled={!canGoPrevious}
        >
          <span aria-hidden="true">←</span> Back
        </button>

        <div className="dock__center">
          <span className="dock__count">
            <strong>{String(step + 1).padStart(2, "0")}</strong>
            <span>/{String(total).padStart(2, "0")}</span>
          </span>
          <span className="dock__keys" aria-hidden="true">
            <kbd>←</kbd>
            <kbd>→</kbd> to move
          </span>
        </div>

        <div className="dock__actions">
          {hintButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={controls.showHint}
              disabled={hintButton.status === "disabled"}
            >
              {hintButton.label}
            </button>
          )}
          {checkAnswerButton.status !== "hidden" && (
            <button
              type="button"
              className="btn btn--outline"
              onClick={controls.checkAnswer}
              disabled={checkAnswerButton.status === "disabled"}
            >
              {checkAnswerButton.label}
            </button>
          )}
          {nextButton.status !== "hidden" &&
            (isLastStep && isReview ? (
              <button
                type="button"
                className="btn btn--primary"
                onClick={controls.next}
              >
                Done
              </button>
            ) : (
              <button
                type="button"
                className="btn btn--primary"
                onClick={controls.next}
                disabled={nextDisabled}
              >
                {isLastStep ? "Finish run" : nextButton.label}
                <span aria-hidden="true">→</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
