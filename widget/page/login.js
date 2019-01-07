/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (false
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          false
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0), __webpack_require__(2).setImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(3);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(7);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_happypack_5_0_1_happypack_loader_js_id_happybabel_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js____default.a); 

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _babelHelperVueJsxMergeProps = __webpack_require__(16);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _ui = __webpack_require__(17);

var _ui2 = _interopRequireDefault(_ui);

var _constant = __webpack_require__(19);

var _constant2 = _interopRequireDefault(_constant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
    el: '#app',
    data: {
        formData: {
            UserName: '',
            Password: ''
        }
    },

    mounted: function mounted() {
        this.init();
        this.initEvt();
    },


    methods: {
        init: function init() {
            api.setWinAttr({ // 设置 window 属性
                'slidBackEnabled': false, // 是否支持滑动返回
                'vScrollBarEnabled': false // 是否显示垂直滚动条
            });
        },
        initEvt: function initEvt() {
            api.addEventListener({
                name: _constant2.default.EventTypes.KEYBACK
            }, function (ret, err) {
                api.closeWidget({}); // 应用 管理关闭指定widget，也可以关闭应用
            });
        },
        handleFocus: function handleFocus(e) {
            e.target.focus();
        },
        login: function login() {
            // const {
            //     Password,
            // } = this.formData 

            // console.log(Password);

            // if (!Password || !Password.length) {
            //     $ui.showToast('请输入密码') 
            //     return 
            // }

            // if (Password.length < 6) {
            //     $ui.showToast('密码长度需大于6位') 
            //     return 
            // }
            _ui2.default.openWin('main');
        },
        fotget: function fotget() {}
    },

    render: function render(h) {
        var _this = this;

        return h(
            'div',
            { 'class': 'login-container' },
            [h(
                'div',
                { 'class': 'form' },
                [h('input', (0, _babelHelperVueJsxMergeProps2.default)([{
                    attrs: { type: 'tel', placeholder: '\u624B\u673A\u53F7', maxlength: '11' },
                    'class': 'tel', domProps: {
                        'value': _this.formData.UserName
                    },
                    on: {
                        'input': function input($event) {
                            if ($event.target.composing) return;
                            _this.formData.UserName = $event.target.value;
                        }
                    }
                }, {
                    directives: [{
                        name: 'model',
                        value: _this.formData.UserName
                    }]
                }, {
                    on: {
                        'click': this.handleFocus
                    }
                }])), h('input', (0, _babelHelperVueJsxMergeProps2.default)([{
                    attrs: { type: 'password', placeholder: '\u5BC6\u7801' },
                    'class': 'pwd', domProps: {
                        'value': _this.formData.Password
                    },
                    on: {
                        'input': function input($event) {
                            if ($event.target.composing) return;
                            _this.formData.Password = $event.target.value;
                        }
                    }
                }, {
                    directives: [{
                        name: 'model',
                        value: _this.formData.Password
                    }]
                }, {
                    on: {
                        'click': this.handleFocus
                    }
                }])), '>', h(
                    'div',
                    { 'class': 'btns' },
                    [h(
                        'button',
                        { 'class': 'login-btn', on: {
                                'click': this.login
                            }
                        },
                        ['\u767B\u5F55']
                    )]
                ), h(
                    'a',
                    { 'class': 'forgot-pwd', on: {
                            'click': this.fotget
                        }
                    },
                    ['\u5FD8\u8BB0\u5BC6\u7801\uFF1F']
                )]
            )]
        );
    }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("71f264e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js!../../node_modules/_vue-loader@15.5.0@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!../../node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!../../node_modules/_vue-loader@15.5.0@vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=stylus&", function() {
     var newContent = require("!!../../node_modules/_css-loader@2.1.0@css-loader/dist/cjs.js!../../node_modules/_vue-loader@15.5.0@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!../../node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!../../node_modules/_stylus-loader@3.0.2@stylus-loader/index.js!../../node_modules/_vue-loader@15.5.0@vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=style&index=0&lang=stylus&");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_vue_vue_type_script_lang_js___ = __webpack_require__(9);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__login_vue_vue_type_script_lang_js___) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__login_vue_vue_type_script_lang_js___[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_vue_vue_type_style_index_0_lang_stylus___ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_5_0_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(8);
var render, staticRenderFns





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_5_0_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__login_vue_vue_type_script_lang_js___["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/liwei/Desktop/webpack/webpack-apicloud/node_modules/_vue-hot-reload-api@2.3.1@vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('1db67ffc', component.options)
    } else {
      api.reload('1db67ffc', component.options)
    }
    
  }
}
component.options.__file = "src/page/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(18);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ui = function () {
    function Ui() {
        _classCallCheck(this, Ui);
    }

    _createClass(Ui, [{
        key: 'showLoading',
        value: function showLoading(title) {
            api.showProgress({
                style: 'default',
                animationType: 'fade',
                title: title || '',
                text: '请稍后...'
            });
        }
    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            api.hideProgress();
        }
    }, {
        key: 'showToast',
        value: function showToast(msg, location) {
            api.toast({
                msg: msg,
                duration: 2000,
                location: location || 'middle'
            });
        }

        //显示自动关闭的浮动提示

    }, {
        key: 'showBuilding',
        value: function showBuilding() {
            this.showToast('功能开发中...');
        }
    }, {
        key: 'showNetToast',
        value: function showNetToast() {
            var isAddingAMW = $store.isAddingAMW();
            if (isAddingAMW) {
                return;
            }

            api.alert({
                msg: '网络异常'
            }, function (ret, err) {});
        }
    }, {
        key: 'getNameForUrl',
        value: function getNameForUrl(url) {
            return url.substring(url.lastIndexOf('/') + 1, url.length);
        }

        /**
        * 获取相应的url 
        */

    }, {
        key: 'getUrl',
        value: function getUrl(url) {
            var isDev =  false ? true : false;

            var res = void 0;
            if (isDev) {
                res = _config.host + ':' + _config.port + '/page/' + url + '.html';
            } else {
                res = 'widget://page/' + url + '.html';
            }

            console.log(res);

            return res;
        }

        /**
         * 打开窗口
         * @param {String} url 地址
         * @param {Object} pageParam 参数
         * @param {Bool} allowEdit 是否允许长按页面时弹出选择菜单
         * @param {Bool} slidBackEnabled 是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只 iOS 有效
         * @param {Bool} reload 页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行
         * @param {Object} animation 动画
         */

    }, {
        key: 'openWin',
        value: function openWin(url) {
            var pageParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var allowEdit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var slidBackEnabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            var reload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var animation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

            api.openWin({
                name: '' + this.getNameForUrl(url) + '',
                url: this.getUrl(url),
                pageParam: pageParam,
                allowEdit: allowEdit ? true : false,
                slidBackEnabled: slidBackEnabled,
                reload: reload,
                animation: animation ? animation : null,
                bounces: false
            });
        }

        /**
         * 打开 frame
         * @param {String} url 地址
         * @param {Object} pageParam 参数
         * @param {Bool} rect JSON 对象，frame 的位置和大小，设置 margin 后，在不同手机上面会保持与父页面的各方向边距一致，而中间区域会自动扩充
         * @param {Bool} reload 页面已经打开时，是否重新加载页面，重新加载页面后 apiready 方法将会被执行
         * @param {Object} animation 动画
         * @param {Bool} bounces 是否弹动
         */

    }, {
        key: 'openFrame',
        value: function openFrame(url, pageParam, rect, reload, animation, bounces) {
            animation = animation || {
                type: 'fade', //动画类型（详见动画类型常量）
                subType: 'from_right', //动画子类型（详见动画子类型常量）
                duration: 100 //动画过渡时间，默认300毫秒
            };
            // console.log(url)

            if (bounces === undefined) {
                bounces = true;
            }

            api.openFrame({
                name: '' + this.getNameForUrl(url) + '',
                url: this.getUrl(url),
                bounces: bounces,
                animation: animation,
                vScrollBarEnabled: true,
                hScrollBarEnabled: false,
                pageParam: pageParam,
                rect: rect || {
                    x: 0,
                    y: 0,
                    w: 'auto',
                    h: 'auto',
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    marginRight: 0
                },
                reload: reload
            });
        }

        /**
         * 在指定 window 或者 frame 中执行脚本
         * @param {String} winName win名称
         * @param {String} frameName frame名称
         * @param {String} script js代码
         */

    }, {
        key: 'execScript',
        value: function execScript(winName, frameName, script) {
            script = $util.isString(script) ? script : '() ';
            if (winName) {
                if (frameName) {
                    api.execScript({
                        // 跨window或者是frame 执行脚本
                        name: winName,
                        frameName: frameName,
                        script: script
                    });
                } else {
                    api.execScript({
                        name: winName,
                        script: script
                    });
                }
            } else {
                api.execScript({
                    frameName: frameName,
                    script: script
                });
            }
        }

        /**
         * 打开日期时间选择器
         * @param {String}   title    [标题]
         * @param {String}   type     [类型]
         * @param {Function} cb [回调函数]
         */

    }, {
        key: 'openDateTimePicker',
        value: function openDateTimePicker(title, type, cb) {
            title = title || '选择时间';
            type = type || 'time';
            api.openPicker({
                type: type,
                title: title
            }, function (ret, err) {
                if (ret) {
                    var res = '';
                    switch (type) {
                        case 'date':
                            res = ret.year + '-';
                            res += ret.month < 10 ? '0' + ret.month + '-' : ret.month + '-';
                            res += ret.day < 10 ? '0' + ret.day : ret.day;
                            break;
                        case 'date_time':
                            res = ret.year + '-';
                            res += ret.month < 10 ? '0' + ret.month + '-' : ret.month + '-';
                            res += ret.day < 10 ? '0' + ret.day : ret.day;
                            res += ret.hour < 10 ? '0' + ret.hour + ':' : ret.hour + ':';
                            res += ret.minute < 10 ? '0' + ret.minute : ret.minute;
                            break;
                        case 'time':
                            res += ret.hour < 10 ? '0' + ret.hour + ':' : ret.hour + ':';
                            res += ret.minute < 10 ? '0' + ret.minute : ret.minute;
                            break;
                    }
                    cb('', res);
                } else {
                    cb(err, '');
                }
            });
        }

        //显示主页

    }, {
        key: 'openMain',
        value: function openMain() {
            this.openWin('widget://dist/pages/main/main_win', null, false, false, true);
        }
    }]);

    return Ui;
}();

exports.default = new Ui();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
    host: 'http://192.168.2.159', // 局域网ip， mac在设置／网络里可以直接看到
    port: 8002
};

module.exports = config;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var hooks = {};

//房源类型
hooks.HomeTypeEnum = {
    DECENTRALIZED: 1, // 分散式
    CENTRALIZED: 2 // 集中式
};

//房间类型
hooks.RoomTypes = {
    COMMON: 1,
    PUBLIC: 2
};

//设备类型（正常）
hooks.DeviceTypes = {
    GATEWAY: 1,
    LOCK: 2,
    ELEMETER: 3,
    ELECOLLECTOR: 4,
    WATERGATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7,
    1: '网关',
    2: '门锁',
    3: '电表',
    4: '采集器',
    5: '水表网关',
    6: '冷水表',
    7: '热水表'
};

//工单设备类型设备类型
hooks.DeviceTypes2 = {
    GATEWAY: 1,
    LOCK: 2,
    ELEMETER: 3,
    LOCKWITHOUTCENTER: 4,
    WATERGATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7,
    1: '网关',
    2: '门锁',
    3: '电表',
    4: '无网关门锁',
    5: '水表网关',
    6: '冷水表',
    7: '热水表'
};

//设备类型 - 前端自定义类型，用于安装设备时
hooks.DeviceTypeIds = {
    GATEWAY: 1,
    GATEWAY_G5: 11,
    LOCK: 2,
    LOCK_NO_GATEWAY: 21,
    ELEMETER: 3,
    ELEMETER_A1Z: 31,
    ELEMETER_A4: 32,
    ELEMETER_AMG: 33,
    ELEMETER_AMW: 34,
    ELEMETER_A1PZ: 35,
    ELEMETER_A4P: 36,
    ELECOLLECTOR: 4,
    WATER_GATEWAY: 5,
    WATERMETER_COLD: 6,
    WATERMETER_HOT: 7
};

//设备型号
hooks.DeviceModels = {
    A4: 'DSZM-B02',
    A4P: 'DSZM-B04',
    AMG: 'EG-G01',
    AMW: 'EG-W01'
};

//电表类型
hooks.ElemeterTypes = {
    A1: '00',
    A2: '01',
    A3: '02',
    A1Z_IN: '03',
    A1Z_OUT: '04',
    A4_5: '05',
    A4_3: '06',
    AMG1: '07',
    AMW1: '08',
    A1PZ: '09',
    A1P: '10',
    A4P_5: '11',
    A4P_3: '12',
    AT120: '80',
    '00': 'A1',
    '01': 'A2',
    '02': 'A3',
    '03': 'A1Z内置天线',
    '04': 'A1Z外置天线',
    '05': 'A4五孔',
    '06': 'A4三孔',
    '07': 'AMG1',
    '08': 'AMW1',
    '09': 'A1Z Plus',
    '10': 'A1 Plus',
    '11': 'A4 Plus五孔',
    '12': 'A4 Plus三口',
    '80': 'AT120'
};

//判断是否为D2F系列锁
hooks.isLockD2F = function (sn) {
    if (!sn || sn.length < 8) {
        return false;
    }
    var type = sn.substr(6, 2);
    return type == '19';
};

//判断是否为D3、T3系列锁
hooks.isLockD3T3 = function (sn) {
    if (!sn || sn.length < 8) {
        return false;
    }
    var type = sn.substr(6, 2);
    var nums = ['23', '24', '25', '26'];

    return nums.indexOf(type) >= 0;
};

hooks.isAMG1 = function (deviceType, sn) {
    return deviceType == hooks.DeviceTypes.ELEMETER && sn.substr(6, 2) == hooks.ElemeterTypes.AMG1;
};

hooks.isAMW1 = function (deviceType, sn) {
    return deviceType == hooks.DeviceTypes.ELEMETER && sn.substr(6, 2) == hooks.ElemeterTypes.AMW1;
};

//是否为水表网关
hooks.isWaterGateway = function (sn) {
    if (sn.length != 12) {
        return false;
    }

    var text = sn.substring(2, 6);
    if (text == '0000' || text == '0001' || text == '0010') {
        return true;
    }

    return false;
};

//是否为冷水表（兼容14位和10位sn，且兼容无线水表）
hooks.isWatermeterCold = function (sn) {
    if (sn.length === 14 && sn.substr(0, 4) === '0000' && sn[7] === '0') {
        return true;
    }

    if (sn.length === 10 && sn[3] === '0') {
        return true;
    }

    if (sn.length === 8 && sn[2] === '0') {
        return true;
    }

    return false;
};

//是否为冷水表（兼容14位和10位sn，且兼容无线水表）
hooks.isWatermeterHot = function (sn) {
    if (sn.length === 14 && sn.substr(0, 4) === '0000' && sn[7] === '1') {
        return true;
    }

    if (sn.length === 10 && sn[3] === '1') {
        return true;
    }

    if (sn.length === 8 && sn[2] === '1') {
        return true;
    }

    return false;
};

//设备绑定状态
hooks.BindStatus = {
    BINDING: 1,
    SUCCESS: 2,
    TIMEOUT: 3,
    1: '绑定中...',
    2: '绑定成功！',
    3: '绑定超时！'
};

hooks.AppointmentPeriod = {
    1: '全天',
    2: '上午',
    3: '下午'
};

//安装工单状态描述
hooks.TicketInstallState = {
    1: '待派工', // pending
    3: '待上门', // distributed
    4: '待验收', // served
    5: '已验收', // approved
    6: '已关闭' // closed
};

//维修工单状态描述
hooks.TicketRepairState = {
    1: '待派工',
    2: '待上门',
    3: '待验收',
    4: '已验收',
    5: '已评价',
    6: '已关闭',
    7: '未评价'
};

//正则
hooks.RegexEnum = {
    mobile: /^1[13456789]\d{9}$/,
    idcard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
};

//事件类型
hooks.EventTypes = {
    USER_DATA_REFRESH: 'user_data_refresh', //刷新用户数据

    DEVICE_LIST_REFRESH: 'DEVICE_LIST_REFRESH', //刷新设备列表
    DEVICE_REFRESH: 'device_refresh', //刷新设备

    EDIT_APPOINTMENT_TIME: 'edit_appointment_time',

    ADD_DEVICE_SELECT_DEVICE: 'add_device_select_device', //自定义事件 添加设备选择设备
    ADD_ROOM_SELECT_ROOM: 'add_room_select_room', //自定义事件 添加房间 
    ADD_CONNECT_SELECT_CONNECT: 'add_connect_select_connect', //自定义时间 添加关联设备
    TICKET_LIST_REFRESH: 'ticket_list_refresh', // 更新工单列表
    TICKET_INSTALL_REFRESH: 'ticket_list_refresh',
    TICKET_REPAIR_REFRESH: 'ticket_list_refresh',
    TICKET_COUNT_REFRESH: 'ticket_count_refresh', // 更新工单数量

    ONE_LEVEL_FAULT_REFRESH: 'one_level_fault_refresh', // 自定义时间，一级设备故障监听
    SECOND_LEVEL_FAULT_REFRESH: 'second_level_fault_refresh', //自定义时间，二级设备故障监听
    THIRD_LEVEL_FAULT_REFRESH: 'third_level_fault_refresh', //自定义时间，三级设备故障监听

    SELECT_WIFI: 'select_wifi', //选择wifi
    SELECT_WIFI_ENCRYPT: 'select_wifi_encrypt', //选择wifi加密类型

    //系统事件，不要修改值
    SCROLL_TO_BOTTOM: 'scrolltobottom', //触底刷新
    KEYBACK: 'keyback', //Android返回键
    RESUME: 'resume' //Android返回键
};

exports.default = hooks;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_5_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_autoprefixer_loader_3_2_0_autoprefixer_loader_index_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_stylus___ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_5_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_autoprefixer_loader_3_2_0_autoprefixer_loader_index_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_stylus____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_5_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_autoprefixer_loader_3_2_0_autoprefixer_loader_index_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_stylus___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_node_modules_css_loader_2_1_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_5_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_autoprefixer_loader_3_2_0_autoprefixer_loader_index_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_stylus_loader_3_0_2_stylus_loader_index_js_node_modules_vue_loader_15_5_0_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_stylus____default.a); 

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Imports
var urlEscape = __webpack_require__(22);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(23));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(24));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(25));

// Module
exports.push([module.i, "*{margin:0;padding:0;font-weight:400;list-style:none;font-family:PingFangSC-Light;text-decoration:none;box-sizing:border-box}html{height:100%;background:none}body{background-size:100%;min-height:100%;width:100%;margin:auto;padding:0;background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat fixed bottom;background-size:cover}input::-webkit-input-placeholder{color:#50c1d3;letter-spacing:1px}input:-moz-placeholder,input::-moz-placeholder{color:#50c1d3;letter-spacing:1px}input:-ms-input-placeholder{color:#50c1d3;letter-spacing:1px}.login-container{width:100%;height:100%;height:100vh;min-height:100%;min-height:100vh;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end}.form{padding:0 5.333vw 2.667vw;font-size:0}.form input{width:100%;height:12.8vw;line-height:12.8vw;line-height:normal;border-bottom:1px solid #50c1d3;border-radius:0;padding-left:9.333vw;font-size:4.267vw;vertical-align:top;outline:none;-webkit-appearance:none;color:#50c1d3}.tel{margin-top:20vw;display:-ms-flexbox;display:flex;background:url(" + ___CSS_LOADER_URL___1___ + ") no-repeat 0;background-size:4.4vw 7.067vw}.pwd{margin-top:3.733vw;background:url(" + ___CSS_LOADER_URL___2___ + ") no-repeat 0;background-size:4.8vw 5.467vw}.btns{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;margin:7.733vw 0 0}.btns,.login-btn{width:100%;height:10.4vw;line-height:10.4vw;padding:0}.login-btn{display:block;font-size:4.267vw;border-radius:1.867vw;text-align:center;outline:none;background:#50c1d3;color:#fff}.login-btn:active{background:#2f7560;color:#acacac}.forgot-pwd{display:block;margin-top:2.667vw;padding:2.667vw 0;width:100%;font-size:3.467vw;color:#50c1d3;text-align:center}.forgot-pwd:active{color:#acacac}", ""]);



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7QAsUGhvdG9zaG9wIDMuMAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQAB/+FB42h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzcgNzkuMTU5NzY4LCAyMDE2LzA4LzExLTEzOjI0OjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wR0ltZz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL2cvaW1nLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczppbGx1c3RyYXRvcj0iaHR0cDovL25zLmFkb2JlLmNvbS9pbGx1c3RyYXRvci8xLjAvIgogICAgICAgICAgICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL2pwZWc8L2RjOmZvcm1hdD4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij7ln7rmnKwgUkdCPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC9kYzp0aXRsZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBJbGx1c3RyYXRvciBDQyAyMDE3IChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE4LTA3LTEwVDE0OjU3OjQ5KzA4OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTgtMDctMTBUMDY6NTc6NTFaPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOC0wNy0xMFQxNDo1Nzo0OSswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpUaHVtYm5haWxzPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOndpZHRoPjI1NjwveG1wR0ltZzp3aWR0aD4KICAgICAgICAgICAgICAgICAgPHhtcEdJbWc6aGVpZ2h0PjE4NDwveG1wR0ltZzpoZWlnaHQ+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmZvcm1hdD5KUEVHPC94bXBHSW1nOmZvcm1hdD4KICAgICAgICAgICAgICAgICAgPHhtcEdJbWc6aW1hZ2U+LzlqLzRBQVFTa1pKUmdBQkFnRUFTQUJJQUFELzdRQXNVR2h2ZEc5emFHOXdJRE11TUFBNFFrbE5BKzBBQUFBQUFCQUFTQUFBQUFFQSYjeEE7QVFCSUFBQUFBUUFCLytJTVdFbERRMTlRVWs5R1NVeEZBQUVCQUFBTVNFeHBibThDRUFBQWJXNTBjbEpIUWlCWVdWb2dCODRBQWdBSiYjeEE7QUFZQU1RQUFZV056Y0UxVFJsUUFBQUFBU1VWRElITlNSMElBQUFBQUFBQUFBQUFBQUFBQUFQYldBQUVBQUFBQTB5MUlVQ0FnQUFBQSYjeEE7QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFSWTNCeWRBQUFBVkFBQUFBeiYjeEE7WkdWell3QUFBWVFBQUFCc2QzUndkQUFBQWZBQUFBQVVZbXR3ZEFBQUFnUUFBQUFVY2xoWldnQUFBaGdBQUFBVVoxaFpXZ0FBQWl3QSYjeEE7QUFBVVlsaFpXZ0FBQWtBQUFBQVVaRzF1WkFBQUFsUUFBQUJ3Wkcxa1pBQUFBc1FBQUFDSWRuVmxaQUFBQTB3QUFBQ0dkbWxsZHdBQSYjeEE7QTlRQUFBQWtiSFZ0YVFBQUEvZ0FBQUFVYldWaGN3QUFCQXdBQUFBa2RHVmphQUFBQkRBQUFBQU1jbFJTUXdBQUJEd0FBQWdNWjFSUyYjeEE7UXdBQUJEd0FBQWdNWWxSU1F3QUFCRHdBQUFnTWRHVjRkQUFBQUFCRGIzQjVjbWxuYUhRZ0tHTXBJREU1T1RnZ1NHVjNiR1YwZEMxUSYjeEE7WVdOcllYSmtJRU52YlhCaGJua0FBR1JsYzJNQUFBQUFBQUFBRW5OU1IwSWdTVVZETmpFNU5qWXRNaTR4QUFBQUFBQUFBQUFBQUFBUyYjeEE7YzFKSFFpQkpSVU0yTVRrMk5pMHlMakVBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSYjeEE7QUFBQUFBQUFBQUFBQUZoWldpQUFBQUFBQUFEelVRQUJBQUFBQVJiTVdGbGFJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQllXVm9nQUFBQSYjeEE7QUFBQWI2SUFBRGoxQUFBRGtGaFpXaUFBQUFBQUFBQmltUUFBdDRVQUFCamFXRmxhSUFBQUFBQUFBQ1NnQUFBUGhBQUF0czlrWlhOaiYjeEE7QUFBQUFBQUFBQlpKUlVNZ2FIUjBjRG92TDNkM2R5NXBaV011WTJnQUFBQUFBQUFBQUFBQUFCWkpSVU1nYUhSMGNEb3ZMM2QzZHk1cCYjeEE7WldNdVkyZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFaR1Z6WXdBQSYjeEE7QUFBQUFBQXVTVVZESURZeE9UWTJMVEl1TVNCRVpXWmhkV3gwSUZKSFFpQmpiMnh2ZFhJZ2MzQmhZMlVnTFNCelVrZENBQUFBQUFBQSYjeEE7QUFBQUFBQXVTVVZESURZeE9UWTJMVEl1TVNCRVpXWmhkV3gwSUZKSFFpQmpiMnh2ZFhJZ2MzQmhZMlVnTFNCelVrZENBQUFBQUFBQSYjeEE7QUFBQUFBQUFBQUFBQUFBQUFBQUFBR1JsYzJNQUFBQUFBQUFBTEZKbFptVnlaVzVqWlNCV2FXVjNhVzVuSUVOdmJtUnBkR2x2YmlCcCYjeEE7YmlCSlJVTTJNVGsyTmkweUxqRUFBQUFBQUFBQUFBQUFBQ3hTWldabGNtVnVZMlVnVm1sbGQybHVaeUJEYjI1a2FYUnBiMjRnYVc0ZyYjeEE7U1VWRE5qRTVOall0TWk0eEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCMmFXVjNBQUFBQUFBVHBQNEFGRjh1QUJEUCYjeEE7RkFBRDdjd0FCQk1MQUFOY25nQUFBQUZZV1ZvZ0FBQUFBQUJNQ1ZZQVVBQUFBRmNmNTIxbFlYTUFBQUFBQUFBQUFRQUFBQUFBQUFBQSYjeEE7QUFBQUFBQUFBQUFBQUFLUEFBQUFBbk5wWnlBQUFBQUFRMUpVSUdOMWNuWUFBQUFBQUFBRUFBQUFBQVVBQ2dBUEFCUUFHUUFlQUNNQSYjeEE7S0FBdEFESUFOd0E3QUVBQVJRQktBRThBVkFCWkFGNEFZd0JvQUcwQWNnQjNBSHdBZ1FDR0FJc0FrQUNWQUpvQW53Q2tBS2tBcmdDeSYjeEE7QUxjQXZBREJBTVlBeXdEUUFOVUEyd0RnQU9VQTZ3RHdBUFlBK3dFQkFRY0JEUUVUQVJrQkh3RWxBU3NCTWdFNEFUNEJSUUZNQVZJQiYjeEE7V1FGZ0FXY0JiZ0YxQVh3Qmd3R0xBWklCbWdHaEFha0JzUUc1QWNFQnlRSFJBZGtCNFFIcEFmSUIrZ0lEQWd3Q0ZBSWRBaVlDTHdJNCYjeEE7QWtFQ1N3SlVBbDBDWndKeEFub0NoQUtPQXBnQ29nS3NBcllDd1FMTEF0VUM0QUxyQXZVREFBTUxBeFlESVFNdEF6Z0RRd05QQTFvRCYjeEE7WmdOeUEzNERpZ09XQTZJRHJnTzZBOGNEMHdQZ0Erd0QrUVFHQkJNRUlBUXRCRHNFU0FSVkJHTUVjUVIrQkl3RW1nU29CTFlFeEFUVCYjeEE7Qk9FRThBVCtCUTBGSEFVckJUb0ZTUVZZQldjRmR3V0dCWllGcGdXMUJjVUYxUVhsQmZZR0JnWVdCaWNHTndaSUJsa0dhZ1o3Qm93RyYjeEE7blFhdkJzQUcwUWJqQnZVSEJ3Y1pCeXNIUFFkUEIyRUhkQWVHQjVrSHJBZS9COUlINVFmNENBc0lId2d5Q0VZSVdnaHVDSUlJbGdpcSYjeEE7Q0w0STBnam5DUHNKRUFrbENUb0pUd2xrQ1hrSmp3bWtDYm9KendubENmc0tFUW9uQ2owS1ZBcHFDb0VLbUFxdUNzVUszQXJ6Q3dzTCYjeEE7SWdzNUMxRUxhUXVBQzVnTHNBdklDK0VMK1F3U0RDb01Rd3hjREhVTWpneW5ETUFNMlF6ekRRME5KZzFBRFZvTmRBMk9EYWtOd3czZSYjeEE7RGZnT0V3NHVEa2tPWkE1L0Rwc090ZzdTRHU0UENROGxEMEVQWGc5NkQ1WVBzdy9QRCt3UUNSQW1FRU1RWVJCK0VKc1F1UkRYRVBVUiYjeEE7RXhFeEVVOFJiUkdNRWFvUnlSSG9FZ2NTSmhKRkVtUVNoQktqRXNNUzR4TURFeU1UUXhOakU0TVRwQlBGRStVVUJoUW5GRWtVYWhTTCYjeEE7RkswVXpoVHdGUklWTkJWV0ZYZ1ZteFc5RmVBV0F4WW1Ga2tXYkJhUEZySVcxaGI2RngwWFFSZGxGNGtYcmhmU0YvY1lHeGhBR0dVWSYjeEE7aWhpdkdOVVkraGtnR1VVWmF4bVJHYmNaM1JvRUdpb2FVUnAzR3A0YXhScnNHeFFiT3h0akc0b2JzaHZhSEFJY0toeFNISHNjb3h6TSYjeEE7SFBVZEhoMUhIWEFkbVIzREhld2VGaDVBSG1vZWxCNitIdWtmRXg4K0gya2ZsQisvSCtvZ0ZTQkJJR3dnbUNERUlQQWhIQ0ZJSVhVaCYjeEE7b1NIT0lmc2lKeUpWSW9JaXJ5TGRJd29qT0NObUk1UWp3aVB3SkI4a1RTUjhKS3NrMmlVSkpUZ2xhQ1dYSmNjbDl5WW5KbGNtaHlhMyYjeEE7SnVnbkdDZEpKM29ucXlmY0tBMG9QeWh4S0tJbzFDa0dLVGdwYXltZEtkQXFBaW8xS21ncW15clBLd0lyTml0cEs1MHIwU3dGTERrcyYjeEE7Yml5aUxOY3REQzFCTFhZdHF5M2hMaFl1VEM2Q0xyY3U3aThrTDFvdmtTL0hMLzR3TlRCc01LUXcyekVTTVVveGdqRzZNZkl5S2pKaiYjeEE7TXBzeTFETU5NMFl6ZnpPNE0vRTBLelJsTko0MDJEVVROVTAxaHpYQ05mMDJOelp5TnE0MjZUY2tOMkEzbkRmWE9CUTRVRGlNT01nNSYjeEE7QlRsQ09YODV2RG41T2pZNmREcXlPdTg3TFR0ck82bzc2RHduUEdVOHBEempQU0k5WVQyaFBlQStJRDVnUHFBKzREOGhQMkUvb2ovaSYjeEE7UUNOQVpFQ21RT2RCS1VGcVFheEI3a0l3UW5KQ3RVTDNRenBEZlVQQVJBTkVSMFNLUk01RkVrVlZSWnBGM2tZaVJtZEdxMGJ3UnpWSCYjeEE7ZTBmQVNBVklTMGlSU05kSkhVbGpTYWxKOEVvM1NuMUt4RXNNUzFOTG1rdmlUQ3BNY2t5NlRRSk5TazJUVGR4T0pVNXVUcmRQQUU5SiYjeEE7VDVOUDNWQW5VSEZRdTFFR1VWQlJtMUhtVWpGU2ZGTEhVeE5UWDFPcVUvWlVRbFNQVk50VktGVjFWY0pXRDFaY1ZxbFc5MWRFVjVKWCYjeEE7NEZndldIMVl5MWthV1dsWnVGb0hXbFphcGxyMVcwVmJsVnZsWERWY2hseldYU2RkZUYzSlhocGViRjY5WHc5ZllWK3pZQVZnVjJDcSYjeEE7WVB4aFQyR2lZZlZpU1dLY1l2QmpRMk9YWSt0a1FHU1VaT2xsUFdXU1plZG1QV2FTWnVoblBXZVRaK2xvUDJpV2FPeHBRMm1hYWZGcSYjeEE7U0dxZmF2ZHJUMnVuYS85c1YyeXZiUWh0WUcyNWJoSnVhMjdFYng1dmVHL1JjQ3R3aG5EZ2NUcHhsWEh3Y2t0eXBuTUJjMTF6dUhRVSYjeEE7ZEhCMHpIVW9kWVYxNFhZK2RwdDIrSGRXZDdONEVYaHVlTXg1S25tSmVlZDZSbnFsZXdSN1kzdkNmQ0Y4Z1h6aGZVRjlvWDRCZm1KKyYjeEE7d244amY0Ui81WUJIZ0tpQkNvRnJnYzJDTUlLU2d2U0RWNE82aEIyRWdJVGpoVWVGcTRZT2huS0cxNGM3aDUrSUJJaHBpTTZKTTRtWiYjeEE7aWY2S1pJcktpekNMbG92OGpHT015bzB4alppTi80NW1qczZQTm8rZWtBYVFicERXa1QrUnFKSVJrbnFTNDVOTms3YVVJSlNLbFBTViYjeEE7WDVYSmxqU1duNWNLbDNXWDRKaE1tTGlaSkptUW1meWFhSnJWbTBLYnI1d2NuSW1jOTUxa25kS2VRSjZ1bngyZmk1LzZvR21nMktGSCYjeEE7b2JhaUpxS1dvd2FqZHFQbXBGYWt4NlU0cGFtbUdxYUxwdjJuYnFmZ3FGS294S2szcWFtcUhLcVBxd0tyZGF2cHJGeXMwSzFFcmJpdSYjeEE7TGE2aHJ4YXZpN0FBc0hXdzZyRmdzZGF5UzdMQ3N6aXpyclFsdEp5MUU3V0t0Z0cyZWJid3QyaTM0TGhadU5HNVNybkN1anU2dGJzdSYjeEE7dTZlOElieWJ2Ulc5ajc0S3ZvUysvNzk2di9YQWNNRHN3V2ZCNDhKZnd0dkRXTVBVeEZIRXpzVkx4Y2pHUnNiRHgwSEh2OGc5eUx6SiYjeEE7T3NtNXlqakt0OHMyeTdiTU5jeTF6VFhOdGM0MnpyYlBOOCs0MERuUXV0RTgwYjdTUDlMQjAwVFR4dFJKMU12VlR0WFIxbFhXMk5kYyYjeEE7MStEWVpOam8yV3paOGRwMjJ2dmJnTndGM0lyZEVOMlczaHplb3Q4cDM2L2dOdUM5NFVUaHpPSlQ0dHZqWStQcjVIUGsvT1dFNWczbSYjeEE7bHVjZjU2bm9NdWk4NlVicDBPcGI2dVhyY092NzdJYnRFZTJjN2lqdXRPOUE3OHp3V1BEbDhYTHgvL0tNOHhuenAvUTA5TUwxVVBYZSYjeEE7OW0zMisvZUsrQm40cVBrNCtjZjZWL3JuKzNmOEIveVkvU245dXY1TC90ei9iZi8vLys0QURrRmtiMkpsQUdUQUFBQUFBZi9iQUlRQSYjeEE7QmdRRUJBVUVCZ1VGQmdrR0JRWUpDd2dHQmdnTERBb0tDd29LREJBTURBd01EQXdRREE0UEVBOE9EQk1URkJRVEV4d2JHeHNjSHg4ZiYjeEE7SHg4Zkh4OGZId0VIQndjTkRBMFlFQkFZR2hVUkZSb2ZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4ZiYjeEE7SHg4Zkh4OGZIeDhmSHg4Zkh4OGYvOEFBRVFnQXVBRUFBd0VSQUFJUkFRTVJBZi9FQWFJQUFBQUhBUUVCQVFFQUFBQUFBQUFBQUFRRiYjeEE7QXdJR0FRQUhDQWtLQ3dFQUFnSURBUUVCQVFFQUFBQUFBQUFBQVFBQ0F3UUZCZ2NJQ1FvTEVBQUNBUU1EQWdRQ0JnY0RCQUlHQW5NQiYjeEE7QWdNUkJBQUZJUkl4UVZFR0UyRWljWUVVTXBHaEJ4V3hRaVBCVXRIaE14Wmk4Q1J5Z3ZFbFF6UlRrcUt5WTNQQ05VUW5rNk96TmhkVSYjeEE7WkhURDB1SUlKb01KQ2hnWmhKUkZScVMwVnROVktCcnk0L1BFMU9UMFpYV0ZsYVcxeGRYbDlXWjJocGFtdHNiVzV2WTNSMWRuZDRlWCYjeEE7cDdmSDErZjNPRWhZYUhpSW1LaTR5TmpvK0NrNVNWbHBlWW1acWJuSjJlbjVLanBLV21wNmlwcXF1c3JhNnZvUkFBSUNBUUlEQlFVRSYjeEE7QlFZRUNBTURiUUVBQWhFREJDRVNNVUVGVVJOaElnWnhnWkV5b2JId0ZNSFI0U05DRlZKaWN2RXpKRFJEZ2hhU1V5V2lZN0xDQjNQUyYjeEE7TmVKRWd4ZFVrd2dKQ2hnWkpqWkZHaWRrZEZVMzhxT3p3eWdwMCtQemhKU2t0TVRVNVBSbGRZV1ZwYlhGMWVYMVJsWm1kb2FXcHJiRyYjeEE7MXViMlIxZG5kNGVYcDdmSDErZjNPRWhZYUhpSW1LaTR5TmpvK0RsSldXbDVpWm1wdWNuWjZma3FPa3BhYW5xS21xcTZ5dHJxK3YvYSYjeEE7QUF3REFRQUNFUU1SQUQ4QTlVNHE3RlhZcTdGV0YrYW5wcTdEL0lYOVdiVFNmUThWMjUvakI5d1NmMU15WFQwNzFNVnAzcVlyVHZVeCYjeEE7V25lcGl0TzlURmFkNm1LMDcxTVZwM3FZclR2VXhXbmVwaXRPOVRGYVp2NVlOZEhpUCtVLy9Fam1xMVgxbDdmc1QvRm8vSDcwMXpIZCYjeEE7czdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RldDZWNIcHJMRC9pdFAxWnRkSjlEeG5iZy93Zys0Sko2bSYjeEE7WkxwNmQ2bUswM3pPSzAzVnNWYnFmSEZYZlRpcnZweFYxVDQ0cTFWc1ZhTWxPdUswMTZtSzA3MU1WcG4zbE0xME9FLzVULzhBRWptcCYjeEE7MVgxbDdic1gvRm8vSDcwNHpIZHE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYbnZuVjZhNDQvNHJUOSYjeEE7V2JYU2ZROGIyMy9qQjl3U05XSitXWlRxVi9LblFWd0lXbWM0VnByMTI4Y1UwNVpIWmdxMVppYUFEY2tuQW9qYWJwb01xUnExNWNRMiYjeEE7clB1cVNPQTM5TW9PY2RBUzdBZG5TQTljb3d2dktFMUhUYnV4NHRLQThNbjJKa05VUGVsY3NobEV1VFJxTkpQRlJPNFBVY2tHczFNcyYjeEE7Y2Fsd25IamlpbDNxZzllbUJGTkVnN3JpbFRNaEdGTlBSUEpwcm9FQi93QXAvd0RpWnpVNnYrOEwyblkzK0xqNC9lbmVZenRIWXE3RiYjeEE7WFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE4Mzg5UFRYM0gvQUJXbjZzMjJqK2g0L3RvZnZ6N2drZ2NmUU15WCYjeEE7VUxmWEpPMnk0MHROczFUMCtqRldnNEZlNjl4M0dLMG1XZ1hObmI2aUpMdHdzYUt6eGs3amtCdDQ1Vm1pVEdnNW1obENPVGluMCs5YiYjeEE7YXgzR3J6M0xQS0JNc2J6TVR2WGlSOFBzTjhaRVFBUmp4eXp6a1NkNkpWdFAxSzNHblhsaGRTZnUyajUyNE5UU1FkQUtlSnBneVl6eCYjeEE7Q1FaNmZPQmluQ2ZJamIzcFNaT1JxZnNqWUR4eTV3YWRYZmZyL0tNVmI1VUZRY1ZjczFmbml0TFpaQlVVTy9mRlFIcFBrZzE4dXdILyYjeEE7QUNwUCtKbk5UcS83d3ZaOWovNHVQajk2ZTVqTzBkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyekQ4dyYjeEE7SHA1aWNmOEFGVWY2czIyaitoNUh0bisvUHVESDBuSnFwUFVVQnpLZFNRdVI2Q2xhSHZpZ3VlYmp0NDlzVnB5eUJ2R3VLMDR0VHFhWSYjeEE7cW0raDMybjJjRjNjU3lzYnA0MmloZ0NtaERVTmVYVHFNb3l4bElnRGs1K2t5UXh4bEluMUVVQWxYcXJ4cFEvUEwzQXBUNW10UmltbSYjeEE7eEk0Rys2NHJTLzFNVVVwaVQ0eWV3eFRTeHBkelE0cHA2bDVETmZMVnVmOEFLay80bWMxR3IvdkM5aDJSL2k0K1Azc2d6R2RtN0ZYWSYjeEE7cTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYbFA1aXZUeks0L3dDS28vMVp0OUgvQUhieVhiSDkvd0RBTVk5VCYjeEE7M3pLZFhTOFhMRHFhNG9wZDY2TlNwb1IweFdsL3JmeTArZzRvcE1JWXJaN0F5dTZpYmNrRmh5cHlBRzNQNS9zNVdTYmJlQWNGOWZ4NSYjeEE7L29XTjlWSG9CVHUvOTRlUTJISWoyQTI4Y08rN0Noc2lMcE5JanVrQ09XZzRPWDR1ckhrb0pRVjhlbGR1dlRiSXhNcWJweHhpVzNMZiYjeEE7OGZqNElDK0VLVHNMZis3b3UvSU52eEJKclJlL3RrNDNXN1ZNQUhia2h2VUE2dnQ0RGZKTWFhYTVyc09tSzBzOVUvUjRZcHByMU1WcCYjeEE7NjErWHhyNVh0ai9seS84QUV6bW4xbjk0WHIreWY3Z2ZINzJSNWpPeWRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZCYjeEE7aXJzVmRpcnlQOHltcDVva0gvRk1mNnMyK2kvdTNsTzEvd0MvK0FZcjZtWmJxNmQ2bUswNzFNVnBkeUhEbHkzcjluRlZXM1gxSzBhaCYjeEE7N1lzUzNLV1EwQkpQZkFvYWtFaTlhMXBVK0ZNVWhZSjE5TXFSOFhqaFduT0FxQnVRTmUyS2hUOVRGTk85VEZhZDZtSzA5aC9MbzE4cSYjeEE7V3gveTVmOEFrNGMwK3MvdkM5YjJUL2NENC9leVhNVjJUc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZSYjeEE7T2ZtZzlQTmNnLzRwaS9VYzNHaS91M2xlMXY3NzRCaWZxWmx1dHAzcVlyVHZVeFduZXBpdEw0cHBBOUUzWTdBZlBGQkNOaUR4d242eSYjeEE7UUZxT0traXB5TEErUzI4OVpBUzUrQ1Q3SEhwOGpoQ3hReGFIaVBpSWFtNHAzeFpicVhxSHh3cHAzcVlwcDNxWXJUdlV4V25zL3dDVyYjeEE7cHI1UnRUL2x5LzhBSnc1cHRaL2VGNnZzcis0SHgrOWxHWXJzWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RiYjeEE7WFlxOFcvTlZxZWJaQi94VEYrbzV1TkYvZHZMOXEvMzN3REQvQUZNeTNXMDcxTVZwM3FZclNyRFBFb2JtS2tqYkZCRFF1bkV2cUEwWSYjeEE7ZEQ5Rk1WNFZXNnZoTXFJQVFGN2sxSk9OSWpHbG92NVJBWVRRcjJKNmpHbDROMUZwU3pGbU5TZXB4WlUxNm1LMDcxTVZwM3FZclR2VSYjeEE7eFdudDM1WUd2azYwUCtYTi93QW5HelRheis4TDFYWmY5d1BqOTdLOHhYWU94VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4ViYjeEE7Mkt1eFYyS3V4VjRmK2JUMDg0U0QvaWlMOVJ6YzZMKzdlWjdWL3Z2Z0dHZXBtVzYybmVwaXRPOVRGYVZJMWtrQks3aGR6aXBXZW9jViYjeEE7cHIxTVZwM3FZclM2cjhPZFBoRzFjVmFMTUJVOU1WYTlURmFkNm1LMDcxTVZwN3IrVlpyNUx0RC9BSmMzL0p4czB1cy92QzlSMlovYyYjeEE7ajQvZXk3TVYyRHNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmVFL25BOVBPY28vNG9pL1VjM09oL3UzbSYjeEE7dTFQNzc0QmhQcVptT3ZwM3FZclR2VXhXbHlYTG9DRk5BZXVOSXBWVUtFWnBTQVN0WTkvZkFoVXNZb3B1ZnFOdUJzbzYvUEVva2FRMCYjeEE7amNXSUJxdjdMZEtqQ3lEUWxhbEs3ZGFZclNwSmVGNDFRZ0RqM3hwQWlwZXBpeXAzcVlyVHZVeFdudm41VEd2a2l6UC9BQlpOL3dBbiYjeEE7V3pTYTMrOEwwM1p2OXlQajk3TU14WFBkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZGlyd1A4NUhwNTJsSCYjeEE7L0x2RCtvNXV0RC9kdk9kcC93Qjc4QXdiMUJtWTYrbmVvTVZwM3FERmFkNmd4V2xlelJaNWVMbWlLS3NhNEN4a2FUTXJZUlFsZ0tGUiYjeEE7OFJCSkpCUGVod05XNUtuUGJRU1IvdTMzUWZBQTFSamFSSWhBdzNxcEdVWkEzV2g3NzRhYkRGUU1ncmhaVTE2Z3hXbmVvTVZwM3FERiYjeEE7YWZRWDVRbXZrV3lQL0ZrLy9KMXMwbXQvdkM5TDJiL2NqNHN6ekVjNTJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMiYjeEE7S3V4VjJLdm56ODZYcDU0bEgvTHZEK281dXREL0FIYnp2YVg5NzhHQ2VwbVk0Rk85VEZhVjRnaFlCdHE5SzlUOUFwaXhLS3VMU09KUCYjeEE7VU1nRVlvQ1ZGVFU5aDB3V3hFclViZSt0WWJoSFlNVUIzWm05dkFZbEppU0VkY2FwWVQyN3BHOGRTT2pNUjM5emtXQWdRVUJIZFdzUyYjeEE7U0w2cU16aWdDY3ozQjY1SzJ3eExTbUYra2hCOXVuM0grdUZkM1NReUpUa0F5dHVyTC9tTVZCVUc1THYyeFN0NW5yMkhYRkx2VXhXbiYjeEE7MFQrVHByNUNzai94WlA4QThuV3pTYTMrOEwwZlozOXlQaXpYTVJ6bllxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWSYjeEE7cTdGWFlxK2R2enZlbm51VWY4dThQNmptNzBIOTI4LzJqL2UvQmdsUDNQcUU5VFFETXgxL1YwTkdKSjZEdGlwVnl3TGNqOXJ4eFlvNiYjeEE7MmhubmhaUW9lUDdSVnVtM2NFZE1pd0pBS0F1YmUwQjR0SVl6NGZiSDNqamhiSWtvUTJGczI0bis5Vy9nRGc0V2ZHZTV0TEtKVy92YSYjeEE7L0pXL2lCaUFwa2lramlGUGhlUStCb2cvaWNrd0pSVlpTb1p3QWdGRVVENFFQcHdNRU5jenhxYUtBV0lJYjVIQ3pBUXl6RlRVSGZGbCYjeEE7U3BOeEFWMTJEanA0SEZBZlJYNU1HdjVmMkovNHNuLzVPdG1qMTM5NlhvK3ovd0M2SHhaeG1JNXJzVmRpcnNWZGlyc1ZkaXJzVmRpciYjeEE7c1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmZPSDU2UFR6OUtQK1hhRDlSemVhRCs3K0xvTzBQNzM0TUVodVU0R0tUN0o2SHd6TXB3Q0hIMSYjeEE7SWpWZmlUeEdLODF5M1NIdlQ1NDBqaFgvQUtWbVJTaU1hSHJqUzhDRmFjczFXTlNjV1ZJcUcranFxRmVLOU91Tk1URlZ1cnlKSmVNUSYjeEE7NXI0LzVqQlRHTVZNWFU3ZlpqcDduL01ZYVR3aEdIVUpQcW9oa0k0anFhVXdVdzRON1NvRU96OFQ4SUJJUHNNTGN1alJtK0p2aFR1VCYjeEE7aWdsMXhjcTVDcjloZGhqU2lMNlIvSk0xL0x5eFAvRmx4L3llYk5GcnY3MHZRNkQrNkh4WjFtSTVyc1ZkaXJzVmRpcnNWZGlyc1ZkaSYjeEE7cnNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZmTlA1OHZUOHdaaC95N1FmOFJPYnpRZjNmeGRGMmgvZWZCNTM2bVpyaFV2UzVrVDdKMjhPMiYjeEE7S0RGVSt0UnQvZUlDZkVZbzRXdVZzZWpGZm5oWGRwaEdBU0pBYWRzQ3FYcVlzcVZvN3gwWGlLRWUrTEV4WC9XcDJGUVZVZU5SL0U0byYjeEE7NFFzYVJUL2VTbHZaZjdjVTB0TjBlUEdNY0YvRS9NNHA0VnIzRHY4QWFhdUswdDlURk5QcDM4ampYOHViQS84QUZ0eC95ZWJORnJ2NyYjeEE7MHUrMEg5MEdlNWh1WTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3Rlh6SitmclUvTU9ZZjh1MEgvQUJFNSYjeEE7dmRCL2QvRjBldjhBN3o0UE9QVXpOY0tuZXBpdE85VEZhZDZtSzA3MU1WcDNxWXJUdlV4V25lcGl0TzlURmFkNm1LMDcxTVZwM3FZciYjeEE7VDZqL0FDS05meTIwOC84QUZ0eC95ZWJORHJ2NzB1KzBQOTBHZjVodVc3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcSYjeEE7N0ZYWXE3Rlh5Ny96a0cxUHpHbUgvTHJCL3dBUk9iM3Mvd0R1L2k2WFhmM2p6YjFNelhEcDNxWXJUdlV4V25lcGl0TzlURmFkNm1LMCYjeEE7NzFNVnAzcVlyVHZVeFduZXBpdE85VEZhZDZtSzArcWZ5Rk5meXowOC93REZ0ei95ZWJORHIvNzB1NzBYOTJIb1dZYmx1eFYyS3V4ViYjeEE7Mkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFY4ci84QU9RNzAvTWlZZjh1dHYveEU1dmV6L3dDNitMcHRiL2VQTS9VeiYjeEE7T2NTbmVwaXRPOVRGYWQ2bUswNzFNVnAzcVlyVHZVeFduZXBpdE85VEZhZDZtSzA3MU1WcDNxWXJUNncvSUUxL0xIVGovd0FXM1A4QSYjeEE7eWZiTkJyLzcwdTYwWDkySG9tWWJsT3hWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjhvLzg1R1BUOHk1eCYjeEE7L3dBdWx2OEE4Uk9iN3MvKzYrTHFOYi9lUE1QVXpOY1NuZXBpdE85VEZhZDZtSzA3MU1WcDNxWXJUdlV4V25lcGl0TzlURmFkNm1LMCYjeEE7NzFNVnAzcVlyVDYyL3dDY2ZEWDhydE9QL0Z0ei93QW4zelFhL3dEdlM3alIvd0IySG8rWWJsT3hWMkt1eFYyS3V4VjJLdXhWMkt1eCYjeEE7VjJLdXhWMkt1eFYyS3V4VjJLdXhWOG1mODVJdFQ4elp4L3k2Vy84QXhFNXZ1ei83cjR1cDFuMXZMZWVaeml1NTRxN25pcnVlS3U1NCYjeEE7cTduaXJ1ZUt1NTRxN25pcnVlS3U1NHE3bmlyNjgvNXg0TmZ5cjAwLzhXM1AvSjk4NS9YL0FONmZnN2ZTZjNZZWs1aHVTN0ZYWXE3RiYjeEE7WFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYeU4vemtxOVB6UW5IL0xwYmY4Uk9iL3M3KzYrTHF0WDlieXYxTXpuRiYjeEE7ZDZtS3U5VEZYZXBpcnZVeFYzcVlxNzFNVmQ2bUt1OVRGWGVwaXJ2VXhWM3FZcSt3ZitjY3pYOHFOTVAvQUJkZGY4bjN6biswUDcwLyYjeEE7QjIyay91dzlNekNjbDJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3ZrRC9uSnA2Zm1sT1ArWE8yL3dDSSYjeEE7bk9nN08vdXZpNnZWL1c4bzlUTTV4bmVwaXJ2VXhWM3FZcTcxTVZkNm1LdTlURlhlcGlydlV4VjNxWXE3MU1WZDZtS3Zzai9uRzgxLyYjeEE7S2JURC93QVhYWC9VUStjOTJoL2VuNE8xMHYwQjZkbUU1RHNWZGlyc1ZkaXJzVmRpcnNWZGlyc1ZkaXJzVmRpcnNWZi8yUT09PC94bXBHSW1nOmltYWdlPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QWx0PgogICAgICAgICA8L3htcDpUaHVtYm5haWxzPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnV1aWQ6OUUzRTVDOUE4QzgxREIxMTg3MzREQjU4RkRERTRCQTc8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDowYTFiZjE5ZC03NDY2LTQ0YTUtOTVmMS02OTJlMTEyMzdhNjg8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6MGExYmYxOWQtNzQ2Ni00NGE1LTk1ZjEtNjkyZTExMjM3YTY4PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06UmVuZGl0aW9uQ2xhc3M+cHJvb2Y6cGRmPC94bXBNTTpSZW5kaXRpb25DbGFzcz4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDo5Zjk0ZmE2YS01M2U1LTQyMGMtYTJhNy0yNjEwZmFkNmRjODA8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6OWY5NGZhNmEtNTNlNS00MjBjLWEyYTctMjYxMGZhZDZkYzgwPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnV1aWQ6OUUzRTVDOUE4QzgxREIxMTg3MzREQjU4RkRERTRCQTc8L3N0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOnJlbmRpdGlvbkNsYXNzPnByb29mOnBkZjwvc3RSZWY6cmVuZGl0aW9uQ2xhc3M+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo5Zjk0ZmE2YS01M2U1LTQyMGMtYTJhNy0yNjEwZmFkNmRjODA8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDctMDlUMTg6MTQ6MzIrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjBhMWJmMTlkLTc0NjYtNDRhNS05NWYxLTY5MmUxMTIzN2E2ODwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wNy0xMFQxNDo1Nzo0OSswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjAxNyAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8aWxsdXN0cmF0b3I6U3RhcnR1cFByb2ZpbGU+QmFzaWMgUkdCPC9pbGx1c3RyYXRvcjpTdGFydHVwUHJvZmlsZT4KICAgICAgICAgPHBkZjpQcm9kdWNlcj5BZG9iZSBQREYgbGlicmFyeSAxMC4wMTwvcGRmOlByb2R1Y2VyPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+/+IMWElDQ19QUk9GSUxFAAEBAAAMSExpbm8CEAAAbW50clJHQiBYWVogB84AAgAJAAYAMQAAYWNzcE1TRlQAAAAASUVDIHNSR0IAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1IUCAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARY3BydAAAAVAAAAAzZGVz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0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0X0TQWi+iaC0huNE0LbRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLSC6vVILYF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIF1eqQIILhVNS20XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0huompZaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLSC4pKLYQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCK9wn4qS2GLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPxQQxcJ+KCGLhPx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KoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBayC40SCyELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQiG4zUQi2ELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0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XFTCJhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIgiZnvQthCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEexMyghFjGDw4mX0oU1tG202Iuhz6qDn560jqdFoHZIcCYocLc7tUG6O0PDYw7KqJOYuoUuriaPWaIsjwIh6eClanU225VRzOpxFsefWCHcwVyajIDx4n05KToUNFeJmULoR5EzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEWMWMuI59UKclapRt8O35HjgD1UHPybuill7TbQ7JlaxwIiQOPrCSaubqCoxupdiNlvvlv8Ay3Bjy3td8RlwgY+xJNLpXWvxuV0Q1DOCdEEiJ71J6xaqTwRPae9BoiVrTM+lEMHUiYY3GfeUK3WjI4nV7z9JTUx+IiJzCJ+nghYqkQuBHaULE0zCJme9DKEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIguHpFJZbDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQz0OER6xNJZDTguYnCI+tTLNfInB0OhtLm1Imomo4+6mGfS9kx43ARh6D1KJZ4nqddabg6wsxFsICEOcE1OAqsiczqcTvDMbXOAh1mkvsPT9OqraUnz7XFsXKdT121mEc7lcIn65qZcnYxpwVC4RPrM1Es2EnB5cPSKSyYYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhnocIj1pLIacG40Aa5zY+CSznbt1U0uD6xsO26fPjufDgPaolngeq73Nirikj3rS4tC67EQOERAQI7eKSzLpufJulbkOA3bds2ob8N7y4N4CJJgKR7IKU2et6f0/FhqvpUNnJucCTx7apLPQKmESsA9AUlldUl/DiBhP1FJZqZK4Npi0tw5dCk1GjXnhkztFAcj3FRNTK6dzLKGbBbHh0KmWbePLJq8rQD9RSWbtFTZUcQD9RSWbKTZjcPSKSyYYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIZDcKpJZaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWs9vFfT2oLWWsWQA9v9vtSSiuhwbzSZw0jvTQ5e4xNo7fbN0GKHGHdz71B5ffbF5DpHb434cIw4Q7PpohxV0t3ScvuO4jJExPFDu7PZuiDjNXnDie9Sel2+Jo0eXICTz+oJJ1KKHBVvFUL7WeXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrPbxVJFrNlpNQGOB49icTS3GF1Jnd7Zv7tMwBryOzn9ag8rvekrPVqiDdN8OqBudGIPpzQt2HS/gPRHD6nO17iePP07VMnp8GJ0opBwJ7ZobTTSLuGBI4HokmtklHQaPEHEcDx58Ek5G5yOk7Xb9tGWHuyUSeZ3e9ePtNpn2cNYTbyHpy7ElGji6jNUScfuGlGOPCfYknotpndZyepaATwPb2BTJ38DbRqchHHmh0KEyG4VSSy1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1i4VSRaxcKpItYuFUkWsXCqSLWLhVJFrFwqki1kN1OqQuZZaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaLqdUhcxaSsyU69iQuZhVQX8OohD6UjvNXJik22HXFsOMu36uxIXM52XayXf8yMIR6oa34JSU82uLo8Z9qQuZs4tqkajNqIx+lI7zoY8UFB+SnXsSFzNumgiup1SFzM7RdTqkLmLSZjS7s6poYVVKktDTOIjb6dyaczXeZJ8SHJiLeyHp6k0LaMiqKxMDAjr9SQi5KTy6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWi6nVIXMWmbcpb2dU0IdElpmrLRz6wSEUVbdM8fqy7t6pCFO3SKpyR/tTQvVEBruPLsmp0FVOhscDuPtmo05mnlp0Op254i2Il2pocLeUuGfT9myYw1sYcp+KxZ4bqVFdzN7qMjBiddDiDDiog5eKiq9QfN94ewufCHM9sf0LJRzPZ9OpqtUnBat3E+uanQ9Xt6dDSZHc+E+1TC5nUopK91OqiFzLbRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLRdTqkLmLSG40SC2ELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQj24pAtRI3KaekuKQit0InbncO3x9IJaVPEmSfmXQhw7/rSDD4CmTB2ocfQ+kEtM1iSK7spp6T4pCLVQiO4pBZajy40SBCMmkkjkkGNShG/2/TnK5ogOMFEHJ3mb4abO/0vl1+bB8QMjwlCs5BIPJZ+sU48tjZzO67d+XLhCEI+nckHc2G8+Mkzjc4LXHlwUwejxaor3GiQXQhcaJAhC40SBCFxokCELjRIEI+ieXfJY1+lbrd0fnwY80HabT4SxmR+IiIy5XPbktbkj7oABhxjxWLPHdY8SvaZ3ttiqaq6dKqnLSfJJNcO189Ow1vmbys/ZAzVaR+XUaBxDHuyAHLp8hMGjK7G1rDjyRg10B73AjlGVqbvROu09TbwbhU0btapLhUu6ZcrtUvTXnHG3GimD0kIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEI9DiD2JBDp0LuHIQR9aQa2ShNG+0eptI4hRBydxhlHX6HdTiAgev1pB57dbBVmxzb25zIXdk0iTTx9MSqmDltdri+4xHp7UhHd2u1tg5bU5ok8kg7uHHBq8jzx7vp7VMG/RSiG40SCyELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCEQxMyklkIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQucO0pLEI9vdMpLItp5Hlzj2lJZMIRMykiEImZSRCETMpIhGeMm7mUlmNaUHXbO+17ImRUM8/1GmaWfWtBu2PFpQwiJAiOzjDtSWfPt10+vJnuXBnD7/qRlc9w7SUUnqOk4XjpSPm+qJuPE99VMns8C9lFSJmUk2IQiZlJEIRMykiEImZSRCO88n+WnbjkbueuYfyGF0cGJ3LV5mOhEgj3tPicPe7HOEOQcknlPEXW1s6Hstq/wDldS9pr9RP/GfZyWvI+xxM0PnJFmxY9RiyYM7G5cOVjseTG/i17HCBaRUIZ48leHIsuJunJS5TXFM+FeZdgzbHq/cvyaDUOcdLmMTb2nT5T2ZcY5H77eI7QEs+qdE6tj6pt/ahbuhe0v8AGXc/U9OTfNRMyknahCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhErHmZ7+qSYVUovYs5bDiQks1cmJM2WPWuHJx5TUGlXtk+wldrnH73ZHmUlla2q5FHLqifvHvUm1jwJdhrsmUk8ykm5RQkVS4k8ykl6SR5EzKSTCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCILgpllsMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhmbW3en1JJjU4LA05IjDxSe4peZI8GMtPIj2FJ7iXXKOo2htz2j1DryUNvkcPqFUUtn0/SbU/Jpw+MIt4TKhs8NuN/TRmt7zi98w/Bc8HmI/RJTLeh6XpeT4qTR891LgHHjy9c1Ms9hhTgqXBJZfDFwSWIYuCSxDOp8r+Xn77qr8oczbtO4HU5QCDkPMabE6H23j7RH2GmPMgGG2cLrvWKel4LccPeVr2Vy/lPuXZzenCY+74mYsGLHhwsbjxYmNx48bBBrGMAa1rRIAKJZ8qyVZMtbyZG6slTlt8W2Z3BJZjDFwSWIZS3HQ6TdNJl0WrZfhyjmOD8bx9jLicQbMjDyPsMQSElmzs91uNjuKdzt3GSn0NdqfNP6an5+3nadRsutfo9SIji/BnDSGajCSQ3I3nA8IObGLTwqpln1zpu/wAPU9stxh0fCqntpfJ/Y+1GquCmWb8MXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4JLEMXBJYhi4TSWLWZjKB6GCS+Ri8bJhmHYe7iklbxnvx6lJfaR8IjdmE/Tu4JJmsbIjkj6FJZmqIPLgksmGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQyG4VQttYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtZ60glCGmkb7QacZS0QJj6dVByt3meNNnb6fy6/LhvDCeEvSKiTy+brFNGS1s57cNv/ACziC0ggmPBTJ19pu/j0ymR7fqW4Mg58DTsQz3mGrLQz6do/MmHHpgx0CWt4GIUHiNx0XJXnuXBs4bfNyZqHvcDzJ/Sp+o9T0vZVYaUmcFqMgc4njzUnq8NDSK1wqhfaxcKoLWXdu0zdfr9Jo3ZW4G6nPjwnM8Ahge6EYRALuwCIiYBDV3marabTJuVS63RQ3C7Y+mvcfovQaPS7bpcWj0mP4eDC2DRwLnHm7JkdwuyPPEntKxPjm63Ofe56tzuHdlqfo5JckuxFu4VQ17WLhVBaxcKoLWLhVBazS79s2l3zQPwZ4YsmIPyabVECOnyBvFxJ4/BdAXjtAmAQk6fSupZ+l7pZcXtUVQqqf2l96/VfPubR+eXNIJHOBIi3iDAwiD2grLQ+vppqTAuAmhlAuFUJtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFU0FrEaHuTQiBcJFNBAuFUJtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrFwqgtYuFUFrILjRILIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhEmN5DuxIMa6ZR1mz52syMuhwIUNHn+o4nVQ4Ps+37tpG6NrSWghvLhx4dvFRB823nT9xVuG0nEnzzzFq8WXK8st4k8lMHsOj7evHQlVJwL9UWPJEOfp2qYPWU4FVTqTN3LIBAOMPX4pBU9lQ3MFTNrHP5nxSDYx7ZUlBzy4x9PFINtUpKDG40SCYQuNEgQhcUgWovjdt0AAG464ACAA1eoAAHIAfE4AJCNV9P2LcvDin+ZT9x3PkDXa3Vbzqcep1epzsG2ZnhmbPlytDxqtE0ODcj3AOAcRHnxUVKEeW8W7XbYOm0V4cdFFTzpSqUnFtemiPr6wPnYQHwzzRr9wx+YtyxYddrMWJmXEGY8epzsY0fl8JIa1rw0CJ7As0tD6l0PabOvo+HJkxY6q3S5bppb959rRVw5Nz1TDjya3W5cbxB+PJqc72OHCLXNdkLXD1pCNjJRssFV9GLHTWuDVNKa88GWTasjWxLOnrSDGjf0VVQmaPUYTjJBCmDqYcirKBJEkg24R5caJAhC40SBCFxokCELjRIEI9BJ5BIEIzDXH0KQjFtErWOkPSfakIrdSJfhOl0P0qDC9GLmEdnQ/SpglVIgc0jsASEWppkVxSDOELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCEQ3GaiEWwhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCPQ4gxikIh0pmw02qdjIIMkhGpmwKtG8x7zlawNDyEhHLr6bQ6paNdqtwfljF3NIRuYNpTj4I0z8jieaQjo00JIxudMpBlajy4zSETCFxmkIQhcZpCEIzDXlIRi3SjL4b/QJCMb6SM3DmkIzUM775cOP+earj/9Ks//ALXoUhHkvGaX9V4/+cU/4FZ9quM1EI+aQhcZpCEI+EeZv/zm3P8A6bD/AOzYTJEkfVeif/YmD+a/8Ko6by5psWbJja+ECRHgEhHE6zmrx0N0nebptmlZpHOaACBw5cahREHlNjvs9W4Sqco+L7uwMyPA5RkFlB9K6fU6qFJyzybvSZSEd6lKDC4zSEZQhcZpCEIXGaQhCPRElIRDhGx0+mdkhDw9CkI082amg3OPbMkI29FGhza99RPEk/IPHZ0+pIRh+LpZINA+HEE+nYmhi91TzK+XSOb2HuSEW49xSzVZsRbH6Apg38eRM17wQkI3KWiG4zSEWQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCILq9VMvkWQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQLq9Ul8hAur1SXyEC6vVJfIQeh5HJ3VJYt7jL4rvxdT9KT3EfDXI8OQnm7qkvkFQl2GN1eqS+RMC6vVJfIQLq9Ul8hAur1SXyEEuMXEceqS+RhXojf6LQuzQ7VEs5O53Sxm3y7LkbjutMIJLOfR1Oiqu2TmtXpzjJB9qmXyO1t8yrUkO37nrdo1Q1ehznDma1zCfdc1+N0C7HkY4Fr2EtBgeRAI4gFJLN3sdt1DB+H3VF2JueTTXamtU/s04M6X/wCIPmL/AG2k/wDlZv8AzlGpxf8AZHo/7OT+6YPzA8xEEfG0oqNMyIqIkjgmo/2R6P8As5P7pnMu12fU6nJqtTmdm1GZ5flyPPFzndsBBrQBwAEAAIAQUy+R21tcWDDTgwUqnFSoSXYvp529Tqdr3Y6ctIfCHbFRqcLfdPWaU0dBq/MuTNhsOUnhDmfpUa8jkbfolGPJcqThdfrPiuJu6qdeR6nabb4aiDRufEkx6qZfI6iphcDG6vVJfImBdXqkvkIF1eqS+QgnwGLgI8zNJ7irLojvdh0jM+RgJHEgKG3yPKdW3FWKhtH1I7Fgbp7gRdbEqJfI8Kuq5as0PhJzb9A34hA48YTSTtU7t2SzY4tkvbEDmO9JZpV9Ttqg025bX8EEwgks6Wz33xGjhtbitLuPKKmT1O2yXJHO5uBPHr7VMnYx6lEugTx6pL5G0loeXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIF1eqS+QgXV6pL5CBdXqkvkIIbgklsMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMXBJEMt6Vzbm+uVeCSa+dO1n07yyzC/LjDhGJA5RJ9ihniOt1ZacdTpPrep2LNqdIfgbfndFoDHjC5jTER4vyBrOqxk+fYeq48O4/e5qFrqpl+hanzHX+RN61GQxZpdI0k/z84cR6m6ZufjTgsrj3G08VdMw0KHkyP+TT/lWlXF8s4uB1e6+vHptL4ZcuX/kJJfk8bwo2+Dz1VfYl/jG5xeQPLmlYXan81qAB7z9Tq/hMBJhGOnbpwPe5RJ9qSzmZPFvWc9VuGyh8qaJf99cQan5dbHlidPn12ldHg0ZGZsYpblxfEMP21Fxbg8Y9Uo0y0Ysi8jT9Kceo0Go+WuqYSdHumny84DU4Mun9QLsR1Me4Kbjr4fGuCrTc4K6f5tSq+u36zT5vJ3mTSxLdIzUtA4u02oxO5SZkdizOJHYGlLkdHH4j6Ln0eR0N9lVLXrSa9ZpNVpt00kfzWg1unA5uy6XOxkJh5ZYRHtBUydPBn2O4/gZcVbfKqlv0TJpn5bu1JOlTjtMLgkmUMXBJEMXBJEMXBJEMnw5AHCiSVZKG0dtsu4twPa66ECFHE8z1PZvLS1B9IZ5iGTAGXDiIdO1QeLq6O6Mt0dp5pdTjyZQSRzQnPgroxwjtMD8ZxttIhAehUSeay013u453fMmKx0CIwPZ2qUdjpdGS5HyjcnNi6B7ZKZ9B77ZKqFJyedzYlTJ6DEnBrnOEfYkm5SnBjcEkmGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGLgkiGQ3BCy1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtYuCC1i4ILWLggtZtNm2vPvW4YdBpyGOyXPyZXAlmHCwRflcBxMOQHCLiBERR6Gj1LfYumbSrd5tUtElxbfBL63ySbPqWm+W+2MgdXr9bqCOYwtw6ZhNQ4al0KB0arGfIeFzeM99V/q+LFQu9up/4q9R0mi8oeW9IQW7c3K4Q97U5c2eMJsfkOIexoiknF3XiHrW4WuZ008qUqfWlPrO72x2k28AaTTafTCWnwYsI7sbWjkoiTyu9p3G7c7iuut/yqm/rbN9k3p72Wl5IhDn9cUg5NHTaaaroNJly/Gdxjx9SmDp0Y/hotYNvflEQ0939kFBTl3dONw2fOfmS/JpNDg2zFcMmqc3UZy3m3T4Hg4284j4udsQR/szNSj2Pgumjcbqre1xZjVtPfVUtfRTp/bIu7BuQ3XadNqnGOdrfgaoS1GGDchP8A0gIeB2BwRo1urbL8B1CvAv4Td1P818PRqvMbW4KDQtYuCC1i4ILWa/U7ZtesidVt+j1BJiXZdNhe+M7y0vBrFPObeHfb7bfwM2ShLsVTS9EwaDU+SPLWoiW6PJpnHm7TajM3uZkflxD2NUy+46+HxR1rDo8irXKqlP1pJ+s5/U/LXSOBOj3PUYjA2t1ODFnBP3QX4nae0TNp9XYknXweNdwv9ZwUVL+TU6fU7vrPlWt0ubb9XqNFqW259NldiyAcWktPBzCQCWPbAtMBEELI95tc+Pd7ejc4XOKulNfc+9cH3lW4IX2s9DwDHigdMmw0+qsI4n09qR5DTzYLkb/T7keET6d6iDk5tkjo9FulpBuKNHG3OxlNQdRi30tZAOPKaiDh5OlJ1TBqdw3f4oMXenekG/tOn2PRHE63UhxdxPepPT7bA0kc9myAk81MHXxUNIpF4JKG0qXB5cEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsXBBaxcEFrFwQWsguNEgthC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCEfavl5tR0u35d0yshm3A2YYiBbpMTiAR2j4+UE1DWkLFo+aeMN+s+7p2ON/usOtXfW/8lettH0S40UQeOhC4pAhErczh6fWkGDxpknxyYBIMPhJGw0Zue2Mx1Q09wraXB9P2fDg+De+0BrS5xMBaAIkk9gACg8P1HJl+JbTOrPjHmfS49/3HX6gCGHFpdVqKs02kwPOFsPunI8NBq4lZR2H0noeevpOzxYX/ABKq6afLVXUpffCmO5I+XeTd2Gj3bPtmRwGHcGk4o8A3VYQ5zeZgPjYrhMuDQpaR7rxHsHuOn072hfvML176Xx9Dh9ybPqJcYnksIPDQeXGimBCFxokCELjRIEIXGiQIQuNEgQj5H8x9qLMum3nCz3cwGk1hA5ZWAnT5XdsX4wWE8hY0dqlI+heDN+qsdfTcj1p9ujyP3l5nr52fLbjRZQe6hC40SBCMm5CD2JBDoTLuLORDl1/SUg1q8SZs8Osc2HHx7uaQjRybZMvDcXAQiog1Xs02Q5de5w5939qmEWY9qkavNqS6Pp+lIN/HhSNe/ITLr9KQbdNCIbjRILIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIhuM1BZCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghGy2jb827blpNvxRjqMrWveBH4eFvvZsvIj+HiaTU8ENPqO7x9P2WTd5OFFOi5vgl53CP05gw49Nhw6fC0Mw4MTMOJg5Mx42hjGijWgKD4hlyV5slWbI5yVVNt823LJUKwgCAKAW9PmLHDjy5J29xr5saqQ8y+cjs20jTsyW6jcHHAwAwcMDQDqX8uIscGH9tIHRfDa6l1D41VM4cKuf8AO/VXp1/tTTbZrnv8sbvuOX+ZrtHrfhx5jTYMGZrTyEL8lx4cwGlI1OlvtrTT1zb7PH7mLJRP86qpN+hR5HJ+b8muzYtTj1OHIWZsGVmbE8Qi3LjeHscOEODgsj7PRtceTDVhyKcdVLpa5pqGfo3atwxbrt2j3DFC3U4Wvc0GPw8oizNij2nFma5vsUHxrf7OvYbzJtMnvUVR5VxT86h+c2KGmEAQBAEBrd427Hu226vb8kB+YwubjeREY8zffw5Yc/4eVoNRwQ3enbyvp+9x7uj9SrVc1wqXnUo/MebHm0+bLgzNOPNhyPxZWOHvMyY3Fj2mrXCCk+3468ebHTlxucdSTT5p6pkVxmhnCFxmghGQyOHahDoTJ25nDt9PUhU8aJPzDu09PqKQzD4SMXZ3HmfBIMlipIXZXHtj4KSxY0iK4zUGcIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIXGaCELjNBCFxmghC4zQQhcZoIQuM0EIhur1Uz3FsC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hB9g+W20/Dw6jeszfezl2l0ZJ5YWO/7Rlb+3laGA8xY4dqhvuPnXjTqF+WjpmN+zT7Vfla9leZa+dcj6ndXqonuPCQLq9UnuEC6vVJ7hAur1Se4QLq9UnuEHt8OMeqT3EWzofC9/3LP5l81N0OkyF2Judm26VzTcwMY8/mdT7pg5t977hzxtElKcLgfU+k7LF0ToL3W4pjI6Xkq5y17NPc4hR+02fY9ws02xa3TYSW4tPtOpw4mx5MxaR7GAntIa1R2nznaXZuq4s+TXJXuKW/K602fl0vJ5nqsp7j7mqY7D6v8ALXeYO1Wy5snB0dZowXfeADdTibE9rQ14Ak4qG+48D416bKx9Sxrh7Ff10v61P81H1u6vVRPcfPoF1eqT3CBdXqk9wgXV6pPcIF1eqT3CBdXqk9wg+H/MTavye549zxNhg3Jp+Lb9lurwhofGHAHNjg6pDjNSn3H1Dwdv/wARsXssj/e4Xp30Ph6HK7lB88ur1Uz3HsIF1eqT3CBdXqk9wgXV6pPcIF5/F1Se4W9wur1Se4Wi6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QLq9UnuEC6vVJ7hAur1Se4QQXCfipLYYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDPuO2ed/K+h2vQ6ZubNiODS4cTtM3SZ3OY9rWjJF9nwnlz4uLrjHnzWJ8u3vhjru632XM6aalXkbuddMNN6aTK0hRGnkGX5l7Czhj0+5ZjMYcDG8z2v1IdH+6gx+Ceq1a114af7apv1Ux6zW5fmlgH8jZ8r65dY3HDhzgzTZYwNQhu4/AuV/xdxSvJRP11I1z/AJm7lkNul2zRtcY2h7tTqDyljdgJh7FMG5T4I2VCnPnyNd1tP13Ef++PnXVn/s23ubHkNLtOqy8+Ih8T4/YO5NDP/Zzwzt/42ZP+dlpX1WmP5v5kauHubmyNsB+S0+jhGJEScGAiHbHiO1RNJP4fwZt+3A/7eqv/ABqvpwMHbD8wNc0s1GXX/CeIOZn3fH8NwMWkOws1bvukxi3iEmkzp6t4R2ruw04r1204nPpdC+s6fyd5N1Wz6x+5bm7AczcT8Olw4nHKcZyQGTM99rWtd8MFoAjwcYwS5HD8R+I8HUdstlslX8N1J1NqJjhSl5dXMapQdxu//wBCd0//AAdrf/ZsqhNHl+n/AP2hg/z1H+Ej8t3Cfisz7rDJtPqsukzY9Tpsz8OfC4PxZcZLXscO0ETHAjkRwKFWbBj3GKrDmpVWKpQ0+DR2+n+YfmMfDxAaPV5C5rW36R5y5XGADbdPkwglx/CAeKiEeYzeD+jOcn7zHRHZWoXfNSfDvZuGee/NI/m7Didxj7mh3LH7vaPey5ONU0OdV4V6E/c3dS8teN/Yiwz5h7q0Ry+XXuAMSWO1WMBvb9rTZONUgqq8H7B6Y94k+9Uv6qkbPbPPz9frtJosmx6jTHV6nFp25TqHZGMOVwaHEO0eGMJKNDR3vhOnabXJuaN1RWsdDqi1JuP7dn0Y8OBiDI8FEo8bx4HG6rz1sOi1mp0Opfq8ebS53YMrvyxfjvY4tcWnG5zi0ESBopPSYPCvVtztqN1hWOrHkpVS9qHD1Uylr5zm/Nfmryzu+x6jS4NS/UasvxZNLj/K6nG7HmZkh8Qvy4WYg34JcDBxMHckR2egdB6307qlGfLQqNvDVTupcprhCbfGHwiUfH7hPxWR9Fhi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMXCfighi4T8UEMhuFUgshi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhnoMewpDI4GQAr7AlrIk9gJOSCJfceECvtCWsmTEmHYUhkpSeXCqQTDJceLNmMMOHNlMseNzz/AKIKQV15MePXJVTT5Wl9Zfx7PumQRGhztE8obgA9ZzOxwSDVr6jsaNHlob7va+qTP/KMzf5+q27THtbm12EuHL7uE5SefZFRBh/WGN/wseatd1D+2Dz8lt7P528acHtGn02q1EowcceJp7wpgn8Tu6v4e3rj+VVTT9rZ5bsjPtancc9cWlwYR35dQ8iMZdiiGTd1OrhRho8tVT+qlHnx9mYfd0evzf8ATazDijwhyxaVxEPWkMfC6lV72TFT5KG/rqH57b2/Y2jDGebVavJ2QPBuXE0xNFME/hd2/e3FXmpoX1pnn+aNH2Nu21nL/wBGfk5f9Pmy81ED8C372bO/7ZL/AAaUdj5G0+h3redQNx0ejzDT6B+XFgGmw4sJcc+HGXvwY2tZlLG5CAXAwjOEIaaR53xTl3XTOm0fg8mSl15UnVc24tbhVOWpjsjh5T7Hj2naMP8AJ2vbsXP+XodKznz+zjHNYanzivqHUcn8TPmq8tdT+tl9oxsEGMawRjBrWtEeUYCAjAJDNSp11Oam2+8zuFUgxhi4VSBDFwqkCGLhVIEM128OH+U7pz/+h2t/9myolqbvTk/6wwf56j/CR+V7hVWwfd4YuFUgQxcKpAhmfxn/AI8n7x+lRBj8KnkvQSjW6kQI1OoBHKGbIIer3uCmDB7bA+NFHoX3HQ+WNy1w8w7OBrdYAdx0oI/M5oEfFbwP8TiFDTg4/XNltf6o3L+FjlYav1Vy8h+mxuOsH/pWc8Ie9kLh7Q4mKr1PiD2e2f6lHog/NXmbedePMG8N+M1wG4apoGTT6XL7pyu4H4mF8Rx7VYlofauidN2j6Rtna03hp4VVLsXJo0f+b5j9vTbfl4Qi/btID64sxMIKQdT+r8a92vNT5Mlf2tnv+aYnfzNr21wjH3cWfEeUAAcWpaAPYpgfgci9zPmXldL+ulno1u2H7e0AcBH4Ou1LOPaR8X48IpBH4ber3dx6aKX9VoGXZH/a0+5YTLHqNNmb/wCEwYyZc0gfD6nT7teGry01L6qme/D2Z/2ddrcH/T6LHk64dT+hRDF/UqfexYqv5tbX+FSPyOjf/J3fRn/7YxarTQ5cy7C9vbOCmCPxW5p/i7fJ/aumr7Ue/wCUal/8jNodUZYNdpiez7uTJjMfeSB/WOGn+LTlo/nUVfYmRZNp3PF9rQakjnHHjOYQ5xjivEFEGdHUNjX7uWjzuPrgo5GZMRty48mN0sjHMPCjgCpg2qKqMimipVLuckdwqkGcMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGQXGiiC2ELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhHtxSBCM2xkI9EhGDgnY1ziABEnsgT3DtSCqqpJS+BuNPsm6amHwtDnII4Oew4mHlxD8pxth7VGiOdm6nsMP8TLRPc5foUsvHy5nxcdZrNu0cObMuoLstYY8YdcR60NVdZxZNNvjzZO9U6elmDtFseD+buOq1RHNuj0nwvWA7UOLT60gzW66pl/h4aMa511z6qdSu7VbNh/k7Vlzkcsmr1b28a4sADCPapgtpwdSy/xNxTQuVFC+urUru3rKz/zXQbZpCOTseka7Jw5RyZXPifYkLsLV0zHV/Hy58i762l6FBWy75u2Xg7XZmjlDERgAA7IYBjgEgvo6X0/HrTipfl9r/Ck12TPmymOXI/IZ5Huee3tcTNINyjFjxqKKVSu5JEdxokGcIXGiQIQuNEgQhcaJAhC40SBCFxokCEfRvli4/59q+X/ANCNR/7boEg8b43S/qnH/wA4p/wMh90uNFEHy2EetucYNaXGTQSe4cUhEO2lS3CLbNBuGWHw9Dq8keVmlzvjwjwtYexNDXq3Wzo9/LjXlqpX2lpmx70+Fu2asREffwvx9/xLYFIRRV1TplPHPj81Sf1SWG+Wt+dCG3PEfxZdOyHrvzNt9qaFL610qnjmXmVT+pA+XN6AJdpsLQOZdrtABLn+aUaBdZ6a3Crqb/mZP8k1m7eXt2dtW5tGLSxO360D/wB47eOJ02QDidUAE0N3p/WOnrf4G6skLNR/R5P2l/JPzD/unvAtDzteNzzBrH7ztYc4xh7oGrMYk9iyhH3H+v8Apzl0/HqpXFrDlj/AMv8AdDff9nt//wBd9q/+fFGhH+0PS+eb/wAVl/yD0eTvMDuGPT6LK4CNuPdtqc6HKMPzo4AlNCH4j6RTrXXkpXfiy/5Bl/uT5phFu1/EEYRxa3b80DI/C1b7efamhH+03Qph54ffRkX10Ir5PKXmfHG7ZdaYG3+HjGXjT4TnxHDnySEW0eIOh18Nzi87j60i/wCXdj3zB5h2c5tn3PE1u46aLn6DVtZ7uURN5xWkCcYKYRq9Y6p0vL0jcrHucFTeGrRZKZ4cpk/Rb8ebF/MxPx8h77Hs4kRA94DmFEI+OU146/cqT8jTPy/5ncf94d65f/RHVf8AjXKYPuXQ0v6n23+Zp+o0NxokHVhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhE2PU58JjhzZcRnjyPYf9FwSCuvDiyaZKaavKk/rL+Pfd2xiA1uV4lmtzg8uYztyR5JBqV9K2Fbl4qU+6af8GCT/OnP/wDOdv2zUR+052lGLKRTJgdjhxokGH9WU0/wc2ejuuleipM9/ObNl4Zdrz6c9r9JrHP49pGPUse0eqKQR+H6lj1x56a1yroj10tfUe/l9kzROLctRpT2M1mjOSNDk0z3Nb64KIHxep4/4mGitc6K49VSPf8AJM+T/wAz1m3a2TMOqazKfXjzfDtPtSER/WeKj/WMebH3ultelSVM+17npo/G0OoaBzc3G7Iwf98x3s6qYRsYt9sc38PLQ3ymH6HDNfEjgRAjmEg3IR5caJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQiK4pJZCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCPQXuIa0FxPAACJJkABEpJDtSl6I22m2Pd9VAs0mRjD9/PDA2EwMtr3A0BSTn5uqdPwaVZE6uVPtfVp6WbFux6TS8dy3jS4XDnh0zTqcvtAg9h/uFJNN9U3GfTZbbJVT+1V7K+5+knZm8vabhh0Wr3B44h+qyjDjJnbjhFtHMRsqqx9XzfxMmPDTypUv1/Yy9j33VMFui0ui0A7Dg0zDk/vOeC1x/uqDVr6Xgqc7nJlyv+VU49WvrMH6ncdV/P1eoeD934jmsn/LYWsHcp0MqcGzwfwsdCfONfS9SH8o6HI93BJ7kW/iFJJj2fX6n/zfS5soP3wwjH7cj4Yx3pJhX1HaYP42Sml8p19C19Rll8vuwRO4a/RaEgccZf8AH1A/7ziiT3qJIx9Xpy/6piy5e+LafS/uNbkbsWm/9e3B4/6PR6d3q4PzhTJuUPqub/gsNPnrqX1Umk1mfBlfdptIzRtHNjc2bMT63ZnHoApk6m2xZcdMZsjyVc4VPqSKVxUSbMIXFJEIXFJEInw6fValwZp9Pn1DjwDcOF+VxNAxriUkqy5sGFXZq6aKedTS+tnRaTyZ5o1gDse1Z8TDD3tU7FpIA9pZqH48p9jSUk4248S9C2zar3FNVXKma/XSmvWb7H8u9XjI/wAy3ratDx4sxuyarM0VxuGmBdQOIqouOVX4x29f+pbbPl73FK9PtfUX8flDyvg/853TdNc4cxpMOHSsJ9WfHkMPU5LjUr8Q9dy/wcGDFT/Lqqqf9619R9F+X23+WNLvjzpdmyZH/kNQDl1eu1Dot+LpzA4WvOF0SB2KHVoeO8X7zrmfpa+PuUqfi06UUUrsq7WpPt7c2mxf+b7XtmEjk8aRj8nDl774kw5+tY3M+YPHnr/i589S5XtL0IlG5a0C1mYY2/hx4sOMcOXFmMO4Dhz5KLmYfgts3NVM1c22/rZA7Vap3PV6r+7qc7f9XIEuZasGBcMeP+5pf1oqvyNP83LdAQPxcrncJOveYjj2pLL6aKl7lMeRR9SKzjt8YvGiuhzcNPGHrPGCSy6n8XEU/FjuuI/ibUON238Jflo+yHFTqZ2b96Rm/vjX7rqdq/yvcov0MPyGsjFuGEPy+SMfdTU3Nhh3/wCOwwss/Fo5/tI/NP5rYvx7Z+7p/wDmrPU+1fA6ryz+mofmti/Htn7un/5qaj4HVeWf01FfVa3ZMOnyZ2M23UZGiDMTMemc97z9kWhpcGRPEwgAibLsG26nkzU4qnmoofFt1JJemJ5I+fPyOe9zzaC9znENa1rQXEmDWtADWiPADkpk9dTQqaVSphKNXL9JOzXa3HE49XqcZPMsz5Wxhyja4RgklVW121fv46H5aU/sOq8q+Yd+Z5g2drd53QNduOmuYddqXMdHI0G5jshYYiYQ4PXukdKq6RuXVtsFyw1a2Uzw5xJ+pMfmjfsfAbjkcJZMeDLHhDj8XE+Kg+F19C6VXxwpeR1L6mj85+ZPOu4f5/u7NVt2w7i1u4aoQ1204MhI+K7mcZxRPAfuhSfY+jeGtp/VO3qwZt3hqeGn3MtS7O+e/wBLNOPMmw5+Gu8n7e6PN236zU7dDiOIZjDwYAcojqUOi+i9Vxf6r1HMv85RTk9bj6jMZfIWr4OxeYNqee3G/TavTt4nn8T4mdw49gHJJZi6PFm31pq2menvVVFXqin1mY8t+XtZA7Z5w0Ic7lh3TTZNAQexpzZXtDj2cGc+UYpJi+tdX23+u9Oywu3FUsnqSfrflI8/kHzHjZ8XS49HueE8su36zDkaRCMQM/5dzufJoJSTPF4s6NXV8PO8mDJyyUNf4NyXng5nWbZum3x/PaDWaQRhdn02XGwn9XI5gY72EpJ29tvdju/9Vy48j/k1Jv0JyihcUk24QuKSIQuKSIQuKSIQuKSIQuKSIQBcTARJPIARPckkNJavgLnegSSYRcwblr9NAYNZqMQHJrcrrP8AqySw9ySa2XZbTP8AxcdFT5tKfTxNh/vDrcjS3V4NDr4iAdqtJjLxKDsXwjw70NT+p9tQ529WXF/NrcehyajNnGV5e3DhwA82YfiWRiTEDLkykc+QMEk6GPE8dNrqqr73E+pIiuKSWQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQhcUkQivETUyWwxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMzYx+V4ZiY7I93BrGNL3uNGtBJSTGqqmim6tpUrteiOg03lncs7fiZhi0eKES7UPAdb2n4bLnNIk61Rcu85OfreyxOzHdkr/AJK09Lj1SWTpfLW3/wDnWty7lmHPFpYDET+1jcAIH/uvsSSj4/W93/AxU4Mb7auPrX+KYO8y49OCzatt0miHL4rmjJmcJktDOP7Rek+UyXRa8zu3+bJlfJaL7fVBp9Tuu4a0kajWZntdzxh/w8UP+ix2Y+VFMnRw7DabZThx0prtiX6XLIGQJUyW1SbLAwGHLosZNLLU0dZtey63XFv5fTPe2IHxCLMQ4/7R8GH2cUlHA33UtttU/jVpVcuL9C1O503lbR6UNduevxsdAE6bTC/KYiI4kOcInh9iFVF3I8tm67uc7a2OJun9qrRfTz+YvkbdpW/+7trxueBw1Gs/iviOFwx3Ot9jm+pJfmNVPeZ3/wAsz1Kn9mjRenT1pnPblqNxzhwyanI1n+yxH4WMCH2SMdpc0frRRODr7LDs8UOihOrm9X6/sOJ1WnAj7VN2h6fBmk0z9Nkyutw48mV0sbHPNODQeamTpU5qManJUqV3uPrJMfl7c83E4W4WnhdnyNZ3sbfkHclyMK+sbLHwqdT/AJKn1uF6zZaXyfkzPDHah2V5/wALS4S9xqHOJMIfqqLu5mjn8R0Y6bqaFTTzqqj1fpOz0Hy400A/VxxsAiTnzF+SHOJx4Dixget3BLjzm68ZZpt2+tX8lQvTVL9CNyza/J+08sGLW52/7NmN4j2e+2xkBIudCSi45tW+8RdQ411YsT5tr1av0JEr/MRxNLNBo9LosYEIhrXOgORg0Y8Y4TBSSuno6yO7d5MmSvy/fL9aOc1vmRpJGr3Ztcbc7QJccGAgf6KSdnbdFa/1fbvy2/41X3nP5fM+14/sHNnl8PFaP/CuxkD2KTr4+h76v3lTT5X90muy+bW8sOj9TsuYD/QYw/6yG5R4ff8ASZPRT9rf2HV+QPNGvy+Y242t02Jj9HqgbWOc6AGN4BL8jh9po7AocQcDxb0Pa4+jOtuuqpZKe1R2rsXfzPuDt31ruepgP1W429WtisfMz5hT0/bL9T0t/eV3a/Uu56rOaDK8DuDgFPmLVtMK4Y6fQiB2dzvtPe79pxPiVJasSp91JeYwvHoVBlaxeKd6C1i8U70FrNbvLx/lG68v/obru3/5FyqTd6bS/wCscH+eo/wkflP4g9CpuPvdjHxB6FLhYx8QehS4WMfEHoQlwsY+I30h9Km7yixm/wDK72/7xbLx/wDplpf/ABrVFxyeu0v+p9z/AJmr6j9Q3NmO8LGe5nwy1n5f80Ef7xb1x/8Aplqv/GuWaeh9y6En/U+2/wAzT9RFotm1GqAyZHfl8REWue2575FuO5ptMyRSKSWbnqWHA7KFfk7uC8+pdd5dcPsatjv2sRb4ZHpJqrrFP62Nrzz9iK7vL+rH2cunfS97T1xw6pJdT1bbv3qa15l955h0O9aF/wAXSPzYMg/xNJqxheOUPeZlxvSRk3XTN1TZuFTXRyroletNHSaTzj5x28WZrtfhAgceu0v5gEEQIdnw/DzuiJvIUaHG3Hhzw5u3djjFk50VW/3rmn0IuDzJ5Q3Qhm/+WW6DM7g7V7d7kXc/iPbi/K5u/wCKfYkmt/UviHYq7pO9eXGv1MmunJN3L/BJ/wDcjYd5Y7L5Y8w4sroXDSay12RoP+0sbh1WBkrsLvWl3Mr/ANqOq9NqWPrmzqpUxfRon5Jmmp+StHIbr5S37Zw9+q0L8mnZEnVaU/mdPaPvudji/C3/AKRrFNyPQ7DxB0nqMU4MqWV/q1ezV5FOjf8ANbOaiJpJ2oYiJpIhiImkiGWNPq9RpXF+nz5MLjzseQHQ5BzY2uAqCklWXb4s6tzUKpd6+rkbQb38YW7ho9LrRCByFowaj1jNjHD2AJPlNB9M+Hrs8mTE+U3U+h/eSDT7Hrf/ADfV5dvynli1QD8MZDLcIAzLo0USYPN1TbfxsdOahdtOj9H3Ir6nZNfpxe3G3U4iIjLpXfFBHYbBDJCFIVU3F2Hqm0yu2pujJyq09fD1moPAkHgRwIPAgyI7Ek6K1UrgeRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDIbhNCyGLhNBDFwmghi4TQQxcJoIYuE0EMXCaCGLhNBDFwmghi4TQQxcJoIYuE0EMXCaCGLhNBDFwmghi4TQQxcJoIYuE0EMsYdZqNNd+X1OfT3Qu+DlyYrocrrHNjCKFWXb4c0fGoorjhck49J7m12q1ADdRq9RnaDENzZsuUAzAe5wBQjHtcGFzhx0UPupS+orXCaF0MXCaCGZNIjz7ERFScHVbT5e12vteW/ldOYH42cOBc08Y48XB75gmDTNJODv8ArG12k0p35eVP2vgvW+47LT4vLuykB4O5a1vNpDcjWP7Q5v8AIxAHsNzwsXJ5vLX1jqamn9ztn5pXl95+aEzbM33W6yDMbhpMPIY8EQ+HKDs3B3AcPdtFEg0Kulbbb+1WviZOdXDzLh6ZZ0216NuSBdxJMSTxJJ7YnmUOJvty6NFwOuw7K7UC3Dhc/wDWAg0Gr3AMB9ZUHnsvU6cLnJUl9fo4lPW+UXEOdnytxjj7uNpe89hBJg1p/eTtNnbeIUmlipbfN6L7/qOZ1GwbZpyT8H4zh97OTkj62QGKH91Sjt4urb3Ml7VtP8nT18fWa92AEtw4MXEmDMeJnOjWMHaiNunK0nky1aLi2/rbNzpPLUQMm4Pt4AjT4z704Zcg4D1N70ObuOtR7G0U/wAp/Yvv9BDuXmDZtixuw6c6drhEH3m48IeBD38hN+fIIchE9kQpLNn0jqXVa1kzXunyS47lwpXe45wz5punntuoJHxM2qHG3Gwfl9MOPAQcL3QPaWk1SD22w8K1YVMU43zftVfd6GvIcpqPNGvyxGL4Wmb2WMvfCrstzY+poSDv4uh7THrkurfe4XoUfWaXPrtTqY/H1ObLHsfkeWj1MjaPYFJ0sW1wYf4VFNPkSn08StcJoXQzwvaO2KEqlsxOSsFBlYdl8v8AVYsHmfR/EyMYM+LU4AcjrYvyYXHGxpMAX5HtDQO0mA4oeb8W4MmXoeSxNumqmrTknq/Ik5fLifoq5s1i6kj45axe2ai9E2s8+I2fj9CX9wsqHxGz6H6FF7JsqPPiN9Al7FjHxWpex8Oo1m85mf5PuvH/AOluu/8AZcqX+Q3um46v6x2/+fo/wkflTE7JneMeDG/NkPJmLG/I8+prASVN/kPvWRUYqb8tSpo5tpL0s6DSeVvMmtt+Ds+ra13EO1LG6NsJx1T8MR6ufYlxyNx13ou2n4m5xtrspd/+CmdNpPltvea12q1O36Np5tvzajM3+7ixjEf+sS44m48adMxysFGbI/IqV6W5/vTpdJ8sNtZA63ddXqDzI02HFpG+qOT82Yd0aKLmcTceON7V/quDHR/Obr+qw6XSeSPKulgRt41Dx9/V5s+aPrxueMB/dU3HF3Hifr2fT41lPKlUr1xd6zpNLotv0Qt0ej0mlA7NNp8WHsh/hsbxIS9HFz7neblzucmTI/5VTf1s2WHE/O4jGODRF7z7rGN7XPceDQApuRpZK6cSmvi+C7X5EfDd123SYt/3bUF7dTkfuGpe3ICHYmg5XEHGBFrqOMaQWR9S2G93GTpO3ww6KFhpTXbw7fu9MgZB28UFhkHtPapMXS0e3CaCGLhNBDFwmghnhscIOAIkREdxCBXJytGQfldJe3IMONmRpublxt+Fla4cQ5uTHa8EHtihd8fcWuh1VOhrVNyvQ5R1u2+aNborceoc7XYBAfxnuOoaJjUOufk/v3EzCiDz296FttzNeFLFl7l7L/tdEvNHkZs9RsXlTzax+XHibpdcQXPyaYM02ra4ge9mwgOw6gRhFxDpBwUcDSw9V6/4fqWOup5Nr2KqaqH/ADXxp8krm0z5nvfkDeNpL8uA49w0YJIz4o48rGwjHUYXxGL1hzmzIjBSmme26Z4t6dv4x5bsO5/Zeqf81rj5IT7jjsuj1eGPxNPmaBzdY5zf32gt6qT0dG52+T3K6W/Lr6HqVbhNC+GeXCaCGLhNBDLml3HVaIx02ofjEYlkbsbv2sbosPrhFDXz7PBuVGahN8+308TfM3rbteBj3fRsD+X5rA1wIkSG/wAZoFC4E9iiORyqum7zaO/p+R2/s1R/Y9S8pjn8vtzY/wAxtWqZqsR5Y3uaH/sjIIMLh2hwZBJJxdXqx1/B3+N48nNLT0cfOpOczY8mDIcWbG/FkbzY9pa6hgRxB7DyKk7OOujLRfiaqofanJFcJoZwxcJoIYuE0EMXCaCGLhNBDFwmghi4TQQxcJoIYuE0EMXCaCGLhNBDFwmghi4TQQxcJoIYuE0EMXCaCGLhNBDFwmghi4TQQxcJoIYuE0EMhuFVEFsMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQzY7ftus3PJ8PS4iWtI+Jmf7uHED2vfx40EXEcgkGnvN7t9jRfnq1fBLVvyL7XC7zucG27P5exDVa7I3PqYRY57Q4l44w0unifeBh7xiQeMWhIPLZd71HrGT4G1Tow9scv5VX2LjyZp9d5n1euJxYLtJpTwtYf4uRsD/NyAgwI+62AnFLWdHa9D2+1V+WMmfm+C8i+168oIdI8CHPp9KQy3cUtnZbbkaC1Q0eb3tDaZ9R2LWswlrrMeQiHDK25v7sQDGHbFRB4Xqu1qyp0zUl3OGd23f87W8BpbQBAWPEBIBuUQUQeVfScTq1dc+Vfcc/uvmnKA7+DgPPkXjs/bKmDr7DoVDa9qpej7jg3b9rNw1eLRaXb259RnfZjYzKWx5kucXMIYxjQS5x4ACKmNIPV09J2+029W5z5nRhoUttT9urb0S7XofQtFtmHb8cSA/VPaBly/aAMBdjxEhpGIGgLuZ7AIg8fud7k3dcKVgT0X2vv9S7Ob+M+evPmb8xn2jZsnwsWFz8Ws1rbS/NkAtyYNOTENwsMWudzeeUGiLsrT6T4W8KYvg09R6lTdkqSdFD4JdlVXNvilwS466L43nz5M2Qvy5MmV5HF+Rxe48+bnElS0fSMWKjHRbjSpp5JQiG4VUQWQxcKpAhi4VSBDMXZByEUglUPizC4KIM7WROyioWL7jNUMiOe0xBII4gjmCOII48ILBlixSofA22l8279oIflt31zGjljyZ3Z8I9WHOcmEdyxbOfn8P9K3f8fb4m+apVL9NMP1nS6T5rb/p4N1WPRa5o+07JhODKfU/TvZib+4VjecXceAuk5tcDy4quSquXoqTf98dNpPm/tz4DX7XrNOeALtLmxatsriMn5VwbTiRVY/E5nE3Hy83lMvaZ8da5VJ0P1XfZ5jqNH8wfKetgG7ri07zzZrGZdJbQ5czG4O55S84W58Idf22tWCqunnQ1X6k7vUdPg3HSatnxNJqMGpx8P4mnzY87OPL3sTnDjBR8Q4eXZ7jb1WbiiuivlUnS/Q0T/HHoEvKvhMwflxZGOY8Mex7XMex7Q5j2OBDmuaYhzXAwIPAhLjKnHXRUqqZVScprinzRhhOnwMGPT4sWFg5Mw4242D1NYAEuMsnxstV+Wqqqrm22/Syb449ApvK/hMoazfNq28f9u3DRaQ87dRqsGF5lax7w9xoAVHxDb2/S9/u/9Vw5ci/k01NelKDlNZ8zvKukiMeq1GueObdHpsh40yaj8tid6w4hTed7beCOvbjWvHRipfbXUvqpufpRy2s+cAMW7ftEBxty63U912nwtEPZkKKs723+Xb0e83Hmop/xqn/inMav5leZtXEM1mLRMd9zR6bEzuyZ/jZ2wo9ZXSdzb+CuibeLsdWWpdtdTfqptp9RzWp3rcNc67Wa/WaoxiPzGpy5YHstbke4NhDsWSZ2sPTdntVG2xY8a/k0pfUhj3DUshZqNQyHY3K8dLoLJMV7PDV71FD8y+42OLfNwZD/ALQ54/XZjfH1lzbuqsXrNPJ0vaVfqJPubX6DYY/MepbD4mLDkqLsbj7Q5zeimDTr6NgfuVVL0M2eHzLp38M2nzYzNhZkHX4Z6KYZpZOiZqf4ddLXfK+82eLd9vzfZ1LGmWWOIxlHIGtPsKmDRydP3mPjQ2u7X6i+HtcA5puB5EEEH1EGBSDVdNScPRntwqkEQxcKpAhi4VSBDJMWoyYMjcuF78WVhix7CWuaaEHt6pBhkxUZaHjyJVUPinwPp2weYG7m06bU2t1uNseAAZqGDm9reQePvN5do4RAwdMao8P1bpFWxq+Ngl7Zvz0vk+7k/M+/X775Zx5Gv1e2MsyAF+XSNEGZBzLtO0cGP/U5HsgeBLkzc6X1uuhrb71zRwVb4r+dzXfxXbK4fNs2n02aIzafG89pfjbcDy+19oFZwe0x5s2PXFW0u56GszbHoMkTjGXAf1H3NjVuS4w9RCQb2Pqm6o0rtqXevug1WbYNQ2Jw5ceUScDid7OL2nvCQzex9WxVaZaXS+7VfY/UanPo9Vp4/G0+VgHN1tzP32lzOqiDoYtxgzfw66W+Xb6HqVLhVINiGWdNrdRo8gyabK/E/ttPuuEnsMWvFCCkFObbYtxRZmpVVP04PivMdZpt62/dGN0u7YMbHngzKeGIuMIluSIfpnGA7YGfYotfYefzdM3exqefYVN09q7fRwqXmnu7SnuHlzLiBzaBztRi+18F0PjNEI+4RBuYeqDuwAqTY2fWaMjWPdJUV8/1fPy9a8hy5JaS1wc1wJBBECCOBBB4ghIO6tVKaaZ5cKpBMMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMhuompZaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLTpti2HJujvzGe7FoWOhcOD9Q4HizESODB950+A4xg1OJ1XqtGxXwcUVbprzU977+S870iez3PdtH5f0jMGnxY/i2w02lYYACPHLlI94MjzJ9559pDU83sthuer7h5c1T+HPtVP6l3+pLzJ/MdVr9TrtQ7UarI7Lkdw4n3Wt7GMaPdYwR5DxU6nt8G0w7XEsOBKmhevvb7We48kP7U1FdBt9PmhD6VGpzs2OTptFq7YfSmpxNzt7jsNDulgHGXaohnnd1sbmbv/ADw2Qu7Jpqcv+q1dMGk126F4PHr4Jr2nU2uwtZ13y+0+N+PcN2cA7J8X8hhJgSxrWY9RnI/bOTH+7UqNTz3i/NXTXh6fTpRb8R98t00+iKvSdF5n1+TQ7Hu2rwxGbDodS7E5vEsyHG5rMn/e3Ou9QTU4/RNpRuuqbfb5I+HVlpnvU6rz8D8g5MkSeHE1rE9iz1P0PRRBVL4k8Ov1JqXqnQ8uoo1JtF1E1FoL4CME1CplkV9FGpZaROyd3r+pYtvhJZTQVcmWH9vTkqqqmX0Y5Kb86qqqfM2KcRUfqYf2ql1vmbFOErO1XP6fQqt5HzLqcBXdrPSMP7VW8j5ly25GdZ6H+xY/FfMzW2GPcsuB4yYcmTFkb9nJiyOxvH7LmkOCj4tXMV7LHlpsyUqqh9jSa9Z0Wj+YPmjQwGHetW9o+5q3M1oIl/2tmVwHqIh2J8apdpxtx4R6FupeTbY0+dE0f4DR1Om+cm94226nRbbqiB9trdRp3kzdbmfjPsaE/EM4Wf5b9Lrc4Muaju9mpeb2U/S2Qaz5weYtQC3TY9v0A4wfiwPz5ePKLtTlyYjAfqBPxFRdtvl30fE5zvNlfJ1Klf3qT/vjk9Z508w7hEavedfkaYg48ed2nwmP4sOn+FiPcnxqn2nf23hro+z/ANX22JVc3Tc/7qqX6zS/nSSSTEmJJLokk8yefEp8V8zp/hklC4GQ1npGAU/FfMxe2JW6v0j+lZrI/MVvblhuq9I+hViyPmU1YC0zU+kVYq3zKasJbZnj/b9SuVT5mvViLjMtFam32mtVjLLcnZPl6QVibKKqCQPgYw9O5ZamNskt9PTuU6ldpLi1ObCY4cmTEf1HubH1whFTqV14MeVRkpVS71Jt8HmHWYoDKGaho53Cx/sewAd7Smpz8vSNtXrjbofpXof3m802/aPPBrydO89mWFhNMg90e2CanLzdK3OLWmK6e7j6Puk24yBwDmkOaREEEEEHkQRwIKanPdDTh6M9uompFpPptVk0mow6nEYZMORuRvHnaeLTNrhwI7QVGpVnwUbjDVhye5Uof07uKPuDMoyMZkaPde1r2+pwBHZIqIPl9VDoqdD4px6D5j5s0TdJuDc+JtuPWtdkLRwAzMIGaAk65rvW4qVJ7joG5q3G0eKtzXicf2r4favIjlrqKdTu2i6iai0XU9O5NRaUc+36LUROTTsDj9/H/DfGZLIXH1xTU2sW73OH3K3HJ6r1/YaTUbAeJ0uaPP3M3A+oZGNgT62hNTp4erLhnp89P3P7zR6jSarSn+Pgewcg/wC1jMoPbFsTKMU1Orh3GDP/AAqk3y7fRxNttO/5dCW4dRdm0nICMcmCuMnmybeUqwc/qHSce6Ty4Yp3Hqq8vf3+k6fX7Zo93wt1GBzG5nsDsWpZxbkHY3KAPeHZH7TfZBTHI4e03u46dkeHKm8aetL4rycvqfrOA1Wnz6PM7BqMZY9v7rmxID2Oh7zHQ4FNT1uDLi3ONZcTml+rufeVrqKNS60XUTUWi6iai0XUTUWi6iai0u6PSZNc448OTAMv3cWXJ8N+T/o4ttdCUY0U6mtuNxRtab8irePmlKXl1leiC9l2DdMTC/4DcgaIluLI174UZwc40ESmpq4+rbDJVbe03zTS9PZ5zSklpLXNIIJBB4EEcwQREEKNTpJJqU5R5dRNSbRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaLqJqLRdRNRaQ3FTKLYQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIQuKShCFxSUIRvNh2t266u19w0uCD9S8cIgk2YmnsdlIPqAJSUcvqu/p2G3mmPj1aUr635F9cH03Xa3BtOgfnLWtx4GNZhwsAaHP8As4sTABAAnuET2KJR4fa7bL1DdrEm3XU5beunFt/TV6Hx7VazPrdRl1OofflyuucewDk1rR2MY3gB2AKZR9GwbfFtsNODEoopX0b732le4pKLoRMzIZ+tTKKqqEXsWYjt8PoUSvMauTGmbbBqiIcUlGhlwJ9ht8Ovc2HvSUSuRzsm0pfYW/8AMnQ+0ekPBJRR+CpngU82vcY+8k9xsY9ol2H1D5Z7xjfptz2tzoZmZxr8bTCOTHlx4tPlI7YYnYWR/bCh8+w8N426dXTmwb5L926fhvuabqXpl+hn0DX4sev0up0efjh1Wny6fIBCPw8zHY3ERBAIDuFVEnkdpkr2uejc4v4mOtVLypyj8kb1tur2XcNTt2rEMmB5DH2kMz4XROLPj5xZlZxoeB4grOVyP0H0ze7fqezo3m31oqWq7aX20vvT9PFaNGmuKSjpQhcUlCELikoQjwklYuoJEZcePcob0M0iq95VbqL6aSjlefT+yiorqNrHSjW5cp48fT6lr1Vm7RQjX5Mx48Vr1Vm3RjRSfnPHj6foVLyG1TiRVdnM/YqnkL1iRAdQewrB5C1YURnUGfp3FYvIZrCjA6gjt9Oih5DJYUefmTP070+IT8Fch+ZM/TvT4g+CuR6NQZ+nVPimLwozGoM/p/QsviGLwolbqDP09qyWQweFE7NQY8/TuWayFVWJFtmcz9PQK2nIa9WJF7HmM1fRWateNGwxZCtims1K6EbPE88PTmtimrQ0q6UXGOPBXKo1aqSwHEnirJ0KmiQOKlNQYQj24qZQhC4pKEIXFJQhFvS7hq9IY4cpDe3G73sbvWw8B6xApKNfPtNvuFGWnXn2+k3zfMvui/Sm6HvW5QGxoCwkBJRyaui6+zk9nvX6Ta7LuGo3vdNLt2l0Tic2QfFyfGEMGnaQc+d38Ei3Hj4jiImAHEhJRodT2mLpmxybzPlUUrRR71X6tK17X6FL4I/RTfdaGt4NaA1oHIACAHsCiUfHX7TdT4s+SfMffm6PWbbosbG5suPBnz5QX2/DbnfjZiBg13vO/LuMOHCE0lH0HwZ0l7nb5tzW3TjddNK042pt/wCEvWcVpNXuuuwDPp9NpHsJc0g5y1zXNPFrgQIEiB9RCmVyPTbjb7Da5fhZq8iqifd0h9pI53mAfZ2/TuFM+Ph67szOaT3GFNPSHxzVr+1f3MgfqPMLRw23HwMD/idwZnSe4tpw9Hf9NV9X10kDtb5hEY7aOXNunzO7oZXAlJ7i1bbpD/pv76lfYV3blvzYXaHI2PK7RZxGEopJatl0qrhlT/t6Su/d93EbsVo4gh2mMJEG4HqkrkXU9O6d+rVL/nGnzZn5HlzsePE77wx4/hjsh7g90cJAJK5HSxY6aKYpbqp73PrN1sW8O0OYYMz/APsmZwBieGHIeAyCTTydTj2cSaOZ1Xp1O6xfFxr/AJRSv7pcvLy9Hadnue349y05xug3M0E4M0BFjpEwicbu0e3mplHm9ju69lmvp1xv3lzX3rsPmObHl0+XJhytLMmJxY9phwIke0HmDyIUSuR7fHXjzY1lxuaKlKIrikoshC4pKEIXFJQhC4pKEIB7gQQYEcQRwII5EFJRFqej4HV7V5ly4i3BuDnZcXAN1ELsuPs/iACOVtftetLkcHf9EoyTl2iVOT9nsfk5P1eQ6PW7bod1xjL7oe9oOPVYbSSIe7dD3craHjIhTKONtt7uthX8PW1PWl/TR/TU4PcNs1e3PhlbficYMzsEcbpA8IsfAcj7IqJR6rZ77b7yn924yLjS+K+9d/1GtuKSjehC4pKEIXFJQhC4pKEIXFJQhC4pKEIXFJQhC4pKEIXFJQhEMTPqmhZAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQetDnENaHOceQaCSfUBxTQhumlTVCR9K2LVbfte24seXK8ajLHPnazT6nK8PfC1jvhYnwOPHAQ7DFNDxXVMG7329qropXwafZpmqlKFxerXFy/JBpfMu45NzdpsOkxat2nxXZHl2DLjD8zvdaYOaD7jAYHh9opodPouzo2KrybirGs1UJRUnC4+t/Ucv+U1f+wzfuuTQ7n4jb/t0+kyGi1h/wMnt4dCYpp3Efidt+0jJuh1vZhf7XNHi4JK7jF7rbdtS9f3Fhmh1v+xd/wBZj7jF6nQqq3W1/aXof3Ftmj1w/wAL/wALi/8AKJoa9W52r/W9T+4uN0mtH3W/9az/AJyiUa1W42r7X6GTDR62H3RQv+iKaFf4jbd/oMDodYfvYh68h6QaUlGS3W3XZV6P0k+3f5ttWu0+4aPNhZn077m3PyFj2kFr8WRoaC7FkaS0jnA8IHimj8hVvPwG/wBrXtNzTU8Va5KVya14p6r7T9B7Nvmn3rSty43Nx6lrW/mdL8S5+B/aWkhrsmEn7LoCPbAxChWyfIupdLzdNzvHWm8Dfs1RpUvXD5qfStSh5l8s6HzNpBg1JOHU4onSa1jQ7LgcebXNJb8XA/7zCRHmCDxU6dxtdE63uuibj4uH2sFXv0PhV91S7HHlTWh+dd98tbv5ez/D12AnC4kYdZhufpc44wtyQFj4D7DgHCUOKnQ+x9K630/q+K/a1fvFxoelVPlXau9Su85+JmVGh19BEz6poIETPqsaoEELiePGahxBYis8mHM9qqqiC+mDX5Y8ePOtCqK4NvHBrMsZz7fateqEbuODXZY8eM+2a1qkjdogo5AePE96oqS4m1Q0U3A8efHvVTUGxS0QFruPPvWDRamiMtcO0qGkZpojLTM+KxjsM1Ujyx0z1UWom5Cx0z1S1C5GQaRPvUwYtozDXTPsiskkYtolDXV7+KygrbRYYHRjE956rOldpVU0W2AzMlbSjWqaNhiBmVsUJGrW0bHFGfWcFsUQaWSDaYo8OJ7PpWzREeY0ckF5hPDj2q5QatUFlpMefVW6QUtKCSJn1U0xBhAiZ9VOggRM+qaCBEz6poIETPqmgg2+z7Jue+6kabbsDspBb8XM6LdPp2kwvz5YEMFOLjDgCU0Of1Hqex6Vh+PvK1SuxcaqnypXb9S7Wj9FeV/K+j8taUsxkajXZgPzetc212SBiMWIEk4sDD2Ri48T2AND451zru461nurVm1p9yjsXe+dT59i0XbNvzB5h0Pl3Qu1WryB2V4c3SaUOhl1WZoiGNgHWMbEXPIg0GZALQ1+kdH3XWN0sG3UY1F9XZSub5vkuL8ktfmLc9y1W7a/U7hq3359VkL3QJtY2AbjxMBMRjxYwGtEgmh9w2OywdP2tGz26jFRTC7+bfe3LfezpvKT3FmuYSbWu07gP1njMHH2hgUqDieIKabsVX6zVS9ER9bOwiZ9VOh52BEz6poIETPqmggRM+qaCBEz6poINZuu3Y9y05YYNzsBdgynm18PsuI4/DfCB7+YUaG9sN5Xss1y1xP3lzXPyrs9HafMMjH4nvx5AWvxucx7Tza5pIcD6iFGh7iiqmulV0a0tSvIz6RsGsdq9ux3uLsmnJ07yTxIYAcZM/4bgI9pClQeM6ttlt95Vaoor9pefj65NR5p0Ytxa9gg6IwZ4doIJxPPqgWk1CODodC3OtW0q4RdT9q+30nFxM+qjQ9LAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQbfat41G25IRdl0zj/EwF3L9fET9h47ndvYRMo52/6di3tE6U51wq+x819XZyf0XHl02v0wewsz6fM2BDhEEdrHtPJzTzB4gqdDx1ePNtM1tU05qX9GmcZu+wP012p0V2TTj3n4Yl2TCO0t5uyYx+8BzjzUaHpendWpzRh3ULL2Psfl5P1P1HLRM+qjQ7sCJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQQREwhZDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDLWl0uTVPtZANH28h+y0fpcewIU589GCmave7FzOn02lw6VtuMC4j3shhe71nsFBwUanCzZ8ueqa+HYuxFmImEKYYiJhBDERMIIYiJhBDERMIIZ6HQ7eqaiJMxkE4eCkwdDJRkqPYU1MHQe/Fr4JDIsPb49vVRquwi2D0cVPlHAsafNqdLlbqNJmdgz44nHkY6BBhCB7HNPIgxBHNRBTlx4c9DxbilVYnxT+nHkzr/L/AMycGUM03mDF+Xy8G/5hp2F2B55R1GnbdkwuMOJZc0nsaFJ57q/gvLjbz9Iqvo/4OpxUv5tT0fkcPvbPpoG37rpCWO0m4aLO0tNpxanT5GwBLXAF+N0I8QeSHiG93sNxFSyYdzQ++mpfUz5tvnyv23Vl+baM527MYn8tkuzaNzj+ExObTxj2F7RyDQp1PadL8c73bpYuo0/Gxr9ZaVry9lXqfNnybd/J+/7MXu1OgyZdOyP/AGrSR1OntH33OxgvxN4f4jWFIPf9P8RdJ6lFODKqcr/Vr9mryQ9H/atnLxEwsWnB3YZG6EeY41WKUqDJSQPAmOPELBoupZSytBH1qmqlmzQ4KGTGDJUVUm3RWUcmJU1UM2aMhUfhVTxs2KcpWdg9PTgq3jZespCdP6vTosPhssWUwOn9Xf8AoUPGzJZjA6cU9PWo+E+Rksx5+Xp4KPhPkT8Yfl6eCfCfIfGMhp/V4KfhMh5jIaf0jFSsbMXmJBp/V4fUsljZg8pO3B6enBZrGyurKWWYfV6eCsWNlFWQuY8XqVtNBr11l7Gz04K6mlmrXUX8beXJbFNJqVsuMhPlw5qxKTWqkmbDnELNlbkziJhZpaGMMREwhEMREwghm32zYt33hwbt2hz6hpMDmDRj07Tx+3qcpZgaeB4F0eCQzn77qvT+nUzvMtND5can5KVNT9B9S2X5XYWFmbfdY3MRA/kdE5zMcedubVODcjhDmGNbA8nFIZ4XqfjnJUni6VjdP8utS/NTql5am++k+qabTbftelGHS49NotJgaXFrLMWJgA97JkcSAXECLnOMTzJSGeDzZt3v8/xM9VeXcVPtlt8kvsS05I+f+YfmVtugD9Ps1m56vi348SNBhM7xB2qIkwhh/F2JB63pHgre7trN1KcG3/Z/Xfm/V8+v8ntPiO47nrd21WTW7hqX6nUZOBc8gNY0EluPEwQZixtjwa0ABD6fs9jtun4FttpQqMK7F2vm3xbfN6lFDaPpWxaE6HRD4ohnzu+NlB5sBADMZq1vEyJKmDxXVd0t1uvY/hUKF3835/qSN1ETCk5kMREwghiImEEMREwghiImEEMREwghnBeaNM3FrMWpbADU4yH8uOXDa0n2sc3uUNHrehZnk29WGrjQ9PI/0pl7ykf4etERC/ARx7S3JHh6gERqeIF7eJ9sVfYbrfGtftWsDoGGNrxQsyMcD3hDm9LdVO/xtc49KaPl8RMKD3EMREwghiImEEMREwghiImEEMREwghiImEEM2+0bq/bc8SS7TZCBnxRjw4D4jBGAyNHeOEiBz+obCne4tNM1Puv7H3P1cT6Xjy48uNmXG9r8eRoexzTwc1wiCPYsjxVdFeOt0VpqtOGjkd82NsH63QtAgC7Pp2wAIHE5cTRyI7WjnzFYg9D0vqjlbbdPupqf1P7H6Ti4iYUHpIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIZDcKpqW2i4VTUWi4VTUWi4VTUWi4VTUWi4VTUWi4VTUWmTA7K9mPG1z35HNYxo5uc4gNA48ySkMxqaopddbSpSlvuOqxeVc5A+Nq8WM9ox435YU952KKmGcKvr2JP93jqflaX3nus2HR6DSZtTm1WfIcbfcaxuPGH5Xe6xvvfFMC4iNIpDI23Vtzu9xThx0UJN6zLhdvLs9ZyVwqo1PQWi4VTUWi4VTUWi4VTUWi4VTUWi4VTUWlnSYHarKMbYho45H9jW/pJ7AkMp3GWnBjvfHsXNnW4cePBjbjxtta3vJ7XOPaSsoZ57JXXlrddbmpktwqkGEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQZtf6ehUNNGLpJ2ceHFYw+JVUXMbAYcCkM1q6oLjMMewqYZrVZI7TRbltTsT3Z2MJxZHEmA+w8niDJpPLuU68zrbLfrJSsVT9tL0oqaLW7jtWX4+36vUaPJEXHC8hj4cQ3JjJOLK2jgQkMv3O12e/x/C3mOjJR3rVeR8V5U0d7t3zP1mG3HvGhZq2AAO1OkIwZ/2n4XE4Mrjx+ycYUQzym88D7bJNfTsrx1fs1+1T5E/eS8tx22h87eWtytbj3FmlzO/wAHXj8o8E8m/EyH8u9xPINe4xSGeY3Xhjreyl14Xkxr9bH7a8sL2l56UNy8t+Xd4By6nbdLldl978zgAwZnE8n/AJnSuxvyCUSQs0pWo2XWusdOfw8GbJSqf1avaS7rak0vMkzgtx+VuhyXO27ctTpjxIx6rGzVY49jQ/GdO9jRUPKx+G1wZ6zZ+Ot1RC3mGitc6W6X6Hcn6ji9d8uPMmnj8DHpde0RIOm1LWPgJs1Y0/vQ7AXUisKqKvOel2vjPouaPivJiq/lUtr00XeuDjtbse76KP5va9fpwDD4mTS5hiPqyhpxn2FVOirtPR7bqnTt1/q+fFW+SqU+iZ9RonsEj0/sKrdDOpTUV3YxI+ntVboZdTWQuxCR9OiweNlqyMhOAS/T4LH4bLFlZj+WJ+48x5cOfcsfhMn46XajB2lLebC2P4hCPqjBR8JmSzp8HJh+XEj3KPhMy+Kx+XFe5PhMfGY/LivcnwmPjM9/LiXRPhMfFZ6NOJKViZHxWZjAJHuip+EzF5SRuES9PasljZg8jJm4gIcCs1jZW8jJ24xIrNUMqqrZYY0SPpVWKllNVTLLQKwms1S+wpqJgRyEVYk0ipovabR6zWG3R6PVapwMLdNp8ud0ZQxNcYqUqmzVz7jb7ZXbjJjxr+VUqfraOo0fkXzPrIH/AC46Vh/xNZmxYIevEXu1H+gs7ajhbnxV0PbafG+JVyoTq9cW+s7DQfKtxg7c91a38WHQYS6Pq1Oosh/1RWVj5nnt348p1Wx27ffkcf3tM/4R3G2+SfLW2lrmbe3VZmwPxte7806I5H4T4aZrge1rAVNp5be+Jutb2aaszx432Y/Z9a9p+epmw1/mTYNnbZq9x0uA4xaNPjcMudobwDRptOMmVo4QHugI9OJqbTovVuou7b4clSf6z0p/uqoT9Mnz/dPmrgaHY9m29+V0CBqdeRjxgzbpsL3PyNqcjDRYt8j12w8BZaor6lmVK/Zx6v8AumoXmpflPmW7eZN43txO4a7NlxxBbpmEYtKwj7Nunx24yW/iILqrHU9v0/ovTumL/keKmmuPeetT/tnr5lC7jSXCqanTtMmB2RzWY2Pe9xg1jGlznGQAiSUhkVOmil1VtKldrO42bYhpyzV60XZxB2LBwc3Cex7yCQ7IOyHBtTymGeW6l1V5k9vttMT41dr7lyXrfk49XcKqdTg2i4VTUWi4VTUWi4VTUWi4VTUWi4VTUWi4VTUWnH+bcjfh6Jv3i/O4fshuIHhUkKHJ6Lw/RVflfZFP2nO6DeNVtoe3T/DLHuD3NyY7gSBDm1zHwhVRqdnd9Owb1qrLdclCaf6GjY6vzLl1ejzaXJpmNdma1vxWZHANAe1zv4bg4m4CH2uEU1NPb9Ex7fc056K26aXwa7uf6Dm7hVNTs2i4VTUWi4VTUWi4VTUWi4VTUWi4VTUWi4VTUWi4VTUWnX+Wd0teduyuNr7n6Yk/ZcIuyYhE8nD3hWM1Kk871vYzT+Mxr2lpV5Ox+bh6OR21wqp1PM2nBeYdrbpn/ndO2GDK7+Mxo4YcjuThDgMeQ9x9YUNM9X0ffPNT+GzP97StHzX3r1ryHL3CqjU7touFU1FouFU1FouFU1FouFU1FouFU1FpDfRNS20X0TUWi+iai0X0TUWi+iai0X0TUWi+iai06zyvoxky5NdkbFuEnFhj/tXNi9/L7jHQH7VFKk8/13cWULa0PWrWrydi87+o7m+inU8tacb5s1ZhpdKORu1DxHnD+Hj8XKG2ek6Bt1+8zvjpSvrf2HGX0UanpbRfRNRaL6JqLRfRNRaL6JqLRdRNSLTr9FgGmwNbaPiOg7KZuP3YyYOAWSk89usrz5XVPsLReT9Jcvop1Na0X0TUWi+iai0X0TUWi+iai0X0TUWi+iai0X0TUWi+iai0X0TUWkzDT+1QyupF7CIw4encsZZq5HBudPiu+71Q5ubJHabvBpYwg36vAlTD4s5mXPHaXToLmkOxhwIIIIBBB5ggjkp0NVbq2qU4ZzO4eXiA5+mHDn8JxhD9hx9fI96a9h3Nn1dOKc3Hn9/08xxmp0uRjzjOJ94MLLTdHlANhFRqekwZ6KqVXcreZQdtW45eOPQ6gjsc7G5jT6nPDWw9qSzap3+zo0ry0T5U/UpM9MN62t12n3Nu1kmJaN0ZiDv28WHI8P8AUQUlkZ30zfUxmwPP/wDVNx5HUlHmZ1u3+c/MOC1mbX6TdWjhBu16vUPtpl0mPRtJh2uJqpuq7Tz+88N9HyzVjw5MD/ztFK9Fbr9Cg63T+dnvtGbZdf8ArZcbtLjaajFqdTjyD1RKXc0eezeGKaZePc4vI7n66aWje4fMm2ZgL35MBP3c+MxFC7CcrB3qJ5HLydG32N+yqa1zpf3w/UeZsPl7conPh2nVl0f5+LS5cnERJ/isLwTDnwKQnxSGPJ1jZfwqtxjS/ZdSXqcFHJ5O8tZYuGz6NpPJ2LG0DmIwb72PslwWLpT5G3R4j61j0e4yNcm/t4+s1+TyJs5MWO1GHj9nGzRNb6jDRteYftLH4fI26PFXUUoqVFXldc/4ceogPkbTN44tdqGn9Z+fjw4XfD1ONp4mRgoeMt/2pzVe/iofmp+2lv1ld3kh3AN1QyAGI+Lm1nriYvyx49E+Gy6nxRT20NN8lR9yKuTyM95Byafbs5AIByE5YDhy+NpzCMOxYvG+0vo8UU0qKK81K7tPqqKzvI7xxG17caNZpQerGiCj4bLl4opejz5vTV97OJ1/y78yfms7tJtuLJgflc7EGazQ47Wv9623Jnx2hhMIUUPG+49NtPGPRfgUU7jNUsqphzRW9VpxVL48Sl/8PPNv/wBSB/8AL+2f/PafDq7vp5za/wBsPD//AKR/xeX/ACB/8PPNv/1IH/y/tn/z2nw33D/bDw//AOkf8Xl/yDNvy982EgHaWtBPFx1+3QFSG6snuCn4dRi/F/h+J/ENv/N5P8gnb8t/NDiAdHp2D8TtbpyB67Mj3cfUnw6imrxn0JKVkrb7qKvtSLeP5Y+Y3fa/y7HxhB+qeTDh738PT5OHVZfDqKK/HHRqeHxqvJSvtqRfxfKreTD42u2xgj/hu1eWAhwIu0uGJj2KfhvuNTJ496av4eLO33qhf41Rs8PynycDn3rGzlFuHQl8ecQHv1TIQnaYqbO80snj+j+i2zflrj1Kl/WbfT/KzaGQ/MbhuGYiEfhflsAJ4R+3h1BAJrGqlUHOzeO+oVfwcOGld91X1Ok3mn+XvlbBC/RZtURyOo1mo58OJbgfgYfURBWKk5mbxf13L7uWmhfyaKf8ZVM2jds8pbRxyaTY9EW8n6r8o3IIe9/N1JORvKPPsWUJcjQe+8QdQ0oybrKn2U3x6KdPUYajzv5V0TQw7pp32gBuPR48upEIcA06fE/E0ATICXIyw+F+vbl3fArU8XW1T/hNP1HOav5q7PiiNHoNfqnAwByfB0uJ1Q6/Pkh62BRednb+Auo1w9xlxY13TU/RFK/vjldb81N6zRbotHodE0xg5wyarM2UHvOPCfbjKi9ne23gPpuPXc5MuWruilehS/744/X+aN/3O4azdNXkY6N2JmT8vgMew4NOMWE8JtUOps9FtOhdJ2UPbYMaqXa1dV/dVS/WaO+ijU6tovomotMm3vcGMY57nGDWtBc4mQABJKamNVtKuqaVK7WdDofLmt1JDtQBpcXODoOzEUxgwZ/eINCp1OPuus7bCrcP7yv1ent83pO00O2aTb2wwYheRB2Z5uyuoXQ90GQgFOp5rdb7cbt/vavZ7EtEvN9r1NhxkO/6k1NTQxLiOYTUmEL6JqLRfRNRaL6JqLRfRNRaL6JqLRfRNRafNd/3AazXuGMxxadvwWEHg5wJOR44ci8wqAobZ7XpO0e32idemSt3P7F6NfOaS+ijU6lovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotM8Wd+HLjzY/dfie17DHk5pBHsiElmGTFTkoeOvWmpQ/OfXNPqW6nBhzsHu5sbMgEeVzQS01aeCmWfPs2F4ctWKrjTU16DLMzHnxZMOVgdjyscx7T2tcIGEiOw9hU6mOOqvFWslDiulyj5RrtO/RarNpniPw3e678eM8WP8A7zSPUVjqe+2uanc4Kc1Pate59q9JVvompsWi+iai0X0TUWi+iai0X0TUWkNxomhZaLjRNBaLjRNBaLjRNBaLjRNBaLjRNBaLjRNBafUtqx/ldv0uIAA/Cbkfzj8TL/EfHjxgXQ9izik8Jv6/j7zJk7LoXkWiNh8Q06/Spik1LEfPfM2Uu3KB+5p8TRz5Re/2cXLBxJ67omNU7KV21t/UvsOfuNFGh2LRcaJoLRcaJoLRcaJoLRcaJoLS7t7fi6vCCAQ0nIf7gLh/pAKVBrbx2bepri1HpOuuNFloeetFxomgtFxomgtFxomgtFxomgtFxomgtFxomgtFxomgtFxomgtFxomgtPQ4xHJNCGtCzjJMvTglUFFaNvp+MOSw0OfmOu27QarPA49O9wMIGwhv77oN6rJQee3m6wYvfrSfl19B2+g2U+7+Yz6bFyFl/wATIP7jI+KnQ8xu+pcfg0V1d8QvSzqMWy6MN4fH1LofZx424mu/euyQR2nCydS3M62UU97n9BR1e05Wx+DteDH+vqnOye0tc5pH7qNJcDa2/UKH/Ez1Vd1OnrX3nM6zatTkDm5tSzE3j7mkwjERx4wyCx4UO07e23+Chp46HU+dbn1ao4/V+V9G4l2TLqtWSY26zU5niMeH2HMEPWCsZp7T0e367uVpRTjxr+RSl9c+o1D9rwaQ/wAPQ4GQ++zCwkw5EvALucysla1J0Kd9l3Hv5a33Nv6uBUzZm4he9zGMhxc8hrQakkAKfZNjHjdfs0purkjU5t+23DEO1WJ5HZhD80aXYw5neU9jmb+PpO9y8MdSXfC+vU1ebzZpRH4WmzZTN9uIH2h2Qw9YUTSb+PoGd/xK6aV3S/u+s12TzXq3R+FptPjHZecmUj2h2IE+xY6dhuUdA26/iV1vyQvvKh8zbyD/AAtV8CP+xYxh/eIc4d6iWbC6J01+/jv/AJzbPWea/MjDFu9bh6jqHvaOEODX3Nh7FEkVdA6LUoe2w/3KXrRsMXn7zXi4DdPiCWXR6J8uN35cP7JwUyalfhPoGTX4EPurrXquj1Gwx/MvzIz7Q23NxH8zSPEYdn8LUYuBS9GnX4J6LV7vxqfJWvtpZcZ8096EPibftT+PGzHq8cWyF2qywNePqS9GvV4E6a/czbheV0P/ABUWmfNbWgm/Z9I4dlmpy4yDUnHkj0S+nvNerwFtn7u5yJ99Kf2onZ82MgjfsOJ0rNxcyE4x0OSPRTfT3ldXgCh+7u6l5cc/46M//iyf/wBX2/8A10/+5qi9GP8AsB/62/8AxX/nB/8AFj/9nx/9dP8A7nJeiP8AYD/1v/iv/OA/Njhw2BseyO5xEfV/lwil6J/2A57t/wDiv/OEB+a+pgbdl04dA2k6zI4B0OBLRgaSAeyI9aXrvLF4Bwz7W5rj+Yv8plZ3zU3cws27bWzu/NO7oZ2QS5F68B9O/WzZn/cr/FZWf80PMLvs6bacfH7un1RMOwG/WuHcAkl1PgbpFPvV7h/21P2UIoZPmL5qyfZ1mDDwA/h6LTHkYx/jY8vEjhJTJt0eDug0e9jrq8tdX2NGtzecvM+eN+86tsf9iWaftJ/9HZihzSe83cfhvoeL3dtjflmr/CbNVn3fdNTH8zuOu1Eefx9XqcseXP4mR0fsjuU6czfxdP2OD+DhxUfzaKV9SKFxoo0Nu0XGiaC0XGiaC0XGiaC0kx482Z1uHFkyu/DjY957mglToYV148anJUqV3tL6zb6fYdzzwLsTNO0/ezPgYfsMveD6wFMHOy9W2WLRVOur+SvtcI3um8s6dkHanM/OfwMHwsdQTFz3D1Fqm2k5ebrearTBSqVzer+xfWdLpNJptM2Gn0+LCOUWM990PxZCS93tJSKUcTcbjNmc5q6qn3vRebgbNjCewd3BNDRqqSLTcLocvFPZKXlUg4TLxTQLIis9hHYE0Lqakyq+5vEAV59/Pknsl9MPiRfENOv0qYpLLEPiGnX6UikWIfENOv0pFIsQ+IadfpSKRYjmd93z8ux+j0zgdQ8W5Xtj/AYRxAIP81w/dHHnBYu1Hb6V0v41S3OZfuVwX7T+76zg7jRY6Hq7RcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLT6N5d1Dn7XiaYH4WTLj4x5XnIO4PWataPG9YwqnfVP9pJ+qPsN58Q06/Spik5diOQ81YLmafWACLSdPkIHNrgX4yaNIcPasWqT0PQcsVV7Z8Grl9T+z0HGXGix0PS2i40TQWi40TQWi40TQWi40TQWkETMqSyEImZQQhEzKCEImZQQhEzKCEImZQQjJgue1pJg5zQYHjAkBCKtKW12I+vcuA4AcgrD54exMyghHCeaMbm6zBl425NOGg/rY3vu/wBF4WFSPU9CrT21WPtprnzNL7mczEzKg7cIRMyghCJmUEIRMyghCJmUEI2e0uhq+J543gevgfAKVEml1Bf8n/tkdREzKyOFCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIRk0mI4n0CENKC5gcA5pcC9oPFtxbHjyiOIR8DWypulqlw+Z1ej3H4ZY3SaPT4nnheWuz5Sey0vMRE9nFYJI4O42d8vcZK6qeWlK88Ha7fpd11lpz5n4mHsyOLI+rCyAB49oCyUI8zvM+w20rFSqqu5T639kn0zZNq0uIsORz8xEIXG1vHtDWmPeSsjxPU9/nyJ2JUr0+v9B9DwsxYmwYxrGwEA0ADoAsWn2Hj8lWStzU233ml3ZzSDx4w/t6IdPp6qk+cbnmx4Q5+XI3G33uLnW8aR5mKh8O89nscdeRqmilt9x883LfsGOLcDH5ncfeJ+Gzme0gvPcFEHr9l0nLXDytUr0v7vWcXrN51uUm3IMLSeWMQPb951zu6CyXA9Lt+m7XGtVc+/7uBzOqxs1RDtQPjO4++8uL+z78b+qlpHbwV1YFGF208lw9HA0mr0OhwtudlyYSfssDviF3qY73z64wWLSOpt91usrtVKqXPh6+HqNCTxMCYR4R4GHZERMCo0OquGvE8iZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCJWYs+T+XiyvjysY90f3QUgwqyYqPfqpXlaRaZtm5ZIW6PU8eRdjdjHZxjktEOKQUVb7ZUe9ko8zT+qS7j8vbq/niZiH/dMzPDG55Cm01q+r7CnhU6vIn9sF7H5W1J/m6vCz/o25Mvb+t8HsS01a+u4F/Dx1PywvvNji8saRvHLn1GUyaWY2mhFr3dQptRp5Oubir+HRRT6W/s+o2eHZ9tw/Z0mNxnluze2GUvA9gU2o0cnUd7l97I0u7T6oNi1rWANYAxo5NaA0D1AQCmEadTdTmrV95lEzKEQj0RJ5lIIcIv4MZMOff0oocGplrSN1ptMXQ59ihxwRzM2ZUm7xbe4jkT1UQczJu0me5dvIHIjv+tI5Cjdps02p0xbGMeqLU6OHMqjSZ2ERhGPr+tZaHTxVJmuMQeZ71MG6oZ5EzKEwjFzwxpe94YxoJc5zg1rQOZLiQAAhNNLqappU1PsRyG6eY4h2Db3Hta/VcR6xhB4/3j7JrFvkeh2PRtVl3a8lP+V93p5HIFziSSSSSSSSSSTxJJPMlYnokklCWh5EzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQj6D5aiNtiY8dRlI49kGDxCypWh5HrUPe+ShfadBEzKyOTCNTvjPibXqh2sazIDx4HHkY497QR7VDWhv9Lqs32N9jbXpTPmkTMrA9rCETMoIQiZlBCETMoIQiZlBCIYifVRqWwIifVNRAiJ9U1ECIn1TUQIifVNRAiJ9U1EHrXWua7h7pB5yMU1IdMprmj6817XNa5pBDgHAx5giIPcrdT546XS3S+KPYifVNSINB5i0v5jQ/FbxfpXfFqcRFuUD1CDjRqhzB1+j5/g7r4dXu5FHn7Pu858+iJ9VXqeugRE+qaiBET6pqIERPqmogRE+qaiCxpMwwanFkJgGug7j913uu7mlSmyncYnlw1ULi1p5eKOyuH4h3hZ6955uHyFw/EO8J7XeIfIXD8Q7wntd4h8hcPxDvCe13iHyFw/EO8J7XeIfIXD8Q7wntd4h8hcPxDvCe13iHyFw/EO8J7XeIfIXD8Q7wntd4h8hcPxDvCe13iHyPWuFwAIJJAAjzjw4J7XeQ0414HSaDaMuWD9Q4YWfg4HKRz4jljjXjRTD7TjbvqOPHNOJXVc+z9P01O627T6XShowsY13IvJjkd63njxkOFFg5TPLbzLnzt/Eba5dnoOt0mYAgx4GvaoUpnn9xibOq0etDIe915KxScHc7a6dDff503FjLn5WsY0RcS4AAV4iEU1OT/VtVdcU0t1NnE7x5qOS5mkI7Qcr+Jl7rDy9Z7kh+Y9P07oKoircehfa/u9J803LWuzOc/LlORxjFznRnwEgJDgobfYe12W2pxUqmimF5Dk9TkBJ4z7Vjqegw0NI0uoysYHPe9rGjiXOIAHtNVlqjpYcdVTVNKbqZzGs3gRLNLx7DlcP9Rh8T3LFt9h3Nt05xdn9C+1/caF+R2Rxe95e483OdEn2lRqdamhUK2lRSYxE+qjUmBET6pqIERPqmogRE+qaiD1oLnBrfec4hrQOJJJgAB2klTqQ4pUvRI+j7dtOm0ukZiz4cGbM4X5nZGMye+4CLAXNPuMHCXb2rNJnjd5v82fcOvFVVTjWihtac9O1/oLLts213PRaXlD3cTG/6oEChQt7vVwy5PS39ZGdn2s89Ji9he3/VeEgzXUd8v6Sr1fcRnY9pdz0rfZmzt/1coikGS6p1BcMj9FP3Hn+Q7R/6r/8ANGp/8skGX9a9Q/4T+9p/yR/kO0f+q/8AzRqf/LJA/rXqH/Cf3tP+SP8AIdo/9V/+aNT/AOWSB/WvUP8AhP72n/JM/wDJdq/9Ux/9Zl/8okGH9Z7/AP4R+hfcSDadsHEaPT+1t3QkhDB7/fP+krJW6DQM+zo9IIcI/AxR77YlIMHu93VxyZP7p/eTtxYGfYxYmQhC1jG8uXIDkp1KqsmWr3qqn5WyWIn1TUrgRE+qaiBET6pqIERPqmogRE+qaiBET6pqIERPqmogRE+qaiCRkI8xzTUxqNzpWg28R396jWTmZ29Tr9uwNcW8uKjU89vMrpTPom27Q3M0GAPL6oc1M28zx+96i8dRJuGzDEwkN7OcOCTcjDadSddUNnz7cNIRdBjjChPsjBYuT12z3CcS0cdrMRbG4Fo48wR7ePaFlL4o9Ht61VwcmhylrYkuAA4kkgACETE8oKdTrUJvRLU53W+YtFpotwuGqyiIhjcPhA/rZeIP92KxdR2Nt0fdZ/ayL4ePv4+j74ON1266vXuPxssMcYtwsNuJsvdjF5E3RKxbqZ6Pa7Db7Rfuqfb/AGnx/R5Ea+In1Uam5AiJ9U1ECIn1TUQIifVNRAiJ9U1ECIn1TUQIifVNRAiJ9U1ECIn1TUQIifVNRAiJ9U1ECIn1TUQIifVNRAiJ9U1EH1DasH5bb9LiMA74Ye8doflJyuBq0vh7FYpg8Nv8vx95kyL3boXkWn2GwiJ9VOppwa7dnhu260k/4D28xzd7o6lQ5g3On0t73El+2vUfMIifVV6nuYERPqmogRE+qaiBET6pqIERPqmoghuHpFJZZDFw9IpLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQxcPSKSxDPpey6pup23TujF2JvwH0diAaI1djtPtV1MtHiep4Hg3ta/Vqdy8/6ZRtrhNTDNCGeG1wLXQIIIIIiCDwII7QQkMlXJyuKPmW7aE7fqnYxH4OSL8DjExZH7BP4sZMD7D2qqqU+49v0/dLeYFX/SrSpd/PyM1lw9IrGWbsMXD0iksQxcPSKSxDFw9IpLEMXD0iksQzpNt1YzYxhcf4uIQ4/exjgDUt5FWU1ODjb3bvFX8Sn3Kn6GbNTczRCXMBLmAlzAS5gJcwEuYCXMBLmDaaLW6XRgO/LOy5u3I57fdj2Y22m3h28z0S5mjudtn3Hs3qnFyj69dTbs8xNaRDTHjwMc0PbwxEKbm+w51XRqmvf9X6TYYfMoEP+yw/7+f/ACKxbZqZOiv/AIT+9/8ApG1weaXN/wDR2f8AWu/5gWLk0MvQqX+u/R+k3OHza8AQwM9uRx8GhSmzm5PD9LetT9C+8j1fmDLrIXuDWN4txNJtj2uMeLnetZJszwdIo2/uqan2s1GbcQQYHx7u5LqjoY9nDNLqNWHR4+PpyWOp08W3aOW3DeMGC5rD8bLxEG8GtP6zoHkewcfUolrhxO7tOnZcsVVezR635DjdXrcupcTleSAYhgiGNkA39PNJZ6Tb7XHgpjGtefazXlwJ/tUSzbtYuHpFRLEMXD0iksQxcPSKSxDFw9IpLEMXD0iksQzqvLegGXIdflH8PES3ACD72XtycRxGMGA/W9SsoTerOD1rduij8Jjft1a1eTl5/q8p29wms4Z5iGLhNIYhi4TSGIYBB9CggkDQfQ/2qJZg2Zhgp3fSkvuMbjwsHoCPqSWSqiMiCIyTkxiFMMyhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIZJjcI8+2qhyjCulm70b2+7x7ax4xWMuTmbml6n0zy9uTQ7HhzOBHAY3mMQexrpx7DPnSNTxPV9k2nlxrXtX3H2fatbhGMAkDlPnLvUtNqD5tv9tkdcpEu5a3CcZAIJUJNIr2W2yKuWj5Xu+u02Mu+JlY0iHuxi7h+qIuRye86dtc1aVlLa+nafNtz3bC8ZGMxDI1xIjlHunjEe4OJ7xBTrwPabHp+SlqqqqGuXH0nyDzFoddnuz4NRlzYQYu0Y4WAcY42sAGUN/Wi8TPYqufA+h9H3W1xRiy0U05eyvn5Z4ebTuRwdw9IquWerhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhi4ekUliGLh6RSWIZtdn0f57W42ERw4iM2ckGFjSIM9eR3D1RPYsqZbNDqO4/C7Z1L+JVpT5X2+bj6D6ZcJq2GeJhi4TSGIZz/mTUtxbccd0HajLjxgcY2tPxXH1e4AfWsa5SOv0XC8m8vjSilv06L6z59cPSKqlnroYuHpFJYhi4ekUliGLh6RSWIYuHpFJYhkNwqpLbWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWdF5c3Fum1R02QwxaqAaTybmbGw0+IDb64LOhw4ON1nZvNg+NQv3mP109vo4+k7+4VVp5K1i4VQWso7ho8O4ad2DJwd9rFkABOPIBwdVp5Edo71DSag2tnucmzzLLRqu1c19OB801WDLpMz8Gdpa9h/uub917DwuY4ciqWocHtsGWjcYllxOaX6u595XuFVBdaxcKoLWLhVBaxcKoLWZ48zsT25MZLXtMQR4GYI5oYV41kpdFetLOr0mvxapn4crR7+Phw/WbxiWnos1DODuNpXgq50Pg/p2lv4ja9PpUwa9jHxG16fSkCxj4ja9PpSBYx8Rten0pAsY+I2vT6UgWMfEbXp9KQLGPiNr0+lIFjHxG16fSkCxj4ja9PpSBYx8Rten0qVoLGWceUADtHZCX0hRoUV45Zdx6kV9SM1q8LLjNUB2n08VEGtVgJvzZh9o+ntQr/DrkU9VumDTtJyvg4iIY3i93qbHqYBH3mzg2OXM4xrTn2HJ67esuouYwnFiPC1p95w4/beIGBHYIBYyeg2vTceGKqvar9XmX2mhfmBmh1acbRWdkB4cfpUaFyoaMbhVDK1i4VQWsXCqC1i4VQWsXCqC1lrRad+t1OLTY4xe73nQiGMHF7zRre88FKUuDX3OanbYas1fBL0vsR9SwY8Wnw48GJtuPE0MaKDtJ7XOPEntKvUJQeFy15M2R5cjmupyyW4VQrtYuFUFrPQ4GaBqCxjaD2FYvvKa20bLDpw4AwPd9clBpZMsF9ujj9wn2RTzmpVuO8jyaSA+yeHHgJxQzo3EviazNiDY8D3fWhvY8lxRfAdhWSNqnUiuFVJnaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWZNeAe1Q9SHS4LjNdp9NA5s2PEOYOR7GdXOEli+81qtrmzaYqaqn3Jv6i/i837VpuWd+dw+7gxl3+m/4eM96jSdDVyeHt/n40qlfyn9il+o+nbX5zOp0Onz4sZZ8RkT8V0XEtJYSQyABJbPtTgeH33hpYd1XiyOYfZ369p7rPMeoztIdncAR9lnuD1cIGHehG26NhxOaaVPfqcfrdcH3GJ7a1nGKdp6PbbV0wjmNTnDiYRgpXrO3hxNGtc8E9qySg3aaXBxfmDamNa7X6ZkOMdTjaOHH/GaBy4/a75rCulcUel6Rv6m1tM7n9l/4v3ejkcfcKqs9HaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBaxcKoLWLhVBazJgdle3Hja573uDWNaIlznGAAqShjU1RS662lSlLZ9L2nQs27SjGYHPkg/O8dr+xgP4cYMBWJ7VdSkl3nieobqreZ71/CWlK7uflf6Ow2lwqsjRtYuFUFrPn3mLXt1Ot+Cwxx6QHH2QOVxBykeqAb62lVVuXB6/o20eHbfFq9/Jr5uz7X5zn7hVYHXtYuFUFrFwqgtYuFUFrFwqgtZBcaJBZCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCPbiOI4EcjxSBaj6Hsu7/nsAx5CPzWFoGSPPIwcBlHHjHk6vrCvoipa8Tx/Uun/hct9E/Aqenc+X3d3kN38R0h1+lZ2o5liHxHSHX6UtQsRrdx0GHccVmQBmVgPwszR7zCew8feYTzCirGqvKbmz3WTZ5LqNaHxXY/ufefPNXpdRospw52Wnm1wiWZG/iY7hEdR2rXdFrhnsNvnw7rH8TE5Xau1dzKtxoogvhC40SBCFxokCELjRIEIzZlyY3B7HWuaYgj04gqYMasdNdNtSmlnQ6Tc2ZoY8tuPLyB5MeaEn3XGXcs00+PE5G42NWP28cvH60bO40WUGlCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIybkc2UJJCMXQmSjMaeB8SkcjB40SHVtxtLsjwxoAiXcB3jmodJWtu66raFL7jT6rfnGLNMABy+K4cfWxp5es9ywfdJ0cHSqV7Wf0fe/uNG/UveS57i5zjElxJJ9ZJUQdWnDTSlTSoSIXZTQeKQWLGiE5CfTj4pBYqEjG40UQTCFxokCELjRIEIXGiQIQuNEgQhcaJAhHf7BoTo9P8fI0DUakAmIMceLmxnPgXfaPsHYr6MaSl8TyXVt0txm+FQ/3NHrfa/sX6ToPiOkOv0rO1HJsQ+I6Q6/SlqFiHxHSHX6UtQsRNiJPEgcfDvmoaSKq0kbbTMLnDgKx/tWEGhnqSR1mg0ZyEe72jsUQef3e5s7TrtPs7ntBDBD9n1clEQefy9RVL4lbWbQ5jTFnT60jtLtt1FVPRnFbhpTjLuA7iskuZ6baZ1XGpzGYEE8ApShncxtNFB7yHQgIcx6Rms7UbVNKaMfiOkOv0pajKxD4jpDr9KWoWIfEdIdfpS1CxD4jpDr9KWoWIgfrcGP+Zn0+P8Abysb/rPCiKeZbTtstfuUVvyJv7Co/e9ux/a1eAw/Bdl/8UHxUTRzNinpm8r4Y6vPC+uClk8z7ez7Pxsv7GKA/wDCvxrG6jvNmjoe7q962nyv7kyjk82jj8LRkyOTLb6ota13ioda7EbVHh9/0mT0L7W/sNfl80bi+Pw26fCOy3GXu9pyOc09yxuZt4+hbOn33XU+9x9SX1mty7vuWb+ZrM0DzDHHE0+tuKwQUS32m7j6fssXuY6fOp+uSszM4mJMT2kxJJnGPFRBdVjUQuBstNly5cmPFibdkyODGNHMl3AdvBSkaefHRRQ8lbihKWfZNBnOj0mDTAg/BxtaSIwc7m8w/WeSVYkj5vusS3O4rzPS6qfN2eosu3B5Hp9UEheYpp2lKZRzatzo8fGHikcjax7dUmuyZjz4U58fqCzVKNyjGiv8R1Ov0qbUXWIxc69rmOa1zXtLXNIMC1wgQePIgpaiaVa1VS2qk5PlWqxnT6nPg7MWXIwE8y1riGn2tgVrOmHB73BWs2CjL+1Sn95XuNFEFsIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCMm3PcGtaXOcQ1rWgkuJMAABxJJSCHbSnVU4pR3mzbT+RA1GcNdqnN4Dm3A082jjA5COZ7OQ7Sb6MaWr4nlOpb/8U/g4m1gT/uv0cl533dD8R0h1+lZ2o5FiHxHSHX6UtQsRqd33T8hpjaW/mMoLMDe0Hk7KePLGD7TBY1xSu83+nbD8XnUz8GnWr7vP9R83L3EkkxJJJJiSSeJJJPEla8HtFSkoXA8uNEgQhcaJAhC40SBCFxokCELjRIEIhuM1EIthC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIRNg1GbTZWZsLyzJjMWkQ9oI5FrhwI7QpWjlFeXDjzY3iyKaGfRNs3THuOKIIZnYB8bDLsvZHi7G493I12KWql3njt9sK9nkh64nwf2PvNncZrKEaUIXGaQhCK2q02HWYjh1DA9p4g8A5juxzHQi1wUOlNQy7BnybbJ8TE4q9T7mcLuWz6nQl2Rkc+m5/EaPexiWVo5Q/EPd9XJUVY7fIep2XUcO6Soq9nPy7H5Pu4+U0txmsIR04QuM0hCELjNIQhC4zSEIQuM0hCEbHTbnnwQa8/FxyP2mj9V0qFZJx5DTz7LFl9qn2a/Ub3Bq8WoEcb+I5scIPHrHb6xELNQzlZdvkwv21pz7CxcZqYRTCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQjXanc8eGLcZGXJy4Qsaf1nDmRIdFi2l5TdwbGvJ7Vfs0es0WbV6jO67LkLpN4Wt/ZbyHisHqdTHt8WJRQo+sh+I6fQIWWUnl7p9B9CE20nlxmohEwhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIvt3Xcm8tbqT+1lc/8A1y5ZS+bNR7DZVccVHoj6iZu+7s3lq3f3sWB3+tiKm6rmVPpWwfHGvTUvtJh5i3Qc8uN3rw4+H7oCX1Fb6NsX+q152SjzNuQhEaZ0J4ncfXbkHRTezB9E2T/bXnX3F3D5p3AERxaQiHL4eUV/2xU3vkjWydC2j4VZJ8q/yTf6LzVrrh/A0nZzblnD/aotTk7noO1h+3k9K+4+k7H5m1T3Mjp9LDh2ZPV+NZqlHiuqdEwUpxXXPm+4+u7dvWY4mx0+mJIHY+Hby99YZNOB893nTcarcV1+r7inve852YS5mDTRhH3hkMPYMgWNHtcTZ6Z03FVkiqqv1fcfE978z69jnQw6PhH/AA83j8eishH03pfQ9rUlNWT0r/JOA1XmncYn+FoxzHDFl4Q/7/BY3anrMHQtnC9rJ6V/kmmy+ZdzJHHA2oxdg/acR2qL2dKjouyX7b8/6Cu7zDup5ahrf2cGHh+8xyi+ouXR9guNDf8AbP7GQu3vdHc9ZkHGPutxM/1GN4KLquZaumbCnhjXpb+tld25bg/7Wt1Rp8bIB3BwCiXzZbTstpTwxUf3KKz82V/28j3/ALbi7xJQupx46fdpS8iMLjNRCM4QuM0hCELjNIQhC4zSEIQuM0hCELjNIQhE2DDqNTkGLAx2TIexo5Dlc48mtEeJMApVMuEVZcmLDQ68rSo7/pqd/tG2N24fGyOGTVubAuAFmIEcW4wRxJ7XHn2Q4xvpxpavieS6jvnvH8OhRt0+Ha+9/cdCNQ6Y8PGKztRyHhQOodMePhBLUFhREczz29B4QSEZrHSiMucTEnikIztSFxmkImELjNIQhHy/cc3xdfq8jTFrs+S0iECGuLQfaBFa1UOpnuNnj+HtcdD4qhFK4zWMI2oQuM0hCELjNIQhHTbVsDd10f5hmtOHI3I/E/GcAyNDmgObBwysMHNcOxZ00KpScPf9Wq2G4+DViuodKad0fY+1Mqbtsuo2kYnvysz4srnMGRjS217RENe0xALm8RAnkVFVFps9P6lh37qpppdOSlTDcyu7ydvlRpLjNYwjpwhcZpCEIXGaQhCFxmkIQhcZpCEImwYc+pyNw4GOyZHcmtA4DtLjya0dpPAKVTLhFeXJiw0PJlaVCO82rZ8egAy5S3LqiOL4e5ijzbiBEYzdzNFfTjVOr4nlN/1Gvdv4dE04OXa/L9xu7jNZwjmQhcZpCEIqazXYtDhdmzOgBwYwQvyP7GMHaT3AKG1SpZfttrk3WVYsS17X2Jc2fN9Zrc2tzvz5jxdwa0fZxsH2WNoOp4rWftOWe0222xbXEsWNaLt5vmyrcZqIRfCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIhiZlJLIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiES4dRm0+VubDkdjyMMWuae8Eci09oPAqVU05RXlxY81Dx5EnQzvdr3vFrg3FlIxaoDiyMGZYc3Yie39XmKq+nJdo+J5TfdMr2reSj2sHPtXl+/wCo3cTMrOTmQhEzKSIR5ElJEHO7hsGHUXZdKRpsx4ln+A8/sgRxmo4U7VXVROq0Z2Np1bJhijOr8fP9Zff5/ScdqdJqtG+zUY34zxtJ4sfDtY8Ra4eo8FS1UuJ6PBuMG5puw1Jr1ryriitEzKiS+EImZSRCETMpIhCJmUkQj0Oc0gtc4EcQQSCDQjiElkOmlqGk0bLBuufHAZf4zZkweP73I+0e1ZKtmll2GKvXH7NXqNxh1+nzwDclrj9zJ7rvUIm1x9RKzVUnOy7XLi1qpmnmtS3EzKmTXhCJmUkQhEzKSIQiZlJEIr6jV4tMI5H+9CIY3i93s7BUwCh1QXYtvkzP2Fpz7DQancc+oi0E48X4GkxcP13cz6uAWDrbOtg2eLDq/ar5/cUImZWMm3CETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIRPjceHE+n1KZZVWkbrSZSCOPas02c3cUJo7vZ9d8JzTdLt+vsVqZ5TqO1vT0PqO37+1mNovhATj2VSpSeG3fSXVW3BS3bfhlY4B/Ye1QlHA2en9KdFSbR8m3fWfFc6DuBj1WLZ9A6ftrEtDjNQ+JPE96rbZ6TDTCNa5xjzKiTcpSgxiZlRJlCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhFjBptTqnW6fFlynkbGktb+077LR6yFKl8CrLmwYFdmqppXf8AYuLOj0flrIYP1uawc/g4Tc/1OyEWt9gd61Ysb7Ti7jrVCmnbUy+b4eZcfTHkOq0+mwaRnw9Pjbib2wiXOM3uJLnH1kq1aaI4ObPl3FV+ap1VfTguCLETMqZKoQiZlJEIRMykiEImZSRCETMpIhCJmUkQjTbzuQ0Omc1j/wDtOZpbiAPFgPB2YyDeybvasK67V3nR6bsnusyqqX7mly+/u8/b3eY+dxMyteT2MIRMykiEImZSRCETMpIhHe+T3P8Ay+tETZ8bFDiftWOu7ZALYw6pyeT8RKn42L9q1/Xp9ptvMWP420aqJ44vh5mE8YFmRsSKnGSPassiVjNDo9fw+oY44VSn5198HyyJmVqye7hCJmUkQhEzKSIQiZlJEI3O37Nq9dB7o4NOePxXgxeP+5M4F3r4Cqzppqq8hzd51Lb7WaV7ebkuzyvs8nE7jR6LT6HH8PTstjC95McmQjte7t9QgB2BXpKngeX3O5y7qu/K55LsXkX0ZciZlTJrwhEzKSIRQ1+44NvxX5nEvP8ALwtPv5DQdjR2k8B6+CxqrtWptbTZ5d3XbjXsri+xfp7j57rdfqNfmObM7lwZjbGzG2TQSefaeZVFVTqcs9ftdph2mP4eJeV9rfeU4mZWMmzCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCIYiamSyGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGA6BBBgQYggwII5EHsISQ1Kh8Dqdt8xOx24dcTkZybqBxyNH/AHQD+YBMe961bTl7Kjhb3oyrnJtdKv2ex+Tl5OHkOwxZsWZjcmLIzJjcItexwcD7QeY6K65Pgedrx5MdToyJqtdjM4iaSYQxETSRDMMuPFmYceVjMjHc2PAc01gY8QjafFGdFeTHVfjbpqXajmNb5bxuufosoxnn8DKSWepmTi5olEO9aqqoX6p3Nt1qumKd1TK/aXHzrh6I8hyup0uo0jrNRidiPYTAsdD8LwSx3sKqcrimd3Dnw7im7DUql6/OuKK8RNRJdDERNJEMRE0kQxETSRDERNJEMtYddqMEAzKS0fcf7zYSAPFo9UFKraKMm1xZdaqdea0Zs8W8YzAZsZafxYyHN9dpIIHtKyWRdqZo5OnVrXE5XJ/T7jYN1ukc0vGfHACJi4Nd+46DuiyuRqPa7hVWuiqfp28DV6ndi6LNN7o5fFdC4/stPBvt4+pYuvkb+Dp8e1m1fL7zTueXEuc4ucTEkmJJqSsJOiqbVCUI8iJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGZNcAefVJIqpbRfw5gIcevRZKo1MmOTdabW2QN3VZqqDmZ9td2G7xbwWj7fUfSFldJzK+nKp8CHUbs54Pvx9v9qXFuHp6p7Dn9TqryYu6rC462HBauBqcuQEnisJOhRQ0Vbge1RJfAiJpIhiImkiGIiaSIYiJpIhmbGPyG3Gx2QyY0uPc0EpM8EzGqqmhTW0l36Gxw7PuOaENM9gPbmLcUPW15D+iyVNT7GaeTqOzx8a033a/VobbB5YyGB1GqxsHa3C05D6rn/DAPsKzWPmc/L1yhaYcbfl09Sn7Dc6fYttwQJxHO8fezuvH/Vi3GR6wVmqaV2HNzdU3uXRVWU/ydPXx9ZuGhjGhrA1rRwDWgNaBQCACzk57dVTuqls9iJpJjDERNJEMRE0kQxETSRDERNJEMRE0kQxETSRDNRuW86fb2lgIy6kj3cIPBseTspH2W05nqsKsip8p0dl03Nu3c5pwdr5+Tn9S9RwGo1OTVZX58778jzEkwgByDWgcA0DkFQ6pcs9biw0YMaxYlFCIYiaiSyGIiaSIYiJpIhiImkiGfUfLuk/KbZivFuTUOOpeDzF4aMYMeI/hNBh2ElbeL2aO9nhusbj8RvardaKFavNx9bZn5gzMxbRqy4iL2sxNEebsmRg4eoRPqCZaooZh0jHVX1DHHY235kz5XETWpJ7yGIiaSIZe0e36rXH+BjJZGDsr/dxNnF5+0RIRNFkk6uCZq7jeYNqv3tXtclq/R9+h2Gg2HSaWGTORqsw4++AMTD+rjJNxB7XR9QVtNKXHVnnd11XcZ/Yxexj7uL8r+70s30RMKyTkwxETSRDERNJEM57cvMGDTXYtKW58/EF0Y4cR5cSD/EcJDhM9irqypaLidjZdIy54yZ5oxcu1/cvL6Dic2oyajI7LnyHJkdzc49wA5NaOwDgFS6p1cnp8WGjDQseJRQuwiiJqJM4YiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhkFwqpgthi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQy5pNw1Ohffp8jmg/axn3sb/22RgTXgRNSnVTwNfcbPDuqbcyT5PtXkf0R2Oh8xaTU249R/2bMYD3jHC8/q5Puep0PWVdTUnx0Z5vddH3GCa8Pt4/WvN2+b0G/uB4jiDyKsg5NrPbhVIEMXCqQIZg9uPI0syMbkY7mx7WuafW10QVFsmVLroquobVS7VoaDV+XtHmi7TudpXnjaPfwk/sEhzYmRgJLB4k+Gh1tv1jcY/ZzJV0+h+nt8685zWq2fX6WJOE5sY/xMEcghMtAGRsKiCqeOpHbwdR2mfRVW18qtPXw9ZqbhVYwb8C4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDJG5YTSDCqiSyzUQ7SFOpTViknGq4KdSp4DF2qqfYhNOAs4Nv1usxDNgxtdjJc0OOXE0xaYEWl4cIGYUqiqpSU5d3tttk+Flqarjk/uJP8g3JxEW4mj9bKDD12h3FT8KruMP622VPB1PzfeSt8ta0/ay6ZvDsdlcY1/hAdU+DV3GD61tlwprfmX3k7fLGQ/b1jG/s4S/h7cjO1T8F8ymrrlH6uNvyuPsZaZ5Z0w/manO79huNn+t8RT8Fcyirred+5RSvK2/uLePy/tjPtMzZf8ApMrh/wCK+GsvhUmvX1ffVcHTT5F98l7Htu3YvsaPB63425D35LipsS7Ea1e93lfvZKvM4+qC62xgg1oaJNAA7hALKDVd1TmpyzK4VSCIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhlXU67S6Nt2ozNx8IhpMXu/YYIvdxkFDhcS/Dtc+4qtw0ur6l5XwRyWv8AMuXNdj0TXYMZ4HK6HxnD9WBLcQPtNQqqq29KT0G06LjxxXuWq6+XZ+n1LynNF9xLnFznEkkkxJJ5kkmJJVUM7SphQoSPLhVIJhi4VSBDFwqkCGLhVIEM6LYNq/PZxqM7T+TwuBII/n5BxGIR4FgPFxlw7eFuLE63L91HH6tv/wALi+Dif/KKl/crn5eXp7NfpXxGyPT6Vt2s8VYzg/NW5ty5MegxGLcB+LnI5fFLYMZwPPGxxjV1FrZnrauw9X0HZVY6Kt3Xxq0p8na/O/qNHpNp12sgWYTjxH/Fze4yE2g++/2AhVLHU/IdTcdQ2u30qqur5LV/cvOdTo9g0eng/UR1WQQMHi3CDTGCbv7xIMlasSXHU4W56tucvs4v3dHdx9PZ5vSb9trQGtaGtAgGtAAAHIADgAFZByXc3LctntwqkEQxcKpAhlHWbno9C2OfJ75EW4mQdld6mxEBUkBYtqnibW22O43TjEvZ5vRLz/ccXuG/anW3Y2R0+nPD4bD77x/3TJwJBkID1qmqqp8NEel2nSsG2iur28vN8F5F9vE0lwqsIOnDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIZDdRRBbaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtNlot31uhgMWS7EP8AByxfj/ujg5n90hZU1VU+Q0tz07bbrXIor5rR/p851ej8yaPPBuoB0uQ8IuN2EmmQCLf7wAE1aq6Xx0ZwNz0bcYpqxfvKO7j6Pu9Bvm5GvaHNIc1wiHNcC0iYIiCFZByXQ6XbVKaMrqdUgi0XU6pAtF1OqQLSjqdBotXH4+nY5x/xG+5l/wCsZBx9sQsXRS+JtYN3udv/AAq2qeXFeh6HP6ny0OLtJnI5wx5xEer4jBED+6Vg8PJnXw9bfDcUeen7n95odRte4aaJyaZ7mD/ExfxWQmSyJaPWAq3jqR1cO+2mfSitKrk9H6/sNddRYwbkC6iQTaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtF1EgWi6iQLRdRIFp6HkcvTokEWpnvxDIJBFiHxDJIFiOs8savjqNI7thnxgmUMeTparcXajgdc2+lG4X81/WvtOvup1V0HnbRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLTF+VmNpc9zWNHNz3BrR6yYAJBlTjqrdtKbq7kabU+Ydv08Qx7tQ/8OARb7cjrWQ9RKwdVK7To4ej7zLrUlRT/K+7j6YOd1XmTW54twNbpWH8Jvyw/wCkc0AewAqt1t8NDs4Oi7bFrlbrq79F6PvbNC/K/I4vyOc97jEue4ucTUmJKrieJ1acdNCtoSVK7EY3USDK0XUSBaLqJAtF1EgWi6iQLTpdn2HNri3UalrsOj4OEYjJqBzAxgiLcZH3u3smLaMLq1funF6j1bHtU8WBqrceqny9/d6eT+h4sWPDjZixMbjx42hrGNEA0DsHpxW2kkoXA8fXXXkreTI2629WaPe96x7biOLCWv1uQQayIPwWkfzcg4iP4Wnn6lXkrtUL3jp9M6ZXva/iZJW2XF8+5fa+zynD7fubdJqHZs+mx6o5HF7sj4OzscTEvxvdEXEmJ7TMLWpcOXqeo3mxq3GFY8VbohQkvda5NL6dx32k1+m1uP4mnyB4+82MMjDJ7DxHgexXqGpR5PcbTNtq7Myjv7H5GW7qdVMGvaLqdUgWlDV7po9EP4+Vof2YmG/Kf7g+zGZgFi2qeLNvb7Hc7l/uqXbzei9P3ScprfMupzBzNKz8tjMRfG7MRQwtxxpEjsKqqrb4He23RcOKKs7vr5cKfvf1dxzzsjnuLnkuc4xc5zi5xJ5kkxJKrg7CoVKtphUoxuokGVouokC0XUSBaLqJAtF1EgWi6iQLRdRIFouokC0XUSBaLqJAtF1EgWkNxohZahcaILULjRBahcaILULjRBahcaILULjRBahcaILULjRBahcaILULjRBahcaILULjRBahcaILULjRBahcaILUWtNuGr0bo6fM7HxiW/axu/axuiw90VKqqp4M18+02+4UZqU+/t9PE6XS+aTwbrMA7B8XB4nE93g72K2nKv1jjZ+hL3ttX5qvvX3ec6PTbjpNWB+Xz43n8ES3IPXjda/ork6auDONm2e42/8AFoqS58V6VoW7jRZQa0IXGiQIQuNEgQhcaJAhFTPotJqo/H02HIT98ttf/wBY0tf1UOil8TYxbncYP4VdSXKdPQ9DS5/LemfE6fNkwH8LgMrPYCWv/wBIqt4U+DaOni61np0y001L0P7V6jTZ/L244onF8HUN7LH2PhVuSwR9RKreGtcNTo4usbOvSu6h96leqfqNRm02r0/8/T5cVX43Bp9ToWn2FVumpcZOjjzbfN/Crpq8jX1Fe40UF1qFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqFxogtQuNEFqL+2as6TXafMSAwZAzJL4eT3Hk/sh0fYsqHFSfYam+263G1rxr3oleVao+nXGi3IPDwhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCMX5mYxdkexjZvcGjvcQFEJcTKnHVW4oTb7tTXZt723DG7VY3kdmK7LH24w5vVYuuhdpuY+mb3Jwx1Jd+n1mqzeasDYjBpsmU9hyObibGcB8QkdyreWnsTN/H0HK9ctdNPk1+40+fzJuOWIxnFp2n/Zsi6H7WQv4+oBYPLU+Gh0cXRdnj1rurfe9PQoNPl1OfO67NlyZXTyPc+HquJgFg23xZ0ceDFiVuKlUruSRFcaKCy1C40QWoXGiC1C40QWoXGiC1C40QWot6TR6vXP+HpsLshH2nQhjYJveSGt74nsWVNNVTik19xuNvtab89SS9b8i4ncbZ5dwaQtzauzVZxxDCD+XxmjTA5SJu4UWzRhVOtWrPL73rGXcTj2848XP9Z+fs83pOn+IQPugDuA71bBw7E+cnKbt5oZgDtPoCzLm4tdnAuxYj+p2ZXj90V5KivKlpRqzv9P6HVlay7uacXZT2vy8l6/IcHkzZMr3ZMjzkyPJc97yXOc48ySTElazberep6ujHRjpVFCihLRIwuNEMrUS4dRmwZG5cL3Y8jeTmkg+o9hBkeBRNpynqYZMOPLQ6MiVVD7GdRpvNLm4iNVpzkzNHuvxEMbk/bBj8M1EQZBXLLp7S1OFm6EnknBXGN8U9WvJz88eVmt1fmDcNTFrHjTYz93DEPh+tlJvj6rQsHkqfDQ3dv0jaYNalfXzfD0cPTJpS9xJJ4kmJJiSSeZJmsNTpKlLRcDy40Qm1C40QWoXGiC1C40QWoXGiC1C40QWoXGiC1C40QWoXGiC1C40QWoXGiC1C40QWoXGiC1ENx9IJKLIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCEehxBiCQRxBHMFJQtT0fA2um3zctNADOcrBD3M4+KIDsuMMgHqcFYsrXeaGbpeyzaui2rnTp6uHqN7p/NON0BqcL8R7X4rcjPWWm17R6rlbTno/WRyc3Qq6dcFSqXJ6P7vqN5g3PS6qHwNTjeTyZENyf8AVvDX9Fcq8dXA5mXZZ8H8WipLnxXpWhbvdPoPoWXsmvahe6fQfQnsi1C90+g+hPZFqF7p9B9CeyLUL3T6D6E9kWoo5tBos8fi6XCSebmsGN59b8djuqxdGN8UbWPd7rF7ldUeWV6HKNXl8u6N8TiyZsJ7BFuRg9j23f6SreHG+Eo3sfWNzT76pqXofq09RrcvlvUt/k6nDkEsjXYj0GUR9qweDkzdx9awP+JRUn3Q/uNdl2fc8XPTOeJ4nMyR/utdf0Vbx1LsNyjqOxr4VpPvlfoNfkxZ8XDLiy4jLJjcz/WaFg9OKZuUV4sn8OqmryOfqIrj6QUSjOELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCEfR9t3BufQ6fI/MxrxjDMgc5gdfj9wkx4+9bH2rdorodCb4njN7s6sW6roppbpmVCfB6+rgWzrtOOeq049eXEP8AlLK7HzXpNdbXM+GOv0Mjdumibz1um9mbE7l+yTBL8XNFi2O5fDFX6GQO3zbm89Yw/sse+n3Mblj8XDzLF0veVcMb9KX1sru8ybe3lkyv/Zwkf64Yo+Ni7y6no27fGmleV/dJWf5p04/l4NQ79v4TPB2RYvcY+xMvp6Dmfv1ULyS/sRUf5rzH+XpWNkX5C+fY3GzxWL3C7KS+noOP9fI35FH2sp5PMu5v+ycGL9jED/4x2RYPO2bNHRNlT711Xlf3QUMm77lljfrM/GMQx3wgY8xDEGCCxeSp9rNujp+yx+7jp86n65KLsj3m573OM3G495iVjKNpUU0qKUkjG4+kFEomELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIRstHte4a6BwYH/AAzD+NkHw8UD2h7gLx+zErOmh1cFoaW432z2umWtX8lq/R2eeDrNF5Y0+KD9bkOpf/smRx4QakQyZIH9kUWxThoXvanA3XXMuT2dtTZTzer+5evynT42MwsbjxMZixt4NYxrWtHqDQArlalCWhw66qslTryN1Vvtblmt1+96LbwW5MvxMw5YMUHZIyefs4/7xBhyBWFeXHRx4m7tOl7ndw6KbcX7T0Xm7X5jhtx3/W7hcy74GnPD4GI/aH/dX8HZPVwbRa1eZ16cEeo2fSdttIqi/N+0+zyLs+vvNLcfSCqlHThC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCELj6QSUIQuPpBJQhC4+kElCEQxMypLIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCL+Dc9fpofC1WUNH3Hu+Iz1BuS5o9izVdVPBmrl2O0zfxMdM81o/SoNxg8z6hsBqMGPIPxY3OxO9ZB+I0nuVizvtSOdl6HheuGt0+VT932m2w+YdBlgHvy4D/AN0YS2P7WMvEPXBWrNjfHQ5+Xo+7o91U1ruf3wbXDqtPn/k6jFlozI1x9rQYhWJ0vhBoZMGXF/Foqp8qJ4mZUlUIRMyghCJmUEIRMyghCJmUEIc+B4g8wkIFXJodHl/mabA4n73w2B37wAd1WLoofFIvo3W4x+5XUl5X9RRybFtr+WJ+Mzx5cng9z2juWDw432G1R1Xe08alUu9L7IKOTyzpz/L1Wdn7YZk/1RiWL29PYzao63mXv0UvySvvKb/LOoH8vV4nyvY/HP8ACcsFg9u+xo2Ket4X7+OpeRp/cVH+X9yZ9luLL+xmAjz/ANoMcli8FfcbFPV9lVxdVPlX3SVX7TubOekyn9gtyf8Ai3OWLxVrsNinqGyq4ZKfPp9aRVdpdWz7em1DP2sOVvi0LF0tcUy+nPt6vdrofkaIDcDAxBkYg9yiC1Q9VwPImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEbDT7XuOqgcOlzFp5PePhYyJjJkLGn2ErJY6quCNTNvtng/iZKZ5LV+hSzoNL5TzOg7WapuMcI48AL3EdoOR4a1p9jldTt/2mcjP1/GtNvQ2+dWi9Clv0o6PSbLt2jg7HgGTIP8XOfivj2EB38NpE2tCupxUU8FqcbcdT3m40rrih9lOi+9+ds2b8jMTS/JkbjY3m97gxo9bnEALPRcTRpoqrqtoTdT7EpZoNZ5m0Gni3AX6vIOzH7uIGuVwgR+yHKqrNQuGrOvt+ibvNrljHR36v0fe0cprfMG46yLRl/LYjEfDwEtJEn5I3u4c4EAyVFWWqrTgjv7bpGz23tOm/Jzq19C4fW+80cTM96qOnCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIRDETCgthiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiImEEMREwghiMOIMCORimogu4dz12CHw9XlAHJrn/ABGj+5kub0WarrXBs1cmy2uX38dM+SH6VDNli8ya1nDI3BmHaS0sd3scG9Fms1a46mlk6LtqvcddL8sr16+s2WLzPgMPjabIyZxvZkHrg74SsWddqZp19Dyr+HWn5U19Umxx77tmT/0j4ZlkY9v+kGlnVZrLQzTr6VvqP1JXc1/Z9Rfx6vS5v5WpwZI9jMuNx7g4mKzVVL4NGpXt8+P+JRWvKmTxEwsiqGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQzwhrhBwa4SIBHVRBKdS1UpnA77lxO178eJuNjcDG4zY1rbn/AGnkwAiRdb7Fp5vfhcEes6VRXTtFXkbdVTb15cF9/nNNETCqOlDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIYiJhBDERMIIZkxjshtxtc9x5NYC4n2NBKlJvgjGqqmhTW0l36Gxw7NueeFmjytB7ctuAQn/GcwkepZrFkfYzTydS2OL3slLfd7X1SbbB5U1j4HPqNPgB5ht2Z49kMbP9JZrb1drOfl6/t6f4VFdT74S+1+o3GDytt+OBzZc2oPaLm4mH2M9//SViwUrjLOdl69u69MVNNC9L9enqN1p9v0GlgcGlwY3Dk+0OyD/vj7n9VaqKaeCOZm3m7z6Za6muU6ehaE2bV6XTCOo1GHCOz4mRjCfUCQSfUpbS46FeLb58zjFRVU+5Nmk1PmjbcMRiOTUu/wC5tsZGr8thhUAqp5qFwlnUw9D3uTXJbRT3uX6FPraNBqfNWtyxGnZh0rTyP87KP7zwMf8AoKqrPW+Cg62DoO2x65nVXV6F6Fr6zn8+r1GqddqM+TM6MR8R5cB+y0m1o9UFS3VVxlnXxbfFgVuGhUruX0kgiJhQWwxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGIiYQQxETCCGQXCqaltouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FouFU1FpPj1mow/ytRnx/sZXtHCjXAQWSqrXBlVe3w5P4lFNXlSZdx75uWOENS9wlkZjyR9Zc0u6rJZcq7TVr6Xsq+NCT7m19Tgus8za1v28eDIKse13e3Jb0Waz5O2DWq6JtX7rrXnT+z7S2zzV/tNH6yzN/yXY/0rJbh9qNeroP7GT0r9P2FtnmfRH7eHUsNG43Dv+ID0WS3C7ZKKuh7le7VQ/O19haZ5g2t3PO9n7eHJ4ta4BZLNS+0oq6RvqeFKfka+1osN3fbX8tZhH7TrP9e2Cy+JS+1FFXT95Txx1eZT9RYbrdK/7GpwP/ZzYneDipuXNFVW2z0+9RUvKn9xnk1GPHiyZiYsxMe9xBB4MaXEc+cApbaU9hjRhrryU4171TS9J8uyZjlyZMr4l2R7nuM3PcXHqVz26m5Z7mjGsdCop91JJeYwuFVGpnaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRabzbdmfuWI5sepwsa15Y9hD3ZWHhC5sGtg5vEQJHtjC/HhqyKU0cve9Sp2WT4ddFTbUp6JPz/o/TusflXCP5utyumMeBjPWIuyZI9yuW0fbUcyvr2R/w8VK8tTf1JF/F5b2pn2xqc3/SZQ0f+CbjKzW2pXHU1K+tb+r3bKfIvvk2OLa9qw/Y0OEw5HIwZjwrlLzFZrDSuCRqV77f5Pey1eZx9UFw5tNp28TiwMqceJvi0LJpU8Wkayx581Wl1dXnbKOXftpw/a1mN3/RRzf+KDwq3kxrjUjax9K3+T3cdS8un1wazN5t0DIjDh1OYjkS1mJh9rnueP3VW9xQuCbN3H4f3dWuSqiledv6o9Zqc3m/VuiMGmw4Qe15fmcPUQcTY+wqp7it+6kjoY/D23p/i11VeSEvt+s1GffNz1ERk1mYA/dxW4RCX8IMJHriq3lyvizo4ul7HD7mOlvv1+uTWHIXEucXOJ4kkxJ9ZJiVh7RuqhJQoSPLhVRqTaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaLhVNRaQ30U6FlovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0FovomgtF9E0Fpf27c8225/jYgHBzS3JicSGZG9kYci08QexZ48jx1XI1N5sce9xfDyaNOU1xX07TcP8264/Y0+lZ625XH2fxWjornu6+xL6ec51Ph/ar3q8j9C+wp5PMm6v5Z24xLHixDq5jnDvWD3GR9vqNmjouwp40Nvvb+9Io5N01+X+ZrNS4H7vx3hv7rSG9Fg8tb41M2qNjtMfuY6E/wCap9JTOQuJJiSeZJiT6yVhJsKhJQuB5fRNCbRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaQ3GiQWQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCEQ3GaiEWQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQiGJmUkthCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIRMykiEImZSRCETMpIhCJmUkQhEzKSIQiZlJEIhiJqZLIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIYiJpIhiImkiGIiaSIZDcJqYZZDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDIbhVRBbDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIZDdRNSy0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWi6iai0XUTUWkNxop0LLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLRcaJoLSG4zSEWQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQiGJmVBbCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIRBETCSyyBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQRXCfipLYYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDFwn4oIYuE/FBDIbhVILIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDILqdVEPmWWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWi6nVIfMWkVxopkstQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqFxoki1C40SRahcaJItQuNEkWoXGiSLULjRJFqIbjPwTQthC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIXGfgmghC4z8E0EIhiZlCyEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQiCImEllsCImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYghuCSyyGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQxcEliGLgksQyG4VUwWQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGLhVIEMXCqQIYuFUgQxcKpAhi4VSBDFwqkCGQ3U6qILLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLRdTqkC0XU6pAtF1OqQLSK+iallovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotF9E1FovomotIbjRToWWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWi40TQWkNxmkIthC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhC4zSEIQuM0hCELjNIQhEMTM96gshCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIRMz3oIQiZnvQQhEzPeghCJme9BCETM96CEImZ70EIhU3FgS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuAS4BLgEuBDETHehZDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIYiJjvQQxETHeghiImO9BDERMd6CGIiY70EMREx3oIZDcJpDLYYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIYuE0hiGLhNIYhi4TSGIZDcKqNSy0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0XCqai0hvop0LLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaL6JoLRfRNBaRXU6pBZaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaLqdUgWi6nVIFoup1SBaQ3FCy1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1C4oLULigtQuKC1ENxSUWQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCELikoQhcUlCEQxM+qnQsgRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggRM+qaCBEz6poIETPqmggiiZlQWQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEImZQQhEzKCEQREwpllsCImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgREwksQIiYSWIERMJLECImEliBETCSxAiJhJYgiiJhJLIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDERMJIhiImEkQxETCSIYiJhJEMREwkiGIiYSRDIbhNIZZDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxDFwmkMQxcJpDEMXCaQxD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EgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCELjRIEIXGiQIQuNEgQhcaJAhC40SBCFxokCEQXGaiEWQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQhcZpCEIXGaQhCFxmkIQiK4pJZCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCFxSRCIYmfVToWQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQImfVNBAiZ9U0ECJn1TQQRRMyoLIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCETMoIQiZlBCIomaSWQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQhEzSRCETNJEIRM0kQiFTKLAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgElAJKASUAkoBJQCSgQqCwIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA/9k="

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA2CAYAAACiAEtPAAAAAXNSR0IArs4c6QAAArlJREFUWAntWc9rE0EUfm822pYebBF/QoXiqUmqvUiRpq0UPRapBlFEEYRC68l600sPov+BFw8KXsSSLljwGmtVWlDUNo3owQq9CCUi1VpTs/N803TXZUiN2bJ7moXNzHsz+74v385OwrcIG0d6au6YQzgMRG0AaLn50FqERQKc6OiO3xlFlKiABqZyF4ngPpNARPjNjQyNgFeY6lSXAcfsnuQZHHxF25ZWcksEEBMW9me6Ek95kMNwj7OTcy1FwAwBHbGEdUIU1vJJRt3BSjwaTyWzUZBQX/Fhb/uiQHFL9R2gLkGSmlTAIn0rt9F9IjplTKImER3sv5EMEV0fo4hRRFdAj80aMYroCuixWSNGEV0BPTZrxCiiK6DHZo0YRXQF9NisEaOIroAex9wE+xMtp7Ozx904ipZAHAIoOyAeEUmUBoHpKAh4GPKvDeMRYTfgMwB99CZF0EHAZuWPKCiPCPsjtt3TPhIBvgeh7LKShKxKmH3Ek2Wj490afaBaPDDzficUnes8r4Pv9YftJG8rO6radZuNB7o1F959aWQSM0Q0wmefJDlURHh9bvrTns2AquUDEfm+XDjPBA76i7M9uuvX2s9hf66WfiAi7MIeqATC7mTFfKW5ei4QEfZjX+qFVMzFXlTK/08uEJFMKv6E/di7fgBesI+t7sQ9f66WfiAiCoBt60FhWUcRxRAr1Gf3Jk+OsXFaC7h/buDHVxUZT8WnuVHnlo/AimwZWStgiGiCqCdOrJaT1KAPhh07IOoVhgBaFVYz5bhfAoL+U8/y+8IGd+uPEsX4RdVlFUsh3pbfYE3O3ySQN3gv+EEI85wsuReE1fIu3MpE9vMfsje7GxOd60SYnZh9nr/KP15XWJnWsMD9dXlD/MrxBNRZ1+zOtsI6Ef+ESwsL9c5yQ+gvFx8c3rvix/0DTJPAwm/nWNQAAAAASUVORK5CYII="

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAApCAYAAABdnotGAAAAAXNSR0IArs4c6QAAA65JREFUWAntWE1IVFEUPufOvErtx0qoLIIEacwpESqMfPZDREhRYwlZ9ANRUVtb1CIRiigyCVq0CFpU0ELSoYLoZ5FOY0RGPzNjRsWEhUGFZM6k2XhP5z5dTPP3chyFYO7qzTv3fOe73z3nzj0PIYlRSyReuXwrJMEaFDSPJOYigkTALiLoJCHuO/WCZ0lAA47Eae9zf/b33uAxINrDfrMS+iJ+FACXsqbl1F8tmh1MODfM+M+EtrR4DrECJ4loBiD2ItEdQnHLgvBWk7JrwGoRBJgLUtqY8GYAWs9qZSDiZ0Kodur262Fx4z6aEjrQRtqXvvaLHGgfb0sfkKifbrGcuVxq642LygbHk9czoV8eB5SHmZiGKM4W6YuO1iLKRH4JCVUSWX63eG8yQDlP7CArbHSuXPw+EWCkzeHyFjGhm6zafFb4StMqu9ruuIO3Of4IudpPs7WcZXdbszJLRkpGITfp9pcZEzKX84K8BLTb0ew5Ej8ixE9qh8u3gaS8w/nSqcHEpQ1l+V8TAZnZKps7FoQg9JRzK1tYtJIbpba2WD4xFVJlDSTPKAeesGO0ZBROwyqbH4XYTwAWKUMGtnofOWISetXi5fSBJayfs7HM7o50SvZ3o76oiRVv5Updu83lWR0LJyYhPuG2q8nCgqdiOY3mnQBhYIYkVsXCiSK01++fxBPXcxJ+alxp5z1P7Zg7R3vA1RbgI2QTKxVV5VGEerr6i4Egk4//u6mlMoR2IT//F6fCQyYzx9HqzYuMEUVIDA7mGpMkfYicnKrfXP5+hWUlMRQrDNga9gxcXdaX7vZ8lNQNhP1bW9/Ywu2peqZQKEAouwdR2DimO/z0NvZQ5U1P508+BOkgs1c5NJ4jyAfvuSK98AQTCxkK9XwKnOfz4aBKZDY+ZjaD48GIY2oIpHM+1bxw+ZQ4NTh8pehGgneTs3OKR3JVSAXpqrY3OX3BAS8n+hRNt08VP3qDhaDKT8C98SajFnR96cJvvCstqrLlk9d5fE7BBGOlBAOpWHEyGPyv8Fv5iQHSoso+GcBU+qQJmamZViitkJkCZvZ0DqUVMlPAzJ7OobRCZgqY2dM59B8qhBAYZj3ZjP1Y2bndGIotICCm5mZ5uNfu50t2ReWjjoVjFTQeboXbu4yQ1nGv/6WhtLDTaBQrXL5qKWUd3/7V97+P3DCOU1+GGsebZ3Q9KHY5ywqvGYQUe0ezbyczPcxkCvjD2l8ttrKPxeDg3G2Qh3uyuiZ98W0V4w/EUE3MBD0jAAAAAABJRU5ErkJggg=="

/***/ })
/******/ ]);