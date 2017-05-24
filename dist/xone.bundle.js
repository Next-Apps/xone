/**!
 * @preserve Xone Javascript Framework
 * Copyright (c) 2017 NextApps, All rights reserved.
 */

/**
 @const
 @interface
 @template ActiveModel
 */
function _active_model() {
}
/** @type {Function} */ _active_model.prototype.register;
/** @type {Function} */ _active_model.prototype.new;
/** @type {Function} */ _active_model.prototype.create;
/**
 @const
 @interface
 @template ModelHelper
 */
function _model_helper() {
}
/** @type {Function} */ _model_helper.prototype.new;
/** @type {Function} */ _model_helper.prototype.create;
/** @type {Function} */ _model_helper.prototype.newFromList;
/** @type {Function} */ _model_helper.prototype.createFromList;
/** @type {Function} */ _model_helper.prototype.parse;
/** @type {Function} */ _model_helper.prototype.find;
/** @type {Function} */ _model_helper.prototype.all;
/** @type {Function} */ _model_helper.prototype.range;
/** @type {Function} */ _model_helper.prototype.count;
/** @type {Function} */ _model_helper.prototype.findBy;
/** @type {Function} */ _model_helper.prototype.each;
/** @type {Function} */ _model_helper.prototype.where;
/** @type {Function} */ _model_helper.prototype.like;
/** @type {Function} */ _model_helper.prototype.saveAll;
/** @type {Function} */ _model_helper.prototype.deleteAll;
/** @type {Function} */ _model_helper.prototype.updateAll;
/**
 @const
 @interface
 @param {Object<string,*>} data
 @template ModelClass
 */
function _model_class(data) {
}
/** @type {Function} */ _model_class.prototype.save;
/** @type {_storage_interface} */ _model_class.prototype.data;
/** @type {Function} */ _model_class.prototype.cache;
/** @type {Function} */ _model_class.prototype.update;
/** @type {Function} */ _model_class.prototype.restore;
/** @type {Function} */ _model_class.prototype.delete;
/** @type {string} */ _model_class.prototype.model_name;
/** @type {Function} */ _model_class.constructor.prototype.mapToView;
/** @type {Function} */ _model_class.constructor.prototype.mapToPayload;
/** @type {Function} */ _model_class.constructor.prototype.mapToData;
/** @type {Function} */ _model_class.constructor.prototype.beforeUpdate;
/** @type {Function} */ _model_class.constructor.prototype.beforeCreate;
/** @type {Function} */ _model_class.constructor.prototype.beforeSave;
/** @type {Function} */ _model_class.constructor.prototype.onCreate;
/** @type {Function} */ _model_class.constructor.prototype.onUpdate;
/** @type {Function} */ _model_class.constructor.prototype.onSave;
/**
 @const
 @interface
 @this {_controller_struct}
 @template Controller
 */
function _controller_struct() {
}
/** @type {Function} */ _controller_struct.prototype.render;
/** @type {Function} */ _controller_struct.prototype.build;
/** @type {Function} */ _controller_struct.prototype.request;
/** @type {Function} */ _controller_struct.prototype.requestBatch;
/** @type {Function} */ _controller_struct.prototype.requestSync;
/** @const @typedef {_route_struct} */ var _route_struct = {/** @type {string} */ to:"", /** @type {string} */ action:"", /** @type {string} */ type:"", /** @type {string} */ field:"", /** @type {number} */ limit:0, /** @type {number} */ last:0, /** @type {Object<string,(string|number|boolean)>} */ params:{}, /** @type {Object<string,string>} */ header:{}, /** @type {boolean} */ cache:false, /** @type {boolean} */ clear:false, /** @type {boolean} */ async:true, /** @type {Function} */ default:function() {
}, /** @type {Function} */ error:function() {
}, /** @type {Function} */ filter:function() {
}, /** @type {Function} */ arrayfilter:function() {
}, /** @type {Function} */ sort:function() {
}, /** @type {Function} */ map:function() {
}, /** @type {Function} */ arraymap:function() {
}};
/** @const @typedef {_mapping_struct} */ var _mapping_struct = {/** @dict */ mapToView:{}, /** @dict */ mapToPayload:{}, /** @dict */ mapToData:{}};
/** @const @typedef {_template_struct} */ var _template_struct = {/** @type {Array<(string|number)>} */ data:[], /** @type {Array<string>} */ map:[], /** @type {function(*):boolean} */ if:function() {
}, /** @type {string} */ loop:"", /** @type {string} */ include:"", /** @type {string} */ else:""};
/** @const @typedef {_view_model} */ var _view_model = {/** @type {Array<*>} */ data:[], /** @type {string} */ target:"", /** @type {string} */ view:"", /** @type {(string|_view_model)} */ default:"", /** @type {(string|Function)} */ callback:""};
/**
 @const
 @interface
 @this {_cache_struct}
 @template CACHE
 */
function _cache_struct() {
}
/** @type {function(string,*,boolean=)} */ _cache_struct.prototype.set;
/** @type {function(string,boolean=):*} */ _cache_struct.prototype.get;
/** @type {function(string):*} */ _cache_struct.prototype.remove;
/** @type {function()} */ _cache_struct.prototype.clear;
/** @const @typedef {_pattern_struct} */ var _pattern_struct = {/** @type {string} */ tag:"", /** @type {(Object<string,string>|Array<Object<string,string>>)} */ attr:{}, /** @type {string} */ text:"", /** @type {Array<_pattern_struct>} */ child:[], /** @type {number} */ length:0};
/** @const @typedef {_storage_struct} */ var _storage_struct = {VIEW:"", DATA:{}, SESSION:"", CACHE:[]};
/** @const @typedef {_event_struct} */ var _event_struct = {/** @type {string} */ on:"", /** @type {string} */ if:"", /** @type {string} */ to:"", /** @type {Object<string,(string|number)>} */ params:{}, /** @type {Function} */ do:function() {
}, /** @type {string} */ go:"", /** @type {boolean} */ stopBubble:true, /** @type {boolean} */ preventDefault:true};
/** @const @typedef {_ajax_struct} */ var _ajax_struct = {/** @type {string} */ type:"", /** @type {string} */ url:"", /** @type {Object<string,(string|number)>} */ params:{}, /** @type {Function} */ success:function() {
}, /** @type {Function} */ error:function() {
}, /** @type {Object<string,string>} */ header:{}, /** @type {boolean} */ async:true, /** @type {boolean} */ clear:true, /** @type {boolean} */ cache:true};
/**
 @const
 @interface
 @this {_storage_interface}
 @param {!string} store_id
 @template Storage
 */
function _storage_interface(store_id) {
}
/** @type {Function} */ _storage_interface.prototype.get;
/** @type {Function} */ _storage_interface.prototype.set;
/** @type {Function} */ _storage_interface.prototype.update;
/** @type {Function} */ _storage_interface.prototype.del;
/** @type {Function} */ _storage_interface.prototype.clear;
/** @type {Function} */ _storage_interface.prototype.keys;


/** @const */ var CONFIG = {};
/** @define {string} */ CONFIG.ENV = "production";
/** @define {string} */ CONFIG.RACK = "default";
/** @define {boolean} */ CONFIG.NO_SCRIPT = false;
/** @define {boolean} */ DEBUG = false;
/** @define {boolean} */ CONFIG.SHOW_DEBUG = false;
/** @define {boolean} */ CONFIG.DESKTOP = true;
/** @define {string} */ CONFIG.FORCE_ORIENTATION = "none";
/** @define {number} */ CONFIG.MIN_DIMENSION = 1024;
/** @define {number} */ CONFIG.MAX_DIMENSION = 1024;
/** @define {number} */ CONFIG.MIN_ASPECT_RATIO = 0.7;
/** @define {number} */ CONFIG.MAX_ASPECT_RATIO = 1.35;
/** @define {boolean} */ CONFIG.HIDE_STATUSBAR = true;
/** @define {number} */ CONFIG.SETTINGS_VERSION = 0.0;
/** @define {number} */ CONFIG.CORE_VERSION = 0.6;
/** @define {boolean} */ CONFIG.DOM_CACHE_ENABLED = true;
/** @define {number} */ CONFIG.MAX_CACHE_TIME = 300000;
/** @define {string} */ CONFIG.SERVER_HOST = "localhost";
/** @define {number} */ CONFIG.EVENT_DEFAULT_DELAY = 0;

(function(){

window["requestFileSystem"] || (window["requestFileSystem"] = window["webkitRequestFileSystem"]);
navigator["persistentStorage"] || (navigator["persistentStorage"] = navigator["webkitPersistentStorage"]);
navigator["temporaryStorage"] || (navigator["temporaryStorage"] = navigator["webkitTemporaryStorage"]);
/** @const @type {JSONType} */ (JSON || (window["JSON"] = {/**
 @const
 @param {string} sJSON
 @return {(Array|boolean|null|number|string)}
 */
"parse":function(sJSON) {
  return /** @type {(Array|boolean|null|number|string)} */ (eval("(" + sJSON + ")"));
}, "stringify":function() {
  /** @const */ var toString = Object.prototype.toString;
  /** @const */ var isArray = Array.isArray || function(a) {
    return toString.call(a) === "[object Array]";
  };
  /** @const */ var escMap = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
  /** @const */ var escFunc = function(m) {
    return escMap[m] || "\\u" + (m.charCodeAt(0) + 65536).toString(16).substr(1);
  };
  /** @const */ var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
  return /**
 @const
 @param {(Array|boolean|null|number|string)} value
 @return {string}
 */
function stringify(value) {
    if (value == null) {
      return "null";
    } else {
      if (typeof value === "number") {
        return isFinite(value) ? value.toString() : "null";
      } else {
        if (typeof value === "boolean") {
          return value.toString();
        } else {
          if (typeof value === "object") {
            if (typeof value.toJSON === "function") {
              return stringify(/** @type {Array} */ (value.toJSON()));
            } else {
              if (isArray(value)) {
                /** @type {string} */ var res = "[";
                for (var i = 0; i < value.length; i++) {
                  res += (i ? ", " : "") + stringify(value[i]);
                }
                return res + "]";
              } else {
                if (toString.call(value) === "[object Object]") {
                  /** @type {Array<string>} */ var tmp = [];
                  for (var k in value) {
                    if (value.hasOwnProperty(k)) {
                      tmp.push(stringify(k) + ": " + stringify(value[parseInt(k, 10)]));
                    }
                  }
                  return "{" + tmp.join(", ") + "}";
                }
              }
            }
          }
        }
      }
    }
    return '"' + value.toString().replace(escRE, escFunc) + '"';
  };
}()}));
Array.prototype["filter"] || (Array.prototype["filter"] = function(fun) {
  if (this === void 0 || this === null) {
    throw new TypeError;
  }
  var t = Object(this);
  var len = t.length >>> 0;
  if (typeof fun !== "function") {
    throw new TypeError;
  }
  var res = [];
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (var i = 0; i < len; i++) {
    if (i in t) {
      var val = t[i];
      if (fun.call(thisArg, val, i, /** @type {!Array<T>} */ (t))) {
        res.push(val);
      }
    }
  }
  return res;
});
Array.prototype["map"] || (Array.prototype["map"] = function(callback, thisArg) {
  var T, A, k;
  if (this == null) {
    throw new TypeError(" this is null or not defined");
  }
  var O = Object(this);
  var len = O.length >>> 0;
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  if (arguments.length > 1) {
    T = thisArg;
  }
  A = new Array(len);
  k = 0;
  while (k < len) {
    var kValue, mappedValue;
    if (k in O) {
      kValue = O[k];
      mappedValue = callback.call(T, kValue, k, /** @type {!Array<T>} */ (O));
      A[k] = mappedValue;
    }
    k++;
  }
  return A;
});
Object["keys"] || (Object["keys"] = function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"), dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], dontEnumsLength = dontEnums.length;
  return function(obj) {
    if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
      throw new TypeError("Object.keys called on non-object");
    }
    var result = [], prop, i;
    for (prop in obj) {
      if (hasOwnProperty.call(obj, prop)) {
        result.push(prop);
      }
    }
    if (hasDontEnumBug) {
      for (i = 0; i < dontEnumsLength; i++) {
        if (hasOwnProperty.call(obj, dontEnums[i])) {
          result.push(dontEnums[i]);
        }
      }
    }
    return result;
  };
}());
(function() {
  var _slice = Array.prototype["slice"];
  try {
    _slice.call(/** @type {(IArrayLike<?>|null|string|undefined)} */ (document.documentElement));
  } catch (e) {
    /**
 @this {(IArrayLike<T>|string)}
 @param {*=} begin
 @param {*=} end
 @return {!Array<T>}
 */
Array.prototype["slice"] = function(begin, end) {
      end = typeof end !== "undefined" ? end : this.length;
      if (Object.prototype.toString.call(this) === "[object Array]") {
        return /** @type {!Array<*>} */ (_slice.call(this, begin, end));
      }
      var i, cloned = [], size, len = this.length;
      /** @type {number} */ var start = /** @type {number} */ (begin) || 0;
      end = /** @type {number} */ (end);
      start = start >= 0 ? start : Math.max(0, len + start);
      var upTo = typeof end == "number" ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }
      size = upTo - start;
      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }
      return /** @type {!Array<*>} */ (cloned);
    };
  }
})();
Array.prototype["indexOf"] || (Array.prototype["indexOf"] = function(d, e) {
  var a;
  if (this == null) {
    throw new TypeError('"this" is null or not defined');
  }
  var c = Object(this), b = c.length >>> 0;
  if (0 === b) {
    return -1;
  }
  a = +e || 0;
  Infinity === Math.abs(a) && (a = 0);
  if (a >= b) {
    return -1;
  }
  for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
    if (a in c && c[a] === d) {
      return a;
    }
    a++;
  }
  return -1;
});


if (DEBUG) {
  var GRAPH = function() {
    var graph = {};
    var count = {};
    var stack = [];
    var timer = null;
    var reset = function() {
      if (typeof APP !== "undefined" && APP.CONFIG.SHOW_GRAPH) {
        GRAPH.show_graph();
        GRAPH.show_count();
      }
      stack = [];
    };
    var timestamp = 0;
    return {/**
 @param {!string} fn
 */
register:function(fn) {
      count[fn] || (count[fn] = 0);
      count[fn]++;
      stack[stack.length] = fn;
      var walker = graph;
      for (var i = 0; i < stack.length; i++) {
        if (graph[stack[i]]) {
          walker = graph;
        } else {
          graph[stack[i]] = {};
        }
        walker = walker[stack[i]] || (walker[stack[i]] = {});
      }
    }, /**
 @param {!string} fn
 */
checkin:function(fn) {
      this.register(fn);
      if (CORE.time) {
        timestamp = CORE.time.now();
      }
    }, /**
 @param {!string} fn
 */
checkout:function(fn) {
      if (CORE.time) {
        timestamp = CORE.time.now() - timestamp;
      }
      console.log(timestamp);
    }, show_graph:function() {
      var html = "", last_key = "";
      for (var key in graph) {
        if (graph.hasOwnProperty(key)) {
          html += key + ": " + JSON.stringify(graph[key]).replace(/:{/g, "\n=>").replace(/{/g, "\n=>").replace(/}/g, "").replace(/"/g, "").replace(/,/g, "") + "<br><br>";
        }
      }
      var node = document.getElementById("debug-graph-trace");
      node.innerHTML = html;
      node.scrollTop = node.scrollHeight;
    }, show_count:function() {
      var html = "";
      for (var key in count) {
        if (count.hasOwnProperty(key)) {
          html += key + ": " + count[key] + "<br>";
        }
      }
      var node = document.getElementById("debug-graph-count");
      node.innerHTML = html;
      node.scrollTop = node.scrollHeight;
    }};
  }();
}
;



/** @const */ var CORE = {};
(function() {
  /** @private @type {XMLHttpRequest} */ var xhr = null;
  var capitalize = function(text) {
    if (DEBUG) {
      GRAPH.register("CORE.capitalize");
    }
    return text[0].toUpperCase() + text.slice(1);
  };
  /** @const @type {string} */ var prefix = function() {
    var styles = window.getComputedStyle(document.documentElement, "");
    return (Array.prototype.slice.call(styles).join("").match(/-(moz|webkit|ms)-/) || styles["OLink"] === "" && ["", "o"])[1];
  }();
  /**
 @const
 @param {!*} value
 @param {string=} type
 @return {boolean}
 */
CORE.isType = function(value, type) {
    if (DEBUG) {
      GRAPH.register("CORE.isType");
    }
    return type ? typeof value === type : typeof value !== "undefined";
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
CORE.isDefined = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.isDefined");
    }
    return CORE.isType(value);
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
CORE.hasValue = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.hasValue");
    }
    return CORE.isType(value) && value !== null;
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
CORE.isArray = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.isArray");
    }
    return value && value.constructor === Array ? true : false;
  };
  /**
 @const
 @param {!*} value
 @return {boolean}
 */
CORE.isObject = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.isObject");
    }
    return value && value.constructor === Object ? true : false;
  };
  /**
 @const
 @param {!Array<*>} value
 @return {boolean}
 */
CORE.hasValues = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.hasValues");
    }
    return value && value.length ? true : false;
  };
  /**
 @const
 @param {!Array<*>} value
 @return {boolean}
 */
CORE.isEmpty = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.isEmpty");
    }
    return value && value.length === 0 ? true : false;
  };
  /**
 @const
 @param {*} value
 @return {boolean}
 */
CORE.isBlank = function(value) {
    if (DEBUG) {
      GRAPH.register("CORE.isBlank");
    }
    return value === "";
  };
  /**
 @const
 @param {(Node|Element|HTMLDocument|Window|null|string)} element
 @return {(Node|HTMLElement|HTMLDocument|Window|Element|null)}
 */
var getNode = CORE.getNode = function(element) {
    if (DEBUG) {
      GRAPH.register("CORE.getNode");
      if (CORE.isType(element, "string")) {
        if (CORE.DOM[/** @type {string} */ (element)]) {
          APP.STATS.count_dom_cache++;
        } else {
          APP.STATS.count_dom++;
        }
      }
    }
    return CORE.isType(element, "string") ? CORE.DOM[/** @type {string} */ (element)] || CORE.getById(/** @type {string} */ (element)) : /** @type {(Node|Element|HTMLDocument|Window|null)} */ (element);
  };
  /** @type {?Node} */ var dom_console;
  var log = "";
  /** @final */ CORE.console = {/**
 @param {(string|number)=} text
 @param {*=} obj
 @param {string=} color
 */
log:function(text, obj, color) {
    if (DEBUG) {
      GRAPH.register("CORE.console.log");
      if (color) {
        if (CORE.isType(obj)) {
          window.console.log("%c" + text, "color: " + color, obj);
        } else {
          window.console.log("%c" + text, "color: " + color);
        }
      } else {
        if (CORE.isType(obj)) {
          window.console.log(text, obj);
        } else {
          window.console.log(text);
        }
      }
      if (text) {
        log += text + "<br>";
      }
      if (CORE.getStyle(dom_console || (dom_console = CORE.getById("debug-log")), "display") !== "none" || CONFIG.SHOW_DEBUG || APP.CONFIG.SHOW_DEBUG) {
        CORE.setHTML(dom_console, log, function() {
          dom_console.scrollTop = dom_console.scrollHeight;
        });
      }
    }
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
warn:function(param, obj) {
    if (DEBUG) {
      CORE.console.log(param, obj, "orange");
    }
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
err:function(param, obj) {
    if (DEBUG) {
      CORE.console.log(param, obj, "red");
    }
  }, /**
 @param {(string|number)=} param
 @param {*=} obj
 */
info:function(param, obj) {
    if (DEBUG) {
      CORE.console.log(param, obj, "green");
    }
  }};
  /**
 @private
 @return {XMLHttpRequest}
 */
var createXHR = function createXHR() {
    if (DEBUG) {
      GRAPH.register("CORE.createXHR");
    }
    if (typeof XMLHttpRequest !== "undefined") {
      xhr = new XMLHttpRequest;
    }
    if (!xhr) {
      try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
        }
      }
    }
    return xhr;
  };
  /**
 @private
 @param {string} type
 @return {Object<string,string>}
 */
var getDefaultRequestHeader = function getDefaultRequestHeader(type) {
    if (DEBUG) {
      GRAPH.register("CORE.getDefaultRequestHeader");
    }
    /** @dict */ return {"Accept":"application/json", "Content-Type":"application/json"};
  };
  /**
 @private
 @param {string} type
 @param {string} url
 @param {(Object<string,(string|number)>|string)=} params
 @param {Function=} success
 @param {Function=} error
 @param {Object<string,string>=} header
 @param {boolean=} async
 @param {boolean=} clear
 @param {boolean=} cache
 */
var ajaxHandler = function ajaxHandler(type, url, params, success, error, header, async, clear, cache) {
    if (DEBUG) {
      GRAPH.register("CORE.ajaxHandler");
    }
    type = type.toUpperCase();
    /** @dict */ var current_header = header || getDefaultRequestHeader(type);
    var str_params = /** @type {(string|null)} */ ((type === "POST" || type === "PATCH" || type === "DELETE") && current_header["Accept"] === "application/json" ? JSON.stringify(params) : "");
    var cache_params = str_params.replace(/ /g, "").replace(/"/g, "").replace(/{/g, "/").replace(/}/g, "").replace(/:/g, "/");
    if (type === "GET") {
      url += "?" + CORE.paramsToString(params);
    }
    if (clear && xhr && typeof xhr.abort !== "undefined") {
      xhr.abort();
    }
    if (cache && type === "GET") {
      var last_cache = /** @lends {CORE.CACHE} */ CORE.CACHE.get(url + cache_params);
      if (last_cache) {
        if (DEBUG) {
          CORE.console.log("Fetched from Cache: " + url + cache_params, last_cache);
        }
        return success(last_cache);
      }
    }
    xhr = createXHR();
    if (!xhr) {
      if (type === "GET") {
        document.location.href = url + (str_params.length ? "?" : "") + str_params;
      }
      return;
    }
    if (DEBUG) {
      var debug_time = CORE.time.now();
    }
    xhr.open(type, url, typeof async === "undefined" ? true : async);
    for (var property in current_header) {
      if (current_header.hasOwnProperty(property)) {
        xhr.setRequestHeader(property, current_header[property]);
      }
    }
    (function(xhr, current_header, cache, type, url, str_params, success, error) {
      if (current_header["Authorization"]) {
        xhr.withCredentials = true;
      }
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var json = null;
          if (xhr.status == 200 || xhr.status == 201) {
            try {
              json = xhr.responseText ? JSON.parse(xhr.responseText) : [];
            } catch (e) {
            }
            if (cache && type === "GET") {
              /** @lends {CORE.CACHE} */ CORE.CACHE.set(url + cache_params, json);
            }
            if (DEBUG) {
              APP.STATS.time_request += CORE.time.now() - debug_time;
            }
            if (success) {
              if (json === null) {
                json = [];
              }
              success(json);
            }
          } else {
            if (error) {
              try {
                json = xhr.responseText ? JSON.parse(xhr.responseText) : [];
              } catch (e) {
              }
              if (json && json["error"]) {
                APP.LAYOUT.show_message(json["error"].constructor === Object ? JSON.stringify(json["error"]) : json["error"]);
              }
              return error(xhr.status, json);
            }
          }
        }
      };
    })(xhr, current_header, cache, type, url, str_params, success, error);
    xhr.send(str_params.length ? str_params : null);
  };
  /**
 @public
 @const
 @struct
 @constructor
 @implements {_cache_struct}
 */
var CACHE = function CACHE() {
    /** @private @dict */ var data = {};
    /** @private @dict */ var timer = {};
    /**
 @param {string} key
 @param {*} val
 @param {boolean=} force
 */
this.set = function set(key, val, force) {
      if (DEBUG) {
        GRAPH.register("CORE.CACHE.set");
        CORE.console.log("Set Cache to: " + key, val);
      }
      data[key] = val;
      !force && timer[key] || (timer[key] = (new Date).getTime());
    };
    /**
 @param {string} key
 @param {boolean=} force
 @return {*}
 */
this.get = function get(key, force) {
      if (DEBUG) {
        GRAPH.register("CORE.CACHE.get");
        CORE.console.log("Get Cache from: " + key);
      }
      return timer[key] && (force || (new Date).getTime() - timer[key] < (CONFIG.MAX_CACHE_TIME || 300000)) ? data[key] : null;
    };
    /**
 @return {Object<string,*>}
 */
this.all = function all() {
      if (DEBUG) {
        GRAPH.register("CORE.CACHE.all");
        CORE.console.log("Get All from Cache");
      }
      return data;
    };
    /**
 @param {string} key
 @return {*}
 */
this.remove = function remove(key) {
      if (DEBUG) {
        GRAPH.register("CORE.CACHE.remove");
        CORE.console.log("Remove from Cache: " + key);
      }
      var val = data[key];
      data[key] = null;
      timer[key] = null;
      return val;
    };
    /** @type {function()} */ this.clear = function clear() {
      if (DEBUG) {
        GRAPH.register("CORE.CACHE.clear");
        CORE.console.log("Clear Cache");
      }
      data = {};
      timer = {};
    };
  };
  var crcTable = function() {
    var c;
    var crcTable = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      crcTable[n] = c;
    }
    return crcTable;
  }();
  /** @type {(Array<Function>|Array<Array<Function,(number|null)>>)} */ var EXEC_STACK = [];
  /** @type {boolean} */ var EXEC = false;
  function runStack() {
    if (DEBUG) {
      GRAPH.register("CORE.runStack");
    }
    EXEC_STACK.splice(0, 1)[0]();
    if (EXEC_STACK.length) {
      CORE.async(runStack);
    } else {
      EXEC = false;
    }
  }
  /**
 @param {Function} fn
 @return {Array<string>}
 */
var parse_fn = function parse_fn(fn) {
    if (DEBUG) {
      GRAPH.register("CORE.parse_fn");
    }
    var fn_string = fn.toString();
    var fn_parameter = fn_string.substring(fn_string.indexOf("(") + 1, fn_string.indexOf(")"));
    var fn_content = fn_string.substring(fn_string.indexOf("{") + 1, fn_string.length - 1);
    var fn_pre = fn_content.substring(0, fn_content.indexOf("return "));
    var fn_return = fn_content.substring(fn_content.indexOf("return ") + 7, fn_content.length).replace(";", "");
    return [fn_parameter.split(","), fn_pre, fn_return];
  };
  /**
 @const
 @param {!string} query
 @return {(Array<Node>|NodeList)}
 */
CORE.query = function(query) {
    if (DEBUG) {
      GRAPH.register("CORE.query");
    }
    if (query.indexOf(" ") === -1) {
      var firstChar = query.charAt(0);
      if (firstChar === ".") {
        return CORE.getByClass(query.substring(1));
      }
      var dot_position = query.indexOf(".");
      if (dot_position > 0) {
        var class_name = query.substring(dot_position + 1);
        if (firstChar === "#") {
          var node = CORE.getById(query.substring(1, dot_position));
          return CORE.hasClass(node, class_name) ? [node] : [];
        } else {
          var nodes = [];
          var found_nodes = CORE.getByTag(query.substring(0, dot_position));
          for (var i = 0; i < found_nodes.length; i++) {
            if (CORE.hasClass(found_nodes[i], class_name)) {
              nodes[nodes.length] = found_nodes[i];
            }
          }
          return nodes;
        }
      } else {
        if (firstChar === "#") {
          return [CORE.getById(query.substring(1))];
        } else {
          return CORE.getByTag(query);
        }
      }
    } else {
      var parts = query.split(" ");
      if (parts.length === 2) {
        var part1 = parts[0];
        var part2 = parts[1];
        var firstChar1 = part1.charAt(0);
        var firstChar2 = part2.charAt(0);
        if (firstChar1 === "#") {
          if (firstChar2 === ".") {
            return CORE.getByClass(part2.substring(1), part1.substring(1));
          } else {
            if (firstChar2 !== "#") {
              return CORE.getByTag(part2, part1.substring(1));
            }
          }
        } else {
          if (firstChar1 === ".") {
            if (firstChar2 === "#") {
              return CORE.getByClass(part1.substring(1), part2.substring(1));
            }
          } else {
            if (firstChar2 === ".") {
              var nodes = [];
              var class_name = part2.substring(1);
              if (part1 === "document" || part1 === "body") {
                return CORE.getByClass(class_name);
              } else {
                var found_nodes = CORE.getByTag(part1);
                for (var i = 0; i < found_nodes.length; i++) {
                  nodes.concat(CORE.getByClass(class_name, found_nodes[i]));
                }
                return nodes;
              }
            } else {
              if (firstChar2 === "#") {
                return CORE.getByTag(part1, part2.substring(1));
              }
            }
          }
        }
      }
    }
    if (DEBUG) {
      APP.STATS.count_dom++;
    }
    return document.querySelectorAll(query);
  };
  /**
 @const
 @param {string} id
 @return {(Node|Element|HTMLElement|null)}
 */
CORE.getById = function getById(id) {
    if (DEBUG) {
      GRAPH.register("CORE.getById");
      if (CORE.DOM[id]) {
        APP.STATS.count_dom_cache++;
      } else {
        APP.STATS.count_dom++;
      }
    }
    if (CONFIG.DOM_CACHE_ENABLED) {
      return CORE.DOM[id] || (CORE.DOM[id] = document.getElementById(id));
    } else {
      return CORE.DOM[id] || document.getElementById(id);
    }
  };
  /**
 @const
 @param {string} classname
 @param {(Node|HTMLElement|Element|Window|string)=} context
 @return {NodeList}
 */
CORE.getByClass = function getByClass(classname, context) {
    if (DEBUG) {
      GRAPH.register("CORE.getByClass");
      APP.STATS.count_dom++;
    }
    return (context ? getNode(context) : document).getElementsByClassName(classname);
  };
  /**
 @const
 @param {string} tag
 @param {(Node|HTMLElement|Element|Window|string)=} context
 @return {NodeList}
 */
CORE.getByTag = function getByTag(tag, context) {
    if (DEBUG) {
      GRAPH.register("CORE.getByTag");
      APP.STATS.count_dom++;
    }
    return (context ? getNode(context) : document).getElementsByTagName(tag);
  };
  /**
 @const
 @param {(Node|HTMLElement|string)} node
 @return {string}
 */
CORE.getValue = function getValue(node) {
    if (DEBUG) {
      GRAPH.register("CORE.getValue");
    }
    return getNode(node).value;
  };
  /**
 @const
 @param {(Array<(Node|HTMLElement|string)>|NodeList|Node|HTMLElement|Window|string|null)} node
 @param {string} value
 */
CORE.setValue = function setValue(node, value) {
    if (DEBUG) {
      GRAPH.register("CORE.setValue");
    }
    if (typeof node === "string" || typeof node.length === "undefined") {
      getNode(/** @type {(Node|Window|null|string)} */ (node)).value = value;
    } else {
      for (var i = 0; i < node.length; i++) {
        getNode(/** @type {(Node|Window|null|string)} */ (node[i])).value = value;
      }
    }
  };
  /**
 @const
 @param {_pattern_struct} pattern
 @param {Object<?,(number|string)>=} data
 @return {Element}
 */
CORE.parseNode = function parseNode(pattern, data) {
    if (DEBUG) {
      GRAPH.register("CORE.parseNode");
    }
    var element = document.createElement(pattern.tag || "div");
    var attr = pattern.attr;
    if (attr) {
      for (var val in attr) {
        if (attr.hasOwnProperty(val)) {
          var attr_val = attr[val];
          var val_is_string = typeof attr_val === "string";
          if (val === "className" && val_is_string === false) {
            element.className = attr_val.join(" ");
          } else {
            if (val === "style" && val_is_string === false) {
              var style = "";
              for (var style_attr in attr[val]) {
                if (attr_val.hasOwnProperty(style_attr)) {
                  style += style_attr + "=" + attr_val[style_attr] + ";";
                }
              }
              element.setAttribute(val, style);
            } else {
              if (data && val === "data" && val_is_string === false) {
                for (var data_attr in attr_val) {
                  if (attr_val.hasOwnProperty(data_attr)) {
                    if (data_attr.indexOf(".") !== -1) {
                      var split = data_attr.split(".");
                      var model = split[0];
                      var index = split[1];
                      element.appendChild(document.createTextNode(data[model][index]));
                    } else {
                      element.appendChild(document.createTextNode(data[data_attr]));
                    }
                    break;
                  }
                }
              } else {
                element.setAttribute(val, attr_val);
              }
            }
          }
        }
      }
    }
    if (pattern.text) {
      element.appendChild(document.createTextNode(pattern.text));
    }
    return element;
  };
  /**
 @const
 @param {Array<_pattern_struct>} pattern
 @param {(Node|Element|DocumentFragment)} parent
 @param {Array<string,*>=} data
 @param {boolean=} recursive
 @return {(Node|Element|DocumentFragment)}
 */
CORE.buildPattern = function buildPattern(pattern, parent, data, recursive) {
    if (DEBUG) {
      GRAPH.register("CORE.buildPattern");
    }
    parent || (parent = document.createDocumentFragment());
    if (pattern) {
      if (typeof pattern.length === "undefined") {
        pattern = [pattern];
      }
      for (var i = 0; i < pattern.length; i++) {
        var element = CORE.parseNode(pattern[i], data);
        if (pattern[i].child) {
          CORE.buildPattern(pattern[i].child, element, data, true);
        }
        parent.appendChild(element);
      }
    }
    return parent;
  };
  CORE.buildData = function buildData(pattern, parent, data) {
    if (DEBUG) {
      GRAPH.register("CORE.buildData");
    }
    for (var i = 0; i < data.length; i++) {
      CORE.buildPattern(pattern, parent, data[i]);
    }
  };
  CORE.removeNodes = function(element) {
    if (DEBUG) {
      GRAPH.register("CORE.removeNodes");
    }
    var child;
    while (child = element.lastChild) {
      element.removeChild(child);
    }
  };
  /** @type {_cache_struct} */ CORE.CACHE = new CACHE;
  /** @type {Object<string,Element>} */ CORE.DOM = {};
  /**
 @public
 @param {_ajax_struct} params
 */
CORE.ajax = function ajax(params) {
    if (DEBUG) {
      GRAPH.register("CORE.ajax");
    }
    ajaxHandler(params.type || "GET", params.url || "/", params.params || "", params.success, params.error, params.header, params.async, params.clear, params.cache);
  };
  CORE.paramsToString = function(params) {
    if (DEBUG) {
      GRAPH.register("CORE.paramsToString");
    }
    var str = "";
    for (var property in params) {
      if (params.hasOwnProperty(property)) {
        str += (str ? "&" : "") + property + "=" + encodeURIComponent(params[property]);
      }
    }
    return str;
  };
  /**
 @param {Array<(string|number)>} array
 @param {string} field
 @return {Array<(string|number)>}
 */
CORE.unique = function(array, field) {
    if (DEBUG) {
      GRAPH.register("CORE.unique");
    }
    var checkDuplicates = {};
    var unqiue_array = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i][field];
      checkDuplicates[value] || (checkDuplicates[value] = true) && (unqiue_array[unqiue_array.length] = value);
    }
    return unqiue_array;
  };
  /**
 @param {Array<*>} array
 @return {Array<*>}
 */
CORE.reverse = function(array) {
    if (DEBUG) {
      GRAPH.register("CORE.reverse");
    }
    var length = array.length;
    var reversed_array = new Array(length);
    for (var i = 0; i < length; i++) {
      reversed_array[i] = array[length - i - 1];
    }
    return reversed_array;
  };
  /**
 @param {Date} date
 @return {string}
 */
CORE.formatDate = function(date) {
    if (DEBUG) {
      GRAPH.register("CORE.formatDate");
    }
    var d = new Date(date), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };
  CORE.formatNumber = function(n, c, d, t) {
    if (DEBUG) {
      GRAPH.register("CORE.formatNumber");
    }
    c = typeof c === "number" ? c : 2;
    d = d || ".";
    t = t || ",";
    var i = parseInt(n = CORE.Math.abs(+n || 0).toFixed(c), 10) + "", j = i.length;
    j = j > 3 ? j % 3 : 0;
    return (n < 0 ? "-" : "") + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + CORE.Math.abs(n - i).toFixed(c).slice(2) : "");
  };
  /**
 @param {Array<string>} images
 */
CORE.preloadImages = function(images) {
    if (DEBUG) {
      GRAPH.register("CORE.preloadImages");
    }
    var container = CORE.getById("image-preload") || function() {
      var node = CORE.parseNode(/** @type {_pattern_struct} */ ({tag:"div", id:"image-preload", attr:{"style":"display:none;position:absolute;height:0px;width:0px;overflow:hidden;pointer-events:none"}}));
      document.body.appendChild(node);
      return node;
    }();
    var img;
    for (var i = 0; i < images.length; i++) {
      img = new Image;
      img.setAttribute("lazyload", "true");
      img.src = images[i];
      CORE.setStyle(img, {"display":"none", "height":"0px", "width":"0px"});
      container.appendChild(img);
    }
  };
  /**
 @param {Function} fn
 @param {number=} delay
 @return {(number|null)}
 */
CORE.async = function(fn, delay) {
    if (DEBUG) {
      GRAPH.register("CORE.async");
    }
    return window.setTimeout(fn, delay);
  };
  /**
 @param {(Array<Function>|Function)} fn
 @param {number=} delay
 */
CORE.stack = function(fn, delay) {
    if (DEBUG) {
      GRAPH.register("CORE.stack");
    }
    var len = EXEC_STACK.length;
    if (fn.constructor === Array) {
      for (var i = 0; i < fn.length; i++) {
        EXEC_STACK[len++] = fn[i];
      }
    } else {
      EXEC_STACK[len] = fn;
    }
    if (!EXEC) {
      EXEC = true;
      CORE.async(runStack, delay);
    }
  };
  CORE.getStackLength = function() {
    return EXEC_STACK.length;
  };
  CORE.loadScript = function loadScript(src, callback) {
    var ready = false;
    var ready_fn = callback ? function() {
      if (!ready && (!this.readyState || this.readyState === "complete")) {
        ready = true;
        if (callback) {
          callback();
        }
      }
    } : void 0;
    document.body.appendChild(CORE.parseNode({tag:"script", attr:{"type":"text/javascript", "async":true, "src":src, "onload":ready_fn, "onreadystatechange":ready_fn}}));
  };
  CORE.loadStyle = function loadStyle(src, media) {
    document.body.appendChild(CORE.parseNode({tag:"link", attr:{"rel":"stylesheet", "type":"text/css", "href":src, "media":media || "all"}}));
  };
  CORE.time = function() {
    if (DEBUG) {
      GRAPH.register("CORE.time");
    }
    var time = window["performance"] || window[prefix + "Performance"] || {};
    time.now || (time.now = time["now"] || time[prefix + "Now"] || Date["now"] || function() {
      return (new Date).getTime();
    });
    return time;
  }();
  CORE.capitalize = capitalize;
  CORE.prefix = prefix;
  CORE.crc32 = function(str) {
    if (DEBUG) {
      GRAPH.register("CORE.crc32");
    }
    var crc = 0 ^ -1;
    for (var i = 0; i < str.length; i++) {
      crc = crc >>> 8 ^ crcTable[(crc ^ str.charCodeAt(i)) & 255];
    }
    return (crc ^ -1) >>> 0;
  };
  /**
 @param {Function} fn
 @return {Function}
 */
CORE.registerEach = function registerEach(fn) {
    if (DEBUG) {
      GRAPH.register("CORE.registerEach");
    }
    var parsed_fn = parse_fn(fn);
    var fn_content = "var length = this.length;" + "for(var i = 0; i < length; i++){" + "var " + parsed_fn[0][0] + " = this[i];" + parsed_fn[1] + "}";
    return parsed_fn[0].length > 1 ? Function(parsed_fn[0][1], fn_content) : Function(fn_content);
  };
  /**
 @param {Function} fn
 @return {Function}
 */
CORE.registerMap = function registerMap(fn) {
    if (DEBUG) {
      GRAPH.register("CORE.registerMap");
    }
    var parsed_fn = parse_fn(fn);
    var fn_content = "var length = this.length, copy = new Array(length);" + "for(var i = 0; i < length; i++){" + "var " + parsed_fn[0][0] + " = this[i];" + parsed_fn[1] + "copy[i] = " + parsed_fn[2] + ";" + "}" + "return copy;";
    return parsed_fn[0].length > 1 ? Function(parsed_fn[0][1], fn_content) : Function(fn_content);
  };
  /**
 @param {Function} fn
 @return {Function}
 */
CORE.registerFilter = function registerFilter(fn) {
    if (DEBUG) {
      GRAPH.register("CORE.registerFilter");
    }
    var parsed_fn = parse_fn(fn);
    var fn_content = "var length = this.length, copy = [], count = 0;" + "for(var i = 0; i < length; i++){" + "var " + parsed_fn[0][0] + " = this[i];" + parsed_fn[1] + "if(" + parsed_fn[2] + ") copy[count++] = this[i];" + "}" + "return copy;";
    return parsed_fn[0].length > 1 ? Function(parsed_fn[0][1], fn_content) : Function(fn_content);
  };
  CORE.contains = function(array, item) {
    if (DEBUG) {
      GRAPH.register("CORE.contains");
    }
    var i = array.length;
    while (i--) {
      if (array[i] === item) {
        return true;
      }
    }
    return false;
  };
  /**
 @const
 @param {Object<string,*>} data
 @return {Array<string>}
 */
CORE.getKeys = function(data) {
    if (DEBUG) {
      GRAPH.register("CORE.getKeys");
    }
    if (data) {
      if (Object.keys) {
        return Object.keys(data);
      }
      var tmp = [], length = 0;
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          tmp[length++] = key;
        }
      }
      return tmp;
    }
    return [];
  };
  /**
 @param {!string} src
 @param {!Function} callback
 @param {string=} format
 @param {number=} quality
 */
CORE.imageToDataUrl = function(src, callback, format, quality) {
    if (DEBUG) {
      GRAPH.register("CORE.imageToDataUrl");
    }
    var img = new Image;
    /**
 @this {Image}
 */
img.crossOrigin = "anonymous";
    img.onload = function() {
      var canvas = document.createElement("canvas");
      canvas.height = /** @type {Image} */ (this).height;
      canvas.width = /** @type {Image} */ (this).width;
      canvas.getContext("2d").drawImage(this, 0, 0);
      callback(canvas.toDataURL(format || "image/jpeg", quality || 1.0));
    };
    img.src = src;
  };
  /** @const @struct */ CORE.Math = {/**
 @param {(!Array<number>|number)} a
 @param {!number=} b
 @return {!number}
 */
min:function min(a, b) {
    if (DEBUG) {
      GRAPH.register("CORE.Math.min");
    }
    if (a.constructor === Array) {
      var min = a[0];
      for (var i = 0; i < a.length; i++) {
        if (i === 0) {
          min = a[0];
        } else {
          if (a[i] < min) {
            min = a[i];
          }
        }
      }
      return min;
    } else {
      return /** @type {number} */ (b < a ? b : a);
    }
  }, /**
 @param {(!Array<number>|number)} a
 @param {!number=} b
 @return {!number}
 */
max:function max(a, b) {
    if (DEBUG) {
      GRAPH.register("CORE.Math.max");
    }
    if (a.constructor === Array) {
      var max = a[0];
      for (var i = 0; i < a.length; i++) {
        if (i === 0) {
          max = a[0];
        } else {
          if (a[i] > max) {
            max = a[i];
          }
        }
      }
      return max;
    } else {
      return /** @type {number} */ (a < b ? b : a);
    }
  }, rad:window.Math.PI / 180, cos:window.Math.cos, sin:window.Math.sin, rnd:window.Math.random, abs:function abs(a) {
    if (DEBUG) {
      GRAPH.register("CORE.Math.abs");
    }
    return a < 0 ? -a : a;
  }};
  /** @const @struct */ CORE.Browser = {/** @type {boolean} */ isOpera:!!window["opera"] || navigator.userAgent.indexOf(" OPR/") >= 0, /** @type {boolean} */ isFirefox:typeof window["InstallTrigger"] !== "undefined", /** @type {boolean} */ isSafari:Object.prototype.toString.call(window["HTMLElement"]).indexOf("Constructor") > 0, /** @type {boolean} */ isMSIE:false || !!document["documentMode"]};
  /** @type {boolean} */ CORE.Browser.isChrome = !!window["chrome"] && !CORE.Browser.isOpera;
  /** @const @struct */ CORE.System = {/** @type {boolean} */ isIphone:!!navigator.userAgent.match(/iPhone/i), /** @type {boolean} */ isIpod:!!navigator.userAgent.match(/iPod/i), /** @type {boolean} */ isIpad:!!navigator.userAgent.match(/iPad/i), /** @type {boolean} */ isAndroid:!!navigator.userAgent.match(/Android/i)};
  /** @type {boolean} */ CORE.System.isIOS = CORE.System.isIphone || CORE.System.isIpod || CORE.System.isIpad;
  /** @type {boolean} */ CORE.System.isMobile = CORE.System.isIOS || CORE.System.isAndroid;
})();





/** @struct */ var APP = {MODEL:{}, /** @type {Object<string,Array<_model_helper>>} */ VIEW:{}, /** @type {Object<string,Array<_template_struct>>} */ HTML:{}, /**
 @implements {_controller_struct}
 */
CONTROLLER:{}, ROUTE:{}, PAYLOAD:{}, EVENT:{}, HANDLER:{}, HELPER:{}, /** @type {_storage_struct} */ STORAGE:{DATA:{}, CACHE:{}, SESSION:{}, VIEW:/** @type {_storage_struct} */ ({}), /**
 @param {string} val
 @return {string}
 */
compress:function(val) {
  return val;
}, /**
 @param {string} val
 @return {string}
 */
decompress:function(val) {
  return val;
}}, MAPPER:{}, LAYOUT:{}, VIEWPORT:{}, WORKER:{}, DEVICE:{}, LANG:{}, CONFIG:{LANG:"en", PROC:0, GZIP:false, PASSIVE_EVENTS:false, EVENT_OPTIONS:false, SHOW_DEBUG:false, SHOW_GRAPH:false, SHOW_STATS:false, LAYOUT:[]}, VARS:{CURRENT_USER:{}, HEADER:{}, AUTH:null, ZOOM:1, WIDTH:0, HEIGHT:0, DPR:Math.max(1, Math.min(3, Math.round(window["devicePixelRatio"] || 1)))}, SETTINGS:/** @type {_storage_struct} */ ({}), CACHE:{}, CRC32:{}, PLUGIN:{}, INTERFACE:{}, ADAPTER:{}, SERVICE:{}, REQUIRE:{}, CHANGELOG:{},
MIGRATE:{}, INIT:function() {
}, SETUP:function() {
  APP.MAIN();
}, MAIN:function() {
  if (DEBUG) {
    CORE.console.log("Error: no main function found!");
  }
}};















if (DEBUG) {
  var DEBUG = function() {
    (function initDebugMode() {
      var performance = window["performance"] || {};
      performance = performance["memory"] || (performance["memory"] = {});
      APP.STATS = {heap_limit:performance["jsHeapSizeLimit"] || 0, heap_total:performance["totalJSHeapSize"] || 0, heap_used:performance["usedJSHeapSize"] || 0, count_draw:0, count_dom:0, count_paint:0, count_css:0, count_class:0, count_html:0, count_render:0, count_request:0, count_event:0, count_bubble:0, count_error:0, count_dom_cache:0, count_css_cache:0, count_class_cache:0, count_html_cache:0, count_render_cache:0, count_mapper_cache:0, count_event_cache:0, count_bubble_cache:0, count_mapper:0,
      time_calc:0, time_render:0, time_draw:0, time_request:0, time_event:0};
      CORE.buildPattern(/** @type {Array<_pattern_struct>} */ ([{tag:"div", attr:{"id":"debug-log"}}, {tag:"div", attr:{"id":"debug-graph"}, child:[{tag:"div", attr:{"id":"debug-graph-count"}}, {tag:"div", attr:{"id":"debug-graph-trace"}}]}, {tag:"div", attr:{"id":"debug-stats"}, child:[{tag:"span", text:"FPS: "}, {tag:"span", attr:{"id":"debug-fps"}}, {tag:"br"}, {tag:"br"}, {tag:"span", text:"Models Stored: "}, {tag:"span", attr:{"id":"debug-models-stored"}}, {tag:"br"}, {tag:"span", text:"Models Cached: "},
      {tag:"span", attr:{"id":"debug-models-cached"}}, {tag:"br"}, {tag:"br"}, {tag:"span", text:"Count DOM: "}, {tag:"span", attr:{"id":"debug-count-dom"}}, {tag:"br"}, {tag:"span", text:"Count Paint: "}, {tag:"span", attr:{"id":"debug-count-paint"}}, {tag:"br"}, {tag:"span", text:"Count CSS: "}, {tag:"span", attr:{"id":"debug-count-css"}}, {tag:"br"}, {tag:"span", text:"Count Class: "}, {tag:"span", attr:{"id":"debug-count-class"}}, {tag:"br"}, {tag:"span", text:"Count HTML: "}, {tag:"span", attr:{"id":"debug-count-html"}},
      {tag:"br"}, {tag:"span", text:"Count Render: "}, {tag:"span", attr:{"id":"debug-count-render"}}, {tag:"br"}, {tag:"span", text:"Count Mapper: "}, {tag:"span", attr:{"id":"debug-count-mapper"}}, {tag:"br"}, {tag:"span", text:"Count Events: "}, {tag:"span", attr:{"id":"debug-count-event"}}, {tag:"br"}, {tag:"span", text:"Count Bubble: "}, {tag:"span", attr:{"id":"debug-count-bubble"}}, {tag:"br"}, {tag:"span", text:"Count Error: "}, {tag:"span", attr:{"id":"debug-count-error"}}, {tag:"br"}, {tag:"br"},
      {tag:"span", text:"Time Calc: "}, {tag:"span", attr:{"id":"debug-time-calc"}}, {tag:"br"}, {tag:"span", text:"Time Render: "}, {tag:"span", attr:{"id":"debug-time-render"}}, {tag:"br"}, {tag:"span", text:"Time Draw: "}, {tag:"span", attr:{"id":"debug-time-draw"}}, {tag:"br"}, {tag:"span", text:"Time Event: "}, {tag:"span", attr:{"id":"debug-time-event"}}, {tag:"br"}, {tag:"span", text:"Time Server: "}, {tag:"span", attr:{"id":"debug-time-request"}}, {tag:"br"}, {tag:"br"}, {tag:"span", text:"Paint Stack: "},
      {tag:"span", attr:{"id":"debug-paint-stack"}}, {tag:"br"}, {tag:"span", text:"CSS Stack: "}, {tag:"span", attr:{"id":"debug-css-stack"}}, {tag:"br"}, {tag:"span", text:"Class Stack: "}, {tag:"span", attr:{"id":"debug-class-stack"}}, {tag:"br"}, {tag:"span", text:"HTML Stack: "}, {tag:"span", attr:{"id":"debug-html-stack"}}, {tag:"br"}, {tag:"span", text:"Async Stack: "}, {tag:"span", attr:{"id":"debug-async-stack"}}, {tag:"br"}, {tag:"br"}, {tag:"span", text:"Heap Limit: "}, {tag:"span", attr:{"id":"debug-heap-limit"}},
      {tag:"br"}, {tag:"span", text:"Heap Total: "}, {tag:"span", attr:{"id":"debug-heap-total"}}, {tag:"br"}, {tag:"span", text:"Heap Used: "}, {tag:"span", attr:{"id":"debug-heap-used"}}, {tag:"br"}, {tag:"span", text:"Storage: "}, {tag:"span", attr:{"id":"debug-storage"}}]}]), window.document.body);
      /**
 @param {string} errorMsg
 @param {string} url
 @param {number} lineNumber
 */
window.onerror = function(errorMsg, url, lineNumber) {
        APP.STATS.count_error++;
        if (DEBUG) {
          CORE.console.log(errorMsg + " Script: " + url + " Line: " + lineNumber);
        }
      };
    })();
    /** @type {number} */ var debug_paint_stack = 0;
    /** @type {number} */ var debug_css_stack = 0;
    /** @type {number} */ var debug_class_stack = 0;
    /** @type {number} */ var debug_html_stack = 0;
    /** @type {number} */ var debug_async_stack = 0;
    return {showStatistic:function(time, last_time) {
      var count_dom = APP.STATS.count_dom;
      var count_dom_cache = APP.STATS.count_dom_cache;
      if (CONFIG.SHOW_DEBUG || APP.CONFIG.SHOW_DEBUG) {
        CORE.getById("debug-fps").textContent = 1000 / (time - last_time) + 0.5 | 0;
        var debug_models_stored = 0;
        var debug_models_cached = 0;
        for (var model in APP.MODEL) {
          if (APP.MODEL.hasOwnProperty(model)) {
            debug_models_stored += CORE.getKeys(/** @type {_model_helper} */ (APP.MODEL[model]).data).length;
            debug_models_cached += CORE.getKeys(/** @type {_model_helper} */ (APP.MODEL[model]).cache).length;
          }
        }
        CORE.getById("debug-models-stored").textContent = debug_models_stored;
        CORE.getById("debug-models-cached").textContent = debug_models_cached;
        CORE.getById("debug-count-dom").textContent = count_dom + " (-" + count_dom_cache + ")";
        CORE.getById("debug-count-paint").textContent = APP.STATS.count_paint + " (-0)";
        CORE.getById("debug-count-css").textContent = APP.STATS.count_css + " (-" + APP.STATS.count_css_cache + ")";
        CORE.getById("debug-count-class").textContent = APP.STATS.count_class + " (-" + APP.STATS.count_class_cache + ")";
        CORE.getById("debug-count-html").textContent = APP.STATS.count_html + " (-" + APP.STATS.count_html_cache + ")";
        CORE.getById("debug-count-render").textContent = APP.STATS.count_render + " (-" + APP.STATS.count_render_cache + ")";
        CORE.getById("debug-count-mapper").textContent = APP.STATS.count_mapper + " (-" + APP.STATS.count_mapper_cache + ")";
        CORE.getById("debug-count-event").textContent = APP.STATS.count_event + " (-" + APP.STATS.count_event_cache + ")";
        CORE.getById("debug-count-bubble").textContent = APP.STATS.count_bubble + " (-" + APP.STATS.count_bubble_cache + ")";
        CORE.getById("debug-count-error").textContent = APP.STATS.count_error;
        CORE.getById("debug-time-calc").textContent = (APP.STATS.time_calc * 100 | 0) / 100 + " ms (~0 ms)";
        CORE.getById("debug-time-render").textContent = (APP.STATS.time_render * 100 | 0) / 100 + " ms (~" + (APP.STATS.time_render / APP.STATS.count_render * 100 | 0) / 100 + " ms)";
        CORE.getById("debug-time-draw").textContent = (APP.STATS.time_draw * 100 | 0) / 100 + " ms (~" + (APP.STATS.time_draw / APP.STATS.count_draw * 100 | 0) / 100 + " ms)";
        CORE.getById("debug-time-event").textContent = (APP.STATS.time_event * 100 | 0) / 100 + " ms (~" + (APP.STATS.time_event / APP.STATS.count_event * 100 | 0) / 100 + " ms)";
        CORE.getById("debug-time-request").textContent = (APP.STATS.time_request * 100 | 0) / 100 + " ms (~" + (APP.STATS.time_request / APP.STATS.count_request * 100 | 0) / 100 + " ms)";
        var paint_stack_len;
        var css_stack_len;
        var class_stack_len;
        var html_stack_len;
        var async_stack_len;
        if (paint_stack_len = APP.STATS.paint_stack_len) {
          debug_paint_stack += paint_stack_len;
          CORE.async(function() {
            debug_paint_stack -= paint_stack_len;
          }, 500);
        }
        if (css_stack_len = APP.STATS.css_stack_len) {
          debug_css_stack += css_stack_len;
          CORE.async(function() {
            debug_css_stack -= css_stack_len;
          }, 500);
        }
        if (class_stack_len = APP.STATS.class_stack_len) {
          debug_class_stack += class_stack_len;
          CORE.async(function() {
            debug_class_stack -= class_stack_len;
          }, 500);
        }
        if (html_stack_len = APP.STATS.html_stack_len) {
          debug_html_stack += html_stack_len;
          CORE.async(function() {
            debug_html_stack -= html_stack_len;
          }, 500);
        }
        if (async_stack_len = APP.STATS.async_stack_len) {
          debug_async_stack += async_stack_len;
          CORE.async(function() {
            debug_async_stack -= async_stack_len;
          }, 250);
        }
        CORE.getById("debug-paint-stack").textContent = debug_paint_stack + "";
        CORE.getById("debug-css-stack").textContent = debug_css_stack + "";
        CORE.getById("debug-class-stack").textContent = debug_class_stack + "";
        CORE.getById("debug-html-stack").textContent = debug_html_stack + "";
        CORE.getById("debug-async-stack").textContent = debug_async_stack + "";
        var performance = window["performance"] || {};
        performance = performance["memory"] || (performance["memory"] = {});
        CORE.getById("debug-heap-limit").textContent = (performance["jsHeapSizeLimit"] / 1024 / 1024 * 100 | 0) / 100 + " Mb" || "?";
        CORE.getById("debug-heap-total").textContent = (performance["totalJSHeapSize"] / 1024 / 1024 * 100 | 0) / 100 + " Mb" || "?";
        CORE.getById("debug-heap-used").textContent = (performance["usedJSHeapSize"] / 1024 / 1024 * 100 | 0) / 100 + " Mb (" + (100 / performance["totalJSHeapSize"] * performance["usedJSHeapSize"] * 100 | 0) / 100 + "%)" || "?";
        CORE.getById("debug-storage").textContent = (APP.VARS.USED_STORAGE / 1024 / 1024 * 100 | 0) / 100 + " / " + (APP.VARS.MAX_STORAGE / 1024 / 1024 * 100 | 0) / 100 + " Mb (" + (100 / APP.VARS.MAX_STORAGE * APP.VARS.USED_STORAGE * 100 | 0) / 100 + "%)";
        APP.STATS.count_dom = count_dom;
        APP.STATS.count_dom_cache = count_dom_cache;
      }
    }};
  }();
}
;



(function() {
  /** @type {string} */ var prefix = CORE.prefix;
  /** @type {string} */ var prefix_css = CORE.capitalize(prefix);
  /** @type {(Array<number>|null)} */ var PAINT_TIMER = null;
  /** @type {boolean} */ var PAINT_EXEC = false;
  /** @type {Array<Function>} */ var PAINT_STACK = [];
  /** @type {Array<(HTMLElement|null)>} */ var CSS_STACK = [];
  /** @type {Array<(HTMLElement|null)>} */ var CLASS_STACK = [];
  /** @type {Array<(HTMLElement|null)>} */ var HTML_STACK = [];
  /** @type {(number|null)} */ var last_time = null;
  /**
 @const
 @param {number} time
 */
var processPaint = function(time) {
    PAINT_EXEC = true;
    PAINT_TIMER = requestFrame(processPaint);
    if (DEBUG) {
      GRAPH.register("CORE.processPaint");
      var debug_time = PAINT_STACK.length || CSS_STACK.length || HTML_STACK.length || CLASS_STACK.length ? CORE.time.now() : 0;
    }
    var len, i;
    if (len = HTML_STACK.length) {
      for (i = 0; i < len; i++) {
        var current_node = HTML_STACK[i];
        if (current_node["_html_new"] !== false) {
          if (current_node["_html_new"] !== current_node["_html"]) {
            current_node.innerHTML = current_node["_html"] = current_node["_html_new"];
            if (DEBUG) {
              APP.STATS.count_html++;
            }
          } else {
            if (DEBUG) {
              APP.STATS.count_html_cache++;
            }
          }
          current_node["_html_new"] = false;
        } else {
          if (DEBUG) {
            APP.STATS.count_html_cache++;
          }
        }
      }
      HTML_STACK = [];
    }
    if (len = CSS_STACK.length) {
      for (i = 0; i < len; i++) {
        var current_node = CSS_STACK[i];
        var current_cache = current_node["_style"];
        var current_cache_new = current_node["_style_new"];
        var current_cache_keys = current_node["_style_keys"];
        var style = null;
        for (var x = 0; x < current_cache_keys.length; x++) {
          var key = current_cache_keys[x];
          var current_cache_value = current_cache_new[key];
          if (current_cache_value !== false) {
            if (current_cache_value !== current_cache[key]) {
              (style || (style = current_node.style))[key] = current_cache[key] = current_cache_value;
              if (DEBUG) {
                APP.STATS.count_css++;
              }
            } else {
              if (DEBUG) {
                APP.STATS.count_css_cache++;
              }
            }
            current_cache_new[key] = false;
          } else {
            if (DEBUG) {
              APP.STATS.count_css_cache++;
            }
          }
        }
        current_node["_style_keys"] = [];
      }
      if (DEBUG) {
        APP.STATS.count_css += len;
      }
      CSS_STACK = [];
    }
    if (len = CLASS_STACK.length) {
      for (i = 0; i < len; i++) {
        var current_node = CLASS_STACK[i];
        var current_cache = current_node["_class"];
        var current_cache_new = current_node["_class_new"];
        var current_cache_keys = current_node["_class_keys"];
        var add_classes = [];
        var remove_classes = [];
        for (var x = 0; x < current_cache_keys.length; x++) {
          var key = current_cache_keys[x];
          if (current_cache_new[key] !== false) {
            if (current_cache[key] !== current_cache_new[key]) {
              if (current_cache_new[key] === 1) {
                add_classes[add_classes.length] = key;
                current_cache[key] = 1;
              } else {
                remove_classes[remove_classes.length] = key;
                current_cache[key] = 0;
              }
              if (DEBUG) {
                APP.STATS.count_class++;
              }
            } else {
              if (DEBUG) {
                APP.STATS.count_class_cache++;
              }
            }
            current_cache_new[key] = false;
          } else {
            if (DEBUG) {
              APP.STATS.count_class_cache++;
            }
          }
        }
        if (remove_classes.length) {
          current_node.classList.remove.apply(current_node.classList, remove_classes);
        }
        if (add_classes.length) {
          current_node.classList.add.apply(current_node.classList, add_classes);
        }
        current_node["_class_keys"] = [];
      }
      if (DEBUG) {
        APP.STATS.count_class += len;
      }
      CLASS_STACK = [];
    }
    if (len = PAINT_STACK.length) {
      for (i = 0; i < len; i++) {
        PAINT_STACK[i](time);
      }
      PAINT_STACK.splice(0, len);
      if (DEBUG) {
        APP.STATS.count_paint += len;
      }
    }
    if (DEBUG) {
      if (debug_time > 0) {
        APP.STATS.time_draw += CORE.time.now() - debug_time;
      }
      APP.STATS.count_draw++;
      APP.STATS.paint_stack_len = PAINT_STACK.length;
      APP.STATS.css_stack_len = CSS_STACK.length;
      APP.STATS.class_stack_len = CLASS_STACK.length;
      APP.STATS.html_stack_len = HTML_STACK.length;
      APP.STATS.async_stack_len = CORE.getStackLength();
      DEBUG.showStatistic(time, last_time);
      last_time = time;
    }
    if (!APP.CONFIG.SHOW_STATS && !PAINT_STACK.length && !CSS_STACK.length && !HTML_STACK.length && !CLASS_STACK.length) {
      clearFrame(PAINT_TIMER);
      PAINT_TIMER = null;
    }
    PAINT_EXEC = false;
  };
  /** @const */ var requestFrame = window.requestAnimationFrame || window[prefix + "RequestAnimationFrame"] || function(fn) {
    return CORE.async(function() {
      fn(CORE.time.now());
    }, 16.667);
  };
  /** @const */ var clearFrame = window.cancelAnimationFrame || window[prefix + "CancelAnimationFrame"] || function(id) {
    return null;
  };
  /**
 @const
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {string} class_name
 @param {boolean=} search_and_remove
 @return {boolean}
 */
CORE.hasClass = function hasClass(node, class_name, search_and_remove) {
    if (DEBUG) {
      GRAPH.register("CORE.hasClass");
    }
    node = CORE.getNode(node);
    var current_cache_new;
    if (current_cache_new = node["_class_new"]) {
      if (current_cache_new[class_name] !== false && CORE.isType(current_cache_new[class_name])) {
        return current_cache_new[class_name] ? true : false;
      }
    } else {
      node["_class_new"] = {};
    }
    var current_cache;
    if (current_cache = node["_class"]) {
      if (CORE.isType(current_cache[class_name])) {
        return current_cache[class_name] ? true : false;
      }
    } else {
      current_cache = node["_class"] = {};
    }
    return (current_cache[class_name] = node.classList.contains(class_name) ? 1 : 0) ? true : false;
  };
  /**
 @const
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|Element|HTMLDocument|Window|null|string)} node
 @param {(Array<string>|string)} class_name
 @param {Function=} callback
 */
CORE.addClass = function addClass(node, class_name, callback) {
    if (DEBUG) {
      GRAPH.register("CORE.addClass");
    }
    if (CORE.isType(node, "string")) {
      node = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node));
    } else {
      if (node.length >= 0) {
        var i = 0;
        while (i < node.length) {
          CORE.addClass(node[i++], class_name, callback && i === node.length - 1 ? callback : void 0);
        }
        return;
      }
    }
    if (CORE.isType(class_name, "string")) {
      class_name = [class_name];
    }
    var current_cache = node["_class"] || (node["_class"] = {});
    var current_cache_new = node["_class_new"] || (node["_class_new"] = {});
    var current_cache_keys = node["_class_keys"] || (node["_class_keys"] = []);
    var len = CLASS_STACK.length;
    var keys_len = current_cache_keys.length;
    for (var i = 0; i < class_name.length; i++) {
      var current_class = class_name[i];
      if (current_cache[current_class] !== 1) {
        if (current_cache_new[current_class] !== 1) {
          if (!keys_len) {
            CLASS_STACK[len++] = /** @type {HTMLElement} */ (node);
          }
          current_cache_new[current_class] = 1;
          if (!CORE.contains(current_cache_keys, current_class)) {
            current_cache_keys[keys_len++] = current_class;
          }
        } else {
          if (DEBUG) {
            APP.STATS.count_class_cache++;
          }
        }
      } else {
        current_cache_new[current_class] = false;
        if (DEBUG) {
          APP.STATS.count_class_cache++;
        }
      }
    }
    if (callback) {
      CORE.paint(function() {
        callback.call(node);
      });
    }
    if (len || callback) {
      PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
    }
  };
  /**
 @const
 @param {!string} class_name
 @param {(!Node|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {Function=} callback
 */
CORE.addByClass = function addByClass(class_name, node, callback) {
    if (DEBUG) {
      GRAPH.register("CORE.addByClass");
    }
    CORE.addClass(CORE.getByClass(class_name, node), class_name, callback);
  };
  /**
 @const
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {(Array<string>|string)} class_name
 @param {Function=} callback
 */
CORE.removeClass = function removeClass(node, class_name, callback) {
    if (DEBUG) {
      GRAPH.register("CORE.removeClass");
    }
    if (CORE.isType(node, "string")) {
      node = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node));
    } else {
      if (node.length >= 0) {
        var i = 0;
        while (i < node.length) {
          CORE.removeClass(node[i++], class_name, callback && i === node.length - 1 ? callback : void 0);
        }
        return;
      }
    }
    if (CORE.isType(class_name, "string")) {
      class_name = [class_name];
    }
    var current_cache = node["_class"] || (node["_class"] = {});
    var current_cache_new = node["_class_new"] || (node["_class_new"] = {});
    var current_cache_keys = node["_class_keys"] || (node["_class_keys"] = []);
    var len = CLASS_STACK.length;
    var keys_len = current_cache_keys.length;
    for (var i = 0; i < class_name.length; i++) {
      var current_class = class_name[i];
      if (current_cache[current_class] !== 0) {
        if (current_cache_new[current_class] !== 0) {
          if (!keys_len) {
            CLASS_STACK[len++] = /** @type {HTMLElement} */ (node);
          }
          current_cache_new[current_class] = 0;
          if (!CORE.contains(current_cache_keys, current_class)) {
            current_cache_keys[keys_len++] = current_class;
          }
        } else {
          if (DEBUG) {
            APP.STATS.count_class_cache++;
          }
        }
      } else {
        current_cache_new[current_class] = false;
        if (DEBUG) {
          APP.STATS.count_class_cache++;
        }
      }
    }
    if (callback) {
      CORE.paint(function() {
        callback.call(node);
      });
    }
    if (len || callback) {
      PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
    }
  };
  /**
 @const
 @param {!string} class_name
 @param {(!Node|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {Function=} callback
 */
CORE.removeByClass = function removeByClass(class_name, node, callback) {
    if (DEBUG) {
      GRAPH.register("CORE.removeByClass");
    }
    CORE.removeClass(CORE.getByClass(class_name, node), class_name, callback);
  };
  /**
 @const
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {string} class_name
 @param {Function=} callback
 @param {boolean=} toggle_state
 */
CORE.toggleClass = function toggleClass(node, class_name, callback, toggle_state) {
    if (DEBUG) {
      GRAPH.register("CORE.toggleClass");
    }
    if (CORE.isType(toggle_state)) {
      if (toggle_state) {
        CORE.addClass(node, class_name, callback);
      } else {
        CORE.removeClass(node, class_name, callback);
      }
      return;
    } else {
      if (CORE.isType(node, "string")) {
        node = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node));
      } else {
        if (node.length >= 0) {
          var i = 0;
          while (i < node.length) {
            CORE.toggleClass(node[i++], class_name, callback && i === node.length - 1 ? callback : void 0);
          }
          return;
        }
      }
    }
    var current_cache = node["_class"] || (node["_class"] = {});
    var current_cache_new = node["_class_new"] || (node["_class_new"] = {});
    var current_cache_keys = node["_class_keys"] || (node["_class_keys"] = []);
    var len = CLASS_STACK.length;
    var keys_len = current_cache_keys.length;
    if (CORE.isType(current_cache_new[class_name])) {
      if (current_cache_new[class_name] === false || !(current_cache[class_name] === 0 && current_cache_new[class_name] === 1 || current_cache[class_name] === 1 && current_cache_new[class_name] === 0)) {
        if (!keys_len) {
          CLASS_STACK[len++] = /** @type {HTMLElement} */ (node);
        }
        if (!CORE.contains(current_cache_keys, class_name)) {
          current_cache_keys[keys_len] = class_name;
        }
        current_cache_new[class_name] = (current_cache_new[class_name] === false ? current_cache : current_cache_new)[class_name] ? 0 : 1;
      } else {
        current_cache_new[class_name] = false;
        if (DEBUG) {
          APP.STATS.count_class_cache++;
        }
      }
    } else {
      if (!keys_len) {
        CLASS_STACK[len++] = /** @type {HTMLElement} */ (node);
      }
      if (!CORE.isType(current_cache[class_name])) {
        current_cache[class_name] = node.classList.contains(class_name) ? 1 : 0;
      }
      if (!CORE.contains(current_cache_keys, class_name)) {
        current_cache_keys[keys_len] = class_name;
      }
      current_cache_new[class_name] = current_cache[class_name] ? 0 : 1;
    }
    if (callback) {
      CORE.paint(function() {
        callback.call(node);
      });
    }
    if (len || callback) {
      PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
    }
  };
  /**
 @const
 @param {!string} class_name
 @param {(!Node|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {Function=} callback
 */
CORE.toggleByClass = function toggleByClass(class_name, node, callback) {
    if (DEBUG) {
      GRAPH.register("CORE.toggleByClass");
    }
    CORE.toggleClass(CORE.getByClass(class_name, node), class_name, callback);
  };
  /**
 @const
 @param {(Node|Element|HTMLDocument|Window|null|string)} _obj
 @param {string=} style
 @return {(CSSStyleDeclaration|CSSValue|string|undefined)}
 */
CORE.getStyle = function getStyle(_obj, style) {
    if (DEBUG) {
      GRAPH.register("CORE.getStyle");
    }
    var obj = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (_obj));
    if (!obj) {
      if (DEBUG) {
        CORE.console.err("ERROR: Element was not found: " + _obj);
      }
      return;
    }
    if (style) {
      var val;
      var current_cache = obj["_style"];
      var current_cache_new = obj["_style_new"];
      if (current_cache_new) {
        val = current_cache_new[style];
        if (val !== false && CORE.isType(val)) {
          return val;
        }
      } else {
        obj["_style_new"] = {};
        obj["_style_keys"] = [];
      }
      if (current_cache) {
        val = current_cache[style];
        if (CORE.isType(val)) {
          return val;
        }
      } else {
        current_cache = obj["_style"] = {};
      }
      /** @type {CSSStyleDeclaration} */ var css = obj.style;
      for (var i = 0; i < css.length; i++) {
        if (css[i] === style) {
          return current_cache[style] = css[style];
        }
      }
      return current_cache[style] = window.getComputedStyle(/** @type {HTMLElement} */ (obj), null)[style];
    } else {
      return /** @type {CSSStyleDeclaration} */ (obj.style);
    }
  };
  /**
 @const
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|HTMLElement|Element|HTMLDocument|Window|null|string)} _obj
 @param {(Object<string,(string|number)>|string|number)} css
 @param {(string|number)=} val
 */
CORE.setStyle = function setStyle(_obj, css, val) {
    if (DEBUG) {
      GRAPH.register("CORE.setStyle");
    }
    var obj = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (_obj));
    if (!obj) {
      if (DEBUG) {
        CORE.console.err("ERROR: Element was not found: " + _obj);
      }
      return;
    }
    var length = obj.length;
    if (length >= 0) {
      for (var i = 0; i < length; i++) {
        CORE.setStyle(obj[i], css, val);
      }
      return;
    }
    var current_cache = obj["_style"] || (obj["_style"] = {});
    var current_cache_new = obj["_style_new"] || (obj["_style_new"] = {});
    var current_cache_keys = obj["_style_keys"] || (obj["_style_keys"] = []);
    var len = CSS_STACK.length;
    var keys_len = current_cache_keys.length;
    if (CORE.isType(val)) {
      if (current_cache[css] !== val) {
        if (current_cache_new[css] === false || current_cache_new[css] !== val) {
          if (!keys_len) {
            CSS_STACK[len++] = /** @type {HTMLElement} */ (obj);
          }
          current_cache_new[css] = val;
          if (!CORE.contains(current_cache_keys, css)) {
            current_cache_keys[keys_len] = css;
          }
        } else {
          if (DEBUG) {
            APP.STATS.count_css_cache++;
          }
        }
      } else {
        current_cache_new[css] = false;
        if (DEBUG) {
          APP.STATS.count_css_cache++;
        }
      }
    } else {
      for (var css_key in css) {
        val = css[css_key];
        if (current_cache[css_key] !== val) {
          if (current_cache_new[css_key] === false || current_cache_new[css_key] !== val) {
            if (!keys_len) {
              CSS_STACK[len++] = /** @type {HTMLElement} */ (obj);
            }
            current_cache_new[css_key] = val;
            if (!CORE.contains(current_cache_keys, css_key)) {
              current_cache_keys[keys_len++] = css_key;
            }
          } else {
            if (DEBUG) {
              APP.STATS.count_css_cache++;
            }
          }
        } else {
          current_cache_new[css_key] = false;
          if (DEBUG) {
            APP.STATS.count_css_cache++;
          }
        }
      }
    }
    if (len) {
      PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
    }
  };
  /**
 @const
 @param {(Node|HTMLElement|Element|HTMLDocument|Window|null|string)} obj
 @param {string} css
 @param {Array<(string|number)>} val
 */
CORE.toggleStyle = function(obj, css, val) {
    if (DEBUG) {
      GRAPH.register("CORE.toggleStyle");
    }
    if (CORE.getStyle(obj, css) === val[0]) {
      CORE.setStyle(obj, css, val[1]);
    } else {
      CORE.setStyle(obj, css, val[0]);
    }
  };
  /**
 @const
 @param {(Node|Element|HTMLDocument|Window|null|string)} obj
 @param {(Object<string,(string|number)>|string|number)} style
 @param {(string|number)=} val
 */
CORE.css = function css(obj, style, val) {
    if (DEBUG) {
      GRAPH.register("CORE.css");
    }
    if (typeof val !== "undefined" || style && typeof style !== "string") {
      CORE.setStyle(obj, style, val);
    } else {
      return CORE.getStyle(obj, /** @type {(string|undefined)} */ (style));
    }
  };
  /**
 @param {string} selector
 @param {(Object<string,(string|number)>|string)} rules
 @param {(string|number)=} value
 */
CORE.addCssRule = function(selector, rules, value) {
    if (DEBUG) {
      GRAPH.register("CORE.addCssRule");
    }
    var sheet = document.styleSheets[document.styleSheets.length - 1];
    var css_string = "";
    if (value) {
      css_string = rules + ":" + value + ";";
    } else {
      if (rules) {
        var keys = Object.keys(/** @type {Object} */ (rules) || {});
        var length = keys.length;
        var key = "";
        for (var i = 0; i < length; i++) {
          css_string += (key = keys[i]) + ":" + rules[key] + ";";
        }
      }
    }
    if (css_string) {
      if (sheet["insertRule"]) {
        sheet["insertRule"](selector + "{" + css_string + "}", sheet.cssRules ? sheet.cssRules.length : 0);
      } else {
        if (sheet["addRule"]) {
          sheet["addRule"](selector, css_string, sheet.cssRules ? sheet.cssRules.length : 0);
        }
      }
    }
  };
  /**
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|HTMLElement|Element|HTMLDocument|Window|null|string)} node
 @param {string} val
 */
CORE.setTextContent = function setTextContent(node, val) {
    if (DEBUG) {
      GRAPH.register("CORE.setTextContent");
    }
    if (typeof node !== "string") {
      if (node.length >= 0) {
        for (var i = 0; i < node.length; i++) {
          CORE.setTextContent(node[i], val);
        }
        return;
      }
    } else {
      node = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node));
    }
    var tmpObj;
    if ((tmpObj = node.firstChild) && CORE.isType(tmpObj.nodeValue)) {
      tmpObj.nodeValue = val;
    } else {
      if (CORE.isType(node.textContent)) {
        node.textContent = val;
      } else {
        if (CORE.isType(node.innerText)) {
          node.innerText = val;
        } else {
          CORE.setHTML(node, val);
        }
      }
    }
  };
  /**
 @param {(Array<(Node|Element|HTMLDocument|Window|null|string)>|Node|HTMLCollection|NodeList|HTMLElement|Element|HTMLDocument|Window|null|string)} _node
 @param {string} _html
 @param {(boolean|Function)=} _async
 */
CORE.setHTML = function setHTML(_node, _html, _async) {
    if (DEBUG) {
      GRAPH.register("CORE.setHTML");
    }
    var node = _node;
    var html = _html;
    var async = _async;
    var has_callback = CORE.isType(async, "function");
    if (CORE.isType(node, "string")) {
      node = CORE.getNode(/** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node));
    } else {
      var length = node.length;
      if (length >= 0) {
        for (var i = 0; i < length; i++) {
          CORE.setHTML(node[i], html, has_callback ? i === length - 1 ? async : true : async);
        }
        return;
      }
    }
    var html_new = node["_html_new"];
    if (node["_html"] !== html) {
      if (async) {
        if (html_new !== html) {
          if (html_new === false || !CORE.isType(html_new)) {
            HTML_STACK[HTML_STACK.length] = /** @type {HTMLElement} */ (node);
          } else {
            if (DEBUG) {
              APP.STATS.count_html_cache++;
            }
          }
          node["_html_new"] = html;
        } else {
          if (DEBUG) {
            APP.STATS.count_html_cache++;
          }
        }
        if (has_callback) {
          CORE.paint(function() {
            async.call(node);
          });
        }
        if (HTML_STACK.length || has_callback) {
          PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
        }
        return;
      } else {
        node.innerHTML = node["_html"] = html;
        if (DEBUG) {
          APP.STATS.count_html++;
        }
      }
    } else {
      node["_html_new"] = html_new = false;
      if (DEBUG) {
        APP.STATS.count_html_cache++;
      }
    }
    if (html_new) {
      node["_html_new"] = html;
    }
    if (has_callback) {
      /** @type {Function} */ (async).call(node);
    }
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 */
CORE.getHTML = function setHTML(node) {
    if (DEBUG) {
      GRAPH.register("CORE.getHTML");
    }
    node = CORE.getNode(node);
    var html;
    return (html = node["_html_new"]) !== false && CORE.isType(html) ? html : CORE.isType(html = node["_html"]) ? html : node["_html"] = node.innerHTML;
  };
  /**
 @param {function(number)} fn
 @param {number=} delay
 @return {(number|null)}
 */
CORE.paint = function paint(fn, delay) {
    if (DEBUG) {
      GRAPH.register("CORE.paint");
    }
    var self = this;
    if (delay) {
      return function(fn) {
        return CORE.async(function() {
          CORE.paint.call(self, fn);
        }, delay);
      }(fn);
    } else {
      if (self !== CORE) {
        PAINT_STACK[PAINT_STACK.length] = function(time) {
          fn.call(self, time);
        };
      } else {
        PAINT_STACK[PAINT_STACK.length] = fn;
      }
      return PAINT_TIMER || (PAINT_TIMER = requestFrame(processPaint));
    }
  };
  /**
 @param {number} id
 @return {(number|null)}
 */
CORE.clear = function clear(id) {
    if (DEBUG) {
      GRAPH.register("CORE.clear");
    }
    window.clearTimeout(id);
    clearFrame.call(window, id);
    return null;
  };
  CORE.animate = function(obj, params) {
    if (DEBUG) {
      GRAPH.register("CORE.animate");
    }
    if (params.delay) {
      (function(obj, params) {
        return CORE.async(function() {
          params.delay = 0;
          CORE.animate(obj, params);
        }, params.delay);
      })(obj, params);
    }
    if (typeof obj === "string") {
      obj = CORE.getNode(obj);
    }
    if (params.from) {
      CORE.setStyle(obj, params.style, params.from);
    }
    var css_animation = {"transitionProperty":params.style, "transitionDuration":params.duration || 400, "transitionDelay":params.delay || 0, "transitionTimingFunction":params.ease || "ease-in"};
    var css_animation_prefixed = {};
    css_animation_prefixed[prefix_css + "TransitionProperty"] = params.style;
    css_animation_prefixed[prefix_css + "TransitionDuration"] = params.duration || 400;
    css_animation_prefixed[prefix_css + "TransitionDelay"] = params.delay || 0;
    css_animation_prefixed[prefix_css + "TransitionTimingFunction"] = params.ease || "ease-in";
    CORE.setStyle(obj, css_animation_prefixed);
    CORE.setStyle(obj, css_animation);
    (function(obj, style, to) {
      CORE.async(function() {
        CORE.setStyle(obj, style, to);
      }, 0);
    })(obj, params.style, params.to);
    if (params.callback) {
      (function(object, callback) {
        return CORE.async(function() {
          callback.call(object);
        }, params.duration || 400);
      })(obj, params.callback);
    }
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {(number|null)=} from
 @param {number=} to
 @param {number=} duration
 @param {number=} start
 */
CORE.scrollTo = function scrollTo(node, from, to, duration, start) {
    if (DEBUG) {
      GRAPH.register("CORE.scrollTo");
    }
    /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node = CORE.getNode(node));
    from || (from = node.scrollTop);
    to || (to = 0);
    duration || (duration = CORE.Math.abs(to - from) < 5000 ? 400 : 0);
    if (from !== to) {
      CORE.paint(function(time) {
        time -= start || (start = time);
        if (time >= duration) {
          return node.scrollTop = to;
        }
        if (from <= 0) {
          from = 0;
        }
        if (to <= 0) {
          to = 0;
        }
        CORE.scrollTo(node, from, to, duration, start);
        var delta = to - from;
        var progress = time / duration * Math.PI / 2;
        var position = delta * Math.sin(progress);
        node.scrollTop = from + position;
      });
    }
  };
  CORE.scrollToTop = function scrollToTop(node) {
    CORE.scrollTo(node);
  };
})();




(function() {
  var skip_touchmove = false;
  var skip_touchend = false;
  /**
 @const
 @param {Event} event
 @param {boolean=} prevent
 @param {boolean=} stop
 @return {boolean}
 */
CORE.preventEvent = function preventEvent(event, prevent, stop) {
    if (stop) {
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      event.stopPropagation();
      event["cancelBubble"] = true;
    }
    if (prevent) {
      event.preventDefault();
      event["returnValue"] = false;
    }
    return !prevent;
  };
  CORE.handleEvent = function(event, elem, fn, preventDefault, stopBubble) {
    event || (event = window.event);
    var name = elem.id || elem.className || elem.tagName;
    if (name) {
      if (DEBUG) {
        CORE.console.log("Event: " + name);
      }
    }
    fn.call(elem, event);
    CORE.preventEvent(event, preventDefault, stopBubble);
  };
  var registered_dispatcher = {};
  var initial_touch_element = null;
  var event_dispatcher = function(event) {
    var event_type = event.type;
    if (event_type === "touchmove") {
      if (skip_touchmove && !APP.VARS.force_touchmove) {
        if (DEBUG) {
          APP.STATS.count_event_cache++;
        }
        return;
      } else {
        if (!APP.VARS.force_touchmove) {
          skip_touchmove = true;
          skip_touchend = true;
        }
      }
    }
    var target = /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (event.target || event.srcElement);
    if (event_type === "touchend") {
      skip_touchmove = false;
      initial_touch_element = null;
      if (skip_touchend && !APP.VARS.force_touchmove) {
        skip_touchend = false;
        if (DEBUG) {
          APP.STATS.count_event_cache++;
        }
        return;
      }
      APP.VARS.force_touchmove = false;
    }
    if (DEBUG) {
      APP.STATS.count_event++;
    }
    var bubble_stack = [];
    var stopBubble = false;
    if (DEBUG) {
      var debug_time = CORE.time.now();
    }
    while (!stopBubble && target) {
      if (target === document && !APP.VARS.force_touchmove && event_type === "touchmove") {
        skip_touchmove = true;
        skip_touchend = true;
      }
      if (DEBUG) {
        APP.STATS.count_bubble++;
      }
      var preventDefault = false;
      bubble_stack[bubble_stack.length] = target;
      if (target._event && target._event[event_type]) {
        for (var i = 0; i < target._event[event_type].length; i++) {
          var current = target._event[event_type][i];
          if (target._event_src && target._event_src[event_type] && target._event_src[event_type][current.view]) {
            if (DEBUG) {
              APP.STATS.count_bubble_cache += bubble_stack.length;
            }
            target = target._event_src[event_type][current.view];
            current = target._event[event_type][i];
          }
          var bubble_src = null;
          if (current.tag || current.class) {
            for (var x = 0; x < bubble_stack.length; x++) {
              var current_bubble = bubble_stack[x];
              var tag_name = current_bubble.tagName;
              if (tag_name) {
                if (current.tag && current.class) {
                  if (tag_name.toLowerCase() === current.tag && CORE.hasClass(current_bubble, current.class)) {
                    bubble_src = current_bubble;
                  }
                } else {
                  if (current.tag) {
                    if (tag_name.toLowerCase() === current.tag) {
                      bubble_src = current_bubble;
                    }
                  } else {
                    if (current.class) {
                      if (CORE.hasClass(current_bubble, current.class)) {
                        bubble_src = current_bubble;
                      }
                    }
                  }
                }
                if (bubble_src) {
                  bubble_src._event_src || (bubble_src._event_src = {});
                  bubble_src._event_src[event_type] || (bubble_src._event_src[event_type] = {});
                  bubble_src._event_src[event_type][current.view] || (bubble_src._event_src[event_type][current.view] = target);
                  if (!current.fn) {
                    if (DEBUG) {
                      APP.STATS.time_event += CORE.time.now() - debug_time;
                      APP.STATS.count_bubble_cache += bubble_stack.length - x - 1;
                    }
                    CORE.preventEvent(event, preventDefault, stopBubble);
                    return;
                  }
                  current.fn.call(bubble_src, event);
                  stopBubble || (stopBubble = current.stopBubble);
                  preventDefault || (preventDefault = current.preventDefault);
                  bubble_src = null;
                  if (DEBUG) {
                    CORE.console.log("Event: " + event_type, target);
                  }
                }
                if (preventDefault) {
                  i = target._event[event_type].length;
                }
                if (stopBubble) {
                  break;
                }
              }
              if (x === bubble_stack.length - 1 && !bubble_src) {
                current_bubble._event_src || (current_bubble._event_src = {});
                current_bubble._event_src[event_type] || (current_bubble._event_src[event_type] = {});
                current_bubble._event_src[event_type][current.view] || (current_bubble._event_src[event_type][current.view] = target);
              }
            }
          } else {
            bubble_stack[0]._event_src || (bubble_stack[0]._event_src = {});
            bubble_stack[0]._event_src[event_type] || (bubble_stack[0]._event_src[event_type] = {});
            bubble_stack[0]._event_src[event_type][current.view] || (bubble_stack[0]._event_src[event_type][current.view] = target);
            if (!current.fn) {
              if (DEBUG) {
                APP.STATS.time_event += CORE.time.now() - debug_time;
                APP.STATS.count_bubble_cache++;
              }
              CORE.preventEvent(event, preventDefault, stopBubble);
              return;
            }
            current.fn.call(target, event);
            stopBubble || (stopBubble = current.stopBubble);
            preventDefault || (preventDefault = current.preventDefault);
            if (DEBUG) {
              CORE.console.log("Event: " + event_type, target);
            }
          }
          if (preventDefault || stopBubble) {
            break;
          }
        }
      }
      if (target === document) {
        if (initial_touch_element === null && !APP.VARS.force_touchmove && event_type === "touchstart") {
          if (DEBUG) {
            APP.STATS.count_event_cache += 2;
          }
          skip_touchmove = true;
          skip_touchend = true;
        }
        break;
      }
      target = target.parentNode;
    }
    if (preventDefault || stopBubble) {
      CORE.preventEvent(event, preventDefault, stopBubble);
    }
    if (DEBUG) {
      APP.STATS.time_event += CORE.time.now() - debug_time;
    }
  };
  function register_dispatcher(elem, event_type) {
    if (registered_dispatcher[event_type]) {
      return;
    } else {
      registered_dispatcher[event_type] = true;
    }
    if (DEBUG) {
      CORE.console.log("Register Event Dispatcher: " + event_type);
    }
    document.body.addEventListener(event_type, event_dispatcher, event_type === "touchmove" ? APP.CONFIG.EVENT_OPTIONS : false);
  }
  var touch_events_supported;
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} elem
 @param {string} query
 @param {string} event
 @param {Function} _fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @param {string=} key
 @return {Function}
 */
CORE.on = function on(elem, query, event, _fn, preventDefault, stopBubble, key) {
    var fn;
    if (CONFIG.EVENT_DEFAULT_DELAY) {
      fn = function(event) {
        var _this = this;
        CORE.async(function() {
          _fn.call(_this, event);
        }, CONFIG.EVENT_DEFAULT_DELAY);
      };
    } else {
      fn = _fn;
    }
    elem = CORE.getNode(elem);
    if (event === "touchstart" || event === "touchend" || event === "touchmove") {
      if (typeof touch_events_supported === "undefined") {
        try {
          document.createEvent("TouchEvent");
          touch_events_supported = true;
        } catch (e) {
          touch_events_supported = false;
        }
      }
      if (!touch_events_supported) {
        if (event === "touchstart") {
          event = "mousedown";
        }
        if (event === "touchend") {
          event = "mouseup";
        }
        if (event === "touchmove") {
          event = "mousemove";
        }
      }
    }
    if (event === "click") {
      CORE.on(elem, query, "touchstart", function(event) {
        initial_touch_element || (initial_touch_element = this);
        skip_touchmove = true;
        skip_touchend = true;
        APP.VARS.force_touchmove = false;
        fn.call(this, event);
      }, preventDefault, stopBubble, key);
      if (elem != window.document) {
        CORE.setStyle(elem, "touchAction", "manipulation");
      }
      return fn;
    }
    if (event === "clickmove") {
      if (elem != window.document) {
        CORE.setStyle(elem, "touchAction", "manipulation");
      }
      return CORE.addTouchMoveEvent(elem, fn, preventDefault, stopBubble, query, key);
    }
    if (event === "wheelscroll") {
      return CORE.addMouseWheelScroll(elem, fn);
    }
    var delegateByClass = "";
    var delegateByTag = "";
    if (query) {
      if (query.charAt(0) === ".") {
        delegateByClass = query.substring(1);
      } else {
        if (query.indexOf(".") > 0) {
          delegateByTag = query.split(".")[0];
          delegateByClass = query.split(".")[1];
        } else {
          delegateByTag = query;
        }
      }
    }
    elem._event || (elem._event = {});
    if (!elem._event[event]) {
      register_dispatcher(elem, event);
    }
    elem._event[event] || (elem._event[event] = []);
    elem._event[event].push({tag:delegateByTag, class:delegateByClass, fn:fn, preventDefault:preventDefault, stopBubble:stopBubble, view:key});
    return fn;
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} elem
 @param {string} event
 @param {Function} fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @return {Function}
 */
CORE.addEvent = function addEvent(elem, event, fn, preventDefault, stopBubble) {
    return CORE.on(elem, "", event, fn, preventDefault, stopBubble);
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {Function} fn
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 @return {Function}
 */
CORE.addTouchEvent = function addTouchEvent(node, fn, preventDefault, stopBubble) {
    CORE.addEvent(node, "touchstart", fn, preventDefault, stopBubble);
    return fn;
  };
  var skip_callback = false;
  /**
 @this {Node}
 @param {Event} event
 */
function touch_move_listener(event) {
    skip_touchmove = true;
    skip_callback = true;
    skip_touchend = true;
    this.removeEventListener("touchmove", touch_move_listener);
    CORE.preventEvent(event, false, true);
  }
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {Function} fn
 @return {Function}
 */
CORE.addTouchMoveEvent = function addTouchMoveEvent(node, fn, preventDefault, stopBubble, query, key) {
    CORE.on(node, query, "touchstart", function(event) {
      skip_callback = false;
      initial_touch_element || (initial_touch_element = this);
      this.addEventListener("touchmove", touch_move_listener, APP.CONFIG.PASSIVE_EVENTS);
    }, false, false, key);
    CORE.on(node, query, "touchend", function(event) {
      if (skip_callback) {
        CORE.async(function() {
          skip_callback = false;
          skip_touchmove = false;
        }, 1);
      } else {
        this.removeEventListener("touchmove", touch_move_listener);
        fn.call(this, event);
      }
      initial_touch_element = null;
    }, preventDefault, stopBubble, key);
    return fn;
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {Function} fn
 @param {boolean=} preventDefault
 @return {Function}
 */
CORE.addInputEvent = function addInputEvent(node, fn, preventDefault) {
    /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node = CORE.getNode(node));
    CORE.addEvent(node, "input", CORE.addEvent(node, "change", fn));
    return fn;
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {Function} fn
 @return {Function}
 */
CORE.addMouseWheelScroll = function addMouseWheelScroll(node, fn) {
    (function(fn) {
      var scroll_left = 0;
      CORE.addEvent(node, "mousewheel", function(event) {
        if (this["doScroll"]) {
          this["doScroll"](event.wheelDelta > 0 ? "left" : "right");
        } else {
          if ((event.wheelDelta || event.detail) > 0) {
            this.scrollLeft = scroll_left -= this.offsetWidth / 35;
          } else {
            this.scrollLeft = scroll_left += this.offsetWidth / 35;
          }
        }
        CORE.handleEvent(event, this, fn, false, true);
      });
    })(fn);
    return fn;
  };
  /**
 @param {(Node|Element|HTMLDocument|Window|null|string)} node
 @param {string} eventType
 */
CORE.triggerMouseEvent = function triggerMouseEvent(node, eventType) {
    var clickEvent = document.createEvent("MouseEvents");
    if (clickEvent) {
      clickEvent.initEvent(eventType, true, true);
      node.dispatchEvent(clickEvent);
    } else {
      if (clickEvent = node[eventType] || node["on" + eventType]) {
        clickEvent();
      }
    }
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
CORE.delegateByClass = function delegateByClass(node, classname, event, fn, preventDefault, stopBubble) {
    /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node = CORE.getNode(node));
    (function(classname, fn, preventDefault, stopBubble) {
      CORE.addEvent(node, event, function(e) {
        var target = e.target || e.srcElement;
        while (target && target !== this) {
          if (CORE.hasClass(target, classname)) {
            fn.call(target, e);
            CORE.preventEvent(e, preventDefault, stopBubble);
            return;
          }
          target = target.parentNode;
        }
      });
    })(classname, fn, preventDefault, stopBubble);
    return fn;
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
CORE.delegateByTag = function delegateByTag(node, tag, event, fn, preventDefault, stopBubble) {
    /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node = CORE.getNode(node));
    (function(tag, fn, preventDefault, stopBubble) {
      CORE.addEvent(node, event, function(e) {
        var target = e.target || e.srcElement;
        while (target && target != this) {
          if (target.tagName.toLowerCase() === tag) {
            fn.call(target, e);
            CORE.preventEvent(e, preventDefault, stopBubble);
          }
          target = target.parentNode;
        }
      }, false, false);
    })(tag, fn, preventDefault, stopBubble);
    return fn;
  };
  /**
 @param {boolean=} preventDefault
 @param {boolean=} stopBubble
 */
CORE.delegateByTagClass = function delegateByTagClass(node, tag, classname, event, fn, preventDefault, stopBubble) {
    /** @type {(Node|Element|HTMLDocument|Window|null|string)} */ (node = CORE.getNode(node));
    (function(tag, classname, fn, preventDefault, stopBubble) {
      CORE.addEvent(node, event, function(e) {
        var target = e.target || e.srcElement;
        while (target && target != this) {
          if (target.tagName.toLowerCase() === tag && CORE.hasClass(target, classname)) {
            if (e.stopImmediatePropagation) {
              e.stopImmediatePropagation();
            }
            fn.call(target, e);
            CORE.preventEvent(e, preventDefault, stopBubble);
          }
          target = target.parentNode;
        }
      }, false, false);
    })(tag, classname, fn, preventDefault, stopBubble);
    return fn;
  };
})();



/**
 @param {Object<?,Array<Object<string,(string|number)>>>} data
 @param {HTMLElement=} context
 */
CORE.initRetina = function(data, context) {
  var img_width, img_height, cur_width, cur_height, last_width, last_height, node_width, node_height;
  var node, id, set, item, src = "", size, scale, is_image, nodes = (context || document).getElementsByClassName("autosize");
  var dpr = window["devicePixelRatio"] || 1;
  if (nodes.length) {
    scale = document.body.getBoundingClientRect().width / document.body.offsetWidth;
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      id = node.dataset["id"] || node.id;
      set = data[id];
      node_width = (node.clientWidth || node.offsetWidth) * dpr * scale;
      node_height = (node.clientHeight || node.offsetHeight) * dpr * scale;
      if (node.tagName.toLowerCase() === "img") {
        is_image = true;
        size = "auto";
      } else {
        is_image = false;
        size = node["style"]["backgroundSize"];
      }
      for (var a = 0; a < set.length; a++) {
        item = set[a];
        if (a === 0) {
          img_width = item.width;
          img_height = item.height;
          last_width = img_width;
          last_height = img_height;
          src = item.src;
        } else {
          cur_width = item.width || Math.round(img_width * (item.zoom / 100));
          cur_height = item.height || Math.round(img_height * (item.zoom / 100));
          if (size === "contain" && ((cur_width >= node_width || cur_height >= node_height) && cur_width < last_width) || cur_width >= node_width && cur_height >= node_height && cur_width < last_width) {
            src = item.src;
            last_width = cur_width;
            last_height = cur_height;
          }
        }
      }
      if (is_image) {
        node["src"] = src;
      } else {
        node["style"]["backgroundImage"] = "url(" + src + ")";
      }
    }
  }
};



(function() {
  if (DEBUG) {
    CORE.console.log("Initialize Compression");
  }
  if (!window["LZString"] || CORE.Browser.isMSIE) {
    return;
  }
  var compression_levels = [{decompress:"decompress", compress:"compress", info:"Best (Unicode)"}, {decompress:"decompressFromUTF16", compress:"compressToUTF16", info:"Good (UTF16)"}, {decompress:"decompressFromEncodedURIComponent", compress:"compressToEncodedURIComponent", info:"Low (URIComponent)"}, {decompress:"decompressFromBase64", compress:"compressToBase64", info:"Low (Base64)"}];
  var dummy = {"data":{"outer":{"inner":["test"]}}};
  for (var i = 0; i < compression_levels.length; i++) {
    try {
      var compressed = window["LZString"][compression_levels[i].compress](JSON.stringify(dummy));
      window.localStorage.setItem("test", compressed);
      var decompressed = JSON.parse(window["LZString"][compression_levels[i].decompress](window.localStorage.getItem("test")));
      if (decompressed["data"] && decompressed["data"]["outer"] && decompressed["data"]["outer"]["inner"] && decompressed["data"]["outer"]["inner"][0] === "test") {
        APP.STORAGE.compress = window["LZString"][compression_levels[i].compress];
        APP.STORAGE.decompress = window["LZString"][compression_levels[i].decompress];
        APP.CONFIG.GZIP = true;
        if (DEBUG) {
          CORE.console.log("Current Compression Level: " + compression_levels[i].info);
        }
        break;
      }
    } catch (e) {
      if (DEBUG) {
        throw e;
      }
    }
  }
  if (DEBUG && !APP.CONFIG.GZIP) {
    CORE.console.log("Current Compression Level: -");
  }
  window.localStorage.removeItem("test");
})();




/** @const @struct */ CORE.Storage = function() {
  /**
 @const
 @constructor
 @implements {_storage_interface}
 @this {StorageAdapter}
 @param {!string} store_id
 */
function StorageAdapter(store_id) {
    /** @type {!string} */ this.store = store_id;
    /** @type {(Object<string,*>|null)} */ (this.cache = null);
    /** @type {(Array<string>|null)} */ this.index = null;
  }
  /**
 @param {!string=} index
 */
StorageAdapter.prototype.get = function(index) {
    var data;
    if (this.cache) {
      data = this.cache;
    } else {
      if (data = window.localStorage.getItem(this.store)) {
        data = /** @type {Object<string,*>} */ (JSON.parse(APP.CONFIG.GZIP ? APP.STORAGE.decompress(data) : data));
        this.cache = data;
      }
    }
    if (data && index) {
      data = data[index];
      return /** @type {*} */ (data);
    }
    return /** @type {(string|Object<string,*>)} */ (data);
  };
  /**
 @param {(!string|Object<string,*>)} index
 @param {*=} value
 */
StorageAdapter.prototype.set = function(index, value) {
    var data;
    var store = this.store;
    if (typeof index === "string") {
      data = this.get() || {};
      data[index] = value;
    } else {
      data = index || {};
    }
    this.cache = data;
    this.index = null;
    CORE.stack(function() {
      window.localStorage.setItem(store, APP.CONFIG.GZIP ? APP.STORAGE.compress(JSON.stringify(data)) : JSON.stringify(data));
    });
  };
  /**
 @param {(!string|Object<string,*>)} index
 @param {!*} value
 */
StorageAdapter.prototype.update = function(index, value) {
    var data = this.get() || {};
    if (typeof index === "string") {
      data[index] = value;
    } else {
      for (var key in index) {
        if (index.hasOwnProperty(key)) {
          data[key] = index[key];
        }
      }
    }
    this.set(data);
  };
  /**
 @param {!string} index
 */
StorageAdapter.prototype.del = function(index) {
    if (index) {
      var data = this.get() || {};
      data[index] = null;
      delete data[index];
      this.set(data);
    }
  };
  StorageAdapter.prototype.clear = function() {
    this.cache = null;
    this.index = null;
    window.localStorage.removeItem(this.store);
  };
  StorageAdapter.prototype.keys = function() {
    return this.index || (this.index = CORE.getKeys(this.get() || {}));
  };
  return StorageAdapter;
}();



/** @const @type {_active_model} */ APP.MODEL = function(MAPPER, STORAGE) {
  /**
 @constructor
 @implements {_active_model}
 */
function ACTIVE_MODEL() {
  }
  /**
 @param {string} key
 @param {Function} model
 @return {_model_helper}
 */
ACTIVE_MODEL.prototype.register = function(key, model) {
    STORAGE.DATA[key] || (STORAGE.DATA[key] = /** @type {_storage_struct} */ (new CORE.Storage(key)));
    STORAGE.CACHE[key] || (STORAGE.CACHE[key] = {});
    this[key] = new ModelHelper(key, model);
    this[key].Model.prototype.mapToView = MAPPER[key] ? MAPPER[key].mapToView : false;
    return this[key];
  };
  /**
 @param {string} model
 @param {Object<string,*>} data
 @param {boolean=} persistent
 @return {_model_class}
 */
ACTIVE_MODEL.prototype.new = function(model, data, persistent) {
    return this[model].new(data, persistent);
  };
  /**
 @param {string} model
 @param {Object<string,*>} data
 @return {_model_class}
 */
ACTIVE_MODEL.prototype.create = function(model, data) {
    return this[model].create(data);
  };
  /**
 @constructor
 @implements {_model_helper}
 @param {string} key
 */
function ModelHelper(key, model) {
    /** @type {function(new:_model_class,Object<string,*>)} */ this.Model = model;
    this.Model.prototype = new ModelClass(key, model);
    this.Model.constructor = model;
    this.data = STORAGE.DATA[key];
    this.cache = STORAGE.CACHE[key];
    this.keys = this.data.keys();
  }
  /**
 @param {(_model_class|Array<_model_class>|Object<string,*>|Array<Object<string,*>>)} data
 @param {boolean=} persistent
 @param {boolean=} batch
 @return {(_model_class|Array<_model_class>)}
 */
ModelHelper.prototype.new = function(data, persistent, batch) {
    data || (data = {});
    if (data.constructor === Array) {
      return this.newFromList(/** @type {Array<Object<string,*>>} */ (data), persistent);
    }
    if (data.constructor.prototype instanceof ModelClass) {
      return /** @type {_model_class} */ (data);
    }
    var record = data["id"] ? this.parse("" + data["id"]) : null;
    if (record) {
      if (record.beforeUpdate) {
        record.beforeUpdate(data);
      }
      var tmp_record = new this.Model(data);
      if (!tmp_record) {
        return null;
      }
      tmp_record["id"] = null;
      record.update(tmp_record, persistent);
      if (record.onUpdate) {
        record.onUpdate();
      }
    } else {
      record = new this.Model(data);
      if (!record) {
        return null;
      }
      if (record.beforeCreate) {
        record.beforeCreate();
      }
      if (record.beforeUpdate) {
        record.beforeUpdate();
      }
      if (record.beforeSave) {
        record.beforeSave();
      }
      record.save(persistent);
      if (record.onCreate) {
        record.onCreate();
      }
      if (record.onUpdate) {
        record.onUpdate();
      }
      if (record.onSave) {
        record.onSave();
      }
      this.keys = this.data.keys();
    }
    return record;
  };
  /**
 @param {Object<string,*>} data
 @return {(Array<_model_class>|_model_class)}
 */
ModelHelper.prototype.create = function(data) {
    return this.new(data, true);
  };
  /**
 @param {Array<Object<string,*>>} data
 @param {boolean=} persistent
 @return {Array<(_model_class|null)>}
 */
ModelHelper.prototype.newFromList = function(data, persistent) {
    if (!data) {
      return [];
    }
    var length = data.length;
    var models = new Array(length);
    var pos = 0;
    for (var i = 0; i < length; i++) {
      var item = this.new(data[i], persistent, i < length - 1);
      if (item && Object.keys(item).length) {
        models[pos++] = item;
      }
    }
    return pos === length ? models : models.splice(0, pos);
  };
  /**
 @param {Array<Object<string,*>>} data
 @return {Array<(_model_class|null)>}
 */
ModelHelper.prototype.createFromList = function(data) {
    return this.newFromList(data, true);
  };
  /**
 @param {Object<string,*>} data
 @param {boolean=} force
 */
function extract_model_data(data, force) {
    if (data["_id"]) {
      data = APP.MODEL[data["_type"]].parse("" + data["_id"], force);
    }
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var data_key = data[key];
        if (data_key !== null) {
          if (data_key.constructor === Object) {
            data[key] = extract_model_data(data_key, force);
          } else {
            if (data_key.constructor === Array) {
              for (var i = 0; i < data_key.length; i++) {
                if (data_key[i]["_id"]) {
                  data_key[i] = extract_model_data(data_key[i], force);
                }
              }
            } else {
              data[key] = data_key;
            }
          }
        }
      }
    }
    return data;
  }
  /**
 @this {(_model_class|_model_helper)}
 @param {string} index
 @param {boolean=} force
 @param {boolean=} recursive
 @return {_model_class}
 */
ModelHelper.prototype.parse = function(index, force, recursive) {
    var data;
    index = "" + index;
    if ((force || !this.cache[index]) && (data = this.data.get(index))) {
      return this.cache[index] = new this.Model(extract_model_data(data, force));
    }
    return this.cache[index] || null;
  };
  /**
 @param {string} id
 @return {(_model_class|null)}
 */
ModelHelper.prototype.find = function(id) {
    return this.parse("" + id);
  };
  /**
 @param {number=} from
 @param {number=} to
 @return {Array<_model_class>}
 */
ModelHelper.prototype.range = function(from, to) {
    this.keys.length || (this.keys = this.data.keys());
    var keys = this.keys;
    var len = keys.length;
    var start = to ? from || 0 : 0;
    var end = to || from || len;
    if (end > len) {
      end = len;
    }
    var array = new Array(end - start);
    len = 0;
    while (start < end) {
      array[len++] = this.parse("" + keys[start++]);
    }
    return array;
  };
  /**
 @return {Array<_model_class>}
 */
ModelHelper.prototype.all = function() {
    return this.range();
  };
  /**
 @return {number}
 */
ModelHelper.prototype.count = function() {
    return this.keys.length || (this.keys = this.data.keys()).length;
  };
  /**
 @param {string} field
 @param {*} value
 */
ModelHelper.prototype.findBy = function(field, value) {
    this.keys.length || (this.keys = this.data.keys());
    var keys = this.keys;
    for (var i = 0; i < keys.length; i++) {
      var data = this.parse("" + keys[i]);
      if (data[field] === value) {
        return data;
      }
    }
  };
  /**
 @param {(Function|Array<string,*>)} where
 @param {Function=} fn_compare
 */
ModelHelper.prototype.each = function(where, fn_compare) {
    this.keys.length || (this.keys = this.data.keys());
    var keys = this.keys;
    var array = [];
    var where_keys = [];
    var where_keys_length = 0;
    var array_keys_length = 0;
    var found;
    for (var i = 0; i < keys.length; i++) {
      var data = this.parse("" + keys[i]);
      var key;
      found = true;
      if (fn_compare) {
        for (key in where) {
          if (where.hasOwnProperty(key)) {
            found = fn_compare(data[key], where[key]);
            if (!found) {
              break;
            }
          }
        }
      } else {
        found = where.call(data);
      }
      if (found) {
        array[array_keys_length++] = data;
      }
    }
    return array;
  };
  /**
 @param {Array<string,*>} where
 @param {Function=} filter
 */
ModelHelper.prototype.where = function(where, filter) {
    return this.each(where, filter || function(a, b) {
      return a === b;
    });
  };
  /**
 @param {Array<string,*>} where
 @param {Function=} filter
 */
ModelHelper.prototype.like = function(where, filter) {
    return this.each(where, filter || function(a, b) {
      return ("" + a).replace(/ /g, "").toLowerCase() === ("" + b).replace(/ /g, "").toLowerCase();
    });
  };
  /**
 @param {Array<_model_class>} items
 */
ModelHelper.prototype.saveAll = function(items, persistent) {
    var length;
    if (items && (length = items.length)) {
      var i = 0;
      for (; i < length; i++) {
        items[i].save(persistent);
      }
    }
  };
  /**
 @param {Array<_model_class>=} items
 */
ModelHelper.prototype.deleteAll = function(items) {
    items || (items = this.all());
    for (var i = 0, length = items.length; i < length; i++) {
      items[i].delete(i < length - 1);
    }
  };
  /**
 @param {Array<_model_class>} items
 @param {Array<string,*>} params
 @param {boolean=} persistent
 */
ModelHelper.prototype.updateAll = function(items, params, persistent) {
    var length;
    if (items && (length = items.length)) {
      var i = 0;
      for (; i < length; i++) {
        items[i].update(params, persistent);
      }
    }
  };
  /**
 @constructor
 @implements {_model_class}
 @param {string} key
 @param {_model_class} model
 */
function ModelClass(key, model) {
    this.model_name = key;
    this.data = STORAGE.DATA[key];
    this.cache = STORAGE.CACHE[key];
    var prototype = model.prototype;
    for (var field in prototype) {
      if (prototype.hasOwnProperty(field)) {
        this[field] = prototype[field];
      }
    }
  }
  function compact_model_data(data, persistent) {
    var copy = {};
    var has_object_keys = false;
    for (var field in data) {
      if (field !== "mapToViewCache" && data.hasOwnProperty(field)) {
        if (field.charAt(0) === "_") {
          continue;
        }
        var data_field = data[field];
        if (data_field || data_field === 0 && field === "id") {
          var data_field_constructor = data_field.constructor;
          if (data_field_constructor !== Array) {
            data_field = [data_field];
          }
          var length = data_field.length;
          if (length) {
            copy[field] = new Array(length);
            for (var i = 0; i < length; i++) {
              var data_field_index = data_field[i];
              if (data_field_index.constructor.prototype instanceof ModelClass) {
                data_field_index.save(persistent);
                copy[field][i] = {"_id":"" + data_field_index["id"], "_type":data_field_index.constructor.prototype.model_name};
                has_object_keys = true;
              } else {
                if (data_field_index.constructor === Object) {
                  var recursive_value = compact_model_data(data_field_index, persistent);
                  if (recursive_value) {
                    copy[field][i] = recursive_value;
                    has_object_keys = true;
                  }
                } else {
                  if (data_field_index) {
                    copy[field][i] = data_field_index;
                    has_object_keys = true;
                  }
                }
              }
            }
          }
          if (data_field_constructor !== Array) {
            copy[field] = copy[field][0];
          }
        }
      }
    }
    return has_object_keys ? copy : null;
  }
  /**
 @this {_model_class}
 @param {boolean=} persistent
 */
ModelClass.prototype.save = function(persistent) {
    var id = this["id"];
    if (!CORE.isType(id)) {
      if (DEBUG) {
        CORE.console.warn("WARNING: Data without ID cannot be stored!", this);
      }
      return this;
    }
    if (persistent) {
      (function(self) {
        CORE.stack(function() {
          var copy = compact_model_data(self, persistent);
          try {
            self.data.set("" + self["id"], copy);
            APP.MODEL[self.model_name].keys = self.data.keys();
          } catch (e) {
            if (DEBUG) {
              CORE.console.err("ERROR: Cannot save model data (ID: " + self["id"] + ")", self);
            }
          }
        });
      })(this);
    }
    id = "" + id;
    return this.cache[id] || (this.cache[id] = this);
  };
  /**
 @this {_model_class}
 */
ModelClass.prototype.save_to_cache = function() {
    return this.save(false);
  };
  /**
 @this {_model_class}
 @param {Object<string,*>} params
 @param {boolean=} persistent
 */
ModelClass.prototype.update = function(params, persistent) {
    var has_update = false;
    for (var key_1st in params) {
      if (params.hasOwnProperty(key_1st)) {
        var current_value = params[key_1st];
        if (CORE.isType(this[key_1st])) {
          if (this[key_1st] !== current_value && (current_value || (current_value === 0 || current_value === false || current_value === "")) && (current_value.constructor !== Array || current_value.length) && (current_value.constructor !== Object || Object.keys(/** @type {Object} */ (current_value) || {}).length)) {
            this[key_1st] = current_value;
            has_update = true;
          }
        } else {
          this[key_1st] = current_value;
          has_update = true;
        }
      }
    }
    if (has_update) {
      this["mapToViewCache"] = void 0;
      if (persistent) {
        this.save(persistent);
      }
    }
    return this;
  };
  /**
 @this {_model_class}
 */
ModelClass.prototype.restore = function() {
    return this.prototype.parse.call(this, "" + this["id"], true);
  };
  /**
 @this {_model_class}
 @param {boolean=} batch
 */
ModelClass.prototype.delete = function(batch) {
    APP.MODEL[this.model_name].data.del("" + this["id"]);
    delete APP.MODEL[this.model_name].cache["" + this["id"]];
    if (!batch) {
      APP.MODEL[this.model_name].keys = this.data.keys();
    }
  };
  return /** @type {_active_model} */ (new ACTIVE_MODEL);
}(APP.MAPPER, /** @type {_storage_struct} */ (APP.STORAGE));



(function(CONTROLLER, ROUTE) {
  if (CONFIG.SERVER_HOST) {
    /**
 @const
 @param {(Array<*>|string)} route
 @param {(Function|Object<string,*>)=} params
 @param {Function=} callback
 @param {Function=} error
 @param {Function=} update_cache
 */
CONTROLLER.request = function request(route, params, callback, error, update_cache) {
      if (route.constructor === Array) {
        return CONTROLLER.requestBatch(/** @type {Array<*>} */ (route), /** @type {(Function|null)} */ (params));
      }
      if (CORE.isType(params, "function")) {
        update_cache = error;
        error = callback;
        callback = /** @type {(Function|null)} */ (params);
        params = null;
      }
      route = /** @type {string} */ (route);
      if (!CORE.isType(ROUTE[route])) {
        ROUTE[route] = {};
        if (DEBUG) {
          CORE.console.warn('WARNING: No route specified for "' + route + '"!');
        }
      }
      params || (params = APP.PAYLOAD[route] ? APP.PAYLOAD[route]() : ROUTE[route].params || null);
      (function(route, route_obj, callback, update_cache) {
        var route_action = route_obj.action;
        APP.LAYOUT.lastAction = route_action || APP.LAYOUT.lastAction || "";
        if (!update_cache && route_action) {
          APP.LAYOUT.handleCache(route_action, function(update_cache) {
            CONTROLLER.request(route, params, callback, error, update_cache);
          });
          return;
        }
        route_obj.header || (route_obj.header = {});
        route_obj.header["Accept"] || (route_obj.header["Accept"] = "application/json");
        route_obj.header["Content-Type"] || (route_obj.header["Content-Type"] = "application/json");
        var default_headers = APP.VARS.HEADER;
        for (var key in default_headers) {
          if (default_headers.hasOwnProperty(key)) {
            route_obj.header[key] = default_headers[key];
          }
        }
        var pos;
        if ((pos = route.indexOf("/:")) !== -1) {
          var custom_field = route.substring(pos + 2, route.indexOf("/", pos + 2));
          route = route.replace("/:" + custom_field, "/" + params[custom_field]);
        }
        var request_type = "GET";
        if (route.indexOf("GET:") !== -1) {
          route = route.substring(4);
        } else {
          if (route.indexOf("POST:") !== -1) {
            request_type = "POST";
            route = route.substring(5);
          } else {
            if (route.indexOf("DELETE:") !== -1) {
              request_type = "DELETE";
              route = route.substring(7);
            } else {
              if (route.indexOf("PATCH:") !== -1) {
                request_type = "PATCH";
                route = route.substring(6);
              }
            }
          }
        }
        var fn_success = function fn_success(data) {
          if (route_obj.field) {
            data = data[route_obj.field] || [];
          }
          if (route_obj.filter) {
            data = data.filter(route_obj.filter);
          }
          if (route_obj.arrayfilter) {
            data = route_obj.arrayfilter.call(data, params);
          }
          if (route_obj.sort) {
            data = data.sort(route_obj.sort);
          }
          if (route_obj.limit && data.length > route_obj.limit) {
            data.splice(0, data.length - route_obj.limit);
          }
          if (route_obj.last && data.length > route_obj.last) {
            data.splice(0, route_obj.last);
          }
          if (route_obj.map) {
            data.map(route_obj.map);
          }
          if (route_obj.arraymap) {
            route_obj.arraymap.call(data, params);
          }
          if (update_cache) {
            update_cache();
          }
          callback || (callback = route_obj.do ? route_obj.do.charAt ? APP.HANDLER[route_obj.do] : route_obj.do : route_obj.to ? CONTROLLER[route_obj.to] : null);
          if (callback) {
            callback(data, params);
          }
        };
        CORE.ajax(/** @type {_ajax_struct} */ ({url:CONFIG.SERVER_HOST + (route_obj.url || route), params:params, type:route_obj.type || request_type, header:route_obj.header, cache:route_obj.cache, clear:route_obj.clear, success:fn_success, error:function fn_error(status, data) {
          if (route_obj.default) {
            fn_success(route_obj.default());
          }
          if (error) {
            error(status, data);
          } else {
            if (route_obj.error) {
              route_obj.error(status, data);
            }
          }
        }}));
      })(route, /** @type {_route_struct} */ (ROUTE[route]), callback, update_cache);
    };
    /**
 @const
 @param {Array<*>} requests
 @param {Function=} callback
 */
CONTROLLER.requestBatch = function(requests, callback) {
      for (var i = 0; i < requests.length; i++) {
        (function(request, callback) {
          if (CORE.isType(request, "string")) {
            request = [request, null, CONTROLLER[ROUTE[/** @type {string} */ (request)].to]];
          }
          CONTROLLER.request(request[0], request[1], function(data) {
            if (request[2]) {
              request[2](data);
            }
            if (callback) {
              callback();
            }
          });
        })(requests[i], i === requests.length - 1 ? callback : null);
      }
    };
    /**
 @const
 @param {Array<*>} _requests
 @param {Function=} _callback
 @param {number=} i
 */
CONTROLLER.requestSync = function(_requests, _callback, i) {
      var requests = _requests;
      var callback = _callback;
      var request = requests[i || (i = 0)];
      if (CORE.isType(request, "string")) {
        request = [request, null, CONTROLLER[ROUTE[/** @type {string} */ (request)].to]];
      }
      CONTROLLER.request(request[0], request[1], function(data) {
        if (request[2]) {
          request[2](data);
        }
        if (++i < requests.length) {
          CONTROLLER.requestSync(requests, callback, i);
        } else {
          if (callback) {
            callback();
          }
        }
      });
    };
  }
  /**
 @param {string} _view
 @param {Array<_model_class>=} data
 @return {string}
 */
function buildTemplate(_view, data) {
    if (DEBUG) {
      var debug_time = CORE.time.now();
    }
    data || (data = [{}]);
    if (data.constructor !== Array) {
      data = [data];
    }
    /** @type {Array<_template_struct>} */ var template = APP.VIEW[_view];
    var html = "";
    var item;
    for (var x = 0; x < data.length; x++) {
      if (item = data[x]) {
        var map_to_view = item.mapToView;
        var map_to_view_cache = item["mapToViewCache"] || (item["mapToViewCache"] = {});
        var split;
        var model;
        var field;
        var extra;
        for (var a = 0; a < template.length; a++) {
          /** @type {_template_struct} */ var view = template[a];
          var template_data = view.data;
          var template_map = view.map;
          var tmp;
          var pos;
          if (item === null || view.if && view.if(item) === false) {
            if (view.else) {
              template_data = [view.else];
            } else {
              continue;
            }
          }
          var loop_data;
          var loop_start = 0;
          var loop_end = 0;
          var loop_count = 1;
          var view_loop = view.loop;
          if (view_loop) {
            if (view_loop.indexOf(",") !== -1) {
              var loop_start_end = view_loop.split(",");
              if (loop_start_end.length === 3) {
                loop_start = parseInt(loop_start_end[1], 10);
                loop_end = parseInt(loop_start_end[2], 10);
              } else {
                loop_end = parseInt(loop_start_end[1], 10);
              }
              view_loop = loop_start_end[0];
            }
            if (view_loop.indexOf(".") !== -1) {
              split = view_loop.split(".");
              model = split[0];
              field = split[1];
              extra = split[2] || false;
              loop_data = item[model] ? item[model][field] ? item[model][field][extra] ? item[model][field][extra] : item[model][field] : item[model] : item;
            } else {
              loop_data = item[view_loop];
            }
            loop_count = loop_data ? loop_end && loop_end <= loop_data.length ? loop_end : loop_data.length : 0;
          }
          var item_loop = item;
          for (var z = loop_start || 0; z < loop_count; z++) {
            var template_html = "";
            if (view_loop) {
              item_loop = loop_data[z];
            }
            if (item_loop) {
              if (item_loop.mapToView) {
                map_to_view = item_loop.mapToView;
                map_to_view_cache = item_loop["mapToViewCache"] || (item_loop["mapToViewCache"] = {});
              } else {
                if (CORE.isType(item_loop.mapToView)) {
                  map_to_view_cache = item_loop["mapToViewCache"] || (item_loop["mapToViewCache"] = {});
                }
              }
              item_loop["index"] || (item_loop["index"] = view_loop ? z : x);
              if (template_map.length) {
                template_html += template_data[0];
              }
              for (var i = 1; i < template_map.length; i += 2) {
                var mapped_value = template_data[i];
                var key = template_map[i];
                if (CORE.isType(map_to_view_cache[key])) {
                  template_html += map_to_view_cache[key];
                  if (i + 1 < template_data.length) {
                    template_html += template_data[i + 1];
                  }
                  if (DEBUG) {
                    APP.STATS.count_mapper_cache++;
                  }
                  continue;
                }
                if (key.indexOf(".") !== -1) {
                  split = key.split(".");
                  model = split[0];
                  field = split[1];
                  extra = split[2] || false;
                  if ((pos = model.indexOf("[")) !== -1) {
                    var index = parseInt(model.substring(pos + 1, model.indexOf("]")), 10);
                    model = model.substring(0, pos);
                    if (tmp = item_loop[model][index]) {
                      if (map_to_view && map_to_view[model] && map_to_view[model][field]) {
                        if (extra && map_to_view[model][field][extra]) {
                          mapped_value = map_to_view[model][field][extra](tmp[field][extra], tmp);
                          map_to_view_cache[key] = mapped_value;
                        } else {
                          mapped_value = map_to_view[model][field](tmp[field], tmp);
                          map_to_view_cache[key] = mapped_value;
                        }
                      } else {
                        mapped_value = tmp[field];
                      }
                    }
                  } else {
                    if (tmp = item_loop[model]) {
                      if (map_to_view && map_to_view[model] && map_to_view[model][field]) {
                        if (extra) {
                          var val = CORE.isType(tmp[field]) ? CORE.isType(tmp[field][extra]) ? tmp[field][extra] : tmp[field] : tmp || item_loop;
                          if (map_to_view[model][field][extra]) {
                            mapped_value = map_to_view[model][field][extra](val, tmp || item_loop);
                            map_to_view_cache[key] = mapped_value;
                          } else {
                            mapped_value = val;
                          }
                        } else {
                          mapped_value = map_to_view[model][field](tmp[field], tmp || item_loop);
                          map_to_view_cache[key] = mapped_value;
                        }
                      } else {
                        if (tmp[field] && tmp[field][extra]) {
                          mapped_value = tmp[field][extra];
                        } else {
                          mapped_value = CORE.isType(tmp[field]) ? tmp[field] : tmp || item_loop;
                        }
                      }
                    }
                  }
                } else {
                  if (map_to_view && map_to_view[key]) {
                    mapped_value = map_to_view[key](item_loop[key], item_loop);
                    map_to_view_cache[key] = mapped_value;
                  } else {
                    if (key === "item") {
                      mapped_value = item_loop;
                    } else {
                      mapped_value = item_loop[key];
                    }
                  }
                }
                template_html += mapped_value;
                if (i + 1 < template_data.length) {
                  template_html += template_data[i + 1];
                }
                if (DEBUG) {
                  APP.STATS.count_mapper++;
                }
              }
            }
            if (!view_loop || item_loop) {
              html += template_html;
            }
          }
        }
      }
    }
    if (DEBUG) {
      APP.STATS.time_render += CORE.time.now() - debug_time;
    }
    return html;
  }
  /**
 @param view
 @param data
 */
CONTROLLER.build = function build(view, data) {
    return buildTemplate(view, data);
  };
  /**
 @const
 @param {(_view_model|string)} _target
 @param {Array<_pattern_struct>=} _data
 */
CONTROLLER.render = function render(_target, _data) {
    var target = _target;
    var data = _data;
    var dest;
    APP.LAYOUT.remove_preloader(target);
    if (data) {
      dest = CORE.getById(/** @type {string} */ (target));
      CORE.removeNodes(dest);
      CORE.buildPattern(data, dest);
      if (DEBUG) {
        APP.STATS.count_render++;
      }
    } else {
      if (target.data) {
        dest = typeof target.target === "string" ? CORE.getById(target.target) : target.target;
        if (!dest) {
          if (DEBUG) {
            CORE.console.warn("Element not found: " + target.target);
          }
          return;
        }
        var is_array_data = target.data.constructor === Array;
        var template = is_array_data && target.data.length || !is_array_data && target.data ? buildTemplate(target.view, target.data) : target.default ? target.default.view ? buildTemplate(target.default.view, target.default.data) : buildTemplate(/** @type {string} */ (target.default)) : "";
        if (DEBUG) {
          if (dest["_html"] === template) {
            APP.STATS.count_render_cache++;
            CORE.console.log("HTML Content Cached: " + dest.id);
          } else {
            APP.STATS.count_render++;
            CORE.console.log("HTML Content Updated: " + dest.id);
          }
        }
        CORE.setHTML(dest, template, function render_callback() {
          if (target.callback) {
            if (CORE.isType(target.callback, "string")) {
              APP.HANDLER[target.callback].call(dest, target.data);
            } else {
              target.callback.call(dest, target.data);
            }
          }
        });
      }
    }
  };
  /**
 @param {string=} lang
 */
CONTROLLER.changeLanguage = function(lang) {
    var nodes = CORE.getByClass("i18n");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      CORE.setTextContent(node, (APP.LANG[lang || "en"] || APP.LANG["en"])[node.classList ? node.classList[1] : node.className.split(" ")[1]]);
    }
  };
})(/** @type {_controller_struct} */ (APP.CONTROLLER), APP.ROUTE);



(function(LAYOUT, CONTROLLER, STORAGE, EVENT) {
  /**
 @param {string} _target
 */
LAYOUT.update_menu_state = function update_menu_state(_target) {
    LAYOUT.lastAction = _target || "";
    if (DEBUG) {
      CORE.console.log("Update Menu State");
    }
    var target = _target;
    var nodes;
    if (target.indexOf("-") !== -1) {
      target = target.split("-")[0];
    }
    if (CORE.getById("btn-view-" + target)) {
      nodes = CORE.getByTag("td", "toolbar");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id !== "btn-view-" + target) {
          CORE.removeClass(nodes[i], "active");
        }
      }
      CORE.addClass("btn-view-" + target, "active");
    }
    CORE.setStyle("view-" + target, {"zIndex":1, "visibility":"visible"});
    nodes = CORE.getByClass("view");
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].id !== "view-" + target) {
        CORE.setStyle(nodes[i], {"zIndex":-1, "visibility":"hidden"});
      }
    }
  };
  var spinner = {};
  /** @const */ var opts = {"lines":13, "length":28, "width":14, "radius":42, "scale":0.3, "corners":1, "color":"#aaa", "opacity":0.25, "rotate":0, "direction":1, "speed":1, "trail":60, "fps":20, "zIndex":2e9, "className":"spinner", "top":"50%", "left":"50%", "shadow":false, "hwaccel":true, "position":"absolute"};
  LAYOUT.lastAction = "";
  /**
 @param {string=} color
 */
LAYOUT.add_preloader = function add_preloader(target, color) {
    if (DEBUG) {
      CORE.console.log("Add Preloader");
    }
    target = target.target || target;
    if (color) {
      opts["color"] = color;
    }
    var target_dom = CORE.getById(target);
    CORE.setHTML(target_dom, "", function() {
    });
  };
  LAYOUT.remove_preloader = function remove_preloader(target) {
    target = target.target || target;
    if (spinner[target]) {
      if (DEBUG) {
        CORE.console.log("Remove Preloader");
      }
      spinner[target]["stop"]();
      spinner[target] = false;
    }
  };
  var toggle_state = false;
  LAYOUT.toggle_view = function toggle_view(left_action, right_action, callback) {
    var content_left_action_layer = "content-" + left_action + "-layer";
    var content_right_action_layer = "content-" + right_action + "-layer";
    if (!CORE.hasClass(content_left_action_layer, "slider-left")) {
      toggle_state = !toggle_state;
      CORE.addClass(content_left_action_layer, "slider-left");
    } else {
      if (CORE.hasClass(content_right_action_layer, "slider-left")) {
        toggle_state = !toggle_state;
        CORE.removeClass(content_right_action_layer, "slider-left");
      }
    }
    if (toggle_state = !toggle_state) {
      CORE.setStyle("nav-" + left_action, "display", "none");
      CORE.setStyle("nav-" + right_action, "display", "block");
      CORE.addClass(content_left_action_layer, "active");
      CORE.addClass(content_right_action_layer, "active");
      if (callback) {
        if (CORE.getHTML("content-" + right_action) === "") {
          LAYOUT.add_preloader("content-" + right_action, "#ccc");
        }
        callback();
      }
    } else {
      CORE.setStyle("nav-" + right_action, "display", "none");
      CORE.setStyle("nav-" + left_action, "display", "block");
      CORE.removeClass(content_left_action_layer, "active");
      CORE.removeClass(content_right_action_layer, "active");
    }
  };
  var last_popup = "";
  var last_popup_2 = "";
  var last_target = {};
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
LAYOUT.show_popup = function(_wrapper, preloader_target, hideStatusbar) {
    if (DEBUG) {
      CORE.console.log("Show Popup");
    }
    var wrapper = _wrapper;
    if (preloader_target) {
      CORE.setHTML(preloader_target, "");
      LAYOUT.add_preloader(preloader_target, "#ccc");
      last_target[wrapper] = preloader_target;
    }
    CORE.setStyle(wrapper, {"transition":"none", "opacity":0, "transform":"scale(0.8)", "zIndex":3, "display":"block"});
    CORE.paint(function() {
      if (last_popup_2 && last_popup_2 !== last_popup) {
        CORE.setStyle(last_popup_2, "zIndex", 1);
      }
      if (last_popup) {
        CORE.setStyle(last_popup, "zIndex", 2);
      }
      CORE.setStyle(wrapper, {"transition":"transform 0.2s ease-out, opacity 0.2s ease-out", "opacity":1, "transform":"scale(1)", "zIndex":3});
      last_popup_2 = last_popup;
      last_popup = wrapper;
    });
    if (!CORE.isType(hideStatusbar)) {
      hideStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
    }
  };
  LAYOUT.hide_popup = function(_wrapper, _showStatusbar) {
    if (DEBUG) {
      CORE.console.log("Hide Popup");
    }
    var wrapper = _wrapper;
    var showStatusbar = _showStatusbar;
    CORE.setStyle(wrapper, {"transform":"scale(0.8)", "opacity":0});
    CORE.paint(function() {
      CORE.setStyle(wrapper, {"display":"none", "zIndex":2});
      if (last_target[wrapper]) {
        CORE.setHTML(last_target[wrapper], "", true);
        last_target[wrapper] = false;
      }
      last_popup_2 = last_popup;
      last_popup = "";
      if (!CORE.isType(showStatusbar)) {
        showStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
      }
    }, 200);
  };
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
LAYOUT.slide_popup = function(_wrapper, preloader_target, hideStatusbar) {
    if (DEBUG) {
      CORE.console.log("Slide-In Popup");
    }
    var wrapper = _wrapper;
    if (preloader_target) {
      CORE.setHTML(preloader_target, "", function() {
        LAYOUT.add_preloader(preloader_target, "#ccc");
        last_target[wrapper] = preloader_target;
      });
    }
    CORE.setStyle(wrapper, {"transition":"none", "transform":"translateY(100%)", "zIndex":3, "display":"block"});
    CORE.paint(function() {
      if (last_popup_2 && last_popup_2 !== last_popup) {
        CORE.setStyle(last_popup_2, "zIndex", 1);
      }
      if (last_popup) {
        CORE.setStyle(last_popup, "zIndex", 2);
      }
      CORE.setStyle(wrapper, {"transition":"transform 0.3s ease-out", "transform":"translateY(0%)", "zIndex":3});
      last_popup_2 = last_popup;
      last_popup = wrapper;
    });
    if (!CORE.isType(hideStatusbar)) {
      hideStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
    }
  };
  LAYOUT.slideout_popup = function(_wrapper, _showStatusbar) {
    if (DEBUG) {
      CORE.console.log("Slide-Out Popup");
    }
    var wrapper = _wrapper;
    var showStatusbar = _showStatusbar;
    CORE.setStyle(wrapper, {"transform":"translateY(100%)"});
    CORE.paint(function() {
      CORE.setStyle(wrapper, {"display":"none", "zIndex":0});
      if (last_target[wrapper]) {
        CORE.setHTML(last_target[wrapper], "", true);
        last_target[wrapper] = false;
      }
      last_popup_2 = last_popup;
      last_popup = "";
      if (!CORE.isType(showStatusbar)) {
        showStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
      }
    }, 200);
  };
  /**
 @param _wrapper
 @param {(Element|string)=} preloader_target
 @param {boolean=} hideStatusbar
 */
LAYOUT.toggle_popup = function(_wrapper, preloader_target, hideStatusbar) {
    if (DEBUG) {
      CORE.console.log("Toggle-In Popup");
    }
    var wrapper = _wrapper;
    if (preloader_target) {
      CORE.setHTML(preloader_target, "", function() {
        LAYOUT.add_preloader(preloader_target, "#ccc");
        last_target[wrapper] = preloader_target;
      });
    }
    CORE.setStyle(wrapper, {"transition":"none", "transform":"translateX(100%)", "zIndex":3, "display":"block"});
    CORE.paint(function() {
      if (last_popup_2 && last_popup_2 !== last_popup) {
        CORE.setStyle(last_popup_2, "zIndex", 1);
      }
      if (last_popup) {
        CORE.setStyle(last_popup, "zIndex", 2);
      }
      CORE.addClass("view-" + LAYOUT.lastAction, "active");
      CORE.setStyle(wrapper, {"transition":"transform 0.25s ease-out", "transform":"translateX(0%)", "zIndex":3});
      last_popup_2 = last_popup;
      last_popup = wrapper;
    });
    if (!CORE.isType(hideStatusbar)) {
      hideStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
    }
  };
  LAYOUT.toggleout_popup = function(_wrapper, _showStatusbar) {
    if (DEBUG) {
      CORE.console.log("Toggle-Out Popup");
    }
    var wrapper = _wrapper;
    var showStatusbar = _showStatusbar;
    CORE.removeClass("view-" + LAYOUT.lastAction, "active");
    CORE.setStyle("view-" + LAYOUT.lastAction, "transform", "");
    CORE.setStyle(wrapper, {"transform":"translateX(100%)"});
    CORE.paint(function() {
      CORE.setStyle(wrapper, {"display":"none", "zIndex":2});
      if (last_target[wrapper]) {
        CORE.setHTML(last_target[wrapper], "", true);
        last_target[wrapper] = false;
      }
      last_popup_2 = last_popup;
      last_popup = "";
      if (!CORE.isType(showStatusbar)) {
        showStatusbar = !CORE.hasClass(CORE.getByTag("header", wrapper)[0] || wrapper, "status-bar");
      }
    }, 200);
  };
  /**
 @param {!string} message
 */
LAYOUT.show_message = function(message) {
    if (DEBUG) {
      CORE.console.log("Show Message Box");
    }
    CORE.setHTML("message-content", message, function() {
      CORE.setStyle("message-wrapper", "display", "block");
      CORE.paint(function() {
        CORE.setStyle("message-wrapper", "opacity", 1);
        CORE.setStyle("message-inner", {"opacity":1, "transform":"scale(1)"});
      });
    });
  };
  LAYOUT.hide_message = function() {
    if (DEBUG) {
      CORE.console.log("Hide Message Box");
    }
    CORE.setStyle("message-inner", {"transform":"scale(0.8)", "opacity":0});
    CORE.setStyle("message-wrapper", "opacity", 0);
    CORE.paint(function() {
      CORE.setStyle("message-wrapper", "display", "none");
      CORE.setHTML("message-content", "", true);
    }, 200);
  };
  /**
 @param {!string} message
 @param {!Function} fn_confirm
 */
LAYOUT.show_confirmation = function(message, fn_confirm) {
    if (DEBUG) {
      CORE.console.log("Show Confirmation Box");
    }
    CORE.setHTML("confirmation-content", message, function() {
      CORE.setStyle("confirmation-wrapper", "display", "block");
      CORE.paint(function() {
        CORE.setStyle("confirmation-wrapper", "opacity", 1);
        CORE.setStyle("confirmation-inner", "transform", "scale(1)");
      });
    });
    CORE.getById("confirmation-yes").ontouchstart = fn_confirm;
  };
  LAYOUT.hide_confirmation = function() {
    if (DEBUG) {
      CORE.console.log("Hide Confirmation Box");
    }
    CORE.setStyle("confirmation-wrapper", "opacity", 0);
    CORE.setStyle("confirmation-inner", "transform", "scale(0.9)");
    CORE.paint(function() {
      CORE.setStyle("confirmation-wrapper", "display", "none");
      CORE.setHTML("confirmation-content", "", true);
    }, 200);
  };
  /** @const */ EVENT["confirmation-yes"] = {on:"click", do:function(event) {
    if ((this.firstElementChild && this.firstElementChild.href) === false) {
      CORE.preventEvent(event, true, true);
    } else {
      CORE.async(function() {
        CORE.setHTML("confirmation-yes", "Ja");
      }, 200);
    }
    this.ontouchstart.call(this, event);
    LAYOUT.hide_confirmation();
  }, stopBubble:false, preventDefault:false};
  /** @const */ EVENT["confirmation-no"] = {on:"click", do:function(event) {
    CORE.setHTML("confirmation-yes", "Ja");
    LAYOUT.hide_confirmation();
  }, stopBubble:true, preventDefault:true};
  /**
 @param {string} _key
 @param {Function=} _callback
 @param {boolean=} force
 */
LAYOUT.handleCache = function handleCache(_key, _callback, force) {
    var key = _key;
    var callback = _callback;
    var key_new = key;
    if (key.indexOf("-") !== -1) {
      key_new = key.split("-")[0];
    }
    if (LAYOUT.lastAction === key || force) {
      if (DEBUG) {
        CORE.console.log("Handle Layout Cache: " + _key);
      }
      if (LAYOUT.lastAction === key) {
        LAYOUT.update_menu_state(key_new);
      }
      var target = CORE.getById("content-" + key);
      var inner_html = CORE.getHTML(target);
      if (inner_html === "") {
        var cache = STORAGE.VIEW.get(LAYOUT.lastAction = key);
        if (cache && APP.CRC32["content-" + key] !== cache["crc"]) {
          APP.CRC32["content-" + key] = cache["crc"];
          CORE.setHTML(target, STORAGE.decompress(cache["cache"]), true);
        } else {
          if (callback) {
            LAYOUT.add_preloader("content-" + key);
          }
        }
      } else {
        if (LAYOUT.lastAction === key) {
          var nodes = CORE.getByTag("main", /** @type {Element} */ (CORE.getById("content-" + key).parentNode.parentNode.parentNode));
          for (var i = 0; i < nodes.length; i++) {
            CORE.scrollToTop(nodes[i]);
          }
        }
      }
      var fn_callback_wrapper = function() {
        LAYOUT.remove_preloader("content-" + key);
        var cache = CORE.getHTML(target);
        if (cache) {
          CORE.async(function() {
            STORAGE.VIEW.set(key_new, {"cache":STORAGE.compress(cache), "crc":APP.CRC32["content-" + key] || 1});
          });
        }
      };
      if (callback) {
        callback(fn_callback_wrapper);
      } else {
        fn_callback_wrapper();
      }
    }
  };
  var easeInQuint = function(t, b, c, d) {
    return c * (t /= d) * t * t * t * t * t + b;
  };
  /**
 @param {(HTMLElement|Element|string)} el
 @param {Object<string,(Function|string|number|boolean)>=} config
 */
LAYOUT.addSwipe = function addSwipe(el, config) {
    if (DEBUG) {
      CORE.console.log("Add Swipe", el.id || el.parentNode.id || el);
    }
    var touchsurface = el, startX, startY, distX, limit = config ? config.limit : false, touchstart = config ? config.start : false, touchmove = config ? config.move : false, touchend = config ? config.end : false, finish = config ? config.finish : false;
    var swipe_touch_move_handler = function(e) {
      APP.VARS.force_touchmove = true;
      var touchobj = e["changedTouches"][0];
      distX = touchobj.pageX - startX;
      if (touchmove) {
        touchmove.call(this, distX);
      } else {
        if (distX >= 0 && (!limit || distX < screen.width / 100 * limit)) {
          CORE.setStyle(this.parentNode, "transform", "translateX(" + distX + "px)");
        }
      }
      if (this.parentNode.id && CORE.getById("view-" + LAYOUT.lastAction) !== this.parentNode) {
        CORE.setStyle("view-" + LAYOUT.lastAction, "transform", "translateX(-" + (25 - distX / screen.width * 25) + "%)");
      }
      CORE.preventEvent(e, true, true);
    };
    CORE.on(touchsurface, "", "touchstart", function(e) {
      APP.VARS.force_touchmove = true;
      var touchobj = e["changedTouches"][0];
      distX = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      CORE.addClass([this.parentNode, "view-" + LAYOUT.lastAction], "no-transition");
      CORE.removeClass("view-" + LAYOUT.lastAction, "active");
      if (touchstart) {
        touchstart.call(this, distX);
      }
      this.addEventListener("touchmove", swipe_touch_move_handler, APP.CONFIG.PASSIVE_EVENTS);
    }, true, true);
    CORE.on(touchsurface, "", "touchend", function(e) {
      APP.VARS.force_touchmove = false;
      var touchobj = e["changedTouches"][0];
      distX = touchobj.pageX - startX;
      if (touchend) {
        touchend.call(this, distX);
      } else {
        if (distX < screen.width / 3.1416) {
          CORE.setStyle(this.parentNode, "transform", "translateX(0px)");
          CORE.setStyle("view-" + LAYOUT.lastAction, "transform", "translateX(-25%)");
          CORE.paint(function() {
            CORE.setStyle("view-" + LAYOUT.lastAction, "transform", "");
          }, 200);
        } else {
          limit ? CORE.setStyle(this.parentNode, {"transform":"translateX(" + limit + "%)"}) : CORE.setStyle(this.parentNode, {"transform":"translateX(100%)"});
          var _this = this;
          CORE.paint(function() {
            CORE.setStyle(_this.parentNode, "display", "none");
          }, 200);
          CORE.setStyle("view-" + LAYOUT.lastAction, "transform", "");
          if (finish) {
            finish.call(this, distX);
          }
        }
      }
      CORE.removeClass([this.parentNode, "view-" + LAYOUT.lastAction], "no-transition");
      this.removeEventListener("touchmove", swipe_touch_move_handler);
    }, true, true);
  };
  var pull_down = false;
  var in_progress = false;
  var scroll_start = 0;
  var scroll_pos = 0;
  var pull_touch_move_handler = function(event) {
    if (!in_progress && pull_down) {
      if (event.originalEvent) {
        event = event.originalEvent;
      }
      scroll_pos = (event.touches || event.changedTouches)[0].pageY;
      var scroll_height = CORE.Math.min(scroll_pos - scroll_start, 50);
      if (scroll_pos > scroll_start) {
        APP.VARS.force_touchmove = true;
        CORE.preventEvent(event, true, true);
        CORE.setStyle(this.firstElementChild, {"opacity":CORE.Math.max(1 / 50 / 50 * scroll_height * scroll_height, 0), "transform":"translateY(" + scroll_height + "px)"});
        if (scroll_pos - scroll_start > 50) {
          CORE.setStyle(this.firstElementChild.nextElementSibling, "transform", "translateY(" + (50 + Math.sqrt((scroll_pos - scroll_start - 50) * 15) | 0) + "px)");
        } else {
          CORE.setStyle(this.firstElementChild.nextElementSibling, "transform", "translateY(" + (scroll_pos - scroll_start) + "px)");
        }
      } else {
        APP.VARS.force_touchmove = false;
        pull_down = false;
      }
    } else {
      if (!in_progress && this.scrollTop === 0 && this.firstElementChild.nextElementSibling.scrollTop === 0) {
        if (event.originalEvent) {
          event = event.originalEvent;
        }
        scroll_start = (event.touches || event.changedTouches)[0].pageY;
        pull_down = true;
      } else {
        APP.VARS.force_touchmove = false;
      }
    }
  };
  /**
 @param {(HTMLElement|Element|string)} el
 */
LAYOUT.initPullToRefresh = function initPullToRefresh(el, route) {
    if (DEBUG) {
      CORE.console.log("Init Pull To Refresh", el.id || el.parentNode.id || el);
    }
    CORE.on(el, "", "touchstart", function(event) {
      if (!in_progress && this.scrollTop === 0 && this.firstElementChild.nextElementSibling.scrollTop === 0) {
        APP.VARS.force_touchmove = true;
        if (event.originalEvent) {
          event = event.originalEvent;
        }
        scroll_start = scroll_pos = (event.touches || event.changedTouches)[0].pageY;
        pull_down = true;
      }
      this.addEventListener("touchmove", pull_touch_move_handler, APP.CONFIG.PASSIVE_EVENTS);
    }, false, false);
    CORE.on(el, "", "touchend", function(event) {
      APP.VARS.force_touchmove = false;
      if (!in_progress && pull_down) {
        if (scroll_pos > scroll_start) {
          CORE.preventEvent(event, true, true);
          var scroll_height = CORE.Math.min(scroll_pos - scroll_start, 50);
          if (scroll_height >= 50) {
            CORE.setStyle(el.firstElementChild.nextElementSibling, "transform", "translateY(50px)");
            in_progress = true;
            APP.CONTROLLER.request(route, {}, function(data) {
              if (APP.ROUTE[route].to) {
                APP.CONTROLLER[APP.ROUTE[route].to](data);
              } else {
                if (APP.ROUTE[route].do) {
                  if (CORE.isType(APP.ROUTE[route].do, "string")) {
                    APP.HANDLER[APP.ROUTE[route].do](data);
                  } else {
                    APP.ROUTE[route].do(data);
                  }
                }
              }
              CORE.setStyle(el.firstElementChild.nextElementSibling, "transform", "translateY(0px)");
              CORE.setStyle(el.firstElementChild, {"opacity":0, "transform":"translateY(0px)"});
              pull_down = false;
              in_progress = false;
            });
          } else {
            CORE.setStyle(el.firstElementChild.nextElementSibling, "transform", "translateY(0px)");
            CORE.setStyle(el.firstElementChild, {"opacity":0, "transform":"translateY(0px)"});
            pull_down = false;
          }
        } else {
          pull_down = false;
          in_progress = false;
        }
      }
      this.removeEventListener("touchmove", pull_touch_move_handler);
    }, false, false);
  };
})(APP.LAYOUT, APP.CONTROLLER, /** @type {_storage_struct} */ (APP.STORAGE), APP.EVENT);




/** @const */ APP.VIEWPORT = function() {
  var resizeTime = null;
  var register_viewport_update = function() {
    if (resizeTime) {
      CORE.clear(resizeTime);
    }
    resizeTime = CORE.async(setupViewportAndZoom, 50);
  };
  CORE.paint(function() {
    setupViewportAndZoom();
    if (CORE.System.isMobile) {
      if (CONFIG.FORCE_ORIENTATION && CONFIG.FORCE_ORIENTATION !== "none") {
        lock_orientation(CONFIG.FORCE_ORIENTATION);
        window.addEventListener("orientationchange", register_viewport_update);
      }
    }
    window.addEventListener("resize", register_viewport_update);
    if (!CONFIG.HIDE_STATUSBAR && CORE.System.isMobile && screen.height === window.innerHeight) {
      var statusbar_height = CORE.Math.max(screen.height - screen.availHeight - 20, CONFIG.ENV === "production" ? 20 : 0);
      var navbar_height = 69 - statusbar_height;
      if (statusbar_height > 0) {
        if (window["StatusBar"]) {
          CORE.addCssRule(".navbar.status-bar", {"height":navbar_height + statusbar_height + "pt", "padding-top":statusbar_height + "pt"});
          CORE.addCssRule(".viewport.status-bar", "top", navbar_height + statusbar_height + "pt");
        } else {
          CORE.addCssRule(".navbar", {"height":navbar_height + statusbar_height + "pt", "padding-top":statusbar_height + "pt"});
          CORE.addCssRule(".sticky", {"height":navbar_height + statusbar_height + "pt", "padding-top":statusbar_height + "pt"});
          CORE.addCssRule(".viewport", "top", navbar_height + statusbar_height + "pt");
        }
      }
    }
  }, 200);
  function setupViewportAndZoom() {
    if (DEBUG) {
      CORE.console.log("Setup Viewport");
    }
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    var newWidth = window_width;
    var newHeight = window_height;
    var zoom = 1;
    if (CONFIG.FORCE_ORIENTATION === "portrait") {
      if (newHeight < CONFIG.MIN_DIMENSION) {
        newHeight = CONFIG.MIN_DIMENSION;
        newWidth = Math.round(newHeight * (window_width / window_height));
      } else {
        if (newHeight > CONFIG.MAX_DIMENSION) {
          newHeight = CONFIG.MAX_DIMENSION;
          newWidth = Math.round(newHeight * (window_width / window_height));
        }
      }
      if (newHeight / newWidth < CONFIG.MIN_ASPECT_RATIO) {
        newWidth = Math.round(newHeight / CONFIG.MIN_ASPECT_RATIO);
      }
      zoom = window_height / newHeight;
      if (newHeight / newWidth > CONFIG.MAX_ASPECT_RATIO) {
        newWidth = Math.round(newHeight / CONFIG.MAX_ASPECT_RATIO);
        zoom = window_width / newWidth;
      }
    } else {
      if (CONFIG.FORCE_ORIENTATION === "landscape") {
        if (newWidth < CONFIG.MIN_DIMENSION) {
          newWidth = CONFIG.MIN_DIMENSION;
          newHeight = Math.round(newWidth * (window_height / window_width));
        }
        if (newWidth > CONFIG.MAX_DIMENSION) {
          newWidth = CONFIG.MAX_DIMENSION;
          newHeight = Math.round(newWidth * (window_height / window_width));
        }
        if (newWidth / newHeight < CONFIG.MIN_ASPECT_RATIO) {
          newHeight = Math.round(newWidth / CONFIG.MIN_ASPECT_RATIO);
        }
        zoom = window_width / newWidth;
        if (newWidth / newHeight > CONFIG.MAX_ASPECT_RATIO) {
          newHeight = Math.round(newWidth / CONFIG.MAX_ASPECT_RATIO);
          zoom = window_height / newHeight;
        }
      }
    }
    APP.VARS.ZOOM = zoom;
    APP.VARS.WIDTH = newWidth;
    APP.VARS.HEIGHT = newHeight;
    if (newHeight !== window_height || newWidth !== window_width) {
      CORE.setStyle(window.document.body, {"width":newWidth + "px", "height":newHeight + "px", "transform":"scale(" + zoom + ") translateX(" + (window_width - newWidth) / zoom / 2 + "px) translateY(" + (window_height - newHeight) / zoom / 2 + "px)"});
    } else {
      CORE.setStyle(window.document.body, {"width":"", "height":"", "transform":""});
    }
    if (DEBUG) {
      CORE.console.log("Resolution (W/H): " + window_width + " x " + window_height + " --\x3e " + newWidth + " x " + newHeight + " (Zoom: " + zoom + ")");
    }
  }
  function lock_orientation(lock_orientation) {
    if (DEBUG) {
      CORE.console.log("Lock Orientation: " + lock_orientation);
    }
    try {
      if (window["plugins"] && window["plugins"]["orientationLock"]) {
        window["plugins"]["orientationLock"]["lock"](lock_orientation).catch(function() {
        });
      }
      var orientation = window.screen["orientation"];
      var prefix = CORE.prefix.replace(/-/g, "");
      if (orientation["lock"]) {
        orientation["lock"](lock_orientation).catch(function() {
        });
      } else {
        if (window["lockOrientation"]) {
          window["lockOrientation"](lock_orientation + "-primary").catch(function() {
          });
        } else {
          if (window[prefix + "LockOrientation"]) {
            window[prefix + "LockOrientation"](lock_orientation + "-primary").catch(function() {
            });
          } else {
            if (window["lockOrientationUniversal"]) {
              window["lockOrientationUniversal"](lock_orientation + "-primary").catch(function() {
              });
            } else {
              if (orientation && orientation["lock"]) {
                orientation["lock"](lock_orientation + "-primary").catch(function() {
                });
              } else {
                orientation = window.screen[prefix + "Orientation"];
                if (orientation && orientation["lock"]) {
                  orientation["lock"](lock_orientation + "-primary").catch(function() {
                  });
                }
              }
            }
          }
        }
      }
    } catch (e) {
    }
  }
  return {WIDTH:APP.VARS.WIDTH, HEIGHT:APP.VARS.HEIGHT, ZOOM:APP.VARS.ZOOM, SCALE:APP.VARS.ZOOM, ASPECT_RATIO:"unsupported", ORIENTATION:"unsupported", update:register_viewport_update, lockOrientation:lock_orientation};
}();




APP.WORKER = function() {
  return {/**
 @param {!string} name
 @param {!Function} worker
 @param {!Function} callback
 */
register:function(name, worker, callback) {
    var worker_payload = URL.createObjectURL ? URL.createObjectURL(new Blob(["(" + worker.toString() + ")()"], {"type":"text/javascript"})) : "worker/" + name + ".js";
    APP.WORKER[name] = new Worker(worker_payload);
    APP.WORKER[name].onmessage = callback;
    if (DEBUG) {
      CORE.console.log("Register Worker@" + name);
    }
  }};
}();


























(function() {
  var onload_triggered = false;
  document.addEventListener("deviceready", window.onload = function() {
    if (onload_triggered) {
      return;
    } else {
      onload_triggered = true;
    }
    APP.INIT();
    CORE.stack([initialize_settings, initialize_storage, initialize_app, initialize_config, initialize_debug, initialize_layout, initialize_translations, initialize_views, initialize_events, initialize_models, runApp]);
  }, false);
  /** @type {(function()|number|null)} */ var runApp = function() {
    if (APP.CONFIG.PROC) {
      return CORE.async(/** @type {Function} */ (runApp));
    }
    if (DEBUG) {
      CORE.console.log("App initialized successfully.");
    }
    APP.SETUP();
    document.removeEventListener("deviceready", window.onload);
    window.onload = null;
    delete APP.INIT;
    delete APP.SETUP;
    delete APP.MAIN;
    initialize_settings = null;
    initialize_storage = null;
    initialize_app = null;
    initialize_config = null;
    initialize_debug = null;
    initialize_layout = null;
    initialize_translations = null;
    initialize_views = null;
    initialize_events = null;
    initialize_models = null;
    CORE.async(function() {
      runApp = null;
    }, 1);
  };
  /** @type {(Function|null)} */ var initialize_settings = function() {
    /** @type {_storage_interface} */ (APP.SETTINGS = new CORE.Storage("app_settings"));
    /** @type {_storage_interface} */ (APP.STORAGE.VIEW = new CORE.Storage("app_view"));
  };
  /** @type {(Function|null)} */ var initialize_app = function() {
    if (DEBUG) {
      CORE.console.log("Initialize App");
      if (CONFIG.SHOW_DEBUG) {
        CORE.setStyle("debug-log", "display", "block");
        CORE.setStyle("debug-stats", "display", "block");
      }
    }
    if (CONFIG.RACK === "webapp") {
      CORE.async(function() {
        var applicationCache = window["applicationCache"];
        if (applicationCache) {
          if (DEBUG) {
            CORE.console.log("Check Update (ApplicationCache), Status: " + applicationCache["status"]);
          }
          applicationCache.addEventListener("updateready", function() {
            if (applicationCache["status"] === applicationCache["UPDATEREADY"]) {
              applicationCache["swapCache"]();
              APP.LAYOUT.show_confirmation("A new update of this app was installed successfully. Restart app to take effect changes?", function() {
                if (APP.HANDLER["app_update"]) {
                  APP.HANDLER["app_update"]();
                }
                window.location.reload();
              });
            } else {
              if (DEBUG) {
                CORE.console.log("Status ApplicationCache: " + applicationCache["status"]);
              }
            }
          }, false);
          try {
            applicationCache["update"]();
          } catch (e) {
          }
        }
      });
    }
  };
  /** @type {(Function|null)} */ var initialize_config = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Config");
    }
    APP.CONFIG.LANG = (navigator.language || navigator["userLanguage"] || "en").substring(0, 2);
  };
  /** @type {(Function|null)} */ var initialize_debug = function() {
    if (DEBUG) {
      if (DEBUG) {
        CORE.console.log("Initialize Debug");
      }
      if (window["applicationCache"]) {
        var logEvent = function(event) {
          if (DEBUG) {
            CORE.console.log(event.type);
          }
        };
        var applicationCacheEvents = ["checking", "noupdate", "downloading", "cached", "updateready", "obsolete", "error"];
        for (var i = 0; i < applicationCacheEvents.length; i++) {
          window["applicationCache"].addEventListener(applicationCacheEvents[i], logEvent, false);
        }
      }
    }
  };
  /** @type {(Function|null)} */ var initialize_layout = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Layout");
    }
    var definitions = APP.CONFIG.LAYOUT;
    if (/** @type {Array<string>} */ (definitions)) {
      var html = "";
      for (var i = 0; i < definitions.length; i++) {
        for (var a = 0; a < APP.HTML[definitions[i]].length; a++) {
          var current = APP.HTML[definitions[i]][a];
          var include = current.include;
          if (include) {
            if (APP.HTML[include]) {
              for (var x = 0; x < APP.HTML[include].length; x++) {
                if (x === 0) {
                  APP.HTML[definitions[i]][a] = current = APP.HTML[include][x];
                } else {
                  APP.HTML[definitions[i]].splice(a + x, 0, APP.HTML[include][x]);
                }
              }
            } else {
              if (APP.VIEW[include]) {
                for (var x = 0; x < APP.VIEW[include].length; x++) {
                  if (x === 0) {
                    APP.HTML[definitions[i]][a] = current = APP.VIEW[include][x];
                  } else {
                    APP.HTML[definitions[i]].splice(a + x, 0, APP.VIEW[include][x]);
                  }
                }
              }
            }
          }
          html += current.data[0];
        }
      }
      delete APP.HTML;
      delete APP.CONFIG.LAYOUT;
      var destination = document.createElement("div");
      CORE.setHTML(destination, html, false);
      for (var i = destination.childNodes.length - 1; i >= 0; i--) {
        document.body.insertBefore(destination.childNodes[i], document.body.childNodes[0]);
      }
      definitions = null;
      html = null;
    }
  };
  /** @type {(Function|null)} */ var initialize_views = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Views");
    }
    var views = APP.VIEW;
    for (var view in views) {
      if (views.hasOwnProperty(view)) {
        var template = views[view];
        for (var i = 0; i < template.length; i++) {
          /** @type {_template_struct} */ var block = template[i];
          if (block.include) {
            for (var x = 0; x < views[block.include].length; x++) {
              if (x === 0) {
                template[i] = views[block.include][x];
              } else {
                template.splice(i + x, 0, views[block.include][x]);
              }
            }
            block = template[i];
          }
          if (block.if && CORE.isType(block.if, "string")) {
            block.if = Function("val", "return (" + block.if + ") ? true : false;");
          }
        }
      }
    }
  };
  /** @type {(Function|null)} */ var initialize_events = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Events");
    }
    try {
      window.addEventListener("test", null, /** @type {?} */ (Object.defineProperty({}, "passive", {"get":function() {
        APP.CONFIG.EVENT_OPTIONS = {"passive":true};
        if (DEBUG) {
          CORE.console.log("Passive Events Supported");
        }
      }})));
    } catch (e) {
    }
    for (var key in APP.EVENT) {
      if (APP.EVENT.hasOwnProperty(key)) {
        var events = APP.EVENT[key];
        if (!events) {
          continue;
        }
        var node = key === "document" ? document : key === "body" ? document.body : CORE.getById(key);
        if (!node) {
          if (DEBUG) {
            CORE.console.warn("WARNING: Element " + key + " was missing for binding event.");
          }
          continue;
        }
        if (events) {
          events.length || (events = [events]);
          for (var i = 0; i < events.length; i++) {
            /** @type {_event_struct} */ var event = events[i];
            /** @type {(Function|null)} */ var event_caller = event.to ? function(event) {
              return function(e) {
                APP.CONTROLLER.request(event.to, APP.PAYLOAD[event.to] ? APP.PAYLOAD[event.to].call(this, e) : APP.ROUTE[event.to].params);
              };
            }(event) : CORE.isType(event.do, "string") ? APP.HANDLER[event.do] : event.do || (event.go ? function(event) {
              return function(e) {
                APP.LAYOUT.handleCache(APP.LAYOUT.lastAction = event.go);
              };
            }(event) : void 0);
            if (event.if) {
              var delegateByClass = event.if.charAt(0) === ".";
              var delegateByTagClass = delegateByClass === false && event.if.indexOf(".") > 0;
              if (delegateByTagClass) {
                CORE.on(node, event.if, event.on, event_caller, event.preventDefault, event.stopBubble, key);
              } else {
                CORE.on(node, event.if, event.on, event_caller, event.preventDefault, event.stopBubble, key);
              }
            } else {
              CORE.on(node, "", event.on, event_caller, event.preventDefault, event.stopBubble, key);
            }
          }
        }
      }
    }
  };
  /** @type {(Function|null)} */ var initialize_translations = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Translations");
    }
    APP.CONTROLLER.changeLanguage(APP.CONFIG.LANG);
  };
  /** @type {(Function|null)} */ var initialize_storage = function() {
    if (DEBUG) {
      CORE.console.log("Load Storage");
    }
  };
  /** @type {(Function|null)} */ var initialize_models = function() {
    if (DEBUG) {
      CORE.console.log("Initialize Models");
    }
  };
  /** @type {(function(number=)|null)} */ var determine_storage_size = function(error) {
    var localStorage = window.localStorage;
    if (localStorage) {
      var minimalFound = APP.SETTINGS.get("localStorageMaxSize");
      if (minimalFound) {
        APP.VARS.MAX_STORAGE = parseInt(minimalFound, 10);
        var t = 0, len;
        for (var x in localStorage) {
          if (localStorage.hasOwnProperty(x)) {
            len = localStorage[x].length;
            if (len) {
              t += (x.length + len) * 2;
            }
          }
        }
        APP.VARS.USED_STORAGE = t;
        if (DEBUG) {
          CORE.console.log("Current Storage Usage: " + (APP.VARS.USED_STORAGE / 1024 / 1024 * 100 | 0) / 100 + " / " + (APP.VARS.MAX_STORAGE / 1024 / 1024 * 100 | 0) / 100 + " Mb (" + (100 / APP.VARS.MAX_STORAGE * APP.VARS.USED_STORAGE * 100 | 0) / 100 + "%)");
        }
        if (APP.VARS.USED_STORAGE >= APP.VARS.MAX_STORAGE) {
          if (DEBUG) {
            CORE.console.warn("WARNING: Max storage limit was reached!");
          }
          localStorage.clear();
        }
        return;
      } else {
        minimalFound = 0;
      }
      var max = 10 * 1024 * 1024, i = 64, string1024 = "", string = "", testKey = "size-test-" + Math.random().toString();
      error || (error = 25e4);
      while (i--) {
        string1024 += 1e16;
      }
      i = max / 1024;
      while (i--) {
        string += string1024;
      }
      i = max;
      (function procLocalStorageMaxSize(localStorage, testKey, string, minimalFound, i, error) {
        if (i > 1 && minimalFound < i - error) {
          try {
            localStorage.setItem(testKey, string.substr(0, i));
            localStorage.removeItem(testKey);
            if (minimalFound < i - error) {
              minimalFound = i;
              i = i * 1.5;
            }
          } catch (e) {
            localStorage.removeItem(testKey);
            i = minimalFound + (i - minimalFound) / 2;
          }
          CORE.async(function() {
            procLocalStorageMaxSize(localStorage, testKey, string, minimalFound, i, error);
          }, 1);
        } else {
          APP.VARS.MAX_STORAGE = minimalFound;
          APP.SETTINGS.set("localStorageMaxSize", "" + minimalFound);
          if (DEBUG) {
            CORE.console.log("Determine LocalStorage Capacity: " + (APP.VARS.MAX_STORAGE / 1024 / 1024 * 100 | 0) / 100 + " Mb");
          }
        }
        if (APP.VARS.USED_STORAGE >= APP.VARS.MAX_STORAGE) {
          if (DEBUG) {
            CORE.console.warn("WARNING: Max storage limit was reached!");
          }
        }
      })(localStorage, testKey, string, minimalFound, i, error);
    }
  };
})();

}).call(this);
