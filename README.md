# Teacharium sample apps

Example apps that show how to put [Teacharium](https://teacharium.io) lessons inside your own product.

## What is Teacharium?

Teacharium is a platform for building interactive lessons. Authors build a lesson visually, or with an AI agent, as a series of short steps: text, images, video, simulations and many kinds of questions. Questions include multiple choice, fill in the blank, ordering, matching, matrix and cloze. Lessons can use variables, branching and scoring, and Teacharium tracks each learner's answers and results.

Once a lesson is published, you can deliver it to learners in two ways:

| Option                       | How it works                                                                                                                                                                                                     | Docs                                                                                                                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hosted embed** (Embed SDK) | Add an iframe with [`@teacharium/embed-sdk`](https://www.npmjs.com/package/@teacharium/embed-sdk). Teacharium hosts the player and tracks progress; your server signs a token for each learner.                  | [Hosted embedding](https://docs.teacharium.io/api-documentation/hosted-embedding) · [SDK reference](https://docs.teacharium.io/api-documentation/hosted-embedding/sdk-reference) |
| **Self-hosted** (Player)     | Export the lesson and render it in your own React app with [`@teacharium/player`](https://www.npmjs.com/package/@teacharium/player). No iframe and no Teacharium server at runtime; you own the UI and the data. | [Self-hosted embedding](https://docs.teacharium.io/api-documentation/self-hosted-embedding)                                                                                      |

The samples in this repo use the **self-hosted** option. To get started with the hosted Embed SDK instead, see the [hosted embedding quick start](https://docs.teacharium.io/api-documentation/hosted-embedding).

📚 All docs: [docs.teacharium.io](https://docs.teacharium.io) · Developer docs: [docs.teacharium.io/api-documentation](https://docs.teacharium.io/api-documentation/hosted-embedding)

## Samples

Three versions of the same integration, each with its own lesson and a design for a different age group:

| Sample | Audience | Lesson | What it shows | Live demo |
| --- | --- | --- | --- | --- |
| [Orbit Academy](samples/orbit-academy) | Middle school | Space Explorers (solar system) | A playful, bright learning app: custom frame, Previous/Next footer with a rocket progress track, custom start and end screens, stars and badges. | [Open](https://docs.teacharium.io/samples/orbit-academy/) |
| [Lumen](samples/lumen) | High school | Atomic Structure & the Periodic Table | A dark-mode study app: focus-mode frame, segmented progress bar, arrow-key navigation, streaks and an accuracy ring. | [Open](https://docs.teacharium.io/samples/lumen/) |
| [Meridian](samples/meridian) | College | Supply, Demand & Market Equilibrium | A university course portal: assignment overview, attempts table, question pager and a gradebook-style submission receipt. | [Open](https://docs.teacharium.io/samples/meridian/) |

Every sample has the same integration features: it loads an exported lesson, shares React with the exported widgets, renders its own footer through `renderFooter`, shows its own start and end screens, saves progress and results to `localStorage`, offers play new / resume / review, and includes a saved-data viewer and a reset button.

## Run a sample

The repo is an npm workspace. Install once at the root, then run a sample:

```bash
npm install
npm run dev:orbit-academy   # http://localhost:5175
npm run dev:lumen           # http://localhost:5176
npm run dev:meridian        # http://localhost:5177
```

Or work inside the sample's own folder:

```bash
cd samples/orbit-academy
npm install
npm run dev
```

## Build all samples as one static site

```bash
npm run build:site
```

This builds every sample into `site/<name>/`, served from `/samples/<name>/`. The Teacharium docs site hosts that output; in the docs repo, `pnpm --filter teacharium-docs run sync-samples` rebuilds it and copies it in. Pass `--prefix /some/path` to change the URL prefix, or `--out <dir>` to write somewhere else.

## Add a sample

1. Create `samples/<name>/` with its own `package.json` and a Vite build.
2. Make it work under a sub-path. Read `process.env.BASE_PATH` for Vite's `base`, and build URLs from `import.meta.env.BASE_URL` instead of `/`. `samples/orbit-academy` shows how.
3. Add it to the table above, with a link to its live demo.
