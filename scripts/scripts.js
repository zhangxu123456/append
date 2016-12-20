function supportsTransitions() {
    "use strict";
    var e = document.body || document.documentElement
        , t = e.style
        , n = "transition";
    return "string" == typeof t[n] ? !0 : !1
}
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        t = t || K;
        var n = t.createElement("script");
        n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
    }
    function r(e) {
        var t = !!e && "length"in e && e.length
            , n = fe.type(e);
        return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (fe.isFunction(t))
            return fe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return fe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (Te.test(t))
                return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return ie.call(t, e) > -1 !== n && 1 === e.nodeType
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function a(e) {
        var t = {};
        return fe.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function s(e) {
        return e
    }
    function u(e) {
        throw e
    }
    function l(e, t, n) {
        var r;
        try {
            e && fe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && fe.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }
    function c() {
        K.removeEventListener("DOMContentLoaded", c),
            e.removeEventListener("load", c),
            fe.ready()
    }
    function d() {
        this.expando = fe.expando + d.uid++
    }
    function f(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(He, "-$&").toLowerCase(),
                    n = e.getAttribute(r),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Re.test(n) ? JSON.parse(n) : n
                } catch (i) {}
                Fe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function h(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
            : function() {
            return fe.css(e, t, "")
        }
            , u = s(), l = n && n[3] || (fe.cssNumber[t] ? "" : "px"), c = (fe.cssNumber[t] || "px" !== l && +u) && Me.exec(fe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
                n = n || [],
                c = +u || 1;
            do
                o = o || ".5",
                    c /= o,
                    fe.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    function p(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = We[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)),
            i = fe.css(t, "display"),
            t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
            We[r] = i,
            i)
    }
    function g(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++)
            r = e[o],
            r.style && (n = r.style.display,
                t ? ("none" === n && (i[o] = Oe.get(r, "display") || null ,
                i[o] || (r.style.display = "")),
                "" === r.style.display && Ie(r) && (i[o] = p(r))) : "none" !== n && (i[o] = "none",
                    Oe.set(r, "display", n)));
        for (o = 0; a > o; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    function m(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], n) : n
    }
    function v(e, t) {
        for (var n = 0, r = e.length; r > n; n++)
            Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
    }
    function y(e, t, n, r, i) {
        for (var o, a, s, u, l, c, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; p > h; h++)
            if (o = e[h],
                o || 0 === o)
                if ("object" === fe.type(o))
                    fe.merge(f, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")),
                             s = (_e.exec(o) || ["", ""])[1].toLowerCase(),
                             u = Xe[s] || Xe._default,
                             a.innerHTML = u[1] + fe.htmlPrefilter(o) + u[2],
                             c = u[0]; c--; )
                        a = a.lastChild;
                    fe.merge(f, a.childNodes),
                        a = d.firstChild,
                        a.textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
                 h = 0; o = f[h++]; )
            if (r && fe.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = fe.contains(o.ownerDocument, o),
                    a = m(d.appendChild(o), "script"),
                l && v(a),
                    n)
                for (c = 0; o = a[c++]; )
                    Ue.test(o.type || "") && n.push(o);
        return d
    }
    function b() {
        return !0
    }
    function x() {
        return !1
    }
    function w() {
        try {
            return K.activeElement
        } catch (e) {}
    }
    function T(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
                n = void 0);
            for (s in t)
                T(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            i === !1)
            i = x;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            i = function(e) {
                return fe().off(e),
                    a.apply(this, arguments)
            }
            ,
            i.guid = a.guid || (a.guid = fe.guid++)),
            e.each(function() {
                fe.event.add(this, t, i, r, n)
            })
    }
    function C(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }
    function S(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function E(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function k(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Oe.hasData(e) && (o = Oe.access(e),
                    a = Oe.set(t, o),
                    l = o.events)) {
                delete a.handle,
                    a.events = {};
                for (i in l)
                    for (n = 0,
                             r = l[i].length; r > n; n++)
                        fe.event.add(t, i, l[i][n])
            }
            Fe.hasData(e) && (s = Fe.access(e),
                u = fe.extend({}, s),
                Fe.set(t, u))
        }
    }
    function N(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function A(e, t, r, i) {
        t = ne.apply([], t);
        var o, a, s, u, l, c, d = 0, f = e.length, h = f - 1, p = t[0], g = fe.isFunction(p);
        if (g || f > 1 && "string" == typeof p && !ce.checkClone && et.test(p))
            return e.each(function(n) {
                var o = e.eq(n);
                g && (t[0] = p.call(this, n, o.html())),
                    A(o, t, r, i)
            });
        if (f && (o = y(t, e[0].ownerDocument, !1, e, i),
                a = o.firstChild,
            1 === o.childNodes.length && (o = a),
            a || i)) {
            for (s = fe.map(m(o, "script"), S),
                     u = s.length; f > d; d++)
                l = o,
                d !== h && (l = fe.clone(l, !0, !0),
                u && fe.merge(s, m(l, "script"))),
                    r.call(e[d], l, d);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                         fe.map(s, E),
                         d = 0; u > d; d++)
                    l = s[d],
                    Ue.test(l.type || "") && !Oe.access(l, "globalEval") && fe.contains(c, l) && (l.src ? fe._evalUrl && fe._evalUrl(l.src) : n(l.textContent.replace(nt, ""), c))
        }
        return e
    }
    function L(e, t, n) {
        for (var r, i = t ? fe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || fe.cleanData(m(r)),
            r.parentNode && (n && fe.contains(r.ownerDocument, r) && v(m(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    function D(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ot(e),
        n && (a = n.getPropertyValue(t) || n[t],
        "" !== a || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)),
        !ce.pixelMarginRight() && it.test(a) && rt.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function j(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function q(e) {
        if (e in ct)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; )
            if (e = lt[n] + t,
                e in ct)
                return e
    }
    function O(e, t, n) {
        var r = Me.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function F(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += fe.css(e, n + $e[o], !0, i)),
                r ? ("content" === n && (a -= fe.css(e, "padding" + $e[o], !0, i)),
                "margin" !== n && (a -= fe.css(e, "border" + $e[o] + "Width", !0, i))) : (a += fe.css(e, "padding" + $e[o], !0, i),
                "padding" !== n && (a += fe.css(e, "border" + $e[o] + "Width", !0, i)));
        return a
    }
    function R(e, t, n) {
        var r, i = !0, o = ot(e), a = "border-box" === fe.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]),
            0 >= r || null == r) {
            if (r = D(e, t, o),
                (0 > r || null == r) && (r = e.style[t]),
                    it.test(r))
                return r;
            i = a && (ce.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e,t,n,r,i)
    }
    function P() {
        ft && (e.requestAnimationFrame(P),
            fe.fx.tick())
    }
    function M() {
        return e.setTimeout(function() {
            dt = void 0
        }),
            dt = fe.now()
    }
    function $(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = $e[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function I(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function B(e, t, n) {
        var r, i, o, a, s, u, l, c, d = "width"in t || "height"in t, f = this, h = {}, p = e.style, m = e.nodeType && Ie(e), v = Oe.get(e, "fxshow");
        n.queue || (a = fe._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
        ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    fe.queue(e, "fx").length || a.empty.fire()
                })
            }));
        for (r in t)
            if (i = t[r],
                    ht.test(i)) {
                if (delete t[r],
                        o = o || "toggle" === i,
                    i === (m ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r])
                        continue;
                    m = !0
                }
                h[r] = v && v[r] || fe.style(e, r)
            }
        if (u = !fe.isEmptyObject(t),
            u || !fe.isEmptyObject(h)) {
            d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                l = v && v.display,
            null == l && (l = Oe.get(e, "display")),
                c = fe.css(e, "display"),
            "none" === c && (l ? c = l : (g([e], !0),
                l = e.style.display || l,
                c = fe.css(e, "display"),
                g([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === fe.css(e, "float") && (u || (f.done(function() {
                p.display = l
            }),
            null == l && (c = p.display,
                l = "none" === c ? "" : c)),
                p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
                f.always(function() {
                    p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                })),
                u = !1;
            for (r in h)
                u || (v ? "hidden"in v && (m = v.hidden) : v = Oe.access(e, "fxshow", {
                    display: l
                }),
                o && (v.hidden = !m),
                m && g([e], !0),
                    f.done(function() {
                        m || g([e]),
                            Oe.remove(e, "fxshow");
                        for (r in h)
                            fe.style(e, r, h[r])
                    })),
                    u = I(m ? v[r] : 0, r, f),
                r in v || (v[r] = u.start,
                m && (u.end = u.start,
                    u.start = 0))
        }
    }
    function W(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = fe.camelCase(n),
                    i = t[r],
                    o = e[n],
                fe.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                    a = fe.cssHooks[r],
                a && "expand"in a) {
                o = a.expand(o),
                    delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                        t[n] = i)
            } else
                t[r] = i
    }
    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = fe.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = dt || M(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)
                l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]),
                1 > o && u ? n : (s.resolveWith(e, [l]),
                    !1)
        }, l = s.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {
                specialEasing: {},
                easing: fe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: dt || M(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = fe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
            },
            stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
            }
        }), c = l.props;
        for (W(c, l.opts.specialEasing); a > o; o++)
            if (r = z.prefilters[o].call(l, e, c, l.opts))
                return fe.isFunction(r.stop) && (fe._queueHooks(l.elem, l.opts.queue).stop = fe.proxy(r.stop, r)),
                    r;
        return fe.map(c, I, l),
        fe.isFunction(l.opts.start) && l.opts.start.call(e, l),
            fe.fx.timer(fe.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function _(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function U(e, t, n, r) {
        var i;
        if (fe.isArray(t))
            fe.each(t, function(t, i) {
                n || kt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== fe.type(t))
            r(e, t);
        else
            for (i in t)
                U(e + "[" + i + "]", t[i], n, r)
    }
    function X(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var r, i = 0, o = t.toLowerCase().match(Ae) || [];
            if (fe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function V(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
                fe.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                }),
                u
        }
        var o = {}
            , a = e === Mt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function Q(e, t) {
        var n, r, i = fe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && fe.extend(!0, e, r),
            e
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o),
            n[o]) : void 0
    }
    function G(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = o,
                    o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o],
                            !a)
                        for (i in l)
                            if (s = i.split(" "),
                                s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0],
                                    c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Z(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = []
        , K = e.document
        , ee = Object.getPrototypeOf
        , te = J.slice
        , ne = J.concat
        , re = J.push
        , ie = J.indexOf
        , oe = {}
        , ae = oe.toString
        , se = oe.hasOwnProperty
        , ue = se.toString
        , le = ue.call(Object)
        , ce = {}
        , de = "3.1.0"
        , fe = function(e, t) {
        return new fe.fn.init(e,t)
    }
        , he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , pe = /^-ms-/
        , ge = /-([a-z])/g
        , me = function(e, t) {
        return t.toUpperCase()
    };
    fe.fn = fe.prototype = {
        jquery: de,
        constructor: fe,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : te.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: J.sort,
        splice: J.splice
    },
        fe.extend = fe.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                 "object" == typeof a || fe.isFunction(a) || (a = {}),
                 s === u && (a = this,
                     s--); u > s; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = a[t],
                            r = e[t],
                        a !== r && (l && r && (fe.isPlainObject(r) || (i = fe.isArray(r))) ? (i ? (i = !1,
                            o = n && fe.isArray(n) ? n : []) : o = n && fe.isPlainObject(n) ? n : {},
                            a[t] = fe.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        fe.extend({
            expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = fe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return e && "[object Object]" === ae.call(e) ? (t = ee(e)) ? (n = se.call(t, "constructor") && t.constructor,
                "function" == typeof n && ue.call(n) === le) : !0 : !1
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[ae.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(pe, "ms-").replace(ge, me)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (r(e))
                    for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++)
                        ;
                else
                    for (i in e)
                        if (t.call(e[i], i, e[i]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (r(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : ie.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                    r = !t(e[o], o),
                    r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, a = 0, s = [];
                if (r(e))
                    for (i = e.length; i > a; a++)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                else
                    for (a in e)
                        o = t(e[a], a, n),
                        null != o && s.push(o);
                return ne.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                return "string" == typeof t && (n = e[t],
                    t = e,
                    e = n),
                    fe.isFunction(e) ? (r = te.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, r.concat(te.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || fe.guid++,
                        i) : void 0
            },
            now: Date.now,
            support: ce
        }),
    "function" == typeof Symbol && (fe.fn[Symbol.iterator] = J[Symbol.iterator]),
        fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            oe["[object " + t + "]"] = t.toLowerCase()
        });
    var ve = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [],
                "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== O && q(t),
                    t = t || O,
                    R)) {
                if (11 !== p && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(i)) && $(t, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return J.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName)
                            return J.apply(n, t.getElementsByClassName(i)),
                                n
                    }
                if (T.qsa && !X[e + " "] && (!H || !H.test(e))) {
                    if (1 !== p)
                        f = t,
                            c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = I),
                                 l = k(e),
                                 o = l.length; o--; )
                            l[o] = "#" + s + " " + h(l[o]);
                        c = l.join(","),
                            f = ye.test(e) && d(t.parentNode) || t
                    }
                    if (c)
                        try {
                            return J.apply(n, f.querySelectorAll(c)),
                                n
                        } catch (g) {} finally {
                            s === I && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[I] = !0,
                e
        }
        function i(e) {
            var t = O.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                C.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                return "label"in t && t.disabled === e || "form"in t && t.disabled === e || "form"in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label"in t || !Se(t)) !== e)
            }
        }
        function c(e) {
            return r(function(t) {
                return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
            })
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function h(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function p(e, t, n) {
            var r = t.dir
                , i = t.next
                , o = i || r
                , a = n && "parentNode" === o
                , s = z++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i)
            }
                : function(t, n, u) {
                var l, c, d, f = [W, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (d = t[I] || (t[I] = {}),
                                    c = d[t.uniqueID] || (d[t.uniqueID] = {}),
                                i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === W && l[1] === s)
                                    return f[2] = l[2];
                                if (c[o] = f,
                                        f[2] = e(t, n, u))
                                    return !0
                            }
            }
        }
        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
                : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                l && t.push(s));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[I] && (i = y(i)),
            o && !o[I] && (o = y(o, a)),
                r(function(r, a, s, u) {
                    var l, c, d, f = [], h = [], p = a.length, g = r || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !r && t ? g : v(g, f, e, s, u), b = n ? o || (r ? e : p || i) ? [] : a : y;
                    if (n && n(y, b, s, u),
                            i)
                        for (l = v(b, h),
                                 i(l, [], s, u),
                                 c = l.length; c--; )
                            (d = l[c]) && (b[h[c]] = !(y[h[c]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                         c = b.length; c--; )
                                    (d = b[c]) && l.push(y[c] = d);
                                o(null , b = [], l, u)
                            }
                            for (c = b.length; c--; )
                                (d = b[c]) && (l = o ? ee(r, d) : f[c]) > -1 && (r[l] = !(a[l] = d))
                        }
                    } else
                        b = v(b === a ? b.splice(p, b.length) : b),
                            o ? o(null , a, b, u) : J.apply(a, b)
                })
        }
        function b(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t
            }, a, !0), l = p(function(e) {
                return ee(t, e) > -1
            }, a, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== L) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null ,
                    i
            }
            ]; i > s; s++)
                if (n = C.relative[e[s].type])
                    c = [p(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null , e[s].matches),
                            n[I]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && g(c), s > 1 && h(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(se, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && h(e))
                    }
                    c.push(n)
                }
            return g(c)
        }
        function x(e, n) {
            var i = n.length > 0
                , o = e.length > 0
                , a = function(r, a, s, u, l) {
                var c, d, f, h = 0, p = "0", g = r && [], m = [], y = L, b = r || o && C.find.TAG("*", l), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                for (l && (L = a === O || a || l); p !== w && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (d = 0,
                             a || c.ownerDocument === O || (q(c),
                                 s = !R); f = e[d++]; )
                            if (f(c, a || O, s)) {
                                u.push(c);
                                break
                            }
                        l && (W = x)
                    }
                    i && ((c = !f && c) && h--,
                    r && g.push(c))
                }
                if (h += p,
                    i && p !== h) {
                    for (d = 0; f = n[d++]; )
                        f(g, m, a, s);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                g[p] || m[p] || (m[p] = G.call(u));
                        m = v(m)
                    }
                    J.apply(u, m),
                    l && !r && m.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return l && (W = x,
                    L = y),
                    g
            };
            return i ? r(a) : a
        }
        var w, T, C, S, E, k, N, A, L, D, j, q, O, F, R, H, P, M, $, I = "sizzle" + 1 * new Date, B = e.document, W = 0, z = 0, _ = n(), U = n(), X = n(), V = function(e, t) {
            return e === t && (j = !0),
                0
        }, Q = {}.hasOwnProperty, Y = [], G = Y.pop, Z = Y.push, J = Y.push, K = Y.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), fe = new RegExp("^" + re + "$"), he = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, Te = function(e, t) {
            return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Ce = function() {
            q()
        }, Se = p(function(e) {
            return e.disabled === !0
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            J.apply(Y = K.call(B.childNodes), B.childNodes),
                Y[B.childNodes.length].nodeType
        } catch (Ee) {
            J = {
                apply: Y.length ? function(e, t) {
                    Z.apply(e, K.call(t))
                }
                    : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        T = t.support = {},
            E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
            ,
            q = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : B;
                return r !== O && 9 === r.nodeType && r.documentElement ? (O = r,
                    F = O.documentElement,
                    R = !E(O),
                B !== O && (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                    T.attributes = i(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    T.getElementsByTagName = i(function(e) {
                        return e.appendChild(O.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    T.getElementsByClassName = me.test(O.getElementsByClassName),
                    T.getById = i(function(e) {
                        return F.appendChild(e).id = I,
                        !O.getElementsByName || !O.getElementsByName(I).length
                    }),
                    T.getById ? (C.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && R) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                            ,
                            C.filter.ID = function(e) {
                                var t = e.replace(be, xe);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                    ) : (delete C.find.ID,
                            C.filter.ID = function(e) {
                                var t = e.replace(be, xe);
                                return function(e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                    ),
                    C.find.TAG = T.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }
                    ,
                    C.find.CLASS = T.getElementsByClassName && function(e, t) {
                            return "undefined" != typeof t.getElementsByClassName && R ? t.getElementsByClassName(e) : void 0
                        }
                    ,
                    P = [],
                    H = [],
                (T.qsa = me.test(O.querySelectorAll)) && (i(function(e) {
                    F.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length || H.push("~="),
                    e.querySelectorAll(":checked").length || H.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length || H.push(".#.+[+~]")
                }),
                    i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = O.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"),
                            F.appendChild(e).disabled = !0,
                        2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            H.push(",.*:")
                    })),
                (T.matchesSelector = me.test(M = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && i(function(e) {
                    T.disconnectedMatch = M.call(e, "*"),
                        M.call(e, "[s!='']:x"),
                        P.push("!=", oe)
                }),
                    H = H.length && new RegExp(H.join("|")),
                    P = P.length && new RegExp(P.join("|")),
                    t = me.test(F.compareDocumentPosition),
                    $ = t || me.test(F.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                        : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    V = t ? function(e, t) {
                        if (e === t)
                            return j = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                            1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === B && $(B, e) ? -1 : t === O || t.ownerDocument === B && $(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function(e, t) {
                        if (e === t)
                            return j = !0,
                                0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
                        if (!i || !o)
                            return e === O ? -1 : t === O ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                        if (i === o)
                            return a(e, t);
                        for (n = e; n = n.parentNode; )
                            s.unshift(n);
                        for (n = t; n = n.parentNode; )
                            u.unshift(n);
                        for (; s[r] === u[r]; )
                            r++;
                        return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
                    }
                    ,
                    O) : O
            }
            ,
            t.matches = function(e, n) {
                return t(e, null , null , n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== O && q(e),
                        n = n.replace(ce, "='$1']"),
                    T.matchesSelector && R && !X[n + " "] && (!P || !P.test(n)) && (!H || !H.test(n)))
                    try {
                        var r = M.call(e, n);
                        if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (i) {}
                return t(n, O, null , [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== O && q(e),
                    $(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== O && q(e);
                var n = C.attrHandle[t.toLowerCase()]
                    , r = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
                return void 0 !== r ? r : T.attributes || !R ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(we, Te)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (j = !T.detectDuplicates,
                        D = !T.sortStable && e.slice(0),
                        e.sort(V),
                        j) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return D = null ,
                    e
            }
            ,
            S = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += S(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += S(t);
                return n
            }
            ,
            C = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, xe),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                            : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : n ? (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                            , a = "last" !== e.slice(-4)
                            , s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                            : function(t, n, u) {
                            var l, c, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, b = !1;
                            if (m) {
                                if (o) {
                                    for (; g; ) {
                                        for (f = t; f = f[g]; )
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild],
                                    a && y) {
                                    for (f = m,
                                             d = f[I] || (f[I] = {}),
                                             c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                             l = c[e] || [],
                                             h = l[0] === W && l[1],
                                             b = h && l[2],
                                             f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop(); )
                                        if (1 === f.nodeType && ++b && f === t) {
                                            c[e] = [W, h, b];
                                            break
                                        }
                                } else if (y && (f = t,
                                        d = f[I] || (f[I] = {}),
                                        c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                        l = c[e] || [],
                                        h = l[0] === W && l[1],
                                        b = h),
                                    b === !1)
                                    for (; (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[I] || (f[I] = {}),
                                        c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                        c[e] = [W, b]),
                                    f !== t)); )
                                        ;
                                return b -= i,
                                b === r || b % r === 0 && b / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                                C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                    for (var r, i = o(e, n), a = i.length; a--; )
                                        r = ee(e, i[a]),
                                            e[r] = !(t[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, i)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                            , n = []
                            , i = N(e.replace(se, "$1"));
                        return i[I] ? r(function(e, t, n, r) {
                            for (var o, a = i(e, null , r, []), s = e.length; s--; )
                                (o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                                i(t, null , o, n),
                                t[0] = null ,
                                !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(be, xe),
                            function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                    }),
                    lang: r(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(be, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === F
                    },
                    focus: function(e) {
                        return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: l(!1),
                    disabled: l(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return pe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            C.pseudos.nth = C.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            C.pseudos[w] = s(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            C.pseudos[w] = u(w);
        return f.prototype = C.filters = C.pseudos,
            C.setFilters = new f,
            k = t.tokenize = function(e, n) {
                var r, i, o, a, s, u, l, c = U[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e,
                         u = [],
                         l = C.preFilter; s; ) {
                    (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s),
                        u.push(o = [])),
                        r = !1,
                    (i = le.exec(s)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }),
                        s = s.slice(r.length));
                    for (a in C.filter)
                        !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: a,
                                matches: i
                            }),
                            s = s.slice(r.length));
                    if (!r)
                        break
                }
                return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
            }
            ,
            N = t.compile = function(e, t) {
                var n, r = [], i = [], o = X[e + " "];
                if (!o) {
                    for (t || (t = k(e)),
                             n = t.length; n--; )
                        o = b(t[n]),
                            o[I] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r)),
                        o.selector = e
                }
                return o
            }
            ,
            A = t.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && k(e = l.selector || e);
                if (n = n || [],
                    1 === c.length) {
                    if (o = c[0] = c[0].slice(0),
                        o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && R && C.relative[o[1].type]) {
                        if (t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0],
                                !t)
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                        !C.relative[s = a.type]); )
                        if ((u = C.find[s]) && (r = u(a.matches[0].replace(be, xe), ye.test(o[0].type) && d(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                    e = r.length && h(o),
                                    !e)
                                return J.apply(n, r),
                                    n;
                            break
                        }
                }
                return (l || N(e, c))(r, t, !R, n, !t || ye.test(e) && d(t.parentNode) || t),
                    n
            }
            ,
            T.sortStable = I.split("").sort(V).join("") === I,
            T.detectDuplicates = !!j,
            q(),
            T.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(O.createElement("fieldset"))
            }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        T.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            t
    }(e);
    fe.find = ve,
        fe.expr = ve.selectors,
        fe.expr[":"] = fe.expr.pseudos,
        fe.uniqueSort = fe.unique = ve.uniqueSort,
        fe.text = ve.getText,
        fe.isXMLDoc = ve.isXML,
        fe.contains = ve.contains,
        fe.escapeSelector = ve.escape;
    var ye = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && fe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , be = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , xe = fe.expr.match.needsContext
        , we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        , Te = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        fe.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(fe(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (fe.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                         t = 0; r > t; t++)
                    fe.find(e, i[t], n);
                return r > 1 ? fe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
            }
        });
    var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ee = fe.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || Ce,
                "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null , e, null ] : Se.exec(e),
                    !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof fe ? t[0] : t,
                            fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : K, !0)),
                        we.test(r[1]) && fe.isPlainObject(t))
                        for (r in t)
                            fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = K.getElementById(r[2]),
                i && (this[0] = i,
                    this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this)
        }
        ;
    Ee.prototype = fe.fn,
        Ce = fe(K);
    var ke = /^(?:parents|prev(?:Until|All))/
        , Ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fe.fn.extend({
        has: function(e) {
            var t = fe(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (fe.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && fe(e);
            if (!xe.test(e))
                for (; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ie.call(fe(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ye(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ye(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return ye(e, "nextSibling")
            },
            prevAll: function(e) {
                return ye(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ye(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ye(e, "previousSibling", n)
            },
            siblings: function(e) {
                return be((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return be(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || fe.merge([], e.childNodes)
            }
        }, function(e, t) {
            fe.fn[e] = function(n, r) {
                var i = fe.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = fe.filter(r, i)),
                this.length > 1 && (Ne[e] || fe.uniqueSort(i),
                ke.test(e) && i.reverse()),
                    this.pushStack(i)
            }
        });
    var Ae = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : fe.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function() {
            for (i = e.once,
                     r = t = !0; s.length; u = -1)
                for (n = s.shift(); ++u < o.length; )
                    o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length,
                        n = !1);
            e.memory || (n = !1),
                t = !1,
            i && (o = n ? [] : "")
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1,
                    s.push(n)),
                    function r(t) {
                        fe.each(t, function(t, n) {
                            fe.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== fe.type(n) && r(n)
                        })
                    }(arguments),
                n && !t && l()),
                    this
            },
            remove: function() {
                return fe.each(arguments, function(e, t) {
                    for (var n; (n = fe.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        u >= n && u--
                }),
                    this
            },
            has: function(e) {
                return e ? fe.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                    this
            },
            disable: function() {
                return i = s = [],
                    o = n = "",
                    this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = s = [],
                n || t || (o = n = ""),
                    this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                t || l()),
                    this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
        ,
        fe.extend({
            Deferred: function(t) {
                var n = [["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2], ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]]
                    , r = "pending"
                    , i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments),
                            this
                    },
                    "catch": function(e) {
                        return i.then(null , e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return fe.Deferred(function(t) {
                            fe.each(n, function(n, r) {
                                var i = fe.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var l = this
                                    , c = arguments
                                    , d = function() {
                                        var e, d;
                                        if (!(a > t)) {
                                            if (e = r.apply(l, c),
                                                e === n.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                fe.isFunction(d) ? i ? d.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++,
                                                    d.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0,
                                                    c = [e]),
                                                    (i || n.resolveWith)(l, c))
                                        }
                                    }
                                    , f = i ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, f.stackTrace),
                                            t + 1 >= a && (r !== u && (l = void 0,
                                                c = [e]),
                                                n.rejectWith(l, c))
                                        }
                                    }
                                    ;
                                t ? f() : (fe.Deferred.getStackHook && (f.stackTrace = fe.Deferred.getStackHook()),
                                    e.setTimeout(f))
                            }
                        }
                        var a = 0;
                        return fe.Deferred(function(e) {
                            n[0][3].add(o(0, e, fe.isFunction(i) ? i : s, e.notifyWith)),
                                n[1][3].add(o(0, e, fe.isFunction(t) ? t : s)),
                                n[2][3].add(o(0, e, fe.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, i) : i
                    }
                }
                    , o = {};
                return fe.each(n, function(e, t) {
                    var a = t[2]
                        , s = t[5];
                    i[t[1]] = a.add,
                    s && a.add(function() {
                        r = s
                    }, n[3 - e][2].disable, n[0][2].lock),
                        a.add(t[3].fire),
                        o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                        }
                        ,
                        o[t[0] + "With"] = a.fireWith
                }),
                    i.promise(o),
                t && t.call(o, o),
                    o
            },
            when: function(e) {
                var t = arguments.length
                    , n = t
                    , r = Array(n)
                    , i = te.call(arguments)
                    , o = fe.Deferred()
                    , a = function(e) {
                    return function(n) {
                        r[e] = this,
                            i[e] = arguments.length > 1 ? te.call(arguments) : n,
                        --t || o.resolveWith(r, i)
                    }
                };
                if (1 >= t && (l(e, o.done(a(n)).resolve, o.reject),
                    "pending" === o.state() || fe.isFunction(i[n] && i[n].then)))
                    return o.then();
                for (; n--; )
                    l(i[n], a(n), o.reject);
                return o.promise()
            }
        });
    var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
        ,
        fe.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        }
    ;
    var De = fe.Deferred();
    fe.fn.ready = function(e) {
        return De.then(e)["catch"](function(e) {
            fe.readyException(e)
        }),
            this
    }
        ,
        fe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? fe.readyWait++ : fe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0,
                e !== !0 && --fe.readyWait > 0 || De.resolveWith(K, [fe]))
            }
        }),
        fe.ready.then = De.then,
        "complete" === K.readyState || "loading" !== K.readyState && !K.documentElement.doScroll ? e.setTimeout(fe.ready) : (K.addEventListener("DOMContentLoaded", c),
            e.addEventListener("load", c));
    var je = function(e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === fe.type(n)) {
            i = !0;
            for (s in n)
                je(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
            fe.isFunction(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null ) : (l = t,
                    t = function(e, t, n) {
                        return l.call(fe(e), n)
                    }
            )),
                t))
            for (; u > s; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , qe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    d.uid = 1,
        d.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[fe.camelCase(t)] = n;
                else
                    for (r in t)
                        i[fe.camelCase(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        fe.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t),
                            t = t in r ? [t] : t.match(Ae) || []),
                            n = t.length;
                        for (; n--; )
                            delete r[t[n]]
                    }
                    (void 0 === t || fe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !fe.isEmptyObject(t)
            }
        };
    var Oe = new d
        , Fe = new d
        , Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , He = /[A-Z]/g;
    fe.extend({
        hasData: function(e) {
            return Fe.hasData(e) || Oe.hasData(e)
        },
        data: function(e, t, n) {
            return Fe.access(e, t, n)
        },
        removeData: function(e, t) {
            Fe.remove(e, t)
        },
        _data: function(e, t, n) {
            return Oe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Oe.remove(e, t)
        }
    }),
        fe.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Fe.get(o),
                        1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; )
                            a[n] && (r = a[n].name,
                            0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)),
                                f(o, r, i[r])));
                        Oe.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    Fe.set(this, e)
                }) : je(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = Fe.get(o, e),
                            void 0 !== n)
                            return n;
                        if (n = f(o, e),
                            void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            Fe.set(this, e, t)
                        })
                }, null , t, arguments.length > 1, null , !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Fe.remove(this, e)
                })
            }
        }),
        fe.extend({
            queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue",
                    r = Oe.get(e, t),
                n && (!r || fe.isArray(n) ? r = Oe.access(e, t, fe.makeArray(n)) : r.push(n)),
                r || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = fe.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = fe._queueHooks(e, t)
                    , a = function() {
                    fe.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, a, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Oe.get(e, n) || Oe.access(e, n, {
                        empty: fe.Callbacks("once memory").add(function() {
                            Oe.remove(e, [t + "queue", n])
                        })
                    })
            }
        }),
        fe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = fe.queue(this, e, t);
                        fe._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = fe.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; a--; )
                    n = Oe.get(o[a], e + "queueHooks"),
                    n && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Me = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$","i")
        , $e = ["Top", "Right", "Bottom", "Left"]
        , Ie = function(e, t) {
        return e = t || e,
        "none" === e.style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
    }
        , Be = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    }
        , We = {};
    fe.fn.extend({
        show: function() {
            return g(this, !0)
        },
        hide: function() {
            return g(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ie(this) ? fe(this).show() : fe(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i
        , _e = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , Ue = /^$|\/(?:java|ecma)script/i
        , Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Xe.optgroup = Xe.option,
        Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead,
        Xe.th = Xe.td;
    var Ve = /<|&#?\w+;/;
    !function() {
        var e = K.createDocumentFragment()
            , t = e.appendChild(K.createElement("div"))
            , n = K.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            ce.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            ce.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = K.documentElement
        , Ye = /^key/
        , Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Ze = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, p, g, m = Oe.get(e);
            if (m)
                for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                     i && fe.find.matchesSelector(Qe, i),
                     n.guid || (n.guid = fe.guid++),
                     (u = m.events) || (u = m.events = {}),
                     (a = m.handle) || (a = m.handle = function(t) {
                             return "undefined" != typeof fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
                         }
                     ),
                         t = (t || "").match(Ae) || [""],
                         l = t.length; l--; )
                    s = Ze.exec(t[l]) || [],
                        h = g = s[1],
                        p = (s[2] || "").split(".").sort(),
                    h && (d = fe.event.special[h] || {},
                        h = (i ? d.delegateType : d.bindType) || h,
                        d = fe.event.special[h] || {},
                        c = fe.extend({
                            type: h,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && fe.expr.match.needsContext.test(i),
                            namespace: p.join(".")
                        }, o),
                    (f = u[h]) || (f = u[h] = [],
                        f.delegateCount = 0,
                    d.setup && d.setup.call(e, r, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a)),
                    d.add && (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? f.splice(f.delegateCount++, 0, c) : f.push(c),
                        fe.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, d, f, h, p, g, m = Oe.hasData(e) && Oe.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(Ae) || [""],
                         l = t.length; l--; )
                    if (s = Ze.exec(t[l]) || [],
                            h = g = s[1],
                            p = (s[2] || "").split(".").sort(),
                            h) {
                        for (d = fe.event.special[h] || {},
                                 h = (r ? d.delegateType : d.bindType) || h,
                                 f = u[h] || [],
                                 s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 a = o = f.length; o--; )
                            c = f[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        a && !f.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || fe.removeEvent(e, h, m.handle),
                            delete u[h])
                    } else
                        for (h in u)
                            fe.event.remove(e, h + t[l], n, r, !0);
                fe.isEmptyObject(u) && Oe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = fe.event.fix(e), u = new Array(arguments.length), l = (Oe.get(this, "events") || {})[s.type] || [], c = fe.event.special[s.type] || {};
            for (u[0] = s,
                     t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, s) !== !1) {
                for (a = fe.event.handlers.call(this, s, l),
                         t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                             n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (!s.rnamespace || s.rnamespace.test(o.namespace)) && (s.handleObj = o,
                            s.data = o.data,
                            r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u),
                        void 0 !== r && (s.result = r) === !1 && (s.preventDefault(),
                            s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                                 n = 0; s > n; n++)
                            o = t[n],
                                i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? fe(i, this).index(u) > -1 : fe.find(i, this, null , [u]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
                a
        },
        addProp: function(e, t) {
            Object.defineProperty(fe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: fe.isFunction(t) ? function() {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                }
                    : function() {
                    return this.originalEvent ? this.originalEvent[e] : void 0
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[fe.expando] ? e : new fe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== w() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === w() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fe.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        fe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        fe.Event = function(e, t) {
            return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : x,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
            t && fe.extend(this, t),
                this.timeStamp = e && e.timeStamp || fe.now(),
                void (this[fe.expando] = !0)) : new fe.Event(e,t)
        }
        ,
        fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: x,
            isPropagationStopped: x,
            isImmediatePropagationStopped: x,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = b,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = b,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = b,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        fe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, fe.event.addProp),
        fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            fe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return (!i || i !== r && !fe.contains(r, i)) && (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
        fe.fn.extend({
            on: function(e, t, n, r) {
                return T(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return T(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t,
                    t = void 0),
                n === !1 && (n = x),
                    this.each(function() {
                        fe.event.remove(this, e, n, t)
                    })
            }
        });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , Ke = /<script|<style|<link/i
        , et = /checked\s*(?:[^=]|=\s*.checked.)/i
        , tt = /^true\/(.*)/
        , nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = fe.contains(e.ownerDocument, e);
            if (!(ce.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (a = m(s),
                         o = m(e),
                         r = 0,
                         i = o.length; i > r; r++)
                    N(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || m(e),
                             a = a || m(s),
                             r = 0,
                             i = o.length; i > r; r++)
                        k(o[r], a[r]);
                else
                    k(e, s);
            return a = m(s, "script"),
            a.length > 0 && v(a, !u && m(e, "script")),
                s
        },
        cleanData: function(e) {
            for (var t, n, r, i = fe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (qe(n)) {
                    if (t = n[Oe.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, t.handle);
                        n[Oe.expando] = void 0
                    }
                    n[Fe.expando] && (n[Fe.expando] = void 0)
                }
        }
    }),
        fe.fn.extend({
            detach: function(e) {
                return L(this, e, !0)
            },
            remove: function(e) {
                return L(this, e)
            },
            text: function(e) {
                return je(this, function(e) {
                    return void 0 === e ? fe.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                    })
                }, null , e, arguments.length)
            },
            append: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return A(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = C(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (fe.cleanData(m(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return fe.clone(this, e, t)
                    })
            },
            html: function(e) {
                return je(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ke.test(e) && !Xe[(_e.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; r > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (fe.cleanData(m(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (i) {}
                    }
                    t && this.empty().append(e)
                }, null , e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return A(this, arguments, function(t) {
                    var n = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(m(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            fe.fn[e] = function(e) {
                for (var n, r = [], i = fe(e), o = i.length - 1, a = 0; o >= a; a++)
                    n = a === o ? this : this.clone(!0),
                        fe(i[a])[t](n),
                        re.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var rt = /^margin/
        , it = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$","i")
        , ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
            n.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    s.innerHTML = "",
                    Qe.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top,
                    o = "2px" === t.marginLeft,
                    r = "4px" === t.width,
                    s.style.marginRight = "50%",
                    i = "4px" === t.marginRight,
                    Qe.removeChild(a),
                    s = null
            }
        }
        var n, r, i, o, a = K.createElement("div"), s = K.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            ce.clearCloneStyle = "content-box" === s.style.backgroundClip,
            a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            a.appendChild(s),
            fe.extend(ce, {
                pixelPosition: function() {
                    return t(),
                        n
                },
                boxSizingReliable: function() {
                    return t(),
                        r
                },
                pixelMarginRight: function() {
                    return t(),
                        i
                },
                reliableMarginLeft: function() {
                    return t(),
                        o
                }
            }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/
        , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , lt = ["Webkit", "Moz", "ms"]
        , ct = K.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = D(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = fe.camelCase(t), u = e.style;
                return t = fe.cssProps[s] || (fe.cssProps[s] = q(s) || s),
                    a = fe.cssHooks[t] || fe.cssHooks[s],
                    void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                    "string" === o && (i = Me.exec(n)) && i[1] && (n = h(e, t, i),
                        o = "number"),
                    null != n && n === n && ("number" === o && (n += i && i[3] || (fe.cssNumber[s] ? "" : "px")),
                    ce.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)),
                        void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = fe.camelCase(t);
            return t = fe.cssProps[s] || (fe.cssProps[s] = q(s) || s),
                a = fe.cssHooks[t] || fe.cssHooks[s],
            a && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = D(e, t, r)),
            "normal" === i && t in ut && (i = ut[t]),
                "" === n || n ? (o = parseFloat(i),
                    n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
        fe.each(["height", "width"], function(e, t) {
            fe.cssHooks[t] = {
                get: function(e, n, r) {
                    return n ? !at.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, r) : Be(e, st, function() {
                        return R(e, t, r)
                    }) : void 0
                },
                set: function(e, n, r) {
                    var i, o = r && ot(e), a = r && F(e, t, r, "border-box" === fe.css(e, "boxSizing", !1, o), o);
                    return a && (i = Me.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                        n = fe.css(e, t)),
                        O(e, n, a)
                }
            }
        }),
        fe.cssHooks.marginLeft = j(ce.reliableMarginLeft, function(e, t) {
            return t ? (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),
        fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            fe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                        i[e + $e[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            rt.test(e) || (fe.cssHooks[e + t].set = O)
        }),
        fe.fn.extend({
            css: function(e, t) {
                return je(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (fe.isArray(t)) {
                        for (r = ot(e),
                                 i = t.length; i > a; a++)
                            o[t[a]] = fe.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        fe.Tween = H,
        H.prototype = {
            constructor: H,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || fe.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (fe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : H.propHooks._default.set(this),
                    this
            }
        },
        H.prototype.init.prototype = H.prototype,
        H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        fe.fx = H.prototype.init,
        fe.fx.step = {};
    var dt, ft, ht = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    fe.Animation = fe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Me.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(Ae);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                    z.tweeners[n] = z.tweeners[n] || [],
                    z.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
        fe.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || fe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !fe.isFunction(t) && t
            };
            return fe.fx.off || K.hidden ? r.duration = 0 : r.duration = "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default,
            (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    fe.isFunction(r.old) && r.old.call(this),
                    r.queue && fe.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        fe.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Ie).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = fe.isEmptyObject(e)
                    , o = fe.speed(t, n, r)
                    , a = function() {
                    var t = z(this, fe.extend({}, e), o);
                    (i || Oe.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , i = null != e && e + "queueHooks"
                            , o = fe.timers
                            , a = Oe.get(this);
                        if (i)
                            a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a)
                                a[i] && a[i].stop && pt.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                t = !1,
                                o.splice(i, 1));
                        (t || !n) && fe.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = Oe.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, a = r ? r.length : 0;
                        for (n.finish = !0,
                                 fe.queue(this, e, []),
                             i && i.stop && i.stop.call(this, !0),
                                 t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        fe.each(["toggle", "show", "hide"], function(e, t) {
            var n = fe.fn[t];
            fe.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
            }
        }),
        fe.each({
            slideDown: $("show"),
            slideUp: $("hide"),
            slideToggle: $("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            fe.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        fe.timers = [],
        fe.fx.tick = function() {
            var e, t = 0, n = fe.timers;
            for (dt = fe.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || fe.fx.stop(),
                dt = void 0
        }
        ,
        fe.fx.timer = function(e) {
            fe.timers.push(e),
                e() ? fe.fx.start() : fe.timers.pop()
        }
        ,
        fe.fx.interval = 13,
        fe.fx.start = function() {
            ft || (ft = e.requestAnimationFrame ? e.requestAnimationFrame(P) : e.setInterval(fe.fx.tick, fe.fx.interval))
        }
        ,
        fe.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(ft) : e.clearInterval(ft),
                ft = null
        }
        ,
        fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        fe.fn.delay = function(t, n) {
            return t = fe.fx ? fe.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var e = K.createElement("input")
                , t = K.createElement("select")
                , n = t.appendChild(K.createElement("option"));
            e.type = "checkbox",
                ce.checkOn = "" !== e.value,
                ce.optSelected = n.selected,
                e = K.createElement("input"),
                e.value = "t",
                e.type = "radio",
                ce.radioValue = "t" === e.value
        }();
    var gt, mt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function(e, t) {
            return je(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }),
        fe.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (i = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? gt : void 0)),
                        void 0 !== n ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = fe.find.attr(e, t),
                            null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ce.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(Ae);
                if (i && 1 === e.nodeType)
                    for (; n = i[r++]; )
                        e.removeAttribute(n)
            }
        }),
        gt = {
            set: function(e, t, n) {
                return t === !1 ? fe.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = mt[t] || fe.find.attr;
            mt[t] = function(e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = mt[a],
                    mt[a] = i,
                    i = null != n(e, t, r) ? a : null ,
                    mt[a] = o),
                    i
            }
        });
    var vt = /^(?:input|select|textarea|button)$/i
        , yt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return je(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[fe.propFix[e] || e]
            })
        }
    }),
        fe.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t,
                        i = fe.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
    ce.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        });
    var bt = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, _(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[u++]; )
                    if (i = _(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(bt, " ")) {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = fe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, _(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[u++]; )
                    if (i = _(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(bt, " ")) {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = fe.trim(r),
                        i !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, _(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                             i = fe(this),
                             o = e.match(Ae) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (void 0 === e || "boolean" === n) && (t = _(this),
                    t && Oe.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Oe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + _(n) + " ").replace(bt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var xt = /\r/g
        , wt = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = fe.isFunction(e),
                        this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, fe(this).val()) : e,
                                null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                if (i)
                    return t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                            "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
            }
        }
    }),
        fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : fe.trim(fe.text(e)).replace(wt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                            if (n = r[u],
                                (n.selected || u === i) && !n.disabled && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = fe(n).val(),
                                        o)
                                    return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = fe.makeArray(t), a = i.length; a--; )
                            r = i[a],
                            (r.selected = fe.inArray(fe.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
                }
            },
            ce.checkOn || (fe.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    fe.extend(fe.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, d, f = [r || K], h = se.call(t, "type") ? t.type : t, p = se.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || K,
                3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(h + fe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."),
                    h = p.shift(),
                    p.sort()),
                    l = h.indexOf(":") < 0 && "on" + h,
                    t = t[fe.expando] ? t : new fe.Event(h,"object" == typeof t && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = p.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    t.result = void 0,
                t.target || (t.target = r),
                    n = null == n ? [t] : fe.makeArray(n, [t]),
                    d = fe.event.special[h] || {},
                i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!i && !d.noBubble && !fe.isWindow(r)) {
                    for (u = d.delegateType || h,
                         Tt.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                            s = a;
                    s === (r.ownerDocument || K) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : d.bindType || h,
                        c = (Oe.get(a, "events") || {})[t.type] && Oe.get(a, "handle"),
                    c && c.apply(a, n),
                        c = l && a[l],
                    c && c.apply && qe(a) && (t.result = c.apply(a, n),
                    t.result === !1 && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !qe(r) || l && fe.isFunction(r[h]) && !fe.isWindow(r) && (s = r[l],
                s && (r[l] = null ),
                    fe.event.triggered = h,
                    r[h](),
                    fe.event.triggered = void 0,
                s && (r[l] = s)),
                    t.result
            }
        },
        simulate: function(e, t, n) {
            var r = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(r, null , t)
        }
    }),
        fe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? fe.event.trigger(e, t, n, !0) : void 0
            }
        }),
        fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            fe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
            }
        }),
        fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        ce.focusin = "onfocusin"in e,
    ce.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                    , i = Oe.access(r, t);
                i || r.addEventListener(e, n, !0),
                    Oe.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                    , i = Oe.access(r, t) - 1;
                i ? Oe.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    Oe.remove(r, t))
            }
        }
    });
    var Ct = e.location
        , St = fe.now()
        , Et = /\?/;
    fe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null ;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (r) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && fe.error("Invalid XML: " + t),
            n
    }
    ;
    var kt = /\[\]$/
        , Nt = /\r?\n/g
        , At = /^(?:submit|button|image|reset|file)$/i
        , Lt = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = fe.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (fe.isArray(e) || e.jquery && !fe.isPlainObject(e))
            fe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                U(n, e[n], t, i);
        return r.join("&")
    }
        ,
        fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !ze.test(e))
                }).map(function(e, t) {
                    var n = fe(this).val();
                    return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Nt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Nt, "\r\n")
                    }
                }).get()
            }
        });
    var Dt = /%20/g
        , jt = /#.*$/
        , qt = /([?&])_=[^&]*/
        , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Rt = /^(?:GET|HEAD)$/
        , Ht = /^\/\//
        , Pt = {}
        , Mt = {}
        , $t = "*/".concat("*")
        , It = K.createElement("a");
    It.href = Ct.href,
        fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Ft.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Q(Q(e, fe.ajaxSettings), t) : Q(fe.ajaxSettings, e)
            },
            ajaxPrefilter: X(Pt),
            ajaxTransport: X(Mt),
            ajax: function(t, n) {
                function r(t, n, r, s) {
                    var l, f, h, x, w, T = n;
                    c || (c = !0,
                    u && e.clearTimeout(u),
                        i = void 0,
                        a = s || "",
                        C.readyState = t > 0 ? 4 : 0,
                        l = t >= 200 && 300 > t || 304 === t,
                    r && (x = Y(p, C, r)),
                        x = G(p, x, C, l),
                        l ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"),
                        w && (fe.lastModified[o] = w),
                            w = C.getResponseHeader("etag"),
                        w && (fe.etag[o] = w)),
                            204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state,
                                f = x.data,
                                h = x.error,
                                l = !h)) : (h = T,
                        (t || !T) && (T = "error",
                        0 > t && (t = 0))),
                        C.status = t,
                        C.statusText = (n || T) + "",
                        l ? v.resolveWith(g, [f, T, C]) : v.rejectWith(g, [C, T, h]),
                        C.statusCode(b),
                        b = void 0,
                    d && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, p, l ? f : h]),
                        y.fireWith(g, [C, T]),
                    d && (m.trigger("ajaxComplete", [C, p]),
                    --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t,
                    t = void 0),
                    n = n || {};
                var i, o, a, s, u, l, c, d, f, h, p = fe.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? fe(g) : fe.event, v = fe.Deferred(), y = fe.Callbacks("once memory"), b = p.statusCode || {}, x = {}, w = {}, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ot.exec(a); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                            x[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (p.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return i && i.abort(t),
                            r(0, t),
                            this
                    }
                };
                if (v.promise(C),
                        p.url = ((t || p.url || Ct.href) + "").replace(Ht, Ct.protocol + "//"),
                        p.type = n.method || n.type || p.method || p.type,
                        p.dataTypes = (p.dataType || "*").toLowerCase().match(Ae) || [""],
                    null == p.crossDomain) {
                    l = K.createElement("a");
                    try {
                        l.href = p.url,
                            l.href = l.href,
                            p.crossDomain = It.protocol + "//" + It.host != l.protocol + "//" + l.host
                    } catch (S) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = fe.param(p.data, p.traditional)),
                        V(Pt, p, n, C),
                        c)
                    return C;
                d = fe.event && p.global,
                d && 0 === fe.active++ && fe.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Rt.test(p.type),
                    o = p.url.replace(jt, ""),
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Dt, "+")) : (h = p.url.slice(o.length),
                    p.data && (o += (Et.test(o) ? "&" : "?") + p.data,
                        delete p.data),
                    p.cache === !1 && (o = o.replace(qt, ""),
                        h = (Et.test(o) ? "&" : "?") + "_=" + St++ + h),
                        p.url = o + h),
                p.ifModified && (fe.lastModified[o] && C.setRequestHeader("If-Modified-Since", fe.lastModified[o]),
                fe.etag[o] && C.setRequestHeader("If-None-Match", fe.etag[o])),
                (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                    C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers)
                    C.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(g, C, p) === !1 || c))
                    return C.abort();
                if (T = "abort",
                        y.add(p.complete),
                        C.done(p.success),
                        C.fail(p.error),
                        i = V(Mt, p, n, C)) {
                    if (C.readyState = 1,
                        d && m.trigger("ajaxSend", [C, p]),
                            c)
                        return C;
                    p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                        C.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1,
                            i.send(x, r)
                    } catch (S) {
                        if (c)
                            throw S;
                        r(-1, S)
                    }
                } else
                    r(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return fe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, void 0, t, "script")
            }
        }),
        fe.each(["get", "post"], function(e, t) {
            fe[t] = function(e, n, r, i) {
                return fe.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    fe.ajax(fe.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, fe.isPlainObject(e) && e))
            }
        }),
        fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        fe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (fe.isFunction(e) && (e = e.call(this[0])),
                    t = fe(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstElementChild; )
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(e) {
                return fe.isFunction(e) ? this.each(function(t) {
                    fe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = fe(this)
                        , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = fe.isFunction(e);
                return this.each(function(n) {
                    fe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    fe(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        fe.expr.pseudos.hidden = function(e) {
            return !fe.expr.pseudos.visible(e)
        }
        ,
        fe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        fe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
        , Wt = fe.ajaxSettings.xhr();
    ce.cors = !!Wt && "withCredentials"in Wt,
        ce.ajax = Wt = !!Wt,
        fe.ajaxTransport(function(t) {
            var n, r;
            return ce.cors || Wt && !t.crossDomain ? {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null ,
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                        }
                    }
                        ,
                        s.onload = n(),
                        r = s.onerror = n("error"),
                        void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        }
                        ,
                        n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null )
                    } catch (u) {
                        if (n)
                            throw u
                    }
                },
                abort: function() {
                    n && n()
                }
            } : void 0
        }),
        fe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e),
                        e
                }
            }
        }),
        fe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        fe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = fe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null ,
                                e && i("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            K.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var zt = []
        , _t = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || fe.expando + "_" + St++;
            return this[e] = !0,
                e
        }
    }),
        fe.ajaxPrefilter("json jsonp", function(t, n, r) {
            var i, o, a, s = t.jsonp !== !1 && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s ? t[s] = t[s].replace(_t, "$1" + i) : t.jsonp !== !1 && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                t.converters["script json"] = function() {
                    return a || fe.error(i + " was not called"),
                        a[0]
                }
                ,
                t.dataTypes[0] = "json",
                o = e[i],
                e[i] = function() {
                    a = arguments
                }
                ,
                r.always(function() {
                    void 0 === o ? fe(e).removeProp(i) : e[i] = o,
                    t[i] && (t.jsonpCallback = n.jsonpCallback,
                        zt.push(i)),
                    a && fe.isFunction(o) && o(a[0]),
                        a = o = void 0
                }),
                "script") : void 0
        }),
        ce.createHTMLDocument = function() {
            var e = K.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        fe.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
                t = !1);
            var r, i, o;
            return t || (ce.createHTMLDocument ? (t = K.implementation.createHTMLDocument(""),
                r = t.createElement("base"),
                r.href = K.location.href,
                t.head.appendChild(r)) : t = K),
                i = we.exec(e),
                o = !n && [],
                i ? [t.createElement(i[1])] : (i = y([e], t, o),
                o && o.length && fe(o).remove(),
                    fe.merge([], i.childNodes))
        }
        ,
        fe.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return s > -1 && (r = fe.trim(e.slice(s)),
                e = e.slice(0, s)),
                fe.isFunction(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
            a.length > 0 && fe.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                    a.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
            ),
                this
        }
        ,
        fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        fe.expr.pseudos.animated = function(e) {
            return fe.grep(fe.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        fe.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l, c = fe.css(e, "position"), d = fe(e), f = {};
                "static" === c && (e.style.position = "relative"),
                    s = d.offset(),
                    o = fe.css(e, "top"),
                    u = fe.css(e, "left"),
                    l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                    l ? (r = d.position(),
                        a = r.top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                    "using"in t ? t.using.call(e, f) : d.css(f)
            }
        },
        fe.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        fe.offset.setOffset(this, e, t)
                    });
                var t, n, r, i, o = this[0];
                if (o)
                    return o.getClientRects().length ? (r = o.getBoundingClientRect(),
                        r.width || r.height ? (i = o.ownerDocument,
                            n = Z(i),
                            t = i.documentElement,
                        {
                            top: r.top + n.pageYOffset - t.clientTop,
                            left: r.left + n.pageXOffset - t.clientLeft
                        }) : r) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    fe.nodeName(e[0], "html") || (r = e.offset()),
                        r = {
                            top: r.top + fe.css(e[0], "borderTopWidth", !0),
                            left: r.left + fe.css(e[0], "borderLeftWidth", !0)
                        }),
                    {
                        top: t.top - r.top - fe.css(n, "marginTop", !0),
                        left: t.left - r.left - fe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === fe.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Qe
                })
            }
        }),
        fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            fe.fn[e] = function(r) {
                return je(this, function(e, r, i) {
                    var o = Z(e);
                    return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }),
        fe.each(["top", "left"], function(e, t) {
            fe.cssHooks[t] = j(ce.pixelPosition, function(e, n) {
                return n ? (n = D(e, t),
                    it.test(n) ? fe(e).position()[t] + "px" : n) : void 0
            })
        }),
        fe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            fe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                fe.fn[r] = function(i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                        , s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return je(this, function(t, n, i) {
                        var o;
                        return fe.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                            Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? fe.css(t, n, s) : fe.style(t, n, i, s)
                    }, t, a ? i : void 0, a)
                }
            })
        }),
        fe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null , t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null , t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        fe.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var Ut = e.jQuery
        , Xt = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = Xt),
        t && e.jQuery === fe && (e.jQuery = Ut),
            fe
    }
        ,
    t || (e.jQuery = e.$ = fe),
        fe
}),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length)
                    return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"),
                    n = new e.validator(t,this[0]),
                    e.data(this[0], "validator", n),
                n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target),
                    e(this).hasClass("cancel") && (n.cancelSubmit = !0),
                    void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }),
                    this.on("submit.validate", function(t) {
                        function r() {
                            var r, i;
                            return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)),
                                i = n.settings.submitHandler.call(n, n.currentForm, t),
                            n.submitButton && r.remove(),
                                void 0 !== i ? i : !1) : !0
                        }
                        return n.settings.debug && t.preventDefault(),
                            n.cancelSubmit ? (n.cancelSubmit = !1,
                                r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0,
                                !1) : r() : (n.focusInvalid(),
                                !1)
                    })),
                    n)
            },
            valid: function() {
                var t, n, r;
                return e(this[0]).is("form") ? t = this.validate().form() : (r = [],
                    t = !0,
                    n = e(this[0].form).validate(),
                    this.each(function() {
                        t = n.element(this) && t,
                        t || (r = r.concat(n.errorList))
                    }),
                    n.errorList = r),
                    t
            },
            rules: function(t, n) {
                var r, i, o, a, s, u, l = this[0];
                if (null != l && null != l.form) {
                    if (t)
                        switch (r = e.data(l.form, "validator").settings,
                            i = r.rules,
                            o = e.validator.staticRules(l),
                            t) {
                            case "add":
                                e.extend(o, e.validator.normalizeRule(n)),
                                    delete o.messages,
                                    i[l.name] = o,
                                n.messages && (r.messages[l.name] = e.extend(r.messages[l.name], n.messages));
                                break;
                            case "remove":
                                return n ? (u = {},
                                    e.each(n.split(/\s/), function(t, n) {
                                        u[n] = o[n],
                                            delete o[n],
                                        "required" === n && e(l).removeAttr("aria-required")
                                    }),
                                    u) : (delete i[l.name],
                                    o)
                        }
                    return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(l), e.validator.attributeRules(l), e.validator.dataRules(l), e.validator.staticRules(l)), l),
                    a.required && (s = a.required,
                        delete a.required,
                        a = e.extend({
                            required: s
                        }, a),
                        e(l).attr("aria-required", "true")),
                    a.remote && (s = a.remote,
                        delete a.remote,
                        a = e.extend(a, {
                            remote: s
                        })),
                        a
                }
            }
        }),
            e.extend(e.expr[":"], {
                blank: function(t) {
                    return !e.trim("" + e(t).val())
                },
                filled: function(t) {
                    var n = e(t).val();
                    return null !== n && !!e.trim("" + n)
                },
                unchecked: function(t) {
                    return !e(t).prop("checked")
                }
            }),
            e.validator = function(t, n) {
                this.settings = e.extend(!0, {}, e.validator.defaults, t),
                    this.currentForm = n,
                    this.init()
            }
            ,
            e.validator.format = function(t, n) {
                return 1 === arguments.length ? function() {
                    var n = e.makeArray(arguments);
                    return n.unshift(t),
                        e.validator.format.apply(this, n)
                }
                    : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)),
                n.constructor !== Array && (n = [n]),
                    e.each(n, function(e, n) {
                        t = t.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                            return n
                        })
                    }),
                    t)
            }
            ,
            e.extend(e.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: e([]),
                    errorLabelContainer: e([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function(e) {
                        this.lastActive = e,
                        this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                            this.hideThese(this.errorsFor(e)))
                    },
                    onfocusout: function(e) {
                        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                    },
                    onkeyup: function(t, n) {
                        var r = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                        9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, r) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                    },
                    onclick: function(e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                    },
                    highlight: function(t, n, r) {
                        "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
                    },
                    unhighlight: function(t, n, r) {
                        "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
                    }
                },
                setDefaults: function(t) {
                    e.extend(e.validator.defaults, t)
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: e.validator.format("Please enter no more than {0} characters."),
                    minlength: e.validator.format("Please enter at least {0} characters."),
                    rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: e.validator.format("Please enter a value between {0} and {1}."),
                    max: e.validator.format("Please enter a value less than or equal to {0}."),
                    min: e.validator.format("Please enter a value greater than or equal to {0}."),
                    step: e.validator.format("Please enter a multiple of {0}.")
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function() {
                        function t(t) {
                            !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]);
                            var n = e.data(this.form, "validator")
                                , r = "on" + t.type.replace(/^validate/, "")
                                , i = n.settings;
                            i[r] && !e(this).is(i.ignore) && i[r].call(n, this, t)
                        }
                        this.labelContainer = e(this.settings.errorLabelContainer),
                            this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                            this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                            this.submitted = {},
                            this.valueCache = {},
                            this.pendingRequest = 0,
                            this.pending = {},
                            this.invalid = {},
                            this.reset();
                        var n, r = this.groups = {};
                        e.each(this.settings.groups, function(t, n) {
                            "string" == typeof n && (n = n.split(/\s/)),
                                e.each(n, function(e, n) {
                                    r[n] = t
                                })
                        }),
                            n = this.settings.rules,
                            e.each(n, function(t, r) {
                                n[t] = e.validator.normalizeRule(r)
                            }),
                            e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t),
                        this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                            e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                    },
                    form: function() {
                        return this.checkForm(),
                            e.extend(this.submitted, this.errorMap),
                            this.invalid = e.extend({}, this.errorMap),
                        this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                            this.showErrors(),
                            this.valid()
                    },
                    checkForm: function() {
                        this.prepareForm();
                        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                            this.check(t[e]);
                        return this.valid()
                    },
                    element: function(t) {
                        var n, r, i = this.clean(t), o = this.validationTargetFor(i), a = this, s = !0;
                        return void 0 === o ? delete this.invalid[i.name] : (this.prepareElement(o),
                            this.currentElements = e(o),
                            r = this.groups[o.name],
                        r && e.each(this.groups, function(e, t) {
                            t === r && e !== o.name && (i = a.validationTargetFor(a.clean(a.findByName(e))),
                            i && i.name in a.invalid && (a.currentElements.push(i),
                                s = a.check(i) && s))
                        }),
                            n = this.check(o) !== !1,
                            s = s && n,
                            n ? this.invalid[o.name] = !1 : this.invalid[o.name] = !0,
                        this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            e(t).attr("aria-invalid", !n)),
                            s
                    },
                    showErrors: function(t) {
                        if (t) {
                            var n = this;
                            e.extend(this.errorMap, t),
                                this.errorList = e.map(this.errorMap, function(e, t) {
                                    return {
                                        message: e,
                                        element: n.findByName(t)[0]
                                    }
                                }),
                                this.successList = e.grep(this.successList, function(e) {
                                    return !(e.name in t)
                                })
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    },
                    resetForm: function() {
                        e.fn.resetForm && e(this.currentForm).resetForm(),
                            this.invalid = {},
                            this.submitted = {},
                            this.prepareForm(),
                            this.hideErrors();
                        var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(t)
                    },
                    resetElements: function(e) {
                        var t;
                        if (this.settings.unhighlight)
                            for (t = 0; e[t]; t++)
                                this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                                    this.findByName(e[t].name).removeClass(this.settings.validClass);
                        else
                            e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                    },
                    numberOfInvalids: function() {
                        return this.objectLength(this.invalid)
                    },
                    objectLength: function(e) {
                        var t, n = 0;
                        for (t in e)
                            e[t] && n++;
                        return n
                    },
                    hideErrors: function() {
                        this.hideThese(this.toHide)
                    },
                    hideThese: function(e) {
                        e.not(this.containers).text(""),
                            this.addWrapper(e).hide()
                    },
                    valid: function() {
                        return 0 === this.size()
                    },
                    size: function() {
                        return this.errorList.length
                    },
                    focusInvalid: function() {
                        if (this.settings.focusInvalid)
                            try {
                                e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                            } catch (t) {}
                    },
                    findLastActive: function() {
                        var t = this.lastActive;
                        return t && 1 === e.grep(this.errorList, function(e) {
                                return e.element.name === t.name
                            }).length && t
                    },
                    elements: function() {
                        var t = this
                            , n = {};
                        return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                            var r = this.name || e(this).attr("name");
                            return !r && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                            this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]),
                                r in n || !t.objectLength(e(this).rules()) ? !1 : (n[r] = !0,
                                    !0)
                        })
                    },
                    clean: function(t) {
                        return e(t)[0]
                    },
                    errors: function() {
                        var t = this.settings.errorClass.split(" ").join(".");
                        return e(this.settings.errorElement + "." + t, this.errorContext)
                    },
                    resetInternals: function() {
                        this.successList = [],
                            this.errorList = [],
                            this.errorMap = {},
                            this.toShow = e([]),
                            this.toHide = e([])
                    },
                    reset: function() {
                        this.resetInternals(),
                            this.currentElements = e([])
                    },
                    prepareForm: function() {
                        this.reset(),
                            this.toHide = this.errors().add(this.containers)
                    },
                    prepareElement: function(e) {
                        this.reset(),
                            this.toHide = this.errorsFor(e)
                    },
                    elementValue: function(t) {
                        var n, r, i = e(t), o = t.type;
                        return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : i.val() : (n = t.hasAttribute("contenteditable") ? i.text() : i.val(),
                            "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (r = n.lastIndexOf("/"),
                                r >= 0 ? n.substr(r + 1) : (r = n.lastIndexOf("\\"),
                                    r >= 0 ? n.substr(r + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
                    },
                    check: function(t) {
                        t = this.validationTargetFor(this.clean(t));
                        var n, r, i, o = e(t).rules(), a = e.map(o, function(e, t) {
                            return t
                        }).length, s = !1, u = this.elementValue(t);
                        if ("function" == typeof o.normalizer) {
                            if (u = o.normalizer.call(t, u),
                                "string" != typeof u)
                                throw new TypeError("The normalizer should return a string value.");
                            delete o.normalizer
                        }
                        for (r in o) {
                            i = {
                                method: r,
                                parameters: o[r]
                            };
                            try {
                                if (n = e.validator.methods[r].call(this, u, t, i.parameters),
                                    "dependency-mismatch" === n && 1 === a) {
                                    s = !0;
                                    continue
                                }
                                if (s = !1,
                                    "pending" === n)
                                    return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                if (!n)
                                    return this.formatAndAdd(t, i),
                                        !1
                            } catch (l) {
                                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", l),
                                l instanceof TypeError && (l.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."),
                                    l
                            }
                        }
                        if (!s)
                            return this.objectLength(o) && this.successList.push(t),
                                !0
                    },
                    customDataMessage: function(t, n) {
                        return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
                    },
                    customMessage: function(e, t) {
                        var n = this.settings.messages[e];
                        return n && (n.constructor === String ? n : n[t])
                    },
                    findDefined: function() {
                        for (var e = 0; e < arguments.length; e++)
                            if (void 0 !== arguments[e])
                                return arguments[e]
                    },
                    defaultMessage: function(t, n) {
                        "string" == typeof n && (n = {
                            method: n
                        });
                        var r = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>")
                            , i = /\$?\{(\d+)\}/g;
                        return "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)),
                            r
                    },
                    formatAndAdd: function(e, t) {
                        var n = this.defaultMessage(e, t);
                        this.errorList.push({
                            message: n,
                            element: e,
                            method: t.method
                        }),
                            this.errorMap[e.name] = n,
                            this.submitted[e.name] = n
                    },
                    addWrapper: function(e) {
                        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                            e
                    },
                    defaultShowErrors: function() {
                        var e, t, n;
                        for (e = 0; this.errorList[e]; e++)
                            n = this.errorList[e],
                            this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass),
                                this.showLabel(n.element, n.message);
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                                this.settings.success)
                            for (e = 0; this.successList[e]; e++)
                                this.showLabel(this.successList[e]);
                        if (this.settings.unhighlight)
                            for (e = 0,
                                     t = this.validElements(); t[e]; e++)
                                this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow),
                            this.hideErrors(),
                            this.addWrapper(this.toShow).show()
                    },
                    validElements: function() {
                        return this.currentElements.not(this.invalidElements())
                    },
                    invalidElements: function() {
                        return e(this.errorList).map(function() {
                            return this.element
                        })
                    },
                    showLabel: function(t, n) {
                        var r, i, o, a, s = this.errorsFor(t), u = this.idOrName(t), l = e(t).attr("aria-describedby");
                        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                            s.html(n)) : (s = e("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""),
                            r = s,
                        this.settings.wrapper && (r = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                            this.labelContainer.length ? this.labelContainer.append(r) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, r, e(t)) : r.insertAfter(t),
                            s.is("label") ? s.attr("for", u) : 0 === s.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (o = s.attr("id"),
                                l ? l.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (l += " " + o) : l = o,
                                e(t).attr("aria-describedby", l),
                                i = this.groups[t.name],
                            i && (a = this,
                                e.each(a.groups, function(t, n) {
                                    n === i && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", s.attr("id"))
                                })))),
                        !n && this.settings.success && (s.text(""),
                            "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)),
                            this.toShow = this.toShow.add(s)
                    },
                    errorsFor: function(t) {
                        var n = this.escapeCssMeta(this.idOrName(t))
                            , r = e(t).attr("aria-describedby")
                            , i = "label[for='" + n + "'], label[for='" + n + "'] *";
                        return r && (i = i + ", #" + this.escapeCssMeta(r).replace(/\s+/g, ", #")),
                            this.errors().filter(i)
                    },
                    escapeCssMeta: function(e) {
                        return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
                    },
                    idOrName: function(e) {
                        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                    },
                    validationTargetFor: function(t) {
                        return this.checkable(t) && (t = this.findByName(t.name)),
                            e(t).not(this.settings.ignore)[0]
                    },
                    checkable: function(e) {
                        return /radio|checkbox/i.test(e.type)
                    },
                    findByName: function(t) {
                        return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                    },
                    getLength: function(t, n) {
                        switch (n.nodeName.toLowerCase()) {
                            case "select":
                                return e("option:selected", n).length;
                            case "input":
                                if (this.checkable(n))
                                    return this.findByName(n.name).filter(":checked").length
                        }
                        return t.length
                    },
                    depend: function(e, t) {
                        return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                    },
                    dependTypes: {
                        "boolean": function(e) {
                            return e
                        },
                        string: function(t, n) {
                            return !!e(t, n.form).length
                        },
                        "function": function(e, t) {
                            return e(t)
                        }
                    },
                    optional: function(t) {
                        var n = this.elementValue(t);
                        return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                    },
                    startRequest: function(t) {
                        this.pending[t.name] || (this.pendingRequest++,
                            e(t).addClass(this.settings.pendingClass),
                            this.pending[t.name] = !0)
                    },
                    stopRequest: function(t, n) {
                        this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[t.name],
                            e(t).removeClass(this.settings.pendingClass),
                            n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                                this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                                this.formSubmitted = !1)
                    },
                    previousValue: function(t, n) {
                        return n = "string" == typeof n && n || "remote",
                        e.data(t, "previousValue") || e.data(t, "previousValue", {
                            old: null ,
                            valid: !0,
                            message: this.defaultMessage(t, {
                                method: n
                            })
                        })
                    },
                    destroy: function() {
                        this.resetForm(),
                            e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                    }
                },
                classRuleSettings: {
                    required: {
                        required: !0
                    },
                    email: {
                        email: !0
                    },
                    url: {
                        url: !0
                    },
                    date: {
                        date: !0
                    },
                    dateISO: {
                        dateISO: !0
                    },
                    number: {
                        number: !0
                    },
                    digits: {
                        digits: !0
                    },
                    creditcard: {
                        creditcard: !0
                    }
                },
                addClassRules: function(t, n) {
                    t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
                },
                classRules: function(t) {
                    var n = {}
                        , r = e(t).attr("class");
                    return r && e.each(r.split(" "), function() {
                        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                    }),
                        n
                },
                normalizeAttributeRule: function(e, t, n, r) {
                    /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (r = Number(r),
                    isNaN(r) && (r = void 0)),
                        r || 0 === r ? e[n] = r : t === n && "range" !== t && (e[n] = !0)
                },
                attributeRules: function(t) {
                    var n, r, i = {}, o = e(t), a = t.getAttribute("type");
                    for (n in e.validator.methods)
                        "required" === n ? (r = t.getAttribute(n),
                        "" === r && (r = !0),
                            r = !!r) : r = o.attr(n),
                            this.normalizeAttributeRule(i, a, n, r);
                    return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
                        i
                },
                dataRules: function(t) {
                    var n, r, i = {}, o = e(t), a = t.getAttribute("type");
                    for (n in e.validator.methods)
                        r = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()),
                            this.normalizeAttributeRule(i, a, n, r);
                    return i
                },
                staticRules: function(t) {
                    var n = {}
                        , r = e.data(t.form, "validator");
                    return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}),
                        n
                },
                normalizeRules: function(t, n) {
                    return e.each(t, function(r, i) {
                        if (i === !1)
                            return void delete t[r];
                        if (i.param || i.depends) {
                            var o = !0;
                            switch (typeof i.depends) {
                                case "string":
                                    o = !!e(i.depends, n.form).length;
                                    break;
                                case "function":
                                    o = i.depends.call(n, n)
                            }
                            o ? t[r] = void 0 !== i.param ? i.param : !0 : (e.data(n.form, "validator").resetElements(e(n)),
                                delete t[r])
                        }
                    }),
                        e.each(t, function(r, i) {
                            t[r] = e.isFunction(i) && "normalizer" !== r ? i(n) : i
                        }),
                        e.each(["minlength", "maxlength"], function() {
                            t[this] && (t[this] = Number(t[this]))
                        }),
                        e.each(["rangelength", "range"], function() {
                            var n;
                            t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                                t[this] = [Number(n[0]), Number(n[1])]))
                        }),
                    e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
                        delete t.min,
                        delete t.max),
                    null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
                        delete t.minlength,
                        delete t.maxlength)),
                        t
                },
                normalizeRule: function(t) {
                    if ("string" == typeof t) {
                        var n = {};
                        e.each(t.split(/\s/), function() {
                            n[this] = !0
                        }),
                            t = n
                    }
                    return t
                },
                addMethod: function(t, n, r) {
                    e.validator.methods[t] = n,
                        e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t],
                    n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
                },
                methods: {
                    required: function(t, n, r) {
                        if (!this.depend(r, n))
                            return "dependency-mismatch";
                        if ("select" === n.nodeName.toLowerCase()) {
                            var i = e(n).val();
                            return i && i.length > 0
                        }
                        return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
                    },
                    email: function(e, t) {
                        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                    },
                    url: function(e, t) {
                        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
                    },
                    date: function(e, t) {
                        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                    },
                    dateISO: function(e, t) {
                        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                    },
                    number: function(e, t) {
                        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                    },
                    digits: function(e, t) {
                        return this.optional(t) || /^\d+$/.test(e)
                    },
                    minlength: function(t, n, r) {
                        var i = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || i >= r
                    },
                    maxlength: function(t, n, r) {
                        var i = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || r >= i
                    },
                    rangelength: function(t, n, r) {
                        var i = e.isArray(t) ? t.length : this.getLength(t, n);
                        return this.optional(n) || i >= r[0] && i <= r[1]
                    },
                    min: function(e, t, n) {
                        return this.optional(t) || e >= n
                    },
                    max: function(e, t, n) {
                        return this.optional(t) || n >= e
                    },
                    range: function(e, t, n) {
                        return this.optional(t) || e >= n[0] && e <= n[1]
                    },
                    step: function(t, n, r) {
                        var i, o = e(n).attr("type"), a = "Step attribute on input type " + o + " is not supported.", s = ["text", "number", "range"], u = new RegExp("\\b" + o + "\\b"), l = o && !u.test(s.join()), c = function(e) {
                            var t = ("" + e).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0
                        }, d = function(e) {
                            return Math.round(e * Math.pow(10, i))
                        }, f = !0;
                        if (l)
                            throw new Error(a);
                        return i = c(r),
                        (c(t) > i || d(t) % d(r) !== 0) && (f = !1),
                        this.optional(n) || f
                    },
                    equalTo: function(t, n, r) {
                        var i = e(r);
                        return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                            e(n).valid()
                        }),
                        t === i.val()
                    },
                    remote: function(t, n, r, i) {
                        if (this.optional(n))
                            return "dependency-mismatch";
                        i = "string" == typeof i && i || "remote";
                        var o, a, s, u = this.previousValue(n, i);
                        return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}),
                            u.originalMessage = u.originalMessage || this.settings.messages[n.name][i],
                            this.settings.messages[n.name][i] = u.message,
                            r = "string" == typeof r && {
                                    url: r
                                } || r,
                            s = e.param(e.extend({
                                data: t
                            }, r.data)),
                            u.old === s ? u.valid : (u.old = s,
                                o = this,
                                this.startRequest(n),
                                a = {},
                                a[n.name] = t,
                                e.ajax(e.extend(!0, {
                                    mode: "abort",
                                    port: "validate" + n.name,
                                    dataType: "json",
                                    data: a,
                                    context: o.currentForm,
                                    success: function(e) {
                                        var r, a, s, l = e === !0 || "true" === e;
                                        o.settings.messages[n.name][i] = u.originalMessage,
                                            l ? (s = o.formSubmitted,
                                                o.resetInternals(),
                                                o.toHide = o.errorsFor(n),
                                                o.formSubmitted = s,
                                                o.successList.push(n),
                                                o.invalid[n.name] = !1,
                                                o.showErrors()) : (r = {},
                                                a = e || o.defaultMessage(n, {
                                                        method: i,
                                                        parameters: t
                                                    }),
                                                r[n.name] = u.message = a,
                                                o.invalid[n.name] = !0,
                                                o.showErrors(r)),
                                            u.valid = l,
                                            o.stopRequest(n, l)
                                    }
                                }, r)),
                                "pending")
                    }
                }
            });
        var t, n = {};
        e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, r) {
            var i = e.port;
            "abort" === e.mode && (n[i] && n[i].abort(),
                n[i] = r)
        }) : (t = e.ajax,
                e.ajax = function(r) {
                    var i = ("mode"in r ? r : e.ajaxSettings).mode
                        , o = ("port"in r ? r : e.ajaxSettings).port;
                    return "abort" === i ? (n[o] && n[o].abort(),
                        n[o] = t.apply(this, arguments),
                        n[o]) : t.apply(this, arguments)
                }
        )
    }),
    function(e) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        "use strict";
        function t(t) {
            return !t || void 0 !== t.allowPageScroll || void 0 === t.swipe && void 0 === t.swipeStatus || (t.allowPageScroll = l),
            void 0 !== t.click && void 0 === t.tap && (t.tap = t.click),
            t || (t = {}),
                t = e.extend({}, e.fn.swipe.defaults, t),
                this.each(function() {
                    var r = e(this)
                        , i = r.data(N);
                    i || (i = new n(this,t),
                        r.data(N, i))
                })
        }
        function n(t, n) {
            function A(t) {
                if (!(le() || e(t.target).closest(n.excludedElements, _e).length > 0)) {
                    var r, i = t.originalEvent ? t.originalEvent : t, o = S ? i.touches[0] : i;
                    return Ue = x,
                        S ? Xe = i.touches.length : t.preventDefault(),
                        Re = 0,
                        He = null ,
                        We = null ,
                        Pe = 0,
                        Me = 0,
                        $e = 0,
                        Ie = 1,
                        Be = 0,
                        Ve = pe(),
                        ze = ve(),
                        se(),
                        !S || Xe === n.fingers || n.fingers === y || z() ? (de(0, o),
                            Qe = ke(),
                        2 == Xe && (de(1, i.touches[1]),
                            Me = $e = xe(Ve[0].start, Ve[1].start)),
                        (n.swipeStatus || n.pinchStatus) && (r = R(i, Ue))) : r = !1,
                        r === !1 ? (Ue = C,
                            R(i, Ue),
                            r) : (n.hold && (et = setTimeout(e.proxy(function() {
                            _e.trigger("hold", [i.target]),
                            n.hold && (r = n.hold.call(_e, i, i.target))
                        }, this), n.longTapThreshold)),
                            ce(!0),
                            null )
                }
            }
            function L(e) {
                var t = e.originalEvent ? e.originalEvent : e;
                if (Ue !== T && Ue !== C && !ue()) {
                    var r, i = S ? t.touches[0] : t, o = fe(i);
                    if (Ye = ke(),
                        S && (Xe = t.touches.length),
                        n.hold && clearTimeout(et),
                            Ue = w,
                        2 == Xe && (0 == Me ? (de(1, t.touches[1]),
                            Me = $e = xe(Ve[0].start, Ve[1].start)) : (fe(t.touches[1]),
                            $e = xe(Ve[0].end, Ve[1].end),
                            We = Te(Ve[0].end, Ve[1].end)),
                            Ie = we(Me, $e),
                            Be = Math.abs(Me - $e)),
                        Xe === n.fingers || n.fingers === y || !S || z()) {
                        if (He = Ee(o.start, o.end),
                                B(e, He),
                                Re = Ce(o.start, o.end),
                                Pe = be(),
                                ge(He, Re),
                            (n.swipeStatus || n.pinchStatus) && (r = R(t, Ue)),
                            !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var a = !0;
                            if (n.triggerOnTouchLeave) {
                                var s = Ne(this);
                                a = Ae(o.end, s)
                            }
                            !n.triggerOnTouchEnd && a ? Ue = F(w) : n.triggerOnTouchLeave && !a && (Ue = F(T)),
                            (Ue == C || Ue == T) && R(t, Ue)
                        }
                    } else
                        Ue = C,
                            R(t, Ue);
                    r === !1 && (Ue = C,
                        R(t, Ue))
                }
            }
            function D(e) {
                var t = e.originalEvent;
                return S && t.touches.length > 0 ? (ae(),
                    !0) : (ue() && (Xe = Ze),
                    Ye = ke(),
                    Pe = be(),
                    M() || !P() ? (Ue = C,
                        R(t, Ue)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && Ue === w ? (e.preventDefault(),
                        Ue = T,
                        R(t, Ue)) : !n.triggerOnTouchEnd && G() ? (Ue = T,
                        H(t, Ue, h)) : Ue === w && (Ue = C,
                        R(t, Ue)),
                    ce(!1),
                    null )
            }
            function j() {
                Xe = 0,
                    Ye = 0,
                    Qe = 0,
                    Me = 0,
                    $e = 0,
                    Ie = 1,
                    se(),
                    ce(!1)
            }
            function q(e) {
                var t = e.originalEvent;
                n.triggerOnTouchLeave && (Ue = F(T),
                    R(t, Ue))
            }
            function O() {
                _e.unbind(De, A),
                    _e.unbind(Fe, j),
                    _e.unbind(je, L),
                    _e.unbind(qe, D),
                Oe && _e.unbind(Oe, q),
                    ce(!1)
            }
            function F(e) {
                var t = e
                    , r = I()
                    , i = P()
                    , o = M();
                return !r || o ? t = C : !i || e != w || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !i && e == T && n.triggerOnTouchLeave && (t = C) : t = T,
                    t
            }
            function R(e, t) {
                var n = void 0;
                return V() || X() ? n = H(e, t, d) : (_() || z()) && n !== !1 && (n = H(e, t, f)),
                    ie() && n !== !1 ? n = H(e, t, p) : oe() && n !== !1 ? n = H(e, t, g) : re() && n !== !1 && (n = H(e, t, h)),
                t === C && j(e),
                t === T && (S ? 0 == e.touches.length && j(e) : j(e)),
                    n
            }
            function H(t, l, c) {
                var m = void 0;
                if (c == d) {
                    if (_e.trigger("swipeStatus", [l, He || null , Re || 0, Pe || 0, Xe, Ve]),
                        n.swipeStatus && (m = n.swipeStatus.call(_e, t, l, He || null , Re || 0, Pe || 0, Xe, Ve),
                        m === !1))
                        return !1;
                    if (l == T && U()) {
                        if (_e.trigger("swipe", [He, Re, Pe, Xe, Ve]),
                            n.swipe && (m = n.swipe.call(_e, t, He, Re, Pe, Xe, Ve),
                            m === !1))
                            return !1;
                        switch (He) {
                            case r:
                                _e.trigger("swipeLeft", [He, Re, Pe, Xe, Ve]),
                                n.swipeLeft && (m = n.swipeLeft.call(_e, t, He, Re, Pe, Xe, Ve));
                                break;
                            case i:
                                _e.trigger("swipeRight", [He, Re, Pe, Xe, Ve]),
                                n.swipeRight && (m = n.swipeRight.call(_e, t, He, Re, Pe, Xe, Ve));
                                break;
                            case o:
                                _e.trigger("swipeUp", [He, Re, Pe, Xe, Ve]),
                                n.swipeUp && (m = n.swipeUp.call(_e, t, He, Re, Pe, Xe, Ve));
                                break;
                            case a:
                                _e.trigger("swipeDown", [He, Re, Pe, Xe, Ve]),
                                n.swipeDown && (m = n.swipeDown.call(_e, t, He, Re, Pe, Xe, Ve))
                        }
                    }
                }
                if (c == f) {
                    if (_e.trigger("pinchStatus", [l, We || null , Be || 0, Pe || 0, Xe, Ie, Ve]),
                        n.pinchStatus && (m = n.pinchStatus.call(_e, t, l, We || null , Be || 0, Pe || 0, Xe, Ie, Ve),
                        m === !1))
                        return !1;
                    if (l == T && W())
                        switch (We) {
                            case s:
                                _e.trigger("pinchIn", [We || null , Be || 0, Pe || 0, Xe, Ie, Ve]),
                                n.pinchIn && (m = n.pinchIn.call(_e, t, We || null , Be || 0, Pe || 0, Xe, Ie, Ve));
                                break;
                            case u:
                                _e.trigger("pinchOut", [We || null , Be || 0, Pe || 0, Xe, Ie, Ve]),
                                n.pinchOut && (m = n.pinchOut.call(_e, t, We || null , Be || 0, Pe || 0, Xe, Ie, Ve))
                        }
                }
                return c == h ? (l === C || l === T) && (clearTimeout(Ke),
                    clearTimeout(et),
                    Z() && !ee() ? (Je = ke(),
                        Ke = setTimeout(e.proxy(function() {
                            Je = null ,
                                _e.trigger("tap", [t.target]),
                            n.tap && (m = n.tap.call(_e, t, t.target))
                        }, this), n.doubleTapThreshold)) : (Je = null ,
                        _e.trigger("tap", [t.target]),
                    n.tap && (m = n.tap.call(_e, t, t.target)))) : c == p ? (l === C || l === T) && (clearTimeout(Ke),
                    Je = null ,
                    _e.trigger("doubletap", [t.target]),
                n.doubleTap && (m = n.doubleTap.call(_e, t, t.target))) : c == g && (l === C || l === T) && (clearTimeout(Ke),
                    Je = null ,
                    _e.trigger("longtap", [t.target]),
                n.longTap && (m = n.longTap.call(_e, t, t.target))),
                    m
            }
            function P() {
                var e = !0;
                return null !== n.threshold && (e = Re >= n.threshold),
                    e
            }
            function M() {
                var e = !1;
                return null !== n.cancelThreshold && null !== He && (e = me(He) - Re >= n.cancelThreshold),
                    e
            }
            function $() {
                return null !== n.pinchThreshold ? Be >= n.pinchThreshold : !0
            }
            function I() {
                var e;
                return e = n.maxTimeThreshold && Pe >= n.maxTimeThreshold ? !1 : !0
            }
            function B(e, t) {
                if (n.allowPageScroll === l || z())
                    e.preventDefault();
                else {
                    var s = n.allowPageScroll === c;
                    switch (t) {
                        case r:
                            (n.swipeLeft && s || !s && n.allowPageScroll != m) && e.preventDefault();
                            break;
                        case i:
                            (n.swipeRight && s || !s && n.allowPageScroll != m) && e.preventDefault();
                            break;
                        case o:
                            (n.swipeUp && s || !s && n.allowPageScroll != v) && e.preventDefault();
                            break;
                        case a:
                            (n.swipeDown && s || !s && n.allowPageScroll != v) && e.preventDefault()
                    }
                }
            }
            function W() {
                var e = Q()
                    , t = Y()
                    , n = $();
                return e && t && n
            }
            function z() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }
            function _() {
                return !(!W() || !z())
            }
            function U() {
                var e = I()
                    , t = P()
                    , n = Q()
                    , r = Y()
                    , i = M()
                    , o = !i && r && n && t && e;
                return o
            }
            function X() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }
            function V() {
                return !(!U() || !X())
            }
            function Q() {
                return Xe === n.fingers || n.fingers === y || !S
            }
            function Y() {
                return 0 !== Ve[0].end.x
            }
            function G() {
                return !!n.tap
            }
            function Z() {
                return !!n.doubleTap
            }
            function J() {
                return !!n.longTap
            }
            function K() {
                if (null == Je)
                    return !1;
                var e = ke();
                return Z() && e - Je <= n.doubleTapThreshold
            }
            function ee() {
                return K()
            }
            function te() {
                return (1 === Xe || !S) && (isNaN(Re) || Re < n.threshold)
            }
            function ne() {
                return Pe > n.longTapThreshold && b > Re
            }
            function re() {
                return !(!te() || !G())
            }
            function ie() {
                return !(!K() || !Z())
            }
            function oe() {
                return !(!ne() || !J())
            }
            function ae() {
                Ge = ke(),
                    Ze = event.touches.length + 1
            }
            function se() {
                Ge = 0,
                    Ze = 0
            }
            function ue() {
                var e = !1;
                if (Ge) {
                    var t = ke() - Ge;
                    t <= n.fingerReleaseThreshold && (e = !0)
                }
                return e
            }
            function le() {
                return !(_e.data(N + "_intouch") !== !0)
            }
            function ce(e) {
                e === !0 ? (_e.bind(je, L),
                    _e.bind(qe, D),
                Oe && _e.bind(Oe, q)) : (_e.unbind(je, L, !1),
                    _e.unbind(qe, D, !1),
                Oe && _e.unbind(Oe, q, !1)),
                    _e.data(N + "_intouch", e === !0)
            }
            function de(e, t) {
                var n = void 0 !== t.identifier ? t.identifier : 0;
                return Ve[e].identifier = n,
                    Ve[e].start.x = Ve[e].end.x = t.pageX || t.clientX,
                    Ve[e].start.y = Ve[e].end.y = t.pageY || t.clientY,
                    Ve[e]
            }
            function fe(e) {
                var t = void 0 !== e.identifier ? e.identifier : 0
                    , n = he(t);
                return n.end.x = e.pageX || e.clientX,
                    n.end.y = e.pageY || e.clientY,
                    n
            }
            function he(e) {
                for (var t = 0; t < Ve.length; t++)
                    if (Ve[t].identifier == e)
                        return Ve[t]
            }
            function pe() {
                for (var e = [], t = 0; 5 >= t; t++)
                    e.push({
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        },
                        identifier: 0
                    });
                return e
            }
            function ge(e, t) {
                t = Math.max(t, me(e)),
                    ze[e].distance = t
            }
            function me(e) {
                return ze[e] ? ze[e].distance : void 0
            }
            function ve() {
                var e = {};
                return e[r] = ye(r),
                    e[i] = ye(i),
                    e[o] = ye(o),
                    e[a] = ye(a),
                    e
            }
            function ye(e) {
                return {
                    direction: e,
                    distance: 0
                }
            }
            function be() {
                return Ye - Qe
            }
            function xe(e, t) {
                var n = Math.abs(e.x - t.x)
                    , r = Math.abs(e.y - t.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }
            function we(e, t) {
                var n = t / e * 1;
                return n.toFixed(2)
            }
            function Te() {
                return 1 > Ie ? u : s
            }
            function Ce(e, t) {
                return Math.round(Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)))
            }
            function Se(e, t) {
                var n = e.x - t.x
                    , r = t.y - e.y
                    , i = Math.atan2(r, n)
                    , o = Math.round(180 * i / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)),
                    o
            }
            function Ee(e, t) {
                var n = Se(e, t);
                return 45 >= n && n >= 0 ? r : 360 >= n && n >= 315 ? r : n >= 135 && 225 >= n ? i : n > 45 && 135 > n ? a : o
            }
            function ke() {
                var e = new Date;
                return e.getTime()
            }
            function Ne(t) {
                t = e(t);
                var n = t.offset()
                    , r = {
                    left: n.left,
                    right: n.left + t.outerWidth(),
                    top: n.top,
                    bottom: n.top + t.outerHeight()
                };
                return r
            }
            function Ae(e, t) {
                return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom
            }
            var Le = S || k || !n.fallbackToMouseEvents
                , De = Le ? k ? E ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown"
                , je = Le ? k ? E ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove"
                , qe = Le ? k ? E ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup"
                , Oe = Le ? null : "mouseleave"
                , Fe = k ? E ? "MSPointerCancel" : "pointercancel" : "touchcancel"
                , Re = 0
                , He = null
                , Pe = 0
                , Me = 0
                , $e = 0
                , Ie = 1
                , Be = 0
                , We = 0
                , ze = null
                , _e = e(t)
                , Ue = "start"
                , Xe = 0
                , Ve = null
                , Qe = 0
                , Ye = 0
                , Ge = 0
                , Ze = 0
                , Je = 0
                , Ke = null
                , et = null ;
            try {
                _e.bind(De, A),
                    _e.bind(Fe, j)
            } catch (tt) {
                e.error("events not supported " + De + "," + Fe + " on jQuery.swipe")
            }
            this.enable = function() {
                return _e.bind(De, A),
                    _e.bind(Fe, j),
                    _e
            }
                ,
                this.disable = function() {
                    return O(),
                        _e
                }
                ,
                this.destroy = function() {
                    return O(),
                        _e.data(N, null ),
                        _e
                }
                ,
                this.option = function(t, r) {
                    if (void 0 !== n[t]) {
                        if (void 0 === r)
                            return n[t];
                        n[t] = r
                    } else
                        e.error("Option " + t + " does not exist on jQuery.swipe.options");
                    return null
                }
        }
        var r = "left"
            , i = "right"
            , o = "up"
            , a = "down"
            , s = "in"
            , u = "out"
            , l = "none"
            , c = "auto"
            , d = "swipe"
            , f = "pinch"
            , h = "tap"
            , p = "doubletap"
            , g = "longtap"
            , m = "horizontal"
            , v = "vertical"
            , y = "all"
            , b = 10
            , x = "start"
            , w = "move"
            , T = "end"
            , C = "cancel"
            , S = "ontouchstart"in window
            , E = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled
            , k = window.navigator.pointerEnabled || window.navigator.msPointerEnabled
            , N = "TouchSwipe"
            , A = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null ,
            pinchThreshold: 20,
            maxTimeThreshold: null ,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null ,
            swipeLeft: null ,
            swipeRight: null ,
            swipeUp: null ,
            swipeDown: null ,
            swipeStatus: null ,
            pinchIn: null ,
            pinchOut: null ,
            pinchStatus: null ,
            click: null ,
            tap: null ,
            doubleTap: null ,
            longTap: null ,
            hold: null ,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe"
        };
        e.fn.swipe = function(n) {
            var r = e(this)
                , i = r.data(N);
            if (i && "string" == typeof n) {
                if (i[n])
                    return i[n].apply(this, Array.prototype.slice.call(arguments, 1));
                e.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (!(i || "object" != typeof n && n))
                return t.apply(this, arguments);
            return r
        }
            ,
            e.fn.swipe.defaults = A,
            e.fn.swipe.phases = {
                PHASE_START: x,
                PHASE_MOVE: w,
                PHASE_END: T,
                PHASE_CANCEL: C
            },
            e.fn.swipe.directions = {
                LEFT: r,
                RIGHT: i,
                UP: o,
                DOWN: a,
                IN: s,
                OUT: u
            },
            e.fn.swipe.pageScroll = {
                NONE: l,
                HORIZONTAL: m,
                VERTICAL: v,
                AUTO: c
            },
            e.fn.swipe.fingers = {
                ONE: 1,
                TWO: 2,
                THREE: 3,
                ALL: y
            }
    }),
    $.fn.rotate = function(e) {
        "use strict";
        return $(this).css({
            "-webkit-transform": "rotate(" + e + "deg)",
            "-moz-transform": "rotate(" + e + "deg)",
            "-ms-transform": "rotate(" + e + "deg)",
            transform: "rotate(" + e + "deg)"
        })
    }
    ,
    $.fn.serializeObject = function() {
        "use strict";
        var e = {}
            , t = this.serializeArray();
        return $.each(t, function() {
            void 0 !== e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]),
                e[this.name].push(this.value || "")) : e[this.name] = this.value || ""
        }),
            e
    }
    ,
    $(function() {
        "use strict";
        var e = $("#wingmen-app")
            , t = !1
            , n = $("#menu")
            , r = $("#back")
            , i = $("#journal")
            , o = $(".logo-part")
            , a = $(".square")
            , s = a.find(".content")
            , u = !1;
        $(window).on("hashchange", function() {
            var n = window.location.hash
                , r = t ? !1 : !0;
            switch (n) {
                case "#about":
                    e.trigger("activatex", {
                        area: "#top-left",
                        noAnimate: r
                    });
                    break;
                case "#do":
                    e.trigger("activatex", {
                        area: "#top-right",
                        noAnimate: r
                    });
                    break;
                case "#ventures":
                    e.trigger("activatex", {
                        area: "#bottom-left",
                        noAnimate: r
                    });
                    break;
                case "#contact":
                    e.trigger("activatex", {
                        area: "#bottom-right",
                        noAnimate: r
                    });
                    break;
                default:
                    e.trigger("clear", {
                        noAnimate: r
                    })
            }
            ga("send", "event", "category", "action", {
                page: n
            })
        }),
            e.on("clear", function(t, u) {
                var l = supportsTransitions ? 0 : 500;
                u.noAnimate && (l = 0,
                    e.addClass("disable-transitions"),
                    setTimeout(function() {
                        e.removeClass("disable-transitions")
                    }, 200)),
                    a.scrollTop(0).show(),
                    r.hide(),
                    o.fadeIn(500),
                    a.removeClass("focused").animate({
                        width: "50%",
                        height: "50%"
                    }, l),
                    s.fadeOut(),
                    n.animate({
                        top: "50%",
                        left: "50%"
                    }, l),
                    setTimeout(function() {
                        a.removeClass("hideflow"),
                            i.show()
                    }, 500)
            }),
            e.on("click", ".square:not(.focused)", function(e) {
                if (!u) {
                    var n = $(e.currentTarget);
                    t = "#home",
                        window.location = "/#" + n.attr("data-url")
                }
            }),
            e.on("click", "#menu,#back", function() {
                window.location = "/#home"
            }),
            e.on("resized", function() {
                setTimeout(function() {
                    var e = 0;
                    e = t ? $(".focused .section-title").parent().height() / 4 - $(".focused .section-title").height() / 2 : $(".section-title").parent().height() / 2 - $(".section-title").height() / 2,
                        $(".section-title").each(function() {
                            $(this).css({
                                "padding-top": e
                            })
                        })
                }, 1)
            }),
            e.on("activatex", function(s, u) {
                var l = supportsTransitions() ? 0 : 500;
                u && u.noAnimate && (l = 0,
                    e.addClass("disable-transitions"),
                    setTimeout(function() {
                        e.removeClass("disable-transitions")
                    }, 200)),
                    a.show(),
                    i.hide(),
                "#home" !== t && r.hide();
                var c = $(u.area);
                t = u.area,
                    "top-left" === c.attr("id") ? (setTimeout(function() {
                        r.rotate(180).show().css({
                            top: "auto",
                            bottom: "0",
                            left: "auto",
                            right: "0"
                        })
                    }, 500),
                        n.animate({
                            top: "100%",
                            left: "100%"
                        }, l)) : "top-right" === c.attr("id") ? (setTimeout(function() {
                        r.rotate(-90).show().css({
                            top: "auto",
                            bottom: "0",
                            left: "0",
                            right: "auto"
                        })
                    }, 500),
                        n.animate({
                            top: "100%",
                            left: "0%"
                        }, l)) : "bottom-left" === c.attr("id") ? (setTimeout(function() {
                        r.rotate(90).show().css({
                            top: "0",
                            bottom: "auto",
                            left: "auto",
                            right: "0"
                        })
                    }, 500),
                        n.animate({
                            top: "0%",
                            left: "100%"
                        }, l)) : (setTimeout(function() {
                        r.rotate(0).show().css({
                            top: "0",
                            bottom: "auto",
                            left: "0",
                            right: "auto"
                        })
                    }, 500),
                        n.animate({
                            top: "0%",
                            left: "0%"
                        }, l)),
                    o.fadeOut(500),
                    a.not(c).animate({
                        width: "0%",
                        height: "0%"
                    }, l).addClass("hideflow"),
                    c.animate({
                        width: "100%",
                        height: "100%"
                    }, l).addClass("focused"),
                    setTimeout(function() {
                        c.removeClass("hideflow").find(".content").fadeIn()
                    }, l)
            }),
            $(window).on("orientationchange", function() {
                e.trigger("resized")
            }),
            e.on("click", ".js_contact_us", function(e) {
                e.preventDefault()
            }),
            $("#contact-form").validate({
                errorLabelContainer: "#contact-form-errors",
                submitHandler: function(e) {
                    $("#contact .button").attr("value", "Processing..."),
                        $.post("/api/contact", $(e).serializeObject(), function() {
                            $("#contact-form").css("height", $("#contact-form").height()),
                                $("#contact-form").prev(".row").css("height", $("#contact-form").prev(".row").height()).find("p").fadeOut(),
                                $("#contact-form").fadeOut(function() {
                                    $("#contact-form").html("<h3>F* yeah! Let's get this party started.</h3>").fadeIn()
                                })
                        })
                }
            }),
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(".square").swipe({
            swipe: function(e, t) {
                var n = $(e.currentTarget);
                ("work" === n.attr("id") && ("down" === t || "right" === t) || "contact" === n.attr("id") && ("down" === t || "left" === t) || "top-left" === n.attr("id") && "left" === t || "do" === n.attr("id") && "right" === t) && (u = !0,
                    window.location = "/#home",
                    setTimeout(function() {
                        u = !1
                    }, 100))
            },
            allowPageScroll: "vertical",
            threshold: 50
        }),
            e.trigger("resized"),
            $(window).trigger("hashchange"),
            setTimeout(function() {
                if (window.localStorage && !window.localStorage.getItem("animationDoneOnce")) {
                    window.localStorage.setItem("animationDoneOnce", "true");
                    var e = 0;
                    $(".square h2.section-title").each(function() {
                        $(this).delay(e).animate({
                            opacity: 1
                        }, 500),
                            e += 1e3
                    }),
                        setTimeout(function() {
                            i.addClass("shown")
                        }, e + 1e3)
                } else
                    $(".square h2.section-title").each(function() {
                        $(this).animate({
                            opacity: 1
                        }, 500)
                    }),
                        setTimeout(function() {
                            i.addClass("shown")
                        }, 1500)
            }, 200)
    });
