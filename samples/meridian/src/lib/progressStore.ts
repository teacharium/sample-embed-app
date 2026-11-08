import { useCallback, useSyncExternalStore } from "react";
import type { CompletionResult, SessionState } from "@teacharium/player";

/**
 * Everything this app remembers about the learner, saved to localStorage.
 *
 * A real app would send the same data to its own backend instead. The player
 * hands you everything you need:
 *  - `SessionState` from `onStepChange` (save it to resume later)
 *  - `CompletionResult` from `onComplete` (score + per-question results, plus
 *    the final `SessionState`, which `mode="review"` replays)
 */
export interface Attempt {
  id: string;
  completedAt: string;
  score: number;
  maxScore: number;
  items: NonNullable<CompletionResult["items"]>;
  sessionState: SessionState;
}

export interface StoredProgress {
  version: 1;
  lessonId: string | null;
  /** The unfinished attempt, saved at every step change. */
  inProgress: SessionState | null;
  /** Finished attempts, newest last. */
  attempts: Attempt[];
}

const STORAGE_KEY = "meridian:teacharium-progress:v1";

const EMPTY: StoredProgress = {
  version: 1,
  lessonId: null,
  inProgress: null,
  attempts: [],
};

const read = (): StoredProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as StoredProgress;
    return parsed?.version === 1 ? parsed : EMPTY;
  } catch {
    // Storage blocked (private mode, etc.) or corrupt JSON: start fresh.
    return EMPTY;
  }
};

// A tiny external store so every component sees the same snapshot.
let snapshot: StoredProgress = read();
const listeners = new Set<() => void>();

const write = (next: StoredProgress) => {
  snapshot = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Quota exceeded or storage blocked: keep the in-memory copy.
  }
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const progressStore = {
  get: () => snapshot,

  /** Save the unfinished attempt (call from `onStepChange`). */
  saveInProgress: (lessonId: string, sessionState: SessionState) =>
    write({ ...snapshot, lessonId, inProgress: sessionState }),

  /** Forget the unfinished attempt (starting over). */
  clearInProgress: () => write({ ...snapshot, inProgress: null }),

  /** Record a finished attempt (call from `onComplete`). */
  addAttempt: (lessonId: string, result: CompletionResult): Attempt => {
    const attempt: Attempt = {
      id: crypto.randomUUID(),
      completedAt: new Date().toISOString(),
      score: result.score ?? 0,
      maxScore: result.maxScore ?? 0,
      items: result.items ?? [],
      sessionState: result.sessionState,
    };
    write({
      ...snapshot,
      lessonId,
      inProgress: null,
      attempts: [...snapshot.attempts, attempt],
    });
    return attempt;
  },

  /** Wipe everything. */
  reset: () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    write(EMPTY);
  },

  storageKey: STORAGE_KEY,
};

/** React binding: re-renders when the stored progress changes. */
export const useStoredProgress = (): StoredProgress =>
  useSyncExternalStore(
    subscribe,
    useCallback(() => snapshot, []),
  );
