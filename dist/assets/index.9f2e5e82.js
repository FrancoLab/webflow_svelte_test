(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
            o.crossorigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossorigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function x() {}
function I(e) {
    return e();
}
function P() {
    return Object.create(null);
}
function A(e) {
    e.forEach(I);
}
function W(e) {
    return typeof e == "function";
}
function K(e, t) {
    return e != e
        ? t == t
        : e !== t || (e && typeof e == "object") || typeof e == "function";
}
let k;
function X(e, t) {
    return k || (k = document.createElement("a")), (k.href = t), e === k.href;
}
function Y(e) {
    return Object.keys(e).length === 0;
}
function c(e, t) {
    e.appendChild(t);
}
function F(e, t, n) {
    e.insertBefore(t, n || null);
}
function T(e) {
    e.parentNode.removeChild(e);
}
function d(e) {
    return document.createElement(e);
}
function j(e) {
    return document.createTextNode(e);
}
function v() {
    return j(" ");
}
function Z(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function h(e, t, n) {
    n == null
        ? e.removeAttribute(t)
        : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ee(e) {
    return Array.from(e.childNodes);
}
function te(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
}
let V;
function b(e) {
    V = e;
}
const $ = [],
    B = [],
    S = [],
    H = [],
    ne = Promise.resolve();
let N = !1;
function re() {
    N || ((N = !0), ne.then(z));
}
function M(e) {
    S.push(e);
}
const O = new Set();
let E = 0;
function z() {
    const e = V;
    do {
        for (; E < $.length; ) {
            const t = $[E];
            E++, b(t), oe(t.$$);
        }
        for (b(null), $.length = 0, E = 0; B.length; ) B.pop()();
        for (let t = 0; t < S.length; t += 1) {
            const n = S[t];
            O.has(n) || (O.add(n), n());
        }
        S.length = 0;
    } while ($.length);
    for (; H.length; ) H.pop()();
    (N = !1), O.clear(), b(e);
}
function oe(e) {
    if (e.fragment !== null) {
        e.update(), A(e.before_update);
        const t = e.dirty;
        (e.dirty = [-1]),
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(M);
    }
}
const C = new Set();
let ie;
function D(e, t) {
    e && e.i && (C.delete(e), e.i(t));
}
function se(e, t, n, r) {
    if (e && e.o) {
        if (C.has(e)) return;
        C.add(e),
            ie.c.push(() => {
                C.delete(e), r && (n && e.d(1), r());
            }),
            e.o(t);
    } else r && r();
}
function le(e) {
    e && e.c();
}
function G(e, t, n, r) {
    const { fragment: o, on_mount: i, on_destroy: s, after_update: f } = e.$$;
    o && o.m(t, n),
        r ||
            M(() => {
                const a = i.map(I).filter(W);
                s ? s.push(...a) : A(a), (e.$$.on_mount = []);
            }),
        f.forEach(M);
}
function J(e, t) {
    const n = e.$$;
    n.fragment !== null &&
        (A(n.on_destroy),
        n.fragment && n.fragment.d(t),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
}
function ce(e, t) {
    e.$$.dirty[0] === -1 && ($.push(e), re(), e.$$.dirty.fill(0)),
        (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Q(e, t, n, r, o, i, s, f = [-1]) {
    const a = V;
    b(e);
    const l = (e.$$ = {
        fragment: null,
        ctx: null,
        props: i,
        update: x,
        not_equal: o,
        bound: P(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (a ? a.$$.context : [])),
        callbacks: P(),
        dirty: f,
        skip_bound: !1,
        root: t.target || a.$$.root,
    });
    s && s(l.root);
    let _ = !1;
    if (
        ((l.ctx = n
            ? n(e, t.props || {}, (u, m, ...y) => {
                  const g = y.length ? y[0] : m;
                  return (
                      l.ctx &&
                          o(l.ctx[u], (l.ctx[u] = g)) &&
                          (!l.skip_bound && l.bound[u] && l.bound[u](g),
                          _ && ce(e, u)),
                      m
                  );
              })
            : []),
        l.update(),
        (_ = !0),
        A(l.before_update),
        (l.fragment = r ? r(l.ctx) : !1),
        t.target)
    ) {
        if (t.hydrate) {
            const u = ee(t.target);
            l.fragment && l.fragment.l(u), u.forEach(T);
        } else l.fragment && l.fragment.c();
        t.intro && D(e.$$.fragment),
            G(e, t.target, t.anchor, t.customElement),
            z();
    }
    b(a);
}
class R {
    $destroy() {
        J(this, 1), (this.$destroy = x);
    }
    $on(t, n) {
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
            r.push(n),
            () => {
                const o = r.indexOf(n);
                o !== -1 && r.splice(o, 1);
            }
        );
    }
    $set(t) {
        this.$$set &&
            !Y(t) &&
            ((this.$$.skip_bound = !0),
            this.$$set(t),
            (this.$$.skip_bound = !1));
    }
}
const ue = "/assets/svelte.a39f39b7.svg";
function fe(e) {
    let t, n, r, o, i;
    return {
        c() {
            (t = d("button")), (n = j("count is ")), (r = j(e[0]));
        },
        m(s, f) {
            F(s, t, f),
                c(t, n),
                c(t, r),
                o || ((i = Z(t, "click", e[1])), (o = !0));
        },
        p(s, [f]) {
            f & 1 && te(r, s[0]);
        },
        i: x,
        o: x,
        d(s) {
            s && T(t), (o = !1), i();
        },
    };
}
function ae(e, t, n) {
    let r = 0;
    return [
        r,
        () => {
            n(0, (r += 1));
        },
    ];
}
class de extends R {
    constructor(t) {
        super(), Q(this, t, ae, fe, K, {});
    }
}
function me(e) {
    let t, n, r, o, i, s, f, a, l, _, u, m, y, g, q, w, L;
    return (
        (m = new de({})),
        {
            c() {
                (t = d("main")),
                    (n = d("div")),
                    (r = d("a")),
                    (r.innerHTML =
                        '<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>'),
                    (o = v()),
                    (i = d("a")),
                    (s = d("img")),
                    (a = v()),
                    (l = d("h1")),
                    (l.textContent = "Vite + Svelte"),
                    (_ = v()),
                    (u = d("div")),
                    le(m.$$.fragment),
                    (y = v()),
                    (g = d("p")),
                    (g.innerHTML =
                        'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!'),
                    (q = v()),
                    (w = d("p")),
                    (w.textContent =
                        "Click on the Vite and Svelte logos to learn more"),
                    h(r, "href", "https://vitejs.dev"),
                    h(r, "target", "_blank"),
                    X(s.src, (f = ue)) || h(s, "src", f),
                    h(s, "class", "logo svelte svelte-c9fbf7"),
                    h(s, "alt", "Svelte Logo"),
                    h(i, "href", "https://svelte.dev"),
                    h(i, "target", "_blank"),
                    h(u, "class", "card"),
                    h(w, "class", "read-the-docs svelte-c9fbf7");
            },
            m(p, U) {
                F(p, t, U),
                    c(t, n),
                    c(n, r),
                    c(n, o),
                    c(n, i),
                    c(i, s),
                    c(t, a),
                    c(t, l),
                    c(t, _),
                    c(t, u),
                    G(m, u, null),
                    c(t, y),
                    c(t, g),
                    c(t, q),
                    c(t, w),
                    (L = !0);
            },
            p: x,
            i(p) {
                L || (D(m.$$.fragment, p), (L = !0));
            },
            o(p) {
                se(m.$$.fragment, p), (L = !1);
            },
            d(p) {
                p && T(t), J(m);
            },
        }
    );
}
class he extends R {
    constructor(t) {
        super(), Q(this, t, null, me, K, {});
    }
}
new he({ target: document.getElementById("app") });
