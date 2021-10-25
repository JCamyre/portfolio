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
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
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
}; // Not perfectly aligned


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
            lineNumber: 47,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        flex: 1,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Menu, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuButton, {
              as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.HamburgerIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 59
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,
                  children: "Works"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,
                  children: "Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link,
                href: "https://www.craftz.dog/",
                children: "View Source"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zODUzZDJkNjhiMDZhOWM1MjQwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQWNBOzs7QUFFQSxJQUFNZSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBeEIsQ0FIMkMsQ0FHYjs7QUFFOUIsTUFBTUksYUFBYSxHQUFHUCxtRUFBaUIsQ0FBQyxTQUFELEVBQVksZ0JBQVosQ0FBdkMsQ0FMMkMsQ0FNM0M7O0FBQ0Esc0JBQ0ksOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVHLElBQWhCO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFhLFFBQUUsRUFBRUcsTUFBTSxHQUFHLFdBQUgsR0FBaUJFLFNBQXhDO0FBQW1ELFdBQUssRUFBRUYsTUFBTSxHQUFHLFlBQUgsR0FBa0JDLGFBQWxGO0FBQUEsZ0JBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBZEQsRUFnQkE7OztHQWhCTUg7VUFLb0JGOzs7S0FMcEJFOztBQWlCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUixDQURvQixDQUdwQjs7QUFDQSxzQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQVEsRUFBQyxPQUFkO0FBQXNCLE1BQUUsRUFBQyxLQUF6QjtBQUErQixLQUFDLEVBQUMsTUFBakM7QUFBd0Ms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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFPSSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUMsUUFBZjtBQUF3Qix3QkFBUSxNQUFoQztBQUFBLHVDQUNJLDhEQUFDLHNEQUFEO0FBQVUsb0JBQUUsRUFBRUEsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKLGVBVUksOERBQUMsc0RBQUQ7QUFBVSxrQkFBRSxFQUFFQSxrREFBZDtBQUFvQixvQkFBSSxFQUFDLHlCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBNENILENBaEREOztJQUFNa0I7VUFLOENUOzs7TUFMOUNTO0FBa0ROLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIEJveCxcclxuICAgIExpbmssXHJcbiAgICBTdGFjayxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBGbGV4LFxyXG4gICAgTWVudSxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgTWVudUxpc3QsXHJcbiAgICBNZW51QnV0dG9uLFxyXG4gICAgSWNvbkJ1dHRvbixcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgLy8gVGhpcyBpcyBmb3IgaWYgdGhlIGN1cnJlbnQgcGF0aCBvZiB0aGUgdXNlciBpcyBlcXVhbCB0byB0aGUgaHJlZiBvZiB0aGUgTGlua0l0ZW0sIGlmIHNvIHRoZW4gd2UgYXJlIG9uIHRoaXMgcGFnZS4gVGhlbiB3ZSBoaWdobGlnaHQgaXQuXHJcbiAgICAvLyBUaGlzIGlzIHdoYXQgSSB3YXMgdHJ5aW5nIHRvIGRvIGZvciBteSBuYXZidXR0b25zIChjdXJyZW50IHBhZ2UpLCBjb3VsZG4ndCBmaWd1cmUgaXQgb3V0XHJcbiAgICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmOyAvLyBpZiB1c2VyIGlzIG9uIHRoaXMgcGFnZSwgdGhlbiB0aGVpciBwYXRoID09PSB0aGlzIGl0ZW0ncyBocmVmXHJcblxyXG4gICAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJyk7XHJcbiAgICAvLyBMaW5rIGlzIFVJLCBOZXh0TGluayBpcyBoYW5kbGluZyBsb2dpY1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgIDxMaW5rIHBnPXsyfSBiZz17YWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9IGNvbG9yPXthY3RpdmUgPyAnQCAgIzIwMjAzMCcgOiBpbmFjdGl2ZUNvbG9yfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBOb3QgcGVyZmVjdGx5IGFsaWduZWRcclxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBTbyB5b3UgY2FuIGRvIDxwIHsuLi5wcm9wc30+PC9wPiBhbmQgaXQgd2lsbCBsb2FkIGluIGFsbCBwcm9wcyBwYXNzZWQgaW4uIFdvdywgc28gY29udmVuaWVudFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IHBvc2l0aW9uPSdmaXhlZCcgYXM9J25hdicgdz0nMTAwJScgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzA4MCcpfSBzdHlsZT17e2JhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KSd9fVxyXG4gICAgICAgICAgICB6SW5kZXg9ezF9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgZGlzcGxheT0nZmxleCcgbWF4Vz0nY29udGFpbmVyLm1kJyB3cmFwPSd3cmFwJyBhbGlnbj0nY2VudGVyJyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPSdjZW50ZXInIG1yPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz0naDEnIHNpemU9J2xnJyBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIHsvKiBob3cgZG8gdGhlc2UgYmFzZSBhbmQgbWQga2V5cyB3b3JrLCBiYXNlZCBvbiBzaXplIG9mIHdpbmRvdz8gKi99XHJcbiAgICAgICAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXt7YmFzZTogJ2NvbHVtbicsIG1kOiAncm93J319IGRpc3BsYXk9e3tiYXNlOiAnbm9uZScsIG1kOiAnZmxleCd9fSB3aWR0aD17e2Jhc2U6ICdmdWxsJywgbWQ6ICdhdXRvJ319IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcicgZmxleEdyb3c9ezF9IG10PXt7YmFzZTogNCwgbm1kOiAwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGhyZWYgaXMgZm9yIHRoZSB1cmwsIHBhdGggaXMgdGhlIGludGVybmFsIHBhdGggdG8gdGhlIHJlYWN0IHBhZ2UsIHdoeSBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgcGF0aCB2YXJpYWJsZSAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj0nL3dvcmtzJyBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV29ya3NcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPScvcG9zdHMnIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8Qm94IGZsZXg9ezF9IGFsaWduPSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7YmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b24gYXM9e0ljb25CdXR0b259IGljb249ezxIYW1idXJnZXJJY29uIC8+fSB2YXJpYW50PSdvdXRsaW5lJyBhcmlhLWxhYmVsPSdPcHRpb25zJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj0nLycgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5BYm91dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy93b3JrcycgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5Xb3JrczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy9wb3N0cycgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5Qb3N0czwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfSBocmVmPSdodHRwczovL3d3dy5jcmFmdHouZG9nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBTb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwidW5kZWZpbmVkIiwiTmF2YmFyIiwicHJvcHMiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCIsIm5tZCJdLCJzb3VyY2VSb290IjoiIn0=