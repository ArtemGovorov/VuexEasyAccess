'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isWhat = _interopDefault(require('is-what'));
var Vue = _interopDefault(require('vue'));
var Vuex = _interopDefault(require('vuex'));

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index_cjs_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: !0 });var defaultConf = { setter: "set", getter: "get", vuexEasyFirestore: !1, ignorePrivateProps: !0, pattern: "standard" };function getKeysFromPath(e) {
  return e ? e.match(/\w+/g) : [];
}function getDeepRef() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = getKeysFromPath(arguments[1]);if (!t.length) return e;for (var r = e; r && t.length > 1;) {
    r = r[t.shift()];
  }var a = t.shift();return r && r.hasOwnProperty(a) ? r[a] : void 0;
}function getDeepValue(e, t) {
  return getDeepRef(e, t);
}function setDeepValue(e, t, r) {
  var a = getKeysFromPath(t),
      n = a.pop(),
      s = getDeepRef(e, a.join());return s && s.hasOwnProperty(n) && (s[n] = r), e;
}function popDeepValue(e, t) {
  var r = getDeepRef(e, t);if (isWhat.isArray(r)) return r.pop();
}function pushDeepValue(e, t, r) {
  var a = getDeepRef(e, t);if (isWhat.isArray(a)) return a.push(r);
}function spliceDeepValue(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      n = arguments[4],
      s = getDeepRef(e, t);if (isWhat.isArray(s)) return s.splice(r, a, n);
}var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t];for (var a in r) {
      Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
  }return e;
},
    toConsumableArray = function toConsumableArray(e) {
  if (Array.isArray(e)) {
    for (var t = 0, r = Array(e.length); t < e.length; t++) {
      r[t] = e[t];
    }return r;
  }return Array.from(e);
};function makeMutationsForAllProps(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};return r = Object.assign({}, defaultConf, r), isWhat.isObject(e) ? Object.keys(e).reduce(function (a, n) {
    if (r.ignorePrivateProps && "_" === n[0]) return a;var s = t ? t + "." + n : n;a["simple" === r.pattern ? s : "SET_" + s.toUpperCase()] = function (e, t) {
      return setDeepValue(e, s, t);
    };var o = e[n];if (isWhat.isObject(o)) {
      var u = makeMutationsForAllProps(o, s, r);a = _extends({}, a, u);
    }isWhat.isArray(o) && (a["simple" === r.pattern ? s + ".pop" : "POP_" + s.toUpperCase()] = function (e) {
      return popDeepValue(e, s);
    }, a["simple" === r.pattern ? s + ".push" : "PUSH_" + s.toUpperCase()] = function (e, t) {
      return pushDeepValue(e, s, t);
    }, a["simple" === r.pattern ? s + ".splice" : "SPLICE_" + s.toUpperCase()] = function (e, t) {
      return spliceDeepValue.apply(void 0, [e, s].concat(toConsumableArray(t)));
    });return a;
  }, {}) : {};
}function defaultMutations(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};return makeMutationsForAllProps(e, null, t = Object.assign({}, defaultConf, t));
}function defaultGetter(e, t) {
  return t.getters.hasOwnProperty(e) ? t.getters[e] : getDeepValue(t.state, e);
}function defaultSetter(e, t, r) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};a = Object.assign({}, defaultConf, a);var n = e.split("/"),
      s = n.pop(),
      o = n.length ? n.join("/") + "/" : "",
      u = o + ("simple" === a.pattern ? s : "set" + s[0].toUpperCase() + s.substring(1));if (r._actions[u]) return r.dispatch(u, t);if (a.vuexEasyFirestore) {
    var i = r._modulesNamespaceMap[e + "/"],
        p = i ? e + "/set" : o + "set",
        c = i ? t : {};if (i || (c[s] = t), r._actions[p]) return r.dispatch(p, c);
  }var l = "simple" === a.pattern ? s : "SET_" + s.toUpperCase(),
      f = o + l;if (r._mutations[f]) return r.commit(f, t);console.error("There is no mutation set for '" + f + "'.\n    Please add a mutation like so in the correct module:\n\n    mutations: {\n      '" + l + "': ({state}, payload) => {\n        state." + s + " = payload\n      }\n    }\n\n    You can also add mutations automatically with vuex-easy-access.\n    See the documentation here:\n      https://github.com/mesqueeb/VuexEasyAccess#2-automatically-generate-mutations-for-each-state-property");
}function createSetterModule(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      r = arguments[2],
      a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};return a = Object.assign({}, defaultConf, a), { actions: function e(n) {
      var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";return Object.keys(n).reduce(function (o, u) {
        if (a.ignorePrivateProps && "_" === u[0]) return o;if (r._modulesNamespaceMap[u + "/"]) return o;var i = s ? s + "." + u : u,
            p = t + i;o[i] = function (e, t) {
          return defaultSetter(p, t, r, a);
        };var c = n[u];if (isWhat.isObject(c) && Object.keys(c).length) {
          var l = e(c, i);Object.assign(o, l);
        }return o;
      }, {});
    }(e), namespaced: !0 };
}function generateSetterModules(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      a = e._modulesNamespaceMap;Object.keys(a).forEach(function (n) {
    var s = a[n],
        o = getKeysFromPath(n + t),
        u = createSetterModule(s.state, n, e, r);e.registerModule(o, u);
  }), r = Object.assign({}, defaultConf, r);var n = t,
      s = createSetterModule(e.state, "", e, r);e.registerModule(n, s);
}function createEasyAccess(e) {
  var t = Object.assign({}, defaultConf, e);return function (e) {
    generateSetterModules(e, t.setter, t), e[t.setter] = function (r, a) {
      return defaultSetter(r, a, e, t);
    }, e[t.getter] = function (t) {
      return defaultGetter(t, e);
    };
  };
}exports.default = createEasyAccess, exports.createEasyAccess = createEasyAccess, exports.defaultMutations = defaultMutations, exports.defaultSetter = defaultSetter, exports.defaultGetter = defaultGetter, exports.getDeepRef = getDeepRef, exports.getKeysFromPath = getKeysFromPath;

});

var createEasyAccess = unwrapExports(index_cjs_min);
var index_cjs_min_1 = index_cjs_min.createEasyAccess;
var index_cjs_min_2 = index_cjs_min.defaultMutations;
var index_cjs_min_3 = index_cjs_min.defaultSetter;
var index_cjs_min_4 = index_cjs_min.defaultGetter;
var index_cjs_min_5 = index_cjs_min.getDeepRef;
var index_cjs_min_6 = index_cjs_min.getKeysFromPath;

var config = {
  pattern: 'simple'
};

function initialState() {
  return {
    pokemonBox: {
      waterPokemon: ['squirtle'],
      items: [],
      _secrets: []
    }
  };
}
var module2State = {
  defeated: {
    palletTown: false
  }
};
var gymData = {
  namespaced: true,
  state: module2State,
  mutations: index_cjs_min_2(module2State, config)
};
var moduleState = {
  visitedPlaces: {
    palletTown: true,
    gym: false
  }
};
var locationJournal = {
  namespaced: true,
  state: moduleState,
  mutations: index_cjs_min_2(moduleState, config),
  modules: { gymData: gymData }
};

var storeObj = {
  modules: { locationJournal: locationJournal },
  state: initialState(),
  mutations: index_cjs_min_2(initialState(), config),
  actions: {},
  getters: {}
};

// set plugin
var easyAccess = createEasyAccess(config);
storeObj.plugins = [easyAccess];
// create store
Vue.use(Vuex);
var store = new Vuex.Store(storeObj);

exports.default = store;
//# sourceMappingURL=index.cjs.js.map
