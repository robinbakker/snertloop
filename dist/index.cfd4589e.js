var t,
	e,
	r,
	i,
	l,
	o = {},
	s = [],
	n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(t, e) {
	for (var r in e) t[r] = e[r];
	return t;
}
function c(t) {
	var e = t.parentNode;
	e && e.removeChild(t);
}
function f(e, r, i) {
	var l,
		o,
		s,
		n = {};
	for (s in r)
		'key' == s ? (l = r[s]) : 'ref' == s ? (o = r[s]) : (n[s] = r[s]);
	if (
		(arguments.length > 2 &&
			(n.children = arguments.length > 3 ? t.call(arguments, 2) : i),
		'function' == typeof e && null != e.defaultProps)
	)
		for (s in e.defaultProps) void 0 === n[s] && (n[s] = e.defaultProps[s]);
	return p(e, n, l, o, null);
}
function p(t, i, l, o, s) {
	var n = {
		type: t,
		props: i,
		key: l,
		ref: o,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		__h: null,
		constructor: void 0,
		__v: null == s ? ++r : s,
	};
	return null == s && null != e.vnode && e.vnode(n), n;
}
function d(t) {
	return t.children;
}
function _(t, e) {
	(this.props = t), (this.context = e);
}
function g(t, e) {
	if (null == e) return t.__ ? g(t.__, t.__.__k.indexOf(t) + 1) : null;
	for (var r; e < t.__k.length; e++)
		if (null != (r = t.__k[e]) && null != r.__e) return r.__e;
	return 'function' == typeof t.type ? g(t) : null;
}
function m(t) {
	var e, r;
	if (null != (t = t.__) && null != t.__c) {
		for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
			if (null != (r = t.__k[e]) && null != r.__e) {
				t.__e = t.__c.base = r.__e;
				break;
			}
		return m(t);
	}
}
function h(t) {
	((!t.__d && (t.__d = !0) && i.push(t) && !k.__r++) ||
		l !== e.debounceRendering) &&
		((l = e.debounceRendering) || setTimeout)(k);
}
function k() {
	for (var t; (k.__r = i.length); )
		(t = i.sort(function (t, e) {
			return t.__v.__b - e.__v.__b;
		})),
			(i = []),
			t.some(function (t) {
				var e, r, i, l, o, s;
				t.__d &&
					((o = (l = (e = t).__v).__e),
					(s = e.__P) &&
						((r = []),
						((i = a({}, l)).__v = l.__v + 1),
						P(
							s,
							l,
							i,
							e.__n,
							void 0 !== s.ownerSVGElement,
							null != l.__h ? [o] : null,
							r,
							null == o ? g(l) : o,
							l.__h
						),
						E(r, l),
						l.__e != o && m(l)));
			});
}
function y(t, e, r, i, l, n, a, c, f, _) {
	var m,
		h,
		k,
		y,
		L,
		v,
		w,
		b = (i && i.__k) || s,
		E = b.length;
	for (r.__k = [], m = 0; m < e.length; m++)
		if (
			null !=
			(y = r.__k[m] =
				null == (y = e[m]) || 'boolean' == typeof y
					? null
					: 'string' == typeof y || 'number' == typeof y || 'bigint' == typeof y
					? p(null, y, null, null, y)
					: Array.isArray(y)
					? p(d, { children: y }, null, null, null)
					: y.__b > 0
					? p(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v)
					: y)
		) {
			if (
				((y.__ = r),
				(y.__b = r.__b + 1),
				null === (k = b[m]) || (k && y.key == k.key && y.type === k.type))
			)
				b[m] = void 0;
			else
				for (h = 0; h < E; h++) {
					if ((k = b[h]) && y.key == k.key && y.type === k.type) {
						b[h] = void 0;
						break;
					}
					k = null;
				}
			P(t, y, (k = k || o), l, n, a, c, f, _),
				(L = y.__e),
				(h = y.ref) &&
					k.ref != h &&
					(w || (w = []),
					k.ref && w.push(k.ref, null, y),
					w.push(h, y.__c || L, y)),
				null != L
					? (null == v && (v = L),
					  'function' == typeof y.type && y.__k === k.__k
							? (y.__d = f = x(y, f, t))
							: (f = u(t, y, k, b, L, f)),
					  'function' == typeof r.type && (r.__d = f))
					: f && k.__e == f && f.parentNode != t && (f = g(k));
		}
	for (r.__e = v, m = E; m--; ) null != b[m] && U(b[m], b[m]);
	if (w) for (m = 0; m < w.length; m++) S(w[m], w[++m], w[++m]);
}
function x(t, e, r) {
	for (var i, l = t.__k, o = 0; l && o < l.length; o++)
		(i = l[o]) &&
			((i.__ = t),
			(e = 'function' == typeof i.type ? x(i, e, r) : u(r, i, i, l, i.__e, e)));
	return e;
}
function u(t, e, r, i, l, o) {
	var s, n, a;
	if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0);
	else if (null == r || l != o || null == l.parentNode)
		t: if (null == o || o.parentNode !== t) t.appendChild(l), (s = null);
		else {
			for (n = o, a = 0; (n = n.nextSibling) && a < i.length; a += 1)
				if (n == l) break t;
			t.insertBefore(l, o), (s = o);
		}
	return void 0 !== s ? s : l.nextSibling;
}
function L(t, e, r) {
	'-' === e[0]
		? t.setProperty(e, r)
		: (t[e] =
				null == r ? '' : 'number' != typeof r || n.test(e) ? r : r + 'px');
}
function v(t, e, r, i, l) {
	var o;
	t: if ('style' === e)
		if ('string' == typeof r) t.style.cssText = r;
		else {
			if (('string' == typeof i && (t.style.cssText = i = ''), i))
				for (e in i) (r && e in r) || L(t.style, e, '');
			if (r) for (e in r) (i && r[e] === i[e]) || L(t.style, e, r[e]);
		}
	else if ('o' === e[0] && 'n' === e[1])
		(o = e !== (e = e.replace(/Capture$/, ''))),
			(e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
			t.l || (t.l = {}),
			(t.l[e + o] = r),
			r
				? i || t.addEventListener(e, o ? b : w, o)
				: t.removeEventListener(e, o ? b : w, o);
	else if ('dangerouslySetInnerHTML' !== e) {
		if (l) e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'href' !== e &&
			'list' !== e &&
			'form' !== e &&
			'tabIndex' !== e &&
			'download' !== e &&
			e in t
		)
			try {
				t[e] = null == r ? '' : r;
				break t;
			} catch (t) {}
		'function' == typeof r ||
			(null == r || (!1 === r && -1 == e.indexOf('-'))
				? t.removeAttribute(e)
				: t.setAttribute(e, r));
	}
}
function w(t) {
	this.l[t.type + !1](e.event ? e.event(t) : t);
}
function b(t) {
	this.l[t.type + !0](e.event ? e.event(t) : t);
}
function P(t, r, i, l, o, s, n, c, f) {
	var p,
		g,
		m,
		h,
		k,
		x,
		u,
		L,
		v,
		w,
		b,
		P,
		E,
		S,
		U,
		O = r.type;
	if (void 0 !== r.constructor) return null;
	null != i.__h &&
		((f = i.__h), (c = r.__e = i.__e), (r.__h = null), (s = [c])),
		(p = e.__b) && p(r);
	try {
		t: if ('function' == typeof O) {
			if (
				((L = r.props),
				(v = (p = O.contextType) && l[p.__c]),
				(w = p ? (v ? v.props.value : p.__) : l),
				i.__c
					? (u = (g = r.__c = i.__c).__ = g.__E)
					: ('prototype' in O && O.prototype.render
							? (r.__c = g = new O(L, w))
							: ((r.__c = g = new _(L, w)),
							  (g.constructor = O),
							  (g.render = z)),
					  v && v.sub(g),
					  (g.props = L),
					  g.state || (g.state = {}),
					  (g.context = w),
					  (g.__n = l),
					  (m = g.__d = !0),
					  (g.__h = []),
					  (g._sb = [])),
				null == g.__s && (g.__s = g.state),
				null != O.getDerivedStateFromProps &&
					(g.__s == g.state && (g.__s = a({}, g.__s)),
					a(g.__s, O.getDerivedStateFromProps(L, g.__s))),
				(h = g.props),
				(k = g.state),
				m)
			)
				null == O.getDerivedStateFromProps &&
					null != g.componentWillMount &&
					g.componentWillMount(),
					null != g.componentDidMount && g.__h.push(g.componentDidMount);
			else {
				if (
					(null == O.getDerivedStateFromProps &&
						L !== h &&
						null != g.componentWillReceiveProps &&
						g.componentWillReceiveProps(L, w),
					(!g.__e &&
						null != g.shouldComponentUpdate &&
						!1 === g.shouldComponentUpdate(L, g.__s, w)) ||
						r.__v === i.__v)
				) {
					for (
						g.props = L,
							g.state = g.__s,
							r.__v !== i.__v && (g.__d = !1),
							g.__v = r,
							r.__e = i.__e,
							r.__k = i.__k,
							r.__k.forEach(function (t) {
								t && (t.__ = r);
							}),
							b = 0;
						b < g._sb.length;
						b++
					)
						g.__h.push(g._sb[b]);
					(g._sb = []), g.__h.length && n.push(g);
					break t;
				}
				null != g.componentWillUpdate && g.componentWillUpdate(L, g.__s, w),
					null != g.componentDidUpdate &&
						g.__h.push(function () {
							g.componentDidUpdate(h, k, x);
						});
			}
			if (
				((g.context = w),
				(g.props = L),
				(g.__v = r),
				(g.__P = t),
				(P = e.__r),
				(E = 0),
				'prototype' in O && O.prototype.render)
			) {
				for (
					g.state = g.__s,
						g.__d = !1,
						P && P(r),
						p = g.render(g.props, g.state, g.context),
						S = 0;
					S < g._sb.length;
					S++
				)
					g.__h.push(g._sb[S]);
				g._sb = [];
			} else
				do {
					(g.__d = !1),
						P && P(r),
						(p = g.render(g.props, g.state, g.context)),
						(g.state = g.__s);
				} while (g.__d && ++E < 25);
			(g.state = g.__s),
				null != g.getChildContext && (l = a(a({}, l), g.getChildContext())),
				m ||
					null == g.getSnapshotBeforeUpdate ||
					(x = g.getSnapshotBeforeUpdate(h, k)),
				(U = null != p && p.type === d && null == p.key ? p.props.children : p),
				y(t, Array.isArray(U) ? U : [U], r, i, l, o, s, n, c, f),
				(g.base = r.__e),
				(r.__h = null),
				g.__h.length && n.push(g),
				u && (g.__E = g.__ = null),
				(g.__e = !1);
		} else
			null == s && r.__v === i.__v
				? ((r.__k = i.__k), (r.__e = i.__e))
				: (r.__e = T(i.__e, r, i, l, o, s, n, f));
		(p = e.diffed) && p(r);
	} catch (t) {
		(r.__v = null),
			(f || null != s) &&
				((r.__e = c), (r.__h = !!f), (s[s.indexOf(c)] = null)),
			e.__e(t, r, i);
	}
}
function E(t, r) {
	e.__c && e.__c(r, t),
		t.some(function (r) {
			try {
				(t = r.__h),
					(r.__h = []),
					t.some(function (t) {
						t.call(r);
					});
			} catch (t) {
				e.__e(t, r.__v);
			}
		});
}
function T(e, r, i, l, s, n, a, f) {
	var p,
		d,
		_,
		m = i.props,
		h = r.props,
		k = r.type,
		x = 0;
	if (('svg' === k && (s = !0), null != n))
		for (; x < n.length; x++)
			if (
				(p = n[x]) &&
				'setAttribute' in p == !!k &&
				(k ? p.localName === k : 3 === p.nodeType)
			) {
				(e = p), (n[x] = null);
				break;
			}
	if (null == e) {
		if (null === k) return document.createTextNode(h);
		(e = s
			? document.createElementNS('http://www.w3.org/2000/svg', k)
			: document.createElement(k, h.is && h)),
			(n = null),
			(f = !1);
	}
	if (null === k) m === h || (f && e.data === h) || (e.data = h);
	else {
		if (
			((n = n && t.call(e.childNodes)),
			(d = (m = i.props || o).dangerouslySetInnerHTML),
			(_ = h.dangerouslySetInnerHTML),
			!f)
		) {
			if (null != n)
				for (m = {}, x = 0; x < e.attributes.length; x++)
					m[e.attributes[x].name] = e.attributes[x].value;
			(_ || d) &&
				((_ && ((d && _.__html == d.__html) || _.__html === e.innerHTML)) ||
					(e.innerHTML = (_ && _.__html) || ''));
		}
		if (
			((function (t, e, r, i, l) {
				var o;
				for (o in r)
					'children' === o || 'key' === o || o in e || v(t, o, null, r[o], i);
				for (o in e)
					(l && 'function' != typeof e[o]) ||
						'children' === o ||
						'key' === o ||
						'value' === o ||
						'checked' === o ||
						r[o] === e[o] ||
						v(t, o, e[o], r[o], i);
			})(e, h, m, s, f),
			_)
		)
			r.__k = [];
		else if (
			((x = r.props.children),
			y(
				e,
				Array.isArray(x) ? x : [x],
				r,
				i,
				l,
				s && 'foreignObject' !== k,
				n,
				a,
				n ? n[0] : i.__k && g(i, 0),
				f
			),
			null != n)
		)
			for (x = n.length; x--; ) null != n[x] && c(n[x]);
		f ||
			('value' in h &&
				void 0 !== (x = h.value) &&
				(x !== e.value ||
					('progress' === k && !x) ||
					('option' === k && x !== m.value)) &&
				v(e, 'value', x, m.value, !1),
			'checked' in h &&
				void 0 !== (x = h.checked) &&
				x !== e.checked &&
				v(e, 'checked', x, m.checked, !1));
	}
	return e;
}
function S(t, r, i) {
	try {
		'function' == typeof t ? t(r) : (t.current = r);
	} catch (t) {
		e.__e(t, i);
	}
}
function U(t, r, i) {
	var l, o;
	if (
		(e.unmount && e.unmount(t),
		(l = t.ref) && ((l.current && l.current !== t.__e) || S(l, null, r)),
		null != (l = t.__c))
	) {
		if (l.componentWillUnmount)
			try {
				l.componentWillUnmount();
			} catch (t) {
				e.__e(t, r);
			}
		(l.base = l.__P = null), (t.__c = void 0);
	}
	if ((l = t.__k))
		for (o = 0; o < l.length; o++)
			l[o] && U(l[o], r, i || 'function' != typeof t.type);
	i || null == t.__e || c(t.__e), (t.__ = t.__e = t.__d = void 0);
}
function z(t, e, r) {
	return this.constructor(t, r);
}
(t = s.slice),
	(e = {
		__e: function (t, e, r, i) {
			for (var l, o, s; (e = e.__); )
				if ((l = e.__c) && !l.__)
					try {
						if (
							((o = l.constructor) &&
								null != o.getDerivedStateFromError &&
								(l.setState(o.getDerivedStateFromError(t)), (s = l.__d)),
							null != l.componentDidCatch &&
								(l.componentDidCatch(t, i || {}), (s = l.__d)),
							s)
						)
							return (l.__E = l);
					} catch (e) {
						t = e;
					}
			throw t;
		},
	}),
	(r = 0),
	(_.prototype.setState = function (t, e) {
		var r;
		(r =
			null != this.__s && this.__s !== this.state
				? this.__s
				: (this.__s = a({}, this.state))),
			'function' == typeof t && (t = t(a({}, r), this.props)),
			t && a(r, t),
			null != t && this.__v && (e && this._sb.push(e), h(this));
	}),
	(_.prototype.forceUpdate = function (t) {
		this.__v && ((this.__e = !0), t && this.__h.push(t), h(this));
	}),
	(_.prototype.render = d),
	(i = []),
	(k.__r = 0);
var O = function (t, e, r, i) {
		var l;
		e[0] = 0;
		for (var o = 1; o < e.length; o++) {
			var s = e[o++],
				n = e[o] ? ((e[0] |= s ? 1 : 2), r[e[o++]]) : e[++o];
			3 === s
				? (i[0] = n)
				: 4 === s
				? (i[1] = Object.assign(i[1] || {}, n))
				: 5 === s
				? ((i[1] = i[1] || {})[e[++o]] = n)
				: 6 === s
				? (i[1][e[++o]] += n + '')
				: s
				? ((l = t.apply(n, O(t, n, r, ['', null]))),
				  i.push(l),
				  n[0] ? (e[0] |= 2) : ((e[o - 2] = 0), (e[o] = l)))
				: i.push(n);
		}
		return i;
	},
	j = new Map();
var W = function (t) {
	var e = j.get(this);
	return (
		e || ((e = new Map()), j.set(this, e)),
		(e = O(
			this,
			e.get(t) ||
				(e.set(
					t,
					(e = (function (t) {
						for (
							var e,
								r,
								i = 1,
								l = '',
								o = '',
								s = [0],
								n = function (t) {
									1 === i && (t || (l = l.replace(/^\s*\n\s*|\s*\n\s*$/g, '')))
										? s.push(0, t, l)
										: 3 === i && (t || l)
										? (s.push(3, t, l), (i = 2))
										: 2 === i && '...' === l && t
										? s.push(4, t, 0)
										: 2 === i && l && !t
										? s.push(5, 0, !0, l)
										: i >= 5 &&
										  ((l || (!t && 5 === i)) && (s.push(i, 0, l, r), (i = 6)),
										  t && (s.push(i, t, 0, r), (i = 6))),
										(l = '');
								},
								a = 0;
							a < t.length;
							a++
						) {
							a && (1 === i && n(), n(a));
							for (var c = 0; c < t[a].length; c++)
								(e = t[a][c]),
									1 === i
										? '<' === e
											? (n(), (s = [s]), (i = 3))
											: (l += e)
										: 4 === i
										? '--' === l && '>' === e
											? ((i = 1), (l = ''))
											: (l = e + l[0])
										: o
										? e === o
											? (o = '')
											: (l += e)
										: '"' === e || "'" === e
										? (o = e)
										: '>' === e
										? (n(), (i = 1))
										: i &&
										  ('=' === e
												? ((i = 5), (r = l), (l = ''))
												: '/' === e && (i < 5 || '>' === t[a][c + 1])
												? (n(),
												  3 === i && (s = s[0]),
												  (i = s),
												  (s = s[0]).push(2, 0, i),
												  (i = 0))
												: ' ' === e || '\t' === e || '\n' === e || '\r' === e
												? (n(), (i = 2))
												: (l += e)),
									3 === i && '!--' === l && ((i = 4), (s = s[0]));
						}
						return n(), s;
					})(t))
				),
				e),
			arguments,
			[]
		)).length > 1
			? e
			: e[0]
	);
}.bind(f);
const D = () =>
	W`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249 448"><g id="track16"><mask id="_mask_LJW5jsIt5KU9NjYOxw7IbWUN02vRz4Ec" x="-200%" y="-200%" width="400%" height="400%"><rect x="-200%" y="-200%" width="400%" height="400%" style="fill:white;"/><path d=" M 74.1 361.913 L 52.1 333.571 L 33 302.782 L 30.7 287.999 L 26.6 242.529 L 20.8 231.927 L 16.7 191.758 L 13.2 167.494 L 13.2 141.395 L 23 137.317 L 52 133.749 L 54.9 129.569 L 45 61.568 L 47.3 58 L 61.8 53.311 L 61.8 45.664 L 74 43.931 L 76.9 48.111 L 108.3 37.406 L 107.3 26.804 L 110 24.867 L 109.8 22.114 L 124.9 9.268 L 154.9 44.747 L 157.6 44.339 L 176.2 28.231 L 233.8 97.965 L 214.5 113.563 L 199.8 126.918 L 191.3 133.851 L 186.3 141.497 L 179.1 147.41 L 172.7 155.26 L 168.6 163.11 L 144.6 176.67 L 161 213.474 L 161 220.814 L 171.4 245.69 L 149.6 256.293 L 150.6 260.982 L 154.3 264.754 L 157.4 270.056 L 160.9 273.624 L 165.5 275.153 L 172.5 278.314 L 178.3 280.047 L 189.5 293.096 L 189.9 298.398 L 226.4 332.653 L 229.1 337.547 L 231.6 339.688 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.1 361.913 L 74.1 361.913 Z " fill="black" stroke="none"/></mask><path d=" M 74.1 361.913 L 52.1 333.571 L 33 302.782 L 30.7 287.999 L 26.6 242.529 L 20.8 231.927 L 16.7 191.758 L 13.2 167.494 L 13.2 141.395 L 23 137.317 L 52 133.749 L 54.9 129.569 L 45 61.568 L 47.3 58 L 61.8 53.311 L 61.8 45.664 L 74 43.931 L 76.9 48.111 L 108.3 37.406 L 107.3 26.804 L 110 24.867 L 109.8 22.114 L 124.9 9.268 L 154.9 44.747 L 157.6 44.339 L 176.2 28.231 L 233.8 97.965 L 214.5 113.563 L 199.8 126.918 L 191.3 133.851 L 186.3 141.497 L 179.1 147.41 L 172.7 155.26 L 168.6 163.11 L 144.6 176.67 L 161 213.474 L 161 220.814 L 171.4 245.69 L 149.6 256.293 L 150.6 260.982 L 154.3 264.754 L 157.4 270.056 L 160.9 273.624 L 165.5 275.153 L 172.5 278.314 L 178.3 280.047 L 189.5 293.096 L 189.9 298.398 L 226.4 332.653 L 229.1 337.547 L 231.6 339.688 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.1 361.913 L 74.1 361.913 Z " fill="none"/><path d=" M 74.1 361.913 L 52.1 333.571 L 33 302.782 L 30.7 287.999 L 26.6 242.529 L 20.8 231.927 L 16.7 191.758 L 13.2 167.494 L 13.2 141.395 L 23 137.317 L 52 133.749 L 54.9 129.569 L 45 61.568 L 47.3 58 L 61.8 53.311 L 61.8 45.664 L 74 43.931 L 76.9 48.111 L 108.3 37.406 L 107.3 26.804 L 110 24.867 L 109.8 22.114 L 124.9 9.268 L 154.9 44.747 L 157.6 44.339 L 176.2 28.231 L 233.8 97.965 L 214.5 113.563 L 199.8 126.918 L 191.3 133.851 L 186.3 141.497 L 179.1 147.41 L 172.7 155.26 L 168.6 163.11 L 144.6 176.67 L 161 213.474 L 161 220.814 L 171.4 245.69 L 149.6 256.293 L 150.6 260.982 L 154.3 264.754 L 157.4 270.056 L 160.9 273.624 L 165.5 275.153 L 172.5 278.314 L 178.3 280.047 L 189.5 293.096 L 189.9 298.398 L 226.4 332.653 L 229.1 337.547 L 231.6 339.688 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.1 361.913 L 74.1 361.913 Z " fill="none" mask="url(#_mask_LJW5jsIt5KU9NjYOxw7IbWUN02vRz4Ec)" vector-effect="non-scaling-stroke" stroke-width="12" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4"/><path d=" M 75.5 362.116 L 78.9 357.019 L 88.3 349.679 L 95 340.401 L 99.8 336.425 L 106.4 333.571" fill="none" vector-effect="non-scaling-stroke" stroke-width="8" stroke="rgb(255,25,25)" stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="3"/></g><g id="track11"><path d=" M 74.1 361.913 L 52.1 333.571 L 33 302.782 L 30.7 287.999 L 26.6 242.529 L 20.8 231.927 L 16.7 191.758 L 13.2 167.494 L 13.2 141.395 L 23 137.317 L 52 133.749 L 54.9 129.569 L 96.4 117.131 L 104.5 110.606 L 111.7 110.606 L 141 177.383 L 144.6 176.568 L 161 213.372 L 161 220.712 L 171.4 245.588 L 149.6 256.191 L 150.6 260.88 L 154.3 264.652 L 157.4 269.954 L 160.9 273.522 L 165.5 275.051 L 172.5 278.212 L 178.3 279.945 L 189.5 292.995 L 189.9 298.296 L 226.4 332.551 L 229.1 337.445 L 231.6 339.586 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.1 361.913 L 74.1 361.913 L 74.1 361.913 Z " fill="none" vector-effect="non-scaling-stroke" stroke-width="5" stroke="rgb(70,70,255)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/><path d=" M 75.5 362.116 L 78.9 357.019 L 88.3 349.679 L 95 340.401 L 99.8 336.425 L 106.4 333.571" fill="none" vector-effect="non-scaling-stroke" stroke-width="4" stroke="rgb(53,53,255)" stroke-linejoin="round" stroke-linecap="butt" stroke-miterlimit="3"/></g><g id="track5"><mask id="_mask_5oWpt6Rgf4WyONSDbEAil4ArrKT2P5wM"><path d=" M 189.8 298.5 L 226.3 332.755 L 229 337.649 L 231.5 339.789 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.5 362.015 L 77.9 356.917 L 87.3 349.577 L 94 340.299 L 98.8 336.323 L 105.4 333.469 L 113.3 330.104 L 116.3 326.842 L 128.5 322.458 L 145 317.564 L 165.6 307.369 L 183.1 298.398 L 189.8 298.5 L 189.8 298.5 Z " fill="white" stroke="none"/></mask><path d=" M 189.8 298.5 L 226.3 332.755 L 229 337.649 L 231.5 339.789 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.5 362.015 L 77.9 356.917 L 87.3 349.577 L 94 340.299 L 98.8 336.323 L 105.4 333.469 L 113.3 330.104 L 116.3 326.842 L 128.5 322.458 L 145 317.564 L 165.6 307.369 L 183.1 298.398 L 189.8 298.5 L 189.8 298.5 Z " fill="none"/><path d=" M 189.8 298.5 L 226.3 332.755 L 229 337.649 L 231.5 339.789 L 208.4 390.153 L 204.3 393.313 L 199.9 392.905 L 181.9 389.337 L 175.5 382.404 L 132.4 420.024 L 127 423.388 L 121.4 424 L 115.8 422.471 L 105.6 409.829 L 95.2 394.842 L 80.7 369.967 L 76.4 363.442 L 74.5 362.015 L 77.9 356.917 L 87.3 349.577 L 94 340.299 L 98.8 336.323 L 105.4 333.469 L 113.3 330.104 L 116.3 326.842 L 128.5 322.458 L 145 317.564 L 165.6 307.369 L 183.1 298.398 L 189.8 298.5 L 189.8 298.5 Z " fill="none" mask="url(#_mask_5oWpt6Rgf4WyONSDbEAil4ArrKT2P5wM)" vector-effect="non-scaling-stroke" stroke-width="10" stroke="rgb(0,150,55)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="3"/></g><g id="kilometers16"><g id="km1"><rect x="42.453" y="323.453" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,245.072,63.094)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_gZEbV3hJ2o9BlRXh9Dj2wzNiULHe4AAk)"><text transform="matrix(1,0,0,1,44.381,329.671)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">1</text></g><defs><clipPath id="_clipPath_gZEbV3hJ2o9BlRXh9Dj2wzNiULHe4AAk"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,44.094,323.258)"/></clipPath></defs></g><g id="km2"><rect x="19.078" y="247.828" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,184.751,57.472)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_aWlKR6i8JudWoRD5NTcxzLmTWO2Rm3Pa)"><text transform="matrix(1,0,0,1,21.006,254.046)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">2</text></g><defs><clipPath id="_clipPath_aWlKR6i8JudWoRD5NTcxzLmTWO2Rm3Pa"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,20.719,247.633)"/></clipPath></defs></g><g id="km3"><rect x="5.578" y="158.328" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,117.511,40.804)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_Gn8QhcZDTEBlictw9cGa84qu5cSJBBFf)"><text transform="matrix(1,0,0,1,7.506,164.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">3</text></g><defs><clipPath id="_clipPath_Gn8QhcZDTEBlictw9cGa84qu5cSJBBFf"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,7.219,158.133)"/></clipPath></defs></g><g id="km4"><rect x="45.828" y="109.078" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,94.475,-2.082)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_e4MD8ct4SjolnjHMWoXcYJtvLIA3x2WR)"><text transform="matrix(1,0,0,1,47.756,115.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">4</text></g><defs><clipPath id="_clipPath_e4MD8ct4SjolnjHMWoXcYJtvLIA3x2WR"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,47.469,108.883)"/></clipPath></defs></g><g id="km5"><rect x="47.828" y="48.078" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,51.927,-21.362)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_1DoHM5lVV3HVtm3S8XW66tBp8amkyKgl)"><text transform="matrix(1,0,0,1,49.756,54.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">5</text></g><defs><clipPath id="_clipPath_1DoHM5lVV3HVtm3S8XW66tBp8amkyKgl"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,49.469,47.883)"/></clipPath></defs></g><g id="km6"><rect x="107.828" y="12.328" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,44.221,-74.26)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_HsqkIRlNXLz6pWDBqXtPEGsQ3zepoHM8)"><text transform="matrix(1,0,0,1,109.756,18.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">6</text></g><defs><clipPath id="_clipPath_HsqkIRlNXLz6pWDBqXtPEGsQ3zepoHM8"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,109.469,12.133)"/></clipPath></defs></g><g id="km7"><rect x="164.578" y="26.578" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,70.919,-110.214)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_L4kIqgYtg1bwU0lby6bW5LPZdBX50UCh)"><text transform="matrix(1,0,0,1,166.506,32.796)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">7</text></g><defs><clipPath id="_clipPath_L4kIqgYtg1bwU0lby6bW5LPZdBX50UCh"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,166.219,26.383)"/></clipPath></defs></g><g id="km8"><rect x="216.578" y="73.328" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,119.207,-133.291)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_m8gBPb5p7EizRtZmgSBM8SfdPIvhs7Gq)"><text transform="matrix(1,0,0,1,218.506,79.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">8</text></g><defs><clipPath id="_clipPath_m8gBPb5p7EizRtZmgSBM8SfdPIvhs7Gq"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,218.219,73.133)"/></clipPath></defs></g><g id="km9"><rect x="190.578" y="132.328" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,153.311,-97.626)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_byHo54acMkmJiEJu0hNI9as2IKOxnc1I)"><text transform="matrix(1,0,0,1,192.506,138.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">9</text></g><defs><clipPath id="_clipPath_byHo54acMkmJiEJu0hNI9as2IKOxnc1I"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,192.219,132.133)"/></clipPath></defs></g><g id="km10"><rect x="151.828" y="177.078" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,173.604,-57.118)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_fTFpc7b9PmvqSQxveHS3beWHALVy9uwr)"><text transform="matrix(1,0,0,1,151.966,183.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">10</text></g><defs><clipPath id="_clipPath_fTFpc7b9PmvqSQxveHS3beWHALVy9uwr"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,151.891,176.883)"/></clipPath></defs></g><g id="km11"><rect x="153.578" y="249.453" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,225.294,-37.157)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_3mR3fgpLHE3CwEBuMxcBnA8GsyQjmZtk)"><text transform="matrix(1,0,0,1,153.716,255.671)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">11</text></g><defs><clipPath id="_clipPath_3mR3fgpLHE3CwEBuMxcBnA8GsyQjmZtk"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,153.641,249.258)"/></clipPath></defs></g><g id="km12"><rect x="197.578" y="299.953" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,273.89,-53.479)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_QMsigE3baoWdZWGSVq5ql2VG78xBDFMg)"><text transform="matrix(1,0,0,1,197.375,306.171)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">12</text></g><defs><clipPath id="_clipPath_QMsigE3baoWdZWGSVq5ql2VG78xBDFMg"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,197.3,299.758)"/></clipPath></defs></g><g id="km13"><rect x="217.578" y="367.953" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,327.831,-47.704)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_i1tzH46hb6o75pJ8vkIehM84bM63BztR)"><text transform="matrix(1,0,0,1,217.375,374.171)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">13</text></g><defs><clipPath id="_clipPath_i1tzH46hb6o75pJ8vkIehM84bM63BztR"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,217.3,367.758)"/></clipPath></defs></g><g id="km14"><rect x="159.328" y="394.453" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,329.508,1.246)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_9uokoTSX34g09ttsbySYI4mN4jiyLcly)"><text transform="matrix(1,0,0,1,159.125,400.671)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">14</text></g><defs><clipPath id="_clipPath_9uokoTSX34g09ttsbySYI4mN4jiyLcly"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,159.05,394.258)"/></clipPath></defs></g><g id="km15"><rect x="88.328" y="392.453" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,307.299,50.865)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_yEOqm5YqKMt8dlnXIajEUlKkHzq4bUk8)"><text transform="matrix(1,0,0,1,88.125,398.671)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">15</text></g><defs><clipPath id="_clipPath_yEOqm5YqKMt8dlnXIajEUlKkHzq4bUk8"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,88.05,392.258)"/></clipPath></defs></g><g id="km16"><rect x="92.078" y="326.703" width="7.843" height="7.843" transform="matrix(0.707,0.707,-0.707,0.707,261.905,28.956)" id="Rectangle" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,25,25)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="2"/><g clip-path="url(#_clipPath_bVdDCpxEAqoDslaWi9lAAOaMlMvpZMIJ)"><text transform="matrix(1,0,0,1,91.875,332.921)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">16</text></g><defs><clipPath id="_clipPath_bVdDCpxEAqoDslaWi9lAAOaMlMvpZMIJ"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,91.8,326.508)"/></clipPath></defs></g></g><g id="traffic-control"><g id="nr1"><radialGradient id="_rgradient_0" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,89.875,336.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_t4XHBuWwM42EqWRNlpzY29kXKmcINCrX"><circle vector-effect="non-scaling-stroke" cx="94.90624999999996" cy="341.96874999999966" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="94.90624999999996" cy="341.96874999999966" r="5.03125" id="Ellipse" fill="url(#_rgradient_0)"/><circle vector-effect="non-scaling-stroke" cx="94.90624999999996" cy="341.96874999999966" r="5.03125" id="Ellipse" fill="url(#_rgradient_0)" mask="url(#_mask_t4XHBuWwM42EqWRNlpzY29kXKmcINCrX)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_K4WprUhe225pgpSyvCNuYOSwZjpIJNLD)"><text transform="matrix(1,0,0,1,92.881,344.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">1</text></g><defs><clipPath id="_clipPath_K4WprUhe225pgpSyvCNuYOSwZjpIJNLD"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,92.594,337.883)"/></clipPath></defs></g><g id="nr2"><radialGradient id="_rgradient_1" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,64.125,359.187)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_NjjZ4eFIwqDY0YJFGQS0mkDSWVt1iVPa"><circle vector-effect="non-scaling-stroke" cx="69.15624999999996" cy="364.2187499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="69.15624999999996" cy="364.2187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_1)"/><circle vector-effect="non-scaling-stroke" cx="69.15624999999996" cy="364.2187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_1)" mask="url(#_mask_NjjZ4eFIwqDY0YJFGQS0mkDSWVt1iVPa)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_QJQRR4NrlCA3Z1nWr34aKOhRXRSdPvZI)"><text transform="matrix(1,0,0,1,67.131,366.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">2</text></g><defs><clipPath id="_clipPath_QJQRR4NrlCA3Z1nWr34aKOhRXRSdPvZI"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,66.844,360.133)"/></clipPath></defs></g><g id="nr3"><radialGradient id="_rgradient_2" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,54.875,342.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_1riqMVNEQu0lhVYzd2WUKvK8l28SR0vA"><circle vector-effect="non-scaling-stroke" cx="59.90624999999996" cy="347.96874999999955" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="59.90624999999996" cy="347.96874999999955" r="5.03125" id="Ellipse" fill="url(#_rgradient_2)"/><circle vector-effect="non-scaling-stroke" cx="59.90624999999996" cy="347.96874999999955" r="5.03125" id="Ellipse" fill="url(#_rgradient_2)" mask="url(#_mask_1riqMVNEQu0lhVYzd2WUKvK8l28SR0vA)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_gHFWDZB3BonXFySnAEKfrB54BlQiUVv1)"><text transform="matrix(1,0,0,1,57.881,350.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">3</text></g><defs><clipPath id="_clipPath_gHFWDZB3BonXFySnAEKfrB54BlQiUVv1"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,57.594,343.883)"/></clipPath></defs></g><g id="nr4"><radialGradient id="_rgradient_3" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,42.625,326.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_n0mCqM8YNQoL3DIS0eyjlHN85GPYxZg9"><circle vector-effect="non-scaling-stroke" cx="47.65624999999994" cy="331.9687499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="47.65624999999994" cy="331.9687499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_3)"/><circle vector-effect="non-scaling-stroke" cx="47.65624999999994" cy="331.9687499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_3)" mask="url(#_mask_n0mCqM8YNQoL3DIS0eyjlHN85GPYxZg9)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_2vxofJIoz8sn69z4HWr9QVJdIzO3DnnM)"><text transform="matrix(1,0,0,1,45.631,334.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">4</text></g><defs><clipPath id="_clipPath_2vxofJIoz8sn69z4HWr9QVJdIzO3DnnM"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,45.344,327.883)"/></clipPath></defs></g><g id="nr5"><radialGradient id="_rgradient_4" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,23.875,283.687)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_uPcBj2Nxzc4JtOOZvinYMVrAniyDOWLi"><circle vector-effect="non-scaling-stroke" cx="28.906249999999943" cy="288.7187499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="28.906249999999943" cy="288.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_4)"/><circle vector-effect="non-scaling-stroke" cx="28.906249999999943" cy="288.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_4)" mask="url(#_mask_uPcBj2Nxzc4JtOOZvinYMVrAniyDOWLi)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_JnkY7OkVP5nZmfUUIDud2o397K8lIPKy)"><text transform="matrix(1,0,0,1,26.881,291.046)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">5</text></g><defs><clipPath id="_clipPath_JnkY7OkVP5nZmfUUIDud2o397K8lIPKy"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,26.594,284.633)"/></clipPath></defs></g><g id="nr6"><radialGradient id="_rgradient_5" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,17.625,234.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_AoGVndH58wwDv7DFBxcP0VE6DazW1tPo"><circle vector-effect="non-scaling-stroke" cx="22.656249999999943" cy="239.9687499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="22.656249999999943" cy="239.9687499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_5)"/><circle vector-effect="non-scaling-stroke" cx="22.656249999999943" cy="239.9687499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_5)" mask="url(#_mask_AoGVndH58wwDv7DFBxcP0VE6DazW1tPo)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_3vI4Oe0AXzkCLTKhzVUZC1x8D4z1CYxR)"><text transform="matrix(1,0,0,1,20.631,242.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">6</text></g><defs><clipPath id="_clipPath_3vI4Oe0AXzkCLTKhzVUZC1x8D4z1CYxR"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,20.344,235.883)"/></clipPath></defs></g><g id="nr7"><radialGradient id="_rgradient_6" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,4.875,135.687)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_4SuWQT9PqiWrcCayRvCy2isFj1vml5f1"><circle vector-effect="non-scaling-stroke" cx="9.90624999999994" cy="140.7187499999995" r="5.031249999999998" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="9.90624999999994" cy="140.7187499999995" r="5.031249999999998" id="Ellipse" fill="url(#_rgradient_6)"/><circle vector-effect="non-scaling-stroke" cx="9.90624999999994" cy="140.7187499999995" r="5.031249999999998" id="Ellipse" fill="url(#_rgradient_6)" mask="url(#_mask_4SuWQT9PqiWrcCayRvCy2isFj1vml5f1)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_drXCJUlkKdzfJ4qYvU8Up5iLyQ2DeTIr)"><text transform="matrix(1,0,0,1,7.881,143.046)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">7</text></g><defs><clipPath id="_clipPath_drXCJUlkKdzfJ4qYvU8Up5iLyQ2DeTIr"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,7.594,136.633)"/></clipPath></defs></g><g id="nr8"><radialGradient id="_rgradient_7" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,47.875,123.687)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_TVhJOPC9ldpSUJA3xSyXZmHke6mXP8T3"><circle vector-effect="non-scaling-stroke" cx="52.906249999999936" cy="128.7187499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="52.906249999999936" cy="128.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_7)"/><circle vector-effect="non-scaling-stroke" cx="52.906249999999936" cy="128.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_7)" mask="url(#_mask_TVhJOPC9ldpSUJA3xSyXZmHke6mXP8T3)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_H8CD38zWXcDASjctRoJXRAhpTjWW9YuF)"><text transform="matrix(1,0,0,1,50.881,131.046)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">8</text></g><defs><clipPath id="_clipPath_H8CD38zWXcDASjctRoJXRAhpTjWW9YuF"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,50.594,124.633)"/></clipPath></defs></g><g id="nr9"><radialGradient id="_rgradient_8" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,37.125,56.437)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_gu46mcyL8QWSv2ypZLQXb1HgcGSz55FC"><circle vector-effect="non-scaling-stroke" cx="42.15624999999993" cy="61.46874999999949" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="42.15624999999993" cy="61.46874999999949" r="5.03125" id="Ellipse" fill="url(#_rgradient_8)"/><circle vector-effect="non-scaling-stroke" cx="42.15624999999993" cy="61.46874999999949" r="5.03125" id="Ellipse" fill="url(#_rgradient_8)" mask="url(#_mask_gu46mcyL8QWSv2ypZLQXb1HgcGSz55FC)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_BvJ5tJOG1XVD63imJennWpqgqo8togZS)"><text transform="matrix(1,0,0,1,40.131,63.796)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">9</text></g><defs><clipPath id="_clipPath_BvJ5tJOG1XVD63imJennWpqgqo8togZS"><rect x="0" y="0" width="6" height="8.171" transform="matrix(1,0,0,1,39.844,57.383)"/></clipPath></defs></g><g id="nr10"><radialGradient id="_rgradient_9" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,119.453,1.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_VYBU84gMrR52gCn1Upur94Pg1OlhyOYv"><circle vector-effect="non-scaling-stroke" cx="124.48437499999994" cy="6.968749999999489" r="5.031249999999993" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="124.48437499999994" cy="6.968749999999489" r="5.031249999999993" id="Ellipse" fill="url(#_rgradient_9)"/><circle vector-effect="non-scaling-stroke" cx="124.48437499999994" cy="6.968749999999489" r="5.031249999999993" id="Ellipse" fill="url(#_rgradient_9)" mask="url(#_mask_VYBU84gMrR52gCn1Upur94Pg1OlhyOYv)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_tD6Hyh78L11ND5sR9kp0DDnt2tvQcPMG)"><text transform="matrix(1,0,0,1,120.622,9.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">10</text></g><defs><clipPath id="_clipPath_tD6Hyh78L11ND5sR9kp0DDnt2tvQcPMG"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,120.547,2.883)"/></clipPath></defs></g><g id="nr11"><radialGradient id="_rgradient_10" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,232.375,92.937)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_yefMpVjBlxw6CVl0EIVEJDh3iHoYN1Dl"><circle vector-effect="non-scaling-stroke" cx="237.40624999999991" cy="97.96874999999949" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="237.40624999999991" cy="97.96874999999949" r="5.03125" id="Ellipse" fill="url(#_rgradient_10)"/><circle vector-effect="non-scaling-stroke" cx="237.40624999999991" cy="97.96874999999949" r="5.03125" id="Ellipse" fill="url(#_rgradient_10)" mask="url(#_mask_yefMpVjBlxw6CVl0EIVEJDh3iHoYN1Dl)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_PRpH2CWOrw89HlccPmOPrZZEfAmo8RKh)"><text transform="matrix(1,0,0,1,234.028,100.296)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">11</text></g><defs><clipPath id="_clipPath_PRpH2CWOrw89HlccPmOPrZZEfAmo8RKh"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,233.953,93.883)"/></clipPath></defs></g><g id="nr12"><radialGradient id="_rgradient_11" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,134.375,173.687)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_DlUY4AP34IgIc0ZnRjTcmYs6F1Ta8oOE"><circle vector-effect="non-scaling-stroke" cx="139.40624999999991" cy="178.7187499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="139.40624999999991" cy="178.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_11)"/><circle vector-effect="non-scaling-stroke" cx="139.40624999999991" cy="178.7187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_11)" mask="url(#_mask_DlUY4AP34IgIc0ZnRjTcmYs6F1Ta8oOE)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_UBb2gz0Pt5u0QOXNcWNSVmyJR4HSk5tA)"><text transform="matrix(1,0,0,1,135.622,181.046)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">12</text></g><defs><clipPath id="_clipPath_UBb2gz0Pt5u0QOXNcWNSVmyJR4HSk5tA"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,135.547,174.633)"/></clipPath></defs></g><g id="nr13"><radialGradient id="_rgradient_12" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,146.375,171.187)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_uhIsNt61B1DQiE0KgT7NtVf6u14poQnh"><circle vector-effect="non-scaling-stroke" cx="151.40624999999991" cy="176.2187499999995" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="151.40624999999991" cy="176.2187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_12)"/><circle vector-effect="non-scaling-stroke" cx="151.40624999999991" cy="176.2187499999995" r="5.03125" id="Ellipse" fill="url(#_rgradient_12)" mask="url(#_mask_uhIsNt61B1DQiE0KgT7NtVf6u14poQnh)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_z0iIit8a2b8OitrOK2gi6jQagoboQVfh)"><text transform="matrix(1,0,0,1,147.811,178.546)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">13</text></g><defs><clipPath id="_clipPath_z0iIit8a2b8OitrOK2gi6jQagoboQVfh"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,147.735,172.133)"/></clipPath></defs></g><g id="nr14"><radialGradient id="_rgradient_13" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,168.687,239.812)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_lfBgjBufD1cZl1EdFzRggQm7nbp1RCz4"><circle vector-effect="non-scaling-stroke" cx="173.71874999999983" cy="244.84374999999943" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="173.71874999999983" cy="244.84374999999943" r="5.03125" id="Ellipse" fill="url(#_rgradient_13)"/><circle vector-effect="non-scaling-stroke" cx="173.71874999999983" cy="244.84374999999943" r="5.03125" id="Ellipse" fill="url(#_rgradient_13)" mask="url(#_mask_lfBgjBufD1cZl1EdFzRggQm7nbp1RCz4)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_Af5W6EJ5JJnzfaYIMoiFOwzoAnNa2N54)"><text transform="matrix(1,0,0,1,170.123,247.171)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">14</text></g><defs><clipPath id="_clipPath_Af5W6EJ5JJnzfaYIMoiFOwzoAnNa2N54"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,170.048,240.758)"/></clipPath></defs></g><g id="nr15"><radialGradient id="_rgradient_14" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,145.25,251.625)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_RoGva4TN35tW5dEr0khg8WrJzBj9JmYs"><circle vector-effect="non-scaling-stroke" cx="150.28124999999983" cy="256.65624999999943" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="150.28124999999983" cy="256.65624999999943" r="5.03125" id="Ellipse" fill="url(#_rgradient_14)"/><circle vector-effect="non-scaling-stroke" cx="150.28124999999983" cy="256.65624999999943" r="5.03125" id="Ellipse" fill="url(#_rgradient_14)" mask="url(#_mask_RoGva4TN35tW5dEr0khg8WrJzBj9JmYs)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_YkQuiVNMMqwfCmNBXKLGOAdlqF7HJaXH)"><text transform="matrix(1,0,0,1,146.686,258.984)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">15</text></g><defs><clipPath id="_clipPath_YkQuiVNMMqwfCmNBXKLGOAdlqF7HJaXH"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,146.61,252.571)"/></clipPath></defs></g><g id="nr16"><radialGradient id="_rgradient_15" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,186.583,293.958)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_UZzNELS7lHrvHR4Au5BKWNH4D5aMlxW5"><circle vector-effect="non-scaling-stroke" cx="191.6145833333332" cy="298.98958333333275" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="191.6145833333332" cy="298.98958333333275" r="5.03125" id="Ellipse" fill="url(#_rgradient_15)"/><circle vector-effect="non-scaling-stroke" cx="191.6145833333332" cy="298.98958333333275" r="5.03125" id="Ellipse" fill="url(#_rgradient_15)" mask="url(#_mask_UZzNELS7lHrvHR4Au5BKWNH4D5aMlxW5)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_VGBPcNlujTX4JZZLlcLeOwXGcwcRV6kM)"><text transform="matrix(1,0,0,1,187.706,301.317)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">16</text></g><defs><clipPath id="_clipPath_VGBPcNlujTX4JZZLlcLeOwXGcwcRV6kM"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,187.631,294.904)"/></clipPath></defs></g><g id="nr17"><radialGradient id="_rgradient_16" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,228.25,335.292)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_2XFmSN9pOYRBh5dNqXB0bgi2rGbEZt5K"><circle vector-effect="non-scaling-stroke" cx="233.2812499999998" cy="340.3229166666659" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="233.2812499999998" cy="340.3229166666659" r="5.03125" id="Ellipse" fill="url(#_rgradient_16)"/><circle vector-effect="non-scaling-stroke" cx="233.2812499999998" cy="340.3229166666659" r="5.03125" id="Ellipse" fill="url(#_rgradient_16)" mask="url(#_mask_2XFmSN9pOYRBh5dNqXB0bgi2rGbEZt5K)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_aSPzLQiUHTidKSsc6F0nIAVhhQt5RopM)"><text transform="matrix(1,0,0,1,229.686,342.651)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">17</text></g><defs><clipPath id="_clipPath_aSPzLQiUHTidKSsc6F0nIAVhhQt5RopM"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,229.61,336.237)"/></clipPath></defs></g><g id="nr18"><radialGradient id="_rgradient_17" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,170.583,378.292)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_5wL4bV7A5YOUZ61bCPTwud6uDfPzLAMs"><circle vector-effect="non-scaling-stroke" cx="175.61458333333312" cy="383.3229166666659" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="175.61458333333312" cy="383.3229166666659" r="5.03125" id="Ellipse" fill="url(#_rgradient_17)"/><circle vector-effect="non-scaling-stroke" cx="175.61458333333312" cy="383.3229166666659" r="5.03125" id="Ellipse" fill="url(#_rgradient_17)" mask="url(#_mask_5wL4bV7A5YOUZ61bCPTwud6uDfPzLAMs)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_bOOMVO82WnqStecw8UFO38DFXe9chV4D)"><text transform="matrix(1,0,0,1,171.787,385.651)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">18</text></g><defs><clipPath id="_clipPath_bOOMVO82WnqStecw8UFO38DFXe9chV4D"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,171.712,379.237)"/></clipPath></defs></g><g id="nr19"><radialGradient id="_rgradient_18" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,127.917,416.625)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_MA631NNPh4U1459fjxgFtGvrv1wE7cbf"><circle vector-effect="non-scaling-stroke" cx="132.9479166666665" cy="421.65624999999926" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="132.9479166666665" cy="421.65624999999926" r="5.03125" id="Ellipse" fill="url(#_rgradient_18)"/><circle vector-effect="non-scaling-stroke" cx="132.9479166666665" cy="421.65624999999926" r="5.03125" id="Ellipse" fill="url(#_rgradient_18)" mask="url(#_mask_MA631NNPh4U1459fjxgFtGvrv1wE7cbf)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_PpMC7zsCOTKLiNIwj8gmS2eW3TqTPCnJ)"><text transform="matrix(1,0,0,1,129.352,423.984)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">19</text></g><defs><clipPath id="_clipPath_PpMC7zsCOTKLiNIwj8gmS2eW3TqTPCnJ"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,129.277,417.571)"/></clipPath></defs></g><g id="nr20"><radialGradient id="_rgradient_19" fx="0.5" fy="0.5" cx="0.5" cy="0.5" r="0.5" gradientTransform="matrix(10.062,0,0,10.062,73.917,362.292)" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-opacity="1" style="stop-color:rgb(255,255,0)"/><stop offset="99.16666666666667%" stop-opacity="1" style="stop-color:rgb(202,202,0)"/></radialGradient><mask id="_mask_7SQXJvyfC9A1vbKIpvS6XgNodGQBc4uV"><circle vector-effect="non-scaling-stroke" cx="78.94791666666649" cy="367.3229166666658" r="5.03125" id="Ellipse" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="78.94791666666649" cy="367.3229166666658" r="5.03125" id="Ellipse" fill="url(#_rgradient_19)"/><circle vector-effect="non-scaling-stroke" cx="78.94791666666649" cy="367.3229166666658" r="5.03125" id="Ellipse" fill="url(#_rgradient_19)" mask="url(#_mask_7SQXJvyfC9A1vbKIpvS6XgNodGQBc4uV)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><g clip-path="url(#_clipPath_VJwF61JZ1fSTsCNtiB3McUBGFmYBGGk6)"><text transform="matrix(1,0,0,1,75.352,369.651)" id="Text" style="font-family:sans-serif;font-weight:700;font-size:6px;font-style:normal;fill:#000000;stroke:none;">20</text></g><defs><clipPath id="_clipPath_VJwF61JZ1fSTsCNtiB3McUBGFmYBGGk6"><rect x="0" y="0" width="9" height="8.171" transform="matrix(1,0,0,1,75.277,363.237)"/></clipPath></defs></g></g><g id="start"><mask id="_mask_Hd75ObOHj6fo218TKxrmrEOGaoJ7s0fB"><circle vector-effect="non-scaling-stroke" cx="107" cy="333" r="3.625" fill="white" stroke="none"/></mask><circle vector-effect="non-scaling-stroke" cx="107" cy="333" r="3.625" fill="rgb(255,255,255)"/><circle vector-effect="non-scaling-stroke" cx="107" cy="333" r="3.625" fill="rgb(255,255,255)" mask="url(#_mask_Hd75ObOHj6fo218TKxrmrEOGaoJ7s0fB)" stroke-width="2" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></svg>`;
!(function (r, i, l) {
	var s, n, a;
	e.__ && e.__(r, i),
		(n = (s = 'function' == typeof l) ? null : (l && l.__k) || i.__k),
		(a = []),
		P(
			i,
			(r = ((!s && l) || i).__k = f(d, null, [r])),
			n || o,
			o,
			void 0 !== i.ownerSVGElement,
			!s && l ? [l] : n ? null : i.firstChild ? t.call(i.childNodes) : null,
			a,
			!s && l ? l : n ? n.__e : i.firstChild,
			s
		),
		E(a, r);
})(
	W`<${function () {
		return W`<main><fieldset><input id="t16" type="checkbox" checked/><label for="t16">16km</label><input id="t11" type="checkbox" checked/><label for="t11">11km</label><input id="t5" type="checkbox" checked/><label for="t5">5km</label><input id="tc" type="checkbox" checked/><label for="tc">Verkeersregelaar</label><input id="t16km" type="checkbox" checked/><label for="t16km">16km labels</label></fieldset><div class="map-container"><img src="assets/map.svg" alt="map"/><${D}/></div></main>`;
	}}/>`,
	document.body
);
