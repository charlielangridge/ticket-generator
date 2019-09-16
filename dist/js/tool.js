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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('ticket-generator', __webpack_require__(2));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resourceName', 'resourceId', 'field'],
    data: function data() {
        return {
            qty: null,
            price: null
        };
    },
    mounted: function mounted() {},

    methods: {
        reset: function reset() {
            this.qty = null;
            this.price = null;
        },
        generateTickets: function generateTickets() {
            if (this.qty !== null && this.qty > 0) {

                if (this.price != null && this.price > 0) {
                    this.runTicketGeneration();
                } else {
                    alert('Price needed');
                }
            } else {
                alert('Qty needed');
            }
        },
        runTicketGeneration: function runTicketGeneration() {
            var _this = this;

            Nova.request().post('/nova-vendor/ticket-generator/generate', {
                eventId: this.resourceId,
                qty: this.qty,
                price: this.price
            }).then(function (response) {
                if (response.data['generated'] > 0) {
                    _this.$toasted.show(response.data['generated'] + " Tickets Generated", { type: "success" });
                }
                if (response.data['failed'] > 0) {
                    self.$toasted.show(response.data['failed'] + " Tickets Failed", { type: "error" });
                }
                window.location.reload();
            }).catch(function (error) {
                self.$toasted.show(error.response, { type: "error" });
            });
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-8" }, [
    _c("div", [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "relative" }, [
        _c("div", { staticClass: "card mb-6" }, [
          _c("div", { staticClass: "flex border-b border-40" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "py-6 px-8 w-1/2" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.qty,
                    expression: "qty"
                  }
                ],
                staticClass:
                  "w-full form-control form-input form-input-bordered",
                attrs: {
                  id: "qty",
                  type: "number",
                  name: "qty",
                  placeholder: "10",
                  step: "1",
                  min: "1"
                },
                domProps: { value: _vm.qty },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.qty = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "help-text help-text mt-2" })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex border-b border-40" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "py-6 px-8 w-1/2" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.price,
                    expression: "price"
                  }
                ],
                staticClass:
                  "w-full form-control form-input form-input-bordered",
                attrs: {
                  id: "price",
                  type: "number",
                  name: "price",
                  placeholder: "100",
                  step: "1",
                  min: "1"
                },
                domProps: { value: _vm.price },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.price = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "help-text help-text mt-2" })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center" }, [
          _c(
            "a",
            {
              staticClass:
                "btn btn-link dim cursor-pointer text-80 ml-auto mr-6",
              attrs: { tabindex: "0" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.reset($event)
                }
              }
            },
            [_vm._v("\n                Cancel\n            ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "btn btn-default btn-primary inline-flex items-center relative",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.generateTickets($event)
                }
              }
            },
            [
              _c("span", {}, [
                _vm._v(
                  "\n                        Generate Tickets\n                    "
                )
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex items-center mb-3" }, [
      _c("h1", { staticClass: "flex-no-shrink text-90 font-normal text-2xl" }, [
        _vm._v("Generate Tickets")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/5 px-8 py-6" }, [
      _c(
        "label",
        {
          staticClass: "inline-block text-80 pt-2 leading-tight",
          attrs: { for: "qty" }
        },
        [
          _vm._v(
            "\n                        Number of Tickets\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-1/5 px-8 py-6" }, [
      _c(
        "label",
        {
          staticClass: "inline-block text-80 pt-2 leading-tight",
          attrs: { for: "price" }
        },
        [
          _vm._v(
            "\n                        Price in Pence\n                    "
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);