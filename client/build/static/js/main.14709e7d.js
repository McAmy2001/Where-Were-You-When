/*! For license information please see main.14709e7d.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          i = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          u = {};
        function s(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            y[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var m = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = y.hasOwnProperty(t) ? y[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(m, g);
            y[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(m, g);
              y[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(m, g);
            y[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          E = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          O = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          D = Symbol.for("react.suspense_list"),
          P = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var R = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var F = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null;
        }
        var L,
          A = Object.assign;
        function M(e) {
          if (void 0 === L)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              L = (t && t[1]) || "";
            }
          return "\n" + L + e;
        }
        var V = !1;
        function z(e, t) {
          if (!e || V) return "";
          V = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && "string" === typeof l.stack) {
              for (
                var i = l.stack.split("\n"),
                  o = r.stack.split("\n"),
                  a = i.length - 1,
                  u = o.length - 1;
                1 <= a && 0 <= u && i[a] !== o[u];

              )
                u--;
              for (; 1 <= a && 0 <= u; a--, u--)
                if (i[a] !== o[u]) {
                  if (1 !== a || 1 !== u)
                    do {
                      if ((a--, 0 > --u || i[a] !== o[u])) {
                        var s = "\n" + i[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= a && 0 <= u);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case _:
              return "Fragment";
            case E:
              return "Portal";
            case x:
              return "Profiler";
            case S:
              return "StrictMode";
            case N:
              return "Suspense";
            case D:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case P:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function B(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function H(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = B(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          J(e, t);
          var n = B(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, B(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && H(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + B(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: B(n) };
        }
        function oe(e, t) {
          var n = B(t.value),
            r = B(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ue(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ue(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var me = A(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              me[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ee = null,
          _e = null,
          Se = null;
        function xe(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof Ee) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ki(t)), Ee(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          _e ? (Se ? Se.push(e) : (Se = [e])) : (_e = e);
        }
        function Te() {
          if (_e) {
            var e = _e,
              t = Se;
            if (((Se = _e = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function Ne() {}
        var De = !1;
        function Pe(e, t, n) {
          if (De) return e(t, n);
          De = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (De = !1), (null !== _e || null !== Se) && (Ne(), Te());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ki(n);
          if (null === r) return null;
          n = r[t];
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Re = !1;
        if (c)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                Re = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (ce) {
            Re = !1;
          }
        function je(e, t, n, r, i, o, a, u, s) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, l);
          } catch (c) {
            this.onError(c);
          }
        }
        var Le = !1,
          Ae = null,
          Me = !1,
          Ve = null,
          ze = {
            onError: function (e) {
              (Le = !0), (Ae = e);
            },
          };
        function Qe(e, t, n, r, i, o, a, u, s) {
          (Le = !1), (Ae = null), je.apply(ze, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Be(e) {
          if (qe(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return Be(i), e;
                    if (a === r) return Be(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var u = !1, s = i.child; s; ) {
                    if (s === n) {
                      (u = !0), (n = i), (r = a);
                      break;
                    }
                    if (s === r) {
                      (u = !0), (r = i), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!u) {
                    for (s = a.child; s; ) {
                      if (s === n) {
                        (u = !0), (n = a), (r = i);
                        break;
                      }
                      if (s === r) {
                        (u = !0), (r = a), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!u) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = i.unstable_scheduleCallback,
          He = i.unstable_cancelCallback,
          Ye = i.unstable_shouldYield,
          Ge = i.unstable_requestPaint,
          Je = i.unstable_now,
          Xe = i.unstable_getCurrentPriorityLevel,
          Ze = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          ot = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ut(e) / st) | 0)) | 0;
              },
          ut = Math.log,
          st = Math.LN2;
        var lt = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var u = a & ~i;
            0 !== u ? (r = ft(u)) : 0 !== (o &= a) && (r = ft(o));
          } else 0 !== (a = n & ~i) ? (r = ft(a)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (o = t & -t) || (16 === i && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = lt;
          return 0 === (4194240 & (lt <<= 1)) && (lt = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function mt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          Et,
          _t,
          St,
          xt,
          Ot = !1,
          Tt = [],
          Ct = null,
          Nt = null,
          Dt = null,
          Pt = new Map(),
          It = new Map(),
          Rt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Dt = null;
              break;
            case "pointerover":
            case "pointerout":
              Pt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function Lt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && Et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function At(e) {
          var t = gi(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      _t(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && Et(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Vt(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function zt() {
          (Ot = !1),
            null !== Ct && Mt(Ct) && (Ct = null),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== Dt && Mt(Dt) && (Dt = null),
            Pt.forEach(Vt),
            It.forEach(Vt);
        }
        function Qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, zt)));
        }
        function qt(e) {
          function t(t) {
            return Qt(t, e);
          }
          if (0 < Tt.length) {
            Qt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ct && Qt(Ct, e),
              null !== Nt && Qt(Nt, e),
              null !== Dt && Qt(Dt, e),
              Pt.forEach(t),
              It.forEach(t),
              n = 0;
            n < Rt.length;
            n++
          )
            (r = Rt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn; )
            At(n), null === n.blockedOn && Rt.shift();
        }
        var Ut = w.ReactCurrentBatchConfig,
          Bt = !0;
        function Wt(e, t, n, r) {
          var i = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = o);
          }
        }
        function $t(e, t, n, r) {
          var i = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Bt) {
            var i = Yt(e, t, n, r);
            if (null === i) Br(e, t, r, Ht, n), jt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Ct = Lt(Ct, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Nt = Lt(Nt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Dt = Lt(Dt, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return Pt.set(o, Lt(Pt.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      It.set(o, Lt(It.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== i; ) {
                var o = bi(i);
                if (
                  (null !== o && kt(o),
                  null === (o = Yt(e, t, n, r)) && Br(e, t, r, Ht, n),
                  o === i)
                )
                  break;
                i = o;
              }
              null !== i && r.stopPropagation();
            } else Br(e, t, r, null, n);
          }
        }
        var Ht = null;
        function Yt(e, t, n, r) {
          if (((Ht = null), null !== (e = gi((e = ke(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Ht = e), null;
        }
        function Gt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            i = "value" in Jt ? Jt.value : Jt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          un,
          sn,
          ln = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(ln),
          fn = A({}, ln, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = A({}, fn, {
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
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (un = e.screenY - sn.screenY))
                      : (un = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          hn = on(pn),
          vn = on(A({}, pn, { dataTransfer: 0 })),
          yn = on(A({}, fn, { relatedTarget: 0 })),
          mn = on(
            A({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = A({}, ln, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(gn),
          wn = on(A({}, ln, { data: 0 })),
          kn = {
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
          En = {
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
          _n = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = _n[e]) && !!t[e];
        }
        function xn() {
          return Sn;
        }
        var On = A({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? En[e.keyCode] || "Unidentified"
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
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = on(On),
          Cn = on(
            A({}, pn, {
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
            })
          ),
          Nn = on(
            A({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Dn = on(
            A({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Pn = A({}, pn, {
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
          In = on(Pn),
          Rn = [9, 13, 27, 32],
          Fn = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var Ln = c && "TextEvent" in window && !jn,
          An = c && (!Fn || (jn && 8 < jn && 11 >= jn)),
          Mn = String.fromCharCode(32),
          Vn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Rn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Un = {
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
        function Bn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Oe(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Kn = null;
        function Hn(e) {
          Mr(e, 0);
        }
        function Yn(e) {
          if (K(wi(e))) return e;
        }
        function Gn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Jn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Kn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Kn)) {
            var t = [];
            Wn(t, Kn, e, ke(e)), Pe(Hn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var ur =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (ur(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(t, i) || !ur(e[i], t[i])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = lr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = H(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = H((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !e.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = cr(n, o));
                var a = cr(n, r);
                i &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          mr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == yr ||
            yr !== H(r) ||
            ("selectionStart" in (r = yr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && sr(gr, r)) ||
              ((gr = r),
              0 < (r = $r(mr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Er = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          _r = {},
          Sr = {};
        function xr(e) {
          if (_r[e]) return _r[e];
          if (!Er[e]) return e;
          var t,
            n = Er[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (_r[e] = n[t]);
          return e;
        }
        c &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
          "TransitionEvent" in window || delete Er.transitionend.transition);
        var Or = xr("animationend"),
          Tr = xr("animationiteration"),
          Cr = xr("animationstart"),
          Nr = xr("transitionend"),
          Dr = new Map(),
          Pr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          Dr.set(e, t), s(t, [e]);
        }
        for (var Rr = 0; Rr < Pr.length; Rr++) {
          var Fr = Pr[Rr];
          Ir(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Ir(Or, "onAnimationEnd"),
          Ir(Tr, "onAnimationIteration"),
          Ir(Cr, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Nr, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Lr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, u, s, l) {
              if ((Qe.apply(this, arguments), Le)) {
                if (!Le) throw Error(o(198));
                var c = Ae;
                (Le = !1), (Ae = null), Me || ((Me = !0), (Ve = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var u = r[a],
                    s = u.instance,
                    l = u.currentTarget;
                  if (((u = u.listener), s !== o && i.isPropagationStopped()))
                    break e;
                  Ar(i, u, l), (o = s);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((s = (u = r[a]).instance),
                    (l = u.currentTarget),
                    (u = u.listener),
                    s !== o && i.isPropagationStopped())
                  )
                    break e;
                  Ar(i, u, l), (o = s);
                }
            }
          }
          if (Me) throw ((e = Ve), (Me = !1), (Ve = null), e);
        }
        function Vr(e, t) {
          var n = t[vi];
          void 0 === n && (n = t[vi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Qr = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Qr]) {
            (e[Qr] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Lr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Qr] || ((t[Qr] = !0), zr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var i = Wt;
              break;
            case 4:
              i = $t;
              break;
            default:
              i = Kt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Re ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Br(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var u = r.stateNode.containerInfo;
                if (u === i || (8 === u.nodeType && u.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var s = a.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = a.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== u; ) {
                  if (null === (a = gi(u))) return;
                  if (5 === (s = a.tag) || 6 === s) {
                    r = o = a;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          Pe(function () {
            var r = o,
              i = ke(n),
              a = [];
            e: {
              var u = Dr.get(e);
              if (void 0 !== u) {
                var s = cn,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (l = "focus"), (s = yn);
                    break;
                  case "focusout":
                    (l = "blur"), (s = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Nn;
                    break;
                  case Or:
                  case Tr:
                  case Cr:
                    s = mn;
                    break;
                  case Nr:
                    s = Dn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Cn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Ie(h, d)) &&
                        c.push(Wr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new s(u, l, null, n, i)),
                  a.push({ event: u, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(l = n.relatedTarget || n.fromElement) ||
                  (!gi(l) && !l[hi])) &&
                  (s || u) &&
                  ((u =
                    i.window === i
                      ? i
                      : (u = i.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (l = (l = n.relatedTarget || n.toElement)
                          ? gi(l)
                          : null) &&
                        (l !== (f = qe(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((s = null), (l = r)),
                  s !== l))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Cn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? u : wi(s)),
                  (p = null == l ? u : wi(l)),
                  ((u = new c(v, h + "leave", s, n, i)).target = f),
                  (u.relatedTarget = p),
                  (v = null),
                  gi(i) === r &&
                    (((c = new c(d, h + "enter", l, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && l)
                )
                  e: {
                    for (d = l, h = 0, p = c = s; p; p = Kr(p)) h++;
                    for (p = 0, v = d; v; v = Kr(v)) p++;
                    for (; 0 < h - p; ) (c = Kr(c)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Kr(c)), (d = Kr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Hr(a, u, s, c, !1),
                  null !== l && null !== f && Hr(a, f, l, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (u = r ? wi(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === s && "file" === u.type)
              )
                var y = Gn;
              else if (Bn(u))
                if (Jn) y = ar;
                else {
                  y = ir;
                  var m = rr;
                }
              else
                (s = u.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (y = or);
              switch (
                (y && (y = y(e, r))
                  ? Wn(a, y, n, i)
                  : (m && m(e, u, r),
                    "focusout" === e &&
                      (m = u._wrapperState) &&
                      m.controlled &&
                      "number" === u.type &&
                      ee(u, "number", u.value)),
                (m = r ? wi(r) : window),
                e)
              ) {
                case "focusin":
                  (Bn(m) || "true" === m.contentEditable) &&
                    ((yr = m), (mr = r), (gr = null));
                  break;
                case "focusout":
                  gr = mr = yr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(a, n, i);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(a, n, i);
              }
              var g;
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (g = en())
                    : ((Xt = "value" in (Jt = i) ? Jt.value : Jt.textContent),
                      (qn = !0))),
                0 < (m = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, i)),
                  a.push({ event: b, listeners: m }),
                  g ? (b.data = g) : null !== (g = Qn(n)) && (b.data = g))),
                (g = Ln
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Vn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && Vn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Fn && zn(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((i = new wn("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = g));
            }
            Mr(a, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Ie(e, n)) && r.unshift(Wr(e, o, i)),
              null != (o = Ie(e, t)) && r.push(Wr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Hr(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var u = n,
              s = u.alternate,
              l = u.stateNode;
            if (null !== s && s === r) break;
            5 === u.tag &&
              null !== l &&
              ((u = l),
              i
                ? null != (s = Ie(n, o)) && a.unshift(Wr(n, s, u))
                : i || (null != (s = Ie(n, o)) && a.push(Wr(n, s, u)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Yr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g;
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Gr, "");
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oi = "function" === typeof Promise ? Promise : void 0,
          ai =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oi
              ? function (e) {
                  return oi.resolve(null).then(e).catch(ui);
                }
              : ri;
        function ui(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function si(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          qt(t);
        }
        function li(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          di = "__reactFiber$" + fi,
          pi = "__reactProps$" + fi,
          hi = "__reactContainer$" + fi,
          vi = "__reactEvents$" + fi,
          yi = "__reactListeners$" + fi,
          mi = "__reactHandles$" + fi;
        function gi(e) {
          var t = e[di];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[di])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[di])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[di] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ki(e) {
          return e[pi] || null;
        }
        var Ei = [],
          _i = -1;
        function Si(e) {
          return { current: e };
        }
        function xi(e) {
          0 > _i || ((e.current = Ei[_i]), (Ei[_i] = null), _i--);
        }
        function Oi(e, t) {
          _i++, (Ei[_i] = e.current), (e.current = t);
        }
        var Ti = {},
          Ci = Si(Ti),
          Ni = Si(!1),
          Di = Ti;
        function Pi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ti;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ii(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ri() {
          xi(Ni), xi(Ci);
        }
        function Fi(e, t, n) {
          if (Ci.current !== Ti) throw Error(o(168));
          Oi(Ci, t), Oi(Ni, n);
        }
        function ji(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(o(108, U(e) || "Unknown", i));
          return A({}, n, r);
        }
        function Li(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ti),
            (Di = Ci.current),
            Oi(Ci, e),
            Oi(Ni, Ni.current),
            !0
          );
        }
        function Ai(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = ji(e, t, Di)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xi(Ni),
              xi(Ci),
              Oi(Ci, e))
            : xi(Ni),
            Oi(Ni, n);
        }
        var Mi = null,
          Vi = !1,
          zi = !1;
        function Qi(e) {
          null === Mi ? (Mi = [e]) : Mi.push(e);
        }
        function qi() {
          if (!zi && null !== Mi) {
            zi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Mi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Mi = null), (Vi = !1);
            } catch (i) {
              throw (null !== Mi && (Mi = Mi.slice(e + 1)), Ke(Ze, qi), i);
            } finally {
              (bt = t), (zi = !1);
            }
          }
          return null;
        }
        var Ui = [],
          Bi = 0,
          Wi = null,
          $i = 0,
          Ki = [],
          Hi = 0,
          Yi = null,
          Gi = 1,
          Ji = "";
        function Xi(e, t) {
          (Ui[Bi++] = $i), (Ui[Bi++] = Wi), (Wi = e), ($i = t);
        }
        function Zi(e, t, n) {
          (Ki[Hi++] = Gi), (Ki[Hi++] = Ji), (Ki[Hi++] = Yi), (Yi = e);
          var r = Gi;
          e = Ji;
          var i = 32 - at(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - at(t) + i;
          if (30 < o) {
            var a = i - (i % 5);
            (o = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (i -= a),
              (Gi = (1 << (32 - at(t) + i)) | (n << i) | r),
              (Ji = o + e);
          } else (Gi = (1 << o) | (n << i) | r), (Ji = e);
        }
        function eo(e) {
          null !== e.return && (Xi(e, 1), Zi(e, 1, 0));
        }
        function to(e) {
          for (; e === Wi; )
            (Wi = Ui[--Bi]), (Ui[Bi] = null), ($i = Ui[--Bi]), (Ui[Bi] = null);
          for (; e === Yi; )
            (Yi = Ki[--Hi]),
              (Ki[Hi] = null),
              (Ji = Ki[--Hi]),
              (Ki[Hi] = null),
              (Gi = Ki[--Hi]),
              (Ki[Hi] = null);
        }
        var no = null,
          ro = null,
          io = !1,
          oo = null;
        function ao(e, t) {
          var n = Pl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function uo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = li(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yi ? { id: Gi, overflow: Ji } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Pl(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function lo(e) {
          if (io) {
            var t = ro;
            if (t) {
              var n = t;
              if (!uo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = li(n.nextSibling);
                var r = no;
                t && uo(e, t)
                  ? ao(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!io) return co(e), (io = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) ao(e, t), (t = li(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = li(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? li(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = li(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (io = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var yo = w.ReactCurrentBatchConfig;
        function mo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Si(null),
          bo = null,
          wo = null,
          ko = null;
        function Eo() {
          ko = wo = bo = null;
        }
        function _o(e) {
          var t = go.current;
          xi(go), (e._currentValue = t);
        }
        function So(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xo(e, t) {
          (bo = e),
            (ko = wo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wu = !0), (e.firstContext = null));
        }
        function Oo(e) {
          var t = e._currentValue;
          if (ko !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wo)
            ) {
              if (null === bo) throw Error(o(308));
              (wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else wo = wo.next = e;
          return t;
        }
        var To = null;
        function Co(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function No(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), Co(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Do(e, r)
          );
        }
        function Do(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Po = !1;
        function Io(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ro(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function jo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cs))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Do(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), Co(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Do(e, n)
          );
        }
        function Lo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Ao(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Mo(e, t, n, r) {
          var i = e.updateQueue;
          Po = !1;
          var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            u = i.shared.pending;
          if (null !== u) {
            i.shared.pending = null;
            var s = u,
              l = s.next;
            (s.next = null), null === a ? (o = l) : (a.next = l), (a = s);
            var c = e.alternate;
            null !== c &&
              (u = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === u ? (c.firstBaseUpdate = l) : (u.next = l),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = i.baseState;
            for (a = 0, c = l = s = null, u = o; ; ) {
              var d = u.lane,
                p = u.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: u.tag,
                      payload: u.payload,
                      callback: u.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = u;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = A({}, f, d);
                      break e;
                    case 2:
                      Po = !0;
                  }
                }
                null !== u.callback &&
                  0 !== u.lane &&
                  ((e.flags |= 64),
                  null === (d = i.effects) ? (i.effects = [u]) : d.push(u));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                }),
                  null === c ? ((l = c = p), (s = f)) : (c = c.next = p),
                  (a |= d);
              if (null === (u = u.next)) {
                if (null === (u = i.shared.pending)) break;
                (u = (d = u).next),
                  (d.next = null),
                  (i.lastBaseUpdate = d),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (i.baseState = s),
              (i.firstBaseUpdate = l),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (a |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === o && (i.shared.lanes = 0);
            (Ls |= a), (e.lanes = a), (e.memoizedState = f);
          }
        }
        function Vo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var zo = new r.Component().refs;
        function Qo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var qo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = el(),
              i = tl(e),
              o = Fo(r, i);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = jo(e, o, i)) && (nl(t, e, i, r), Lo(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = el(),
              i = tl(e),
              o = Fo(r, i);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = jo(e, o, i)) && (nl(t, e, i, r), Lo(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = el(),
              r = tl(e),
              i = Fo(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = jo(e, i, r)) && (nl(t, e, r, n), Lo(t, e, r));
          },
        };
        function Uo(e, t, n, r, i, o, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, o);
        }
        function Bo(e, t, n) {
          var r = !1,
            i = Ti,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Oo(o))
              : ((i = Ii(t) ? Di : Ci.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Pi(e, i)
                  : Ti)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = qo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Wo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && qo.enqueueReplaceState(t, t.state, null);
        }
        function $o(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = zo), Io(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (i.context = Oo(o))
            : ((o = Ii(t) ? Di : Ci.current), (i.context = Pi(e, o))),
            (i.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Qo(e, t, o, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && qo.enqueueReplaceState(i, i.state, null),
              Mo(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Ko(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === zo && (t = i.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ho(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Yo(e) {
          return (0, e._init)(e._payload);
        }
        function Go(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Rl(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Al(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function l(e, t, n, r) {
            var o = n.type;
            return o === _
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === I &&
                    Yo(o) === t.type))
              ? (((r = i(t, n.props)).ref = Ko(e, t, n)), (r.return = e), r)
              : (((r = Fl(n.type, n.key, n.props, null, e.mode, r)).ref = Ko(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ml(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = jl(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Al("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Fl(t.type, t.key, t.props, null, e.mode, n)).ref = Ko(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Ml(t, e.mode, n)).return = e), t;
                case I:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return ((t = jl(t, e.mode, n, null)).return = e), t;
              Ho(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i ? l(e, t, n, r) : null;
                case E:
                  return n.key === i ? c(e, t, n, r) : null;
                case I:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== i ? null : f(e, t, n, r, null);
              Ho(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return l(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case I:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || j(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              Ho(t, r);
            }
            return null;
          }
          function v(i, o, u, s) {
            for (
              var l = null, c = null, f = o, v = (o = 0), y = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((y = f), (f = null)) : (y = f.sibling);
              var m = p(i, f, u[v], s);
              if (null === m) {
                null === f && (f = y);
                break;
              }
              e && f && null === m.alternate && t(i, f),
                (o = a(m, o, v)),
                null === c ? (l = m) : (c.sibling = m),
                (c = m),
                (f = y);
            }
            if (v === u.length) return n(i, f), io && Xi(i, v), l;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(i, u[v], s)) &&
                  ((o = a(f, o, v)),
                  null === c ? (l = f) : (c.sibling = f),
                  (c = f));
              return io && Xi(i, v), l;
            }
            for (f = r(i, f); v < u.length; v++)
              null !== (y = h(f, i, v, u[v], s)) &&
                (e &&
                  null !== y.alternate &&
                  f.delete(null === y.key ? v : y.key),
                (o = a(y, o, v)),
                null === c ? (l = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              io && Xi(i, v),
              l
            );
          }
          function y(i, u, s, l) {
            var c = j(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var f = (c = null), v = u, y = (u = 0), m = null, g = s.next();
              null !== v && !g.done;
              y++, g = s.next()
            ) {
              v.index > y ? ((m = v), (v = null)) : (m = v.sibling);
              var b = p(i, v, g.value, l);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (u = a(b, u, y)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (g.done) return n(i, v), io && Xi(i, y), c;
            if (null === v) {
              for (; !g.done; y++, g = s.next())
                null !== (g = d(i, g.value, l)) &&
                  ((u = a(g, u, y)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return io && Xi(i, y), c;
            }
            for (v = r(i, v); !g.done; y++, g = s.next())
              null !== (g = h(v, i, y, g.value, l)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? y : g.key),
                (u = a(g, u, y)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              io && Xi(i, y),
              c
            );
          }
          return function e(r, o, a, s) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === _ &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case k:
                  e: {
                    for (var l = a.key, c = o; null !== c; ) {
                      if (c.key === l) {
                        if ((l = a.type) === _) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = i(c, a.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === I &&
                            Yo(l) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = i(c, a.props)).ref = Ko(r, c, a)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === _
                      ? (((o = jl(a.props.children, r.mode, s, a.key)).return =
                          r),
                        (r = o))
                      : (((s = Fl(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          s
                        )).ref = Ko(r, o, a)),
                        (s.return = r),
                        (r = s));
                  }
                  return u(r);
                case E:
                  e: {
                    for (c = a.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === a.containerInfo &&
                          o.stateNode.implementation === a.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = i(o, a.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Ml(a, r.mode, s)).return = r), (r = o);
                  }
                  return u(r);
                case I:
                  return e(r, o, (c = a._init)(a._payload), s);
              }
              if (te(a)) return v(r, o, a, s);
              if (j(a)) return y(r, o, a, s);
              Ho(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = i(o, a)).return = r), (r = o))
                  : (n(r, o), ((o = Al(a, r.mode, s)).return = r), (r = o)),
                u(r))
              : n(r, o);
          };
        }
        var Jo = Go(!0),
          Xo = Go(!1),
          Zo = {},
          ea = Si(Zo),
          ta = Si(Zo),
          na = Si(Zo);
        function ra(e) {
          if (e === Zo) throw Error(o(174));
          return e;
        }
        function ia(e, t) {
          switch ((Oi(na, t), Oi(ta, e), Oi(ea, Zo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xi(ea), Oi(ea, t);
        }
        function oa() {
          xi(ea), xi(ta), xi(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = se(t, e.type);
          t !== n && (Oi(ta, e), Oi(ea, n));
        }
        function ua(e) {
          ta.current === e && (xi(ea), xi(ta));
        }
        var sa = Si(0);
        function la(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ca = [];
        function fa() {
          for (var e = 0; e < ca.length; e++)
            ca[e]._workInProgressVersionPrimary = null;
          ca.length = 0;
        }
        var da = w.ReactCurrentDispatcher,
          pa = w.ReactCurrentBatchConfig,
          ha = 0,
          va = null,
          ya = null,
          ma = null,
          ga = !1,
          ba = !1,
          wa = 0,
          ka = 0;
        function Ea() {
          throw Error(o(321));
        }
        function _a(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ur(e[n], t[n])) return !1;
          return !0;
        }
        function Sa(e, t, n, r, i, a) {
          if (
            ((ha = a),
            (va = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (da.current = null === e || null === e.memoizedState ? uu : su),
            (e = n(r, i)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (wa = 0), 25 <= a)) throw Error(o(301));
              (a += 1),
                (ma = ya = null),
                (t.updateQueue = null),
                (da.current = lu),
                (e = n(r, i));
            } while (ba);
          }
          if (
            ((da.current = au),
            (t = null !== ya && null !== ya.next),
            (ha = 0),
            (ma = ya = va = null),
            (ga = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function xa() {
          var e = 0 !== wa;
          return (wa = 0), e;
        }
        function Oa() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ma ? (va.memoizedState = ma = e) : (ma = ma.next = e), ma
          );
        }
        function Ta() {
          if (null === ya) {
            var e = va.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ya.next;
          var t = null === ma ? va.memoizedState : ma.next;
          if (null !== t) (ma = t), (ya = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (ya = e).memoizedState,
              baseState: ya.baseState,
              baseQueue: ya.baseQueue,
              queue: ya.queue,
              next: null,
            }),
              null === ma ? (va.memoizedState = ma = e) : (ma = ma.next = e);
          }
          return ma;
        }
        function Ca(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Na(e) {
          var t = Ta(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = ya,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var u = i.next;
              (i.next = a.next), (a.next = u);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (a = i.next), (r = r.baseState);
            var s = (u = null),
              l = null,
              c = a;
            do {
              var f = c.lane;
              if ((ha & f) === f)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === l ? ((s = l = d), (u = r)) : (l = l.next = d),
                  (va.lanes |= f),
                  (Ls |= f);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === l ? (u = r) : (l.next = s),
              ur(r, t.memoizedState) || (wu = !0),
              (t.memoizedState = r),
              (t.baseState = u),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (a = i.lane), (va.lanes |= a), (Ls |= a), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Da(e) {
          var t = Ta(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var u = (i = i.next);
            do {
              (a = e(a, u.action)), (u = u.next);
            } while (u !== i);
            ur(a, t.memoizedState) || (wu = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Pa() {}
        function Ia(e, t) {
          var n = va,
            r = Ta(),
            i = t(),
            a = !ur(r.memoizedState, i);
          if (
            (a && ((r.memoizedState = i), (wu = !0)),
            (r = r.queue),
            Ba(ja.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ma && 1 & ma.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Va(9, Fa.bind(null, n, r, i, t), void 0, null),
              null === Ns)
            )
              throw Error(o(349));
            0 !== (30 & ha) || Ra(n, t, i);
          }
          return i;
        }
        function Ra(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Fa(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), La(t) && Aa(e);
        }
        function ja(e, t, n) {
          return n(function () {
            La(t) && Aa(e);
          });
        }
        function La(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ur(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Aa(e) {
          var t = Do(e, 1);
          null !== t && nl(t, e, 1, -1);
        }
        function Ma(e) {
          var t = Oa();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ca,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nu.bind(null, va, e)),
            [t.memoizedState, e]
          );
        }
        function Va(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = va.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (va.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function za() {
          return Ta().memoizedState;
        }
        function Qa(e, t, n, r) {
          var i = Oa();
          (va.flags |= e),
            (i.memoizedState = Va(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function qa(e, t, n, r) {
          var i = Ta();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ya) {
            var a = ya.memoizedState;
            if (((o = a.destroy), null !== r && _a(r, a.deps)))
              return void (i.memoizedState = Va(t, n, o, r));
          }
          (va.flags |= e), (i.memoizedState = Va(1 | t, n, o, r));
        }
        function Ua(e, t) {
          return Qa(8390656, 8, e, t);
        }
        function Ba(e, t) {
          return qa(2048, 8, e, t);
        }
        function Wa(e, t) {
          return qa(4, 2, e, t);
        }
        function $a(e, t) {
          return qa(4, 4, e, t);
        }
        function Ka(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ha(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            qa(4, 4, Ka.bind(null, t, e), n)
          );
        }
        function Ya() {}
        function Ga(e, t) {
          var n = Ta();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _a(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ja(e, t) {
          var n = Ta();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && _a(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xa(e, t, n) {
          return 0 === (21 & ha)
            ? (e.baseState && ((e.baseState = !1), (wu = !0)),
              (e.memoizedState = n))
            : (ur(n, t) ||
                ((n = vt()), (va.lanes |= n), (Ls |= n), (e.baseState = !0)),
              t);
        }
        function Za(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = r);
          }
        }
        function eu() {
          return Ta().memoizedState;
        }
        function tu(e, t, n) {
          var r = tl(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ru(e))
          )
            iu(t, n);
          else if (null !== (n = No(e, t, n, r))) {
            nl(n, e, r, el()), ou(n, t, r);
          }
        }
        function nu(e, t, n) {
          var r = tl(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ru(e)) iu(t, i);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  u = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = u), ur(u, a))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), Co(t))
                      : ((i.next = s.next), (s.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (l) {}
            null !== (n = No(e, t, i, r)) &&
              (nl(n, e, r, (i = el())), ou(n, t, r));
          }
        }
        function ru(e) {
          var t = e.alternate;
          return e === va || (null !== t && t === va);
        }
        function iu(e, t) {
          ba = ga = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ou(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var au = {
            readContext: Oo,
            useCallback: Ea,
            useContext: Ea,
            useEffect: Ea,
            useImperativeHandle: Ea,
            useInsertionEffect: Ea,
            useLayoutEffect: Ea,
            useMemo: Ea,
            useReducer: Ea,
            useRef: Ea,
            useState: Ea,
            useDebugValue: Ea,
            useDeferredValue: Ea,
            useTransition: Ea,
            useMutableSource: Ea,
            useSyncExternalStore: Ea,
            useId: Ea,
            unstable_isNewReconciler: !1,
          },
          uu = {
            readContext: Oo,
            useCallback: function (e, t) {
              return (Oa().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oo,
            useEffect: Ua,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Qa(4194308, 4, Ka.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Qa(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Qa(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oa();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oa();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tu.bind(null, va, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oa().memoizedState = e);
            },
            useState: Ma,
            useDebugValue: Ya,
            useDeferredValue: function (e) {
              return (Oa().memoizedState = e);
            },
            useTransition: function () {
              var e = Ma(!1),
                t = e[0];
              return (
                (e = Za.bind(null, e[1])), (Oa().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = va,
                i = Oa();
              if (io) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ns)) throw Error(o(349));
                0 !== (30 & ha) || Ra(r, t, n);
              }
              i.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (i.queue = a),
                Ua(ja.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Va(9, Fa.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oa(),
                t = Ns.identifierPrefix;
              if (io) {
                var n = Ji;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Gi & ~(1 << (32 - at(Gi) - 1))).toString(32) + n)),
                  0 < (n = wa++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ka++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          su = {
            readContext: Oo,
            useCallback: Ga,
            useContext: Oo,
            useEffect: Ba,
            useImperativeHandle: Ha,
            useInsertionEffect: Wa,
            useLayoutEffect: $a,
            useMemo: Ja,
            useReducer: Na,
            useRef: za,
            useState: function () {
              return Na(Ca);
            },
            useDebugValue: Ya,
            useDeferredValue: function (e) {
              return Xa(Ta(), ya.memoizedState, e);
            },
            useTransition: function () {
              return [Na(Ca)[0], Ta().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: Ia,
            useId: eu,
            unstable_isNewReconciler: !1,
          },
          lu = {
            readContext: Oo,
            useCallback: Ga,
            useContext: Oo,
            useEffect: Ba,
            useImperativeHandle: Ha,
            useInsertionEffect: Wa,
            useLayoutEffect: $a,
            useMemo: Ja,
            useReducer: Da,
            useRef: za,
            useState: function () {
              return Da(Ca);
            },
            useDebugValue: Ya,
            useDeferredValue: function (e) {
              var t = Ta();
              return null === ya
                ? (t.memoizedState = e)
                : Xa(t, ya.memoizedState, e);
            },
            useTransition: function () {
              return [Da(Ca)[0], Ta().memoizedState];
            },
            useMutableSource: Pa,
            useSyncExternalStore: Ia,
            useId: eu,
            unstable_isNewReconciler: !1,
          };
        function cu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function fu(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function du(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pu = "function" === typeof WeakMap ? WeakMap : Map;
        function hu(e, t, n) {
          ((n = Fo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Bs || ((Bs = !0), (Ws = r)), du(0, t);
            }),
            n
          );
        }
        function vu(e, t, n) {
          (n = Fo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                du(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                du(0, t),
                  "function" !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function yu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pu();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = xl.bind(null, e, t, n)), t.then(e, e));
        }
        function mu(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gu(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fo(-1, 1)).tag = 2), jo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bu = w.ReactCurrentOwner,
          wu = !1;
        function ku(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Jo(t, e.child, n, r);
        }
        function Eu(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            xo(t, i),
            (r = Sa(e, t, n, r, o, i)),
            (n = xa()),
            null === e || wu
              ? (io && n && eo(t), (t.flags |= 1), ku(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Bu(e, t, i))
          );
        }
        function _u(e, t, n, r, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Il(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fl(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Su(e, t, o, r, i));
          }
          if (((o = e.child), 0 === (e.lanes & i))) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(a, r) &&
              e.ref === t.ref
            )
              return Bu(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = Rl(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Su(e, t, n, r, i) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((wu = !1), (t.pendingProps = r = o), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Bu(e, t, i);
              0 !== (131072 & e.flags) && (wu = !0);
            }
          }
          return Tu(e, t, n, r, i);
        }
        function xu(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Oi(Rs, Is),
                (Is |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Oi(Rs, Is),
                  (Is |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Oi(Rs, Is),
                (Is |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Oi(Rs, Is),
              (Is |= r);
          return ku(e, t, i, n), t.child;
        }
        function Ou(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tu(e, t, n, r, i) {
          var o = Ii(n) ? Di : Ci.current;
          return (
            (o = Pi(t, o)),
            xo(t, i),
            (n = Sa(e, t, n, r, o, i)),
            (r = xa()),
            null === e || wu
              ? (io && r && eo(t), (t.flags |= 1), ku(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Bu(e, t, i))
          );
        }
        function Cu(e, t, n, r, i) {
          if (Ii(n)) {
            var o = !0;
            Li(t);
          } else o = !1;
          if ((xo(t, i), null === t.stateNode))
            Uu(e, t), Bo(t, n, r), $o(t, n, r, i), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              u = t.memoizedProps;
            a.props = u;
            var s = a.context,
              l = n.contextType;
            "object" === typeof l && null !== l
              ? (l = Oo(l))
              : (l = Pi(t, (l = Ii(n) ? Di : Ci.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((u !== r || s !== l) && Wo(t, a, r, l)),
              (Po = !1);
            var d = t.memoizedState;
            (a.state = d),
              Mo(t, r, a, i),
              (s = t.memoizedState),
              u !== r || d !== s || Ni.current || Po
                ? ("function" === typeof c &&
                    (Qo(t, n, c, r), (s = t.memoizedState)),
                  (u = Po || Uo(t, n, u, r, d, s, l))
                    ? (f ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = l),
                  (r = u))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Ro(e, t),
              (u = t.memoizedProps),
              (l = t.type === t.elementType ? u : mo(t.type, u)),
              (a.props = l),
              (f = t.pendingProps),
              (d = a.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Oo(s))
                : (s = Pi(t, (s = Ii(n) ? Di : Ci.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((u !== f || d !== s) && Wo(t, a, r, s)),
              (Po = !1),
              (d = t.memoizedState),
              (a.state = d),
              Mo(t, r, a, i);
            var h = t.memoizedState;
            u !== f || d !== h || Ni.current || Po
              ? ("function" === typeof p &&
                  (Qo(t, n, p, r), (h = t.memoizedState)),
                (l = Po || Uo(t, n, l, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = s),
                (r = l))
              : ("function" !== typeof a.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nu(e, t, n, r, o, i);
        }
        function Nu(e, t, n, r, i, o) {
          Ou(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return i && Ai(t, n, !1), Bu(e, t, o);
          (r = t.stateNode), (bu.current = t);
          var u =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Jo(t, e.child, null, o)),
                (t.child = Jo(t, null, u, o)))
              : ku(e, t, u, o),
            (t.memoizedState = r.state),
            i && Ai(t, n, !0),
            t.child
          );
        }
        function Du(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Fi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fi(0, t.context, !1),
            ia(e, t.containerInfo);
        }
        function Pu(e, t, n, r, i) {
          return ho(), vo(i), (t.flags |= 256), ku(e, t, n, r), t.child;
        }
        var Iu,
          Ru,
          Fu,
          ju = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Lu(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Au(e, t, n) {
          var r,
            i = t.pendingProps,
            a = sa.current,
            u = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((u = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Oi(sa, 1 & a),
            null === e)
          )
            return (
              lo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  u
                    ? ((i = t.mode),
                      (u = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & i) && null !== u
                        ? ((u.childLanes = 0), (u.pendingProps = s))
                        : (u = Ll(s, i, 0, null)),
                      (e = jl(e, i, n, null)),
                      (u.return = t),
                      (e.return = t),
                      (u.sibling = e),
                      (t.child = u),
                      (t.child.memoizedState = Lu(n)),
                      (t.memoizedState = ju),
                      e)
                    : Mu(t, s))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, i, a, u) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Vu(e, t, u, (r = fu(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (i = t.mode),
                    (r = Ll(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((a = jl(a, i, u, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 !== (1 & t.mode) && Jo(t, e.child, null, u),
                    (t.child.memoizedState = Lu(u)),
                    (t.memoizedState = ju),
                    a);
              if (0 === (1 & t.mode)) return Vu(e, t, u, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Vu(e, t, u, (r = fu((a = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (u & e.childLanes)), wu || s)) {
                if (null !== (r = Ns)) {
                  switch (u & -u) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | u)) ? 0 : i) &&
                    i !== a.retryLane &&
                    ((a.retryLane = i), Do(e, i), nl(r, e, i, -1));
                }
                return vl(), Vu(e, t, u, (r = fu(Error(o(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tl.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (ro = li(i.nextSibling)),
                  (no = t),
                  (io = !0),
                  (oo = null),
                  null !== e &&
                    ((Ki[Hi++] = Gi),
                    (Ki[Hi++] = Ji),
                    (Ki[Hi++] = Yi),
                    (Gi = e.id),
                    (Ji = e.overflow),
                    (Yi = t)),
                  ((t = Mu(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, i, r, a, n);
          if (u) {
            (u = i.fallback), (s = t.mode), (r = (a = e.child).sibling);
            var l = { mode: "hidden", children: i.children };
            return (
              0 === (1 & s) && t.child !== a
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = l),
                  (t.deletions = null))
                : ((i = Rl(a, l)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (u = Rl(r, u))
                : ((u = jl(u, s, n, null)).flags |= 2),
              (u.return = t),
              (i.return = t),
              (i.sibling = u),
              (t.child = i),
              (i = u),
              (u = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Lu(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (u.memoizedState = s),
              (u.childLanes = e.childLanes & ~n),
              (t.memoizedState = ju),
              i
            );
          }
          return (
            (e = (u = e.child).sibling),
            (i = Rl(u, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Mu(e, t) {
          return (
            ((t = Ll(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Vu(e, t, n, r) {
          return (
            null !== r && vo(r),
            Jo(t, e.child, null, n),
            ((e = Mu(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zu(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), So(e.return, t, n);
        }
        function Qu(e, t, n, r, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function qu(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((ku(e, t, r.children, n), 0 !== (2 & (r = sa.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zu(e, n, t);
                else if (19 === e.tag) zu(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Oi(sa, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === la(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Qu(t, !1, i, n, o);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === la(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Qu(t, !0, n, null, o);
                break;
              case "together":
                Qu(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Uu(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Bu(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ls |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Rl((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rl(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wu(e, t) {
          if (!io)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $u(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ku(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $u(t), null;
            case 1:
            case 17:
              return Ii(t.type) && Ri(), $u(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oa(),
                xi(Ni),
                xi(Ci),
                fa(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (al(oo), (oo = null)))),
                $u(t),
                null
              );
            case 5:
              ua(t);
              var i = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ru(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $u(t), null;
                }
                if (((e = ra(ea.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[di] = t), (r[pi] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Vr("cancel", r), Vr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Vr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < jr.length; i++) Vr(jr[i], r);
                      break;
                    case "source":
                      Vr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Vr("error", r), Vr("load", r);
                      break;
                    case "details":
                      Vr("toggle", r);
                      break;
                    case "input":
                      G(r, a), Vr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Vr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, a), Vr("invalid", r);
                  }
                  for (var s in (ge(n, a), (i = null), a))
                    if (a.hasOwnProperty(s)) {
                      var l = a[s];
                      "children" === s
                        ? "string" === typeof l
                          ? r.textContent !== l &&
                            (!0 !== a.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (i = ["children", l]))
                          : "number" === typeof l &&
                            r.textContent !== "" + l &&
                            (!0 !== a.suppressHydrationWarning &&
                              Xr(r.textContent, l, e),
                            (i = ["children", "" + l]))
                        : u.hasOwnProperty(s) &&
                          null != l &&
                          "onScroll" === s &&
                          Vr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, a, !0);
                      break;
                    case "textarea":
                      $(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (r.onclick = Zr);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ue(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[di] = t),
                    (e[pi] = r),
                    Iu(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Vr("cancel", e), Vr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Vr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < jr.length; i++) Vr(jr[i], e);
                        i = r;
                        break;
                      case "source":
                        Vr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Vr("error", e), Vr("load", e), (i = r);
                        break;
                      case "details":
                        Vr("toggle", e), (i = r);
                        break;
                      case "input":
                        G(e, r), (i = Y(e, r)), Vr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = A({}, r, { value: void 0 })),
                          Vr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Vr("invalid", e);
                    }
                    for (a in (ge(n, i), (l = i)))
                      if (l.hasOwnProperty(a)) {
                        var c = l[a];
                        "style" === a
                          ? ye(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === a
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (u.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && Vr("scroll", e)
                              : null != c && b(e, a, c, s));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + B(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $u(t), null;
            case 6:
              if (e && null != t.stateNode) Fu(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ra(na.current)), ra(ea.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[di] = t),
                    (a = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[di] = t),
                    (t.stateNode = r);
              }
              return $u(t), null;
            case 13:
              if (
                (xi(sa),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  io &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (a = !1);
                else if (((a = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[di] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $u(t), (a = !1);
                } else null !== oo && (al(oo), (oo = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & sa.current)
                        ? 0 === Fs && (Fs = 3)
                        : vl())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $u(t),
                  null);
            case 4:
              return (
                oa(), null === e && qr(t.stateNode.containerInfo), $u(t), null
              );
            case 10:
              return _o(t.type._context), $u(t), null;
            case 19:
              if ((xi(sa), null === (a = t.memoizedState))) return $u(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = a.rendering)))
                if (r) Wu(a, !1);
                else {
                  if (0 !== Fs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = la(e))) {
                        for (
                          t.flags |= 128,
                            Wu(a, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (s = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = s.childLanes),
                                (a.lanes = s.lanes),
                                (a.child = s.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = s.memoizedProps),
                                (a.memoizedState = s.memoizedState),
                                (a.updateQueue = s.updateQueue),
                                (a.type = s.type),
                                (e = s.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Oi(sa, (1 & sa.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Je() > qs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = la(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wu(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !s.alternate &&
                        !io)
                    )
                      return $u(t), null;
                  } else
                    2 * Je() - a.renderingStartTime > qs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = a.last) ? (n.sibling = s) : (t.child = s),
                    (a.last = s));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = sa.current),
                  Oi(sa, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($u(t), null);
            case 22:
            case 23:
              return (
                fl(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Is) &&
                    ($u(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $u(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Hu(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ii(t.type) && Ri(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oa(),
                xi(Ni),
                xi(Ci),
                fa(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ua(t), null;
            case 13:
              if (
                (xi(sa),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xi(sa), null;
            case 4:
              return oa(), null;
            case 10:
              return _o(t.type._context), null;
            case 22:
            case 23:
              return fl(), null;
            default:
              return null;
          }
        }
        (Iu = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ru = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), ra(ea.current);
              var o,
                a = null;
              switch (n) {
                case "input":
                  (i = Y(e, i)), (r = Y(e, r)), (a = []);
                  break;
                case "select":
                  (i = A({}, i, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ge(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var s = i[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (u.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var l = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && l !== s && (null != l || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (l && l.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in l)
                        l.hasOwnProperty(o) &&
                          s[o] !== l[o] &&
                          (n || (n = {}), (n[o] = l[o]));
                    } else n || (a || (a = []), a.push(c, n)), (n = l);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((l = l ? l.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != l && s !== l && (a = a || []).push(c, l))
                      : "children" === c
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (a = a || []).push(c, "" + l)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (u.hasOwnProperty(c)
                          ? (null != l && "onScroll" === c && Vr("scroll", e),
                            a || s === l || (a = []))
                          : (a = a || []).push(c, l));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Fu = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yu = !1,
          Gu = !1,
          Ju = "function" === typeof WeakSet ? WeakSet : Set,
          Xu = null;
        function Zu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sl(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Sl(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function is(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[di],
              delete t[pi],
              delete t[vi],
              delete t[yi],
              delete t[mi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function as(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function us(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || as(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function ls(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ls(e, t, n), e = e.sibling; null !== e; )
              ls(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(it, n);
            } catch (u) {}
          switch (n.tag) {
            case 5:
              Gu || Zu(n, t);
            case 6:
              var r = cs,
                i = fs;
              (cs = null),
                ds(e, t, n),
                (fs = i),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? si(e.parentNode, n)
                      : 1 === e.nodeType && si(e, n),
                    qt(e))
                  : si(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (i = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gu &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var o = i,
                    a = o.destroy;
                  (o = o.tag),
                    void 0 !== a &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, a),
                    (i = i.next);
                } while (i !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Gu &&
                (Zu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (u) {
                  Sl(n, t, u);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gu = (r = Gu) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Gu = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ju()),
              t.forEach(function (t) {
                var r = Cl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var a = e,
                  u = t,
                  s = u;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(a, u, i), (cs = null), (fs = !1);
                var l = i.alternate;
                null !== l && (l.return = null), (i.return = null);
              } catch (c) {
                Sl(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), ms(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (y) {
                  Sl(e, e.return, y);
                }
                try {
                  ns(5, e, e.return);
                } catch (y) {
                  Sl(e, e.return, y);
                }
              }
              break;
            case 1:
              vs(t, e), ms(e), 512 & r && null !== n && Zu(n, n.return);
              break;
            case 5:
              if (
                (vs(t, e),
                ms(e),
                512 & r && null !== n && Zu(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  de(i, "");
                } catch (y) {
                  Sl(e, e.return, y);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                  u = null !== n ? n.memoizedProps : a,
                  s = e.type,
                  l = e.updateQueue;
                if (((e.updateQueue = null), null !== l))
                  try {
                    "input" === s &&
                      "radio" === a.type &&
                      null != a.name &&
                      J(i, a),
                      be(s, u);
                    var c = be(s, a);
                    for (u = 0; u < l.length; u += 2) {
                      var f = l[u],
                        d = l[u + 1];
                      "style" === f
                        ? ye(i, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(i, d)
                        : "children" === f
                        ? de(i, d)
                        : b(i, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        X(i, a);
                        break;
                      case "textarea":
                        oe(i, a);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        null != h
                          ? ne(i, !!a.multiple, h, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(i, !!a.multiple, a.defaultValue, !0)
                              : ne(i, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    i[pi] = a;
                  } catch (y) {
                    Sl(e, e.return, y);
                  }
              }
              break;
            case 6:
              if ((vs(t, e), ms(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (i = e.stateNode), (a = e.memoizedProps);
                try {
                  i.nodeValue = a;
                } catch (y) {
                  Sl(e, e.return, y);
                }
              }
              break;
            case 3:
              if (
                (vs(t, e),
                ms(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (y) {
                  Sl(e, e.return, y);
                }
              break;
            case 4:
            default:
              vs(t, e), ms(e);
              break;
            case 13:
              vs(t, e),
                ms(e),
                8192 & (i = e.child).flags &&
                  ((a = null !== i.memoizedState),
                  (i.stateNode.isHidden = a),
                  !a ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Qs = Je())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gu = (c = Gu) || f), vs(t, e), (Gu = c))
                  : vs(t, e),
                ms(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Xu = e, f = e.child; null !== f; ) {
                    for (d = Xu = f; null !== Xu; ) {
                      switch (((h = (p = Xu).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (y) {
                              Sl(r, n, y);
                            }
                          }
                          break;
                        case 5:
                          Zu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ks(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xu = h)) : ks(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (i = d.stateNode),
                          c
                            ? "function" === typeof (a = i.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((s = d.stateNode),
                              (u =
                                void 0 !== (l = d.memoizedProps.style) &&
                                null !== l &&
                                l.hasOwnProperty("display")
                                  ? l.display
                                  : null),
                              (s.style.display = ve("display", u)));
                      } catch (y) {
                        Sl(e, e.return, y);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (y) {
                        Sl(e, e.return, y);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vs(t, e), ms(e), 4 & r && hs(e);
            case 21:
          }
        }
        function ms(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (as(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (de(i, ""), (r.flags &= -33)),
                    ls(e, us(e), i);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  ss(e, us(e), a);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (u) {
              Sl(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gs(e, t, n) {
          (Xu = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xu; ) {
            var i = Xu,
              o = i.child;
            if (22 === i.tag && r) {
              var a = null !== i.memoizedState || Yu;
              if (!a) {
                var u = i.alternate,
                  s = (null !== u && null !== u.memoizedState) || Gu;
                u = Yu;
                var l = Gu;
                if (((Yu = a), (Gu = s) && !l))
                  for (Xu = i; null !== Xu; )
                    (s = (a = Xu).child),
                      22 === a.tag && null !== a.memoizedState
                        ? Es(i)
                        : null !== s
                        ? ((s.return = a), (Xu = s))
                        : Es(i);
                for (; null !== o; ) (Xu = o), bs(o, t, n), (o = o.sibling);
                (Xu = i), (Yu = u), (Gu = l);
              }
              ws(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== o
                ? ((o.return = i), (Xu = o))
                : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Xu; ) {
            var t = Xu;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gu || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gu)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Vo(t, a, r);
                      break;
                    case 3:
                      var u = t.updateQueue;
                      if (null !== u) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Vo(t, u, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && n.focus();
                            break;
                          case "img":
                            l.src && (n.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && qt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gu || (512 & t.flags && is(t));
              } catch (p) {
                Sl(t, t.return, p);
              }
            }
            if (t === e) {
              Xu = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xu = n);
              break;
            }
            Xu = t.return;
          }
        }
        function ks(e) {
          for (; null !== Xu; ) {
            var t = Xu;
            if (t === e) {
              Xu = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xu = n);
              break;
            }
            Xu = t.return;
          }
        }
        function Es(e) {
          for (; null !== Xu; ) {
            var t = Xu;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Sl(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Sl(t, i, s);
                    }
                  }
                  var o = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Sl(t, o, s);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    is(t);
                  } catch (s) {
                    Sl(t, a, s);
                  }
              }
            } catch (s) {
              Sl(t, t.return, s);
            }
            if (t === e) {
              Xu = null;
              break;
            }
            var u = t.sibling;
            if (null !== u) {
              (u.return = t.return), (Xu = u);
              break;
            }
            Xu = t.return;
          }
        }
        var _s,
          Ss = Math.ceil,
          xs = w.ReactCurrentDispatcher,
          Os = w.ReactCurrentOwner,
          Ts = w.ReactCurrentBatchConfig,
          Cs = 0,
          Ns = null,
          Ds = null,
          Ps = 0,
          Is = 0,
          Rs = Si(0),
          Fs = 0,
          js = null,
          Ls = 0,
          As = 0,
          Ms = 0,
          Vs = null,
          zs = null,
          Qs = 0,
          qs = 1 / 0,
          Us = null,
          Bs = !1,
          Ws = null,
          $s = null,
          Ks = !1,
          Hs = null,
          Ys = 0,
          Gs = 0,
          Js = null,
          Xs = -1,
          Zs = 0;
        function el() {
          return 0 !== (6 & Cs) ? Je() : -1 !== Xs ? Xs : (Xs = Je());
        }
        function tl(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cs) && 0 !== Ps
            ? Ps & -Ps
            : null !== yo.transition
            ? (0 === Zs && (Zs = vt()), Zs)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type));
        }
        function nl(e, t, n, r) {
          if (50 < Gs) throw ((Gs = 0), (Js = null), Error(o(185)));
          mt(e, n, r),
            (0 !== (2 & Cs) && e === Ns) ||
              (e === Ns && (0 === (2 & Cs) && (As |= n), 4 === Fs && ul(e, Ps)),
              rl(e, r),
              1 === n &&
                0 === Cs &&
                0 === (1 & t.mode) &&
                ((qs = Je() + 500), Vi && qi()));
        }
        function rl(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var a = 31 - at(o),
                u = 1 << a,
                s = i[a];
              -1 === s
                ? (0 !== (u & n) && 0 === (u & r)) || (i[a] = pt(u, t))
                : s <= t && (e.expiredLanes |= u),
                (o &= ~u);
            }
          })(e, t);
          var r = dt(e, e === Ns ? Ps : 0);
          if (0 === r)
            null !== n && He(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && He(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Vi = !0), Qi(e);
                  })(sl.bind(null, e))
                : Qi(sl.bind(null, e)),
                ai(function () {
                  0 === (6 & Cs) && qi();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nl(n, il.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function il(e, t) {
          if (((Xs = -1), (Zs = 0), 0 !== (6 & Cs))) throw Error(o(327));
          var n = e.callbackNode;
          if (El() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ns ? Ps : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yl(e, r);
          else {
            t = r;
            var i = Cs;
            Cs |= 2;
            var a = hl();
            for (
              (Ns === e && Ps === t) ||
              ((Us = null), (qs = Je() + 500), dl(e, t));
              ;

            )
              try {
                gl();
                break;
              } catch (s) {
                pl(e, s);
              }
            Eo(),
              (xs.current = a),
              (Cs = i),
              null !== Ds ? (t = 0) : ((Ns = null), (Ps = 0), (t = Fs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = ol(e, i))),
              1 === t)
            )
              throw ((n = js), dl(e, 0), ul(e, r), rl(e, Je()), n);
            if (6 === t) ul(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              o = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!ur(o(), i)) return !1;
                            } catch (u) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = yl(e, r)) &&
                    0 !== (a = ht(e)) &&
                    ((r = a), (t = ol(e, a))),
                  1 === t))
              )
                throw ((n = js), dl(e, 0), ul(e, r), rl(e, Je()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  kl(e, zs, Us);
                  break;
                case 3:
                  if (
                    (ul(e, r),
                    (130023424 & r) === r && 10 < (t = Qs + 500 - Je()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      el(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(kl.bind(null, e, zs, Us), t);
                    break;
                  }
                  kl(e, zs, Us);
                  break;
                case 4:
                  if ((ul(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var u = 31 - at(r);
                    (a = 1 << u), (u = t[u]) > i && (i = u), (r &= ~a);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(kl.bind(null, e, zs, Us), r);
                    break;
                  }
                  kl(e, zs, Us);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rl(e, Je()), e.callbackNode === n ? il.bind(null, e) : null;
        }
        function ol(e, t) {
          var n = Vs;
          return (
            e.current.memoizedState.isDehydrated && (dl(e, t).flags |= 256),
            2 !== (e = yl(e, t)) && ((t = zs), (zs = n), null !== t && al(t)),
            e
          );
        }
        function al(e) {
          null === zs ? (zs = e) : zs.push.apply(zs, e);
        }
        function ul(e, t) {
          for (
            t &= ~Ms,
              t &= ~As,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function sl(e) {
          if (0 !== (6 & Cs)) throw Error(o(327));
          El();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rl(e, Je()), null;
          var n = yl(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ol(e, r)));
          }
          if (1 === n) throw ((n = js), dl(e, 0), ul(e, t), rl(e, Je()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kl(e, zs, Us),
            rl(e, Je()),
            null
          );
        }
        function ll(e, t) {
          var n = Cs;
          Cs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cs = n) && ((qs = Je() + 500), Vi && qi());
          }
        }
        function cl(e) {
          null !== Hs && 0 === Hs.tag && 0 === (6 & Cs) && El();
          var t = Cs;
          Cs |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Cs = t)) && qi();
          }
        }
        function fl() {
          (Is = Rs.current), xi(Rs);
        }
        function dl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Ds))
            for (n = Ds.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ri();
                  break;
                case 3:
                  oa(), xi(Ni), xi(Ci), fa();
                  break;
                case 5:
                  ua(r);
                  break;
                case 4:
                  oa();
                  break;
                case 13:
                case 19:
                  xi(sa);
                  break;
                case 10:
                  _o(r.type._context);
                  break;
                case 22:
                case 23:
                  fl();
              }
              n = n.return;
            }
          if (
            ((Ns = e),
            (Ds = e = Rl(e.current, null)),
            (Ps = Is = t),
            (Fs = 0),
            (js = null),
            (Ms = As = Ls = 0),
            (zs = Vs = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  o = n.pending;
                if (null !== o) {
                  var a = o.next;
                  (o.next = i), (r.next = a);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function pl(e, t) {
          for (;;) {
            var n = Ds;
            try {
              if ((Eo(), (da.current = au), ga)) {
                for (var r = va.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                ga = !1;
              }
              if (
                ((ha = 0),
                (ma = ya = va = null),
                (ba = !1),
                (wa = 0),
                (Os.current = null),
                null === n || null === n.return)
              ) {
                (Fs = 1), (js = t), (Ds = null);
                break;
              }
              e: {
                var a = e,
                  u = n.return,
                  s = n,
                  l = t;
                if (
                  ((t = Ps),
                  (s.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var c = l,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = mu(u);
                  if (null !== h) {
                    (h.flags &= -257),
                      gu(h, u, s, 0, t),
                      1 & h.mode && yu(a, c, t),
                      (l = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var y = new Set();
                      y.add(l), (t.updateQueue = y);
                    } else v.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    yu(a, c, t), vl();
                    break e;
                  }
                  l = Error(o(426));
                } else if (io && 1 & s.mode) {
                  var m = mu(u);
                  if (null !== m) {
                    0 === (65536 & m.flags) && (m.flags |= 256),
                      gu(m, u, s, 0, t),
                      vo(cu(l, s));
                    break e;
                  }
                }
                (a = l = cu(l, s)),
                  4 !== Fs && (Fs = 2),
                  null === Vs ? (Vs = [a]) : Vs.push(a),
                  (a = u);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Ao(a, hu(0, l, t));
                      break e;
                    case 1:
                      s = l;
                      var g = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Ao(a, vu(a, s, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              wl(n);
            } catch (w) {
              (t = w), Ds === n && null !== n && (Ds = n = n.return);
              continue;
            }
            break;
          }
        }
        function hl() {
          var e = xs.current;
          return (xs.current = au), null === e ? au : e;
        }
        function vl() {
          (0 !== Fs && 3 !== Fs && 2 !== Fs) || (Fs = 4),
            null === Ns ||
              (0 === (268435455 & Ls) && 0 === (268435455 & As)) ||
              ul(Ns, Ps);
        }
        function yl(e, t) {
          var n = Cs;
          Cs |= 2;
          var r = hl();
          for ((Ns === e && Ps === t) || ((Us = null), dl(e, t)); ; )
            try {
              ml();
              break;
            } catch (i) {
              pl(e, i);
            }
          if ((Eo(), (Cs = n), (xs.current = r), null !== Ds))
            throw Error(o(261));
          return (Ns = null), (Ps = 0), Fs;
        }
        function ml() {
          for (; null !== Ds; ) bl(Ds);
        }
        function gl() {
          for (; null !== Ds && !Ye(); ) bl(Ds);
        }
        function bl(e) {
          var t = _s(e.alternate, e, Is);
          (e.memoizedProps = e.pendingProps),
            null === t ? wl(e) : (Ds = t),
            (Os.current = null);
        }
        function wl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ku(n, t, Is))) return void (Ds = n);
            } else {
              if (null !== (n = Hu(n, t)))
                return (n.flags &= 32767), void (Ds = n);
              if (null === e) return (Fs = 6), void (Ds = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ds = t);
            Ds = t = e;
          } while (null !== t);
          0 === Fs && (Fs = 5);
        }
        function kl(e, t, n) {
          var r = bt,
            i = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  El();
                } while (null !== Hs);
                if (0 !== (6 & Cs)) throw Error(o(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - at(n),
                        o = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
                    }
                  })(e, a),
                  e === Ns && ((Ds = Ns = null), (Ps = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Nl(tt, function () {
                      return El(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = Ts.transition), (Ts.transition = null);
                  var u = bt;
                  bt = 1;
                  var s = Cs;
                  (Cs |= 4),
                    (Os.current = null),
                    (function (e, t) {
                      if (((ei = Bt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var u = 0,
                                s = -1,
                                l = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== i && 3 !== d.nodeType) ||
                                    (s = u + i),
                                    d !== a ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (l = u + r),
                                    3 === d.nodeType &&
                                      (u += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === i && (s = u),
                                    p === a && ++f === r && (l = u),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === l
                                  ? null
                                  : { start: s, end: l };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Bt = !1,
                          Xu = t;
                        null !== Xu;

                      )
                        if (
                          ((e = (t = Xu).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xu = e);
                        else
                          for (; null !== Xu; ) {
                            t = Xu;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var y = v.memoizedProps,
                                        m = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? y
                                            : mo(t.type, y),
                                          m
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Sl(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xu = e);
                              break;
                            }
                            Xu = t.return;
                          }
                      (v = ts), (ts = !1);
                    })(e, n),
                    ys(n, e),
                    hr(ti),
                    (Bt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    gs(n, e, i),
                    Ge(),
                    (Cs = s),
                    (bt = u),
                    (Ts.transition = a);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (Hs = e), (Ys = i)),
                  0 === (a = e.pendingLanes) && ($s = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rl(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((i = t[n]).value, {
                      componentStack: i.stack,
                      digest: i.digest,
                    });
                if (Bs) throw ((Bs = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && El(),
                  0 !== (1 & (a = e.pendingLanes))
                    ? e === Js
                      ? Gs++
                      : ((Gs = 0), (Js = e))
                    : (Gs = 0),
                  qi();
              })(e, t, n, r);
          } finally {
            (Ts.transition = i), (bt = r);
          }
          return null;
        }
        function El() {
          if (null !== Hs) {
            var e = wt(Ys),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Hs))
                var r = !1;
              else {
                if (((e = Hs), (Hs = null), (Ys = 0), 0 !== (6 & Cs)))
                  throw Error(o(331));
                var i = Cs;
                for (Cs |= 4, Xu = e.current; null !== Xu; ) {
                  var a = Xu,
                    u = a.child;
                  if (0 !== (16 & Xu.flags)) {
                    var s = a.deletions;
                    if (null !== s) {
                      for (var l = 0; l < s.length; l++) {
                        var c = s[l];
                        for (Xu = c; null !== Xu; ) {
                          var f = Xu;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, a);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Xu = d);
                          else
                            for (; null !== Xu; ) {
                              var p = (f = Xu).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                Xu = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xu = p);
                                break;
                              }
                              Xu = h;
                            }
                        }
                      }
                      var v = a.alternate;
                      if (null !== v) {
                        var y = v.child;
                        if (null !== y) {
                          v.child = null;
                          do {
                            var m = y.sibling;
                            (y.sibling = null), (y = m);
                          } while (null !== y);
                        }
                      }
                      Xu = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== u)
                    (u.return = a), (Xu = u);
                  else
                    e: for (; null !== Xu; ) {
                      if (0 !== (2048 & (a = Xu).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, a, a.return);
                        }
                      var g = a.sibling;
                      if (null !== g) {
                        (g.return = a.return), (Xu = g);
                        break e;
                      }
                      Xu = a.return;
                    }
                }
                var b = e.current;
                for (Xu = b; null !== Xu; ) {
                  var w = (u = Xu).child;
                  if (0 !== (2064 & u.subtreeFlags) && null !== w)
                    (w.return = u), (Xu = w);
                  else
                    e: for (u = b; null !== Xu; ) {
                      if (0 !== (2048 & (s = Xu).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (E) {
                          Sl(s, s.return, E);
                        }
                      if (s === u) {
                        Xu = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Xu = k);
                        break e;
                      }
                      Xu = s.return;
                    }
                }
                if (
                  ((Cs = i),
                  qi(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(it, e);
                  } catch (E) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function _l(e, t, n) {
          (e = jo(e, (t = hu(0, (t = cu(n, t)), 1)), 1)),
            (t = el()),
            null !== e && (mt(e, 1, t), rl(e, t));
        }
        function Sl(e, t, n) {
          if (3 === e.tag) _l(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _l(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (t = jo(t, (e = vu(t, (e = cu(n, e)), 1)), 1)),
                    (e = el()),
                    null !== t && (mt(t, 1, e), rl(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = el()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ns === e &&
              (Ps & n) === n &&
              (4 === Fs ||
              (3 === Fs && (130023424 & Ps) === Ps && 500 > Je() - Qs)
                ? dl(e, 0)
                : (Ms |= n)),
            rl(e, t);
        }
        function Ol(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = el();
          null !== (e = Do(e, t)) && (mt(e, t, n), rl(e, n));
        }
        function Tl(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ol(e, n);
        }
        function Cl(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ol(e, n);
        }
        function Nl(e, t) {
          return Ke(e, t);
        }
        function Dl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Pl(e, t, n, r) {
          return new Dl(e, t, n, r);
        }
        function Il(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Pl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fl(e, t, n, r, i, a) {
          var u = 2;
          if (((r = e), "function" === typeof e)) Il(e) && (u = 1);
          else if ("string" === typeof e) u = 5;
          else
            e: switch (e) {
              case _:
                return jl(n.children, i, a, t);
              case S:
                (u = 8), (i |= 8);
                break;
              case x:
                return (
                  ((e = Pl(12, n, t, 2 | i)).elementType = x), (e.lanes = a), e
                );
              case N:
                return (
                  ((e = Pl(13, n, t, i)).elementType = N), (e.lanes = a), e
                );
              case D:
                return (
                  ((e = Pl(19, n, t, i)).elementType = D), (e.lanes = a), e
                );
              case R:
                return Ll(n, i, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      u = 10;
                      break e;
                    case T:
                      u = 9;
                      break e;
                    case C:
                      u = 11;
                      break e;
                    case P:
                      u = 14;
                      break e;
                    case I:
                      (u = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Pl(u, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function jl(e, t, n, r) {
          return ((e = Pl(7, e, r, t)).lanes = n), e;
        }
        function Ll(e, t, n, r) {
          return (
            ((e = Pl(22, e, r, t)).elementType = R),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Al(e, t, n) {
          return ((e = Pl(6, e, null, t)).lanes = n), e;
        }
        function Ml(e, t, n) {
          return (
            ((t = Pl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Vl(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zl(e, t, n, r, i, o, a, u, s) {
          return (
            (e = new Vl(e, t, n, u, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Pl(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Io(o),
            e
          );
        }
        function Ql(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function ql(e) {
          if (!e) return Ti;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ii(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ii(n)) return ji(e, n, t);
          }
          return t;
        }
        function Ul(e, t, n, r, i, o, a, u, s) {
          return (
            ((e = zl(n, r, !0, e, 0, o, 0, u, s)).context = ql(null)),
            (n = e.current),
            ((o = Fo((r = el()), (i = tl(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            jo(n, o, i),
            (e.current.lanes = i),
            mt(e, i, r),
            rl(e, r),
            e
          );
        }
        function Bl(e, t, n, r) {
          var i = t.current,
            o = el(),
            a = tl(i);
          return (
            (n = ql(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fo(o, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = jo(i, t, a)) && (nl(e, i, a, o), Lo(e, i, a)),
            a
          );
        }
        function Wl(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function $l(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Kl(e, t) {
          $l(e, t), (e = e.alternate) && $l(e, t);
        }
        _s = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ni.current) wu = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wu = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Du(t), ho();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Ii(t.type) && Li(t);
                        break;
                      case 4:
                        ia(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Oi(go, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Oi(sa, 1 & sa.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Au(e, t, n)
                            : (Oi(sa, 1 & sa.current),
                              null !== (e = Bu(e, t, n)) ? e.sibling : null);
                        Oi(sa, 1 & sa.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return qu(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Oi(sa, sa.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xu(e, t, n);
                    }
                    return Bu(e, t, n);
                  })(e, t, n)
                );
              wu = 0 !== (131072 & e.flags);
            }
          else (wu = !1), io && 0 !== (1048576 & t.flags) && Zi(t, $i, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Uu(e, t), (e = t.pendingProps);
              var i = Pi(t, Ci.current);
              xo(t, n), (i = Sa(null, t, r, e, i, n));
              var a = xa();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ii(r) ? ((a = !0), Li(t)) : (a = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Io(t),
                    (i.updater = qo),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    $o(t, r, e, n),
                    (t = Nu(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    io && a && eo(t),
                    ku(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Uu(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Il(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === P) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mo(r, e)),
                  i)
                ) {
                  case 0:
                    t = Tu(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Cu(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Eu(null, t, r, e, n);
                    break e;
                  case 14:
                    t = _u(null, t, r, mo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Tu(e, t, r, (i = t.elementType === r ? i : mo(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cu(e, t, r, (i = t.elementType === r ? i : mo(r, i)), n)
              );
            case 3:
              e: {
                if ((Du(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (i = (a = t.memoizedState).element),
                  Ro(e, t),
                  Mo(t, r, null, n);
                var u = t.memoizedState;
                if (((r = u.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: u.cache,
                      pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                      transitions: u.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Pu(e, t, r, n, (i = cu(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Pu(e, t, r, n, (i = cu(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = li(t.stateNode.containerInfo.firstChild),
                      no = t,
                      io = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === i)) {
                    t = Bu(e, t, n);
                    break e;
                  }
                  ku(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && lo(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (u = i.children),
                ni(r, i)
                  ? (u = null)
                  : null !== a && ni(r, a) && (t.flags |= 32),
                Ou(e, t),
                ku(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && lo(t), null;
            case 13:
              return Au(e, t, n);
            case 4:
              return (
                ia(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Jo(t, null, r, n)) : ku(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Eu(e, t, r, (i = t.elementType === r ? i : mo(r, i)), n)
              );
            case 7:
              return ku(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ku(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (a = t.memoizedProps),
                  (u = i.value),
                  Oi(go, r._currentValue),
                  (r._currentValue = u),
                  null !== a)
                )
                  if (ur(a.value, u)) {
                    if (a.children === i.children && !Ni.current) {
                      t = Bu(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var s = a.dependencies;
                      if (null !== s) {
                        u = a.child;
                        for (var l = s.firstContext; null !== l; ) {
                          if (l.context === r) {
                            if (1 === a.tag) {
                              (l = Fo(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (l.next = l)
                                  : ((l.next = f.next), (f.next = l)),
                                  (c.pending = l);
                              }
                            }
                            (a.lanes |= n),
                              null !== (l = a.alternate) && (l.lanes |= n),
                              So(a.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === a.tag)
                        u = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (u = a.return)) throw Error(o(341));
                        (u.lanes |= n),
                          null !== (s = u.alternate) && (s.lanes |= n),
                          So(u, n, t),
                          (u = a.sibling);
                      } else u = a.child;
                      if (null !== u) u.return = a;
                      else
                        for (u = a; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (a = u.sibling)) {
                            (a.return = u.return), (u = a);
                            break;
                          }
                          u = u.return;
                        }
                      a = u;
                    }
                ku(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                xo(t, n),
                (r = r((i = Oo(i)))),
                (t.flags |= 1),
                ku(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = mo((r = t.type), t.pendingProps)),
                _u(e, t, r, (i = mo(r.type, i)), n)
              );
            case 15:
              return Su(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : mo(r, i)),
                Uu(e, t),
                (t.tag = 1),
                Ii(r) ? ((e = !0), Li(t)) : (e = !1),
                xo(t, n),
                Bo(t, r, i),
                $o(t, r, i, n),
                Nu(null, t, r, !0, e, n)
              );
            case 19:
              return qu(e, t, n);
            case 22:
              return xu(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Hl =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yl(e) {
          this._internalRoot = e;
        }
        function Gl(e) {
          this._internalRoot = e;
        }
        function Jl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zl() {}
        function ec(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o;
            if ("function" === typeof i) {
              var u = i;
              i = function () {
                var e = Wl(a);
                u.call(e);
              };
            }
            Bl(t, a, e, i);
          } else
            a = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wl(a);
                    o.call(e);
                  };
                }
                var a = Ul(t, r, e, 0, null, !1, 0, "", Zl);
                return (
                  (e._reactRootContainer = a),
                  (e[hi] = a.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  cl(),
                  a
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var u = r;
                r = function () {
                  var e = Wl(s);
                  u.call(e);
                };
              }
              var s = zl(e, 0, !1, null, 0, !1, 0, "", Zl);
              return (
                (e._reactRootContainer = s),
                (e[hi] = s.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                cl(function () {
                  Bl(t, s, n, r);
                }),
                s
              );
            })(n, t, e, i, r);
          return Wl(a);
        }
        (Gl.prototype.render = Yl.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Bl(e, t, null, null);
          }),
          (Gl.prototype.unmount = Yl.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cl(function () {
                  Bl(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Gl.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Rt.length && 0 !== t && t < Rt[n].priority;
                n++
              );
              Rt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    rl(t, Je()),
                    0 === (6 & Cs) && ((qs = Je() + 500), qi()));
                }
                break;
              case 13:
                cl(function () {
                  var t = Do(e, 1);
                  if (null !== t) {
                    var n = el();
                    nl(t, e, 1, n);
                  }
                }),
                  Kl(e, 1);
            }
          }),
          (Et = function (e) {
            if (13 === e.tag) {
              var t = Do(e, 134217728);
              if (null !== t) nl(t, e, 134217728, el());
              Kl(e, 134217728);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = tl(e),
                n = Do(e, t);
              if (null !== n) nl(n, e, t, el());
              Kl(e, t);
            }
          }),
          (St = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Ee = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ki(r);
                      if (!i) throw Error(o(90));
                      K(r), X(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = ll),
          (Ne = cl);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, wi, ki, Oe, Te, ll],
          },
          nc = {
            findFiberByHostInstance: gi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (ot = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jl(t)) throw Error(o(200));
            return Ql(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Jl(e)) throw Error(o(299));
            var n = !1,
              r = "",
              i = Hl;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = zl(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Yl(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cl(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xl(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Jl(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              a = "",
              u = Hl;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError)),
              (t = Ul(t, null, e, 1, null != n ? n : null, i, 0, a, u)),
              (e[hi] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Gl(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xl(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xl(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cl(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ll),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xl(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          i = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          u =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, n) {
          var r,
            o = {},
            l = null,
            c = null;
          for (r in (void 0 !== n && (l = "" + n),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: l,
            ref: c,
            props: o,
            _owner: u.current,
          };
        }
        (t.Fragment = o), (t.jsx = l), (t.jsxs = l);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          y = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = y),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = m.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, m.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          E = Object.prototype.hasOwnProperty,
          _ = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var i,
            o = {},
            a = null,
            u = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              E.call(t, i) && !S.hasOwnProperty(i) && (o[i] = t[i]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
            o.children = l;
          }
          if (e && e.defaultProps)
            for (i in (s = e.defaultProps)) void 0 === o[i] && (o[i] = s[i]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: u,
            props: o,
            _owner: _.current,
          };
        }
        function O(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, i, o, a) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (u) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (a = a((s = e))),
              (e = "" === o ? "." + C(s, 0) : o),
              k(a)
                ? ((i = ""),
                  null != e && (i = e.replace(T, "$&/") + "/"),
                  N(a, t, i, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (O(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      i +
                        (!a.key || (s && s.key === a.key)
                          ? ""
                          : ("" + a.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), k(e)))
            for (var l = 0; l < e.length; l++) {
              var c = o + C((u = e[l]), l);
              s += N(u, t, i, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), l = 0; !(u = e.next()).done; )
              s += N((u = u.value), t, i, (c = o + C(u, l++)), a);
          else if ("object" === u)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function D(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          R = { transition: null },
          F = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: R,
            ReactCurrentOwner: _,
          };
        (t.Children = {
          map: D,
          forEach: function (e, t, n) {
            D(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              D(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              D(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = m),
          (t.Fragment = i),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = v({}, e.props),
              o = e.key,
              a = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (u = _.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (l in t)
                E.call(t, l) &&
                  !S.hasOwnProperty(l) &&
                  (i[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) i.children = r;
            else if (1 < l) {
              s = Array(l);
              for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: a,
              props: i,
              _owner: u,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: u, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = R.transition;
            R.transition = {};
            try {
              e();
            } finally {
              R.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < o(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
              var u = 2 * (r + 1) - 1,
                s = e[u],
                l = u + 1,
                c = e[l];
              if (0 > o(s, n))
                l < i && 0 > o(c, s)
                  ? ((e[r] = c), (e[l] = n), (r = l))
                  : ((e[r] = s), (e[u] = n), (r = u));
              else {
                if (!(l < i && 0 > o(c, n))) break e;
                (e[r] = c), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var u = Date,
            s = u.now();
          t.unstable_now = function () {
            return u.now() - s;
          };
        }
        var l = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          y = !1,
          m = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(l, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((y = !1), w(e), !v))
            if (null !== r(l)) (v = !0), R(E);
            else {
              var t = r(c);
              null !== t && F(k, t.startTime - e);
            }
        }
        function E(e, n) {
          (v = !1), y && ((y = !1), g(O), (O = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(l);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var a = d.callback;
              if ("function" === typeof a) {
                (d.callback = null), (p = d.priorityLevel);
                var u = a(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof u
                    ? (d.callback = u)
                    : d === r(l) && i(l),
                  w(n);
              } else i(l);
              d = r(l);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && F(k, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var _,
          S = !1,
          x = null,
          O = -1,
          T = 5,
          C = -1;
        function N() {
          return !(t.unstable_now() - C < T);
        }
        function D() {
          if (null !== x) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? _() : ((S = !1), (x = null));
            }
          } else S = !1;
        }
        if ("function" === typeof b)
          _ = function () {
            b(D);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var P = new MessageChannel(),
            I = P.port2;
          (P.port1.onmessage = D),
            (_ = function () {
              I.postMessage(null);
            });
        } else
          _ = function () {
            m(D, 0);
          };
        function R(e) {
          (x = e), S || ((S = !0), _());
        }
        function F(e, n) {
          O = m(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), R(E));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(l);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a)
                : (o = a),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (u = o + u),
                sortIndex: -1,
              }),
              o > a
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(l) &&
                    e === r(c) &&
                    (y ? (g(O), (O = -1)) : (y = !0), F(k, o - a)))
                : ((e.sortIndex = u), n(l, e), v || h || ((v = !0), R(E))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, i) {
        if ((1 & i && (r = this(r)), 8 & i)) return r;
        if ("object" === typeof r && r) {
          if (4 & i && r.__esModule) return r;
          if (16 & i && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var a = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var u = 2 & i && r;
          "object" == typeof u && !~e.indexOf(u);
          u = t(u)
        )
          Object.getOwnPropertyNames(u).forEach(function (e) {
            a[e] = function () {
              return r[e];
            };
          });
        return (
          (a.default = function () {
            return r;
          }),
          n.d(o, a),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".ca497ad5.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "where-were-you-when:";
      n.l = function (r, i, o, a) {
        if (e[r]) e[r].push(i);
        else {
          var u, s;
          if (void 0 !== o)
            for (
              var l = document.getElementsByTagName("script"), c = 0;
              c < l.length;
              c++
            ) {
              var f = l[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                u = f;
                break;
              }
            }
          u ||
            ((s = !0),
            ((u = document.createElement("script")).charset = "utf-8"),
            (u.timeout = 120),
            n.nc && u.setAttribute("nonce", n.nc),
            u.setAttribute("data-webpack", t + o),
            (u.src = r)),
            (e[r] = [i]);
          var d = function (t, n) {
              (u.onerror = u.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                u.parentNode && u.parentNode.removeChild(u),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: u }),
              12e4
            );
          (u.onerror = d.bind(null, u.onerror)),
            (u.onload = d.bind(null, u.onload)),
            s && document.head.appendChild(u);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var o = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = o));
            var a = n.p + n.u(t),
              u = new Error();
            n.l(
              a,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (u.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (u.name = "ChunkLoadError"),
                    (u.type = o),
                    (u.request = a),
                    i[1](u);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var i,
            o,
            a = r[0],
            u = r[1],
            s = r[2],
            l = 0;
          if (
            a.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in u) n.o(u, i) && (n.m[i] = u[i]);
            if (s) s(n);
          }
          for (t && t(r); l < a.length; l++)
            (o = a[l]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkwhere_were_you_when =
          self.webpackChunkwhere_were_you_when || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        i = n(250);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? s(e, t)
              : void 0
          );
        }
      }
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return s(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t, n) {
        return (
          t && d(e.prototype, t),
          n && d(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function h(e, t) {
        return (
          (h = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          h(e, t)
        );
      }
      function v(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && h(e, t);
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function m() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (ea) {
          return !1;
        }
      }
      function g(e) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          g(e)
        );
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function w(e, t) {
        if (t && ("object" === g(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return b(e);
      }
      function k(e) {
        var t = m();
        return function () {
          var n,
            r = y(e);
          if (t) {
            var i = y(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return w(this, n);
        };
      }
      function E(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                i,
                o = [],
                a = !0,
                u = !1;
              try {
                for (
                  n = n.call(e);
                  !(a = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  a = !0
                );
              } catch (s) {
                (u = !0), (i = s);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (u) throw i;
                }
              }
              return o;
            }
          })(e, t) ||
          l(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(e, t, n) {
        return (
          (_ = m()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                return n && h(i, n.prototype), i;
              }),
          _.apply(null, arguments)
        );
      }
      function S(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (S = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return _(e, arguments, y(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              h(r, e)
            );
          }),
          S(e)
        );
      }
      function x() {
        return (
          (x = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          x.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var O;
      function T(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          i = void 0 === r ? "" : r,
          o = e.hash,
          a = void 0 === o ? "" : o;
        return (
          i && "?" !== i && (n += "?" === i.charAt(0) ? i : "?" + i),
          a && "#" !== a && (n += "#" === a.charAt(0) ? a : "#" + a),
          n
        );
      }
      function C(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function N(e, t, n) {
        void 0 === n && (n = "/");
        var r = (function (e, t) {
          if ("/" === t) return e;
          if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
          var n = t.endsWith("/") ? t.length - 1 : t.length,
            r = e.charAt(n);
          if (r && "/" !== r) return null;
          return e.slice(n) || "/";
        })(("string" === typeof t ? C(t) : t).pathname || "/", n);
        if (null == r) return null;
        var i = D(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(i);
        for (var o = null, a = 0; null == o && a < i.length; ++a)
          o = F(i[a], r);
        return o;
      }
      function D(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, i) {
            var o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: i,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (L(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            var a = V([r, o.relativePath]),
              u = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (L(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  a +
                  '".'
              ),
              D(e.children, t, u, a)),
              (null != e.path || e.index) &&
                t.push({ path: a, score: R(a, e.index), routesMeta: u });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(O || (O = {}));
      var P = /^:\w+$/,
        I = function (e) {
          return "*" === e;
        };
      function R(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(I) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !I(e);
            })
            .reduce(function (e, t) {
              return e + (P.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function F(e, t) {
        for (
          var n = e.routesMeta, r = {}, i = "/", o = [], a = 0;
          a < n.length;
          ++a
        ) {
          var u = n[a],
            s = a === n.length - 1,
            l = "/" === i ? t : t.slice(i.length) || "/",
            c = j(
              { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
              l
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = u.route;
          o.push({
            params: r,
            pathname: V([i, c.pathname]),
            pathnameBase: z(V([i, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (i = V([i, c.pathnameBase]));
        }
        return o;
      }
      function j(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            A(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              i =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (i += n ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(i, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = E(n, 2),
          i = r[0],
          o = r[1],
          a = t.match(i);
        if (!a) return null;
        var u = a[0],
          s = u.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = l[n] || "";
              s = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    A(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(l[n] || "", t)),
              e
            );
          }, {}),
          pathname: u,
          pathnameBase: s,
          pattern: e,
        };
      }
      function L(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function A(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (ea) {}
        }
      }
      function M(e, t, n, r) {
        void 0 === r && (r = !1);
        var i,
          o = "string" === typeof e ? C(e) : x({}, e),
          a = "" === e || "" === o.pathname,
          u = a ? "/" : o.pathname;
        if (r || null == u) i = n;
        else {
          var s = t.length - 1;
          if (u.startsWith("..")) {
            for (var l = u.split("/"); ".." === l[0]; ) l.shift(), (s -= 1);
            o.pathname = l.join("/");
          }
          i = s >= 0 ? t[s] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? C(e) : e,
              r = n.pathname,
              i = n.search,
              o = void 0 === i ? "" : i,
              a = n.hash,
              u = void 0 === a ? "" : a,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: Q(o), hash: q(u) };
          })(o, i),
          f = u && "/" !== u && u.endsWith("/"),
          d = (a || "." === u) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var V = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        z = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        Q = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        q = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        U = (function (e) {
          v(n, e);
          var t = k(n);
          function n() {
            return f(this, n), t.apply(this, arguments);
          }
          return p(n);
        })(S(Error));
      var B = p(function e(t, n, r) {
        f(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = r);
      });
      function W(e) {
        return e instanceof B;
      }
      function $() {
        return (
          ($ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $.apply(this, arguments)
        );
      }
      var K =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        H = t.useState,
        Y = t.useEffect,
        G = t.useLayoutEffect,
        J = t.useDebugValue;
      function X(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !K(n, r);
        } catch (i) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var Z = t.createContext(null);
      var ee = t.createContext(null);
      var te = t.createContext(null);
      var ne = t.createContext(null);
      var re = t.createContext(null);
      var ie = t.createContext(null);
      var oe = t.createContext({ outlet: null, matches: [] });
      var ae = t.createContext(null);
      function ue() {
        return null != t.useContext(ie);
      }
      function se() {
        return ue() || L(!1), t.useContext(ie).location;
      }
      function le(e) {
        return e.filter(function (t, n) {
          return (
            0 === n ||
            (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
          );
        });
      }
      function ce() {
        ue() || L(!1);
        var e = t.useContext(re),
          n = e.basename,
          r = e.navigator,
          i = t.useContext(oe).matches,
          o = se().pathname,
          a = JSON.stringify(
            le(i).map(function (e) {
              return e.pathnameBase;
            })
          ),
          u = t.useRef(!1);
        return (
          t.useEffect(function () {
            u.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), u.current))
                if ("number" !== typeof e) {
                  var i = M(e, JSON.parse(a), o, "path" === t.relative);
                  "/" !== n &&
                    (i.pathname = "/" === i.pathname ? n : V([n, i.pathname])),
                    (t.replace ? r.replace : r.push)(i, t.state, t);
                } else r.go(e);
            },
            [n, r, a, o]
          )
        );
      }
      function fe(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          i = t.useContext(oe).matches,
          o = se().pathname,
          a = JSON.stringify(
            le(i).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return M(e, JSON.parse(a), o, "path" === r);
          },
          [e, a, o, r]
        );
      }
      function de() {
        var e = (function () {
            var e,
              n = t.useContext(ae),
              r = me(pe.UseRouteError),
              i = t.useContext(oe),
              o = i.matches[i.matches.length - 1];
            if (n) return n;
            return (
              i || L(!1),
              !o.route.id && L(!1),
              null == (e = r.errors) ? void 0 : e[o.route.id]
            );
          })(),
          n = W(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          i = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: i },
          a = { padding: "2px 4px", backgroundColor: i };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: a }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: a }, "<Route>")
          )
        );
      }
      var pe,
        he = (function (e) {
          v(r, e);
          var n = k(r);
          function r(e) {
            var t;
            return (
              f(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            p(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(ae.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function ve(e) {
        var n = e.routeContext,
          r = e.match,
          i = e.children,
          o = t.useContext(Z);
        return (
          o &&
            r.route.errorElement &&
            (o._deepestRenderedBoundaryId = r.route.id),
          t.createElement(oe.Provider, { value: n }, i)
        );
      }
      function ye(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var i = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var a = i.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          a >= 0 || L(!1), (i = i.slice(0, Math.min(i.length, a + 1)));
        }
        return i.reduceRight(function (e, a, u) {
          var s = a.route.id ? (null == o ? void 0 : o[a.route.id]) : null,
            l = r ? a.route.errorElement || t.createElement(de, null) : null,
            c = function () {
              return t.createElement(
                ve,
                {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(i.slice(0, u + 1)),
                  },
                },
                s ? l : void 0 !== a.route.element ? a.route.element : e
              );
            };
          return r && (a.route.errorElement || 0 === u)
            ? t.createElement(he, {
                location: r.location,
                component: l,
                error: s,
                children: c(),
              })
            : c();
        }, null);
      }
      function me(e) {
        var n = t.useContext(te);
        return n || L(!1), n;
      }
      !(function (e) {
        (e.UseLoaderData = "useLoaderData"),
          (e.UseActionData = "useActionData"),
          (e.UseRouteError = "useRouteError"),
          (e.UseNavigation = "useNavigation"),
          (e.UseRouteLoaderData = "useRouteLoaderData"),
          (e.UseMatches = "useMatches"),
          (e.UseRevalidator = "useRevalidator");
      })(pe || (pe = {}));
      var ge;
      function be(e) {
        var n = e.to,
          r = e.replace,
          i = e.state,
          o = e.relative;
        ue() || L(!1);
        var a = t.useContext(te),
          u = ce();
        return (
          t.useEffect(function () {
            (a && "idle" !== a.navigation.state) ||
              u(n, { replace: r, state: i, relative: o });
          }),
          null
        );
      }
      function we(e) {
        L(!1);
      }
      function ke(n) {
        var r = n.children,
          i = n.location,
          o = t.useContext(ee);
        return (function (n, r) {
          ue() || L(!1);
          var i,
            o = t.useContext(te),
            a = t.useContext(oe).matches,
            u = a[a.length - 1],
            s = u ? u.params : {},
            l = (u && u.pathname, u ? u.pathnameBase : "/"),
            c = (u && u.route, se());
          if (r) {
            var f,
              d = "string" === typeof r ? C(r) : r;
            "/" === l ||
              (null == (f = d.pathname) ? void 0 : f.startsWith(l)) ||
              L(!1),
              (i = d);
          } else i = c;
          var p = i.pathname || "/",
            h = N(n, { pathname: "/" === l ? p : p.slice(l.length) || "/" }),
            v = ye(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: V([l, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? l : V([l, e.pathnameBase]),
                  });
                }),
              a,
              o || void 0
            );
          return r
            ? t.createElement(
                ie.Provider,
                {
                  value: {
                    location: $(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      i
                    ),
                    navigationType: e.Pop,
                  },
                },
                v
              )
            : v;
        })(o && !r ? o.router.routes : _e(r), i);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(ge || (ge = {}));
      var Ee = new Promise(function () {});
      t.Component;
      function _e(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, i) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== we && L(!1);
                var o = [].concat(c(n), [i]),
                  a = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (a.children = _e(e.props.children, o)),
                  r.push(a);
              } else r.push.apply(r, _e(e.props.children, n));
          }),
          r
        );
      }
      var Se = function (e, t) {
        return (
          (Se =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          Se(e, t)
        );
      };
      function xe(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        Se(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var Oe = function () {
        return (
          (Oe =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Oe.apply(this, arguments)
        );
      };
      function Te(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function Ce(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e));
            } catch (ea) {
              o(ea);
            }
          }
          function u(e) {
            try {
              s(r.throw(e));
            } catch (ea) {
              o(ea);
            }
          }
          function s(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, u);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function Ne(e, t) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (ea) {
                  (o = [6, ea]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      }
      Object.create;
      function De(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var Pe = "Invariant Violation",
        Ie = Object.setPrototypeOf,
        Re =
          void 0 === Ie
            ? function (e, t) {
                return (e.__proto__ = t), e;
              }
            : Ie,
        Fe = (function (e) {
          function t(n) {
            void 0 === n && (n = Pe);
            var r =
              e.call(
                this,
                "number" === typeof n
                  ? Pe +
                      ": " +
                      n +
                      " (see https://github.com/apollographql/invariant-packages)"
                  : n
              ) || this;
            return (r.framesToPop = 1), (r.name = Pe), Re(r, t.prototype), r;
          }
          return xe(t, e), t;
        })(Error);
      function je(e, t) {
        if (!e) throw new Fe(t);
      }
      var Le = ["debug", "log", "warn", "error", "silent"],
        Ae = Le.indexOf("log");
      function Me(e) {
        return function () {
          if (Le.indexOf(e) >= Ae) {
            var t = console[e] || console.log;
            return t.apply(console, arguments);
          }
        };
      }
      !(function (e) {
        (e.debug = Me("debug")),
          (e.log = Me("log")),
          (e.warn = Me("warn")),
          (e.error = Me("error"));
      })(je || (je = {}));
      function Ve(e) {
        try {
          return e();
        } catch (Ie) {}
      }
      var ze =
          Ve(function () {
            return globalThis;
          }) ||
          Ve(function () {
            return window;
          }) ||
          Ve(function () {
            return self;
          }) ||
          Ve(function () {
            return global;
          }) ||
          Ve(function () {
            return Ve.constructor("return this")();
          }),
        Qe = "__",
        qe = [Qe, Qe].join("DEV");
      var Ue = (function () {
        try {
          return Boolean(__DEV__);
        } catch (Ie) {
          return (
            Object.defineProperty(ze, qe, {
              value:
                "production" !==
                Ve(function () {
                  return "production";
                }),
              enumerable: !1,
              configurable: !0,
              writable: !0,
            }),
            ze[qe]
          );
        }
      })();
      function Be(e) {
        try {
          return e();
        } catch (t) {}
      }
      var We =
          Be(function () {
            return globalThis;
          }) ||
          Be(function () {
            return window;
          }) ||
          Be(function () {
            return self;
          }) ||
          Be(function () {
            return global;
          }) ||
          Be(function () {
            return Be.constructor("return this")();
          }),
        $e = !1;
      function Ke() {
        $e && (delete We.process, ($e = !1));
      }
      function He(e, t) {
        if (!Boolean(e)) throw new Error(t);
      }
      !We ||
        Be(function () {
          return "production";
        }) ||
        Be(function () {
          return process;
        }) ||
        (Object.defineProperty(We, "process", {
          value: { env: { NODE_ENV: "production" } },
          configurable: !0,
          enumerable: !1,
          writable: !0,
        }),
        ($e = !0));
      function Ye(e) {
        return Ge(e, []);
      }
      function Ge(e, t) {
        switch (typeof e) {
          case "string":
            return JSON.stringify(e);
          case "function":
            return e.name ? "[function ".concat(e.name, "]") : "[function]";
          case "object":
            return (function (e, t) {
              if (null === e) return "null";
              if (t.includes(e)) return "[Circular]";
              var n = [].concat(c(t), [e]);
              if (
                (function (e) {
                  return "function" === typeof e.toJSON;
                })(e)
              ) {
                var r = e.toJSON();
                if (r !== e) return "string" === typeof r ? r : Ge(r, n);
              } else if (Array.isArray(e))
                return (function (e, t) {
                  if (0 === e.length) return "[]";
                  if (t.length > 2) return "[Array]";
                  for (
                    var n = Math.min(10, e.length),
                      r = e.length - n,
                      i = [],
                      o = 0;
                    o < n;
                    ++o
                  )
                    i.push(Ge(e[o], t));
                  1 === r
                    ? i.push("... 1 more item")
                    : r > 1 && i.push("... ".concat(r, " more items"));
                  return "[" + i.join(", ") + "]";
                })(e, n);
              return (function (e, t) {
                var n = Object.entries(e);
                if (0 === n.length) return "{}";
                if (t.length > 2)
                  return (
                    "[" +
                    (function (e) {
                      var t = Object.prototype.toString
                        .call(e)
                        .replace(/^\[object /, "")
                        .replace(/]$/, "");
                      if (
                        "Object" === t &&
                        "function" === typeof e.constructor
                      ) {
                        var n = e.constructor.name;
                        if ("string" === typeof n && "" !== n) return n;
                      }
                      return t;
                    })(e) +
                    "]"
                  );
                var r = n.map(function (e) {
                  var n = E(e, 2);
                  return n[0] + ": " + Ge(n[1], t);
                });
                return "{ " + r.join(", ") + " }";
              })(e, n);
            })(e, t);
          default:
            return String(e);
        }
      }
      var Je = function (e, t) {
          return e instanceof t;
        },
        Xe = (function (e) {
          function t(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "GraphQL request",
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { line: 1, column: 1 };
            f(this, t),
              "string" === typeof e ||
                He(!1, "Body must be a string. Received: ".concat(Ye(e), ".")),
              (this.body = e),
              (this.name = n),
              (this.locationOffset = r),
              this.locationOffset.line > 0 ||
                He(
                  !1,
                  "line in locationOffset is 1-indexed and must be positive."
                ),
              this.locationOffset.column > 0 ||
                He(
                  !1,
                  "column in locationOffset is 1-indexed and must be positive."
                );
          }
          return (
            p(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Source";
                },
              },
            ]),
            t
          );
        })();
      function Ze(e) {
        return Je(e, Xe);
      }
      function et(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = l(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              i = function () {};
            return {
              s: i,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: i,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      Ke(),
        __DEV__
          ? je("boolean" === typeof Ue, Ue)
          : je("boolean" === typeof Ue, 36);
      var tt,
        nt,
        rt = (function (e) {
          function t(e, n, r) {
            f(this, t),
              (this.start = e.start),
              (this.end = n.end),
              (this.startToken = e),
              (this.endToken = n),
              (this.source = r);
          }
          return (
            p(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Location";
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return { start: this.start, end: this.end };
                },
              },
            ]),
            t
          );
        })(),
        it = (function (e) {
          function t(e, n, r, i, o, a) {
            f(this, t),
              (this.kind = e),
              (this.start = n),
              (this.end = r),
              (this.line = i),
              (this.column = o),
              (this.value = a),
              (this.prev = null),
              (this.next = null);
          }
          return (
            p(t, [
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Token";
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    kind: this.kind,
                    value: this.value,
                    line: this.line,
                    column: this.column,
                  };
                },
              },
            ]),
            t
          );
        })(),
        ot = {
          Name: [],
          Document: ["definitions"],
          OperationDefinition: [
            "name",
            "variableDefinitions",
            "directives",
            "selectionSet",
          ],
          VariableDefinition: [
            "variable",
            "type",
            "defaultValue",
            "directives",
          ],
          Variable: ["name"],
          SelectionSet: ["selections"],
          Field: ["alias", "name", "arguments", "directives", "selectionSet"],
          Argument: ["name", "value"],
          FragmentSpread: ["name", "directives"],
          InlineFragment: ["typeCondition", "directives", "selectionSet"],
          FragmentDefinition: [
            "name",
            "variableDefinitions",
            "typeCondition",
            "directives",
            "selectionSet",
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ["values"],
          ObjectValue: ["fields"],
          ObjectField: ["name", "value"],
          Directive: ["name", "arguments"],
          NamedType: ["name"],
          ListType: ["type"],
          NonNullType: ["type"],
          SchemaDefinition: ["description", "directives", "operationTypes"],
          OperationTypeDefinition: ["type"],
          ScalarTypeDefinition: ["description", "name", "directives"],
          ObjectTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          FieldDefinition: [
            "description",
            "name",
            "arguments",
            "type",
            "directives",
          ],
          InputValueDefinition: [
            "description",
            "name",
            "type",
            "defaultValue",
            "directives",
          ],
          InterfaceTypeDefinition: [
            "description",
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeDefinition: ["description", "name", "directives", "types"],
          EnumTypeDefinition: ["description", "name", "directives", "values"],
          EnumValueDefinition: ["description", "name", "directives"],
          InputObjectTypeDefinition: [
            "description",
            "name",
            "directives",
            "fields",
          ],
          DirectiveDefinition: [
            "description",
            "name",
            "arguments",
            "locations",
          ],
          SchemaExtension: ["directives", "operationTypes"],
          ScalarTypeExtension: ["name", "directives"],
          ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
          InterfaceTypeExtension: [
            "name",
            "interfaces",
            "directives",
            "fields",
          ],
          UnionTypeExtension: ["name", "directives", "types"],
          EnumTypeExtension: ["name", "directives", "values"],
          InputObjectTypeExtension: ["name", "directives", "fields"],
        },
        at = new Set(Object.keys(ot));
      function ut(e) {
        var t = null === e || void 0 === e ? void 0 : e.kind;
        return "string" === typeof t && at.has(t);
      }
      !(function (e) {
        (e.QUERY = "query"),
          (e.MUTATION = "mutation"),
          (e.SUBSCRIPTION = "subscription");
      })(tt || (tt = {})),
        (function (e) {
          (e.NAME = "Name"),
            (e.DOCUMENT = "Document"),
            (e.OPERATION_DEFINITION = "OperationDefinition"),
            (e.VARIABLE_DEFINITION = "VariableDefinition"),
            (e.SELECTION_SET = "SelectionSet"),
            (e.FIELD = "Field"),
            (e.ARGUMENT = "Argument"),
            (e.FRAGMENT_SPREAD = "FragmentSpread"),
            (e.INLINE_FRAGMENT = "InlineFragment"),
            (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
            (e.VARIABLE = "Variable"),
            (e.INT = "IntValue"),
            (e.FLOAT = "FloatValue"),
            (e.STRING = "StringValue"),
            (e.BOOLEAN = "BooleanValue"),
            (e.NULL = "NullValue"),
            (e.ENUM = "EnumValue"),
            (e.LIST = "ListValue"),
            (e.OBJECT = "ObjectValue"),
            (e.OBJECT_FIELD = "ObjectField"),
            (e.DIRECTIVE = "Directive"),
            (e.NAMED_TYPE = "NamedType"),
            (e.LIST_TYPE = "ListType"),
            (e.NON_NULL_TYPE = "NonNullType"),
            (e.SCHEMA_DEFINITION = "SchemaDefinition"),
            (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
            (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
            (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
            (e.FIELD_DEFINITION = "FieldDefinition"),
            (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
            (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
            (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
            (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
            (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
            (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
            (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
            (e.SCHEMA_EXTENSION = "SchemaExtension"),
            (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
            (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
            (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
            (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
            (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
            (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
        })(nt || (nt = {}));
      var st = Object.freeze({});
      function lt(e, t) {
        for (
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : ot,
            r = new Map(),
            i = 0,
            o = Object.values(nt);
          i < o.length;
          i++
        ) {
          var a = o[i];
          r.set(a, ct(t, a));
        }
        var u = void 0,
          s = Array.isArray(e),
          l = [e],
          c = -1,
          f = [],
          d = e,
          p = void 0,
          h = void 0,
          v = [],
          y = [];
        do {
          var m = ++c === l.length,
            g = m && 0 !== f.length;
          if (m) {
            if (
              ((p = 0 === y.length ? void 0 : v[v.length - 1]),
              (d = h),
              (h = y.pop()),
              g)
            )
              if (s) {
                d = d.slice();
                var b,
                  w = 0,
                  k = et(f);
                try {
                  for (k.s(); !(b = k.n()).done; ) {
                    var _ = E(b.value, 2),
                      S = _[0],
                      x = _[1],
                      O = S - w;
                    null === x ? (d.splice(O, 1), w++) : (d[O] = x);
                  }
                } catch (A) {
                  k.e(A);
                } finally {
                  k.f();
                }
              } else {
                d = Object.defineProperties(
                  {},
                  Object.getOwnPropertyDescriptors(d)
                );
                var T,
                  C = et(f);
                try {
                  for (C.s(); !(T = C.n()).done; ) {
                    var N = E(T.value, 2),
                      D = N[0],
                      P = N[1];
                    d[D] = P;
                  }
                } catch (A) {
                  C.e(A);
                } finally {
                  C.f();
                }
              }
            (c = u.index),
              (l = u.keys),
              (f = u.edits),
              (s = u.inArray),
              (u = u.prev);
          } else if (h) {
            if (null === (d = h[(p = s ? c : l[c])]) || void 0 === d) continue;
            v.push(p);
          }
          var I,
            R = void 0;
          if (!Array.isArray(d)) {
            var F, j;
            ut(d) || He(!1, "Invalid AST Node: ".concat(Ye(d), "."));
            var L = m
              ? null === (F = r.get(d.kind)) || void 0 === F
                ? void 0
                : F.leave
              : null === (j = r.get(d.kind)) || void 0 === j
              ? void 0
              : j.enter;
            if (
              (R =
                null === L || void 0 === L
                  ? void 0
                  : L.call(t, d, p, h, v, y)) === st
            )
              break;
            if (!1 === R) {
              if (!m) {
                v.pop();
                continue;
              }
            } else if (void 0 !== R && (f.push([p, R]), !m)) {
              if (!ut(R)) {
                v.pop();
                continue;
              }
              d = R;
            }
          }
          if ((void 0 === R && g && f.push([p, d]), m)) v.pop();
          else
            (u = { inArray: s, index: c, keys: l, edits: f, prev: u }),
              (l = (s = Array.isArray(d))
                ? d
                : null !== (I = n[d.kind]) && void 0 !== I
                ? I
                : []),
              (c = -1),
              (f = []),
              h && y.push(h),
              (h = d);
        } while (void 0 !== u);
        return 0 !== f.length ? f[f.length - 1][1] : e;
      }
      function ct(e, t) {
        var n = e[t];
        return "object" === typeof n
          ? n
          : "function" === typeof n
          ? { enter: n, leave: void 0 }
          : { enter: e.enter, leave: e.leave };
      }
      function ft(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return dt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return dt(e, t);
          })(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function dt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function pt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function ht(e, t, n) {
        return (
          t && pt(e.prototype, t),
          n && pt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var vt = function () {
          return "function" === typeof Symbol;
        },
        yt = function (e) {
          return vt() && Boolean(Symbol[e]);
        },
        mt = function (e) {
          return yt(e) ? Symbol[e] : "@@" + e;
        };
      vt() && !yt("observable") && (Symbol.observable = Symbol("observable"));
      var gt = mt("iterator"),
        bt = mt("observable"),
        wt = mt("species");
      function kt(e, t) {
        var n = e[t];
        if (null != n) {
          if ("function" !== typeof n)
            throw new TypeError(n + " is not a function");
          return n;
        }
      }
      function Et(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[wt]) && (t = void 0),
          void 0 !== t ? t : It
        );
      }
      function _t(e) {
        return e instanceof It;
      }
      function St(e) {
        St.log
          ? St.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function xt(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (ea) {
            St(ea);
          }
        });
      }
      function Ot(e) {
        var t = e._cleanup;
        if (void 0 !== t && ((e._cleanup = void 0), t))
          try {
            if ("function" === typeof t) t();
            else {
              var n = kt(t, "unsubscribe");
              n && n.call(t);
            }
          } catch (ea) {
            St(ea);
          }
      }
      function Tt(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = "closed");
      }
      function Ct(e, t, n) {
        e._state = "running";
        var r = e._observer;
        try {
          var i = kt(r, t);
          switch (t) {
            case "next":
              i && i.call(r, n);
              break;
            case "error":
              if ((Tt(e), !i)) throw n;
              i.call(r, n);
              break;
            case "complete":
              Tt(e), i && i.call(r);
          }
        } catch (ea) {
          St(ea);
        }
        "closed" === e._state
          ? Ot(e)
          : "running" === e._state && (e._state = "ready");
      }
      function Nt(e, t, n) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state)
            return "ready" !== e._state
              ? ((e._state = "buffering"),
                (e._queue = [{ type: t, value: n }]),
                void xt(function () {
                  return (function (e) {
                    var t = e._queue;
                    if (t) {
                      (e._queue = void 0), (e._state = "ready");
                      for (
                        var n = 0;
                        n < t.length &&
                        (Ct(e, t[n].type, t[n].value), "closed" !== e._state);
                        ++n
                      );
                    }
                  })(e);
                }))
              : void Ct(e, t, n);
          e._queue.push({ type: t, value: n });
        }
      }
      var Dt = (function () {
          function e(e, t) {
            (this._cleanup = void 0),
              (this._observer = e),
              (this._queue = void 0),
              (this._state = "initializing");
            var n = new Pt(this);
            try {
              this._cleanup = t.call(void 0, n);
            } catch (ea) {
              n.error(ea);
            }
            "initializing" === this._state && (this._state = "ready");
          }
          return (
            (e.prototype.unsubscribe = function () {
              "closed" !== this._state && (Tt(this), Ot(this));
            }),
            ht(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._state;
                },
              },
            ]),
            e
          );
        })(),
        Pt = (function () {
          function e(e) {
            this._subscription = e;
          }
          var t = e.prototype;
          return (
            (t.next = function (e) {
              Nt(this._subscription, "next", e);
            }),
            (t.error = function (e) {
              Nt(this._subscription, "error", e);
            }),
            (t.complete = function () {
              Nt(this._subscription, "complete");
            }),
            ht(e, [
              {
                key: "closed",
                get: function () {
                  return "closed" === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        It = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Observable cannot be called as a function");
            if ("function" !== typeof t)
              throw new TypeError("Observable initializer must be a function");
            this._subscriber = t;
          }
          var t = e.prototype;
          return (
            (t.subscribe = function (e) {
              return (
                ("object" === typeof e && null !== e) ||
                  (e = {
                    next: e,
                    error: arguments[1],
                    complete: arguments[2],
                  }),
                new Dt(e, this._subscriber)
              );
            }),
            (t.forEach = function (e) {
              var t = this;
              return new Promise(function (n, r) {
                if ("function" === typeof e)
                  var i = t.subscribe({
                    next: function (t) {
                      try {
                        e(t, o);
                      } catch (ea) {
                        r(ea), i.unsubscribe();
                      }
                    },
                    error: r,
                    complete: n,
                  });
                else r(new TypeError(e + " is not a function"));
                function o() {
                  i.unsubscribe(), n();
                }
              });
            }),
            (t.map = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              return new (Et(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      t = e(t);
                    } catch (ea) {
                      return n.error(ea);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.filter = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              return new (Et(this))(function (n) {
                return t.subscribe({
                  next: function (t) {
                    try {
                      if (!e(t)) return;
                    } catch (ea) {
                      return n.error(ea);
                    }
                    n.next(t);
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    n.complete();
                  },
                });
              });
            }),
            (t.reduce = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              var n = Et(this),
                r = arguments.length > 1,
                i = !1,
                o = arguments[1],
                a = o;
              return new n(function (n) {
                return t.subscribe({
                  next: function (t) {
                    var o = !i;
                    if (((i = !0), !o || r))
                      try {
                        a = e(a, t);
                      } catch (ea) {
                        return n.error(ea);
                      }
                    else a = t;
                  },
                  error: function (e) {
                    n.error(e);
                  },
                  complete: function () {
                    if (!i && !r)
                      return n.error(
                        new TypeError("Cannot reduce an empty sequence")
                      );
                    n.next(a), n.complete();
                  },
                });
              });
            }),
            (t.concat = function () {
              for (
                var e = this, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var i = Et(this);
              return new i(function (t) {
                var r,
                  o = 0;
                return (
                  (function e(a) {
                    r = a.subscribe({
                      next: function (e) {
                        t.next(e);
                      },
                      error: function (e) {
                        t.error(e);
                      },
                      complete: function () {
                        o === n.length
                          ? ((r = void 0), t.complete())
                          : e(i.from(n[o++]));
                      },
                    });
                  })(e),
                  function () {
                    r && (r.unsubscribe(), (r = void 0));
                  }
                );
              });
            }),
            (t.flatMap = function (e) {
              var t = this;
              if ("function" !== typeof e)
                throw new TypeError(e + " is not a function");
              var n = Et(this);
              return new n(function (r) {
                var i = [],
                  o = t.subscribe({
                    next: function (t) {
                      if (e)
                        try {
                          t = e(t);
                        } catch (ea) {
                          return r.error(ea);
                        }
                      var o = n.from(t).subscribe({
                        next: function (e) {
                          r.next(e);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          var e = i.indexOf(o);
                          e >= 0 && i.splice(e, 1), a();
                        },
                      });
                      i.push(o);
                    },
                    error: function (e) {
                      r.error(e);
                    },
                    complete: function () {
                      a();
                    },
                  });
                function a() {
                  o.closed && 0 === i.length && r.complete();
                }
                return function () {
                  i.forEach(function (e) {
                    return e.unsubscribe();
                  }),
                    o.unsubscribe();
                };
              });
            }),
            (t[bt] = function () {
              return this;
            }),
            (e.from = function (t) {
              var n = "function" === typeof this ? this : e;
              if (null == t) throw new TypeError(t + " is not an object");
              var r = kt(t, bt);
              if (r) {
                var i = r.call(t);
                if (Object(i) !== i)
                  throw new TypeError(i + " is not an object");
                return _t(i) && i.constructor === n
                  ? i
                  : new n(function (e) {
                      return i.subscribe(e);
                    });
              }
              if (yt("iterator") && (r = kt(t, gt)))
                return new n(function (e) {
                  xt(function () {
                    if (!e.closed) {
                      for (var n, i = ft(r.call(t)); !(n = i()).done; ) {
                        var o = n.value;
                        if ((e.next(o), e.closed)) return;
                      }
                      e.complete();
                    }
                  });
                });
              if (Array.isArray(t))
                return new n(function (e) {
                  xt(function () {
                    if (!e.closed) {
                      for (var n = 0; n < t.length; ++n)
                        if ((e.next(t[n]), e.closed)) return;
                      e.complete();
                    }
                  });
                });
              throw new TypeError(t + " is not observable");
            }),
            (e.of = function () {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              var i = "function" === typeof this ? this : e;
              return new i(function (e) {
                xt(function () {
                  if (!e.closed) {
                    for (var t = 0; t < n.length; ++t)
                      if ((e.next(n[t]), e.closed)) return;
                    e.complete();
                  }
                });
              });
            }),
            ht(e, null, [
              {
                key: wt,
                get: function () {
                  return this;
                },
              },
            ]),
            e
          );
        })();
      function Rt(e) {
        return null !== e && "object" === typeof e;
      }
      function Ft(e, t) {
        var n = t,
          r = [];
        return (
          e.definitions.forEach(function (e) {
            if ("OperationDefinition" === e.kind)
              throw __DEV__
                ? new Fe(
                    "Found a "
                      .concat(e.operation, " operation")
                      .concat(
                        e.name ? " named '".concat(e.name.value, "'") : "",
                        ". "
                      ) +
                      "No operations are allowed when using a fragment as a query. Only fragments are allowed."
                  )
                : new Fe(41);
            "FragmentDefinition" === e.kind && r.push(e);
          }),
          "undefined" === typeof n &&
            (__DEV__
              ? je(
                  1 === r.length,
                  "Found ".concat(
                    r.length,
                    " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."
                  )
                )
              : je(1 === r.length, 42),
            (n = r[0].name.value)),
          Oe(Oe({}, e), {
            definitions: De(
              [
                {
                  kind: "OperationDefinition",
                  operation: "query",
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: n },
                      },
                    ],
                  },
                },
              ],
              e.definitions,
              !0
            ),
          })
        );
      }
      function jt(e) {
        void 0 === e && (e = []);
        var t = {};
        return (
          e.forEach(function (e) {
            t[e.name.value] = e;
          }),
          t
        );
      }
      function Lt(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var n = t && t[e.name.value];
            return (
              __DEV__
                ? je(n, "No fragment named ".concat(e.name.value, "."))
                : je(n, 43),
              n
            );
          default:
            return null;
        }
      }
      function At(e) {
        return { __ref: String(e) };
      }
      function Mt(e) {
        return Boolean(
          e && "object" === typeof e && "string" === typeof e.__ref
        );
      }
      function Vt(e, t, n, r) {
        if (
          (function (e) {
            return "IntValue" === e.kind;
          })(n) ||
          (function (e) {
            return "FloatValue" === e.kind;
          })(n)
        )
          e[t.value] = Number(n.value);
        else if (
          (function (e) {
            return "BooleanValue" === e.kind;
          })(n) ||
          (function (e) {
            return "StringValue" === e.kind;
          })(n)
        )
          e[t.value] = n.value;
        else if (
          (function (e) {
            return "ObjectValue" === e.kind;
          })(n)
        ) {
          var i = {};
          n.fields.map(function (e) {
            return Vt(i, e.name, e.value, r);
          }),
            (e[t.value] = i);
        } else if (
          (function (e) {
            return "Variable" === e.kind;
          })(n)
        ) {
          var o = (r || {})[n.name.value];
          e[t.value] = o;
        } else if (
          (function (e) {
            return "ListValue" === e.kind;
          })(n)
        )
          e[t.value] = n.values.map(function (e) {
            var n = {};
            return Vt(n, t, e, r), n[t.value];
          });
        else if (
          (function (e) {
            return "EnumValue" === e.kind;
          })(n)
        )
          e[t.value] = n.value;
        else {
          if (
            !(function (e) {
              return "NullValue" === e.kind;
            })(n)
          )
            throw __DEV__
              ? new Fe(
                  'The inline argument "'
                    .concat(t.value, '" of kind "')
                    .concat(n.kind, '"') +
                    "is not supported. Use variables instead of inline arguments to overcome this limitation."
                )
              : new Fe(52);
          e[t.value] = null;
        }
      }
      vt() &&
        Object.defineProperty(It, Symbol("extensions"), {
          value: { symbol: bt, hostReportError: St },
          configurable: !0,
        });
      var zt = ["connection", "include", "skip", "client", "rest", "export"],
        Qt = Object.assign(
          function (e, t, n) {
            if (t && n && n.connection && n.connection.key) {
              if (n.connection.filter && n.connection.filter.length > 0) {
                var r = n.connection.filter ? n.connection.filter : [];
                r.sort();
                var i = {};
                return (
                  r.forEach(function (e) {
                    i[e] = t[e];
                  }),
                  "".concat(n.connection.key, "(").concat(qt(i), ")")
                );
              }
              return n.connection.key;
            }
            var o = e;
            if (t) {
              var a = qt(t);
              o += "(".concat(a, ")");
            }
            return (
              n &&
                Object.keys(n).forEach(function (e) {
                  -1 === zt.indexOf(e) &&
                    (n[e] && Object.keys(n[e]).length
                      ? (o += "@".concat(e, "(").concat(qt(n[e]), ")"))
                      : (o += "@".concat(e)));
                }),
              o
            );
          },
          {
            setStringify: function (e) {
              var t = qt;
              return (qt = e), t;
            },
          }
        ),
        qt = function (e) {
          return JSON.stringify(e, Ut);
        };
      function Ut(e, t) {
        return (
          Rt(t) &&
            !Array.isArray(t) &&
            (t = Object.keys(t)
              .sort()
              .reduce(function (e, n) {
                return (e[n] = t[n]), e;
              }, {})),
          t
        );
      }
      function Bt(e, t) {
        if (e.arguments && e.arguments.length) {
          var n = {};
          return (
            e.arguments.forEach(function (e) {
              var r = e.name,
                i = e.value;
              return Vt(n, r, i, t);
            }),
            n
          );
        }
        return null;
      }
      function Wt(e) {
        return e.alias ? e.alias.value : e.name.value;
      }
      function $t(e, t, n) {
        if ("string" === typeof e.__typename) return e.__typename;
        for (var r = 0, i = t.selections; r < i.length; r++) {
          var o = i[r];
          if (Kt(o)) {
            if ("__typename" === o.name.value) return e[Wt(o)];
          } else {
            var a = $t(e, Lt(o, n).selectionSet, n);
            if ("string" === typeof a) return a;
          }
        }
      }
      function Kt(e) {
        return "Field" === e.kind;
      }
      function Ht(e) {
        return "InlineFragment" === e.kind;
      }
      function Yt(e) {
        __DEV__
          ? je(
              e && "Document" === e.kind,
              'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
            )
          : je(e && "Document" === e.kind, 44);
        var t = e.definitions
          .filter(function (e) {
            return "FragmentDefinition" !== e.kind;
          })
          .map(function (e) {
            if ("OperationDefinition" !== e.kind)
              throw __DEV__
                ? new Fe(
                    'Schema type definitions not allowed in queries. Found: "'.concat(
                      e.kind,
                      '"'
                    )
                  )
                : new Fe(45);
            return e;
          });
        return (
          __DEV__
            ? je(
                t.length <= 1,
                "Ambiguous GraphQL document: contains ".concat(
                  t.length,
                  " operations"
                )
              )
            : je(t.length <= 1, 46),
          e
        );
      }
      function Gt(e) {
        return (
          Yt(e),
          e.definitions.filter(function (e) {
            return "OperationDefinition" === e.kind;
          })[0]
        );
      }
      function Jt(e) {
        return (
          e.definitions
            .filter(function (e) {
              return "OperationDefinition" === e.kind && e.name;
            })
            .map(function (e) {
              return e.name.value;
            })[0] || null
        );
      }
      function Xt(e) {
        return e.definitions.filter(function (e) {
          return "FragmentDefinition" === e.kind;
        });
      }
      function Zt(e) {
        var t = Gt(e);
        return (
          __DEV__
            ? je(
                t && "query" === t.operation,
                "Must contain a query definition."
              )
            : je(t && "query" === t.operation, 47),
          t
        );
      }
      function en(e) {
        var t;
        Yt(e);
        for (var n = 0, r = e.definitions; n < r.length; n++) {
          var i = r[n];
          if ("OperationDefinition" === i.kind) {
            var o = i.operation;
            if ("query" === o || "mutation" === o || "subscription" === o)
              return i;
          }
          "FragmentDefinition" !== i.kind || t || (t = i);
        }
        if (t) return t;
        throw __DEV__
          ? new Fe(
              "Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."
            )
          : new Fe(51);
      }
      function tn(e) {
        var t = Object.create(null),
          n = e && e.variableDefinitions;
        return (
          n &&
            n.length &&
            n.forEach(function (e) {
              e.defaultValue && Vt(t, e.variable.name, e.defaultValue);
            }),
          t
        );
      }
      function nn(e, t) {
        return t ? t(e) : It.of();
      }
      function rn(e) {
        return "function" === typeof e ? new un(e) : e;
      }
      function on(e) {
        return e.request.length <= 1;
      }
      var an = (function (e) {
          function t(t, n) {
            var r = e.call(this, t) || this;
            return (r.link = n), r;
          }
          return xe(t, e), t;
        })(Error),
        un = (function () {
          function e(e) {
            e && (this.request = e);
          }
          return (
            (e.empty = function () {
              return new e(function () {
                return It.of();
              });
            }),
            (e.from = function (t) {
              return 0 === t.length
                ? e.empty()
                : t.map(rn).reduce(function (e, t) {
                    return e.concat(t);
                  });
            }),
            (e.split = function (t, n, r) {
              var i = rn(n),
                o = rn(r || new e(nn));
              return on(i) && on(o)
                ? new e(function (e) {
                    return t(e)
                      ? i.request(e) || It.of()
                      : o.request(e) || It.of();
                  })
                : new e(function (e, n) {
                    return t(e)
                      ? i.request(e, n) || It.of()
                      : o.request(e, n) || It.of();
                  });
            }),
            (e.execute = function (e, t) {
              return (
                e.request(
                  (function (e, t) {
                    var n = Oe({}, e);
                    return (
                      Object.defineProperty(t, "setContext", {
                        enumerable: !1,
                        value: function (e) {
                          n = Oe(Oe({}, n), "function" === typeof e ? e(n) : e);
                        },
                      }),
                      Object.defineProperty(t, "getContext", {
                        enumerable: !1,
                        value: function () {
                          return Oe({}, n);
                        },
                      }),
                      t
                    );
                  })(
                    t.context,
                    (function (e) {
                      var t = {
                        variables: e.variables || {},
                        extensions: e.extensions || {},
                        operationName: e.operationName,
                        query: e.query,
                      };
                      return (
                        t.operationName ||
                          (t.operationName =
                            "string" !== typeof t.query
                              ? Jt(t.query) || void 0
                              : ""),
                        t
                      );
                    })(
                      (function (e) {
                        for (
                          var t = [
                              "query",
                              "operationName",
                              "variables",
                              "extensions",
                              "context",
                            ],
                            n = 0,
                            r = Object.keys(e);
                          n < r.length;
                          n++
                        ) {
                          var i = r[n];
                          if (t.indexOf(i) < 0)
                            throw __DEV__
                              ? new Fe("illegal argument: ".concat(i))
                              : new Fe(24);
                        }
                        return e;
                      })(t)
                    )
                  )
                ) || It.of()
              );
            }),
            (e.concat = function (t, n) {
              var r = rn(t);
              if (on(r))
                return (
                  __DEV__ &&
                    je.warn(
                      new an(
                        "You are calling concat on a terminating link, which will have no effect",
                        r
                      )
                    ),
                  r
                );
              var i = rn(n);
              return on(i)
                ? new e(function (e) {
                    return (
                      r.request(e, function (e) {
                        return i.request(e) || It.of();
                      }) || It.of()
                    );
                  })
                : new e(function (e, t) {
                    return (
                      r.request(e, function (e) {
                        return i.request(e, t) || It.of();
                      }) || It.of()
                    );
                  });
            }),
            (e.prototype.split = function (t, n, r) {
              return this.concat(e.split(t, n, r || new e(nn)));
            }),
            (e.prototype.concat = function (t) {
              return e.concat(this, t);
            }),
            (e.prototype.request = function (e, t) {
              throw __DEV__ ? new Fe("request is not implemented") : new Fe(19);
            }),
            (e.prototype.onError = function (e, t) {
              if (t && t.error) return t.error(e), !1;
              throw e;
            }),
            (e.prototype.setOnError = function (e) {
              return (this.onError = e), this;
            }),
            e
          );
        })(),
        sn = function (e, t) {
          var n;
          try {
            n = JSON.stringify(e);
          } catch (ea) {
            var r = __DEV__
              ? new Fe(
                  "Network request failed. "
                    .concat(t, " is not serializable: ")
                    .concat(ea.message)
                )
              : new Fe(21);
            throw ((r.parseError = ea), r);
          }
          return n;
        },
        ln = function (e, t, n) {
          var r = new Error(n);
          throw (
            ((r.name = "ServerError"),
            (r.response = e),
            (r.statusCode = e.status),
            (r.result = t),
            r)
          );
        },
        cn = Object.prototype.hasOwnProperty;
      function fn(e) {
        return 9 === e || 32 === e;
      }
      function dn(e) {
        return e >= 48 && e <= 57;
      }
      function pn(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function hn(e) {
        return pn(e) || 95 === e;
      }
      function vn(e) {
        return pn(e) || dn(e) || 95 === e;
      }
      function yn(e) {
        for (
          var t, n = Number.MAX_SAFE_INTEGER, r = null, i = -1, o = 0;
          o < e.length;
          ++o
        ) {
          var a,
            u = e[o],
            s = mn(u);
          s !== u.length &&
            ((r = null !== (a = r) && void 0 !== a ? a : o),
            (i = o),
            0 !== o && s < n && (n = s));
        }
        return e
          .map(function (e, t) {
            return 0 === t ? e : e.slice(n);
          })
          .slice(null !== (t = r) && void 0 !== t ? t : 0, i + 1);
      }
      function mn(e) {
        for (var t = 0; t < e.length && fn(e.charCodeAt(t)); ) ++t;
        return t;
      }
      var gn = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
      function bn(e) {
        return wn[e.charCodeAt(0)];
      }
      var wn = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000B",
        "\\f",
        "\\r",
        "\\u000E",
        "\\u000F",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001A",
        "\\u001B",
        "\\u001C",
        "\\u001D",
        "\\u001E",
        "\\u001F",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\u007F",
        "\\u0080",
        "\\u0081",
        "\\u0082",
        "\\u0083",
        "\\u0084",
        "\\u0085",
        "\\u0086",
        "\\u0087",
        "\\u0088",
        "\\u0089",
        "\\u008A",
        "\\u008B",
        "\\u008C",
        "\\u008D",
        "\\u008E",
        "\\u008F",
        "\\u0090",
        "\\u0091",
        "\\u0092",
        "\\u0093",
        "\\u0094",
        "\\u0095",
        "\\u0096",
        "\\u0097",
        "\\u0098",
        "\\u0099",
        "\\u009A",
        "\\u009B",
        "\\u009C",
        "\\u009D",
        "\\u009E",
        "\\u009F",
      ];
      function kn(e) {
        return lt(e, En);
      }
      var En = {
        Name: {
          leave: function (e) {
            return e.value;
          },
        },
        Variable: {
          leave: function (e) {
            return "$" + e.name;
          },
        },
        Document: {
          leave: function (e) {
            return _n(e.definitions, "\n\n");
          },
        },
        OperationDefinition: {
          leave: function (e) {
            var t = xn("(", _n(e.variableDefinitions, ", "), ")"),
              n = _n(
                [e.operation, _n([e.name, t]), _n(e.directives, " ")],
                " "
              );
            return ("query" === n ? "" : n + " ") + e.selectionSet;
          },
        },
        VariableDefinition: {
          leave: function (e) {
            var t = e.variable,
              n = e.type,
              r = e.defaultValue,
              i = e.directives;
            return t + ": " + n + xn(" = ", r) + xn(" ", _n(i, " "));
          },
        },
        SelectionSet: {
          leave: function (e) {
            return Sn(e.selections);
          },
        },
        Field: {
          leave: function (e) {
            var t = e.alias,
              n = e.name,
              r = e.arguments,
              i = e.directives,
              o = e.selectionSet,
              a = xn("", t, ": ") + n,
              u = a + xn("(", _n(r, ", "), ")");
            return (
              u.length > 80 && (u = a + xn("(\n", On(_n(r, "\n")), "\n)")),
              _n([u, _n(i, " "), o], " ")
            );
          },
        },
        Argument: {
          leave: function (e) {
            return e.name + ": " + e.value;
          },
        },
        FragmentSpread: {
          leave: function (e) {
            return "..." + e.name + xn(" ", _n(e.directives, " "));
          },
        },
        InlineFragment: {
          leave: function (e) {
            var t = e.typeCondition,
              n = e.directives,
              r = e.selectionSet;
            return _n(["...", xn("on ", t), _n(n, " "), r], " ");
          },
        },
        FragmentDefinition: {
          leave: function (e) {
            var t = e.name,
              n = e.typeCondition,
              r = e.variableDefinitions,
              i = e.directives,
              o = e.selectionSet;
            return (
              "fragment ".concat(t).concat(xn("(", _n(r, ", "), ")"), " ") +
              "on ".concat(n, " ").concat(xn("", _n(i, " "), " ")) +
              o
            );
          },
        },
        IntValue: {
          leave: function (e) {
            return e.value;
          },
        },
        FloatValue: {
          leave: function (e) {
            return e.value;
          },
        },
        StringValue: {
          leave: function (e) {
            var t = e.value;
            return e.block
              ? (function (e, t) {
                  var n = e.replace(/"""/g, '\\"""'),
                    r = n.split(/\r\n|[\n\r]/g),
                    i = 1 === r.length,
                    o =
                      r.length > 1 &&
                      r.slice(1).every(function (e) {
                        return 0 === e.length || fn(e.charCodeAt(0));
                      }),
                    a = n.endsWith('\\"""'),
                    u = e.endsWith('"') && !a,
                    s = e.endsWith("\\"),
                    l = u || s,
                    c =
                      !(null !== t && void 0 !== t && t.minimize) &&
                      (!i || e.length > 70 || l || o || a),
                    f = "",
                    d = i && fn(e.charCodeAt(0));
                  return (
                    ((c && !d) || o) && (f += "\n"),
                    (f += n),
                    (c || l) && (f += "\n"),
                    '"""' + f + '"""'
                  );
                })(t)
              : '"'.concat(t.replace(gn, bn), '"');
          },
        },
        BooleanValue: {
          leave: function (e) {
            return e.value ? "true" : "false";
          },
        },
        NullValue: {
          leave: function () {
            return "null";
          },
        },
        EnumValue: {
          leave: function (e) {
            return e.value;
          },
        },
        ListValue: {
          leave: function (e) {
            return "[" + _n(e.values, ", ") + "]";
          },
        },
        ObjectValue: {
          leave: function (e) {
            return "{" + _n(e.fields, ", ") + "}";
          },
        },
        ObjectField: {
          leave: function (e) {
            return e.name + ": " + e.value;
          },
        },
        Directive: {
          leave: function (e) {
            return "@" + e.name + xn("(", _n(e.arguments, ", "), ")");
          },
        },
        NamedType: {
          leave: function (e) {
            return e.name;
          },
        },
        ListType: {
          leave: function (e) {
            return "[" + e.type + "]";
          },
        },
        NonNullType: {
          leave: function (e) {
            return e.type + "!";
          },
        },
        SchemaDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.directives,
              r = e.operationTypes;
            return xn("", t, "\n") + _n(["schema", _n(n, " "), Sn(r)], " ");
          },
        },
        OperationTypeDefinition: {
          leave: function (e) {
            return e.operation + ": " + e.type;
          },
        },
        ScalarTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives;
            return xn("", t, "\n") + _n(["scalar", n, _n(r, " ")], " ");
          },
        },
        ObjectTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.interfaces,
              i = e.directives,
              o = e.fields;
            return (
              xn("", t, "\n") +
              _n(
                ["type", n, xn("implements ", _n(r, " & ")), _n(i, " "), Sn(o)],
                " "
              )
            );
          },
        },
        FieldDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.arguments,
              i = e.type,
              o = e.directives;
            return (
              xn("", t, "\n") +
              n +
              (Tn(r)
                ? xn("(\n", On(_n(r, "\n")), "\n)")
                : xn("(", _n(r, ", "), ")")) +
              ": " +
              i +
              xn(" ", _n(o, " "))
            );
          },
        },
        InputValueDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.type,
              i = e.defaultValue,
              o = e.directives;
            return (
              xn("", t, "\n") + _n([n + ": " + r, xn("= ", i), _n(o, " ")], " ")
            );
          },
        },
        InterfaceTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.interfaces,
              i = e.directives,
              o = e.fields;
            return (
              xn("", t, "\n") +
              _n(
                [
                  "interface",
                  n,
                  xn("implements ", _n(r, " & ")),
                  _n(i, " "),
                  Sn(o),
                ],
                " "
              )
            );
          },
        },
        UnionTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.types;
            return (
              xn("", t, "\n") +
              _n(["union", n, _n(r, " "), xn("= ", _n(i, " | "))], " ")
            );
          },
        },
        EnumTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.values;
            return xn("", t, "\n") + _n(["enum", n, _n(r, " "), Sn(i)], " ");
          },
        },
        EnumValueDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives;
            return xn("", t, "\n") + _n([n, _n(r, " ")], " ");
          },
        },
        InputObjectTypeDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.directives,
              i = e.fields;
            return xn("", t, "\n") + _n(["input", n, _n(r, " "), Sn(i)], " ");
          },
        },
        DirectiveDefinition: {
          leave: function (e) {
            var t = e.description,
              n = e.name,
              r = e.arguments,
              i = e.repeatable,
              o = e.locations;
            return (
              xn("", t, "\n") +
              "directive @" +
              n +
              (Tn(r)
                ? xn("(\n", On(_n(r, "\n")), "\n)")
                : xn("(", _n(r, ", "), ")")) +
              (i ? " repeatable" : "") +
              " on " +
              _n(o, " | ")
            );
          },
        },
        SchemaExtension: {
          leave: function (e) {
            var t = e.directives,
              n = e.operationTypes;
            return _n(["extend schema", _n(t, " "), Sn(n)], " ");
          },
        },
        ScalarTypeExtension: {
          leave: function (e) {
            return _n(["extend scalar", e.name, _n(e.directives, " ")], " ");
          },
        },
        ObjectTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.interfaces,
              r = e.directives,
              i = e.fields;
            return _n(
              [
                "extend type",
                t,
                xn("implements ", _n(n, " & ")),
                _n(r, " "),
                Sn(i),
              ],
              " "
            );
          },
        },
        InterfaceTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.interfaces,
              r = e.directives,
              i = e.fields;
            return _n(
              [
                "extend interface",
                t,
                xn("implements ", _n(n, " & ")),
                _n(r, " "),
                Sn(i),
              ],
              " "
            );
          },
        },
        UnionTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.types;
            return _n(
              ["extend union", t, _n(n, " "), xn("= ", _n(r, " | "))],
              " "
            );
          },
        },
        EnumTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.values;
            return _n(["extend enum", t, _n(n, " "), Sn(r)], " ");
          },
        },
        InputObjectTypeExtension: {
          leave: function (e) {
            var t = e.name,
              n = e.directives,
              r = e.fields;
            return _n(["extend input", t, _n(n, " "), Sn(r)], " ");
          },
        },
      };
      function _n(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return null !==
          (t =
            null === e || void 0 === e
              ? void 0
              : e
                  .filter(function (e) {
                    return e;
                  })
                  .join(n)) && void 0 !== t
          ? t
          : "";
      }
      function Sn(e) {
        return xn("{\n", On(_n(e, "\n")), "\n}");
      }
      function xn(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return null != t && "" !== t ? e + t + n : "";
      }
      function On(e) {
        return xn("  ", e.replace(/\n/g, "\n  "));
      }
      function Tn(e) {
        var t;
        return (
          null !==
            (t =
              null === e || void 0 === e
                ? void 0
                : e.some(function (e) {
                    return e.includes("\n");
                  })) &&
          void 0 !== t &&
          t
        );
      }
      var Cn = {
          http: { includeQuery: !0, includeExtensions: !1 },
          headers: { accept: "*/*", "content-type": "application/json" },
          options: { method: "POST" },
        },
        Nn = function (e, t) {
          return t(e);
        };
      function Dn(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        var i = {},
          o = {};
        n.forEach(function (e) {
          (i = Oe(Oe(Oe({}, i), e.options), {
            headers: Oe(Oe({}, i.headers), Pn(e.headers)),
          })),
            e.credentials && (i.credentials = e.credentials),
            (o = Oe(Oe({}, o), e.http));
        });
        var a = e.operationName,
          u = e.extensions,
          s = e.variables,
          l = e.query,
          c = { operationName: a, variables: s };
        return (
          o.includeExtensions && (c.extensions = u),
          o.includeQuery && (c.query = t(l, kn)),
          { options: i, body: c }
        );
      }
      function Pn(e) {
        if (e) {
          var t = Object.create(null);
          return (
            Object.keys(Object(e)).forEach(function (n) {
              t[n.toLowerCase()] = e[n];
            }),
            t
          );
        }
        return e;
      }
      function In(e) {
        return new It(function (t) {
          t.error(e);
        });
      }
      var Rn = Ve(function () {
          return fetch;
        }),
        Fn = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            n = void 0 === t ? "/graphql" : t,
            r = e.fetch,
            i = e.print,
            o = void 0 === i ? Nn : i,
            a = e.includeExtensions,
            u = e.useGETForQueries,
            s = e.includeUnusedVariables,
            l = void 0 !== s && s,
            c = Te(e, [
              "uri",
              "fetch",
              "print",
              "includeExtensions",
              "useGETForQueries",
              "includeUnusedVariables",
            ]);
          __DEV__ &&
            (function (e) {
              if (!e && "undefined" === typeof fetch)
                throw __DEV__
                  ? new Fe(
                      "\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "
                    )
                  : new Fe(20);
            })(r || Rn);
          var f = {
            http: { includeExtensions: a },
            options: c.fetchOptions,
            credentials: c.credentials,
            headers: c.headers,
          };
          return new un(function (e) {
            var t = (function (e, t) {
                return (
                  e.getContext().uri ||
                  ("function" === typeof t ? t(e) : t || "/graphql")
                );
              })(e, n),
              i = e.getContext(),
              a = {};
            if (i.clientAwareness) {
              var s = i.clientAwareness,
                c = s.name,
                d = s.version;
              c && (a["apollographql-client-name"] = c),
                d && (a["apollographql-client-version"] = d);
            }
            var p,
              h = Oe(Oe({}, a), i.headers),
              v = {
                http: i.http,
                options: i.fetchOptions,
                credentials: i.credentials,
                headers: h,
              },
              y = Dn(e, o, Cn, f, v),
              m = y.options,
              g = y.body;
            if (g.variables && !l) {
              var b = new Set(Object.keys(g.variables));
              lt(e.query, {
                Variable: function (e, t, n) {
                  n &&
                    "VariableDefinition" !== n.kind &&
                    b.delete(e.name.value);
                },
              }),
                b.size &&
                  ((g.variables = Oe({}, g.variables)),
                  b.forEach(function (e) {
                    delete g.variables[e];
                  }));
            }
            if (!m.signal) {
              var w = (function () {
                  if ("undefined" === typeof AbortController)
                    return { controller: !1, signal: !1 };
                  var e = new AbortController();
                  return { controller: e, signal: e.signal };
                })(),
                k = w.controller,
                E = w.signal;
              (p = k) && (m.signal = E);
            }
            if (
              (u &&
                !e.query.definitions.some(function (e) {
                  return (
                    "OperationDefinition" === e.kind &&
                    "mutation" === e.operation
                  );
                }) &&
                (m.method = "GET"),
              "GET" === m.method)
            ) {
              var _ = (function (e, t) {
                  var n = [],
                    r = function (e, t) {
                      n.push("".concat(e, "=").concat(encodeURIComponent(t)));
                    };
                  if (
                    ("query" in t && r("query", t.query),
                    t.operationName && r("operationName", t.operationName),
                    t.variables)
                  ) {
                    var i = void 0;
                    try {
                      i = sn(t.variables, "Variables map");
                    } catch (x) {
                      return { parseError: x };
                    }
                    r("variables", i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = sn(t.extensions, "Extensions map");
                    } catch (x) {
                      return { parseError: x };
                    }
                    r("extensions", o);
                  }
                  var a = "",
                    u = e,
                    s = e.indexOf("#");
                  -1 !== s && ((a = e.substr(s)), (u = e.substr(0, s)));
                  var l = -1 === u.indexOf("?") ? "?" : "&";
                  return { newURI: u + l + n.join("&") + a };
                })(t, g),
                S = _.newURI,
                x = _.parseError;
              if (x) return In(x);
              t = S;
            } else
              try {
                m.body = sn(g, "Payload");
              } catch (x) {
                return In(x);
              }
            return new It(function (n) {
              var i;
              return (
                (
                  r ||
                  Ve(function () {
                    return fetch;
                  }) ||
                  Rn
                )(t, m)
                  .then(function (t) {
                    return e.setContext({ response: t }), t;
                  })
                  .then(
                    ((i = e),
                    function (e) {
                      return e
                        .text()
                        .then(function (t) {
                          try {
                            return JSON.parse(t);
                          } catch (r) {
                            var n = r;
                            throw (
                              ((n.name = "ServerParseError"),
                              (n.response = e),
                              (n.statusCode = e.status),
                              (n.bodyText = t),
                              n)
                            );
                          }
                        })
                        .then(function (t) {
                          return (
                            e.status >= 300 &&
                              ln(
                                e,
                                t,
                                "Response not successful: Received status code ".concat(
                                  e.status
                                )
                              ),
                            Array.isArray(t) ||
                              cn.call(t, "data") ||
                              cn.call(t, "errors") ||
                              ln(
                                e,
                                t,
                                "Server response was missing for query '".concat(
                                  Array.isArray(i)
                                    ? i.map(function (e) {
                                        return e.operationName;
                                      })
                                    : i.operationName,
                                  "'."
                                )
                              ),
                            t
                          );
                        });
                    })
                  )
                  .then(function (e) {
                    return n.next(e), n.complete(), e;
                  })
                  .catch(function (e) {
                    "AbortError" !== e.name &&
                      (e.result &&
                        e.result.errors &&
                        e.result.data &&
                        n.next(e.result),
                      n.error(e));
                  }),
                function () {
                  p && p.abort();
                }
              );
            });
          });
        },
        jn = un.execute,
        Ln = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this, Fn(t).request) || this;
            return (n.options = t), n;
          }
          return xe(t, e), t;
        })(un),
        An = Object.prototype,
        Mn = An.toString,
        Vn = An.hasOwnProperty,
        zn = Function.prototype.toString,
        Qn = new Map();
      function qn(e, t) {
        try {
          return Un(e, t);
        } finally {
          Qn.clear();
        }
      }
      function Un(e, t) {
        if (e === t) return !0;
        var n = Mn.call(e);
        if (n !== Mn.call(t)) return !1;
        switch (n) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]":
            if (Kn(e, t)) return !0;
            var r = Bn(e),
              i = Bn(t),
              o = r.length;
            if (o !== i.length) return !1;
            for (var a = 0; a < o; ++a) if (!Vn.call(t, r[a])) return !1;
            for (a = 0; a < o; ++a) {
              var u = r[a];
              if (!Un(e[u], t[u])) return !1;
            }
            return !0;
          case "[object Error]":
            return e.name === t.name && e.message === t.message;
          case "[object Number]":
            if (e !== e) return t !== t;
          case "[object Boolean]":
          case "[object Date]":
            return +e === +t;
          case "[object RegExp]":
          case "[object String]":
            return e == "".concat(t);
          case "[object Map]":
          case "[object Set]":
            if (e.size !== t.size) return !1;
            if (Kn(e, t)) return !0;
            for (var s = e.entries(), l = "[object Map]" === n; ; ) {
              var c = s.next();
              if (c.done) break;
              var f = c.value,
                d = f[0],
                p = f[1];
              if (!t.has(d)) return !1;
              if (l && !Un(p, t.get(d))) return !1;
            }
            return !0;
          case "[object Uint16Array]":
          case "[object Uint8Array]":
          case "[object Uint32Array]":
          case "[object Int32Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object ArrayBuffer]":
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          case "[object DataView]":
            var h = e.byteLength;
            if (h === t.byteLength) for (; h-- && e[h] === t[h]; );
            return -1 === h;
          case "[object AsyncFunction]":
          case "[object GeneratorFunction]":
          case "[object AsyncGeneratorFunction]":
          case "[object Function]":
            var v = zn.call(e);
            return (
              v === zn.call(t) &&
              !(function (e, t) {
                var n = e.length - t.length;
                return n >= 0 && e.indexOf(t, n) === n;
              })(v, $n)
            );
        }
        return !1;
      }
      function Bn(e) {
        return Object.keys(e).filter(Wn, e);
      }
      function Wn(e) {
        return void 0 !== this[e];
      }
      var $n = "{ [native code] }";
      function Kn(e, t) {
        var n = Qn.get(e);
        if (n) {
          if (n.has(t)) return !0;
        } else Qn.set(e, (n = new Set()));
        return n.add(t), !1;
      }
      var Hn = function () {
          return Object.create(null);
        },
        Yn = Array.prototype,
        Gn = Yn.forEach,
        Jn = Yn.slice,
        Xn = (function () {
          function e(e, t) {
            void 0 === e && (e = !0),
              void 0 === t && (t = Hn),
              (this.weakness = e),
              (this.makeData = t);
          }
          return (
            (e.prototype.lookup = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return this.lookupArray(e);
            }),
            (e.prototype.lookupArray = function (e) {
              var t = this;
              return (
                Gn.call(e, function (e) {
                  return (t = t.getChildTrie(e));
                }),
                t.data || (t.data = this.makeData(Jn.call(e)))
              );
            }),
            (e.prototype.getChildTrie = function (t) {
              var n =
                  this.weakness &&
                  (function (e) {
                    switch (typeof e) {
                      case "object":
                        if (null === e) break;
                      case "function":
                        return !0;
                    }
                    return !1;
                  })(t)
                    ? this.weak || (this.weak = new WeakMap())
                    : this.strong || (this.strong = new Map()),
                r = n.get(t);
              return (
                r || n.set(t, (r = new e(this.weakness, this.makeData))), r
              );
            }),
            e
          );
        })();
      var Zn =
          "function" === typeof WeakMap &&
          "ReactNative" !==
            Ve(function () {
              return navigator.product;
            }),
        er = "function" === typeof WeakSet,
        tr = "function" === typeof Symbol && "function" === typeof Symbol.for,
        nr =
          "function" ===
          typeof Ve(function () {
            return window.document.createElement;
          }),
        rr =
          Ve(function () {
            return navigator.userAgent.indexOf("jsdom") >= 0;
          }) || !1,
        ir = nr && !rr;
      function or() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = Object.create(null);
        return (
          e.forEach(function (e) {
            e &&
              Object.keys(e).forEach(function (t) {
                var r = e[t];
                void 0 !== r && (n[t] = r);
              });
          }),
          n
        );
      }
      function ar(e, t) {
        var n = e.directives;
        return (
          !n ||
          !n.length ||
          (function (e) {
            var t = [];
            e &&
              e.length &&
              e.forEach(function (e) {
                if (
                  (function (e) {
                    var t = e.name.value;
                    return "skip" === t || "include" === t;
                  })(e)
                ) {
                  var n = e.arguments,
                    r = e.name.value;
                  __DEV__
                    ? je(
                        n && 1 === n.length,
                        "Incorrect number of arguments for the @".concat(
                          r,
                          " directive."
                        )
                      )
                    : je(n && 1 === n.length, 38);
                  var i = n[0];
                  __DEV__
                    ? je(
                        i.name && "if" === i.name.value,
                        "Invalid argument for the @".concat(r, " directive.")
                      )
                    : je(i.name && "if" === i.name.value, 39);
                  var o = i.value;
                  __DEV__
                    ? je(
                        o &&
                          ("Variable" === o.kind || "BooleanValue" === o.kind),
                        "Argument for the @".concat(
                          r,
                          " directive must be a variable or a boolean value."
                        )
                      )
                    : je(
                        o &&
                          ("Variable" === o.kind || "BooleanValue" === o.kind),
                        40
                      ),
                    t.push({ directive: e, ifArgument: i });
                }
              });
            return t;
          })(n).every(function (e) {
            var n = e.directive,
              r = e.ifArgument,
              i = !1;
            return (
              "Variable" === r.value.kind
                ? ((i = t && t[r.value.name.value]),
                  __DEV__
                    ? je(
                        void 0 !== i,
                        "Invalid variable referenced in @".concat(
                          n.name.value,
                          " directive."
                        )
                      )
                    : je(void 0 !== i, 37))
                : (i = r.value.value),
              "skip" === n.name.value ? !i : i
            );
          })
        );
      }
      function ur(e, t) {
        return (function (e) {
          var t = [];
          return (
            lt(e, {
              Directive: function (e) {
                t.push(e.name.value);
              },
            }),
            t
          );
        })(t).some(function (t) {
          return e.indexOf(t) > -1;
        });
      }
      function sr(e) {
        return e && ur(["client"], e) && ur(["export"], e);
      }
      var lr = Object.prototype.hasOwnProperty;
      function cr() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return fr(e);
      }
      function fr(e) {
        var t = e[0] || {},
          n = e.length;
        if (n > 1)
          for (var r = new pr(), i = 1; i < n; ++i) t = r.merge(t, e[i]);
        return t;
      }
      var dr = function (e, t, n) {
          return this.merge(e[n], t[n]);
        },
        pr = (function () {
          function e(e) {
            void 0 === e && (e = dr),
              (this.reconciler = e),
              (this.isObject = Rt),
              (this.pastCopies = new Set());
          }
          return (
            (e.prototype.merge = function (e, t) {
              for (var n = this, r = [], i = 2; i < arguments.length; i++)
                r[i - 2] = arguments[i];
              return Rt(t) && Rt(e)
                ? (Object.keys(t).forEach(function (i) {
                    if (lr.call(e, i)) {
                      var o = e[i];
                      if (t[i] !== o) {
                        var a = n.reconciler.apply(n, De([e, t, i], r, !1));
                        a !== o && ((e = n.shallowCopyForMerge(e))[i] = a);
                      }
                    } else (e = n.shallowCopyForMerge(e))[i] = t[i];
                  }),
                  e)
                : t;
            }),
            (e.prototype.shallowCopyForMerge = function (e) {
              return (
                Rt(e) &&
                  (this.pastCopies.has(e) ||
                    ((e = Array.isArray(e)
                      ? e.slice(0)
                      : Oe({ __proto__: Object.getPrototypeOf(e) }, e)),
                    this.pastCopies.add(e))),
                e
              );
            }),
            e
          );
        })(),
        hr = Object.prototype.hasOwnProperty;
      function vr(e, t) {
        var n = e.__typename,
          r = e.id,
          i = e._id;
        if (
          "string" === typeof n &&
          (t &&
            (t.keyObject =
              void 0 !== r ? { id: r } : void 0 !== i ? { _id: i } : void 0),
          void 0 === r && (r = i),
          void 0 !== r)
        )
          return ""
            .concat(n, ":")
            .concat(
              "number" === typeof r || "string" === typeof r
                ? r
                : JSON.stringify(r)
            );
      }
      var yr = {
        dataIdFromObject: vr,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1,
      };
      function mr(e) {
        var t = e.canonizeResults;
        return void 0 === t ? yr.canonizeResults : t;
      }
      var gr = /^[_a-z][_0-9a-z]*/i;
      function br(e) {
        var t = e.match(gr);
        return t ? t[0] : e;
      }
      function wr(e, t, n) {
        return (
          !!Rt(t) &&
          (Er(t)
            ? t.every(function (t) {
                return wr(e, t, n);
              })
            : e.selections.every(function (e) {
                if (Kt(e) && ar(e, n)) {
                  var r = Wt(e);
                  return (
                    hr.call(t, r) &&
                    (!e.selectionSet || wr(e.selectionSet, t[r], n))
                  );
                }
                return !0;
              }))
        );
      }
      function kr(e) {
        return Rt(e) && !Mt(e) && !Er(e);
      }
      var Er = function (e) {
        return Array.isArray(e);
      };
      var _r,
        Sr,
        xr = (function () {
          function e() {
            (this.known = new (er ? WeakSet : Set)()),
              (this.pool = new Xn(Zn)),
              (this.passes = new WeakMap()),
              (this.keysByJSON = new Map()),
              (this.empty = this.admit({}));
          }
          return (
            (e.prototype.isKnown = function (e) {
              return Rt(e) && this.known.has(e);
            }),
            (e.prototype.pass = function (e) {
              if (Rt(e)) {
                var t = (function (e) {
                  return Rt(e)
                    ? Er(e)
                      ? e.slice(0)
                      : Oe({ __proto__: Object.getPrototypeOf(e) }, e)
                    : e;
                })(e);
                return this.passes.set(t, e), t;
              }
              return e;
            }),
            (e.prototype.admit = function (e) {
              var t = this;
              if (Rt(e)) {
                var n = this.passes.get(e);
                if (n) return n;
                switch (Object.getPrototypeOf(e)) {
                  case Array.prototype:
                    if (this.known.has(e)) return e;
                    var r = e.map(this.admit, this);
                    return (
                      (u = this.pool.lookupArray(r)).array ||
                        (this.known.add((u.array = r)),
                        __DEV__ && Object.freeze(r)),
                      u.array
                    );
                  case null:
                  case Object.prototype:
                    if (this.known.has(e)) return e;
                    var i = Object.getPrototypeOf(e),
                      o = [i],
                      a = this.sortedKeys(e);
                    o.push(a.json);
                    var u,
                      s = o.length;
                    if (
                      (a.sorted.forEach(function (n) {
                        o.push(t.admit(e[n]));
                      }),
                      !(u = this.pool.lookupArray(o)).object)
                    ) {
                      var l = (u.object = Object.create(i));
                      this.known.add(l),
                        a.sorted.forEach(function (e, t) {
                          l[e] = o[s + t];
                        }),
                        __DEV__ && Object.freeze(l);
                    }
                    return u.object;
                }
              }
              return e;
            }),
            (e.prototype.sortedKeys = function (e) {
              var t = Object.keys(e),
                n = this.pool.lookupArray(t);
              if (!n.keys) {
                t.sort();
                var r = JSON.stringify(t);
                (n.keys = this.keysByJSON.get(r)) ||
                  this.keysByJSON.set(r, (n.keys = { sorted: t, json: r }));
              }
              return n.keys;
            }),
            e
          );
        })(),
        Or = Object.assign(
          function (e) {
            if (Rt(e)) {
              void 0 === _r && Tr();
              var t = _r.admit(e),
                n = Sr.get(t);
              return void 0 === n && Sr.set(t, (n = JSON.stringify(t))), n;
            }
            return JSON.stringify(e);
          },
          { reset: Tr }
        );
      function Tr() {
        (_r = new xr()), (Sr = new (Zn ? WeakMap : Map)());
      }
      function Cr(e, t, n) {
        return new It(function (r) {
          var i = r.next,
            o = r.error,
            a = r.complete,
            u = 0,
            s = !1,
            l = {
              then: function (e) {
                return new Promise(function (t) {
                  return t(e());
                });
              },
            };
          function c(e, t) {
            return e
              ? function (t) {
                  ++u;
                  var n = function () {
                    return e(t);
                  };
                  l = l
                    .then(n, n)
                    .then(
                      function (e) {
                        --u, i && i.call(r, e), s && f.complete();
                      },
                      function (e) {
                        throw (--u, e);
                      }
                    )
                    .catch(function (e) {
                      o && o.call(r, e);
                    });
                }
              : function (e) {
                  return t && t.call(r, e);
                };
          }
          var f = {
              next: c(t, i),
              error: c(n, o),
              complete: function () {
                (s = !0), u || (a && a.call(r));
              },
            },
            d = e.subscribe(f);
          return function () {
            return d.unsubscribe();
          };
        });
      }
      function Nr(e) {
        return (e.errors && e.errors.length > 0) || !1;
      }
      function Dr(e, t, n) {
        var r = 0;
        return (
          e.forEach(function (n, i) {
            t.call(this, n, i, e) && (e[r++] = n);
          }, n),
          (e.length = r),
          e
        );
      }
      var Pr = { kind: "Field", name: { kind: "Name", value: "__typename" } };
      function Ir(e, t) {
        return e.selectionSet.selections.every(function (e) {
          return "FragmentSpread" === e.kind && Ir(t[e.name.value], t);
        });
      }
      function Rr(e) {
        return Ir(
          Gt(e) ||
            (function (e) {
              __DEV__
                ? je(
                    "Document" === e.kind,
                    'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
                  )
                : je("Document" === e.kind, 48),
                __DEV__
                  ? je(
                      e.definitions.length <= 1,
                      "Fragment must have exactly one definition."
                    )
                  : je(e.definitions.length <= 1, 49);
              var t = e.definitions[0];
              return (
                __DEV__
                  ? je(
                      "FragmentDefinition" === t.kind,
                      "Must be a fragment definition."
                    )
                  : je("FragmentDefinition" === t.kind, 50),
                t
              );
            })(e),
          jt(Xt(e))
        )
          ? null
          : e;
      }
      function Fr(e) {
        return function (t) {
          return e.some(function (e) {
            return (e.name && e.name === t.name.value) || (e.test && e.test(t));
          });
        };
      }
      function jr(e, t) {
        var n = Object.create(null),
          r = [],
          i = Object.create(null),
          o = [],
          a = Rr(
            lt(t, {
              Variable: {
                enter: function (e, t, r) {
                  "VariableDefinition" !== r.kind && (n[e.name.value] = !0);
                },
              },
              Field: {
                enter: function (t) {
                  if (
                    e &&
                    t.directives &&
                    e.some(function (e) {
                      return e.remove;
                    }) &&
                    t.directives &&
                    t.directives.some(Fr(e))
                  )
                    return (
                      t.arguments &&
                        t.arguments.forEach(function (e) {
                          "Variable" === e.value.kind &&
                            r.push({ name: e.value.name.value });
                        }),
                      t.selectionSet &&
                        Mr(t.selectionSet).forEach(function (e) {
                          o.push({ name: e.name.value });
                        }),
                      null
                    );
                },
              },
              FragmentSpread: {
                enter: function (e) {
                  i[e.name.value] = !0;
                },
              },
              Directive: {
                enter: function (t) {
                  if (Fr(e)(t)) return null;
                },
              },
            })
          );
        return (
          a &&
            Dr(r, function (e) {
              return !!e.name && !n[e.name];
            }).length &&
            (a = (function (e, t) {
              var n = (function (e) {
                return function (t) {
                  return e.some(function (e) {
                    return (
                      t.value &&
                      "Variable" === t.value.kind &&
                      t.value.name &&
                      (e.name === t.value.name.value || (e.test && e.test(t)))
                    );
                  });
                };
              })(e);
              return Rr(
                lt(t, {
                  OperationDefinition: {
                    enter: function (t) {
                      return Oe(Oe({}, t), {
                        variableDefinitions: t.variableDefinitions
                          ? t.variableDefinitions.filter(function (t) {
                              return !e.some(function (e) {
                                return e.name === t.variable.name.value;
                              });
                            })
                          : [],
                      });
                    },
                  },
                  Field: {
                    enter: function (t) {
                      if (
                        e.some(function (e) {
                          return e.remove;
                        })
                      ) {
                        var r = 0;
                        if (
                          (t.arguments &&
                            t.arguments.forEach(function (e) {
                              n(e) && (r += 1);
                            }),
                          1 === r)
                        )
                          return null;
                      }
                    },
                  },
                  Argument: {
                    enter: function (e) {
                      if (n(e)) return null;
                    },
                  },
                })
              );
            })(r, a)),
          a &&
            Dr(o, function (e) {
              return !!e.name && !i[e.name];
            }).length &&
            (a = (function (e, t) {
              function n(t) {
                if (
                  e.some(function (e) {
                    return e.name === t.name.value;
                  })
                )
                  return null;
              }
              return Rr(
                lt(t, {
                  FragmentSpread: { enter: n },
                  FragmentDefinition: { enter: n },
                })
              );
            })(o, a)),
          a
        );
      }
      var Lr = Object.assign(
          function (e) {
            return lt(e, {
              SelectionSet: {
                enter: function (e, t, n) {
                  if (!n || "OperationDefinition" !== n.kind) {
                    var r = e.selections;
                    if (r)
                      if (
                        !r.some(function (e) {
                          return (
                            Kt(e) &&
                            ("__typename" === e.name.value ||
                              0 === e.name.value.lastIndexOf("__", 0))
                          );
                        })
                      ) {
                        var i = n;
                        if (
                          !(
                            Kt(i) &&
                            i.directives &&
                            i.directives.some(function (e) {
                              return "export" === e.name.value;
                            })
                          )
                        )
                          return Oe(Oe({}, e), {
                            selections: De(De([], r, !0), [Pr], !1),
                          });
                      }
                  }
                },
              },
            });
          },
          {
            added: function (e) {
              return e === Pr;
            },
          }
        ),
        Ar = {
          test: function (e) {
            var t = "connection" === e.name.value;
            return (
              t &&
                ((e.arguments &&
                  e.arguments.some(function (e) {
                    return "key" === e.name.value;
                  })) ||
                  (__DEV__ &&
                    je.warn(
                      "Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."
                    ))),
              t
            );
          },
        };
      function Mr(e) {
        var t = [];
        return (
          e.selections.forEach(function (e) {
            (Kt(e) || Ht(e)) && e.selectionSet
              ? Mr(e.selectionSet).forEach(function (e) {
                  return t.push(e);
                })
              : "FragmentSpread" === e.kind && t.push(e);
          }),
          t
        );
      }
      function Vr(e) {
        return "query" === en(e).operation
          ? e
          : lt(e, {
              OperationDefinition: {
                enter: function (e) {
                  return Oe(Oe({}, e), { operation: "query" });
                },
              },
            });
      }
      var zr = new Map();
      function Qr(e) {
        var t = zr.get(e) || 1;
        return (
          zr.set(e, t + 1),
          ""
            .concat(e, ":")
            .concat(t, ":")
            .concat(Math.random().toString(36).slice(2))
        );
      }
      function qr(e, t, n) {
        var r = [];
        e.forEach(function (e) {
          return e[t] && r.push(e);
        }),
          r.forEach(function (e) {
            return e[t](n);
          });
      }
      function Ur(e) {
        function t(t) {
          Object.defineProperty(e, t, { value: It });
        }
        return tr && Symbol.species && t(Symbol.species), t("@@species"), e;
      }
      function Br(e) {
        return e && "function" === typeof e.then;
      }
      var Wr = (function (e) {
        function t(t) {
          var n =
            e.call(this, function (e) {
              return (
                n.addObserver(e),
                function () {
                  return n.removeObserver(e);
                }
              );
            }) || this;
          return (
            (n.observers = new Set()),
            (n.addCount = 0),
            (n.promise = new Promise(function (e, t) {
              (n.resolve = e), (n.reject = t);
            })),
            (n.handlers = {
              next: function (e) {
                null !== n.sub &&
                  ((n.latest = ["next", e]), qr(n.observers, "next", e));
              },
              error: function (e) {
                var t = n.sub;
                null !== t &&
                  (t &&
                    setTimeout(function () {
                      return t.unsubscribe();
                    }),
                  (n.sub = null),
                  (n.latest = ["error", e]),
                  n.reject(e),
                  qr(n.observers, "error", e));
              },
              complete: function () {
                var e = n.sub;
                if (null !== e) {
                  var t = n.sources.shift();
                  t
                    ? Br(t)
                      ? t.then(function (e) {
                          return (n.sub = e.subscribe(n.handlers));
                        })
                      : (n.sub = t.subscribe(n.handlers))
                    : (e &&
                        setTimeout(function () {
                          return e.unsubscribe();
                        }),
                      (n.sub = null),
                      n.latest && "next" === n.latest[0]
                        ? n.resolve(n.latest[1])
                        : n.resolve(),
                      qr(n.observers, "complete"));
                }
              },
            }),
            (n.cancel = function (e) {
              n.reject(e), (n.sources = []), n.handlers.complete();
            }),
            n.promise.catch(function (e) {}),
            "function" === typeof t && (t = [new It(t)]),
            Br(t)
              ? t.then(function (e) {
                  return n.start(e);
                }, n.handlers.error)
              : n.start(t),
            n
          );
        }
        return (
          xe(t, e),
          (t.prototype.start = function (e) {
            void 0 === this.sub &&
              ((this.sources = Array.from(e)), this.handlers.complete());
          }),
          (t.prototype.deliverLastMessage = function (e) {
            if (this.latest) {
              var t = this.latest[0],
                n = e[t];
              n && n.call(e, this.latest[1]),
                null === this.sub && "next" === t && e.complete && e.complete();
            }
          }),
          (t.prototype.addObserver = function (e) {
            this.observers.has(e) ||
              (this.deliverLastMessage(e),
              this.observers.add(e),
              ++this.addCount);
          }),
          (t.prototype.removeObserver = function (e, t) {
            this.observers.delete(e) &&
              --this.addCount < 1 &&
              !t &&
              this.handlers.complete();
          }),
          (t.prototype.cleanup = function (e) {
            var t = this,
              n = !1,
              r = function () {
                n || ((n = !0), t.observers.delete(i), e());
              },
              i = { next: r, error: r, complete: r },
              o = this.addCount;
            this.addObserver(i), (this.addCount = o);
          }),
          t
        );
      })(It);
      function $r(e) {
        return Array.isArray(e) && e.length > 0;
      }
      Ur(Wr);
      var Kr,
        Hr = (function (e) {
          function t(n) {
            var r = n.graphQLErrors,
              i = n.clientErrors,
              o = n.networkError,
              a = n.errorMessage,
              u = n.extraInfo,
              s = e.call(this, a) || this;
            return (
              (s.graphQLErrors = r || []),
              (s.clientErrors = i || []),
              (s.networkError = o || null),
              (s.message =
                a ||
                (function (e) {
                  var t = "";
                  return (
                    ($r(e.graphQLErrors) || $r(e.clientErrors)) &&
                      (e.graphQLErrors || [])
                        .concat(e.clientErrors || [])
                        .forEach(function (e) {
                          var n = e ? e.message : "Error message not found.";
                          t += "".concat(n, "\n");
                        }),
                    e.networkError &&
                      (t += "".concat(e.networkError.message, "\n")),
                    (t = t.replace(/\n$/, ""))
                  );
                })(s)),
              (s.extraInfo = u),
              (s.__proto__ = t.prototype),
              s
            );
          }
          return xe(t, e), t;
        })(Error);
      function Yr(e) {
        return !!e && e < 7;
      }
      !(function (e) {
        (e[(e.loading = 1)] = "loading"),
          (e[(e.setVariables = 2)] = "setVariables"),
          (e[(e.fetchMore = 3)] = "fetchMore"),
          (e[(e.refetch = 4)] = "refetch"),
          (e[(e.poll = 6)] = "poll"),
          (e[(e.ready = 7)] = "ready"),
          (e[(e.error = 8)] = "error");
      })(Kr || (Kr = {}));
      var Gr = Object.prototype.toString;
      function Jr(e) {
        return Xr(e);
      }
      function Xr(e, t) {
        switch (Gr.call(e)) {
          case "[object Array]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var n = e.slice(0);
            return (
              t.set(e, n),
              n.forEach(function (e, r) {
                n[r] = Xr(e, t);
              }),
              n
            );
          case "[object Object]":
            if ((t = t || new Map()).has(e)) return t.get(e);
            var r = Object.create(Object.getPrototypeOf(e));
            return (
              t.set(e, r),
              Object.keys(e).forEach(function (n) {
                r[n] = Xr(e[n], t);
              }),
              r
            );
          default:
            return e;
        }
      }
      var Zr = Object.assign,
        ei = Object.hasOwnProperty,
        ti = (function (e) {
          function t(t) {
            var n = t.queryManager,
              r = t.queryInfo,
              i = t.options,
              o =
                e.call(this, function (e) {
                  try {
                    var n = e._subscription._observer;
                    n && !n.error && (n.error = ri);
                  } catch (t) {}
                  var r = !o.observers.size;
                  o.observers.add(e);
                  var i = o.last;
                  return (
                    i && i.error
                      ? e.error && e.error(i.error)
                      : i && i.result && e.next && e.next(i.result),
                    r && o.reobserve().catch(function () {}),
                    function () {
                      o.observers.delete(e) &&
                        !o.observers.size &&
                        o.tearDownQuery();
                    }
                  );
                }) || this;
            (o.observers = new Set()),
              (o.subscriptions = new Set()),
              (o.queryInfo = r),
              (o.queryManager = n),
              (o.isTornDown = !1);
            var a = n.defaultOptions.watchQuery,
              u = (void 0 === a ? {} : a).fetchPolicy,
              s = void 0 === u ? "cache-first" : u,
              l = i.fetchPolicy,
              c = void 0 === l ? s : l,
              f = i.initialFetchPolicy,
              d = void 0 === f ? ("standby" === c ? s : c) : f;
            (o.options = Oe(Oe({}, i), {
              initialFetchPolicy: d,
              fetchPolicy: c,
            })),
              (o.queryId = r.queryId || n.generateQueryId());
            var p = Gt(o.query);
            return (o.queryName = p && p.name && p.name.value), o;
          }
          return (
            xe(t, e),
            Object.defineProperty(t.prototype, "query", {
              get: function () {
                return this.queryManager.transform(this.options.query).document;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "variables", {
              get: function () {
                return this.options.variables;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.result = function () {
              var e = this;
              return new Promise(function (t, n) {
                var r = {
                    next: function (n) {
                      t(n),
                        e.observers.delete(r),
                        e.observers.size ||
                          e.queryManager.removeQuery(e.queryId),
                        setTimeout(function () {
                          i.unsubscribe();
                        }, 0);
                    },
                    error: n,
                  },
                  i = e.subscribe(r);
              });
            }),
            (t.prototype.getCurrentResult = function (e) {
              void 0 === e && (e = !0);
              var t = this.getLastResult(!0),
                n =
                  this.queryInfo.networkStatus ||
                  (t && t.networkStatus) ||
                  Kr.ready,
                r = Oe(Oe({}, t), { loading: Yr(n), networkStatus: n }),
                i = this.options.fetchPolicy,
                o = void 0 === i ? "cache-first" : i;
              if (
                "network-only" === o ||
                "no-cache" === o ||
                "standby" === o ||
                this.queryManager.transform(this.options.query)
                  .hasForcedResolvers
              );
              else {
                var a = this.queryInfo.getDiff();
                (a.complete || this.options.returnPartialData) &&
                  (r.data = a.result),
                  qn(r.data, {}) && (r.data = void 0),
                  a.complete
                    ? (delete r.partial,
                      !a.complete ||
                        r.networkStatus !== Kr.loading ||
                        ("cache-first" !== o && "cache-only" !== o) ||
                        ((r.networkStatus = Kr.ready), (r.loading = !1)))
                    : (r.partial = !0),
                  !__DEV__ ||
                    a.complete ||
                    this.options.partialRefetch ||
                    r.loading ||
                    r.data ||
                    r.error ||
                    ii(a.missing);
              }
              return e && this.updateLastResult(r), r;
            }),
            (t.prototype.isDifferentFromLastResult = function (e) {
              return !this.last || !qn(this.last.result, e);
            }),
            (t.prototype.getLast = function (e, t) {
              var n = this.last;
              if (n && n[e] && (!t || qn(n.variables, this.variables)))
                return n[e];
            }),
            (t.prototype.getLastResult = function (e) {
              return this.getLast("result", e);
            }),
            (t.prototype.getLastError = function (e) {
              return this.getLast("error", e);
            }),
            (t.prototype.resetLastResults = function () {
              delete this.last, (this.isTornDown = !1);
            }),
            (t.prototype.resetQueryStoreErrors = function () {
              this.queryManager.resetErrors(this.queryId);
            }),
            (t.prototype.refetch = function (e) {
              var t,
                n = { pollInterval: 0 },
                r = this.options.fetchPolicy;
              if (
                ((n.fetchPolicy =
                  "cache-and-network" === r
                    ? r
                    : "no-cache" === r
                    ? "no-cache"
                    : "network-only"),
                __DEV__ && e && ei.call(e, "variables"))
              ) {
                var i = Zt(this.query),
                  o = i.variableDefinitions;
                (o &&
                  o.some(function (e) {
                    return "variables" === e.variable.name.value;
                  })) ||
                  (__DEV__ &&
                    je.warn(
                      "Called refetch("
                        .concat(JSON.stringify(e), ") for query ")
                        .concat(
                          (null === (t = i.name) || void 0 === t
                            ? void 0
                            : t.value) || JSON.stringify(i),
                          ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"
                        )
                    ));
              }
              return (
                e &&
                  !qn(this.options.variables, e) &&
                  (n.variables = this.options.variables =
                    Oe(Oe({}, this.options.variables), e)),
                this.queryInfo.resetLastWrite(),
                this.reobserve(n, Kr.refetch)
              );
            }),
            (t.prototype.fetchMore = function (e) {
              var t = this,
                n = Oe(
                  Oe(
                    {},
                    e.query
                      ? e
                      : Oe(
                          Oe(
                            Oe(Oe({}, this.options), { query: this.query }),
                            e
                          ),
                          {
                            variables: Oe(
                              Oe({}, this.options.variables),
                              e.variables
                            ),
                          }
                        )
                  ),
                  { fetchPolicy: "no-cache" }
                ),
                r = this.queryManager.generateQueryId(),
                i = this.queryInfo,
                o = i.networkStatus;
              (i.networkStatus = Kr.fetchMore),
                n.notifyOnNetworkStatusChange && this.observe();
              var a = new Set();
              return this.queryManager
                .fetchQuery(r, n, Kr.fetchMore)
                .then(function (u) {
                  return (
                    t.queryManager.removeQuery(r),
                    i.networkStatus === Kr.fetchMore && (i.networkStatus = o),
                    t.queryManager.cache.batch({
                      update: function (r) {
                        var i = e.updateQuery;
                        i
                          ? r.updateQuery(
                              {
                                query: t.query,
                                variables: t.variables,
                                returnPartialData: !0,
                                optimistic: !1,
                              },
                              function (e) {
                                return i(e, {
                                  fetchMoreResult: u.data,
                                  variables: n.variables,
                                });
                              }
                            )
                          : r.writeQuery({
                              query: n.query,
                              variables: n.variables,
                              data: u.data,
                            });
                      },
                      onWatchUpdated: function (e) {
                        a.add(e.query);
                      },
                    }),
                    u
                  );
                })
                .finally(function () {
                  a.has(t.query) || ni(t);
                });
            }),
            (t.prototype.subscribeToMore = function (e) {
              var t = this,
                n = this.queryManager
                  .startGraphQLSubscription({
                    query: e.document,
                    variables: e.variables,
                    context: e.context,
                  })
                  .subscribe({
                    next: function (n) {
                      var r = e.updateQuery;
                      r &&
                        t.updateQuery(function (e, t) {
                          var i = t.variables;
                          return r(e, { subscriptionData: n, variables: i });
                        });
                    },
                    error: function (t) {
                      e.onError
                        ? e.onError(t)
                        : __DEV__ &&
                          je.error("Unhandled GraphQL subscription error", t);
                    },
                  });
              return (
                this.subscriptions.add(n),
                function () {
                  t.subscriptions.delete(n) && n.unsubscribe();
                }
              );
            }),
            (t.prototype.setOptions = function (e) {
              return this.reobserve(e);
            }),
            (t.prototype.setVariables = function (e) {
              return qn(this.variables, e)
                ? this.observers.size
                  ? this.result()
                  : Promise.resolve()
                : ((this.options.variables = e),
                  this.observers.size
                    ? this.reobserve(
                        {
                          fetchPolicy: this.options.initialFetchPolicy,
                          variables: e,
                        },
                        Kr.setVariables
                      )
                    : Promise.resolve());
            }),
            (t.prototype.updateQuery = function (e) {
              var t = this.queryManager,
                n = e(
                  t.cache.diff({
                    query: this.options.query,
                    variables: this.variables,
                    returnPartialData: !0,
                    optimistic: !1,
                  }).result,
                  { variables: this.variables }
                );
              n &&
                (t.cache.writeQuery({
                  query: this.options.query,
                  data: n,
                  variables: this.variables,
                }),
                t.broadcastQueries());
            }),
            (t.prototype.startPolling = function (e) {
              (this.options.pollInterval = e), this.updatePolling();
            }),
            (t.prototype.stopPolling = function () {
              (this.options.pollInterval = 0), this.updatePolling();
            }),
            (t.prototype.applyNextFetchPolicy = function (e, t) {
              if (t.nextFetchPolicy) {
                var n = t.fetchPolicy,
                  r = void 0 === n ? "cache-first" : n,
                  i = t.initialFetchPolicy,
                  o = void 0 === i ? r : i;
                "standby" === r ||
                  ("function" === typeof t.nextFetchPolicy
                    ? (t.fetchPolicy = t.nextFetchPolicy(r, {
                        reason: e,
                        options: t,
                        observable: this,
                        initialFetchPolicy: o,
                      }))
                    : (t.fetchPolicy =
                        "variables-changed" === e ? o : t.nextFetchPolicy));
              }
              return t.fetchPolicy;
            }),
            (t.prototype.fetch = function (e, t) {
              return (
                this.queryManager.setObservableQuery(this),
                this.queryManager.fetchQueryObservable(this.queryId, e, t)
              );
            }),
            (t.prototype.updatePolling = function () {
              var e = this;
              if (!this.queryManager.ssrMode) {
                var t = this.pollingInfo,
                  n = this.options.pollInterval;
                if (n) {
                  if (!t || t.interval !== n) {
                    __DEV__
                      ? je(
                          n,
                          "Attempted to start a polling query without a polling interval."
                        )
                      : je(n, 10),
                      ((t || (this.pollingInfo = {})).interval = n);
                    var r = function () {
                        e.pollingInfo &&
                          (Yr(e.queryInfo.networkStatus)
                            ? i()
                            : e
                                .reobserve(
                                  { fetchPolicy: "network-only" },
                                  Kr.poll
                                )
                                .then(i, i));
                      },
                      i = function () {
                        var t = e.pollingInfo;
                        t &&
                          (clearTimeout(t.timeout),
                          (t.timeout = setTimeout(r, t.interval)));
                      };
                    i();
                  }
                } else t && (clearTimeout(t.timeout), delete this.pollingInfo);
              }
            }),
            (t.prototype.updateLastResult = function (e, t) {
              return (
                void 0 === t && (t = this.variables),
                (this.last = Oe(Oe({}, this.last), {
                  result: this.queryManager.assumeImmutableResults ? e : Jr(e),
                  variables: t,
                })),
                $r(e.errors) || delete this.last.error,
                this.last
              );
            }),
            (t.prototype.reobserve = function (e, t) {
              var n = this;
              this.isTornDown = !1;
              var r = t === Kr.refetch || t === Kr.fetchMore || t === Kr.poll,
                i = this.options.variables,
                o = this.options.fetchPolicy,
                a = or(this.options, e || {}),
                u = r ? a : Zr(this.options, a);
              r ||
                (this.updatePolling(),
                e &&
                  e.variables &&
                  !qn(e.variables, i) &&
                  "standby" !== u.fetchPolicy &&
                  u.fetchPolicy === o &&
                  (this.applyNextFetchPolicy("variables-changed", u),
                  void 0 === t && (t = Kr.setVariables)));
              var s = u.variables && Oe({}, u.variables),
                l = this.fetch(u, t),
                c = {
                  next: function (e) {
                    n.reportResult(e, s);
                  },
                  error: function (e) {
                    n.reportError(e, s);
                  },
                };
              return (
                r ||
                  (this.concast &&
                    this.observer &&
                    this.concast.removeObserver(this.observer),
                  (this.concast = l),
                  (this.observer = c)),
                l.addObserver(c),
                l.promise
              );
            }),
            (t.prototype.observe = function () {
              this.reportResult(this.getCurrentResult(!1), this.variables);
            }),
            (t.prototype.reportResult = function (e, t) {
              var n = this.getLastError();
              (n || this.isDifferentFromLastResult(e)) &&
                ((n || !e.partial || this.options.returnPartialData) &&
                  this.updateLastResult(e, t),
                qr(this.observers, "next", e));
            }),
            (t.prototype.reportError = function (e, t) {
              var n = Oe(Oe({}, this.getLastResult()), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: Kr.error,
                loading: !1,
              });
              this.updateLastResult(n, t),
                qr(this.observers, "error", (this.last.error = e));
            }),
            (t.prototype.hasObservers = function () {
              return this.observers.size > 0;
            }),
            (t.prototype.tearDownQuery = function () {
              this.isTornDown ||
                (this.concast &&
                  this.observer &&
                  (this.concast.removeObserver(this.observer),
                  delete this.concast,
                  delete this.observer),
                this.stopPolling(),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.subscriptions.clear(),
                this.queryManager.stopQuery(this.queryId),
                this.observers.clear(),
                (this.isTornDown = !0));
            }),
            t
          );
        })(It);
      function ni(e) {
        var t = e.options,
          n = t.fetchPolicy,
          r = t.nextFetchPolicy;
        return "cache-and-network" === n || "network-only" === n
          ? e.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function () {
                return (
                  (this.nextFetchPolicy = r),
                  "function" === typeof r ? r.apply(this, arguments) : n
                );
              },
            })
          : e.reobserve();
      }
      function ri(e) {
        __DEV__ && je.error("Unhandled error", e.message, e.stack);
      }
      function ii(e) {
        __DEV__ &&
          e &&
          __DEV__ &&
          je.debug(
            "Missing cache result fields: ".concat(JSON.stringify(e)),
            e
          );
      }
      Ur(ti);
      var oi = null,
        ai = {},
        ui = 1,
        si = "@wry/context:Slot",
        li = Array,
        ci =
          li[si] ||
          (function () {
            var e = (function () {
              function e() {
                this.id = [
                  "slot",
                  ui++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(":");
              }
              return (
                (e.prototype.hasValue = function () {
                  for (var e = oi; e; e = e.parent)
                    if (this.id in e.slots) {
                      var t = e.slots[this.id];
                      if (t === ai) break;
                      return e !== oi && (oi.slots[this.id] = t), !0;
                    }
                  return oi && (oi.slots[this.id] = ai), !1;
                }),
                (e.prototype.getValue = function () {
                  if (this.hasValue()) return oi.slots[this.id];
                }),
                (e.prototype.withValue = function (e, t, n, r) {
                  var i,
                    o = (((i = { __proto__: null })[this.id] = e), i),
                    a = oi;
                  oi = { parent: a, slots: o };
                  try {
                    return t.apply(r, n);
                  } finally {
                    oi = a;
                  }
                }),
                (e.bind = function (e) {
                  var t = oi;
                  return function () {
                    var n = oi;
                    try {
                      return (oi = t), e.apply(this, arguments);
                    } finally {
                      oi = n;
                    }
                  };
                }),
                (e.noContext = function (e, t, n) {
                  if (!oi) return e.apply(n, t);
                  var r = oi;
                  try {
                    return (oi = null), e.apply(n, t);
                  } finally {
                    oi = r;
                  }
                }),
                e
              );
            })();
            try {
              Object.defineProperty(li, si, {
                value: (li[si] = e),
                enumerable: !1,
                writable: !1,
                configurable: !1,
              });
            } finally {
              return e;
            }
          })();
      ci.bind, ci.noContext;
      function fi() {}
      var di,
        pi = (function () {
          function e(e, t) {
            void 0 === e && (e = 1 / 0),
              void 0 === t && (t = fi),
              (this.max = e),
              (this.dispose = t),
              (this.map = new Map()),
              (this.newest = null),
              (this.oldest = null);
          }
          return (
            (e.prototype.has = function (e) {
              return this.map.has(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getNode(e);
              return t && t.value;
            }),
            (e.prototype.getNode = function (e) {
              var t = this.map.get(e);
              if (t && t !== this.newest) {
                var n = t.older,
                  r = t.newer;
                r && (r.older = n),
                  n && (n.newer = r),
                  (t.older = this.newest),
                  (t.older.newer = t),
                  (t.newer = null),
                  (this.newest = t),
                  t === this.oldest && (this.oldest = r);
              }
              return t;
            }),
            (e.prototype.set = function (e, t) {
              var n = this.getNode(e);
              return n
                ? (n.value = t)
                : ((n = { key: e, value: t, newer: null, older: this.newest }),
                  this.newest && (this.newest.newer = n),
                  (this.newest = n),
                  (this.oldest = this.oldest || n),
                  this.map.set(e, n),
                  n.value);
            }),
            (e.prototype.clean = function () {
              for (; this.oldest && this.map.size > this.max; )
                this.delete(this.oldest.key);
            }),
            (e.prototype.delete = function (e) {
              var t = this.map.get(e);
              return (
                !!t &&
                (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
              );
            }),
            e
          );
        })(),
        hi = new ci(),
        vi = Object.prototype.hasOwnProperty,
        yi =
          void 0 === (di = Array.from)
            ? function (e) {
                var t = [];
                return (
                  e.forEach(function (e) {
                    return t.push(e);
                  }),
                  t
                );
              }
            : di;
      function mi(e) {
        var t = e.unsubscribe;
        "function" === typeof t && ((e.unsubscribe = void 0), t());
      }
      var gi = [];
      function bi(e, t) {
        if (!e) throw new Error(t || "assertion failure");
      }
      function wi(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      var ki = (function () {
        function e(t) {
          (this.fn = t),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            (this.deps = null),
            ++e.count;
        }
        return (
          (e.prototype.peek = function () {
            if (1 === this.value.length && !Si(this))
              return Ei(this), this.value[0];
          }),
          (e.prototype.recompute = function (e) {
            return (
              bi(!this.recomputing, "already recomputing"),
              Ei(this),
              Si(this)
                ? (function (e, t) {
                    Pi(e),
                      hi.withValue(e, _i, [e, t]),
                      (function (e, t) {
                        if ("function" === typeof e.subscribe)
                          try {
                            mi(e), (e.unsubscribe = e.subscribe.apply(null, t));
                          } catch (ea) {
                            return e.setDirty(), !1;
                          }
                        return !0;
                      })(e, t) &&
                        (function (e) {
                          if (((e.dirty = !1), Si(e))) return;
                          Oi(e);
                        })(e);
                    return wi(e.value);
                  })(this, e)
                : wi(this.value)
            );
          }),
          (e.prototype.setDirty = function () {
            this.dirty ||
              ((this.dirty = !0), (this.value.length = 0), xi(this), mi(this));
          }),
          (e.prototype.dispose = function () {
            var e = this;
            this.setDirty(),
              Pi(this),
              Ti(this, function (t, n) {
                t.setDirty(), Ii(t, e);
              });
          }),
          (e.prototype.forget = function () {
            this.dispose();
          }),
          (e.prototype.dependOn = function (e) {
            e.add(this),
              this.deps || (this.deps = gi.pop() || new Set()),
              this.deps.add(e);
          }),
          (e.prototype.forgetDeps = function () {
            var e = this;
            this.deps &&
              (yi(this.deps).forEach(function (t) {
                return t.delete(e);
              }),
              this.deps.clear(),
              gi.push(this.deps),
              (this.deps = null));
          }),
          (e.count = 0),
          e
        );
      })();
      function Ei(e) {
        var t = hi.getValue();
        if (t)
          return (
            e.parents.add(t),
            t.childValues.has(e) || t.childValues.set(e, []),
            Si(e) ? Ci(t, e) : Ni(t, e),
            t
          );
      }
      function _i(e, t) {
        (e.recomputing = !0), (e.value.length = 0);
        try {
          e.value[0] = e.fn.apply(null, t);
        } catch (ea) {
          e.value[1] = ea;
        }
        e.recomputing = !1;
      }
      function Si(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
      }
      function xi(e) {
        Ti(e, Ci);
      }
      function Oi(e) {
        Ti(e, Ni);
      }
      function Ti(e, t) {
        var n = e.parents.size;
        if (n) for (var r = yi(e.parents), i = 0; i < n; ++i) t(r[i], e);
      }
      function Ci(e, t) {
        bi(e.childValues.has(t)), bi(Si(t));
        var n = !Si(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = gi.pop() || new Set();
        e.dirtyChildren.add(t), n && xi(e);
      }
      function Ni(e, t) {
        bi(e.childValues.has(t)), bi(!Si(t));
        var n = e.childValues.get(t);
        0 === n.length
          ? e.childValues.set(t, t.value.slice(0))
          : (function (e, t) {
              var n = e.length;
              return n > 0 && n === t.length && e[n - 1] === t[n - 1];
            })(n, t.value) || e.setDirty(),
          Di(e, t),
          Si(e) || Oi(e);
      }
      function Di(e, t) {
        var n = e.dirtyChildren;
        n &&
          (n.delete(t),
          0 === n.size &&
            (gi.length < 100 && gi.push(n), (e.dirtyChildren = null)));
      }
      function Pi(e) {
        e.childValues.size > 0 &&
          e.childValues.forEach(function (t, n) {
            Ii(e, n);
          }),
          e.forgetDeps(),
          bi(null === e.dirtyChildren);
      }
      function Ii(e, t) {
        t.parents.delete(e), e.childValues.delete(t), Di(e, t);
      }
      var Ri = { setDirty: !0, dispose: !0, forget: !0 };
      function Fi(e) {
        var t = new Map(),
          n = e && e.subscribe;
        function r(e) {
          var r = hi.getValue();
          if (r) {
            var i = t.get(e);
            i || t.set(e, (i = new Set())),
              r.dependOn(i),
              "function" === typeof n && (mi(i), (i.unsubscribe = n(e)));
          }
        }
        return (
          (r.dirty = function (e, n) {
            var r = t.get(e);
            if (r) {
              var i = n && vi.call(Ri, n) ? n : "setDirty";
              yi(r).forEach(function (e) {
                return e[i]();
              }),
                t.delete(e),
                mi(r);
            }
          }),
          r
        );
      }
      function ji() {
        var e = new Xn("function" === typeof WeakMap);
        return function () {
          return e.lookupArray(arguments);
        };
      }
      ji();
      var Li = new Set();
      function Ai(e, t) {
        void 0 === t && (t = Object.create(null));
        var n = new pi(t.max || Math.pow(2, 16), function (e) {
            return e.dispose();
          }),
          r = t.keyArgs,
          i = t.makeCacheKey || ji(),
          o = function () {
            var o = i.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var a = n.get(o);
            a ||
              (n.set(o, (a = new ki(e))),
              (a.subscribe = t.subscribe),
              (a.forget = function () {
                return n.delete(o);
              }));
            var u = a.recompute(Array.prototype.slice.call(arguments));
            return (
              n.set(o, a),
              Li.add(n),
              hi.hasValue() ||
                (Li.forEach(function (e) {
                  return e.clean();
                }),
                Li.clear()),
              u
            );
          };
        function a(e) {
          var t = n.get(e);
          t && t.setDirty();
        }
        function u(e) {
          var t = n.get(e);
          if (t) return t.peek();
        }
        function s(e) {
          return n.delete(e);
        }
        return (
          Object.defineProperty(o, "size", {
            get: function () {
              return n.map.size;
            },
            configurable: !1,
            enumerable: !1,
          }),
          (o.dirtyKey = a),
          (o.dirty = function () {
            a(i.apply(null, arguments));
          }),
          (o.peekKey = u),
          (o.peek = function () {
            return u(i.apply(null, arguments));
          }),
          (o.forgetKey = s),
          (o.forget = function () {
            return s(i.apply(null, arguments));
          }),
          (o.makeCacheKey = i),
          (o.getKey = r
            ? function () {
                return i.apply(null, r.apply(null, arguments));
              }
            : i),
          Object.freeze(o)
        );
      }
      var Mi = new ci(),
        Vi = new WeakMap();
      function zi(e) {
        var t = Vi.get(e);
        return t || Vi.set(e, (t = { vars: new Set(), dep: Fi() })), t;
      }
      function Qi(e) {
        zi(e).vars.forEach(function (t) {
          return t.forgetCache(e);
        });
      }
      function qi(e) {
        var t = new Set(),
          n = new Set(),
          r = function r(o) {
            if (arguments.length > 0) {
              if (e !== o) {
                (e = o),
                  t.forEach(function (e) {
                    zi(e).dep.dirty(r), Ui(e);
                  });
                var a = Array.from(n);
                n.clear(),
                  a.forEach(function (t) {
                    return t(e);
                  });
              }
            } else {
              var u = Mi.getValue();
              u && (i(u), zi(u).dep(r));
            }
            return e;
          };
        r.onNextChange = function (e) {
          return (
            n.add(e),
            function () {
              n.delete(e);
            }
          );
        };
        var i = (r.attachCache = function (e) {
          return t.add(e), zi(e).vars.add(r), r;
        });
        return (
          (r.forgetCache = function (e) {
            return t.delete(e);
          }),
          r
        );
      }
      function Ui(e) {
        e.broadcastWatches && e.broadcastWatches();
      }
      var Bi = (function () {
          function e(e) {
            var t = e.cache,
              n = e.client,
              r = e.resolvers,
              i = e.fragmentMatcher;
            (this.cache = t),
              n && (this.client = n),
              r && this.addResolvers(r),
              i && this.setFragmentMatcher(i);
          }
          return (
            (e.prototype.addResolvers = function (e) {
              var t = this;
              (this.resolvers = this.resolvers || {}),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      t.resolvers = cr(t.resolvers, e);
                    })
                  : (this.resolvers = cr(this.resolvers, e));
            }),
            (e.prototype.setResolvers = function (e) {
              (this.resolvers = {}), this.addResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.resolvers || {};
            }),
            (e.prototype.runResolvers = function (e) {
              var t = e.document,
                n = e.remoteResult,
                r = e.context,
                i = e.variables,
                o = e.onlyRunForcedResolvers,
                a = void 0 !== o && o;
              return Ce(this, void 0, void 0, function () {
                return Ne(this, function (e) {
                  return t
                    ? [
                        2,
                        this.resolveDocument(
                          t,
                          n.data,
                          r,
                          i,
                          this.fragmentMatcher,
                          a
                        ).then(function (e) {
                          return Oe(Oe({}, n), { data: e.result });
                        }),
                      ]
                    : [2, n];
                });
              });
            }),
            (e.prototype.setFragmentMatcher = function (e) {
              this.fragmentMatcher = e;
            }),
            (e.prototype.getFragmentMatcher = function () {
              return this.fragmentMatcher;
            }),
            (e.prototype.clientQuery = function (e) {
              return ur(["client"], e) && this.resolvers ? e : null;
            }),
            (e.prototype.serverQuery = function (e) {
              return (function (e) {
                Yt(e);
                var t = jr(
                  [
                    {
                      test: function (e) {
                        return "client" === e.name.value;
                      },
                      remove: !0,
                    },
                  ],
                  e
                );
                return (
                  t &&
                    (t = lt(t, {
                      FragmentDefinition: {
                        enter: function (e) {
                          if (
                            e.selectionSet &&
                            e.selectionSet.selections.every(function (e) {
                              return Kt(e) && "__typename" === e.name.value;
                            })
                          )
                            return null;
                        },
                      },
                    })),
                  t
                );
              })(e);
            }),
            (e.prototype.prepareContext = function (e) {
              var t = this.cache;
              return Oe(Oe({}, e), {
                cache: t,
                getCacheKey: function (e) {
                  return t.identify(e);
                },
              });
            }),
            (e.prototype.addExportedVariables = function (e, t, n) {
              return (
                void 0 === t && (t = {}),
                void 0 === n && (n = {}),
                Ce(this, void 0, void 0, function () {
                  return Ne(this, function (r) {
                    return e
                      ? [
                          2,
                          this.resolveDocument(
                            e,
                            this.buildRootValueFromCache(e, t) || {},
                            this.prepareContext(n),
                            t
                          ).then(function (e) {
                            return Oe(Oe({}, t), e.exportedVariables);
                          }),
                        ]
                      : [2, Oe({}, t)];
                  });
                })
              );
            }),
            (e.prototype.shouldForceResolvers = function (e) {
              var t = !1;
              return (
                lt(e, {
                  Directive: {
                    enter: function (e) {
                      if (
                        "client" === e.name.value &&
                        e.arguments &&
                        (t = e.arguments.some(function (e) {
                          return (
                            "always" === e.name.value &&
                            "BooleanValue" === e.value.kind &&
                            !0 === e.value.value
                          );
                        }))
                      )
                        return st;
                    },
                  },
                }),
                t
              );
            }),
            (e.prototype.buildRootValueFromCache = function (e, t) {
              return this.cache.diff({
                query: Vr(e),
                variables: t,
                returnPartialData: !0,
                optimistic: !1,
              }).result;
            }),
            (e.prototype.resolveDocument = function (e, t, n, r, i, o) {
              return (
                void 0 === n && (n = {}),
                void 0 === r && (r = {}),
                void 0 === i &&
                  (i = function () {
                    return !0;
                  }),
                void 0 === o && (o = !1),
                Ce(this, void 0, void 0, function () {
                  var a, u, s, l, c, f, d, p, h;
                  return Ne(this, function (v) {
                    return (
                      (a = en(e)),
                      (u = Xt(e)),
                      (s = jt(u)),
                      (l = a.operation),
                      (c = l
                        ? l.charAt(0).toUpperCase() + l.slice(1)
                        : "Query"),
                      (d = (f = this).cache),
                      (p = f.client),
                      (h = {
                        fragmentMap: s,
                        context: Oe(Oe({}, n), { cache: d, client: p }),
                        variables: r,
                        fragmentMatcher: i,
                        defaultOperationType: c,
                        exportedVariables: {},
                        onlyRunForcedResolvers: o,
                      }),
                      [
                        2,
                        this.resolveSelectionSet(a.selectionSet, t, h).then(
                          function (e) {
                            return {
                              result: e,
                              exportedVariables: h.exportedVariables,
                            };
                          }
                        ),
                      ]
                    );
                  });
                })
              );
            }),
            (e.prototype.resolveSelectionSet = function (e, t, n) {
              return Ce(this, void 0, void 0, function () {
                var r,
                  i,
                  o,
                  a,
                  u,
                  s = this;
                return Ne(this, function (l) {
                  return (
                    (r = n.fragmentMap),
                    (i = n.context),
                    (o = n.variables),
                    (a = [t]),
                    (u = function (e) {
                      return Ce(s, void 0, void 0, function () {
                        var u, s;
                        return Ne(this, function (l) {
                          return ar(e, o)
                            ? Kt(e)
                              ? [
                                  2,
                                  this.resolveField(e, t, n).then(function (t) {
                                    var n;
                                    "undefined" !== typeof t &&
                                      a.push((((n = {})[Wt(e)] = t), n));
                                  }),
                                ]
                              : (Ht(e)
                                  ? (u = e)
                                  : ((u = r[e.name.value]),
                                    __DEV__
                                      ? je(
                                          u,
                                          "No fragment named ".concat(
                                            e.name.value
                                          )
                                        )
                                      : je(u, 9)),
                                u &&
                                u.typeCondition &&
                                ((s = u.typeCondition.name.value),
                                n.fragmentMatcher(t, s, i))
                                  ? [
                                      2,
                                      this.resolveSelectionSet(
                                        u.selectionSet,
                                        t,
                                        n
                                      ).then(function (e) {
                                        a.push(e);
                                      }),
                                    ]
                                  : [2])
                            : [2];
                        });
                      });
                    }),
                    [
                      2,
                      Promise.all(e.selections.map(u)).then(function () {
                        return fr(a);
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveField = function (e, t, n) {
              return Ce(this, void 0, void 0, function () {
                var r,
                  i,
                  o,
                  a,
                  u,
                  s,
                  l,
                  c,
                  f,
                  d = this;
                return Ne(this, function (p) {
                  return (
                    (r = n.variables),
                    (i = e.name.value),
                    (o = Wt(e)),
                    (a = i !== o),
                    (u = t[o] || t[i]),
                    (s = Promise.resolve(u)),
                    (n.onlyRunForcedResolvers &&
                      !this.shouldForceResolvers(e)) ||
                      ((l = t.__typename || n.defaultOperationType),
                      (c = this.resolvers && this.resolvers[l]) &&
                        (f = c[a ? i : o]) &&
                        (s = Promise.resolve(
                          Mi.withValue(this.cache, f, [
                            t,
                            Bt(e, r),
                            n.context,
                            { field: e, fragmentMap: n.fragmentMap },
                          ])
                        ))),
                    [
                      2,
                      s.then(function (t) {
                        return (
                          void 0 === t && (t = u),
                          e.directives &&
                            e.directives.forEach(function (e) {
                              "export" === e.name.value &&
                                e.arguments &&
                                e.arguments.forEach(function (e) {
                                  "as" === e.name.value &&
                                    "StringValue" === e.value.kind &&
                                    (n.exportedVariables[e.value.value] = t);
                                });
                            }),
                          e.selectionSet
                            ? null == t
                              ? t
                              : Array.isArray(t)
                              ? d.resolveSubSelectedArray(e, t, n)
                              : e.selectionSet
                              ? d.resolveSelectionSet(e.selectionSet, t, n)
                              : void 0
                            : t
                        );
                      }),
                    ]
                  );
                });
              });
            }),
            (e.prototype.resolveSubSelectedArray = function (e, t, n) {
              var r = this;
              return Promise.all(
                t.map(function (t) {
                  return null === t
                    ? null
                    : Array.isArray(t)
                    ? r.resolveSubSelectedArray(e, t, n)
                    : e.selectionSet
                    ? r.resolveSelectionSet(e.selectionSet, t, n)
                    : void 0;
                })
              );
            }),
            e
          );
        })(),
        Wi = new (Zn ? WeakMap : Map)();
      function $i(e, t) {
        var n = e[t];
        "function" === typeof n &&
          (e[t] = function () {
            return Wi.set(e, (Wi.get(e) + 1) % 1e15), n.apply(this, arguments);
          });
      }
      function Ki(e) {
        e.notifyTimeout &&
          (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0));
      }
      var Hi = (function () {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()),
            (this.queryId = t),
            (this.listeners = new Set()),
            (this.document = null),
            (this.lastRequestId = 1),
            (this.subscriptions = new Set()),
            (this.stopped = !1),
            (this.dirty = !1),
            (this.observableQuery = null);
          var n = (this.cache = e.cache);
          Wi.has(n) ||
            (Wi.set(n, 0), $i(n, "evict"), $i(n, "modify"), $i(n, "reset"));
        }
        return (
          (e.prototype.init = function (e) {
            var t = e.networkStatus || Kr.loading;
            return (
              this.variables &&
                this.networkStatus !== Kr.loading &&
                !qn(this.variables, e.variables) &&
                (t = Kr.setVariables),
              qn(e.variables, this.variables) || (this.lastDiff = void 0),
              Object.assign(this, {
                document: e.document,
                variables: e.variables,
                networkError: null,
                graphQLErrors: this.graphQLErrors || [],
                networkStatus: t,
              }),
              e.observableQuery && this.setObservableQuery(e.observableQuery),
              e.lastRequestId && (this.lastRequestId = e.lastRequestId),
              this
            );
          }),
          (e.prototype.reset = function () {
            Ki(this), (this.lastDiff = void 0), (this.dirty = !1);
          }),
          (e.prototype.getDiff = function (e) {
            void 0 === e && (e = this.variables);
            var t = this.getDiffOptions(e);
            if (this.lastDiff && qn(t, this.lastDiff.options))
              return this.lastDiff.diff;
            this.updateWatch((this.variables = e));
            var n = this.observableQuery;
            if (n && "no-cache" === n.options.fetchPolicy)
              return { complete: !1 };
            var r = this.cache.diff(t);
            return this.updateLastDiff(r, t), r;
          }),
          (e.prototype.updateLastDiff = function (e, t) {
            this.lastDiff = e
              ? { diff: e, options: t || this.getDiffOptions() }
              : void 0;
          }),
          (e.prototype.getDiffOptions = function (e) {
            var t;
            return (
              void 0 === e && (e = this.variables),
              {
                query: this.document,
                variables: e,
                returnPartialData: !0,
                optimistic: !0,
                canonizeResults:
                  null === (t = this.observableQuery) || void 0 === t
                    ? void 0
                    : t.options.canonizeResults,
              }
            );
          }),
          (e.prototype.setDiff = function (e) {
            var t = this,
              n = this.lastDiff && this.lastDiff.diff;
            this.updateLastDiff(e),
              this.dirty ||
                qn(n && n.result, e && e.result) ||
                ((this.dirty = !0),
                this.notifyTimeout ||
                  (this.notifyTimeout = setTimeout(function () {
                    return t.notify();
                  }, 0)));
          }),
          (e.prototype.setObservableQuery = function (e) {
            var t = this;
            e !== this.observableQuery &&
              (this.oqListener && this.listeners.delete(this.oqListener),
              (this.observableQuery = e),
              e
                ? ((e.queryInfo = this),
                  this.listeners.add(
                    (this.oqListener = function () {
                      t.getDiff().fromOptimisticTransaction
                        ? e.observe()
                        : ni(e);
                    })
                  ))
                : delete this.oqListener);
          }),
          (e.prototype.notify = function () {
            var e = this;
            Ki(this),
              this.shouldNotify() &&
                this.listeners.forEach(function (t) {
                  return t(e);
                }),
              (this.dirty = !1);
          }),
          (e.prototype.shouldNotify = function () {
            if (!this.dirty || !this.listeners.size) return !1;
            if (Yr(this.networkStatus) && this.observableQuery) {
              var e = this.observableQuery.options.fetchPolicy;
              if ("cache-only" !== e && "cache-and-network" !== e) return !1;
            }
            return !0;
          }),
          (e.prototype.stop = function () {
            if (!this.stopped) {
              (this.stopped = !0),
                this.reset(),
                this.cancel(),
                (this.cancel = e.prototype.cancel),
                this.subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                });
              var t = this.observableQuery;
              t && t.stopPolling();
            }
          }),
          (e.prototype.cancel = function () {}),
          (e.prototype.updateWatch = function (e) {
            var t = this;
            void 0 === e && (e = this.variables);
            var n = this.observableQuery;
            if (!n || "no-cache" !== n.options.fetchPolicy) {
              var r = Oe(Oe({}, this.getDiffOptions(e)), {
                watcher: this,
                callback: function (e) {
                  return t.setDiff(e);
                },
              });
              (this.lastWatch && qn(r, this.lastWatch)) ||
                (this.cancel(),
                (this.cancel = this.cache.watch((this.lastWatch = r))));
            }
          }),
          (e.prototype.resetLastWrite = function () {
            this.lastWrite = void 0;
          }),
          (e.prototype.shouldWrite = function (e, t) {
            var n = this.lastWrite;
            return !(
              n &&
              n.dmCount === Wi.get(this.cache) &&
              qn(t, n.variables) &&
              qn(e.data, n.result.data)
            );
          }),
          (e.prototype.markResult = function (e, t, n) {
            var r = this;
            (this.graphQLErrors = $r(e.errors) ? e.errors : []),
              this.reset(),
              "no-cache" === t.fetchPolicy
                ? this.updateLastDiff(
                    { result: e.data, complete: !0 },
                    this.getDiffOptions(t.variables)
                  )
                : 0 !== n &&
                  (Yi(e, t.errorPolicy)
                    ? this.cache.performTransaction(function (i) {
                        if (r.shouldWrite(e, t.variables))
                          i.writeQuery({
                            query: r.document,
                            data: e.data,
                            variables: t.variables,
                            overwrite: 1 === n,
                          }),
                            (r.lastWrite = {
                              result: e,
                              variables: t.variables,
                              dmCount: Wi.get(r.cache),
                            });
                        else if (r.lastDiff && r.lastDiff.diff.complete)
                          return void (e.data = r.lastDiff.diff.result);
                        var o = r.getDiffOptions(t.variables),
                          a = i.diff(o);
                        r.stopped || r.updateWatch(t.variables),
                          r.updateLastDiff(a, o),
                          a.complete && (e.data = a.result);
                      })
                    : (this.lastWrite = void 0));
          }),
          (e.prototype.markReady = function () {
            return (this.networkError = null), (this.networkStatus = Kr.ready);
          }),
          (e.prototype.markError = function (e) {
            return (
              (this.networkStatus = Kr.error),
              (this.lastWrite = void 0),
              this.reset(),
              e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors),
              e.networkError && (this.networkError = e.networkError),
              e
            );
          }),
          e
        );
      })();
      function Yi(e, t) {
        void 0 === t && (t = "none");
        var n = "ignore" === t || "all" === t,
          r = !Nr(e);
        return !r && n && e.data && (r = !0), r;
      }
      var Gi = Object.prototype.hasOwnProperty,
        Ji = (function () {
          function e(e) {
            var t = e.cache,
              n = e.link,
              r = e.defaultOptions,
              i = e.queryDeduplication,
              o = void 0 !== i && i,
              a = e.onBroadcast,
              u = e.ssrMode,
              s = void 0 !== u && u,
              l = e.clientAwareness,
              c = void 0 === l ? {} : l,
              f = e.localState,
              d = e.assumeImmutableResults;
            (this.clientAwareness = {}),
              (this.queries = new Map()),
              (this.fetchCancelFns = new Map()),
              (this.transformCache = new (Zn ? WeakMap : Map)()),
              (this.queryIdCounter = 1),
              (this.requestIdCounter = 1),
              (this.mutationIdCounter = 1),
              (this.inFlightLinkObservables = new Map()),
              (this.cache = t),
              (this.link = n),
              (this.defaultOptions = r || Object.create(null)),
              (this.queryDeduplication = o),
              (this.clientAwareness = c),
              (this.localState = f || new Bi({ cache: t })),
              (this.ssrMode = s),
              (this.assumeImmutableResults = !!d),
              (this.onBroadcast = a) &&
                (this.mutationStore = Object.create(null));
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, n) {
                e.stopQueryNoBroadcast(n);
              }),
                this.cancelPendingFetches(
                  __DEV__
                    ? new Fe("QueryManager stopped while query was in flight")
                    : new Fe(11)
                );
            }),
            (e.prototype.cancelPendingFetches = function (e) {
              this.fetchCancelFns.forEach(function (t) {
                return t(e);
              }),
                this.fetchCancelFns.clear();
            }),
            (e.prototype.mutate = function (e) {
              var t,
                n,
                r = e.mutation,
                i = e.variables,
                o = e.optimisticResponse,
                a = e.updateQueries,
                u = e.refetchQueries,
                s = void 0 === u ? [] : u,
                l = e.awaitRefetchQueries,
                c = void 0 !== l && l,
                f = e.update,
                d = e.onQueryUpdated,
                p = e.fetchPolicy,
                h =
                  void 0 === p
                    ? (null === (t = this.defaultOptions.mutate) || void 0 === t
                        ? void 0
                        : t.fetchPolicy) || "network-only"
                    : p,
                v = e.errorPolicy,
                y =
                  void 0 === v
                    ? (null === (n = this.defaultOptions.mutate) || void 0 === n
                        ? void 0
                        : n.errorPolicy) || "none"
                    : v,
                m = e.keepRootFields,
                g = e.context;
              return Ce(this, void 0, void 0, function () {
                var e, t, n;
                return Ne(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (
                        __DEV__
                          ? je(
                              r,
                              "mutation option is required. You must specify your GraphQL document in the mutation option."
                            )
                          : je(r, 12),
                        __DEV__
                          ? je(
                              "network-only" === h || "no-cache" === h,
                              "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write."
                            )
                          : je("network-only" === h || "no-cache" === h, 13),
                        (e = this.generateMutationId()),
                        (r = this.transform(r).document),
                        (i = this.getVariables(r, i)),
                        this.transform(r).hasClientExports
                          ? [4, this.localState.addExportedVariables(r, i, g)]
                          : [3, 2]
                      );
                    case 1:
                      (i = u.sent()), (u.label = 2);
                    case 2:
                      return (
                        (t =
                          this.mutationStore &&
                          (this.mutationStore[e] = {
                            mutation: r,
                            variables: i,
                            loading: !0,
                            error: null,
                          })),
                        o &&
                          this.markMutationOptimistic(o, {
                            mutationId: e,
                            document: r,
                            variables: i,
                            fetchPolicy: h,
                            errorPolicy: y,
                            context: g,
                            updateQueries: a,
                            update: f,
                            keepRootFields: m,
                          }),
                        this.broadcastQueries(),
                        (n = this),
                        [
                          2,
                          new Promise(function (u, l) {
                            return Cr(
                              n.getObservableFromLink(
                                r,
                                Oe(Oe({}, g), { optimisticResponse: o }),
                                i,
                                !1
                              ),
                              function (u) {
                                if (Nr(u) && "none" === y)
                                  throw new Hr({ graphQLErrors: u.errors });
                                t && ((t.loading = !1), (t.error = null));
                                var l = Oe({}, u);
                                return (
                                  "function" === typeof s && (s = s(l)),
                                  "ignore" === y && Nr(l) && delete l.errors,
                                  n.markMutationResult({
                                    mutationId: e,
                                    result: l,
                                    document: r,
                                    variables: i,
                                    fetchPolicy: h,
                                    errorPolicy: y,
                                    context: g,
                                    update: f,
                                    updateQueries: a,
                                    awaitRefetchQueries: c,
                                    refetchQueries: s,
                                    removeOptimistic: o ? e : void 0,
                                    onQueryUpdated: d,
                                    keepRootFields: m,
                                  })
                                );
                              }
                            ).subscribe({
                              next: function (e) {
                                n.broadcastQueries(), u(e);
                              },
                              error: function (r) {
                                t && ((t.loading = !1), (t.error = r)),
                                  o && n.cache.removeOptimistic(e),
                                  n.broadcastQueries(),
                                  l(
                                    r instanceof Hr
                                      ? r
                                      : new Hr({ networkError: r })
                                  );
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.markMutationResult = function (e, t) {
              var n = this;
              void 0 === t && (t = this.cache);
              var r = e.result,
                i = [],
                o = "no-cache" === e.fetchPolicy;
              if (!o && Yi(r, e.errorPolicy)) {
                i.push({
                  result: r.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables,
                });
                var a = e.updateQueries;
                a &&
                  this.queries.forEach(function (e, o) {
                    var u = e.observableQuery,
                      s = u && u.queryName;
                    if (s && Gi.call(a, s)) {
                      var l = a[s],
                        c = n.queries.get(o),
                        f = c.document,
                        d = c.variables,
                        p = t.diff({
                          query: f,
                          variables: d,
                          returnPartialData: !0,
                          optimistic: !1,
                        }),
                        h = p.result;
                      if (p.complete && h) {
                        var v = l(h, {
                          mutationResult: r,
                          queryName: (f && Jt(f)) || void 0,
                          queryVariables: d,
                        });
                        v &&
                          i.push({
                            result: v,
                            dataId: "ROOT_QUERY",
                            query: f,
                            variables: d,
                          });
                      }
                    }
                  });
              }
              if (
                i.length > 0 ||
                e.refetchQueries ||
                e.update ||
                e.onQueryUpdated ||
                e.removeOptimistic
              ) {
                var u = [];
                if (
                  (this.refetchQueries({
                    updateCache: function (t) {
                      o ||
                        i.forEach(function (e) {
                          return t.write(e);
                        });
                      var a = e.update;
                      if (a) {
                        if (!o) {
                          var u = t.diff({
                            id: "ROOT_MUTATION",
                            query: n.transform(e.document).asQuery,
                            variables: e.variables,
                            optimistic: !1,
                            returnPartialData: !0,
                          });
                          u.complete && (r = Oe(Oe({}, r), { data: u.result }));
                        }
                        a(t, r, { context: e.context, variables: e.variables });
                      }
                      o ||
                        e.keepRootFields ||
                        t.modify({
                          id: "ROOT_MUTATION",
                          fields: function (e, t) {
                            var n = t.fieldName,
                              r = t.DELETE;
                            return "__typename" === n ? e : r;
                          },
                        });
                    },
                    include: e.refetchQueries,
                    optimistic: !1,
                    removeOptimistic: e.removeOptimistic,
                    onQueryUpdated: e.onQueryUpdated || null,
                  }).forEach(function (e) {
                    return u.push(e);
                  }),
                  e.awaitRefetchQueries || e.onQueryUpdated)
                )
                  return Promise.all(u).then(function () {
                    return r;
                  });
              }
              return Promise.resolve(r);
            }),
            (e.prototype.markMutationOptimistic = function (e, t) {
              var n = this,
                r = "function" === typeof e ? e(t.variables) : e;
              return this.cache.recordOptimisticTransaction(function (e) {
                try {
                  n.markMutationResult(
                    Oe(Oe({}, t), { result: { data: r } }),
                    e
                  );
                } catch (i) {
                  __DEV__ && je.error(i);
                }
              }, t.mutationId);
            }),
            (e.prototype.fetchQuery = function (e, t, n) {
              return this.fetchQueryObservable(e, t, n).promise;
            }),
            (e.prototype.getQueryStore = function () {
              var e = Object.create(null);
              return (
                this.queries.forEach(function (t, n) {
                  e[n] = {
                    variables: t.variables,
                    networkStatus: t.networkStatus,
                    networkError: t.networkError,
                    graphQLErrors: t.graphQLErrors,
                  };
                }),
                e
              );
            }),
            (e.prototype.resetErrors = function (e) {
              var t = this.queries.get(e);
              t && ((t.networkError = void 0), (t.graphQLErrors = []));
            }),
            (e.prototype.transform = function (e) {
              var t,
                n = this.transformCache;
              if (!n.has(e)) {
                var r = this.cache.transformDocument(e),
                  i = ((t = this.cache.transformForLink(r)), jr([Ar], Yt(t))),
                  o = this.localState.clientQuery(r),
                  a = i && this.localState.serverQuery(i),
                  u = {
                    document: r,
                    hasClientExports: sr(r),
                    hasForcedResolvers: this.localState.shouldForceResolvers(r),
                    clientQuery: o,
                    serverQuery: a,
                    defaultVars: tn(Gt(r)),
                    asQuery: Oe(Oe({}, r), {
                      definitions: r.definitions.map(function (e) {
                        return "OperationDefinition" === e.kind &&
                          "query" !== e.operation
                          ? Oe(Oe({}, e), { operation: "query" })
                          : e;
                      }),
                    }),
                  },
                  s = function (e) {
                    e && !n.has(e) && n.set(e, u);
                  };
                s(e), s(r), s(o), s(a);
              }
              return n.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return Oe(Oe({}, this.transform(e).defaultVars), t);
            }),
            (e.prototype.watchQuery = function (e) {
              "undefined" ===
                typeof (e = Oe(Oe({}, e), {
                  variables: this.getVariables(e.query, e.variables),
                })).notifyOnNetworkStatusChange &&
                (e.notifyOnNetworkStatusChange = !1);
              var t = new Hi(this),
                n = new ti({ queryManager: this, queryInfo: t, options: e });
              return (
                this.queries.set(n.queryId, t),
                t.init({
                  document: n.query,
                  observableQuery: n,
                  variables: n.variables,
                }),
                n
              );
            }),
            (e.prototype.query = function (e, t) {
              var n = this;
              return (
                void 0 === t && (t = this.generateQueryId()),
                __DEV__
                  ? je(
                      e.query,
                      "query option is required. You must specify your GraphQL document in the query option."
                    )
                  : je(e.query, 14),
                __DEV__
                  ? je(
                      "Document" === e.query.kind,
                      'You must wrap the query string in a "gql" tag.'
                    )
                  : je("Document" === e.query.kind, 15),
                __DEV__
                  ? je(
                      !e.returnPartialData,
                      "returnPartialData option only supported on watchQuery."
                    )
                  : je(!e.returnPartialData, 16),
                __DEV__
                  ? je(
                      !e.pollInterval,
                      "pollInterval option only supported on watchQuery."
                    )
                  : je(!e.pollInterval, 17),
                this.fetchQuery(t, e).finally(function () {
                  return n.stopQuery(t);
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.queryIdCounter++);
            }),
            (e.prototype.generateRequestId = function () {
              return this.requestIdCounter++;
            }),
            (e.prototype.generateMutationId = function () {
              return String(this.mutationIdCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              var t = this.queries.get(e);
              t && t.stop();
            }),
            (e.prototype.clearStore = function (e) {
              return (
                void 0 === e && (e = { discardWatches: !0 }),
                this.cancelPendingFetches(
                  __DEV__
                    ? new Fe(
                        "Store reset while query was in flight (not completed in link chain)"
                      )
                    : new Fe(18)
                ),
                this.queries.forEach(function (e) {
                  e.observableQuery ? (e.networkStatus = Kr.loading) : e.stop();
                }),
                this.mutationStore &&
                  (this.mutationStore = Object.create(null)),
                this.cache.reset(e)
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = "active");
              var n = new Map(),
                r = new Map(),
                i = new Set();
              return (
                Array.isArray(e) &&
                  e.forEach(function (e) {
                    var n;
                    "string" === typeof e
                      ? r.set(e, !1)
                      : Rt((n = e)) &&
                        "Document" === n.kind &&
                        Array.isArray(n.definitions)
                      ? r.set(t.transform(e).document, !1)
                      : Rt(e) && e.query && i.add(e);
                  }),
                this.queries.forEach(function (t, i) {
                  var o = t.observableQuery,
                    a = t.document;
                  if (o) {
                    if ("all" === e) return void n.set(i, o);
                    var u = o.queryName;
                    if (
                      "standby" === o.options.fetchPolicy ||
                      ("active" === e && !o.hasObservers())
                    )
                      return;
                    ("active" === e || (u && r.has(u)) || (a && r.has(a))) &&
                      (n.set(i, o), u && r.set(u, !0), a && r.set(a, !0));
                  }
                }),
                i.size &&
                  i.forEach(function (e) {
                    var r = Qr("legacyOneTimeQuery"),
                      i = t
                        .getQuery(r)
                        .init({ document: e.query, variables: e.variables }),
                      o = new ti({
                        queryManager: t,
                        queryInfo: i,
                        options: Oe(Oe({}, e), { fetchPolicy: "network-only" }),
                      });
                    je(o.queryId === r), i.setObservableQuery(o), n.set(r, o);
                  }),
                __DEV__ &&
                  r.size &&
                  r.forEach(function (e, t) {
                    e ||
                      (__DEV__ &&
                        je.warn(
                          "Unknown query "
                            .concat("string" === typeof t ? "named " : "")
                            .concat(
                              JSON.stringify(t, null, 2),
                              " requested in refetchQueries options.include array"
                            )
                        ));
                  }),
                n
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var n = [];
              return (
                this.getObservableQueries(e ? "all" : "active").forEach(
                  function (r, i) {
                    var o = r.options.fetchPolicy;
                    r.resetLastResults(),
                      (e || ("standby" !== o && "cache-only" !== o)) &&
                        n.push(r.refetch()),
                      t.getQuery(i).setDiff(null);
                  }
                ),
                this.broadcastQueries(),
                Promise.all(n)
              );
            }),
            (e.prototype.setObservableQuery = function (e) {
              this.getQuery(e.queryId).setObservableQuery(e);
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                n = e.query,
                r = e.fetchPolicy,
                i = e.errorPolicy,
                o = e.variables,
                a = e.context,
                u = void 0 === a ? {} : a;
              (n = this.transform(n).document), (o = this.getVariables(n, o));
              var s = function (e) {
                return t.getObservableFromLink(n, u, e).map(function (o) {
                  if (
                    ("no-cache" !== r &&
                      (Yi(o, i) &&
                        t.cache.write({
                          query: n,
                          result: o.data,
                          dataId: "ROOT_SUBSCRIPTION",
                          variables: e,
                        }),
                      t.broadcastQueries()),
                    Nr(o))
                  )
                    throw new Hr({ graphQLErrors: o.errors });
                  return o;
                });
              };
              if (this.transform(n).hasClientExports) {
                var l = this.localState.addExportedVariables(n, o, u).then(s);
                return new It(function (e) {
                  var t = null;
                  return (
                    l.then(function (n) {
                      return (t = n.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return s(o);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchCancelFns.delete(e),
                this.queries.has(e) &&
                  (this.getQuery(e).stop(), this.queries.delete(e));
            }),
            (e.prototype.broadcastQueries = function () {
              this.onBroadcast && this.onBroadcast(),
                this.queries.forEach(function (e) {
                  return e.notify();
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, n, r) {
              var i,
                o,
                a = this;
              void 0 === r &&
                (r =
                  null !==
                    (i =
                      null === t || void 0 === t
                        ? void 0
                        : t.queryDeduplication) && void 0 !== i
                    ? i
                    : this.queryDeduplication);
              var u = this.transform(e).serverQuery;
              if (u) {
                var s = this.inFlightLinkObservables,
                  l = this.link,
                  c = {
                    query: u,
                    variables: n,
                    operationName: Jt(u) || void 0,
                    context: this.prepareContext(
                      Oe(Oe({}, t), { forceFetch: !r })
                    ),
                  };
                if (((t = c.context), r)) {
                  var f = s.get(u) || new Map();
                  s.set(u, f);
                  var d = Or(n);
                  if (!(o = f.get(d))) {
                    var p = new Wr([jn(l, c)]);
                    f.set(d, (o = p)),
                      p.cleanup(function () {
                        f.delete(d) && f.size < 1 && s.delete(u);
                      });
                  }
                } else o = new Wr([jn(l, c)]);
              } else
                (o = new Wr([It.of({ data: {} })])),
                  (t = this.prepareContext(t));
              var h = this.transform(e).clientQuery;
              return (
                h &&
                  (o = Cr(o, function (e) {
                    return a.localState.runResolvers({
                      document: h,
                      remoteResult: e,
                      context: t,
                      variables: n,
                    });
                  })),
                o
              );
            }),
            (e.prototype.getResultsFromLink = function (e, t, n) {
              var r = (e.lastRequestId = this.generateRequestId());
              return Cr(
                this.getObservableFromLink(e.document, n.context, n.variables),
                function (i) {
                  var o = $r(i.errors);
                  if (r >= e.lastRequestId) {
                    if (o && "none" === n.errorPolicy)
                      throw e.markError(new Hr({ graphQLErrors: i.errors }));
                    e.markResult(i, n, t), e.markReady();
                  }
                  var a = {
                    data: i.data,
                    loading: !1,
                    networkStatus: Kr.ready,
                  };
                  return (
                    o &&
                      "ignore" !== n.errorPolicy &&
                      ((a.errors = i.errors), (a.networkStatus = Kr.error)),
                    a
                  );
                },
                function (t) {
                  var n = t.hasOwnProperty("graphQLErrors")
                    ? t
                    : new Hr({ networkError: t });
                  throw (r >= e.lastRequestId && e.markError(n), n);
                }
              );
            }),
            (e.prototype.fetchQueryObservable = function (e, t, n) {
              var r = this;
              void 0 === n && (n = Kr.loading);
              var i = this.transform(t.query).document,
                o = this.getVariables(i, t.variables),
                a = this.getQuery(e),
                u = this.defaultOptions.watchQuery,
                s = t.fetchPolicy,
                l = void 0 === s ? (u && u.fetchPolicy) || "cache-first" : s,
                c = t.errorPolicy,
                f = void 0 === c ? (u && u.errorPolicy) || "none" : c,
                d = t.returnPartialData,
                p = void 0 !== d && d,
                h = t.notifyOnNetworkStatusChange,
                v = void 0 !== h && h,
                y = t.context,
                m = void 0 === y ? {} : y,
                g = Object.assign({}, t, {
                  query: i,
                  variables: o,
                  fetchPolicy: l,
                  errorPolicy: f,
                  returnPartialData: p,
                  notifyOnNetworkStatusChange: v,
                  context: m,
                }),
                b = function (e) {
                  g.variables = e;
                  var i = r.fetchQueryByPolicy(a, g, n);
                  return (
                    "standby" !== g.fetchPolicy &&
                      i.length > 0 &&
                      a.observableQuery &&
                      a.observableQuery.applyNextFetchPolicy("after-fetch", t),
                    i
                  );
                },
                w = function () {
                  return r.fetchCancelFns.delete(e);
                };
              this.fetchCancelFns.set(e, function (e) {
                w(),
                  setTimeout(function () {
                    return k.cancel(e);
                  });
              });
              var k = new Wr(
                this.transform(g.query).hasClientExports
                  ? this.localState
                      .addExportedVariables(g.query, g.variables, g.context)
                      .then(b)
                  : b(g.variables)
              );
              return k.promise.then(w, w), k;
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this,
                n = e.updateCache,
                r = e.include,
                i = e.optimistic,
                o = void 0 !== i && i,
                a = e.removeOptimistic,
                u = void 0 === a ? (o ? Qr("refetchQueries") : void 0) : a,
                s = e.onQueryUpdated,
                l = new Map();
              r &&
                this.getObservableQueries(r).forEach(function (e, n) {
                  l.set(n, { oq: e, lastDiff: t.getQuery(n).getDiff() });
                });
              var c = new Map();
              return (
                n &&
                  this.cache.batch({
                    update: n,
                    optimistic: (o && u) || !1,
                    removeOptimistic: u,
                    onWatchUpdated: function (e, t, n) {
                      var r =
                        e.watcher instanceof Hi && e.watcher.observableQuery;
                      if (r) {
                        if (s) {
                          l.delete(r.queryId);
                          var i = s(r, t, n);
                          return (
                            !0 === i && (i = r.refetch()),
                            !1 !== i && c.set(r, i),
                            i
                          );
                        }
                        null !== s &&
                          l.set(r.queryId, { oq: r, lastDiff: n, diff: t });
                      }
                    },
                  }),
                l.size &&
                  l.forEach(function (e, n) {
                    var r,
                      i = e.oq,
                      o = e.lastDiff,
                      a = e.diff;
                    if (s) {
                      if (!a) {
                        var u = i.queryInfo;
                        u.reset(), (a = u.getDiff());
                      }
                      r = s(i, a, o);
                    }
                    (s && !0 !== r) || (r = i.refetch()),
                      !1 !== r && c.set(i, r),
                      n.indexOf("legacyOneTimeQuery") >= 0 &&
                        t.stopQueryNoBroadcast(n);
                  }),
                u && this.cache.removeOptimistic(u),
                c
              );
            }),
            (e.prototype.fetchQueryByPolicy = function (e, t, n) {
              var r = this,
                i = t.query,
                o = t.variables,
                a = t.fetchPolicy,
                u = t.refetchWritePolicy,
                s = t.errorPolicy,
                l = t.returnPartialData,
                c = t.context,
                f = t.notifyOnNetworkStatusChange,
                d = e.networkStatus;
              e.init({
                document: this.transform(i).document,
                variables: o,
                networkStatus: n,
              });
              var p = function () {
                  return e.getDiff(o);
                },
                h = function (t, n) {
                  void 0 === n && (n = e.networkStatus || Kr.loading);
                  var a = t.result;
                  !__DEV__ || l || qn(a, {}) || ii(t.missing);
                  var u = function (e) {
                    return It.of(
                      Oe(
                        { data: e, loading: Yr(n), networkStatus: n },
                        t.complete ? null : { partial: !0 }
                      )
                    );
                  };
                  return a && r.transform(i).hasForcedResolvers
                    ? r.localState
                        .runResolvers({
                          document: i,
                          remoteResult: { data: a },
                          context: c,
                          variables: o,
                          onlyRunForcedResolvers: !0,
                        })
                        .then(function (e) {
                          return u(e.data || void 0);
                        })
                    : u(a);
                },
                v =
                  "no-cache" === a
                    ? 0
                    : n === Kr.refetch && "merge" !== u
                    ? 1
                    : 2,
                y = function () {
                  return r.getResultsFromLink(e, v, {
                    variables: o,
                    context: c,
                    fetchPolicy: a,
                    errorPolicy: s,
                  });
                },
                m = f && "number" === typeof d && d !== n && Yr(n);
              switch (a) {
                default:
                case "cache-first":
                  return (g = p()).complete
                    ? [h(g, e.markReady())]
                    : l || m
                    ? [h(g), y()]
                    : [y()];
                case "cache-and-network":
                  var g;
                  return (g = p()).complete || l || m ? [h(g), y()] : [y()];
                case "cache-only":
                  return [h(p(), e.markReady())];
                case "network-only":
                  return m ? [h(p()), y()] : [y()];
                case "no-cache":
                  return m ? [h(e.getDiff()), y()] : [y()];
                case "standby":
                  return [];
              }
            }),
            (e.prototype.getQuery = function (e) {
              return (
                e &&
                  !this.queries.has(e) &&
                  this.queries.set(e, new Hi(this, e)),
                this.queries.get(e)
              );
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return Oe(Oe({}, t), { clientAwareness: this.clientAwareness });
            }),
            e
          );
        })();
      function Xi(e, t) {
        return or(
          e,
          t,
          t.variables && {
            variables: Oe(Oe({}, e && e.variables), t.variables),
          }
        );
      }
      var Zi = !1,
        eo = (function () {
          function e(e) {
            var t = this;
            (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = []);
            var n = e.uri,
              r = e.credentials,
              i = e.headers,
              o = e.cache,
              a = e.ssrMode,
              u = void 0 !== a && a,
              s = e.ssrForceFetchDelay,
              l = void 0 === s ? 0 : s,
              c = e.connectToDevTools,
              f =
                void 0 === c
                  ? "object" === typeof window &&
                    !window.__APOLLO_CLIENT__ &&
                    __DEV__
                  : c,
              d = e.queryDeduplication,
              p = void 0 === d || d,
              h = e.defaultOptions,
              v = e.assumeImmutableResults,
              y = void 0 !== v && v,
              m = e.resolvers,
              g = e.typeDefs,
              b = e.fragmentMatcher,
              w = e.name,
              k = e.version,
              E = e.link;
            if (
              (E ||
                (E = n
                  ? new Ln({ uri: n, credentials: r, headers: i })
                  : un.empty()),
              !o)
            )
              throw __DEV__
                ? new Fe(
                    "To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs"
                  )
                : new Fe(7);
            if (
              ((this.link = E),
              (this.cache = o),
              (this.disableNetworkFetches = u || l > 0),
              (this.queryDeduplication = p),
              (this.defaultOptions = h || Object.create(null)),
              (this.typeDefs = g),
              l &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, l),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries =
                this.reFetchObservableQueries.bind(this)),
              f &&
                "object" === typeof window &&
                (window.__APOLLO_CLIENT__ = this),
              !Zi &&
                __DEV__ &&
                ((Zi = !0),
                "undefined" !== typeof window &&
                  window.document &&
                  window.top === window.self &&
                  !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__))
            ) {
              var _ = window.navigator,
                S = _ && _.userAgent,
                x = void 0;
              "string" === typeof S &&
                (S.indexOf("Chrome/") > -1
                  ? (x =
                      "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")
                  : S.indexOf("Firefox/") > -1 &&
                    (x =
                      "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),
                x &&
                  __DEV__ &&
                  je.log(
                    "Download the Apollo DevTools for a better development experience: " +
                      x
                  );
            }
            (this.version = "3.6.9"),
              (this.localState = new Bi({
                cache: o,
                client: this,
                resolvers: m,
                fragmentMatcher: b,
              })),
              (this.queryManager = new Ji({
                cache: this.cache,
                link: this.link,
                defaultOptions: this.defaultOptions,
                queryDeduplication: p,
                ssrMode: u,
                clientAwareness: { name: w, version: k },
                localState: this.localState,
                assumeImmutableResults: y,
                onBroadcast: f
                  ? function () {
                      t.devToolsHookCb &&
                        t.devToolsHookCb({
                          action: {},
                          state: {
                            queries: t.queryManager.getQueryStore(),
                            mutations: t.queryManager.mutationStore || {},
                          },
                          dataWithOptimisticResults: t.cache.extract(!0),
                        });
                    }
                  : void 0,
              }));
          }
          return (
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = Xi(this.defaultOptions.watchQuery, e)),
                !this.disableNetworkFetches ||
                  ("network-only" !== e.fetchPolicy &&
                    "cache-and-network" !== e.fetchPolicy) ||
                  (e = Oe(Oe({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = Xi(this.defaultOptions.query, e)),
                __DEV__
                  ? je(
                      "cache-and-network" !== e.fetchPolicy,
                      "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."
                    )
                  : je("cache-and-network" !== e.fetchPolicy, 8),
                this.disableNetworkFetches &&
                  "network-only" === e.fetchPolicy &&
                  (e = Oe(Oe({}, e), { fetchPolicy: "cache-first" })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = Xi(this.defaultOptions.mutate, e)),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              this.cache.writeQuery(e), this.queryManager.broadcastQueries();
            }),
            (e.prototype.writeFragment = function (e) {
              this.cache.writeFragment(e), this.queryManager.broadcastQueries();
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return jn(this.link, e);
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !1 });
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore({ discardWatches: !0 });
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.refetchQueries = function (e) {
              var t = this.queryManager.refetchQueries(e),
                n = [],
                r = [];
              t.forEach(function (e, t) {
                n.push(t), r.push(e);
              });
              var i = Promise.all(r);
              return (
                (i.queries = n),
                (i.results = r),
                i.catch(function (e) {
                  __DEV__ &&
                    je.debug(
                      "In client.refetchQueries, Promise.all promise rejected with error ".concat(
                        e
                      )
                    );
                }),
                i
              );
            }),
            (e.prototype.getObservableQueries = function (e) {
              return (
                void 0 === e && (e = "active"),
                this.queryManager.getObservableQueries(e)
              );
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            (e.prototype.setLink = function (e) {
              this.link = this.queryManager.link = e;
            }),
            e
          );
        })(),
        to = (function () {
          function e() {
            this.getFragmentDoc = Ai(Ft);
          }
          return (
            (e.prototype.batch = function (e) {
              var t,
                n = this,
                r =
                  "string" === typeof e.optimistic
                    ? e.optimistic
                    : !1 === e.optimistic
                    ? null
                    : void 0;
              return (
                this.performTransaction(function () {
                  return (t = e.update(n));
                }, r),
                t
              );
            }),
            (e.prototype.recordOptimisticTransaction = function (e, t) {
              this.performTransaction(e, t);
            }),
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.identify = function (e) {}),
            (e.prototype.gc = function () {
              return [];
            }),
            (e.prototype.modify = function (e) {
              return !1;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  Oe(Oe({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: t })
                )
              );
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !!e.optimistic),
                this.read(
                  Oe(Oe({}, e), {
                    query: this.getFragmentDoc(e.fragment, e.fragmentName),
                    rootId: e.id,
                    optimistic: t,
                  })
                )
              );
            }),
            (e.prototype.writeQuery = function (e) {
              var t = e.id,
                n = e.data,
                r = Te(e, ["id", "data"]);
              return this.write(
                Object.assign(r, { dataId: t || "ROOT_QUERY", result: n })
              );
            }),
            (e.prototype.writeFragment = function (e) {
              var t = e.id,
                n = e.data,
                r = e.fragment,
                i = e.fragmentName,
                o = Te(e, ["id", "data", "fragment", "fragmentName"]);
              return this.write(
                Object.assign(o, {
                  query: this.getFragmentDoc(r, i),
                  dataId: t,
                  result: n,
                })
              );
            }),
            (e.prototype.updateQuery = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readQuery(e),
                    i = t(r);
                  return void 0 === i || null === i
                    ? r
                    : (n.writeQuery(Oe(Oe({}, e), { data: i })), i);
                },
              });
            }),
            (e.prototype.updateFragment = function (e, t) {
              return this.batch({
                update: function (n) {
                  var r = n.readFragment(e),
                    i = t(r);
                  return void 0 === i || null === i
                    ? r
                    : (n.writeFragment(Oe(Oe({}, e), { data: i })), i);
                },
              });
            }),
            e
          );
        })(),
        no = function (e, t, n, r) {
          (this.message = e),
            (this.path = t),
            (this.query = n),
            (this.variables = r);
        };
      function ro(e) {
        var t = new Set([e]);
        return (
          t.forEach(function (e) {
            Rt(e) &&
              (function (e) {
                if (__DEV__ && !Object.isFrozen(e))
                  try {
                    Object.freeze(e);
                  } catch (ea) {
                    if (ea instanceof TypeError) return null;
                    throw ea;
                  }
                return e;
              })(e) === e &&
              Object.getOwnPropertyNames(e).forEach(function (n) {
                Rt(e[n]) && t.add(e[n]);
              });
          }),
          e
        );
      }
      function io(e) {
        return __DEV__ && ro(e), e;
      }
      var oo = Object.create(null),
        ao = function () {
          return oo;
        },
        uo = Object.create(null),
        so = (function () {
          function e(e, t) {
            var n = this;
            (this.policies = e),
              (this.group = t),
              (this.data = Object.create(null)),
              (this.rootIds = Object.create(null)),
              (this.refs = Object.create(null)),
              (this.getFieldValue = function (e, t) {
                return io(Mt(e) ? n.get(e.__ref, t) : e && e[t]);
              }),
              (this.canRead = function (e) {
                return Mt(e) ? n.has(e.__ref) : "object" === typeof e;
              }),
              (this.toReference = function (e, t) {
                if ("string" === typeof e) return At(e);
                if (Mt(e)) return e;
                var r = n.policies.identify(e)[0];
                if (r) {
                  var i = At(r);
                  return t && n.merge(r, e), i;
                }
              });
          }
          return (
            (e.prototype.toObject = function () {
              return Oe({}, this.data);
            }),
            (e.prototype.has = function (e) {
              return void 0 !== this.lookup(e, !0);
            }),
            (e.prototype.get = function (e, t) {
              if ((this.group.depend(e, t), hr.call(this.data, e))) {
                var n = this.data[e];
                if (n && hr.call(n, t)) return n[t];
              }
              return "__typename" === t &&
                hr.call(this.policies.rootTypenamesById, e)
                ? this.policies.rootTypenamesById[e]
                : this instanceof po
                ? this.parent.get(e, t)
                : void 0;
            }),
            (e.prototype.lookup = function (e, t) {
              return (
                t && this.group.depend(e, "__exists"),
                hr.call(this.data, e)
                  ? this.data[e]
                  : this instanceof po
                  ? this.parent.lookup(e, t)
                  : this.policies.rootTypenamesById[e]
                  ? Object.create(null)
                  : void 0
              );
            }),
            (e.prototype.merge = function (e, t) {
              var n,
                r = this;
              Mt(e) && (e = e.__ref), Mt(t) && (t = t.__ref);
              var i = "string" === typeof e ? this.lookup((n = e)) : e,
                o = "string" === typeof t ? this.lookup((n = t)) : t;
              if (o) {
                __DEV__
                  ? je("string" === typeof n, "store.merge expects a string ID")
                  : je("string" === typeof n, 1);
                var a = new pr(vo).merge(i, o);
                if (
                  ((this.data[n] = a),
                  a !== i && (delete this.refs[n], this.group.caching))
                ) {
                  var u = Object.create(null);
                  i || (u.__exists = 1),
                    Object.keys(o).forEach(function (e) {
                      if (!i || i[e] !== a[e]) {
                        u[e] = 1;
                        var t = br(e);
                        t === e ||
                          r.policies.hasKeyArgs(a.__typename, t) ||
                          (u[t] = 1),
                          void 0 !== a[e] || r instanceof po || delete a[e];
                      }
                    }),
                    !u.__typename ||
                      (i && i.__typename) ||
                      this.policies.rootTypenamesById[n] !== a.__typename ||
                      delete u.__typename,
                    Object.keys(u).forEach(function (e) {
                      return r.group.dirty(n, e);
                    });
                }
              }
            }),
            (e.prototype.modify = function (e, t) {
              var n = this,
                r = this.lookup(e);
              if (r) {
                var i = Object.create(null),
                  o = !1,
                  a = !0,
                  u = {
                    DELETE: oo,
                    INVALIDATE: uo,
                    isReference: Mt,
                    toReference: this.toReference,
                    canRead: this.canRead,
                    readField: function (t, r) {
                      return n.policies.readField(
                        "string" === typeof t
                          ? { fieldName: t, from: r || At(e) }
                          : t,
                        { store: n }
                      );
                    },
                  };
                if (
                  (Object.keys(r).forEach(function (s) {
                    var l = br(s),
                      c = r[s];
                    if (void 0 !== c) {
                      var f = "function" === typeof t ? t : t[s] || t[l];
                      if (f) {
                        var d =
                          f === ao
                            ? oo
                            : f(
                                io(c),
                                Oe(Oe({}, u), {
                                  fieldName: l,
                                  storeFieldName: s,
                                  storage: n.getStorage(e, s),
                                })
                              );
                        d === uo
                          ? n.group.dirty(e, s)
                          : (d === oo && (d = void 0),
                            d !== c && ((i[s] = d), (o = !0), (c = d)));
                      }
                      void 0 !== c && (a = !1);
                    }
                  }),
                  o)
                )
                  return (
                    this.merge(e, i),
                    a &&
                      (this instanceof po
                        ? (this.data[e] = void 0)
                        : delete this.data[e],
                      this.group.dirty(e, "__exists")),
                    !0
                  );
              }
              return !1;
            }),
            (e.prototype.delete = function (e, t, n) {
              var r,
                i = this.lookup(e);
              if (i) {
                var o = this.getFieldValue(i, "__typename"),
                  a =
                    t && n
                      ? this.policies.getStoreFieldName({
                          typename: o,
                          fieldName: t,
                          args: n,
                        })
                      : t;
                return this.modify(e, a ? (((r = {})[a] = ao), r) : ao);
              }
              return !1;
            }),
            (e.prototype.evict = function (e, t) {
              var n = !1;
              return (
                e.id &&
                  (hr.call(this.data, e.id) &&
                    (n = this.delete(e.id, e.fieldName, e.args)),
                  this instanceof po &&
                    this !== t &&
                    (n = this.parent.evict(e, t) || n),
                  (e.fieldName || n) &&
                    this.group.dirty(e.id, e.fieldName || "__exists")),
                n
              );
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.extract = function () {
              var e = this,
                t = this.toObject(),
                n = [];
              return (
                this.getRootIdSet().forEach(function (t) {
                  hr.call(e.policies.rootTypenamesById, t) || n.push(t);
                }),
                n.length && (t.__META = { extraRootIds: n.sort() }),
                t
              );
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              if (
                (Object.keys(this.data).forEach(function (n) {
                  (e && hr.call(e, n)) || t.delete(n);
                }),
                e)
              ) {
                var n = e.__META,
                  r = Te(e, ["__META"]);
                Object.keys(r).forEach(function (e) {
                  t.merge(e, r[e]);
                }),
                  n && n.extraRootIds.forEach(this.retain, this);
              }
            }),
            (e.prototype.retain = function (e) {
              return (this.rootIds[e] = (this.rootIds[e] || 0) + 1);
            }),
            (e.prototype.release = function (e) {
              if (this.rootIds[e] > 0) {
                var t = --this.rootIds[e];
                return t || delete this.rootIds[e], t;
              }
              return 0;
            }),
            (e.prototype.getRootIdSet = function (e) {
              return (
                void 0 === e && (e = new Set()),
                Object.keys(this.rootIds).forEach(e.add, e),
                this instanceof po
                  ? this.parent.getRootIdSet(e)
                  : Object.keys(this.policies.rootTypenamesById).forEach(
                      e.add,
                      e
                    ),
                e
              );
            }),
            (e.prototype.gc = function () {
              var e = this,
                t = this.getRootIdSet(),
                n = this.toObject();
              t.forEach(function (r) {
                hr.call(n, r) &&
                  (Object.keys(e.findChildRefIds(r)).forEach(t.add, t),
                  delete n[r]);
              });
              var r = Object.keys(n);
              if (r.length) {
                for (var i = this; i instanceof po; ) i = i.parent;
                r.forEach(function (e) {
                  return i.delete(e);
                });
              }
              return r;
            }),
            (e.prototype.findChildRefIds = function (e) {
              if (!hr.call(this.refs, e)) {
                var t = (this.refs[e] = Object.create(null)),
                  n = this.data[e];
                if (!n) return t;
                var r = new Set([n]);
                r.forEach(function (e) {
                  Mt(e) && (t[e.__ref] = !0),
                    Rt(e) &&
                      Object.keys(e).forEach(function (t) {
                        var n = e[t];
                        Rt(n) && r.add(n);
                      });
                });
              }
              return this.refs[e];
            }),
            (e.prototype.makeCacheKey = function () {
              return this.group.keyMaker.lookupArray(arguments);
            }),
            e
          );
        })(),
        lo = (function () {
          function e(e, t) {
            void 0 === t && (t = null),
              (this.caching = e),
              (this.parent = t),
              (this.d = null),
              this.resetCaching();
          }
          return (
            (e.prototype.resetCaching = function () {
              (this.d = this.caching ? Fi() : null),
                (this.keyMaker = new Xn(Zn));
            }),
            (e.prototype.depend = function (e, t) {
              if (this.d) {
                this.d(co(e, t));
                var n = br(t);
                n !== t && this.d(co(e, n)),
                  this.parent && this.parent.depend(e, t);
              }
            }),
            (e.prototype.dirty = function (e, t) {
              this.d &&
                this.d.dirty(
                  co(e, t),
                  "__exists" === t ? "forget" : "setDirty"
                );
            }),
            e
          );
        })();
      function co(e, t) {
        return t + "#" + e;
      }
      function fo(e, t) {
        yo(e) && e.group.depend(t, "__exists");
      }
      !(function (e) {
        var t = (function (e) {
          function t(t) {
            var n = t.policies,
              r = t.resultCaching,
              i = void 0 === r || r,
              o = t.seed,
              a = e.call(this, n, new lo(i)) || this;
            return (
              (a.stump = new ho(a)),
              (a.storageTrie = new Xn(Zn)),
              o && a.replace(o),
              a
            );
          }
          return (
            xe(t, e),
            (t.prototype.addLayer = function (e, t) {
              return this.stump.addLayer(e, t);
            }),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.getStorage = function () {
              return this.storageTrie.lookupArray(arguments);
            }),
            t
          );
        })(e);
        e.Root = t;
      })(so || (so = {}));
      var po = (function (e) {
          function t(t, n, r, i) {
            var o = e.call(this, n.policies, i) || this;
            return (
              (o.id = t), (o.parent = n), (o.replay = r), (o.group = i), r(o), o
            );
          }
          return (
            xe(t, e),
            (t.prototype.addLayer = function (e, n) {
              return new t(e, this, n, this.group);
            }),
            (t.prototype.removeLayer = function (e) {
              var t = this,
                n = this.parent.removeLayer(e);
              return e === this.id
                ? (this.group.caching &&
                    Object.keys(this.data).forEach(function (e) {
                      var r = t.data[e],
                        i = n.lookup(e);
                      i
                        ? r
                          ? r !== i &&
                            Object.keys(r).forEach(function (n) {
                              qn(r[n], i[n]) || t.group.dirty(e, n);
                            })
                          : (t.group.dirty(e, "__exists"),
                            Object.keys(i).forEach(function (n) {
                              t.group.dirty(e, n);
                            }))
                        : t.delete(e);
                    }),
                  n)
                : n === this.parent
                ? this
                : n.addLayer(this.id, this.replay);
            }),
            (t.prototype.toObject = function () {
              return Oe(Oe({}, this.parent.toObject()), this.data);
            }),
            (t.prototype.findChildRefIds = function (t) {
              var n = this.parent.findChildRefIds(t);
              return hr.call(this.data, t)
                ? Oe(Oe({}, n), e.prototype.findChildRefIds.call(this, t))
                : n;
            }),
            (t.prototype.getStorage = function () {
              for (var e = this.parent; e.parent; ) e = e.parent;
              return e.getStorage.apply(e, arguments);
            }),
            t
          );
        })(so),
        ho = (function (e) {
          function t(t) {
            return (
              e.call(
                this,
                "EntityStore.Stump",
                t,
                function () {},
                new lo(t.group.caching, t.group)
              ) || this
            );
          }
          return (
            xe(t, e),
            (t.prototype.removeLayer = function () {
              return this;
            }),
            (t.prototype.merge = function () {
              return this.parent.merge.apply(this.parent, arguments);
            }),
            t
          );
        })(po);
      function vo(e, t, n) {
        var r = e[n],
          i = t[n];
        return qn(r, i) ? r : i;
      }
      function yo(e) {
        return !!(e instanceof so && e.group.caching);
      }
      function mo(e) {
        return [
          e.selectionSet,
          e.objectOrReference,
          e.context,
          e.context.canonizeResults,
        ];
      }
      var go = (function () {
        function e(e) {
          var t = this;
          (this.knownResults = new (Zn ? WeakMap : Map)()),
            (this.config = or(e, {
              addTypename: !1 !== e.addTypename,
              canonizeResults: mr(e),
            })),
            (this.canon = e.canon || new xr()),
            (this.executeSelectionSet = Ai(
              function (e) {
                var n,
                  r = e.context.canonizeResults,
                  i = mo(e);
                i[3] = !r;
                var o = (n = t.executeSelectionSet).peek.apply(n, i);
                return o
                  ? r
                    ? Oe(Oe({}, o), { result: t.canon.admit(o.result) })
                    : o
                  : (fo(e.context.store, e.enclosingRef.__ref),
                    t.execSelectionSetImpl(e));
              },
              {
                max: this.config.resultCacheMaxSize,
                keyArgs: mo,
                makeCacheKey: function (e, t, n, r) {
                  if (yo(n.store))
                    return n.store.makeCacheKey(
                      e,
                      Mt(t) ? t.__ref : t,
                      n.varString,
                      r
                    );
                },
              }
            )),
            (this.executeSubSelectedArray = Ai(
              function (e) {
                return (
                  fo(e.context.store, e.enclosingRef.__ref),
                  t.execSubSelectedArrayImpl(e)
                );
              },
              {
                max: this.config.resultCacheMaxSize,
                makeCacheKey: function (e) {
                  var t = e.field,
                    n = e.array,
                    r = e.context;
                  if (yo(r.store))
                    return r.store.makeCacheKey(t, n, r.varString);
                },
              }
            ));
        }
        return (
          (e.prototype.resetCanon = function () {
            this.canon = new xr();
          }),
          (e.prototype.diffQueryAgainstStore = function (e) {
            var t = e.store,
              n = e.query,
              r = e.rootId,
              i = void 0 === r ? "ROOT_QUERY" : r,
              o = e.variables,
              a = e.returnPartialData,
              u = void 0 === a || a,
              s = e.canonizeResults,
              l = void 0 === s ? this.config.canonizeResults : s,
              c = this.config.cache.policies;
            o = Oe(Oe({}, tn(Zt(n))), o);
            var f,
              d = At(i),
              p = this.executeSelectionSet({
                selectionSet: en(n).selectionSet,
                objectOrReference: d,
                enclosingRef: d,
                context: {
                  store: t,
                  query: n,
                  policies: c,
                  variables: o,
                  varString: Or(o),
                  canonizeResults: l,
                  fragmentMap: jt(Xt(n)),
                },
              });
            if (
              p.missing &&
              ((f = [new no(bo(p.missing), p.missing, n, o)]), !u)
            )
              throw f[0];
            return { result: p.result, complete: !f, missing: f };
          }),
          (e.prototype.isFresh = function (e, t, n, r) {
            if (yo(r.store) && this.knownResults.get(e) === n) {
              var i = this.executeSelectionSet.peek(
                n,
                t,
                r,
                this.canon.isKnown(e)
              );
              if (i && e === i.result) return !0;
            }
            return !1;
          }),
          (e.prototype.execSelectionSetImpl = function (e) {
            var t = this,
              n = e.selectionSet,
              r = e.objectOrReference,
              i = e.enclosingRef,
              o = e.context;
            if (
              Mt(r) &&
              !o.policies.rootTypenamesById[r.__ref] &&
              !o.store.has(r.__ref)
            )
              return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(
                  r.__ref,
                  " object"
                ),
              };
            var a,
              u = o.variables,
              s = o.policies,
              l = o.store.getFieldValue(r, "__typename"),
              c = [],
              f = new pr();
            function d(e, t) {
              var n;
              return (
                e.missing && (a = f.merge(a, (((n = {})[t] = e.missing), n))),
                e.result
              );
            }
            this.config.addTypename &&
              "string" === typeof l &&
              !s.rootIdsByTypename[l] &&
              c.push({ __typename: l });
            var p = new Set(n.selections);
            p.forEach(function (e) {
              var n, h;
              if (ar(e, u))
                if (Kt(e)) {
                  var v = s.readField(
                      {
                        fieldName: e.name.value,
                        field: e,
                        variables: o.variables,
                        from: r,
                      },
                      o
                    ),
                    y = Wt(e);
                  void 0 === v
                    ? Lr.added(e) ||
                      (a = f.merge(
                        a,
                        (((n = {})[y] = "Can't find field '"
                          .concat(e.name.value, "' on ")
                          .concat(
                            Mt(r)
                              ? r.__ref + " object"
                              : "object " + JSON.stringify(r, null, 2)
                          )),
                        n)
                      ))
                    : Er(v)
                    ? (v = d(
                        t.executeSubSelectedArray({
                          field: e,
                          array: v,
                          enclosingRef: i,
                          context: o,
                        }),
                        y
                      ))
                    : e.selectionSet
                    ? null != v &&
                      (v = d(
                        t.executeSelectionSet({
                          selectionSet: e.selectionSet,
                          objectOrReference: v,
                          enclosingRef: Mt(v) ? v : i,
                          context: o,
                        }),
                        y
                      ))
                    : o.canonizeResults && (v = t.canon.pass(v)),
                    void 0 !== v && c.push((((h = {})[y] = v), h));
                } else {
                  var m = Lt(e, o.fragmentMap);
                  m &&
                    s.fragmentMatches(m, l) &&
                    m.selectionSet.selections.forEach(p.add, p);
                }
            });
            var h = { result: fr(c), missing: a },
              v = o.canonizeResults ? this.canon.admit(h) : io(h);
            return v.result && this.knownResults.set(v.result, n), v;
          }),
          (e.prototype.execSubSelectedArrayImpl = function (e) {
            var t,
              n = this,
              r = e.field,
              i = e.array,
              o = e.enclosingRef,
              a = e.context,
              u = new pr();
            function s(e, n) {
              var r;
              return (
                e.missing && (t = u.merge(t, (((r = {})[n] = e.missing), r))),
                e.result
              );
            }
            return (
              r.selectionSet && (i = i.filter(a.store.canRead)),
              (i = i.map(function (e, t) {
                return null === e
                  ? null
                  : Er(e)
                  ? s(
                      n.executeSubSelectedArray({
                        field: r,
                        array: e,
                        enclosingRef: o,
                        context: a,
                      }),
                      t
                    )
                  : r.selectionSet
                  ? s(
                      n.executeSelectionSet({
                        selectionSet: r.selectionSet,
                        objectOrReference: e,
                        enclosingRef: Mt(e) ? e : o,
                        context: a,
                      }),
                      t
                    )
                  : (__DEV__ &&
                      (function (e, t, n) {
                        if (!t.selectionSet) {
                          var r = new Set([n]);
                          r.forEach(function (n) {
                            Rt(n) &&
                              (__DEV__
                                ? je(
                                    !Mt(n),
                                    "Missing selection set for object of type "
                                      .concat(
                                        (function (e, t) {
                                          return Mt(t)
                                            ? e.get(t.__ref, "__typename")
                                            : t && t.__typename;
                                        })(e, n),
                                        " returned for query field "
                                      )
                                      .concat(t.name.value)
                                  )
                                : je(!Mt(n), 5),
                              Object.values(n).forEach(r.add, r));
                          });
                        }
                      })(a.store, r, e),
                    e);
              })),
              {
                result: a.canonizeResults ? this.canon.admit(i) : i,
                missing: t,
              }
            );
          }),
          e
        );
      })();
      function bo(e) {
        try {
          JSON.stringify(e, function (e, t) {
            if ("string" === typeof t) throw t;
            return t;
          });
        } catch (t) {
          return t;
        }
      }
      var wo = Object.create(null);
      function ko(e) {
        var t = JSON.stringify(e);
        return wo[t] || (wo[t] = Object.create(null));
      }
      function Eo(e) {
        var t = ko(e);
        return (
          t.keyFieldsFn ||
          (t.keyFieldsFn = function (t, n) {
            var r = function (e, t) {
                return n.readField(t, e);
              },
              i = (n.keyObject = So(e, function (e) {
                var i = To(n.storeObject, e, r);
                return (
                  void 0 === i &&
                    t !== n.storeObject &&
                    hr.call(t, e[0]) &&
                    (i = To(t, e, Oo)),
                  __DEV__
                    ? je(
                        void 0 !== i,
                        "Missing field '"
                          .concat(
                            e.join("."),
                            "' while extracting keyFields from "
                          )
                          .concat(JSON.stringify(t))
                      )
                    : je(void 0 !== i, 2),
                  i
                );
              }));
            return "".concat(n.typename, ":").concat(JSON.stringify(i));
          })
        );
      }
      function _o(e) {
        var t = ko(e);
        return (
          t.keyArgsFn ||
          (t.keyArgsFn = function (t, n) {
            var r = n.field,
              i = n.variables,
              o = n.fieldName,
              a = So(e, function (e) {
                var n = e[0],
                  o = n.charAt(0);
                if ("@" !== o)
                  if ("$" !== o) {
                    if (t) return To(t, e);
                  } else {
                    var a = n.slice(1);
                    if (i && hr.call(i, a)) {
                      var u = e.slice(0);
                      return (u[0] = a), To(i, u);
                    }
                  }
                else if (r && $r(r.directives)) {
                  var s = n.slice(1),
                    l = r.directives.find(function (e) {
                      return e.name.value === s;
                    }),
                    c = l && Bt(l, i);
                  return c && To(c, e.slice(1));
                }
              }),
              u = JSON.stringify(a);
            return (t || "{}" !== u) && (o += ":" + u), o;
          })
        );
      }
      function So(e, t) {
        var n = new pr();
        return xo(e).reduce(function (e, r) {
          var i,
            o = t(r);
          if (void 0 !== o) {
            for (var a = r.length - 1; a >= 0; --a)
              ((i = {})[r[a]] = o), (o = i);
            e = n.merge(e, o);
          }
          return e;
        }, Object.create(null));
      }
      function xo(e) {
        var t = ko(e);
        if (!t.paths) {
          var n = (t.paths = []),
            r = [];
          e.forEach(function (t, i) {
            Er(t)
              ? (xo(t).forEach(function (e) {
                  return n.push(r.concat(e));
                }),
                (r.length = 0))
              : (r.push(t),
                Er(e[i + 1]) || (n.push(r.slice(0)), (r.length = 0)));
          });
        }
        return t.paths;
      }
      function Oo(e, t) {
        return e[t];
      }
      function To(e, t, n) {
        return (
          (n = n || Oo),
          Co(
            t.reduce(function e(t, r) {
              return Er(t)
                ? t.map(function (t) {
                    return e(t, r);
                  })
                : t && n(t, r);
            }, e)
          )
        );
      }
      function Co(e) {
        return Rt(e)
          ? Er(e)
            ? e.map(Co)
            : So(Object.keys(e).sort(), function (t) {
                return To(e, t);
              })
          : e;
      }
      function No(e) {
        return void 0 !== e.args
          ? e.args
          : e.field
          ? Bt(e.field, e.variables)
          : null;
      }
      Qt.setStringify(Or);
      var Do = function () {},
        Po = function (e, t) {
          return t.fieldName;
        },
        Io = function (e, t, n) {
          return (0, n.mergeObjects)(e, t);
        },
        Ro = function (e, t) {
          return t;
        },
        Fo = (function () {
          function e(e) {
            (this.config = e),
              (this.typePolicies = Object.create(null)),
              (this.toBeAdded = Object.create(null)),
              (this.supertypeMap = new Map()),
              (this.fuzzySubtypes = new Map()),
              (this.rootIdsByTypename = Object.create(null)),
              (this.rootTypenamesById = Object.create(null)),
              (this.usingPossibleTypes = !1),
              (this.config = Oe({ dataIdFromObject: vr }, e)),
              (this.cache = this.config.cache),
              this.setRootTypename("Query"),
              this.setRootTypename("Mutation"),
              this.setRootTypename("Subscription"),
              e.possibleTypes && this.addPossibleTypes(e.possibleTypes),
              e.typePolicies && this.addTypePolicies(e.typePolicies);
          }
          return (
            (e.prototype.identify = function (e, t) {
              var n,
                r = this,
                i =
                  (t &&
                    (t.typename ||
                      (null === (n = t.storeObject) || void 0 === n
                        ? void 0
                        : n.__typename))) ||
                  e.__typename;
              if (i === this.rootTypenamesById.ROOT_QUERY)
                return ["ROOT_QUERY"];
              for (
                var o,
                  a = (t && t.storeObject) || e,
                  u = Oe(Oe({}, t), {
                    typename: i,
                    storeObject: a,
                    readField:
                      (t && t.readField) ||
                      function () {
                        var e = Lo(arguments, a);
                        return r.readField(e, {
                          store: r.cache.data,
                          variables: e.variables,
                        });
                      },
                  }),
                  s = i && this.getTypePolicy(i),
                  l = (s && s.keyFn) || this.config.dataIdFromObject;
                l;

              ) {
                var c = l(e, u);
                if (!Er(c)) {
                  o = c;
                  break;
                }
                l = Eo(c);
              }
              return (
                (o = o ? String(o) : void 0),
                u.keyObject ? [o, u.keyObject] : [o]
              );
            }),
            (e.prototype.addTypePolicies = function (e) {
              var t = this;
              Object.keys(e).forEach(function (n) {
                var r = e[n],
                  i = r.queryType,
                  o = r.mutationType,
                  a = r.subscriptionType,
                  u = Te(r, ["queryType", "mutationType", "subscriptionType"]);
                i && t.setRootTypename("Query", n),
                  o && t.setRootTypename("Mutation", n),
                  a && t.setRootTypename("Subscription", n),
                  hr.call(t.toBeAdded, n)
                    ? t.toBeAdded[n].push(u)
                    : (t.toBeAdded[n] = [u]);
              });
            }),
            (e.prototype.updateTypePolicy = function (e, t) {
              var n = this,
                r = this.getTypePolicy(e),
                i = t.keyFields,
                o = t.fields;
              function a(e, t) {
                e.merge =
                  "function" === typeof t
                    ? t
                    : !0 === t
                    ? Io
                    : !1 === t
                    ? Ro
                    : e.merge;
              }
              a(r, t.merge),
                (r.keyFn =
                  !1 === i
                    ? Do
                    : Er(i)
                    ? Eo(i)
                    : "function" === typeof i
                    ? i
                    : r.keyFn),
                o &&
                  Object.keys(o).forEach(function (t) {
                    var r = n.getFieldPolicy(e, t, !0),
                      i = o[t];
                    if ("function" === typeof i) r.read = i;
                    else {
                      var u = i.keyArgs,
                        s = i.read,
                        l = i.merge;
                      (r.keyFn =
                        !1 === u
                          ? Po
                          : Er(u)
                          ? _o(u)
                          : "function" === typeof u
                          ? u
                          : r.keyFn),
                        "function" === typeof s && (r.read = s),
                        a(r, l);
                    }
                    r.read && r.merge && (r.keyFn = r.keyFn || Po);
                  });
            }),
            (e.prototype.setRootTypename = function (e, t) {
              void 0 === t && (t = e);
              var n = "ROOT_" + e.toUpperCase(),
                r = this.rootTypenamesById[n];
              t !== r &&
                (__DEV__
                  ? je(
                      !r || r === e,
                      "Cannot change root ".concat(
                        e,
                        " __typename more than once"
                      )
                    )
                  : je(!r || r === e, 3),
                r && delete this.rootIdsByTypename[r],
                (this.rootIdsByTypename[t] = n),
                (this.rootTypenamesById[n] = t));
            }),
            (e.prototype.addPossibleTypes = function (e) {
              var t = this;
              (this.usingPossibleTypes = !0),
                Object.keys(e).forEach(function (n) {
                  t.getSupertypeSet(n, !0),
                    e[n].forEach(function (e) {
                      t.getSupertypeSet(e, !0).add(n);
                      var r = e.match(gr);
                      (r && r[0] === e) ||
                        t.fuzzySubtypes.set(e, new RegExp(e));
                    });
                });
            }),
            (e.prototype.getTypePolicy = function (e) {
              var t = this;
              if (!hr.call(this.typePolicies, e)) {
                var n = (this.typePolicies[e] = Object.create(null));
                n.fields = Object.create(null);
                var r = this.supertypeMap.get(e);
                r &&
                  r.size &&
                  r.forEach(function (e) {
                    var r = t.getTypePolicy(e),
                      i = r.fields,
                      o = Te(r, ["fields"]);
                    Object.assign(n, o), Object.assign(n.fields, i);
                  });
              }
              var i = this.toBeAdded[e];
              return (
                i &&
                  i.length &&
                  i.splice(0).forEach(function (n) {
                    t.updateTypePolicy(e, n);
                  }),
                this.typePolicies[e]
              );
            }),
            (e.prototype.getFieldPolicy = function (e, t, n) {
              if (e) {
                var r = this.getTypePolicy(e).fields;
                return r[t] || (n && (r[t] = Object.create(null)));
              }
            }),
            (e.prototype.getSupertypeSet = function (e, t) {
              var n = this.supertypeMap.get(e);
              return !n && t && this.supertypeMap.set(e, (n = new Set())), n;
            }),
            (e.prototype.fragmentMatches = function (e, t, n, r) {
              var i = this;
              if (!e.typeCondition) return !0;
              if (!t) return !1;
              var o = e.typeCondition.name.value;
              if (t === o) return !0;
              if (this.usingPossibleTypes && this.supertypeMap.has(o))
                for (
                  var a = this.getSupertypeSet(t, !0),
                    u = [a],
                    s = function (e) {
                      var t = i.getSupertypeSet(e, !1);
                      t && t.size && u.indexOf(t) < 0 && u.push(t);
                    },
                    l = !(!n || !this.fuzzySubtypes.size),
                    c = !1,
                    f = 0;
                  f < u.length;
                  ++f
                ) {
                  var d = u[f];
                  if (d.has(o))
                    return (
                      a.has(o) ||
                        (c &&
                          __DEV__ &&
                          je.warn(
                            "Inferring subtype "
                              .concat(t, " of supertype ")
                              .concat(o)
                          ),
                        a.add(o)),
                      !0
                    );
                  d.forEach(s),
                    l &&
                      f === u.length - 1 &&
                      wr(e.selectionSet, n, r) &&
                      ((l = !1),
                      (c = !0),
                      this.fuzzySubtypes.forEach(function (e, n) {
                        var r = t.match(e);
                        r && r[0] === t && s(n);
                      }));
                }
              return !1;
            }),
            (e.prototype.hasKeyArgs = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return !(!n || !n.keyFn);
            }),
            (e.prototype.getStoreFieldName = function (e) {
              var t,
                n = e.typename,
                r = e.fieldName,
                i = this.getFieldPolicy(n, r, !1),
                o = i && i.keyFn;
              if (o && n)
                for (
                  var a = {
                      typename: n,
                      fieldName: r,
                      field: e.field || null,
                      variables: e.variables,
                    },
                    u = No(e);
                  o;

                ) {
                  var s = o(u, a);
                  if (!Er(s)) {
                    t = s || r;
                    break;
                  }
                  o = _o(s);
                }
              return (
                void 0 === t &&
                  (t = e.field
                    ? (function (e, t) {
                        var n = null;
                        e.directives &&
                          ((n = {}),
                          e.directives.forEach(function (e) {
                            (n[e.name.value] = {}),
                              e.arguments &&
                                e.arguments.forEach(function (r) {
                                  var i = r.name,
                                    o = r.value;
                                  return Vt(n[e.name.value], i, o, t);
                                });
                          }));
                        var r = null;
                        return (
                          e.arguments &&
                            e.arguments.length &&
                            ((r = {}),
                            e.arguments.forEach(function (e) {
                              var n = e.name,
                                i = e.value;
                              return Vt(r, n, i, t);
                            })),
                          Qt(e.name.value, r, n)
                        );
                      })(e.field, e.variables)
                    : Qt(r, No(e))),
                !1 === t ? r : r === br(t) ? t : r + ":" + t
              );
            }),
            (e.prototype.readField = function (e, t) {
              var n = e.from;
              if (n && (e.field || e.fieldName)) {
                if (void 0 === e.typename) {
                  var r = t.store.getFieldValue(n, "__typename");
                  r && (e.typename = r);
                }
                var i = this.getStoreFieldName(e),
                  o = br(i),
                  a = t.store.getFieldValue(n, i),
                  u = this.getFieldPolicy(e.typename, o, !1),
                  s = u && u.read;
                if (s) {
                  var l = jo(
                    this,
                    n,
                    e,
                    t,
                    t.store.getStorage(Mt(n) ? n.__ref : n, i)
                  );
                  return Mi.withValue(this.cache, s, [a, l]);
                }
                return a;
              }
            }),
            (e.prototype.getReadFunction = function (e, t) {
              var n = this.getFieldPolicy(e, t, !1);
              return n && n.read;
            }),
            (e.prototype.getMergeFunction = function (e, t, n) {
              var r = this.getFieldPolicy(e, t, !1),
                i = r && r.merge;
              return !i && n && (i = (r = this.getTypePolicy(n)) && r.merge), i;
            }),
            (e.prototype.runMergeFunction = function (e, t, n, r, i) {
              var o = n.field,
                a = n.typename,
                u = n.merge;
              return u === Io
                ? Ao(r.store)(e, t)
                : u === Ro
                ? t
                : (r.overwrite && (e = void 0),
                  u(
                    e,
                    t,
                    jo(
                      this,
                      void 0,
                      {
                        typename: a,
                        fieldName: o.name.value,
                        field: o,
                        variables: r.variables,
                      },
                      r,
                      i || Object.create(null)
                    )
                  ));
            }),
            e
          );
        })();
      function jo(e, t, n, r, i) {
        var o = e.getStoreFieldName(n),
          a = br(o),
          u = n.variables || r.variables,
          s = r.store,
          l = s.toReference,
          c = s.canRead;
        return {
          args: No(n),
          field: n.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: u,
          isReference: Mt,
          toReference: l,
          storage: i,
          cache: e.cache,
          canRead: c,
          readField: function () {
            return e.readField(Lo(arguments, t, u), r);
          },
          mergeObjects: Ao(r.store),
        };
      }
      function Lo(e, t, n) {
        var r,
          i = e[0],
          o = e[1],
          a = e.length;
        return (
          "string" === typeof i
            ? (r = { fieldName: i, from: a > 1 ? o : t })
            : ((r = Oe({}, i)), hr.call(r, "from") || (r.from = t)),
          __DEV__ &&
            void 0 === r.from &&
            __DEV__ &&
            je.warn(
              "Undefined 'from' passed to readField with arguments ".concat(
                (function (e) {
                  var t = Qr("stringifyForDisplay");
                  return JSON.stringify(e, function (e, n) {
                    return void 0 === n ? t : n;
                  })
                    .split(JSON.stringify(t))
                    .join("<undefined>");
                })(Array.from(e))
              )
            ),
          void 0 === r.variables && (r.variables = n),
          r
        );
      }
      function Ao(e) {
        return function (t, n) {
          if (Er(t) || Er(n))
            throw __DEV__
              ? new Fe("Cannot automatically merge arrays")
              : new Fe(4);
          if (Rt(t) && Rt(n)) {
            var r = e.getFieldValue(t, "__typename"),
              i = e.getFieldValue(n, "__typename");
            if (r && i && r !== i) return n;
            if (Mt(t) && kr(n)) return e.merge(t.__ref, n), t;
            if (kr(t) && Mt(n)) return e.merge(t, n.__ref), n;
            if (kr(t) && kr(n)) return Oe(Oe({}, t), n);
          }
          return n;
        };
      }
      function Mo(e, t, n) {
        var r = "".concat(t).concat(n),
          i = e.flavors.get(r);
        return (
          i ||
            e.flavors.set(
              r,
              (i =
                e.clientOnly === t && e.deferred === n
                  ? e
                  : Oe(Oe({}, e), { clientOnly: t, deferred: n }))
            ),
          i
        );
      }
      var Vo = (function () {
          function e(e, t) {
            (this.cache = e), (this.reader = t);
          }
          return (
            (e.prototype.writeToStore = function (e, t) {
              var n = this,
                r = t.query,
                i = t.result,
                o = t.dataId,
                a = t.variables,
                u = t.overwrite,
                s = Gt(r),
                l = new pr();
              a = Oe(Oe({}, tn(s)), a);
              var c = {
                  store: e,
                  written: Object.create(null),
                  merge: function (e, t) {
                    return l.merge(e, t);
                  },
                  variables: a,
                  varString: Or(a),
                  fragmentMap: jt(Xt(r)),
                  overwrite: !!u,
                  incomingById: new Map(),
                  clientOnly: !1,
                  deferred: !1,
                  flavors: new Map(),
                },
                f = this.processSelectionSet({
                  result: i || Object.create(null),
                  dataId: o,
                  selectionSet: s.selectionSet,
                  mergeTree: { map: new Map() },
                  context: c,
                });
              if (!Mt(f))
                throw __DEV__
                  ? new Fe(
                      "Could not identify object ".concat(JSON.stringify(i))
                    )
                  : new Fe(6);
              return (
                c.incomingById.forEach(function (t, r) {
                  var i = t.storeObject,
                    o = t.mergeTree,
                    a = t.fieldNodeSet,
                    u = At(r);
                  if (o && o.map.size) {
                    var s = n.applyMerges(o, u, i, c);
                    if (Mt(s)) return;
                    i = s;
                  }
                  if (__DEV__ && !c.overwrite) {
                    var l = Object.create(null);
                    a.forEach(function (e) {
                      e.selectionSet && (l[e.name.value] = !0);
                    });
                    Object.keys(i).forEach(function (e) {
                      (function (e) {
                        return !0 === l[br(e)];
                      })(e) &&
                        !(function (e) {
                          var t = o && o.map.get(e);
                          return Boolean(t && t.info && t.info.merge);
                        })(e) &&
                        (function (e, t, n, r) {
                          var i = function (e) {
                              var t = r.getFieldValue(e, n);
                              return "object" === typeof t && t;
                            },
                            o = i(e);
                          if (!o) return;
                          var a = i(t);
                          if (!a) return;
                          if (Mt(o)) return;
                          if (qn(o, a)) return;
                          if (
                            Object.keys(o).every(function (e) {
                              return void 0 !== r.getFieldValue(a, e);
                            })
                          )
                            return;
                          var u =
                              r.getFieldValue(e, "__typename") ||
                              r.getFieldValue(t, "__typename"),
                            s = br(n),
                            l = "".concat(u, ".").concat(s);
                          if (Wo.has(l)) return;
                          Wo.add(l);
                          var c = [];
                          Er(o) ||
                            Er(a) ||
                            [o, a].forEach(function (e) {
                              var t = r.getFieldValue(e, "__typename");
                              "string" !== typeof t ||
                                c.includes(t) ||
                                c.push(t);
                            });
                          __DEV__ &&
                            je.warn(
                              "Cache data may be lost when replacing the "
                                .concat(s, " field of a ")
                                .concat(
                                  u,
                                  " object.\n\nTo address this problem (which is not a bug in Apollo Client), "
                                )
                                .concat(
                                  c.length
                                    ? "either ensure all objects of type " +
                                        c.join(" and ") +
                                        " have an ID or a custom merge function, or "
                                    : "",
                                  "define a custom merge function for the "
                                )
                                .concat(
                                  l,
                                  " field, so InMemoryCache can safely merge these objects:\n\n  existing: "
                                )
                                .concat(
                                  JSON.stringify(o).slice(0, 1e3),
                                  "\n  incoming: "
                                )
                                .concat(
                                  JSON.stringify(a).slice(0, 1e3),
                                  "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"
                                )
                            );
                        })(u, i, e, c.store);
                    });
                  }
                  e.merge(r, i);
                }),
                e.retain(f.__ref),
                f
              );
            }),
            (e.prototype.processSelectionSet = function (e) {
              var t = this,
                n = e.dataId,
                r = e.result,
                i = e.selectionSet,
                o = e.context,
                a = e.mergeTree,
                u = this.cache.policies,
                s = Object.create(null),
                l =
                  (n && u.rootTypenamesById[n]) ||
                  $t(r, i, o.fragmentMap) ||
                  (n && o.store.get(n, "__typename"));
              "string" === typeof l && (s.__typename = l);
              var c = function () {
                  var e = Lo(arguments, s, o.variables);
                  if (Mt(e.from)) {
                    var t = o.incomingById.get(e.from.__ref);
                    if (t) {
                      var n = u.readField(
                        Oe(Oe({}, e), { from: t.storeObject }),
                        o
                      );
                      if (void 0 !== n) return n;
                    }
                  }
                  return u.readField(e, o);
                },
                f = new Set();
              this.flattenFields(i, r, o, l).forEach(function (e, n) {
                var i,
                  o = Wt(n),
                  d = r[o];
                if ((f.add(n), void 0 !== d)) {
                  var p = u.getStoreFieldName({
                      typename: l,
                      fieldName: n.name.value,
                      field: n,
                      variables: e.variables,
                    }),
                    h = Qo(a, p),
                    v = t.processFieldValue(
                      d,
                      n,
                      n.selectionSet ? Mo(e, !1, !1) : e,
                      h
                    ),
                    y = void 0;
                  n.selectionSet &&
                    (Mt(v) || kr(v)) &&
                    (y = c("__typename", v));
                  var m = u.getMergeFunction(l, n.name.value, y);
                  m ? (h.info = { field: n, typename: l, merge: m }) : Bo(a, p),
                    (s = e.merge(s, (((i = {})[p] = v), i)));
                } else !__DEV__ || e.clientOnly || e.deferred || Lr.added(n) || u.getReadFunction(l, n.name.value) || (__DEV__ && je.error("Missing field '".concat(Wt(n), "' while writing result ").concat(JSON.stringify(r, null, 2)).substring(0, 1e3)));
              });
              try {
                var d = u.identify(r, {
                    typename: l,
                    selectionSet: i,
                    fragmentMap: o.fragmentMap,
                    storeObject: s,
                    readField: c,
                  }),
                  p = d[0],
                  h = d[1];
                (n = n || p), h && (s = o.merge(s, h));
              } catch (ea) {
                if (!n) throw ea;
              }
              if ("string" === typeof n) {
                var v = At(n),
                  y = o.written[n] || (o.written[n] = []);
                if (y.indexOf(i) >= 0) return v;
                if ((y.push(i), this.reader && this.reader.isFresh(r, v, i, o)))
                  return v;
                var m = o.incomingById.get(n);
                return (
                  m
                    ? ((m.storeObject = o.merge(m.storeObject, s)),
                      (m.mergeTree = qo(m.mergeTree, a)),
                      f.forEach(function (e) {
                        return m.fieldNodeSet.add(e);
                      }))
                    : o.incomingById.set(n, {
                        storeObject: s,
                        mergeTree: Uo(a) ? void 0 : a,
                        fieldNodeSet: f,
                      }),
                  v
                );
              }
              return s;
            }),
            (e.prototype.processFieldValue = function (e, t, n, r) {
              var i = this;
              return t.selectionSet && null !== e
                ? Er(e)
                  ? e.map(function (e, o) {
                      var a = i.processFieldValue(e, t, n, Qo(r, o));
                      return Bo(r, o), a;
                    })
                  : this.processSelectionSet({
                      result: e,
                      selectionSet: t.selectionSet,
                      context: n,
                      mergeTree: r,
                    })
                : __DEV__
                ? Jr(e)
                : e;
            }),
            (e.prototype.flattenFields = function (e, t, n, r) {
              void 0 === r && (r = $t(t, e, n.fragmentMap));
              var i = new Map(),
                o = this.cache.policies,
                a = new Xn(!1);
              return (
                (function e(u, s) {
                  var l = a.lookup(u, s.clientOnly, s.deferred);
                  l.visited ||
                    ((l.visited = !0),
                    u.selections.forEach(function (a) {
                      if (ar(a, n.variables)) {
                        var u = s.clientOnly,
                          l = s.deferred;
                        if (
                          ((u && l) ||
                            !$r(a.directives) ||
                            a.directives.forEach(function (e) {
                              var t = e.name.value;
                              if (("client" === t && (u = !0), "defer" === t)) {
                                var r = Bt(e, n.variables);
                                (r && !1 === r.if) || (l = !0);
                              }
                            }),
                          Kt(a))
                        ) {
                          var c = i.get(a);
                          c && ((u = u && c.clientOnly), (l = l && c.deferred)),
                            i.set(a, Mo(n, u, l));
                        } else {
                          var f = Lt(a, n.fragmentMap);
                          f &&
                            o.fragmentMatches(f, r, t, n.variables) &&
                            e(f.selectionSet, Mo(n, u, l));
                        }
                      }
                    }));
                })(e, n),
                i
              );
            }),
            (e.prototype.applyMerges = function (e, t, n, r, i) {
              var o,
                a = this;
              if (e.map.size && !Mt(n)) {
                var u,
                  s = Er(n) || (!Mt(t) && !kr(t)) ? void 0 : t,
                  l = n;
                s && !i && (i = [Mt(s) ? s.__ref : s]);
                var c = function (e, t) {
                  return Er(e)
                    ? "number" === typeof t
                      ? e[t]
                      : void 0
                    : r.store.getFieldValue(e, String(t));
                };
                e.map.forEach(function (e, t) {
                  var n = c(s, t),
                    o = c(l, t);
                  if (void 0 !== o) {
                    i && i.push(t);
                    var f = a.applyMerges(e, n, o, r, i);
                    f !== o && (u = u || new Map()).set(t, f),
                      i && je(i.pop() === t);
                  }
                }),
                  u &&
                    ((n = Er(l) ? l.slice(0) : Oe({}, l)),
                    u.forEach(function (e, t) {
                      n[t] = e;
                    }));
              }
              return e.info
                ? this.cache.policies.runMergeFunction(
                    t,
                    n,
                    e.info,
                    r,
                    i && (o = r.store).getStorage.apply(o, i)
                  )
                : n;
            }),
            e
          );
        })(),
        zo = [];
      function Qo(e, t) {
        var n = e.map;
        return n.has(t) || n.set(t, zo.pop() || { map: new Map() }), n.get(t);
      }
      function qo(e, t) {
        if (e === t || !t || Uo(t)) return e;
        if (!e || Uo(e)) return t;
        var n =
            e.info && t.info ? Oe(Oe({}, e.info), t.info) : e.info || t.info,
          r = e.map.size && t.map.size,
          i = { info: n, map: r ? new Map() : e.map.size ? e.map : t.map };
        if (r) {
          var o = new Set(t.map.keys());
          e.map.forEach(function (e, n) {
            i.map.set(n, qo(e, t.map.get(n))), o.delete(n);
          }),
            o.forEach(function (n) {
              i.map.set(n, qo(t.map.get(n), e.map.get(n)));
            });
        }
        return i;
      }
      function Uo(e) {
        return !e || !(e.info || e.map.size);
      }
      function Bo(e, t) {
        var n = e.map,
          r = n.get(t);
        r && Uo(r) && (zo.push(r), n.delete(t));
      }
      var Wo = new Set();
      var $o = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var n = e.call(this) || this;
            return (
              (n.watches = new Set()),
              (n.typenameDocumentCache = new Map()),
              (n.makeVar = qi),
              (n.txCount = 0),
              (n.config = (function (e) {
                return or(yr, e);
              })(t)),
              (n.addTypename = !!n.config.addTypename),
              (n.policies = new Fo({
                cache: n,
                dataIdFromObject: n.config.dataIdFromObject,
                possibleTypes: n.config.possibleTypes,
                typePolicies: n.config.typePolicies,
              })),
              n.init(),
              n
            );
          }
          return (
            xe(t, e),
            (t.prototype.init = function () {
              var e = (this.data = new so.Root({
                policies: this.policies,
                resultCaching: this.config.resultCaching,
              }));
              (this.optimisticData = e.stump), this.resetResultCache();
            }),
            (t.prototype.resetResultCache = function (e) {
              var t = this,
                n = this.storeReader;
              (this.storeWriter = new Vo(
                this,
                (this.storeReader = new go({
                  cache: this,
                  addTypename: this.addTypename,
                  resultCacheMaxSize: this.config.resultCacheMaxSize,
                  canonizeResults: mr(this.config),
                  canon: e ? void 0 : n && n.canon,
                }))
              )),
                (this.maybeBroadcastWatch = Ai(
                  function (e, n) {
                    return t.broadcastWatch(e, n);
                  },
                  {
                    max: this.config.resultCacheMaxSize,
                    makeCacheKey: function (e) {
                      var n = e.optimistic ? t.optimisticData : t.data;
                      if (yo(n)) {
                        var r = e.optimistic,
                          i = e.rootId,
                          o = e.variables;
                        return n.makeCacheKey(
                          e.query,
                          e.callback,
                          Or({ optimistic: r, rootId: i, variables: o })
                        );
                      }
                    },
                  }
                )),
                new Set([this.data.group, this.optimisticData.group]).forEach(
                  function (e) {
                    return e.resetCaching();
                  }
                );
            }),
            (t.prototype.restore = function (e) {
              return this.init(), e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).extract()
              );
            }),
            (t.prototype.read = function (e) {
              var t = e.returnPartialData,
                n = void 0 !== t && t;
              try {
                return (
                  this.storeReader.diffQueryAgainstStore(
                    Oe(Oe({}, e), {
                      store: e.optimistic ? this.optimisticData : this.data,
                      config: this.config,
                      returnPartialData: n,
                    })
                  ).result || null
                );
              } catch (ea) {
                if (ea instanceof no) return null;
                throw ea;
              }
            }),
            (t.prototype.write = function (e) {
              try {
                return (
                  ++this.txCount, this.storeWriter.writeToStore(this.data, e)
                );
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.modify = function (e) {
              if (hr.call(e, "id") && !e.id) return !1;
              var t = e.optimistic ? this.optimisticData : this.data;
              try {
                return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.diff = function (e) {
              return this.storeReader.diffQueryAgainstStore(
                Oe(Oe({}, e), {
                  store: e.optimistic ? this.optimisticData : this.data,
                  rootId: e.id || "ROOT_QUERY",
                  config: this.config,
                })
              );
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.size ||
                  (function (e) {
                    zi(e).vars.forEach(function (t) {
                      return t.attachCache(e);
                    });
                  })(this),
                this.watches.add(e),
                e.immediate && this.maybeBroadcastWatch(e),
                function () {
                  t.watches.delete(e) && !t.watches.size && Qi(t),
                    t.maybeBroadcastWatch.forget(e);
                }
              );
            }),
            (t.prototype.gc = function (e) {
              Or.reset();
              var t = this.optimisticData.gc();
              return (
                e &&
                  !this.txCount &&
                  (e.resetResultCache
                    ? this.resetResultCache(e.resetResultIdentities)
                    : e.resetResultIdentities && this.storeReader.resetCanon()),
                t
              );
            }),
            (t.prototype.retain = function (e, t) {
              return (t ? this.optimisticData : this.data).retain(e);
            }),
            (t.prototype.release = function (e, t) {
              return (t ? this.optimisticData : this.data).release(e);
            }),
            (t.prototype.identify = function (e) {
              if (Mt(e)) return e.__ref;
              try {
                return this.policies.identify(e)[0];
              } catch (ea) {
                __DEV__ && je.warn(ea);
              }
            }),
            (t.prototype.evict = function (e) {
              if (!e.id) {
                if (hr.call(e, "id")) return !1;
                e = Oe(Oe({}, e), { id: "ROOT_QUERY" });
              }
              try {
                return ++this.txCount, this.optimisticData.evict(e, this.data);
              } finally {
                --this.txCount || !1 === e.broadcast || this.broadcastWatches();
              }
            }),
            (t.prototype.reset = function (e) {
              var t = this;
              return (
                this.init(),
                Or.reset(),
                e && e.discardWatches
                  ? (this.watches.forEach(function (e) {
                      return t.maybeBroadcastWatch.forget(e);
                    }),
                    this.watches.clear(),
                    Qi(this))
                  : this.broadcastWatches(),
                Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              var t = this.optimisticData.removeLayer(e);
              t !== this.optimisticData &&
                ((this.optimisticData = t), this.broadcastWatches());
            }),
            (t.prototype.batch = function (e) {
              var t,
                n = this,
                r = e.update,
                i = e.optimistic,
                o = void 0 === i || i,
                a = e.removeOptimistic,
                u = e.onWatchUpdated,
                s = function (e) {
                  var i = n,
                    o = i.data,
                    a = i.optimisticData;
                  ++n.txCount, e && (n.data = n.optimisticData = e);
                  try {
                    return (t = r(n));
                  } finally {
                    --n.txCount, (n.data = o), (n.optimisticData = a);
                  }
                },
                l = new Set();
              return (
                u &&
                  !this.txCount &&
                  this.broadcastWatches(
                    Oe(Oe({}, e), {
                      onWatchUpdated: function (e) {
                        return l.add(e), !1;
                      },
                    })
                  ),
                "string" === typeof o
                  ? (this.optimisticData = this.optimisticData.addLayer(o, s))
                  : !1 === o
                  ? s(this.data)
                  : s(),
                "string" === typeof a &&
                  (this.optimisticData = this.optimisticData.removeLayer(a)),
                u && l.size
                  ? (this.broadcastWatches(
                      Oe(Oe({}, e), {
                        onWatchUpdated: function (e, t) {
                          var n = u.call(this, e, t);
                          return !1 !== n && l.delete(e), n;
                        },
                      })
                    ),
                    l.size &&
                      l.forEach(function (e) {
                        return n.maybeBroadcastWatch.dirty(e);
                      }))
                  : this.broadcastWatches(e),
                t
              );
            }),
            (t.prototype.performTransaction = function (e, t) {
              return this.batch({ update: e, optimistic: t || null !== t });
            }),
            (t.prototype.transformDocument = function (e) {
              if (this.addTypename) {
                var t = this.typenameDocumentCache.get(e);
                return (
                  t ||
                    ((t = Lr(e)),
                    this.typenameDocumentCache.set(e, t),
                    this.typenameDocumentCache.set(t, t)),
                  t
                );
              }
              return e;
            }),
            (t.prototype.broadcastWatches = function (e) {
              var t = this;
              this.txCount ||
                this.watches.forEach(function (n) {
                  return t.maybeBroadcastWatch(n, e);
                });
            }),
            (t.prototype.broadcastWatch = function (e, t) {
              var n = e.lastDiff,
                r = this.diff(e);
              (t &&
                (e.optimistic &&
                  "string" === typeof t.optimistic &&
                  (r.fromOptimisticTransaction = !0),
                t.onWatchUpdated &&
                  !1 === t.onWatchUpdated.call(this, e, r, n))) ||
                (n && qn(n.result, r.result)) ||
                e.callback((e.lastDiff = r), n);
            }),
            t
          );
        })(to),
        Ko = tr ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
      function Ho() {
        var e = t.createContext[Ko];
        return (
          e ||
            (Object.defineProperty(t.createContext, Ko, {
              value: (e = t.createContext({})),
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            (e.displayName = "ApolloContext")),
          e
        );
      }
      var Yo = function (e) {
        var n = e.client,
          r = e.children,
          i = Ho();
        return t.createElement(i.Consumer, null, function (e) {
          return (
            void 0 === e && (e = {}),
            n && e.client !== n && (e = Object.assign({}, e, { client: n })),
            __DEV__
              ? je(
                  e.client,
                  'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'
                )
              : je(e.client, 26),
            t.createElement(i.Provider, { value: e }, r)
          );
        });
      };
      function Go() {
        return (
          (Go = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Go.apply(this, arguments)
        );
      }
      function Jo(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var Xo = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
      ];
      var Zo = t.forwardRef(function (e, n) {
        var r = e.onClick,
          i = e.relative,
          o = e.reloadDocument,
          a = e.replace,
          u = e.state,
          s = e.target,
          l = e.to,
          c = e.preventScrollReset,
          f = Jo(e, Xo),
          d = (function (e, n) {
            var r = (void 0 === n ? {} : n).relative;
            ue() || L(!1);
            var i = t.useContext(re),
              o = i.basename,
              a = i.navigator,
              u = fe(e, { relative: r }),
              s = u.hash,
              l = u.pathname,
              c = u.search,
              f = l;
            return (
              "/" !== o && (f = "/" === l ? o : V([o, l])),
              a.createHref({ pathname: f, search: c, hash: s })
            );
          })(l, { relative: i }),
          p = (function (e, n) {
            var r = void 0 === n ? {} : n,
              i = r.target,
              o = r.replace,
              a = r.state,
              u = r.preventScrollReset,
              s = r.relative,
              l = ce(),
              c = se(),
              f = fe(e, { relative: s });
            return t.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, i)
                ) {
                  t.preventDefault();
                  var n = void 0 !== o ? o : T(c) === T(f);
                  l(e, {
                    replace: n,
                    state: a,
                    preventScrollReset: u,
                    relative: s,
                  });
                }
              },
              [c, l, f, o, a, i, e, u, s]
            );
          })(l, {
            replace: a,
            state: u,
            target: s,
            preventScrollReset: c,
            relative: i,
          });
        return t.createElement(
          "a",
          Go({}, f, {
            href: d,
            onClick: o
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || p(e);
                },
            ref: n,
            target: s,
          })
        );
      });
      function ea(e) {
        this.message = e;
      }
      (ea.prototype = new Error()),
        (ea.prototype.name = "InvalidCharacterError");
      var ta =
        ("undefined" != typeof window &&
          window.atob &&
          window.atob.bind(window)) ||
        function (e) {
          var t = String(e).replace(/=+$/, "");
          if (t.length % 4 == 1)
            throw new ea(
              "'atob' failed: The string to be decoded is not correctly encoded."
            );
          for (
            var n, r, i = 0, o = 0, a = "";
            (r = t.charAt(o++));
            ~r && ((n = i % 4 ? 64 * n + r : r), i++ % 4)
              ? (a += String.fromCharCode(255 & (n >> ((-2 * i) & 6))))
              : 0
          )
            r =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                r
              );
          return a;
        };
      function na(e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (t.length % 4) {
          case 0:
            break;
          case 2:
            t += "==";
            break;
          case 3:
            t += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          return (function (e) {
            return decodeURIComponent(
              ta(e).replace(/(.)/g, function (e, t) {
                var n = t.charCodeAt(0).toString(16).toUpperCase();
                return n.length < 2 && (n = "0" + n), "%" + n;
              })
            );
          })(t);
        } catch (e) {
          return ta(t);
        }
      }
      function ra(e) {
        this.message = e;
      }
      (ra.prototype = new Error()), (ra.prototype.name = "InvalidTokenError");
      var ia = function (e, t) {
          if ("string" != typeof e) throw new ra("Invalid token specified");
          var n = !0 === (t = t || {}).header ? 0 : 1;
          try {
            return JSON.parse(na(e.split(".")[n]));
          } catch (e) {
            throw new ra("Invalid token specified: " + e.message);
          }
        },
        oa = new ((function () {
          function e() {
            f(this, e);
          }
          return (
            p(e, [
              {
                key: "getProfile",
                value: function () {
                  return ia(this.getToken());
                },
              },
              {
                key: "loggedIn",
                value: function () {
                  var e = this.getToken();
                  return !!e && !this.isTokenExpired(e);
                },
              },
              {
                key: "isTokenExpired",
                value: function (e) {
                  try {
                    return ia(e).exp < Date.now() / 1e3;
                  } catch (t) {
                    return !1;
                  }
                },
              },
              {
                key: "getToken",
                value: function () {
                  return localStorage.getItem("id_token");
                },
              },
              {
                key: "login",
                value: function (e) {
                  localStorage.setItem("id_token", e),
                    window.location.assign("/");
                },
              },
              {
                key: "logout",
                value: function () {
                  localStorage.removeItem("id_token"),
                    window.location.assign("/");
                },
              },
            ]),
            e
          );
        })())(),
        aa = n(184),
        ua = function () {
          return (0, aa.jsxs)("header", {
            children: [
              (0, aa.jsxs)(Zo, {
                to: "/",
                children: [
                  " ",
                  (0, aa.jsx)("h1", { children: "Where Were You When" }),
                ],
              }),
              (0, aa.jsx)("nav", {
                children: oa.loggedIn()
                  ? (0, aa.jsxs)(aa.Fragment, {
                      children: [
                        (0, aa.jsx)(Zo, {
                          to: "/profile",
                          children: "Profile",
                        }),
                        (0, aa.jsx)("a", {
                          href: "/",
                          onClick: function (e) {
                            e.preventDefault(), oa.logout();
                          },
                          children: "Logout",
                        }),
                      ],
                    })
                  : (0, aa.jsxs)(aa.Fragment, {
                      children: [
                        (0, aa.jsx)(Zo, { to: "/login", children: "Login" }),
                        (0, aa.jsx)(Zo, { to: "/signup", children: "Signup" }),
                      ],
                    }),
              }),
            ],
          });
        };
      var sa = function () {
        return (0, aa.jsxs)("footer", {
          children: [
            (0, aa.jsx)("div", {
              children:
                "\xa9 2022 Kayla Backus, Angie Gustafson, Amy McCabe, and Kristy",
            }),
            "Nerhaugen",
          ],
        });
      };
      var la = function () {
        var e = E((0, t.useState)(null), 2),
          n = e[0],
          r = e[1],
          i = E((0, t.useState)(!1), 2),
          o = i[0],
          a = i[1],
          u = E((0, t.useState)([]), 2),
          s = u[0],
          l = u[1];
        return (
          console.log(s),
          (0, t.useEffect)(function () {
            fetch("https://history.muffinlabs.com/date")
              .then(function (e) {
                return e.json();
              })
              .then(
                function (e) {
                  a(!0), l(e);
                },
                function (e) {
                  a(!0), r(e);
                }
              );
          }, []),
          n
            ? (0, aa.jsxs)("div", { children: ["Error: ", n.message] })
            : o
            ? (0, aa.jsxs)("div", {
                children: [
                  (0, aa.jsx)("h2", { children: "On This Day..." }),
                  (0, aa.jsxs)("ul", {
                    children: [
                      s.data.Events.map(function (e) {
                        return (0,
                        aa.jsxs)("li", { children: [e.year, " ", e.text, (0, aa.jsx)("br", {}), (0, aa.jsx)("a", { href: e.links[0].link, target: "_blank", rel: "noopener norefferrer", children: e.links[0].link }), (0, aa.jsx)("br", {})] }, e.index);
                      }),
                      (0, aa.jsx)("br", {}),
                    ],
                  }),
                ],
              })
            : (0, aa.jsx)("div", { children: "Loading..." })
        );
      };
      var ca = function () {
        return (0, aa.jsx)("div", { children: (0, aa.jsx)(la, {}) });
      };
      function fa(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function da(e) {
        return "object" == typeof e && null !== e;
      }
      function pa(e, t) {
        if (!Boolean(e))
          throw new Error(null != t ? t : "Unexpected invariant triggered.");
      }
      var ha = /\r\n|[\n\r]/g;
      function va(e, t) {
        var n,
          r = 0,
          i = 1,
          o = et(e.body.matchAll(ha));
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value;
            if (("number" === typeof a.index || pa(!1), a.index >= t)) break;
            (r = a.index + a[0].length), (i += 1);
          }
        } catch (u) {
          o.e(u);
        } finally {
          o.f();
        }
        return { line: i, column: t + 1 - r };
      }
      function ya(e) {
        return ma(e.source, va(e.source, e.start));
      }
      function ma(e, t) {
        var n = e.locationOffset.column - 1,
          r = "".padStart(n) + e.body,
          i = t.line - 1,
          o = e.locationOffset.line - 1,
          a = t.line + o,
          u = 1 === t.line ? n : 0,
          s = t.column + u,
          l = "".concat(e.name, ":").concat(a, ":").concat(s, "\n"),
          f = r.split(/\r\n|[\n\r]/g),
          d = f[i];
        if (d.length > 120) {
          for (
            var p = Math.floor(s / 80), h = s % 80, v = [], y = 0;
            y < d.length;
            y += 80
          )
            v.push(d.slice(y, y + 80));
          return (
            l +
            ga(
              [["".concat(a, " |"), v[0]]].concat(
                c(
                  v.slice(1, p + 1).map(function (e) {
                    return ["|", e];
                  })
                ),
                [
                  ["|", "^".padStart(h)],
                  ["|", v[p + 1]],
                ]
              )
            )
          );
        }
        return (
          l +
          ga([
            ["".concat(a - 1, " |"), f[i - 1]],
            ["".concat(a, " |"), d],
            ["|", "^".padStart(s)],
            ["".concat(a + 1, " |"), f[i + 1]],
          ])
        );
      }
      function ga(e) {
        var t = e.filter(function (e) {
            var t = E(e, 2);
            t[0];
            return void 0 !== t[1];
          }),
          n = Math.max.apply(
            Math,
            c(
              t.map(function (e) {
                return E(e, 1)[0].length;
              })
            )
          );
        return t
          .map(function (e) {
            var t = E(e, 2),
              r = t[0],
              i = t[1];
            return r.padStart(n) + (i ? " " + i : "");
          })
          .join("\n");
      }
      function ba(e) {
        var t = e[0];
        return null == t || "kind" in t || "length" in t
          ? {
              nodes: t,
              source: e[1],
              positions: e[2],
              path: e[3],
              originalError: e[4],
              extensions: e[5],
            }
          : t;
      }
      var wa,
        ka,
        Ea = (function (e, t) {
          v(r, e);
          var n = k(r);
          function r(e) {
            var t, i, o, a;
            f(this, r);
            for (
              var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), l = 1;
              l < u;
              l++
            )
              s[l - 1] = arguments[l];
            var c = ba(s),
              d = c.nodes,
              p = c.source,
              h = c.positions,
              v = c.path,
              y = c.originalError,
              m = c.extensions;
            ((t = n.call(this, e)).name = "GraphQLError"),
              (t.path = null !== v && void 0 !== v ? v : void 0),
              (t.originalError = null !== y && void 0 !== y ? y : void 0),
              (t.nodes = _a(Array.isArray(d) ? d : d ? [d] : void 0));
            var g = _a(
              null === (i = t.nodes) || void 0 === i
                ? void 0
                : i
                    .map(function (e) {
                      return e.loc;
                    })
                    .filter(function (e) {
                      return null != e;
                    })
            );
            (t.source =
              null !== p && void 0 !== p
                ? p
                : null === g ||
                  void 0 === g ||
                  null === (o = g[0]) ||
                  void 0 === o
                ? void 0
                : o.source),
              (t.positions =
                null !== h && void 0 !== h
                  ? h
                  : null === g || void 0 === g
                  ? void 0
                  : g.map(function (e) {
                      return e.start;
                    })),
              (t.locations =
                h && p
                  ? h.map(function (e) {
                      return va(p, e);
                    })
                  : null === g || void 0 === g
                  ? void 0
                  : g.map(function (e) {
                      return va(e.source, e.start);
                    }));
            var w = da(null === y || void 0 === y ? void 0 : y.extensions)
              ? null === y || void 0 === y
                ? void 0
                : y.extensions
              : void 0;
            return (
              (t.extensions =
                null !== (a = null !== m && void 0 !== m ? m : w) &&
                void 0 !== a
                  ? a
                  : Object.create(null)),
              Object.defineProperties(b(t), {
                message: { writable: !0, enumerable: !0 },
                name: { enumerable: !1 },
                nodes: { enumerable: !1 },
                source: { enumerable: !1 },
                positions: { enumerable: !1 },
                originalError: { enumerable: !1 },
              }),
              null !== y && void 0 !== y && y.stack
                ? Object.defineProperty(b(t), "stack", {
                    value: y.stack,
                    writable: !0,
                    configurable: !0,
                  })
                : Error.captureStackTrace
                ? Error.captureStackTrace(b(t), r)
                : Object.defineProperty(b(t), "stack", {
                    value: Error().stack,
                    writable: !0,
                    configurable: !0,
                  }),
              t
            );
          }
          return (
            p(r, [
              {
                key: t,
                get: function () {
                  return "GraphQLError";
                },
              },
              {
                key: "toString",
                value: function () {
                  var e = this.message;
                  if (this.nodes) {
                    var t,
                      n = et(this.nodes);
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value;
                        r.loc && (e += "\n\n" + ya(r.loc));
                      }
                    } catch (u) {
                      n.e(u);
                    } finally {
                      n.f();
                    }
                  } else if (this.source && this.locations) {
                    var i,
                      o = et(this.locations);
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var a = i.value;
                        e += "\n\n" + ma(this.source, a);
                      }
                    } catch (u) {
                      o.e(u);
                    } finally {
                      o.f();
                    }
                  }
                  return e;
                },
              },
              {
                key: "toJSON",
                value: function () {
                  var e = { message: this.message };
                  return (
                    null != this.locations && (e.locations = this.locations),
                    null != this.path && (e.path = this.path),
                    null != this.extensions &&
                      Object.keys(this.extensions).length > 0 &&
                      (e.extensions = this.extensions),
                    e
                  );
                },
              },
            ]),
            r
          );
        })(S(Error), Symbol.toStringTag);
      function _a(e) {
        return void 0 === e || 0 === e.length ? void 0 : e;
      }
      function Sa(e, t, n) {
        return new Ea("Syntax Error: ".concat(n), {
          source: e,
          positions: [t],
        });
      }
      !(function (e) {
        (e.QUERY = "QUERY"),
          (e.MUTATION = "MUTATION"),
          (e.SUBSCRIPTION = "SUBSCRIPTION"),
          (e.FIELD = "FIELD"),
          (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
          (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
          (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
          (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
          (e.SCHEMA = "SCHEMA"),
          (e.SCALAR = "SCALAR"),
          (e.OBJECT = "OBJECT"),
          (e.FIELD_DEFINITION = "FIELD_DEFINITION"),
          (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
          (e.INTERFACE = "INTERFACE"),
          (e.UNION = "UNION"),
          (e.ENUM = "ENUM"),
          (e.ENUM_VALUE = "ENUM_VALUE"),
          (e.INPUT_OBJECT = "INPUT_OBJECT"),
          (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
      })(wa || (wa = {})),
        (function (e) {
          (e.SOF = "<SOF>"),
            (e.EOF = "<EOF>"),
            (e.BANG = "!"),
            (e.DOLLAR = "$"),
            (e.AMP = "&"),
            (e.PAREN_L = "("),
            (e.PAREN_R = ")"),
            (e.SPREAD = "..."),
            (e.COLON = ":"),
            (e.EQUALS = "="),
            (e.AT = "@"),
            (e.BRACKET_L = "["),
            (e.BRACKET_R = "]"),
            (e.BRACE_L = "{"),
            (e.PIPE = "|"),
            (e.BRACE_R = "}"),
            (e.NAME = "Name"),
            (e.INT = "Int"),
            (e.FLOAT = "Float"),
            (e.STRING = "String"),
            (e.BLOCK_STRING = "BlockString"),
            (e.COMMENT = "Comment");
        })(ka || (ka = {}));
      var xa = (function (e) {
        function t(e) {
          f(this, t);
          var n = new it(ka.SOF, 0, 0, 0, 0);
          (this.source = e),
            (this.lastToken = n),
            (this.token = n),
            (this.line = 1),
            (this.lineStart = 0);
        }
        return (
          p(t, [
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Lexer";
              },
            },
            {
              key: "advance",
              value: function () {
                return (
                  (this.lastToken = this.token), (this.token = this.lookahead())
                );
              },
            },
            {
              key: "lookahead",
              value: function () {
                var e = this.token;
                if (e.kind !== ka.EOF)
                  do {
                    if (e.next) e = e.next;
                    else {
                      var t = Ia(this, e.end);
                      (e.next = t), (t.prev = e), (e = t);
                    }
                  } while (e.kind === ka.COMMENT);
                return e;
              },
            },
          ]),
          t
        );
      })();
      function Oa(e) {
        return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
      }
      function Ta(e, t) {
        return Ca(e.charCodeAt(t)) && Na(e.charCodeAt(t + 1));
      }
      function Ca(e) {
        return e >= 55296 && e <= 56319;
      }
      function Na(e) {
        return e >= 56320 && e <= 57343;
      }
      function Da(e, t) {
        var n = e.source.body.codePointAt(t);
        if (void 0 === n) return ka.EOF;
        if (n >= 32 && n <= 126) {
          var r = String.fromCodePoint(n);
          return '"' === r ? "'\"'" : '"'.concat(r, '"');
        }
        return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
      }
      function Pa(e, t, n, r, i) {
        var o = e.line,
          a = 1 + n - e.lineStart;
        return new it(t, n, r, o, a, i);
      }
      function Ia(e, t) {
        for (var n = e.source.body, r = n.length, i = t; i < r; ) {
          var o = n.charCodeAt(i);
          switch (o) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++i;
              continue;
            case 10:
              ++i, ++e.line, (e.lineStart = i);
              continue;
            case 13:
              10 === n.charCodeAt(i + 1) ? (i += 2) : ++i,
                ++e.line,
                (e.lineStart = i);
              continue;
            case 35:
              return Ra(e, i);
            case 33:
              return Pa(e, ka.BANG, i, i + 1);
            case 36:
              return Pa(e, ka.DOLLAR, i, i + 1);
            case 38:
              return Pa(e, ka.AMP, i, i + 1);
            case 40:
              return Pa(e, ka.PAREN_L, i, i + 1);
            case 41:
              return Pa(e, ka.PAREN_R, i, i + 1);
            case 46:
              if (46 === n.charCodeAt(i + 1) && 46 === n.charCodeAt(i + 2))
                return Pa(e, ka.SPREAD, i, i + 3);
              break;
            case 58:
              return Pa(e, ka.COLON, i, i + 1);
            case 61:
              return Pa(e, ka.EQUALS, i, i + 1);
            case 64:
              return Pa(e, ka.AT, i, i + 1);
            case 91:
              return Pa(e, ka.BRACKET_L, i, i + 1);
            case 93:
              return Pa(e, ka.BRACKET_R, i, i + 1);
            case 123:
              return Pa(e, ka.BRACE_L, i, i + 1);
            case 124:
              return Pa(e, ka.PIPE, i, i + 1);
            case 125:
              return Pa(e, ka.BRACE_R, i, i + 1);
            case 34:
              return 34 === n.charCodeAt(i + 1) && 34 === n.charCodeAt(i + 2)
                ? qa(e, i)
                : La(e, i);
          }
          if (dn(o) || 45 === o) return Fa(e, i, o);
          if (hn(o)) return Ua(e, i);
          throw Sa(
            e.source,
            i,
            39 === o
              ? "Unexpected single quote character ('), did you mean to use a double quote (\")?"
              : Oa(o) || Ta(n, i)
              ? "Unexpected character: ".concat(Da(e, i), ".")
              : "Invalid character: ".concat(Da(e, i), ".")
          );
        }
        return Pa(e, ka.EOF, r, r);
      }
      function Ra(e, t) {
        for (var n = e.source.body, r = n.length, i = t + 1; i < r; ) {
          var o = n.charCodeAt(i);
          if (10 === o || 13 === o) break;
          if (Oa(o)) ++i;
          else {
            if (!Ta(n, i)) break;
            i += 2;
          }
        }
        return Pa(e, ka.COMMENT, t, i, n.slice(t + 1, i));
      }
      function Fa(e, t, n) {
        var r = e.source.body,
          i = t,
          o = n,
          a = !1;
        if ((45 === o && (o = r.charCodeAt(++i)), 48 === o)) {
          if (dn((o = r.charCodeAt(++i))))
            throw Sa(
              e.source,
              i,
              "Invalid number, unexpected digit after 0: ".concat(Da(e, i), ".")
            );
        } else (i = ja(e, i, o)), (o = r.charCodeAt(i));
        if (
          (46 === o &&
            ((a = !0),
            (o = r.charCodeAt(++i)),
            (i = ja(e, i, o)),
            (o = r.charCodeAt(i))),
          (69 !== o && 101 !== o) ||
            ((a = !0),
            (43 !== (o = r.charCodeAt(++i)) && 45 !== o) ||
              (o = r.charCodeAt(++i)),
            (i = ja(e, i, o)),
            (o = r.charCodeAt(i))),
          46 === o || hn(o))
        )
          throw Sa(
            e.source,
            i,
            "Invalid number, expected digit but got: ".concat(Da(e, i), ".")
          );
        return Pa(e, a ? ka.FLOAT : ka.INT, t, i, r.slice(t, i));
      }
      function ja(e, t, n) {
        if (!dn(n))
          throw Sa(
            e.source,
            t,
            "Invalid number, expected digit but got: ".concat(Da(e, t), ".")
          );
        for (var r = e.source.body, i = t + 1; dn(r.charCodeAt(i)); ) ++i;
        return i;
      }
      function La(e, t) {
        for (
          var n = e.source.body, r = n.length, i = t + 1, o = i, a = "";
          i < r;

        ) {
          var u = n.charCodeAt(i);
          if (34 === u)
            return (a += n.slice(o, i)), Pa(e, ka.STRING, t, i + 1, a);
          if (92 !== u) {
            if (10 === u || 13 === u) break;
            if (Oa(u)) ++i;
            else {
              if (!Ta(n, i))
                throw Sa(
                  e.source,
                  i,
                  "Invalid character within String: ".concat(Da(e, i), ".")
                );
              i += 2;
            }
          } else {
            a += n.slice(o, i);
            var s =
              117 === n.charCodeAt(i + 1)
                ? 123 === n.charCodeAt(i + 2)
                  ? Aa(e, i)
                  : Ma(e, i)
                : Qa(e, i);
            (a += s.value), (o = i += s.size);
          }
        }
        throw Sa(e.source, i, "Unterminated string.");
      }
      function Aa(e, t) {
        for (var n = e.source.body, r = 0, i = 3; i < 12; ) {
          var o = n.charCodeAt(t + i++);
          if (125 === o) {
            if (i < 5 || !Oa(r)) break;
            return { value: String.fromCodePoint(r), size: i };
          }
          if ((r = (r << 4) | za(o)) < 0) break;
        }
        throw Sa(
          e.source,
          t,
          'Invalid Unicode escape sequence: "'.concat(n.slice(t, t + i), '".')
        );
      }
      function Ma(e, t) {
        var n = e.source.body,
          r = Va(n, t + 2);
        if (Oa(r)) return { value: String.fromCodePoint(r), size: 6 };
        if (
          Ca(r) &&
          92 === n.charCodeAt(t + 6) &&
          117 === n.charCodeAt(t + 7)
        ) {
          var i = Va(n, t + 8);
          if (Na(i)) return { value: String.fromCodePoint(r, i), size: 12 };
        }
        throw Sa(
          e.source,
          t,
          'Invalid Unicode escape sequence: "'.concat(n.slice(t, t + 6), '".')
        );
      }
      function Va(e, t) {
        return (
          (za(e.charCodeAt(t)) << 12) |
          (za(e.charCodeAt(t + 1)) << 8) |
          (za(e.charCodeAt(t + 2)) << 4) |
          za(e.charCodeAt(t + 3))
        );
      }
      function za(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : -1;
      }
      function Qa(e, t) {
        var n = e.source.body;
        switch (n.charCodeAt(t + 1)) {
          case 34:
            return { value: '"', size: 2 };
          case 92:
            return { value: "\\", size: 2 };
          case 47:
            return { value: "/", size: 2 };
          case 98:
            return { value: "\b", size: 2 };
          case 102:
            return { value: "\f", size: 2 };
          case 110:
            return { value: "\n", size: 2 };
          case 114:
            return { value: "\r", size: 2 };
          case 116:
            return { value: "\t", size: 2 };
        }
        throw Sa(
          e.source,
          t,
          'Invalid character escape sequence: "'.concat(n.slice(t, t + 2), '".')
        );
      }
      function qa(e, t) {
        for (
          var n = e.source.body,
            r = n.length,
            i = e.lineStart,
            o = t + 3,
            a = o,
            u = "",
            s = [];
          o < r;

        ) {
          var l = n.charCodeAt(o);
          if (
            34 === l &&
            34 === n.charCodeAt(o + 1) &&
            34 === n.charCodeAt(o + 2)
          ) {
            (u += n.slice(a, o)), s.push(u);
            var c = Pa(e, ka.BLOCK_STRING, t, o + 3, yn(s).join("\n"));
            return (e.line += s.length - 1), (e.lineStart = i), c;
          }
          if (
            92 !== l ||
            34 !== n.charCodeAt(o + 1) ||
            34 !== n.charCodeAt(o + 2) ||
            34 !== n.charCodeAt(o + 3)
          )
            if (10 !== l && 13 !== l)
              if (Oa(l)) ++o;
              else {
                if (!Ta(n, o))
                  throw Sa(
                    e.source,
                    o,
                    "Invalid character within String: ".concat(Da(e, o), ".")
                  );
                o += 2;
              }
            else
              (u += n.slice(a, o)),
                s.push(u),
                13 === l && 10 === n.charCodeAt(o + 1) ? (o += 2) : ++o,
                (u = ""),
                (a = o),
                (i = o);
          else (u += n.slice(a, o)), (a = o + 1), (o += 4);
        }
        throw Sa(e.source, o, "Unterminated string.");
      }
      function Ua(e, t) {
        for (var n = e.source.body, r = n.length, i = t + 1; i < r; ) {
          if (!vn(n.charCodeAt(i))) break;
          ++i;
        }
        return Pa(e, ka.NAME, t, i, n.slice(t, i));
      }
      var Ba = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          f(this, e);
          var r = Ze(t) ? t : new Xe(t);
          (this._lexer = new xa(r)),
            (this._options = n),
            (this._tokenCounter = 0);
        }
        return (
          p(e, [
            {
              key: "parseName",
              value: function () {
                var e = this.expectToken(ka.NAME);
                return this.node(e, { kind: nt.NAME, value: e.value });
              },
            },
            {
              key: "parseDocument",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: nt.DOCUMENT,
                  definitions: this.many(ka.SOF, this.parseDefinition, ka.EOF),
                });
              },
            },
            {
              key: "parseDefinition",
              value: function () {
                if (this.peek(ka.BRACE_L))
                  return this.parseOperationDefinition();
                var e = this.peekDescription(),
                  t = e ? this._lexer.lookahead() : this._lexer.token;
                if (t.kind === ka.NAME) {
                  switch (t.value) {
                    case "schema":
                      return this.parseSchemaDefinition();
                    case "scalar":
                      return this.parseScalarTypeDefinition();
                    case "type":
                      return this.parseObjectTypeDefinition();
                    case "interface":
                      return this.parseInterfaceTypeDefinition();
                    case "union":
                      return this.parseUnionTypeDefinition();
                    case "enum":
                      return this.parseEnumTypeDefinition();
                    case "input":
                      return this.parseInputObjectTypeDefinition();
                    case "directive":
                      return this.parseDirectiveDefinition();
                  }
                  if (e)
                    throw Sa(
                      this._lexer.source,
                      this._lexer.token.start,
                      "Unexpected description, descriptions are supported only on type definitions."
                    );
                  switch (t.value) {
                    case "query":
                    case "mutation":
                    case "subscription":
                      return this.parseOperationDefinition();
                    case "fragment":
                      return this.parseFragmentDefinition();
                    case "extend":
                      return this.parseTypeSystemExtension();
                  }
                }
                throw this.unexpected(t);
              },
            },
            {
              key: "parseOperationDefinition",
              value: function () {
                var e = this._lexer.token;
                if (this.peek(ka.BRACE_L))
                  return this.node(e, {
                    kind: nt.OPERATION_DEFINITION,
                    operation: tt.QUERY,
                    name: void 0,
                    variableDefinitions: [],
                    directives: [],
                    selectionSet: this.parseSelectionSet(),
                  });
                var t,
                  n = this.parseOperationType();
                return (
                  this.peek(ka.NAME) && (t = this.parseName()),
                  this.node(e, {
                    kind: nt.OPERATION_DEFINITION,
                    operation: n,
                    name: t,
                    variableDefinitions: this.parseVariableDefinitions(),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                  })
                );
              },
            },
            {
              key: "parseOperationType",
              value: function () {
                var e = this.expectToken(ka.NAME);
                switch (e.value) {
                  case "query":
                    return tt.QUERY;
                  case "mutation":
                    return tt.MUTATION;
                  case "subscription":
                    return tt.SUBSCRIPTION;
                }
                throw this.unexpected(e);
              },
            },
            {
              key: "parseVariableDefinitions",
              value: function () {
                return this.optionalMany(
                  ka.PAREN_L,
                  this.parseVariableDefinition,
                  ka.PAREN_R
                );
              },
            },
            {
              key: "parseVariableDefinition",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: nt.VARIABLE_DEFINITION,
                  variable: this.parseVariable(),
                  type: (this.expectToken(ka.COLON), this.parseTypeReference()),
                  defaultValue: this.expectOptionalToken(ka.EQUALS)
                    ? this.parseConstValueLiteral()
                    : void 0,
                  directives: this.parseConstDirectives(),
                });
              },
            },
            {
              key: "parseVariable",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.expectToken(ka.DOLLAR),
                  this.node(e, { kind: nt.VARIABLE, name: this.parseName() })
                );
              },
            },
            {
              key: "parseSelectionSet",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: nt.SELECTION_SET,
                  selections: this.many(
                    ka.BRACE_L,
                    this.parseSelection,
                    ka.BRACE_R
                  ),
                });
              },
            },
            {
              key: "parseSelection",
              value: function () {
                return this.peek(ka.SPREAD)
                  ? this.parseFragment()
                  : this.parseField();
              },
            },
            {
              key: "parseField",
              value: function () {
                var e,
                  t,
                  n = this._lexer.token,
                  r = this.parseName();
                return (
                  this.expectOptionalToken(ka.COLON)
                    ? ((e = r), (t = this.parseName()))
                    : (t = r),
                  this.node(n, {
                    kind: nt.FIELD,
                    alias: e,
                    name: t,
                    arguments: this.parseArguments(!1),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.peek(ka.BRACE_L)
                      ? this.parseSelectionSet()
                      : void 0,
                  })
                );
              },
            },
            {
              key: "parseArguments",
              value: function (e) {
                var t = e ? this.parseConstArgument : this.parseArgument;
                return this.optionalMany(ka.PAREN_L, t, ka.PAREN_R);
              },
            },
            {
              key: "parseArgument",
              value: function () {
                var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  t = this._lexer.token,
                  n = this.parseName();
                return (
                  this.expectToken(ka.COLON),
                  this.node(t, {
                    kind: nt.ARGUMENT,
                    name: n,
                    value: this.parseValueLiteral(e),
                  })
                );
              },
            },
            {
              key: "parseConstArgument",
              value: function () {
                return this.parseArgument(!0);
              },
            },
            {
              key: "parseFragment",
              value: function () {
                var e = this._lexer.token;
                this.expectToken(ka.SPREAD);
                var t = this.expectOptionalKeyword("on");
                return !t && this.peek(ka.NAME)
                  ? this.node(e, {
                      kind: nt.FRAGMENT_SPREAD,
                      name: this.parseFragmentName(),
                      directives: this.parseDirectives(!1),
                    })
                  : this.node(e, {
                      kind: nt.INLINE_FRAGMENT,
                      typeCondition: t ? this.parseNamedType() : void 0,
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                    });
              },
            },
            {
              key: "parseFragmentDefinition",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.expectKeyword("fragment"),
                  !0 === this._options.allowLegacyFragmentVariables
                    ? this.node(e, {
                        kind: nt.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        variableDefinitions: this.parseVariableDefinitions(),
                        typeCondition:
                          (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                      })
                    : this.node(e, {
                        kind: nt.FRAGMENT_DEFINITION,
                        name: this.parseFragmentName(),
                        typeCondition:
                          (this.expectKeyword("on"), this.parseNamedType()),
                        directives: this.parseDirectives(!1),
                        selectionSet: this.parseSelectionSet(),
                      })
                );
              },
            },
            {
              key: "parseFragmentName",
              value: function () {
                if ("on" === this._lexer.token.value) throw this.unexpected();
                return this.parseName();
              },
            },
            {
              key: "parseValueLiteral",
              value: function (e) {
                var t = this._lexer.token;
                switch (t.kind) {
                  case ka.BRACKET_L:
                    return this.parseList(e);
                  case ka.BRACE_L:
                    return this.parseObject(e);
                  case ka.INT:
                    return (
                      this.advanceLexer(),
                      this.node(t, { kind: nt.INT, value: t.value })
                    );
                  case ka.FLOAT:
                    return (
                      this.advanceLexer(),
                      this.node(t, { kind: nt.FLOAT, value: t.value })
                    );
                  case ka.STRING:
                  case ka.BLOCK_STRING:
                    return this.parseStringLiteral();
                  case ka.NAME:
                    switch ((this.advanceLexer(), t.value)) {
                      case "true":
                        return this.node(t, { kind: nt.BOOLEAN, value: !0 });
                      case "false":
                        return this.node(t, { kind: nt.BOOLEAN, value: !1 });
                      case "null":
                        return this.node(t, { kind: nt.NULL });
                      default:
                        return this.node(t, { kind: nt.ENUM, value: t.value });
                    }
                  case ka.DOLLAR:
                    if (e) {
                      if (
                        (this.expectToken(ka.DOLLAR),
                        this._lexer.token.kind === ka.NAME)
                      ) {
                        var n = this._lexer.token.value;
                        throw Sa(
                          this._lexer.source,
                          t.start,
                          'Unexpected variable "$'.concat(
                            n,
                            '" in constant value.'
                          )
                        );
                      }
                      throw this.unexpected(t);
                    }
                    return this.parseVariable();
                  default:
                    throw this.unexpected();
                }
              },
            },
            {
              key: "parseConstValueLiteral",
              value: function () {
                return this.parseValueLiteral(!0);
              },
            },
            {
              key: "parseStringLiteral",
              value: function () {
                var e = this._lexer.token;
                return (
                  this.advanceLexer(),
                  this.node(e, {
                    kind: nt.STRING,
                    value: e.value,
                    block: e.kind === ka.BLOCK_STRING,
                  })
                );
              },
            },
            {
              key: "parseList",
              value: function (e) {
                var t = this;
                return this.node(this._lexer.token, {
                  kind: nt.LIST,
                  values: this.any(
                    ka.BRACKET_L,
                    function () {
                      return t.parseValueLiteral(e);
                    },
                    ka.BRACKET_R
                  ),
                });
              },
            },
            {
              key: "parseObject",
              value: function (e) {
                var t = this;
                return this.node(this._lexer.token, {
                  kind: nt.OBJECT,
                  fields: this.any(
                    ka.BRACE_L,
                    function () {
                      return t.parseObjectField(e);
                    },
                    ka.BRACE_R
                  ),
                });
              },
            },
            {
              key: "parseObjectField",
              value: function (e) {
                var t = this._lexer.token,
                  n = this.parseName();
                return (
                  this.expectToken(ka.COLON),
                  this.node(t, {
                    kind: nt.OBJECT_FIELD,
                    name: n,
                    value: this.parseValueLiteral(e),
                  })
                );
              },
            },
            {
              key: "parseDirectives",
              value: function (e) {
                for (var t = []; this.peek(ka.AT); )
                  t.push(this.parseDirective(e));
                return t;
              },
            },
            {
              key: "parseConstDirectives",
              value: function () {
                return this.parseDirectives(!0);
              },
            },
            {
              key: "parseDirective",
              value: function (e) {
                var t = this._lexer.token;
                return (
                  this.expectToken(ka.AT),
                  this.node(t, {
                    kind: nt.DIRECTIVE,
                    name: this.parseName(),
                    arguments: this.parseArguments(e),
                  })
                );
              },
            },
            {
              key: "parseTypeReference",
              value: function () {
                var e,
                  t = this._lexer.token;
                if (this.expectOptionalToken(ka.BRACKET_L)) {
                  var n = this.parseTypeReference();
                  this.expectToken(ka.BRACKET_R),
                    (e = this.node(t, { kind: nt.LIST_TYPE, type: n }));
                } else e = this.parseNamedType();
                return this.expectOptionalToken(ka.BANG)
                  ? this.node(t, { kind: nt.NON_NULL_TYPE, type: e })
                  : e;
              },
            },
            {
              key: "parseNamedType",
              value: function () {
                return this.node(this._lexer.token, {
                  kind: nt.NAMED_TYPE,
                  name: this.parseName(),
                });
              },
            },
            {
              key: "peekDescription",
              value: function () {
                return this.peek(ka.STRING) || this.peek(ka.BLOCK_STRING);
              },
            },
            {
              key: "parseDescription",
              value: function () {
                if (this.peekDescription()) return this.parseStringLiteral();
              },
            },
            {
              key: "parseSchemaDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("schema");
                var n = this.parseConstDirectives(),
                  r = this.many(
                    ka.BRACE_L,
                    this.parseOperationTypeDefinition,
                    ka.BRACE_R
                  );
                return this.node(e, {
                  kind: nt.SCHEMA_DEFINITION,
                  description: t,
                  directives: n,
                  operationTypes: r,
                });
              },
            },
            {
              key: "parseOperationTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseOperationType();
                this.expectToken(ka.COLON);
                var n = this.parseNamedType();
                return this.node(e, {
                  kind: nt.OPERATION_TYPE_DEFINITION,
                  operation: t,
                  type: n,
                });
              },
            },
            {
              key: "parseScalarTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("scalar");
                var n = this.parseName(),
                  r = this.parseConstDirectives();
                return this.node(e, {
                  kind: nt.SCALAR_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                });
              },
            },
            {
              key: "parseObjectTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("type");
                var n = this.parseName(),
                  r = this.parseImplementsInterfaces(),
                  i = this.parseConstDirectives(),
                  o = this.parseFieldsDefinition();
                return this.node(e, {
                  kind: nt.OBJECT_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  interfaces: r,
                  directives: i,
                  fields: o,
                });
              },
            },
            {
              key: "parseImplementsInterfaces",
              value: function () {
                return this.expectOptionalKeyword("implements")
                  ? this.delimitedMany(ka.AMP, this.parseNamedType)
                  : [];
              },
            },
            {
              key: "parseFieldsDefinition",
              value: function () {
                return this.optionalMany(
                  ka.BRACE_L,
                  this.parseFieldDefinition,
                  ka.BRACE_R
                );
              },
            },
            {
              key: "parseFieldDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseName(),
                  r = this.parseArgumentDefs();
                this.expectToken(ka.COLON);
                var i = this.parseTypeReference(),
                  o = this.parseConstDirectives();
                return this.node(e, {
                  kind: nt.FIELD_DEFINITION,
                  description: t,
                  name: n,
                  arguments: r,
                  type: i,
                  directives: o,
                });
              },
            },
            {
              key: "parseArgumentDefs",
              value: function () {
                return this.optionalMany(
                  ka.PAREN_L,
                  this.parseInputValueDef,
                  ka.PAREN_R
                );
              },
            },
            {
              key: "parseInputValueDef",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseName();
                this.expectToken(ka.COLON);
                var r,
                  i = this.parseTypeReference();
                this.expectOptionalToken(ka.EQUALS) &&
                  (r = this.parseConstValueLiteral());
                var o = this.parseConstDirectives();
                return this.node(e, {
                  kind: nt.INPUT_VALUE_DEFINITION,
                  description: t,
                  name: n,
                  type: i,
                  defaultValue: r,
                  directives: o,
                });
              },
            },
            {
              key: "parseInterfaceTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("interface");
                var n = this.parseName(),
                  r = this.parseImplementsInterfaces(),
                  i = this.parseConstDirectives(),
                  o = this.parseFieldsDefinition();
                return this.node(e, {
                  kind: nt.INTERFACE_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  interfaces: r,
                  directives: i,
                  fields: o,
                });
              },
            },
            {
              key: "parseUnionTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("union");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseUnionMemberTypes();
                return this.node(e, {
                  kind: nt.UNION_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  types: i,
                });
              },
            },
            {
              key: "parseUnionMemberTypes",
              value: function () {
                return this.expectOptionalToken(ka.EQUALS)
                  ? this.delimitedMany(ka.PIPE, this.parseNamedType)
                  : [];
              },
            },
            {
              key: "parseEnumTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("enum");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseEnumValuesDefinition();
                return this.node(e, {
                  kind: nt.ENUM_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  values: i,
                });
              },
            },
            {
              key: "parseEnumValuesDefinition",
              value: function () {
                return this.optionalMany(
                  ka.BRACE_L,
                  this.parseEnumValueDefinition,
                  ka.BRACE_R
                );
              },
            },
            {
              key: "parseEnumValueDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription(),
                  n = this.parseEnumValueName(),
                  r = this.parseConstDirectives();
                return this.node(e, {
                  kind: nt.ENUM_VALUE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                });
              },
            },
            {
              key: "parseEnumValueName",
              value: function () {
                if (
                  "true" === this._lexer.token.value ||
                  "false" === this._lexer.token.value ||
                  "null" === this._lexer.token.value
                )
                  throw Sa(
                    this._lexer.source,
                    this._lexer.token.start,
                    "".concat(
                      Wa(this._lexer.token),
                      " is reserved and cannot be used for an enum value."
                    )
                  );
                return this.parseName();
              },
            },
            {
              key: "parseInputObjectTypeDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("input");
                var n = this.parseName(),
                  r = this.parseConstDirectives(),
                  i = this.parseInputFieldsDefinition();
                return this.node(e, {
                  kind: nt.INPUT_OBJECT_TYPE_DEFINITION,
                  description: t,
                  name: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseInputFieldsDefinition",
              value: function () {
                return this.optionalMany(
                  ka.BRACE_L,
                  this.parseInputValueDef,
                  ka.BRACE_R
                );
              },
            },
            {
              key: "parseTypeSystemExtension",
              value: function () {
                var e = this._lexer.lookahead();
                if (e.kind === ka.NAME)
                  switch (e.value) {
                    case "schema":
                      return this.parseSchemaExtension();
                    case "scalar":
                      return this.parseScalarTypeExtension();
                    case "type":
                      return this.parseObjectTypeExtension();
                    case "interface":
                      return this.parseInterfaceTypeExtension();
                    case "union":
                      return this.parseUnionTypeExtension();
                    case "enum":
                      return this.parseEnumTypeExtension();
                    case "input":
                      return this.parseInputObjectTypeExtension();
                  }
                throw this.unexpected(e);
              },
            },
            {
              key: "parseSchemaExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("schema");
                var t = this.parseConstDirectives(),
                  n = this.optionalMany(
                    ka.BRACE_L,
                    this.parseOperationTypeDefinition,
                    ka.BRACE_R
                  );
                if (0 === t.length && 0 === n.length) throw this.unexpected();
                return this.node(e, {
                  kind: nt.SCHEMA_EXTENSION,
                  directives: t,
                  operationTypes: n,
                });
              },
            },
            {
              key: "parseScalarTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("scalar");
                var t = this.parseName(),
                  n = this.parseConstDirectives();
                if (0 === n.length) throw this.unexpected();
                return this.node(e, {
                  kind: nt.SCALAR_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                });
              },
            },
            {
              key: "parseObjectTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("type");
                var t = this.parseName(),
                  n = this.parseImplementsInterfaces(),
                  r = this.parseConstDirectives(),
                  i = this.parseFieldsDefinition();
                if (0 === n.length && 0 === r.length && 0 === i.length)
                  throw this.unexpected();
                return this.node(e, {
                  kind: nt.OBJECT_TYPE_EXTENSION,
                  name: t,
                  interfaces: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseInterfaceTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("interface");
                var t = this.parseName(),
                  n = this.parseImplementsInterfaces(),
                  r = this.parseConstDirectives(),
                  i = this.parseFieldsDefinition();
                if (0 === n.length && 0 === r.length && 0 === i.length)
                  throw this.unexpected();
                return this.node(e, {
                  kind: nt.INTERFACE_TYPE_EXTENSION,
                  name: t,
                  interfaces: n,
                  directives: r,
                  fields: i,
                });
              },
            },
            {
              key: "parseUnionTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("union");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseUnionMemberTypes();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: nt.UNION_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  types: r,
                });
              },
            },
            {
              key: "parseEnumTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("enum");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseEnumValuesDefinition();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: nt.ENUM_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  values: r,
                });
              },
            },
            {
              key: "parseInputObjectTypeExtension",
              value: function () {
                var e = this._lexer.token;
                this.expectKeyword("extend"), this.expectKeyword("input");
                var t = this.parseName(),
                  n = this.parseConstDirectives(),
                  r = this.parseInputFieldsDefinition();
                if (0 === n.length && 0 === r.length) throw this.unexpected();
                return this.node(e, {
                  kind: nt.INPUT_OBJECT_TYPE_EXTENSION,
                  name: t,
                  directives: n,
                  fields: r,
                });
              },
            },
            {
              key: "parseDirectiveDefinition",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseDescription();
                this.expectKeyword("directive"), this.expectToken(ka.AT);
                var n = this.parseName(),
                  r = this.parseArgumentDefs(),
                  i = this.expectOptionalKeyword("repeatable");
                this.expectKeyword("on");
                var o = this.parseDirectiveLocations();
                return this.node(e, {
                  kind: nt.DIRECTIVE_DEFINITION,
                  description: t,
                  name: n,
                  arguments: r,
                  repeatable: i,
                  locations: o,
                });
              },
            },
            {
              key: "parseDirectiveLocations",
              value: function () {
                return this.delimitedMany(ka.PIPE, this.parseDirectiveLocation);
              },
            },
            {
              key: "parseDirectiveLocation",
              value: function () {
                var e = this._lexer.token,
                  t = this.parseName();
                if (Object.prototype.hasOwnProperty.call(wa, t.value)) return t;
                throw this.unexpected(e);
              },
            },
            {
              key: "node",
              value: function (e, t) {
                return (
                  !0 !== this._options.noLocation &&
                    (t.loc = new rt(
                      e,
                      this._lexer.lastToken,
                      this._lexer.source
                    )),
                  t
                );
              },
            },
            {
              key: "peek",
              value: function (e) {
                return this._lexer.token.kind === e;
              },
            },
            {
              key: "expectToken",
              value: function (e) {
                var t = this._lexer.token;
                if (t.kind === e) return this.advanceLexer(), t;
                throw Sa(
                  this._lexer.source,
                  t.start,
                  "Expected ".concat($a(e), ", found ").concat(Wa(t), ".")
                );
              },
            },
            {
              key: "expectOptionalToken",
              value: function (e) {
                return (
                  this._lexer.token.kind === e && (this.advanceLexer(), !0)
                );
              },
            },
            {
              key: "expectKeyword",
              value: function (e) {
                var t = this._lexer.token;
                if (t.kind !== ka.NAME || t.value !== e)
                  throw Sa(
                    this._lexer.source,
                    t.start,
                    'Expected "'.concat(e, '", found ').concat(Wa(t), ".")
                  );
                this.advanceLexer();
              },
            },
            {
              key: "expectOptionalKeyword",
              value: function (e) {
                var t = this._lexer.token;
                return (
                  t.kind === ka.NAME &&
                  t.value === e &&
                  (this.advanceLexer(), !0)
                );
              },
            },
            {
              key: "unexpected",
              value: function (e) {
                var t = null !== e && void 0 !== e ? e : this._lexer.token;
                return Sa(
                  this._lexer.source,
                  t.start,
                  "Unexpected ".concat(Wa(t), ".")
                );
              },
            },
            {
              key: "any",
              value: function (e, t, n) {
                this.expectToken(e);
                for (var r = []; !this.expectOptionalToken(n); )
                  r.push(t.call(this));
                return r;
              },
            },
            {
              key: "optionalMany",
              value: function (e, t, n) {
                if (this.expectOptionalToken(e)) {
                  var r = [];
                  do {
                    r.push(t.call(this));
                  } while (!this.expectOptionalToken(n));
                  return r;
                }
                return [];
              },
            },
            {
              key: "many",
              value: function (e, t, n) {
                this.expectToken(e);
                var r = [];
                do {
                  r.push(t.call(this));
                } while (!this.expectOptionalToken(n));
                return r;
              },
            },
            {
              key: "delimitedMany",
              value: function (e, t) {
                this.expectOptionalToken(e);
                var n = [];
                do {
                  n.push(t.call(this));
                } while (this.expectOptionalToken(e));
                return n;
              },
            },
            {
              key: "advanceLexer",
              value: function () {
                var e = this._options.maxTokens,
                  t = this._lexer.advance();
                if (
                  void 0 !== e &&
                  t.kind !== ka.EOF &&
                  (++this._tokenCounter, this._tokenCounter > e)
                )
                  throw Sa(
                    this._lexer.source,
                    t.start,
                    "Document contains more that ".concat(
                      e,
                      " tokens. Parsing aborted."
                    )
                  );
              },
            },
          ]),
          e
        );
      })();
      function Wa(e) {
        var t = e.value;
        return $a(e.kind) + (null != t ? ' "'.concat(t, '"') : "");
      }
      function $a(e) {
        return (function (e) {
          return (
            e === ka.BANG ||
            e === ka.DOLLAR ||
            e === ka.AMP ||
            e === ka.PAREN_L ||
            e === ka.PAREN_R ||
            e === ka.SPREAD ||
            e === ka.COLON ||
            e === ka.EQUALS ||
            e === ka.AT ||
            e === ka.BRACKET_L ||
            e === ka.BRACKET_R ||
            e === ka.BRACE_L ||
            e === ka.PIPE ||
            e === ka.BRACE_R
          );
        })(e)
          ? '"'.concat(e, '"')
          : e;
      }
      var Ka = new Map(),
        Ha = new Map(),
        Ya = !0,
        Ga = !1;
      function Ja(e) {
        return e.replace(/[\s,]+/g, " ").trim();
      }
      function Xa(e) {
        var t = new Set(),
          n = [];
        return (
          e.definitions.forEach(function (e) {
            if ("FragmentDefinition" === e.kind) {
              var r = e.name.value,
                i = Ja((a = e.loc).source.body.substring(a.start, a.end)),
                o = Ha.get(r);
              o && !o.has(i)
                ? Ya &&
                  console.warn(
                    "Warning: fragment with name " +
                      r +
                      " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"
                  )
                : o || Ha.set(r, (o = new Set())),
                o.add(i),
                t.has(i) || (t.add(i), n.push(e));
            } else n.push(e);
            var a;
          }),
          Oe(Oe({}, e), { definitions: n })
        );
      }
      function Za(e) {
        var t = Ja(e);
        if (!Ka.has(t)) {
          var n = (function (e, t) {
            return new Ba(e, t).parseDocument();
          })(e, {
            experimentalFragmentVariables: Ga,
            allowLegacyFragmentVariables: Ga,
          });
          if (!n || "Document" !== n.kind)
            throw new Error("Not a valid GraphQL document.");
          Ka.set(
            t,
            (function (e) {
              var t = new Set(e.definitions);
              t.forEach(function (e) {
                e.loc && delete e.loc,
                  Object.keys(e).forEach(function (n) {
                    var r = e[n];
                    r && "object" === typeof r && t.add(r);
                  });
              });
              var n = e.loc;
              return n && (delete n.startToken, delete n.endToken), e;
            })(Xa(n))
          );
        }
        return Ka.get(t);
      }
      function eu(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        "string" === typeof e && (e = [e]);
        var r = e[0];
        return (
          t.forEach(function (t, n) {
            t && "Document" === t.kind ? (r += t.loc.source.body) : (r += t),
              (r += e[n + 1]);
          }),
          Za(r)
        );
      }
      var tu,
        nu = eu,
        ru = function () {
          Ka.clear(), Ha.clear();
        },
        iu = function () {
          Ya = !1;
        },
        ou = function () {
          Ga = !0;
        },
        au = function () {
          Ga = !1;
        };
      ((tu = eu || (eu = {})).gql = nu),
        (tu.resetCaches = ru),
        (tu.disableFragmentWarnings = iu),
        (tu.enableExperimentalFragmentVariables = ou),
        (tu.disableExperimentalFragmentVariables = au),
        (eu.default = eu);
      eu(
        uu ||
          (uu = fa([
            "\n  query memory($username: String) {\n    memory(username: $username) {\n      _id\n      memoryText\n      username\n      memoryYear\n      memoryMonth\n      memoryDate\n    }\n  }\n",
          ]))
      ),
        eu(
          su ||
            (su = fa([
              "\n  query memory($id: ID!) {\n    memory(_id: $id) {\n      _id\n      memoryText\n      username\n      memoryYear\n      memoryMonth\n      memoryDate\n    }\n  }\n",
            ]))
        );
      var uu,
        su,
        lu,
        cu,
        fu,
        du,
        pu = eu(
          lu ||
            (lu = fa([
              "\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n      memory {\n        _id\n        memoryText\n        memoryYear\n        memoryMonth\n        memoryDate\n      }\n    }\n  }\n",
            ]))
        ),
        hu = eu(
          cu ||
            (cu = fa([
              "\n  {\n    me {\n      _id\n      username\n      email\n      memory {\n        _id\n        memoryText\n        memoryYear\n        memoryMonth\n        memoryDate\n    }\n  }\n",
            ]))
        ),
        vu =
          (eu(
            fu ||
              (fu = fa([
                "\n  {\n    me {\n      _id\n      username\n      email\n    }\n  }\n",
              ]))
          ),
          function () {
            oa.loggedIn();
            return (0, aa.jsxs)("main", {
              children: [
                (0, aa.jsx)(ua, {}),
                (0, aa.jsx)(ca, {}),
                (0, aa.jsx)(sa, {}),
              ],
            });
          });
      function yu() {
        yu = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          i = r.iterator || "@@iterator",
          o = r.asyncIterator || "@@asyncIterator",
          a = r.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (T) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var i = t && t.prototype instanceof f ? t : f,
            o = Object.create(i.prototype),
            a = new S(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = "suspendedStart";
              return function (i, o) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === i) throw o;
                  return O();
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var u = k(a, n);
                    if (u) {
                      if (u === c) continue;
                      return u;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = "executing";
                  var s = l(e, t, n);
                  if ("normal" === s.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      s.arg === c)
                    )
                      continue;
                    return { value: s.arg, done: n.done };
                  }
                  "throw" === s.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = s.arg));
                }
              };
            })(e, n, a)),
            o
          );
        }
        function l(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = s;
        var c = {};
        function f() {}
        function d() {}
        function p() {}
        var h = {};
        u(h, i, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          y = v && v(v(x([])));
        y && y !== t && n.call(y, i) && (h = y);
        var m = (p.prototype = f.prototype = Object.create(h));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function r(i, o, a, u) {
            var s = l(e[i], e, o);
            if ("throw" !== s.type) {
              var c = s.arg,
                f = c.value;
              return f && "object" == g(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      r("next", e, a, u);
                    },
                    function (e) {
                      r("throw", e, a, u);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return r("throw", e, a, u);
                    }
                  );
            }
            u(s.arg);
          }
          var i;
          this._invoke = function (e, n) {
            function o() {
              return new t(function (t, i) {
                r(e, n, t, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function k(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)
              )
                return c;
              (t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return c;
          }
          var r = l(n, e.iterator, t.arg);
          if ("throw" === r.type)
            return (
              (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              c);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function _(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function x(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = p),
          u(m, "constructor", p),
          u(p, "constructor", d),
          (d.displayName = u(p, a, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), u(e, a, "GeneratorFunction")),
              (e.prototype = Object.create(m)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          u(w.prototype, o, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new w(s(t, n, r, i), o);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(m),
          u(m, a, "Generator"),
          u(m, i, function () {
            return this;
          }),
          u(m, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = x),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(_),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var o = this.tryEntries[i],
                  a = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var u = n.call(o, "catchLoc"),
                    s = n.call(o, "finallyLoc");
                  if (u && s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, "finallyLoc") &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var a = o ? o.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), c)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                c
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), _(n), c;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var i = r.arg;
                    _(n);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                c
              );
            },
          }),
          e
        );
      }
      function mu(e, t, n, r, i, o, a) {
        try {
          var u = e[o](a),
            s = u.value;
        } catch (l) {
          return void n(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, i);
      }
      function gu(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = e.apply(t, n);
            function a(e) {
              mu(o, r, i, a, u, "next", e);
            }
            function u(e) {
              mu(o, r, i, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      !(function (e) {
        (e[(e.Query = 0)] = "Query"),
          (e[(e.Mutation = 1)] = "Mutation"),
          (e[(e.Subscription = 2)] = "Subscription");
      })(du || (du = {}));
      var bu,
        wu,
        ku,
        Eu = new Map();
      function _u(e) {
        var t;
        switch (e) {
          case du.Query:
            t = "Query";
            break;
          case du.Mutation:
            t = "Mutation";
            break;
          case du.Subscription:
            t = "Subscription";
        }
        return t;
      }
      function Su(e, t) {
        var n = (function (e) {
            var t,
              n,
              r = Eu.get(e);
            if (r) return r;
            __DEV__
              ? je(
                  !!e && !!e.kind,
                  "Argument of ".concat(
                    e,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : je(!!e && !!e.kind, 30);
            for (
              var i = [], o = [], a = [], u = [], s = 0, l = e.definitions;
              s < l.length;
              s++
            ) {
              var c = l[s];
              if ("FragmentDefinition" !== c.kind) {
                if ("OperationDefinition" === c.kind)
                  switch (c.operation) {
                    case "query":
                      o.push(c);
                      break;
                    case "mutation":
                      a.push(c);
                      break;
                    case "subscription":
                      u.push(c);
                  }
              } else i.push(c);
            }
            __DEV__
              ? je(
                  !i.length || o.length || a.length || u.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : je(!i.length || o.length || a.length || u.length, 31),
              __DEV__
                ? je(
                    o.length + a.length + u.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(e, " had ")
                        .concat(o.length, " queries, ")
                        .concat(u.length, " ") +
                      "subscriptions and ".concat(a.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : je(o.length + a.length + u.length <= 1, 32),
              (n = o.length ? du.Query : du.Mutation),
              o.length || a.length || (n = du.Subscription);
            var f = o.length ? o : a.length ? a : u;
            __DEV__
              ? je(
                  1 === f.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    e,
                    " had "
                  ) +
                    "".concat(f.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : je(1 === f.length, 33);
            var d = f[0];
            t = d.variableDefinitions || [];
            var p = {
              name: d.name && "Name" === d.name.kind ? d.name.value : "data",
              type: n,
              variables: t,
            };
            return Eu.set(e, p), p;
          })(e),
          r = _u(t),
          i = _u(n.type);
        __DEV__
          ? je(
              n.type === t,
              "Running a ".concat(r, " requires a graphql ") +
                "".concat(r, ", but a ").concat(i, " was used instead.")
            )
          : je(n.type === t, 34);
      }
      function xu(e) {
        var n = (0, t.useContext)(Ho()),
          r = e || n.client;
        return (
          __DEV__
            ? je(
                !!r,
                'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'
              )
            : je(!!r, 29),
          r
        );
      }
      function Ou(e, n) {
        var r = xu(null === n || void 0 === n ? void 0 : n.client);
        Su(e, du.Mutation);
        var i = (0, t.useState)({ called: !1, loading: !1, client: r }),
          o = i[0],
          a = i[1],
          u = (0, t.useRef)({
            result: o,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: n,
          });
        Object.assign(u.current, { client: r, options: n, mutation: e });
        var s = (0, t.useCallback)(function (e) {
            void 0 === e && (e = {});
            var t = u.current,
              n = t.client,
              r = t.options,
              i = t.mutation,
              o = Oe(Oe({}, r), { mutation: i });
            u.current.result.loading ||
              o.ignoreResults ||
              a(
                (u.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: n,
                })
              );
            var s = ++u.current.mutationId,
              l = Xi(o, e);
            return n
              .mutate(l)
              .then(function (t) {
                var r,
                  i,
                  o,
                  c = t.data,
                  f = t.errors,
                  d = f && f.length > 0 ? new Hr({ graphQLErrors: f }) : void 0;
                if (s === u.current.mutationId && !l.ignoreResults) {
                  var p = {
                    called: !0,
                    loading: !1,
                    data: c,
                    error: d,
                    client: n,
                  };
                  u.current.isMounted &&
                    !qn(u.current.result, p) &&
                    a((u.current.result = p));
                }
                return (
                  null ===
                    (i =
                      null === (r = u.current.options) || void 0 === r
                        ? void 0
                        : r.onCompleted) ||
                    void 0 === i ||
                    i.call(r, t.data),
                  null === (o = e.onCompleted) ||
                    void 0 === o ||
                    o.call(e, t.data),
                  t
                );
              })
              .catch(function (t) {
                var r, i, o, c;
                if (s === u.current.mutationId && u.current.isMounted) {
                  var f = {
                    loading: !1,
                    error: t,
                    data: void 0,
                    called: !0,
                    client: n,
                  };
                  qn(u.current.result, f) || a((u.current.result = f));
                }
                if (
                  (null === (r = u.current.options) || void 0 === r
                    ? void 0
                    : r.onError) ||
                  l.onError
                )
                  return (
                    null ===
                      (o =
                        null === (i = u.current.options) || void 0 === i
                          ? void 0
                          : i.onError) ||
                      void 0 === o ||
                      o.call(i, t),
                    null === (c = e.onError) || void 0 === c || c.call(e, t),
                    { data: void 0, errors: t }
                  );
                throw t;
              });
          }, []),
          l = (0, t.useCallback)(function () {
            a({ called: !1, loading: !1, client: r });
          }, []);
        return (
          (0, t.useEffect)(function () {
            return (
              (u.current.isMounted = !0),
              function () {
                u.current.isMounted = !1;
              }
            );
          }, []),
          [s, Oe({ reset: l }, o)]
        );
      }
      var Tu = eu(
          bu ||
            (bu = fa([
              "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n",
            ]))
        ),
        Cu = eu(
          wu ||
            (wu = fa([
              "\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n",
            ]))
        ),
        Nu =
          (eu(
            ku ||
              (ku = fa([
                "\n  mutation addMemory($memoryText: String!) {\n    addMemory(memoryText: $memoryText) {\n      _id\n      memoryText\n      username\n      memoryYear\n      memoryMonth\n      memoryDate      \n    }\n  }\n",
              ]))
          ),
          function (e) {
            var n = E((0, t.useState)({ email: "", password: "" }), 2),
              r = n[0],
              i = n[1],
              a = E(Ou(Tu), 2),
              s = a[0],
              l = a[1].error,
              c = function (e) {
                var t = e.target,
                  n = t.name,
                  a = t.value;
                i(u(u({}, r), {}, o({}, n, a)));
              },
              f = (function () {
                var e = gu(
                  yu().mark(function e(t) {
                    var n, o;
                    return yu().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                t.preventDefault(),
                                (e.prev = 1),
                                (e.next = 4),
                                s({ variables: u({}, r) })
                              );
                            case 4:
                              (n = e.sent),
                                (o = n.data),
                                oa.login(o.login.token),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(1)),
                                console.error(e.t0);
                            case 12:
                              i({ email: "", password: "" });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return (0, aa.jsx)("main", {
              children: (0, aa.jsx)("div", {
                children: (0, aa.jsxs)("div", {
                  children: [
                    (0, aa.jsx)("h3", { children: "Login" }),
                    (0, aa.jsxs)("div", {
                      children: [
                        (0, aa.jsxs)("form", {
                          onSubmit: f,
                          children: [
                            (0, aa.jsx)("input", {
                              placeholder: "Your email",
                              name: "email",
                              type: "email",
                              id: "email",
                              value: r.email,
                              onChange: c,
                            }),
                            (0, aa.jsx)("input", {
                              placeholder: "******",
                              name: "password",
                              type: "password",
                              id: "password",
                              value: r.password,
                              onChange: c,
                            }),
                            (0, aa.jsx)("button", { children: "Submit" }),
                          ],
                        }),
                        l && (0, aa.jsx)("div", { children: "Login failed" }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          }),
        Du = function () {
          var e = E(
              (0, t.useState)({ username: "", email: "", password: "" }),
              2
            ),
            n = e[0],
            r = e[1],
            i = E(Ou(Cu), 2),
            a = i[0],
            s = i[1].error,
            l = function (e) {
              var t = e.target,
                i = t.name,
                a = t.value;
              r(u(u({}, n), {}, o({}, i, a)));
            },
            c = (function () {
              var e = gu(
                yu().mark(function e(t) {
                  var r, i;
                  return yu().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (e.prev = 1),
                              (e.next = 4),
                              a({ variables: u({}, n) })
                            );
                          case 4:
                            (r = e.sent),
                              (i = r.data),
                              oa.login(i.addUser.token),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, aa.jsx)("main", {
            children: (0, aa.jsx)("div", {
              children: (0, aa.jsxs)("div", {
                children: [
                  (0, aa.jsx)("h4", { children: "Creat an Account" }),
                  (0, aa.jsxs)("div", {
                    children: [
                      (0, aa.jsxs)("form", {
                        onSubmit: c,
                        children: [
                          (0, aa.jsx)("input", {
                            placeholder: "Username",
                            name: "username",
                            type: "username",
                            id: "username",
                            value: n.username,
                            onChange: l,
                          }),
                          (0, aa.jsx)("input", {
                            placeholder: "Enter your email",
                            name: "email",
                            type: "email",
                            id: "email",
                            value: n.email,
                            onChange: l,
                          }),
                          (0, aa.jsx)("input", {
                            placeholder: "******",
                            name: "password",
                            type: "password",
                            id: "password",
                            value: n.password,
                            onChange: l,
                          }),
                          (0, aa.jsx)("button", {
                            children: "Create New Account",
                          }),
                        ],
                      }),
                      s && (0, aa.jsx)("div", { children: "Signup failed" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        Pu = !1,
        Iu =
          r.useSyncExternalStore ||
          function (e, n, r) {
            var i = n();
            __DEV__ &&
              !Pu &&
              i !== n() &&
              ((Pu = !0),
              __DEV__ &&
                je.error(
                  "The result of getSnapshot should be cached to avoid an infinite loop"
                ));
            var o = t.useState({ inst: { value: i, getSnapshot: n } }),
              a = o[0].inst,
              u = o[1];
            return (
              ir
                ? t.useLayoutEffect(
                    function () {
                      Object.assign(a, { value: i, getSnapshot: n }),
                        Ru(a) && u({ inst: a });
                    },
                    [e, i, n]
                  )
                : Object.assign(a, { value: i, getSnapshot: n }),
              t.useEffect(
                function () {
                  return (
                    Ru(a) && u({ inst: a }),
                    e(function () {
                      Ru(a) && u({ inst: a });
                    })
                  );
                },
                [e]
              ),
              i
            );
          };
      function Ru(e) {
        var t = e.value,
          n = e.getSnapshot;
        try {
          return t !== n();
        } catch (r) {
          return !0;
        }
      }
      var Fu = Object.prototype.hasOwnProperty;
      function ju(e, n) {
        return (
          void 0 === n && (n = Object.create(null)),
          (function (e, n) {
            var r = (0, t.useRef)();
            (r.current && e === r.current.client && n === r.current.query) ||
              (r.current = new Au(e, n, r.current));
            var i = r.current,
              o = (0, t.useState)(0),
              a = (o[0], o[1]);
            return (
              (i.forceUpdate = function () {
                a(function (e) {
                  return e + 1;
                });
              }),
              i
            );
          })(xu(n.client), e).useQuery(n)
        );
      }
      var Lu,
        Au = (function () {
          function e(e, t, n) {
            (this.client = e),
              (this.query = t),
              (this.asyncResolveFns = new Set()),
              (this.optionsToIgnoreOnce = new (er ? WeakSet : Set)()),
              (this.ssrDisabledResult = io({
                loading: !0,
                data: void 0,
                error: void 0,
                networkStatus: Kr.loading,
              })),
              (this.skipStandbyResult = io({
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: Kr.ready,
              })),
              (this.toQueryResultCache = new (Zn ? WeakMap : Map)()),
              Su(t, du.Query);
            var r = n && n.result,
              i = r && r.data;
            i && (this.previousData = i);
          }
          return (
            (e.prototype.forceUpdate = function () {
              __DEV__ &&
                je.warn(
                  "Calling default no-op implementation of InternalState#forceUpdate"
                );
            }),
            (e.prototype.asyncUpdate = function () {
              var e = this;
              return new Promise(function (t) {
                e.asyncResolveFns.add(t),
                  e.optionsToIgnoreOnce.add(e.watchQueryOptions),
                  e.forceUpdate();
              });
            }),
            (e.prototype.useQuery = function (e) {
              var n = this;
              (this.renderPromises = (0, t.useContext)(Ho()).renderPromises),
                this.useOptions(e);
              var r = this.useObservableQuery(),
                i = Iu(
                  (0, t.useCallback)(
                    function () {
                      if (n.renderPromises) return function () {};
                      var e = function () {
                          var e = n.result,
                            t = r.getCurrentResult();
                          (e &&
                            e.loading === t.loading &&
                            e.networkStatus === t.networkStatus &&
                            qn(e.data, t.data)) ||
                            n.setResult(t);
                        },
                        t = r.subscribe(e, function i(o) {
                          var a = r.last;
                          t.unsubscribe();
                          try {
                            r.resetLastResults(), (t = r.subscribe(e, i));
                          } finally {
                            r.last = a;
                          }
                          if (!Fu.call(o, "graphQLErrors")) throw o;
                          var u = n.result;
                          (!u || (u && u.loading) || !qn(o, u.error)) &&
                            n.setResult({
                              data: u && u.data,
                              error: o,
                              loading: !1,
                              networkStatus: Kr.error,
                            });
                        });
                      return function () {
                        return t.unsubscribe();
                      };
                    },
                    [r, this.renderPromises, this.client.disableNetworkFetches]
                  ),
                  function () {
                    return n.getCurrentResult();
                  },
                  function () {
                    return n.getCurrentResult();
                  }
                );
              this.unsafeHandlePartialRefetch(i);
              var o = this.toQueryResult(i);
              return (
                !o.loading &&
                  this.asyncResolveFns.size &&
                  (this.asyncResolveFns.forEach(function (e) {
                    return e(o);
                  }),
                  this.asyncResolveFns.clear()),
                o
              );
            }),
            (e.prototype.useOptions = function (t) {
              var n,
                r = this.createWatchQueryOptions((this.queryHookOptions = t)),
                i = this.watchQueryOptions;
              (!this.optionsToIgnoreOnce.has(i) && qn(r, i)) ||
                ((this.watchQueryOptions = r),
                i &&
                  this.observable &&
                  (this.optionsToIgnoreOnce.delete(i),
                  this.observable.reobserve(this.getObsQueryOptions()),
                  (this.previousData =
                    (null === (n = this.result) || void 0 === n
                      ? void 0
                      : n.data) || this.previousData),
                  (this.result = void 0))),
                (this.onCompleted = t.onCompleted || e.prototype.onCompleted),
                (this.onError = t.onError || e.prototype.onError),
                (!this.renderPromises && !this.client.disableNetworkFetches) ||
                !1 !== this.queryHookOptions.ssr ||
                this.queryHookOptions.skip
                  ? this.queryHookOptions.skip ||
                    "standby" === this.watchQueryOptions.fetchPolicy
                    ? (this.result = this.skipStandbyResult)
                    : (this.result !== this.ssrDisabledResult &&
                        this.result !== this.skipStandbyResult) ||
                      (this.result = void 0)
                  : (this.result = this.ssrDisabledResult);
            }),
            (e.prototype.getObsQueryOptions = function () {
              var e = [],
                t = this.client.defaultOptions.watchQuery;
              return (
                t && e.push(t),
                this.queryHookOptions.defaultOptions &&
                  e.push(this.queryHookOptions.defaultOptions),
                e.push(
                  or(
                    this.observable && this.observable.options,
                    this.watchQueryOptions
                  )
                ),
                e.reduce(Xi)
              );
            }),
            (e.prototype.createWatchQueryOptions = function (e) {
              var t;
              void 0 === e && (e = {});
              var n = e.skip,
                r =
                  (e.ssr,
                  e.onCompleted,
                  e.onError,
                  e.displayName,
                  e.defaultOptions,
                  Te(e, [
                    "skip",
                    "ssr",
                    "onCompleted",
                    "onError",
                    "displayName",
                    "defaultOptions",
                  ])),
                i = Object.assign(r, { query: this.query });
              if (
                (!this.renderPromises ||
                  ("network-only" !== i.fetchPolicy &&
                    "cache-and-network" !== i.fetchPolicy) ||
                  (i.fetchPolicy = "cache-first"),
                i.variables || (i.variables = {}),
                n)
              ) {
                var o = i.fetchPolicy,
                  a = void 0 === o ? this.getDefaultFetchPolicy() : o,
                  u = i.initialFetchPolicy,
                  s = void 0 === u ? a : u;
                Object.assign(i, {
                  initialFetchPolicy: s,
                  fetchPolicy: "standby",
                });
              } else
                i.fetchPolicy ||
                  (i.fetchPolicy =
                    (null === (t = this.observable) || void 0 === t
                      ? void 0
                      : t.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy());
              return i;
            }),
            (e.prototype.getDefaultFetchPolicy = function () {
              var e, t;
              return (
                (null === (e = this.queryHookOptions.defaultOptions) ||
                void 0 === e
                  ? void 0
                  : e.fetchPolicy) ||
                (null === (t = this.client.defaultOptions.watchQuery) ||
                void 0 === t
                  ? void 0
                  : t.fetchPolicy) ||
                "cache-first"
              );
            }),
            (e.prototype.onCompleted = function (e) {}),
            (e.prototype.onError = function (e) {}),
            (e.prototype.useObservableQuery = function () {
              var e = (this.observable =
                (this.renderPromises &&
                  this.renderPromises.getSSRObservable(
                    this.watchQueryOptions
                  )) ||
                this.observable ||
                this.client.watchQuery(this.getObsQueryOptions()));
              this.obsQueryFields = (0, t.useMemo)(
                function () {
                  return {
                    refetch: e.refetch.bind(e),
                    reobserve: e.reobserve.bind(e),
                    fetchMore: e.fetchMore.bind(e),
                    updateQuery: e.updateQuery.bind(e),
                    startPolling: e.startPolling.bind(e),
                    stopPolling: e.stopPolling.bind(e),
                    subscribeToMore: e.subscribeToMore.bind(e),
                  };
                },
                [e]
              );
              var n = !(
                !1 === this.queryHookOptions.ssr || this.queryHookOptions.skip
              );
              return (
                this.renderPromises &&
                  n &&
                  (this.renderPromises.registerSSRObservable(e),
                  e.getCurrentResult().loading &&
                    this.renderPromises.addObservableQueryPromise(e)),
                e
              );
            }),
            (e.prototype.setResult = function (e) {
              var t = this.result;
              t && t.data && (this.previousData = t.data),
                (this.result = e),
                this.forceUpdate(),
                this.handleErrorOrCompleted(e);
            }),
            (e.prototype.handleErrorOrCompleted = function (e) {
              e.loading ||
                (e.error
                  ? this.onError(e.error)
                  : e.data && this.onCompleted(e.data));
            }),
            (e.prototype.getCurrentResult = function () {
              return (
                this.result ||
                  this.handleErrorOrCompleted(
                    (this.result = this.observable.getCurrentResult())
                  ),
                this.result
              );
            }),
            (e.prototype.toQueryResult = function (e) {
              var t = this.toQueryResultCache.get(e);
              if (t) return t;
              var n = e.data,
                r = (e.partial, Te(e, ["data", "partial"]));
              return (
                this.toQueryResultCache.set(
                  e,
                  (t = Oe(Oe(Oe({ data: n }, r), this.obsQueryFields), {
                    client: this.client,
                    observable: this.observable,
                    variables: this.observable.variables,
                    called: !this.queryHookOptions.skip,
                    previousData: this.previousData,
                  }))
                ),
                !t.error &&
                  $r(e.errors) &&
                  (t.error = new Hr({ graphQLErrors: e.errors })),
                t
              );
            }),
            (e.prototype.unsafeHandlePartialRefetch = function (e) {
              !e.partial ||
                !this.queryHookOptions.partialRefetch ||
                e.loading ||
                (e.data && 0 !== Object.keys(e.data).length) ||
                "cache-only" === this.observable.options.fetchPolicy ||
                (Object.assign(e, { loading: !0, networkStatus: Kr.refetch }),
                this.observable.refetch());
            }),
            e
          );
        })(),
        Mu = function (e) {
          var n = (function () {
              var e = t.useContext(oe).matches,
                n = e[e.length - 1];
              return n ? n.params : {};
            })().username,
            r = ju(n ? pu : hu, { variables: { username: n } }),
            i = r.loading,
            o = r.data,
            a =
              (null === o || void 0 === o ? void 0 : o.me) ||
              (null === o || void 0 === o ? void 0 : o.user) ||
              {};
          return oa.loggedIn() && oa.getProfile().data.username === n
            ? (0, aa.jsx)(be, { to: "/profile:username" })
            : i
            ? (0, aa.jsx)("div", { children: "Loading..." })
            : null !== a && void 0 !== a && a.username
            ? (0, aa.jsxs)("div", {
                children: [
                  (0, aa.jsx)("div", {
                    children: (0, aa.jsxs)("h2", {
                      children: [
                        "Viewing ",
                        n ? "".concat(a.username, "'s") : "your",
                        " memory profile.",
                      ],
                    }),
                  }),
                  (0, aa.jsx)("div", {
                    children: (0, aa.jsx)("p", {
                      children: "Form to input new memory will go here",
                    }),
                  }),
                  (0, aa.jsx)("div", {
                    children: (0, aa.jsx)("p", {
                      children: "User's memory list will go here ",
                    }),
                  }),
                ],
              })
            : (0, aa.jsx)("h4", {
                children:
                  "You need to be logged in to see this information. Please use the links above to sign up or log in.",
              });
        },
        Vu = Fn({ uri: "/graphql" }),
        zu = new eo({
          link: ((Lu = function (e, t) {
            var n = t.headers,
              r = localStorage.getItem("id_token");
            return {
              headers: u(
                u({}, n),
                {},
                { authorization: r ? "Bearer ".concat(r) : "" }
              ),
            };
          }),
          new un(function (e, t) {
            var n = Te(e, []);
            return new It(function (r) {
              var i,
                o = !1;
              return (
                Promise.resolve(n)
                  .then(function (t) {
                    return Lu(t, e.getContext());
                  })
                  .then(e.setContext)
                  .then(function () {
                    o ||
                      (i = t(e).subscribe({
                        next: r.next.bind(r),
                        error: r.error.bind(r),
                        complete: r.complete.bind(r),
                      }));
                  })
                  .catch(r.error.bind(r)),
                function () {
                  (o = !0), i && i.unsubscribe();
                }
              );
            });
          })).concat(Vu),
          cache: new $o(),
        });
      var Qu = function () {
          return (0, aa.jsx)(Yo, {
            client: zu,
            children: (0, aa.jsxs)("div", {
              children: [
                (0, aa.jsx)(ua, {}),
                (0, aa.jsx)("div", {
                  children: (0, aa.jsxs)(ke, {
                    children: [
                      (0, aa.jsx)(we, {
                        path: "/",
                        element: (0, aa.jsx)(vu, {}),
                      }),
                      (0, aa.jsx)(we, {
                        path: "/login",
                        element: (0, aa.jsx)(Nu, {}),
                      }),
                      (0, aa.jsx)(we, {
                        path: "/signup",
                        element: (0, aa.jsx)(Du, {}),
                      }),
                      (0, aa.jsxs)(we, {
                        path: "/profile",
                        children: [
                          (0, aa.jsx)(we, {
                            path: ":username",
                            element: (0, aa.jsx)(Mu, {}),
                          }),
                          (0, aa.jsx)(we, {
                            path: "",
                            element: (0, aa.jsx)(Mu, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, aa.jsx)(sa, {}),
              ],
            }),
          });
        },
        qu = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  i = t.getFCP,
                  o = t.getLCP,
                  a = t.getTTFB;
                n(e), r(e), i(e), o(e), a(e);
              });
        };
      i
        .createRoot(document.getElementById("root"))
        .render((0, aa.jsx)(t.StrictMode, { children: (0, aa.jsx)(Qu, {}) })),
        qu();
    })();
})();
//# sourceMappingURL=main.14709e7d.js.map
