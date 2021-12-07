(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/@capacitor/core/dist/index.js":
    /*!****************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/index.js ***!
      \****************************************************/

    /*! exports provided: Capacitor, CapacitorException, CapacitorPlatforms, ExceptionCode, Plugins, WebPlugin, WebView, addPlatform, registerPlugin, registerWebPlugin, setPlatform */

    /***/
    function node_modulesCapacitorCoreDistIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Capacitor", function () {
        return Capacitor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorException", function () {
        return CapacitorException;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CapacitorPlatforms", function () {
        return CapacitorPlatforms;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExceptionCode", function () {
        return ExceptionCode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Plugins", function () {
        return Plugins;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebPlugin", function () {
        return WebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebView", function () {
        return WebView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addPlatform", function () {
        return addPlatform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerPlugin", function () {
        return registerPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function () {
        return registerWebPlugin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setPlatform", function () {
        return setPlatform;
      });
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var addPlatform = CapacitorPlatforms.addPlatform;
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var setPlatform = CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(ExceptionCode || (ExceptionCode = {}));

      var CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(CapacitorException, _Error);

        var _super = _createSuper(CapacitorException);

        function CapacitorException(message, code) {
          var _this;

          _classCallCheck(this, CapacitorException);

          _this = _super.call(this, message);
          _this.message = message;
          _this.code = code;
          return _this;
        }

        return CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var capCustomPlatform = win.CapacitorCustomPlatform || null;
        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        /**
         * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
         */

        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatform() !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 11;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;

                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context.t0;
                      _context.next = 20;
                      break;

                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.next = 20;
                        break;
                      }

                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.next = 18;
                        break;
                      }

                      _context.next = 15;
                      return jsImplementations['web']();

                    case 15:
                      _context.t1 = jsImplementation = _context.sent;
                      _context.next = 19;
                      break;

                    case 18:
                      _context.t1 = jsImplementation = jsImplementations['web'];

                    case 19:
                      jsImplementation = _context.t1;

                    case 20:
                      return _context.abrupt("return", jsImplementation);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;

                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'toJSON':
                  return function () {
                    return {};
                  };

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      var registerPlugin = Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var Plugins = Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var registerWebPlugin = function registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var WebPlugin = /*#__PURE__*/function () {
        function WebPlugin(config) {
          _classCallCheck(this, WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this2 = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context6.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function value() {
                  return _value.apply(this, arguments);
                }

                return value;
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function () {
            var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listener;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.listeners = {};

                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }

                      this.windowListeners = {};

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function removeAllListeners() {
              return _removeAllListeners.apply(this, arguments);
            }

            return removeAllListeners;
          }()
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this3 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this3.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function () {
            var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(eventName, listenerFunc) {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      listeners = this.listeners[eventName];

                      if (listeners) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener

                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function removeListener(_x, _x2) {
              return _removeListener.apply(this, arguments);
            }

            return removeListener;
          }()
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return WebPlugin;
      }();

      var WebView = /*#__PURE__*/registerPlugin('WebView'); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/@capacitor/push-notifications/dist/esm/definitions.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
      \****************************************************************************/

    /*! no exports provided */

    /***/
    function node_modulesCapacitorPushNotificationsDistEsmDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); /// <reference types="@capacitor/cli" />
      //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    "./node_modules/@capacitor/push-notifications/dist/esm/index.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
      \**********************************************************************/

    /*! exports provided: PushNotifications */

    /***/
    function node_modulesCapacitorPushNotificationsDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PushNotifications", function () {
        return PushNotifications;
      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/index.js");
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      "./node_modules/@capacitor/push-notifications/dist/esm/definitions.js");
      /* empty/unused harmony star reexport */


      var PushNotifications = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('PushNotifications', {}); //# sourceMappingURL=index.js.map

      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\" class = \"content-with-full-height \">\n\n\n<ion-card-header class=\"headerText \">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <a href=\"https://twitter.com/msema\">\n                    <ion-icon size=\"small\" name=\"logo-facebook\"></ion-icon>\n                </a>\n                <a href=\"https://www.facebook.com/msemaorg/\">\n                    <ion-icon size=\"small\" name=\"logo-twitter\"></ion-icon>\n                </a>\n                <a href=\"https://www.youtube.com/user/MSEMAorg1\">\n                    <ion-icon size=\"small\" ios=\"logo-youtube\" md=\"logo-youtube\"></ion-icon>\n                </a>\n                <img class=\" memaSeal\" src=\"assets/mema-seal.png\" > \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <h1>MISSISSIPPI EMERGENCY MANAGEMENT AGENCY</h1>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-card-header>\n\n\n\n    <!-- <iframe height='100%' width=\"100%\" title=\"website\" src=\"https://www.msema.org/\"></iframe> -->\n\n\n\n\n    <ion-grid>\n        <div class=\"iconGrid\"></div>\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">  \n                <button [routerLink]=\"['/tabs/tab2']\" class=\"btn iconButton\" >\n                    <img class=\"imgDocs img-responsive\" src=\"../../assets/Homepage/Plan.png\" alt=\"\">\n                </button>\n                <p>PLAN</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab4']\" class=\"btn iconButton\">\n                    <img  class=\"imgDocs \" src=\"../../assets/Homepage/Shelters.png\" height=\"50\" alt=\"\"> \n                </button>\n                <p>SHELTERS</p>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/disaster']\" class=\"btn iconButton\">\n                    <img  class=\"imgDocs \" src=\"../../assets/disasterPage/tornado.png \" alt=\"\">\n                </button>\n                <p>DISASTERS</p>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab3']\" class=\"btn iconButton\">       \n                    <img  class=\"imgDocs \" src=\"../../assets/Homepage/WeatherAlerts.png\" alt=\"\">\n                </button>\n                <p>WEATHER ALERTS</p>\n            </ion-col>\n            \n            <ion-col class=\"ion-text-center\">\n                <button [routerLink]=\"['/tabs/tab2/insurance']\" class=\"btn iconButton \">\n                    <img class=\"imgDocs \" src=\"../../assets/Homepage/ReportDamage.png\" alt=\"\"> \n                </button>\n                \n                <p>REPORT DAMAGE</p>\n            </ion-col>\n\n            <ion-col class=\"ion-text-center\">\n                <a href=\"htttps://poweroutage.us/area/state/mississippi\">\n                    <button  class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/PowerOutages.png\" alt=\"\"> \n                    </button>\n                </a>\n                <p>POWER OUTAGES</p>\n            </ion-col>\n        </ion-row>\n\n        <ion-row class=\"buttonText ion-align-items-center\">\n            <ion-col class=\"ion-text-center\">\n                <a href=\"https://www.msema.org/news/\">\n                    <button  class=\"btn iconButton\"> \n                        <img class=\"imgDocs \" src=\"../../assets/Homepage/News.png\" alt=\"\">\n                    </button>\n                </a>\n                <p>NEWS</p>\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n               <a href=\"https://www.msema.org/contact/\">\n                    <button class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/MSBEOC APP Logo-fpng.png\" alt=\"\"> \n                    </button>\n                </a>\n                <p>CONTACT</p>\n            </ion-col>\n       \n            <ion-col class=\"ion-text-center\">\n                <a href=\"https://www.msema.org/\">\n                    <button [routerLink]=\"['/tabs/tab2/contacts']\" class=\"btn iconButton\">\n                        <img  class=\"imgDocs \" src=\"../../assets/Homepage/Website.png\" alt=\"\"> \n                    </button>\n                </a>    \n                <p>WEBSITE</p>\n            </ion-col>\n        </ion-row>\n\n\n    </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }, {
        path: "disaster",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | disaster-disaster-module */
          "disaster-disaster-module").then(__webpack_require__.bind(null,
          /*! ../disaster/disaster.module */
          "./src/app/disaster/disaster.module.ts")).then(function (m) {
            return m.DisasterPageModule;
          });
        }
      }, {
        path: "",
        redirectTo: "tabs/tab1",
        pathMatch: "full"
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");

      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerText {\n  text-align: center;\n  background: #061e3d;\n  padding: 0%;\n  margin: 0%;\n  padding-top: 10%;\n}\n\n.headerText ion-icon {\n  color: #fff;\n  margin-right: 3%;\n  float: left;\n}\n\n.headerText img {\n  width: 25% !important;\n  height: auto !important;\n  float: left;\n  margin-left: 25%;\n}\n\n.headerText h1 {\n  text-align: center;\n  font-weight: bolder;\n  color: white;\n  font-size: 13px;\n}\n\nion-grid {\n  position: relative;\n  opacity: 1;\n  z-index: 2;\n}\n\n.iconGrid {\n  position: absolute;\n  background: url('mema-seal.png') 50% 50% no-repeat;\n  background-size: contain;\n  height: 100%;\n  width: 100%;\n  opacity: 0.25;\n  z-index: 0;\n}\n\n.content-with-full-height {\n  --background:white ;\n}\n\n.equal-sized-item {\n  height: 10%;\n}\n\n.buttonText p {\n  margin: 2%;\n  font-size: 18px;\n  font-weight: bolder;\n  color: #061e3d;\n}\n\n.iconButton {\n  padding: 20% 23%;\n  border-style: none;\n  border-radius: 100%;\n  background: #061e3d;\n  background-position: 50% center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDQTs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFJQTtFQUdJLG1CQUFBO0FBSEo7O0FBU0E7RUFDQSxXQUFBO0FBTkE7O0FBYUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVZBOztBQWtCQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQWZBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJUZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzA2MWUzZDtcbiAgICBwYWRkaW5nOiAwJTtcbiAgICBtYXJnaW46IDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5oZWFkZXJUZXh0IGlvbi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyVGV4dCBpbWd7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5oZWFkZXJUZXh0IGgxe1xudGV4dC1hbGlnbjogY2VudGVyO1xuZm9udC13ZWlnaHQ6IGJvbGRlcjtcbmNvbG9yOiB3aGl0ZTtcbmZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG5pb24tZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmljb25HcmlkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9tZW1hLXNlYWwucG5nKSA1MCUgNTAlIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IC4yNTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5cbi5jb250ZW50LXdpdGgtZnVsbC1oZWlnaHR7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6d2hpdGUgO1xuXG4gIH1cblxuXG5cbi5lcXVhbC1zaXplZC1pdGVte1xuaGVpZ2h0OiAxMCVcbn1cblxuXG5cblxuXG4uYnV0dG9uVGV4dCBwIHtcbm1hcmdpbjogMiU7XG5mb250LXNpemU6IDE4cHg7XG5mb250LXdlaWdodDogYm9sZGVyO1xuY29sb3I6ICMwNjFlM2Q7XG59XG5cbi8vIC5pbWdEb2NzIHtcbi8vIGhlaWdodDogYXV0bztcbi8vIHdpZHRoOiBhdXRvO1xuLy8gfVxuXG4uaWNvbkJ1dHRvbiB7XG5wYWRkaW5nOiAyMCUgMjMlO1xuYm9yZGVyLXN0eWxlOiBub25lO1xuYm9yZGVyLXJhZGl1czogMTAwJTtcbmJhY2tncm91bmQ6ICMwNjFlM2QgO1xuYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIGNlbnRlcjtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page() {
          _classCallCheck(this, Tab1Page);
        }

        _createClass(Tab1Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map