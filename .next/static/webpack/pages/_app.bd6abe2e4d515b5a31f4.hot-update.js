"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\components\\navbar.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var LinkItem = function LinkItem(_ref) {
  _s();

  var href = _ref.href,
      path = _ref.path,
      children = _ref.children;
  // This is for if the current path of the user is equal to the href of the LinkItem, if so then we are on this page. Then we highlight it.
  // This is what I was trying to do for my navbuttons (current page), couldn't figure it out
  var active = path === href; // if user is on this page, then their path === this item's href

  var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)('gray200', 'whiteAlpha.900'); // Link is UI, NextLink is handling logic

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
      pg: 2,
      bg: active ? 'glassTeal' : undefined,
      color: active ? '@  #202030' : inactiveColor,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(LinkItem, "dl0xx8ZlQuUn9JhHFu16yTlHTaE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue];
});

_c = LinkItem;

var Navbar = function Navbar(props) {
  _s2();

  var path = props.path; // So you can do <p {...props}></p> and it will load in all props passed in. Wow, so convenient

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)('#ffffff40', '#202023080'),
    style: {
      backdropFilter: 'blur(10px)'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
      display: "flex",
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: {
          base: 'column',
          md: 'row'
        },
        display: {
          base: 'none',
          md: 'flex'
        },
        width: {
          base: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        mt: {
          base: 4,
          nmd: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(LinkItem, {
          href: "/works",
          path: path,
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, _this);
};

_s2(Navbar, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue];
});

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "LinkItem");
$RefreshReg$(_c2, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZDZhYmUyZTRkNTE1YjVhMzFmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBY0E7OztBQUVBLElBQU1lLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThCO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDM0M7QUFDQTtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsSUFBSSxLQUFLRCxJQUF4QixDQUgyQyxDQUdiOztBQUU5QixNQUFNSSxhQUFhLEdBQUdQLG1FQUFpQixDQUFDLFNBQUQsRUFBWSxnQkFBWixDQUF2QyxDQUwyQyxDQU0zQzs7QUFDQSxzQkFDSSw4REFBQyxrREFBRDtBQUFVLFFBQUksRUFBRUcsSUFBaEI7QUFBQSwyQkFDSSw4REFBQyxrREFBRDtBQUFNLFFBQUUsRUFBRSxDQUFWO0FBQWEsUUFBRSxFQUFFRyxNQUFNLEdBQUcsV0FBSCxHQUFpQkUsU0FBeEM7QUFBbUQsV0FBSyxFQUFFRixNQUFNLEdBQUcsWUFBSCxHQUFrQkMsYUFBbEY7QUFBQSxnQkFDS0Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBT0gsQ0FkRDs7R0FBTUg7VUFLb0JGOzs7S0FMcEJFOztBQWdCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUixDQURvQixDQUdwQjs7QUFDQSxzQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQVEsRUFBQyxPQUFkO0FBQXNCLE1BQUUsRUFBQyxLQUF6QjtBQUErQixLQUFDLEVBQUMsTUFBakM7QUFBd0MsTUFBRSxFQUFFSixtRUFBaUIsQ0FBQyxXQUFELEVBQWMsWUFBZCxDQUE3RDtBQUEwRixTQUFLLEVBQUU7QUFBQ1csTUFBQUEsY0FBYyxFQUFFO0FBQWpCLEtBQWpHO0FBQ0ksVUFBTSxFQUFFO0FBRFosS0FDbUJELEtBRG5CO0FBQUEsMkJBRUksOERBQUMsdURBQUQ7QUFBVyxhQUFPLEVBQUMsTUFBbkI7QUFBMEIsVUFBSSxFQUFDLGNBQS9CO0FBQThDLFVBQUksRUFBQyxNQUFuRDtBQUEwRCxXQUFLLEVBQUMsUUFBaEU7QUFBeUUsYUFBTyxFQUFDLGVBQWpGO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxhQUFLLEVBQUMsUUFBWjtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQUksRUFBQyxJQUF0QjtBQUEyQix1QkFBYSxFQUFFLFNBQTFDO0FBQUEsaUNBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQ0UsVUFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUJDLFVBQUFBLEVBQUUsRUFBRTtBQUFyQixTQUFsQjtBQUErQyxlQUFPLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsVUFBQUEsRUFBRSxFQUFFO0FBQW5CLFNBQXhEO0FBQW9GLGFBQUssRUFBRTtBQUFDRCxVQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxVQUFBQSxFQUFFLEVBQUU7QUFBbkIsU0FBM0Y7QUFDSSxrQkFBVSxFQUFDLFFBRGY7QUFDd0IsZ0JBQVEsRUFBRSxDQURsQztBQUNxQyxVQUFFLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLENBQVA7QUFBVUUsVUFBQUEsR0FBRyxFQUFFO0FBQWYsU0FEekM7QUFBQSxnQ0FHSSw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsY0FBSSxFQUFFVixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQU1JLDhEQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixjQUFJLEVBQUVBLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQTVCRDs7SUFBTUs7VUFLOENUOzs7TUFMOUNTO0FBOEJOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEJveCxcclxuICAgIExpbmssXHJcbiAgICBTdGFjayxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGbGV4LFxyXG4gICAgTWVudSxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgTWVudUxpc3QsXHJcbiAgICBNZW51QnV0dG9uLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEh1bWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgLy8gVGhpcyBpcyBmb3IgaWYgdGhlIGN1cnJlbnQgcGF0aCBvZiB0aGUgdXNlciBpcyBlcXVhbCB0byB0aGUgaHJlZiBvZiB0aGUgTGlua0l0ZW0sIGlmIHNvIHRoZW4gd2UgYXJlIG9uIHRoaXMgcGFnZS4gVGhlbiB3ZSBoaWdobGlnaHQgaXQuXHJcbiAgICAvLyBUaGlzIGlzIHdoYXQgSSB3YXMgdHJ5aW5nIHRvIGRvIGZvciBteSBuYXZidXR0b25zIChjdXJyZW50IHBhZ2UpLCBjb3VsZG4ndCBmaWd1cmUgaXQgb3V0XHJcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmOyAvLyBpZiB1c2VyIGlzIG9uIHRoaXMgcGFnZSwgdGhlbiB0aGVpciBwYXRoID09PSB0aGlzIGl0ZW0ncyBocmVmXHJcblxyXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJyk7XHJcbiAgICAvLyBMaW5rIGlzIFVJLCBOZXh0TGluayBpcyBoYW5kbGluZyBsb2dpY1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIDxMaW5rIHBnPXsyfSBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9IGNvbG9yPXthY3RpdmUgPyAnQCAgIzIwMjAzMCcgOiBpbmFjdGl2ZUNvbG9yfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIFNvIHlvdSBjYW4gZG8gPHAgey4uLnByb3BzfT48L3A+IGFuZCBpdCB3aWxsIGxvYWQgaW4gYWxsIHByb3BzIHBhc3NlZCBpbi4gV293LCBzbyBjb252ZW5pZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2ZpeGVkJyBhcz0nbmF2JyB3PScxMDAlJyBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzMDgwJyl9IHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319XHJcbiAgICAgICAgICAgIHpJbmRleD17MX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5PSdmbGV4JyBtYXhXPSdjb250YWluZXIubWQnIHdyYXA9J3dyYXAnIGFsaWduPSdjZW50ZXInIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249J2NlbnRlcicgbXI9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMScgc2l6ZT0nbGcnIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgey8qIGhvdyBkbyB0aGVzZSBiYXNlIGFuZCBtZCBrZXlzIHdvcmssIGJhc2VkIG9uIHNpemUgb2Ygd2luZG93PyAqL31cclxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3tiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnfX0gZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319IHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJyBmbGV4R3Jvdz17MX0gbXQ9e3tiYXNlOiA0LCBubWQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogaHJlZiBpcyBmb3IgdGhlIHVybCwgcGF0aCBpcyB0aGUgaW50ZXJuYWwgcGF0aCB0byB0aGUgcmVhY3QgcGFnZSwgd2h5IGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBwYXRoIHZhcmlhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPScvd29ya3MnIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3Jrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9Jy9wb3N0cycgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkh1bWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwidW5kZWZpbmVkIiwiTmF2YmFyIiwicHJvcHMiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCIsIm5tZCJdLCJzb3VyY2VSb290IjoiIn0=