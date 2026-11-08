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

const ADDITIONAL_COMPONENTS = { Text: TextConfig };

const PLAYER_CONFIG: Partial<PlayerConfig> = {
  allowPreviousStep: true,
  fontLoading: "google",
};

/**
 * Hosts the Teacharium player in Lumen's focus-mode frame.
 *
 * - `showStartButton={false}`: Lumen has its own start screen
 * - `renderFooter`: Lumen's footer, with arrow-key navigation
 * - `onStepChange` / `onComplete`: save progress and finished runs
 * - `mode="review"` + `initialSessionState`: read-only replay
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

  const widgets = useMemo(() => getWidgets(), []);
  const mediaResolvers = useMemo(
    () => createMediaResolvers(basePath),
    [basePath],
  );

  // Latest footer controls, so "Save & exit" can snapshot the current step.
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

  const handleComplete = (result: CompletionResult) => {
    if (isReview) {
      if (reviewAttemptId) onFinished(reviewAttemptId);
      else onExit();
      return;
    }
    onFinished(progressStore.addAttempt(lessonId, result).id);
  };

  const renderFooter = (controls: PlayerFooterControls) => {
    controlsRef.current = controls;
    return <LessonFooter controls={controls} />;
  };

  return (
    <div className={`focus ${isReview ? "focus--review" : ""}`}>
      <div className="focus__bar">
        <span className="label">
          {isReview ? "Reviewing · read only" : "Chemistry checkpoint"}
        </span>
        <button type="button" className="icon-btn" onClick={saveAndExit}>
          {isReview ? "Close" : "Save & exit"} <span aria-hidden="true">✕</span>
        </button>
      </div>
      <div className="focus__player">
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
