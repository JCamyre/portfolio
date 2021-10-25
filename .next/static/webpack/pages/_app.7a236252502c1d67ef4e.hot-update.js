"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\components\\theme-toggle-button.js",
    _this = undefined,
    _s = $RefreshSig$();






var ThemeToggleButton = function ThemeToggleButton() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode; // changes its own color and icon and runs toggleColorMode when clicked
  // Not totaly sure how colorModeValue changes theme colors


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
      "aria-label": "Toggle theme",
      colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),
      icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 37
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 51
      }, _this)),
      onClick: toggleColorMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(ThemeToggleButton, "z6iVz21kxQGTgymWp2190T2RIQw=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue];
});

_c = ThemeToggleButton;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

var _c;

$RefreshReg$(_c, "ThemeToggleButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43YTIzNjI1MjUwMmMxZDY3ZWY0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFDNUIsc0JBQTRCTiw4REFBWSxFQUF4QztBQUFBLE1BQVFPLGVBQVIsaUJBQVFBLGVBQVIsQ0FENEIsQ0FHNUI7QUFDQTs7O0FBQ0Esc0JBQ0ksOERBQUMsMERBQUQ7QUFBaUIsbUJBQWUsTUFBaEM7QUFBaUMsV0FBTyxFQUFFLEtBQTFDO0FBQUEsMkJBQ0ksOERBQUMsd0RBQUQ7QUFBWSxvQkFBVyxjQUF2QjtBQUFzQyxpQkFBVyxFQUFFTixtRUFBaUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFwRTtBQUNBLFVBQUksRUFBRUEsbUVBQWlCLGVBQUMsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFELGVBQWUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFmLENBRHZCO0FBQ29ELGFBQU8sRUFBRU07QUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBYkQ7O0dBQU1EO1VBQzBCTiw0REFNK0JDLGlFQUM3Q0E7OztLQVJaSztBQWVOLCtEQUFlQSxpQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RoZW1lLXRvZ2dsZS1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBTdW5JY29uLCBNb29uSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgVGhlbWVUb2dnbGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcblxyXG4gICAgLy8gY2hhbmdlcyBpdHMgb3duIGNvbG9yIGFuZCBpY29uIGFuZCBydW5zIHRvZ2dsZUNvbG9yTW9kZSB3aGVuIGNsaWNrZWRcclxuICAgIC8vIE5vdCB0b3RhbHkgc3VyZSBob3cgY29sb3JNb2RlVmFsdWUgY2hhbmdlcyB0aGVtZSBjb2xvcnNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSdUb2dnbGUgdGhlbWUnIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfSBcclxuICAgICAgICAgICAgaWNvbj17dXNlQ29sb3JNb2RlVmFsdWUoPE1vb25JY29uIC8+LCA8U3VuSWNvbiAvPil9IG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX0+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT4gICAgICAgIFxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=