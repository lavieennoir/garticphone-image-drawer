(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object")
    exports["reactTriggerEvent"] = factory();
  else root["reactTriggerEvent"] = factory();
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId])
        /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)
      /******/
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
    /******/
    /******/ /******/ __webpack_require__.i = function (value) {
      return value;
    }; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module["default"];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, "a", getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        // Trigger React's synthetic events on input, textarea and select elements
        // https://github.com/facebook/react/pull/4051 - React 15 fix
        // https://github.com/facebook/react/pull/5746 - React 16 fix

        // Constants and functions are declared inside the closure.
        // In this way, reactTriggerEvent can be passed directly to executeScript in Selenium.
        module.exports = function reactTriggerEvent(
          node,
          eventName = "change",
          options = {}
        ) {
          var event;
          var descriptor;
          var initialValue;

          // Do not try to delete non-configurable properties.
          // Value and checked properties on DOM elements are non-configurable in PhantomJS.
          function deletePropertySafe(elem, prop) {
            var desc = Object.getOwnPropertyDescriptor(elem, prop);
            if (desc && desc.configurable) {
              delete elem[prop];
            }
          }

          function getNextColor(color) {
            var newColor = `#${(parseInt(color.substr(1), 16) + 1).toString(
              16
            )}`;

            return newColor === "#1000000" ? "#000000" : newColor;
          }

          if (eventName === "change") {
            // React 16
            // Cache artificial value property descriptor.
            // Property doesn't exist in React <16, descriptor is undefined.
            descriptor = Object.getOwnPropertyDescriptor(node, "value");

            // React 0.14: IE9
            // React 15: IE9-IE11
            // React 16: IE9
            // Dispatch focus.
            event = document.createEvent("UIEvents");
            event.initEvent("focus", false, false);
            node.dispatchEvent(event);

            // React 0.14: IE9
            // React 15: IE9-IE11
            // React 16
            // In IE9-10 imperative change of node value triggers propertychange event.
            // Update inputValueTracking cached value.
            // Remove artificial value property.
            // Restore initial value to trigger event with it.
            initialValue = node.value;
            // node.value = initialValue + "#";
            node.value = getNextColor(initialValue);
            deletePropertySafe(node, "value");
            node.value = initialValue;

            // React 15: IE11
            // For unknown reason React 15 added listener for propertychange with addEventListener.
            // This doesn't work, propertychange events are deprecated in IE11,
            // but allows us to dispatch fake propertychange which is handled by IE11.
            event = document.createEvent("HTMLEvents");
            event.initEvent("propertychange", false, false);
            event.propertyName = "value";
            node.dispatchEvent(event);

            // React 0.14: IE10-IE11, non-IE
            // React 15: non-IE
            // React 16: IE10-IE11, non-IE
            event = document.createEvent("HTMLEvents");
            event.initEvent("input", true, false);
            node.dispatchEvent(event);

            // React 16
            // Restore artificial value property descriptor.
            if (descriptor) {
              Object.defineProperty(node, "value", descriptor);
            }
          } else {
            // Handle other mouse event types
            event = new MouseEvent(eventName, { bubbles: true, ...options });
            node.dispatchEvent(event);
          }
        };

        /***/
      },
      /******/
    ]
  );
});
