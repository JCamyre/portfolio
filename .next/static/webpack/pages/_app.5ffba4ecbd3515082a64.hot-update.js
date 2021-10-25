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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZmZiYTRlY2JkMzUxNTA4MmE2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQWNBOzs7QUFFQSxJQUFNZSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE4QjtBQUFBOztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDO0FBQ0E7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBeEIsQ0FIMkMsQ0FHYjs7QUFFOUIsTUFBTUksYUFBYSxHQUFHUCxtRUFBaUIsQ0FBQyxTQUFELEVBQVksZ0JBQVosQ0FBdkMsQ0FMMkMsQ0FNM0M7O0FBQ0Esc0JBQ0ksOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVHLElBQWhCO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUUsQ0FBVjtBQUFhLFFBQUUsRUFBRUcsTUFBTSxHQUFHLFdBQUgsR0FBaUJFLFNBQXhDO0FBQW1ELFdBQUssRUFBRUYsTUFBTSxHQUFHLFlBQUgsR0FBa0JDLGFBQWxGO0FBQUEsZ0JBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU9ILENBZEQsRUFnQkE7OztHQWhCTUg7VUFLb0JGOzs7S0FMcEJFOztBQWlCTixJQUFNTyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDcEIsTUFBUU4sSUFBUixHQUFpQk0sS0FBakIsQ0FBUU4sSUFBUixDQURvQixDQUdwQjs7QUFDQSxzQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQVEsRUFBQyxPQUFkO0FBQXNCLE1BQUUsRUFBQyxLQUF6QjtBQUErQixLQUFDLEVBQUMsTUFBakM7QUFBd0MsTUFBRSxFQUFFSixtRUFBaUIsQ0FBQyxXQUFELEVBQWMsWUFBZCxDQUE3RDtBQUEwRixTQUFLLEVBQUU7QUFBQ1csTUFBQUEsY0FBYyxFQUFFO0FBQWpCLEtBQWpHO0FBQ0ksVUFBTSxFQUFFO0FBRFosS0FDbUJELEtBRG5CO0FBQUEsMkJBRUksOERBQUMsdURBQUQ7QUFBVyxhQUFPLEVBQUMsTUFBbkI7QUFBMEIsVUFBSSxFQUFDLGNBQS9CO0FBQThDLFVBQUksRUFBQyxNQUFuRDtBQUEwRCxXQUFLLEVBQUMsUUFBaEU7QUFBeUUsYUFBTyxFQUFDLGVBQWpGO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxhQUFLLEVBQUMsUUFBWjtBQUFxQixVQUFFLEVBQUUsQ0FBekI7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFTLFlBQUUsRUFBQyxJQUFaO0FBQWlCLGNBQUksRUFBQyxJQUF0QjtBQUEyQix1QkFBYSxFQUFFLFNBQTFDO0FBQUEsaUNBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFPSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUU7QUFBQ0UsVUFBQUEsSUFBSSxFQUFFLFFBQVA7QUFBaUJDLFVBQUFBLEVBQUUsRUFBRTtBQUFyQixTQUFsQjtBQUErQyxlQUFPLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsVUFBQUEsRUFBRSxFQUFFO0FBQW5CLFNBQXhEO0FBQW9GLGFBQUssRUFBRTtBQUFDRCxVQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxVQUFBQSxFQUFFLEVBQUU7QUFBbkIsU0FBM0Y7QUFDSSxrQkFBVSxFQUFDLFFBRGY7QUFDd0IsZ0JBQVEsRUFBRSxDQURsQztBQUNxQyxVQUFFLEVBQUU7QUFBQ0QsVUFBQUEsSUFBSSxFQUFFLENBQVA7QUFBVUUsVUFBQUEsR0FBRyxFQUFFO0FBQWYsU0FEekM7QUFBQSxnQ0FHSSw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsY0FBSSxFQUFFVixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQU1JLDhEQUFDLFFBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixjQUFJLEVBQUVBLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBaUJBLDhEQUFDLGlEQUFEO0FBQUssWUFBSSxFQUFFLENBQVg7QUFBYyxhQUFLLEVBQUMsT0FBcEI7QUFBQSwrQkFDSSw4REFBQyxpREFBRDtBQUFLLFlBQUUsRUFBRSxDQUFUO0FBQVksaUJBQU8sRUFBRTtBQUFDUSxZQUFBQSxJQUFJLEVBQUUsY0FBUDtBQUF1QkMsWUFBQUEsRUFBRSxFQUFFO0FBQTNCLFdBQXJCO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBQSxvQ0FDSSw4REFBQyx3REFBRDtBQUFZLGdCQUFFLEVBQUVkLHdEQUFoQjtBQUE0QixrQkFBSSxlQUFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQWxDO0FBQXFELHFCQUFPLEVBQUMsU0FBN0Q7QUFBdUUsNEJBQVc7QUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLDhEQUFDLHNEQUFEO0FBQUEsc0NBQ0ksOERBQUMsa0RBQUQ7QUFBVSxvQkFBSSxFQUFDLEdBQWY7QUFBbUIsd0JBQVEsTUFBM0I7QUFBQSx1Q0FDSSw4REFBQyxzREFBRDtBQUFVLG9CQUFFLEVBQUVSLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLDhEQUFDLGtEQUFEO0FBQVUsb0JBQUksRUFBQyxRQUFmO0FBQXdCLHdCQUFRLE1BQWhDO0FBQUEsdUNBQ0ksOERBQUMsc0RBQUQ7QUFBVSxvQkFBRSxFQUFFQSxrREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFPSSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUMsUUFBZjtBQUF3Qix3QkFBUSxNQUFoQztBQUFBLHVDQUNJLDhEQUFDLHNEQUFEO0FBQVUsb0JBQUUsRUFBRUEsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5Q0gsQ0E3Q0Q7O0lBQU1rQjtVQUs4Q1Q7OztNQUw5Q1M7QUErQ04sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgQm94LFxyXG4gICAgTGluayxcclxuICAgIFN0YWNrLFxyXG4gICAgSGVhZGluZyxcclxuICAgIEZsZXgsXHJcbiAgICBNZW51LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBNZW51TGlzdCxcclxuICAgIE1lbnVCdXR0b24sXHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWVcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5cclxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICAvLyBUaGlzIGlzIGZvciBpZiB0aGUgY3VycmVudCBwYXRoIG9mIHRoZSB1c2VyIGlzIGVxdWFsIHRvIHRoZSBocmVmIG9mIHRoZSBMaW5rSXRlbSwgaWYgc28gdGhlbiB3ZSBhcmUgb24gdGhpcyBwYWdlLiBUaGVuIHdlIGhpZ2hsaWdodCBpdC5cclxuICAgIC8vIFRoaXMgaXMgd2hhdCBJIHdhcyB0cnlpbmcgdG8gZG8gZm9yIG15IG5hdmJ1dHRvbnMgKGN1cnJlbnQgcGFnZSksIGNvdWxkbid0IGZpZ3VyZSBpdCBvdXRcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWY7IC8vIGlmIHVzZXIgaXMgb24gdGhpcyBwYWdlLCB0aGVuIHRoZWlyIHBhdGggPT09IHRoaXMgaXRlbSdzIGhyZWZcclxuXHJcbiAgICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKTtcclxuICAgIC8vIExpbmsgaXMgVUksIE5leHRMaW5rIGlzIGhhbmRsaW5nIGxvZ2ljXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgPExpbmsgcGc9ezJ9IGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5lZH0gY29sb3I9e2FjdGl2ZSA/ICdAICAjMjAyMDMwJyA6IGluYWN0aXZlQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vIE5vdCBwZXJmZWN0bHkgYWxpZ25lZFxyXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBhdGggfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIFNvIHlvdSBjYW4gZG8gPHAgey4uLnByb3BzfT48L3A+IGFuZCBpdCB3aWxsIGxvYWQgaW4gYWxsIHByb3BzIHBhc3NlZCBpbi4gV293LCBzbyBjb252ZW5pZW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggcG9zaXRpb249J2ZpeGVkJyBhcz0nbmF2JyB3PScxMDAlJyBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzMDgwJyl9IHN0eWxlPXt7YmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319XHJcbiAgICAgICAgICAgIHpJbmRleD17MX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBkaXNwbGF5PSdmbGV4JyBtYXhXPSdjb250YWluZXIubWQnIHdyYXA9J3dyYXAnIGFsaWduPSdjZW50ZXInIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggYWxpZ249J2NlbnRlcicgbXI9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMScgc2l6ZT0nbGcnIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgey8qIGhvdyBkbyB0aGVzZSBiYXNlIGFuZCBtZCBrZXlzIHdvcmssIGJhc2VkIG9uIHNpemUgb2Ygd2luZG93PyAqL31cclxuICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e3tiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnfX0gZGlzcGxheT17e2Jhc2U6ICdub25lJywgbWQ6ICdmbGV4J319IHdpZHRoPXt7YmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJyBmbGV4R3Jvdz17MX0gbXQ9e3tiYXNlOiA0LCBubWQ6IDB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogaHJlZiBpcyBmb3IgdGhlIHVybCwgcGF0aCBpcyB0aGUgaW50ZXJuYWwgcGF0aCB0byB0aGUgcmVhY3QgcGFnZSwgd2h5IGRvIHRoZXkgaGF2ZSB0aGUgc2FtZSBwYXRoIHZhcmlhYmxlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPScvd29ya3MnIHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXb3Jrc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmtJdGVtIGhyZWY9Jy9wb3N0cycgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3tiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUJ1dHRvbiBhcz17SWNvbkJ1dHRvbn0gaWNvbj17PEhhbWJ1cmdlckljb24gLz59IHZhcmlhbnQ9J291dGxpbmUnIGFyaWEtbGFiZWw9J09wdGlvbnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPScvJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PkFib3V0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj0nL3dvcmtzJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PldvcmtzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj0nL3Bvc3RzJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e0xpbmt9PlBvc3RzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyJdLCJuYW1lcyI6WyJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkhhbWJ1cmdlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwidW5kZWZpbmVkIiwiTmF2YmFyIiwicHJvcHMiLCJiYWNrZHJvcEZpbHRlciIsImJhc2UiLCJtZCIsIm5tZCJdLCJzb3VyY2VSb290IjoiIn0=