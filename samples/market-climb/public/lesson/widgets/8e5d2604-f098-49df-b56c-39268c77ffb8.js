import * as it from "react";
import A, { forwardRef as go, createElement as Zn, isValidElement as pt, Children as pr, PureComponent as Ze, useRef as pa, useImperativeHandle as j_, useState as Mp, useCallback as $_, useEffect as Ip, useMemo as xe, cloneElement as Pe, useContext as kt, createContext as Or, Component as Z0 } from "react";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C_ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M_ = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), qh = (e) => {
  const t = M_(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, J0 = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), I_ = (e) => {
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
var k_ = {
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
const R_ = go(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: i = "",
    children: a,
    iconNode: o,
    ...u
  }, c) => Zn(
    "svg",
    {
      ref: c,
      ...k_,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: J0("lucide", i),
      ...!a && !I_(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...o.map(([s, l]) => Zn(s, l)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ni = (e, t) => {
  const r = go(
    ({ className: n, ...i }, a) => Zn(R_, {
      ref: a,
      iconNode: t,
      className: J0(
        `lucide-${C_(qh(e))}`,
        `lucide-${e}`,
        n
      ),
      ...i
    })
  );
  return r.displayName = qh(e), r;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N_ = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
], D_ = Ni("chart-column", N_);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L_ = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
], q_ = Ni("chart-line", L_);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B_ = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
], F_ = Ni("chart-pie", B_);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z_ = [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor", key: "lysivs" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor", key: "byv1b8" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor", key: "nkw3mc" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor", key: "1gjh6j" }],
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }]
], W_ = Ni("chart-scatter", z_);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U_ = [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
], K_ = Ni("radar", U_), Di = (e) => {
  window.TeachariumComponents = window.TeachariumComponents || {}, window.TeachariumComponents[e.name] = e;
};
var Bh = { exports: {} }, En = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fh;
function G_() {
  if (Fh) return En;
  Fh = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var u in i)
        u !== "key" && (a[u] = i[u]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return En.Fragment = t, En.jsx = r, En.jsxs = r, En;
}
var zh;
function H_() {
  return zh || (zh = 1, Bh.exports = G_()), Bh.exports;
}
H_();
function oe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ru = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wh;
function V_() {
  if (Wh) return jn;
  Wh = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var u in i)
        u !== "key" && (a[u] = i[u]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return jn.Fragment = t, jn.jsx = r, jn.jsxs = r, jn;
}
var Uh;
function Y_() {
  return Uh || (Uh = 1, ru.exports = V_()), ru.exports;
}
var Z = Y_();
function Q0(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Q0(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function X() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Q0(e)) && (n && (n += " "), n += t);
  return n;
}
var nu, Kh;
function Ue() {
  if (Kh) return nu;
  Kh = 1;
  var e = Array.isArray;
  return nu = e, nu;
}
var iu, Gh;
function ex() {
  if (Gh) return iu;
  Gh = 1;
  var e = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
  return iu = e, iu;
}
var au, Hh;
function xt() {
  if (Hh) return au;
  Hh = 1;
  var e = ex(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return au = r, au;
}
var ou, Vh;
function Li() {
  if (Vh) return ou;
  Vh = 1;
  var e = xt(), t = e.Symbol;
  return ou = t, ou;
}
var uu, Yh;
function X_() {
  if (Yh) return uu;
  Yh = 1;
  var e = Li(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i), c = o[i];
    try {
      o[i] = void 0;
      var s = !0;
    } catch {
    }
    var l = n.call(o);
    return s && (u ? o[i] = c : delete o[i]), l;
  }
  return uu = a, uu;
}
var cu, Xh;
function Z_() {
  if (Xh) return cu;
  Xh = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return cu = r, cu;
}
var su, Zh;
function Rt() {
  if (Zh) return su;
  Zh = 1;
  var e = Li(), t = X_(), r = Z_(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? i : n : a && a in Object(u) ? t(u) : r(u);
  }
  return su = o, su;
}
var lu, Jh;
function Nt() {
  if (Jh) return lu;
  Jh = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return lu = e, lu;
}
var fu, Qh;
function mn() {
  if (Qh) return fu;
  Qh = 1;
  var e = Rt(), t = Nt(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return fu = n, fu;
}
var pu, ed;
function kp() {
  if (ed) return pu;
  ed = 1;
  var e = Ue(), t = mn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return pu = i, pu;
}
var hu, td;
function Ht() {
  if (td) return hu;
  td = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return hu = e, hu;
}
var du, rd;
function Rp() {
  if (rd) return du;
  rd = 1;
  var e = Rt(), t = Ht(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var c = e(u);
    return c == n || c == i || c == r || c == a;
  }
  return du = o, du;
}
var vu, nd;
function J_() {
  if (nd) return vu;
  nd = 1;
  var e = xt(), t = e["__core-js_shared__"];
  return vu = t, vu;
}
var yu, id;
function Q_() {
  if (id) return yu;
  id = 1;
  var e = J_(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return yu = r, yu;
}
var mu, ad;
function tx() {
  if (ad) return mu;
  ad = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return mu = r, mu;
}
var gu, od;
function e1() {
  if (od) return gu;
  od = 1;
  var e = Rp(), t = Q_(), r = Ht(), n = tx(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, c = o.toString, s = u.hasOwnProperty, l = RegExp(
    "^" + c.call(s).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(p) {
    if (!r(p) || t(p))
      return !1;
    var h = e(p) ? l : a;
    return h.test(n(p));
  }
  return gu = f, gu;
}
var bu, ud;
function t1() {
  if (ud) return bu;
  ud = 1;
  function e(t, r) {
    return t?.[r];
  }
  return bu = e, bu;
}
var xu, cd;
function wr() {
  if (cd) return xu;
  cd = 1;
  var e = e1(), t = t1();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return xu = r, xu;
}
var Ou, sd;
function bo() {
  if (sd) return Ou;
  sd = 1;
  var e = wr(), t = e(Object, "create");
  return Ou = t, Ou;
}
var wu, ld;
function r1() {
  if (ld) return wu;
  ld = 1;
  var e = bo();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return wu = t, wu;
}
var _u, fd;
function n1() {
  if (fd) return _u;
  fd = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return _u = e, _u;
}
var Au, pd;
function i1() {
  if (pd) return Au;
  pd = 1;
  var e = bo(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return Au = i, Au;
}
var Su, hd;
function a1() {
  if (hd) return Su;
  hd = 1;
  var e = bo(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return Su = n, Su;
}
var Pu, dd;
function o1() {
  if (dd) return Pu;
  dd = 1;
  var e = bo(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return Pu = r, Pu;
}
var Tu, vd;
function u1() {
  if (vd) return Tu;
  vd = 1;
  var e = r1(), t = n1(), r = i1(), n = a1(), i = o1();
  function a(o) {
    var u = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++u < c; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Tu = a, Tu;
}
var Eu, yd;
function c1() {
  if (yd) return Eu;
  yd = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Eu = e, Eu;
}
var ju, md;
function Np() {
  if (md) return ju;
  md = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ju = e, ju;
}
var $u, gd;
function xo() {
  if (gd) return $u;
  gd = 1;
  var e = Np();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return $u = t, $u;
}
var Cu, bd;
function s1() {
  if (bd) return Cu;
  bd = 1;
  var e = xo(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var u = a.length - 1;
    return o == u ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return Cu = n, Cu;
}
var Mu, xd;
function l1() {
  if (xd) return Mu;
  xd = 1;
  var e = xo();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return Mu = t, Mu;
}
var Iu, Od;
function f1() {
  if (Od) return Iu;
  Od = 1;
  var e = xo();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Iu = t, Iu;
}
var ku, wd;
function p1() {
  if (wd) return ku;
  wd = 1;
  var e = xo();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return ku = t, ku;
}
var Ru, _d;
function Oo() {
  if (_d) return Ru;
  _d = 1;
  var e = c1(), t = s1(), r = l1(), n = f1(), i = p1();
  function a(o) {
    var u = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++u < c; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Ru = a, Ru;
}
var Nu, Ad;
function Dp() {
  if (Ad) return Nu;
  Ad = 1;
  var e = wr(), t = xt(), r = e(t, "Map");
  return Nu = r, Nu;
}
var Du, Sd;
function h1() {
  if (Sd) return Du;
  Sd = 1;
  var e = u1(), t = Oo(), r = Dp();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Du = n, Du;
}
var Lu, Pd;
function d1() {
  if (Pd) return Lu;
  Pd = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Lu = e, Lu;
}
var qu, Td;
function wo() {
  if (Td) return qu;
  Td = 1;
  var e = d1();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return qu = t, qu;
}
var Bu, Ed;
function v1() {
  if (Ed) return Bu;
  Ed = 1;
  var e = wo();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Bu = t, Bu;
}
var Fu, jd;
function y1() {
  if (jd) return Fu;
  jd = 1;
  var e = wo();
  function t(r) {
    return e(this, r).get(r);
  }
  return Fu = t, Fu;
}
var zu, $d;
function m1() {
  if ($d) return zu;
  $d = 1;
  var e = wo();
  function t(r) {
    return e(this, r).has(r);
  }
  return zu = t, zu;
}
var Wu, Cd;
function g1() {
  if (Cd) return Wu;
  Cd = 1;
  var e = wo();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Wu = t, Wu;
}
var Uu, Md;
function Lp() {
  if (Md) return Uu;
  Md = 1;
  var e = h1(), t = v1(), r = y1(), n = m1(), i = g1();
  function a(o) {
    var u = -1, c = o == null ? 0 : o.length;
    for (this.clear(); ++u < c; ) {
      var s = o[u];
      this.set(s[0], s[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Uu = a, Uu;
}
var Ku, Id;
function rx() {
  if (Id) return Ku;
  Id = 1;
  var e = Lp(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, u = i ? i.apply(this, o) : o[0], c = a.cache;
      if (c.has(u))
        return c.get(u);
      var s = n.apply(this, o);
      return a.cache = c.set(u, s) || c, s;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, Ku = r, Ku;
}
var Gu, kd;
function b1() {
  if (kd) return Gu;
  kd = 1;
  var e = rx(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return Gu = r, Gu;
}
var Hu, Rd;
function x1() {
  if (Rd) return Hu;
  Rd = 1;
  var e = b1(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, u, c, s) {
      a.push(c ? s.replace(r, "$1") : u || o);
    }), a;
  });
  return Hu = n, Hu;
}
var Vu, Nd;
function qp() {
  if (Nd) return Vu;
  Nd = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Vu = e, Vu;
}
var Yu, Dd;
function O1() {
  if (Dd) return Yu;
  Dd = 1;
  var e = Li(), t = qp(), r = Ue(), n = mn(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return a ? a.call(u) : "";
    var c = u + "";
    return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
  }
  return Yu = o, Yu;
}
var Xu, Ld;
function nx() {
  if (Ld) return Xu;
  Ld = 1;
  var e = O1();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Xu = t, Xu;
}
var Zu, qd;
function ix() {
  if (qd) return Zu;
  qd = 1;
  var e = Ue(), t = kp(), r = x1(), n = nx();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return Zu = i, Zu;
}
var Ju, Bd;
function _o() {
  if (Bd) return Ju;
  Bd = 1;
  var e = mn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Ju = t, Ju;
}
var Qu, Fd;
function Bp() {
  if (Fd) return Qu;
  Fd = 1;
  var e = ix(), t = _o();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return Qu = r, Qu;
}
var ec, zd;
function ax() {
  if (zd) return ec;
  zd = 1;
  var e = Bp();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return ec = t, ec;
}
var w1 = ax();
const Xe = /* @__PURE__ */ oe(w1);
var tc, Wd;
function _1() {
  if (Wd) return tc;
  Wd = 1;
  function e(t) {
    return t == null;
  }
  return tc = e, tc;
}
var A1 = _1();
const G = /* @__PURE__ */ oe(A1);
var rc, Ud;
function S1() {
  if (Ud) return rc;
  Ud = 1;
  var e = Rt(), t = Ue(), r = Nt(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return rc = i, rc;
}
var P1 = S1();
const yr = /* @__PURE__ */ oe(P1);
var T1 = Rp();
const K = /* @__PURE__ */ oe(T1);
var E1 = Ht();
const gn = /* @__PURE__ */ oe(E1);
var nc = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function j1() {
  if (Kd) return ie;
  Kd = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function v(d) {
    if (typeof d == "object" && d !== null) {
      var g = d.$$typeof;
      switch (g) {
        case e:
          switch (d = d.type, d) {
            case r:
            case i:
            case n:
            case s:
            case l:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case u:
                case o:
                case c:
                case p:
                case f:
                case a:
                  return d;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return ie.ContextConsumer = o, ie.ContextProvider = a, ie.Element = e, ie.ForwardRef = c, ie.Fragment = r, ie.Lazy = p, ie.Memo = f, ie.Portal = t, ie.Profiler = i, ie.StrictMode = n, ie.Suspense = s, ie.SuspenseList = l, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(d) {
    return v(d) === o;
  }, ie.isContextProvider = function(d) {
    return v(d) === a;
  }, ie.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, ie.isForwardRef = function(d) {
    return v(d) === c;
  }, ie.isFragment = function(d) {
    return v(d) === r;
  }, ie.isLazy = function(d) {
    return v(d) === p;
  }, ie.isMemo = function(d) {
    return v(d) === f;
  }, ie.isPortal = function(d) {
    return v(d) === t;
  }, ie.isProfiler = function(d) {
    return v(d) === i;
  }, ie.isStrictMode = function(d) {
    return v(d) === n;
  }, ie.isSuspense = function(d) {
    return v(d) === s;
  }, ie.isSuspenseList = function(d) {
    return v(d) === l;
  }, ie.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === i || d === n || d === s || d === l || d === h || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === f || d.$$typeof === a || d.$$typeof === o || d.$$typeof === c || d.$$typeof === y || d.getModuleId !== void 0);
  }, ie.typeOf = v, ie;
}
var Gd;
function $1() {
  return Gd || (Gd = 1, nc.exports = j1()), nc.exports;
}
var C1 = $1(), ic, Hd;
function ox() {
  if (Hd) return ic;
  Hd = 1;
  var e = Rt(), t = Nt(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return ic = n, ic;
}
var ac, Vd;
function M1() {
  if (Vd) return ac;
  Vd = 1;
  var e = ox();
  function t(r) {
    return e(r) && r != +r;
  }
  return ac = t, ac;
}
var I1 = M1();
const qi = /* @__PURE__ */ oe(I1);
var k1 = ox();
const R1 = /* @__PURE__ */ oe(k1);
var Ne = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, cr = function(t) {
  return yr(t) && t.indexOf("%") === t.length - 1;
}, D = function(t) {
  return R1(t) && !qi(t);
}, N1 = function(t) {
  return G(t);
}, Te = function(t) {
  return D(t) || yr(t);
}, D1 = 0, _r = function(t) {
  var r = ++D1;
  return "".concat(t || "").concat(r);
}, De = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!D(t) && !yr(t))
    return n;
  var a;
  if (cr(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return qi(a) && (a = n), i && a > r && (a = r), a;
}, zt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, L1 = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, me = function(t, r) {
  return D(t) && D(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function ha(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Xe(n, t)) === r;
  });
}
var q1 = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, u = 1 / 0, c = -1 / 0, s = 0, l = 0, f = 0; f < r; f++)
    s = t[f].cx || 0, l = t[f].cy || 0, n += s, i += l, a += s * l, o += s * s, u = Math.min(u, s), c = Math.max(c, s);
  var p = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: u,
    xmax: c,
    a: p,
    b: (i - p * n) / r
  };
}, B1 = function(t, r) {
  return D(t) && D(r) ? t - r : yr(t) && yr(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function qr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function cf(e) {
  "@babel/helpers - typeof";
  return cf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cf(e);
}
var F1 = ["viewBox", "children"], z1 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Yd = ["points", "pathLength"], oc = {
  svg: F1,
  polygon: Yd,
  polyline: Yd
}, Fp = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], da = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ pt(t) && (n = t.props), !gn(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Fp.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, W1 = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Gt = function(t, r, n) {
  if (!gn(t) || cf(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Fp.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = W1(o, r, n));
  }), i;
}, U1 = ["children"], K1 = ["children"];
function Xd(e, t) {
  if (e == null) return {};
  var r = G1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function sf(e) {
  "@babel/helpers - typeof";
  return sf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sf(e);
}
var Zd = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, Et = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Jd = null, uc = null, zp = function e(t) {
  if (t === Jd && Array.isArray(uc))
    return uc;
  var r = [];
  return pr.forEach(t, function(n) {
    G(n) || (C1.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), uc = r, Jd = t, r;
};
function qe(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Et(i);
  }) : n = [Et(t)], zp(e).forEach(function(i) {
    var a = Xe(i, "type.displayName") || Xe(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Ve(e, t) {
  var r = qe(e, t);
  return r && r[0];
}
var Qd = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!D(n) || n <= 0 || !D(i) || i <= 0);
}, H1 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], V1 = function(t) {
  return t && t.type && yr(t.type) && H1.indexOf(t.type) >= 0;
}, Y1 = function(t) {
  return t && sf(t) === "object" && "clipDot" in t;
}, X1 = function(t, r, n, i) {
  var a, o = (a = oc?.[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !K(t) && (i && o.includes(r) || z1.includes(r)) || n && Fp.includes(r);
}, W = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ pt(t) && (i = t.props), !gn(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    X1((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, lf = function e(t, r) {
  if (t === r)
    return !0;
  var n = pr.count(t);
  if (n !== pr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return ev(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!ev(a, o))
      return !1;
  }
  return !0;
}, ev = function(t, r) {
  if (G(t) && G(r))
    return !0;
  if (!G(t) && !G(r)) {
    var n = t.props || {}, i = n.children, a = Xd(n, U1), o = r.props || {}, u = o.children, c = Xd(o, K1);
    return i && u ? qr(a, c) && lf(i, u) : !i && !u ? qr(a, c) : !1;
  }
  return !1;
}, tv = function(t, r) {
  var n = [], i = {};
  return zp(t).forEach(function(a, o) {
    if (V1(a))
      n.push(a);
    else if (a) {
      var u = Et(a.type), c = r[u] || {}, s = c.handler, l = c.once;
      if (s && (!l || !i[u])) {
        var f = s(a, u, o);
        n.push(f), i[u] = !0;
      }
    }
  }), n;
}, Z1 = function(t) {
  var r = t && t.type;
  return r && Zd[r] ? Zd[r] : null;
}, J1 = function(t, r) {
  return zp(r).indexOf(t);
}, Q1 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ff.apply(this, arguments);
}
function eA(e, t) {
  if (e == null) return {};
  var r = tA(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function pf(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, c = e.desc, s = eA(e, Q1), l = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = X("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", ff({}, W(s, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ A.createElement("title", null, u), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var rA = ["children", "className"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function nA(e, t) {
  if (e == null) return {};
  var r = iA(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function iA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Q = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = nA(e, rA), a = X("recharts-layer", n);
  return /* @__PURE__ */ A.createElement("g", hf({
    className: a
  }, W(i, !0), {
    ref: t
  }), r);
}), ht = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
}, cc, rv;
function aA() {
  if (rv) return cc;
  rv = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return cc = e, cc;
}
var sc, nv;
function oA() {
  if (nv) return sc;
  nv = 1;
  var e = aA();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return sc = t, sc;
}
var lc, iv;
function ux() {
  if (iv) return lc;
  iv = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + i + a + "]");
  function c(s) {
    return u.test(s);
  }
  return lc = c, lc;
}
var fc, av;
function uA() {
  if (av) return fc;
  av = 1;
  function e(t) {
    return t.split("");
  }
  return fc = e, fc;
}
var pc, ov;
function cA() {
  if (ov) return pc;
  ov = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + i + "]", c = "\\ud83c[\\udffb-\\udfff]", s = "(?:" + u + "|" + c + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", p = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", y = s + "?", v = "[" + a + "]?", d = "(?:" + h + "(?:" + [l, f, p].join("|") + ")" + v + y + ")*", g = v + y + d, b = "(?:" + [l + u + "?", u, f, p, o].join("|") + ")", O = RegExp(c + "(?=" + c + ")|" + b + g, "g");
  function w(m) {
    return m.match(O) || [];
  }
  return pc = w, pc;
}
var hc, uv;
function sA() {
  if (uv) return hc;
  uv = 1;
  var e = uA(), t = ux(), r = cA();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return hc = n, hc;
}
var dc, cv;
function lA() {
  if (cv) return dc;
  cv = 1;
  var e = oA(), t = ux(), r = sA(), n = nx();
  function i(a) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, c = u ? u[0] : o.charAt(0), s = u ? e(u, 1).join("") : o.slice(1);
      return c[a]() + s;
    };
  }
  return dc = i, dc;
}
var vc, sv;
function fA() {
  if (sv) return vc;
  sv = 1;
  var e = lA(), t = e("toUpperCase");
  return vc = t, vc;
}
var pA = fA();
const Ao = /* @__PURE__ */ oe(pA);
function le(e) {
  return function() {
    return e;
  };
}
const cx = Math.cos, va = Math.sin, vt = Math.sqrt, ya = Math.PI, So = 2 * ya, df = Math.PI, vf = 2 * df, ar = 1e-6, hA = vf - ar;
function sx(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function dA(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return sx;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class vA {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? sx : dA(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, c = n - t, s = i - r, l = o - t, f = u - r, p = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > ar) if (!(Math.abs(f * c - s * l) > ar) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = i - u, v = c * c + s * s, d = h * h + y * y, g = Math.sqrt(v), b = Math.sqrt(p), O = a * Math.tan((df - Math.acos((v + p - d) / (2 * g * b))) / 2), w = O / b, m = O / g;
      Math.abs(w - 1) > ar && this._append`L${t + w * l},${r + w * f}`, this._append`A${a},${a},0,0,${+(f * h > l * y)},${this._x1 = t + m * c},${this._y1 = r + m * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), c = n * Math.sin(i), s = t + u, l = r + c, f = 1 ^ o, p = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${l}` : (Math.abs(this._x1 - s) > ar || Math.abs(this._y1 - l) > ar) && this._append`L${s},${l}`, n && (p < 0 && (p = p % vf + vf), p > hA ? this._append`A${n},${n},0,1,${f},${t - u},${r - c}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = l}` : p > ar && this._append`A${n},${n},0,${+(p >= df)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Wp(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new vA(t);
}
function Up(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function lx(e) {
  this._context = e;
}
lx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Po(e) {
  return new lx(e);
}
function fx(e) {
  return e[0];
}
function px(e) {
  return e[1];
}
function hx(e, t) {
  var r = le(!0), n = null, i = Po, a = null, o = Wp(u);
  e = typeof e == "function" ? e : e === void 0 ? fx : le(e), t = typeof t == "function" ? t : t === void 0 ? px : le(t);
  function u(c) {
    var s, l = (c = Up(c)).length, f, p = !1, h;
    for (n == null && (a = i(h = o())), s = 0; s <= l; ++s)
      !(s < l && r(f = c[s], s, c)) === p && ((p = !p) ? a.lineStart() : a.lineEnd()), p && a.point(+e(f, s, c), +t(f, s, c));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : le(+c), u) : e;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : le(+c), u) : t;
  }, u.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : le(!!c), u) : r;
  }, u.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), u) : i;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), u) : n;
  }, u;
}
function Ji(e, t, r) {
  var n = null, i = le(!0), a = null, o = Po, u = null, c = Wp(s);
  e = typeof e == "function" ? e : e === void 0 ? fx : le(+e), t = typeof t == "function" ? t : le(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? px : le(+r);
  function s(f) {
    var p, h, y, v = (f = Up(f)).length, d, g = !1, b, O = new Array(v), w = new Array(v);
    for (a == null && (u = o(b = c())), p = 0; p <= v; ++p) {
      if (!(p < v && i(d = f[p], p, f)) === g)
        if (g = !g)
          h = p, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = p - 1; y >= h; --y)
            u.point(O[y], w[y]);
          u.lineEnd(), u.areaEnd();
        }
      g && (O[p] = +e(d, p, f), w[p] = +t(d, p, f), u.point(n ? +n(d, p, f) : O[p], r ? +r(d, p, f) : w[p]));
    }
    if (b) return u = null, b + "" || null;
  }
  function l() {
    return hx().defined(i).curve(o).context(a);
  }
  return s.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : le(+f), n = null, s) : e;
  }, s.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : le(+f), s) : e;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : le(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : le(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : le(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : le(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return l().x(e).y(t);
  }, s.lineY1 = function() {
    return l().x(e).y(r);
  }, s.lineX1 = function() {
    return l().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : le(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), s) : a;
  }, s;
}
class dx {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function yA(e) {
  return new dx(e, !0);
}
function mA(e) {
  return new dx(e, !1);
}
const Kp = {
  draw(e, t) {
    const r = vt(t / ya);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, So);
  }
}, gA = {
  draw(e, t) {
    const r = vt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, vx = vt(1 / 3), bA = vx * 2, xA = {
  draw(e, t) {
    const r = vt(t / bA), n = r * vx;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, OA = {
  draw(e, t) {
    const r = vt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, wA = 0.8908130915292852, yx = va(ya / 10) / va(7 * ya / 10), _A = va(So / 10) * yx, AA = -cx(So / 10) * yx, SA = {
  draw(e, t) {
    const r = vt(t * wA), n = _A * r, i = AA * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = So * a / 5, u = cx(o), c = va(o);
      e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i);
    }
    e.closePath();
  }
}, yc = vt(3), PA = {
  draw(e, t) {
    const r = -vt(t / (yc * 3));
    e.moveTo(0, r * 2), e.lineTo(-yc * r, -r), e.lineTo(yc * r, -r), e.closePath();
  }
}, Je = -0.5, Qe = vt(3) / 2, yf = 1 / vt(12), TA = (yf / 2 + 1) * 3, EA = {
  draw(e, t) {
    const r = vt(t / TA), n = r / 2, i = r * yf, a = n, o = r * yf + r, u = -a, c = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, c), e.lineTo(Je * n - Qe * i, Qe * n + Je * i), e.lineTo(Je * a - Qe * o, Qe * a + Je * o), e.lineTo(Je * u - Qe * c, Qe * u + Je * c), e.lineTo(Je * n + Qe * i, Je * i - Qe * n), e.lineTo(Je * a + Qe * o, Je * o - Qe * a), e.lineTo(Je * u + Qe * c, Je * c - Qe * u), e.closePath();
  }
};
function jA(e, t) {
  let r = null, n = Wp(i);
  e = typeof e == "function" ? e : le(e || Kp), t = typeof t == "function" ? t : le(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : le(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : le(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function ma() {
}
function ga(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function mx(e) {
  this._context = e;
}
mx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ga(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function $A(e) {
  return new mx(e);
}
function gx(e) {
  this._context = e;
}
gx.prototype = {
  areaStart: ma,
  areaEnd: ma,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function CA(e) {
  return new gx(e);
}
function bx(e) {
  this._context = e;
}
bx.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ga(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function MA(e) {
  return new bx(e);
}
function xx(e) {
  this._context = e;
}
xx.prototype = {
  areaStart: ma,
  areaEnd: ma,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function IA(e) {
  return new xx(e);
}
function lv(e) {
  return e < 0 ? -1 : 1;
}
function fv(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (lv(a) + lv(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function pv(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function mc(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function ba(e) {
  this._context = e;
}
ba.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        mc(this, this._t0, pv(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, mc(this, pv(this, r = fv(this, e, t)), r);
          break;
        default:
          mc(this, this._t0, r = fv(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ox(e) {
  this._context = new wx(e);
}
(Ox.prototype = Object.create(ba.prototype)).point = function(e, t) {
  ba.prototype.point.call(this, t, e);
};
function wx(e) {
  this._context = e;
}
wx.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function kA(e) {
  return new ba(e);
}
function RA(e) {
  return new Ox(e);
}
function _x(e) {
  this._context = e;
}
_x.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = hv(e), i = hv(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function hv(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function NA(e) {
  return new _x(e);
}
function To(e, t) {
  this._context = e, this._t = t;
}
To.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function DA(e) {
  return new To(e, 0.5);
}
function LA(e) {
  return new To(e, 0);
}
function qA(e) {
  return new To(e, 1);
}
function zr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function mf(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function BA(e, t) {
  return e[t];
}
function FA(e) {
  const t = [];
  return t.key = e, t;
}
function zA() {
  var e = le([]), t = mf, r = zr, n = BA;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), FA), u, c = o.length, s = -1, l;
    for (const f of a)
      for (u = 0, ++s; u < c; ++u)
        (o[u][s] = [0, +n(f, o[u].key, s, a)]).data = f;
    for (u = 0, l = Up(t(o)); u < c; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : le(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : le(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? mf : typeof a == "function" ? a : le(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? zr, i) : r;
  }, i;
}
function WA(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    zr(e, t);
  }
}
function UA(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    zr(e, t);
  }
}
function KA(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, p = l[n - 1][1] || 0, h = (f - p) / 2, y = 0; y < u; ++y) {
          var v = e[t[y]], d = v[n][1] || 0, g = v[n - 1][1] || 0;
          h += d - g;
        }
        c += f, s += h * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, zr(e, t);
  }
}
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
var GA = ["type", "size", "sizeType"];
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dv(Object(r), !0).forEach(function(n) {
      HA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HA(e, t, r) {
  return t = VA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VA(e) {
  var t = YA(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function YA(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XA(e, t) {
  if (e == null) return {};
  var r = ZA(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Ax = {
  symbolCircle: Kp,
  symbolCross: gA,
  symbolDiamond: xA,
  symbolSquare: OA,
  symbolStar: SA,
  symbolTriangle: PA,
  symbolWye: EA
}, JA = Math.PI / 180, QA = function(t) {
  var r = "symbol".concat(Ao(t));
  return Ax[r] || Kp;
}, eS = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * JA;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, tS = function(t, r) {
  Ax["symbol".concat(Ao(t))] = r;
}, Eo = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, c = XA(t, GA), s = vv(vv({}, c), {}, {
    type: n,
    size: a,
    sizeType: u
  }), l = function() {
    var d = QA(n), g = jA().type(d).size(eS(a, u, n));
    return g();
  }, f = s.className, p = s.cx, h = s.cy, y = W(s, !0);
  return p === +p && h === +h && a === +a ? /* @__PURE__ */ A.createElement("path", gf({}, y, {
    className: X("recharts-symbols", f),
    transform: "translate(".concat(p, ", ").concat(h, ")"),
    d: l()
  })) : null;
};
Eo.registerSymbol = tS;
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function bf() {
  return bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bf.apply(this, arguments);
}
function yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rS(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yv(Object(r), !0).forEach(function(n) {
      Qn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function iS(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Px(n.key), n);
  }
}
function aS(e, t, r) {
  return t && iS(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function oS(e, t, r) {
  return t = xa(t), uS(e, Sx() ? Reflect.construct(t, r || [], xa(e).constructor) : t.apply(e, r));
}
function uS(e, t) {
  if (t && (Wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cS(e);
}
function cS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Sx = function() {
    return !!e;
  })();
}
function xa(e) {
  return xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xa(e);
}
function sS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, xf(e, t);
}
function Qn(e, t, r) {
  return t = Px(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Px(e) {
  var t = lS(e, "string");
  return Wr(t) == "symbol" ? t : t + "";
}
function lS(e, t) {
  if (Wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var et = 32, Gp = /* @__PURE__ */ (function(e) {
  function t() {
    return nS(this, t), oS(this, t, arguments);
  }
  return sS(t, e), aS(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = et / 2, o = et / 6, u = et / 3, c = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: et,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(et, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(et / 8, "h").concat(et, "v").concat(et * 3 / 4, "h").concat(-et, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(n.legendIcon)) {
          var s = rS({}, n);
          return delete s.legendIcon, /* @__PURE__ */ A.cloneElement(n.legendIcon, s);
        }
        return /* @__PURE__ */ A.createElement(Eo, {
          fill: c,
          cx: a,
          cy: a,
          size: et,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, c = i.formatter, s = i.inactiveColor, l = {
        x: 0,
        y: 0,
        width: et,
        height: et
      }, f = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, p = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, y) {
        var v = h.formatter || c, d = X(Qn(Qn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var g = K(h.value) ? null : h.value;
        ht(
          !K(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = h.inactive ? s : h.color;
        return /* @__PURE__ */ A.createElement("li", bf({
          className: d,
          style: f,
          key: "legend-item-".concat(y)
        }, Gt(n.props, h, y)), /* @__PURE__ */ A.createElement(pf, {
          width: o,
          height: o,
          viewBox: l,
          style: p
        }, n.renderIcon(h)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: b
          }
        }, v ? v(g, h, y) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(Ze);
Qn(Gp, "displayName", "Legend");
Qn(Gp, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var gc, mv;
function fS() {
  if (mv) return gc;
  mv = 1;
  var e = Oo();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return gc = t, gc;
}
var bc, gv;
function pS() {
  if (gv) return bc;
  gv = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return bc = e, bc;
}
var xc, bv;
function hS() {
  if (bv) return xc;
  bv = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return xc = e, xc;
}
var Oc, xv;
function dS() {
  if (xv) return Oc;
  xv = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Oc = e, Oc;
}
var wc, Ov;
function vS() {
  if (Ov) return wc;
  Ov = 1;
  var e = Oo(), t = Dp(), r = Lp(), n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var c = u.__data__;
      if (!t || c.length < n - 1)
        return c.push([a, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(c);
    }
    return u.set(a, o), this.size = u.size, this;
  }
  return wc = i, wc;
}
var _c, wv;
function Tx() {
  if (wv) return _c;
  wv = 1;
  var e = Oo(), t = fS(), r = pS(), n = hS(), i = dS(), a = vS();
  function o(u) {
    var c = this.__data__ = new e(u);
    this.size = c.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, _c = o, _c;
}
var Ac, _v;
function yS() {
  if (_v) return Ac;
  _v = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ac = t, Ac;
}
var Sc, Av;
function mS() {
  if (Av) return Sc;
  Av = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Sc = e, Sc;
}
var Pc, Sv;
function Ex() {
  if (Sv) return Pc;
  Sv = 1;
  var e = Lp(), t = yS(), r = mS();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Pc = n, Pc;
}
var Tc, Pv;
function jx() {
  if (Pv) return Tc;
  Pv = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Tc = e, Tc;
}
var Ec, Tv;
function $x() {
  if (Tv) return Ec;
  Tv = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Ec = e, Ec;
}
var jc, Ev;
function Cx() {
  if (Ev) return jc;
  Ev = 1;
  var e = Ex(), t = jx(), r = $x(), n = 1, i = 2;
  function a(o, u, c, s, l, f) {
    var p = c & n, h = o.length, y = u.length;
    if (h != y && !(p && y > h))
      return !1;
    var v = f.get(o), d = f.get(u);
    if (v && d)
      return v == u && d == o;
    var g = -1, b = !0, O = c & i ? new e() : void 0;
    for (f.set(o, u), f.set(u, o); ++g < h; ) {
      var w = o[g], m = u[g];
      if (s)
        var x = p ? s(m, w, g, u, o, f) : s(w, m, g, o, u, f);
      if (x !== void 0) {
        if (x)
          continue;
        b = !1;
        break;
      }
      if (O) {
        if (!t(u, function(_, S) {
          if (!r(O, S) && (w === _ || l(w, _, c, s, f)))
            return O.push(S);
        })) {
          b = !1;
          break;
        }
      } else if (!(w === m || l(w, m, c, s, f))) {
        b = !1;
        break;
      }
    }
    return f.delete(o), f.delete(u), b;
  }
  return jc = a, jc;
}
var $c, jv;
function gS() {
  if (jv) return $c;
  jv = 1;
  var e = xt(), t = e.Uint8Array;
  return $c = t, $c;
}
var Cc, $v;
function bS() {
  if ($v) return Cc;
  $v = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return Cc = e, Cc;
}
var Mc, Cv;
function Hp() {
  if (Cv) return Mc;
  Cv = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Mc = e, Mc;
}
var Ic, Mv;
function xS() {
  if (Mv) return Ic;
  Mv = 1;
  var e = Li(), t = gS(), r = Np(), n = Cx(), i = bS(), a = Hp(), o = 1, u = 2, c = "[object Boolean]", s = "[object Date]", l = "[object Error]", f = "[object Map]", p = "[object Number]", h = "[object RegExp]", y = "[object Set]", v = "[object String]", d = "[object Symbol]", g = "[object ArrayBuffer]", b = "[object DataView]", O = e ? e.prototype : void 0, w = O ? O.valueOf : void 0;
  function m(x, _, S, T, j, P, E) {
    switch (S) {
      case b:
        if (x.byteLength != _.byteLength || x.byteOffset != _.byteOffset)
          return !1;
        x = x.buffer, _ = _.buffer;
      case g:
        return !(x.byteLength != _.byteLength || !P(new t(x), new t(_)));
      case c:
      case s:
      case p:
        return r(+x, +_);
      case l:
        return x.name == _.name && x.message == _.message;
      case h:
      case v:
        return x == _ + "";
      case f:
        var $ = i;
      case y:
        var M = T & o;
        if ($ || ($ = a), x.size != _.size && !M)
          return !1;
        var C = E.get(x);
        if (C)
          return C == _;
        T |= u, E.set(x, _);
        var k = n($(x), $(_), T, j, P, E);
        return E.delete(x), k;
      case d:
        if (w)
          return w.call(x) == w.call(_);
    }
    return !1;
  }
  return Ic = m, Ic;
}
var kc, Iv;
function Mx() {
  if (Iv) return kc;
  Iv = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return kc = e, kc;
}
var Rc, kv;
function OS() {
  if (kv) return Rc;
  kv = 1;
  var e = Mx(), t = Ue();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return Rc = r, Rc;
}
var Nc, Rv;
function wS() {
  if (Rv) return Nc;
  Rv = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return Nc = e, Nc;
}
var Dc, Nv;
function _S() {
  if (Nv) return Dc;
  Nv = 1;
  function e() {
    return [];
  }
  return Dc = e, Dc;
}
var Lc, Dv;
function AS() {
  if (Dv) return Lc;
  Dv = 1;
  var e = wS(), t = _S(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(u) {
      return n.call(o, u);
    }));
  } : t;
  return Lc = a, Lc;
}
var qc, Lv;
function SS() {
  if (Lv) return qc;
  Lv = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return qc = e, qc;
}
var Bc, qv;
function PS() {
  if (qv) return Bc;
  qv = 1;
  var e = Rt(), t = Nt(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return Bc = n, Bc;
}
var Fc, Bv;
function Vp() {
  if (Bv) return Fc;
  Bv = 1;
  var e = PS(), t = Nt(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return Fc = a, Fc;
}
var qn = { exports: {} }, zc, Fv;
function TS() {
  if (Fv) return zc;
  Fv = 1;
  function e() {
    return !1;
  }
  return zc = e, zc;
}
qn.exports;
var zv;
function Ix() {
  return zv || (zv = 1, (function(e, t) {
    var r = xt(), n = TS(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, c = u ? u.isBuffer : void 0, s = c || n;
    e.exports = s;
  })(qn, qn.exports)), qn.exports;
}
var Wc, Wv;
function Yp() {
  if (Wv) return Wc;
  Wv = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Wc = r, Wc;
}
var Uc, Uv;
function Xp() {
  if (Uv) return Uc;
  Uv = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Uc = t, Uc;
}
var Kc, Kv;
function ES() {
  if (Kv) return Kc;
  Kv = 1;
  var e = Rt(), t = Xp(), r = Nt(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", u = "[object Error]", c = "[object Function]", s = "[object Map]", l = "[object Number]", f = "[object Object]", p = "[object RegExp]", h = "[object Set]", y = "[object String]", v = "[object WeakMap]", d = "[object ArrayBuffer]", g = "[object DataView]", b = "[object Float32Array]", O = "[object Float64Array]", w = "[object Int8Array]", m = "[object Int16Array]", x = "[object Int32Array]", _ = "[object Uint8Array]", S = "[object Uint8ClampedArray]", T = "[object Uint16Array]", j = "[object Uint32Array]", P = {};
  P[b] = P[O] = P[w] = P[m] = P[x] = P[_] = P[S] = P[T] = P[j] = !0, P[n] = P[i] = P[d] = P[a] = P[g] = P[o] = P[u] = P[c] = P[s] = P[l] = P[f] = P[p] = P[h] = P[y] = P[v] = !1;
  function E($) {
    return r($) && t($.length) && !!P[e($)];
  }
  return Kc = E, Kc;
}
var Gc, Gv;
function kx() {
  if (Gv) return Gc;
  Gv = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Gc = e, Gc;
}
var Bn = { exports: {} };
Bn.exports;
var Hv;
function jS() {
  return Hv || (Hv = 1, (function(e, t) {
    var r = ex(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = (function() {
      try {
        var c = i && i.require && i.require("util").types;
        return c || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = u;
  })(Bn, Bn.exports)), Bn.exports;
}
var Hc, Vv;
function Rx() {
  if (Vv) return Hc;
  Vv = 1;
  var e = ES(), t = kx(), r = jS(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Hc = i, Hc;
}
var Vc, Yv;
function $S() {
  if (Yv) return Vc;
  Yv = 1;
  var e = SS(), t = Vp(), r = Ue(), n = Ix(), i = Yp(), a = Rx(), o = Object.prototype, u = o.hasOwnProperty;
  function c(s, l) {
    var f = r(s), p = !f && t(s), h = !f && !p && n(s), y = !f && !p && !h && a(s), v = f || p || h || y, d = v ? e(s.length, String) : [], g = d.length;
    for (var b in s)
      (l || u.call(s, b)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      i(b, g))) && d.push(b);
    return d;
  }
  return Vc = c, Vc;
}
var Yc, Xv;
function CS() {
  if (Xv) return Yc;
  Xv = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return Yc = t, Yc;
}
var Xc, Zv;
function Nx() {
  if (Zv) return Xc;
  Zv = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Xc = e, Xc;
}
var Zc, Jv;
function MS() {
  if (Jv) return Zc;
  Jv = 1;
  var e = Nx(), t = e(Object.keys, Object);
  return Zc = t, Zc;
}
var Jc, Qv;
function IS() {
  if (Qv) return Jc;
  Qv = 1;
  var e = CS(), t = MS(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var u in Object(a))
      n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return Jc = i, Jc;
}
var Qc, ey;
function Bi() {
  if (ey) return Qc;
  ey = 1;
  var e = Rp(), t = Xp();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Qc = r, Qc;
}
var es, ty;
function jo() {
  if (ty) return es;
  ty = 1;
  var e = $S(), t = IS(), r = Bi();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return es = n, es;
}
var ts, ry;
function kS() {
  if (ry) return ts;
  ry = 1;
  var e = OS(), t = AS(), r = jo();
  function n(i) {
    return e(i, r, t);
  }
  return ts = n, ts;
}
var rs, ny;
function RS() {
  if (ny) return rs;
  ny = 1;
  var e = kS(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, u, c, s, l) {
    var f = u & t, p = e(a), h = p.length, y = e(o), v = y.length;
    if (h != v && !f)
      return !1;
    for (var d = h; d--; ) {
      var g = p[d];
      if (!(f ? g in o : n.call(o, g)))
        return !1;
    }
    var b = l.get(a), O = l.get(o);
    if (b && O)
      return b == o && O == a;
    var w = !0;
    l.set(a, o), l.set(o, a);
    for (var m = f; ++d < h; ) {
      g = p[d];
      var x = a[g], _ = o[g];
      if (c)
        var S = f ? c(_, x, g, o, a, l) : c(x, _, g, a, o, l);
      if (!(S === void 0 ? x === _ || s(x, _, u, c, l) : S)) {
        w = !1;
        break;
      }
      m || (m = g == "constructor");
    }
    if (w && !m) {
      var T = a.constructor, j = o.constructor;
      T != j && "constructor" in a && "constructor" in o && !(typeof T == "function" && T instanceof T && typeof j == "function" && j instanceof j) && (w = !1);
    }
    return l.delete(a), l.delete(o), w;
  }
  return rs = i, rs;
}
var ns, iy;
function NS() {
  if (iy) return ns;
  iy = 1;
  var e = wr(), t = xt(), r = e(t, "DataView");
  return ns = r, ns;
}
var is, ay;
function DS() {
  if (ay) return is;
  ay = 1;
  var e = wr(), t = xt(), r = e(t, "Promise");
  return is = r, is;
}
var as, oy;
function Dx() {
  if (oy) return as;
  oy = 1;
  var e = wr(), t = xt(), r = e(t, "Set");
  return as = r, as;
}
var os, uy;
function LS() {
  if (uy) return os;
  uy = 1;
  var e = wr(), t = xt(), r = e(t, "WeakMap");
  return os = r, os;
}
var us, cy;
function qS() {
  if (cy) return us;
  cy = 1;
  var e = NS(), t = Dp(), r = DS(), n = Dx(), i = LS(), a = Rt(), o = tx(), u = "[object Map]", c = "[object Object]", s = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", p = "[object DataView]", h = o(e), y = o(t), v = o(r), d = o(n), g = o(i), b = a;
  return (e && b(new e(new ArrayBuffer(1))) != p || t && b(new t()) != u || r && b(r.resolve()) != s || n && b(new n()) != l || i && b(new i()) != f) && (b = function(O) {
    var w = a(O), m = w == c ? O.constructor : void 0, x = m ? o(m) : "";
    if (x)
      switch (x) {
        case h:
          return p;
        case y:
          return u;
        case v:
          return s;
        case d:
          return l;
        case g:
          return f;
      }
    return w;
  }), us = b, us;
}
var cs, sy;
function BS() {
  if (sy) return cs;
  sy = 1;
  var e = Tx(), t = Cx(), r = xS(), n = RS(), i = qS(), a = Ue(), o = Ix(), u = Rx(), c = 1, s = "[object Arguments]", l = "[object Array]", f = "[object Object]", p = Object.prototype, h = p.hasOwnProperty;
  function y(v, d, g, b, O, w) {
    var m = a(v), x = a(d), _ = m ? l : i(v), S = x ? l : i(d);
    _ = _ == s ? f : _, S = S == s ? f : S;
    var T = _ == f, j = S == f, P = _ == S;
    if (P && o(v)) {
      if (!o(d))
        return !1;
      m = !0, T = !1;
    }
    if (P && !T)
      return w || (w = new e()), m || u(v) ? t(v, d, g, b, O, w) : r(v, d, _, g, b, O, w);
    if (!(g & c)) {
      var E = T && h.call(v, "__wrapped__"), $ = j && h.call(d, "__wrapped__");
      if (E || $) {
        var M = E ? v.value() : v, C = $ ? d.value() : d;
        return w || (w = new e()), O(M, C, g, b, w);
      }
    }
    return P ? (w || (w = new e()), n(v, d, g, b, O, w)) : !1;
  }
  return cs = y, cs;
}
var ss, ly;
function Zp() {
  if (ly) return ss;
  ly = 1;
  var e = BS(), t = Nt();
  function r(n, i, a, o, u) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, u);
  }
  return ss = r, ss;
}
var ls, fy;
function FS() {
  if (fy) return ls;
  fy = 1;
  var e = Tx(), t = Zp(), r = 1, n = 2;
  function i(a, o, u, c) {
    var s = u.length, l = s, f = !c;
    if (a == null)
      return !l;
    for (a = Object(a); s--; ) {
      var p = u[s];
      if (f && p[2] ? p[1] !== a[p[0]] : !(p[0] in a))
        return !1;
    }
    for (; ++s < l; ) {
      p = u[s];
      var h = p[0], y = a[h], v = p[1];
      if (f && p[2]) {
        if (y === void 0 && !(h in a))
          return !1;
      } else {
        var d = new e();
        if (c)
          var g = c(y, v, h, a, o, d);
        if (!(g === void 0 ? t(v, y, r | n, c, d) : g))
          return !1;
      }
    }
    return !0;
  }
  return ls = i, ls;
}
var fs, py;
function Lx() {
  if (py) return fs;
  py = 1;
  var e = Ht();
  function t(r) {
    return r === r && !e(r);
  }
  return fs = t, fs;
}
var ps, hy;
function zS() {
  if (hy) return ps;
  hy = 1;
  var e = Lx(), t = jo();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return ps = r, ps;
}
var hs, dy;
function qx() {
  if (dy) return hs;
  dy = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return hs = e, hs;
}
var ds, vy;
function WS() {
  if (vy) return ds;
  vy = 1;
  var e = FS(), t = zS(), r = qx();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return ds = n, ds;
}
var vs, yy;
function US() {
  if (yy) return vs;
  yy = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return vs = e, vs;
}
var ys, my;
function KS() {
  if (my) return ys;
  my = 1;
  var e = ix(), t = Vp(), r = Ue(), n = Yp(), i = Xp(), a = _o();
  function o(u, c, s) {
    c = e(c, u);
    for (var l = -1, f = c.length, p = !1; ++l < f; ) {
      var h = a(c[l]);
      if (!(p = u != null && s(u, h)))
        break;
      u = u[h];
    }
    return p || ++l != f ? p : (f = u == null ? 0 : u.length, !!f && i(f) && n(h, f) && (r(u) || t(u)));
  }
  return ys = o, ys;
}
var ms, gy;
function GS() {
  if (gy) return ms;
  gy = 1;
  var e = US(), t = KS();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return ms = r, ms;
}
var gs, by;
function HS() {
  if (by) return gs;
  by = 1;
  var e = Zp(), t = ax(), r = GS(), n = kp(), i = Lx(), a = qx(), o = _o(), u = 1, c = 2;
  function s(l, f) {
    return n(l) && i(f) ? a(o(l), f) : function(p) {
      var h = t(p, l);
      return h === void 0 && h === f ? r(p, l) : e(f, h, u | c);
    };
  }
  return gs = s, gs;
}
var bs, xy;
function bn() {
  if (xy) return bs;
  xy = 1;
  function e(t) {
    return t;
  }
  return bs = e, bs;
}
var xs, Oy;
function VS() {
  if (Oy) return xs;
  Oy = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return xs = e, xs;
}
var Os, wy;
function YS() {
  if (wy) return Os;
  wy = 1;
  var e = Bp();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Os = t, Os;
}
var ws, _y;
function XS() {
  if (_y) return ws;
  _y = 1;
  var e = VS(), t = YS(), r = kp(), n = _o();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return ws = i, ws;
}
var _s, Ay;
function Ot() {
  if (Ay) return _s;
  Ay = 1;
  var e = WS(), t = HS(), r = bn(), n = Ue(), i = XS();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return _s = a, _s;
}
var As, Sy;
function Bx() {
  if (Sy) return As;
  Sy = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return As = e, As;
}
var Ss, Py;
function ZS() {
  if (Py) return Ss;
  Py = 1;
  function e(t) {
    return t !== t;
  }
  return Ss = e, Ss;
}
var Ps, Ty;
function JS() {
  if (Ty) return Ps;
  Ty = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return Ps = e, Ps;
}
var Ts, Ey;
function QS() {
  if (Ey) return Ts;
  Ey = 1;
  var e = Bx(), t = ZS(), r = JS();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return Ts = n, Ts;
}
var Es, jy;
function eP() {
  if (jy) return Es;
  jy = 1;
  var e = QS();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return Es = t, Es;
}
var js, $y;
function tP() {
  if ($y) return js;
  $y = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return js = e, js;
}
var $s, Cy;
function rP() {
  if (Cy) return $s;
  Cy = 1;
  function e() {
  }
  return $s = e, $s;
}
var Cs, My;
function nP() {
  if (My) return Cs;
  My = 1;
  var e = Dx(), t = rP(), r = Hp(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Cs = i, Cs;
}
var Ms, Iy;
function iP() {
  if (Iy) return Ms;
  Iy = 1;
  var e = Ex(), t = eP(), r = tP(), n = $x(), i = nP(), a = Hp(), o = 200;
  function u(c, s, l) {
    var f = -1, p = t, h = c.length, y = !0, v = [], d = v;
    if (l)
      y = !1, p = r;
    else if (h >= o) {
      var g = s ? null : i(c);
      if (g)
        return a(g);
      y = !1, p = n, d = new e();
    } else
      d = s ? [] : v;
    e:
      for (; ++f < h; ) {
        var b = c[f], O = s ? s(b) : b;
        if (b = l || b !== 0 ? b : 0, y && O === O) {
          for (var w = d.length; w--; )
            if (d[w] === O)
              continue e;
          s && d.push(O), v.push(b);
        } else p(d, O, l) || (d !== v && d.push(O), v.push(b));
      }
    return v;
  }
  return Ms = u, Ms;
}
var Is, ky;
function aP() {
  if (ky) return Is;
  ky = 1;
  var e = Ot(), t = iP();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return Is = r, Is;
}
var oP = aP();
const Ry = /* @__PURE__ */ oe(oP);
function Fx(e, t, r) {
  return t === !0 ? Ry(e, r) : K(t) ? Ry(e, t) : e;
}
function Ur(e) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
var uP = ["ref"];
function Ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ny(Object(r), !0).forEach(function(n) {
      $o(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Wx(n.key), n);
  }
}
function sP(e, t, r) {
  return t && Dy(e.prototype, t), r && Dy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lP(e, t, r) {
  return t = Oa(t), fP(e, zx() ? Reflect.construct(t, r || [], Oa(e).constructor) : t.apply(e, r));
}
function fP(e, t) {
  if (t && (Ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pP(e);
}
function pP(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zx = function() {
    return !!e;
  })();
}
function Oa(e) {
  return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oa(e);
}
function hP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Of(e, t);
}
function $o(e, t, r) {
  return t = Wx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wx(e) {
  var t = dP(e, "string");
  return Ur(t) == "symbol" ? t : t + "";
}
function dP(e, t) {
  if (Ur(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function vP(e, t) {
  if (e == null) return {};
  var r = yP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function mP(e) {
  return e.value;
}
function gP(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var r = vP(t, uP);
  return /* @__PURE__ */ A.createElement(Gp, r);
}
var Ly = 1, hr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    cP(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = lP(this, t, [].concat(i)), $o(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return hP(t, e), sP(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Ly || Math.abs(i.height - this.lastBoundingBox.height) > Ly) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? wt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, c = i.margin, s = i.chartWidth, l = i.chartHeight, f, p;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          f = {
            left: ((s || 0) - h.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var y = this.getBBoxSnapshot();
          p = {
            top: ((l || 0) - y.height) / 2
          };
        } else
          p = u === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return wt(wt({}, f), p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, c = i.wrapperStyle, s = i.payloadUniqBy, l = i.payload, f = wt(wt({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, gP(a, wt(wt({}, this.props), {}, {
        payload: Fx(l, s, mP)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = wt(wt({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && D(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
})(Ze);
$o(hr, "displayName", "Legend");
$o(hr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var ks, qy;
function bP() {
  if (qy) return ks;
  qy = 1;
  var e = Li(), t = Vp(), r = Ue(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return ks = i, ks;
}
var Rs, By;
function Ux() {
  if (By) return Rs;
  By = 1;
  var e = Mx(), t = bP();
  function r(n, i, a, o, u) {
    var c = -1, s = n.length;
    for (a || (a = t), u || (u = []); ++c < s; ) {
      var l = n[c];
      i > 0 && a(l) ? i > 1 ? r(l, i - 1, a, o, u) : e(u, l) : o || (u[u.length] = l);
    }
    return u;
  }
  return Rs = r, Rs;
}
var Ns, Fy;
function xP() {
  if (Fy) return Ns;
  Fy = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), c = u.length; c--; ) {
        var s = u[t ? c : ++a];
        if (n(o[s], s, o) === !1)
          break;
      }
      return r;
    };
  }
  return Ns = e, Ns;
}
var Ds, zy;
function OP() {
  if (zy) return Ds;
  zy = 1;
  var e = xP(), t = e();
  return Ds = t, Ds;
}
var Ls, Wy;
function Kx() {
  if (Wy) return Ls;
  Wy = 1;
  var e = OP(), t = jo();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return Ls = r, Ls;
}
var qs, Uy;
function wP() {
  if (Uy) return qs;
  Uy = 1;
  var e = Bi();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, u = n ? o : -1, c = Object(i); (n ? u-- : ++u < o) && a(c[u], u, c) !== !1; )
        ;
      return i;
    };
  }
  return qs = t, qs;
}
var Bs, Ky;
function Jp() {
  if (Ky) return Bs;
  Ky = 1;
  var e = Kx(), t = wP(), r = t(e);
  return Bs = r, Bs;
}
var Fs, Gy;
function Gx() {
  if (Gy) return Fs;
  Gy = 1;
  var e = Jp(), t = Bi();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, c, s) {
      o[++a] = i(u, c, s);
    }), o;
  }
  return Fs = r, Fs;
}
var zs, Hy;
function _P() {
  if (Hy) return zs;
  Hy = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return zs = e, zs;
}
var Ws, Vy;
function AP() {
  if (Vy) return Ws;
  Vy = 1;
  var e = mn();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, u = e(r), c = n !== void 0, s = n === null, l = n === n, f = e(n);
      if (!s && !f && !u && r > n || u && c && l && !s && !f || a && c && l || !i && l || !o)
        return 1;
      if (!a && !u && !f && r < n || f && i && o && !a && !u || s && i && o || !c && o || !l)
        return -1;
    }
    return 0;
  }
  return Ws = t, Ws;
}
var Us, Yy;
function SP() {
  if (Yy) return Us;
  Yy = 1;
  var e = AP();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, c = o.length, s = i.length; ++a < c; ) {
      var l = e(o[a], u[a]);
      if (l) {
        if (a >= s)
          return l;
        var f = i[a];
        return l * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Us = t, Us;
}
var Ks, Xy;
function PP() {
  if (Xy) return Ks;
  Xy = 1;
  var e = qp(), t = Bp(), r = Ot(), n = Gx(), i = _P(), a = kx(), o = SP(), u = bn(), c = Ue();
  function s(l, f, p) {
    f.length ? f = e(f, function(v) {
      return c(v) ? function(d) {
        return t(d, v.length === 1 ? v[0] : v);
      } : v;
    }) : f = [u];
    var h = -1;
    f = e(f, a(r));
    var y = n(l, function(v, d, g) {
      var b = e(f, function(O) {
        return O(v);
      });
      return { criteria: b, index: ++h, value: v };
    });
    return i(y, function(v, d) {
      return o(v, d, p);
    });
  }
  return Ks = s, Ks;
}
var Gs, Zy;
function TP() {
  if (Zy) return Gs;
  Zy = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Gs = e, Gs;
}
var Hs, Jy;
function EP() {
  if (Jy) return Hs;
  Jy = 1;
  var e = TP(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, u = -1, c = t(o.length - i, 0), s = Array(c); ++u < c; )
        s[u] = o[i + u];
      u = -1;
      for (var l = Array(i + 1); ++u < i; )
        l[u] = o[u];
      return l[i] = a(s), e(n, this, l);
    };
  }
  return Hs = r, Hs;
}
var Vs, Qy;
function jP() {
  if (Qy) return Vs;
  Qy = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Vs = e, Vs;
}
var Ys, em;
function Hx() {
  if (em) return Ys;
  em = 1;
  var e = wr(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return Ys = t, Ys;
}
var Xs, tm;
function $P() {
  if (tm) return Xs;
  tm = 1;
  var e = jP(), t = Hx(), r = bn(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Xs = n, Xs;
}
var Zs, rm;
function CP() {
  if (rm) return Zs;
  rm = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var u = r(), c = t - (u - o);
      if (o = u, c > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Zs = n, Zs;
}
var Js, nm;
function MP() {
  if (nm) return Js;
  nm = 1;
  var e = $P(), t = CP(), r = t(e);
  return Js = r, Js;
}
var Qs, im;
function IP() {
  if (im) return Qs;
  im = 1;
  var e = bn(), t = EP(), r = MP();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Qs = n, Qs;
}
var el, am;
function Co() {
  if (am) return el;
  am = 1;
  var e = Np(), t = Bi(), r = Yp(), n = Ht();
  function i(a, o, u) {
    if (!n(u))
      return !1;
    var c = typeof o;
    return (c == "number" ? t(u) && r(o, u.length) : c == "string" && o in u) ? e(u[o], a) : !1;
  }
  return el = i, el;
}
var tl, om;
function kP() {
  if (om) return tl;
  om = 1;
  var e = Ux(), t = PP(), r = IP(), n = Co(), i = r(function(a, o) {
    if (a == null)
      return [];
    var u = o.length;
    return u > 1 && n(a, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return tl = i, tl;
}
var RP = kP();
const Qp = /* @__PURE__ */ oe(RP);
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function NP(e, t) {
  return BP(e) || qP(e, t) || LP(e, t) || DP();
}
function DP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LP(e, t) {
  if (e) {
    if (typeof e == "string") return um(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return um(e, t);
  }
}
function um(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function BP(e) {
  if (Array.isArray(e)) return e;
}
function cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cm(Object(r), !0).forEach(function(n) {
      FP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FP(e, t, r) {
  return t = zP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zP(e) {
  var t = WP(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function WP(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UP(e) {
  return Array.isArray(e) && Te(e[0]) && Te(e[1]) ? e.join(" ~ ") : e;
}
var KP = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, c = t.labelStyle, s = c === void 0 ? {} : c, l = t.payload, f = t.formatter, p = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, v = t.label, d = t.labelFormatter, g = t.accessibilityLayer, b = g === void 0 ? !1 : g, O = function() {
    if (l && l.length) {
      var E = {
        padding: 0,
        margin: 0
      }, $ = (p ? Qp(l, p) : l).map(function(M, C) {
        if (M.type === "none")
          return null;
        var k = rl({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: M.color || "#000"
        }, u), R = M.formatter || f || UP, L = M.value, q = M.name, U = L, V = q;
        if (R && U != null && V != null) {
          var F = R(L, q, M, C, l);
          if (Array.isArray(F)) {
            var Y = NP(F, 2);
            U = Y[0], V = Y[1];
          } else
            U = F;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(C),
            style: k
          }, Te(V) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, V) : null, Te(V) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, U), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, M.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: E
      }, $);
    }
    return null;
  }, w = rl({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = rl({
    margin: 0
  }, s), x = !G(v), _ = x ? v : "", S = X("recharts-default-tooltip", h), T = X("recharts-tooltip-label", y);
  x && d && l !== void 0 && l !== null && (_ = d(v, l));
  var j = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", wf({
    className: S,
    style: w
  }, j), /* @__PURE__ */ A.createElement("p", {
    className: T,
    style: m
  }, /* @__PURE__ */ A.isValidElement(_) ? _ : "".concat(_)), O());
};
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function Qi(e, t, r) {
  return t = GP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GP(e) {
  var t = HP(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function HP(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $n = "recharts-tooltip-wrapper", VP = {
  visibility: "hidden"
};
function YP(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return X($n, Qi(Qi(Qi(Qi({}, "".concat($n, "-right"), D(r) && t && D(t.x) && r >= t.x), "".concat($n, "-left"), D(r) && t && D(t.x) && r < t.x), "".concat($n, "-bottom"), D(n) && t && D(t.y) && n >= t.y), "".concat($n, "-top"), D(n) && t && D(t.y) && n < t.y));
}
function sm(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, c = e.viewBox, s = e.viewBoxDimension;
  if (a && D(a[n]))
    return a[n];
  var l = r[n] - u - i, f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var p = l, h = c[n];
    return p < h ? Math.max(f, c[n]) : Math.max(l, c[n]);
  }
  var y = f + u, v = c[n] + s;
  return y > v ? Math.max(l, c[n]) : Math.max(f, c[n]);
}
function XP(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function ZP(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, c = e.viewBox, s, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = sm({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = sm({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), s = XP({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : s = VP, {
    cssProperties: s,
    cssClasses: YP({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function lm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lm(Object(r), !0).forEach(function(n) {
      Af(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Yx(n.key), n);
  }
}
function eT(e, t, r) {
  return t && QP(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tT(e, t, r) {
  return t = wa(t), rT(e, Vx() ? Reflect.construct(t, r || [], wa(e).constructor) : t.apply(e, r));
}
function rT(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nT(e);
}
function nT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vx = function() {
    return !!e;
  })();
}
function wa(e) {
  return wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wa(e);
}
function iT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _f(e, t);
}
function Af(e, t, r) {
  return t = Yx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Yx(e) {
  var t = aT(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function aT(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var pm = 1, oT = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    JP(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = tT(this, t, [].concat(i)), Af(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Af(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, c, s, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0 ? u : 0,
            y: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && s !== void 0 ? s : 0
          }
        });
      }
    }), r;
  }
  return iT(t, e), eT(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > pm || Math.abs(n.height - this.state.lastBoundingBox.height) > pm) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.children, l = i.coordinate, f = i.hasPayload, p = i.isAnimationActive, h = i.offset, y = i.position, v = i.reverseDirection, d = i.useTranslate3d, g = i.viewBox, b = i.wrapperStyle, O = ZP({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: h,
        position: y,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: d,
        viewBox: g
      }), w = O.cssClasses, m = O.cssProperties, x = fm(fm({
        transition: p && a ? "transform ".concat(u, "ms ").concat(c) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: w,
          style: x,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, s)
      );
    }
  }]);
})(Ze), uT = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Dt = {
  isSsr: uT()
};
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), !0).forEach(function(n) {
      eh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Zx(n.key), n);
  }
}
function lT(e, t, r) {
  return t && sT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fT(e, t, r) {
  return t = _a(t), pT(e, Xx() ? Reflect.construct(t, r || [], _a(e).constructor) : t.apply(e, r));
}
function pT(e, t) {
  if (t && (Gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hT(e);
}
function hT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xx = function() {
    return !!e;
  })();
}
function _a(e) {
  return _a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _a(e);
}
function dT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sf(e, t);
}
function Sf(e, t) {
  return Sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sf(e, t);
}
function eh(e, t, r) {
  return t = Zx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Zx(e) {
  var t = vT(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function vT(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function yT(e) {
  return e.dataKey;
}
function mT(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement(KP, t);
}
var ze = /* @__PURE__ */ (function(e) {
  function t() {
    return cT(this, t), fT(this, t, arguments);
  }
  return dT(t, e), lT(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.content, l = i.coordinate, f = i.filterNull, p = i.isAnimationActive, h = i.offset, y = i.payload, v = i.payloadUniqBy, d = i.position, g = i.reverseDirection, b = i.useTranslate3d, O = i.viewBox, w = i.wrapperStyle, m = y ?? [];
      f && m.length && (m = Fx(y.filter(function(_) {
        return _.value != null && (_.hide !== !0 || n.props.includeHidden);
      }), v, yT));
      var x = m.length > 0;
      return /* @__PURE__ */ A.createElement(oT, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: c,
        isAnimationActive: p,
        active: a,
        coordinate: l,
        hasPayload: x,
        offset: h,
        position: d,
        reverseDirection: g,
        useTranslate3d: b,
        viewBox: O,
        wrapperStyle: w
      }, mT(s, dm(dm({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(Ze);
eh(ze, "displayName", "Tooltip");
eh(ze, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Dt.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var nl, vm;
function gT() {
  if (vm) return nl;
  vm = 1;
  var e = xt(), t = function() {
    return e.Date.now();
  };
  return nl = t, nl;
}
var il, ym;
function bT() {
  if (ym) return il;
  ym = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return il = t, il;
}
var al, mm;
function xT() {
  if (mm) return al;
  mm = 1;
  var e = bT(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return al = r, al;
}
var ol, gm;
function Jx() {
  if (gm) return ol;
  gm = 1;
  var e = xT(), t = Ht(), r = mn(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function c(s) {
    if (typeof s == "number")
      return s;
    if (r(s))
      return n;
    if (t(s)) {
      var l = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = t(l) ? l + "" : l;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = e(s);
    var f = a.test(s);
    return f || o.test(s) ? u(s.slice(2), f ? 2 : 8) : i.test(s) ? n : +s;
  }
  return ol = c, ol;
}
var ul, bm;
function OT() {
  if (bm) return ul;
  bm = 1;
  var e = Ht(), t = gT(), r = Jx(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(u, c, s) {
    var l, f, p, h, y, v, d = 0, g = !1, b = !1, O = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(s) && (g = !!s.leading, b = "maxWait" in s, p = b ? i(r(s.maxWait) || 0, c) : p, O = "trailing" in s ? !!s.trailing : O);
    function w($) {
      var M = l, C = f;
      return l = f = void 0, d = $, h = u.apply(C, M), h;
    }
    function m($) {
      return d = $, y = setTimeout(S, c), g ? w($) : h;
    }
    function x($) {
      var M = $ - v, C = $ - d, k = c - M;
      return b ? a(k, p - C) : k;
    }
    function _($) {
      var M = $ - v, C = $ - d;
      return v === void 0 || M >= c || M < 0 || b && C >= p;
    }
    function S() {
      var $ = t();
      if (_($))
        return T($);
      y = setTimeout(S, x($));
    }
    function T($) {
      return y = void 0, O && l ? w($) : (l = f = void 0, h);
    }
    function j() {
      y !== void 0 && clearTimeout(y), d = 0, l = v = f = y = void 0;
    }
    function P() {
      return y === void 0 ? h : T(t());
    }
    function E() {
      var $ = t(), M = _($);
      if (l = arguments, f = this, v = $, M) {
        if (y === void 0)
          return m(v);
        if (b)
          return clearTimeout(y), y = setTimeout(S, c), w(v);
      }
      return y === void 0 && (y = setTimeout(S, c)), h;
    }
    return E.cancel = j, E.flush = P, E;
  }
  return ul = o, ul;
}
var cl, xm;
function wT() {
  if (xm) return cl;
  xm = 1;
  var e = OT(), t = Ht(), r = "Expected a function";
  function n(i, a, o) {
    var u = !0, c = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, c = "trailing" in o ? !!o.trailing : c), e(i, a, {
      leading: u,
      maxWait: a,
      trailing: c
    });
  }
  return cl = n, cl;
}
var _T = wT();
const Qx = /* @__PURE__ */ oe(_T);
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      AT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AT(e, t, r) {
  return t = ST(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ST(e) {
  var t = PT(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function PT(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TT(e, t) {
  return CT(e) || $T(e, t) || jT(e, t) || ET();
}
function ET() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jT(e, t) {
  if (e) {
    if (typeof e == "string") return wm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wm(e, t);
  }
}
function wm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $T(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function CT(e) {
  if (Array.isArray(e)) return e;
}
var Fi = /* @__PURE__ */ go(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, c = u === void 0 ? "100%" : u, s = e.minWidth, l = s === void 0 ? 0 : s, f = e.minHeight, p = e.maxHeight, h = e.children, y = e.debounce, v = y === void 0 ? 0 : y, d = e.id, g = e.className, b = e.onResize, O = e.style, w = O === void 0 ? {} : O, m = pa(null), x = pa();
  x.current = b, j_(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var _ = Mp({
    containerWidth: i.width,
    containerHeight: i.height
  }), S = TT(_, 2), T = S[0], j = S[1], P = $_(function($, M) {
    j(function(C) {
      var k = Math.round($), R = Math.round(M);
      return C.containerWidth === k && C.containerHeight === R ? C : {
        containerWidth: k,
        containerHeight: R
      };
    });
  }, []);
  Ip(function() {
    var $ = function(q) {
      var U, V = q[0].contentRect, F = V.width, Y = V.height;
      P(F, Y), (U = x.current) === null || U === void 0 || U.call(x, F, Y);
    };
    v > 0 && ($ = Qx($, v, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver($), C = m.current.getBoundingClientRect(), k = C.width, R = C.height;
    return P(k, R), M.observe(m.current), function() {
      M.disconnect();
    };
  }, [P, v]);
  var E = xe(function() {
    var $ = T.containerWidth, M = T.containerHeight;
    if ($ < 0 || M < 0)
      return null;
    ht(cr(o) || cr(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), ht(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var C = cr(o) ? $ : o, k = cr(c) ? M : c;
    r && r > 0 && (C ? k = C / r : k && (C = k * r), p && k > p && (k = p)), ht(C > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, C, k, o, c, l, f, r);
    var R = !Array.isArray(h) && Et(h.type).endsWith("Chart");
    return A.Children.map(h, function(L) {
      return /* @__PURE__ */ A.isValidElement(L) ? /* @__PURE__ */ Pe(L, ea({
        width: C,
        height: k
      }, R ? {
        style: ea({
          height: "100%",
          width: "100%",
          maxHeight: k,
          maxWidth: C
        }, L.props.style)
      } : {})) : L;
    });
  }, [r, h, c, p, f, l, T, o]);
  return /* @__PURE__ */ A.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: X("recharts-responsive-container", g),
    style: ea(ea({}, w), {}, {
      width: o,
      height: c,
      minWidth: l,
      minHeight: f,
      maxHeight: p
    }),
    ref: m
  }, E);
}), xn = function(t) {
  return null;
};
xn.displayName = "Cell";
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      MT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MT(e, t, r) {
  return t = IT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IT(e) {
  var t = kT(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function kT(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = {
  widthCache: {},
  cacheCount: 0
}, RT = 2e3, NT = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Am = "recharts_measurement_span";
function DT(e) {
  var t = Pf({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var zn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Dt.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = DT(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if ($r.widthCache[i])
    return $r.widthCache[i];
  try {
    var a = document.getElementById(Am);
    a || (a = document.createElement("span"), a.setAttribute("id", Am), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Pf(Pf({}, NT), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), c = {
      width: u.width,
      height: u.height
    };
    return $r.widthCache[i] = c, ++$r.cacheCount > RT && ($r.cacheCount = 0, $r.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, LT = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function Aa(e, t) {
  return zT(e) || FT(e, t) || BT(e, t) || qT();
}
function qT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BT(e, t) {
  if (e) {
    if (typeof e == "string") return Sm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sm(e, t);
  }
}
function Sm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function zT(e) {
  if (Array.isArray(e)) return e;
}
function WT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, KT(n.key), n);
  }
}
function UT(e, t, r) {
  return t && Pm(e.prototype, t), r && Pm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KT(e) {
  var t = GT(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function GT(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Tm = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Em = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, HT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, VT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, eO = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, YT = Object.keys(eO), kr = "NaN";
function XT(e, t) {
  return e * eO[t];
}
var ta = /* @__PURE__ */ (function() {
  function e(t, r) {
    WT(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !HT.test(r) && (this.num = NaN, this.unit = ""), YT.includes(r) && (this.num = XT(t, r), this.unit = "px");
  }
  return UT(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = VT.exec(r)) !== null && n !== void 0 ? n : [], a = Aa(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
})();
function tO(e) {
  if (e.includes(kr))
    return kr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = Tm.exec(t)) !== null && r !== void 0 ? r : [], i = Aa(n, 4), a = i[1], o = i[2], u = i[3], c = ta.parse(a ?? ""), s = ta.parse(u ?? ""), l = o === "*" ? c.multiply(s) : c.divide(s);
    if (l.isNaN())
      return kr;
    t = t.replace(Tm, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, p = (f = Em.exec(t)) !== null && f !== void 0 ? f : [], h = Aa(p, 4), y = h[1], v = h[2], d = h[3], g = ta.parse(y ?? ""), b = ta.parse(d ?? ""), O = v === "+" ? g.add(b) : g.subtract(b);
    if (O.isNaN())
      return kr;
    t = t.replace(Em, O.toString());
  }
  return t;
}
var jm = /\(([^()]*)\)/;
function ZT(e) {
  for (var t = e; t.includes("("); ) {
    var r = jm.exec(t), n = Aa(r, 2), i = n[1];
    t = t.replace(jm, tO(i));
  }
  return t;
}
function JT(e) {
  var t = e.replace(/\s+/g, "");
  return t = ZT(t), t = tO(t), t;
}
function QT(e) {
  try {
    return JT(e);
  } catch {
    return kr;
  }
}
function sl(e) {
  var t = QT(e.slice(5, -1));
  return t === kr ? "" : t;
}
var eE = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], tE = ["dx", "dy", "angle", "className", "breakAll"];
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function $m(e, t) {
  if (e == null) return {};
  var r = rE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function rE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Cm(e, t) {
  return oE(e) || aE(e, t) || iE(e, t) || nE();
}
function nE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iE(e, t) {
  if (e) {
    if (typeof e == "string") return Mm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mm(e, t);
  }
}
function Mm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function aE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function oE(e) {
  if (Array.isArray(e)) return e;
}
var rO = /[ \f\n\r\t\v\u2028\u2029]+/, nO = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    G(r) || (n ? a = r.toString().split("") : a = r.toString().split(rO));
    var o = a.map(function(c) {
      return {
        word: c,
        width: zn(c, i).width
      };
    }), u = n ? 0 : zn(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, uE = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, c = t.style, s = t.breakAll, l = D(o), f = u, p = function() {
    var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return C.reduce(function(k, R) {
      var L = R.word, q = R.width, U = k[k.length - 1];
      if (U && (i == null || a || U.width + q + n < Number(i)))
        U.words.push(L), U.width += q + n;
      else {
        var V = {
          words: [L],
          width: q
        };
        k.push(V);
      }
      return k;
    }, []);
  }, h = p(r), y = function(C) {
    return C.reduce(function(k, R) {
      return k.width > R.width ? k : R;
    });
  };
  if (!l)
    return h;
  for (var v = "…", d = function(C) {
    var k = f.slice(0, C), R = nO({
      breakAll: s,
      style: c,
      children: k + v
    }).wordsWithComputedWidth, L = p(R), q = L.length > o || y(L).width > Number(i);
    return [q, L];
  }, g = 0, b = f.length - 1, O = 0, w; g <= b && O <= f.length - 1; ) {
    var m = Math.floor((g + b) / 2), x = m - 1, _ = d(x), S = Cm(_, 2), T = S[0], j = S[1], P = d(m), E = Cm(P, 1), $ = E[0];
    if (!T && !$ && (g = m + 1), T && $ && (b = m - 1), !T && $) {
      w = j;
      break;
    }
    O++;
  }
  return w || h;
}, Im = function(t) {
  var r = G(t) ? [] : t.toString().split(rO);
  return [{
    words: r
  }];
}, cE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Dt.isSsr) {
    var c, s, l = nO({
      breakAll: o,
      children: i,
      style: a
    });
    if (l) {
      var f = l.wordsWithComputedWidth, p = l.spaceWidth;
      c = f, s = p;
    } else
      return Im(i);
    return uE({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, c, s, r, n);
  }
  return Im(i);
}, km = "#808080", mr = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, c = t.capHeight, s = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? !1 : l, p = t.textAnchor, h = p === void 0 ? "start" : p, y = t.verticalAnchor, v = y === void 0 ? "end" : y, d = t.fill, g = d === void 0 ? km : d, b = $m(t, eE), O = xe(function() {
    return cE({
      breakAll: b.breakAll,
      children: b.children,
      maxLines: b.maxLines,
      scaleToFit: f,
      style: b.style,
      width: b.width
    });
  }, [b.breakAll, b.children, b.maxLines, f, b.style, b.width]), w = b.dx, m = b.dy, x = b.angle, _ = b.className, S = b.breakAll, T = $m(b, tE);
  if (!Te(n) || !Te(a))
    return null;
  var j = n + (D(w) ? w : 0), P = a + (D(m) ? m : 0), E;
  switch (v) {
    case "start":
      E = sl("calc(".concat(s, ")"));
      break;
    case "middle":
      E = sl("calc(".concat((O.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
      break;
    default:
      E = sl("calc(".concat(O.length - 1, " * -").concat(u, ")"));
      break;
  }
  var $ = [];
  if (f) {
    var M = O[0].width, C = b.width;
    $.push("scale(".concat((D(C) ? C / M : 1) / M, ")"));
  }
  return x && $.push("rotate(".concat(x, ", ").concat(j, ", ").concat(P, ")")), $.length && (T.transform = $.join(" ")), /* @__PURE__ */ A.createElement("text", Tf({}, W(T, !0), {
    x: j,
    y: P,
    className: X("recharts-text", _),
    textAnchor: h,
    fill: g.includes("url") ? km : g
  }), O.map(function(k, R) {
    var L = k.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ A.createElement("tspan", {
        x: j,
        dy: R === 0 ? E : u,
        key: "".concat(L, "-").concat(R)
      }, L)
    );
  }));
};
function Kt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function sE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function th(e) {
  let t, r, n;
  e.length !== 2 ? (t = Kt, r = (u, c) => Kt(e(u), c), n = (u, c) => e(u) - c) : (t = e === Kt || e === sE ? e : lE, r = e, n = e);
  function i(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        r(u[f], c) < 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function a(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        r(u[f], c) <= 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function o(u, c, s = 0, l = u.length) {
    const f = i(u, c, s, l - 1);
    return f > s && n(u[f - 1], c) > -n(u[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function lE() {
  return 0;
}
function iO(e) {
  return e === null ? NaN : +e;
}
function* fE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const pE = th(Kt), zi = pE.right;
th(iO).center;
class Rm extends Map {
  constructor(t, r = vE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Nm(this, t));
  }
  has(t) {
    return super.has(Nm(this, t));
  }
  set(t, r) {
    return super.set(hE(this, t), r);
  }
  delete(t) {
    return super.delete(dE(this, t));
  }
}
function Nm({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function hE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function dE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function vE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function yE(e = Kt) {
  if (e === Kt) return aO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function aO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const mE = Math.sqrt(50), gE = Math.sqrt(10), bE = Math.sqrt(2);
function Sa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= mE ? 10 : a >= gE ? 5 : a >= bE ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e * s), c = Math.round(t * s), u / s < e && ++u, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e / s), c = Math.round(t / s), u * s < e && ++u, c * s > t && --c), c < u && 0.5 <= r && r < 2 ? Sa(e, t, r * 2) : [u, c, s];
}
function Ef(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? Sa(t, e, r) : Sa(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, c = new Array(u);
  if (n)
    if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o;
    else for (let s = 0; s < u; ++s) c[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * o;
  return c;
}
function jf(e, t, r) {
  return t = +t, e = +e, r = +r, Sa(e, t, r)[2];
}
function $f(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? jf(t, e, r) : jf(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Dm(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Lm(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function oO(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? aO : yE(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), p = 0.5 * Math.sqrt(l * f * (c - f) / c) * (s - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * f / c + p)), y = Math.min(n, Math.floor(t + (c - s) * f / c + p));
      oO(e, t, h, y, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Cn(e, r, t), i(e[n], a) > 0 && Cn(e, r, n); o < u; ) {
      for (Cn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Cn(e, r, u) : (++u, Cn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Cn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function xE(e, t, r) {
  if (e = Float64Array.from(fE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Lm(e);
    if (t >= 1) return Dm(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Dm(oO(e, a).subarray(0, a + 1)), u = Lm(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function OE(e, t, r = iO) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function wE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function ut(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Lt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Cf = Symbol("implicit");
function rh() {
  var e = new Rm(), t = [], r = [], n = Cf;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Cf) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new Rm();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return rh(t, r).unknown(n);
  }, ut.apply(i, arguments), i;
}
function ai() {
  var e = rh().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, c = 0, s = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var p = t().length, h = i < n, y = h ? i : n, v = h ? n : i;
    a = (v - y) / Math.max(1, p - c + s * 2), u && (a = Math.floor(a)), y += (v - y - a * (p - c)) * l, o = a * (1 - c), u && (y = Math.round(y), o = Math.round(o));
    var d = wE(p).map(function(g) {
      return y + a * g;
    });
    return r(h ? d.reverse() : d);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), f()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([n, i] = p, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(p) {
    return [n, i] = p, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(p) {
    return arguments.length ? (u = !!p, f()) : u;
  }, e.padding = function(p) {
    return arguments.length ? (c = Math.min(1, s = +p), f()) : c;
  }, e.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), f()) : c;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (s = +p, f()) : s;
  }, e.align = function(p) {
    return arguments.length ? (l = Math.max(0, Math.min(1, p)), f()) : l;
  }, e.copy = function() {
    return ai(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(l);
  }, ut.apply(f(), arguments);
}
function uO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return uO(t());
  }, e;
}
function Wn() {
  return uO(ai.apply(null, arguments).paddingInner(1));
}
function nh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function cO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Wi() {
}
var oi = 0.7, Pa = 1 / oi, Br = "\\s*([+-]?\\d+)\\s*", ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _E = /^#([0-9a-f]{3,8})$/, AE = new RegExp(`^rgb\\(${Br},${Br},${Br}\\)$`), SE = new RegExp(`^rgb\\(${mt},${mt},${mt}\\)$`), PE = new RegExp(`^rgba\\(${Br},${Br},${Br},${ui}\\)$`), TE = new RegExp(`^rgba\\(${mt},${mt},${mt},${ui}\\)$`), EE = new RegExp(`^hsl\\(${ui},${mt},${mt}\\)$`), jE = new RegExp(`^hsla\\(${ui},${mt},${mt},${ui}\\)$`), qm = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
nh(Wi, ci, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Bm,
  // Deprecated! Use color.formatHex.
  formatHex: Bm,
  formatHex8: $E,
  formatHsl: CE,
  formatRgb: Fm,
  toString: Fm
});
function Bm() {
  return this.rgb().formatHex();
}
function $E() {
  return this.rgb().formatHex8();
}
function CE() {
  return sO(this).formatHsl();
}
function Fm() {
  return this.rgb().formatRgb();
}
function ci(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = _E.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? zm(t) : r === 3 ? new We(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ra(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ra(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = AE.exec(e)) ? new We(t[1], t[2], t[3], 1) : (t = SE.exec(e)) ? new We(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = PE.exec(e)) ? ra(t[1], t[2], t[3], t[4]) : (t = TE.exec(e)) ? ra(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = EE.exec(e)) ? Km(t[1], t[2] / 100, t[3] / 100, 1) : (t = jE.exec(e)) ? Km(t[1], t[2] / 100, t[3] / 100, t[4]) : qm.hasOwnProperty(e) ? zm(qm[e]) : e === "transparent" ? new We(NaN, NaN, NaN, 0) : null;
}
function zm(e) {
  return new We(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ra(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new We(e, t, r, n);
}
function ME(e) {
  return e instanceof Wi || (e = ci(e)), e ? (e = e.rgb(), new We(e.r, e.g, e.b, e.opacity)) : new We();
}
function Mf(e, t, r, n) {
  return arguments.length === 1 ? ME(e) : new We(e, t, r, n ?? 1);
}
function We(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
nh(We, Mf, cO(Wi, {
  brighter(e) {
    return e = e == null ? Pa : Math.pow(Pa, e), new We(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new We(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new We(dr(this.r), dr(this.g), dr(this.b), Ta(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Wm,
  // Deprecated! Use color.formatHex.
  formatHex: Wm,
  formatHex8: IE,
  formatRgb: Um,
  toString: Um
}));
function Wm() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}`;
}
function IE() {
  return `#${sr(this.r)}${sr(this.g)}${sr(this.b)}${sr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Um() {
  const e = Ta(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${dr(this.r)}, ${dr(this.g)}, ${dr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ta(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function dr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function sr(e) {
  return e = dr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Km(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ft(e, t, r, n);
}
function sO(e) {
  if (e instanceof ft) return new ft(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wi || (e = ci(e)), !e) return new ft();
  if (e instanceof ft) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, c = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new ft(o, u, c, e.opacity);
}
function kE(e, t, r, n) {
  return arguments.length === 1 ? sO(e) : new ft(e, t, r, n ?? 1);
}
function ft(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
nh(ft, kE, cO(Wi, {
  brighter(e) {
    return e = e == null ? Pa : Math.pow(Pa, e), new ft(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new ft(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new We(
      ll(e >= 240 ? e - 240 : e + 120, i, n),
      ll(e, i, n),
      ll(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new ft(Gm(this.h), na(this.s), na(this.l), Ta(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ta(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Gm(this.h)}, ${na(this.s) * 100}%, ${na(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Gm(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function na(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function ll(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ih = (e) => () => e;
function RE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function NE(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function DE(e) {
  return (e = +e) == 1 ? lO : function(t, r) {
    return r - t ? NE(t, r, e) : ih(isNaN(t) ? r : t);
  };
}
function lO(e, t) {
  var r = t - e;
  return r ? RE(e, r) : ih(isNaN(e) ? t : e);
}
const Hm = (function e(t) {
  var r = DE(t);
  function n(i, a) {
    var o = r((i = Mf(i)).r, (a = Mf(a)).r), u = r(i.g, a.g), c = r(i.b, a.b), s = lO(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function LE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function qE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function BE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = On(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function FE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ea(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function zE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = On(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var If = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fl = new RegExp(If.source, "g");
function WE(e) {
  return function() {
    return e;
  };
}
function UE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function KE(e, t) {
  var r = If.lastIndex = fl.lastIndex = 0, n, i, a, o = -1, u = [], c = [];
  for (e = e + "", t = t + ""; (n = If.exec(e)) && (i = fl.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, c.push({ i: o, x: Ea(n, i) })), r = fl.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? c[0] ? UE(c[0].x) : WE(t) : (t = c.length, function(s) {
    for (var l = 0, f; l < t; ++l) u[(f = c[l]).i] = f.x(s);
    return u.join("");
  });
}
function On(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ih(t) : (r === "number" ? Ea : r === "string" ? (n = ci(t)) ? (t = n, Hm) : KE : t instanceof ci ? Hm : t instanceof Date ? FE : qE(t) ? LE : Array.isArray(t) ? BE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zE : Ea)(e, t);
}
function ah(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function GE(e, t) {
  t === void 0 && (t = e, e = On);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function HE(e) {
  return function() {
    return e;
  };
}
function ja(e) {
  return +e;
}
var Vm = [0, 1];
function Le(e) {
  return e;
}
function kf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : HE(isNaN(t) ? NaN : 0.5);
}
function VE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function YE(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = kf(i, n), a = r(o, a)) : (n = kf(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function XE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = kf(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var c = zi(e, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function Ui(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Mo() {
  var e = Vm, t = Vm, r = On, n, i, a, o = Le, u, c, s;
  function l() {
    var p = Math.min(e.length, t.length);
    return o !== Le && (o = VE(e[0], e[p - 1])), u = p > 2 ? XE : YE, c = s = null, f;
  }
  function f(p) {
    return p == null || isNaN(p = +p) ? a : (c || (c = u(e.map(n), t, r)))(n(o(p)));
  }
  return f.invert = function(p) {
    return o(i((s || (s = u(t, e.map(n), Ea)))(p)));
  }, f.domain = function(p) {
    return arguments.length ? (e = Array.from(p, ja), l()) : e.slice();
  }, f.range = function(p) {
    return arguments.length ? (t = Array.from(p), l()) : t.slice();
  }, f.rangeRound = function(p) {
    return t = Array.from(p), r = ah, l();
  }, f.clamp = function(p) {
    return arguments.length ? (o = p ? !0 : Le, l()) : o !== Le;
  }, f.interpolate = function(p) {
    return arguments.length ? (r = p, l()) : r;
  }, f.unknown = function(p) {
    return arguments.length ? (a = p, f) : a;
  }, function(p, h) {
    return n = p, i = h, l();
  };
}
function oh() {
  return Mo()(Le, Le);
}
function ZE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function $a(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Hr(e) {
  return e = $a(Math.abs(e)), e ? e[1] : NaN;
}
function JE(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring(i -= u, i + u)), !((c += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function QE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var ej = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function si(e) {
  if (!(t = ej.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new uh({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
si.prototype = uh.prototype;
function uh(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
uh.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function tj(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var fO;
function rj(e, t) {
  var r = $a(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (fO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + $a(e, Math.max(0, t + a - 1))[0];
}
function Ym(e, t) {
  var r = $a(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Xm = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ZE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ym(e * 100, t),
  r: Ym,
  s: rj,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Zm(e) {
  return e;
}
var Jm = Array.prototype.map, Qm = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function nj(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Zm : JE(Jm.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Zm : QE(Jm.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f) {
    f = si(f);
    var p = f.fill, h = f.align, y = f.sign, v = f.symbol, d = f.zero, g = f.width, b = f.comma, O = f.precision, w = f.trim, m = f.type;
    m === "n" ? (b = !0, m = "g") : Xm[m] || (O === void 0 && (O = 12), w = !0, m = "g"), (d || p === "0" && h === "=") && (d = !0, p = "0", h = "=");
    var x = v === "$" ? r : v === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", _ = v === "$" ? n : /[%p]/.test(m) ? o : "", S = Xm[m], T = /[defgprs%]/.test(m);
    O = O === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, O)) : Math.max(0, Math.min(20, O));
    function j(P) {
      var E = x, $ = _, M, C, k;
      if (m === "c")
        $ = S(P) + $, P = "";
      else {
        P = +P;
        var R = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? c : S(Math.abs(P), O), w && (P = tj(P)), R && +P == 0 && y !== "+" && (R = !1), E = (R ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + E, $ = (m === "s" ? Qm[8 + fO / 3] : "") + $ + (R && y === "(" ? ")" : ""), T) {
          for (M = -1, C = P.length; ++M < C; )
            if (k = P.charCodeAt(M), 48 > k || k > 57) {
              $ = (k === 46 ? i + P.slice(M + 1) : P.slice(M)) + $, P = P.slice(0, M);
              break;
            }
        }
      }
      b && !d && (P = t(P, 1 / 0));
      var L = E.length + P.length + $.length, q = L < g ? new Array(g - L + 1).join(p) : "";
      switch (b && d && (P = t(q + P, q.length ? g - $.length : 1 / 0), q = ""), h) {
        case "<":
          P = E + P + $ + q;
          break;
        case "=":
          P = E + q + P + $;
          break;
        case "^":
          P = q.slice(0, L = q.length >> 1) + E + P + $ + q.slice(L);
          break;
        default:
          P = q + E + P + $;
          break;
      }
      return a(P);
    }
    return j.toString = function() {
      return f + "";
    }, j;
  }
  function l(f, p) {
    var h = s((f = si(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Hr(p) / 3))) * 3, v = Math.pow(10, -y), d = Qm[8 + y / 3];
    return function(g) {
      return h(v * g) + d;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var ia, ch, pO;
ij({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ij(e) {
  return ia = nj(e), ch = ia.format, pO = ia.formatPrefix, ia;
}
function aj(e) {
  return Math.max(0, -Hr(Math.abs(e)));
}
function oj(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Hr(t) / 3))) * 3 - Hr(Math.abs(e)));
}
function uj(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Hr(t) - Hr(e)) + 1;
}
function hO(e, t, r, n) {
  var i = $f(e, t, r), a;
  switch (n = si(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = oj(i, o)) && (n.precision = a), pO(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = uj(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = aj(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return ch(n);
}
function Vt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ef(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return hO(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], c, s, l = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); l-- > 0; ) {
      if (s = jf(o, u, r), s === c)
        return n[i] = o, n[a] = u, t(n);
      if (s > 0)
        o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      c = s;
    }
    return e;
  }, e;
}
function Ca() {
  var e = oh();
  return e.copy = function() {
    return Ui(e, Ca());
  }, ut.apply(e, arguments), Vt(e);
}
function dO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ja), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return dO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ja) : [0, 1], Vt(r);
}
function vO(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function eg(e) {
  return Math.log(e);
}
function tg(e) {
  return Math.exp(e);
}
function cj(e) {
  return -Math.log(-e);
}
function sj(e) {
  return -Math.exp(-e);
}
function lj(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function fj(e) {
  return e === 10 ? lj : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function pj(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function rg(e) {
  return (t, r) => -e(-t, r);
}
function sh(e) {
  const t = e(eg, tg), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = pj(n), a = fj(n), r()[0] < 0 ? (i = rg(i), a = rg(a), e(cj, sj)) : e(eg, tg), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const c = r();
    let s = c[0], l = c[c.length - 1];
    const f = l < s;
    f && ([s, l] = [l, s]);
    let p = i(s), h = i(l), y, v;
    const d = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && h - p < d) {
      if (p = Math.floor(p), h = Math.ceil(h), s > 0) {
        for (; p <= h; ++p)
          for (y = 1; y < n; ++y)
            if (v = p < 0 ? y / a(-p) : y * a(p), !(v < s)) {
              if (v > l) break;
              g.push(v);
            }
      } else for (; p <= h; ++p)
        for (y = n - 1; y >= 1; --y)
          if (v = p > 0 ? y / a(-p) : y * a(p), !(v < s)) {
            if (v > l) break;
            g.push(v);
          }
      g.length * 2 < d && (g = Ef(s, l, d));
    } else
      g = Ef(p, h, Math.min(h - p, d)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (u, c) => {
    if (u == null && (u = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = si(c)).precision == null && (c.trim = !0), c = ch(c)), u === 1 / 0) return c;
    const s = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= s ? c(l) : "";
    };
  }, t.nice = () => r(vO(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function yO() {
  const e = sh(Mo()).domain([1, 10]);
  return e.copy = () => Ui(e, yO()).base(e.base()), ut.apply(e, arguments), e;
}
function ng(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function ig(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function lh(e) {
  var t = 1, r = e(ng(t), ig(t));
  return r.constant = function(n) {
    return arguments.length ? e(ng(t = +n), ig(t)) : t;
  }, Vt(r);
}
function mO() {
  var e = lh(Mo());
  return e.copy = function() {
    return Ui(e, mO()).constant(e.constant());
  }, ut.apply(e, arguments);
}
function ag(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function hj(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function dj(e) {
  return e < 0 ? -e * e : e * e;
}
function fh(e) {
  var t = e(Le, Le), r = 1;
  function n() {
    return r === 1 ? e(Le, Le) : r === 0.5 ? e(hj, dj) : e(ag(r), ag(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Vt(t);
}
function ph() {
  var e = fh(Mo());
  return e.copy = function() {
    return Ui(e, ph()).exponent(e.exponent());
  }, ut.apply(e, arguments), e;
}
function vj() {
  return ph.apply(null, arguments).exponent(0.5);
}
function og(e) {
  return Math.sign(e) * e * e;
}
function yj(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function gO() {
  var e = oh(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = yj(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(og(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ja)).map(og)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return gO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, ut.apply(i, arguments), Vt(i);
}
function bO() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = OE(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[zi(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Kt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return bO().domain(e).range(t).unknown(n);
  }, ut.apply(a, arguments);
}
function xO() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[zi(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(c) {
    var s = i.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return xO().domain([e, t]).range(i).unknown(a);
  }, ut.apply(Vt(o), arguments);
}
function OO() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[zi(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return OO().domain(e).range(t).unknown(r);
  }, ut.apply(i, arguments);
}
const pl = /* @__PURE__ */ new Date(), hl = /* @__PURE__ */ new Date();
function Ee(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const c = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (s < a && a < o);
    return c;
  }, i.filter = (a) => Ee((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (pl.setTime(+a), hl.setTime(+o), e(pl), e(hl), Math.floor(r(pl, hl))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Ma = Ee(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ma.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ee((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ma);
Ma.range;
const St = 1e3, nt = St * 60, Pt = nt * 60, $t = Pt * 24, hh = $t * 7, ug = $t * 30, dl = $t * 365, lr = Ee((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * St);
}, (e, t) => (t - e) / St, (e) => e.getUTCSeconds());
lr.range;
const dh = Ee((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * St);
}, (e, t) => {
  e.setTime(+e + t * nt);
}, (e, t) => (t - e) / nt, (e) => e.getMinutes());
dh.range;
const vh = Ee((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * nt);
}, (e, t) => (t - e) / nt, (e) => e.getUTCMinutes());
vh.range;
const yh = Ee((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * St - e.getMinutes() * nt);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getHours());
yh.range;
const mh = Ee((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCHours());
mh.range;
const Ki = Ee(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * nt) / $t,
  (e) => e.getDate() - 1
);
Ki.range;
const Io = Ee((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCDate() - 1);
Io.range;
const wO = Ee((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $t, (e) => Math.floor(e / $t));
wO.range;
function Ar(e) {
  return Ee((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * nt) / hh);
}
const ko = Ar(0), Ia = Ar(1), mj = Ar(2), gj = Ar(3), Vr = Ar(4), bj = Ar(5), xj = Ar(6);
ko.range;
Ia.range;
mj.range;
gj.range;
Vr.range;
bj.range;
xj.range;
function Sr(e) {
  return Ee((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / hh);
}
const Ro = Sr(0), ka = Sr(1), Oj = Sr(2), wj = Sr(3), Yr = Sr(4), _j = Sr(5), Aj = Sr(6);
Ro.range;
ka.range;
Oj.range;
wj.range;
Yr.range;
_j.range;
Aj.range;
const gh = Ee((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
gh.range;
const bh = Ee((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
bh.range;
const Ct = Ee((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ct.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ee((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ct.range;
const Mt = Ee((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Mt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ee((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Mt.range;
function _O(e, t, r, n, i, a) {
  const o = [
    [lr, 1, St],
    [lr, 5, 5 * St],
    [lr, 15, 15 * St],
    [lr, 30, 30 * St],
    [a, 1, nt],
    [a, 5, 5 * nt],
    [a, 15, 15 * nt],
    [a, 30, 30 * nt],
    [i, 1, Pt],
    [i, 3, 3 * Pt],
    [i, 6, 6 * Pt],
    [i, 12, 12 * Pt],
    [n, 1, $t],
    [n, 2, 2 * $t],
    [r, 1, hh],
    [t, 1, ug],
    [t, 3, 3 * ug],
    [e, 1, dl]
  ];
  function u(s, l, f) {
    const p = l < s;
    p && ([s, l] = [l, s]);
    const h = f && typeof f.range == "function" ? f : c(s, l, f), y = h ? h.range(s, +l + 1) : [];
    return p ? y.reverse() : y;
  }
  function c(s, l, f) {
    const p = Math.abs(l - s) / f, h = th(([, , d]) => d).right(o, p);
    if (h === o.length) return e.every($f(s / dl, l / dl, f));
    if (h === 0) return Ma.every(Math.max($f(s, l, f), 1));
    const [y, v] = o[p / o[h - 1][2] < o[h][2] / p ? h - 1 : h];
    return y.every(v);
  }
  return [u, c];
}
const [Sj, Pj] = _O(Mt, bh, Ro, wO, mh, vh), [Tj, Ej] = _O(Ct, gh, ko, Ki, yh, dh);
function vl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function yl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Mn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function jj(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, c = e.shortMonths, s = In(i), l = kn(i), f = In(a), p = kn(a), h = In(o), y = kn(o), v = In(u), d = kn(u), g = In(c), b = kn(c), O = {
    a: R,
    A: L,
    b: q,
    B: U,
    c: null,
    d: hg,
    e: hg,
    f: Jj,
    g: c$,
    G: l$,
    H: Yj,
    I: Xj,
    j: Zj,
    L: AO,
    m: Qj,
    M: e$,
    p: V,
    q: F,
    Q: yg,
    s: mg,
    S: t$,
    u: r$,
    U: n$,
    V: i$,
    w: a$,
    W: o$,
    x: null,
    X: null,
    y: u$,
    Y: s$,
    Z: f$,
    "%": vg
  }, w = {
    a: Y,
    A: fe,
    b: ge,
    B: Ke,
    c: null,
    d: dg,
    e: dg,
    f: v$,
    g: S$,
    G: T$,
    H: p$,
    I: h$,
    j: d$,
    L: PO,
    m: y$,
    M: m$,
    p: Qt,
    q: Be,
    Q: yg,
    s: mg,
    S: g$,
    u: b$,
    U: x$,
    V: O$,
    w: w$,
    W: _$,
    x: null,
    X: null,
    y: A$,
    Y: P$,
    Z: E$,
    "%": vg
  }, m = {
    a: j,
    A: P,
    b: E,
    B: $,
    c: M,
    d: fg,
    e: fg,
    f: Kj,
    g: lg,
    G: sg,
    H: pg,
    I: pg,
    j: Fj,
    L: Uj,
    m: Bj,
    M: zj,
    p: T,
    q: qj,
    Q: Hj,
    s: Vj,
    S: Wj,
    u: kj,
    U: Rj,
    V: Nj,
    w: Ij,
    W: Dj,
    x: C,
    X: k,
    y: lg,
    Y: sg,
    Z: Lj,
    "%": Gj
  };
  O.x = x(r, O), O.X = x(n, O), O.c = x(t, O), w.x = x(r, w), w.X = x(n, w), w.c = x(t, w);
  function x(B, J) {
    return function(ee) {
      var N = [], ve = -1, te = 0, we = B.length, _e, Fe, Bt;
      for (ee instanceof Date || (ee = /* @__PURE__ */ new Date(+ee)); ++ve < we; )
        B.charCodeAt(ve) === 37 && (N.push(B.slice(te, ve)), (Fe = cg[_e = B.charAt(++ve)]) != null ? _e = B.charAt(++ve) : Fe = _e === "e" ? " " : "0", (Bt = J[_e]) && (_e = Bt(ee, Fe)), N.push(_e), te = ve + 1);
      return N.push(B.slice(te, ve)), N.join("");
    };
  }
  function _(B, J) {
    return function(ee) {
      var N = Mn(1900, void 0, 1), ve = S(N, B, ee += "", 0), te, we;
      if (ve != ee.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (J && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (te = yl(Mn(N.y, 0, 1)), we = te.getUTCDay(), te = we > 4 || we === 0 ? ka.ceil(te) : ka(te), te = Io.offset(te, (N.V - 1) * 7), N.y = te.getUTCFullYear(), N.m = te.getUTCMonth(), N.d = te.getUTCDate() + (N.w + 6) % 7) : (te = vl(Mn(N.y, 0, 1)), we = te.getDay(), te = we > 4 || we === 0 ? Ia.ceil(te) : Ia(te), te = Ki.offset(te, (N.V - 1) * 7), N.y = te.getFullYear(), N.m = te.getMonth(), N.d = te.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), we = "Z" in N ? yl(Mn(N.y, 0, 1)).getUTCDay() : vl(Mn(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (we + 5) % 7 : N.w + N.U * 7 - (we + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, yl(N)) : vl(N);
    };
  }
  function S(B, J, ee, N) {
    for (var ve = 0, te = J.length, we = ee.length, _e, Fe; ve < te; ) {
      if (N >= we) return -1;
      if (_e = J.charCodeAt(ve++), _e === 37) {
        if (_e = J.charAt(ve++), Fe = m[_e in cg ? J.charAt(ve++) : _e], !Fe || (N = Fe(B, ee, N)) < 0) return -1;
      } else if (_e != ee.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function T(B, J, ee) {
    var N = s.exec(J.slice(ee));
    return N ? (B.p = l.get(N[0].toLowerCase()), ee + N[0].length) : -1;
  }
  function j(B, J, ee) {
    var N = h.exec(J.slice(ee));
    return N ? (B.w = y.get(N[0].toLowerCase()), ee + N[0].length) : -1;
  }
  function P(B, J, ee) {
    var N = f.exec(J.slice(ee));
    return N ? (B.w = p.get(N[0].toLowerCase()), ee + N[0].length) : -1;
  }
  function E(B, J, ee) {
    var N = g.exec(J.slice(ee));
    return N ? (B.m = b.get(N[0].toLowerCase()), ee + N[0].length) : -1;
  }
  function $(B, J, ee) {
    var N = v.exec(J.slice(ee));
    return N ? (B.m = d.get(N[0].toLowerCase()), ee + N[0].length) : -1;
  }
  function M(B, J, ee) {
    return S(B, t, J, ee);
  }
  function C(B, J, ee) {
    return S(B, r, J, ee);
  }
  function k(B, J, ee) {
    return S(B, n, J, ee);
  }
  function R(B) {
    return o[B.getDay()];
  }
  function L(B) {
    return a[B.getDay()];
  }
  function q(B) {
    return c[B.getMonth()];
  }
  function U(B) {
    return u[B.getMonth()];
  }
  function V(B) {
    return i[+(B.getHours() >= 12)];
  }
  function F(B) {
    return 1 + ~~(B.getMonth() / 3);
  }
  function Y(B) {
    return o[B.getUTCDay()];
  }
  function fe(B) {
    return a[B.getUTCDay()];
  }
  function ge(B) {
    return c[B.getUTCMonth()];
  }
  function Ke(B) {
    return u[B.getUTCMonth()];
  }
  function Qt(B) {
    return i[+(B.getUTCHours() >= 12)];
  }
  function Be(B) {
    return 1 + ~~(B.getUTCMonth() / 3);
  }
  return {
    format: function(B) {
      var J = x(B += "", O);
      return J.toString = function() {
        return B;
      }, J;
    },
    parse: function(B) {
      var J = _(B += "", !1);
      return J.toString = function() {
        return B;
      }, J;
    },
    utcFormat: function(B) {
      var J = x(B += "", w);
      return J.toString = function() {
        return B;
      }, J;
    },
    utcParse: function(B) {
      var J = _(B += "", !0);
      return J.toString = function() {
        return B;
      }, J;
    }
  };
}
var cg = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, $j = /^%/, Cj = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function Mj(e) {
  return e.replace(Cj, "\\$&");
}
function In(e) {
  return new RegExp("^(?:" + e.map(Mj).join("|") + ")", "i");
}
function kn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Ij(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function kj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function Rj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Nj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Dj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function sg(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function lg(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Lj(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function qj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Bj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function fg(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Fj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function pg(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function zj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function Wj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function Uj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Kj(e, t, r) {
  var n = Ce.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Gj(e, t, r) {
  var n = $j.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Hj(e, t, r) {
  var n = Ce.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Vj(e, t, r) {
  var n = Ce.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function hg(e, t) {
  return re(e.getDate(), t, 2);
}
function Yj(e, t) {
  return re(e.getHours(), t, 2);
}
function Xj(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function Zj(e, t) {
  return re(1 + Ki.count(Ct(e), e), t, 3);
}
function AO(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function Jj(e, t) {
  return AO(e, t) + "000";
}
function Qj(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function e$(e, t) {
  return re(e.getMinutes(), t, 2);
}
function t$(e, t) {
  return re(e.getSeconds(), t, 2);
}
function r$(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function n$(e, t) {
  return re(ko.count(Ct(e) - 1, e), t, 2);
}
function SO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Vr(e) : Vr.ceil(e);
}
function i$(e, t) {
  return e = SO(e), re(Vr.count(Ct(e), e) + (Ct(e).getDay() === 4), t, 2);
}
function a$(e) {
  return e.getDay();
}
function o$(e, t) {
  return re(Ia.count(Ct(e) - 1, e), t, 2);
}
function u$(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function c$(e, t) {
  return e = SO(e), re(e.getFullYear() % 100, t, 2);
}
function s$(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function l$(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Vr(e) : Vr.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function f$(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function dg(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function p$(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function h$(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function d$(e, t) {
  return re(1 + Io.count(Mt(e), e), t, 3);
}
function PO(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function v$(e, t) {
  return PO(e, t) + "000";
}
function y$(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function m$(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function g$(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function b$(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function x$(e, t) {
  return re(Ro.count(Mt(e) - 1, e), t, 2);
}
function TO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Yr(e) : Yr.ceil(e);
}
function O$(e, t) {
  return e = TO(e), re(Yr.count(Mt(e), e) + (Mt(e).getUTCDay() === 4), t, 2);
}
function w$(e) {
  return e.getUTCDay();
}
function _$(e, t) {
  return re(ka.count(Mt(e) - 1, e), t, 2);
}
function A$(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function S$(e, t) {
  return e = TO(e), re(e.getUTCFullYear() % 100, t, 2);
}
function P$(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function T$(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Yr(e) : Yr.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function E$() {
  return "+0000";
}
function vg() {
  return "%";
}
function yg(e) {
  return +e;
}
function mg(e) {
  return Math.floor(+e / 1e3);
}
var Cr, EO, jO;
j$({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function j$(e) {
  return Cr = jj(e), EO = Cr.format, Cr.parse, jO = Cr.utcFormat, Cr.utcParse, Cr;
}
function $$(e) {
  return new Date(e);
}
function C$(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function xh(e, t, r, n, i, a, o, u, c, s) {
  var l = oh(), f = l.invert, p = l.domain, h = s(".%L"), y = s(":%S"), v = s("%I:%M"), d = s("%I %p"), g = s("%a %d"), b = s("%b %d"), O = s("%B"), w = s("%Y");
  function m(x) {
    return (c(x) < x ? h : u(x) < x ? y : o(x) < x ? v : a(x) < x ? d : n(x) < x ? i(x) < x ? g : b : r(x) < x ? O : w)(x);
  }
  return l.invert = function(x) {
    return new Date(f(x));
  }, l.domain = function(x) {
    return arguments.length ? p(Array.from(x, C$)) : p().map($$);
  }, l.ticks = function(x) {
    var _ = p();
    return e(_[0], _[_.length - 1], x ?? 10);
  }, l.tickFormat = function(x, _) {
    return _ == null ? m : s(_);
  }, l.nice = function(x) {
    var _ = p();
    return (!x || typeof x.range != "function") && (x = t(_[0], _[_.length - 1], x ?? 10)), x ? p(vO(_, x)) : l;
  }, l.copy = function() {
    return Ui(l, xh(e, t, r, n, i, a, o, u, c, s));
  }, l;
}
function M$() {
  return ut.apply(xh(Tj, Ej, Ct, gh, ko, Ki, yh, dh, lr, EO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function I$() {
  return ut.apply(xh(Sj, Pj, Mt, bh, Ro, Io, mh, vh, lr, jO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function No() {
  var e = 0, t = 1, r, n, i, a, o = Le, u = !1, c;
  function s(f) {
    return f == null || isNaN(f = +f) ? c : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(f) {
    return arguments.length ? (u = !!f, s) : u;
  }, s.interpolator = function(f) {
    return arguments.length ? (o = f, s) : o;
  };
  function l(f) {
    return function(p) {
      var h, y;
      return arguments.length ? ([h, y] = p, o = f(h, y), s) : [o(0), o(1)];
    };
  }
  return s.range = l(On), s.rangeRound = l(ah), s.unknown = function(f) {
    return arguments.length ? (c = f, s) : c;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Yt(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function $O() {
  var e = Vt(No()(Le));
  return e.copy = function() {
    return Yt(e, $O());
  }, Lt.apply(e, arguments);
}
function CO() {
  var e = sh(No()).domain([1, 10]);
  return e.copy = function() {
    return Yt(e, CO()).base(e.base());
  }, Lt.apply(e, arguments);
}
function MO() {
  var e = lh(No());
  return e.copy = function() {
    return Yt(e, MO()).constant(e.constant());
  }, Lt.apply(e, arguments);
}
function Oh() {
  var e = fh(No());
  return e.copy = function() {
    return Yt(e, Oh()).exponent(e.exponent());
  }, Lt.apply(e, arguments);
}
function k$() {
  return Oh.apply(null, arguments).exponent(0.5);
}
function IO() {
  var e = [], t = Le;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((zi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Kt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => xE(e, a / n));
  }, r.copy = function() {
    return IO(t).domain(e);
  }, Lt.apply(r, arguments);
}
function Do() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, c, s = Le, l, f = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +l(v)) - a) * (n * v < n * a ? u : c), s(f ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (f = !!v, h) : f;
  }, h.interpolator = function(v) {
    return arguments.length ? (s = v, h) : s;
  };
  function y(v) {
    return function(d) {
      var g, b, O;
      return arguments.length ? ([g, b, O] = d, s = GE(v, [g, b, O]), h) : [s(0), s(0.5), s(1)];
    };
  }
  return h.range = y(On), h.rangeRound = y(ah), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return l = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function kO() {
  var e = Vt(Do()(Le));
  return e.copy = function() {
    return Yt(e, kO());
  }, Lt.apply(e, arguments);
}
function RO() {
  var e = sh(Do()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Yt(e, RO()).base(e.base());
  }, Lt.apply(e, arguments);
}
function NO() {
  var e = lh(Do());
  return e.copy = function() {
    return Yt(e, NO()).constant(e.constant());
  }, Lt.apply(e, arguments);
}
function wh() {
  var e = fh(Do());
  return e.copy = function() {
    return Yt(e, wh()).exponent(e.exponent());
  }, Lt.apply(e, arguments);
}
function R$() {
  return wh.apply(null, arguments).exponent(0.5);
}
const gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ai,
  scaleDiverging: kO,
  scaleDivergingLog: RO,
  scaleDivergingPow: wh,
  scaleDivergingSqrt: R$,
  scaleDivergingSymlog: NO,
  scaleIdentity: dO,
  scaleImplicit: Cf,
  scaleLinear: Ca,
  scaleLog: yO,
  scaleOrdinal: rh,
  scalePoint: Wn,
  scalePow: ph,
  scaleQuantile: bO,
  scaleQuantize: xO,
  scaleRadial: gO,
  scaleSequential: $O,
  scaleSequentialLog: CO,
  scaleSequentialPow: Oh,
  scaleSequentialQuantile: IO,
  scaleSequentialSqrt: k$,
  scaleSequentialSymlog: MO,
  scaleSqrt: vj,
  scaleSymlog: mO,
  scaleThreshold: OO,
  scaleTime: M$,
  scaleUtc: I$,
  tickFormat: hO
}, Symbol.toStringTag, { value: "Module" }));
var ml, bg;
function Lo() {
  if (bg) return ml;
  bg = 1;
  var e = mn();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a], c = n(u);
      if (c != null && (s === void 0 ? c === c && !e(c) : i(c, s)))
        var s = c, l = u;
    }
    return l;
  }
  return ml = t, ml;
}
var gl, xg;
function DO() {
  if (xg) return gl;
  xg = 1;
  function e(t, r) {
    return t > r;
  }
  return gl = e, gl;
}
var bl, Og;
function N$() {
  if (Og) return bl;
  Og = 1;
  var e = Lo(), t = DO(), r = bn();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return bl = n, bl;
}
var D$ = N$();
const qo = /* @__PURE__ */ oe(D$);
var xl, wg;
function LO() {
  if (wg) return xl;
  wg = 1;
  function e(t, r) {
    return t < r;
  }
  return xl = e, xl;
}
var Ol, _g;
function L$() {
  if (_g) return Ol;
  _g = 1;
  var e = Lo(), t = LO(), r = bn();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Ol = n, Ol;
}
var q$ = L$();
const Bo = /* @__PURE__ */ oe(q$);
var wl, Ag;
function B$() {
  if (Ag) return wl;
  Ag = 1;
  var e = qp(), t = Ot(), r = Gx(), n = Ue();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return wl = i, wl;
}
var _l, Sg;
function F$() {
  if (Sg) return _l;
  Sg = 1;
  var e = Ux(), t = B$();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return _l = r, _l;
}
var z$ = F$();
const W$ = /* @__PURE__ */ oe(z$);
var Al, Pg;
function U$() {
  if (Pg) return Al;
  Pg = 1;
  var e = Zp();
  function t(r, n) {
    return e(r, n);
  }
  return Al = t, Al;
}
var K$ = U$();
const Pr = /* @__PURE__ */ oe(K$);
var wn = 1e9, G$ = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Ah, de = !0, at = "[DecimalError] ", vr = at + "Invalid argument: ", _h = at + "Exponent out of range: ", _n = Math.floor, or = Math.pow, H$ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ye, je = 1e7, pe = 7, qO = 9007199254740991, Ra = _n(qO / pe), z = {};
z.absoluteValue = z.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
z.comparedTo = z.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
z.decimalPlaces = z.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * pe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
z.dividedBy = z.div = function(e) {
  return jt(this, new this.constructor(e));
};
z.dividedToIntegerBy = z.idiv = function(e) {
  var t = this, r = t.constructor;
  return ce(jt(t, new r(e), 0, 1), r.precision);
};
z.equals = z.eq = function(e) {
  return !this.cmp(e);
};
z.exponent = function() {
  return Oe(this);
};
z.greaterThan = z.gt = function(e) {
  return this.cmp(e) > 0;
};
z.greaterThanOrEqualTo = z.gte = function(e) {
  return this.cmp(e) >= 0;
};
z.isInteger = z.isint = function() {
  return this.e > this.d.length - 2;
};
z.isNegative = z.isneg = function() {
  return this.s < 0;
};
z.isPositive = z.ispos = function() {
  return this.s > 0;
};
z.isZero = function() {
  return this.s === 0;
};
z.lessThan = z.lt = function(e) {
  return this.cmp(e) < 0;
};
z.lessThanOrEqualTo = z.lte = function(e) {
  return this.cmp(e) < 1;
};
z.logarithm = z.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ye)) throw Error(at + "NaN");
  if (r.s < 1) throw Error(at + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ye) ? new n(0) : (de = !1, t = jt(li(r, a), li(e, a), a), de = !0, ce(t, i));
};
z.minus = z.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? zO(t, e) : BO(t, (e.s = -e.s, e));
};
z.modulo = z.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(at + "NaN");
  return r.s ? (de = !1, t = jt(r, e, 0, 1).times(e), de = !0, r.minus(t)) : ce(new n(r), i);
};
z.naturalExponential = z.exp = function() {
  return FO(this);
};
z.naturalLogarithm = z.ln = function() {
  return li(this);
};
z.negated = z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
z.plus = z.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? BO(t, e) : zO(t, (e.s = -e.s, e));
};
z.precision = z.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(vr + e);
  if (t = Oe(i) + 1, n = i.d.length - 1, r = n * pe + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
z.squareRoot = z.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, c = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new c(0);
    throw Error(at + "NaN");
  }
  for (e = Oe(u), de = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = yt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = _n((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(jt(u, a, o + 2)).times(0.5), yt(a.d).slice(0, o) === (t = yt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (ce(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return de = !0, ce(n, r);
};
z.times = z.mul = function(e) {
  var t, r, n, i, a, o, u, c, s, l = this, f = l.constructor, p = l.d, h = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, c = p.length, s = h.length, c < s && (a = p, p = h, h = a, o = c, c = s, s = o), a = [], o = c + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      u = a[i] + h[n] * p[i - n - 1] + t, a[i--] = u % je | 0, t = u / je | 0;
    a[i] = (a[i] + t) % je | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, de ? ce(e, f.precision) : e;
};
z.toDecimalPlaces = z.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (bt(e, 0, wn), t === void 0 ? t = n.rounding : bt(t, 0, 8), ce(r, e + Oe(r) + 1, t));
};
z.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = gr(n, !0) : (bt(e, 0, wn), t === void 0 ? t = i.rounding : bt(t, 0, 8), n = ce(new i(n), e + 1, t), r = gr(n, !0, e + 1)), r;
};
z.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? gr(i) : (bt(e, 0, wn), t === void 0 ? t = a.rounding : bt(t, 0, 8), n = ce(new a(i), e + Oe(i) + 1, t), r = gr(n.abs(), !1, e + Oe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
z.toInteger = z.toint = function() {
  var e = this, t = e.constructor;
  return ce(new t(e), Oe(e) + 1, t.rounding);
};
z.toNumber = function() {
  return +this;
};
z.toPower = z.pow = function(e) {
  var t, r, n, i, a, o, u = this, c = u.constructor, s = 12, l = +(e = new c(e));
  if (!e.s) return new c(Ye);
  if (u = new c(u), !u.s) {
    if (e.s < 1) throw Error(at + "Infinity");
    return u;
  }
  if (u.eq(Ye)) return u;
  if (n = c.precision, e.eq(Ye)) return ce(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= qO) {
      for (i = new c(Ye), t = Math.ceil(n / pe + 4), de = !1; r % 2 && (i = i.times(u), Eg(i.d, t)), r = _n(r / 2), r !== 0; )
        u = u.times(u), Eg(u.d, t);
      return de = !0, e.s < 0 ? new c(Ye).div(i) : ce(i, n);
    }
  } else if (a < 0) throw Error(at + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, de = !1, i = e.times(li(u, n + s)), de = !0, i = FO(i), i.s = a, i;
};
z.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Oe(i), n = gr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (bt(e, 1, wn), t === void 0 ? t = a.rounding : bt(t, 0, 8), i = ce(new a(i), e, t), r = Oe(i), n = gr(i, e <= r || r <= a.toExpNeg, e)), n;
};
z.toSignificantDigits = z.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (bt(e, 1, wn), t === void 0 ? t = n.rounding : bt(t, 0, 8)), ce(new n(r), e, t);
};
z.toString = z.valueOf = z.val = z.toJSON = z[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Oe(e), r = e.constructor;
  return gr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function BO(e, t) {
  var r, n, i, a, o, u, c, s, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), de ? ce(t, f) : t;
  if (c = e.d, s = t.d, o = e.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, u = s.length) : (n = s, i = o, u = c.length), o = Math.ceil(f / pe), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = c.length, a = s.length, u - a < 0 && (a = u, n = s, s = c, c = n), r = 0; a; )
    r = (c[--a] = c[a] + s[a] + r) / je | 0, c[a] %= je;
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
  return t.d = c, t.e = i, de ? ce(t, f) : t;
}
function bt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(vr + e);
}
function yt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = pe - n.length, r && (a += Ft(r)), a += n;
    o = e[t], n = o + "", r = pe - n.length, r && (a += Ft(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var jt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % je | 0, o = a / je | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o)
      c = a > o ? 1 : -1;
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * je + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, c, s, l, f, p, h, y, v, d, g, b, O, w, m, x, _, S, T = n.constructor, j = n.s == i.s ? 1 : -1, P = n.d, E = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(at + "Division by zero");
    for (c = n.e - i.e, _ = E.length, m = P.length, h = new T(j), y = h.d = [], s = 0; E[s] == (P[s] || 0); ) ++s;
    if (E[s] > (P[s] || 0) && --c, a == null ? b = a = T.precision : o ? b = a + (Oe(n) - Oe(i)) + 1 : b = a, b < 0) return new T(0);
    if (b = b / pe + 2 | 0, s = 0, _ == 1)
      for (l = 0, E = E[0], b++; (s < m || l) && b--; s++)
        O = l * je + (P[s] || 0), y[s] = O / E | 0, l = O % E | 0;
    else {
      for (l = je / (E[0] + 1) | 0, l > 1 && (E = e(E, l), P = e(P, l), _ = E.length, m = P.length), w = _, v = P.slice(0, _), d = v.length; d < _; ) v[d++] = 0;
      S = E.slice(), S.unshift(0), x = E[0], E[1] >= je / 2 && ++x;
      do
        l = 0, u = t(E, v, _, d), u < 0 ? (g = v[0], _ != d && (g = g * je + (v[1] || 0)), l = g / x | 0, l > 1 ? (l >= je && (l = je - 1), f = e(E, l), p = f.length, d = v.length, u = t(f, v, p, d), u == 1 && (l--, r(f, _ < p ? S : E, p))) : (l == 0 && (u = l = 1), f = E.slice()), p = f.length, p < d && f.unshift(0), r(v, f, d), u == -1 && (d = v.length, u = t(E, v, _, d), u < 1 && (l++, r(v, _ < d ? S : E, d))), d = v.length) : u === 0 && (l++, v = [0]), y[s++] = l, u && v[0] ? v[d++] = P[w] || 0 : (v = [P[w]], d = 1);
      while ((w++ < m || v[0] !== void 0) && b--);
    }
    return y[0] || y.shift(), h.e = c, ce(h, o ? a + Oe(h) + 1 : a);
  };
})();
function FO(e, t) {
  var r, n, i, a, o, u, c = 0, s = 0, l = e.constructor, f = l.precision;
  if (Oe(e) > 16) throw Error(_h + Oe(e));
  if (!e.s) return new l(Ye);
  for (de = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), s += 5;
  for (n = Math.log(or(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(Ye), l.precision = u; ; ) {
    if (i = ce(i.times(e), u), r = r.times(++c), o = a.plus(jt(i, r, u)), yt(o.d).slice(0, u) === yt(a.d).slice(0, u)) {
      for (; s--; ) a = ce(a.times(a), u);
      return l.precision = f, t == null ? (de = !0, ce(a, f)) : a;
    }
    a = o;
  }
}
function Oe(e) {
  for (var t = e.e * pe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Sl(e, t, r) {
  if (t > e.LN10.sd())
    throw de = !0, r && (e.precision = r), Error(at + "LN10 precision limit exceeded");
  return ce(new e(e.LN10), t);
}
function Ft(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function li(e, t) {
  var r, n, i, a, o, u, c, s, l, f = 1, p = 10, h = e, y = h.d, v = h.constructor, d = v.precision;
  if (h.s < 1) throw Error(at + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Ye)) return new v(0);
  if (t == null ? (de = !1, s = d) : s = t, h.eq(10))
    return t == null && (de = !0), Sl(v, s);
  if (s += p, v.precision = s, r = yt(y), n = r.charAt(0), a = Oe(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = yt(h.d), n = r.charAt(0), f++;
    a = Oe(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else
    return c = Sl(v, s + 2, d).times(a + ""), h = li(new v(n + "." + r.slice(1)), s - p).plus(c), v.precision = d, t == null ? (de = !0, ce(h, d)) : h;
  for (u = o = h = jt(h.minus(Ye), h.plus(Ye), s), l = ce(h.times(h), s), i = 3; ; ) {
    if (o = ce(o.times(l), s), c = u.plus(jt(o, new v(i), s)), yt(c.d).slice(0, s) === yt(u.d).slice(0, s))
      return u = u.times(2), a !== 0 && (u = u.plus(Sl(v, s + 2, d).times(a + ""))), u = jt(u, new v(f), s), v.precision = d, t == null ? (de = !0, ce(u, d)) : u;
    u = c, i += 2;
  }
}
function Tg(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = _n(r / pe), e.d = [], n = (r + 1) % pe, r < 0 && (n += pe), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= pe; n < i; ) e.d.push(+t.slice(n, n += pe));
      t = t.slice(n), n = pe - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), de && (e.e > Ra || e.e < -Ra)) throw Error(_h + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ce(e, t, r) {
  var n, i, a, o, u, c, s, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += pe, i = t, s = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / pe), a = f.length, l >= a) return e;
    for (s = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= pe, i = n - pe + o;
  }
  if (r !== void 0 && (a = or(10, o - i - 1), u = s / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || s % a, c = r < 4 ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / or(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (a = Oe(e), f.length = 1, t = t - a - 1, f[0] = or(10, (pe - t % pe) % pe), e.e = _n(-t / pe) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = or(10, pe - n), f[l] = i > 0 ? (s / or(10, o - i) % or(10, i) | 0) * a : 0), c)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == je && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != je) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (de && (e.e > Ra || e.e < -Ra))
    throw Error(_h + Oe(e));
  return e;
}
function zO(e, t) {
  var r, n, i, a, o, u, c, s, l, f, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), de ? ce(t, h) : t;
  if (c = e.d, f = t.d, n = t.e, s = e.e, c = c.slice(), o = s - n, o) {
    for (l = o < 0, l ? (r = c, o = -o, u = f.length) : (r = f, n = s, u = c.length), i = Math.max(Math.ceil(h / pe), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (c[i] != f[i]) {
        l = c[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = c, c = f, f = r, t.s = -t.s), u = c.length, i = f.length - u; i > 0; --i) c[u++] = 0;
  for (i = f.length; i > o; ) {
    if (c[--i] < f[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = je - 1;
      --c[a], c[i] += je;
    }
    c[i] -= f[i];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, de ? ce(t, h) : t) : new p(0);
}
function gr(e, t, r) {
  var n, i = Oe(e), a = yt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ft(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ft(-i - 1) + a, r && (n = r - o) > 0 && (a += Ft(n))) : i >= o ? (a += Ft(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ft(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ft(n))), e.s < 0 ? "-" + a : a;
}
function Eg(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function WO(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(vr + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return Tg(o, a.toString());
    } else if (typeof a != "string")
      throw Error(vr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, H$.test(a)) Tg(o, a);
    else throw Error(vr + a);
  }
  if (i.prototype = z, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = WO, i.config = i.set = V$, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function V$(e) {
  if (!e || typeof e != "object")
    throw Error(at + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    wn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (_n(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(vr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(vr + r + ": " + n);
  return this;
}
var Ah = WO(G$);
Ye = new Ah(1);
const ue = Ah;
function Y$(e) {
  return Q$(e) || J$(e) || Z$(e) || X$();
}
function X$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Z$(e, t) {
  if (e) {
    if (typeof e == "string") return Rf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rf(e, t);
  }
}
function J$(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Q$(e) {
  if (Array.isArray(e)) return Rf(e);
}
function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var eC = function(t) {
  return t;
}, UO = {}, KO = function(t) {
  return t === UO;
}, jg = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && KO(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, tC = function e(t, r) {
  return t === 1 ? r : jg(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== UO;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, jg(function() {
      for (var u = arguments.length, c = new Array(u), s = 0; s < u; s++)
        c[s] = arguments[s];
      var l = i.map(function(f) {
        return KO(f) ? c.shift() : f;
      });
      return r.apply(void 0, Y$(l).concat(c));
    }));
  });
}, Fo = function(t) {
  return tC(t.length, t);
}, Nf = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, rC = Fo(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), nC = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return eC;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, c) {
      return c(u);
    }, a.apply(void 0, arguments));
  };
}, Df = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, GO = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, c) {
      return u === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function iC(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ue(e).abs().log(10).toNumber()) + 1, t;
}
function aC(e, t, r) {
  for (var n = new ue(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var oC = Fo(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), uC = Fo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), cC = Fo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const zo = {
  rangeStep: aC,
  getDigitCount: iC,
  interpolateNumber: oC,
  uninterpolateNumber: uC,
  uninterpolateTruncation: cC
};
function Lf(e) {
  return fC(e) || lC(e) || HO(e) || sC();
}
function sC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lC(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function fC(e) {
  if (Array.isArray(e)) return qf(e);
}
function fi(e, t) {
  return dC(e) || hC(e, t) || HO(e, t) || pC();
}
function pC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HO(e, t) {
  if (e) {
    if (typeof e == "string") return qf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return qf(e, t);
  }
}
function qf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function hC(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function dC(e) {
  if (Array.isArray(e)) return e;
}
function VO(e) {
  var t = fi(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function YO(e, t, r) {
  if (e.lte(0))
    return new ue(0);
  var n = zo.getDigitCount(e.toNumber()), i = new ue(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ue(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = u.mul(i);
  return t ? c : new ue(Math.ceil(c));
}
function vC(e, t, r) {
  var n = 1, i = new ue(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ue(10).pow(zo.getDigitCount(e) - 1), i = new ue(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ue(Math.floor(e)));
  } else e === 0 ? i = new ue(Math.floor((t - 1) / 2)) : r || (i = new ue(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = nC(rC(function(c) {
    return i.add(new ue(c - o).mul(n)).toNumber();
  }), Nf);
  return u(0, t);
}
function XO(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ue(0),
      tickMin: new ue(0),
      tickMax: new ue(0)
    };
  var a = YO(new ue(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ue(0) : (o = new ue(e).add(t).div(2), o = o.sub(new ue(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), c = Math.ceil(new ue(t).sub(o).div(a).toNumber()), s = u + c + 1;
  return s > r ? XO(e, t, r, n, i + 1) : (s < r && (c = t > 0 ? c + (r - s) : c, u = t > 0 ? u : u + (r - s)), {
    step: a,
    tickMin: o.sub(new ue(u).mul(a)),
    tickMax: o.add(new ue(c).mul(a))
  });
}
function yC(e) {
  var t = fi(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = VO([r, n]), c = fi(u, 2), s = c[0], l = c[1];
  if (s === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [s].concat(Lf(Nf(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Lf(Nf(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? Df(f) : f;
  }
  if (s === l)
    return vC(s, i, a);
  var p = XO(s, l, o, a), h = p.step, y = p.tickMin, v = p.tickMax, d = zo.rangeStep(y, v.add(new ue(0.1).mul(h)), h);
  return r > n ? Df(d) : d;
}
function mC(e, t) {
  var r = fi(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = VO([n, i]), u = fi(o, 2), c = u[0], s = u[1];
  if (c === -1 / 0 || s === 1 / 0)
    return [n, i];
  if (c === s)
    return [c];
  var l = Math.max(t, 2), f = YO(new ue(s).sub(c).div(l - 1), a, 0), p = [].concat(Lf(zo.rangeStep(new ue(c), new ue(s).sub(new ue(0.99).mul(f)), f)), [s]);
  return n > i ? Df(p) : p;
}
var gC = GO(yC), bC = GO(mC), xC = "Invariant failed";
function br(e, t) {
  throw new Error(xC);
}
var OC = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Na.apply(this, arguments);
}
function wC(e, t) {
  return PC(e) || SC(e, t) || AC(e, t) || _C();
}
function _C() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AC(e, t) {
  if (e) {
    if (typeof e == "string") return $g(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $g(e, t);
  }
}
function $g(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function SC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function PC(e) {
  if (Array.isArray(e)) return e;
}
function TC(e, t) {
  if (e == null) return {};
  var r = EC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function jC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $C(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QO(n.key), n);
  }
}
function CC(e, t, r) {
  return t && $C(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MC(e, t, r) {
  return t = Da(t), IC(e, ZO() ? Reflect.construct(t, r || [], Da(e).constructor) : t.apply(e, r));
}
function IC(e, t) {
  if (t && (Xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kC(e);
}
function kC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ZO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ZO = function() {
    return !!e;
  })();
}
function Da(e) {
  return Da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Da(e);
}
function RC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bf(e, t);
}
function Bf(e, t) {
  return Bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bf(e, t);
}
function JO(e, t, r) {
  return t = QO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QO(e) {
  var t = NC(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function NC(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var An = /* @__PURE__ */ (function(e) {
  function t() {
    return jC(this, t), MC(this, t, arguments);
  }
  return RC(t, e), CC(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, c = n.data, s = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, p = TC(n, OC), h = W(p, !1);
      this.props.direction === "x" && l.type !== "number" && br();
      var y = c.map(function(v) {
        var d = s(v, u), g = d.x, b = d.y, O = d.value, w = d.errorVal;
        if (!w)
          return null;
        var m = [], x, _;
        if (Array.isArray(w)) {
          var S = wC(w, 2);
          x = S[0], _ = S[1];
        } else
          x = _ = w;
        if (a === "vertical") {
          var T = l.scale, j = b + i, P = j + o, E = j - o, $ = T(O - x), M = T(O + _);
          m.push({
            x1: M,
            y1: P,
            x2: M,
            y2: E
          }), m.push({
            x1: $,
            y1: j,
            x2: M,
            y2: j
          }), m.push({
            x1: $,
            y1: P,
            x2: $,
            y2: E
          });
        } else if (a === "horizontal") {
          var C = f.scale, k = g + i, R = k - o, L = k + o, q = C(O - x), U = C(O + _);
          m.push({
            x1: R,
            y1: U,
            x2: L,
            y2: U
          }), m.push({
            x1: k,
            y1: q,
            x2: k,
            y2: U
          }), m.push({
            x1: R,
            y1: q,
            x2: L,
            y2: q
          });
        }
        return /* @__PURE__ */ A.createElement(Q, Na({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(V) {
            return "".concat(V.x1, "-").concat(V.x2, "-").concat(V.y1, "-").concat(V.y2);
          }))
        }, h), m.map(function(V) {
          return /* @__PURE__ */ A.createElement("line", Na({}, V, {
            key: "line-".concat(V.x1, "-").concat(V.x2, "-").concat(V.y1, "-").concat(V.y2)
          }));
        }));
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(A.Component);
JO(An, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
JO(An, "displayName", "ErrorBar");
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function Cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cg(Object(r), !0).forEach(function(n) {
      DC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DC(e, t, r) {
  return t = LC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LC(e) {
  var t = qC(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function qC(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ew = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Ve(r, hr);
  if (!o)
    return null;
  var u = hr.defaultProps, c = u !== void 0 ? rr(rr({}, u), o.props) : {}, s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(l, f) {
    var p = f.item, h = f.props, y = h.sectors || h.data || [];
    return l.concat(y.map(function(v) {
      return {
        type: o.props.iconType || p.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : s = (n || []).map(function(l) {
    var f = l.item, p = f.type.defaultProps, h = p !== void 0 ? rr(rr({}, p), f.props) : {}, y = h.dataKey, v = h.name, d = h.legendType, g = h.hide;
    return {
      inactive: g,
      dataKey: y,
      type: c.iconType || d || "square",
      color: Sh(f),
      value: v || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), rr(rr(rr({}, c), hr.getWithHeight(o, i)), {}, {
    payload: s,
    item: o
  });
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
function Mg(e) {
  return WC(e) || zC(e) || FC(e) || BC();
}
function BC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FC(e, t) {
  if (e) {
    if (typeof e == "string") return Ff(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ff(e, t);
  }
}
function zC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function WC(e) {
  if (Array.isArray(e)) return Ff(e);
}
function Ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ig(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ye(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ig(Object(r), !0).forEach(function(n) {
      Fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ig(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fr(e, t, r) {
  return t = UC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UC(e) {
  var t = KC(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function KC(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function he(e, t, r) {
  return G(e) || G(t) ? r : Te(t) ? Xe(e, t, r) : K(t) ? t(e) : r;
}
function Un(e, t, r, n) {
  var i = W$(e, function(u) {
    return he(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return D(u) || parseFloat(u);
    });
    return a.length ? [Bo(a), qo(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !G(u);
  }) : i;
  return o.map(function(u) {
    return Te(u) || u instanceof Date ? u : "";
  });
}
var GC = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var c = a.range, s = 0; s < u; s++) {
      var l = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate, f = i[s].coordinate, p = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate, h = void 0;
      if (Ne(f - l) !== Ne(p - f)) {
        var y = [];
        if (Ne(p - f) === Ne(c[1] - c[0])) {
          h = p;
          var v = f + c[1] - c[0];
          y[0] = Math.min(v, (v + l) / 2), y[1] = Math.max(v, (v + l) / 2);
        } else {
          h = l;
          var d = p + c[1] - c[0];
          y[0] = Math.min(f, (d + f) / 2), y[1] = Math.max(f, (d + f) / 2);
        }
        var g = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = i[s].index;
          break;
        }
      } else {
        var b = Math.min(l, p), O = Math.max(l, p);
        if (t > (b + f) / 2 && t <= (O + f) / 2) {
          o = i[s].index;
          break;
        }
      }
    }
  else
    for (var w = 0; w < u; w++)
      if (w === 0 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w > 0 && w < u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w === u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2) {
        o = n[w].index;
        break;
      }
  return o;
}, Sh = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ye(ye({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, c;
  switch (i) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : u;
      break;
    default:
      c = u;
      break;
  }
  return c;
}, HC = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++)
    for (var l = a[u[c]].stackGroups, f = Object.keys(l), p = 0, h = f.length; p < h; p++) {
      var y = l[f[p]], v = y.items, d = y.cateAxisId, g = v.filter(function(_) {
        return Et(_.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var b = g[0].type.defaultProps, O = b !== void 0 ? ye(ye({}, b), g[0].props) : g[0].props, w = O.barSize, m = O[d];
        o[m] || (o[m] = []);
        var x = G(w) ? r : w;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: G(x) ? void 0 : De(x, n, 0)
        });
      }
    }
  return o;
}, VC = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var s = De(r, i, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var p = !1, h = i / c, y = o.reduce(function(w, m) {
      return w + m.barSize || 0;
    }, 0);
    y += (c - 1) * s, y >= i && (y -= (c - 1) * s, s = 0), y >= i && h > 0 && (p = !0, h *= 0.9, y = c * h);
    var v = (i - y) / 2 >> 0, d = {
      offset: v - s,
      size: 0
    };
    l = o.reduce(function(w, m) {
      var x = {
        item: m.item,
        position: {
          offset: d.offset + d.size + s,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: p ? h : m.barSize
        }
      }, _ = [].concat(Mg(w), [x]);
      return d = _[_.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        _.push({
          item: S,
          position: d
        });
      }), _;
    }, f);
  } else {
    var g = De(n, i, 0, !0);
    i - 2 * g - (c - 1) * s <= 0 && (s = 0);
    var b = (i - 2 * g - (c - 1) * s) / c;
    b > 1 && (b >>= 0);
    var O = u === +u ? Math.min(b, u) : b;
    l = o.reduce(function(w, m, x) {
      var _ = [].concat(Mg(w), [{
        item: m.item,
        position: {
          offset: g + (b + s) * x + (b - O) / 2,
          size: O
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        _.push({
          item: S,
          position: _[_.length - 1].position
        });
      }), _;
    }, f);
  }
  return l;
}, YC = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, c = o - (u.left || 0) - (u.right || 0), s = ew({
    children: a,
    legendWidth: c
  });
  if (s) {
    var l = i || {}, f = l.width, p = l.height, h = s.align, y = s.verticalAlign, v = s.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && h !== "center" && D(t[h]))
      return ye(ye({}, t), {}, Fr({}, h, t[h] + (f || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && y !== "middle" && D(t[y]))
      return ye(ye({}, t), {}, Fr({}, y, t[y] + (p || 0)));
  }
  return t;
}, XC = function(t, r, n) {
  return G(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, tw = function(t, r, n, i, a) {
  var o = r.props.children, u = qe(o, An).filter(function(s) {
    return XC(i, a, s.props.direction);
  });
  if (u && u.length) {
    var c = u.map(function(s) {
      return s.props.dataKey;
    });
    return t.reduce(function(s, l) {
      var f = he(l, n);
      if (G(f)) return s;
      var p = Array.isArray(f) ? [Bo(f), qo(f)] : [f, f], h = c.reduce(function(y, v) {
        var d = he(l, v, 0), g = p[0] - Math.abs(Array.isArray(d) ? d[0] : d), b = p[1] + Math.abs(Array.isArray(d) ? d[1] : d);
        return [Math.min(g, y[0]), Math.max(b, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], s[0]), Math.max(h[1], s[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, ZC = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return tw(t, u, n, a, i);
  }).filter(function(u) {
    return !G(u);
  });
  return o && o.length ? o.reduce(function(u, c) {
    return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, rw = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var s = c.props.dataKey;
    return n === "number" && s && tw(t, c, s, i) || Un(t, s, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, s) {
        return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(c, s) {
    for (var l = 0, f = s.length; l < f; l++)
      u[s[l]] || (u[s[l]] = !0, c.push(s[l]));
    return c;
  }, []);
}, nw = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, iw = function(t, r, n, i) {
  if (i)
    return t.map(function(c) {
      return c.coordinate;
    });
  var a, o, u = t.map(function(c) {
    return c.coordinate === r && (a = !0), c.coordinate === n && (o = !0), c.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Tt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (s = t.axisType === "angleAxis" && u?.length >= 2 ? Ne(u[0] - u[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var p = a ? a.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(p) + s,
        value: f,
        offset: s
      };
    });
    return l.filter(function(f) {
      return !qi(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, p) {
    return {
      coordinate: i(f) + s,
      value: f,
      index: p,
      offset: s
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: i(f) + s,
      value: f,
      offset: s
    };
  }) : i.domain().map(function(f, p) {
    return {
      coordinate: i(f) + s,
      value: a ? a[f] : f,
      index: p,
      offset: s
    };
  });
}, Pl = /* @__PURE__ */ new WeakMap(), aa = function(t, r) {
  if (typeof r != "function")
    return t;
  Pl.has(t) || Pl.set(t, /* @__PURE__ */ new WeakMap());
  var n = Pl.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, aw = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: ai(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Ca(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Wn(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: ai(),
      realScaleType: "band"
    } : {
      scale: Ca(),
      realScaleType: "linear"
    };
  if (yr(i)) {
    var c = "scale".concat(Ao(i));
    return {
      scale: (gg[c] || Wn)(),
      realScaleType: gg[c] ? c : "point"
    };
  }
  return K(i) ? {
    scale: i
  } : {
    scale: Wn(),
    realScaleType: "point"
  };
}, kg = 1e-4, ow = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - kg, o = Math.max(i[0], i[1]) + kg, u = t(r[0]), c = t(r[n - 1]);
    (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, JC = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, QC = function(t, r) {
  if (!r || r.length !== 2 || !D(r[0]) || !D(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!D(t[0]) || t[0] < n) && (a[0] = n), (!D(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, eM = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var c = qi(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + c, o = t[u][n][1]);
      }
}, tM = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = qi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, rM = {
  sign: eM,
  // @ts-expect-error definitelytyped types are incorrect
  expand: WA,
  // @ts-expect-error definitelytyped types are incorrect
  none: zr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: UA,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: KA,
  positive: tM
}, nM = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = rM[n], o = zA().keys(i).value(function(u, c) {
    return +he(u, c, 0);
  }).order(mf).offset(a);
  return o(t);
}, iM = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, c = {}, s = u.reduce(function(f, p) {
    var h, y = (h = p.type) !== null && h !== void 0 && h.defaultProps ? ye(ye({}, p.type.defaultProps), p.props) : p.props, v = y.stackId, d = y.hide;
    if (d)
      return f;
    var g = y[n], b = f[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Te(v)) {
      var O = b.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(p), b.hasStack = !0, b.stackGroups[v] = O;
    } else
      b.stackGroups[_r("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [p]
      };
    return ye(ye({}, f), {}, Fr({}, g, b));
  }, c), l = {};
  return Object.keys(s).reduce(function(f, p) {
    var h = s[p];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, d) {
        var g = h.stackGroups[d];
        return ye(ye({}, v), {}, Fr({}, d, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: nM(t, g.items, a)
        }));
      }, y);
    }
    return ye(ye({}, f), {}, Fr({}, p, h));
  }, l);
}, uw = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var s = t.domain();
    if (!s.length)
      return null;
    var l = gC(s, a, u);
    return t.domain([Bo(l), qo(l)]), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), p = bC(f, a, u);
    return {
      niceTicks: p
    };
  }
  return null;
};
function La(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !G(i[t.dataKey])) {
      var u = ha(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = he(i, G(o) ? t.dataKey : o);
  return G(c) ? null : t.scale(c);
}
var Rg = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var c = he(o, r.dataKey, r.domain[u]);
  return G(c) ? null : r.scale(c) - a / 2 + i;
}, aM = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, oM = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ye(ye({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Te(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, uM = function(t) {
  return t.reduce(function(r, n) {
    return [Bo(n.concat([r[0]]).filter(D)), qo(n.concat([r[1]]).filter(D))];
  }, [1 / 0, -1 / 0]);
}, cw = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, c = u.reduce(function(s, l) {
      var f = uM(l.slice(r, n + 1));
      return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Ng = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dg = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, zf = function(t, r, n) {
  if (K(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (D(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Ng.test(t[0])) {
    var a = +Ng.exec(t[0])[1];
    i[0] = r[0] - a;
  } else K(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (D(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Dg.test(t[1])) {
    var o = +Dg.exec(t[1])[1];
    i[1] = r[1] + o;
  } else K(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, qa = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Qp(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, u = 1, c = a.length; u < c; u++) {
      var s = a[u], l = a[u - 1];
      o = Math.min((s.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Lg = function(t, r, n) {
  return !t || !t.length || Pr(t, Xe(n, "type.defaultProps.domain")) ? r : t;
}, sw = function(t, r) {
  var n = t.type.defaultProps ? ye(ye({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, c = n.tooltipType, s = n.chartType, l = n.hide;
  return ye(ye({}, W(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: Sh(t),
    value: he(r, i),
    type: c,
    payload: r,
    chartType: s,
    hide: l
  });
};
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qg(Object(r), !0).forEach(function(n) {
      lw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lw(e, t, r) {
  return t = cM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cM(e) {
  var t = sM(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function sM(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lM(e, t) {
  return dM(e) || hM(e, t) || pM(e, t) || fM();
}
function fM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pM(e, t) {
  if (e) {
    if (typeof e == "string") return Bg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Bg(e, t);
  }
}
function Bg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function dM(e) {
  if (Array.isArray(e)) return e;
}
var Ba = Math.PI / 180, vM = function(t) {
  return t * 180 / Math.PI;
}, ne = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Ba * i) * n,
    y: r + Math.sin(-Ba * i) * n
  };
}, fw = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, pw = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.startAngle, s = t.endAngle, l = De(t.cx, o, o / 2), f = De(t.cy, u, u / 2), p = fw(o, u, n), h = De(t.innerRadius, p, 0), y = De(t.outerRadius, p, p * 0.8), v = Object.keys(r);
  return v.reduce(function(d, g) {
    var b = r[g], O = b.domain, w = b.reversed, m;
    if (G(b.range))
      i === "angleAxis" ? m = [c, s] : i === "radiusAxis" && (m = [h, y]), w && (m = [m[1], m[0]]);
    else {
      m = b.range;
      var x = m, _ = lM(x, 2);
      c = _[0], s = _[1];
    }
    var S = aw(b, a), T = S.realScaleType, j = S.scale;
    j.domain(O).range(m), ow(j);
    var P = uw(j, _t(_t({}, b), {}, {
      realScaleType: T
    })), E = _t(_t(_t({}, b), P), {}, {
      range: m,
      radius: y,
      realScaleType: T,
      scale: j,
      cx: l,
      cy: f,
      innerRadius: h,
      outerRadius: y,
      startAngle: c,
      endAngle: s
    });
    return _t(_t({}, d), {}, lw({}, g, E));
  }, {});
}, yM = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, mM = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = yM({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var c = (n - a) / u, s = Math.acos(c);
  return i > o && (s = 2 * Math.PI - s), {
    radius: u,
    angle: vM(s),
    angleInRadian: s
  };
}, gM = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, bM = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, Fg = function(t, r) {
  var n = t.x, i = t.y, a = mM({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, c = r.innerRadius, s = r.outerRadius;
  if (o < c || o > s)
    return !1;
  if (o === 0)
    return !0;
  var l = gM(r), f = l.startAngle, p = l.endAngle, h = u, y;
  if (f <= p) {
    for (; h > p; )
      h -= 360;
    for (; h < f; )
      h += 360;
    y = h >= f && h <= p;
  } else {
    for (; h > f; )
      h -= 360;
    for (; h < p; )
      h += 360;
    y = h >= p && h <= f;
  }
  return y ? _t(_t({}, r), {}, {
    radius: o,
    angle: bM(h, r)
  }) : null;
}, hw = function(t) {
  return !/* @__PURE__ */ pt(t) && !K(t) && typeof t != "boolean" ? t.className : "";
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
var xM = ["offset"];
function OM(e) {
  return SM(e) || AM(e) || _M(e) || wM();
}
function wM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _M(e, t) {
  if (e) {
    if (typeof e == "string") return Wf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wf(e, t);
  }
}
function AM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function SM(e) {
  if (Array.isArray(e)) return Wf(e);
}
function Wf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PM(e, t) {
  if (e == null) return {};
  var r = TM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      EM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EM(e, t, r) {
  return t = jM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jM(e) {
  var t = $M(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function $M(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yi.apply(this, arguments);
}
var CM = function(t) {
  var r = t.value, n = t.formatter, i = G(t.children) ? r : t.children;
  return K(n) ? n(i) : i;
}, MM = function(t, r) {
  var n = Ne(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, IM = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, c = a, s = c.cx, l = c.cy, f = c.innerRadius, p = c.outerRadius, h = c.startAngle, y = c.endAngle, v = c.clockWise, d = (f + p) / 2, g = MM(h, y), b = g >= 0 ? 1 : -1, O, w;
  i === "insideStart" ? (O = h + b * o, w = v) : i === "insideEnd" ? (O = y - b * o, w = !v) : i === "end" && (O = y + b * o, w = v), w = g <= 0 ? w : !w;
  var m = ne(s, l, d, O), x = ne(s, l, d, O + (w ? 1 : -1) * 359), _ = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(d, ",").concat(d, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), S = G(t.id) ? _r("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ A.createElement("text", yi({}, n, {
    dominantBaseline: "central",
    className: X("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("path", {
    id: S,
    d: _
  })), /* @__PURE__ */ A.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, kM = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, c = a.innerRadius, s = a.outerRadius, l = a.startAngle, f = a.endAngle, p = (l + f) / 2;
  if (i === "outside") {
    var h = ne(o, u, s + n, p), y = h.x, v = h.y;
    return {
      x: y,
      y: v,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (c + s) / 2, g = ne(o, u, d, p), b = g.x, O = g.y;
  return {
    x: b,
    y: O,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, RM = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, c = o.y, s = o.width, l = o.height, f = l >= 0 ? 1 : -1, p = f * i, h = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", v = s >= 0 ? 1 : -1, d = v * i, g = v > 0 ? "end" : "start", b = v > 0 ? "start" : "end";
  if (a === "top") {
    var O = {
      x: u + s / 2,
      y: c - f * i,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return Se(Se({}, O), n ? {
      height: Math.max(c - n.y, 0),
      width: s
    } : {});
  }
  if (a === "bottom") {
    var w = {
      x: u + s / 2,
      y: c + l + p,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return Se(Se({}, w), n ? {
      height: Math.max(n.y + n.height - (c + l), 0),
      width: s
    } : {});
  }
  if (a === "left") {
    var m = {
      x: u - d,
      y: c + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return Se(Se({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (a === "right") {
    var x = {
      x: u + s + d,
      y: c + l / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return Se(Se({}, x), n ? {
      width: Math.max(n.x + n.width - x.x, 0),
      height: l
    } : {});
  }
  var _ = n ? {
    width: s,
    height: l
  } : {};
  return a === "insideLeft" ? Se({
    x: u + d,
    y: c + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, _) : a === "insideRight" ? Se({
    x: u + s - d,
    y: c + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, _) : a === "insideTop" ? Se({
    x: u + s / 2,
    y: c + p,
    textAnchor: "middle",
    verticalAnchor: y
  }, _) : a === "insideBottom" ? Se({
    x: u + s / 2,
    y: c + l - p,
    textAnchor: "middle",
    verticalAnchor: h
  }, _) : a === "insideTopLeft" ? Se({
    x: u + d,
    y: c + p,
    textAnchor: b,
    verticalAnchor: y
  }, _) : a === "insideTopRight" ? Se({
    x: u + s - d,
    y: c + p,
    textAnchor: g,
    verticalAnchor: y
  }, _) : a === "insideBottomLeft" ? Se({
    x: u + d,
    y: c + l - p,
    textAnchor: b,
    verticalAnchor: h
  }, _) : a === "insideBottomRight" ? Se({
    x: u + s - d,
    y: c + l - p,
    textAnchor: g,
    verticalAnchor: h
  }, _) : gn(a) && (D(a.x) || cr(a.x)) && (D(a.y) || cr(a.y)) ? Se({
    x: u + De(a.x, s),
    y: c + De(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, _) : Se({
    x: u + s / 2,
    y: c + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, NM = function(t) {
  return "cx" in t && D(t.cx);
};
function $e(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = PM(e, xM), i = Se({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, c = i.children, s = i.content, l = i.className, f = l === void 0 ? "" : l, p = i.textBreakAll;
  if (!a || G(u) && G(c) && !/* @__PURE__ */ pt(s) && !K(s))
    return null;
  if (/* @__PURE__ */ pt(s))
    return /* @__PURE__ */ Pe(s, i);
  var h;
  if (K(s)) {
    if (h = /* @__PURE__ */ Zn(s, i), /* @__PURE__ */ pt(h))
      return h;
  } else
    h = CM(i);
  var y = NM(a), v = W(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return IM(i, h, v);
  var d = y ? kM(i) : RM(i);
  return /* @__PURE__ */ A.createElement(mr, yi({
    className: X("recharts-label", f)
  }, v, d, {
    breakAll: p
  }), h);
}
$e.displayName = "Label";
var dw = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, c = t.radius, s = t.innerRadius, l = t.outerRadius, f = t.x, p = t.y, h = t.top, y = t.left, v = t.width, d = t.height, g = t.clockWise, b = t.labelViewBox;
  if (b)
    return b;
  if (D(v) && D(d)) {
    if (D(f) && D(p))
      return {
        x: f,
        y: p,
        width: v,
        height: d
      };
    if (D(h) && D(y))
      return {
        x: h,
        y,
        width: v,
        height: d
      };
  }
  return D(f) && D(p) ? {
    x: f,
    y: p,
    width: 0,
    height: 0
  } : D(r) && D(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: s || 0,
    outerRadius: l || c || u || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, DM = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ A.createElement($e, {
    key: "label-implicit",
    viewBox: r
  }) : Te(t) ? /* @__PURE__ */ A.createElement($e, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ pt(t) ? t.type === $e ? /* @__PURE__ */ Pe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ A.createElement($e, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : K(t) ? /* @__PURE__ */ A.createElement($e, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : gn(t) ? /* @__PURE__ */ A.createElement($e, yi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, LM = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = dw(t), o = qe(i, $e).map(function(c, s) {
    return /* @__PURE__ */ Pe(c, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(s)
    });
  });
  if (!n)
    return o;
  var u = DM(t.label, r || a);
  return [u].concat(OM(o));
};
$e.parseViewBox = dw;
$e.renderCallByParent = LM;
var Tl, Wg;
function qM() {
  if (Wg) return Tl;
  Wg = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Tl = e, Tl;
}
var BM = qM();
const vw = /* @__PURE__ */ oe(BM);
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
var FM = ["valueAccessor"], zM = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function WM(e) {
  return HM(e) || GM(e) || KM(e) || UM();
}
function UM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KM(e, t) {
  if (e) {
    if (typeof e == "string") return Uf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Uf(e, t);
  }
}
function GM(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function HM(e) {
  if (Array.isArray(e)) return Uf(e);
}
function Uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      VM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VM(e, t, r) {
  return t = YM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YM(e) {
  var t = XM(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function XM(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gg(e, t) {
  if (e == null) return {};
  var r = ZM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var JM = function(t) {
  return Array.isArray(t.value) ? vw(t.value) : t.value;
};
function dt(e) {
  var t = e.valueAccessor, r = t === void 0 ? JM : t, n = Gg(e, FM), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, c = n.textBreakAll, s = Gg(n, zM);
  return !i || !i.length ? null : /* @__PURE__ */ A.createElement(Q, {
    className: "recharts-label-list"
  }, i.map(function(l, f) {
    var p = G(a) ? r(l, f) : he(l && l.payload, a), h = G(u) ? {} : {
      id: "".concat(u, "-").concat(f)
    };
    return /* @__PURE__ */ A.createElement($e, Fa({}, W(l, !0), s, h, {
      parentViewBox: l.parentViewBox,
      value: p,
      textBreakAll: c,
      viewBox: $e.parseViewBox(G(o) ? l : Kg(Kg({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
dt.displayName = "LabelList";
function QM(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ A.createElement(dt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ A.isValidElement(e) || K(e) ? /* @__PURE__ */ A.createElement(dt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : gn(e) ? /* @__PURE__ */ A.createElement(dt, Fa({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function eI(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = qe(n, dt).map(function(o, u) {
    return /* @__PURE__ */ Pe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = QM(e.label, t);
  return [a].concat(WM(i));
}
dt.renderCallByParent = eI;
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function Kf() {
  return Kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kf.apply(this, arguments);
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), !0).forEach(function(n) {
      tI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tI(e, t, r) {
  return t = rI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rI(e) {
  var t = nI(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function nI(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iI = function(t, r) {
  var n = Ne(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, oa = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, c = t.cornerRadius, s = t.cornerIsExternal, l = c * (u ? 1 : -1) + i, f = Math.asin(c / l) / Ba, p = s ? a : a + o * f, h = ne(r, n, l, p), y = ne(r, n, i, p), v = s ? a - o * f : a, d = ne(r, n, l * Math.cos(f * Ba), v);
  return {
    center: h,
    circleTangency: y,
    lineTangency: d,
    theta: f
  };
}, yw = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, c = iI(o, u), s = o + c, l = ne(r, n, a, o), f = ne(r, n, a, s), p = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > s), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var h = ne(r, n, i, o), y = ne(r, n, i, s);
    p += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= s), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    p += "L ".concat(r, ",").concat(n, " Z");
  return p;
}, aI = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, c = t.cornerIsExternal, s = t.startAngle, l = t.endAngle, f = Ne(l - s), p = oa({
    cx: r,
    cy: n,
    radius: a,
    angle: s,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), h = p.circleTangency, y = p.lineTangency, v = p.theta, d = oa({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), g = d.circleTangency, b = d.lineTangency, O = d.theta, w = c ? Math.abs(s - l) : Math.abs(s - l) - v - O;
  if (w < 0)
    return u ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : yw({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: s,
      endAngle: l
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(w > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(b.x, ",").concat(b.y, `
  `);
  if (i > 0) {
    var x = oa({
      cx: r,
      cy: n,
      radius: i,
      angle: s,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), _ = x.circleTangency, S = x.lineTangency, T = x.theta, j = oa({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), P = j.circleTangency, E = j.lineTangency, $ = j.theta, M = c ? Math.abs(s - l) : Math.abs(s - l) - T - $;
    if (M < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(E.x, ",").concat(E.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(M > 180), ",").concat(+(f > 0), ",").concat(_.x, ",").concat(_.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, oI = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, mw = function(t) {
  var r = Vg(Vg({}, oI), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, c = r.forceCornerRadius, s = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, p = r.className;
  if (o < a || l === f)
    return null;
  var h = X("recharts-sector", p), y = o - a, v = De(u, y, 0, !0), d;
  return v > 0 && Math.abs(l - f) < 360 ? d = aI({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, y / 2),
    forceCornerRadius: c,
    cornerIsExternal: s,
    startAngle: l,
    endAngle: f
  }) : d = yw({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ A.createElement("path", Kf({}, W(r, !0), {
    className: h,
    d,
    role: "img"
  }));
};
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Gf() {
  return Gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gf.apply(this, arguments);
}
function Yg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yg(Object(r), !0).forEach(function(n) {
      uI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uI(e, t, r) {
  return t = cI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cI(e) {
  var t = sI(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function sI(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zg = {
  curveBasisClosed: CA,
  curveBasisOpen: MA,
  curveBasis: $A,
  curveBumpX: yA,
  curveBumpY: mA,
  curveLinearClosed: IA,
  curveLinear: Po,
  curveMonotoneX: kA,
  curveMonotoneY: RA,
  curveNatural: NA,
  curveStep: DA,
  curveStepAfter: qA,
  curveStepBefore: LA
}, ua = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Rn = function(t) {
  return t.x;
}, Nn = function(t) {
  return t.y;
}, lI = function(t, r) {
  if (K(t))
    return t;
  var n = "curve".concat(Ao(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Zg["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Zg[n] || Po;
}, fI = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, c = t.connectNulls, s = c === void 0 ? !1 : c, l = lI(n, u), f = s ? a.filter(function(v) {
    return ua(v);
  }) : a, p;
  if (Array.isArray(o)) {
    var h = s ? o.filter(function(v) {
      return ua(v);
    }) : o, y = f.map(function(v, d) {
      return Xg(Xg({}, v), {}, {
        base: h[d]
      });
    });
    return u === "vertical" ? p = Ji().y(Nn).x1(Rn).x0(function(v) {
      return v.base.x;
    }) : p = Ji().x(Rn).y1(Nn).y0(function(v) {
      return v.base.y;
    }), p.defined(ua).curve(l), p(y);
  }
  return u === "vertical" && D(o) ? p = Ji().y(Nn).x1(Rn).x0(o) : D(o) ? p = Ji().x(Rn).y1(Nn).y0(o) : p = hx().x(Rn).y(Nn), p.defined(ua).curve(l), p(f);
}, xi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? fI(t) : i;
  return /* @__PURE__ */ it.createElement("path", Gf({}, W(t, !1), da(t), {
    className: X("recharts-curve", r),
    d: o,
    ref: a
  }));
}, El = { exports: {} }, jl, Jg;
function pI() {
  if (Jg) return jl;
  Jg = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jl = e, jl;
}
var $l, Qg;
function hI() {
  if (Qg) return $l;
  Qg = 1;
  var e = /* @__PURE__ */ pI();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, $l = function() {
    function n(o, u, c, s, l, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, $l;
}
var eb;
function dI() {
  return eb || (eb = 1, El.exports = /* @__PURE__ */ hI()()), El.exports;
}
var vI = /* @__PURE__ */ dI();
const ae = /* @__PURE__ */ oe(vI), { getOwnPropertyNames: yI, getOwnPropertySymbols: mI } = Object, { hasOwnProperty: gI } = Object.prototype;
function Cl(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function ca(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    const { cache: a } = i, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    const c = e(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function bI(e) {
  return e?.[Symbol.toStringTag];
}
function tb(e) {
  return yI(e).concat(mI(e));
}
const xI = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => gI.call(e, t))
);
function Tr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const OI = "__v", wI = "__o", _I = "_owner", { getOwnPropertyDescriptor: rb, keys: nb } = Object;
function AI(e, t) {
  return e.byteLength === t.byteLength && za(new Uint8Array(e), new Uint8Array(t));
}
function SI(e, t, r) {
  let n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function PI(e, t) {
  return e.byteLength === t.byteLength && za(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function TI(e, t) {
  return Tr(e.getTime(), t.getTime());
}
function EI(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function jI(e, t) {
  return e === t;
}
function ib(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.entries();
  let o, u, c = 0;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.entries();
    let l = !1, f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (i[f]) {
        f++;
        continue;
      }
      const p = o.value, h = u.value;
      if (r.equals(p[0], h[0], c, f, e, t, r) && r.equals(p[1], h[1], p[0], h[0], e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    c++;
  }
  return !0;
}
const $I = Tr;
function CI(e, t, r) {
  const n = nb(e);
  let i = n.length;
  if (nb(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!gw(e, t, r, n[i]))
      return !1;
  return !0;
}
function Dn(e, t, r) {
  const n = tb(e);
  let i = n.length;
  if (tb(t).length !== i)
    return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (a = n[i], !gw(e, t, r, a) || (o = rb(e, a), u = rb(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function MI(e, t) {
  return Tr(e.valueOf(), t.valueOf());
}
function II(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function ab(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.values();
    let s = !1, l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (!i[l] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        s = i[l] = !0;
        break;
      }
      l++;
    }
    if (!s)
      return !1;
  }
  return !0;
}
function za(e, t) {
  let r = e.byteLength;
  if (t.byteLength !== r || e.byteOffset !== t.byteOffset)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function kI(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function gw(e, t, r, n) {
  return (n === _I || n === wI || n === OI) && (e.$$typeof || t.$$typeof) ? !0 : xI(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const RI = "[object ArrayBuffer]", NI = "[object Arguments]", DI = "[object Boolean]", LI = "[object DataView]", qI = "[object Date]", BI = "[object Error]", FI = "[object Map]", zI = "[object Number]", WI = "[object Object]", UI = "[object RegExp]", KI = "[object Set]", GI = "[object String]", HI = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, VI = "[object URL]", YI = Object.prototype.toString;
function XI({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: u, areObjectsEqual: c, arePrimitiveWrappersEqual: s, areRegExpsEqual: l, areSetsEqual: f, areTypedArraysEqual: p, areUrlsEqual: h, unknownTagComparators: y }) {
  return function(d, g, b) {
    if (d === g)
      return !0;
    if (d == null || g == null)
      return !1;
    const O = typeof d;
    if (O !== typeof g)
      return !1;
    if (O !== "object")
      return O === "number" ? u(d, g, b) : O === "function" ? a(d, g, b) : !1;
    const w = d.constructor;
    if (w !== g.constructor)
      return !1;
    if (w === Object)
      return c(d, g, b);
    if (Array.isArray(d))
      return t(d, g, b);
    if (w === Date)
      return n(d, g, b);
    if (w === RegExp)
      return l(d, g, b);
    if (w === Map)
      return o(d, g, b);
    if (w === Set)
      return f(d, g, b);
    const m = YI.call(d);
    if (m === qI)
      return n(d, g, b);
    if (m === UI)
      return l(d, g, b);
    if (m === FI)
      return o(d, g, b);
    if (m === KI)
      return f(d, g, b);
    if (m === WI)
      return typeof d.then != "function" && typeof g.then != "function" && c(d, g, b);
    if (m === VI)
      return h(d, g, b);
    if (m === BI)
      return i(d, g, b);
    if (m === NI)
      return c(d, g, b);
    if (HI[m])
      return p(d, g, b);
    if (m === RI)
      return e(d, g, b);
    if (m === LI)
      return r(d, g, b);
    if (m === DI || m === zI || m === GI)
      return s(d, g, b);
    if (y) {
      let x = y[m];
      if (!x) {
        const _ = bI(d);
        _ && (x = y[_]);
      }
      if (x)
        return x(d, g, b);
    }
    return !1;
  };
}
function ZI({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: AI,
    areArraysEqual: r ? Dn : SI,
    areDataViewsEqual: PI,
    areDatesEqual: TI,
    areErrorsEqual: EI,
    areFunctionsEqual: jI,
    areMapsEqual: r ? Cl(ib, Dn) : ib,
    areNumbersEqual: $I,
    areObjectsEqual: r ? Dn : CI,
    arePrimitiveWrappersEqual: MI,
    areRegExpsEqual: II,
    areSetsEqual: r ? Cl(ab, Dn) : ab,
    areTypedArraysEqual: r ? Cl(za, Dn) : za,
    areUrlsEqual: kI,
    unknownTagComparators: void 0
  };
  if (t && (n = Object.assign({}, n, t(n))), e) {
    const i = ca(n.areArraysEqual), a = ca(n.areMapsEqual), o = ca(n.areObjectsEqual), u = ca(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areMapsEqual: a,
      areObjectsEqual: o,
      areSetsEqual: u
    });
  }
  return n;
}
function JI(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function QI({ circular: e, comparator: t, createState: r, equals: n, strict: i }) {
  if (r)
    return function(u, c) {
      const { cache: s = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: l } = r();
      return t(u, c, {
        cache: s,
        equals: n,
        meta: l,
        strict: i
      });
    };
  if (e)
    return function(u, c) {
      return t(u, c, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: n,
        meta: void 0,
        strict: i
      });
    };
  const a = {
    cache: void 0,
    equals: n,
    meta: void 0,
    strict: i
  };
  return function(u, c) {
    return t(u, c, a);
  };
}
const ek = Xt();
Xt({ strict: !0 });
Xt({ circular: !0 });
Xt({
  circular: !0,
  strict: !0
});
Xt({
  createInternalComparator: () => Tr
});
Xt({
  strict: !0,
  createInternalComparator: () => Tr
});
Xt({
  circular: !0,
  createInternalComparator: () => Tr
});
Xt({
  circular: !0,
  createInternalComparator: () => Tr,
  strict: !0
});
function Xt(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: i = !1 } = e, a = ZI(e), o = XI(a), u = r ? r(o) : JI(o);
  return QI({ circular: t, comparator: o, createState: n, equals: u, strict: i });
}
function tk(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function ob(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : tk(i);
  };
  requestAnimationFrame(n);
}
function Hf(e) {
  "@babel/helpers - typeof";
  return Hf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hf(e);
}
function rk(e) {
  return ok(e) || ak(e) || ik(e) || nk();
}
function nk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ik(e, t) {
  if (e) {
    if (typeof e == "string") return ub(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ub(e, t);
  }
}
function ub(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ak(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ok(e) {
  if (Array.isArray(e)) return e;
}
function uk() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = rk(o), c = u[0], s = u.slice(1);
        if (typeof c == "number") {
          ob(i.bind(null, s), c);
          return;
        }
        i(c), ob(i.bind(null, s));
        return;
      }
      Hf(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function cb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cb(Object(r), !0).forEach(function(n) {
      bw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bw(e, t, r) {
  return t = ck(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ck(e) {
  var t = sk(e, "string");
  return Oi(t) === "symbol" ? t : String(t);
}
function sk(e, t) {
  if (Oi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lk = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, fk = function(t) {
  return t;
}, pk = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Kn = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return sb(sb({}, n), {}, bw({}, i, t(i, r[i])));
  }, {});
}, lb = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(pk(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function hk(e, t) {
  return yk(e) || vk(e, t) || xw(e, t) || dk();
}
function dk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function yk(e) {
  if (Array.isArray(e)) return e;
}
function mk(e) {
  return xk(e) || bk(e) || xw(e) || gk();
}
function gk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xw(e, t) {
  if (e) {
    if (typeof e == "string") return Vf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vf(e, t);
  }
}
function bk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xk(e) {
  if (Array.isArray(e)) return Vf(e);
}
function Vf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Wa = 1e-4, Ow = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, ww = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, fb = function(t, r) {
  return function(n) {
    var i = Ow(t, r);
    return ww(i, n);
  };
}, Ok = function(t, r) {
  return function(n) {
    var i = Ow(t, r), a = [].concat(mk(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return ww(a, n);
  };
}, pb = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var s = c[1].split(")")[0].split(",").map(function(d) {
            return parseFloat(d);
          }), l = hk(s, 4);
          i = l[0], a = l[1], o = l[2], u = l[3];
        }
      }
    }
  var f = fb(i, o), p = fb(a, u), h = Ok(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, v = function(g) {
    for (var b = g > 1 ? 1 : g, O = b, w = 0; w < 8; ++w) {
      var m = f(O) - b, x = h(O);
      if (Math.abs(m - b) < Wa || x < Wa)
        return p(O);
      O = y(O - m / x);
    }
    return p(O);
  };
  return v.isStepper = !1, v;
}, wk = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, c = function(l, f, p) {
    var h = -(l - f) * n, y = p * a, v = p + (h - y) * u / 1e3, d = p * u / 1e3 + l;
    return Math.abs(d - f) < Wa && Math.abs(v) < Wa ? [f, 0] : [d, v];
  };
  return c.isStepper = !0, c.dt = u, c;
}, _k = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return pb(i);
      case "spring":
        return wk();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return pb(i);
    }
  return typeof i == "function" ? i : null;
};
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function hb(e) {
  return Pk(e) || Sk(e) || _w(e) || Ak();
}
function Ak() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Pk(e) {
  if (Array.isArray(e)) return Xf(e);
}
function db(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? db(Object(r), !0).forEach(function(n) {
      Yf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : db(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yf(e, t, r) {
  return t = Tk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tk(e) {
  var t = Ek(e, "string");
  return wi(t) === "symbol" ? t : String(t);
}
function Ek(e, t) {
  if (wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jk(e, t) {
  return Mk(e) || Ck(e, t) || _w(e, t) || $k();
}
function $k() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _w(e, t) {
  if (e) {
    if (typeof e == "string") return Xf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xf(e, t);
  }
}
function Xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ck(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function Mk(e) {
  if (Array.isArray(e)) return e;
}
var Ua = function(t, r, n) {
  return t + (r - t) * n;
}, Zf = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, Ik = function e(t, r, n) {
  var i = Kn(function(a, o) {
    if (Zf(o)) {
      var u = t(o.from, o.to, o.velocity), c = jk(u, 2), s = c[0], l = c[1];
      return Me(Me({}, o), {}, {
        from: s,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Kn(function(a, o) {
    return Zf(o) ? Me(Me({}, o), {}, {
      velocity: Ua(o.velocity, i[a].velocity, n),
      from: Ua(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const kk = (function(e, t, r, n, i) {
  var a = lk(e, t), o = a.reduce(function(d, g) {
    return Me(Me({}, d), {}, Yf({}, g, [e[g], t[g]]));
  }, {}), u = a.reduce(function(d, g) {
    return Me(Me({}, d), {}, Yf({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), c = -1, s, l, f = function() {
    return null;
  }, p = function() {
    return Kn(function(g, b) {
      return b.from;
    }, u);
  }, h = function() {
    return !Object.values(u).filter(Zf).length;
  }, y = function(g) {
    s || (s = g);
    var b = g - s, O = b / r.dt;
    u = Ik(r, u, O), i(Me(Me(Me({}, e), t), p())), s = g, h() || (c = requestAnimationFrame(f));
  }, v = function(g) {
    l || (l = g);
    var b = (g - l) / n, O = Kn(function(m, x) {
      return Ua.apply(void 0, hb(x).concat([r(b)]));
    }, o);
    if (i(Me(Me(Me({}, e), t), O)), b < 1)
      c = requestAnimationFrame(f);
    else {
      var w = Kn(function(m, x) {
        return Ua.apply(void 0, hb(x).concat([r(1)]));
      }, o);
      i(Me(Me(Me({}, e), t), w));
    }
  };
  return f = r.isStepper ? y : v, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
});
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
var Rk = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function Nk(e, t) {
  if (e == null) return {};
  var r = Dk(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Dk(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ml(e) {
  return Fk(e) || Bk(e) || qk(e) || Lk();
}
function Lk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qk(e, t) {
  if (e) {
    if (typeof e == "string") return Jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jf(e, t);
  }
}
function Bk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Fk(e) {
  if (Array.isArray(e)) return Jf(e);
}
function Jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vb(Object(r), !0).forEach(function(n) {
      Fn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fn(e, t, r) {
  return t = Aw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Aw(n.key), n);
  }
}
function Uk(e, t, r) {
  return t && Wk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Aw(e) {
  var t = Kk(e, "string");
  return Zr(t) === "symbol" ? t : String(t);
}
function Kk(e, t) {
  if (Zr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qf(e, t);
}
function Qf(e, t) {
  return Qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qf(e, t);
}
function Hk(e) {
  var t = Vk();
  return function() {
    var n = Ka(e), i;
    if (t) {
      var a = Ka(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return ep(this, i);
  };
}
function ep(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tp(e);
}
function tp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vk() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ka(e);
}
var ot = /* @__PURE__ */ (function(e) {
  Gk(r, e);
  var t = Hk(r);
  function r(n, i) {
    var a;
    zk(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, c = o.attributeName, s = o.from, l = o.to, f = o.steps, p = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(tp(a)), a.changeStyle = a.changeStyle.bind(tp(a)), !u || h <= 0)
      return a.state = {
        style: {}
      }, typeof p == "function" && (a.state = {
        style: l
      }), ep(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (s) {
      if (typeof p == "function")
        return a.state = {
          style: s
        }, ep(a);
      a.state = {
        style: c ? Fn({}, c, s) : s
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return Uk(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, c = a.attributeName, s = a.shouldReAnimate, l = a.to, f = a.from, p = this.state.style;
      if (u) {
        if (!o) {
          var h = {
            style: c ? Fn({}, c, l) : l
          };
          this.state && p && (c && p[c] !== l || !c && p !== l) && this.setState(h);
          return;
        }
        if (!(ek(i.to, l) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = y || s ? f : i.to;
          if (this.state && p) {
            var d = {
              style: c ? Fn({}, c, v) : v
            };
            (c && p[c] !== v || !c && p !== v) && this.setState(d);
          }
          this.runAnimation(ct(ct({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, u = i.to, c = i.duration, s = i.easing, l = i.begin, f = i.onAnimationEnd, p = i.onAnimationStart, h = kk(o, u, _k(s), c, this.changeStyle), y = function() {
        a.stopJSAnimation = h();
      };
      this.manager.start([p, l, y, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, c = i.onAnimationStart, s = o[0], l = s.style, f = s.duration, p = f === void 0 ? 0 : f, h = function(v, d, g) {
        if (g === 0)
          return v;
        var b = d.duration, O = d.easing, w = O === void 0 ? "ease" : O, m = d.style, x = d.properties, _ = d.onAnimationEnd, S = g > 0 ? o[g - 1] : d, T = x || Object.keys(m);
        if (typeof w == "function" || w === "spring")
          return [].concat(Ml(v), [a.runJSAnimation.bind(a, {
            from: S.style,
            to: m,
            duration: b,
            easing: w
          }), b]);
        var j = lb(T, b, w), P = ct(ct(ct({}, S.style), m), {}, {
          transition: j
        });
        return [].concat(Ml(v), [P, b, _]).filter(fk);
      };
      return this.manager.start([c].concat(Ml(o.reduce(h, [l, Math.max(p, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = uk());
      var a = i.begin, o = i.duration, u = i.attributeName, c = i.to, s = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, p = i.steps, h = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof s == "function" || typeof h == "function" || s === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (p.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = u ? Fn({}, u, c) : c, d = lb(Object.keys(v), o, s);
      y.start([l, a, ct(ct({}, v), {}, {
        transition: d
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var c = Nk(i, Rk), s = pr.count(a), l = this.state.style;
      if (typeof a == "function")
        return a(l);
      if (!u || s === 0 || o <= 0)
        return a;
      var f = function(h) {
        var y = h.props, v = y.style, d = v === void 0 ? {} : v, g = y.className, b = /* @__PURE__ */ Pe(h, ct(ct({}, c), {}, {
          style: ct(ct({}, d), l),
          className: g
        }));
        return b;
      };
      return s === 1 ? f(pr.only(a)) : /* @__PURE__ */ A.createElement("div", null, pr.map(a, function(p) {
        return f(p);
      }));
    }
  }]), r;
})(Ze);
ot.displayName = "Animate";
ot.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
ot.propTypes = {
  from: ae.oneOfType([ae.object, ae.string]),
  to: ae.oneOfType([ae.object, ae.string]),
  attributeName: ae.string,
  // animation duration
  duration: ae.number,
  begin: ae.number,
  easing: ae.oneOfType([ae.string, ae.func]),
  steps: ae.arrayOf(ae.shape({
    duration: ae.number.isRequired,
    style: ae.object.isRequired,
    easing: ae.oneOfType([ae.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ae.func]),
    // transition css properties(dash case), optional
    properties: ae.arrayOf("string"),
    onAnimationEnd: ae.func
  })),
  children: ae.oneOfType([ae.node, ae.func]),
  isActive: ae.bool,
  canBegin: ae.bool,
  onAnimationEnd: ae.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: ae.bool,
  onAnimationStart: ae.func,
  onAnimationReStart: ae.func
};
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ga.apply(this, arguments);
}
function Yk(e, t) {
  return Qk(e) || Jk(e, t) || Zk(e, t) || Xk();
}
function Xk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zk(e, t) {
  if (e) {
    if (typeof e == "string") return yb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yb(e, t);
  }
}
function yb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Jk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function Qk(e) {
  if (Array.isArray(e)) return e;
}
function mb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mb(Object(r), !0).forEach(function(n) {
      eR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eR(e, t, r) {
  return t = tR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tR(e) {
  var t = rR(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function rR(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bb = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, s = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], p = 0, h = 4; p < h; p++)
      f[p] = a[p] > o ? o : a[p];
    l = "M".concat(t, ",").concat(r + u * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(s, ",").concat(t + c * f[0], ",").concat(r)), l += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + u * f[1])), l += "L ".concat(t + n, ",").concat(r + i - u * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(s, `,
        `).concat(t + n - c * f[2], ",").concat(r + i)), l += "L ".concat(t + c * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + i - u * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + n - c * y, ",").concat(r + i, `
            L `).concat(t + c * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t, ",").concat(r + i - u * y, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, nR = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, c = r.height;
  if (Math.abs(u) > 0 && Math.abs(c) > 0) {
    var s = Math.min(a, a + u), l = Math.max(a, a + u), f = Math.min(o, o + c), p = Math.max(o, o + c);
    return n >= s && n <= l && i >= f && i <= p;
  }
  return !1;
}, iR = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Ph = function(t) {
  var r = gb(gb({}, iR), t), n = pa(), i = Mp(-1), a = Yk(i, 2), o = a[0], u = a[1];
  Ip(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, l = r.width, f = r.height, p = r.radius, h = r.className, y = r.animationEasing, v = r.animationDuration, d = r.animationBegin, g = r.isAnimationActive, b = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var O = X("recharts-rectangle", h);
  return b ? /* @__PURE__ */ A.createElement(ot, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: c,
      y: s
    },
    to: {
      width: l,
      height: f,
      x: c,
      y: s
    },
    duration: v,
    animationEasing: y,
    isActive: b
  }, function(w) {
    var m = w.width, x = w.height, _ = w.x, S = w.y;
    return /* @__PURE__ */ A.createElement(ot, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: d,
      duration: v,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", Ga({}, W(r, !0), {
      className: O,
      d: bb(_, S, m, x, p),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("path", Ga({}, W(r, !0), {
    className: O,
    d: bb(c, s, l, f, p)
  }));
}, aR = ["points", "className", "baseLinePoints", "connectNulls"];
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
function oR(e, t) {
  if (e == null) return {};
  var r = uR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xb(e) {
  return fR(e) || lR(e) || sR(e) || cR();
}
function cR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sR(e, t) {
  if (e) {
    if (typeof e == "string") return rp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rp(e, t);
  }
}
function lR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function fR(e) {
  if (Array.isArray(e)) return rp(e);
}
function rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ob = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, pR = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Ob(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Ob(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Gn = function(t, r) {
  var n = pR(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(xb(a), xb(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, u, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(u.x, ",").concat(u.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, hR = function(t, r, n) {
  var i = Gn(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(Gn(r.reverse(), n).slice(1));
}, Sw = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = oR(t, aR);
  if (!r || !r.length)
    return null;
  var u = X("recharts-polygon", n);
  if (i && i.length) {
    var c = o.stroke && o.stroke !== "none", s = hR(r, i, a);
    return /* @__PURE__ */ A.createElement("g", {
      className: u
    }, /* @__PURE__ */ A.createElement("path", Rr({}, W(o, !0), {
      fill: s.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: s
    })), c ? /* @__PURE__ */ A.createElement("path", Rr({}, W(o, !0), {
      fill: "none",
      d: Gn(r, a)
    })) : null, c ? /* @__PURE__ */ A.createElement("path", Rr({}, W(o, !0), {
      fill: "none",
      d: Gn(i, a)
    })) : null);
  }
  var l = Gn(r, a);
  return /* @__PURE__ */ A.createElement("path", Rr({}, W(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: u,
    d: l
  }));
};
function np() {
  return np = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, np.apply(this, arguments);
}
var Gi = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = X("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ it.createElement("circle", np({}, W(t, !1), da(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
var dR = ["x", "y", "top", "left", "width", "height", "className"];
function ip() {
  return ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ip.apply(this, arguments);
}
function wb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wb(Object(r), !0).forEach(function(n) {
      yR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yR(e, t, r) {
  return t = mR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mR(e) {
  var t = gR(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function gR(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bR(e, t) {
  if (e == null) return {};
  var r = xR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var OR = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, wR = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, c = t.left, s = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, p = t.height, h = p === void 0 ? 0 : p, y = t.className, v = bR(t, dR), d = vR({
    x: n,
    y: a,
    top: u,
    left: s,
    width: f,
    height: h
  }, v);
  return !D(n) || !D(a) || !D(f) || !D(h) || !D(u) || !D(s) ? null : /* @__PURE__ */ A.createElement("path", ip({}, W(d, !0), {
    className: X("recharts-cross", y),
    d: OR(n, a, f, h, u, s)
  }));
}, _R = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function AR(e, t) {
  if (e == null) return {};
  var r = SR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, It.apply(this, arguments);
}
function _b(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _b(Object(r), !0).forEach(function(n) {
      PR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _b(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PR(e, t, r) {
  return t = TR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TR(e) {
  var t = ER(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function ER(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jR = function(t, r, n, i) {
  var a = "";
  return i.forEach(function(o, u) {
    var c = ne(r, n, t, o);
    u ? a += "L ".concat(c.x, ",").concat(c.y) : a += "M ".concat(c.x, ",").concat(c.y);
  }), a += "Z", a;
}, $R = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.polarAngles, u = t.radialLines;
  if (!o || !o.length || !u)
    return null;
  var c = Pi({
    stroke: "#ccc"
  }, W(t, !1));
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, o.map(function(s) {
    var l = ne(r, n, i, s), f = ne(r, n, a, s);
    return /* @__PURE__ */ A.createElement("line", It({}, c, {
      key: "line-".concat(s),
      x1: l.x,
      y1: l.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, CR = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.index, o = Pi(Pi({
    stroke: "#ccc"
  }, W(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("circle", It({}, o, {
    className: X("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(a),
    cx: r,
    cy: n,
    r: i
  }));
}, MR = function(t) {
  var r = t.radius, n = t.index, i = Pi(Pi({
    stroke: "#ccc"
  }, W(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("path", It({}, i, {
    className: X("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(n),
    d: jR(r, t.cx, t.cy, t.polarAngles)
  }));
}, IR = function(t) {
  var r = t.polarRadius, n = t.gridType;
  return !r || !r.length ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, r.map(function(i, a) {
    var o = a;
    return n === "circle" ? /* @__PURE__ */ A.createElement(CR, It({
      key: o
    }, t, {
      radius: i,
      index: a
    })) : /* @__PURE__ */ A.createElement(MR, It({
      key: o
    }, t, {
      radius: i,
      index: a
    }));
  }));
}, Pw = function(t) {
  var r = t.cx, n = r === void 0 ? 0 : r, i = t.cy, a = i === void 0 ? 0 : i, o = t.innerRadius, u = o === void 0 ? 0 : o, c = t.outerRadius, s = c === void 0 ? 0 : c, l = t.gridType, f = l === void 0 ? "polygon" : l, p = t.radialLines, h = p === void 0 ? !0 : p, y = AR(t, _R);
  return s <= 0 ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ A.createElement($R, It({
    cx: n,
    cy: a,
    innerRadius: u,
    outerRadius: s,
    gridType: f,
    radialLines: h
  }, y)), /* @__PURE__ */ A.createElement(IR, It({
    cx: n,
    cy: a,
    innerRadius: u,
    outerRadius: s,
    gridType: f,
    radialLines: h
  }, y)));
};
Pw.displayName = "PolarGrid";
var Il, Ab;
function kR() {
  if (Ab) return Il;
  Ab = 1;
  var e = Lo(), t = DO(), r = Ot();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return Il = n, Il;
}
var RR = kR();
const NR = /* @__PURE__ */ oe(RR);
var kl, Sb;
function DR() {
  if (Sb) return kl;
  Sb = 1;
  var e = Lo(), t = Ot(), r = LO();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return kl = n, kl;
}
var LR = DR();
const qR = /* @__PURE__ */ oe(LR);
var BR = ["cx", "cy", "angle", "ticks", "axisLine"], FR = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Hn() {
  return Hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hn.apply(this, arguments);
}
function Pb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pb(Object(r), !0).forEach(function(n) {
      Wo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tb(e, t) {
  if (e == null) return {};
  var r = zR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function WR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Eb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ew(n.key), n);
  }
}
function UR(e, t, r) {
  return t && Eb(e.prototype, t), r && Eb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KR(e, t, r) {
  return t = Ha(t), GR(e, Tw() ? Reflect.construct(t, r || [], Ha(e).constructor) : t.apply(e, r));
}
function GR(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return HR(e);
}
function HR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tw = function() {
    return !!e;
  })();
}
function Ha(e) {
  return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ha(e);
}
function VR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ap(e, t);
}
function ap(e, t) {
  return ap = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ap(e, t);
}
function Wo(e, t, r) {
  return t = Ew(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ew(e) {
  var t = YR(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function YR(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Sn = /* @__PURE__ */ (function(e) {
  function t() {
    return WR(this, t), KR(this, t, arguments);
  }
  return VR(t, e), UR(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, u = a.cx, c = a.cy;
        return ne(u, c, i, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = NR(u, function(l) {
        return l.coordinate || 0;
      }), s = qR(u, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: s.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = n.axisLine, s = Tb(n, BR), l = u.reduce(function(y, v) {
        return [Math.min(y[0], v.coordinate), Math.max(y[1], v.coordinate)];
      }, [1 / 0, -1 / 0]), f = ne(i, a, l[0], o), p = ne(i, a, l[1], o), h = nr(nr(nr({}, W(s, !1)), {}, {
        fill: "none"
      }, W(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: p.x,
        y2: p.y
      });
      return /* @__PURE__ */ A.createElement("line", Hn({
        className: "recharts-polar-radius-axis-line"
      }, h));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.angle, c = i.tickFormatter, s = i.stroke, l = Tb(i, FR), f = this.getTickTextAnchor(), p = W(l, !1), h = W(o, !1), y = a.map(function(v, d) {
        var g = n.getTickValueCoord(v), b = nr(nr(nr(nr({
          textAnchor: f,
          transform: "rotate(".concat(90 - u, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, p), {}, {
          stroke: "none",
          fill: s
        }, h), {}, {
          index: d
        }, g), {}, {
          payload: v
        });
        return /* @__PURE__ */ A.createElement(Q, Hn({
          className: X("recharts-polar-radius-axis-tick", hw(o)),
          key: "tick-".concat(v.coordinate)
        }, Gt(n.props, v, d)), t.renderTickItem(o, b, c ? c(v.value, d) : v.value));
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ A.createElement(Q, {
        className: X("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), $e.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, i) : K(n) ? o = n(i) : o = /* @__PURE__ */ A.createElement(mr, Hn({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]);
})(Ze);
Wo(Sn, "displayName", "PolarRadiusAxis");
Wo(Sn, "axisType", "radiusAxis");
Wo(Sn, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function jb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jb(Object(r), !0).forEach(function(n) {
      Uo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $b(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $w(n.key), n);
  }
}
function ZR(e, t, r) {
  return t && $b(e.prototype, t), r && $b(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function JR(e, t, r) {
  return t = Va(t), QR(e, jw() ? Reflect.construct(t, r || [], Va(e).constructor) : t.apply(e, r));
}
function QR(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eN(e);
}
function eN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jw = function() {
    return !!e;
  })();
}
function Va(e) {
  return Va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Va(e);
}
function tN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && op(e, t);
}
function op(e, t) {
  return op = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, op(e, t);
}
function Uo(e, t, r) {
  return t = $w(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $w(e) {
  var t = rN(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function rN(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var nN = Math.PI / 180, Cb = 1e-5, Pn = /* @__PURE__ */ (function(e) {
  function t() {
    return XR(this, t), JR(this, t, arguments);
  }
  return tN(t, e), ZR(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, o = i.cy, u = i.radius, c = i.orientation, s = i.tickSize, l = s || 8, f = ne(a, o, u, n.coordinate), p = ne(a, o, u + (c === "inner" ? -1 : 1) * l, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: p.x,
          y2: p.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * nN), o;
      return a > Cb ? o = i === "outer" ? "start" : "end" : a < -Cb ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, u = n.axisLine, c = n.axisLineType, s = ir(ir({}, W(this.props, !1)), {}, {
        fill: "none"
      }, W(u, !1));
      if (c === "circle")
        return /* @__PURE__ */ A.createElement(Gi, ur({
          className: "recharts-polar-angle-axis-line"
        }, s, {
          cx: i,
          cy: a,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(p) {
        return ne(i, a, o, p.coordinate);
      });
      return /* @__PURE__ */ A.createElement(Sw, ur({
        className: "recharts-polar-angle-axis-line"
      }, s, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.tickLine, c = i.tickFormatter, s = i.stroke, l = W(this.props, !1), f = W(o, !1), p = ir(ir({}, l), {}, {
        fill: "none"
      }, W(u, !1)), h = a.map(function(y, v) {
        var d = n.getTickLineCoord(y), g = n.getTickTextAnchor(y), b = ir(ir(ir({
          textAnchor: g
        }, l), {}, {
          stroke: "none",
          fill: s
        }, f), {}, {
          index: v,
          payload: y,
          x: d.x2,
          y: d.y2
        });
        return /* @__PURE__ */ A.createElement(Q, ur({
          className: X("recharts-polar-angle-axis-tick", hw(o)),
          key: "tick-".concat(y.coordinate)
        }, Gt(n.props, y, v)), u && /* @__PURE__ */ A.createElement("line", ur({
          className: "recharts-polar-angle-axis-tick-line"
        }, p, d)), o && t.renderTickItem(o, b, c ? c(y.value, v) : y.value));
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-polar-angle-axis-ticks"
      }, h);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ A.createElement(Q, {
        className: X("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, i) : K(n) ? o = n(i) : o = /* @__PURE__ */ A.createElement(mr, ur({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]);
})(Ze);
Uo(Pn, "displayName", "PolarAngleAxis");
Uo(Pn, "axisType", "angleAxis");
Uo(Pn, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var Rl, Mb;
function iN() {
  if (Mb) return Rl;
  Mb = 1;
  var e = Nx(), t = e(Object.getPrototypeOf, Object);
  return Rl = t, Rl;
}
var Nl, Ib;
function aN() {
  if (Ib) return Nl;
  Ib = 1;
  var e = Rt(), t = iN(), r = Nt(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, u = a.hasOwnProperty, c = o.call(Object);
  function s(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var p = u.call(f, "constructor") && f.constructor;
    return typeof p == "function" && p instanceof p && o.call(p) == c;
  }
  return Nl = s, Nl;
}
var oN = aN();
const uN = /* @__PURE__ */ oe(oN);
var Dl, kb;
function cN() {
  if (kb) return Dl;
  kb = 1;
  var e = Rt(), t = Nt(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return Dl = n, Dl;
}
var sN = cN();
const lN = /* @__PURE__ */ oe(sN);
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ya.apply(this, arguments);
}
function fN(e, t) {
  return vN(e) || dN(e, t) || hN(e, t) || pN();
}
function pN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hN(e, t) {
  if (e) {
    if (typeof e == "string") return Rb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rb(e, t);
  }
}
function Rb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function vN(e) {
  if (Array.isArray(e)) return e;
}
function Nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      yN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yN(e, t, r) {
  return t = mN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mN(e) {
  var t = gN(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function gN(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Lb = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, bN = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, xN = function(t) {
  var r = Db(Db({}, bN), t), n = pa(), i = Mp(-1), a = fN(i, 2), o = a[0], u = a[1];
  Ip(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && u(O);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, l = r.upperWidth, f = r.lowerWidth, p = r.height, h = r.className, y = r.animationEasing, v = r.animationDuration, d = r.animationBegin, g = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || l !== +l || f !== +f || p !== +p || l === 0 && f === 0 || p === 0)
    return null;
  var b = X("recharts-trapezoid", h);
  return g ? /* @__PURE__ */ A.createElement(ot, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: p,
      x: c,
      y: s
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: p,
      x: c,
      y: s
    },
    duration: v,
    animationEasing: y,
    isActive: g
  }, function(O) {
    var w = O.upperWidth, m = O.lowerWidth, x = O.height, _ = O.x, S = O.y;
    return /* @__PURE__ */ A.createElement(ot, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: d,
      duration: v,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", Ya({}, W(r, !0), {
      className: b,
      d: Lb(_, S, w, m, x),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", Ya({}, W(r, !0), {
    className: b,
    d: Lb(c, s, l, f, p)
  })));
}, ON = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function wN(e, t) {
  if (e == null) return {};
  var r = _N(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _N(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qb(Object(r), !0).forEach(function(n) {
      AN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AN(e, t, r) {
  return t = SN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SN(e) {
  var t = PN(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function PN(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TN(e, t) {
  return Xa(Xa({}, t), e);
}
function EN(e, t) {
  return e === "symbols";
}
function Bb(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ A.createElement(Ph, r);
    case "trapezoid":
      return /* @__PURE__ */ A.createElement(xN, r);
    case "sector":
      return /* @__PURE__ */ A.createElement(mw, r);
    case "symbols":
      if (EN(t))
        return /* @__PURE__ */ A.createElement(Eo, r);
      break;
    default:
      return null;
  }
}
function jN(e) {
  return /* @__PURE__ */ pt(e) ? e.props : e;
}
function Za(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? TN : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, c = wN(e, ON), s;
  if (/* @__PURE__ */ pt(t))
    s = /* @__PURE__ */ Pe(t, Xa(Xa({}, c), jN(t)));
  else if (K(t))
    s = t(c);
  else if (uN(t) && !lN(t)) {
    var l = i(t, c);
    s = /* @__PURE__ */ A.createElement(Bb, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = c;
    s = /* @__PURE__ */ A.createElement(Bb, {
      shapeType: r,
      elementProps: f
    });
  }
  return u ? /* @__PURE__ */ A.createElement(Q, {
    className: o
  }, s) : s;
}
function Ko(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Go(e, t) {
  return t != null && "sectors" in e.props;
}
function ji(e, t) {
  return t != null && "points" in e.props;
}
function $N(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function CN(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function MN(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function IN(e, t) {
  var r;
  return Ko(e, t) ? r = $N : Go(e, t) ? r = CN : ji(e, t) && (r = MN), r;
}
function kN(e, t) {
  var r;
  return Ko(e, t) ? r = "trapezoids" : Go(e, t) ? r = "sectors" : ji(e, t) && (r = "points"), r;
}
function RN(e, t) {
  if (Ko(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Go(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return ji(e, t) ? t.payload : {};
}
function NN(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = kN(r, t), a = RN(r, t), o = n.filter(function(c, s) {
    var l = Pr(a, c), f = r.props[i].filter(function(y) {
      var v = IN(r, t);
      return v(y, t);
    }), p = r.props[i].indexOf(f[f.length - 1]), h = s === p;
    return l && h;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var fa;
function en(e) {
  "@babel/helpers - typeof";
  return en = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, en(e);
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function Fb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fb(Object(r), !0).forEach(function(n) {
      rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mw(n.key), n);
  }
}
function LN(e, t, r) {
  return t && zb(e.prototype, t), r && zb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qN(e, t, r) {
  return t = Ja(t), BN(e, Cw() ? Reflect.construct(t, r || [], Ja(e).constructor) : t.apply(e, r));
}
function BN(e, t) {
  if (t && (en(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return FN(e);
}
function FN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cw = function() {
    return !!e;
  })();
}
function Ja(e) {
  return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ja(e);
}
function zN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && up(e, t);
}
function up(e, t) {
  return up = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, up(e, t);
}
function rt(e, t, r) {
  return t = Mw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mw(e) {
  var t = WN(e, "string");
  return en(t) == "symbol" ? t : t + "";
}
function WN(e, t) {
  if (en(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (en(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var qt = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return DN(this, t), n = qN(this, t, [r]), rt(n, "pieRef", null), rt(n, "sectorRefs", []), rt(n, "id", _r("recharts-pie-")), rt(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), K(i) && i();
    }), rt(n, "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), K(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return zN(t, e), LN(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.label, u = a.labelLine, c = a.dataKey, s = a.valueKey, l = W(this.props, !1), f = W(o, !1), p = W(u, !1), h = o && o.offsetRadius || 20, y = n.map(function(v, d) {
        var g = (v.startAngle + v.endAngle) / 2, b = ne(v.cx, v.cy, v.outerRadius + h, g), O = se(se(se(se({}, l), v), {}, {
          stroke: "none"
        }, f), {}, {
          index: d,
          textAnchor: t.getTextAnchor(b.x, v.cx)
        }, b), w = se(se(se(se({}, l), v), {}, {
          fill: "none",
          stroke: v.fill
        }, p), {}, {
          index: d,
          points: [ne(v.cx, v.cy, v.outerRadius, g), b]
        }), m = c;
        return G(c) && G(s) ? m = "value" : G(c) && (m = s), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ A.createElement(Q, {
          key: "label-".concat(v.startAngle, "-").concat(v.endAngle, "-").concat(v.midAngle, "-").concat(d)
        }, u && t.renderLabelLineItem(u, w, "line"), t.renderLabelItem(o, O, he(v, m)));
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, u = a.blendStroke, c = a.inactiveShape;
      return n.map(function(s, l) {
        if (s?.startAngle === 0 && s?.endAngle === 0 && n.length !== 1) return null;
        var f = i.isActiveIndex(l), p = c && i.hasActiveIndex() ? c : null, h = f ? o : p, y = se(se({}, s), {}, {
          stroke: u ? s.fill : s.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ A.createElement(Q, Nr({
          ref: function(d) {
            d && !i.sectorRefs.includes(d) && i.sectorRefs.push(d);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Gt(i.props, s, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(s?.startAngle, "-").concat(s?.endAngle, "-").concat(s.midAngle, "-").concat(l)
        }), /* @__PURE__ */ A.createElement(Za, Nr({
          option: h,
          isActive: f,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, l = i.animationId, f = this.state, p = f.prevSectors, h = f.prevIsAnimationActive;
      return /* @__PURE__ */ A.createElement(ot, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(h),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var v = y.t, d = [], g = a && a[0], b = g.startAngle;
        return a.forEach(function(O, w) {
          var m = p && p[w], x = w > 0 ? Xe(O, "paddingAngle", 0) : 0;
          if (m) {
            var _ = me(m.endAngle - m.startAngle, O.endAngle - O.startAngle), S = se(se({}, O), {}, {
              startAngle: b + x,
              endAngle: b + _(v) + x
            });
            d.push(S), b = S.endAngle;
          } else {
            var T = O.endAngle, j = O.startAngle, P = me(0, T - j), E = P(v), $ = se(se({}, O), {}, {
              startAngle: b + x,
              endAngle: b + E + x
            });
            d.push($), b = $.endAngle;
          }
        }), /* @__PURE__ */ A.createElement(Q, null, n.renderSectorsStatically(d));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var u = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[u].focus(), i.setState({
                sectorToFocus: u
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !Pr(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, u = i.className, c = i.label, s = i.cx, l = i.cy, f = i.innerRadius, p = i.outerRadius, h = i.isAnimationActive, y = this.state.isAnimationFinished;
      if (a || !o || !o.length || !D(s) || !D(l) || !D(f) || !D(p))
        return null;
      var v = X("recharts-pie", u);
      return /* @__PURE__ */ A.createElement(Q, {
        tabIndex: this.props.rootTabIndex,
        className: v,
        ref: function(g) {
          n.pieRef = g;
        }
      }, this.renderSectors(), c && this.renderLabels(o), $e.renderCallByParent(this.props, null, !1), (!h || y) && dt.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, i);
      if (K(n))
        return n(i);
      var o = X("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ A.createElement(xi, Nr({}, i, {
        key: a,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, i);
      var o = a;
      if (K(n) && (o = n(i), /* @__PURE__ */ A.isValidElement(o)))
        return o;
      var u = X("recharts-pie-label-text", typeof n != "boolean" && !K(n) ? n.className : "");
      return /* @__PURE__ */ A.createElement(mr, Nr({}, i, {
        alignmentBaseline: "middle",
        className: u
      }), o);
    }
  }]);
})(Ze);
fa = qt;
rt(qt, "displayName", "Pie");
rt(qt, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Dt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
rt(qt, "parseDeltaAngle", function(e, t) {
  var r = Ne(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
rt(qt, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = W(e, !1), i = qe(r, xn);
  return t && t.length ? t.map(function(a, o) {
    return se(se(se({
      payload: a
    }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return se(se({}, n), a.props);
  }) : [];
});
rt(qt, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = fw(i, a), u = n + De(e.cx, i, i / 2), c = r + De(e.cy, a, a / 2), s = De(e.innerRadius, o, 0), l = De(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: u,
    cy: c,
    innerRadius: s,
    outerRadius: l,
    maxRadius: f
  };
});
rt(qt, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? se(se({}, t.type.defaultProps), t.props) : t.props, i = fa.getRealPieData(n);
  if (!i || !i.length)
    return null;
  var a = n.cornerRadius, o = n.startAngle, u = n.endAngle, c = n.paddingAngle, s = n.dataKey, l = n.nameKey, f = n.valueKey, p = n.tooltipType, h = Math.abs(n.minAngle), y = fa.parseCoordinateOfPie(n, r), v = fa.parseDeltaAngle(o, u), d = Math.abs(v), g = s;
  G(s) && G(f) ? (ht(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : G(s) && (ht(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = f);
  var b = i.filter(function(S) {
    return he(S, g, 0) !== 0;
  }).length, O = (d >= 360 ? b : b - 1) * c, w = d - b * h - O, m = i.reduce(function(S, T) {
    var j = he(T, g, 0);
    return S + (D(j) ? j : 0);
  }, 0), x;
  if (m > 0) {
    var _;
    x = i.map(function(S, T) {
      var j = he(S, g, 0), P = he(S, l, T), E = (D(j) ? j : 0) / m, $;
      T ? $ = _.endAngle + Ne(v) * c * (j !== 0 ? 1 : 0) : $ = o;
      var M = $ + Ne(v) * ((j !== 0 ? h : 0) + E * w), C = ($ + M) / 2, k = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: P,
        value: j,
        payload: S,
        dataKey: g,
        type: p
      }], L = ne(y.cx, y.cy, k, C);
      return _ = se(se(se({
        percent: E,
        cornerRadius: a,
        name: P,
        tooltipPayload: R,
        midAngle: C,
        middleRadius: k,
        tooltipPosition: L
      }, S), y), {}, {
        value: he(S, g),
        startAngle: $,
        endAngle: M,
        payload: S,
        paddingAngle: Ne(v) * c
      }), _;
    });
  }
  return se(se({}, y), {}, {
    sectors: x,
    data: i
  });
});
var Ll, Wb;
function UN() {
  if (Wb) return Ll;
  Wb = 1;
  function e(t) {
    return t && t.length ? t[0] : void 0;
  }
  return Ll = e, Ll;
}
var ql, Ub;
function KN() {
  return Ub || (Ub = 1, ql = UN()), ql;
}
var GN = KN();
const HN = /* @__PURE__ */ oe(GN);
var VN = ["key"];
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function YN(e, t) {
  if (e == null) return {};
  var r = XN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function XN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
function Kb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kb(Object(r), !0).forEach(function(n) {
      At(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kw(n.key), n);
  }
}
function JN(e, t, r) {
  return t && Gb(e.prototype, t), r && Gb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QN(e, t, r) {
  return t = eo(t), eD(e, Iw() ? Reflect.construct(t, r || [], eo(e).constructor) : t.apply(e, r));
}
function eD(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tD(e);
}
function tD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Iw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Iw = function() {
    return !!e;
  })();
}
function eo(e) {
  return eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eo(e);
}
function rD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cp(e, t);
}
function cp(e, t) {
  return cp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, cp(e, t);
}
function At(e, t, r) {
  return t = kw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kw(e) {
  var t = nD(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function nD(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    ZN(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = QN(this, t, [].concat(i)), At(r, "state", {
      isAnimationFinished: !1
    }), At(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), K(o) && o();
    }), At(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), K(o) && o();
    }), At(r, "handleMouseEnter", function(o) {
      var u = r.props.onMouseEnter;
      u && u(r.props, o);
    }), At(r, "handleMouseLeave", function(o) {
      var u = r.props.onMouseLeave;
      u && u(r.props, o);
    }), r;
  }
  return rD(t, e), JN(t, [{
    key: "renderDots",
    value: function(n) {
      var i = this.props, a = i.dot, o = i.dataKey, u = W(this.props, !1), c = W(a, !0), s = n.map(function(l, f) {
        var p = Re(Re(Re({
          key: "dot-".concat(f),
          r: 3
        }, u), c), {}, {
          dataKey: o,
          cx: l.x,
          cy: l.y,
          index: f,
          payload: l
        });
        return t.renderDotItem(a, p);
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-radar-dots"
      }, s);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(n) {
      var i = this.props, a = i.shape, o = i.dot, u = i.isRange, c = i.baseLinePoints, s = i.connectNulls, l;
      return /* @__PURE__ */ A.isValidElement(a) ? l = /* @__PURE__ */ A.cloneElement(a, Re(Re({}, this.props), {}, {
        points: n
      })) : K(a) ? l = a(Re(Re({}, this.props), {}, {
        points: n
      })) : l = /* @__PURE__ */ A.createElement(Sw, Qa({}, W(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: n,
        baseLinePoints: u ? c : null,
        connectNulls: s
      })), /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-radar-polygon"
      }, l, o ? this.renderDots(n) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(ot, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var h = p.t, y = f && f.length / a.length, v = a.map(function(d, g) {
          var b = f && f[Math.floor(g * y)];
          if (b) {
            var O = me(b.x, d.x), w = me(b.y, d.y);
            return Re(Re({}, d), {}, {
              x: O(h),
              y: w(h)
            });
          }
          var m = me(d.cx, d.x), x = me(d.cy, d.y);
          return Re(Re({}, d), {}, {
            x: m(h),
            y: x(h)
          });
        });
        return n.renderPolygonStatically(v);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var n = this.props, i = n.points, a = n.isAnimationActive, o = n.isRange, u = this.state.prevPoints;
      return a && i && i.length && !o && (!u || !Pr(u, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.className, o = n.points, u = n.isAnimationActive;
      if (i || !o || !o.length)
        return null;
      var c = this.state.isAnimationFinished, s = X("recharts-radar", a);
      return /* @__PURE__ */ A.createElement(Q, {
        className: s
      }, this.renderPolygon(), (!u || c) && dt.renderCallByParent(this.props, o));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ A.isValidElement(n))
        a = /* @__PURE__ */ A.cloneElement(n, i);
      else if (K(n))
        a = n(i);
      else {
        var o = i.key, u = YN(i, VN);
        a = /* @__PURE__ */ A.createElement(Gi, Qa({}, u, {
          key: o,
          className: X("recharts-radar-dot", typeof n != "boolean" ? n.className : "")
        }));
      }
      return a;
    }
  }]);
})(Ze);
At(Hi, "displayName", "Radar");
At(Hi, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Dt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
At(Hi, "getComposedData", function(e) {
  var t = e.radiusAxis, r = e.angleAxis, n = e.displayedData, i = e.dataKey, a = e.bandSize, o = r.cx, u = r.cy, c = !1, s = [], l = r.type !== "number" ? a ?? 0 : 0;
  n.forEach(function(p, h) {
    var y = he(p, r.dataKey, h), v = he(p, i), d = r.scale(y) + l, g = Array.isArray(v) ? vw(v) : v, b = G(g) ? void 0 : t.scale(g);
    Array.isArray(v) && v.length >= 2 && (c = !0), s.push(Re(Re({}, ne(o, u, b, d)), {}, {
      name: y,
      value: v,
      cx: o,
      cy: u,
      radius: b,
      angle: d,
      payload: p
    }));
  });
  var f = [];
  return c && s.forEach(function(p) {
    if (Array.isArray(p.value)) {
      var h = HN(p.value), y = G(h) ? void 0 : t.scale(h);
      f.push(Re(Re({}, p), {}, {
        radius: y
      }, ne(o, u, y, p.angle)));
    } else
      f.push(p);
  }), {
    points: s,
    isRange: c,
    baseLinePoints: f
  };
});
var Bl, Hb;
function iD() {
  if (Hb) return Bl;
  Hb = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, c = t(e((i - n) / (a || 1)), 0), s = Array(c); c--; )
      s[o ? c : ++u] = n, n += a;
    return s;
  }
  return Bl = r, Bl;
}
var Fl, Vb;
function Rw() {
  if (Vb) return Fl;
  Vb = 1;
  var e = Jx(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return Fl = n, Fl;
}
var zl, Yb;
function aD() {
  if (Yb) return zl;
  Yb = 1;
  var e = iD(), t = Co(), r = Rw();
  function n(i) {
    return function(a, o, u) {
      return u && typeof u != "number" && t(a, o, u) && (o = u = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), u = u === void 0 ? a < o ? 1 : -1 : r(u), e(a, o, u, i);
    };
  }
  return zl = n, zl;
}
var Wl, Xb;
function oD() {
  if (Xb) return Wl;
  Xb = 1;
  var e = aD(), t = e();
  return Wl = t, Wl;
}
var uD = oD();
const to = /* @__PURE__ */ oe(uD);
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Zb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zb(Object(r), !0).forEach(function(n) {
      Nw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Nw(e, t, r) {
  return t = cD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cD(e) {
  var t = sD(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function sD(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lD = ["Webkit", "Moz", "O", "ms"], fD = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = lD.reduce(function(a, o) {
    return Jb(Jb({}, a), {}, Nw({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function Qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ul(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qb(Object(r), !0).forEach(function(n) {
      He(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function e0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lw(n.key), n);
  }
}
function hD(e, t, r) {
  return t && e0(e.prototype, t), r && e0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dD(e, t, r) {
  return t = no(t), vD(e, Dw() ? Reflect.construct(t, r || [], no(e).constructor) : t.apply(e, r));
}
function vD(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return yD(e);
}
function yD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Dw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dw = function() {
    return !!e;
  })();
}
function no(e) {
  return no = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, no(e);
}
function mD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sp(e, t);
}
function sp(e, t) {
  return sp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sp(e, t);
}
function He(e, t, r) {
  return t = Lw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Lw(e) {
  var t = gD(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function gD(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var bD = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, s = Wn().domain(to(0, c)).range([a, a + o - u]), l = s.domain().map(function(f) {
    return s(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: s(n),
    endX: s(i),
    scale: s,
    scaleValues: l
  };
}, t0 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, nn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return pD(this, t), n = dD(this, t, [r]), He(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), He(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), He(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o?.({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), He(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), He(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), He(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), He(n, "handleSlideDragStart", function(i) {
      var a = t0(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return mD(t, e), hD(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, c = u.gap, s = u.data, l = s.length - 1, f = Math.min(i, a), p = Math.max(i, a), h = t.getIndexInRange(o, f), y = t.getIndexInRange(o, p);
      return {
        startIndex: h - h % c,
        endIndex: y === l ? l : y - y % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, c = he(a[n], u, n);
      return K(o) ? o(c, n) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, c = this.props, s = c.x, l = c.width, f = c.travellerWidth, p = c.startIndex, h = c.endIndex, y = c.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, s + l - f - u, s + l - f - o) : v < 0 && (v = Math.max(v, s - o, s - u));
      var d = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (d.startIndex !== p || d.endIndex !== h) && y && y(d), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = t0(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, c = i.startX, s = this.state[o], l = this.props, f = l.x, p = l.width, h = l.travellerWidth, y = l.onChange, v = l.gap, d = l.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = n.pageX - a;
      b > 0 ? b = Math.min(b, f + p - h - s) : b < 0 && (b = Math.max(b, f - s)), g[o] = s + b;
      var O = this.getIndex(g), w = O.startIndex, m = O.endIndex, x = function() {
        var S = d.length - 1;
        return o === "startX" && (u > c ? w % v === 0 : m % v === 0) || u < c && m === S || o === "endX" && (u > c ? m % v === 0 : w % v === 0) || u > c && m === S;
      };
      this.setState(He(He({}, o, s + b), "brushMoveStartX", n.pageX), function() {
        y && x() && y(O);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, c = o.startX, s = o.endX, l = this.state[i], f = u.indexOf(l);
      if (f !== -1) {
        var p = f + n;
        if (!(p === -1 || p >= u.length)) {
          var h = u[p];
          i === "startX" && h >= s || i === "endX" && h <= c || this.setState(He({}, i, h), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.fill, s = n.stroke;
      return /* @__PURE__ */ A.createElement("rect", {
        stroke: s,
        fill: c,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.data, s = n.children, l = n.padding, f = pr.only(s);
      return f ? /* @__PURE__ */ A.cloneElement(f, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: l,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, c = this.props, s = c.y, l = c.travellerWidth, f = c.height, p = c.traveller, h = c.ariaLabel, y = c.data, v = c.startIndex, d = c.endIndex, g = Math.max(n, this.props.x), b = Ul(Ul({}, W(this.props, !1)), {}, {
        x: g,
        y: s,
        width: l,
        height: f
      }), O = h || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[d]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ A.createElement(Q, {
        tabIndex: 0,
        role: "slider",
        "aria-label": O,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(p, b));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, c = a.stroke, s = a.travellerWidth, l = Math.min(n, i) + s, f = Math.max(Math.abs(i - n) - s, 0);
      return /* @__PURE__ */ A.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: l,
        y: o,
        width: f,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, c = n.travellerWidth, s = n.stroke, l = this.state, f = l.startX, p = l.endX, h = 5, y = {
        pointerEvents: "none",
        fill: s
      };
      return /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ A.createElement(mr, ro({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, p) - h,
        y: o + u / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ A.createElement(mr, ro({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, p) + c + h,
        y: o + u / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, c = n.y, s = n.width, l = n.height, f = n.alwaysShowText, p = this.state, h = p.startX, y = p.endX, v = p.isTextActive, d = p.isSlideMoving, g = p.isTravellerMoving, b = p.isTravellerFocused;
      if (!i || !i.length || !D(u) || !D(c) || !D(s) || !D(l) || s <= 0 || l <= 0)
        return null;
      var O = X("recharts-brush", a), w = A.Children.count(o) === 1, m = fD("userSelect", "none");
      return /* @__PURE__ */ A.createElement(Q, {
        className: O,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (v || d || g || b || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, c = n.stroke, s = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: i + 1,
        y1: s,
        x2: i + o - 1,
        y2: s,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: i + 1,
        y1: s + 2,
        x2: i + o - 1,
        y2: s + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ A.isValidElement(n) ? a = /* @__PURE__ */ A.cloneElement(n, i) : K(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, c = n.travellerWidth, s = n.updateId, l = n.startIndex, f = n.endIndex;
      if (a !== i.prevData || s !== i.prevUpdateId)
        return Ul({
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o
        }, a && a.length ? bD({
          data: a,
          width: o,
          x: u,
          travellerWidth: c,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - c]);
        var p = i.scale.domain().map(function(h) {
          return i.scale(h);
        });
        return {
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: p
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var c = Math.floor((o + u) / 2);
        n[c] > i ? u = c : o = c;
      }
      return i >= n[u] ? u : o;
    }
  }]);
})(Ze);
He(nn, "displayName", "Brush");
He(nn, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Kl, r0;
function xD() {
  if (r0) return Kl;
  r0 = 1;
  var e = Jp();
  function t(r, n) {
    var i;
    return e(r, function(a, o, u) {
      return i = n(a, o, u), !i;
    }), !!i;
  }
  return Kl = t, Kl;
}
var Gl, n0;
function OD() {
  if (n0) return Gl;
  n0 = 1;
  var e = jx(), t = Ot(), r = xD(), n = Ue(), i = Co();
  function a(o, u, c) {
    var s = n(o) ? e : r;
    return c && i(o, u, c) && (u = void 0), s(o, t(u, 3));
  }
  return Gl = a, Gl;
}
var wD = OD();
const _D = /* @__PURE__ */ oe(wD);
var gt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Hl, i0;
function AD() {
  if (i0) return Hl;
  i0 = 1;
  var e = Hx();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Hl = t, Hl;
}
var Vl, a0;
function SD() {
  if (a0) return Vl;
  a0 = 1;
  var e = AD(), t = Kx(), r = Ot();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(u, c, s) {
      e(o, c, a(u, c, s));
    }), o;
  }
  return Vl = n, Vl;
}
var PD = SD();
const TD = /* @__PURE__ */ oe(PD);
var Yl, o0;
function ED() {
  if (o0) return Yl;
  o0 = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return Yl = e, Yl;
}
var Xl, u0;
function jD() {
  if (u0) return Xl;
  u0 = 1;
  var e = Jp();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, u) {
      return i = !!n(a, o, u), i;
    }), i;
  }
  return Xl = t, Xl;
}
var Zl, c0;
function $D() {
  if (c0) return Zl;
  c0 = 1;
  var e = ED(), t = jD(), r = Ot(), n = Ue(), i = Co();
  function a(o, u, c) {
    var s = n(o) ? e : t;
    return c && i(o, u, c) && (u = void 0), s(o, r(u, 3));
  }
  return Zl = a, Zl;
}
var CD = $D();
const qw = /* @__PURE__ */ oe(CD);
var MD = ["x", "y"];
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function lp() {
  return lp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lp.apply(this, arguments);
}
function s0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s0(Object(r), !0).forEach(function(n) {
      ID(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ID(e, t, r) {
  return t = kD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kD(e) {
  var t = RD(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function RD(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ND(e, t) {
  if (e == null) return {};
  var r = DD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function LD(e, t) {
  var r = e.x, n = e.y, i = ND(e, MD), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), c = parseInt(u, 10), s = "".concat(t.height || i.height), l = parseInt(s, 10), f = "".concat(t.width || i.width), p = parseInt(f, 10);
  return Ln(Ln(Ln(Ln(Ln({}, t), i), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: l,
    width: p,
    name: t.name,
    radius: t.radius
  });
}
function l0(e) {
  return /* @__PURE__ */ A.createElement(Za, lp({
    shapeType: "rectangle",
    propTransformer: LD,
    activeClassName: "recharts-active-bar"
  }, e));
}
var qD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = D(n) || N1(n);
    return a ? t(n, i) : (a || br(), r);
  };
}, BD = ["value", "background"], Bw;
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function FD(e, t) {
  if (e == null) return {};
  var r = zD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function zD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, io.apply(this, arguments);
}
function f0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? f0(Object(r), !0).forEach(function(n) {
      Wt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function p0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zw(n.key), n);
  }
}
function UD(e, t, r) {
  return t && p0(e.prototype, t), r && p0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KD(e, t, r) {
  return t = ao(t), GD(e, Fw() ? Reflect.construct(t, r || [], ao(e).constructor) : t.apply(e, r));
}
function GD(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return HD(e);
}
function HD(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fw = function() {
    return !!e;
  })();
}
function ao(e) {
  return ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ao(e);
}
function VD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fp(e, t);
}
function fp(e, t) {
  return fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fp(e, t);
}
function Wt(e, t, r) {
  return t = zw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zw(e) {
  var t = YD(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function YD(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Er = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    WD(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = KD(this, t, [].concat(i)), Wt(r, "state", {
      isAnimationFinished: !1
    }), Wt(r, "id", _r("recharts-bar-")), Wt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Wt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return VD(t, e), UD(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, c = a.activeIndex, s = a.activeBar, l = W(this.props, !1);
      return n && n.map(function(f, p) {
        var h = p === c, y = h ? s : o, v = be(be(be({}, l), f), {}, {
          isActive: h,
          option: y,
          index: p,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ A.createElement(Q, io({
          className: "recharts-bar-rectangle"
        }, Gt(i.props, f, p), {
          // https://github.com/recharts/recharts/issues/5415
          // eslint-disable-next-line react/no-array-index-key
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value, "-").concat(p)
        }), /* @__PURE__ */ A.createElement(l0, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, c = i.animationBegin, s = i.animationDuration, l = i.animationEasing, f = i.animationId, p = this.state.prevData;
      return /* @__PURE__ */ A.createElement(ot, {
        begin: c,
        duration: s,
        isActive: u,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var y = h.t, v = a.map(function(d, g) {
          var b = p && p[g];
          if (b) {
            var O = me(b.x, d.x), w = me(b.y, d.y), m = me(b.width, d.width), x = me(b.height, d.height);
            return be(be({}, d), {}, {
              x: O(y),
              y: w(y),
              width: m(y),
              height: x(y)
            });
          }
          if (o === "horizontal") {
            var _ = me(0, d.height), S = _(y);
            return be(be({}, d), {}, {
              y: d.y + d.height - S,
              height: S
            });
          }
          var T = me(0, d.width), j = T(y);
          return be(be({}, d), {}, {
            width: j
          });
        });
        return /* @__PURE__ */ A.createElement(Q, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !Pr(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, c = W(this.props.background, !1);
      return a.map(function(s, l) {
        s.value;
        var f = s.background, p = FD(s, BD);
        if (!f)
          return null;
        var h = be(be(be(be(be({}, p), {}, {
          fill: "#eee"
        }, f), c), Gt(n.props, s, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ A.createElement(l0, io({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === u
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, c = a.yAxis, s = a.layout, l = a.children, f = qe(l, An);
      if (!f)
        return null;
      var p = s === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(d, g) {
        var b = Array.isArray(d.value) ? d.value[1] : d.value;
        return {
          x: d.x,
          y: d.y,
          value: b,
          errorVal: he(d, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(Q, y, f.map(function(v) {
        return /* @__PURE__ */ A.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: c,
          layout: s,
          offset: p,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, c = n.yAxis, s = n.left, l = n.top, f = n.width, p = n.height, h = n.isAnimationActive, y = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var d = this.state.isAnimationFinished, g = X("recharts-bar", o), b = u && u.allowDataOverflow, O = c && c.allowDataOverflow, w = b || O, m = G(v) ? this.id : v;
      return /* @__PURE__ */ A.createElement(Q, {
        className: g
      }, b || O ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: b ? s : s - f / 2,
        y: O ? l : l - p / 2,
        width: b ? f : f * 2,
        height: O ? p : p * 2
      }))) : null, /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-bar-rectangles",
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(w, m), (!h || d) && dt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(Ze);
Bw = Er;
Wt(Er, "displayName", "Bar");
Wt(Er, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Dt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Wt(Er, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, c = e.yAxisTicks, s = e.stackedData, l = e.dataStartIndex, f = e.displayedData, p = e.offset, h = JC(n, r);
  if (!h)
    return null;
  var y = t.layout, v = r.type.defaultProps, d = v !== void 0 ? be(be({}, v), r.props) : r.props, g = d.dataKey, b = d.children, O = d.minPointSize, w = y === "horizontal" ? o : a, m = s ? w.scale.domain() : null, x = aM({
    numericAxis: w
  }), _ = qe(b, xn), S = f.map(function(T, j) {
    var P, E, $, M, C, k;
    s ? P = QC(s[l + j], m) : (P = he(T, g), Array.isArray(P) || (P = [x, P]));
    var R = qD(O, Bw.defaultProps.minPointSize)(P[1], j);
    if (y === "horizontal") {
      var L, q = [o.scale(P[0]), o.scale(P[1])], U = q[0], V = q[1];
      E = Rg({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: h.offset,
        entry: T,
        index: j
      }), $ = (L = V ?? U) !== null && L !== void 0 ? L : void 0, M = h.size;
      var F = U - V;
      if (C = Number.isNaN(F) ? 0 : F, k = {
        x: E,
        y: o.y,
        width: M,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs(C) < Math.abs(R)) {
        var Y = Ne(C || R) * (Math.abs(R) - Math.abs(C));
        $ -= Y, C += Y;
      }
    } else {
      var fe = [a.scale(P[0]), a.scale(P[1])], ge = fe[0], Ke = fe[1];
      if (E = ge, $ = Rg({
        axis: o,
        ticks: c,
        bandSize: i,
        offset: h.offset,
        entry: T,
        index: j
      }), M = Ke - ge, C = h.size, k = {
        x: a.x,
        y: $,
        width: a.width,
        height: C
      }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var Qt = Ne(M || R) * (Math.abs(R) - Math.abs(M));
        M += Qt;
      }
    }
    return be(be(be({}, T), {}, {
      x: E,
      y: $,
      width: M,
      height: C,
      value: s ? P : P[1],
      payload: T,
      background: k
    }, _ && _[j] && _[j].props), {}, {
      tooltipPayload: [sw(r, T)],
      tooltipPosition: {
        x: E + M / 2,
        y: $ + C / 2
      }
    });
  });
  return be({
    data: S,
    layout: y
  }, p);
});
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function XD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ww(n.key), n);
  }
}
function ZD(e, t, r) {
  return t && h0(e.prototype, t), r && h0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function d0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? d0(Object(r), !0).forEach(function(n) {
      Ho(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ho(e, t, r) {
  return t = Ww(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ww(e) {
  var t = JD(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function JD(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Th = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.layout, s = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, p = !!Ve(s, Er);
  return l.reduce(function(h, y) {
    var v = r[y], d = v.orientation, g = v.domain, b = v.padding, O = b === void 0 ? {} : b, w = v.mirror, m = v.reversed, x = "".concat(d).concat(w ? "Mirror" : ""), _, S, T, j, P;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var E = g[1] - g[0], $ = 1 / 0, M = v.categoricalDomain.sort(B1);
      if (M.forEach(function(fe, ge) {
        ge > 0 && ($ = Math.min((fe || 0) - (M[ge - 1] || 0), $));
      }), Number.isFinite($)) {
        var C = $ / E, k = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (_ = C * k / 2), v.padding === "no-gap") {
          var R = De(t.barCategoryGap, C * k), L = C * k / 2;
          _ = L - R - (L - R) / k * R;
        }
      }
    }
    i === "xAxis" ? S = [n.left + (O.left || 0) + (_ || 0), n.left + n.width - (O.right || 0) - (_ || 0)] : i === "yAxis" ? S = c === "horizontal" ? [n.top + n.height - (O.bottom || 0), n.top + (O.top || 0)] : [n.top + (O.top || 0) + (_ || 0), n.top + n.height - (O.bottom || 0) - (_ || 0)] : S = v.range, m && (S = [S[1], S[0]]);
    var q = aw(v, a, p), U = q.scale, V = q.realScaleType;
    U.domain(g).range(S), ow(U);
    var F = uw(U, st(st({}, v), {}, {
      realScaleType: V
    }));
    i === "xAxis" ? (P = d === "top" && !w || d === "bottom" && w, T = n.left, j = f[x] - P * v.height) : i === "yAxis" && (P = d === "left" && !w || d === "right" && w, T = f[x] - P * v.width, j = n.top);
    var Y = st(st(st({}, v), F), {}, {
      realScaleType: V,
      x: T,
      y: j,
      scale: U,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return Y.bandSize = qa(Y, F), !v.hide && i === "xAxis" ? f[x] += (P ? -1 : 1) * Y.height : v.hide || (f[x] += (P ? -1 : 1) * Y.width), st(st({}, h), {}, Ho({}, y, Y));
  }, {});
}, Uw = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, QD = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Uw({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Kw = /* @__PURE__ */ (function() {
  function e(t) {
    XD(this, e), this.scale = t;
  }
  return ZD(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
Ho(Kw, "EPS", 1e-4);
var Eh = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return st(st({}, n), {}, Ho({}, i, Kw.create(t[i])));
  }, {});
  return st(st({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return TD(i, function(c, s) {
        return r[s].apply(c, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return qw(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function e2(e) {
  return (e % 180 + 180) % 180;
}
var t2 = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = e2(i), o = a * Math.PI / 180, u = Math.atan(n / r), c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, Jl, v0;
function r2() {
  if (v0) return Jl;
  v0 = 1;
  var e = Ot(), t = Bi(), r = jo();
  function n(i) {
    return function(a, o, u) {
      var c = Object(a);
      if (!t(a)) {
        var s = e(o, 3);
        a = r(a), o = function(f) {
          return s(c[f], f, c);
        };
      }
      var l = i(a, o, u);
      return l > -1 ? c[s ? a[l] : l] : void 0;
    };
  }
  return Jl = n, Jl;
}
var Ql, y0;
function n2() {
  if (y0) return Ql;
  y0 = 1;
  var e = Rw();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return Ql = t, Ql;
}
var ef, m0;
function i2() {
  if (m0) return ef;
  m0 = 1;
  var e = Bx(), t = Ot(), r = n2(), n = Math.max;
  function i(a, o, u) {
    var c = a == null ? 0 : a.length;
    if (!c)
      return -1;
    var s = u == null ? 0 : r(u);
    return s < 0 && (s = n(c + s, 0)), e(a, t(o, 3), s);
  }
  return ef = i, ef;
}
var tf, g0;
function a2() {
  if (g0) return tf;
  g0 = 1;
  var e = r2(), t = i2(), r = e(t);
  return tf = r, tf;
}
var o2 = a2();
const u2 = /* @__PURE__ */ oe(o2);
var c2 = rx();
const s2 = /* @__PURE__ */ oe(c2);
var l2 = s2(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), jh = /* @__PURE__ */ Or(void 0), $h = /* @__PURE__ */ Or(void 0), Gw = /* @__PURE__ */ Or(void 0), Hw = /* @__PURE__ */ Or({}), Vw = /* @__PURE__ */ Or(void 0), Yw = /* @__PURE__ */ Or(0), Xw = /* @__PURE__ */ Or(0), b0 = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, c = t.width, s = t.height, l = l2(a);
  return /* @__PURE__ */ A.createElement(jh.Provider, {
    value: n
  }, /* @__PURE__ */ A.createElement($h.Provider, {
    value: i
  }, /* @__PURE__ */ A.createElement(Hw.Provider, {
    value: a
  }, /* @__PURE__ */ A.createElement(Gw.Provider, {
    value: l
  }, /* @__PURE__ */ A.createElement(Vw.Provider, {
    value: o
  }, /* @__PURE__ */ A.createElement(Yw.Provider, {
    value: s
  }, /* @__PURE__ */ A.createElement(Xw.Provider, {
    value: c
  }, u)))))));
}, f2 = function() {
  return kt(Vw);
}, Zw = function(t) {
  var r = kt(jh);
  r == null && br();
  var n = r[t];
  return n == null && br(), n;
}, p2 = function() {
  var t = kt(jh);
  return zt(t);
}, h2 = function() {
  var t = kt($h), r = u2(t, function(n) {
    return qw(n.domain, Number.isFinite);
  });
  return r || zt(t);
}, Jw = function(t) {
  var r = kt($h);
  r == null && br();
  var n = r[t];
  return n == null && br(), n;
}, d2 = function() {
  var t = kt(Gw);
  return t;
}, v2 = function() {
  return kt(Hw);
}, Ch = function() {
  return kt(Xw);
}, Mh = function() {
  return kt(Yw);
};
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function y2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function m2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, e_(n.key), n);
  }
}
function g2(e, t, r) {
  return t && m2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b2(e, t, r) {
  return t = oo(t), x2(e, Qw() ? Reflect.construct(t, r || [], oo(e).constructor) : t.apply(e, r));
}
function x2(e, t) {
  if (t && (on(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O2(e);
}
function O2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qw = function() {
    return !!e;
  })();
}
function oo(e) {
  return oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oo(e);
}
function w2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pp(e, t);
}
function pp(e, t) {
  return pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, pp(e, t);
}
function x0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x0(Object(r), !0).forEach(function(n) {
      Ih(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ih(e, t, r) {
  return t = e_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e_(e) {
  var t = _2(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function _2(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function A2(e, t) {
  return E2(e) || T2(e, t) || P2(e, t) || S2();
}
function S2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P2(e, t) {
  if (e) {
    if (typeof e == "string") return w0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w0(e, t);
  }
}
function w0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function T2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function E2(e) {
  if (Array.isArray(e)) return e;
}
function hp() {
  return hp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hp.apply(this, arguments);
}
var j2 = function(t, r) {
  var n;
  return /* @__PURE__ */ A.isValidElement(t) ? n = /* @__PURE__ */ A.cloneElement(t, r) : K(t) ? n = t(r) : n = /* @__PURE__ */ A.createElement("line", hp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, $2 = function(t, r, n, i, a, o, u, c, s) {
  var l = a.x, f = a.y, p = a.width, h = a.height;
  if (n) {
    var y = s.y, v = t.y.apply(y, {
      position: o
    });
    if (gt(s, "discard") && !t.y.isInRange(v))
      return null;
    var d = [{
      x: l + p,
      y: v
    }, {
      x: l,
      y: v
    }];
    return c === "left" ? d.reverse() : d;
  }
  if (r) {
    var g = s.x, b = t.x.apply(g, {
      position: o
    });
    if (gt(s, "discard") && !t.x.isInRange(b))
      return null;
    var O = [{
      x: b,
      y: f + h
    }, {
      x: b,
      y: f
    }];
    return u === "top" ? O.reverse() : O;
  }
  if (i) {
    var w = s.segment, m = w.map(function(x) {
      return t.apply(x, {
        position: o
      });
    });
    return gt(s, "discard") && _D(m, function(x) {
      return !t.isInRange(x);
    }) ? null : m;
  }
  return null;
};
function C2(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, c = e.alwaysShow, s = f2(), l = Zw(i), f = Jw(a), p = d2();
  if (!s || !p)
    return null;
  ht(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = Eh({
    x: l.scale,
    y: f.scale
  }), y = Te(t), v = Te(r), d = n && n.length === 2, g = $2(h, y, v, d, p, e.position, l.orientation, f.orientation, e);
  if (!g)
    return null;
  var b = A2(g, 2), O = b[0], w = O.x, m = O.y, x = b[1], _ = x.x, S = x.y, T = gt(e, "hidden") ? "url(#".concat(s, ")") : void 0, j = O0(O0({
    clipPath: T
  }, W(e, !0)), {}, {
    x1: w,
    y1: m,
    x2: _,
    y2: S
  });
  return /* @__PURE__ */ A.createElement(Q, {
    className: X("recharts-reference-line", u)
  }, j2(o, j), $e.renderCallByParent(e, QD({
    x1: w,
    y1: m,
    x2: _,
    y2: S
  })));
}
var kh = /* @__PURE__ */ (function(e) {
  function t() {
    return y2(this, t), b2(this, t, arguments);
  }
  return w2(t, e), g2(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(C2, this.props);
    }
  }]);
})(A.Component);
Ih(kh, "displayName", "ReferenceLine");
Ih(kh, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function dp() {
  return dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, dp.apply(this, arguments);
}
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function _0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function A0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _0(Object(r), !0).forEach(function(n) {
      Vo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function I2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, r_(n.key), n);
  }
}
function k2(e, t, r) {
  return t && I2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R2(e, t, r) {
  return t = uo(t), N2(e, t_() ? Reflect.construct(t, r || [], uo(e).constructor) : t.apply(e, r));
}
function N2(e, t) {
  if (t && (un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return D2(e);
}
function D2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function t_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (t_ = function() {
    return !!e;
  })();
}
function uo(e) {
  return uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uo(e);
}
function L2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vp(e, t);
}
function vp(e, t) {
  return vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, vp(e, t);
}
function Vo(e, t, r) {
  return t = r_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r_(e) {
  var t = q2(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function q2(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var B2 = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Eh({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return gt(t, "discard") && !o.isInRange(u) ? null : u;
}, Yo = /* @__PURE__ */ (function(e) {
  function t() {
    return M2(this, t), R2(this, t, arguments);
  }
  return L2(t, e), k2(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, c = n.clipPathId, s = Te(i), l = Te(a);
      if (ht(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !l)
        return null;
      var f = B2(this.props);
      if (!f)
        return null;
      var p = f.x, h = f.y, y = this.props, v = y.shape, d = y.className, g = gt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, b = A0(A0({
        clipPath: g
      }, W(this.props, !0)), {}, {
        cx: p,
        cy: h
      });
      return /* @__PURE__ */ A.createElement(Q, {
        className: X("recharts-reference-dot", d)
      }, t.renderDot(v, b), $e.renderCallByParent(this.props, {
        x: p - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(A.Component);
Vo(Yo, "displayName", "ReferenceDot");
Vo(Yo, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Vo(Yo, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : K(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Gi, dp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function yp() {
  return yp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yp.apply(this, arguments);
}
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function S0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? S0(Object(r), !0).forEach(function(n) {
      Xo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function z2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i_(n.key), n);
  }
}
function W2(e, t, r) {
  return t && z2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U2(e, t, r) {
  return t = co(t), K2(e, n_() ? Reflect.construct(t, r || [], co(e).constructor) : t.apply(e, r));
}
function K2(e, t) {
  if (t && (cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G2(e);
}
function G2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function n_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (n_ = function() {
    return !!e;
  })();
}
function co(e) {
  return co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, co(e);
}
function H2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mp(e, t);
}
function mp(e, t) {
  return mp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, mp(e, t);
}
function Xo(e, t, r) {
  return t = i_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i_(e) {
  var t = V2(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function V2(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Y2 = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, c = a.y1, s = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var p = Eh({
    x: l.scale,
    y: f.scale
  }), h = {
    x: t ? p.x.apply(o, {
      position: "start"
    }) : p.x.rangeMin,
    y: n ? p.y.apply(c, {
      position: "start"
    }) : p.y.rangeMin
  }, y = {
    x: r ? p.x.apply(u, {
      position: "end"
    }) : p.x.rangeMax,
    y: i ? p.y.apply(s, {
      position: "end"
    }) : p.y.rangeMax
  };
  return gt(a, "discard") && (!p.isInRange(h) || !p.isInRange(y)) ? null : Uw(h, y);
}, Zo = /* @__PURE__ */ (function(e) {
  function t() {
    return F2(this, t), U2(this, t, arguments);
  }
  return H2(t, e), W2(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, c = n.className, s = n.alwaysShow, l = n.clipPathId;
      ht(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Te(i), p = Te(a), h = Te(o), y = Te(u), v = this.props.shape;
      if (!f && !p && !h && !y && !v)
        return null;
      var d = Y2(f, p, h, y, this.props);
      if (!d && !v)
        return null;
      var g = gt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ A.createElement(Q, {
        className: X("recharts-reference-area", c)
      }, t.renderRect(v, P0(P0({
        clipPath: g
      }, W(this.props, !0)), d)), $e.renderCallByParent(this.props, d));
    }
  }]);
})(A.Component);
Xo(Zo, "displayName", "ReferenceArea");
Xo(Zo, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Xo(Zo, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : K(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Ph, yp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function a_(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function X2(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return t2(n, r);
}
function Z2(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function so(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function J2(e, t) {
  return a_(e, t + 1);
}
function Q2(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, c = 0, s = 1, l = o, f = function() {
    var y = n?.[c];
    if (y === void 0)
      return {
        v: a_(n, s)
      };
    var v = c, d, g = function() {
      return d === void 0 && (d = r(y, v)), d;
    }, b = y.coordinate, O = c === 0 || so(e, b, g, l, u);
    O || (c = 0, l = o, s += 1), O && (l = b + e * (g() / 2 + i), c += s);
  }, p; s <= a.length; )
    if (p = f(), p) return p.v;
  return [];
}
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
function T0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ie(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T0(Object(r), !0).forEach(function(n) {
      eL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eL(e, t, r) {
  return t = tL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tL(e) {
  var t = rL(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function rL(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nL(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, c = t.end, s = function(p) {
    var h = a[p], y, v = function() {
      return y === void 0 && (y = r(h, p)), y;
    };
    if (p === o - 1) {
      var d = e * (h.coordinate + e * v() / 2 - c);
      a[p] = h = Ie(Ie({}, h), {}, {
        tickCoord: d > 0 ? h.coordinate - d * e : h.coordinate
      });
    } else
      a[p] = h = Ie(Ie({}, h), {}, {
        tickCoord: h.coordinate
      });
    var g = so(e, h.tickCoord, v, u, c);
    g && (c = h.tickCoord - e * (v() / 2 + i), a[p] = Ie(Ie({}, h), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    s(l);
  return a;
}
function iL(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, c = t.start, s = t.end;
  if (a) {
    var l = n[u - 1], f = r(l, u - 1), p = e * (l.coordinate + e * f / 2 - s);
    o[u - 1] = l = Ie(Ie({}, l), {}, {
      tickCoord: p > 0 ? l.coordinate - p * e : l.coordinate
    });
    var h = so(e, l.tickCoord, function() {
      return f;
    }, c, s);
    h && (s = l.tickCoord - e * (f / 2 + i), o[u - 1] = Ie(Ie({}, l), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? u - 1 : u, v = function(b) {
    var O = o[b], w, m = function() {
      return w === void 0 && (w = r(O, b)), w;
    };
    if (b === 0) {
      var x = e * (O.coordinate - e * m() / 2 - c);
      o[b] = O = Ie(Ie({}, O), {}, {
        tickCoord: x < 0 ? O.coordinate - x * e : O.coordinate
      });
    } else
      o[b] = O = Ie(Ie({}, O), {}, {
        tickCoord: O.coordinate
      });
    var _ = so(e, O.tickCoord, m, c, s);
    _ && (c = O.tickCoord + e * (m() / 2 + i), o[b] = Ie(Ie({}, O), {}, {
      isShow: !0
    }));
  }, d = 0; d < y; d++)
    v(d);
  return o;
}
function Rh(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, u = e.orientation, c = e.interval, s = e.tickFormatter, l = e.unit, f = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (D(c) || Dt.isSsr)
    return J2(i, typeof c == "number" && D(c) ? c : 0);
  var p = [], h = u === "top" || u === "bottom" ? "width" : "height", y = l && h === "width" ? zn(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, v = function(O, w) {
    var m = K(s) ? s(O.value, w) : O.value;
    return h === "width" ? X2(zn(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : zn(m, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, d = i.length >= 2 ? Ne(i[1].coordinate - i[0].coordinate) : 1, g = Z2(a, d, h);
  return c === "equidistantPreserveStart" ? Q2(d, g, v, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? p = iL(d, g, v, i, o, c === "preserveStartEnd") : p = nL(d, g, v, i, o), p.filter(function(b) {
    return b.isShow;
  }));
}
var aL = ["viewBox"], oL = ["viewBox"], uL = ["ticks"];
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
function E0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? E0(Object(r), !0).forEach(function(n) {
      Nh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rf(e, t) {
  if (e == null) return {};
  var r = cL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function sL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, u_(n.key), n);
  }
}
function lL(e, t, r) {
  return t && j0(e.prototype, t), r && j0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fL(e, t, r) {
  return t = lo(t), pL(e, o_() ? Reflect.construct(t, r || [], lo(e).constructor) : t.apply(e, r));
}
function pL(e, t) {
  if (t && (sn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hL(e);
}
function hL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function o_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (o_ = function() {
    return !!e;
  })();
}
function lo(e) {
  return lo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lo(e);
}
function dL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && gp(e, t);
}
function gp(e, t) {
  return gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, gp(e, t);
}
function Nh(e, t, r) {
  return t = u_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u_(e) {
  var t = vL(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function vL(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Tn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return sL(this, t), n = fL(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return dL(t, e), lL(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = rf(n, aL), u = this.props, c = u.viewBox, s = rf(u, oL);
      return !qr(a, c) || !qr(o, s) || !qr(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, u = i.width, c = i.height, s = i.orientation, l = i.tickSize, f = i.mirror, p = i.tickMargin, h, y, v, d, g, b, O = f ? -1 : 1, w = n.tickSize || l, m = D(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (s) {
        case "top":
          h = y = n.coordinate, d = o + +!f * c, v = d - O * w, b = v - O * p, g = m;
          break;
        case "left":
          v = d = n.coordinate, y = a + +!f * u, h = y - O * w, g = h - O * p, b = m;
          break;
        case "right":
          v = d = n.coordinate, y = a + +f * u, h = y + O * w, g = h + O * p, b = m;
          break;
        default:
          h = y = n.coordinate, d = o + +f * c, v = d + O * w, b = v + O * p, g = m;
          break;
      }
      return {
        line: {
          x1: h,
          y1: v,
          x2: y,
          y2: d
        },
        tick: {
          x: g,
          y: b
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.orientation, s = n.mirror, l = n.axisLine, f = Ae(Ae(Ae({}, W(this.props, !1)), W(l, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var p = +(c === "top" && !s || c === "bottom" && s);
        f = Ae(Ae({}, f), {}, {
          x1: i,
          y1: a + p * u,
          x2: i + o,
          y2: a + p * u
        });
      } else {
        var h = +(c === "left" && !s || c === "right" && s);
        f = Ae(Ae({}, f), {}, {
          x1: i + h * o,
          y1: a,
          x2: i + h * o,
          y2: a + u
        });
      }
      return /* @__PURE__ */ A.createElement("line", Dr({}, f, {
        className: X("recharts-cartesian-axis-line", Xe(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, u = this.props, c = u.tickLine, s = u.stroke, l = u.tick, f = u.tickFormatter, p = u.unit, h = Rh(Ae(Ae({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), d = W(this.props, !1), g = W(l, !1), b = Ae(Ae({}, d), {}, {
          fill: "none"
        }, W(c, !1)), O = h.map(function(w, m) {
          var x = o.getTickLineCoord(w), _ = x.line, S = x.tick, T = Ae(Ae(Ae(Ae({
            textAnchor: y,
            verticalAnchor: v
          }, d), {}, {
            stroke: "none",
            fill: s
          }, g), S), {}, {
            index: m,
            payload: w,
            visibleTicksCount: h.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ A.createElement(Q, Dr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(w.value, "-").concat(w.coordinate, "-").concat(w.tickCoord)
          }, Gt(o.props, w, m)), c && /* @__PURE__ */ A.createElement("line", Dr({}, b, _, {
            className: X("recharts-cartesian-axis-tick-line", Xe(c, "className"))
          })), l && t.renderTickItem(l, T, "".concat(K(f) ? f(w.value, m) : w.value).concat(p || "")));
        });
        return /* @__PURE__ */ A.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, O);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, c = i.ticksGenerator, s = i.className, l = i.hide;
      if (l)
        return null;
      var f = this.props, p = f.ticks, h = rf(f, uL), y = p;
      return K(c) && (y = p && p.length > 0 ? c(this.props) : c(h)), o <= 0 || u <= 0 || !y || !y.length ? null : /* @__PURE__ */ A.createElement(Q, {
        className: X("recharts-cartesian-axis", s),
        ref: function(d) {
          n.layerReference = d;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), $e.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o, u = X(i.className, "recharts-cartesian-axis-tick-value");
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, Ae(Ae({}, i), {}, {
        className: u
      })) : K(n) ? o = n(Ae(Ae({}, i), {}, {
        className: u
      })) : o = /* @__PURE__ */ A.createElement(mr, Dr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
})(Z0);
Nh(Tn, "displayName", "CartesianAxis");
Nh(Tn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var yL = ["x1", "y1", "x2", "y2", "key"], mL = ["offset"];
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function $0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $0(Object(r), !0).forEach(function(n) {
      gL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gL(e, t, r) {
  return t = bL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bL(e) {
  var t = xL(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function xL(e, t) {
  if (xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fr() {
  return fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fr.apply(this, arguments);
}
function C0(e, t) {
  if (e == null) return {};
  var r = OL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function OL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var wL = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, u = t.height, c = t.ry;
  return /* @__PURE__ */ A.createElement("rect", {
    x: i,
    y: a,
    ry: c,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function c_(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (K(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, u = t.key, c = C0(t, yL), s = W(c, !1);
    s.offset;
    var l = C0(s, mL);
    r = /* @__PURE__ */ A.createElement("line", fr({}, l, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function _L(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, c) {
    var s = ke(ke({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(c),
      index: c
    });
    return c_(i, s);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function AL(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, c) {
    var s = ke(ke({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return c_(i, s);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function SL(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, u = e.horizontalPoints, c = e.horizontal, s = c === void 0 ? !0 : c;
  if (!s || !t || !t.length)
    return null;
  var l = u.map(function(p) {
    return Math.round(p + i - i);
  }).sort(function(p, h) {
    return p - h;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(p, h) {
    var y = !l[h + 1], v = y ? i + o - p : l[h + 1] - p;
    if (v <= 0)
      return null;
    var d = h % t.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(h),
      y: p,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[d],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function PL(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, u = e.width, c = e.height, s = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = s.map(function(p) {
    return Math.round(p + a - a);
  }).sort(function(p, h) {
    return p - h;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(p, h) {
    var y = !l[h + 1], v = y ? a + u - p : l[h + 1] - p;
    if (v <= 0)
      return null;
    var d = h % n.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(h),
      x: p,
      y: o,
      width: v,
      height: c,
      stroke: "none",
      fill: n[d],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var TL = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return iw(Rh(ke(ke(ke({}, Tn.defaultProps), n), {}, {
    ticks: Tt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, EL = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return iw(Rh(ke(ke(ke({}, Tn.defaultProps), n), {}, {
    ticks: Tt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Mr = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Jo(e) {
  var t, r, n, i, a, o, u = Ch(), c = Mh(), s = v2(), l = ke(ke({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Mr.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Mr.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Mr.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Mr.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Mr.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Mr.verticalFill,
    x: D(e.x) ? e.x : s.left,
    y: D(e.y) ? e.y : s.top,
    width: D(e.width) ? e.width : s.width,
    height: D(e.height) ? e.height : s.height
  }), f = l.x, p = l.y, h = l.width, y = l.height, v = l.syncWithTicks, d = l.horizontalValues, g = l.verticalValues, b = p2(), O = h2();
  if (!D(h) || h <= 0 || !D(y) || y <= 0 || !D(f) || f !== +f || !D(p) || p !== +p)
    return null;
  var w = l.verticalCoordinatesGenerator || TL, m = l.horizontalCoordinatesGenerator || EL, x = l.horizontalPoints, _ = l.verticalPoints;
  if ((!x || !x.length) && K(m)) {
    var S = d && d.length, T = m({
      yAxis: O ? ke(ke({}, O), {}, {
        ticks: S ? d : O.ticks
      }) : void 0,
      width: u,
      height: c,
      offset: s
    }, S ? !0 : v);
    ht(Array.isArray(T), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(xr(T), "]")), Array.isArray(T) && (x = T);
  }
  if ((!_ || !_.length) && K(w)) {
    var j = g && g.length, P = w({
      xAxis: b ? ke(ke({}, b), {}, {
        ticks: j ? g : b.ticks
      }) : void 0,
      width: u,
      height: c,
      offset: s
    }, j ? !0 : v);
    ht(Array.isArray(P), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(xr(P), "]")), Array.isArray(P) && (_ = P);
  }
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ A.createElement(wL, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ A.createElement(_L, fr({}, l, {
    offset: s,
    horizontalPoints: x,
    xAxis: b,
    yAxis: O
  })), /* @__PURE__ */ A.createElement(AL, fr({}, l, {
    offset: s,
    verticalPoints: _,
    xAxis: b,
    yAxis: O
  })), /* @__PURE__ */ A.createElement(SL, fr({}, l, {
    horizontalPoints: x
  })), /* @__PURE__ */ A.createElement(PL, fr({}, l, {
    verticalPoints: _
  })));
}
Jo.displayName = "CartesianGrid";
var jL = ["type", "layout", "connectNulls", "ref"], $L = ["key"];
function ln(e) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function M0(e, t) {
  if (e == null) return {};
  var r = CL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vn() {
  return Vn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vn.apply(this, arguments);
}
function I0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? I0(Object(r), !0).forEach(function(n) {
      lt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ir(e) {
  return RL(e) || kL(e) || IL(e) || ML();
}
function ML() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IL(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function kL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RL(e) {
  if (Array.isArray(e)) return bp(e);
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function NL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l_(n.key), n);
  }
}
function DL(e, t, r) {
  return t && k0(e.prototype, t), r && k0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LL(e, t, r) {
  return t = fo(t), qL(e, s_() ? Reflect.construct(t, r || [], fo(e).constructor) : t.apply(e, r));
}
function qL(e, t) {
  if (t && (ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BL(e);
}
function BL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function s_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (s_ = function() {
    return !!e;
  })();
}
function fo(e) {
  return fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fo(e);
}
function FL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xp(e, t);
}
function xp(e, t) {
  return xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, xp(e, t);
}
function lt(e, t, r) {
  return t = l_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l_(e) {
  var t = zL(e, "string");
  return ln(t) == "symbol" ? t : t + "";
}
function zL(e, t) {
  if (ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    NL(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = LL(this, t, [].concat(i)), lt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), lt(r, "generateSimpleStrokeDasharray", function(o, u) {
      return "".concat(u, "px ").concat(o - u, "px");
    }), lt(r, "getStrokeDasharray", function(o, u, c) {
      var s = c.reduce(function(g, b) {
        return g + b;
      });
      if (!s)
        return r.generateSimpleStrokeDasharray(u, o);
      for (var l = Math.floor(o / s), f = o % s, p = u - o, h = [], y = 0, v = 0; y < c.length; v += c[y], ++y)
        if (v + c[y] > f) {
          h = [].concat(Ir(c.slice(0, y)), [f - v]);
          break;
        }
      var d = h.length % 2 === 0 ? [0, p] : [p];
      return [].concat(Ir(t.repeat(c, l)), Ir(h), d).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), lt(r, "id", _r("recharts-line-")), lt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), lt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), lt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return FL(t, e), DL(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.points, u = a.xAxis, c = a.yAxis, s = a.layout, l = a.children, f = qe(l, An);
      if (!f)
        return null;
      var p = function(v, d) {
        return {
          x: v.x,
          y: v.y,
          value: v.value,
          errorVal: he(v.payload, d)
        };
      }, h = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(Q, h, f.map(function(y) {
        return /* @__PURE__ */ A.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: c,
          layout: s,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var u = this.props, c = u.dot, s = u.points, l = u.dataKey, f = W(this.props, !1), p = W(c, !0), h = s.map(function(v, d) {
        var g = Ge(Ge(Ge({
          key: "dot-".concat(d),
          r: 3
        }, f), p), {}, {
          index: d,
          cx: v.x,
          cy: v.y,
          value: v.value,
          dataKey: l,
          payload: v.payload,
          points: s
        });
        return t.renderDotItem(c, g);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(Q, Vn({
        className: "recharts-line-dots",
        key: "dots"
      }, y), h);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var u = this.props, c = u.type, s = u.layout, l = u.connectNulls;
      u.ref;
      var f = M0(u, jL), p = Ge(Ge(Ge({}, W(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: c,
        layout: s,
        connectNulls: l
      });
      return /* @__PURE__ */ A.createElement(xi, Vn({}, p, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, u = o.points, c = o.strokeDasharray, s = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, p = o.animationEasing, h = o.animationId, y = o.animateNewValues, v = o.width, d = o.height, g = this.state, b = g.prevPoints, O = g.totalLength;
      return /* @__PURE__ */ A.createElement(ot, {
        begin: l,
        duration: f,
        isActive: s,
        easing: p,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(w) {
        var m = w.t;
        if (b) {
          var x = b.length / u.length, _ = u.map(function(E, $) {
            var M = Math.floor($ * x);
            if (b[M]) {
              var C = b[M], k = me(C.x, E.x), R = me(C.y, E.y);
              return Ge(Ge({}, E), {}, {
                x: k(m),
                y: R(m)
              });
            }
            if (y) {
              var L = me(v * 2, E.x), q = me(d / 2, E.y);
              return Ge(Ge({}, E), {}, {
                x: L(m),
                y: q(m)
              });
            }
            return Ge(Ge({}, E), {}, {
              x: E.x,
              y: E.y
            });
          });
          return a.renderCurveStatically(_, n, i);
        }
        var S = me(0, O), T = S(m), j;
        if (c) {
          var P = "".concat(c).split(/[,\s]+/gim).map(function(E) {
            return parseFloat(E);
          });
          j = a.getStrokeDasharray(T, O, P);
        } else
          j = a.generateSimpleStrokeDasharray(O, T);
        return a.renderCurveStatically(u, n, i, {
          strokeDasharray: j
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, u = a.isAnimationActive, c = this.state, s = c.prevPoints, l = c.totalLength;
      return u && o && o.length && (!s && l > 0 || !Pr(s, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, u = i.points, c = i.className, s = i.xAxis, l = i.yAxis, f = i.top, p = i.left, h = i.width, y = i.height, v = i.isAnimationActive, d = i.id;
      if (a || !u || !u.length)
        return null;
      var g = this.state.isAnimationFinished, b = u.length === 1, O = X("recharts-line", c), w = s && s.allowDataOverflow, m = l && l.allowDataOverflow, x = w || m, _ = G(d) ? this.id : d, S = (n = W(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, T = S.r, j = T === void 0 ? 3 : T, P = S.strokeWidth, E = P === void 0 ? 2 : P, $ = Y1(o) ? o : {}, M = $.clipDot, C = M === void 0 ? !0 : M, k = j * 2 + E;
      return /* @__PURE__ */ A.createElement(Q, {
        className: O
      }, w || m ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(_)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? p : p - h / 2,
        y: m ? f : f - y / 2,
        width: w ? h : h * 2,
        height: m ? y : y * 2
      })), !C && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(_)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: p - k / 2,
        y: f - k / 2,
        width: h + k,
        height: y + k
      }))) : null, !b && this.renderCurve(x, _), this.renderErrorBar(x, _), (b || o) && this.renderDots(x, C, _), (!v || g) && dt.renderCallByParent(this.props, u));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(Ir(n), [0]) : n, o = [], u = 0; u < i; ++u)
        o = [].concat(Ir(o), Ir(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ A.isValidElement(n))
        a = /* @__PURE__ */ A.cloneElement(n, i);
      else if (K(n))
        a = n(i);
      else {
        var o = i.key, u = M0(i, $L), c = X("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ A.createElement(Gi, Vn({
          key: o
        }, u, {
          className: c
        }));
      }
      return a;
    }
  }]);
})(Ze);
lt(Vi, "displayName", "Line");
lt(Vi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Dt.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
lt(Vi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, u = e.bandSize, c = e.displayedData, s = e.offset, l = t.layout, f = c.map(function(p, h) {
    var y = he(p, o);
    return l === "horizontal" ? {
      x: La({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: p,
        index: h
      }),
      y: G(y) ? null : n.scale(y),
      value: y,
      payload: p
    } : {
      x: G(y) ? null : r.scale(y),
      y: La({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: p,
        index: h
      }),
      value: y,
      payload: p
    };
  });
  return Ge({
    points: f,
    layout: l
  }, s);
});
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function WL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UL(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, h_(n.key), n);
  }
}
function KL(e, t, r) {
  return t && UL(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function GL(e, t, r) {
  return t = po(t), HL(e, f_() ? Reflect.construct(t, r || [], po(e).constructor) : t.apply(e, r));
}
function HL(e, t) {
  if (t && (fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VL(e);
}
function VL(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (f_ = function() {
    return !!e;
  })();
}
function po(e) {
  return po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, po(e);
}
function YL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Op(e, t);
}
function Op(e, t) {
  return Op = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Op(e, t);
}
function p_(e, t, r) {
  return t = h_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h_(e) {
  var t = XL(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function XL(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Qo = /* @__PURE__ */ (function(e) {
  function t() {
    return WL(this, t), GL(this, t, arguments);
  }
  return YL(t, e), KL(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(it.Component);
p_(Qo, "displayName", "ZAxis");
p_(Qo, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ZL = ["option", "isActive"];
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
function JL(e, t) {
  if (e == null) return {};
  var r = QL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function QL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function eq(e) {
  var t = e.option, r = e.isActive, n = JL(e, ZL);
  return typeof t == "string" ? /* @__PURE__ */ it.createElement(Za, Yn({
    option: /* @__PURE__ */ it.createElement(Eo, Yn({
      type: t
    }, n)),
    isActive: r,
    shapeType: "symbols"
  }, n)) : /* @__PURE__ */ it.createElement(Za, Yn({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, n));
}
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xn.apply(this, arguments);
}
function R0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R0(Object(r), !0).forEach(function(n) {
      Ut(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function N0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v_(n.key), n);
  }
}
function rq(e, t, r) {
  return t && N0(e.prototype, t), r && N0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nq(e, t, r) {
  return t = ho(t), iq(e, d_() ? Reflect.construct(t, r || [], ho(e).constructor) : t.apply(e, r));
}
function iq(e, t) {
  if (t && (pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aq(e);
}
function aq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (d_ = function() {
    return !!e;
  })();
}
function ho(e) {
  return ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ho(e);
}
function oq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && wp(e, t);
}
function wp(e, t) {
  return wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, wp(e, t);
}
function Ut(e, t, r) {
  return t = v_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v_(e) {
  var t = uq(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function uq(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    tq(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = nq(this, t, [].concat(i)), Ut(r, "state", {
      isAnimationFinished: !1
    }), Ut(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), Ut(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), Ut(r, "id", _r("recharts-scatter-")), r;
  }
  return oq(t, e), rq(t, [{
    key: "renderSymbolsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.activeShape, c = a.activeIndex, s = W(this.props, !1);
      return n.map(function(l, f) {
        var p = c === f, h = p ? u : o, y = tt(tt({}, s), l);
        return /* @__PURE__ */ A.createElement(Q, Xn({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(l?.cx, "-").concat(l?.cy, "-").concat(l?.size, "-").concat(f)
        }, Gt(i.props, l, f), {
          role: "img"
        }), /* @__PURE__ */ A.createElement(eq, Xn({
          option: h,
          isActive: p,
          key: "symbol-".concat(f)
        }, y)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(ot, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var h = p.t, y = a.map(function(v, d) {
          var g = f && f[d];
          if (g) {
            var b = me(g.cx, v.cx), O = me(g.cy, v.cy), w = me(g.size, v.size);
            return tt(tt({}, v), {}, {
              cx: b(h),
              cy: O(h),
              size: w(h)
            });
          }
          var m = me(0, v.size);
          return tt(tt({}, v), {}, {
            size: m(h)
          });
        });
        return /* @__PURE__ */ A.createElement(Q, null, n.renderSymbolsStatically(y));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var n = this.props, i = n.points, a = n.isAnimationActive, o = this.state.prevPoints;
      return a && i && i.length && (!o || !Pr(o, i)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(i);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var i = this.props, a = i.points, o = i.xAxis, u = i.yAxis, c = i.children, s = qe(c, An);
      return s ? s.map(function(l, f) {
        var p = l.props, h = p.direction, y = p.dataKey;
        return /* @__PURE__ */ A.cloneElement(l, {
          key: "".concat(h, "-").concat(y, "-").concat(a[f]),
          data: a,
          xAxis: o,
          yAxis: u,
          layout: h === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(d, g) {
            return {
              x: d.cx,
              y: d.cy,
              value: h === "x" ? +d.node.x : +d.node.y,
              errorVal: he(d, g)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var n = this.props, i = n.points, a = n.line, o = n.lineType, u = n.lineJointType, c = W(this.props, !1), s = W(a, !1), l, f;
      if (o === "joint")
        l = i.map(function(O) {
          return {
            x: O.cx,
            y: O.cy
          };
        });
      else if (o === "fitting") {
        var p = q1(i), h = p.xmin, y = p.xmax, v = p.a, d = p.b, g = function(w) {
          return v * w + d;
        };
        l = [{
          x: h,
          y: g(h)
        }, {
          x: y,
          y: g(y)
        }];
      }
      var b = tt(tt(tt({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, s), {}, {
        points: l
      });
      return /* @__PURE__ */ A.isValidElement(a) ? f = /* @__PURE__ */ A.cloneElement(a, b) : K(a) ? f = a(b) : f = /* @__PURE__ */ A.createElement(xi, Xn({}, b, {
        type: u
      })), /* @__PURE__ */ A.createElement(Q, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.points, o = n.line, u = n.className, c = n.xAxis, s = n.yAxis, l = n.left, f = n.top, p = n.width, h = n.height, y = n.id, v = n.isAnimationActive;
      if (i || !a || !a.length)
        return null;
      var d = this.state.isAnimationFinished, g = X("recharts-scatter", u), b = c && c.allowDataOverflow, O = s && s.allowDataOverflow, w = b || O, m = G(y) ? this.id : y;
      return /* @__PURE__ */ A.createElement(Q, {
        className: g,
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, b || O ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: b ? l : l - p / 2,
        y: O ? f : f - h / 2,
        width: b ? p : p * 2,
        height: O ? h : h * 2
      }))) : null, o && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ A.createElement(Q, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!v || d) && dt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }]);
})(Ze);
Ut(Yi, "displayName", "Scatter");
Ut(Yi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Dt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
Ut(Yi, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, n = e.zAxis, i = e.item, a = e.displayedData, o = e.xAxisTicks, u = e.yAxisTicks, c = e.offset, s = i.props.tooltipType, l = qe(i.props.children, xn), f = G(t.dataKey) ? i.props.dataKey : t.dataKey, p = G(r.dataKey) ? i.props.dataKey : r.dataKey, h = n && n.dataKey, y = n ? n.range : Qo.defaultProps.range, v = y && y[0], d = t.scale.bandwidth ? t.scale.bandwidth() : 0, g = r.scale.bandwidth ? r.scale.bandwidth() : 0, b = a.map(function(O, w) {
    var m = he(O, f), x = he(O, p), _ = !G(h) && he(O, h) || "-", S = [{
      name: G(t.dataKey) ? i.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: m,
      payload: O,
      dataKey: f,
      type: s
    }, {
      name: G(r.dataKey) ? i.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: x,
      payload: O,
      dataKey: p,
      type: s
    }];
    _ !== "-" && S.push({
      name: n.name || n.dataKey,
      unit: n.unit || "",
      value: _,
      payload: O,
      dataKey: h,
      type: s
    });
    var T = La({
      axis: t,
      ticks: o,
      bandSize: d,
      entry: O,
      index: w,
      dataKey: f
    }), j = La({
      axis: r,
      ticks: u,
      bandSize: g,
      entry: O,
      index: w,
      dataKey: p
    }), P = _ !== "-" ? n.scale(_) : v, E = Math.sqrt(Math.max(P, 0) / Math.PI);
    return tt(tt({}, O), {}, {
      cx: T,
      cy: j,
      x: T - E,
      y: j - E,
      xAxis: t,
      yAxis: r,
      zAxis: n,
      width: 2 * E,
      height: 2 * E,
      size: P,
      node: {
        x: m,
        y: x,
        z: _
      },
      tooltipPayload: S,
      tooltipPosition: {
        x: T,
        y: j
      },
      payload: O
    }, l && l[w] && l[w].props);
  });
  return tt({
    points: b
  }, c);
});
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function cq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, g_(n.key), n);
  }
}
function lq(e, t, r) {
  return t && sq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fq(e, t, r) {
  return t = vo(t), pq(e, y_() ? Reflect.construct(t, r || [], vo(e).constructor) : t.apply(e, r));
}
function pq(e, t) {
  if (t && (hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return hq(e);
}
function hq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y_ = function() {
    return !!e;
  })();
}
function vo(e) {
  return vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vo(e);
}
function dq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _p(e, t);
}
function _p(e, t) {
  return _p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _p(e, t);
}
function m_(e, t, r) {
  return t = g_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g_(e) {
  var t = vq(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function vq(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Ap() {
  return Ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ap.apply(this, arguments);
}
function yq(e) {
  var t = e.xAxisId, r = Ch(), n = Mh(), i = Zw(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(Tn, Ap({}, i, {
      className: X("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Tt(o, !0);
      }
    }))
  );
}
var Zt = /* @__PURE__ */ (function(e) {
  function t() {
    return cq(this, t), fq(this, t, arguments);
  }
  return dq(t, e), lq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(yq, this.props);
    }
  }]);
})(it.Component);
m_(Zt, "displayName", "XAxis");
m_(Zt, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function mq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, O_(n.key), n);
  }
}
function bq(e, t, r) {
  return t && gq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xq(e, t, r) {
  return t = yo(t), Oq(e, b_() ? Reflect.construct(t, r || [], yo(e).constructor) : t.apply(e, r));
}
function Oq(e, t) {
  if (t && (dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wq(e);
}
function wq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (b_ = function() {
    return !!e;
  })();
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yo(e);
}
function _q(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Sp(e, t);
}
function Sp(e, t) {
  return Sp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Sp(e, t);
}
function x_(e, t, r) {
  return t = O_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O_(e) {
  var t = Aq(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function Aq(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Pp() {
  return Pp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pp.apply(this, arguments);
}
var Sq = function(t) {
  var r = t.yAxisId, n = Ch(), i = Mh(), a = Jw(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ it.createElement(Tn, Pp({}, a, {
      className: X("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return Tt(u, !0);
      }
    }))
  );
}, Jt = /* @__PURE__ */ (function(e) {
  function t() {
    return mq(this, t), xq(this, t, arguments);
  }
  return _q(t, e), bq(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ it.createElement(Sq, this.props);
    }
  }]);
})(it.Component);
x_(Jt, "displayName", "YAxis");
x_(Jt, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function D0(e) {
  return jq(e) || Eq(e) || Tq(e) || Pq();
}
function Pq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tq(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tp(e, t);
  }
}
function Eq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jq(e) {
  if (Array.isArray(e)) return Tp(e);
}
function Tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Ep = function(t, r, n, i, a) {
  var o = qe(t, kh), u = qe(t, Yo), c = [].concat(D0(o), D0(u)), s = qe(t, Zo), l = "".concat(i, "Id"), f = i[0], p = r;
  if (c.length && (p = c.reduce(function(v, d) {
    if (d.props[l] === n && gt(d.props, "extendDomain") && D(d.props[f])) {
      var g = d.props[f];
      return [Math.min(v[0], g), Math.max(v[1], g)];
    }
    return v;
  }, p)), s.length) {
    var h = "".concat(f, "1"), y = "".concat(f, "2");
    p = s.reduce(function(v, d) {
      if (d.props[l] === n && gt(d.props, "extendDomain") && D(d.props[h]) && D(d.props[y])) {
        var g = d.props[h], b = d.props[y];
        return [Math.min(v[0], g, b), Math.max(v[1], g, b)];
      }
      return v;
    }, p);
  }
  return a && a.length && (p = a.reduce(function(v, d) {
    return D(d) ? [Math.min(v[0], d), Math.max(v[1], d)] : v;
  }, p)), p;
}, nf = { exports: {} }, L0;
function $q() {
  return L0 || (L0 = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(c, s, l) {
      this.fn = c, this.context = s, this.once = l || !1;
    }
    function a(c, s, l, f, p) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(l, f || c, p), y = r ? r + s : s;
      return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], h] : c._events[y].push(h) : (c._events[y] = h, c._eventsCount++), c;
    }
    function o(c, s) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var s = [], l, f;
      if (this._eventsCount === 0) return s;
      for (f in l = this._events)
        t.call(l, f) && s.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(l)) : s;
    }, u.prototype.listeners = function(s) {
      var l = r ? r + s : s, f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var p = 0, h = f.length, y = new Array(h); p < h; p++)
        y[p] = f[p].fn;
      return y;
    }, u.prototype.listenerCount = function(s) {
      var l = r ? r + s : s, f = this._events[l];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(s, l, f, p, h, y) {
      var v = r ? r + s : s;
      if (!this._events[v]) return !1;
      var d = this._events[v], g = arguments.length, b, O;
      if (d.fn) {
        switch (d.once && this.removeListener(s, d.fn, void 0, !0), g) {
          case 1:
            return d.fn.call(d.context), !0;
          case 2:
            return d.fn.call(d.context, l), !0;
          case 3:
            return d.fn.call(d.context, l, f), !0;
          case 4:
            return d.fn.call(d.context, l, f, p), !0;
          case 5:
            return d.fn.call(d.context, l, f, p, h), !0;
          case 6:
            return d.fn.call(d.context, l, f, p, h, y), !0;
        }
        for (O = 1, b = new Array(g - 1); O < g; O++)
          b[O - 1] = arguments[O];
        d.fn.apply(d.context, b);
      } else {
        var w = d.length, m;
        for (O = 0; O < w; O++)
          switch (d[O].once && this.removeListener(s, d[O].fn, void 0, !0), g) {
            case 1:
              d[O].fn.call(d[O].context);
              break;
            case 2:
              d[O].fn.call(d[O].context, l);
              break;
            case 3:
              d[O].fn.call(d[O].context, l, f);
              break;
            case 4:
              d[O].fn.call(d[O].context, l, f, p);
              break;
            default:
              if (!b) for (m = 1, b = new Array(g - 1); m < g; m++)
                b[m - 1] = arguments[m];
              d[O].fn.apply(d[O].context, b);
          }
      }
      return !0;
    }, u.prototype.on = function(s, l, f) {
      return a(this, s, l, f, !1);
    }, u.prototype.once = function(s, l, f) {
      return a(this, s, l, f, !0);
    }, u.prototype.removeListener = function(s, l, f, p) {
      var h = r ? r + s : s;
      if (!this._events[h]) return this;
      if (!l)
        return o(this, h), this;
      var y = this._events[h];
      if (y.fn)
        y.fn === l && (!p || y.once) && (!f || y.context === f) && o(this, h);
      else {
        for (var v = 0, d = [], g = y.length; v < g; v++)
          (y[v].fn !== l || p && !y[v].once || f && y[v].context !== f) && d.push(y[v]);
        d.length ? this._events[h] = d.length === 1 ? d[0] : d : o(this, h);
      }
      return this;
    }, u.prototype.removeAllListeners = function(s) {
      var l;
      return s ? (l = r ? r + s : s, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(nf)), nf.exports;
}
var Cq = $q();
const Mq = /* @__PURE__ */ oe(Cq);
var af = new Mq(), of = "recharts.syncMouseEvents";
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
function Iq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w_(n.key), n);
  }
}
function Rq(e, t, r) {
  return t && kq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function uf(e, t, r) {
  return t = w_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w_(e) {
  var t = Nq(e, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function Nq(e, t) {
  if (ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Dq = /* @__PURE__ */ (function() {
  function e() {
    Iq(this, e), uf(this, "activeIndex", 0), uf(this, "coordinateList", []), uf(this, "layout", "horizontal");
  }
  return Rq(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, c = r.layout, s = c === void 0 ? null : c, l = r.offset, f = l === void 0 ? null : l, p = r.mouseHandlerCallback, h = p === void 0 ? null : p;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = s ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, c = this.coordinateList[this.activeIndex].coordinate, s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = a + c + s, p = o + this.offset.top + u / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: p
        });
      }
    }
  }]);
})();
function Lq(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], i = e?.[1];
    if (n && i && D(n) && D(i))
      return !0;
  }
  return !1;
}
function qq(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function __(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = ne(t, r, n, i), u = ne(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function Bq(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, c = t.cy, s = t.innerRadius, l = t.outerRadius, f = t.angle, p = ne(u, c, s, f), h = ne(u, c, l, f);
      n = p.x, i = p.y, a = h.x, o = h.y;
    } else
      return __(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function q0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? q0(Object(r), !0).forEach(function(n) {
      Fq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fq(e, t, r) {
  return t = zq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zq(e) {
  var t = Wq(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function Wq(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Uq(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, c = e.offset, s = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, p = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || p !== "ScatterChart" && i !== "axis")
    return null;
  var y, v = xi;
  if (p === "ScatterChart")
    y = o, v = wR;
  else if (p === "BarChart")
    y = qq(f, o, c, l), v = Ph;
  else if (f === "radial") {
    var d = __(o), g = d.cx, b = d.cy, O = d.radius, w = d.startAngle, m = d.endAngle;
    y = {
      cx: g,
      cy: b,
      startAngle: w,
      endAngle: m,
      innerRadius: O,
      outerRadius: O
    }, v = mw;
  } else
    y = {
      points: Bq(f, o, c)
    }, v = xi;
  var x = sa(sa(sa(sa({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), y), W(h, !1)), {}, {
    payload: u,
    payloadIndex: s,
    className: X("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ pt(h) ? /* @__PURE__ */ Pe(h, x) : /* @__PURE__ */ Zn(v, x);
}
var Kq = ["item"], Gq = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function Lr() {
  return Lr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lr.apply(this, arguments);
}
function B0(e, t) {
  return Yq(e) || Vq(e, t) || S_(e, t) || Hq();
}
function Hq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function Yq(e) {
  if (Array.isArray(e)) return e;
}
function F0(e, t) {
  if (e == null) return {};
  var r = Xq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Xq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Zq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, P_(n.key), n);
  }
}
function Qq(e, t, r) {
  return t && Jq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eB(e, t, r) {
  return t = mo(t), tB(e, A_() ? Reflect.construct(t, r || [], mo(e).constructor) : t.apply(e, r));
}
function tB(e, t) {
  if (t && (vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rB(e);
}
function rB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function A_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (A_ = function() {
    return !!e;
  })();
}
function mo(e) {
  return mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mo(e);
}
function nB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jp(e, t);
}
function jp(e, t) {
  return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jp(e, t);
}
function yn(e) {
  return oB(e) || aB(e) || S_(e) || iB();
}
function iB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function S_(e, t) {
  if (e) {
    if (typeof e == "string") return $p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $p(e, t);
  }
}
function aB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function oB(e) {
  if (Array.isArray(e)) return $p(e);
}
function $p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function z0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? z0(Object(r), !0).forEach(function(n) {
      H(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function H(e, t, r) {
  return t = P_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P_(e) {
  var t = uB(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function uB(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var cB = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, sB = {
  width: "100%",
  height: "100%"
}, T_ = {
  x: 0,
  y: 0
};
function la(e) {
  return e;
}
var lB = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, fB = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return I(I(I({}, i), ne(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var c = a.coordinate, s = i.angle;
    return I(I(I({}, i), ne(i.cx, i.cy, c, s)), {}, {
      angle: s,
      radius: c
    });
  }
  return T_;
}, eu = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, c) {
    var s = c.props.data;
    return s && s.length ? [].concat(yn(u), yn(s)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && D(i) && D(a) ? t.slice(i, a + 1) : [];
};
function E_(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Cp = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = eu(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(c, s) {
    var l, f = (l = s.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var p;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = f === void 0 ? u : f;
      p = ha(h, o.dataKey, i);
    } else
      p = f && f[n] || u[n];
    return p ? [].concat(yn(c), [sw(s, p)]) : c;
  }, []);
}, W0 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = lB(a, n), u = t.orderedTooltipTicks, c = t.tooltipAxis, s = t.tooltipTicks, l = GC(o, u, s, c);
  if (l >= 0 && s) {
    var f = s[l] && s[l].value, p = Cp(t, r, l, f), h = fB(n, u, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: p,
      activeCoordinate: h
    };
  }
  return null;
}, pB = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.layout, f = t.children, p = t.stackOffset, h = nw(l, a);
  return n.reduce(function(y, v) {
    var d, g = v.type.defaultProps !== void 0 ? I(I({}, v.type.defaultProps), v.props) : v.props, b = g.type, O = g.dataKey, w = g.allowDataOverflow, m = g.allowDuplicatedCategory, x = g.scale, _ = g.ticks, S = g.includeHidden, T = g[o];
    if (y[T])
      return y;
    var j = eu(t.data, {
      graphicalItems: i.filter(function(F) {
        var Y, fe = o in F.props ? F.props[o] : (Y = F.type.defaultProps) === null || Y === void 0 ? void 0 : Y[o];
        return fe === T;
      }),
      dataStartIndex: c,
      dataEndIndex: s
    }), P = j.length, E, $, M;
    Lq(g.domain, w, b) && (E = zf(g.domain, null, w), h && (b === "number" || x !== "auto") && (M = Un(j, O, "category")));
    var C = E_(b);
    if (!E || E.length === 0) {
      var k, R = (k = g.domain) !== null && k !== void 0 ? k : C;
      if (O) {
        if (E = Un(j, O, b), b === "category" && h) {
          var L = L1(E);
          m && L ? ($ = E, E = to(0, P)) : m || (E = Lg(R, E, v).reduce(function(F, Y) {
            return F.indexOf(Y) >= 0 ? F : [].concat(yn(F), [Y]);
          }, []));
        } else if (b === "category")
          m ? E = E.filter(function(F) {
            return F !== "" && !G(F);
          }) : E = Lg(R, E, v).reduce(function(F, Y) {
            return F.indexOf(Y) >= 0 || Y === "" || G(Y) ? F : [].concat(yn(F), [Y]);
          }, []);
        else if (b === "number") {
          var q = ZC(j, i.filter(function(F) {
            var Y, fe, ge = o in F.props ? F.props[o] : (Y = F.type.defaultProps) === null || Y === void 0 ? void 0 : Y[o], Ke = "hide" in F.props ? F.props.hide : (fe = F.type.defaultProps) === null || fe === void 0 ? void 0 : fe.hide;
            return ge === T && (S || !Ke);
          }), O, a, l);
          q && (E = q);
        }
        h && (b === "number" || x !== "auto") && (M = Un(j, O, "category"));
      } else h ? E = to(0, P) : u && u[T] && u[T].hasStack && b === "number" ? E = p === "expand" ? [0, 1] : cw(u[T].stackGroups, c, s) : E = rw(j, i.filter(function(F) {
        var Y = o in F.props ? F.props[o] : F.type.defaultProps[o], fe = "hide" in F.props ? F.props.hide : F.type.defaultProps.hide;
        return Y === T && (S || !fe);
      }), b, l, !0);
      if (b === "number")
        E = Ep(f, E, T, a, _), R && (E = zf(R, E, w));
      else if (b === "category" && R) {
        var U = R, V = E.every(function(F) {
          return U.indexOf(F) >= 0;
        });
        V && (E = U);
      }
    }
    return I(I({}, y), {}, H({}, T, I(I({}, g), {}, {
      axisType: a,
      domain: E,
      categoricalDomain: M,
      duplicateDomain: $,
      originalDomain: (d = g.domain) !== null && d !== void 0 ? d : C,
      isCategorical: h,
      layout: l
    })));
  }, {});
}, hB = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.layout, f = t.children, p = eu(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: s
  }), h = p.length, y = nw(l, a), v = -1;
  return n.reduce(function(d, g) {
    var b = g.type.defaultProps !== void 0 ? I(I({}, g.type.defaultProps), g.props) : g.props, O = b[o], w = E_("number");
    if (!d[O]) {
      v++;
      var m;
      return y ? m = to(0, h) : u && u[O] && u[O].hasStack ? (m = cw(u[O].stackGroups, c, s), m = Ep(f, m, O, a)) : (m = zf(w, rw(p, n.filter(function(x) {
        var _, S, T = o in x.props ? x.props[o] : (_ = x.type.defaultProps) === null || _ === void 0 ? void 0 : _[o], j = "hide" in x.props ? x.props.hide : (S = x.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return T === O && !j;
      }), "number", l), i.defaultProps.allowDataOverflow), m = Ep(f, m, O, a)), I(I({}, d), {}, H({}, O, I(I({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Xe(cB, "".concat(a, ".").concat(v % 2), null),
        domain: m,
        originalDomain: w,
        isCategorical: y,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return d;
  }, {});
}, dB = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), p = qe(l, a), h = {};
  return p && p.length ? h = pB(t, {
    axes: p,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  }) : o && o.length && (h = hB(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  })), h;
}, vB = function(t) {
  var r = zt(t), n = Tt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Qp(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: qa(r, n)
  };
}, U0 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Ve(r, nn), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, yB = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Et(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, K0 = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, mB = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, c = u === void 0 ? {} : u, s = n.width, l = n.height, f = n.children, p = n.margin || {}, h = Ve(f, nn), y = Ve(f, hr), v = Object.keys(c).reduce(function(m, x) {
    var _ = c[x], S = _.orientation;
    return !_.mirror && !_.hide ? I(I({}, m), {}, H({}, S, m[S] + _.width)) : m;
  }, {
    left: p.left || 0,
    right: p.right || 0
  }), d = Object.keys(o).reduce(function(m, x) {
    var _ = o[x], S = _.orientation;
    return !_.mirror && !_.hide ? I(I({}, m), {}, H({}, S, Xe(m, "".concat(S)) + _.height)) : m;
  }, {
    top: p.top || 0,
    bottom: p.bottom || 0
  }), g = I(I({}, d), v), b = g.bottom;
  h && (g.bottom += h.props.height || nn.defaultProps.height), y && r && (g = YC(g, i, n, r));
  var O = s - g.left - g.right, w = l - g.top - g.bottom;
  return I(I({
    brushBottom: b
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(O, 0),
    height: Math.max(w, 0)
  });
}, gB = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Xi = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, c = t.axisComponents, s = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, p = function(g, b) {
    var O = b.graphicalItems, w = b.stackGroups, m = b.offset, x = b.updateId, _ = b.dataStartIndex, S = b.dataEndIndex, T = g.barSize, j = g.layout, P = g.barGap, E = g.barCategoryGap, $ = g.maxBarSize, M = K0(j), C = M.numericAxisName, k = M.cateAxisName, R = yB(O), L = [];
    return O.forEach(function(q, U) {
      var V = eu(g.data, {
        graphicalItems: [q],
        dataStartIndex: _,
        dataEndIndex: S
      }), F = q.type.defaultProps !== void 0 ? I(I({}, q.type.defaultProps), q.props) : q.props, Y = F.dataKey, fe = F.maxBarSize, ge = F["".concat(C, "Id")], Ke = F["".concat(k, "Id")], Qt = {}, Be = c.reduce(function(er, tr) {
        var tu = b["".concat(tr.axisType, "Map")], Dh = F["".concat(tr.axisType, "Id")];
        tu && tu[Dh] || tr.axisType === "zAxis" || br();
        var Lh = tu[Dh];
        return I(I({}, er), {}, H(H({}, tr.axisType, Lh), "".concat(tr.axisType, "Ticks"), Tt(Lh)));
      }, Qt), B = Be[k], J = Be["".concat(k, "Ticks")], ee = w && w[ge] && w[ge].hasStack && oM(q, w[ge].stackGroups), N = Et(q.type).indexOf("Bar") >= 0, ve = qa(B, J), te = [], we = R && HC({
        barSize: T,
        stackGroups: w,
        totalSize: gB(Be, k)
      });
      if (N) {
        var _e, Fe, Bt = G(fe) ? $ : fe, jr = (_e = (Fe = qa(B, J, !0)) !== null && Fe !== void 0 ? Fe : Bt) !== null && _e !== void 0 ? _e : 0;
        te = VC({
          barGap: P,
          barCategoryGap: E,
          bandSize: jr !== ve ? jr : ve,
          sizeList: we[Ke],
          maxBarSize: Bt
        }), jr !== ve && (te = te.map(function(er) {
          return I(I({}, er), {}, {
            position: I(I({}, er.position), {}, {
              offset: er.position.offset - jr / 2
            })
          });
        }));
      }
      var Zi = q && q.type && q.type.getComposedData;
      Zi && L.push({
        props: I(I({}, Zi(I(I({}, Be), {}, {
          displayedData: V,
          props: g,
          dataKey: Y,
          item: q,
          bandSize: ve,
          barPosition: te,
          offset: m,
          stackedData: ee,
          layout: j,
          dataStartIndex: _,
          dataEndIndex: S
        }))), {}, H(H(H({
          key: q.key || "item-".concat(U)
        }, C, Be[C]), k, Be[k]), "animationId", x)),
        childIndex: J1(q, g.children),
        item: q
      });
    }), L;
  }, h = function(g, b) {
    var O = g.props, w = g.dataStartIndex, m = g.dataEndIndex, x = g.updateId;
    if (!Qd({
      props: O
    }))
      return null;
    var _ = O.children, S = O.layout, T = O.stackOffset, j = O.data, P = O.reverseStackOrder, E = K0(S), $ = E.numericAxisName, M = E.cateAxisName, C = qe(_, n), k = iM(j, C, "".concat($, "Id"), "".concat(M, "Id"), T, P), R = c.reduce(function(F, Y) {
      var fe = "".concat(Y.axisType, "Map");
      return I(I({}, F), {}, H({}, fe, dB(O, I(I({}, Y), {}, {
        graphicalItems: C,
        stackGroups: Y.axisType === $ && k,
        dataStartIndex: w,
        dataEndIndex: m
      }))));
    }, {}), L = mB(I(I({}, R), {}, {
      props: O,
      graphicalItems: C
    }), b?.legendBBox);
    Object.keys(R).forEach(function(F) {
      R[F] = l(O, R[F], L, F.replace("Map", ""), r);
    });
    var q = R["".concat(M, "Map")], U = vB(q), V = p(O, I(I({}, R), {}, {
      dataStartIndex: w,
      dataEndIndex: m,
      updateId: x,
      graphicalItems: C,
      stackGroups: k,
      offset: L
    }));
    return I(I({
      formattedGraphicalItems: V,
      graphicalItems: C,
      offset: L,
      stackGroups: k
    }, U), R);
  }, y = /* @__PURE__ */ (function(d) {
    function g(b) {
      var O, w, m;
      return Zq(this, g), m = eB(this, g, [b]), H(m, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), H(m, "accessibilityManager", new Dq()), H(m, "handleLegendBBoxUpdate", function(x) {
        if (x) {
          var _ = m.state, S = _.dataStartIndex, T = _.dataEndIndex, j = _.updateId;
          m.setState(I({
            legendBBox: x
          }, h({
            props: m.props,
            dataStartIndex: S,
            dataEndIndex: T,
            updateId: j
          }, I(I({}, m.state), {}, {
            legendBBox: x
          }))));
        }
      }), H(m, "handleReceiveSyncEvent", function(x, _, S) {
        if (m.props.syncId === x) {
          if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(_);
        }
      }), H(m, "handleBrushChange", function(x) {
        var _ = x.startIndex, S = x.endIndex;
        if (_ !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
          var T = m.state.updateId;
          m.setState(function() {
            return I({
              dataStartIndex: _,
              dataEndIndex: S
            }, h({
              props: m.props,
              dataStartIndex: _,
              dataEndIndex: S,
              updateId: T
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: _,
            dataEndIndex: S
          });
        }
      }), H(m, "handleMouseEnter", function(x) {
        var _ = m.getMouseInfo(x);
        if (_) {
          var S = I(I({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var T = m.props.onMouseEnter;
          K(T) && T(S, x);
        }
      }), H(m, "triggeredAfterMouseMove", function(x) {
        var _ = m.getMouseInfo(x), S = _ ? I(I({}, _), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var T = m.props.onMouseMove;
        K(T) && T(S, x);
      }), H(m, "handleItemMouseEnter", function(x) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: x,
            activePayload: x.tooltipPayload,
            activeCoordinate: x.tooltipPosition || {
              x: x.cx,
              y: x.cy
            }
          };
        });
      }), H(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), H(m, "handleMouseMove", function(x) {
        x.persist(), m.throttleTriggeredAfterMouseMove(x);
      }), H(m, "handleMouseLeave", function(x) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var _ = {
          isTooltipActive: !1
        };
        m.setState(_), m.triggerSyncEvent(_);
        var S = m.props.onMouseLeave;
        K(S) && S(_, x);
      }), H(m, "handleOuterEvent", function(x) {
        var _ = Z1(x), S = Xe(m.props, "".concat(_));
        if (_ && K(S)) {
          var T, j;
          /.*touch.*/i.test(_) ? j = m.getMouseInfo(x.changedTouches[0]) : j = m.getMouseInfo(x), S((T = j) !== null && T !== void 0 ? T : {}, x);
        }
      }), H(m, "handleClick", function(x) {
        var _ = m.getMouseInfo(x);
        if (_) {
          var S = I(I({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var T = m.props.onClick;
          K(T) && T(S, x);
        }
      }), H(m, "handleMouseDown", function(x) {
        var _ = m.props.onMouseDown;
        if (K(_)) {
          var S = m.getMouseInfo(x);
          _(S, x);
        }
      }), H(m, "handleMouseUp", function(x) {
        var _ = m.props.onMouseUp;
        if (K(_)) {
          var S = m.getMouseInfo(x);
          _(S, x);
        }
      }), H(m, "handleTouchMove", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(x.changedTouches[0]);
      }), H(m, "handleTouchStart", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseDown(x.changedTouches[0]);
      }), H(m, "handleTouchEnd", function(x) {
        x.changedTouches != null && x.changedTouches.length > 0 && m.handleMouseUp(x.changedTouches[0]);
      }), H(m, "handleDoubleClick", function(x) {
        var _ = m.props.onDoubleClick;
        if (K(_)) {
          var S = m.getMouseInfo(x);
          _(S, x);
        }
      }), H(m, "handleContextMenu", function(x) {
        var _ = m.props.onContextMenu;
        if (K(_)) {
          var S = m.getMouseInfo(x);
          _(S, x);
        }
      }), H(m, "triggerSyncEvent", function(x) {
        m.props.syncId !== void 0 && af.emit(of, m.props.syncId, x, m.eventEmitterSymbol);
      }), H(m, "applySyncEvent", function(x) {
        var _ = m.props, S = _.layout, T = _.syncMethod, j = m.state.updateId, P = x.dataStartIndex, E = x.dataEndIndex;
        if (x.dataStartIndex !== void 0 || x.dataEndIndex !== void 0)
          m.setState(I({
            dataStartIndex: P,
            dataEndIndex: E
          }, h({
            props: m.props,
            dataStartIndex: P,
            dataEndIndex: E,
            updateId: j
          }, m.state)));
        else if (x.activeTooltipIndex !== void 0) {
          var $ = x.chartX, M = x.chartY, C = x.activeTooltipIndex, k = m.state, R = k.offset, L = k.tooltipTicks;
          if (!R)
            return;
          if (typeof T == "function")
            C = T(L, x);
          else if (T === "value") {
            C = -1;
            for (var q = 0; q < L.length; q++)
              if (L[q].value === x.activeLabel) {
                C = q;
                break;
              }
          }
          var U = I(I({}, R), {}, {
            x: R.left,
            y: R.top
          }), V = Math.min($, U.x + U.width), F = Math.min(M, U.y + U.height), Y = L[C] && L[C].value, fe = Cp(m.state, m.props.data, C), ge = L[C] ? {
            x: S === "horizontal" ? L[C].coordinate : V,
            y: S === "horizontal" ? F : L[C].coordinate
          } : T_;
          m.setState(I(I({}, x), {}, {
            activeLabel: Y,
            activeCoordinate: ge,
            activePayload: fe,
            activeTooltipIndex: C
          }));
        } else
          m.setState(x);
      }), H(m, "renderCursor", function(x) {
        var _, S = m.state, T = S.isTooltipActive, j = S.activeCoordinate, P = S.activePayload, E = S.offset, $ = S.activeTooltipIndex, M = S.tooltipAxisBandSize, C = m.getTooltipEventType(), k = (_ = x.props.active) !== null && _ !== void 0 ? _ : T, R = m.props.layout, L = x.key || "_recharts-cursor";
        return /* @__PURE__ */ A.createElement(Uq, {
          key: L,
          activeCoordinate: j,
          activePayload: P,
          activeTooltipIndex: $,
          chartName: r,
          element: x,
          isActive: k,
          layout: R,
          offset: E,
          tooltipAxisBandSize: M,
          tooltipEventType: C
        });
      }), H(m, "renderPolarAxis", function(x, _, S) {
        var T = Xe(x, "type.axisType"), j = Xe(m.state, "".concat(T, "Map")), P = x.type.defaultProps, E = P !== void 0 ? I(I({}, P), x.props) : x.props, $ = j && j[E["".concat(T, "Id")]];
        return /* @__PURE__ */ Pe(x, I(I({}, $), {}, {
          className: X(T, $.className),
          key: x.key || "".concat(_, "-").concat(S),
          ticks: Tt($, !0)
        }));
      }), H(m, "renderPolarGrid", function(x) {
        var _ = x.props, S = _.radialLines, T = _.polarAngles, j = _.polarRadius, P = m.state, E = P.radiusAxisMap, $ = P.angleAxisMap, M = zt(E), C = zt($), k = C.cx, R = C.cy, L = C.innerRadius, q = C.outerRadius;
        return /* @__PURE__ */ Pe(x, {
          polarAngles: Array.isArray(T) ? T : Tt(C, !0).map(function(U) {
            return U.coordinate;
          }),
          polarRadius: Array.isArray(j) ? j : Tt(M, !0).map(function(U) {
            return U.coordinate;
          }),
          cx: k,
          cy: R,
          innerRadius: L,
          outerRadius: q,
          key: x.key || "polar-grid",
          radialLines: S
        });
      }), H(m, "renderLegend", function() {
        var x = m.state.formattedGraphicalItems, _ = m.props, S = _.children, T = _.width, j = _.height, P = m.props.margin || {}, E = T - (P.left || 0) - (P.right || 0), $ = ew({
          children: S,
          formattedGraphicalItems: x,
          legendWidth: E,
          legendContent: s
        });
        if (!$)
          return null;
        var M = $.item, C = F0($, Kq);
        return /* @__PURE__ */ Pe(M, I(I({}, C), {}, {
          chartWidth: T,
          chartHeight: j,
          margin: P,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), H(m, "renderTooltip", function() {
        var x, _ = m.props, S = _.children, T = _.accessibilityLayer, j = Ve(S, ze);
        if (!j)
          return null;
        var P = m.state, E = P.isTooltipActive, $ = P.activeCoordinate, M = P.activePayload, C = P.activeLabel, k = P.offset, R = (x = j.props.active) !== null && x !== void 0 ? x : E;
        return /* @__PURE__ */ Pe(j, {
          viewBox: I(I({}, k), {}, {
            x: k.left,
            y: k.top
          }),
          active: R,
          label: C,
          payload: R ? M : [],
          coordinate: $,
          accessibilityLayer: T
        });
      }), H(m, "renderBrush", function(x) {
        var _ = m.props, S = _.margin, T = _.data, j = m.state, P = j.offset, E = j.dataStartIndex, $ = j.dataEndIndex, M = j.updateId;
        return /* @__PURE__ */ Pe(x, {
          key: x.key || "_recharts-brush",
          onChange: aa(m.handleBrushChange, x.props.onChange),
          data: T,
          x: D(x.props.x) ? x.props.x : P.left,
          y: D(x.props.y) ? x.props.y : P.top + P.height + P.brushBottom - (S.bottom || 0),
          width: D(x.props.width) ? x.props.width : P.width,
          startIndex: E,
          endIndex: $,
          updateId: "brush-".concat(M)
        });
      }), H(m, "renderReferenceElement", function(x, _, S) {
        if (!x)
          return null;
        var T = m, j = T.clipPathId, P = m.state, E = P.xAxisMap, $ = P.yAxisMap, M = P.offset, C = x.type.defaultProps || {}, k = x.props, R = k.xAxisId, L = R === void 0 ? C.xAxisId : R, q = k.yAxisId, U = q === void 0 ? C.yAxisId : q;
        return /* @__PURE__ */ Pe(x, {
          key: x.key || "".concat(_, "-").concat(S),
          xAxis: E[L],
          yAxis: $[U],
          viewBox: {
            x: M.left,
            y: M.top,
            width: M.width,
            height: M.height
          },
          clipPathId: j
        });
      }), H(m, "renderActivePoints", function(x) {
        var _ = x.item, S = x.activePoint, T = x.basePoint, j = x.childIndex, P = x.isRange, E = [], $ = _.props.key, M = _.item.type.defaultProps !== void 0 ? I(I({}, _.item.type.defaultProps), _.item.props) : _.item.props, C = M.activeDot, k = M.dataKey, R = I(I({
          index: j,
          dataKey: k,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: Sh(_.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, W(C, !1)), da(C));
        return E.push(g.renderActiveDot(C, R, "".concat($, "-activePoint-").concat(j))), T ? E.push(g.renderActiveDot(C, I(I({}, R), {}, {
          cx: T.x,
          cy: T.y
        }), "".concat($, "-basePoint-").concat(j))) : P && E.push(null), E;
      }), H(m, "renderGraphicChild", function(x, _, S) {
        var T = m.filterFormatItem(x, _, S);
        if (!T)
          return null;
        var j = m.getTooltipEventType(), P = m.state, E = P.isTooltipActive, $ = P.tooltipAxis, M = P.activeTooltipIndex, C = P.activeLabel, k = m.props.children, R = Ve(k, ze), L = T.props, q = L.points, U = L.isRange, V = L.baseLine, F = T.item.type.defaultProps !== void 0 ? I(I({}, T.item.type.defaultProps), T.item.props) : T.item.props, Y = F.activeDot, fe = F.hide, ge = F.activeBar, Ke = F.activeShape, Qt = !!(!fe && E && R && (Y || ge || Ke)), Be = {};
        j !== "axis" && R && R.props.trigger === "click" ? Be = {
          onClick: aa(m.handleItemMouseEnter, x.props.onClick)
        } : j !== "axis" && (Be = {
          onMouseLeave: aa(m.handleItemMouseLeave, x.props.onMouseLeave),
          onMouseEnter: aa(m.handleItemMouseEnter, x.props.onMouseEnter)
        });
        var B = /* @__PURE__ */ Pe(x, I(I({}, T.props), Be));
        function J(tr) {
          return typeof $.dataKey == "function" ? $.dataKey(tr.payload) : null;
        }
        if (Qt)
          if (M >= 0) {
            var ee, N;
            if ($.dataKey && !$.allowDuplicatedCategory) {
              var ve = typeof $.dataKey == "function" ? J : "payload.".concat($.dataKey.toString());
              ee = ha(q, ve, C), N = U && V && ha(V, ve, C);
            } else
              ee = q?.[M], N = U && V && V[M];
            if (Ke || ge) {
              var te = x.props.activeIndex !== void 0 ? x.props.activeIndex : M;
              return [/* @__PURE__ */ Pe(x, I(I(I({}, T.props), Be), {}, {
                activeIndex: te
              })), null, null];
            }
            if (!G(ee))
              return [B].concat(yn(m.renderActivePoints({
                item: T,
                activePoint: ee,
                basePoint: N,
                childIndex: M,
                isRange: U
              })));
          } else {
            var we, _e = (we = m.getItemByXY(m.state.activeCoordinate)) !== null && we !== void 0 ? we : {
              graphicalItem: B
            }, Fe = _e.graphicalItem, Bt = Fe.item, jr = Bt === void 0 ? x : Bt, Zi = Fe.childIndex, er = I(I(I({}, T.props), Be), {}, {
              activeIndex: Zi
            });
            return [/* @__PURE__ */ Pe(jr, er), null, null];
          }
        return U ? [B, null, null] : [B, null];
      }), H(m, "renderCustomized", function(x, _, S) {
        return /* @__PURE__ */ Pe(x, I(I({
          key: "recharts-customized-".concat(S)
        }, m.props), m.state));
      }), H(m, "renderMap", {
        CartesianGrid: {
          handler: la,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: la
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: la
        },
        YAxis: {
          handler: la
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((O = b.id) !== null && O !== void 0 ? O : _r("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = Qx(m.triggeredAfterMouseMove, (w = b.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), m.state = {}, m;
    }
    return nB(g, d), Qq(g, [{
      key: "componentDidMount",
      value: function() {
        var O, w;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (O = this.props.margin.left) !== null && O !== void 0 ? O : 0,
            top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var O = this.props, w = O.children, m = O.data, x = O.height, _ = O.layout, S = Ve(w, ze);
        if (S) {
          var T = S.props.defaultIndex;
          if (!(typeof T != "number" || T < 0 || T > this.state.tooltipTicks.length - 1)) {
            var j = this.state.tooltipTicks[T] && this.state.tooltipTicks[T].value, P = Cp(this.state, m, T, j), E = this.state.tooltipTicks[T].coordinate, $ = (this.state.offset.top + x) / 2, M = _ === "horizontal", C = M ? {
              x: E,
              y: $
            } : {
              y: E,
              x: $
            }, k = this.state.formattedGraphicalItems.find(function(L) {
              var q = L.item;
              return q.type.name === "Scatter";
            });
            k && (C = I(I({}, C), k.props.points[T].tooltipPosition), P = k.props.points[T].tooltipPayload);
            var R = {
              activeTooltipIndex: T,
              isTooltipActive: !0,
              activeLabel: j,
              activePayload: P,
              activeCoordinate: C
            };
            this.setState(R), this.renderCursor(S), this.accessibilityManager.setIndex(T);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(O, w) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== O.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== O.margin) {
          var m, x;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (x = this.props.margin.top) !== null && x !== void 0 ? x : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(O) {
        lf([Ve(O.children, ze)], [Ve(this.props.children, ze)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = Ve(this.props.children, ze);
        if (O && typeof O.props.shared == "boolean") {
          var w = O.props.shared ? "axis" : "item";
          return u.indexOf(w) >= 0 ? w : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(O) {
        if (!this.container)
          return null;
        var w = this.container, m = w.getBoundingClientRect(), x = LT(m), _ = {
          chartX: Math.round(O.pageX - x.left),
          chartY: Math.round(O.pageY - x.top)
        }, S = m.width / w.offsetWidth || 1, T = this.inRange(_.chartX, _.chartY, S);
        if (!T)
          return null;
        var j = this.state, P = j.xAxisMap, E = j.yAxisMap, $ = this.getTooltipEventType(), M = W0(this.state, this.props.data, this.props.layout, T);
        if ($ !== "axis" && P && E) {
          var C = zt(P).scale, k = zt(E).scale, R = C && C.invert ? C.invert(_.chartX) : null, L = k && k.invert ? k.invert(_.chartY) : null;
          return I(I({}, _), {}, {
            xValue: R,
            yValue: L
          }, M);
        }
        return M ? I(I({}, _), M) : null;
      }
    }, {
      key: "inRange",
      value: function(O, w) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = this.props.layout, _ = O / m, S = w / m;
        if (x === "horizontal" || x === "vertical") {
          var T = this.state.offset, j = _ >= T.left && _ <= T.left + T.width && S >= T.top && S <= T.top + T.height;
          return j ? {
            x: _,
            y: S
          } : null;
        }
        var P = this.state, E = P.angleAxisMap, $ = P.radiusAxisMap;
        if (E && $) {
          var M = zt(E);
          return Fg({
            x: _,
            y: S
          }, M);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, w = this.getTooltipEventType(), m = Ve(O, ze), x = {};
        m && w === "axis" && (m.props.trigger === "click" ? x = {
          onClick: this.handleClick
        } : x = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var _ = da(this.props, this.handleOuterEvent);
        return I(I({}, _), x);
      }
    }, {
      key: "addListener",
      value: function() {
        af.on(of, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        af.removeListener(of, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, w, m) {
        for (var x = this.state.formattedGraphicalItems, _ = 0, S = x.length; _ < S; _++) {
          var T = x[_];
          if (T.item === O || T.props.key === O.key || w === Et(T.item.type) && m === T.childIndex)
            return T;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, w = this.state.offset, m = w.left, x = w.top, _ = w.height, S = w.width;
        return /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ A.createElement("rect", {
          x: m,
          y: x,
          height: _,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(w, m) {
          var x = B0(m, 2), _ = x[0], S = x[1];
          return I(I({}, w), {}, H({}, _, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(w, m) {
          var x = B0(m, 2), _ = x[0], S = x[1];
          return I(I({}, w), {}, H({}, _, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(O) {
        var w;
        return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[O]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(O) {
        var w;
        return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[O]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(O) {
        var w = this.state, m = w.formattedGraphicalItems, x = w.activeItem;
        if (m && m.length)
          for (var _ = 0, S = m.length; _ < S; _++) {
            var T = m[_], j = T.props, P = T.item, E = P.type.defaultProps !== void 0 ? I(I({}, P.type.defaultProps), P.props) : P.props, $ = Et(P.type);
            if ($ === "Bar") {
              var M = (j.data || []).find(function(L) {
                return nR(O, L);
              });
              if (M)
                return {
                  graphicalItem: T,
                  payload: M
                };
            } else if ($ === "RadialBar") {
              var C = (j.data || []).find(function(L) {
                return Fg(O, L);
              });
              if (C)
                return {
                  graphicalItem: T,
                  payload: C
                };
            } else if (Ko(T, x) || Go(T, x) || ji(T, x)) {
              var k = NN({
                graphicalItem: T,
                activeTooltipItem: x,
                itemData: E.data
              }), R = E.activeIndex === void 0 ? k : E.activeIndex;
              return {
                graphicalItem: I(I({}, T), {}, {
                  childIndex: R
                }),
                payload: ji(T, x) ? E.data[k] : T.props.data[k]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!Qd(this))
          return null;
        var w = this.props, m = w.children, x = w.className, _ = w.width, S = w.height, T = w.style, j = w.compact, P = w.title, E = w.desc, $ = F0(w, Gq), M = W($, !1);
        if (j)
          return /* @__PURE__ */ A.createElement(b0, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ A.createElement(pf, Lr({}, M, {
            width: _,
            height: S,
            title: P,
            desc: E
          }), this.renderClipPath(), tv(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var C, k;
          M.tabIndex = (C = this.props.tabIndex) !== null && C !== void 0 ? C : 0, M.role = (k = this.props.role) !== null && k !== void 0 ? k : "application", M.onKeyDown = function(L) {
            O.accessibilityManager.keyboardEvent(L);
          }, M.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ A.createElement(b0, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ A.createElement("div", Lr({
          className: X("recharts-wrapper", x),
          style: I({
            position: "relative",
            cursor: "default",
            width: _,
            height: S
          }, T)
        }, R, {
          ref: function(q) {
            O.container = q;
          }
        }), /* @__PURE__ */ A.createElement(pf, Lr({}, M, {
          width: _,
          height: S,
          title: P,
          desc: E,
          style: sB
        }), this.renderClipPath(), tv(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(Z0);
  H(y, "displayName", r), H(y, "defaultProps", I({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), H(y, "getDerivedStateFromProps", function(d, g) {
    var b = d.dataKey, O = d.data, w = d.children, m = d.width, x = d.height, _ = d.layout, S = d.stackOffset, T = d.margin, j = g.dataStartIndex, P = g.dataEndIndex;
    if (g.updateId === void 0) {
      var E = U0(d);
      return I(I(I({}, E), {}, {
        updateId: 0
      }, h(I(I({
        props: d
      }, E), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: b,
        prevData: O,
        prevWidth: m,
        prevHeight: x,
        prevLayout: _,
        prevStackOffset: S,
        prevMargin: T,
        prevChildren: w
      });
    }
    if (b !== g.prevDataKey || O !== g.prevData || m !== g.prevWidth || x !== g.prevHeight || _ !== g.prevLayout || S !== g.prevStackOffset || !qr(T, g.prevMargin)) {
      var $ = U0(d), M = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, C = I(I({}, W0(g, O, _)), {}, {
        updateId: g.updateId + 1
      }), k = I(I(I({}, $), M), C);
      return I(I(I({}, k), h(I({
        props: d
      }, k), g)), {}, {
        prevDataKey: b,
        prevData: O,
        prevWidth: m,
        prevHeight: x,
        prevLayout: _,
        prevStackOffset: S,
        prevMargin: T,
        prevChildren: w
      });
    }
    if (!lf(w, g.prevChildren)) {
      var R, L, q, U, V = Ve(w, nn), F = V && (R = (L = V.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && R !== void 0 ? R : j, Y = V && (q = (U = V.props) === null || U === void 0 ? void 0 : U.endIndex) !== null && q !== void 0 ? q : P, fe = F !== j || Y !== P, ge = !G(O), Ke = ge && !fe ? g.updateId : g.updateId + 1;
      return I(I({
        updateId: Ke
      }, h(I(I({
        props: d
      }, g), {}, {
        updateId: Ke,
        dataStartIndex: F,
        dataEndIndex: Y
      }), g)), {}, {
        prevChildren: w,
        dataStartIndex: F,
        dataEndIndex: Y
      });
    }
    return null;
  }), H(y, "renderActiveDot", function(d, g, b) {
    var O;
    return /* @__PURE__ */ pt(d) ? O = /* @__PURE__ */ Pe(d, g) : K(d) ? O = d(g) : O = /* @__PURE__ */ A.createElement(Gi, g), /* @__PURE__ */ A.createElement(Q, {
      className: "recharts-active-dot",
      key: b
    }, O);
  });
  var v = /* @__PURE__ */ go(function(g, b) {
    return /* @__PURE__ */ A.createElement(y, Lr({}, g, {
      ref: b
    }));
  });
  return v.displayName = y.displayName, v;
}, bB = Xi({
  chartName: "LineChart",
  GraphicalChild: Vi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Zt
  }, {
    axisType: "yAxis",
    AxisComp: Jt
  }],
  formatAxisMap: Th
}), xB = Xi({
  chartName: "BarChart",
  GraphicalChild: Er,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Zt
  }, {
    axisType: "yAxis",
    AxisComp: Jt
  }],
  formatAxisMap: Th
}), OB = Xi({
  chartName: "PieChart",
  GraphicalChild: qt,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Pn
  }, {
    axisType: "radiusAxis",
    AxisComp: Sn
  }],
  formatAxisMap: pw,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), wB = Xi({
  chartName: "RadarChart",
  GraphicalChild: Hi,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Pn
  }, {
    axisType: "radiusAxis",
    AxisComp: Sn
  }],
  formatAxisMap: pw,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), _B = Xi({
  chartName: "ScatterChart",
  GraphicalChild: Yi,
  defaultTooltipEventType: "item",
  validateTooltipEventTypes: ["item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Zt
  }, {
    axisType: "yAxis",
    AxisComp: Jt
  }, {
    axisType: "zAxis",
    AxisComp: Qo
  }],
  formatAxisMap: Th
});
const AB = { top: 5, right: 30, left: 20, bottom: 5 }, G0 = { fill: "#6b7280", fontSize: 12 }, SB = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, PB = { color: "#1f2937", fontWeight: 600 }, TB = { color: "#6b7280" }, EB = [4, 4, 0, 0], jB = ({
  api: e,
  title: t,
  items: r = [],
  barColor: n = "#3b82f6",
  showGrid: i,
  height: a
}) => {
  const o = xe(() => r.map(() => 0), [r.length]), u = xe(
    () => r.map((l) => l.numericExpression),
    [r]
  ), c = e.hooks.useNumberExpressions(u, o), s = xe(() => r.map((l, f) => ({
    name: l.label,
    value: c[f]
  })), [r, c]);
  return /* @__PURE__ */ Z.jsxs("div", { className: "tp-chart", children: [
    t && /* @__PURE__ */ Z.jsx("h3", { className: "tp-chart__title", children: t }),
    /* @__PURE__ */ Z.jsx(Fi, { width: "100%", height: a || 300, children: /* @__PURE__ */ Z.jsxs(xB, { data: s, margin: AB, children: [
      i && /* @__PURE__ */ Z.jsx(Jo, { strokeDasharray: "3 3", stroke: "#e5e7eb" }),
      /* @__PURE__ */ Z.jsx(Zt, { dataKey: "name", tick: G0, stroke: "#9ca3af" }),
      /* @__PURE__ */ Z.jsx(Jt, { tick: G0, stroke: "#9ca3af" }),
      /* @__PURE__ */ Z.jsx(
        ze,
        {
          contentStyle: SB,
          labelStyle: PB,
          itemStyle: TB
        }
      ),
      /* @__PURE__ */ Z.jsx(
        Er,
        {
          dataKey: "value",
          radius: EB,
          isAnimationActive: !e.isEditing,
          children: s.map((l, f) => /* @__PURE__ */ Z.jsx(xn, { fill: n }, `cell-${f}`))
        }
      )
    ] }) })
  ] });
}, $B = {
  usagePrompt: "Create a bar chart to visualize numeric data. Each item has a label and a numeric expression that can reference variables.",
  render: jB,
  fields: {
    title: {
      type: "text",
      label: "Chart Title"
    },
    items: {
      type: "array",
      label: "Data Items",
      arrayFields: {
        label: {
          type: "text",
          label: "Label"
        },
        numericExpression: {
          type: "numericExpression",
          label: "Numeric Expression"
        }
      },
      getItemSummary: (e) => `${e.label || "Untitled"}: ${e.numericExpression || "0"}`,
      defaultItemProps: {
        label: "Item",
        numericExpression: "0"
      }
    },
    barColor: {
      type: "color",
      label: "Bar Color"
    },
    showGrid: {
      type: "radio",
      label: "Show Grid",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    height: {
      type: "number",
      label: "Chart Height (px)"
    }
  },
  defaultProps: {
    title: "Bar Chart",
    items: [
      {
        label: "Category A",
        numericExpression: "75"
      },
      {
        label: "Category B",
        numericExpression: "90"
      },
      {
        label: "Category C",
        numericExpression: "60"
      }
    ],
    barColor: "#3b82f6",
    showGrid: !0,
    height: 300
  }
}, H0 = [
  "#3b82f6",
  // blue
  "#10b981",
  // green
  "#f59e0b",
  // amber
  "#ef4444",
  // red
  "#8b5cf6",
  // violet
  "#ec4899",
  // pink
  "#14b8a6",
  // teal
  "#f97316"
  // orange
], CB = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, MB = { color: "#1f2937", fontWeight: 600 }, IB = { color: "#6b7280" }, kB = { fontSize: "12px", color: "#6b7280" }, RB = { top: 24, right: 40, bottom: 24, left: 40 }, NB = { overflow: "visible" }, DB = ({ name: e, percent: t }) => `${e}: ${(t * 100).toFixed(0)}%`, LB = ({
  api: e,
  title: t,
  items: r = [],
  showLegend: n,
  height: i
}) => {
  const a = xe(() => r.map(() => 0), [r.length]), o = xe(
    () => r.map((s) => s.numericExpression),
    [r]
  ), u = e.hooks.useNumberExpressions(o, a), c = xe(() => r.map((s, l) => ({
    name: s.label,
    value: u[l],
    color: s.color || H0[l % H0.length]
  })), [r, u]);
  return /* @__PURE__ */ Z.jsxs("div", { className: "tp-chart", children: [
    t && /* @__PURE__ */ Z.jsx("h3", { className: "tp-chart__title", children: t }),
    /* @__PURE__ */ Z.jsx(Fi, { width: "100%", height: i || 300, children: /* @__PURE__ */ Z.jsxs(OB, { margin: RB, style: NB, children: [
      /* @__PURE__ */ Z.jsx(
        qt,
        {
          data: c,
          cx: "50%",
          cy: "50%",
          labelLine: !1,
          label: DB,
          outerRadius: 80,
          fill: "#8884d8",
          dataKey: "value",
          isAnimationActive: !e.isEditing,
          children: c.map((s, l) => /* @__PURE__ */ Z.jsx(xn, { fill: s.color }, `cell-${l}`))
        }
      ),
      /* @__PURE__ */ Z.jsx(
        ze,
        {
          contentStyle: CB,
          labelStyle: MB,
          itemStyle: IB
        }
      ),
      n && /* @__PURE__ */ Z.jsx(
        hr,
        {
          verticalAlign: "bottom",
          height: 36,
          wrapperStyle: kB
        }
      )
    ] }) })
  ] });
}, qB = {
  usagePrompt: "Create a pie chart to visualize proportional data. Each item has a label, value expression, and optional color.",
  render: LB,
  fields: {
    title: {
      type: "text",
      label: "Chart Title"
    },
    items: {
      type: "array",
      label: "Data Items",
      arrayFields: {
        label: {
          type: "text",
          label: "Label"
        },
        numericExpression: {
          type: "numericExpression",
          label: "Numeric Expression"
        },
        color: {
          type: "color",
          label: "Color"
        }
      },
      getItemSummary: (e) => `${e.label || "Untitled"}: ${e.numericExpression || "0"}`,
      defaultItemProps: {
        label: "Item",
        numericExpression: "0",
        color: ""
      }
    },
    showLegend: {
      type: "radio",
      label: "Show Legend",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    height: {
      type: "number",
      label: "Chart Height (px)"
    }
  },
  defaultProps: {
    title: "Pie Chart",
    items: [
      {
        label: "Category A",
        numericExpression: "30",
        color: "#3b82f6"
      },
      {
        label: "Category B",
        numericExpression: "45",
        color: "#10b981"
      },
      {
        label: "Category C",
        numericExpression: "25",
        color: "#f59e0b"
      }
    ],
    showLegend: !0,
    height: 300
  }
}, BB = { top: 5, right: 30, left: 20, bottom: 5 }, V0 = { fill: "#6b7280", fontSize: 12 }, FB = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, zB = { color: "#1f2937", fontWeight: 600 }, WB = { color: "#6b7280" }, UB = { r: 6 }, KB = ({
  api: e,
  title: t,
  items: r = [],
  lineColor: n = "#3b82f6",
  showGrid: i,
  showDots: a,
  height: o
}) => {
  const u = xe(() => r.map(() => 0), [r.length]), c = xe(
    () => r.map((p) => p.numericExpression),
    [r]
  ), s = e.hooks.useNumberExpressions(c, u), l = xe(() => r.map((p, h) => ({
    name: p.label,
    value: s[h]
  })), [r, s]), f = xe(() => a ? { fill: n, r: 4 } : !1, [a, n]);
  return /* @__PURE__ */ Z.jsxs("div", { className: "tp-chart", children: [
    t && /* @__PURE__ */ Z.jsx("h3", { className: "tp-chart__title", children: t }),
    /* @__PURE__ */ Z.jsx(Fi, { width: "100%", height: o || 300, children: /* @__PURE__ */ Z.jsxs(bB, { data: l, margin: BB, children: [
      i && /* @__PURE__ */ Z.jsx(Jo, { strokeDasharray: "3 3", stroke: "#e5e7eb" }),
      /* @__PURE__ */ Z.jsx(Zt, { dataKey: "name", tick: V0, stroke: "#9ca3af" }),
      /* @__PURE__ */ Z.jsx(Jt, { tick: V0, stroke: "#9ca3af" }),
      /* @__PURE__ */ Z.jsx(
        ze,
        {
          contentStyle: FB,
          labelStyle: zB,
          itemStyle: WB
        }
      ),
      /* @__PURE__ */ Z.jsx(
        Vi,
        {
          type: "monotone",
          dataKey: "value",
          stroke: n,
          strokeWidth: 2,
          dot: f,
          activeDot: UB,
          isAnimationActive: !e.isEditing
        }
      )
    ] }) })
  ] });
}, GB = {
  usagePrompt: "Create a line chart to visualize trends over time or categories. Each item has a label and a numeric expression.",
  render: KB,
  fields: {
    title: {
      type: "text",
      label: "Chart Title"
    },
    items: {
      type: "array",
      label: "Data Points",
      arrayFields: {
        label: {
          type: "text",
          label: "Label"
        },
        numericExpression: {
          type: "numericExpression",
          label: "Numeric Expression"
        }
      },
      getItemSummary: (e) => `${e.label || "Untitled"}: ${e.numericExpression || "0"}`,
      defaultItemProps: {
        label: "Point",
        numericExpression: "0"
      }
    },
    lineColor: {
      type: "color",
      label: "Line Color"
    },
    showGrid: {
      type: "radio",
      label: "Show Grid",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    showDots: {
      type: "radio",
      label: "Show Dots",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    height: {
      type: "number",
      label: "Chart Height (px)"
    }
  },
  defaultProps: {
    title: "Line Chart",
    items: [
      {
        label: "Jan",
        numericExpression: "65"
      },
      {
        label: "Feb",
        numericExpression: "75"
      },
      {
        label: "Mar",
        numericExpression: "70"
      },
      {
        label: "Apr",
        numericExpression: "85"
      },
      {
        label: "May",
        numericExpression: "90"
      }
    ],
    lineColor: "#3b82f6",
    showGrid: !0,
    showDots: !0,
    height: 300
  }
}, HB = { top: 5, right: 30, left: 20, bottom: 5 }, Y0 = { fill: "#6b7280", fontSize: 12 }, VB = { strokeDasharray: "3 3" }, YB = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, XB = { color: "#1f2937", fontWeight: 600 }, ZB = { color: "#6b7280" }, JB = (e, t, r) => t === "X" || t === "Y" ? [e, t] : [r.payload.name, "Point"], QB = ({
  api: e,
  title: t,
  items: r = [],
  dotColor: n = "#3b82f6",
  showGrid: i,
  height: a
}) => {
  const o = xe(() => r.map(() => 0), [r.length]), u = xe(() => r.map(() => 0), [r.length]), c = xe(
    () => r.map((h) => h.xNumericExpression),
    [r]
  ), s = xe(
    () => r.map((h) => h.yNumericExpression),
    [r]
  ), l = e.hooks.useNumberExpressions(
    c,
    o
  ), f = e.hooks.useNumberExpressions(
    s,
    u
  ), p = xe(() => r.map((h, y) => ({
    name: h.label,
    x: l[y],
    y: f[y]
  })), [r, l, f]);
  return /* @__PURE__ */ Z.jsxs("div", { className: "tp-chart", children: [
    t && /* @__PURE__ */ Z.jsx("h3", { className: "tp-chart__title", children: t }),
    /* @__PURE__ */ Z.jsx(Fi, { width: "100%", height: a || 300, children: /* @__PURE__ */ Z.jsxs(_B, { margin: HB, children: [
      i && /* @__PURE__ */ Z.jsx(Jo, { strokeDasharray: "3 3", stroke: "#e5e7eb" }),
      /* @__PURE__ */ Z.jsx(
        Zt,
        {
          type: "number",
          dataKey: "x",
          name: "X",
          tick: Y0,
          stroke: "#9ca3af"
        }
      ),
      /* @__PURE__ */ Z.jsx(
        Jt,
        {
          type: "number",
          dataKey: "y",
          name: "Y",
          tick: Y0,
          stroke: "#9ca3af"
        }
      ),
      /* @__PURE__ */ Z.jsx(
        ze,
        {
          cursor: VB,
          contentStyle: YB,
          labelStyle: XB,
          itemStyle: ZB,
          formatter: JB
        }
      ),
      /* @__PURE__ */ Z.jsx(
        Yi,
        {
          name: "Data Points",
          data: p,
          fill: n,
          isAnimationActive: !e.isEditing
        }
      )
    ] }) })
  ] });
}, eF = {
  usagePrompt: "Create a scatter plot to visualize the relationship between two numeric variables. Each point has X and Y expressions.",
  render: QB,
  fields: {
    title: {
      type: "text",
      label: "Chart Title"
    },
    items: {
      type: "array",
      label: "Data Points",
      arrayFields: {
        label: {
          type: "text",
          label: "Label"
        },
        xNumericExpression: {
          type: "numericExpression",
          label: "X Numeric Expression"
        },
        yNumericExpression: {
          type: "numericExpression",
          label: "Y Numeric Expression"
        }
      },
      getItemSummary: (e) => `${e.label || "Untitled"}: (${e.xNumericExpression || "0"}, ${e.yNumericExpression || "0"})`,
      defaultItemProps: {
        label: "Point",
        xNumericExpression: "0",
        yNumericExpression: "0"
      }
    },
    dotColor: {
      type: "color",
      label: "Dot Color"
    },
    showGrid: {
      type: "radio",
      label: "Show Grid",
      options: [
        { label: "Yes", value: !0 },
        { label: "No", value: !1 }
      ]
    },
    height: {
      type: "number",
      label: "Chart Height (px)"
    }
  },
  defaultProps: {
    title: "Scatter Chart",
    items: [
      {
        label: "Point A",
        xNumericExpression: "10",
        yNumericExpression: "20"
      },
      {
        label: "Point B",
        xNumericExpression: "25",
        yNumericExpression: "35"
      },
      {
        label: "Point C",
        xNumericExpression: "40",
        yNumericExpression: "30"
      },
      {
        label: "Point D",
        xNumericExpression: "55",
        yNumericExpression: "45"
      },
      {
        label: "Point E",
        xNumericExpression: "70",
        yNumericExpression: "50"
      }
    ],
    dotColor: "#3b82f6",
    showGrid: !0,
    height: 300
  }
}, X0 = { fill: "#6b7280", fontSize: 12 }, tF = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "0.375rem",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
}, rF = { color: "#1f2937", fontWeight: 600 }, nF = { color: "#6b7280" }, iF = ({
  api: e,
  title: t,
  items: r = [],
  fillColor: n = "#3b82f6",
  strokeColor: i = "#2563eb",
  height: a
}) => {
  const o = xe(() => r.map(() => 0), [r.length]), u = xe(
    () => r.map((l) => l.numericExpression),
    [r]
  ), c = e.hooks.useNumberExpressions(u, o), s = xe(() => r.map((l, f) => ({
    subject: l.label,
    value: c[f]
  })), [r, c]);
  return /* @__PURE__ */ Z.jsxs("div", { className: "tp-chart", children: [
    t && /* @__PURE__ */ Z.jsx("h3", { className: "tp-chart__title", children: t }),
    /* @__PURE__ */ Z.jsx(Fi, { width: "100%", height: a || 350, children: /* @__PURE__ */ Z.jsxs(wB, { data: s, children: [
      /* @__PURE__ */ Z.jsx(Pw, { stroke: "#e5e7eb" }),
      /* @__PURE__ */ Z.jsx(Pn, { dataKey: "subject", tick: X0 }),
      /* @__PURE__ */ Z.jsx(
        Sn,
        {
          angle: 90 - 180 / Math.max(r.length, 1),
          tick: X0
        }
      ),
      /* @__PURE__ */ Z.jsx(
        ze,
        {
          contentStyle: tF,
          labelStyle: rF,
          itemStyle: nF
        }
      ),
      /* @__PURE__ */ Z.jsx(
        Hi,
        {
          name: "Value",
          dataKey: "value",
          stroke: i,
          fill: n,
          fillOpacity: 0.6,
          isAnimationActive: !e.isEditing
        }
      )
    ] }) })
  ] });
}, aF = {
  usagePrompt: "Create a radar chart to visualize multi-dimensional data. Each item has a label and a numeric value expression.",
  render: iF,
  fields: {
    title: {
      type: "text",
      label: "Chart Title"
    },
    items: {
      type: "array",
      label: "Data Points",
      arrayFields: {
        label: {
          type: "text",
          label: "Label"
        },
        numericExpression: {
          type: "numericExpression",
          label: "Numeric Expression"
        }
      },
      getItemSummary: (e) => `${e.label || "Untitled"}: ${e.numericExpression || "0"}`,
      defaultItemProps: {
        label: "Dimension",
        numericExpression: "0"
      }
    },
    fillColor: {
      type: "color",
      label: "Fill Color"
    },
    strokeColor: {
      type: "color",
      label: "Stroke Color"
    },
    height: {
      type: "number",
      label: "Chart Height (px)"
    }
  },
  defaultProps: {
    title: "Radar Chart",
    items: [
      {
        label: "Speed",
        numericExpression: "80"
      },
      {
        label: "Strength",
        numericExpression: "70"
      },
      {
        label: "Defense",
        numericExpression: "60"
      },
      {
        label: "Intelligence",
        numericExpression: "90"
      },
      {
        label: "Agility",
        numericExpression: "75"
      }
    ],
    fillColor: "#3b82f6",
    strokeColor: "#2563eb",
    height: 350
  }
};
Di({
  name: "BarChart",
  description: "Display data as vertical bars for easy comparison across categories",
  icon: D_,
  config: $B,
  category: "Charts"
});
Di({
  name: "PieChart",
  description: "Show proportional data in a circular chart with labeled segments",
  icon: F_,
  config: qB,
  category: "Charts"
});
Di({
  name: "LineChart",
  description: "Visualize trends and changes over time with connected data points",
  icon: q_,
  config: GB,
  category: "Charts"
});
Di({
  name: "ScatterChart",
  description: "Plot data points on X and Y axes to show relationships between variables",
  icon: W_,
  config: eF,
  category: "Charts"
});
Di({
  name: "RadarChart",
  description: "Display multi-dimensional data in a spider-web pattern",
  icon: K_,
  config: aF,
  category: "Charts"
});
console.info("📊 Chart widgets loaded.");
//# sourceMappingURL=widget.js.map
