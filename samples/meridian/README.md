# Meridian

> New to Teacharium? It's a platform for building interactive lessons. Lessons can be embedded with an iframe using the [Embed SDK](https://docs.teacharium.io/api-documentation/hosted-embedding), or exported and hosted yourself as this sample does. See the [repo README](../../README.md) for an overview.

A React app that hosts an exported [Teacharium](https://teacharium.io) lesson itself using [`@teacharium/player`](https://www.npmjs.com/package/@teacharium/player). No iframe, no Teacharium servers at runtime: the lesson, its widgets and the player all run inside this app.

It plays **Problem Set 3: Supply, Demand & Equilibrium**, a seven-question microeconomics check for an introductory college course. Each question uses a different question type. The lesson runs inside "Meridian", a pretend university learning portal, and is presented the way an LMS presents an assignment: an assignment overview with an attempts table, a calm pager while you work, and a gradebook-style submission receipt.

📖 Full walkthrough: [Self-hosted embedding → Sample app](https://docs.teacharium.io/api-documentation/self-hosted-embedding/sample-app)
▶️ Live demo: [docs.teacharium.io/samples/meridian](https://docs.teacharium.io/samples/meridian/)

## Design

Meridian targets undergraduates, so it aims to feel credible and quiet rather than playful:

- **Editorial typography:** Source Serif 4 for headings, Inter for interface text.
- **Calm palette:** warm paper and white surfaces, navy as the primary color, a restrained crimson accent.
- **Structure over decoration:** thin rules instead of heavy shadows, 6–8px corners, tables for attempts and grades.
- **LMS conventions:** breadcrumb, course rail, due date and points, a numbered question navigator, "Submit assignment" on the last question, a letter grade and confirmation number on the receipt.

The lesson's own look (serif question titles, paper background, navy submit buttons) comes from the lesson's custom CSS, set in Teacharium and shipped inside the export.

## What it shows

| Feature                                                                                                                             | Where                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Loading an exported lesson (manifest, widget bundles, `lesson.json`)                                                                | [`src/lib/lessonLoader.ts`](src/lib/lessonLoader.ts)                                                                                     |
| Sharing one React instance with exported widgets (import map + shims)                                                               | [`index.html`](index.html), [`public/react-shim.js`](public/react-shim.js), [`src/main.tsx`](src/main.tsx)                               |
| Mounting the player inside your own assignment panel                                                                                | [`src/components/LessonFrame.tsx`](src/components/LessonFrame.tsx)                                                                       |
| Keeping your own UI in sync with the player (`onEvent` → "Question n of 7")                                                         | [`src/components/LessonFrame.tsx`](src/components/LessonFrame.tsx)                                                                       |
| A custom footer with Previous / Next / Submit (plus Check Answer, Hint and feedback when a lesson asks for them) via `renderFooter` | [`src/components/LessonFooter.tsx`](src/components/LessonFooter.tsx)                                                                     |
| A custom start screen (`showStartButton={false}`) with an attempts table                                                            | [`src/components/StartScreen.tsx`](src/components/StartScreen.tsx)                                                                       |
| A gradebook-style end screen built from `onComplete`                                                                                | [`src/components/EndScreen.tsx`](src/components/EndScreen.tsx)                                                                           |
| Saving results and progress to `localStorage`                                                                                       | [`src/lib/progressStore.ts`](src/lib/progressStore.ts)                                                                                   |
| Three launch modes: **Start new attempt**, **Resume attempt**, **Review latest submission**                                         | [`src/App.tsx`](src/App.tsx)                                                                                                             |
| A raw saved-data viewer and a reset button                                                                                          | [`src/components/RawDataPanel.tsx`](src/components/RawDataPanel.tsx), [`src/components/ResetDialog.tsx`](src/components/ResetDialog.tsx) |

## Run it

From this folder:

```bash
npm install
npm run dev
```

Then open http://localhost:5177.

`npm run build` writes a static site to `dist/`, which you can host anywhere. To serve it from a sub-path, set `BASE_PATH`, for example `BASE_PATH=/demos/meridian/ npm run build`.

## Use your own lesson

1. In Teacharium, publish your lesson, then open **Lesson Delivery**, expand the version, and click **Export**. Exporting needs the EdTech plan.
2. Unzip the export and replace the contents of `public/lesson/` with the files inside the zip's top folder (`manifest.json`, `lesson.json`, `widgets/`, `media/`, ...).
3. Reload. The course and assignment copy in `AppChrome.tsx` and `StartScreen.tsx` is written for the sample lesson, so update it to match.

## How the three modes work

The player gives you everything you need to save; this app keeps it in `localStorage` under `meridian:teacharium-progress:v1`.

- **Start new attempt** clears the saved attempt and mounts `<TeachariumPlayer>` with no `initialSessionState`.
- **Resume attempt** passes the saved `SessionState` back as `initialSessionState`. The app saves it from `onStepChange` on every question, and from `controls.getSessionState()` when the student clicks **Save & exit** partway through a question.
- **Review latest submission** mounts the player with `mode="review"` and the `sessionState` from the last `onComplete` result. Review is read-only and steps through the student's recorded path.

Each session gets a fresh player (`key`), and `LessonFrame` calls `resetWidgetStateStore()` before mounting so a new attempt never shows the previous attempt's answers.

Open **View saved data** in the course rail to see exactly what's stored, and **Reset progress** to wipe it.

## Project layout

```
public/
  lesson/            unzipped lesson export
  media/             1-second-of-silence.mp3 (the player's audio unlock clip)
  react-shim.js      re-exports window.React for widget bundles
  react-dom-shim.js  re-exports window.ReactDOM for widget bundles
src/
  App.tsx            screens: overview → playing → receipt, plus modals
  lib/               lesson loading, saved progress, result helpers
  components/        portal chrome, screens, assignment panel and pager
  styles/app.css     all app styling (plain CSS)
```
