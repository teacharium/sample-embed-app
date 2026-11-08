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
 * Which screen the app shows. The lesson player only exists on "playing";
 * the start and results screens are Lumen's own UI.
 */
type Screen =
  | { name: "start" }
  | {
      name: "playing";
      mode: "player" | "review";
      /** Saved session to resume or review; undefined = fresh run */
      initialSessionState?: SessionState;
      /** For review: which run to return to when done */
      attemptId?: string;
      /** Remounts the player for every new session */
      sessionKey: number;
    }
  | { name: "end"; attemptId: string };

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
  const [screen, setScreen] = useState<Screen>({ name: "start" });
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
  const goHome = () => setScreen({ name: "start" });

  const confirmReset = () => {
    progressStore.reset();
    setShowReset(false);
    goHome();
  };

  const endAttempt =
    screen.name === "end"
      ? stored.attempts.find((a) => a.id === screen.attemptId)
      : undefined;

  let content: ReactNode;
  if (error) {
    content = (
      <div className="status" role="alert">
        <h2>Couldn't load the lesson</h2>
        <p>{error}</p>
        <p className="muted">
          Make sure the unzipped export is in <code>public/lesson</code>.
        </p>
      </div>
    );
  } else if (!lesson) {
    content = (
      <div className="status" aria-busy="true">
        <div className="spinner" aria-hidden="true" />
        <p>Loading checkpoint…</p>
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
        onExit={goHome}
        onFinished={(attemptId) => setScreen({ name: "end", attemptId })}
      />
    );
  } else if (screen.name === "end" && endAttempt) {
    content = (
      <EndScreen
        lesson={lesson.lesson}
        attempt={endAttempt}
        attemptNumber={stored.attempts.indexOf(endAttempt) + 1}
        onReview={() => review(endAttempt.id)}
        onPlayAgain={startNew}
        onHome={goHome}
      />
    );
  } else {
    content = (
      <StartScreen
        loaded={lesson}
        stored={stored}
        onPlayNew={startNew}
        onResume={resume}
        onReview={() => review()}
      />
    );
  }

  return (
    <>
      <AppChrome
        stored={stored}
        onHome={goHome}
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
