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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.MenuButton, {
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
            }, _this)
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNTI2Y2U2OWFjOGUyOTFiNGYxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQWNBOzs7QUFFQSxJQUFNZSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBeEIsQ0FIMkMsQ0FHYjs7QUFFOUIsTUFBTUksYUFBYSxHQUFHUCxtRUFBaUIsQ0FBQyxTQUFELEVBQVksZ0JBQVosQ0FBdkMsQ0FMMkMsQ0FNM0M7O0FBQ0Esc0JBQ0ksOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVHLElBQWhCO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFhLFFBQUUsRUFBRUcsTUFBTSxHQUFHLFdBQUgsR0FBaUJFLFNBQXhDO0FBQW1ELFdBQUssRUFBRUYsTUFBTSxHQUFHLFlBQUgsR0FBa0JDLGFBQWxGO0FBQUEsZ0JBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBZEQsRUFnQkE7OztHQWhCTUg7VUFLb0JGOzs7S0FMcEJFOztBQWlCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUixDQURvQixDQUdwQjs7QUFDQSxzQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQVEsRUFBQyxPQUFkO0FBQXNCLE1BQUUsRUFBQyxLQUF6QjtBQUErQixLQUFDLEVBQUMsTUFBakM7QUFBd0MsTUFBRSxFQUFFSixtRUFBaUIsQ0FBQyxXQUFELEVBQWMsWUFBZCxDQUE3RDtBQUEwRixTQUFLLEVBQUU7QUFBQ1csTUFBQUEsY0FBYyxFQUFFO0FBQWpCLEtBQWpHO0FBQ0ksVUFBTSxFQUFFO0FBRFosS0FDbUJELEtBRG5CO0FBQUEsMkJBRUksOERBQUMsdURBQUQ7QUFBVyxhQUFPLEVBQUMsTUFBbkI7QUFBMEIsVUFBSSxFQUFDLGNBQS9CO0FBQThDLFVBQUksRUFBQyxNQUFuRDtBQUEwRCxXQUFLLEVBQUMsUUFBaEU7QUFBeUUsYUFBTyxFQUFDLGVBQWpGO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxhQUFLLEVBQUMsUUFBWjtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQUksRUFBQyxJQUF0QjtBQUEyQix1QkFBYSxFQUFFLFNBQTFDO0FBQUEsaUNBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQ0UsVUFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUJDLFVBQUFBLEVBQUUsRUFBRTtBQUFyQixTQUFsQjtBQUErQyxlQUFPLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsVUFBQUEsRUFBRSxFQUFFO0FBQW5CLFNBQXhEO0FBQW9GLGFBQUssRUFBRTtBQUFDRCxVQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxVQUFBQSxFQUFFLEVBQUU7QUFBbkIsU0FBM0Y7QUFDSSxrQkFBVSxFQUFDLFFBRGY7QUFDd0IsZ0JBQVEsRUFBRSxDQURsQztBQUNxQyxVQUFFLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLENBQVA7QUFBVUUsVUFBQUEsR0FBRyxFQUFFO0FBQWYsU0FEekM7QUFBQSxnQ0FHSSw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsY0FBSSxFQUFFVixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQU1JLDhEQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixjQUFJLEVBQUVBLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBaUJBLDhEQUFDLGlEQUFEO0FBQUssWUFBSSxFQUFFLENBQVg7QUFBYyxhQUFLLEVBQUMsT0FBcEI7QUFBQSwrQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQVksaUJBQU8sRUFBRTtBQUFDUSxZQUFBQSxJQUFJLEVBQUUsY0FBUDtBQUF1QkMsWUFBQUEsRUFBRSxFQUFFO0FBQTNCLFdBQXJCO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBQSxtQ0FDSSw4REFBQyx3REFBRDtBQUFZLGdCQUFFLEVBQUVkLHdEQUFoQjtBQUE0QixrQkFBSSxlQUFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWxDO0FBQXFELHFCQUFPLEVBQUMsU0FBN0Q7QUFBdUUsNEJBQVc7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4QkgsQ0FsQ0Q7O0lBQU1VO1VBSzhDVDs7O01BTDlDUztBQW9DTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBCb3gsXHJcbiAgICBMaW5rLFxyXG4gICAgU3RhY2ssXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgRmxleCxcclxuICAgIE1lbnUsXHJcbiAgICBNZW51SXRlbSxcclxuICAgIE1lbnVMaXN0LFxyXG4gICAgTWVudUJ1dHRvbixcclxuICAgIEljb25CdXR0b24sXHJcbiAgICB1c2VDb2xvck1vZGVWYWx1ZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcblxyXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIGNoaWxkcmVuIH0pID0+IHtcclxuICAgIC8vIFRoaXMgaXMgZm9yIGlmIHRoZSBjdXJyZW50IHBhdGggb2YgdGhlIHVzZXIgaXMgZXF1YWwgdG8gdGhlIGhyZWYgb2YgdGhlIExpbmtJdGVtLCBpZiBzbyB0aGVuIHdlIGFyZSBvbiB0aGlzIHBhZ2UuIFRoZW4gd2UgaGlnaGxpZ2h0IGl0LlxyXG4gICAgLy8gVGhpcyBpcyB3aGF0IEkgd2FzIHRyeWluZyB0byBkbyBmb3IgbXkgbmF2YnV0dG9ucyAoY3VycmVudCBwYWdlKSwgY291bGRuJ3QgZmlndXJlIGl0IG91dFxyXG4gICAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZjsgLy8gaWYgdXNlciBpcyBvbiB0aGlzIHBhZ2UsIHRoZW4gdGhlaXIgcGF0aCA9PT0gdGhpcyBpdGVtJ3MgaHJlZlxyXG5cclxuICAgIGNvbnN0IGluYWN0aXZlQ29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZSgnZ3JheTIwMCcsICd3aGl0ZUFscGhhLjkwMCcpO1xyXG4gICAgLy8gTGluayBpcyBVSSwgTmV4dExpbmsgaXMgaGFuZGxpbmcgbG9naWNcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8TGluayBwZz17Mn0gYmc9e2FjdGl2ZSA/ICdnbGFzc1RlYWwnIDogdW5kZWZpbmVkfSBjb2xvcj17YWN0aXZlID8gJ0AgICMyMDIwMzAnIDogaW5hY3RpdmVDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgIClcclxufVxyXG5cclxuLy8gTm90IHBlcmZlY3RseSBhbGlnbmVkXHJcbmNvbnN0IE5hdmJhciA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gU28geW91IGNhbiBkbyA8cCB7Li4ucHJvcHN9PjwvcD4gYW5kIGl0IHdpbGwgbG9hZCBpbiBhbGwgcHJvcHMgcGFzc2VkIGluLiBXb3csIHNvIGNvbnZlbmllbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nZml4ZWQnIGFzPSduYXYnIHc9JzEwMCUnIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnI2ZmZmZmZjQwJywgJyMyMDIwMjMwODAnKX0gc3R5bGU9e3tiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCknfX1cclxuICAgICAgICAgICAgekluZGV4PXsxfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGRpc3BsYXk9J2ZsZXgnIG1heFc9J2NvbnRhaW5lci5tZCcgd3JhcD0nd3JhcCcgYWxpZ249J2NlbnRlcicganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj0nY2VudGVyJyBtcj17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gxJyBzaXplPSdsZycgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICB7LyogaG93IGRvIHRoZXNlIGJhc2UgYW5kIG1kIGtleXMgd29yaywgYmFzZWQgb24gc2l6ZSBvZiB3aW5kb3c/ICovfVxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17e2Jhc2U6ICdjb2x1bW4nLCBtZDogJ3Jvdyd9fSBkaXNwbGF5PXt7YmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnfX0gd2lkdGg9e3tiYXNlOiAnZnVsbCcsIG1kOiAnYXV0byd9fSBcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPSdjZW50ZXInIGZsZXhHcm93PXsxfSBtdD17e2Jhc2U6IDQsIG5tZDogMH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBocmVmIGlzIGZvciB0aGUgdXJsLCBwYXRoIGlzIHRoZSBpbnRlcm5hbCBwYXRoIHRvIHRoZSByZWFjdCBwYWdlLCB3aHkgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHBhdGggdmFyaWFibGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9Jy93b3JrcycgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdvcmtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj0nL3Bvc3RzJyBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17e2Jhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51QnV0dG9uIGFzPXtJY29uQnV0dG9ufSBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn0gdmFyaWFudD0nb3V0bGluZScgYXJpYS1sYWJlbD0nT3B0aW9ucycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImluYWN0aXZlQ29sb3IiLCJ1bmRlZmluZWQiLCJOYXZiYXIiLCJwcm9wcyIsImJhY2tkcm9wRmlsdGVyIiwiYmFzZSIsIm1kIiwibm1kIl0sInNvdXJjZVJvb3QiOiIifQ==