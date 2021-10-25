"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "./node_modules/@chakra-ui/theme-tools/dist/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var styles = {
  global: function global(props) {
    return {
      body: {
        // assuming props is the bg value for a particular tag and determines which color
        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202030')(props)
      }
    };
  }
};
var components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: function baseStyle(props) {
      return {
        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3
      };
    }
  }
};
var fonts = {
  heading: "'M PLUS Rounded 1c'"
};
var colors = {
  glassTeal: '#88ccca'
};
var config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}; // use extendTheme to apply all of these styles (after we export theme and import it into other files))

var theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
  config: config,
  styles: styles,
  components: components,
  colors: colors,
  fonts: fonts
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

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


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _components_layouts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/main.js */ "./components/layouts/main.js");
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Website = function Website(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      router = _ref.router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ChakraProvider, {
    theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layouts_main_js__WEBPACK_IMPORTED_MODULE_1__.default, {
      router: router,
      children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = Website;
/* harmony default export */ __webpack_exports__["default"] = (Website);

var _c;

$RefreshReg$(_c, "Website");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43NWE2ODZmNGIzMjUwZDM0NDBkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUUsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQUMsS0FBSztBQUFBLFdBQUs7QUFDZEMsTUFBQUEsSUFBSSxFQUFFO0FBQ0Y7QUFDQUMsUUFBQUEsRUFBRSxFQUFFTCw0REFBSSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBQUosQ0FBMkJHLEtBQTNCO0FBRkY7QUFEUSxLQUFMO0FBQUE7QUFERixDQUFmO0FBU0EsSUFBTUcsVUFBVSxHQUFHO0FBQ2ZDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUU7QUFDTix1QkFBaUI7QUFDYkMsUUFBQUEsY0FBYyxFQUFFLFdBREg7QUFFYkMsUUFBQUEsUUFBUSxFQUFFLEVBRkc7QUFHYkMsUUFBQUEsbUJBQW1CLEVBQUUsQ0FIUjtBQUliQyxRQUFBQSxtQkFBbUIsRUFBRSxTQUpSO0FBS2JDLFFBQUFBLHVCQUF1QixFQUFFLENBTFo7QUFNYkMsUUFBQUEsU0FBUyxFQUFFLENBTkU7QUFPYkMsUUFBQUEsWUFBWSxFQUFFO0FBUEQ7QUFEWDtBQURMLEdBRE07QUFjZkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFNBQVMsRUFBRSxtQkFBQWQsS0FBSztBQUFBLGFBQUs7QUFDakJlLFFBQUFBLEtBQUssRUFBRWxCLDREQUFJLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBSixDQUEyQkcsS0FBM0IsQ0FEVTtBQUVqQlEsUUFBQUEsbUJBQW1CLEVBQUU7QUFGSixPQUFMO0FBQUE7QUFEZDtBQWRTLENBQW5CO0FBc0JBLElBQU1RLEtBQUssR0FBRztBQUNWQyxFQUFBQSxPQUFPLEVBQUU7QUFEQyxDQUFkO0FBSUEsSUFBTUMsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLFNBQVMsRUFBRTtBQURBLENBQWY7QUFJQSxJQUFNQyxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFEUDtBQUVYQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUZULENBQWYsRUFLQTs7QUFDQSxJQUFNQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDO0FBQ3RCd0IsRUFBQUEsTUFBTSxFQUFOQSxNQURzQjtBQUNkdEIsRUFBQUEsTUFBTSxFQUFOQSxNQURjO0FBQ05LLEVBQUFBLFVBQVUsRUFBVkEsVUFETTtBQUNNZSxFQUFBQSxNQUFNLEVBQU5BLE1BRE47QUFDY0YsRUFBQUEsS0FBSyxFQUFMQTtBQURkLENBQUQsQ0FBekI7QUFJQSwrREFBZU8sS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFzQztBQUFBLE1BQW5DQyxTQUFtQyxRQUFuQ0EsU0FBbUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2xELHNCQUNJLDhEQUFDLDREQUFEO0FBQWdCLFNBQUssRUFBRU4sK0NBQXZCO0FBQUEsMkJBQ0ksOERBQUMsZ0VBQUQ7QUFBUSxZQUFNLEVBQUVNLE1BQWhCO0FBQUEsNkJBQ0kscURBQUMsU0FBRCxrQ0FBZUQsU0FBZjtBQUEwQixXQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVJEOztLQUFNSjtBQVVOLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi90aGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBnbG9iYWw6IHByb3BzID0+ICh7XHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgICAvLyBhc3N1bWluZyBwcm9wcyBpcyB0aGUgYmcgdmFsdWUgZm9yIGEgcGFydGljdWxhciB0YWcgYW5kIGRldGVybWluZXMgd2hpY2ggY29sb3JcclxuICAgICAgICAgICAgYmc6IG1vZGUoJyNmMGU3ZGInLCAnIzIwMjAzMCcpKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICBIZWFkaW5nOiB7XHJcbiAgICAgICAgdmFyaWFudHM6IHtcclxuICAgICAgICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25Db2xvcjogJyM1MjUyNTInLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IDQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsICcjZmY2M2MzJykocHJvcHMpLFxyXG4gICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiAzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZm9udHMgPSB7XHJcbiAgICBoZWFkaW5nOiBcIidNIFBMVVMgUm91bmRlZCAxYydcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBnbGFzc1RlYWw6ICcjODhjY2NhJ1xyXG59XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5cclxuLy8gdXNlIGV4dGVuZFRoZW1lIHRvIGFwcGx5IGFsbCBvZiB0aGVzZSBzdHlsZXMgKGFmdGVyIHdlIGV4cG9ydCB0aGVtZSBhbmQgaW1wb3J0IGl0IGludG8gb3RoZXIgZmlsZXMpKVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBjb2xvcnMsIGZvbnRzXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7IiwiaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi5qcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9saWIvdGhlbWUnO1xyXG5cclxuY29uc3QgV2Vic2l0ZSA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPExheW91dCByb3V0ZXI9e3JvdXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJzaXRlOyJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdsYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSIsIkNoYWtyYVByb3ZpZGVyIiwiTGF5b3V0IiwiV2Vic2l0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJvdXRlciIsInJvdXRlIl0sInNvdXJjZVJvb3QiOiIifQ==