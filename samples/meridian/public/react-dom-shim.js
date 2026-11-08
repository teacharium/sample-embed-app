// Re-exports the host app's React DOM (set on window in src/main.tsx) so that
// exported widget bundles, which `import ... from "react-dom"`, share
// the same instance as the player. Wired up by the import map in index.html.
const ReactDOM = window.ReactDOM;

export const {
  createPortal,
  flushSync,
  preconnect,
  prefetchDNS,
  preinit,
  preinitModule,
  preload,
  preloadModule,
  requestFormReset,
  unstable_batchedUpdates,
  useFormState,
  useFormStatus,
  version,
} = ReactDOM;

export default ReactDOM;
