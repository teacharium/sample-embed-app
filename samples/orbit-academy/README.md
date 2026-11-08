# Orbit Academy

> New to Teacharium? It's a platform for building interactive lessons. Lessons can be embedded with an iframe using the [Embed SDK](https://docs.teacharium.io/api-documentation/hosted-embedding), or exported and hosted yourself as this sample does. See the [repo README](../../README.md) for an overview.

A small React app that hosts an exported [Teacharium](https://teacharium.io) lesson itself using [`@teacharium/player`](https://www.npmjs.com/package/@teacharium/player). No iframe, no Teacharium servers at runtime: the lesson, its widgets and the player all run inside this app.

It plays **Space Explorers**, a seven-question solar system quiz for middle school learners. Each question uses a different question type. The quiz is wrapped in "Orbit Academy", a pretend learning app.

📖 Full walkthrough: [Self-hosted embedding → Sample app](https://docs.teacharium.io/api-documentation/self-hosted-embedding/sample-app)
▶️ Live demo: [docs.teacharium.io/samples/orbit-academy](https://docs.teacharium.io/samples/orbit-academy/)

## What it shows

| Feature | Where |
| --- | --- |
| Loading an exported lesson (manifest, widget bundles, `lesson.json`) | [`src/lib/lessonLoader.ts`](src/lib/lessonLoader.ts) |
| Sharing one React instance with exported widgets (import map + shims) | [`index.html`](index.html), [`public/react-shim.js`](public/react-shim.js), [`src/main.tsx`](src/main.tsx) |
| Mounting the player in your own frame | [`src/components/LessonFrame.tsx`](src/components/LessonFrame.tsx) |
| A custom footer with Previous / Next (plus Check Answer, Hint and feedback when a lesson asks for them) via `renderFooter` | [`src/components/LessonFooter.tsx`](src/components/LessonFooter.tsx) |
| A custom start screen (`showStartButton={false}`) | [`src/components/StartScreen.tsx`](src/components/StartScreen.tsx) |
| A custom end screen built from `onComplete` | [`src/components/EndScreen.tsx`](src/components/EndScreen.tsx) |
| Saving results and progress to `localStorage` | [`src/lib/progressStore.ts`](src/lib/progressStore.ts) |
| Three launch modes: **Play new**, **Pick up where you left off**, **Review your previous** | [`src/App.tsx`](src/App.tsx) |
| A raw saved-data viewer and a reset button | [`src/components/RawDataPanel.tsx`](src/components/RawDataPanel.tsx), [`src/components/ResetDialog.tsx`](src/components/ResetDialog.tsx) |

## Run it

From this folder:

```bash
npm install
npm run dev
```

Then open http://localhost:5175.

`npm run build` writes a static site to `dist/`, which you can host anywhere. To serve it from a sub-path, set `BASE_PATH`, for example `BASE_PATH=/demos/orbit/ npm run build`.

## Use your own lesson

1. In Teacharium, publish your lesson, then open **Lesson Delivery**, expand the version, and click **Export**. Exporting needs the EdTech plan.
2. Unzip the export and replace the contents of `public/lesson/` with the files inside the zip's top folder (`manifest.json`, `lesson.json`, `widgets/`, `media/`, ...).
3. Reload. The start screen copy in `StartScreen.tsx` is written for the sample lesson, so update it to match.

## How the three modes work

The player gives you everything you need to save; this app keeps it in `localStorage`.

- **Play new** clears the saved attempt and mounts `<TeachariumPlayer>` with no `initialSessionState`.
- **Pick up where you left off** passes the saved `SessionState` back as `initialSessionState`. The app saves it from `onStepChange` on every step, and from `controls.getSessionState()` when the learner clicks **Save & exit** partway through a step.
- **Review your previous** mounts the player with `mode="review"` and the `sessionState` from the last `onComplete` result. Review is read-only and steps through the learner's recorded path.

Open **View saved data** in the sidebar to see exactly what's stored, and **Reset progress** to wipe it.

## Project layout

```
public/
  lesson/            unzipped lesson export
  media/             1-second-of-silence.mp3 (the player's audio unlock clip)
  react-shim.js      re-exports window.React for widget bundles
  react-dom-shim.js  re-exports window.ReactDOM for widget bundles
src/
  App.tsx            screens: start → playing → end, plus modals
  lib/               lesson loading, saved progress, result helpers
  components/        app chrome, screens, lesson frame and footer
  styles/app.css     all app styling (plain CSS)
```
