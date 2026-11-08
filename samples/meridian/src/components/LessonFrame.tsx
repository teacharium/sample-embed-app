import { useMemo, useRef, useState } from "react";
import {
  TeachariumPlayer,
  TextConfig,
  type CompletionResult,
  type PlayerConfig,
  type PlayerFooterControls,
  type SessionState,
} from "@teacharium/player";
import { getWidgets } from "@teacharium/widget";
import { createMediaResolvers, type LoadedLesson } from "../lib/lessonLoader";
import { progressStore } from "../lib/progressStore";
import { lessonSteps } from "../lib/results";
import { LessonFooter } from "./LessonFooter";
import { ArrowLeftIcon } from "./Icons";

interface LessonFrameProps {
  loaded: LoadedLesson;
  mode: "player" | "review";
  /** Saved session to resume (player) or replay (review). */
  initialSessionState?: SessionState;
  /** The attempt being reviewed, for returning to its receipt. */
  reviewAttemptId?: string;
  onExit: () => void;
  onFinished: (attemptId: string) => void;
}

// Components that aren't widgets but appear in lessons.
const ADDITIONAL_COMPONENTS = { Text: TextConfig };

const PLAYER_CONFIG: Partial<PlayerConfig> = {
  allowPreviousStep: true,
  // Load the lesson's Google Fonts (if the author picked any).
  fontLoading: "google",
};

/**
 * Hosts the Teacharium player inside the portal's assignment panel.
 *
 * Integration points used here:
 * - `showStartButton={false}`: the portal has its own assignment overview
 * - `renderFooter`: replaces the built-in footer with <LessonFooter>
 * - `onStepChange`: saves the attempt so the student can resume
 * - `onEvent` ("step_started"): keeps the toolbar's "Question n of N" current
 * - `onComplete`: records the submission, then shows the portal's receipt
 * - `mode="review"` + `initialSessionState`: read-only replay of a submission
 */
export const LessonFrame = ({
  loaded,
  mode,
  initialSessionState,
  reviewAttemptId,
  onExit,
  onFinished,
}: LessonFrameProps) => {
  const { lesson, basePath } = loaded;
  const lessonId = lesson.lesson.id;
  const isReview = mode === "review";
  const steps = useMemo(() => lessonSteps(lesson), [lesson]);


  // Widgets registered themselves when lessonLoader injected their bundles.
  const widgets = useMemo(() => getWidgets(), []);
  const mediaResolvers = useMemo(
    () => createMediaResolvers(basePath),
    [basePath],
  );

  // Which step is showing, for the toolbar. Start from the saved session
  // (review starts at its first visit), then follow step_started events.
  const [stepId, setStepId] = useState<string | undefined>(() => {
    const history = initialSessionState?.stepHistory;
    if (!history?.length) return steps[0]?.id;
    return (
      isReview ? history[0] : history[initialSessionState!.currentHistoryIndex]
    )?.stepId;
  });
  const stepIndex = Math.max(
    0,
    steps.findIndex((s) => s.id === stepId),
  );

  // The latest footer controls, so the toolbar's Save & exit can snapshot the
  // session (including answers on the current question) before leaving.
  const controlsRef = useRef<PlayerFooterControls | null>(null);

  const saveAndExit = () => {
    if (!isReview && controlsRef.current) {
      progressStore.saveInProgress(
        lessonId,
        controlsRef.current.getSessionState(),
      );
    }
    onExit();
  };

  const handleStepChange = (state: SessionState) => {
    if (!isReview) progressStore.saveInProgress(lessonId, state);
  };

  const handleEvent = (event: { type: string; stepId?: unknown }) => {
    if (event.type === "step_started" && typeof event.stepId === "string") {
      setStepId(event.stepId);
    }
  };

  const handleComplete = (result: CompletionResult) => {
    if (isReview) {
      if (reviewAttemptId) onFinished(reviewAttemptId);
      else onExit();
      return;
    }
    const attempt = progressStore.addAttempt(lessonId, result);
    onFinished(attempt.id);
  };

  const renderFooter = (controls: PlayerFooterControls) => {
    controlsRef.current = controls;
    return <LessonFooter controls={controls} />;
  };

  return (
    <section
      className={`assignment ${isReview ? "assignment--review" : ""}`}
      aria-label="Problem Set 3"
    >
      <div className="assignment__toolbar">
        <div className="assignment__heading">
          <span className="assignment__title">Problem Set 3</span>
          <span className="assignment__position">
            Question {stepIndex + 1} of {steps.length}
          </span>
          {isReview && <span className="badge">Submission review</span>}
        </div>
        <button type="button" className="text-button" onClick={saveAndExit}>
          <ArrowLeftIcon /> {isReview ? "Back to overview" : "Save & exit"}
        </button>
      </div>

      <div className="assignment__player">
        <TeachariumPlayer
          lesson={lesson}
          widgets={widgets}
          additionalComponents={ADDITIONAL_COMPONENTS}
          mediaResolvers={mediaResolvers}
          mode={mode}
          initialSessionState={initialSessionState}
          config={PLAYER_CONFIG}
          showStartButton={false}
          renderFooter={renderFooter}
          onStepChange={handleStepChange}
          onEvent={handleEvent}
          onComplete={handleComplete}
        />
      </div>
    </section>
  );
};
