var __views = {
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
  de209d4a4fb07f8116c53fdedef6b96b: function (
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
          var u = (0, r(n(3)).default)(o.default);
          t.default = u;
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
          var r = (function (e) {
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
              o(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.components.Constructor,
                      t = e.types,
                      n = t.Section,
                      o = t.SectionHeader,
                      r = t.SectionContent,
                      u = t.SectionFooter,
                      a = t.Text,
                      c = t.ButtonsGroup,
                      l = t.Button,
                      i = t.Row,
                      f = t.Column;
                    return React.createElement(
                      e,
                      null,
                      React.createElement(
                        n,
                        { className: "w-section--xxl" },
                        React.createElement(
                          o,
                          null,
                          React.createElement(
                            i,
                            { bind: "header_row" },
                            React.createElement(
                              f,
                              { bind: "header_col_1" },
                              React.createElement(a, {
                                bind: "title",
                                tagName: "h2",
                              }),
                              React.createElement(a, {
                                bind: "subtitle",
                                tagName: "p",
                              })
                            )
                          )
                        ),
                        React.createElement(
                          r,
                          { hidden: !0 },
                          React.createElement(
                            i,
                            { bind: "content_row" },
                            React.createElement(f, { bind: "content_col_1" })
                          )
                        ),
                        React.createElement(
                          u,
                          null,
                          React.createElement(
                            i,
                            { bind: "footer_row" },
                            React.createElement(
                              f,
                              { bind: "footer_col_1" },
                              React.createElement(
                                c,
                                null,
                                React.createElement(l, { bind: "button" }),
                                React.createElement(l, {
                                  bind: "button_additional",
                                })
                              )
                            )
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
          (r.propTypes = { components: PropTypes.object.isRequired }),
            (r.defaultContent = {
              background: { type: "color", color: "dark-shade-color" },
              header_row: {},
              content_row: {},
              footer_row: {},
              header_col_1: {},
              content_col_1: {},
              footer_col_1: {},
              title: { content: "Quantum Company", type: "heroTitle" },
              subtitle: {
                content: "We can execute even the most unpredictable ideas! ",
                type: "subtitle",
              },
              button: { textValue: "Request a quote", size: "lg" },
              button_additional: {
                textValue: "Learn more",
                type: "secondary",
                size: "lg",
              },
            }),
            (r.modifierScheme = {}),
            (t.default = r);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = u(n(4)),
            r = u(n(6));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(o.default, r.default);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = u(n(0)),
            r = u(n(5));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a = o.default.hoistStatics,
            c = o.default.enhancers.mapProps;
          t.default = a(c(_.update("$block.options", _.assign(r.default))));
        },
        function (e) {
          e.exports = {};
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = u(n(0)),
            r = u(n(7));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var a = o.default.hoistStatics,
            c = o.default.enhancers.mapProps;
          t.default = a(c(_.set("style", r.default)));
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
  "691e9e34e116086faaf4b878e3bba8d2": function (
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
          n((n.s = 4))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t) {
          e.exports = React;
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, n) {
          e.exports = {
            section__content: "section__content__1l_su",
            "section__content--area": "section__content--area__1d3aq",
            "section__content--collection":
              "section__content--collection__1K2ES",
            area: "area__1Dkfq",
            "area__item-wrapper": "area__item-wrapper__Vyybl",
            collection: "collection__243Cy",
            "collection__item-wrapper": "collection__item-wrapper__syNg6",
            "section--reverse": "section--reverse__1aaq9",
            "section--gap-none": "section--gap-none__2kSxK",
            "section--full-width": "section--full-width__3rwjd",
            section__inner: "section__inner__2xCQr",
            "decorator-wrapper": "decorator-wrapper__2lax8",
          };
        },
        function (e, t, n) {
          "use strict";
          n.r(t);
          var r = n(1);
          function o(e) {
            return (o =
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
                  })(e);
          }
          function i(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function c(e, t) {
            return (c =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function l(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = p(e);
              if (t) {
                var o = p(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return s(this, n);
            };
          }
          function s(e, t) {
            if (t && ("object" === o(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return u(e);
          }
          function u(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function p(e) {
            return (p = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function f(e, t, n) {
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
          var m = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              Object.defineProperty(e, "prototype", {
                value: Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                }),
                writable: !1,
              }),
                t && c(e, t);
            })(n, React.Component);
            var t = l(n);
            function n() {
              var e;
              i(this, n);
              for (
                var o = arguments.length, a = new Array(o), c = 0;
                c < o;
                c++
              )
                a[c] = arguments[c];
              return (
                f(
                  u((e = t.call.apply(t, [this].concat(a)))),
                  "getModifierValue",
                  function (t) {
                    return _.get(["modifier", t], e.props.$block);
                  }
                ),
                f(u(e), "renderContent", function (t) {
                  var n = t.children,
                    o = e.props.style;
                  return React.createElement(
                    r.Fragment,
                    null,
                    React.createElement(
                      "div",
                      { className: classNames(o.section__content) },
                      React.createElement(
                        "div",
                        { className: classNames(o["section__content--area"]) },
                        n[0]
                      ),
                      React.createElement(
                        "div",
                        {
                          className: classNames(
                            o["section__content--collection"]
                          ),
                        },
                        n[1]
                      )
                    )
                  );
                }),
                e
              );
            }
            return (
              (function (e, t, n) {
                t && a(e.prototype, t),
                  n && a(e, n),
                  Object.defineProperty(e, "prototype", { writable: !1 });
              })(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.style,
                      n = e.components.Constructor,
                      r = n.types,
                      o = r.Section,
                      i = r.SectionContent,
                      a = r.Area,
                      c = r.Collection,
                      l = r.Wrapper,
                      s = r.Media,
                      u = r.Text,
                      p =
                        this.getModifierValue("arrange") &&
                        t["section--reverse"],
                      f =
                        this.getModifierValue("fullWidth") &&
                        t["section--full-width"],
                      m =
                        "0" === this.getModifierValue("sectionGap") &&
                        t["section--gap-none"];
                    return React.createElement(
                      n,
                      null,
                      React.createElement(
                        o,
                        {
                          className: classNames(p, f, m),
                          controls: !1,
                          innerClassName: t.section__inner,
                        },
                        React.createElement(
                          i,
                          null,
                          React.createElement(
                            l,
                            { render: this.renderContent },
                            React.createElement(
                              a,
                              {
                                bind: "area",
                                controls: { columnSize: !1, itemsAlign: !1 },
                                className: classNames(t.area),
                                itemClassName: classNames(
                                  t["area__item-wrapper"]
                                ),
                              },
                              React.createElement(u, {
                                bind: "title",
                                tagName: "h2",
                              }),
                              React.createElement(u, {
                                bind: "subtitle",
                                tagName: "p",
                              })
                            ),
                            React.createElement(
                              c,
                              {
                                bind: "collection",
                                controls: {
                                  columnSize: !1,
                                  columnsCountOptions: [1, 2, 3, 4],
                                  fullWidth: !1,
                                },
                                className: classNames(t.collection),
                                itemWrapperClassName: classNames(
                                  t["collection__item-wrapper"]
                                ),
                                types: { slider: { arrowType: "circle" } },
                              },
                              React.createElement(s, { bind: "item_image" }),
                              React.createElement(u, { bind: "item_heading" })
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })();
          f(m, "propTypes", {
            $block: PropTypes.object.isRequired,
            style: PropTypes.object.isRequired,
            components: PropTypes.object.isRequired,
          }),
            (m.defaultContent = {
              title: { content: "Block Title", type: "blockTitle" },
              subtitle: {
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                type: "subtitle",
              },
              collection: {
                columnsCount: 3,
                contentAlign: "center",
                verticalAlign: "top",
                items: [
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                ],
              },
            }),
            (m.modifierScheme = {
              arrange: {
                defaultValue: !1,
                title: "Reverse order",
                separator: !1,
                type: "swap",
                sortOrder: 10,
              },
              sectionGap: {
                children: [
                  { id: "0", label: "0 px" },
                  { id: "30", label: "30 px" },
                ],
                defaultValue: "30",
                name: "Gap",
                type: "radio-button-group",
                style: "buttons",
                order: 20,
              },
              fullWidth: {
                defaultValue: !1,
                label: "Stretch to full width",
                type: "checkbox",
                style: "toggle",
                order: 30,
              },
            });
          var d = m,
            y = n(0),
            b = n.n(y),
            g = n(2),
            h = (0, b.a.hoistStatics)(
              (0, b.a.enhancers.mapProps)(
                _.update("$block.options", _.assign(g))
              )
            ),
            v = n(3),
            w = n.n(v),
            R = (0, b.a.hoistStatics)(
              (0, b.a.enhancers.mapProps)(_.set("style", w.a))
            ),
            O = _.compose(h, R)(d);
          t.default = O;
        },
      ])
    );
  },
  "92276964b6c848b2f0cdf8b73b5650de": function (
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
        function n(i) {
          if (t[i]) return t[i].exports;
          var r = (t[i] = { i, l: !1, exports: {} });
          return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, i) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: i });
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
            var i = Object.create(null);
            if (
              (n.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var r in e)
                n.d(
                  i,
                  r,
                  function (t) {
                    return e[t];
                  }.bind(null, r)
                );
            return i;
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
          n((n.s = 3))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, n) {
          e.exports = {
            collection__item: "collection__item__15Bxo",
            "collection__item-wrapper--reverse":
              "collection__item-wrapper--reverse__2Tqgo",
            "collection__item-inner-aside":
              "collection__item-inner-aside__3P78e",
            "collection__item-wrapper": "collection__item-wrapper__3x8Og",
            "collection__item-inner": "collection__item-inner__1xD_U",
            "collection__item-inner-content":
              "collection__item-inner-content__1VIMN",
            picture: "picture__fC8NK",
            "picture-wrapper": "picture-wrapper__2TPq2",
          };
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            return (
              (i =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
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
              i(e)
            );
          }
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, s(i.key), i);
            }
          }
          function o(e, t) {
            return (
              (o = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              o(e, t)
            );
          }
          function c(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = l(e);
              if (t) {
                var o = l(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === i(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return a(e);
              })(this, n);
            };
          }
          function a(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function l(e) {
            return (
              (l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              l(e)
            );
          }
          function u(e, t, n) {
            return (
              (t = s(t)) in e
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
          function s(e) {
            var t = (function (e, t) {
              if ("object" != i(e) || !e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != i(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == i(t) ? t : String(t);
          }
          n.r(t);
          var m = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && o(e, t);
            })(s, React.Component);
            var t,
              n,
              i,
              l = c(s);
            function s() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s);
              for (
                var t = arguments.length, n = new Array(t), i = 0;
                i < t;
                i++
              )
                n[i] = arguments[i];
              return (
                u(
                  a((e = l.call.apply(l, [this].concat(n)))),
                  "getModifierValue",
                  function (t) {
                    return _.get(["modifier", t], e.props.$block);
                  }
                ),
                u(a(e), "renderCollectionItemInner", function (t) {
                  var n = t.children,
                    i = t.bind,
                    r = t.background,
                    o = t.itemInnerClassName,
                    c = t.itemPanelClassName,
                    a = t.animationClassName,
                    l = t.dataAnimation,
                    u = t.registerAnimationNode,
                    s = t.value,
                    m = e.props,
                    p = m.style,
                    d = m.components.Image,
                    f = _.getOr({}, "custom", s).reverse;
                  return React.createElement(
                    "div",
                    {
                      className: classNames(
                        p["collection__item-wrapper"],
                        f && p["collection__item-wrapper--reverse"],
                        o,
                        c,
                        a,
                        l,
                        "w-mod-always-paddings",
                        "w-mod-not-paddings"
                      ),
                      ref: u,
                    },
                    React.createElement(
                      "div",
                      { className: classNames(p["collection__item-inner"]) },
                      r,
                      React.createElement(
                        "div",
                        {
                          className: classNames(
                            p["collection__item-inner-aside"]
                          ),
                        },
                        React.createElement(d, {
                          wrapperClassName: classNames(p["picture-wrapper"]),
                          pictureClassName: classNames(p.picture, "w-picture"),
                          imgClassName: "w-picture__image",
                          bind: "".concat(i, ".item_image"),
                          resize: { disable: !0 },
                          excludes: ["shadow"],
                        })
                      ),
                      React.createElement(
                        "div",
                        {
                          className: classNames(
                            p["collection__item-inner-content"],
                            "w-apply-grid-item-paddings"
                          ),
                        },
                        n
                      )
                    )
                  );
                }),
                e
              );
            }
            return (
              (t = s),
              (n = [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.style,
                      n = e.components.Constructor,
                      i = n.types,
                      r = i.Section,
                      o = i.SectionHeader,
                      c = i.SectionContent,
                      a = i.SectionFooter,
                      l = i.Row,
                      u = i.Column,
                      s = i.Collection,
                      m = i.Text,
                      p = i.ButtonsGroup,
                      d = i.Button;
                    return React.createElement(
                      n,
                      null,
                      React.createElement(
                        r,
                        null,
                        React.createElement(
                          o,
                          null,
                          React.createElement(
                            l,
                            { bind: "header_row" },
                            React.createElement(
                              u,
                              { bind: "header_col_1" },
                              React.createElement(m, {
                                bind: "header_title",
                                tagName: "h2",
                              }),
                              React.createElement(m, {
                                bind: "header_subtitle",
                                tagName: "p",
                              })
                            )
                          )
                        ),
                        React.createElement(
                          c,
                          null,
                          React.createElement(
                            s,
                            {
                              bind: "collection",
                              controls: {
                                columnsCountOptions: [1, 2],
                                columnSize: { min: 8 },
                                customItemsLayout: [
                                  {
                                    type: "swap",
                                    bind: "reverse",
                                    name: "Reverse order",
                                  },
                                ],
                                alwaysPaddings: !0,
                                disableBorder: !0,
                                disableShadow: !0,
                              },
                              renderItemInner: this.renderCollectionItemInner,
                              itemWrapperClassName: t.collection__item,
                            },
                            React.createElement(m, { bind: "item_category" }),
                            React.createElement(m, { bind: "item_heading" }),
                            React.createElement(m, { bind: "item_body" }),
                            React.createElement(
                              p,
                              null,
                              React.createElement(d, { bind: "item_button" })
                            )
                          )
                        ),
                        React.createElement(
                          a,
                          null,
                          React.createElement(
                            l,
                            { bind: "footer_row" },
                            React.createElement(
                              u,
                              { bind: "footer_col_1" },
                              React.createElement(
                                p,
                                null,
                                React.createElement(d, {
                                  bind: "footer_button",
                                }),
                                React.createElement(d, {
                                  bind: "footer_button_additional",
                                  hidden: !0,
                                })
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n && r(t.prototype, n),
              i && r(t, i),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              s
            );
          })();
          u(m, "propTypes", {
            $block: PropTypes.object.isRequired,
            style: PropTypes.object.isRequired,
            components: PropTypes.object.isRequired,
          }),
            (m.defaultContent = {
              header_row: {},
              content_row: {},
              footer_row: {},
              header_col_1: { align: "center" },
              footer_col_1: { align: "center" },
              header_title: { content: "Block Title", type: "blockTitle" },
              header_subtitle: {
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta blanditiis similique animi.",
                type: "subtitle",
              },
              collection: {
                columnsCount: 1,
                contentAlign: "left",
                verticalAlign: "middle",
                gap: 0,
                paddingTop: 45,
                paddingBottom: 45,
                paddingLeft: 80,
                paddingRight: 80,
                items: [
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_category: { content: "Caption", type: "caption" },
                    item_body: {
                      content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta blanditiis similique animi veniam eius exercitationem illo nobis.",
                      type: "text",
                    },
                    item_image: {
                      alt: "Heading photo",
                      size: {
                        "min-width: 992px": 1560,
                        "min-width: 768px": 1290,
                        "min-width: 480px": 998,
                        "min-width: 320px": 624,
                      },
                    },
                    item_button: { textValue: "Link", type: "link" },
                  },
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_category: { content: "Caption", type: "caption" },
                    item_body: {
                      content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta blanditiis similique animi veniam eius exercitationem illo nobis.",
                      type: "text",
                    },
                    item_image: {
                      alt: "Heading photo",
                      size: {
                        "min-width: 992px": 1560,
                        "min-width: 768px": 1290,
                        "min-width: 480px": 998,
                        "min-width: 320px": 624,
                      },
                    },
                    item_button: { textValue: "Link", type: "link" },
                  },
                ],
              },
              footer_button: { textValue: "Button", type: "secondary" },
              footer_button_additional: { textValue: "Button" },
            });
          var p = m,
            d = n(0),
            f = n.n(d),
            b = n(1),
            y = (0, f.a.hoistStatics)(
              (0, f.a.enhancers.mapProps)(
                _.update("$block.options", _.assign(b))
              )
            ),
            g = n(2),
            h = n.n(g),
            w = (0, f.a.hoistStatics)(
              (0, f.a.enhancers.mapProps)(_.set("style", h.a))
            ),
            v = _.compose(y, w)(p);
          t.default = v;
        },
      ])
    );
  },
  af1b44b8b0deb2a1bcd2796e67439293: function (
    exports,
    require,
    ReactDOM,
    React,
    PropTypes,
    _,
    classNames
  ) {
    !(function (e, t) {
      for (var r in t) e[r] = t[r];
    })(
      exports,
      (function (e) {
        var t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var o = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                r.d(
                  n,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 4))
        );
      })([
        function (e, t) {
          e.exports = require("weblium/editor");
        },
        function (e, t) {
          e.exports = React;
        },
        function (e) {
          e.exports = JSON.parse('{"image_wrapper":true}');
        },
        function (e, t, r) {
          e.exports = {
            section: "section__2OvCC",
            section__inner: "section__inner__3mblN",
            "section--reverse": "section--reverse__colu3",
            media: "media__2kep6",
            content: "content__1fqh4",
            map: "map__3Fooi",
            picture: "picture__29Wc4",
          };
        },
        function (e, t, r) {
          "use strict";
          r.r(t);
          var n = r(1);
          function o(e) {
            return (
              (o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
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
              o(e)
            );
          }
          function i(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, p(n.key), n);
            }
          }
          function a(e, t) {
            return (
              (a = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
              a(e, t)
            );
          }
          function c(e) {
            var t = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })();
            return function () {
              var r,
                n = u(e);
              if (t) {
                var i = u(this).constructor;
                r = Reflect.construct(n, arguments, i);
              } else r = n.apply(this, arguments);
              return (function (e, t) {
                if (t && ("object" === o(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return l(e);
              })(this, r);
            };
          }
          function l(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function u(e) {
            return (
              (u = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
              u(e)
            );
          }
          function s(e, t, r) {
            return (
              (t = p(t)) in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function p(e) {
            var t = (function (e, t) {
              if ("object" != o(e) || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != o(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == o(t) ? t : String(t);
          }
          var f = (function (e) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && a(e, t);
            })(p, React.Component);
            var t,
              r,
              o,
              u = c(p);
            function p() {
              var e;
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, p);
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              return (
                s(
                  l((e = u.call.apply(u, [this].concat(r)))),
                  "getModifierValue",
                  function (t) {
                    return _.get(["modifier", t], e.props.$block);
                  }
                ),
                s(l(e), "renderSection", function (t) {
                  var r = t.children,
                    o = e.props,
                    i = o.components,
                    a = i.Map,
                    c = i.Image,
                    l = o.style,
                    u = e.getModifierValue("elementsSwitcher");
                  return React.createElement(
                    n.Fragment,
                    null,
                    React.createElement(
                      "div",
                      {
                        className: classNames(
                          l.media,
                          "w-ignore-section-paddings"
                        ),
                      },
                      "map" === u &&
                        React.createElement(a, {
                          className: l.map,
                          bind: "map",
                        }),
                      "image" === u &&
                        React.createElement(c, {
                          wrapperClassName: classNames(
                            "w-picture-wrapper",
                            "w-picture-wrapper--absolute"
                          ),
                          pictureClassName: classNames("w-picture", l.picture),
                          imgClassName: classNames("w-picture__image"),
                          bind: "image",
                          resize: { disable: !0 },
                        })
                    ),
                    React.createElement(
                      "div",
                      {
                        className: classNames(
                          l.content,
                          "w-apply-section-paddings"
                        ),
                      },
                      r
                    )
                  );
                }),
                e
              );
            }
            return (
              (t = p),
              (r = [
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.components.Constructor,
                      r = e.style,
                      n = t.types,
                      o = n.Section,
                      i = n.Area,
                      a = n.Text,
                      c = n.ContactForm,
                      l =
                        this.getModifierValue("arrange") &&
                        r["section--reverse"];
                    return React.createElement(
                      t,
                      null,
                      React.createElement(
                        o,
                        {
                          className: classNames(
                            "w-section",
                            "w-section--full-width",
                            l,
                            r.section
                          ),
                          innerClassName: r.section__inner,
                          controls: !1,
                          render: this.renderSection,
                        },
                        React.createElement(
                          i,
                          {
                            bind: "area",
                            controls: {
                              columnSize: { min: 4, max: 10 },
                              verticalAlign: !1,
                            },
                          },
                          React.createElement(a, {
                            bind: "title",
                            tagName: "h2",
                          }),
                          React.createElement(a, {
                            bind: "subtitle",
                            tagName: "p",
                          }),
                          React.createElement(c, { bind: "form" })
                        )
                      )
                    );
                  },
                },
              ]),
              r && i(t.prototype, r),
              o && i(t, o),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              p
            );
          })();
          s(f, "propTypes", {
            components: PropTypes.object.isRequired,
            $block: PropTypes.object.isRequired,
            style: PropTypes.object.isRequired,
          }),
            (f.defaultContent = {
              image: { alt: "Image placeholder" },
              title: { content: "Block Title", type: "blockTitle" },
              subtitle: {
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                type: "subheading",
              },
              area: { columnSize: 6 },
              form: {
                fields: [
                  {
                    type: "name",
                    id: "contactForm_name",
                    title: "Name",
                    placeholder: "",
                    required: !0,
                  },
                  {
                    type: "phone",
                    id: "contactForm_phoneNumber",
                    title: "Phone number",
                    placeholder: "",
                    required: !0,
                  },
                  {
                    type: "email",
                    id: "contactForm_email",
                    title: "Email",
                    placeholder: "",
                    required: !0,
                  },
                ],
                submitButton: { title: "Request a quote" },
                className: "form",
                buttonClassName:
                  "button button--size-md button--primary form__button",
              },
              map: {
                preset: "silver",
                height: "100%",
                center: { lat: 51.509572, lng: -0.134223 },
                zoom: 18,
                activeMarker: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
                disableDefaultUI: !0,
                allowZoomOnScroll: !1,
                markers: [
                  {
                    position: { lat: 51.509572, lng: -0.134223 },
                    name: "Address",
                    description: "This is marker description",
                    address: "45 Rockefeller Plaza, New York, NY 10111, USA.",
                    id: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
                  },
                ],
              },
            }),
            (f.modifierScheme = {
              arrange: {
                defaultValue: !1,
                title: "Reverse order",
                type: "swap",
                sortOrder: 10,
              },
              elementsSwitcher: {
                children: [
                  { id: "image", label: "Image" },
                  { id: "map", label: "Map" },
                ],
                defaultValue: "image",
                name: "Media type",
                type: "radio-button-group",
                style: "buttons",
                sortOrder: 20,
              },
            });
          var m = f,
            d = r(0),
            b = r.n(d),
            y = r(2),
            g = (0, b.a.hoistStatics)(
              (0, b.a.enhancers.mapProps)(
                _.update("$block.options", _.assign(y))
              )
            ),
            v = r(3),
            h = r.n(v),
            w = (0, b.a.hoistStatics)(
              (0, b.a.enhancers.mapProps)(_.set("style", h.a))
            ),
            O = _.compose(g, w)(m);
          t.default = O;
        },
      ])
    );
  },
  "48d38e9e60eb906bd1fe647de3469a5c": function (
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
                    var e = this.props.components.Constructor;
                    return React.createElement(e, null);
                  },
                },
              ]),
              t
            );
          })();
          (o.propTypes = { components: PropTypes.object.isRequired }),
            (o.defaultContent = {}),
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
          var i = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = i(a(_.update("$block.options", _.assign(o.default))));
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = u(n(0)),
            o = u(n(7));
          function u(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = r.default.hoistStatics,
            a = r.default.enhancers.mapProps;
          t.default = i(a(_.set("style", o.default)));
        },
        function (e, t, n) {},
      ])
    );
  },
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
  "3ea99060a194749e54a8f48de64714ff": function (
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
              "da8cfce0-347d-483e-83b3-f0630c60e213": {
                columnsCount: 2,
                contentAlign: "center",
                items: [{}],
              },
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
                    type: "Collection",
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
            i = r.default.enhancers.mapProps;
          t.default = c(i(_.update("$block.options", _.assign(o.default))));
        },
        function (e) {
          e.exports = JSON.parse("{}");
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
            i = r.default.enhancers.mapProps;
          t.default = c(i(_.set("style", o.default)));
        },
        function (e, t, n) {},
      ])
    );
  },
  "3807a94715f8cadf7efac0f96e4679c4": function (
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
          var a = (0, o(n(4)).default)(r.default);
          t.default = a;
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
            })(),
            o = n(3);
          function a(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }
          var c = (function (e) {
            function t() {
              var e, n, r;
              a(this, t);
              for (var c = arguments.length, l = Array(c), s = 0; s < c; s++)
                l[s] = arguments[s];
              return (
                (n = r =
                  i(
                    this,
                    (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                      e,
                      [this].concat(l)
                    )
                  )),
                (r.getModifierValue = function (e) {
                  return _.get(["modifier", e], r.props.$block);
                }),
                (r.renderContent = function (e) {
                  var t = e.children,
                    n = r.props.style;
                  return React.createElement(
                    o.Fragment,
                    null,
                    React.createElement(
                      "div",
                      { className: classNames(n.section__content) },
                      React.createElement(
                        "div",
                        { className: classNames(n["section__content--area"]) },
                        t[0]
                      ),
                      React.createElement(
                        "div",
                        {
                          className: classNames(
                            n["section__content--collection"]
                          ),
                        },
                        t[1]
                      )
                    )
                  );
                }),
                i(r, n)
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
                    var e = this.props,
                      t = e.style,
                      n = e.components.Constructor,
                      r = n.types,
                      o = r.Section,
                      a = r.SectionContent,
                      i = r.Area,
                      c = r.Collection,
                      l = r.Wrapper,
                      s = r.Media,
                      u = r.Text,
                      p =
                        this.getModifierValue("arrange") &&
                        t["section--reverse"],
                      f =
                        this.getModifierValue("fullWidth") &&
                        t["section--full-width"],
                      d =
                        "0" === this.getModifierValue("sectionGap") &&
                        t["section--gap-none"];
                    return React.createElement(
                      n,
                      null,
                      React.createElement(
                        o,
                        {
                          className: classNames(p, f, d),
                          controls: !1,
                          innerClassName: t.section__inner,
                        },
                        React.createElement(
                          a,
                          null,
                          React.createElement(
                            l,
                            { render: this.renderContent },
                            React.createElement(
                              i,
                              {
                                bind: "area",
                                controls: { columnSize: !1, itemsAlign: !1 },
                                className: classNames(t.area),
                                itemClassName: classNames(
                                  t["area__item-wrapper"]
                                ),
                              },
                              React.createElement(u, {
                                bind: "title",
                                tagName: "h2",
                              }),
                              React.createElement(u, {
                                bind: "subtitle",
                                tagName: "p",
                              })
                            ),
                            React.createElement(
                              c,
                              {
                                bind: "collection",
                                controls: {
                                  columnSize: !1,
                                  columnsCountOptions: [1, 2, 3, 4],
                                  fullWidth: !1,
                                },
                                className: classNames(t.collection),
                                itemWrapperClassName: classNames(
                                  t["collection__item-wrapper"]
                                ),
                                types: { slider: { arrowType: "circle" } },
                              },
                              React.createElement(s, { bind: "item_image" }),
                              React.createElement(u, { bind: "item_heading" })
                            )
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
          (c.propTypes = {
            $block: PropTypes.object.isRequired,
            style: PropTypes.object.isRequired,
            components: PropTypes.object.isRequired,
          }),
            (c.defaultContent = {
              title: { content: "Block Title", type: "blockTitle" },
              subtitle: {
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                type: "subtitle",
              },
              collection: {
                columnsCount: 3,
                contentAlign: "center",
                verticalAlign: "top",
                items: [
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                  {
                    item_heading: { content: "Heading", type: "heading" },
                    item_image: { alt: "Illustration" },
                  },
                ],
              },
            }),
            (c.modifierScheme = {
              arrange: {
                defaultValue: !1,
                title: "Reverse order",
                separator: !1,
                type: "swap",
                sortOrder: 10,
              },
              sectionGap: {
                children: [
                  { id: "0", label: "0 px" },
                  { id: "30", label: "30 px" },
                ],
                defaultValue: "30",
                name: "Gap",
                type: "radio-button-group",
                style: "buttons",
                order: 20,
              },
              fullWidth: {
                defaultValue: !1,
                label: "Stretch to full width",
                type: "checkbox",
                style: "toggle",
                order: 30,
              },
            }),
            (t.default = c);
        },
        function (e, t) {
          e.exports = React;
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = a(n(5)),
            o = a(n(7));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          t.default = _.compose(r.default, o.default);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = a(n(0)),
            o = a(n(6));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = r.default.hoistStatics,
            c = r.default.enhancers.mapProps;
          t.default = i(c(_.update("$block.options", _.assign(o.default))));
        },
        function (e) {
          e.exports = JSON.parse("{}");
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = a(n(0)),
            o = a(n(8));
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var i = r.default.hoistStatics,
            c = r.default.enhancers.mapProps;
          t.default = i(c(_.set("style", o.default)));
        },
        function (e, t, n) {
          e.exports = {
            section__content: "section__content__35Nwz",
            "section__content--area": "section__content--area__29i3V",
            "section__content--collection":
              "section__content--collection__2zFGP",
            area: "area__AL5vD",
            "area__item-wrapper": "area__item-wrapper__18-8W",
            collection: "collection__2aHWA",
            "collection__item-wrapper": "collection__item-wrapper__pyFR4",
            "section--reverse": "section--reverse__Y6MXQ",
            "section--gap-none": "section--gap-none__AFcs-",
            "section--full-width": "section--full-width__-00hy",
            section__inner: "section__inner__1naDU",
            "decorator-wrapper": "decorator-wrapper__2W-JY",
          };
        },
      ])
    );
  },
};
blockJsonp(
  "5bb5ce39962176002454d448",
  __views["6a6569b2e71b1cec0b69e42aa6acda74"],
  {
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: ["2ea425ae-b859-4d3a-bdd6-392fc089251d"],
        },
        "2ea425ae-b859-4d3a-bdd6-392fc089251d": {
          type: "SectionContent",
          children: ["da8cfce0-347d-483e-83b3-f0630c60e213"],
        },
        "da8cfce0-347d-483e-83b3-f0630c60e213": {
          type: "Row",
          children: ["74ba5ba9-5451-49a4-ba95-b367284bec40"],
        },
        "74ba5ba9-5451-49a4-ba95-b367284bec40": {
          type: "Column",
          children: [
            "169063a9-9dc5-414f-ab57-b0266fa9118c",
            "4200ee63-f449-4ba1-9fe6-abc9799e20cb",
            "556c68a2-f290-42ba-8073-e313773d9e4c",
          ],
        },
        "4200ee63-f449-4ba1-9fe6-abc9799e20cb": { type: "Text" },
        "556c68a2-f290-42ba-8073-e313773d9e4c": { type: "Text" },
        "169063a9-9dc5-414f-ab57-b0266fa9118c": { type: "Text" },
      },
    },
    "0ddc505a-544b-46e5-b3d5-01c20309e20f": {
      type: "image",
      video: {},
      image: { alt: "Illustration" },
      style: { preset: "main" },
    },
    "4200ee63-f449-4ba1-9fe6-abc9799e20cb": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">How We Can Help You</span>',
      type: "blockTitle",
      tagName: "p",
    },
    "556c68a2-f290-42ba-8073-e313773d9e4c": {
      content:
        "We offer a variety of services for those who want to study and/or start a career abroad.",
      type: "subtitle",
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
    background: {
      type: "color",
      color: "rgb(249, 249, 249)",
      image: {},
      ownColor: "rgb(249, 249, 249)",
    },
    "169063a9-9dc5-414f-ab57-b0266fa9118c": {
      content: '<span style="font-weight: bold;">- 02 -</span>',
      type: "small",
      tagName: "p",
    },
  }
);
blockJsonp(
  "5c0f7fee30cc2c002273642d",
  __views["de209d4a4fb07f8116c53fdedef6b96b"],
  {
    "64e759b2-2f53-4933-bae1-f0e80e2de9bc": { size: 2 },
    header_col_1: { align: "center", verticalAlign: "top" },
    "61a0a823-e811-4df7-bf86-c8a322307d89": {},
    background: {
      type: "image",
      color: "dark-shade-color",
      image: {
        overlay: {
          type: "color",
          color: "dark-shade-color?setAlpha=0.79",
          touched: true,
          ownColor: "dark-shade-color?setAlpha=0.79",
        },
        parallax: "fixed",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c5578ecdc78b000d74294b",
        optimize: false,
        behind: { type: "color" },
      },
      colorType: "color",
    },
    header_row: {},
    content_row: {},
    footer_row: {},
    content_col_1: {},
    footer_col_1: { align: "center", verticalAlign: "top" },
    title: {
      content: "You're One Click Away From Your Dream Education!",
      type: "blockTitle",
      tagName: "h2",
    },
    subtitle: {
      content:
        '<span style="color: rgba(255,255,255,0.77);">Education abroad is not as difficult and expensive as it seems</span>',
      type: "subtitle",
    },
    button: {
      textValue: "Contact Us",
      size: "lg",
      style: { fontWeight: "bold" },
      actionConfig: {
        action: "anchor",
        actions: { anchor: { anchor: "62c400323390fb000dedbb39" } },
      },
    },
    button_additional: {
      textValue: "Learn more",
      type: "secondary",
      size: "lg",
      style: { fontWeight: "bold" },
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0", "0_0_2"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": { original: true, children: ["0_0_0_0_0"] },
        "0_0_0_0_0": {
          original: true,
          children: [
            "73509c61-9c9d-4932-acb6-51266d88d922",
            "0_0_0_0_0_0",
            "0_0_0_0_0_1",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_0_0_0_1": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "0_0_2": { original: true, children: ["0_0_2_0"] },
        "0_0_2_0": { original: true, children: ["0_0_2_0_0"] },
        "0_0_2_0_0": { original: true, children: ["0_0_2_0_0_0"] },
        "0_0_2_0_0_0": { original: true, children: ["0_0_2_0_0_0_0"] },
        "0_0_2_0_0_0_0": { original: true },
        "0_0_2_0_0_0_1": { original: true },
        "73509c61-9c9d-4932-acb6-51266d88d922": { type: "Text" },
      },
    },
    "73509c61-9c9d-4932-acb6-51266d88d922": {
      content:
        '<span class="text-ui-brand-color" style="color: var(--ui-brand-color);">- 06 -</span>',
      type: "small",
      tagName: "p",
    },
  }
);
blockJsonp(
  "5ca494aff86f4f00250c4c4c",
  __views["6a6569b2e71b1cec0b69e42aa6acda74"],
  {
    "cb2c3bbd-ce3b-4301-b153-7ce45705b154": {
      size: 8,
      align: "left",
      verticalAlign: "top",
    },
    "74ba5ba9-5451-49a4-ba95-b367284bec40": {
      size: 4,
      align: "center",
      verticalAlign: "middle",
    },
    "8984daf8-bd89-41f8-8b73-804b49fd7438": {},
    "23ec925b-902f-476f-a1cb-c0a509f1f061": { size: 7 },
    "d3631209-b014-4009-a431-efc195823d66": {},
    "b8db9027-160b-4d45-ab03-197f1f613786": { size: 8 },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
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
          children: [
            "ad70ca2a-b45a-44a6-84ac-ca031b1572a2",
            "2eae7f94-1002-4704-ba8d-a34cef1cc532",
            "555a9136-bb0c-4d9f-81eb-bdea3c61c663",
          ],
        },
        "74ba5ba9-5451-49a4-ba95-b367284bec40": {
          type: "Column",
          children: ["2e931ac7-c8dd-4a20-adf9-5bc14dfcb17f"],
        },
        "2eae7f94-1002-4704-ba8d-a34cef1cc532": { type: "Text" },
        "555a9136-bb0c-4d9f-81eb-bdea3c61c663": { type: "Text" },
        "2e931ac7-c8dd-4a20-adf9-5bc14dfcb17f": {
          type: "contact-form.ContactForm",
        },
        "ad70ca2a-b45a-44a6-84ac-ca031b1572a2": { type: "Text" },
      },
    },
    "2eae7f94-1002-4704-ba8d-a34cef1cc532": {
      content: "Do You Want More Freebies?",
      type: "headingLg",
      tagName: "h2",
    },
    "555a9136-bb0c-4d9f-81eb-bdea3c61c663": {
      content:
        '<span style="color: rgb(246,246,254);">Subscribe and get our best lessons for free!</span>',
      type: "subtitle",
      tagName: "p",
    },
    "2e931ac7-c8dd-4a20-adf9-5bc14dfcb17f": {
      fields: [
        {
          type: "email",
          id: "contactForm_email",
          title: "",
          placeholder: "Email",
          required: true,
        },
      ],
      submitButton: { title: "Subscribe", style: { fontWeight: "bold" } },
      className: "form",
      buttonClassName: "button button--size-md button--primary form__button",
      _formId: "67NAMSCKI9kvymcX3E6b",
      _token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiI1Y2I3NGUwMWMyNmM2ZjAwMjM5ZDQ3ZWMiLCJmb3JtSWQiOiI2N05BTVNDS0k5a3Z5bWNYM0U2YiIsImlhdCI6MTY1ODk1NDM1N30.BwQE_WadovhchoC_-j0wmhdvIW3Bc1Zjqj8Blkt2fQo",
      customColors: { fill: "rgb(46, 42, 130)" },
    },
    background: {
      type: "color",
      colorType: "color",
      image: {
        overlay: {
          enabled: false,
          saved: {
            type: "color",
            color: "dark-accent-color?setAlpha=0.91",
            touched: true,
            ownColor: "dark-accent-color?setAlpha=0.91",
          },
          touched: true,
        },
        parallax: "fixed",
        position: { cover: "61.46% 100%" },
        resourceRef: "res/62be8ca3462df9000d36ed88/62beeea9f4a16a000ed4c0ef",
        optimize: false,
      },
      color: "dark-accent-color",
    },
    "ad70ca2a-b45a-44a6-84ac-ca031b1572a2": {
      content:
        '<span style="color: rgba(255,255,255,0.85);"><span style="font-weight: bold;">- 04 -</span></span>',
      type: "small",
      tagName: "p",
    },
  }
);
blockJsonp(
  "5ca49c2462f9080024e2d199",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_col_1: { align: "left", verticalAlign: "top", size: 4 },
    "8ddb348b-c708-47b8-b531-766e4f39cda9": {
      size: 8,
      align: "left",
      verticalAlign: "bottom",
    },
    "4537e68f-50cf-4942-83ef-8f0882b1a41b": { size: 3 },
    "ad92770f-a7eb-4851-9e05-a3b947c639fe": {},
    header_row: { gap: 25 },
    content_row: {},
    content_col_1: { size: 6 },
    title: {
      content:
        '<span style="display: block;"><span style="color: rgb(41,41,41);">About </span></span><span style="display: block;"><span style="color: rgb(41,41,41);">Platform</span></span>',
      type: "blockTitle",
      tagName: "h2",
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: ["0_0_0", "d69f0d24-485c-4f17-8297-461f30d6bf9d"],
        },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0", "8ddb348b-c708-47b8-b531-766e4f39cda9"],
        },
        "0_0_0_0_0": {
          original: true,
          children: [
            "85628a4f-969b-40a4-981b-09c3fd9b2ac5",
            "0_0_0_0_0_0",
            "9fd23061-eac4-4f8c-a569-bf305f64d35a",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "8ddb348b-c708-47b8-b531-766e4f39cda9": {
          type: "Column",
          children: [
            "b1dfe8cf-e57b-4750-8a7f-bd3b55e28f51",
            "52473cac-b460-414e-96bd-bc5f3b6f1462",
          ],
        },
        "52473cac-b460-414e-96bd-bc5f3b6f1462": { type: "Text" },
        "85628a4f-969b-40a4-981b-09c3fd9b2ac5": { type: "Text" },
        "b1dfe8cf-e57b-4750-8a7f-bd3b55e28f51": { type: "Text" },
        "9fd23061-eac4-4f8c-a569-bf305f64d35a": { type: "Text" },
        "d69f0d24-485c-4f17-8297-461f30d6bf9d": {
          type: "SectionContent",
          children: ["153cd5d2-752f-43b2-b0f5-23319f24c24c"],
        },
        "153cd5d2-752f-43b2-b0f5-23319f24c24c": {
          type: "Row",
          children: ["2db4acee-abf4-4f39-adef-9816af4aca01"],
        },
        "2db4acee-abf4-4f39-adef-9816af4aca01": {
          type: "Column",
          children: [
            "ad159019-a866-4192-85e0-58f17f2b3730",
            "9934bec1-6c03-4397-9d14-3e68129b3ac3",
            "380b5014-51f5-4269-bce0-3c8b02991e90",
          ],
        },
        "9934bec1-6c03-4397-9d14-3e68129b3ac3": { type: "Icon" },
        "ad159019-a866-4192-85e0-58f17f2b3730": { type: "Spacer" },
        "380b5014-51f5-4269-bce0-3c8b02991e90": { type: "Spacer" },
      },
    },
    "0ef83f6a-0f19-49e1-bd5d-1ccbba8bf3b4": {
      align: "center",
      verticalAlign: "middle",
      size: 8,
      paddingLeft: 120,
      paddingRight: 120,
    },
    "9b137845-e152-47fa-a6f6-11aab2a1703f": {
      content:
        '<span style="display: block;"><span style="color: rgb(108,108,134);">EasyLearn was created to help students from all over the world achieve their dreams. For those global learners who are eager to explore international education opportunities, EasyLearn is a perfect platform offering both guidance and support. </span></span><br><span style="display: block;"><span style="color: rgb(108,108,134);">Our professionals guide students through the entire process, from selecting a country to study into picking the right university courses. Your dream of studying abroad could quickly become a reality if you turn to us for help</span></span>',
      type: "text",
      tagName: "p",
    },
    "9612966c-4992-4ee0-9c82-8b24215e28d4": {
      networks: [
        { id: "facebook", name: "Facebook", url: "https://facebook.com/" },
        { id: "instagram", name: "Instagram", url: "https://instagram.com/" },
        { id: "youtube", name: "YouTube", url: "https://youtube.com/" },
      ],
      target: "_blank",
      design: {
        border: "softRect",
        innerFill: false,
        preset: "preset001",
        offset: 10,
        color: "light-accent",
        fillColor: "null",
        sizes: [10, 20, 30, 40],
        size: 30,
        borderColor: "brand-color",
        iconColor: "brand-color",
        presetStyle: null,
        originalIcon: false,
        originalColor: false,
        originalBorder: false,
      },
    },
    "c29df2f7-d721-42ef-9192-23f7d6639233": { size: 2 },
    "b5f8b007-a1c1-4142-917b-ea2091537637": {},
    "a3fd6e72-1220-410d-915f-e72dcf64e99c": {},
    "52473cac-b460-414e-96bd-bc5f3b6f1462": {
      content:
        '<span style="display: block;"><span style="color: rgb(135,135,135);">For those global learners who are eager to explore international education opportunities, EasyLearn is a perfect platform offering both guidance and support. </span></span><br><span style="display: block;"><span style="color: rgb(135,135,135);">Our professionals guide students through the entire process, from selecting a country to study into picking the right university courses. Your <em>dream</em> of studying abroad could quickly <em>become a reality</em> if you turn to us for help.</span></span>',
      type: "text",
      tagName: "p",
    },
    "85628a4f-969b-40a4-981b-09c3fd9b2ac5": {
      content: '<span style="font-weight: bold;">- 01 -</span>',
      type: "small",
      tagName: "p",
    },
    "a3998802-6171-4b97-a12b-6af3f2487c63": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Free Lessons</span>',
      type: "headingLg",
      tagName: "h2",
    },
    "fd3a018a-6f00-40bb-a653-5929abe296a4": {
      color: "rgb(43, 114, 88)",
      size: { height: "5", width: 10 },
    },
    "43d488cc-f459-404e-964e-02220b099937": {
      size: "md",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 52 52" style="enable-background:new 0 0 52 52;" xml:space="preserve"><style type="text/css">\n\t.st0{stroke:#2A3D4F;stroke-width:2;stroke-miterlimit:10;}\n\t.st1{stroke:#2A3D4F;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n</style><g><g><path d="M27,41.5H7v-39h15c2.8,0,5,2.2,5,5V41.5z M9,39.5h16v-32c0-1.7-1.3-3-3-3H9V39.5z"></path></g><g><path d="M45,41.5H25v-34c0-2.8,2.2-5,5-5h15V41.5z M27,39.5h16v-35H30c-1.7,0-3,1.3-3,3V39.5z"></path></g><g><path d="M26,49.5c-1.9,0-3.4-1.3-3.9-3H3c-0.6,0-1-0.4-1-1v-36c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v30h34v-30c0-0.6,0.4-1,1-1h5    c0.6,0,1,0.4,1,1v36c0,0.6-0.4,1-1,1H29.9C29.4,48.2,27.9,49.5,26,49.5z M4,44.5h19c0.6,0,1,0.4,1,1c0,1.1,0.9,2,2,2s2-0.9,2-2    c0-0.6,0.4-1,1-1h19v-34h-3v30c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1v-30H4V44.5z"></path></g><g><g><path d="M21,10.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S21.6,10.5,21,10.5z"></path></g><g><path d="M18,16.5h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S18.6,16.5,18,16.5z"></path></g><g><path d="M21,22.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S21.6,22.5,21,22.5z"></path></g><g><path d="M18,28.5h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S18.6,28.5,18,28.5z"></path></g><g><path d="M21,34.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S21.6,34.5,21,34.5z"></path></g></g><g><g><path d="M39,10.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S39.6,10.5,39,10.5z"></path></g><g><path d="M39,16.5h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S39.6,16.5,39,16.5z"></path></g><g><path d="M39,22.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S39.6,22.5,39,22.5z"></path></g><g><path d="M39,28.5h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h5c0.6,0,1,0.4,1,1S39.6,28.5,39,28.5z"></path></g><g><path d="M39,34.5h-8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S39.6,34.5,39,34.5z"></path></g></g></g></svg>',
      id: "1059784",
      platform: null,
      preview: "https://static.thenounproject.com/png/1059784-200.png",
      source: "noun",
      resourceRef: null,
      background: {
        color: "light-accent-color",
        type: "color",
        colorType: "color",
      },
    },
    "7a372a30-778f-4cc3-ab73-8624667c943d": {
      content: 'Economy <span style="color: rgb(43,114,88);">→</span>',
      type: "heading",
      tagName: "p",
    },
    "7736d00b-b8c9-4d2f-8c3e-6e3c905837e6": {},
    "8f1f6ef1-81eb-4002-81a7-494191bede10": {
      content: 'English <span style="color: rgb(43,114,88);">→</span>',
      type: "heading",
      tagName: "p",
    },
    "987237e7-9b9e-44d9-9be8-8701863d5972": {
      content: 'Math <span style="color: rgb(43,114,88);">→</span>',
      type: "heading",
      tagName: "p",
    },
    "c6eddd39-6057-403b-b8ca-0ea109655c35": {
      content:
        '<br><span style="display: block;"><span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);"><span style="font-weight: bold;"><u>Discover All Lessons</u></span></span></span>',
      type: "text",
    },
    "931df51c-3383-4ed2-8d73-4fc295aefbfd": {},
    "b1dfe8cf-e57b-4750-8a7f-bd3b55e28f51": {
      content:
        "EasyLearn was created to help students from all over the world achieve their dreams.&nbsp;",
      type: "subtitle",
      tagName: "p",
    },
    "19e66623-2023-4075-bd7a-43d08540699c": {
      content: "Text element",
      type: "text",
    },
    "9fd23061-eac4-4f8c-a569-bf305f64d35a": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>More About Us</u></span></span></a>',
      type: "caption",
      tagName: "p",
    },
    "c83ef9d8-27d3-43a4-8544-c907f7ad7913": {
      color: null,
      desktopHeight: 20,
      mobileHeight: 0,
    },
    "9934bec1-6c03-4397-9d14-3e68129b3ac3": {
      size: "xl",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 99.999" enable-background="new 0 0 100 99.999" xml:space="preserve"><polygon fill="#000000" points="35.783,69 35.783,29 69,49.143 "></polygon></svg>',
      background: {
        color: "brand-color?setAlpha=0.6",
        type: "color",
        colorType: "color",
        ownColor: "brand-color?setAlpha=0.6",
      },
      id: "22164",
      platform: null,
      preview: "https://static.thenounproject.com/png/22164-200.png",
      source: "noun",
      resourceRef: null,
      fill: "light-shade-color",
    },
    "2db4acee-abf4-4f39-adef-9816af4aca01": {
      align: "center",
      verticalAlign: "top",
      background: {
        color: "light-accent-color",
        image: {
          overlay: {
            enabled: false,
            saved: { type: "color", color: "dark-shade-color", opacity: 0.56 },
            touched: true,
          },
          filter: { saved: { type: "grayscale" } },
          position: { cover: "50.73% 40.27%" },
          resourceRef: "res/62be8ca3462df9000d36ed88/62c55435f4a16a000eff9fb0",
          optimize: false,
          behind: { type: "color" },
        },
        type: "image",
        colorType: "color",
      },
    },
    "ad159019-a866-4192-85e0-58f17f2b3730": {
      color: null,
      desktopHeight: 240,
      mobileHeight: 150,
    },
    "380b5014-51f5-4269-bce0-3c8b02991e90": {
      color: null,
      desktopHeight: 240,
      mobileHeight: 150,
    },
    background: {
      type: "color",
      color: "light-shade-color",
      image: {},
      ownColor: "rgb(249, 249, 249)",
    },
  }
);
blockJsonp(
  "5cab35b6633a4c002558e64a",
  __views["de209d4a4fb07f8116c53fdedef6b96b"],
  {
    background: {
      type: "image",
      color: "dark-shade-color",
      image: {
        overlay: {
          type: "color",
          color: "dark-shade-color?setAlpha=0.73",
          touched: true,
          ownColor: "dark-shade-color?setAlpha=0.73",
        },
        parallax: false,
        position: {
          cover: "82.71% 38.5%",
          coverTablet: "0% 52.06%",
          coverMobile: "0% 54.22%",
        },
        resourceRef: "res/62be8ca3462df9000d36ed88/62c6d61f0dcc3c000d0ad486",
        optimize: false,
        flop: false,
        behind: { type: "color" },
      },
      colorType: "color",
    },
    header_row: {},
    content_row: {},
    footer_row: {},
    header_col_1: { align: "left", verticalAlign: "top" },
    content_col_1: {},
    footer_col_1: {},
    title: {
      content:
        '<span style="display: block;">EasyLearn – We Make</span><span style="display: block;">Your Dreams Come True!</span>',
      type: "heroTitle",
      tagName: "h2",
    },
    subtitle: {
      content:
        '<span style="color: rgba(255,255,255,0.8);">Study anywhere you want to with our help. Well, except Hogwarts.</span>',
      type: "subtitle",
      tagName: "p",
    },
    button: {
      textValue: "Request a Quote",
      size: "lg",
      actionConfig: {
        action: "anchor",
        actions: { anchor: { anchor: "62c400323390fb000dedbb39" } },
      },
      style: { fontWeight: "bold" },
      iconEnabled: false,
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M59.999,55.001v15l20-20c0,0-10-10-20-20v15h-40v10H59.999z"></path></svg>',
        id: "44423",
        platform: null,
        preview: "https://static.thenounproject.com/png/44423-200.png",
        source: "noun",
        resourceRef: null,
      },
      iconAlignment: "right",
    },
    button_additional: {
      textValue: "Learn more",
      type: "secondary",
      size: "lg",
      actionConfig: {
        action: "anchor",
        actions: { anchor: { anchor: "5ca49c2462f9080024e2d199" } },
      },
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": { original: true, children: ["0_0_0_0_0"] },
        "0_0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0_0", "0_0_0_0_0_1", "0_0_2_0_0_0"],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_0_0_0_1": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "0_0_2": { original: true, children: [] },
        "0_0_2_0": { original: true, children: [] },
        "0_0_2_0_0": { original: true, children: [] },
        "0_0_2_0_0_0": {
          original: true,
          children: ["0_0_2_0_0_0_0", "5605518f-9f05-4fe1-a6ba-6e89d03f0097"],
        },
        "0_0_2_0_0_0_0": { original: true },
        "0_0_2_0_0_0_1": { original: true },
        "5605518f-9f05-4fe1-a6ba-6e89d03f0097": {
          type: "Button",
          base: "0_0_2_0_0_0_0",
        },
      },
    },
    "7c0f3f41-755b-4c29-b3c6-82103523b5ce": {
      collection: {
        items: [
          {
            id: "9da861b9-e1dc-4b14-9565-7f8167172efc",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M50,0C31.294,0,16.129,15.165,16.129,33.87c0,0.401,0.012,0.809,0.03,1.221c0.127,3.558,0.798,6.975,1.939,10.172  C25.324,69.015,50,100,50,100s24.673-30.982,31.9-54.734c1.143-3.197,1.813-6.617,1.939-10.175c0.02-0.412,0.031-0.819,0.031-1.221  C83.871,15.165,68.706,0,50,0z M50,50.459c-9.161,0-16.589-7.428-16.589-16.589c0-9.16,7.428-16.588,16.589-16.588  c9.162,0,16.589,7.428,16.589,16.588C66.589,43.031,59.162,50.459,50,50.459z"></path></svg>',
              id: "1832",
              platform: null,
              preview: "https://static.thenounproject.com/png/1832-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: { type: "text", content: "London - 36 Regent St." },
            background: { type: "none" },
          },
          {
            id: "fc5a6a70-1cdd-4fe2-80ff-6d1faad1593a",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M90.1,75.1l-0.5-1c-1.4-3.3-18.6-8.3-20-8.4l-1.1,0.1c-2.1,0.4-4.4,2.3-8.9,6.2c-0.9,0.8-2.1,1-3.2,0.4  c-5.9-3.3-13.1-9.9-16.7-13.9c-3.9-4.3-8.6-11.4-10.8-17.1c-0.4-1.1,0-2.3,0.8-3.1c5.1-4.6,7.3-6.8,7.5-9.2c0.1-1.4-2.9-19.1-6-20.8  l-0.9-0.6c-2-1.3-5-3.2-8.3-2.5c-0.8,0.2-1.6,0.5-2.3,0.9C17.5,7.5,12,11.3,9.5,16.2C8,19.3,7.3,47.4,28.3,71.1  c20.8,23.5,46.5,24.5,50.3,23.7l0.1,0l0.3-0.1c5.2-1.9,9.6-6.8,11.3-8.9C93.4,82.1,91.3,77.6,90.1,75.1z"></path></svg>',
              id: "52971",
              platform: null,
              preview: "https://static.thenounproject.com/png/52971-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: {
              type: "text",
              content:
                '<a  href="tel:9955590499" data-action="phone" class="ui-link"><span class="text-ui-light-shade-color" style="color: var(--ui-light-shade-color);">+1 (234) 567 89 00</span></a>',
            },
            background: { type: "none" },
          },
        ],
      },
      private: { preset: "preset2" },
    },
    "eda12903-2bed-4b90-8b47-ec4ca9afb9e6": {
      color: null,
      desktopHeight: 90,
      mobileHeight: 0,
    },
    "5605518f-9f05-4fe1-a6ba-6e89d03f0097": {
      textValue: "+1 (234) 567 89 00",
      size: "lg",
      actionConfig: {
        action: "phone",
        actions: {
          anchor: { anchor: "62c400323390fb000dedbb39" },
          phone: { url: "9955590499" },
        },
      },
      style: { fontWeight: "bold" },
      iconEnabled: true,
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M90.1,75.1l-0.5-1c-1.4-3.3-18.6-8.3-20-8.4l-1.1,0.1c-2.1,0.4-4.4,2.3-8.9,6.2c-0.9,0.8-2.1,1-3.2,0.4  c-5.9-3.3-13.1-9.9-16.7-13.9c-3.9-4.3-8.6-11.4-10.8-17.1c-0.4-1.1,0-2.3,0.8-3.1c5.1-4.6,7.3-6.8,7.5-9.2c0.1-1.4-2.9-19.1-6-20.8  l-0.9-0.6c-2-1.3-5-3.2-8.3-2.5c-0.8,0.2-1.6,0.5-2.3,0.9C17.5,7.5,12,11.3,9.5,16.2C8,19.3,7.3,47.4,28.3,71.1  c20.8,23.5,46.5,24.5,50.3,23.7l0.1,0l0.3-0.1c5.2-1.9,9.6-6.8,11.3-8.9C93.4,82.1,91.3,77.6,90.1,75.1z"></path></svg>',
        id: "52971",
        platform: null,
        preview: "https://static.thenounproject.com/png/52971-200.png",
        source: "noun",
        resourceRef: null,
      },
      iconAlignment: "left",
      type: "link",
    },
  }
);
blockJsonp(
  "5d28949bc61a8f00232f5f47",
  __views["691e9e34e116086faaf4b878e3bba8d2"],
  {
    title: {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Free Lessons</span>',
      type: "headingLg",
      tagName: "h2",
    },
    subtitle: {
      content: "Download free preparation lessons from the best universities!",
      type: "subtitle",
      tagName: "p",
    },
    collection: {
      columnsCount: 2,
      contentAlign: "left",
      verticalAlign: "top",
      items: [
        {
          id: "b705ea5c-e4ab-4277-8e56-3b46e6b1a02d",
          item_heading: { content: "Visa Help", type: "heading", tagName: "p" },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "rgb(43, 114, 88)",
            image: {},
            type: "color",
            colorType: "color",
            ownColor: "rgb(43, 114, 88)",
          },
          "df54b2b4-2edd-434b-902b-666975303c7b": {
            content:
              '<span style="color: rgba(255,255,255,0.85);">We partner with foreign universities to offer students the best exclusive scholarships, free visa counseling, visa file preparation, error-free applications, and many more.</span>',
            type: "text",
            tagName: "p",
          },
          "bd258a71-8c31-4188-87b4-b5014130e688": {
            textValue: "Learn More",
            type: "primary",
            style: { fontWeight: "bold" },
            actionConfig: {
              action: "link",
              actions: {
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
          "d22dd8fc-a363-401d-873a-8c390cf7bb2b": {
            size: "md",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 62 62" style="enable-background:new 0 0 62 62;" xml:space="preserve"><g><path d="M18,26c-3.259,0-5.914,2.613-5.993,5.854L4,34.256V39h8.809l1.103,8.09L8,49.307V54h6.923c0.418,1.172,1.538,2,2.822,2   h0.509c1.284,0,2.404-0.828,2.822-2H28v-4.693l-5.912-2.217L23.191,39H32v-4.744l-8.007-2.402C23.914,28.613,21.259,26,18,26z    M6,37v-1.256l6.115-1.834L12.536,37H6z M10,50.693l4.189-1.571L14.582,52H10V50.693z M19.245,53.135   C19.178,53.628,18.752,54,18.254,54h-0.509c-0.498,0-0.923-0.372-0.991-0.865l-2.718-19.934C14.012,33.021,14,32.841,14,32.661V32   c0-2.206,1.794-4,4-4s4,1.794,4,4v0.661c0,0.181-0.012,0.361-0.037,0.541L19.245,53.135z M26,50.693V52h-4.582l0.392-2.878   L26,50.693z M30,37h-6.536l0.421-3.09L30,35.744V37z"></path><circle cx="18" cy="31" r="1"></circle><polygon points="46.707,19.707 45.293,18.293 40,23.586 38.707,22.293 37.293,23.707 40,26.414  "></polygon><path d="M55,40h-5.114C57.03,36.645,62,29.401,62,21C62,9.42,52.58,0,41,0c-9.122,0-16.883,5.857-19.775,14H4c-2.206,0-4,1.794-4,4   v40c0,2.206,1.794,4,4,4h28c1.474,0,2.75-0.81,3.444-2H55c1.654,0,3-1.346,3-3V43C58,41.346,56.654,40,55,40z M55,42   c0.551,0,1,0.449,1,1v1H36v-2H55z M41,2c1.36,0,3.301,2.514,4.543,8h-9.087C37.699,4.514,39.64,2,41,2z M59.949,20h-8   c-0.3-3.306-2.067-6.189-4.645-8h10.422C59.025,14.403,59.798,17.12,59.949,20z M41,40c-1.605,0-3.831-3.126-5-9.099v-0.103   C37.537,31.586,39.236,32,41,32h4.543C44.301,37.485,42.36,40,41,40z M47.305,30c2.577-1.811,4.345-4.694,4.645-8h8   c-0.151,2.88-0.924,5.597-2.222,8H47.305z M34.695,12c-2.577,1.811-4.345,4.694-4.645,8h-8c0.151-2.88,0.924-5.597,2.222-8H34.695z    M41,12c4.962,0,9,4.038,9,9s-4.038,9-9,9c-1.802,0-3.519-0.529-5-1.523V24c0-2.186-1.764-3.962-3.942-3.994   C32.555,15.51,36.374,12,41,12z M37.219,39.611c-0.41-0.083-0.816-0.18-1.219-0.29V37.55   C36.378,38.336,36.787,39.021,37.219,39.611z M44.68,39.635c1.198-1.704,2.194-4.292,2.907-7.635h8.876   C53.696,35.878,49.521,38.681,44.68,39.635z M56.463,10h-8.875c-0.714-3.344-1.709-5.932-2.908-7.635   C49.521,3.319,53.696,6.122,56.463,10z M37.32,2.365C36.122,4.068,35.126,6.656,34.412,10h-8.875   C28.304,6.122,32.479,3.319,37.32,2.365z M4,16h16.627c-0.317,1.292-0.511,2.628-0.576,4H4c-1.103,0-2-0.897-2-2S2.897,16,4,16z    M34,58c0,1.103-0.897,2-2,2H4c-1.103,0-2-0.897-2-2V21.463C2.589,21.805,3.272,22,4,22h28c1.103,0,2,0.897,2,2V58z M55,58H36V46   h20v11C56,57.551,55.551,58,55,58z"></path><path d="M52,50h-2c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2v-2C54,50.897,53.103,50,52,50z M52,54h-2   l-0.001-2H50h2V54z"></path><path d="M44,50h-2c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c1.103,0,2-0.897,2-2v-2C46,50.897,45.103,50,44,50z M44,54h-2   l-0.001-2H42h2V54z"></path></g></svg>',
            id: "4295836",
            platform: null,
            preview: "https://static.thenounproject.com/png/4295836-200.png",
            source: "noun",
            resourceRef: null,
            background: {
              color: "dark-shade-color?setAlpha=0.1",
              type: "color",
              colorType: "color",
              ownColor: "dark-shade-color?setAlpha=0.1",
            },
          },
        },
        {
          id: "e79d95e0-459d-4bb6-8b13-562d427e78a3",
          item_heading: {
            content: "Scholarship Guidance",
            type: "heading",
            tagName: "p",
          },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "rgb(70, 107, 184)",
            image: {},
            type: "color",
            colorType: "color",
            ownColor: "rgb(70, 107, 184)",
          },
          "df54b2b4-2edd-434b-902b-666975303c7b": {
            content:
              '<span style="color: rgba(255,255,255,0.85);">Due to our exclusive sources, we can update scholarships as soon as they become available. We can also help our clients with managing their finances for education abroad.</span>',
            type: "text",
            tagName: "p",
          },
          "bd258a71-8c31-4188-87b4-b5014130e688": {
            textValue: "Learn More",
            type: "primary",
            style: { fontWeight: "bold" },
            actionConfig: {
              action: "link",
              actions: {
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
          "d22dd8fc-a363-401d-873a-8c390cf7bb2b": {
            size: "md",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="0px" y="0px"><g><path d="M18.73242,238.02051l64,56A7.99716,7.99716,0,0,0,88,296H224v16H128a7.99716,7.99716,0,0,0-5.26758,1.97949l-64,56a7.99889,7.99889,0,0,0,0,12.041l64,56A7.99716,7.99716,0,0,0,128,440h96v48a8.00039,8.00039,0,0,0,8,8h48a8.00039,8.00039,0,0,0,8-8V360H424a7.99716,7.99716,0,0,0,5.26758-1.97949l64-56a7.99889,7.99889,0,0,0,0-12.041l-64-56A7.99716,7.99716,0,0,0,424,232H288V152.9834l7.71729-30.86939A23.97674,23.97674,0,0,0,288,81.37622V59.69482A32.01249,32.01249,0,0,0,304,32V24a8.00039,8.00039,0,0,0-8-8H216a8.00039,8.00039,0,0,0-8,8v8a32.012,32.012,0,0,0,16,27.69482v21.6814a23.97674,23.97674,0,0,0-7.71729,40.73779L224,152.9834V168H88a7.99716,7.99716,0,0,0-5.26758,1.97949l-64,56a7.99889,7.99889,0,0,0,0,12.041ZM131.00586,424,76.14844,376l54.85742-48H224v96ZM238.24609,144l-4-16h43.50782l-4,16ZM240,480V160h32V480ZM420.99414,248l54.85742,48-54.85742,48H288V248ZM288,32a16.01833,16.01833,0,0,1-16,16H240a16.01833,16.01833,0,0,1-16-16ZM272,64V80H240V64ZM232,96h48a8,8,0,0,1,0,16H232a8,8,0,0,1,0-16ZM91.00586,184H224v96H91.00586L36.14844,232Z"></path><rect x="104" y="224" width="16" height="16"></rect><rect x="136" y="224" width="48" height="16"></rect><rect x="360" y="288" width="48" height="16"></rect><rect x="320" y="288" width="24" height="16"></rect><rect x="136" y="368" width="16" height="16"></rect><rect x="168" y="368" width="32" height="16"></rect></g></svg>',
            id: "3308594",
            platform: null,
            preview: "https://static.thenounproject.com/png/3308594-200.png",
            source: "noun",
            resourceRef: null,
            background: {
              color: "dark-shade-color?setAlpha=0.1",
              type: "color",
              colorType: "color",
              ownColor: "dark-shade-color?setAlpha=0.1",
            },
          },
        },
        {
          id: "1f2b6fcf-2905-4c81-9b3b-7da8763e2c88",
          item_heading: {
            content:
              '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Study Abroad</span>',
            type: "heading",
            tagName: "p",
          },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "rgb(255, 219, 73)",
            image: {},
            type: "color",
            colorType: "color",
            ownColor: "rgb(255, 219, 73)",
          },
          "df54b2b4-2edd-434b-902b-666975303c7b": {
            content:
              "Our one-to-one counseling can help you pick the right courses for your future career, select a country that suits your personal and financial needs the best.",
            type: "text",
            tagName: "p",
          },
          "bd258a71-8c31-4188-87b4-b5014130e688": {
            textValue: "Learn More",
            type: "primary-alt",
            style: { fontWeight: "bold" },
            actionConfig: {
              action: "link",
              actions: {
                link: {
                  pageId: "62c294594d2af2000e80d78e",
                  categoryLink: null,
                },
              },
            },
          },
          "d22dd8fc-a363-401d-873a-8c390cf7bb2b": {
            size: "md",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"><g><path d="M35.42147,4.26416C35.42147,2.46436,33.9576,1,32.15779,1H4.80818c-1.7998,0-3.26465,1.46436-3.26465,3.26416   c0.00205,31.27829-0.01758,35.2963,0.01465,35.55664c0.19336,2.52344,2.41699,4.50049,5.06055,4.50049h1.80762v3.30176   c0,0.41504,0.25684,0.78711,0.64453,0.93457c0.11523,0.04395,0.23633,0.06543,0.35547,0.06543   c0.28027,0,0.55371-0.11768,0.74707-0.33496l2.30371-2.58838l2.51074,2.61572c0.28418,0.29541,0.71777,0.38867,1.09473,0.23535   c0.37891-0.15234,0.62695-0.51953,0.62695-0.92773v-3.30176h15.44824c1.7998,0,3.26367-1.46436,3.26367-3.26416v-5.46777   c0-0.00043-0.00024-0.00079-0.00024-0.00079c0-0.00085,0.00024-0.00122,0.00024-0.00165V4.26416z M33.42147,4.26416v30.32275   H9.29451V3h22.86328C32.85506,3,33.42147,3.56689,33.42147,4.26416z M3.54354,4.26416C3.54354,3.56689,4.11092,3,4.80818,3h2.48633   v31.58691H6.40389c-1.02535,0-2.12072,0.38958-2.86035,0.93164V4.26416z M14.70955,45.1377l-1.53906-1.60303   c-0.18945-0.19678-0.44922-0.30762-0.72168-0.30762c-0.00586,0-0.0127,0-0.01855,0   c-0.2793,0.00537-0.54297,0.12695-0.72852,0.33496l-1.27539,1.43311v-1.67383v-2.87158h4.2832v2.87158V45.1377z M33.42147,41.05713   c0,0.69727-0.56641,1.26416-1.26367,1.26416H16.70955v-2.87158c0-0.55225-0.44727-1-1-1h-6.2832c-0.55273,0-1,0.44775-1,1v2.87158   H6.61873c-1.60547,0-2.95215-1.16553-3.07031-2.69141c-0.00659-0.06165-0.00488-0.1228-0.00464-0.18445   c0.0009-1.54769,1.26055-2.85608,2.86011-2.85608h27.01758V41.05713z"></path><path d="M17.96248,12.19775h6.79199c0.55273,0,1-0.44775,1-1s-0.44727-1-1-1h-6.79199c-0.55273,0-1,0.44775-1,1   S17.40975,12.19775,17.96248,12.19775z"></path><path d="M14.14119,17.43311h14.43359c0.55273,0,1-0.44775,1-1s-0.44727-1-1-1H14.14119c-0.55273,0-1,0.44775-1,1   S13.58846,17.43311,14.14119,17.43311z"></path><path d="M47.46053,23.70703c0.55273,0,1-0.44775,1-1v-8.39063c0-2.23364-1.57666-4.10077-3.67383-4.56073V6.34424   c0-0.55225-0.44727-1-1-1h-5.45508c-0.55273,0-1,0.44775-1,1c0,8.71549,0,26.96891,0,34.71289   c0,0.34861-0.01566,0.08477,2.79688,7.30859C40.27889,48.74854,40.64803,49,41.05916,49s0.78027-0.25146,0.93066-0.63428   c2.85759-7.33954,2.79688-6.95726,2.79688-7.30859c0-9.45188,0-17.95778,0-29.21692   c0.97974,0.39716,1.67383,1.35559,1.67383,2.4762v8.39063C46.46053,23.25928,46.90779,23.70703,47.46053,23.70703z    M39.33162,30.7959h3.45508v8.43457h-3.45508V30.7959z M39.33162,25.54785h3.45508v3.24805h-3.45508V25.54785z M42.7867,7.34424   v16.20361h-3.45508V7.34424H42.7867z M39.4742,41.23047h3.16992l-1.58496,4.03467L39.4742,41.23047z"></path></g></svg>',
            id: "2473393",
            platform: null,
            preview: "https://static.thenounproject.com/png/2473393-200.png",
            source: "noun",
            resourceRef: null,
            fill: "dark-shade-color",
            background: {
              color: "brand-color",
              type: "color",
              colorType: "color",
            },
          },
        },
      ],
      gap: 25,
      itemsAlign: "left",
      columnSize: 12,
      style: { preset: "none" },
      fullWidth: false,
      background: {
        id: "monochrome",
        colors: { background: { type: "color", color: "light-shade-color" } },
      },
      type: "slider",
      slider: {
        arrows: true,
        dots: false,
        infinite: true,
        controlsColor: null,
      },
      paddingLeft: 40,
      paddingRight: 40,
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": { original: true, children: ["0_0_0_0_0", "0_0_0_0_1"] },
        "0_0_0_0_0": {
          original: true,
          children: [
            "0_0_0_0_0_0",
            "29009e43-85e4-499e-8734-075ccae4b13f",
            "0_0_0_0_0_1",
            "76299717-3a7a-460e-bfe4-7efd5907ab6e",
            "0fe7b3cf-4a85-48bc-874e-d08e7cd7de4e",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_0_0_0_1": { original: true },
        "0_0_0_0_1": {
          original: true,
          children: [
            "d22dd8fc-a363-401d-873a-8c390cf7bb2b",
            "0_0_0_0_1_1",
            "df54b2b4-2edd-434b-902b-666975303c7b",
            "c5d6d09c-5a9c-488e-bdb3-5564b5fa879b",
          ],
        },
        "0_0_0_0_1_0": { original: true },
        "0_0_0_0_1_1": { original: true },
        "df54b2b4-2edd-434b-902b-666975303c7b": { type: "Text" },
        "29009e43-85e4-499e-8734-075ccae4b13f": { type: "Divider" },
        "c5d6d09c-5a9c-488e-bdb3-5564b5fa879b": {
          type: "ButtonsGroup",
          children: ["bd258a71-8c31-4188-87b4-b5014130e688"],
        },
        "bd258a71-8c31-4188-87b4-b5014130e688": { type: "Button" },
        "d22dd8fc-a363-401d-873a-8c390cf7bb2b": { type: "Icon" },
        "0fe7b3cf-4a85-48bc-874e-d08e7cd7de4e": { type: "Text" },
        "76299717-3a7a-460e-bfe4-7efd5907ab6e": { type: "IconList" },
      },
    },
    "5c6a55f1-48f5-4878-97a0-aedf7c83dcb2": {
      textValue: "Learn more",
      type: "secondary",
    },
    background: {
      type: "color",
      color: "rgb(249, 249, 249)",
      image: {},
      ownColor: "rgb(249, 249, 249)",
    },
    "f0192d69-cf7a-4e5b-9f40-cd4866fdda23": {
      content:
        'Economy <span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">→</span>',
      type: "heading",
    },
    "f573efd3-cbf0-46cf-967d-017b6142b8aa": {
      content:
        'English <span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">→</span>',
      type: "heading",
    },
    "3ddd2600-b1bd-40e0-9a02-57c1541022ad": {
      content:
        'Math <span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">→</span>',
      type: "heading",
    },
    "cbd588a9-1a55-4f51-9bba-9db2bb7efd58": {
      content: 'Physics <span style="color: rgb(43,114,88);">→</span>',
      type: "heading",
    },
    "29009e43-85e4-499e-8734-075ccae4b13f": {
      color: "brand-color",
      size: { height: "5", width: 15 },
    },
    area: {
      background: {
        color: "light-shade-color?setAlpha=0",
        image: {},
        type: "none",
        colorType: "color",
        ownColor: "light-shade-color?setAlpha=0",
      },
      align: "left",
      verticalAlign: "top",
      itemsAlign: "center",
      columnSize: 12,
      style: { preset: "card" },
      paddingLeft: 30,
      paddingRight: 30,
    },
    "1d5398ed-aff1-407f-a21b-0778f8700d83": {
      content:
        'Physics <span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);">→</span>',
      type: "heading",
    },
    "0fe7b3cf-4a85-48bc-874e-d08e7cd7de4e": {
      content:
        '<br><span style="display: block;"><a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="font-weight: bold;"><u>Watch All Lessons</u></span></a></span>',
      type: "text",
      tagName: "p",
    },
    "76299717-3a7a-460e-bfe4-7efd5907ab6e": {
      collection: {
        items: [
          {
            id: "7266dd00-32e9-4b1e-bc2b-64c3e1fb604c",
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M21.182,72.947c-2.501,0-4.529-2.027-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529h13.034   c0.611-2.771,1.533-5.43,2.741-7.926H21.182c-2.501,0-4.529-2.028-4.529-4.529s2.028-4.529,4.529-4.529h22.021   c2.787-2.967,6.065-5.461,9.708-7.36h-31.73c-2.501,0-4.529-2.028-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,0.513-0.105,0.997-0.26,1.457c2.721-0.656,5.557-1.011,8.475-1.011   c1.854,0,3.672,0.142,5.449,0.409V9.059C75.043,4.056,70.988,0,65.984,0H12.059C7.056,0,3,4.056,3,9.059v71.903   c0,5.003,4.056,9.059,9.059,9.059h26.297c-2.97-5.042-4.751-10.862-4.965-17.073H21.182z M21.182,14.634H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,2.501-2.027,4.529-4.529,4.529H21.182c-2.501,0-4.529-2.028-4.529-4.529   C16.653,16.662,18.681,14.634,21.182,14.634z"></path><path fill="#000000" d="M69.595,100c15.633,0,28.308-12.677,28.308-28.308c0-15.636-12.675-28.308-28.308-28.308   S41.286,56.057,41.286,71.692C41.286,87.323,53.962,100,69.595,100z M55.292,69.103c0.605-0.623,1.404-0.936,2.211-0.936   c0.773,0,1.545,0.289,2.139,0.869l6.838,6.635V58.172c0-1.7,1.383-3.079,3.08-3.079c1.699,0,3.076,1.379,3.076,3.079v17.499   l6.838-6.635c1.219-1.181,3.166-1.154,4.352,0.066c1.182,1.219,1.154,3.167-0.066,4.351L71.7,85.149   c-1.193,1.159-3.088,1.159-4.285,0L55.36,73.453C54.138,72.268,54.108,70.321,55.292,69.103z"></path></g></svg>',
              id: "22557",
              platform: null,
              preview: "https://static.thenounproject.com/png/22557-200.png",
              source: "noun",
              resourceRef: null,
              fill: "brand-color",
            },
            text: {
              type: "text",
              content: '<span style="color: rgb(135,135,135);">Economy</span>',
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "2f6c9b5e-7662-4b91-81df-d3b6ca32ef26",
            icon: {
              resourceRef: null,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M21.182,72.947c-2.501,0-4.529-2.027-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529h13.034   c0.611-2.771,1.533-5.43,2.741-7.926H21.182c-2.501,0-4.529-2.028-4.529-4.529s2.028-4.529,4.529-4.529h22.021   c2.787-2.967,6.065-5.461,9.708-7.36h-31.73c-2.501,0-4.529-2.028-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,0.513-0.105,0.997-0.26,1.457c2.721-0.656,5.557-1.011,8.475-1.011   c1.854,0,3.672,0.142,5.449,0.409V9.059C75.043,4.056,70.988,0,65.984,0H12.059C7.056,0,3,4.056,3,9.059v71.903   c0,5.003,4.056,9.059,9.059,9.059h26.297c-2.97-5.042-4.751-10.862-4.965-17.073H21.182z M21.182,14.634H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,2.501-2.027,4.529-4.529,4.529H21.182c-2.501,0-4.529-2.028-4.529-4.529   C16.653,16.662,18.681,14.634,21.182,14.634z"></path><path fill="#000000" d="M69.595,100c15.633,0,28.308-12.677,28.308-28.308c0-15.636-12.675-28.308-28.308-28.308   S41.286,56.057,41.286,71.692C41.286,87.323,53.962,100,69.595,100z M55.292,69.103c0.605-0.623,1.404-0.936,2.211-0.936   c0.773,0,1.545,0.289,2.139,0.869l6.838,6.635V58.172c0-1.7,1.383-3.079,3.08-3.079c1.699,0,3.076,1.379,3.076,3.079v17.499   l6.838-6.635c1.219-1.181,3.166-1.154,4.352,0.066c1.182,1.219,1.154,3.167-0.066,4.351L71.7,85.149   c-1.193,1.159-3.088,1.159-4.285,0L55.36,73.453C54.138,72.268,54.108,70.321,55.292,69.103z"></path></g></svg>',
              id: "22557",
              platform: null,
              source: "myIcon",
              fill: "brand-color",
            },
            text: {
              type: "text",
              content: '<span style="color: rgb(135,135,135);">Math</span>',
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "400ff4d5-e658-4b89-a084-d979cf47e3fb",
            icon: {
              resourceRef: null,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M21.182,72.947c-2.501,0-4.529-2.027-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529h13.034   c0.611-2.771,1.533-5.43,2.741-7.926H21.182c-2.501,0-4.529-2.028-4.529-4.529s2.028-4.529,4.529-4.529h22.021   c2.787-2.967,6.065-5.461,9.708-7.36h-31.73c-2.501,0-4.529-2.028-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,0.513-0.105,0.997-0.26,1.457c2.721-0.656,5.557-1.011,8.475-1.011   c1.854,0,3.672,0.142,5.449,0.409V9.059C75.043,4.056,70.988,0,65.984,0H12.059C7.056,0,3,4.056,3,9.059v71.903   c0,5.003,4.056,9.059,9.059,9.059h26.297c-2.97-5.042-4.751-10.862-4.965-17.073H21.182z M21.182,14.634H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,2.501-2.027,4.529-4.529,4.529H21.182c-2.501,0-4.529-2.028-4.529-4.529   C16.653,16.662,18.681,14.634,21.182,14.634z"></path><path fill="#000000" d="M69.595,100c15.633,0,28.308-12.677,28.308-28.308c0-15.636-12.675-28.308-28.308-28.308   S41.286,56.057,41.286,71.692C41.286,87.323,53.962,100,69.595,100z M55.292,69.103c0.605-0.623,1.404-0.936,2.211-0.936   c0.773,0,1.545,0.289,2.139,0.869l6.838,6.635V58.172c0-1.7,1.383-3.079,3.08-3.079c1.699,0,3.076,1.379,3.076,3.079v17.499   l6.838-6.635c1.219-1.181,3.166-1.154,4.352,0.066c1.182,1.219,1.154,3.167-0.066,4.351L71.7,85.149   c-1.193,1.159-3.088,1.159-4.285,0L55.36,73.453C54.138,72.268,54.108,70.321,55.292,69.103z"></path></g></svg>',
              id: "22557",
              platform: null,
              source: "myIcon",
              fill: "brand-color",
            },
            text: {
              type: "text",
              content: '<span style="color: rgb(135,135,135);">English</span>',
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "eee5e313-6b2f-4ef8-bafa-5066d5f78148",
            icon: {
              resourceRef: null,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M21.182,72.947c-2.501,0-4.529-2.027-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529h13.034   c0.611-2.771,1.533-5.43,2.741-7.926H21.182c-2.501,0-4.529-2.028-4.529-4.529s2.028-4.529,4.529-4.529h22.021   c2.787-2.967,6.065-5.461,9.708-7.36h-31.73c-2.501,0-4.529-2.028-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,0.513-0.105,0.997-0.26,1.457c2.721-0.656,5.557-1.011,8.475-1.011   c1.854,0,3.672,0.142,5.449,0.409V9.059C75.043,4.056,70.988,0,65.984,0H12.059C7.056,0,3,4.056,3,9.059v71.903   c0,5.003,4.056,9.059,9.059,9.059h26.297c-2.97-5.042-4.751-10.862-4.965-17.073H21.182z M21.182,14.634H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,2.501-2.027,4.529-4.529,4.529H21.182c-2.501,0-4.529-2.028-4.529-4.529   C16.653,16.662,18.681,14.634,21.182,14.634z"></path><path fill="#000000" d="M69.595,100c15.633,0,28.308-12.677,28.308-28.308c0-15.636-12.675-28.308-28.308-28.308   S41.286,56.057,41.286,71.692C41.286,87.323,53.962,100,69.595,100z M55.292,69.103c0.605-0.623,1.404-0.936,2.211-0.936   c0.773,0,1.545,0.289,2.139,0.869l6.838,6.635V58.172c0-1.7,1.383-3.079,3.08-3.079c1.699,0,3.076,1.379,3.076,3.079v17.499   l6.838-6.635c1.219-1.181,3.166-1.154,4.352,0.066c1.182,1.219,1.154,3.167-0.066,4.351L71.7,85.149   c-1.193,1.159-3.088,1.159-4.285,0L55.36,73.453C54.138,72.268,54.108,70.321,55.292,69.103z"></path></g></svg>',
              id: "22557",
              platform: null,
              source: "myIcon",
              fill: "brand-color",
            },
            text: {
              type: "text",
              content: '<span style="color: rgb(135,135,135);">Physics</span>',
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "937b90e2-7286-44d5-bdbd-415b0cd03562",
            icon: {
              resourceRef: null,
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="#000000" d="M21.182,72.947c-2.501,0-4.529-2.027-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529h13.034   c0.611-2.771,1.533-5.43,2.741-7.926H21.182c-2.501,0-4.529-2.028-4.529-4.529s2.028-4.529,4.529-4.529h22.021   c2.787-2.967,6.065-5.461,9.708-7.36h-31.73c-2.501,0-4.529-2.028-4.529-4.529c0-2.501,2.028-4.529,4.529-4.529H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,0.513-0.105,0.997-0.26,1.457c2.721-0.656,5.557-1.011,8.475-1.011   c1.854,0,3.672,0.142,5.449,0.409V9.059C75.043,4.056,70.988,0,65.984,0H12.059C7.056,0,3,4.056,3,9.059v71.903   c0,5.003,4.056,9.059,9.059,9.059h26.297c-2.97-5.042-4.751-10.862-4.965-17.073H21.182z M21.182,14.634H56.85   c2.502,0,4.529,2.028,4.529,4.529c0,2.501-2.027,4.529-4.529,4.529H21.182c-2.501,0-4.529-2.028-4.529-4.529   C16.653,16.662,18.681,14.634,21.182,14.634z"></path><path fill="#000000" d="M69.595,100c15.633,0,28.308-12.677,28.308-28.308c0-15.636-12.675-28.308-28.308-28.308   S41.286,56.057,41.286,71.692C41.286,87.323,53.962,100,69.595,100z M55.292,69.103c0.605-0.623,1.404-0.936,2.211-0.936   c0.773,0,1.545,0.289,2.139,0.869l6.838,6.635V58.172c0-1.7,1.383-3.079,3.08-3.079c1.699,0,3.076,1.379,3.076,3.079v17.499   l6.838-6.635c1.219-1.181,3.166-1.154,4.352,0.066c1.182,1.219,1.154,3.167-0.066,4.351L71.7,85.149   c-1.193,1.159-3.088,1.159-4.285,0L55.36,73.453C54.138,72.268,54.108,70.321,55.292,69.103z"></path></g></svg>',
              id: "22557",
              platform: null,
              source: "myIcon",
              fill: "brand-color",
            },
            text: {
              type: "text",
              content:
                '<span style="color: rgb(135,135,135);">Chemistry</span>',
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
  "5d3033e02ad46900230d6465",
  __views["92276964b6c848b2f0cdf8b73b5650de"],
  {
    header_row: {},
    content_row: {},
    footer_row: {},
    header_col_1: { align: "center" },
    footer_col_1: { align: "center" },
    header_title: {
      content: "Our Projects",
      type: "blockTitle",
      tagName: "h2",
    },
    header_subtitle: {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta blanditiis similique animi.",
      type: "subtitle",
    },
    collection: {
      columnsCount: 1,
      contentAlign: "left",
      verticalAlign: "middle",
      gap: 0,
      paddingTop: 120,
      paddingBottom: 120,
      paddingLeft: 120,
      paddingRight: 120,
      items: [
        {
          id: "0841331e-2690-468f-87df-fa3a3b616134",
          item_heading: {
            content: "Feedback",
            type: "blockTitle",
            tagName: "h2",
          },
          item_category: { content: "- 07 -", type: "small", tagName: "p" },
          item_body: {
            content:
              '<span style="color: rgba(255,255,255,0.85);">"I always dreamed to explore Australia and to study there. With the help of EasyLearn, it turned out to be much easier than I thought. These guys helped me with so many things! Now I\'m a really happy student in Canberra."</span>',
            type: "quote",
            tagName: "h2",
          },
          item_image: {
            type: "image",
            video: {},
            image: {
              alt: "Heading photo",
              size: {
                "min-width: 992px": 1560,
                "min-width: 768px": 1290,
                "min-width: 480px": 998,
                "min-width: 320px": 624,
              },
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62c292e934f6b5000db5be3e",
              position: { x: 50, y: 43.896 },
              fitBy: "contain",
              scale: 1,
            },
            customClassNames: [],
          },
          item_button: { textValue: "Read more", type: "link" },
          background: {
            color: "rgb(43, 114, 88)",
            image: {
              overlay: {
                enabled: false,
                saved: {
                  type: "color",
                  color: "dark-shade-color",
                  opacity: 0.56,
                },
                touched: true,
              },
              position: { cover: "85.1% 0%" },
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62c28b47dce4ef000d91e8c4",
              optimize: false,
            },
            type: "image",
            colorType: "color",
            ownColor: "rgb(43, 114, 88)",
          },
          "f116be9d-2f04-41c0-bc5c-a24eb27b7506": {
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
                  id: "759cc308-0be7-41c3-b7c1-3b2d5594ad7f",
                  itemImage: {
                    media: {
                      type: "image",
                      video: {},
                      image: {
                        alt: "Illustration",
                        resourceRef:
                          "res/62be8ca3462df9000d36ed88/62c5814ac53152000f392cb6",
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
                  itemTextTop: { content: "Daniel Kho", type: "heading" },
                  itemPrice: { content: "75$", type: "heading" },
                  itemTextBottom: {
                    content: "<em>Bachelor of Architecture</em>",
                    type: "text",
                  },
                  background: { type: "none" },
                },
              ],
            },
          },
          "78797156-bf0a-4362-970a-5b911f2add81": {
            color: null,
            desktopHeight: 20,
            mobileHeight: 0,
          },
          "3a1ba519-451c-4d65-ad19-c0def128f81e": {
            color: null,
            desktopHeight: 20,
            mobileHeight: 0,
          },
        },
        {
          id: "d6ca4e58-6251-4f1e-a796-1b04c4c5a9dc",
          item_heading: {
            content: "Feedback",
            type: "blockTitle",
            tagName: "h2",
          },
          item_category: { content: "- 07 -", type: "small", tagName: "p" },
          item_body: {
            content:
              '"I have always dreamed of Paris but never seriously considered going to university there. My friend told me about EasyLearn, and then I found out that studying abroad is not that expensive or difficult at all."',
            type: "quote",
            tagName: "h2",
          },
          item_image: {
            type: "image",
            video: {},
            image: {
              alt: "Heading photo",
              size: {
                "min-width: 992px": 1560,
                "min-width: 768px": 1290,
                "min-width: 480px": 998,
                "min-width: 320px": 624,
              },
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62c293e900f3ce000d372bf1",
              fitBy: "contain",
              scale: 1,
              position: { x: 50, y: 45.412 },
            },
            customClassNames: [],
          },
          item_button: { textValue: "Read more", type: "link" },
          background: {
            color: "rgb(43, 114, 88)",
            image: {
              overlay: {
                enabled: false,
                saved: {
                  type: "color",
                  color: "dark-shade-color",
                  opacity: 0.56,
                },
                touched: true,
              },
              position: { cover: "83.85% 0%" },
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62c28be900f3ce000d36d672",
            },
            type: "image",
            colorType: "color",
            ownColor: "rgb(43, 114, 88)",
          },
          "f116be9d-2f04-41c0-bc5c-a24eb27b7506": {
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
                  id: "759cc308-0be7-41c3-b7c1-3b2d5594ad7f",
                  itemImage: {
                    media: {
                      type: "image",
                      video: {},
                      image: {
                        alt: "Illustration",
                        resourceRef:
                          "res/62be8ca3462df9000d36ed88/62c58149339c6b000e0fccbc",
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
                  itemTextTop: { content: "Helen Smorr", type: "heading" },
                  itemPrice: { content: "75$", type: "heading" },
                  itemTextBottom: {
                    content: "<em>Bachelor of Management</em>",
                    type: "text",
                  },
                  background: { type: "none" },
                },
              ],
            },
          },
          "78797156-bf0a-4362-970a-5b911f2add81": {
            color: null,
            desktopHeight: 20,
            mobileHeight: 0,
          },
          "3a1ba519-451c-4d65-ad19-c0def128f81e": {
            color: null,
            desktopHeight: 20,
            mobileHeight: 0,
          },
        },
      ],
      itemsAlign: "left",
      columnSize: 12,
      style: { preset: "card" },
      fullWidth: true,
      type: "slider",
      slider: { arrows: true, dots: false, infinite: true, fade: true },
    },
    footer_button: { textValue: "Learn more", type: "secondary" },
    footer_button_additional: { textValue: "Button" },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_1"] },
        "0_0_0": { original: true, children: [] },
        "0_0_0_0": { original: true, children: [] },
        "0_0_0_0_0": { original: true, children: [] },
        "0_0_0_0_0_0": { original: true },
        "0_0_0_0_0_1": { original: true },
        "0_0_1": { original: true, children: ["0_0_1_0"] },
        "0_0_1_0": {
          original: true,
          children: [
            "78797156-bf0a-4362-970a-5b911f2add81",
            "0_0_1_0_0",
            "0_0_1_0_1",
            "0_0_1_0_2",
            "f116be9d-2f04-41c0-bc5c-a24eb27b7506",
            "3a1ba519-451c-4d65-ad19-c0def128f81e",
          ],
        },
        "0_0_1_0_0": { original: true },
        "0_0_1_0_1": { original: true },
        "0_0_1_0_2": { original: true },
        "0_0_1_0_3": { original: true, children: [] },
        "0_0_1_0_3_0": { original: true },
        "0_0_2": { original: true, children: [] },
        "0_0_2_0": { original: true, children: [] },
        "0_0_2_0_0": { original: true, children: [] },
        "0_0_2_0_0_0": { original: true, children: [] },
        "0_0_2_0_0_0_0": { original: true },
        "0_0_2_0_0_0_1": { original: true },
        "f116be9d-2f04-41c0-bc5c-a24eb27b7506": { type: "ListWithMedia" },
        "78797156-bf0a-4362-970a-5b911f2add81": { type: "Spacer" },
        "3a1ba519-451c-4d65-ad19-c0def128f81e": { type: "Spacer" },
      },
    },
    background: {
      type: "color",
      color: "light-shade-color",
      image: {},
      ownColor: "rgb(43, 114, 88)",
    },
  }
);
blockJsonp(
  "5d4d507c99604d0023dd65a2",
  __views["af1b44b8b0deb2a1bcd2796e67439293"],
  {
    image: {
      type: "image",
      video: {},
      image: {
        alt: "Image placeholder",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c554a71f21e4000e7a8b09",
        position: { x: 56.887, y: 50 },
      },
      customClassNames: [],
    },
    title: {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Destinations That We Offer You</span>',
      type: "blockTitle",
      tagName: "h2",
    },
    subtitle: {
      content:
        "Select the university wisely — it's a new chapter in your life.",
      type: "subtitle",
      tagName: "p",
    },
    area: {
      columnSize: 6,
      align: "left",
      verticalAlign: "top",
      itemsAlign: "center",
    },
    form: {
      fields: [
        {
          type: "name",
          id: "contactForm_name",
          title: "Name",
          placeholder: "",
          required: true,
        },
        {
          type: "phone",
          id: "contactForm_phoneNumber",
          title: "Phone number",
          placeholder: "",
          required: true,
        },
        {
          type: "email",
          id: "contactForm_email",
          title: "Email",
          placeholder: "",
          required: true,
        },
      ],
      submitButton: { title: "Request a quote" },
      className: "form",
      buttonClassName: "button button--size-md button--primary form__button",
    },
    map: {
      preset: "silver",
      height: "100%",
      center: { lat: 51.509572, lng: -0.134223 },
      zoom: 18,
      activeMarker: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
      disableDefaultUI: true,
      allowZoomOnScroll: false,
      markers: [
        {
          position: { lat: 51.509572, lng: -0.134223 },
          name: "Address",
          description: "This is marker description",
          address: "45 Rockefeller Plaza, New York, NY 10111, USA.",
          id: "2aceeb6f-623c-41f8-b0d3-6f0f085e8e48",
        },
      ],
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": {
          original: true,
          children: [
            "0ad4c7a1-a68f-4ab7-b051-d657b612d29b",
            "0_0_0_0",
            "0_0_0_1",
            "1868cf37-16ef-4d44-a0a8-f5c2bded5147",
            "e8a3346c-2817-4785-bd87-0aba854fc22a",
            "9c7ebf3e-69ae-4591-95ba-8f8b91157ef1",
            "994d971f-cef1-476d-9bc6-b1b8da95b07e",
          ],
        },
        "0_0_0_0": { original: true },
        "0_0_0_1": { original: true },
        "0_0_0_2": { original: true },
        "994d971f-cef1-476d-9bc6-b1b8da95b07e": {
          type: "ButtonsGroup",
          children: ["8e68d244-3ec8-4272-b8d8-0829df615f8b"],
        },
        "8e68d244-3ec8-4272-b8d8-0829df615f8b": { type: "Button" },
        "0ad4c7a1-a68f-4ab7-b051-d657b612d29b": { type: "Text" },
        "1868cf37-16ef-4d44-a0a8-f5c2bded5147": { type: "Text" },
        "e8a3346c-2817-4785-bd87-0aba854fc22a": { type: "IconList" },
        "9c7ebf3e-69ae-4591-95ba-8f8b91157ef1": { type: "Text" },
      },
    },
    "fa56f01a-40ee-433a-aa16-2eec0c687a50": {
      socials_label: { type: "heading", content: "Follow us:" },
      socials: {
        networks: [
          { id: "facebook", name: "Facebook", url: "https://facebook.com/" },
          { id: "instagram", name: "Instagram", url: "https://instagram.com/" },
          { id: "youtube", name: "YouTube", url: "https://youtube.com/" },
        ],
        target: "_blank",
      },
    },
    "4af388f3-3357-48c7-b7bf-51cc24f0db19": {
      textValue: "Learn more",
      type: "secondary",
    },
    "8e68d244-3ec8-4272-b8d8-0829df615f8b": {
      textValue: "Request a Quote",
      type: "primary",
      style: { fontWeight: "bold" },
      size: "lg",
      actionConfig: {
        action: "anchor",
        actions: { anchor: { anchor: "62c400323390fb000dedbb39" } },
      },
    },
    "2fa5cebe-6b33-4854-83a8-e5c20157409f": {
      socials_label: { type: "heading", content: "Follow us:" },
      socials: {
        shape: "circle",
        outer: true,
        links: [],
        size: 30,
        custom: false,
      },
    },
    "0ad4c7a1-a68f-4ab7-b051-d657b612d29b": {
      content: '<span style="font-weight: bold;">- 03 -</span>',
      type: "small",
      tagName: "p",
    },
    "1868cf37-16ef-4d44-a0a8-f5c2bded5147": {
      content:
        '<span style="color: rgb(135,135,135);">If you\'ve always dreamed of studying in a particular country, this is your chance. We already have happy students in such countries as:</span>',
      type: "text",
    },
    "e8a3346c-2817-4785-bd87-0aba854fc22a": {
      collection: {
        items: [
          {
            id: "251982e9-5ba4-4823-b36f-ef03d2ace212",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedc5a461063000e2e07f6",
            },
            text: { type: "text", content: "USA" },
            background: { image: {}, type: "none" },
          },
          {
            id: "8a0e557d-ac8a-48e5-95f1-bddab72c3eb4",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedc6ddcf79f00104d6bdc",
            },
            text: { type: "text", content: "Great Britain" },
            background: { image: {}, type: "none" },
          },
          {
            id: "34d4973c-9a8c-47a8-9f83-858d26ee3488",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedc7ef78b0f000e24b19a",
            },
            text: { type: "text", content: "Canada" },
            background: { image: {}, type: "none" },
          },
          {
            id: "b757bd4c-3eec-4f80-adc9-d419dc83f2ea",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedc9ff4a16a000ed3f169",
            },
            text: { type: "text", content: "Australia" },
            background: { image: {}, type: "none" },
          },
          {
            id: "0de1f2ca-1399-4978-89a5-abc5c0cba731",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bede8434f6b5000da1c297",
            },
            text: { type: "text", content: "New Zealand" },
            background: { image: {}, type: "none" },
          },
          {
            id: "b738e84a-e7dc-45b4-9503-b2d9e4fe796c",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/624306752507770022fc5c97/62441e70ca5fe20023051842",
            },
            text: { type: "text", content: "China" },
            background: { image: {}, type: "none" },
          },
          {
            id: "35a8f5fb-75cc-46aa-be41-42308fc11320",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedf0a7efc13000cfe5875",
            },
            text: { type: "text", content: "Germany" },
            background: { image: {}, type: "none" },
          },
          {
            id: "a26bd0a5-6f25-4c92-8e61-9633e7e532b4",
            icon: {
              svg: '<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm2.6464 3.6464L5 7.293 3.3536 5.6464l-.7072.7072L5 8.707l4.3536-4.3535-.7072-.7072z" fill="currentColor" fill-rule="evenodd"/></svg>',
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62bedee5461063000e2e1b6d",
            },
            text: { type: "text", content: "Austria" },
            background: { image: {}, type: "none" },
          },
        ],
      },
      private: { preset: "preset2" },
    },
    "9c7ebf3e-69ae-4591-95ba-8f8b91157ef1": {
      content:
        '<span style="color: rgb(135,135,135);">The list above is not full, of course. We collaborate with hundreds of universities in the leading countries of the world. Our managers arrange everything and everywhere, from visas to tickets and exams. You can get the full list of countries by contacting our specialists.</span>',
      type: "text",
    },
  }
);
blockJsonp(
  "5da71785e38e5200283b3143",
  __views["48d38e9e60eb906bd1fe647de3469a5c"],
  {
    __constructor__: {
      nodes: {
        0: {
          original: true,
          children: ["300fa1ae-0eac-4896-aafe-c27fdc4dd2f5"],
        },
        "300fa1ae-0eac-4896-aafe-c27fdc4dd2f5": {
          type: "Section",
          children: [
            "8424f704-891e-48cd-a62e-d914f7beecac",
            "b25875bc-d16b-427a-8d89-46b8373e1a16",
          ],
        },
        "b25875bc-d16b-427a-8d89-46b8373e1a16": {
          type: "SectionContent",
          children: ["15209dc0-0923-4c44-835f-cabbfdeaa610"],
        },
        "15209dc0-0923-4c44-835f-cabbfdeaa610": {
          type: "List",
          children: [
            "497750c2-f417-4b79-b175-3b1c53ffe9b5",
            "bf6fdc35-2606-4aec-8dd1-62a620eaf841",
            "2926c544-911e-43eb-81cb-38e859df6598",
          ],
        },
        "8424f704-891e-48cd-a62e-d914f7beecac": {
          type: "SectionHeader",
          children: ["ac0481b6-7e96-4165-9b02-257faac7b172"],
        },
        "ac0481b6-7e96-4165-9b02-257faac7b172": {
          type: "Row",
          children: ["222c9c61-6a55-48b2-9018-ceb6e7682eee"],
        },
        "222c9c61-6a55-48b2-9018-ceb6e7682eee": {
          type: "Column",
          children: [
            "e46ce9d0-37be-4e68-ab1a-d0fae79e7c30",
            "c50073c5-c3b7-4b09-ac48-998e8b27b2b0",
            "2d9b940e-bc4a-47a4-add9-c736d8fc2b1e",
          ],
        },
        "c50073c5-c3b7-4b09-ac48-998e8b27b2b0": { type: "Text" },
        "bf6fdc35-2606-4aec-8dd1-62a620eaf841": {
          type: "ListColumn",
          children: [
            "9eb2dc1e-dac7-4002-b741-6427b4aa9f79",
            "396d5499-dd67-4bc8-a05e-2550759bf947",
          ],
        },
        "497750c2-f417-4b79-b175-3b1c53ffe9b5": {
          type: "ListColumn",
          children: ["e174fe5b-993c-43bd-bfca-153305e896c7"],
        },
        "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": { type: "Text" },
        "2926c544-911e-43eb-81cb-38e859df6598": {
          type: "ListColumn",
          children: [
            "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7",
            "11b72e26-4b7f-4c19-8d33-d769ff6a35e1",
          ],
        },
        "2d9b940e-bc4a-47a4-add9-c736d8fc2b1e": { type: "Text" },
        "e174fe5b-993c-43bd-bfca-153305e896c7": { type: "ImageMask" },
        "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": { type: "Text" },
        "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": { type: "Text" },
        "e46ce9d0-37be-4e68-ab1a-d0fae79e7c30": { type: "Text" },
        "396d5499-dd67-4bc8-a05e-2550759bf947": { type: "Text" },
      },
    },
    "15209dc0-0923-4c44-835f-cabbfdeaa610": {
      items: [
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content:
              '<span style="display: block;">Harvard&nbsp;</span><span style="display: block;">University</span>',
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c55655beb95e000e64214d",
                fitBy: "contain",
                scale: 1,
                position: { x: 50, y: 50 },
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="color: rgb(135,135,135);">Harvard University is based in Cambridge and Boston, Massachusetts. It has an enrollment of over 20,000-degree candidates, including undergraduate, graduate, and professional students, and more than 360,000 alumni around the world.</span>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:https://www.harvard.edu" data-action="email" class="ui-link"><em>https://www.harvard.edu</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content: "University of Toronto",
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c5565088449a000d83a703",
                position: { x: 50, y: 0 },
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="color: rgb(135,135,135);">Founded in 1827, the University of Toronto has evolved into Canada’s leading educational institution, also focused on discovery and research. We are proud to be called one of the world\'s top in research, and we always strive to invent.</span>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:https://www.utoronto.ca" data-action="email" class="ui-link"><em>https://www.utoronto.ca</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content: "Australian National University",
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c55650cf23ca000dcf1c04",
                fitBy: "contain",
                scale: 0.93,
                position: { x: 50, y: 50 },
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="display: block;"><span style="color: rgb(135,135,135);">ANU is a world-leading university located in Australia’s capital. We focus mainly on research, believing it can be both an asset and an approach to education.</span></span><br>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:http://www.anu.edu.au" data-action="email" class="ui-link"><em>http://www.anu.edu.au</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content: "University of Auckland",
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c55651d1e607000fa7502b",
                fitBy: "contain",
                scale: 0.8925,
                position: { x: 50, y: 100 },
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="color: rgb(135,135,135);">Since its foundation in 1883, university has grown to become the leading research-led university in New Zealand. It is known for the excellence of tutoring and research, along with its service to local, national and international communities.</span>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:https://www.auckland.ac.nz" data-action="email" class="ui-link"><em>https://www.auckland.ac.nz</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content: "University of Cambridge",
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c556530a6bc1000ea5e482",
                fitBy: "contain",
                scale: 0.8775,
                position: { x: 50, y: 100 },
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="color: rgb(135,135,135);">The University of Cambridge has more than 18,000 students from all corners of the world, over 11,000 staff, 31 Colleges and 150 Departments, Faculties, Schools and other institutions. It focuses on high-class learning and growing new aspiring minds.</span>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:https://www.cam.ac.uk" data-action="email" class="ui-link"><em>https://www.cam.ac.uk</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
        {
          "bf6fdc35-2606-4aec-8dd1-62a620eaf841": { size: 3 },
          "497750c2-f417-4b79-b175-3b1c53ffe9b5": { size: 2 },
          "9eb2dc1e-dac7-4002-b741-6427b4aa9f79": {
            content:
              '<span style="display: block;">Peking&nbsp;</span><span style="display: block;">University</span>',
            type: "heading",
            tagName: "p",
          },
          "2926c544-911e-43eb-81cb-38e859df6598": { size: 7 },
          "e174fe5b-993c-43bd-bfca-153305e896c7": {
            media: {
              type: "image",
              video: {},
              image: {
                alt: "Illustration",
                resourceRef:
                  "res/62be8ca3462df9000d36ed88/62c556544d2af2000e9833a7",
              },
              customClassNames: [],
            },
            private: { preset: "regular", size: "md" },
          },
          "a087dec5-b53a-4c91-9fc5-d46c0cc24fd7": {
            content:
              '<span style="color: rgb(135,135,135);">Peking University is a comprehensive national university. Its campus, also known as "The Garden of Yan" ("Yan Yuan") is located in one of the Beijing suburbs, and its area is 2,743,532 square meters (or 274 hectares) total.</span>',
            type: "text",
            tagName: "p",
          },
          "11b72e26-4b7f-4c19-8d33-d769ff6a35e1": {
            content:
              '<a  href="mailto:http://english.pku.edu.cn" data-action="email" class="ui-link"><em>http://english.pku.edu.cn</em></a>',
            type: "caption",
            tagName: "p",
          },
          "396d5499-dd67-4bc8-a05e-2550759bf947": {
            content:
              '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span style="color: rgb(255,196,58);"><span style="font-weight: bold;"><u>Admission Conditions</u></span></span></a>',
            type: "text",
          },
        },
      ],
      gap: 0,
      contentAlign: "left",
      verticalAlign: "middle",
      backgroundPresets: {
        activeId: "monochrome",
        values: {
          monochrome: {
            background: {
              type: "color",
              color: "light-shade-color",
              disabled: false,
            },
          },
          bicolor: {
            odd: { type: "color", color: "light-accent-color" },
            even: { type: "color", color: "dark-accent-color" },
          },
        },
      },
      style: { preset: "main" },
      paddingLeft: 20,
      paddingRight: 20,
    },
    "c50073c5-c3b7-4b09-ac48-998e8b27b2b0": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Universities We Work With</span>',
      type: "blockTitle",
      tagName: "p",
    },
    "3c062865-533e-417c-9c42-9a09a25237be": {
      content:
        "Throughout history, we have made many technological breakthroughs and strategic choices.",
      type: "subtitle",
      tagName: "p",
    },
    "222c9c61-6a55-48b2-9018-ceb6e7682eee": {
      align: "left",
      verticalAlign: "top",
    },
    "699a463c-f5fe-471b-82ff-b66e77bffd8b": {
      textValue: "Learn more",
      type: "secondary",
    },
    "523e17cb-6f7d-419e-805b-2e6aec12d4d6": {
      textValue: "Contact us",
      type: "primary",
    },
    "2012be8d-7551-4ce7-8af4-5a74d54d3abd": {
      align: "center",
      verticalAlign: "top",
    },
    "80ae7b38-08f4-4092-8168-66cdae7456b1": {
      content: "Didn't find suitable vacancy?<br>Just fill the form.",
      type: "heading",
      tagName: "p",
    },
    "2d9b940e-bc4a-47a4-add9-c736d8fc2b1e": {
      content: "Select the one you'll be really happy to study at!",
      type: "subtitle",
      tagName: "p",
    },
    "af93dd00-29f6-49d3-9fc6-92bed548f7a4": {
      align: "center",
      verticalAlign: "top",
    },
    "e29fe557-3e0a-4af4-99ea-20a770b8c4d3": {
      textValue: "Download PDF",
      type: "secondary",
    },
    "2c8988d4-423a-45e7-a723-526a8c5184e1": {
      textValue: "Order a Ticket",
      type: "primary",
    },
    background: { type: "color", color: "light-shade-color", image: {} },
    "e46ce9d0-37be-4e68-ab1a-d0fae79e7c30": {
      content: '<span style="font-weight: bold;">- 05 -</span>',
      type: "small",
      tagName: "p",
    },
  }
);
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
  "62bec4351f21e4000e4e5ccf",
  __views["3ea99060a194749e54a8f48de64714ff"],
  {
    "da8cfce0-347d-483e-83b3-f0630c60e213": {
      columnsCount: 3,
      contentAlign: "left",
      items: [
        {
          id: "f7cffa30-88e0-410d-a68a-5e911087a3ee",
          background: {
            color: "dark-accent-color",
            image: {},
            type: "color",
            colorType: "color",
          },
          "69804a32-a681-4c23-b4ef-62eedadd119a": {
            content: "Our Programs",
            type: "headingLg",
            tagName: "h2",
          },
          "05333c35-d11f-4b3b-af66-7f153b9da3f6": {
            content:
              '<span style="color: rgba(255,255,255,0.85);">Our company can help to plan your study or internship abroad. Select the university of your dreams, and we\'ll take care of everything.</span>',
            type: "text",
            tagName: "p",
          },
          "79b3ebfe-8c21-4fe3-a0c1-b5e81e7f7272": {
            textValue: "Learn More",
            type: "primary",
            style: { fontWeight: "bold" },
            iconEnabled: true,
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M59.999,55.001v15l20-20c0,0-10-10-20-20v15h-40v10H59.999z"></path></svg>',
              id: "44423",
              platform: null,
              preview: "https://static.thenounproject.com/png/44423-200.png",
              source: "noun",
              resourceRef: null,
            },
            iconAlignment: "right",
            size: "lg",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5bb5ce39962176002454d448" } },
            },
          },
          "c43c1787-bea8-479d-bcac-1b2693490932": {
            color: null,
            desktopHeight: 10,
            mobileHeight: 0,
          },
        },
        {
          id: "9755fbfa-5453-4a76-a2d4-6349748bf62c",
          background: {
            color: "brand-color",
            image: {},
            type: "color",
            colorType: "color",
            ownColor: "rgb(205, 212, 251)",
          },
          "69804a32-a681-4c23-b4ef-62eedadd119a": {
            content:
              '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Destinations</span>',
            type: "headingLg",
            tagName: "h2",
          },
          "05333c35-d11f-4b3b-af66-7f153b9da3f6": {
            content:
              "Have you always dreamed of studying in a particular country or want to consider all opportunities? We're here to advise you.",
            type: "text",
            tagName: "p",
          },
          "79b3ebfe-8c21-4fe3-a0c1-b5e81e7f7272": {
            textValue: "Learn More",
            type: "primary-alt",
            style: { fontWeight: "bold" },
            iconEnabled: true,
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M59.999,55.001v15l20-20c0,0-10-10-20-20v15h-40v10H59.999z"></path></svg>',
              id: "44423",
              platform: null,
              preview: "https://static.thenounproject.com/png/44423-200.png",
              source: "noun",
              resourceRef: null,
            },
            iconAlignment: "right",
            size: "lg",
            actionConfig: {
              action: "anchor",
              actions: { anchor: { anchor: "5d4d507c99604d0023dd65a2" } },
            },
          },
          "c43c1787-bea8-479d-bcac-1b2693490932": {
            color: null,
            desktopHeight: 10,
            mobileHeight: 0,
          },
        },
        {
          id: "b873712e-cb4b-4fec-a351-cb852f5e5818",
          background: {
            image: {
              overlay: {
                enabled: false,
                saved: {
                  type: "color",
                  color: "dark-shade-color",
                  opacity: 0.56,
                },
                touched: true,
              },
              position: { cover: "59.79% 51.54%" },
              resourceRef:
                "res/62be8ca3462df9000d36ed88/62c54bc9ef19070012b805e7",
            },
            type: "image",
            colorType: "color",
          },
          "69804a32-a681-4c23-b4ef-62eedadd119a": {
            content: "",
            type: "heading",
            tagName: "p",
          },
          "05333c35-d11f-4b3b-af66-7f153b9da3f6": {
            content: "",
            type: "text",
            tagName: "p",
          },
          "79b3ebfe-8c21-4fe3-a0c1-b5e81e7f7272": {
            textValue: "",
            type: "link",
            actionConfig: {
              action: "link",
              actions: {
                link: {
                  pageId: "5c2dfa623dbc4a0023e12261",
                  categoryLink: null,
                  forceForeignLang: false,
                },
              },
            },
          },
          "c43c1787-bea8-479d-bcac-1b2693490932": {
            color: null,
            desktopHeight: 150,
            mobileHeight: 180,
          },
        },
      ],
      gap: 25,
      itemsAlign: "center",
      verticalAlign: "top",
      style: {},
      columnSize: 12,
      fullWidth: false,
      gapPx: 30,
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 60,
      paddingBottom: 60,
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": {
          original: true,
          children: ["2ea425ae-b859-4d3a-bdd6-392fc089251d"],
        },
        "2ea425ae-b859-4d3a-bdd6-392fc089251d": {
          type: "SectionContent",
          children: ["da8cfce0-347d-483e-83b3-f0630c60e213"],
        },
        "da8cfce0-347d-483e-83b3-f0630c60e213": {
          type: "Collection",
          children: [
            "69804a32-a681-4c23-b4ef-62eedadd119a",
            "c43c1787-bea8-479d-bcac-1b2693490932",
            "05333c35-d11f-4b3b-af66-7f153b9da3f6",
            "9872dc6f-78c6-4e64-b98e-5670437b9bf9",
          ],
        },
        "69804a32-a681-4c23-b4ef-62eedadd119a": { type: "Text" },
        "05333c35-d11f-4b3b-af66-7f153b9da3f6": { type: "Text" },
        "9872dc6f-78c6-4e64-b98e-5670437b9bf9": {
          type: "ButtonsGroup",
          children: ["79b3ebfe-8c21-4fe3-a0c1-b5e81e7f7272"],
        },
        "79b3ebfe-8c21-4fe3-a0c1-b5e81e7f7272": { type: "Button" },
        "c43c1787-bea8-479d-bcac-1b2693490932": { type: "Spacer" },
      },
    },
  }
);
blockJsonp(
  "62befa5c00f3ce000d242231",
  __views["3807a94715f8cadf7efac0f96e4679c4"],
  {
    title: {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">All Tests</span>',
      type: "headingLg",
      tagName: "h2",
    },
    subtitle: {
      content: "Do you need to pass a test?",
      type: "subtitle",
      tagName: "p",
    },
    collection: {
      columnsCount: 2,
      contentAlign: "left",
      verticalAlign: "top",
      items: [
        {
          id: "1f2b6fcf-2905-4c81-9b3b-7da8763e2c88",
          item_heading: { content: "IELTS", type: "heading", tagName: "p" },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "light-shade-color",
            image: {},
            type: "color",
            colorType: "color",
          },
          "85268cc6-9119-4490-ad3d-21555dea103d": {
            background: {
              id: "monochrome",
              colors: { background: { type: "color", disabled: true } },
            },
            iconType: "plus",
            decorator: false,
            iconAlign: "right",
            items: [
              {
                id: "036e3882-d740-47bf-ac8f-59b1d3de7651",
                heading: { content: "IELTS", type: "heading" },
                body: {
                  content:
                    '<span style="display: block;text-align:left;"><span style="color: rgb(135,135,135);">The IELTS test evaluates your language excellently. It\'s an international test that is an integral part and one of the most critical aspects of practically all immigration processes, such as Study Visa, General Skilled Migration program, and so on. Also, passing IELTS gives the students applying for Study Visa a great opportunity to check their language skills and to apply for a particular course based on their results.</span></span>',
                  type: "text",
                },
                background: { image: {}, type: "none" },
              },
            ],
          },
        },
        {
          id: "436ad3f0-c8d7-4d40-af34-027b46e4fcda",
          item_heading: { content: "IELTS", type: "heading", tagName: "p" },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "light-shade-color",
            image: {},
            type: "color",
            colorType: "color",
          },
          "85268cc6-9119-4490-ad3d-21555dea103d": {
            background: {
              id: "monochrome",
              colors: { background: { type: "color", disabled: true } },
            },
            iconType: "plus",
            decorator: false,
            iconAlign: "right",
            items: [
              {
                id: "036e3882-d740-47bf-ac8f-59b1d3de7651",
                heading: { content: "TOEFL", type: "heading" },
                body: {
                  content:
                    '<span style="display: block;text-align:left;"><span style="color: rgb(135,135,135);">TOEFL stands for Test of English as a Foreign Language. It is created to evaluate the language capability of non-English speaking candidates. It is also one of the most critical tests for those who dream of applying to one of the English speaking overseas universities. TOEFL is essential because it focuses on both ahow you comprehend the English language and on how you can use it in your life and education. </span></span>',
                  type: "text",
                },
                background: { image: {}, type: "none" },
              },
            ],
          },
        },
        {
          id: "0a0b1696-7084-4ac0-b4c3-05bcc966d663",
          item_heading: { content: "IELTS", type: "heading", tagName: "p" },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "light-shade-color",
            image: {},
            type: "color",
            colorType: "color",
          },
          "85268cc6-9119-4490-ad3d-21555dea103d": {
            background: {
              id: "monochrome",
              colors: { background: { type: "color", disabled: true } },
            },
            iconType: "plus",
            decorator: false,
            iconAlign: "right",
            items: [
              {
                id: "036e3882-d740-47bf-ac8f-59b1d3de7651",
                heading: { content: "GMAT", type: "heading" },
                body: {
                  content:
                    '<span style="display: block;text-align:left;"><span style="color: rgb(135,135,135);">If you’re serious about a business school, then taking the GMAT is your best first step. This exam was the taken by many business leaders to get into the world’s leading business schools. The reason behind it is very simple — it works. Passing the GMAT is a great way to stand out during the admission process. It is the most widely used and trusted indicator of success in MBA and other business programs.</span></span>',
                  type: "text",
                },
                background: { image: {}, type: "none" },
              },
            ],
          },
        },
        {
          id: "7289a312-b9b8-4677-920b-3b8228e98049",
          item_heading: { content: "IELTS", type: "heading", tagName: "p" },
          item_image: { alt: 'Award "Best Service Provider"' },
          background: {
            color: "light-shade-color",
            image: {},
            type: "color",
            colorType: "color",
          },
          "85268cc6-9119-4490-ad3d-21555dea103d": {
            background: {
              id: "monochrome",
              colors: { background: { type: "color", disabled: true } },
            },
            iconType: "plus",
            decorator: false,
            iconAlign: "right",
            items: [
              {
                id: "036e3882-d740-47bf-ac8f-59b1d3de7651",
                heading: { content: "GRE", type: "heading" },
                body: {
                  content:
                    '<span style="display: block;text-align:left;"><span style="color: rgb(135,135,135);">The Graduate Record Examination (GRE) is a standardized test that is required to enter most graduate schools in the US. It aims to measure verbal reasoning, quantitative reasoning, analytical writing, and critical thinking skills. These skills are acquired over a long period and aren\'t entirely based on any specific field of study outside of the GRE itself. You need to take a computer-based exam to pass it.</span></span>',
                  type: "text",
                },
                background: { image: {}, type: "none" },
              },
            ],
          },
        },
      ],
      gap: 25,
      itemsAlign: "left",
      columnSize: 12,
      style: { preset: "card" },
      fullWidth: false,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 40,
      paddingRight: 40,
      gapPx: 40,
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": { original: true, children: ["0_0_0_0_0", "0_0_0_0_1"] },
        "0_0_0_0_0": {
          original: true,
          children: [
            "0_0_0_0_0_0",
            "0_0_0_0_0_1",
            "d391a389-cf26-4858-9664-00aeba61d7de",
            "7685c8d9-4621-4fed-941a-32ca583549c9",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_0_0_0_1": { original: true },
        "0_0_0_0_1": {
          original: true,
          children: ["85268cc6-9119-4490-ad3d-21555dea103d"],
        },
        "0_0_0_0_1_0": { original: true },
        "0_0_0_0_1_1": { original: true },
        "d391a389-cf26-4858-9664-00aeba61d7de": { type: "Text" },
        "7685c8d9-4621-4fed-941a-32ca583549c9": { type: "Text" },
        "85268cc6-9119-4490-ad3d-21555dea103d": { type: "Accordion" },
      },
    },
    "5c6a55f1-48f5-4878-97a0-aedf7c83dcb2": {
      textValue: "Learn more",
      type: "secondary",
    },
    "7fac14c5-dc27-47d6-a08f-f25826389ac8": {
      size: "sm",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 44 44" style="enable-background:new 0 0 44 44;" xml:space="preserve"><g><g><path d="M20,24c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1s-0.4-1-1-1H21C20.4,23,20,23.4,20,24z"></path><path d="M21,29h6c0.6,0,1-0.4,1-1s-0.4-1-1-1h-6c-0.6,0-1,0.4-1,1S20.4,29,21,29z"></path><path d="M21,14c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1s-0.4-1-1-1H21z"></path><path d="M21,20h3c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3c-0.6,0-1,0.4-1,1S20.4,20,21,20z"></path><path d="M30,32h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c0.6,0,1-0.4,1-1S30.6,32,30,32z"></path><path d="M26,36h-5c-0.6,0-1,0.4-1,1s0.4,1,1,1h5c0.6,0,1-0.4,1-1S26.6,36,26,36z"></path><path d="M16,23h-4c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C17,23.4,16.6,23,16,23z M15,27h-2v-2h2V27z"></path><path d="M16,14h-4c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C17,14.4,16.6,14,16,14z M15,18h-2v-2h2V18z"></path><path d="M16,32h-4c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-4C17,32.4,16.6,32,16,32z M15,36h-2v-2h2V36z"></path><path d="M29.7,0.3C29.5,0.1,29.3,0,29,0H8C6.3,0,5,1.3,5,3v38c0,1.7,1.3,3,3,3h28c1.7,0,3-1.3,3-3V10c0-0.3-0.1-0.5-0.3-0.7    L29.7,0.3z M30,3.4L35.6,9H31c-0.6,0-1-0.4-1-1V3.4z M37,13v28c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h20v6    c0,1.7,1.3,3,3,3h6V13z"></path></g></g></svg>',
      id: "1077021",
      platform: null,
      preview: "https://static.thenounproject.com/png/1077021-200.png",
      source: "noun",
      resourceRef: null,
      fill: "rgb(135, 135, 135)",
      ownColor: "rgb(135, 135, 135)",
    },
    "d391a389-cf26-4858-9664-00aeba61d7de": {
      content:
        '<span style="color: rgb(135,135,135);">If yes, we can offer you a variety of courses to prepare for admission tests, as well as special tests that may be required by universities in different countries.</span>',
      type: "text",
    },
    area: {
      align: "left",
      verticalAlign: "middle",
      itemsAlign: "center",
      columnSize: 12,
      paddingLeft: 10,
      paddingRight: 10,
    },
    "7685c8d9-4621-4fed-941a-32ca583549c9": {
      content:
        '<a  href="slug-id=62c2ed79cf23ca000dbc30ec" data-action="anchor-other-page" data-anchor="62c2ed79cf23ca000dbc30ec" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>More Details</u></span></span></a>',
      type: "text",
    },
  }
);
blockJsonp(
  "62c29e77f77855000d82404a",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_col_1: { align: "left", verticalAlign: "top", size: 8 },
    "57a811bb-43c6-4669-8e23-33c7fb07960c": {
      size: 4,
      align: "left",
      verticalAlign: "bottom",
    },
    header_row: {},
    content_row: { gap: 25, gapPx: 50 },
    content_col_1: {},
    title: {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">News &amp; Articles</span>',
      type: "blockTitle",
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0", "0_0_1"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0", "57a811bb-43c6-4669-8e23-33c7fb07960c"],
        },
        "0_0_0_0_0": {
          original: true,
          children: [
            "3a63a6dd-e7d2-41b6-b679-5f925c1074aa",
            "0_0_0_0_0_0",
            "1a2a9f0f-4a7d-4013-a8d8-8b5c4fd803b6",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: ["0_0_1_0"] },
        "0_0_1_0": {
          original: true,
          children: [
            "0_0_1_0_0",
            "388c9427-837f-417f-8188-44b1f08325b0",
            "0c85f25e-df2f-4818-9f91-7ab94cdc7fe5",
          ],
        },
        "0_0_1_0_0": {
          original: true,
          children: [
            "2b3a0806-2a7b-4f2c-9362-2f15a3c6eafc",
            "39afc8a0-93ae-482b-a8b9-720bef9e3cd2",
            "6282cd2c-9444-4da5-8120-f7be7fa8421d",
            "1436fc41-fcb4-496d-9561-e0aabe7c3ca5",
          ],
        },
        "2b3a0806-2a7b-4f2c-9362-2f15a3c6eafc": { type: "Media" },
        "39afc8a0-93ae-482b-a8b9-720bef9e3cd2": { type: "Text" },
        "6282cd2c-9444-4da5-8120-f7be7fa8421d": { type: "Text" },
        "1436fc41-fcb4-496d-9561-e0aabe7c3ca5": { type: "Text" },
        "1a2a9f0f-4a7d-4013-a8d8-8b5c4fd803b6": { type: "Text" },
        "3a63a6dd-e7d2-41b6-b679-5f925c1074aa": { type: "Text" },
        "388c9427-837f-417f-8188-44b1f08325b0": {
          type: "Column",
          children: [
            "3387ceba-099f-43b8-8d79-cb8d483844d8",
            "1d5f71b7-9018-4dcd-bcf8-e35bdefd86be",
            "e712dee8-14ca-4dd8-bb2d-b4c15bc37256",
            "c02f45d7-2244-4b04-82bb-3f1c0b11be3a",
          ],
          base: "0_0_1_0_0",
        },
        "3387ceba-099f-43b8-8d79-cb8d483844d8": { type: "Media" },
        "1d5f71b7-9018-4dcd-bcf8-e35bdefd86be": { type: "Text" },
        "e712dee8-14ca-4dd8-bb2d-b4c15bc37256": { type: "Text" },
        "c02f45d7-2244-4b04-82bb-3f1c0b11be3a": { type: "Text" },
        "0c85f25e-df2f-4818-9f91-7ab94cdc7fe5": {
          type: "Column",
          children: [
            "46059e8a-2bdd-477a-9d5f-2891a62d5d11",
            "6ad59f38-1f7b-424d-8ff8-98138fa65049",
            "46486926-e88c-4b8f-b192-ef902efa84da",
          ],
        },
        "46059e8a-2bdd-477a-9d5f-2891a62d5d11": { type: "Text" },
        "6ad59f38-1f7b-424d-8ff8-98138fa65049": { type: "Divider" },
        "46486926-e88c-4b8f-b192-ef902efa84da": { type: "ListWithMedia" },
        "57a811bb-43c6-4669-8e23-33c7fb07960c": {
          type: "Column",
          children: [],
        },
      },
    },
    "2b3a0806-2a7b-4f2c-9362-2f15a3c6eafc": {
      type: "image",
      video: {},
      image: {
        alt: "Illustration",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c5587cbeb95e000e6439e6",
        position: { x: 0, y: 100 },
        scale: 1.19,
      },
      customClassNames: [],
    },
    "39afc8a0-93ae-482b-a8b9-720bef9e3cd2": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">How to Pick a Country?</span>',
      type: "heading",
    },
    "6282cd2c-9444-4da5-8120-f7be7fa8421d": {
      content:
        '<span style="color: rgb(135,135,135);">When it comes to choosing a country to study in, many applicants get lost. There are so many amazing possibilities!</span>',
      type: "text",
    },
    "1436fc41-fcb4-496d-9561-e0aabe7c3ca5": {
      content:
        '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>Read More</u></span></span></a>',
      type: "text",
    },
    "1a2a9f0f-4a7d-4013-a8d8-8b5c4fd803b6": {
      content: "Read news about universities and useful articles.",
      type: "subtitle",
      tagName: "p",
    },
    "3a63a6dd-e7d2-41b6-b679-5f925c1074aa": {
      content: '<span style="font-weight: bold;">- 09 -</span>',
      type: "small",
      tagName: "p",
    },
    "388c9427-837f-417f-8188-44b1f08325b0": {},
    "3387ceba-099f-43b8-8d79-cb8d483844d8": {
      type: "image",
      video: {},
      image: {
        alt: "Illustration",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c549334e4b69000db388f0",
        scale: 1.49,
        position: { x: 44.392, y: 54.682 },
      },
      customClassNames: [],
    },
    "1d5f71b7-9018-4dcd-bcf8-e35bdefd86be": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">How to Pass Your Tests?</span>',
      type: "heading",
    },
    "e712dee8-14ca-4dd8-bb2d-b4c15bc37256": {
      content:
        '<span style="color: rgb(135,135,135);">Exams always seem to be the scariest thing about going to university. But with careful preparation, exams can go almost unnoticed.</span>',
      type: "text",
    },
    "c02f45d7-2244-4b04-82bb-3f1c0b11be3a": {
      content:
        '<a  href="slug-id=5c2dfa623dbc4a0023e12261" target="_self" data-action="link" data-slug-id="5c2dfa623dbc4a0023e12261" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>Read More</u></span></span></a>',
      type: "text",
    },
    "0c85f25e-df2f-4818-9f91-7ab94cdc7fe5": {},
    "46059e8a-2bdd-477a-9d5f-2891a62d5d11": {
      content: "Events",
      type: "headingLg",
      tagName: "h2",
    },
    "6ad59f38-1f7b-424d-8ff8-98138fa65049": {
      color: "rgb(43, 114, 88)",
      size: { height: "5", width: 15 },
    },
    "46486926-e88c-4b8f-b192-ef902efa84da": {
      private: {
        media: { type: "number" },
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
            id: "39f6b75c-12c9-4b4c-aefa-dbf785174e5c",
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
              svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z' /><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z' /><circle cx='112.909' cy='417.49' r='10' /></svg>",
              background: { type: "color", color: "light-accent-color" },
            },
            itemNumber: {
              size: "md",
              body: {
                content:
                  '<span style="font-size: 35px;"><span style="font-weight: bold;">19</span></span>',
                fontSize: 35,
              },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: { content: "Canada Calls", type: "heading" },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(135,135,135);"><em>19 March, 2024ㅤ09 am - 06 pm</em></span></span><span style="display: block;"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><em>●</em></span><span style="color: rgb(135,135,135);"><em> New York, Study Hall 14/2</em></span></span>',
              type: "caption",
              tagName: "p",
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "b5845d9b-820b-4d12-b023-4eece16056b9",
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
              svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z' /><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z' /><circle cx='112.909' cy='417.49' r='10' /></svg>",
              background: { type: "color", color: "light-accent-color" },
            },
            itemNumber: {
              size: "md",
              body: {
                content:
                  '<span style="font-size: 35px;"><span style="font-weight: bold;">11</span></span>',
                fontSize: 35,
              },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: { content: "Meet Sorbonne", type: "heading" },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(135,135,135);"><em>11 Jne, 2024ㅤ09 am - 08 pm</em></span></span><span style="display: block;"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><em>●</em></span><span style="color: rgb(135,135,135);"><em> New York, Study Hall 14/2</em></span></span>',
              type: "caption",
              tagName: "p",
            },
            background: { image: {}, type: "none" },
          },
          {
            id: "8873de91-4cd3-44ef-86c2-18fb41676e65",
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
              svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.999 511.999'><path d='M309.618 96.455c-19.229-18.964-44.714-29.208-71.73-28.824-26.001.362-50.549 10.737-69.122 29.213-18.574 18.478-29.075 42.971-29.568 68.969a100.186 100.186 0 0 0 32.834 76.098c8.175 7.419 12.863 18.059 12.863 29.19v13.297c0 8.577 4.053 16.221 10.338 21.133v30.505c0 13.899 11.306 25.204 25.203 25.204h37.75c13.897 0 25.203-11.306 25.203-25.203v-30.505c6.285-4.912 10.338-12.556 10.338-21.133v-13.297c0-11.1 4.744-21.79 13.016-29.329 20.782-18.94 32.701-45.919 32.701-74.019 0-27.01-10.592-52.332-29.826-71.299zM258.186 341.24h-37.75a5.209 5.209 0 0 1-5.203-5.203v-24.822h48.155v24.822h.001a5.209 5.209 0 0 1-5.203 5.203zm35.085-114.248c-12.421 11.32-19.544 27.397-19.544 44.111V284.4a6.822 6.822 0 0 1-6.814 6.815h-55.204c-3.757 0-6.814-3.058-6.814-6.815v-13.297c0-16.76-7.079-32.797-19.422-44a80.19 80.19 0 0 1-26.28-60.909c.811-42.725 36.237-77.968 78.972-78.563.386-.005.767-.008 1.152-.008 21.202 0 41.143 8.168 56.257 23.074 15.392 15.179 23.869 35.443 23.869 57.059 0 22.486-9.54 44.077-26.172 59.236z' /><path d='M437.431 263.396l-31.065-56.746v-38.896C406.366 75.254 331.112 0 238.612 0S70.859 75.254 70.859 167.754v28.807c0 35.785 10.757 70.015 31.144 99.213v82.576c0 5.522 4.477 10 10 10s10-4.478 10-10v-85.772a9.996 9.996 0 0 0-1.909-5.876c-19.125-26.335-29.235-57.505-29.235-90.141v-28.807C90.858 86.282 157.141 20 238.612 20s147.754 66.282 147.754 147.754v41.455a9.99 9.99 0 0 0 1.229 4.802L419.888 273c2.44 4.457.688 8.321-.178 9.775-.863 1.45-3.412 4.812-8.459 4.812h-.052l-14.787-.067c-2.702-.022-5.216 1.036-7.101 2.913a10 10 0 0 0-2.945 7.087v44.629c0 23.848-19.402 43.25-43.25 43.25h-30.021c-13.624 0-24.708 11.084-24.708 24.709v76.435L152.446 425.44c-5.039-2.267-10.957-.016-13.221 5.021s-.016 10.956 5.021 13.221l150.041 67.438a10 10 0 0 0 14.099-9.121v-91.893a4.714 4.714 0 0 1 4.708-4.709h30.021c34.876 0 63.25-28.374 63.25-63.25v-34.583l4.741.021h.143c10.623 0 20.201-5.44 25.643-14.575 5.466-9.174 5.668-20.245.539-29.614z' /><circle cx='112.909' cy='417.49' r='10' /></svg>",
              background: { type: "color", color: "light-accent-color" },
            },
            itemNumber: {
              size: "md",
              body: {
                content:
                  '<span style="font-size: 35px;"><span style="font-weight: bold;">21</span></span>',
                fontSize: 35,
              },
              background: { type: "color", color: "light-accent-color" },
              style: { preset: "none" },
            },
            itemTextTop: { content: "Universities in EU", type: "heading" },
            itemPrice: { content: "75$", type: "heading" },
            itemTextBottom: {
              content:
                '<span style="display: block;"><span style="color: rgb(135,135,135);"><em>21 August, 2024ㅤ09 am - 01 pm</em></span></span><span style="display: block;"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><em>●</em></span><span style="color: rgb(135,135,135);"><em> New York, Study Hall 14/2</em></span></span>',
              type: "caption",
              tagName: "p",
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
    },
  }
);
blockJsonp(
  "62c3db3ad9e8f8000dd56650",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_row: {},
    content_row: {},
    header_col_1: { align: "left", verticalAlign: "top" },
    content_col_1: {},
    title: {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Studying Abroad</span>',
      type: "heading",
      tagName: "p",
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: [
            "9683f29a-0c2f-4f4c-ad46-f5f9aae4779e",
            "0_0_0_0_0",
            "ea27bb3a-e104-4f9a-af46-c855406cec48",
          ],
        },
        "0_0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0_0", "9ab828c1-e664-4e37-8da3-16291fa1cd4a"],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "9ab828c1-e664-4e37-8da3-16291fa1cd4a": { type: "Text" },
        "ea27bb3a-e104-4f9a-af46-c855406cec48": {
          type: "Column",
          children: [
            "d2af509e-cb5d-44de-962e-2ad919bddb61",
            "e989a7ae-7197-488f-a54b-a4e9e1a0e77f",
          ],
          base: "0_0_0_0_0",
        },
        "d2af509e-cb5d-44de-962e-2ad919bddb61": {
          type: "Text",
          base: "0_0_0_0_0_0",
        },
        "e989a7ae-7197-488f-a54b-a4e9e1a0e77f": { type: "Text" },
        "9683f29a-0c2f-4f4c-ad46-f5f9aae4779e": {
          type: "Column",
          children: [
            "fec188ba-0ad9-4935-b3d3-b7ddb7d17325",
            "744c26a2-29ae-4aa1-b751-f8ff90fdc27a",
            "3ad71b24-74fc-4537-b5ee-b26e7e45f0c1",
          ],
        },
        "fec188ba-0ad9-4935-b3d3-b7ddb7d17325": { type: "Text" },
        "744c26a2-29ae-4aa1-b751-f8ff90fdc27a": { type: "Text" },
        "3ad71b24-74fc-4537-b5ee-b26e7e45f0c1": { type: "Text" },
      },
    },
    "9ab828c1-e664-4e37-8da3-16291fa1cd4a": {
      content:
        '<span style="color: rgb(135,135,135);">We will help you choose the right university, pass the admission tests, and prepare for your studies in a new country.We collaborate with dozens of universities worldwide, so we\'ll quickly answer any question you might have.</span>',
      type: "text",
    },
    "ea27bb3a-e104-4f9a-af46-c855406cec48": {
      align: "left",
      verticalAlign: "top",
    },
    "d2af509e-cb5d-44de-962e-2ad919bddb61": {
      content:
        '<span class="text-ui-dark-shade-color" style="color: var(--ui-dark-shade-color);">Internship Programs</span>',
      type: "heading",
      tagName: "p",
    },
    "e989a7ae-7197-488f-a54b-a4e9e1a0e77f": {
      content:
        '<span style="color: rgb(135,135,135);">We will help you with the paperwork and answer all of your questions about internships abroad e.g. what is a typical internship day like, what does it cost do do an internship abroad, what will I do after the internship ends, etc. </span>',
      type: "text",
    },
    "9683f29a-0c2f-4f4c-ad46-f5f9aae4779e": {
      align: "left",
      verticalAlign: "middle",
    },
    "fec188ba-0ad9-4935-b3d3-b7ddb7d17325": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span style="font-weight: bold;">Mission &amp; Values</span>ㅤ→</a>',
      type: "subheading",
      tagName: "p",
    },
    "744c26a2-29ae-4aa1-b751-f8ff90fdc27a": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span style="font-weight: bold;">Overview</span>ㅤ→</a>',
      type: "subheading",
      tagName: "p",
    },
    "3ad71b24-74fc-4537-b5ee-b26e7e45f0c1": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span style="font-weight: bold;">Documents</span>ㅤ→</a>',
      type: "subheading",
      tagName: "p",
    },
  }
);
blockJsonp(
  "62c3ede700f3ce000d4233c6",
  __views["ccda4357d19222ee7de9015521345a06"],
  {
    header_col_1: { align: "left", verticalAlign: "middle" },
    "e55ff6d9-7821-4e04-b233-a65317b0c288": { size: 2 },
    "ded87935-115b-4401-aa63-343d10926b6f": {},
    header_row: { gap: 25, gapPx: 100 },
    content_row: {},
    content_col_1: {},
    title: {
      content:
        '<span style="display: block;"><span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);font-size: 115px;">—BENE</span></span><span style="display: block;"><span class="text-ui-dark-accent-color" style="color: var(--ui-dark-accent-color);font-size: 115px;">FITS</span><span class="text-ui-brand-color" style="color: var(--ui-brand-color);font-size: 115px;">—</span></span>',
      type: "heroTitle",
      tagName: "h2",
      fontSize: 115,
    },
    __constructor__: {
      nodes: {
        0: { original: true, children: ["0_0"] },
        "0_0": { original: true, children: ["0_0_0"] },
        "0_0_0": { original: true, children: ["0_0_0_0"] },
        "0_0_0_0": {
          original: true,
          children: ["0_0_0_0_0", "ded87935-115b-4401-aa63-343d10926b6f"],
        },
        "0_0_0_0_0": {
          original: true,
          children: [
            "030a98bb-9dc0-4a2b-8c5d-e26d4a9ae151",
            "0_0_0_0_0_0",
            "0d2be6ce-ffc1-45f5-9205-3f380dd49f6d",
            "1666b795-7863-45cb-9a2b-a4ed6fed37d4",
          ],
        },
        "0_0_0_0_0_0": { original: true },
        "0_0_1": { original: true, children: [] },
        "0_0_1_0": { original: true, children: [] },
        "0_0_1_0_0": { original: true, children: [] },
        "ded87935-115b-4401-aa63-343d10926b6f": {
          type: "Column",
          children: ["431bc14b-5c45-4be3-9600-65f1079e6af0"],
        },
        "431bc14b-5c45-4be3-9600-65f1079e6af0": { type: "Media" },
        "0d2be6ce-ffc1-45f5-9205-3f380dd49f6d": { type: "Text" },
        "1666b795-7863-45cb-9a2b-a4ed6fed37d4": { type: "Text" },
        "030a98bb-9dc0-4a2b-8c5d-e26d4a9ae151": { type: "Text" },
      },
    },
    "431bc14b-5c45-4be3-9600-65f1079e6af0": {
      type: "image",
      video: {},
      image: {
        alt: "Illustration",
        resourceRef: "res/62be8ca3462df9000d36ed88/62c6892488449a000d8d244d",
        fitBy: "contain",
        scale: 1,
        position: { x: 68.768, y: 100 },
      },
      customClassNames: [],
    },
    background: { type: "color", color: "light-accent-color" },
    "0d2be6ce-ffc1-45f5-9205-3f380dd49f6d": {
      content:
        '<span style="display: block;">Have you ever planned a trip to an exotic country on your own? Then you probably know how difficult it is.</span><br><span style="display: block;">Organization of studies in another country is even more difficult and requires proper preparation works. The main advantage of our company is a comprehensive assistance to applicants at all stages.</span>',
      type: "text",
    },
    "1666b795-7863-45cb-9a2b-a4ed6fed37d4": {
      content:
        '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span style="font-weight: bold;"><u>More Information</u></span></a>',
      type: "text",
    },
    "030a98bb-9dc0-4a2b-8c5d-e26d4a9ae151": {
      content: "- 08 -",
      type: "small",
      tagName: "p",
    },
  }
);
blockJsonp(
  "62c400323390fb000dedbb39",
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
      _formId: "RCjQ04napEGYm86wBiFW",
      _token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiI1Y2I3NGUwMWMyNmM2ZjAwMjM5ZDQ3ZWMiLCJmb3JtSWQiOiJSQ2pRMDRuYXBFR1ltODZ3QmlGVyIsImlhdCI6MTY1ODk1NDM2MH0.VXHYJh_9N0n5d8HjwVq58gGKff1qU65X_mMlMSdIiDk",
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
    "2f01d7f2-b407-433c-9560-21507c4fecfc": { size: 3 },
    "1914fa44-78f4-4726-98de-212060f4511f": {
      content: "Fill out the form below!",
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
    "d42c99bd-7bae-4ed4-9eac-20aee47601c6": {
      color: null,
      desktopHeight: 40,
      mobileHeight: 0,
    },
    "1cab050d-aa00-410c-a5e1-f7565a1346ad": {
      content: "Courses Information",
      type: "heading",
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
                '<a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>U</u></span></span></a><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>niversities</u></span></span><span style="color: rgb(220,220,220);">ㅤ</span><a  href="slug-id=62c2b3d351cc63000e197a48" target="_self" data-action="link" data-slug-id="62c2b3d351cc63000e197a48" class="ui-link"><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>I</u></span></span></a><span class="text-ui-brand-color" style="color: var(--ui-brand-color);"><span style="font-weight: bold;"><u>nternship</u></span></span>',
            },
            background: { image: {}, type: "none" },
          },
        ],
      },
    },
    "3eb67ef4-7c27-4015-bb06-548c617aa1dc": {
      content:
        '<span style="color: rgb(220,220,220);">Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book.</span>',
      type: "text",
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
                '<span style="display: block;"><span style="color: rgb(220,220,220);">Help &amp; support ㅤ</span><a  href="tel:9955590499" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 00</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Main numberㅤ</span><a  href="tel:+12345678901" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 01</span></span></a></span><span style="display: block;"><span style="color: rgb(220,220,220);">Universities infoㅤ</span><a  href="tel:+12345678902" data-action="phone" class="ui-link"><span style="color: rgb(220,220,220);"><span style="font-weight: bold;">+1 (234) 567 89 02</span></span></a></span>',
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
                '<span style="display: block;"><span style="color: rgb(220,220,220);">200 5th Ave, New York, NY 10010</span></span><span style="display: block;"><span style="color: rgb(220,220,220);">20 W 29th St, New York, NY 10001</span></span>',
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
window.pageId = "66ff96a252856d3464aa5c14";
window.loadedPages = Object.assign(window.loadedPages || {}, {
  "5c2dfa623dbc4a0023e12261": true,
});
window.scripts = {};
__views = null;
