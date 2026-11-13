import { forwardRef as Je, createElement as _e, useState as H, useRef as te, useEffect as me, useCallback as Q } from "react";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ut = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, i) => i ? i.toUpperCase() : s.toLowerCase()
), ze = (e) => {
  const t = ut(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Qe = (...e) => e.filter((t, s, i) => !!t && t.trim() !== "" && i.indexOf(t) === s).join(" ").trim(), dt = (e) => {
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
var ft = {
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
const ht = Je(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: i,
    className: l = "",
    children: c,
    iconNode: f,
    ...m
  }, y) => _e(
    "svg",
    {
      ref: y,
      ...ft,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: i ? Number(s) * 24 / Number(t) : s,
      className: Qe("lucide", l),
      ...!c && !dt(m) && { "aria-hidden": "true" },
      ...m
    },
    [
      ...f.map(([C, b]) => _e(C, b)),
      ...Array.isArray(c) ? c : [c]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = (e, t) => {
  const s = Je(
    ({ className: i, ...l }, c) => _e(ht, {
      ref: c,
      iconNode: t,
      className: Qe(
        `lucide-${ct(ze(e))}`,
        `lucide-${e}`,
        i
      ),
      ...l
    })
  );
  return s.displayName = ze(e), s;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
], pt = pe("boxes", mt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], gt = pe("chart-pie", bt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
], vt = pe("ruler", xt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
], wt = pe("square-split-horizontal", yt), be = (e) => {
  window.TeachariumComponents = window.TeachariumComponents || {}, window.TeachariumComponents[e.name] = e;
};
var Ie = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function kt() {
  if (Ae) return ce;
  Ae = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(i, l, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      c = {};
      for (var m in l)
        m !== "key" && (c[m] = l[m]);
    } else c = l;
    return l = c.ref, {
      $$typeof: e,
      type: i,
      key: f,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return ce.Fragment = t, ce.jsx = s, ce.jsxs = s, ce;
}
var Ve;
function Mt() {
  return Ve || (Ve = 1, Ie.exports = kt()), Ie.exports;
}
var Se = Mt();
const Ct = {
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
}, jt = ({ margin: e, children: t }) => {
  const s = {};
  return e && (s.padding = `${e}px`), /* @__PURE__ */ Se.jsx("div", { style: s, children: t });
}, Pe = (e) => {
  const t = e.render;
  return {
    ...e,
    render: (s) => /* @__PURE__ */ Se.jsx(jt, { ...s, children: /* @__PURE__ */ Se.jsx(t, { ...s }) }),
    fields: {
      ...e.fields,
      ...Ct
    }
  };
};
var Ce = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function _t() {
  if (We) return ue;
  We = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(i, l, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      c = {};
      for (var m in l)
        m !== "key" && (c[m] = l[m]);
    } else c = l;
    return l = c.ref, {
      $$typeof: e,
      type: i,
      key: f,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return ue.Fragment = t, ue.jsx = s, ue.jsxs = s, ue;
}
var Be;
function St() {
  return Be || (Be = 1, Ce.exports = _t()), Ce.exports;
}
var r = St();
const Oe = "Work Sans, sans-serif";
var je, De;
function Et() {
  if (De) return je;
  De = 1;
  var e = "Expected a function", t = NaN, s = "[object Symbol]", i = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, f = /^0o[0-7]+$/i, m = parseInt, y = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, C = typeof self == "object" && self && self.Object === Object && self, b = y || C || Function("return this")(), w = Object.prototype, g = w.toString, x = Math.max, v = Math.min, F = function() {
    return b.Date.now();
  };
  function p(d, M, _) {
    var j, R, D, V, N, I, P = 0, B = !1, W = !1, Y = !0;
    if (typeof d != "function")
      throw new TypeError(e);
    M = q(M) || 0, k(_) && (B = !!_.leading, W = "maxWait" in _, D = W ? x(q(_.maxWait) || 0, M) : D, Y = "trailing" in _ ? !!_.trailing : Y);
    function G(L) {
      var A = j, X = R;
      return j = R = void 0, P = L, V = d.apply(X, A), V;
    }
    function ge(L) {
      return P = L, N = setTimeout(K, M), B ? G(L) : V;
    }
    function xe(L) {
      var A = L - I, X = L - P, re = M - A;
      return W ? v(re, D - X) : re;
    }
    function de(L) {
      var A = L - I, X = L - P;
      return I === void 0 || A >= M || A < 0 || W && X >= D;
    }
    function K() {
      var L = F();
      if (de(L))
        return ae(L);
      N = setTimeout(K, xe(L));
    }
    function ae(L) {
      return N = void 0, Y && j ? G(L) : (j = R = void 0, V);
    }
    function ie() {
      N !== void 0 && clearTimeout(N), P = 0, j = I = R = N = void 0;
    }
    function le() {
      return N === void 0 ? V : ae(F());
    }
    function ne() {
      var L = F(), A = de(L);
      if (j = arguments, R = this, I = L, A) {
        if (N === void 0)
          return ge(I);
        if (W)
          return N = setTimeout(K, M), G(I);
      }
      return N === void 0 && (N = setTimeout(K, M)), V;
    }
    return ne.cancel = ie, ne.flush = le, ne;
  }
  function k(d) {
    var M = typeof d;
    return !!d && (M == "object" || M == "function");
  }
  function z(d) {
    return !!d && typeof d == "object";
  }
  function E(d) {
    return typeof d == "symbol" || z(d) && g.call(d) == s;
  }
  function q(d) {
    if (typeof d == "number")
      return d;
    if (E(d))
      return t;
    if (k(d)) {
      var M = typeof d.valueOf == "function" ? d.valueOf() : d;
      d = k(M) ? M + "" : M;
    }
    if (typeof d != "string")
      return d === 0 ? d : +d;
    d = d.replace(i, "");
    var _ = c.test(d);
    return _ || f.test(d) ? m(d.slice(2), _ ? 2 : 8) : l.test(d) ? t : +d;
  }
  return je = p, je;
}
Et();
function Nt() {
  const e = te(!1);
  return me(() => (e.current = !0, () => {
    e.current = !1;
  }), []), Q(() => e.current, []);
}
var He = {
  width: void 0,
  height: void 0
};
function Ke(e) {
  const { ref: t, box: s = "content-box" } = e, [{ width: i, height: l }, c] = H(He), f = Nt(), m = te({ ...He }), y = te(void 0);
  return y.current = e.onResize, me(() => {
    if (!t.current || typeof window > "u" || !("ResizeObserver" in window))
      return;
    const C = new ResizeObserver(([b]) => {
      const w = s === "border-box" ? "borderBoxSize" : s === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", g = qe(b, w, "inlineSize"), x = qe(b, w, "blockSize");
      if (m.current.width !== g || m.current.height !== x) {
        const F = { width: g, height: x };
        m.current.width = g, m.current.height = x, y.current ? y.current(F) : f() && c(F);
      }
    });
    return C.observe(t.current, { box: s }), () => {
      C.disconnect();
    };
  }, [s, t, f]), { width: i, height: l };
}
function qe(e, t, s) {
  return e[t] ? Array.isArray(e[t]) ? e[t][0][s] : (
    // @ts-ignore Support Firefox's non-standard behavior
    e[t][s]
  ) : t === "contentBoxSize" ? e.contentRect[s === "inlineSize" ? "width" : "height"] : void 0;
}
const ee = 2, Pt = 7.5, Lt = ({
  api: e,
  segments: t = []
}) => {
  if (!e)
    throw new Error("AdvancedFractionBar: api is required");
  const s = te(null), [i, l] = H(0), [c, f] = H(0);
  Ke({
    ref: s,
    onResize: ({ width: w, height: g }) => {
      w && w > 0 && l(w), g && g > 0 && f(g);
    }
  });
  const m = ee, y = ee;
  let C = 0;
  const b = t.map((w, g) => {
    let x = i / (w.denominator || 2);
    g === t.length - 1 && (x = i - C), x = Math.max(0, x);
    const v = {
      x: m + C,
      y,
      width: g === t.length - 1 ? x - ee * 2 : x - ee,
      height: c - ee * 2,
      denominator: w.denominator || 2,
      filled: !0,
      labeled: w.labeled || !1,
      textColor: w.textColor || "#fff",
      fillColor: w.fillColor || "#f00",
      strokeColor: w.strokeColor || "#777"
      // Default from schema
    };
    return C += x, /* @__PURE__ */ r.jsx($t, { ...v }, g);
  });
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: s,
      style: { width: "100%", height: "100%" },
      "data-testid": "adv-fraction-bar-container",
      children: /* @__PURE__ */ r.jsxs(
        "svg",
        {
          width: "100%",
          height: "100%",
          "data-testid": "advanced-fraction-bar-svg",
          children: [
            i > 0 && c > 0 && /* @__PURE__ */ r.jsx(
              "rect",
              {
                x: 0,
                y: 0,
                width: i,
                height: c,
                fill: "var(--tool-border-color)"
              }
            ),
            b
          ]
        }
      )
    }
  );
}, $t = ({
  x: e,
  y: t,
  width: s,
  height: i,
  denominator: l,
  filled: c,
  labeled: f = !1,
  textColor: m = "#fff",
  fillColor: y = "var(--tool-1-color)",
  strokeColor: C = "var(--tool-border-color)"
}) => {
  if (s <= 0) return null;
  const b = m, w = f && s >= Pt, g = i * 0.3, x = e + s / 2, v = t + i / 2, F = v - i * 0.15, p = v + i * 0.05, k = v + i * 0.25, z = Math.min(s * 0.5, g * 1.5);
  return /* @__PURE__ */ r.jsxs("g", { "data-testid": `segment-${e}-${t}`, children: [
    /* @__PURE__ */ r.jsx(
      "rect",
      {
        x: e,
        y: t,
        width: s,
        height: i,
        fill: c ? y : "none",
        stroke: C,
        strokeWidth: ee
      }
    ),
    w && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "text",
        {
          x,
          y: F,
          fill: b,
          style: {
            fontFamily: Oe,
            fontWeight: 600,
            fontSize: `${g}px`
          },
          textAnchor: "middle",
          dominantBaseline: "middle",
          children: "1"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "line",
        {
          x1: x - z / 2,
          x2: x + z / 2,
          y1: p,
          y2: p,
          stroke: b,
          strokeWidth: ee
        }
      ),
      /* @__PURE__ */ r.jsx(
        "text",
        {
          x,
          y: k,
          fill: b,
          style: {
            fontFamily: Oe,
            fontWeight: 600,
            fontSize: `${g}px`
          },
          textAnchor: "middle",
          dominantBaseline: "middle",
          children: l
        }
      )
    ] })
  ] });
}, U = [
  {
    name: "Green",
    backgroundColor: "#00b159",
    foregroundColor: "#ffffff",
    emptyBackgroundColor: "#dddddd",
    emptyTextColor: "#9ea7b0",
    textColor: "#ffffff"
  },
  {
    name: "Blue",
    backgroundColor: "#00aedb",
    foregroundColor: "#ffffff",
    emptyBackgroundColor: "#dddddd",
    emptyTextColor: "#9ea7b0",
    textColor: "#ffffff"
  },
  {
    name: "Orange",
    backgroundColor: "#f37735",
    foregroundColor: "#ffffff",
    emptyBackgroundColor: "#dddddd",
    emptyTextColor: "#9ea7b0",
    textColor: "#ffffff"
  },
  {
    name: "Yellow",
    backgroundColor: "#ffc425",
    foregroundColor: "#ffffff",
    emptyBackgroundColor: "#dddddd",
    emptyTextColor: "#9ea7b0",
    textColor: "#ffffff"
  },
  {
    name: "Red",
    backgroundColor: "#d11141",
    foregroundColor: "#ffffff",
    emptyBackgroundColor: "#dddddd",
    emptyTextColor: "#9ea7b0",
    textColor: "#ffffff"
  }
], Tt = 100;
function et(e) {
  return Number.isFinite(e) ? Math.min(Tt, Math.max(0, Math.round(e))) : 0;
}
const Rt = {
  sm: { width: "100%", height: 32 },
  med: { width: "100%", height: 64 },
  lg: { width: "100%", height: 96 }
}, Ft = ({
  api: e,
  segments: t = "3",
  filled: s = "0",
  colorPalette: i = 0,
  showLabels: l = !0,
  showEmptyLabels: c = !1,
  size: f = "med"
}) => {
  if (!e)
    throw new Error("FractionBar: api is required");
  const [m, y] = e.hooks.useNumberExpressions(
    [t, s],
    [3, 0]
  ), C = et(m), b = Math.min(y, C), w = U[i] || U[0], g = Array(C).fill(0).map((x, v) => ({
    denominator: C,
    labeled: v < b ? l : c,
    fillColor: v < b ? w.backgroundColor : w.emptyBackgroundColor,
    filled: v < b,
    strokeColor: "#888",
    textColor: v < b ? w.textColor : w.emptyTextColor
  }));
  return /* @__PURE__ */ r.jsx("div", { style: Rt[f], children: /* @__PURE__ */ r.jsx(Lt, { api: e, segments: g }) });
}, zt = {
  usagePrompt: "Visualize a fraction as a segmented bar where the number of segments and filled parts can be driven by numeric expressions.",
  fields: {
    segments: {
      type: "numericExpression",
      label: "Segments"
    },
    filled: {
      type: "numericExpression",
      label: "Filled"
    },
    colorPalette: {
      type: "select",
      label: "Color Palette",
      options: U.map((e, t) => ({
        label: e.name,
        value: t
      }))
    },
    showLabels: {
      type: "radio",
      label: "Show Labels on Filled Segments",
      options: [
        { label: "True", value: !0 },
        { label: "False", value: !1 }
      ]
    },
    showEmptyLabels: {
      type: "radio",
      label: "Show Labels on Empty Segments",
      options: [
        { label: "True", value: !0 },
        { label: "False", value: !1 }
      ]
    },
    size: {
      type: "select",
      label: "Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "med" },
        { label: "Large", value: "lg" }
      ]
    }
  },
  defaultProps: {
    segments: "3",
    filled: "0",
    colorPalette: 0,
    showLabels: !0,
    showEmptyLabels: !1,
    size: "med",
    type: "fraction-bar"
  },
  render: Ft
}, It = {
  sm: { width: "100%", minWidth: 192, height: 96 },
  med: { width: "100%", minWidth: 288, height: 192 },
  lg: { width: "100%", minWidth: 384, height: 288 }
}, At = ({
  api: e,
  segments: t = "2",
  filled: s = "1",
  colorPalette: i = 0,
  size: l = "med"
}) => {
  if (!e)
    throw new Error("FractionPie: api is required");
  const c = te(null), [f, m] = H(0), [y, C] = H(0), [b, w] = e.hooks.useNumberExpressions(
    [t, s],
    [2, 1]
  ), g = et(b), x = Math.min(w, g);
  Ke({
    ref: c,
    onResize: ({ width: q, height: d }) => {
      m(q || 0), C(d || 0);
    }
  });
  const v = U[i] || U[0], F = Math.min(f, y), p = Math.max(0, F / 2 - 2), k = f / 2, z = y / 2, E = Array(g).fill(0);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: c,
      style: It[l],
      "data-testid": "fraction-pie-container",
      children: /* @__PURE__ */ r.jsxs(
        "svg",
        {
          width: f,
          height: y,
          "data-testid": "fraction-pie-svg",
          children: [
            p > 0 && /* @__PURE__ */ r.jsx(
              "circle",
              {
                r: p,
                fill: "#fff",
                cx: k,
                cy: z,
                strokeWidth: 0
              }
            ),
            g === 1 ? (
              // Draw a single filled or empty circle, no dividers
              /* @__PURE__ */ r.jsx(
                "circle",
                {
                  r: p,
                  cx: k,
                  cy: z,
                  fill: x > 0 ? v.backgroundColor : "#fff",
                  stroke: x > 0 ? "none" : "#888",
                  strokeWidth: x > 0 ? 0 : 2
                }
              )
            ) : E.map((q, d) => /* @__PURE__ */ r.jsx(
              Wt,
              {
                x: k,
                y: z,
                strokeColor: "#888",
                radius: p,
                index: d,
                fillColor: d < x ? v.backgroundColor : v.emptyBackgroundColor,
                segments: g,
                filled: d < x,
                textColor: d < x ? v.textColor : v.emptyTextColor
              },
              d
            ))
          ]
        }
      )
    }
  );
}, Vt = (e, t, s, i, l) => {
  const c = e + l * Math.cos(Math.PI * s / 180), f = t + l * Math.sin(Math.PI * s / 180), m = e + l * Math.cos(Math.PI * i / 180), y = t + l * Math.sin(Math.PI * i / 180);
  return `M${e}  ${t} L${c} ${f} A${l} ${l} 0 0 1 ${m} ${y} z`;
}, Wt = ({
  x: e,
  y: t,
  index: s,
  segments: i,
  radius: l,
  filled: c,
  fillColor: f = "#f00",
  strokeColor: m = "#eee"
}) => {
  const y = 360 / i, C = s * y - 90, b = C + y, w = Vt(e, t, C, b, l);
  return /* @__PURE__ */ r.jsx("g", { children: /* @__PURE__ */ r.jsx(
    "path",
    {
      d: w,
      fill: c ? f : "none",
      stroke: m,
      shapeRendering: "geometricPrecision"
    }
  ) });
}, Bt = {
  usagePrompt: "Render a circular fraction diagram that highlights the filled segments based on dynamic Teacharium expressions.",
  fields: {
    segments: {
      type: "numericExpression",
      label: "Segments"
    },
    filled: {
      type: "numericExpression",
      label: "Filled"
    },
    colorPalette: {
      type: "select",
      label: "Color Palette",
      options: U.map((e, t) => ({
        label: e.name,
        value: t
      }))
    },
    size: {
      type: "select",
      label: "Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "med" },
        { label: "Large", value: "lg" }
      ]
    }
  },
  defaultProps: {
    segments: "2",
    filled: "1",
    colorPalette: 0,
    size: "med",
    type: "fraction-pie"
  },
  render: At
}, Z = {
  green: "#00b159",
  blue: "#00aedb",
  orange: "#f37735",
  empty: "#f8f9fa",
  border: "#9d9fa2ff"
}, Ot = {
  small: 40,
  medium: 70,
  large: 100
}, Dt = ({
  api: e,
  rows: t = "3",
  columns: s = "3",
  greenCircles: i = "0",
  blueSquares: l = "0",
  orangeTriangles: c = "0",
  size: f = "medium",
  showGrid: m = !0
}) => {
  if (!e)
    throw new Error("SetVisual: api is required");
  const [y, C, b, w, g] = e.hooks.useNumberExpressions(
    [t, s, i, l, c],
    [3, 3, 0, 0, 0]
  ), x = Ot[f], v = 20, F = C * x + v * 2, p = y * x + v * 2, k = x, z = x, E = x * 0.7, q = b + w + g, d = () => {
    const _ = [];
    for (let j = 0; j <= C; j++) {
      const R = v + j * k;
      _.push(
        /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: R,
            y1: v,
            x2: R,
            y2: p - v,
            stroke: Z.border,
            strokeWidth: "1",
            opacity: "0.3",
            shapeRendering: "crispEdges",
            vectorEffect: "non-scaling-stroke"
          },
          `v-${j}`
        )
      );
    }
    for (let j = 0; j <= y; j++) {
      const R = v + j * z;
      _.push(
        /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: v,
            y1: R,
            x2: F - v,
            y2: R,
            stroke: Z.border,
            strokeWidth: "1",
            opacity: "0.3",
            shapeRendering: "crispEdges",
            vectorEffect: "non-scaling-stroke"
          },
          `h-${j}`
        )
      );
    }
    return _;
  }, M = () => {
    const _ = [];
    let j = 0;
    for (let R = 0; R < y; R++)
      for (let D = 0; D < C; D++) {
        const V = v + D * k + k / 2, N = v + R * z + z / 2;
        let I = "empty", P = Z.empty;
        j < b ? (I = "circle", P = Z.green) : j < b + w ? (I = "square", P = Z.blue) : j < b + w + g && (I = "triangle", P = Z.orange);
        const B = `${R}-${D}`;
        if (I === "circle")
          _.push(
            /* @__PURE__ */ r.jsx(
              "circle",
              {
                cx: V,
                cy: N,
                r: E / 2,
                fill: P,
                stroke: Z.border,
                strokeWidth: "1"
              },
              B
            )
          );
        else if (I === "square")
          _.push(
            /* @__PURE__ */ r.jsx(
              "rect",
              {
                x: V - E / 2,
                y: N - E / 2,
                width: E,
                height: E,
                fill: P,
                stroke: Z.border,
                strokeWidth: "1"
              },
              B
            )
          );
        else if (I === "triangle") {
          const W = E / 2, Y = Math.sqrt(3) / 2 * E, G = [
            `${V},${N - Y / 2}`,
            `${V - W},${N + Y / 2}`,
            `${V + W},${N + Y / 2}`
          ].join(" ");
          _.push(
            /* @__PURE__ */ r.jsx(
              "polygon",
              {
                points: G,
                fill: P,
                stroke: Z.border,
                strokeWidth: "1"
              },
              B
            )
          );
        }
        j < q && j++;
      }
    return _;
  };
  return /* @__PURE__ */ r.jsx("div", { className: "tw-math-set-visual", children: /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: F,
      height: p,
      viewBox: `0 0 ${F} ${p}`,
      className: "tw-math-set-visual__svg",
      children: [
        m && d(),
        M()
      ]
    }
  ) });
}, Ht = {
  usagePrompt: "Display a grid of shapes representing set or array models, with counts resolved from expressions for each color.",
  fields: {
    rows: {
      type: "numericExpression",
      label: "Rows"
    },
    columns: {
      type: "numericExpression",
      label: "Columns"
    },
    greenCircles: {
      type: "numericExpression",
      label: "Green Circles"
    },
    blueSquares: {
      type: "numericExpression",
      label: "Blue Squares"
    },
    orangeTriangles: {
      type: "numericExpression",
      label: "Orange Triangles"
    },
    size: {
      type: "select",
      label: "Size",
      options: [
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" }
      ]
    },
    showGrid: {
      type: "radio",
      label: "Show Grid",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    }
  },
  defaultProps: {
    rows: "3",
    columns: "3",
    greenCircles: "2",
    blueSquares: "1",
    orangeTriangles: "0",
    size: "medium",
    showGrid: !0,
    type: "set-visual"
  },
  render: Dt
};
function qt(e) {
  return e.split(",").map((t) => {
    const s = t.trim();
    if (s.includes("/")) {
      const i = s.split("/");
      if (i.length === 2) {
        const l = parseFloat(i[0].trim()), c = parseFloat(i[1].trim());
        if (!isNaN(l) && !isNaN(c) && c !== 0)
          return l / c;
      }
    }
    return parseFloat(s);
  }).filter((t) => !isNaN(t));
}
function tt(e, t) {
  return t === 0 ? e : tt(t, e % t);
}
function Ee(e, t) {
  const s = tt(Math.abs(e), Math.abs(t));
  return [e / s, t / s];
}
function Ne(e, t = 1e-4) {
  return Math.abs(e - Math.round(e)) < t;
}
function Ye(e, t = 100) {
  if (Ne(e))
    return [Math.round(e), 1];
  let s = 0, i = 1, l = Math.abs(e);
  for (let c = 1; c <= t; c++) {
    const f = Math.round(e * c), m = Math.abs(e - f / c);
    if (m < l && (l = m, s = f, i = c), m < 1e-4)
      break;
  }
  return Ee(s, i);
}
const Ge = 1e3;
function Xe({
  numerator: e,
  denominator: t,
  small: s = !1
}) {
  const i = s ? "tw-math-fraction__part tw-math-fraction__part--small" : "tw-math-fraction__part";
  return /* @__PURE__ */ r.jsxs("div", { className: "tw-math-fraction__stack", children: [
    /* @__PURE__ */ r.jsx("div", { className: i, children: e }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: s ? "tw-math-fraction__bar tw-math-fraction__bar--tight" : "tw-math-fraction__bar"
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: i, children: t })
  ] });
}
function Ze(e, t) {
  const s = Math.trunc(e / t), i = e % t;
  return s === 0 ? `${i}/${t}` : `${s} ${Math.abs(i)}/${t}`;
}
function Ue({
  fraction: [e, t],
  mixed: s
}) {
  let i;
  if (e % t === 0)
    i = /* @__PURE__ */ r.jsx("div", { className: "tw-math-fraction__whole", children: e / t });
  else {
    const l = Math.trunc(e / t);
    if (s && l !== 0)
      i = /* @__PURE__ */ r.jsxs("div", { className: "tw-math-fraction__mixed", children: [
        /* @__PURE__ */ r.jsx("span", { children: l }),
        /* @__PURE__ */ r.jsx(
          Xe,
          {
            numerator: Math.abs(e % t),
            denominator: t,
            small: !0
          }
        )
      ] });
    else {
      const c = s ? e % t : e;
      i = /* @__PURE__ */ r.jsxs("div", { className: "tw-math-fraction__signed", children: [
        e < 0 && /* @__PURE__ */ r.jsx("span", { children: "−" }),
        /* @__PURE__ */ r.jsx(
          Xe,
          {
            numerator: Math.abs(c),
            denominator: t
          }
        )
      ] });
    }
  }
  return /* @__PURE__ */ r.jsx("div", { className: "tw-math-fraction", children: i });
}
const Yt = ({
  api: e,
  start: t = "0",
  end: s = "10",
  increment: i = "1",
  labelMode: l = "all",
  specificLabels: c = "",
  fractionDisplay: f = "decimal",
  denominator: m = "1",
  customLabels: y = [],
  showPoint: C = !1,
  draggable: b = !0,
  pointPosition: w = "0",
  pointVariable: g = "",
  height: x = "120",
  ranges: v = [],
  puck: F
}) => {
  if (!e)
    throw new Error("NumberLine: api is required");
  const [
    p,
    k,
    z,
    E,
    q,
    d
  ] = e.hooks.useNumberExpressions(
    [t, s, i, m, x, w],
    [0, 10, 1, 1, 120, 0]
  ), [M, _] = H(
    d
  ), [j, R] = H(!1), [D, V] = H(!1), N = te(null), I = te(null), [P] = H(() => C && g ? e.addVariable(g, d, "number") : null), B = Q(
    (n) => {
      P && e.updateVariables({
        [P]: n,
        ...g ? { [g]: n } : {}
      });
    },
    [e, P, g]
  ), [W, Y] = H({}), G = 20, ge = Array.from(
    { length: G },
    (n, o) => (y || [])[o]?.position || "0"
  ), xe = Array.from(
    { length: G },
    () => p
  ), de = e.hooks.useNumberExpressions(
    ge,
    xe
  ), K = [];
  for (let n = 0; n < G; n++)
    (y || [])[n] && (K[n] = de[n]);
  const ae = 10, ie = [], le = [];
  for (let n = 0; n < ae; n++) {
    const o = (v || [])[n];
    ie.push(o?.start || "0"), ie.push(o?.end || "0"), le.push(p), le.push(k);
  }
  const ne = e.hooks.useNumberExpressions(
    ie,
    le
  ), L = [];
  for (let n = 0; n < ae; n++) {
    const o = (v || [])[n];
    if (o) {
      const a = o.colorPalette ?? 1, u = U[a] || U[1];
      L[n] = {
        start: ne[n * 2],
        end: ne[n * 2 + 1],
        color: u.backgroundColor
      };
    }
  }
  me(() => {
    _(d);
  }, [d]);
  const A = [], X = k - p, re = z > 0 ? Math.floor((X + 1e-4) / z) + 1 : NaN;
  if (re > 0 && re <= Ge)
    for (let n = 0; n < re; n++)
      A.push(p + n * z);
  else X >= 0 && (A.push(p), X > 0 && A.push(k));
  const fe = [], nt = (Math.ceil(k) - Math.floor(p) + 1) * E;
  if (E > 1 && nt <= Ge) {
    const n = Math.floor(p), o = Math.ceil(k), a = 1 / E;
    for (let u = n; u <= o; u++)
      for (let h = 1; h < E; h++) {
        const $ = u + h * a;
        $ >= p && $ <= k && (A.some(
          (lt) => Math.abs(lt - $) < 1e-4
        ) || fe.push($));
      }
  }
  const T = [...A, ...fe].sort(
    (n, o) => n - o
  ), Le = c ? qt(c) : [], rt = Le.filter((n) => {
    const o = A.some((u) => Math.abs(u - n) < 1e-4), a = fe.some(
      (u) => Math.abs(u - n) < 1e-4
    );
    return !o && !a;
  }), $e = (n) => Le.some(
    (a) => Math.abs(a - n) < 1e-4
  ) ? !0 : l === "none" ? !1 : l === "all" ? !0 : l === "whole-only" ? Ne(n) : !1, ve = (n) => {
    if (f === "decimal" || E === 1)
      return n.toFixed(2).replace(/\.?0+$/, "");
    const o = Math.round(n * E), [a, u] = Ee(
      o,
      E
    );
    return a % u === 0 ? (a / u).toString() : f === "improper" ? `${a}/${u}` : Ze(a, u);
  }, ot = (n) => {
    if (f === "decimal")
      return n.toFixed(2).replace(/\.?0+$/, "");
    const [o, a] = Ye(n);
    return o % a === 0 ? (o / a).toString() : f === "improper" ? `${o}/${a}` : Ze(o, a);
  }, O = 60, oe = 800, Te = y.length > 0 ? 150 : 25, Re = 50, ye = Math.max(q, Te + Re), S = Math.min(
    Math.max(ye / 2, Te),
    ye - Re
  ), we = oe - O * 2, J = (n) => {
    const o = k - p, a = (n - p) / o;
    return O + a * we;
  }, he = Q(
    (n) => {
      const o = (n - O) / we, a = k - p;
      let u = p + o * a;
      return u = Math.max(p, Math.min(k, u)), u;
    },
    [O, we, p, k]
  ), Fe = Q(
    (n) => {
      let o = he(n);
      if (T.length > 0) {
        let a = T[0], u = Math.abs(o - a);
        for (const h of T) {
          const $ = Math.abs(o - h);
          $ < u && (u = $, a = h);
        }
        o = a;
      }
      return o = Math.max(p, Math.min(k, o)), o;
    },
    [he, T, p, k]
  ), st = (n) => {
    !b || e.isEditing || (R(!0), n.preventDefault());
  }, ke = Q(
    (n) => {
      if (!j || !N.current) return;
      const o = N.current.getBoundingClientRect(), a = n.clientX - o.left, u = he(a);
      _(u);
    },
    [j, he]
  ), Me = Q(() => {
    R(!1);
    let n = M;
    if (T.length > 0) {
      let a = T[0], u = Math.abs(M - a);
      for (const h of T) {
        const $ = Math.abs(M - h);
        $ < u && (u = $, a = h);
      }
      n = a;
    }
    const o = Math.max(p, Math.min(k, n));
    _(o), P && B(o);
  }, [
    M,
    T,
    p,
    k,
    P,
    B
  ]);
  me(() => {
    if (j)
      return window.addEventListener("mousemove", ke), window.addEventListener("mouseup", Me), () => {
        window.removeEventListener("mousemove", ke), window.removeEventListener("mouseup", Me);
      };
  }, [j, ke, Me]);
  const at = Q(
    (n) => {
      if (!C || !b || e.isEditing || j) return;
      const o = N.current?.getBoundingClientRect();
      if (!o) return;
      const a = n.clientX - o.left, u = Fe(a);
      _(u), P && B(u);
    },
    [
      C,
      b,
      e.isEditing,
      j,
      Fe,
      P,
      B
    ]
  ), it = Q(
    (n) => {
      if (e.isEditing || !b) return;
      let o = M, a = !1;
      switch (n.key) {
        case "ArrowLeft":
        case "ArrowDown": {
          if (T.length > 0) {
            const u = T.filter(
              (h) => h < M - 1e-4
            );
            u.length > 0 && (o = u[u.length - 1]);
          }
          a = !0;
          break;
        }
        case "ArrowRight":
        case "ArrowUp": {
          if (T.length > 0) {
            const u = T.filter(
              (h) => h > M + 1e-4
            );
            u.length > 0 && (o = u[0]);
          }
          a = !0;
          break;
        }
        case "Home":
          o = p, a = !0;
          break;
        case "End":
          o = k, a = !0;
          break;
        case "PageDown":
          if (T.length > 0) {
            const u = T.findIndex(
              ($) => Math.abs($ - M) < 1e-4
            ), h = Math.max(0, u - 10);
            o = T[h];
          }
          a = !0;
          break;
        case "PageUp":
          if (T.length > 0) {
            const u = T.findIndex(
              ($) => Math.abs($ - M) < 1e-4
            ), h = Math.min(
              T.length - 1,
              u + 10
            );
            o = T[h];
          }
          a = !0;
          break;
      }
      a && (n.preventDefault(), n.stopPropagation(), o = Math.max(p, Math.min(k, o)), _(o), P && B(o));
    },
    [
      e.isEditing,
      b,
      M,
      T,
      p,
      k,
      P,
      B
    ]
  ), se = (n, o, a) => {
    Y(($) => ({
      ...$,
      [n]: {
        ...$[n] || {},
        [o]: a
      }
    }));
    const u = y[n], h = o === "whole" ? u.wholeVariable : o === "numerator" ? u.numeratorVariable : u.denominatorVariable;
    if (h) {
      const $ = e.addVariable(h, a, "string");
      e.updateVariables({ [$]: a, [h]: a });
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "tw-math-number-line", ref: F?.dragRef, children: /* @__PURE__ */ r.jsxs(
    "svg",
    {
      ref: N,
      width: oe,
      height: ye,
      className: "tw-math-number-line__svg",
      onClick: at,
      children: [
        L.map((n, o) => {
          const a = J(n.start), u = J(n.end), h = Math.abs(u - a), $ = Math.min(a, u);
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: $,
              y: S - 20,
              width: h,
              height: 40,
              fill: n.color,
              opacity: 0.3
            },
            `range-${o}`
          );
        }),
        /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: O - 20,
            y1: S,
            x2: oe - O + 20,
            y2: S,
            stroke: "#333",
            strokeWidth: "2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "polygon",
          {
            points: `${O - 20},${S} ${O - 10},${S - 5} ${O - 10},${S + 5}`,
            fill: "#333"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "polygon",
          {
            points: `${oe - O + 20},${S} ${oe - O + 10},${S - 5} ${oe - O + 10},${S + 5}`,
            fill: "#333"
          }
        ),
        A.map((n, o) => {
          const a = J(n), u = Ne(n), h = u ? 15 : 10;
          return /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: a,
                y1: S - h,
                x2: a,
                y2: S + h,
                stroke: "#333",
                strokeWidth: u ? "2" : "1"
              }
            ),
            $e(n) && /* @__PURE__ */ r.jsx(
              "text",
              {
                x: a,
                y: S + 35,
                textAnchor: "middle",
                fontSize: "14",
                fill: "#333",
                children: ve(n)
              }
            )
          ] }, o);
        }),
        fe.map((n, o) => {
          const a = J(n), u = 6;
          return /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: a,
                y1: S - u,
                x2: a,
                y2: S + u,
                stroke: "#666",
                strokeWidth: "1"
              }
            ),
            $e(n) && /* @__PURE__ */ r.jsx(r.Fragment, { children: f !== "decimal" && E > 1 ? (
              // Display as visual stacked fraction
              /* @__PURE__ */ r.jsx(
                "foreignObject",
                {
                  x: a - 20,
                  y: S + 10,
                  width: "40",
                  height: "35",
                  children: /* @__PURE__ */ r.jsx(
                    Ue,
                    {
                      fraction: Ee(
                        Math.round(n * E),
                        E
                      ),
                      mixed: f === "mixed"
                    }
                  )
                }
              )
            ) : (
              // Display as text (decimal or when denominator is 1)
              /* @__PURE__ */ r.jsx(
                "text",
                {
                  x: a,
                  y: S + 35,
                  textAnchor: "middle",
                  fontSize: "12",
                  fill: "#666",
                  children: ve(n)
                }
              )
            ) })
          ] }, `frac-${o}`);
        }),
        rt.map((n, o) => {
          const a = J(n), u = 6;
          return /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: a,
                y1: S - u,
                x2: a,
                y2: S + u,
                stroke: "#666",
                strokeWidth: "1"
              }
            ),
            f !== "decimal" ? (
              // Display as visual stacked fraction
              /* @__PURE__ */ r.jsx("foreignObject", { x: a - 20, y: S + 10, width: "40", height: "35", children: /* @__PURE__ */ r.jsx(
                Ue,
                {
                  fraction: Ye(n),
                  mixed: f === "mixed"
                }
              ) })
            ) : (
              // Display as text (decimal)
              /* @__PURE__ */ r.jsx(
                "text",
                {
                  x: a,
                  y: S + 35,
                  textAnchor: "middle",
                  fontSize: "12",
                  fill: "#666",
                  children: ot(n)
                }
              )
            )
          ] }, `specific-${o}`);
        }),
        y.map((n, o) => {
          const a = K[o], u = J(a);
          return /* @__PURE__ */ r.jsx("g", { children: /* @__PURE__ */ r.jsx(
            "foreignObject",
            {
              x: u - 60,
              y: S - 150,
              width: "120",
              height: "150",
              children: /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__custom-label", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__custom-label-frame", children: [
                  /* @__PURE__ */ r.jsx("div", { children: n.text }),
                  n.inputMode && n.inputMode !== "none" && /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__custom-label-inputs", children: [
                    n.inputMode === "whole" && /* @__PURE__ */ r.jsx(
                      "input",
                      {
                        type: "text",
                        value: W[o]?.whole || "",
                        onChange: (h) => se(
                          o,
                          "whole",
                          h.target.value
                        ),
                        className: "tw-math-number-line__label-input tw-math-number-line__label-input--whole",
                        placeholder: "?"
                      }
                    ),
                    n.inputMode === "fraction" && /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__label-fraction", children: [
                      /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          type: "text",
                          value: W[o]?.numerator || "",
                          onChange: (h) => se(
                            o,
                            "numerator",
                            h.target.value
                          ),
                          className: "tw-math-number-line__label-input",
                          placeholder: "?"
                        }
                      ),
                      /* @__PURE__ */ r.jsx("div", { className: "tw-math-number-line__label-bar" }),
                      /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          type: "text",
                          value: W[o]?.denominator || "",
                          onChange: (h) => se(
                            o,
                            "denominator",
                            h.target.value
                          ),
                          className: "tw-math-number-line__label-input",
                          placeholder: "?"
                        }
                      )
                    ] }),
                    n.inputMode === "mixed" && /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__label-mixed", children: [
                      /* @__PURE__ */ r.jsx(
                        "input",
                        {
                          type: "text",
                          value: W[o]?.whole || "",
                          onChange: (h) => se(
                            o,
                            "whole",
                            h.target.value
                          ),
                          className: "tw-math-number-line__label-input tw-math-number-line__label-input--mixed-whole",
                          placeholder: "?"
                        }
                      ),
                      /* @__PURE__ */ r.jsxs("div", { className: "tw-math-number-line__label-fraction", children: [
                        /* @__PURE__ */ r.jsx(
                          "input",
                          {
                            type: "text",
                            value: W[o]?.numerator || "",
                            onChange: (h) => se(
                              o,
                              "numerator",
                              h.target.value
                            ),
                            className: "tw-math-number-line__label-input tw-math-number-line__label-input--narrow",
                            placeholder: "?"
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { className: "tw-math-number-line__label-bar" }),
                        /* @__PURE__ */ r.jsx(
                          "input",
                          {
                            type: "text",
                            value: W[o]?.denominator || "",
                            onChange: (h) => se(
                              o,
                              "denominator",
                              h.target.value
                            ),
                            className: "tw-math-number-line__label-input tw-math-number-line__label-input--narrow",
                            placeholder: "?"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ r.jsx("div", { className: "tw-math-number-line__custom-label-pointer" })
              ] })
            }
          ) }, `custom-${o}`);
        }),
        C && /* @__PURE__ */ r.jsxs("g", { children: [
          D && !e.isEditing && /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: J(M),
              cy: S,
              r: "12",
              fill: "none",
              stroke: "#3b82f6",
              strokeWidth: "2",
              opacity: "0.6"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              ref: I,
              cx: J(M),
              cy: S,
              r: "8",
              fill: "#a855f7",
              stroke: "#6b21a8",
              strokeWidth: "2",
              className: b && !e.isEditing ? "tw-math-number-line__point tw-math-number-line__point--draggable" : "tw-math-number-line__point",
              onMouseDown: st,
              onKeyDown: it,
              onFocus: () => V(!0),
              onBlur: () => V(!1),
              tabIndex: !e.isEditing && b ? 0 : void 0,
              role: "slider",
              "aria-label": "Number line point",
              "aria-valuemin": p,
              "aria-valuemax": k,
              "aria-valuenow": M,
              "aria-valuetext": ve(M)
            }
          )
        ] })
      ]
    }
  ) });
}, Gt = {
  usagePrompt: "Display an interactive number line with configurable range, increments, labels, and optional draggable/clickable points. Supports whole numbers, decimals, and fractions with various display modes.",
  // Every field is declared statically so the AI manifest and server-side
  // validation see all props; resolveFields only hides conditional ones.
  fields: {
    start: {
      type: "numericExpression",
      label: "Start Value"
    },
    end: {
      type: "numericExpression",
      label: "End Value"
    },
    increment: {
      type: "numericExpression",
      label: "Increment"
    },
    labelMode: {
      type: "select",
      label: "Label Mode",
      options: [
        { label: "Show All Labels", value: "all" },
        { label: "Show Only Whole Numbers", value: "whole-only" },
        { label: "No Labels", value: "none" }
      ]
    },
    specificLabels: {
      type: "text",
      label: "Specific Label Positions (comma-separated)"
    },
    fractionDisplay: {
      type: "select",
      label: "Fraction Display Mode",
      options: [
        { label: "Decimal", value: "decimal" },
        { label: "Improper Fraction (5/4)", value: "improper" },
        { label: "Mixed Fraction (1 1/4)", value: "mixed" }
      ]
    },
    denominator: {
      type: "numericExpression",
      label: "Denominator (for fractions)"
    },
    showPoint: {
      type: "radio",
      label: "Show Interactive Point",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    draggable: {
      type: "radio",
      label: "Allow Dragging and Clicking to Move Point",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    pointPosition: {
      type: "numericExpression",
      label: "Point Position"
    },
    pointVariable: {
      type: "variable",
      label: "Variable Name for Point Position"
    },
    customLabels: {
      type: "array",
      label: "Custom Labels Above Line",
      arrayFields: {
        position: {
          type: "numericExpression",
          label: "Position"
        },
        text: {
          type: "text",
          label: "Label Text"
        },
        inputMode: {
          type: "select",
          label: "Student Input Mode",
          options: [
            { label: "None", value: "none" },
            { label: "Whole Number", value: "whole" },
            { label: "Fraction (Numerator/Denominator)", value: "fraction" },
            { label: "Mixed Number", value: "mixed" }
          ]
        },
        // Used when inputMode is "whole" or "mixed"
        wholeVariable: {
          type: "variable",
          label: "Variable for Whole Number"
        },
        // Used when inputMode is "fraction" or "mixed"
        numeratorVariable: {
          type: "variable",
          label: "Variable for Numerator"
        },
        denominatorVariable: {
          type: "variable",
          label: "Variable for Denominator"
        }
      }
    },
    ranges: {
      type: "array",
      label: "Ranges (colored rectangles)",
      arrayFields: {
        start: {
          type: "numericExpression",
          label: "Range Start"
        },
        end: {
          type: "numericExpression",
          label: "Range End"
        },
        colorPalette: {
          type: "select",
          label: "Color Palette",
          options: U.map((e, t) => ({
            label: e.name,
            value: t
          }))
        }
      }
    },
    height: {
      type: "numericExpression",
      label: "Height (pixels)"
    }
  },
  resolveFields: (e, { fields: t }) => {
    const s = e?.props || {}, i = { ...t };
    return s.showPoint || (delete i.draggable, delete i.pointPosition, delete i.pointVariable), i;
  },
  defaultProps: {
    start: "0",
    end: "10",
    increment: "1",
    labelMode: "all",
    specificLabels: "",
    fractionDisplay: "decimal",
    denominator: "1",
    customLabels: [],
    showPoint: !1,
    draggable: !0,
    pointPosition: "0",
    pointVariable: "pointPosition",
    height: "120",
    ranges: []
  },
  render: Yt
}, Ut = "world";
be({
  name: "FractionBar",
  description: "Visual fraction representation using horizontal bars with customizable numerators and denominators",
  icon: wt,
  config: Pe(zt),
  category: "Math"
});
be({
  name: "FractionPie",
  description: "Interactive pie chart for visualizing fractions with slices and shading",
  icon: gt,
  config: Bt,
  category: "Math"
});
be({
  name: "SetVisual",
  description: "Display mathematical sets with visual grouping and counting elements",
  icon: pt,
  config: Pe(Ht),
  category: "Math"
});
be({
  name: "NumberLine",
  description: "Visual number line with markers, ranges, and customizable intervals",
  icon: vt,
  config: Pe(Gt),
  category: "Math"
});
console.info("🧮 Math widgets loaded successfully!");
export {
  Ut as hello
};
//# sourceMappingURL=widget.js.map
