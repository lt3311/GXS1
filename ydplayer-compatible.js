my_require = function o(a, s, c) {
	function u(t, e) {
		if (!s[t]) {
			if (!a[t]) {
				var n = "function" == typeof my_require && my_require;
				if (!e && n) return n(t, !0);
				if (l) return l(t, !0);
				var r = new Error("Cannot find module '" + t + "'");
				throw r.code = "MODULE_NOT_FOUND",
				r
			}
			var i = s[t] = {
				exports: {}
			};
			a[t][0].call(i.exports,
			function(e) {
				return u(a[t][1][e] || e)
			},
			i, i.exports, o, a, s, c)
		}
		return s[t].exports
	}
	for (var l = "function" == typeof my_require && my_require,
	e = 0; e < c.length; e++) u(c[e]);
	return u
} ({
	1 : [function(e, t, n) {
		"use strict";
		function a(e, t) {
			var n = document.head || document.getElementsByTagName("head")[0],
			r = i[i.length - 1];
			if ((t = t || {}).insertAt = t.insertAt || "bottom", "top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
			i.push(e);
			else {
				if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				n.appendChild(e)
			}
		}
		var i = [];
		t.exports = {
			createLink: function(e, t) {
				var n = document.head || document.getElementsByTagName("head")[0],
				r = document.createElement("link");
				for (var i in r.href = e,
				r.rel = "stylesheet",
				t) if (t.hasOwnProperty(i)) {
					var o = t[i];
					r.setAttribute("data-" + i, o)
				}
				n.appendChild(r)
			},
			createStyle: function(e, t, n) {
				n = n || {};
				var r = document.createElement("style");
				for (var i in r.type = "text/css",
				t) if (t.hasOwnProperty(i)) {
					var o = t[i];
					r.setAttribute("data-" + i, o)
				}
				r.sheet ? (r.innerHTML = e, r.sheet.cssText = e, a(r, {
					insertAt: n.insertAt
				})) : r.styleSheet ? (a(r, {
					insertAt: n.insertAt
				}), r.styleSheet.cssText = e) : (r.appendChild(document.createTextNode(e)), a(r, {
					insertAt: n.insertAt
				}))
			}
		}
	},
	{}],
	2 : [function(e, t, n) {
		t.exports = function(e) {
			if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
			return e
		}
	},
	{}],
	3 : [function(e, t, n) {
		var r = e("../internals/is-object");
		t.exports = function(e) {
			if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
			return e
		}
	},
	{
		"../internals/is-object": 21
	}],
	4 : [function(e, t, n) {
		var r = e("../internals/is-object");
		t.exports = function(e) {
			if (!r(e)) throw TypeError(String(e) + " is not an object");
			return e
		}
	},
	{
		"../internals/is-object": 21
	}],
	5 : [function(e, t, n) {
		t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
	},
	{}],
	6 : [function(e, t, n) {
		"use strict";
		function r(e) {
			return c(e) && u(D, l(e))
		}
		var i, o = e("../internals/array-buffer-native"),
		a = e("../internals/descriptors"),
		s = e("../internals/global"),
		c = e("../internals/is-object"),
		u = e("../internals/has"),
		l = e("../internals/classof"),
		d = e("../internals/create-non-enumerable-property"),
		p = e("../internals/redefine"),
		h = e("../internals/object-define-property").f,
		f = e("../internals/object-get-prototype-of"),
		g = e("../internals/object-set-prototype-of"),
		y = e("../internals/well-known-symbol"),
		v = e("../internals/uid"),
		A = s.Int8Array,
		m = A && A.prototype,
		E = s.Uint8ClampedArray,
		_ = E && E.prototype,
		b = A && f(A),
		C = m && f(m),
		S = Object.prototype,
		P = S.isPrototypeOf,
		T = y("toStringTag"),
		L = v("TYPED_ARRAY_TAG"),
		I = o && !!g && "Opera" !== l(s.opera),
		w = !1,
		D = {
			Int8Array: 1,
			Uint8Array: 1,
			Uint8ClampedArray: 1,
			Int16Array: 2,
			Uint16Array: 2,
			Int32Array: 4,
			Uint32Array: 4,
			Float32Array: 4,
			Float64Array: 8
		};
		for (i in D) s[i] || (I = !1);
		if ((!I || "function" != typeof b || b === Function.prototype) && (b = function() {
			throw TypeError("Incorrect invocation")
		},
		I)) for (i in D) s[i] && g(s[i], b);
		if ((!I || !C || C === S) && (C = b.prototype, I)) for (i in D) s[i] && g(s[i].prototype, C);
		if (I && f(_) !== C && g(_, C), a && !u(C, T)) for (i in w = !0, h(C, T, {
			get: function() {
				return c(this) ? this[L] : void 0
			}
		}), D) s[i] && d(s[i], L, i);
		t.exports = {
			NATIVE_ARRAY_BUFFER_VIEWS: I,
			TYPED_ARRAY_TAG: w && L,
			aTypedArray: function(e) {
				if (r(e)) return e;
				throw TypeError("Target is not a typed array")
			},
			aTypedArrayConstructor: function(e) {
				if (g) {
					if (P.call(b, e)) return e
				} else for (var t in D) if (u(D, i)) {
					var n = s[t];
					if (n && (e === n || P.call(n, e))) return e
				}
				throw TypeError("Target is not a typed array constructor")
			},
			exportTypedArrayMethod: function(e, t, n) {
				if (a) {
					if (n) for (var r in D) {
						var i = s[r];
						i && u(i.prototype, e) && delete i.prototype[e]
					}
					C[e] && !n || p(C, e, n ? t: I && m[e] || t)
				}
			},
			exportTypedArrayStaticMethod: function(e, t, n) {
				var r, i;
				if (a) {
					if (g) {
						if (n) for (r in D)(i = s[r]) && u(i, e) && delete i[e];
						if (b[e] && !n) return;
						try {
							return p(b, e, n ? t: I && A[e] || t)
						} catch(e) {}
					}
					for (r in D) ! (i = s[r]) || i[e] && !n || p(i, e, t)
				}
			},
			isView: function(e) {
				var t = l(e);
				return "DataView" === t || u(D, t)
			},
			isTypedArray: r,
			TypedArray: b,
			TypedArrayPrototype: C
		}
	},
	{
		"../internals/array-buffer-native": 5,
		"../internals/classof": 8,
		"../internals/create-non-enumerable-property": 10,
		"../internals/descriptors": 12,
		"../internals/global": 15,
		"../internals/has": 16,
		"../internals/is-object": 21,
		"../internals/object-define-property": 25,
		"../internals/object-get-prototype-of": 26,
		"../internals/object-set-prototype-of": 27,
		"../internals/redefine": 28,
		"../internals/uid": 38,
		"../internals/well-known-symbol": 40
	}],
	7 : [function(e, t, n) {
		var r = {}.toString;
		t.exports = function(e) {
			return r.call(e).slice(8, -1)
		}
	},
	{}],
	8 : [function(e, t, n) {
		var r = e("../internals/to-string-tag-support"),
		i = e("../internals/classof-raw"),
		o = e("../internals/well-known-symbol")("toStringTag"),
		a = "Arguments" == i(function() {
			return arguments
		} ());
		t.exports = r ? i: function(e) {
			var t, n, r;
			return void 0 === e ? "Undefined": null === e ? "Null": "string" == typeof(n = function(e, t) {
				try {
					return e[t]
				} catch(e) {}
			} (t = Object(e), o)) ? n: a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments": r
		}
	},
	{
		"../internals/classof-raw": 7,
		"../internals/to-string-tag-support": 37,
		"../internals/well-known-symbol": 40
	}],
	9 : [function(e, t, n) {
		var r = e("../internals/fails");
		t.exports = !r(function() {
			function e() {}
			return e.prototype.constructor = null,
			Object.getPrototypeOf(new e) !== e.prototype
		})
	},
	{
		"../internals/fails": 14
	}],
	10 : [function(e, t, n) {
		var r = e("../internals/descriptors"),
		i = e("../internals/object-define-property"),
		o = e("../internals/create-property-descriptor");
		t.exports = r ?
		function(e, t, n) {
			return i.f(e, t, o(1, n))
		}: function(e, t, n) {
			return e[t] = n,
			e
		}
	},
	{
		"../internals/create-property-descriptor": 11,
		"../internals/descriptors": 12,
		"../internals/object-define-property": 25
	}],
	11 : [function(e, t, n) {
		t.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	},
	{}],
	12 : [function(e, t, n) {
		var r = e("../internals/fails");
		t.exports = !r(function() {
			return 7 != Object.defineProperty({},
			1, {
				get: function() {
					return 7
				}
			})[1]
		})
	},
	{
		"../internals/fails": 14
	}],
	13 : [function(e, t, n) {
		var r = e("../internals/global"),
		i = e("../internals/is-object"),
		o = r.document,
		a = i(o) && i(o.createElement);
		t.exports = function(e) {
			return a ? o.createElement(e) : {}
		}
	},
	{
		"../internals/global": 15,
		"../internals/is-object": 21
	}],
	14 : [function(e, t, n) {
		t.exports = function(e) {
			try {
				return !! e()
			} catch(e) {
				return ! 0
			}
		}
	},
	{}],
	15 : [function(e, n, t) { (function(e) {
			function t(e) {
				return e && e.Math == Math && e
			}
			n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	16 : [function(e, t, n) {
		var r = {}.hasOwnProperty;
		t.exports = function(e, t) {
			return r.call(e, t)
		}
	},
	{}],
	17 : [function(e, t, n) {
		t.exports = {}
	},
	{}],
	18 : [function(e, t, n) {
		var r = e("../internals/descriptors"),
		i = e("../internals/fails"),
		o = e("../internals/document-create-element");
		t.exports = !r && !i(function() {
			return 7 != Object.defineProperty(o("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	},
	{
		"../internals/descriptors": 12,
		"../internals/document-create-element": 13,
		"../internals/fails": 14
	}],
	19 : [function(e, t, n) {
		var r = e("../internals/shared-store"),
		i = Function.toString;
		"function" != typeof r.inspectSource && (r.inspectSource = function(e) {
			return i.call(e)
		}),
		t.exports = r.inspectSource
	},
	{
		"../internals/shared-store": 32
	}],
	20 : [function(e, t, n) {
		var r, i, o, a = e("../internals/native-weak-map"),
		s = e("../internals/global"),
		c = e("../internals/is-object"),
		u = e("../internals/create-non-enumerable-property"),
		l = e("../internals/has"),
		d = e("../internals/shared-key"),
		p = e("../internals/hidden-keys"),
		h = s.WeakMap;
		if (a) {
			var f = new h,
			g = f.get,
			y = f.has,
			v = f.set;
			r = function(e, t) {
				return v.call(f, e, t),
				t
			},
			i = function(e) {
				return g.call(f, e) || {}
			},
			o = function(e) {
				return y.call(f, e)
			}
		} else {
			var A = d("state");
			p[A] = !0,
			r = function(e, t) {
				return u(e, A, t),
				t
			},
			i = function(e) {
				return l(e, A) ? e[A] : {}
			},
			o = function(e) {
				return l(e, A)
			}
		}
		t.exports = {
			set: r,
			get: i,
			has: o,
			enforce: function(e) {
				return o(e) ? i(e) : r(e, {})
			},
			getterFor: function(n) {
				return function(e) {
					var t;
					if (!c(e) || (t = i(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " my_required");
					return t
				}
			}
		}
	},
	{
		"../internals/create-non-enumerable-property": 10,
		"../internals/global": 15,
		"../internals/has": 16,
		"../internals/hidden-keys": 17,
		"../internals/is-object": 21,
		"../internals/native-weak-map": 24,
		"../internals/shared-key": 31
	}],
	21 : [function(e, t, n) {
		t.exports = function(e) {
			return "object" == typeof e ? null !== e: "function" == typeof e
		}
	},
	{}],
	22 : [function(e, t, n) {
		t.exports = !1
	},
	{}],
	23 : [function(e, t, n) {
		var r = e("../internals/fails");
		t.exports = !!Object.getOwnPropertySymbols && !r(function() {
			return ! String(Symbol())
		})
	},
	{
		"../internals/fails": 14
	}],
	24 : [function(e, t, n) {
		var r = e("../internals/global"),
		i = e("../internals/inspect-source"),
		o = r.WeakMap;
		t.exports = "function" == typeof o && /native code/.test(i(o))
	},
	{
		"../internals/global": 15,
		"../internals/inspect-source": 19
	}],
	25 : [function(e, t, n) {
		var r = e("../internals/descriptors"),
		i = e("../internals/ie8-dom-define"),
		o = e("../internals/an-object"),
		a = e("../internals/to-primitive"),
		s = Object.defineProperty;
		n.f = r ? s: function(e, t, n) {
			if (o(e), t = a(t, !0), o(n), i) try {
				return s(e, t, n)
			} catch(e) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
			return "value" in n && (e[t] = n.value),
			e
		}
	},
	{
		"../internals/an-object": 4,
		"../internals/descriptors": 12,
		"../internals/ie8-dom-define": 18,
		"../internals/to-primitive": 36
	}],
	26 : [function(e, t, n) {
		var r = e("../internals/has"),
		i = e("../internals/to-object"),
		o = e("../internals/shared-key"),
		a = e("../internals/correct-prototype-getter"),
		s = o("IE_PROTO"),
		c = Object.prototype;
		t.exports = a ? Object.getPrototypeOf: function(e) {
			return e = i(e),
			r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype: e instanceof Object ? c: null
		}
	},
	{
		"../internals/correct-prototype-getter": 9,
		"../internals/has": 16,
		"../internals/shared-key": 31,
		"../internals/to-object": 35
	}],
	27 : [function(e, t, n) {
		var i = e("../internals/an-object"),
		o = e("../internals/a-possible-prototype");
		t.exports = Object.setPrototypeOf || ("__proto__" in {} ?
		function() {
			var n, r = !1,
			e = {};
			try { (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
				r = e instanceof Array
			} catch(e) {}
			return function(e, t) {
				return i(e),
				o(t),
				r ? n.call(e, t) : e.__proto__ = t,
				e
			}
		} () : void 0)
	},
	{
		"../internals/a-possible-prototype": 3,
		"../internals/an-object": 4
	}],
	28 : [function(e, t, n) {
		var s = e("../internals/global"),
		c = e("../internals/create-non-enumerable-property"),
		u = e("../internals/has"),
		l = e("../internals/set-global"),
		r = e("../internals/inspect-source"),
		i = e("../internals/internal-state"),
		o = i.get,
		d = i.enforce,
		p = String(String).split("String"); (t.exports = function(e, t, n, r) {
			var i = !!r && !!r.unsafe,
			o = !!r && !!r.enumerable,
			a = !!r && !!r.noTargetGet;
			"function" == typeof n && ("string" != typeof t || u(n, "name") || c(n, "name", t), d(n).source = p.join("string" == typeof t ? t: "")),
			e !== s ? (i ? !a && e[t] && (o = !0) : delete e[t], o ? e[t] = n: c(e, t, n)) : o ? e[t] = n: l(t, n)
		})(Function.prototype, "toString",
		function() {
			return "function" == typeof this && o(this).source || r(this)
		})
	},
	{
		"../internals/create-non-enumerable-property": 10,
		"../internals/global": 15,
		"../internals/has": 16,
		"../internals/inspect-source": 19,
		"../internals/internal-state": 20,
		"../internals/set-global": 30
	}],
	29 : [function(e, t, n) {
		t.exports = function(e) {
			if (null == e) throw TypeError("Can't call method on " + e);
			return e
		}
	},
	{}],
	30 : [function(e, t, n) {
		var r = e("../internals/global"),
		i = e("../internals/create-non-enumerable-property");
		t.exports = function(t, n) {
			try {
				i(r, t, n)
			} catch(e) {
				r[t] = n
			}
			return n
		}
	},
	{
		"../internals/create-non-enumerable-property": 10,
		"../internals/global": 15
	}],
	31 : [function(e, t, n) {
		var r = e("../internals/shared"),
		i = e("../internals/uid"),
		o = r("keys");
		t.exports = function(e) {
			return o[e] || (o[e] = i(e))
		}
	},
	{
		"../internals/shared": 33,
		"../internals/uid": 38
	}],
	32 : [function(e, t, n) {
		var r = e("../internals/global"),
		i = e("../internals/set-global"),
		o = "__core-js_shared__",
		a = r[o] || i(o, {});
		t.exports = a
	},
	{
		"../internals/global": 15,
		"../internals/set-global": 30
	}],
	33 : [function(e, t, n) {
		var r = e("../internals/is-pure"),
		i = e("../internals/shared-store"); (t.exports = function(e, t) {
			return i[e] || (i[e] = void 0 !== t ? t: {})
		})("versions", []).push({
			version: "3.6.5",
			mode: r ? "pure": "global",
			copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
		})
	},
	{
		"../internals/is-pure": 22,
		"../internals/shared-store": 32
	}],
	34 : [function(e, t, n) {
		var i = e("../internals/an-object"),
		o = e("../internals/a-function"),
		a = e("../internals/well-known-symbol")("species");
		t.exports = function(e, t) {
			var n, r = i(e).constructor;
			return void 0 === r || null == (n = i(r)[a]) ? t: o(n)
		}
	},
	{
		"../internals/a-function": 2,
		"../internals/an-object": 4,
		"../internals/well-known-symbol": 40
	}],
	35 : [function(e, t, n) {
		var r = e("../internals/my_require-object-coercible");
		t.exports = function(e) {
			return Object(r(e))
		}
	},
	{
		"../internals/my_require-object-coercible": 29
	}],
	36 : [function(e, t, n) {
		var i = e("../internals/is-object");
		t.exports = function(e, t) {
			if (!i(e)) return e;
			var n, r;
			if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
			if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
			if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
			throw TypeError("Can't convert object to primitive value")
		}
	},
	{
		"../internals/is-object": 21
	}],
	37 : [function(e, t, n) {
		var r = {};
		r[e("../internals/well-known-symbol")("toStringTag")] = "z",
		t.exports = "[object z]" === String(r)
	},
	{
		"../internals/well-known-symbol": 40
	}],
	38 : [function(e, t, n) {
		var r = 0,
		i = Math.random();
		t.exports = function(e) {
			return "Symbol(" + String(void 0 === e ? "": e) + ")_" + (++r + i).toString(36)
		}
	},
	{}],
	39 : [function(e, t, n) {
		var r = e("../internals/native-symbol");
		t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
	},
	{
		"../internals/native-symbol": 23
	}],
	40 : [function(e, t, n) {
		var r = e("../internals/global"),
		i = e("../internals/shared"),
		o = e("../internals/has"),
		a = e("../internals/uid"),
		s = e("../internals/native-symbol"),
		c = e("../internals/use-symbol-as-uid"),
		u = i("wks"),
		l = r.Symbol,
		d = c ? l: l && l.withoutSetter || a;
		t.exports = function(e) {
			return o(u, e) || (s && o(l, e) ? u[e] = l[e] : u[e] = d("Symbol." + e)),
			u[e]
		}
	},
	{
		"../internals/global": 15,
		"../internals/has": 16,
		"../internals/native-symbol": 23,
		"../internals/shared": 33,
		"../internals/uid": 38,
		"../internals/use-symbol-as-uid": 39
	}],
	41 : [function(e, t, n) {
		"use strict";
		var r = e("../internals/array-buffer-view-core"),
		s = e("../internals/species-constructor"),
		i = e("../internals/fails"),
		c = r.aTypedArray,
		u = r.aTypedArrayConstructor,
		o = r.exportTypedArrayMethod,
		l = [].slice;
		o("slice",
		function(e, t) {
			for (var n = l.call(c(this), e, t), r = s(this, this.constructor), i = 0, o = n.length, a = new(u(r))(o); i < o;) a[i] = n[i++];
			return a
		},
		i(function() {
			new Int8Array(1).slice()
		}))
	},
	{
		"../internals/array-buffer-view-core": 6,
		"../internals/fails": 14,
		"../internals/species-constructor": 34
	}],
	42 : [function(e, t, n) {
		e("../../modules/es.typed-array.slice")
	},
	{
		"../../modules/es.typed-array.slice": 41
	}],
	43 : [function(e, t, n) {
		"use strict";
		t.exports = e("./").polyfill()
	},
	{
		"./": 44
	}],
	44 : [function(F, n, r) { (function(G, Y) {
			var e, t;
			e = this,
			t = function() {
				"use strict";
				function c(e) {
					return "function" == typeof e
				}
				var n = Array.isArray ? Array.isArray: function(e) {
					return "[object Array]" === Object.prototype.toString.call(e)
				},
				r = 0,
				t = void 0,
				i = void 0,
				a = function(e, t) {
					p[r] = e,
					p[r + 1] = t,
					2 === (r += 2) && (i ? i(h) : A())
				};
				var e = "undefined" != typeof window ? window: void 0,
				o = e || {},
				s = o.MutationObserver || o.WebKitMutationObserver,
				u = "undefined" == typeof self && void 0 !== G && "[object process]" === {}.toString.call(G),
				l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
				function d() {
					var e = setTimeout;
					return function() {
						return e(h, 1)
					}
				}
				var p = new Array(1e3);
				function h() {
					for (var e = 0; e < r; e += 2) { (0, p[e])(p[e + 1]),
						p[e] = void 0,
						p[e + 1] = void 0
					}
					r = 0
				}
				var f, g, y, v, A = void 0;
				function m(e, t) {
					var n = this,
					r = new this.constructor(b);
					void 0 === r[_] && B(r);
					var i = n._state;
					if (i) {
						var o = arguments[i - 1];
						a(function() {
							return M(i, r, o, n._result)
						})
					} else N(n, r, e, t);
					return r
				}
				function E(e) {
					if (e && "object" == typeof e && e.constructor === this) return e;
					var t = new this(b);
					return L(t, e),
					t
				}
				A = u ?
				function() {
					return G.nextTick(h)
				}: s ? (g = 0, y = new s(h), v = document.createTextNode(""), y.observe(v, {
					characterData: !0
				}),
				function() {
					v.data = g = ++g % 2
				}) : l ? ((f = new MessageChannel).port1.onmessage = h,
				function() {
					return f.port2.postMessage(0)
				}) : void 0 === e && "function" == typeof F ?
				function() {
					try {
						var e = Function("return this")().my_require("vertx");
						return void 0 !== (t = e.runOnLoop || e.runOnContext) ?
						function() {
							t(h)
						}: d()
					} catch(e) {
						return d()
					}
				} () : d();
				var _ = Math.random().toString(36).substring(2);
				function b() {}
				var C = void 0,
				S = 1,
				P = 2;
				function T(e, t, n) {
					t.constructor === e.constructor && n === m && t.constructor.resolve === E ?
					function(t, e) {
						e._state === S ? w(t, e._result) : e._state === P ? D(t, e._result) : N(e, void 0,
						function(e) {
							return L(t, e)
						},
						function(e) {
							return D(t, e)
						})
					} (e, t) : void 0 === n ? w(e, t) : c(n) ?
					function(e, r, i) {
						a(function(t) {
							var n = !1,
							e = function(e, t, n, r) {
								try {
									e.call(t, n, r)
								} catch(e) {
									return e
								}
							} (i, r,
							function(e) {
								n || (n = !0, r !== e ? L(t, e) : w(t, e))
							},
							function(e) {
								n || (n = !0, D(t, e))
							},
							t._label); ! n && e && (n = !0, D(t, e))
						},
						e)
					} (e, t, n) : w(e, t)
				}
				function L(t, e) {
					if (t === e) D(t, new TypeError("You cannot resolve a promise with itself"));
					else if (function(e) {
						var t = typeof e;
						return null !== e && ("object" == t || "function" == t)
					} (e)) {
						var n = void 0;
						try {
							n = e.then
						} catch(e) {
							return void D(t, e)
						}
						T(t, e, n)
					} else w(t, e)
				}
				function I(e) {
					e._onerror && e._onerror(e._result),
					O(e)
				}
				function w(e, t) {
					e._state === C && (e._result = t, e._state = S, 0 !== e._subscribers.length && a(O, e))
				}
				function D(e, t) {
					e._state === C && (e._state = P, e._result = t, a(I, e))
				}
				function N(e, t, n, r) {
					var i = e._subscribers,
					o = i.length;
					e._onerror = null,
					i[o] = t,
					i[o + S] = n,
					i[o + P] = r,
					0 === o && e._state && a(O, e)
				}
				function O(e) {
					var t = e._subscribers,
					n = e._state;
					if (0 !== t.length) {
						for (var r = void 0,
						i = void 0,
						o = e._result,
						a = 0; a < t.length; a += 3) r = t[a],
						i = t[a + n],
						r ? M(n, r, i, o) : i(o);
						e._subscribers.length = 0
					}
				}
				function M(e, t, n, r) {
					var i = c(n),
					o = void 0,
					a = void 0,
					s = !0;
					if (i) {
						try {
							o = n(r)
						} catch(e) {
							s = !1,
							a = e
						}
						if (t === o) return void D(t, new TypeError("A promises callback cannot return that same promise."))
					} else o = r;
					t._state !== C || (i && s ? L(t, o) : !1 === s ? D(t, a) : e === S ? w(t, o) : e === P && D(t, o))
				}
				var R = 0;
				function B(e) {
					e[_] = R++,
					e._state = void 0,
					e._result = void 0,
					e._subscribers = []
				}
				var k = (x.prototype._enumerate = function(e) {
					for (var t = 0; this._state === C && t < e.length; t++) this._eachEntry(e[t], t)
				},
				x.prototype._eachEntry = function(t, e) {
					var n = this._instanceConstructor,
					r = n.resolve;
					if (r === E) {
						var i = void 0,
						o = void 0,
						a = !1;
						try {
							i = t.then
						} catch(e) {
							a = !0,
							o = e
						}
						if (i === m && t._state !== C) this._settledAt(t._state, e, t._result);
						else if ("function" != typeof i) this._remaining--,
						this._result[e] = t;
						else if (n === V) {
							var s = new n(b);
							a ? D(s, o) : T(s, t, i),
							this._willSettleAt(s, e)
						} else this._willSettleAt(new n(function(e) {
							return e(t)
						}), e)
					} else this._willSettleAt(r(t), e)
				},
				x.prototype._settledAt = function(e, t, n) {
					var r = this.promise;
					r._state === C && (this._remaining--, e === P ? D(r, n) : this._result[t] = n),
					0 === this._remaining && w(r, this._result)
				},
				x.prototype._willSettleAt = function(e, t) {
					var n = this;
					N(e, void 0,
					function(e) {
						return n._settledAt(S, t, e)
					},
					function(e) {
						return n._settledAt(P, t, e)
					})
				},
				x);
				function x(e, t) {
					this._instanceConstructor = e,
					this.promise = new e(b),
					this.promise[_] || B(this.promise),
					n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : D(this.promise, new Error("Array Methods must be provided an Array"))
				}
				var V = (U.prototype.
				catch = function(e) {
					return this.then(null, e)
				},
				U.prototype.
				finally = function(t) {
					var n = this.constructor;
					return c(t) ? this.then(function(e) {
						return n.resolve(t()).then(function() {
							return e
						})
					},
					function(e) {
						return n.resolve(t()).then(function() {
							throw e
						})
					}) : this.then(t, t)
				},
				U);
				function U(e) {
					this[_] = R++,
					this._result = this._state = void 0,
					this._subscribers = [],
					b !== e && ("function" != typeof e &&
					function() {
						throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
					} (), this instanceof U ?
					function(t, e) {
						try {
							e(function(e) {
								L(t, e)
							},
							function(e) {
								D(t, e)
							})
						} catch(e) {
							D(t, e)
						}
					} (this, e) : function() {
						throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
					} ())
				}
				return V.prototype.then = m,
				V.all = function(e) {
					return new k(this, e).promise
				},
				V.race = function(i) {
					var o = this;
					return n(i) ? new o(function(e, t) {
						for (var n = i.length,
						r = 0; r < n; r++) o.resolve(i[r]).then(e, t)
					}) : new o(function(e, t) {
						return t(new TypeError("You must pass an array to race."))
					})
				},
				V.resolve = E,
				V.reject = function(e) {
					var t = new this(b);
					return D(t, e),
					t
				},
				V._setScheduler = function(e) {
					i = e
				},
				V._setAsap = function(e) {
					a = e
				},
				V._asap = a,
				V.polyfill = function() {
					var e = void 0;
					if (void 0 !== Y) e = Y;
					else if ("undefined" != typeof self) e = self;
					else try {
						e = Function("return this")()
					} catch(e) {
						throw new Error("polyfill failed because global object is unavailable in this environment")
					}
					var t = e.Promise;
					if (t) {
						var n = null;
						try {
							n = Object.prototype.toString.call(t.resolve())
						} catch(e) {}
						if ("[object Promise]" === n && !t.cast) return
					}
					e.Promise = V
				},
				V.Promise = V
			},
			"object" == typeof r && void 0 !== n ? n.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ES6Promise = t()
		}).call(this, F("_process"), "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{
		_process: 48
	}],
	45 : [function(e, t, n) {
		var c = Object.create ||
		function(e) {
			function t() {}
			return t.prototype = e,
			new t
		},
		a = Object.keys ||
		function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
			return n
		},
		o = Function.prototype.bind ||
		function(e) {
			var t = this;
			return function() {
				return t.apply(e, arguments)
			}
		};
		function r() {
			this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = c(null), this._eventsCount = 0),
			this._maxListeners = this._maxListeners || void 0
		} ((t.exports = r).EventEmitter = r).prototype._events = void 0,
		r.prototype._maxListeners = void 0;
		var i, s = 10;
		try {
			var u = {};
			Object.defineProperty && Object.defineProperty(u, "x", {
				value: 0
			}),
			i = 0 === u.x
		} catch(e) {
			i = !1
		}
		function l(e) {
			return void 0 === e._maxListeners ? r.defaultMaxListeners: e._maxListeners
		}
		function d(e, t, n, r) {
			var i, o, a;
			if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
			if ((o = e._events) ? (o.newListener && (e.emit("newListener", t, n.listener ? n.listener: n), o = e._events), a = o[t]) : (o = e._events = c(null), e._eventsCount = 0), a) {
				if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), !a.warned && (i = l(e)) && 0 < i && a.length > i) {
					a.warned = !0;
					var s = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
					s.name = "MaxListenersExceededWarning",
					s.emitter = e,
					s.type = t,
					s.count = a.length,
					"object" == typeof console && console.warn && console.warn("%s: %s", s.name, s.message)
				}
			} else a = o[t] = n,
			++e._eventsCount;
			return e
		}
		function p() {
			if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
			case 0:
				return this.listener.call(this.target);
			case 1:
				return this.listener.call(this.target, arguments[0]);
			case 2:
				return this.listener.call(this.target, arguments[0], arguments[1]);
			case 3:
				return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
			default:
				for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
				this.listener.apply(this.target, e)
			}
		}
		function h(e, t, n) {
			var r = {
				fired: !1,
				wrapFn: void 0,
				target: e,
				type: t,
				listener: n
			},
			i = o.call(p, r);
			return i.listener = n,
			r.wrapFn = i
		}
		function f(e, t, n) {
			var r = e._events;
			if (!r) return [];
			var i = r[t];
			return i ? "function" == typeof i ? n ? [i.listener || i] : [i] : n ?
			function(e) {
				for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
				return t
			} (i) : y(i, i.length) : []
		}
		function g(e) {
			var t = this._events;
			if (t) {
				var n = t[e];
				if ("function" == typeof n) return 1;
				if (n) return n.length
			}
			return 0
		}
		function y(e, t) {
			for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
			return n
		}
		i ? Object.defineProperty(r, "defaultMaxListeners", {
			enumerable: !0,
			get: function() {
				return s
			},
			set: function(e) {
				if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
				s = e
			}
		}) : r.defaultMaxListeners = s,
		r.prototype.setMaxListeners = function(e) {
			if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
			return this._maxListeners = e,
			this
		},
		r.prototype.getMaxListeners = function() {
			return l(this)
		},
		r.prototype.emit = function(e, t, n, r) {
			var i, o, a, s, c, u, l = "error" === e;
			if (u = this._events) l = l && null == u.error;
			else if (!l) return ! 1;
			if (l) {
				if (1 < arguments.length && (i = t), i instanceof Error) throw i;
				var d = new Error('Unhandled "error" event. (' + i + ")");
				throw d.context = i,
				d
			}
			if (! (o = u[e])) return ! 1;
			var p = "function" == typeof o;
			switch (a = arguments.length) {
			case 1:
				!
				function(e, t, n) {
					if (t) e.call(n);
					else for (var r = e.length,
					i = y(e, r), o = 0; o < r; ++o) i[o].call(n)
				} (o, p, this);
				break;
			case 2:
				!
				function(e, t, n, r) {
					if (t) e.call(n, r);
					else for (var i = e.length,
					o = y(e, i), a = 0; a < i; ++a) o[a].call(n, r)
				} (o, p, this, t);
				break;
			case 3:
				!
				function(e, t, n, r, i) {
					if (t) e.call(n, r, i);
					else for (var o = e.length,
					a = y(e, o), s = 0; s < o; ++s) a[s].call(n, r, i)
				} (o, p, this, t, n);
				break;
			case 4:
				!
				function(e, t, n, r, i, o) {
					if (t) e.call(n, r, i, o);
					else for (var a = e.length,
					s = y(e, a), c = 0; c < a; ++c) s[c].call(n, r, i, o)
				} (o, p, this, t, n, r);
				break;
			default:
				for (s = new Array(a - 1), c = 1; c < a; c++) s[c - 1] = arguments[c]; !
				function(e, t, n, r) {
					if (t) e.apply(n, r);
					else for (var i = e.length,
					o = y(e, i), a = 0; a < i; ++a) o[a].apply(n, r)
				} (o, p, this, s)
			}
			return ! 0
		},
		r.prototype.on = r.prototype.addListener = function(e, t) {
			return d(this, e, t, !1)
		},
		r.prototype.prependListener = function(e, t) {
			return d(this, e, t, !0)
		},
		r.prototype.once = function(e, t) {
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			return this.on(e, h(this, e, t)),
			this
		},
		r.prototype.prependOnceListener = function(e, t) {
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			return this.prependListener(e, h(this, e, t)),
			this
		},
		r.prototype.removeListener = function(e, t) {
			var n, r, i, o, a;
			if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
			if (! (r = this._events)) return this;
			if (! (n = r[e])) return this;
			if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = c(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
			else if ("function" != typeof n) {
				for (i = -1, o = n.length - 1; 0 <= o; o--) if (n[o] === t || n[o].listener === t) {
					a = n[o].listener,
					i = o;
					break
				}
				if (i < 0) return this;
				0 === i ? n.shift() : function(e, t) {
					for (var n = t,
					r = n + 1,
					i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
					e.pop()
				} (n, i),
				1 === n.length && (r[e] = n[0]),
				r.removeListener && this.emit("removeListener", e, a || t)
			}
			return this
		},
		r.prototype.removeAllListeners = function(e) {
			var t, n, r;
			if (! (n = this._events)) return this;
			if (!n.removeListener) return 0 === arguments.length ? (this._events = c(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = c(null) : delete n[e]),
			this;
			if (0 === arguments.length) {
				var i, o = a(n);
				for (r = 0; r < o.length; ++r)"removeListener" !== (i = o[r]) && this.removeAllListeners(i);
				return this.removeAllListeners("removeListener"),
				this._events = c(null),
				this._eventsCount = 0,
				this
			}
			if ("function" == typeof(t = n[e])) this.removeListener(e, t);
			else if (t) for (r = t.length - 1; 0 <= r; r--) this.removeListener(e, t[r]);
			return this
		},
		r.prototype.listeners = function(e) {
			return f(this, e, !0)
		},
		r.prototype.rawListeners = function(e) {
			return f(this, e, !1)
		},
		r.listenerCount = function(e, t) {
			return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
		},
		r.prototype.listenerCount = g,
		r.prototype.eventNames = function() {
			return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
		}
	},
	{}],
	46 : [function(e, t, n) { (function(e) { !
			function(e) {
				function t() {}
				function n(e, t) {
					if (e = void 0 === e ? "utf-8": e, t = void 0 === t ? {
						fatal: !1
					}: t, -1 === r.indexOf(e.toLowerCase())) throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e + "') is invalid.");
					if (t.fatal) throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")
				}
				if (e.TextEncoder && e.TextDecoder) return;
				var r = ["utf-8", "utf8", "unicode-1-1-utf-8"];
				Object.defineProperty(t.prototype, "encoding", {
					value: "utf-8"
				}),
				t.prototype.encode = function(e, t) {
					if ((t = void 0 === t ? {
						stream: !1
					}: t).stream) throw Error("Failed to encode: the 'stream' option is unsupported.");
					t = 0;
					for (var n = e.length,
					r = 0,
					i = Math.max(32, n + (n >> 1) + 7), o = new Uint8Array(i >> 3 << 3); t < n;) {
						var a = e.charCodeAt(t++);
						if (55296 <= a && a <= 56319) {
							if (t < n) {
								var s = e.charCodeAt(t);
								56320 == (64512 & s) && (++t, a = ((1023 & a) << 10) + (1023 & s) + 65536)
							}
							if (55296 <= a && a <= 56319) continue
						}
						if (r + 4 > o.length && (i += 8, i = (i *= 1 + t / e.length * 2) >> 3 << 3, (s = new Uint8Array(i)).set(o), o = s), 0 == (4294967168 & a)) o[r++] = a;
						else {
							if (0 == (4294965248 & a)) o[r++] = a >> 6 & 31 | 192;
							else if (0 == (4294901760 & a)) o[r++] = a >> 12 & 15 | 224,
							o[r++] = a >> 6 & 63 | 128;
							else {
								if (0 != (4292870144 & a)) continue;
								o[r++] = a >> 18 & 7 | 240,
								o[r++] = a >> 12 & 63 | 128,
								o[r++] = a >> 6 & 63 | 128
							}
							o[r++] = 63 & a | 128
						}
					}
					return o.slice ? o.slice(0, r) : o.subarray(0, r)
				},
				Object.defineProperty(n.prototype, "encoding", {
					value: "utf-8"
				}),
				Object.defineProperty(n.prototype, "fatal", {
					value: !1
				}),
				Object.defineProperty(n.prototype, "ignoreBOM", {
					value: !1
				}),
				n.prototype.decode = function(e, t) {
					if ((t = void 0 === t ? {
						stream: !1
					}: t).stream) throw Error("Failed to decode: the 'stream' option is unsupported."); ! ((t = e) instanceof Uint8Array) && t.buffer instanceof ArrayBuffer && (t = new Uint8Array(e.buffer)),
					e = 0;
					for (var n = [], r = [];;) {
						var i = e < t.length;
						if (!i || 65536 & e) {
							if (r.push(String.fromCharCode.apply(null, n)), !i) return r.join("");
							n = [],
							t = t.subarray(e),
							e = 0
						}
						if (0 === (i = t[e++])) n.push(0);
						else if (0 == (128 & i)) n.push(i);
						else if (192 == (224 & i)) {
							var o = 63 & t[e++];
							n.push((31 & i) << 6 | o)
						} else if (224 == (240 & i)) {
							o = 63 & t[e++];
							var a = 63 & t[e++];
							n.push((31 & i) << 12 | o << 6 | a)
						} else if (240 == (248 & i)) {
							65535 < (i = (7 & i) << 18 | (o = 63 & t[e++]) << 12 | (a = 63 & t[e++]) << 6 | 63 & t[e++]) && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i),
							n.push(i)
						}
					}
				},
				e.TextEncoder = t,
				e.TextDecoder = n
			} ("undefined" != typeof window ? window: void 0 !== e ? e: this)
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	47 : [function(e, r, i) { (function(e) {
			var t, n;
			t = this,
			n = function() {
				"use strict";
				function l(e, t, n) {
					var r = new XMLHttpRequest;
					r.open("GET", e),
					r.responseType = "blob",
					r.onload = function() {
						i(r.response, t, n)
					},
					r.onerror = function() {
						console.error("could not download file")
					},
					r.send()
				}
				function o(e) {
					var t = new XMLHttpRequest;
					t.open("HEAD", e, !1);
					try {
						t.send()
					} catch(e) {}
					return 200 <= t.status && t.status <= 299
				}
				function a(t) {
					try {
						t.dispatchEvent(new MouseEvent("click"))
					} catch(e) {
						var n = document.createEvent("MouseEvents");
						n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
						t.dispatchEvent(n)
					}
				}
				var d = "object" == typeof window && window.window === window ? window: "object" == typeof self && self.self === self ? self: "object" == typeof e && e.global === e ? e: void 0,
				i = d.saveAs || ("object" != typeof window || window !== d ?
				function() {}: "download" in HTMLAnchorElement.prototype ?
				function(e, t, n) {
					var r = d.URL || d.webkitURL,
					i = document.createElement("a");
					t = t || e.name || "download",
					i.download = t,
					i.rel = "noopener",
					"string" == typeof e ? (i.href = e, i.origin === location.origin ? a(i) : o(i.href) ? l(e, t, n) : a(i, i.target = "_blank")) : (i.href = r.createObjectURL(e), setTimeout(function() {
						r.revokeObjectURL(i.href)
					},
					4e4), setTimeout(function() {
						a(i)
					},
					0))
				}: "msSaveOrOpenBlob" in navigator ?
				function(e, t, n) {
					if (t = t || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob(function(e, t) {
						return void 0 === t ? t = {
							autoBom: !1
						}: "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {
							autoBom: !t
						}),
						t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
							type: e.type
						}) : e
					} (e, n), t);
					else if (o(e)) l(e, t, n);
					else {
						var r = document.createElement("a");
						r.href = e,
						r.target = "_blank",
						setTimeout(function() {
							a(r)
						})
					}
				}: function(e, t, n, r) {
					if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e) return l(e, t, n);
					var i = "application/octet-stream" === e.type,
					o = /constructor/i.test(d.HTMLElement) || d.safari,
					a = /CriOS\/[\d]+/.test(navigator.userAgent);
					if ((a || i && o) && "object" == typeof FileReader) {
						var s = new FileReader;
						s.onloadend = function() {
							var e = s.result;
							e = a ? e: e.replace(/^data:[^;]*;/, "data:attachment/file;"),
							r ? r.location.href = e: location = e,
							r = null
						},
						s.readAsDataURL(e)
					} else {
						var c = d.URL || d.webkitURL,
						u = c.createObjectURL(e);
						r ? r.location = u: location.href = u,
						r = null,
						setTimeout(function() {
							c.revokeObjectURL(u)
						},
						4e4)
					}
				});
				d.saveAs = i.saveAs = i,
				void 0 !== r && (r.exports = i)
			},
			"function" == typeof define && define.amd ? define([], n) : void 0 !== i ? n() : (n(), t.FileSaver = {})
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	48 : [function(e, t, n) {
		var r, i, o = t.exports = {};
		function a() {
			throw new Error("setTimeout has not been defined")
		}
		function s() {
			throw new Error("clearTimeout has not been defined")
		}
		function c(t) {
			if (r === setTimeout) return setTimeout(t, 0);
			if ((r === a || !r) && setTimeout) return r = setTimeout,
			setTimeout(t, 0);
			try {
				return r(t, 0)
			} catch(e) {
				try {
					return r.call(null, t, 0)
				} catch(e) {
					return r.call(this, t, 0)
				}
			}
		} !
		function() {
			try {
				r = "function" == typeof setTimeout ? setTimeout: a
			} catch(e) {
				r = a
			}
			try {
				i = "function" == typeof clearTimeout ? clearTimeout: s
			} catch(e) {
				i = s
			}
		} ();
		var u, l = [],
		d = !1,
		p = -1;
		function h() {
			d && u && (d = !1, u.length ? l = u.concat(l) : p = -1, l.length && f())
		}
		function f() {
			if (!d) {
				var e = c(h);
				d = !0;
				for (var t = l.length; t;) {
					for (u = l, l = []; ++p < t;) u && u[p].run();
					p = -1,
					t = l.length
				}
				u = null,
				d = !1,
				function(t) {
					if (i === clearTimeout) return clearTimeout(t);
					if ((i === s || !i) && clearTimeout) return i = clearTimeout,
					clearTimeout(t);
					try {
						i(t)
					} catch(e) {
						try {
							return i.call(null, t)
						} catch(e) {
							return i.call(this, t)
						}
					}
				} (e)
			}
		}
		function g(e, t) {
			this.fun = e,
			this.array = t
		}
		function y() {}
		o.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			l.push(new g(e, t)),
			1 !== l.length || d || c(f)
		},
		g.prototype.run = function() {
			this.fun.apply(null, this.array)
		},
		o.title = "browser",
		o.browser = !0,
		o.env = {},
		o.argv = [],
		o.version = "",
		o.versions = {},
		o.on = y,
		o.addListener = y,
		o.once = y,
		o.off = y,
		o.removeListener = y,
		o.removeAllListeners = y,
		o.emit = y,
		o.prependListener = y,
		o.prependOnceListener = y,
		o.listeners = function(e) {
			return []
		},
		o.binding = function(e) {
			throw new Error("process.binding is not supported")
		},
		o.cwd = function() {
			return "/"
		},
		o.chdir = function(e) {
			throw new Error("process.chdir is not supported")
		},
		o.umask = function() {
			return 0
		}
	},
	{}],
	49 : [function(e, r, t) { (function(e) {
			var t, n, o, a, s, c, u, l, d, p, h, f, g, y, v, A, m, E, _, b, C, S, P, T; !
			function(t) {
				var i = "object" == typeof e ? e: "object" == typeof self ? self: "object" == typeof this ? this: {};
				function n(n, r) {
					return n !== i && ("function" == typeof Object.create ? Object.defineProperty(n, "__esModule", {
						value: !0
					}) : n.__esModule = !0),
					function(e, t) {
						return n[e] = r ? r(e, t) : t
					}
				}
				"function" == typeof define && define.amd ? define("tslib", ["exports"],
				function(e) {
					t(n(i, n(e)))
				}) : "object" == typeof r && "object" == typeof r.exports ? t(n(i, n(r.exports))) : t(n(i))
			} (function(e) {
				var r = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array &&
				function(e, t) {
					e.__proto__ = t
				} ||
				function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				};
				t = function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
					function n() {
						this.constructor = e
					}
					r(e, t),
					e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
				},
				n = Object.assign ||
				function(e) {
					for (var t, n = 1,
					r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
					return e
				},
				o = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
					}
					return n
				},
				a = function(e, t, n, r) {
					var i, o = arguments.length,
					a = o < 3 ? t: null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
					else for (var s = e.length - 1; 0 <= s; s--)(i = e[s]) && (a = (o < 3 ? i(a) : 3 < o ? i(t, n, a) : i(t, n)) || a);
					return 3 < o && a && Object.defineProperty(t, n, a),
					a
				},
				s = function(n, r) {
					return function(e, t) {
						r(e, t, n)
					}
				},
				c = function(e, t) {
					if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
				},
				u = function(e, a, s, c) {
					return new(s = s || Promise)(function(t, n) {
						function r(e) {
							try {
								o(c.next(e))
							} catch(e) {
								n(e)
							}
						}
						function i(e) {
							try {
								o(c.
								throw (e))
							} catch(e) {
								n(e)
							}
						}
						function o(e) {
							e.done ? t(e.value) : function(t) {
								return t instanceof s ? t: new s(function(e) {
									e(t)
								})
							} (e.value).then(r, i)
						}
						o((c = c.apply(e, a || [])).next())
					})
				},
				l = function(n, r) {
					var i, o, a, e, s = {
						label: 0,
						sent: function() {
							if (1 & a[0]) throw a[1];
							return a[1]
						},
						trys: [],
						ops: []
					};
					return e = {
						next: t(0),
						throw: t(1),
						return: t(2)
					},
					"function" == typeof Symbol && (e[Symbol.iterator] = function() {
						return this
					}),
					e;
					function t(t) {
						return function(e) {
							return function(t) {
								if (i) throw new TypeError("Generator is already executing.");
								for (; s;) try {
									if (i = 1, o && (a = 2 & t[0] ? o.
									return: t[0] ? o.
									throw || ((a = o.
									return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
									switch (o = 0, a && (t = [2 & t[0], a.value]), t[0]) {
									case 0:
									case 1:
										a = t;
										break;
									case 4:
										return s.label++,
										{
											value: t[1],
											done: !1
										};
									case 5:
										s.label++,
										o = t[1],
										t = [0];
										continue;
									case 7:
										t = s.ops.pop(),
										s.trys.pop();
										continue;
									default:
										if (! (a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
											s = 0;
											continue
										}
										if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
											s.label = t[1];
											break
										}
										if (6 === t[0] && s.label < a[1]) {
											s.label = a[1],
											a = t;
											break
										}
										if (a && s.label < a[2]) {
											s.label = a[2],
											s.ops.push(t);
											break
										}
										a[2] && s.ops.pop(),
										s.trys.pop();
										continue
									}
									t = r.call(n, s)
								} catch(e) {
									t = [6, e],
									o = 0
								} finally {
									i = a = 0
								}
								if (5 & t[0]) throw t[1];
								return {
									value: t[0] ? t[1] : void 0,
									done: !0
								}
							} ([t, e])
						}
					}
				},
				d = function(e, t) {
					for (var n in e)"default" === n || Object.prototype.hasOwnProperty.call(t, n) || T(t, e, n)
				},
				T = Object.create ?
				function(e, t, n, r) {
					void 0 === r && (r = n),
					Object.defineProperty(e, r, {
						enumerable: !0,
						get: function() {
							return t[n]
						}
					})
				}: function(e, t, n, r) {
					void 0 === r && (r = n),
					e[r] = t[n]
				},
				p = function(e) {
					var t = "function" == typeof Symbol && Symbol.iterator,
					n = t && e[t],
					r = 0;
					if (n) return n.call(e);
					if (e && "number" == typeof e.length) return {
						next: function() {
							return e && r >= e.length && (e = void 0),
							{
								value: e && e[r++],
								done: !e
							}
						}
					};
					throw new TypeError(t ? "Object is not iterable.": "Symbol.iterator is not defined.")
				},
				h = function(e, t) {
					var n = "function" == typeof Symbol && e[Symbol.iterator];
					if (!n) return e;
					var r, i, o = n.call(e),
					a = [];
					try {
						for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) a.push(r.value)
					} catch(e) {
						i = {
							error: e
						}
					} finally {
						try {
							r && !r.done && (n = o.
							return) && n.call(o)
						} finally {
							if (i) throw i.error
						}
					}
					return a
				},
				f = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
					return e
				},
				g = function() {
					for (var e = 0,
					t = 0,
					n = arguments.length; t < n; t++) e += arguments[t].length;
					var r = Array(e),
					i = 0;
					for (t = 0; t < n; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
					return r
				},
				y = function(e, t) {
					for (var n = 0,
					r = t.length,
					i = e.length; n < r; n++, i++) e[i] = t[n];
					return e
				},
				v = function(e) {
					return this instanceof v ? (this.v = e, this) : new v(e)
				},
				A = function(e, t, n) {
					if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
					var i, o = n.apply(e, t || []),
					a = [];
					return i = {},
					r("next"),
					r("throw"),
					r("return"),
					i[Symbol.asyncIterator] = function() {
						return this
					},
					i;
					function r(r) {
						o[r] && (i[r] = function(n) {
							return new Promise(function(e, t) {
								1 < a.push([r, n, e, t]) || s(r, n)
							})
						})
					}
					function s(e, t) {
						try { !
							function(e) {
								e.value instanceof v ? Promise.resolve(e.value.v).then(c, u) : l(a[0][2], e)
							} (o[e](t))
						} catch(e) {
							l(a[0][3], e)
						}
					}
					function c(e) {
						s("next", e)
					}
					function u(e) {
						s("throw", e)
					}
					function l(e, t) {
						e(t),
						a.shift(),
						a.length && s(a[0][0], a[0][1])
					}
				},
				m = function(r) {
					var e, i;
					return e = {},
					t("next"),
					t("throw",
					function(e) {
						throw e
					}),
					t("return"),
					e[Symbol.iterator] = function() {
						return this
					},
					e;
					function t(t, n) {
						e[t] = r[t] ?
						function(e) {
							return (i = !i) ? {
								value: v(r[t](e)),
								done: "return" === t
							}: n ? n(e) : e
						}: n
					}
				},
				E = function(i) {
					if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
					var e, t = i[Symbol.asyncIterator];
					return t ? t.call(i) : (i = p(i), e = {},
					n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
						return this
					},
					e);
					function n(r) {
						e[r] = i[r] &&
						function(n) {
							return new Promise(function(e, t) { (function(t, e, n, r) {
									Promise.resolve(r).then(function(e) {
										t({
											value: e,
											done: n
										})
									},
									e)
								})(e, t, (n = i[r](n)).done, n.value)
							})
						}
					}
				},
				_ = function(e, t) {
					return Object.defineProperty ? Object.defineProperty(e, "raw", {
						value: t
					}) : e.raw = t,
					e
				};
				var i = Object.create ?
				function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					})
				}: function(e, t) {
					e.
				default = t
				};
				b = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e) for (var n in e)"default" !== n && Object.prototype.hasOwnProperty.call(e, n) && T(t, e, n);
					return i(t, e),
					t
				},
				C = function(e) {
					return e && e.__esModule ? e: {
					default:
						e
					}
				},
				S = function(e, t) {
					if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
					return t.get(e)
				},
				P = function(e, t, n) {
					if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
					return t.set(e, n),
					n
				},
				e("__extends", t),
				e("__assign", n),
				e("__rest", o),
				e("__decorate", a),
				e("__param", s),
				e("__metadata", c),
				e("__awaiter", u),
				e("__generator", l),
				e("__exportStar", d),
				e("__createBinding", T),
				e("__values", p),
				e("__read", h),
				e("__spread", f),
				e("__spreadArrays", g),
				e("__spreadArray", y),
				e("__await", v),
				e("__asyncGenerator", A),
				e("__asyncDelegator", m),
				e("__asyncValues", E),
				e("__makeTemplateObject", _),
				e("__importStar", b),
				e("__importDefault", C),
				e("__classPrivateFieldGet", S),
				e("__classPrivateFieldSet", P)
			})
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	50 : [function(e, t, n) { (function(e) { !
			function(t) {
				function e(t) {
					var e = {
						next: function() {
							var e = t.shift();
							return {
								done: void 0 === e,
								value: e
							}
						}
					};
					return i && (e[Symbol.iterator] = function() {
						return e
					}),
					e
				}
				function r(e) {
					return encodeURIComponent(e).replace(/%20/g, "+")
				}
				function o(e) {
					return decodeURIComponent(String(e).replace(/\+/g, " "))
				}
				var a, n, i = function() {
					try {
						return !! Symbol.iterator
					} catch(e) {
						return ! 1
					}
				} (); !
				function() {
					try {
						var e = t.URLSearchParams;
						return "a=1" === new e("?a=1").toString() && "function" == typeof e.prototype.set
					} catch(e) {
						return ! 1
					}
				} () && ((n = (a = function(e) {
					Object.defineProperty(this, "_entries", {
						writable: !0,
						value: {}
					});
					var t = typeof e;
					if ("undefined" == t);
					else if ("string" == t)"" !== e && this._fromString(e);
					else if (e instanceof a) {
						var n = this;
						e.forEach(function(e, t) {
							n.append(t, e)
						})
					} else {
						if (null === e || "object" != t) throw new TypeError("Unsupported input's type for URLSearchParams");
						if ("[object Array]" === Object.prototype.toString.call(e)) for (var r = 0; r < e.length; r++) {
							var i = e[r];
							if ("[object Array]" !== Object.prototype.toString.call(i) && 2 === i.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
							this.append(i[0], i[1])
						} else for (var o in e) e.hasOwnProperty(o) && this.append(o, e[o])
					}
				}).prototype).append = function(e, t) {
					e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
				},
				n.delete = function(e) {
					delete this._entries[e]
				},
				n.get = function(e) {
					return e in this._entries ? this._entries[e][0] : null
				},
				n.getAll = function(e) {
					return e in this._entries ? this._entries[e].slice(0) : []
				},
				n.has = function(e) {
					return e in this._entries
				},
				n.set = function(e, t) {
					this._entries[e] = [String(t)]
				},
				n.forEach = function(e, t) {
					var n;
					for (var r in this._entries) if (this._entries.hasOwnProperty(r)) {
						n = this._entries[r];
						for (var i = 0; i < n.length; i++) e.call(t, n[i], r, this)
					}
				},
				n.keys = function() {
					var n = [];
					return this.forEach(function(e, t) {
						n.push(t)
					}),
					e(n)
				},
				n.values = function() {
					var t = [];
					return this.forEach(function(e) {
						t.push(e)
					}),
					e(t)
				},
				n.entries = function() {
					var n = [];
					return this.forEach(function(e, t) {
						n.push([t, e])
					}),
					e(n)
				},
				i && (n[Symbol.iterator] = n.entries), n.toString = function() {
					var n = [];
					return this.forEach(function(e, t) {
						n.push(r(t) + "=" + r(e))
					}),
					n.join("&")
				},
				t.URLSearchParams = a);
				var s = t.URLSearchParams.prototype;
				"function" != typeof s.sort && (s.sort = function() {
					var n = this,
					r = [];
					this.forEach(function(e, t) {
						r.push([t, e]),
						n._entries || n.delete(t)
					}),
					r.sort(function(e, t) {
						return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
					}),
					n._entries && (n._entries = {});
					for (var e = 0; e < r.length; e++) this.append(r[e][0], r[e][1])
				}),
				"function" != typeof s._fromString && Object.defineProperty(s, "_fromString", {
					enumerable: !1,
					configurable: !1,
					writable: !1,
					value: function(e) {
						if (this._entries) this._entries = {};
						else {
							var n = [];
							this.forEach(function(e, t) {
								n.push(t)
							});
							for (var t = 0; t < n.length; t++) this.delete(n[t])
						}
						var r, i = (e = e.replace(/^\?/, "")).split("&");
						for (t = 0; t < i.length; t++) r = i[t].split("="),
						this.append(o(r[0]), 1 < r.length ? o(r[1]) : "")
					}
				})
			} (void 0 !== e ? e: "undefined" != typeof window ? window: "undefined" != typeof self ? self: this),
			function(l) {
				var t, n;
				function e(e, t) {
					"string" != typeof e && (e = String(e));
					var n, r = document;
					if (t && (void 0 === l.location || t !== l.location.href)) { (n = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = t,
						r.head.appendChild(n);
						try {
							if (0 !== n.href.indexOf(t)) throw new Error(n.href)
						} catch(e) {
							throw new Error("URL unable to set base " + t + " due to " + e)
						}
					}
					var i = r.createElement("a");
					if (i.href = e, n && (r.body.appendChild(i), i.href = i.href), ":" === i.protocol || !/:/.test(i.href)) throw new TypeError("Invalid URL");
					Object.defineProperty(this, "_anchorElement", {
						value: i
					});
					var o = new l.URLSearchParams(this.search),
					a = !0,
					s = !0,
					c = this; ["append", "delete", "set"].forEach(function(e) {
						var t = o[e];
						o[e] = function() {
							t.apply(o, arguments),
							a && (s = !1, c.search = o.toString(), s = !0)
						}
					}),
					Object.defineProperty(this, "searchParams", {
						value: o,
						enumerable: !0
					});
					var u = void 0;
					Object.defineProperty(this, "_updateSearchParams", {
						enumerable: !1,
						configurable: !1,
						writable: !1,
						value: function() {
							this.search !== u && (u = this.search, s && (a = !1, this.searchParams._fromString(this.search), a = !0))
						}
					})
				}
				if (function() {
					try {
						var e = new l.URL("b", "http://a");
						return e.pathname = "c d",
						"http://a/c%20d" === e.href && e.searchParams
					} catch(e) {
						return ! 1
					}
				} () || (t = l.URL, n = e.prototype, ["hash", "host", "hostname", "port", "protocol"].forEach(function(e) { !
					function(t) {
						Object.defineProperty(n, t, {
							get: function() {
								return this._anchorElement[t]
							},
							set: function(e) {
								this._anchorElement[t] = e
							},
							enumerable: !0
						})
					} (e)
				}), Object.defineProperty(n, "search", {
					get: function() {
						return this._anchorElement.search
					},
					set: function(e) {
						this._anchorElement.search = e,
						this._updateSearchParams()
					},
					enumerable: !0
				}), Object.defineProperties(n, {
					toString: {
						get: function() {
							var e = this;
							return function() {
								return e.href
							}
						}
					},
					href: {
						get: function() {
							return this._anchorElement.href.replace(/\?$/, "")
						},
						set: function(e) {
							this._anchorElement.href = e,
							this._updateSearchParams()
						},
						enumerable: !0
					},
					pathname: {
						get: function() {
							return this._anchorElement.pathname.replace(/(^\/?)/, "/")
						},
						set: function(e) {
							this._anchorElement.pathname = e
						},
						enumerable: !0
					},
					origin: {
						get: function() {
							var e = {
								"http:": 80,
								"https:": 443,
								"ftp:": 21
							} [this._anchorElement.protocol],
							t = this._anchorElement.port != e && "" !== this._anchorElement.port;
							return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port: "")
						},
						enumerable: !0
					},
					password: {
						get: function() {
							return ""
						},
						set: function(e) {},
						enumerable: !0
					},
					username: {
						get: function() {
							return ""
						},
						set: function(e) {},
						enumerable: !0
					}
				}), e.createObjectURL = function(e) {
					return t.createObjectURL.apply(t, arguments)
				},
				e.revokeObjectURL = function(e) {
					return t.revokeObjectURL.apply(t, arguments)
				},
				l.URL = e), void 0 !== l.location && !("origin" in l.location)) {
					function r() {
						return l.location.protocol + "//" + l.location.hostname + (l.location.port ? ":" + l.location.port: "")
					}
					try {
						Object.defineProperty(l.location, "origin", {
							get: r,
							enumerable: !0
						})
					} catch(e) {
						setInterval(function() {
							l.location.origin = r()
						},
						100)
					}
				}
			} (void 0 !== e ? e: "undefined" != typeof window ? window: "undefined" != typeof self ? self: this)
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	51 : [function(e, t, n) {
		"use strict";
		var o, r;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.ydmessageerror = n.yderror = n.YDErrorCode = void 0,
		(r = o = n.YDErrorCode || (n.YDErrorCode = {}))[r.NONE = 0] = "NONE",
		r[r.ACTION_PENDING = 1] = "ACTION_PENDING",
		r[r.CONNECTION_CLOSED = 2] = "CONNECTION_CLOSED",
		r[r.CONNECTION_ERROR = 3] = "CONNECTION_ERROR",
		r[r.CONNECTION_TIMEOUT = 4] = "CONNECTION_TIMEOUT",
		r[r.AUTH_ERROR = 5] = "AUTH_ERROR",
		r[r.MESSAGE_ERROR = 6] = "MESSAGE_ERROR",
		r[r.ENCODING_NOT_SUPPORT = 7] = "ENCODING_NOT_SUPPORT",
		r[r.MEDIA_ERROR = 8] = "MEDIA_ERROR",
		r[r.MEDIASOURCE_ERROR = 9] = "MEDIASOURCE_ERROR",
		r[r.UNKOWN_ERROR = 10] = "UNKOWN_ERROR";
		var a = (i.prototype.toString = function() {
			return this.description ? this.description: "string" == typeof this.message ? this.message: "" + this
		},
		i);
		function i(e, t, n, r, i) {
			void 0 === e && (e = o.NONE),
			this.code = e,
			this.subCode = n,
			this.message = t,
			this.innerError = r,
			this.description = i
		}
		function s(e, t, n, r, i) {
			return void 0 === e && (e = o.NONE),
			new a(e, t, n, r, i)
		}
		n.
	default = a,
		n.yderror = s,
		n.ydmessageerror = function(e, t) {
			return s(o.MESSAGE_ERROR, e, void 0, t)
		}
	},
	{}],
	52 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.ConnectionEvents = void 0,
		n.ConnectionEvents = {
			OPEN: "open",
			AUTH: "auth",
			MESSAGE: "message",
			CLOSE: "close",
			ERROR: "error"
		}
	},
	{}],
	53 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.Network = void 0;
		var r = (i.htonl = function(e, t, n) {
			e[t] = 255 & n >> 24,
			e[t + 1] = 255 & n >> 16,
			e[t + 2] = 255 & n >> 8,
			e[t + 3] = 255 & n
		},
		i.ntohl = function(e, t) {
			return (255 & e[t]) << 24 | (255 & e[t + 1]) << 16 | (255 & e[t + 2]) << 8 | 255 & e[t + 3]
		},
		i);
		function i() {}
		n.Network = r
	},
	{}],
	54 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.TransportEvents = void 0,
		n.TransportEvents = {
			OPEN: "open",
			CLOSE: "close",
			DATA: "data",
			ERROR: "error"
		}
	},
	{}],
	55 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.WebSocketTransport = void 0;
		var r, i = e("tslib"),
		o = e("events"),
		a = e("./transport"),
		s = e("../utils/log"),
		c = (r = o.EventEmitter, i.__extends(u, r), u.prototype.open = function() {
			this._opened || (this._websocket = new WebSocket(this._url), this._websocket.binaryType = "arraybuffer", this._websocket.onopen = this._ws_onopen, this._websocket.onclose = this._ws_onclose, this._websocket.onerror = this._ws_onerror, this._websocket.onmessage = this._ws_onmessage)
		},
		u.prototype.close = function() {
			if (null == this._websocket) throw new Error("WebSocketTransport is not opened."); (this._websocket.OPEN || this._websocket.CONNECTING) && this._websocket.close()
		},
		u.prototype.send = function(e) {
			if (null == this._websocket) throw new Error("WebSocketTransport is not opened.");
			this._websocket.send(e)
		},
		u);
		function u(e) {
			var n = r.call(this) || this;
			return n.LOG_TAG = "[WebSocketTransport] > ",
			n._opened = !1,
			n._websocket = null,
			n.onmessage = null,
			n._ws_onopen = function(e) {
				n.emit(a.TransportEvents.OPEN, e)
			},
			n._ws_onclose = function(e) {
				s.Log.debug(n.LOG_TAG, e),
				n.emit(a.TransportEvents.CLOSE, e)
			}, 
			n._ws_onerror = function(e) {
				n.emit(a.TransportEvents.ERROR, e)
			},
			n._ws_onmessage = function(e) {
				var t = e.data;
				null != n.onmessage && t instanceof ArrayBuffer && n.onmessage(t),
				n.emit(a.TransportEvents.DATA, t)
			},
			n._url = e,
			n
		}
		n.WebSocketTransport = c
	},
	{
		"../utils/log": 109,
		"./transport": 54,
		events: 45,
		tslib: 49
	}],
	56 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDAVPacket = n.PlaybackDescription = n.RecordInfo = n.AudioDescription = n.VideoDescription = n.PlaybackRequestFrameType = n.RecordType = n.AudioType = n.VideoEncoding = n.FrameType = void 0;
		var r, i, o, a, s, c, u = e("../../utils/number"); (r = n.FrameType || (n.FrameType = {}))[r.H264_P = 0] = "H264_P",
		r[r.H264_I = 1] = "H264_I",
		r[r.H264_Init = 3] = "H264_Init",
		r[r.AUDIO_PCM = 5] = "AUDIO_PCM",
		r[r.AUDIO_SPEEX = 6] = "AUDIO_SPEEX",
		r[r.AUDIO_AAC = 7] = "AUDIO_AAC",
		r[r.TEXT_OSD = 9] = "TEXT_OSD",
		r[r.AUDIO_G711a = 11] = "AUDIO_G711a",
		r[r.AUDIO_G711u = 12] = "AUDIO_G711u",
		r[r.H265_P = 32] = "H265_P",
		r[r.H265_I = 33] = "H265_I",
		r[r.H265_B = 34] = "H265_B",
		(o = i = n.VideoEncoding || (n.VideoEncoding = {}))[o.H264 = 1] = "H264",
		o[o.H265 = 4] = "H265",
		o[o.ALL = 5] = "ALL",
		(a = n.AudioType || (n.AudioType = {}))[a.PCM8 = 0] = "PCM8",
		a[a.AMR = 1] = "AMR",
		a[a.SPEEX = 2] = "SPEEX",
		a[a.ADPCM = 3] = "ADPCM",
		a[a.AAC = 4] = "AAC",
		a[a.G711A = 5] = "G711A",
		a[a.G711U = 6] = "G711U",
		(s = n.RecordType || (n.RecordType = {}))[s.UNKNOWN = 0] = "UNKNOWN",
		s[s.HAND = 1] = "HAND",
		s[s.ALARM = 2] = "ALARM",
		s[s.TIMER = 4] = "TIMER",
		s[s.ALL = 7] = "ALL",
		(c = n.PlaybackRequestFrameType || (n.PlaybackRequestFrameType = {}))[c.All = 0] = "All",
		c[c.KEY = 1] = "KEY",
		c[c.NONE_KEY = 2] = "NONE_KEY";
		function l() {
			this.channel = 0,
			this.fps = 0,
			this.encoding = i.H264,
			this.imageWidth = 0,
			this.imageHeight = 0,
			this.gopSize = 0
		}
		n.VideoDescription = l;
		function d() {
			this.channel = 0,
			this.type = 0,
			this.sample = 0,
			this.audioChannel = 0
		}
		n.AudioDescription = d;
		function p(e, t, n, r) {
			this.filename = e,
			this.startTime = t,
			this.endTime = n,
			this.recordType = r
		}
		n.RecordInfo = p;
		function h() {
			this.video = {
				format: 0,
				fps: 0,
				weight: 0,
				height: 0
			},
			this.audio = {
				format: 0,
				channel: 0,
				sample: 0
			},
			this.continuousTime = 0
		}
		n.PlaybackDescription = h;
		function f(e) {
			this.channel = u.readInt16(e, 0),
			this.dataType = u.readInt16(e, 2),
			this.streamIndex = u.readInt16(e, 4),
			this.frameType = u.readInt16(e, 6),
			this.timestamp = u.readInt64(e, 8),
			this.frame = e.subarray(16)
		}
		n.YDAVPacket = f
	},
	{
		"../../utils/number": 110
	}],
	57 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDClient = void 0;
		var r, i = e("tslib"),
		o = e("events"),
		a = e("./connection"),
		s = e("./url"),
		c = e("./processer/streaming"),
		u = e("./processer/palyback"),
		l = e("./processer/ptz"),
		d = e("./processer/heartbeat"),
		p = e("../base-connection"),
		h = e("./processer/config"),
		f = (r = o.EventEmitter, i.__extends(g, r), Object.defineProperty(g.prototype, "url", {
			get: function() {
				return this._url
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "connection", {
			get: function() {
				return this._connection
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "streaming", {
			get: function() {
				return this._streaming
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "playback", {
			get: function() {
				return this._playback
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "ptz", {
			get: function() {
				return this._ptz
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "configs", {
			get: function() {
				return this._configs
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "connected", {
			get: function() {
				return this._connection.connected
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "isAuth", {
			get: function() {
				return this._connection.isAuth
			},
			enumerable: !1,
			configurable: !0
		}), g.prototype.open = function() {
			this._connection.open()
		},
		g.prototype.close = function() {
			this._heartbeat.close(),
			this._connection.close()
		},
		g.prototype.destroy = function() {
			this.removeAllListeners()
		},
		g);
		function g(e) {
			var t = r.call(this) || this;
			return t.onauth = null,
			t.onclose = null,
			t._onauth = function(e) {
				"function" == typeof t.onauth && t.onauth(e),
				t.emit(p.ConnectionEvents.AUTH, e)
			},
			t._onopen = function() {
				t.emit(p.ConnectionEvents.OPEN)
			},
			t._onclose = function(e) {
				null != t.onclose && t.onclose(e),
				t.emit(p.ConnectionEvents.CLOSE, e)
			},
			t._url = "string" == typeof e ? new s.YDUrl(e) : e,
			t._connection = new a.YDConnection(t._url),
			t._connection.onauth = t._onauth,
			t._connection.on(p.ConnectionEvents.OPEN, t._onopen),
			t._connection.on(p.ConnectionEvents.CLOSE, t._onclose),
			t._heartbeat = new d.YDHeartbeatProcesser(t._connection),
			t._streaming = new c.YDStreamingProcesser(t._connection),
			t._playback = new u.YDPlaybackProcesser(t._connection),
			t._ptz = new l.YDPTZProcesser(t._connection),
			t._configs = new h.YDConfigProcesser(t._connection),
			t
		}
		n.YDClient = f
	},
	{
		"../base-connection": 52,
		"./connection": 58,
		"./processer/config": 61,
		"./processer/heartbeat": 62,
		"./processer/palyback": 63,
		"./processer/ptz": 64,
		"./processer/streaming": 65,
		"./url": 66,
		events: 45,
		tslib: 49
	}],
	58 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDConnection = void 0;
		var i, r = e("tslib"),
		o = e("../../utils/encoding"),
		a = e("./message"),
		s = e("../transport"),
		c = e("../websocket"),
		u = e("events"),
		l = e("../../utils/error"),
		d = e("../../utils/cyclebuffer"),
		p = e("../base-connection"),
		h = e("../../utils/log"),
		f = e("../../utils/xml"),
		g = function() {},
		y = function() {},
		v = 1,
		A = (i = u.EventEmitter, r.__extends(m, i), Object.defineProperty(m.prototype, "connected", {
			get: function() {
				return this._isConnected
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "pending", {
			get: function() {
				return this._pending
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "url", {
			get: function() {
				return this._url
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "sn", {
			get: function() {
				return this._sn
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "channel", {
			get: function() {
				return this._channel
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "isAuth", {
			get: function() {
				return this._isAuth
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(m.prototype, "session", {
			get: function() {
				return this._session
			},
			enumerable: !1,
			configurable: !0
		}), m.prototype.initTransport = function(e) {
			e.onmessage = this._onConnectionData,
			e.on(s.TransportEvents.OPEN, this._onConnectionOpen),
			e.on(s.TransportEvents.ERROR, this._onConnectionError),
			e.on(s.TransportEvents.CLOSE, this._onConnectionClose)
		},
		m.prototype.uninitTransport = function(e) {
			e.onmessage = null,
			e.removeListener(s.TransportEvents.OPEN, this._onConnectionOpen),
			e.removeListener(s.TransportEvents.ERROR, this._onConnectionError),
			e.removeListener(s.TransportEvents.CLOSE, this._onConnectionClose)
		},
		m.prototype._open = function() {
			this._transport.open()
		},
		m.prototype._close = function() {
			if (this._isConnected && this._isAuth) {
				var e = new a.YDMessageV2(this._session);
				e.setHead(a.YDMessageCmd.CLOSE_CONNECTION);
				try {
					this._transport.send(e.buffer)
				} catch(e) {
					h.Log.warn(this.LOG_TAG, "close connection error: " + e)
				}
			}
			this._transport.close(),
			this._isAuth = !1,
			this._isConnected = !1
		},
		m.prototype._sendMsg = function(e) {
			if (!this._isConnected) throw new Error("channel is not connected or auth.");
			if (!this._isAuth && e.cmd != a.YDMessageCmd.AUTHENTICATE) throw new Error("pu is not auth.");
			switch (this._enterPending(e.cmd), e.cmd) {
			case a.YDMessageCmd.KEEP_ALIVE:
				break;
			default:
				h.Log.debug(this.LOG_TAG, "[" + this._id + "] send message, cmd=" + a.YDMessageCmd[e.cmd] + ",\t error=" + a.YDMessageError[e.error] + ",\t payloadLength=" + e.payloadLength + ", payload=" + e.payloadString)
			}
			this._transport.send(e.buffer)
		},
		m.prototype._readHead = function(e) {
			var t = this._buffer;
			if (t.length >= e.headSize) {
				var n = t.pop(e.headSize);
				return e.parseHead(n)
			}
			return ! 1
		},
		m.prototype._readPayload = function(e) {
			var t = e.payloadLength;
			if (t <= 0) throw "msgLen must >0.";
			var n = this._buffer;
			if (n.length >= t) {
				var r = n.pop(t);
				return e.setPayload(r),
				!0
			}
			return ! 1
		},
		m.prototype._readMessage = function() {
			for (var e = this._isAuth ? this._recvBufMsg: this._recvAuthMsg, t = this._buffer; this._continuous || t.length >= e.headSize;) {
				if (!this._continuous) {
					if (e.reset(), !this._readHead(e)) break;
					0 < e.payloadLength ? this._continuous = !0 : this._processMessage(e)
				}
				if (this._continuous) {
					if (!this._readPayload(e)) break;
					this._continuous = !1,
					this._processMessage(e)
				}
				e = this._isAuth ? this._recvBufMsg: this._recvAuthMsg
			}
		},
		m.prototype._auth = function() {
			var e = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Authentication>' + this._authToken + "</Authentication>\n    <Time>" + this._authTs + "</Time>\n    <Type>2</Type>\n    <Sn>" + this._sn + "</Sn>\n    <Ver>2.0</Ver>\n</Message>",
			t = new a.YDMessageV1;
			t.setHead(a.YDMessageCmd.AUTHENTICATE, a.YDMessageError.NONE),
			t.setPayload(o.Encoding.getUTF8Bytes(e)),
			this._transport.send(t.buffer)
		},
		m.prototype.parseAuthResponse = function(e) {
			var t = e.payloadString,
			n = (new DOMParser).parseFromString(t, "text/xml"),
			r = new g;
			r.username = f.XMLUtils.readTextByTagName(n, "UserName"),
			r.usertype = f.XMLUtils.readNumberByTagName(n, "UserType"),
			r.version = f.XMLUtils.readTextByTagName(n, "Ver");
			var i = n.getElementsByTagName("redirect");
			if (i && 0 < i.length) {
				var o = i[0];
				r.redirect = new y,
				r.redirect.address = f.XMLUtils.readTextByTagName(o, "addr"),
				r.redirect.port = f.XMLUtils.readNumberByTagName(o, "port"),
				r.redirect.addr_local = f.XMLUtils.readTextByTagName(o, "addr_local"),
				r.redirect.port_local = f.XMLUtils.readNumberByTagName(o, "port_local"),
				r.redirect.auth_name = f.XMLUtils.readTextByTagName(o, "auth_name"),
				r.redirect.auth_pass = f.XMLUtils.readTextByTagName(o, "auth_pass"),
				r.redirect.retry = f.XMLUtils.readNumberByTagName(o, "retry")
			}
			return r
		},
		m.prototype._processAuth = function(e) {
			var t = !1;
			if (e.cmd == a.YDMessageCmd.AUTHENTICATE && e.error == a.YDMessageError.NONE && (t = !0), t) {
				var n = this.parseAuthResponse(e).redirect;
				if (n && n.address && n.port) return void this._doRedirect(n.address, n.port)
			}
			if (this._isAuth = t, null != this.onauth) {
				var r = void 0;
				t || (r = e.error == a.YDMessageError.DEVICE_NOT_EXISTS || e.error == a.YDMessageError.DEVICE_OFFLINE ? "设备不在线": "连接或认证失败"),
				this.onauth({
					auth: this._isAuth,
					message: r,
					error: e.error
				})
			}
			this.emit(p.ConnectionEvents.AUTH, this._isAuth)
		},
		m.prototype._processMessage = function(e) {
			if (e.cmd == a.YDMessageCmd.AUTHENTICATE) this._processAuth(e);
			else switch (this._exitPending(e.cmd), e.cmd) {
			case a.YDMessageCmd.VIDEO_DATA:
			case a.YDMessageCmd.PLAYBACK_DATA:
			case a.YDMessageCmd.AUDIO_DATA:
			case a.YDMessageCmd.TALK_DATA:
			case a.YDMessageCmd.KEEP_ALIVE:
				break;
			default:
				h.Log.debug(this.LOG_TAG, "[" + this._id + "] recv message, cmd=" + a.YDMessageCmd[e.cmd] + ",\t error=" + a.YDMessageError[e.error] + ",\t payloadLength=" + e.payloadLength + ", payload=" + e.payloadString)
			}
			this.emit(p.ConnectionEvents.MESSAGE, e)
		},
		m.prototype._doRedirect = function(e, t) {
			var n = new URL(this._url.toString().replace("wss-yd:", "wss:").replace("ws-yd:", "ws:")),
			r = n.protocol,
			i = r + "//" + e + ":" + ("wss:" === r ? t + 4 : t + 3) + n.pathname + n.search + n.hash;
			this.uninitTransport(this._transport),
			this._transport.close();
			var o = new c.WebSocketTransport(i);
			this.initTransport(o),
			this._transport = o,
			this._transport.open()
		},
		m.prototype._enterPending = function(e) {
			if (! (e = a.YDMessageCmd.KEEP_ALIVE)) {
				if (this._pending) throw new Error("[" + this._id + "] connection action is pending.");
				this._pendingCmd = e,
				this._pending = !0
			}
		},
		m.prototype._exitPending = function(e) {
			this._pending && this._pendingCmd == e && (this._pending = !1, this._pendingCmd = a.YDMessageCmd.UNKOWN)
		},
		m.prototype.send = function(e) {
			return this._sendMsg(e),
			this
		},
		m.prototype.sendMessage = function(e, t) {
			var n = new a.YDMessageV2(this.session);
			return n.setHead(e),
			null != t && n.setPayload(t),
			this._sendMsg(n),
			this
		},
		m.prototype.open = function() {
			if (this._isConnected) throw new Error("connection is opened.");
			this._open()
		},
		m.prototype.close = function() {
			this._close()
		},
		m);
		function m(e) {
			var n = i.call(this) || this;
			if (n.LOG_TAG = "[YDConnection] > ", n._continuous = !1, n._pending = !1, n._pendingCmd = a.YDMessageCmd.UNKOWN, n._isAuth = !1, n._isConnected = !1, n.onauth = null, n.onerror = null, n._onConnectionOpen = function(e) {
				n._isConnected = !0,
				n.emit(p.ConnectionEvents.OPEN),
				n._auth()
			},
			n._onConnectionError = function(e) {
				var t = !1;
				if (null != n.onerror && (n.onerror(e), t = !0), n.emit(p.ConnectionEvents.ERROR, e) && (t = !0), !t) throw e.error
			},
			n._onConnectionClose = function(e) {
				n._isConnected = !1,
				n._isAuth = !1,
				n._pending = !1,
				h.Log.debug(n.LOG_TAG, "[" + n._id + "] connection is closed."),
				n.emit(p.ConnectionEvents.CLOSE, e)
			},
			n._onConnectionData = function(e) {
				n._buffer.push(new Uint8Array(e)),
				n._readMessage()
			},
			n._id = v++, n._url = e, n._sn = e.sn, n._channel = e.channel, n._authToken = e.auth.token, n._authTs = e.auth.timestamp, "ws:" != e.protocol && "wss:" != e.protocol && "ws-yd:" != e.protocol && "wss-yd:" != e.protocol) throw new Error("protocol is not supported.");
			if (null == n._sn || n._sn.length < 1) throw new l.ArgumentNullError("sn is null or empty.");
			if (null == n._authToken || n._authToken.length < 1) throw new l.ArgumentNullError("authToken is null or empty.");
			if (null == n._authTs || n._authTs.length < 1) throw new l.ArgumentNullError("authTs is null or empty.");
			n._session = new a.YDSession(1e4 * Math.random()),
			n._recvAuthMsg = new a.YDMessageV1,
			n._recvBufMsg = new a.YDMessageV2(n._session),
			n._buffer = new d.CycleBuffer(4194304);
			var t = e.toString();
			0 === t.indexOf("ws-yd:") && (t = t.replace("ws-yd:", "ws:")),
			0 === t.indexOf("wss-yd:") && (t = t.replace("wss-yd:", "wss:"));
			var r = new c.WebSocketTransport(t);
			return n.initTransport(r),
			n._transport = r,
			n
		}
		n.YDConnection = A
	},
	{
		"../../utils/cyclebuffer": 105,
		"../../utils/encoding": 107,
		"../../utils/error": 108,
		"../../utils/log": 109,
		"../../utils/xml": 111,
		"../base-connection": 52,
		"../transport": 54,
		"../websocket": 55,
		"./message": 60,
		events: 45,
		tslib: 49
	}],
	59 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDMessageEvents = void 0,
		n.YDMessageEvents = {
			VIDEO_OPEN: "VIDEO_OPEN",
			VIDEO_CLOSE: "VIDEO_CLOSE",
			AUDIO_OPEN: "AUDIO_OPEN",
			AUDIO_CLOSE: "AUDIO_CLOSE",
			TALK_OPEN: "TALK_OPEN",
			TALK_CLOSE: "TALK_CLOSE",
			DATA: "DATA",
			PLAYBACK_OPEN: "PLAYBACK_OPEN",
			PLAYBACK_CLOSE: "PLAYBACK_CLOSE",
			PLAYBACK_END: "PLAYBACK_END",
			PLAYBACK_PAUSE: "PLAYBACK_PAUSE",
			PLAYBACK_RESUME: "PLAYBACK_RESUME",
			PLAYBACK_CHANGE: "PLAYBACK_CHANGE",
			QUERY_VIDEO: "QUERY_VIDEO",
			PTZ_ACTION: "PTZ_ACTION",
			PTZ_3DLocate: "PTZ_3DLocate",
			GET_CONFIG: "GET_CONFIG"
		}
	},
	{}],
	60 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDMessageV2 = n.YDMessageV1 = n.YDSession = n.YDMessageHeadV2 = n.YDMessageHeadV1 = n.YDMessageError = n.YDMessageCmd = void 0;
		var r, i, o, a = e("../../utils/encoding"),
		s = e("../protocol"); (r = n.YDMessageCmd || (n.YDMessageCmd = {}))[r.UNKOWN = 0] = "UNKOWN",
		r[r.KEEP_ALIVE = 2561] = "KEEP_ALIVE",
		r[r.AUTHENTICATE = 1549] = "AUTHENTICATE",
		r[r.CLOSE_CONNECTION = 1551] = "CLOSE_CONNECTION",
		r[r.VIDEO_REQ = 257] = "VIDEO_REQ",
		r[r.VIDEO_DATA = 258] = "VIDEO_DATA",
		r[r.VIDEO_CLOSE = 259] = "VIDEO_CLOSE",
		r[r.FORCEIFRAME = 260] = "FORCEIFRAME",
		r[r.AUDIO_REQ = 513] = "AUDIO_REQ",
		r[r.AUDIO_DATA = 514] = "AUDIO_DATA",
		r[r.AUDIO_CLOSE = 515] = "AUDIO_CLOSE",
		r[r.TALK_REQ = 769] = "TALK_REQ",
		r[r.TALK_DATA = 770] = "TALK_DATA",
		r[r.TALK_CLOSE = 771] = "TALK_CLOSE",
		r[r.MOVE_PTZ = 1025] = "MOVE_PTZ",
		r[r.PTZ_3DLocate = 1026] = "PTZ_3DLocate",
		r[r.SET_PARAM = 1281] = "SET_PARAM",
		r[r.GET_PARAM = 1282] = "GET_PARAM",
		r[r.SET_PARAM_NORAML = 1283] = "SET_PARAM_NORAML",
		r[r.GET_PARAM_NORAML = 1284] = "GET_PARAM_NORAML",
		r[r.PARAM_CHANGE_REQ = 1285] = "PARAM_CHANGE_REQ",
		r[r.PARAM_CHANGE = 1286] = "PARAM_CHANGE",
		r[r.PLAYBACK_QUERY_VIDEO = 1793] = "PLAYBACK_QUERY_VIDEO",
		r[r.PLAYBACK_VIDEO_REQ = 1794] = "PLAYBACK_VIDEO_REQ",
		r[r.PLAYBACK_DATA = 1795] = "PLAYBACK_DATA",
		r[r.PLAYBACK_VIDEO_END = 1796] = "PLAYBACK_VIDEO_END",
		r[r.PLAYBACK_VIDEO_STOP = 1797] = "PLAYBACK_VIDEO_STOP",
		r[r.PLAYBACK_FILE_DEL = 1798] = "PLAYBACK_FILE_DEL",
		r[r.PLAYBACK_FILE_PAUSE = 1799] = "PLAYBACK_FILE_PAUSE",
		r[r.PLAYBACK_FILE_RESUME = 1800] = "PLAYBACK_FILE_RESUME",
		r[r.PLAYBACK_FILE_STEP = 1801] = "PLAYBACK_FILE_STEP",
		r[r.PLAYBACK_SPEED = 1808] = "PLAYBACK_SPEED",
		r[r.PLAYBACK_SEEK = 1809] = "PLAYBACK_SEEK",
		(o = i = n.YDMessageError || (n.YDMessageError = {}))[o.NONE = 0] = "NONE",
		o[o.UNDEF = 1] = "UNDEF",
		o[o.BUSY = 2] = "BUSY",
		o[o.BAD_PARAM = 3] = "BAD_PARAM",
		o[o.BAD_FORMAT = 4] = "BAD_FORMAT",
		o[o.INTERNAL = 5] = "INTERNAL",
		o[o.UNREG_CMD = 6] = "UNREG_CMD",
		o[o.MAX_CONNECTION = 7] = "MAX_CONNECTION",
		o[o.NOT_LOGIN = 8] = "NOT_LOGIN",
		o[o.BAD_USER = 9] = "BAD_USER",
		o[o.UNSUPPORT = 10] = "UNSUPPORT",
		o[o.DISK_NOT_EXIST = 11] = "DISK_NOT_EXIST",
		o[o.DISK_FULL = 12] = "DISK_FULL",
		o[o.CHANNEL_USED = 13] = "CHANNEL_USED",
		o[o.CHANNEL_CLOSED = 14] = "CHANNEL_CLOSED",
		o[o.CHANNEL_ERR = 15] = "CHANNEL_ERR",
		o[o.LENGTH_LIMIT = 16] = "LENGTH_LIMIT",
		o[o.CMD_MODE_ERR = 17] = "CMD_MODE_ERR",
		o[o.SESSION = 18] = "SESSION",
		o[o.STREAMTYPE_NOTSUPPORTED = 24] = "STREAMTYPE_NOTSUPPORTED",
		o[o.DEVICE_NOT_EXISTS = 521] = "DEVICE_NOT_EXISTS",
		o[o.DEVICE_OFFLINE = 522] = "DEVICE_OFFLINE";
		var c = function(e, t, n) {
			this.cmd = e,
			this.payloadLength = t,
			this.error = n
		};
		n.YDMessageHeadV1 = c;
		var u = function(e, t, n, r) {
			this.cmd = e,
			this.payloadLength = t,
			this.error = n,
			this.session = r
		};
		n.YDMessageHeadV2 = u;
		function l(e) {
			this.id = e
		}
		function d(e) {
			for (var t = e.byteLength,
			n = t - 1; 0 < n && 0 === e[n]; n--);
			return t != n + 1 ? e.subarray(0, n + 1) : e
		}
		n.YDSession = l;
		var p = (Object.defineProperty(h.prototype, "headSize", {
			get: function() {
				return this._headSize
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "cmd", {
			get: function() {
				return this._head.cmd
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "payloadLength", {
			get: function() {
				return this._head.payloadLength
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "error", {
			get: function() {
				return this._head.error
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "buffer", {
			get: function() {
				return this._buffer.subarray(0, this._headSize + this._head.payloadLength)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "payload", {
			get: function() {
				return this._buffer.subarray(this._headSize, this._headSize + this._head.payloadLength)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(h.prototype, "payloadString", {
			get: function() {
				return this._payloadString || (this._payloadString = a.Encoding.getUTF8String(d(this.payload))),
				this._payloadString
			},
			enumerable: !1,
			configurable: !0
		}), h.prototype._ensureBufferSize = function(e) {
			if (e > this._buffer.length - this._headSize) {
				var t = Math.max(e + this._headSize, 2 * this._buffer.length),
				n = new Uint8Array(t);
				n.set(this._buffer),
				this._buffer = n
			}
		},
		h.prototype._updateBuffer = function() {
			s.Network.htonl(this._buffer, 0, this._head.cmd),
			s.Network.htonl(this._buffer, 4, this._head.payloadLength),
			s.Network.htonl(this._buffer, 8, this._head.error),
			this._payloadString = void 0
		},
		h.prototype.setHead = function(e, t) {
			return this._head.cmd = e,
			this._head.error = null == t ? i.NONE: t,
			this._updateBuffer(),
			this
		},
		h.prototype.setPayload = function(e) {
			var t = "string" == typeof e ? a.Encoding.getUTF8Bytes(e) : e;
			return this._ensureBufferSize(t.length),
			this._buffer.set(t, this._headSize),
			this._head.payloadLength = t.length,
			this._updateBuffer(),
			this
		},
		h.prototype.parseHead = function(e) {
			return ! (e.byteLength < this._headSize || (this._head.cmd = y(e), this._head.payloadLength = s.Network.ntohl(e, 4), this._head.error = s.Network.ntohl(e, 8), this._payloadString = void 0))
		},
		h.prototype.reset = function() {
			return this._head.cmd = 0,
			this._head.payloadLength = 0,
			this._head.error = 0,
			this._updateBuffer(),
			this
		},
		h);
		function h() {
			this._headSize = 12,
			this._buffer = new Uint8Array(1024),
			this._head = new c(0, 0, 0)
		}
		n.YDMessageV1 = p;
		var f = (Object.defineProperty(g.prototype, "headSize", {
			get: function() {
				return this._headSize
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "cmd", {
			get: function() {
				return this._head.cmd
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "payloadLength", {
			get: function() {
				return this._head.payloadLength
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "error", {
			get: function() {
				return this._head.error
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "sessionId", {
			get: function() {
				return this._head.session
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "buffer", {
			get: function() {
				return this._buffer.subarray(0, this._headSize + this._head.payloadLength)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "payload", {
			get: function() {
				return this._buffer.subarray(this._headSize, this._headSize + this._head.payloadLength)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(g.prototype, "payloadString", {
			get: function() {
				return this._payloadString || (this._payloadString = a.Encoding.getUTF8String(d(this.payload))),
				this._payloadString
			},
			enumerable: !1,
			configurable: !0
		}), g.prototype._ensureBufferSize = function(e) {
			if (e > this._buffer.length - this._headSize) {
				var t = Math.max(e + this._headSize, 2 * this._buffer.length),
				n = new Uint8Array(t);
				n.set(this._buffer),
				this._buffer = n
			}
		},
		g.prototype._updateBuffer = function() {
			s.Network.htonl(this._buffer, 0, this._head.cmd),
			s.Network.htonl(this._buffer, 4, this._head.payloadLength),
			s.Network.htonl(this._buffer, 8, this._head.error),
			s.Network.htonl(this._buffer, 12, this._head.session),
			this._payloadString = void 0
		},
		g.prototype.setHead = function(e, t) {
			return this._head.cmd = e,
			this._head.error = null == t ? i.NONE: t,
			this._updateBuffer(),
			this
		},
		g.prototype.setPayload = function(e) {
			var t = "string" == typeof e ? a.Encoding.getUTF8Bytes(e) : e;
			return this._ensureBufferSize(t.length),
			this._buffer.set(t, this._headSize),
			this._head.payloadLength = t.length,
			this._updateBuffer(),
			this
		},
		g.prototype.parseHead = function(e) {
			return ! (e.byteLength < this._headSize || (this._head.cmd = y(e), this._head.payloadLength = s.Network.ntohl(e, 4), this._head.error = s.Network.ntohl(e, 8), this._head.session = s.Network.ntohl(e, 12), this._payloadString = void 0))
		},
		g.prototype.reset = function() {
			return this._head.cmd = 0,
			this._head.payloadLength = 0,
			this._head.error = 0,
			this._updateBuffer(),
			this
		},
		g);
		function g(e) {
			this._headSize = 16,
			this._buffer = new Uint8Array(2048);
			var t = e.id;
			this._head = new u(0, 0, 0, t)
		}
		function y(e) {
			if (e.length < 4) throw new RangeError("too few buffers.");
			return 65535 & s.Network.ntohl(e, 0)
		}
		n.YDMessageV2 = f
	},
	{
		"../../utils/encoding": 107,
		"../protocol": 53
	}],
	61 : [function(e, t, s) {
		"use strict";
		Object.defineProperty(s, "__esModule", {
			value: !0
		}),
		s.YDConfigProcesser = s.ConfigEvents = void 0;
		var n = e("tslib"),
		r = e("events"),
		c = e("../message"),
		i = e("../../base-connection"),
		o = e("../../../utils/error"),
		u = e("../events"),
		d = e("../../../utils/number"),
		l = e("../../../utils/log"),
		a = e("../../../utils/xml2json");
		s.ConfigEvents = {
			GET_CONFIG: "CONFIGEVENTS_GET_CONFIG"
		};
		var p, h = (p = r.EventEmitter, n.__extends(f, p), f.prototype._getConfig = function(e) {
			if (null == this._connection) throw new o.ArgumentNullError;
			if ("devbase" === e) {
				var t = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n  <Target Name="DevBase" />\n</Message>';
				this._connection.sendMessage(c.YDMessageCmd.GET_PARAM, t)
			} else "imageconfig" === e ? (t = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n  <Target Name="ImageConfig" />\n</Message>', this._connection.sendMessage(c.YDMessageCmd.GET_PARAM, t)) : (t = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n  <Target Name="' + e + '" />\n  <Channel>' + this._channel + "</Channel>\n  <param></param>\n</Message>", this._connection.sendMessage(c.YDMessageCmd.GET_PARAM_NORAML, t))
		},
		f.prototype.parseDevBaseConfig = function(e) {
			return a.xml2json(e)
		},
		f.prototype.parseImageConfig = function(e) {
			return a.xml2json(e)
		},
		f.prototype.parseGeneralConfig = function(e) {
			var t, n = {},
			r = null === (t = e.children[0]) || void 0 === t ? void 0 : t.children;
			if (null != r && 0 < r.length) for (var i = 0; i < r.length; i++) {
				var o = r[i];
				if ("p" === o.nodeName) {
					var a = o.attributes;
					if (null != a && 0 < a.length) for (var s = 0; s < a.length; s++) {
						var c = a[s];
						c.name && (n[c.name] = c.value)
					}
				} else if ("Channel" === o.tagName) {
					var u = o.textContent;
					if (u) {
						var l = d.NumberUtils.parseInt(u.replace(/\"/g, ""));
						n.channel = l
					}
				} else "Target" === o.tagName && (n.target = o.getAttribute("Name"))
			}
			return n
		},
		f.prototype.getConfig = function(e) {
			return this._getConfig(e)
		},
		f);
		function f(e) {
			var a = p.call(this) || this;
			return a.LOG_TAG = "[YDConfigProcesser] > ",
			a._messageParser = {},
			a._channel = 0,
			a._connection = null,
			a.ongetconfig = null,
			a._onConfigMessage = function(e) {
				if (e.error == c.YDMessageError.NONE) {
					var t = e.payloadString,
					n = (new DOMParser).parseFromString(t, "text/xml"),
					r = n.getElementsByTagName("Target"),
					i = null;
					null != r && 0 < r.length && (i = r[0].getAttribute("Name"));
					var o = {};
					"DevBase" === i ? o = a.parseDevBaseConfig(n) : "ImageConfig" === i ? o = a.parseImageConfig(n) : i && (o = a.parseGeneralConfig(n)).channel !== a._channel && l.Log.warn(a.LOG_TAG, "response channel is not equals request channl."),
					null != a.ongetconfig && a.ongetconfig(i, o),
					a.emit(s.ConfigEvents.GET_CONFIG, i, o)
				}
				a.emit(u.YDMessageEvents.GET_CONFIG, e.error)
			},
			a.onConnectionClose = function() {},
			a.onConnectionMessage = function(e) {
				var t = a._messageParser[e.cmd];
				t && t(e)
			},
			a._messageParser[c.YDMessageCmd.GET_PARAM_NORAML] = a._onConfigMessage,
			a._messageParser[c.YDMessageCmd.GET_PARAM] = a._onConfigMessage,
			a._channel = e.channel,
			a._connection = e,
			a._connection.on(i.ConnectionEvents.CLOSE, a.onConnectionClose),
			a._connection.on(i.ConnectionEvents.MESSAGE, a.onConnectionMessage),
			a
		}
		s.YDConfigProcesser = h
	},
	{
		"../../../utils/error": 108,
		"../../../utils/log": 109,
		"../../../utils/number": 110,
		"../../../utils/xml2json": 112,
		"../../base-connection": 52,
		"../events": 59,
		"../message": 60,
		events: 45,
		tslib: 49
	}],
	62 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDHeartbeatProcesser = void 0;
		var r = e("../message"),
		i = e("../../base-connection"),
		o = e("../../../utils/log"),
		a = (s.prototype.close = function() {
			this._timer && (clearInterval(this._timer), this._timer = 0)
		},
		s.prototype.destory = function() {},
		s);
		function s(e, t) {
			var n = this;
			this.LOG_TAG = "[YDHeartbeatProcesser] > ",
			this._interval = 1e4,
			this._heartbeatMessage = null,
			this._pending = !1,
			this._onauth = function(e) {
				e && (n._heartbeatMessage = new r.YDMessageV2(n._connection.session), n._heartbeatMessage.setHead(r.YDMessageCmd.KEEP_ALIVE), n._timer = setInterval(n._heartbeat, n._interval))
			},
			this._onclose = function() {
				n._timer && (clearInterval(n._timer), n._timer = 0)
			},
			this._heartbeat = function() {
				n._connection && n._connection.connected && n._heartbeatMessage && (n._pending && o.Log.warn(n.LOG_TAG, "heatbeat is pending..."), n._connection.send(n._heartbeatMessage), n._pending = !0)
			},
			this._onmessage = function(e) {
				e.cmd == r.YDMessageCmd.KEEP_ALIVE && (n._pending = !1)
			},
			null != t && (this._interval = t),
			this._connection = e,
			this._connection.on(i.ConnectionEvents.AUTH, this._onauth),
			this._connection.on(i.ConnectionEvents.CLOSE, this._onclose),
			this._connection.on(i.ConnectionEvents.MESSAGE, this._onmessage)
		}
		n.YDHeartbeatProcesser = a
	},
	{
		"../../../utils/log": 109,
		"../../base-connection": 52,
		"../message": 60
	}],
	63 : [function(e, t, p) {
		"use strict";
		Object.defineProperty(p, "__esModule", {
			value: !0
		}),
		p.YDPlaybackProcesser = p.PlaybackEvents = void 0;
		var n = e("tslib"),
		r = e("events"),
		h = e("../message"),
		i = e("../../base-connection"),
		s = e("../avformat"),
		o = e("../../../utils/error"),
		f = e("../events"),
		g = e("../../../utils/number"),
		a = e("../../../utils/date"),
		y = e("../../../utils/log");
		p.PlaybackEvents = {
			QUERY_RECORDS: "QUERY_RECORDS"
		};
		var c, u = (c = r.EventEmitter, n.__extends(l, c), l.prototype.sendMessage = function(e, t) {
			if (null == this._connection) throw new o.ArgumentNullError;
			this._connection.sendMessage(e, t)
		},
		l.prototype._parseRecordInfo = function(e) {
			if (null == e) return null;
			var t = e.getAttribute("FileName");
			if (null == t) return null;
			var n = a.DateUtils.parseDate(e.getAttribute("StartTime")),
			r = a.DateUtils.parseDate(e.getAttribute("EndTime")),
			i = g.NumberUtils.parseInt(e.getAttribute("RecordType"));
			return new s.RecordInfo(t, n, r, i)
		},
		l.prototype._queryRecord = function(e, t, n) {
			void 0 === n && (n = s.RecordType.ALL);
			var r = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n    <RecordType>" + n + "</RecordType>\n    <StartTime>" + a.DateUtils.toDateTimeString(e) + "</StartTime>\n    <EndTime>" + a.DateUtils.toDateTimeString(t) + "</EndTime>\n</Message>";
			this._querying = !0,
			this.sendMessage(h.YDMessageCmd.PLAYBACK_QUERY_VIDEO, r)
		},
		l.prototype._openPlayblack = function(e, t, n, r) {
			void 0 === n && (n = s.PlaybackRequestFrameType.All),
			void 0 === r && (r = s.VideoEncoding.ALL);
			var i = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n    <FileName>" + e + "</FileName>\n    <PlayTime>" + Math.floor(t) + "</PlayTime>\n    <PlayMode>1</PlayMode>\n    <StartTime>0</StartTime>\n    <EndTime>0</EndTime>\n    <FrameType>" + n + "</FrameType>\n    <Encoding>" + r + "</Encoding>\n</Message>";
			this._playbackOpened = !0,
			this.sendMessage(h.YDMessageCmd.PLAYBACK_VIDEO_REQ, i)
		},
		l.prototype._closePlayback = function() {
			this.sendMessage(h.YDMessageCmd.PLAYBACK_VIDEO_STOP)
		},
		l.prototype._pausePlayback = function() {
			this.sendMessage(h.YDMessageCmd.PLAYBACK_FILE_PAUSE)
		},
		l.prototype._resumePlayback = function() {
			this.sendMessage(h.YDMessageCmd.PLAYBACK_FILE_RESUME)
		},
		l.prototype._changePlayback = function(e) {
			var t = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n    <PlaySpeed>" + e + "</PlaySpeed>\n</Message>";
			this.sendMessage(h.YDMessageCmd.PLAYBACK_SPEED, t)
		},
		l.prototype.query = function(e, t, n) {
			if (void 0 === n && (n = s.RecordType.ALL), this._querying) throw new Error("record query is executing.");
			this._queryRecord(e, t, n)
		},
		l.prototype.open = function(e, t) {
			if (this._playbackOpened) throw new Error("playback is opened.");
			this._openPlayblack(e, t)
		},
		l.prototype.close = function() {
			if (!this._playbackOpened) throw new Error("playback is not opened.");
			this._closePlayback()
		},
		l.prototype.pause = function() {
			if (!this._playbackOpened) throw new Error("playback is not opened.");
			this._pausePlayback()
		},
		l.prototype.resume = function() {
			if (!this._playbackOpened) throw new Error("playback is not opened.");
			this._resumePlayback()
		},
		l.prototype.change = function(e) {
			if (!this._playbackOpened) throw new Error("playback is not opened.");
			this._changePlayback(e)
		},
		l);
		function l(e) {
			var d = c.call(this) || this;
			return d.LOG_TAG = "[YDPlaybackProcesser] > ",
			d._messageParser = {},
			d._querying = !1,
			d._playbackOpened = !1,
			d._playbackPause = !1,
			d._channel = 0,
			d._connection = null,
			d.onquery = null,
			d.onplayback = null,
			d.onplaybackend = null,
			d.onplaybackclose = null,
			d.ondata = null,
			d._onQueryRecord = function(e) {
				if (e.error == h.YDMessageError.NONE) {
					var t = e.payloadString,
					n = (new DOMParser).parseFromString(t, "text/xml"),
					r = n.getElementsByTagName("Channel");
					if (null != r && 0 < r.length) g.NumberUtils.parseInt(r[0].textContent) != d._channel && y.Log.warn(d.LOG_TAG, "response channel is not equals request channl.");
					var i = 0,
					o = n.getElementsByTagName("TotalCount");
					o && 0 < o.length && (i = g.NumberUtils.parseInt(o[0].textContent));
					var a = [],
					s = n.getElementsByTagName("Message");
					if (null != s && 0 < s.length) for (var c = s[0].children, u = 0; u < c.length; u++) {
						var l = d._parseRecordInfo(c[u]);
						null != l && a.push(l)
					}
					if (i != a.length) throw new Error("total count is not equal record elements count.");
					null != d.onquery && d.onquery(a),
					d.emit(p.PlaybackEvents.QUERY_RECORDS, a)
				}
				d.emit(f.YDMessageEvents.QUERY_VIDEO, e.error),
				d._querying = !1
			},
			d._onPlaybackOpen = function(e) {
				if (e.error == h.YDMessageError.NONE) {
					var t = e.payloadString,
					n = (new DOMParser).parseFromString(t, "text/xml"),
					r = new s.PlaybackDescription,
					i = n.getElementsByTagName("Audio");
					i && 0 < i.length && (r.audio.format = g.NumberUtils.parseInt(i[0].getAttribute("Format")), r.audio.channel = g.NumberUtils.parseInt(i[0].getAttribute("Channel")), r.audio.sample = g.NumberUtils.parseInt(i[0].getAttribute("Sample")));
					var o = n.getElementsByTagName("Video");
					o && 0 < o.length && (r.video.format = g.NumberUtils.parseInt(o[0].getAttribute("Format")), r.video.fps = g.NumberUtils.parseInt(o[0].getAttribute("Fps")), r.video.weight = g.NumberUtils.parseInt(o[0].getAttribute("Weight")), r.video.height = g.NumberUtils.parseInt(o[0].getAttribute("Height")));
					var a = n.getElementsByTagName("ContinuousTime");
					a && 0 < a.length && (r.continuousTime = g.NumberUtils.parseInt(a[0].textContent)),
					d._playbackOpened = !0,
					null != d.onplayback && d.onplayback(r)
				} else d._playbackOpened = !1;
				d.emit(f.YDMessageEvents.PLAYBACK_OPEN, e.error)
			},
			d._onPlaybackClose = function(e) {
				e.error == h.YDMessageError.NONE && (d._playbackOpened = !1),
				null != d.onplaybackclose && d.onplaybackclose(e.error),
				d.emit(f.YDMessageEvents.PLAYBACK_CLOSE, e.error)
			},
			d._onDataMessage = function(e) {
				if (e.error == h.YDMessageError.NONE) {
					var t = e.payload,
					n = new s.YDAVPacket(t);
					null != d.ondata && d.ondata(n),
					d.emit(f.YDMessageEvents.DATA, n)
				}
			},
			d._onPlaybackEnd = function(e) {
				e.error == h.YDMessageError.NONE && (d._playbackOpened = !1),
				null != d.onplaybackend && d.onplaybackend(),
				d.emit(f.YDMessageEvents.PLAYBACK_END, e.error)
			},
			d._onPlaybackPause = function(e) {
				e.error == h.YDMessageError.NONE && (d._playbackPause = !0),
				d.emit(f.YDMessageEvents.PLAYBACK_PAUSE, e.error)
			},
			d._onPlaybackResume = function(e) {
				e.error == h.YDMessageError.NONE && (d._playbackPause = !1),
				d.emit(f.YDMessageEvents.PLAYBACK_RESUME, e.error)
			},
			d._onPlaybackChange = function(e) {
				d.emit(f.YDMessageEvents.PLAYBACK_CHANGE, e.error)
			},
			d._onConnectionClose = function() {
				d._playbackOpened = !1
			},
			d._onConnectionMessage = function(e) {
				var t = d._messageParser[e.cmd];
				t && t(e)
			},
			d._messageParser[h.YDMessageCmd.PLAYBACK_QUERY_VIDEO] = d._onQueryRecord,
			d._messageParser[h.YDMessageCmd.PLAYBACK_VIDEO_REQ] = d._onPlaybackOpen,
			d._messageParser[h.YDMessageCmd.PLAYBACK_VIDEO_STOP] = d._onPlaybackClose,
			d._messageParser[h.YDMessageCmd.PLAYBACK_DATA] = d._onDataMessage,
			d._messageParser[h.YDMessageCmd.PLAYBACK_VIDEO_END] = d._onPlaybackEnd,
			d._messageParser[h.YDMessageCmd.PLAYBACK_FILE_PAUSE] = d._onPlaybackPause,
			d._messageParser[h.YDMessageCmd.PLAYBACK_FILE_RESUME] = d._onPlaybackResume,
			d._messageParser[h.YDMessageCmd.PLAYBACK_SPEED] = d._onPlaybackChange,
			d._channel = e.channel,
			d._connection = e,
			d._connection.on(i.ConnectionEvents.CLOSE, d._onConnectionClose),
			d._connection.on(i.ConnectionEvents.MESSAGE, d._onConnectionMessage),
			d
		}
		p.YDPlaybackProcesser = u
	},
	{
		"../../../utils/date": 106,
		"../../../utils/error": 108,
		"../../../utils/log": 109,
		"../../../utils/number": 110,
		"../../base-connection": 52,
		"../avformat": 56,
		"../events": 59,
		"../message": 60,
		events: 45,
		tslib: 49
	}],
	64 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDPTZProcesser = void 0;
		var r, i = e("tslib"),
		o = e("events"),
		s = e("../message"),
		a = e("../../base-connection"),
		c = e("../../../utils/error"),
		u = e("../events"),
		l = (r = o.EventEmitter, i.__extends(d, r), d.prototype._controlPtz = function(e, t, n) {
			if (void 0 === t && (t = 5), void 0 === n && (n = ""), null == this._connection) throw new c.ArgumentNullError;
			var r = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n    <Dir>" + e + "</Dir>\n    <Speed>" + t + "</Speed>\n    <Name>" + n + "</Name>\n</Message>";
			this._connection.sendMessage(s.YDMessageCmd.MOVE_PTZ, r)
		},
		d.prototype.control = function(e, t, n) {
			void 0 === t && (t = 5),
			void 0 === n && (n = ""),
			this._controlPtz(e, t, n)
		},
		d.prototype.locate3D = function(e, t) {
			if (null == this._connection) throw new c.ArgumentNullError;
			var n = t.x,
			r = t.y,
			i = t.width,
			o = t.height,
			a = "<?xml version=”1.0” encoding=”utf-8” ?>\n<Message>\n  <Channel>" + this._channel + "</Channel>\n  <Operate>" + e + "</Operate>\n  <PositionW>" + n.toFixed(4) + "</PositionW>\n  <PositionH>" + r.toFixed(4) + "</PositionH>\n  <Width>" + i.toFixed(4) + "</Width>\n  <Height>" + o.toFixed(4) + "</Height>\n</Message>";
			this._connection.sendMessage(s.YDMessageCmd.PTZ_3DLocate, a)
		},
		d);
		function d(e) {
			var n = r.call(this) || this;
			return n._messageParser = {},
			n._channel = 0,
			n._connection = null,
			n._onPtzControl = function(e) {
				n.emit(u.YDMessageEvents.PTZ_ACTION, e.error)
			},
			n._onConnectionClose = function() {},
			n._onConnectionMessage = function(e) {
				var t = n._messageParser[e.cmd];
				t && t(e)
			},
			n._onLocate3D = function(e) {
				n.emit(u.YDMessageEvents.PTZ_3DLocate, e.error)
			},
			n._messageParser[s.YDMessageCmd.MOVE_PTZ] = n._onPtzControl,
			n._messageParser[s.YDMessageCmd.PTZ_3DLocate] = n._onLocate3D,
			n._channel = e.channel,
			n._connection = e,
			n._connection.on(a.ConnectionEvents.CLOSE, n._onConnectionClose),
			n._connection.on(a.ConnectionEvents.MESSAGE, n._onConnectionMessage),
			n
		}
		n.YDPTZProcesser = l
	},
	{
		"../../../utils/error": 108,
		"../../base-connection": 52,
		"../events": 59,
		"../message": 60,
		events: 45,
		tslib: 49
	}],
	65 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDStreamingProcesser = void 0;
		var r, i = e("tslib"),
		c = e("../message"),
		o = e("../avformat"),
		a = e("../../base-connection"),
		s = e("../../../utils/error"),
		u = e("events"),
		l = e("../events"),
		d = e("../../../utils/log"),
		p = (r = u.EventEmitter, i.__extends(h, r), h.prototype.parseInt = function(e) {
			return null == e ? 0 : parseInt(e)
		},
		h.prototype.sendMessage = function(e, t) {
			if (null == this._connection) throw new s.ArgumentNullError;
			this._connection.sendMessage(e, t)
		},
		h.prototype._openVideo = function(e, t, n) {
			if (void 0 === t && (t = 1), void 0 === n && (n = o.VideoEncoding.ALL), null == this._connection) throw new s.ArgumentNullError;
			this._streamType = e,
			this._videoType = t,
			this._encoding = n;
			var r = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n    <StreamType>" + e + "</StreamType>\n    <VideoType>" + t + "</VideoType>\n    <Encoding>" + n + "</Encoding>\n</Message>";
			this.sendMessage(c.YDMessageCmd.VIDEO_REQ, r)
		},
		h.prototype._closeVideo = function() {
			this.sendMessage(c.YDMessageCmd.VIDEO_CLOSE)
		},
		h.prototype._openAudio = function() {
			var e = '<?xml version="1.0" encoding="utf-8" ?>\n<Message>\n    <Channel>' + this._channel + "</Channel>\n</Message>";
			this.sendMessage(c.YDMessageCmd.AUDIO_REQ, e)
		},
		h.prototype._closeAudio = function() {
			this.sendMessage(c.YDMessageCmd.AUDIO_CLOSE)
		},
		h.prototype._isDataMessage = function(e) {
			switch (e.cmd) {
			case c.YDMessageCmd.VIDEO_DATA:
			case c.YDMessageCmd.AUDIO_DATA:
				return ! 0;
			default:
				return ! 1
			}
		},
		h.prototype.openVideo = function(e) {
			if (void 0 === e && (e = 0), this._videoOpened) throw new Error("video is already opened.");
			this._openVideo(e)
		},
		h.prototype.closeVideo = function() {
			if (!this._videoOpened) throw new Error("video is not opened.");
			this._closeVideo()
		},
		h.prototype.openAudio = function() {
			if (this._audioOpened) throw new Error("audio is alread opened.");
			this._openAudio()
		},
		h.prototype.closeAudio = function() {
			if (!this._videoOpened) throw new Error("audio is not opened.");
			this._closeAudio()
		},
		h);
		function h(e) {
			var s = r.call(this) || this;
			return s._messageParser = {},
			s._videoOpened = !1,
			s._audioOpened = !1,
			s._channel = 0,
			s._streamType = 0,
			s._videoType = 0,
			s._encoding = 0,
			s.onvideoopen = null,
			s.onaudioopen = null,
			s.ondata = null,
			s._onVideoOpen = function(e) {
				if (e.error == c.YDMessageError.NONE) {
					var t = e.payloadString,
					n = (new DOMParser).parseFromString(t, "text/xml"),
					r = n.getElementsByTagName("Channel");
					if (null != r && 0 < r.length) {
						var i = s.parseInt(r[0].textContent);
						if (i != s._channel) throw new Error("response channel is not equals request channl.");
						s._videoDescription.channel = i
					}
					var o = n.getElementsByTagName("Video");
					if (o && 0 < o.length) {
						var a = o[0];
						s._videoDescription.fps = s.parseInt(a.getAttribute("Fps")),
						s._videoDescription.encoding = s.parseInt(a.getAttribute("Encoding")),
						s._videoDescription.imageWidth = s.parseInt(a.getAttribute("ImageWidth")),
						s._videoDescription.imageHeight = s.parseInt(a.getAttribute("ImageHeight")),
						s._videoDescription.gopSize = s.parseInt(a.getAttribute("GopSize"))
					}
					s._videoOpened = !0,
					s.emit(l.YDMessageEvents.VIDEO_OPEN, e.error, s._videoDescription),
					null != s.onvideoopen && s.onvideoopen(s._videoDescription)
				} else s._videoOpened = !1,
				s.emit(l.YDMessageEvents.VIDEO_OPEN, e.error, void 0)
			},
			s._onVideoClose = function(e) {
				e.error == c.YDMessageError.NONE && (s._videoOpened = !1),
				s.emit(l.YDMessageEvents.VIDEO_CLOSE, e.error)
			},
			s._onAudioOpen = function(e) {
				if (e.error == c.YDMessageError.NONE) {
					var t = e.payloadString,
					n = (new DOMParser).parseFromString(t, "text/xml"),
					r = n.getElementsByTagName("Channel");
					if (null != r && 0 < r.length) {
						var i = s.parseInt(r[0].textContent);
						i != s._channel && d.Log.warn("audio response channel is not equals request channl."),
						s._audioDescription.channel = i
					}
					var o = n.getElementsByTagName("Audio");
					if (o && 0 < o.length) {
						var a = o[0];
						s._audioDescription.type = s.parseInt(a.getAttribute("Type")),
						s._audioDescription.sample = s.parseInt(a.getAttribute("Sample")),
						s._audioDescription.audioChannel = s.parseInt(a.getAttribute("AudioChannel"))
					}
					s._audioOpened = !0,
					null != s.onaudioopen && s.onaudioopen(s._audioDescription)
				} else s._audioOpened = !1;
				s.emit(l.YDMessageEvents.AUDIO_OPEN, e.error)
			},
			s._onAudioClose = function(e) {
				e.error == c.YDMessageError.NONE && (s._audioOpened = !1),
				s.emit(l.YDMessageEvents.AUDIO_CLOSE, e.error)
			},
			s._onDataMessage = function(e) {
				if (s._isDataMessage(e) && e.error == c.YDMessageError.NONE) {
					var t = e.payload,
					n = new o.YDAVPacket(t);
					null != s.ondata && s.ondata(n),
					s.emit(l.YDMessageEvents.DATA, n)
				}
			},
			s._onConnectionClose = function() {
				s._videoOpened = !1,
				s._audioOpened = !1
			},
			s._onConnectionMessage = function(e) {
				var t = s._messageParser[e.cmd];
				t && t(e)
			},
			s._videoDescription = new o.VideoDescription,
			s._audioDescription = new o.AudioDescription,
			s._messageParser[c.YDMessageCmd.VIDEO_REQ] = s._onVideoOpen,
			s._messageParser[c.YDMessageCmd.VIDEO_CLOSE] = s._onVideoClose,
			s._messageParser[c.YDMessageCmd.AUDIO_REQ] = s._onAudioOpen,
			s._messageParser[c.YDMessageCmd.AUDIO_CLOSE] = s._onAudioClose,
			s._messageParser[c.YDMessageCmd.VIDEO_DATA] = s._onDataMessage,
			s._messageParser[c.YDMessageCmd.AUDIO_DATA] = s._onDataMessage,
			s._channel = e.channel,
			s._connection = e,
			s._connection.on(a.ConnectionEvents.CLOSE, s._onConnectionClose),
			s._connection.on(a.ConnectionEvents.MESSAGE, s._onConnectionMessage),
			s
		}
		n.YDStreamingProcesser = p
	},
	{
		"../../../utils/error": 108,
		"../../../utils/log": 109,
		"../../base-connection": 52,
		"../avformat": 56,
		"../events": 59,
		"../message": 60,
		events: 45,
		tslib: 49
	}],
	66 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDUrl = void 0;
		var s = e("../../utils/error"),
		r = (Object.defineProperty(i.prototype, "originalString", {
			get: function() {
				return this._originalString
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "search", {
			get: function() {
				return this._url.search
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "searchParams", {
			get: function() {
				return this._url.searchParams
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "hash", {
			get: function() {
				return this._url.hash
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "protocol", {
			get: function() {
				return this._url.protocol
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "hostname", {
			get: function() {
				return this._url.hostname
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "host", {
			get: function() {
				return this._url.host
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "port", {
			get: function() {
				return this._url.port
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "pathname", {
			get: function() {
				return this._url.pathname
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "username", {
			get: function() {
				return this._url.username
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "password", {
			get: function() {
				return this._url.password
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "sn", {
			get: function() {
				return this._sn
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "channel", {
			get: function() {
				return this._channel
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(i.prototype, "auth", {
			get: function() {
				return this._auth
			},
			enumerable: !1,
			configurable: !0
		}), i.prototype.toString = function() {
			return this._url.href
		},
		i);
		function i(e, t) {
			if (this._auth = {
				token: "",
				timestamp: ""
			},
			null == e || e.length < 1) throw new s.ArgumentNullError("url is null or empty");
			this._originalString = e,
			this._url = t ? new URL(e, t) : new URL(e);
			var n = this._url.searchParams,
			r = n.get("sn"),
			i = n.get("chn") || n.get("channel"),
			o = this.username || n.get("auth_token"),
			a = this.password || n.get("auth_ts");
			if (null == r || r.length < 1) throw new s.ArgumentNullError("sn is null or empty.");
			if (null == o || o.length < 1) throw new s.ArgumentNullError("authToken is null or empty.");
			if (null == a || a.length < 1) throw new s.ArgumentNullError("authTs is null or empty.");
			this._sn = r,
			this._channel = i ? parseInt(i) : 0,
			this._auth.token = o,
			this._auth.timestamp = a
		}
		n.YDUrl = r
	},
	{
		"../../utils/error": 108
	}],
	67 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.ExpGolomb = void 0;
		var r = (Object.defineProperty(i.prototype, "bitsAvailable", {
			get: function() {
				return this.bitLength - this.index
			},
			enumerable: !1,
			configurable: !0
		}), i.prototype.skipBits = function(e) {
			if (this.bitsAvailable < e) return ! 1;
			this.index += e
		},
		i.prototype.readBits = function(e, t) {
			return void 0 === t && (t = !0),
			this.getBits(e, this.index, t)
		},
		i.prototype.getBits = function(e, t, n) {
			if (void 0 === n && (n = !0), this.bitsAvailable < e) return 0;
			var r = t % 8,
			i = this.data[t / 8 | 0] & 255 >>> r,
			o = 8 - r;
			if (e <= o) return n && (this.index += e),
			i >> o - e;
			n && (this.index += o);
			var a = e - o;
			return i << a | this.getBits(a, t + o, n)
		},
		i.prototype.skipLZ = function() {
			var e;
			for (e = 0; e < this.bitLength - this.index; ++e) if (0 !== this.getBits(1, this.index + e, !1)) return this.index += e,
			e;
			return e
		},
		i.prototype.skipUEG = function() {
			this.skipBits(1 + this.skipLZ())
		},
		i.prototype.skipEG = function() {
			this.skipBits(1 + this.skipLZ())
		},
		i.prototype.readUEG = function() {
			var e = this.skipLZ();
			return this.readBits(e + 1) - 1
		},
		i.prototype.readEG = function() {
			var e = this.readUEG();
			return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
		},
		i.prototype.readBoolean = function() {
			return 1 === this.readBits(1)
		},
		i.prototype.readUByte = function(e) {
			return void 0 === e && (e = 1),
			this.readBits(8 * e)
		},
		i.prototype.readUShort = function() {
			return this.readBits(16)
		},
		i.prototype.readUInt = function() {
			return this.readBits(32)
		},
		i);
		function i(e) {
			this.data = e,
			this.index = 0,
			this.bitLength = 8 * e.byteLength
		}
		n.ExpGolomb = r
	},
	{}],
	68 : [function(e, t, n) {
		"use strict";
		var o = [ - 5504, -5248, -6016, -5760, -4480, -4224, -4992, -4736, -7552, -7296, -8064, -7808, -6528, -6272, -7040, -6784, -2752, -2624, -3008, -2880, -2240, -2112, -2496, -2368, -3776, -3648, -4032, -3904, -3264, -3136, -3520, -3392, -22016, -20992, -24064, -23040, -17920, -16896, -19968, -18944, -30208, -29184, -32256, -31232, -26112, -25088, -28160, -27136, -11008, -10496, -12032, -11520, -8960, -8448, -9984, -9472, -15104, -14592, -16128, -15616, -13056, -12544, -14080, -13568, -344, -328, -376, -360, -280, -264, -312, -296, -472, -456, -504, -488, -408, -392, -440, -424, -88, -72, -120, -104, -24, -8, -56, -40, -216, -200, -248, -232, -152, -136, -184, -168, -1376, -1312, -1504, -1440, -1120, -1056, -1248, -1184, -1888, -1824, -2016, -1952, -1632, -1568, -1760, -1696, -688, -656, -752, -720, -560, -528, -624, -592, -944, -912, -1008, -976, -816, -784, -880, -848, 5504, 5248, 6016, 5760, 4480, 4224, 4992, 4736, 7552, 7296, 8064, 7808, 6528, 6272, 7040, 6784, 2752, 2624, 3008, 2880, 2240, 2112, 2496, 2368, 3776, 3648, 4032, 3904, 3264, 3136, 3520, 3392, 22016, 20992, 24064, 23040, 17920, 16896, 19968, 18944, 30208, 29184, 32256, 31232, 26112, 25088, 28160, 27136, 11008, 10496, 12032, 11520, 8960, 8448, 9984, 9472, 15104, 14592, 16128, 15616, 13056, 12544, 14080, 13568, 344, 328, 376, 360, 280, 264, 312, 296, 472, 456, 504, 488, 408, 392, 440, 424, 88, 72, 120, 104, 24, 8, 56, 40, 216, 200, 248, 232, 152, 136, 184, 168, 1376, 1312, 1504, 1440, 1120, 1056, 1248, 1184, 1888, 1824, 2016, 1952, 1632, 1568, 1760, 1696, 688, 656, 752, 720, 560, 528, 624, 592, 944, 912, 1008, 976, 816, 784, 880, 848],
		a = [ - 32124, -31100, -30076, -29052, -28028, -27004, -25980, -24956, -23932, -22908, -21884, -20860, -19836, -18812, -17788, -16764, -15996, -15484, -14972, -14460, -13948, -13436, -12924, -12412, -11900, -11388, -10876, -10364, -9852, -9340, -8828, -8316, -7932, -7676, -7420, -7164, -6908, -6652, -6396, -6140, -5884, -5628, -5372, -5116, -4860, -4604, -4348, -4092, -3900, -3772, -3644, -3516, -3388, -3260, -3132, -3004, -2876, -2748, -2620, -2492, -2364, -2236, -2108, -1980, -1884, -1820, -1756, -1692, -1628, -1564, -1500, -1436, -1372, -1308, -1244, -1180, -1116, -1052, -988, -924, -876, -844, -812, -780, -748, -716, -684, -652, -620, -588, -556, -524, -492, -460, -428, -396, -372, -356, -340, -324, -308, -292, -276, -260, -244, -228, -212, -196, -180, -164, -148, -132, -120, -112, -104, -96, -88, -80, -72, -64, -56, -48, -40, -32, -24, -16, -8, 0, 32124, 31100, 30076, 29052, 28028, 27004, 25980, 24956, 23932, 22908, 21884, 20860, 19836, 18812, 17788, 16764, 15996, 15484, 14972, 14460, 13948, 13436, 12924, 12412, 11900, 11388, 10876, 10364, 9852, 9340, 8828, 8316, 7932, 7676, 7420, 7164, 6908, 6652, 6396, 6140, 5884, 5628, 5372, 5116, 4860, 4604, 4348, 4092, 3900, 3772, 3644, 3516, 3388, 3260, 3132, 3004, 2876, 2748, 2620, 2492, 2364, 2236, 2108, 1980, 1884, 1820, 1756, 1692, 1628, 1564, 1500, 1436, 1372, 1308, 1244, 1180, 1116, 1052, 988, 924, 876, 844, 812, 780, 748, 716, 684, 652, 620, 588, 556, 524, 492, 460, 428, 396, 372, 356, 340, 324, 308, 292, 276, 260, 244, 228, 212, 196, 180, 164, 148, 132, 120, 112, 104, 96, 88, 80, 72, 64, 56, 48, 40, 32, 24, 16, 8, 0];
		t.exports = {
			decodeAlaw: function(e) {
				for (var t = new Uint8Array(2 * e.length), n = 0, r = 0; n < e.length;) {
					var i = o[e[n]];
					if (void 0 === i) throw new Error("can not decode g711 alaw data!");
					t[r] = 255 & i,
					t[r + 1] = i >> 8,
					n += 1,
					r += 2
				}
				return t
			},
			decodeUlaw: function(e) {
				for (var t = new Uint8Array(2 * e.length), n = 0, r = 0; n < e.length;) {
					var i = a[e[n]];
					if (void 0 === i) throw new Error("can not decode g711 ulaw data!");
					t[r] = 255 & i,
					t[r + 1] = i >> 8,
					n += 1,
					r += 2
				}
				return t
			}
		}
	},
	{}],
	69 : [function(e, t, n) {
		"use strict";
		"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
			value: function(e, t) {
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				for (var n = Object(e), r = 1; r < arguments.length; r++) {
					var i = arguments[r];
					if (null != i) for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
				}
				return n
			},
			writable: !0,
			configurable: !0
		})
	},
	{}],
	70 : [function(e, t, n) {
		"use strict";
		function r(e) {
			this.init(e)
		}
		r.prototype.init = function(e) {
			this.option = Object.assign({},
			{
				encoding: "16bitInt",
				channels: 1,
				sampleRate: 8e3,
				flushingTime: 1e3,
				volume: 1,
				muted: !0
			},
			e),
			this._muted = this.option.muted,
			this._volume = this.option.volume,
			this.samples = new Float32Array,
			this.flush = this.flush.bind(this),
			this.interval = setInterval(this.flush, this.option.flushingTime),
			this.maxValue = this.getMaxValue(),
			this.typedArrayType = this.getTypedArray(),
			this.createContext()
		},
		r.prototype.getMaxValue = function() {
			var e = {
				"8bitInt": 128,
				"16bitInt": 32768,
				"32bitInt": 2147483648,
				"32bitFloat": 1
			};
			return e[this.option.encoding] ? e[this.option.encoding] : e["16bitInt"]
		},
		r.prototype.getTypedArray = function() {
			var e = {
				"8bitInt": Int8Array,
				"16bitInt": Int16Array,
				"32bitInt": Int32Array,
				"32bitFloat": Float32Array
			};
			return e[this.option.encoding] ? e[this.option.encoding] : e["16bitInt"]
		},
		r.prototype.toTypedArray = function(e) {
			switch (this.option.encoding) {
			case "8bitInt":
				return new Int8Array(e);
			default:
			case "16bitInt":
				return new Int16Array(e);
			case "32bitInt":
				return new Int32Array(e);
			case "32bitFloat":
				return new Float32Array(e)
			}
		},
		r.prototype.createContext = function() {
			this.audioCtx = new(window.AudioContext || window.webkitAudioContext),
			this.gainNode = this.audioCtx.createGain(),
			this.gainNode.connect(this.audioCtx.destination),
			this.startTime = this.audioCtx.currentTime,
			this.updateGainValue()
		},
		r.prototype.updateGainValue = function() {
			this.gainNode.gain.value = this._muted ? 0 : this._volume
		},
		r.prototype.isTypedArray = function(e) {
			return e.byteLength && e.buffer && e.buffer.constructor == ArrayBuffer
		},
		r.prototype.feed = function(e) {
			if (this.isTypedArray(e)) if (e = this.toFloatValues(e), 0 < this.samples.length) {
				var t = new Float32Array(this.samples.length + e.length);
				t.set(this.samples, 0),
				t.set(e, this.samples.length),
				this.samples = t
			} else this.samples = e
		},
		r.prototype.toFloatValues = function(e) {
			for (var t = this.toTypedArray(e.buffer), n = this.maxValue, r = new Float32Array(t.length), i = 0, o = t.length; i < o; i++) r[i] = t[i] / n;
			return r
		},
		r.prototype.getVolume = function() {
			return this._volume
		},
		r.prototype.setVolume = function(e) {
			this._volume = e,
			this.updateGainValue()
		},
		r.prototype.getMuted = function() {
			return this._muted
		},
		r.prototype.setMuted = function(e) {
			this._muted = e,
			this.updateGainValue()
		},
		r.prototype.destroy = function() {
			this.interval && clearInterval(this.interval),
			this.samples = null,
			this.audioCtx.close(),
			this.audioCtx = null
		},
		r.prototype.flush = function() {
			if (this.samples.length) {
				var e, t, n, r, i = this.audioCtx.createBufferSource(),
				o = this.samples.length / this.option.channels,
				a = this.audioCtx.createBuffer(this.option.channels, o, this.option.sampleRate);
				if (1 === this.option.channels)(e = a.getChannelData(0)).set(this.samples);
				else for (t = 0; t < this.option.channels; t++) for (e = a.getChannelData(t), n = t, 50, r = 0; r < o; r++) e[r] = this.samples[n],
				n += this.option.channels;
				this.startTime < this.audioCtx.currentTime && (this.startTime = this.audioCtx.currentTime),
				i.buffer = a,
				i.connect(this.gainNode),
				i.start(this.startTime),
				this.startTime += a.duration,
				this.samples = new Float32Array
			}
		},
		t.exports = {
			PCMPlayer: r
		}
	},
	{}],
	71 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = function() {
			return (r = Object.assign ||
			function(e) {
				for (var t, n = 1,
				r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
				return e
			}).apply(this, arguments)
		},
		i = {
			lines: 12,
			length: 7,
			width: 34,
			radius: 10,
			scale: 1,
			corners: 1,
			color: "#1890FF",
			fadeColor: "transparent",
			animation: "spinner-line-fade-default",
			rotate: 0,
			direction: 1,
			speed: 1,
			zIndex: 2e9,
			className: "spinner",
			top: "1px",
			left: "1px",
			bottom: "1px",
			right: "1px",
			shadow: "0 0 1px transparent",
			position: "absolute",
			title: "正在努力加载",
			img: "./Spinner.png"
		},
		o = (a.prototype.spin = function(e) {
			return this.stop(),
			this.el = document.createElement("div"),
			this.el.className = this.opts.className,
			this.el.setAttribute("role", "progressbar"),
			s(this.el, {
				position: this.opts.position,
				display: "flex",
				zIndex: "100",
				left: this.opts.left,
				top: this.opts.top,
				bottom: this.opts.bottom,
				right: this.opts.right,
				backgroundColor: "black"
			}),
			e && e.insertBefore(this.el, e.firstChild || null),
			function(e, t) {
				Math.round(t.corners * t.width * 500),
				!0 === t.shadow || "string" == typeof t.shadow && t.shadow;
				var n = s(document.createElement("div"), {
					width: "100%",
					height: "100px",
					display: "flex",
					margin: "auto",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center"
				}),
				r = s(document.createElement("div"), {
					border: "5px solid #3B3B3B",
					borderRadius: "100%",
					borderTop: "5px solid #1890FF",
					width: "40px",
					height: "40px",
					animation: "spin 1s linear infinite"
				}),
				i = s(document.createElement("p"), {
					color: "rgba(255,255,255,1)",
					width: "90px",
					margin: "auto",
					fontSize: "14px",
					fontFamily: "Microsoft YaHei",
					fontWeight: "400"
				});
				i.innerText = t.title,
				n.appendChild(r),
				n.appendChild(i),
				e.appendChild(n)
			} (this.el, this.opts),
			this
		},
		a.prototype.stop = function() {
			return this.el && ("undefined" != typeof requestAnimationFrame ? cancelAnimationFrame(this.animateId) : clearTimeout(this.animateId), this.el.parentNode && this.el.parentNode.removeChild(this.el), this.el = void 0),
			this
		},
		a);
		function a(e) {
			void 0 === e && (e = {}),
			this.opts = r({},
			i, e)
		}
		function s(e, t) {
			for (var n in t) e.style[n] = t[n];
			return e
		}
		n.Spinner = o,
		n.
	default = o
	},
	{}],
	72 : [function(e, t, n) {
		"use strict";
		function d(e) {
			this.gl = e,
			this.texture = e.createTexture(),
			e.bindTexture(e.TEXTURE_2D, this.texture),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
			e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
		}
		function r(e, t) {
			this.options = Object.assign({},
			{
				alpha: !1,
				antialias: !1,
				powerPreference: "default",
				preserveDrawingBuffer: !1
			},
			t),
			this.canvas = e,
			this.gl = e.getContext("webgl", this.options),
			this.gl || e.getContext("experimental-webgl", this.options),
			this.gl ? this.initGL(this.options) : console.error("[WebGLRenderer] [Error] initGL failed due to WebGL not supported.")
		}
		d.prototype.bind = function(e, t, n) {
			var r = this.gl;
			r.activeTexture([r.TEXTURE0, r.TEXTURE1, r.TEXTURE2][e]),
			r.bindTexture(r.TEXTURE_2D, this.texture),
			r.uniform1i(r.getUniformLocation(t, n), e)
		},
		d.prototype.fill = function(e, t, n) {
			var r = this.gl;
			r.bindTexture(r.TEXTURE_2D, this.texture),
			r.texImage2D(r.TEXTURE_2D, 0, r.LUMINANCE, e, t, 0, r.LUMINANCE, r.UNSIGNED_BYTE, n)
		},
		r.prototype.initGL = function(e) {
			if (this.gl) {
				var t = this.gl;
				t.pixelStorei(t.UNPACK_ALIGNMENT, 1);
				var n = t.createProgram(),
				r = ["attribute highp vec4 aVertexPosition;", "attribute vec2 aTextureCoord;", "varying highp vec2 vTextureCoord;", "void main(void) {", " gl_Position = aVertexPosition;", " vTextureCoord = aTextureCoord;", "}"].join("\n"),
				i = t.createShader(t.VERTEX_SHADER);
				t.shaderSource(i, r),
				t.compileShader(i);
				var o = ["precision highp float;", "varying lowp vec2 vTextureCoord;", "uniform sampler2D YTexture;", "uniform sampler2D UTexture;", "uniform sampler2D VTexture;", "const mat4 YUV2RGB = mat4", "(", " 1.1643828125, 0, 1.59602734375, -.87078515625,", " 1.1643828125, -.39176171875, -.81296875, .52959375,", " 1.1643828125, 2.017234375, 0, -1.081390625,", " 0, 0, 0, 1", ");", "void main(void) {", " gl_FragColor = vec4( texture2D(YTexture, vTextureCoord).x, texture2D(UTexture, vTextureCoord).x, texture2D(VTexture, vTextureCoord).x, 1) * YUV2RGB;", "}"].join("\n"),
				a = t.createShader(t.FRAGMENT_SHADER);
				t.shaderSource(a, o),
				t.compileShader(a),
				t.attachShader(n, i),
				t.attachShader(n, a),
				t.linkProgram(n),
				t.useProgram(n),
				t.getProgramParameter(n, t.LINK_STATUS) || console.warn("[WebGLRenderer] shader link failed.");
				var s = t.getAttribLocation(n, "aVertexPosition");
				t.enableVertexAttribArray(s);
				var c = t.getAttribLocation(n, "aTextureCoord");
				t.enableVertexAttribArray(c);
				var u = t.createBuffer();
				t.bindBuffer(t.ARRAY_BUFFER, u),
				t.bufferData(t.ARRAY_BUFFER, new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0]), t.STATIC_DRAW),
				t.vertexAttribPointer(s, 3, t.FLOAT, !1, 0, 0);
				var l = t.createBuffer();
				t.bindBuffer(t.ARRAY_BUFFER, l),
				t.bufferData(t.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), t.STATIC_DRAW),
				t.vertexAttribPointer(c, 2, t.FLOAT, !1, 0, 0),
				t.y = new d(t),
				t.u = new d(t),
				t.v = new d(t),
				t.y.bind(0, n, "YTexture"),
				t.u.bind(1, n, "UTexture"),
				t.v.bind(2, n, "VTexture")
			} else console.warn("[WebGLRenderer] [Error] initGL failed due to WebGL not supported.")
		},
		r.prototype.renderFrame = function(e, t, n, r, i) {
			if (this.gl) {
				var o = this.gl;
				o.viewport(0, 0, o.canvas.width, o.canvas.height),
				o.clearColor(0, 0, 0, 0),
				o.clear(o.COLOR_BUFFER_BIT),
				o.y.fill(t, n, e.subarray(0, r)),
				o.u.fill(t >> 1, n >> 1, e.subarray(r, r + i)),
				o.v.fill(t >> 1, n >> 1, e.subarray(r + i, e.length)),
				o.drawArrays(o.TRIANGLE_STRIP, 0, 4)
			} else console.warn("[WebGLRenderer] gl context is not init..")
		},
		r.prototype.fullscreen = function() {
			var e = this.canvas;
			e.RequestFullScreen ? e.RequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : alert("This browser doesn't supporter fullscreen")
		},
		r.prototype.exitfullscreen = function() {
			document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : alert("Exit fullscreen doesn't work")
		},
		void 0 !== t && (t.exports = {
			WebGLRenderer: r
		})
	},
	{}],
	73 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlayContext = void 0;
		function r(e, t) {
			this.selected = !1,
			this.view = e,
			this.core = t
		}
		n.PlayContext = r
	},
	{}],
	74 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlayerBase = n.PlayerOptions = n.mimeTypeSupported = n.MediaSourceMimeType = n.FrameDuration = void 0;
		var r, i, o = e("tslib"),
		a = e("events"); (r = n.FrameDuration || (n.FrameDuration = {}))[r.PACKET = 1] = "PACKET",
		r[r.FPS = 2] = "FPS",
		(i = n.MediaSourceMimeType || (n.MediaSourceMimeType = {})).AAC = 'audio/mp4; codecs="mp4a.40.2"',
		i.H264 = 'video/mp4; codecs="avc1.42002a"',
		i.H265 = 'video/mp4; codecs="hev1.1.6.L93.B0"',
		n.mimeTypeSupported = function(e) {
			return ! (!window.MediaSource || !window.MediaSource.isTypeSupported(e))
		};
		function s() {}
		n.PlayerOptions = s;
		var c, u = (c = a.EventEmitter, o.__extends(l, c), l);
		function l() {
			var e = null !== c && c.apply(this, arguments) || this;
			return e.onPlaying = null,
			e
		}
		n.PlayerBase = u
	},
	{
		events: 45,
		tslib: 49
	}],
	75 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.YDPlayerCore = n.YDPlayerCoreOptions = n.QueryRecordState = n.PlayState = n.PlayMode = n.VideostreamThird = n.VideostreamSub = n.VideoStreamMain = void 0;
		var o, r, a, i, s, c, u = e("tslib"),
		l = e("./io/yd/client"),
		d = e("./io/yd/avformat"),
		p = e("./io/yd/processer/palyback"),
		f = e("./utils/date"),
		h = e("./io/yd/events"),
		g = e("./io/yd/message"),
		y = e("events"),
		v = e("./io/base-connection"),
		A = e("./core/yd-error"),
		m = e("./utils/log"),
		E = e("./io/yd/processer/config"),
		_ = e("./player-base"),
		b = e("./player-mse"),
		C = e("./player-wasm"),
		S = e("./utils/error");
		n.VideoStreamMain = 1,
		n.VideostreamSub = 2,
		n.VideostreamThird = 3,
		(r = o = n.PlayMode || (n.PlayMode = {}))[r.NONE = 0] = "NONE",
		r[r.STREAMING = 1] = "STREAMING",
		r[r.PLAYBACK = 2] = "PLAYBACK",
		(i = a = n.PlayState || (n.PlayState = {}))[i.STOP = 1] = "STOP",
		i[i.PLAYING = 2] = "PLAYING",
		i[i.PENDING_STOP = 3] = "PENDING_STOP",
		i[i.PENDING_PLAY = 4] = "PENDING_PLAY",
		(c = s = n.QueryRecordState || (n.QueryRecordState = {}))[c.STOP = 1] = "STOP",
		c[c.PENDING = 2] = "PENDING";
		var P = function() {};
		n.YDPlayerCoreOptions = P;
		var T, L = {
			objectFit: "fill",
			engines: ["mse", "wasm"]
		},
		I = (T = y.EventEmitter, u.__extends(w, T), Object.defineProperty(w.prototype, "url", {
			get: function() {
				return this.client.url
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "playState", {
			get: function() {
				return this._playState
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "playMode", {
			get: function() {
				return this._playMode
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "videoStreamIndex", {
			get: function() {
				return this._videoStreamIndex
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "queryRecord", {
			get: function() {
				return this.queryRecordState
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "muted", {
			get: function() {
				var e;
				return ! this._player || (null === (e = this._player) || void 0 === e ? void 0 : e.muted)
			},
			set: function(e) {
				this._player && (this._player.muted = e)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "volume", {
			get: function() {
				var e;
				return this._player ? null === (e = this._player) || void 0 === e ? void 0 : e.volume: 0
			},
			set: function(e) {
				this._player && (this._player.volume = e)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(w.prototype, "objectFit", {
			get: function() {
				var e;
				return this._player ? null === (e = this._player) || void 0 === e ? void 0 : e.objectFit: "fill"
			},
			set: function(e) {
				this._player && (this._player.objectFit = e)
			},
			enumerable: !1,
			configurable: !0
		}), w.isSupportedMSEH265 = function() {
			return _.mimeTypeSupported(_.MediaSourceMimeType.H265)
		},
		w.prototype.initPlayer = function(e) {
			var n = this,
			t = Object.assign({},
			this.options);
			switch (this._player = void 0, e) {
			case d.VideoEncoding.H265:
				this._videoMimeType = _.MediaSourceMimeType.H265;
				break;
			case d.VideoEncoding.H264:
				this._videoMimeType = _.MediaSourceMimeType.H264;
				break;
			default:
				throw new S.NotSupportedError("video encoding: " + e + " is not supported.")
			}
			e !== d.VideoEncoding.H265 || _.mimeTypeSupported(_.MediaSourceMimeType.H265) ? this.canUseEngine("mse") && (this._player = new b.MSEPlayer(this.containerElement, t)) : this.canUseEngine("wasm") && (this._player = new C.WasmPlayer(this.containerElement, t)),
			this._player ? (this.emit("playerCreated", this._player), this._player.on("videoError",
			function(e) {
				n.emit("videoError", e)
			}), this._player.on("videoPlaying",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				n.emit.apply(n, u.__spreadArray(["playing"], e))
			}), this._player.on("videoTimeUpdate",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				n.emit.apply(n, u.__spreadArray(["videoTimeUpdate"], e))
			})) : console.error("video encoding: " + e + " is not supported.")
		},
		w.prototype.canUseEngine = function(e) {
			var t;
			return this.options.engines && -1 < (null === (t = this.options.engines) || void 0 === t ? void 0 : t.indexOf(e))
		},
		w.prototype.changePlayState = function(e) {
			this._playState != e && (this._playState = e)
		},
		w.prototype.changePlayMode = function(e) {
			this._playMode = e
		},
		w.prototype.onClientDisconnected = function(e) {
			var t;
			this.emit("disconnected", e),
			null === (t = this._player) || void 0 === t || t.stop(),
			this.changePlayState(a.STOP),
			this.changePlayMode(o.NONE)
		},
		w.prototype.afterConnect = function() {
			var r = this;
			return new Promise(function(e, n) {
				if (r.client.connected) e();
				else {
					var t = function(e) {
						var t;
						t = e && "number" == typeof e.code ? "连接失败（code=" + e.code + "）": "连接失败",
						n(A.yderror(A.YDErrorCode.CONNECTION_ERROR, t, void 0, e))
					};
					r.client.connection.once(v.ConnectionEvents.CLOSE, t),
					r.client.connection.once(v.ConnectionEvents.OPEN,
					function() {
						r.client.connection.removeListener(v.ConnectionEvents.CLOSE, t),
						e()
					}),
					r.client.open()
				}
			})
		},
		w.prototype.afterAuth = function() {
			var i = this;
			return new Promise(function(n, r) {
				i.afterConnect().then(function() {
					if (i.client.isAuth) n();
					else {
						var t = function() {
							r(A.yderror(A.YDErrorCode.CONNECTION_CLOSED, "连接已断开"))
						};
						i.client.once(v.ConnectionEvents.AUTH,
						function(e) {
							e.auth ? (i.client.removeListener(v.ConnectionEvents.CLOSE, t), n()) : r(A.yderror(A.YDErrorCode.AUTH_ERROR, e.message || "认证失败", e.error))
						}),
						i.client.once(v.ConnectionEvents.CLOSE, t)
					}
				},
				r)
			})
		},
		w.prototype.openVideoStreaming = function(e) {
			var o = this,
			t = this;
			return new Promise(function(r, i) {
				t.client.streaming.once(h.YDMessageEvents.VIDEO_OPEN,
				function(e, t) {
					if (e) {
						var n = void 0;
						n = e === g.YDMessageError.STREAMTYPE_NOTSUPPORTED ? "开启视频失败，请求的码流不被支持": e === g.YDMessageError.DEVICE_NOT_EXISTS || e === g.YDMessageError.DEVICE_OFFLINE ? "开启视频失败，通道不存在或离线": e === g.YDMessageError.CHANNEL_ERR ? "开启视频失败，错误的通道号": "开启视频失败，错误码：" + e,
						i(A.yderror(A.YDErrorCode.MESSAGE_ERROR, n, void 0, e))
					} else t ? (t.encoding != d.VideoEncoding.H264 && t.encoding != d.VideoEncoding.H265 && i(A.yderror(A.YDErrorCode.ENCODING_NOT_SUPPORT, "不支持的编码格式: " + t.encoding)), t.encoding != d.VideoEncoding.H265 || _.mimeTypeSupported(_.MediaSourceMimeType.H265) || o.canUseEngine("wasm") || i(A.yderror(A.YDErrorCode.ENCODING_NOT_SUPPORT, "编码格式不支持")), r(t)) : i(A.yderror(A.YDErrorCode.UNKOWN_ERROR, "未知错误"))
				}),
				t.afterAuth().then(function() {
					t._videoStreamIndex = e,
					t.client.streaming.openVideo(e)
				},
				i)
			})
		},
		w.prototype.closeVideoStreaming = function() {
			var e = this;
			return new Promise(function(t, n) {
				e.client.streaming.once(h.YDMessageEvents.VIDEO_CLOSE,
				function(e) {
					e ? n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "关闭视频失败，错误码：" + e, void 0, e)) : t(!0)
				}),
				e.client.streaming.closeVideo(),
				e._videoStreamIndex = void 0
			})
		},
		w.prototype.openAudioStreaming = function() {
			var e = this;
			return new Promise(function(t, n) {
				e.client.streaming.once(h.YDMessageEvents.AUDIO_OPEN,
				function(e) {
					e ? n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "开启音频失败，错误码：" + e, void 0, e)) : t(!0)
				}),
				e.afterAuth().then(function() {
					e.client.streaming.openAudio()
				}).
				catch(n)
			})
		},
		w.prototype.closeAudioStreaming = function() {
			var e = this;
			return new Promise(function(t, n) {
				e.client.streaming.once(h.YDMessageEvents.AUDIO_CLOSE,
				function(e) {
					e ? n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "关闭音频失败，错误码：" + e, void 0, e)) : t(!0)
				}),
				e.client.streaming.closeAudio()
			})
		},
		w.prototype._onPlaybackStop = function() {
			var e;
			null === (e = this._player) || void 0 === e || e.stop()
		},
		w.prototype.openStreaming = function(n) {
			var r = this;
			return this.openStreamingPromise = new Promise(function(e, t) {
				r._playMode != o.NONE ? t(A.yderror(A.YDErrorCode.MEDIA_ERROR, "player mode is " + r._playMode)) : r._playState == a.STOP ? (r.changePlayState(a.PENDING_PLAY), r.changePlayMode(o.STREAMING), r.openVideoStreaming(n).then(function() {
					r.openAudioStreaming(),
					r.changePlayState(a.PLAYING),
					e(n)
				},
				t)) : t(A.yderror(A.YDErrorCode.ACTION_PENDING, "player state is " + r._playState))
			}),
			this.openStreamingPromise
		},
		w.prototype.closeStreaming = function() {
			var n = this;
			return new Promise(function(e, t) {
				n._playMode != o.STREAMING ? e(!0) : n._playState == a.PLAYING ? (n.changePlayState(a.PENDING_STOP), n.closeAudioStreaming().then(function() {
					n.closeVideoStreaming().then(function() {
						n.changePlayState(a.STOP),
						n.changePlayMode(o.NONE),
						e(!0)
					},
					t)
				},
				t)) : n._playState == a.PENDING_PLAY ? e(!0) : n._playState == a.STOP ? e(!0) : t(A.yderror(A.YDErrorCode.ACTION_PENDING, "player state is " + n._playState))
			})
		},
		w.prototype.queryRecords = function(e, r, i) {
			void 0 === i && (i = d.RecordType.ALL);
			var o = this;
			return new Promise(function(t, n) {
				o.queryRecordState == s.STOP ? (o.queryRecordState = s.PENDING, o.afterAuth().then(function() {
					o.client.playback.once(p.PlaybackEvents.QUERY_RECORDS,
					function(e) {
						o.queryRecordState = s.STOP,
						t(e.sort(function(e, t) {
							return e.startTime.getTime() - t.startTime.getTime()
						}))
					}),
					o.client.playback.once(h.YDMessageEvents.QUERY_VIDEO,
					function(e) {
						e && n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "查询录像失败，错误码：" + e, void 0, e))
					}),
					o.client.playback.query(e, r, i)
				},
				n)) : n(A.yderror(A.YDErrorCode.ACTION_PENDING, "操作正在进行中"))
			})
		},
		w.prototype.openPlaybackFile = function(e, r) {
			void 0 === r && (r = 0);
			var i = this;
			return new Promise(function(t, n) {
				i._playMode != o.NONE ? n(A.yderror(A.YDErrorCode.MEDIA_ERROR, "player mode is " + i._playMode)) : i._playState == a.STOP ? (i.changePlayMode(o.PLAYBACK), i.changePlayState(a.PENDING_PLAY), i.afterAuth().then(function() {
					i.client.playback.once(h.YDMessageEvents.PLAYBACK_OPEN,
					function(e) {
						e ? (i.changePlayState(a.STOP), n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "回放录像失败，错误码：" + e, void 0, e))) : (i.changePlayState(a.PLAYING), t(!0))
					}),
					i.client.playback.open(e, r)
				},
				n)) : i._playState == a.PLAYING ? n(A.yderror(A.YDErrorCode.ACTION_PENDING, "playback is playing")) : n(A.yderror(A.YDErrorCode.ACTION_PENDING, "操作正在进行中"))
			})
		},
		w.prototype.openPlayback = function(p) {
			var h = this;
			return this.openPlaybackPromise = new Promise(function(l, d) {
				h._playState == a.STOP ? h.queryRecords(f.DateUtils.addHours(p, -1), f.DateUtils.addHours(p, 2)).then(function(e) {
					for (var t = !1,
					n = !1,
					r = 0,
					i = void 0,
					o = 0,
					a = e; o < a.length; o++) {
						var s = a[o];
						if (n && Math.abs((s.startTime.getTime() - p.getTime()) / 1e3) < 15) {
							i = s.filename,
							t = !(r = 0);
							break
						}
						if (s.startTime <= p && p < s.endTime) {
							var c = (s.endTime.getTime() - s.startTime.getTime()) / 1e3,
							u = (s.endTime.getTime() - p.getTime()) / 1e3;
							if (r = (p.getTime() - s.startTime.getTime()) / 1e3, 5 < u) {
								i = s.filename,
								r = Math.max(0, Math.min(r, c - 15)),
								t = !0;
								break
							}
							n = !0
						}
					}
					t && i ? h.openPlaybackFile(i, r).then(l, d) : d(A.yderror(A.YDErrorCode.NONE, "没有符合条件的录像"))
				},
				d) : h._playState == a.PLAYING ? d(A.yderror(A.YDErrorCode.ACTION_PENDING, "playback is playing")) : d(A.yderror(A.YDErrorCode.ACTION_PENDING, "操作正在进行中"))
			}),
			this.openPlaybackPromise
		},
		w.prototype.changePlayback = function(e) {
			var r = this;
			return new Promise(function(t, n) {
				r._playMode != o.PLAYBACK ? n(A.yderror(A.YDErrorCode.MEDIA_ERROR, "player is not in playback mode")) : r._playState == a.PLAYING ? r.afterAuth().then(function() {
					r.client.playback.once(h.YDMessageEvents.PLAYBACK_CHANGE,
					function(e) {
						e ? n(A.yderror(A.YDErrorCode.MESSAGE_ERROR, "更改回放速度失败，错误码：" + e, void 0, e)) : t()
					}),
					r.client.playback.change(e)
				},
				n) : n(A.yderror(A.YDErrorCode.ACTION_PENDING, "state is " + r._playState))
			})
		},
		w.prototype.closePlayback = function() {
			var r = this;
			return new Promise(function(t, n) {
				r._playMode != o.PLAYBACK ? t(!0) : r._playState == a.PLAYING ? (r.changePlayState(a.PENDING_STOP), r.client.playback.once(h.YDMessageEvents.PLAYBACK_CLOSE,
				function(e) {
					e ? n(A.ydmessageerror("关闭回放失败，错误码：" + e, e)) : (r.changePlayState(a.STOP), r.changePlayMode(o.NONE), t(!0))
				}), r.client.playback.close()) : r._playState == a.PENDING_PLAY ? t(!0) : n(A.yderror(A.YDErrorCode.ACTION_PENDING, "state is " + r._playState))
			})
		},
		w.prototype.controlPtz = function(e, r, i) {
			void 0 === r && (r = 5),
			void 0 === i && (i = "");
			var o = this;
			return new Promise(function(t, n) {
				o.afterAuth().then(function() {
					o.client.ptz.once(h.YDMessageEvents.PTZ_ACTION,
					function(e) {
						e ? n(A.ydmessageerror("云台控制失败，错误码：" + e, e)) : t(!0)
					}),
					o.client.ptz.control(e, r, i)
				},
				n)
			})
		},
		w.prototype.locate3D = function(e, r) {
			var i = this;
			return new Promise(function(t, n) {
				i.afterAuth().then(function() {
					i.client.ptz.once(h.YDMessageEvents.PTZ_3DLocate,
					function(e) {
						e ? n(A.ydmessageerror("云台控制失败，错误码：" + e, e)) : t(!0)
					}),
					i.client.ptz.locate3D(e, r)
				},
				n)
			})
		},
		w.prototype.getConfig = function(e) {
			var r = this;
			return e && "devbase" === e.toLowerCase() && r._devbaseConfig ? Promise.resolve(r._devbaseConfig) : new Promise(function(n, t) {
				r.afterAuth().then(function() {
					r._getConfigPending && t(A.yderror(A.YDErrorCode.ACTION_PENDING, "操作正在进行中")),
					r.client.configs.once(E.ConfigEvents.GET_CONFIG,
					function(e, t) {
						e && "devbase" === e.toLowerCase() && (r._devbaseConfig = t),
						n(t)
					}),
					r.client.configs.once(h.YDMessageEvents.GET_CONFIG,
					function(e) {
						r._getConfigPending = !1,
						e && t(A.ydmessageerror("获取配置失败，错误码：" + e, e))
					}),
					r.client.configs.getConfig(e),
					r._getConfigPending = !0
				},
				t)
			})
		},
		w.prototype.isSupportPtz = function() {
			var r = this;
			return this.getConfig("devbase").then(function(e) {
				var t = r.url,
				n = "channel" + t.channel;
				return !! (e && t && e[n] && e[n].ptz && e[n].ptz.support)
			})
		},
		w.prototype.isSupportTalk = function() {
			var r = this;
			return this.getConfig("devbase").then(function(e) {
				var t = r.url,
				n = "channel" + t.channel;
				return !! (e && t && e[n] && e[n].talk && e[n].talk.support)
			})
		},
		w.prototype.isSupportThirdStream = function() {
			return this.getConfig("devbase").then(function(e) {
				return !! (e && e.thirdStream && e.thirdStream.support)
			})
		},
		w.prototype.requestFullscreen = function() {
			var e;
			return null === (e = this._player) || void 0 === e ? void 0 : e.requestFullscreen()
		},
		w.prototype.capture = function() {
			return this._player ? this._player.capture() : void 0
		},
		w.prototype.destroy = function(e) {
			return u.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return u.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return e.trys.push([0, 3, , 4]),
						[4, this.closeStreaming()];
					case 1:
						return e.sent(),
						[4, this.closePlayback()];
					case 2:
						return e.sent(),
						[3, 4];
					case 3:
						return t = e.sent(),
						m.Log.warn(this.LOG_TAG, "close player error: " + t),
						[3, 4];
					case 4:
						return this.client.close(),
						this._player && (this.emit("playerDestorying", this._player), this._player.destroy()),
						this.emit("destroy"),
						[2]
					}
				})
			})
		},
		w);
		function w(e, t, n) {
			var p = T.call(this) || this;
			return p.LOG_TAG = "[PlayerCore] > ",
			p.queryRecordState = s.STOP,
			p._getConfigPending = !1,
			p._devbaseConfig = void 0,
			p._playMode = o.NONE,
			p._playState = a.STOP,
			p._videoMimeType = _.MediaSourceMimeType.H264,
			p._audioMimeType = _.MediaSourceMimeType.AAC,
			p.onQueryRecords = null,
			p.onPlaybackEnd = null,
			p.onStreamingVideoOpen = function(e) {
				var t;
				p.initPlayer(e.encoding);
				var n = e.imageWidth,
				r = e.imageHeight,
				i = u.__rest(e, ["imageWidth", "imageHeight"]);
				null === (t = p._player) || void 0 === t || t.initVideo(u.__assign({
					width: n,
					height: r,
					mimeType: p._videoMimeType
				},
				i)),
				p.emit("buffering", "video")
			},
			p.onStreamingVideoClose = function() {
				var e;
				null === (e = p._player) || void 0 === e || e.uninitVideo(),
				p.emit("stop", "video")
			},
			p.onStreamingAudioOpen = function(e) {
				var t, n = e.type,
				r = u.__rest(e, ["type"]);
				null === (t = p._player) || void 0 === t || t.initAudio(u.__assign({
					encoding: n,
					mimeType: p._audioMimeType
				},
				r))
			},
			p.onStreamingAudioClose = function() {
				var e;
				null === (e = p._player) || void 0 === e || e.uninitAudio(),
				p.emit("stop", "audio")
			},
			p._onAVData = function(e) {
				var t;
				null === (t = p._player) || void 0 === t || t.pushAVData(e)
			},
			p.onClientClose = function(e) {
				p.onClientDisconnected(e)
			},
			p.onConnectionError = function(e) {},
			p._onPlaybackQuery = function(e) {
				null != p.onQueryRecords && p.onQueryRecords(e)
			},
			p._onPlaybackOpen = function(e) {
				var t, n;
				p.playbackDesc = e,
				p.initPlayer(e.video.format);
				var r = e.video,
				i = r.fps,
				o = r.format,
				a = r.weight,
				s = r.height,
				c = e.audio,
				u = c.format,
				l = c.sample,
				d = c.channel;
				null === (t = p._player) || void 0 === t || t.initVideo({
					fps: i,
					encoding: o,
					width: a,
					height: s,
					gopSize: 0,
					mimeType: p._videoMimeType
				}),
				null === (n = p._player) || void 0 === n || n.initAudio({
					encoding: u,
					sample: l,
					audioChannel: d,
					mimeType: p._audioMimeType
				})
			},
			p._onPlaybackEnd = function() {
				var e;
				null === (e = p._player) || void 0 === e || e.stop(),
				p.changePlayState(a.STOP),
				p.changePlayMode(o.NONE),
				null != p.onPlaybackEnd && p.onPlaybackEnd(),
				p.emit("playbackEnd")
			},
			p._onPlaybackClose = function() {
				var e;
				null === (e = p._player) || void 0 === e || e.stop(),
				p.changePlayState(a.STOP),
				p.changePlayMode(o.NONE),
				p.emit("stop", "video")
			},
			p.containerElement = e,
			p.options = Object.assign(new P, L, n),
			p.openStreamingPromise = Promise.resolve(),
			p.openPlaybackPromise = Promise.resolve(),
			p.client = new l.YDClient(t),
			p.client.onclose = p.onClientClose,
			p.client.connection.on(v.ConnectionEvents.ERROR, p.onConnectionError),
			p.client.streaming.onvideoopen = p.onStreamingVideoOpen,
			p.client.streaming.onaudioopen = p.onStreamingAudioOpen,
			p.client.streaming.ondata = p._onAVData,
			p.client.streaming.on(h.YDMessageEvents.VIDEO_CLOSE, p.onStreamingVideoClose),
			p.client.streaming.on(h.YDMessageEvents.AUDIO_CLOSE, p.onStreamingAudioClose),
			p.client.playback.onquery = p._onPlaybackQuery,
			p.client.playback.onplayback = p._onPlaybackOpen,
			p.client.playback.ondata = p._onAVData,
			p.client.playback.onplaybackend = p._onPlaybackEnd,
			p.client.playback.onplaybackclose = p._onPlaybackClose,
			p.changePlayState(a.STOP),
			p.changePlayMode(o.NONE),
			p
		}
		n.YDPlayerCore = I
	},
	{
		"./core/yd-error": 51,
		"./io/base-connection": 52,
		"./io/yd/avformat": 56,
		"./io/yd/client": 57,
		"./io/yd/events": 59,
		"./io/yd/message": 60,
		"./io/yd/processer/config": 61,
		"./io/yd/processer/palyback": 63,
		"./player-base": 74,
		"./player-mse": 76,
		"./player-wasm": 77,
		"./utils/date": 106,
		"./utils/error": 108,
		"./utils/log": 109,
		events: 45,
		tslib: 49
	}],
	76 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.MSEPlayer = n.TrackState = void 0;
		var a, r, o = e("tslib"),
		p = e("./io/yd/avformat"),
		i = e("./presentation/mse"),
		h = e("file-saver"),
		s = e("./remux/h264-remuxer"),
		c = e("./remux/aac-remuxer"),
		f = e("./utils/log"),
		g = e("./player-base"),
		u = e("./remux/hevc-remuxer"); (r = a = n.TrackState || (n.TrackState = {}))[r.DISABLED = 0] = "DISABLED",
		r[r.STOP = 1] = "STOP",
		r[r.PREPARE = 2] = "PREPARE",
		r[r.READY = 3] = "READY",
		r[r.PENDING = 4] = "PENDING",
		r[r.BUFFERING = 5] = "BUFFERING",
		r[r.PLAYING = 6] = "PLAYING";
		var l, d = {
			frameDuration: g.FrameDuration.PACKET,
			objectFit: "fill"
		},
		y = (l = g.PlayerBase, o.__extends(v, l), Object.defineProperty(v.prototype, "perf", {
			get: function() {
				var e = o.__rest(this.videoDesc, []),
				t = this.videoElement,
				n = t.currentTime,
				r = 0 < t.buffered.length ? t.buffered.end(t.buffered.length - 1) : 0,
				i = this.isSupportGetVideoPlaybackQuality ? t.getVideoPlaybackQuality().totalVideoFrames / t.currentTime: (this.totalVideoFrames - 1) / r;
				return {
					videoDescription: o.__assign({},
					e),
					videoBufferedTime: this.getVideoBufferedTime(),
					videoCurrentTime: n,
					videoPlayingFps: i,
					audioTotalFrames: this.totalAudioFrames,
					videoTotalFrames: this.totalVideoFrames
				}
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(v.prototype, "muted", {
			get: function() {
				return this.videoElement.muted
			},
			set: function(e) {
				this.videoElement.muted = e
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(v.prototype, "volume", {
			get: function() {
				return this.videoElement.volume
			},
			set: function(e) {
				this.videoElement.volume = e
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(v.prototype, "objectFit", {
			get: function() {
				return this.videoElement.style.objectFit
			},
			set: function(e) {
				this.videoElement.style.objectFit = e
			},
			enumerable: !1,
			configurable: !0
		}), v.prototype.createVideoView = function() {
			var e = document.createElement("video");
			return e.className = "ydplayer-video",
			e.muted = !0,
			e.autoplay = !0,
			e.playsinline = !0,
			e["webkit-playsinline"] = !0,
			e["x5-playsinline"] = !0,
			e.disablePictureInPicture = !0,
			e.style.objectFit = this.options.objectFit || "fill",
			e
		},
		v.prototype.changeTrackState = function(e, t) {
			this._trackState[e] !== t && (this._trackState[e] = t, this.emit("streamingStateChanged", e, this._trackState[e]))
		},
		v.prototype.initAudio = function(e) {
			var t = this,
			n = this;
			if ((this.audioDesc = e).encoding != p.AudioType.AAC) return f.Log.warn(this.LOG_TAG, "audio format: " + e.encoding + " is not supported"),
			void this.removeAddedAudioTrack();
			this.initAudioControl(),
			this.changeTrackState("audio", a.PREPARE),
			this.emit("buffering", "audio"),
			n.audioNullTimer = window.setTimeout(function() {
				f.Log.warn(t.LOG_TAG, "there is no audio data in " + n.audioNullTimeout + "ms, remove audio track."),
				window.clearTimeout(n.audioNullTimer),
				n.audioNullTimer = 0,
				n.removeAddedAudioTrack()
			},
			n.audioNullTimeout)
		},
		v.prototype.uninitAudio = function() {
			this.destroyAudioControl(),
			this.changeTrackState("audio", a.STOP),
			this.changeTrackReady("audio", !1)
		},
		v.prototype.initMse = function() {
			var e, t, n = this;
			if (!this.mseInited && (this.mseInited = !0, this.mse = new i.MSE(this.videoElement), this._trackState.video === a.READY && (this.mse.addTrack("video", (null === (e = this.videoDesc) || void 0 === e ? void 0 : e.mimeType) || g.MediaSourceMimeType.H264), this.changeTrackState("video", a.BUFFERING)), this._trackState.audio === a.READY && (this.mse.addTrack("audio", (null === (t = this.audioDesc) || void 0 === t ? void 0 : t.mimeType) || g.MediaSourceMimeType.AAC), this.changeTrackState("video", a.BUFFERING)), this.videoElement)) {
				this.videoElement.load();
				var r = this.videoElement.play();
				r && r.
				catch(function(e) {
					f.Log.warn(n.LOG_TAG, "html video play failed: " + e)
				})
			}
		},
		v.prototype.changeTrackReady = function(e, t) {
			this.trackReady[e] = t,
			this.onTrackReady(e, t)
		},
		v.prototype.isAllTrackReady = function() {
			return this.trackReady.video && this.trackReady.audio
		},
		v.prototype.onTrackReady = function(e, t) {
			if (this.isAllTrackReady()) {
				if (this.initMse(), !this.mse) throw new Error("MSE not initialized.");
				this.mse.play(),
				this._trackState.video == a.PLAYING && (this.emit("playing", "video"), this.onPlaying && this.onPlaying("video")),
				this._trackState.audio == a.PLAYING && (this.emit("playing", "audio"), this.onPlaying && this.onPlaying("audio"))
			}
		},
		v.prototype.stop = function() {
			this.videoElement && !this.videoElement.paused && this.videoElement.pause(),
			this.uninitVideo(),
			this.uninitAudio()
		},
		v.prototype.initVideo = function(e) {
			this.videoDesc = e,
			this.videoFPS = e.fps || 25,
			this.videoFPSDuration = Math.floor(1e3 / this.videoFPS),
			this.initVideoControl(e),
			this.changeTrackState("video", a.PREPARE)
		},
		v.prototype.uninitVideo = function() {
			this.destroyVideoControl(),
			this.changeTrackState("video", a.STOP),
			this.changeTrackReady("video", !1)
		},
		v.prototype.initVideoControl = function(e) {
			this.videoRemuxerInited || (e.fps, e.encoding === p.VideoEncoding.H265 ? this.videoRemuxer = new u.HEVCRemuxer(4, e.width, e.height) : this.videoRemuxer = new s.H264Remuxer(4), this.videoRemuxer.onInitSegment = this.onRemuxerInitSegment, this.videoRemuxer.onMediaSegment = this.onRemuxerMediaSegment)
		},
		v.prototype.destroyVideoControl = function() {
			this.videoRemuxer && (this.videoRemuxer.destroy(), this.videoRemuxer = null),
			this.videoBuffer && 0 < this.videoBuffer.length && (this.videoBuffer = []),
			this.changeTrackState("video", a.STOP),
			this.changeTrackReady("video", !1)
		},
		v.prototype.initAudioControl = function() {
			this.audioRemuxerInited || (this.audioRemuxer = new c.AACRemuxer(4), this.audioRemuxer.onInitSegment = this.onRemuxerInitSegment, this.audioRemuxer.onMediaSegment = this.onRemuxerMediaSegment)
		},
		v.prototype.destroyAudioControl = function() {
			this.audioRemuxer && (this.audioRemuxer.destroy(), this.audioRemuxer = null),
			this.audioBuffer && 0 < this.audioBuffer.length && (this.audioBuffer = []),
			this.changeTrackState("audio", a.STOP)
		},
		v.prototype.removeAddedAudioTrack = function() {
			this.mse && this.mseInited && this.mse.removeTrack("audio"),
			this.changeTrackState("audio", a.DISABLED),
			this.changeTrackReady("audio", !0),
			this.emit("stop", "audio")
		},
		v.prototype.getVideoBufferedTime = function() {
			return 0 < this.videoElement.buffered.length ? this.videoElement.buffered.end(this.videoElement.buffered.length - 1) - this.videoElement.currentTime: 0
		},
		v.prototype.pushAVData = function(e) {
			var t = e.frameType,
			n = e.timestamp;
			switch (t) {
			case p.FrameType.H264_I:
			case p.FrameType.H264_P:
			case p.FrameType.H264_Init:
			case p.FrameType.H265_I:
			case p.FrameType.H265_B:
			case p.FrameType.H265_P:
				var r = e.frame.slice(0);
				this.remuxVideoData(r, n, t);
				break;
			case p.FrameType.AUDIO_AAC:
				0 === this.totalAudioFrames && 0 === this.totalVideoFrames && (this.audioFirstArrived = !0, f.Log.debug(this.LOG_TAG, "audio first arrived"));
				var i = e.frame.slice(0);
				this.remuxAudioData(i, n)
			}
		},
		v.prototype.remuxVideoData = function(e, t, n) {
			var r;
			if (this._DEBUG) {
				var i = new Uint8Array(e.byteLength);
				if (i.set(e), this._fileBufferData.push(i), 60 == this._fileBufferData.length) {
					var o = new Blob(this._fileBufferData);
					h.saveAs(o, "video.h265")
				}
			}
			if (this.totalVideoFrames++, this.videoRemuxer && (this.videoBuffer.push({
				buffer: e,
				timestamp: t,
				frameType: n
			}), 2 <= this.videoBuffer.length)) {
				var a = this.videoBuffer.shift();
				if (a) {
					var s = t - a.timestamp,
					c = s;
					if (this._totalFrameDuration += s, this.options.frameDuration === g.FrameDuration.FPS && (c = this.videoFPSDuration, this._totalFpsDuration += c), 15 < this.getVideoBufferedTime() && (f.Log.debug(this.LOG_TAG, "html video element buffered time: " + (null === (r = this.mse) || void 0 === r ? void 0 : r.bufferedTime)), c = Math.floor(.9 * c)), c = Math.max(1, c), f.Log.debug(this.LOG_TAG, "avpacket type: " + p.FrameType[a.frameType] + ", last timestamp: " + a.timestamp + ", originalDuration: " + s + ", last duration: " + c + ", total duration diff: " + (this._totalFrameDuration - this._totalFpsDuration) + "ms, videoBuffedTime: " + this.getVideoBufferedTime() + "s"), this.audioDesc && this.audioDesc.sample && this.audioDesc.encoding == p.AudioType.AAC) {
						var u = this.totalVideoDuration,
						l = this.audioFirstArrived ? this.totalAudioDuration: this.totalAudioDuration + 102400 / this.audioDesc.sample;
						if (0 < this.totalVideoDuration && 0 < this.totalAudioDuration && u < l) {
							var d = Math.min(100, Math.floor(l - u));
							c += d,
							f.Log.debug(this.LOG_TAG, "A/V sync adjust=" + d + ", totalAudioDuration=" + l + ", totalVideoDuration=" + u)
						}
					}
					this.totalVideoDuration += c,
					this.videoRemuxer.feed(a.buffer, c)
				}
			}
		},
		v.prototype.remuxAudioData = function(e, t) {
			if (this.totalAudioFrames++, this.audioRemuxer && this._trackState.audio !== a.DISABLED && (this.audioBuffer.push({
				buffer: e,
				timestamp: t
			}), 2 === this.audioBuffer.length)) {
				var n = this.audioBuffer.shift();
				if (n) {
					var r = t - n.timestamp;
					r = Math.max(1, r),
					r = 1024e3 / (this.audioDesc && this.audioDesc.sample ? this.audioDesc.sample: 8e3),
					this.totalAudioDuration += r,
					this.audioRemuxer.feed(n.buffer, r),
					0 < this.audioNullTimer && (window.clearTimeout(this.audioNullTimer), this.audioNullTimer = 0)
				}
			}
		},
		v.prototype.requestFullscreen = function() {
			return this.videoElement.requestFullscreen()
		},
		v.prototype.capture = function() {
			var e = document.createElement("canvas");
			e.width = this.videoElement.videoWidth,
			e.height = this.videoElement.videoHeight;
			var t = e.getContext("2d");
			if (t && this.videoElementPlaying) {
				t.drawImage(this.videoElement, 0, 0, e.width, e.height);
				var n = e.toDataURL("image/jpeg");
				return "function" == typeof e.remove && e.remove(),
				n
			}
		},
		v.prototype.destroy = function(t) {
			return o.__awaiter(this, void 0, void 0,
			function() {
				return o.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return this.videoElement.pause(),
						this.videoElement.remove(),
						this.mse ? [4, this.mse.destroy(t)] : [3, 2];
					case 1:
						e.sent(),
						this.mse = void 0,
						this.mseInited = !1,
						e.label = 2;
					case 2:
						return this.emit("destroy"),
						[2]
					}
				})
			})
		},
		v);
		function v(e, t) {
			var o = l.call(this) || this;
			o.LOG_TAG = "[MSEPlayer] > ",
			o.isSupportGetVideoPlaybackQuality = !1,
			o.videoElementPlaying = !1,
			o._trackState = {
				video: a.STOP,
				audio: a.STOP
			},
			o.videoRemuxerInited = !1,
			o.audioRemuxerInited = !1,
			o.videoRemuxer = null,
			o.audioRemuxer = null,
			o.mseInited = !1,
			o.audioFirstArrived = !1,
			o.totalAudioFrames = 0,
			o.totalVideoFrames = 0,
			o.totalAudioDuration = 0,
			o.totalVideoDuration = 0,
			o.videoBuffer = [],
			o.audioBuffer = [],
			o.remuxedSegments = [],
			o.trackReady = {
				video: !1,
				audio: !1
			},
			o.audioNullTimeout = 3100,
			o.audioNullTimer = 0,
			o.videoPlayingBaseTime = 0,
			o.videoPlayingLastTime = 0,
			o.videoFPS = 0,
			o.videoFPSDuration = 40,
			o.onVideoPlaying = function(e) {
				o.videoElementPlaying = !0,
				o.emit("videoPlaying", e)
			},
			o.onVideoError = function(e) {
				if ("string" == typeof e) f.Log.error(o.LOG_TAG, e);
				else if ("error" === e.type) {
					var t = e.target.error;
					t && t.message ? t.message.indexOf("Empty src attribute") < 0 ? f.Log.error(o.LOG_TAG, t) : f.Log.debug(o.LOG_TAG, t) : f.Log.error(o.LOG_TAG, "video error: ", t)
				}
				o.emit("videoError", e)
			},
			o.onVideoPause = function(e) {},
			o.onVideoTimeUpdate = function(e) {
				var t = o.videoElement.currentTime;
				if (.25 < t - o.videoPlayingLastTime) {
					var n = t - o.videoPlayingBaseTime;
					o.emit("videoTimeUpdate", n),
					o.videoPlayingLastTime = t
				}
			},
			o._DEBUG = !1,
			o._fileBufferData = [],
			o._totalFrameDuration = 0,
			o._totalFpsDuration = 0,
			o._fileBuffer = [],
			o.onRemuxerInitSegment = function(e, t, n) {
				o._DEBUG && "video" == t && o._fileBuffer.push(e),
				o.remuxedSegments.push({
					track: t,
					data: e
				}),
				f.Log.debug(o.LOG_TAG, t + " initSegment is writed."),
				o.changeTrackState(t, a.READY),
				o.changeTrackReady(t, !0)
			},
			o.onRemuxerMediaSegment = function(e, t, n) {
				if (o._DEBUG && ("video" == n && o._fileBuffer.push(e), 60 == o._fileBuffer.length)) {
					var r = new Blob(o._fileBuffer);
					h.saveAs(r, "fragment.mp4")
				}
				if (o.mse && o.mseInited && o.isAllTrackReady()) {
					for (var i = void 0; i = o.remuxedSegments.shift();) o.mse.feed(i.track, i.data);
					o.mse.feed(n, e),
					o.changeTrackState(n, a.PLAYING)
				} else f.Log.debug(o.LOG_TAG, (o.trackReady.video ? "audio": "video") + " track is not ready, this " + n + " data will be queued."),
				o.remuxedSegments.push({
					track: n,
					data: e
				})
			},
			o.options = Object.assign(new g.PlayerOptions, d, t);
			var n = o.createVideoView();
			return n.onplaying = o.onVideoPlaying,
			n.onwaiting = function(e) {
				f.Log.warn(o.LOG_TAG, "video is waiting...")
			},
			n.onerror = o.onVideoError,
			n.onpause = o.onVideoPause,
			n.ontimeupdate = o.onVideoTimeUpdate,
			o.containerElement = e,
			o.containerElement.appendChild(n),
			o.videoElement = n,
			o.isSupportGetVideoPlaybackQuality = "function" == typeof o.videoElement.getVideoPlaybackQuality,
			o.changeTrackState("video", a.STOP),
			o.changeTrackState("audio", a.STOP),
			o
		}
		n.MSEPlayer = y
	},
	{
		"./io/yd/avformat": 56,
		"./player-base": 74,
		"./presentation/mse": 91,
		"./remux/aac-remuxer": 94,
		"./remux/h264-remuxer": 97,
		"./remux/hevc-remuxer": 100,
		"./utils/log": 109,
		"file-saver": 47,
		tslib: 49
	}],
	77 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.WasmPlayer = void 0;
		var r, i = e("tslib"),
		o = e("./utils/log"),
		a = e("./player-base"),
		d = e("./io/yd/avformat"),
		u = e("./lib/webgl"),
		s = e("./lib/pcmplayer"),
		l = e("./lib/g7112pcm"),
		c = e("./utils/currentscript"),
		p = {
			frameDuration: void 0,
			objectFit: "fill"
		},
		h = (r = a.PlayerBase, i.__extends(f, r), Object.defineProperty(f.prototype, "videoFps", {
			get: function() {
				var e;
				return (null === (e = this.videoParameter) || void 0 === e ? void 0 : e.fps) || 25
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "muted", {
			get: function() {
				var e;
				return (null === (e = this.pcmPlayer) || void 0 === e ? void 0 : e.getMuted()) || this._muted
			},
			set: function(e) {
				this._muted = e,
				this.pcmPlayer && this.pcmPlayer.setMuted(e)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "volume", {
			get: function() {
				var e;
				return (null === (e = this.pcmPlayer) || void 0 === e ? void 0 : e.getVolume()) || this._volume
			},
			set: function(e) {
				this._volume = e,
				this.pcmPlayer && this.pcmPlayer.setVolume(e)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "objectFit", {
			get: function() {
				return this.canvasElement.style.objectFit
			},
			set: function(e) {
				this.canvasElement.style.objectFit = e
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "perf", {
			get: function() {
				var e = i.__rest(this.videoParameter, []);
				return {
					decode: this._perfDecode,
					render: this._perfRender,
					videoDescription: i.__assign({},
					e)
				}
			},
			enumerable: !1,
			configurable: !0
		}), f.prototype.decode = function(e, t) {
			var n, r = {
				type: "decode",
				args: {
					frameType: e,
					data: t
				}
			};
			null === (n = this.decoder) || void 0 === n || n.postMessage(r, [r.args.data.buffer])
		},
		f.prototype.onDecode = function(e, t, n) {
			void 0 === t && (t = 1920),
			void 0 === n && (n = 1080),
			this.pushToRenderBuffers(e, t, n)
		},
		f.prototype.pushToRenderBuffers = function(e, t, n) {
			var r = this;
			if (r.videoDecodeFrames++, 1 == r.videoDecodeFrames) r.render(e, t, n),
			r.renderLoop();
			else {
				if (!r._documentVisible) for (; r.videoDecodeFrameBuffers.length > 3 * r.videoFps;) r.videoDecodeFrameBuffers.shift();
				r.videoDecodeFrameBuffers.push({
					data: e,
					width: t,
					height: n
				})
			}
		},
		f.prototype.updateRenderInterval = function() {
			var e = this,
			t = e.videoDecodeFrameBuffers.length,
			n = e.videoFps;
			if (0 < e.lastRenderStartTime && (e.lastRenderElapsed = (new Date).getTime() - e.lastRenderStartTime), 5 * n < t) e.renderInterval = 0;
			else if (.5 * n < t) {
				var r = 1e3 / n,
				i = Math.pow(6 * (t - n) / n, 2);
				r = Math.max(10, r - i - e.lastRenderElapsed),
				e.renderInterval = r
			} else e.renderInterval = Math.max(1, 1e3 / n - e.lastRenderElapsed)
		},
		f.prototype.render = function(e, t, n) {
			var r;
			this.canvasElementPlaying || (this.canvasElementPlaying = !0, this.emit("videoPlaying")),
			this.lastRenderStartTime = (new Date).getTime(),
			null === (r = this.webglRenderer) || void 0 === r || r.renderFrame(e, t, n, t * n, t / 2 * (n / 2)),
			this.lastRenderFrame = {
				data: e,
				width: t,
				height: n
			}
		},
		f.prototype.writeRenderPerf = function(e, t, n) {
			for (; 127 < this._perfRender.elapsed.length;) this._perfRender.elapsed.shift();
			this._perfRender.elapsed.push({
				begin: e,
				elapsed: t
			}),
			this._perfRender.queue = n
		},
		f.prototype.onDecodeWorkerMessage = function(e) {
			var t = e.data,
			n = t.type,
			r = t.args;
			switch (n) {
			case "onDecoded":
				if (r instanceof Array) {
					var i = r[0],
					o = r[1],
					a = r[2];
					this.onDecode(i, o, a)
				} else this.onDecode(r);
				break;
			case "perf":
				var s = r.queue,
				c = r.elapsed;
				this._perfDecode.queue = s,
				this._perfDecode.elapsed = c
			}
		},
		f.prototype.containsFile = function(e, t) {
			if (!e || !t) return ! 1;
			var n = e.lastIndexOf(".js");
			return n === e.length - t.length || n === e.indexOf("?") - t.length
		},
		f.prototype.getDecoderScriptPath = function() {
			var e = this.options.h265DecoderScriptPath || c.currentScriptPath() || "/";
			return this.containsFile(e, ".js") || (e.lastIndexOf("/") !== e.length - 1 && (e += "/"), e += "decoder.worker.js"),e = e + (0 < e.indexOf("?") ? "&": "?") + "v=1021"
		},
		f.prototype.pushVideoPacket = function(e) {
			this.videoFrameBuffer.push(e)
		},
		f.prototype.pushAudioPacket = function(e) {
			this.audioFrameBuffer.push(e)
		},
		f.prototype.initVideo = function(e) {
			var t = this;
			t.videoParameter = e;
			var n = this.getDecoderScriptPath();
            console.log(n)
			o.Log.debug(this.LOG_TAG, "h265 decoder script path: " + n),
			this.decoder = new Worker(n),
			this.decoder.onmessage = function(e) {
				t.onDecodeWorkerMessage(e)
			},
			this.decoder.postMessage({
				type: "initDecoder",
				args: {
					maxDecodeQueueLength: 60 * this.videoFps
				}
			}),
			0 < e.fps && (t.renderInterval = 1e3 / e.fps),
			t.canvasElement.width = e.width || 1920,
			t.canvasElement.height = e.height || 1080,
			t.webglRenderer = new u.WebGLRenderer(t.canvasElement, {
				powerPreference: "high-performance",
				preserveDrawingBuffer: !1
			}),
			this.videoPlaying = !0,
			this.videoDecodeLoop();
			var r = new Event("playing");
			t.canvasElement.dispatchEvent(r)
		},
		f.prototype.uninitVideo = function() {
			var e, t;
			this.videoDecodeTimer && clearTimeout(this.videoDecodeTimer),
			this.videoPlaying = !1,
			null === (e = this.decoder) || void 0 === e || e.postMessage({
				type: "uninitDecoder"
			}),
			null === (t = this.decoder) || void 0 === t || t.postMessage({
				type: "close"
			}),
			this.decoder = void 0,
			this.canvasElement.remove(),
			this.videoFrameBuffer.splice(0, this.videoFrameBuffer.length)
		},
		f.prototype.initAudio = function(e) {
			var t = {
				encoding: "16bitInt",
				channels: 2 === e.audioChannel ? 2 : 1,
				sampleRate: e.sample,
				flushingTime: 1e3,
				volume: this._volume,
				muted: this._muted
			};
			switch (e.encoding) {
			case d.AudioType.G711A:
			case d.AudioType.G711U:
			case d.AudioType.PCM8:
				this.pcmPlayer = new s.PCMPlayer(t),
				this.audioPlaying = !0,
				this.audioDecodeLoop();
				break;
			default:
				o.Log.warn(this.LOG_TAG, "audio encoding is not supported: " + d.AudioType[e.encoding])
			}
		},
		f.prototype.uninitAudio = function() {
			var e;
			this.audioDecodeTimer && clearTimeout(this.audioDecodeTimer),
			this.audioPlaying = !1,
			null === (e = this.pcmPlayer) || void 0 === e || e.destroy(),
			this.pcmPlayer = void 0,
			this.audioFrameBuffer.splice(0, this.audioFrameBuffer.length)
		},
		f.prototype.pushAVData = function(e) {
			var t = e.channel,
			n = e.dataType,
			r = e.streamIndex,
			i = e.frameType,
			o = e.frame,
			a = e.timestamp;
			if (this._DEBUG && this._saveFile) {
				var s = e.frame,
				c = new Uint8Array(s.byteLength);
				if (c.set(s), this._fileBufferData.push(c), 60 == this._fileBufferData.length) {
					var u = new Blob(this._fileBufferData);
					saveAs(u, "video.h265"),
					this._saveFile = !1
				}
			}
			var l = {
				channel: t,
				dataType: n,
				streamIndex: r,
				frameType: i,
				frame: o.slice(0),
				timestamp: a
			};
			switch (i) {
			case d.FrameType.H265_B:
			case d.FrameType.H265_I:
			case d.FrameType.H265_P:
				this.pushVideoPacket(l);
				break;
			case d.FrameType.AUDIO_G711u:
			case d.FrameType.AUDIO_G711a:
			case d.FrameType.AUDIO_PCM:
				this.pushAudioPacket(l)
			}
		},
		f.prototype.stop = function() {
			this.uninitVideo(),
			this.uninitAudio()
		},
		f.prototype.requestFullscreen = function() {
			this.canvasElement.requestFullscreen()
		},
		f.prototype.capture = function() {
			var e, t, n = this.lastRenderFrame;
			if (n) {
				var r = document.createElement("canvas");
				r.width = (null === (e = this.videoParameter) || void 0 === e ? void 0 : e.width) || 1920,
				r.height = (null === (t = this.videoParameter) || void 0 === t ? void 0 : t.height) || 1080,
				r.style.width = "1px",
				r.style.height = "1px",
				this.containerElement.appendChild(r);
				var i = new u.WebGLRenderer(r, {
					powerPreference: "high-performance",
					preserveDrawingBuffer: !0
				}),
				o = n.data,
				a = n.width,
				s = n.height;
				i.renderFrame(o, a, s, a * s, a / 2 * (s / 2));
				var c = r.toDataURL("image/jpeg", .6);
				return r.remove(),
				c
			}
		},
		f.prototype.destroy = function(e) {
			return this.uninitVideo(),
			this.uninitAudio(),
			this.emit("destroy"),
			Promise.resolve()
		},
		f);
		function f(e, t) {
			var u = r.call(this) || this;
			return u.LOG_TAG = "[WasmPlayer] > ",
			u.canvasElementPlaying = !1,
			u.videoPlaying = !1,
			u.audioPlaying = !1,
			u.videoFrameBuffer = [],
			u.audioFrameBuffer = [],
			u.videoDecodeFrames = 0,
			u.videoDecodeFrameBuffers = [],
			u.videoPlayingBaseTime = 0,
			u.videoPlayingLastTime = 0,
			u.videoPlayingCurrentTime = 0,
			u.videoDecodeTimer = 0,
			u.audioDecodeTimer = 0,
			u.lastRenderLoopTime = 0,
			u.lastRenderStartTime = 0,
			u.lastRenderElapsed = 0,
			u.renderTimer = 0,
			u.renderInterval = 40,
			u._muted = !0,
			u._volume = 1,
			u._perfDecode = {
				queue: 0,
				elapsed: []
			},
			u._perfRender = {
				queue: 0,
				elapsed: []
			},
			u._documentVisible = !0,
			u.onVideoError = function(e) {
				if ("string" == typeof e) o.Log.error(u.LOG_TAG, e);
				else if ("error" === e.type) {
					o.Log.error(e);
					var t = e.target.error;
					t && t.message && t.message.indexOf("Empty src attribute") < 0 && o.Log.error(u.LOG_TAG, t)
				}
				u.emit("videoError", e)
			},
			u.onVideoTimeUpdate = function() {
				if (250 < u.videoPlayingCurrentTime - u.videoPlayingLastTime) {
					var e = (u.videoPlayingCurrentTime - u.videoPlayingBaseTime) / 1e3;
					u.emit("videoTimeUpdate", e),
					u.videoPlayingLastTime = u.videoPlayingCurrentTime
				}
			},
			u.renderLoop = function() {
				var e = u,
				t = e.videoDecodeFrameBuffers;
				if (0 < t.length) {
					var n = t.shift();
					if (n) {
						var r = n.data,
						i = n.width,
						o = n.height,
						a = performance.now();
						e.render(r, i, o);
						var s = performance.now() - a;
						e.writeRenderPerf(a, s, t.length),
						e.videoPlayingCurrentTime += 1e3 / e.videoFps,
						e.onVideoTimeUpdate()
					}
				}
				e.updateRenderInterval(),
				u.renderTimer && clearTimeout(u.renderTimer),
				u.videoPlaying && (u.renderTimer = window.setTimeout(u.renderLoop, u.renderInterval), e.lastRenderLoopTime = (new Date).getTime())
			},
			u.videoDecodeLoop = function() {
				for (var e = u; e.videoFrameBuffer && 0 < e.videoFrameBuffer.length;) {
					var t = e.videoFrameBuffer.shift();
					if (t) {
						var n = t.frameType,
						r = t.frame;
						t.timestamp;
						e.decode(n, r)
					}
				}
				e.videoDecodeTimer && clearTimeout(e.videoDecodeTimer),
				e.videoPlaying && (e.videoDecodeTimer = window.setTimeout(e.videoDecodeLoop, 20))
			},
			u.audioDecodeLoop = function() {
				for (var e, t, n, r = u; r.audioFrameBuffer && 0 < r.audioFrameBuffer.length;) {
					var i = r.audioFrameBuffer.shift();
					if (i) {
						var o = i.frameType,
						a = i.frame;
						i.timestamp;
						switch (o) {
						case d.FrameType.AUDIO_G711a:
							var s = l.decodeAlaw(a);
							null === (e = r.pcmPlayer) || void 0 === e || e.feed(s);
							break;
						case d.FrameType.AUDIO_G711u:
							var c = l.decodeUlaw(a);
							null === (t = r.pcmPlayer) || void 0 === t || t.feed(c);
							break;
						case d.FrameType.AUDIO_PCM:
							null === (n = r.pcmPlayer) || void 0 === n || n.feed(a)
						}
					}
				}
				r.audioDecodeTimer && clearTimeout(r.audioDecodeTimer),
				r.audioPlaying && (r.audioDecodeTimer = window.setTimeout(r.audioDecodeLoop, 10))
			},
			u._DEBUG = !1,
			u._saveFile = !0,
			u._fileBufferData = [],
			u.options = Object.assign(new a.PlayerOptions, p, t),
			u.canvasElement = document.createElement("canvas"),
			u.canvasElement.className = "ydplayer-video",
			u.canvasElement.onerror = u.onVideoError,
			u.canvasElement.style.objectFit = u.options.objectFit || "fill",
			u.containerElement = e,
			u.containerElement.appendChild(u.canvasElement),
			document.addEventListener("visibilitychange",
			function(e) {
				if (u._documentVisible = "visible" === document.visibilityState, u._documentVisible) {
					var t = (new Date).getTime() - u.lastRenderLoopTime;
					if (5e3 < t) for (o.Log.debug(u.LOG_TAG, "warn: last render looped before " + t + "ms"); u.videoDecodeFrameBuffers.length > u.videoFps;) u.videoDecodeFrameBuffers.shift()
				}
			}),
			u
		}
		n.WasmPlayer = h
	},
	{
		"./io/yd/avformat": 56,
		"./lib/g7112pcm": 68,
		"./lib/pcmplayer": 70,
		"./lib/webgl": 72,
		"./player-base": 74,
		"./utils/currentscript": 104,
		"./utils/log": 109,
		tslib: 49
	}],
	78 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r, i = e("tslib"),
		o = e("../plugin"),
		a = e("../plugin-events"),
		s = e("./locate-3d"),
		c = (r = o.PlugIn, i.__extends(u, r), Object.defineProperty(u.prototype, "name", {
			get: function() {
				return "locate3d"
			},
			enumerable: !1,
			configurable: !0
		}), u.prototype.init = function() {
			var o = this;
			this.addListener(a.PlugInEvent.playerViewCreated,
			function(e, t) {
				var n = new s.Locate3D(o.pluginManager, e);
				o.controls.push({
					context: e,
					control: n
				})
			}),
			this.addListener(a.PlugInEvent.playerViewRemoved,
			function(e) {
				for (var t = -1,
				n = 0; n < o.controls.length; n++) {
					var r = o.controls[n],
					i = r.context;
					if (r.control, i == e) {
						t = n;
						break
					}
				} - 1 < t && o.controls.splice(t, 1)
			})
		},
		u);
		function u() {
			var e = null !== r && r.apply(this, arguments) || this;
			return e.controls = [],
			e
		}
		n.
	default = c
	},
	{
		"../plugin": 89,
		"../plugin-events": 87,
		"./locate-3d": 79,
		tslib: 49
	}],
	79 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.Locate3D = void 0;
		var p = e("../../player-core"),
		o = e("../../utils/log"),
		r = (i.prototype.destory = function() {
			var e = this.context.view;
			e && (e.removeEventListener("mousedown", this.onVideoViewMouseDown), e.removeEventListener("mousemove", this.onVideoViewMouseMove), e.removeEventListener("mouseleave", this.onVideoViewMouseleave), e.removeEventListener("mouseup", this.onVideoViewMouseUp))
		},
		i.prototype.addLocate3DRect = function(e, t, n) {
			var r = document.createElement("div");
			r.style.left = t + "px",
			r.style.top = n + "px",
			r.setAttribute("startX", t + ""),
			r.setAttribute("startY", n + ""),
			r.style.visibility = "hidden",
			r.className = "ydplayer-video-locate3D-rect",
			e.appendChild(r)
		},
		i.prototype.resizeLocate3DRect = function(e, t, n) {
			for (var r = e.childNodes || e.children,
			i = 0; i < r.length; i++) {
				var o = r[i];
				if (o && o.classList && o.classList.contains("ydplayer-video-locate3D-rect")) {
					o.getBoundingClientRect();
					var a = parseInt(o.getAttribute("startX") || "0"),
					s = parseInt(o.getAttribute("startY") || "0");
					t < a && (o.style.left = t + "px"),
					n < s && (o.style.top = n + "px");
					var c = Math.abs(t - a),
					u = Math.abs(n - s);
					o.style.width = c + "px",
					o.style.height = u + "px",
					10 < c && 10 < u && (o.style.visibility = "visible");
					break
				}
			}
		},
		i);
		function i(e, t) {
			var d = this;
			this.LOG_TAG = "[Locate3D] > ",
			this.onVideoViewMouseDown = function(n) {
				if (! (0 !== n.button || n.shiftKey || n.altKey || n.ctrlKey)) {
					var r = n.currentTarget;
					d.removeLocate3DRect(r);
					var i = d,
					e = d.context;
					e && e.core && e.core.playMode == p.PlayMode.STREAMING && e.core.playState == p.PlayState.PLAYING && Promise.race([new Promise(function(t, e) {
						return setTimeout(function(e) {
							return t(!1)
						},
						1e3)
					}), e.core.isSupportPtz()]).then(function(e) {
						if (e) {
							var t = r.getBoundingClientRect();
							i.addLocate3DRect(r, n.clientX - t.left, n.clientY - t.top)
						}
					},
					function(e) {
						o.Log.debug(d.LOG_TAG, "error: " + e, e)
					})
				}
			},
			this.onVideoViewMouseMove = function(e) {
				var t = e.currentTarget,
				n = t.getBoundingClientRect();
				d.resizeLocate3DRect(t, e.clientX - n.left, e.clientY - n.top)
			},
			this.onVideoViewMouseleave = function(e) {
				e.target;
				d.removeLocate3DRect(e.currentTarget)
			},
			this.onVideoViewMouseUp = function(e) {
				var t = e.currentTarget,
				n = d.context;
				if (n && n.core && n.core.playMode == p.PlayMode.STREAMING && n.core.playState == p.PlayState.PLAYING) {
					var r = d.getLocate3DRect(t);
					if (r) {
						var i = r.getBoundingClientRect(),
						o = t.getBoundingClientRect();
						if (10 < i.width && 10 < i.height && o.width > i.width && o.height > i.height) {
							var a = i.x - o.x,
							s = i.y - o.y;
							if (0 < a && 0 < s) {
								var c = a + i.width / 2,
								u = s + i.height / 2,
								l = {
									x: c / o.width,
									y: u / o.height,
									width: i.width / o.width,
									height: i.height / o.height
								};
								n.core.locate3D(0, l)
							}
						}
					}
				}
				d.removeLocate3DRect(t)
			},
			this.removeLocate3DRect = function(e) {
				for (var t = e.childNodes || e.children,
				n = t.length - 1; 0 <= n; n--) {
					var r = t[n];
					r && r.classList && r.classList.contains("ydplayer-video-locate3D-rect") && e.removeChild(r)
				}
			},
			this.getLocate3DRect = function(e) {
				for (var t = e.childNodes || e.children,
				n = t.length - 1; 0 <= n; n--) {
					var r = t[n];
					if (r && r.classList && r.classList.contains("ydplayer-video-locate3D-rect")) return r
				}
			},
			this.pluginManager = e,
			this.context = t;
			var n = this.context.view;
			n.addEventListener("mousedown", this.onVideoViewMouseDown),
			n.addEventListener("mousemove", this.onVideoViewMouseMove),
			n.addEventListener("mouseleave", this.onVideoViewMouseleave),
			n.addEventListener("mouseup", this.onVideoViewMouseUp)
		}
		n.Locate3D = r
	},
	{
		"../../player-core": 75,
		"../../utils/log": 109
	}],
	80 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.MonitoringBoard = void 0;
		function r() {}
		n.MonitoringBoard = r
	},
	{}],
	81 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r, i = e("tslib"),
		o = e("../../player-mse"),
		a = e("../../player-wasm"),
		s = e("../plugin"),
		c = e("../plugin-events"),
		u = e("./mse-board"),
		l = e("./wasm-board"),
		d = (r = s.PlugIn, i.__extends(p, r), Object.defineProperty(p.prototype, "name", {
			get: function() {
				return "monitoring"
			},
			enumerable: !1,
			configurable: !0
		}), p.prototype.init = function() {
			var i = this;
			this.addListener(c.PlugInEvent.internalPlayerCreated,
			function(e, t) {
				if (e instanceof a.WasmPlayer) {
					var n = new l.WasmPlayerMonitoringBoard(e, t);
					i._boards.push(n)
				} else e instanceof o.MSEPlayer && (n = new u.MsePlayerMonitoringBoard(e, t), i._boards.push(n))
			}),
			this.addListener(c.PlugInEvent.internalPlayerDestroying,
			function(e, t) {
				for (var n = 0; n < i._boards.length; n++) {
					var r = i._boards[n];
					if (e instanceof a.WasmPlayer && r instanceof l.WasmPlayerMonitoringBoard) {
						if (r.player === e) {
							r.detory(),
							i._boards.splice(n, 1);
							break
						}
					} else if (e instanceof o.MSEPlayer && r instanceof u.MsePlayerMonitoringBoard && r.player === e) {
						r.detory(),
						i._boards.splice(n, 1);
						break
					}
				}
			})
		},
		p);
		function p() {
			var e = null !== r && r.apply(this, arguments) || this;
			return e._boards = [],
			e
		}
		n.
	default = d
	},
	{
		"../../player-mse": 76,
		"../../player-wasm": 77,
		"../plugin": 89,
		"../plugin-events": 87,
		"./mse-board": 82,
		"./wasm-board": 83,
		tslib: 49
	}],
	82 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.MsePlayerMonitoringBoard = void 0;
		var r, i = e("tslib"),
		o = e("./board"),
		a = e("../../io/yd/avformat"),
		s = (r = o.MonitoringBoard, i.__extends(c, r), c.prototype.init = function() {
			var t = this;
			this.perfMessageElement.style.position = "absolute",
			this.perfMessageElement.style.zIndex = "10",
			this.perfMessageElement.style.top = "10px",
			this.perfMessageElement.style.left = "10px",
			this.perfMessageElement.style.color = "#ffffff",
			this.perfMessageElement.style.lineHeight = "1.2em",
			this.perfMessageElement.style.padding = "5px",
			this.perfMessageElement.style.background = "rgba(100,100,100,0.6)",
			this.perfMessageElement.style.display = "none",
			this.containerElement.appendChild(this.perfMessageElement),
			document.addEventListener("keydown",
			function(e) {
				"F6" === e.key && e.ctrlKey && (e.preventDefault(), t.perfMessageTimer ? (clearInterval(t.perfMessageTimer), t.perfMessageTimer = 0, t.perfMessageElement.textContent = "", t.perfMessageElement.style.display = "none") : (t.perfMessageElement.style.display = "block", t.updatePerfMessage(), t.perfMessageTimer = setInterval(t.updatePerfMessage, 1e3)))
			})
		},
		c.prototype.detory = function() {
			this.perfMessageTimer && (clearInterval(this.perfMessageTimer), this.perfMessageTimer = 0),
			this.perfMessageElement.remove()
		},
		c);
		function c(e, t) {
			var i = r.call(this) || this;
			return i.player = e,
			i.containerElement = t,
			i.perfMessageTimer = 0,
			i.updatePerfMessage = function() {
				var e = i.player.perf,
				t = e.videoDescription,
				n = e.videoBufferedTime,
				r = e.videoPlayingFps;
				t && (i.perfMessageElement.innerHTML = "\n            <p>\n                resolution: " + t.width + "x" + t.height + "@" + t.fps + ", codec: " + a.VideoEncoding[t.encoding] + "<br />\n                bufferedTime: " + (n || 0).toFixed(2) + "s <br />\n                fps: " + r.toFixed(2) + "\n            </p>")
			},
			i.perfMessageElement = document.createElement("div"),
			i.init(),
			i
		}
		n.MsePlayerMonitoringBoard = s
	},
	{
		"../../io/yd/avformat": 56,
		"./board": 80,
		tslib: 49
	}],
	83 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.WasmPlayerMonitoringBoard = void 0;
		var r, i = e("tslib"),
		v = e("../../io/yd/avformat"),
		o = e("./board"),
		a = (r = o.MonitoringBoard, i.__extends(s, r), s.prototype.init = function() {
			var t = this;
			this.perfMessageElement.style.position = "absolute",
			this.perfMessageElement.style.zIndex = "10",
			this.perfMessageElement.style.top = "10px",
			this.perfMessageElement.style.left = "10px",
			this.perfMessageElement.style.color = "#ffffff",
			this.perfMessageElement.style.lineHeight = "1.2em",
			this.perfMessageElement.style.padding = "5px",
			this.perfMessageElement.style.background = "rgba(100,100,100,0.6)",
			this.perfMessageElement.style.display = "none",
			this.containerElement.appendChild(this.perfMessageElement),
			document.addEventListener("keydown",
			function(e) {
				"F6" === e.key && e.ctrlKey && (e.preventDefault(), t.perfMessageTimer ? (clearInterval(t.perfMessageTimer), t.perfMessageTimer = 0, t.perfMessageElement.textContent = "", t.perfMessageElement.style.display = "none") : (t.perfMessageElement.style.display = "block", t.updatePerfMessage(), t.perfMessageTimer = setInterval(t.updatePerfMessage, 1e3)))
			})
		},
		s.prototype.detory = function() {
			this.perfMessageTimer && (clearInterval(this.perfMessageTimer), this.perfMessageTimer = 0),
			this.perfMessageElement.remove()
		},
		s);
		function s(e, t) {
			var y = r.call(this) || this;
			return y.player = e,
			y.containerElement = t,
			y.perfMessageTimer = 0,
			y.updatePerfMessage = function() {
				var e = y.player.perf,
				t = e.videoDescription,
				n = e.decode,
				r = n.queue,
				i = n.elapsed,
				o = e.render,
				a = o.queue,
				s = o.elapsed;
				if (10 < i.length && 10 < s.length) {
					for (var c = s[0].begin, u = s[s.length - 1].begin, l = 1e3 * (s.length - 1) / (u - c), d = 0, p = 0; p < i.length; p++) d += i[p].elapsed;
					var h = d / i.length,
					f = 0;
					for (p = 0; p < s.length; p++) f += s[p].elapsed;
					var g = f / s.length;
					y.perfMessageElement.innerHTML = "\n            <p>\n                resolution: " + ((null == t ? void 0 : t.width) || 0) + "x" + ((null == t ? void 0 : t.height) || 0) + "@" + ((null == t ? void 0 : t.fps) || 0) + ", codec: " + v.VideoEncoding[t.encoding] + "<br />\n                decode queue len: " + r + ", render queue len: " + a + "<br />\n                avg decode elapsed: " + h.toFixed(2) + "ms, last decode elapsed: " + i[i.length - 1].elapsed.toFixed(2) + "<br />\n                avg render elapsed: " + g.toFixed(2) + "ms, last render elapsed: " + s[s.length - 1].elapsed.toFixed(2) + "<br />\n                avg fps: " + l.toFixed(2) + "\n            </p>"
				}
			},
			y.perfMessageElement = document.createElement("div"),
			y.init(),
			y
		}
		n.WasmPlayerMonitoringBoard = a
	},
	{
		"../../io/yd/avformat": 56,
		"./board": 80,
		tslib: 49
	}],
	84 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r, i = e("tslib"),
		o = e("../plugin"),
		s = e("../plugin-events"),
		c = e("./operation-bar"),
		a = (r = o.PlugIn, i.__extends(u, r), Object.defineProperty(u.prototype, "name", {
			get: function() {
				return "operationBar"
			},
			enumerable: !1,
			configurable: !0
		}), u.prototype.init = function() {
			var a = this;
			this.addListener(s.PlugInEvent.playerViewCreated,
			function(e, t) {
				var n = new c.OperationBar(a.pluginManager, e, t);
				a.bars.push({
					context: e,
					operationBar: n
				})
			}),
			this.addListener(s.PlugInEvent.playCoreCreated,
			function(e) {
				for (var t = 0,
				n = a.bars; t < n.length; t++) {
					var r = n[t],
					i = r.context,
					o = r.operationBar;
					i === e && o.handlePlayCoreCreated()
				}
			}),
			this.addListener(s.PlugInEvent.playCoreDestroyed,
			function(e) {
				for (var t = 0,
				n = a.bars; t < n.length; t++) {
					var r = n[t],
					i = r.context,
					o = r.operationBar;
					i === e && o.handlePlayCoreDestroyed()
				}
			})
		},
		u);
		function u() {
			var e = null !== r && r.apply(this, arguments) || this;
			return e.bars = [],
			e
		}
		n.
	default = a
	},
	{
		"../plugin": 89,
		"../plugin-events": 87,
		"./operation-bar": 85,
		tslib: 49
	}],
	85 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.OperationBar = void 0;
		var c = e("../plugin-command"),
		s = "control control-play",
		u = "control control-volume",
		l = "control control-screenshot",
		r = (i.prototype.createElement = function(e) {
			return document.createElement(e)
		},
		i.prototype.createOperateBtn = function() {
			var e = this.createElement("div"),
			t = this.createElement("div"),
			n = this.createElement("div"),
			r = this.createElement("div");
			e.className = "ydplayer-video-operate disabled",
			t.className = s,
			n.className = u,
			r.className = l;
			var i = this.createSliderOptins(),
			o = i[0],
			a = i[1];
			return o.appendChild(a),
			n.appendChild(o),
			e.appendChild(t),
			e.appendChild(n),
			e.appendChild(r),
			t.onclick = this.onPlayOperate,
			n.onclick = this.onVolumeOperate,
			r.onclick = this.onScreenshotOperate,
			a.onclick = this.sliderClickChange,
			a.oninput = this.sliderChange,
			[e, t, n, r, a]
		},
		i.prototype.createSliderOptins = function() {
			var e = this.createElement("div"),
			t = this.createElement("input");
			return e.className = "sliderWarp",
			t.className = "slider",
			t.setAttribute("value", "0"),
			t.setAttribute("type", "range"),
			t.setAttribute("name", "points"),
			t.setAttribute("autocomplete", "off"),
			t.setAttribute("min", "0"),
			t.setAttribute("max", "100"),
			t.setAttribute("step", "10"),
			[e, t]
		},
		i);
		function i(e, t, n) {
			var r = this;
			this.onPlayOperate = function(e) {
				e.preventDefault(),
				e.stopPropagation(),
				r.wrapper.classList.add("none"),
				r.wrapper.style.bottom = "-45px;",
				r.pluginManager.emit(c.PlugInCommand.CMD_STOP, r.context)
			},
			this.onVolumeOperate = function(e) {
				e.preventDefault(),
				e.stopPropagation(),
				-1 !== r.volumeControl.className.indexOf("open") ? (r.volumeSlider.value = "0", r.volumeControl.classList.remove("open"), r.context.core && (r.context.core.muted = !0)) : (r.volumeControl.classList.add("open"), r.volumeSlider.value = "100", r.context.core && (r.context.core.muted = !1))
			},
			this.sliderClickChange = function(e) {
				e.preventDefault(),
				e.stopPropagation();
				var t = e.target;
				t.value = t.value,
				r.context.core && (r.context.core.volume = Number(t.value) / 100),
				0 < Number(t.value) ? (r.context.core && (r.context.core.muted = !1), r.volumeControl.classList.add("open")) : (r.context.core && (r.context.core.muted = !0), r.volumeControl.classList.remove("open"))
			},
			this.sliderChange = function(e) {
				e.preventDefault(),
				e.stopPropagation();
				var t = e.target;
				t.value = t.value,
				r.context.core && (r.context.core.volume = Number(t.value) / 100),
				0 < Number(t.value) ? (r.context.core && (r.context.core.muted = !1), r.volumeControl.classList.add("open")) : (r.context.core && (r.context.core.muted = !0), r.volumeControl.classList.remove("open"))
			},
			this.onScreenshotOperate = function(e) {
				e.preventDefault(),
				e.stopPropagation(),
				r.pluginManager.emit(c.PlugInCommand.CMD_CAPTURE, r.context)
			},
			this.onVideoViewMouseenter = function(e) {
				r.wrapper && !r.wrapper.classList.contains("disabled") && (r.wrapper.classList.remove("none"), r.wrapper.style.bottom = "1px")
			},
			this.onVideoViewMouseleave = function(e) {
				r.wrapper && !r.wrapper.classList.contains("disabled") && (r.wrapper.style.bottom = "-45px", r.wrapper.classList.add("none"))
			},
			this.handlePlayCoreCreated = function() {
				var e, t;
				null === (e = r.context.core) || void 0 === e || e.addListener("playing",
				function() {
					var e, t;
					r.wrapper.classList.remove("disabled"),
					(null === (e = r.context.core) || void 0 === e ? void 0 : e.muted) ? (r.volumeSlider.value = "0", r.volumeControl.classList.remove("open")) : (r.volumeSlider.value = ((null === (t = r.context.core) || void 0 === t ? void 0 : t.volume) || 100) + "", r.volumeControl.classList.add("open"))
				}),
				null === (t = r.context.core) || void 0 === t || t.addListener("stop",
				function() {
					r.wrapper.classList.add("disabled")
				})
			},
			this.handlePlayCoreDestroyed = function() {},
			this.pluginManager = e,
			this.context = t,
			this.view = n;
			var i = this.createOperateBtn(),
			o = i[0],
			a = (i[1], i[2]),
			s = (i[3], i[4]);
			this.wrapper = o,
			this.volumeControl = a,
			this.volumeSlider = s,
			o.addEventListener("mousedown",
			function(e) {
				e.stopPropagation()
			}),
			n.addEventListener("mouseenter", this.onVideoViewMouseenter),
			n.addEventListener("mouseleave", this.onVideoViewMouseleave),
			n.appendChild(o)
		}
		n.OperationBar = r
	},
	{
		"../plugin-command": 86
	}],
	86 : [function(e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlugInCommand = void 0,
		(r = n.PlugInCommand || (n.PlugInCommand = {})).CMD_CAPTURE = "CMD_CAPTURE",
		r.CMD_STOP = "CMD_STOP",
		r.CMD_STOP_ALL = "CMD_STOP_ALL"
	},
	{}],
	87 : [function(e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlugInEvent = void 0,
		(r = n.PlugInEvent || (n.PlugInEvent = {})).playerViewCreated = "playerViewCreated",
		r.playerViewRemoved = "playerViewRemoved",
		r.playCoreCreated = "playCoreCreated",
		r.playCoreDestroyed = "playCoreDestroyed",
		r.beforeOpenStreaming = "beforeOpenStreaming",
		r.beforeOpenPlayback = "beforeOpenPlayback",
		r.internalPlayerCreated = "internalPlayerCreated",
		r.internalPlayerDestroying = "internalPlayerDestoryed"
	},
	{}],
	88 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlugInManager = void 0;
		var i = e("tslib"),
		r = e("events"),
		o = e("../utils/log");
		e("./spinner"),
		e("./operationBar"),
		e("./locate3d"),
		e("./monitoring");
		var a = (Object.defineProperty(s.prototype, "registeredPlugins", {
			get: function() {
				return this.allPlugins
			},
			enumerable: !1,
			configurable: !0
		}), s.prototype.register = function() {
			for (var e = this,
			t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			for (var r = [], i = 0, o = t; i < o.length; i++) {
				var a = o[i];
				if ("string" == typeof a) {
					var s = this.registerPlugInByName(a);
					r.push(s)
				} else this.registerPlugIn(a)
			}
			return Promise.all(r).then(function() {
				return e.allPlugins
			})
		},
		s.prototype.registerPlugIn = function(e) {
			this.allPlugins.indexOf(e) < 0 && (this.allPlugins.push(e), e.init())
		},
		s.prototype.registerPlugInByName = function(n) {
			var r = this;
			return Promise.resolve().then(function() {
				return e("./" + n)
			}).then(function(e) {
				if ("function" != typeof e.
			default) throw new Error("插件 " + n + " 缺少模块默认导出（export default）");
				var t = new e.
			default;
				return r.registerPlugIn(t),
				t
			},
			function(e) {
				o.Log.error(r.LOG_TAG, "error where register plugin: " + n, e)
			})
		},
		s.prototype.emit = function(e) {
			for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			return (t = this.eventEmitter).emit.apply(t, i.__spreadArray([e], n))
		},
		s.prototype.addListener = function(e, t) {
			this.eventEmitter.addListener(e, t)
		},
		s.prototype.on = function(e, t) {
			this.eventEmitter.on(e, t)
		},
		s.prototype.once = function(e, t) {
			this.eventEmitter.once(e, t)
		},
		s.prototype.removeListener = function(e, t) {
			this.eventEmitter.removeListener(e, t)
		},
		s.Default = new s, s);
		function s() {
			this.LOG_TAG = "[PlugInManager] > ",
			this.allPlugins = [],
			this.eventEmitter = new r.EventEmitter
		}
		n.PlugInManager = a
	},
	{
		"../utils/log": 109,
		"./locate3d": 78,
		"./monitoring": 81,
		"./operationBar": 84,
		"./spinner": 90,
		events: 45,
		tslib: 49
	}],
	89 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.PlugIn = void 0;
		var r = e("./plugin-manager"),
		i = (o.prototype.addListener = function(e, t) {
			this.pluginManager.addListener(e, t)
		},
		o.prototype.on = function(e, t) {
			this.pluginManager.on(e, t)
		},
		o.prototype.once = function(e, t) {
			this.pluginManager.once(e, t)
		},
		o.prototype.removeListener = function(e, t) {
			this.pluginManager.removeListener(e, t)
		},
		o);
		function o() {
			this.pluginManager = r.PlugInManager.Default
		}
		n.PlugIn = i
	},
	{
		"./plugin-manager": 88
	}],
	90 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r, i = e("tslib"),
		o = e("../plugin"),
		a = e("../../lib/spin"),
		s = e("../plugin-events"),
		c = (r = o.PlugIn, i.__extends(u, r), Object.defineProperty(u.prototype, "name", {
			get: function() {
				return "spinner"
			},
			enumerable: !1,
			configurable: !0
		}), u.prototype.init = function() {
			this.addListener(s.PlugInEvent.beforeOpenStreaming,
			function(e) {
				new l(e).beginPlayingSpinner()
			}),
			this.addListener(s.PlugInEvent.beforeOpenPlayback,
			function(e) {
				new l(e).beginPlayingSpinner()
			})
		},
		u);
		function u() {
			return null !== r && r.apply(this, arguments) || this
		}
		n.
	default = c;
		var l = (d.prototype.showSpinner = function(e) {
			this.spinner.spin(),
			e.view.appendChild(this.spinner.el)
		},
		d.prototype.hideSpinner = function(e) {
			e.view.removeChild(this.spinner.el),
			this.spinner.stop()
		},
		d.prototype.beginPlayingSpinner = function() {
			var n = this,
			r = this.context,
			i = new Date,
			o = !1,
			a = function(e) {
				if ("string" != typeof e || "video" == e) {
					if (!o) {
						o = !0;
						var t = new Date;
						console.warn(n.LOG_TAG, "loading time: " + (t.getTime() - i.getTime()) + "ms")
					}
					n.hideSpinner(r),
					r.core && (r.core.removeListener("destroy", a), r.core.removeListener("playing", a))
				}
			};
			r.core && (r.core.addListener("destroy", a), r.core.once("playing", a)),
			this.showSpinner(r)
		},
		d);
		function d(e) {
			this.LOG_TAG = "[SpinnerWrapper] > ",
			this.context = e;
			var t = new a.Spinner({
				scale: .4,
				top: "0px",
				left: "0px",
				bottom: "0px",
				right: "0px"
			});
			this.spinner = t
		}
	},
	{
		"../../lib/spin": 71,
		"../plugin": 89,
		"../plugin-events": 87,
		tslib: 49
	}],
	91 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.MSE = void 0;
		var h = e("../utils/log"),
		r = 0,
		i = (Object.defineProperty(o.prototype, "bufferedTime", {
			get: function() {
				return 0 < this.videoElement.buffered.length ? this.videoElement.buffered.end(this.videoElement.buffered.length - 1) - this.videoElement.currentTime: 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(o, "errorNotes", {
			get: function() {
				var e;
				return (e = {})[MediaError.MEDIA_ERR_ABORTED] = "fetching process aborted by user",
				e[MediaError.MEDIA_ERR_NETWORK] = "error occurred when downloading",
				e[MediaError.MEDIA_ERR_DECODE] = "error occurred when decoding",
				e[MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED] = "audio/video source not supported",
				e
			},
			enumerable: !1,
			configurable: !0
		}), o.prototype.bindVideoSrc = function() {
			this.mediaSourceURL || (this.mediaSourceURL = URL.createObjectURL(this.mediaSource)),
			this.videoElement.src != this.mediaSourceURL && (this.videoElement.src = this.mediaSourceURL)
		},
		o.prototype.addTrack = function(e, t) {
			var n = this,
			r = e,
			i = this;
			if (!MediaSource || !MediaSource.isTypeSupported(t)) throw new Error("Your browser is not supported: " + t);
			if (i.queues[r] = [], null != i.onMediaSourceReady) return i.onMediaSourceReady.then(function() {
				h.Log.debug(i.LOG_TAG, "[" + n._id + "] media source buffers: " + i.mediaSource.sourceBuffers.length + ", activeSourceBuffers: " + n.mediaSource.activeSourceBuffers.length);
				var e = i.mediaSource.addSourceBuffer(t); (i.sourceBuffers[r] = e).addEventListener("abort",
				function() {
					h.Log.debug(i.LOG_TAG, r + " sourceBuffer abort!")
				}),
				e.addEventListener("error",
				function(e) {
					h.Log.error(i.LOG_TAG, "[" + i._id + "] " + r + " sourceBuffer errored!", e)
				}),
				e.onupdateend = function() {
					i.tryAppendToSourceBuffer(r)
				},
				i.mediaReady = !0,
				i.tryAppendToSourceBuffer(r)
			})
		},
		o.prototype.removeTrack = function(t) {
			var n = this;
			if (null !== n.onMediaSourceReady) return n.onMediaSourceReady.then(function() {
				var e = n.sourceBuffers[t];
				if (e) {
					try {
						n.mediaSource.removeSourceBuffer(e),
						h.Log.debug(n.LOG_TAG, "[" + n._id + "] " + t + " track has been removed")
					} catch(e) {
						h.Log.error(n.LOG_TAG, "an error occurred when remove source buffer", e)
					}
					delete n.sourceBuffers[t]
				}
			})
		},
		o.prototype.logSourceBuffer = function(e) {
			h.Log.debug(this.LOG_TAG, "[" + this._id + "] SourceBuffer updateend");
			for (var t = 0,
			n = this.sourceBuffers[e].buffered.length; t < n; t++) h.Log.debug(this.LOG_TAG, "[" + this._id + "]     " + e + ".sourceBuffer.buffered [" + t + "]: " + this.sourceBuffers[e].buffered.start(t) + ", " + this.sourceBuffers[e].buffered.end(t));
			for (t = 0, n = this.videoElement.buffered.length; t < n; t++) h.Log.debug(this.LOG_TAG, "[" + this._id + "]     " + e + ".videoEl.buffered [" + t + "]: " + this.videoElement.buffered.start(t) + ", " + this.videoElement.buffered.end(t));
			h.Log.debug(this.LOG_TAG, "[" + this._id + "]   " + e + ".videoEl.currentTime=" + this.videoElement.currentTime)
		},
		o.prototype.appendToSourceBuffer = function(e, t) {
			try {
				this.sourceBuffers[e].appendBuffer(t)
			} catch(e) {
				throw new Error("MSE Error occured while appending buffer. " + e.name + ": " + e.message)
			}
		},
		o.prototype.autoCleanupSourceBuffer = function(e) {
			var t = this.videoElement.currentTime,
			n = this.sourceBuffers[e];
			if (n) {
				for (var r = n.buffered,
				i = !1,
				o = [], a = 0; a < r.length; a++) {
					var s = r.start(a),
					c = r.end(a);
					if (s <= t && t < c + 3) {
						if (180 <= t - s) {
							i = !0;
							var u = t - 120;
							o.push({
								start: s,
								end: u
							})
						}
					} else c < t && (i = !0, o.push({
						start: s,
						end: c
					}))
				}
				if (i && !n.updating) for (var l = 0,
				d = o; l < d.length; l++) {
					var p = d[l];
					s = p.start,
					c = p.end,
					n.remove(s, c),
					h.Log.debug(this.LOG_TAG, "[" + this._id + "] cleanup buffers: track=" + e + ", start=" + s + ", end=" + c)
				}
			}
		},
		o.prototype.enqueueBuffer = function(e, t, n) {
			n ? this.queues[e].splice(0, 0, t) : this.queues[e].push(t)
		},
		o.prototype.tryAppendToSourceBuffer = function(e) {
			var t = this.sourceBuffers[e];
			if (this.mediaReady && t && !t.updating) {
				var n = this.queues[e].shift();
				n && this.appendToSourceBuffer(e, n)
			}
		},
		o.prototype.feed = function(e, t, n) {
			this.enqueueBuffer(e, t, n),
			this.autoCleanupSourceBuffer(e),
			this.tryAppendToSourceBuffer(e)
		},
		o.prototype.play = function() {
			var t = this,
			e = this;
			if (e.bindVideoSrc(), e.videoElement.paused) if (e.mediaReady && 2 < e.videoElement.readyState) {
				h.Log.debug(this.LOG_TAG, "[" + this._id + "] video element readyState=" + e.videoElement.readyState);
				var n = e.videoElement.play();
				n && n.
				catch(function(e) {
					h.Log.error(t.LOG_TAG, "[" + t._id + '] exception, name="' + e.name + '", code=' + e.code + ', message="' + e.message + '"')
				})
			} else {
				var r = function() {
					e.play(),
					e.videoElement.removeEventListener("canplaythrough", r)
				};
				e.videoElement.addEventListener("canplaythrough", r)
			}
		},
		o.prototype.clear = function() {
			h.Log.debug(this.LOG_TAG, "[" + this._id + "] clearing mse...");
			var i = this;
			for (var e in i.queues) {
				var t = i.queues[e];
				t && t.splice(0, t.length)
			}
			function n(e) {
				var t = e,
				r = i.sourceBuffers[t];
				if (r) {
					var n = new Promise(function(t, e) {
						if (r.updating) r.onupdateend = null,
						r.onupdateend = function() {
							for (var e = 0; e < r.buffered.length; e++) {
								if (r) try {
									r.remove(r.buffered.start(e), r.buffered.end(e))
								} catch(e) {
									throw new Error("[" + i._id + "]" + e)
								}
								t()
							}
						};
						else for (var n = 0; n < r.buffered.length; n++) r.remove(r.buffered.start(n), r.buffered.end(n)),
						t()
					});
					o.push(n)
				}
			}
			var o = [];
			for (var r in i.sourceBuffers) n(r);
			return Promise.all(o)
		},
		o.prototype.destroy = function(r) {
			h.Log.debug(this.LOG_TAG, "[" + this._id + "] destroy mse...");
			var i = this;
			return i.mediaReady = !1,
			i.clear().then(function() {
				for (var e in i.sourceBuffers) {
					var t = i.sourceBuffers[e];
					if (t) {
						h.Log.debug(i.LOG_TAG, "[" + i._id + "] removeSourceBuffer, track=" + e);
						try {
							i.mediaSource.removeSourceBuffer(t)
						} catch(e) {
							h.Log.error(i.LOG_TAG, "an error occurred when remove source buffer", e)
						}
					}
					delete i.sourceBuffers[e]
				}
				var n = i.mediaSourceURL;
				n && (r || (i.videoElement.src = ""), URL.revokeObjectURL(n))
			})
		},
		o);
		function o(e) {
			if (this.LOG_TAG = "[MSE] > ", this._id = r++, this.mediaSourceURL = null, this.sourceBuffers = {},
			this.mediaReady = !1, this.queues = {},
			this.onMediaSourceReady = null, this.resolved = !1, !MediaSource) throw new Error("Your browser is not supported MediaSource");
			this.videoElement = e,
			this.mediaSource = new MediaSource;
			var n = this;
			n.resolved = !1,
			n.onMediaSourceReady = new Promise(function(e, t) {
				n.mediaSource.addEventListener("sourceopen",
				function() {
					h.Log.debug(n.LOG_TAG, "[" + n._id + "] Media source opened: " + n.mediaSource.readyState),
					n.resolved || (n.resolved = !0, e())
				}),
				n.mediaSource.addEventListener("sourceclose",
				function() {
					h.Log.debug(n.LOG_TAG, "[" + n._id + "] Media Source closed"),
					n.mediaReady = !1
				}),
				n.mediaSource.addEventListener("sourceended",
				function() {
					h.Log.debug(n.LOG_TAG, "[" + n._id + "] Media Source ended"),
					n.mediaReady = !1
				})
			})
		}
		n.MSE = i
	},
	{
		"../utils/log": 109
	}],
	92 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.TrackId = void 0;
		var r = 1,
		i = (o.getTrackId = function() {
			return r++
		},
		o);
		function o() {}
		n.TrackId = i
	},
	{}],
	93 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.AACParser = void 0;
		var r = (Object.defineProperty(a, "samplingRateMap", {
			get: function() {
				return [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a, "getAACHeaderData", {
			get: function() {
				return a.aacHeader
			},
			enumerable: !1,
			configurable: !0
		}), a.getHeaderLength = function(e) {
			return 1 & e[1] ? 7 : 9
		},
		a.getFrameLength = function(e) {
			return (3 & e[3]) << 11 | e[4] << 3 | (224 & e[5]) >>> 5
		},
		a.isAACPattern = function(e) {
			return 255 === e[0] && 240 == (240 & e[1]) && 0 == (6 & e[1])
		},
		a.extractAAC = function(e) {
			var t, n, r = 0,
			i = e.byteLength,
			o = [];
			for (a.isAACPattern(e) || console.error("Invalid ADTS audio format"), t = a.getHeaderLength(e), a.aacHeader || (a.aacHeader = e.slice(0, t)); r < i;) n = a.getFrameLength(e),
			o.push(e.subarray(t, n)),
			e = e.slice(n),
			r += n;
			return o
		},
		a);
		function a() {}
		n.AACParser = r
	},
	{}],
	94 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.AACRemuxer = void 0;
		var s = e("./mp4-generator"),
		o = e("./aac-parser"),
		r = e("./TrackId"),
		a = e("../utils/log"),
		i = (c.prototype.setAACConfig = function() {
			var e, t, n, r = new Uint8Array(2),
			i = o.AACParser.getAACHeaderData;
			i && (e = 1 + ((192 & i[2]) >>> 6), t = (60 & i[2]) >>> 2, n = (1 & i[2]) << 2, n |= (192 & i[3]) >>> 6, r[0] = e << 3, r[0] |= (14 & t) >> 1, r[1] |= (1 & t) << 7, r[1] |= n << 3, this.audioTrack.codec = "mp4a.40." + e, this.audioTrack.channelCount = n, this.audioTrack.config = r, this.audioReadyToDecode = !0)
		},
		c.prototype.reset = function() {
			this.audioReadyToDecode = !1,
			this.audioTrack.codec = "",
			this.audioTrack.channelCount = 0,
			this.audioTrack.config = void 0,
			this.audioTrack.timescale = this.timescale
		},
		c.prototype.initSegment = function(e) {
			s.
		default.types || s.
		default.init();
			var t = s.
		default.moov(e),
			n = new Uint8Array(s.
		default.FTYPAVC1.byteLength + t.byteLength);
			return n.set(s.
		default.FTYPAVC1),
			n.set(t, s.
		default.FTYPAVC1.byteLength),
			n
		},
		c.prototype.fragmentSegment = function(e, t, n, r) {
			var i = s.
		default.moof(e, t, n),
			o = s.
		default.mdat(r),
			a = new Uint8Array(i.byteLength + o.byteLength);
			return a.set(i, 0),
			a.set(o, i.byteLength),
			a
		},
		c.prototype.flush = function() {
			if (this.frameCount % this.framePerFragment == 0 && this.audioReadyToDecode && 0 < this.audioSamples.length) {
				if (!this.audioInitialized && this.audioReadyToDecode && 0 < this.audioSamples.length) {
					this.audioTrack.duration = 1 / 0;
					var e = this.initSegment([this.audioTrack]);
					null != this.onInitSegment && this.onInitSegment(e, "audio", 'audio/mp4; codecs="mp4a.40.2"'),
					this.audioInitialized = !0
				}
				if (this.audioInitialized) {
					var t = this.audioDts,
					n = this.getPayload();
					if (!n || !n.byteLength) throw new Error("Nothing payload!");
					this.audioDts = this.nextAudioDts;
					for (var r = 0,
					i = 0,
					o = this.audioTrack.samples.length; i < o; i++) r += this.audioTrack.samples[i].duration;
					this.audioTrack.duration = r,
					e = this.fragmentSegment(this.audioSeq, t, this.audioTrack, n),
					null != this.onMediaSegment && this.onMediaSegment(e, t, "audio"),
					this.audioSeq++,
					this.audioTrack.duration = 0,
					this.audioTrack.len = 0,
					this.audioTrack.samples = []
				}
			}
		},
		c.prototype.getPayload = function() {
			if (this.audioReadyToDecode && this.audioSamples.length) {
				var e, t, n = new Uint8Array(this.audioTrack.len),
				r = 0,
				i = this.audioTrack.samples;
				for (this.audioDts = this.nextAudioDts; this.audioSamples.length;) {
					var o = this.audioSamples.shift();
					o && ((t = o.duration) <= 0 ? (a.Log.debug(this.LOG_TAG, "remuxer: invalid sample duration at DTS: " + this.nextAudioDts + " :" + t), this.audioTrack.len -= o.size) : (this.nextAudioDts += t, e = {
						size: o.size,
						duration: t,
						cts: 0,
						flags: {
							isLeading: 0,
							isDependedOn: 0,
							hasRedundancy: 0,
							degradPrio: 0,
							dependsOn: 1
						}
					},
					n.set(o.units, r), r += o.size, i.push(e)))
				}
				if (i.length) return n
			}
		},
		c.prototype.remux = function(e, t) {
			var n = e.byteLength;
			this.audioSamples.push({
				units: e,
				dts: 0,
				size: n,
				duration: t
			}),
			this.audioTrack.len += n,
			this.frameCount++,
			this.audioReadyToDecode || this.setAACConfig()
		},
		c.prototype.feed = function(e, t) {
			for (var n = 0,
			r = o.AACParser.extractAAC(e); n < r.length; n++) {
				var i = r[n];
				this.remux(i, t)
			}
			this.flush()
		},
		c.prototype.destroy = function() {
			this.reset()
		},
		c);
		function c(e, t) {
			void 0 === t && (t = 1e3),
			this.LOG_TAG = "[AACRemuxer] > ",
			this.frameCount = 0,
			this.timescale = 1e3,
			this.audioInitialized = !1,
			this.audioReadyToDecode = !1,
			this.audioDts = 0,
			this.nextAudioDts = 0,
			this.onready = null,
			this.onInitSegment = null,
			this.onMediaSegment = null,
			this.framePerFragment = e,
			this.timescale = t,
			this.audioTrack = {
				id: r.TrackId.getTrackId(),
				type: "audio",
				channelCount: 0,
				len: 0,
				fragmented: !0,
				timescale: this.timescale,
				duration: this.timescale,
				samples: [],
				codec: ""
			},
			this.audioSeq = 1,
			this.audioSamples = []
		}
		n.AACRemuxer = i
	},
	{
		"../utils/log": 109,
		"./TrackId": 92,
		"./aac-parser": 93,
		"./mp4-generator": 101
	}],
	95 : [function(e, t, n) {
		"use strict";
		var r, i;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.H264NALU = n.H264NALUType = void 0,
		(i = r = n.H264NALUType || (n.H264NALUType = {}))[i.NDR = 1] = "NDR",
		i[i.SLICE_PART_A = 2] = "SLICE_PART_A",
		i[i.SLICE_PART_B = 3] = "SLICE_PART_B",
		i[i.SLICE_PART_C = 4] = "SLICE_PART_C",
		i[i.IDR = 5] = "IDR",
		i[i.SEI = 6] = "SEI",
		i[i.SPS = 7] = "SPS",
		i[i.PPS = 8] = "PPS",
		i[i.DELIMITER = 9] = "DELIMITER",
		i[i.EOSEQ = 10] = "EOSEQ",
		i[i.EOSTR = 11] = "EOSTR",
		i[i.FILTER = 12] = "FILTER",
		i[i.STAP_A = 24] = "STAP_A",
		i[i.STAP_B = 25] = "STAP_B",
		i[i.FU_A = 28] = "FU_A",
		i[i.FU_B = 29] = "FU_B";
		var o = (Object.defineProperty(a.prototype, "nri", {
			get: function() {
				return this._nri
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a.prototype, "type", {
			get: function() {
				return this._type
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a.prototype, "size", {
			get: function() {
				return this.data.byteLength
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a.prototype, "rawData", {
			get: function() {
				return this.data
			},
			enumerable: !1,
			configurable: !0
		}), a.prototype.isKeyframe = function() {
			return this._type === r.IDR
		},
		a.prototype.getData = function() {
			return new DataView(this.data.buffer, this.data.byteOffset).setUint32(0, this.size - 4),
			this.data
		},
		a);
		function a(e) {
			this._nri = (96 & e[4]) >> 5,
			this._type = 31 & e[4],
			this.data = e
		}
		n.H264NALU = o
	},
	{}],
	96 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.H264Parser = void 0;
		var v = e("../lib/exp-golomb"),
		r = (A.skipScalingList = function(e, t) {
			for (var n = 8,
			r = 8,
			i = 0; i < t; i++) 0 !== r && (r = (n + e.readEG() + 256) % 256),
			n = 0 === r ? n: r
		},
		A.readSPS = function(e) {
			var t, n, r, i, o, a, s = new v.ExpGolomb(e),
			c = 0,
			u = 0,
			l = 0,
			d = 0,
			p = 1;
			if (s.readUByte(), t = s.readUByte(), s.readBits(5), s.skipBits(3), s.readUByte(), s.skipUEG(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
				var h = s.readUEG();
				if (3 === h && s.skipBits(1), s.skipUEG(), s.skipUEG(), s.skipBits(1), s.readBoolean()) {
					a = 3 !== h ? 8 : 12;
					for (var f = 0; f < a; ++f) s.readBoolean() && A.skipScalingList(s, f < 6 ? 16 : 64)
				}
			}
			s.skipUEG();
			var g = s.readUEG();
			if (0 === g) s.readUEG();
			else if (1 === g) for (s.skipBits(1), s.skipEG(), s.skipEG(), n = s.readUEG(), f = 0; f < n; ++f) s.skipEG();
			if (s.skipUEG(), s.skipBits(1), r = s.readUEG(), i = s.readUEG(), 0 === (o = s.readBits(1)) && s.skipBits(1), s.skipBits(1), s.readBoolean() && (c = s.readUEG(), u = s.readUEG(), l = s.readUEG(), d = s.readUEG()), s.readBoolean()) {
				if (s.readBoolean()) {
					var y = void 0;
					switch (s.readUByte()) {
					case 1:
						y = [1, 1];
						break;
					case 2:
						y = [12, 11];
						break;
					case 3:
						y = [10, 11];
						break;
					case 4:
						y = [16, 11];
						break;
					case 5:
						y = [40, 33];
						break;
					case 6:
						y = [24, 11];
						break;
					case 7:
						y = [20, 11];
						break;
					case 8:
						y = [32, 11];
						break;
					case 9:
						y = [80, 33];
						break;
					case 10:
						y = [18, 11];
						break;
					case 11:
						y = [15, 11];
						break;
					case 12:
						y = [64, 33];
						break;
					case 13:
						y = [160, 99];
						break;
					case 14:
						y = [4, 3];
						break;
					case 15:
						y = [3, 2];
						break;
					case 16:
						y = [2, 1];
						break;
					case 255:
						y = [s.readUByte() << 8 | s.readUByte(), s.readUByte() << 8 | s.readUByte()]
					}
					y && (p = y[0] / y[1])
				}
				s.readBoolean() && s.skipBits(1),
				s.readBoolean() && (s.skipBits(4), s.readBoolean() && s.skipBits(24)),
				s.readBoolean() && (s.skipUEG(), s.skipUEG()),
				s.readBoolean() && (s.readUInt(), s.readUInt(), s.readBoolean())
			}
			return {
				width: Math.ceil((16 * (r + 1) - 2 * c - 2 * u) * p),
				height: (2 - o) * (i + 1) * 16 - (o ? 2 : 4) * (l + d)
			}
		},
		A);
		function A() {}
		n.H264Parser = r
	},
	{
		"../lib/exp-golomb": 67
	}],
	97 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.H264Remuxer = void 0;
		var r = e("./track"),
		o = e("./h264-parser"),
		s = e("./mp4-generator"),
		i = e("./nalu-parser"),
		a = e("./h264-nalu"),
		c = e("./TrackId"),
		u = e("../utils/log"),
		l = (d.prototype.destroy = function() {
			this.videoReadyToDecode = !1,
			this.track.sps = [],
			this.track.pps = [],
			this.videoSamples = []
		},
		d.prototype.resetVideoTrack = function() {
			this.videoReadyToDecode = !1,
			this.track.sps = [],
			this.track.pps = []
		},
		d.prototype.parseSPS = function(e) {
			var t = o.H264Parser.readSPS(new Uint8Array(e));
			this.track.width = t.width,
			this.track.height = t.height,
			this.track.sps = [e.slice(0)],
			this.track.codec = "avc1.";
			for (var n = new DataView(e.buffer, e.byteOffset + 1, 4), r = 0; r < 3; ++r) {
				var i = n.getUint8(r).toString(16);
				i.length < 2 && (i = "0" + i),
				this.track.codec += i
			}
		},
		d.prototype.parsePPS = function(e) {
			this.track.pps = [e.slice(0)]
		},
		d.prototype.parseNAL = function(e) {
			if (!e) return ! 1;
			var t = !1;
			switch (e.type) {
			case a.H264NALUType.NDR:
			case a.H264NALUType.IDR:
				t = !0;
				break;
			case a.H264NALUType.PPS:
				this.track.pps && 0 != this.track.pps.length || (this.parsePPS(e.getData().subarray(4)), !this.videoReadyToDecode && this.track.pps && 0 < this.track.pps.length && this.track.sps && 0 < this.track.sps.length && (this.videoReadyToDecode = !0));
				break;
			case a.H264NALUType.SPS:
				this.track.sps && 0 != this.track.sps.length || (this.parseSPS(e.getData().subarray(4)), !this.videoReadyToDecode && this.track.pps && 0 < this.track.pps.length && this.track.sps && 0 < this.track.sps.length && (this.videoReadyToDecode = !0));
				break;
			case a.H264NALUType.DELIMITER:
				u.Log.debug(this.LOG_TAG, "DELIMITER - ignoing and disable HD mode for live channel");
				break;
			case a.H264NALUType.SEI:
				u.Log.debug(this.LOG_TAG, "SEI - ignoing")
			}
			return t
		},
		d.prototype.getPayload = function() {
			if (this.videoReadyToDecode && this.videoSamples.length) {
				for (var e = new Uint8Array(this.track.len), t = 0, n = this.track.samples; 0 < this.videoSamples.length;) {
					var r = this.videoSamples.shift();
					if (r) {
						var i = r.units,
						o = r.duration;
						if (o <= 0) throw new Error("remuxer: invalid sample duration at DTS: " + this.nextVideoDts + " :" + o);
						this.nextVideoDts += o;
						for (var a = {
							size: r.size,
							duration: o,
							cts: 0,
							flags: {
								isLeading: 0,
								isDependedOn: 0,
								hasRedundancy: 0,
								degradPrio: 0,
								isNonSync: r.keyFrame ? 0 : 1,
								dependsOn: r.keyFrame ? 2 : 1
							}
						},
						s = 0, c = i; s < c.length; s++) {
							var u = c[s];
							e.set(u.getData(), t),
							t += u.size
						}
						n.push(a)
					}
				}
				if (n.length) return e
			}
		},
		d.prototype.initSegment = function(e) {
			s.
		default.types || s.
		default.init();
			var t = s.
		default.moov(e),
			n = new Uint8Array(s.
		default.FTYPAVC1.byteLength + t.byteLength);
			return n.set(s.
		default.FTYPAVC1),
			n.set(t, s.
		default.FTYPAVC1.byteLength),
			n
		},
		d.prototype.fragmentSegment = function(e, t, n, r) {
			var i = s.
		default.moof(e, t, n),
			o = s.
		default.mdat(r),
			a = new Uint8Array(i.byteLength + o.byteLength);
			return a.set(i, 0),
			a.set(o, i.byteLength),
			a
		},
		d.prototype.flush = function() {
			if (this.frameCount % this.framePerFragment == 0 && this.videoReadyToDecode && 0 < this.videoSamples.length) {
				if (!this.videoInitialized && this.videoReadyToDecode && 0 < this.videoSamples.length) {
					this.track.duration = 1 / 0;
					var e = this.initSegment([this.track]);
					null != this.onInitSegment && this.onInitSegment(e, "video", 'video/mp4; codecs="avc1.42E01E"'),
					this.videoInitialized = !0
				}
				if (this.videoInitialized) {
					var t = this.videoDts,
					n = this.getPayload();
					if (!n || !n.byteLength) throw new Error("Nothing payload!");
					this.videoDts = this.nextVideoDts;
					for (var r = 0,
					i = 0,
					o = this.track.samples.length; i < o; i++) r += this.track.samples[i].duration;
					this.track.duration = r,
					e = this.fragmentSegment(this.videoSeq, t, this.track, n),
					null != this.onMediaSegment && this.onMediaSegment(e, t, "video"),
					this.videoSeq++,
					this.track.duration = 0,
					this.track.len = 0,
					this.track.samples = []
				}
			}
		},
		d.prototype.remux = function(e, t) {
			for (var n = [], r = 0, i = !1, o = 0, a = e; o < a.length; o++) {
				var s = a[o];
				this.parseNAL(s) && (n.push(s), r += s.size, i = i || s.isKeyframe(), this.frameCount++)
			}
			0 < n.length && this.videoReadyToDecode && (this.track.len += r, this.videoSamples.push({
				units: n,
				size: r,
				dts: 0,
				keyFrame: i,
				duration: t
			}))
		},
		d.prototype.feed = function(e, t) {
			var n = i.NALUParser.extractNALU(e);
			if (n && 0 < n.length) {
				var r = n.map(function(e) {
					return new a.H264NALU(e)
				});
				this.remux(r, t),
				this.flush()
			}
		},
		d);
		function d(e, t) {
			void 0 === t && (t = 1e3),
			this.LOG_TAG = "[H264Remuxer] > ",
			this.videoReadyToDecode = !1,
			this.nextVideoDts = 0,
			this.videoDts = 0,
			this.videoInitialized = !1,
			this.frameCount = 0,
			this.onInitSegment = null,
			this.onMediaSegment = null,
			this.videoSeq = 1,
			this.timescale = t,
			this.framePerFragment = e,
			this.track = {
				id: c.TrackId.getTrackId(),
				type: "video",
				len: 0,
				codec: "",
				fragmented: !0,
				sps: [],
				pps: [],
				width: 0,
				height: 0,
				timescale: this.timescale,
				duration: this.timescale,
				samples: [],
				streamType: r.TrackStreamType.AVC
			},
			this.videoSamples = []
		}
		n.H264Remuxer = l
	},
	{
		"../utils/log": 109,
		"./TrackId": 92,
		"./h264-nalu": 95,
		"./h264-parser": 96,
		"./mp4-generator": 101,
		"./nalu-parser": 102,
		"./track": 103
	}],
	98 : [function(e, t, n) {
		"use strict";
		var r, i;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.HEVCNALUnit = n.HEVCNALUnitType = void 0,
		(i = r = n.HEVCNALUnitType || (n.HEVCNALUnitType = {}))[i.HEVC_NAL_TRAIL_N = 0] = "HEVC_NAL_TRAIL_N",
		i[i.HEVC_NAL_TRAIL_R = 1] = "HEVC_NAL_TRAIL_R",
		i[i.HEVC_NAL_TSA_N = 2] = "HEVC_NAL_TSA_N",
		i[i.HEVC_NAL_TSA_R = 3] = "HEVC_NAL_TSA_R",
		i[i.HEVC_NAL_STSA_N = 4] = "HEVC_NAL_STSA_N",
		i[i.HEVC_NAL_STSA_R = 5] = "HEVC_NAL_STSA_R",
		i[i.HEVC_NAL_RADL_N = 6] = "HEVC_NAL_RADL_N",
		i[i.HEVC_NAL_RADL_R = 7] = "HEVC_NAL_RADL_R",
		i[i.HEVC_NAL_RASL_N = 8] = "HEVC_NAL_RASL_N",
		i[i.HEVC_NAL_RASL_R = 9] = "HEVC_NAL_RASL_R",
		i[i.HEVC_NAL_VCL_N10 = 10] = "HEVC_NAL_VCL_N10",
		i[i.HEVC_NAL_VCL_R11 = 11] = "HEVC_NAL_VCL_R11",
		i[i.HEVC_NAL_VCL_N12 = 12] = "HEVC_NAL_VCL_N12",
		i[i.HEVC_NAL_VCL_R13 = 13] = "HEVC_NAL_VCL_R13",
		i[i.HEVC_NAL_VCL_N14 = 14] = "HEVC_NAL_VCL_N14",
		i[i.HEVC_NAL_VCL_R15 = 15] = "HEVC_NAL_VCL_R15",
		i[i.HEVC_NAL_BLA_W_LP = 16] = "HEVC_NAL_BLA_W_LP",
		i[i.HEVC_NAL_BLA_W_RADL = 17] = "HEVC_NAL_BLA_W_RADL",
		i[i.HEVC_NAL_BLA_N_LP = 18] = "HEVC_NAL_BLA_N_LP",
		i[i.HEVC_NAL_IDR_W_RADL = 19] = "HEVC_NAL_IDR_W_RADL",
		i[i.HEVC_NAL_IDR_N_LP = 20] = "HEVC_NAL_IDR_N_LP",
		i[i.HEVC_NAL_CRA_NUT = 21] = "HEVC_NAL_CRA_NUT",
		i[i.HEVC_NAL_RSV_IRAP_VCL22 = 22] = "HEVC_NAL_RSV_IRAP_VCL22",
		i[i.HEVC_NAL_RSV_IRAP_VCL23 = 23] = "HEVC_NAL_RSV_IRAP_VCL23",
		i[i.HEVC_NAL_RSV_VCL24 = 24] = "HEVC_NAL_RSV_VCL24",
		i[i.HEVC_NAL_RSV_VCL25 = 25] = "HEVC_NAL_RSV_VCL25",
		i[i.HEVC_NAL_RSV_VCL26 = 26] = "HEVC_NAL_RSV_VCL26",
		i[i.HEVC_NAL_RSV_VCL27 = 27] = "HEVC_NAL_RSV_VCL27",
		i[i.HEVC_NAL_RSV_VCL28 = 28] = "HEVC_NAL_RSV_VCL28",
		i[i.HEVC_NAL_RSV_VCL29 = 29] = "HEVC_NAL_RSV_VCL29",
		i[i.HEVC_NAL_RSV_VCL30 = 30] = "HEVC_NAL_RSV_VCL30",
		i[i.HEVC_NAL_RSV_VCL31 = 31] = "HEVC_NAL_RSV_VCL31",
		i[i.HEVC_NAL_VPS = 32] = "HEVC_NAL_VPS",
		i[i.HEVC_NAL_SPS = 33] = "HEVC_NAL_SPS",
		i[i.HEVC_NAL_PPS = 34] = "HEVC_NAL_PPS",
		i[i.HEVC_NAL_AUD = 35] = "HEVC_NAL_AUD",
		i[i.HEVC_NAL_EOS_NUT = 36] = "HEVC_NAL_EOS_NUT",
		i[i.HEVC_NAL_EOB_NUT = 37] = "HEVC_NAL_EOB_NUT",
		i[i.HEVC_NAL_FD_NUT = 38] = "HEVC_NAL_FD_NUT",
		i[i.HEVC_NAL_SEI_PREFIX = 39] = "HEVC_NAL_SEI_PREFIX",
		i[i.HEVC_NAL_SEI_SUFFIX = 40] = "HEVC_NAL_SEI_SUFFIX",
		i[i.HEVC_NAL_RSV_NVCL41 = 41] = "HEVC_NAL_RSV_NVCL41",
		i[i.HEVC_NAL_RSV_NVCL42 = 42] = "HEVC_NAL_RSV_NVCL42",
		i[i.HEVC_NAL_RSV_NVCL43 = 43] = "HEVC_NAL_RSV_NVCL43",
		i[i.HEVC_NAL_RSV_NVCL44 = 44] = "HEVC_NAL_RSV_NVCL44",
		i[i.HEVC_NAL_RSV_NVCL45 = 45] = "HEVC_NAL_RSV_NVCL45",
		i[i.HEVC_NAL_RSV_NVCL46 = 46] = "HEVC_NAL_RSV_NVCL46",
		i[i.HEVC_NAL_RSV_NVCL47 = 47] = "HEVC_NAL_RSV_NVCL47",
		i[i.HEVC_NAL_UNSPEC48 = 48] = "HEVC_NAL_UNSPEC48",
		i[i.HEVC_NAL_UNSPEC49 = 49] = "HEVC_NAL_UNSPEC49",
		i[i.HEVC_NAL_UNSPEC50 = 50] = "HEVC_NAL_UNSPEC50",
		i[i.HEVC_NAL_UNSPEC51 = 51] = "HEVC_NAL_UNSPEC51",
		i[i.HEVC_NAL_UNSPEC52 = 52] = "HEVC_NAL_UNSPEC52",
		i[i.HEVC_NAL_UNSPEC53 = 53] = "HEVC_NAL_UNSPEC53",
		i[i.HEVC_NAL_UNSPEC54 = 54] = "HEVC_NAL_UNSPEC54",
		i[i.HEVC_NAL_UNSPEC55 = 55] = "HEVC_NAL_UNSPEC55",
		i[i.HEVC_NAL_UNSPEC56 = 56] = "HEVC_NAL_UNSPEC56",
		i[i.HEVC_NAL_UNSPEC57 = 57] = "HEVC_NAL_UNSPEC57",
		i[i.HEVC_NAL_UNSPEC58 = 58] = "HEVC_NAL_UNSPEC58",
		i[i.HEVC_NAL_UNSPEC59 = 59] = "HEVC_NAL_UNSPEC59",
		i[i.HEVC_NAL_UNSPEC60 = 60] = "HEVC_NAL_UNSPEC60",
		i[i.HEVC_NAL_UNSPEC61 = 61] = "HEVC_NAL_UNSPEC61",
		i[i.HEVC_NAL_UNSPEC62 = 62] = "HEVC_NAL_UNSPEC62",
		i[i.HEVC_NAL_UNSPEC63 = 63] = "HEVC_NAL_UNSPEC63";
		var o = (Object.defineProperty(a.prototype, "type", {
			get: function() {
				return this._type
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a.prototype, "size", {
			get: function() {
				return this.data.byteLength
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(a.prototype, "rawData", {
			get: function() {
				return this.data
			},
			enumerable: !1,
			configurable: !0
		}), a.prototype.isKeyframe = function() {
			switch (this._type) {
			case r.HEVC_NAL_BLA_N_LP:
			case r.HEVC_NAL_BLA_W_LP:
			case r.HEVC_NAL_BLA_W_RADL:
			case r.HEVC_NAL_CRA_NUT:
			case r.HEVC_NAL_IDR_N_LP:
			case r.HEVC_NAL_IDR_W_RADL:
				return ! 0;
			default:
				return ! 1
			}
		},
		a.prototype.isIdrPic = function() {
			var e = this._type;
			return e === r.HEVC_NAL_IDR_W_RADL || e === r.HEVC_NAL_IDR_N_LP
		},
		a.prototype.isRapPic = function() {
			var e = this._type;
			return 16 <= e && e <= 23
		},
		a.prototype.getData = function() {
			return new DataView(this.data.buffer, this.data.byteOffset).setUint32(0, this.size - 4),
			this.data
		},
		a);
		function a(e) {
			this._type = (126 & e[4]) >> 1,
			this.data = e
		}
		n.HEVCNALUnit = o
	},
	{}],
	99 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var r = (i.prototype.getByte = function() {
			var e = this.data.byteLength - this.bytesAvailable,
			t = Math.min(1, this.bytesAvailable),
			n = new Uint8Array(1);
			return n.set(this.data.subarray(e, e + t)),
			this.bitsAvailable = 8 * t,
			this.bytesAvailable -= t,
			new DataView(n.buffer).getUint8(0)
		},
		i.prototype.read = function(e) {
			for (; this.bitsInCache < e;) {
				var t = !0,
				n = this.getByte();
				t && 3 === n && 0 === this.firstByte && 0 == (255 & this.cache) && (n = this.getByte(), t = !1),
				this.cache = this.cache << 8 | this.firstByte,
				this.firstByte = n,
				this.bitsInCache += 8
			}
		},
		i.prototype.skipBits = function(e) {
			this.read(e),
			this.bitsInCache = this.bitsInCache - e
		},
		i.prototype.readBits = function(e) {
			this.read(e);
			var t = this.bitsInCache - e,
			n = this.firstByte >> t;
			return n |= this.cache << 8 - t,
			n &= (1 << e) - 1,
			this.bitsInCache = t,
			n
		},
		i.prototype.readUE = function() {
			var e, t = 0;
			for (e = this.readBits(1); 0 === e;) t++,
			e = this.readBits(1);
			return (1 << t) - 1 + this.readBits(t)
		},
		i.prototype.readProfileTierLevel = function(e) {
			this.skipBits(2),
			this.skipBits(1),
			this.skipBits(5),
			this.skipBits(16),
			this.skipBits(16),
			this.skipBits(1),
			this.skipBits(1),
			this.skipBits(1),
			this.skipBits(1),
			this.skipBits(16),
			this.skipBits(16),
			this.skipBits(12),
			this.skipBits(8);
			for (var t = [], n = [], r = 0; r < e; r++) t[r] = this.readBits(1),
			n[r] = this.readBits(1);
			0 !== e && this.skipBits(2 * (8 - e));
			for (var i = 0; i < e; i++) 0 !== t[i] && (this.skipBits(2), this.skipBits(1), this.skipBits(5), this.skipBits(16), this.skipBits(16), this.skipBits(4), this.skipBits(16), this.skipBits(16), this.skipBits(12)),
			0 !== n[i] && this.skipBits(8)
		},
		i.prototype.readSPS = function() {
			var e, t, n, r;
			return this.readBits(8),
			this.readBits(8),
			this.readBits(4),
			e = this.readBits(3),
			this.readBits(1),
			this.readProfileTierLevel(e),
			this.readUE(),
			3 === (t = this.readUE()) && this.skipBits(1),
			n = this.readUE(),
			r = this.readUE(),
			1 === this.readBits(1) && (this.readUE(), this.readUE(), this.readUE(), this.readUE()),
			{
				width: n,
				height: r,
				chromaFormatIdc: t,
				bitDepthLumaMinus8: this.readUE(),
				bitDepthChromaMinus8: this.readUE()
			}
		},
		i);
		function i(e) {
			this.data = e,
			this.bytesAvailable = this.data.byteLength,
			this.bitsAvailable = 0,
			this.firstByte = 255,
			this.cache = 255,
			this.bitsInCache = 0
		}
		n.
	default = r
	},
	{}],
	100 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.HEVCRemuxer = void 0;
		var o = e("./track"),
		s = e("./mp4-generator"),
		i = e("./nalu-parser"),
		a = e("./TrackId"),
		r = e("../utils/log"),
		c = e("./hevc-nalu"),
		u = e("./hevc-parser"),
		l = (d.prototype.destroy = function() {
			this.videoReadyToDecode = !1,
			this.track.sps = [],
			this.track.pps = [],
			this.videoSamples = []
		},
		d.prototype.resetVideoTrack = function() {
			this.videoReadyToDecode = !1,
			this.track.sps = [],
			this.track.pps = []
		},
		d.prototype.parseSPS = function(e) {
			var t = new u.
		default(e).readSPS();
			this.track.width = t.width,
			this.track.height = t.height,
			this.track.sps = [e.slice(0)];
			for (var n = new DataView(e.buffer, e.byteOffset + 1, 4), r = 0; r < 3; ++r) {
				var i = n.getUint8(r).toString(16);
				i.length < 2 && (i = "0" + i)
			}
		},
		d.prototype.parsePPS = function(e) {
			this.track.pps = [e.slice(0)]
		},
		d.prototype.parseNAL = function(e) {
			if (!e) return ! 1;
			var t = !1;
			switch (e.type) {
			case c.HEVCNALUnitType.HEVC_NAL_VPS:
				this.track.vps && 0 !== this.track.vps.length || (this.track.vps = [e.rawData.subarray(4)]),
				t = !0;
				break;
			case c.HEVCNALUnitType.HEVC_NAL_PPS:
				this.track.pps && 0 != this.track.pps.length || (this.parsePPS(e.getData().subarray(4)), !this.videoReadyToDecode && this.track.pps && 0 < this.track.pps.length && this.track.sps && 0 < this.track.sps.length && (this.videoReadyToDecode = !0)),
				t = !0;
				break;
			case c.HEVCNALUnitType.HEVC_NAL_SPS:
				this.track.sps && 0 != this.track.sps.length || (this.parseSPS(e.getData().subarray(4)), !this.videoReadyToDecode && this.track.pps && 0 < this.track.pps.length && this.track.sps && 0 < this.track.sps.length && (this.videoReadyToDecode = !0)),
				t = !0;
				break;
			case c.HEVCNALUnitType.HEVC_NAL_SEI_PREFIX:
			case c.HEVCNALUnitType.HEVC_NAL_SEI_SUFFIX:
				r.Log.debug(this.LOG_TAG, "SEI - ignoing");
				break;
			case c.HEVCNALUnitType.HEVC_NAL_TRAIL_N:
			case c.HEVCNALUnitType.HEVC_NAL_TRAIL_R:
			case c.HEVCNALUnitType.HEVC_NAL_TSA_N:
			case c.HEVCNALUnitType.HEVC_NAL_TSA_R:
			case c.HEVCNALUnitType.HEVC_NAL_STSA_N:
			case c.HEVCNALUnitType.HEVC_NAL_STSA_R:
			case c.HEVCNALUnitType.HEVC_NAL_RADL_N:
			case c.HEVCNALUnitType.HEVC_NAL_RADL_R:
			case c.HEVCNALUnitType.HEVC_NAL_RASL_N:
			case c.HEVCNALUnitType.HEVC_NAL_RASL_R:
			case c.HEVCNALUnitType.HEVC_NAL_BLA_W_LP:
			case c.HEVCNALUnitType.HEVC_NAL_BLA_W_RADL:
			case c.HEVCNALUnitType.HEVC_NAL_BLA_N_LP:
			case c.HEVCNALUnitType.HEVC_NAL_IDR_W_RADL:
			case c.HEVCNALUnitType.HEVC_NAL_IDR_N_LP:
			case c.HEVCNALUnitType.HEVC_NAL_CRA_NUT:
				t = !0;
			default:
				t = !0
			}
			return t
		},
		d.prototype.getPayload = function() {
			if (this.videoReadyToDecode && this.videoSamples.length) {
				for (var e = new Uint8Array(this.track.len), t = 0, n = this.track.samples; 0 < this.videoSamples.length;) {
					var r = this.videoSamples.shift();
					if (r) {
						var i = r.units,
						o = r.duration;
						if (o <= 0) throw new Error("remuxer: invalid sample duration at DTS: " + this.nextVideoDts + " :" + o);
						this.nextVideoDts += o;
						for (var a = {
							size: r.size,
							duration: o,
							cts: 0,
							flags: {
								isLeading: 0,
								isDependedOn: 0,
								hasRedundancy: 0,
								degradPrio: 0,
								isNonSync: r.keyFrame ? 0 : 1,
								dependsOn: r.keyFrame ? 2 : 1
							}
						},
						s = 0, c = i; s < c.length; s++) {
							var u = c[s];
							e.set(u.getData(), t),
							t += u.size
						}
						n.push(a)
					}
				}
				if (n.length) return e
			}
		},
		d.prototype.initSegment = function(e) {
			s.
		default.types || s.
		default.init();
			var t = s.
		default.moov(e),
			n = new Uint8Array(s.
		default.FTYPHEV1.byteLength + t.byteLength);
			return n.set(s.
		default.FTYPHEV1),
			n.set(t, s.
		default.FTYPHEV1.byteLength),
			n
		},
		d.prototype.fragmentSegment = function(e, t, n, r) {
			var i = s.
		default.moof(e, t, n),
			o = s.
		default.mdat(r),
			a = new Uint8Array(i.byteLength + o.byteLength);
			return a.set(i, 0),
			a.set(o, i.byteLength),
			a
		},
		d.prototype.flush = function() {
			if (this.frameCount % this.framePerFragment == 0 && this.videoReadyToDecode && 0 < this.videoSamples.length) {
				if (!this.videoInitialized && this.videoReadyToDecode && 0 < this.videoSamples.length) {
					this.track.duration = 1 / 0;
					var e = this.initSegment([this.track]);
					null != this.onInitSegment && this.onInitSegment(e, "video", "hev1.1.6.L93.B0"),
					this.videoInitialized = !0
				}
				if (this.videoInitialized) {
					var t = this.videoDts,
					n = this.getPayload();
					if (!n || !n.byteLength) throw new Error("Nothing payload!");
					this.videoDts = this.nextVideoDts;
					for (var r = 0,
					i = 0,
					o = this.track.samples.length; i < o; i++) r += this.track.samples[i].duration;
					this.track.duration = r,
					e = this.fragmentSegment(this.videoSeq, t, this.track, n),
					null != this.onMediaSegment && this.onMediaSegment(e, t, "video"),
					this.videoSeq++,
					this.track.duration = 0,
					this.track.len = 0,
					this.track.samples = []
				}
			}
		},
		d.prototype.remux = function(e, t) {
			for (var n = [], r = 0, i = !1, o = 0, a = e; o < a.length; o++) {
				var s = a[o];
				this.parseNAL(s) && (n.push(s), r += s.size, i = i || s.isKeyframe(), this.frameCount++)
			}
			0 < n.length && this.videoReadyToDecode && (this.track.len += r, this.videoSamples.push({
				units: n,
				size: r,
				dts: 0,
				keyFrame: i,
				duration: t
			}))
		},
		d.prototype.feed = function(e, t) {
			var n = i.NALUParser.extractNALU(e);
			if (n && 0 < n.length) {
				var r = n.map(function(e) {
					return new c.HEVCNALUnit(e)
				});
				this.remux(r, t),
				this.flush()
			}
		},
		d);
		function d(e, t, n, r, i) {
			void 0 === r && (r = "hev1.1.6.L93.B0"),
			void 0 === i && (i = 1e3),
			this.LOG_TAG = "[HEVCRemuxer] > ",
			this.videoReadyToDecode = !1,
			this.nextVideoDts = 0,
			this.videoDts = 0,
			this.videoInitialized = !1,
			this.frameCount = 0,
			this.onInitSegment = null,
			this.onMediaSegment = null,
			this.videoSeq = 1,
			this.timescale = i,
			this.framePerFragment = e,
			this.track = {
				id: a.TrackId.getTrackId(),
				type: "video",
				len: 0,
				codec: r,
				fragmented: !0,
				sps: [],
				pps: [],
				width: t,
				height: n,
				timescale: this.timescale,
				duration: this.timescale,
				samples: [],
				streamType: o.TrackStreamType.HEVC
			},
			this.videoSamples = []
		}
		n.HEVCRemuxer = l
	},
	{
		"../utils/log": 109,
		"./TrackId": 92,
		"./hevc-nalu": 98,
		"./hevc-parser": 99,
		"./mp4-generator": 101,
		"./nalu-parser": 102,
		"./track": 103
	}],
	101 : [function(e, t, n) {
		"use strict";
		function r(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r)
			}
		}
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = (function(e, t, n) {
			return t && r(e.prototype, t),
			n && r(e, n),
			e
		} (p, null, [{
			key: "init",
			value: function() {
				var e;
				for (e in p.types = {
					avc1: [],
					avcC: [],
					hvcC: [],
					hev1: [],
					btrt: [],
					dinf: [],
					dref: [],
					esds: [],
					ftyp: [],
					hdlr: [],
					mdat: [],
					mdhd: [],
					mdia: [],
					mfhd: [],
					minf: [],
					moof: [],
					moov: [],
					mp4a: [],
					mvex: [],
					mvhd: [],
					sdtp: [],
					stbl: [],
					stco: [],
					stsc: [],
					stsd: [],
					stsz: [],
					stts: [],
					tfdt: [],
					tfhd: [],
					traf: [],
					trak: [],
					trun: [],
					trex: [],
					tkhd: [],
					vmhd: [],
					smhd: []
				}) p.types.hasOwnProperty(e) && (p.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
				var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
				n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
				p.HDLR_TYPES = {
					video: t,
					audio: n
				};
				var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
				i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
				p.STTS = p.STSC = p.STCO = i,
				p.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				p.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
				p.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
				p.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
				var o = new Uint8Array([105, 115, 111, 109]),
				a = new Uint8Array([0, 0, 0, 1]),
				s = new Uint8Array([97, 118, 99, 49]),
				c = new Uint8Array([104, 101, 118, 49]);
				p.FTYPAVC1 = p.box(p.types.ftyp, o, a, o, s),
				p.FTYPHEV1 = p.box(p.types.ftyp, o, a, o, c),
				p.DINF = p.box(p.types.dinf, p.box(p.types.dref, r))
			}
		},
		{
			key: "box",
			value: function(e) {
				for (var t, n = Array.prototype.slice.call(arguments, 1), r = 8, i = n.length, o = i; i--;) r += n[i].byteLength;
				for ((t = new Uint8Array(r))[0] = r >> 24 & 255, t[1] = r >> 16 & 255, t[2] = r >> 8 & 255, t[3] = 255 & r, t.set(e, 4), i = 0, r = 8; i < o; i++) t.set(n[i], r),
				r += n[i].byteLength;
				return t
			}
		},
		{
			key: "hdlr",
			value: function(e) {
				return p.box(p.types.hdlr, p.HDLR_TYPES[e])
			}
		},
		{
			key: "mdat",
			value: function(e) {
				return p.box(p.types.mdat, e)
			}
		},
		{
			key: "mdhd",
			value: function(e, t) {
				return t *= e,
				p.box(p.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 85, 196, 0, 0]))
			}
		},
		{
			key: "mdia",
			value: function(e) {
				return p.box(p.types.mdia, p.mdhd(e.timescale, e.duration), p.hdlr(e.type), p.minf(e))
			}
		},
		{
			key: "mfhd",
			value: function(e) {
				return p.box(p.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
			}
		},
		{
			key: "minf",
			value: function(e) {
				return "audio" === e.type ? p.box(p.types.minf, p.box(p.types.smhd, p.SMHD), p.DINF, p.stbl(e)) : p.box(p.types.minf, p.box(p.types.vmhd, p.VMHD), p.DINF, p.stbl(e))
			}
		},
		{
			key: "moof",
			value: function(e, t, n) {
				return p.box(p.types.moof, p.mfhd(e), p.traf(n, t))
			}
		},
		{
			key: "moov",
			value: function(e) {
				for (var t = e.length,
				n = []; t--;) n[t] = p.trak(e[t]);
				return p.box.apply(null, [p.types.moov, p.mvhd(e[0].timescale, e[0].duration)].concat(n).concat(p.mvex(e)))
			}
		},
		{
			key: "mvex",
			value: function(e) {
				for (var t = e.length,
				n = []; t--;) n[t] = p.trex(e[t]);
				return p.box.apply(null, [p.types.mvex].concat(n))
			}
		},
		{
			key: "mvhd",
			value: function(e, t) {
				t *= e;
				var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
				return p.box(p.types.mvhd, n)
			}
		},
		{
			key: "sdtp",
			value: function(e) {
				var t, n, r = e.samples || [],
				i = new Uint8Array(4 + r.length);
				for (n = 0; n < r.length; n++) t = r[n].flags,
				i[n + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
				return p.box(p.types.sdtp, i)
			}
		},
		{
			key: "stbl",
			value: function(e) {
				return p.box(p.types.stbl, p.stsd(e), p.box(p.types.stts, p.STTS), p.box(p.types.stsc, p.STSC), p.box(p.types.stsz, p.STSZ), p.box(p.types.stco, p.STCO))
			}
		},
		{
			key: "hev1",
			value: function(e) {
				var t, n, r, i = [],
				o = [],
				a = [];
				for (i.push(0), i.push(0), i.push(e.vps.length), t = 0; t < e.vps.length; t++) r = (n = e.vps[t]).byteLength,
				i.push(r >>> 8 & 255),
				i.push(255 & r),
				i = i.concat(Array.prototype.slice.call(n));
				for (o.push(0), o.push(0), o.push(e.sps.length), t = 0; t < e.sps.length; t++) r = (n = e.sps[t]).byteLength,
				o.push(r >>> 8 & 255),
				o.push(255 & r),
				o = o.concat(Array.prototype.slice.call(n));
				for (a.push(0), a.push(0), a.push(e.pps.length), t = 0; t < e.pps.length; t++) r = (n = e.pps[t]).byteLength,
				a.push(r >>> 8 & 255),
				a.push(255 & r),
				a = a.concat(Array.prototype.slice.call(n));
				var s = e.vps.length + e.sps.length + e.pps.length;
				if (o.length < 18) throw new Error("sps length: " + o.length + " is too short.");
				var c = p.box(p.types.hvcC, new Uint8Array([1, o[6], o[7], o[8], o[9], o[10], o[11], o[12], o[13], o[14], o[15], o[16], o[17], 240, 0, 252 | 3 & e.chromaFormatIdc, 248 | 7 & e.bitDepthLumaMinus8, 248 | 7 & e.bitDepthChromaMinus8, 0, 0, 0, s].concat(i).concat(o).concat(a)));
				return p.box(p.types.hev1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.width >> 8 & 255, 255 & e.width, e.height >> 8 & 255, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), c, p.box(p.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
			}
		},
		{
			key: "avc1",
			value: function(e) {
				var t, n, r, i = [],
				o = [];
				for (t = 0; t < e.sps.length; t++) r = (n = e.sps[t]).byteLength,
				i.push(r >>> 8 & 255),
				i.push(255 & r),
				i = i.concat(Array.prototype.slice.call(n));
				for (t = 0; t < e.pps.length; t++) r = (n = e.pps[t]).byteLength,
				o.push(r >>> 8 & 255),
				o.push(255 & r),
				o = o.concat(Array.prototype.slice.call(n));
				var a = p.box(p.types.avcC, new Uint8Array([1, i[3], i[4], i[5], 255, 224 | e.sps.length].concat(i).concat([e.pps.length]).concat(o))),
				s = e.width,
				c = e.height;
				return p.box(p.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, 255 & s, c >> 8 & 255, 255 & c, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, p.box(p.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
			}
		},
		{
			key: "esds",
			value: function(e) {
				var t = e.config.byteLength,
				n = new Uint8Array(26 + t + 3);
				return n.set([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, t]),
				n.set(e.config, 26),
				n.set([6, 1, 2], 26 + t),
				n
			}
		},
		{
			key: "mp4a",
			value: function(e) {
				var t = e.audiosamplerate;
				return p.box(p.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]), p.box(p.types.esds, p.esds(e)))
			}
		},
		{
			key: "stsd",
			value: function(e) {
				return "audio" === e.type ? p.box(p.types.stsd, p.STSD, p.mp4a(e)) : 36 === e.streamType ? p.box(p.types.stsd, p.STSD, p.hev1(e)) : p.box(p.types.stsd, p.STSD, p.avc1(e))
			}
		},
		{
			key: "tkhd",
			value: function(e) {
				var t = e.id,
				n = e.duration * e.timescale,
				r = e.width,
				i = e.height;
				return p.box(p.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
			}
		},
		{
			key: "traf",
			value: function(e, t) {
				var n = p.sdtp(e),
				r = e.id;
				return p.box(p.types.traf, p.box(p.types.tfhd, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r])), p.box(p.types.tfdt, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t])), p.trun(e, n.length + 16 + 16 + 8 + 16 + 8 + 8), n)
			}
		},
		{
			key: "trak",
			value: function(e) {
				return e.duration = e.duration || 4294967295,
				p.box(p.types.trak, p.tkhd(e), p.mdia(e))
			}
		},
		{
			key: "trex",
			value: function(e) {
				var t = e.id;
				return p.box(p.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
			}
		},
		{
			key: "trun",
			value: function(e, t) {
				var n, r, i, o, a, s, c = e.samples || [],
				u = c.length,
				l = 12 + 16 * u,
				d = new Uint8Array(l);
				for (t += 8 + l, d.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), n = 0; n < u; n++) i = (r = c[n]).duration,
				o = r.size,
				a = r.flags,
				s = r.cts,
				d.set([i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, a.isLeading << 2 | a.dependsOn, a.isDependedOn << 6 | a.hasRedundancy << 4 | a.paddingValue << 1 | a.isNonSync, 61440 & a.degradPrio, 15 & a.degradPrio, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s], 12 + 16 * n);
				return p.box(p.types.trun, d)
			}
		},
		{
			key: "initSegment",
			value: function(e) {
				p.types || p.init();
				var t, n = p.moov(e);
				return "video" === e[0].type && 36 === e[0].streamType ? ((t = new Uint8Array(p.FTYPHEV1.byteLength + n.byteLength)).set(p.FTYPHEV1), t.set(n, p.FTYPHEV1.byteLength)) : ((t = new Uint8Array(p.FTYPAVC1.byteLength + n.byteLength)).set(p.FTYPAVC1), t.set(n, p.FTYPAVC1.byteLength)),
				t
			}
		}]), p);
		function p() { !
			function(e, t) {
				if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
			} (this, p)
		}
		n.
	default = i
	},
	{}],
	102 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.NALUParser = void 0;
		var r = (i.extractNALU = function(e) {
			for (var t, n = 0,
			r = e.byteLength,
			i = 0,
			o = [], a = 0; n < r;) switch (t = e[n++], i) {
			case 0:
				0 === t && (i = 1);
				break;
			case 1:
				i = 0 === t ? 2 : 0;
				break;
			case 2:
			case 3:
				if (0 === t) i = 3;
				else if (1 === t && n < r) {
					if (a) {
						var s = e.subarray(a - 4, n - i - 1);
						o.push(s)
					}
					a = n,
					i = 0
				} else i = 0
			}
			return a && (s = e.subarray(a - 4, r), o.push(s)),
			o
		},
		i);
		function i() {}
		n.NALUParser = r
	},
	{}],
	103 : [function(e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.TrackStreamType = void 0,
		(r = n.TrackStreamType || (n.TrackStreamType = {}))[r.AVC = 27] = "AVC",
		r[r.HEVC = 36] = "HEVC"
	},
	{}],
	104 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.currentScriptPath = n.currentScriptSrc = n.setCurrentScriptSrc = n.updateCurrentScriptSrc = void 0;
		var i = void 0;
		function o(e) {
			i = e
		}
		function r() {
			return void 0 !== document.currentScript && document.currentScript ? document.currentScript.src: void 0 !== i ? i: void 0
		}
		n.updateCurrentScriptSrc = function(e) {
			if (e && !i) for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
				var r = t.item(n);
				if (r && r.src && 0 <= r.src.indexOf(e)) {
					o(r.src);
					break
				}
			}
		},
		n.setCurrentScriptSrc = o,
		n.currentScriptSrc = r,
		n.currentScriptPath = function() {
			var e = r();
			if (e) return e.lastIndexOf("/") === e.length - 1 ? e: e.substring(0, e.lastIndexOf("/") + 1)
		}
	},
	{}],
	105 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.CycleBuffer = void 0;
		var r = (Object.defineProperty(i.prototype, "length", {
			get: function() {
				return this._length
			},
			enumerable: !1,
			configurable: !0
		}), i.prototype.push = function(e) {
			var t = e.byteLength,
			n = this._capacity,
			r = this._front;
			if (this._back, this._length + t > n) throw "buffer is full.";
			if (r + t < n) this._buffer.set(e, r),
			this._front = r + t;
			else {
				var i = n - r,
				o = e.slice(0, i),
				a = t - i,
				s = e.slice(i, i + a);
				this._buffer.set(o, r),
				this._buffer.set(s, 0),
				this._front = a
			}
			this._length += t
		},
		i.prototype.pop = function(e) {
			var t = this._capacity,
			n = this._front,
			r = this._back;
			if (e > this._length) throw "the buffer is not enough element for pop.";
			if (r + e <= (r < n ? n: t)) return this._back += e,
			this._length -= e,
			this._buffer.slice(r, e + r);
			var i = t - r,
			o = this._buffer.slice(r, i + r),
			a = e - i,
			s = this._buffer.slice(0, a),
			c = new Uint8Array(e);
			return c.set(o, 0),
			c.set(s, i),
			this._back = (r + e) % t,
			this._length -= e,
			c
		},
		i);
		function i(e) {
			this._capacity = e,
			this._front = 0,
			this._back = 0,
			this._length = 0,
			this._buffer = new Uint8Array(e)
		}
		n.CycleBuffer = r
	},
	{}],
	106 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.DateUtils = void 0;
		var r = (i.parseDate = function(e) {
			return null == e ? new Date(0) : new Date(e)
		},
		i.toDateTimeString = function(e, t) {
			void 0 === t && (t = "yyyy-MM-dd hh:mm:ss");
			var i = {
				M: e.getMonth() + 1,
				d: e.getDate(),
				D: e.getDate(),
				H: e.getHours(),
				h: e.getHours(),
				m: e.getMinutes(),
				s: e.getSeconds(),
				Y: e.getFullYear(),
				y: e.getFullYear()
			};
			return t.replace(/([Yy]+|M+|[Dd]+|[Hh]+|m+|s+)/g,
			function(e) {
				var t = i[e.slice( - 1)],
				n = t.toString(),
				r = Math.max(e.length, n.length);
				return n.length == r ? n: ("0000" + t).slice( - r)
			})
		},
		i.addHours = function(e, t) {
			return new Date(e.getTime() + 60 * t * 60 * 1e3)
		},
		i);
		function i() {}
		n.DateUtils = r
	},
	{}],
	107 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.Encoding = void 0;
		var r = (i.getUTF8Bytes = function(e) {
			return (new TextEncoder).encode(e)
		},
		i.getUTF8String = function(e) {
			return new TextDecoder("utf-8").decode(e)
		},
		i);
		function i() {}
		n.Encoding = r
	},
	{}],
	108 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.NotSupportedError = n.ArgumentNullError = void 0;
		var r, i = e("tslib"),
		o = (r = Error, i.__extends(a, r), a);
		function a(e) {
			return e ? r.call(this, e) || this: r.call(this, "参数为空") || this
		}
		n.ArgumentNullError = o;
		var s, c = (s = Error, i.__extends(u, s), u);
		function u() {
			return null !== s && s.apply(this, arguments) || this
		}
		n.NotSupportedError = c
	},
	{
		tslib: 49
	}],
	109 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.Log = void 0;
		var r = (i.error = console.error, i.warn = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
		},
		i.info = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
		},
		i.debug = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
		},
		i.log = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
		},
		i);
		function i() {}
		n.Log = r
	},
	{}],
	110 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.NumberUtils = n.readInt64 = n.readUInt32 = n.readInt32 = n.readInt16 = void 0,
		n.readInt16 = function(e, t) {
			return 255 & e[t] | (255 & e[t + 1]) << 8
		},
		n.readInt32 = function(e, t) {
			return 255 & e[t] | (255 & e[t + 1]) << 8 | (255 & e[t + 2]) << 16 | 16777216 * (255 & e[t + 3])
		},
		n.readUInt32 = function(e, t) {
			return 255 & e[t] | (255 & e[t + 1]) << 8 | (255 & e[t + 2]) << 16 | 16777216 * (255 & e[t + 3]) >>> 0
		},
		n.readInt64 = function(e, t) {
			return (((255 & e[t]) >>> 0 | (255 & e[t + 1]) << 8 >>> 0 | (255 & e[t + 2]) << 16 >>> 0 | 16777216 * (255 & e[t + 3]) >>> 0) >>> 0) + 4294967296 * (255 & e[t + 4] | (255 & e[t + 5]) << 8 | (255 & e[t + 6]) << 16 | 16777216 * (255 & e[t + 7]))
		};
		var r = (i.parseInt = function(e, t) {
			return null == e || null == e ? null == t ? 0 : t: parseInt(e)
		},
		i);
		function i() {}
		n.NumberUtils = r
	},
	{}],
	111 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.XMLUtils = void 0;
		var r = (i.readTextByTagName = function(e, t) {
			var n = e.getElementsByTagName(t);
			if (n && 0 < n.length) {
				var r = n[0].textContent;
				if (null != r) return r
			}
		},
		i.readNumberByTagName = function(e, t) {
			var n = i.readTextByTagName(e, t);
			if (null != n && null != n) return parseInt(n)
		},
		i.readAttributeByTagName = function(e, t, n) {
			var r = e.getElementsByTagName(t);
			if (r && 0 < r.length) return r[0].getAttribute(n)
		},
		i);
		function i() {}
		n.XMLUtils = r
	},
	{}],
	112 : [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		}: function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
		};
		function l(e, t) {
			if (!e) return e;
			for (var n = 0,
			r = e.length; n < r && e[n] === t;)++n;
			for (; n < r && e[r - 1] === t;)--r;
			return 0 < n || r < e.length ? e.substring(n, r) : e
		}
		function d(e) {
			if (!e) return e;
			var t = parseInt(e) || parseFloat(e);
			return isNaN(t) ? e: t
		}
		function p(e) {
			if (!e) return e;
			for (var t = 0,
			n = e.length; t < n && "A" <= e[t] && e[t] <= "Z";)++t;
			if (0 < t) {
				var r = e.substring(0, t + 1);
				e = e.replace(r, r.toLocaleLowerCase())
			}
			return e
		}
		n.xml2json = function(e, t) {
			var c = {
				toObj: function(e) {
					var t = {};
					if (1 == e.nodeType) {
						if (e.attributes.length) for (var n = 0; n < e.attributes.length; n++) {
							t[s = p(e.attributes[n].nodeName)] = d(e.attributes[n].nodeValue)
						}
						if (e.firstChild) {
							for (var r = 0,
							i = 0,
							o = !1,
							a = e.firstChild; a; a = a.nextSibling) 1 == a.nodeType ? o = !0 : 3 == a.nodeType && a.nodeValue.match(/[^ \f\n\r\t\v]/) ? r++:4 == a.nodeType && i++;
							if (o) if (r < 2 && i < 2) {
								c.removeWhite(e);
								for (a = e.firstChild; a; a = a.nextSibling) {
									var s = p(a.nodeName);
									3 == a.nodeType ? t["#text"] = c.escape(a.nodeValue) : 4 == a.nodeType ? t["#cdata"] = c.escape(a.nodeValue) : t[s] ? t[s] instanceof Array ? t[s][t[s].length] = c.toObj(a) : t[s] = [t[s], c.toObj(a)] : t[s] = c.toObj(a)
								}
							} else e.attributes.length ? t["#text"] = c.escape(c.innerXml(e)) : t = l(c.innerXml(e), '"');
							else if (r) e.attributes.length ? t["#text"] = c.escape(c.innerXml(e)) : t = d(l(c.innerXml(e), '"'));
							else if (i) if (1 < i) t = l(c.innerXml(e), '"');
							else for (a = e.firstChild; a; a = a.nextSibling) t["#cdata"] = c.escape(a.nodeValue)
						}
						e.attributes.length || e.firstChild || (t = null)
					} else 9 == e.nodeType ? t = c.toObj(e.documentElement) : alert("unhandled node type: " + e.nodeType);
					return t
				},
				toJson: function(e, t, n) {
					var r = t ? '"' + t + '"': "";
					if (e instanceof Array) {
						for (var i = 0,
						o = e.length; i < o; i++) e[i] = c.toJson(e[i], "", n + "\t");
						r += (t ? ":[": "[") + (1 < e.length ? "\n" + n + "\t" + e.join(",\n" + n + "\t") + "\n" + n: e.join("")) + "]"
					} else if (null == e) r += (t && ":") + "null";
					else if ("object" == (void 0 === e ? "undefined": u(e))) {
						var a = [];
						for (var s in e) a[a.length] = c.toJson(e[s], s, n + "\t");
						r += (t ? ":{": "{") + (1 < a.length ? "\n" + n + "\t" + a.join(",\n" + n + "\t") + "\n" + n: a.join("")) + "}"
					} else r += "string" == typeof e ? (t && ":") + '"' + e.toString() + '"': (t && ":") + e.toString();
					return r
				},
				innerXml: function(e) {
					var t = "";
					if ("innerHTML" in e) t = e.innerHTML;
					else for (var n = function e(t) {
						var n = "";
						if (1 == t.nodeType) {
							n += "<" + t.nodeName;
							for (var r = 0; r < t.attributes.length; r++) n += " " + t.attributes[r].nodeName + '="' + (t.attributes[r].nodeValue || "").toString() + '"';
							if (t.firstChild) {
								n += ">";
								for (var i = t.firstChild; i; i = i.nextSibling) n += e(i);
								n += "</" + t.nodeName + ">"
							} else n += "/>"
						} else 3 == t.nodeType ? n += t.nodeValue: 4 == t.nodeType && (n += "<![CDATA[" + t.nodeValue + "]]>");
						return n
					},
					r = e.firstChild; r; r = r.nextSibling) t += n(r);
					return t
				},
				escape: function(e) {
					return e.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r")
				},
				removeWhite: function(e) {
					e.normalize();
					for (var t = e.firstChild; t;) if (3 == t.nodeType) if (t.nodeValue.match(/[^ \f\n\r\t\v]/)) t = t.nextSibling;
					else {
						var n = t.nextSibling;
						e.removeChild(t),
						t = n
					} else t = (1 == t.nodeType && c.removeWhite(t), t.nextSibling);
					return e
				}
			};
			9 == e.nodeType && (e = e.documentElement);
			return c.toObj(c.removeWhite(e))
		}
	},
	{}],
	113 : [function(e, t, n) {
		var r = ".ydplayer-native-view {\n  width: 100%;\n  padding-bottom: 56.25%;\n  box-sizing: border-box;\n  vertical-align: middle;\n  position: relative;\n  overflow: hidden;\n}\n.ydplayer-native-player {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #aaaaaa;\n}\n";
		e("browserify-css").createStyle(r, {
			href: "styles\\compatible.css"
		},
		{
			insertAt: "bottom"
		}),
		t.exports = r
	},
	{
		"browserify-css": 1
	}],
	114 : [function(e, t, n) {
		var r = '@keyframes spinner-line-fade-more {\n  0%, 100% {\n    opacity: 0;\n    /* minimum opacity */\n  }\n\n  1% {\n    opacity: 1;\n  }\n}\n@keyframes spinner-line-fade-quick {\n  0%, 39%, 100% {\n    opacity: 0.25;\n    /* minimum opacity */\n  }\n\n  40% {\n    opacity: 1;\n  }\n}\n@keyframes spinner-line-fade-default {\n  0%, 100% {\n    opacity: 0.22;\n    /* minimum opacity */\n  }\n\n  1% {\n    opacity: 1;\n  }\n}\nvideo::-webkit-media-controls-enclosure,\naudio::-webkit-media-controls,\nvideo::-webkit-media-controls {\n  display: none;\n}\n.ydplayer {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  outline: none;\n}\n.ydplayer-video-view {\n  display: inline-block;\n  box-sizing: border-box;\n  vertical-align: middle;\n  position: relative;\n  border: 1px solid #ffffff;\n  overflow: hidden;\n  background-color: #aaaaaa;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoIAAAKGCAYAAADeYfoDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAE25JREFUeNrs3Y1R41gQhVFmygkQmKN1XsSwRTHUFmBj2fp5r/ueE8GutsX71BLsn7e3txfYyMUlgGmdXQLgu5NLAOBBTTSCEASAJdEoFEEIAiAURSIIQQAQiSAEAeCBSBSHIAQBEIfiEIQgAOJQHIIQBIAbcSgMQQgCIAyFIQhBAIShMAQhCIAwFIUgBAHAthCEIAD8CENRiBAEAFEoChGCACAKRSFCEABEoShECAKAKBSFCEEAEIWikB7+ugQA8HQUXlwGKrMRBID1QfjJlpBSbAQBYNsotCWkDBtBANgnCD/ZEjItG0EA2D8KbQkRggAgCGEeXg0DwPFB+MlrY4ayEQSAsVFoS4gQBABBCEIQAAQhCEEAEIQgBAFAEIIQBABBCEIQAAQhCEEAEIQgBAFAEIIQBICQIAQhCADBMSgIEYIAIAhBCAKAIAQhCACxQQhCEACCY1AQIgQBQBCCEASA5CAEIQgAwTEoCIUgABAehAhBACA4BgWhEAQAwoMQIQgABMegIBSCAEB4ECIEAYDgGBSEQhAACA9ChCAAIAYRggBAYgwKQiEIAIQHIUIQABCDCEEAIDEGBaEQBADCgxAhCACIQYQgACAGEYIAQFQMCkIhCACEByFCEAAQgwhBAEAMIgQBADGIEAQAMmJQEApBACA8CBGCAIAYRAgCAGIQIQgAiEGEIAAgBhGCAIAYRAgCAGIQIQgAiEGEIADQJwYFoRAEAMKDECEIAIhBhCAAIAYRggCAGEQIAgBiECEIAIhBhCAAIAYRggCAGEQIAgDwz8klgGmdXYLSbCxg/3vMz0khCNAu5EUkiEEhCCAixSKIQSEIwPJYFImIQYQggEgUh4hBhCCAOLx9eIIYFIIACERhiBgUggAIQ3GIGGzPH5QGYEkcnh2sFIxB7rARBODRKHTYghAEAGHI1LwivsOrYQC2DkOvkZktBhGCAIhCxCBCEABRiBhECAIgChGDQhAAxkUhIAQBCA9CUcjebAWFIAAFohDEoBAEIDwIRSFiUAgCIApBDApBAAQhIAQBEISwQvRWUAgC0CEIRSFiUAgCIApBDApBAJKDEBCCAATHoCDkUXFbQSEIgCCE0BgUggAIQgglBAEQhPBVzFZQCAIgCCE0BoUgAOlBCLExKAQBEIOCkFBCEAAEIbe13goKQQD4GYQQEYNCEACux6AgpD0hCAC/ByG8a7kVFIIAcD8GBSEtY1AIAsDyIAQhCADBMSgIs7XaCgpBAHguCBGDQhAAxCAIQQBIjEFBmKnFVlAIAsA2QQhCEADEICHKbwWFIABsG4OCUAwKQQAID0IQggAgBmmu7FZQCAKAGCQ0BoUgAIhBQglBADgmBgVhf+W2gkIQAI4NQhCCACAGaajUVlAIAoAYJJQQBAAxyLbKbAX/vL29Xfz3AhAIiAby7uWT/0YA5cJAKPaLBTHIEDaCAP2igp4PALgnN2cjCNA/JsRhnWAQgxzKRhAgMzioFfO453ZhIwggNIThfNEgBjmEjSAAL8KwRLDjvtqcvyMIwLUAuQgR4UB/NoIACJP5wxz3kBAEwIEmBnHvbMerYQCeDRNxIrwpzkYQALFSK8Bxr2zGRhCALSNFqIhtCrERBEC41Ixu3Bur2QgCsHewiBaBzaSEIACCUAwy5p4QggAIQsQgQhAAQQhp94EQBEAQ8jRbQYQgAIJQDIIQBKB2ECIGzbwQBCD4YBSEYhAhCIAghIhZF4IAMNMhWZStIEIQgHYxKAjFoAceIQiAIEQMIgQBSA5CMNdCEACHJjfYCiIEAWgdg4JQDHrAEYIAODwRgwhBAFJjUBCCEAQgPAj5yVbQDAtBABykYhCEIABiEKLnVwgC0P0wFYRf2QoiBAGIC0LEIEIQADEIZlYIAuBgzWUriBAEQAyKQVLnVQgC4HCFUEIQgOQYFIS2gkIQAMKDUAwSOaNCEADEIKGEIACIwXe2gkIQAMQgpMymEAQAMfjJVjCMEAQAMSgGQ+dSCAKAGCSUEAQAMfidraAQBACg88OJEASAAw/eQmwFAwhBABCDCEEAQAx+YSvYfBaFIACIQUIJQQAQg7+xFRSCAIAYpNsMCkEAgFBCEACeYyuIEAQAMQg1508IAoAYXMpWsBkhCABiECEIAEDSQ4gQBIAJDuRCvB5uRAgCgBhECAIALGIrKAQBgCtsBSkzc0IQAMTgM2wFGxCCACAGEYIAAA+xFSz+4CEEAWCywxmOIgQBAIQgALCD7ltBr4eFIAAQHIMUnTMhCACsZStYlBAEgGPYCiIEAUAMwhwzJgQBgC14PVyQEASAY9kKIgQBABCCAJCm61bQ6+Fi8yUEAQBCCUEAGMO3gghBAKAVr4cLObkEbgDgaTY6bDFDzg2GzZYQFIHAfve8UASmJgQBjg1Fcci1mTg3nH2zLgQBuBOHDktgGL8sAjA+DM8vPi1J54GAIXMlBAFEIew1z0xOCALMHYXksBVECAIgCAEhCMDPIBSFvV0azi0Tz5QQBKgbhQCrCEGA2kFIP74VRAgCsDgGBSEgBAEEIU1cms0mQhAAhy4w04OFEAToGYOCELhLCAL0DkLq8noYIQjA6gPYIQwIQYDwIKQef0oGIQiAGAS2f6gQggB5MSgI8SCCEARwKFOA18MIQQDEICAEARCDgBAEQAxGuJg1hCAADmhgswcKIQiAGCx6iMNaQhAAMQhCEADE4ORsBRGCAIhBzBZCEAAHdhpbQYQgAGIQWPcgIQQBEIMQSggCQD1eD7OJk0uAH0wUZEM15pq7xzFPQhBgyocOcejwTrwPzD1CEOBKoDggxSBwh28Egc5heBEtu8UgIAQBRCEMnm14em6EIJAahaxjK4gZakAIAoIQBzkIQQBBCCAEATKDkMfZCppdhCBAmwPVoQoIQYDwIAQQggDBMSgIl/F62MMLQhDAAQt4iKj0s00IAohBBzqEEoIAYhAQggAsiEFBeJutoIcVhCCAAxdACAIAIAQBmrEVvM7rYRCCAGIQQAgCiEEwj7fZIgtBAIdvIw52EIIAYhBACAKQxlYQCjzACkGADX+ougRAJUIQQAxiBhGCALApr4dBCALEsZEBhCCAGAQQggAACEGAGLaCvhMEIQgA4IFBCAKksRXE3CEEAYhl2wNCEAAAIQiQxWs6QAgCACAEAdKkbwV9JwhCEAAAIQgAgBAECOGXRgAhCEAk3wmCEAQADmADjRAEAEAIAszAlgYQggBE8p0gCEEAAIQgAABCECCE7wQBIQhAJN8JghAEAEAIAgBwuJNLANOq9PrMN28AQhAQreIQQAgC4lAYAghBgG9hKAoBhCAgCkUhwCh+axiYIQr9Xbks4h+EIIAgBBCCAF+DEAAhCATHoCAEEIKAIARACALJQQiAEATEIABCEBCDAAhBQAwCIASBjBgUhABCEAAAIQiksRUEEIKAGARACAJiEAAhCIhB/6wAt38WCUEAYLSLSzCGEARaPd26BABCEIA52fyAEATYja0ggBAExKB/NgAhCAAeiEAIAgAgBIHebEMAhCCAOAUQgoDwYiR/OgaEIAAAQhAgh+0kIAQBAJjj4VQIAhE/7PwzDOf7QDNnNiYkBAEAhCAAAEIQgK14LQwIQQBi+QYMhCBAHNtAQAgCAB5AEIIAKQejw/iD18IgBAEAmO3hWAgCCY7eStkGAiUIQQAR2CXAMSMIQQDwIAJCEMAhDCAEATiUV34gBAFi2AYCQhBABMazDQQhCCACwSwy85wIQaA72ylwb3KDEATY6MkahzsIQQARCCAEAQbbazslAo+93phJhCCAAxdACAKIwNnYBoIQBGgbJiIQPDi0e5gVggAi0KEOoYQgIExEIB5UEIIAOGCHRjcgBAGmCBMRCLR3cgkARODg6CZrVs3NIK+vr0IQECYCEPDQ8MGrYUAEisAR1xuYgI0g4CkZEQihbASB5DARgXiIIZqNIJAYgQ7Q46MbzM+EbAQBEQgQykYQSIlAATgmvIHxzkIQSA0SASgCow52eIQQBLoGiYMSPEwgBIGwg0QAOsABIQgExYj4E4GAEATCYkQAisBE5p7N5kUIAtVixCEIHirYiBAEKhwc4s/BDQhBIIj4E4G4L9iZ/7MIACIQQh8chCAAIhBzFUoIAuCwBiEIgAhkYr4PRAgCACAEAVjPNhDz1dOiDbIQBHBI0+RQh0cJQQARCITyB6UBBCCYtVA2ggAOZubmtTC7zYwQBBCBQCghCCACmdfZzCEEAXAgA0IQABEI3PTQFtlvDQMIQBoc6OaPZ9gIAohAQAgCIAKZhD8ZwyG8GgYQgGAWQx8gbAQBHLwUP8zhWTaCAAIQEIIACEAGO5tNjpwdr4YBHLRAKBtBAAEICEEABCADeS2MEATAoQoc8xAhBAEEIIUPcnPLGkIQwEEKCEEAxB8D+APSDJsfIQggABGB5jmUEARwWAJCEADxx4G8EkYIAog/MO+MeZgQguCHLFDwAIct+H8NAwAeVIUgAHAA20CmmSMhCAAQSggCwHE6bAO9FhaCAEBgBNJsloQgALCUbWAzQhAA9mcbiBAEABEI88yTEAQAlvBauCEhCAD7sQ1ECAIApdkGNn2wEIIAUOTQBiEIACIQhCAAiMDdeS3ceK6EIABAKCEIANuxDaTUXAlBABCBhBKCAMA1toFCEABYwDaQkrMlBAFABH5nGxhCCAKACEQIAgDYBiY9aAhBAJj0kAYhCAAi8Ci2gUIQAAiMQALnTAgCgAh8ZxsYSAgCgAgkdNaEIABgGxhKCALAfbaBCEEAEIHt2AYGz5sQBIDcCCScEASA3Ai0DRSCAEBgBGLuhCAAhEagbSBCEAACIxCzJwQBIDQCbQMRggAQGIEgBAEgNAJtA82gEASAF5tAwglBAERgDttAcygEAXD4ikAQggCIQBCCACAC27INNI9CEACHLiAEARCBKWwDzeRNJ/8dAHDYikAy2QgCIAIhdDaFIAAO2p5sAxGCAIhA4DrfCAIgAPuxDTSni9gIAuBwFYGEEoIAiEAInVWvhgFwqPZhG8hDbAQBEIEikNCZFYIAOFAhlFfDAAjA+mwDze5TbAQBcJCKQELZCAIgACGUjSAAIrAu20BzvIqNIAAOThFIKCEIgACE0Jn2ahgAB2Y9toFswkYQAAEoAgmdbSEIgENSBBJKCAIgACF0zoUgAA7GGmwDEYIACEARiJkXggA4DEUgCEEABCCYfyEIgAOwD9tAhCAA4k8E4n4QggA48EQgCEEAxJ8IxP0hBAFwuIH7RAgCIP4Ksw1ECAIg/kQg7h0hCIADTASCEARA+IlA3FNCEADhJwJBCAIg+sA9JwQBHEBUYhuIEARA8IlA3JtCEMBBggjEvSsEcYMAiEDY21+XAABEIHe1XHYIQQAQgYQSggAgAvld20+fhCAAiEBCCUEAEIHc1voXIYUgAIhAAiNQCAKACCSYEAQAEchPEX8bVwgCgAgkMAKFIACIQIIJQQAQgfwv6n+XKgQBQAQSSggCgAjkwzntX1gIAoAIJDAChSAAiECCCUEAEIHpzqn/4kIQAESgCBSCAIAIJMnJJQAAARjqnH4BbAQBQASKQCEIAIhAhCAAiED6sg38xzeCACAARWAoG0EAEIEIQQAQgbRmGygEAUAEikDe+UYQAAGICAxlIwiACAQhCAAikHZsA3/h1TAAAhARGMpGEAARCKFsBAEQgHRkG7iAjSAAIhARGMpGEAABiAgMZSMIgAiEUDaCAAhAurANfJCNIAAiEBEYykYQAAGICBSCACAAEYFCEAAEILTnG0EARCBV2QauZCMIgABEBApBABCAiEAhCAACEBEoBAFAAIIQBAAByEi2gUIQAAGICEQIAiAAEYEIQQDEHyIQIQiAAEQEIgQBEICIQIQgAOIPEIIACECmZhsoBAEQf4hAhCAA4g8RiBAEQPwhAhGCAAg/RCBCEADxhwhECAIg/BCBCEEA4QciECEIIPpABCIEAQQfiECEIIDQAxEoBPEDHABEYJq/LgEAIAKFIACACBSCAAAiUAgCAIhAIQgAIAKFIACACBSCAAAiUAgCACIQIQgAiECEIAAgAhGCAIAIRAgCACIQIQgAiECEIAAgAjnIySUAAARgJhtBAEAECkEAABEoBAEARKAQBABEIEIQABCBNOK3hgEAARjKRhAAEIFCEAAQgQhBAEAE0p5vBAFAABLKRhAARCBCEAAQgQhBAEAE0p5vBAFAABLKRhAARCChbAQBQAASykYQAEQgQhAAEIEk8WoYAAQgoWwEAUAEEspGEAAEIKFsBAFABBLKRhAABCChbAQBQAQSykYQAAQgoWwEAUAEEspGEAAEIKFsBAFABBLKRhAABCBCEAAQgCTxahgARCChbAQBQAAiBAEAAYgQBAAEIEIQABCA9OSXRQBABBLKRhAABCBCEAAQgAhBAEAAIgQBAAGIEAQABCBCEAAEIAhBABCAIAQBQPyBEAQAAQhCEAAEIAhBABB/IAQBQACCEAQAAQhCEADEHwhBABB/IAQBQACCEAQA8QdCEADxBwhBAMQfIAQBEH+AEARA+AFCEADxBwhBAIQfIAQBEH4gBAFA+IEQBADhB0IQAEQfCEEARB8gBAEQfIAQBEDsAUIQAKEHCEEAjoi719dXVwhY5T8BBgDwfncDmWKXKQAAAABJRU5ErkJggg==");\n  background-size: 15%;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.ydplayer-video-view.active {\n  border-color: rgb(255, 0, 0);\n}\n.ydplayer-video-view .spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  /* top: auto !important; */\n  /* top: unset !important; */\n  /* left: 15px !important;\r\n    bottom: 15px !important; */\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.ydplayer-video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-repeat: no-repeat;\n}\n/* \r\n.ydplayer-video.active {\r\n  border-color: rgb(255, 0, 0);\r\n} */\n.ydplayer-video-message {\n  position: absolute;\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  overflow: hidden;\n  background-color: rgba(144, 144, 144, 0.75);\n  color: #ffffff;\n  font-size: 14px;\n  bottom: 0px;\n  z-index: 100;\n  text-align: center;\n  vertical-align: middle;\n  opacity: 0.75;\n}\n.ydplayer-video-message.primary {\n  color: #004085;\n  background-color: #cce5ff;\n}\n.ydplayer-video-message.secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n}\n.ydplayer-video-message.success {\n  color: #155724;\n  background-color: #d4edda;\n}\n.ydplayer-video-message.danger {\n  color: #721c24;\n  background-color: #f8d7da;\n}\n.ydplayer-video-message.warning {\n  color: #856404;\n  background-color: #fff3cd;\n}\n.ydplayer-video-message.info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n}\n.ydplayer-video-message.light {\n  color: #818182;\n  background-color: #fefefe;\n}\n.ydplayer-video-message.dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n}\n@keyframes circleMove {\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.loading_s {\n  animation: circleMove 0.5s linear infinite;\n}\n/* .ydplayer-video-view:hover .ydplayer-video-operate {\r\n    bottom: 0px;\r\n} */\n.ydplayer-video-operate {\n  height: 45px;\n  background: rgba(0, 0, 0, 1);\n  opacity: 0.7;\n  position: absolute;\n  z-index: 101;\n  bottom: -45px;\n  left: 1px;\n  right: 1px;\n  transition: bottom 0.5s;\n  display: flex;\n  align-items: center;\n  padding-left: 29px;\n  padding-right: 29px;\n}\n.ydplayer-video-operate.none {\n  visibility: hidden;\n}\n.ydplayer-video-operate .control {\n  width: 20px;\n  height: 20px;\n  margin-right: 26px;\n  background-size: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.ydplayer-video-operate.disabled .control {\n  display: none;\n}\n.ydplayer-video-operate.disabled .control.control-play {\n  display: block;\n}\n.ydplayer-video-operate .control-play {\n  border-radius: 50%;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZFRjUzMzkxODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZFRjUzM0ExODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODEwMjc3ODE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRkVGNTMzODE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu/dXRYAAAOJSURBVHja7JvPaxNBFIA3a09NwCIGiggpRGpOViwGCqHpVQnBQm695iweAkEv/R/8G9KchJ6qnjTxIlRrSL0kJYF4MgcRDyGBXuIbfVsmj7fJuj/CzqwPvkPTdma+ndnZ7JuZ2HQ6NQKKG8AusA3cRdaBBLCKfzMGRsB34ALoAmfAB+BnEI2K+Sy8ARwA+8ADUb7LckSjvgDHwBEw8K2FQtgj4qIVgMY0uHiPdcS8tterbBFoTZcXLazTdZvdDuk08BJ4vODv+kADaAMdHJq/8L418H5ew1shA2wBe1j+vHgNPMXyAx/SZWA8pxfOgSqQ8tATKSzjfE49Y2xLYEM6DtTmNOAtkPdhTqDksWy7qGHbfBVOAqc2FbaBXACilBzWxcUpttEX4dtAl6nkEqgAK0uQtVjBOi+Z9nSxrZ6EbwE9pvA+kF2iKCWLbeCkk26FEzaPnE9Oh0/AJLEt3PCOuxGuM4W9wwthhIQEtombyP5JuGzTs2GSlaW5ni47FU4DE+aeTYZQVh7efeY5nXYifMLMxtkQy8oTGZ29TxYJF5mhUVFA1qLCtL9oJxxjZuX2kp+zfjyn28wLR4wTLjBXJ6eQrPyNjEaBE24w340NRaHfvRtUeIO5KnmFhfOMj3A0THxLPCBvjV+BpqFuNNFBjj+OlnCJ/PLIUD+oQ8lK4ons4g+ScBMZiG8eK3wD7Lj834/AI4/1p0jyT6R2bgrhJ5gdlNMyd3y4wiKVc91LRtWHNvRIumjfxLyxHA1Dn6Au2yYmz+RoayRMXTJCeJN82NFImLpsmrj8IcdAI2Hqsm5ibphONroEdUmY0sKWFSONhKnLqmlELExcspzpdo38qMvYZLp9TSNh6jISwkNmjVeXoC5DE1fdZx7OGglTlwtOeEsjYerSMXFPhRx7GglTl7PIvR5aKZHPJB1SVTi9Y1FlspdXGY9jLh2ieFCHV3/7Wc8k3u6iJN6AeVl+rnDvviA/N6/uZw0T8TtOE/E6LLVcYxxmllpMMm0fkqFwD3im0FAWbb1PPjtEN4MOadWXSx+6WS61FsTHGiyIT5wuiEduy4NFTeFNLXU3u3jiNrvvwr5tqTWvU5wU2lVoY1oPN9N53nrYi8rWQ3kLYisqm0vlCaIele3D9JE1UXWD+P8jALof8ojcMZ6gDmqVcHiG7qCW38JyyEfxMrjwbncUb4j58cCP4v0WYADxRFDzkiPoGwAAAABJRU5ErkJggg==");\n}\n.ydplayer-video-operate .control-play.startPlay {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFCOTE4RTkxODEwMTFFQThFNUNBNjg2MzMzMkNEOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFCOTE4RUExODEwMTFFQThFNUNBNjg2MzMzMkNEOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUI5MThFNzE4MTAxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUI5MThFODE4MTAxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phzpk0YAAAQlSURBVHja7JvPS1RRFMffvAYCnUCEAbNgJCHdlJBkFOJIyxBRaCHYwkAG2oSLgTIXUfRjGfQPtBlhNuXKcJONLYoUkzGIGdEYF5ErEZKRhJq+N87A9XDf/LzvzrymA5+NDuee773n3ffuvef6crmc5ZK1ggHQC7qINhAATfSbLNgH38EGSINV8A7suhGUT7PgDjAORsEF4b9CPyKoT2AOzIKMtgiF4CoRnTYEEjn37C214as23mrFDoO1nDkTbY1UE3OlKd0JnoNrRX63BRIgCVKUmnv03Fr0PLfQo9ANesAg+S9kr8Ft8u96Sk+CbIFRWAd3QKiKkQiRj/UC7RyAiJsp3QxiBQJYAGENcwInTL6dLA4CugUHwbJDg0nQ74JQTj+15fRst+sSfBqkFY0cgijwGxCbx09tHiri2aRYqxLcTo64bYE+g0I5fRQDtzRlY0WCAw6vnJViTg0RpFi4LdN8U7bguMLZYjkThAECFBO3WLmCIw4jW09iZdGqkZ4sVXAnveP4MxusQ7FyevNnOktaigqeV8zGfXUsVp7I+Ow9X0zwiCI1oh4QmyeqiH/YSbBPMSsnDb9ndbynk4qPEp9K8JCid/o9JFb+IuM2pBKcUHwbWx5lQbGePiK4Q9ErYQ8LDiv0CI2WTavEcbZq/AyWLO/aEmmQ7a/GvOBR9s9ZTQ0HwUMwAfyGRXMNo/kNgFbwmw1/SFNqvWQbA1cNpnWIaRIaW23aSvWxbZltTb0sb9WcA2/AK3DGwAhvsy0goXHApn1j2RIuByJS6wt4Ck643BbX0mvTBrlsSQO9fxzcpY33iSr2r4sZ19KlEpwyOLGcBC/AR3DZBf8pleA29seMZd4ugvcgBk5p9Mu1tNm0NyzbXg3fn+N0xnQPHNPgj2sJ2NLBVt72a/zRIOJ5DMY0+OJammyrwcymI8sjw17jmEQ8MyCuwRfXkrUVw95SQ7Hic/AseAJ+afDHtewLwTuKM17TtgKugBvgm+bzatl2bHr5y9ZtUKg4+b8JLoEPLvjnWjb8CsE9BoT+BM8odX+42A7XkvJTTYVsgy6LFWUMUfDVQMdyLatuLw/n6nF5uEsFJLKNaerhW+ARPaeiyGXR4PwwplhI7OZ7Y0Zxim95HF49MNPQm3gZxWJ52sNfkNOKTb0ML2ppuI34hjhqkVdLomDrPkuF82DKQ6k8RTHL9oC0WTylG/K4NH8gnv0HDsQPSj0Qz1fbeb3kIVJuUUvMw0Ut8UqqeJodqu/qvWxprdCglOI07aHCtM1iJYillh5ueqD0MK2j9FAuQVyr4+LS5VIfs3IniHgdlg/HCpUa6rgCEFEUrtWiQDzrVG33/wqAbFWm20gNLnkM1/JWi+eu8bh1Ues6pWfdXdTSLVg2+SpeNx2hOF3F26H9cdev4v0RYAAZ+dk61B5a9gAAAABJRU5ErkJggg==");\n}\n.ydplayer-video-operate .control-volume {\n  position: relative;\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFCOTE4RUQxODEwMTFFQThFNUNBNjg2MzMzMkNEOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFCOTE4RUUxODEwMTFFQThFNUNBNjg2MzMzMkNEOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUI5MThFQjE4MTAxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUI5MThFQzE4MTAxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuhqgX4AAAJ3SURBVHja7JrNKwRhHMdnllJeymVJpORlI0lblOT1LEVxcadVaE/WcU9cXAi1/AM4umqjXEQpL0XhwkEpKS4cjO9jH1o1z+yzs7PPPrPz/OrTtjPzPNtnduaZ3/N7RjcMQ/NS+DSPhRJWwkpYCSthJexh4RYQByTbOQbVwo1JpiWAIhAFH8b/2BT0+38UCjinvSAGAib7GvLpki6noocMWRK6aOFs/cNjYBVUyjZoOS1cC9bAUL6P0gVgFlzJLOvUP9wGtkCHG57Dv8LkXqtKs20ZGAEzWRwLsiIcBsu5GDE5ohkUgzPwZbOPCtAIzsEbeRi/GrmLA0aCUAB2ko47BX4bicYk+KR9vIA+zchtsIQnTI69SFM6ZNLHvayTB7MMrJXm4X6O9iGwbrK9TlbhOGM7jzRLNtGvpJc0Yd6iHevyDlm0uQU1MgsTImlIp5T9qcFLLpxK+oaKcMmKmh5mGkv0c9FkXxM4tZik3IF+8Oi2Eg+RXmDs45Z1W03LSppL1o1FPB5ppqyqWrogIozBKznqwQGocbswj2xKaV8eyD6mI+1zuewlCIJpbmmVWsojHPHS5KHHhiyPdFzWe3jQ4p4l+54t2m5Y3NMDsgrf2pRNJX0ncxFvO+m4EyeLeGHwJekoHQBB4MtgiZScqG5QSr7r9E08O4X4EjBKl1jszqsPaaIvLHQHXj0kSy2boNMNwk4MWqSi3wXmwLtXZktkGWRFS7zDseel6eEDGAbj4MlL8+FdLbEQFvNSAeAVTIEecM04xsgn4d84Au0gCj45MqrshuD3pJrBPk06jpML5KJw4jmsinhKWAkrYSWshJWwEuaKbwEGAL2YcjtCoSzDAAAAAElFTkSuQmCC");\n}\n.ydplayer-video-operate .control-volume:hover .sliderWarp {\n  display: block;\n}\n.ydplayer-video-operate .control-volume.open {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTgxMDI3NzYxODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTgxMDI3NzcxODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODEwMjc3NDE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFODEwMjc3NTE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pue/jnMAAAN+SURBVHja7FtLaFNBFJ0Ysf6o9VP8IFYrVfxWtCISXAm6UoqoVLDiShC/RZQuXFaEuhA/i4ILrT9EEA2KiCIiFFttKEUrXSjV4iJCClKt1S7M81wy0fic+1KSvkkmnQtn8ebezuQwM/f3XgOO44jRJGPEKBNL2BK2hC1hS3iYEgLaAYqLrUCZllUpDmtGCdDk/C9hHeuP1byr24ELwCyFboWOH6CL8DzgIrAl19fL70WCwBHgbRqy2sTPHV4FXAKqCt1LTwQagYhmsuOBGboJbwa6gOPyOOuQoPQP/UAM6ACW+h2WSoEbTnbyMcO16xVzRYFyr7C0JouwUAHsB6bm6FpWK8Yo7D0C1sqd/8dp1QOnDc4Wf3psxBVgm8zm/tzhk4anx01pdn+v22lNMpzwLeCch/4MMK3QqqU64B6jmw6cSD4EnPzp4vUC8z305dIJkV2bQk9O8zUwV6H7LufuM2WHjwHv5PGlUvIhMMFl8wU4yvw9Xds9yTicL8LF4QogrrC/ydi3MfN3kt6EHV5HV08xvguoZZyUSiqBBSYQ7vXQNSqO9gN5vFWy0QTCLcBTRkcZ1U7X2JDMslSy3gTCFEVqgM+MvkYx9pyxXWyKl+4DGhjdBsUd72ZsF5mUeNz2CDlzXGOfGNtikwjHZALBZVOp0s/YFZlEmI5tEaMbcj2P09ni8UuqBN+Di7qeSxi7ryYRPsSM9xARt3PiroUphKuZrEowMXc1Y9ttAmFqyDV76C+rMirGtssEwlTrFjM6qpoirjEqD0OM/TMTCM9mxgeYe72PKTao99ViAmFVmhgXiV5Vj8I7H2bmuQsMmkCY+lXhlOdB6cDuKGxPAVOYeZpNa/EskylkhCn/yFE9ZnKLTum5HSI8IPKjc5mOsJdQv+sFMNMjrIWTmVaDMFtK5c5yZJ+kXomAPNG03SszXHAhcEBk/6ol0x2mKmoHo6Nig17bvv9bXY/cy7RrOXqZ9sNjzt1u+5Hy0jHpOTcBHzQf6W/M+Fngut/VEt2X5SLRXPulMWy55apI9LIVDSP/PhGqBF5pONLkhw7KfvRLoE6OKe0DPofhoHRolBBM9jEsDVv8zrToWJ+XFc/9fIhhulJLaqptFYkP06KMTbyQCCeF8t8lIvES232X3mj5BTn41jKJUIpTawXKdKwbsP/kYQlbwpawJWwJ54/8FmAA8So6MqCL7KUAAAAASUVORK5CYII=");\n}\n.ydplayer-video-operate .control-screenshot {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTgxMDI3NzIxODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTgxMDI3NzMxODk1MTFFQThFNUNBNjg2MzMzMkNEOEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFODEwMjc3MDE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFODEwMjc3MTE4OTUxMUVBOEU1Q0E2ODYzMzMyQ0Q4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgtD6asAAAN5SURBVHja7JtNaBNBFMc3tdGIHwQ00gpSajwIStEimrYWRa2gZ0XqqfhBY/CD+nmTiuBJqD14E6TgQcGbKB5axa9DbRFqUWipFkXiR2KjIBWxTfw/fIFxSNomO5Mdu/vgBzN09+38dyYz781sfZlMxnKTlVkuM0+wJ9gT7AmW7QD4CDI2iYMW1Y3zKV6WGsFjxW3cDJ6Z2sPnNIyYM6b2cDV4Qz4VC06z7/em9XBUg9hsG4+Y1sMB8AEs0TS5JsAK8MuUHt6nUSxZiJ9hzJCOlWAJjakc0lWgDawB/iJeWmOJ4oYnPIkVYr/BK9AB3pHgGhQegeAsD7K+gS0kuBuF7S6JLHtI8AQKc1wieJIEu2rLo7xEz5ngeLgPjIAkTz4hjqI2csw8938XPMyz4y2QmubaxWAPOMmrhR7L6LHvIAbK6RdTIGWgBXzV0TAdv+EXYC94O8U1QWGpyGfLwW1QZ/IGwENa63KIDYOL4Dn4ycM7xeVe/ltYuifOy+UdU4d0P1ggDc8Q6ALpGdyf5mtDko8AeKqqkaoEp0CV1NAIiBfhi+7ZJPmqAAmTBB+UGlgPxm34o3vrJJ/Npkxag2CdENRXggFeY+3mwBTnf8omOqAf1Do9aV2WMphOBWKzOXCnON3ws2ynh3Z6eBws5dnW4h4ZUDzz1/AoIpvHUdpCp3q4RxBLdlhDbCT6pC2ebieHdK9U36VB8O5pnllSwcNCeVGO4EGFhdl31kacFJwQypUak5AKoZw0JbT0axSsLKuzKzig6s1PY0kpjXRM8Cqh/BmMaRIr/nSqnRS8Xqo/0LHxJtU3OCm4yfr3PKlLg+AbUnt3OCmYznvqhfo98FKhWPJ1V6hvlWZsR2bp40KZYmo66ZtUsaUKWjmGzlqbCRsAlLjXSqncCQV+j0k+G0zKh/uAX2rgaRsv8FSOXY9BkwSTdeTYgdwJRgvwQdc25fBzzbQtnqydzdHY+SDKo2CqERLla+X7L5i+TXsJnM8zcdGh+VqwjOtfONcdyxNO0ib+UZWN03W2RAHIITBa5P2rwXUQUd0wXV/ibQOvwRXr72H7TG0luMq9HtHRsFKcHtLaTAfu9zl5p0+bfvD6GuR8N8KbBw2Wni+BSirYKHPlx6VDLtI7RILbXSS4nQTfBPtneU+TtmbS6st4/9XiCfYEe4I9webaHwEGAGze504Nlx1lAAAAAElFTkSuQmCC");\n}\n.sliderWarp {\n  padding: 10px 10px 15px 15px;\n  box-sizing: border-box;\n  transform: rotate(-90deg);\n  position: absolute;\n  top: -88px;\n  left: -56px;\n  display: none;\n  background-color: black;\n  border-radius: 10px;\n}\n.ydplayer input[type="range"].slider {\n  display: inline-block;\n  width: 106px;\n  -webkit-appearance: none;\n  background: -webkit-linear-gradient(#059cfa, #059cfa) no-repeat;\n  background-size: 0% 100%;\n  border-radius: 3px;\n  /*这个属性设置使填充进度条时的图形为圆角*/\n}\n.ydplayer input[type="range"].slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n.ydplayer input[type="range"].slider::-webkit-slider-runnable-track {\n  height: 5px;\n  border-radius: 10px;\n  /*将轨道设为圆角的*/\n  border: solid 0.08em rgba(205, 224, 230, 0.5);\n  /* box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;  */\n  /*轨道内置阴影效果*/\n}\n.ydplayer input[type="range"].slider:focus {\n  outline: none;\n}\n.ydplayer input[type="range"].slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 12px;\n  width: 12px;\n  margin-top: -5px;\n  /*使滑块超出轨道部分的偏移量相等*/\n  background: #ffffff;\n  cursor: pointer;\n  border-radius: 50%;\n  /*外观设置为圆形*/\n  border: solid 0.1em rgba(205, 224, 230, 0.5);\n  /*设置边框*/\n  /* box-shadow: 0 .125em .125em #3b4547; 添加底部阴影 */\n}\n.ydplayer-video-locate3D-rect {\n  position: absolute;\n  border: 1px solid #f00;\n  width: 1px;\n  height: 1px;\n  background-color: rgba(200, 200, 200, 0.35);\n}\n';
		e("browserify-css").createStyle(r, {
			href: "styles\\ydplayer.css"
		},
		{
			insertAt: "bottom"
		}),
		t.exports = r
	},
	{
		"browserify-css": 1
	}],
	NativePlayer: [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.NativePlayer = void 0;
		var i, o = e("tslib"),
		s = e("events"),
		d = e("../io/yd/url"),
		y = e("../utils/date"),
		v = e("../io/yd/avformat"),
		u = e("../utils/log"),
		r = e("../utils/xml2json"),
		c = e("../utils/error"),
		p = e("../utils/number"),
		l = (e("../../styles/compatible.css"), "application/x-ipcameraplugin"),
		h = 0,
		a = (i = s.EventEmitter, o.__extends(f, i), Object.defineProperty(f.prototype, "isNative", {
			get: function() {
				return ! 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "isActiveX", {
			get: function() {
				return this._isActiveX
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "isNpapi", {
			get: function() {
				return this._isNpapi
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "version", {
			get: function() {
				return this.nativePlugInVersion
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(f.prototype, "el", {
			get: function() {
				return this.nativePlugIn
			},
			enumerable: !1,
			configurable: !0
		}), f.supportActiveX = function() {
			try {
				return "ActiveXObject" in window && !!new ActiveXObject("ipcamera.ipcameraplugin.1")
			} catch(e) {
				console.log(e)
			}
			return ! 1
		},
		f.supportNpapi = function() {
			try {
				var e = navigator.mimeTypes;
				if (!e || "function" != typeof e.namedItem) return ! 1;
				var t = e.namedItem(l);
				return !! t && !!t.enabledPlugin
			} catch(e) {
				console.log(e)
			}
			return ! 1
		},
		f.isSupported = function() {
			return f.supportActiveX() || f.supportNpapi()
		},
		f.prototype.initNativePlugin = function() {
			var t = this;
			t.nativePlugIn.SetScreenNum(t.screenX, t.screenY);
			try {
				t.nativePlugIn.StopAllVideo()
			} catch(e) {
				u.Log.debug(t.LOG_TAG, e)
			}
			try {
				t.nativePlugIn.GetDeviceInfoEx()
			} catch(e) {
				u.Log.debug(t.LOG_TAG, e)
			}
			try {
				t.nativePlugIn.GetViewInfoEx()
			} catch(e) {
				u.Log.debug(t.LOG_TAG, e)
			}
			try {
				t.nativePlugIn.RegisterCaptureCallback(),
				t.nativePlugIn.RegisterRealCaptureCallback()
			} catch(e) {
				u.Log.debug(t.LOG_TAG, e)
			}
			t.bridgeNativeEvents("onactivewindowex"),
			t.bridgeNativeEvents("searchrecord"),
			t.bridgeNativeEvents("capturepicture"),
			t.bridgeNativeEvents("oncallbackcapture"),
			t.bridgeNativeEvents("oncallbackcapturereal"),
			t.bridgeNativeEvents("prepointdata"),
			t.bridgeNativeEvents("onDeviceInfoCallback"),
			t.bridgeNativeEvents("onVideoTime"),
			t.addNativeEventListener("onactivewindowex", t.onNativeActiveWindow),
			t.addNativeEventListener("capturepicture", t.onNativeCaptureCallback),
			t.addNativeEventListener("oncallbackcapture", t.onNativeCaptureCallback),
			t.addNativeEventListener("oncallbackcapturereal", t.onNativeCaptureCallback),
			t.addNativeEventListener("onVideoTime", t.onVideoTimeUpdate),
			window.addEventListener("beforeunload",
			function(e) {
				try {
					t.nativePlugIn.StopAllVideo()
				} catch(e) {
					u.Log.debug(t.LOG_TAG, e)
				}
			})
		},
		f.prototype.doPromise = function(r) {
			return new Promise(function(e, t) {
				var n;
				try {
					n = r()
				} catch(e) {
					t(e)
				}
				e(n)
			})
		},
		f.prototype.extractYDUrl = function(e) {
			var t = !1;
			0 === e.indexOf("ws-yd:") ? (e = e.replace("ws-yd:", "ws:"), t = !1) : 0 === e.indexOf("wss-yd:") ? (e = e.replace("wss-yd:", "wss:"), t = !0) : 0 === e.indexOf("wss:") && (t = !0);
			var n = t ? 4 : 3,
			r = new d.YDUrl(e),
			i = r.hostname,
			o = Number(r.port) - n,
			a = r.searchParams,
			s = Number(a.get("policy")) || 1024,
			c = a.get("loginkey") || r.auth.token,
			u = i,
			l = o;
			return 1 == (1 & s) && (u = a.get("eip") || i, l = Number(a.get("eport")) || o),
			{
				url: r,
				sn: r.sn,
				channel: r.channel,
				address: "huamai://" + u + ":" + l + "/" + (r.channel || 0) + "?loginkey=" + c,
				name: a.get("name") || "",
				args: "sn=" + r.sn + "&actor=1073740798&usealarm=0&usetransfer=" + s + "&natip1=nat.yun.huamaiyun.com&natport1=9600&natip2=nat.yun.huamaiyun.com&natport2=9602&transferip=&transferport=0&nvsip=" + i + "&nvsport=" + o
			}
		},
		f.prototype.fakeYDUrl = function(e, t) {
			return new d.YDUrl("wss-yd://unknown.host/?sn=" + e + "&chn=" + (t || 0) + "&auth_token=unused&auth_ts=unused")
		},
		f.prototype.screenIndexToNative = function(e) {
			return void 0 !== e && 0 <= e ? e + 1 : e || 0
		},
		f.prototype.bridgeNativeEvents = function(r) {
			var i = this;
			i.bindNativePlugInEvent(r,
			function() {
				for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; (e = i.nativeEventBridge).emit.apply(e, o.__spreadArray([r], t))
			})
		},
		f.prototype.bindNativePlugInEvent = function(e, t) {
			var n = this;
			if (n.nativePlugIn) {
				if (void 0 !== n.nativePlugIn.attachEvent) try {
					return void n.nativePlugIn.attachEvent("on" + e, t)
				} catch(e) {
					u.Log.debug(n.LOG_TAG, e)
				}
				if (void 0 !== n.nativePlugIn.addEventListener) try {
					return void n.nativePlugIn.addEventListener(e, t, !1)
				} catch(e) {
					u.Log.debug(n.LOG_TAG, e)
				}
				throw new Error("native plugin: bind events failed.")
			}
		},
		f.prototype.addNativeEventListener = function(e, t) {
			this.nativeEventBridge.addListener(e, t)
		},
		f.prototype.removeNativeEventListener = function(e, t) {
			this.nativeEventBridge.removeListener(e, t)
		},
		f.prototype.onceNativeEvent = function(e, t) {
			this.nativeEventBridge.once(e, t)
		},
		f.prototype.getLastVideoUpdateTime = function(e, t) {
			var n = e + ":" + t;
			return this.lastVideoTimes[n] || 0
		},
		f.prototype.setLastVideoUpdateTime = function(e, t, n) {
			var r = e + ":" + t;
			this.lastVideoTimes[r] = n
		},
		f.prototype.parseGeneralConfig = function(e) {
			var t, n = {},
			r = null === (t = e.childNodes[0]) || void 0 === t ? void 0 : t.childNodes;
			if (null != r && 0 < r.length) for (var i = 0; i < r.length; i++) {
				var o = r[i];
				if ("p" === o.nodeName) {
					var a = o.attributes;
					if (null != a && 0 < a.length) for (var s = 0; s < a.length; s++) {
						var c = a[s];
						c.name && (n[c.name] = c.value)
					}
				} else if ("Channel" === o.tagName) {
					var u = o.textContent;
					if (u) {
						var l = p.NumberUtils.parseInt(u.replace(/\"/g, ""));
						n.channel = l
					}
				} else "Target" === o.tagName && (n.target = o.getAttribute("Name"))
			}
			return n
		},
		f.prototype.setScreens = function(e, t) {
			return this.screenX = e || this.screenX,
			this.screenY = t || this.screenY,
			this.nativePlugIn.SetScreenNum(e, t),
			this
		},
		f.prototype.openStreaming = function(e, t, n) {
			var r = this,
			i = this,
			o = this.extractYDUrl(e),
			a = this.screenIndexToNative(n);
			return i.doPromise(function() {
				var e = i.nativePlugIn.PlayUrlEx(o.address, o.name, a, o.args);
				if (r.setLastVideoUpdateTime(o.sn, o.channel, 0), void 0 !== r.nativePlugIn.RegisterVideoTimeCallback) try {
					r.nativePlugIn.RegisterVideoTimeCallback()
				} catch(e) {
					u.Log.debug(r.LOG_TAG, e),
					u.Log.warn("RegisterVideoTimeCallback failed.")
				}
                console.log(6)
				return e
			})
		},
		f.prototype.closeStreaming = function(e) {
			var t = this;
			return t.doPromise(function() {
				return t.nativePlugIn.StopActiveVideo()
			})
		},
		f.prototype.closeAllStreaming = function() {
			return this.stopAll()
		},
		f.prototype.queryRecords = function(e, t, n) {
			var f = this,
			g = f.extractYDUrl(e),
			r = y.DateUtils.toDateTimeString(t),
			i = y.DateUtils.toDateTimeString(n);
			return new Promise(function(p, t) {
				var h = function(e, t, n) {
					if (g.sn == e && g.channel == t) {
						for (var r = JSON.parse(n), i = [], o = 0; o < r.length; o++) {
							var a = r[o],
							s = a.fileName,
							c = y.DateUtils.parseDate(a.starttime.replace(/-/gi, "/")),
							u = y.DateUtils.parseDate(a.endtime.replace(/-/gi, "/")),
							l = new v.RecordInfo(s, c, u, v.RecordType.UNKNOWN);
							i.push(l)
						}
						f.removeNativeEventListener("searchrecord", h);
						var d = {
							url: g.url,
							records: i.sort(function(e, t) {
								return e.startTime.getTime() - t.startTime.getTime()
							})
						};
						p(d)
					}
				};
				f.addNativeEventListener("searchrecord", h);
				try {
					f.nativePlugIn.SearchRemoteRecordEx(g.address, g.name, g.args, r, i)
				} catch(e) {
					t(e)
				}
			})
		},
		f.prototype.openPlayback = function(e, i, o) {
			var a = this,
			s = this,
			c = s.extractYDUrl(e);
			return new Promise(function(e, t) {
				var n = y.DateUtils.toDateTimeString(i),
				r = a.screenIndexToNative(o);
				try {
					if (s.nativePlugIn.PlayOnlineRecord(c.address, c.name, n, r, c.args), a.setLastVideoUpdateTime(c.sn, c.channel, 0), void 0 !== a.nativePlugIn.RegisterVideoTimeCallback) try {
						a.nativePlugIn.RegisterVideoTimeCallback()
					} catch(e) {
						u.Log.debug(a.LOG_TAG, e),
						u.Log.warn("RegisterVideoTimeCallback failed.")
					}
					e()
				} catch(e) {
					t(e)
				}
			})
		},
		f.prototype.closePlayback = function(e) {
			return this.stop()
		},
		f.prototype.changePlayback = function(e, t) {
			var n = this;
			return n.doPromise(function() {
				return n.nativePlugIn.SetRecordSpeed(e)
			})
		},
		f.prototype.stop = function(e) {
			var t = this;
			return t.doPromise(function() {
				return t.nativePlugIn.StopActiveVideo()
			})
		},
		f.prototype.stopAll = function() {
			var e = this;
			return e.doPromise(function() {
				return e.nativePlugIn.StopAllVideo()
			})
		},
		f.prototype.toggleAudio = function(e) {
			this.nativePlugIn.PlayAudio()
		},
		f.prototype.mute = function() {},
		f.prototype.requestFullscreen = function(e) {
			var t = this;
			return t.doPromise(function() {
				return t.nativePlugIn.fullscreen()
			})
		},
		f.prototype.capture = function(e) {
			var o = this;
			return new Promise(function(i, t) {
				o.onceNativeEvent("capturepicture",
				function(e, t, n) {
					var r = o.wrapperNativeCaptureResult(e, t);
					i(r)
				});
				try {
					null != e && 0 <= e ? o.nativePlugIn.ScreenShotView(e, 0) : o.nativePlugIn.Screenshot(0, 1, 0)
				} catch(e) {
					t(e)
				}
			})
		},
		f.prototype.captureAll = function() {
			var o = this;
			return new Promise(function(e, t) {
				function n(e, t, n) {
					var r = o.wrapperNativeCaptureResult(e, t);
					i.push(r)
				}
				var i = [];
				o.addNativeEventListener("capturepicture", n),
				o.addNativeEventListener("oncallbackcapture", n),
				o.addNativeEventListener("oncallbackcapturereal", n);
				try {
					o.nativePlugIn.Screenshot(1, 1, 0)
				} catch(e) {
					u.Log.debug(o.LOG_TAG, e),
					t(e)
				}
				setTimeout(function() {
					o.removeNativeEventListener("capturepicture", n),
					o.removeNativeEventListener("oncallbackcapture", n),
					o.removeNativeEventListener("oncallbackcapturereal", n),
					i && 0 < i.length && e(i)
				},
				2e3)
			})
		},
		f.prototype.controlPtz = function(e, t, n, r) {
			void 0 === n && (n = 5),
			void 0 === r && (r = "");
			var i = this;
			return n = n || 0,
			r = r || "",
			i.doPromise(function() {
				if (void 0 !== i.nativePlugIn.Ptz_CtrlEx) try {
					return i.nativePlugIn.Ptz_CtrlEx(t, n, r)
				} catch(e) {
					u.Log.debug(i.LOG_TAG, e)
				}
				return i.nativePlugIn.Ptz_Ctrl(t, n)
			})
		},
		f.prototype.getConfig = function(e, t) {
			var s = this,
			n = t || s.selectedIndex;
			return void 0 === n ? Promise.reject(new Error("no selected screen")) : new Promise(function(o, a) {
				if ("prepoint" == e) {
					s.onceNativeEvent("prepointdata",
					function(e, t, n) {
						console.log(n);
						var r = (new DOMParser).parseFromString(n, "text/xml"),
						i = s.parseGeneralConfig(r);
						i.parsererror ? a(new Error("parse prepoint data error")) : o(i)
					});
					try {
						s.nativePlugIn.GetPrePointCfg()
					} catch(e) {
						var t = new c.NotSupportedError("不支持预置位功能，请升级播放插件");
						a(t)
					}
				} else if ("devbase" == e) {
					s.onceNativeEvent("onDeviceInfoCallback",
					function(e) {
						var t = (new DOMParser).parseFromString(e, "text/xml"),
						n = r.xml2json(t);
						o(n)
					});
					try {
						s.nativePlugIn.getDeviceInfo(n)
					} catch(e) {
						a(e)
					}
				} else a(new Error("getConfig for: " + e + " is not supported."))
			})
		},
		f.prototype.isSupportPtz = function(e) {
			var t = this,
			n = void 0 === e ? t.selectedIndex: e;
			if (void 0 === n) return Promise.reject("screenIndex is undefined.");
			var r = t.playingUrls[n],
			i = (null == r ? void 0 : r.channel) || 0;
			return t.getConfig("devbase", e).then(function(e) {
				var t = "channel" + i;
				return !! (e && e[t] && e[t].ptz && e[t].ptz.support)
			},
			function(e) {
				return u.Log.debug(t.LOG_TAG, "获取设备配置时发生错误：", e),
				!0
			})
		},
		f.prototype.setFitMode = function(e, t) {},
		f);
		function f(e, t) {
			var a = i.call(this) || this;
			a.LOG_TAG = "[NativePlayer] > ",
			a._isActiveX = !1,
			a._isNpapi = !1,
			a.selectedIndex = void 0,
			a.playingUrls = {},
			a.lastVideoTimes = {},
			a.defaults = {
				screenX: 2,
				screenY: 2,
				ratio: .5625
			},
			a.onNativeActiveWindow = function(e, t, n) {
				if (a.selectedIndex = n, e) {
					var r = a.fakeYDUrl(e, t);
					a.playingUrls[n] = r,
					a.emit("selectedIndexChanged", n, r)
				} else a.playingUrls[n] = void 0,
				a.emit("selectedIndexChanged", n, void 0)
			},
			a.onNativeCaptureCallback = function(e, t, n) {
				var r = a.wrapperNativeCaptureResult(e, t);
				return a.emit("captured", r),
				r
			},
			a.wrapperNativeCaptureResult = function(e, t) {
				return {
					url: a.fakeYDUrl(e, 0),
					data: "data:image/jpeg;base64," + t
				}
			},
			a.onVideoTimeUpdate = function(e, t, n, r) {
				if (t && 250 < r - a.getLastVideoUpdateTime(t, n)) {
					a.setLastVideoUpdateTime(t, n, r);
					var i = a.fakeYDUrl(t, n),
					o = r / 1e3;
					u.Log.debug(a.LOG_TAG, "onVideoTimeUpdate, scrIndex=" + e + ", url=" + i + ", time=" + o),
					a.emit("videoTimeUpdate", e, i, o)
				}
			};
			var n = "ydplayer-" + ++h;
			if (a.options = Object.assign({},
			a.defaults, t), a.screenX = a.options.screenX || 2, a.screenY = a.options.screenY || 2, a.ratio = a.options.ratio || .5625, a.screenX < 1 || a.screenY < 1) throw new Error("screens must be greater than 1");
			if (a.nativeEventBridge = new s.EventEmitter, a.container = e, f.supportActiveX() ? (e.innerHTML = '<div class="ydplayer"><div class="ydplayer-native-view"><object id=' + n + ' class="ydplayer-native-player" type="' + l + '" classid="CLSID:DFE02170-BE7A-5FD5-9483-BA47C65A3518"></object></div></div>', a._isActiveX = !0) : (e.innerHTML = '<div class="ydplayer"><div class="ydplayer-native-view"><embed id=' + n + ' class="ydplayer-native-player" type="' + l + '" /></div></div>', a._isNpapi = !0), a.nativePlugIn = document.getElementById(n), !a.nativePlugIn || void 0 === a.nativePlugIn.GetVersionNum) throw e.innerHTML = "",
			new Error("create native plugin failed.");
			var r = a.nativePlugIn.parentElement;
			r && (r.style.paddingBottom = 100 * a.ratio + "%"),
			a.nativePlugInVersion = 0;
			try {
				a.nativePlugInVersion = a.nativePlugIn.GetVersionNum()
			} catch(e) {
				u.Log.debug(a.LOG_TAG, e)
			}
			return a.initNativePlugin(),
			a
		}
		n.NativePlayer = a
	},
	{
		"../../styles/compatible.css": 113,
		"../io/yd/avformat": 56,
		"../io/yd/url": 66,
		"../utils/date": 106,
		"../utils/error": 108,
		"../utils/log": 109,
		"../utils/number": 110,
		"../utils/xml2json": 112,
		events: 45,
		tslib: 49
	}],
	YDPlayerCompatible: [function(e, t, n) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		}),
		n.createPlayer = n.supportedPlayers = n.isSupported = void 0;
		var a = e("../player"),
		s = e("./native-player"),
		c = e("../utils/log"),
		u = e("../utils/currentscript");
		function l() {
			return !! s.NativePlayer.isSupported() || a.YDPlayer.isSupported()
		}
		function d(e) {
			for (; e.lastChild;) e.removeChild(e.lastChild)
		}
		n.isSupported = l,
		n.supportedPlayers = function() {
			return {
				activeX: s.NativePlayer.supportActiveX(),
				npapi: s.NativePlayer.supportNpapi(),
				ydplayerjs: a.YDPlayer.isSupported()
			}
		},
		n.createPlayer = function(e, t, n) {
			if (u.updateCurrentScriptSrc("ydplayer-compatible.js"), !e) throw new Error("container cannot be null or undefined.");
			if (!l()) throw new Error("this browser is not supported."); (n = n || ["native", "ydplayerjs"]) instanceof Array || (n = [n]);
			for (var r = 0,
			i = n; r < i.length; r++) {
				var o = i[r];
				if (d(e), "native" == o && (s.NativePlayer.supportActiveX() || s.NativePlayer.supportNpapi())) try {
					return new s.NativePlayer(e, t)
				} catch(e) {
					c.Log.debug("[compatible] > ", e)
				} else if ("ydplayerjs" == o && a.YDPlayer.isSupported()) try {
					return new a.YDPlayer(e, t)
				} catch(e) {
					c.Log.debug("[compatible] > ", e)
				}
				d(e)
			}
			throw new Error("can not create player.")
		}
	},
	{
		"../player": "YDPlayer",
		"../utils/currentscript": 104,
		"../utils/log": 109,
		"./native-player": "NativePlayer"
	}],
	YDPlayer: [function(e, t, d) {
		"use strict";
		Object.defineProperty(d, "__esModule", {
			value: !0
		}),
		d.YDPlayer = d.UnavailableScreenIndex = void 0;
		var l = e("tslib"),
		n = e("events"),
		u = e("./core/yd-error"),
		a = e("./io/yd/url"),
		p = e("./player-core"),
		h = e("./utils/log"),
		r = e("./plugins/plugin-manager"),
		o = e("./play-context"),
		i = e("./plugins/plugin-command"),
		f = e("./plugins/plugin-events"),
		s = e("./player-base");
		e("./lib/object.assign"),
		e("core-js/stable/typed-array/slice"),
		e("es6-promise/auto"),
		e("url-polyfill"),
		e("fast-text-encoding");
		e("../styles/ydplayer.css");
		d.UnavailableScreenIndex = -1;
		var c, g = (c = n.EventEmitter, l.__extends(y, c), Object.defineProperty(y.prototype, "selectedIndex", {
			get: function() {
				return this.selectedIndexValue
			},
			enumerable: !1,
			configurable: !0
		}), y.isSupported = function() {
			var e = window.MediaSource,
			t = window.WebAssembly;
			return ! (!e || "function" != typeof e.isTypeSupported) || !(!t || "function" != typeof t.instantiate)
		},
		y.isSupportedMSEH265 = function() {
			return p.YDPlayerCore.isSupportedMSEH265()
		},
		y.prototype.triggerEvent = function(e) {
			for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			return this.emit.apply(this, l.__spreadArray([e], t))
		},
		y.prototype.initPlugins = function() {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return t = this.options.plugins || ["spinner", "operationBar", "locate3d", "monitoring"],
						[4, (n = this.plugInManager).register.apply(n, t)];
					case 1:
						return [2, e.sent()]
					}
				})
			})
		},
		y.prototype.init = function() {
			this.updateVideoViewSize(),
			this.renderVideoViews(),
			this.clearUnusedContexts()
		},
		y.prototype.createElement = function(e, t) {
			return document.createElement(e, t)
		},
		y.prototype.createWrapper = function() {
			var e = this.createElement("div");
			return e.className = y.WRAPPER_CSS_CLASS_NAME,
			e.tabIndex = 1,
			e.onkeyup = this.onWrapperKeyUp,
			e.addEventListener("fullscreenchange", this.onWrapperFullscreen),
			e
		},
		y.prototype.renderVideoViews = function() {
			for (var e = 0; e < this.screenY; e++) for (var t = 0; t < this.screenX; t++) {
				var n = e * this.screenX + t,
				r = this.contexts[n];
				if (r) {
					var i = r.view;
					this.setVideoViewStyle(i, t, e)
				} else i = this.createVideoView()[0],
				this.setVideoViewStyle(i, t, e),
				i.setAttribute("contextIndex", n + ""),
				r = new o.PlayContext(i),
				this.contexts[n] = r,
				this.wrapper.appendChild(i),
				this.plugInManager.emit(f.PlugInEvent.playerViewCreated, r, i)
			}
		},
		y.prototype.updateVideoViewSize = function() {
			var e = this.wrapper.offsetWidth,
			t = this.wrapper.offsetHeight;
			this.ratio || (e && t ? this.ratio = this.wrapper.offsetHeight * this.screenX / (e * this.screenY) : (this.ratio = y.DEFAULT_RATIO, t = e * this.ratio)),
			e && t && (this.viewWidth = Math.floor(e / this.screenX), this.viewHeight = Math.floor(t / this.screenY))
		},
		y.prototype.clearUnusedContexts = function() {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n, r, i = this;
				return l.__generator(this,
				function(e) {
					for (t = this.screenX * this.screenY; n = this.contexts[t];) this.clearTimeout(n),
					r = n.core,
					this.wrapper.removeChild(n.view),
					r && (r.destroy().
					catch(function(e) {
						h.Log.debug(i.LOG_TAG, "destroy core error: " + e)
					}), delete n.core),
					delete this.contexts[t],
					this.plugInManager.emit(f.PlugInEvent.playerViewRemoved, n),
					t++;
					return [2]
				})
			})
		},
		y.prototype.setVideoViewStyle = function(e, t, n) {
			e.style.width = 100 / this.screenX + "%";
			var r = this.ratio || y.DEFAULT_RATIO;
			return e.style.paddingTop = 100 * r / this.screenX + "%",
			e
		},
		y.prototype.createVideoView = function() {
			var e = this.createElement("div");
			return e.className = y.VIDEO_VIEW_CSS_CLASS_NAME,
			e.onclick = this.onVideoViewClick,
			e.ondblclick = this.onVideoViewDoubleClick,
			[e]
		},
		y.prototype.isAvailableScreenIndex = function(e) {
			return void 0 !== e && 0 <= e && e < this.screenX * this.screenY
		},
		y.prototype.setContextActive = function(e, t) {
			t ? e.view.classList.add("active") : e.view.classList.remove("active")
		},
		y.prototype.selectScreenByIndex = function(e, t) {
			var n, r;
			for (var i in void 0 === t && (t = !0), this.contexts) {
				var o = parseInt(i),
				a = this.contexts[o];
				a && a.view && (o === e ? (n = o, r = a, this.setContextActive(a, !0)) : this.setContextActive(a, !1))
			}
			if (t || this.selectedIndexValue !== n) {
				this.selectedIndexValue = n;
				var s = r && r.core ? r.core.url: void 0;
				this.triggerEvent("selectedIndexChanged", n, s)
			}
		},
		y.prototype.selectScreenByVideo = function(e, t) {
			var n, r;
			for (var i in void 0 === t && (t = !0), this.contexts) {
				var o = parseInt(i),
				a = this.contexts[o];
				a.view == e ? (n = o, r = a, this.setContextActive(a, !0)) : this.setContextActive(a, !1)
			}
			if (t || this.selectedIndexValue !== n) {
				this.selectedIndexValue = n;
				var s = r && r.core ? r.core.url: void 0;
				this.triggerEvent("selectedIndexChanged", n, s)
			}
		},
		y.prototype.getSelectedContext = function(e) {
			var t = e;
			if (void 0 === t && (t = this.selectedIndex), void 0 !== t && this.isAvailableScreenIndex(t)) return this.contexts[t]
		},
		y.prototype.getIdlePlayContext = function() {
			for (var e in this.contexts) {
				var t = parseInt(e),
				n = this.contexts[t];
				if (n && !n.core) return [t, n]
			}
			return [void 0, void 0]
		},
		y.prototype.findNextPlayContext = function(e) {
			var t, n;
			return void 0 !== e && this.isAvailableScreenIndex(e) ? n = this.contexts[e] : (e = this.selectedIndex, (n = this.getSelectedContext()) && !n.core || (e = (t = this.getIdlePlayContext())[0], n = t[1])),
			[e, n]
		},
		y.prototype.getPlayingContext = function(e) {
			var t = new a.YDUrl(e);
			for (var n in this.contexts) {
				var r = parseInt(n),
				i = this.contexts[r];
				if (i && i.core && i.core.url) {
					var o = i.core.url;
					if (o.toString() === e) return [r, i];
					if (o.sn === t.sn && o.channel === t.channel) return [r, i]
				}
			}
			return [void 0, void 0]
		},
		y.prototype.indexOfPlayerCore = function(e) {
			for (var t in this.contexts) {
				var n = Number(t),
				r = this.contexts[n];
				if (r && r.core && r.core == e) return n
			}
			return - 1
		},
		y.prototype.bindPlayerCoreEvents = function(t, n) {
			var r = this,
			i = this;
			n.addListener("playing",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.triggerEvent("playing", i.indexOfPlayerCore(n), e)
			}),
			n.addListener("buffering",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.triggerEvent("buffering", i.indexOfPlayerCore(n), e)
			}),
			n.addListener("streamingStateChanged",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.triggerEvent("streamingStateChanged", i.indexOfPlayerCore(n), e)
			}),
			n.addListener("stop",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.triggerEvent("stop", i.indexOfPlayerCore(n), e)
			}),
			n.addListener("disconnected",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.onCoreDisconnected(n)
			}),
			n.addListener("videoTimeUpdate",
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				i.triggerEvent.apply(i, l.__spreadArray(["videoTimeUpdate", r.indexOfPlayerCore(n), n.url], e))
			}),
			n.addListener("videoError",
			function(e) {
				i.onVideoError(e)
			}),
			n.addListener("playerCreated",
			function(e) {
				i.plugInManager.emit(f.PlugInEvent.internalPlayerCreated, e, t)
			}),
			n.addListener("playerDestorying",
			function(e) {
				i.plugInManager.emit(f.PlugInEvent.internalPlayerDestroying, e, t)
			})
		},
		y.prototype.createPlayerCore = function(e, t) {
			var n = Object.assign({},
			this.options);
			n.objectFit = this.options.fitMode;
			var r = new p.YDPlayerCore(e, t, n);
			return this.bindPlayerCoreEvents(e, r),
			r
		},
		y.prototype.setTimeout = function(e, t, n) {
			e && (e.timer = window.setTimeout(t, n))
		},
		y.prototype.clearTimeout = function(e) {
			e && e.timer && window.clearTimeout(e.timer)
		},
		y.prototype.showMessage = function(e, t, n) {
			this.hideMessage(e);
			var r = this.createElement("div");
			r.className = y.VIDEO_VIEW_MESSAGE_CLASS_NAME,
			n && r.classList.add(n),
			r.innerText = t,
			e.view.appendChild(r)
		},
		y.prototype.hideMessage = function(e) {
			if (e && e.view) for (var t = e.view.children,
			n = 0; n < t.length; n++) {
				var r = e.view.children.item(n);
				r && r.className && r.classList.contains(y.VIDEO_VIEW_MESSAGE_CLASS_NAME) && e.view.removeChild(r)
			}
		},
		y.prototype.isDocumentFullScreen = function() {
			return !! (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
		},
		y.prototype.toggleFullScreen = function(t) {
			// 改为全屏
			// console.log(t);
			return l.__awaiter(this, void 0, void 0,
			function() {
				return l.__generator(this,
				function(e) {
					console.log(e.label)
					// 大 0137
					// 小 0457
					switch (e.label) {
					case 0:
						return this.isDocumentFullScreen() ? [3, 4] : t.requestFullscreen ? [4, t.requestFullscreen()] : [3, 2];
					case 1:
						api.setScreenOrientation({ orientation: 'landscape_left' });
						return e.sent(),
						[3, 3];
					case 2:
						// 放大
						api.setScreenOrientation({ orientation: 'landscape_left' });
						t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen(),
						e.label = 3;
					case 3:
						return [3, 7];
					case 4:
						// 缩小
						api.setScreenOrientation({ orientation: 'portrait_up' });
						return document.exitFullscreen ? [4, document.exitFullscreen()] : [3, 6];
					case 5:
						return e.sent(),
						[3, 7];
					case 6:
						api.setScreenOrientation({ orientation: 'portrait_up' });
						document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(),
						e.label = 7;
					case 7:
						return [2]
					}
				})
			})
		},
		y.prototype.fireFullScreenChanged = function(e) {
			this.triggerEvent("fullScreenChanged", e),
			this.changeStreamOnFullScreenChanged(e)
		},
		y.prototype.fireScreenNumberChanged = function(e) {
			this.triggerEvent("screenNumberChanged", e),
			this.changeStreamOnScreenNumberChanged(e)
		},
		y.prototype.checkConcurrence = function(e) {
			if (!this.options.multiplePlay) {
				var t = this.getPlayingContext(e),
				n = t[0];
				if (t[1] && void 0 !== n && this.isAvailableScreenIndex(n)) return this.selectScreenByIndex(n, !1),
				{
					conflict: !0,
					conflictIdx: n
				}
			}
			return {
				conflict: !1,
				conflictIdx: d.UnavailableScreenIndex
			}
		},
		y.prototype.internalOpenStreaming = function(o, a, s, c, u) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n, r, i;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						if (void 0 === c && (t = !!this.options.autoChangeStream && 1 === this.screenX && 1 === this.screenY, c = t ? p.VideoStreamMain: p.VideostreamSub), !o.core) return [3, 5];
						e.label = 1;
					case 1:
						return e.trys.push([1, 3, , 4]),
						[4, o.core.destroy(u)];
					case 2:
						return e.sent(),
						[3, 4];
					case 3:
						return n = e.sent(),
						h.Log.warn(n),
						[3, 4];
					case 4:
						delete o.core,
						e.label = 5;
					case 5:
						r = this.createPlayerCore(o.view, s),
						o.core = r,
						this.plugInManager.emit(f.PlugInEvent.playCoreCreated, o, r),
						this.plugInManager.emit(f.PlugInEvent.beforeOpenStreaming, o),
						e.label = 6;
					case 6:
						return e.trys.push([6, 8, , 10]),
						[4, r.openStreaming(c)];
					case 7:
						return e.sent(),
						[3, 10];
					case 8:
						return i = e.sent(),
						[4, o.core.destroy(u)];
					case 9:
						throw e.sent(),
						delete o.core,
						this.showMessage(o, "" + i),
						i;
					case 10:
						return [2, a]
					}
				})
			})
		},
		y.prototype.internalOpenPlayback = function(r, i, o, a) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return r.core ? [4, r.core.destroy()] : [3, 2];
					case 1:
						e.sent(),
						delete r.core,
						e.label = 2;
					case 2:
						t = this.createPlayerCore(r.view, o),
						r.core = t,
						this.plugInManager.emit(f.PlugInEvent.playCoreCreated, r, t),
						this.hideMessage(r),
						this.plugInManager.emit(f.PlugInEvent.beforeOpenPlayback, r),
						e.label = 3;
					case 3:
						return e.trys.push([3, 5, , 7]),
						[4, t.openPlayback(a)];
					case 4:
						return e.sent(),
						[3, 7];
					case 5:
						return n = e.sent(),
						[4, r.core.destroy()];
					case 6:
						throw e.sent(),
						delete r.core,
						this.showMessage(r, "" + n),
						n;
					case 7:
						return [2, i]
					}
				})
			})
		},
		y.prototype.onCoreDisconnected = function(e) {
			var t = this.indexOfPlayerCore(e),
			n = this.contexts[t];
			if (n && n.core) if (n.core.playState === p.PlayState.PLAYING && n.core.playMode === p.PlayMode.STREAMING) {
				var r = this,
				i = n.core.url,
				o = n.core.videoStreamIndex;
				r.showMessage(n, "正在重连...");
				var a = function() {
					r.setTimeout(n,
					function() {
						r.internalOpenStreaming(n, t, i, o, !0).then(function() {
							r.clearTimeout(n),
							r.hideMessage(n)
						}).
						catch(function() {
							r.clearTimeout(n),
							a()
						})
					},
					5e3)
				};
				a()
			} else n.core.playState === p.PlayState.PLAYING && this.showMessage(n, "连接已断开", "danger")
		},
		y.prototype._capture = function(o) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var r, i = this;
				return l.__generator(this,
				function(e) {
					return r = this,
					[2, new Promise(function(e, t) {
						if (r.pendingCapture) t(u.yderror(u.YDErrorCode.ACTION_PENDING, "截图操作正在进行中"));
						else {
							if (r.pendingCapture = !0, o.core && o.core.playState === p.PlayState.PLAYING) {
								var n = {
									url: o.core.url,
									data: o.core.capture()
								};
								e(n),
								i.triggerEvent("captured", n)
							} else t(u.yderror(u.YDErrorCode.NONE, "未开启视频播放或播放失败"));
							r.pendingCapture = !1
						}
					})]
				})
			})
		},
		y.prototype._stop = function(n) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						if (!n) return [2];
						if (this.clearTimeout(n), !n.core) return [3, 5];
						e.label = 1;
					case 1:
						return e.trys.push([1, 3, , 4]),
						[4, n.core.destroy()];
					case 2:
						return e.sent(),
						[3, 4];
					case 3:
						return t = e.sent(),
						h.Log.warn(this.LOG_TAG, t),
						[3, 4];
					case 4:
						delete n.core,
						e.label = 5;
					case 5:
						return this.hideMessage(n),
						[2]
					}
				})
			})
		},
		y.prototype.setScreens = function(e, t) {
			var n = this.screenX,
			r = this.screenY;
			if (this.screenX = e, this.screenY = t, this.readyState) return this.init(),
			this.fireScreenNumberChanged({
				x: this.screenX,
				y: this.screenY,
				originalX: n,
				originalY: r
			}),
			this
		},
		y.prototype.getScreens = function() {
			return {
				x: this.screenX,
				y: this.screenY
			}
		},
		y.prototype.openStreaming = function(e, t, n) {
			var r = this.checkConcurrence(e),
			i = r.conflict,
			o = r.conflictIdx;
			if (i) return Promise.resolve(o);
			var a = this.findNextPlayContext(n),
			s = a[0],
			c = a[1];
			if (!c || void 0 === s) return h.Log.debug(this.LOG_TAG, "can not find available player"),
			Promise.resolve(d.UnavailableScreenIndex);
			this.hideMessage(c);
			var u = this,
			l = s;
			return this.internalOpenStreaming(c, l, e, t).then(function(e) {
				return u.options.autoSelect && u.selectScreenByIndex(l, !0),
				e
			})
		},
		y.prototype.closeStreaming = function(i) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n, r;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						if (! (t = this.getSelectedContext(i))) return [3, 8];
						if (this.clearTimeout(t), !t.core) return [3, 8];
						e.label = 1;
					case 1:
						return e.trys.push([1, 3, , 4]),
						[4, t.core.closeStreaming()];
					case 2:
						return e.sent(),
						[3, 4];
					case 3:
						return n = e.sent(),
						h.Log.error(this.LOG_TAG, n),
						[3, 4];
					case 4:
						return e.trys.push([4, 6, , 7]),
						[4, t.core.destroy()];
					case 5:
						return e.sent(),
						[3, 7];
					case 6:
						return r = e.sent(),
						h.Log.error(this.LOG_TAG, r),
						[3, 7];
					case 7:
						delete t.core,
						e.label = 8;
					case 8:
						return [2]
					}
				})
			})
		},
		y.prototype.toggleStreamingStream = function(e, t) {
			if (void 0 === e || void 0 === t) return Promise.reject("arguments error");
			var n = this,
			r = n.getSelectedContext(t);
			if (r && r.core && r.core.playMode === p.PlayMode.STREAMING) {
				var i = r.core.url;
				return n.stop(t).then(function() {
					return n.hideMessage(r),
					n.internalOpenStreaming(r, t, i, e)
				})
			}
			return Promise.resolve()
		},
		y.prototype.getPlayingUrl = function(e) {
			var t;
			if (this.isAvailableScreenIndex(e)) {
				var n = this.contexts[e];
				return null === (t = null == n ? void 0 : n.core) || void 0 === t ? void 0 : t.url.originalString
			}
		},
		y.prototype.closeAllStreaming = function() {
			var e = [];
			for (var t in this.contexts) {
				var n = parseInt(t),
				r = this.closeStreaming(n);
				e.push(r)
			}
			return Promise.all(e)
		},
		y.prototype.getConfig = function(e, t) {
			var n = this.getSelectedContext(t);
			return n && n.core ? n.core.getConfig(e) : Promise.reject(u.yderror(u.YDErrorCode.NONE, "需要选择一个播放画面。"))
		},
		y.prototype.isSupportPtz = function(e) {
			var t = this.getSelectedContext(e);
			return t && t.core ? t.core.isSupportPtz() : Promise.resolve(!1)
		},
		y.prototype.queryRecords = function(o, a, s) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n, r, i;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return t = document.createElement("video"),
						n = new p.YDPlayerCore(t, o),
						r = n.url,
						[4, n.queryRecords(a, s)];
					case 1:
						return i = e.sent(),
						n.destroy(),
						t.remove,
						t.remove(),
						[2, {
							url: r,
							records: i
						}]
					}
				})
			})
		},
		y.prototype.openPlayback = function(e, t, n) {
			var r = this,
			i = this.findNextPlayContext(n),
			o = i[0],
			a = i[1];
			if (!a || void 0 === o) return h.Log.debug(this.LOG_TAG, "can not find available player"),
			Promise.resolve(d.UnavailableScreenIndex);
			var s = o;
			return this.internalOpenPlayback(a, s, e, t).then(function(e) {
				return r.options.autoSelect && r.selectScreenByIndex(s, !0),
				e
			})
		},
		y.prototype.closePlayback = function(i) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t, n, r;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						if (! (t = this.getSelectedContext(i)) || !t.core) return [3, 8];
						e.label = 1;
					case 1:
						return e.trys.push([1, 3, , 4]),
						[4, t.core.closePlayback()];
					case 2:
						return e.sent(),
						[3, 4];
					case 3:
						return n = e.sent(),
						h.Log.error(this.LOG_TAG, n),
						[3, 4];
					case 4:
						return e.trys.push([4, 6, , 7]),
						[4, t.core.destroy()];
					case 5:
						return e.sent(),
						[3, 7];
					case 6:
						return r = e.sent(),
						h.Log.error(this.LOG_TAG, r),
						[3, 7];
					case 7:
						delete t.core,
						e.label = 8;
					case 8:
						return [2]
					}
				})
			})
		},
		y.prototype.changePlayback = function(n, r) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return (t = this.getSelectedContext(r)) && t.core ? [4, t.core.changePlayback(n)] : [3, 2];
					case 1:
						return [2, e.sent()];
					case 2:
						return [2]
					}
				})
			})
		},
		y.prototype.stop = function(n) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return (t = this.getSelectedContext(n)) ? [4, this._stop(t)] : [3, 2];
					case 1:
						e.sent(),
						e.label = 2;
					case 2:
						return [2]
					}
				})
			})
		},
		y.prototype.stopAll = function() {
			var e = [];
			for (var t in this.contexts) {
				var n = parseInt(t),
				r = this.stop(n);
				e.push(r)
			}
			return Promise.all(e)
		},
		y.prototype.toggleAudio = function(e) {
			var t = this.getSelectedContext(e);
			if (t && t.core) {
				for (var n in this.contexts) {
					var r = this.contexts[n];
					r && r.core && r != t && (r.core.muted = !0)
				}
				t.core.muted = !t.core.muted
			}
		},
		y.prototype.mute = function() {
			for (var e in this.contexts) {
				var t = this.contexts[e];
				t && t.core && (t.core.muted = !0)
			}
		},
		y.prototype.requestFullscreen = function(n) {
			return l.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return l.__generator(this,
				function(e) {
					console.log(e.label);
					switch (e.label) {
					case 0:
						return void 0 === n ? [3, 2] : this.isAvailableScreenIndex(n) && (t = this.contexts[n]) && t.view ? [4, this.toggleFullScreen(t.view)] : [3, 2];
					case 1:
						return e.sent(),
						[2];
					case 2:
						return [4, this.toggleFullScreen(this.wrapper)];
					case 3:
						return e.sent(),
						[2]
					}
				})
			})
		},
		y.prototype.capture = function(e) {
			var t = this.getSelectedContext(e);
			return t ? this._capture(t) : Promise.reject(u.yderror(u.YDErrorCode.NONE, "未开启视频播放或播放失败"))
		},
		y.prototype.captureAll = function() {
			var s = this,
			c = this;
			return new Promise(function(e, t) {
				if (c.pendingCapture) t(u.yderror(u.YDErrorCode.ACTION_PENDING, "截图操作正在进行中"));
				else {
					c.pendingCapture = !0;
					var n = [];
					for (var r in s.contexts) {
						var i = s.contexts[r];
						if (i && i.core && i.core.playState === p.PlayState.PLAYING) {
							var o = {
								url: i.core.url,
								data: i.core.capture()
							};
							o.data && 0 < o.data.length && n.push(o)
						}
					}
					e(n);
					for (var a = 0; a < n.length; a++) s.triggerEvent("captured", n[a]);
					c.pendingCapture = !1
				}
			})
		},
		y.prototype.controlPtz = function(n, r, i, o) {
			return void 0 === i && (i = 5),
			void 0 === o && (o = ""),
			l.__awaiter(this, void 0, void 0,
			function() {
				var t;
				return l.__generator(this,
				function(e) {
					switch (e.label) {
					case 0:
						return (t = this.getSelectedContext(n)) && t.core ? [4, t.core.controlPtz(r, i, o)] : [3, 2];
					case 1:
						return [2, e.sent()];
					case 2:
						return [2]
					}
				})
			})
		},
		y.prototype.setFitMode = function(e, t) {
			var n = this.getSelectedContext(t);
			n && n.core && (n.core.objectFit = e)
		},
		y.WRAPPER_CSS_CLASS_NAME = "ydplayer", y.VIDEO_CSS_CLASS_NAME = "ydplayer-video", y.VIDEO_VIEW_CSS_CLASS_NAME = "ydplayer-video-view", y.VIDEO_VIEW_MESSAGE_CLASS_NAME = "ydplayer-video-message", y.VIDEO_VIEW_OPERATE_DISABLED_CLASS_NAME = (y.VIDEO_VIEW_OPERATE_CLASS_NAME = "ydplayer-video-operate") + " disabled", y.VIDEO_VIEW_OPERATEBTN_CLASS_NAME = {
			PLAY: "control control-play",
			VOLUME: "control control-volume",
			PLAYBACK: "control control-palyBack",
			SCREENSHOT: "control control-screenshot"
		},
		y.DEFAULT_SCREEN_X = 2, y.DEFAULT_SCREEN_Y = 2, y.DEFAULT_RATIO = .5625, y);
		function y(e, t) {
			var o = c.call(this) || this;
			if (o.LOG_TAG = "[YDPlayer] > ", o.plugInManager = r.PlugInManager.Default, o.readyState = !1, o.viewWidth = 0, o.viewHeight = 0, o.contexts = {},
			o.selectedIndexValue = void 0, o.pendingCapture = !1, o.defaults = {
				screenX: y.DEFAULT_SCREEN_X,
				screenY: y.DEFAULT_SCREEN_Y,
				ratio: y.DEFAULT_RATIO,
				spinner: !0,
				fitMode: "fill",
				hideMessage: !1,
				multiplePlay: !1,
				autoSelect: !0,
				autoChangeStream: !0,
				plugins: ["spinner", "operationBar", "locate3d", "monitoring"],
				frameDuration: s.FrameDuration.FPS,
				engines: ["mse"]
			},
			o.onWrapperKeyUp = function(e) {
				var t = o.selectedIndex;
				if (void 0 !== t && o.isAvailableScreenIndex(t)) {
					switch (e.keyCode) {
					case 37:
						t -= 1;
						break;
					case 38:
						t -= o.screenX;
						break;
					case 39:
						t += 1;
						break;
					case 40:
						t += o.screenX
					}
					o.isAvailableScreenIndex(t) && o.selectScreenByIndex(t, !1)
				} else o.selectScreenByIndex(0, !1)
			},
			o.videoClickTimer = 0, o.onVideoViewClick = function(e) {
				var t = o;
				o.videoClickTimer && clearTimeout(o.videoClickTimer);
				var n = e.currentTarget;
				h.Log.debug(t.LOG_TAG, "onVideoViewClick..."),
				n && t.selectScreenByVideo(n, !1)
			},
			o.onVideoViewDoubleClick = function(e) {
				var t = e.currentTarget;
				for (var n in o.videoClickTimer && clearTimeout(o.videoClickTimer), h.Log.debug(o.LOG_TAG, "onVideoViewDoubleClick..."), o.contexts) {
					var r = parseInt(n),
					i = o.contexts[r];
					if (i && i.view == t) {
						// 全屏
						o.toggleFullScreen(i.view);
						break
					}
				}
			},
			o.onVideoError = function(e) {},
			o.onWrapperFullscreen = function(e) {
				var t = e.target;
				if (t === o.wrapper) o.fireFullScreenChanged(Object.keys(o.contexts).map(function(e) {
					return parseInt(e)
				}));
				else for (var n in o.contexts) {
					var r = parseInt(n),
					i = o.contexts[r];
					if (i && i.view === t) {
						o.fireFullScreenChanged([r]);
						break
					}
				}
			},
			o.changeStreamOnFullScreenChanged = function(e) {
				if (o.options.autoChangeStream && e && e instanceof Array && 1 === e.length && (1 < o.screenX || 1 < o.screenY)) {
					var t = e[0];
					o.isDocumentFullScreen() ? o.toggleStreamingStream(p.VideoStreamMain, t) : o.toggleStreamingStream(p.VideostreamSub, t)
				}
			},
			o.changeStreamOnScreenNumberChanged = function(e) {
				var t = e.x,
				n = e.y,
				r = e.originalX,
				i = e.originalY;
				o.options.autoChangeStream && (1 === t && 1 === n && (1 < r || 1 < i) ? o.toggleStreamingStream(p.VideoStreamMain, 0) : (1 < t || 1 < n) && 1 === r && 1 === i && o.toggleStreamingStream(p.VideostreamSub, 0))
			},
			y.isSupported() || h.Log.error(o.LOG_TAG, "this browser is not supported."), o.options = Object.assign({},
			o.defaults, t), o.screenX = o.options.screenX || y.DEFAULT_SCREEN_X, o.screenY = o.options.screenY || y.DEFAULT_SCREEN_Y, o.ratio = o.options.ratio, o.screenX < 1 || o.screenY < 1) throw new Error("screens must be greater than 1");
			return o.container = e,
			o.wrapper = o.createWrapper(),
			o.container.appendChild(o.wrapper),
			o.wrapper.focus(),
			o.plugInManager.addListener(i.PlugInCommand.CMD_STOP,
			function(e) {
				o._stop(e)
			}),
			o.plugInManager.addListener(i.PlugInCommand.CMD_CAPTURE,
			function(e) {
				o._capture(e)
			}),
			o.initPluginsPromise = o.initPlugins().then(function() {
				var e = o.plugInManager.registeredPlugins;
				h.Log.debug(o.LOG_TAG, e.length + " registered plugins: " + e.map(function(e) {
					return e.name
				}).join(", ")),
				o.init(),
				o.readyState = !0
			},
			function(e) {
				h.Log.error(o.LOG_TAG, "an error occurred when initPlugins: " + e)
			}),
			o
		}
		d.YDPlayer = g
	},
	{
		"../styles/ydplayer.css": 114,
		"./core/yd-error": 51,
		"./io/yd/url": 66,
		"./lib/object.assign": 69,
		"./play-context": 73,
		"./player-base": 74,
		"./player-core": 75,
		"./plugins/plugin-command": 86,
		"./plugins/plugin-events": 87,
		"./plugins/plugin-manager": 88,
		"./utils/log": 109,
		"core-js/stable/typed-array/slice": 42,
		"es6-promise/auto": 43,
		events: 45,
		"fast-text-encoding": 46,
		tslib: 49,
		"url-polyfill": 50
	}]
},
{},
["YDPlayerCompatible"]);