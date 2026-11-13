import { forwardRef as he, createElement as ee, useCallback as w, useState as A, useRef as I, useEffect as ye, useMemo as V } from "react";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ke = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, a) => a ? a.toUpperCase() : r.toLowerCase()
), ne = (e) => {
  const t = ke(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ge = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim(), je = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Se = {
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
const De = he(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: l = "",
    children: n,
    iconNode: c,
    ...s
  }, o) => ee(
    "svg",
    {
      ref: o,
      ...Se,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: ge("lucide", l),
      ...!n && !je(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...c.map(([u, m]) => ee(u, m)),
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
const j = (e, t) => {
  const r = he(
    ({ className: a, ...l }, n) => ee(De, {
      ref: n,
      iconNode: t,
      className: ge(
        `lucide-${Ne(ne(e))}`,
        `lucide-${e}`,
        a
      ),
      ...l
    })
  );
  return r.displayName = ne(e), r;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Me = j("badge-check", Ce);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], Re = j("chart-column", $e);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Ee = j("diff", Pe);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
], Fe = j("disc-3", Le);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Ae = j("hash", Ie);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], Ve = j("sliders-horizontal", qe);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
], Be = j("square-function", Te);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], ze = j("star", Ue);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
], Oe = j("toggle-left", We), S = (e) => {
  window.TeachariumComponents = window.TeachariumComponents || {}, window.TeachariumComponents[e.name] = e;
};
var ie = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function Ge() {
  if (se) return E;
  se = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, l, n) {
    var c = null;
    if (n !== void 0 && (c = "" + n), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      n = {};
      for (var s in l)
        s !== "key" && (n[s] = l[s]);
    } else n = l;
    return l = n.ref, {
      $$typeof: e,
      type: a,
      key: c,
      ref: l !== void 0 ? l : null,
      props: n
    };
  }
  return E.Fragment = t, E.jsx = r, E.jsxs = r, E;
}
var oe;
function Ye() {
  return oe || (oe = 1, ie.exports = Ge()), ie.exports;
}
var ae = Ye();
const He = {
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
}, Je = ({ margin: e, children: t }) => {
  const r = {};
  return e && (r.padding = `${e}px`), /* @__PURE__ */ ae.jsx("div", { style: r, children: t });
}, D = (e) => {
  const t = e.render;
  return {
    ...e,
    render: (r) => /* @__PURE__ */ ae.jsx(Je, { ...r, children: /* @__PURE__ */ ae.jsx(t, { ...r }) }),
    fields: {
      ...e.fields,
      ...He
    }
  };
};
function G(e) {
  if (!Number.isFinite(e)) return 0;
  const [t, r] = e.toExponential().split("e"), a = (t.split(".")[1] ?? "").length;
  return Math.max(0, a - Number(r));
}
function Y(e, t, r = 0) {
  if (!(t > 0) || !Number.isFinite(e)) return e;
  const a = Math.round((e - r) / t), l = Math.max(G(t), G(r));
  return Number((r + a * t).toFixed(Math.min(l, 100)));
}
const te = 20, ce = (e, t) => {
  const [r, a] = e.toExponential().split("e");
  return +`${r}e${Number(a) + t}`;
};
function q(e, t) {
  if (!Number.isFinite(e)) return e;
  const r = Math.max(0, Math.min(te, Math.trunc(t))), a = e < 0 ? -1 : 1, l = Math.round(ce(Math.abs(e), r)), n = a * ce(l, -r);
  return Object.is(n, -0) ? 0 : n;
}
function M(e, t = 1) {
  return !(t > 0) || t === 1 ? e : q(e / t, 10);
}
function Ke(e, t = 1) {
  return !(t > 0) || t === 1 ? e : q(e * t, 10);
}
const Xe = /[#0][#0,]*(?:\.[#0]*)?|\.[#0]+/, ue = /* @__PURE__ */ new Map();
function Ze(e) {
  const t = ue.get(e);
  if (t !== void 0) return t;
  const r = Xe.exec(e);
  let a = null;
  if (r) {
    const [l, n = ""] = r[0].split("."), c = n.match(/^0*/)?.[0].length ?? 0;
    a = {
      prefix: e.slice(0, r.index),
      suffix: e.slice(r.index + r[0].length),
      grouping: l.includes(","),
      minIntegerDigits: (l.match(/0/g) ?? []).length,
      minDecimals: c,
      maxDecimals: Math.min(te, n.length)
    };
  }
  return ue.set(e, a), a;
}
function we(e, t, r = 1) {
  if (!Number.isFinite(e)) return String(e);
  const a = M(e, r), l = t ? Ze(t) : null;
  if (!l) return String(q(a, 10));
  const n = q(a, l.maxDecimals), [c, s = ""] = Math.abs(n).toFixed(l.maxDecimals).split(".");
  let o = s;
  for (; o.length > l.minDecimals && o.endsWith("0"); )
    o = o.slice(0, -1);
  let u = c;
  u === "0" && l.minIntegerDigits === 0 && o && (u = ""), u = u.padStart(l.minIntegerDigits, "0"), l.grouping && (u = u.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  const m = n < 0 ? "-" : "", d = o ? `${u}.${o}` : u;
  return `${m}${l.prefix}${d}${l.suffix}`;
}
function Qe(e, t = 0, r = 1) {
  const a = Math.max(
    G(M(e, r)),
    G(M(t, r))
  );
  return a > 0 ? `0.${"#".repeat(Math.min(a, te))}` : "0";
}
var Q = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function ea() {
  if (de) return L;
  de = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, l, n) {
    var c = null;
    if (n !== void 0 && (c = "" + n), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      n = {};
      for (var s in l)
        s !== "key" && (n[s] = l[s]);
    } else n = l;
    return l = n.ref, {
      $$typeof: e,
      type: a,
      key: c,
      ref: l !== void 0 ? l : null,
      props: n
    };
  }
  return L.Fragment = t, L.jsx = r, L.jsxs = r, L;
}
var ve;
function aa() {
  return ve || (ve = 1, Q.exports = ea()), Q.exports;
}
var i = aa();
function le(e, t, r) {
  const a = !!t, [l] = e.hooks.useVariableValues([
    a ? t : void 0
  ]), [n, c] = A(r), s = w(
    (u) => {
      a ? e.updateVariables({ [t]: u }) : c(u);
    },
    [a, t, e]
  );
  return [a ? l ?? r : n, s];
}
function P(e, t, r, a, l, n) {
  const [c, s] = le(e, t, r), o = typeof c == "number" ? c : Number(c) || r, u = me(o, a, l), m = w(
    (d) => {
      const p = n ? Y(d, n, a ?? 0) : d;
      s(me(p, a, l));
    },
    [s, a, l, n]
  );
  return [u, m];
}
function ra(e, t, r) {
  const [a, l] = le(e, t, r), n = typeof a == "boolean" ? a : !!a, c = w(
    (s) => {
      l(s);
    },
    [l]
  );
  return [n, c];
}
function me(e, t, r) {
  let a = e;
  return t !== void 0 && (a = Math.max(a, t)), r !== void 0 && (a = Math.min(a, r)), a;
}
const ta = ({
  api: e,
  variableName: t = "",
  label: r = "",
  defaultValue: a = !1,
  displayStyle: l = "card",
  puck: n
}) => {
  if (!e)
    throw new Error("Switch: api is required");
  const c = e.isReviewMode, [s, o] = ra(
    e,
    t || void 0,
    a
  ), u = () => {
    c || o(!s);
  }, m = (d) => {
    (d.key === " " || d.key === "Enter") && (d.preventDefault(), u());
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-switch tw-var-switch--${l}`,
      ref: n?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-switch__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-switch__label", children: r }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "tw-var-switch__control",
            role: "switch",
            "aria-checked": s,
            "aria-label": r || "Toggle switch",
            "aria-disabled": c,
            tabIndex: c ? -1 : 0,
            onClick: u,
            onKeyDown: m,
            children: /* @__PURE__ */ i.jsx(
              "div",
              {
                className: `tw-var-switch__track ${s ? "tw-var-switch__track--on" : ""}`,
                children: /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `tw-var-switch__thumb ${s ? "tw-var-switch__thumb--on" : ""}`
                  }
                )
              }
            )
          }
        )
      ] })
    }
  );
}, la = {
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
  render: ta
}, T = {
  numberFormat: {
    type: "text",
    label: "Number Format (e.g. 0.00, $#,##0.00, 0.# kg)"
  },
  displayScale: {
    type: "number",
    label: "Display Scale (shown value = stored ÷ scale, e.g. 100 for cents)",
    min: 1
  }
};
function K(e, { numberFormat: t, displayScale: r = 1, step: a, origin: l = 0 }) {
  const n = t || (a ? Qe(a, l, r) : "0.##");
  return we(e, n, r);
}
const F = 120, H = F / 2, J = 45, pe = 8, na = 6, O = 135, xe = 405, ia = xe - O, sa = 200;
function oa(e) {
  return e * Math.PI / 180;
}
function re(e) {
  const t = oa(e);
  return {
    x: H + J * Math.cos(t),
    y: H + J * Math.sin(t)
  };
}
function be(e, t) {
  const r = re(e), a = re(t), n = t - e > 180 ? 1 : 0;
  return `M ${r.x} ${r.y} A ${J} ${J} 0 ${n} 1 ${a.x} ${a.y}`;
}
const ca = ({
  api: e,
  variableName: t = "",
  label: r = "",
  minValue: a = 0,
  maxValue: l = 100,
  stepSize: n = 1,
  showValue: c = !0,
  displayStyle: s = "card",
  numberFormat: o = "",
  displayScale: u = 1,
  puck: m
}) => {
  if (!e)
    throw new Error("Dial: api is required");
  const d = e.isReviewMode, p = I(!1), v = I(0), b = I(0), [h, x] = P(
    e,
    t || void 0,
    a,
    a,
    l,
    n
  ), g = (f) => K(f, {
    numberFormat: o,
    displayScale: u,
    step: n,
    origin: a
  }), _ = g(h), k = l === a ? 0 : (h - a) / (l - a), C = O + k * ia, X = be(O, xe), B = k > 0 ? be(O, C) : "", $ = re(C), U = w(
    (f) => {
      d || (p.current = !0, v.current = f.clientX, b.current = h, f.target.setPointerCapture(f.pointerId));
    },
    [d, h]
  ), Z = w(
    (f) => {
      if (!p.current) return;
      const N = f.clientX - v.current, W = l - a, R = b.current + N / sa * W;
      x(R);
    },
    [a, l, x]
  ), z = w(() => {
    p.current = !1;
  }, []), y = w(
    (f) => {
      if (d) return;
      let N = h;
      const W = n * 10, R = (_e) => Math.min(
        Math.max(Y(h + _e, n, a), a),
        l
      );
      f.key === "ArrowUp" || f.key === "ArrowRight" ? (f.preventDefault(), N = R(n)) : f.key === "ArrowDown" || f.key === "ArrowLeft" ? (f.preventDefault(), N = R(-n)) : f.key === "PageUp" ? (f.preventDefault(), N = R(W)) : f.key === "PageDown" ? (f.preventDefault(), N = R(-W)) : f.key === "Home" ? (f.preventDefault(), N = a) : f.key === "End" && (f.preventDefault(), N = l), N !== h && x(N);
    },
    [d, h, n, a, l, x]
  );
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-dial tw-var-dial--${s}`,
      ref: m?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-dial__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-dial__label", children: r }),
        /* @__PURE__ */ i.jsx("div", { className: "tw-var-dial__svg-wrapper", children: /* @__PURE__ */ i.jsxs(
          "svg",
          {
            className: `tw-var-dial__svg ${d ? "tw-var-dial__svg--disabled" : ""}`,
            viewBox: `0 0 ${F} ${F}`,
            width: F,
            height: F,
            role: "slider",
            "aria-valuemin": a,
            "aria-valuemax": l,
            "aria-valuenow": h,
            "aria-valuetext": `${_} of ${g(l)}`,
            "aria-label": r || "Dial control",
            tabIndex: d ? -1 : 0,
            onPointerDown: U,
            onPointerMove: Z,
            onPointerUp: z,
            onKeyDown: y,
            children: [
              /* @__PURE__ */ i.jsx(
                "path",
                {
                  d: X,
                  className: "tw-var-dial__track",
                  strokeWidth: pe
                }
              ),
              B && /* @__PURE__ */ i.jsx(
                "path",
                {
                  d: B,
                  className: "tw-var-dial__fill",
                  strokeWidth: pe
                }
              ),
              /* @__PURE__ */ i.jsx(
                "circle",
                {
                  cx: $.x,
                  cy: $.y,
                  r: na,
                  className: "tw-var-dial__indicator"
                }
              ),
              c && /* @__PURE__ */ i.jsx("text", { x: H, y: H, className: "tw-var-dial__value", children: _ })
            ]
          }
        ) }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-dial__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: g(a) }),
          /* @__PURE__ */ i.jsx("span", { children: g(l) })
        ] })
      ] })
    }
  );
}, ua = {
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
    ...T,
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
    numberFormat: "",
    displayScale: 1,
    displayStyle: "card"
  },
  render: ca
}, da = (e) => !e.variableName && (e.type === "slider" || e.value !== void 0 || e.readonly !== void 0 || typeof e.minValue == "string" || typeof e.maxValue == "string" || typeof e.stepSize == "string"), va = ({
  api: e,
  value: t = "1",
  minValue: r = "0",
  maxValue: a = "100",
  stepSize: l = "1",
  readonly: n = !1,
  puck: c
}) => {
  const [s, o, u, m] = e.hooks.useNumberExpressions(
    [t, String(r), String(a), String(l)],
    [1, 0, 100, 1]
  ), [d, p] = A(s), [v] = A(
    () => e.addVariable("sliderValue", s, "number")
  );
  ye(() => {
    p(s), e.updateVariables({ [v]: s });
  }, [s, v]);
  const b = u === o ? 0 : (d - o) / (u - o) * 100, h = n || e.isReviewMode;
  return /* @__PURE__ */ i.jsx("div", { className: "tw-var-slider tw-var-slider--minimal", ref: c?.dragRef, children: /* @__PURE__ */ i.jsx("div", { className: "tw-var-slider__inner", children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__wrapper", children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "range",
        className: "tw-var-slider__input",
        value: d,
        min: o,
        max: u,
        step: m,
        disabled: h,
        onChange: (x) => {
          if (h) return;
          const g = parseFloat(x.target.value);
          p(g), e.updateVariables({ [v]: g });
        },
        "aria-label": "Slider",
        style: {
          background: `linear-gradient(to right, hsl(var(--tw-var-primary)) 0%, hsl(var(--tw-var-primary)) ${b}%, hsl(var(--tw-var-muted)) ${b}%, hsl(var(--tw-var-muted)) 100%)`
        }
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__value", children: d })
  ] }) }) });
}, ma = (e) => da(e) ? /* @__PURE__ */ i.jsx(
  va,
  {
    ...e
  }
) : /* @__PURE__ */ i.jsx(pa, { ...e }), pa = ({
  api: e,
  variableName: t = "",
  label: r = "",
  minValue: a = 0,
  maxValue: l = 100,
  stepSize: n = 1,
  showValue: c = !0,
  displayStyle: s = "card",
  numberFormat: o = "",
  displayScale: u = 1,
  puck: m
}) => {
  if (!e)
    throw new Error("Slider: api is required");
  const d = e.isReviewMode, [p, v] = P(
    e,
    t || void 0,
    a,
    a,
    l,
    n
  ), b = (_) => K(_, {
    numberFormat: o,
    displayScale: u,
    step: n,
    origin: a
  }), h = V(() => l === a ? 0 : (p - a) / (l - a) * 100, [p, a, l]), x = `linear-gradient(to right, hsl(var(--tw-var-primary)) 0%, hsl(var(--tw-var-primary)) ${h}%, hsl(var(--tw-var-muted)) ${h}%, hsl(var(--tw-var-muted)) 100%)`, g = (_) => {
    d || v(parseFloat(_.target.value));
  };
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-slider tw-var-slider--${s}`,
      ref: m?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__label", children: r }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__wrapper", children: [
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "range",
              className: "tw-var-slider__input",
              value: p,
              min: a,
              max: l,
              step: n,
              disabled: d,
              onChange: g,
              "aria-label": r || "Slider",
              "aria-valuetext": b(p),
              style: { background: x }
            }
          ),
          c && /* @__PURE__ */ i.jsx("span", { className: "tw-var-slider__value", children: b(p) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-slider__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: b(a) }),
          /* @__PURE__ */ i.jsx("span", { children: b(l) })
        ] })
      ] })
    }
  );
}, ba = {
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
    ...T,
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
    numberFormat: "",
    displayScale: 1,
    displayStyle: "card"
  },
  render: ma
};
function fa(e) {
  return e < 33 ? "tw-var-progress__fill--danger" : e < 66 ? "tw-var-progress__fill--warning" : "tw-var-progress__fill--success";
}
const ha = ({
  api: e,
  variableName: t = "",
  label: r = "",
  minValue: a = 0,
  maxValue: l = 100,
  showValue: n = !0,
  showRange: c = !0,
  barSize: s = "default",
  colorMode: o = "primary",
  displayStyle: u = "card",
  numberFormat: m = "",
  displayScale: d = 1,
  puck: p
}) => {
  if (!e)
    throw new Error("ProgressBar: api is required");
  const [v] = P(
    e,
    t || void 0,
    a,
    a,
    l
  ), b = V(() => l === a ? 0 : Math.min(
    100,
    Math.max(0, (v - a) / (l - a) * 100)
  ), [v, a, l]), h = s === "thin" ? "tw-var-progress__track--thin" : s === "thick" ? "tw-var-progress__track--thick" : "", x = o === "auto" ? fa(b) : "", g = (k) => K(k, { numberFormat: m, displayScale: d }), _ = g(v);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-progress tw-var-progress--${u}`,
      ref: p?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__inner", children: [
        (r || n) && /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__header", children: [
          r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-progress__label", children: r }),
          n && /* @__PURE__ */ i.jsx("span", { className: "tw-var-progress__value", children: _ })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "tw-var-progress__bar-wrapper", children: /* @__PURE__ */ i.jsx("div", { className: `tw-var-progress__track ${h}`, children: /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `tw-var-progress__fill ${x}`,
            style: { width: `${b}%` },
            role: "progressbar",
            "aria-valuenow": v,
            "aria-valuemin": a,
            "aria-valuemax": l,
            "aria-valuetext": `${Math.round(b)}%`,
            "aria-label": r || "Progress"
          }
        ) }) }),
        c && /* @__PURE__ */ i.jsxs("div", { className: "tw-var-progress__range", children: [
          /* @__PURE__ */ i.jsx("span", { children: g(a) }),
          /* @__PURE__ */ i.jsx("span", { children: g(l) })
        ] })
      ] })
    }
  );
}, ya = {
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
    ...T,
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
    numberFormat: "",
    displayScale: 1,
    displayStyle: "card"
  },
  render: ha
}, ga = ({
  api: e,
  variableName: t = "",
  label: r = "",
  minValue: a = 0,
  maxValue: l = 100,
  stepSize: n = 1,
  displayStyle: c = "card",
  numberFormat: s = "",
  displayScale: o = 1,
  puck: u
}) => {
  if (!e)
    throw new Error("Stepper: api is required");
  const m = e.isReviewMode, [d, p] = P(
    e,
    t || void 0,
    a,
    a,
    l,
    n
  ), [v, b] = A(!1), [h, x] = A(""), g = Y(d - n, n, a), _ = Y(d + n, n, a), k = g >= a, C = _ <= l, X = w(() => {
    !m && k && p(g);
  }, [m, k, g, p]), B = w(() => {
    !m && C && p(_);
  }, [m, C, _, p]), $ = w(() => {
    b(!1);
    const y = parseFloat(h);
    isNaN(y) || p(Ke(y, o));
  }, [h, o, p]), U = w(() => {
    m || (x(String(M(d, o))), b(!0));
  }, [m, d, o]), Z = w(
    (y) => {
      y.key === "Enter" ? $() : y.key === "Escape" && b(!1);
    },
    [$]
  ), z = K(d, {
    numberFormat: s,
    displayScale: o,
    step: n,
    origin: a
  });
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-stepper tw-var-stepper--${c}`,
      ref: u?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-stepper__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-stepper__label", children: r }),
        /* @__PURE__ */ i.jsxs("div", { className: "tw-var-stepper__controls", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tw-var-stepper__btn tw-var-stepper__btn--minus",
              onClick: X,
              disabled: m || !k,
              "aria-label": "Decrease value",
              children: "−"
            }
          ),
          v ? /* @__PURE__ */ i.jsx(
            "input",
            {
              className: "tw-var-stepper__input",
              type: "number",
              value: h,
              min: M(a, o),
              max: M(l, o),
              step: M(n, o),
              onChange: (y) => x(y.target.value),
              onBlur: $,
              onKeyDown: Z,
              autoFocus: !0,
              "aria-label": "Enter value"
            }
          ) : /* @__PURE__ */ i.jsx(
            "span",
            {
              className: "tw-var-stepper__value",
              "aria-live": "polite",
              "aria-roledescription": "editable value",
              onClick: U,
              role: "spinbutton",
              "aria-valuemin": a,
              "aria-valuemax": l,
              "aria-valuenow": d,
              "aria-valuetext": z,
              "aria-label": r ? `${r} value` : "Counter value",
              tabIndex: m ? -1 : 0,
              onKeyDown: (y) => {
                y.key === "Enter" || y.key === " " ? (y.preventDefault(), U()) : y.key === "ArrowUp" ? (y.preventDefault(), !m && C && p(_)) : y.key === "ArrowDown" ? (y.preventDefault(), !m && k && p(g)) : y.key === "Home" ? (y.preventDefault(), m || p(a)) : y.key === "End" && (y.preventDefault(), m || p(l));
              },
              children: z
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: "tw-var-stepper__btn tw-var-stepper__btn--plus",
              onClick: B,
              disabled: m || !C,
              "aria-label": "Increase value",
              children: "+"
            }
          )
        ] })
      ] })
    }
  );
}, wa = {
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
    ...T,
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
    numberFormat: "",
    displayScale: 1,
    displayStyle: "card"
  },
  render: ga
}, xa = ({
  api: e,
  variableName: t = "",
  label: r = "",
  maxStars: a = 5,
  displayStyle: l = "card",
  puck: n
}) => {
  if (!e)
    throw new Error("StarRating: api is required");
  const c = e.isReviewMode, s = Math.max(1, Math.min(a, 10)), [o, u] = P(
    e,
    t || void 0,
    0,
    0,
    s
  ), m = w(
    (v) => {
      if (c) return;
      u(o === v ? 0 : v);
    },
    [c, o, u]
  ), d = w(
    (v) => {
      c || (v.key === "ArrowRight" || v.key === "ArrowUp" ? (v.preventDefault(), u(Math.min(o + 1, s))) : v.key === "ArrowLeft" || v.key === "ArrowDown" ? (v.preventDefault(), u(Math.max(o - 1, 0))) : v.key === "Home" ? (v.preventDefault(), u(0)) : v.key === "End" && (v.preventDefault(), u(s)));
    },
    [c, o, s, u]
  ), p = Array.from({ length: s }, (v, b) => b + 1);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-star-rating tw-var-star-rating--${l}`,
      ref: n?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-star-rating__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-star-rating__label", children: r }),
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: "tw-var-star-rating__stars",
            role: "slider",
            "aria-valuemin": 0,
            "aria-valuemax": s,
            "aria-valuenow": o,
            "aria-valuetext": o === 0 ? "No rating" : `${o} of ${s} star${o !== 1 ? "s" : ""}`,
            "aria-label": r || "Star rating",
            "aria-disabled": c,
            tabIndex: c ? -1 : 0,
            onKeyDown: d,
            children: p.map((v) => /* @__PURE__ */ i.jsx(
              "button",
              {
                type: "button",
                className: `tw-var-star-rating__star ${v <= o ? "tw-var-star-rating__star--filled" : ""}`,
                onClick: () => m(v),
                disabled: c,
                "aria-label": `${v} star${v > 1 ? "s" : ""}`,
                tabIndex: -1,
                children: /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 24 24", className: "tw-var-star-rating__icon", children: /* @__PURE__ */ i.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) })
              },
              v
            ))
          }
        )
      ] })
    }
  );
}, _a = {
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
  render: xa
}, Na = ({
  api: e,
  variableName: t = "",
  label: r = "",
  prefix: a = "",
  suffix: l = "",
  decimals: n = 0,
  size: c = "lg",
  displayStyle: s = "card",
  numberFormat: o = "",
  displayScale: u = 1,
  puck: m
}) => {
  if (!e)
    throw new Error("NumericDisplay: api is required");
  const [d] = P(e, t || void 0, 0), p = V(() => {
    const v = Math.max(0, Math.min(20, Math.trunc(n))), b = o || (v > 0 ? `0.${"0".repeat(v)}` : "0");
    return we(d, b, u);
  }, [d, n, o, u]);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-numeric tw-var-numeric--${s}`,
      ref: m?.dragRef,
      children: /* @__PURE__ */ i.jsxs("div", { className: "tw-var-numeric__inner", children: [
        r && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__label", children: r }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `tw-var-numeric__value tw-var-numeric__value--${c}`,
            role: "status",
            "aria-label": `${r || "Value"}: ${a}${p}${l}`,
            children: [
              a && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__affix", children: a }),
              /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__number", children: p }),
              l && /* @__PURE__ */ i.jsx("span", { className: "tw-var-numeric__affix", children: l })
            ]
          }
        )
      ] })
    }
  );
}, ka = {
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
    ...T,
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
    numberFormat: "",
    displayScale: 1,
    size: "lg",
    displayStyle: "card"
  },
  render: Na
};
function ja(e, t, r) {
  switch (t) {
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
const Sa = ({
  api: e,
  variableName: t = "",
  defaultLabel: r = "Status",
  defaultVariant: a = "neutral",
  rules: l = [],
  displayStyle: n = "card",
  puck: c
}) => {
  if (!e)
    throw new Error("StatusBadge: api is required");
  const [s] = le(
    e,
    t || void 0,
    0
  ), o = typeof s == "number" ? s : Number(s) || 0, { activeLabel: u, activeVariant: m } = V(() => {
    for (const d of l)
      if (ja(o, d.operator, d.threshold))
        return { activeLabel: d.label, activeVariant: d.variant };
    return { activeLabel: r, activeVariant: a };
  }, [o, l, r, a]);
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `tw-var-badge tw-var-badge--${n}`,
      ref: c?.dragRef,
      children: /* @__PURE__ */ i.jsx("div", { className: "tw-var-badge__inner", children: /* @__PURE__ */ i.jsx(
        "span",
        {
          className: `tw-var-badge__pill tw-var-badge__pill--${m}`,
          role: "status",
          "aria-live": "polite",
          children: u
        }
      ) })
    }
  );
}, Da = {
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
  render: Sa
};
function fe(e, t, r) {
  switch (t) {
    case "round":
      return Math.round(e);
    case "floor":
      return Math.floor(e);
    case "ceil":
      return Math.ceil(e);
    case "fixed":
      return q(e, r);
    default:
      return Number.isFinite(e) ? Number(e.toPrecision(15)) : e;
  }
}
const Ca = ({
  api: e,
  formula: t = "",
  outputVariable: r = "",
  roundMode: a = "none",
  decimals: l = 2,
  puck: n
}) => {
  if (!e)
    throw new Error("LogicFormula: api is required");
  const [c] = e.hooks.useNumberExpressions([t], [0]), s = V(
    () => fe(c, a, l),
    [c, a, l]
  ), o = I(!1), u = I(null);
  if (ye(() => {
    if (e.isEditing || !t || !r) return;
    const m = () => {
      if (o.current) return;
      const p = e.resolveNumber(t);
      if (p === null) return;
      const v = fe(p, a, l);
      u.current !== v && (u.current = v, o.current = !0, e.updateVariables({ [r]: v }), o.current = !1);
    };
    return m(), e.onVariableChange(() => {
      m();
    });
  }, [e, t, r, a, l]), e.isEditing) {
    const m = t && t.trim().length > 0, d = r && r.trim().length > 0;
    return /* @__PURE__ */ i.jsxs("div", { className: "tw-var-logic-formula__editor", ref: n?.dragRef, children: [
      /* @__PURE__ */ i.jsx("div", { className: "tw-var-logic-formula__editor-icon", children: /* @__PURE__ */ i.jsx("span", { "aria-hidden": "true", children: "f(x)" }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "tw-var-logic-formula__editor-body", children: [
        /* @__PURE__ */ i.jsx("span", { className: "tw-var-logic-formula__editor-title", children: "Logic Formula" }),
        /* @__PURE__ */ i.jsx("span", { className: "tw-var-logic-formula__editor-desc", children: m && d ? `${r} = ${t}` : m ? `Formula: ${t} (no output variable)` : "No formula configured" }),
        m && /* @__PURE__ */ i.jsxs("span", { className: "tw-var-logic-formula__editor-preview", children: [
          "Current: ",
          s
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ i.jsx("div", { style: { display: "none" } });
}, Ma = {
  usagePrompt: "A no-UI logic widget that computes a formula from input variables and writes the result to an output variable. Use for derived/computed values: a formula of '{{quiz1}} + {{quiz2}}' with output totalScore, or '{{correct}} / {{total}} * 100' with output percentage. Wrap every variable in {{ }}; a bare name like quiz1 makes the formula fail and the output is never set.",
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
  resolveFields: (e, { fields: t }) => {
    if (e.props.roundMode !== "fixed") {
      const { decimals: a, ...l } = t;
      return l;
    }
    return t;
  },
  defaultProps: {
    formula: "",
    outputVariable: "",
    roundMode: "none",
    decimals: 2
  },
  render: Ca
};
S({
  name: "Switch",
  description: "Toggle switch that binds to a boolean variable — on/off control for lessons",
  aiPrompt: "Requires a boolean variable. Toggles the variable between true and false on interaction.",
  icon: Oe,
  config: D(la),
  category: "Interactive Controls"
});
S({
  name: "Dial",
  description: "Rotary dial control for selecting a numeric value within a range",
  aiPrompt: "Requires a numeric variable. Drag the knob to set the value between min and max. Shows value on the dial optionally.",
  icon: Fe,
  config: D(ua),
  category: "Interactive Controls"
});
S({
  name: "Slider",
  description: "Interactive slider for selecting a numeric value within a defined range",
  aiPrompt: "Requires a numeric variable. Drag the thumb to set the value between min and max.",
  icon: Ve,
  config: D(ba),
  category: "Interactive Controls"
});
S({
  name: "ProgressBar",
  description: "Read-only meter that visualizes a numeric variable as a progress bar",
  aiPrompt: "Requires a numeric variable. Displays the variable value as a filled bar between min and max. Read-only — does not modify the variable.",
  icon: Re,
  config: D(ya),
  category: "Interactive Controls"
});
S({
  name: "Stepper",
  description: "Plus/minus counter for incrementing or decrementing a numeric variable step by step",
  aiPrompt: "Requires a numeric variable. Learners click +/- buttons to change the value within min/max bounds.",
  icon: Ee,
  config: D(wa),
  category: "Interactive Controls"
});
S({
  name: "StarRating",
  description: "Star rating input that sets a numeric variable from 1 to max stars",
  aiPrompt: "Requires a numeric variable. Click stars to rate. Click the same star again to deselect.",
  icon: ze,
  config: D(_a),
  category: "Interactive Controls"
});
S({
  name: "NumericDisplay",
  description: "Large formatted number readout with optional prefix and suffix",
  aiPrompt: "Requires a numeric variable. Shows the value in large text with optional $ or % formatting. Read-only.",
  icon: Ae,
  config: D(ka),
  category: "Interactive Controls"
});
S({
  name: "StatusBadge",
  description: "Conditional badge that changes label and color based on variable value rules",
  aiPrompt: "Requires a numeric variable. Define rules like 'if >= 50 show Passing in green'. First matching rule wins. Read-only.",
  icon: Me,
  config: D(Da),
  category: "Interactive Controls"
});
S({
  name: "LogicFormula",
  description: "Computes a math formula from variables and writes the result to an output variable",
  aiPrompt: "No-UI logic widget. Set a formula like '{{quiz1}} + {{quiz2}}' or '{{correct}} / {{total}} * 100' (wrap every variable in {{ }}; a bare name like quiz1 makes the formula fail and the output is never set) and an output variable. The output variable updates reactively whenever input variables change.",
  icon: Be,
  config: Ma,
  category: "Interactive Controls"
});
console.info("🎛️ Variable widgets loaded successfully!");
//# sourceMappingURL=widget.js.map
