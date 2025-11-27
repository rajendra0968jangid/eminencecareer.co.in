var __views = {
  "0163dec87b37eb523b2be72c156c6947": function (
    exports,
    require,
    ReactDOM,
    React,
    PropTypes,
    _,
    classNames
  ) {
    !(function (e, t) {
      for (var o in t) e[o] = t[o];
    })(
      exports,
      (function (e) {
        var t = {};
        function o(n) {
          if (t[n]) return t[n].exports;
          var r = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
        }
        return (
          (o.m = e),
          (o.c = t),
          (o.d = function (e, t, n) {
            o.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (o.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (o.t = function (e, t) {
            if ((1 & t && (e = o(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (o.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                o.d(
                  n,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return n;
          }),
          (o.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return o.d(t, "a", t), t;
          }),
          (o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (o.p = ""),
          o((o.s = 1))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = r(o(2));
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (0, r(o(3)).default)(n.default);
          t.default = u;
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = (function () {
            function e(e, t) {
              for (var o = 0; o < t.length; o++) {
                var n = t[o];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, o, n) {
              return o && e(t.prototype, o), n && e(t, n), t;
            };
          })();
          function r(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }
          var i = (function (e) {
            function t() {
              return (
                r(this, t),
                u(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, React.Component),
              n(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.components.Constructor,
                      t = e.types.BlockContent;
                    return React.createElement(
                      e,
                      null,
                      React.createElement(t, {
                        bind: "header-block-content",
                        type: "header",
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          (i.propTypes = { components: PropTypes.object.isRequired }),
            (i.defaultContent = {
              "header-block-content": { version: "2.0.0" },
              logo: {
                text: {
                  value: "Quantum Company",
                  tagName: "h1",
                  fontSize: 32,
                  lineHeight: 1.4375,
                },
              },
              "horizontal-flow-1": {
                paddingTop: 15,
                paddingBottom: 15,
                background: { type: "color", color: "light-shade-color" },
                version: "2.0.0",
              },
              "hf-1-left": { size: 33.3333 },
              "hf-2-left": { size: 33.3333 },
              "hf-3-left": { size: 33.3333 },
              __constructor__: {
                nodes: {
                  0: { original: !0, children: ["0_0"] },
                  "0_0": {
                    original: !0,
                    type: "BlockContent",
                    children: ["horizontal-flow-1"],
                  },
                  "horizontal-flow-1": {
                    type: "HorizontalFlow",
                    children: ["hf-1-left", "hf-1-center", "hf-1-right"],
                  },
                  "hf-1-left": {
                    type: "HorizontalFlowSectionLeft",
                    children: ["logo"],
                  },
                  "hf-1-center": {
                    type: "HorizontalFlowSectionCenter",
                    children: [],
                  },
                  "hf-1-right": {
                    type: "HorizontalFlowSectionRight",
                    children: [],
                  },
                  logo: { type: "Logo" },
                },
              },
            }),
            (i.modifierScheme = {}),
            (i.blockConfiguration = { controls: { paddings: !1 } }),
            (t.default = i);
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = u(o(4)),
            r = u(o(6));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(n.default, r.default);
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = u(o(0)),
            r = u(o(5));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = n.default.hoistStatics,
            l = n.default.enhancers.mapProps;
          t.default = i(l(_.update("$block.options", _.assign(r.default))));
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = u(o(0)),
            r = u(o(7));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = n.default.hoistStatics,
            l = n.default.enhancers.mapProps;
          t.default = i(l(_.set("style", r.default)));
        },
        function (e, t, o) {},
      ])
    );
  },
  c99ec933287ebe2d1b261950add42b59: function (
    exports,
    require,
    ReactDOM,
    React,
    PropTypes,
    _,
    classNames
  ) {
    !(function (e, t) {
      for (var n in t) e[n] = t[n];
    })(
      exports,
      (function (e) {
        var t = {};
        function n(o) {
          if (t[o]) return t[o].exports;
          var r = (t[o] = { i: o, l: !1, exports: {} });
          return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, o) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: o });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
              (n.r(o),
              Object.defineProperty(o, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                n.d(
                  o,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return o;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 1))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = r(n(2));
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = (0, r(n(3)).default)(o.default);
          t.default = c;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (t, n, o) {
              return n && e(t.prototype, n), o && e(t, o), t;
            };
          })();
          function r(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }
          var u = (function (e) {
            function t() {
              return (
                r(this, t),
                c(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, React.Component),
              o(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.components.Constructor,
                      t = e.types.BlockContent;
                    return React.createElement(
                      e,
                      null,
                      React.createElement(t, {
                        bind: "footer-block-content",
                        type: "footer",
                      })
                    );
                  },
                },
              ]),
              t
            );
          })();
          (u.propTypes = { components: PropTypes.object.isRequired }),
            (u.defaultContent = {
              "footer-block-content": { version: "2.0.0" },
              row: { paddingTop: 15, paddingBottom: 15 },
              "da8cfce0-347d-483e-83b3-f0630c60e512": {
                text: {
                  value: "Quantum Company",
                  tagName: "h1",
                  fontSize: 32,
                  lineHeight: 1.4375,
                },
              },
              "da8cfce0-347d-483e-83b3-f0630c60e213": {
                background: { type: "color", color: "light-shade-color" },
                paddingTop: 15,
                paddingBottom: 15,
                version: "2.0.0",
              },
              "ecd17b36-6c53-4906-8cab-b20501b93c0e": { size: 33.3333 },
              "b0c75b47-874a-446f-9727-9a6efe3723bb": { size: 33.3333 },
              "d37e2ce8-f43d-4113-999c-07a2d6e00c1a": { size: 33.3333 },
              __constructor__: {
                nodes: {
                  0: { original: !0, children: ["0_0"] },
                  "0_0": {
                    original: !0,
                    type: "BlockContent",
                    children: ["row", "da8cfce0-347d-483e-83b3-f0630c60e213"],
                  },
                  row: {
                    type: "Row",
                    children: ["column1", "column2", "column3"],
                  },
                  column1: { type: "Column", children: [] },
                  column2: { type: "Column", children: [] },
                  column3: { type: "Column", children: [] },
                  "da8cfce0-347d-483e-83b3-f0630c60e213": {
                    type: "HorizontalFlow",
                    children: [
                      "ecd17b36-6c53-4906-8cab-b20501b93c0e",
                      "b0c75b47-874a-446f-9727-9a6efe3723bb",
                      "d37e2ce8-f43d-4113-999c-07a2d6e00c1a",
                    ],
                  },
                  "ecd17b36-6c53-4906-8cab-b20501b93c0e": {
                    type: "HorizontalFlowSectionLeft",
                    children: ["da8cfce0-347d-483e-83b3-f0630c60e512"],
                  },
                  "b0c75b47-874a-446f-9727-9a6efe3723bb": {
                    type: "HorizontalFlowSectionCenter",
                    children: [],
                  },
                  "d37e2ce8-f43d-4113-999c-07a2d6e00c1a": {
                    type: "HorizontalFlowSectionRight",
                    children: [],
                  },
                  "da8cfce0-347d-483e-83b3-f0630c60e512": { type: "Logo" },
                },
              },
            }),
            (u.modifierScheme = {}),
            (u.blockConfiguration = { controls: { paddings: !1 } }),
            (t.default = u);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = c(n(4)),
            r = c(n(6));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(o.default, r.default);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = c(n(0)),
            r = c(n(5));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = o.default.hoistStatics,
            a = o.default.enhancers.mapProps;
          t.default = u(a(_.update("$block.options", _.assign(r.default))));
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = c(n(0)),
            r = c(n(7));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = o.default.hoistStatics,
            a = o.default.enhancers.mapProps;
          t.default = u(a(_.set("style", r.default)));
        },
        function (e, t, n) {},
      ])
    );
  },
  ccda4357d19222ee7de9015521345a06: function (
    exports,
    require,
    ReactDOM,
    React,
    PropTypes,
    _,
    classNames
  ) {
    !(function (e, t) {
      for (var n in t) e[n] = t[n];
    })(
      exports,
      (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                n.d(
                  r,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 1))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = o(n(2));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (0, o(n(3)).default)(r.default);
          t.default = u;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          function o(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }
          var u = (function (e) {
            function t() {
              var e, n, r;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              for (var u = arguments.length, c = Array(u), a = 0; a < u; a++)
                c[a] = arguments[a];
              return (
                (n = r =
                  o(
                    this,
                    (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                      e,
                      [this].concat(c)
                    )
                  )),
                (r.getModifierValue = function (e) {
                  return _.get(["modifier", e], r.props.$block);
                }),
                o(r, n)
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, React.Component),
              r(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.components.Constructor,
                      t = e.types,
                      n = t.Section,
                      r = t.SectionHeader,
                      o = t.SectionContent,
                      u = t.Row,
                      c = t.Column,
                      a = t.Text;
                    return React.createElement(
                      e,
                      null,
                      React.createElement(
                        n,
                        null,
                        React.createElement(
                          r,
                          null,
                          React.createElement(
                            u,
                            { bind: "header_row" },
                            React.createElement(
                              c,
                              { bind: "header_col_1" },
                              React.createElement(a, {
                                bind: "title",
                                tagName: "h2",
                              })
                            )
                          )
                        ),
                        React.createElement(
                          o,
                          null,
                          React.createElement(
                            u,
                            { bind: "content_row" },
                            React.createElement(c, { bind: "content_col_1" })
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              t
            );
          })();
          (u.propTypes = {
            $block: PropTypes.object.isRequired,
            components: PropTypes.object.isRequired,
          }),
            (u.defaultContent = {
              header_row: {},
              content_row: {},
              header_col_1: { align: "center" },
              content_col_1: {},
              title: { content: "Custom block", type: "blockTitle" },
            }),
            (u.modifierScheme = {}),
            (t.default = u);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(4)),
            o = u(n(6));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(r.default, o.default);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(0)),
            o = u(n(5));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = c(a(_.update("$block.options", _.assign(o.default))));
        },
        function (e) {
          e.exports = {};
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(0)),
            o = u(n(7));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = c(a(_.set("style", o.default)));
        },
        function (e, t, n) {},
      ])
    );
  },
  "6a6569b2e71b1cec0b69e42aa6acda74": function (
    exports,
    require,
    ReactDOM,
    React,
    PropTypes,
    _,
    classNames
  ) {
    !(function (e, t) {
      for (var n in t) e[n] = t[n];
    })(
      exports,
      (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var o = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                n.d(
                  r,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 1))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = o(n(2));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (0, o(n(3)).default)(r.default);
          t.default = u;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var o = (function (e) {
            function t() {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof t
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  t &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(e, t)
                      : (e.__proto__ = t));
              })(t, React.Component),
              r(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.components.Constructor,
                      t = e.types.Section;
                    return React.createElement(
                      e,
                      null,
                      React.createElement(t, null)
                    );
                  },
                },
              ]),
              t
            );
          })();
          (o.propTypes = { components: PropTypes.object.isRequired }),
            (o.defaultContent = {
              __constructor__: {
                nodes: {
                  0: { original: !0, children: ["0_0"] },
                  "0_0": {
                    original: !0,
                    type: "Section",
                    children: ["2ea425ae-b859-4d3a-bdd6-392fc089251d"],
                  },
                  "2ea425ae-b859-4d3a-bdd6-392fc089251d": {
                    type: "SectionContent",
                    children: ["da8cfce0-347d-483e-83b3-f0630c60e213"],
                  },
                  "da8cfce0-347d-483e-83b3-f0630c60e213": {
                    type: "Row",
                    children: [
                      "cb2c3bbd-ce3b-4301-b153-7ce45705b154",
                      "74ba5ba9-5451-49a4-ba95-b367284bec40",
                    ],
                  },
                  "cb2c3bbd-ce3b-4301-b153-7ce45705b154": {
                    type: "Column",
                    children: [],
                  },
                  "74ba5ba9-5451-49a4-ba95-b367284bec40": {
                    type: "Column",
                    children: [],
                  },
                },
              },
            }),
            (o.modifierScheme = {}),
            (t.default = o);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(4)),
            o = u(n(6));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(r.default, o.default);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(0)),
            o = u(n(5));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = c(a(_.update("$block.options", _.assign(o.default))));
        },
        function (e) {
          e.exports = {};
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(0)),
            o = u(n(7));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var c = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = c(a(_.set("style", o.default)));
        },
        function (e, t, n) {},
      ])
    );
  },
};
blockJsonp(
  "5e9964554562210021499748",
  __views["0163dec87b37eb523b2be72c156c6947"],
  {
    "header-block-content": { version: "2.0.0" },
    logo: {
      text: {
        value: "Quantum Company",
        tagName: "h1",
        fontSize: 32,
        lineHeight: 1.4375,
      },
      version: "0.0.0",
    },
    "horizontal-flow-1": {
      paddingTop: 30,
      paddingBottom: 30,
      background: {
        type: "color",
        color: "dark-shade-color",
        image: {},
        ownColor: "rgb(47, 44, 123)",
      },
      version: "2.0.0",
    },
    "hf-1-left": { size: 24.121494941378206 },
    "hf-2-left": { size: 33.3333 },
    "hf-3-left": { size: 33.3333 },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["horizontal-flow-1"] },
        "horizontal-flow-1": {
          type: "HorizontalFlow",
          children: ["hf-1-left", "hf-1-center", "hf-1-right"],
        },
        "hf-1-left": {
          type: "HorizontalFlowSectionLeft",
          children: ["bc703244-b1c6-422c-87d1-a5c2e3500edf"],
        },
        "hf-1-center": {
          type: "HorizontalFlowSectionCenter",
          children: ["3a2eef50-9753-4e39-a805-e592ce9d8c21"],
        },
        "hf-1-right": {
          type: "HorizontalFlowSectionRight",
          children: ["69d42bc6-2e9e-49b7-b126-953aef82802c"],
        },
        "3a2eef50-9753-4e39-a805-e592ce9d8c21": { type: "Menu" },
        "bc703244-b1c6-422c-87d1-a5c2e3500edf": { type: "Logo" },
        "69d42bc6-2e9e-49b7-b126-953aef82802c": {
          type: "social-icons.SocialIcons",
        },
      },
    },
    "3a2eef50-9753-4e39-a805-e592ce9d8c21": {
      preset: "horizontal",
      links: [
        {
          id: "about-us",
          metadata: {
            displayName: "About Us",
            parentId: null,
            actionConfig: {
              action: "link",
              actions: {
                anchor: { anchor: "5ca49c2462f9080024e2d199" },
                link: {
                  pageId: "62c2b3d351cc63000e197a48",
                  categoryLink: null,
                },
              },
            },
          },
        },
        {
          id: "services",
          metadata: {
            displayName: "Services",
            parentId: null,
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5bb5ce39962176002454d448" } },
            },
          },
        },
        {
          id: "contacts",
          metadata: {
            displayName: "Universities & Courses",
            parentId: null,
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5da71785e38e5200283b3143" } },
            },
          },
        },
        {
          id: "0a19a3e5-44d7-4316-b418-4d485d1bfb2d",
          metadata: {
            displayName: "Contacts",
            actionConfig: {
              action: "anchor",
              actions: {
                link: {
                  pageId: "62c2945d4d2af2000e80d7d5",
                  categoryLink: null,
                },
                anchor: { anchor: "62c400323390fb000dedbb39" },
              },
            },
          },
        },
      ],
      fontSize: 14,
      fontWeight: 600,
      linkColor: {
        hover: "light-accent-color",
        color: "light-shade-color?setAlpha=0.8",
      },
    },
    "hf-1-center": { size: 52.16388211305103 },
    "hf-1-right": { size: 23.71458961223729 },
    "bc703244-b1c6-422c-87d1-a5c2e3500edf": {
      version: "2.0.0",
      text: {
        value:
          '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">EasyLearn</span>',
        tagName: "h1",
        fontSize: 32,
        lineHeight: 1.4375,
      },
      slogan: {
        enabled: false,
        content: "Solutions & Support",
        type: "subtitle",
      },
      type: "image",
      image: {
        resourceRef: "res/62be8ca3462df9000d36ed88/62c6e1825db02a000da58b78",
        width: 187.6,
        height: 30.482,
      },
    },
    "69d42bc6-2e9e-49b7-b126-953aef82802c": {
      shape: "rect",
      outer: true,
      size: 30,
      outerFill: "rgb(70, 107, 184)",
      links: [
        {
          id: "a01c6385-35a2-45f1-9ead-50e82b51a292",
          type: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: "db499830-6129-46f6-b7cc-5b1b9564a6ef",
          type: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: "a75c5258-b808-44b8-a368-983e51b8a7d9",
          type: "youtube",
          url: "https://youtube.com/",
        },
        {
          id: "68d403db-bd5b-45c3-ac04-97523fd72437",
          type: "twitter",
          url: "https://twitter.com/",
        },
      ],
      custom: true,
    },
  }
);
blockJsonp(
  "5ea7edbf9497650021a9b046",
  __views["c99ec933287ebe2d1b261950add42b59"],
  {
    "footer-block-content": { version: "2.0.0" },
    row: {
      paddingTop: 30,
      paddingBottom: 80,
      background: { type: "color", color: "dark-shade-color", image: {} },
      decorator: true,
    },
    "da8cfce0-347d-483e-83b3-f0630c60e512": {
      text: {
        value: "Quantum Company",
        tagName: "h1",
        fontSize: 32,
        lineHeight: 1.4375,
      },
    },
    "da8cfce0-347d-483e-83b3-f0630c60e213": {
      background: { type: "color", color: "dark-shade-color", image: {} },
      paddingTop: 20,
      paddingBottom: 20,
      version: "2.0.0",
    },
    "ecd17b36-6c53-4906-8cab-b20501b93c0e": { size: 30.62855862068965 },
    "b0c75b47-874a-446f-9727-9a6efe3723bb": { size: 36.038041379310336 },
    "d37e2ce8-f43d-4113-999c-07a2d6e00c1a": { size: 33.3333 },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: ["row", "da8cfce0-347d-483e-83b3-f0630c60e213"],
        },
        row: {
          type: "Row",
          children: [
            "column1",
            "column2",
            "b481c164-bb08-48c1-aa39-257915272ecf",
            "cb6ff75c-dddb-4de4-90e3-763e9f2997fc",
            "column3",
          ],
        },
        column1: {
          type: "Column",
          children: [
            "8bc9727a-f2db-4fcf-995d-627de4a33128",
            "b36a42b6-da99-4fe5-b8a7-8ef3a4228ff3",
          ],
        },
        column2: {
          type: "Column",
          children: [
            "a3dba400-b725-4f88-b576-5de1330cd027",
            "c179f426-6a85-46c8-b8e4-73c065637d53",
            "d9b3e0f7-a261-43db-9226-cf7695825d1c",
          ],
        },
        column3: {
          type: "Column",
          children: [
            "ac12d97a-2ae2-40cb-a17b-c578374d8095",
            "e728da03-b415-46a4-bcc5-9ad8c47b3aa0",
            "35b3b4b1-77b0-43df-930e-0c0c6a873242",
          ],
        },
        "da8cfce0-347d-483e-83b3-f0630c60e213": {
          type: "HorizontalFlow",
          children: [
            "ecd17b36-6c53-4906-8cab-b20501b93c0e",
            "b0c75b47-874a-446f-9727-9a6efe3723bb",
            "d37e2ce8-f43d-4113-999c-07a2d6e00c1a",
          ],
        },
        "ecd17b36-6c53-4906-8cab-b20501b93c0e": {
          type: "HorizontalFlowSectionLeft",
          children: ["9cdebeb9-7727-4ae8-8d13-b441d3bb53c8"],
        },
        "b0c75b47-874a-446f-9727-9a6efe3723bb": {
          type: "HorizontalFlowSectionCenter",
          children: [],
        },
        "d37e2ce8-f43d-4113-999c-07a2d6e00c1a": {
          type: "HorizontalFlowSectionRight",
          children: ["1cefd7a6-17bd-47e3-898f-6135fb9be908"],
        },
        "8bc9727a-f2db-4fcf-995d-627de4a33128": { type: "Logo" },
        "9cdebeb9-7727-4ae8-8d13-b441d3bb53c8": { type: "Text" },
        "1cefd7a6-17bd-47e3-898f-6135fb9be908": { type: "Text" },
        "d9b3e0f7-a261-43db-9226-cf7695825d1c": { type: "Menu" },
        "ac12d97a-2ae2-40cb-a17b-c578374d8095": { type: "Text" },
        "35b3b4b1-77b0-43df-930e-0c0c6a873242": {
          type: "contact-form.ContactForm",
        },
        "b481c164-bb08-48c1-aa39-257915272ecf": {
          type: "Column",
          children: [
            "b1e424d1-4d4f-4e5f-9862-b46c4139def9",
            "119a0153-8966-4835-a85c-3d59be872af3",
            "77bd9177-d300-46e9-9c8a-9173fbce6b05",
          ],
        },
        "77bd9177-d300-46e9-9c8a-9173fbce6b05": { type: "Menu" },
        "b1e424d1-4d4f-4e5f-9862-b46c4139def9": { type: "Text" },
        "a3dba400-b725-4f88-b576-5de1330cd027": { type: "Text" },
        "e728da03-b415-46a4-bcc5-9ad8c47b3aa0": { type: "Divider" },
        "119a0153-8966-4835-a85c-3d59be872af3": { type: "Divider" },
        "c179f426-6a85-46c8-b8e4-73c065637d53": { type: "Divider" },
        "b36a42b6-da99-4fe5-b8a7-8ef3a4228ff3": {
          type: "social-icons.SocialIcons",
        },
        "cb6ff75c-dddb-4de4-90e3-763e9f2997fc": {
          type: "Column",
          children: [
            "a8e10627-ed71-4767-aaba-d5e869c2d79a",
            "85e0ed21-5cda-4615-84fb-275da2c8a686",
            "b10a83d3-4639-4659-a2df-088380cc57ba",
          ],
        },
        "a8e10627-ed71-4767-aaba-d5e869c2d79a": { type: "Text" },
        "85e0ed21-5cda-4615-84fb-275da2c8a686": { type: "Divider" },
        "b10a83d3-4639-4659-a2df-088380cc57ba": { type: "Menu" },
      },
    },
    "8bc9727a-f2db-4fcf-995d-627de4a33128": {
      version: "2.0.0",
      text: {
        value:
          '<span class="text-ui-light-accent-color" style="color: var(--ui-light-accent-color);font-size: 24px;">EasyLearn</span>',
        tagName: "h1",
        fontSize: 32,
        lineHeight: 1.4375,
      },
      slogan: {
        enabled: true,
        content:
          '<br><span style="display: block;"><span style="color: rgb(204,204,204);">For years, EasyLearn has been helping students to get into their dream universities.</span></span>',
        type: "caption",
      },
      type: "image",
      image: {
        resourceRef: "res/62be8ca3462df9000d36ed88/62c6e1825db02a000da58b78",
        width: 190.4,
        height: 30.937,
      },
    },
    column1: {},
    column2: {},
    "1ebaecad-dc8c-4cb0-b07f-c67952582415": {
      align: "center",
      verticalAlign: "top",
    },
    "bc7e3e62-0f89-4c7f-8ec2-17182865dbfc": {},
    "4c654e35-32b8-4fb9-9d43-f5ad2243ea2b": {
      content:
        "For years, EasyLearn has been helping students to get into their dream universities and colleges.&nbsp;",
      type: "caption",
      tagName: "p",
    },
    "9cdebeb9-7727-4ae8-8d13-b441d3bb53c8": {
      content: "© Created by",
      type: "caption",
      tagName: "p",
    },
    "1cefd7a6-17bd-47e3-898f-6135fb9be908": {
      content: "All rights Reserved",
      type: "caption",
      tagName: "p",
    },
    "d9b3e0f7-a261-43db-9226-cf7695825d1c": {
      preset: "vertical",
      links: [
        {
          id: "about-us",
          metadata: {
            displayName: "About",
            actionConfig: {
              action: "link",
              actions: {
                anchor: { anchor: "5ca49c2462f9080024e2d199" },
                link: {
                  pageId: "62c2b3d351cc63000e197a48",
                  categoryLink: null,
                },
              },
            },
          },
        },
        {
          id: "services",
          metadata: {
            displayName: "Destinations",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5d4d507c99604d0023dd65a2" } },
            },
          },
        },
        {
          id: "contacts",
          metadata: {
            displayName: "Tests",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "62befa5c00f3ce000d242231" } },
            },
          },
        },
        {
          id: "a876194f-06bf-461b-ae79-7c8fda092d80",
          metadata: {
            displayName: "Contact Us",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "62c400323390fb000dedbb39" } },
            },
          },
        },
      ],
      fontSize: 15,
      fontWeight: 500,
      linkColor: { color: "rgb(204, 204, 204)", hover: "light-shade-color" },
    },
    "9a4c26d0-6b8f-4f9f-b00a-04fe96cf2e8b": {
      preset: "vertical",
      links: [
        { id: "about-us", metadata: { displayName: "Testimonials" } },
        { id: "services", metadata: { displayName: "Blog" } },
        { id: "contacts", metadata: { displayName: "Resources" } },
        {
          id: "a76b2d0e-b872-4763-b79c-47350f7c9fc6",
          metadata: {
            displayName: "Contact us",
            actionConfig: { action: "none", actions: {} },
          },
        },
      ],
    },
    "d4d0cdb3-1256-40f6-b99c-1aaa3f42f62d": {
      socials_label: { type: "heading", content: "Follow us:" },
      socials: { links: [] },
    },
    "2d7449f1-f632-44a5-8f49-0b6ed71be7cb": {
      content: '<span style="font-weight: bold;"> Follow Us:</span>',
      type: "text",
      tagName: "p",
    },
    "ac12d97a-2ae2-40cb-a17b-c578374d8095": {
      content: "Subscribe&nbsp;",
      type: "heading",
      tagName: "p",
    },
    "f3764946-c1b1-4ff3-a248-e6db858e4876": {
      textValue: "Learn more",
      type: "secondary",
    },
    "a9a0303e-1dcc-4460-a22a-20ced3e4da3f": {
      textValue: "Contact us",
      type: "primary",
    },
    "35b3b4b1-77b0-43df-930e-0c0c6a873242": {
      fields: [
        {
          type: "email",
          id: "contactForm_email",
          title: "",
          placeholder: "Email*",
          description: { value: "", active: false },
          required: true,
        },
      ],
      submitButton: { title: "Subscribe", style: { fontWeight: "bold" } },
      className: "w-form",
      buttonClassName: "button button--size-md button--primary form__button",
      _formId: "PxJHUi0XXCnnx1jZ6VkL",
      _token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiI1Y2I3NGUwMWMyNmM2ZjAwMjM5ZDQ3ZWMiLCJmb3JtSWQiOiJQeEpIVWkwWFhDbm54MWpaNlZrTCIsImlhdCI6MTY1ODk1NDM2NH0.PFLCxbOhD81M4oF-D3grt9xXVGUBHvuKFHgu2OoLJh0",
      customColors: { fill: "rgb(33, 33, 33)" },
    },
    "b481c164-bb08-48c1-aa39-257915272ecf": {},
    "77bd9177-d300-46e9-9c8a-9173fbce6b05": {
      preset: "vertical",
      links: [
        {
          id: "about-us",
          metadata: {
            displayName: "Services",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5bb5ce39962176002454d448" } },
            },
          },
        },
        {
          id: "services",
          metadata: {
            displayName: "Universities & Courses",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5da71785e38e5200283b3143" } },
            },
          },
        },
        {
          id: "contacts",
          metadata: {
            displayName: "Testimonials",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5d3033e02ad46900230d6465" } },
            },
          },
        },
        {
          id: "e7e3a65d-ad17-476d-a19c-1b1a4362543d",
          metadata: {
            displayName: "Help & Support",
            actionConfig: {
              action: "link",
              actions: {
                link: {
                  pageId: "62c2b3d351cc63000e197a48",
                  categoryLink: null,
                },
              },
            },
          },
        },
      ],
      fontSize: 15,
      linkColor: { color: "rgb(204, 204, 204)", hover: "light-shade-color" },
    },
    "38f94368-50b8-41fa-89cc-a7b3c6cdc42a": {
      shape: "softRect",
      outer: false,
      size: 30,
      fill: "light-accent-color",
      links: [
        {
          id: "c48cf901-0eb1-4e8d-a070-3fa3d3ecdd62",
          type: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: "2a931c39-9cbe-4b7b-830c-053d6d758f29",
          type: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: "490f0839-3f68-4063-8119-1c612d519753",
          type: "instagram",
          url: "https://instagram.com/",
        },
      ],
      custom: true,
    },
    column3: { align: "left", verticalAlign: "top" },
    "6726eea8-860d-4b5c-a8c8-881c44b44f93": {},
    "991417c5-c589-4f0b-bcc8-9ebcbc77f37e": {
      layout: "grid",
      preset: "default",
      gridOptions: { gap: "15", columnsCount: 3, size: "custom" },
      stackedOptions: { gap: "30", size: "custom" },
      masonryOptions: { gap: "30", columnsCount: "3", size: "custom" },
      sliderOptions: {
        gap: "30",
        columnsCount: "2",
        size: "custom",
        dotsPosition: "out",
      },
      thumbnailsOptions: { gap: "30", columnsCount: "6", size: "custom" },
      items: [
        {
          id: "ce1adc2e-eddd-4b6d-895c-f0039d741011",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
        {
          id: "ca8ea206-de46-4172-b31a-01964cc3e472",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
        {
          id: "a30b72cc-eb8f-422b-b1ee-d877b5b1c48c",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
        {
          id: "3283070f-cfdd-4f42-bed0-fd0c85a813c1",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
        {
          id: "11ecc5eb-aa83-4a5f-b735-557ac0125a47",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
        {
          id: "debb7399-6f49-4b65-8b54-11105ddc1171",
          media: {
            type: "image",
            image: {
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bec5567efc13000cfd1f4f",
            },
          },
        },
      ],
    },
    "ddec5700-984f-404f-a1f8-076b333c6853": {
      content: "Instagram",
      type: "heading",
    },
    "8df9f5cc-dc7b-4662-95d6-ec13d2ef03cd": {
      content: "to get the latest news:",
      type: "text",
    },
    "b1e424d1-4d4f-4e5f-9862-b46c4139def9": {
      content: "Help",
      type: "heading",
    },
    "a3dba400-b725-4f88-b576-5de1330cd027": {
      content: "Navigation",
      type: "heading",
    },
    "e728da03-b415-46a4-bcc5-9ad8c47b3aa0": {
      color: "brand-color",
      size: { height: "5", width: 20 },
    },
    "214ab516-1207-41e7-9575-aa6a4d975e69": {
      color: "brand-color",
      size: { height: "5", width: 20 },
    },
    "119a0153-8966-4835-a85c-3d59be872af3": {
      color: "brand-color",
      size: { height: "5", width: 20 },
    },
    "c179f426-6a85-46c8-b8e4-73c065637d53": {
      color: "brand-color",
      size: { height: "5", width: 20 },
    },
    "b36a42b6-da99-4fe5-b8a7-8ef3a4228ff3": {
      shape: "rect",
      outer: true,
      size: 30,
      outerFill: "brand-color",
      fill: "dark-shade-color",
      links: [
        {
          id: "7d38abea-9a23-4e13-aa67-afe586cb89f9",
          type: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: "805d044c-cacb-4c48-81dc-aea3083d7d3a",
          type: "instagram",
          url: "https://instagram.com/",
        },
        {
          id: "d1c02102-0e6d-448c-a903-b6a104bfd6cb",
          type: "twitter",
          url: "https://twitter.com/",
        },
        {
          id: "26271639-7b87-4ecc-8a9e-3df38ac61ee7",
          type: "youtube",
          url: "https://youtube.com/",
        },
      ],
      custom: true,
    },
    "cb6ff75c-dddb-4de4-90e3-763e9f2997fc": {},
    "a8e10627-ed71-4767-aaba-d5e869c2d79a": {
      content: "Services",
      type: "heading",
    },
    "85e0ed21-5cda-4615-84fb-275da2c8a686": {
      color: "brand-color",
      size: { height: "5", width: 20 },
    },
    "b10a83d3-4639-4659-a2df-088380cc57ba": {
      preset: "vertical",
      links: [
        {
          id: "about-us",
          metadata: {
            displayName: "Visa Help",
            actionConfig: {
              action: "link",
              actions: {
                anchor: { anchor: "5cab3711633a4c002558ea83" },
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
        },
        {
          id: "services",
          metadata: {
            displayName: "Scholarship Guidance",
            actionConfig: {
              action: "link",
              actions: {
                anchor: { anchor: "5c80f4c6d1b88e002429a5aa" },
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
        },
        {
          id: "contacts",
          metadata: {
            displayName: "Study Abroad",
            actionConfig: {
              action: "link",
              actions: {
                anchor: { anchor: "5bd0860552cfc20022b49655" },
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
        },
        {
          id: "e7e3a65d-ad17-476d-a19c-1b1a4362543d",
          metadata: {
            displayName: "Free Lessons",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5bb5ce39962176002454d448" } },
            },
          },
        },
      ],
      fontSize: 15,
      linkColor: { color: "rgb(204, 204, 204)", hover: "light-shade-color" },
    },
  }
);
blockJsonp(
  "62c426f54d2af2000e8f1b87",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_row: {},
    content_row: {},
    header_col_1: { align: "left", verticalAlign: "top" },
    content_col_1: {},
    title: { content: "Visa Help", type: "blockTitle" },
    background: { type: "color", color: "dark-accent-color" },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0", "f8fa8980-08af-4c96-b1f5-84941539f053"],
        },
        "0_0_0_0_0": {
          original: true,
          children: [
            "0_0_0_0_0_0",
            "ee58c9af-1d6a-486c-9c2d-cb77cde5810d",
            "a774c9ec-da53-4c9a-9d5d-a634c8b77028",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "f8fa8980-08af-4c96-b1f5-84941539f053": {
          type: "Column",
          children: ["98d105c7-e67c-4319-8505-763b24cb3aed"],
        },
        "98d105c7-e67c-4319-8505-763b24cb3aed": { type: "Text" },
        "a774c9ec-da53-4c9a-9d5d-a634c8b77028": { type: "Text" },
        "ee58c9af-1d6a-486c-9c2d-cb77cde5810d": { type: "Spacer" },
      },
    },
    "f8fa8980-08af-4c96-b1f5-84941539f053": {},
    "98d105c7-e67c-4319-8505-763b24cb3aed": {
      content:
        '<span style="color: rgba(255,255,255,0.85);">If you are going to study in a foreign country, you need a student visa. There are various types of them, depending on the country and the need for a work permit.</span>',
      type: "subtitle",
      tagName: "p",
    },
    "a774c9ec-da53-4c9a-9d5d-a634c8b77028": {
      content:
        'Home &gt; <span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><u>Visa Help</u></span>',
      type: "text",
    },
    "ee58c9af-1d6a-486c-9c2d-cb77cde5810d": {
      color: null,
      desktopHeight: 10,
      mobileHeight: 0,
    },
  }
);
blockJsonp(
  "62c42dd464ab87000d5311a4",
  __views["6a6569b2e71b1cec0b69e42aa6acda74"],
  {
    "f4eba759-1c4d-48f3-82b4-3874c7df361b": {
      align: "left",
      verticalAlign: "middle",
      size: 9,
    },
    "cb2c3bbd-ce3b-4301-b153-7ce45705b154": { size: 3 },
    "7e7d415e-26da-4db2-b076-96bb7d5e1623": {
      align: "left",
      verticalAlign: "middle",
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: [
            "dc5df0cb-d71d-4177-a148-def4bb057679",
            "2ea425ae-b859-4d3a-bdd6-392fc089251d",
            "801ac3d5-c7f7-4f77-84be-6d019bf59646",
          ],
        },
        "2ea425ae-b859-4d3a-bdd6-392fc089251d": {
          type: "SectionContent",
          children: ["da8cfce0-347d-483e-83b3-f0630c60e213"],
        },
        "da8cfce0-347d-483e-83b3-f0630c60e213": {
          type: "Row",
          children: [
            "f4eba759-1c4d-48f3-82b4-3874c7df361b",
            "cb2c3bbd-ce3b-4301-b153-7ce45705b154",
          ],
        },
        "cb2c3bbd-ce3b-4301-b153-7ce45705b154": {
          type: "Column",
          children: ["59bb42b7-16c1-4438-b5f9-3a74e829d91b"],
        },
        "0ddc505a-544b-46e5-b3d5-01c20309e20f": { type: "Media" },
        "4200ee63-f449-4ba1-9fe6-abc9799e20cb": { type: "Text" },
        "59bb42b7-16c1-4438-b5f9-3a74e829d91b": { type: "ListWithMedia" },
        "801ac3d5-c7f7-4f77-84be-6d019bf59646": {
          type: "SectionFooter",
          children: ["5f5bb4d2-d47c-4b59-9079-a653a835497c"],
        },
        "5f5bb4d2-d47c-4b59-9079-a653a835497c": {
          type: "Row",
          children: [
            "7e7d415e-26da-4db2-b076-96bb7d5e1623",
            "47fb1db4-ba12-44ff-a9e0-d7d8ca24dcd4",
          ],
        },
        "f4eba759-1c4d-48f3-82b4-3874c7df361b": {
          type: "Column",
          children: [
            "4200ee63-f449-4ba1-9fe6-abc9799e20cb",
            "5ebb68c8-9ef1-451a-b689-30222cac1517",
          ],
        },
        "7e7d415e-26da-4db2-b076-96bb7d5e1623": {
          type: "Column",
          children: ["ad03c351-38fc-4b1c-a233-2955a95a9e72"],
        },
        "5ebb68c8-9ef1-451a-b689-30222cac1517": { type: "Text" },
        "dc5df0cb-d71d-4177-a148-def4bb057679": {
          type: "SectionHeader",
          children: ["7c4c7666-f547-4a45-b8c4-81dae3657adf"],
        },
        "7c4c7666-f547-4a45-b8c4-81dae3657adf": {
          type: "Row",
          children: ["c4ad8e89-e55c-4867-8964-13085129ce55"],
        },
        "c4ad8e89-e55c-4867-8964-13085129ce55": {
          type: "Column",
          children: ["0ddc505a-544b-46e5-b3d5-01c20309e20f"],
        },
        "ad03c351-38fc-4b1c-a233-2955a95a9e72": { type: "Text" },
        "47fb1db4-ba12-44ff-a9e0-d7d8ca24dcd4": {
          type: "Column",
          children: ["bc1ee5fa-f71e-4665-8896-cc557ea2d0c4"],
        },
        "bc1ee5fa-f71e-4665-8896-cc557ea2d0c4": { type: "Text" },
      },
    },
    "0ddc505a-544b-46e5-b3d5-01c20309e20f": {
      type: "image",
      video: {},
      image: {
        alt: "Illustration",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c68687b8a35a000dcc57ac",
        position: { x: 50, y: 100 },
      },
      style: { preset: "main" },
      customClassNames: [],
    },
    "4200ee63-f449-4ba1-9fe6-abc9799e20cb": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Visa Help Service </span><span class="text-ui-brand-color" style="color: var(--ui-brand-color);font-size: 23px;">from $200</span>',
      type: "headingLg",
      tagName: "h2",
    },
    "556c68a2-f290-42ba-8073-e313773d9e4c": {
      content:
        "Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding.",
      type: "text",
      tagName: "p",
    },
    "4bf961bc-026a-43b7-a8a5-c141402f4aa5": {
      textValue: "Learn more",
      type: "secondary",
    },
    "74ba5ba9-5451-49a4-ba95-b367284bec40": {
      align: "left",
      verticalAlign: "middle",
    },
    "59bb42b7-16c1-4438-b5f9-3a74e829d91b": {
      private: {
        media: { type: "image-mask" },
        itemTextTop: true,
        itemTextBottom: true,
        listDecorator: false,
        price: false,
        priceDecorator: false,
      },
      collection: {
        background: {
          id: "monochrome",
          colors: { background: { type: "color", disabled: true } },
        },
        items: [
          {
            id: "bfdb2d1d-c01a-4d2b-aef6-c25ccccd1671",
            itemImage: {
              media: {
                type: "image",
                video: {},
                image: {
                  alt: "Illustration",
                  resourceRef:
                    "res/62be8ca3462df9000d36ed88/62c6736aef145e000ec9b2ea",
                  scale: 1.57,
                  position: { x: 52.915, y: 14.553 },
                },
                style: { preset: "featured" },
                customClassNames: [],
              },
              private: { preset: "none", size: "sm" },
            },
            itemIcon: {
              size: "md",
              svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z' /><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z' /><circle cx='112.909' cy='417.49' r='10' /></svg>",
              background: { type: "color", color: "light-accent-color" },
            },
            itemNumber: {
              size: "md",
              body: { content: "92%" },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: { content: "Emily Smith", type: "heading" },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content: "Instructor",
              type: "small",
              tagName: "p",
              lineHeight: 1.6,
            },
            background: { type: "none" },
          },
        ],
      },
    },
    "5ebb68c8-9ef1-451a-b689-30222cac1517": {
      content: "Get your student visa with our hassle-free service.",
      type: "subtitle",
      tagName: "p",
    },
    "054747e7-ad46-4346-9e67-7b5c09adc761": {
      color: null,
      desktopHeight: 10,
      mobileHeight: 0,
    },
    "ad03c351-38fc-4b1c-a233-2955a95a9e72": {
      content:
        '<span style="color: rgb(135,135,135);">If you want to study abroad, be it in the US, Australia, or Singapore, you need a student visa. The rules for issuing such a visa may be different, depending on the country. Our experts know everything about the rules in most countries and can advise you.<br><br>First, you need to collect all the necessary documents. They include a letter that confirms admission to the university, your passport, and so on. Additional documents may also be required, such as a bank statement. You must submit these documents to the appropriate authority.</span>',
      type: "text",
    },
    "47fb1db4-ba12-44ff-a9e0-d7d8ca24dcd4": {
      align: "left",
      verticalAlign: "middle",
    },
    "bc1ee5fa-f71e-4665-8896-cc557ea2d0c4": {
      content:
        '<span style="display: block;"><span style="color: rgb(135,135,135);">After reviewing the documents, the consul usually schedules an interview. This applies primarily to developed and popular countries such as the United States. The purpose of the interview is to find out if you really plan to study at the chosen university.</span></span><br><span style="display: block;"><span style="color: rgb(135,135,135);">The interview usually takes up to half an hour. You need to explain why you\'ve chosen a particular country, how you will support yourself during your studies, and what you plan to do after graduation. Our consultants will help you prepare for this interview in the best possible way.</span></span>',
      type: "text",
    },
  }
);
blockJsonp(
  "62c42f7c34f6b5000dc42c41",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_col_1: { align: "left", verticalAlign: "top", size: 8 },
    "930b3a5f-4f2a-4502-82c5-64c1cc563209": {
      size: 4,
      align: "left",
      verticalAlign: "middle",
    },
    header_row: {},
    content_row: {},
    content_col_1: {},
    title: {
      content:
        '<span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">Useful Links</span>',
      type: "heroTitle",
      tagName: "h2",
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0", "0_0_1"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0", "930b3a5f-4f2a-4502-82c5-64c1cc563209"],
        },
        "0_0_0_0_0": { original: true, children: ["0_0_0_0_0_0"] },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: ["0_0_1_0"] },
        "0_0_1_0": {
          original: true,
          children: [
            "0_0_1_0_0",
            "718836e1-cfd2-4893-a8c6-5afb6cf28d32",
            "0fae1827-f499-4400-a266-64c5cfb2d942",
          ],
        },
        "0_0_1_0_0": {
          original: true,
          children: [
            "1a016fca-0697-452d-98df-a0b4e70eff16",
            "aff7de62-3ff8-41a8-a5e9-810906005c56",
            "2a28cec0-5934-4901-8916-96ac34ffc547",
            "13c497b1-525d-4660-a77e-a4f2733423d7",
          ],
        },
        "930b3a5f-4f2a-4502-82c5-64c1cc563209": {
          type: "Column",
          children: ["391978a7-fa9a-4684-9abc-b612cb3d9c16"],
        },
        "391978a7-fa9a-4684-9abc-b612cb3d9c16": { type: "Text" },
        "1a016fca-0697-452d-98df-a0b4e70eff16": { type: "Text" },
        "13c497b1-525d-4660-a77e-a4f2733423d7": { type: "Text" },
        "2a28cec0-5934-4901-8916-96ac34ffc547": { type: "Text" },
        "aff7de62-3ff8-41a8-a5e9-810906005c56": { type: "Text" },
        "718836e1-cfd2-4893-a8c6-5afb6cf28d32": {
          type: "Column",
          children: [
            "29c81e51-1e87-4139-b148-f49022916e3b",
            "fc0912ae-de99-4896-ba5d-61ac6e7501f8",
            "26222812-e1d6-4d30-8157-434be184a0bd",
            "cbb7568f-17e5-4d4e-a4d0-05e093689040",
          ],
          base: "0_0_1_0_0",
        },
        "29c81e51-1e87-4139-b148-f49022916e3b": { type: "Text" },
        "fc0912ae-de99-4896-ba5d-61ac6e7501f8": { type: "Text" },
        "26222812-e1d6-4d30-8157-434be184a0bd": { type: "Text" },
        "cbb7568f-17e5-4d4e-a4d0-05e093689040": { type: "Text" },
        "0fae1827-f499-4400-a266-64c5cfb2d942": {
          type: "Column",
          children: [
            "49079f30-ba17-4ef9-bd93-643f08e2d952",
            "fa4b8943-e3fe-4b8b-aa1e-899a511ea80c",
            "6035e26c-c353-4eca-a504-fa420a7286b7",
          ],
        },
        "6035e26c-c353-4eca-a504-fa420a7286b7": { type: "IconList" },
        "49079f30-ba17-4ef9-bd93-643f08e2d952": { type: "Text" },
        "fa4b8943-e3fe-4b8b-aa1e-899a511ea80c": { type: "Divider" },
      },
    },
    "391978a7-fa9a-4684-9abc-b612cb3d9c16": {
      content:
        '<span style="color: rgb(135,135,135);">The list of required documents may vary depending on the type of study: whether it\'s a community college, undergraduate, graduate, or short-term program.</span>',
      type: "text",
    },
    "1a016fca-0697-452d-98df-a0b4e70eff16": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Basic Student Visa Rules</u></a>',
      type: "heading",
      tagName: "p",
    },
    "13c497b1-525d-4660-a77e-a4f2733423d7": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Reasons for Rejection</u></a>',
      type: "heading",
      tagName: "p",
    },
    "2a28cec0-5934-4901-8916-96ac34ffc547": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Consular Affairs Bureaus</u></a>',
      type: "heading",
      tagName: "p",
    },
    "aff7de62-3ff8-41a8-a5e9-810906005c56": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Application Examples</u></a>',
      type: "heading",
      tagName: "p",
    },
    "718836e1-cfd2-4893-a8c6-5afb6cf28d32": {},
    "29c81e51-1e87-4139-b148-f49022916e3b": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Work Permits for Students</u></a>',
      type: "heading",
      tagName: "p",
    },
    "fc0912ae-de99-4896-ba5d-61ac6e7501f8": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Visas for Researchers</u></a>',
      type: "heading",
      tagName: "p",
    },
    "26222812-e1d6-4d30-8157-434be184a0bd": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Available Scholarships</u></a>',
      type: "heading",
      tagName: "p",
    },
    "cbb7568f-17e5-4d4e-a4d0-05e093689040": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><u>Success Stories</u></a>',
      type: "heading",
      tagName: "p",
    },
    "0fae1827-f499-4400-a266-64c5cfb2d942": {},
    "6035e26c-c353-4eca-a504-fa420a7286b7": {
      collection: {
        items: [
          {
            id: "697f0f58-f26f-4f04-9d1b-fdfe55c15e46",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: { type: "text", content: "<u>Passport valid for travel</u>" },
            background: { image: {}, type: "none" },
          },
          {
            id: "2e3188ff-92b2-40d8-a53f-96279bb4f8c1",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: { type: "text", content: "<u>Visa application</u>" },
            background: { image: {}, type: "none" },
          },
          {
            id: "3a2434d9-0f9c-424a-88f1-f0b7c18570e7",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: {
              type: "text",
              content:
                '<a  href="slug-id=62c294594d2af2000e80d78e" target="_self" data-action="link" data-slug-id="62c294594d2af2000e80d78e" class="ui-link"><u>P</u></a><u>hoto of you</u>',
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
      private: { preset: "preset1" },
    },
    "49079f30-ba17-4ef9-bd93-643f08e2d952": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);"><span style="font-weight: bold;">What to Prepare</span></span>',
      type: "subheading",
      tagName: "p",
    },
    "fa4b8943-e3fe-4b8b-aa1e-899a511ea80c": {
      color: "dark-accent-color",
      size: { height: "5", width: 15 },
    },
    "6e543434-67c9-4367-8fb3-78d69d99a632": {
      collection: {
        items: [
          {
            id: "697f0f58-f26f-4f04-9d1b-fdfe55c15e46",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: { type: "text", content: "<u>Passport valid for travel</u>" },
            background: { image: {}, type: "none" },
          },
          {
            id: "2e3188ff-92b2-40d8-a53f-96279bb4f8c1",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: { type: "text", content: "<u>Visa application</u>" },
            background: { image: {}, type: "none" },
          },
          {
            id: "3a2434d9-0f9c-424a-88f1-f0b7c18570e7",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g display="none"><path display="inline" d="M49.998,14.018c-19.873,0-35.98,16.109-35.98,35.982s16.107,35.982,35.98,35.982S85.982,69.873,85.982,50   S69.871,14.018,49.998,14.018z M73.987,50c0,4.535-1.288,8.766-3.487,12.391L37.608,29.498c3.621-2.197,7.852-3.484,12.39-3.484   C63.226,26.014,73.987,36.771,73.987,50z M26.013,50c0-4.344,1.175-8.412,3.205-11.934l32.715,32.715   c-3.518,2.027-7.588,3.205-11.935,3.205C36.771,73.986,26.013,63.229,26.013,50z"></path></g><g display="none"><polygon display="inline" points="64.233,14.998 60.503,14.998 56.765,14.998 56.765,52.798 60.503,53.73 60.503,85.937    67.967,85.937 67.967,14.998  "></polygon><polygon display="inline" points="44.385,34.027 41.642,34.027 41.642,14.063 38.336,14.063 38.336,34.027 35.152,34.027    35.152,14.063 32.033,14.063 32.033,32.033 32.033,36 32.033,42.065 36.234,44.479 36.234,85.937 43.703,85.937 43.703,44.479    47.897,42.065 47.897,36 47.897,32.033 47.897,14.063 44.385,14.063  "></polygon></g><g><polygon points="55.994,14.018 20.015,14.018 20.015,85.982 79.985,85.982 79.985,38.049 55.994,38.049  "></polygon><polygon points="61.996,14.018 61.996,32.055 79.985,32.055  "></polygon></g><g display="none"><polygon display="inline" points="73.988,73.988 26.012,73.988 26.012,26.014 48,26.014 59.995,14.018 14.018,14.018    14.018,85.982 85.982,85.982 85.982,40.008 73.988,52  "></polygon><rect x="37.246" y="27.63" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 131.8579 23.0947)" display="inline" width="47.799" height="22.451"></rect><polygon display="inline" points="32.009,52.121 32.051,67.947 47.882,67.992 47.951,67.93 32.076,52.053  "></polygon></g></svg>',
              id: "5657",
              platform: null,
              preview: "https://static.thenounproject.com/png/5657-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: {
              type: "text",
              content:
                '<a  href="slug-id=62c294594d2af2000e80d78e" target="_self" data-action="link" data-slug-id="62c294594d2af2000e80d78e" class="ui-link"><u>P</u></a><u>hoto of you</u>',
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
      private: { preset: "preset1" },
    },
  }
);
blockJsonp(
  "62c6e2aa680a1d000dac70a2",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_row: {},
    content_row: { gap: 25 },
    header_col_1: { align: "center" },
    content_col_1: {
      background: {
        color: "rgb(33, 33, 33)",
        image: {
          overlay: { type: "color", color: "light-shade-color", opacity: 0.56 },
          resourceRef: "res/5c80f3d4f1b2aa00238ad22e/5c842deda0b559002512c8f0",
        },
        type: "color",
        colorType: "color",
        ownColor: "rgb(33, 33, 33)",
      },
      align: "center",
      verticalAlign: "middle",
      paddingLeft: 60,
      paddingRight: 60,
      paddingTop: 60,
      paddingBottom: 60,
    },
    title: { content: "Custom block", type: "blockTitle" },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: ["0_0_1", "74bae9aa-f5f7-4209-9338-2dd3091c91e4"],
        },
        "0_0_0": { original: true, children: [] },
        "0_0_0_0": { original: true, children: [] },
        "0_0_0_0_0": { original: true, children: [] },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: ["0_0_1_0"] },
        "0_0_1_0": {
          original: true,
          children: ["52ff356c-5961-4215-95bb-90802577ebbb", "0_0_1_0_0"],
        },
        "0_0_1_0_0": {
          original: true,
          children: [
            "e03cc5fd-32da-4dda-a62f-9b03bf442b39",
            "1914fa44-78f4-4726-98de-212060f4511f",
            "efa6cfd6-0793-41f6-9ee4-61a29b0458be",
          ],
        },
        "efa6cfd6-0793-41f6-9ee4-61a29b0458be": {
          type: "contact-form.ContactForm",
        },
        "e03cc5fd-32da-4dda-a62f-9b03bf442b39": { type: "Text" },
        "52ff356c-5961-4215-95bb-90802577ebbb": {
          type: "Column",
          children: [
            "0535b32f-0e16-4714-bcf2-6cc1d86698b9",
            "19b073af-48cd-4f75-b878-4b3a5134822c",
            "5bb35a6c-5406-400e-9f9a-1baf47ce523f",
            "2aba8e5b-9569-449d-9b6c-b28bf88e240c",
            "e79d5190-a99c-48da-98cb-3a68549ae314",
            "30592da3-11b5-4032-b49d-f0d6431f0916",
          ],
        },
        "1914fa44-78f4-4726-98de-212060f4511f": { type: "Text" },
        "0535b32f-0e16-4714-bcf2-6cc1d86698b9": { type: "Text" },
        "19b073af-48cd-4f75-b878-4b3a5134822c": { type: "Text" },
        "2aba8e5b-9569-449d-9b6c-b28bf88e240c": { type: "ContactsList" },
        "5bb35a6c-5406-400e-9f9a-1baf47ce523f": { type: "IconList" },
        "e79d5190-a99c-48da-98cb-3a68549ae314": { type: "ContactsList" },
        "30592da3-11b5-4032-b49d-f0d6431f0916": { type: "ListWithMedia" },
        "74bae9aa-f5f7-4209-9338-2dd3091c91e4": {
          type: "SectionFooter",
          children: ["f5d7c48f-391e-4fed-b4b2-7ed3415319a0"],
        },
        "f5d7c48f-391e-4fed-b4b2-7ed3415319a0": {
          type: "Row",
          children: ["7c6d4e57-0ff7-4217-946b-8ca1f9cabb6f"],
        },
        "7c6d4e57-0ff7-4217-946b-8ca1f9cabb6f": {
          type: "Column",
          children: ["7798a143-b895-4e3d-a066-09e39dcb4120"],
        },
        "7798a143-b895-4e3d-a066-09e39dcb4120": { type: "Divider" },
      },
    },
    "efa6cfd6-0793-41f6-9ee4-61a29b0458be": {
      fields: [
        {
          type: "text",
          id: "contactForm_name",
          title: "",
          placeholder: "Enter your full name*",
          required: true,
          description: { value: "", active: true },
        },
        {
          type: "phone",
          id: "contactForm_phoneNumber",
          title: "",
          placeholder: "Enter your phone number*",
          required: true,
        },
        {
          type: "email",
          id: "contactForm_email",
          title: "",
          placeholder: "Enter your e-mail*",
          required: true,
        },
        {
          id: "ef6a6260-fbb0-4cca-adf4-81022845b35d",
          type: "textArea",
          placeholder: "Type your message",
        },
      ],
      submitButton: { title: "Send", style: { fontWeight: "bold" } },
      className: "form",
      buttonClassName: "button button--size-md button--primary form__button",
      _formId: "gIRGjcgK1tUL2RkxgV41",
      _token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiI1Y2I3NGUwMWMyNmM2ZjAwMjM5ZDQ3ZWMiLCJmb3JtSWQiOiJnSVJHamNnSzF0VUwyUmt4Z1Y0MSIsImlhdCI6MTcyODAyNjI0NX0.7nDJt1DbOdcfSqow-eSwSrfN4GQT5mo4MDi0SEVG5_M",
      customColors: { fill: "#292929" },
    },
    "e03cc5fd-32da-4dda-a62f-9b03bf442b39": {
      content: "Have Any Questions?",
      type: "headingLg",
      tagName: "p",
    },
    background: {
      type: "color",
      colorType: "color",
      image: {
        overlay: {
          type: "color",
          color: "dark-accent-color?setAlpha=0.91",
          touched: true,
          ownColor: "dark-accent-color?setAlpha=0.91",
        },
        parallax: "fixed",
        resourceRef: "res/5c69b2e993b942002678de59/5c7041e17bcda60025b44136",
      },
      color: "dark-shade-color",
    },
    "52ff356c-5961-4215-95bb-90802577ebbb": {
      align: "left",
      verticalAlign: "middle",
    },
    "1914fa44-78f4-4726-98de-212060f4511f": {
      content:
        '<span style="color: rgba(255,255,255,0.85);">Fill out the form below!</span>',
      type: "subheading",
      tagName: "p",
    },
    "0535b32f-0e16-4714-bcf2-6cc1d86698b9": {
      content: "Study with EasyLearn",
      type: "headingLg",
      tagName: "h2",
    },
    "19b073af-48cd-4f75-b878-4b3a5134822c": {
      content: "Order comprehensive counselling services right now.",
      type: "subtitle",
      tagName: "p",
    },
    "2aba8e5b-9569-449d-9b6c-b28bf88e240c": {
      private: { horizontal: true },
      collection: {
        items: [
          {
            id: "d0708d94-4cbb-46f3-9833-63e9566dde62",
            body_label: {
              type: "text",
              content:
                '<span style="color: rgb(220,220,220);">If you have always dreamed of getting an education or an internship abroad, don\'t shelve that dream! EasyLearn is here to help you on every stage.</span>',
              tagName: "p",
            },
            body: {
              type: "text",
              content:
                '<span style="color: rgb(220,220,220);">We offer a variety of services that help to make the admission process as easy and comfortable as possible. Don\'t mss your opportunity to study abroad!</span>',
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
    },
    "5bb35a6c-5406-400e-9f9a-1baf47ce523f": {
      collection: {
        items: [
          {
            id: "d6b1c81b-fbaa-4b53-8bd3-2002be5c0cc2",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              fill: "brand-color",
            },
            text: { type: "text", content: "Visas" },
            background: { type: "none" },
          },
          {
            id: "9626f17b-83a4-45b8-b50f-d16284feca45",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              fill: "brand-color",
            },
            text: { type: "text", content: "Accommodation" },
            background: { type: "none" },
          },
          {
            id: "00c600df-4ae0-4969-b523-34d3e71c2728",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              fill: "brand-color",
            },
            text: { type: "text", content: "Scholarships" },
            background: { type: "none" },
          },
          {
            id: "0f139522-6abb-4d5c-aafb-826fa3628a2a",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              fill: "brand-color",
            },
            text: { type: "text", content: "Exams" },
            background: { type: "none" },
          },
        ],
      },
      private: { preset: "preset2" },
    },
    "e79d5190-a99c-48da-98cb-3a68549ae314": {
      private: { horizontal: true },
      collection: {
        items: [
          {
            id: "d0708d94-4cbb-46f3-9833-63e9566dde62",
            body_label: {
              type: "heading",
              content:
                '<span class="text-ui-light-shade-color" style="color: var(--ui-light-shade-color);">Courses Information</span>',
              tagName: "p",
            },
            body: {
              type: "text",
              content:
                '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>U</u></span></span></a><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>niversities</u></span></span><span style="color: rgb(220,220,220);">ㅤ</span><a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>I</u></span></span></a><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>nternships</u></span></span>',
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
    },
    "30592da3-11b5-4032-b49d-f0d6431f0916": {
      private: {
        media: { type: "icon" },
        itemTextTop: true,
        itemTextBottom: false,
        listDecorator: false,
        price: false,
        priceDecorator: false,
      },
      collection: {
        background: {
          id: "monochrome",
          colors: { background: { type: "color", disabled: true } },
        },
        items: [
          {
            id: "64cea989-e583-46c5-a421-ba98d65d2e4f",
            itemImage: {
              media: {
                type: "image",
                image: { alt: "Illustration" },
                style: { preset: "featured" },
              },
              private: { preset: "none", size: "sm" },
            },
            itemIcon: {
              size: "md",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M73.733,92.002c-0.001,0-0.002,0-0.003,0C57.5,92.001,39.091,75.379,31.93,68.233C24.096,60.416,6.099,40.416,8.162,23.57  c0.776-6.333,4.295-11.421,10.46-15.123c0.496-0.298,1.063-0.449,1.685-0.449c4.849,0,14.412,11.319,18.283,16.8  c5.533,7.835,4.749,10.046,4.454,10.878c-0.938,2.644-2.683,4.186-4.222,5.545c-1.347,1.19-2.51,2.217-3.103,3.888  c-0.082,0.406,0.456,2.598,3.97,6.917c5.522,6.787,12.798,12.252,15.141,12.252c1.729-0.592,2.758-1.755,3.947-3.102  c1.36-1.539,2.901-3.283,5.546-4.222c0.372-0.132,0.784-0.199,1.224-0.199c5.575,0,21.702,13.226,25.487,19.907  c0.401,0.709,1.623,2.867,0.517,4.712C87.324,88.427,81.328,92.002,73.733,92.002z M20.446,12.02  c-4.976,3.057-7.696,6.997-8.313,12.036c-1.283,10.473,7.174,25.93,22.622,41.345c6.81,6.795,24.238,22.6,38.977,22.601  c0,0,0.001,0,0.002,0c6.097,0,10.761-2.767,14.249-8.456c-0.66-3.953-18.215-18.726-22.408-18.79  c-1.618,0.602-2.631,1.747-3.799,3.069c-1.361,1.54-2.903,3.285-5.549,4.224c-0.428,0.152-0.897,0.229-1.396,0.229  c-5.299,0-15.411-9.53-20.045-16.092c-2.608-3.692-3.536-6.444-2.836-8.415c0.938-2.646,2.684-4.188,4.223-5.548  c1.324-1.169,2.47-2.183,3.071-3.804c0.022-1.441-3.24-7.22-9.33-14.125C24.913,14.623,21.556,12.27,20.446,12.02z"></path></svg>',
              background: {
                type: "color",
                color: "rgb(33, 33, 33)",
                ownColor: "rgb(33, 33, 33)",
              },
              id: "59541",
              platform: null,
              preview: "https://static.thenounproject.com/png/59541-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            itemNumber: {
              size: "md",
              body: { content: "92%" },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: {
              content:
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; support ㅤ</span><a  href="tel:9955590499" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 00</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main numberㅤ</span><a  href="tel:9955590499" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 01</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities infoㅤ</span><a  href="tel:+12345678902" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 02</span></span></a></span>',
              type: "text",
              tagName: "p",
            },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; Support ㅤ<span style="font-weight: bold;">+1 (234) 567 89 00</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main numberㅤ<span style="font-weight: bold;">+1 (234) 567 89 01</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities Infoㅤ<span style="font-weight: bold;">+1 (234) 567 89 02</span></span></span>',
              type: "text",
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "99e4be98-bbd4-41aa-9973-bf63c923097f",
            itemImage: {
              media: {
                type: "image",
                image: { alt: "Illustration" },
                style: { preset: "featured" },
              },
              private: { preset: "none", size: "sm" },
            },
            itemIcon: {
              size: "md",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" x="0px" y="0px" viewBox="-2 -17 100 100" enable-background="new -2 -17 100 100" xml:space="preserve"><path fill="#000000" d="M88.869,0H7.131C3.199,0,0,3.199,0,7.131v51.738C0,62.801,3.199,66,7.131,66h81.738  C92.801,66,96,62.801,96,58.869V7.131C96,3.199,92.801,0,88.869,0z M64.112,30.583L91.111,4.954C91.659,5.518,92,6.284,92,7.131  v51.738c0,0.811-0.317,1.543-0.825,2.1L64.112,30.583z M88.869,4c0.761,0,1.449,0.283,1.992,0.736L49.678,36.422  c-0.989,0.761-2.367,0.761-3.355,0L5.139,4.736C5.682,4.283,6.37,4,7.131,4H88.869z M4.825,60.97C4.318,60.413,4,59.68,4,58.869  V7.131c0-0.847,0.341-1.613,0.889-2.177l26.999,25.629L4.825,60.97z M7.131,62c-0.733,0-1.398-0.264-1.933-0.687l31.523-26.151  l9.386,8.893c1.062,1.006,2.724,1.006,3.785,0l9.387-8.893l31.522,26.151C90.268,61.736,89.602,62,88.869,62H7.131z"></path></svg>',
              background: {
                type: "color",
                color: "rgb(33, 33, 33)",
                ownColor: "rgb(33, 33, 33)",
              },
              id: "63098",
              platform: null,
              preview: "https://static.thenounproject.com/png/63098-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            itemNumber: {
              size: "md",
              body: { content: "92%" },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: {
              content:
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; support ㅤ</span><a  href="mailto:easylearn_help@email.com" data-action="email" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">easylearn_help@email.com</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main emailㅤ</span><a  href="mailto:easylearn@email.com" data-action="email" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">easylearn@email.com</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities infoㅤ</span><a  href="mailto:easycollege@email.com" data-action="email" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">easycollege@email.com</span></span></a></span>',
              type: "text",
              tagName: "p",
            },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; Support ㅤ<span style="font-weight: bold;">+1 (234) 567 89 00</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main numberㅤ<span style="font-weight: bold;">+1 (234) 567 89 01</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities Infoㅤ<span style="font-weight: bold;">+1 (234) 567 89 02</span></span></span>',
              type: "text",
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "9028f5e1-6a6a-466f-ba12-0d7b94a2e4c8",
            itemImage: {
              media: {
                type: "image",
                image: { alt: "Illustration" },
                style: { preset: "featured" },
              },
              private: { preset: "none", size: "sm" },
            },
            itemIcon: {
              size: "md",
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M66.3,36.44c0-8.99-7.32-16.31-16.31-16.31c-8.98,0-16.28,7.32-16.28,16.31c0,8.98,7.3,16.28,16.28,16.28  C58.98,52.72,66.3,45.42,66.3,36.44z M37.1,36.44c0-7.11,5.78-12.92,12.89-12.92c7.14,0,12.92,5.8,12.92,12.92  c0,7.11-5.78,12.89-12.92,12.89C42.87,49.33,37.1,43.55,37.1,36.44z"></path><path d="M49.98,90c0.58,0,26.44-39.58,26.44-53.56C76.42,21.85,64.58,10,49.98,10c-14.56,0-26.41,11.85-26.41,26.44  C23.58,50.42,49.41,90,49.98,90z M49.98,13.39c12.71,0,23.05,10.34,23.05,23.05c0,10.11-16.39,37.68-23.04,47.75  c-6.65-10.07-23.01-37.64-23.01-47.75C26.97,23.73,37.29,13.39,49.98,13.39z"></path></svg>',
              background: {
                type: "color",
                color: "rgb(33, 33, 33)",
                ownColor: "rgb(33, 33, 33)",
              },
              id: "3772136",
              platform: null,
              preview: "https://static.thenounproject.com/png/3772136-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            itemNumber: {
              size: "md",
              body: { content: "92%" },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: {
              content:
                '<span style="color: rgb(220,220,220);">200 5th Ave, New York, NY 10010<br>20 W 29th St, New York, NY 10001</span>',
              type: "text",
              tagName: "p",
            },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; Support ㅤ<span style="font-weight: bold;">+1 (234) 567 89 00</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main numberㅤ<span style="font-weight: bold;">+1 (234) 567 89 01</span></span></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities Infoㅤ<span style="font-weight: bold;">+1 (234) 567 89 02</span></span></span>',
              type: "text",
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
    },
    "7798a143-b895-4e3d-a066-09e39dcb4120": {
      color: "light-shade-color?setAlpha=0.26",
      size: { height: "1", width: "100" },
    },
  }
);
window.pageId = "66ff96a252856d3464aa5c15";
window.loadedPages = Object.assign(window.loadedPages || {}, {
  "62c294594d2af2000e80d78e": true,
});
window.scripts = {};
__views = null;
