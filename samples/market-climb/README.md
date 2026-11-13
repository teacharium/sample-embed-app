# Market Climb

The smallest possible host for an exported [Teacharium](https://teacharium.io) lesson: one full-page [`@teacharium/player`](https://www.npmjs.com/package/@teacharium/player) with its built-in start screen and footer. Compare it with the other samples, which wrap the player in their own app.

▶️ Live demo: [docs.teacharium.io/samples/market-climb](https://docs.teacharium.io/samples/market-climb/)

## Files

| File | What it does |
| --- | --- |
| [`src/lessonLoader.ts`](src/lessonLoader.ts) | Loads the export: manifest, widget bundles, `lesson.json` |
| [`index.html`](index.html), [`public/react-shim.js`](public/react-shim.js), [`src/main.tsx`](src/main.tsx) | Share one React instance with the exported widgets |
| [`src/App.tsx`](src/App.tsx) | Mounts the player |

## Run it

```bash
npm install
npm run dev
```

To play a different lesson, replace `public/lesson/` with the contents of another export zip.
