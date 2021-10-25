"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/bio.js":
/*!***************************!*\
  !*** ./components/bio.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BioSection": function() { return /* binding */ BioSection; },
/* harmony export */   "BioYear": function() { return /* binding */ BioYear; }
/* harmony export */ });
/* harmony import */ var C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2;



var BioSection = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)(_templateObject || (_templateObject = (0,C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    padding-left: 3.4em;\n    text-indent: -3.4em; \n"])));
var BioYear = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject2 || (_templateObject2 = (0,C_All_Projects_NewPortfolioSite_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    font-weight: bold;\n    margin-right: 1em;\n"])));

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.js");
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/bio */ "./components/bio.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Page = function Page() {
  _s();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      borderRadius: "lg",
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
      p: 3,
      mb: 6,
      align: "center",
      children: "Hello, I'm a full-stack developer at UCLA studing Computer Science"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      display: {
        md: 'flex'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      flexGrow: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
        as: "h2",
        variant: "page-title",
        children: "Joseph Camyre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        children: "Software Engineer ( Developer / Designer / Dreamer )"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
      flexShrink: 0,
      mt: {
        base: 4,
        md: 0
      },
      ml: {
        md: 6
      },
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {
        borderColor: "whiteAlpha.800",
        borderWidth: 2,
        borderStyle: "solid",
        maxWidth: "100px",
        display: "inline-block",
        borderRadius: "full",
        src: "/images/joseph.jpg",
        alt: "Profile Picture"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_2__.default, {
        children: ["Joseph is currently working on ", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/works/lunatrading",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
            children: "Lunatrading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this), "He is the Web Developer/Webmaster for the CHIPS Lab at UCLA.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 81
        }, _this), "He is also a part of a start-up with DevX called Bolt, a scheduling app that plans to improve human interaction by decreasing the effort required to schedule get-togethers.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 193
        }, _this), "He is also an intern for ACM DevTeam."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
        align: "center",
        my: 4,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
          href: "/works",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
            rightIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 44
            }, _this),
            colorScheme: "teal",
            children: "My portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_s(Page, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue];
});

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmUwZWYyZjllN2NhOGE2NmQ1MDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1FLFVBQVUsR0FBR0Qsd0RBQU0sQ0FBQ0QsaURBQUQsQ0FBVCw2UEFBaEI7QUFLQSxJQUFNRyxPQUFPLEdBQUdGLHlEQUFILDBQQUFiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1jLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixzQkFDSSw4REFBQyx1REFBRDtBQUFBLDRCQUNJLDhEQUFDLGlEQUFEO0FBQUssa0JBQVksRUFBQyxJQUFsQjtBQUF1QixRQUFFLEVBQUVMLG1FQUFpQixDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixDQUE1QztBQUFrRixPQUFDLEVBQUUsQ0FBckY7QUFBd0YsUUFBRSxFQUFFLENBQTVGO0FBQStGLFdBQUssRUFBQyxRQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsaURBQUQ7QUFBSyxhQUFPLEVBQUU7QUFBQ00sUUFBQUEsRUFBRSxFQUFFO0FBQUw7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFPSSw4REFBQyxpREFBRDtBQUFLLGNBQVEsRUFBRSxDQUFmO0FBQUEsOEJBRUksOERBQUMscURBQUQ7QUFBUyxVQUFFLEVBQUMsSUFBWjtBQUFpQixlQUFPLEVBQUMsWUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEosZUFjSSw4REFBQyxpREFBRDtBQUFLLGdCQUFVLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFO0FBQUNDLFFBQUFBLElBQUksRUFBRSxDQUFQO0FBQVVELFFBQUFBLEVBQUUsRUFBRTtBQUFkLE9BQXhCO0FBQTBDLFFBQUUsRUFBRTtBQUFDQSxRQUFBQSxFQUFFLEVBQUU7QUFBTCxPQUE5QztBQUF1RCxXQUFLLEVBQUMsUUFBN0Q7QUFBQSw2QkFDSSw4REFBQyxtREFBRDtBQUFPLG1CQUFXLEVBQUMsZ0JBQW5CO0FBQW9DLG1CQUFXLEVBQUUsQ0FBakQ7QUFBb0QsbUJBQVcsRUFBQyxPQUFoRTtBQUF3RSxnQkFBUSxFQUFDLE9BQWpGO0FBQXlGLGVBQU8sRUFBQyxjQUFqRztBQUNJLG9CQUFZLEVBQUMsTUFEakI7QUFDd0IsV0FBRyxFQUFDLG9CQUQ1QjtBQUNpRCxXQUFHLEVBQUM7QUFEckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixlQWtCSSw4REFBQyx3REFBRDtBQUFTLFdBQUssRUFBRSxHQUFoQjtBQUFBLDhCQUNJLDhEQUFDLHFEQUFEO0FBQVMsVUFBRSxFQUFDLElBQVo7QUFBaUIsZUFBTyxFQUFDLGVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSSw4REFBQywwREFBRDtBQUFBLHNEQUEyQyxHQUEzQyxlQUNJLDhEQUFDLGtEQUFEO0FBQVUsY0FBSSxFQUFDLG9CQUFmO0FBQUEsaUNBQ0ksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLCtFQUlnRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpoRSwrTEFLZ0w7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMaEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEosZUFhSSw4REFBQyxpREFBRDtBQUFLLGFBQUssRUFBQyxRQUFYO0FBQW9CLFVBQUUsRUFBRSxDQUF4QjtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBQSxpQ0FDSSw4REFBQyxvREFBRDtBQUFRLHFCQUFTLGVBQUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbkI7QUFBeUMsdUJBQVcsRUFBQyxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMENILENBM0NEOztHQUFNRDtVQUdpQ0w7OztLQUhqQ0s7QUE2Q04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iaW8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XHJcblxyXG5leHBvcnQgY29uc3QgQmlvU2VjdGlvbiA9IHN0eWxlZChCb3gpYFxyXG4gICAgcGFkZGluZy1sZWZ0OiAzLjRlbTtcclxuICAgIHRleHQtaW5kZW50OiAtMy40ZW07IFxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQmlvWWVhciA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuYCIsImltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBJbWFnZSwgTGluaywgQnV0dG9uLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24nO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWdyYXBoJztcclxuaW1wb3J0IHsgQmlvU2VjdGlvbiwgQmlvWWVhciB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmlvJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPSdsZycgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZUFscGhhLjUwMCcsICd3aGl0ZUFscGhhLjIwMCcpfSBwPXszfSBtYj17Nn0gYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICBIZWxsbywgSSZhcG9zO20gYSBmdWxsLXN0YWNrIGRldmVsb3BlciBhdCBVQ0xBIHN0dWRpbmcgQ29tcHV0ZXIgU2NpZW5jZVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7bWQ6ICdmbGV4J319PlxyXG5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz0naDInIHZhcmlhbnQ9J3BhZ2UtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIEpvc2VwaCBDYW15cmVcclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxwPlNvZnR3YXJlIEVuZ2luZWVyICggRGV2ZWxvcGVyIC8gRGVzaWduZXIgLyBEcmVhbWVyICk8L3A+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9IG10PXt7YmFzZTogNCwgbWQ6IDB9fSBtbD17e21kOiA2fX0gYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYm9yZGVyQ29sb3I9XCJ3aGl0ZUFscGhhLjgwMFwiIGJvcmRlcldpZHRoPXsyfSBib3JkZXJTdHlsZT1cInNvbGlkXCIgbWF4V2lkdGg9XCIxMDBweFwiIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiBcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJmdWxsXCIgc3JjPVwiL2ltYWdlcy9qb3NlcGguanBnXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIGRlbGF5PXswLjF9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9J2gzJyB2YXJpYW50PSdzZWN0aW9uLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICBXb3JrXHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICB7LyogV2hlbiB5b3UgbWFrZSBhIHN0eWxlZCB0YWcsIHlvdSBjYW4gdXNlIGl0IGxpa2UgYSBjb21wb25lbnQsIHdpdGggYWxsIHRoZSBjc3Mgc3R5bGluZyAqL31cclxuICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+Sm9zZXBoIGlzIGN1cnJlbnRseSB3b3JraW5nIG9uIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy93b3Jrcy9sdW5hdHJhZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rPkx1bmF0cmFkaW5nPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgSGUgaXMgdGhlIFdlYiBEZXZlbG9wZXIvV2VibWFzdGVyIGZvciB0aGUgQ0hJUFMgTGFiIGF0IFVDTEEuPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgSGUgaXMgYWxzbyBhIHBhcnQgb2YgYSBzdGFydC11cCB3aXRoIERldlggY2FsbGVkIEJvbHQsIGEgc2NoZWR1bGluZyBhcHAgdGhhdCBwbGFucyB0byBpbXByb3ZlIGh1bWFuIGludGVyYWN0aW9uIGJ5IGRlY3JlYXNpbmcgdGhlIGVmZm9ydCByZXF1aXJlZCB0byBzY2hlZHVsZSBnZXQtdG9nZXRoZXJzLjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIEhlIGlzIGFsc28gYW4gaW50ZXJuIGZvciBBQ00gRGV2VGVhbS5cclxuICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxyXG4gICAgICAgICAgICAgICAgPEJveCBhbGlnbj0nY2VudGVyJyBteT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9Jy93b3Jrcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcmlnaHRJY29uPXs8Q2hldnJvblJpZ2h0SWNvbiAvPn0gY29sb3JTY2hlbWU9J3RlYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgcG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJCb3giLCJzdHlsZWQiLCJCaW9TZWN0aW9uIiwiQmlvWWVhciIsInNwYW4iLCJDb250YWluZXIiLCJIZWFkaW5nIiwiSW1hZ2UiLCJMaW5rIiwiQnV0dG9uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJOZXh0TGluayIsIkNoZXZyb25SaWdodEljb24iLCJTZWN0aW9uIiwiUGFyYWdyYXBoIiwiUGFnZSIsIm1kIiwiYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=