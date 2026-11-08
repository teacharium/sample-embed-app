import { useEffect, useState, type ReactNode } from "react";
import type { SessionState } from "@teacharium/player";
import { AppChrome } from "./components/AppChrome";
import { StartScreen } from "./components/StartScreen";
import { LessonFrame } from "./components/LessonFrame";
import { EndScreen } from "./components/EndScreen";
import { RawDataPanel } from "./components/RawDataPanel";
import { ResetDialog } from "./components/ResetDialog";
import { loadLesson, type LoadedLesson } from "./lib/lessonLoader";
import { progressStore, useStoredProgress } from "./lib/progressStore";

/**
 * Which screen the portal shows. The lesson player only exists on "playing";
 * the assignment overview and the submission receipt are this app's own UI.
 */
type Screen =
  | { name: "overview" }
  | {
      name: "playing";
      mode: "player" | "review";
      /** Saved session to resume or review; undefined = fresh attempt */
      initialSessionState?: SessionState;
      /** For review: which attempt to return to when done */
      attemptId?: string;
      /** Remounts the player for every new session */
      sessionKey: number;
    }
  | { name: "receipt"; attemptId: string };

/** Load the exported lesson once (widgets + lesson.json) on startup. */
const useLesson = () => {
  const [lesson, setLesson] = useState<LoadedLesson | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // The unzipped export lives in public/lesson. BASE_URL keeps this working
    // when the app is served from a sub-path.
    loadLesson(`${import.meta.env.BASE_URL}lesson`).then(
      setLesson,
      (err: Error) => setError(err.message),
    );
  }, []);
  return { lesson, error };
};

export const App = () => {
  const { lesson, error } = useLesson();
  const stored = useStoredProgress();
  const [screen, setScreen] = useState<Screen>({ name: "overview" });
  const [showData, setShowData] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const latestAttempt = stored.attempts.at(-1) ?? null;

  const play = (
    mode: "player" | "review",
    initialSessionState?: SessionState,
    attemptId?: string,
  ) =>
    setScreen({
      name: "playing",
      mode,
      initialSessionState,
      attemptId,
      sessionKey: Date.now(),
    });

  const startNew = () => {
    progressStore.clearInProgress();
    play("player");
  };
  const resume = () => {
    if (stored.inProgress) play("player", stored.inProgress);
  };
  const review = (attemptId?: string) => {
    const attempt =
      stored.attempts.find((a) => a.id === attemptId) ?? latestAttempt;
    if (attempt) play("review", attempt.sessionState, attempt.id);
  };
  const toOverview = () => setScreen({ name: "overview" });

  const confirmReset = () => {
    progressStore.reset();
    setShowReset(false);
    toOverview();
  };

  const receiptAttempt =
    screen.name === "receipt"
      ? stored.attempts.find((a) => a.id === screen.attemptId)
      : undefined;

  let content: ReactNode;
  if (error) {
    content = (
      <div className="notice notice--error" role="alert">
        <h2>The assignment could not be loaded</h2>
        <p>{error}</p>
        <p className="muted">
          Make sure the unzipped export is in <code>public/lesson</code>.
        </p>
      </div>
    );
  } else if (!lesson) {
    content = (
      <div className="notice" aria-busy="true">
        <div className="loading-bar" aria-hidden="true" />
        <p>Loading Problem Set 3…</p>
      </div>
    );
  } else if (screen.name === "playing") {
    content = (
      <LessonFrame
        key={screen.sessionKey}
        loaded={lesson}
        mode={screen.mode}
        initialSessionState={screen.initialSessionState}
        reviewAttemptId={screen.attemptId}
        onExit={toOverview}
        onFinished={(attemptId) => setScreen({ name: "receipt", attemptId })}
      />
    );
  } else if (screen.name === "receipt" && receiptAttempt) {
    content = (
      <EndScreen
        lesson={lesson.lesson}
        attempt={receiptAttempt}
        attemptNumber={stored.attempts.indexOf(receiptAttempt) + 1}
        onReview={() => review(receiptAttempt.id)}
        onStartNew={startNew}
        onBack={toOverview}
      />
    );
  } else {
    content = (
      <StartScreen
        loaded={lesson}
        stored={stored}
        onStartNew={startNew}
        onResume={resume}
        onReview={() => review()}
        onOpenReceipt={(attemptId) => setScreen({ name: "receipt", attemptId })}
      />
    );
  }

  return (
    <>
      <AppChrome
        stored={stored}
        playing={screen.name === "playing"}
        onHome={toOverview}
        onShowData={() => setShowData(true)}
        onReset={() => setShowReset(true)}
      >
        {content}
      </AppChrome>
      {showData && (
        <RawDataPanel stored={stored} onClose={() => setShowData(false)} />
      )}
      {showReset && (
        <ResetDialog
          onConfirm={confirmReset}
          onCancel={() => setShowReset(false)}
        />
      )}
    </>
  );
};
