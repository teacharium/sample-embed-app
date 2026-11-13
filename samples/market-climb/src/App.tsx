import { useEffect, useMemo, useState } from "react";
import { TeachariumPlayer, TextConfig, type PlayerConfig } from "@teacharium/player";
import { getWidgets } from "@teacharium/widget";
import { createMediaResolvers, loadLesson, type LoadedLesson } from "./lessonLoader";

// Components that aren't widgets but appear in lessons.
const ADDITIONAL_COMPONENTS = { Text: TextConfig };

const PLAYER_CONFIG: Partial<PlayerConfig> = {
  allowPreviousStep: true,
  fontLoading: "google",
};

/** Load the unzipped export in public/lesson (widgets first, then lesson.json). */
const useLesson = () => {
  const [lesson, setLesson] = useState<LoadedLesson | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    loadLesson(`${import.meta.env.BASE_URL}lesson`).then(setLesson, (err: Error) =>
      setError(err.message),
    );
  }, []);
  return { lesson, error };
};

/**
 * The whole app: one full-page player using its built-in start screen and
 * footer. Finishing the lesson remounts the player so it can be played again.
 */
export const App = () => {
  const { lesson, error } = useLesson();
  const [attempt, setAttempt] = useState(0);
  const widgets = useMemo(() => (lesson ? getWidgets() : []), [lesson]);
  const mediaResolvers = useMemo(
    () => createMediaResolvers(lesson?.basePath ?? ""),
    [lesson],
  );

  if (error) {
    return (
      <div className="status" role="alert">
        Couldn't load the lesson: {error}
      </div>
    );
  }
  if (!lesson) {
    return (
      <div className="status" aria-busy="true">
        Loading…
      </div>
    );
  }

  return (
    <TeachariumPlayer
      key={attempt}
      className="player"
      lesson={lesson.lesson}
      widgets={widgets}
      additionalComponents={ADDITIONAL_COMPONENTS}
      mediaResolvers={mediaResolvers}
      config={PLAYER_CONFIG}
      onComplete={() => setAttempt((n) => n + 1)}
    />
  );
};
