const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Cart-DVXxy8FM.js",
      "assets/arrow-left-of_mCTqg.js",
      "assets/ProductDetails-CmNRznYm.js",
      "assets/strip-DP0bM5wo.js",
      "assets/CategoryView-DN_yMoHR.js",
      "assets/circle-plus-D0jDWnjW.js",
      "assets/Login-CkXgjpGj.js",
      "assets/schemas-DQA3fDJR.js",
      "assets/login_background-DMl8kWjy.js",
      "assets/Signup-B5t_sW_8.js",
      "assets/Profile-BgYF69zz.js",
      "assets/package-DM8BNqjw.js",
      "assets/AdminAddProduct-BkRQiDDw.js",
      "assets/coerce-CWmUSiPq.js",
      "assets/AdminEditProduct-jxyrkOxd.js",
    ]),
) => i.map((i) => d[i]);
(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const f of o)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(o) {
    const f = {};
    return (
      o.integrity && (f.integrity = o.integrity),
      o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const f = c(o);
    fetch(o.href, f);
  }
})();
function mf(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Mo = { exports: {} },
  Au = {};
var Vy;
function z1() {
  if (Vy) return Au;
  Vy = 1;
  var a = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.fragment");
  function c(s, o, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      o.key !== void 0 && (h = "" + o.key),
      "key" in o)
    ) {
      f = {};
      for (var p in o) p !== "key" && (f[p] = o[p]);
    } else f = o;
    return (
      (o = f.ref),
      { $$typeof: a, type: s, key: h, ref: o !== void 0 ? o : null, props: f }
    );
  }
  return ((Au.Fragment = u), (Au.jsx = c), (Au.jsxs = c), Au);
}
var Gy;
function N1() {
  return (Gy || ((Gy = 1), (Mo.exports = z1())), Mo.exports);
}
var q = N1(),
  wo = { exports: {} },
  ye = {};
var ky;
function D1() {
  if (ky) return ye;
  ky = 1;
  var a = Symbol.for("react.transitional.element"),
    u = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    p = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    v = Symbol.for("react.activity"),
    _ = Symbol.iterator;
  function S(x) {
    return x === null || typeof x != "object"
      ? null
      : ((x = (_ && x[_]) || x["@@iterator"]),
        typeof x == "function" ? x : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    T = {};
  function j(x, $, le) {
    ((this.props = x),
      (this.context = $),
      (this.refs = T),
      (this.updater = le || A));
  }
  ((j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (x, $) {
      if (typeof x != "object" && typeof x != "function" && x != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, x, $, "setState");
    }),
    (j.prototype.forceUpdate = function (x) {
      this.updater.enqueueForceUpdate(this, x, "forceUpdate");
    }));
  function Q() {}
  Q.prototype = j.prototype;
  function E(x, $, le) {
    ((this.props = x),
      (this.context = $),
      (this.refs = T),
      (this.updater = le || A));
  }
  var M = (E.prototype = new Q());
  ((M.constructor = E), z(M, j.prototype), (M.isPureReactComponent = !0));
  var C = Array.isArray;
  function w() {}
  var U = { H: null, A: null, T: null, S: null },
    X = Object.prototype.hasOwnProperty;
  function V(x, $, le) {
    var ae = le.ref;
    return {
      $$typeof: a,
      type: x,
      key: $,
      ref: ae !== void 0 ? ae : null,
      props: le,
    };
  }
  function Y(x, $) {
    return V(x.type, $, x.props);
  }
  function N(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function H(x) {
    var $ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      x.replace(/[=:]/g, function (le) {
        return $[le];
      })
    );
  }
  var K = /\/+/g;
  function W(x, $) {
    return typeof x == "object" && x !== null && x.key != null
      ? H("" + x.key)
      : $.toString(36);
  }
  function ue(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (
          (typeof x.status == "string"
            ? x.then(w, w)
            : ((x.status = "pending"),
              x.then(
                function ($) {
                  x.status === "pending" &&
                    ((x.status = "fulfilled"), (x.value = $));
                },
                function ($) {
                  x.status === "pending" &&
                    ((x.status = "rejected"), (x.reason = $));
                },
              )),
          x.status)
        ) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function L(x, $, le, ae, ce) {
    var oe = typeof x;
    (oe === "undefined" || oe === "boolean") && (x = null);
    var re = !1;
    if (x === null) re = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case u:
              re = !0;
              break;
            case b:
              return ((re = x._init), L(re(x._payload), $, le, ae, ce));
          }
      }
    if (re)
      return (
        (ce = ce(x)),
        (re = ae === "" ? "." + W(x, 0) : ae),
        C(ce)
          ? ((le = ""),
            re != null && (le = re.replace(K, "$&/") + "/"),
            L(ce, $, le, "", function (ve) {
              return ve;
            }))
          : ce != null &&
            (N(ce) &&
              (ce = Y(
                ce,
                le +
                  (ce.key == null || (x && x.key === ce.key)
                    ? ""
                    : ("" + ce.key).replace(K, "$&/") + "/") +
                  re,
              )),
            $.push(ce)),
        1
      );
    re = 0;
    var be = ae === "" ? "." : ae + ":";
    if (C(x))
      for (var de = 0; de < x.length; de++)
        ((ae = x[de]), (oe = be + W(ae, de)), (re += L(ae, $, le, oe, ce)));
    else if (((de = S(x)), typeof de == "function"))
      for (x = de.call(x), de = 0; !(ae = x.next()).done; )
        ((ae = ae.value),
          (oe = be + W(ae, de++)),
          (re += L(ae, $, le, oe, ce)));
    else if (oe === "object") {
      if (typeof x.then == "function") return L(ue(x), $, le, ae, ce);
      throw (
        ($ = String(x)),
        Error(
          "Objects are not valid as a React child (found: " +
            ($ === "[object Object]"
              ? "object with keys {" + Object.keys(x).join(", ") + "}"
              : $) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return re;
  }
  function P(x, $, le) {
    if (x == null) return x;
    var ae = [],
      ce = 0;
    return (
      L(x, ae, "", "", function (oe) {
        return $.call(le, oe, ce++);
      }),
      ae
    );
  }
  function ee(x) {
    if (x._status === -1) {
      var $ = x._result;
      (($ = $()),
        $.then(
          function (le) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 1), (x._result = le));
          },
          function (le) {
            (x._status === 0 || x._status === -1) &&
              ((x._status = 2), (x._result = le));
          },
        ),
        x._status === -1 && ((x._status = 0), (x._result = $)));
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ne =
      typeof reportError == "function"
        ? reportError
        : function (x) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var $ = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof x == "object" &&
                  x !== null &&
                  typeof x.message == "string"
                    ? String(x.message)
                    : String(x),
                error: x,
              });
              if (!window.dispatchEvent($)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", x);
              return;
            }
            console.error(x);
          },
    ie = {
      map: P,
      forEach: function (x, $, le) {
        P(
          x,
          function () {
            $.apply(this, arguments);
          },
          le,
        );
      },
      count: function (x) {
        var $ = 0;
        return (
          P(x, function () {
            $++;
          }),
          $
        );
      },
      toArray: function (x) {
        return (
          P(x, function ($) {
            return $;
          }) || []
        );
      },
      only: function (x) {
        if (!N(x))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return x;
      },
    };
  return (
    (ye.Activity = v),
    (ye.Children = ie),
    (ye.Component = j),
    (ye.Fragment = c),
    (ye.Profiler = o),
    (ye.PureComponent = E),
    (ye.StrictMode = s),
    (ye.Suspense = y),
    (ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U),
    (ye.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (x) {
        return U.H.useMemoCache(x);
      },
    }),
    (ye.cache = function (x) {
      return function () {
        return x.apply(null, arguments);
      };
    }),
    (ye.cacheSignal = function () {
      return null;
    }),
    (ye.cloneElement = function (x, $, le) {
      if (x == null)
        throw Error(
          "The argument must be a React element, but you passed " + x + ".",
        );
      var ae = z({}, x.props),
        ce = x.key;
      if ($ != null)
        for (oe in ($.key !== void 0 && (ce = "" + $.key), $))
          !X.call($, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && $.ref === void 0) ||
            (ae[oe] = $[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) ae.children = le;
      else if (1 < oe) {
        for (var re = Array(oe), be = 0; be < oe; be++)
          re[be] = arguments[be + 2];
        ae.children = re;
      }
      return V(x.type, ce, ae);
    }),
    (ye.createContext = function (x) {
      return (
        (x = {
          $$typeof: h,
          _currentValue: x,
          _currentValue2: x,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (x.Provider = x),
        (x.Consumer = { $$typeof: f, _context: x }),
        x
      );
    }),
    (ye.createElement = function (x, $, le) {
      var ae,
        ce = {},
        oe = null;
      if ($ != null)
        for (ae in ($.key !== void 0 && (oe = "" + $.key), $))
          X.call($, ae) &&
            ae !== "key" &&
            ae !== "__self" &&
            ae !== "__source" &&
            (ce[ae] = $[ae]);
      var re = arguments.length - 2;
      if (re === 1) ce.children = le;
      else if (1 < re) {
        for (var be = Array(re), de = 0; de < re; de++)
          be[de] = arguments[de + 2];
        ce.children = be;
      }
      if (x && x.defaultProps)
        for (ae in ((re = x.defaultProps), re))
          ce[ae] === void 0 && (ce[ae] = re[ae]);
      return V(x, oe, ce);
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (x) {
      return { $$typeof: p, render: x };
    }),
    (ye.isValidElement = N),
    (ye.lazy = function (x) {
      return { $$typeof: b, _payload: { _status: -1, _result: x }, _init: ee };
    }),
    (ye.memo = function (x, $) {
      return { $$typeof: m, type: x, compare: $ === void 0 ? null : $ };
    }),
    (ye.startTransition = function (x) {
      var $ = U.T,
        le = {};
      U.T = le;
      try {
        var ae = x(),
          ce = U.S;
        (ce !== null && ce(le, ae),
          typeof ae == "object" &&
            ae !== null &&
            typeof ae.then == "function" &&
            ae.then(w, ne));
      } catch (oe) {
        ne(oe);
      } finally {
        ($ !== null && le.types !== null && ($.types = le.types), (U.T = $));
      }
    }),
    (ye.unstable_useCacheRefresh = function () {
      return U.H.useCacheRefresh();
    }),
    (ye.use = function (x) {
      return U.H.use(x);
    }),
    (ye.useActionState = function (x, $, le) {
      return U.H.useActionState(x, $, le);
    }),
    (ye.useCallback = function (x, $) {
      return U.H.useCallback(x, $);
    }),
    (ye.useContext = function (x) {
      return U.H.useContext(x);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (x, $) {
      return U.H.useDeferredValue(x, $);
    }),
    (ye.useEffect = function (x, $) {
      return U.H.useEffect(x, $);
    }),
    (ye.useEffectEvent = function (x) {
      return U.H.useEffectEvent(x);
    }),
    (ye.useId = function () {
      return U.H.useId();
    }),
    (ye.useImperativeHandle = function (x, $, le) {
      return U.H.useImperativeHandle(x, $, le);
    }),
    (ye.useInsertionEffect = function (x, $) {
      return U.H.useInsertionEffect(x, $);
    }),
    (ye.useLayoutEffect = function (x, $) {
      return U.H.useLayoutEffect(x, $);
    }),
    (ye.useMemo = function (x, $) {
      return U.H.useMemo(x, $);
    }),
    (ye.useOptimistic = function (x, $) {
      return U.H.useOptimistic(x, $);
    }),
    (ye.useReducer = function (x, $, le) {
      return U.H.useReducer(x, $, le);
    }),
    (ye.useRef = function (x) {
      return U.H.useRef(x);
    }),
    (ye.useState = function (x) {
      return U.H.useState(x);
    }),
    (ye.useSyncExternalStore = function (x, $, le) {
      return U.H.useSyncExternalStore(x, $, le);
    }),
    (ye.useTransition = function () {
      return U.H.useTransition();
    }),
    (ye.version = "19.2.4"),
    ye
  );
}
var Xy;
function tc() {
  return (Xy || ((Xy = 1), (wo.exports = D1())), wo.exports);
}
var R = tc();
const j1 = mf(R);
var zo = { exports: {} },
  Ou = {},
  No = { exports: {} },
  Do = {};
var Zy;
function U1() {
  return (
    Zy ||
      ((Zy = 1),
      (function (a) {
        function u(L, P) {
          var ee = L.length;
          L.push(P);
          e: for (; 0 < ee; ) {
            var ne = (ee - 1) >>> 1,
              ie = L[ne];
            if (0 < o(ie, P)) ((L[ne] = P), (L[ee] = ie), (ee = ne));
            else break e;
          }
        }
        function c(L) {
          return L.length === 0 ? null : L[0];
        }
        function s(L) {
          if (L.length === 0) return null;
          var P = L[0],
            ee = L.pop();
          if (ee !== P) {
            L[0] = ee;
            e: for (var ne = 0, ie = L.length, x = ie >>> 1; ne < x; ) {
              var $ = 2 * (ne + 1) - 1,
                le = L[$],
                ae = $ + 1,
                ce = L[ae];
              if (0 > o(le, ee))
                ae < ie && 0 > o(ce, le)
                  ? ((L[ne] = ce), (L[ae] = ee), (ne = ae))
                  : ((L[ne] = le), (L[$] = ee), (ne = $));
              else if (ae < ie && 0 > o(ce, ee))
                ((L[ne] = ce), (L[ae] = ee), (ne = ae));
              else break e;
            }
          }
          return P;
        }
        function o(L, P) {
          var ee = L.sortIndex - P.sortIndex;
          return ee !== 0 ? ee : L.id - P.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          a.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            p = h.now();
          a.unstable_now = function () {
            return h.now() - p;
          };
        }
        var y = [],
          m = [],
          b = 1,
          v = null,
          _ = 3,
          S = !1,
          A = !1,
          z = !1,
          T = !1,
          j = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          E = typeof setImmediate < "u" ? setImmediate : null;
        function M(L) {
          for (var P = c(m); P !== null; ) {
            if (P.callback === null) s(m);
            else if (P.startTime <= L)
              (s(m), (P.sortIndex = P.expirationTime), u(y, P));
            else break;
            P = c(m);
          }
        }
        function C(L) {
          if (((z = !1), M(L), !A))
            if (c(y) !== null) ((A = !0), w || ((w = !0), H()));
            else {
              var P = c(m);
              P !== null && ue(C, P.startTime - L);
            }
        }
        var w = !1,
          U = -1,
          X = 5,
          V = -1;
        function Y() {
          return T ? !0 : !(a.unstable_now() - V < X);
        }
        function N() {
          if (((T = !1), w)) {
            var L = a.unstable_now();
            V = L;
            var P = !0;
            try {
              e: {
                ((A = !1), z && ((z = !1), Q(U), (U = -1)), (S = !0));
                var ee = _;
                try {
                  t: {
                    for (
                      M(L), v = c(y);
                      v !== null && !(v.expirationTime > L && Y());
                    ) {
                      var ne = v.callback;
                      if (typeof ne == "function") {
                        ((v.callback = null), (_ = v.priorityLevel));
                        var ie = ne(v.expirationTime <= L);
                        if (((L = a.unstable_now()), typeof ie == "function")) {
                          ((v.callback = ie), M(L), (P = !0));
                          break t;
                        }
                        (v === c(y) && s(y), M(L));
                      } else s(y);
                      v = c(y);
                    }
                    if (v !== null) P = !0;
                    else {
                      var x = c(m);
                      (x !== null && ue(C, x.startTime - L), (P = !1));
                    }
                  }
                  break e;
                } finally {
                  ((v = null), (_ = ee), (S = !1));
                }
                P = void 0;
              }
            } finally {
              P ? H() : (w = !1);
            }
          }
        }
        var H;
        if (typeof E == "function")
          H = function () {
            E(N);
          };
        else if (typeof MessageChannel < "u") {
          var K = new MessageChannel(),
            W = K.port2;
          ((K.port1.onmessage = N),
            (H = function () {
              W.postMessage(null);
            }));
        } else
          H = function () {
            j(N, 0);
          };
        function ue(L, P) {
          U = j(function () {
            L(a.unstable_now());
          }, P);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (a.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (X = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return _;
          }),
          (a.unstable_next = function (L) {
            switch (_) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = _;
            }
            var ee = _;
            _ = P;
            try {
              return L();
            } finally {
              _ = ee;
            }
          }),
          (a.unstable_requestPaint = function () {
            T = !0;
          }),
          (a.unstable_runWithPriority = function (L, P) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var ee = _;
            _ = L;
            try {
              return P();
            } finally {
              _ = ee;
            }
          }),
          (a.unstable_scheduleCallback = function (L, P, ee) {
            var ne = a.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? ne + ee : ne))
                : (ee = ne),
              L)
            ) {
              case 1:
                var ie = -1;
                break;
              case 2:
                ie = 250;
                break;
              case 5:
                ie = 1073741823;
                break;
              case 4:
                ie = 1e4;
                break;
              default:
                ie = 5e3;
            }
            return (
              (ie = ee + ie),
              (L = {
                id: b++,
                callback: P,
                priorityLevel: L,
                startTime: ee,
                expirationTime: ie,
                sortIndex: -1,
              }),
              ee > ne
                ? ((L.sortIndex = ee),
                  u(m, L),
                  c(y) === null &&
                    L === c(m) &&
                    (z ? (Q(U), (U = -1)) : (z = !0), ue(C, ee - ne)))
                : ((L.sortIndex = ie),
                  u(y, L),
                  A || S || ((A = !0), w || ((w = !0), H()))),
              L
            );
          }),
          (a.unstable_shouldYield = Y),
          (a.unstable_wrapCallback = function (L) {
            var P = _;
            return function () {
              var ee = _;
              _ = P;
              try {
                return L.apply(this, arguments);
              } finally {
                _ = ee;
              }
            };
          }));
      })(Do)),
    Do
  );
}
var Ky;
function q1() {
  return (Ky || ((Ky = 1), (No.exports = U1())), No.exports);
}
var jo = { exports: {} },
  ct = {};
var Jy;
function H1() {
  if (Jy) return ct;
  Jy = 1;
  var a = tc();
  function u(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        m += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var s = {
      d: {
        f: c,
        r: function () {
          throw Error(u(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function f(y, m, b) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: v == null ? null : "" + v,
      children: y,
      containerInfo: m,
      implementation: b,
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(y, m) {
    if (y === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ct.createPortal = function (y, m) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(u(299));
      return f(y, m, null, b);
    }),
    (ct.flushSync = function (y) {
      var m = h.T,
        b = s.p;
      try {
        if (((h.T = null), (s.p = 2), y)) return y();
      } finally {
        ((h.T = m), (s.p = b), s.d.f());
      }
    }),
    (ct.preconnect = function (y, m) {
      typeof y == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        s.d.C(y, m));
    }),
    (ct.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (ct.preinit = function (y, m) {
      if (typeof y == "string" && m && typeof m.as == "string") {
        var b = m.as,
          v = p(b, m.crossOrigin),
          _ = typeof m.integrity == "string" ? m.integrity : void 0,
          S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        b === "style"
          ? s.d.S(y, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: S,
            })
          : b === "script" &&
            s.d.X(y, {
              crossOrigin: v,
              integrity: _,
              fetchPriority: S,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ct.preinitModule = function (y, m) {
      if (typeof y == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var b = p(m.as, m.crossOrigin);
            s.d.M(y, {
              crossOrigin: b,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(y);
    }),
    (ct.preload = function (y, m) {
      if (
        typeof y == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var b = m.as,
          v = p(b, m.crossOrigin);
        s.d.L(y, b, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ct.preloadModule = function (y, m) {
      if (typeof y == "string")
        if (m) {
          var b = p(m.as, m.crossOrigin);
          s.d.m(y, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: b,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (ct.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (ct.unstable_batchedUpdates = function (y, m) {
      return y(m);
    }),
    (ct.useFormState = function (y, m, b) {
      return h.H.useFormState(y, m, b);
    }),
    (ct.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (ct.version = "19.2.4"),
    ct
  );
}
var $y;
function L1() {
  if ($y) return jo.exports;
  $y = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return (a(), (jo.exports = H1()), jo.exports);
}
var Fy;
function Q1() {
  if (Fy) return Ou;
  Fy = 1;
  var a = q1(),
    u = tc(),
    c = L1();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(s(188));
  }
  function m(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (((l = i.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === n) return (y(i), e);
          if (r === l) return (y(i), t);
          r = r.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) ((n = i), (l = r));
      else {
        for (var d = !1, g = i.child; g; ) {
          if (g === n) {
            ((d = !0), (n = i), (l = r));
            break;
          }
          if (g === l) {
            ((d = !0), (l = i), (n = r));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = r.child; g; ) {
            if (g === n) {
              ((d = !0), (n = r), (l = i));
              break;
            }
            if (g === l) {
              ((d = !0), (l = r), (n = i));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = b(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    _ = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    Q = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    M = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    w = Symbol.for("react.suspense_list"),
    U = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    V = Symbol.for("react.activity"),
    Y = Symbol.for("react.memo_cache_sentinel"),
    N = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (N && e[N]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var K = Symbol.for("react.client.reference");
  function W(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === K ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case j:
        return "Profiler";
      case T:
        return "StrictMode";
      case C:
        return "Suspense";
      case w:
        return "SuspenseList";
      case V:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case E:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case M:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case U:
          return (
            (t = e.displayName || null),
            t !== null ? t : W(e.type) || "Memo"
          );
        case X:
          ((t = e._payload), (e = e._init));
          try {
            return W(e(t));
          } catch {}
      }
    return null;
  }
  var ue = Array.isArray,
    L = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ee = { pending: !1, data: null, method: null, action: null },
    ne = [],
    ie = -1;
  function x(e) {
    return { current: e };
  }
  function $(e) {
    0 > ie || ((e.current = ne[ie]), (ne[ie] = null), ie--);
  }
  function le(e, t) {
    (ie++, (ne[ie] = e.current), (e.current = t));
  }
  var ae = x(null),
    ce = x(null),
    oe = x(null),
    re = x(null);
  function be(e, t) {
    switch ((le(oe, t), le(ce, e), le(ae, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? fy(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = fy(t)), (e = dy(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ($(ae), le(ae, e));
  }
  function de() {
    ($(ae), $(ce), $(oe));
  }
  function ve(e) {
    e.memoizedState !== null && le(re, e);
    var t = ae.current,
      n = dy(t, e.type);
    t !== n && (le(ce, e), le(ae, n));
  }
  function st(e) {
    (ce.current === e && ($(ae), $(ce)),
      re.current === e && ($(re), (xu._currentValue = ee)));
  }
  var Ie, un;
  function et(e) {
    if (Ie === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ie = (t && t[1]) || ""),
          (un =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ie +
      e +
      un
    );
  }
  var Wt = !1;
  function Nt(e, t) {
    if (!e || Wt) return "";
    Wt = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var te = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(te.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(te, []);
                } catch (J) {
                  var Z = J;
                }
                Reflect.construct(e, [], te);
              } else {
                try {
                  te.call();
                } catch (J) {
                  Z = J;
                }
                e.call(te.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                Z = J;
              }
              (te = e()) &&
                typeof te.catch == "function" &&
                te.catch(function () {});
            }
          } catch (J) {
            if (J && Z && typeof J.stack == "string") return [J.stack, Z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = l.DetermineComponentFrameRoot(),
        d = r[0],
        g = r[1];
      if (d && g) {
        var O = d.split(`
`),
          k = g.split(`
`);
        for (
          i = l = 0;
          l < O.length && !O[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; i < k.length && !k[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (l === O.length || i === k.length)
          for (
            l = O.length - 1, i = k.length - 1;
            1 <= l && 0 <= i && O[l] !== k[i];
          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (O[l] !== k[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || O[l] !== k[i])) {
                  var F =
                    `
` + O[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      F.includes("<anonymous>") &&
                      (F = F.replace("<anonymous>", e.displayName)),
                    F
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((Wt = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function qn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? et("Suspense Fallback")
          : et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return Nt(e.type, !1);
      case 11:
        return Nt(e.type.render, !1);
      case 1:
        return Nt(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function Ba(e) {
    try {
      var t = "",
        n = null;
      do ((t += qn(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var ma = Object.prototype.hasOwnProperty,
    Dl = a.unstable_scheduleCallback,
    Ya = a.unstable_cancelCallback,
    yc = a.unstable_shouldYield,
    o0 = a.unstable_requestPaint,
    vt = a.unstable_now,
    f0 = a.unstable_getCurrentPriorityLevel,
    Gf = a.unstable_ImmediatePriority,
    kf = a.unstable_UserBlockingPriority,
    ii = a.unstable_NormalPriority,
    d0 = a.unstable_LowPriority,
    Xf = a.unstable_IdlePriority,
    h0 = a.log,
    m0 = a.unstable_setDisableYieldValue,
    jl = null,
    bt = null;
  function Hn(e) {
    if (
      (typeof h0 == "function" && m0(e),
      bt && typeof bt.setStrictMode == "function")
    )
      try {
        bt.setStrictMode(jl, e);
      } catch {}
  }
  var St = Math.clz32 ? Math.clz32 : g0,
    y0 = Math.log,
    p0 = Math.LN2;
  function g0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((y0(e) / p0) | 0)) | 0);
  }
  var ri = 256,
    ci = 262144,
    si = 4194304;
  function ya(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function oi(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      r = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~r),
          l !== 0
            ? (i = ya(l))
            : ((d &= g),
              d !== 0
                ? (i = ya(d))
                : n || ((n = g & ~e), n !== 0 && (i = ya(n)))))
        : ((g = l & ~r),
          g !== 0
            ? (i = ya(g))
            : d !== 0
              ? (i = ya(d))
              : n || ((n = l & ~e), n !== 0 && (i = ya(n)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & r) === 0 &&
            ((r = i & -i),
            (n = t & -t),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Ul(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function v0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zf() {
    var e = si;
    return ((si <<= 1), (si & 62914560) === 0 && (si = 4194304), e);
  }
  function pc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ql(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function b0(e, t, n, l, i, r) {
    var d = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      O = e.expirationTimes,
      k = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var F = 31 - St(n),
        te = 1 << F;
      ((g[F] = 0), (O[F] = -1));
      var Z = k[F];
      if (Z !== null)
        for (k[F] = null, F = 0; F < Z.length; F++) {
          var J = Z[F];
          J !== null && (J.lane &= -536870913);
        }
      n &= ~te;
    }
    (l !== 0 && Kf(e, l, 0),
      r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t)));
  }
  function Kf(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - St(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function Jf(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - St(n),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (n &= ~i));
    }
  }
  function $f(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : gc(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function gc(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vc(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ff() {
    var e = P.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Uy(e.type));
  }
  function Pf(e, t) {
    var n = P.p;
    try {
      return ((P.p = e), t());
    } finally {
      P.p = n;
    }
  }
  var Ln = Math.random().toString(36).slice(2),
    tt = "__reactFiber$" + Ln,
    ft = "__reactProps$" + Ln,
    Va = "__reactContainer$" + Ln,
    bc = "__reactEvents$" + Ln,
    S0 = "__reactListeners$" + Ln,
    E0 = "__reactHandles$" + Ln,
    Wf = "__reactResources$" + Ln,
    Hl = "__reactMarker$" + Ln;
  function Sc(e) {
    (delete e[tt], delete e[ft], delete e[bc], delete e[S0], delete e[E0]);
  }
  function Ga(e) {
    var t = e[tt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Va] || n[tt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = by(e); e !== null; ) {
            if ((n = e[tt])) return n;
            e = by(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ka(e) {
    if ((e = e[tt] || e[Va])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ll(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Xa(e) {
    var t = e[Wf];
    return (
      t ||
        (t = e[Wf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function $e(e) {
    e[Hl] = !0;
  }
  var If = new Set(),
    ed = {};
  function pa(e, t) {
    (Za(e, t), Za(e + "Capture", t));
  }
  function Za(e, t) {
    for (ed[e] = t, e = 0; e < t.length; e++) If.add(t[e]);
  }
  var x0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    td = {},
    nd = {};
  function _0(e) {
    return ma.call(nd, e)
      ? !0
      : ma.call(td, e)
        ? !1
        : x0.test(e)
          ? (nd[e] = !0)
          : ((td[e] = !0), !1);
  }
  function fi(e, t, n) {
    if (_0(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function di(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function rn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Dt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function ad(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function T0(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        r = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (d) {
            ((n = "" + d), r.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ec(e) {
    if (!e._valueTracker) {
      var t = ad(e) ? "checked" : "value";
      e._valueTracker = T0(e, t, "" + e[t]);
    }
  }
  function ld(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = "";
    return (
      e && (l = ad(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function hi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var R0 = /[\n"\\]/g;
  function jt(e) {
    return e.replace(R0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function xc(e, t, n, l, i, r, d, g) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Dt(t))
          : e.value !== "" + Dt(t) && (e.value = "" + Dt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? _c(e, d, Dt(t))
        : n != null
          ? _c(e, d, Dt(n))
          : l != null && e.removeAttribute("value"),
      i == null && r != null && (e.defaultChecked = !!r),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Dt(g))
        : e.removeAttribute("name"));
  }
  function ud(e, t, n, l, i, r, d, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) {
        Ec(e);
        return;
      }
      ((n = n != null ? "" + Dt(n) : ""),
        (t = t != null ? "" + Dt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = g ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      Ec(e));
  }
  function _c(e, t, n) {
    (t === "number" && hi(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function Ka(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        ((i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && l && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Dt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function id(e, t, n) {
    if (
      t != null &&
      ((t = "" + Dt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Dt(n) : "";
  }
  function rd(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (ue(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Dt(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== "" && l !== null && (e.value = l),
      Ec(e));
  }
  function Ja(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var A0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function cd(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || A0.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function sd(e, t, n) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && n[i] !== l && cd(e, i, l));
    } else for (var r in t) t.hasOwnProperty(r) && cd(e, r, t[r]);
  }
  function Tc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var O0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    C0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mi(e) {
    return C0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function cn() {}
  var Rc = null;
  function Ac(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var $a = null,
    Fa = null;
  function od(e) {
    var t = ka(e);
    if (t && (e = t.stateNode)) {
      var n = e[ft] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (xc(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + jt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var i = l[ft] || null;
                if (!i) throw Error(s(90));
                xc(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && ld(l));
          }
          break e;
        case "textarea":
          id(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && Ka(e, !!n.multiple, t, !1));
      }
    }
  }
  var Oc = !1;
  function fd(e, t, n) {
    if (Oc) return e(t, n);
    Oc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Oc = !1),
        ($a !== null || Fa !== null) &&
          (tr(), $a && ((t = $a), (e = Fa), (Fa = $a = null), od(t), e)))
      )
        for (t = 0; t < e.length; t++) od(e[t]);
    }
  }
  function Ql(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[ft] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cc = !1;
  if (sn)
    try {
      var Bl = {};
      (Object.defineProperty(Bl, "passive", {
        get: function () {
          Cc = !0;
        },
      }),
        window.addEventListener("test", Bl, Bl),
        window.removeEventListener("test", Bl, Bl));
    } catch {
      Cc = !1;
    }
  var Qn = null,
    Mc = null,
    yi = null;
  function dd() {
    if (yi) return yi;
    var e,
      t = Mc,
      n = t.length,
      l,
      i = "value" in Qn ? Qn.value : Qn.textContent,
      r = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var d = n - e;
    for (l = 1; l <= d && t[n - l] === i[r - l]; l++);
    return (yi = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function pi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function gi() {
    return !0;
  }
  function hd() {
    return !1;
  }
  function dt(e) {
    function t(n, l, i, r, d) {
      ((this._reactName = n),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? gi
          : hd),
        (this.isPropagationStopped = hd),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = gi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = gi));
        },
        persist: function () {},
        isPersistent: gi,
      }),
      t
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vi = dt(ga),
    Yl = v({}, ga, { view: 0, detail: 0 }),
    M0 = dt(Yl),
    wc,
    zc,
    Vl,
    bi = v({}, Yl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Vl &&
              (Vl && e.type === "mousemove"
                ? ((wc = e.screenX - Vl.screenX), (zc = e.screenY - Vl.screenY))
                : (zc = wc = 0),
              (Vl = e)),
            wc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : zc;
      },
    }),
    md = dt(bi),
    w0 = v({}, bi, { dataTransfer: 0 }),
    z0 = dt(w0),
    N0 = v({}, Yl, { relatedTarget: 0 }),
    Nc = dt(N0),
    D0 = v({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    j0 = dt(D0),
    U0 = v({}, ga, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    q0 = dt(U0),
    H0 = v({}, ga, { data: 0 }),
    yd = dt(H0),
    L0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Q0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    B0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Y0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = B0[e])
        ? !!t[e]
        : !1;
  }
  function Dc() {
    return Y0;
  }
  var V0 = v({}, Yl, {
      key: function (e) {
        if (e.key) {
          var t = L0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = pi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Q0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Dc,
      charCode: function (e) {
        return e.type === "keypress" ? pi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? pi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    G0 = dt(V0),
    k0 = v({}, bi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    pd = dt(k0),
    X0 = v({}, Yl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Dc,
    }),
    Z0 = dt(X0),
    K0 = v({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    J0 = dt(K0),
    $0 = v({}, bi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    F0 = dt($0),
    P0 = v({}, ga, { newState: 0, oldState: 0 }),
    W0 = dt(P0),
    I0 = [9, 13, 27, 32],
    jc = sn && "CompositionEvent" in window,
    Gl = null;
  sn && "documentMode" in document && (Gl = document.documentMode);
  var ev = sn && "TextEvent" in window && !Gl,
    gd = sn && (!jc || (Gl && 8 < Gl && 11 >= Gl)),
    vd = " ",
    bd = !1;
  function Sd(e, t) {
    switch (e) {
      case "keyup":
        return I0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ed(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Pa = !1;
  function tv(e, t) {
    switch (e) {
      case "compositionend":
        return Ed(t);
      case "keypress":
        return t.which !== 32 ? null : ((bd = !0), vd);
      case "textInput":
        return ((e = t.data), e === vd && bd ? null : e);
      default:
        return null;
    }
  }
  function nv(e, t) {
    if (Pa)
      return e === "compositionend" || (!jc && Sd(e, t))
        ? ((e = dd()), (yi = Mc = Qn = null), (Pa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return gd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var av = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function xd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!av[e.type] : t === "textarea";
  }
  function _d(e, t, n, l) {
    ($a ? (Fa ? Fa.push(l) : (Fa = [l])) : ($a = l),
      (t = cr(t, "onChange")),
      0 < t.length &&
        ((n = new vi("onChange", "change", null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var kl = null,
    Xl = null;
  function lv(e) {
    uy(e, 0);
  }
  function Si(e) {
    var t = Ll(e);
    if (ld(t)) return e;
  }
  function Td(e, t) {
    if (e === "change") return t;
  }
  var Rd = !1;
  if (sn) {
    var Uc;
    if (sn) {
      var qc = "oninput" in document;
      if (!qc) {
        var Ad = document.createElement("div");
        (Ad.setAttribute("oninput", "return;"),
          (qc = typeof Ad.oninput == "function"));
      }
      Uc = qc;
    } else Uc = !1;
    Rd = Uc && (!document.documentMode || 9 < document.documentMode);
  }
  function Od() {
    kl && (kl.detachEvent("onpropertychange", Cd), (Xl = kl = null));
  }
  function Cd(e) {
    if (e.propertyName === "value" && Si(Xl)) {
      var t = [];
      (_d(t, Xl, e, Ac(e)), fd(lv, t));
    }
  }
  function uv(e, t, n) {
    e === "focusin"
      ? (Od(), (kl = t), (Xl = n), kl.attachEvent("onpropertychange", Cd))
      : e === "focusout" && Od();
  }
  function iv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Si(Xl);
  }
  function rv(e, t) {
    if (e === "click") return Si(t);
  }
  function cv(e, t) {
    if (e === "input" || e === "change") return Si(t);
  }
  function sv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : sv;
  function Zl(e, t) {
    if (Et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var i = n[l];
      if (!ma.call(t, i) || !Et(e[i], t[i])) return !1;
    }
    return !0;
  }
  function Md(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wd(e, t) {
    var n = Md(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Md(n);
    }
  }
  function zd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? zd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Nd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = hi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = hi(e.document);
    }
    return t;
  }
  function Hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var ov = sn && "documentMode" in document && 11 >= document.documentMode,
    Wa = null,
    Lc = null,
    Kl = null,
    Qc = !1;
  function Dd(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qc ||
      Wa == null ||
      Wa !== hi(l) ||
      ((l = Wa),
      "selectionStart" in l && Hc(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Kl && Zl(Kl, l)) ||
        ((Kl = l),
        (l = cr(Lc, "onSelect")),
        0 < l.length &&
          ((t = new vi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Wa))));
  }
  function va(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Ia = {
      animationend: va("Animation", "AnimationEnd"),
      animationiteration: va("Animation", "AnimationIteration"),
      animationstart: va("Animation", "AnimationStart"),
      transitionrun: va("Transition", "TransitionRun"),
      transitionstart: va("Transition", "TransitionStart"),
      transitioncancel: va("Transition", "TransitionCancel"),
      transitionend: va("Transition", "TransitionEnd"),
    },
    Bc = {},
    jd = {};
  sn &&
    ((jd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function ba(e) {
    if (Bc[e]) return Bc[e];
    if (!Ia[e]) return e;
    var t = Ia[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in jd) return (Bc[e] = t[n]);
    return e;
  }
  var Ud = ba("animationend"),
    qd = ba("animationiteration"),
    Hd = ba("animationstart"),
    fv = ba("transitionrun"),
    dv = ba("transitionstart"),
    hv = ba("transitioncancel"),
    Ld = ba("transitionend"),
    Qd = new Map(),
    Yc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yc.push("scrollEnd");
  function kt(e, t) {
    (Qd.set(e, t), pa(t, [e]));
  }
  var Ei =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ut = [],
    el = 0,
    Vc = 0;
  function xi() {
    for (var e = el, t = (Vc = el = 0); t < e; ) {
      var n = Ut[t];
      Ut[t++] = null;
      var l = Ut[t];
      Ut[t++] = null;
      var i = Ut[t];
      Ut[t++] = null;
      var r = Ut[t];
      if (((Ut[t++] = null), l !== null && i !== null)) {
        var d = l.pending;
        (d === null ? (i.next = i) : ((i.next = d.next), (d.next = i)),
          (l.pending = i));
      }
      r !== 0 && Bd(n, i, r);
    }
  }
  function _i(e, t, n, l) {
    ((Ut[el++] = e),
      (Ut[el++] = t),
      (Ut[el++] = n),
      (Ut[el++] = l),
      (Vc |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Gc(e, t, n, l) {
    return (_i(e, t, n, l), Ti(e));
  }
  function Sa(e, t) {
    return (_i(e, null, null, t), Ti(e));
  }
  function Bd(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var i = !1, r = e.return; r !== null; )
      ((r.childLanes |= n),
        (l = r.alternate),
        l !== null && (l.childLanes |= n),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = r),
        (r = r.return));
    return e.tag === 3
      ? ((r = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - St(n)),
          (e = r.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        r)
      : null;
  }
  function Ti(e) {
    if (50 < yu) throw ((yu = 0), (Ws = null), Error(s(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var tl = {};
  function mv(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function xt(e, t, n, l) {
    return new mv(e, t, n, l);
  }
  function kc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function on(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = xt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function Yd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ri(e, t, n, l, i, r) {
    var d = 0;
    if (((l = e), typeof e == "function")) kc(e) && (d = 1);
    else if (typeof e == "string")
      d = b1(e, n, ae.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case V:
          return ((e = xt(31, n, t, i)), (e.elementType = V), (e.lanes = r), e);
        case z:
          return Ea(n.children, i, r, t);
        case T:
          ((d = 8), (i |= 24));
          break;
        case j:
          return (
            (e = xt(12, n, t, i | 2)),
            (e.elementType = j),
            (e.lanes = r),
            e
          );
        case C:
          return ((e = xt(13, n, t, i)), (e.elementType = C), (e.lanes = r), e);
        case w:
          return ((e = xt(19, n, t, i)), (e.elementType = w), (e.lanes = r), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case E:
                d = 10;
                break e;
              case Q:
                d = 9;
                break e;
              case M:
                d = 11;
                break e;
              case U:
                d = 14;
                break e;
              case X:
                ((d = 16), (l = null));
                break e;
            }
          ((d = 29),
            (n = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = xt(d, n, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = r),
      t
    );
  }
  function Ea(e, t, n, l) {
    return ((e = xt(7, e, l, t)), (e.lanes = n), e);
  }
  function Xc(e, t, n) {
    return ((e = xt(6, e, null, t)), (e.lanes = n), e);
  }
  function Vd(e) {
    var t = xt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Zc(e, t, n) {
    return (
      (t = xt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Gd = new WeakMap();
  function qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Gd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Ba(t) }), Gd.set(e, t), t);
    }
    return { value: e, source: t, stack: Ba(t) };
  }
  var nl = [],
    al = 0,
    Ai = null,
    Jl = 0,
    Ht = [],
    Lt = 0,
    Bn = null,
    It = 1,
    en = "";
  function fn(e, t) {
    ((nl[al++] = Jl), (nl[al++] = Ai), (Ai = e), (Jl = t));
  }
  function kd(e, t, n) {
    ((Ht[Lt++] = It), (Ht[Lt++] = en), (Ht[Lt++] = Bn), (Bn = e));
    var l = It;
    e = en;
    var i = 32 - St(l) - 1;
    ((l &= ~(1 << i)), (n += 1));
    var r = 32 - St(t) + i;
    if (30 < r) {
      var d = i - (i % 5);
      ((r = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (i -= d),
        (It = (1 << (32 - St(t) + i)) | (n << i) | l),
        (en = r + e));
    } else ((It = (1 << r) | (n << i) | l), (en = e));
  }
  function Kc(e) {
    e.return !== null && (fn(e, 1), kd(e, 1, 0));
  }
  function Jc(e) {
    for (; e === Ai; )
      ((Ai = nl[--al]), (nl[al] = null), (Jl = nl[--al]), (nl[al] = null));
    for (; e === Bn; )
      ((Bn = Ht[--Lt]),
        (Ht[Lt] = null),
        (en = Ht[--Lt]),
        (Ht[Lt] = null),
        (It = Ht[--Lt]),
        (Ht[Lt] = null));
  }
  function Xd(e, t) {
    ((Ht[Lt++] = It),
      (Ht[Lt++] = en),
      (Ht[Lt++] = Bn),
      (It = t.id),
      (en = t.overflow),
      (Bn = e));
  }
  var nt = null,
    je = null,
    Te = !1,
    Yn = null,
    Qt = !1,
    $c = Error(s(519));
  function Vn(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw ($l(qt(t, e)), $c);
  }
  function Zd(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[tt] = e), (t[ft] = l), n)) {
      case "dialog":
        (Ee("cancel", t), Ee("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ee("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < gu.length; n++) Ee(gu[n], t);
        break;
      case "source":
        Ee("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ee("error", t), Ee("load", t));
        break;
      case "details":
        Ee("toggle", t);
        break;
      case "input":
        (Ee("invalid", t),
          ud(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        Ee("invalid", t);
        break;
      case "textarea":
        (Ee("invalid", t), rd(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      sy(t.textContent, n)
        ? (l.popover != null && (Ee("beforetoggle", t), Ee("toggle", t)),
          l.onScroll != null && Ee("scroll", t),
          l.onScrollEnd != null && Ee("scrollend", t),
          l.onClick != null && (t.onclick = cn),
          (t = !0))
        : (t = !1),
      t || Vn(e, !0));
  }
  function Kd(e) {
    for (nt = e.return; nt; )
      switch (nt.tag) {
        case 5:
        case 31:
        case 13:
          Qt = !1;
          return;
        case 27:
        case 3:
          Qt = !0;
          return;
        default:
          nt = nt.return;
      }
  }
  function ll(e) {
    if (e !== nt) return !1;
    if (!Te) return (Kd(e), (Te = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || mo(e.type, e.memoizedProps))),
        (n = !n)),
      n && je && Vn(e),
      Kd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      je = vy(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      je = vy(e);
    } else
      t === 27
        ? ((t = je), na(e.type) ? ((e = bo), (bo = null), (je = e)) : (je = t))
        : (je = nt ? Yt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function xa() {
    ((je = nt = null), (Te = !1));
  }
  function Fc() {
    var e = Yn;
    return (
      e !== null &&
        (pt === null ? (pt = e) : pt.push.apply(pt, e), (Yn = null)),
      e
    );
  }
  function $l(e) {
    Yn === null ? (Yn = [e]) : Yn.push(e);
  }
  var Pc = x(null),
    _a = null,
    dn = null;
  function Gn(e, t, n) {
    (le(Pc, t._currentValue), (t._currentValue = n));
  }
  function hn(e) {
    ((e._currentValue = Pc.current), $(Pc));
  }
  function Wc(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ic(e, t, n, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var d = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = i;
          for (var O = 0; O < t.length; O++)
            if (g.context === t[O]) {
              ((r.lanes |= n),
                (g = r.alternate),
                g !== null && (g.lanes |= n),
                Wc(r.return, n, e),
                l || (d = null));
              break e;
            }
          r = g.next;
        }
      } else if (i.tag === 18) {
        if (((d = i.return), d === null)) throw Error(s(341));
        ((d.lanes |= n),
          (r = d.alternate),
          r !== null && (r.lanes |= n),
          Wc(d, n, e),
          (d = null));
      } else d = i.child;
      if (d !== null) d.return = i;
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((i = d.sibling), i !== null)) {
            ((i.return = d.return), (d = i));
            break;
          }
          d = d.return;
        }
      i = d;
    }
  }
  function ul(e, t, n, l) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = i.type;
          Et(i.pendingProps.value, d.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (i === re.current) {
        if (((d = i.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(xu) : (e = [xu]));
      }
      i = i.return;
    }
    (e !== null && Ic(t, e, n, l), (t.flags |= 262144));
  }
  function Oi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ta(e) {
    ((_a = e),
      (dn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function at(e) {
    return Jd(_a, e);
  }
  function Ci(e, t) {
    return (_a === null && Ta(e), Jd(e, t));
  }
  function Jd(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), dn === null)) {
      if (e === null) throw Error(s(308));
      ((dn = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else dn = dn.next = t;
    return n;
  }
  var yv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    pv = a.unstable_scheduleCallback,
    gv = a.unstable_NormalPriority,
    Ge = {
      $$typeof: E,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function es() {
    return { controller: new yv(), data: new Map(), refCount: 0 };
  }
  function Fl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        pv(gv, function () {
          e.controller.abort();
        }));
  }
  var Pl = null,
    ts = 0,
    il = 0,
    rl = null;
  function vv(e, t) {
    if (Pl === null) {
      var n = (Pl = []);
      ((ts = 0),
        (il = lo()),
        (rl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (ts++, t.then($d, $d), t);
  }
  function $d() {
    if (--ts === 0 && Pl !== null) {
      rl !== null && (rl.status = "fulfilled");
      var e = Pl;
      ((Pl = null), (il = 0), (rl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bv(e, t) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          n.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var i = 0; i < n.length; i++) (0, n[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)
            (0, n[i])(void 0);
        },
      ),
      l
    );
  }
  var Fd = L.S;
  L.S = function (e, t) {
    ((Dm = vt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        vv(e, t),
      Fd !== null && Fd(e, t));
  };
  var Ra = x(null);
  function ns() {
    var e = Ra.current;
    return e !== null ? e : De.pooledCache;
  }
  function Mi(e, t) {
    t === null ? le(Ra, Ra.current) : le(Ra, t.pool);
  }
  function Pd() {
    var e = ns();
    return e === null ? null : { parent: Ge._currentValue, pool: e };
  }
  var cl = Error(s(460)),
    as = Error(s(474)),
    wi = Error(s(542)),
    zi = { then: function () {} };
  function Wd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Id(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), th(e), e);
      default:
        if (typeof t.status == "string") t.then(cn, cn);
        else {
          if (((e = De), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), th(e), e);
        }
        throw ((Oa = t), cl);
    }
  }
  function Aa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Oa = n), cl)
        : n;
    }
  }
  var Oa = null;
  function eh() {
    if (Oa === null) throw Error(s(459));
    var e = Oa;
    return ((Oa = null), e);
  }
  function th(e) {
    if (e === cl || e === wi) throw Error(s(483));
  }
  var sl = null,
    Wl = 0;
  function Ni(e) {
    var t = Wl;
    return ((Wl += 1), sl === null && (sl = []), Id(sl, e, t));
  }
  function Il(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Di(e, t) {
    throw t.$$typeof === _
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function nh(e) {
    function t(B, D) {
      if (e) {
        var G = B.deletions;
        G === null ? ((B.deletions = [D]), (B.flags |= 16)) : G.push(D);
      }
    }
    function n(B, D) {
      if (!e) return null;
      for (; D !== null; ) (t(B, D), (D = D.sibling));
      return null;
    }
    function l(B) {
      for (var D = new Map(); B !== null; )
        (B.key !== null ? D.set(B.key, B) : D.set(B.index, B), (B = B.sibling));
      return D;
    }
    function i(B, D) {
      return ((B = on(B, D)), (B.index = 0), (B.sibling = null), B);
    }
    function r(B, D, G) {
      return (
        (B.index = G),
        e
          ? ((G = B.alternate),
            G !== null
              ? ((G = G.index), G < D ? ((B.flags |= 67108866), D) : G)
              : ((B.flags |= 67108866), D))
          : ((B.flags |= 1048576), D)
      );
    }
    function d(B) {
      return (e && B.alternate === null && (B.flags |= 67108866), B);
    }
    function g(B, D, G, I) {
      return D === null || D.tag !== 6
        ? ((D = Xc(G, B.mode, I)), (D.return = B), D)
        : ((D = i(D, G)), (D.return = B), D);
    }
    function O(B, D, G, I) {
      var he = G.type;
      return he === z
        ? F(B, D, G.props.children, I, G.key)
        : D !== null &&
            (D.elementType === he ||
              (typeof he == "object" &&
                he !== null &&
                he.$$typeof === X &&
                Aa(he) === D.type))
          ? ((D = i(D, G.props)), Il(D, G), (D.return = B), D)
          : ((D = Ri(G.type, G.key, G.props, null, B.mode, I)),
            Il(D, G),
            (D.return = B),
            D);
    }
    function k(B, D, G, I) {
      return D === null ||
        D.tag !== 4 ||
        D.stateNode.containerInfo !== G.containerInfo ||
        D.stateNode.implementation !== G.implementation
        ? ((D = Zc(G, B.mode, I)), (D.return = B), D)
        : ((D = i(D, G.children || [])), (D.return = B), D);
    }
    function F(B, D, G, I, he) {
      return D === null || D.tag !== 7
        ? ((D = Ea(G, B.mode, I, he)), (D.return = B), D)
        : ((D = i(D, G)), (D.return = B), D);
    }
    function te(B, D, G) {
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return ((D = Xc("" + D, B.mode, G)), (D.return = B), D);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case S:
            return (
              (G = Ri(D.type, D.key, D.props, null, B.mode, G)),
              Il(G, D),
              (G.return = B),
              G
            );
          case A:
            return ((D = Zc(D, B.mode, G)), (D.return = B), D);
          case X:
            return ((D = Aa(D)), te(B, D, G));
        }
        if (ue(D) || H(D))
          return ((D = Ea(D, B.mode, G, null)), (D.return = B), D);
        if (typeof D.then == "function") return te(B, Ni(D), G);
        if (D.$$typeof === E) return te(B, Ci(B, D), G);
        Di(B, D);
      }
      return null;
    }
    function Z(B, D, G, I) {
      var he = D !== null ? D.key : null;
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return he !== null ? null : g(B, D, "" + G, I);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case S:
            return G.key === he ? O(B, D, G, I) : null;
          case A:
            return G.key === he ? k(B, D, G, I) : null;
          case X:
            return ((G = Aa(G)), Z(B, D, G, I));
        }
        if (ue(G) || H(G)) return he !== null ? null : F(B, D, G, I, null);
        if (typeof G.then == "function") return Z(B, D, Ni(G), I);
        if (G.$$typeof === E) return Z(B, D, Ci(B, G), I);
        Di(B, G);
      }
      return null;
    }
    function J(B, D, G, I, he) {
      if (
        (typeof I == "string" && I !== "") ||
        typeof I == "number" ||
        typeof I == "bigint"
      )
        return ((B = B.get(G) || null), g(D, B, "" + I, he));
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case S:
            return (
              (B = B.get(I.key === null ? G : I.key) || null),
              O(D, B, I, he)
            );
          case A:
            return (
              (B = B.get(I.key === null ? G : I.key) || null),
              k(D, B, I, he)
            );
          case X:
            return ((I = Aa(I)), J(B, D, G, I, he));
        }
        if (ue(I) || H(I))
          return ((B = B.get(G) || null), F(D, B, I, he, null));
        if (typeof I.then == "function") return J(B, D, G, Ni(I), he);
        if (I.$$typeof === E) return J(B, D, G, Ci(D, I), he);
        Di(D, I);
      }
      return null;
    }
    function se(B, D, G, I) {
      for (
        var he = null, Re = null, fe = D, ge = (D = 0), _e = null;
        fe !== null && ge < G.length;
        ge++
      ) {
        fe.index > ge ? ((_e = fe), (fe = null)) : (_e = fe.sibling);
        var Ae = Z(B, fe, G[ge], I);
        if (Ae === null) {
          fe === null && (fe = _e);
          break;
        }
        (e && fe && Ae.alternate === null && t(B, fe),
          (D = r(Ae, D, ge)),
          Re === null ? (he = Ae) : (Re.sibling = Ae),
          (Re = Ae),
          (fe = _e));
      }
      if (ge === G.length) return (n(B, fe), Te && fn(B, ge), he);
      if (fe === null) {
        for (; ge < G.length; ge++)
          ((fe = te(B, G[ge], I)),
            fe !== null &&
              ((D = r(fe, D, ge)),
              Re === null ? (he = fe) : (Re.sibling = fe),
              (Re = fe)));
        return (Te && fn(B, ge), he);
      }
      for (fe = l(fe); ge < G.length; ge++)
        ((_e = J(fe, B, ge, G[ge], I)),
          _e !== null &&
            (e &&
              _e.alternate !== null &&
              fe.delete(_e.key === null ? ge : _e.key),
            (D = r(_e, D, ge)),
            Re === null ? (he = _e) : (Re.sibling = _e),
            (Re = _e)));
      return (
        e &&
          fe.forEach(function (ra) {
            return t(B, ra);
          }),
        Te && fn(B, ge),
        he
      );
    }
    function me(B, D, G, I) {
      if (G == null) throw Error(s(151));
      for (
        var he = null,
          Re = null,
          fe = D,
          ge = (D = 0),
          _e = null,
          Ae = G.next();
        fe !== null && !Ae.done;
        ge++, Ae = G.next()
      ) {
        fe.index > ge ? ((_e = fe), (fe = null)) : (_e = fe.sibling);
        var ra = Z(B, fe, Ae.value, I);
        if (ra === null) {
          fe === null && (fe = _e);
          break;
        }
        (e && fe && ra.alternate === null && t(B, fe),
          (D = r(ra, D, ge)),
          Re === null ? (he = ra) : (Re.sibling = ra),
          (Re = ra),
          (fe = _e));
      }
      if (Ae.done) return (n(B, fe), Te && fn(B, ge), he);
      if (fe === null) {
        for (; !Ae.done; ge++, Ae = G.next())
          ((Ae = te(B, Ae.value, I)),
            Ae !== null &&
              ((D = r(Ae, D, ge)),
              Re === null ? (he = Ae) : (Re.sibling = Ae),
              (Re = Ae)));
        return (Te && fn(B, ge), he);
      }
      for (fe = l(fe); !Ae.done; ge++, Ae = G.next())
        ((Ae = J(fe, B, ge, Ae.value, I)),
          Ae !== null &&
            (e &&
              Ae.alternate !== null &&
              fe.delete(Ae.key === null ? ge : Ae.key),
            (D = r(Ae, D, ge)),
            Re === null ? (he = Ae) : (Re.sibling = Ae),
            (Re = Ae)));
      return (
        e &&
          fe.forEach(function (w1) {
            return t(B, w1);
          }),
        Te && fn(B, ge),
        he
      );
    }
    function Ne(B, D, G, I) {
      if (
        (typeof G == "object" &&
          G !== null &&
          G.type === z &&
          G.key === null &&
          (G = G.props.children),
        typeof G == "object" && G !== null)
      ) {
        switch (G.$$typeof) {
          case S:
            e: {
              for (var he = G.key; D !== null; ) {
                if (D.key === he) {
                  if (((he = G.type), he === z)) {
                    if (D.tag === 7) {
                      (n(B, D.sibling),
                        (I = i(D, G.props.children)),
                        (I.return = B),
                        (B = I));
                      break e;
                    }
                  } else if (
                    D.elementType === he ||
                    (typeof he == "object" &&
                      he !== null &&
                      he.$$typeof === X &&
                      Aa(he) === D.type)
                  ) {
                    (n(B, D.sibling),
                      (I = i(D, G.props)),
                      Il(I, G),
                      (I.return = B),
                      (B = I));
                    break e;
                  }
                  n(B, D);
                  break;
                } else t(B, D);
                D = D.sibling;
              }
              G.type === z
                ? ((I = Ea(G.props.children, B.mode, I, G.key)),
                  (I.return = B),
                  (B = I))
                : ((I = Ri(G.type, G.key, G.props, null, B.mode, I)),
                  Il(I, G),
                  (I.return = B),
                  (B = I));
            }
            return d(B);
          case A:
            e: {
              for (he = G.key; D !== null; ) {
                if (D.key === he)
                  if (
                    D.tag === 4 &&
                    D.stateNode.containerInfo === G.containerInfo &&
                    D.stateNode.implementation === G.implementation
                  ) {
                    (n(B, D.sibling),
                      (I = i(D, G.children || [])),
                      (I.return = B),
                      (B = I));
                    break e;
                  } else {
                    n(B, D);
                    break;
                  }
                else t(B, D);
                D = D.sibling;
              }
              ((I = Zc(G, B.mode, I)), (I.return = B), (B = I));
            }
            return d(B);
          case X:
            return ((G = Aa(G)), Ne(B, D, G, I));
        }
        if (ue(G)) return se(B, D, G, I);
        if (H(G)) {
          if (((he = H(G)), typeof he != "function")) throw Error(s(150));
          return ((G = he.call(G)), me(B, D, G, I));
        }
        if (typeof G.then == "function") return Ne(B, D, Ni(G), I);
        if (G.$$typeof === E) return Ne(B, D, Ci(B, G), I);
        Di(B, G);
      }
      return (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
        ? ((G = "" + G),
          D !== null && D.tag === 6
            ? (n(B, D.sibling), (I = i(D, G)), (I.return = B), (B = I))
            : (n(B, D), (I = Xc(G, B.mode, I)), (I.return = B), (B = I)),
          d(B))
        : n(B, D);
    }
    return function (B, D, G, I) {
      try {
        Wl = 0;
        var he = Ne(B, D, G, I);
        return ((sl = null), he);
      } catch (fe) {
        if (fe === cl || fe === wi) throw fe;
        var Re = xt(29, fe, null, B.mode);
        return ((Re.lanes = I), (Re.return = B), Re);
      }
    };
  }
  var Ca = nh(!0),
    ah = nh(!1),
    kn = !1;
  function ls(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function us(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Zn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Oe & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Ti(e)),
        Bd(e, null, n),
        t
      );
    }
    return (_i(e, l, t, n), Ti(e));
  }
  function eu(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Jf(e, n));
    }
  }
  function is(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var i = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (i = r = d) : (r = r.next = d), (n = n.next));
        } while (n !== null);
        r === null ? (i = r = t) : (r = r.next = t);
      } else i = r = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var rs = !1;
  function tu() {
    if (rs) {
      var e = rl;
      if (e !== null) throw e;
    }
  }
  function nu(e, t, n, l) {
    rs = !1;
    var i = e.updateQueue;
    kn = !1;
    var r = i.firstBaseUpdate,
      d = i.lastBaseUpdate,
      g = i.shared.pending;
    if (g !== null) {
      i.shared.pending = null;
      var O = g,
        k = O.next;
      ((O.next = null), d === null ? (r = k) : (d.next = k), (d = O));
      var F = e.alternate;
      F !== null &&
        ((F = F.updateQueue),
        (g = F.lastBaseUpdate),
        g !== d &&
          (g === null ? (F.firstBaseUpdate = k) : (g.next = k),
          (F.lastBaseUpdate = O)));
    }
    if (r !== null) {
      var te = i.baseState;
      ((d = 0), (F = k = O = null), (g = r));
      do {
        var Z = g.lane & -536870913,
          J = Z !== g.lane;
        if (J ? (xe & Z) === Z : (l & Z) === Z) {
          (Z !== 0 && Z === il && (rs = !0),
            F !== null &&
              (F = F.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var se = e,
              me = g;
            Z = t;
            var Ne = n;
            switch (me.tag) {
              case 1:
                if (((se = me.payload), typeof se == "function")) {
                  te = se.call(Ne, te, Z);
                  break e;
                }
                te = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = me.payload),
                  (Z = typeof se == "function" ? se.call(Ne, te, Z) : se),
                  Z == null)
                )
                  break e;
                te = v({}, te, Z);
                break e;
              case 2:
                kn = !0;
            }
          }
          ((Z = g.callback),
            Z !== null &&
              ((e.flags |= 64),
              J && (e.flags |= 8192),
              (J = i.callbacks),
              J === null ? (i.callbacks = [Z]) : J.push(Z)));
        } else
          ((J = {
            lane: Z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            F === null ? ((k = F = J), (O = te)) : (F = F.next = J),
            (d |= Z));
        if (((g = g.next), g === null)) {
          if (((g = i.shared.pending), g === null)) break;
          ((J = g),
            (g = J.next),
            (J.next = null),
            (i.lastBaseUpdate = J),
            (i.shared.pending = null));
        }
      } while (!0);
      (F === null && (O = te),
        (i.baseState = O),
        (i.firstBaseUpdate = k),
        (i.lastBaseUpdate = F),
        r === null && (i.shared.lanes = 0),
        (Pn |= d),
        (e.lanes = d),
        (e.memoizedState = te));
    }
  }
  function lh(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function uh(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) lh(n[e], t);
  }
  var ol = x(null),
    ji = x(0);
  function ih(e, t) {
    ((e = xn), le(ji, e), le(ol, t), (xn = e | t.baseLanes));
  }
  function cs() {
    (le(ji, xn), le(ol, ol.current));
  }
  function ss() {
    ((xn = ji.current), $(ol), $(ji));
  }
  var _t = x(null),
    Bt = null;
  function Kn(e) {
    var t = e.alternate;
    (le(Ye, Ye.current & 1),
      le(_t, e),
      Bt === null &&
        (t === null || ol.current !== null || t.memoizedState !== null) &&
        (Bt = e));
  }
  function os(e) {
    (le(Ye, Ye.current), le(_t, e), Bt === null && (Bt = e));
  }
  function rh(e) {
    e.tag === 22
      ? (le(Ye, Ye.current), le(_t, e), Bt === null && (Bt = e))
      : Jn();
  }
  function Jn() {
    (le(Ye, Ye.current), le(_t, _t.current));
  }
  function Tt(e) {
    ($(_t), Bt === e && (Bt = null), $(Ye));
  }
  var Ye = x(0);
  function Ui(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || go(n) || vo(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var mn = 0,
    pe = null,
    we = null,
    ke = null,
    qi = !1,
    fl = !1,
    Ma = !1,
    Hi = 0,
    au = 0,
    dl = null,
    Sv = 0;
  function Qe() {
    throw Error(s(321));
  }
  function fs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function ds(e, t, n, l, i, r) {
    return (
      (mn = r),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? kh : Os),
      (Ma = !1),
      (r = n(l, i)),
      (Ma = !1),
      fl && (r = sh(t, n, l, i)),
      ch(e),
      r
    );
  }
  function ch(e) {
    L.H = iu;
    var t = we !== null && we.next !== null;
    if (((mn = 0), (ke = we = pe = null), (qi = !1), (au = 0), (dl = null), t))
      throw Error(s(300));
    e === null ||
      Xe ||
      ((e = e.dependencies), e !== null && Oi(e) && (Xe = !0));
  }
  function sh(e, t, n, l) {
    pe = e;
    var i = 0;
    do {
      if ((fl && (dl = null), (au = 0), (fl = !1), 25 <= i))
        throw Error(s(301));
      if (((i += 1), (ke = we = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((L.H = Xh), (r = t(n, l)));
    } while (fl);
    return r;
  }
  function Ev() {
    var e = L.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? lu(t) : t),
      (e = e.useState()[0]),
      (we !== null ? we.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function hs() {
    var e = Hi !== 0;
    return ((Hi = 0), e);
  }
  function ms(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function ys(e) {
    if (qi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      qi = !1;
    }
    ((mn = 0), (ke = we = pe = null), (fl = !1), (au = Hi = 0), (dl = null));
  }
  function ot() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e), ke);
  }
  function Ve() {
    if (we === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = ke === null ? pe.memoizedState : ke.next;
    if (t !== null) ((ke = t), (we = e));
    else {
      if (e === null)
        throw pe.alternate === null ? Error(s(467)) : Error(s(310));
      ((we = e),
        (e = {
          memoizedState: we.memoizedState,
          baseState: we.baseState,
          baseQueue: we.baseQueue,
          queue: we.queue,
          next: null,
        }),
        ke === null ? (pe.memoizedState = ke = e) : (ke = ke.next = e));
    }
    return ke;
  }
  function Li() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(e) {
    var t = au;
    return (
      (au += 1),
      dl === null && (dl = []),
      (e = Id(dl, e, t)),
      (t = pe),
      (ke === null ? t.memoizedState : ke.next) === null &&
        ((t = t.alternate),
        (L.H = t === null || t.memoizedState === null ? kh : Os)),
      e
    );
  }
  function Qi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return lu(e);
      if (e.$$typeof === E) return at(e);
    }
    throw Error(s(438, String(e)));
  }
  function ps(e) {
    var t = null,
      n = pe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = pe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Li()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Y;
    return (t.index++, n);
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bi(e) {
    var t = Ve();
    return gs(t, we, e);
  }
  function gs(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var i = e.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (i !== null) {
        var d = i.next;
        ((i.next = r.next), (r.next = d));
      }
      ((t.baseQueue = i = r), (l.pending = null));
    }
    if (((r = e.baseState), i === null)) e.memoizedState = r;
    else {
      t = i.next;
      var g = (d = null),
        O = null,
        k = t,
        F = !1;
      do {
        var te = k.lane & -536870913;
        if (te !== k.lane ? (xe & te) === te : (mn & te) === te) {
          var Z = k.revertLane;
          if (Z === 0)
            (O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              te === il && (F = !0));
          else if ((mn & Z) === Z) {
            ((k = k.next), Z === il && (F = !0));
            continue;
          } else
            ((te = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              O === null ? ((g = O = te), (d = r)) : (O = O.next = te),
              (pe.lanes |= Z),
              (Pn |= Z));
          ((te = k.action),
            Ma && n(r, te),
            (r = k.hasEagerState ? k.eagerState : n(r, te)));
        } else
          ((Z = {
            lane: te,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            O === null ? ((g = O = Z), (d = r)) : (O = O.next = Z),
            (pe.lanes |= te),
            (Pn |= te));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (O === null ? (d = r) : (O.next = g),
        !Et(r, e.memoizedState) && ((Xe = !0), F && ((n = rl), n !== null)))
      )
        throw n;
      ((e.memoizedState = r),
        (e.baseState = d),
        (e.baseQueue = O),
        (l.lastRenderedState = r));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function vs(e) {
    var t = Ve(),
      n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      i = n.pending,
      r = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = (i = i.next);
      do ((r = e(r, d.action)), (d = d.next));
      while (d !== i);
      (Et(r, t.memoizedState) || (Xe = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, l];
  }
  function oh(e, t, n) {
    var l = pe,
      i = Ve(),
      r = Te;
    if (r) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var d = !Et((we || i).memoizedState, n);
    if (
      (d && ((i.memoizedState = n), (Xe = !0)),
      (i = i.queue),
      Es(hh.bind(null, l, i, e), [e]),
      i.getSnapshot !== t || d || (ke !== null && ke.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        hl(9, { destroy: void 0 }, dh.bind(null, l, i, n, t), null),
        De === null)
      )
        throw Error(s(349));
      r || (mn & 127) !== 0 || fh(l, t, n);
    }
    return n;
  }
  function fh(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = Li()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function dh(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), mh(t) && yh(e));
  }
  function hh(e, t, n) {
    return n(function () {
      mh(t) && yh(e);
    });
  }
  function mh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function yh(e) {
    var t = Sa(e, 2);
    t !== null && gt(t, e, 2);
  }
  function bs(e) {
    var t = ot();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), Ma)) {
        Hn(!0);
        try {
          n();
        } finally {
          Hn(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ph(e, t, n, l) {
    return ((e.baseState = n), gs(e, we, typeof l == "function" ? l : yn));
  }
  function xv(e, t, n, l, i) {
    if (Gi(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          r.listeners.push(d);
        },
      };
      (L.T !== null ? n(!0) : (r.isTransition = !1),
        l(r),
        (n = t.pending),
        n === null
          ? ((r.next = t.pending = r), gh(t, r))
          : ((r.next = n.next), (t.pending = n.next = r)));
    }
  }
  function gh(e, t) {
    var n = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var r = L.T,
        d = {};
      L.T = d;
      try {
        var g = n(i, l),
          O = L.S;
        (O !== null && O(d, g), vh(e, t, g));
      } catch (k) {
        Ss(e, t, k);
      } finally {
        (r !== null && d.types !== null && (r.types = d.types), (L.T = r));
      }
    } else
      try {
        ((r = n(i, l)), vh(e, t, r));
      } catch (k) {
        Ss(e, t, k);
      }
  }
  function vh(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            bh(e, t, l);
          },
          function (l) {
            return Ss(e, t, l);
          },
        )
      : bh(e, t, n);
  }
  function bh(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Sh(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), gh(e, n))));
  }
  function Ss(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = n), Sh(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Sh(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Eh(e, t) {
    return t;
  }
  function xh(e, t) {
    if (Te) {
      var n = De.formState;
      if (n !== null) {
        e: {
          var l = pe;
          if (Te) {
            if (je) {
              t: {
                for (var i = je, r = Qt; i.nodeType !== 8; ) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (((i = Yt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((r = i.data), (i = r === "F!" || r === "F" ? i : null));
              }
              if (i) {
                ((je = Yt(i.nextSibling)), (l = i.data === "F!"));
                break e;
              }
            }
            Vn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = ot()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Eh,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Yh.bind(null, pe, l)),
      (l.dispatch = n),
      (l = bs(!1)),
      (r = As.bind(null, pe, !1, l.queue)),
      (l = ot()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (n = xv.bind(null, pe, i, r, n)),
      (i.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function _h(e) {
    var t = Ve();
    return Th(t, we, e);
  }
  function Th(e, t, n) {
    if (
      ((t = gs(e, t, Eh)[0]),
      (e = Bi(yn)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = lu(t);
      } catch (d) {
        throw d === cl ? wi : d;
      }
    else l = t;
    t = Ve();
    var i = t.queue,
      r = i.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048),
        hl(9, { destroy: void 0 }, _v.bind(null, i, n), null)),
      [l, r, e]
    );
  }
  function _v(e, t) {
    e.action = t;
  }
  function Rh(e) {
    var t = Ve(),
      n = we;
    if (n !== null) return Th(t, n, e);
    (Ve(), (t = t.memoizedState), (n = Ve()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function hl(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = Li()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Ah() {
    return Ve().memoizedState;
  }
  function Yi(e, t, n, l) {
    var i = ot();
    ((pe.flags |= e),
      (i.memoizedState = hl(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function Vi(e, t, n, l) {
    var i = Ve();
    l = l === void 0 ? null : l;
    var r = i.memoizedState.inst;
    we !== null && l !== null && fs(l, we.memoizedState.deps)
      ? (i.memoizedState = hl(t, r, n, l))
      : ((pe.flags |= e), (i.memoizedState = hl(1 | t, r, n, l)));
  }
  function Oh(e, t) {
    Yi(8390656, 8, e, t);
  }
  function Es(e, t) {
    Vi(2048, 8, e, t);
  }
  function Tv(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = Li()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Ch(e) {
    var t = Ve().memoizedState;
    return (
      Tv({ ref: t, nextImpl: e }),
      function () {
        if ((Oe & 2) !== 0) throw Error(s(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Mh(e, t) {
    return Vi(4, 2, e, t);
  }
  function wh(e, t) {
    return Vi(4, 4, e, t);
  }
  function zh(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Nh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), Vi(4, 4, zh.bind(null, t, e), n));
  }
  function xs() {}
  function Dh(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && fs(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function jh(e, t) {
    var n = Ve();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && fs(t, l[1])) return l[0];
    if (((l = e()), Ma)) {
      Hn(!0);
      try {
        e();
      } finally {
        Hn(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function _s(e, t, n) {
    return n === void 0 || ((mn & 1073741824) !== 0 && (xe & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Um()), (pe.lanes |= e), (Pn |= e), n);
  }
  function Uh(e, t, n, l) {
    return Et(n, t)
      ? n
      : ol.current !== null
        ? ((e = _s(e, n, l)), Et(e, t) || (Xe = !0), e)
        : (mn & 42) === 0 || ((mn & 1073741824) !== 0 && (xe & 261930) === 0)
          ? ((Xe = !0), (e.memoizedState = n))
          : ((e = Um()), (pe.lanes |= e), (Pn |= e), t);
  }
  function qh(e, t, n, l, i) {
    var r = P.p;
    P.p = r !== 0 && 8 > r ? r : 8;
    var d = L.T,
      g = {};
    ((L.T = g), As(e, !1, t, n));
    try {
      var O = i(),
        k = L.S;
      if (
        (k !== null && k(g, O),
        O !== null && typeof O == "object" && typeof O.then == "function")
      ) {
        var F = bv(O, l);
        uu(e, t, F, Ot(e));
      } else uu(e, t, l, Ot(e));
    } catch (te) {
      uu(e, t, { then: function () {}, status: "rejected", reason: te }, Ot());
    } finally {
      ((P.p = r),
        d !== null && g.types !== null && (d.types = g.types),
        (L.T = d));
    }
  }
  function Rv() {}
  function Ts(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var i = Hh(e).queue;
    qh(
      e,
      i,
      t,
      ee,
      n === null
        ? Rv
        : function () {
            return (Lh(e), n(l));
          },
    );
  }
  function Hh(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: ee,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Lh(e) {
    var t = Hh(e);
    (t.next === null && (t = e.alternate.memoizedState),
      uu(e, t.next.queue, {}, Ot()));
  }
  function Rs() {
    return at(xu);
  }
  function Qh() {
    return Ve().memoizedState;
  }
  function Bh() {
    return Ve().memoizedState;
  }
  function Av(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ot();
          e = Xn(n);
          var l = Zn(t, e, n);
          (l !== null && (gt(l, t, n), eu(l, t, n)),
            (t = { cache: es() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ov(e, t, n) {
    var l = Ot();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Gi(e)
        ? Vh(t, n)
        : ((n = Gc(e, t, n, l)), n !== null && (gt(n, e, l), Gh(n, t, l))));
  }
  function Yh(e, t, n) {
    var l = Ot();
    uu(e, t, n, l);
  }
  function uu(e, t, n, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Gi(e)) Vh(t, i);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = r(d, n);
          if (((i.hasEagerState = !0), (i.eagerState = g), Et(g, d)))
            return (_i(e, t, i, 0), De === null && xi(), !1);
        } catch {}
      if (((n = Gc(e, t, i, l)), n !== null))
        return (gt(n, e, l), Gh(n, t, l), !0);
    }
    return !1;
  }
  function As(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: lo(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Gi(e))
    ) {
      if (t) throw Error(s(479));
    } else ((t = Gc(e, n, l, 2)), t !== null && gt(t, e, 2));
  }
  function Gi(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Vh(e, t) {
    fl = qi = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Gh(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Jf(e, n));
    }
  }
  var iu = {
    readContext: at,
    use: Qi,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useLayoutEffect: Qe,
    useInsertionEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    useHostTransitionStatus: Qe,
    useFormState: Qe,
    useActionState: Qe,
    useOptimistic: Qe,
    useMemoCache: Qe,
    useCacheRefresh: Qe,
  };
  iu.useEffectEvent = Qe;
  var kh = {
      readContext: at,
      use: Qi,
      useCallback: function (e, t) {
        return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: at,
      useEffect: Oh,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Yi(4194308, 4, zh.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Yi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Yi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var l = e();
        if (Ma) {
          Hn(!0);
          try {
            e();
          } finally {
            Hn(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = ot();
        if (n !== void 0) {
          var i = n(t);
          if (Ma) {
            Hn(!0);
            try {
              n(t);
            } finally {
              Hn(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = Ov.bind(null, pe, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ot();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = bs(e);
        var t = e.queue,
          n = Yh.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: xs,
      useDeferredValue: function (e, t) {
        var n = ot();
        return _s(n, e, t);
      },
      useTransition: function () {
        var e = bs(!1);
        return (
          (e = qh.bind(null, pe, e.queue, !0, !1)),
          (ot().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = pe,
          i = ot();
        if (Te) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = t()), De === null)) throw Error(s(349));
          (xe & 127) !== 0 || fh(l, t, n);
        }
        i.memoizedState = n;
        var r = { value: n, getSnapshot: t };
        return (
          (i.queue = r),
          Oh(hh.bind(null, l, r, e), [e]),
          (l.flags |= 2048),
          hl(9, { destroy: void 0 }, dh.bind(null, l, r, n, t), null),
          n
        );
      },
      useId: function () {
        var e = ot(),
          t = De.identifierPrefix;
        if (Te) {
          var n = en,
            l = It;
          ((n = (l & ~(1 << (32 - St(l) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = Hi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = Sv++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Rs,
      useFormState: xh,
      useActionState: xh,
      useOptimistic: function (e) {
        var t = ot();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = As.bind(null, pe, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: ps,
      useCacheRefresh: function () {
        return (ot().memoizedState = Av.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = ot(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Oe & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Os = {
      readContext: at,
      use: Qi,
      useCallback: Dh,
      useContext: at,
      useEffect: Es,
      useImperativeHandle: Nh,
      useInsertionEffect: Mh,
      useLayoutEffect: wh,
      useMemo: jh,
      useReducer: Bi,
      useRef: Ah,
      useState: function () {
        return Bi(yn);
      },
      useDebugValue: xs,
      useDeferredValue: function (e, t) {
        var n = Ve();
        return Uh(n, we.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Bi(yn)[0],
          t = Ve().memoizedState;
        return [typeof e == "boolean" ? e : lu(e), t];
      },
      useSyncExternalStore: oh,
      useId: Qh,
      useHostTransitionStatus: Rs,
      useFormState: _h,
      useActionState: _h,
      useOptimistic: function (e, t) {
        var n = Ve();
        return ph(n, we, e, t);
      },
      useMemoCache: ps,
      useCacheRefresh: Bh,
    };
  Os.useEffectEvent = Ch;
  var Xh = {
    readContext: at,
    use: Qi,
    useCallback: Dh,
    useContext: at,
    useEffect: Es,
    useImperativeHandle: Nh,
    useInsertionEffect: Mh,
    useLayoutEffect: wh,
    useMemo: jh,
    useReducer: vs,
    useRef: Ah,
    useState: function () {
      return vs(yn);
    },
    useDebugValue: xs,
    useDeferredValue: function (e, t) {
      var n = Ve();
      return we === null ? _s(n, e, t) : Uh(n, we.memoizedState, e, t);
    },
    useTransition: function () {
      var e = vs(yn)[0],
        t = Ve().memoizedState;
      return [typeof e == "boolean" ? e : lu(e), t];
    },
    useSyncExternalStore: oh,
    useId: Qh,
    useHostTransitionStatus: Rs,
    useFormState: Rh,
    useActionState: Rh,
    useOptimistic: function (e, t) {
      var n = Ve();
      return we !== null
        ? ph(n, we, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: ps,
    useCacheRefresh: Bh,
  };
  Xh.useEffectEvent = Ch;
  function Cs(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : v({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ms = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ot(),
        i = Xn(l);
      ((i.payload = t),
        n != null && (i.callback = n),
        (t = Zn(e, i, l)),
        t !== null && (gt(t, e, l), eu(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Ot(),
        i = Xn(l);
      ((i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = Zn(e, i, l)),
        t !== null && (gt(t, e, l), eu(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ot(),
        l = Xn(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Zn(e, l, n)),
        t !== null && (gt(t, e, n), eu(t, e, n)));
    },
  };
  function Zh(e, t, n, l, i, r, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, r, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Zl(n, l) || !Zl(i, r)
          : !0
    );
  }
  function Kh(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ms.enqueueReplaceState(t, t.state, null));
  }
  function wa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t) l !== "ref" && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = v({}, n));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function Jh(e) {
    Ei(e);
  }
  function $h(e) {
    console.error(e);
  }
  function Fh(e) {
    Ei(e);
  }
  function ki(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Ph(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function ws(e, t, n) {
    return (
      (n = Xn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ki(e, t);
      }),
      n
    );
  }
  function Wh(e) {
    return ((e = Xn(e)), (e.tag = 3), e);
  }
  function Ih(e, t, n, l) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = l.value;
      ((e.payload = function () {
        return i(r);
      }),
        (e.callback = function () {
          Ph(t, n, l);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (Ph(t, n, l),
          typeof i != "function" &&
            (Wn === null ? (Wn = new Set([this])) : Wn.add(this)));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Cv(e, t, n, l, i) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && ul(t, n, i, !0),
        (n = _t.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Bt === null ? nr() : n.alternate === null && Be === 0 && (Be = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = i),
              l === zi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  to(e, l, i)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === zi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  to(e, l, i)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return (to(e, l, i), nr(), !1);
    }
    if (Te)
      return (
        (t = _t.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== $c && ((e = Error(s(422), { cause: l })), $l(qt(e, n))))
          : (l !== $c && ((t = Error(s(423), { cause: l })), $l(qt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = qt(l, n)),
            (i = ws(e.stateNode, l, i)),
            is(e, i),
            Be !== 4 && (Be = 2)),
        !1
      );
    var r = Error(s(520), { cause: l });
    if (
      ((r = qt(r, n)),
      mu === null ? (mu = [r]) : mu.push(r),
      Be !== 4 && (Be = 2),
      t === null)
    )
      return !0;
    ((l = qt(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = i & -i),
            (n.lanes |= e),
            (e = ws(n.stateNode, l, e)),
            is(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Wn === null || !Wn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (i &= -i),
              (n.lanes |= i),
              (i = Wh(i)),
              Ih(i, e, n, l),
              is(n, i),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var zs = Error(s(461)),
    Xe = !1;
  function lt(e, t, n, l) {
    t.child = e === null ? ah(t, null, n, l) : Ca(t, e.child, n, l);
  }
  function em(e, t, n, l, i) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      Ta(t),
      (l = ds(e, t, n, d, r, i)),
      (g = hs()),
      e !== null && !Xe
        ? (ms(e, t, i), pn(e, t, i))
        : (Te && g && Kc(t), (t.flags |= 1), lt(e, t, l, i), t.child)
    );
  }
  function tm(e, t, n, l, i) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" &&
        !kc(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = r), nm(e, t, r, l, i))
        : ((e = Ri(n.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !Qs(e, i))) {
      var d = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Zl), n(d, l) && e.ref === t.ref)
      )
        return pn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = on(r, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function nm(e, t, n, l, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Zl(r, l) && e.ref === t.ref)
        if (((Xe = !1), (t.pendingProps = l = r), Qs(e, i)))
          (e.flags & 131072) !== 0 && (Xe = !0);
        else return ((t.lanes = e.lanes), pn(e, t, i));
    }
    return Ns(e, t, n, l, i);
  }
  function am(e, t, n, l) {
    var i = l.children,
      r = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, i = 0; l !== null; )
            ((i = i | l.lanes | l.childLanes), (l = l.sibling));
          l = i & ~r;
        } else ((l = 0), (t.child = null));
        return lm(e, t, r, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Mi(t, r !== null ? r.cachePool : null),
          r !== null ? ih(t, r) : cs(),
          rh(t));
      else
        return (
          (l = t.lanes = 536870912),
          lm(e, t, r !== null ? r.baseLanes | n : n, n, l)
        );
    } else
      r !== null
        ? (Mi(t, r.cachePool), ih(t, r), Jn(), (t.memoizedState = null))
        : (e !== null && Mi(t, null), cs(), Jn());
    return (lt(e, t, i, n), t.child);
  }
  function ru(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function lm(e, t, n, l, i) {
    var r = ns();
    return (
      (r = r === null ? null : { parent: Ge._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: n, cachePool: r }),
      e !== null && Mi(t, null),
      cs(),
      rh(t),
      e !== null && ul(e, t, l, !0),
      (t.childLanes = i),
      null
    );
  }
  function Xi(e, t) {
    return (
      (t = Ki({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function um(e, t, n) {
    return (
      Ca(t, e.child, null, n),
      (e = Xi(t, t.pendingProps)),
      (e.flags |= 2),
      Tt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Mv(e, t, n) {
    var l = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (l.mode === "hidden")
          return ((e = Xi(t, l)), (t.lanes = 536870912), ru(null, e));
        if (
          (os(t),
          (e = je)
            ? ((e = gy(e, Qt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Bn !== null ? { id: It, overflow: en } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Vd(e)),
                (n.return = t),
                (t.child = n),
                (nt = t),
                (je = null)))
            : (e = null),
          e === null)
        )
          throw Vn(t);
        return ((t.lanes = 536870912), null);
      }
      return Xi(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var d = r.dehydrated;
      if ((os(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = um(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(s(558));
      else if (
        (Xe || ul(e, t, n, !1), (i = (n & e.childLanes) !== 0), Xe || i)
      ) {
        if (
          ((l = De),
          l !== null && ((d = $f(l, n)), d !== 0 && d !== r.retryLane))
        )
          throw ((r.retryLane = d), Sa(e, d), gt(l, e, d), zs);
        (nr(), (t = um(e, t, n)));
      } else
        ((e = r.treeContext),
          (je = Yt(d.nextSibling)),
          (nt = t),
          (Te = !0),
          (Yn = null),
          (Qt = !1),
          e !== null && Xd(t, e),
          (t = Xi(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = on(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Zi(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ns(e, t, n, l, i) {
    return (
      Ta(t),
      (n = ds(e, t, n, l, void 0, i)),
      (l = hs()),
      e !== null && !Xe
        ? (ms(e, t, i), pn(e, t, i))
        : (Te && l && Kc(t), (t.flags |= 1), lt(e, t, n, i), t.child)
    );
  }
  function im(e, t, n, l, i, r) {
    return (
      Ta(t),
      (t.updateQueue = null),
      (n = sh(t, l, n, i)),
      ch(e),
      (l = hs()),
      e !== null && !Xe
        ? (ms(e, t, r), pn(e, t, r))
        : (Te && l && Kc(t), (t.flags |= 1), lt(e, t, n, r), t.child)
    );
  }
  function rm(e, t, n, l, i) {
    if ((Ta(t), t.stateNode === null)) {
      var r = tl,
        d = n.contextType;
      (typeof d == "object" && d !== null && (r = at(d)),
        (r = new n(l, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Ms),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = l),
        (r.state = t.memoizedState),
        (r.refs = {}),
        ls(t),
        (d = n.contextType),
        (r.context = typeof d == "object" && d !== null ? at(d) : tl),
        (r.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Cs(t, n, d, l), (r.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((d = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          d !== r.state && Ms.enqueueReplaceState(r, r.state, null),
          nu(t, l, r, i),
          tu(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      r = t.stateNode;
      var g = t.memoizedProps,
        O = wa(n, g);
      r.props = O;
      var k = r.context,
        F = n.contextType;
      ((d = tl), typeof F == "object" && F !== null && (d = at(F)));
      var te = n.getDerivedStateFromProps;
      ((F =
        typeof te == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        F ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || k !== d) && Kh(t, r, l, d)),
        (kn = !1));
      var Z = t.memoizedState;
      ((r.state = Z),
        nu(t, l, r, i),
        tu(),
        (k = t.memoizedState),
        g || Z !== k || kn
          ? (typeof te == "function" &&
              (Cs(t, n, te, l), (k = t.memoizedState)),
            (O = kn || Zh(t, n, O, l, Z, k, d))
              ? (F ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = k)),
            (r.props = l),
            (r.state = k),
            (r.context = d),
            (l = O))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((r = t.stateNode),
        us(e, t),
        (d = t.memoizedProps),
        (F = wa(n, d)),
        (r.props = F),
        (te = t.pendingProps),
        (Z = r.context),
        (k = n.contextType),
        (O = tl),
        typeof k == "object" && k !== null && (O = at(k)),
        (g = n.getDerivedStateFromProps),
        (k =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((d !== te || Z !== O) && Kh(t, r, l, O)),
        (kn = !1),
        (Z = t.memoizedState),
        (r.state = Z),
        nu(t, l, r, i),
        tu());
      var J = t.memoizedState;
      d !== te ||
      Z !== J ||
      kn ||
      (e !== null && e.dependencies !== null && Oi(e.dependencies))
        ? (typeof g == "function" && (Cs(t, n, g, l), (J = t.memoizedState)),
          (F =
            kn ||
            Zh(t, n, F, l, Z, J, O) ||
            (e !== null && e.dependencies !== null && Oi(e.dependencies)))
            ? (k ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(l, J, O),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, J, O)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (d === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && Z === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = J)),
          (r.props = l),
          (r.state = J),
          (r.context = O),
          (l = F))
        : (typeof r.componentDidUpdate != "function" ||
            (d === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && Z === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      Zi(e, t),
      (l = (t.flags & 128) !== 0),
      r || l
        ? ((r = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Ca(t, e.child, null, i)),
              (t.child = Ca(t, null, n, i)))
            : lt(e, t, n, i),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = pn(e, t, i)),
      e
    );
  }
  function cm(e, t, n, l) {
    return (xa(), (t.flags |= 256), lt(e, t, n, l), t.child);
  }
  var Ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function js(e) {
    return { baseLanes: e, cachePool: Pd() };
  }
  function Us(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= At), e);
  }
  function sm(e, t, n) {
    var l = t.pendingProps,
      i = !1,
      r = (t.flags & 128) !== 0,
      d;
    if (
      ((d = r) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
      d && ((i = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (i ? Kn(t) : Jn(),
          (e = je)
            ? ((e = gy(e, Qt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Bn !== null ? { id: It, overflow: en } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Vd(e)),
                (n.return = t),
                (t.child = n),
                (nt = t),
                (je = null)))
            : (e = null),
          e === null)
        )
          throw Vn(t);
        return (vo(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = l.children;
      return (
        (l = l.fallback),
        i
          ? (Jn(),
            (i = t.mode),
            (g = Ki({ mode: "hidden", children: g }, i)),
            (l = Ea(l, i, n, null)),
            (g.return = t),
            (l.return = t),
            (g.sibling = l),
            (t.child = g),
            (l = t.child),
            (l.memoizedState = js(n)),
            (l.childLanes = Us(e, d, n)),
            (t.memoizedState = Ds),
            ru(null, l))
          : (Kn(t), qs(t, g))
      );
    }
    var O = e.memoizedState;
    if (O !== null && ((g = O.dehydrated), g !== null)) {
      if (r)
        t.flags & 256
          ? (Kn(t), (t.flags &= -257), (t = Hs(e, t, n)))
          : t.memoizedState !== null
            ? (Jn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Jn(),
              (g = l.fallback),
              (i = t.mode),
              (l = Ki({ mode: "visible", children: l.children }, i)),
              (g = Ea(g, i, n, null)),
              (g.flags |= 2),
              (l.return = t),
              (g.return = t),
              (l.sibling = g),
              (t.child = l),
              Ca(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = js(n)),
              (l.childLanes = Us(e, d, n)),
              (t.memoizedState = Ds),
              (t = ru(null, l)));
      else if ((Kn(t), vo(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var k = d.dgst;
        ((d = k),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          $l({ value: l, source: null, stack: null }),
          (t = Hs(e, t, n)));
      } else if (
        (Xe || ul(e, t, n, !1), (d = (n & e.childLanes) !== 0), Xe || d)
      ) {
        if (
          ((d = De),
          d !== null && ((l = $f(d, n)), l !== 0 && l !== O.retryLane))
        )
          throw ((O.retryLane = l), Sa(e, l), gt(d, e, l), zs);
        (go(g) || nr(), (t = Hs(e, t, n)));
      } else
        go(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = O.treeContext),
            (je = Yt(g.nextSibling)),
            (nt = t),
            (Te = !0),
            (Yn = null),
            (Qt = !1),
            e !== null && Xd(t, e),
            (t = qs(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Jn(),
        (g = l.fallback),
        (i = t.mode),
        (O = e.child),
        (k = O.sibling),
        (l = on(O, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = O.subtreeFlags & 65011712),
        k !== null ? (g = on(k, g)) : ((g = Ea(g, i, n, null)), (g.flags |= 2)),
        (g.return = t),
        (l.return = t),
        (l.sibling = g),
        (t.child = l),
        ru(null, l),
        (l = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = js(n))
          : ((i = g.cachePool),
            i !== null
              ? ((O = Ge._currentValue),
                (i = i.parent !== O ? { parent: O, pool: O } : i))
              : (i = Pd()),
            (g = { baseLanes: g.baseLanes | n, cachePool: i })),
        (l.memoizedState = g),
        (l.childLanes = Us(e, d, n)),
        (t.memoizedState = Ds),
        ru(e.child, l))
      : (Kn(t),
        (n = e.child),
        (e = n.sibling),
        (n = on(n, { mode: "visible", children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function qs(e, t) {
    return (
      (t = Ki({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ki(e, t) {
    return ((e = xt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Hs(e, t, n) {
    return (
      Ca(t, e.child, null, n),
      (e = qs(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function om(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Wc(e.return, t, n));
  }
  function Ls(e, t, n, l, i, r) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: i,
          treeForkCount: r,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = i),
        (d.treeForkCount = r));
  }
  function fm(e, t, n) {
    var l = t.pendingProps,
      i = l.revealOrder,
      r = l.tail;
    l = l.children;
    var d = Ye.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      le(Ye, d),
      lt(e, t, l, n),
      (l = Te ? Jl : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && om(e, n, t);
        else if (e.tag === 19) om(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ui(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ls(t, !1, i, n, r, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ui(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Ls(t, !0, n, null, r, l);
        break;
      case "together":
        Ls(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function pn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Pn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ul(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = on(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Qs(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Oi(e)));
  }
  function wv(e, t, n) {
    switch (t.tag) {
      case 3:
        (be(t, t.stateNode.containerInfo),
          Gn(t, Ge, e.memoizedState.cache),
          xa());
        break;
      case 27:
      case 5:
        ve(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        Gn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), os(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Kn(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? sm(e, t, n)
              : (Kn(t), (e = pn(e, t, n)), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (ul(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return fm(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          le(Ye, Ye.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), am(e, t, n, t.pendingProps));
      case 24:
        Gn(t, Ge, e.memoizedState.cache);
    }
    return pn(e, t, n);
  }
  function dm(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Xe = !0;
      else {
        if (!Qs(e, n) && (t.flags & 128) === 0) return ((Xe = !1), wv(e, t, n));
        Xe = (e.flags & 131072) !== 0;
      }
    else ((Xe = !1), Te && (t.flags & 1048576) !== 0 && kd(t, Jl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Aa(t.elementType)), (t.type = e), typeof e == "function"))
            kc(e)
              ? ((l = wa(e, l)), (t.tag = 1), (t = rm(null, t, e, l, n)))
              : ((t.tag = 0), (t = Ns(null, t, e, l, n)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === M) {
                ((t.tag = 11), (t = em(null, t, e, l, n)));
                break e;
              } else if (i === U) {
                ((t.tag = 14), (t = tm(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = W(e) || e), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return Ns(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (i = wa(l, t.pendingProps)), rm(e, t, l, i, n));
      case 3:
        e: {
          if ((be(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          ((i = r.element), us(e, t), nu(t, l, null, n));
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            Gn(t, Ge, l),
            l !== r.cache && Ic(t, [Ge], n, !0),
            tu(),
            (l = d.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = cm(e, t, l, n);
              break e;
            } else if (l !== i) {
              ((i = qt(Error(s(424)), t)), $l(i), (t = cm(e, t, l, n)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  je = Yt(e.firstChild),
                  nt = t,
                  Te = !0,
                  Yn = null,
                  Qt = !0,
                  n = ah(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((xa(), l === i)) {
              t = pn(e, t, n);
              break e;
            }
            lt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Zi(e, t),
          e === null
            ? (n = _y(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Te ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = sr(oe.current).createElement(n)),
                (l[tt] = t),
                (l[ft] = e),
                ut(l, n, e),
                $e(l),
                (t.stateNode = l))
            : (t.memoizedState = _y(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ve(t),
          e === null &&
            Te &&
            ((l = t.stateNode = Sy(t.type, t.pendingProps, oe.current)),
            (nt = t),
            (Qt = !0),
            (i = je),
            na(t.type) ? ((bo = i), (je = Yt(l.firstChild))) : (je = i)),
          lt(e, t, t.pendingProps.children, n),
          Zi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((i = l = je) &&
              ((l = i1(l, t.type, t.pendingProps, Qt)),
              l !== null
                ? ((t.stateNode = l),
                  (nt = t),
                  (je = Yt(l.firstChild)),
                  (Qt = !1),
                  (i = !0))
                : (i = !1)),
            i || Vn(t)),
          ve(t),
          (i = t.type),
          (r = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = r.children),
          mo(i, r) ? (l = null) : d !== null && mo(i, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = ds(e, t, Ev, null, null, n)), (xu._currentValue = i)),
          Zi(e, t),
          lt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = n = je) &&
              ((n = r1(n, t.pendingProps, Qt)),
              n !== null
                ? ((t.stateNode = n), (nt = t), (je = null), (e = !0))
                : (e = !1)),
            e || Vn(t)),
          null
        );
      case 13:
        return sm(e, t, n);
      case 4:
        return (
          be(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Ca(t, null, l, n)) : lt(e, t, l, n),
          t.child
        );
      case 11:
        return em(e, t, t.type, t.pendingProps, n);
      case 7:
        return (lt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (lt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (lt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Gn(t, t.type, l.value),
          lt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          Ta(t),
          (i = at(i)),
          (l = l(i)),
          (t.flags |= 1),
          lt(e, t, l, n),
          t.child
        );
      case 14:
        return tm(e, t, t.type, t.pendingProps, n);
      case 15:
        return nm(e, t, t.type, t.pendingProps, n);
      case 19:
        return fm(e, t, n);
      case 31:
        return Mv(e, t, n);
      case 22:
        return am(e, t, n, t.pendingProps);
      case 24:
        return (
          Ta(t),
          (l = at(Ge)),
          e === null
            ? ((i = ns()),
              i === null &&
                ((i = De),
                (r = es()),
                (i.pooledCache = r),
                r.refCount++,
                r !== null && (i.pooledCacheLanes |= n),
                (i = r)),
              (t.memoizedState = { parent: l, cache: i }),
              ls(t),
              Gn(t, Ge, i))
            : ((e.lanes & n) !== 0 && (us(e, t), nu(t, null, null, n), tu()),
              (i = e.memoizedState),
              (r = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Gn(t, Ge, l))
                : ((l = r.cache),
                  Gn(t, Ge, l),
                  l !== i.cache && Ic(t, [Ge], n, !0))),
          lt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function gn(e) {
    e.flags |= 4;
  }
  function Bs(e, t, n, l, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Qm()) e.flags |= 8192;
        else throw ((Oa = zi), as);
    } else e.flags &= -16777217;
  }
  function hm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Cy(t)))
      if (Qm()) e.flags |= 8192;
      else throw ((Oa = zi), as);
  }
  function Ji(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Zf() : 536870912), (e.lanes |= t), (gl |= t)));
  }
  function cu(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function zv(e, t, n) {
    var l = t.pendingProps;
    switch ((Jc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ue(t), null);
      case 1:
        return (Ue(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          hn(Ge),
          de(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ll(t)
              ? gn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Fc())),
          Ue(t),
          null
        );
      case 26:
        var i = t.type,
          r = t.memoizedState;
        return (
          e === null
            ? (gn(t),
              r !== null ? (Ue(t), hm(t, r)) : (Ue(t), Bs(t, i, null, l, n)))
            : r
              ? r !== e.memoizedState
                ? (gn(t), Ue(t), hm(t, r))
                : (Ue(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && gn(t),
                Ue(t),
                Bs(t, i, e, l, n)),
          null
        );
      case 27:
        if (
          (st(t),
          (n = oe.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ue(t), null);
          }
          ((e = ae.current),
            ll(t) ? Zd(t) : ((e = Sy(i, l, n)), (t.stateNode = e), gn(t)));
        }
        return (Ue(t), null);
      case 5:
        if ((st(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && gn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(s(166));
            return (Ue(t), null);
          }
          if (((r = ae.current), ll(t))) Zd(t);
          else {
            var d = sr(oe.current);
            switch (r) {
              case 1:
                r = d.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                r = d.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    r = d.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    r = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i,
                    );
                    break;
                  case "script":
                    ((r = d.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (r.multiple = !0)
                        : l.size && (r.size = l.size));
                    break;
                  default:
                    r =
                      typeof l.is == "string"
                        ? d.createElement(i, { is: l.is })
                        : d.createElement(i);
                }
            }
            ((r[tt] = t), (r[ft] = l));
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) r.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = r;
            e: switch ((ut(r, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && gn(t);
          }
        }
        return (
          Ue(t),
          Bs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && gn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = oe.current), ll(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (i = nt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[tt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                sy(e.nodeValue, n)
              )),
              e || Vn(t, !0));
          } else
            ((e = sr(e).createTextNode(l)), (e[tt] = t), (t.stateNode = e));
        }
        return (Ue(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ll(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(s(557));
              e[tt] = t;
            } else
              (xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ue(t), (e = !1));
          } else
            ((n = Fc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0) throw Error(s(558));
        }
        return (Ue(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = ll(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(s(317));
              i[tt] = t;
            } else
              (xa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ue(t), (i = !1));
          } else
            ((i = Fc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return (
          Tt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (i = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (i = l.alternate.memoizedState.cachePool.pool),
                (r = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (r = l.memoizedState.cachePool.pool),
                r !== i && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Ji(t, t.updateQueue),
              Ue(t),
              null)
        );
      case 4:
        return (de(), e === null && co(t.stateNode.containerInfo), Ue(t), null);
      case 10:
        return (hn(t.type), Ue(t), null);
      case 19:
        if (($(Ye), (l = t.memoizedState), l === null)) return (Ue(t), null);
        if (((i = (t.flags & 128) !== 0), (r = l.rendering), r === null))
          if (i) cu(l, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((r = Ui(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      cu(l, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      Ji(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Yd(n, e), (n = n.sibling));
                  return (
                    le(Ye, (Ye.current & 1) | 2),
                    Te && fn(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              vt() > Ii &&
              ((t.flags |= 128), (i = !0), cu(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Ui(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ji(t, e),
                cu(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !r.alternate &&
                  !Te)
              )
                return (Ue(t), null);
            } else
              2 * vt() - l.renderingStartTime > Ii &&
                n !== 536870912 &&
                ((t.flags |= 128), (i = !0), cu(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = l.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (l.last = r));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = vt()),
            (e.sibling = null),
            (n = Ye.current),
            le(Ye, i ? (n & 1) | 2 : n & 1),
            Te && fn(t, l.treeForkCount),
            e)
          : (Ue(t), null);
      case 22:
      case 23:
        return (
          Tt(t),
          ss(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ue(t),
          (n = t.updateQueue),
          n !== null && Ji(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && $(Ra),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          hn(Ge),
          Ue(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Nv(e, t) {
    switch ((Jc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          hn(Ge),
          de(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (st(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Tt(t), t.alternate === null)) throw Error(s(340));
          xa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Tt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          xa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ($(Ye), null);
      case 4:
        return (de(), null);
      case 10:
        return (hn(t.type), null);
      case 22:
      case 23:
        return (
          Tt(t),
          ss(),
          e !== null && $(Ra),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (hn(Ge), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function mm(e, t) {
    switch ((Jc(t), t.tag)) {
      case 3:
        (hn(Ge), de());
        break;
      case 26:
      case 27:
      case 5:
        st(t);
        break;
      case 4:
        de();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        $(Ye);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        (Tt(t), ss(), e !== null && $(Ra));
        break;
      case 24:
        hn(Ge);
    }
  }
  function su(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var r = n.create,
              d = n.inst;
            ((l = r()), (d.destroy = l));
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (g) {
      Me(t, t.return, g);
    }
  }
  function $n(e, t, n) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (i = t));
              var O = n,
                k = g;
              try {
                k();
              } catch (F) {
                Me(i, O, F);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (F) {
      Me(t, t.return, F);
    }
  }
  function ym(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        uh(t, n);
      } catch (l) {
        Me(e, e.return, l);
      }
    }
  }
  function pm(e, t, n) {
    ((n.props = wa(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      Me(e, t, l);
    }
  }
  function ou(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (i) {
      Me(e, t, i);
    }
  }
  function tn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          Me(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          Me(e, t, i);
        }
      else n.current = null;
  }
  function gm(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (i) {
      Me(e, e.return, i);
    }
  }
  function Ys(e, t, n) {
    try {
      var l = e.stateNode;
      (e1(l, e.type, n, t), (l[ft] = t));
    } catch (i) {
      Me(e, e.return, i);
    }
  }
  function vm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && na(e.type)) ||
      e.tag === 4
    );
  }
  function Vs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || vm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && na(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Gs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = cn)));
    else if (
      l !== 4 &&
      (l === 27 && na(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Gs(e, t, n), e = e.sibling; e !== null; )
        (Gs(e, t, n), (e = e.sibling));
  }
  function $i(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && na(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for ($i(e, t, n), e = e.sibling; e !== null; )
        ($i(e, t, n), (e = e.sibling));
  }
  function bm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (ut(t, l, n), (t[tt] = e), (t[ft] = n));
    } catch (r) {
      Me(e, e.return, r);
    }
  }
  var vn = !1,
    Ze = !1,
    ks = !1,
    Sm = typeof WeakSet == "function" ? WeakSet : Set,
    Fe = null;
  function Dv(e, t) {
    if (((e = e.containerInfo), (fo = pr), (e = Nd(e)), Hc(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var i = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              O = -1,
              k = 0,
              F = 0,
              te = e,
              Z = null;
            t: for (;;) {
              for (
                var J;
                te !== n || (i !== 0 && te.nodeType !== 3) || (g = d + i),
                  te !== r || (l !== 0 && te.nodeType !== 3) || (O = d + l),
                  te.nodeType === 3 && (d += te.nodeValue.length),
                  (J = te.firstChild) !== null;
              )
                ((Z = te), (te = J));
              for (;;) {
                if (te === e) break t;
                if (
                  (Z === n && ++k === i && (g = d),
                  Z === r && ++F === l && (O = d),
                  (J = te.nextSibling) !== null)
                )
                  break;
                ((te = Z), (Z = te.parentNode));
              }
              te = J;
            }
            n = g === -1 || O === -1 ? null : { start: g, end: O };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ho = { focusedElem: e, selectionRange: n }, pr = !1, Fe = t;
      Fe !== null;
    )
      if (
        ((t = Fe), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Fe = e));
      else
        for (; Fe !== null; ) {
          switch (((t = Fe), (r = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((i = e[n]), (i.ref.impl = i.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                ((e = void 0),
                  (n = t),
                  (i = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = n.stateNode));
                try {
                  var se = wa(n.type, i);
                  ((e = l.getSnapshotBeforeUpdate(se, r)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (me) {
                  Me(n, n.return, me);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  po(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      po(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Fe = e));
            break;
          }
          Fe = t.return;
        }
  }
  function Em(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Sn(e, n), l & 4 && su(5, n));
        break;
      case 1:
        if ((Sn(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Me(n, n.return, d);
            }
          else {
            var i = wa(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Me(n, n.return, d);
            }
          }
        (l & 64 && ym(n), l & 512 && ou(n, n.return));
        break;
      case 3:
        if ((Sn(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            uh(e, t);
          } catch (d) {
            Me(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && bm(n);
      case 26:
      case 5:
        (Sn(e, n), t === null && l & 4 && gm(n), l & 512 && ou(n, n.return));
        break;
      case 12:
        Sn(e, n);
        break;
      case 31:
        (Sn(e, n), l & 4 && Tm(e, n));
        break;
      case 13:
        (Sn(e, n),
          l & 4 && Rm(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Vv.bind(null, n)), c1(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || vn), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Ze), (i = vn));
          var r = Ze;
          ((vn = l),
            (Ze = t) && !r ? En(e, n, (n.subtreeFlags & 8772) !== 0) : Sn(e, n),
            (vn = i),
            (Ze = r));
        }
        break;
      case 30:
        break;
      default:
        Sn(e, n);
    }
  }
  function xm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), xm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Sc(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var qe = null,
    ht = !1;
  function bn(e, t, n) {
    for (n = n.child; n !== null; ) (_m(e, t, n), (n = n.sibling));
  }
  function _m(e, t, n) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(jl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ze || tn(n, t),
          bn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ze || tn(n, t);
        var l = qe,
          i = ht;
        (na(n.type) && ((qe = n.stateNode), (ht = !1)),
          bn(e, t, n),
          bu(n.stateNode),
          (qe = l),
          (ht = i));
        break;
      case 5:
        Ze || tn(n, t);
      case 6:
        if (
          ((l = qe),
          (i = ht),
          (qe = null),
          bn(e, t, n),
          (qe = l),
          (ht = i),
          qe !== null)
        )
          if (ht)
            try {
              (qe.nodeType === 9
                ? qe.body
                : qe.nodeName === "HTML"
                  ? qe.ownerDocument.body
                  : qe
              ).removeChild(n.stateNode);
            } catch (r) {
              Me(n, t, r);
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (r) {
              Me(n, t, r);
            }
        break;
      case 18:
        qe !== null &&
          (ht
            ? ((e = qe),
              yy(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              Rl(e))
            : yy(qe, n.stateNode));
        break;
      case 4:
        ((l = qe),
          (i = ht),
          (qe = n.stateNode.containerInfo),
          (ht = !0),
          bn(e, t, n),
          (qe = l),
          (ht = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ($n(2, n, t), Ze || $n(4, n, t), bn(e, t, n));
        break;
      case 1:
        (Ze ||
          (tn(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && pm(n, t, l)),
          bn(e, t, n));
        break;
      case 21:
        bn(e, t, n);
        break;
      case 22:
        ((Ze = (l = Ze) || n.memoizedState !== null), bn(e, t, n), (Ze = l));
        break;
      default:
        bn(e, t, n);
    }
  }
  function Tm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Rl(e);
      } catch (n) {
        Me(t, t.return, n);
      }
    }
  }
  function Rm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Rl(e);
      } catch (n) {
        Me(t, t.return, n);
      }
  }
  function jv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Sm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Sm()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Fi(e, t) {
    var n = jv(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var i = Gv.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function mt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var i = n[l],
          r = e,
          d = t,
          g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (na(g.type)) {
                ((qe = g.stateNode), (ht = !1));
                break e;
              }
              break;
            case 5:
              ((qe = g.stateNode), (ht = !1));
              break e;
            case 3:
            case 4:
              ((qe = g.stateNode.containerInfo), (ht = !0));
              break e;
          }
          g = g.return;
        }
        if (qe === null) throw Error(s(160));
        (_m(r, d, i),
          (qe = null),
          (ht = !1),
          (r = i.alternate),
          r !== null && (r.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Am(t, e), (t = t.sibling));
  }
  var Xt = null;
  function Am(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (mt(t, e),
          yt(e),
          l & 4 && ($n(3, e, e.return), su(3, e), $n(5, e, e.return)));
        break;
      case 1:
        (mt(t, e),
          yt(e),
          l & 512 && (Ze || n === null || tn(n, n.return)),
          l & 64 &&
            vn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var i = Xt;
        if (
          (mt(t, e),
          yt(e),
          l & 512 && (Ze || n === null || tn(n, n.return)),
          l & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case "title":
                      ((r = i.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Hl] ||
                          r[tt] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = i.createElement(l)),
                          i.head.insertBefore(
                            r,
                            i.querySelector("head > title"),
                          )),
                        ut(r, l, n),
                        (r[tt] = e),
                        $e(r),
                        (l = r));
                      break e;
                    case "link":
                      var d = Ay("link", "href", i).get(l + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((r = d[g]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((r = i.createElement(l)),
                        ut(r, l, n),
                        i.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (d = Ay("meta", "content", i).get(
                          l + (n.content || ""),
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((r = d[g]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((r = i.createElement(l)),
                        ut(r, l, n),
                        i.head.appendChild(r));
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  ((r[tt] = e), $e(r), (l = r));
                }
                e.stateNode = l;
              } else Oy(i, e.type, e.stateNode);
            else e.stateNode = Ry(i, l, e.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                l === null
                  ? Oy(i, e.type, e.stateNode)
                  : Ry(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Ys(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (mt(t, e),
          yt(e),
          l & 512 && (Ze || n === null || tn(n, n.return)),
          n !== null && l & 4 && Ys(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (mt(t, e),
          yt(e),
          l & 512 && (Ze || n === null || tn(n, n.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Ja(i, "");
          } catch (se) {
            Me(e, e.return, se);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Ys(e, i, n !== null ? n.memoizedProps : i)),
          l & 1024 && (ks = !0));
        break;
      case 6:
        if ((mt(t, e), yt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (se) {
            Me(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((dr = null),
          (i = Xt),
          (Xt = or(t.containerInfo)),
          mt(t, e),
          (Xt = i),
          yt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Rl(t.containerInfo);
          } catch (se) {
            Me(e, e.return, se);
          }
        ks && ((ks = !1), Om(e));
        break;
      case 4:
        ((l = Xt),
          (Xt = or(e.stateNode.containerInfo)),
          mt(t, e),
          yt(e),
          (Xt = l));
        break;
      case 12:
        (mt(t, e), yt(e));
        break;
      case 31:
        (mt(t, e),
          yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Fi(e, l))));
        break;
      case 13:
        (mt(t, e),
          yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Wi = vt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Fi(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var O = n !== null && n.memoizedState !== null,
          k = vn,
          F = Ze;
        if (
          ((vn = k || i),
          (Ze = F || O),
          mt(t, e),
          (Ze = F),
          (vn = k),
          yt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (n === null || O || vn || Ze || za(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                O = n = t;
                try {
                  if (((r = O.stateNode), i))
                    ((d = r.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = O.stateNode;
                    var te = O.memoizedProps.style,
                      Z =
                        te != null && te.hasOwnProperty("display")
                          ? te.display
                          : null;
                    g.style.display =
                      Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (se) {
                  Me(O, O.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                O = t;
                try {
                  O.stateNode.nodeValue = i ? "" : O.memoizedProps;
                } catch (se) {
                  Me(O, O.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                O = t;
                try {
                  var J = O.stateNode;
                  i ? py(J, !0) : py(O.stateNode, !1);
                } catch (se) {
                  Me(O, O.return, se);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Fi(e, n))));
        break;
      case 19:
        (mt(t, e),
          yt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Fi(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (mt(t, e), yt(e));
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (vm(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode,
              r = Vs(e);
            $i(e, r, i);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Ja(d, ""), (n.flags &= -33));
            var g = Vs(e);
            $i(e, g, d);
            break;
          case 3:
          case 4:
            var O = n.stateNode.containerInfo,
              k = Vs(e);
            Gs(e, k, O);
            break;
          default:
            throw Error(s(161));
        }
      } catch (F) {
        Me(e, e.return, F);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Om(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Om(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Em(e, t.alternate, t), (t = t.sibling));
  }
  function za(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ($n(4, t, t.return), za(t));
          break;
        case 1:
          tn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && pm(t, t.return, n),
            za(t));
          break;
        case 27:
          bu(t.stateNode);
        case 26:
        case 5:
          (tn(t, t.return), za(t));
          break;
        case 22:
          t.memoizedState === null && za(t);
          break;
        case 30:
          za(t);
          break;
        default:
          za(t);
      }
      e = e.sibling;
    }
  }
  function En(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        r = t,
        d = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (En(i, r, n), su(4, r));
          break;
        case 1:
          if (
            (En(i, r, n),
            (l = r),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (k) {
              Me(l, l.return, k);
            }
          if (((l = r), (i = l.updateQueue), i !== null)) {
            var g = l.stateNode;
            try {
              var O = i.shared.hiddenCallbacks;
              if (O !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < O.length; i++)
                  lh(O[i], g);
            } catch (k) {
              Me(l, l.return, k);
            }
          }
          (n && d & 64 && ym(r), ou(r, r.return));
          break;
        case 27:
          bm(r);
        case 26:
        case 5:
          (En(i, r, n), n && l === null && d & 4 && gm(r), ou(r, r.return));
          break;
        case 12:
          En(i, r, n);
          break;
        case 31:
          (En(i, r, n), n && d & 4 && Tm(i, r));
          break;
        case 13:
          (En(i, r, n), n && d & 4 && Rm(i, r));
          break;
        case 22:
          (r.memoizedState === null && En(i, r, n), ou(r, r.return));
          break;
        case 30:
          break;
        default:
          En(i, r, n);
      }
      t = t.sibling;
    }
  }
  function Xs(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Fl(n)));
  }
  function Zs(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Fl(e)));
  }
  function Zt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Cm(e, t, n, l), (t = t.sibling));
  }
  function Cm(e, t, n, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Zt(e, t, n, l), i & 2048 && su(9, t));
        break;
      case 1:
        Zt(e, t, n, l);
        break;
      case 3:
        (Zt(e, t, n, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Fl(e))));
        break;
      case 12:
        if (i & 2048) {
          (Zt(e, t, n, l), (e = t.stateNode));
          try {
            var r = t.memoizedProps,
              d = r.id,
              g = r.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (O) {
            Me(t, t.return, O);
          }
        } else Zt(e, t, n, l);
        break;
      case 31:
        Zt(e, t, n, l);
        break;
      case 13:
        Zt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((r = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? r._visibility & 2
              ? Zt(e, t, n, l)
              : fu(e, t)
            : r._visibility & 2
              ? Zt(e, t, n, l)
              : ((r._visibility |= 2),
                ml(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Xs(d, t));
        break;
      case 24:
        (Zt(e, t, n, l), i & 2048 && Zs(t.alternate, t));
        break;
      default:
        Zt(e, t, n, l);
    }
  }
  function ml(e, t, n, l, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var r = e,
        d = t,
        g = n,
        O = l,
        k = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (ml(r, d, g, O, i), su(8, d));
          break;
        case 23:
          break;
        case 22:
          var F = d.stateNode;
          (d.memoizedState !== null
            ? F._visibility & 2
              ? ml(r, d, g, O, i)
              : fu(r, d)
            : ((F._visibility |= 2), ml(r, d, g, O, i)),
            i && k & 2048 && Xs(d.alternate, d));
          break;
        case 24:
          (ml(r, d, g, O, i), i && k & 2048 && Zs(d.alternate, d));
          break;
        default:
          ml(r, d, g, O, i);
      }
      t = t.sibling;
    }
  }
  function fu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (fu(n, l), i & 2048 && Xs(l.alternate, l));
            break;
          case 24:
            (fu(n, l), i & 2048 && Zs(l.alternate, l));
            break;
          default:
            fu(n, l);
        }
        t = t.sibling;
      }
  }
  var du = 8192;
  function yl(e, t, n) {
    if (e.subtreeFlags & du)
      for (e = e.child; e !== null; ) (Mm(e, t, n), (e = e.sibling));
  }
  function Mm(e, t, n) {
    switch (e.tag) {
      case 26:
        (yl(e, t, n),
          e.flags & du &&
            e.memoizedState !== null &&
            S1(n, Xt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        yl(e, t, n);
        break;
      case 3:
      case 4:
        var l = Xt;
        ((Xt = or(e.stateNode.containerInfo)), yl(e, t, n), (Xt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = du), (du = 16777216), yl(e, t, n), (du = l))
            : yl(e, t, n));
        break;
      default:
        yl(e, t, n);
    }
  }
  function wm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function hu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Fe = l), Nm(l, e));
        }
      wm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (zm(e), (e = e.sibling));
  }
  function zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (hu(e), e.flags & 2048 && $n(9, e, e.return));
        break;
      case 3:
        hu(e);
        break;
      case 12:
        hu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Pi(e))
          : hu(e);
        break;
      default:
        hu(e);
    }
  }
  function Pi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Fe = l), Nm(l, e));
        }
      wm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          ($n(8, t, t.return), Pi(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Pi(t)));
          break;
        default:
          Pi(t);
      }
      e = e.sibling;
    }
  }
  function Nm(e, t) {
    for (; Fe !== null; ) {
      var n = Fe;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          $n(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Fl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Fe = l));
      else
        e: for (n = e; Fe !== null; ) {
          l = Fe;
          var i = l.sibling,
            r = l.return;
          if ((xm(l), l === n)) {
            Fe = null;
            break e;
          }
          if (i !== null) {
            ((i.return = r), (Fe = i));
            break e;
          }
          Fe = r;
        }
    }
  }
  var Uv = {
      getCacheForType: function (e) {
        var t = at(Ge),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return at(Ge).controller.signal;
      },
    },
    qv = typeof WeakMap == "function" ? WeakMap : Map,
    Oe = 0,
    De = null,
    Se = null,
    xe = 0,
    Ce = 0,
    Rt = null,
    Fn = !1,
    pl = !1,
    Ks = !1,
    xn = 0,
    Be = 0,
    Pn = 0,
    Na = 0,
    Js = 0,
    At = 0,
    gl = 0,
    mu = null,
    pt = null,
    $s = !1,
    Wi = 0,
    Dm = 0,
    Ii = 1 / 0,
    er = null,
    Wn = null,
    Ke = 0,
    In = null,
    vl = null,
    _n = 0,
    Fs = 0,
    Ps = null,
    jm = null,
    yu = 0,
    Ws = null;
  function Ot() {
    return (Oe & 2) !== 0 && xe !== 0 ? xe & -xe : L.T !== null ? lo() : Ff();
  }
  function Um() {
    if (At === 0)
      if ((xe & 536870912) === 0 || Te) {
        var e = ci;
        ((ci <<= 1), (ci & 3932160) === 0 && (ci = 262144), (At = e));
      } else At = 536870912;
    return ((e = _t.current), e !== null && (e.flags |= 32), At);
  }
  function gt(e, t, n) {
    (((e === De && (Ce === 2 || Ce === 9)) || e.cancelPendingCommit !== null) &&
      (bl(e, 0), ea(e, xe, At, !1)),
      ql(e, n),
      ((Oe & 2) === 0 || e !== De) &&
        (e === De &&
          ((Oe & 2) === 0 && (Na |= n), Be === 4 && ea(e, xe, At, !1)),
        nn(e)));
  }
  function qm(e, t, n) {
    if ((Oe & 6) !== 0) throw Error(s(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ul(e, t),
      i = l ? Qv(e, t) : eo(e, t, !0),
      r = l;
    do {
      if (i === 0) {
        pl && !l && ea(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), r && !Hv(n))) {
          ((i = eo(e, t, !1)), (r = !1));
          continue;
        }
        if (i === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              i = mu;
              var O = g.current.memoizedState.isDehydrated;
              if ((O && (bl(g, d).flags |= 256), (d = eo(g, d, !1)), d !== 2)) {
                if (Ks && !O) {
                  ((g.errorRecoveryDisabledLanes |= r), (Na |= r), (i = 4));
                  break e;
                }
                ((r = pt),
                  (pt = i),
                  r !== null &&
                    (pt === null ? (pt = r) : pt.push.apply(pt, r)));
              }
              i = d;
            }
            if (((r = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (bl(e, 0), ea(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (r = i), r)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ea(l, t, At, !Fn);
              break e;
            case 2:
              pt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((i = Wi + 300 - vt()), 10 < i)) {
            if ((ea(l, t, At, !Fn), oi(l, 0, !0) !== 0)) break e;
            ((_n = t),
              (l.timeoutHandle = hy(
                Hm.bind(
                  null,
                  l,
                  n,
                  pt,
                  er,
                  $s,
                  t,
                  At,
                  Na,
                  gl,
                  Fn,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                i,
              )));
            break e;
          }
          Hm(l, n, pt, er, $s, t, At, Na, gl, Fn, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    nn(e);
  }
  function Hm(e, t, n, l, i, r, d, g, O, k, F, te, Z, J) {
    if (
      ((e.timeoutHandle = -1),
      (te = t.subtreeFlags),
      te & 8192 || (te & 16785408) === 16785408)
    ) {
      ((te = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: cn,
      }),
        Mm(t, r, te));
      var se =
        (r & 62914560) === r ? Wi - vt() : (r & 4194048) === r ? Dm - vt() : 0;
      if (((se = E1(te, se)), se !== null)) {
        ((_n = r),
          (e.cancelPendingCommit = se(
            Xm.bind(null, e, t, r, n, l, i, d, g, O, F, te, null, Z, J),
          )),
          ea(e, r, d, !k));
        return;
      }
    }
    Xm(e, t, r, n, l, i, d, g, O);
  }
  function Hv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var i = n[l],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!Et(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ea(e, t, n, l) {
    ((t &= ~Js),
      (t &= ~Na),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var r = 31 - St(i),
        d = 1 << r;
      ((l[r] = -1), (i &= ~d));
    }
    n !== 0 && Kf(e, n, t);
  }
  function tr() {
    return (Oe & 6) === 0 ? (pu(0), !1) : !0;
  }
  function Is() {
    if (Se !== null) {
      if (Ce === 0) var e = Se.return;
      else ((e = Se), (dn = _a = null), ys(e), (sl = null), (Wl = 0), (e = Se));
      for (; e !== null; ) (mm(e.alternate, e), (e = e.return));
      Se = null;
    }
  }
  function bl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), a1(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (_n = 0),
      Is(),
      (De = e),
      (Se = n = on(e.current, null)),
      (xe = t),
      (Ce = 0),
      (Rt = null),
      (Fn = !1),
      (pl = Ul(e, t)),
      (Ks = !1),
      (gl = At = Js = Na = Pn = Be = 0),
      (pt = mu = null),
      ($s = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - St(l),
          r = 1 << i;
        ((t |= e[i]), (l &= ~r));
      }
    return ((xn = t), xi(), n);
  }
  function Lm(e, t) {
    ((pe = null),
      (L.H = iu),
      t === cl || t === wi
        ? ((t = eh()), (Ce = 3))
        : t === as
          ? ((t = eh()), (Ce = 4))
          : (Ce =
              t === zs
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Rt = t),
      Se === null && ((Be = 1), ki(e, qt(t, e.current))));
  }
  function Qm() {
    var e = _t.current;
    return e === null
      ? !0
      : (xe & 4194048) === xe
        ? Bt === null
        : (xe & 62914560) === xe || (xe & 536870912) !== 0
          ? e === Bt
          : !1;
  }
  function Bm() {
    var e = L.H;
    return ((L.H = iu), e === null ? iu : e);
  }
  function Ym() {
    var e = L.A;
    return ((L.A = Uv), e);
  }
  function nr() {
    ((Be = 4),
      Fn || ((xe & 4194048) !== xe && _t.current !== null) || (pl = !0),
      ((Pn & 134217727) === 0 && (Na & 134217727) === 0) ||
        De === null ||
        ea(De, xe, At, !1));
  }
  function eo(e, t, n) {
    var l = Oe;
    Oe |= 2;
    var i = Bm(),
      r = Ym();
    ((De !== e || xe !== t) && ((er = null), bl(e, t)), (t = !1));
    var d = Be;
    e: do
      try {
        if (Ce !== 0 && Se !== null) {
          var g = Se,
            O = Rt;
          switch (Ce) {
            case 8:
              (Is(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var k = Ce;
              if (((Ce = 0), (Rt = null), Sl(e, g, O, k), n && pl)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((k = Ce), (Ce = 0), (Rt = null), Sl(e, g, O, k));
          }
        }
        (Lv(), (d = Be));
        break;
      } catch (F) {
        Lm(e, F);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (dn = _a = null),
      (Oe = l),
      (L.H = i),
      (L.A = r),
      Se === null && ((De = null), (xe = 0), xi()),
      d
    );
  }
  function Lv() {
    for (; Se !== null; ) Vm(Se);
  }
  function Qv(e, t) {
    var n = Oe;
    Oe |= 2;
    var l = Bm(),
      i = Ym();
    De !== e || xe !== t
      ? ((er = null), (Ii = vt() + 500), bl(e, t))
      : (pl = Ul(e, t));
    e: do
      try {
        if (Ce !== 0 && Se !== null) {
          t = Se;
          var r = Rt;
          t: switch (Ce) {
            case 1:
              ((Ce = 0), (Rt = null), Sl(e, t, r, 1));
              break;
            case 2:
            case 9:
              if (Wd(r)) {
                ((Ce = 0), (Rt = null), Gm(t));
                break;
              }
              ((t = function () {
                ((Ce !== 2 && Ce !== 9) || De !== e || (Ce = 7), nn(e));
              }),
                r.then(t, t));
              break e;
            case 3:
              Ce = 7;
              break e;
            case 4:
              Ce = 5;
              break e;
            case 7:
              Wd(r)
                ? ((Ce = 0), (Rt = null), Gm(t))
                : ((Ce = 0), (Rt = null), Sl(e, t, r, 7));
              break;
            case 5:
              var d = null;
              switch (Se.tag) {
                case 26:
                  d = Se.memoizedState;
                case 5:
                case 27:
                  var g = Se;
                  if (d ? Cy(d) : g.stateNode.complete) {
                    ((Ce = 0), (Rt = null));
                    var O = g.sibling;
                    if (O !== null) Se = O;
                    else {
                      var k = g.return;
                      k !== null ? ((Se = k), ar(k)) : (Se = null);
                    }
                    break t;
                  }
              }
              ((Ce = 0), (Rt = null), Sl(e, t, r, 5));
              break;
            case 6:
              ((Ce = 0), (Rt = null), Sl(e, t, r, 6));
              break;
            case 8:
              (Is(), (Be = 6));
              break e;
            default:
              throw Error(s(462));
          }
        }
        Bv();
        break;
      } catch (F) {
        Lm(e, F);
      }
    while (!0);
    return (
      (dn = _a = null),
      (L.H = l),
      (L.A = i),
      (Oe = n),
      Se !== null ? 0 : ((De = null), (xe = 0), xi(), Be)
    );
  }
  function Bv() {
    for (; Se !== null && !yc(); ) Vm(Se);
  }
  function Vm(e) {
    var t = dm(e.alternate, e, xn);
    ((e.memoizedProps = e.pendingProps), t === null ? ar(e) : (Se = t));
  }
  function Gm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = im(n, t, t.pendingProps, t.type, void 0, xe);
        break;
      case 11:
        t = im(n, t, t.pendingProps, t.type.render, t.ref, xe);
        break;
      case 5:
        ys(t);
      default:
        (mm(n, t), (t = Se = Yd(t, xn)), (t = dm(n, t, xn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ar(e) : (Se = t));
  }
  function Sl(e, t, n, l) {
    ((dn = _a = null), ys(t), (sl = null), (Wl = 0));
    var i = t.return;
    try {
      if (Cv(e, i, t, n, xe)) {
        ((Be = 1), ki(e, qt(n, e.current)), (Se = null));
        return;
      }
    } catch (r) {
      if (i !== null) throw ((Se = i), r);
      ((Be = 1), ki(e, qt(n, e.current)), (Se = null));
      return;
    }
    t.flags & 32768
      ? (Te || l === 1
          ? (e = !0)
          : pl || (xe & 536870912) !== 0
            ? (e = !1)
            : ((Fn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = _t.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        km(t, e))
      : ar(t);
  }
  function ar(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        km(t, Fn);
        return;
      }
      e = t.return;
      var n = zv(t.alternate, t, xn);
      if (n !== null) {
        Se = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function km(e, t) {
    do {
      var n = Nv(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Se = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Se = e;
        return;
      }
      Se = e = n;
    } while (e !== null);
    ((Be = 6), (Se = null));
  }
  function Xm(e, t, n, l, i, r, d, g, O) {
    e.cancelPendingCommit = null;
    do lr();
    while (Ke !== 0);
    if ((Oe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((r = t.lanes | t.childLanes),
        (r |= Vc),
        b0(e, n, r, d, g, O),
        e === De && ((Se = De = null), (xe = 0)),
        (vl = t),
        (In = e),
        (_n = n),
        (Fs = r),
        (Ps = i),
        (jm = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            kv(ii, function () {
              return (Fm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = L.T), (L.T = null), (i = P.p), (P.p = 2), (d = Oe), (Oe |= 4));
        try {
          Dv(e, t, n);
        } finally {
          ((Oe = d), (P.p = i), (L.T = l));
        }
      }
      ((Ke = 1), Zm(), Km(), Jm());
    }
  }
  function Zm() {
    if (Ke === 1) {
      Ke = 0;
      var e = In,
        t = vl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = L.T), (L.T = null));
        var l = P.p;
        P.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          Am(t, e);
          var r = ho,
            d = Nd(e.containerInfo),
            g = r.focusedElem,
            O = r.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            zd(g.ownerDocument.documentElement, g)
          ) {
            if (O !== null && Hc(g)) {
              var k = O.start,
                F = O.end;
              if ((F === void 0 && (F = k), "selectionStart" in g))
                ((g.selectionStart = k),
                  (g.selectionEnd = Math.min(F, g.value.length)));
              else {
                var te = g.ownerDocument || document,
                  Z = (te && te.defaultView) || window;
                if (Z.getSelection) {
                  var J = Z.getSelection(),
                    se = g.textContent.length,
                    me = Math.min(O.start, se),
                    Ne = O.end === void 0 ? me : Math.min(O.end, se);
                  !J.extend && me > Ne && ((d = Ne), (Ne = me), (me = d));
                  var B = wd(g, me),
                    D = wd(g, Ne);
                  if (
                    B &&
                    D &&
                    (J.rangeCount !== 1 ||
                      J.anchorNode !== B.node ||
                      J.anchorOffset !== B.offset ||
                      J.focusNode !== D.node ||
                      J.focusOffset !== D.offset)
                  ) {
                    var G = te.createRange();
                    (G.setStart(B.node, B.offset),
                      J.removeAllRanges(),
                      me > Ne
                        ? (J.addRange(G), J.extend(D.node, D.offset))
                        : (G.setEnd(D.node, D.offset), J.addRange(G)));
                  }
                }
              }
            }
            for (te = [], J = g; (J = J.parentNode); )
              J.nodeType === 1 &&
                te.push({ element: J, left: J.scrollLeft, top: J.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < te.length;
              g++
            ) {
              var I = te[g];
              ((I.element.scrollLeft = I.left), (I.element.scrollTop = I.top));
            }
          }
          ((pr = !!fo), (ho = fo = null));
        } finally {
          ((Oe = i), (P.p = l), (L.T = n));
        }
      }
      ((e.current = t), (Ke = 2));
    }
  }
  function Km() {
    if (Ke === 2) {
      Ke = 0;
      var e = In,
        t = vl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = L.T), (L.T = null));
        var l = P.p;
        P.p = 2;
        var i = Oe;
        Oe |= 4;
        try {
          Em(e, t.alternate, t);
        } finally {
          ((Oe = i), (P.p = l), (L.T = n));
        }
      }
      Ke = 3;
    }
  }
  function Jm() {
    if (Ke === 4 || Ke === 3) {
      ((Ke = 0), o0());
      var e = In,
        t = vl,
        n = _n,
        l = jm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ke = 5)
        : ((Ke = 0), (vl = In = null), $m(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Wn = null),
        vc(n),
        (t = t.stateNode),
        bt && typeof bt.onCommitFiberRoot == "function")
      )
        try {
          bt.onCommitFiberRoot(jl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = L.T), (i = P.p), (P.p = 2), (L.T = null));
        try {
          for (var r = e.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            r(g.value, { componentStack: g.stack });
          }
        } finally {
          ((L.T = t), (P.p = i));
        }
      }
      ((_n & 3) !== 0 && lr(),
        nn(e),
        (i = e.pendingLanes),
        (n & 261930) !== 0 && (i & 42) !== 0
          ? e === Ws
            ? yu++
            : ((yu = 0), (Ws = e))
          : (yu = 0),
        pu(0));
    }
  }
  function $m(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Fl(t)));
  }
  function lr() {
    return (Zm(), Km(), Jm(), Fm());
  }
  function Fm() {
    if (Ke !== 5) return !1;
    var e = In,
      t = Fs;
    Fs = 0;
    var n = vc(_n),
      l = L.T,
      i = P.p;
    try {
      ((P.p = 32 > n ? 32 : n), (L.T = null), (n = Ps), (Ps = null));
      var r = In,
        d = _n;
      if (((Ke = 0), (vl = In = null), (_n = 0), (Oe & 6) !== 0))
        throw Error(s(331));
      var g = Oe;
      if (
        ((Oe |= 4),
        zm(r.current),
        Cm(r, r.current, d, n),
        (Oe = g),
        pu(0, !1),
        bt && typeof bt.onPostCommitFiberRoot == "function")
      )
        try {
          bt.onPostCommitFiberRoot(jl, r);
        } catch {}
      return !0;
    } finally {
      ((P.p = i), (L.T = l), $m(e, t));
    }
  }
  function Pm(e, t, n) {
    ((t = qt(n, t)),
      (t = ws(e.stateNode, t, 2)),
      (e = Zn(e, t, 2)),
      e !== null && (ql(e, 2), nn(e)));
  }
  function Me(e, t, n) {
    if (e.tag === 3) Pm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Wn === null || !Wn.has(l)))
          ) {
            ((e = qt(n, e)),
              (n = Wh(2)),
              (l = Zn(t, n, 2)),
              l !== null && (Ih(n, l, t, e), ql(l, 2), nn(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function to(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new qv();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(n) ||
      ((Ks = !0), i.add(n), (e = Yv.bind(null, e, t, n)), t.then(e, e));
  }
  function Yv(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      De === e &&
        (xe & n) === n &&
        (Be === 4 || (Be === 3 && (xe & 62914560) === xe && 300 > vt() - Wi)
          ? (Oe & 2) === 0 && bl(e, 0)
          : (Js |= n),
        gl === xe && (gl = 0)),
      nn(e));
  }
  function Wm(e, t) {
    (t === 0 && (t = Zf()), (e = Sa(e, t)), e !== null && (ql(e, t), nn(e)));
  }
  function Vv(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Wm(e, n));
  }
  function Gv(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (l !== null && l.delete(t), Wm(e, n));
  }
  function kv(e, t) {
    return Dl(e, t);
  }
  var ur = null,
    El = null,
    no = !1,
    ir = !1,
    ao = !1,
    ta = 0;
  function nn(e) {
    (e !== El &&
      e.next === null &&
      (El === null ? (ur = El = e) : (El = El.next = e)),
      (ir = !0),
      no || ((no = !0), Zv()));
  }
  function pu(e, t) {
    if (!ao && ir) {
      ao = !0;
      do
        for (var n = !1, l = ur; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              ((r = (1 << (31 - St(42 | e) + 1)) - 1),
                (r &= i & ~(d & ~g)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), ny(l, r));
          } else
            ((r = xe),
              (r = oi(
                l,
                l === De ? r : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || Ul(l, r) || ((n = !0), ny(l, r)));
          l = l.next;
        }
      while (n);
      ao = !1;
    }
  }
  function Xv() {
    Im();
  }
  function Im() {
    ir = no = !1;
    var e = 0;
    ta !== 0 && n1() && (e = ta);
    for (var t = vt(), n = null, l = ur; l !== null; ) {
      var i = l.next,
        r = ey(l, t);
      (r === 0
        ? ((l.next = null),
          n === null ? (ur = i) : (n.next = i),
          i === null && (El = n))
        : ((n = l), (e !== 0 || (r & 3) !== 0) && (ir = !0)),
        (l = i));
    }
    ((Ke !== 0 && Ke !== 5) || pu(e), ta !== 0 && (ta = 0));
  }
  function ey(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;
    ) {
      var d = 31 - St(r),
        g = 1 << d,
        O = i[d];
      (O === -1
        ? ((g & n) === 0 || (g & l) !== 0) && (i[d] = v0(g, t))
        : O <= t && (e.expiredLanes |= g),
        (r &= ~g));
    }
    if (
      ((t = De),
      (n = xe),
      (n = oi(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (Ce === 2 || Ce === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Ya(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ul(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Ya(l), vc(n))) {
        case 2:
        case 8:
          n = kf;
          break;
        case 32:
          n = ii;
          break;
        case 268435456:
          n = Xf;
          break;
        default:
          n = ii;
      }
      return (
        (l = ty.bind(null, e)),
        (n = Dl(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Ya(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function ty(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (lr() && e.callbackNode !== n) return null;
    var l = xe;
    return (
      (l = oi(
        e,
        e === De ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (qm(e, l, t),
          ey(e, vt()),
          e.callbackNode != null && e.callbackNode === n
            ? ty.bind(null, e)
            : null)
    );
  }
  function ny(e, t) {
    if (lr()) return null;
    qm(e, t, !0);
  }
  function Zv() {
    l1(function () {
      (Oe & 6) !== 0 ? Dl(Gf, Xv) : Im();
    });
  }
  function lo() {
    if (ta === 0) {
      var e = il;
      (e === 0 && ((e = ri), (ri <<= 1), (ri & 261888) === 0 && (ri = 256)),
        (ta = e));
    }
    return ta;
  }
  function ay(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : mi("" + e);
  }
  function ly(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Kv(e, t, n, l, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var r = ay((i[ft] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[ft] || null)
          ? ay(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((r = t), (d = null)));
      var g = new vi("action", "action", null, l, i);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ta !== 0) {
                  var O = d ? ly(i, d) : new FormData(i);
                  Ts(
                    n,
                    { pending: !0, data: O, method: i.method, action: r },
                    null,
                    O,
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (O = d ? ly(i, d) : new FormData(i)),
                  Ts(
                    n,
                    { pending: !0, data: O, method: i.method, action: r },
                    r,
                    O,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var uo = 0; uo < Yc.length; uo++) {
    var io = Yc[uo],
      Jv = io.toLowerCase(),
      $v = io[0].toUpperCase() + io.slice(1);
    kt(Jv, "on" + $v);
  }
  (kt(Ud, "onAnimationEnd"),
    kt(qd, "onAnimationIteration"),
    kt(Hd, "onAnimationStart"),
    kt("dblclick", "onDoubleClick"),
    kt("focusin", "onFocus"),
    kt("focusout", "onBlur"),
    kt(fv, "onTransitionRun"),
    kt(dv, "onTransitionStart"),
    kt(hv, "onTransitionCancel"),
    kt(Ld, "onTransitionEnd"),
    Za("onMouseEnter", ["mouseout", "mouseover"]),
    Za("onMouseLeave", ["mouseout", "mouseover"]),
    Za("onPointerEnter", ["pointerout", "pointerover"]),
    Za("onPointerLeave", ["pointerout", "pointerover"]),
    pa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    pa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    pa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    pa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var gu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Fv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(gu),
    );
  function uy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        i = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              O = g.instance,
              k = g.currentTarget;
            if (((g = g.listener), O !== r && i.isPropagationStopped()))
              break e;
            ((r = g), (i.currentTarget = k));
            try {
              r(i);
            } catch (F) {
              Ei(F);
            }
            ((i.currentTarget = null), (r = O));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (O = g.instance),
              (k = g.currentTarget),
              (g = g.listener),
              O !== r && i.isPropagationStopped())
            )
              break e;
            ((r = g), (i.currentTarget = k));
            try {
              r(i);
            } catch (F) {
              Ei(F);
            }
            ((i.currentTarget = null), (r = O));
          }
      }
    }
  }
  function Ee(e, t) {
    var n = t[bc];
    n === void 0 && (n = t[bc] = new Set());
    var l = e + "__bubble";
    n.has(l) || (iy(t, e, 2, !1), n.add(l));
  }
  function ro(e, t, n) {
    var l = 0;
    (t && (l |= 4), iy(n, e, l, t));
  }
  var rr = "_reactListening" + Math.random().toString(36).slice(2);
  function co(e) {
    if (!e[rr]) {
      ((e[rr] = !0),
        If.forEach(function (n) {
          n !== "selectionchange" && (Fv.has(n) || ro(n, !1, e), ro(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rr] || ((t[rr] = !0), ro("selectionchange", !1, t));
    }
  }
  function iy(e, t, n, l) {
    switch (Uy(t)) {
      case 2:
        var i = T1;
        break;
      case 8:
        i = R1;
        break;
      default:
        i = To;
    }
    ((n = i.bind(null, t, n, e)),
      (i = void 0),
      !Cc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1));
  }
  function so(e, t, n, l, i) {
    var r = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === i) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var O = d.tag;
              if ((O === 3 || O === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Ga(g)), d === null)) return;
            if (((O = d.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              l = r = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    fd(function () {
      var k = r,
        F = Ac(n),
        te = [];
      e: {
        var Z = Qd.get(e);
        if (Z !== void 0) {
          var J = vi,
            se = e;
          switch (e) {
            case "keypress":
              if (pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              J = G0;
              break;
            case "focusin":
              ((se = "focus"), (J = Nc));
              break;
            case "focusout":
              ((se = "blur"), (J = Nc));
              break;
            case "beforeblur":
            case "afterblur":
              J = Nc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = md;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = z0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Z0;
              break;
            case Ud:
            case qd:
            case Hd:
              J = j0;
              break;
            case Ld:
              J = J0;
              break;
            case "scroll":
            case "scrollend":
              J = M0;
              break;
            case "wheel":
              J = F0;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = q0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = pd;
              break;
            case "toggle":
            case "beforetoggle":
              J = W0;
          }
          var me = (t & 4) !== 0,
            Ne = !me && (e === "scroll" || e === "scrollend"),
            B = me ? (Z !== null ? Z + "Capture" : null) : Z;
          me = [];
          for (var D = k, G; D !== null; ) {
            var I = D;
            if (
              ((G = I.stateNode),
              (I = I.tag),
              (I !== 5 && I !== 26 && I !== 27) ||
                G === null ||
                B === null ||
                ((I = Ql(D, B)), I != null && me.push(vu(D, I, G))),
              Ne)
            )
              break;
            D = D.return;
          }
          0 < me.length &&
            ((Z = new J(Z, se, null, n, F)),
            te.push({ event: Z, listeners: me }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((Z = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            Z &&
              n !== Rc &&
              (se = n.relatedTarget || n.fromElement) &&
              (Ga(se) || se[Va]))
          )
            break e;
          if (
            (J || Z) &&
            ((Z =
              F.window === F
                ? F
                : (Z = F.ownerDocument)
                  ? Z.defaultView || Z.parentWindow
                  : window),
            J
              ? ((se = n.relatedTarget || n.toElement),
                (J = k),
                (se = se ? Ga(se) : null),
                se !== null &&
                  ((Ne = f(se)),
                  (me = se.tag),
                  se !== Ne || (me !== 5 && me !== 27 && me !== 6)) &&
                  (se = null))
              : ((J = null), (se = k)),
            J !== se)
          ) {
            if (
              ((me = md),
              (I = "onMouseLeave"),
              (B = "onMouseEnter"),
              (D = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((me = pd),
                (I = "onPointerLeave"),
                (B = "onPointerEnter"),
                (D = "pointer")),
              (Ne = J == null ? Z : Ll(J)),
              (G = se == null ? Z : Ll(se)),
              (Z = new me(I, D + "leave", J, n, F)),
              (Z.target = Ne),
              (Z.relatedTarget = G),
              (I = null),
              Ga(F) === k &&
                ((me = new me(B, D + "enter", se, n, F)),
                (me.target = G),
                (me.relatedTarget = Ne),
                (I = me)),
              (Ne = I),
              J && se)
            )
              t: {
                for (me = Pv, B = J, D = se, G = 0, I = B; I; I = me(I)) G++;
                I = 0;
                for (var he = D; he; he = me(he)) I++;
                for (; 0 < G - I; ) ((B = me(B)), G--);
                for (; 0 < I - G; ) ((D = me(D)), I--);
                for (; G--; ) {
                  if (B === D || (D !== null && B === D.alternate)) {
                    me = B;
                    break t;
                  }
                  ((B = me(B)), (D = me(D)));
                }
                me = null;
              }
            else me = null;
            (J !== null && ry(te, Z, J, me, !1),
              se !== null && Ne !== null && ry(te, Ne, se, me, !0));
          }
        }
        e: {
          if (
            ((Z = k ? Ll(k) : window),
            (J = Z.nodeName && Z.nodeName.toLowerCase()),
            J === "select" || (J === "input" && Z.type === "file"))
          )
            var Re = Td;
          else if (xd(Z))
            if (Rd) Re = cv;
            else {
              Re = iv;
              var fe = uv;
            }
          else
            ((J = Z.nodeName),
              !J ||
              J.toLowerCase() !== "input" ||
              (Z.type !== "checkbox" && Z.type !== "radio")
                ? k && Tc(k.elementType) && (Re = Td)
                : (Re = rv));
          if (Re && (Re = Re(e, k))) {
            _d(te, Re, n, F);
            break e;
          }
          (fe && fe(e, Z, k),
            e === "focusout" &&
              k &&
              Z.type === "number" &&
              k.memoizedProps.value != null &&
              _c(Z, "number", Z.value));
        }
        switch (((fe = k ? Ll(k) : window), e)) {
          case "focusin":
            (xd(fe) || fe.contentEditable === "true") &&
              ((Wa = fe), (Lc = k), (Kl = null));
            break;
          case "focusout":
            Kl = Lc = Wa = null;
            break;
          case "mousedown":
            Qc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Qc = !1), Dd(te, n, F));
            break;
          case "selectionchange":
            if (ov) break;
          case "keydown":
          case "keyup":
            Dd(te, n, F);
        }
        var ge;
        if (jc)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          Pa
            ? Sd(e, n) && (_e = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (_e = "onCompositionStart");
        (_e &&
          (gd &&
            n.locale !== "ko" &&
            (Pa || _e !== "onCompositionStart"
              ? _e === "onCompositionEnd" && Pa && (ge = dd())
              : ((Qn = F),
                (Mc = "value" in Qn ? Qn.value : Qn.textContent),
                (Pa = !0))),
          (fe = cr(k, _e)),
          0 < fe.length &&
            ((_e = new yd(_e, e, null, n, F)),
            te.push({ event: _e, listeners: fe }),
            ge
              ? (_e.data = ge)
              : ((ge = Ed(n)), ge !== null && (_e.data = ge)))),
          (ge = ev ? tv(e, n) : nv(e, n)) &&
            ((_e = cr(k, "onBeforeInput")),
            0 < _e.length &&
              ((fe = new yd("onBeforeInput", "beforeinput", null, n, F)),
              te.push({ event: fe, listeners: _e }),
              (fe.data = ge))),
          Kv(te, e, k, n, F));
      }
      uy(te, t);
    });
  }
  function vu(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function cr(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var i = e,
        r = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          r === null ||
          ((i = Ql(e, n)),
          i != null && l.unshift(vu(e, i, r)),
          (i = Ql(e, t)),
          i != null && l.push(vu(e, i, r))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Pv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ry(e, t, n, l, i) {
    for (var r = t._reactName, d = []; n !== null && n !== l; ) {
      var g = n,
        O = g.alternate,
        k = g.stateNode;
      if (((g = g.tag), O !== null && O === l)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        k === null ||
        ((O = k),
        i
          ? ((k = Ql(n, r)), k != null && d.unshift(vu(n, k, O)))
          : i || ((k = Ql(n, r)), k != null && d.push(vu(n, k, O)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Wv = /\r\n?/g,
    Iv = /\u0000|\uFFFD/g;
  function cy(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Wv,
        `
`,
      )
      .replace(Iv, "");
  }
  function sy(e, t) {
    return ((t = cy(t)), cy(e) === t);
  }
  function ze(e, t, n, l, i, r) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Ja(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Ja(e, "" + l);
        break;
      case "className":
        di(e, "class", l);
        break;
      case "tabIndex":
        di(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        di(e, n, l);
        break;
      case "style":
        sd(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          di(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = mi("" + l)), e.setAttribute(n, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (t !== "input" && ze(e, t, "name", i.name, i, null),
                ze(e, t, "formEncType", i.formEncType, i, null),
                ze(e, t, "formMethod", i.formMethod, i, null),
                ze(e, t, "formTarget", i.formTarget, i, null))
              : (ze(e, t, "encType", i.encType, i, null),
                ze(e, t, "method", i.method, i, null),
                ze(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((l = mi("" + l)), e.setAttribute(n, l));
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "onScroll":
        l != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ee("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = mi("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "" + l)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(n, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case "popover":
        (Ee("beforetoggle", e), Ee("toggle", e), fi(e, "popover", l));
        break;
      case "xlinkActuate":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        rn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        rn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        fi(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = O0.get(n) || n), fi(e, n, l));
    }
  }
  function oo(e, t, n, l, i, r) {
    switch (n) {
      case "style":
        sd(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (i.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Ja(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Ja(e, "" + l);
        break;
      case "onScroll":
        l != null && Ee("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ee("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ed.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((i = n.endsWith("Capture")),
              (t = n.slice(2, i ? n.length - 7 : void 0)),
              (r = e[ft] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && e.removeEventListener(t, r, i),
              typeof l == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, i));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, "")
                : fi(e, n, l);
          }
    }
  }
  function ut(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ee("error", e), Ee("load", e));
        var l = !1,
          i = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ze(e, t, r, d, n, null);
              }
          }
        (i && ze(e, t, "srcSet", n.srcSet, n, null),
          l && ze(e, t, "src", n.src, n, null));
        return;
      case "input":
        Ee("invalid", e);
        var g = (r = d = i = null),
          O = null,
          k = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var F = n[l];
            if (F != null)
              switch (l) {
                case "name":
                  i = F;
                  break;
                case "type":
                  d = F;
                  break;
                case "checked":
                  O = F;
                  break;
                case "defaultChecked":
                  k = F;
                  break;
                case "value":
                  r = F;
                  break;
                case "defaultValue":
                  g = F;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (F != null) throw Error(s(137, t));
                  break;
                default:
                  ze(e, t, l, F, n, null);
              }
          }
        ud(e, r, g, O, k, d, i, !1);
        return;
      case "select":
        (Ee("invalid", e), (l = d = r = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((g = n[i]), g != null))
            switch (i) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                ze(e, t, i, g, n, null);
            }
        ((t = r),
          (n = d),
          (e.multiple = !!l),
          t != null ? Ka(e, !!l, t, !1) : n != null && Ka(e, !!l, n, !0));
        return;
      case "textarea":
        (Ee("invalid", e), (r = i = l = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                i = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(s(91));
                break;
              default:
                ze(e, t, d, g, n, null);
            }
        rd(e, l, i, r);
        return;
      case "option":
        for (O in n)
          n.hasOwnProperty(O) &&
            ((l = n[O]), l != null) &&
            (O === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : ze(e, t, O, l, n, null));
        return;
      case "dialog":
        (Ee("beforetoggle", e),
          Ee("toggle", e),
          Ee("cancel", e),
          Ee("close", e));
        break;
      case "iframe":
      case "object":
        Ee("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < gu.length; l++) Ee(gu[l], e);
        break;
      case "image":
        (Ee("error", e), Ee("load", e));
        break;
      case "details":
        Ee("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ee("error", e), Ee("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (k in n)
          if (n.hasOwnProperty(k) && ((l = n[k]), l != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ze(e, t, k, l, n, null);
            }
        return;
      default:
        if (Tc(t)) {
          for (F in n)
            n.hasOwnProperty(F) &&
              ((l = n[F]), l !== void 0 && oo(e, t, F, l, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((l = n[g]), l != null && ze(e, t, g, l, n, null));
  }
  function e1(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          r = null,
          d = null,
          g = null,
          O = null,
          k = null,
          F = null;
        for (J in n) {
          var te = n[J];
          if (n.hasOwnProperty(J) && te != null)
            switch (J) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                O = te;
              default:
                l.hasOwnProperty(J) || ze(e, t, J, null, l, te);
            }
        }
        for (var Z in l) {
          var J = l[Z];
          if (((te = n[Z]), l.hasOwnProperty(Z) && (J != null || te != null)))
            switch (Z) {
              case "type":
                r = J;
                break;
              case "name":
                i = J;
                break;
              case "checked":
                k = J;
                break;
              case "defaultChecked":
                F = J;
                break;
              case "value":
                d = J;
                break;
              case "defaultValue":
                g = J;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null) throw Error(s(137, t));
                break;
              default:
                J !== te && ze(e, t, Z, J, l, te);
            }
        }
        xc(e, d, g, O, k, F, r, i);
        return;
      case "select":
        J = d = g = Z = null;
        for (r in n)
          if (((O = n[r]), n.hasOwnProperty(r) && O != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                J = O;
              default:
                l.hasOwnProperty(r) || ze(e, t, r, null, l, O);
            }
        for (i in l)
          if (
            ((r = l[i]),
            (O = n[i]),
            l.hasOwnProperty(i) && (r != null || O != null))
          )
            switch (i) {
              case "value":
                Z = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                d = r;
              default:
                r !== O && ze(e, t, i, r, l, O);
            }
        ((t = g),
          (n = d),
          (l = J),
          Z != null
            ? Ka(e, !!n, Z, !1)
            : !!l != !!n &&
              (t != null ? Ka(e, !!n, t, !0) : Ka(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        J = Z = null;
        for (g in n)
          if (
            ((i = n[g]),
            n.hasOwnProperty(g) && i != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, g, null, l, i);
            }
        for (d in l)
          if (
            ((i = l[d]),
            (r = n[d]),
            l.hasOwnProperty(d) && (i != null || r != null))
          )
            switch (d) {
              case "value":
                Z = i;
                break;
              case "defaultValue":
                J = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(s(91));
                break;
              default:
                i !== r && ze(e, t, d, i, l, r);
            }
        id(e, Z, J);
        return;
      case "option":
        for (var se in n)
          ((Z = n[se]),
            n.hasOwnProperty(se) &&
              Z != null &&
              !l.hasOwnProperty(se) &&
              (se === "selected"
                ? (e.selected = !1)
                : ze(e, t, se, null, l, Z)));
        for (O in l)
          ((Z = l[O]),
            (J = n[O]),
            l.hasOwnProperty(O) &&
              Z !== J &&
              (Z != null || J != null) &&
              (O === "selected"
                ? (e.selected =
                    Z && typeof Z != "function" && typeof Z != "symbol")
                : ze(e, t, O, Z, l, J)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var me in n)
          ((Z = n[me]),
            n.hasOwnProperty(me) &&
              Z != null &&
              !l.hasOwnProperty(me) &&
              ze(e, t, me, null, l, Z));
        for (k in l)
          if (
            ((Z = l[k]),
            (J = n[k]),
            l.hasOwnProperty(k) && Z !== J && (Z != null || J != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(s(137, t));
                break;
              default:
                ze(e, t, k, Z, l, J);
            }
        return;
      default:
        if (Tc(t)) {
          for (var Ne in n)
            ((Z = n[Ne]),
              n.hasOwnProperty(Ne) &&
                Z !== void 0 &&
                !l.hasOwnProperty(Ne) &&
                oo(e, t, Ne, void 0, l, Z));
          for (F in l)
            ((Z = l[F]),
              (J = n[F]),
              !l.hasOwnProperty(F) ||
                Z === J ||
                (Z === void 0 && J === void 0) ||
                oo(e, t, F, Z, l, J));
          return;
        }
    }
    for (var B in n)
      ((Z = n[B]),
        n.hasOwnProperty(B) &&
          Z != null &&
          !l.hasOwnProperty(B) &&
          ze(e, t, B, null, l, Z));
    for (te in l)
      ((Z = l[te]),
        (J = n[te]),
        !l.hasOwnProperty(te) ||
          Z === J ||
          (Z == null && J == null) ||
          ze(e, t, te, Z, l, J));
  }
  function oy(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function t1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var i = n[l],
          r = i.transferSize,
          d = i.initiatorType,
          g = i.duration;
        if (r && g && oy(d)) {
          for (d = 0, g = i.responseEnd, l += 1; l < n.length; l++) {
            var O = n[l],
              k = O.startTime;
            if (k > g) break;
            var F = O.transferSize,
              te = O.initiatorType;
            F &&
              oy(te) &&
              ((O = O.responseEnd), (d += F * (O < g ? 1 : (g - k) / (O - k))));
          }
          if ((--l, (t += (8 * (r + d)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var fo = null,
    ho = null;
  function sr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dy(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function mo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yo = null;
  function n1() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === yo
        ? !1
        : ((yo = e), !0)
      : ((yo = null), !1);
  }
  var hy = typeof setTimeout == "function" ? setTimeout : void 0,
    a1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    my = typeof Promise == "function" ? Promise : void 0,
    l1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof my < "u"
          ? function (e) {
              return my.resolve(null).then(e).catch(u1);
            }
          : hy;
  function u1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function na(e) {
    return e === "head";
  }
  function yy(e, t) {
    var n = t,
      l = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            (e.removeChild(i), Rl(t));
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") bu(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), bu(n));
          for (var r = n.firstChild; r; ) {
            var d = r.nextSibling,
              g = r.nodeName;
            (r[Hl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = d));
          }
        } else n === "body" && bu(e.ownerDocument.body);
      n = i;
    } while (n);
    Rl(t);
  }
  function py(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = l;
    } while (n);
  }
  function po(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (po(n), Sc(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function i1(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Hl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = Yt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function r1(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Yt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function gy(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Yt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function go(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function vo(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function c1(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), n.removeEventListener("DOMContentLoaded", l));
      };
      (n.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function Yt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var bo = null;
  function vy(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Yt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function by(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Sy(e, t, n) {
    switch (((t = sr(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function bu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Sc(e);
  }
  var Vt = new Map(),
    Ey = new Set();
  function or(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Tn = P.d;
  P.d = { f: s1, r: o1, D: f1, C: d1, L: h1, m: m1, X: p1, S: y1, M: g1 };
  function s1() {
    var e = Tn.f(),
      t = tr();
    return e || t;
  }
  function o1(e) {
    var t = ka(e);
    t !== null && t.tag === 5 && t.type === "form" ? Lh(t) : Tn.r(e);
  }
  var xl = typeof document > "u" ? null : document;
  function xy(e, t, n) {
    var l = xl;
    if (l && typeof t == "string" && t) {
      var i = jt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof n == "string" && (i += '[crossorigin="' + n + '"]'),
        Ey.has(i) ||
          (Ey.add(i),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            ut(t, "link", e),
            $e(t),
            l.head.appendChild(t))));
    }
  }
  function f1(e) {
    (Tn.D(e), xy("dns-prefetch", e, null));
  }
  function d1(e, t) {
    (Tn.C(e, t), xy("preconnect", e, t));
  }
  function h1(e, t, n) {
    Tn.L(e, t, n);
    var l = xl;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((i += '[imagesrcset="' + jt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (i += '[imagesizes="' + jt(n.imageSizes) + '"]'))
        : (i += '[href="' + jt(e) + '"]');
      var r = i;
      switch (t) {
        case "style":
          r = _l(e);
          break;
        case "script":
          r = Tl(e);
      }
      Vt.has(r) ||
        ((e = v(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        Vt.set(r, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(Su(r))) ||
          (t === "script" && l.querySelector(Eu(r))) ||
          ((t = l.createElement("link")),
          ut(t, "link", e),
          $e(t),
          l.head.appendChild(t)));
    }
  }
  function m1(e, t) {
    Tn.m(e, t);
    var n = xl;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]',
        r = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Tl(e);
      }
      if (
        !Vt.has(r) &&
        ((e = v({ rel: "modulepreload", href: e }, t)),
        Vt.set(r, e),
        n.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Eu(r))) return;
        }
        ((l = n.createElement("link")),
          ut(l, "link", e),
          $e(l),
          n.head.appendChild(l));
      }
    }
  }
  function y1(e, t, n) {
    Tn.S(e, t, n);
    var l = xl;
    if (l && e) {
      var i = Xa(l).hoistableStyles,
        r = _l(e);
      t = t || "default";
      var d = i.get(r);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(Su(r)))) g.loading = 5;
        else {
          ((e = v({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Vt.get(r)) && So(e, n));
          var O = (d = l.createElement("link"));
          ($e(O),
            ut(O, "link", e),
            (O._p = new Promise(function (k, F) {
              ((O.onload = k), (O.onerror = F));
            })),
            O.addEventListener("load", function () {
              g.loading |= 1;
            }),
            O.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            fr(d, t, l));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }),
          i.set(r, d));
      }
    }
  }
  function p1(e, t) {
    Tn.X(e, t);
    var n = xl;
    if (n && e) {
      var l = Xa(n).hoistableScripts,
        i = Tl(e),
        r = l.get(i);
      r ||
        ((r = n.querySelector(Eu(i))),
        r ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = Vt.get(i)) && Eo(e, t),
          (r = n.createElement("script")),
          $e(r),
          ut(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(i, r));
    }
  }
  function g1(e, t) {
    Tn.M(e, t);
    var n = xl;
    if (n && e) {
      var l = Xa(n).hoistableScripts,
        i = Tl(e),
        r = l.get(i);
      r ||
        ((r = n.querySelector(Eu(i))),
        r ||
          ((e = v({ src: e, async: !0, type: "module" }, t)),
          (t = Vt.get(i)) && Eo(e, t),
          (r = n.createElement("script")),
          $e(r),
          ut(r, "link", e),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(i, r));
    }
  }
  function _y(e, t, n, l) {
    var i = (i = oe.current) ? or(i) : null;
    if (!i) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = _l(n.href)),
            (n = Xa(i).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = _l(n.href);
          var r = Xa(i).hoistableStyles,
            d = r.get(e);
          if (
            (d ||
              ((i = i.ownerDocument || i),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, d),
              (r = i.querySelector(Su(e))) &&
                !r._p &&
                ((d.instance = r), (d.state.loading = 5)),
              Vt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Vt.set(e, n),
                r || v1(i, e, n, d.state))),
            t && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (t && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Tl(n)),
              (n = Xa(i).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function _l(e) {
    return 'href="' + jt(e) + '"';
  }
  function Su(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ty(e) {
    return v({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function v1(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ut(t, "link", n),
        $e(t),
        e.head.appendChild(t));
  }
  function Tl(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Eu(e) {
    return "script[async]" + e;
  }
  function Ry(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + jt(n.href) + '"]');
          if (l) return ((t.instance = l), $e(l), l);
          var i = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            $e(l),
            ut(l, "style", i),
            fr(l, n.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = _l(n.href);
          var r = e.querySelector(Su(i));
          if (r) return ((t.state.loading |= 4), (t.instance = r), $e(r), r);
          ((l = Ty(n)),
            (i = Vt.get(i)) && So(l, i),
            (r = (e.ownerDocument || e).createElement("link")),
            $e(r));
          var d = r;
          return (
            (d._p = new Promise(function (g, O) {
              ((d.onload = g), (d.onerror = O));
            })),
            ut(r, "link", l),
            (t.state.loading |= 4),
            fr(r, n.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = Tl(n.src)),
            (i = e.querySelector(Eu(r)))
              ? ((t.instance = i), $e(i), i)
              : ((l = n),
                (i = Vt.get(r)) && ((l = v({}, n)), Eo(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                $e(i),
                ut(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), fr(l, n.precedence, e));
    return t.instance;
  }
  function fr(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = l.length ? l[l.length - 1] : null,
        r = i,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === t) r = g;
      else if (r !== i) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function So(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Eo(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var dr = null;
  function Ay(e, t, n) {
    if (dr === null) {
      var l = new Map(),
        i = (dr = new Map());
      i.set(n, l);
    } else ((i = dr), (l = i.get(n)), l || ((l = new Map()), i.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), i = 0;
      i < n.length;
      i++
    ) {
      var r = n[i];
      if (
        !(
          r[Hl] ||
          r[tt] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = r.getAttribute(t) || "";
        d = e + d;
        var g = l.get(d);
        g ? g.push(r) : l.set(d, [r]);
      }
    }
    return l;
  }
  function Oy(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function b1(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Cy(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function S1(e, t, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var i = _l(l.href),
          r = t.querySelector(Su(i));
        if (r) {
          ((t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = hr.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = r),
            $e(r));
          return;
        }
        ((r = t.ownerDocument || t),
          (l = Ty(l)),
          (i = Vt.get(i)) && So(l, i),
          (r = r.createElement("link")),
          $e(r));
        var d = r;
        ((d._p = new Promise(function (g, O) {
          ((d.onload = g), (d.onerror = O));
        })),
          ut(r, "link", l),
          (n.instance = r));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = hr.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var xo = 0;
  function E1(e, t) {
    return (
      e.stylesheets && e.count === 0 && yr(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && yr(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4 + t);
            0 < e.imgBytes && xo === 0 && (xo = 62500 * t1());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && yr(e, e.stylesheets), e.unsuspend))
                ) {
                  var r = e.unsuspend;
                  ((e.unsuspend = null), r());
                }
              },
              (e.imgBytes > xo ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function hr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) yr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var mr = null;
  function yr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (mr = new Map()),
        t.forEach(x1, e),
        (mr = null),
        hr.call(e)));
  }
  function x1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = mr.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), mr.set(e, n));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < i.length;
          r++
        ) {
          var d = i[r];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      ((i = t.instance),
        (d = i.getAttribute("data-precedence")),
        (r = n.get(d) || l),
        r === l && n.set(null, i),
        n.set(d, i),
        this.count++,
        (l = hr.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(i, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var xu = {
    $$typeof: E,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0,
  };
  function _1(e, t, n, l, i, r, d, g, O) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = pc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = pc(0)),
      (this.hiddenUpdates = pc(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = r),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = O),
      (this.incompleteTransitions = new Map()));
  }
  function My(e, t, n, l, i, r, d, g, O, k, F, te) {
    return (
      (e = new _1(e, t, n, d, O, k, F, te, g)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = xt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = es()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: l, isDehydrated: n, cache: t }),
      ls(r),
      e
    );
  }
  function wy(e) {
    return e ? ((e = tl), e) : tl;
  }
  function zy(e, t, n, l, i, r) {
    ((i = wy(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = Xn(t)),
      (l.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (n = Zn(e, l, t)),
      n !== null && (gt(n, e, t), eu(n, e, t)));
  }
  function Ny(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _o(e, t) {
    (Ny(e, t), (e = e.alternate) && Ny(e, t));
  }
  function Dy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Sa(e, 67108864);
      (t !== null && gt(t, e, 67108864), _o(e, 67108864));
    }
  }
  function jy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ot();
      t = gc(t);
      var n = Sa(e, t);
      (n !== null && gt(n, e, t), _o(e, t));
    }
  }
  var pr = !0;
  function T1(e, t, n, l) {
    var i = L.T;
    L.T = null;
    var r = P.p;
    try {
      ((P.p = 2), To(e, t, n, l));
    } finally {
      ((P.p = r), (L.T = i));
    }
  }
  function R1(e, t, n, l) {
    var i = L.T;
    L.T = null;
    var r = P.p;
    try {
      ((P.p = 8), To(e, t, n, l));
    } finally {
      ((P.p = r), (L.T = i));
    }
  }
  function To(e, t, n, l) {
    if (pr) {
      var i = Ro(l);
      if (i === null) (so(e, t, l, gr, n), qy(e, l));
      else if (O1(i, e, t, n, l)) l.stopPropagation();
      else if ((qy(e, l), t & 4 && -1 < A1.indexOf(e))) {
        for (; i !== null; ) {
          var r = ka(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var d = ya(r.pendingLanes);
                  if (d !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var O = 1 << (31 - St(d));
                      ((g.entanglements[1] |= O), (d &= ~O));
                    }
                    (nn(r), (Oe & 6) === 0 && ((Ii = vt() + 500), pu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = Sa(r, 2)), g !== null && gt(g, r, 2), tr(), _o(r, 2));
            }
          if (((r = Ro(l)), r === null && so(e, t, l, gr, n), r === i)) break;
          i = r;
        }
        i !== null && l.stopPropagation();
      } else so(e, t, l, null, n);
    }
  }
  function Ro(e) {
    return ((e = Ac(e)), Ao(e));
  }
  var gr = null;
  function Ao(e) {
    if (((gr = null), (e = Ga(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((gr = e), null);
  }
  function Uy(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (f0()) {
          case Gf:
            return 2;
          case kf:
            return 8;
          case ii:
          case d0:
            return 32;
          case Xf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oo = !1,
    aa = null,
    la = null,
    ua = null,
    _u = new Map(),
    Tu = new Map(),
    ia = [],
    A1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function qy(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        la = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        _u.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tu.delete(t.pointerId);
    }
  }
  function Ru(e, t, n, l, i, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [i],
        }),
        t !== null && ((t = ka(t)), t !== null && Dy(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function O1(e, t, n, l, i) {
    switch (t) {
      case "focusin":
        return ((aa = Ru(aa, e, t, n, l, i)), !0);
      case "dragenter":
        return ((la = Ru(la, e, t, n, l, i)), !0);
      case "mouseover":
        return ((ua = Ru(ua, e, t, n, l, i)), !0);
      case "pointerover":
        var r = i.pointerId;
        return (_u.set(r, Ru(_u.get(r) || null, e, t, n, l, i)), !0);
      case "gotpointercapture":
        return (
          (r = i.pointerId),
          Tu.set(r, Ru(Tu.get(r) || null, e, t, n, l, i)),
          !0
        );
    }
    return !1;
  }
  function Hy(e) {
    var t = Ga(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = h(n)), t !== null)) {
            ((e.blockedOn = t),
              Pf(e.priority, function () {
                jy(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = p(n)), t !== null)) {
            ((e.blockedOn = t),
              Pf(e.priority, function () {
                jy(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ro(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((Rc = l), n.target.dispatchEvent(l), (Rc = null));
      } else return ((t = ka(n)), t !== null && Dy(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ly(e, t, n) {
    vr(e) && n.delete(t);
  }
  function C1() {
    ((Oo = !1),
      aa !== null && vr(aa) && (aa = null),
      la !== null && vr(la) && (la = null),
      ua !== null && vr(ua) && (ua = null),
      _u.forEach(Ly),
      Tu.forEach(Ly));
  }
  function br(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Oo ||
        ((Oo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, C1)));
  }
  var Sr = null;
  function Qy(e) {
    Sr !== e &&
      ((Sr = e),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        Sr === e && (Sr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (Ao(l || n) === null) continue;
            break;
          }
          var r = ka(n);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Ts(r, { pending: !0, data: i, method: n.method, action: l }, l, i));
        }
      }));
  }
  function Rl(e) {
    function t(O) {
      return br(O, e);
    }
    (aa !== null && br(aa, e),
      la !== null && br(la, e),
      ua !== null && br(ua, e),
      _u.forEach(t),
      Tu.forEach(t));
    for (var n = 0; n < ia.length; n++) {
      var l = ia[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ia.length && ((n = ia[0]), n.blockedOn === null); )
      (Hy(n), n.blockedOn === null && ia.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var i = n[l],
          r = n[l + 1],
          d = i[ft] || null;
        if (typeof r == "function") d || Qy(n);
        else if (d) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((i = r), (d = r[ft] || null))) g = d.formAction;
            else if (Ao(i) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (n[l + 1] = g) : (n.splice(l, 3), (l -= 3)),
            Qy(n));
        }
      }
  }
  function By() {
    function e(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (i = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Co(e) {
    this._internalRoot = e;
  }
  ((Er.prototype.render = Co.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var n = t.current,
        l = Ot();
      zy(n, l, e, t, null, null);
    }),
    (Er.prototype.unmount = Co.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (zy(e.current, 2, null, e, null, null), tr(), (t[Va] = null));
        }
      }));
  function Er(e) {
    this._internalRoot = e;
  }
  Er.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ff();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ia.length && t !== 0 && t < ia[n].priority; n++);
      (ia.splice(n, 0, e), n === 0 && Hy(e));
    }
  };
  var Yy = u.version;
  if (Yy !== "19.2.4") throw Error(s(527, Yy, "19.2.4"));
  P.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = m(t)),
      (e = e !== null ? b(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var M1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
      try {
        ((jl = xr.inject(M1)), (bt = xr));
      } catch {}
  }
  return (
    (Ou.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var n = !1,
        l = "",
        i = Jh,
        r = $h,
        d = Fh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = My(e, 1, !1, null, null, n, l, null, i, r, d, By)),
        (e[Va] = t.current),
        co(e),
        new Co(t)
      );
    }),
    (Ou.hydrateRoot = function (e, t, n) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        i = "",
        r = Jh,
        d = $h,
        g = Fh,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (O = n.formState)),
        (t = My(e, 1, !0, t, n ?? null, l, i, O, r, d, g, By)),
        (t.context = wy(null)),
        (n = t.current),
        (l = Ot()),
        (l = gc(l)),
        (i = Xn(l)),
        (i.callback = null),
        Zn(n, i, l),
        (n = l),
        (t.current.lanes = n),
        ql(t, n),
        nn(t),
        (e[Va] = t.current),
        co(e),
        new Er(t)
      );
    }),
    (Ou.version = "19.2.4"),
    Ou
  );
}
var Py;
function B1() {
  if (Py) return zo.exports;
  Py = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return (a(), (zo.exports = Q1()), zo.exports);
}
var Y1 = B1();
const V1 = mf(Y1);
var Wy = "popstate";
function G1(a = {}) {
  function u(s, o) {
    let { pathname: f, search: h, hash: p } = s.location;
    return $o(
      "",
      { pathname: f, search: h, hash: p },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function c(s, o) {
    return typeof o == "string" ? o : Bu(o);
  }
  return X1(u, c, null, a);
}
function Le(a, u) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(u);
}
function Ft(a, u) {
  if (!a) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function k1() {
  return Math.random().toString(36).substring(2, 10);
}
function Iy(a, u) {
  return { usr: a.state, key: a.key, idx: u };
}
function $o(a, u, c = null, s) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? wl(u) : u),
    state: c,
    key: (u && u.key) || s || k1(),
  };
}
function Bu({ pathname: a = "/", search: u = "", hash: c = "" }) {
  return (
    u && u !== "?" && (a += u.charAt(0) === "?" ? u : "?" + u),
    c && c !== "#" && (a += c.charAt(0) === "#" ? c : "#" + c),
    a
  );
}
function wl(a) {
  let u = {};
  if (a) {
    let c = a.indexOf("#");
    c >= 0 && ((u.hash = a.substring(c)), (a = a.substring(0, c)));
    let s = a.indexOf("?");
    (s >= 0 && ((u.search = a.substring(s)), (a = a.substring(0, s))),
      a && (u.pathname = a));
  }
  return u;
}
function X1(a, u, c, s = {}) {
  let { window: o = document.defaultView, v5Compat: f = !1 } = s,
    h = o.history,
    p = "POP",
    y = null,
    m = b();
  m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function v() {
    p = "POP";
    let T = b(),
      j = T == null ? null : T - m;
    ((m = T), y && y({ action: p, location: z.location, delta: j }));
  }
  function _(T, j) {
    p = "PUSH";
    let Q = $o(z.location, T, j);
    m = b() + 1;
    let E = Iy(Q, m),
      M = z.createHref(Q);
    try {
      h.pushState(E, "", M);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(M);
    }
    f && y && y({ action: p, location: z.location, delta: 1 });
  }
  function S(T, j) {
    p = "REPLACE";
    let Q = $o(z.location, T, j);
    m = b();
    let E = Iy(Q, m),
      M = z.createHref(Q);
    (h.replaceState(E, "", M),
      f && y && y({ action: p, location: z.location, delta: 0 }));
  }
  function A(T) {
    return Z1(T);
  }
  let z = {
    get action() {
      return p;
    },
    get location() {
      return a(o, h);
    },
    listen(T) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Wy, v),
        (y = T),
        () => {
          (o.removeEventListener(Wy, v), (y = null));
        }
      );
    },
    createHref(T) {
      return u(o, T);
    },
    createURL: A,
    encodeLocation(T) {
      let j = A(T);
      return { pathname: j.pathname, search: j.search, hash: j.hash };
    },
    push: _,
    replace: S,
    go(T) {
      return h.go(T);
    },
  };
  return z;
}
function Z1(a, u = !1) {
  let c = "http://localhost";
  (typeof window < "u" &&
    (c =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Le(c, "No window.location.(origin|href) available to create URL"));
  let s = typeof a == "string" ? a : Bu(a);
  return (
    (s = s.replace(/ $/, "%20")),
    !u && s.startsWith("//") && (s = c + s),
    new URL(s, c)
  );
}
function eg(a, u, c = "/") {
  return K1(a, u, c, !1);
}
function K1(a, u, c, s) {
  let o = typeof u == "string" ? wl(u) : u,
    f = zn(o.pathname || "/", c);
  if (f == null) return null;
  let h = tg(a);
  J1(h);
  let p = null;
  for (let y = 0; p == null && y < h.length; ++y) {
    let m = ub(f);
    p = ab(h[y], m, s);
  }
  return p;
}
function tg(a, u = [], c = [], s = "", o = !1) {
  let f = (h, p, y = o, m) => {
    let b = {
      relativePath: m === void 0 ? h.path || "" : m,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h,
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && y) return;
      (Le(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (b.relativePath = b.relativePath.slice(s.length)));
    }
    let v = wn([s, b.relativePath]),
      _ = c.concat(b);
    (h.children &&
      h.children.length > 0 &&
      (Le(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`,
      ),
      tg(h.children, u, _, v, y)),
      !(h.path == null && !h.index) &&
        u.push({ path: v, score: tb(v, h.index), routesMeta: _ }));
  };
  return (
    a.forEach((h, p) => {
      if (h.path === "" || !h.path?.includes("?")) f(h, p);
      else for (let y of ng(h.path)) f(h, p, !0, y);
    }),
    u
  );
}
function ng(a) {
  let u = a.split("/");
  if (u.length === 0) return [];
  let [c, ...s] = u,
    o = c.endsWith("?"),
    f = c.replace(/\?$/, "");
  if (s.length === 0) return o ? [f, ""] : [f];
  let h = ng(s.join("/")),
    p = [];
  return (
    p.push(...h.map((y) => (y === "" ? f : [f, y].join("/")))),
    o && p.push(...h),
    p.map((y) => (a.startsWith("/") && y === "" ? "/" : y))
  );
}
function J1(a) {
  a.sort((u, c) =>
    u.score !== c.score
      ? c.score - u.score
      : nb(
          u.routesMeta.map((s) => s.childrenIndex),
          c.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var $1 = /^:[\w-]+$/,
  F1 = 3,
  P1 = 2,
  W1 = 1,
  I1 = 10,
  eb = -2,
  ep = (a) => a === "*";
function tb(a, u) {
  let c = a.split("/"),
    s = c.length;
  return (
    c.some(ep) && (s += eb),
    u && (s += P1),
    c
      .filter((o) => !ep(o))
      .reduce((o, f) => o + ($1.test(f) ? F1 : f === "" ? W1 : I1), s)
  );
}
function nb(a, u) {
  return a.length === u.length && a.slice(0, -1).every((s, o) => s === u[o])
    ? a[a.length - 1] - u[u.length - 1]
    : 0;
}
function ab(a, u, c = !1) {
  let { routesMeta: s } = a,
    o = {},
    f = "/",
    h = [];
  for (let p = 0; p < s.length; ++p) {
    let y = s[p],
      m = p === s.length - 1,
      b = f === "/" ? u : u.slice(f.length) || "/",
      v = Yr(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: m },
        b,
      ),
      _ = y.route;
    if (
      (!v &&
        m &&
        c &&
        !s[s.length - 1].route.index &&
        (v = Yr(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          b,
        )),
      !v)
    )
      return null;
    (Object.assign(o, v.params),
      h.push({
        params: o,
        pathname: wn([f, v.pathname]),
        pathnameBase: sb(wn([f, v.pathnameBase])),
        route: _,
      }),
      v.pathnameBase !== "/" && (f = wn([f, v.pathnameBase])));
  }
  return h;
}
function Yr(a, u) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [c, s] = lb(a.path, a.caseSensitive, a.end),
    o = u.match(c);
  if (!o) return null;
  let f = o[0],
    h = f.replace(/(.)\/+$/, "$1"),
    p = o.slice(1);
  return {
    params: s.reduce((m, { paramName: b, isOptional: v }, _) => {
      if (b === "*") {
        let A = p[_] || "";
        h = f.slice(0, f.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const S = p[_];
      return (
        v && !S ? (m[b] = void 0) : (m[b] = (S || "").replace(/%2F/g, "/")),
        m
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: a,
  };
}
function lb(a, u = !1, c = !0) {
  Ft(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
  );
  let s = [],
    o =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, p, y) => (
            s.push({ paramName: p, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    a.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (o += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : c
        ? (o += "\\/*$")
        : a !== "" && a !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, u ? void 0 : "i"), s]
  );
}
function ub(a) {
  try {
    return a
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      Ft(
        !1,
        `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`,
      ),
      a
    );
  }
}
function zn(a, u) {
  if (u === "/") return a;
  if (!a.toLowerCase().startsWith(u.toLowerCase())) return null;
  let c = u.endsWith("/") ? u.length - 1 : u.length,
    s = a.charAt(c);
  return s && s !== "/" ? null : a.slice(c) || "/";
}
var ib = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function rb(a, u = "/") {
  let {
      pathname: c,
      search: s = "",
      hash: o = "",
    } = typeof a == "string" ? wl(a) : a,
    f;
  return (
    c
      ? ((c = c.replace(/\/\/+/g, "/")),
        c.startsWith("/") ? (f = tp(c.substring(1), "/")) : (f = tp(c, u)))
      : (f = u),
    { pathname: f, search: ob(s), hash: fb(o) }
  );
}
function tp(a, u) {
  let c = u.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((o) => {
      o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
    }),
    c.length > 1 ? c.join("/") : "/"
  );
}
function Uo(a, u, c, s) {
  return `Cannot include a '${a}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function cb(a) {
  return a.filter(
    (u, c) => c === 0 || (u.route.path && u.route.path.length > 0),
  );
}
function yf(a) {
  let u = cb(a);
  return u.map((c, s) => (s === u.length - 1 ? c.pathname : c.pathnameBase));
}
function pf(a, u, c, s = !1) {
  let o;
  typeof a == "string"
    ? (o = wl(a))
    : ((o = { ...a }),
      Le(
        !o.pathname || !o.pathname.includes("?"),
        Uo("?", "pathname", "search", o),
      ),
      Le(
        !o.pathname || !o.pathname.includes("#"),
        Uo("#", "pathname", "hash", o),
      ),
      Le(!o.search || !o.search.includes("#"), Uo("#", "search", "hash", o)));
  let f = a === "" || o.pathname === "",
    h = f ? "/" : o.pathname,
    p;
  if (h == null) p = c;
  else {
    let v = u.length - 1;
    if (!s && h.startsWith("..")) {
      let _ = h.split("/");
      for (; _[0] === ".."; ) (_.shift(), (v -= 1));
      o.pathname = _.join("/");
    }
    p = v >= 0 ? u[v] : "/";
  }
  let y = rb(o, p),
    m = h && h !== "/" && h.endsWith("/"),
    b = (f || h === ".") && c.endsWith("/");
  return (!y.pathname.endsWith("/") && (m || b) && (y.pathname += "/"), y);
}
var wn = (a) => a.join("/").replace(/\/\/+/g, "/"),
  sb = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ob = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  fb = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
  db = class {
    constructor(a, u, c, s = !1) {
      ((this.status = a),
        (this.statusText = u || ""),
        (this.internal = s),
        c instanceof Error
          ? ((this.data = c.toString()), (this.error = c))
          : (this.data = c));
    }
  };
function hb(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
function mb(a) {
  return (
    a
      .map((u) => u.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var ag =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function lg(a, u) {
  let c = a;
  if (typeof c != "string" || !ib.test(c))
    return { absoluteURL: void 0, isExternal: !1, to: c };
  let s = c,
    o = !1;
  if (ag)
    try {
      let f = new URL(window.location.href),
        h = c.startsWith("//") ? new URL(f.protocol + c) : new URL(c),
        p = zn(h.pathname, u);
      h.origin === f.origin && p != null
        ? (c = p + h.search + h.hash)
        : (o = !0);
    } catch {
      Ft(
        !1,
        `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: o, to: c };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ug = ["POST", "PUT", "PATCH", "DELETE"];
new Set(ug);
var yb = ["GET", ...ug];
new Set(yb);
var zl = R.createContext(null);
zl.displayName = "DataRouter";
var nc = R.createContext(null);
nc.displayName = "DataRouterState";
var pb = R.createContext(!1),
  ig = R.createContext({ isTransitioning: !1 });
ig.displayName = "ViewTransition";
var gb = R.createContext(new Map());
gb.displayName = "Fetchers";
var vb = R.createContext(null);
vb.displayName = "Await";
var zt = R.createContext(null);
zt.displayName = "Navigation";
var $u = R.createContext(null);
$u.displayName = "Location";
var Pt = R.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Pt.displayName = "Route";
var gf = R.createContext(null);
gf.displayName = "RouteError";
var rg = "REACT_ROUTER_ERROR",
  bb = "REDIRECT",
  Sb = "ROUTE_ERROR_RESPONSE";
function Eb(a) {
  if (a.startsWith(`${rg}:${bb}:{`))
    try {
      let u = JSON.parse(a.slice(28));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string" &&
        typeof u.location == "string" &&
        typeof u.reloadDocument == "boolean" &&
        typeof u.replace == "boolean"
      )
        return u;
    } catch {}
}
function xb(a) {
  if (a.startsWith(`${rg}:${Sb}:{`))
    try {
      let u = JSON.parse(a.slice(40));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string"
      )
        return new db(u.status, u.statusText, u.data);
    } catch {}
}
function _b(a, { relative: u } = {}) {
  Le(
    Nl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: c, navigator: s } = R.useContext(zt),
    { hash: o, pathname: f, search: h } = Fu(a, { relative: u }),
    p = f;
  return (
    c !== "/" && (p = f === "/" ? c : wn([c, f])),
    s.createHref({ pathname: p, search: h, hash: o })
  );
}
function Nl() {
  return R.useContext($u) != null;
}
function ln() {
  return (
    Le(
      Nl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    R.useContext($u).location
  );
}
var cg =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function sg(a) {
  R.useContext(zt).static || R.useLayoutEffect(a);
}
function og() {
  let { isDataRoute: a } = R.useContext(Pt);
  return a ? qb() : Tb();
}
function Tb() {
  Le(
    Nl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let a = R.useContext(zl),
    { basename: u, navigator: c } = R.useContext(zt),
    { matches: s } = R.useContext(Pt),
    { pathname: o } = ln(),
    f = JSON.stringify(yf(s)),
    h = R.useRef(!1);
  return (
    sg(() => {
      h.current = !0;
    }),
    R.useCallback(
      (y, m = {}) => {
        if ((Ft(h.current, cg), !h.current)) return;
        if (typeof y == "number") {
          c.go(y);
          return;
        }
        let b = pf(y, JSON.parse(f), o, m.relative === "path");
        (a == null &&
          u !== "/" &&
          (b.pathname = b.pathname === "/" ? u : wn([u, b.pathname])),
          (m.replace ? c.replace : c.push)(b, m.state, m));
      },
      [u, c, f, o, a],
    )
  );
}
R.createContext(null);
function S3() {
  let { matches: a } = R.useContext(Pt),
    u = a[a.length - 1];
  return u ? u.params : {};
}
function Fu(a, { relative: u } = {}) {
  let { matches: c } = R.useContext(Pt),
    { pathname: s } = ln(),
    o = JSON.stringify(yf(c));
  return R.useMemo(() => pf(a, JSON.parse(o), s, u === "path"), [a, o, s, u]);
}
function Rb(a, u) {
  return fg(a, u);
}
function fg(a, u, c, s, o) {
  Le(
    Nl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: f } = R.useContext(zt),
    { matches: h } = R.useContext(Pt),
    p = h[h.length - 1],
    y = p ? p.params : {},
    m = p ? p.pathname : "/",
    b = p ? p.pathnameBase : "/",
    v = p && p.route;
  {
    let Q = (v && v.path) || "";
    hg(
      m,
      !v || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`,
    );
  }
  let _ = ln(),
    S;
  if (u) {
    let Q = typeof u == "string" ? wl(u) : u;
    (Le(
      b === "/" || Q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`,
    ),
      (S = Q));
  } else S = _;
  let A = S.pathname || "/",
    z = A;
  if (b !== "/") {
    let Q = b.replace(/^\//, "").split("/");
    z = "/" + A.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let T = eg(a, { pathname: z });
  (Ft(
    v || T != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    Ft(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let j = wb(
    T &&
      T.map((Q) =>
        Object.assign({}, Q, {
          params: Object.assign({}, y, Q.params),
          pathname: wn([
            b,
            f.encodeLocation
              ? f.encodeLocation(
                  Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : Q.pathname,
          ]),
          pathnameBase:
            Q.pathnameBase === "/"
              ? b
              : wn([
                  b,
                  f.encodeLocation
                    ? f.encodeLocation(
                        Q.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : Q.pathnameBase,
                ]),
        }),
      ),
    h,
    c,
    s,
    o,
  );
  return u && j
    ? R.createElement(
        $u.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        j,
      )
    : j;
}
function Ab() {
  let a = Ub(),
    u = hb(a)
      ? `${a.status} ${a.statusText}`
      : a instanceof Error
        ? a.message
        : JSON.stringify(a),
    c = a instanceof Error ? a.stack : null,
    s = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: s },
    f = { padding: "2px 4px", backgroundColor: s },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", a),
    (h = R.createElement(
      R.Fragment,
      null,
      R.createElement("p", null, "💿 Hey developer 👋"),
      R.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        R.createElement("code", { style: f }, "ErrorBoundary"),
        " or",
        " ",
        R.createElement("code", { style: f }, "errorElement"),
        " prop on your route.",
      ),
    )),
    R.createElement(
      R.Fragment,
      null,
      R.createElement("h2", null, "Unexpected Application Error!"),
      R.createElement("h3", { style: { fontStyle: "italic" } }, u),
      c ? R.createElement("pre", { style: o }, c) : null,
      h,
    )
  );
}
var Ob = R.createElement(Ab, null),
  dg = class extends R.Component {
    constructor(a) {
      (super(a),
        (this.state = {
          location: a.location,
          revalidation: a.revalidation,
          error: a.error,
        }));
    }
    static getDerivedStateFromError(a) {
      return { error: a };
    }
    static getDerivedStateFromProps(a, u) {
      return u.location !== a.location ||
        (u.revalidation !== "idle" && a.revalidation === "idle")
        ? { error: a.error, location: a.location, revalidation: a.revalidation }
        : {
            error: a.error !== void 0 ? a.error : u.error,
            location: u.location,
            revalidation: a.revalidation || u.revalidation,
          };
    }
    componentDidCatch(a, u) {
      this.props.onError
        ? this.props.onError(a, u)
        : console.error(
            "React Router caught the following error during render",
            a,
          );
    }
    render() {
      let a = this.state.error;
      if (
        this.context &&
        typeof a == "object" &&
        a &&
        "digest" in a &&
        typeof a.digest == "string"
      ) {
        const c = xb(a.digest);
        c && (a = c);
      }
      let u =
        a !== void 0
          ? R.createElement(
              Pt.Provider,
              { value: this.props.routeContext },
              R.createElement(gf.Provider, {
                value: a,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? R.createElement(Cb, { error: a }, u) : u;
    }
  };
dg.contextType = pb;
var qo = new WeakMap();
function Cb({ children: a, error: u }) {
  let { basename: c } = R.useContext(zt);
  if (
    typeof u == "object" &&
    u &&
    "digest" in u &&
    typeof u.digest == "string"
  ) {
    let s = Eb(u.digest);
    if (s) {
      let o = qo.get(u);
      if (o) throw o;
      let f = lg(s.location, c);
      if (ag && !qo.get(u))
        if (f.isExternal || s.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(f.to, {
              replace: s.replace,
            }),
          );
          throw (qo.set(u, h), h);
        }
      return R.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f.absoluteURL || f.to}`,
      });
    }
  }
  return a;
}
function Mb({ routeContext: a, match: u, children: c }) {
  let s = R.useContext(zl);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = u.route.id),
    R.createElement(Pt.Provider, { value: a }, c)
  );
}
function wb(a, u = [], c = null, s = null, o = null) {
  if (a == null) {
    if (!c) return null;
    if (c.errors) a = c.matches;
    else if (u.length === 0 && !c.initialized && c.matches.length > 0)
      a = c.matches;
    else return null;
  }
  let f = a,
    h = c?.errors;
  if (h != null) {
    let b = f.findIndex((v) => v.route.id && h?.[v.route.id] !== void 0);
    (Le(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, b + 1))));
  }
  let p = !1,
    y = -1;
  if (c)
    for (let b = 0; b < f.length; b++) {
      let v = f[b];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (y = b),
        v.route.id)
      ) {
        let { loaderData: _, errors: S } = c,
          A =
            v.route.loader &&
            !_.hasOwnProperty(v.route.id) &&
            (!S || S[v.route.id] === void 0);
        if (v.route.lazy || A) {
          ((p = !0), y >= 0 ? (f = f.slice(0, y + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  let m =
    c && s
      ? (b, v) => {
          s(b, {
            location: c.location,
            params: c.matches?.[0]?.params ?? {},
            unstable_pattern: mb(c.matches),
            errorInfo: v,
          });
        }
      : void 0;
  return f.reduceRight((b, v, _) => {
    let S,
      A = !1,
      z = null,
      T = null;
    c &&
      ((S = h && v.route.id ? h[v.route.id] : void 0),
      (z = v.route.errorElement || Ob),
      p &&
        (y < 0 && _ === 0
          ? (hg(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (A = !0),
            (T = null))
          : y === _ &&
            ((A = !0), (T = v.route.hydrateFallbackElement || null))));
    let j = u.concat(f.slice(0, _ + 1)),
      Q = () => {
        let E;
        return (
          S
            ? (E = z)
            : A
              ? (E = T)
              : v.route.Component
                ? (E = R.createElement(v.route.Component, null))
                : v.route.element
                  ? (E = v.route.element)
                  : (E = b),
          R.createElement(Mb, {
            match: v,
            routeContext: { outlet: b, matches: j, isDataRoute: c != null },
            children: E,
          })
        );
      };
    return c && (v.route.ErrorBoundary || v.route.errorElement || _ === 0)
      ? R.createElement(dg, {
          location: c.location,
          revalidation: c.revalidation,
          component: z,
          error: S,
          children: Q(),
          routeContext: { outlet: null, matches: j, isDataRoute: !0 },
          onError: m,
        })
      : Q();
  }, null);
}
function vf(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zb(a) {
  let u = R.useContext(zl);
  return (Le(u, vf(a)), u);
}
function Nb(a) {
  let u = R.useContext(nc);
  return (Le(u, vf(a)), u);
}
function Db(a) {
  let u = R.useContext(Pt);
  return (Le(u, vf(a)), u);
}
function bf(a) {
  let u = Db(a),
    c = u.matches[u.matches.length - 1];
  return (
    Le(
      c.route.id,
      `${a} can only be used on routes that contain a unique "id"`,
    ),
    c.route.id
  );
}
function jb() {
  return bf("useRouteId");
}
function Ub() {
  let a = R.useContext(gf),
    u = Nb("useRouteError"),
    c = bf("useRouteError");
  return a !== void 0 ? a : u.errors?.[c];
}
function qb() {
  let { router: a } = zb("useNavigate"),
    u = bf("useNavigate"),
    c = R.useRef(!1);
  return (
    sg(() => {
      c.current = !0;
    }),
    R.useCallback(
      async (o, f = {}) => {
        (Ft(c.current, cg),
          c.current &&
            (typeof o == "number"
              ? await a.navigate(o)
              : await a.navigate(o, { fromRouteId: u, ...f })));
      },
      [a, u],
    )
  );
}
var np = {};
function hg(a, u, c) {
  !u && !np[a] && ((np[a] = !0), Ft(!1, c));
}
R.memo(Hb);
function Hb({ routes: a, future: u, state: c, onError: s }) {
  return fg(a, void 0, c, s, u);
}
function Lb({ to: a, replace: u, state: c, relative: s }) {
  Le(
    Nl(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: o } = R.useContext(zt);
  Ft(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: f } = R.useContext(Pt),
    { pathname: h } = ln(),
    p = og(),
    y = pf(a, yf(f), h, s === "path"),
    m = JSON.stringify(y);
  return (
    R.useEffect(() => {
      p(JSON.parse(m), { replace: u, state: c, relative: s });
    }, [p, m, s, u, c]),
    null
  );
}
function Kt(a) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Qb({
  basename: a = "/",
  children: u = null,
  location: c,
  navigationType: s = "POP",
  navigator: o,
  static: f = !1,
  unstable_useTransitions: h,
}) {
  Le(
    !Nl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let p = a.replace(/^\/*/, "/"),
    y = R.useMemo(
      () => ({
        basename: p,
        navigator: o,
        static: f,
        unstable_useTransitions: h,
        future: {},
      }),
      [p, o, f, h],
    );
  typeof c == "string" && (c = wl(c));
  let {
      pathname: m = "/",
      search: b = "",
      hash: v = "",
      state: _ = null,
      key: S = "default",
    } = c,
    A = R.useMemo(() => {
      let z = zn(m, p);
      return z == null
        ? null
        : {
            location: { pathname: z, search: b, hash: v, state: _, key: S },
            navigationType: s,
          };
    }, [p, m, b, v, _, S, s]);
  return (
    Ft(
      A != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    A == null
      ? null
      : R.createElement(
          zt.Provider,
          { value: y },
          R.createElement($u.Provider, { children: u, value: A }),
        )
  );
}
function Bb({ children: a, location: u }) {
  return Rb(Fo(a), u);
}
function Fo(a, u = []) {
  let c = [];
  return (
    R.Children.forEach(a, (s, o) => {
      if (!R.isValidElement(s)) return;
      let f = [...u, o];
      if (s.type === R.Fragment) {
        c.push.apply(c, Fo(s.props.children, f));
        return;
      }
      (Le(
        s.type === Kt,
        `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Le(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes.",
        ));
      let h = {
        id: s.props.id || f.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (h.children = Fo(s.props.children, f)), c.push(h));
    }),
    c
  );
}
var Ur = "get",
  qr = "application/x-www-form-urlencoded";
function ac(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function Yb(a) {
  return ac(a) && a.tagName.toLowerCase() === "button";
}
function Vb(a) {
  return ac(a) && a.tagName.toLowerCase() === "form";
}
function Gb(a) {
  return ac(a) && a.tagName.toLowerCase() === "input";
}
function kb(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Xb(a, u) {
  return a.button === 0 && (!u || u === "_self") && !kb(a);
}
var _r = null;
function Zb() {
  if (_r === null)
    try {
      (new FormData(document.createElement("form"), 0), (_r = !1));
    } catch {
      _r = !0;
    }
  return _r;
}
var Kb = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ho(a) {
  return a != null && !Kb.has(a)
    ? (Ft(
        !1,
        `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qr}"`,
      ),
      null)
    : a;
}
function Jb(a, u) {
  let c, s, o, f, h;
  if (Vb(a)) {
    let p = a.getAttribute("action");
    ((s = p ? zn(p, u) : null),
      (c = a.getAttribute("method") || Ur),
      (o = Ho(a.getAttribute("enctype")) || qr),
      (f = new FormData(a)));
  } else if (Yb(a) || (Gb(a) && (a.type === "submit" || a.type === "image"))) {
    let p = a.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let y = a.getAttribute("formaction") || p.getAttribute("action");
    if (
      ((s = y ? zn(y, u) : null),
      (c = a.getAttribute("formmethod") || p.getAttribute("method") || Ur),
      (o =
        Ho(a.getAttribute("formenctype")) ||
        Ho(p.getAttribute("enctype")) ||
        qr),
      (f = new FormData(p, a)),
      !Zb())
    ) {
      let { name: m, type: b, value: v } = a;
      if (b === "image") {
        let _ = m ? `${m}.` : "";
        (f.append(`${_}x`, "0"), f.append(`${_}y`, "0"));
      } else m && f.append(m, v);
    }
  } else {
    if (ac(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((c = Ur), (s = null), (o = qr), (h = a));
  }
  return (
    f && o === "text/plain" && ((h = f), (f = void 0)),
    { action: s, method: c.toLowerCase(), encType: o, formData: f, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Sf(a, u) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(u);
}
function $b(a, u, c, s) {
  let o =
    typeof a == "string"
      ? new URL(
          a,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : a;
  return (
    c
      ? o.pathname.endsWith("/")
        ? (o.pathname = `${o.pathname}_.${s}`)
        : (o.pathname = `${o.pathname}.${s}`)
      : o.pathname === "/"
        ? (o.pathname = `_root.${s}`)
        : u && zn(o.pathname, u) === "/"
          ? (o.pathname = `${u.replace(/\/$/, "")}/_root.${s}`)
          : (o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`),
    o
  );
}
async function Fb(a, u) {
  if (a.id in u) return u[a.id];
  try {
    let c = await import(a.module);
    return ((u[a.id] = c), c);
  } catch (c) {
    return (
      console.error(
        `Error loading route module \`${a.module}\`, reloading page...`,
      ),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Pb(a) {
  return a == null
    ? !1
    : a.href == null
      ? a.rel === "preload" &&
        typeof a.imageSrcSet == "string" &&
        typeof a.imageSizes == "string"
      : typeof a.rel == "string" && typeof a.href == "string";
}
async function Wb(a, u, c) {
  let s = await Promise.all(
    a.map(async (o) => {
      let f = u.routes[o.route.id];
      if (f) {
        let h = await Fb(f, c);
        return h.links ? h.links() : [];
      }
      return [];
    }),
  );
  return nS(
    s
      .flat(1)
      .filter(Pb)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" },
      ),
  );
}
function ap(a, u, c, s, o, f) {
  let h = (y, m) => (c[m] ? y.route.id !== c[m].route.id : !0),
    p = (y, m) =>
      c[m].pathname !== y.pathname ||
      (c[m].route.path?.endsWith("*") && c[m].params["*"] !== y.params["*"]);
  return f === "assets"
    ? u.filter((y, m) => h(y, m) || p(y, m))
    : f === "data"
      ? u.filter((y, m) => {
          let b = s.routes[y.route.id];
          if (!b || !b.hasLoader) return !1;
          if (h(y, m) || p(y, m)) return !0;
          if (y.route.shouldRevalidate) {
            let v = y.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin,
              ),
              currentParams: c[0]?.params || {},
              nextUrl: new URL(a, window.origin),
              nextParams: y.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == "boolean") return v;
          }
          return !0;
        })
      : [];
}
function Ib(a, u, { includeHydrateFallback: c } = {}) {
  return eS(
    a
      .map((s) => {
        let o = u.routes[s.route.id];
        if (!o) return [];
        let f = [o.module];
        return (
          o.clientActionModule && (f = f.concat(o.clientActionModule)),
          o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)),
          c &&
            o.hydrateFallbackModule &&
            (f = f.concat(o.hydrateFallbackModule)),
          o.imports && (f = f.concat(o.imports)),
          f
        );
      })
      .flat(1),
  );
}
function eS(a) {
  return [...new Set(a)];
}
function tS(a) {
  let u = {},
    c = Object.keys(a).sort();
  for (let s of c) u[s] = a[s];
  return u;
}
function nS(a, u) {
  let c = new Set();
  return (
    new Set(u),
    a.reduce((s, o) => {
      let f = JSON.stringify(tS(o));
      return (c.has(f) || (c.add(f), s.push({ key: f, link: o })), s);
    }, [])
  );
}
function mg() {
  let a = R.useContext(zl);
  return (
    Sf(
      a,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    a
  );
}
function aS() {
  let a = R.useContext(nc);
  return (
    Sf(
      a,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    a
  );
}
var Ef = R.createContext(void 0);
Ef.displayName = "FrameworkContext";
function yg() {
  let a = R.useContext(Ef);
  return (
    Sf(a, "You must render this element inside a <HydratedRouter> element"),
    a
  );
}
function lS(a, u) {
  let c = R.useContext(Ef),
    [s, o] = R.useState(!1),
    [f, h] = R.useState(!1),
    {
      onFocus: p,
      onBlur: y,
      onMouseEnter: m,
      onMouseLeave: b,
      onTouchStart: v,
    } = u,
    _ = R.useRef(null);
  (R.useEffect(() => {
    if ((a === "render" && h(!0), a === "viewport")) {
      let z = (j) => {
          j.forEach((Q) => {
            h(Q.isIntersecting);
          });
        },
        T = new IntersectionObserver(z, { threshold: 0.5 });
      return (
        _.current && T.observe(_.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [a]),
    R.useEffect(() => {
      if (s) {
        let z = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(z);
        };
      }
    }, [s]));
  let S = () => {
      o(!0);
    },
    A = () => {
      (o(!1), h(!1));
    };
  return c
    ? a !== "intent"
      ? [f, _, {}]
      : [
          f,
          _,
          {
            onFocus: Cu(p, S),
            onBlur: Cu(y, A),
            onMouseEnter: Cu(m, S),
            onMouseLeave: Cu(b, A),
            onTouchStart: Cu(v, S),
          },
        ]
    : [!1, _, {}];
}
function Cu(a, u) {
  return (c) => {
    (a && a(c), c.defaultPrevented || u(c));
  };
}
function uS({ page: a, ...u }) {
  let { router: c } = mg(),
    s = R.useMemo(() => eg(c.routes, a, c.basename), [c.routes, a, c.basename]);
  return s ? R.createElement(rS, { page: a, matches: s, ...u }) : null;
}
function iS(a) {
  let { manifest: u, routeModules: c } = yg(),
    [s, o] = R.useState([]);
  return (
    R.useEffect(() => {
      let f = !1;
      return (
        Wb(a, u, c).then((h) => {
          f || o(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [a, u, c]),
    s
  );
}
function rS({ page: a, matches: u, ...c }) {
  let s = ln(),
    { future: o, manifest: f, routeModules: h } = yg(),
    { basename: p } = mg(),
    { loaderData: y, matches: m } = aS(),
    b = R.useMemo(() => ap(a, u, m, f, s, "data"), [a, u, m, f, s]),
    v = R.useMemo(() => ap(a, u, m, f, s, "assets"), [a, u, m, f, s]),
    _ = R.useMemo(() => {
      if (a === s.pathname + s.search + s.hash) return [];
      let z = new Set(),
        T = !1;
      if (
        (u.forEach((Q) => {
          let E = f.routes[Q.route.id];
          !E ||
            !E.hasLoader ||
            ((!b.some((M) => M.route.id === Q.route.id) &&
              Q.route.id in y &&
              h[Q.route.id]?.shouldRevalidate) ||
            E.hasClientLoader
              ? (T = !0)
              : z.add(Q.route.id));
        }),
        z.size === 0)
      )
        return [];
      let j = $b(a, p, o.unstable_trailingSlashAwareDataRequests, "data");
      return (
        T &&
          z.size > 0 &&
          j.searchParams.set(
            "_routes",
            u
              .filter((Q) => z.has(Q.route.id))
              .map((Q) => Q.route.id)
              .join(","),
          ),
        [j.pathname + j.search]
      );
    }, [p, o.unstable_trailingSlashAwareDataRequests, y, s, f, b, u, a, h]),
    S = R.useMemo(() => Ib(v, f), [v, f]),
    A = iS(v);
  return R.createElement(
    R.Fragment,
    null,
    _.map((z) =>
      R.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...c,
      }),
    ),
    S.map((z) =>
      R.createElement("link", { key: z, rel: "modulepreload", href: z, ...c }),
    ),
    A.map(({ key: z, link: T }) =>
      R.createElement("link", {
        key: z,
        nonce: c.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? c.crossOrigin,
      }),
    ),
  );
}
function cS(...a) {
  return (u) => {
    a.forEach((c) => {
      typeof c == "function" ? c(u) : c != null && (c.current = u);
    });
  };
}
var sS =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  sS && (window.__reactRouterVersion = "7.13.0");
} catch {}
function oS({
  basename: a,
  children: u,
  unstable_useTransitions: c,
  window: s,
}) {
  let o = R.useRef();
  o.current == null && (o.current = G1({ window: s, v5Compat: !0 }));
  let f = o.current,
    [h, p] = R.useState({ action: f.action, location: f.location }),
    y = R.useCallback(
      (m) => {
        c === !1 ? p(m) : R.startTransition(() => p(m));
      },
      [c],
    );
  return (
    R.useLayoutEffect(() => f.listen(y), [f, y]),
    R.createElement(Qb, {
      basename: a,
      children: u,
      location: h.location,
      navigationType: h.action,
      navigator: f,
      unstable_useTransitions: c,
    })
  );
}
var pg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  He = R.forwardRef(function (
    {
      onClick: u,
      discover: c = "render",
      prefetch: s = "none",
      relative: o,
      reloadDocument: f,
      replace: h,
      state: p,
      target: y,
      to: m,
      preventScrollReset: b,
      viewTransition: v,
      unstable_defaultShouldRevalidate: _,
      ...S
    },
    A,
  ) {
    let { basename: z, unstable_useTransitions: T } = R.useContext(zt),
      j = typeof m == "string" && pg.test(m),
      Q = lg(m, z);
    m = Q.to;
    let E = _b(m, { relative: o }),
      [M, C, w] = lS(s, S),
      U = mS(m, {
        replace: h,
        state: p,
        target: y,
        preventScrollReset: b,
        relative: o,
        viewTransition: v,
        unstable_defaultShouldRevalidate: _,
        unstable_useTransitions: T,
      });
    function X(Y) {
      (u && u(Y), Y.defaultPrevented || U(Y));
    }
    let V = R.createElement("a", {
      ...S,
      ...w,
      href: Q.absoluteURL || E,
      onClick: Q.isExternal || f ? u : X,
      ref: cS(A, C),
      target: y,
      "data-discover": !j && c === "render" ? "true" : void 0,
    });
    return M && !j
      ? R.createElement(R.Fragment, null, V, R.createElement(uS, { page: E }))
      : V;
  });
He.displayName = "Link";
var fS = R.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: c = !1,
    className: s = "",
    end: o = !1,
    style: f,
    to: h,
    viewTransition: p,
    children: y,
    ...m
  },
  b,
) {
  let v = Fu(h, { relative: m.relative }),
    _ = ln(),
    S = R.useContext(nc),
    { navigator: A, basename: z } = R.useContext(zt),
    T = S != null && bS(v) && p === !0,
    j = A.encodeLocation ? A.encodeLocation(v).pathname : v.pathname,
    Q = _.pathname,
    E =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  (c ||
    ((Q = Q.toLowerCase()),
    (E = E ? E.toLowerCase() : null),
    (j = j.toLowerCase())),
    E && z && (E = zn(E, z) || E));
  const M = j !== "/" && j.endsWith("/") ? j.length - 1 : j.length;
  let C = Q === j || (!o && Q.startsWith(j) && Q.charAt(M) === "/"),
    w =
      E != null &&
      (E === j || (!o && E.startsWith(j) && E.charAt(j.length) === "/")),
    U = { isActive: C, isPending: w, isTransitioning: T },
    X = C ? u : void 0,
    V;
  typeof s == "function"
    ? (V = s(U))
    : (V = [
        s,
        C ? "active" : null,
        w ? "pending" : null,
        T ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Y = typeof f == "function" ? f(U) : f;
  return R.createElement(
    He,
    {
      ...m,
      "aria-current": X,
      className: V,
      ref: b,
      style: Y,
      to: h,
      viewTransition: p,
    },
    typeof y == "function" ? y(U) : y,
  );
});
fS.displayName = "NavLink";
var dS = R.forwardRef(
  (
    {
      discover: a = "render",
      fetcherKey: u,
      navigate: c,
      reloadDocument: s,
      replace: o,
      state: f,
      method: h = Ur,
      action: p,
      onSubmit: y,
      relative: m,
      preventScrollReset: b,
      viewTransition: v,
      unstable_defaultShouldRevalidate: _,
      ...S
    },
    A,
  ) => {
    let { unstable_useTransitions: z } = R.useContext(zt),
      T = gS(),
      j = vS(p, { relative: m }),
      Q = h.toLowerCase() === "get" ? "get" : "post",
      E = typeof p == "string" && pg.test(p),
      M = (C) => {
        if ((y && y(C), C.defaultPrevented)) return;
        C.preventDefault();
        let w = C.nativeEvent.submitter,
          U = w?.getAttribute("formmethod") || h,
          X = () =>
            T(w || C.currentTarget, {
              fetcherKey: u,
              method: U,
              navigate: c,
              replace: o,
              state: f,
              relative: m,
              preventScrollReset: b,
              viewTransition: v,
              unstable_defaultShouldRevalidate: _,
            });
        z && c !== !1 ? R.startTransition(() => X()) : X();
      };
    return R.createElement("form", {
      ref: A,
      method: Q,
      action: j,
      onSubmit: s ? y : M,
      ...S,
      "data-discover": !E && a === "render" ? "true" : void 0,
    });
  },
);
dS.displayName = "Form";
function hS(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gg(a) {
  let u = R.useContext(zl);
  return (Le(u, hS(a)), u);
}
function mS(
  a,
  {
    target: u,
    replace: c,
    state: s,
    preventScrollReset: o,
    relative: f,
    viewTransition: h,
    unstable_defaultShouldRevalidate: p,
    unstable_useTransitions: y,
  } = {},
) {
  let m = og(),
    b = ln(),
    v = Fu(a, { relative: f });
  return R.useCallback(
    (_) => {
      if (Xb(_, u)) {
        _.preventDefault();
        let S = c !== void 0 ? c : Bu(b) === Bu(v),
          A = () =>
            m(a, {
              replace: S,
              state: s,
              preventScrollReset: o,
              relative: f,
              viewTransition: h,
              unstable_defaultShouldRevalidate: p,
            });
        y ? R.startTransition(() => A()) : A();
      }
    },
    [b, m, v, c, s, u, a, o, f, h, p, y],
  );
}
var yS = 0,
  pS = () => `__${String(++yS)}__`;
function gS() {
  let { router: a } = gg("useSubmit"),
    { basename: u } = R.useContext(zt),
    c = jb(),
    s = a.fetch,
    o = a.navigate;
  return R.useCallback(
    async (f, h = {}) => {
      let { action: p, method: y, encType: m, formData: b, body: v } = Jb(f, u);
      if (h.navigate === !1) {
        let _ = h.fetcherKey || pS();
        await s(_, c, h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: v,
          formMethod: h.method || y,
          formEncType: h.encType || m,
          flushSync: h.flushSync,
        });
      } else
        await o(h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: v,
          formMethod: h.method || y,
          formEncType: h.encType || m,
          replace: h.replace,
          state: h.state,
          fromRouteId: c,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [s, o, u, c],
  );
}
function vS(a, { relative: u } = {}) {
  let { basename: c } = R.useContext(zt),
    s = R.useContext(Pt);
  Le(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1),
    f = { ...Fu(a || ".", { relative: u }) },
    h = ln();
  if (a == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search),
      y = p.getAll("index");
    if (y.some((b) => b === "")) {
      (p.delete("index"),
        y.filter((v) => v).forEach((v) => p.append("index", v)));
      let b = p.toString();
      f.search = b ? `?${b}` : "";
    }
  }
  return (
    (!a || a === ".") &&
      o.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    c !== "/" && (f.pathname = f.pathname === "/" ? c : wn([c, f.pathname])),
    Bu(f)
  );
}
function bS(a, { relative: u } = {}) {
  let c = R.useContext(ig);
  Le(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = gg("useViewTransitionState"),
    o = Fu(a, { relative: u });
  if (!c.isTransitioning) return !1;
  let f = zn(c.currentLocation.pathname, s) || c.currentLocation.pathname,
    h = zn(c.nextLocation.pathname, s) || c.nextLocation.pathname;
  return Yr(o.pathname, h) != null || Yr(o.pathname, f) != null;
}
var Lo = { exports: {} },
  Qo = {};
var lp;
function SS() {
  if (lp) return Qo;
  lp = 1;
  var a = tc();
  function u(y, m) {
    return (y === m && (y !== 0 || 1 / y === 1 / m)) || (y !== y && m !== m);
  }
  var c = typeof Object.is == "function" ? Object.is : u,
    s = a.useSyncExternalStore,
    o = a.useRef,
    f = a.useEffect,
    h = a.useMemo,
    p = a.useDebugValue;
  return (
    (Qo.useSyncExternalStoreWithSelector = function (y, m, b, v, _) {
      var S = o(null);
      if (S.current === null) {
        var A = { hasValue: !1, value: null };
        S.current = A;
      } else A = S.current;
      S = h(
        function () {
          function T(C) {
            if (!j) {
              if (((j = !0), (Q = C), (C = v(C)), _ !== void 0 && A.hasValue)) {
                var w = A.value;
                if (_(w, C)) return (E = w);
              }
              return (E = C);
            }
            if (((w = E), c(Q, C))) return w;
            var U = v(C);
            return _ !== void 0 && _(w, U) ? ((Q = C), w) : ((Q = C), (E = U));
          }
          var j = !1,
            Q,
            E,
            M = b === void 0 ? null : b;
          return [
            function () {
              return T(m());
            },
            M === null
              ? void 0
              : function () {
                  return T(M());
                },
          ];
        },
        [m, b, v, _],
      );
      var z = s(y, S[0], S[1]);
      return (
        f(
          function () {
            ((A.hasValue = !0), (A.value = z));
          },
          [z],
        ),
        p(z),
        z
      );
    }),
    Qo
  );
}
var up;
function ES() {
  return (up || ((up = 1), (Lo.exports = SS())), Lo.exports);
}
var xS = ES();
function vg(a) {
  a();
}
function _S() {
  let a = null,
    u = null;
  return {
    clear() {
      ((a = null), (u = null));
    },
    notify() {
      vg(() => {
        let c = a;
        for (; c; ) (c.callback(), (c = c.next));
      });
    },
    get() {
      const c = [];
      let s = a;
      for (; s; ) (c.push(s), (s = s.next));
      return c;
    },
    subscribe(c) {
      let s = !0;
      const o = (u = { callback: c, next: null, prev: u });
      return (
        o.prev ? (o.prev.next = o) : (a = o),
        function () {
          !s ||
            a === null ||
            ((s = !1),
            o.next ? (o.next.prev = o.prev) : (u = o.prev),
            o.prev ? (o.prev.next = o.next) : (a = o.next));
        }
      );
    },
  };
}
var ip = { notify() {}, get: () => [] };
function TS(a, u) {
  let c,
    s = ip,
    o = 0,
    f = !1;
  function h(z) {
    b();
    const T = s.subscribe(z);
    let j = !1;
    return () => {
      j || ((j = !0), T(), v());
    };
  }
  function p() {
    s.notify();
  }
  function y() {
    A.onStateChange && A.onStateChange();
  }
  function m() {
    return f;
  }
  function b() {
    (o++, c || ((c = a.subscribe(y)), (s = _S())));
  }
  function v() {
    (o--, c && o === 0 && (c(), (c = void 0), s.clear(), (s = ip)));
  }
  function _() {
    f || ((f = !0), b());
  }
  function S() {
    f && ((f = !1), v());
  }
  const A = {
    addNestedSub: h,
    notifyNestedSubs: p,
    handleChangeWrapper: y,
    isSubscribed: m,
    trySubscribe: _,
    tryUnsubscribe: S,
    getListeners: () => s,
  };
  return A;
}
var RS = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  AS = RS(),
  OS = () => typeof navigator < "u" && navigator.product === "ReactNative",
  CS = OS(),
  MS = () => (AS || CS ? R.useLayoutEffect : R.useEffect),
  wS = MS();
function rp(a, u) {
  return a === u ? a !== 0 || u !== 0 || 1 / a === 1 / u : a !== a && u !== u;
}
function qu(a, u) {
  if (rp(a, u)) return !0;
  if (typeof a != "object" || a === null || typeof u != "object" || u === null)
    return !1;
  const c = Object.keys(a),
    s = Object.keys(u);
  if (c.length !== s.length) return !1;
  for (let o = 0; o < c.length; o++)
    if (!Object.prototype.hasOwnProperty.call(u, c[o]) || !rp(a[c[o]], u[c[o]]))
      return !1;
  return !0;
}
var zS = Symbol.for("react-redux-context"),
  NS = typeof globalThis < "u" ? globalThis : {};
function DS() {
  if (!R.createContext) return {};
  const a = (NS[zS] ??= new Map());
  let u = a.get(R.createContext);
  return (u || ((u = R.createContext(null)), a.set(R.createContext, u)), u);
}
var oa = DS();
function jS(a) {
  const { children: u, context: c, serverState: s, store: o } = a,
    f = R.useMemo(() => {
      const y = TS(o);
      return {
        store: o,
        subscription: y,
        getServerState: s ? () => s : void 0,
      };
    }, [o, s]),
    h = R.useMemo(() => o.getState(), [o]);
  wS(() => {
    const { subscription: y } = f;
    return (
      (y.onStateChange = y.notifyNestedSubs),
      y.trySubscribe(),
      h !== o.getState() && y.notifyNestedSubs(),
      () => {
        (y.tryUnsubscribe(), (y.onStateChange = void 0));
      }
    );
  }, [f, h]);
  const p = c || oa;
  return R.createElement(p.Provider, { value: f }, u);
}
var US = jS;
function xf(a = oa) {
  return function () {
    return R.useContext(a);
  };
}
var bg = xf();
function Sg(a = oa) {
  const u = a === oa ? bg : xf(a),
    c = () => {
      const { store: s } = u();
      return s;
    };
  return (Object.assign(c, { withTypes: () => c }), c);
}
var Eg = Sg();
function qS(a = oa) {
  const u = a === oa ? Eg : Sg(a),
    c = () => u().dispatch;
  return (Object.assign(c, { withTypes: () => c }), c);
}
var xg = qS(),
  HS = (a, u) => a === u;
function LS(a = oa) {
  const u = a === oa ? bg : xf(a),
    c = (s, o = {}) => {
      const { equalityFn: f = HS } =
          typeof o == "function" ? { equalityFn: o } : o,
        h = u(),
        { store: p, subscription: y, getServerState: m } = h;
      R.useRef(!0);
      const b = R.useCallback(
          {
            [s.name](_) {
              return s(_);
            },
          }[s.name],
          [s],
        ),
        v = xS.useSyncExternalStoreWithSelector(
          y.addNestedSub,
          p.getState,
          m || p.getState,
          b,
          f,
        );
      return (R.useDebugValue(v), v);
    };
  return (Object.assign(c, { withTypes: () => c }), c);
}
var qa = LS(),
  QS = vg;
function it(a) {
  return `Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
var BS = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  cp = BS,
  Bo = () => Math.random().toString(36).substring(7).split("").join("."),
  YS = {
    INIT: `@@redux/INIT${Bo()}`,
    REPLACE: `@@redux/REPLACE${Bo()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Bo()}`,
  },
  Vr = YS;
function fa(a) {
  if (typeof a != "object" || a === null) return !1;
  let u = a;
  for (; Object.getPrototypeOf(u) !== null; ) u = Object.getPrototypeOf(u);
  return Object.getPrototypeOf(a) === u || Object.getPrototypeOf(a) === null;
}
function _f(a, u, c) {
  if (typeof a != "function") throw new Error(it(2));
  if (
    (typeof u == "function" && typeof c == "function") ||
    (typeof c == "function" && typeof arguments[3] == "function")
  )
    throw new Error(it(0));
  if (
    (typeof u == "function" && typeof c > "u" && ((c = u), (u = void 0)),
    typeof c < "u")
  ) {
    if (typeof c != "function") throw new Error(it(1));
    return c(_f)(a, u);
  }
  let s = a,
    o = u,
    f = new Map(),
    h = f,
    p = 0,
    y = !1;
  function m() {
    h === f &&
      ((h = new Map()),
      f.forEach((T, j) => {
        h.set(j, T);
      }));
  }
  function b() {
    if (y) throw new Error(it(3));
    return o;
  }
  function v(T) {
    if (typeof T != "function") throw new Error(it(4));
    if (y) throw new Error(it(5));
    let j = !0;
    m();
    const Q = p++;
    return (
      h.set(Q, T),
      function () {
        if (j) {
          if (y) throw new Error(it(6));
          ((j = !1), m(), h.delete(Q), (f = null));
        }
      }
    );
  }
  function _(T) {
    if (!fa(T)) throw new Error(it(7));
    if (typeof T.type > "u") throw new Error(it(8));
    if (typeof T.type != "string") throw new Error(it(17));
    if (y) throw new Error(it(9));
    try {
      ((y = !0), (o = s(o, T)));
    } finally {
      y = !1;
    }
    return (
      (f = h).forEach((Q) => {
        Q();
      }),
      T
    );
  }
  function S(T) {
    if (typeof T != "function") throw new Error(it(10));
    ((s = T), _({ type: Vr.REPLACE }));
  }
  function A() {
    const T = v;
    return {
      subscribe(j) {
        if (typeof j != "object" || j === null) throw new Error(it(11));
        function Q() {
          const M = j;
          M.next && M.next(b());
        }
        return (Q(), { unsubscribe: T(Q) });
      },
      [cp]() {
        return this;
      },
    };
  }
  return (
    _({ type: Vr.INIT }),
    { dispatch: _, subscribe: v, getState: b, replaceReducer: S, [cp]: A }
  );
}
function VS(a) {
  Object.keys(a).forEach((u) => {
    const c = a[u];
    if (typeof c(void 0, { type: Vr.INIT }) > "u") throw new Error(it(12));
    if (typeof c(void 0, { type: Vr.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(it(13));
  });
}
function Tf(a) {
  const u = Object.keys(a),
    c = {};
  for (let f = 0; f < u.length; f++) {
    const h = u[f];
    typeof a[h] == "function" && (c[h] = a[h]);
  }
  const s = Object.keys(c);
  let o;
  try {
    VS(c);
  } catch (f) {
    o = f;
  }
  return function (h = {}, p) {
    if (o) throw o;
    let y = !1;
    const m = {};
    for (let b = 0; b < s.length; b++) {
      const v = s[b],
        _ = c[v],
        S = h[v],
        A = _(S, p);
      if (typeof A > "u") throw (p && p.type, new Error(it(14)));
      ((m[v] = A), (y = y || A !== S));
    }
    return ((y = y || s.length !== Object.keys(h).length), y ? m : h);
  };
}
function Gr(...a) {
  return a.length === 0
    ? (u) => u
    : a.length === 1
      ? a[0]
      : a.reduce(
          (u, c) =>
            (...s) =>
              u(c(...s)),
        );
}
function GS(...a) {
  return (u) => (c, s) => {
    const o = u(c, s);
    let f = () => {
      throw new Error(it(15));
    };
    const h = { getState: o.getState, dispatch: (y, ...m) => f(y, ...m) },
      p = a.map((y) => y(h));
    return ((f = Gr(...p)(o.dispatch)), { ...o, dispatch: f });
  };
}
function _g(a) {
  return fa(a) && "type" in a && typeof a.type == "string";
}
var Rf = Symbol.for("immer-nothing"),
  Hu = Symbol.for("immer-draftable"),
  Pe = Symbol.for("immer-state");
function rt(a, ...u) {
  throw new Error(
    `[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Ct = Object,
  Ha = Ct.getPrototypeOf,
  Yu = "constructor",
  Pu = "prototype",
  Po = "configurable",
  kr = "enumerable",
  Hr = "writable",
  Vu = "value",
  Mt = (a) => !!a && !!a[Pe];
function wt(a) {
  return a ? Tg(a) || Iu(a) || !!a[Hu] || !!a[Yu]?.[Hu] || ei(a) || ti(a) : !1;
}
var kS = Ct[Pu][Yu].toString(),
  sp = new WeakMap();
function Tg(a) {
  if (!a || !Ol(a)) return !1;
  const u = Ha(a);
  if (u === null || u === Ct[Pu]) return !0;
  const c = Ct.hasOwnProperty.call(u, Yu) && u[Yu];
  if (c === Object) return !0;
  if (!Ua(c)) return !1;
  let s = sp.get(c);
  return (
    s === void 0 && ((s = Function.toString.call(c)), sp.set(c, s)),
    s === kS
  );
}
function XS(a) {
  return (Mt(a) || rt(15, a), a[Pe].base_);
}
function Wu(a, u, c = !0) {
  La(a) === 0
    ? (c ? Reflect.ownKeys(a) : Ct.keys(a)).forEach((o) => {
        u(o, a[o], a);
      })
    : a.forEach((s, o) => u(o, s, a));
}
function La(a) {
  const u = a[Pe];
  return u ? u.type_ : Iu(a) ? 1 : ei(a) ? 2 : ti(a) ? 3 : 0;
}
var Lu = (a, u, c = La(a)) =>
    c === 2 ? a.has(u) : Ct[Pu].hasOwnProperty.call(a, u),
  Cn = (a, u, c = La(a)) => (c === 2 ? a.get(u) : a[u]),
  Xr = (a, u, c, s = La(a)) => {
    s === 2 ? a.set(u, c) : s === 3 ? a.add(c) : (a[u] = c);
  };
function ZS(a, u) {
  return a === u ? a !== 0 || 1 / a === 1 / u : a !== a && u !== u;
}
var Iu = Array.isArray,
  ei = (a) => a instanceof Map,
  ti = (a) => a instanceof Set,
  Ol = (a) => typeof a == "object",
  Ua = (a) => typeof a == "function",
  Yo = (a) => typeof a == "boolean";
function KS(a) {
  const u = +a;
  return Number.isInteger(u) && String(u) === a;
}
var JS = (a) => (Ol(a) ? a?.[Pe] : null),
  Mn = (a) => a.copy_ || a.base_,
  Af = (a) => (a.modified_ ? a.copy_ : a.base_);
function Wo(a, u) {
  if (ei(a)) return new Map(a);
  if (ti(a)) return new Set(a);
  if (Iu(a)) return Array[Pu].slice.call(a);
  const c = Tg(a);
  if (u === !0 || (u === "class_only" && !c)) {
    const s = Ct.getOwnPropertyDescriptors(a);
    delete s[Pe];
    let o = Reflect.ownKeys(s);
    for (let f = 0; f < o.length; f++) {
      const h = o[f],
        p = s[h];
      (p[Hr] === !1 && ((p[Hr] = !0), (p[Po] = !0)),
        (p.get || p.set) &&
          (s[h] = { [Po]: !0, [Hr]: !0, [kr]: p[kr], [Vu]: a[h] }));
    }
    return Ct.create(Ha(a), s);
  } else {
    const s = Ha(a);
    if (s !== null && c) return { ...a };
    const o = Ct.create(s);
    return Ct.assign(o, a);
  }
}
function Of(a, u = !1) {
  return (
    lc(a) ||
      Mt(a) ||
      !wt(a) ||
      (La(a) > 1 &&
        Ct.defineProperties(a, { set: Tr, add: Tr, clear: Tr, delete: Tr }),
      Ct.freeze(a),
      u &&
        Wu(
          a,
          (c, s) => {
            Of(s, !0);
          },
          !1,
        )),
    a
  );
}
function $S() {
  rt(2);
}
var Tr = { [Vu]: $S };
function lc(a) {
  return a === null || !Ol(a) ? !0 : Ct.isFrozen(a);
}
var Zr = "MapSet",
  Kr = "Patches",
  op = "ArrayMethods",
  Jr = {};
function Qa(a) {
  const u = Jr[a];
  return (u || rt(0, a), u);
}
var fp = (a) => !!Jr[a];
function FS(a, u) {
  Jr[a] || (Jr[a] = u);
}
var Gu,
  Rg = () => Gu,
  PS = (a, u) => ({
    drafts_: [],
    parent_: a,
    immer_: u,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
    handledSet_: new Set(),
    processedForPatches_: new Set(),
    mapSetPlugin_: fp(Zr) ? Qa(Zr) : void 0,
    arrayMethodsPlugin_: fp(op) ? Qa(op) : void 0,
  });
function dp(a, u) {
  u &&
    ((a.patchPlugin_ = Qa(Kr)),
    (a.patches_ = []),
    (a.inversePatches_ = []),
    (a.patchListener_ = u));
}
function Io(a) {
  (ef(a), a.drafts_.forEach(WS), (a.drafts_ = null));
}
function ef(a) {
  a === Gu && (Gu = a.parent_);
}
var hp = (a) => (Gu = PS(Gu, a));
function WS(a) {
  const u = a[Pe];
  u.type_ === 0 || u.type_ === 1 ? u.revoke_() : (u.revoked_ = !0);
}
function mp(a, u) {
  u.unfinalizedDrafts_ = u.drafts_.length;
  const c = u.drafts_[0];
  if (a !== void 0 && a !== c) {
    (c[Pe].modified_ && (Io(u), rt(4)), wt(a) && (a = yp(u, a)));
    const { patchPlugin_: o } = u;
    o && o.generateReplacementPatches_(c[Pe].base_, a, u);
  } else a = yp(u, c);
  return (
    IS(u, a, !0),
    Io(u),
    u.patches_ && u.patchListener_(u.patches_, u.inversePatches_),
    a !== Rf ? a : void 0
  );
}
function yp(a, u) {
  if (lc(u)) return u;
  const c = u[Pe];
  if (!c) return $r(u, a.handledSet_, a);
  if (!uc(c, a)) return u;
  if (!c.modified_) return c.base_;
  if (!c.finalized_) {
    const { callbacks_: s } = c;
    if (s) for (; s.length > 0; ) s.pop()(a);
    Cg(c, a);
  }
  return c.copy_;
}
function IS(a, u, c = !1) {
  !a.parent_ && a.immer_.autoFreeze_ && a.canAutoFreeze_ && Of(u, c);
}
function Ag(a) {
  ((a.finalized_ = !0), a.scope_.unfinalizedDrafts_--);
}
var uc = (a, u) => a.scope_ === u,
  e2 = [];
function Og(a, u, c, s) {
  const o = Mn(a),
    f = a.type_;
  if (s !== void 0 && Cn(o, s, f) === u) {
    Xr(o, s, c, f);
    return;
  }
  if (!a.draftLocations_) {
    const p = (a.draftLocations_ = new Map());
    Wu(o, (y, m) => {
      if (Mt(m)) {
        const b = p.get(m) || [];
        (b.push(y), p.set(m, b));
      }
    });
  }
  const h = a.draftLocations_.get(u) ?? e2;
  for (const p of h) Xr(o, p, c, f);
}
function t2(a, u, c) {
  a.callbacks_.push(function (o) {
    const f = u;
    if (!f || !uc(f, o)) return;
    o.mapSetPlugin_?.fixSetContents(f);
    const h = Af(f);
    (Og(a, f.draft_ ?? f, h, c), Cg(f, o));
  });
}
function Cg(a, u) {
  if (
    a.modified_ &&
    !a.finalized_ &&
    (a.type_ === 3 ||
      (a.type_ === 1 && a.allIndicesReassigned_) ||
      (a.assigned_?.size ?? 0) > 0)
  ) {
    const { patchPlugin_: s } = u;
    if (s) {
      const o = s.getPath(a);
      o && s.generatePatches_(a, o, u);
    }
    Ag(a);
  }
}
function n2(a, u, c) {
  const { scope_: s } = a;
  if (Mt(c)) {
    const o = c[Pe];
    uc(o, s) &&
      o.callbacks_.push(function () {
        Lr(a);
        const h = Af(o);
        Og(a, c, h, u);
      });
  } else
    wt(c) &&
      a.callbacks_.push(function () {
        const f = Mn(a);
        a.type_ === 3
          ? f.has(c) && $r(c, s.handledSet_, s)
          : Cn(f, u, a.type_) === c &&
            s.drafts_.length > 1 &&
            (a.assigned_.get(u) ?? !1) === !0 &&
            a.copy_ &&
            $r(Cn(a.copy_, u, a.type_), s.handledSet_, s);
      });
}
function $r(a, u, c) {
  return (
    (!c.immer_.autoFreeze_ && c.unfinalizedDrafts_ < 1) ||
      Mt(a) ||
      u.has(a) ||
      !wt(a) ||
      lc(a) ||
      (u.add(a),
      Wu(a, (s, o) => {
        if (Mt(o)) {
          const f = o[Pe];
          if (uc(f, c)) {
            const h = Af(f);
            (Xr(a, s, h, a.type_), Ag(f));
          }
        } else wt(o) && $r(o, u, c);
      })),
    a
  );
}
function a2(a, u) {
  const c = Iu(a),
    s = {
      type_: c ? 1 : 0,
      scope_: u ? u.scope_ : Rg(),
      modified_: !1,
      finalized_: !1,
      assigned_: void 0,
      parent_: u,
      base_: a,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
      callbacks_: void 0,
    };
  let o = s,
    f = Fr;
  c && ((o = [s]), (f = ku));
  const { revoke: h, proxy: p } = Proxy.revocable(o, f);
  return ((s.draft_ = p), (s.revoke_ = h), [p, s]);
}
var Fr = {
    get(a, u) {
      if (u === Pe) return a;
      let c = a.scope_.arrayMethodsPlugin_;
      const s = a.type_ === 1 && typeof u == "string";
      if (s && c?.isArrayOperationMethod(u))
        return c.createMethodInterceptor(a, u);
      const o = Mn(a);
      if (!Lu(o, u, a.type_)) return l2(a, o, u);
      const f = o[u];
      if (
        a.finalized_ ||
        !wt(f) ||
        (s &&
          a.operationMethod &&
          c?.isMutatingArrayMethod(a.operationMethod) &&
          KS(u))
      )
        return f;
      if (f === Vo(a.base_, u)) {
        Lr(a);
        const h = a.type_ === 1 ? +u : u,
          p = nf(a.scope_, f, a, h);
        return (a.copy_[h] = p);
      }
      return f;
    },
    has(a, u) {
      return u in Mn(a);
    },
    ownKeys(a) {
      return Reflect.ownKeys(Mn(a));
    },
    set(a, u, c) {
      const s = Mg(Mn(a), u);
      if (s?.set) return (s.set.call(a.draft_, c), !0);
      if (!a.modified_) {
        const o = Vo(Mn(a), u),
          f = o?.[Pe];
        if (f && f.base_ === c)
          return ((a.copy_[u] = c), a.assigned_.set(u, !1), !0);
        if (ZS(c, o) && (c !== void 0 || Lu(a.base_, u, a.type_))) return !0;
        (Lr(a), tf(a));
      }
      return (
        (a.copy_[u] === c && (c !== void 0 || u in a.copy_)) ||
          (Number.isNaN(c) && Number.isNaN(a.copy_[u])) ||
          ((a.copy_[u] = c), a.assigned_.set(u, !0), n2(a, u, c)),
        !0
      );
    },
    deleteProperty(a, u) {
      return (
        Lr(a),
        Vo(a.base_, u) !== void 0 || u in a.base_
          ? (a.assigned_.set(u, !1), tf(a))
          : a.assigned_.delete(u),
        a.copy_ && delete a.copy_[u],
        !0
      );
    },
    getOwnPropertyDescriptor(a, u) {
      const c = Mn(a),
        s = Reflect.getOwnPropertyDescriptor(c, u);
      return (
        s && {
          [Hr]: !0,
          [Po]: a.type_ !== 1 || u !== "length",
          [kr]: s[kr],
          [Vu]: c[u],
        }
      );
    },
    defineProperty() {
      rt(11);
    },
    getPrototypeOf(a) {
      return Ha(a.base_);
    },
    setPrototypeOf() {
      rt(12);
    },
  },
  ku = {};
for (let a in Fr) {
  let u = Fr[a];
  ku[a] = function () {
    const c = arguments;
    return ((c[0] = c[0][0]), u.apply(this, c));
  };
}
ku.deleteProperty = function (a, u) {
  return ku.set.call(this, a, u, void 0);
};
ku.set = function (a, u, c) {
  return Fr.set.call(this, a[0], u, c, a[0]);
};
function Vo(a, u) {
  const c = a[Pe];
  return (c ? Mn(c) : a)[u];
}
function l2(a, u, c) {
  const s = Mg(u, c);
  return s ? (Vu in s ? s[Vu] : s.get?.call(a.draft_)) : void 0;
}
function Mg(a, u) {
  if (!(u in a)) return;
  let c = Ha(a);
  for (; c; ) {
    const s = Object.getOwnPropertyDescriptor(c, u);
    if (s) return s;
    c = Ha(c);
  }
}
function tf(a) {
  a.modified_ || ((a.modified_ = !0), a.parent_ && tf(a.parent_));
}
function Lr(a) {
  a.copy_ ||
    ((a.assigned_ = new Map()),
    (a.copy_ = Wo(a.base_, a.scope_.immer_.useStrictShallowCopy_)));
}
var u2 = class {
  constructor(a) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.useStrictIteration_ = !1),
      (this.produce = (u, c, s) => {
        if (Ua(u) && !Ua(c)) {
          const f = c;
          c = u;
          const h = this;
          return function (y = f, ...m) {
            return h.produce(y, (b) => c.call(this, b, ...m));
          };
        }
        (Ua(c) || rt(6), s !== void 0 && !Ua(s) && rt(7));
        let o;
        if (wt(u)) {
          const f = hp(this),
            h = nf(f, u, void 0);
          let p = !0;
          try {
            ((o = c(h)), (p = !1));
          } finally {
            p ? Io(f) : ef(f);
          }
          return (dp(f, s), mp(o, f));
        } else if (!u || !Ol(u)) {
          if (
            ((o = c(u)),
            o === void 0 && (o = u),
            o === Rf && (o = void 0),
            this.autoFreeze_ && Of(o, !0),
            s)
          ) {
            const f = [],
              h = [];
            (Qa(Kr).generateReplacementPatches_(u, o, {
              patches_: f,
              inversePatches_: h,
            }),
              s(f, h));
          }
          return o;
        } else rt(1, u);
      }),
      (this.produceWithPatches = (u, c) => {
        if (Ua(u))
          return (h, ...p) => this.produceWithPatches(h, (y) => u(y, ...p));
        let s, o;
        return [
          this.produce(u, c, (h, p) => {
            ((s = h), (o = p));
          }),
          s,
          o,
        ];
      }),
      Yo(a?.autoFreeze) && this.setAutoFreeze(a.autoFreeze),
      Yo(a?.useStrictShallowCopy) &&
        this.setUseStrictShallowCopy(a.useStrictShallowCopy),
      Yo(a?.useStrictIteration) &&
        this.setUseStrictIteration(a.useStrictIteration));
  }
  createDraft(a) {
    (wt(a) || rt(8), Mt(a) && (a = wg(a)));
    const u = hp(this),
      c = nf(u, a, void 0);
    return ((c[Pe].isManual_ = !0), ef(u), c);
  }
  finishDraft(a, u) {
    const c = a && a[Pe];
    (!c || !c.isManual_) && rt(9);
    const { scope_: s } = c;
    return (dp(s, u), mp(void 0, s));
  }
  setAutoFreeze(a) {
    this.autoFreeze_ = a;
  }
  setUseStrictShallowCopy(a) {
    this.useStrictShallowCopy_ = a;
  }
  setUseStrictIteration(a) {
    this.useStrictIteration_ = a;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(a, u) {
    let c;
    for (c = u.length - 1; c >= 0; c--) {
      const o = u[c];
      if (o.path.length === 0 && o.op === "replace") {
        a = o.value;
        break;
      }
    }
    c > -1 && (u = u.slice(c + 1));
    const s = Qa(Kr).applyPatches_;
    return Mt(a) ? s(a, u) : this.produce(a, (o) => s(o, u));
  }
};
function nf(a, u, c, s) {
  const [o, f] = ei(u)
    ? Qa(Zr).proxyMap_(u, c)
    : ti(u)
      ? Qa(Zr).proxySet_(u, c)
      : a2(u, c);
  return (
    (c?.scope_ ?? Rg()).drafts_.push(o),
    (f.callbacks_ = c?.callbacks_ ?? []),
    (f.key_ = s),
    c && s !== void 0
      ? t2(c, f, s)
      : f.callbacks_.push(function (y) {
          y.mapSetPlugin_?.fixSetContents(f);
          const { patchPlugin_: m } = y;
          f.modified_ && m && m.generatePatches_(f, [], y);
        }),
    o
  );
}
function wg(a) {
  return (Mt(a) || rt(10, a), zg(a));
}
function zg(a) {
  if (!wt(a) || lc(a)) return a;
  const u = a[Pe];
  let c,
    s = !0;
  if (u) {
    if (!u.modified_) return u.base_;
    ((u.finalized_ = !0),
      (c = Wo(a, u.scope_.immer_.useStrictShallowCopy_)),
      (s = u.scope_.immer_.shouldUseStrictIteration()));
  } else c = Wo(a, !0);
  return (
    Wu(
      c,
      (o, f) => {
        Xr(c, o, zg(f));
      },
      s,
    ),
    u && (u.finalized_ = !1),
    c
  );
}
function i2() {
  function u(A, z = []) {
    if (A.key_ !== void 0) {
      const T = A.parent_.copy_ ?? A.parent_.base_,
        j = JS(Cn(T, A.key_)),
        Q = Cn(T, A.key_);
      if (
        Q === void 0 ||
        (Q !== A.draft_ && Q !== A.base_ && Q !== A.copy_) ||
        (j != null && j.base_ !== A.base_)
      )
        return null;
      const E = A.parent_.type_ === 3;
      let M;
      if (E) {
        const C = A.parent_;
        M = Array.from(C.drafts_.keys()).indexOf(A.key_);
      } else M = A.key_;
      if (!((E && T.size > M) || Lu(T, M))) return null;
      z.push(M);
    }
    if (A.parent_) return u(A.parent_, z);
    z.reverse();
    try {
      c(A.copy_, z);
    } catch {
      return null;
    }
    return z;
  }
  function c(A, z) {
    let T = A;
    for (let j = 0; j < z.length - 1; j++) {
      const Q = z[j];
      if (((T = Cn(T, Q)), !Ol(T) || T === null))
        throw new Error(`Cannot resolve path at '${z.join("/")}'`);
    }
    return T;
  }
  const s = "replace",
    o = "add",
    f = "remove";
  function h(A, z, T) {
    if (A.scope_.processedForPatches_.has(A)) return;
    A.scope_.processedForPatches_.add(A);
    const { patches_: j, inversePatches_: Q } = T;
    switch (A.type_) {
      case 0:
      case 2:
        return y(A, z, j, Q);
      case 1:
        return p(A, z, j, Q);
      case 3:
        return m(A, z, j, Q);
    }
  }
  function p(A, z, T, j) {
    let { base_: Q, assigned_: E } = A,
      M = A.copy_;
    M.length < Q.length && (([Q, M] = [M, Q]), ([T, j] = [j, T]));
    const C = A.allIndicesReassigned_ === !0;
    for (let w = 0; w < Q.length; w++) {
      const U = M[w],
        X = Q[w];
      if ((C || E?.get(w.toString())) && U !== X) {
        const Y = U?.[Pe];
        if (Y && Y.modified_) continue;
        const N = z.concat([w]);
        (T.push({ op: s, path: N, value: S(U) }),
          j.push({ op: s, path: N, value: S(X) }));
      }
    }
    for (let w = Q.length; w < M.length; w++) {
      const U = z.concat([w]);
      T.push({ op: o, path: U, value: S(M[w]) });
    }
    for (let w = M.length - 1; Q.length <= w; --w) {
      const U = z.concat([w]);
      j.push({ op: f, path: U });
    }
  }
  function y(A, z, T, j) {
    const { base_: Q, copy_: E, type_: M } = A;
    Wu(A.assigned_, (C, w) => {
      const U = Cn(Q, C, M),
        X = Cn(E, C, M),
        V = w ? (Lu(Q, C) ? s : o) : f;
      if (U === X && V === s) return;
      const Y = z.concat(C);
      (T.push(V === f ? { op: V, path: Y } : { op: V, path: Y, value: S(X) }),
        j.push(
          V === o
            ? { op: f, path: Y }
            : V === f
              ? { op: o, path: Y, value: S(U) }
              : { op: s, path: Y, value: S(U) },
        ));
    });
  }
  function m(A, z, T, j) {
    let { base_: Q, copy_: E } = A,
      M = 0;
    (Q.forEach((C) => {
      if (!E.has(C)) {
        const w = z.concat([M]);
        (T.push({ op: f, path: w, value: C }),
          j.unshift({ op: o, path: w, value: C }));
      }
      M++;
    }),
      (M = 0),
      E.forEach((C) => {
        if (!Q.has(C)) {
          const w = z.concat([M]);
          (T.push({ op: o, path: w, value: C }),
            j.unshift({ op: f, path: w, value: C }));
        }
        M++;
      }));
  }
  function b(A, z, T) {
    const { patches_: j, inversePatches_: Q } = T;
    (j.push({ op: s, path: [], value: z === Rf ? void 0 : z }),
      Q.push({ op: s, path: [], value: A }));
  }
  function v(A, z) {
    return (
      z.forEach((T) => {
        const { path: j, op: Q } = T;
        let E = A;
        for (let U = 0; U < j.length - 1; U++) {
          const X = La(E);
          let V = j[U];
          (typeof V != "string" && typeof V != "number" && (V = "" + V),
            (X === 0 || X === 1) && (V === "__proto__" || V === Yu) && rt(19),
            Ua(E) && V === Pu && rt(19),
            (E = Cn(E, V)),
            Ol(E) || rt(18, j.join("/")));
        }
        const M = La(E),
          C = _(T.value),
          w = j[j.length - 1];
        switch (Q) {
          case s:
            switch (M) {
              case 2:
                return E.set(w, C);
              case 3:
                rt(16);
              default:
                return (E[w] = C);
            }
          case o:
            switch (M) {
              case 1:
                return w === "-" ? E.push(C) : E.splice(w, 0, C);
              case 2:
                return E.set(w, C);
              case 3:
                return E.add(C);
              default:
                return (E[w] = C);
            }
          case f:
            switch (M) {
              case 1:
                return E.splice(w, 1);
              case 2:
                return E.delete(w);
              case 3:
                return E.delete(T.value);
              default:
                return delete E[w];
            }
          default:
            rt(17, Q);
        }
      }),
      A
    );
  }
  function _(A) {
    if (!wt(A)) return A;
    if (Iu(A)) return A.map(_);
    if (ei(A))
      return new Map(Array.from(A.entries()).map(([T, j]) => [T, _(j)]));
    if (ti(A)) return new Set(Array.from(A).map(_));
    const z = Object.create(Ha(A));
    for (const T in A) z[T] = _(A[T]);
    return (Lu(A, Hu) && (z[Hu] = A[Hu]), z);
  }
  function S(A) {
    return Mt(A) ? _(A) : A;
  }
  FS(Kr, {
    applyPatches_: v,
    generatePatches_: h,
    generateReplacementPatches_: b,
    getPath: u,
  });
}
var Xu = new u2(),
  ni = Xu.produce,
  Ng = Xu.produceWithPatches.bind(Xu),
  pp = Xu.applyPatches.bind(Xu);
function r2(a, u = `expected a function, instead received ${typeof a}`) {
  if (typeof a != "function") throw new TypeError(u);
}
function c2(a, u = `expected an object, instead received ${typeof a}`) {
  if (typeof a != "object") throw new TypeError(u);
}
function s2(
  a,
  u = "expected all items to be functions, instead received the following types: ",
) {
  if (!a.every((c) => typeof c == "function")) {
    const c = a
      .map((s) =>
        typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s,
      )
      .join(", ");
    throw new TypeError(`${u}[${c}]`);
  }
}
var gp = (a) => (Array.isArray(a) ? a : [a]);
function o2(a) {
  const u = Array.isArray(a[0]) ? a[0] : a;
  return (
    s2(
      u,
      "createSelector expects all input-selectors to be functions, but received the following types: ",
    ),
    u
  );
}
function f2(a, u) {
  const c = [],
    { length: s } = a;
  for (let o = 0; o < s; o++) c.push(a[o].apply(null, u));
  return c;
}
var d2 = class {
    constructor(a) {
      this.value = a;
    }
    deref() {
      return this.value;
    }
  },
  h2 = typeof WeakRef < "u" ? WeakRef : d2,
  m2 = 0,
  vp = 1;
function Rr() {
  return { s: m2, v: void 0, o: null, p: null };
}
function Pr(a, u = {}) {
  let c = Rr();
  const { resultEqualityCheck: s } = u;
  let o,
    f = 0;
  function h() {
    let p = c;
    const { length: y } = arguments;
    for (let v = 0, _ = y; v < _; v++) {
      const S = arguments[v];
      if (typeof S == "function" || (typeof S == "object" && S !== null)) {
        let A = p.o;
        A === null && (p.o = A = new WeakMap());
        const z = A.get(S);
        z === void 0 ? ((p = Rr()), A.set(S, p)) : (p = z);
      } else {
        let A = p.p;
        A === null && (p.p = A = new Map());
        const z = A.get(S);
        z === void 0 ? ((p = Rr()), A.set(S, p)) : (p = z);
      }
    }
    const m = p;
    let b;
    if (p.s === vp) b = p.v;
    else if (((b = a.apply(null, arguments)), f++, s)) {
      const v = o?.deref?.() ?? o;
      (v != null && s(v, b) && ((b = v), f !== 0 && f--),
        (o =
          (typeof b == "object" && b !== null) || typeof b == "function"
            ? new h2(b)
            : b));
    }
    return ((m.s = vp), (m.v = b), b);
  }
  return (
    (h.clearCache = () => {
      ((c = Rr()), h.resetResultsCount());
    }),
    (h.resultsCount = () => f),
    (h.resetResultsCount = () => {
      f = 0;
    }),
    h
  );
}
function y2(a, ...u) {
  const c = typeof a == "function" ? { memoize: a, memoizeOptions: u } : a,
    s = (...o) => {
      let f = 0,
        h = 0,
        p,
        y = {},
        m = o.pop();
      (typeof m == "object" && ((y = m), (m = o.pop())),
        r2(
          m,
          `createSelector expects an output function after the inputs, but received: [${typeof m}]`,
        ));
      const b = { ...c, ...y },
        {
          memoize: v,
          memoizeOptions: _ = [],
          argsMemoize: S = Pr,
          argsMemoizeOptions: A = [],
        } = b,
        z = gp(_),
        T = gp(A),
        j = o2(o),
        Q = v(
          function () {
            return (f++, m.apply(null, arguments));
          },
          ...z,
        ),
        E = S(
          function () {
            h++;
            const C = f2(j, arguments);
            return ((p = Q.apply(null, C)), p);
          },
          ...T,
        );
      return Object.assign(E, {
        resultFunc: m,
        memoizedResultFunc: Q,
        dependencies: j,
        dependencyRecomputations: () => h,
        resetDependencyRecomputations: () => {
          h = 0;
        },
        lastResult: () => p,
        recomputations: () => f,
        resetRecomputations: () => {
          f = 0;
        },
        memoize: v,
        argsMemoize: S,
      });
    };
  return (Object.assign(s, { withTypes: () => s }), s);
}
var Cf = y2(Pr),
  p2 = Object.assign(
    (a, u = Cf) => {
      c2(
        a,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof a}`,
      );
      const c = Object.keys(a),
        s = c.map((f) => a[f]);
      return u(s, (...f) => f.reduce((h, p, y) => ((h[c[y]] = p), h), {}));
    },
    { withTypes: () => p2 },
  );
function Dg(a) {
  return ({ dispatch: c, getState: s }) =>
    (o) =>
    (f) =>
      typeof f == "function" ? f(c, s, a) : o(f);
}
var g2 = Dg(),
  v2 = Dg,
  b2 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Gr
              : Gr.apply(null, arguments);
        },
  S2 = (a) => a && typeof a.match == "function";
function $t(a, u) {
  function c(...s) {
    if (u) {
      let o = u(...s);
      if (!o) throw new Error(Gt(0));
      return {
        type: a,
        payload: o.payload,
        ...("meta" in o && { meta: o.meta }),
        ...("error" in o && { error: o.error }),
      };
    }
    return { type: a, payload: s[0] };
  }
  return (
    (c.toString = () => `${a}`),
    (c.type = a),
    (c.match = (s) => _g(s) && s.type === a),
    c
  );
}
var jg = class Du extends Array {
  constructor(...u) {
    (super(...u), Object.setPrototypeOf(this, Du.prototype));
  }
  static get [Symbol.species]() {
    return Du;
  }
  concat(...u) {
    return super.concat.apply(this, u);
  }
  prepend(...u) {
    return u.length === 1 && Array.isArray(u[0])
      ? new Du(...u[0].concat(this))
      : new Du(...u.concat(this));
  }
};
function bp(a) {
  return wt(a) ? ni(a, () => {}) : a;
}
function Ar(a, u, c) {
  return a.has(u) ? a.get(u) : a.set(u, c(u)).get(u);
}
function E2(a) {
  return typeof a == "boolean";
}
var x2 = () =>
    function (u) {
      const {
        thunk: c = !0,
        immutableCheck: s = !0,
        serializableCheck: o = !0,
        actionCreatorCheck: f = !0,
      } = u ?? {};
      let h = new jg();
      return (c && (E2(c) ? h.push(g2) : h.push(v2(c.extraArgument))), h);
    },
  ic = "RTK_autoBatch",
  Mu = () => (a) => ({ payload: a, meta: { [ic]: !0 } }),
  Sp = (a) => (u) => {
    setTimeout(u, a);
  },
  _2 =
    (a = { type: "raf" }) =>
    (u) =>
    (...c) => {
      const s = u(...c);
      let o = !0,
        f = !1,
        h = !1;
      const p = new Set(),
        y =
          a.type === "tick"
            ? queueMicrotask
            : a.type === "raf"
              ? typeof window < "u" && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Sp(10)
              : a.type === "callback"
                ? a.queueNotification
                : Sp(a.timeout),
        m = () => {
          ((h = !1), f && ((f = !1), p.forEach((b) => b())));
        };
      return Object.assign({}, s, {
        subscribe(b) {
          const v = () => o && b(),
            _ = s.subscribe(v);
          return (
            p.add(b),
            () => {
              (_(), p.delete(b));
            }
          );
        },
        dispatch(b) {
          try {
            return (
              (o = !b?.meta?.[ic]),
              (f = !o),
              f && (h || ((h = !0), y(m))),
              s.dispatch(b)
            );
          } finally {
            o = !0;
          }
        },
      });
    },
  T2 = (a) =>
    function (c) {
      const { autoBatch: s = !0 } = c ?? {};
      let o = new jg(a);
      return (s && o.push(_2(typeof s == "object" ? s : void 0)), o);
    };
function R2(a) {
  const u = x2(),
    {
      reducer: c = void 0,
      middleware: s,
      devTools: o = !0,
      preloadedState: f = void 0,
      enhancers: h = void 0,
    } = a || {};
  let p;
  if (typeof c == "function") p = c;
  else if (fa(c)) p = Tf(c);
  else throw new Error(Gt(1));
  let y;
  typeof s == "function" ? (y = s(u)) : (y = u());
  let m = Gr;
  o && (m = b2({ trace: !1, ...(typeof o == "object" && o) }));
  const b = GS(...y),
    v = T2(b);
  let _ = typeof h == "function" ? h(v) : v();
  const S = m(..._);
  return _f(p, f, S);
}
function Ug(a) {
  const u = {},
    c = [];
  let s;
  const o = {
    addCase(f, h) {
      const p = typeof f == "string" ? f : f.type;
      if (!p) throw new Error(Gt(28));
      if (p in u) throw new Error(Gt(29));
      return ((u[p] = h), o);
    },
    addAsyncThunk(f, h) {
      return (
        h.pending && (u[f.pending.type] = h.pending),
        h.rejected && (u[f.rejected.type] = h.rejected),
        h.fulfilled && (u[f.fulfilled.type] = h.fulfilled),
        h.settled && c.push({ matcher: f.settled, reducer: h.settled }),
        o
      );
    },
    addMatcher(f, h) {
      return (c.push({ matcher: f, reducer: h }), o);
    },
    addDefaultCase(f) {
      return ((s = f), o);
    },
  };
  return (a(o), [u, c, s]);
}
function A2(a) {
  return typeof a == "function";
}
function O2(a, u) {
  let [c, s, o] = Ug(u),
    f;
  if (A2(a)) f = () => bp(a());
  else {
    const p = bp(a);
    f = () => p;
  }
  function h(p = f(), y) {
    let m = [
      c[y.type],
      ...s.filter(({ matcher: b }) => b(y)).map(({ reducer: b }) => b),
    ];
    return (
      m.filter((b) => !!b).length === 0 && (m = [o]),
      m.reduce((b, v) => {
        if (v)
          if (Mt(b)) {
            const S = v(b, y);
            return S === void 0 ? b : S;
          } else {
            if (wt(b)) return ni(b, (_) => v(_, y));
            {
              const _ = v(b, y);
              if (_ === void 0) {
                if (b === null) return b;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined",
                );
              }
              return _;
            }
          }
        return b;
      }, p)
    );
  }
  return ((h.getInitialState = f), h);
}
var qg = (a, u) => (S2(a) ? a.match(u) : a(u));
function Nn(...a) {
  return (u) => a.some((c) => qg(c, u));
}
function Qu(...a) {
  return (u) => a.every((c) => qg(c, u));
}
function rc(a, u) {
  if (!a || !a.meta) return !1;
  const c = typeof a.meta.requestId == "string",
    s = u.indexOf(a.meta.requestStatus) > -1;
  return c && s;
}
function ai(a) {
  return (
    typeof a[0] == "function" &&
    "pending" in a[0] &&
    "fulfilled" in a[0] &&
    "rejected" in a[0]
  );
}
function Mf(...a) {
  return a.length === 0
    ? (u) => rc(u, ["pending"])
    : ai(a)
      ? Nn(...a.map((u) => u.pending))
      : Mf()(a[0]);
}
function Cl(...a) {
  return a.length === 0
    ? (u) => rc(u, ["rejected"])
    : ai(a)
      ? Nn(...a.map((u) => u.rejected))
      : Cl()(a[0]);
}
function cc(...a) {
  const u = (c) => c && c.meta && c.meta.rejectedWithValue;
  return a.length === 0
    ? Qu(Cl(...a), u)
    : ai(a)
      ? Qu(Cl(...a), u)
      : cc()(a[0]);
}
function da(...a) {
  return a.length === 0
    ? (u) => rc(u, ["fulfilled"])
    : ai(a)
      ? Nn(...a.map((u) => u.fulfilled))
      : da()(a[0]);
}
function af(...a) {
  return a.length === 0
    ? (u) => rc(u, ["pending", "fulfilled", "rejected"])
    : ai(a)
      ? Nn(...a.flatMap((u) => [u.pending, u.rejected, u.fulfilled]))
      : af()(a[0]);
}
var C2 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  wf = (a = 21) => {
    let u = "",
      c = a;
    for (; c--; ) u += C2[(Math.random() * 64) | 0];
    return u;
  },
  M2 = ["name", "message", "stack", "code"],
  Go = class {
    constructor(a, u) {
      ((this.payload = a), (this.meta = u));
    }
    _type;
  },
  Ep = class {
    constructor(a, u) {
      ((this.payload = a), (this.meta = u));
    }
    _type;
  },
  w2 = (a) => {
    if (typeof a == "object" && a !== null) {
      const u = {};
      for (const c of M2) typeof a[c] == "string" && (u[c] = a[c]);
      return u;
    }
    return { message: String(a) };
  },
  xp = "External signal was aborted",
  _p = (() => {
    function a(u, c, s) {
      const o = $t(u + "/fulfilled", (y, m, b, v) => ({
          payload: y,
          meta: {
            ...(v || {}),
            arg: b,
            requestId: m,
            requestStatus: "fulfilled",
          },
        })),
        f = $t(u + "/pending", (y, m, b) => ({
          payload: void 0,
          meta: {
            ...(b || {}),
            arg: m,
            requestId: y,
            requestStatus: "pending",
          },
        })),
        h = $t(u + "/rejected", (y, m, b, v, _) => ({
          payload: v,
          error: ((s && s.serializeError) || w2)(y || "Rejected"),
          meta: {
            ...(_ || {}),
            arg: b,
            requestId: m,
            rejectedWithValue: !!v,
            requestStatus: "rejected",
            aborted: y?.name === "AbortError",
            condition: y?.name === "ConditionError",
          },
        }));
      function p(y, { signal: m } = {}) {
        return (b, v, _) => {
          const S = s?.idGenerator ? s.idGenerator(y) : wf(),
            A = new AbortController();
          let z, T;
          function j(E) {
            ((T = E), A.abort());
          }
          m &&
            (m.aborted
              ? j(xp)
              : m.addEventListener("abort", () => j(xp), { once: !0 }));
          const Q = (async function () {
            let E;
            try {
              let C = s?.condition?.(y, { getState: v, extra: _ });
              if ((N2(C) && (C = await C), C === !1 || A.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const w = new Promise((U, X) => {
                ((z = () => {
                  X({ name: "AbortError", message: T || "Aborted" });
                }),
                  A.signal.addEventListener("abort", z, { once: !0 }));
              });
              (b(
                f(
                  S,
                  y,
                  s?.getPendingMeta?.(
                    { requestId: S, arg: y },
                    { getState: v, extra: _ },
                  ),
                ),
              ),
                (E = await Promise.race([
                  w,
                  Promise.resolve(
                    c(y, {
                      dispatch: b,
                      getState: v,
                      extra: _,
                      requestId: S,
                      signal: A.signal,
                      abort: j,
                      rejectWithValue: (U, X) => new Go(U, X),
                      fulfillWithValue: (U, X) => new Ep(U, X),
                    }),
                  ).then((U) => {
                    if (U instanceof Go) throw U;
                    return U instanceof Ep
                      ? o(U.payload, S, y, U.meta)
                      : o(U, S, y);
                  }),
                ])));
            } catch (C) {
              E =
                C instanceof Go ? h(null, S, y, C.payload, C.meta) : h(C, S, y);
            } finally {
              z && A.signal.removeEventListener("abort", z);
            }
            return (
              (s &&
                !s.dispatchConditionRejection &&
                h.match(E) &&
                E.meta.condition) ||
                b(E),
              E
            );
          })();
          return Object.assign(Q, {
            abort: j,
            requestId: S,
            arg: y,
            unwrap() {
              return Q.then(z2);
            },
          });
        };
      }
      return Object.assign(p, {
        pending: f,
        rejected: h,
        fulfilled: o,
        settled: Nn(h, o),
        typePrefix: u,
      });
    }
    return ((a.withTypes = () => a), a);
  })();
function z2(a) {
  if (a.meta && a.meta.rejectedWithValue) throw a.payload;
  if (a.error) throw a.error;
  return a.payload;
}
function N2(a) {
  return a !== null && typeof a == "object" && typeof a.then == "function";
}
var D2 = Symbol.for("rtk-slice-createasyncthunk");
function j2(a, u) {
  return `${a}/${u}`;
}
function U2({ creators: a } = {}) {
  const u = a?.asyncThunk?.[D2];
  return function (s) {
    const { name: o, reducerPath: f = o } = s;
    if (!o) throw new Error(Gt(11));
    const h =
        (typeof s.reducers == "function" ? s.reducers(H2()) : s.reducers) || {},
      p = Object.keys(h),
      y = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(E, M) {
          const C = typeof E == "string" ? E : E.type;
          if (!C) throw new Error(Gt(12));
          if (C in y.sliceCaseReducersByType) throw new Error(Gt(13));
          return ((y.sliceCaseReducersByType[C] = M), m);
        },
        addMatcher(E, M) {
          return (y.sliceMatchers.push({ matcher: E, reducer: M }), m);
        },
        exposeAction(E, M) {
          return ((y.actionCreators[E] = M), m);
        },
        exposeCaseReducer(E, M) {
          return ((y.sliceCaseReducersByName[E] = M), m);
        },
      };
    p.forEach((E) => {
      const M = h[E],
        C = {
          reducerName: E,
          type: j2(o, E),
          createNotation: typeof s.reducers == "function",
        };
      Q2(M) ? Y2(C, M, m, u) : L2(C, M, m);
    });
    function b() {
      const [E = {}, M = [], C = void 0] =
          typeof s.extraReducers == "function"
            ? Ug(s.extraReducers)
            : [s.extraReducers],
        w = { ...E, ...y.sliceCaseReducersByType };
      return O2(s.initialState, (U) => {
        for (let X in w) U.addCase(X, w[X]);
        for (let X of y.sliceMatchers) U.addMatcher(X.matcher, X.reducer);
        for (let X of M) U.addMatcher(X.matcher, X.reducer);
        C && U.addDefaultCase(C);
      });
    }
    const v = (E) => E,
      _ = new Map(),
      S = new WeakMap();
    let A;
    function z(E, M) {
      return (A || (A = b()), A(E, M));
    }
    function T() {
      return (A || (A = b()), A.getInitialState());
    }
    function j(E, M = !1) {
      function C(U) {
        let X = U[E];
        return (typeof X > "u" && M && (X = Ar(S, C, T)), X);
      }
      function w(U = v) {
        const X = Ar(_, M, () => new WeakMap());
        return Ar(X, U, () => {
          const V = {};
          for (const [Y, N] of Object.entries(s.selectors ?? {}))
            V[Y] = q2(N, U, () => Ar(S, U, T), M);
          return V;
        });
      }
      return {
        reducerPath: E,
        getSelectors: w,
        get selectors() {
          return w(C);
        },
        selectSlice: C,
      };
    }
    const Q = {
      name: o,
      reducer: z,
      actions: y.actionCreators,
      caseReducers: y.sliceCaseReducersByName,
      getInitialState: T,
      ...j(f),
      injectInto(E, { reducerPath: M, ...C } = {}) {
        const w = M ?? f;
        return (
          E.inject({ reducerPath: w, reducer: z }, C),
          { ...Q, ...j(w, !0) }
        );
      },
    };
    return Q;
  };
}
function q2(a, u, c, s) {
  function o(f, ...h) {
    let p = u(f);
    return (typeof p > "u" && s && (p = c()), a(p, ...h));
  }
  return ((o.unwrapped = a), o);
}
var ca = U2();
function H2() {
  function a(u, c) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: u, ...c };
  }
  return (
    (a.withTypes = () => a),
    {
      reducer(u) {
        return Object.assign(
          {
            [u.name](...c) {
              return u(...c);
            },
          }[u.name],
          { _reducerDefinitionType: "reducer" },
        );
      },
      preparedReducer(u, c) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: u,
          reducer: c,
        };
      },
      asyncThunk: a,
    }
  );
}
function L2({ type: a, reducerName: u, createNotation: c }, s, o) {
  let f, h;
  if ("reducer" in s) {
    if (c && !B2(s)) throw new Error(Gt(17));
    ((f = s.reducer), (h = s.prepare));
  } else f = s;
  o.addCase(a, f)
    .exposeCaseReducer(u, f)
    .exposeAction(u, h ? $t(a, h) : $t(a));
}
function Q2(a) {
  return a._reducerDefinitionType === "asyncThunk";
}
function B2(a) {
  return a._reducerDefinitionType === "reducerWithPrepare";
}
function Y2({ type: a, reducerName: u }, c, s, o) {
  if (!o) throw new Error(Gt(18));
  const {
      payloadCreator: f,
      fulfilled: h,
      pending: p,
      rejected: y,
      settled: m,
      options: b,
    } = c,
    v = o(a, f, b);
  (s.exposeAction(u, v),
    h && s.addCase(v.fulfilled, h),
    p && s.addCase(v.pending, p),
    y && s.addCase(v.rejected, y),
    m && s.addMatcher(v.settled, m),
    s.exposeCaseReducer(u, {
      fulfilled: h || Or,
      pending: p || Or,
      rejected: y || Or,
      settled: m || Or,
    }));
}
function Or() {}
function Gt(a) {
  return `Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `;
}
var zf = "persist:",
  Nf = "persist/FLUSH",
  sc = "persist/REHYDRATE",
  Df = "persist/PAUSE",
  jf = "persist/PERSIST",
  Uf = "persist/PURGE",
  qf = "persist/REGISTER",
  V2 = -1;
function Qr(a) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Qr = function (c) {
          return typeof c;
        })
      : (Qr = function (c) {
          return c &&
            typeof Symbol == "function" &&
            c.constructor === Symbol &&
            c !== Symbol.prototype
            ? "symbol"
            : typeof c;
        }),
    Qr(a)
  );
}
function Tp(a, u) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    (u &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      c.push.apply(c, s));
  }
  return c;
}
function G2(a) {
  for (var u = 1; u < arguments.length; u++) {
    var c = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? Tp(c, !0).forEach(function (s) {
          k2(a, s, c[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
        : Tp(c).forEach(function (s) {
            Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(c, s));
          });
  }
  return a;
}
function k2(a, u, c) {
  return (
    u in a
      ? Object.defineProperty(a, u, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[u] = c),
    a
  );
}
function X2(a, u, c, s) {
  s.debug;
  var o = G2({}, c);
  return (
    a &&
      Qr(a) === "object" &&
      Object.keys(a).forEach(function (f) {
        f !== "_persist" && u[f] === c[f] && (o[f] = a[f]);
      }),
    o
  );
}
function Z2(a) {
  var u = a.blacklist || null,
    c = a.whitelist || null,
    s = a.transforms || [],
    o = a.throttle || 0,
    f = "".concat(a.keyPrefix !== void 0 ? a.keyPrefix : zf).concat(a.key),
    h = a.storage,
    p;
  a.serialize === !1
    ? (p = function (C) {
        return C;
      })
    : typeof a.serialize == "function"
      ? (p = a.serialize)
      : (p = K2);
  var y = a.writeFailHandler || null,
    m = {},
    b = {},
    v = [],
    _ = null,
    S = null,
    A = function (C) {
      (Object.keys(C).forEach(function (w) {
        j(w) && m[w] !== C[w] && v.indexOf(w) === -1 && v.push(w);
      }),
        Object.keys(m).forEach(function (w) {
          C[w] === void 0 &&
            j(w) &&
            v.indexOf(w) === -1 &&
            m[w] !== void 0 &&
            v.push(w);
        }),
        _ === null && (_ = setInterval(z, o)),
        (m = C));
    };
  function z() {
    if (v.length === 0) {
      (_ && clearInterval(_), (_ = null));
      return;
    }
    var M = v.shift(),
      C = s.reduce(function (w, U) {
        return U.in(w, M, m);
      }, m[M]);
    if (C !== void 0)
      try {
        b[M] = p(C);
      } catch (w) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          w,
        );
      }
    else delete b[M];
    v.length === 0 && T();
  }
  function T() {
    (Object.keys(b).forEach(function (M) {
      m[M] === void 0 && delete b[M];
    }),
      (S = h.setItem(f, p(b)).catch(Q)));
  }
  function j(M) {
    return !(
      (c && c.indexOf(M) === -1 && M !== "_persist") ||
      (u && u.indexOf(M) !== -1)
    );
  }
  function Q(M) {
    y && y(M);
  }
  var E = function () {
    for (; v.length !== 0; ) z();
    return S || Promise.resolve();
  };
  return { update: A, flush: E };
}
function K2(a) {
  return JSON.stringify(a);
}
function J2(a) {
  var u = a.transforms || [],
    c = "".concat(a.keyPrefix !== void 0 ? a.keyPrefix : zf).concat(a.key),
    s = a.storage;
  a.debug;
  var o;
  return (
    a.deserialize === !1
      ? (o = function (h) {
          return h;
        })
      : typeof a.deserialize == "function"
        ? (o = a.deserialize)
        : (o = $2),
    s.getItem(c).then(function (f) {
      if (f)
        try {
          var h = {},
            p = o(f);
          return (
            Object.keys(p).forEach(function (y) {
              h[y] = u.reduceRight(function (m, b) {
                return b.out(m, y, p);
              }, o(p[y]));
            }),
            h
          );
        } catch (y) {
          throw y;
        }
      else return;
    })
  );
}
function $2(a) {
  return JSON.parse(a);
}
function F2(a) {
  var u = a.storage,
    c = "".concat(a.keyPrefix !== void 0 ? a.keyPrefix : zf).concat(a.key);
  return u.removeItem(c, P2);
}
function P2(a) {}
function Rp(a, u) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    (u &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      c.push.apply(c, s));
  }
  return c;
}
function Rn(a) {
  for (var u = 1; u < arguments.length; u++) {
    var c = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? Rp(c, !0).forEach(function (s) {
          W2(a, s, c[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
        : Rp(c).forEach(function (s) {
            Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(c, s));
          });
  }
  return a;
}
function W2(a, u, c) {
  return (
    u in a
      ? Object.defineProperty(a, u, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[u] = c),
    a
  );
}
function I2(a, u) {
  if (a == null) return {};
  var c = eE(a, u),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(a);
    for (o = 0; o < f.length; o++)
      ((s = f[o]),
        !(u.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(a, s) &&
          (c[s] = a[s]));
  }
  return c;
}
function eE(a, u) {
  if (a == null) return {};
  var c = {},
    s = Object.keys(a),
    o,
    f;
  for (f = 0; f < s.length; f++)
    ((o = s[f]), !(u.indexOf(o) >= 0) && (c[o] = a[o]));
  return c;
}
var tE = 5e3;
function nE(a, u) {
  var c = a.version !== void 0 ? a.version : V2;
  a.debug;
  var s = a.stateReconciler === void 0 ? X2 : a.stateReconciler,
    o = a.getStoredState || J2,
    f = a.timeout !== void 0 ? a.timeout : tE,
    h = null,
    p = !1,
    y = !0,
    m = function (v) {
      return (v._persist.rehydrated && h && !y && h.update(v), v);
    };
  return function (b, v) {
    var _ = b || {},
      S = _._persist,
      A = I2(_, ["_persist"]),
      z = A;
    if (v.type === jf) {
      var T = !1,
        j = function (X, V) {
          T || (v.rehydrate(a.key, X, V), (T = !0));
        };
      if (
        (f &&
          setTimeout(function () {
            !T &&
              j(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    a.key,
                    '"',
                  ),
                ),
              );
          }, f),
        (y = !1),
        h || (h = Z2(a)),
        S)
      )
        return Rn({}, u(z, v), { _persist: S });
      if (typeof v.rehydrate != "function" || typeof v.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.",
        );
      return (
        v.register(a.key),
        o(a).then(
          function (U) {
            var X =
              a.migrate ||
              function (V, Y) {
                return Promise.resolve(V);
              };
            X(U, c).then(
              function (V) {
                j(V);
              },
              function (V) {
                j(void 0, V);
              },
            );
          },
          function (U) {
            j(void 0, U);
          },
        ),
        Rn({}, u(z, v), { _persist: { version: c, rehydrated: !1 } })
      );
    } else {
      if (v.type === Uf)
        return ((p = !0), v.result(F2(a)), Rn({}, u(z, v), { _persist: S }));
      if (v.type === Nf)
        return (v.result(h && h.flush()), Rn({}, u(z, v), { _persist: S }));
      if (v.type === Df) y = !0;
      else if (v.type === sc) {
        if (p) return Rn({}, z, { _persist: Rn({}, S, { rehydrated: !0 }) });
        if (v.key === a.key) {
          var Q = u(z, v),
            E = v.payload,
            M = s !== !1 && E !== void 0 ? s(E, b, Q, a) : Q,
            C = Rn({}, M, { _persist: Rn({}, S, { rehydrated: !0 }) });
          return m(C);
        }
      }
    }
    if (!S) return u(b, v);
    var w = u(z, v);
    return w === z ? b : m(Rn({}, w, { _persist: S }));
  };
}
function Ap(a) {
  return uE(a) || lE(a) || aE();
}
function aE() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function lE(a) {
  if (
    Symbol.iterator in Object(a) ||
    Object.prototype.toString.call(a) === "[object Arguments]"
  )
    return Array.from(a);
}
function uE(a) {
  if (Array.isArray(a)) {
    for (var u = 0, c = new Array(a.length); u < a.length; u++) c[u] = a[u];
    return c;
  }
}
function Op(a, u) {
  var c = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    (u &&
      (s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      c.push.apply(c, s));
  }
  return c;
}
function lf(a) {
  for (var u = 1; u < arguments.length; u++) {
    var c = arguments[u] != null ? arguments[u] : {};
    u % 2
      ? Op(c, !0).forEach(function (s) {
          iE(a, s, c[s]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
        : Op(c).forEach(function (s) {
            Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(c, s));
          });
  }
  return a;
}
function iE(a, u, c) {
  return (
    u in a
      ? Object.defineProperty(a, u, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[u] = c),
    a
  );
}
var Hg = { registry: [], bootstrapped: !1 },
  rE = function () {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hg,
      c = arguments.length > 1 ? arguments[1] : void 0;
    switch (c.type) {
      case qf:
        return lf({}, u, { registry: [].concat(Ap(u.registry), [c.key]) });
      case sc:
        var s = u.registry.indexOf(c.key),
          o = Ap(u.registry);
        return (
          o.splice(s, 1),
          lf({}, u, { registry: o, bootstrapped: o.length === 0 })
        );
      default:
        return u;
    }
  };
function cE(a, u, c) {
  var s = _f(rE, Hg, void 0),
    o = function (y) {
      s.dispatch({ type: qf, key: y });
    },
    f = function (y, m, b) {
      var v = { type: sc, payload: m, err: b, key: y };
      (a.dispatch(v), s.dispatch(v));
    },
    h = lf({}, s, {
      purge: function () {
        var y = [];
        return (
          a.dispatch({
            type: Uf,
            result: function (b) {
              y.push(b);
            },
          }),
          Promise.all(y)
        );
      },
      flush: function () {
        var y = [];
        return (
          a.dispatch({
            type: Nf,
            result: function (b) {
              y.push(b);
            },
          }),
          Promise.all(y)
        );
      },
      pause: function () {
        a.dispatch({ type: Df });
      },
      persist: function () {
        a.dispatch({ type: jf, register: o, rehydrate: f });
      },
    });
  return (h.persist(), h);
}
var wu = {},
  Cr = {},
  Mr = {},
  Cp;
function sE() {
  if (Cp) return Mr;
  ((Cp = 1), (Mr.__esModule = !0), (Mr.default = o));
  function a(f) {
    return (
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? (a = function (p) {
            return typeof p;
          })
        : (a = function (p) {
            return p &&
              typeof Symbol == "function" &&
              p.constructor === Symbol &&
              p !== Symbol.prototype
              ? "symbol"
              : typeof p;
          }),
      a(f)
    );
  }
  function u() {}
  var c = { getItem: u, setItem: u, removeItem: u };
  function s(f) {
    if (
      (typeof self > "u" ? "undefined" : a(self)) !== "object" ||
      !(f in self)
    )
      return !1;
    try {
      var h = self[f],
        p = "redux-persist ".concat(f, " test");
      (h.setItem(p, "test"), h.getItem(p), h.removeItem(p));
    } catch {
      return !1;
    }
    return !0;
  }
  function o(f) {
    var h = "".concat(f, "Storage");
    return s(h) ? self[h] : c;
  }
  return Mr;
}
var Mp;
function oE() {
  if (Mp) return Cr;
  ((Mp = 1), (Cr.__esModule = !0), (Cr.default = c));
  var a = u(sE());
  function u(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function c(s) {
    var o = (0, a.default)(s);
    return {
      getItem: function (h) {
        return new Promise(function (p, y) {
          p(o.getItem(h));
        });
      },
      setItem: function (h, p) {
        return new Promise(function (y, m) {
          y(o.setItem(h, p));
        });
      },
      removeItem: function (h) {
        return new Promise(function (p, y) {
          p(o.removeItem(h));
        });
      },
    };
  }
  return Cr;
}
var wp;
function fE() {
  if (wp) return wu;
  ((wp = 1), (wu.__esModule = !0), (wu.default = void 0));
  var a = u(oE());
  function u(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var c = (0, a.default)("local");
  return ((wu.default = c), wu);
}
var dE = fE();
const hE = mf(dE);
var mE = class extends Error {
    issues;
    constructor(a) {
      (super(a[0].message), (this.name = "SchemaError"), (this.issues = a));
    }
  },
  Lg = ((a) => (
    (a.uninitialized = "uninitialized"),
    (a.pending = "pending"),
    (a.fulfilled = "fulfilled"),
    (a.rejected = "rejected"),
    a
  ))(Lg || {}),
  Dn = "uninitialized",
  uf = "pending",
  ju = "fulfilled",
  Uu = "rejected";
function zp(a) {
  return {
    status: a,
    isUninitialized: a === Dn,
    isLoading: a === uf,
    isSuccess: a === ju,
    isError: a === Uu,
  };
}
var Np = fa;
function Hf(a, u) {
  if (a === u || !((Np(a) && Np(u)) || (Array.isArray(a) && Array.isArray(u))))
    return u;
  const c = Object.keys(u),
    s = Object.keys(a);
  let o = c.length === s.length;
  const f = Array.isArray(u) ? [] : {};
  for (const h of c) ((f[h] = Hf(a[h], u[h])), o && (o = a[h] === f[h]));
  return o ? a : f;
}
function rf(a, u, c) {
  return a.reduce((s, o, f) => (u(o, f) && s.push(c(o, f)), s), []).flat();
}
function yE(a) {
  return new RegExp("(^|:)//").test(a);
}
function pE() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Lf(a) {
  return a != null;
}
function Dp(a) {
  return [...(a?.values() ?? [])].filter(Lf);
}
function gE() {
  return typeof navigator > "u" || navigator.onLine === void 0
    ? !0
    : navigator.onLine;
}
var vE = (a) => a.replace(/\/$/, ""),
  bE = (a) => a.replace(/^\//, "");
function SE(a, u) {
  if (!a) return u;
  if (!u) return a;
  if (yE(u)) return u;
  const c = a.endsWith("/") || !u.startsWith("?") ? "/" : "";
  return ((a = vE(a)), (u = bE(u)), `${a}${c}${u}`);
}
function Wr(a, u, c) {
  return a.has(u) ? a.get(u) : a.set(u, c(u)).get(u);
}
var cf = () => new Map(),
  EE = (a) => {
    const u = new AbortController();
    return (
      setTimeout(() => {
        const c = "signal timed out",
          s = "TimeoutError";
        u.abort(
          typeof DOMException < "u"
            ? new DOMException(c, s)
            : Object.assign(new Error(c), { name: s }),
        );
      }, a),
      u.signal
    );
  },
  xE = (...a) => {
    for (const c of a) if (c.aborted) return AbortSignal.abort(c.reason);
    const u = new AbortController();
    for (const c of a)
      c.addEventListener("abort", () => u.abort(c.reason), {
        signal: u.signal,
        once: !0,
      });
    return u.signal;
  },
  jp = (...a) => fetch(...a),
  _E = (a) => a.status >= 200 && a.status <= 299,
  TE = (a) => /ion\/(vnd\.api\+)?json/.test(a.get("content-type") || "");
function Up(a) {
  if (!fa(a)) return a;
  const u = { ...a };
  for (const [c, s] of Object.entries(u)) s === void 0 && delete u[c];
  return u;
}
var RE = (a) =>
  typeof a == "object" &&
  (fa(a) || Array.isArray(a) || typeof a.toJSON == "function");
function AE({
  baseUrl: a,
  prepareHeaders: u = (v) => v,
  fetchFn: c = jp,
  paramsSerializer: s,
  isJsonContentType: o = TE,
  jsonContentType: f = "application/json",
  jsonReplacer: h,
  timeout: p,
  responseHandler: y,
  validateStatus: m,
  ...b
} = {}) {
  return (
    typeof fetch > "u" &&
      c === jp &&
      console.warn(
        "Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.",
      ),
    async (_, S, A) => {
      const { getState: z, extra: T, endpoint: j, forced: Q, type: E } = S;
      let M,
        {
          url: C,
          headers: w = new Headers(b.headers),
          params: U = void 0,
          responseHandler: X = y ?? "json",
          validateStatus: V = m ?? _E,
          timeout: Y = p,
          ...N
        } = typeof _ == "string" ? { url: _ } : _,
        H = { ...b, signal: Y ? xE(S.signal, EE(Y)) : S.signal, ...N };
      ((w = new Headers(Up(w))),
        (H.headers =
          (await u(w, {
            getState: z,
            arg: _,
            extra: T,
            endpoint: j,
            forced: Q,
            type: E,
            extraOptions: A,
          })) || w));
      const K = RE(H.body);
      if (
        (H.body != null &&
          !K &&
          typeof H.body != "string" &&
          H.headers.delete("content-type"),
        !H.headers.has("content-type") && K && H.headers.set("content-type", f),
        K && o(H.headers) && (H.body = JSON.stringify(H.body, h)),
        H.headers.has("accept") ||
          (X === "json"
            ? H.headers.set("accept", "application/json")
            : X === "text" &&
              H.headers.set("accept", "text/plain, text/html, */*")),
        U)
      ) {
        const ie = ~C.indexOf("?") ? "&" : "?",
          x = s ? s(U) : new URLSearchParams(Up(U));
        C += ie + x;
      }
      C = SE(a, C);
      const W = new Request(C, H);
      M = { request: new Request(C, H) };
      let L;
      try {
        L = await c(W);
      } catch (ie) {
        return {
          error: {
            status:
              (ie instanceof Error ||
                (typeof DOMException < "u" && ie instanceof DOMException)) &&
              ie.name === "TimeoutError"
                ? "TIMEOUT_ERROR"
                : "FETCH_ERROR",
            error: String(ie),
          },
          meta: M,
        };
      }
      const P = L.clone();
      M.response = P;
      let ee,
        ne = "";
      try {
        let ie;
        if (
          (await Promise.all([
            v(L, X).then(
              (x) => (ee = x),
              (x) => (ie = x),
            ),
            P.text().then(
              (x) => (ne = x),
              () => {},
            ),
          ]),
          ie)
        )
          throw ie;
      } catch (ie) {
        return {
          error: {
            status: "PARSING_ERROR",
            originalStatus: L.status,
            data: ne,
            error: String(ie),
          },
          meta: M,
        };
      }
      return V(L, ee)
        ? { data: ee, meta: M }
        : { error: { status: L.status, data: ee }, meta: M };
    }
  );
  async function v(_, S) {
    if (typeof S == "function") return S(_);
    if (
      (S === "content-type" && (S = o(_.headers) ? "json" : "text"),
      S === "json")
    ) {
      const A = await _.text();
      return A.length ? JSON.parse(A) : null;
    }
    return _.text();
  }
}
var qp = class {
    constructor(a, u = void 0) {
      ((this.value = a), (this.meta = u));
    }
  },
  oc = "__rtkq/",
  OE = "online",
  CE = "offline",
  Qg = "focused",
  Qf = $t(`${oc}${Qg}`),
  Bg = $t(`${oc}un${Qg}`),
  Bf = $t(`${oc}${OE}`),
  Yg = $t(`${oc}${CE}`),
  li = "query",
  Vg = "mutation",
  Gg = "infinitequery";
function fc(a) {
  return a.type === li;
}
function ME(a) {
  return a.type === Vg;
}
function dc(a) {
  return a.type === Gg;
}
function Ir(a) {
  return fc(a) || dc(a);
}
function Yf(a, u, c, s, o, f) {
  const h = wE(a) ? a(u, c, s, o) : a;
  return h ? rf(h, Lf, (p) => f(kg(p))) : [];
}
function wE(a) {
  return typeof a == "function";
}
function kg(a) {
  return typeof a == "string" ? { type: a } : a;
}
function zE(a, u) {
  return a.catch(u);
}
var Ml = (a, u) => a.endpointDefinitions[u],
  Zu = Symbol("forceQueryFn"),
  sf = (a) => typeof a[Zu] == "function";
function NE({
  serializeQueryArgs: a,
  queryThunk: u,
  infiniteQueryThunk: c,
  mutationThunk: s,
  api: o,
  context: f,
  getInternalState: h,
}) {
  const p = (M) => h(M)?.runningQueries,
    y = (M) => h(M)?.runningMutations,
    {
      unsubscribeQueryResult: m,
      removeMutationResult: b,
      updateSubscriptionOptions: v,
    } = o.internalActions;
  return {
    buildInitiateQuery: j,
    buildInitiateInfiniteQuery: Q,
    buildInitiateMutation: E,
    getRunningQueryThunk: _,
    getRunningMutationThunk: S,
    getRunningQueriesThunk: A,
    getRunningMutationsThunk: z,
  };
  function _(M, C) {
    return (w) => {
      const U = Ml(f, M),
        X = a({ queryArgs: C, endpointDefinition: U, endpointName: M });
      return p(w)?.get(X);
    };
  }
  function S(M, C) {
    return (w) => y(w)?.get(C);
  }
  function A() {
    return (M) => Dp(p(M));
  }
  function z() {
    return (M) => Dp(y(M));
  }
  function T(M, C) {
    const w =
      (
        U,
        {
          subscribe: X = !0,
          forceRefetch: V,
          subscriptionOptions: Y,
          [Zu]: N,
          ...H
        } = {},
      ) =>
      (K, W) => {
        const ue = a({ queryArgs: U, endpointDefinition: C, endpointName: M });
        let L;
        const P = {
          ...H,
          type: li,
          subscribe: X,
          forceRefetch: V,
          subscriptionOptions: Y,
          endpointName: M,
          originalArgs: U,
          queryCacheKey: ue,
          [Zu]: N,
        };
        if (fc(C)) L = u(P);
        else {
          const {
            direction: re,
            initialPageParam: be,
            refetchCachedPages: de,
          } = H;
          L = c({
            ...P,
            direction: re,
            initialPageParam: be,
            refetchCachedPages: de,
          });
        }
        const ee = o.endpoints[M].select(U),
          ne = K(L),
          ie = ee(W()),
          { requestId: x, abort: $ } = ne,
          le = ie.requestId !== x,
          ae = p(K)?.get(ue),
          ce = () => ee(W()),
          oe = Object.assign(
            N
              ? ne.then(ce)
              : le && !ae
                ? Promise.resolve(ie)
                : Promise.all([ae, ne]).then(ce),
            {
              arg: U,
              requestId: x,
              subscriptionOptions: Y,
              queryCacheKey: ue,
              abort: $,
              async unwrap() {
                const re = await oe;
                if (re.isError) throw re.error;
                return re.data;
              },
              refetch: (re) =>
                K(w(U, { subscribe: !1, forceRefetch: !0, ...re })),
              unsubscribe() {
                X && K(m({ queryCacheKey: ue, requestId: x }));
              },
              updateSubscriptionOptions(re) {
                ((oe.subscriptionOptions = re),
                  K(
                    v({
                      endpointName: M,
                      requestId: x,
                      queryCacheKey: ue,
                      options: re,
                    }),
                  ));
              },
            },
          );
        if (!ae && !le && !N) {
          const re = p(K);
          (re.set(ue, oe),
            oe.then(() => {
              re.delete(ue);
            }));
        }
        return oe;
      };
    return w;
  }
  function j(M, C) {
    return T(M, C);
  }
  function Q(M, C) {
    return T(M, C);
  }
  function E(M) {
    return (C, { track: w = !0, fixedCacheKey: U } = {}) =>
      (X, V) => {
        const Y = s({
            type: "mutation",
            endpointName: M,
            originalArgs: C,
            track: w,
            fixedCacheKey: U,
          }),
          N = X(Y),
          { requestId: H, abort: K, unwrap: W } = N,
          ue = zE(
            N.unwrap().then((ne) => ({ data: ne })),
            (ne) => ({ error: ne }),
          ),
          L = () => {
            X(b({ requestId: H, fixedCacheKey: U }));
          },
          P = Object.assign(ue, {
            arg: N.arg,
            requestId: H,
            abort: K,
            unwrap: W,
            reset: L,
          }),
          ee = y(X);
        return (
          ee.set(H, P),
          P.then(() => {
            ee.delete(H);
          }),
          U &&
            (ee.set(U, P),
            P.then(() => {
              ee.get(U) === P && ee.delete(U);
            })),
          P
        );
      };
  }
}
var Xg = class extends mE {
    constructor(a, u, c, s) {
      (super(a), (this.value = u), (this.schemaName = c), (this._bqMeta = s));
    }
  },
  Da = (a, u) => (Array.isArray(a) ? a.includes(u) : !!a);
async function ja(a, u, c, s) {
  const o = await a["~standard"].validate(u);
  if (o.issues) throw new Xg(o.issues, u, c, s);
  return o.value;
}
function Hp(a) {
  return a;
}
var zu = (a = {}) => ({ ...a, [ic]: !0 });
function DE({
  reducerPath: a,
  baseQuery: u,
  context: { endpointDefinitions: c },
  serializeQueryArgs: s,
  api: o,
  assertTagType: f,
  selectors: h,
  onSchemaFailure: p,
  catchSchemaFailure: y,
  skipSchemaValidation: m,
}) {
  const b = (N, H, K, W) => (ue, L) => {
    const P = c[N],
      ee = s({ queryArgs: H, endpointDefinition: P, endpointName: N });
    if (
      (ue(
        o.internalActions.queryResultPatched({ queryCacheKey: ee, patches: K }),
      ),
      !W)
    )
      return;
    const ne = o.endpoints[N].select(H)(L()),
      ie = Yf(P.providesTags, ne.data, void 0, H, {}, f);
    ue(
      o.internalActions.updateProvidedBy([
        { queryCacheKey: ee, providedTags: ie },
      ]),
    );
  };
  function v(N, H, K = 0) {
    const W = [H, ...N];
    return K && W.length > K ? W.slice(0, -1) : W;
  }
  function _(N, H, K = 0) {
    const W = [...N, H];
    return K && W.length > K ? W.slice(1) : W;
  }
  const S =
      (N, H, K, W = !0) =>
      (ue, L) => {
        const ee = o.endpoints[N].select(H)(L()),
          ne = {
            patches: [],
            inversePatches: [],
            undo: () => ue(o.util.patchQueryData(N, H, ne.inversePatches, W)),
          };
        if (ee.status === Dn) return ne;
        let ie;
        if ("data" in ee)
          if (wt(ee.data)) {
            const [x, $, le] = Ng(ee.data, K);
            (ne.patches.push(...$), ne.inversePatches.push(...le), (ie = x));
          } else
            ((ie = K(ee.data)),
              ne.patches.push({ op: "replace", path: [], value: ie }),
              ne.inversePatches.push({
                op: "replace",
                path: [],
                value: ee.data,
              }));
        return (
          ne.patches.length === 0 ||
            ue(o.util.patchQueryData(N, H, ne.patches, W)),
          ne
        );
      },
    A = (N, H, K) => (W) =>
      W(
        o.endpoints[N].initiate(H, {
          subscribe: !1,
          forceRefetch: !0,
          [Zu]: () => ({ data: K }),
        }),
      ),
    z = (N, H) => (N.query && N[H] ? N[H] : Hp),
    T = async (
      N,
      {
        signal: H,
        abort: K,
        rejectWithValue: W,
        fulfillWithValue: ue,
        dispatch: L,
        getState: P,
        extra: ee,
      },
    ) => {
      const ne = c[N.endpointName],
        { metaSchema: ie, skipSchemaValidation: x = m } = ne,
        $ = N.type === li;
      try {
        let le = Hp;
        const ae = {
            signal: H,
            abort: K,
            dispatch: L,
            getState: P,
            extra: ee,
            endpoint: N.endpointName,
            type: N.type,
            forced: $ ? j(N, P()) : void 0,
            queryCacheKey: $ ? N.queryCacheKey : void 0,
          },
          ce = $ ? N[Zu] : void 0;
        let oe;
        const re = async (de, ve, st, Ie) => {
          if (ve == null && de.pages.length)
            return Promise.resolve({ data: de });
          const un = { queryArg: N.originalArgs, pageParam: ve },
            et = await be(un),
            Wt = Ie ? v : _;
          return {
            data: {
              pages: Wt(de.pages, et.data, st),
              pageParams: Wt(de.pageParams, ve, st),
            },
            meta: et.meta,
          };
        };
        async function be(de) {
          let ve;
          const {
            extraOptions: st,
            argSchema: Ie,
            rawResponseSchema: un,
            responseSchema: et,
          } = ne;
          if (
            (Ie && !Da(x, "arg") && (de = await ja(Ie, de, "argSchema", {})),
            ce
              ? (ve = ce())
              : ne.query
                ? ((le = z(ne, "transformResponse")),
                  (ve = await u(ne.query(de), ae, st)))
                : (ve = await ne.queryFn(de, ae, st, (qn) => u(qn, ae, st))),
            typeof process < "u",
            ve.error)
          )
            throw new qp(ve.error, ve.meta);
          let { data: Wt } = ve;
          un &&
            !Da(x, "rawResponse") &&
            (Wt = await ja(un, ve.data, "rawResponseSchema", ve.meta));
          let Nt = await le(Wt, ve.meta, de);
          return (
            et &&
              !Da(x, "response") &&
              (Nt = await ja(et, Nt, "responseSchema", ve.meta)),
            { ...ve, data: Nt }
          );
        }
        if ($ && "infiniteQueryOptions" in ne) {
          const { infiniteQueryOptions: de } = ne,
            { maxPages: ve = 1 / 0 } = de,
            st = N.refetchCachedPages ?? de.refetchCachedPages ?? !0;
          let Ie;
          const un = { pages: [], pageParams: [] },
            et = h.selectQueryEntry(P(), N.queryCacheKey)?.data,
            Nt = (j(N, P()) && !N.direction) || !et ? un : et;
          if ("direction" in N && N.direction && Nt.pages.length) {
            const qn = N.direction === "backward",
              ma = (qn ? Zg : of)(de, Nt, N.originalArgs);
            Ie = await re(Nt, ma, ve, qn);
          } else {
            const { initialPageParam: qn = de.initialPageParam } = N,
              Ba = et?.pageParams ?? [],
              ma = Ba[0] ?? qn,
              Dl = Ba.length;
            if (
              ((Ie = await re(Nt, ma, ve)),
              ce && (Ie = { data: Ie.data.pages[0] }),
              st)
            )
              for (let Ya = 1; Ya < Dl; Ya++) {
                const yc = of(de, Ie.data, N.originalArgs);
                Ie = await re(Ie.data, yc, ve);
              }
          }
          oe = Ie;
        } else oe = await be(N.originalArgs);
        return (
          ie &&
            !Da(x, "meta") &&
            oe.meta &&
            (oe.meta = await ja(ie, oe.meta, "metaSchema", oe.meta)),
          ue(
            oe.data,
            zu({ fulfilledTimeStamp: Date.now(), baseQueryMeta: oe.meta }),
          )
        );
      } catch (le) {
        let ae = le;
        if (ae instanceof qp) {
          let ce = z(ne, "transformErrorResponse");
          const { rawErrorResponseSchema: oe, errorResponseSchema: re } = ne;
          let { value: be, meta: de } = ae;
          try {
            (oe &&
              !Da(x, "rawErrorResponse") &&
              (be = await ja(oe, be, "rawErrorResponseSchema", de)),
              ie &&
                !Da(x, "meta") &&
                (de = await ja(ie, de, "metaSchema", de)));
            let ve = await ce(be, de, N.originalArgs);
            return (
              re &&
                !Da(x, "errorResponse") &&
                (ve = await ja(re, ve, "errorResponseSchema", de)),
              W(ve, zu({ baseQueryMeta: de }))
            );
          } catch (ve) {
            ae = ve;
          }
        }
        try {
          if (ae instanceof Xg) {
            const ce = {
              endpoint: N.endpointName,
              arg: N.originalArgs,
              type: N.type,
              queryCacheKey: $ ? N.queryCacheKey : void 0,
            };
            (ne.onSchemaFailure?.(ae, ce), p?.(ae, ce));
            const { catchSchemaFailure: oe = y } = ne;
            if (oe) return W(oe(ae, ce), zu({ baseQueryMeta: ae._bqMeta }));
          }
        } catch (ce) {
          ae = ce;
        }
        throw (console.error(ae), ae);
      }
    };
  function j(N, H) {
    const K = h.selectQueryEntry(H, N.queryCacheKey),
      W = h.selectConfig(H).refetchOnMountOrArgChange,
      ue = K?.fulfilledTimeStamp,
      L = N.forceRefetch ?? (N.subscribe && W);
    return L ? L === !0 || (Number(new Date()) - Number(ue)) / 1e3 >= L : !1;
  }
  const Q = () =>
      _p(`${a}/executeQuery`, T, {
        getPendingMeta({ arg: H }) {
          const K = c[H.endpointName];
          return zu({
            startedTimeStamp: Date.now(),
            ...(dc(K) ? { direction: H.direction } : {}),
          });
        },
        condition(H, { getState: K }) {
          const W = K(),
            ue = h.selectQueryEntry(W, H.queryCacheKey),
            L = ue?.fulfilledTimeStamp,
            P = H.originalArgs,
            ee = ue?.originalArgs,
            ne = c[H.endpointName],
            ie = H.direction;
          return sf(H)
            ? !0
            : ue?.status === "pending"
              ? !1
              : j(H, W) ||
                  (fc(ne) &&
                    ne?.forceRefetch?.({
                      currentArg: P,
                      previousArg: ee,
                      endpointState: ue,
                      state: W,
                    }))
                ? !0
                : !(L && !ie);
        },
        dispatchConditionRejection: !0,
      }),
    E = Q(),
    M = Q(),
    C = _p(`${a}/executeMutation`, T, {
      getPendingMeta() {
        return zu({ startedTimeStamp: Date.now() });
      },
    }),
    w = (N) => "force" in N,
    U = (N) => "ifOlderThan" in N,
    X =
      (N, H, K = {}) =>
      (W, ue) => {
        const L = w(K) && K.force,
          P = U(K) && K.ifOlderThan,
          ee = (ie = !0) => {
            const x = { forceRefetch: ie, subscribe: !1 };
            return o.endpoints[N].initiate(H, x);
          },
          ne = o.endpoints[N].select(H)(ue());
        if (L) W(ee());
        else if (P) {
          const ie = ne?.fulfilledTimeStamp;
          if (!ie) {
            W(ee());
            return;
          }
          (Number(new Date()) - Number(new Date(ie))) / 1e3 >= P && W(ee());
        } else W(ee(!1));
      };
  function V(N) {
    return (H) => H?.meta?.arg?.endpointName === N;
  }
  function Y(N, H) {
    return {
      matchPending: Qu(Mf(N), V(H)),
      matchFulfilled: Qu(da(N), V(H)),
      matchRejected: Qu(Cl(N), V(H)),
    };
  }
  return {
    queryThunk: E,
    mutationThunk: C,
    infiniteQueryThunk: M,
    prefetch: X,
    updateQueryData: S,
    upsertQueryData: A,
    patchQueryData: b,
    buildMatchThunkActions: Y,
  };
}
function of(a, { pages: u, pageParams: c }, s) {
  const o = u.length - 1;
  return a.getNextPageParam(u[o], u, c[o], c, s);
}
function Zg(a, { pages: u, pageParams: c }, s) {
  return a.getPreviousPageParam?.(u[0], u, c[0], c, s);
}
function Kg(a, u, c, s) {
  return Yf(
    c[a.meta.arg.endpointName][u],
    da(a) ? a.payload : void 0,
    cc(a) ? a.payload : void 0,
    a.meta.arg.originalArgs,
    "baseQueryMeta" in a.meta ? a.meta.baseQueryMeta : void 0,
    s,
  );
}
function Lp(a) {
  return Mt(a) ? wg(a) : a;
}
function wr(a, u, c) {
  const s = a[u];
  s && c(s);
}
function Ku(a) {
  return ("arg" in a ? a.arg.fixedCacheKey : a.fixedCacheKey) ?? a.requestId;
}
function Qp(a, u, c) {
  const s = a[Ku(u)];
  s && c(s);
}
var zr = {};
function jE({
  reducerPath: a,
  queryThunk: u,
  mutationThunk: c,
  serializeQueryArgs: s,
  context: {
    endpointDefinitions: o,
    apiUid: f,
    extractRehydrationInfo: h,
    hasRehydrationInfo: p,
  },
  assertTagType: y,
  config: m,
}) {
  const b = $t(`${a}/resetApiState`);
  function v(V, Y, N, H) {
    ((V[Y.queryCacheKey] ??= { status: Dn, endpointName: Y.endpointName }),
      wr(V, Y.queryCacheKey, (K) => {
        ((K.status = uf),
          (K.requestId = N && K.requestId ? K.requestId : H.requestId),
          Y.originalArgs !== void 0 && (K.originalArgs = Y.originalArgs),
          (K.startedTimeStamp = H.startedTimeStamp));
        const W = o[H.arg.endpointName];
        dc(W) && "direction" in Y && (K.direction = Y.direction);
      }));
  }
  function _(V, Y, N, H) {
    wr(V, Y.arg.queryCacheKey, (K) => {
      if (K.requestId !== Y.requestId && !H) return;
      const { merge: W } = o[Y.arg.endpointName];
      if (((K.status = ju), W))
        if (K.data !== void 0) {
          const {
            fulfilledTimeStamp: ue,
            arg: L,
            baseQueryMeta: P,
            requestId: ee,
          } = Y;
          let ne = ni(K.data, (ie) =>
            W(ie, N, {
              arg: L.originalArgs,
              baseQueryMeta: P,
              fulfilledTimeStamp: ue,
              requestId: ee,
            }),
          );
          K.data = ne;
        } else K.data = N;
      else
        K.data =
          (o[Y.arg.endpointName].structuralSharing ?? !0)
            ? Hf(Mt(K.data) ? XS(K.data) : K.data, N)
            : N;
      (delete K.error, (K.fulfilledTimeStamp = Y.fulfilledTimeStamp));
    });
  }
  const S = ca({
      name: `${a}/queries`,
      initialState: zr,
      reducers: {
        removeQueryResult: {
          reducer(V, { payload: { queryCacheKey: Y } }) {
            delete V[Y];
          },
          prepare: Mu(),
        },
        cacheEntriesUpserted: {
          reducer(V, Y) {
            for (const N of Y.payload) {
              const { queryDescription: H, value: K } = N;
              (v(V, H, !0, {
                arg: H,
                requestId: Y.meta.requestId,
                startedTimeStamp: Y.meta.timestamp,
              }),
                _(
                  V,
                  {
                    arg: H,
                    requestId: Y.meta.requestId,
                    fulfilledTimeStamp: Y.meta.timestamp,
                    baseQueryMeta: {},
                  },
                  K,
                  !0,
                ));
            }
          },
          prepare: (V) => ({
            payload: V.map((H) => {
              const { endpointName: K, arg: W, value: ue } = H,
                L = o[K];
              return {
                queryDescription: {
                  type: li,
                  endpointName: K,
                  originalArgs: H.arg,
                  queryCacheKey: s({
                    queryArgs: W,
                    endpointDefinition: L,
                    endpointName: K,
                  }),
                },
                value: ue,
              };
            }),
            meta: { [ic]: !0, requestId: wf(), timestamp: Date.now() },
          }),
        },
        queryResultPatched: {
          reducer(V, { payload: { queryCacheKey: Y, patches: N } }) {
            wr(V, Y, (H) => {
              H.data = pp(H.data, N.concat());
            });
          },
          prepare: Mu(),
        },
      },
      extraReducers(V) {
        V.addCase(u.pending, (Y, { meta: N, meta: { arg: H } }) => {
          const K = sf(H);
          v(Y, H, K, N);
        })
          .addCase(u.fulfilled, (Y, { meta: N, payload: H }) => {
            const K = sf(N.arg);
            _(Y, N, H, K);
          })
          .addCase(
            u.rejected,
            (
              Y,
              {
                meta: { condition: N, arg: H, requestId: K },
                error: W,
                payload: ue,
              },
            ) => {
              wr(Y, H.queryCacheKey, (L) => {
                if (!N) {
                  if (L.requestId !== K) return;
                  ((L.status = Uu), (L.error = ue ?? W));
                }
              });
            },
          )
          .addMatcher(p, (Y, N) => {
            const { queries: H } = h(N);
            for (const [K, W] of Object.entries(H))
              (W?.status === ju || W?.status === Uu) && (Y[K] = W);
          });
      },
    }),
    A = ca({
      name: `${a}/mutations`,
      initialState: zr,
      reducers: {
        removeMutationResult: {
          reducer(V, { payload: Y }) {
            const N = Ku(Y);
            N in V && delete V[N];
          },
          prepare: Mu(),
        },
      },
      extraReducers(V) {
        V.addCase(
          c.pending,
          (
            Y,
            { meta: N, meta: { requestId: H, arg: K, startedTimeStamp: W } },
          ) => {
            K.track &&
              (Y[Ku(N)] = {
                requestId: H,
                status: uf,
                endpointName: K.endpointName,
                startedTimeStamp: W,
              });
          },
        )
          .addCase(c.fulfilled, (Y, { payload: N, meta: H }) => {
            H.arg.track &&
              Qp(Y, H, (K) => {
                K.requestId === H.requestId &&
                  ((K.status = ju),
                  (K.data = N),
                  (K.fulfilledTimeStamp = H.fulfilledTimeStamp));
              });
          })
          .addCase(c.rejected, (Y, { payload: N, error: H, meta: K }) => {
            K.arg.track &&
              Qp(Y, K, (W) => {
                W.requestId === K.requestId &&
                  ((W.status = Uu), (W.error = N ?? H));
              });
          })
          .addMatcher(p, (Y, N) => {
            const { mutations: H } = h(N);
            for (const [K, W] of Object.entries(H))
              (W?.status === ju || W?.status === Uu) &&
                K !== W?.requestId &&
                (Y[K] = W);
          });
      },
    }),
    z = { tags: {}, keys: {} },
    T = ca({
      name: `${a}/invalidation`,
      initialState: z,
      reducers: {
        updateProvidedBy: {
          reducer(V, Y) {
            for (const { queryCacheKey: N, providedTags: H } of Y.payload) {
              j(V, N);
              for (const { type: K, id: W } of H) {
                const ue = ((V.tags[K] ??= {})[W || "__internal_without_id"] ??=
                  []);
                ue.includes(N) || ue.push(N);
              }
              V.keys[N] = H;
            }
          },
          prepare: Mu(),
        },
      },
      extraReducers(V) {
        V.addCase(
          S.actions.removeQueryResult,
          (Y, { payload: { queryCacheKey: N } }) => {
            j(Y, N);
          },
        )
          .addMatcher(p, (Y, N) => {
            const { provided: H } = h(N);
            for (const [K, W] of Object.entries(H.tags ?? {}))
              for (const [ue, L] of Object.entries(W)) {
                const P = ((Y.tags[K] ??= {})[ue || "__internal_without_id"] ??=
                  []);
                for (const ee of L)
                  (P.includes(ee) || P.push(ee), (Y.keys[ee] = H.keys[ee]));
              }
          })
          .addMatcher(Nn(da(u), cc(u)), (Y, N) => {
            Q(Y, [N]);
          })
          .addMatcher(S.actions.cacheEntriesUpserted.match, (Y, N) => {
            const H = N.payload.map(({ queryDescription: K, value: W }) => ({
              type: "UNKNOWN",
              payload: W,
              meta: {
                requestStatus: "fulfilled",
                requestId: "UNKNOWN",
                arg: K,
              },
            }));
            Q(Y, H);
          });
      },
    });
  function j(V, Y) {
    const N = Lp(V.keys[Y] ?? []);
    for (const H of N) {
      const K = H.type,
        W = H.id ?? "__internal_without_id",
        ue = V.tags[K]?.[W];
      ue && (V.tags[K][W] = Lp(ue).filter((L) => L !== Y));
    }
    delete V.keys[Y];
  }
  function Q(V, Y) {
    const N = Y.map((H) => {
      const K = Kg(H, "providesTags", o, y),
        { queryCacheKey: W } = H.meta.arg;
      return { queryCacheKey: W, providedTags: K };
    });
    T.caseReducers.updateProvidedBy(V, T.actions.updateProvidedBy(N));
  }
  const E = ca({
      name: `${a}/subscriptions`,
      initialState: zr,
      reducers: {
        updateSubscriptionOptions(V, Y) {},
        unsubscribeQueryResult(V, Y) {},
        internal_getRTKQSubscriptions() {},
      },
    }),
    M = ca({
      name: `${a}/internalSubscriptions`,
      initialState: zr,
      reducers: {
        subscriptionsUpdated: {
          reducer(V, Y) {
            return pp(V, Y.payload);
          },
          prepare: Mu(),
        },
      },
    }),
    C = ca({
      name: `${a}/config`,
      initialState: {
        online: gE(),
        focused: pE(),
        middlewareRegistered: !1,
        ...m,
      },
      reducers: {
        middlewareRegistered(V, { payload: Y }) {
          V.middlewareRegistered =
            V.middlewareRegistered === "conflict" || f !== Y ? "conflict" : !0;
        },
      },
      extraReducers: (V) => {
        V.addCase(Bf, (Y) => {
          Y.online = !0;
        })
          .addCase(Yg, (Y) => {
            Y.online = !1;
          })
          .addCase(Qf, (Y) => {
            Y.focused = !0;
          })
          .addCase(Bg, (Y) => {
            Y.focused = !1;
          })
          .addMatcher(p, (Y) => ({ ...Y }));
      },
    }),
    w = Tf({
      queries: S.reducer,
      mutations: A.reducer,
      provided: T.reducer,
      subscriptions: M.reducer,
      config: C.reducer,
    }),
    U = (V, Y) => w(b.match(Y) ? void 0 : V, Y),
    X = {
      ...C.actions,
      ...S.actions,
      ...E.actions,
      ...M.actions,
      ...A.actions,
      ...T.actions,
      resetApiState: b,
    };
  return { reducer: U, actions: X };
}
var Jt = Symbol.for("RTKQ/skipToken"),
  Jg = { status: Dn },
  Bp = ni(Jg, () => {}),
  Yp = ni(Jg, () => {});
function UE({ serializeQueryArgs: a, reducerPath: u, createSelector: c }) {
  const s = (E) => Bp,
    o = (E) => Yp;
  return {
    buildQuerySelector: _,
    buildInfiniteQuerySelector: S,
    buildMutationSelector: A,
    selectInvalidatedBy: z,
    selectCachedArgsForQuery: T,
    selectApiState: h,
    selectQueries: p,
    selectMutations: m,
    selectQueryEntry: y,
    selectConfig: b,
  };
  function f(E) {
    return { ...E, ...zp(E.status) };
  }
  function h(E) {
    return E[u];
  }
  function p(E) {
    return h(E)?.queries;
  }
  function y(E, M) {
    return p(E)?.[M];
  }
  function m(E) {
    return h(E)?.mutations;
  }
  function b(E) {
    return h(E)?.config;
  }
  function v(E, M, C) {
    return (w) => {
      if (w === Jt) return c(s, C);
      const U = a({ queryArgs: w, endpointDefinition: M, endpointName: E });
      return c((V) => y(V, U) ?? Bp, C);
    };
  }
  function _(E, M) {
    return v(E, M, f);
  }
  function S(E, M) {
    const { infiniteQueryOptions: C } = M;
    function w(U) {
      const X = { ...U, ...zp(U.status) },
        { isLoading: V, isError: Y, direction: N } = X,
        H = N === "forward",
        K = N === "backward";
      return {
        ...X,
        hasNextPage: j(C, X.data, X.originalArgs),
        hasPreviousPage: Q(C, X.data, X.originalArgs),
        isFetchingNextPage: V && H,
        isFetchingPreviousPage: V && K,
        isFetchNextPageError: Y && H,
        isFetchPreviousPageError: Y && K,
      };
    }
    return v(E, M, w);
  }
  function A() {
    return (E) => {
      let M;
      return (
        typeof E == "object" ? (M = Ku(E) ?? Jt) : (M = E),
        c(M === Jt ? o : (U) => h(U)?.mutations?.[M] ?? Yp, f)
      );
    };
  }
  function z(E, M) {
    const C = E[u],
      w = new Set(),
      U = rf(M, Lf, kg);
    for (const X of U) {
      const V = C.provided.tags[X.type];
      if (!V) continue;
      let Y = (X.id !== void 0 ? V[X.id] : Object.values(V).flat()) ?? [];
      for (const N of Y) w.add(N);
    }
    return Array.from(w.values()).flatMap((X) => {
      const V = C.queries[X];
      return V
        ? {
            queryCacheKey: X,
            endpointName: V.endpointName,
            originalArgs: V.originalArgs,
          }
        : [];
    });
  }
  function T(E, M) {
    return rf(
      Object.values(p(E)),
      (C) => C?.endpointName === M && C.status !== Dn,
      (C) => C.originalArgs,
    );
  }
  function j(E, M, C) {
    return M ? of(E, M, C) != null : !1;
  }
  function Q(E, M, C) {
    return !M || !E.getPreviousPageParam ? !1 : Zg(E, M, C) != null;
  }
}
var Vp = WeakMap ? new WeakMap() : void 0,
  Gp = ({ endpointName: a, queryArgs: u }) => {
    let c = "";
    const s = Vp?.get(u);
    if (typeof s == "string") c = s;
    else {
      const o = JSON.stringify(
        u,
        (f, h) => (
          (h = typeof h == "bigint" ? { $bigint: h.toString() } : h),
          (h = fa(h)
            ? Object.keys(h)
                .sort()
                .reduce((p, y) => ((p[y] = h[y]), p), {})
            : h),
          h
        ),
      );
      (fa(u) && Vp?.set(u, o), (c = o));
    }
    return `${a}(${c})`;
  };
function $g(...a) {
  return function (c) {
    const s = Pr((m) =>
        c.extractRehydrationInfo?.(m, { reducerPath: c.reducerPath ?? "api" }),
      ),
      o = {
        reducerPath: "api",
        keepUnusedDataFor: 60,
        refetchOnMountOrArgChange: !1,
        refetchOnFocus: !1,
        refetchOnReconnect: !1,
        invalidationBehavior: "delayed",
        ...c,
        extractRehydrationInfo: s,
        serializeQueryArgs(m) {
          let b = Gp;
          if ("serializeQueryArgs" in m.endpointDefinition) {
            const v = m.endpointDefinition.serializeQueryArgs;
            b = (_) => {
              const S = v(_);
              return typeof S == "string" ? S : Gp({ ..._, queryArgs: S });
            };
          } else c.serializeQueryArgs && (b = c.serializeQueryArgs);
          return b(m);
        },
        tagTypes: [...(c.tagTypes || [])],
      },
      f = {
        endpointDefinitions: {},
        batch(m) {
          m();
        },
        apiUid: wf(),
        extractRehydrationInfo: s,
        hasRehydrationInfo: Pr((m) => s(m) != null),
      },
      h = {
        injectEndpoints: y,
        enhanceEndpoints({ addTagTypes: m, endpoints: b }) {
          if (m)
            for (const v of m) o.tagTypes.includes(v) || o.tagTypes.push(v);
          if (b)
            for (const [v, _] of Object.entries(b))
              typeof _ == "function"
                ? _(Ml(f, v))
                : Object.assign(Ml(f, v) || {}, _);
          return h;
        },
      },
      p = a.map((m) => m.init(h, o, f));
    function y(m) {
      const b = m.endpoints({
        query: (v) => ({ ...v, type: li }),
        mutation: (v) => ({ ...v, type: Vg }),
        infiniteQuery: (v) => ({ ...v, type: Gg }),
      });
      for (const [v, _] of Object.entries(b)) {
        if (m.overrideExisting !== !0 && v in f.endpointDefinitions) {
          if (m.overrideExisting === "throw") throw new Error(Gt(39));
          continue;
        }
        f.endpointDefinitions[v] = _;
        for (const S of p) S.injectEndpoint(v, _);
      }
      return h;
    }
    return h.injectEndpoints({ endpoints: c.endpoints });
  };
}
function An(a, ...u) {
  return Object.assign(a, ...u);
}
var qE = ({ api: a, queryThunk: u, internalState: c, mwApi: s }) => {
    const o = `${a.reducerPath}/subscriptions`;
    let f = null,
      h = null;
    const { updateSubscriptionOptions: p, unsubscribeQueryResult: y } =
        a.internalActions,
      m = (z, T) => {
        if (p.match(T)) {
          const { queryCacheKey: Q, requestId: E, options: M } = T.payload,
            C = z.get(Q);
          return (C?.has(E) && C.set(E, M), !0);
        }
        if (y.match(T)) {
          const { queryCacheKey: Q, requestId: E } = T.payload,
            M = z.get(Q);
          return (M && M.delete(E), !0);
        }
        if (a.internalActions.removeQueryResult.match(T))
          return (z.delete(T.payload.queryCacheKey), !0);
        if (u.pending.match(T)) {
          const {
              meta: { arg: Q, requestId: E },
            } = T,
            M = Wr(z, Q.queryCacheKey, cf);
          return (
            Q.subscribe && M.set(E, Q.subscriptionOptions ?? M.get(E) ?? {}),
            !0
          );
        }
        let j = !1;
        if (u.rejected.match(T)) {
          const {
            meta: { condition: Q, arg: E, requestId: M },
          } = T;
          if (Q && E.subscribe) {
            const C = Wr(z, E.queryCacheKey, cf);
            (C.set(M, E.subscriptionOptions ?? C.get(M) ?? {}), (j = !0));
          }
        }
        return j;
      },
      b = () => c.currentSubscriptions,
      S = {
        getSubscriptions: b,
        getSubscriptionCount: (z) => b().get(z)?.size ?? 0,
        isRequestSubscribed: (z, T) => !!b()?.get(z)?.get(T),
      };
    function A(z) {
      return JSON.parse(
        JSON.stringify(
          Object.fromEntries(
            [...z].map(([T, j]) => [T, Object.fromEntries(j)]),
          ),
        ),
      );
    }
    return (z, T) => {
      if ((f || (f = A(c.currentSubscriptions)), a.util.resetApiState.match(z)))
        return ((f = {}), c.currentSubscriptions.clear(), (h = null), [!0, !1]);
      if (a.internalActions.internal_getRTKQSubscriptions.match(z))
        return [!1, S];
      const j = m(c.currentSubscriptions, z);
      let Q = !0;
      if (j) {
        h ||
          (h = setTimeout(() => {
            const C = A(c.currentSubscriptions),
              [, w] = Ng(f, () => C);
            (T.next(a.internalActions.subscriptionsUpdated(w)),
              (f = C),
              (h = null));
          }, 500));
        const E = typeof z.type == "string" && !!z.type.startsWith(o),
          M = u.rejected.match(z) && z.meta.condition && !!z.meta.arg.subscribe;
        Q = !E && !M;
      }
      return [Q, !1];
    };
  },
  HE = 2147483647 / 1e3 - 1,
  LE = ({
    reducerPath: a,
    api: u,
    queryThunk: c,
    context: s,
    internalState: o,
    selectors: { selectQueryEntry: f, selectConfig: h },
    getRunningQueryThunk: p,
    mwApi: y,
  }) => {
    const {
        removeQueryResult: m,
        unsubscribeQueryResult: b,
        cacheEntriesUpserted: v,
      } = u.internalActions,
      _ = Nn(b.match, c.fulfilled, c.rejected, v.match);
    function S(E) {
      const M = o.currentSubscriptions.get(E);
      return M ? M.size > 0 : !1;
    }
    const A = {};
    function z(E) {
      for (const M of E.values()) M?.abort?.();
    }
    const T = (E, M) => {
      const C = M.getState(),
        w = h(C);
      if (_(E)) {
        let U;
        if (v.match(E))
          U = E.payload.map((X) => X.queryDescription.queryCacheKey);
        else {
          const { queryCacheKey: X } = b.match(E) ? E.payload : E.meta.arg;
          U = [X];
        }
        j(U, M, w);
      }
      if (u.util.resetApiState.match(E)) {
        for (const [U, X] of Object.entries(A))
          (X && clearTimeout(X), delete A[U]);
        (z(o.runningQueries), z(o.runningMutations));
      }
      if (s.hasRehydrationInfo(E)) {
        const { queries: U } = s.extractRehydrationInfo(E);
        j(Object.keys(U), M, w);
      }
    };
    function j(E, M, C) {
      const w = M.getState();
      for (const U of E) {
        const X = f(w, U);
        X?.endpointName && Q(U, X.endpointName, M, C);
      }
    }
    function Q(E, M, C, w) {
      const X = Ml(s, M)?.keepUnusedDataFor ?? w.keepUnusedDataFor;
      if (X === 1 / 0) return;
      const V = Math.max(0, Math.min(X, HE));
      if (!S(E)) {
        const Y = A[E];
        (Y && clearTimeout(Y),
          (A[E] = setTimeout(() => {
            if (!S(E)) {
              const N = f(C.getState(), E);
              (N?.endpointName &&
                C.dispatch(p(N.endpointName, N.originalArgs))?.abort(),
                C.dispatch(m({ queryCacheKey: E })));
            }
            delete A[E];
          }, V * 1e3)));
      }
    }
    return T;
  },
  kp = new Error("Promise never resolved before cacheEntryRemoved."),
  QE = ({
    api: a,
    reducerPath: u,
    context: c,
    queryThunk: s,
    mutationThunk: o,
    internalState: f,
    selectors: { selectQueryEntry: h, selectApiState: p },
  }) => {
    const y = af(s),
      m = af(o),
      b = da(s, o),
      v = {},
      {
        removeQueryResult: _,
        removeMutationResult: S,
        cacheEntriesUpserted: A,
      } = a.internalActions;
    function z(C, w, U) {
      const X = v[C];
      X?.valueResolved &&
        (X.valueResolved({ data: w, meta: U }), delete X.valueResolved);
    }
    function T(C) {
      const w = v[C];
      w && (delete v[C], w.cacheEntryRemoved());
    }
    function j(C) {
      const { arg: w, requestId: U } = C.meta,
        { endpointName: X, originalArgs: V } = w;
      return [X, V, U];
    }
    const Q = (C, w, U) => {
      const X = E(C);
      function V(Y, N, H, K) {
        const W = h(U, N),
          ue = h(w.getState(), N);
        !W && ue && M(Y, K, N, w, H);
      }
      if (s.pending.match(C)) {
        const [Y, N, H] = j(C);
        V(Y, X, H, N);
      } else if (A.match(C))
        for (const { queryDescription: Y, value: N } of C.payload) {
          const { endpointName: H, originalArgs: K, queryCacheKey: W } = Y;
          (V(H, W, C.meta.requestId, K), z(W, N, {}));
        }
      else if (o.pending.match(C)) {
        if (w.getState()[u].mutations[X]) {
          const [N, H, K] = j(C);
          M(N, H, X, w, K);
        }
      } else if (b(C)) z(X, C.payload, C.meta.baseQueryMeta);
      else if (_.match(C) || S.match(C)) T(X);
      else if (a.util.resetApiState.match(C))
        for (const Y of Object.keys(v)) T(Y);
    };
    function E(C) {
      return y(C)
        ? C.meta.arg.queryCacheKey
        : m(C)
          ? (C.meta.arg.fixedCacheKey ?? C.meta.requestId)
          : _.match(C)
            ? C.payload.queryCacheKey
            : S.match(C)
              ? Ku(C.payload)
              : "";
    }
    function M(C, w, U, X, V) {
      const Y = Ml(c, C),
        N = Y?.onCacheEntryAdded;
      if (!N) return;
      const H = {},
        K = new Promise((ne) => {
          H.cacheEntryRemoved = ne;
        }),
        W = Promise.race([
          new Promise((ne) => {
            H.valueResolved = ne;
          }),
          K.then(() => {
            throw kp;
          }),
        ]);
      (W.catch(() => {}), (v[U] = H));
      const ue = a.endpoints[C].select(Ir(Y) ? w : U),
        L = X.dispatch((ne, ie, x) => x),
        P = {
          ...X,
          getCacheEntry: () => ue(X.getState()),
          requestId: V,
          extra: L,
          updateCachedData: Ir(Y)
            ? (ne) => X.dispatch(a.util.updateQueryData(C, w, ne))
            : void 0,
          cacheDataLoaded: W,
          cacheEntryRemoved: K,
        },
        ee = N(w, P);
      Promise.resolve(ee).catch((ne) => {
        if (ne !== kp) throw ne;
      });
    }
    return Q;
  },
  BE =
    ({ api: a, context: { apiUid: u }, reducerPath: c }) =>
    (s, o) => {
      a.util.resetApiState.match(s) &&
        o.dispatch(a.internalActions.middlewareRegistered(u));
    },
  YE = ({
    reducerPath: a,
    context: u,
    context: { endpointDefinitions: c },
    mutationThunk: s,
    queryThunk: o,
    api: f,
    assertTagType: h,
    refetchQuery: p,
    internalState: y,
  }) => {
    const { removeQueryResult: m } = f.internalActions,
      b = Nn(da(s), cc(s)),
      v = Nn(da(o, s), Cl(o, s));
    let _ = [],
      S = 0;
    const A = (j, Q) => {
      ((o.pending.match(j) || s.pending.match(j)) && S++,
        v(j) && (S = Math.max(0, S - 1)),
        b(j)
          ? T(Kg(j, "invalidatesTags", c, h), Q)
          : v(j)
            ? T([], Q)
            : f.util.invalidateTags.match(j) &&
              T(Yf(j.payload, void 0, void 0, void 0, void 0, h), Q));
    };
    function z() {
      return S > 0;
    }
    function T(j, Q) {
      const E = Q.getState(),
        M = E[a];
      if ((_.push(...j), M.config.invalidationBehavior === "delayed" && z()))
        return;
      const C = _;
      if (((_ = []), C.length === 0)) return;
      const w = f.util.selectInvalidatedBy(E, C);
      u.batch(() => {
        const U = Array.from(w.values());
        for (const { queryCacheKey: X } of U) {
          const V = M.queries[X],
            Y = Wr(y.currentSubscriptions, X, cf);
          V &&
            (Y.size === 0
              ? Q.dispatch(m({ queryCacheKey: X }))
              : V.status !== Dn && Q.dispatch(p(V)));
        }
      });
    }
    return A;
  },
  VE = ({
    reducerPath: a,
    queryThunk: u,
    api: c,
    refetchQuery: s,
    internalState: o,
  }) => {
    const { currentPolls: f, currentSubscriptions: h } = o,
      p = new Set();
    let y = null;
    const m = (T, j) => {
      ((c.internalActions.updateSubscriptionOptions.match(T) ||
        c.internalActions.unsubscribeQueryResult.match(T)) &&
        b(T.payload.queryCacheKey, j),
        (u.pending.match(T) || (u.rejected.match(T) && T.meta.condition)) &&
          b(T.meta.arg.queryCacheKey, j),
        (u.fulfilled.match(T) || (u.rejected.match(T) && !T.meta.condition)) &&
          v(T.meta.arg, j),
        c.util.resetApiState.match(T) &&
          (A(), y && (clearTimeout(y), (y = null)), p.clear()));
    };
    function b(T, j) {
      (p.add(T),
        y ||
          (y = setTimeout(() => {
            for (const Q of p) _({ queryCacheKey: Q }, j);
            (p.clear(), (y = null));
          }, 0)));
    }
    function v({ queryCacheKey: T }, j) {
      const Q = j.getState()[a],
        E = Q.queries[T],
        M = h.get(T);
      if (!E || E.status === Dn) return;
      const { lowestPollingInterval: C, skipPollingIfUnfocused: w } = z(M);
      if (!Number.isFinite(C)) return;
      const U = f.get(T);
      U?.timeout && (clearTimeout(U.timeout), (U.timeout = void 0));
      const X = Date.now() + C;
      f.set(T, {
        nextPollTimestamp: X,
        pollingInterval: C,
        timeout: setTimeout(() => {
          ((Q.config.focused || !w) && j.dispatch(s(E)),
            v({ queryCacheKey: T }, j));
        }, C),
      });
    }
    function _({ queryCacheKey: T }, j) {
      const E = j.getState()[a].queries[T],
        M = h.get(T);
      if (!E || E.status === Dn) return;
      const { lowestPollingInterval: C } = z(M);
      if (!Number.isFinite(C)) {
        S(T);
        return;
      }
      const w = f.get(T),
        U = Date.now() + C;
      (!w || U < w.nextPollTimestamp) && v({ queryCacheKey: T }, j);
    }
    function S(T) {
      const j = f.get(T);
      (j?.timeout && clearTimeout(j.timeout), f.delete(T));
    }
    function A() {
      for (const T of f.keys()) S(T);
    }
    function z(T = new Map()) {
      let j = !1,
        Q = Number.POSITIVE_INFINITY;
      for (const E of T.values())
        E.pollingInterval &&
          ((Q = Math.min(E.pollingInterval, Q)),
          (j = E.skipPollingIfUnfocused || j));
      return { lowestPollingInterval: Q, skipPollingIfUnfocused: j };
    }
    return m;
  },
  GE = ({ api: a, context: u, queryThunk: c, mutationThunk: s }) => {
    const o = Mf(c, s),
      f = Cl(c, s),
      h = da(c, s),
      p = {};
    return (m, b) => {
      if (o(m)) {
        const {
            requestId: v,
            arg: { endpointName: _, originalArgs: S },
          } = m.meta,
          A = Ml(u, _),
          z = A?.onQueryStarted;
        if (z) {
          const T = {},
            j = new Promise((C, w) => {
              ((T.resolve = C), (T.reject = w));
            });
          (j.catch(() => {}), (p[v] = T));
          const Q = a.endpoints[_].select(Ir(A) ? S : v),
            E = b.dispatch((C, w, U) => U),
            M = {
              ...b,
              getCacheEntry: () => Q(b.getState()),
              requestId: v,
              extra: E,
              updateCachedData: Ir(A)
                ? (C) => b.dispatch(a.util.updateQueryData(_, S, C))
                : void 0,
              queryFulfilled: j,
            };
          z(S, M);
        }
      } else if (h(m)) {
        const { requestId: v, baseQueryMeta: _ } = m.meta;
        (p[v]?.resolve({ data: m.payload, meta: _ }), delete p[v]);
      } else if (f(m)) {
        const { requestId: v, rejectedWithValue: _, baseQueryMeta: S } = m.meta;
        (p[v]?.reject({
          error: m.payload ?? m.error,
          isUnhandledError: !_,
          meta: S,
        }),
          delete p[v]);
      }
    };
  },
  kE = ({
    reducerPath: a,
    context: u,
    api: c,
    refetchQuery: s,
    internalState: o,
  }) => {
    const { removeQueryResult: f } = c.internalActions,
      h = (y, m) => {
        (Qf.match(y) && p(m, "refetchOnFocus"),
          Bf.match(y) && p(m, "refetchOnReconnect"));
      };
    function p(y, m) {
      const b = y.getState()[a],
        v = b.queries,
        _ = o.currentSubscriptions;
      u.batch(() => {
        for (const S of _.keys()) {
          const A = v[S],
            z = _.get(S);
          if (!z || !A) continue;
          const T = [...z.values()];
          (T.some((Q) => Q[m] === !0) ||
            (T.every((Q) => Q[m] === void 0) && b.config[m])) &&
            (z.size === 0
              ? y.dispatch(f({ queryCacheKey: S }))
              : A.status !== Dn && y.dispatch(s(A)));
        }
      });
    }
    return h;
  };
function XE(a) {
  const {
      reducerPath: u,
      queryThunk: c,
      api: s,
      context: o,
      getInternalState: f,
    } = a,
    { apiUid: h } = o,
    p = { invalidateTags: $t(`${u}/invalidateTags`) },
    y = (_) => _.type.startsWith(`${u}/`),
    m = [BE, LE, YE, VE, QE, GE];
  return {
    middleware: (_) => {
      let S = !1;
      const A = f(_.dispatch),
        z = {
          ...a,
          internalState: A,
          refetchQuery: v,
          isThisApiSliceAction: y,
          mwApi: _,
        },
        T = m.map((E) => E(z)),
        j = qE(z),
        Q = kE(z);
      return (E) => (M) => {
        if (!_g(M)) return E(M);
        S || ((S = !0), _.dispatch(s.internalActions.middlewareRegistered(h)));
        const C = { ..._, next: E },
          w = _.getState(),
          [U, X] = j(M, C, w);
        let V;
        if (
          (U ? (V = E(M)) : (V = X),
          _.getState()[u] && (Q(M, C, w), y(M) || o.hasRehydrationInfo(M)))
        )
          for (const Y of T) Y(M, C, w);
        return V;
      };
    },
    actions: p,
  };
  function v(_) {
    return a.api.endpoints[_.endpointName].initiate(_.originalArgs, {
      subscribe: !1,
      forceRefetch: !0,
    });
  }
}
var Xp = Symbol(),
  Fg = ({ createSelector: a = Cf } = {}) => ({
    name: Xp,
    init(
      u,
      {
        baseQuery: c,
        tagTypes: s,
        reducerPath: o,
        serializeQueryArgs: f,
        keepUnusedDataFor: h,
        refetchOnMountOrArgChange: p,
        refetchOnFocus: y,
        refetchOnReconnect: m,
        invalidationBehavior: b,
        onSchemaFailure: v,
        catchSchemaFailure: _,
        skipSchemaValidation: S,
      },
      A,
    ) {
      i2();
      const z = (re) => re;
      Object.assign(u, {
        reducerPath: o,
        endpoints: {},
        internalActions: {
          onOnline: Bf,
          onOffline: Yg,
          onFocus: Qf,
          onFocusLost: Bg,
        },
        util: {},
      });
      const T = UE({
          serializeQueryArgs: f,
          reducerPath: o,
          createSelector: a,
        }),
        {
          selectInvalidatedBy: j,
          selectCachedArgsForQuery: Q,
          buildQuerySelector: E,
          buildInfiniteQuerySelector: M,
          buildMutationSelector: C,
        } = T;
      An(u.util, { selectInvalidatedBy: j, selectCachedArgsForQuery: Q });
      const {
          queryThunk: w,
          infiniteQueryThunk: U,
          mutationThunk: X,
          patchQueryData: V,
          updateQueryData: Y,
          upsertQueryData: N,
          prefetch: H,
          buildMatchThunkActions: K,
        } = DE({
          baseQuery: c,
          reducerPath: o,
          context: A,
          api: u,
          serializeQueryArgs: f,
          assertTagType: z,
          selectors: T,
          onSchemaFailure: v,
          catchSchemaFailure: _,
          skipSchemaValidation: S,
        }),
        { reducer: W, actions: ue } = jE({
          context: A,
          queryThunk: w,
          mutationThunk: X,
          serializeQueryArgs: f,
          reducerPath: o,
          assertTagType: z,
          config: {
            refetchOnFocus: y,
            refetchOnReconnect: m,
            refetchOnMountOrArgChange: p,
            keepUnusedDataFor: h,
            reducerPath: o,
            invalidationBehavior: b,
          },
        });
      (An(u.util, {
        patchQueryData: V,
        updateQueryData: Y,
        upsertQueryData: N,
        prefetch: H,
        resetApiState: ue.resetApiState,
        upsertQueryEntries: ue.cacheEntriesUpserted,
      }),
        An(u.internalActions, ue));
      const L = new WeakMap(),
        P = (re) =>
          Wr(L, re, () => ({
            currentSubscriptions: new Map(),
            currentPolls: new Map(),
            runningQueries: new Map(),
            runningMutations: new Map(),
          })),
        {
          buildInitiateQuery: ee,
          buildInitiateInfiniteQuery: ne,
          buildInitiateMutation: ie,
          getRunningMutationThunk: x,
          getRunningMutationsThunk: $,
          getRunningQueriesThunk: le,
          getRunningQueryThunk: ae,
        } = NE({
          queryThunk: w,
          mutationThunk: X,
          infiniteQueryThunk: U,
          api: u,
          serializeQueryArgs: f,
          context: A,
          getInternalState: P,
        });
      An(u.util, {
        getRunningMutationThunk: x,
        getRunningMutationsThunk: $,
        getRunningQueryThunk: ae,
        getRunningQueriesThunk: le,
      });
      const { middleware: ce, actions: oe } = XE({
        reducerPath: o,
        context: A,
        queryThunk: w,
        mutationThunk: X,
        infiniteQueryThunk: U,
        api: u,
        assertTagType: z,
        selectors: T,
        getRunningQueryThunk: ae,
        getInternalState: P,
      });
      return (
        An(u.util, oe),
        An(u, { reducer: W, middleware: ce }),
        {
          name: Xp,
          injectEndpoint(re, be) {
            const de = u,
              ve = (de.endpoints[re] ??= {});
            (fc(be) &&
              An(
                ve,
                { name: re, select: E(re, be), initiate: ee(re, be) },
                K(w, re),
              ),
              ME(be) &&
                An(ve, { name: re, select: C(), initiate: ie(re) }, K(X, re)),
              dc(be) &&
                An(
                  ve,
                  { name: re, select: M(re, be), initiate: ne(re, be) },
                  K(w, re),
                ));
          },
        }
      );
    },
  });
Fg();
function Nr(a) {
  return a.replace(a[0], a[0].toUpperCase());
}
var ZE = "query",
  KE = "mutation",
  JE = "infinitequery";
function $E(a) {
  return a.type === ZE;
}
function FE(a) {
  return a.type === KE;
}
function Pg(a) {
  return a.type === JE;
}
function Nu(a, ...u) {
  return Object.assign(a, ...u);
}
var ko = Symbol();
function Xo(a) {
  const u = R.useRef(a),
    c = R.useMemo(() => Hf(u.current, a), [a]);
  return (
    R.useEffect(() => {
      u.current !== c && (u.current = c);
    }, [c]),
    c
  );
}
function Al(a) {
  const u = R.useRef(a);
  return (
    R.useEffect(() => {
      qu(u.current, a) || (u.current = a);
    }, [a]),
    qu(u.current, a) ? u.current : a
  );
}
var PE = () =>
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  WE = PE(),
  IE = () => typeof navigator < "u" && navigator.product === "ReactNative",
  ex = IE(),
  tx = () => (WE || ex ? R.useLayoutEffect : R.useEffect),
  nx = tx(),
  Zp = (a) =>
    a.isUninitialized
      ? {
          ...a,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: a.data === void 0,
          status: Lg.pending,
        }
      : a;
function Zo(a, ...u) {
  const c = {};
  return (
    u.forEach((s) => {
      c[s] = a[s];
    }),
    c
  );
}
var Ko = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function ax({
  api: a,
  moduleOptions: {
    batch: u,
    hooks: { useDispatch: c, useSelector: s, useStore: o },
    unstable__sideEffectsInRender: f,
    createSelector: h,
  },
  serializeQueryArgs: p,
  context: y,
}) {
  const m = f ? (w) => w() : R.useEffect,
    b = (w) => w.current?.unsubscribe?.(),
    v = y.endpointDefinitions;
  return {
    buildQueryHooks: E,
    buildInfiniteQueryHooks: M,
    buildMutationHook: C,
    usePrefetch: A,
  };
  function _(w, U, X) {
    if (U?.endpointName && w.isUninitialized) {
      const { endpointName: W } = U,
        ue = v[W];
      X !== Jt &&
        p({
          queryArgs: U.originalArgs,
          endpointDefinition: ue,
          endpointName: W,
        }) === p({ queryArgs: X, endpointDefinition: ue, endpointName: W }) &&
        (U = void 0);
    }
    let V = w.isSuccess ? w.data : U?.data;
    V === void 0 && (V = w.data);
    const Y = V !== void 0,
      N = w.isLoading,
      H = (!U || U.isLoading || U.isUninitialized) && !Y && N,
      K = w.isSuccess || (Y && ((N && !U?.isError) || w.isUninitialized));
    return {
      ...w,
      data: V,
      currentData: w.data,
      isFetching: N,
      isLoading: H,
      isSuccess: K,
    };
  }
  function S(w, U, X) {
    if (U?.endpointName && w.isUninitialized) {
      const { endpointName: W } = U,
        ue = v[W];
      X !== Jt &&
        p({
          queryArgs: U.originalArgs,
          endpointDefinition: ue,
          endpointName: W,
        }) === p({ queryArgs: X, endpointDefinition: ue, endpointName: W }) &&
        (U = void 0);
    }
    let V = w.isSuccess ? w.data : U?.data;
    V === void 0 && (V = w.data);
    const Y = V !== void 0,
      N = w.isLoading,
      H = (!U || U.isLoading || U.isUninitialized) && !Y && N,
      K = w.isSuccess || (N && Y);
    return {
      ...w,
      data: V,
      currentData: w.data,
      isFetching: N,
      isLoading: H,
      isSuccess: K,
    };
  }
  function A(w, U) {
    const X = c(),
      V = Al(U);
    return R.useCallback(
      (Y, N) => X(a.util.prefetch(w, Y, { ...V, ...N })),
      [w, X, V],
    );
  }
  function z(
    w,
    U,
    {
      refetchOnReconnect: X,
      refetchOnFocus: V,
      refetchOnMountOrArgChange: Y,
      skip: N = !1,
      pollingInterval: H = 0,
      skipPollingIfUnfocused: K = !1,
      ...W
    } = {},
  ) {
    const { initiate: ue } = a.endpoints[w],
      L = c(),
      P = R.useRef(void 0);
    if (!P.current) {
      const de = L(a.internalActions.internal_getRTKQSubscriptions());
      P.current = de;
    }
    const ee = Xo(N ? Jt : U),
      ne = Al({
        refetchOnReconnect: X,
        refetchOnFocus: V,
        pollingInterval: H,
        skipPollingIfUnfocused: K,
      }),
      ie = W.initialPageParam,
      x = Al(ie),
      $ = W.refetchCachedPages,
      le = Al($),
      ae = R.useRef(void 0);
    let { queryCacheKey: ce, requestId: oe } = ae.current || {},
      re = !1;
    ce && oe && (re = P.current.isRequestSubscribed(ce, oe));
    const be = !re && ae.current !== void 0;
    return (
      m(() => {
        be && (ae.current = void 0);
      }, [be]),
      m(() => {
        const de = ae.current;
        if (ee === Jt) {
          (de?.unsubscribe(), (ae.current = void 0));
          return;
        }
        const ve = ae.current?.subscriptionOptions;
        if (!de || de.arg !== ee) {
          de?.unsubscribe();
          const st = L(
            ue(ee, {
              subscriptionOptions: ne,
              forceRefetch: Y,
              ...(Pg(v[w])
                ? { initialPageParam: x, refetchCachedPages: le }
                : {}),
            }),
          );
          ae.current = st;
        } else ne !== ve && de.updateSubscriptionOptions(ne);
      }, [L, ue, Y, ee, ne, be, x, le, w]),
      [ae, L, ue, ne]
    );
  }
  function T(w, U) {
    return (V, { skip: Y = !1, selectFromResult: N } = {}) => {
      const { select: H } = a.endpoints[w],
        K = Xo(Y ? Jt : V),
        W = R.useRef(void 0),
        ue = R.useMemo(
          () =>
            h([H(K), (ie, x) => x, (ie) => K], U, {
              memoizeOptions: { resultEqualityCheck: qu },
            }),
          [H, K],
        ),
        L = R.useMemo(
          () =>
            N
              ? h([ue], N, {
                  devModeChecks: { identityFunctionCheck: "never" },
                })
              : ue,
          [ue, N],
        ),
        P = s((ie) => L(ie, W.current), qu),
        ee = o(),
        ne = ue(ee.getState(), W.current);
      return (
        nx(() => {
          W.current = ne;
        }, [ne]),
        P
      );
    };
  }
  function j(w) {
    R.useEffect(
      () => () => {
        (b(w), (w.current = void 0));
      },
      [w],
    );
  }
  function Q(w) {
    if (!w.current) throw new Error(Gt(38));
    return w.current.refetch();
  }
  function E(w) {
    const U = (Y, N = {}) => {
        const [H] = z(w, Y, N);
        return (j(H), R.useMemo(() => ({ refetch: () => Q(H) }), [H]));
      },
      X = ({
        refetchOnReconnect: Y,
        refetchOnFocus: N,
        pollingInterval: H = 0,
        skipPollingIfUnfocused: K = !1,
      } = {}) => {
        const { initiate: W } = a.endpoints[w],
          ue = c(),
          [L, P] = R.useState(ko),
          ee = R.useRef(void 0),
          ne = Al({
            refetchOnReconnect: Y,
            refetchOnFocus: N,
            pollingInterval: H,
            skipPollingIfUnfocused: K,
          });
        m(() => {
          const le = ee.current?.subscriptionOptions;
          ne !== le && ee.current?.updateSubscriptionOptions(ne);
        }, [ne]);
        const ie = R.useRef(ne);
        m(() => {
          ie.current = ne;
        }, [ne]);
        const x = R.useCallback(
            function (le, ae = !1) {
              let ce;
              return (
                u(() => {
                  (b(ee),
                    (ee.current = ce =
                      ue(
                        W(le, {
                          subscriptionOptions: ie.current,
                          forceRefetch: !ae,
                        }),
                      )),
                    P(le));
                }),
                ce
              );
            },
            [ue, W],
          ),
          $ = R.useCallback(() => {
            ee.current?.queryCacheKey &&
              ue(
                a.internalActions.removeQueryResult({
                  queryCacheKey: ee.current?.queryCacheKey,
                }),
              );
          }, [ue]);
        return (
          R.useEffect(
            () => () => {
              b(ee);
            },
            [],
          ),
          R.useEffect(() => {
            L !== ko && !ee.current && x(L, !0);
          }, [L, x]),
          R.useMemo(() => [x, L, { reset: $ }], [x, L, $])
        );
      },
      V = T(w, _);
    return {
      useQueryState: V,
      useQuerySubscription: U,
      useLazyQuerySubscription: X,
      useLazyQuery(Y) {
        const [N, H, { reset: K }] = X(Y),
          W = V(H, { ...Y, skip: H === ko }),
          ue = R.useMemo(() => ({ lastArg: H }), [H]);
        return R.useMemo(() => [N, { ...W, reset: K }, ue], [N, W, K, ue]);
      },
      useQuery(Y, N) {
        const H = U(Y, N),
          K = V(Y, {
            selectFromResult: Y === Jt || N?.skip ? void 0 : Zp,
            ...N,
          }),
          W = Zo(K, ...Ko);
        return (R.useDebugValue(W), R.useMemo(() => ({ ...K, ...H }), [K, H]));
      },
    };
  }
  function M(w) {
    const U = (V, Y = {}) => {
        const [N, H, K, W] = z(w, V, Y),
          ue = R.useRef(W);
        m(() => {
          ue.current = W;
        }, [W]);
        const L = Y.refetchCachedPages,
          P = Al(L),
          ee = R.useCallback(
            function (x, $) {
              let le;
              return (
                u(() => {
                  (b(N),
                    (N.current = le =
                      H(
                        K(x, { subscriptionOptions: ue.current, direction: $ }),
                      )));
                }),
                le
              );
            },
            [N, H, K],
          );
        j(N);
        const ne = Xo(Y.skip ? Jt : V),
          ie = R.useCallback(
            (x) => {
              if (!N.current) throw new Error(Gt(38));
              const $ = { refetchCachedPages: x?.refetchCachedPages ?? P };
              return N.current.refetch($);
            },
            [N, P],
          );
        return R.useMemo(
          () => ({
            trigger: ee,
            refetch: ie,
            fetchNextPage: () => ee(ne, "forward"),
            fetchPreviousPage: () => ee(ne, "backward"),
          }),
          [ie, ee, ne],
        );
      },
      X = T(w, S);
    return {
      useInfiniteQueryState: X,
      useInfiniteQuerySubscription: U,
      useInfiniteQuery(V, Y) {
        const { refetch: N, fetchNextPage: H, fetchPreviousPage: K } = U(V, Y),
          W = X(V, {
            selectFromResult: V === Jt || Y?.skip ? void 0 : Zp,
            ...Y,
          }),
          ue = Zo(W, ...Ko, "hasNextPage", "hasPreviousPage");
        return (
          R.useDebugValue(ue),
          R.useMemo(
            () => ({
              ...W,
              fetchNextPage: H,
              fetchPreviousPage: K,
              refetch: N,
            }),
            [W, H, K, N],
          )
        );
      },
    };
  }
  function C(w) {
    return ({ selectFromResult: U, fixedCacheKey: X } = {}) => {
      const { select: V, initiate: Y } = a.endpoints[w],
        N = c(),
        [H, K] = R.useState();
      R.useEffect(
        () => () => {
          H?.arg.fixedCacheKey || H?.reset();
        },
        [H],
      );
      const W = R.useCallback(
          function (le) {
            const ae = N(Y(le, { fixedCacheKey: X }));
            return (K(ae), ae);
          },
          [N, Y, X],
        ),
        { requestId: ue } = H || {},
        L = R.useMemo(
          () => V({ fixedCacheKey: X, requestId: H?.requestId }),
          [X, H, V],
        ),
        P = R.useMemo(() => (U ? h([L], U) : L), [U, L]),
        ee = s(P, qu),
        ne = X == null ? H?.arg.originalArgs : void 0,
        ie = R.useCallback(() => {
          u(() => {
            (H && K(void 0),
              X &&
                N(
                  a.internalActions.removeMutationResult({
                    requestId: ue,
                    fixedCacheKey: X,
                  }),
                ));
          });
        }, [N, X, H, ue]),
        x = Zo(ee, ...Ko, "endpointName");
      R.useDebugValue(x);
      const $ = R.useMemo(
        () => ({ ...ee, originalArgs: ne, reset: ie }),
        [ee, ne, ie],
      );
      return R.useMemo(() => [W, $], [W, $]);
    };
  }
}
var lx = Symbol(),
  ux = ({
    batch: a = QS,
    hooks: u = { useDispatch: xg, useSelector: qa, useStore: Eg },
    createSelector: c = Cf,
    unstable__sideEffectsInRender: s = !1,
    ...o
  } = {}) => ({
    name: lx,
    init(f, { serializeQueryArgs: h }, p) {
      const y = f,
        {
          buildQueryHooks: m,
          buildInfiniteQueryHooks: b,
          buildMutationHook: v,
          usePrefetch: _,
        } = ax({
          api: f,
          moduleOptions: {
            batch: a,
            hooks: u,
            unstable__sideEffectsInRender: s,
            createSelector: c,
          },
          serializeQueryArgs: h,
          context: p,
        });
      return (
        Nu(y, { usePrefetch: _ }),
        Nu(p, { batch: a }),
        {
          injectEndpoint(S, A) {
            if ($E(A)) {
              const {
                useQuery: z,
                useLazyQuery: T,
                useLazyQuerySubscription: j,
                useQueryState: Q,
                useQuerySubscription: E,
              } = m(S);
              (Nu(y.endpoints[S], {
                useQuery: z,
                useLazyQuery: T,
                useLazyQuerySubscription: j,
                useQueryState: Q,
                useQuerySubscription: E,
              }),
                (f[`use${Nr(S)}Query`] = z),
                (f[`useLazy${Nr(S)}Query`] = T));
            }
            if (FE(A)) {
              const z = v(S);
              (Nu(y.endpoints[S], { useMutation: z }),
                (f[`use${Nr(S)}Mutation`] = z));
            } else if (Pg(A)) {
              const {
                useInfiniteQuery: z,
                useInfiniteQuerySubscription: T,
                useInfiniteQueryState: j,
              } = b(S);
              (Nu(y.endpoints[S], {
                useInfiniteQuery: z,
                useInfiniteQuerySubscription: T,
                useInfiniteQueryState: j,
              }),
                (f[`use${Nr(S)}InfiniteQuery`] = z));
            }
          },
        }
      );
    },
  }),
  ix = $g(Fg(), ux());
const Ju = ix({
    reducerPath: "api",
    baseQuery: AE({
      baseUrl: "https://abd0selim.alwaysdata.net/api",
      prepareHeaders: (a, { getState: u }) => {
        const c = u().auth.token || localStorage.getItem("token");
        return (c && a.set("authorization", `Bearer ${c}`), a);
      },
    }),
    tagTypes: ["User", "Product", "Cart", "Category"],
    endpoints: () => ({}),
  }),
  rx = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  },
  Wg = ca({
    name: "auth",
    initialState: rx,
    reducers: {
      setCredentials: (a, u) => {
        const { user: c, token: s } = u.payload;
        ((a.user = c),
          (a.token = s),
          (a.isAuthenticated = !0),
          localStorage.setItem("user", JSON.stringify(c)),
          localStorage.setItem("token", s));
      },
      logout: (a) => {
        ((a.user = null),
          (a.token = null),
          (a.isAuthenticated = !1),
          localStorage.removeItem("user"),
          localStorage.removeItem("token"),
          localStorage.removeItem("cart"));
      },
    },
  }),
  { setCredentials: E3, logout: x3 } = Wg.actions,
  cx = Wg.reducer,
  sx = { darkMode: !1, searchTerm: "" },
  Ig = ca({
    name: "ui",
    initialState: sx,
    reducers: {
      toggleTheme: (a) => {
        a.darkMode = !a.darkMode;
      },
      setSearchTerm: (a, u) => {
        a.searchTerm = u.payload;
      },
    },
  }),
  { toggleTheme: Kp, setSearchTerm: ox } = Ig.actions,
  fx = Ig.reducer,
  dx = Tf({ [Ju.reducerPath]: Ju.reducer, auth: cx, ui: fx }),
  hx = { key: "root", storage: hE, whitelist: ["auth", "ui"] },
  mx = nE(hx, dx),
  e0 = R2({
    reducer: mx,
    middleware: (a) =>
      a({
        serializableCheck: { ignoredActions: [Nf, sc, Df, jf, Uf, qf] },
      }).concat(Ju.middleware),
    devTools: !1,
  });
cE(e0);
let yx = { data: "" },
  px = (a) => {
    if (typeof window == "object") {
      let u =
        (a ? a.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (u.nonce = window.__nonce__),
        u.parentNode || (a || document.head).appendChild(u),
        u.firstChild
      );
    }
    return a || yx;
  },
  gx = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  vx = /\/\*[^]*?\*\/|  +/g,
  Jp = /\n+/g,
  sa = (a, u) => {
    let c = "",
      s = "",
      o = "";
    for (let f in a) {
      let h = a[f];
      f[0] == "@"
        ? f[1] == "i"
          ? (c = f + " " + h + ";")
          : (s +=
              f[1] == "f"
                ? sa(h, f)
                : f + "{" + sa(h, f[1] == "k" ? "" : u) + "}")
        : typeof h == "object"
          ? (s += sa(
              h,
              u
                ? u.replace(/([^,])+/g, (p) =>
                    f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (y) =>
                      /&/.test(y) ? y.replace(/&/g, p) : p ? p + " " + y : y,
                    ),
                  )
                : f,
            ))
          : h != null &&
            ((f = /^--/.test(f) ? f : f.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (o += sa.p ? sa.p(f, h) : f + ":" + h + ";"));
    }
    return c + (u && o ? u + "{" + o + "}" : o) + s;
  },
  On = {},
  t0 = (a) => {
    if (typeof a == "object") {
      let u = "";
      for (let c in a) u += c + t0(a[c]);
      return u;
    }
    return a;
  },
  bx = (a, u, c, s, o) => {
    let f = t0(a),
      h =
        On[f] ||
        (On[f] = ((y) => {
          let m = 0,
            b = 11;
          for (; m < y.length; ) b = (101 * b + y.charCodeAt(m++)) >>> 0;
          return "go" + b;
        })(f));
    if (!On[h]) {
      let y =
        f !== a
          ? a
          : ((m) => {
              let b,
                v,
                _ = [{}];
              for (; (b = gx.exec(m.replace(vx, ""))); )
                b[4]
                  ? _.shift()
                  : b[3]
                    ? ((v = b[3].replace(Jp, " ").trim()),
                      _.unshift((_[0][v] = _[0][v] || {})))
                    : (_[0][b[1]] = b[2].replace(Jp, " ").trim());
              return _[0];
            })(a);
      On[h] = sa(o ? { ["@keyframes " + h]: y } : y, c ? "" : "." + h);
    }
    let p = c && On.g ? On.g : null;
    return (
      c && (On.g = On[h]),
      ((y, m, b, v) => {
        v
          ? (m.data = m.data.replace(v, y))
          : m.data.indexOf(y) === -1 && (m.data = b ? y + m.data : m.data + y);
      })(On[h], u, s, p),
      h
    );
  },
  Sx = (a, u, c) =>
    a.reduce((s, o, f) => {
      let h = u[f];
      if (h && h.call) {
        let p = h(c),
          y = (p && p.props && p.props.className) || (/^go/.test(p) && p);
        h = y
          ? "." + y
          : p && typeof p == "object"
            ? p.props
              ? ""
              : sa(p, "")
            : p === !1
              ? ""
              : p;
      }
      return s + o + (h ?? "");
    }, "");
function hc(a) {
  let u = this || {},
    c = a.call ? a(u.p) : a;
  return bx(
    c.unshift
      ? c.raw
        ? Sx(c, [].slice.call(arguments, 1), u.p)
        : c.reduce((s, o) => Object.assign(s, o && o.call ? o(u.p) : o), {})
      : c,
    px(u.target),
    u.g,
    u.o,
    u.k,
  );
}
let n0, ff, df;
hc.bind({ g: 1 });
let jn = hc.bind({ k: 1 });
function Ex(a, u, c, s) {
  ((sa.p = u), (n0 = a), (ff = c), (df = s));
}
function ha(a, u) {
  let c = this || {};
  return function () {
    let s = arguments;
    function o(f, h) {
      let p = Object.assign({}, f),
        y = p.className || o.className;
      ((c.p = Object.assign({ theme: ff && ff() }, p)),
        (c.o = / *go\d+/.test(y)),
        (p.className = hc.apply(c, s) + (y ? " " + y : "")));
      let m = a;
      return (
        a[0] && ((m = p.as || a), delete p.as),
        df && m[0] && df(p),
        n0(m, p)
      );
    }
    return o;
  };
}
var xx = (a) => typeof a == "function",
  ec = (a, u) => (xx(a) ? a(u) : a),
  _x = (() => {
    let a = 0;
    return () => (++a).toString();
  })(),
  a0 = (() => {
    let a;
    return () => {
      if (a === void 0 && typeof window < "u") {
        let u = matchMedia("(prefers-reduced-motion: reduce)");
        a = !u || u.matches;
      }
      return a;
    };
  })(),
  Tx = 20,
  Vf = "default",
  l0 = (a, u) => {
    let { toastLimit: c } = a.settings;
    switch (u.type) {
      case 0:
        return { ...a, toasts: [u.toast, ...a.toasts].slice(0, c) };
      case 1:
        return {
          ...a,
          toasts: a.toasts.map((h) =>
            h.id === u.toast.id ? { ...h, ...u.toast } : h,
          ),
        };
      case 2:
        let { toast: s } = u;
        return l0(a, {
          type: a.toasts.find((h) => h.id === s.id) ? 1 : 0,
          toast: s,
        });
      case 3:
        let { toastId: o } = u;
        return {
          ...a,
          toasts: a.toasts.map((h) =>
            h.id === o || o === void 0
              ? { ...h, dismissed: !0, visible: !1 }
              : h,
          ),
        };
      case 4:
        return u.toastId === void 0
          ? { ...a, toasts: [] }
          : { ...a, toasts: a.toasts.filter((h) => h.id !== u.toastId) };
      case 5:
        return { ...a, pausedAt: u.time };
      case 6:
        let f = u.time - (a.pausedAt || 0);
        return {
          ...a,
          pausedAt: void 0,
          toasts: a.toasts.map((h) => ({
            ...h,
            pauseDuration: h.pauseDuration + f,
          })),
        };
    }
  },
  Br = [],
  u0 = { toasts: [], pausedAt: void 0, settings: { toastLimit: Tx } },
  an = {},
  i0 = (a, u = Vf) => {
    ((an[u] = l0(an[u] || u0, a)),
      Br.forEach(([c, s]) => {
        c === u && s(an[u]);
      }));
  },
  r0 = (a) => Object.keys(an).forEach((u) => i0(a, u)),
  Rx = (a) => Object.keys(an).find((u) => an[u].toasts.some((c) => c.id === a)),
  mc =
    (a = Vf) =>
    (u) => {
      i0(u, a);
    },
  Ax = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Ox = (a = {}, u = Vf) => {
    let [c, s] = R.useState(an[u] || u0),
      o = R.useRef(an[u]);
    R.useEffect(
      () => (
        o.current !== an[u] && s(an[u]),
        Br.push([u, s]),
        () => {
          let h = Br.findIndex(([p]) => p === u);
          h > -1 && Br.splice(h, 1);
        }
      ),
      [u],
    );
    let f = c.toasts.map((h) => {
      var p, y, m;
      return {
        ...a,
        ...a[h.type],
        ...h,
        removeDelay:
          h.removeDelay ||
          ((p = a[h.type]) == null ? void 0 : p.removeDelay) ||
          a?.removeDelay,
        duration:
          h.duration ||
          ((y = a[h.type]) == null ? void 0 : y.duration) ||
          a?.duration ||
          Ax[h.type],
        style: {
          ...a.style,
          ...((m = a[h.type]) == null ? void 0 : m.style),
          ...h.style,
        },
      };
    });
    return { ...c, toasts: f };
  },
  Cx = (a, u = "blank", c) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: u,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: a,
    pauseDuration: 0,
    ...c,
    id: c?.id || _x(),
  }),
  ui = (a) => (u, c) => {
    let s = Cx(u, a, c);
    return (mc(s.toasterId || Rx(s.id))({ type: 2, toast: s }), s.id);
  },
  Je = (a, u) => ui("blank")(a, u);
Je.error = ui("error");
Je.success = ui("success");
Je.loading = ui("loading");
Je.custom = ui("custom");
Je.dismiss = (a, u) => {
  let c = { type: 3, toastId: a };
  u ? mc(u)(c) : r0(c);
};
Je.dismissAll = (a) => Je.dismiss(void 0, a);
Je.remove = (a, u) => {
  let c = { type: 4, toastId: a };
  u ? mc(u)(c) : r0(c);
};
Je.removeAll = (a) => Je.remove(void 0, a);
Je.promise = (a, u, c) => {
  let s = Je.loading(u.loading, { ...c, ...c?.loading });
  return (
    typeof a == "function" && (a = a()),
    a
      .then((o) => {
        let f = u.success ? ec(u.success, o) : void 0;
        return (
          f ? Je.success(f, { id: s, ...c, ...c?.success }) : Je.dismiss(s),
          o
        );
      })
      .catch((o) => {
        let f = u.error ? ec(u.error, o) : void 0;
        f ? Je.error(f, { id: s, ...c, ...c?.error }) : Je.dismiss(s);
      }),
    a
  );
};
var Mx = 1e3,
  wx = (a, u = "default") => {
    let { toasts: c, pausedAt: s } = Ox(a, u),
      o = R.useRef(new Map()).current,
      f = R.useCallback((v, _ = Mx) => {
        if (o.has(v)) return;
        let S = setTimeout(() => {
          (o.delete(v), h({ type: 4, toastId: v }));
        }, _);
        o.set(v, S);
      }, []);
    R.useEffect(() => {
      if (s) return;
      let v = Date.now(),
        _ = c.map((S) => {
          if (S.duration === 1 / 0) return;
          let A = (S.duration || 0) + S.pauseDuration - (v - S.createdAt);
          if (A < 0) {
            S.visible && Je.dismiss(S.id);
            return;
          }
          return setTimeout(() => Je.dismiss(S.id, u), A);
        });
      return () => {
        _.forEach((S) => S && clearTimeout(S));
      };
    }, [c, s, u]);
    let h = R.useCallback(mc(u), [u]),
      p = R.useCallback(() => {
        h({ type: 5, time: Date.now() });
      }, [h]),
      y = R.useCallback(
        (v, _) => {
          h({ type: 1, toast: { id: v, height: _ } });
        },
        [h],
      ),
      m = R.useCallback(() => {
        s && h({ type: 6, time: Date.now() });
      }, [s, h]),
      b = R.useCallback(
        (v, _) => {
          let {
              reverseOrder: S = !1,
              gutter: A = 8,
              defaultPosition: z,
            } = _ || {},
            T = c.filter(
              (E) => (E.position || z) === (v.position || z) && E.height,
            ),
            j = T.findIndex((E) => E.id === v.id),
            Q = T.filter((E, M) => M < j && E.visible).length;
          return T.filter((E) => E.visible)
            .slice(...(S ? [Q + 1] : [0, Q]))
            .reduce((E, M) => E + (M.height || 0) + A, 0);
        },
        [c],
      );
    return (
      R.useEffect(() => {
        c.forEach((v) => {
          if (v.dismissed) f(v.id, v.removeDelay);
          else {
            let _ = o.get(v.id);
            _ && (clearTimeout(_), o.delete(v.id));
          }
        });
      }, [c, f]),
      {
        toasts: c,
        handlers: {
          updateHeight: y,
          startPause: p,
          endPause: m,
          calculateOffset: b,
        },
      }
    );
  },
  zx = jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Nx = jn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Dx = jn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  jx = ha("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(a) => a.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(a) => a.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Dx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Ux = jn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  qx = ha("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(a) => a.secondary || "#e0e0e0"};
  border-right-color: ${(a) => a.primary || "#616161"};
  animation: ${Ux} 1s linear infinite;
`,
  Hx = jn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Lx = jn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Qx = ha("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(a) => a.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Hx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Lx} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(a) => a.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Bx = ha("div")`
  position: absolute;
`,
  Yx = ha("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Vx = jn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Gx = ha("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Vx} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  kx = ({ toast: a }) => {
    let { icon: u, type: c, iconTheme: s } = a;
    return u !== void 0
      ? typeof u == "string"
        ? R.createElement(Gx, null, u)
        : u
      : c === "blank"
        ? null
        : R.createElement(
            Yx,
            null,
            R.createElement(qx, { ...s }),
            c !== "loading" &&
              R.createElement(
                Bx,
                null,
                c === "error"
                  ? R.createElement(jx, { ...s })
                  : R.createElement(Qx, { ...s }),
              ),
          );
  },
  Xx = (a) => `
0% {transform: translate3d(0,${a * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Zx = (a) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${a * -150}%,-1px) scale(.6); opacity:0;}
`,
  Kx = "0%{opacity:0;} 100%{opacity:1;}",
  Jx = "0%{opacity:1;} 100%{opacity:0;}",
  $x = ha("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Fx = ha("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  Px = (a, u) => {
    let c = a.includes("top") ? 1 : -1,
      [s, o] = a0() ? [Kx, Jx] : [Xx(c), Zx(c)];
    return {
      animation: u
        ? `${jn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${jn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Wx = R.memo(({ toast: a, position: u, style: c, children: s }) => {
    let o = a.height
        ? Px(a.position || u || "top-center", a.visible)
        : { opacity: 0 },
      f = R.createElement(kx, { toast: a }),
      h = R.createElement(Fx, { ...a.ariaProps }, ec(a.message, a));
    return R.createElement(
      $x,
      { className: a.className, style: { ...o, ...c, ...a.style } },
      typeof s == "function"
        ? s({ icon: f, message: h })
        : R.createElement(R.Fragment, null, f, h),
    );
  });
Ex(R.createElement);
var Ix = ({
    id: a,
    className: u,
    style: c,
    onHeightUpdate: s,
    children: o,
  }) => {
    let f = R.useCallback(
      (h) => {
        if (h) {
          let p = () => {
            let y = h.getBoundingClientRect().height;
            s(a, y);
          };
          (p(),
            new MutationObserver(p).observe(h, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [a, s],
    );
    return R.createElement("div", { ref: f, className: u, style: c }, o);
  },
  e_ = (a, u) => {
    let c = a.includes("top"),
      s = c ? { top: 0 } : { bottom: 0 },
      o = a.includes("center")
        ? { justifyContent: "center" }
        : a.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: a0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${u * (c ? 1 : -1)}px)`,
      ...s,
      ...o,
    };
  },
  t_ = hc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Dr = 16,
  n_ = ({
    reverseOrder: a,
    position: u = "top-center",
    toastOptions: c,
    gutter: s,
    children: o,
    toasterId: f,
    containerStyle: h,
    containerClassName: p,
  }) => {
    let { toasts: y, handlers: m } = wx(c, f);
    return R.createElement(
      "div",
      {
        "data-rht-toaster": f || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Dr,
          left: Dr,
          right: Dr,
          bottom: Dr,
          pointerEvents: "none",
          ...h,
        },
        className: p,
        onMouseEnter: m.startPause,
        onMouseLeave: m.endPause,
      },
      y.map((b) => {
        let v = b.position || u,
          _ = m.calculateOffset(b, {
            reverseOrder: a,
            gutter: s,
            defaultPosition: u,
          }),
          S = e_(v, _);
        return R.createElement(
          Ix,
          {
            id: b.id,
            key: b.id,
            onHeightUpdate: m.updateHeight,
            className: b.visible ? t_ : "",
            style: S,
          },
          b.type === "custom"
            ? ec(b.message, b)
            : o
              ? o(b)
              : R.createElement(Wx, { toast: b, position: v }),
        );
      }),
    );
  },
  Jo = Je;
const a_ = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  l_ = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, c, s) =>
      s ? s.toUpperCase() : c.toLowerCase(),
    ),
  $p = (a) => {
    const u = l_(a);
    return u.charAt(0).toUpperCase() + u.slice(1);
  },
  c0 = (...a) =>
    a
      .filter((u, c, s) => !!u && u.trim() !== "" && s.indexOf(u) === c)
      .join(" ")
      .trim(),
  u_ = (a) => {
    for (const u in a)
      if (u.startsWith("aria-") || u === "role" || u === "title") return !0;
  };
var i_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const r_ = R.forwardRef(
  (
    {
      color: a = "currentColor",
      size: u = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: s,
      className: o = "",
      children: f,
      iconNode: h,
      ...p
    },
    y,
  ) =>
    R.createElement(
      "svg",
      {
        ref: y,
        ...i_,
        width: u,
        height: u,
        stroke: a,
        strokeWidth: s ? (Number(c) * 24) / Number(u) : c,
        className: c0("lucide", o),
        ...(!f && !u_(p) && { "aria-hidden": "true" }),
        ...p,
      },
      [
        ...h.map(([m, b]) => R.createElement(m, b)),
        ...(Array.isArray(f) ? f : [f]),
      ],
    ),
);
const We = (a, u) => {
  const c = R.forwardRef(({ className: s, ...o }, f) =>
    R.createElement(r_, {
      ref: f,
      iconNode: u,
      className: c0(`lucide-${a_($p(a))}`, `lucide-${a}`, s),
      ...o,
    }),
  );
  return ((c.displayName = $p(a)), c);
};
const c_ = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  s_ = We("facebook", c_);
const o_ = [
    [
      "path",
      {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi",
      },
    ],
  ],
  f_ = We("headphones", o_);
const d_ = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  h_ = We("instagram", d_);
const m_ = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  s0 = We("loader-circle", m_);
const y_ = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  p_ = We("mail", y_);
const g_ = [
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 18h16", key: "19g7jn" }],
    ["path", { d: "M4 6h16", key: "1o0s65" }],
  ],
  v_ = We("menu", g_);
const b_ = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  S_ = We("moon", b_);
const E_ = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  x_ = We("phone", E_);
const __ = [
    [
      "path",
      {
        d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "14sxne",
      },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    [
      "path",
      {
        d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
        key: "1hlbsb",
      },
    ],
    ["path", { d: "M16 16h5v5", key: "ccwih5" }],
  ],
  Fp = We("refresh-ccw", __);
const T_ = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Pp = We("search", T_);
const R_ = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  A_ = We("shield-check", R_);
const O_ = [
    ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
    ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
    [
      "path",
      {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506",
      },
    ],
  ],
  hf = We("shopping-cart", O_);
const C_ = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Wp = We("star", C_);
const M_ = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  w_ = We("sun", M_);
const z_ = [
    [
      "path",
      {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53",
      },
    ],
    ["path", { d: "M15 18H9", key: "1lyqi6" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i",
      },
    ],
    ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
    ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ],
  N_ = We("truck", z_);
const D_ = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  j_ = We("twitter", D_);
const U_ = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  q_ = We("user", U_);
const H_ = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  L_ = We("x", H_),
  Q_ = Ju.injectEndpoints({
    endpoints: (a) => ({
      getCart: a.query({
        query: () => "/cart/get-user-cart",
        providesTags: ["Cart"],
      }),
      addToCart: a.mutation({
        query: ({ productId: u, quantity: c }) => ({
          url: "/cart/add-to-cart",
          method: "POST",
          body: { productId: u, quantity: c },
        }),
        invalidatesTags: ["Cart", "Product"],
      }),
      updateCartItem: a.mutation({
        query: ({ productId: u, quantity: c }) => ({
          url: `/cart/${u}`,
          method: "PATCH",
          body: { quantity: c },
        }),
        invalidatesTags: ["Cart", "Product"],
      }),
      removeFromCart: a.mutation({
        query: (u) => ({ url: `/cart/${u}`, method: "DELETE" }),
        invalidatesTags: ["Cart", "Product"],
      }),
      clearCart: a.mutation({
        query: () => ({ url: "/cart/clear-cart", method: "DELETE" }),
        invalidatesTags: ["Cart", "Product"],
      }),
      createOrder: a.mutation({
        query: (u) => ({ url: "/order/create-order", method: "POST", body: u }),
        invalidatesTags: ["Cart", "Product"],
      }),
    }),
  }),
  {
    useGetCartQuery: B_,
    useAddToCartMutation: Y_,
    useUpdateCartItemMutation: _3,
    useRemoveFromCartMutation: T3,
    useClearCartMutation: R3,
    useCreateOrderMutation: A3,
  } = Q_;
function V_(a, u) {
  const [c, s] = R.useState(a);
  return (
    R.useEffect(() => {
      const o = setTimeout(() => {
        s(a);
      }, u);
      return () => {
        clearTimeout(o);
      };
    }, [a, u]),
    c
  );
}
function G_() {
  const a = xg(),
    { isAuthenticated: u } = qa((_) => _.auth),
    { darkMode: c, searchTerm: s } = qa((_) => _.ui),
    [o, f] = R.useState(s),
    h = V_(o, 500),
    [p, y] = R.useState(!1),
    { data: m } = B_(void 0, { skip: !u }),
    v = (m?.data?.items || []).length;
  return (
    R.useEffect(() => {
      a(ox(h));
    }, [h, a]),
    q.jsxs("nav", {
      className:
        "fixed top-0 w-full z-50 bg-green-700 dark:bg-green-900 text-white shadow-md transition-colors duration-300",
      children: [
        q.jsx("div", {
          className: "w-full px-4 sm:px-6 lg:px-8",
          children: q.jsxs("div", {
            className: "flex justify-between items-center h-16",
            children: [
              q.jsx(He, {
                to: "/",
                "aria-label": "Rochetta Home",
                className:
                  "font-['Pacifico'] text-3xl tracking-wide text-white flex-shrink-0 hover:opacity-90 transition-opacity",
                children: "Rochetta",
              }),
              q.jsxs("div", {
                className:
                  "hidden md:flex flex-1 w-full mx-6 lg:mx-12 relative",
                children: [
                  q.jsx("label", {
                    htmlFor: "desktop-search",
                    className: "sr-only",
                    children: "Search products",
                  }),
                  q.jsx("input", {
                    id: "desktop-search",
                    type: "text",
                    value: o,
                    onChange: (_) => f(_.target.value),
                    placeholder: "Search medicine, medical products...",
                    className:
                      "w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white focus:ring-2 focus:ring-green-400 outline-none border-none transition-all shadow-inner",
                  }),
                  q.jsx(Pp, {
                    className: "absolute left-3 top-3 w-5 h-5 text-gray-400",
                    "aria-hidden": "true",
                  }),
                ],
              }),
              q.jsxs("div", {
                className: "hidden md:flex items-center gap-6",
                children: [
                  q.jsx(He, {
                    to: "/",
                    className:
                      "font-medium text-white hover:text-green-200 transition-colors",
                    children: "Home",
                  }),
                  q.jsxs(He, {
                    to: "/cart",
                    "aria-label": `View Cart, ${v} items`,
                    className:
                      "relative text-white hover:text-green-200 transition-colors",
                    children: [
                      q.jsx(hf, {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                      }),
                      v > 0 &&
                        q.jsx("span", {
                          className:
                            "absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-700",
                          children: v,
                        }),
                    ],
                  }),
                  q.jsx("button", {
                    "aria-label": `Switch to ${c ? "light" : "dark"} mode`,
                    onClick: () => a(Kp()),
                    className:
                      "p-2 rounded-lg text-white hover:bg-green-600 dark:hover:bg-green-800 transition-all",
                    children: c
                      ? q.jsx(w_, {
                          className: "w-5 h-5",
                          "aria-hidden": "true",
                        })
                      : q.jsx(S_, {
                          className: "w-5 h-5",
                          "aria-hidden": "true",
                        }),
                  }),
                  u
                    ? q.jsx(He, {
                        to: "/profile",
                        "aria-label": "User Profile",
                        className:
                          "text-white hover:text-green-200 transition-colors",
                        children: q.jsx(q_, {
                          className: "w-6 h-6",
                          "aria-hidden": "true",
                        }),
                      })
                    : q.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          q.jsx(He, {
                            to: "/login",
                            className:
                              "font-bold text-white hover:text-green-200 transition-colors",
                            children: "Login",
                          }),
                          q.jsx(He, {
                            to: "/signup",
                            className:
                              "font-bold bg-white text-green-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors shadow-sm",
                            children: "Signup",
                          }),
                        ],
                      }),
                ],
              }),
              q.jsxs("div", {
                className: "md:hidden flex items-center gap-4",
                children: [
                  q.jsxs(He, {
                    to: "/cart",
                    "aria-label": `View Cart, ${v} items`,
                    className: "relative text-white",
                    children: [
                      q.jsx(hf, {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                      }),
                      v > 0 &&
                        q.jsx("span", {
                          className:
                            "absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-green-700",
                          children: v,
                        }),
                    ],
                  }),
                  q.jsx("button", {
                    "aria-label": p ? "Close menu" : "Open menu",
                    onClick: () => y(!p),
                    className: "text-white",
                    "aria-expanded": p,
                    children: p
                      ? q.jsx(L_, {
                          className: "w-7 h-7",
                          "aria-hidden": "true",
                        })
                      : q.jsx(v_, {
                          className: "w-7 h-7",
                          "aria-hidden": "true",
                        }),
                  }),
                ],
              }),
            ],
          }),
        }),
        p &&
          q.jsxs("div", {
            className:
              "md:hidden bg-green-800 dark:bg-green-950 px-4 pt-2 pb-4 space-y-4 border-t border-green-600 dark:border-green-800 shadow-xl",
            children: [
              q.jsxs("div", {
                className: "relative",
                children: [
                  q.jsx("label", {
                    htmlFor: "mobile-search",
                    className: "sr-only",
                    children: "Search products",
                  }),
                  q.jsx("input", {
                    id: "mobile-search",
                    type: "text",
                    value: o,
                    onChange: (_) => f(_.target.value),
                    placeholder: "Search...",
                    className:
                      "w-full pl-10 pr-4 py-2.5 rounded-lg bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white outline-none",
                  }),
                  q.jsx(Pp, {
                    className: "absolute left-3 top-3 w-5 h-5 text-gray-400",
                    "aria-hidden": "true",
                  }),
                ],
              }),
              q.jsxs("div", {
                className: "flex flex-col gap-4 pt-2",
                children: [
                  q.jsx(He, {
                    to: "/",
                    className: "text-white font-medium text-lg",
                    onClick: () => y(!1),
                    children: "Home",
                  }),
                  q.jsx("button", {
                    onClick: () => {
                      (a(Kp()), y(!1));
                    },
                    className: "text-left text-green-200 font-medium text-lg",
                    children: "Toggle Theme",
                  }),
                  u
                    ? q.jsx(He, {
                        to: "/profile",
                        className: "text-white font-medium text-lg",
                        onClick: () => y(!1),
                        children: "Profile",
                      })
                    : q.jsxs(q.Fragment, {
                        children: [
                          q.jsx(He, {
                            to: "/login",
                            className: "text-white font-bold text-lg",
                            onClick: () => y(!1),
                            children: "Login",
                          }),
                          q.jsx(He, {
                            to: "/signup",
                            className:
                              "text-green-800 bg-white inline-block text-center py-2 rounded-lg font-bold text-lg",
                            onClick: () => y(!1),
                            children: "Signup",
                          }),
                        ],
                      }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
function k_() {
  return q.jsx("nav", {
    className:
      "fixed top-16 w-full z-40 bg-gray-50 dark:bg-[#1e1e1e] border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300",
    children: q.jsxs("div", {
      className:
        "w-full px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-3",
      children: [
        q.jsxs("div", {
          className:
            "flex flex-wrap justify-center md:justify-start gap-2 w-full",
          children: [
            q.jsx(He, {
              to: "/category/pain-relief",
              className:
                "px-4 py-1.5 rounded-md text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
              children: "Pain Relief",
            }),
            q.jsx(He, {
              to: "/category/cold-and-flu",
              className:
                "px-4 py-1.5 rounded-md text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
              children: "Cold and Flu",
            }),
            q.jsx(He, {
              to: "/category/diabetes-care",
              className:
                "px-4 py-1.5 rounded-md text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
              children: "Diabetes Care",
            }),
            q.jsx(He, {
              to: "/category/first-aid",
              className:
                "px-4 py-1.5 rounded-md text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
              children: "First Aid",
            }),
          ],
        }),
        q.jsx("div", {
          className:
            "bg-green-700 dark:bg-green-800 text-white px-5 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-sm w-full md:w-auto text-center border border-green-600",
          children: "Free Shipping Order By August",
        }),
      ],
    }),
  });
}
const X_ = "modulepreload",
  Z_ = function (a) {
    return "/" + a;
  },
  Ip = {},
  Un = function (u, c, s) {
    let o = Promise.resolve();
    if (c && c.length > 0) {
      let y = function (m) {
        return Promise.all(
          m.map((b) =>
            Promise.resolve(b).then(
              (v) => ({ status: "fulfilled", value: v }),
              (v) => ({ status: "rejected", reason: v }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const h = document.querySelector("meta[property=csp-nonce]"),
        p = h?.nonce || h?.getAttribute("nonce");
      o = y(
        c.map((m) => {
          if (((m = Z_(m)), m in Ip)) return;
          Ip[m] = !0;
          const b = m.endsWith(".css"),
            v = b ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${v}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = b ? "stylesheet" : X_),
            b || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = m),
            p && _.setAttribute("nonce", p),
            document.head.appendChild(_),
            b)
          )
            return new Promise((S, A) => {
              (_.addEventListener("load", S),
                _.addEventListener("error", () =>
                  A(new Error(`Unable to preload CSS for ${m}`)),
                ));
            });
        }),
      );
    }
    function f(h) {
      const p = new Event("vite:preloadError", { cancelable: !0 });
      if (((p.payload = h), window.dispatchEvent(p), !p.defaultPrevented))
        throw h;
    }
    return o.then((h) => {
      for (const p of h || []) p.status === "rejected" && f(p.reason);
      return u().catch(f);
    });
  };
function jr({ children: a }) {
  const { isAuthenticated: u } = qa((s) => s.auth),
    c = ln();
  return u ? a : q.jsx(Lb, { to: "/login", state: { from: c }, replace: !0 });
}
function K_() {
  return q.jsx("div", {
    className: "flex items-center justify-center min-h-[60vh] w-full",
    children: q.jsx(s0, { className: "w-12 h-12 animate-spin text-green-600" }),
  });
}
const J_ = Ju.injectEndpoints({
    endpoints: (a) => ({
      getProducts: a.query({
        query: ({
          limit: u = 10,
          page: c = 1,
          top_selling: s,
          categoryName: o,
          search: f,
        } = {}) => {
          const h = new URLSearchParams({ limit: u, page: c });
          return (
            s && h.append("top_selling", "true"),
            o && h.append("categoryName", o),
            f && h.append("name", f),
            `/products?${h.toString()}`
          );
        },
        providesTags: ["Product"],
      }),
      getProductById: a.query({
        query: (u) => `/products/${u}`,
        providesTags: (u, c, s) => [{ type: "Product", id: s }],
      }),
      getCategories: a.query({
        query: () => "/category",
        providesTags: ["Category"],
      }),
      addProduct: a.mutation({
        query: (u) => ({ url: "/products", method: "POST", body: u }),
        invalidatesTags: ["Product"],
      }),
      updateProduct: a.mutation({
        query: ({ id: u, data: c }) => ({
          url: `/products/${u}`,
          method: "PATCH",
          body: c,
        }),
        invalidatesTags: (u, c, { id: s }) => [
          { type: "Product", id: s },
          "Product",
        ],
      }),
      deleteProduct: a.mutation({
        query: (u) => ({ url: `/products/${u}`, method: "DELETE" }),
        invalidatesTags: ["Product"],
      }),
    }),
  }),
  {
    useGetProductsQuery: $_,
    useGetProductByIdQuery: O3,
    useGetCategoriesQuery: C3,
    useAddProductMutation: M3,
    useUpdateProductMutation: w3,
    useDeleteProductMutation: z3,
  } = J_;
function F_() {
  return q.jsx("footer", {
    className:
      "bg-[#084235] dark:bg-[#052820] text-white py-12 transition-colors duration-300 mt-auto w-full",
    children: q.jsxs("div", {
      className: "w-full px-4 sm:px-8 lg:px-12",
      children: [
        q.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left",
          children: [
            q.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                q.jsx("h4", {
                  className:
                    "font-['Pacifico'] text-3xl text-[#f4a460] mb-4 tracking-wide",
                  children: "Rochetta",
                }),
                q.jsx("p", {
                  className: "text-gray-300 text-sm leading-relaxed max-w-sm",
                  children:
                    "Your go-to pharmacy marketplace for fast, reliable, and affordable healthcare products.",
                }),
              ],
            }),
            q.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                q.jsx("h2", {
                  className:
                    "uppercase font-bold mb-4 tracking-wider text-gray-100 text-lg",
                  children: "Quick Links",
                }),
                q.jsxs("ul", {
                  className: "space-y-3",
                  children: [
                    q.jsx("li", {
                      children: q.jsx(He, {
                        to: "/",
                        className:
                          "text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium",
                        children: "Home",
                      }),
                    }),
                    q.jsx("li", {
                      children: q.jsx(He, {
                        to: "/cart",
                        className:
                          "text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium",
                        children: "Cart",
                      }),
                    }),
                    q.jsx("li", {
                      children: q.jsx(He, {
                        to: "/profile",
                        className:
                          "text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium",
                        children: "Profile",
                      }),
                    }),
                    q.jsx("li", {
                      children: q.jsx(He, {
                        to: "/login",
                        className:
                          "text-gray-300 hover:text-[#f4a460] hover:underline transition-colors font-medium",
                        children: "Login",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            q.jsxs("div", {
              className: "flex flex-col items-center md:items-start",
              children: [
                q.jsx("h2", {
                  className:
                    "uppercase font-bold mb-4 tracking-wider text-gray-100 text-lg",
                  children: "Contact Us",
                }),
                q.jsxs("div", {
                  className: "space-y-3 text-gray-300 text-sm w-full",
                  children: [
                    q.jsxs("div", {
                      className:
                        "flex items-center gap-3 justify-center md:justify-start",
                      children: [
                        q.jsx(p_, {
                          className: "w-5 h-5 text-[#f4a460]",
                          "aria-hidden": "true",
                        }),
                        q.jsx("span", { children: "support@rochetta.com" }),
                      ],
                    }),
                    q.jsxs("div", {
                      className:
                        "flex items-center gap-3 justify-center md:justify-start",
                      children: [
                        q.jsx(x_, {
                          className: "w-5 h-5 text-[#f4a460]",
                          "aria-hidden": "true",
                        }),
                        q.jsx("span", {
                          dir: "ltr",
                          children: "+20 100 123 4567",
                        }),
                      ],
                    }),
                  ],
                }),
                q.jsxs("div", {
                  className: "flex gap-5 mt-6",
                  children: [
                    q.jsx("a", {
                      href: "#",
                      "aria-label": "Visit our Facebook page",
                      className:
                        "text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110",
                      children: q.jsx(s_, {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                      }),
                    }),
                    q.jsx("a", {
                      href: "#",
                      "aria-label": "Visit our Twitter page",
                      className:
                        "text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110",
                      children: q.jsx(j_, {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                      }),
                    }),
                    q.jsx("a", {
                      href: "#",
                      "aria-label": "Visit our Instagram page",
                      className:
                        "text-gray-300 hover:text-[#f4a460] transition-all transform hover:scale-110",
                      children: q.jsx(h_, {
                        className: "w-6 h-6",
                        "aria-hidden": "true",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        q.jsx("div", {
          className: "border-t border-gray-600/50 mt-12 pt-8 text-center",
          children: q.jsxs("p", {
            className: "text-sm text-gray-400 font-medium",
            children: [
              "© ",
              new Date().getFullYear(),
              " Rochetta. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
}
const P_ = (a) =>
    !a || !a.includes("cloudinary.com/dx86eb887/image/upload/")
      ? a
      : a.replace("/upload/", "/upload/f_auto,q_auto,w_400/"),
  W_ = "/assets/doctor-C1Ahsphq.webp",
  I_ = "/assets/first-BqjF_naa.webp",
  e3 = "/assets/second-Dbknofa7.webp",
  t3 = "/assets/third-D7lGMXjz.webp",
  n3 = "/assets/offer_1-DFMhYK71.webp",
  a3 = "/assets/offer_2-DXoylVjf.webp",
  l3 = "/assets/abdo-OWjNY84i.webp",
  u3 = "/assets/selim-Csbv8CDV.jpeg",
  i3 = "/assets/three-DVREpalo.webp",
  r3 = [
    {
      question: "What is your return policy?",
      answer:
        "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping fees depend on the destination country.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email.",
    },
  ];
function c3() {
  const { searchTerm: a } = qa((S) => S.ui),
    { isAuthenticated: u } = qa((S) => S.auth),
    [c, s] = R.useState(null),
    [o] = Y_(),
    [f, h] = R.useState(null),
    p = a ? { limit: 20, search: a } : { limit: 4, top_selling: !0 },
    { data: y, isLoading: m } = $_(p),
    b = y?.data || [],
    v = (S) => s(c === S ? null : S),
    _ = async (S) => {
      if (!u) {
        Jo.error("Please login to add items");
        return;
      }
      h(S._id);
      try {
        (await o({ productId: S._id, quantity: 1 }).unwrap(),
          Jo.success("Added to cart successfully"));
      } catch (A) {
        Jo.error("Failed to add to cart", A);
      } finally {
        h(null);
      }
    };
  return q.jsxs("div", {
    className:
      "w-full bg-gray-50 dark:bg-[#121212] transition-colors duration-300",
    children: [
      q.jsx("div", {
        className:
          "relative w-full overflow-hidden bg-gradient-to-l from-[#0a3c2f] to-[#2c6e49] text-white pt-24 ",
        children: q.jsx("div", {
          className: "w-full px-4 sm:px-8 lg:px-12",
          children: q.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-center justify-between gap-12",
            children: [
              q.jsxs("div", {
                className:
                  "w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left z-10 pb-12 lg:pb-20",
                children: [
                  q.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight",
                    children: "Welcome to Rochetta",
                  }),
                  q.jsx("p", {
                    className:
                      "text-lg md:text-xl text-green-50 mb-8 max-w-2xl mx-auto lg:mx-0",
                    children:
                      "Your online pharmacy — delivering trusted medicines and care, anytime, anywhere.",
                  }),
                  q.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                    children: [
                      q.jsx(He, {
                        to: "/category/pain-relief",
                        className:
                          "px-8 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg active:scale-95",
                        children: "Get Started",
                      }),
                      q.jsx("button", {
                        className:
                          "px-8 py-3 bg-transparent border-2 border-green-400 hover:bg-green-400/20 text-white font-bold rounded-xl transition-all active:scale-95",
                        children: "Learn More",
                      }),
                    ],
                  }),
                ],
              }),
              q.jsxs("div", {
                className:
                  "w-full lg:w-1/2 flex justify-center lg:justify-end items-end relative top-1",
                children: [
                  q.jsx("div", {
                    className:
                      "absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-150 -z-10",
                  }),
                  q.jsx("img", {
                    src: W_,
                    alt: "Doctor",
                    width: "417",
                    height: "625",
                    fetchPriority: "high",
                    className:
                      "max-h-[450px] lg:max-h-[600px] w-auto object-contain drop-shadow-2xl",
                    style: { animation: "float 4s ease-in-out infinite" },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      q.jsx("div", {
        className: "w-full px-4 sm:px-8 lg:px-12 py-16",
        children: q.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
          children: [
            {
              icon: N_,
              title: "Free Shipping",
              desc: "For orders over $199.00",
            },
            { icon: A_, title: "Secure Payment", desc: "100% secure payment" },
            { icon: Fp, title: "Money Back", desc: "30 days return policy" },
            {
              icon: f_,
              title: "24/7 Support",
              desc: "Friendly customer support",
            },
          ].map((S, A) =>
            q.jsxs(
              "div",
              {
                className:
                  "flex flex-col items-center text-center p-6 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300",
                children: [
                  q.jsx("div", {
                    className:
                      "w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4",
                    children: q.jsx(S.icon, {
                      className: "w-8 h-8 text-green-600 dark:text-green-500",
                      "aria-hidden": "true",
                    }),
                  }),
                  q.jsx("h4", {
                    className:
                      "text-xl font-bold text-gray-900 dark:text-white mb-2",
                    children: S.title,
                  }),
                  q.jsx("p", {
                    className: "text-gray-500 dark:text-gray-400",
                    children: S.desc,
                  }),
                ],
              },
              A,
            ),
          ),
        }),
      }),
      q.jsx("div", {
        className: "w-full px-4 sm:px-8 lg:px-12 py-12",
        children: q.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [I_, e3, t3].map((S, A) =>
            q.jsx(
              "div",
              {
                className:
                  "overflow-hidden rounded-2xl shadow-md group cursor-pointer",
                children: q.jsx("img", {
                  src: S,
                  alt: `Promo ${A + 1}`,
                  loading: "lazy",
                  decoding: "async",
                  className:
                    "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500",
                }),
              },
              A,
            ),
          ),
        }),
      }),
      q.jsxs("div", {
        className: "w-full px-4 sm:px-8 lg:px-12 py-16",
        children: [
          q.jsx("h3", {
            className:
              "text-3xl font-bold text-center text-gray-900 dark:text-white mb-10",
            children: a ? `Search Results for "${a}"` : "Top Selling Products",
          }),
          m
            ? q.jsxs("div", {
                className:
                  "text-center py-10 text-green-600 font-bold flex justify-center items-center gap-2",
                children: [
                  q.jsx(Fp, { className: "w-6 h-6 animate-spin" }),
                  " Loading products...",
                ],
              })
            : q.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8",
                children:
                  b.length > 0
                    ? b.map((S) =>
                        q.jsxs(
                          "div",
                          {
                            className:
                              "bg-white dark:bg-[#1e1e1e] p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full",
                            children: [
                              q.jsx(He, {
                                to: `/product/${S._id}`,
                                className:
                                  "block h-48 mb-4 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800 p-2",
                                children: q.jsx("img", {
                                  src: P_(S.image) || "/placeholder.png",
                                  alt: S.name,
                                  loading: "lazy",
                                  decoding: "async",
                                  className:
                                    "w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal",
                                }),
                              }),
                              q.jsx("div", {
                                className: "flex text-yellow-400 mb-2",
                                role: "img",
                                "aria-label": `Rating: ${S.rating || 5} out of 5 stars`,
                                children: [...Array(5)].map((A, z) =>
                                  q.jsx(
                                    Wp,
                                    {
                                      className: "w-4 h-4 fill-current",
                                      "aria-hidden": "true",
                                    },
                                    z,
                                  ),
                                ),
                              }),
                              q.jsx("h4", {
                                className:
                                  "font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-green-600 transition-colors",
                                children: q.jsx(He, {
                                  to: `/product/${S._id}`,
                                  children: S.name,
                                }),
                              }),
                              q.jsxs("div", {
                                className: "mt-auto",
                                children: [
                                  q.jsxs("p", {
                                    className:
                                      "text-xl font-black text-gray-900 dark:text-white mb-4",
                                    children: ["$", S.price.toFixed(2)],
                                  }),
                                  q.jsxs("button", {
                                    "aria-label": `Add one box of ${S.name} to cart`,
                                    onClick: () => _(S),
                                    disabled: f === S._id,
                                    className:
                                      "w-full bg-green-700 hover:bg-green-800 disabled:bg-green-500 disabled:cursor-not-allowed text-white font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95",
                                    children: [
                                      f === S._id
                                        ? q.jsx(s0, {
                                            className: "w-5 h-5 animate-spin",
                                            "aria-hidden": "true",
                                          })
                                        : q.jsx(hf, {
                                            className: "w-5 h-5",
                                            "aria-hidden": "true",
                                          }),
                                      f === S._id ? "Adding..." : "Add To Cart",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          S._id,
                        ),
                      )
                    : q.jsx("div", {
                        className:
                          "col-span-full text-center text-gray-500 py-10 text-xl font-semibold",
                        children: "No products found.",
                      }),
              }),
        ],
      }),
      q.jsx("div", {
        className: "w-full px-4 sm:px-8 lg:px-12 py-12",
        children: q.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            q.jsx("img", {
              src: n3,
              alt: "Special Offer 1",
              width: "800",
              height: "400",
              loading: "lazy",
              decoding: "async",
              className:
                "w-full h-auto rounded-2xl shadow-md object-cover aspect-[2/1]",
            }),
            q.jsx("img", {
              src: a3,
              alt: "Special Offer 2",
              width: "800",
              height: "400",
              loading: "lazy",
              decoding: "async",
              className:
                "w-full h-auto rounded-2xl shadow-md object-cover aspect-[2/1]",
            }),
          ],
        }),
      }),
      q.jsx("div", {
        className:
          "w-full bg-gray-100 dark:bg-[#1a1a1a] py-16 transition-colors duration-300",
        children: q.jsxs("div", {
          className: "w-full px-4 sm:px-8 lg:px-12",
          children: [
            q.jsx("h3", {
              className:
                "text-3xl font-bold text-center text-gray-900 dark:text-white mb-12",
              children: "What Our Clients Say",
            }),
            q.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                {
                  img: l3,
                  name: "Abdelrahman Elaraby",
                  text: "Excellent service! The delivery was fast and the products are top quality.",
                  rating: 5,
                },
                {
                  img: u3,
                  name: "Abdelrahman Selim",
                  text: "Very professional staff and great customer support. Highly recommended!",
                  rating: 5,
                },
                {
                  img: i3,
                  name: "Omar Khaled",
                  text: "Affordable prices and authentic products. Will order again for sure.",
                  rating: 4,
                },
              ].map((S, A) =>
                q.jsxs(
                  "div",
                  {
                    className:
                      "bg-white dark:bg-[#252525] p-8 rounded-2xl text-center shadow-sm border border-gray-100 dark:border-gray-800 relative pt-14 mt-8",
                    children: [
                      q.jsx("img", {
                        src: S.img,
                        alt: `Client ${S.name}`,
                        loading: "lazy",
                        className:
                          "w-24 h-24 rounded-full object-cover absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-[#252525] shadow-md",
                      }),
                      q.jsx("h4", {
                        className:
                          "font-bold text-lg text-gray-900 dark:text-white mb-3",
                        children: S.name,
                      }),
                      q.jsxs("p", {
                        className:
                          "text-gray-600 dark:text-gray-400 italic mb-4 leading-relaxed",
                        children: ['"', S.text, '"'],
                      }),
                      q.jsx("div", {
                        className: "flex justify-center text-yellow-400",
                        role: "img",
                        "aria-label": `Rating: ${S.rating} out of 5 stars`,
                        children: [...Array(5)].map((z, T) =>
                          q.jsx(
                            Wp,
                            {
                              className: `w-5 h-5 ${T < S.rating ? "fill-current" : "text-gray-300 dark:text-gray-600"}`,
                              "aria-hidden": "true",
                            },
                            T,
                          ),
                        ),
                      }),
                    ],
                  },
                  A,
                ),
              ),
            }),
          ],
        }),
      }),
      q.jsxs("div", {
        className: "max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-20",
        children: [
          q.jsx("h3", {
            className:
              "text-3xl font-bold text-center text-gray-900 dark:text-white mb-10",
            children: "Frequently Asked Questions",
          }),
          q.jsx("div", {
            className: "space-y-4",
            children: r3.map((S, A) =>
              q.jsxs(
                "div",
                {
                  className: `border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 ${c === A ? "bg-green-50 dark:bg-green-900/10 border-green-500" : "bg-white dark:bg-[#1e1e1e]"}`,
                  children: [
                    q.jsxs("button", {
                      "aria-expanded": c === A,
                      onClick: () => v(A),
                      className:
                        "w-full px-6 py-4 flex justify-between items-center focus:outline-none",
                      children: [
                        q.jsx("span", {
                          className: `font-semibold text-left ${c === A ? "text-green-700 dark:text-green-400" : "text-gray-900 dark:text-white"}`,
                          children: S.question,
                        }),
                        q.jsx("span", {
                          className: `text-2xl font-light transition-transform duration-300 ${c === A ? "text-green-600 rotate-45" : "text-gray-400"}`,
                          "aria-hidden": "true",
                          children: "+",
                        }),
                      ],
                    }),
                    q.jsx("div", {
                      className: `px-6 overflow-hidden transition-all duration-300 ease-in-out ${c === A ? "max-h-40 py-4 border-t border-green-100 dark:border-green-800" : "max-h-0"}`,
                      children: q.jsx("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: S.answer,
                      }),
                    }),
                  ],
                },
                A,
              ),
            ),
          }),
        ],
      }),
      q.jsx(F_, {}),
      q.jsx("style", {
        children: `
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1.05); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `,
      }),
    ],
  });
}
const s3 = R.lazy(() =>
    Un(() => import("./Cart-DVXxy8FM.js"), __vite__mapDeps([0, 1])),
  ),
  o3 = R.lazy(() =>
    Un(() => import("./ProductDetails-CmNRznYm.js"), __vite__mapDeps([2, 3])),
  ),
  f3 = R.lazy(() =>
    Un(() => import("./CategoryView-DN_yMoHR.js"), __vite__mapDeps([4, 3, 5])),
  ),
  d3 = R.lazy(() =>
    Un(() => import("./Login-CkXgjpGj.js"), __vite__mapDeps([6, 7, 8, 1])),
  ),
  h3 = R.lazy(() =>
    Un(() => import("./Signup-B5t_sW_8.js"), __vite__mapDeps([9, 7, 8, 1])),
  ),
  m3 = R.lazy(() =>
    Un(() => import("./Profile-BgYF69zz.js"), __vite__mapDeps([10, 11])),
  ),
  y3 = R.lazy(() => Un(() => import("./NotFound-BK_kNB1e.js"), [])),
  p3 = R.lazy(() =>
    Un(
      () => import("./AdminAddProduct-BkRQiDDw.js"),
      __vite__mapDeps([12, 7, 5, 11, 13]),
    ),
  ),
  g3 = R.lazy(() =>
    Un(
      () => import("./AdminEditProduct-jxyrkOxd.js"),
      __vite__mapDeps([14, 7, 1, 11, 13]),
    ),
  );
function v3() {
  return q.jsx(R.Suspense, {
    fallback: q.jsx(K_, {}),
    children: q.jsxs(Bb, {
      children: [
        q.jsx(Kt, { path: "/", element: q.jsx(c3, {}) }),
        q.jsx(Kt, { path: "/product/:id", element: q.jsx(o3, {}) }),
        q.jsx(Kt, { path: "/category/:slug", element: q.jsx(f3, {}) }),
        q.jsx(Kt, { path: "/signup", element: q.jsx(h3, {}) }),
        q.jsx(Kt, { path: "/login", element: q.jsx(d3, {}) }),
        q.jsx(Kt, {
          path: "/cart",
          element: q.jsx(jr, { children: q.jsx(s3, {}) }),
        }),
        q.jsx(Kt, {
          path: "/profile",
          element: q.jsx(jr, { children: q.jsx(m3, {}) }),
        }),
        q.jsx(Kt, {
          path: "/admin/add-product",
          element: q.jsx(jr, { children: q.jsx(p3, {}) }),
        }),
        q.jsx(Kt, {
          path: "/admin/edit-product/:id",
          element: q.jsx(jr, { children: q.jsx(g3, {}) }),
        }),
        q.jsx(Kt, { path: "*", element: q.jsx(y3, {}) }),
      ],
    }),
  });
}
function b3() {
  const { darkMode: a } = qa((o) => o.ui),
    u = ln();
  R.useEffect(() => {
    const o = document.documentElement;
    a
      ? (o.classList.add("dark"), localStorage.setItem("theme", "dark"))
      : (o.classList.remove("dark"), localStorage.setItem("theme", "light"));
  }, [a]);
  const s = ["/login", "/signup"].includes(u.pathname);
  return q.jsxs("div", {
    className: "flex flex-col min-h-screen w-full",
    children: [
      q.jsx(n_, { position: "top-center", reverseOrder: !1 }),
      !s && q.jsxs(q.Fragment, { children: [q.jsx(G_, {}), q.jsx(k_, {})] }),
      q.jsx("main", {
        className: `flex-grow w-full flex flex-col ${s ? "" : "pt-[112px]"}`,
        children: q.jsx(v3, {}),
      }),
    ],
  });
}
V1.createRoot(document.getElementById("root")).render(
  q.jsx(j1.StrictMode, {
    children: q.jsx(US, {
      store: e0,
      children: q.jsx(oS, { children: q.jsx(b3, {}) }),
    }),
  }),
);
export {
  s0 as L,
  p_ as M,
  j1 as R,
  hf as S,
  q_ as U,
  qa as a,
  B_ as b,
  We as c,
  T3 as d,
  R3 as e,
  A3 as f,
  Y_ as g,
  _3 as h,
  He as i,
  q as j,
  S3 as k,
  O3 as l,
  z3 as m,
  $_ as n,
  P_ as o,
  xg as p,
  Ju as q,
  R as r,
  E3 as s,
  x3 as t,
  og as u,
  M3 as v,
  C3 as w,
  w3 as x,
  Jo as z,
};
