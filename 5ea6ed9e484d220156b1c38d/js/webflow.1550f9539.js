/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var Y_ = Object.create;
  var sn = Object.defineProperty;
  var $_ = Object.getOwnPropertyDescriptor;
  var Q_ = Object.getOwnPropertyNames;
  var Z_ = Object.getPrototypeOf,
    J_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Fe = (e, t) => {
      for (var r in t) sn(e, r, { get: t[r], enumerable: !0 });
    },
    Cs = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let o of Q_(t))
          !J_.call(e, o) &&
            o !== r &&
            sn(e, o, {
              get: () => t[o],
              enumerable: !(n = $_(t, o)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
      (r = e != null ? Y_(Z_(e)) : {}),
      Cs(
        t || !e || !e.__esModule
          ? sn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => Cs(sn({}, "__esModule", { value: !0 }), e);
  var Li = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, b) {
        var w = new y.Bare();
        return w.init(f, b);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (b) {
          return "-" + b.toLowerCase();
        });
      }
      function n(f) {
        var b = parseInt(f.slice(1), 16),
          w = (b >> 16) & 255,
          R = (b >> 8) & 255,
          O = 255 & b;
        return [w, R, O];
      }
      function o(f, b, w) {
        return (
          "#" + ((1 << 24) | (f << 16) | (b << 8) | w).toString(16).slice(1)
        );
      }
      function i() {}
      function a(f, b) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b);
      }
      function s(f, b, w) {
        d("Units do not match [" + f + "]: " + b + ", " + w);
      }
      function u(f, b, w) {
        if ((b !== void 0 && (w = b), f === void 0)) return w;
        var R = w;
        return (
          qe.test(f) || !Xe.test(f)
            ? (R = parseInt(f, 10))
            : Xe.test(f) && (R = 1e3 * parseFloat(f)),
          0 > R && (R = 0),
          R === R ? R : w
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function h(f) {
        for (var b = -1, w = f ? f.length : 0, R = []; ++b < w; ) {
          var O = f[b];
          O && R.push(O);
        }
        return R;
      }
      var g = (function (f, b, w) {
          function R(ae) {
            return typeof ae == "object";
          }
          function O(ae) {
            return typeof ae == "function";
          }
          function N() {}
          function Z(ae, ge) {
            function z() {
              var Ce = new se();
              return O(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function se() {}
            ge === w && ((ge = ae), (ae = Object)), (z.Bare = se);
            var ue,
              be = (N[f] = ae[f]),
              rt = (se[f] = z[f] = new N());
            return (
              (rt.constructor = z),
              (z.mixin = function (Ce) {
                return (se[f] = z[f] = Z(z, Ce)[f]), z;
              }),
              (z.open = function (Ce) {
                if (
                  ((ue = {}),
                  O(Ce) ? (ue = Ce.call(z, rt, be, z, ae)) : R(Ce) && (ue = Ce),
                  R(ue))
                )
                  for (var _r in ue) b.call(ue, _r) && (rt[_r] = ue[_r]);
                return O(rt.init) || (rt.init = ae), z;
              }),
              z.open(ge)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        m = {
          ease: [
            "ease",
            function (f, b, w, R) {
              var O = (f /= R) * f,
                N = O * f;
              return (
                b +
                w * (-2.75 * N * O + 11 * O * O + -15.5 * N + 8 * O + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, b, w, R) {
              var O = (f /= R) * f,
                N = O * f;
              return b + w * (-1 * N * O + 3 * O * O + -3 * N + 2 * O);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, b, w, R) {
              var O = (f /= R) * f,
                N = O * f;
              return (
                b +
                w * (0.3 * N * O + -1.6 * O * O + 2.2 * N + -1.8 * O + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, b, w, R) {
              var O = (f /= R) * f,
                N = O * f;
              return b + w * (2 * N * O + -5 * O * O + 2 * N + 2 * O);
            },
          ],
          linear: [
            "linear",
            function (f, b, w, R) {
              return (w * f) / R + b;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, b, w, R) {
              return w * (f /= R) * f + b;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, b, w, R) {
              return -w * (f /= R) * (f - 2) + b;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, b, w, R) {
              return (f /= R / 2) < 1
                ? (w / 2) * f * f + b
                : (-w / 2) * (--f * (f - 2) - 1) + b;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, b, w, R) {
              return w * (f /= R) * f * f + b;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, b, w, R) {
              return w * ((f = f / R - 1) * f * f + 1) + b;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, b, w, R) {
              return (f /= R / 2) < 1
                ? (w / 2) * f * f * f + b
                : (w / 2) * ((f -= 2) * f * f + 2) + b;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, b, w, R) {
              return w * (f /= R) * f * f * f + b;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, b, w, R) {
              return -w * ((f = f / R - 1) * f * f * f - 1) + b;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, b, w, R) {
              return (f /= R / 2) < 1
                ? (w / 2) * f * f * f * f + b
                : (-w / 2) * ((f -= 2) * f * f * f - 2) + b;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, b, w, R) {
              return w * (f /= R) * f * f * f * f + b;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, b, w, R) {
              return w * ((f = f / R - 1) * f * f * f * f + 1) + b;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, b, w, R) {
              return (f /= R / 2) < 1
                ? (w / 2) * f * f * f * f * f + b
                : (w / 2) * ((f -= 2) * f * f * f * f + 2) + b;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, b, w, R) {
              return -w * Math.cos((f / R) * (Math.PI / 2)) + w + b;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, b, w, R) {
              return w * Math.sin((f / R) * (Math.PI / 2)) + b;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, b, w, R) {
              return (-w / 2) * (Math.cos((Math.PI * f) / R) - 1) + b;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, b, w, R) {
              return f === 0 ? b : w * Math.pow(2, 10 * (f / R - 1)) + b;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, b, w, R) {
              return f === R
                ? b + w
                : w * (-Math.pow(2, (-10 * f) / R) + 1) + b;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, b, w, R) {
              return f === 0
                ? b
                : f === R
                ? b + w
                : (f /= R / 2) < 1
                ? (w / 2) * Math.pow(2, 10 * (f - 1)) + b
                : (w / 2) * (-Math.pow(2, -10 * --f) + 2) + b;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, b, w, R) {
              return -w * (Math.sqrt(1 - (f /= R) * f) - 1) + b;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, b, w, R) {
              return w * Math.sqrt(1 - (f = f / R - 1) * f) + b;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, b, w, R) {
              return (f /= R / 2) < 1
                ? (-w / 2) * (Math.sqrt(1 - f * f) - 1) + b
                : (w / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + b;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, b, w, R, O) {
              return (
                O === void 0 && (O = 1.70158),
                w * (f /= R) * f * ((O + 1) * f - O) + b
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, b, w, R, O) {
              return (
                O === void 0 && (O = 1.70158),
                w * ((f = f / R - 1) * f * ((O + 1) * f + O) + 1) + b
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, b, w, R, O) {
              return (
                O === void 0 && (O = 1.70158),
                (f /= R / 2) < 1
                  ? (w / 2) * f * f * (((O *= 1.525) + 1) * f - O) + b
                  : (w / 2) *
                      ((f -= 2) * f * (((O *= 1.525) + 1) * f + O) + 2) +
                    b
              );
            },
          ],
        },
        E = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        I = window,
        D = "bkwld-tram",
        S = /[\-\.0-9]/g,
        L = /[A-Z]/,
        C = "number",
        P = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        M = /(em|cm|mm|in|pt|pc|px|%)$/,
        X = /(deg|rad|turn)$/,
        K = "unitless",
        $ = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        ee = " ",
        U = T.createElement("a"),
        x = ["Webkit", "Moz", "O", "ms"],
        F = ["-webkit-", "-moz-", "-o-", "-ms-"],
        B = function (f) {
          if (f in U.style) return { dom: f, css: f };
          var b,
            w,
            R = "",
            O = f.split("-");
          for (b = 0; b < O.length; b++)
            R += O[b].charAt(0).toUpperCase() + O[b].slice(1);
          for (b = 0; b < x.length; b++)
            if (((w = x[b] + R), w in U.style))
              return { dom: w, css: F[b] + f };
        },
        H = (t.support = {
          bind: Function.prototype.bind,
          transform: B("transform"),
          transition: B("transition"),
          backface: B("backface-visibility"),
          timing: B("transition-timing-function"),
        });
      if (H.transition) {
        var te = H.timing.dom;
        if (((U.style[te] = m["ease-in-back"][0]), !U.style[te]))
          for (var re in E) m[re][0] = E[re];
      }
      var k = (t.frame = (function () {
          var f =
            I.requestAnimationFrame ||
            I.webkitRequestAnimationFrame ||
            I.mozRequestAnimationFrame ||
            I.oRequestAnimationFrame ||
            I.msRequestAnimationFrame;
          return f && H.bind
            ? f.bind(I)
            : function (b) {
                I.setTimeout(b, 16);
              };
        })()),
        Y = (t.now = (function () {
          var f = I.performance,
            b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return b && H.bind
            ? b.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        p = g(function (f) {
          function b(ne, ce) {
            var ye = h(("" + ne).split(ee)),
              pe = ye[0];
            ce = ce || {};
            var Le = j[pe];
            if (!Le) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Le[0],
                De = this.props[pe];
              return (
                De || (De = this.props[pe] = new je.Bare()),
                De.init(this.$el, ye, Le, ce),
                De
              );
            }
          }
          function w(ne, ce, ye) {
            if (ne) {
              var pe = typeof ne;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ne) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    b.call(this, ne, ye && ye[1]);
                }
                return N.call(this);
              }
              if (pe == "function") return void ne.call(this, this);
              if (pe == "object") {
                var Le = 0;
                rt.call(
                  this,
                  ne,
                  function (Te, K_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(K_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ie({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = N));
                var je = this,
                  De = !1,
                  an = {};
                k(function () {
                  rt.call(je, ne, function (Te) {
                    Te.active && ((De = !0), (an[Te.name] = Te.nextStyle));
                  }),
                    De && je.$el.css(an);
                });
              }
            }
          }
          function R(ne) {
            (ne = u(ne, 0)),
              this.active
                ? this.queue.push({ options: ne })
                : ((this.timer = new ie({
                    duration: ne,
                    context: this,
                    complete: N,
                  })),
                  (this.active = !0));
          }
          function O(ne) {
            return this.active
              ? (this.queue.push({ options: ne, args: arguments }),
                void (this.timer.complete = N))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function N() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ne = this.queue.shift();
              w.call(this, ne.options, !0, ne.args);
            }
          }
          function Z(ne) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ne == "string"
              ? ((ce = {}), (ce[ne] = 1))
              : (ce = typeof ne == "object" && ne != null ? ne : this.props),
              rt.call(this, ce, Ce),
              be.call(this);
          }
          function ae(ne) {
            Z.call(this, ne), rt.call(this, ne, _r, j_);
          }
          function ge(ne) {
            typeof ne != "string" && (ne = "block"),
              (this.el.style.display = ne);
          }
          function z() {
            Z.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            Z.call(this), e.removeData(this.el, D), (this.$el = this.el = null);
          }
          function be() {
            var ne,
              ce,
              ye = [];
            this.upstream && ye.push(this.upstream);
            for (ne in this.props)
              (ce = this.props[ne]), ce.active && ye.push(ce.string);
            (ye = ye.join(",")),
              this.style !== ye &&
                ((this.style = ye), (this.el.style[H.transition.dom] = ye));
          }
          function rt(ne, ce, ye) {
            var pe,
              Le,
              je,
              De,
              an = ce !== Ce,
              Te = {};
            for (pe in ne)
              (je = ne[pe]),
                pe in de
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[pe] = je))
                  : (L.test(pe) && (pe = r(pe)),
                    pe in j ? (Te[pe] = je) : (De || (De = {}), (De[pe] = je)));
            for (pe in Te) {
              if (((je = Te[pe]), (Le = this.props[pe]), !Le)) {
                if (!an) continue;
                Le = b.call(this, pe);
              }
              ce.call(this, Le, je);
            }
            ye && De && ye.call(this, De);
          }
          function Ce(ne) {
            ne.stop();
          }
          function _r(ne, ce) {
            ne.set(ce);
          }
          function j_(ne) {
            this.$el.css(ne);
          }
          function Be(ne, ce) {
            f[ne] = function () {
              return this.children
                ? z_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function z_(ne, ce) {
            var ye,
              pe = this.children.length;
            for (ye = 0; pe > ye; ye++) ne.apply(this.children[ye], ce);
            return this;
          }
          (f.init = function (ne) {
            if (
              ((this.$el = e(ne)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = W(this.el, "transition");
              ce && !$.test(ce) && (this.upstream = ce);
            }
            H.backface &&
              oe.hideBackface &&
              v(this.el, H.backface.css, "hidden");
          }),
            Be("add", b),
            Be("start", w),
            Be("wait", R),
            Be("then", O),
            Be("next", N),
            Be("stop", Z),
            Be("set", ae),
            Be("show", ge),
            Be("hide", z),
            Be("redraw", se),
            Be("destroy", ue);
        }),
        y = g(p, function (f) {
          function b(w, R) {
            var O = e.data(w, D) || e.data(w, D, new p.Bare());
            return O.el || O.init(w), R ? O.start(R) : O;
          }
          f.init = function (w, R) {
            var O = e(w);
            if (!O.length) return this;
            if (O.length === 1) return b(O[0], R);
            var N = [];
            return (
              O.each(function (Z, ae) {
                N.push(b(ae, R));
              }),
              (this.children = N),
              this
            );
          };
        }),
        _ = g(function (f) {
          function b() {
            var N = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(N), Z;
          }
          function w(N, Z, ae) {
            return Z !== void 0 && (ae = Z), N in m ? N : ae;
          }
          function R(N) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
            return (Z ? o(Z[1], Z[2], Z[3]) : N).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var O = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (N, Z, ae, ge) {
            (this.$el = N), (this.el = N[0]);
            var z = Z[0];
            ae[2] && (z = ae[2]),
              Q[z] && (z = Q[z]),
              (this.name = z),
              (this.type = ae[1]),
              (this.duration = u(Z[1], this.duration, O.duration)),
              (this.ease = w(Z[2], this.ease, O.ease)),
              (this.delay = u(Z[3], this.delay, O.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ee +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ee + m[this.ease][0] : "") +
                    (this.delay ? ee + this.delay + "ms" : "")));
          }),
            (f.set = function (N) {
              (N = this.convert(N, this.type)), this.update(N), this.redraw();
            }),
            (f.transition = function (N) {
              (this.active = !0),
                (N = this.convert(N, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  N == "auto" && (N = b.call(this))),
                (this.nextStyle = N);
            }),
            (f.fallback = function (N) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (N = this.convert(N, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  N == "auto" && (N = b.call(this))),
                (this.tween = new A({
                  from: Z,
                  to: N,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return W(this.el, this.name);
            }),
            (f.update = function (N) {
              v(this.el, this.name, N);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                v(this.el, this.name, this.get()));
              var N = this.tween;
              N && N.context && N.destroy();
            }),
            (f.convert = function (N, Z) {
              if (N == "auto" && this.auto) return N;
              var ae,
                ge = typeof N == "number",
                z = typeof N == "string";
              switch (Z) {
                case C:
                  if (ge) return N;
                  if (z && N.replace(S, "") === "") return +N;
                  ae = "number(unitless)";
                  break;
                case P:
                  if (z) {
                    if (N === "" && this.original) return this.original;
                    if (Z.test(N))
                      return N.charAt(0) == "#" && N.length == 7 ? N : R(N);
                  }
                  ae = "hex or rgb string";
                  break;
                case q:
                  if (ge) return N + this.unit;
                  if (z && Z.test(N)) return N;
                  ae = "number(px) or string(unit)";
                  break;
                case M:
                  if (ge) return N + this.unit;
                  if (z && Z.test(N)) return N;
                  ae = "number(px) or string(unit or %)";
                  break;
                case X:
                  if (ge) return N + this.angle;
                  if (z && Z.test(N)) return N;
                  ae = "number(deg) or string(angle)";
                  break;
                case K:
                  if (ge || (z && M.test(N))) return N;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, N), N;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        l = g(_, function (f, b) {
          f.init = function () {
            b.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), P));
          };
        }),
        G = g(_, function (f, b) {
          (f.init = function () {
            b.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (w) {
              this.$el[this.name](w);
            });
        }),
        V = g(_, function (f, b) {
          function w(R, O) {
            var N, Z, ae, ge, z;
            for (N in R)
              (ge = de[N]),
                (ae = ge[0]),
                (Z = ge[1] || N),
                (z = this.convert(R[N], ae)),
                O.call(this, Z, z, ae);
          }
          (f.init = function () {
            b.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  v(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (R) {
              w.call(this, R, function (O, N) {
                this.current[O] = N;
              }),
                v(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (R) {
              var O = this.values(R);
              this.tween = new le({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var N,
                Z = {};
              for (N in this.current) Z[N] = N in O ? O[N] : this.current[N];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (f.fallback = function (R) {
              var O = this.values(R);
              this.tween = new le({
                current: this.current,
                values: O,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              v(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (R) {
              var O,
                N = "";
              for (O in R) N += O + "(" + R[O] + ") ";
              return N;
            }),
            (f.values = function (R) {
              var O,
                N = {};
              return (
                w.call(this, R, function (Z, ae, ge) {
                  (N[Z] = ae),
                    this.current[Z] === void 0 &&
                      ((O = 0),
                      ~Z.indexOf("scale") && (O = 1),
                      (this.current[Z] = this.convert(O, ge)));
                }),
                N
              );
            });
        }),
        A = g(function (f) {
          function b(z) {
            ae.push(z) === 1 && k(w);
          }
          function w() {
            var z,
              se,
              ue,
              be = ae.length;
            if (be)
              for (k(w), se = Y(), z = be; z--; )
                (ue = ae[z]), ue && ue.render(se);
          }
          function R(z) {
            var se,
              ue = e.inArray(z, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function O(z) {
            return Math.round(z * ge) / ge;
          }
          function N(z, se, ue) {
            return o(
              z[0] + ue * (se[0] - z[0]),
              z[1] + ue * (se[1] - z[1]),
              z[2] + ue * (se[2] - z[2])
            );
          }
          var Z = { ease: m.ease[1], from: 0, to: 1 };
          (f.init = function (z) {
            (this.duration = z.duration || 0), (this.delay = z.delay || 0);
            var se = z.ease || Z.ease;
            m[se] && (se = m[se][1]),
              typeof se != "function" && (se = Z.ease),
              (this.ease = se),
              (this.update = z.update || i),
              (this.complete = z.complete || i),
              (this.context = z.context || this),
              (this.name = z.name);
            var ue = z.from,
              be = z.to;
            ue === void 0 && (ue = Z.from),
              be === void 0 && (be = Z.to),
              (this.unit = z.unit || ""),
              typeof ue == "number" && typeof be == "number"
                ? ((this.begin = ue), (this.change = be - ue))
                : this.format(be, ue),
              (this.value = this.begin + this.unit),
              (this.start = Y()),
              z.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = Y()), (this.active = !0), b(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), R(this));
            }),
            (f.render = function (z) {
              var se,
                ue = z - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var be = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? N(this.startRGB, this.endRGB, be)
                    : O(this.begin + be * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (z, se) {
              if (((se += ""), (z += ""), z.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(z)),
                  (this.endHex = z),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(S, ""),
                  be = z.replace(S, "");
                ue !== be && s("tween", se, z), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (z = parseFloat(z)),
                (this.begin = this.value = se),
                (this.change = z - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = i);
            });
          var ae = [],
            ge = 1e3;
        }),
        ie = g(A, function (f) {
          (f.init = function (b) {
            (this.duration = b.duration || 0),
              (this.complete = b.complete || i),
              (this.context = b.context),
              this.play();
          }),
            (f.render = function (b) {
              var w = b - this.start;
              w < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        le = g(A, function (f, b) {
          (f.init = function (w) {
            (this.context = w.context),
              (this.update = w.update),
              (this.tweens = []),
              (this.current = w.current);
            var R, O;
            for (R in w.values)
              (O = w.values[R]),
                this.current[R] !== O &&
                  this.tweens.push(
                    new A({
                      name: R,
                      from: this.current[R],
                      to: O,
                      duration: w.duration,
                      delay: w.delay,
                      ease: w.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (w) {
              var R,
                O,
                N = this.tweens.length,
                Z = !1;
              for (R = N; R--; )
                (O = this.tweens[R]),
                  O.context &&
                    (O.render(w), (this.current[O.name] = O.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((b.destroy.call(this), this.tweens)) {
                var w,
                  R = this.tweens.length;
                for (w = R; w--; ) this.tweens[w].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !H.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!H.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var b = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = b.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new A(f);
        }),
        (t.delay = function (f, b, w) {
          return new ie({ complete: b, duration: f, context: w });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var v = e.style,
        W = e.css,
        Q = { transform: H.transform && H.transform.css },
        j = {
          color: [l, P],
          background: [l, P, "background-color"],
          "outline-color": [l, P],
          "border-color": [l, P],
          "border-top-color": [l, P],
          "border-right-color": [l, P],
          "border-bottom-color": [l, P],
          "border-left-color": [l, P],
          "border-width": [_, q],
          "border-top-width": [_, q],
          "border-right-width": [_, q],
          "border-bottom-width": [_, q],
          "border-left-width": [_, q],
          "border-spacing": [_, q],
          "letter-spacing": [_, q],
          margin: [_, q],
          "margin-top": [_, q],
          "margin-right": [_, q],
          "margin-bottom": [_, q],
          "margin-left": [_, q],
          padding: [_, q],
          "padding-top": [_, q],
          "padding-right": [_, q],
          "padding-bottom": [_, q],
          "padding-left": [_, q],
          "outline-width": [_, q],
          opacity: [_, C],
          top: [_, M],
          right: [_, M],
          bottom: [_, M],
          left: [_, M],
          "font-size": [_, M],
          "text-indent": [_, M],
          "word-spacing": [_, M],
          width: [_, M],
          "min-width": [_, M],
          "max-width": [_, M],
          height: [_, M],
          "min-height": [_, M],
          "max-height": [_, M],
          "line-height": [_, K],
          "scroll-top": [G, C, "scrollTop"],
          "scroll-left": [G, C, "scrollLeft"],
        },
        de = {};
      H.transform &&
        ((j.transform = [V]),
        (de = {
          x: [M, "translateX"],
          y: [M, "translateY"],
          rotate: [X],
          rotateX: [X],
          rotateY: [X],
          scale: [C],
          scaleX: [C],
          scaleY: [C],
          skew: [X],
          skewX: [X],
          skewY: [X],
        })),
        H.transform &&
          H.backface &&
          ((de.z = [M, "translateZ"]),
          (de.rotateZ = [X]),
          (de.scaleZ = [C]),
          (de.perspective = [q]));
      var qe = /ms/,
        Xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ns = c((VV, Ls) => {
    "use strict";
    var eb = window.$,
      tb = Li() && eb.tram;
    Ls.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        o = Function.prototype,
        i = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        h = r.forEach,
        g = r.map,
        m = r.reduce,
        E = r.reduceRight,
        T = r.filter,
        I = r.every,
        D = r.some,
        S = r.indexOf,
        L = r.lastIndexOf,
        C = Array.isArray,
        P = Object.keys,
        q = o.bind,
        M =
          (e.each =
          e.forEach =
            function (x, F, B) {
              if (x == null) return x;
              if (h && x.forEach === h) x.forEach(F, B);
              else if (x.length === +x.length) {
                for (var H = 0, te = x.length; H < te; H++)
                  if (F.call(B, x[H], H, x) === t) return;
              } else
                for (var re = e.keys(x), H = 0, te = re.length; H < te; H++)
                  if (F.call(B, x[re[H]], re[H], x) === t) return;
              return x;
            });
      (e.map = e.collect =
        function (x, F, B) {
          var H = [];
          return x == null
            ? H
            : g && x.map === g
            ? x.map(F, B)
            : (M(x, function (te, re, k) {
                H.push(F.call(B, te, re, k));
              }),
              H);
        }),
        (e.find = e.detect =
          function (x, F, B) {
            var H;
            return (
              X(x, function (te, re, k) {
                if (F.call(B, te, re, k)) return (H = te), !0;
              }),
              H
            );
          }),
        (e.filter = e.select =
          function (x, F, B) {
            var H = [];
            return x == null
              ? H
              : T && x.filter === T
              ? x.filter(F, B)
              : (M(x, function (te, re, k) {
                  F.call(B, te, re, k) && H.push(te);
                }),
                H);
          });
      var X =
        (e.some =
        e.any =
          function (x, F, B) {
            F || (F = e.identity);
            var H = !1;
            return x == null
              ? H
              : D && x.some === D
              ? x.some(F, B)
              : (M(x, function (te, re, k) {
                  if (H || (H = F.call(B, te, re, k))) return t;
                }),
                !!H);
          });
      (e.contains = e.include =
        function (x, F) {
          return x == null
            ? !1
            : S && x.indexOf === S
            ? x.indexOf(F) != -1
            : X(x, function (B) {
                return B === F;
              });
        }),
        (e.delay = function (x, F) {
          var B = a.call(arguments, 2);
          return setTimeout(function () {
            return x.apply(null, B);
          }, F);
        }),
        (e.defer = function (x) {
          return e.delay.apply(e, [x, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (x) {
          var F, B, H;
          return function () {
            F ||
              ((F = !0),
              (B = arguments),
              (H = this),
              tb.frame(function () {
                (F = !1), x.apply(H, B);
              }));
          };
        }),
        (e.debounce = function (x, F, B) {
          var H,
            te,
            re,
            k,
            Y,
            p = function () {
              var y = e.now() - k;
              y < F
                ? (H = setTimeout(p, F - y))
                : ((H = null), B || ((Y = x.apply(re, te)), (re = te = null)));
            };
          return function () {
            (re = this), (te = arguments), (k = e.now());
            var y = B && !H;
            return (
              H || (H = setTimeout(p, F)),
              y && ((Y = x.apply(re, te)), (re = te = null)),
              Y
            );
          };
        }),
        (e.defaults = function (x) {
          if (!e.isObject(x)) return x;
          for (var F = 1, B = arguments.length; F < B; F++) {
            var H = arguments[F];
            for (var te in H) x[te] === void 0 && (x[te] = H[te]);
          }
          return x;
        }),
        (e.keys = function (x) {
          if (!e.isObject(x)) return [];
          if (P) return P(x);
          var F = [];
          for (var B in x) e.has(x, B) && F.push(B);
          return F;
        }),
        (e.has = function (x, F) {
          return d.call(x, F);
        }),
        (e.isObject = function (x) {
          return x === Object(x);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var K = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        ee = function (x) {
          return "\\" + $[x];
        },
        U = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (x, F, B) {
          !F && B && (F = B), (F = e.defaults({}, F, e.templateSettings));
          var H = RegExp(
              [
                (F.escape || K).source,
                (F.interpolate || K).source,
                (F.evaluate || K).source,
              ].join("|") + "|$",
              "g"
            ),
            te = 0,
            re = "__p+='";
          x.replace(H, function (y, _, l, G, V) {
            return (
              (re += x.slice(te, V).replace(J, ee)),
              (te = V + y.length),
              _
                ? (re +=
                    `'+
((__t=(` +
                    _ +
                    `))==null?'':_.escape(__t))+
'`)
                : l
                ? (re +=
                    `'+
((__t=(` +
                    l +
                    `))==null?'':__t)+
'`)
                : G &&
                  (re +=
                    `';
` +
                    G +
                    `
__p+='`),
              y
            );
          }),
            (re += `';
`);
          var k = F.variable;
          if (k) {
            if (!U.test(k))
              throw new Error("variable is not a bare identifier: " + k);
          } else
            (re =
              `with(obj||{}){
` +
              re +
              `}
`),
              (k = "obj");
          re =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            re +
            `return __p;
`;
          var Y;
          try {
            Y = new Function(F.variable || "obj", "_", re);
          } catch (y) {
            throw ((y.source = re), y);
          }
          var p = function (y) {
            return Y.call(this, y, e);
          };
          return (
            (p.source =
              "function(" +
              k +
              `){
` +
              re +
              "}"),
            p
          );
        }),
        e
      );
    })();
  });
  var Ge = c((WV, ks) => {
    "use strict";
    var ve = {},
      Wt = {},
      Ht = [],
      Pi = window.Webflow || [],
      _t = window.jQuery,
      Ke = _t(window),
      rb = _t(document),
      it = _t.isFunction,
      ze = (ve._ = Ns()),
      Ms = (ve.tram = Li() && _t.tram),
      cn = !1,
      Mi = !1;
    Ms.config.hideBackface = !1;
    Ms.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      Wt[e] && Ds(Wt[e]);
      var n = (Wt[e] = t(_t, ze, r) || {});
      return qs(n), n;
    };
    ve.require = function (e) {
      return Wt[e];
    };
    function qs(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && nb(e);
    }
    function nb(e) {
      if (cn) {
        e.ready();
        return;
      }
      ze.contains(Ht, e.ready) || Ht.push(e.ready);
    }
    function Ds(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && ib(e);
    }
    function ib(e) {
      Ht = ze.filter(Ht, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (cn) {
        it(e) && e();
        return;
      }
      Pi.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var un = navigator.userAgent.toLowerCase(),
      Fs = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      ob = (ve.env.chrome =
        /chrome/.test(un) &&
        /Google/.test(navigator.vendor) &&
        parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
      ab = (ve.env.ios = /(ipod|iphone|ipad)/.test(un));
    ve.env.safari = /safari/.test(un) && !ob && !ab;
    var Ni;
    Fs &&
      rb.on("touchstart mousedown", function (e) {
        Ni = e.target;
      });
    ve.validClick = Fs
      ? function (e) {
          return e === Ni || _t.contains(e, Ni);
        }
      : function () {
          return !0;
        };
    var Gs = "resize.webflow orientationchange.webflow load.webflow",
      sb = "scroll.webflow " + Gs;
    ve.resize = qi(Ke, Gs);
    ve.scroll = qi(Ke, sb);
    ve.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (o) {
          ze.each(r, function (i) {
            i(o);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (o) {
          typeof o == "function" && (ze.contains(r, o) || r.push(o));
        }),
        (n.off = function (o) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (i) {
            return i !== o;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () {});
    ve.ready = function () {
      (cn = !0), Mi ? ub() : ze.each(Ht, Ps), ze.each(Pi, Ps), ve.resize.up();
    };
    function Ps(e) {
      it(e) && e();
    }
    function ub() {
      (Mi = !1), ze.each(Wt, qs);
    }
    var Ct;
    ve.load = function (e) {
      Ct.then(e);
    };
    function Us() {
      Ct && (Ct.reject(), Ke.off("load", Ct.resolve)),
        (Ct = new _t.Deferred()),
        Ke.on("load", Ct.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (Mi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (cn = e.domready),
        ze.each(Wt, Ds),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Ht = []),
        (Pi = []),
        Ct.state() === "pending" && Us();
    };
    _t(ve.ready);
    Us();
    ks.exports = window.Webflow = ve;
  });
  var Hs = c((HV, Ws) => {
    "use strict";
    var Vs = Ge();
    Vs.define(
      "brand",
      (Ws.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          o = e("body"),
          i = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var E = n.attr("data-wf-status"),
            T = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
            E &&
              !s &&
              ((d = d || g()),
              m(),
              setTimeout(m, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var E =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", E ? "display: none !important;" : "");
        }
        function g() {
          var E = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            I = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return E.append(T, I), E[0];
        }
        function m() {
          var E = o.children(i),
            T = E.length && E.get(0) === d,
            I = Vs.env("editor");
          if (T) {
            I && E.remove();
            return;
          }
          E.length && E.remove(), I || o.append(d);
        }
        return t;
      })
    );
  });
  var Bs = c((XV, Xs) => {
    "use strict";
    var Di = Ge();
    Di.define(
      "edit",
      (Xs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Di.env("test") || Di.env("frame")) && !r.fixture && !cb())
        )
          return { exit: 1 };
        var n = {},
          o = e(window),
          i = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          d = r.load || m,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : o.on(s, g).triggerHandler(s);
        function g() {
          u || (/\?edit/.test(a.hash) && d());
        }
        function m() {
          (u = !0),
            (window.WebflowEditor = !0),
            o.off(s, g),
            L(function (P) {
              e.ajax({
                url: S("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: i.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: E(P),
              });
            });
        }
        function E(P) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = P),
              T(D(q.bugReporterScriptPath), function () {
                T(D(q.scriptPath), function () {
                  window.WebflowEditor(q);
                });
              });
          };
        }
        function T(P, q) {
          e.ajax({ type: "GET", url: P, dataType: "script", cache: !0 }).then(
            q,
            I
          );
        }
        function I(P, q, M) {
          throw (console.error("Could not load editor script: " + q), M);
        }
        function D(P) {
          return P.indexOf("//") >= 0
            ? P
            : S("https://editor-api.webflow.com" + P);
        }
        function S(P) {
          return P.replace(/([^:])\/\//g, "$1/");
        }
        function L(P) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var M = function (X) {
            X.data === "WF_third_party_cookies_unsupported"
              ? (C(q, M), P(!1))
              : X.data === "WF_third_party_cookies_supported" &&
                (C(q, M), P(!0));
          };
          (q.onerror = function () {
            C(q, M), P(!1);
          }),
            window.addEventListener("message", M, !1),
            window.document.body.appendChild(q);
        }
        function C(P, q) {
          window.removeEventListener("message", q, !1), P.remove();
        }
        return n;
      })
    );
    function cb() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var zs = c((BV, js) => {
    "use strict";
    var lb = Ge();
    lb.define(
      "focus-visible",
      (js.exports = function () {
        function e(r) {
          var n = !0,
            o = !1,
            i = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(C) {
            return !!(
              C &&
              C !== document &&
              C.nodeName !== "HTML" &&
              C.nodeName !== "BODY" &&
              "classList" in C &&
              "contains" in C.classList
            );
          }
          function u(C) {
            var P = C.type,
              q = C.tagName;
            return !!(
              (q === "INPUT" && a[P] && !C.readOnly) ||
              (q === "TEXTAREA" && !C.readOnly) ||
              C.isContentEditable
            );
          }
          function d(C) {
            C.getAttribute("data-wf-focus-visible") ||
              C.setAttribute("data-wf-focus-visible", "true");
          }
          function h(C) {
            C.getAttribute("data-wf-focus-visible") &&
              C.removeAttribute("data-wf-focus-visible");
          }
          function g(C) {
            C.metaKey ||
              C.altKey ||
              C.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function m() {
            n = !1;
          }
          function E(C) {
            s(C.target) && (n || u(C.target)) && d(C.target);
          }
          function T(C) {
            s(C.target) &&
              C.target.hasAttribute("data-wf-focus-visible") &&
              ((o = !0),
              window.clearTimeout(i),
              (i = window.setTimeout(function () {
                o = !1;
              }, 100)),
              h(C.target));
          }
          function I() {
            document.visibilityState === "hidden" && (o && (n = !0), D());
          }
          function D() {
            document.addEventListener("mousemove", L),
              document.addEventListener("mousedown", L),
              document.addEventListener("mouseup", L),
              document.addEventListener("pointermove", L),
              document.addEventListener("pointerdown", L),
              document.addEventListener("pointerup", L),
              document.addEventListener("touchmove", L),
              document.addEventListener("touchstart", L),
              document.addEventListener("touchend", L);
          }
          function S() {
            document.removeEventListener("mousemove", L),
              document.removeEventListener("mousedown", L),
              document.removeEventListener("mouseup", L),
              document.removeEventListener("pointermove", L),
              document.removeEventListener("pointerdown", L),
              document.removeEventListener("pointerup", L),
              document.removeEventListener("touchmove", L),
              document.removeEventListener("touchstart", L),
              document.removeEventListener("touchend", L);
          }
          function L(C) {
            (C.target.nodeName && C.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), S());
          }
          document.addEventListener("keydown", g, !0),
            document.addEventListener("mousedown", m, !0),
            document.addEventListener("pointerdown", m, !0),
            document.addEventListener("touchstart", m, !0),
            document.addEventListener("visibilitychange", I, !0),
            D(),
            r.addEventListener("focus", E, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var $s = c((jV, Ys) => {
    "use strict";
    var Ks = Ge();
    Ks.define(
      "focus",
      (Ys.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function o(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function i() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Ks.env.safari &&
            (document.addEventListener("mousedown", o, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: i };
      })
    );
  });
  var Js = c((zV, Zs) => {
    "use strict";
    var Fi = window.jQuery,
      ot = {},
      ln = [],
      Qs = ".w-ix",
      fn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Fi(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Fi(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs };
    ot.init = function () {
      for (var e = ln.length, t = 0; t < e; t++) {
        var r = ln[t];
        r[0](0, r[1]);
      }
      (ln = []), Fi.extend(ot.triggers, fn);
    };
    ot.async = function () {
      for (var e in fn) {
        var t = fn[e];
        fn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            ln.push([t, n]);
          });
      }
    };
    ot.async();
    Zs.exports = ot;
  });
  var br = c((KV, ru) => {
    "use strict";
    var Gi = Js();
    function eu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var fb = window.jQuery,
      dn = {},
      tu = ".w-ix",
      db = {
        reset: function (e, t) {
          Gi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Gi.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Gi.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE");
        },
      };
    dn.triggers = {};
    dn.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    fb.extend(dn.triggers, db);
    ru.exports = dn;
  });
  var nu = c((YV, pt) => {
    function Ui(e) {
      return (
        (pt.exports = Ui =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (pt.exports.__esModule = !0),
        (pt.exports.default = pt.exports),
        Ui(e)
      );
    }
    (pt.exports = Ui),
      (pt.exports.__esModule = !0),
      (pt.exports.default = pt.exports);
  });
  var pn = c(($V, Tr) => {
    var pb = nu().default;
    function iu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (iu = function (o) {
        return o ? r : t;
      })(e);
    }
    function vb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (pb(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = iu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, i, a)
            : (n[i] = e[i]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Tr.exports = vb),
      (Tr.exports.__esModule = !0),
      (Tr.exports.default = Tr.exports);
  });
  var ou = c((QV, Ir) => {
    function gb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = gb),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var Ee = c((ZV, au) => {
    var vn = function (e) {
      return e && e.Math == Math && e;
    };
    au.exports =
      vn(typeof globalThis == "object" && globalThis) ||
      vn(typeof window == "object" && window) ||
      vn(typeof self == "object" && self) ||
      vn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Xt = c((JV, su) => {
    su.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Lt = c((eW, uu) => {
    var hb = Xt();
    uu.exports = !hb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var gn = c((tW, cu) => {
    var Or = Function.prototype.call;
    cu.exports = Or.bind
      ? Or.bind(Or)
      : function () {
          return Or.apply(Or, arguments);
        };
  });
  var pu = c((du) => {
    "use strict";
    var lu = {}.propertyIsEnumerable,
      fu = Object.getOwnPropertyDescriptor,
      mb = fu && !lu.call({ 1: 2 }, 1);
    du.f = mb
      ? function (t) {
          var r = fu(this, t);
          return !!r && r.enumerable;
        }
      : lu;
  });
  var ki = c((nW, vu) => {
    vu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((iW, hu) => {
    var gu = Function.prototype,
      Vi = gu.bind,
      Wi = gu.call,
      Eb = Vi && Vi.bind(Wi);
    hu.exports = Vi
      ? function (e) {
          return e && Eb(Wi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Wi.apply(e, arguments);
            }
          );
        };
  });
  var yu = c((oW, Eu) => {
    var mu = Ye(),
      yb = mu({}.toString),
      _b = mu("".slice);
    Eu.exports = function (e) {
      return _b(yb(e), 8, -1);
    };
  });
  var bu = c((aW, _u) => {
    var bb = Ee(),
      Tb = Ye(),
      Ib = Xt(),
      Ob = yu(),
      Hi = bb.Object,
      wb = Tb("".split);
    _u.exports = Ib(function () {
      return !Hi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Ob(e) == "String" ? wb(e, "") : Hi(e);
        }
      : Hi;
  });
  var Xi = c((sW, Tu) => {
    var xb = Ee(),
      Ab = xb.TypeError;
    Tu.exports = function (e) {
      if (e == null) throw Ab("Can't call method on " + e);
      return e;
    };
  });
  var wr = c((uW, Iu) => {
    var Sb = bu(),
      Rb = Xi();
    Iu.exports = function (e) {
      return Sb(Rb(e));
    };
  });
  var at = c((cW, Ou) => {
    Ou.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Bt = c((lW, wu) => {
    var Cb = at();
    wu.exports = function (e) {
      return typeof e == "object" ? e !== null : Cb(e);
    };
  });
  var xr = c((fW, xu) => {
    var Bi = Ee(),
      Lb = at(),
      Nb = function (e) {
        return Lb(e) ? e : void 0;
      };
    xu.exports = function (e, t) {
      return arguments.length < 2 ? Nb(Bi[e]) : Bi[e] && Bi[e][t];
    };
  });
  var Su = c((dW, Au) => {
    var Pb = Ye();
    Au.exports = Pb({}.isPrototypeOf);
  });
  var Cu = c((pW, Ru) => {
    var Mb = xr();
    Ru.exports = Mb("navigator", "userAgent") || "";
  });
  var Fu = c((vW, Du) => {
    var qu = Ee(),
      ji = Cu(),
      Lu = qu.process,
      Nu = qu.Deno,
      Pu = (Lu && Lu.versions) || (Nu && Nu.version),
      Mu = Pu && Pu.v8,
      $e,
      hn;
    Mu &&
      (($e = Mu.split(".")),
      (hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !hn &&
      ji &&
      (($e = ji.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = ji.match(/Chrome\/(\d+)/)), $e && (hn = +$e[1])));
    Du.exports = hn;
  });
  var zi = c((gW, Uu) => {
    var Gu = Fu(),
      qb = Xt();
    Uu.exports =
      !!Object.getOwnPropertySymbols &&
      !qb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Gu && Gu < 41)
        );
      });
  });
  var Ki = c((hW, ku) => {
    var Db = zi();
    ku.exports = Db && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Yi = c((mW, Vu) => {
    var Fb = Ee(),
      Gb = xr(),
      Ub = at(),
      kb = Su(),
      Vb = Ki(),
      Wb = Fb.Object;
    Vu.exports = Vb
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Gb("Symbol");
          return Ub(t) && kb(t.prototype, Wb(e));
        };
  });
  var Hu = c((EW, Wu) => {
    var Hb = Ee(),
      Xb = Hb.String;
    Wu.exports = function (e) {
      try {
        return Xb(e);
      } catch {
        return "Object";
      }
    };
  });
  var Bu = c((yW, Xu) => {
    var Bb = Ee(),
      jb = at(),
      zb = Hu(),
      Kb = Bb.TypeError;
    Xu.exports = function (e) {
      if (jb(e)) return e;
      throw Kb(zb(e) + " is not a function");
    };
  });
  var zu = c((_W, ju) => {
    var Yb = Bu();
    ju.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Yb(r);
    };
  });
  var Yu = c((bW, Ku) => {
    var $b = Ee(),
      $i = gn(),
      Qi = at(),
      Zi = Bt(),
      Qb = $b.TypeError;
    Ku.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Qi((r = e.toString)) && !Zi((n = $i(r, e)))) ||
        (Qi((r = e.valueOf)) && !Zi((n = $i(r, e)))) ||
        (t !== "string" && Qi((r = e.toString)) && !Zi((n = $i(r, e))))
      )
        return n;
      throw Qb("Can't convert object to primitive value");
    };
  });
  var Qu = c((TW, $u) => {
    $u.exports = !1;
  });
  var mn = c((IW, Ju) => {
    var Zu = Ee(),
      Zb = Object.defineProperty;
    Ju.exports = function (e, t) {
      try {
        Zb(Zu, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        Zu[e] = t;
      }
      return t;
    };
  });
  var En = c((OW, tc) => {
    var Jb = Ee(),
      eT = mn(),
      ec = "__core-js_shared__",
      tT = Jb[ec] || eT(ec, {});
    tc.exports = tT;
  });
  var Ji = c((wW, nc) => {
    var rT = Qu(),
      rc = En();
    (nc.exports = function (e, t) {
      return rc[e] || (rc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: rT ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var oc = c((xW, ic) => {
    var nT = Ee(),
      iT = Xi(),
      oT = nT.Object;
    ic.exports = function (e) {
      return oT(iT(e));
    };
  });
  var bt = c((AW, ac) => {
    var aT = Ye(),
      sT = oc(),
      uT = aT({}.hasOwnProperty);
    ac.exports =
      Object.hasOwn ||
      function (t, r) {
        return uT(sT(t), r);
      };
  });
  var eo = c((SW, sc) => {
    var cT = Ye(),
      lT = 0,
      fT = Math.random(),
      dT = cT((1).toString);
    sc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + dT(++lT + fT, 36);
    };
  });
  var to = c((RW, dc) => {
    var pT = Ee(),
      vT = Ji(),
      uc = bt(),
      gT = eo(),
      cc = zi(),
      fc = Ki(),
      jt = vT("wks"),
      Nt = pT.Symbol,
      lc = Nt && Nt.for,
      hT = fc ? Nt : (Nt && Nt.withoutSetter) || gT;
    dc.exports = function (e) {
      if (!uc(jt, e) || !(cc || typeof jt[e] == "string")) {
        var t = "Symbol." + e;
        cc && uc(Nt, e)
          ? (jt[e] = Nt[e])
          : fc && lc
          ? (jt[e] = lc(t))
          : (jt[e] = hT(t));
      }
      return jt[e];
    };
  });
  var hc = c((CW, gc) => {
    var mT = Ee(),
      ET = gn(),
      pc = Bt(),
      vc = Yi(),
      yT = zu(),
      _T = Yu(),
      bT = to(),
      TT = mT.TypeError,
      IT = bT("toPrimitive");
    gc.exports = function (e, t) {
      if (!pc(e) || vc(e)) return e;
      var r = yT(e, IT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = ET(r, e, t)), !pc(n) || vc(n))
        )
          return n;
        throw TT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), _T(e, t);
    };
  });
  var ro = c((LW, mc) => {
    var OT = hc(),
      wT = Yi();
    mc.exports = function (e) {
      var t = OT(e, "string");
      return wT(t) ? t : t + "";
    };
  });
  var io = c((NW, yc) => {
    var xT = Ee(),
      Ec = Bt(),
      no = xT.document,
      AT = Ec(no) && Ec(no.createElement);
    yc.exports = function (e) {
      return AT ? no.createElement(e) : {};
    };
  });
  var oo = c((PW, _c) => {
    var ST = Lt(),
      RT = Xt(),
      CT = io();
    _c.exports =
      !ST &&
      !RT(function () {
        return (
          Object.defineProperty(CT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var ao = c((Tc) => {
    var LT = Lt(),
      NT = gn(),
      PT = pu(),
      MT = ki(),
      qT = wr(),
      DT = ro(),
      FT = bt(),
      GT = oo(),
      bc = Object.getOwnPropertyDescriptor;
    Tc.f = LT
      ? bc
      : function (t, r) {
          if (((t = qT(t)), (r = DT(r)), GT))
            try {
              return bc(t, r);
            } catch {}
          if (FT(t, r)) return MT(!NT(PT.f, t, r), t[r]);
        };
  });
  var Ar = c((qW, Oc) => {
    var Ic = Ee(),
      UT = Bt(),
      kT = Ic.String,
      VT = Ic.TypeError;
    Oc.exports = function (e) {
      if (UT(e)) return e;
      throw VT(kT(e) + " is not an object");
    };
  });
  var Sr = c((Ac) => {
    var WT = Ee(),
      HT = Lt(),
      XT = oo(),
      wc = Ar(),
      BT = ro(),
      jT = WT.TypeError,
      xc = Object.defineProperty;
    Ac.f = HT
      ? xc
      : function (t, r, n) {
          if ((wc(t), (r = BT(r)), wc(n), XT))
            try {
              return xc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw jT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((FW, Sc) => {
    var zT = Lt(),
      KT = Sr(),
      YT = ki();
    Sc.exports = zT
      ? function (e, t, r) {
          return KT.f(e, t, YT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var uo = c((GW, Rc) => {
    var $T = Ye(),
      QT = at(),
      so = En(),
      ZT = $T(Function.toString);
    QT(so.inspectSource) ||
      (so.inspectSource = function (e) {
        return ZT(e);
      });
    Rc.exports = so.inspectSource;
  });
  var Nc = c((UW, Lc) => {
    var JT = Ee(),
      eI = at(),
      tI = uo(),
      Cc = JT.WeakMap;
    Lc.exports = eI(Cc) && /native code/.test(tI(Cc));
  });
  var co = c((kW, Mc) => {
    var rI = Ji(),
      nI = eo(),
      Pc = rI("keys");
    Mc.exports = function (e) {
      return Pc[e] || (Pc[e] = nI(e));
    };
  });
  var _n = c((VW, qc) => {
    qc.exports = {};
  });
  var Vc = c((WW, kc) => {
    var iI = Nc(),
      Uc = Ee(),
      lo = Ye(),
      oI = Bt(),
      aI = yn(),
      fo = bt(),
      po = En(),
      sI = co(),
      uI = _n(),
      Dc = "Object already initialized",
      go = Uc.TypeError,
      cI = Uc.WeakMap,
      bn,
      Rr,
      Tn,
      lI = function (e) {
        return Tn(e) ? Rr(e) : bn(e, {});
      },
      fI = function (e) {
        return function (t) {
          var r;
          if (!oI(t) || (r = Rr(t)).type !== e)
            throw go("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    iI || po.state
      ? ((Tt = po.state || (po.state = new cI())),
        (Fc = lo(Tt.get)),
        (vo = lo(Tt.has)),
        (Gc = lo(Tt.set)),
        (bn = function (e, t) {
          if (vo(Tt, e)) throw new go(Dc);
          return (t.facade = e), Gc(Tt, e, t), t;
        }),
        (Rr = function (e) {
          return Fc(Tt, e) || {};
        }),
        (Tn = function (e) {
          return vo(Tt, e);
        }))
      : ((Pt = sI("state")),
        (uI[Pt] = !0),
        (bn = function (e, t) {
          if (fo(e, Pt)) throw new go(Dc);
          return (t.facade = e), aI(e, Pt, t), t;
        }),
        (Rr = function (e) {
          return fo(e, Pt) ? e[Pt] : {};
        }),
        (Tn = function (e) {
          return fo(e, Pt);
        }));
    var Tt, Fc, vo, Gc, Pt;
    kc.exports = { set: bn, get: Rr, has: Tn, enforce: lI, getterFor: fI };
  });
  var Xc = c((HW, Hc) => {
    var ho = Lt(),
      dI = bt(),
      Wc = Function.prototype,
      pI = ho && Object.getOwnPropertyDescriptor,
      mo = dI(Wc, "name"),
      vI = mo && function () {}.name === "something",
      gI = mo && (!ho || (ho && pI(Wc, "name").configurable));
    Hc.exports = { EXISTS: mo, PROPER: vI, CONFIGURABLE: gI };
  });
  var Yc = c((XW, Kc) => {
    var hI = Ee(),
      Bc = at(),
      mI = bt(),
      jc = yn(),
      EI = mn(),
      yI = uo(),
      zc = Vc(),
      _I = Xc().CONFIGURABLE,
      bI = zc.get,
      TI = zc.enforce,
      II = String(String).split("String");
    (Kc.exports = function (e, t, r, n) {
      var o = n ? !!n.unsafe : !1,
        i = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Bc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!mI(r, "name") || (_I && r.name !== s)) && jc(r, "name", s),
          (u = TI(r)),
          u.source || (u.source = II.join(typeof s == "string" ? s : ""))),
        e === hI)
      ) {
        i ? (e[t] = r) : EI(t, r);
        return;
      } else o ? !a && e[t] && (i = !0) : delete e[t];
      i ? (e[t] = r) : jc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Bc(this) && bI(this).source) || yI(this);
    });
  });
  var Eo = c((BW, $c) => {
    var OI = Math.ceil,
      wI = Math.floor;
    $c.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? wI : OI)(t);
    };
  });
  var Zc = c((jW, Qc) => {
    var xI = Eo(),
      AI = Math.max,
      SI = Math.min;
    Qc.exports = function (e, t) {
      var r = xI(e);
      return r < 0 ? AI(r + t, 0) : SI(r, t);
    };
  });
  var el = c((zW, Jc) => {
    var RI = Eo(),
      CI = Math.min;
    Jc.exports = function (e) {
      return e > 0 ? CI(RI(e), 9007199254740991) : 0;
    };
  });
  var rl = c((KW, tl) => {
    var LI = el();
    tl.exports = function (e) {
      return LI(e.length);
    };
  });
  var yo = c((YW, il) => {
    var NI = wr(),
      PI = Zc(),
      MI = rl(),
      nl = function (e) {
        return function (t, r, n) {
          var o = NI(t),
            i = MI(o),
            a = PI(n, i),
            s;
          if (e && r != r) {
            for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
          } else
            for (; i > a; a++)
              if ((e || a in o) && o[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    il.exports = { includes: nl(!0), indexOf: nl(!1) };
  });
  var bo = c(($W, al) => {
    var qI = Ye(),
      _o = bt(),
      DI = wr(),
      FI = yo().indexOf,
      GI = _n(),
      ol = qI([].push);
    al.exports = function (e, t) {
      var r = DI(e),
        n = 0,
        o = [],
        i;
      for (i in r) !_o(GI, i) && _o(r, i) && ol(o, i);
      for (; t.length > n; ) _o(r, (i = t[n++])) && (~FI(o, i) || ol(o, i));
      return o;
    };
  });
  var In = c((QW, sl) => {
    sl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var cl = c((ul) => {
    var UI = bo(),
      kI = In(),
      VI = kI.concat("length", "prototype");
    ul.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return UI(t, VI);
      };
  });
  var fl = c((ll) => {
    ll.f = Object.getOwnPropertySymbols;
  });
  var pl = c((eH, dl) => {
    var WI = xr(),
      HI = Ye(),
      XI = cl(),
      BI = fl(),
      jI = Ar(),
      zI = HI([].concat);
    dl.exports =
      WI("Reflect", "ownKeys") ||
      function (t) {
        var r = XI.f(jI(t)),
          n = BI.f;
        return n ? zI(r, n(t)) : r;
      };
  });
  var gl = c((tH, vl) => {
    var KI = bt(),
      YI = pl(),
      $I = ao(),
      QI = Sr();
    vl.exports = function (e, t) {
      for (var r = YI(t), n = QI.f, o = $I.f, i = 0; i < r.length; i++) {
        var a = r[i];
        KI(e, a) || n(e, a, o(t, a));
      }
    };
  });
  var ml = c((rH, hl) => {
    var ZI = Xt(),
      JI = at(),
      eO = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = rO[tO(e)];
        return r == iO ? !0 : r == nO ? !1 : JI(t) ? ZI(t) : !!t;
      },
      tO = (Cr.normalize = function (e) {
        return String(e).replace(eO, ".").toLowerCase();
      }),
      rO = (Cr.data = {}),
      nO = (Cr.NATIVE = "N"),
      iO = (Cr.POLYFILL = "P");
    hl.exports = Cr;
  });
  var yl = c((nH, El) => {
    var To = Ee(),
      oO = ao().f,
      aO = yn(),
      sO = Yc(),
      uO = mn(),
      cO = gl(),
      lO = ml();
    El.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        o = e.stat,
        i,
        a,
        s,
        u,
        d,
        h;
      if (
        (n
          ? (a = To)
          : o
          ? (a = To[r] || uO(r, {}))
          : (a = (To[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((h = oO(a, s)), (u = h && h.value)) : (u = a[s]),
            (i = lO(n ? s : r + (o ? "." : "#") + s, e.forced)),
            !i && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            cO(d, u);
          }
          (e.sham || (u && u.sham)) && aO(d, "sham", !0), sO(a, s, d, e);
        }
    };
  });
  var bl = c((iH, _l) => {
    var fO = bo(),
      dO = In();
    _l.exports =
      Object.keys ||
      function (t) {
        return fO(t, dO);
      };
  });
  var Il = c((oH, Tl) => {
    var pO = Lt(),
      vO = Sr(),
      gO = Ar(),
      hO = wr(),
      mO = bl();
    Tl.exports = pO
      ? Object.defineProperties
      : function (t, r) {
          gO(t);
          for (var n = hO(r), o = mO(r), i = o.length, a = 0, s; i > a; )
            vO.f(t, (s = o[a++]), n[s]);
          return t;
        };
  });
  var wl = c((aH, Ol) => {
    var EO = xr();
    Ol.exports = EO("document", "documentElement");
  });
  var Pl = c((sH, Nl) => {
    var yO = Ar(),
      _O = Il(),
      xl = In(),
      bO = _n(),
      TO = wl(),
      IO = io(),
      OO = co(),
      Al = ">",
      Sl = "<",
      Oo = "prototype",
      wo = "script",
      Cl = OO("IE_PROTO"),
      Io = function () {},
      Ll = function (e) {
        return Sl + wo + Al + e + Sl + "/" + wo + Al;
      },
      Rl = function (e) {
        e.write(Ll("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      wO = function () {
        var e = IO("iframe"),
          t = "java" + wo + ":",
          r;
        return (
          (e.style.display = "none"),
          TO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Ll("document.F=Object")),
          r.close(),
          r.F
        );
      },
      On,
      wn = function () {
        try {
          On = new ActiveXObject("htmlfile");
        } catch {}
        wn =
          typeof document < "u"
            ? document.domain && On
              ? Rl(On)
              : wO()
            : Rl(On);
        for (var e = xl.length; e--; ) delete wn[Oo][xl[e]];
        return wn();
      };
    bO[Cl] = !0;
    Nl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((Io[Oo] = yO(t)), (n = new Io()), (Io[Oo] = null), (n[Cl] = t))
            : (n = wn()),
          r === void 0 ? n : _O(n, r)
        );
      };
  });
  var ql = c((uH, Ml) => {
    var xO = to(),
      AO = Pl(),
      SO = Sr(),
      xo = xO("unscopables"),
      Ao = Array.prototype;
    Ao[xo] == null && SO.f(Ao, xo, { configurable: !0, value: AO(null) });
    Ml.exports = function (e) {
      Ao[xo][e] = !0;
    };
  });
  var Dl = c(() => {
    "use strict";
    var RO = yl(),
      CO = yo().includes,
      LO = ql();
    RO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return CO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    LO("includes");
  });
  var Gl = c((fH, Fl) => {
    var NO = Ee(),
      PO = Ye();
    Fl.exports = function (e, t) {
      return PO(NO[e].prototype[t]);
    };
  });
  var kl = c((dH, Ul) => {
    Dl();
    var MO = Gl();
    Ul.exports = MO("Array", "includes");
  });
  var Wl = c((pH, Vl) => {
    var qO = kl();
    Vl.exports = qO;
  });
  var Xl = c((vH, Hl) => {
    var DO = Wl();
    Hl.exports = DO;
  });
  var So = c((gH, Bl) => {
    var FO =
      typeof global == "object" && global && global.Object === Object && global;
    Bl.exports = FO;
  });
  var Qe = c((hH, jl) => {
    var GO = So(),
      UO = typeof self == "object" && self && self.Object === Object && self,
      kO = GO || UO || Function("return this")();
    jl.exports = kO;
  });
  var zt = c((mH, zl) => {
    var VO = Qe(),
      WO = VO.Symbol;
    zl.exports = WO;
  });
  var Ql = c((EH, $l) => {
    var Kl = zt(),
      Yl = Object.prototype,
      HO = Yl.hasOwnProperty,
      XO = Yl.toString,
      Lr = Kl ? Kl.toStringTag : void 0;
    function BO(e) {
      var t = HO.call(e, Lr),
        r = e[Lr];
      try {
        e[Lr] = void 0;
        var n = !0;
      } catch {}
      var o = XO.call(e);
      return n && (t ? (e[Lr] = r) : delete e[Lr]), o;
    }
    $l.exports = BO;
  });
  var Jl = c((yH, Zl) => {
    var jO = Object.prototype,
      zO = jO.toString;
    function KO(e) {
      return zO.call(e);
    }
    Zl.exports = KO;
  });
  var It = c((_H, rf) => {
    var ef = zt(),
      YO = Ql(),
      $O = Jl(),
      QO = "[object Null]",
      ZO = "[object Undefined]",
      tf = ef ? ef.toStringTag : void 0;
    function JO(e) {
      return e == null
        ? e === void 0
          ? ZO
          : QO
        : tf && tf in Object(e)
        ? YO(e)
        : $O(e);
    }
    rf.exports = JO;
  });
  var Ro = c((bH, nf) => {
    function ew(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    nf.exports = ew;
  });
  var Co = c((TH, of) => {
    var tw = Ro(),
      rw = tw(Object.getPrototypeOf, Object);
    of.exports = rw;
  });
  var vt = c((IH, af) => {
    function nw(e) {
      return e != null && typeof e == "object";
    }
    af.exports = nw;
  });
  var Lo = c((OH, uf) => {
    var iw = It(),
      ow = Co(),
      aw = vt(),
      sw = "[object Object]",
      uw = Function.prototype,
      cw = Object.prototype,
      sf = uw.toString,
      lw = cw.hasOwnProperty,
      fw = sf.call(Object);
    function dw(e) {
      if (!aw(e) || iw(e) != sw) return !1;
      var t = ow(e);
      if (t === null) return !0;
      var r = lw.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && sf.call(r) == fw;
    }
    uf.exports = dw;
  });
  var cf = c((No) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    No.default = pw;
    function pw(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var lf = c((Mo, Po) => {
    "use strict";
    Object.defineProperty(Mo, "__esModule", { value: !0 });
    var vw = cf(),
      gw = hw(vw);
    function hw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Kt;
    typeof self < "u"
      ? (Kt = self)
      : typeof window < "u"
      ? (Kt = window)
      : typeof global < "u"
      ? (Kt = global)
      : typeof Po < "u"
      ? (Kt = Po)
      : (Kt = Function("return this")());
    var mw = (0, gw.default)(Kt);
    Mo.default = mw;
  });
  var qo = c((Nr) => {
    "use strict";
    Nr.__esModule = !0;
    Nr.ActionTypes = void 0;
    Nr.default = vf;
    var Ew = Lo(),
      yw = pf(Ew),
      _w = lf(),
      ff = pf(_w);
    function pf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var df = (Nr.ActionTypes = { INIT: "@@redux/INIT" });
    function vf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(vf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var o = e,
        i = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function h() {
        return i;
      }
      function g(I) {
        if (typeof I != "function")
          throw new Error("Expected listener to be a function.");
        var D = !0;
        return (
          d(),
          s.push(I),
          function () {
            if (D) {
              (D = !1), d();
              var L = s.indexOf(I);
              s.splice(L, 1);
            }
          }
        );
      }
      function m(I) {
        if (!(0, yw.default)(I))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof I.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (i = o(i, I));
        } finally {
          u = !1;
        }
        for (var D = (a = s), S = 0; S < D.length; S++) D[S]();
        return I;
      }
      function E(I) {
        if (typeof I != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (o = I), m({ type: df.INIT });
      }
      function T() {
        var I,
          D = g;
        return (
          (I = {
            subscribe: function (L) {
              if (typeof L != "object")
                throw new TypeError("Expected the observer to be an object.");
              function C() {
                L.next && L.next(h());
              }
              C();
              var P = D(C);
              return { unsubscribe: P };
            },
          }),
          (I[ff.default] = function () {
            return this;
          }),
          I
        );
      }
      return (
        m({ type: df.INIT }),
        (n = { dispatch: m, subscribe: g, getState: h, replaceReducer: E }),
        (n[ff.default] = T),
        n
      );
    }
  });
  var Fo = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = bw;
    function bw(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var mf = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = xw;
    var gf = qo(),
      Tw = Lo(),
      SH = hf(Tw),
      Iw = Fo(),
      RH = hf(Iw);
    function hf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ow(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function ww(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: gf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var o =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: o }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                gf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function xw(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        typeof e[o] == "function" && (r[o] = e[o]);
      }
      var i = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        ww(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var g;
        for (var m = !1, E = {}, T = 0; T < i.length; T++) {
          var I = i[T],
            D = r[I],
            S = d[I],
            L = D(S, h);
          if (typeof L > "u") {
            var C = Ow(I, h);
            throw new Error(C);
          }
          (E[I] = L), (m = m || L !== S);
        }
        return m ? E : d;
      };
    }
  });
  var yf = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = Aw;
    function Ef(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Aw(e, t) {
      if (typeof e == "function") return Ef(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
        var i = r[o],
          a = e[i];
        typeof a == "function" && (n[i] = Ef(a, t));
      }
      return n;
    }
  });
  var Vo = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = Sw;
    function Sw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (i) {
          return i;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        o = t.slice(0, -1);
      return function () {
        return o.reduceRight(function (i, a) {
          return a(i);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var _f = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    var Rw =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Wo.default = Pw;
    var Cw = Vo(),
      Lw = Nw(Cw);
    function Nw(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Pw() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (o, i, a) {
          var s = n(o, i, a),
            u = s.dispatch,
            d = [],
            h = {
              getState: s.getState,
              dispatch: function (m) {
                return u(m);
              },
            };
          return (
            (d = t.map(function (g) {
              return g(h);
            })),
            (u = Lw.default.apply(void 0, d)(s.dispatch)),
            Rw({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Ho = c((We) => {
    "use strict";
    We.__esModule = !0;
    We.compose =
      We.applyMiddleware =
      We.bindActionCreators =
      We.combineReducers =
      We.createStore =
        void 0;
    var Mw = qo(),
      qw = Yt(Mw),
      Dw = mf(),
      Fw = Yt(Dw),
      Gw = yf(),
      Uw = Yt(Gw),
      kw = _f(),
      Vw = Yt(kw),
      Ww = Vo(),
      Hw = Yt(Ww),
      Xw = Fo(),
      MH = Yt(Xw);
    function Yt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    We.createStore = qw.default;
    We.combineReducers = Fw.default;
    We.bindActionCreators = Uw.default;
    We.applyMiddleware = Vw.default;
    We.compose = Hw.default;
  });
  var Ze,
    Xo,
    st,
    Bw,
    jw,
    Bo,
    zw,
    bf = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Xo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Bw = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (jw = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Bo = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (zw = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var He,
    Kw,
    jo = me(() => {
      "use strict";
      (He = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Kw = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Yw,
    Tf = me(() => {
      "use strict";
      Yw = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var $w,
    Qw,
    Zw,
    Jw,
    ex,
    tx,
    rx,
    zo,
    If = me(() => {
      "use strict";
      jo();
      ({
        TRANSFORM_MOVE: $w,
        TRANSFORM_SCALE: Qw,
        TRANSFORM_ROTATE: Zw,
        TRANSFORM_SKEW: Jw,
        STYLE_SIZE: ex,
        STYLE_FILTER: tx,
        STYLE_FONT_VARIATION: rx,
      } = He),
        (zo = {
          [$w]: !0,
          [Qw]: !0,
          [Zw]: !0,
          [Jw]: !0,
          [ex]: !0,
          [tx]: !0,
          [rx]: !0,
        });
    });
  var Ie = {};
  Fe(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yx,
    IX2_ANIMATION_FRAME_CHANGED: () => px,
    IX2_CLEAR_REQUESTED: () => lx,
    IX2_ELEMENT_STATE_CHANGED: () => Ex,
    IX2_EVENT_LISTENER_ADDED: () => fx,
    IX2_EVENT_STATE_CHANGED: () => dx,
    IX2_INSTANCE_ADDED: () => gx,
    IX2_INSTANCE_REMOVED: () => mx,
    IX2_INSTANCE_STARTED: () => hx,
    IX2_MEDIA_QUERIES_DEFINED: () => bx,
    IX2_PARAMETER_CHANGED: () => vx,
    IX2_PLAYBACK_REQUESTED: () => ux,
    IX2_PREVIEW_REQUESTED: () => sx,
    IX2_RAW_DATA_IMPORTED: () => nx,
    IX2_SESSION_INITIALIZED: () => ix,
    IX2_SESSION_STARTED: () => ox,
    IX2_SESSION_STOPPED: () => ax,
    IX2_STOP_REQUESTED: () => cx,
    IX2_TEST_FRAME_RENDERED: () => Tx,
    IX2_VIEWPORT_WIDTH_CHANGED: () => _x,
  });
  var nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    vx,
    gx,
    hx,
    mx,
    Ex,
    yx,
    _x,
    bx,
    Tx,
    Of = me(() => {
      "use strict";
      (nx = "IX2_RAW_DATA_IMPORTED"),
        (ix = "IX2_SESSION_INITIALIZED"),
        (ox = "IX2_SESSION_STARTED"),
        (ax = "IX2_SESSION_STOPPED"),
        (sx = "IX2_PREVIEW_REQUESTED"),
        (ux = "IX2_PLAYBACK_REQUESTED"),
        (cx = "IX2_STOP_REQUESTED"),
        (lx = "IX2_CLEAR_REQUESTED"),
        (fx = "IX2_EVENT_LISTENER_ADDED"),
        (dx = "IX2_EVENT_STATE_CHANGED"),
        (px = "IX2_ANIMATION_FRAME_CHANGED"),
        (vx = "IX2_PARAMETER_CHANGED"),
        (gx = "IX2_INSTANCE_ADDED"),
        (hx = "IX2_INSTANCE_STARTED"),
        (mx = "IX2_INSTANCE_REMOVED"),
        (Ex = "IX2_ELEMENT_STATE_CHANGED"),
        (yx = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (_x = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (bx = "IX2_MEDIA_QUERIES_DEFINED"),
        (Tx = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  Fe(Re, {
    ABSTRACT_NODE: () => _A,
    AUTO: () => cA,
    BACKGROUND: () => nA,
    BACKGROUND_COLOR: () => rA,
    BAR_DELIMITER: () => dA,
    BORDER_COLOR: () => iA,
    BOUNDARY_SELECTOR: () => Ax,
    CHILDREN: () => pA,
    COLON_DELIMITER: () => fA,
    COLOR: () => oA,
    COMMA_DELIMITER: () => lA,
    CONFIG_UNIT: () => qx,
    CONFIG_VALUE: () => Lx,
    CONFIG_X_UNIT: () => Nx,
    CONFIG_X_VALUE: () => Sx,
    CONFIG_Y_UNIT: () => Px,
    CONFIG_Y_VALUE: () => Rx,
    CONFIG_Z_UNIT: () => Mx,
    CONFIG_Z_VALUE: () => Cx,
    DISPLAY: () => aA,
    FILTER: () => Zx,
    FLEX: () => sA,
    FONT_VARIATION_SETTINGS: () => Jx,
    HEIGHT: () => tA,
    HTML_ELEMENT: () => EA,
    IMMEDIATE_CHILDREN: () => vA,
    IX2_ID_DELIMITER: () => Ix,
    OPACITY: () => Qx,
    PARENT: () => hA,
    PLAIN_OBJECT: () => yA,
    PRESERVE_3D: () => mA,
    RENDER_GENERAL: () => TA,
    RENDER_PLUGIN: () => OA,
    RENDER_STYLE: () => IA,
    RENDER_TRANSFORM: () => bA,
    ROTATE_X: () => Bx,
    ROTATE_Y: () => jx,
    ROTATE_Z: () => zx,
    SCALE_3D: () => Xx,
    SCALE_X: () => Vx,
    SCALE_Y: () => Wx,
    SCALE_Z: () => Hx,
    SIBLINGS: () => gA,
    SKEW: () => Kx,
    SKEW_X: () => Yx,
    SKEW_Y: () => $x,
    TRANSFORM: () => Dx,
    TRANSLATE_3D: () => kx,
    TRANSLATE_X: () => Fx,
    TRANSLATE_Y: () => Gx,
    TRANSLATE_Z: () => Ux,
    WF_PAGE: () => Ox,
    WIDTH: () => eA,
    WILL_CHANGE: () => uA,
    W_MOD_IX: () => xx,
    W_MOD_JS: () => wx,
  });
  var Ix,
    Ox,
    wx,
    xx,
    Ax,
    Sx,
    Rx,
    Cx,
    Lx,
    Nx,
    Px,
    Mx,
    qx,
    Dx,
    Fx,
    Gx,
    Ux,
    kx,
    Vx,
    Wx,
    Hx,
    Xx,
    Bx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    EA,
    yA,
    _A,
    bA,
    TA,
    IA,
    OA,
    wf = me(() => {
      "use strict";
      (Ix = "|"),
        (Ox = "data-wf-page"),
        (wx = "w-mod-js"),
        (xx = "w-mod-ix"),
        (Ax = ".w-dyn-item"),
        (Sx = "xValue"),
        (Rx = "yValue"),
        (Cx = "zValue"),
        (Lx = "value"),
        (Nx = "xUnit"),
        (Px = "yUnit"),
        (Mx = "zUnit"),
        (qx = "unit"),
        (Dx = "transform"),
        (Fx = "translateX"),
        (Gx = "translateY"),
        (Ux = "translateZ"),
        (kx = "translate3d"),
        (Vx = "scaleX"),
        (Wx = "scaleY"),
        (Hx = "scaleZ"),
        (Xx = "scale3d"),
        (Bx = "rotateX"),
        (jx = "rotateY"),
        (zx = "rotateZ"),
        (Kx = "skew"),
        (Yx = "skewX"),
        ($x = "skewY"),
        (Qx = "opacity"),
        (Zx = "filter"),
        (Jx = "font-variation-settings"),
        (eA = "width"),
        (tA = "height"),
        (rA = "backgroundColor"),
        (nA = "background"),
        (iA = "borderColor"),
        (oA = "color"),
        (aA = "display"),
        (sA = "flex"),
        (uA = "willChange"),
        (cA = "AUTO"),
        (lA = ","),
        (fA = ":"),
        (dA = "|"),
        (pA = "CHILDREN"),
        (vA = "IMMEDIATE_CHILDREN"),
        (gA = "SIBLINGS"),
        (hA = "PARENT"),
        (mA = "preserve-3d"),
        (EA = "HTML_ELEMENT"),
        (yA = "PLAIN_OBJECT"),
        (_A = "ABSTRACT_NODE"),
        (bA = "RENDER_TRANSFORM"),
        (TA = "RENDER_GENERAL"),
        (IA = "RENDER_STYLE"),
        (OA = "RENDER_PLUGIN");
    });
  var xf = {};
  Fe(xf, {
    ActionAppliesTo: () => Kw,
    ActionTypeConsts: () => He,
    EventAppliesTo: () => Xo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Bw,
    EventLimitAffectedElements: () => jw,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => Yw,
    QuickEffectDirectionConsts: () => zw,
    QuickEffectIds: () => Bo,
    ReducedMotionTypes: () => zo,
  });
  var Ue = me(() => {
    "use strict";
    bf();
    jo();
    Tf();
    If();
    Of();
    wf();
  });
  var wA,
    Af,
    Sf = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: wA } = Ie),
        (Af = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case wA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var $t = c((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: !0 });
    var xA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    _e.clone = An;
    _e.addLast = Lf;
    _e.addFirst = Nf;
    _e.removeLast = Pf;
    _e.removeFirst = Mf;
    _e.insert = qf;
    _e.removeAt = Df;
    _e.replaceAt = Ff;
    _e.getIn = Sn;
    _e.set = Rn;
    _e.setIn = Cn;
    _e.update = Uf;
    _e.updateIn = kf;
    _e.merge = Vf;
    _e.mergeDeep = Wf;
    _e.mergeIn = Hf;
    _e.omit = Xf;
    _e.addDefaults = Bf;
    var Rf = "INVALID_ARGS";
    function Cf(e) {
      throw new Error(e);
    }
    function Ko(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var AA = {}.hasOwnProperty;
    function An(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
        var o = t[n];
        r[o] = e[o];
      }
      return r;
    }
    function ke(e, t, r) {
      var n = r;
      n == null && Cf(Rf);
      for (
        var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
        s < i;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var h = Ko(d);
          if (h.length)
            for (var g = 0; g <= h.length; g++) {
              var m = h[g];
              if (!(e && n[m] !== void 0)) {
                var E = d[m];
                t && xn(n[m]) && xn(E) && (E = ke(e, t, n[m], E)),
                  !(E === void 0 || E === n[m]) &&
                    (o || ((o = !0), (n = An(n))), (n[m] = E));
              }
            }
        }
      }
      return n;
    }
    function xn(e) {
      var t = typeof e > "u" ? "undefined" : xA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Lf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Nf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Pf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Mf(e) {
      return e.length ? e.slice(1) : e;
    }
    function qf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Df(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Ff(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
      return (o[t] = r), o;
    }
    function Sn(e, t) {
      if ((!Array.isArray(t) && Cf(Rf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var o = t[n];
          if (((r = r?.[o]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Rn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        o = e ?? n;
      if (o[t] === r) return o;
      var i = An(o);
      return (i[t] = r), i;
    }
    function Gf(e, t, r, n) {
      var o = void 0,
        i = t[n];
      if (n === t.length - 1) o = r;
      else {
        var a =
          xn(e) && xn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
        o = Gf(a, t, r, n + 1);
      }
      return Rn(e, i, o);
    }
    function Cn(e, t, r) {
      return t.length ? Gf(e, t, r, 0) : r;
    }
    function Uf(e, t, r) {
      var n = e?.[t],
        o = r(n);
      return Rn(e, t, o);
    }
    function kf(e, t, r) {
      var n = Sn(e, t),
        o = r(n);
      return Cn(e, t, o);
    }
    function Vf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? ke.call.apply(ke, [null, !1, !1, e, t, r, n, o, i].concat(s))
        : ke(!1, !1, e, t, r, n, o, i);
    }
    function Wf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? ke.call.apply(ke, [null, !1, !0, e, t, r, n, o, i].concat(s))
        : ke(!1, !0, e, t, r, n, o, i);
    }
    function Hf(e, t, r, n, o, i, a) {
      var s = Sn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          d = arguments.length,
          h = Array(d > 7 ? d - 7 : 0),
          g = 7;
        g < d;
        g++
      )
        h[g - 7] = arguments[g];
      return (
        h.length
          ? (u = ke.call.apply(ke, [null, !1, !1, s, r, n, o, i, a].concat(h)))
          : (u = ke(!1, !1, s, r, n, o, i, a)),
        Cn(e, t, u)
      );
    }
    function Xf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
        if (AA.call(e, r[o])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var i = {}, a = Ko(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (i[u] = e[u]);
      }
      return i;
    }
    function Bf(e, t, r, n, o, i) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? ke.call.apply(ke, [null, !0, !1, e, t, r, n, o, i].concat(s))
        : ke(!0, !1, e, t, r, n, o, i);
    }
    var SA = {
      clone: An,
      addLast: Lf,
      addFirst: Nf,
      removeLast: Pf,
      removeFirst: Mf,
      insert: qf,
      removeAt: Df,
      replaceAt: Ff,
      getIn: Sn,
      set: Rn,
      setIn: Cn,
      update: Uf,
      updateIn: kf,
      merge: Vf,
      mergeDeep: Wf,
      mergeIn: Hf,
      omit: Xf,
      addDefaults: Bf,
    };
    _e.default = SA;
  });
  var zf,
    RA,
    CA,
    LA,
    NA,
    PA,
    jf,
    Kf,
    Yf = me(() => {
      "use strict";
      Ue();
      (zf = fe($t())),
        ({
          IX2_PREVIEW_REQUESTED: RA,
          IX2_PLAYBACK_REQUESTED: CA,
          IX2_STOP_REQUESTED: LA,
          IX2_CLEAR_REQUESTED: NA,
        } = Ie),
        (PA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (jf = Object.create(null, {
          [RA]: { value: "preview" },
          [CA]: { value: "playback" },
          [LA]: { value: "stop" },
          [NA]: { value: "clear" },
        })),
        (Kf = (e = PA, t) => {
          if (t.type in jf) {
            let r = [jf[t.type]];
            return (0, zf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    MA,
    qA,
    DA,
    FA,
    GA,
    UA,
    kA,
    VA,
    WA,
    HA,
    $f,
    XA,
    Qf,
    Zf = me(() => {
      "use strict";
      Ue();
      (Ne = fe($t())),
        ({
          IX2_SESSION_INITIALIZED: MA,
          IX2_SESSION_STARTED: qA,
          IX2_TEST_FRAME_RENDERED: DA,
          IX2_SESSION_STOPPED: FA,
          IX2_EVENT_LISTENER_ADDED: GA,
          IX2_EVENT_STATE_CHANGED: UA,
          IX2_ANIMATION_FRAME_CHANGED: kA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: VA,
          IX2_VIEWPORT_WIDTH_CHANGED: WA,
          IX2_MEDIA_QUERIES_DEFINED: HA,
        } = Ie),
        ($f = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (XA = 20),
        (Qf = (e = $f, t) => {
          switch (t.type) {
            case MA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case qA:
              return (0, Ne.set)(e, "active", !0);
            case DA: {
              let {
                payload: { step: r = XA },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case FA:
              return $f;
            case kA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case GA: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case UA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case VA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case WA: {
              let { width: r, mediaQueries: n } = t.payload,
                o = n.length,
                i = null;
              for (let a = 0; a < o; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  i = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: i });
            }
            case HA:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var ed = c((ZH, Jf) => {
    function BA() {
      (this.__data__ = []), (this.size = 0);
    }
    Jf.exports = BA;
  });
  var Ln = c((JH, td) => {
    function jA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    td.exports = jA;
  });
  var Pr = c((eX, rd) => {
    var zA = Ln();
    function KA(e, t) {
      for (var r = e.length; r--; ) if (zA(e[r][0], t)) return r;
      return -1;
    }
    rd.exports = KA;
  });
  var id = c((tX, nd) => {
    var YA = Pr(),
      $A = Array.prototype,
      QA = $A.splice;
    function ZA(e) {
      var t = this.__data__,
        r = YA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : QA.call(t, r, 1), --this.size, !0;
    }
    nd.exports = ZA;
  });
  var ad = c((rX, od) => {
    var JA = Pr();
    function eS(e) {
      var t = this.__data__,
        r = JA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    od.exports = eS;
  });
  var ud = c((nX, sd) => {
    var tS = Pr();
    function rS(e) {
      return tS(this.__data__, e) > -1;
    }
    sd.exports = rS;
  });
  var ld = c((iX, cd) => {
    var nS = Pr();
    function iS(e, t) {
      var r = this.__data__,
        n = nS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    cd.exports = iS;
  });
  var Mr = c((oX, fd) => {
    var oS = ed(),
      aS = id(),
      sS = ad(),
      uS = ud(),
      cS = ld();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = oS;
    Qt.prototype.delete = aS;
    Qt.prototype.get = sS;
    Qt.prototype.has = uS;
    Qt.prototype.set = cS;
    fd.exports = Qt;
  });
  var pd = c((aX, dd) => {
    var lS = Mr();
    function fS() {
      (this.__data__ = new lS()), (this.size = 0);
    }
    dd.exports = fS;
  });
  var gd = c((sX, vd) => {
    function dS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    vd.exports = dS;
  });
  var md = c((uX, hd) => {
    function pS(e) {
      return this.__data__.get(e);
    }
    hd.exports = pS;
  });
  var yd = c((cX, Ed) => {
    function vS(e) {
      return this.__data__.has(e);
    }
    Ed.exports = vS;
  });
  var ut = c((lX, _d) => {
    function gS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    _d.exports = gS;
  });
  var Yo = c((fX, bd) => {
    var hS = It(),
      mS = ut(),
      ES = "[object AsyncFunction]",
      yS = "[object Function]",
      _S = "[object GeneratorFunction]",
      bS = "[object Proxy]";
    function TS(e) {
      if (!mS(e)) return !1;
      var t = hS(e);
      return t == yS || t == _S || t == ES || t == bS;
    }
    bd.exports = TS;
  });
  var Id = c((dX, Td) => {
    var IS = Qe(),
      OS = IS["__core-js_shared__"];
    Td.exports = OS;
  });
  var xd = c((pX, wd) => {
    var $o = Id(),
      Od = (function () {
        var e = /[^.]+$/.exec(($o && $o.keys && $o.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function wS(e) {
      return !!Od && Od in e;
    }
    wd.exports = wS;
  });
  var Qo = c((vX, Ad) => {
    var xS = Function.prototype,
      AS = xS.toString;
    function SS(e) {
      if (e != null) {
        try {
          return AS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ad.exports = SS;
  });
  var Rd = c((gX, Sd) => {
    var RS = Yo(),
      CS = xd(),
      LS = ut(),
      NS = Qo(),
      PS = /[\\^$.*+?()[\]{}|]/g,
      MS = /^\[object .+?Constructor\]$/,
      qS = Function.prototype,
      DS = Object.prototype,
      FS = qS.toString,
      GS = DS.hasOwnProperty,
      US = RegExp(
        "^" +
          FS.call(GS)
            .replace(PS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function kS(e) {
      if (!LS(e) || CS(e)) return !1;
      var t = RS(e) ? US : MS;
      return t.test(NS(e));
    }
    Sd.exports = kS;
  });
  var Ld = c((hX, Cd) => {
    function VS(e, t) {
      return e?.[t];
    }
    Cd.exports = VS;
  });
  var Ot = c((mX, Nd) => {
    var WS = Rd(),
      HS = Ld();
    function XS(e, t) {
      var r = HS(e, t);
      return WS(r) ? r : void 0;
    }
    Nd.exports = XS;
  });
  var Nn = c((EX, Pd) => {
    var BS = Ot(),
      jS = Qe(),
      zS = BS(jS, "Map");
    Pd.exports = zS;
  });
  var qr = c((yX, Md) => {
    var KS = Ot(),
      YS = KS(Object, "create");
    Md.exports = YS;
  });
  var Fd = c((_X, Dd) => {
    var qd = qr();
    function $S() {
      (this.__data__ = qd ? qd(null) : {}), (this.size = 0);
    }
    Dd.exports = $S;
  });
  var Ud = c((bX, Gd) => {
    function QS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Gd.exports = QS;
  });
  var Vd = c((TX, kd) => {
    var ZS = qr(),
      JS = "__lodash_hash_undefined__",
      e0 = Object.prototype,
      t0 = e0.hasOwnProperty;
    function r0(e) {
      var t = this.__data__;
      if (ZS) {
        var r = t[e];
        return r === JS ? void 0 : r;
      }
      return t0.call(t, e) ? t[e] : void 0;
    }
    kd.exports = r0;
  });
  var Hd = c((IX, Wd) => {
    var n0 = qr(),
      i0 = Object.prototype,
      o0 = i0.hasOwnProperty;
    function a0(e) {
      var t = this.__data__;
      return n0 ? t[e] !== void 0 : o0.call(t, e);
    }
    Wd.exports = a0;
  });
  var Bd = c((OX, Xd) => {
    var s0 = qr(),
      u0 = "__lodash_hash_undefined__";
    function c0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = s0 && t === void 0 ? u0 : t),
        this
      );
    }
    Xd.exports = c0;
  });
  var zd = c((wX, jd) => {
    var l0 = Fd(),
      f0 = Ud(),
      d0 = Vd(),
      p0 = Hd(),
      v0 = Bd();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = l0;
    Zt.prototype.delete = f0;
    Zt.prototype.get = d0;
    Zt.prototype.has = p0;
    Zt.prototype.set = v0;
    jd.exports = Zt;
  });
  var $d = c((xX, Yd) => {
    var Kd = zd(),
      g0 = Mr(),
      h0 = Nn();
    function m0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Kd(),
          map: new (h0 || g0)(),
          string: new Kd(),
        });
    }
    Yd.exports = m0;
  });
  var Zd = c((AX, Qd) => {
    function E0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Qd.exports = E0;
  });
  var Dr = c((SX, Jd) => {
    var y0 = Zd();
    function _0(e, t) {
      var r = e.__data__;
      return y0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Jd.exports = _0;
  });
  var tp = c((RX, ep) => {
    var b0 = Dr();
    function T0(e) {
      var t = b0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ep.exports = T0;
  });
  var np = c((CX, rp) => {
    var I0 = Dr();
    function O0(e) {
      return I0(this, e).get(e);
    }
    rp.exports = O0;
  });
  var op = c((LX, ip) => {
    var w0 = Dr();
    function x0(e) {
      return w0(this, e).has(e);
    }
    ip.exports = x0;
  });
  var sp = c((NX, ap) => {
    var A0 = Dr();
    function S0(e, t) {
      var r = A0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ap.exports = S0;
  });
  var Pn = c((PX, up) => {
    var R0 = $d(),
      C0 = tp(),
      L0 = np(),
      N0 = op(),
      P0 = sp();
    function Jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Jt.prototype.clear = R0;
    Jt.prototype.delete = C0;
    Jt.prototype.get = L0;
    Jt.prototype.has = N0;
    Jt.prototype.set = P0;
    up.exports = Jt;
  });
  var lp = c((MX, cp) => {
    var M0 = Mr(),
      q0 = Nn(),
      D0 = Pn(),
      F0 = 200;
    function G0(e, t) {
      var r = this.__data__;
      if (r instanceof M0) {
        var n = r.__data__;
        if (!q0 || n.length < F0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new D0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    cp.exports = G0;
  });
  var Zo = c((qX, fp) => {
    var U0 = Mr(),
      k0 = pd(),
      V0 = gd(),
      W0 = md(),
      H0 = yd(),
      X0 = lp();
    function er(e) {
      var t = (this.__data__ = new U0(e));
      this.size = t.size;
    }
    er.prototype.clear = k0;
    er.prototype.delete = V0;
    er.prototype.get = W0;
    er.prototype.has = H0;
    er.prototype.set = X0;
    fp.exports = er;
  });
  var pp = c((DX, dp) => {
    var B0 = "__lodash_hash_undefined__";
    function j0(e) {
      return this.__data__.set(e, B0), this;
    }
    dp.exports = j0;
  });
  var gp = c((FX, vp) => {
    function z0(e) {
      return this.__data__.has(e);
    }
    vp.exports = z0;
  });
  var mp = c((GX, hp) => {
    var K0 = Pn(),
      Y0 = pp(),
      $0 = gp();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new K0(); ++t < r; ) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = Y0;
    Mn.prototype.has = $0;
    hp.exports = Mn;
  });
  var yp = c((UX, Ep) => {
    function Q0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ep.exports = Q0;
  });
  var bp = c((kX, _p) => {
    function Z0(e, t) {
      return e.has(t);
    }
    _p.exports = Z0;
  });
  var Jo = c((VX, Tp) => {
    var J0 = mp(),
      eR = yp(),
      tR = bp(),
      rR = 1,
      nR = 2;
    function iR(e, t, r, n, o, i) {
      var a = r & rR,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = i.get(e),
        h = i.get(t);
      if (d && h) return d == t && h == e;
      var g = -1,
        m = !0,
        E = r & nR ? new J0() : void 0;
      for (i.set(e, t), i.set(t, e); ++g < s; ) {
        var T = e[g],
          I = t[g];
        if (n) var D = a ? n(I, T, g, t, e, i) : n(T, I, g, e, t, i);
        if (D !== void 0) {
          if (D) continue;
          m = !1;
          break;
        }
        if (E) {
          if (
            !eR(t, function (S, L) {
              if (!tR(E, L) && (T === S || o(T, S, r, n, i))) return E.push(L);
            })
          ) {
            m = !1;
            break;
          }
        } else if (!(T === I || o(T, I, r, n, i))) {
          m = !1;
          break;
        }
      }
      return i.delete(e), i.delete(t), m;
    }
    Tp.exports = iR;
  });
  var Op = c((WX, Ip) => {
    var oR = Qe(),
      aR = oR.Uint8Array;
    Ip.exports = aR;
  });
  var xp = c((HX, wp) => {
    function sR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, o) {
          r[++t] = [o, n];
        }),
        r
      );
    }
    wp.exports = sR;
  });
  var Sp = c((XX, Ap) => {
    function uR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ap.exports = uR;
  });
  var Pp = c((BX, Np) => {
    var Rp = zt(),
      Cp = Op(),
      cR = Ln(),
      lR = Jo(),
      fR = xp(),
      dR = Sp(),
      pR = 1,
      vR = 2,
      gR = "[object Boolean]",
      hR = "[object Date]",
      mR = "[object Error]",
      ER = "[object Map]",
      yR = "[object Number]",
      _R = "[object RegExp]",
      bR = "[object Set]",
      TR = "[object String]",
      IR = "[object Symbol]",
      OR = "[object ArrayBuffer]",
      wR = "[object DataView]",
      Lp = Rp ? Rp.prototype : void 0,
      ea = Lp ? Lp.valueOf : void 0;
    function xR(e, t, r, n, o, i, a) {
      switch (r) {
        case wR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case OR:
          return !(e.byteLength != t.byteLength || !i(new Cp(e), new Cp(t)));
        case gR:
        case hR:
        case yR:
          return cR(+e, +t);
        case mR:
          return e.name == t.name && e.message == t.message;
        case _R:
        case TR:
          return e == t + "";
        case ER:
          var s = fR;
        case bR:
          var u = n & pR;
          if ((s || (s = dR), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= vR), a.set(e, t);
          var h = lR(s(e), s(t), n, o, i, a);
          return a.delete(e), h;
        case IR:
          if (ea) return ea.call(e) == ea.call(t);
      }
      return !1;
    }
    Np.exports = xR;
  });
  var qn = c((jX, Mp) => {
    function AR(e, t) {
      for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
      return e;
    }
    Mp.exports = AR;
  });
  var we = c((zX, qp) => {
    var SR = Array.isArray;
    qp.exports = SR;
  });
  var ta = c((KX, Dp) => {
    var RR = qn(),
      CR = we();
    function LR(e, t, r) {
      var n = t(e);
      return CR(e) ? n : RR(n, r(e));
    }
    Dp.exports = LR;
  });
  var Gp = c((YX, Fp) => {
    function NR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (i[o++] = a);
      }
      return i;
    }
    Fp.exports = NR;
  });
  var ra = c(($X, Up) => {
    function PR() {
      return [];
    }
    Up.exports = PR;
  });
  var na = c((QX, Vp) => {
    var MR = Gp(),
      qR = ra(),
      DR = Object.prototype,
      FR = DR.propertyIsEnumerable,
      kp = Object.getOwnPropertySymbols,
      GR = kp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                MR(kp(e), function (t) {
                  return FR.call(e, t);
                }));
          }
        : qR;
    Vp.exports = GR;
  });
  var Hp = c((ZX, Wp) => {
    function UR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Wp.exports = UR;
  });
  var Bp = c((JX, Xp) => {
    var kR = It(),
      VR = vt(),
      WR = "[object Arguments]";
    function HR(e) {
      return VR(e) && kR(e) == WR;
    }
    Xp.exports = HR;
  });
  var Fr = c((e5, Kp) => {
    var jp = Bp(),
      XR = vt(),
      zp = Object.prototype,
      BR = zp.hasOwnProperty,
      jR = zp.propertyIsEnumerable,
      zR = jp(
        (function () {
          return arguments;
        })()
      )
        ? jp
        : function (e) {
            return XR(e) && BR.call(e, "callee") && !jR.call(e, "callee");
          };
    Kp.exports = zR;
  });
  var $p = c((t5, Yp) => {
    function KR() {
      return !1;
    }
    Yp.exports = KR;
  });
  var Dn = c((Gr, tr) => {
    var YR = Qe(),
      $R = $p(),
      Jp = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Qp = Jp && typeof tr == "object" && tr && !tr.nodeType && tr,
      QR = Qp && Qp.exports === Jp,
      Zp = QR ? YR.Buffer : void 0,
      ZR = Zp ? Zp.isBuffer : void 0,
      JR = ZR || $R;
    tr.exports = JR;
  });
  var Fn = c((r5, ev) => {
    var eC = 9007199254740991,
      tC = /^(?:0|[1-9]\d*)$/;
    function rC(e, t) {
      var r = typeof e;
      return (
        (t = t ?? eC),
        !!t &&
          (r == "number" || (r != "symbol" && tC.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    ev.exports = rC;
  });
  var Gn = c((n5, tv) => {
    var nC = 9007199254740991;
    function iC(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nC;
    }
    tv.exports = iC;
  });
  var nv = c((i5, rv) => {
    var oC = It(),
      aC = Gn(),
      sC = vt(),
      uC = "[object Arguments]",
      cC = "[object Array]",
      lC = "[object Boolean]",
      fC = "[object Date]",
      dC = "[object Error]",
      pC = "[object Function]",
      vC = "[object Map]",
      gC = "[object Number]",
      hC = "[object Object]",
      mC = "[object RegExp]",
      EC = "[object Set]",
      yC = "[object String]",
      _C = "[object WeakMap]",
      bC = "[object ArrayBuffer]",
      TC = "[object DataView]",
      IC = "[object Float32Array]",
      OC = "[object Float64Array]",
      wC = "[object Int8Array]",
      xC = "[object Int16Array]",
      AC = "[object Int32Array]",
      SC = "[object Uint8Array]",
      RC = "[object Uint8ClampedArray]",
      CC = "[object Uint16Array]",
      LC = "[object Uint32Array]",
      he = {};
    he[IC] =
      he[OC] =
      he[wC] =
      he[xC] =
      he[AC] =
      he[SC] =
      he[RC] =
      he[CC] =
      he[LC] =
        !0;
    he[uC] =
      he[cC] =
      he[bC] =
      he[lC] =
      he[TC] =
      he[fC] =
      he[dC] =
      he[pC] =
      he[vC] =
      he[gC] =
      he[hC] =
      he[mC] =
      he[EC] =
      he[yC] =
      he[_C] =
        !1;
    function NC(e) {
      return sC(e) && aC(e.length) && !!he[oC(e)];
    }
    rv.exports = NC;
  });
  var ov = c((o5, iv) => {
    function PC(e) {
      return function (t) {
        return e(t);
      };
    }
    iv.exports = PC;
  });
  var sv = c((Ur, rr) => {
    var MC = So(),
      av = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
      kr = av && typeof rr == "object" && rr && !rr.nodeType && rr,
      qC = kr && kr.exports === av,
      ia = qC && MC.process,
      DC = (function () {
        try {
          var e = kr && kr.require && kr.require("util").types;
          return e || (ia && ia.binding && ia.binding("util"));
        } catch {}
      })();
    rr.exports = DC;
  });
  var Un = c((a5, lv) => {
    var FC = nv(),
      GC = ov(),
      uv = sv(),
      cv = uv && uv.isTypedArray,
      UC = cv ? GC(cv) : FC;
    lv.exports = UC;
  });
  var oa = c((s5, fv) => {
    var kC = Hp(),
      VC = Fr(),
      WC = we(),
      HC = Dn(),
      XC = Fn(),
      BC = Un(),
      jC = Object.prototype,
      zC = jC.hasOwnProperty;
    function KC(e, t) {
      var r = WC(e),
        n = !r && VC(e),
        o = !r && !n && HC(e),
        i = !r && !n && !o && BC(e),
        a = r || n || o || i,
        s = a ? kC(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || zC.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (o && (d == "offset" || d == "parent")) ||
              (i &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              XC(d, u))
          ) &&
          s.push(d);
      return s;
    }
    fv.exports = KC;
  });
  var kn = c((u5, dv) => {
    var YC = Object.prototype;
    function $C(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || YC;
      return e === r;
    }
    dv.exports = $C;
  });
  var vv = c((c5, pv) => {
    var QC = Ro(),
      ZC = QC(Object.keys, Object);
    pv.exports = ZC;
  });
  var Vn = c((l5, gv) => {
    var JC = kn(),
      eL = vv(),
      tL = Object.prototype,
      rL = tL.hasOwnProperty;
    function nL(e) {
      if (!JC(e)) return eL(e);
      var t = [];
      for (var r in Object(e)) rL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    gv.exports = nL;
  });
  var Mt = c((f5, hv) => {
    var iL = Yo(),
      oL = Gn();
    function aL(e) {
      return e != null && oL(e.length) && !iL(e);
    }
    hv.exports = aL;
  });
  var Vr = c((d5, mv) => {
    var sL = oa(),
      uL = Vn(),
      cL = Mt();
    function lL(e) {
      return cL(e) ? sL(e) : uL(e);
    }
    mv.exports = lL;
  });
  var yv = c((p5, Ev) => {
    var fL = ta(),
      dL = na(),
      pL = Vr();
    function vL(e) {
      return fL(e, pL, dL);
    }
    Ev.exports = vL;
  });
  var Tv = c((v5, bv) => {
    var _v = yv(),
      gL = 1,
      hL = Object.prototype,
      mL = hL.hasOwnProperty;
    function EL(e, t, r, n, o, i) {
      var a = r & gL,
        s = _v(e),
        u = s.length,
        d = _v(t),
        h = d.length;
      if (u != h && !a) return !1;
      for (var g = u; g--; ) {
        var m = s[g];
        if (!(a ? m in t : mL.call(t, m))) return !1;
      }
      var E = i.get(e),
        T = i.get(t);
      if (E && T) return E == t && T == e;
      var I = !0;
      i.set(e, t), i.set(t, e);
      for (var D = a; ++g < u; ) {
        m = s[g];
        var S = e[m],
          L = t[m];
        if (n) var C = a ? n(L, S, m, t, e, i) : n(S, L, m, e, t, i);
        if (!(C === void 0 ? S === L || o(S, L, r, n, i) : C)) {
          I = !1;
          break;
        }
        D || (D = m == "constructor");
      }
      if (I && !D) {
        var P = e.constructor,
          q = t.constructor;
        P != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof P == "function" &&
            P instanceof P &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (I = !1);
      }
      return i.delete(e), i.delete(t), I;
    }
    bv.exports = EL;
  });
  var Ov = c((g5, Iv) => {
    var yL = Ot(),
      _L = Qe(),
      bL = yL(_L, "DataView");
    Iv.exports = bL;
  });
  var xv = c((h5, wv) => {
    var TL = Ot(),
      IL = Qe(),
      OL = TL(IL, "Promise");
    wv.exports = OL;
  });
  var Sv = c((m5, Av) => {
    var wL = Ot(),
      xL = Qe(),
      AL = wL(xL, "Set");
    Av.exports = AL;
  });
  var aa = c((E5, Rv) => {
    var SL = Ot(),
      RL = Qe(),
      CL = SL(RL, "WeakMap");
    Rv.exports = CL;
  });
  var Wn = c((y5, Dv) => {
    var sa = Ov(),
      ua = Nn(),
      ca = xv(),
      la = Sv(),
      fa = aa(),
      qv = It(),
      nr = Qo(),
      Cv = "[object Map]",
      LL = "[object Object]",
      Lv = "[object Promise]",
      Nv = "[object Set]",
      Pv = "[object WeakMap]",
      Mv = "[object DataView]",
      NL = nr(sa),
      PL = nr(ua),
      ML = nr(ca),
      qL = nr(la),
      DL = nr(fa),
      qt = qv;
    ((sa && qt(new sa(new ArrayBuffer(1))) != Mv) ||
      (ua && qt(new ua()) != Cv) ||
      (ca && qt(ca.resolve()) != Lv) ||
      (la && qt(new la()) != Nv) ||
      (fa && qt(new fa()) != Pv)) &&
      (qt = function (e) {
        var t = qv(e),
          r = t == LL ? e.constructor : void 0,
          n = r ? nr(r) : "";
        if (n)
          switch (n) {
            case NL:
              return Mv;
            case PL:
              return Cv;
            case ML:
              return Lv;
            case qL:
              return Nv;
            case DL:
              return Pv;
          }
        return t;
      });
    Dv.exports = qt;
  });
  var Xv = c((_5, Hv) => {
    var da = Zo(),
      FL = Jo(),
      GL = Pp(),
      UL = Tv(),
      Fv = Wn(),
      Gv = we(),
      Uv = Dn(),
      kL = Un(),
      VL = 1,
      kv = "[object Arguments]",
      Vv = "[object Array]",
      Hn = "[object Object]",
      WL = Object.prototype,
      Wv = WL.hasOwnProperty;
    function HL(e, t, r, n, o, i) {
      var a = Gv(e),
        s = Gv(t),
        u = a ? Vv : Fv(e),
        d = s ? Vv : Fv(t);
      (u = u == kv ? Hn : u), (d = d == kv ? Hn : d);
      var h = u == Hn,
        g = d == Hn,
        m = u == d;
      if (m && Uv(e)) {
        if (!Uv(t)) return !1;
        (a = !0), (h = !1);
      }
      if (m && !h)
        return (
          i || (i = new da()),
          a || kL(e) ? FL(e, t, r, n, o, i) : GL(e, t, u, r, n, o, i)
        );
      if (!(r & VL)) {
        var E = h && Wv.call(e, "__wrapped__"),
          T = g && Wv.call(t, "__wrapped__");
        if (E || T) {
          var I = E ? e.value() : e,
            D = T ? t.value() : t;
          return i || (i = new da()), o(I, D, r, n, i);
        }
      }
      return m ? (i || (i = new da()), UL(e, t, r, n, o, i)) : !1;
    }
    Hv.exports = HL;
  });
  var pa = c((b5, zv) => {
    var XL = Xv(),
      Bv = vt();
    function jv(e, t, r, n, o) {
      return e === t
        ? !0
        : e == null || t == null || (!Bv(e) && !Bv(t))
        ? e !== e && t !== t
        : XL(e, t, r, n, jv, o);
    }
    zv.exports = jv;
  });
  var Yv = c((T5, Kv) => {
    var BL = Zo(),
      jL = pa(),
      zL = 1,
      KL = 2;
    function YL(e, t, r, n) {
      var o = r.length,
        i = o,
        a = !n;
      if (e == null) return !i;
      for (e = Object(e); o--; ) {
        var s = r[o];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++o < i; ) {
        s = r[o];
        var u = s[0],
          d = e[u],
          h = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var g = new BL();
          if (n) var m = n(d, h, u, e, t, g);
          if (!(m === void 0 ? jL(h, d, zL | KL, n, g) : m)) return !1;
        }
      }
      return !0;
    }
    Kv.exports = YL;
  });
  var va = c((I5, $v) => {
    var $L = ut();
    function QL(e) {
      return e === e && !$L(e);
    }
    $v.exports = QL;
  });
  var Zv = c((O5, Qv) => {
    var ZL = va(),
      JL = Vr();
    function eN(e) {
      for (var t = JL(e), r = t.length; r--; ) {
        var n = t[r],
          o = e[n];
        t[r] = [n, o, ZL(o)];
      }
      return t;
    }
    Qv.exports = eN;
  });
  var ga = c((w5, Jv) => {
    function tN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Jv.exports = tN;
  });
  var tg = c((x5, eg) => {
    var rN = Yv(),
      nN = Zv(),
      iN = ga();
    function oN(e) {
      var t = nN(e);
      return t.length == 1 && t[0][2]
        ? iN(t[0][0], t[0][1])
        : function (r) {
            return r === e || rN(r, e, t);
          };
    }
    eg.exports = oN;
  });
  var Wr = c((A5, rg) => {
    var aN = It(),
      sN = vt(),
      uN = "[object Symbol]";
    function cN(e) {
      return typeof e == "symbol" || (sN(e) && aN(e) == uN);
    }
    rg.exports = cN;
  });
  var Xn = c((S5, ng) => {
    var lN = we(),
      fN = Wr(),
      dN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      pN = /^\w*$/;
    function vN(e, t) {
      if (lN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        fN(e)
        ? !0
        : pN.test(e) || !dN.test(e) || (t != null && e in Object(t));
    }
    ng.exports = vN;
  });
  var ag = c((R5, og) => {
    var ig = Pn(),
      gN = "Expected a function";
    function ha(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(gN);
      var r = function () {
        var n = arguments,
          o = t ? t.apply(this, n) : n[0],
          i = r.cache;
        if (i.has(o)) return i.get(o);
        var a = e.apply(this, n);
        return (r.cache = i.set(o, a) || i), a;
      };
      return (r.cache = new (ha.Cache || ig)()), r;
    }
    ha.Cache = ig;
    og.exports = ha;
  });
  var ug = c((C5, sg) => {
    var hN = ag(),
      mN = 500;
    function EN(e) {
      var t = hN(e, function (n) {
          return r.size === mN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    sg.exports = EN;
  });
  var lg = c((L5, cg) => {
    var yN = ug(),
      _N =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      bN = /\\(\\)?/g,
      TN = yN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(_N, function (r, n, o, i) {
            t.push(o ? i.replace(bN, "$1") : n || r);
          }),
          t
        );
      });
    cg.exports = TN;
  });
  var ma = c((N5, fg) => {
    function IN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
        o[r] = t(e[r], r, e);
      return o;
    }
    fg.exports = IN;
  });
  var mg = c((P5, hg) => {
    var dg = zt(),
      ON = ma(),
      wN = we(),
      xN = Wr(),
      AN = 1 / 0,
      pg = dg ? dg.prototype : void 0,
      vg = pg ? pg.toString : void 0;
    function gg(e) {
      if (typeof e == "string") return e;
      if (wN(e)) return ON(e, gg) + "";
      if (xN(e)) return vg ? vg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -AN ? "-0" : t;
    }
    hg.exports = gg;
  });
  var yg = c((M5, Eg) => {
    var SN = mg();
    function RN(e) {
      return e == null ? "" : SN(e);
    }
    Eg.exports = RN;
  });
  var Hr = c((q5, _g) => {
    var CN = we(),
      LN = Xn(),
      NN = lg(),
      PN = yg();
    function MN(e, t) {
      return CN(e) ? e : LN(e, t) ? [e] : NN(PN(e));
    }
    _g.exports = MN;
  });
  var ir = c((D5, bg) => {
    var qN = Wr(),
      DN = 1 / 0;
    function FN(e) {
      if (typeof e == "string" || qN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -DN ? "-0" : t;
    }
    bg.exports = FN;
  });
  var Bn = c((F5, Tg) => {
    var GN = Hr(),
      UN = ir();
    function kN(e, t) {
      t = GN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[UN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Tg.exports = kN;
  });
  var jn = c((G5, Ig) => {
    var VN = Bn();
    function WN(e, t, r) {
      var n = e == null ? void 0 : VN(e, t);
      return n === void 0 ? r : n;
    }
    Ig.exports = WN;
  });
  var wg = c((U5, Og) => {
    function HN(e, t) {
      return e != null && t in Object(e);
    }
    Og.exports = HN;
  });
  var Ag = c((k5, xg) => {
    var XN = Hr(),
      BN = Fr(),
      jN = we(),
      zN = Fn(),
      KN = Gn(),
      YN = ir();
    function $N(e, t, r) {
      t = XN(t, e);
      for (var n = -1, o = t.length, i = !1; ++n < o; ) {
        var a = YN(t[n]);
        if (!(i = e != null && r(e, a))) break;
        e = e[a];
      }
      return i || ++n != o
        ? i
        : ((o = e == null ? 0 : e.length),
          !!o && KN(o) && zN(a, o) && (jN(e) || BN(e)));
    }
    xg.exports = $N;
  });
  var Rg = c((V5, Sg) => {
    var QN = wg(),
      ZN = Ag();
    function JN(e, t) {
      return e != null && ZN(e, t, QN);
    }
    Sg.exports = JN;
  });
  var Lg = c((W5, Cg) => {
    var eP = pa(),
      tP = jn(),
      rP = Rg(),
      nP = Xn(),
      iP = va(),
      oP = ga(),
      aP = ir(),
      sP = 1,
      uP = 2;
    function cP(e, t) {
      return nP(e) && iP(t)
        ? oP(aP(e), t)
        : function (r) {
            var n = tP(r, e);
            return n === void 0 && n === t ? rP(r, e) : eP(t, n, sP | uP);
          };
    }
    Cg.exports = cP;
  });
  var zn = c((H5, Ng) => {
    function lP(e) {
      return e;
    }
    Ng.exports = lP;
  });
  var Ea = c((X5, Pg) => {
    function fP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Pg.exports = fP;
  });
  var qg = c((B5, Mg) => {
    var dP = Bn();
    function pP(e) {
      return function (t) {
        return dP(t, e);
      };
    }
    Mg.exports = pP;
  });
  var Fg = c((j5, Dg) => {
    var vP = Ea(),
      gP = qg(),
      hP = Xn(),
      mP = ir();
    function EP(e) {
      return hP(e) ? vP(mP(e)) : gP(e);
    }
    Dg.exports = EP;
  });
  var wt = c((z5, Gg) => {
    var yP = tg(),
      _P = Lg(),
      bP = zn(),
      TP = we(),
      IP = Fg();
    function OP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? bP
        : typeof e == "object"
        ? TP(e)
          ? _P(e[0], e[1])
          : yP(e)
        : IP(e);
    }
    Gg.exports = OP;
  });
  var ya = c((K5, Ug) => {
    var wP = wt(),
      xP = Mt(),
      AP = Vr();
    function SP(e) {
      return function (t, r, n) {
        var o = Object(t);
        if (!xP(t)) {
          var i = wP(r, 3);
          (t = AP(t)),
            (r = function (s) {
              return i(o[s], s, o);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? o[i ? t[a] : a] : void 0;
      };
    }
    Ug.exports = SP;
  });
  var _a = c((Y5, kg) => {
    function RP(e, t, r, n) {
      for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
        if (t(e[i], i, e)) return i;
      return -1;
    }
    kg.exports = RP;
  });
  var Wg = c(($5, Vg) => {
    var CP = /\s/;
    function LP(e) {
      for (var t = e.length; t-- && CP.test(e.charAt(t)); );
      return t;
    }
    Vg.exports = LP;
  });
  var Xg = c((Q5, Hg) => {
    var NP = Wg(),
      PP = /^\s+/;
    function MP(e) {
      return e && e.slice(0, NP(e) + 1).replace(PP, "");
    }
    Hg.exports = MP;
  });
  var Kn = c((Z5, zg) => {
    var qP = Xg(),
      Bg = ut(),
      DP = Wr(),
      jg = 0 / 0,
      FP = /^[-+]0x[0-9a-f]+$/i,
      GP = /^0b[01]+$/i,
      UP = /^0o[0-7]+$/i,
      kP = parseInt;
    function VP(e) {
      if (typeof e == "number") return e;
      if (DP(e)) return jg;
      if (Bg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Bg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = qP(e);
      var r = GP.test(e);
      return r || UP.test(e) ? kP(e.slice(2), r ? 2 : 8) : FP.test(e) ? jg : +e;
    }
    zg.exports = VP;
  });
  var $g = c((J5, Yg) => {
    var WP = Kn(),
      Kg = 1 / 0,
      HP = 17976931348623157e292;
    function XP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = WP(e)), e === Kg || e === -Kg)) {
        var t = e < 0 ? -1 : 1;
        return t * HP;
      }
      return e === e ? e : 0;
    }
    Yg.exports = XP;
  });
  var ba = c((eB, Qg) => {
    var BP = $g();
    function jP(e) {
      var t = BP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Qg.exports = jP;
  });
  var Jg = c((tB, Zg) => {
    var zP = _a(),
      KP = wt(),
      YP = ba(),
      $P = Math.max;
    function QP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = r == null ? 0 : YP(r);
      return o < 0 && (o = $P(n + o, 0)), zP(e, KP(t, 3), o);
    }
    Zg.exports = QP;
  });
  var Ta = c((rB, eh) => {
    var ZP = ya(),
      JP = Jg(),
      eM = ZP(JP);
    eh.exports = eM;
  });
  var nh = {};
  Fe(nh, {
    ELEMENT_MATCHES: () => tM,
    FLEX_PREFIXED: () => Ia,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => $n,
    withBrowser: () => Yn,
  });
  var rh,
    Je,
    Yn,
    tM,
    Ia,
    xt,
    th,
    $n,
    Qn = me(() => {
      "use strict";
      (rh = fe(Ta())),
        (Je = typeof window < "u"),
        (Yn = (e, t) => (Je ? e() : t)),
        (tM = Yn(() =>
          (0, rh.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ia = Yn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o];
              if (((e.style.display = i), e.style.display === i)) return i;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (xt = Yn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let o = 0; o < n; o++) {
              let i = t[o] + r;
              if (e.style[i] !== void 0) return i;
            }
          }
          return "transform";
        }, "transform")),
        (th = xt.split("transform")[0]),
        ($n = th ? th + "TransformStyle" : "transformStyle");
    });
  var Oa = c((nB, uh) => {
    var rM = 4,
      nM = 0.001,
      iM = 1e-7,
      oM = 10,
      Xr = 11,
      Zn = 1 / (Xr - 1),
      aM = typeof Float32Array == "function";
    function ih(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function oh(e, t) {
      return 3 * t - 6 * e;
    }
    function ah(e) {
      return 3 * e;
    }
    function Jn(e, t, r) {
      return ((ih(t, r) * e + oh(t, r)) * e + ah(t)) * e;
    }
    function sh(e, t, r) {
      return 3 * ih(t, r) * e * e + 2 * oh(t, r) * e + ah(t);
    }
    function sM(e, t, r, n, o) {
      var i,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (i = Jn(a, n, o) - e), i > 0 ? (r = a) : (t = a);
      while (Math.abs(i) > iM && ++s < oM);
      return a;
    }
    function uM(e, t, r, n) {
      for (var o = 0; o < rM; ++o) {
        var i = sh(t, r, n);
        if (i === 0) return t;
        var a = Jn(t, r, n) - e;
        t -= a / i;
      }
      return t;
    }
    uh.exports = function (t, r, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var i = aM ? new Float32Array(Xr) : new Array(Xr);
      if (t !== r || n !== o)
        for (var a = 0; a < Xr; ++a) i[a] = Jn(a * Zn, t, n);
      function s(u) {
        for (var d = 0, h = 1, g = Xr - 1; h !== g && i[h] <= u; ++h) d += Zn;
        --h;
        var m = (u - i[h]) / (i[h + 1] - i[h]),
          E = d + m * Zn,
          T = sh(E, t, n);
        return T >= nM ? uM(u, E, t, n) : T === 0 ? E : sM(u, d, d + Zn, t, n);
      }
      return function (d) {
        return t === r && n === o
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : Jn(s(d), r, o);
      };
    };
  });
  var jr = {};
  Fe(jr, {
    bounce: () => XM,
    bouncePast: () => BM,
    ease: () => cM,
    easeIn: () => lM,
    easeInOut: () => dM,
    easeOut: () => fM,
    inBack: () => qM,
    inCirc: () => LM,
    inCubic: () => hM,
    inElastic: () => GM,
    inExpo: () => SM,
    inOutBack: () => FM,
    inOutCirc: () => PM,
    inOutCubic: () => EM,
    inOutElastic: () => kM,
    inOutExpo: () => CM,
    inOutQuad: () => gM,
    inOutQuart: () => bM,
    inOutQuint: () => OM,
    inOutSine: () => AM,
    inQuad: () => pM,
    inQuart: () => yM,
    inQuint: () => TM,
    inSine: () => wM,
    outBack: () => DM,
    outBounce: () => MM,
    outCirc: () => NM,
    outCubic: () => mM,
    outElastic: () => UM,
    outExpo: () => RM,
    outQuad: () => vM,
    outQuart: () => _M,
    outQuint: () => IM,
    outSine: () => xM,
    swingFrom: () => WM,
    swingFromTo: () => VM,
    swingTo: () => HM,
  });
  function pM(e) {
    return Math.pow(e, 2);
  }
  function vM(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function gM(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function hM(e) {
    return Math.pow(e, 3);
  }
  function mM(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function EM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function yM(e) {
    return Math.pow(e, 4);
  }
  function _M(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function bM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function TM(e) {
    return Math.pow(e, 5);
  }
  function IM(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function OM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function wM(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function xM(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function AM(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function SM(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function RM(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function CM(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function LM(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function NM(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function PM(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function MM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function qM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function DM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function FM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function GM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function UM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function kM(e) {
    let t = gt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function VM(e) {
    let t = gt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function WM(e) {
    let t = gt;
    return e * e * ((t + 1) * e - t);
  }
  function HM(e) {
    let t = gt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function XM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function BM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Br,
    gt,
    cM,
    lM,
    fM,
    dM,
    wa = me(() => {
      "use strict";
      (Br = fe(Oa())),
        (gt = 1.70158),
        (cM = (0, Br.default)(0.25, 0.1, 0.25, 1)),
        (lM = (0, Br.default)(0.42, 0, 1, 1)),
        (fM = (0, Br.default)(0, 0, 0.58, 1)),
        (dM = (0, Br.default)(0.42, 0, 0.58, 1));
    });
  var lh = {};
  Fe(lh, {
    applyEasing: () => zM,
    createBezierEasing: () => jM,
    optimizeFloat: () => zr,
  });
  function zr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      o = Number(Math.round(e * n) / n);
    return Math.abs(o) > 1e-4 ? o : 0;
  }
  function jM(e) {
    return (0, ch.default)(...e);
  }
  function zM(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : zr(r ? (t > 0 ? r(t) : t) : t > 0 && e && jr[e] ? jr[e](t) : t);
  }
  var ch,
    xa = me(() => {
      "use strict";
      wa();
      ch = fe(Oa());
    });
  var ph = {};
  Fe(ph, {
    createElementState: () => dh,
    ixElements: () => sq,
    mergeActionState: () => Aa,
  });
  function dh(e, t, r, n, o) {
    let i =
      r === KM ? (0, or.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, or.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
  }
  function Aa(e, t, r, n, o) {
    let i = cq(o);
    return (0, or.mergeIn)(e, [t, aq, r], n, i);
  }
  function cq(e) {
    let { config: t } = e;
    return uq.reduce((r, n) => {
      let o = n[0],
        i = n[1],
        a = t[o],
        s = t[i];
      return a != null && s != null && (r[i] = s), r;
    }, {});
  }
  var or,
    oB,
    KM,
    aB,
    YM,
    $M,
    QM,
    ZM,
    JM,
    eq,
    tq,
    rq,
    nq,
    iq,
    oq,
    fh,
    aq,
    sq,
    uq,
    vh = me(() => {
      "use strict";
      or = fe($t());
      Ue();
      ({
        HTML_ELEMENT: oB,
        PLAIN_OBJECT: KM,
        ABSTRACT_NODE: aB,
        CONFIG_X_VALUE: YM,
        CONFIG_Y_VALUE: $M,
        CONFIG_Z_VALUE: QM,
        CONFIG_VALUE: ZM,
        CONFIG_X_UNIT: JM,
        CONFIG_Y_UNIT: eq,
        CONFIG_Z_UNIT: tq,
        CONFIG_UNIT: rq,
      } = Re),
        ({
          IX2_SESSION_STOPPED: nq,
          IX2_INSTANCE_ADDED: iq,
          IX2_ELEMENT_STATE_CHANGED: oq,
        } = Ie),
        (fh = {}),
        (aq = "refState"),
        (sq = (e = fh, t = {}) => {
          switch (t.type) {
            case nq:
              return fh;
            case iq: {
              let {
                  elementId: r,
                  element: n,
                  origin: o,
                  actionItem: i,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = i,
                u = e;
              return (
                (0, or.getIn)(u, [r, n]) !== n && (u = dh(u, n, a, r, i)),
                Aa(u, r, s, o, i)
              );
            }
            case oq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: o,
                actionItem: i,
              } = t.payload;
              return Aa(e, r, n, o, i);
            }
            default:
              return e;
          }
        });
      uq = [
        [YM, JM],
        [$M, eq],
        [QM, tq],
        [ZM, rq],
      ];
    });
  var gh = c((xe) => {
    "use strict";
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.renderPlugin =
      xe.getPluginOrigin =
      xe.getPluginDuration =
      xe.getPluginDestination =
      xe.getPluginConfig =
      xe.createPluginInstance =
      xe.clearPlugin =
        void 0;
    var lq = (e) => e.value;
    xe.getPluginConfig = lq;
    var fq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    xe.getPluginDuration = fq;
    var dq = (e) => e || { value: 0 };
    xe.getPluginOrigin = dq;
    var pq = (e) => ({ value: e.value });
    xe.getPluginDestination = pq;
    var vq = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    xe.createPluginInstance = vq;
    var gq = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    xe.renderPlugin = gq;
    var hq = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    xe.clearPlugin = hq;
  });
  var mh = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var mq = (e) => document.querySelector(`[data-w-id="${e}"]`),
      Eq = () => window.Webflow.require("spline"),
      yq = (e, t) => e.filter((r) => !t.includes(r)),
      _q = (e, t) => e.value[t];
    Ae.getPluginConfig = _q;
    var bq = () => null;
    Ae.getPluginDuration = bq;
    var hh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      Tq = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let i = Object.keys(e),
            a = yq(n, i);
          return a.length ? a.reduce((u, d) => ((u[d] = hh[d]), u), e) : e;
        }
        return n.reduce((i, a) => ((i[a] = hh[a]), i), {});
      };
    Ae.getPluginOrigin = Tq;
    var Iq = (e) => e.value;
    Ae.getPluginDestination = Iq;
    var Oq = (e, t) => {
      var r, n;
      let o =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return o ? mq(o) : null;
    };
    Ae.createPluginInstance = Oq;
    var wq = (e, t, r) => {
      let n = Eq(),
        o = n.getInstance(e),
        i = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = i && s.findObjectById(i);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      o ? a(o.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = wq;
    var xq = () => null;
    Ae.clearPlugin = xq;
  });
  var yh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = Eh;
    Oe.renderPlugin = void 0;
    function Eh(e) {
      let t,
        r,
        n,
        o = 1,
        i = e.replace(/\s/g, "").toLowerCase();
      if (i.startsWith("#")) {
        let a = i.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (i.startsWith("rgba")) {
        let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (o = parseFloat(a[3]));
      } else if (i.startsWith("rgb")) {
        let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (i.startsWith("hsla")) {
        let a = i.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100;
        o = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * d - 1)) * u,
          g = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          m = d - h / 2,
          E,
          T,
          I;
        s >= 0 && s < 60
          ? ((E = h), (T = g), (I = 0))
          : s >= 60 && s < 120
          ? ((E = g), (T = h), (I = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (T = h), (I = g))
          : s >= 180 && s < 240
          ? ((E = 0), (T = g), (I = h))
          : s >= 240 && s < 300
          ? ((E = g), (T = 0), (I = h))
          : ((E = h), (T = 0), (I = g)),
          (t = Math.round((E + m) * 255)),
          (r = Math.round((T + m) * 255)),
          (n = Math.round((I + m) * 255));
      } else if (i.startsWith("hsl")) {
        let a = i.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * d - 1)) * u,
          g = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          m = d - h / 2,
          E,
          T,
          I;
        s >= 0 && s < 60
          ? ((E = h), (T = g), (I = 0))
          : s >= 60 && s < 120
          ? ((E = g), (T = h), (I = 0))
          : s >= 120 && s < 180
          ? ((E = 0), (T = h), (I = g))
          : s >= 180 && s < 240
          ? ((E = 0), (T = g), (I = h))
          : s >= 240 && s < 300
          ? ((E = g), (T = 0), (I = h))
          : ((E = h), (T = 0), (I = g)),
          (t = Math.round((E + m) * 255)),
          (r = Math.round((T + m) * 255)),
          (n = Math.round((I + m) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: o }
      );
    }
    var Aq = (e, t) => e.value[t];
    Oe.getPluginConfig = Aq;
    var Sq = () => null;
    Oe.getPluginDuration = Sq;
    var Rq = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        o = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(o, 10) };
      if (r.red != null && r.green != null && r.blue != null) return Eh(o);
    };
    Oe.getPluginOrigin = Rq;
    var Cq = (e) => e.value;
    Oe.getPluginDestination = Cq;
    var Lq = () => null;
    Oe.createPluginInstance = Lq;
    var Nq = (e, t, r) => {
      let n = r.config.target.objectId,
        o = r.config.value.unit,
        { PLUGIN_VARIABLE: i } = t,
        { size: a, red: s, green: u, blue: d, alpha: h } = i,
        g;
      a != null && (g = a + o),
        s != null &&
          d != null &&
          u != null &&
          h != null &&
          (g = `rgba(${s}, ${u}, ${d}, ${h})`),
        g != null && document.documentElement.style.setProperty(n, g);
    };
    Oe.renderPlugin = Nq;
    var Pq = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = Pq;
  });
  var _h = c((ei) => {
    "use strict";
    var Ra = pn().default;
    Object.defineProperty(ei, "__esModule", { value: !0 });
    ei.pluginMethodMap = void 0;
    var Sa = (Ue(), nt(xf)),
      Mq = Ra(gh()),
      qq = Ra(mh()),
      Dq = Ra(yh()),
      lB = (ei.pluginMethodMap = new Map([
        [Sa.ActionTypeConsts.PLUGIN_LOTTIE, { ...Mq }],
        [Sa.ActionTypeConsts.PLUGIN_SPLINE, { ...qq }],
        [Sa.ActionTypeConsts.PLUGIN_VARIABLE, { ...Dq }],
      ]));
  });
  var bh = {};
  Fe(bh, {
    clearPlugin: () => qa,
    createPluginInstance: () => Gq,
    getPluginConfig: () => La,
    getPluginDestination: () => Pa,
    getPluginDuration: () => Fq,
    getPluginOrigin: () => Na,
    isPluginType: () => Dt,
    renderPlugin: () => Ma,
  });
  function Dt(e) {
    return Ca.pluginMethodMap.has(e);
  }
  var Ca,
    Ft,
    La,
    Na,
    Fq,
    Pa,
    Gq,
    Ma,
    qa,
    Da = me(() => {
      "use strict";
      Qn();
      Ca = fe(_h());
      (Ft = (e) => (t) => {
        if (!Je) return () => null;
        let r = Ca.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (La = Ft("getPluginConfig")),
        (Na = Ft("getPluginOrigin")),
        (Fq = Ft("getPluginDuration")),
        (Pa = Ft("getPluginDestination")),
        (Gq = Ft("createPluginInstance")),
        (Ma = Ft("renderPlugin")),
        (qa = Ft("clearPlugin"));
    });
  var Ih = c((pB, Th) => {
    function Uq(e, t) {
      return e == null || e !== e ? t : e;
    }
    Th.exports = Uq;
  });
  var wh = c((vB, Oh) => {
    function kq(e, t, r, n) {
      var o = -1,
        i = e == null ? 0 : e.length;
      for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
      return r;
    }
    Oh.exports = kq;
  });
  var Ah = c((gB, xh) => {
    function Vq(e) {
      return function (t, r, n) {
        for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++o];
          if (r(i[u], u, i) === !1) break;
        }
        return t;
      };
    }
    xh.exports = Vq;
  });
  var Rh = c((hB, Sh) => {
    var Wq = Ah(),
      Hq = Wq();
    Sh.exports = Hq;
  });
  var Fa = c((mB, Ch) => {
    var Xq = Rh(),
      Bq = Vr();
    function jq(e, t) {
      return e && Xq(e, t, Bq);
    }
    Ch.exports = jq;
  });
  var Nh = c((EB, Lh) => {
    var zq = Mt();
    function Kq(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!zq(r)) return e(r, n);
        for (
          var o = r.length, i = t ? o : -1, a = Object(r);
          (t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

        );
        return r;
      };
    }
    Lh.exports = Kq;
  });
  var Ga = c((yB, Ph) => {
    var Yq = Fa(),
      $q = Nh(),
      Qq = $q(Yq);
    Ph.exports = Qq;
  });
  var qh = c((_B, Mh) => {
    function Zq(e, t, r, n, o) {
      return (
        o(e, function (i, a, s) {
          r = n ? ((n = !1), i) : t(r, i, a, s);
        }),
        r
      );
    }
    Mh.exports = Zq;
  });
  var Fh = c((bB, Dh) => {
    var Jq = wh(),
      e1 = Ga(),
      t1 = wt(),
      r1 = qh(),
      n1 = we();
    function i1(e, t, r) {
      var n = n1(e) ? Jq : r1,
        o = arguments.length < 3;
      return n(e, t1(t, 4), r, o, e1);
    }
    Dh.exports = i1;
  });
  var Uh = c((TB, Gh) => {
    var o1 = _a(),
      a1 = wt(),
      s1 = ba(),
      u1 = Math.max,
      c1 = Math.min;
    function l1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var o = n - 1;
      return (
        r !== void 0 &&
          ((o = s1(r)), (o = r < 0 ? u1(n + o, 0) : c1(o, n - 1))),
        o1(e, a1(t, 3), o, !0)
      );
    }
    Gh.exports = l1;
  });
  var Vh = c((IB, kh) => {
    var f1 = ya(),
      d1 = Uh(),
      p1 = f1(d1);
    kh.exports = p1;
  });
  function Wh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function g1(e, t) {
    if (Wh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let o = 0; o < r.length; o++)
      if (!v1.call(t, r[o]) || !Wh(e[r[o]], t[r[o]])) return !1;
    return !0;
  }
  var v1,
    Ua,
    Hh = me(() => {
      "use strict";
      v1 = Object.prototype.hasOwnProperty;
      Ua = g1;
    });
  var am = {};
  Fe(am, {
    cleanupHTMLElement: () => dD,
    clearAllStyles: () => fD,
    clearObjectCache: () => N1,
    getActionListProgress: () => vD,
    getAffectedElements: () => Xa,
    getComputedStyle: () => k1,
    getDestinationValues: () => z1,
    getElementId: () => D1,
    getInstanceId: () => M1,
    getInstanceOrigin: () => H1,
    getItemConfigByKey: () => j1,
    getMaxDurationItemIndex: () => om,
    getNamespacedParameterId: () => mD,
    getRenderType: () => rm,
    getStyleProp: () => K1,
    mediaQueriesEqual: () => yD,
    observeStore: () => U1,
    reduceListToGroup: () => gD,
    reifyState: () => F1,
    renderHTMLElement: () => Y1,
    shallowEqual: () => Ua,
    shouldAllowMediaQuery: () => ED,
    shouldNamespaceEventParameter: () => hD,
    stringifyTarget: () => _D,
  });
  function N1() {
    ti.clear();
  }
  function M1() {
    return "i" + P1++;
  }
  function D1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + q1++;
  }
  function F1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, oi.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      o = r && r.mediaQueries,
      i = [];
    return (
      o
        ? (i = o.map((a) => a.key))
        : ((o = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: o,
          mediaQueryKeys: i,
        },
      }
    );
  }
  function U1({ store: e, select: t, onChange: r, comparator: n = G1 }) {
    let { getState: o, subscribe: i } = e,
      a = i(u),
      s = t(o());
    function u() {
      let d = t(o());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function jh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: o,
        selectorGuids: i,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Xa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: o,
  }) {
    if (!o) throw new Error("IX2 missing elementApi");
    let { targets: i } = e;
    if (Array.isArray(i) && i.length > 0)
      return i.reduce(
        (U, x) =>
          U.concat(
            Xa({
              config: { target: x },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: o,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: h,
        matchSelector: g,
        elementContains: m,
        isSiblingNode: E,
      } = o,
      { target: T } = e;
    if (!T) return [];
    let {
      id: I,
      objectId: D,
      selector: S,
      selectorGuids: L,
      appliesTo: C,
      useEventTarget: P,
    } = jh(T);
    if (D) return [ti.has(D) ? ti.get(D) : ti.set(D, {}).get(D)];
    if (C === Xo.PAGE) {
      let U = a(I);
      return U ? [U] : [];
    }
    let M = (t?.action?.config?.affectedElements ?? {})[I || S] || {},
      X = !!(M.id || M.selector),
      K,
      $,
      J,
      ee = t && s(jh(t.target));
    if (
      (X
        ? ((K = M.limitAffectedElements), ($ = ee), (J = s(M)))
        : ($ = J = s({ id: I, selector: S, selectorGuids: L })),
      t && P)
    ) {
      let U = r && (J || P === !0) ? [r] : u(ee);
      if (J) {
        if (P === R1) return u(J).filter((x) => U.some((F) => m(x, F)));
        if (P === Xh) return u(J).filter((x) => U.some((F) => m(F, x)));
        if (P === Bh) return u(J).filter((x) => U.some((F) => E(F, x)));
      }
      return U;
    }
    return $ == null || J == null
      ? []
      : Je && n
      ? u(J).filter((U) => n.contains(U))
      : K === Xh
      ? u($, J)
      : K === S1
      ? d(u($)).filter(g(J))
      : K === Bh
      ? h(u($)).filter(g(J))
      : u(J);
  }
  function k1({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case lr:
      case fr:
      case dr:
      case pr:
      case si:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function H1(e, t = {}, r = {}, n, o) {
    let { getStyle: i } = o,
      { actionTypeId: a } = n;
    if (Dt(a)) return Na(a)(t[a], n);
    switch (n.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr:
        return t[n.actionTypeId] || Ba[n.actionTypeId];
      case Zr:
        return V1(t[n.actionTypeId], n.config.filters);
      case Jr:
        return W1(t[n.actionTypeId], n.config.fontVariations);
      case Jh:
        return { value: (0, ht.default)(parseFloat(i(e, ni)), 1) };
      case lr: {
        let s = i(e, ct),
          u = i(e, lt),
          d,
          h;
        return (
          n.config.widthUnit === At
            ? (d = zh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === At
            ? (h = zh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: h }
        );
      }
      case fr:
      case dr:
      case pr:
        return uD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: i,
        });
      case si:
        return { value: (0, ht.default)(i(e, ii), r.display) };
      case L1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function z1({ element: e, actionItem: t, elementApi: r }) {
    if (Dt(t.actionTypeId)) return Pa(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case sr:
      case ur:
      case cr:
      case Qr: {
        let { xValue: n, yValue: o, zValue: i } = t.config;
        return { xValue: n, yValue: o, zValue: i };
      }
      case lr: {
        let { getStyle: n, setStyle: o, getProperty: i } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Je) return { widthValue: u, heightValue: d };
        if (a === At) {
          let h = n(e, ct);
          o(e, ct, ""), (u = i(e, "offsetWidth")), o(e, ct, h);
        }
        if (s === At) {
          let h = n(e, lt);
          o(e, lt, ""), (d = i(e, "offsetHeight")), o(e, lt, h);
        }
        return { widthValue: u, heightValue: d };
      }
      case fr:
      case dr:
      case pr: {
        let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
        return { rValue: n, gValue: o, bValue: i, aValue: a };
      }
      case Zr:
        return t.config.filters.reduce(X1, {});
      case Jr:
        return t.config.fontVariations.reduce(B1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function rm(e) {
    if (/^TRANSFORM_/.test(e)) return Qh;
    if (/^STYLE_/.test(e)) return Wa;
    if (/^GENERAL_/.test(e)) return Va;
    if (/^PLUGIN_/.test(e)) return Zh;
  }
  function K1(e, t) {
    return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function Y1(e, t, r, n, o, i, a, s, u) {
    switch (s) {
      case Qh:
        return eD(e, t, r, o, a);
      case Wa:
        return cD(e, t, r, o, i, a);
      case Va:
        return lD(e, o, a);
      case Zh: {
        let { actionTypeId: d } = o;
        if (Dt(d)) return Ma(d)(u, t, o);
      }
    }
  }
  function eD(e, t, r, n, o) {
    let i = J1.map((s) => {
        let u = Ba[s],
          {
            xValue: d = u.xValue,
            yValue: h = u.yValue,
            zValue: g = u.zValue,
            xUnit: m = "",
            yUnit: E = "",
            zUnit: T = "",
          } = t[s] || {};
        switch (s) {
          case sr:
            return `${E1}(${d}${m}, ${h}${E}, ${g}${T})`;
          case ur:
            return `${y1}(${d}${m}, ${h}${E}, ${g}${T})`;
          case cr:
            return `${_1}(${d}${m}) ${b1}(${h}${E}) ${T1}(${g}${T})`;
          case Qr:
            return `${I1}(${d}${m}, ${h}${E})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = o;
    Gt(e, xt, o), a(e, xt, i), nD(n, r) && a(e, $n, O1);
  }
  function tD(e, t, r, n) {
    let o = (0, oi.default)(t, (a, s, u) => `${a} ${u}(${s}${Z1(u, r)})`, ""),
      { setStyle: i } = n;
    Gt(e, Kr, n), i(e, Kr, o);
  }
  function rD(e, t, r, n) {
    let o = (0, oi.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: i } = n;
    Gt(e, Yr, n), i(e, Yr, o);
  }
  function nD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === sr && n !== void 0) ||
      (e === ur && n !== void 0) ||
      (e === cr && (t !== void 0 || r !== void 0))
    );
  }
  function sD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function uD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let o = Ha[t],
      i = n(e, o),
      a = oD.test(i) ? i : r[o],
      s = sD(aD, a).split($r);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function cD(e, t, r, n, o, i) {
    let { setStyle: a } = i;
    switch (n.actionTypeId) {
      case lr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: h } = r;
        d !== void 0 && (s === At && (s = "px"), Gt(e, ct, i), a(e, ct, d + s)),
          h !== void 0 &&
            (u === At && (u = "px"), Gt(e, lt, i), a(e, lt, h + u));
        break;
      }
      case Zr: {
        tD(e, r, n.config, i);
        break;
      }
      case Jr: {
        rD(e, r, n.config, i);
        break;
      }
      case fr:
      case dr:
      case pr: {
        let s = Ha[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          h = Math.round(r.bValue),
          g = r.aValue;
        Gt(e, s, i),
          a(e, s, g >= 1 ? `rgb(${u},${d},${h})` : `rgba(${u},${d},${h},${g})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Gt(e, o, i), a(e, o, r.value + s);
        break;
      }
    }
  }
  function lD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case si: {
        let { value: o } = t.config;
        o === w1 && Je ? n(e, ii, Ia) : n(e, ii, o);
        return;
      }
    }
  }
  function Gt(e, t, r) {
    if (!Je) return;
    let n = tm[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, ar);
    if (!a) {
      i(e, ar, n);
      return;
    }
    let s = a.split($r).map(em);
    s.indexOf(n) === -1 && i(e, ar, s.concat(n).join($r));
  }
  function nm(e, t, r) {
    if (!Je) return;
    let n = tm[t];
    if (!n) return;
    let { getStyle: o, setStyle: i } = r,
      a = o(e, ar);
    !a ||
      a.indexOf(n) === -1 ||
      i(
        e,
        ar,
        a
          .split($r)
          .map(em)
          .filter((s) => s !== n)
          .join($r)
      );
  }
  function fD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: o = {} } = r;
    Object.keys(n).forEach((i) => {
      let a = n[i],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = o[u];
      d && Kh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(o).forEach((i) => {
        Kh({ actionList: o[i], elementApi: t });
      });
  }
  function Kh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e;
    n &&
      n.forEach((i) => {
        Yh({ actionGroup: i, event: t, elementApi: r });
      }),
      o &&
        o.forEach((i) => {
          let { continuousActionGroups: a } = i;
          a.forEach((s) => {
            Yh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Yh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((o) => {
      let { actionTypeId: i, config: a } = o,
        s;
      Dt(i)
        ? (s = (u) => qa(i)(u, o))
        : (s = im({ effect: pD, actionTypeId: i, elementApi: r })),
        Xa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function dD(e, t, r) {
    let { setStyle: n, getStyle: o } = r,
      { actionTypeId: i } = t;
    if (i === lr) {
      let { config: a } = t;
      a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "");
    }
    o(e, ar) && im({ effect: nm, actionTypeId: i, elementApi: r })(e);
  }
  function pD(e, t, r) {
    let { setStyle: n } = r;
    nm(e, t, r), n(e, t, ""), t === xt && n(e, $n, "");
  }
  function om(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, o) => {
        let { config: i } = n,
          a = i.delay + i.duration;
        a >= t && ((t = a), (r = o));
      }),
      r
    );
  }
  function vD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: o, verboseTimeElapsed: i = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: h } = u,
          g = h[om(h)],
          { config: m, actionTypeId: E } = g;
        o.id === g.id && (s = a + i);
        let T = rm(E) === Va ? 0 : m.duration;
        a += m.delay + T;
      }),
      a > 0 ? zr(s / a) : 0
    );
  }
  function gD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: o } = e,
      i = [],
      a = (s) => (
        i.push((0, ai.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      o &&
        o.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: d }) => d.some(a));
        }),
      (0, ai.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
      })
    );
  }
  function hD(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function mD(e, t) {
    return e + C1 + t;
  }
  function ED(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function yD(e, t) {
    return Ua(e && e.sort(), t && t.sort());
  }
  function _D(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + ka + r + ka + n;
  }
  var ht,
    oi,
    ri,
    ai,
    h1,
    m1,
    E1,
    y1,
    _1,
    b1,
    T1,
    I1,
    O1,
    w1,
    ni,
    Kr,
    Yr,
    ct,
    lt,
    $h,
    x1,
    A1,
    Xh,
    S1,
    Bh,
    R1,
    ii,
    ar,
    At,
    $r,
    C1,
    ka,
    Qh,
    Va,
    Wa,
    Zh,
    sr,
    ur,
    cr,
    Qr,
    Jh,
    Zr,
    Jr,
    lr,
    fr,
    dr,
    pr,
    si,
    L1,
    em,
    Ha,
    tm,
    ti,
    P1,
    q1,
    G1,
    zh,
    V1,
    W1,
    X1,
    B1,
    j1,
    Ba,
    $1,
    Q1,
    Z1,
    J1,
    iD,
    oD,
    aD,
    im,
    sm = me(() => {
      "use strict";
      (ht = fe(Ih())), (oi = fe(Fh())), (ri = fe(Vh())), (ai = fe($t()));
      Ue();
      Hh();
      xa();
      Da();
      Qn();
      ({
        BACKGROUND: h1,
        TRANSFORM: m1,
        TRANSLATE_3D: E1,
        SCALE_3D: y1,
        ROTATE_X: _1,
        ROTATE_Y: b1,
        ROTATE_Z: T1,
        SKEW: I1,
        PRESERVE_3D: O1,
        FLEX: w1,
        OPACITY: ni,
        FILTER: Kr,
        FONT_VARIATION_SETTINGS: Yr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: $h,
        BORDER_COLOR: x1,
        COLOR: A1,
        CHILDREN: Xh,
        IMMEDIATE_CHILDREN: S1,
        SIBLINGS: Bh,
        PARENT: R1,
        DISPLAY: ii,
        WILL_CHANGE: ar,
        AUTO: At,
        COMMA_DELIMITER: $r,
        COLON_DELIMITER: C1,
        BAR_DELIMITER: ka,
        RENDER_TRANSFORM: Qh,
        RENDER_GENERAL: Va,
        RENDER_STYLE: Wa,
        RENDER_PLUGIN: Zh,
      } = Re),
        ({
          TRANSFORM_MOVE: sr,
          TRANSFORM_SCALE: ur,
          TRANSFORM_ROTATE: cr,
          TRANSFORM_SKEW: Qr,
          STYLE_OPACITY: Jh,
          STYLE_FILTER: Zr,
          STYLE_FONT_VARIATION: Jr,
          STYLE_SIZE: lr,
          STYLE_BACKGROUND_COLOR: fr,
          STYLE_BORDER: dr,
          STYLE_TEXT_COLOR: pr,
          GENERAL_DISPLAY: si,
          OBJECT_VALUE: L1,
        } = He),
        (em = (e) => e.trim()),
        (Ha = Object.freeze({ [fr]: $h, [dr]: x1, [pr]: A1 })),
        (tm = Object.freeze({
          [xt]: m1,
          [$h]: h1,
          [ni]: ni,
          [Kr]: Kr,
          [ct]: ct,
          [lt]: lt,
          [Yr]: Yr,
        })),
        (ti = new Map());
      P1 = 1;
      q1 = 1;
      G1 = (e, t) => e === t;
      (zh = /px/),
        (V1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = $1[n.type]), r),
            e || {}
          )),
        (W1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = Q1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (X1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (B1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (j1 = (e, t, r) => {
          if (Dt(e)) return La(e)(r, t);
          switch (e) {
            case Zr: {
              let n = (0, ri.default)(r.filters, ({ type: o }) => o === t);
              return n ? n.value : 0;
            }
            case Jr: {
              let n = (0, ri.default)(
                r.fontVariations,
                ({ type: o }) => o === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ba = {
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ur]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [cr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Qr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        ($1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (Q1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (Z1 = (e, t) => {
          let r = (0, ri.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (J1 = Object.keys(Ba));
      (iD = "\\(([^)]+)\\)"), (oD = /^rgb/), (aD = RegExp(`rgba?${iD}`));
      im =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case sr:
            case ur:
            case cr:
            case Qr:
              e(n, xt, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case Jr:
              e(n, Yr, r);
              break;
            case Jh:
              e(n, ni, r);
              break;
            case lr:
              e(n, ct, r), e(n, lt, r);
              break;
            case fr:
            case dr:
            case pr:
              e(n, Ha[t], r);
              break;
            case si:
              e(n, ii, r);
              break;
          }
        };
    });
  var Ut = c((Pe) => {
    "use strict";
    var vr = pn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var bD = vr((Qn(), nt(nh)));
    Pe.IX2BrowserSupport = bD;
    var TD = vr((wa(), nt(jr)));
    Pe.IX2Easings = TD;
    var ID = vr((xa(), nt(lh)));
    Pe.IX2EasingUtils = ID;
    var OD = vr((vh(), nt(ph)));
    Pe.IX2ElementsReducer = OD;
    var wD = vr((Da(), nt(bh)));
    Pe.IX2VanillaPlugins = wD;
    var xD = vr((sm(), nt(am)));
    Pe.IX2VanillaUtils = xD;
  });
  var ci,
    mt,
    AD,
    SD,
    RD,
    CD,
    LD,
    ND,
    ui,
    um,
    PD,
    MD,
    ja,
    qD,
    DD,
    FD,
    GD,
    cm,
    lm = me(() => {
      "use strict";
      Ue();
      (ci = fe(Ut())),
        (mt = fe($t())),
        ({
          IX2_RAW_DATA_IMPORTED: AD,
          IX2_SESSION_STOPPED: SD,
          IX2_INSTANCE_ADDED: RD,
          IX2_INSTANCE_STARTED: CD,
          IX2_INSTANCE_REMOVED: LD,
          IX2_ANIMATION_FRAME_CHANGED: ND,
        } = Ie),
        ({
          optimizeFloat: ui,
          applyEasing: um,
          createBezierEasing: PD,
        } = ci.IX2EasingUtils),
        ({ RENDER_GENERAL: MD } = Re),
        ({
          getItemConfigByKey: ja,
          getRenderType: qD,
          getStyleProp: DD,
        } = ci.IX2VanillaUtils),
        (FD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: o,
              destinationKeys: i,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: h,
              skipToValue: g,
            } = e,
            { parameters: m } = t.payload,
            E = Math.max(1 - a, 0.01),
            T = m[n];
          T == null && ((E = 1), (T = s));
          let I = Math.max(T, 0) || 0,
            D = ui(I - r),
            S = h ? g : ui(r + D * E),
            L = S * 100;
          if (S === r && e.current) return e;
          let C, P, q, M;
          for (let K = 0, { length: $ } = o; K < $; K++) {
            let { keyframe: J, actionItems: ee } = o[K];
            if ((K === 0 && (C = ee[0]), L >= J)) {
              C = ee[0];
              let U = o[K + 1],
                x = U && L !== J;
              (P = x ? U.actionItems[0] : null),
                x && ((q = J / 100), (M = (U.keyframe - J) / 100));
            }
          }
          let X = {};
          if (C && !P)
            for (let K = 0, { length: $ } = i; K < $; K++) {
              let J = i[K];
              X[J] = ja(u, J, C.config);
            }
          else if (C && P && q !== void 0 && M !== void 0) {
            let K = (S - q) / M,
              $ = C.config.easing,
              J = um($, K, d);
            for (let ee = 0, { length: U } = i; ee < U; ee++) {
              let x = i[ee],
                F = ja(u, x, C.config),
                te = (ja(u, x, P.config) - F) * J + F;
              X[x] = te;
            }
          }
          return (0, mt.merge)(e, { position: S, current: X });
        }),
        (GD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: o,
              immediate: i,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: d,
              destinationKeys: h,
              pluginDuration: g,
              instanceDelay: m,
              customEasingFn: E,
              skipMotion: T,
            } = e,
            I = u.config.easing,
            { duration: D, delay: S } = u.config;
          g != null && (D = g),
            (S = m ?? S),
            a === MD ? (D = 0) : (i || T) && (D = S = 0);
          let { now: L } = t.payload;
          if (r && n) {
            let C = L - (o + S);
            if (s) {
              let K = L - o,
                $ = D + S,
                J = ui(Math.min(Math.max(0, K / $), 1));
              e = (0, mt.set)(e, "verboseTimeElapsed", $ * J);
            }
            if (C < 0) return e;
            let P = ui(Math.min(Math.max(0, C / D), 1)),
              q = um(I, P, E),
              M = {},
              X = null;
            return (
              h.length &&
                (X = h.reduce((K, $) => {
                  let J = d[$],
                    ee = parseFloat(n[$]) || 0,
                    x = (parseFloat(J) - ee) * q + ee;
                  return (K[$] = x), K;
                }, {})),
              (M.current = X),
              (M.position = P),
              P === 1 && ((M.active = !1), (M.complete = !0)),
              (0, mt.merge)(e, M)
            );
          }
          return e;
        }),
        (cm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case AD:
              return t.payload.ixInstances || Object.freeze({});
            case SD:
              return Object.freeze({});
            case RD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: o,
                  eventId: i,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: h,
                  origin: g,
                  destination: m,
                  immediate: E,
                  verbose: T,
                  continuous: I,
                  parameterId: D,
                  actionGroups: S,
                  smoothing: L,
                  restingValue: C,
                  pluginInstance: P,
                  pluginDuration: q,
                  instanceDelay: M,
                  skipMotion: X,
                  skipToValue: K,
                } = t.payload,
                { actionTypeId: $ } = o,
                J = qD($),
                ee = DD(J, $),
                U = Object.keys(m).filter(
                  (F) => m[F] != null && typeof m[F] != "string"
                ),
                { easing: x } = o.config;
              return (0, mt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: g,
                destination: m,
                destinationKeys: U,
                immediate: E,
                verbose: T,
                current: null,
                actionItem: o,
                actionTypeId: $,
                eventId: i,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: J,
                isCarrier: h,
                styleProp: ee,
                continuous: I,
                parameterId: D,
                actionGroups: S,
                smoothing: L,
                restingValue: C,
                pluginInstance: P,
                pluginDuration: q,
                instanceDelay: M,
                skipMotion: X,
                skipToValue: K,
                customEasingFn:
                  Array.isArray(x) && x.length === 4 ? PD(x) : void 0,
              });
            }
            case CD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, mt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case LD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                o = Object.keys(e),
                { length: i } = o;
              for (let a = 0; a < i; a++) {
                let s = o[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case ND: {
              let r = e,
                n = Object.keys(e),
                { length: o } = n;
              for (let i = 0; i < o; i++) {
                let a = n[i],
                  s = e[a],
                  u = s.continuous ? FD : GD;
                r = (0, mt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var UD,
    kD,
    VD,
    fm,
    dm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: UD,
        IX2_SESSION_STOPPED: kD,
        IX2_PARAMETER_CHANGED: VD,
      } = Ie),
        (fm = (e = {}, t) => {
          switch (t.type) {
            case UD:
              return t.payload.ixParameters || {};
            case kD:
              return {};
            case VD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var gm = {};
  Fe(gm, { default: () => HD });
  var pm,
    vm,
    WD,
    HD,
    hm = me(() => {
      "use strict";
      pm = fe(Ho());
      Sf();
      Yf();
      Zf();
      vm = fe(Ut());
      lm();
      dm();
      ({ ixElements: WD } = vm.IX2ElementsReducer),
        (HD = (0, pm.combineReducers)({
          ixData: Af,
          ixRequest: Kf,
          ixSession: Qf,
          ixElements: WD,
          ixInstances: cm,
          ixParameters: fm,
        }));
    });
  var Em = c((kB, mm) => {
    var XD = It(),
      BD = we(),
      jD = vt(),
      zD = "[object String]";
    function KD(e) {
      return typeof e == "string" || (!BD(e) && jD(e) && XD(e) == zD);
    }
    mm.exports = KD;
  });
  var _m = c((VB, ym) => {
    var YD = Ea(),
      $D = YD("length");
    ym.exports = $D;
  });
  var Tm = c((WB, bm) => {
    var QD = "\\ud800-\\udfff",
      ZD = "\\u0300-\\u036f",
      JD = "\\ufe20-\\ufe2f",
      eF = "\\u20d0-\\u20ff",
      tF = ZD + JD + eF,
      rF = "\\ufe0e\\ufe0f",
      nF = "\\u200d",
      iF = RegExp("[" + nF + QD + tF + rF + "]");
    function oF(e) {
      return iF.test(e);
    }
    bm.exports = oF;
  });
  var Lm = c((HB, Cm) => {
    var Om = "\\ud800-\\udfff",
      aF = "\\u0300-\\u036f",
      sF = "\\ufe20-\\ufe2f",
      uF = "\\u20d0-\\u20ff",
      cF = aF + sF + uF,
      lF = "\\ufe0e\\ufe0f",
      fF = "[" + Om + "]",
      za = "[" + cF + "]",
      Ka = "\\ud83c[\\udffb-\\udfff]",
      dF = "(?:" + za + "|" + Ka + ")",
      wm = "[^" + Om + "]",
      xm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Am = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      pF = "\\u200d",
      Sm = dF + "?",
      Rm = "[" + lF + "]?",
      vF = "(?:" + pF + "(?:" + [wm, xm, Am].join("|") + ")" + Rm + Sm + ")*",
      gF = Rm + Sm + vF,
      hF = "(?:" + [wm + za + "?", za, xm, Am, fF].join("|") + ")",
      Im = RegExp(Ka + "(?=" + Ka + ")|" + hF + gF, "g");
    function mF(e) {
      for (var t = (Im.lastIndex = 0); Im.test(e); ) ++t;
      return t;
    }
    Cm.exports = mF;
  });
  var Pm = c((XB, Nm) => {
    var EF = _m(),
      yF = Tm(),
      _F = Lm();
    function bF(e) {
      return yF(e) ? _F(e) : EF(e);
    }
    Nm.exports = bF;
  });
  var qm = c((BB, Mm) => {
    var TF = Vn(),
      IF = Wn(),
      OF = Mt(),
      wF = Em(),
      xF = Pm(),
      AF = "[object Map]",
      SF = "[object Set]";
    function RF(e) {
      if (e == null) return 0;
      if (OF(e)) return wF(e) ? xF(e) : e.length;
      var t = IF(e);
      return t == AF || t == SF ? e.size : TF(e).length;
    }
    Mm.exports = RF;
  });
  var Fm = c((jB, Dm) => {
    var CF = "Expected a function";
    function LF(e) {
      if (typeof e != "function") throw new TypeError(CF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Dm.exports = LF;
  });
  var Ya = c((zB, Gm) => {
    var NF = Ot(),
      PF = (function () {
        try {
          var e = NF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Gm.exports = PF;
  });
  var $a = c((KB, km) => {
    var Um = Ya();
    function MF(e, t, r) {
      t == "__proto__" && Um
        ? Um(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    km.exports = MF;
  });
  var Wm = c((YB, Vm) => {
    var qF = $a(),
      DF = Ln(),
      FF = Object.prototype,
      GF = FF.hasOwnProperty;
    function UF(e, t, r) {
      var n = e[t];
      (!(GF.call(e, t) && DF(n, r)) || (r === void 0 && !(t in e))) &&
        qF(e, t, r);
    }
    Vm.exports = UF;
  });
  var Bm = c(($B, Xm) => {
    var kF = Wm(),
      VF = Hr(),
      WF = Fn(),
      Hm = ut(),
      HF = ir();
    function XF(e, t, r, n) {
      if (!Hm(e)) return e;
      t = VF(t, e);
      for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
        var u = HF(t[o]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (o != a) {
          var h = s[u];
          (d = n ? n(h, u, s) : void 0),
            d === void 0 && (d = Hm(h) ? h : WF(t[o + 1]) ? [] : {});
        }
        kF(s, u, d), (s = s[u]);
      }
      return e;
    }
    Xm.exports = XF;
  });
  var zm = c((QB, jm) => {
    var BF = Bn(),
      jF = Bm(),
      zF = Hr();
    function KF(e, t, r) {
      for (var n = -1, o = t.length, i = {}; ++n < o; ) {
        var a = t[n],
          s = BF(e, a);
        r(s, a) && jF(i, zF(a, e), s);
      }
      return i;
    }
    jm.exports = KF;
  });
  var Ym = c((ZB, Km) => {
    var YF = qn(),
      $F = Co(),
      QF = na(),
      ZF = ra(),
      JF = Object.getOwnPropertySymbols,
      e2 = JF
        ? function (e) {
            for (var t = []; e; ) YF(t, QF(e)), (e = $F(e));
            return t;
          }
        : ZF;
    Km.exports = e2;
  });
  var Qm = c((JB, $m) => {
    function t2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    $m.exports = t2;
  });
  var Jm = c((ej, Zm) => {
    var r2 = ut(),
      n2 = kn(),
      i2 = Qm(),
      o2 = Object.prototype,
      a2 = o2.hasOwnProperty;
    function s2(e) {
      if (!r2(e)) return i2(e);
      var t = n2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !a2.call(e, n))) || r.push(n);
      return r;
    }
    Zm.exports = s2;
  });
  var tE = c((tj, eE) => {
    var u2 = oa(),
      c2 = Jm(),
      l2 = Mt();
    function f2(e) {
      return l2(e) ? u2(e, !0) : c2(e);
    }
    eE.exports = f2;
  });
  var nE = c((rj, rE) => {
    var d2 = ta(),
      p2 = Ym(),
      v2 = tE();
    function g2(e) {
      return d2(e, v2, p2);
    }
    rE.exports = g2;
  });
  var oE = c((nj, iE) => {
    var h2 = ma(),
      m2 = wt(),
      E2 = zm(),
      y2 = nE();
    function _2(e, t) {
      if (e == null) return {};
      var r = h2(y2(e), function (n) {
        return [n];
      });
      return (
        (t = m2(t)),
        E2(e, r, function (n, o) {
          return t(n, o[0]);
        })
      );
    }
    iE.exports = _2;
  });
  var sE = c((ij, aE) => {
    var b2 = wt(),
      T2 = Fm(),
      I2 = oE();
    function O2(e, t) {
      return I2(e, T2(b2(t)));
    }
    aE.exports = O2;
  });
  var cE = c((oj, uE) => {
    var w2 = Vn(),
      x2 = Wn(),
      A2 = Fr(),
      S2 = we(),
      R2 = Mt(),
      C2 = Dn(),
      L2 = kn(),
      N2 = Un(),
      P2 = "[object Map]",
      M2 = "[object Set]",
      q2 = Object.prototype,
      D2 = q2.hasOwnProperty;
    function F2(e) {
      if (e == null) return !0;
      if (
        R2(e) &&
        (S2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          C2(e) ||
          N2(e) ||
          A2(e))
      )
        return !e.length;
      var t = x2(e);
      if (t == P2 || t == M2) return !e.size;
      if (L2(e)) return !w2(e).length;
      for (var r in e) if (D2.call(e, r)) return !1;
      return !0;
    }
    uE.exports = F2;
  });
  var fE = c((aj, lE) => {
    var G2 = $a(),
      U2 = Fa(),
      k2 = wt();
    function V2(e, t) {
      var r = {};
      return (
        (t = k2(t, 3)),
        U2(e, function (n, o, i) {
          G2(r, o, t(n, o, i));
        }),
        r
      );
    }
    lE.exports = V2;
  });
  var pE = c((sj, dE) => {
    function W2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    dE.exports = W2;
  });
  var gE = c((uj, vE) => {
    var H2 = zn();
    function X2(e) {
      return typeof e == "function" ? e : H2;
    }
    vE.exports = X2;
  });
  var mE = c((cj, hE) => {
    var B2 = pE(),
      j2 = Ga(),
      z2 = gE(),
      K2 = we();
    function Y2(e, t) {
      var r = K2(e) ? B2 : j2;
      return r(e, z2(t));
    }
    hE.exports = Y2;
  });
  var yE = c((lj, EE) => {
    var $2 = Qe(),
      Q2 = function () {
        return $2.Date.now();
      };
    EE.exports = Q2;
  });
  var TE = c((fj, bE) => {
    var Z2 = ut(),
      Qa = yE(),
      _E = Kn(),
      J2 = "Expected a function",
      eG = Math.max,
      tG = Math.min;
    function rG(e, t, r) {
      var n,
        o,
        i,
        a,
        s,
        u,
        d = 0,
        h = !1,
        g = !1,
        m = !0;
      if (typeof e != "function") throw new TypeError(J2);
      (t = _E(t) || 0),
        Z2(r) &&
          ((h = !!r.leading),
          (g = "maxWait" in r),
          (i = g ? eG(_E(r.maxWait) || 0, t) : i),
          (m = "trailing" in r ? !!r.trailing : m));
      function E(M) {
        var X = n,
          K = o;
        return (n = o = void 0), (d = M), (a = e.apply(K, X)), a;
      }
      function T(M) {
        return (d = M), (s = setTimeout(S, t)), h ? E(M) : a;
      }
      function I(M) {
        var X = M - u,
          K = M - d,
          $ = t - X;
        return g ? tG($, i - K) : $;
      }
      function D(M) {
        var X = M - u,
          K = M - d;
        return u === void 0 || X >= t || X < 0 || (g && K >= i);
      }
      function S() {
        var M = Qa();
        if (D(M)) return L(M);
        s = setTimeout(S, I(M));
      }
      function L(M) {
        return (s = void 0), m && n ? E(M) : ((n = o = void 0), a);
      }
      function C() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = o = s = void 0);
      }
      function P() {
        return s === void 0 ? a : L(Qa());
      }
      function q() {
        var M = Qa(),
          X = D(M);
        if (((n = arguments), (o = this), (u = M), X)) {
          if (s === void 0) return T(u);
          if (g) return clearTimeout(s), (s = setTimeout(S, t)), E(u);
        }
        return s === void 0 && (s = setTimeout(S, t)), a;
      }
      return (q.cancel = C), (q.flush = P), q;
    }
    bE.exports = rG;
  });
  var OE = c((dj, IE) => {
    var nG = TE(),
      iG = ut(),
      oG = "Expected a function";
    function aG(e, t, r) {
      var n = !0,
        o = !0;
      if (typeof e != "function") throw new TypeError(oG);
      return (
        iG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (o = "trailing" in r ? !!r.trailing : o)),
        nG(e, t, { leading: n, maxWait: t, trailing: o })
      );
    }
    IE.exports = aG;
  });
  var xE = {};
  Fe(xE, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => fi,
    clearRequested: () => LG,
    elementStateChanged: () => os,
    eventListenerAdded: () => li,
    eventStateChanged: () => rs,
    instanceAdded: () => ns,
    instanceRemoved: () => is,
    instanceStarted: () => di,
    mediaQueriesDefined: () => ss,
    parameterChanged: () => gr,
    playbackRequested: () => RG,
    previewRequested: () => SG,
    rawDataImported: () => Za,
    sessionInitialized: () => Ja,
    sessionStarted: () => es,
    sessionStopped: () => ts,
    stopRequested: () => CG,
    testFrameRendered: () => NG,
    viewportWidthChanged: () => as,
  });
  var wE,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    gG,
    hG,
    mG,
    EG,
    yG,
    _G,
    bG,
    TG,
    IG,
    OG,
    wG,
    xG,
    AG,
    Za,
    Ja,
    es,
    ts,
    SG,
    RG,
    CG,
    LG,
    li,
    NG,
    rs,
    fi,
    gr,
    ns,
    di,
    is,
    os,
    hr,
    as,
    ss,
    pi = me(() => {
      "use strict";
      Ue();
      (wE = fe(Ut())),
        ({
          IX2_RAW_DATA_IMPORTED: sG,
          IX2_SESSION_INITIALIZED: uG,
          IX2_SESSION_STARTED: cG,
          IX2_SESSION_STOPPED: lG,
          IX2_PREVIEW_REQUESTED: fG,
          IX2_PLAYBACK_REQUESTED: dG,
          IX2_STOP_REQUESTED: pG,
          IX2_CLEAR_REQUESTED: vG,
          IX2_EVENT_LISTENER_ADDED: gG,
          IX2_TEST_FRAME_RENDERED: hG,
          IX2_EVENT_STATE_CHANGED: mG,
          IX2_ANIMATION_FRAME_CHANGED: EG,
          IX2_PARAMETER_CHANGED: yG,
          IX2_INSTANCE_ADDED: _G,
          IX2_INSTANCE_STARTED: bG,
          IX2_INSTANCE_REMOVED: TG,
          IX2_ELEMENT_STATE_CHANGED: IG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: OG,
          IX2_VIEWPORT_WIDTH_CHANGED: wG,
          IX2_MEDIA_QUERIES_DEFINED: xG,
        } = Ie),
        ({ reifyState: AG } = wE.IX2VanillaUtils),
        (Za = (e) => ({ type: sG, payload: { ...AG(e) } })),
        (Ja = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: uG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (es = () => ({ type: cG })),
        (ts = () => ({ type: lG })),
        (SG = ({ rawData: e, defer: t }) => ({
          type: fG,
          payload: { defer: t, rawData: e },
        })),
        (RG = ({
          actionTypeId: e = He.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: o,
          immediate: i,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: dG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: o,
            immediate: i,
            verbose: s,
            rawData: u,
          },
        })),
        (CG = (e) => ({ type: pG, payload: { actionListId: e } })),
        (LG = () => ({ type: vG })),
        (li = (e, t) => ({
          type: gG,
          payload: { target: e, listenerParams: t },
        })),
        (NG = (e = 1) => ({ type: hG, payload: { step: e } })),
        (rs = (e, t) => ({ type: mG, payload: { stateKey: e, newState: t } })),
        (fi = (e, t) => ({ type: EG, payload: { now: e, parameters: t } })),
        (gr = (e, t) => ({ type: yG, payload: { key: e, value: t } })),
        (ns = (e) => ({ type: _G, payload: { ...e } })),
        (di = (e, t) => ({ type: bG, payload: { instanceId: e, time: t } })),
        (is = (e) => ({ type: TG, payload: { instanceId: e } })),
        (os = (e, t, r, n) => ({
          type: IG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (hr = ({ actionListId: e, isPlaying: t }) => ({
          type: OG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (as = ({ width: e, mediaQueries: t }) => ({
          type: wG,
          payload: { width: e, mediaQueries: t },
        })),
        (ss = () => ({ type: xG }));
    });
  var Me = {};
  Fe(Me, {
    elementContains: () => ls,
    getChildElements: () => WG,
    getClosestElement: () => en,
    getProperty: () => FG,
    getQuerySelector: () => cs,
    getRefType: () => fs,
    getSiblingElements: () => HG,
    getStyle: () => DG,
    getValidDocument: () => UG,
    isSiblingNode: () => VG,
    matchSelector: () => GG,
    queryDocument: () => kG,
    setStyle: () => qG,
  });
  function qG(e, t, r) {
    e.style[t] = r;
  }
  function DG(e, t) {
    return e.style[t];
  }
  function FG(e, t) {
    return e[t];
  }
  function GG(e) {
    return (t) => t[us](e);
  }
  function cs({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(AE) !== -1) {
        let n = e.split(AE),
          o = n[0];
        if (((r = n[1]), o !== document.documentElement.getAttribute(RE)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function UG(e) {
    return e == null || e === document.documentElement.getAttribute(RE)
      ? document
      : null;
  }
  function kG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function ls(e, t) {
    return e.contains(t);
  }
  function VG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function WG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: o } = e[r],
        { length: i } = o;
      if (i) for (let a = 0; a < i; a++) t.push(o[a]);
    }
    return t;
  }
  function HG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: o } = e; n < o; n++) {
      let { parentNode: i } = e[n];
      if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
        continue;
      r.push(i);
      let a = i.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function fs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? PG
        : MG
      : null;
  }
  var SE,
    us,
    AE,
    PG,
    MG,
    RE,
    en,
    CE = me(() => {
      "use strict";
      SE = fe(Ut());
      Ue();
      ({ ELEMENT_MATCHES: us } = SE.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: AE,
          HTML_ELEMENT: PG,
          PLAIN_OBJECT: MG,
          WF_PAGE: RE,
        } = Re);
      en = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[us] && r[us](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ds = c((gj, NE) => {
    var XG = ut(),
      LE = Object.create,
      BG = (function () {
        function e() {}
        return function (t) {
          if (!XG(t)) return {};
          if (LE) return LE(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    NE.exports = BG;
  });
  var vi = c((hj, PE) => {
    function jG() {}
    PE.exports = jG;
  });
  var hi = c((mj, ME) => {
    var zG = ds(),
      KG = vi();
    function gi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    gi.prototype = zG(KG.prototype);
    gi.prototype.constructor = gi;
    ME.exports = gi;
  });
  var GE = c((Ej, FE) => {
    var qE = zt(),
      YG = Fr(),
      $G = we(),
      DE = qE ? qE.isConcatSpreadable : void 0;
    function QG(e) {
      return $G(e) || YG(e) || !!(DE && e && e[DE]);
    }
    FE.exports = QG;
  });
  var VE = c((yj, kE) => {
    var ZG = qn(),
      JG = GE();
    function UE(e, t, r, n, o) {
      var i = -1,
        a = e.length;
      for (r || (r = JG), o || (o = []); ++i < a; ) {
        var s = e[i];
        t > 0 && r(s)
          ? t > 1
            ? UE(s, t - 1, r, n, o)
            : ZG(o, s)
          : n || (o[o.length] = s);
      }
      return o;
    }
    kE.exports = UE;
  });
  var HE = c((_j, WE) => {
    var eU = VE();
    function tU(e) {
      var t = e == null ? 0 : e.length;
      return t ? eU(e, 1) : [];
    }
    WE.exports = tU;
  });
  var BE = c((bj, XE) => {
    function rU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    XE.exports = rU;
  });
  var KE = c((Tj, zE) => {
    var nU = BE(),
      jE = Math.max;
    function iU(e, t, r) {
      return (
        (t = jE(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, o = -1, i = jE(n.length - t, 0), a = Array(i);
            ++o < i;

          )
            a[o] = n[t + o];
          o = -1;
          for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
          return (s[t] = r(a)), nU(e, this, s);
        }
      );
    }
    zE.exports = iU;
  });
  var $E = c((Ij, YE) => {
    function oU(e) {
      return function () {
        return e;
      };
    }
    YE.exports = oU;
  });
  var JE = c((Oj, ZE) => {
    var aU = $E(),
      QE = Ya(),
      sU = zn(),
      uU = QE
        ? function (e, t) {
            return QE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: aU(t),
              writable: !0,
            });
          }
        : sU;
    ZE.exports = uU;
  });
  var ty = c((wj, ey) => {
    var cU = 800,
      lU = 16,
      fU = Date.now;
    function dU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = fU(),
          o = lU - (n - r);
        if (((r = n), o > 0)) {
          if (++t >= cU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ey.exports = dU;
  });
  var ny = c((xj, ry) => {
    var pU = JE(),
      vU = ty(),
      gU = vU(pU);
    ry.exports = gU;
  });
  var oy = c((Aj, iy) => {
    var hU = HE(),
      mU = KE(),
      EU = ny();
    function yU(e) {
      return EU(mU(e, void 0, hU), e + "");
    }
    iy.exports = yU;
  });
  var uy = c((Sj, sy) => {
    var ay = aa(),
      _U = ay && new ay();
    sy.exports = _U;
  });
  var ly = c((Rj, cy) => {
    function bU() {}
    cy.exports = bU;
  });
  var ps = c((Cj, dy) => {
    var fy = uy(),
      TU = ly(),
      IU = fy
        ? function (e) {
            return fy.get(e);
          }
        : TU;
    dy.exports = IU;
  });
  var vy = c((Lj, py) => {
    var OU = {};
    py.exports = OU;
  });
  var vs = c((Nj, hy) => {
    var gy = vy(),
      wU = Object.prototype,
      xU = wU.hasOwnProperty;
    function AU(e) {
      for (
        var t = e.name + "", r = gy[t], n = xU.call(gy, t) ? r.length : 0;
        n--;

      ) {
        var o = r[n],
          i = o.func;
        if (i == null || i == e) return o.name;
      }
      return t;
    }
    hy.exports = AU;
  });
  var Ei = c((Pj, my) => {
    var SU = ds(),
      RU = vi(),
      CU = 4294967295;
    function mi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = CU),
        (this.__views__ = []);
    }
    mi.prototype = SU(RU.prototype);
    mi.prototype.constructor = mi;
    my.exports = mi;
  });
  var yy = c((Mj, Ey) => {
    function LU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Ey.exports = LU;
  });
  var by = c((qj, _y) => {
    var NU = Ei(),
      PU = hi(),
      MU = yy();
    function qU(e) {
      if (e instanceof NU) return e.clone();
      var t = new PU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = MU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    _y.exports = qU;
  });
  var Oy = c((Dj, Iy) => {
    var DU = Ei(),
      Ty = hi(),
      FU = vi(),
      GU = we(),
      UU = vt(),
      kU = by(),
      VU = Object.prototype,
      WU = VU.hasOwnProperty;
    function yi(e) {
      if (UU(e) && !GU(e) && !(e instanceof DU)) {
        if (e instanceof Ty) return e;
        if (WU.call(e, "__wrapped__")) return kU(e);
      }
      return new Ty(e);
    }
    yi.prototype = FU.prototype;
    yi.prototype.constructor = yi;
    Iy.exports = yi;
  });
  var xy = c((Fj, wy) => {
    var HU = Ei(),
      XU = ps(),
      BU = vs(),
      jU = Oy();
    function zU(e) {
      var t = BU(e),
        r = jU[t];
      if (typeof r != "function" || !(t in HU.prototype)) return !1;
      if (e === r) return !0;
      var n = XU(r);
      return !!n && e === n[0];
    }
    wy.exports = zU;
  });
  var Cy = c((Gj, Ry) => {
    var Ay = hi(),
      KU = oy(),
      YU = ps(),
      gs = vs(),
      $U = we(),
      Sy = xy(),
      QU = "Expected a function",
      ZU = 8,
      JU = 32,
      ek = 128,
      tk = 256;
    function rk(e) {
      return KU(function (t) {
        var r = t.length,
          n = r,
          o = Ay.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var i = t[n];
          if (typeof i != "function") throw new TypeError(QU);
          if (o && !a && gs(i) == "wrapper") var a = new Ay([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          i = t[n];
          var s = gs(i),
            u = s == "wrapper" ? YU(i) : void 0;
          u &&
          Sy(u[0]) &&
          u[1] == (ek | ZU | JU | tk) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[gs(u[0])].apply(a, u[3]))
            : (a = i.length == 1 && Sy(i) ? a[s]() : a.thru(i));
        }
        return function () {
          var d = arguments,
            h = d[0];
          if (a && d.length == 1 && $U(h)) return a.plant(h).value();
          for (var g = 0, m = r ? t[g].apply(this, d) : h; ++g < r; )
            m = t[g].call(this, m);
          return m;
        };
      });
    }
    Ry.exports = rk;
  });
  var Ny = c((Uj, Ly) => {
    var nk = Cy(),
      ik = nk();
    Ly.exports = ik;
  });
  var My = c((kj, Py) => {
    function ok(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Py.exports = ok;
  });
  var Dy = c((Vj, qy) => {
    var ak = My(),
      hs = Kn();
    function sk(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = hs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = hs(t)), (t = t === t ? t : 0)),
        ak(hs(e), t, r)
      );
    }
    qy.exports = sk;
  });
  var By,
    jy,
    zy,
    Ky,
    uk,
    ck,
    lk,
    fk,
    dk,
    pk,
    vk,
    gk,
    hk,
    mk,
    Ek,
    yk,
    _k,
    bk,
    Tk,
    Yy,
    $y,
    Ik,
    Ok,
    wk,
    Qy,
    xk,
    Ak,
    Zy,
    Sk,
    ms,
    Jy,
    Fy,
    Gy,
    e_,
    rn,
    Rk,
    ft,
    t_,
    Ck,
    Ve,
    et,
    nn,
    r_,
    Es,
    Uy,
    ys,
    Lk,
    tn,
    Nk,
    Pk,
    Mk,
    n_,
    ky,
    qk,
    Vy,
    Dk,
    Fk,
    Gk,
    Wy,
    _i,
    bi,
    Hy,
    Xy,
    i_,
    o_ = me(() => {
      "use strict";
      (By = fe(Ny())), (jy = fe(jn())), (zy = fe(Dy()));
      Ue();
      _s();
      pi();
      (Ky = fe(Ut())),
        ({
          MOUSE_CLICK: uk,
          MOUSE_SECOND_CLICK: ck,
          MOUSE_DOWN: lk,
          MOUSE_UP: fk,
          MOUSE_OVER: dk,
          MOUSE_OUT: pk,
          DROPDOWN_CLOSE: vk,
          DROPDOWN_OPEN: gk,
          SLIDER_ACTIVE: hk,
          SLIDER_INACTIVE: mk,
          TAB_ACTIVE: Ek,
          TAB_INACTIVE: yk,
          NAVBAR_CLOSE: _k,
          NAVBAR_OPEN: bk,
          MOUSE_MOVE: Tk,
          PAGE_SCROLL_DOWN: Yy,
          SCROLL_INTO_VIEW: $y,
          SCROLL_OUT_OF_VIEW: Ik,
          PAGE_SCROLL_UP: Ok,
          SCROLLING_IN_VIEW: wk,
          PAGE_FINISH: Qy,
          ECOMMERCE_CART_CLOSE: xk,
          ECOMMERCE_CART_OPEN: Ak,
          PAGE_START: Zy,
          PAGE_SCROLL: Sk,
        } = Ze),
        (ms = "COMPONENT_ACTIVE"),
        (Jy = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Fy } = Re),
        ({ getNamespacedParameterId: Gy } = Ky.IX2VanillaUtils),
        (e_ = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (rn = e_(({ element: e, nativeEvent: t }) => e === t.target)),
        (Rk = e_(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, By.default)([rn, Rk])),
        (t_ = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              o = n[t];
            if (o && !Lk[o.eventTypeId]) return o;
          }
          return null;
        }),
        (Ck = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!t_(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
          let { action: i, id: a } = t,
            { actionListId: s, autoStopEventId: u } = i.config,
            d = t_(e, u);
          return (
            d &&
              mr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Fy + n.split(Fy)[1],
                actionListId: (0, jy.default)(d, "action.config.actionListId"),
              }),
            mr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            on({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            o
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (nn = { handler: et(ft, Ve) }),
        (r_ = { ...nn, types: [ms, Jy].join(" ") }),
        (Es = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Uy = "mouseover mouseout"),
        (ys = { types: Es }),
        (Lk = { PAGE_START: Zy, PAGE_FINISH: Qy }),
        (tn = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, zy.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (Nk = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (Pk = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: o } = t,
            i = e.contains(n);
          if (r === "mouseover" && i) return !0;
          let a = e.contains(o);
          return !!(r === "mouseout" && i && a);
        }),
        (Mk = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: o } = tn(),
            i = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
          return Nk(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: o - u,
          });
        }),
        (n_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            o = [ms, Jy].indexOf(n) !== -1 ? n === ms : r.isActive,
            i = { ...r, isActive: o };
          return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
        }),
        (ky = (e) => (t, r) => {
          let n = { elementHovered: Pk(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (qk = (e) => (t, r) => {
          let n = { ...r, elementVisible: Mk(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Vy =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = tn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
              h = d === "PX",
              g = o - i,
              m = Number((n / g).toFixed(2));
            if (r && r.percentTop === m) return r;
            let E = (h ? u : (i * (u || 0)) / 100) / g,
              T,
              I,
              D = 0;
            r &&
              ((T = m > r.percentTop),
              (I = r.scrollingDown !== T),
              (D = I ? m : r.anchorTop));
            let S = s === Yy ? m >= D + E : m <= D - E,
              L = {
                ...r,
                percentTop: m,
                inBounds: S,
                anchorTop: D,
                scrollingDown: T,
              };
            return (r && S && (I || L.inBounds !== r.inBounds) && e(t, L)) || L;
          }),
        (Dk = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (Fk = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (Gk = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Wy =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...r_,
          handler: et(
            e ? ft : rn,
            n_((t, r) => (r.isActive ? nn.handler(t, r) : r))
          ),
        })),
        (bi = (e = !0) => ({
          ...r_,
          handler: et(
            e ? ft : rn,
            n_((t, r) => (r.isActive ? r : nn.handler(t, r)))
          ),
        })),
        (Hy = {
          ...ys,
          handler: qk((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: o } = e,
              { ixData: i } = o.getState(),
              { events: a } = i;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === $y) === r
              ? (Ve(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Xy = 0.05),
        (i_ = {
          [hk]: _i(),
          [mk]: bi(),
          [gk]: _i(),
          [vk]: bi(),
          [bk]: _i(!1),
          [_k]: bi(!1),
          [Ek]: _i(),
          [yk]: bi(),
          [Ak]: { types: "ecommerce-cart-open", handler: et(ft, Ve) },
          [xk]: { types: "ecommerce-cart-close", handler: et(ft, Ve) },
          [uk]: {
            types: "click",
            handler: et(
              ft,
              Wy((e, { clickCount: t }) => {
                Ck(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [ck]: {
            types: "click",
            handler: et(
              ft,
              Wy((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [lk]: { ...nn, types: "mousedown" },
          [fk]: { ...nn, types: "mouseup" },
          [dk]: {
            types: Uy,
            handler: et(
              ft,
              ky((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [pk]: {
            types: Uy,
            handler: et(
              ft,
              ky((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [Tk]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: o,
              },
              i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: h = 0,
                } = r,
                {
                  clientX: g = i.clientX,
                  clientY: m = i.clientY,
                  pageX: E = i.pageX,
                  pageY: T = i.pageY,
                } = n,
                I = s === "X_AXIS",
                D = n.type === "mouseout",
                S = h / 100,
                L = u,
                C = !1;
              switch (a) {
                case st.VIEWPORT: {
                  S = I
                    ? Math.min(g, window.innerWidth) / window.innerWidth
                    : Math.min(m, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: P,
                    scrollTop: q,
                    scrollWidth: M,
                    scrollHeight: X,
                  } = tn();
                  S = I ? Math.min(P + E, M) / M : Math.min(q + T, X) / X;
                  break;
                }
                case st.ELEMENT:
                default: {
                  L = Gy(o, u);
                  let P = n.type.indexOf("mouse") === 0;
                  if (P && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let q = t.getBoundingClientRect(),
                    { left: M, top: X, width: K, height: $ } = q;
                  if (!P && !Dk({ left: g, top: m }, q)) break;
                  (C = !0), (S = I ? (g - M) / K : (m - X) / $);
                  break;
                }
              }
              return (
                D && (S > 1 - Xy || S < Xy) && (S = Math.round(S)),
                (a !== st.ELEMENT || C || C !== i.elementHovered) &&
                  ((S = d ? 1 - S : S), e.dispatch(gr(L, S))),
                {
                  elementHovered: C,
                  clientX: g,
                  clientY: m,
                  pageX: E,
                  pageY: T,
                }
              );
            },
          },
          [Sk]: {
            types: Es,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: o, scrollHeight: i, clientHeight: a } = tn(),
                s = o / (i - a);
              (s = n ? 1 - s : s), e.dispatch(gr(r, s));
            },
          },
          [wk]: {
            types: Es,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              o = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: i,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: d,
                } = tn(),
                {
                  basedOn: h,
                  selectedAxis: g,
                  continuousParameterGroupId: m,
                  startsEntering: E,
                  startsExiting: T,
                  addEndOffset: I,
                  addStartOffset: D,
                  addOffsetValue: S = 0,
                  endOffsetValue: L = 0,
                } = r,
                C = g === "X_AXIS";
              if (h === st.VIEWPORT) {
                let P = C ? i / s : a / u;
                return (
                  P !== o.scrollPercent && t.dispatch(gr(m, P)),
                  { scrollPercent: P }
                );
              } else {
                let P = Gy(n, m),
                  q = e.getBoundingClientRect(),
                  M = (D ? S : 0) / 100,
                  X = (I ? L : 0) / 100;
                (M = E ? M : 1 - M), (X = T ? X : 1 - X);
                let K = q.top + Math.min(q.height * M, d),
                  J = q.top + q.height * X - K,
                  ee = Math.min(d + J, u),
                  x = Math.min(Math.max(0, d - K), ee) / ee;
                return (
                  x !== o.scrollPercent && t.dispatch(gr(P, x)),
                  { scrollPercent: x }
                );
              }
            },
          },
          [$y]: Hy,
          [Ik]: Hy,
          [Yy]: {
            ...ys,
            handler: Vy((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [Ok]: {
            ...ys,
            handler: Vy((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [Qy]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, Fk(Ve)),
          },
          [Zy]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(rn, Gk(Ve)),
          },
        });
    });
  var T_ = {};
  Fe(T_, {
    observeRequests: () => iV,
    startActionGroup: () => on,
    startEngine: () => Ai,
    stopActionGroup: () => mr,
    stopAllActionGroups: () => y_,
    stopEngine: () => Si,
  });
  function iV(e) {
    kt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: sV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: uV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: cV }),
      kt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: lV });
  }
  function oV(e) {
    kt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Si(e),
          g_({ store: e, elementApi: Me }),
          Ai({ store: e, allowEvents: !0 }),
          h_();
      },
    });
  }
  function aV(e, t) {
    let r = kt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function sV({ rawData: e, defer: t }, r) {
    let n = () => {
      Ai({ store: r, rawData: e, allowEvents: !0 }), h_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function h_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function uV(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: o,
        eventId: i,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: h } = e;
    if (n && o && h && s) {
      let g = h.actionLists[n];
      g && (h = zk({ actionList: g, actionItemId: o, rawData: h }));
    }
    if (
      (Ai({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === He.GENERAL_START_ACTION) || bs(r))
    ) {
      mr({ store: t, actionListId: n }),
        E_({ store: t, actionListId: n, eventId: i });
      let g = on({
        store: t,
        eventId: i,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && g && t.dispatch(hr({ actionListId: n, isPlaying: !s }));
    }
  }
  function cV({ actionListId: e }, t) {
    e ? mr({ store: t, actionListId: e }) : y_({ store: t }), Si(t);
  }
  function lV(e, t) {
    Si(t), g_({ store: t, elementApi: Me });
  }
  function Ai({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: o } = e.getState();
    t && e.dispatch(Za(t)),
      o.active ||
        (e.dispatch(
          Ja({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (hV(e), fV(), e.getState().ixSession.hasDefinedMediaQueries && oV(e)),
        e.dispatch(es()),
        dV(e, n));
  }
  function fV() {
    let { documentElement: e } = document;
    e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`);
  }
  function dV(e, t) {
    let r = (n) => {
      let { ixSession: o, ixParameters: i } = e.getState();
      o.active &&
        (e.dispatch(fi(n, i)), t ? aV(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Si(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(pV), Qk(), e.dispatch(ts());
    }
  }
  function pV({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function vV({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: o,
    actionListId: i,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: h } = e.getState(),
      { events: g } = d,
      m = g[n],
      { eventTypeId: E } = m,
      T = {},
      I = {},
      D = [],
      { continuousActionGroups: S } = a,
      { id: L } = a;
    Kk(E, o) && (L = Yk(t, L));
    let C = h.hasBoundaryNodes && r ? en(r, Ii) : null;
    S.forEach((P) => {
      let { keyframe: q, actionItems: M } = P;
      M.forEach((X) => {
        let { actionTypeId: K } = X,
          { target: $ } = X.config;
        if (!$) return;
        let J = $.boundaryMode ? C : null,
          ee = Zk($) + Ts + K;
        if (((I[ee] = gV(I[ee], q, X)), !T[ee])) {
          T[ee] = !0;
          let { config: U } = X;
          Oi({
            config: U,
            event: m,
            eventTarget: r,
            elementRoot: J,
            elementApi: Me,
          }).forEach((x) => {
            D.push({ element: x, key: ee });
          });
        }
      });
    }),
      D.forEach(({ element: P, key: q }) => {
        let M = I[q],
          X = (0, Et.default)(M, "[0].actionItems[0]", {}),
          { actionTypeId: K } = X,
          $ = xi(K) ? Os(K)(P, X) : null,
          J = Is({ element: P, actionItem: X, elementApi: Me }, $);
        ws({
          store: e,
          element: P,
          eventId: n,
          actionListId: i,
          actionItem: X,
          destination: J,
          continuous: !0,
          parameterId: L,
          actionGroups: M,
          smoothing: s,
          restingValue: u,
          pluginInstance: $,
        });
      });
  }
  function gV(e = [], t, r) {
    let n = [...e],
      o;
    return (
      n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
      o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[o].actionItems.push(r),
      n
    );
  }
  function hV(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    m_(e),
      (0, Er.default)(r, (o, i) => {
        let a = i_[i];
        if (!a) {
          console.warn(`IX2 event type not configured: ${i}`);
          return;
        }
        TV({ logic: a, store: e, events: o });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && EV(e);
  }
  function EV(e) {
    let t = () => {
      m_(e);
    };
    mV.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(li(window, [r, t]));
    }),
      t();
  }
  function m_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: o } = r;
      e.dispatch(as({ width: n, mediaQueries: o }));
    }
  }
  function TV({ logic: e, store: t, events: r }) {
    IV(r);
    let { types: n, handler: o } = e,
      { ixData: i } = t.getState(),
      { actionLists: a } = i,
      s = yV(r, bV);
    if (!(0, c_.default)(s)) return;
    (0, Er.default)(s, (g, m) => {
      let E = r[m],
        { action: T, id: I, mediaQueries: D = i.mediaQueryKeys } = E,
        { actionListId: S } = T.config;
      Jk(D, i.mediaQueryKeys) || t.dispatch(ss()),
        T.actionTypeId === He.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(E.config) ? E.config : [E.config]).forEach((C) => {
            let { continuousParameterGroupId: P } = C,
              q = (0, Et.default)(a, `${S}.continuousParameterGroups`, []),
              M = (0, u_.default)(q, ({ id: $ }) => $ === P),
              X = (C.smoothing || 0) / 100,
              K = (C.restingState || 0) / 100;
            M &&
              g.forEach(($, J) => {
                let ee = I + Ts + J;
                vV({
                  store: t,
                  eventStateKey: ee,
                  eventTarget: $,
                  eventId: I,
                  eventConfig: C,
                  actionListId: S,
                  parameterGroup: M,
                  smoothing: X,
                  restingValue: K,
                });
              });
          }),
        (T.actionTypeId === He.GENERAL_START_ACTION || bs(T.actionTypeId)) &&
          E_({ store: t, actionListId: S, eventId: I });
    });
    let u = (g) => {
        let { ixSession: m } = t.getState();
        _V(s, (E, T, I) => {
          let D = r[T],
            S = m.eventState[I],
            { action: L, mediaQueries: C = i.mediaQueryKeys } = D;
          if (!wi(C, m.mediaQueryKey)) return;
          let P = (q = {}) => {
            let M = o(
              {
                store: t,
                element: E,
                event: D,
                eventConfig: q,
                nativeEvent: g,
                eventStateKey: I,
              },
              S
            );
            eV(M, S) || t.dispatch(rs(I, M));
          };
          L.actionTypeId === He.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(D.config) ? D.config : [D.config]).forEach(P)
            : P();
        });
      },
      d = (0, p_.default)(u, nV),
      h = ({ target: g = document, types: m, throttle: E }) => {
        m.split(" ")
          .filter(Boolean)
          .forEach((T) => {
            let I = E ? d : u;
            g.addEventListener(T, I), t.dispatch(li(g, [T, I]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function IV(e) {
    if (!rV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: o, target: i } = e[n],
        a = cs(i);
      t[a] ||
        ((o === Ze.MOUSE_CLICK || o === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function E_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: o } = e.getState(),
      { actionLists: i, events: a } = n,
      s = a[r],
      u = i[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, Et.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, Et.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!wi(h, o.mediaQueryKey)) return;
      d.forEach((g) => {
        let { config: m, actionTypeId: E } = g,
          T =
            m?.target?.useEventTarget === !0 && m?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : m,
          I = Oi({ config: T, event: s, elementApi: Me }),
          D = xi(E);
        I.forEach((S) => {
          let L = D ? Os(E)(S, g) : null;
          ws({
            destination: Is({ element: S, actionItem: g, elementApi: Me }, L),
            immediate: !0,
            store: e,
            element: S,
            eventId: r,
            actionItem: g,
            actionListId: t,
            pluginInstance: L,
          });
        });
      });
    }
  }
  function y_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, Er.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: o } = r;
        xs(r, e), o && e.dispatch(hr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function mr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
  }) {
    let { ixInstances: i, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? en(r, Ii) : null;
    (0, Er.default)(i, (u) => {
      let d = (0, Et.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === o && u.eventId === t && h) {
        if (s && d && !ls(s, u.element)) return;
        xs(u, e),
          u.verbose && e.dispatch(hr({ actionListId: o, isPlaying: !1 }));
      }
    });
  }
  function on({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: o,
    groupIndex: i = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: h } = u,
      g = h[t] || {},
      { mediaQueries: m = u.mediaQueryKeys } = g,
      E = (0, Et.default)(u, `actionLists.${o}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: I } = E;
    if (!T || !T.length) return !1;
    i >= T.length && (0, Et.default)(g, "config.loop") && (i = 0),
      i === 0 && I && i++;
    let S =
        (i === 0 || (i === 1 && I)) && bs(g.action?.actionTypeId)
          ? g.config.delay
          : void 0,
      L = (0, Et.default)(T, [i, "actionItems"], []);
    if (!L.length || !wi(m, d.mediaQueryKey)) return !1;
    let C = d.hasBoundaryNodes && r ? en(r, Ii) : null,
      P = Xk(L),
      q = !1;
    return (
      L.forEach((M, X) => {
        let { config: K, actionTypeId: $ } = M,
          J = xi($),
          { target: ee } = K;
        if (!ee) return;
        let U = ee.boundaryMode ? C : null;
        Oi({
          config: K,
          event: g,
          eventTarget: r,
          elementRoot: U,
          elementApi: Me,
        }).forEach((F, B) => {
          let H = J ? Os($)(F, M) : null,
            te = J ? tV($)(F, M) : null;
          q = !0;
          let re = P === X && B === 0,
            k = Bk({ element: F, actionItem: M }),
            Y = Is({ element: F, actionItem: M, elementApi: Me }, H);
          ws({
            store: e,
            element: F,
            actionItem: M,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: o,
            groupIndex: i,
            isCarrier: re,
            computedStyle: k,
            destination: Y,
            immediate: a,
            verbose: s,
            pluginInstance: H,
            pluginDuration: te,
            instanceDelay: S,
          });
        });
      }),
      q
    );
  }
  function ws(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: o,
        actionItem: i,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: h,
      } = n,
      g = !u,
      m = Wk(),
      { ixElements: E, ixSession: T, ixData: I } = t.getState(),
      D = Vk(E, o),
      { refState: S } = E[D] || {},
      L = fs(o),
      C = T.reducedMotion && zo[i.actionTypeId],
      P;
    if (C && u)
      switch (I.events[h]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          P = d;
          break;
        default:
          P = 0.5;
          break;
      }
    let q = jk(o, S, r, i, Me, s);
    if (
      (t.dispatch(
        ns({
          instanceId: m,
          elementId: D,
          origin: q,
          refType: L,
          skipMotion: C,
          skipToValue: P,
          ...n,
        })
      ),
      __(document.body, "ix2-animation-started", m),
      a)
    ) {
      OV(t, m);
      return;
    }
    kt({ store: t, select: ({ ixInstances: M }) => M[m], onChange: b_ }),
      g && t.dispatch(di(m, T.tick));
  }
  function xs(e, t) {
    __(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: o } = t.getState(),
      { ref: i, refType: a } = o[r] || {};
    a === v_ && $k(i, n, Me), t.dispatch(is(e.id));
  }
  function __(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function OV(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
    let { ixInstances: n } = e.getState();
    b_(n[t], e);
  }
  function b_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: o,
        elementId: i,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: d,
        groupIndex: h,
        eventId: g,
        eventTarget: m,
        eventStateKey: E,
        actionListId: T,
        isCarrier: I,
        styleProp: D,
        verbose: S,
        pluginInstance: L,
      } = e,
      { ixData: C, ixSession: P } = t.getState(),
      { events: q } = C,
      M = q[g] || {},
      { mediaQueries: X = C.mediaQueryKeys } = M;
    if (wi(X, P.mediaQueryKey) && (n || r || o)) {
      if (d || (u === kk && o)) {
        t.dispatch(os(i, s, d, a));
        let { ixElements: K } = t.getState(),
          { ref: $, refType: J, refState: ee } = K[i] || {},
          U = ee && ee[s];
        (J === v_ || xi(s)) && Hk($, ee, U, g, a, D, Me, u, L);
      }
      if (o) {
        if (I) {
          let K = on({
            store: t,
            eventId: g,
            eventTarget: m,
            eventStateKey: E,
            actionListId: T,
            groupIndex: h + 1,
            verbose: S,
          });
          S && !K && t.dispatch(hr({ actionListId: T, isPlaying: !1 }));
        }
        xs(e, t);
      }
    }
  }
  var u_,
    Et,
    c_,
    l_,
    f_,
    d_,
    Er,
    p_,
    Ti,
    Uk,
    bs,
    Ts,
    Ii,
    v_,
    kk,
    a_,
    Oi,
    Vk,
    Is,
    kt,
    Wk,
    Hk,
    g_,
    Xk,
    Bk,
    jk,
    zk,
    Kk,
    Yk,
    wi,
    $k,
    Qk,
    Zk,
    Jk,
    eV,
    xi,
    Os,
    tV,
    s_,
    rV,
    nV,
    mV,
    yV,
    _V,
    bV,
    _s = me(() => {
      "use strict";
      (u_ = fe(Ta())),
        (Et = fe(jn())),
        (c_ = fe(qm())),
        (l_ = fe(sE())),
        (f_ = fe(cE())),
        (d_ = fe(fE())),
        (Er = fe(mE())),
        (p_ = fe(OE()));
      Ue();
      Ti = fe(Ut());
      pi();
      CE();
      o_();
      (Uk = Object.keys(Bo)),
        (bs = (e) => Uk.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: Ii,
          HTML_ELEMENT: v_,
          RENDER_GENERAL: kk,
          W_MOD_IX: a_,
        } = Re),
        ({
          getAffectedElements: Oi,
          getElementId: Vk,
          getDestinationValues: Is,
          observeStore: kt,
          getInstanceId: Wk,
          renderHTMLElement: Hk,
          clearAllStyles: g_,
          getMaxDurationItemIndex: Xk,
          getComputedStyle: Bk,
          getInstanceOrigin: jk,
          reduceListToGroup: zk,
          shouldNamespaceEventParameter: Kk,
          getNamespacedParameterId: Yk,
          shouldAllowMediaQuery: wi,
          cleanupHTMLElement: $k,
          clearObjectCache: Qk,
          stringifyTarget: Zk,
          mediaQueriesEqual: Jk,
          shallowEqual: eV,
        } = Ti.IX2VanillaUtils),
        ({
          isPluginType: xi,
          createPluginInstance: Os,
          getPluginDuration: tV,
        } = Ti.IX2VanillaPlugins),
        (s_ = navigator.userAgent),
        (rV = s_.match(/iPad/i) || s_.match(/iPhone/)),
        (nV = 12);
      mV = ["resize", "orientationchange"];
      (yV = (e, t) => (0, l_.default)((0, d_.default)(e, t), f_.default)),
        (_V = (e, t) => {
          (0, Er.default)(e, (r, n) => {
            r.forEach((o, i) => {
              let a = n + Ts + i;
              t(o, n, a);
            });
          });
        }),
        (bV = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Oi({ config: t, elementApi: Me });
        });
    });
  var O_ = c((yt) => {
    "use strict";
    var wV = pn().default,
      xV = ou().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = I_;
    yt.init = LV;
    yt.setEnv = CV;
    yt.store = void 0;
    Xl();
    var AV = Ho(),
      SV = xV((hm(), nt(gm))),
      As = (_s(), nt(T_)),
      RV = wV((pi(), nt(xE)));
    yt.actions = RV;
    var Ss = (yt.store = (0, AV.createStore)(SV.default));
    function CV(e) {
      e() && (0, As.observeRequests)(Ss);
    }
    function LV(e) {
      I_(), (0, As.startEngine)({ store: Ss, rawData: e, allowEvents: !0 });
    }
    function I_() {
      (0, As.stopEngine)(Ss);
    }
  });
  var S_ = c(($j, A_) => {
    "use strict";
    var w_ = Ge(),
      x_ = O_();
    x_.setEnv(w_.env);
    w_.define(
      "ix2",
      (A_.exports = function () {
        return x_;
      })
    );
  });
  var C_ = c((Qj, R_) => {
    "use strict";
    var yr = Ge();
    yr.define(
      "links",
      (R_.exports = function (e, t) {
        var r = {},
          n = e(window),
          o,
          i = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          h = /\/$/,
          g,
          m;
        r.ready = r.design = r.preview = E;
        function E() {
          (o = i && yr.env("design")),
            (m = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(I),
            (g = []);
          for (var S = document.links, L = 0; L < S.length; ++L) T(S[L]);
          g.length && (yr.scroll.on(I), I());
        }
        function T(S) {
          var L =
            (o && S.getAttribute("href-disabled")) || S.getAttribute("href");
          if (((s.href = L), !(L.indexOf(":") >= 0))) {
            var C = e(S);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var P = e(s.hash);
              P.length && g.push({ link: C, sec: P, active: !1 });
              return;
            }
            if (!(L === "#" || L === "")) {
              var q = s.href === a.href || L === m || (d.test(L) && h.test(m));
              D(C, u, q);
            }
          }
        }
        function I() {
          var S = n.scrollTop(),
            L = n.height();
          t.each(g, function (C) {
            var P = C.link,
              q = C.sec,
              M = q.offset().top,
              X = q.outerHeight(),
              K = L * 0.5,
              $ = q.is(":visible") && M + X - K >= S && M + K <= S + L;
            C.active !== $ && ((C.active = $), D(P, u, $));
          });
        }
        function D(S, L, C) {
          var P = S.hasClass(L);
          (C && P) || (!C && !P) || (C ? S.addClass(L) : S.removeClass(L));
        }
        return r;
      })
    );
  });
  var N_ = c((Zj, L_) => {
    "use strict";
    var Ri = Ge();
    Ri.define(
      "scroll",
      (L_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          o = e(window),
          i = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (U) {
              window.setTimeout(U, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          g = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          E = document.createElement("style");
        E.appendChild(document.createTextNode(m));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var I = /^#[a-zA-Z0-9][\w:.-]*$/;
        function D(U) {
          return I.test(U.hash) && U.host + U.pathname === r.host + r.pathname;
        }
        let S =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function L() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            S.matches
          );
        }
        function C(U, x) {
          var F;
          switch (x) {
            case "add":
              (F = U.attr("tabindex")),
                F
                  ? U.attr("data-wf-tabindex-swap", F)
                  : U.attr("tabindex", "-1");
              break;
            case "remove":
              (F = U.attr("data-wf-tabindex-swap")),
                F
                  ? (U.attr("tabindex", F),
                    U.removeAttr("data-wf-tabindex-swap"))
                  : U.removeAttr("tabindex");
              break;
          }
          U.toggleClass("wf-force-outline-none", x === "add");
        }
        function P(U) {
          var x = U.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(x.className))
            )
          ) {
            var F = D(x) ? x.hash : "";
            if (F !== "") {
              var B = e(F);
              B.length &&
                (U && (U.preventDefault(), U.stopPropagation()),
                q(F, U),
                window.setTimeout(
                  function () {
                    M(B, function () {
                      C(B, "add"),
                        B.get(0).focus({ preventScroll: !0 }),
                        C(B, "remove");
                    });
                  },
                  U ? 0 : 300
                ));
            }
          }
        }
        function q(U) {
          if (
            r.hash !== U &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var x = n.state && n.state.hash;
            x !== U && n.pushState({ hash: U }, "", U);
          }
        }
        function M(U, x) {
          var F = o.scrollTop(),
            B = X(U);
          if (F !== B) {
            var H = K(U, F, B),
              te = Date.now(),
              re = function () {
                var k = Date.now() - te;
                window.scroll(0, $(F, B, k, H)),
                  k <= H ? s(re) : typeof x == "function" && x();
              };
            s(re);
          }
        }
        function X(U) {
          var x = e(d),
            F = x.css("position") === "fixed" ? x.outerHeight() : 0,
            B = U.offset().top - F;
          if (U.data("scroll") === "mid") {
            var H = o.height() - F,
              te = U.outerHeight();
            te < H && (B -= Math.round((H - te) / 2));
          }
          return B;
        }
        function K(U, x, F) {
          if (L()) return 0;
          var B = 1;
          return (
            a.add(U).each(function (H, te) {
              var re = parseFloat(te.getAttribute("data-scroll-time"));
              !isNaN(re) && re >= 0 && (B = re);
            }),
            (472.143 * Math.log(Math.abs(x - F) + 125) - 2e3) * B
          );
        }
        function $(U, x, F, B) {
          return F > B ? x : U + (x - U) * J(F / B);
        }
        function J(U) {
          return U < 0.5
            ? 4 * U * U * U
            : (U - 1) * (2 * U - 2) * (2 * U - 2) + 1;
        }
        function ee() {
          var { WF_CLICK_EMPTY: U, WF_CLICK_SCROLL: x } = t;
          i.on(x, g, P),
            i.on(U, h, function (F) {
              F.preventDefault();
            }),
            document.head.insertBefore(E, document.head.firstChild);
        }
        return { ready: ee };
      })
    );
  });
  var M_ = c((Jj, P_) => {
    "use strict";
    var NV = Ge();
    NV.define(
      "touch",
      (P_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (i) {
            return (
              (i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
            );
          });
        function n(i) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            h;
          i.addEventListener("touchstart", g, !1),
            i.addEventListener("touchmove", m, !1),
            i.addEventListener("touchend", E, !1),
            i.addEventListener("touchcancel", T, !1),
            i.addEventListener("mousedown", g, !1),
            i.addEventListener("mousemove", m, !1),
            i.addEventListener("mouseup", E, !1),
            i.addEventListener("mouseout", T, !1);
          function g(D) {
            var S = D.touches;
            (S && S.length > 1) ||
              ((a = !0),
              S ? ((s = !0), (d = S[0].clientX)) : (d = D.clientX),
              (h = d));
          }
          function m(D) {
            if (a) {
              if (s && D.type === "mousemove") {
                D.preventDefault(), D.stopPropagation();
                return;
              }
              var S = D.touches,
                L = S ? S[0].clientX : D.clientX,
                C = L - h;
              (h = L),
                Math.abs(C) > u &&
                  r &&
                  String(r()) === "" &&
                  (o("swipe", D, { direction: C > 0 ? "right" : "left" }), T());
            }
          }
          function E(D) {
            if (a && ((a = !1), s && D.type === "mouseup")) {
              D.preventDefault(), D.stopPropagation(), (s = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function I() {
            i.removeEventListener("touchstart", g, !1),
              i.removeEventListener("touchmove", m, !1),
              i.removeEventListener("touchend", E, !1),
              i.removeEventListener("touchcancel", T, !1),
              i.removeEventListener("mousedown", g, !1),
              i.removeEventListener("mousemove", m, !1),
              i.removeEventListener("mouseup", E, !1),
              i.removeEventListener("mouseout", T, !1),
              (i = null);
          }
          this.destroy = I;
        }
        function o(i, a, s) {
          var u = e.Event(i, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var F_ = c((ez, D_) => {
    "use strict";
    var Vt = Ge(),
      PV = br(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      q_ = !0,
      MV = /^#[a-zA-Z0-9\-_]+$/;
    Vt.define(
      "dropdown",
      (D_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          o = Vt.env(),
          i = !1,
          a,
          s = Vt.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          h = PV.triggers,
          g = 900,
          m = "focusout" + u,
          E = "keydown" + u,
          T = "mouseenter" + u,
          I = "mousemove" + u,
          D = "mouseleave" + u,
          S = (s ? "click" : "mouseup") + u,
          L = "w-close" + u,
          C = "setting" + u,
          P = e(document),
          q;
        (n.ready = M),
          (n.design = function () {
            i && x(), (i = !1), M();
          }),
          (n.preview = function () {
            (i = !0), M();
          });
        function M() {
          (a = o && Vt.env("design")), (q = P.find(u)), q.each(X);
        }
        function X(l, G) {
          var V = e(G),
            A = e.data(G, u);
          A ||
            (A = e.data(G, u, {
              open: !1,
              el: V,
              config: {},
              selectedIdx: -1,
            })),
            (A.toggle = A.el.children(".w-dropdown-toggle")),
            (A.list = A.el.children(".w-dropdown-list")),
            (A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (A.complete = H(A)),
            (A.mouseLeave = re(A)),
            (A.mouseUpOutside = B(A)),
            (A.mouseMoveOutside = k(A)),
            K(A);
          var ie = A.toggle.attr("id"),
            le = A.list.attr("id");
          ie || (ie = "w-dropdown-toggle-" + l),
            le || (le = "w-dropdown-list-" + l),
            A.toggle.attr("id", ie),
            A.toggle.attr("aria-controls", le),
            A.toggle.attr("aria-haspopup", "menu"),
            A.toggle.attr("aria-expanded", "false"),
            A.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            A.toggle.prop("tagName") !== "BUTTON" &&
              (A.toggle.attr("role", "button"),
              A.toggle.attr("tabindex") || A.toggle.attr("tabindex", "0")),
            A.list.attr("id", le),
            A.list.attr("aria-labelledby", ie),
            A.links.each(function (v, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                MV.test(W.hash) && W.addEventListener("click", U.bind(null, A));
            }),
            A.el.off(u),
            A.toggle.off(u),
            A.nav && A.nav.off(u);
          var oe = J(A, q_);
          a && A.el.on(C, $(A)),
            a ||
              (o && ((A.hovering = !1), U(A)),
              A.config.hover && A.toggle.on(T, te(A)),
              A.el.on(L, oe),
              A.el.on(E, Y(A)),
              A.el.on(m, _(A)),
              A.toggle.on(S, oe),
              A.toggle.on(E, y(A)),
              (A.nav = A.el.closest(".w-nav")),
              A.nav.on(L, oe));
        }
        function K(l) {
          var G = Number(l.el.css("z-index"));
          (l.manageZ = G === g || G === g + 1),
            (l.config = {
              hover: l.el.attr("data-hover") === "true" && !s,
              delay: l.el.attr("data-delay"),
            });
        }
        function $(l) {
          return function (G, V) {
            (V = V || {}),
              K(l),
              V.open === !0 && ee(l, !0),
              V.open === !1 && U(l, { immediate: !0 });
          };
        }
        function J(l, G) {
          return r(function (V) {
            if (l.open || (V && V.type === "w-close"))
              return U(l, { forceClose: G });
            ee(l);
          });
        }
        function ee(l) {
          if (!l.open) {
            F(l),
              (l.open = !0),
              l.list.addClass(d),
              l.toggle.addClass(d),
              l.toggle.attr("aria-expanded", "true"),
              h.intro(0, l.el[0]),
              Vt.redraw.up(),
              l.manageZ && l.el.css("z-index", g + 1);
            var G = Vt.env("editor");
            a || P.on(S, l.mouseUpOutside),
              l.hovering && !G && l.el.on(D, l.mouseLeave),
              l.hovering && G && P.on(I, l.mouseMoveOutside),
              window.clearTimeout(l.delayId);
          }
        }
        function U(l, { immediate: G, forceClose: V } = {}) {
          if (l.open && !(l.config.hover && l.hovering && !V)) {
            l.toggle.attr("aria-expanded", "false"), (l.open = !1);
            var A = l.config;
            if (
              (h.outro(0, l.el[0]),
              P.off(S, l.mouseUpOutside),
              P.off(I, l.mouseMoveOutside),
              l.el.off(D, l.mouseLeave),
              window.clearTimeout(l.delayId),
              !A.delay || G)
            )
              return l.complete();
            l.delayId = window.setTimeout(l.complete, A.delay);
          }
        }
        function x() {
          P.find(u).each(function (l, G) {
            e(G).triggerHandler(L);
          });
        }
        function F(l) {
          var G = l.el[0];
          q.each(function (V, A) {
            var ie = e(A);
            ie.is(G) || ie.has(G).length || ie.triggerHandler(L);
          });
        }
        function B(l) {
          return (
            l.mouseUpOutside && P.off(S, l.mouseUpOutside),
            r(function (G) {
              if (l.open) {
                var V = e(G.target);
                if (!V.closest(".w-dropdown-toggle").length) {
                  var A = e.inArray(l.el[0], V.parents(u)) === -1,
                    ie = Vt.env("editor");
                  if (A) {
                    if (ie) {
                      var le =
                          V.parents().length === 1 &&
                          V.parents("svg").length === 1,
                        oe = V.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (le || oe) return;
                    }
                    U(l);
                  }
                }
              }
            })
          );
        }
        function H(l) {
          return function () {
            l.list.removeClass(d),
              l.toggle.removeClass(d),
              l.manageZ && l.el.css("z-index", "");
          };
        }
        function te(l) {
          return function () {
            (l.hovering = !0), ee(l);
          };
        }
        function re(l) {
          return function () {
            (l.hovering = !1), l.links.is(":focus") || U(l);
          };
        }
        function k(l) {
          return r(function (G) {
            if (l.open) {
              var V = e(G.target),
                A = e.inArray(l.el[0], V.parents(u)) === -1;
              if (A) {
                var ie = V.parents(".w-editor-bem-EditorHoverControls").length,
                  le = V.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  v =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (ie || le || v) return;
                (l.hovering = !1), U(l);
              }
            }
          });
        }
        function Y(l) {
          return function (G) {
            if (!(a || !l.open))
              switch (
                ((l.selectedIdx = l.links.index(document.activeElement)),
                G.keyCode)
              ) {
                case tt.HOME:
                  return l.open
                    ? ((l.selectedIdx = 0), p(l), G.preventDefault())
                    : void 0;
                case tt.END:
                  return l.open
                    ? ((l.selectedIdx = l.links.length - 1),
                      p(l),
                      G.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return U(l), l.toggle.focus(), G.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (l.selectedIdx = Math.min(
                      l.links.length - 1,
                      l.selectedIdx + 1
                    )),
                    p(l),
                    G.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (l.selectedIdx = Math.max(-1, l.selectedIdx - 1)),
                    p(l),
                    G.preventDefault()
                  );
              }
          };
        }
        function p(l) {
          l.links[l.selectedIdx] && l.links[l.selectedIdx].focus();
        }
        function y(l) {
          var G = J(l, q_);
          return function (V) {
            if (!a) {
              if (!l.open)
                switch (V.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return V.stopPropagation();
                }
              switch (V.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return G(), V.stopPropagation(), V.preventDefault();
              }
            }
          };
        }
        function _(l) {
          return r(function (G) {
            var { relatedTarget: V, target: A } = G,
              ie = l.el[0],
              le = ie.contains(V) || ie.contains(A);
            return le || U(l), G.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var G_ = c((Rs) => {
    "use strict";
    Object.defineProperty(Rs, "__esModule", { value: !0 });
    Rs.default = qV;
    function qV(e, t, r, n, o, i, a, s, u, d, h, g, m) {
      return function (E) {
        e(E);
        var T = E.form,
          I = {
            name: T.attr("data-name") || T.attr("name") || "Untitled Form",
            pageId: T.attr("data-wf-page-id") || "",
            elementId: T.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              T.html()
            ),
            trackingCookies: n(),
          };
        let D = T.attr("data-wf-flow");
        D && (I.wfFlow = D), o(E);
        var S = i(T, I.fields);
        if (S) return a(S);
        if (((I.fileUploads = s(T)), u(E), !d)) {
          h(E);
          return;
        }
        g.ajax({
          url: m,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (L) {
            L && L.code === 200 && (E.success = !0), h(E);
          })
          .fail(function () {
            h(E);
          });
      };
    }
  });
  var k_ = c((rz, U_) => {
    "use strict";
    var Ci = Ge();
    Ci.define(
      "forms",
      (U_.exports = function (e, t) {
        var r = {},
          n = e(document),
          o,
          i = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          d = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          g = window.alert,
          m = Ci.env(),
          E,
          T,
          I,
          D = /list-manage[1-9]?.com/i,
          S = t.debounce(function () {
            g(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              L(), !m && !E && P();
            };
        function L() {
          (u = e("html").attr("data-wf-site")),
            (T = "https://webflow.com/api/v1/form/" + u),
            a &&
              T.indexOf("https://webflow.com") >= 0 &&
              (T = T.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (I = `${T}/signFile`),
            (o = e(s + " form")),
            o.length && o.each(C);
        }
        function C(k, Y) {
          var p = e(Y),
            y = e.data(Y, s);
          y || (y = e.data(Y, s, { form: p })), q(y);
          var _ = p.closest("div.w-form");
          (y.done = _.find("> .w-form-done")),
            (y.fail = _.find("> .w-form-fail")),
            (y.fileUploads = _.find(".w-file-upload")),
            y.fileUploads.each(function (V) {
              H(V, y);
            });
          var l =
            y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
          y.done.attr("aria-label") || y.form.attr("aria-label", l),
            y.done.attr("tabindex", "-1"),
            y.done.attr("role", "region"),
            y.done.attr("aria-label") ||
              y.done.attr("aria-label", l + " success"),
            y.fail.attr("tabindex", "-1"),
            y.fail.attr("role", "region"),
            y.fail.attr("aria-label") ||
              y.fail.attr("aria-label", l + " failure");
          var G = (y.action = p.attr("action"));
          if (
            ((y.handler = null),
            (y.redirect = p.attr("data-redirect")),
            D.test(G))
          ) {
            y.handler = x;
            return;
          }
          if (!G) {
            if (u) {
              y.handler = (() => {
                let V = G_().default;
                return V(q, i, Ci, J, B, X, g, K, M, u, F, e, T);
              })();
              return;
            }
            S();
          }
        }
        function P() {
          (E = !0),
            n.on("submit", s + " form", function (V) {
              var A = e.data(this, s);
              A.handler && ((A.evt = V), A.handler(A));
            });
          let k = ".w-checkbox-input",
            Y = ".w-radio-input",
            p = "w--redirected-checked",
            y = "w--redirected-focus",
            _ = "w--redirected-focus-visible",
            l = ":focus-visible, [data-wf-focus-visible]",
            G = [
              ["checkbox", k],
              ["radio", Y],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + k + ")",
            (V) => {
              e(V.target).siblings(k).toggleClass(p);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (V) => {
              e(`input[name="${V.target.name}"]:not(${k})`).map((ie, le) =>
                e(le).siblings(Y).removeClass(p)
              );
              let A = e(V.target);
              A.hasClass("w-radio-input") || A.siblings(Y).addClass(p);
            }),
            G.forEach(([V, A]) => {
              n.on(
                "focus",
                s + ` form input[type="${V}"]:not(` + A + ")",
                (ie) => {
                  e(ie.target).siblings(A).addClass(y),
                    e(ie.target).filter(l).siblings(A).addClass(_);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${V}"]:not(` + A + ")",
                  (ie) => {
                    e(ie.target).siblings(A).removeClass(`${y} ${_}`);
                  }
                );
            });
        }
        function q(k) {
          var Y = (k.btn = k.form.find(':input[type="submit"]'));
          (k.wait = k.btn.attr("data-wait") || null),
            (k.success = !1),
            Y.prop("disabled", !1),
            k.label && Y.val(k.label);
        }
        function M(k) {
          var Y = k.btn,
            p = k.wait;
          Y.prop("disabled", !0), p && ((k.label = Y.val()), Y.val(p));
        }
        function X(k, Y) {
          var p = null;
          return (
            (Y = Y || {}),
            k
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (y, _) {
                var l = e(_),
                  G = l.attr("type"),
                  V =
                    l.attr("data-name") || l.attr("name") || "Field " + (y + 1),
                  A = l.val();
                if (G === "checkbox") A = l.is(":checked");
                else if (G === "radio") {
                  if (Y[V] === null || typeof Y[V] == "string") return;
                  A =
                    k
                      .find('input[name="' + l.attr("name") + '"]:checked')
                      .val() || null;
                }
                typeof A == "string" && (A = e.trim(A)),
                  (Y[V] = A),
                  (p = p || ee(l, G, V, A));
              }),
            p
          );
        }
        function K(k) {
          var Y = {};
          return (
            k.find(':input[type="file"]').each(function (p, y) {
              var _ = e(y),
                l = _.attr("data-name") || _.attr("name") || "File " + (p + 1),
                G = _.attr("data-value");
              typeof G == "string" && (G = e.trim(G)), (Y[l] = G);
            }),
            Y
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (Y, p) {
            let y = p.split("="),
              _ = y[0];
            if (_ in $) {
              let l = $[_],
                G = y.slice(1).join("=");
              Y[l] = G;
            }
            return Y;
          }, {});
        }
        function ee(k, Y, p, y) {
          var _ = null;
          return (
            Y === "password"
              ? (_ = "Passwords cannot be submitted.")
              : k.attr("required")
              ? y
                ? d.test(k.attr("type")) &&
                  (h.test(y) ||
                    (_ = "Please enter a valid email address for: " + p))
                : (_ = "Please fill out the required field: " + p)
              : p === "g-recaptcha-response" &&
                !y &&
                (_ = "Please confirm you\u2019re not a robot."),
            _
          );
        }
        function U(k) {
          B(k), F(k);
        }
        function x(k) {
          q(k);
          var Y = k.form,
            p = {};
          if (/^https/.test(i.href) && !/^https/.test(k.action)) {
            Y.attr("method", "post");
            return;
          }
          B(k);
          var y = X(Y, p);
          if (y) return g(y);
          M(k);
          var _;
          t.each(p, function (A, ie) {
            d.test(ie) && (p.EMAIL = A),
              /^((full[ _-]?)?name)$/i.test(ie) && (_ = A),
              /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = A),
              /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = A);
          }),
            _ &&
              !p.FNAME &&
              ((_ = _.split(" ")),
              (p.FNAME = _[0]),
              (p.LNAME = p.LNAME || _[1]));
          var l = k.action.replace("/post?", "/post-json?") + "&c=?",
            G = l.indexOf("u=") + 2;
          G = l.substring(G, l.indexOf("&", G));
          var V = l.indexOf("id=") + 3;
          (V = l.substring(V, l.indexOf("&", V))),
            (p["b_" + G + "_" + V] = ""),
            e
              .ajax({ url: l, data: p, dataType: "jsonp" })
              .done(function (A) {
                (k.success = A.result === "success" || /already/.test(A.msg)),
                  k.success || console.info("MailChimp error: " + A.msg),
                  F(k);
              })
              .fail(function () {
                F(k);
              });
        }
        function F(k) {
          var Y = k.form,
            p = k.redirect,
            y = k.success;
          if (y && p) {
            Ci.location(p);
            return;
          }
          k.done.toggle(y),
            k.fail.toggle(!y),
            y ? k.done.focus() : k.fail.focus(),
            Y.toggle(!y),
            q(k);
        }
        function B(k) {
          k.evt && k.evt.preventDefault(), (k.evt = null);
        }
        function H(k, Y) {
          if (!Y.fileUploads || !Y.fileUploads[k]) return;
          var p,
            y = e(Y.fileUploads[k]),
            _ = y.find("> .w-file-upload-default"),
            l = y.find("> .w-file-upload-uploading"),
            G = y.find("> .w-file-upload-success"),
            V = y.find("> .w-file-upload-error"),
            A = _.find(".w-file-upload-input"),
            ie = _.find(".w-file-upload-label"),
            le = ie.children(),
            oe = V.find(".w-file-upload-error-msg"),
            v = G.find(".w-file-upload-file"),
            W = G.find(".w-file-remove-link"),
            Q = v.find(".w-file-upload-file-name"),
            j = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            qe = oe.attr("data-w-generic-error");
          if (
            (m ||
              ie.on("click keydown", function (O) {
                (O.type === "keydown" && O.which !== 13 && O.which !== 32) ||
                  (O.preventDefault(), A.click());
              }),
            ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            m)
          )
            A.on("click", function (O) {
              O.preventDefault();
            }),
              ie.on("click", function (O) {
                O.preventDefault();
              }),
              le.on("click", function (O) {
                O.preventDefault();
              });
          else {
            W.on("click keydown", function (O) {
              if (O.type === "keydown") {
                if (O.which !== 13 && O.which !== 32) return;
                O.preventDefault();
              }
              A.removeAttr("data-value"),
                A.val(""),
                Q.html(""),
                _.toggle(!0),
                G.toggle(!1),
                ie.focus();
            }),
              A.on("change", function (O) {
                (p = O.target && O.target.files && O.target.files[0]),
                  p &&
                    (_.toggle(!1),
                    V.toggle(!1),
                    l.toggle(!0),
                    l.focus(),
                    Q.text(p.name),
                    R() || M(Y),
                    (Y.fileUploads[k].uploading = !0),
                    te(p, b));
              });
            var Xe = ie.outerHeight();
            A.height(Xe), A.width(1);
          }
          function f(O) {
            var N = O.responseJSON && O.responseJSON.msg,
              Z = qe;
            typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0
              ? (Z = de)
              : typeof N == "string" &&
                N.indexOf("MaxFileSizeError") === 0 &&
                (Z = j),
              oe.text(Z),
              A.removeAttr("data-value"),
              A.val(""),
              l.toggle(!1),
              _.toggle(!0),
              V.toggle(!0),
              V.focus(),
              (Y.fileUploads[k].uploading = !1),
              R() || q(Y);
          }
          function b(O, N) {
            if (O) return f(O);
            var Z = N.fileName,
              ae = N.postData,
              ge = N.fileId,
              z = N.s3Url;
            A.attr("data-value", ge), re(z, ae, p, Z, w);
          }
          function w(O) {
            if (O) return f(O);
            l.toggle(!1),
              G.css("display", "inline-block"),
              G.focus(),
              (Y.fileUploads[k].uploading = !1),
              R() || q(Y);
          }
          function R() {
            var O = (Y.fileUploads && Y.fileUploads.toArray()) || [];
            return O.some(function (N) {
              return N.uploading;
            });
          }
        }
        function te(k, Y) {
          var p = new URLSearchParams({ name: k.name, size: k.size });
          e.ajax({ type: "GET", url: `${I}?${p}`, crossDomain: !0 })
            .done(function (y) {
              Y(null, y);
            })
            .fail(function (y) {
              Y(y);
            });
        }
        function re(k, Y, p, y, _) {
          var l = new FormData();
          for (var G in Y) l.append(G, Y[G]);
          l.append("file", p, y),
            e
              .ajax({
                type: "POST",
                url: k,
                data: l,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                _(null);
              })
              .fail(function (V) {
                _(V);
              });
        }
        return r;
      })
    );
  });
  var W_ = c((nz, V_) => {
    "use strict";
    var St = Ge(),
      DV = br(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    St.define(
      "navbar",
      (V_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(window),
          i = e(document),
          a = t.debounce,
          s,
          u,
          d,
          h,
          g = St.env(),
          m = '<div class="w-nav-overlay" data-wf-ignore />',
          E = ".w-nav",
          T = "w--open",
          I = "w--nav-dropdown-open",
          D = "w--nav-dropdown-toggle-open",
          S = "w--nav-dropdown-list-open",
          L = "w--nav-link-open",
          C = DV.triggers,
          P = e();
        (r.ready = r.design = r.preview = q),
          (r.destroy = function () {
            (P = e()), M(), u && u.length && u.each(J);
          });
        function q() {
          (d = g && St.env("design")),
            (h = St.env("editor")),
            (s = e(document.body)),
            (u = i.find(E)),
            u.length && (u.each($), M(), X());
        }
        function M() {
          St.resize.off(K);
        }
        function X() {
          St.resize.on(K);
        }
        function K() {
          u.each(_);
        }
        function $(v, W) {
          var Q = e(W),
            j = e.data(W, E);
          j ||
            (j = e.data(W, E, {
              open: !1,
              el: Q,
              config: {},
              selectedIdx: -1,
            })),
            (j.menu = Q.find(".w-nav-menu")),
            (j.links = j.menu.find(".w-nav-link")),
            (j.dropdowns = j.menu.find(".w-dropdown")),
            (j.dropdownToggle = j.menu.find(".w-dropdown-toggle")),
            (j.dropdownList = j.menu.find(".w-dropdown-list")),
            (j.button = Q.find(".w-nav-button")),
            (j.container = Q.find(".w-container")),
            (j.overlayContainerId = "w-nav-overlay-" + v),
            (j.outside = p(j));
          var de = Q.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            j.button.attr("style", "-webkit-user-select: text;"),
            j.button.attr("aria-label") == null &&
              j.button.attr("aria-label", "menu"),
            j.button.attr("role", "button"),
            j.button.attr("tabindex", "0"),
            j.button.attr("aria-controls", j.overlayContainerId),
            j.button.attr("aria-haspopup", "menu"),
            j.button.attr("aria-expanded", "false"),
            j.el.off(E),
            j.button.off(E),
            j.menu.off(E),
            x(j),
            d
              ? (ee(j), j.el.on("setting" + E, F(j)))
              : (U(j),
                j.button.on("click" + E, k(j)),
                j.menu.on("click" + E, "a", Y(j)),
                j.button.on("keydown" + E, B(j)),
                j.el.on("keydown" + E, H(j))),
            _(v, W);
        }
        function J(v, W) {
          var Q = e.data(W, E);
          Q && (ee(Q), e.removeData(W, E));
        }
        function ee(v) {
          v.overlay && (oe(v, !0), v.overlay.remove(), (v.overlay = null));
        }
        function U(v) {
          v.overlay ||
            ((v.overlay = e(m).appendTo(v.el)),
            v.overlay.attr("id", v.overlayContainerId),
            (v.parent = v.menu.parent()),
            oe(v, !0));
        }
        function x(v) {
          var W = {},
            Q = v.config || {},
            j = (W.animation = v.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(j)),
            (W.animDirect = /left$/.test(j) ? -1 : 1),
            Q.animation !== j && v.open && t.defer(re, v),
            (W.easing = v.el.attr("data-easing") || "ease"),
            (W.easing2 = v.el.attr("data-easing2") || "ease");
          var de = v.el.attr("data-duration");
          (W.duration = de != null ? Number(de) : 400),
            (W.docHeight = v.el.attr("data-doc-height")),
            (v.config = W);
        }
        function F(v) {
          return function (W, Q) {
            Q = Q || {};
            var j = o.width();
            x(v),
              Q.open === !0 && ie(v, !0),
              Q.open === !1 && oe(v, !0),
              v.open &&
                t.defer(function () {
                  j !== o.width() && re(v);
                });
          };
        }
        function B(v) {
          return function (W) {
            switch (W.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return k(v)(), W.preventDefault(), W.stopPropagation();
              case Se.ESCAPE:
                return oe(v), W.preventDefault(), W.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return v.open
                  ? (W.keyCode === Se.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    te(v),
                    W.preventDefault(),
                    W.stopPropagation())
                  : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function H(v) {
          return function (W) {
            if (v.open)
              switch (
                ((v.selectedIdx = v.links.index(document.activeElement)),
                W.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    W.keyCode === Se.END
                      ? (v.selectedIdx = v.links.length - 1)
                      : (v.selectedIdx = 0),
                    te(v),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(v),
                    v.button.focus(),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (v.selectedIdx = Math.max(-1, v.selectedIdx - 1)),
                    te(v),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (v.selectedIdx = Math.min(
                      v.links.length - 1,
                      v.selectedIdx + 1
                    )),
                    te(v),
                    W.preventDefault(),
                    W.stopPropagation()
                  );
              }
          };
        }
        function te(v) {
          if (v.links[v.selectedIdx]) {
            var W = v.links[v.selectedIdx];
            W.focus(), Y(W);
          }
        }
        function re(v) {
          v.open && (oe(v, !0), ie(v, !0));
        }
        function k(v) {
          return a(function () {
            v.open ? oe(v) : ie(v);
          });
        }
        function Y(v) {
          return function (W) {
            var Q = e(this),
              j = Q.attr("href");
            if (!St.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            j && j.indexOf("#") === 0 && v.open && oe(v);
          };
        }
        function p(v) {
          return (
            v.outside && i.off("click" + E, v.outside),
            function (W) {
              var Q = e(W.target);
              (h && Q.closest(".w-editor-bem-EditorOverlay").length) || y(v, Q);
            }
          );
        }
        var y = a(function (v, W) {
          if (v.open) {
            var Q = W.closest(".w-nav-menu");
            v.menu.is(Q) || oe(v);
          }
        });
        function _(v, W) {
          var Q = e.data(W, E),
            j = (Q.collapsed = Q.button.css("display") !== "none");
          if ((Q.open && !j && !d && oe(Q, !0), Q.container.length)) {
            var de = G(Q);
            Q.links.each(de), Q.dropdowns.each(de);
          }
          Q.open && le(Q);
        }
        var l = "max-width";
        function G(v) {
          var W = v.container.css(l);
          return (
            W === "none" && (W = ""),
            function (Q, j) {
              (j = e(j)), j.css(l, ""), j.css(l) === "none" && j.css(l, W);
            }
          );
        }
        function V(v, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function A(v, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function ie(v, W) {
          if (v.open) return;
          (v.open = !0),
            v.menu.each(V),
            v.links.addClass(L),
            v.dropdowns.addClass(I),
            v.dropdownToggle.addClass(D),
            v.dropdownList.addClass(S),
            v.button.addClass(T);
          var Q = v.config,
            j = Q.animation;
          (j === "none" || !n.support.transform || Q.duration <= 0) && (W = !0);
          var de = le(v),
            qe = v.menu.outerHeight(!0),
            Xe = v.menu.outerWidth(!0),
            f = v.el.height(),
            b = v.el[0];
          if (
            (_(0, b),
            C.intro(0, b),
            St.redraw.up(),
            d || i.on("click" + E, v.outside),
            W)
          ) {
            O();
            return;
          }
          var w = "transform " + Q.duration + "ms " + Q.easing;
          if (
            (v.overlay &&
              ((P = v.menu.prev()), v.overlay.show().append(v.menu)),
            Q.animOver)
          ) {
            n(v.menu)
              .add(w)
              .set({ x: Q.animDirect * Xe, height: de })
              .start({ x: 0 })
              .then(O),
              v.overlay && v.overlay.width(Xe);
            return;
          }
          var R = f + qe;
          n(v.menu).add(w).set({ y: -R }).start({ y: 0 }).then(O);
          function O() {
            v.button.attr("aria-expanded", "true");
          }
        }
        function le(v) {
          var W = v.config,
            Q = W.docHeight ? i.height() : s.height();
          return (
            W.animOver
              ? v.menu.height(Q)
              : v.el.css("position") !== "fixed" && (Q -= v.el.outerHeight(!0)),
            v.overlay && v.overlay.height(Q),
            Q
          );
        }
        function oe(v, W) {
          if (!v.open) return;
          (v.open = !1), v.button.removeClass(T);
          var Q = v.config;
          if (
            ((Q.animation === "none" ||
              !n.support.transform ||
              Q.duration <= 0) &&
              (W = !0),
            C.outro(0, v.el[0]),
            i.off("click" + E, v.outside),
            W)
          ) {
            n(v.menu).stop(), b();
            return;
          }
          var j = "transform " + Q.duration + "ms " + Q.easing2,
            de = v.menu.outerHeight(!0),
            qe = v.menu.outerWidth(!0),
            Xe = v.el.height();
          if (Q.animOver) {
            n(v.menu)
              .add(j)
              .start({ x: qe * Q.animDirect })
              .then(b);
            return;
          }
          var f = Xe + de;
          n(v.menu).add(j).start({ y: -f }).then(b);
          function b() {
            v.menu.height(""),
              n(v.menu).set({ x: 0, y: 0 }),
              v.menu.each(A),
              v.links.removeClass(L),
              v.dropdowns.removeClass(I),
              v.dropdownToggle.removeClass(D),
              v.dropdownList.removeClass(S),
              v.overlay &&
                v.overlay.children().length &&
                (P.length ? v.menu.insertAfter(P) : v.menu.prependTo(v.parent),
                v.overlay.attr("style", "").hide()),
              v.el.triggerHandler("w-close"),
              v.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var B_ = c((iz, X_) => {
    "use strict";
    var Rt = Ge(),
      FV = br(),
      dt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      H_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Rt.define(
      "slider",
      (X_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          o = e(document),
          i,
          a,
          s = Rt.env(),
          u = ".w-slider",
          d = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          g = "w-slider-force-show",
          m = FV.triggers,
          E,
          T = !1;
        (r.ready = function () {
          (a = Rt.env("design")), I();
        }),
          (r.design = function () {
            (a = !0), setTimeout(I, 1e3);
          }),
          (r.preview = function () {
            (a = !1), I();
          }),
          (r.redraw = function () {
            (T = !0), I(), (T = !1);
          }),
          (r.destroy = D);
        function I() {
          (i = o.find(u)), i.length && (i.each(C), !E && (D(), S()));
        }
        function D() {
          Rt.resize.off(L), Rt.redraw.off(r.redraw);
        }
        function S() {
          Rt.resize.on(L), Rt.redraw.on(r.redraw);
        }
        function L() {
          i.filter(":visible").each(H);
        }
        function C(p, y) {
          var _ = e(y),
            l = e.data(y, u);
          l ||
            (l = e.data(y, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: _,
              config: {},
            })),
            (l.mask = _.children(".w-slider-mask")),
            (l.left = _.children(".w-slider-arrow-left")),
            (l.right = _.children(".w-slider-arrow-right")),
            (l.nav = _.children(".w-slider-nav")),
            (l.slides = l.mask.children(".w-slide")),
            l.slides.each(m.reset),
            T && (l.maskWidth = 0),
            _.attr("role") === void 0 && _.attr("role", "region"),
            _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
          var G = l.mask.attr("id");
          if (
            (G || ((G = "w-slider-mask-" + p), l.mask.attr("id", G)),
            !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(h).appendTo(l.mask)),
            l.left.attr("role", "button"),
            l.left.attr("tabindex", "0"),
            l.left.attr("aria-controls", G),
            l.left.attr("aria-label") === void 0 &&
              l.left.attr("aria-label", "previous slide"),
            l.right.attr("role", "button"),
            l.right.attr("tabindex", "0"),
            l.right.attr("aria-controls", G),
            l.right.attr("aria-label") === void 0 &&
              l.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            l.left.hide(), l.right.hide(), l.nav.hide(), (E = !0);
            return;
          }
          l.el.off(u),
            l.left.off(u),
            l.right.off(u),
            l.nav.off(u),
            P(l),
            a
              ? (l.el.on("setting" + u, x(l)), U(l), (l.hasTimer = !1))
              : (l.el.on("swipe" + u, x(l)),
                l.left.on("click" + u, K(l)),
                l.right.on("click" + u, $(l)),
                l.left.on("keydown" + u, X(l, K)),
                l.right.on("keydown" + u, X(l, $)),
                l.nav.on("keydown" + u, "> div", x(l)),
                l.config.autoplay &&
                  !l.hasTimer &&
                  ((l.hasTimer = !0), (l.timerCount = 1), ee(l)),
                l.el.on("mouseenter" + u, M(l, !0, "mouse")),
                l.el.on("focusin" + u, M(l, !0, "keyboard")),
                l.el.on("mouseleave" + u, M(l, !1, "mouse")),
                l.el.on("focusout" + u, M(l, !1, "keyboard"))),
            l.nav.on("click" + u, "> div", x(l)),
            s ||
              l.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var V = _.filter(":hidden");
          V.addClass(g);
          var A = _.parents(":hidden");
          A.addClass(g), T || H(p, y), V.removeClass(g), A.removeClass(g);
        }
        function P(p) {
          var y = {};
          (y.crossOver = 0),
            (y.animation = p.el.attr("data-animation") || "slide"),
            y.animation === "outin" &&
              ((y.animation = "cross"), (y.crossOver = 0.5)),
            (y.easing = p.el.attr("data-easing") || "ease");
          var _ = p.el.attr("data-duration");
          if (
            ((y.duration = _ != null ? parseInt(_, 10) : 500),
            q(p.el.attr("data-infinite")) && (y.infinite = !0),
            q(p.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
            q(p.el.attr("data-hide-arrows"))
              ? (y.hideArrows = !0)
              : p.config.hideArrows && (p.left.show(), p.right.show()),
            q(p.el.attr("data-autoplay")))
          ) {
            (y.autoplay = !0),
              (y.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3),
              (y.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10));
            var l = "mousedown" + u + " touchstart" + u;
            a ||
              p.el.off(l).one(l, function () {
                U(p);
              });
          }
          var G = p.right.width();
          (y.edge = G ? G + 40 : 100), (p.config = y);
        }
        function q(p) {
          return p === "1" || p === "true";
        }
        function M(p, y, _) {
          return function (l) {
            if (y) p.hasFocus[_] = y;
            else if (
              e.contains(p.el.get(0), l.relatedTarget) ||
              ((p.hasFocus[_] = y),
              (p.hasFocus.mouse && _ === "keyboard") ||
                (p.hasFocus.keyboard && _ === "mouse"))
            )
              return;
            y
              ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                p.hasTimer && U(p))
              : (p.ariaLiveLabel.attr("aria-live", "off"), p.hasTimer && ee(p));
          };
        }
        function X(p, y) {
          return function (_) {
            switch (_.keyCode) {
              case dt.SPACE:
              case dt.ENTER:
                return y(p)(), _.preventDefault(), _.stopPropagation();
            }
          };
        }
        function K(p) {
          return function () {
            B(p, { index: p.index - 1, vector: -1 });
          };
        }
        function $(p) {
          return function () {
            B(p, { index: p.index + 1, vector: 1 });
          };
        }
        function J(p, y) {
          var _ = null;
          y === p.slides.length && (I(), te(p)),
            t.each(p.anchors, function (l, G) {
              e(l.els).each(function (V, A) {
                e(A).index() === y && (_ = G);
              });
            }),
            _ != null && B(p, { index: _, immediate: !0 });
        }
        function ee(p) {
          U(p);
          var y = p.config,
            _ = y.timerMax;
          (_ && p.timerCount++ > _) ||
            (p.timerId = window.setTimeout(function () {
              p.timerId == null || a || ($(p)(), ee(p));
            }, y.delay));
        }
        function U(p) {
          window.clearTimeout(p.timerId), (p.timerId = null);
        }
        function x(p) {
          return function (y, _) {
            _ = _ || {};
            var l = p.config;
            if (a && y.type === "setting") {
              if (_.select === "prev") return K(p)();
              if (_.select === "next") return $(p)();
              if ((P(p), te(p), _.select == null)) return;
              J(p, _.select);
              return;
            }
            if (y.type === "swipe")
              return l.disableSwipe || Rt.env("editor")
                ? void 0
                : _.direction === "left"
                ? $(p)()
                : _.direction === "right"
                ? K(p)()
                : void 0;
            if (p.nav.has(y.target).length) {
              var G = e(y.target).index();
              if (
                (y.type === "click" && B(p, { index: G }), y.type === "keydown")
              )
                switch (y.keyCode) {
                  case dt.ENTER:
                  case dt.SPACE: {
                    B(p, { index: G }), y.preventDefault();
                    break;
                  }
                  case dt.ARROW_LEFT:
                  case dt.ARROW_UP: {
                    F(p.nav, Math.max(G - 1, 0)), y.preventDefault();
                    break;
                  }
                  case dt.ARROW_RIGHT:
                  case dt.ARROW_DOWN: {
                    F(p.nav, Math.min(G + 1, p.pages)), y.preventDefault();
                    break;
                  }
                  case dt.HOME: {
                    F(p.nav, 0), y.preventDefault();
                    break;
                  }
                  case dt.END: {
                    F(p.nav, p.pages), y.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function F(p, y) {
          var _ = p.children().eq(y).focus();
          p.children().not(_);
        }
        function B(p, y) {
          y = y || {};
          var _ = p.config,
            l = p.anchors;
          p.previous = p.index;
          var G = y.index,
            V = {};
          G < 0
            ? ((G = l.length - 1),
              _.infinite &&
                ((V.x = -p.endX), (V.from = 0), (V.to = l[0].width)))
            : G >= l.length &&
              ((G = 0),
              _.infinite &&
                ((V.x = l[l.length - 1].width),
                (V.from = -l[l.length - 1].x),
                (V.to = V.from - V.x))),
            (p.index = G);
          var A = p.nav
            .children()
            .eq(G)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          p.nav
            .children()
            .not(A)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            _.hideArrows &&
              (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
              p.index === 0 ? p.left.hide() : p.left.show());
          var ie = p.offsetX || 0,
            le = (p.offsetX = -l[p.index].x),
            oe = { x: le, opacity: 1, visibility: "" },
            v = e(l[p.index].els),
            W = e(l[p.previous] && l[p.previous].els),
            Q = p.slides.not(v),
            j = _.animation,
            de = _.easing,
            qe = Math.round(_.duration),
            Xe = y.vector || (p.index > p.previous ? 1 : -1),
            f = "opacity " + qe + "ms " + de,
            b = "transform " + qe + "ms " + de;
          if (
            (v.find(H_).removeAttr("tabindex"),
            v.removeAttr("aria-hidden"),
            v.find("*").removeAttr("aria-hidden"),
            Q.find(H_).attr("tabindex", "-1"),
            Q.attr("aria-hidden", "true"),
            Q.find("*").attr("aria-hidden", "true"),
            a || (v.each(m.intro), Q.each(m.outro)),
            y.immediate && !T)
          ) {
            n(v).set(oe), O();
            return;
          }
          if (p.index === p.previous) return;
          if (
            (a || p.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
            j === "cross")
          ) {
            var w = Math.round(qe - qe * _.crossOver),
              R = Math.round(qe - w);
            (f = "opacity " + w + "ms " + de),
              n(W).set({ visibility: "" }).add(f).start({ opacity: 0 }),
              n(v)
                .set({ visibility: "", x: le, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .wait(R)
                .then({ opacity: 1 })
                .then(O);
            return;
          }
          if (j === "fade") {
            n(W).set({ visibility: "" }).stop(),
              n(v)
                .set({ visibility: "", x: le, opacity: 0, zIndex: p.depth++ })
                .add(f)
                .start({ opacity: 1 })
                .then(O);
            return;
          }
          if (j === "over") {
            (oe = { x: p.endX }),
              n(W).set({ visibility: "" }).stop(),
              n(v)
                .set({
                  visibility: "",
                  zIndex: p.depth++,
                  x: le + l[p.index].width * Xe,
                })
                .add(b)
                .start({ x: le })
                .then(O);
            return;
          }
          _.infinite && V.x
            ? (n(p.slides.not(W))
                .set({ visibility: "", x: V.x })
                .add(b)
                .start({ x: le }),
              n(W).set({ visibility: "", x: V.from }).add(b).start({ x: V.to }),
              (p.shifted = W))
            : (_.infinite &&
                p.shifted &&
                (n(p.shifted).set({ visibility: "", x: ie }),
                (p.shifted = null)),
              n(p.slides).set({ visibility: "" }).add(b).start({ x: le }));
          function O() {
            (v = e(l[p.index].els)),
              (Q = p.slides.not(v)),
              j !== "slide" && (oe.visibility = "hidden"),
              n(Q).set(oe);
          }
        }
        function H(p, y) {
          var _ = e.data(y, u);
          if (_) {
            if (k(_)) return te(_);
            a && Y(_) && te(_);
          }
        }
        function te(p) {
          var y = 1,
            _ = 0,
            l = 0,
            G = 0,
            V = p.maskWidth,
            A = V - p.config.edge;
          A < 0 && (A = 0),
            (p.anchors = [{ els: [], x: 0, width: 0 }]),
            p.slides.each(function (le, oe) {
              l - _ > A &&
                (y++,
                (_ += V),
                (p.anchors[y - 1] = { els: [], x: l, width: 0 })),
                (G = e(oe).outerWidth(!0)),
                (l += G),
                (p.anchors[y - 1].width += G),
                p.anchors[y - 1].els.push(oe);
              var v = le + 1 + " of " + p.slides.length;
              e(oe).attr("aria-label", v), e(oe).attr("role", "group");
            }),
            (p.endX = l),
            a && (p.pages = null),
            p.nav.length && p.pages !== y && ((p.pages = y), re(p));
          var ie = p.index;
          ie >= y && (ie = y - 1), B(p, { immediate: !0, index: ie });
        }
        function re(p) {
          var y = [],
            _,
            l = p.el.attr("data-nav-spacing");
          l && (l = parseFloat(l) + "px");
          for (var G = 0, V = p.pages; G < V; G++)
            (_ = e(d)),
              _.attr("aria-label", "Show slide " + (G + 1) + " of " + V)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              p.nav.hasClass("w-num") && _.text(G + 1),
              l != null && _.css({ "margin-left": l, "margin-right": l }),
              y.push(_);
          p.nav.empty().append(y);
        }
        function k(p) {
          var y = p.mask.width();
          return p.maskWidth !== y ? ((p.maskWidth = y), !0) : !1;
        }
        function Y(p) {
          var y = 0;
          return (
            p.slides.each(function (_, l) {
              y += e(l).outerWidth(!0);
            }),
            p.slidesWidth !== y ? ((p.slidesWidth = y), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Hs();
  Bs();
  zs();
  $s();
  br();
  S_();
  C_();
  N_();
  M_();
  F_();
  k_();
  W_();
  B_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1587759733054,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-3",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1587759733054,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588007258106,
    },
    "e-8": {
      id: "e-8",
      name: "",
      animationType: "custom",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-7",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e90",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e90",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588007258106,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|209c9420-a17b-a7e0-c2ce-ff5b99aa054a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|209c9420-a17b-a7e0-c2ce-ff5b99aa054a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111243977,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-9",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|209c9420-a17b-a7e0-c2ce-ff5b99aa054a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|209c9420-a17b-a7e0-c2ce-ff5b99aa054a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111243977,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|c85c9545-df51-5365-aea3-2241216f1c0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|c85c9545-df51-5365-aea3-2241216f1c0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111727122,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-11",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|c85c9545-df51-5365-aea3-2241216f1c0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|c85c9545-df51-5365-aea3-2241216f1c0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111727122,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|5dfbc62a-8a10-62b1-5939-a11361a3c57e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|5dfbc62a-8a10-62b1-5939-a11361a3c57e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111742735,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|5dfbc62a-8a10-62b1-5939-a11361a3c57e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|5dfbc62a-8a10-62b1-5939-a11361a3c57e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111742760,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-16",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|21c09f32-933c-c085-22ca-cab685cf20d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|21c09f32-933c-c085-22ca-cab685cf20d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111763129,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-15",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|21c09f32-933c-c085-22ca-cab685cf20d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|21c09f32-933c-c085-22ca-cab685cf20d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111763154,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0904b458-ab53-e901-d1cb-a0f411dd2aa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0904b458-ab53-e901-d1cb-a0f411dd2aa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111777108,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-17",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0904b458-ab53-e901-d1cb-a0f411dd2aa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0904b458-ab53-e901-d1cb-a0f411dd2aa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111777133,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|c50192fa-d78b-e5fb-d3ae-7ae27265a612",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|c50192fa-d78b-e5fb-d3ae-7ae27265a612",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111786863,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-19",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|c50192fa-d78b-e5fb-d3ae-7ae27265a612",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|c50192fa-d78b-e5fb-d3ae-7ae27265a612",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111786889,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111920768,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-21",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588111920769,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588112215171,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-23",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588112215172,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588112237530,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-25",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588112237531,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588115467015,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-27",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588115467017,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d3194aea-7f3b-5be9-7556-704975093e43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d3194aea-7f3b-5be9-7556-704975093e43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588115490657,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-29",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d3194aea-7f3b-5be9-7556-704975093e43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d3194aea-7f3b-5be9-7556-704975093e43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588115490658,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-36" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588118703723,
    },
    "e-37": {
      id: "e-37",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-38" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e8e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e8e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588118720364,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-40" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e91",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e91",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588118735179,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-42" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7ebc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7ebc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588118746543,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-46" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|52f4649c-97af-c9f9-2095-914ea0ec601f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|52f4649c-97af-c9f9-2095-914ea0ec601f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588118798128,
    },
    "e-47": {
      id: "e-47",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|a77f0504-9802-df71-80a6-c108feb9d48f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|a77f0504-9802-df71-80a6-c108feb9d48f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588118819770,
    },
    "e-49": {
      id: "e-49",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-50" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|73e97f72-9721-1c95-286c-1f5a11b8eff0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|73e97f72-9721-1c95-286c-1f5a11b8eff0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588118833345,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-56" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|55e258e7-b304-4e5f-c0ac-d0e503ae3f44",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|55e258e7-b304-4e5f-c0ac-d0e503ae3f44",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119075994,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-58" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|05d17d09-85f2-691a-61f5-aade84214679",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|05d17d09-85f2-691a-61f5-aade84214679",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119087974,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|1e8650f5-48eb-31e1-7cc4-439f75f2b27e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|1e8650f5-48eb-31e1-7cc4-439f75f2b27e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119102689,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-62" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|122825ec-9b31-105e-794c-c2f6decea48a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|122825ec-9b31-105e-794c-c2f6decea48a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119117038,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-66" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|da584d37-fb02-73fc-8bc3-23b9f5e469d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|da584d37-fb02-73fc-8bc3-23b9f5e469d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119154054,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-68" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|1006af9c-48da-d069-8a92-addeb8ac0452",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|1006af9c-48da-d069-8a92-addeb8ac0452",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119176144,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-70" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|fd8b8d96-1e6c-596b-572b-36dd35c45371",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|fd8b8d96-1e6c-596b-572b-36dd35c45371",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119453508,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-72" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|10a2a5c7-68cf-dd3d-c387-871bbef0007b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|10a2a5c7-68cf-dd3d-c387-871bbef0007b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119466038,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|30d812be-0ce2-5c48-986f-26ee3e368c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|30d812be-0ce2-5c48-986f-26ee3e368c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1588119797493,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-76" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|85611a49-72a3-dcac-2c19-7a91d0598bcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|85611a49-72a3-dcac-2c19-7a91d0598bcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119842952,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-78" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|64329ad2-2060-032c-d0e0-d45a6222766d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|64329ad2-2060-032c-d0e0-d45a6222766d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119855771,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-80" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|96e5355d-1aa2-dcf7-6321-7c5ecb02a316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|96e5355d-1aa2-dcf7-6321-7c5ecb02a316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119886310,
    },
    "e-85": {
      id: "e-85",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-86" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|199a8f61-9452-5281-4b82-cf6ee8908147",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|199a8f61-9452-5281-4b82-cf6ee8908147",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119967994,
    },
    "e-87": {
      id: "e-87",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-88" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|80cb1b03-af53-88ec-5cbe-1a03cae73ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|80cb1b03-af53-88ec-5cbe-1a03cae73ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119985706,
    },
    "e-89": {
      id: "e-89",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-90" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|736bea12-7984-5efe-397d-43f3fd15af9a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|736bea12-7984-5efe-397d-43f3fd15af9a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588119996130,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-92" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d3b34cd9-d602-9ba6-c3e5-e231244213c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d3b34cd9-d602-9ba6-c3e5-e231244213c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120007966,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-94" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0132db5d-8291-3e76-57ab-273103a331d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0132db5d-8291-3e76-57ab-273103a331d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120131564,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-96" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|852935fb-12eb-eac8-410f-d3eaeedca4c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|852935fb-12eb-eac8-410f-d3eaeedca4c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120149381,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-98" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0152fd7d-ea69-7c93-a2b7-0881c9bc826d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0152fd7d-ea69-7c93-a2b7-0881c9bc826d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120159860,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-100" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|5e2ed0f6-cd50-2c6e-b438-f3881990bc13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|5e2ed0f6-cd50-2c6e-b438-f3881990bc13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120171564,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|5e2ed0f6-cd50-2c6e-b438-f3881990bc16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|5e2ed0f6-cd50-2c6e-b438-f3881990bc16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120196476,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|7f381944-d4af-dacf-7f7a-bcc1982169e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|7f381944-d4af-dacf-7f7a-bcc1982169e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120414698,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|80175aed-eba7-2168-d82e-f55aa3aa574c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|80175aed-eba7-2168-d82e-f55aa3aa574c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120424847,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|22c72782-81c4-d904-6bbc-012eaba30403",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|22c72782-81c4-d904-6bbc-012eaba30403",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120433894,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|c30cdbe1-1381-c4a5-7121-cbcf6a331f3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|c30cdbe1-1381-c4a5-7121-cbcf6a331f3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120483188,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|15ca911e-ed74-d92b-cb14-e6601310bc14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120571953,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|0aad9e4a-2f28-ef61-fa88-6502c5fc44f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120628433,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|57976fa4-c71d-b779-1c5f-1fab579634d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|57976fa4-c71d-b779-1c5f-1fab579634d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120668319,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860734",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860734",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120760623,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860736",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860736",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120770409,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc9860738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120780969,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc986073a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f8c2afdc-1cf9-b569-2eea-064bc986073a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120796772,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3af6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3af6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588120843972,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-136",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588121145730,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-138",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|7188dd76-ebc2-1455-187b-f752aef1373d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|7188dd76-ebc2-1455-187b-f752aef1373d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588172650825,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3af7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3af7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175370253,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3afb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|2c19d82a-117b-5342-eefa-a9f83e5d3afb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175380264,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|447a19a1-e723-719e-c940-05c74edb3f79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|447a19a1-e723-719e-c940-05c74edb3f79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175399314,
    },
    "e-147": {
      id: "e-147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|8b383cfa-e58e-1365-8ef2-6194d1e3fc2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|8b383cfa-e58e-1365-8ef2-6194d1e3fc2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175423911,
    },
    "e-149": {
      id: "e-149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d3f7cf8c-9d12-3018-25e2-ba4217ab676e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d3f7cf8c-9d12-3018-25e2-ba4217ab676e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175437415,
    },
    "e-151": {
      id: "e-151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d3811929-bad4-44ac-3656-33645adf25a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d3811929-bad4-44ac-3656-33645adf25a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175448487,
    },
    "e-153": {
      id: "e-153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|42d05f73-00ef-88db-569c-f7f87cd2994f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|42d05f73-00ef-88db-569c-f7f87cd2994f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175471697,
    },
    "e-155": {
      id: "e-155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|da4fd85d-9893-61f3-a434-f1d78e027df0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|da4fd85d-9893-61f3-a434-f1d78e027df0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175486438,
    },
    "e-157": {
      id: "e-157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-158" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|2e0896ae-42c8-d128-3baa-04e41c950c5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|2e0896ae-42c8-d128-3baa-04e41c950c5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1588175506593,
    },
    "e-159": {
      id: "e-159",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-160" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|dcd2fe7f-7e79-95ca-a960-fc0065ffb312",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|dcd2fe7f-7e79-95ca-a960-fc0065ffb312",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175528719,
    },
    "e-161": {
      id: "e-161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-162" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "1356e90d-e3a3-2953-9ae6-a897ae2f46c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "1356e90d-e3a3-2953-9ae6-a897ae2f46c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175593826,
    },
    "e-163": {
      id: "e-163",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-164" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b2b8f273-df9f-c566-b5ab-4e3c6292ce80",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b2b8f273-df9f-c566-b5ab-4e3c6292ce80",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175605610,
    },
    "e-165": {
      id: "e-165",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-166" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "a42ec7e9-0e31-e5c3-333c-31b3a369c461",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "a42ec7e9-0e31-e5c3-333c-31b3a369c461",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175617630,
    },
    "e-167": {
      id: "e-167",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-168" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "bca2410d-2fe3-00c9-7437-9a21dbd43314",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "bca2410d-2fe3-00c9-7437-9a21dbd43314",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175629058,
    },
    "e-169": {
      id: "e-169",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-170" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "cb530cf8-7453-4c59-0836-7d0f534fa824",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "cb530cf8-7453-4c59-0836-7d0f534fa824",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175648197,
    },
    "e-171": {
      id: "e-171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "34997786-7f58-31f6-b6ed-7a93659a03f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "34997786-7f58-31f6-b6ed-7a93659a03f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175666385,
    },
    "e-173": {
      id: "e-173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "fe525290-73ae-0592-17ac-2b499ec0090b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "fe525290-73ae-0592-17ac-2b499ec0090b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588175686345,
    },
    "e-175": {
      id: "e-175",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|e9d1bd8a-a4f7-af7e-c7a5-d11d4c2c5c8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|e9d1bd8a-a4f7-af7e-c7a5-d11d4c2c5c8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588176003507,
    },
    "e-177": {
      id: "e-177",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-178",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|566697c8-fc94-48dc-9b6c-0fd4e8e07e8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|566697c8-fc94-48dc-9b6c-0fd4e8e07e8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588176940773,
    },
    "e-179": {
      id: "e-179",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-180",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|109614e4-5553-0561-4bab-e90e5e0bdceb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|109614e4-5553-0561-4bab-e90e5e0bdceb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588177040168,
    },
    "e-181": {
      id: "e-181",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-182",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|87eecbfc-d958-cef7-3439-4f46db32fce8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|87eecbfc-d958-cef7-3439-4f46db32fce8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588177228151,
    },
    "e-183": {
      id: "e-183",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-184" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|92bdcaf9-acb2-9584-865e-65d4035edfbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|92bdcaf9-acb2-9584-865e-65d4035edfbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588177258548,
    },
    "e-185": {
      id: "e-185",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-186" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|dd15b613-823b-3afb-e7c1-df39168149bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|dd15b613-823b-3afb-e7c1-df39168149bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588177282469,
    },
    "e-187": {
      id: "e-187",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-188" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 750,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588177294717,
    },
    "e-201": {
      id: "e-201",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-202",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-202": {
      id: "e-202",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-201",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|1b1f4da4-d8a9-61ac-2459-1c7a98df3e56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-203": {
      id: "e-203",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-204",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-204": {
      id: "e-204",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-203",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-205": {
      id: "e-205",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-206",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-206": {
      id: "e-206",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-205",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-207": {
      id: "e-207",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-208",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-208": {
      id: "e-208",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-207",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-209": {
      id: "e-209",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-210",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|d3194aea-7f3b-5be9-7556-704975093e43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|d3194aea-7f3b-5be9-7556-704975093e43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-210": {
      id: "e-210",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-209",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|d3194aea-7f3b-5be9-7556-704975093e43",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|d3194aea-7f3b-5be9-7556-704975093e43",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-213": {
      id: "e-213",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-214" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|a77f0504-9802-df71-80a6-c108feb9d48f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|a77f0504-9802-df71-80a6-c108feb9d48f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-215": {
      id: "e-215",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-216" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|73e97f72-9721-1c95-286c-1f5a11b8eff0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|73e97f72-9721-1c95-286c-1f5a11b8eff0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-223": {
      id: "e-223",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-224" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|05d17d09-85f2-691a-61f5-aade84214679",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|05d17d09-85f2-691a-61f5-aade84214679",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-225": {
      id: "e-225",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-226" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|1e8650f5-48eb-31e1-7cc4-439f75f2b27e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|1e8650f5-48eb-31e1-7cc4-439f75f2b27e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-227": {
      id: "e-227",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-228" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|122825ec-9b31-105e-794c-c2f6decea48a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|122825ec-9b31-105e-794c-c2f6decea48a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-229": {
      id: "e-229",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-230" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|da584d37-fb02-73fc-8bc3-23b9f5e469d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|da584d37-fb02-73fc-8bc3-23b9f5e469d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-231": {
      id: "e-231",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-232" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|1006af9c-48da-d069-8a92-addeb8ac0452",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|1006af9c-48da-d069-8a92-addeb8ac0452",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-233": {
      id: "e-233",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-234" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|fd8b8d96-1e6c-596b-572b-36dd35c45371",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|fd8b8d96-1e6c-596b-572b-36dd35c45371",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-235": {
      id: "e-235",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-236" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|10a2a5c7-68cf-dd3d-c387-871bbef0007b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|10a2a5c7-68cf-dd3d-c387-871bbef0007b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-237": {
      id: "e-237",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-238" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|30d812be-0ce2-5c48-986f-26ee3e368c1f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|30d812be-0ce2-5c48-986f-26ee3e368c1f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-239": {
      id: "e-239",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-240" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|85611a49-72a3-dcac-2c19-7a91d0598bcd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|85611a49-72a3-dcac-2c19-7a91d0598bcd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-241": {
      id: "e-241",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-242" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|64329ad2-2060-032c-d0e0-d45a6222766d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|64329ad2-2060-032c-d0e0-d45a6222766d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-243": {
      id: "e-243",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-244" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|96e5355d-1aa2-dcf7-6321-7c5ecb02a316",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|96e5355d-1aa2-dcf7-6321-7c5ecb02a316",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-247": {
      id: "e-247",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-248" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|199a8f61-9452-5281-4b82-cf6ee8908147",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|199a8f61-9452-5281-4b82-cf6ee8908147",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-249": {
      id: "e-249",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-250" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|80cb1b03-af53-88ec-5cbe-1a03cae73ca7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|80cb1b03-af53-88ec-5cbe-1a03cae73ca7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-251": {
      id: "e-251",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-252" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|736bea12-7984-5efe-397d-43f3fd15af9a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|736bea12-7984-5efe-397d-43f3fd15af9a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-253": {
      id: "e-253",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-254" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|d3b34cd9-d602-9ba6-c3e5-e231244213c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|d3b34cd9-d602-9ba6-c3e5-e231244213c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-255": {
      id: "e-255",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-256" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|0132db5d-8291-3e76-57ab-273103a331d6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|0132db5d-8291-3e76-57ab-273103a331d6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-257": {
      id: "e-257",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-258" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|852935fb-12eb-eac8-410f-d3eaeedca4c2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|852935fb-12eb-eac8-410f-d3eaeedca4c2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-259": {
      id: "e-259",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-260" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|0152fd7d-ea69-7c93-a2b7-0881c9bc826d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|0152fd7d-ea69-7c93-a2b7-0881c9bc826d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-261": {
      id: "e-261",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-262" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|5e2ed0f6-cd50-2c6e-b438-f3881990bc13",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|5e2ed0f6-cd50-2c6e-b438-f3881990bc13",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-263": {
      id: "e-263",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-264" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|5e2ed0f6-cd50-2c6e-b438-f3881990bc16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|5e2ed0f6-cd50-2c6e-b438-f3881990bc16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-265": {
      id: "e-265",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-266" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|7f381944-d4af-dacf-7f7a-bcc1982169e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|7f381944-d4af-dacf-7f7a-bcc1982169e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-267": {
      id: "e-267",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-268" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|80175aed-eba7-2168-d82e-f55aa3aa574c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|80175aed-eba7-2168-d82e-f55aa3aa574c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-269": {
      id: "e-269",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-270" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|22c72782-81c4-d904-6bbc-012eaba30403",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|22c72782-81c4-d904-6bbc-012eaba30403",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-271": {
      id: "e-271",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-272" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|c30cdbe1-1381-c4a5-7121-cbcf6a331f3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|c30cdbe1-1381-c4a5-7121-cbcf6a331f3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-273": {
      id: "e-273",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-274" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc14",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|15ca911e-ed74-d92b-cb14-e6601310bc14",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-275": {
      id: "e-275",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-276" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|0aad9e4a-2f28-ef61-fa88-6502c5fc44f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-277": {
      id: "e-277",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-278" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|57976fa4-c71d-b779-1c5f-1fab579634d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|57976fa4-c71d-b779-1c5f-1fab579634d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-281": {
      id: "e-281",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-282" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860734",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860734",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-283": {
      id: "e-283",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-284" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860736",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860736",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-285": {
      id: "e-285",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-286" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860738",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f8c2afdc-1cf9-b569-2eea-064bc9860738",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-289": {
      id: "e-289",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-290" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3af6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3af6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-293": {
      id: "e-293",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-294",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|7188dd76-ebc2-1455-187b-f752aef1373d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|7188dd76-ebc2-1455-187b-f752aef1373d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-297": {
      id: "e-297",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-298" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3af7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3af7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-299": {
      id: "e-299",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-300" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3afb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|2c19d82a-117b-5342-eefa-a9f83e5d3afb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-301": {
      id: "e-301",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-302" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|447a19a1-e723-719e-c940-05c74edb3f79",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|447a19a1-e723-719e-c940-05c74edb3f79",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-317": {
      id: "e-317",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-318",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|e9d1bd8a-a4f7-af7e-c7a5-d11d4c2c5c8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|e9d1bd8a-a4f7-af7e-c7a5-d11d4c2c5c8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-319": {
      id: "e-319",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-320",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|566697c8-fc94-48dc-9b6c-0fd4e8e07e8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|566697c8-fc94-48dc-9b6c-0fd4e8e07e8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-321": {
      id: "e-321",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-322",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|109614e4-5553-0561-4bab-e90e5e0bdceb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|109614e4-5553-0561-4bab-e90e5e0bdceb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-323": {
      id: "e-323",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-324",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|87eecbfc-d958-cef7-3439-4f46db32fce8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|87eecbfc-d958-cef7-3439-4f46db32fce8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588178459943,
    },
    "e-325": {
      id: "e-325",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-326" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|92bdcaf9-acb2-9584-865e-65d4035edfbb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|92bdcaf9-acb2-9584-865e-65d4035edfbb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-327": {
      id: "e-327",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-328" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|dd15b613-823b-3afb-e7c1-df39168149bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|dd15b613-823b-3afb-e7c1-df39168149bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-329": {
      id: "e-329",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-330" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|f981e1c3-e436-68b6-9d43-1b0d4ca1d7ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 750,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588178459943,
    },
    "e-331": {
      id: "e-331",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-332" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|d877af2e-e5d6-06b8-3659-141c5bf4f6f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|d877af2e-e5d6-06b8-3659-141c5bf4f6f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588180292464,
    },
    "e-333": {
      id: "e-333",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-334" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|d877af2e-e5d6-06b8-3659-141c5bf4f6f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|d877af2e-e5d6-06b8-3659-141c5bf4f6f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588180391157,
    },
    "e-335": {
      id: "e-335",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-336" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd84b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd84b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588185660950,
    },
    "e-337": {
      id: "e-337",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-338" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd84c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd84c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588185660950,
    },
    "e-339": {
      id: "e-339",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-340" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd850",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|b9524dee-c696-f754-8909-3db68f3cd850",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588185660950,
    },
    "e-341": {
      id: "e-341",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-342",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588187029600,
    },
    "e-342": {
      id: "e-342",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-341",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588187029625,
    },
    "e-343": {
      id: "e-343",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-344",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588187400977,
    },
    "e-344": {
      id: "e-344",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-343",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588187400977,
    },
    "e-347": {
      id: "e-347",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-348" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecadc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecadc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588194999250,
    },
    "e-349": {
      id: "e-349",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-350" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecadf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecadf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195013052,
    },
    "e-351": {
      id: "e-351",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-352" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecae2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195030587,
    },
    "e-353": {
      id: "e-353",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-354" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195044308,
    },
    "e-355": {
      id: "e-355",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-356" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195064668,
    },
    "e-357": {
      id: "e-357",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-358" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb11",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb11",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195076391,
    },
    "e-361": {
      id: "e-361",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-362" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb17",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588195107610,
    },
    "e-363": {
      id: "e-363",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-364" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|917332d2-2326-7969-c909-ba075a85de0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|917332d2-2326-7969-c909-ba075a85de0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 2000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588195186141,
    },
    "e-365": {
      id: "e-365",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-366" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|4f2ad711-c3db-e340-f95c-536e579b450c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|4f2ad711-c3db-e340-f95c-536e579b450c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588195206799,
    },
    "e-367": {
      id: "e-367",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-368" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|bb696a03-9b4f-5aae-ba0d-0c96a9ed4d05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|bb696a03-9b4f-5aae-ba0d-0c96a9ed4d05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588195240265,
    },
    "e-369": {
      id: "e-369",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-370" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|7b8941f8-90eb-a3c0-71d3-e760d9d6ab31",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|7b8941f8-90eb-a3c0-71d3-e760d9d6ab31",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 2200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588195257906,
    },
    "e-371": {
      id: "e-371",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-372" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|9f88ac01-c3cc-6f11-edff-4e58f9d90018",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|9f88ac01-c3cc-6f11-edff-4e58f9d90018",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 2300,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588195274239,
    },
    "e-373": {
      id: "e-373",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-374" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|a2d66eaf-f192-92ab-a86d-555aaaf29010",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|a2d66eaf-f192-92ab-a86d-555aaaf29010",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588195651565,
    },
    "e-375": {
      id: "e-375",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-376" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|62bbabc6-0df7-b371-8d47-ddb0b47a01b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|62bbabc6-0df7-b371-8d47-ddb0b47a01b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588195672440,
    },
    "e-377": {
      id: "e-377",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-378" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|ce3d7133-cc00-9813-3a6b-059112494494",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588195727423,
    },
    "e-379": {
      id: "e-379",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-380" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|401dfc05-35a8-f394-23ce-46554541d59d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588195743671,
    },
    "e-381": {
      id: "e-381",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-382" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409973",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409973",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196155988,
    },
    "e-383": {
      id: "e-383",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-384" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409974",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409974",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196155988,
    },
    "e-385": {
      id: "e-385",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-386" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409978",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409978",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196155988,
    },
    "e-387": {
      id: "e-387",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-388" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f940997a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f940997a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196155988,
    },
    "e-389": {
      id: "e-389",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-390",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|6b6cd221-01c3-f763-a1eb-4f37f9409983",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588196155988,
    },
    "e-391": {
      id: "e-391",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-392" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196965364,
    },
    "e-393": {
      id: "e-393",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-394" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196965364,
    },
    "e-395": {
      id: "e-395",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-396" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196965364,
    },
    "e-397": {
      id: "e-397",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-398" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196965364,
    },
    "e-399": {
      id: "e-399",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-400" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e10",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|1495b846-cdf6-cab9-19d2-5267389d1e10",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588196965364,
    },
    "e-401": {
      id: "e-401",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-402" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|e39e5a57-7253-d86c-f0b5-616fe84152e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|e39e5a57-7253-d86c-f0b5-616fe84152e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588197449872,
    },
    "e-403": {
      id: "e-403",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-404" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|e39e5a57-7253-d86c-f0b5-616fe84152ea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|e39e5a57-7253-d86c-f0b5-616fe84152ea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588197449872,
    },
    "e-405": {
      id: "e-405",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-406" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588198229820,
    },
    "e-407": {
      id: "e-407",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-408" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192b0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192b0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588198229820,
    },
    "e-409": {
      id: "e-409",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-410" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192b4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|99a4fa71-5454-3014-2148-29da242192b4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588198229820,
    },
    "e-411": {
      id: "e-411",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-412" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8c6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8c6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588199566838,
    },
    "e-413": {
      id: "e-413",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-414" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588199566838,
    },
    "e-415": {
      id: "e-415",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-416" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|b95eb6d8-8867-b6aa-d811-2de968a8b8cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588199566838,
    },
    "e-417": {
      id: "e-417",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-418" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5a7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5a7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588200581524,
    },
    "e-419": {
      id: "e-419",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-420" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588200581524,
    },
    "e-421": {
      id: "e-421",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-422" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|7da115c3-a80d-8fd0-75f6-249779a5b5ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588200581524,
    },
    "e-423": {
      id: "e-423",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-424" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|f7377220-1f91-0aad-c88b-93e2ba5aef1d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|f7377220-1f91-0aad-c88b-93e2ba5aef1d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588201022628,
    },
    "e-425": {
      id: "e-425",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-426" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|5e0134e7-a5e9-6474-62ad-bfed6c02b0db",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|5e0134e7-a5e9-6474-62ad-bfed6c02b0db",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588201436173,
    },
    "e-427": {
      id: "e-427",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-428" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|373f6cca-ee9b-0994-7afa-bbfbefb2f611",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|373f6cca-ee9b-0994-7afa-bbfbefb2f611",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588201463911,
    },
    "e-429": {
      id: "e-429",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-430" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9ae3b4d2ee1a3d9c48e64|d00c4b4c-06ea-9ae6-0f11-292788ad2599",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9ae3b4d2ee1a3d9c48e64|d00c4b4c-06ea-9ae6-0f11-292788ad2599",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588202576515,
    },
    "e-431": {
      id: "e-431",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-432" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfd4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfd4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588202674929,
    },
    "e-433": {
      id: "e-433",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-434" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfd6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfd6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588202674929,
    },
    "e-435": {
      id: "e-435",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-436" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|dec5fbf4-d6e4-6ca8-ab4c-773da547dfda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588202674929,
    },
    "e-437": {
      id: "e-437",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-438" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f2d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f2d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588206795133,
    },
    "e-439": {
      id: "e-439",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-440" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588206795133,
    },
    "e-441": {
      id: "e-441",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-442" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f32",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|75dccbb8-b663-4d6c-cf8f-faf208107f32",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588206795133,
    },
    "e-443": {
      id: "e-443",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-444" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588264556324,
    },
    "e-445": {
      id: "e-445",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-446" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588264556324,
    },
    "e-447": {
      id: "e-447",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-448" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|bb7f7570-f3cd-2a07-7a00-f8a0a591b1c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588264556324,
    },
    "e-449": {
      id: "e-449",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-450",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264666507,
    },
    "e-450": {
      id: "e-450",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-449",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264666507,
    },
    "e-451": {
      id: "e-451",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-452",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264758032,
    },
    "e-452": {
      id: "e-452",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-451",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264758032,
    },
    "e-453": {
      id: "e-453",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-454",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264791516,
    },
    "e-454": {
      id: "e-454",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-453",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264791516,
    },
    "e-455": {
      id: "e-455",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-456",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264842721,
    },
    "e-456": {
      id: "e-456",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-455",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264842721,
    },
    "e-457": {
      id: "e-457",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-458",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264866828,
    },
    "e-458": {
      id: "e-458",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-457",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264866828,
    },
    "e-459": {
      id: "e-459",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-460",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264897454,
    },
    "e-460": {
      id: "e-460",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-459",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588264897454,
    },
    "e-467": {
      id: "e-467",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-468" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588265676908,
    },
    "e-469": {
      id: "e-469",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-470" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d18",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d18",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588265676908,
    },
    "e-471": {
      id: "e-471",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-472" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d1c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d1c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588265676908,
    },
    "e-473": {
      id: "e-473",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-474" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|771cc951-4244-c117-d150-a476ae5f7d1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588265676908,
    },
    "e-475": {
      id: "e-475",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-476" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b851",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b851",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588269657026,
    },
    "e-477": {
      id: "e-477",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-478" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b852",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b852",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588269657026,
    },
    "e-479": {
      id: "e-479",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-480" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b856",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b856",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588269657026,
    },
    "e-483": {
      id: "e-483",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-484",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b861",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b861",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588269657026,
    },
    "e-485": {
      id: "e-485",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-486" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588271815223,
    },
    "e-487": {
      id: "e-487",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-488" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588271815223,
    },
    "e-489": {
      id: "e-489",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-490" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0bdd8efc-c095-06db-1016-ea42a4004ce9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588271815223,
    },
    "e-491": {
      id: "e-491",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-492" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|928d894b-db73-81ee-a2d6-24034690ad33",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|928d894b-db73-81ee-a2d6-24034690ad33",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 40,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1588272530303,
    },
    "e-493": {
      id: "e-493",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-494" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588272765927,
    },
    "e-495": {
      id: "e-495",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-496" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e04",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e04",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588272765927,
    },
    "e-497": {
      id: "e-497",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-498" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e08",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e08",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588272765927,
    },
    "e-503": {
      id: "e-503",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-504",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588273629594,
    },
    "e-505": {
      id: "e-505",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-506" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273629594,
    },
    "e-507": {
      id: "e-507",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-508" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d8f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273629594,
    },
    "e-509": {
      id: "e-509",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-510" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d93",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d93",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273629594,
    },
    "e-511": {
      id: "e-511",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-512" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f3c0ca5a-e55b-4cd0-79eb-f0b0a0cd8d95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273629594,
    },
    "e-513": {
      id: "e-513",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-514" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273957374,
    },
    "e-515": {
      id: "e-515",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-516" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273957374,
    },
    "e-517": {
      id: "e-517",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-518" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca8d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273957374,
    },
    "e-519": {
      id: "e-519",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-520" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca96",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|50a50db8-4ab9-59ab-5c41-dc3a3e99ca96",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588273957374,
    },
    "e-521": {
      id: "e-521",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-522" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588274988356,
    },
    "e-523": {
      id: "e-523",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-524" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588274988356,
    },
    "e-525": {
      id: "e-525",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-526" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3882a1b6-d2cf-09a1-dec0-3e86ddea42e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588274988356,
    },
    "e-527": {
      id: "e-527",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-528" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded9289",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded9289",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588276145453,
    },
    "e-529": {
      id: "e-529",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-530" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded928a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded928a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588276145453,
    },
    "e-531": {
      id: "e-531",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-532" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded928e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|0341e6a4-ae46-0d3a-4cfb-b92a5ded928e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588276145453,
    },
    "e-533": {
      id: "e-533",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-534" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588277032142,
    },
    "e-535": {
      id: "e-535",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-536" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588277032142,
    },
    "e-537": {
      id: "e-537",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-538" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cf3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|01947e90-ff81-d7d3-b1ca-1cdf8bd23cf3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588277032142,
    },
    "e-539": {
      id: "e-539",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-540" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e64",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e64",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588277099270,
    },
    "e-541": {
      id: "e-541",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-542" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588277099270,
    },
    "e-545": {
      id: "e-545",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-546",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-546": {
      id: "e-546",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-545",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-547": {
      id: "e-547",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-548",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-548": {
      id: "e-548",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-547",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-549": {
      id: "e-549",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-550",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-550": {
      id: "e-550",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-549",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588277099270,
    },
    "e-551": {
      id: "e-551",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-552" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c8ee9a4e-f294-1b77-f4f9-7af30798622f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c8ee9a4e-f294-1b77-f4f9-7af30798622f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588277645433,
    },
    "e-553": {
      id: "e-553",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-554" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f007",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f007",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287237331,
    },
    "e-555": {
      id: "e-555",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-556" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f008",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f008",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287237331,
    },
    "e-557": {
      id: "e-557",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-594" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f00c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f00c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287237331,
    },
    "e-559": {
      id: "e-559",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-560" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fcf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fcf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287346313,
    },
    "e-561": {
      id: "e-561",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-562" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fd3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fd3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287346313,
    },
    "e-563": {
      id: "e-563",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-564" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|67a18d30-3927-1191-435d-4e9d96281fd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588287346313,
    },
    "e-565": {
      id: "e-565",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-566" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe83",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe83",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588290828281,
    },
    "e-567": {
      id: "e-567",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-568" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe84",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe84",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588290828281,
    },
    "e-569": {
      id: "e-569",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-570" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|f6995962-8045-a116-bea2-9fdb01d0fe88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588290828281,
    },
    "e-575": {
      id: "e-575",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-576",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588292605650,
    },
    "e-576": {
      id: "e-576",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-575",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae99",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae99",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588292605650,
    },
    "e-577": {
      id: "e-577",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-578",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588292605650,
    },
    "e-585": {
      id: "e-585",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-586",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588292605650,
    },
    "e-586": {
      id: "e-586",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-585",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588292605650,
    },
    "e-587": {
      id: "e-587",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-588" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|6cbbf3c5-3b8c-594d-7a9d-b60f18c953a2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|6cbbf3c5-3b8c-594d-7a9d-b60f18c953a2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588293523014,
    },
    "e-589": {
      id: "e-589",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-590",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588293628362,
    },
    "e-590": {
      id: "e-590",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-589",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588293628362,
    },
    "e-591": {
      id: "e-591",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-592",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a991309c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588293628362,
    },
    "e-593": {
      id: "e-593",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-594" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|53a83a37-a8c8-1953-2b11-1673f15d5edd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|53a83a37-a8c8-1953-2b11-1673f15d5edd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1587768292610,
    },
    "e-595": {
      id: "e-595",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-596",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588344447297,
    },
    "e-596": {
      id: "e-596",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-595",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588344447340,
    },
    "e-597": {
      id: "e-597",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-598",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|50b62ade-89e8-b58e-b4e6-ae862bb732be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|50b62ade-89e8-b58e-b4e6-ae862bb732be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588344692413,
    },
    "e-598": {
      id: "e-598",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-597",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|50b62ade-89e8-b58e-b4e6-ae862bb732be",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|50b62ade-89e8-b58e-b4e6-ae862bb732be",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588344692451,
    },
    "e-599": {
      id: "e-599",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-600",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|ffdf89a7-271b-65e7-b94b-3b71d9b31004",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|ffdf89a7-271b-65e7-b94b-3b71d9b31004",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588345078624,
    },
    "e-601": {
      id: "e-601",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-602" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-603": {
      id: "e-603",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-604" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-605": {
      id: "e-605",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-606" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ecf9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-607": {
      id: "e-607",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-608",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588353758815,
    },
    "e-608": {
      id: "e-608",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-607",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed00",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed00",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588353758815,
    },
    "e-609": {
      id: "e-609",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-610",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed02",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed02",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588353758815,
    },
    "e-611": {
      id: "e-611",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-612" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed03",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed03",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-613": {
      id: "e-613",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-614" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed04",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed04",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-615": {
      id: "e-615",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-616" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 750,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-617": {
      id: "e-617",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-618",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588353758815,
    },
    "e-618": {
      id: "e-618",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-617",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed05",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588353758815,
    },
    "e-619": {
      id: "e-619",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-620" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed0d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e96dd0c6-495a-a5bd-30c0-6773e4d8ed0d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588353758815,
    },
    "e-621": {
      id: "e-621",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-622" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|7d909ddb-ed6d-4944-1524-984aa1a9fe2e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|7d909ddb-ed6d-4944-1524-984aa1a9fe2e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588354536070,
    },
    "e-623": {
      id: "e-623",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-624" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d37d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d37d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-625": {
      id: "e-625",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-626" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d37e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d37e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-627": {
      id: "e-627",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-628" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d382",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d382",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-629": {
      id: "e-629",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-630" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d385",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d385",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-631": {
      id: "e-631",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-632" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d38e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d38e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-633": {
      id: "e-633",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-634" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d397",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d397",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-635": {
      id: "e-635",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-636" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d3a0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|149696d4-a0c8-f29d-912a-64efb170d3a0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1700,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1588357159917,
    },
    "e-637": {
      id: "e-637",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-638" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082642",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082642",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357660276,
    },
    "e-639": {
      id: "e-639",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-640" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082643",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082643",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357660276,
    },
    "e-641": {
      id: "e-641",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-642" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082647",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|edfa5449-1d17-9c1f-440c-ef7c6a082647",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588357660276,
    },
    "e-643": {
      id: "e-643",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-644" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358524466,
    },
    "e-645": {
      id: "e-645",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-646" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358524466,
    },
    "e-647": {
      id: "e-647",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-648" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2f8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358524466,
    },
    "e-649": {
      id: "e-649",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-650" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda37",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda37",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358642781,
    },
    "e-651": {
      id: "e-651",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-652" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358642781,
    },
    "e-653": {
      id: "e-653",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-654" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda3c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|8f8a0b60-6d24-1744-b016-a9d0f23dda3c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588358642781,
    },
    "e-657": {
      id: "e-657",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-658",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|d64b7ad2-f5e5-2ea8-a184-848e568cc4d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|d64b7ad2-f5e5-2ea8-a184-848e568cc4d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588362044406,
    },
    "e-658": {
      id: "e-658",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-657",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|d64b7ad2-f5e5-2ea8-a184-848e568cc4d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|d64b7ad2-f5e5-2ea8-a184-848e568cc4d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588362044406,
    },
    "e-697": {
      id: "e-697",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-698" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|5980b4d3-ed8d-da9a-436e-07bc7f836e38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|5980b4d3-ed8d-da9a-436e-07bc7f836e38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588373650722,
    },
    "e-699": {
      id: "e-699",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-700" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|f6f04a43-14c8-3532-f97d-8f750fe485c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|f6f04a43-14c8-3532-f97d-8f750fe485c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588373687028,
    },
    "e-701": {
      id: "e-701",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-702",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|d3b6fac3-5275-0e42-3c72-80d8a3040881",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|d3b6fac3-5275-0e42-3c72-80d8a3040881",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588373883125,
    },
    "e-703": {
      id: "e-703",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-704",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|4bdbd251-5652-e01d-ab31-f77646ebda27",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|4bdbd251-5652-e01d-ab31-f77646ebda27",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588373999875,
    },
    "e-705": {
      id: "e-705",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-706",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|ea6f4d59-eb15-d04c-6441-c2ebe9b88361",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|ea6f4d59-eb15-d04c-6441-c2ebe9b88361",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588374077347,
    },
    "e-707": {
      id: "e-707",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-708",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|5939e4e3-385f-a7c6-923a-2e8c758ac03e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|5939e4e3-385f-a7c6-923a-2e8c758ac03e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588374131359,
    },
    "e-709": {
      id: "e-709",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-22",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-710",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|cd45d287-b7f2-2a02-c8e6-547f02c68bfc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|cd45d287-b7f2-2a02-c8e6-547f02c68bfc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588374221419,
    },
    "e-711": {
      id: "e-711",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-712" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|84d9e467-53a0-6ba5-6fdf-ff77b79ed3da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|84d9e467-53a0-6ba5-6fdf-ff77b79ed3da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588374306149,
    },
    "e-713": {
      id: "e-713",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-714" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|4a14cac9-4117-b2e5-4ec1-18c4aebc3f4f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|4a14cac9-4117-b2e5-4ec1-18c4aebc3f4f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588374534490,
    },
    "e-715": {
      id: "e-715",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-716" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|968cf569-5a92-138f-7903-f3d9e541e620",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|968cf569-5a92-138f-7903-f3d9e541e620",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588374546364,
    },
    "e-717": {
      id: "e-717",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-718" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|a73b59ea-dff0-ec05-6aa2-8f78d8f6e543",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|a73b59ea-dff0-ec05-6aa2-8f78d8f6e543",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588374682154,
    },
    "e-719": {
      id: "e-719",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-720" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|cc212ace-1573-3016-7c68-f9fb4b72dfa2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|cc212ace-1573-3016-7c68-f9fb4b72dfa2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588374821475,
    },
    "e-721": {
      id: "e-721",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-722" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|921c6e71-1445-db4f-a36e-cba514340d25",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|921c6e71-1445-db4f-a36e-cba514340d25",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588374868222,
    },
    "e-723": {
      id: "e-723",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-724" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|308dad16-b6fc-fbcf-9c27-b6c3c22661d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375232831,
    },
    "e-725": {
      id: "e-725",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-726" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|16321c36-da92-768c-4b97-1dcaafde434f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375299150,
    },
    "e-727": {
      id: "e-727",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-728" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|76e68abc-5885-9782-edc6-92891c70f3e0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375313610,
    },
    "e-729": {
      id: "e-729",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-730" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|36f4ec78-db9b-3238-6e1d-bc1137ec8efb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375510669,
    },
    "e-731": {
      id: "e-731",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-732" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|54622a71-ee0b-8d63-9099-c4d030dd3927",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375528478,
    },
    "e-733": {
      id: "e-733",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-734" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|4497b3c0-0f5d-da2e-2a61-562d10e4425c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375541545,
    },
    "e-735": {
      id: "e-735",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-736" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b859",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|308d6a77-fece-5eec-dc4d-65abd5a8b859",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588375600920,
    },
    "e-737": {
      id: "e-737",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-738" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e0c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c02feedf-6a17-9692-0fd9-8318b2ac5e0c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380055208,
    },
    "e-739": {
      id: "e-739",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-740" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|6fb6cf0d-042a-40ff-52db-f0705c18595b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|6fb6cf0d-042a-40ff-52db-f0705c18595b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380069702,
    },
    "e-741": {
      id: "e-741",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-742" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|925c8d57-0ade-28a3-1f23-badeaeebec3a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|925c8d57-0ade-28a3-1f23-badeaeebec3a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380091239,
    },
    "e-743": {
      id: "e-743",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-744" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f55fbf02-3007-ee40-c094-8f8dfd86d10d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f55fbf02-3007-ee40-c094-8f8dfd86d10d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380105637,
    },
    "e-745": {
      id: "e-745",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-746" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|f806ce21-ef1f-6e2f-4577-4cf2ae38f137",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|f806ce21-ef1f-6e2f-4577-4cf2ae38f137",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380366587,
    },
    "e-747": {
      id: "e-747",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-748" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|a036d1b6-4a98-6172-321f-3e978a9a06bb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|a036d1b6-4a98-6172-321f-3e978a9a06bb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380564553,
    },
    "e-749": {
      id: "e-749",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-750" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c262b273-b3d5-f842-a506-15e2b69308cb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c262b273-b3d5-f842-a506-15e2b69308cb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380654709,
    },
    "e-751": {
      id: "e-751",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-752" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|c8eab987-972a-1c88-4552-de776e6730e3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|c8eab987-972a-1c88-4552-de776e6730e3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380685030,
    },
    "e-753": {
      id: "e-753",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-754" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|b5eea570-ae2c-f164-69ef-3ed98275ab4f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|b5eea570-ae2c-f164-69ef-3ed98275ab4f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380697898,
    },
    "e-755": {
      id: "e-755",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-756" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|b326c440-6eb1-e58d-84cb-daa2b3eea51f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|b326c440-6eb1-e58d-84cb-daa2b3eea51f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380709894,
    },
    "e-757": {
      id: "e-757",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-758" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|6c6c77ce-d3bf-fbb9-e641-c7cf13a58cc2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|6c6c77ce-d3bf-fbb9-e641-c7cf13a58cc2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380730153,
    },
    "e-759": {
      id: "e-759",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-760" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|8b79f0ec-1cfa-a0d7-cb09-c14ac82fab26",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|8b79f0ec-1cfa-a0d7-cb09-c14ac82fab26",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588380747070,
    },
    "e-761": {
      id: "e-761",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-762" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|b0a52d26-465b-e5ea-f03b-ca1f8665b455",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|b0a52d26-465b-e5ea-f03b-ca1f8665b455",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380800014,
    },
    "e-763": {
      id: "e-763",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-764" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|714840d6-6609-2277-a6a0-6623c588ba04",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|714840d6-6609-2277-a6a0-6623c588ba04",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380815686,
    },
    "e-765": {
      id: "e-765",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-766" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|ca6428e4-1b78-6815-1e1f-187121995584",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|ca6428e4-1b78-6815-1e1f-187121995584",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380837108,
    },
    "e-767": {
      id: "e-767",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-768" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|77e07a06-78e5-e3f3-11da-59692cae8f12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|77e07a06-78e5-e3f3-11da-59692cae8f12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588380993862,
    },
    "e-769": {
      id: "e-769",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-770" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588381067367,
    },
    "e-771": {
      id: "e-771",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-772" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588381116799,
    },
    "e-773": {
      id: "e-773",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-774" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|3c379666-7280-29ba-dedf-a6751a323e81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588381181706,
    },
    "e-775": {
      id: "e-775",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-776" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab1038760d242f932346ec|adb24b38-0bba-2b4c-c9a9-9631eea0dfdd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab1038760d242f932346ec|adb24b38-0bba-2b4c-c9a9-9631eea0dfdd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588381197085,
    },
    "e-777": {
      id: "e-777",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-778" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f011",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab55e3ad89e65851add5f5|540d096f-4e46-c583-ac43-b7d3d1e5f011",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588381339120,
    },
    "e-779": {
      id: "e-779",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-780" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|577f17d4-396a-bd3c-5e8e-a5433e14ce36",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588381822576,
    },
    "e-785": {
      id: "e-785",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-786" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|0a2feccf-3b91-3dc3-358d-700442f47fbc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|0a2feccf-3b91-3dc3-358d-700442f47fbc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382009607,
    },
    "e-787": {
      id: "e-787",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-788" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|05637893-e131-b866-0b5d-7aefdc6029d4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|05637893-e131-b866-0b5d-7aefdc6029d4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382020084,
    },
    "e-789": {
      id: "e-789",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-790" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|48d7b76a-542e-4d2d-22cb-ce68747bdf8c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|48d7b76a-542e-4d2d-22cb-ce68747bdf8c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382037098,
    },
    "e-791": {
      id: "e-791",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-792" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|7ae18253-e6de-6c07-b858-738ba6b99e77",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|7ae18253-e6de-6c07-b858-738ba6b99e77",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382066828,
    },
    "e-795": {
      id: "e-795",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-796" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|d1cdc43e-1902-6e95-d25d-f1106a001ea1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|d1cdc43e-1902-6e95-d25d-f1106a001ea1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382422942,
    },
    "e-797": {
      id: "e-797",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-798" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|6aac5620-13c9-5fac-a04c-2d150d2334ac",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|6aac5620-13c9-5fac-a04c-2d150d2334ac",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382437148,
    },
    "e-799": {
      id: "e-799",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-800" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|cfbf625b-691a-2c1e-9255-f82cfbd501a5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|cfbf625b-691a-2c1e-9255-f82cfbd501a5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382450470,
    },
    "e-801": {
      id: "e-801",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-802" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2fc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e2fc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382484817,
    },
    "e-803": {
      id: "e-803",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-804" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e302",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e302",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382500142,
    },
    "e-805": {
      id: "e-805",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-806" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e308",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e308",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382518389,
    },
    "e-807": {
      id: "e-807",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-808" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e30e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|c3ad1822-ac29-5866-cb6e-a4ad7525e30e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382552004,
    },
    "e-809": {
      id: "e-809",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-810" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|744240c6-5e25-dcd2-7ab8-1929c7614d3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|744240c6-5e25-dcd2-7ab8-1929c7614d3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382596022,
    },
    "e-811": {
      id: "e-811",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-812" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|59757526-a164-bb43-42e8-dafe16066c1e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|59757526-a164-bb43-42e8-dafe16066c1e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382606002,
    },
    "e-813": {
      id: "e-813",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-814" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eac67bc6802561f28d13083|4751ccf4-9afd-42d2-6749-7e7d94b27920",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eac67bc6802561f28d13083|4751ccf4-9afd-42d2-6749-7e7d94b27920",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382667547,
    },
    "e-815": {
      id: "e-815",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-816" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da212000000000012",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da212000000000012",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588382913059,
    },
    "e-817": {
      id: "e-817",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-818" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|92e747b4-69ef-d57d-c34c-1325875e7cd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|92e747b4-69ef-d57d-c34c-1325875e7cd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382955753,
    },
    "e-819": {
      id: "e-819",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-820" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da21200000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da21200000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382967205,
    },
    "e-821": {
      id: "e-821",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-822" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da21200000000000e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|5eab6f2d14b91c1a053da21200000000000e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588382980182,
    },
    "e-823": {
      id: "e-823",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-824" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383072040,
    },
    "e-825": {
      id: "e-825",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-826" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|12c16186-9da1-fee1-7a15-3f654a3f58b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|12c16186-9da1-fee1-7a15-3f654a3f58b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383085610,
    },
    "e-827": {
      id: "e-827",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-828" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56ca",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56ca",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383099184,
    },
    "e-829": {
      id: "e-829",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-830" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|12325f90-3353-a541-b456-791ffb9a1deb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|12325f90-3353-a541-b456-791ffb9a1deb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383115868,
    },
    "e-831": {
      id: "e-831",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-832" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|bf9d3cf9-46dc-57ff-9279-2c903e6997b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|bf9d3cf9-46dc-57ff-9279-2c903e6997b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383144862,
    },
    "e-833": {
      id: "e-833",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-834" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|bc882745-5a9b-7bc1-50e8-5eeab40a529c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|bc882745-5a9b-7bc1-50e8-5eeab40a529c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383165760,
    },
    "e-835": {
      id: "e-835",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-836" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|73caff74-e15b-a5b5-91b7-8de39d71bf5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|73caff74-e15b-a5b5-91b7-8de39d71bf5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383189058,
    },
    "e-837": {
      id: "e-837",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-838" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|621e757a-5a0e-603e-e12e-725a8853c231",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|621e757a-5a0e-603e-e12e-725a8853c231",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1700,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588383301662,
    },
    "e-839": {
      id: "e-839",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-840" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|fbe65ecb-f96d-0e97-6a1c-603085831588",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|fbe65ecb-f96d-0e97-6a1c-603085831588",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383330990,
    },
    "e-841": {
      id: "e-841",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-842" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383400248,
    },
    "e-843": {
      id: "e-843",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-844" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383410649,
    },
    "e-845": {
      id: "e-845",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-846" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8bee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383422510,
    },
    "e-847": {
      id: "e-847",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-848" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8beed",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|0f4821f4-60bf-9011-50b5-7fe5b6b8beed",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383433043,
    },
    "e-849": {
      id: "e-849",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-850" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011b7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011b7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-851": {
      id: "e-851",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-852" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-853": {
      id: "e-853",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-854" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011bc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011bc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-857": {
      id: "e-857",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-858" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-859": {
      id: "e-859",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-860",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-860": {
      id: "e-860",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-859",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-861": {
      id: "e-861",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-862" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-863": {
      id: "e-863",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-864",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-864": {
      id: "e-864",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-863",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-865": {
      id: "e-865",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-866",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-866": {
      id: "e-866",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-865",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-867": {
      id: "e-867",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-868",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011da",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011da",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-869": {
      id: "e-869",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-870" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-871": {
      id: "e-871",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-872" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-873": {
      id: "e-873",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-874" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-875": {
      id: "e-875",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-876" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-877": {
      id: "e-877",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-878",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-878": {
      id: "e-878",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-877",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-879": {
      id: "e-879",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-880" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-881": {
      id: "e-881",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-882" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-883": {
      id: "e-883",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-884" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-885": {
      id: "e-885",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-886" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011f9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-887": {
      id: "e-887",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-888" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01203",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01203",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-889": {
      id: "e-889",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-890" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01208",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01208",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383630835,
    },
    "e-891": {
      id: "e-891",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-892",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01209",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01209",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-892": {
      id: "e-892",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-891",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01209",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b01209",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-893": {
      id: "e-893",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-894",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b0120b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b0120b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588383630835,
    },
    "e-897": {
      id: "e-897",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-898" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|99934a7f-8438-d03c-401f-1c651e43abd8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|99934a7f-8438-d03c-401f-1c651e43abd8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383856906,
    },
    "e-899": {
      id: "e-899",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-900" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|5db7dbb4-0375-b97d-17fc-5e5bf3566a12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|5db7dbb4-0375-b97d-17fc-5e5bf3566a12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383867995,
    },
    "e-901": {
      id: "e-901",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-902" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|3c9b6f6f-be0e-c58d-5457-aa2e32a4589f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|3c9b6f6f-be0e-c58d-5457-aa2e32a4589f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383878646,
    },
    "e-903": {
      id: "e-903",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-904" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|2e0dc73f-4274-6883-02d7-df105882c84a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|2e0dc73f-4274-6883-02d7-df105882c84a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383887109,
    },
    "e-905": {
      id: "e-905",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-906" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|a52e7708-19fa-190b-50bb-12250bc45167",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|a52e7708-19fa-190b-50bb-12250bc45167",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1588383903094,
    },
    "e-907": {
      id: "e-907",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-908" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|99934a7f-8438-d03c-401f-1c651e43abd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|99934a7f-8438-d03c-401f-1c651e43abd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1050,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383943477,
    },
    "e-909": {
      id: "e-909",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-910" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|40b14bf1-fbb2-cccc-8c1b-ec42ddeeef12",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|40b14bf1-fbb2-cccc-8c1b-ec42ddeeef12",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383974155,
    },
    "e-911": {
      id: "e-911",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-912" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|b2ff2820-038f-f48b-7b93-44a01ea03c95",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|b2ff2820-038f-f48b-7b93-44a01ea03c95",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383985029,
    },
    "e-913": {
      id: "e-913",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-914" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|dec23e45-ec82-3ed1-0afa-47e330055b2f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|dec23e45-ec82-3ed1-0afa-47e330055b2f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588383996720,
    },
    "e-915": {
      id: "e-915",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-916" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|e66cf890-0c47-010b-0999-d964b53db033",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|e66cf890-0c47-010b-0999-d964b53db033",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384007971,
    },
    "e-927": {
      id: "e-927",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-928",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b511",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b511",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588384254535,
    },
    "e-928": {
      id: "e-928",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-927",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b511",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b511",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588384254535,
    },
    "e-929": {
      id: "e-929",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-930",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b513",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b513",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588384254535,
    },
    "e-931": {
      id: "e-931",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-932" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b515",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b515",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384254535,
    },
    "e-933": {
      id: "e-933",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-934" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b516",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b516",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384254535,
    },
    "e-935": {
      id: "e-935",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-936" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384254535,
    },
    "e-937": {
      id: "e-937",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-938" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384254535,
    },
    "e-939": {
      id: "e-939",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-940",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588384254535,
    },
    "e-940": {
      id: "e-940",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-939",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b51b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588384254535,
    },
    "e-949": {
      id: "e-949",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-950" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 900,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588384390521,
    },
    "e-954": {
      id: "e-954",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-955",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588612414325,
    },
    "e-955": {
      id: "e-955",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-954",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7e88",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7e88",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588612414415,
    },
    "e-958": {
      id: "e-958",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-959",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|b2db83d2-5300-e7f9-dc77-3698984b0c16",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|b2db83d2-5300-e7f9-dc77-3698984b0c16",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588615518848,
    },
    "e-960": {
      id: "e-960",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-961" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea775bf4c11323abc93c807|9e42c240-4b05-c7ca-2dac-2398d46b45f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea775bf4c11323abc93c807|9e42c240-4b05-c7ca-2dac-2398d46b45f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588619462626,
    },
    "e-962": {
      id: "e-962",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-963" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "b8888593-8cf1-8056-3328-3aac04a1e85f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "b8888593-8cf1-8056-3328-3aac04a1e85f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588623347773,
    },
    "e-964": {
      id: "e-964",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-965",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588623488275,
    },
    "e-965": {
      id: "e-965",
      name: "",
      animationType: "custom",
      eventTypeId: "NAVBAR_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-964",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecada",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecada",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1588623488355,
    },
    "e-966": {
      id: "e-966",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-967" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb15",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "daffbd40-2680-7e20-61f1-1b2d0b3ecb15",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588624111991,
    },
    "e-968": {
      id: "e-968",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-969" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|38f80490-fa29-82ef-d32e-60c6b0fbb5ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|38f80490-fa29-82ef-d32e-60c6b0fbb5ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1100,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1588624234151,
    },
    "e-970": {
      id: "e-970",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-971" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|a1d83f86-1590-aebd-a311-9659e1cc4c28",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|a1d83f86-1590-aebd-a311-9659e1cc4c28",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1900,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1588642143937,
    },
    "e-972": {
      id: "e-972",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInRight", autoStopEventId: "e-973" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaafc9b6286860a70300dea|bc272740-9886-3c8c-0a25-89a63df67af5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaafc9b6286860a70300dea|bc272740-9886-3c8c-0a25-89a63df67af5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 2000,
        direction: "RIGHT",
        effectIn: true,
      },
      createdOn: 1588642156661,
    },
    "e-974": {
      id: "e-974",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-975" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|87007a11-275b-b93d-1f8d-20ddfc2a83b8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|87007a11-275b-b93d-1f8d-20ddfc2a83b8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588696378224,
    },
    "e-978": {
      id: "e-978",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-979" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b930",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b930",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697150703,
    },
    "e-980": {
      id: "e-980",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-981" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b932",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b932",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697150703,
    },
    "e-982": {
      id: "e-982",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-983" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b933",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b933",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697150703,
    },
    "e-984": {
      id: "e-984",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-985" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b934",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|f76f7bf3-8234-c02c-44d2-9ec8e168b934",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697150703,
    },
    "e-986": {
      id: "e-986",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-987" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697237146,
    },
    "e-988": {
      id: "e-988",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-989" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697237146,
    },
    "e-990": {
      id: "e-990",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-991" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697237146,
    },
    "e-992": {
      id: "e-992",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-993" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|8c921d50-dbb0-e839-10c7-fa2123e99bb5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 1400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1588697237146,
    },
    "e-994": {
      id: "e-994",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-23", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|94344ed8-7eb4-4851-0f1b-aabb31f184d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|94344ed8-7eb4-4851-0f1b-aabb31f184d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-23-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 70,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-23-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 70,
          restingState: 50,
        },
      ],
      createdOn: 1588702292483,
    },
    "e-995": {
      id: "e-995",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-996" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2231fbb1c38c|94344ed8-7eb4-4851-0f1b-aabb31f184d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2231fbb1c38c|94344ed8-7eb4-4851-0f1b-aabb31f184d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: 80,
        direction: null,
        effectIn: true,
      },
      createdOn: 1589411915339,
    },
    "e-999": {
      id: "e-999",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1000" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea9f2f502dbf75199a6cc51|0571639c-7de9-9a30-6c16-d52b9c6dd47c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea9f2f502dbf75199a6cc51|0571639c-7de9-9a30-6c16-d52b9c6dd47c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1589479578049,
    },
    "e-1001": {
      id: "e-1001",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1002",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590460667780,
    },
    "e-1002": {
      id: "e-1002",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1001",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|abaca7e4-5925-60bd-cfd4-d0d883deae98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590460667840,
    },
    "e-1003": {
      id: "e-1003",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1004" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|c2b4a8b1-0071-e327-4bcb-899acaacf15e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|c2b4a8b1-0071-e327-4bcb-899acaacf15e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590461244799,
    },
    "e-1005": {
      id: "e-1005",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1006",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590461557156,
    },
    "e-1006": {
      id: "e-1006",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-29",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1005",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab64e0f8395200621a0ce3|d4fdbb55-9d5f-e461-0f76-bb38a9913098",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590461557225,
    },
    "e-1007": {
      id: "e-1007",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-1008" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ecc85fd6d45171f7bfda8ee|5f194759-3cce-2af7-401f-0d93dc5d2c60",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ecc85fd6d45171f7bfda8ee|5f194759-3cce-2af7-401f-0d93dc5d2c60",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1590462097778,
    },
    "e-1009": {
      id: "e-1009",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1010" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ecc85fd6d45171f7bfda8ee|ec6fe62a-8418-166e-736d-3e80a249b887",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ecc85fd6d45171f7bfda8ee|ec6fe62a-8418-166e-736d-3e80a249b887",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590531906149,
    },
    "e-1011": {
      id: "e-1011",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1012" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ecc85fd6d45171f7bfda8ee|f4527935-fc7a-d998-f74f-08613d8aebe9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ecc85fd6d45171f7bfda8ee|f4527935-fc7a-d998-f74f-08613d8aebe9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590531917835,
    },
    "e-1013": {
      id: "e-1013",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1014" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56ce",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eaa197647077a634e79f090|9eaa567f-460e-77e1-de19-e9b25b1e56ce",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548311253,
    },
    "e-1015": {
      id: "e-1015",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1016" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d220324b1c390|b2fa23d4-8136-d8f4-e5c4-4d7ef74dcc65",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d220324b1c390|b2fa23d4-8136-d8f4-e5c4-4d7ef74dcc65",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548428852,
    },
    "e-1017": {
      id: "e-1017",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1018" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d220324b1c390|b2fa23d4-8136-d8f4-e5c4-4d7ef74dcc62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d220324b1c390|b2fa23d4-8136-d8f4-e5c4-4d7ef74dcc62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 750,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548439119,
    },
    "e-1019": {
      id: "e-1019",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1020" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d2242dbb1c393|5e86adabd2a28d2afbf80eae00000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d2242dbb1c393|5e86adabd2a28d2afbf80eae00000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548480339,
    },
    "e-1021": {
      id: "e-1021",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1022" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d221612b1c392|5e86ada79942c1e4247fd4c700000000000b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d221612b1c392|5e86ada79942c1e4247fd4c700000000000b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548514172,
    },
    "e-1023": {
      id: "e-1023",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1024" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|96f0bc79-5a3b-6aba-753a-ab1a0cc3a333",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|96f0bc79-5a3b-6aba-753a-ab1a0cc3a333",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548546360,
    },
    "e-1025": {
      id: "e-1025",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1026" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5eab6f2df83952fda91a4ccc|c7bafc9a-ac92-ae85-eb84-f5254b491f0f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5eab6f2df83952fda91a4ccc|c7bafc9a-ac92-ae85-eb84-f5254b491f0f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 750,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548556113,
    },
    "e-1027": {
      id: "e-1027",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1028" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d226e96b1c391|3d874e0c-ce7d-af6a-08c5-d3b830d0ab0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d226e96b1c391|3d874e0c-ce7d-af6a-08c5-d3b830d0ab0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548632711,
    },
    "e-1029": {
      id: "e-1029",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1030" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea6ed9e484d226e96b1c391|459afad5-56dd-b68b-418c-89998f48c21a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea6ed9e484d226e96b1c391|459afad5-56dd-b68b-418c-89998f48c21a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1590548642467,
    },
    "e-1031": {
      id: "e-1031",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1032",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590978936252,
    },
    "e-1032": {
      id: "e-1032",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1031",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7760e5e12ff8392df4168|e48efd2f-181c-b204-1591-3fd257b011d7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590978936312,
    },
    "e-1033": {
      id: "e-1033",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1034",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b510",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b510",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590979179857,
    },
    "e-1034": {
      id: "e-1034",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1033",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b510",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5ea7771cb67f87660e520fd0|4e1433f5-7432-b1a3-bbce-7f116697b510",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1590979179949,
    },
    "e-1039": {
      id: "e-1039",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1040" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "aa8cd7b6-1626-0742-836e-149a366d7ebe",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "aa8cd7b6-1626-0742-836e-149a366d7ebe",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1591648365698,
    },
    "e-1058": {
      id: "e-1058",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1059" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5f3214b6a3b2c92abc7ef602|26f97ea6-d9bb-33d2-c386-63617082e7ec",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f3214b6a3b2c92abc7ef602|26f97ea6-d9bb-33d2-c386-63617082e7ec",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1597117715044,
    },
    "e-1060": {
      id: "e-1060",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1061" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5f3214b6a3b2c92abc7ef602|26f97ea6-d9bb-33d2-c386-63617082e7f7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f3214b6a3b2c92abc7ef602|26f97ea6-d9bb-33d2-c386-63617082e7f7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1597117715044,
    },
    "e-1062": {
      id: "e-1062",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1063" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5f3214fdf6c27bc1c326ab77|6bae0f25-4095-ddce-11fd-c64157230ba3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f3214fdf6c27bc1c326ab77|6bae0f25-4095-ddce-11fd-c64157230ba3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 350,
        direction: null,
        effectIn: true,
      },
      createdOn: 1597117782293,
    },
    "e-1064": {
      id: "e-1064",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1065" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "5f3214fdf6c27bc1c326ab77|6bae0f25-4095-ddce-11fd-c64157230bae",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "5f3214fdf6c27bc1c326ab77|6bae0f25-4095-ddce-11fd-c64157230bae",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 700,
        direction: null,
        effectIn: true,
      },
      createdOn: 1597117782293,
    },
    "e-1066": {
      id: "e-1066",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bffa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bffa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          smoothing: 90,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1646109036944,
    },
    "e-1067": {
      id: "e-1067",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1068" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bfef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bfef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629361701,
    },
    "e-1069": {
      id: "e-1069",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1070" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bffa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5bffa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629391131,
    },
    "e-1071": {
      id: "e-1071",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1072" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c019",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c019",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629402141,
    },
    "e-1073": {
      id: "e-1073",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1074" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c02a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c02a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629410378,
    },
    "e-1075": {
      id: "e-1075",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1076" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c040",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c040",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629418494,
    },
    "e-1077": {
      id: "e-1077",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1078" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|c7e82c66-c67a-4d40-d18d-ce72ffebc6a3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|c7e82c66-c67a-4d40-d18d-ce72ffebc6a3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629426908,
    },
    "e-1079": {
      id: "e-1079",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1080" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|c43bec86-618e-bd7e-6aaf-ed2e044d3b01",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|c43bec86-618e-bd7e-6aaf-ed2e044d3b01",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629434963,
    },
    "e-1081": {
      id: "e-1081",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1082" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c04d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c04d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629446175,
    },
    "e-1083": {
      id: "e-1083",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1084" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c056",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c056",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629454928,
    },
    "e-1085": {
      id: "e-1085",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1086" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c087",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c087",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629463494,
    },
    "e-1087": {
      id: "e-1087",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1088" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c08d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c08d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629473573,
    },
    "e-1089": {
      id: "e-1089",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1090" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|6a9f13c9-5fe1-e0b1-bd63-90a8dab767dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|6a9f13c9-5fe1-e0b1-bd63-90a8dab767dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629481921,
    },
    "e-1091": {
      id: "e-1091",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1092" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0c7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0c7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629489589,
    },
    "e-1093": {
      id: "e-1093",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1094" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0cd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0cd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629500022,
    },
    "e-1095": {
      id: "e-1095",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1096" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0d2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0d2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629509092,
    },
    "e-1097": {
      id: "e-1097",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1098" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0dc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0dc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629517133,
    },
    "e-1099": {
      id: "e-1099",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1100" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629527572,
    },
    "e-1101": {
      id: "e-1101",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1102" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0f6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c0f6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629535402,
    },
    "e-1103": {
      id: "e-1103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c100",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c100",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629543439,
    },
    "e-1105": {
      id: "e-1105",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c10c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe8109d91f1b50db5ca892|432ed28d-2a3f-a0cf-5817-345b48f5c10c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677629553072,
    },
    "e-1107": {
      id: "e-1107",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|91c77dc2-ce8d-3735-c139-5c44d18085c1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|91c77dc2-ce8d-3735-c139-5c44d18085c1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677630095740,
    },
    "e-1109": {
      id: "e-1109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|48077edd-70a5-145e-a57a-5ffa81f40801",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|48077edd-70a5-145e-a57a-5ffa81f40801",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630128204,
    },
    "e-1111": {
      id: "e-1111",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1112" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|0b989351-0941-76c7-c8e3-a19e054c5d6d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|0b989351-0941-76c7-c8e3-a19e054c5d6d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630137591,
    },
    "e-1113": {
      id: "e-1113",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1114" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|0390cb19-d59b-03d6-dc5d-aa372486e528",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|0390cb19-d59b-03d6-dc5d-aa372486e528",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630148213,
    },
    "e-1115": {
      id: "e-1115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|957e2f89-7768-782a-8ac2-1214a7ec149a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|957e2f89-7768-782a-8ac2-1214a7ec149a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630157428,
    },
    "e-1117": {
      id: "e-1117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863de",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863de",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630172442,
    },
    "e-1119": {
      id: "e-1119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863e2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863e2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630172442,
    },
    "e-1121": {
      id: "e-1121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630172442,
    },
    "e-1123": {
      id: "e-1123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|98cb69e5-cfad-d801-e302-d67cc36863ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630172442,
    },
    "e-1125": {
      id: "e-1125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ee7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ee7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1127": {
      id: "e-1127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ee8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ee8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1129": {
      id: "e-1129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6eea",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6eea",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1131": {
      id: "e-1131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ef3",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6ef3",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1133": {
      id: "e-1133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6f0a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6f0a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1135": {
      id: "e-1135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6f21",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|fecaa525-7da0-4707-fee7-e512b2ea6f21",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 1000,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630212230,
    },
    "e-1137": {
      id: "e-1137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|2e2567f8-e389-f949-de08-e35845620b5d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|2e2567f8-e389-f949-de08-e35845620b5d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630222671,
    },
    "e-1139": {
      id: "e-1139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|556db921-fdfd-396f-9624-de2c64197a45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|556db921-fdfd-396f-9624-de2c64197a45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630261114,
    },
    "e-1141": {
      id: "e-1141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|0c34e1ca-9b43-8ff3-3375-320c13664dc4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|0c34e1ca-9b43-8ff3-3375-320c13664dc4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630360004,
    },
    "e-1143": {
      id: "e-1143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|8e92ab63-5a72-3178-ecbe-9116091beff8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|8e92ab63-5a72-3178-ecbe-9116091beff8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630363464,
    },
    "e-1145": {
      id: "e-1145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|b3880c58-19f0-7d16-dfea-a5d415a49593",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|b3880c58-19f0-7d16-dfea-a5d415a49593",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630540380,
    },
    "e-1147": {
      id: "e-1147",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1148" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98a12159be8579c6b3d3|3549c1b1-cb9c-d664-d4d1-00b6be80c298",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98a12159be8579c6b3d3|3549c1b1-cb9c-d664-d4d1-00b6be80c298",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630553768,
    },
    "e-1149": {
      id: "e-1149",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1150" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343244",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343244",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630667010,
    },
    "e-1151": {
      id: "e-1151",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1152" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343248",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343248",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630667010,
    },
    "e-1153": {
      id: "e-1153",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1154" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca8434324f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca8434324f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630667010,
    },
    "e-1155": {
      id: "e-1155",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-1156" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343255",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|12ffb1be-41e4-6ea6-df02-28ca84343255",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 300,
        direction: null,
        effectIn: true,
      },
      createdOn: 1677630667010,
    },
    "e-1157": {
      id: "e-1157",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1162",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc408",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc408",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630709494,
    },
    "e-1158": {
      id: "e-1158",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1159",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc40f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc40f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630714596,
    },
    "e-1160": {
      id: "e-1160",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1163",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc416",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc416",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630714596,
    },
    "e-1161": {
      id: "e-1161",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-31",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1168",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc41d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc41d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 5,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630718580,
    },
    "e-1163": {
      id: "e-1163",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1160",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc416",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc416",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630714596,
    },
    "e-1165": {
      id: "e-1165",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1167",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc426",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc426",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630718580,
    },
    "e-1169": {
      id: "e-1169",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1164",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc41b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc41b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630714596,
    },
    "e-1170": {
      id: "e-1170",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-32",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1166",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc40d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe98ad6c450a236f1deb5d|e727fd75-00d3-7fac-4f41-3e625a6fc40d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677630709494,
    },
    "e-1171": {
      id: "e-1171",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1172" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf18925224d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf18925224d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677632246293,
    },
    "e-1173": {
      id: "e-1173",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1174" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252250",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252250",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677632246293,
    },
    "e-1175": {
      id: "e-1175",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_OPEN",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1176",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252252",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252252",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677632246293,
    },
    "e-1176": {
      id: "e-1176",
      name: "",
      animationType: "preset",
      eventTypeId: "DROPDOWN_CLOSE",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1175",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252252",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252252",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1677632246293,
    },
    "e-1177": {
      id: "e-1177",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1178" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252253",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252253",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677632246293,
    },
    "e-1179": {
      id: "e-1179",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1180" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252288",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf189252288",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 600,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677632246293,
    },
    "e-1181": {
      id: "e-1181",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-1182" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf18925228d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63fe989ab65dd105e46ca559|29a2e68b-3c0a-0c1f-387f-bcf18925228d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 800,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1677632246293,
    },
  },
  actionLists: {
    "a-3": {
      id: "a-3",
      title: "Open Mega Menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: "none",
              },
            },
            {
              id: "a-3-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f7"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-3-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: "block",
              },
            },
            {
              id: "a-3-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f7"],
                },
                zValue: -180,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-3-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1584743439367,
    },
    "a-4": {
      id: "a-4",
      title: "Close Mega Menu",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".dropdown-icon",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f7"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".mega-menu-container",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172fb"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1584743749018,
    },
    "a-5": {
      id: "a-5",
      title: "Link Arrow Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-5-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 10,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588111255201,
    },
    "a-6": {
      id: "a-6",
      title: "Link Arrow Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588111479334,
    },
    "a-7": {
      id: "a-7",
      title: "Link Arrow & Image Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 10,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-7-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588111255201,
    },
    "a-8": {
      id: "a-8",
      title: "Link Arrow & Image Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".link-arrow",
                  selectorGuids: ["2b734b65-678c-5d40-e677-ab91ea2216ba"],
                },
                xValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-8-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588111479334,
    },
    "a-9": {
      id: "a-9",
      title: "Link Image Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-9-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1.1,
                yValue: 1.1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588111255201,
    },
    "a-10": {
      id: "a-10",
      title: "Link Image Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".image-zoom",
                  selectorGuids: ["c840db48-0819-5b5a-022d-73586e7303de"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588111479334,
    },
    "a-13": {
      id: "a-13",
      title: "Show Image Left",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 1500,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-13-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-14": {
      id: "a-14",
      title: "Show Image Left 0.6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 600,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-14-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-15": {
      id: "a-15",
      title: "Show Image Left 0.9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 900,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-16": {
      id: "a-16",
      title: "Show Image Left 1.3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 1300,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-16-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-17": {
      id: "a-17",
      title: "Animation Card Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".animation-card",
                  selectorGuids: ["274ffca3-e230-6a69-070b-401c0434c0c3"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bg-hover",
                  selectorGuids: ["87d9c1e3-d108-3991-5a96-747c789ad760"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".animation-card",
                  selectorGuids: ["274ffca3-e230-6a69-070b-401c0434c0c3"],
                },
                xValue: -15,
                yValue: -15,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-17-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bg-hover",
                  selectorGuids: ["87d9c1e3-d108-3991-5a96-747c789ad760"],
                },
                xValue: 5,
                yValue: 5,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588187038568,
    },
    "a-18": {
      id: "a-18",
      title: "Animation Card Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".animation-card",
                  selectorGuids: ["274ffca3-e230-6a69-070b-401c0434c0c3"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-18-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".bg-hover",
                  selectorGuids: ["87d9c1e3-d108-3991-5a96-747c789ad760"],
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588187308219,
    },
    "a-19": {
      id: "a-19",
      title: "Underline Hover",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                widthValue: 100,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-19-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588344471787,
    },
    "a-20": {
      id: "a-20",
      title: "Underline Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                widthValue: 0,
                widthUnit: "%",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-20-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-hover",
                  selectorGuids: ["d94b3dba-c005-5303-ed64-d3ee1e2172f6"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588344604693,
    },
    "a-21": {
      id: "a-21",
      title: "Show Image Left 1.5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 1500,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-22": {
      id: "a-22",
      title: "Show Image Left 1.7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-22-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 1700,
                easing: "ease",
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                widthValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-22-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: true,
                  id: "5ea6ed9e484d2231fbb1c38c|cc235395-59d1-99de-1128-e94867d62463",
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1588121157523,
    },
    "a-24": {
      id: "a-24",
      title: "Menu Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-top-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325563"],
                },
                yValue: 8,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-bottom-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325565"],
                },
                yValue: -8,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-24-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-middle-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325564"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-top-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325563"],
                },
                zValue: 45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-24-n-5",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-bottom-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325565"],
                },
                zValue: -45,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588612515769,
    },
    "a-25": {
      id: "a-25",
      title: "Menu Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-top-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325563"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-25-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-bottom-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325565"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-25-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-top-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325563"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-25-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-middle-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325564"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-25-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-icon-bottom-line",
                  selectorGuids: ["f48d14db-fb28-1014-c1c6-5d9f20325565"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1588612899938,
    },
    "a-23": {
      id: "a-23",
      title: "Rotate On Mouseover",
      continuousParameterGroups: [
        {
          id: "a-23-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-23-n",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "5ea6ed9e484d2231fbb1c38c|67efc802-627b-4ee1-c8cf-44bc66938a57",
                    },
                    yValue: -5,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-23-n-5",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".credit-card-highlight",
                      selectorGuids: ["a9d03277-07f7-3a4b-2687-469f9592b52d"],
                    },
                    xValue: 100,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-23-n-2",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "5ea6ed9e484d2231fbb1c38c|67efc802-627b-4ee1-c8cf-44bc66938a57",
                    },
                    yValue: 5,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-23-n-6",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".credit-card-highlight",
                      selectorGuids: ["a9d03277-07f7-3a4b-2687-469f9592b52d"],
                    },
                    xValue: -50,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-23-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-23-n-3",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "5ea6ed9e484d2231fbb1c38c|67efc802-627b-4ee1-c8cf-44bc66938a57",
                    },
                    xValue: 5,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-23-n-7",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".credit-card-highlight",
                      selectorGuids: ["a9d03277-07f7-3a4b-2687-469f9592b52d"],
                    },
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-23-n-4",
                  actionTypeId: "TRANSFORM_ROTATE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: "5ea6ed9e484d2231fbb1c38c|67efc802-627b-4ee1-c8cf-44bc66938a57",
                    },
                    xValue: -5,
                    xUnit: "DEG",
                    yUnit: "DEG",
                    zUnit: "DEG",
                  },
                },
                {
                  id: "a-23-n-8",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".credit-card-highlight",
                      selectorGuids: ["a9d03277-07f7-3a4b-2687-469f9592b52d"],
                    },
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1588608699825,
    },
    "a-26": {
      id: "a-26",
      title: "Blog Card Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-post-title",
                  selectorGuids: ["887bfa74-22ba-a147-65b1-287557ab173b"],
                },
                globalSwatchId: "d94963dc",
                rValue: 10,
                bValue: 35,
                gValue: 16,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-26-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-post-title",
                  selectorGuids: ["887bfa74-22ba-a147-65b1-287557ab173b"],
                },
                globalSwatchId: "ca76be6e",
                rValue: 242,
                bValue: 35,
                gValue: 8,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1590460683548,
    },
    "a-27": {
      id: "a-27",
      title: "Blog Card Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".blog-post-title",
                  selectorGuids: ["887bfa74-22ba-a147-65b1-287557ab173b"],
                },
                globalSwatchId: "d94963dc",
                rValue: 10,
                bValue: 35,
                gValue: 16,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1590461030626,
    },
    "a-28": {
      id: "a-28",
      title: "Sidebar Blog Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".popular-title",
                  selectorGuids: ["9aafbdd2-201d-3306-4ab9-d055ae25330f"],
                },
                globalSwatchId: "d94963dc",
                rValue: 10,
                bValue: 35,
                gValue: 16,
                aValue: 1,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".popular-title",
                  selectorGuids: ["9aafbdd2-201d-3306-4ab9-d055ae25330f"],
                },
                globalSwatchId: "ca76be6e",
                rValue: 242,
                bValue: 35,
                gValue: 8,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1590461375085,
    },
    "a-29": {
      id: "a-29",
      title: "Sidebar Blog Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-29-n",
              actionTypeId: "STYLE_TEXT_COLOR",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".popular-title",
                  selectorGuids: ["9aafbdd2-201d-3306-4ab9-d055ae25330f"],
                },
                globalSwatchId: "d94963dc",
                rValue: 10,
                bValue: 35,
                gValue: 16,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1590461488244,
    },
    "a-30": {
      id: "a-30",
      title: "Home Pages Animation",
      continuousParameterGroups: [
        {
          id: "a-30-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-30-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".home-pages-top-wrapper",
                      selectorGuids: ["1b5909e8-451d-b41c-8893-586033213733"],
                    },
                    xValue: 10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-30-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".home-pages-bottom-wrapper",
                      selectorGuids: ["1b5909e8-451d-b41c-8893-586033213743"],
                    },
                    xValue: -10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-30-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".home-pages-top-wrapper",
                      selectorGuids: ["1b5909e8-451d-b41c-8893-586033213733"],
                    },
                    xValue: -10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
                {
                  id: "a-30-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "ease",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".home-pages-bottom-wrapper",
                      selectorGuids: ["1b5909e8-451d-b41c-8893-586033213743"],
                    },
                    xValue: 10,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1646109039881,
    },
    "a-31": {
      id: "a-31",
      title: "👓 Top Bar Reveal",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-31-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".top-bar-padding",
                  selectorGuids: ["06ada524-93de-57f3-c362-f5e271d2753e"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-31-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "ease",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".top-bar-padding",
                  selectorGuids: ["06ada524-93de-57f3-c362-f5e271d2753e"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1636763260837,
    },
    "a-33": {
      id: "a-33",
      title: "➡️ Link Icon Right - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.link-icon-right",
                  selectorGuids: [
                    "affc0e7c-d5be-cd13-8a62-b6eab95f6a75",
                    "410c2ec2-8595-a0c6-645d-7e64846db1f1",
                  ],
                },
                xValue: 3,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636689302152,
    },
    "a-34": {
      id: "a-34",
      title: "➡️ Link Icon Right - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".line-rounded-icon.link-icon-right",
                  selectorGuids: [
                    "affc0e7c-d5be-cd13-8a62-b6eab95f6a75",
                    "410c2ec2-8595-a0c6-645d-7e64846db1f1",
                  ],
                },
                xValue: 0,
                xUnit: "px",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636689362821,
    },
    "a-32": {
      id: "a-32",
      title: "❌ Top Bar Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-32-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".top-bar-padding",
                  selectorGuids: ["06ada524-93de-57f3-c362-f5e271d2753e"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-32-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 300,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".top-bar-wrapper",
                  selectorGuids: ["06ada524-93de-57f3-c362-f5e271d27540"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "px",
                locked: false,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1636685387979,
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInRight: {
      id: "slideInRight",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
