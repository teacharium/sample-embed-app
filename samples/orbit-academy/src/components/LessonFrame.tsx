import { useMemo, useRef } from "react";
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
import { LessonFooter } from "./LessonFooter";

interface LessonFrameProps {
  loaded: LoadedLesson;
  mode: "player" | "review";
  /** Saved session to resume (player) or replay (review). */
  initialSessionState?: SessionState;
  /** The attempt being reviewed, for returning to its results. */
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
 * Hosts the Teacharium player inside the app's own frame.
 *
 * Integration points used here:
 * - `showStartButton={false}`: the app has its own start screen
 * - `renderFooter`: replaces the built-in footer with <LessonFooter>
 * - `onStepChange`: saves progress so the learner can resume
 * - `onComplete`: records the finished attempt, then shows the app's end screen
 * - `mode="review"` + `initialSessionState`: read-only replay of an attempt
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

  // Widgets registered themselves when lessonLoader injected their bundles.
  const widgets = useMemo(() => getWidgets(), []);
  const mediaResolvers = useMemo(() => createMediaResolvers(basePath), [basePath]);

  // The latest footer controls, so the frame's Exit button can snapshot the
  // session (including answers on the current step) before leaving.
  const controlsRef = useRef<PlayerFooterControls | null>(null);

  const saveAndExit = () => {
    if (!isReview && controlsRef.current) {
      progressStore.saveInProgress(lessonId, controlsRef.current.getSessionState());
    }
    onExit();
  };

  const handleStepChange = (state: SessionState) => {
    if (!isReview) progressStore.saveInProgress(lessonId, state);
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
    <div className={`lesson-frame ${isReview ? "lesson-frame--review" : ""}`}>
      <div className="lesson-frame__bar">
        <button type="button" className="ghost-button" onClick={saveAndExit}>
          <span aria-hidden="true">←</span> {isReview ? "Back" : "Save & exit"}
        </button>
        <div className="lesson-frame__title">
          <span aria-hidden="true">🪐</span> Space Explorers
        </div>
        <span className={`mode-pill ${isReview ? "mode-pill--review" : ""}`}>
          {isReview ? "👀 Review mode" : "🎮 Playing"}
        </span>
      </div>

      <div className="lesson-frame__player">
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
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
};
