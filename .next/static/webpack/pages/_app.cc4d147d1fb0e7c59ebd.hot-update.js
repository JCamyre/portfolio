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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-toggle-button */ "./components/theme-toggle-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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

  var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('gray200', 'whiteAlpha.900'); // Link is UI, NextLink is handling logic

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
      pg: 2,
      bg: active ? 'glassTeal' : undefined,
      color: active ? '@  #202030' : inactiveColor,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
}; // Not perfectly aligned


_s(LinkItem, "dl0xx8ZlQuUn9JhHFu16yTlHTaE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
});

_c = LinkItem;

var Navbar = function Navbar(props) {
  _s2();

  var path = props.path; // So you can do <p {...props}></p> and it will load in all props passed in. Wow, so convenient

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('#ffffff40', '#202023080'),
    style: {
      backdropFilter: 'blur(10px)'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
      display: "flex",
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {
          href: "/about",
          path: path,
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {
          href: "/works",
          path: path,
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        flex: 1,
        align: "right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuButton, {
              as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.IconButton,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.HamburgerIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 59
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Works"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/posts",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                  children: "Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 33
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 29
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.MenuItem, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link,
                href: "https://www.craftz.dog/",
                children: "View Source"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s2(Navbar, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYzRkMTQ3ZDFmYjBlN2M1OWViZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFjQTtBQUNBOzs7QUFFQSxJQUFNZ0IsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBOEI7QUFBQTs7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMzQztBQUNBO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixJQUFJLEtBQUtELElBQXhCLENBSDJDLENBR2I7O0FBRTlCLE1BQU1JLGFBQWEsR0FBR1IsbUVBQWlCLENBQUMsU0FBRCxFQUFZLGdCQUFaLENBQXZDLENBTDJDLENBTTNDOztBQUNBLHNCQUNJLDhEQUFDLGtEQUFEO0FBQVUsUUFBSSxFQUFFSSxJQUFoQjtBQUFBLDJCQUNJLDhEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFFLENBQVY7QUFBYSxRQUFFLEVBQUVHLE1BQU0sR0FBRyxXQUFILEdBQWlCRSxTQUF4QztBQUFtRCxXQUFLLEVBQUVGLE1BQU0sR0FBRyxZQUFILEdBQWtCQyxhQUFsRjtBQUFBLGdCQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQWRELEVBZ0JBOzs7R0FoQk1IO1VBS29CSDs7O0tBTHBCRzs7QUFpQk4sSUFBTU8sTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ3BCLE1BQVFOLElBQVIsR0FBaUJNLEtBQWpCLENBQVFOLElBQVIsQ0FEb0IsQ0FHcEI7O0FBQ0Esc0JBQ0ksOERBQUMsaURBQUQ7QUFBSyxZQUFRLEVBQUMsT0FBZDtBQUFzQixNQUFFLEVBQUMsS0FBekI7QUFBK0IsS0FBQyxFQUFDLE1BQWpD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QUEsdUJBREosZUFJSSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUMsUUFBZjtBQUF3Qix3QkFBUSxNQUFoQztBQUFBLHVDQUNJLDhEQUFDLHNEQUFEO0FBQVUsb0JBQUUsRUFBRUEsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBT0ksOERBQUMsa0RBQUQ7QUFBVSxvQkFBSSxFQUFDLFFBQWY7QUFBd0Isd0JBQVEsTUFBaEM7QUFBQSx1Q0FDSSw4REFBQyxzREFBRDtBQUFVLG9CQUFFLEVBQUVBLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSixlQVVJLDhEQUFDLHNEQUFEO0FBQVUsa0JBQUUsRUFBRUEsa0RBQWQ7QUFBb0Isb0JBQUksRUFBQyx5QkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdESCxDQXBERDs7SUFBTW1CO1VBSzhDVjs7O01BTDlDVTtBQXNETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBCb3gsXHJcbiAgICBMaW5rLFxyXG4gICAgU3RhY2ssXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgRmxleCxcclxuICAgIE1lbnUsXHJcbiAgICBNZW51SXRlbSxcclxuICAgIE1lbnVMaXN0LFxyXG4gICAgTWVudUJ1dHRvbixcclxuICAgIEljb25CdXR0b24sXHJcbiAgICB1c2VDb2xvck1vZGVWYWx1ZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcbmltcG9ydCBUaGVtZVRvZ2dsZUJ1dHRvbiBmcm9tICcuL3RoZW1lLXRvZ2dsZS1idXR0b24nO1xyXG5cclxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICAvLyBUaGlzIGlzIGZvciBpZiB0aGUgY3VycmVudCBwYXRoIG9mIHRoZSB1c2VyIGlzIGVxdWFsIHRvIHRoZSBocmVmIG9mIHRoZSBMaW5rSXRlbSwgaWYgc28gdGhlbiB3ZSBhcmUgb24gdGhpcyBwYWdlLiBUaGVuIHdlIGhpZ2hsaWdodCBpdC5cclxuICAgIC8vIFRoaXMgaXMgd2hhdCBJIHdhcyB0cnlpbmcgdG8gZG8gZm9yIG15IG5hdmJ1dHRvbnMgKGN1cnJlbnQgcGFnZSksIGNvdWxkbid0IGZpZ3VyZSBpdCBvdXRcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWY7IC8vIGlmIHVzZXIgaXMgb24gdGhpcyBwYWdlLCB0aGVuIHRoZWlyIHBhdGggPT09IHRoaXMgaXRlbSdzIGhyZWZcclxuXHJcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKTtcclxuICAgIC8vIExpbmsgaXMgVUksIE5leHRMaW5rIGlzIGhhbmRsaW5nIGxvZ2ljXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPExpbmsgcGc9ezJ9IGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH0gY29sb3I9e2FjdGl2ZSA/ICdAICAjMjAyMDMwJyA6IGluYWN0aXZlQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIE5vdCBwZXJmZWN0bHkgYWxpZ25lZFxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIFNvIHlvdSBjYW4gZG8gPHAgey4uLnByb3BzfT48L3A+IGFuZCBpdCB3aWxsIGxvYWQgaW4gYWxsIHByb3BzIHBhc3NlZCBpbi4gV293LCBzbyBjb252ZW5pZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2ZpeGVkJyBhcz0nbmF2JyB3PScxMDAlJyBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzMDgwJyl9IHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319XHJcbiAgICAgICAgICAgIHpJbmRleD17MX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5PSdmbGV4JyBtYXhXPSdjb250YWluZXIubWQnIHdyYXA9J3dyYXAnIGFsaWduPSdjZW50ZXInIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249J2NlbnRlcicgbXI9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMScgc2l6ZT0nbGcnIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgey8qIGhvdyBkbyB0aGVzZSBiYXNlIGFuZCBtZCBrZXlzIHdvcmssIGJhc2VkIG9uIHNpemUgb2Ygd2luZG93PyAqL31cclxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3tiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnfX0gZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319IHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJyBmbGV4R3Jvdz17MX0gbXQ9e3tiYXNlOiA0LCBubWQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogaHJlZiBpcyBmb3IgdGhlIHVybCwgcGF0aCBpcyB0aGUgaW50ZXJuYWwgcGF0aCB0byB0aGUgcmVhY3QgcGFnZSwgd2h5IGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBwYXRoIHZhcmlhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPScvYWJvdXQnIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPScvd29ya3MnIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3Jrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9Jy9wb3N0cycgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIDxUaGVtZVRvZ2dsZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17e2Jhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtJY29uQnV0dG9ufSBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn0gdmFyaWFudD0nb3V0bGluZScgYXJpYS1sYWJlbD0nT3B0aW9ucycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy8nIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+QWJvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPScvd29ya3MnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+V29ya3M8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPScvcG9zdHMnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+UG9zdHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30gaHJlZj0naHR0cHM6Ly93d3cuY3JhZnR6LmRvZy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgU291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwibmFtZXMiOlsiTG9nbyIsIk5leHRMaW5rIiwiQ29udGFpbmVyIiwiQm94IiwiTGluayIsIlN0YWNrIiwiSGVhZGluZyIsIkZsZXgiLCJNZW51IiwiTWVudUl0ZW0iLCJNZW51TGlzdCIsIk1lbnVCdXR0b24iLCJJY29uQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJIYW1idXJnZXJJY29uIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwidW5kZWZpbmVkIiwiTmF2YmFyIiwicHJvcHMiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCIsIm5tZCJdLCJzb3VyY2VSb290IjoiIn0=