# Lumen

> New to Teacharium? It's a platform for building interactive lessons. Lessons can be embedded with an iframe using the [Embed SDK](https://docs.teacharium.io/api-documentation/hosted-embedding), or exported and hosted yourself as this sample does. See the [repo README](../../README.md) for an overview.

A high school take on hosting an exported [Teacharium](https://teacharium.io) lesson with [`@teacharium/player`](https://www.npmjs.com/package/@teacharium/player). Lumen is a pretend dark-mode study app with subject tabs, a daily streak and XP. It runs **Atomic Structure & the Periodic Table**, a seven-question chemistry checkpoint that uses a different question type on each step.

▶️ Live demo: [docs.teacharium.io/samples/lumen](https://docs.teacharium.io/samples/lumen/)
📖 How the integration works: [Self-hosted embedding → Sample app](https://docs.teacharium.io/api-documentation/self-hosted-embedding/sample-app)

## Design for high schoolers

- Dark UI with a single lime accent, Space Grotesk headlines and mono labels. Confident and minimal, not cartoonish.
- "Runs" instead of attempts, with a streak, best accuracy and a recent-runs history.
- Focus mode for the lesson: a segmented progress bar, a compact `01/07` counter and **← / →** keyboard navigation.
- The results screen shows an accuracy ring, a short verdict and a per-question breakdown.
- The lesson's own custom CSS gives the player the same dark look.

## What it shows

| Feature                                                                                                                                        | Where                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Loading an exported lesson (manifest, widget bundles, `lesson.json`)                                                                           | [`src/lib/lessonLoader.ts`](src/lib/lessonLoader.ts)                                                                                     |
| Sharing one React instance with exported widgets (import map + shims)                                                                          | [`index.html`](index.html), [`public/react-shim.js`](public/react-shim.js), [`src/main.tsx`](src/main.tsx)                               |
| Mounting the player in a focus-mode frame                                                                                                      | [`src/components/LessonFrame.tsx`](src/components/LessonFrame.tsx)                                                                       |
| A custom footer via `renderFooter`: Back / Next, a segmented progress bar, arrow keys, and Check / Hint / feedback when a lesson asks for them | [`src/components/LessonFooter.tsx`](src/components/LessonFooter.tsx)                                                                     |
| A custom start screen (`showStartButton={false}`) with stats and run history                                                                   | [`src/components/StartScreen.tsx`](src/components/StartScreen.tsx)                                                                       |
| A custom results screen built from `onComplete`                                                                                                | [`src/components/EndScreen.tsx`](src/components/EndScreen.tsx)                                                                           |
| Saving progress and results to `localStorage`                                                                                                  | [`src/lib/progressStore.ts`](src/lib/progressStore.ts)                                                                                   |
| Three ways in: **Start**, **Continue**, **Review last run**                                                                                    | [`src/App.tsx`](src/App.tsx)                                                                                                             |
| A raw saved-data viewer and a reset button (top bar, **Data** / **Reset**)                                                                     | [`src/components/RawDataPanel.tsx`](src/components/RawDataPanel.tsx), [`src/components/ResetDialog.tsx`](src/components/ResetDialog.tsx) |

## Run it

From this folder:

```bash
npm install
npm run dev
```

Then open http://localhost:5176.

`npm run build` writes a static site to `dist/`. To serve it from a sub-path, set `BASE_PATH`, for example `BASE_PATH=/demos/lumen/ npm run build`.

## Use your own lesson

1. In Teacharium, publish your lesson, then open **Lesson Delivery**, expand the version, and click **Export**. Exporting needs the EdTech plan.
2. Replace the contents of `public/lesson/` with the files inside the zip's top folder.
3. Update the start screen copy in `StartScreen.tsx` to match.

## How the three modes work

- **Start** clears the saved run and mounts `<TeachariumPlayer>` with no `initialSessionState`.
- **Continue** passes the saved `SessionState` back as `initialSessionState`. It's saved from `onStepChange` on every step, and from `controls.getSessionState()` when you click **Save & exit** partway through a question.
- **Review last run** mounts the player with `mode="review"` and the last run's `sessionState`. It's read-only and steps through the path you took.
