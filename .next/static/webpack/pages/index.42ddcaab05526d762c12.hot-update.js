"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\components\\section.js",
    _this = undefined;


 // idk how framer-motion works


var StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
}); // Making my own animation (when the page first loads), fades in and rises up a little bit
// Any time you need a div with animation, boom

_c = StyledDiv;

var Section = function Section(_ref) {
  var children = _ref.children,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {
    initial: {
      y: 10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.8,
      delay: delay
    },
    mb: 6,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c2 = Section;
/* harmony default export */ __webpack_exports__["default"] = (Section);

var _c, _c2;

$RefreshReg$(_c, "StyledDiv");
$RefreshReg$(_c2, "Section");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDJkZGNhYWIwNTUyNmQ3NjJjMTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOzs7QUFDQSxJQUFNRyxTQUFTLEdBQUdGLHdEQUFNLENBQUNELHFEQUFELEVBQWE7QUFDakNFLEVBQUFBLGlCQUFpQixFQUFFLDJCQUFBRyxJQUFJLEVBQUk7QUFDdkIsV0FBT0gsbUVBQWlCLENBQUNHLElBQUQsQ0FBakIsSUFBMkJBLElBQUksS0FBSyxZQUEzQztBQUNIO0FBSGdDLENBQWIsQ0FBeEIsRUFNQTtBQUNBOztLQVBNRjs7QUFRTixJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHdCQUFhQyxLQUFiO0FBQUEsTUFBYUEsS0FBYiwyQkFBbUIsQ0FBbkI7QUFBQSxzQkFDWiw4REFBQyxTQUFEO0FBQVcsV0FBTyxFQUFFO0FBQUNDLE1BQUFBLENBQUMsRUFBRSxFQUFKO0FBQVFDLE1BQUFBLE9BQU8sRUFBRTtBQUFqQixLQUFwQjtBQUF5QyxXQUFPLEVBQUU7QUFBQ0QsTUFBQUEsQ0FBQyxFQUFFLENBQUo7QUFBT0MsTUFBQUEsT0FBTyxFQUFDO0FBQWYsS0FBbEQ7QUFBcUUsY0FBVSxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxHQUFaO0FBQWlCSCxNQUFBQSxLQUFLLEVBQUxBO0FBQWpCLEtBQWpGO0FBQTJHLE1BQUUsRUFBRSxDQUEvRztBQUFBLGNBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O01BQU1EO0FBTU4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBjaGFrcmEsIHNob3VsZEZvcndhcmRQcm9wIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG4vLyBpZGsgaG93IGZyYW1lci1tb3Rpb24gd29ya3NcclxuY29uc3QgU3R5bGVkRGl2ID0gY2hha3JhKG1vdGlvbi5kaXYsIHtcclxuICAgIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHtcclxuICAgICAgICByZXR1cm4gc2hvdWxkRm9yd2FyZFByb3AocHJvcCkgfHwgcHJvcCA9PT0gJ3RyYW5zaXRpb24nXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gTWFraW5nIG15IG93biBhbmltYXRpb24gKHdoZW4gdGhlIHBhZ2UgZmlyc3QgbG9hZHMpLCBmYWRlcyBpbiBhbmQgcmlzZXMgdXAgYSBsaXR0bGUgYml0XHJcbi8vIEFueSB0aW1lIHlvdSBuZWVkIGEgZGl2IHdpdGggYW5pbWF0aW9uLCBib29tXHJcbmNvbnN0IFNlY3Rpb24gPSAoeyBjaGlsZHJlbiwgZGVsYXk9MCB9KSA9PiAoXHJcbiAgICA8U3R5bGVkRGl2IGluaXRpYWw9e3t5OiAxMCwgb3BhY2l0eTogMH19IGFuaW1hdGU9e3t5OiAwLCBvcGFjaXR5OjF9fSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGRlbGF5IH19IG1iPXs2fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1N0eWxlZERpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjsiXSwibmFtZXMiOlsibW90aW9uIiwiY2hha3JhIiwic2hvdWxkRm9yd2FyZFByb3AiLCJTdHlsZWREaXYiLCJkaXYiLCJwcm9wIiwiU2VjdGlvbiIsImNoaWxkcmVuIiwiZGVsYXkiLCJ5Iiwib3BhY2l0eSIsImR1cmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==