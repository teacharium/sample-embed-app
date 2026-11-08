import { forwardRef as te, createElement as z, useCallback as g, useState as P, useRef as $, useEffect as le, useMemo as E } from "react";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ue = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (l, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), H = (e) => {
  const l = ue(e);
  return l.charAt(0).toUpperCase() + l.slice(1);
}, ie = (...e) => e.filter((l, r, a) => !!l && l.trim() !== "" && a.indexOf(l) === r).join(" ").trim(), ve = (e) => {
  for (const l in e)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = te(
  ({
    color: e = "currentColor",
    size: l = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: t = "",
    children: n,
    iconNode: u,
    ...c
  }, d) => z(
    "svg",
    {
      ref: d,
      ...pe,
      width: l,
      height: l,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(l) : r,
      className: ie("lucide", t),
      ...!n && !ve(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...u.map(([s, v]) => z(s, v)),
      ...Array.isArray(n) ? n : [n]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _ = (e, l) => {
  const r = te(
    ({ className: a, ...t }, n) => z(be, {
      ref: n,
      iconNode: l,
      className: ie(
        `lucide-${de(H(e))}`,
        `lucide-${e}`,
        a
      ),
      ...t
    })
  );
  return r.displayName = H(e), r;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], he = _("badge-check", me);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], ye = _("chart-column", fe);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], we = _("diff", ge);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], _e = _("disc-3", xe);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ke = _("hash", Ne);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], je = _("sliders-horizontal", Se);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
], De = _("square-function", Ce);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Re = _("star", Me);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
], Pe = _("toggle-left", $e), N = (e) => {
  window.TeachariumComponents = window.TeachariumComponents || {}, window.TeachariumComponents[e.name] = e;
};
var K = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Y;
function Ee() {
  if (Y) return D;
  Y = 1;
  var e = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function r(a, t, n) {
    var u = null;
    if (n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), "key" in t) {
      n = {};
      for (var c in t)
        c !== "key" && (n[c] = t[c]);
    } else n = t;
    return t = n.ref, {
      $$typeof: e,
      type: a,
      key: u,
      ref: t !== void 0 ? t : null,
      props: n
    };
  }
  return D.Fragment = l, D.jsx = r, D.jsxs = r, D;
}
var J;
function Ie() {
  return J || (J = 1, K.exports = Ee()), K.exports;
}
var W = Ie();
const Le = {
  margin: {
    type: "number",
    label: "Margin",
    min: 0,
    max: 100,
    step: 1
  }
  //   width: {
  //     label: "Width",
  //     type: "radio",
  //     options: [
  //       { label: "Full", value: "full" },
  //       { label: "Partial", value: "partial" },
  //     ],
  //   },
}, Ae = ({ margin: e, children: l }) => {
  const r = {};
  return e && (r.padding = `${e}px`), /* @__PURE__ */ W.jsx("div", { style: r, children: l });
}, k = (e) => {
  const l = e.render;
  return {
    ...e,
    render: (r) => /* @__PURE__ */ W.jsx(Ae, { ...r, children: /* @__PURE__ */ W.jsx(l, { ...r }) }),
    fields: {
      ...e.fields,
      ...Le
    }
  };
};
var U = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function qe() {
  if (X) return M;
  X = 1;
  var e = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function r(a, t, n) {
    var u = null;
    if (n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), "key" in t) {
      n = {};
      for (var c in t)
        c !== "key" && (n[c] = t[c]);
    } else n = t;
    return t = n.ref, {
      $$typeof: e,
      type: a,
      key: u,
      ref: t !== void 0 ? t : null,
      props: n
    };
  }
  return M.Fragment = l, M.jsx = r, M.jsxs = r, M;
}
var Z;
function Fe() {
  return Z || (Z = 1, U.exports = qe()), U.exports;
}
var i = Fe();
function O(e, l, r) {
  const a = !!l, [t] = e.hooks.useVariableValues([
    a ? l : void 0
  ]), [n, u] = P(r), c = g(
    (s) => {
      a ? e.updateVariables({ [l]: s }) : u(s);
    },
    [a, l, e]
  );
  return [a ? t ?? r : n, c];
}
function C(e, l, r, a, t) {
  const [n, u] = O(e, l, r), c = typeof n == "number" ? n : Number(n) || r, d = Q(c, a, t), s = g(
    (v) => {
      u(Q(v, a, t));
    },
    [u, a, t]
  );
  return [d, s];
}
function Te(e, l, r) {
  const [a, t] = O(e, l, r), n = typeof a == "boolean" ? a : !!a, u = g(
    (c) => {
      t(c);
    },
    [t]
  );
  return [n, u];
}
function Q(e, l, r) {
  let a = e;
  return l !== void 0 && (a = Math.max(a, l)), r !== void 0 && (a = Math.min(a, r)), a;
}
const Ve = ({
  api: e,
  variableName: l = "",
  label: r = "",
  defaultValue: a = !1,
  displayStyle: t = "card",
  puck: n
}) => {
  if (!e)
    throw new Error("Switch: api is required");
  const u = e.isReviewMode, [c, d] = Te(
    e,
    l || void 0,
    a
  ), s = () => {
    u || d(!c);
  }, v = (p) => {
    (p.key === " " || p.key === "Enter") && (p.preventDefault(), s());
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-switch tw-var-switch--${t}`,
      ref: n?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-switch__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-switch__label", children: r }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "tw-var-switch__control",
            role: "switch",
            "aria-checked": c,
            "aria-label": r || "Toggle switch",
            "aria-disabled": u,
            tabIndex: u ? -1 : 0,
            onClick: s,
            onKeyDown: v,
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `tw-var-switch__track ${c ? "tw-var-switch__track--on" : ""}`,
                children: /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `tw-var-switch__thumb ${c ? "tw-var-switch__thumb--on" : ""}`
                  }
                )
              }
            )
          }
        )
      ] })
    }
  );
}, Be = {
  usagePrompt: "A toggle switch that binds to a boolean variable. When toggled, updates the variable to true/false.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    defaultValue: {
      type: "radio",
      label: "Default Value",
      options: [
        { label: "Off", value: !1 },
        { label: "On", value: !0 }
      ]
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "Toggle",
    defaultValue: !1,
    displayStyle: "card"
  },
  render: Ve
}, R = 120, F = R / 2, T = 45, ee = 8, Ue = 6, q = 135, ne = 405, ze = ne - q, We = 200;
function Ge(e) {
  return e * Math.PI / 180;
}
function G(e) {
  const l = Ge(e);
  return {
    x: F + T * Math.cos(l),
    y: F + T * Math.sin(l)
  };
}
function ae(e, l) {
  const r = G(e), a = G(l), n = l - e > 180 ? 1 : 0;
  return `M ${r.x} ${r.y} A ${T} ${T} 0 ${n} 1 ${a.x} ${a.y}`;
}
function Oe(e, l, r) {
  return Math.round((e - r) / l) * l + r;
}
const He = ({
  api: e,
  variableName: l = "",
  label: r = "",
  minValue: a = 0,
  maxValue: t = 100,
  stepSize: n = 1,
  showValue: u = !0,
  displayStyle: c = "card",
  puck: d
}) => {
  if (!e)
    throw new Error("Dial: api is required");
  const s = e.isReviewMode, v = $(!1), p = $(0), m = $(0), [o, f] = C(
    e,
    l || void 0,
    a,
    a,
    t
  ), y = t === a ? 0 : (o - a) / (t - a), x = q + y * ze, S = ae(q, ne), I = y > 0 ? ae(q, x) : "", j = G(x), L = g(
    (b) => {
      s || (v.current = !0, p.current = b.clientX, m.current = o, b.target.setPointerCapture(b.pointerId));
    },
    [s, o]
  ), V = g(
    (b) => {
      if (!v.current) return;
      const w = b.clientX - p.current, A = t - a, se = m.current + w / We * A, oe = Oe(se, n, a), ce = Math.min(Math.max(oe, a), t);
      f(ce);
    },
    [a, t, n, f]
  ), B = g(() => {
    v.current = !1;
  }, []), h = g(
    (b) => {
      if (s) return;
      let w = o;
      const A = n * 10;
      b.key === "ArrowUp" || b.key === "ArrowRight" ? (b.preventDefault(), w = Math.min(o + n, t)) : b.key === "ArrowDown" || b.key === "ArrowLeft" ? (b.preventDefault(), w = Math.max(o - n, a)) : b.key === "PageUp" ? (b.preventDefault(), w = Math.min(o + A, t)) : b.key === "PageDown" ? (b.preventDefault(), w = Math.max(o - A, a)) : b.key === "Home" ? (b.preventDefault(), w = a) : b.key === "End" && (b.preventDefault(), w = t), w !== o && f(w);
    },
    [s, o, n, a, t, f]
  );
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-dial tw-var-dial--${c}`,
      ref: d?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-dial__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-dial__label", children: r }),
        /* @__PURE__ */ i.jsx("div", { className: "tw-var-dial__svg-wrapper", children: /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: `tw-var-dial__svg ${s ? "tw-var-dial__svg--disabled" : ""}`,
            viewBox: `0 0 ${R} ${R}`,
            width: R,
            height: R,
            role: "slider",
            "aria-valuemin": a,
            "aria-valuemax": t,
            "aria-valuenow": o,
            "aria-valuetext": `${Number.isInteger(o) ? o : o.toFixed(1)} of ${t}`,
            "aria-label": r || "Dial control",
            tabIndex: s ? -1 : 0,
            onPointerDown: L,
            onPointerMove: V,
            onPointerUp: B,
            onKeyDown: h,
            children: [
              /* @__PURE__ */ i.jsx(
                "path",
                {
                  d: S,
                  className: "tw-var-dial__track",
                  strokeWidth: ee
                }
              ),
              I && /* @__PURE__ */ i.jsx(
                "path",
                {
                  d: I,
                  className: "tw-var-dial__fill",
                  strokeWidth: ee
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  cx: j.x,
                  cy: j.y,
                  r: Ue,
                  className: "tw-var-dial__indicator"
                }
              ),
              u && /* @__PURE__ */ i.jsx("text", { x: F, y: F, className: "tw-var-dial__value", children: Number.isInteger(o) ? o : o.toFixed(1) })
            ]
          }
        ) }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-dial__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: a }),
          /* @__PURE__ */ i.jsx("span", { children: t })
        ] })
      ] })
    }
  );
}, Ke = {
  usagePrompt: "A dial control that binds to a numeric variable. Drag left/right or use arrow keys to select a value between min and max.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    minValue: {
      type: "number",
      label: "Minimum Value",
      min: -1e6
    },
    maxValue: {
      type: "number",
      label: "Maximum Value",
      min: -1e6
    },
    stepSize: {
      type: "number",
      label: "Step Size",
      min: 0.01
    },
    showValue: {
      type: "radio",
      label: "Show Value",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "",
    minValue: 0,
    maxValue: 100,
    stepSize: 1,
    showValue: !0,
    displayStyle: "card"
  },
  render: He
}, Ye = (e) => !e.variableName && (e.type === "slider" || e.value !== void 0 || e.readonly !== void 0 || typeof e.minValue == "string" || typeof e.maxValue == "string" || typeof e.stepSize == "string"), Je = ({
  api: e,
  value: l = "1",
  minValue: r = "0",
  maxValue: a = "100",
  stepSize: t = "1",
  readonly: n = !1,
  puck: u
}) => {
  const [c, d, s, v] = e.hooks.useNumberExpressions(
    [l, String(r), String(a), String(t)],
    [1, 0, 100, 1]
  ), [p, m] = P(c), [o] = P(
    () => e.addVariable("sliderValue", c, "number")
  );
  le(() => {
    m(c), e.updateVariables({ [o]: c });
  }, [c, o]);
  const f = s === d ? 0 : (p - d) / (s - d) * 100, y = n || e.isReviewMode;
  return /* @__PURE__ */ i.jsx("div", { className: "tw-var-slider tw-var-slider--minimal", ref: u?.dragRef, children: /* @__PURE__ */ i.jsx("div", { className: "tw-var-slider__inner", children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__wrapper", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "range",
        className: "tw-var-slider__input",
        value: p,
        min: d,
        max: s,
        step: v,
        disabled: y,
        onChange: (x) => {
          if (y) return;
          const S = parseFloat(x.target.value);
          m(S), e.updateVariables({ [o]: S });
        },
        "aria-label": "Slider",
        style: {
          background: `linear-gradient(to right, hsl(var(--tw-var-primary)) 0%, hsl(var(--tw-var-primary)) ${f}%, hsl(var(--tw-var-muted)) ${f}%, hsl(var(--tw-var-muted)) 100%)`
        }
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__value", children: p })
  ] }) }) });
}, Xe = (e) => Ye(e) ? /* @__PURE__ */ i.jsx(
  Je,
  {
    ...e
  }
) : /* @__PURE__ */ i.jsx(Ze, { ...e }), Ze = ({
  api: e,
  variableName: l = "",
  label: r = "",
  minValue: a = 0,
  maxValue: t = 100,
  stepSize: n = 1,
  showValue: u = !0,
  displayStyle: c = "card",
  puck: d
}) => {
  if (!e)
    throw new Error("Slider: api is required");
  const s = e.isReviewMode, [v, p] = C(
    e,
    l || void 0,
    a,
    a,
    t
  ), m = E(() => t === a ? 0 : (v - a) / (t - a) * 100, [v, a, t]), o = `linear-gradient(to right, hsl(var(--tw-var-primary)) 0%, hsl(var(--tw-var-primary)) ${m}%, hsl(var(--tw-var-muted)) ${m}%, hsl(var(--tw-var-muted)) 100%)`, f = (y) => {
    s || p(parseFloat(y.target.value));
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-slider tw-var-slider--${c}`,
      ref: d?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__label", children: r }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__wrapper", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "range",
              className: "tw-var-slider__input",
              value: v,
              min: a,
              max: t,
              step: n,
              disabled: s,
              onChange: f,
              "aria-label": r || "Slider",
              style: { background: o }
            }
          ),
          u && /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__value", children: Number.isInteger(v) ? v : v.toFixed(1) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: a }),
          /* @__PURE__ */ i.jsx("span", { children: t })
        ] })
      ] })
    }
  );
}, Qe = {
  usagePrompt: "An interactive slider that binds to a numeric variable. Drag the thumb to select a value between min and max.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    minValue: {
      type: "number",
      label: "Minimum Value",
      min: -1e6
    },
    maxValue: {
      type: "number",
      label: "Maximum Value",
      min: -1e6
    },
    stepSize: {
      type: "number",
      label: "Step Size",
      min: 0.01
    },
    showValue: {
      type: "radio",
      label: "Show Value",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "",
    minValue: 0,
    maxValue: 100,
    stepSize: 1,
    showValue: !0,
    displayStyle: "card"
  },
  render: Xe
};
function ea(e) {
  return e < 33 ? "tw-var-progress__fill--danger" : e < 66 ? "tw-var-progress__fill--warning" : "tw-var-progress__fill--success";
}
const aa = ({
  api: e,
  variableName: l = "",
  label: r = "",
  minValue: a = 0,
  maxValue: t = 100,
  showValue: n = !0,
  showRange: u = !0,
  barSize: c = "default",
  colorMode: d = "primary",
  displayStyle: s = "card",
  puck: v
}) => {
  if (!e)
    throw new Error("ProgressBar: api is required");
  const [p] = C(
    e,
    l || void 0,
    a,
    a,
    t
  ), m = E(() => t === a ? 0 : Math.min(
    100,
    Math.max(0, (p - a) / (t - a) * 100)
  ), [p, a, t]), o = c === "thin" ? "tw-var-progress__track--thin" : c === "thick" ? "tw-var-progress__track--thick" : "", f = d === "auto" ? ea(m) : "", y = Number.isInteger(p) ? p : p.toFixed(1);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-progress tw-var-progress--${s}`,
      ref: v?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__inner", children: [
        (r || n) && /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__header", children: [
          r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-progress__label", children: r }),
          n && /* @__PURE__ */ i.jsx("span", { className: "tw-var-progress__value", children: y })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "tw-var-progress__bar-wrapper", children: /* @__PURE__ */ i.jsx("div", { className: `tw-var-progress__track ${o}`, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `tw-var-progress__fill ${f}`,
            style: { width: `${m}%` },
            role: "progressbar",
            "aria-valuenow": p,
            "aria-valuemin": a,
            "aria-valuemax": t,
            "aria-valuetext": `${Math.round(m)}%`,
            "aria-label": r || "Progress"
          }
        ) }) }),
        u && /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: a }),
          /* @__PURE__ */ i.jsx("span", { children: t })
        ] })
      ] })
    }
  );
}, ra = {
  usagePrompt: "A read-only progress bar/meter that visualizes a numeric variable within a range. The bar fills proportionally to the variable's value between min and max.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    minValue: {
      type: "number",
      label: "Minimum Value",
      min: -1e6
    },
    maxValue: {
      type: "number",
      label: "Maximum Value",
      min: -1e6
    },
    showValue: {
      type: "radio",
      label: "Show Value",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    showRange: {
      type: "radio",
      label: "Show Range Labels",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    barSize: {
      type: "radio",
      label: "Bar Size",
      options: [
        { label: "Thin", value: "thin" },
        { label: "Default", value: "default" },
        { label: "Thick", value: "thick" }
      ]
    },
    colorMode: {
      type: "radio",
      label: "Color Mode",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Auto (red → yellow → green)", value: "auto" }
      ]
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "Progress",
    minValue: 0,
    maxValue: 100,
    showValue: !0,
    showRange: !0,
    barSize: "default",
    colorMode: "primary",
    displayStyle: "card"
  },
  render: aa
}, ta = ({
  api: e,
  variableName: l = "",
  label: r = "",
  minValue: a = 0,
  maxValue: t = 100,
  stepSize: n = 1,
  displayStyle: u = "card",
  puck: c
}) => {
  if (!e)
    throw new Error("Stepper: api is required");
  const d = e.isReviewMode, [s, v] = C(
    e,
    l || void 0,
    a,
    a,
    t
  ), [p, m] = P(!1), [o, f] = P(""), y = s - n >= a, x = s + n <= t, S = g(() => {
    !d && y && v(s - n);
  }, [d, y, s, n, v]), I = g(() => {
    !d && x && v(s + n);
  }, [d, x, s, n, v]), j = g(() => {
    m(!1);
    const h = parseFloat(o);
    if (!isNaN(h)) {
      const b = Math.min(Math.max(h, a), t);
      v(b);
    }
  }, [o, a, t, v]), L = g(() => {
    d || (f(Number.isInteger(s) ? String(s) : s.toFixed(1)), m(!0));
  }, [d, s]), V = g(
    (h) => {
      h.key === "Enter" ? j() : h.key === "Escape" && m(!1);
    },
    [j]
  ), B = Number.isInteger(s) ? s : s.toFixed(1);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-stepper tw-var-stepper--${u}`,
      ref: c?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-stepper__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-stepper__label", children: r }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-stepper__controls", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tw-var-stepper__btn tw-var-stepper__btn--minus",
              onClick: S,
              disabled: d || !y,
              "aria-label": "Decrease value",
              children: "−"
            }
          ),
          p ? /* @__PURE__ */ i.jsx(
            "input",
            {
              className: "tw-var-stepper__input",
              type: "number",
              value: o,
              min: a,
              max: t,
              step: n,
              onChange: (h) => f(h.target.value),
              onBlur: j,
              onKeyDown: V,
              autoFocus: !0,
              "aria-label": "Enter value"
            }
          ) : /* @__PURE__ */ i.jsx(
            "span",
            {
              className: "tw-var-stepper__value",
              "aria-live": "polite",
              "aria-roledescription": "editable value",
              onClick: L,
              role: "spinbutton",
              "aria-valuemin": a,
              "aria-valuemax": t,
              "aria-valuenow": s,
              "aria-label": r ? `${r} value` : "Counter value",
              tabIndex: d ? -1 : 0,
              onKeyDown: (h) => {
                h.key === "Enter" || h.key === " " ? (h.preventDefault(), L()) : h.key === "ArrowUp" ? (h.preventDefault(), !d && x && v(s + n)) : h.key === "ArrowDown" ? (h.preventDefault(), !d && y && v(s - n)) : h.key === "Home" ? (h.preventDefault(), d || v(a)) : h.key === "End" && (h.preventDefault(), d || v(t));
              },
              children: B
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tw-var-stepper__btn tw-var-stepper__btn--plus",
              onClick: I,
              disabled: d || !x,
              "aria-label": "Increase value",
              children: "+"
            }
          )
        ] })
      ] })
    }
  );
}, la = {
  usagePrompt: "A +/- counter control that binds to a numeric variable. Learners increment or decrement the value step by step.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    minValue: {
      type: "number",
      label: "Minimum Value",
      min: -1e6
    },
    maxValue: {
      type: "number",
      label: "Maximum Value",
      min: -1e6
    },
    stepSize: {
      type: "number",
      label: "Step Size",
      min: 0.01
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "Counter",
    minValue: 0,
    maxValue: 100,
    stepSize: 1,
    displayStyle: "card"
  },
  render: ta
}, ia = ({
  api: e,
  variableName: l = "",
  label: r = "",
  maxStars: a = 5,
  displayStyle: t = "card",
  puck: n
}) => {
  if (!e)
    throw new Error("StarRating: api is required");
  const u = e.isReviewMode, c = Math.max(1, Math.min(a, 10)), [d, s] = C(
    e,
    l || void 0,
    0,
    0,
    c
  ), v = g(
    (o) => {
      if (u) return;
      s(d === o ? 0 : o);
    },
    [u, d, s]
  ), p = g(
    (o) => {
      u || (o.key === "ArrowRight" || o.key === "ArrowUp" ? (o.preventDefault(), s(Math.min(d + 1, c))) : o.key === "ArrowLeft" || o.key === "ArrowDown" ? (o.preventDefault(), s(Math.max(d - 1, 0))) : o.key === "Home" ? (o.preventDefault(), s(0)) : o.key === "End" && (o.preventDefault(), s(c)));
    },
    [u, d, c, s]
  ), m = Array.from({ length: c }, (o, f) => f + 1);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-star-rating tw-var-star-rating--${t}`,
      ref: n?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-star-rating__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-star-rating__label", children: r }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "tw-var-star-rating__stars",
            role: "slider",
            "aria-valuemin": 0,
            "aria-valuemax": c,
            "aria-valuenow": d,
            "aria-valuetext": d === 0 ? "No rating" : `${d} of ${c} star${d !== 1 ? "s" : ""}`,
            "aria-label": r || "Star rating",
            "aria-disabled": u,
            tabIndex: u ? -1 : 0,
            onKeyDown: p,
            children: m.map((o) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `tw-var-star-rating__star ${o <= d ? "tw-var-star-rating__star--filled" : ""}`,
                onClick: () => v(o),
                disabled: u,
                "aria-label": `${o} star${o > 1 ? "s" : ""}`,
                tabIndex: -1,
                children: /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 24 24", className: "tw-var-star-rating__icon", children: /* @__PURE__ */ i.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) })
              },
              o
            ))
          }
        )
      ] })
    }
  );
}, na = {
  usagePrompt: "A star rating input that binds to a numeric variable. Click stars to rate from 1 to max. Click again to deselect.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    maxStars: {
      type: "number",
      label: "Number of Stars",
      min: 1,
      max: 10
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "",
    maxStars: 5,
    displayStyle: "card"
  },
  render: ia
}, sa = ({
  api: e,
  variableName: l = "",
  label: r = "",
  prefix: a = "",
  suffix: t = "",
  decimals: n = 0,
  size: u = "lg",
  displayStyle: c = "card",
  puck: d
}) => {
  if (!e)
    throw new Error("NumericDisplay: api is required");
  const [s] = C(e, l || void 0, 0), v = E(() => n > 0 ? s.toFixed(n) : Math.round(s).toString(), [s, n]);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-numeric tw-var-numeric--${c}`,
      ref: d?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-numeric__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__label", children: r }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `tw-var-numeric__value tw-var-numeric__value--${u}`,
            role: "status",
            "aria-label": `${r || "Value"}: ${a}${v}${t}`,
            children: [
              a && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__affix", children: a }),
              /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__number", children: v }),
              t && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__affix", children: t })
            ]
          }
        )
      ] })
    }
  );
}, oa = {
  usagePrompt: "A read-only large number display that shows a numeric variable with optional prefix/suffix formatting (e.g., '$100', '75%').",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    label: {
      type: "text",
      label: "Label"
    },
    prefix: {
      type: "text",
      label: "Prefix (e.g. $)"
    },
    suffix: {
      type: "text",
      label: "Suffix (e.g. %)"
    },
    decimals: {
      type: "number",
      label: "Decimal Places",
      min: 0,
      max: 6
    },
    size: {
      type: "radio",
      label: "Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" }
      ]
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    label: "",
    prefix: "",
    suffix: "",
    decimals: 0,
    size: "lg",
    displayStyle: "card"
  },
  render: sa
};
function ca(e, l, r) {
  switch (l) {
    case "lt":
      return e < r;
    case "lte":
      return e <= r;
    case "eq":
      return e === r;
    case "gte":
      return e >= r;
    case "gt":
      return e > r;
    case "neq":
      return e !== r;
  }
}
const da = ({
  api: e,
  variableName: l = "",
  defaultLabel: r = "Status",
  defaultVariant: a = "neutral",
  rules: t = [],
  displayStyle: n = "card",
  puck: u
}) => {
  if (!e)
    throw new Error("StatusBadge: api is required");
  const [c] = O(
    e,
    l || void 0,
    0
  ), d = typeof c == "number" ? c : Number(c) || 0, { activeLabel: s, activeVariant: v } = E(() => {
    for (const p of t)
      if (ca(d, p.operator, p.threshold))
        return { activeLabel: p.label, activeVariant: p.variant };
    return { activeLabel: r, activeVariant: a };
  }, [d, t, r, a]);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-badge tw-var-badge--${n}`,
      ref: u?.dragRef,
      children: /* @__PURE__ */ i.jsx("div", { className: "tw-var-badge__inner", children: /* @__PURE__ */ i.jsx(
        "span",
        {
          className: `tw-var-badge__pill tw-var-badge__pill--${v}`,
          role: "status",
          "aria-live": "polite",
          children: s
        }
      ) })
    }
  );
}, ua = {
  usagePrompt: "A read-only status indicator that changes its label and color based on a variable's value. Define rules like 'if value > 50 show Passing in green'.",
  fields: {
    variableName: {
      type: "variable",
      label: "Variable"
    },
    defaultLabel: {
      type: "text",
      label: "Default Label"
    },
    defaultVariant: {
      type: "radio",
      label: "Default Color",
      options: [
        { label: "Neutral", value: "neutral" },
        { label: "Primary", value: "primary" },
        { label: "Success", value: "success" },
        { label: "Warning", value: "warning" },
        { label: "Danger", value: "danger" }
      ]
    },
    rules: {
      type: "array",
      label: "Condition Rules (first match wins)",
      arrayFields: {
        operator: {
          type: "select",
          label: "Operator",
          options: [
            { label: "Less than (<)", value: "lt" },
            { label: "Less or equal (<=)", value: "lte" },
            { label: "Equals (=)", value: "eq" },
            { label: "Greater or equal (>=)", value: "gte" },
            { label: "Greater than (>)", value: "gt" },
            { label: "Not equal (!=)", value: "neq" }
          ]
        },
        threshold: {
          type: "number",
          label: "Threshold"
        },
        label: {
          type: "text",
          label: "Label to show"
        },
        variant: {
          type: "select",
          label: "Color",
          options: [
            { label: "Neutral", value: "neutral" },
            { label: "Primary", value: "primary" },
            { label: "Success", value: "success" },
            { label: "Warning", value: "warning" },
            { label: "Danger", value: "danger" }
          ]
        }
      },
      defaultItemProps: {
        id: "",
        operator: "gte",
        threshold: 50,
        label: "Passing",
        variant: "success"
      }
    },
    displayStyle: {
      type: "radio",
      label: "Display Style",
      options: [
        { label: "Card", value: "card" },
        { label: "Inline", value: "inline" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
        { label: "Filled", value: "filled" }
      ]
    }
  },
  defaultProps: {
    variableName: "",
    defaultLabel: "Status",
    defaultVariant: "neutral",
    rules: [],
    displayStyle: "card"
  },
  render: da
};
function re(e, l, r) {
  switch (l) {
    case "round":
      return Math.round(e);
    case "floor":
      return Math.floor(e);
    case "ceil":
      return Math.ceil(e);
    case "fixed": {
      const a = Math.pow(10, r);
      return Math.round(e * a) / a;
    }
    default:
      return e;
  }
}
const va = ({
  api: e,
  formula: l = "",
  outputVariable: r = "",
  roundMode: a = "none",
  decimals: t = 2,
  puck: n
}) => {
  if (!e)
    throw new Error("LogicFormula: api is required");
  const [u] = e.hooks.useNumberExpressions([l], [0]), c = E(
    () => re(u, a, t),
    [u, a, t]
  ), d = $(!1), s = $(null);
  if (le(() => {
    if (e.isEditing || !l || !r) return;
    const v = () => {
      if (d.current) return;
      const m = e.resolveNumber(l);
      if (m === null) return;
      const o = re(m, a, t);
      s.current !== o && (s.current = o, d.current = !0, e.updateVariables({ [r]: o }), d.current = !1);
    };
    return v(), e.onVariableChange(() => {
      v();
    });
  }, [e, l, r, a, t]), e.isEditing) {
    const v = l && l.trim().length > 0, p = r && r.trim().length > 0;
    return /* @__PURE__ */ i.jsxs("div", { className: "tw-var-logic-formula__editor", ref: n?.dragRef, children: [
      /* @__PURE__ */ i.jsx("div", { className: "tw-var-logic-formula__editor-icon", children: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "f(x)" }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "tw-var-logic-formula__editor-body", children: [
        /* @__PURE__ */ i.jsx("span", { className: "tw-var-logic-formula__editor-title", children: "Logic Formula" }),
        /* @__PURE__ */ i.jsx("span", { className: "tw-var-logic-formula__editor-desc", children: v && p ? `${r} = ${l}` : v ? `Formula: ${l} (no output variable)` : "No formula configured" }),
        v && /* @__PURE__ */ i.jsxs("span", { className: "tw-var-logic-formula__editor-preview", children: [
          "Current: ",
          c
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ i.jsx("div", { style: { display: "none" } });
}, pa = {
  usagePrompt: "A no-UI logic widget that computes a formula from input variables and writes the result to an output variable. Use for derived/computed values like 'totalScore = quiz1 + quiz2' or 'percentage = correct / total * 100'.",
  fields: {
    formula: {
      type: "numericExpression",
      label: "Formula"
    },
    outputVariable: {
      type: "variable",
      label: "Output Variable"
    },
    roundMode: {
      type: "radio",
      label: "Rounding",
      options: [
        { label: "None", value: "none" },
        { label: "Round", value: "round" },
        { label: "Floor", value: "floor" },
        { label: "Ceil", value: "ceil" },
        { label: "Fixed Decimals", value: "fixed" }
      ]
    },
    decimals: {
      type: "number",
      label: "Decimal Places",
      min: 0,
      max: 10
    }
  },
  resolveFields: (e, { fields: l }) => {
    if (e.props.roundMode !== "fixed") {
      const { decimals: a, ...t } = l;
      return t;
    }
    return l;
  },
  defaultProps: {
    formula: "",
    outputVariable: "",
    roundMode: "none",
    decimals: 2
  },
  render: va
};
N({
  name: "Switch",
  description: "Toggle switch that binds to a boolean variable — on/off control for lessons",
  aiPrompt: "Requires a boolean variable. Toggles the variable between true and false on interaction.",
  icon: Pe,
  config: k(Be),
  category: "Interactive Controls"
});
N({
  name: "Dial",
  description: "Rotary dial control for selecting a numeric value within a range",
  aiPrompt: "Requires a numeric variable. Drag the knob to set the value between min and max. Shows value on the dial optionally.",
  icon: _e,
  config: k(Ke),
  category: "Interactive Controls"
});
N({
  name: "Slider",
  description: "Interactive slider for selecting a numeric value within a defined range",
  aiPrompt: "Requires a numeric variable. Drag the thumb to set the value between min and max.",
  icon: je,
  config: k(Qe),
  category: "Interactive Controls"
});
N({
  name: "ProgressBar",
  description: "Read-only meter that visualizes a numeric variable as a progress bar",
  aiPrompt: "Requires a numeric variable. Displays the variable value as a filled bar between min and max. Read-only — does not modify the variable.",
  icon: ye,
  config: k(ra),
  category: "Interactive Controls"
});
N({
  name: "Stepper",
  description: "Plus/minus counter for incrementing or decrementing a numeric variable step by step",
  aiPrompt: "Requires a numeric variable. Learners click +/- buttons to change the value within min/max bounds.",
  icon: we,
  config: k(la),
  category: "Interactive Controls"
});
N({
  name: "StarRating",
  description: "Star rating input that sets a numeric variable from 1 to max stars",
  aiPrompt: "Requires a numeric variable. Click stars to rate. Click the same star again to deselect.",
  icon: Re,
  config: k(na),
  category: "Interactive Controls"
});
N({
  name: "NumericDisplay",
  description: "Large formatted number readout with optional prefix and suffix",
  aiPrompt: "Requires a numeric variable. Shows the value in large text with optional $ or % formatting. Read-only.",
  icon: ke,
  config: k(oa),
  category: "Interactive Controls"
});
N({
  name: "StatusBadge",
  description: "Conditional badge that changes label and color based on variable value rules",
  aiPrompt: "Requires a numeric variable. Define rules like 'if >= 50 show Passing in green'. First matching rule wins. Read-only.",
  icon: he,
  config: k(ua),
  category: "Interactive Controls"
});
N({
  name: "LogicFormula",
  description: "Computes a math formula from variables and writes the result to an output variable",
  aiPrompt: "No-UI logic widget. Set a formula like 'quiz1 + quiz2' or 'correct / total * 100' and an output variable. The output variable updates reactively whenever input variables change.",
  icon: De,
  config: pa,
  category: "Interactive Controls"
});
console.info("🎛️ Variable widgets loaded successfully!");
//# sourceMappingURL=teacharium-variable-widgets.es.js.map
