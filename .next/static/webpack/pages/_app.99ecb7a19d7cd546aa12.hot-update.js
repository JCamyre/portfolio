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
        lineNumber: 12,
        columnNumber: 123
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 137
      }, _this)),
      onClick: toggleColorMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45OWVjYjdhMTlkN2NkNTQ2YWExMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFBQTs7QUFDNUIsc0JBQTRCTiw4REFBWSxFQUF4QztBQUFBLE1BQVFPLGVBQVIsaUJBQVFBLGVBQVIsQ0FENEIsQ0FHNUI7QUFDQTs7O0FBQ0Esc0JBQ0ksOERBQUMsMERBQUQ7QUFBaUIsbUJBQWUsTUFBaEM7QUFBaUMsV0FBTyxFQUFFLEtBQTFDO0FBQUEsMkJBQ0EsOERBQUMsd0RBQUQ7QUFBWSxvQkFBVyxjQUF2QjtBQUFzQyxpQkFBVyxFQUFFTixtRUFBaUIsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFwRTtBQUEwRixVQUFJLEVBQUVBLG1FQUFpQixlQUFDLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRCxlQUFlLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZixDQUFqSDtBQUNZLGFBQU8sRUFBRU07QUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVFILENBYkQ7O0dBQU1EO1VBQzBCTiw0REFNMkJDLGlFQUE2Q0E7OztLQVBsR0s7QUFlTiwrREFBZUEsaUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aGVtZS10b2dnbGUtYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb25CdXR0b24sIHVzZUNvbG9yTW9kZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU3VuSWNvbiwgTW9vbkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xyXG5cclxuICAgIC8vIGNoYW5nZXMgaXRzIG93biBjb2xvciBhbmQgaWNvbiBhbmQgcnVucyB0b2dnbGVDb2xvck1vZGUgd2hlbiBjbGlja2VkXHJcbiAgICAvLyBOb3QgdG90YWx5IHN1cmUgaG93IGNvbG9yTW9kZVZhbHVlIGNoYW5nZXMgdGhlbWUgY29sb3JzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSdUb2dnbGUgdGhlbWUnIGNvbG9yU2NoZW1lPXt1c2VDb2xvck1vZGVWYWx1ZSgncHVycGxlJywgJ29yYW5nZScpfSBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9PlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT4gICAgICAgIFxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhlbWVUb2dnbGVCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJTdW5JY29uIiwiTW9vbkljb24iLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsInRvZ2dsZUNvbG9yTW9kZSJdLCJzb3VyY2VSb290IjoiIn0=