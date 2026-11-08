import React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// Player styles: required for the lesson player and its components.
import "@teacharium/player/styles";
import "./styles/app.css";

import { App } from "./App";

// Exported widget bundles import "react" / "react-dom" as bare modules. The
// import map in index.html sends those imports to /react-shim.js and
// /react-dom-shim.js, which re-export these globals. That way the widgets and
// the player share this app's single React instance.
declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}
window.React = React;
window.ReactDOM = ReactDOM;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
