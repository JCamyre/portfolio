"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\components\\section.js";

 // idk how framer-motion works


const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
  shouldForwardProp: prop => {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
}); // Making my own animation (when the page first loads), fades in and rises up a little bit

const Section = ({
  children,
  delay = 0
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledDiv, {
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
    delay
  },
  mb: 6,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\pages\\index.js";




const Page = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      borderRadius: "lg",
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('whiteAlpha.500', 'whiteAlpha.200'),
      p: 3,
      mb: 6,
      align: "center",
      children: "Hello, I'm a full-stack developer based in America"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      display: {
        md: 'flex'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      flexGrow: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h2",
        variant: "page-title",
        children: "Joseph Camyre"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Software Engineer ( Developer / Designer / Dreamer )"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
      flexShrink: 0,
      mt: {
        base: 4,
        md: 0
      },
      ml: {
        md: 6
      },
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
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
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_1__.default, {
      delay: 0.1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {
        as: "h3",
        variant: "section-title",
        children: "Work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: "Paragraph"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHRix3REFBTSxDQUFDRCxxREFBRCxFQUFhO0FBQ2pDRSxFQUFBQSxpQkFBaUIsRUFBRUcsSUFBSSxJQUFJO0FBQ3ZCLFdBQU9ILG1FQUFpQixDQUFDRyxJQUFELENBQWpCLElBQTJCQSxJQUFJLEtBQUssWUFBM0M7QUFDSDtBQUhnQyxDQUFiLENBQXhCLEVBTUE7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsUUFBRjtBQUFZQyxFQUFBQSxLQUFLLEdBQUM7QUFBbEIsQ0FBRCxrQkFDWiw4REFBQyxTQUFEO0FBQVcsU0FBTyxFQUFFO0FBQUNDLElBQUFBLENBQUMsRUFBRSxFQUFKO0FBQVFDLElBQUFBLE9BQU8sRUFBRTtBQUFqQixHQUFwQjtBQUF5QyxTQUFPLEVBQUU7QUFBQ0QsSUFBQUEsQ0FBQyxFQUFFLENBQUo7QUFBT0MsSUFBQUEsT0FBTyxFQUFDO0FBQWYsR0FBbEQ7QUFBcUUsWUFBVSxFQUFFO0FBQUVDLElBQUFBLFFBQVEsRUFBRSxHQUFaO0FBQWlCSCxJQUFBQTtBQUFqQixHQUFqRjtBQUEyRyxJQUFFLEVBQUUsQ0FBL0c7QUFBQSxZQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjs7QUFNQSxpRUFBZUQsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7O0FBRUEsTUFBTVcsSUFBSSxHQUFHLE1BQU07QUFDZixzQkFDSSw4REFBQyx1REFBRDtBQUFBLDRCQUNJLDhEQUFDLGlEQUFEO0FBQUssa0JBQVksRUFBQyxJQUFsQjtBQUF1QixRQUFFLEVBQUVELG1FQUFpQixDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixDQUE1QztBQUFrRixPQUFDLEVBQUUsQ0FBckY7QUFBd0YsUUFBRSxFQUFFLENBQTVGO0FBQStGLFdBQUssRUFBQyxRQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLDhEQUFDLGlEQUFEO0FBQUssYUFBTyxFQUFFO0FBQUNFLFFBQUFBLEVBQUUsRUFBRTtBQUFMO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JLDhEQUFDLGlEQUFEO0FBQUssY0FBUSxFQUFFLENBQWY7QUFBQSw4QkFFSSw4REFBQyxxREFBRDtBQUFTLFVBQUUsRUFBQyxJQUFaO0FBQWlCLGVBQU8sRUFBQyxZQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQWNJLDhEQUFDLGlEQUFEO0FBQUssZ0JBQVUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUU7QUFBQ0MsUUFBQUEsSUFBSSxFQUFFLENBQVA7QUFBVUQsUUFBQUEsRUFBRSxFQUFFO0FBQWQsT0FBeEI7QUFBMEMsUUFBRSxFQUFFO0FBQUNBLFFBQUFBLEVBQUUsRUFBRTtBQUFMLE9BQTlDO0FBQXVELFdBQUssRUFBQyxRQUE3RDtBQUFBLDZCQUNJLDhEQUFDLG1EQUFEO0FBQU8sbUJBQVcsRUFBQyxnQkFBbkI7QUFBb0MsbUJBQVcsRUFBRSxDQUFqRDtBQUFvRCxtQkFBVyxFQUFDLE9BQWhFO0FBQXdFLGdCQUFRLEVBQUMsT0FBakY7QUFBeUYsZUFBTyxFQUFDLGNBQWpHO0FBQ0ksb0JBQVksRUFBQyxNQURqQjtBQUN3QixXQUFHLEVBQUMsb0JBRDVCO0FBQ2lELFdBQUcsRUFBQztBQURyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWtCSSw4REFBQyx3REFBRDtBQUFTLFdBQUssRUFBRSxHQUFoQjtBQUFBLDhCQUNJLDhEQUFDLHFEQUFEO0FBQVMsVUFBRSxFQUFDLElBQVo7QUFBaUIsZUFBTyxFQUFDLGVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTJCSCxDQTVCRDs7QUE4QkEsaUVBQWVELElBQWY7Ozs7Ozs7Ozs7QUNqQ0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtY2FteXJlLy4vY29tcG9uZW50cy9zZWN0aW9uLmpzIiwid2VicGFjazovL2pzLWNhbXlyZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9qcy1jYW15cmUvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vanMtY2FteXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IGNoYWtyYSwgc2hvdWxkRm9yd2FyZFByb3AgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbi8vIGlkayBob3cgZnJhbWVyLW1vdGlvbiB3b3Jrc1xyXG5jb25zdCBTdHlsZWREaXYgPSBjaGFrcmEobW90aW9uLmRpdiwge1xyXG4gICAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4ge1xyXG4gICAgICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAndHJhbnNpdGlvbidcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBNYWtpbmcgbXkgb3duIGFuaW1hdGlvbiAod2hlbiB0aGUgcGFnZSBmaXJzdCBsb2FkcyksIGZhZGVzIGluIGFuZCByaXNlcyB1cCBhIGxpdHRsZSBiaXRcclxuY29uc3QgU2VjdGlvbiA9ICh7IGNoaWxkcmVuLCBkZWxheT0wIH0pID0+IChcclxuICAgIDxTdHlsZWREaXYgaW5pdGlhbD17e3k6IDEwLCBvcGFjaXR5OiAwfX0gYW5pbWF0ZT17e3k6IDAsIG9wYWNpdHk6MX19IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZGVsYXkgfX0gbWI9ezZ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3R5bGVkRGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uOyIsImltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBJbWFnZSwgdXNlQ29sb3JNb2RlVmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxCb3ggYm9yZGVyUmFkaXVzPSdsZycgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCd3aGl0ZUFscGhhLjUwMCcsICd3aGl0ZUFscGhhLjIwMCcpfSBwPXszfSBtYj17Nn0gYWxpZ249J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICBIZWxsbywgSSZhcG9zO20gYSBmdWxsLXN0YWNrIGRldmVsb3BlciBiYXNlZCBpbiBBbWVyaWNhXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9e3ttZDogJ2ZsZXgnfX0+XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBmbGV4R3Jvdz17MX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPSdoMicgdmFyaWFudD0ncGFnZS10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9zZXBoIENhbXlyZVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPHA+U29mdHdhcmUgRW5naW5lZXIgKCBEZXZlbG9wZXIgLyBEZXNpZ25lciAvIERyZWFtZXIgKTwvcD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0gbXQ9e3tiYXNlOiA0LCBtZDogMH19IG1sPXt7bWQ6IDZ9fSBhbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuODAwXCIgYm9yZGVyV2lkdGg9ezJ9IGJvcmRlclN0eWxlPVwic29saWRcIiBtYXhXaWR0aD1cIjEwMHB4XCIgZGlzcGxheT1cImlubGluZS1ibG9ja1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIiBzcmM9XCIvaW1hZ2VzL2pvc2VwaC5qcGdcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz0naDMnIHZhcmlhbnQ9J3NlY3Rpb24tdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAgICAgIFdvcmtcclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxwPlBhcmFncmFwaDwvcD5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIm1vdGlvbiIsImNoYWtyYSIsInNob3VsZEZvcndhcmRQcm9wIiwiU3R5bGVkRGl2IiwiZGl2IiwicHJvcCIsIlNlY3Rpb24iLCJjaGlsZHJlbiIsImRlbGF5IiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsIkNvbnRhaW5lciIsIkJveCIsIkhlYWRpbmciLCJJbWFnZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiUGFnZSIsIm1kIiwiYmFzZSJdLCJzb3VyY2VSb290IjoiIn0=