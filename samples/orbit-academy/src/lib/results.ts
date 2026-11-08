import type { TeachariumLessonExport } from "@teacharium/player";
import type { Attempt } from "./progressStore";

export interface QuestionResult {
  stepId: string;
  stepName: string;
  correct: boolean;
  attempted: boolean;
  score: number;
  maxScore: number;
}

/** Every step in lesson order. */
export const lessonSteps = (lesson: TeachariumLessonExport) =>
  lesson.sections.flatMap((section) => section.steps);

/**
 * Group an attempt's item results by step. Most questions are one item, but a
 * MatrixChoice registers one item per row, so a step counts as correct only
 * when all of its items are.
 */
export const questionResults = (
  lesson: TeachariumLessonExport,
  attempt: Attempt,
): QuestionResult[] =>
  lessonSteps(lesson)
    .map((step) => {
      const items = attempt.items.filter(
        (item) => item.stepId === step.id && item.type !== "instructional",
      );
      if (items.length === 0) return null;
      return {
        stepId: step.id,
        stepName: step.name,
        correct: items.every((item) => item.status.correct),
        attempted: items.some((item) => item.status.attempted),
        score: items.reduce((sum, item) => sum + (item.status.currentScore ?? 0), 0),
        maxScore: items.reduce((sum, item) => sum + (item.status.maxScore ?? 0), 0),
      };
    })
    .filter((result): result is QuestionResult => result !== null);

/** 0-3 stars for the end screen. */
export const starRating = (correct: number, total: number) => {
  if (total === 0) return 0;
  const ratio = correct / total;
  if (ratio >= 0.85) return 3;
  if (ratio >= 0.5) return 2;
  return ratio > 0 ? 1 : 0;
};
