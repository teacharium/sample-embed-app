import { forwardRef as Je, createElement as Le, useState as q, useRef as re, useEffect as he, useCallback as K } from "react";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), lt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, i, d) => d ? d.toUpperCase() : i.toLowerCase()
), _e = (e) => {
  const n = lt(e);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, Qe = (...e) => e.filter((n, i, d) => !!n && n.trim() !== "" && d.indexOf(n) === i).join(" ").trim(), ct = (e) => {
  for (const n in e)
    if (n.startsWith("aria-") || n === "role" || n === "title")
      return !0;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dt = {
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
const ut = Je(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: d,
    className: c = "",
    children: l,
    iconNode: h,
    ...f
  }, b) => Le(
    "svg",
    {
      ref: b,
      ...dt,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: d ? Number(i) * 24 / Number(n) : i,
      className: Qe("lucide", c),
      ...!l && !ct(f) && { "aria-hidden": "true" },
      ...f
    },
    [
      ...h.map(([v, p]) => Le(v, p)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = (e, n) => {
  const i = Je(
    ({ className: d, ...c }, l) => Le(ut, {
      ref: l,
      iconNode: n,
      className: Qe(
        `lucide-${at(_e(e))}`,
        `lucide-${e}`,
        d
      ),
      ...c
    })
  );
  return i.displayName = _e(e), i;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = [
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
], ht = me("boxes", ft);
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
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], xt = me("chart-pie", mt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
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
], gt = me("ruler", pt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], yt = me("sliders-horizontal", bt);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
], wt = me("square-split-horizontal", vt), xe = (e) => {
  window.TeachariumComponents = window.TeachariumComponents || {}, window.TeachariumComponents[e.name] = e;
};
var Be = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function jt() {
  if (Oe) return ue;
  Oe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(d, c, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      l = {};
      for (var f in c)
        f !== "key" && (l[f] = c[f]);
    } else l = c;
    return c = l.ref, {
      $$typeof: e,
      type: d,
      key: h,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return ue.Fragment = n, ue.jsx = i, ue.jsxs = i, ue;
}
var De;
function kt() {
  return De || (De = 1, Be.exports = jt()), Be.exports;
}
var Ve = kt();
const Mt = {
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
}, Ct = ({ margin: e, children: n }) => {
  const i = {};
  return e && (i.padding = `${e}px`), /* @__PURE__ */ Ve.jsx("div", { style: i, children: n });
}, ve = (e) => {
  const n = e.render;
  return {
    ...e,
    render: (i) => /* @__PURE__ */ Ve.jsx(Ct, { ...i, children: /* @__PURE__ */ Ve.jsx(n, { ...i }) }),
    fields: {
      ...e.fields,
      ...Mt
    }
  };
};
var Pe = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Nt() {
  if (qe) return fe;
  qe = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function i(d, c, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      l = {};
      for (var f in c)
        f !== "key" && (l[f] = c[f]);
    } else l = c;
    return c = l.ref, {
      $$typeof: e,
      type: d,
      key: h,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return fe.Fragment = n, fe.jsx = i, fe.jsxs = i, fe;
}
var He;
function St() {
  return He || (He = 1, Pe.exports = Nt()), Pe.exports;
}
var t = St();
const Ye = "Work Sans, sans-serif";
var $e, Ge;
function Et() {
  if (Ge) return $e;
  Ge = 1;
  var e = "Expected a function", n = NaN, i = "[object Symbol]", d = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, h = /^0o[0-7]+$/i, f = parseInt, b = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis, v = typeof self == "object" && self && self.Object === Object && self, p = b || v || Function("return this")(), j = Object.prototype, y = j.toString, m = Math.max, N = Math.min, E = function() {
    return p.Date.now();
  };
  function w(g, k, S) {
    var C, z, H, I, V, F, R = 0, B = !1, A = !1, X = !0;
    if (typeof g != "function")
      throw new TypeError(e);
    k = W(k) || 0, M(S) && (B = !!S.leading, A = "maxWait" in S, H = A ? m(W(S.maxWait) || 0, k) : H, X = "trailing" in S ? !!S.trailing : X);
    function Z(T) {
      var _ = C, Y = z;
      return C = z = void 0, R = T, I = g.apply(Y, _), I;
    }
    function we(T) {
      return R = T, V = setTimeout(ee, k), B ? Z(T) : I;
    }
    function je(T) {
      var _ = T - F, Y = T - R, P = k - _;
      return A ? N(P, H - Y) : P;
    }
    function pe(T) {
      var _ = T - F, Y = T - R;
      return F === void 0 || _ >= k || _ < 0 || A && Y >= H;
    }
    function ee() {
      var T = E();
      if (pe(T))
        return ie(T);
      V = setTimeout(ee, je(T));
    }
    function ie(T) {
      return V = void 0, X && C ? Z(T) : (C = z = void 0, I);
    }
    function ae() {
      V !== void 0 && clearTimeout(V), R = 0, C = F = z = V = void 0;
    }
    function le() {
      return V === void 0 ? I : ie(E());
    }
    function ne() {
      var T = E(), _ = pe(T);
      if (C = arguments, z = this, F = T, _) {
        if (V === void 0)
          return we(F);
        if (A)
          return V = setTimeout(ee, k), Z(F);
      }
      return V === void 0 && (V = setTimeout(ee, k)), I;
    }
    return ne.cancel = ae, ne.flush = le, ne;
  }
  function M(g) {
    var k = typeof g;
    return !!g && (k == "object" || k == "function");
  }
  function O(g) {
    return !!g && typeof g == "object";
  }
  function L(g) {
    return typeof g == "symbol" || O(g) && y.call(g) == i;
  }
  function W(g) {
    if (typeof g == "number")
      return g;
    if (L(g))
      return n;
    if (M(g)) {
      var k = typeof g.valueOf == "function" ? g.valueOf() : g;
      g = M(k) ? k + "" : k;
    }
    if (typeof g != "string")
      return g === 0 ? g : +g;
    g = g.replace(d, "");
    var S = l.test(g);
    return S || h.test(g) ? f(g.slice(2), S ? 2 : 8) : c.test(g) ? n : +g;
  }
  return $e = w, $e;
}
Et();
function Pt() {
  const e = re(!1);
  return he(() => (e.current = !0, () => {
    e.current = !1;
  }), []), K(() => e.current, []);
}
var Xe = {
  width: void 0,
  height: void 0
};
function Ke(e) {
  const { ref: n, box: i = "content-box" } = e, [{ width: d, height: c }, l] = q(Xe), h = Pt(), f = re({ ...Xe }), b = re(void 0);
  return b.current = e.onResize, he(() => {
    if (!n.current || typeof window > "u" || !("ResizeObserver" in window))
      return;
    const v = new ResizeObserver(([p]) => {
      const j = i === "border-box" ? "borderBoxSize" : i === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", y = Ze(p, j, "inlineSize"), m = Ze(p, j, "blockSize");
      if (f.current.width !== y || f.current.height !== m) {
        const E = { width: y, height: m };
        f.current.width = y, f.current.height = m, b.current ? b.current(E) : h() && l(E);
      }
    });
    return v.observe(n.current, { box: i }), () => {
      v.disconnect();
    };
  }, [i, n, h]), { width: d, height: c };
}
function Ze(e, n, i) {
  return e[n] ? Array.isArray(e[n]) ? e[n][0][i] : (
    // @ts-ignore Support Firefox's non-standard behavior
    e[n][i]
  ) : n === "contentBoxSize" ? e.contentRect[i === "inlineSize" ? "width" : "height"] : void 0;
}
const te = 2, $t = 7.5, Lt = ({
  api: e,
  segments: n = []
}) => {
  if (!e)
    throw new Error("AdvancedFractionBar: api is required");
  const i = re(null), [d, c] = q(0), [l, h] = q(0);
  Ke({
    ref: i,
    onResize: ({ width: j, height: y }) => {
      j && j > 0 && c(j), y && y > 0 && h(y);
    }
  });
  const f = te, b = te;
  let v = 0;
  const p = n.map((j, y) => {
    let m = d / (j.denominator || 2);
    y === n.length - 1 && (m = d - v), m = Math.max(0, m);
    const N = {
      x: f + v,
      y: b,
      width: y === n.length - 1 ? m - te * 2 : m - te,
      height: l - te * 2,
      denominator: j.denominator || 2,
      filled: !0,
      labeled: j.labeled || !1,
      textColor: j.textColor || "#fff",
      fillColor: j.fillColor || "#f00",
      strokeColor: j.strokeColor || "#777"
      // Default from schema
    };
    return v += m, /* @__PURE__ */ t.jsx(Vt, { ...N }, y);
  });
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: i,
      style: { width: "100%", height: "100%" },
      "data-testid": "adv-fraction-bar-container",
      children: /* @__PURE__ */ t.jsxs(
        "svg",
        {
          width: "100%",
          height: "100%",
          "data-testid": "advanced-fraction-bar-svg",
          children: [
            d > 0 && l > 0 && /* @__PURE__ */ t.jsx(
              "rect",
              {
                x: 0,
                y: 0,
                width: d,
                height: l,
                fill: "var(--tool-border-color)"
              }
            ),
            p
          ]
        }
      )
    }
  );
}, Vt = ({
  x: e,
  y: n,
  width: i,
  height: d,
  denominator: c,
  filled: l,
  labeled: h = !1,
  textColor: f = "#fff",
  fillColor: b = "var(--tool-1-color)",
  strokeColor: v = "var(--tool-border-color)"
}) => {
  if (i <= 0) return null;
  const p = f, j = h && i >= $t, y = d * 0.3, m = e + i / 2, N = n + d / 2, E = N - d * 0.15, w = N + d * 0.05, M = N + d * 0.25, O = Math.min(i * 0.5, y * 1.5);
  return /* @__PURE__ */ t.jsxs("g", { "data-testid": `segment-${e}-${n}`, children: [
    /* @__PURE__ */ t.jsx(
      "rect",
      {
        x: e,
        y: n,
        width: i,
        height: d,
        fill: l ? b : "none",
        stroke: v,
        strokeWidth: te
      }
    ),
    j && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        "text",
        {
          x: m,
          y: E,
          fill: p,
          style: {
            fontFamily: Ye,
            fontWeight: 600,
            fontSize: `${y}px`
          },
          textAnchor: "middle",
          dominantBaseline: "middle",
          children: "1"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "line",
        {
          x1: m - O / 2,
          x2: m + O / 2,
          y1: w,
          y2: w,
          stroke: p,
          strokeWidth: te
        }
      ),
      /* @__PURE__ */ t.jsx(
        "text",
        {
          x: m,
          y: M,
          fill: p,
          style: {
            fontFamily: Ye,
            fontWeight: 600,
            fontSize: `${y}px`
          },
          textAnchor: "middle",
          dominantBaseline: "middle",
          children: c
        }
      )
    ] })
  ] });
}, J = [
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
], Rt = {
  sm: { width: "100%", height: 32 },
  med: { width: "100%", height: 64 },
  lg: { width: "100%", height: 96 }
}, Tt = ({
  api: e,
  segments: n = "3",
  filled: i = "0",
  colorPalette: d = 0,
  showLabels: c = !0,
  showEmptyLabels: l = !1,
  size: h = "med"
}) => {
  if (!e)
    throw new Error("FractionBar: api is required");
  const [f, b] = e.hooks.useNumberExpressions(
    [n, i],
    [3, 0]
  ), v = Math.min(b, f), p = J[d] || J[0], j = Array(f).fill(0).map((y, m) => ({
    denominator: f,
    labeled: m < v ? c : l,
    fillColor: m < v ? p.backgroundColor : p.emptyBackgroundColor,
    filled: m < v,
    strokeColor: "#888",
    textColor: m < v ? p.textColor : p.emptyTextColor
  }));
  return /* @__PURE__ */ t.jsx("div", { style: Rt[h], children: /* @__PURE__ */ t.jsx(Lt, { api: e, segments: j }) });
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
      options: J.map((e, n) => ({
        label: e.name,
        value: n
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
  render: Tt
}, Ft = {
  sm: { width: "100%", minWidth: 192, height: 96 },
  med: { width: "100%", minWidth: 288, height: 192 },
  lg: { width: "100%", minWidth: 384, height: 288 }
}, It = ({
  api: e,
  segments: n = "2",
  filled: i = "1",
  colorPalette: d = 0,
  size: c = "med"
}) => {
  if (!e)
    throw new Error("FractionPie: api is required");
  const l = re(null), [h, f] = q(0), [b, v] = q(0), [p, j] = e.hooks.useNumberExpressions(
    [n, i],
    [2, 1]
  ), y = Math.min(j, p);
  Ke({
    ref: l,
    onResize: ({ width: L, height: W }) => {
      f(L || 0), v(W || 0);
    }
  });
  const m = J[d] || J[0], N = Math.min(h, b), E = Math.max(0, N / 2 - 2), w = h / 2, M = b / 2, O = Array(p).fill(0);
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      ref: l,
      style: Ft[c],
      "data-testid": "fraction-pie-container",
      children: /* @__PURE__ */ t.jsxs(
        "svg",
        {
          width: h,
          height: b,
          "data-testid": "fraction-pie-svg",
          children: [
            E > 0 && /* @__PURE__ */ t.jsx(
              "circle",
              {
                r: E,
                fill: "#fff",
                cx: w,
                cy: M,
                strokeWidth: 0
              }
            ),
            p === 1 ? (
              // Draw a single filled or empty circle, no dividers
              /* @__PURE__ */ t.jsx(
                "circle",
                {
                  r: E,
                  cx: w,
                  cy: M,
                  fill: y > 0 ? m.backgroundColor : "#fff",
                  stroke: y > 0 ? "none" : "#888",
                  strokeWidth: y > 0 ? 0 : 2
                }
              )
            ) : O.map((L, W) => /* @__PURE__ */ t.jsx(
              Wt,
              {
                x: w,
                y: M,
                strokeColor: "#888",
                radius: E,
                index: W,
                fillColor: W < y ? m.backgroundColor : m.emptyBackgroundColor,
                segments: p,
                filled: W < y,
                textColor: W < y ? m.textColor : m.emptyTextColor
              },
              W
            ))
          ]
        }
      )
    }
  );
}, At = (e, n, i, d, c) => {
  const l = e + c * Math.cos(Math.PI * i / 180), h = n + c * Math.sin(Math.PI * i / 180), f = e + c * Math.cos(Math.PI * d / 180), b = n + c * Math.sin(Math.PI * d / 180);
  return `M${e}  ${n} L${l} ${h} A${c} ${c} 0 0 1 ${f} ${b} z`;
}, Wt = ({
  x: e,
  y: n,
  index: i,
  segments: d,
  radius: c,
  filled: l,
  fillColor: h = "#f00",
  strokeColor: f = "#eee"
}) => {
  const b = 360 / d, v = i * b - 90, p = v + b, j = At(e, n, v, p, c);
  return /* @__PURE__ */ t.jsx("g", { children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: j,
      fill: l ? h : "none",
      stroke: f,
      shapeRendering: "geometricPrecision"
    }
  ) });
}, _t = {
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
      options: J.map((e, n) => ({
        label: e.name,
        value: n
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
  render: It
}, U = {
  green: "#00b159",
  blue: "#00aedb",
  orange: "#f37735",
  empty: "#f8f9fa",
  border: "#9d9fa2ff"
}, Bt = {
  small: 40,
  medium: 70,
  large: 100
}, Ot = ({
  api: e,
  rows: n = "3",
  columns: i = "3",
  greenCircles: d = "0",
  blueSquares: c = "0",
  orangeTriangles: l = "0",
  size: h = "medium",
  showGrid: f = !0
}) => {
  if (!e)
    throw new Error("SetVisual: api is required");
  const [b, v, p, j, y] = e.hooks.useNumberExpressions(
    [n, i, d, c, l],
    [3, 3, 0, 0, 0]
  ), m = Bt[h], N = 20, E = v * m + N * 2, w = b * m + N * 2, M = m, O = m, L = m * 0.7, W = p + j + y, g = () => {
    const S = [];
    for (let C = 0; C <= v; C++) {
      const z = N + C * M;
      S.push(
        /* @__PURE__ */ t.jsx(
          "line",
          {
            x1: z,
            y1: N,
            x2: z,
            y2: w - N,
            stroke: U.border,
            strokeWidth: "1",
            opacity: "0.3",
            shapeRendering: "crispEdges",
            vectorEffect: "non-scaling-stroke"
          },
          `v-${C}`
        )
      );
    }
    for (let C = 0; C <= b; C++) {
      const z = N + C * O;
      S.push(
        /* @__PURE__ */ t.jsx(
          "line",
          {
            x1: N,
            y1: z,
            x2: E - N,
            y2: z,
            stroke: U.border,
            strokeWidth: "1",
            opacity: "0.3",
            shapeRendering: "crispEdges",
            vectorEffect: "non-scaling-stroke"
          },
          `h-${C}`
        )
      );
    }
    return S;
  }, k = () => {
    const S = [];
    let C = 0;
    for (let z = 0; z < b; z++)
      for (let H = 0; H < v; H++) {
        const I = N + H * M + M / 2, V = N + z * O + O / 2;
        let F = "empty", R = U.empty;
        C < p ? (F = "circle", R = U.green) : C < p + j ? (F = "square", R = U.blue) : C < p + j + y && (F = "triangle", R = U.orange);
        const B = `${z}-${H}`;
        if (F === "circle")
          S.push(
            /* @__PURE__ */ t.jsx(
              "circle",
              {
                cx: I,
                cy: V,
                r: L / 2,
                fill: R,
                stroke: U.border,
                strokeWidth: "1"
              },
              B
            )
          );
        else if (F === "square")
          S.push(
            /* @__PURE__ */ t.jsx(
              "rect",
              {
                x: I - L / 2,
                y: V - L / 2,
                width: L,
                height: L,
                fill: R,
                stroke: U.border,
                strokeWidth: "1"
              },
              B
            )
          );
        else if (F === "triangle") {
          const A = L / 2, X = Math.sqrt(3) / 2 * L, Z = [
            `${I},${V - X / 2}`,
            `${I - A},${V + X / 2}`,
            `${I + A},${V + X / 2}`
          ].join(" ");
          S.push(
            /* @__PURE__ */ t.jsx(
              "polygon",
              {
                points: Z,
                fill: R,
                stroke: U.border,
                strokeWidth: "1"
              },
              B
            )
          );
        }
        C < W && C++;
      }
    return S;
  };
  return /* @__PURE__ */ t.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ t.jsx("div", { className: "inline-block", children: /* @__PURE__ */ t.jsxs(
    "svg",
    {
      width: E,
      height: w,
      viewBox: `0 0 ${E} ${w}`,
      className: "border border-gray-200 rounded-lg bg-white",
      children: [
        f && g(),
        k()
      ]
    }
  ) }) });
}, Dt = {
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
  render: Ot
}, qt = ({
  api: e,
  value: n = "1",
  minValue: i = "0",
  maxValue: d = "100",
  stepSize: c = "1",
  readonly: l = !1,
  puck: h
}) => {
  if (!e)
    throw new Error("Slider: api is required");
  const [f, b, v, p] = e.hooks.useNumberExpressions(
    [n, i, d, c],
    [1, 0, 100, 1]
  ), [j, y] = q(f), [m] = q(() => e.addVariable("sliderValue", f, "number"));
  he(() => {
    y(f), e.updateVariables({ [m]: f });
  }, [f, m, e.updateVariables]);
  const N = (E) => {
    if (!l) {
      const w = E[0];
      y(w), e.updateVariables({ [m]: w });
    }
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "w-full h-full flex items-center p-4 max-h-24",
      ref: h?.dragRef,
      children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "range",
            value: j,
            min: b,
            max: v,
            step: p,
            onChange: (E) => N([parseFloat(E.target.value)]),
            disabled: l,
            className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer",
            style: {
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(j - b) / (v - b) * 100}%, #e5e7eb ${(j - b) / (v - b) * 100}%, #e5e7eb 100%)`
            }
          }
        ),
        /* @__PURE__ */ t.jsx("span", { className: "ml-4 text-sm font-medium text-gray-700 min-w-[3rem]", children: j })
      ]
    }
  );
}, Ht = {
  usagePrompt: "Provide an interactive slider that updates a lesson variable as learners adjust the value within configured bounds.",
  fields: {
    value: {
      type: "numericExpression",
      label: "Initial Value"
    },
    minValue: {
      type: "numericExpression",
      label: "Minimum Value"
    },
    maxValue: {
      type: "numericExpression",
      label: "Maximum Value"
    },
    stepSize: {
      type: "numericExpression",
      label: "Step Size"
    },
    readonly: {
      type: "radio",
      label: "Read Only",
      options: [
        { label: "False", value: !1 },
        { label: "True", value: !0 }
      ]
    }
  },
  defaultProps: {
    value: "1",
    minValue: "0",
    maxValue: "100",
    stepSize: "1",
    readonly: !1,
    type: "slider"
  },
  render: qt
};
function Yt(e) {
  return e.split(",").map((n) => {
    const i = n.trim();
    if (i.includes("/")) {
      const d = i.split("/");
      if (d.length === 2) {
        const c = parseFloat(d[0].trim()), l = parseFloat(d[1].trim());
        if (!isNaN(c) && !isNaN(l) && l !== 0)
          return c / l;
      }
    }
    return parseFloat(i);
  }).filter((n) => !isNaN(n));
}
function et(e, n) {
  return n === 0 ? e : et(n, e % n);
}
function Re(e, n) {
  const i = et(Math.abs(e), Math.abs(n));
  return [e / i, n / i];
}
function Te(e, n = 1e-4) {
  return Math.abs(e - Math.round(e)) < n;
}
function Ue(e, n = 100) {
  if (Te(e))
    return [Math.round(e), 1];
  let i = 0, d = 1, c = Math.abs(e);
  for (let l = 1; l <= n; l++) {
    const h = Math.round(e * l), f = Math.abs(e - h / l);
    if (f < c && (c = f, i = h, d = l), f < 1e-4)
      break;
  }
  return Re(i, d);
}
const Gt = ({
  api: e,
  start: n = "0",
  end: i = "10",
  increment: d = "1",
  labelMode: c = "all",
  specificLabels: l = "",
  fractionDisplay: h = "decimal",
  denominator: f = "1",
  customLabels: b = [],
  showPoint: v = !1,
  draggable: p = !0,
  pointPosition: j = "0",
  pointVariable: y = "",
  height: m = "120",
  ranges: N = [],
  puck: E
}) => {
  if (!e)
    throw new Error("NumberLine: api is required");
  const [
    w,
    M,
    O,
    L,
    W,
    g
  ] = e.hooks.useNumberExpressions(
    [n, i, d, f, m, j],
    [0, 10, 1, 1, 120, 0]
  ), [k, S] = q(
    g
  ), [C, z] = q(!1), [H, I] = q(!1), V = re(null), F = re(null), [R] = q(() => v && y ? e.addVariable(y, g, "number") : null), B = K(
    (r) => {
      R && e.updateVariables({
        [R]: r,
        ...y ? { [y]: r } : {}
      });
    },
    [e, R, y]
  ), [A, X] = q({}), Z = 20, we = Array.from(
    { length: Z },
    (r, s) => (b || [])[s]?.position || "0"
  ), je = Array.from(
    { length: Z },
    () => w
  ), pe = e.hooks.useNumberExpressions(
    we,
    je
  ), ee = [];
  for (let r = 0; r < Z; r++)
    (b || [])[r] && (ee[r] = pe[r]);
  const ie = 10, ae = [], le = [];
  for (let r = 0; r < ie; r++) {
    const s = (N || [])[r];
    ae.push(s?.start || "0"), ae.push(s?.end || "0"), le.push(w), le.push(M);
  }
  const ne = e.hooks.useNumberExpressions(
    ae,
    le
  ), T = [];
  for (let r = 0; r < ie; r++) {
    const s = (N || [])[r];
    if (s) {
      const o = s.colorPalette ?? 1, a = J[o] || J[1];
      T[r] = {
        start: ne[r * 2],
        end: ne[r * 2 + 1],
        color: a.backgroundColor
      };
    }
  }
  he(() => {
    S(g);
  }, [g]);
  const _ = [];
  for (let r = w; r <= M + 1e-4; r += O)
    _.push(r);
  const Y = [];
  if (L > 1) {
    const r = Math.floor(w), s = Math.ceil(M), o = 1 / L;
    for (let a = r; a <= s; a++)
      for (let u = 1; u < L; u++) {
        const x = a + u * o;
        x >= w && x <= M && (_.some(
          (ce) => Math.abs(ce - x) < 1e-4
        ) || Y.push(x));
      }
  }
  const P = [..._, ...Y].sort(
    (r, s) => r - s
  ), ze = l ? Yt(l) : [], tt = ze.filter((r) => {
    const s = _.some((a) => Math.abs(a - r) < 1e-4), o = Y.some(
      (a) => Math.abs(a - r) < 1e-4
    );
    return !s && !o;
  }), Fe = (r) => ze.some(
    (o) => Math.abs(o - r) < 1e-4
  ) ? !0 : c === "none" ? !1 : c === "all" ? !0 : c === "whole-only" ? Te(r) : !1, ke = (r) => {
    if (h === "decimal" || L === 1)
      return r.toFixed(2).replace(/\.?0+$/, "");
    const s = Math.round(r * L), [o, a] = Re(
      s,
      L
    );
    if (o % a === 0)
      return (o / a).toString();
    if (h === "improper")
      return `${o}/${a}`;
    const u = Math.floor(o / a), x = o % a;
    return u === 0 ? `${x}/${a}` : `${u} ${x}/${a}`;
  }, rt = (r) => {
    if (h === "decimal")
      return r.toFixed(2).replace(/\.?0+$/, "");
    const [s, o] = Ue(r);
    if (s % o === 0)
      return (s / o).toString();
    if (h === "improper")
      return `${s}/${o}`;
    const a = Math.floor(s / o), u = s % o;
    return a === 0 ? `${u}/${o}` : `${a} ${u}/${o}`;
  }, D = 60, se = 800, Ie = b.length > 0 ? 150 : 25, Ae = 50, Me = Math.max(W, Ie + Ae), $ = Math.min(
    Math.max(Me / 2, Ie),
    Me - Ae
  ), Ce = se - D * 2, Q = (r) => {
    const s = M - w, o = (r - w) / s;
    return D + o * Ce;
  }, ge = K(
    (r) => {
      const s = (r - D) / Ce, o = M - w;
      let a = w + s * o;
      return a = Math.max(w, Math.min(M, a)), a;
    },
    [D, Ce, w, M]
  ), We = K(
    (r) => {
      let s = ge(r);
      if (P.length > 0) {
        let o = P[0], a = Math.abs(s - o);
        for (const u of P) {
          const x = Math.abs(s - u);
          x < a && (a = x, o = u);
        }
        s = o;
      }
      return s = Math.max(w, Math.min(M, s)), s;
    },
    [ge, P, w, M]
  ), nt = (r) => {
    !p || e.isEditing || (z(!0), r.preventDefault());
  }, Ne = K(
    (r) => {
      if (!C || !V.current) return;
      const s = V.current.getBoundingClientRect(), o = r.clientX - s.left, a = ge(o);
      S(a);
    },
    [C, ge]
  ), Se = K(() => {
    z(!1);
    let r = k;
    if (P.length > 0) {
      let o = P[0], a = Math.abs(k - o);
      for (const u of P) {
        const x = Math.abs(k - u);
        x < a && (a = x, o = u);
      }
      r = o;
    }
    const s = Math.max(w, Math.min(M, r));
    S(s), R && B(s);
  }, [
    k,
    P,
    w,
    M,
    R,
    B
  ]);
  he(() => {
    if (C)
      return window.addEventListener("mousemove", Ne), window.addEventListener("mouseup", Se), () => {
        window.removeEventListener("mousemove", Ne), window.removeEventListener("mouseup", Se);
      };
  }, [C, Ne, Se]);
  const st = K(
    (r) => {
      if (!v || !p || e.isEditing || C) return;
      const s = V.current?.getBoundingClientRect();
      if (!s) return;
      const o = r.clientX - s.left, a = We(o);
      S(a), R && B(a);
    },
    [
      v,
      p,
      e.isEditing,
      C,
      We,
      R,
      B
    ]
  ), ot = K(
    (r) => {
      if (e.isEditing || !p) return;
      let s = k, o = !1;
      switch (r.key) {
        case "ArrowLeft":
        case "ArrowDown": {
          if (P.length > 0) {
            const a = P.filter(
              (u) => u < k - 1e-4
            );
            a.length > 0 && (s = a[a.length - 1]);
          }
          o = !0;
          break;
        }
        case "ArrowRight":
        case "ArrowUp": {
          if (P.length > 0) {
            const a = P.filter(
              (u) => u > k + 1e-4
            );
            a.length > 0 && (s = a[0]);
          }
          o = !0;
          break;
        }
        case "Home":
          s = w, o = !0;
          break;
        case "End":
          s = M, o = !0;
          break;
        case "PageDown":
          if (P.length > 0) {
            const a = P.findIndex(
              (x) => Math.abs(x - k) < 1e-4
            ), u = Math.max(0, a - 10);
            s = P[u];
          }
          o = !0;
          break;
        case "PageUp":
          if (P.length > 0) {
            const a = P.findIndex(
              (x) => Math.abs(x - k) < 1e-4
            ), u = Math.min(
              P.length - 1,
              a + 10
            );
            s = P[u];
          }
          o = !0;
          break;
      }
      o && (r.preventDefault(), r.stopPropagation(), s = Math.max(w, Math.min(M, s)), S(s), R && B(s));
    },
    [
      e.isEditing,
      p,
      k,
      P,
      w,
      M,
      R,
      B
    ]
  ), oe = (r, s, o) => {
    X((x) => ({
      ...x,
      [r]: {
        ...x[r] || {},
        [s]: o
      }
    }));
    const a = b[r], u = s === "whole" ? a.wholeVariable : s === "numerator" ? a.numeratorVariable : a.denominatorVariable;
    if (u) {
      const x = e.addVariable(u, o, "string");
      e.updateVariables({ [x]: o, [u]: o });
    }
  };
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "w-full h-full flex items-center justify-center",
      ref: E?.dragRef,
      children: /* @__PURE__ */ t.jsxs(
        "svg",
        {
          ref: V,
          width: se,
          height: Me,
          className: "select-none",
          onClick: st,
          children: [
            T.map((r, s) => {
              const o = Q(r.start), a = Q(r.end), u = Math.abs(a - o), x = Math.min(o, a);
              return /* @__PURE__ */ t.jsx(
                "rect",
                {
                  x,
                  y: $ - 20,
                  width: u,
                  height: 40,
                  fill: r.color,
                  opacity: 0.3
                },
                `range-${s}`
              );
            }),
            /* @__PURE__ */ t.jsx(
              "line",
              {
                x1: D - 20,
                y1: $,
                x2: se - D + 20,
                y2: $,
                stroke: "#333",
                strokeWidth: "2"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "polygon",
              {
                points: `${D - 20},${$} ${D - 10},${$ - 5} ${D - 10},${$ + 5}`,
                fill: "#333"
              }
            ),
            /* @__PURE__ */ t.jsx(
              "polygon",
              {
                points: `${se - D + 20},${$} ${se - D + 10},${$ - 5} ${se - D + 10},${$ + 5}`,
                fill: "#333"
              }
            ),
            _.map((r, s) => {
              const o = Q(r), a = Te(r), u = a ? 15 : 10;
              return /* @__PURE__ */ t.jsxs("g", { children: [
                /* @__PURE__ */ t.jsx(
                  "line",
                  {
                    x1: o,
                    y1: $ - u,
                    x2: o,
                    y2: $ + u,
                    stroke: "#333",
                    strokeWidth: a ? "2" : "1"
                  }
                ),
                Fe(r) && /* @__PURE__ */ t.jsx(
                  "text",
                  {
                    x: o,
                    y: $ + 35,
                    textAnchor: "middle",
                    fontSize: "14",
                    fill: "#333",
                    children: ke(r)
                  }
                )
              ] }, s);
            }),
            Y.map((r, s) => {
              const o = Q(r), a = 6;
              return /* @__PURE__ */ t.jsxs("g", { children: [
                /* @__PURE__ */ t.jsx(
                  "line",
                  {
                    x1: o,
                    y1: $ - a,
                    x2: o,
                    y2: $ + a,
                    stroke: "#666",
                    strokeWidth: "1"
                  }
                ),
                Fe(r) && /* @__PURE__ */ t.jsx(t.Fragment, { children: h !== "decimal" && L > 1 ? (
                  // Display as visual stacked fraction
                  /* @__PURE__ */ t.jsx(
                    "foreignObject",
                    {
                      x: o - 20,
                      y: $ + 10,
                      width: "40",
                      height: "35",
                      children: /* @__PURE__ */ t.jsx("div", { className: "flex flex-col items-center text-xs text-gray-600", children: (() => {
                        const u = Math.round(
                          r * L
                        ), [x, G] = Re(u, L);
                        if (x % G === 0)
                          return /* @__PURE__ */ t.jsx("div", { className: "text-center", children: x / G });
                        if (h === "mixed") {
                          const de = Math.floor(
                            x / G
                          ), ye = x % G;
                          if (de === 0) {
                            const Ee = x < 0, it = Math.abs(ye);
                            return /* @__PURE__ */ t.jsxs("div", { className: "inline-flex items-center gap-0.5", children: [
                              Ee && /* @__PURE__ */ t.jsx("span", { children: "−" }),
                              /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                                /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: it }),
                                /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400 my-0.5" }),
                                /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: G })
                              ] })
                            ] });
                          }
                          return /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-0.5", children: [
                            /* @__PURE__ */ t.jsx("span", { children: de }),
                            /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                              /* @__PURE__ */ t.jsx("div", { className: "text-[10px] leading-tight", children: Math.abs(ye) }),
                              /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400" }),
                              /* @__PURE__ */ t.jsx("div", { className: "text-[10px] leading-tight", children: G })
                            ] })
                          ] });
                        }
                        const ce = x < 0, be = Math.abs(x);
                        return /* @__PURE__ */ t.jsxs("div", { className: "inline-flex items-center gap-0.5", children: [
                          ce && /* @__PURE__ */ t.jsx("span", { children: "−" }),
                          /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                            /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: be }),
                            /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400 my-0.5" }),
                            /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: G })
                          ] })
                        ] });
                      })() })
                    }
                  )
                ) : (
                  // Display as text (decimal or when denominator is 1)
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: o,
                      y: $ + 35,
                      textAnchor: "middle",
                      fontSize: "12",
                      fill: "#666",
                      children: ke(r)
                    }
                  )
                ) })
              ] }, `frac-${s}`);
            }),
            tt.map((r, s) => {
              const o = Q(r), a = 6;
              return /* @__PURE__ */ t.jsxs("g", { children: [
                /* @__PURE__ */ t.jsx(
                  "line",
                  {
                    x1: o,
                    y1: $ - a,
                    x2: o,
                    y2: $ + a,
                    stroke: "#666",
                    strokeWidth: "1"
                  }
                ),
                h !== "decimal" ? (
                  // Display as visual stacked fraction
                  /* @__PURE__ */ t.jsx("foreignObject", { x: o - 20, y: $ + 10, width: "40", height: "35", children: /* @__PURE__ */ t.jsx("div", { className: "flex flex-col items-center text-xs text-gray-600", children: (() => {
                    const [u, x] = Ue(r);
                    if (u % x === 0)
                      return /* @__PURE__ */ t.jsx("div", { className: "text-center", children: u / x });
                    if (h === "mixed") {
                      const be = Math.floor(u / x), de = u % x;
                      if (be === 0) {
                        const ye = u < 0, Ee = Math.abs(de);
                        return /* @__PURE__ */ t.jsxs("div", { className: "inline-flex items-center gap-0.5", children: [
                          ye && /* @__PURE__ */ t.jsx("span", { children: "−" }),
                          /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                            /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: Ee }),
                            /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400 my-0.5" }),
                            /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: x })
                          ] })
                        ] });
                      }
                      return /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-0.5", children: [
                        /* @__PURE__ */ t.jsx("span", { children: be }),
                        /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                          /* @__PURE__ */ t.jsx("div", { className: "text-[10px] leading-tight", children: Math.abs(de) }),
                          /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400" }),
                          /* @__PURE__ */ t.jsx("div", { className: "text-[10px] leading-tight", children: x })
                        ] })
                      ] });
                    }
                    const G = u < 0, ce = Math.abs(u);
                    return /* @__PURE__ */ t.jsxs("div", { className: "inline-flex items-center gap-0.5", children: [
                      G && /* @__PURE__ */ t.jsx("span", { children: "−" }),
                      /* @__PURE__ */ t.jsxs("div", { className: "inline-flex flex-col items-center", children: [
                        /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: ce }),
                        /* @__PURE__ */ t.jsx("div", { className: "self-stretch h-px bg-gray-400 my-0.5" }),
                        /* @__PURE__ */ t.jsx("div", { className: "text-center leading-tight", children: x })
                      ] })
                    ] });
                  })() }) })
                ) : (
                  // Display as text (decimal)
                  /* @__PURE__ */ t.jsx(
                    "text",
                    {
                      x: o,
                      y: $ + 35,
                      textAnchor: "middle",
                      fontSize: "12",
                      fill: "#666",
                      children: rt(r)
                    }
                  )
                )
              ] }, `specific-${s}`);
            }),
            b.map((r, s) => {
              const o = ee[s], a = Q(o);
              return /* @__PURE__ */ t.jsx("g", { children: /* @__PURE__ */ t.jsx(
                "foreignObject",
                {
                  x: a - 60,
                  y: $ - 150,
                  width: "120",
                  height: "150",
                  children: /* @__PURE__ */ t.jsxs("div", { className: "h-full flex flex-col items-center justify-end pb-4", children: [
                    /* @__PURE__ */ t.jsxs("div", { className: "bg-blue-100 border-2 border-blue-500 rounded px-3 py-2 text-sm font-semibold text-blue-700 max-w-full break-words text-center flex flex-col gap-2", children: [
                      /* @__PURE__ */ t.jsx("div", { children: r.text }),
                      r.inputMode && r.inputMode !== "none" && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-center", children: [
                        r.inputMode === "whole" && /* @__PURE__ */ t.jsx(
                          "input",
                          {
                            type: "text",
                            value: A[s]?.whole || "",
                            onChange: (u) => oe(
                              s,
                              "whole",
                              u.target.value
                            ),
                            className: "w-16 h-7 px-2 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                            placeholder: "?"
                          }
                        ),
                        r.inputMode === "fraction" && /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
                          /* @__PURE__ */ t.jsx(
                            "input",
                            {
                              type: "text",
                              value: A[s]?.numerator || "",
                              onChange: (u) => oe(
                                s,
                                "numerator",
                                u.target.value
                              ),
                              className: "w-16 h-6 px-2 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                              placeholder: "?"
                            }
                          ),
                          /* @__PURE__ */ t.jsx("div", { className: "w-full h-0.5 bg-blue-500" }),
                          /* @__PURE__ */ t.jsx(
                            "input",
                            {
                              type: "text",
                              value: A[s]?.denominator || "",
                              onChange: (u) => oe(
                                s,
                                "denominator",
                                u.target.value
                              ),
                              className: "w-16 h-6 px-2 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                              placeholder: "?"
                            }
                          )
                        ] }),
                        r.inputMode === "mixed" && /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ t.jsx(
                            "input",
                            {
                              type: "text",
                              value: A[s]?.whole || "",
                              onChange: (u) => oe(
                                s,
                                "whole",
                                u.target.value
                              ),
                              className: "w-10 h-6 px-1 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                              placeholder: "?"
                            }
                          ),
                          /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center gap-0.5", children: [
                            /* @__PURE__ */ t.jsx(
                              "input",
                              {
                                type: "text",
                                value: A[s]?.numerator || "",
                                onChange: (u) => oe(
                                  s,
                                  "numerator",
                                  u.target.value
                                ),
                                className: "w-12 h-6 px-1 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                                placeholder: "?"
                              }
                            ),
                            /* @__PURE__ */ t.jsx("div", { className: "w-full h-0.5 bg-blue-500" }),
                            /* @__PURE__ */ t.jsx(
                              "input",
                              {
                                type: "text",
                                value: A[s]?.denominator || "",
                                onChange: (u) => oe(
                                  s,
                                  "denominator",
                                  u.target.value
                                ),
                                className: "w-12 h-6 px-1 text-sm border-2 border-blue-400 rounded text-center bg-white text-gray-900",
                                placeholder: "?"
                              }
                            )
                          ] })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t.jsx("div", { className: "w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-500 -mt-[2px]" })
                  ] })
                }
              ) }, `custom-${s}`);
            }),
            v && /* @__PURE__ */ t.jsxs("g", { children: [
              H && !e.isEditing && /* @__PURE__ */ t.jsx(
                "circle",
                {
                  cx: Q(k),
                  cy: $,
                  r: "12",
                  fill: "none",
                  stroke: "#3b82f6",
                  strokeWidth: "2",
                  opacity: "0.6"
                }
              ),
              /* @__PURE__ */ t.jsx(
                "circle",
                {
                  ref: F,
                  cx: Q(k),
                  cy: $,
                  r: "8",
                  fill: "#a855f7",
                  stroke: "#6b21a8",
                  strokeWidth: "2",
                  className: p && !e.isEditing ? "cursor-grab active:cursor-grabbing focus:outline-none" : "",
                  onMouseDown: nt,
                  onKeyDown: ot,
                  onFocus: () => I(!0),
                  onBlur: () => I(!1),
                  tabIndex: !e.isEditing && p ? 0 : void 0,
                  role: "slider",
                  "aria-label": "Number line point",
                  "aria-valuemin": w,
                  "aria-valuemax": M,
                  "aria-valuenow": k,
                  "aria-valuetext": ke(k)
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, Xt = {
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
          options: J.map((e, n) => ({
            label: e.name,
            value: n
          }))
        }
      }
    },
    height: {
      type: "numericExpression",
      label: "Height (pixels)"
    }
  },
  resolveFields: (e, { fields: n }) => {
    const i = e?.props || {}, d = { ...n };
    return i.showPoint || (delete d.draggable, delete d.pointPosition, delete d.pointVariable), d;
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
  render: Gt
}, Ut = "world";
xe({
  name: "FractionBar",
  description: "Visual fraction representation using horizontal bars with customizable numerators and denominators",
  icon: wt,
  config: ve(zt),
  category: "Math"
});
xe({
  name: "FractionPie",
  description: "Interactive pie chart for visualizing fractions with slices and shading",
  icon: xt,
  config: _t,
  category: "Math"
});
xe({
  name: "SetVisual",
  description: "Display mathematical sets with visual grouping and counting elements",
  icon: ht,
  config: ve(Dt),
  category: "Math"
});
window.TeachariumComponents?.Slider || xe({
  name: "Slider",
  description: "Interactive slider for selecting numerical values within a defined range",
  aiPrompt: "Creates variable named sliderValue (widget-scoped) to track the slider value.",
  icon: yt,
  config: ve(Ht),
  category: "Math"
});
xe({
  name: "NumberLine",
  description: "Visual number line with markers, ranges, and customizable intervals",
  icon: gt,
  config: ve(Xt),
  category: "Math"
});
console.info("🧮 Math widgets loaded successfully!");
export {
  Ut as hello
};
//# sourceMappingURL=teacharium-math-widgets.es.js.map
