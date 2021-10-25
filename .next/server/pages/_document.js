(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  global: props => ({
    body: {
      // assuming props is the bg value for a particular tag and determines which color
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#f0e7db', '#202030')(props)
    }
  })
};
const components = {
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
    baseStyle: props => ({
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};
const fonts = {
  heading: "'M PLUS Rounded 1c'"
};
const colors = {
  glassTeal: '#88ccca'
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}; // use extendTheme to apply all of these styles (after we export theme and import it into other files))

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  styles,
  components,
  colors,
  fonts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\All_Projects\\NewPortfolioSite\\pages\\_document.js";


 // Does _document.js affect the base html document of the web application


class Document extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ColorModeScript, {
          initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_2__.default.config.initialColorMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVVIOztBQVo4Qzs7Ozs7Ozs7OztBQ0xuRCxpSEFBa0Q7Ozs7Ozs7Ozs7OztBQ0FsRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLWNhbXlyZS8uL2xpYi90aGVtZS5qcyIsIndlYnBhY2s6Ly9qcy1jYW15cmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vanMtY2FteXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2pzLWNhbXlyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9qcy1jYW15cmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYW15cmUvLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2FteXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtY2FteXJlL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly9qcy1jYW15cmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vanMtY2FteXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzXCIiLCJ3ZWJwYWNrOi8vanMtY2FteXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vanMtY2FteXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9qcy1jYW15cmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2pzLWNhbXlyZS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgZ2xvYmFsOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgLy8gYXNzdW1pbmcgcHJvcHMgaXMgdGhlIGJnIHZhbHVlIGZvciBhIHBhcnRpY3VsYXIgdGFnIGFuZCBkZXRlcm1pbmVzIHdoaWNoIGNvbG9yXHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMzAnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJzoge1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogNixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjNTI1MjUyJyxcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgTGluazoge1xyXG4gICAgICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcclxuICAgICAgICAgICAgY29sb3I6IG1vZGUoJyMzZDdhZWQnLCAnI2ZmNjNjMycpKHByb3BzKSxcclxuICAgICAgICAgICAgdGV4dFVuZGVybGluZU9mZnNldDogM1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgZ2xhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbi8vIHVzZSBleHRlbmRUaGVtZSB0byBhcHBseSBhbGwgb2YgdGhlc2Ugc3R5bGVzIChhZnRlciB3ZSBleHBvcnQgdGhlbWUgYW5kIGltcG9ydCBpdCBpbnRvIG90aGVyIGZpbGVzKSlcclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgICBjb25maWcsIHN0eWxlcywgY29tcG9uZW50cywgY29sb3JzLCBmb250c1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lOyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gaW5pdEhlYWRNYW5hZ2VyO1xuZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcyA9IHZvaWQgMDtcbmNvbnN0IERPTUF0dHJpYnV0ZU5hbWVzID0ge1xuICAgIGFjY2VwdENoYXJzZXQ6ICdhY2NlcHQtY2hhcnNldCcsXG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGh0bWxGb3I6ICdmb3InLFxuICAgIGh0dHBFcXVpdjogJ2h0dHAtZXF1aXYnLFxuICAgIG5vTW9kdWxlOiAnbm9Nb2R1bGUnXG59O1xuZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcyA9IERPTUF0dHJpYnV0ZU5hbWVzO1xuZnVuY3Rpb24gcmVhY3RFbGVtZW50VG9ET00oeyB0eXBlICwgcHJvcHMgIH0pIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgZm9yKGNvbnN0IHAgaW4gcHJvcHMpe1xuICAgICAgICBpZiAoIXByb3BzLmhhc093blByb3BlcnR5KHApKSBjb250aW51ZTtcbiAgICAgICAgaWYgKHAgPT09ICdjaGlsZHJlbicgfHwgcCA9PT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykgY29udGludWU7XG4gICAgICAgIC8vIHdlIGRvbid0IHJlbmRlciB1bmRlZmluZWQgcHJvcHMgdG8gdGhlIERPTVxuICAgICAgICBpZiAocHJvcHNbcF0gPT09IHVuZGVmaW5lZCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGF0dHIgPSBET01BdHRyaWJ1dGVOYW1lc1twXSB8fCBwLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc2NyaXB0JyAmJiAoYXR0ciA9PT0gJ2FzeW5jJyB8fCBhdHRyID09PSAnZGVmZXInIHx8IGF0dHIgPT09ICdub01vZHVsZScpKSB7XG4gICAgICAgICAgICBlbFthdHRyXSA9ICEhcHJvcHNbcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgcHJvcHNbcF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHsgY2hpbGRyZW4gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAgfSA9IHByb3BzO1xuICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJyc7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xufVxuZnVuY3Rpb24gdXBkYXRlRWxlbWVudHModHlwZSwgY29tcG9uZW50cykge1xuICAgIGNvbnN0IGhlYWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgY29uc3QgaGVhZENvdW50RWwgPSBoZWFkRWwucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPW5leHQtaGVhZC1jb3VudF0nKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWhlYWRDb3VudEVsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdXYXJuaW5nOiBuZXh0LWhlYWQtY291bnQgaXMgbWlzc2luZy4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1oZWFkLWNvdW50LW1pc3NpbmcnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoZWFkQ291bnQgPSBOdW1iZXIoaGVhZENvdW50RWwuY29udGVudCk7XG4gICAgY29uc3Qgb2xkVGFncyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDAsIGogPSBoZWFkQ291bnRFbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyBpIDwgaGVhZENvdW50OyBpKyssIGogPSBqLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpe1xuICAgICAgICBpZiAoai50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIG9sZFRhZ3MucHVzaChqKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBuZXdUYWdzID0gY29tcG9uZW50cy5tYXAocmVhY3RFbGVtZW50VG9ET00pLmZpbHRlcigobmV3VGFnKT0+e1xuICAgICAgICBmb3IobGV0IGsgPSAwLCBsZW4gPSBvbGRUYWdzLmxlbmd0aDsgayA8IGxlbjsgaysrKXtcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhZyA9IG9sZFRhZ3Nba107XG4gICAgICAgICAgICBpZiAob2xkVGFnLmlzRXF1YWxOb2RlKG5ld1RhZykpIHtcbiAgICAgICAgICAgICAgICBvbGRUYWdzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgb2xkVGFncy5mb3JFYWNoKCh0KT0+dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpXG4gICAgKTtcbiAgICBuZXdUYWdzLmZvckVhY2goKHQpPT5oZWFkRWwuaW5zZXJ0QmVmb3JlKHQsIGhlYWRDb3VudEVsKVxuICAgICk7XG4gICAgaGVhZENvdW50RWwuY29udGVudCA9IChoZWFkQ291bnQgLSBvbGRUYWdzLmxlbmd0aCArIG5ld1RhZ3MubGVuZ3RoKS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gaW5pdEhlYWRNYW5hZ2VyKCkge1xuICAgIGxldCB1cGRhdGVQcm9taXNlID0gbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzOiBuZXcgU2V0KCksXG4gICAgICAgIHVwZGF0ZUhlYWQ6IChoZWFkKT0+e1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IHVwZGF0ZVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgIT09IHVwZGF0ZVByb21pc2UpIHJldHVybjtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWdzID0ge1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaGVhZC5mb3JFYWNoKChoKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoLy8gSWYgdGhlIGZvbnQgdGFnIGlzIGxvYWRlZCBvbmx5IG9uIGNsaWVudCBuYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHdvbid0IGJlIGlubGluZWQuIEluIHRoaXMgY2FzZSByZXZlcnQgdG8gdGhlIG9yaWdpbmFsIGJlaGF2aW9yXG4gICAgICAgICAgICAgICAgICAgIGgudHlwZSA9PT0gJ2xpbmsnICYmIGgucHJvcHNbJ2RhdGEtb3B0aW1pemVkLWZvbnRzJ10gJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2RhdGEtaHJlZj1cIiR7aC5wcm9wc1snZGF0YS1ocmVmJ119XCJdYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHJvcHMuaHJlZiA9IGgucHJvcHNbJ2RhdGEtaHJlZiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaC5wcm9wc1snZGF0YS1ocmVmJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRhZ3NbaC50eXBlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICB0YWdzW2gudHlwZV0gPSBjb21wb25lbnRzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29tcG9uZW50ID0gdGFncy50aXRsZSA/IHRhZ3MudGl0bGVbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNoaWxkcmVuICB9ID0gdGl0bGVDb21wb25lbnQucHJvcHM7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IGRvY3VtZW50LnRpdGxlKSBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ21ldGEnLFxuICAgICAgICAgICAgICAgICAgICAnYmFzZScsXG4gICAgICAgICAgICAgICAgICAgICdsaW5rJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICBdLmZvckVhY2goKHR5cGUpPT57XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnRzKHR5cGUsIHRhZ3NbdHlwZV0gfHwgW10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLW1hbmFnZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pbml0U2NyaXB0TG9hZGVyID0gaW5pdFNjcmlwdExvYWRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX2hlYWRNYW5hZ2VyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xudmFyIF9oZWFkTWFuYWdlciA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlclwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBTY3JpcHRDYWNoZSA9IG5ldyBNYXAoKTtcbmNvbnN0IExvYWRDYWNoZSA9IG5ldyBTZXQoKTtcbmNvbnN0IGlnbm9yZVByb3BzID0gW1xuICAgICdvbkxvYWQnLFxuICAgICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gICAgJ2NoaWxkcmVuJyxcbiAgICAnb25FcnJvcicsXG4gICAgJ3N0cmF0ZWd5JywgXG5dO1xuY29uc3QgbG9hZFNjcmlwdCA9IChwcm9wcyk9PntcbiAgICBjb25zdCB7IHNyYyAsIGlkICwgb25Mb2FkID0oKT0+e1xuICAgIH0gLCBkYW5nZXJvdXNseVNldElubmVySFRNTCAsIGNoaWxkcmVuID0nJyAsIHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgLCBvbkVycm9yICwgIH0gPSBwcm9wcztcbiAgICBjb25zdCBjYWNoZUtleSA9IGlkIHx8IHNyYztcbiAgICAvLyBTY3JpcHQgaGFzIGFscmVhZHkgbG9hZGVkXG4gICAgaWYgKGNhY2hlS2V5ICYmIExvYWRDYWNoZS5oYXMoY2FjaGVLZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ29udGVudHMgb2YgdGhpcyBzY3JpcHQgYXJlIGFscmVhZHkgbG9hZGluZy9sb2FkZWRcbiAgICBpZiAoU2NyaXB0Q2FjaGUuaGFzKHNyYykpIHtcbiAgICAgICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSk7XG4gICAgICAgIC8vIEV4ZWN1dGUgb25Mb2FkIHNpbmNlIHRoZSBzY3JpcHQgbG9hZGluZyBoYXMgYmVndW5cbiAgICAgICAgU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsIG9uRXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xuICAgICAgICAgICAgICAgIG9uTG9hZC5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgIG9uRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3JjKSB7XG4gICAgICAgIFNjcmlwdENhY2hlLnNldChzcmMsIGxvYWRQcm9taXNlKTtcbiAgICB9XG4gICAgTG9hZENhY2hlLmFkZChjYWNoZUtleSk7XG4gICAgaWYgKGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbCB8fCAnJztcbiAgICB9IGVsc2UgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IGNoaWxkcmVuIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKCcnKSA6ICcnO1xuICAgIH0gZWxzZSBpZiAoc3JjKSB7XG4gICAgICAgIGVsLnNyYyA9IHNyYztcbiAgICB9XG4gICAgZm9yIChjb25zdCBbaywgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSl7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlnbm9yZVByb3BzLmluY2x1ZGVzKGspKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdHRyID0gX2hlYWRNYW5hZ2VyLkRPTUF0dHJpYnV0ZU5hbWVzW2tdIHx8IGsudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKTtcbiAgICB9XG4gICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW5zY3JpcHQnLCBzdHJhdGVneSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG59O1xuZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wcykge1xuICAgIGNvbnN0IHsgc3RyYXRlZ3kgPSdhZnRlckludGVyYWN0aXZlJyAgfSA9IHByb3BzO1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoc3RyYXRlZ3kgPT09ICdsYXp5T25sb2FkJykge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wcykge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+bG9hZFNjcmlwdChwcm9wcylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBpbml0U2NyaXB0TG9hZGVyKHNjcmlwdExvYWRlckl0ZW1zKSB7XG4gICAgc2NyaXB0TG9hZGVySXRlbXMuZm9yRWFjaChoYW5kbGVDbGllbnRTY3JpcHRMb2FkKTtcbn1cbmZ1bmN0aW9uIFNjcmlwdChwcm9wcykge1xuICAgIGNvbnN0IHsgc3JjID0nJyAsIG9uTG9hZCA9KCk9PntcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICwgb25FcnJvciAgfSA9IHByb3BzLCByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInNyY1wiLCBcIm9uTG9hZFwiLCBcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIsIFwic3RyYXRlZ3lcIiwgXCJvbkVycm9yXCJdKTtcbiAgICAvLyBDb250ZXh0IGlzIGF2YWlsYWJsZSBvbmx5IGR1cmluZyBTU1JcbiAgICBjb25zdCB7IHVwZGF0ZVNjcmlwdHMgLCBzY3JpcHRzICwgZ2V0SXNTc3IgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF9oZWFkTWFuYWdlckNvbnRleHQuSGVhZE1hbmFnZXJDb250ZXh0KTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKHN0cmF0ZWd5ID09PSAnYWZ0ZXJJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICAgIGxvYWRTY3JpcHQocHJvcHMpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgICAgICAgIGxvYWRMYXp5U2NyaXB0KHByb3BzKTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHN0cmF0ZWd5XG4gICAgXSk7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgICAgIGlmICh1cGRhdGVTY3JpcHRzKSB7XG4gICAgICAgICAgICBzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkLFxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yXG4gICAgICAgICAgICAgICAgfSwgcmVzdFByb3BzKSwgXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHVwZGF0ZVNjcmlwdHMoc2NyaXB0cyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0SXNTc3IgJiYgZ2V0SXNTc3IoKSkge1xuICAgICAgICAgICAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZCBkdXJpbmcgU1NSXG4gICAgICAgICAgICBMb2FkQ2FjaGUuYWRkKHJlc3RQcm9wcy5pZCB8fCBzcmMpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmICFnZXRJc1NzcigpKSB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbnZhciBfZGVmYXVsdCA9IFNjcmlwdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JpcHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudENvbnRleHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudENvbnRleHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJEb2N1bWVudEluaXRpYWxQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRQcm9wc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3V0aWxzLkRvY3VtZW50UHJvcHM7XG4gICAgfVxufSk7XG5leHBvcnRzLkh0bWwgPSBIdG1sO1xuZXhwb3J0cy5NYWluID0gTWFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9zZXJ2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7XG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2NvbnN0YW50c1wiKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi91dGlsc1wiKTtcbnZhciBfZ2V0UGFnZUZpbGVzID0gcmVxdWlyZShcIi4uL3NlcnZlci9nZXQtcGFnZS1maWxlc1wiKTtcbnZhciBfdXRpbHMxID0gcmVxdWlyZShcIi4uL3NlcnZlci91dGlsc1wiKTtcbnZhciBfaHRtbGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTtcbnZhciBfc2NyaXB0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY2xpZW50L3NjcmlwdFwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lLCBpbkFtcE1vZGUpIHtcbiAgICBjb25zdCBzaGFyZWRGaWxlcyA9ICgwLCBfZ2V0UGFnZUZpbGVzKS5nZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgJy9fYXBwJyk7XG4gICAgY29uc3QgcGFnZUZpbGVzID0gaW5BbXBNb2RlID8gW10gOiAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWRGaWxlcyxcbiAgICAgICAgcGFnZUZpbGVzLFxuICAgICAgICBhbGxGaWxlczogW1xuICAgICAgICAgICAgLi4ubmV3IFNldChbXG4gICAgICAgICAgICAgICAgLi4uc2hhcmVkRmlsZXMsXG4gICAgICAgICAgICAgICAgLi4ucGFnZUZpbGVzXG4gICAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFBvbHlmaWxsU2NyaXB0cyhjb250ZXh0LCBwcm9wcykge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBidWlsZE1hbmlmZXN0ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLmZpbHRlcigocG9seWZpbGwpPT5wb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICApLm1hcCgocG9seWZpbGwpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAga2V5OiBwb2x5ZmlsbCxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgIG5vTW9kdWxlOiB0cnVlLFxuICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWBcbiAgICAgICAgfSlcbiAgICApO1xufVxuZnVuY3Rpb24gZ2V0UHJlTmV4dFNjcmlwdHMoY29udGV4dCwgcHJvcHMpIHtcbiAgICBjb25zdCB7IHNjcmlwdExvYWRlciAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICB9ID0gY29udGV4dDtcbiAgICByZXR1cm4gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkubWFwKChmaWxlLCBpbmRleCk9PntcbiAgICAgICAgY29uc3QgeyBzdHJhdGVneSAsIC4uLnNjcmlwdFByb3BzIH0gPSBmaWxlO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB9LCBzY3JpcHRQcm9wcywge1xuICAgICAgICAgICAga2V5OiBzY3JpcHRQcm9wcy5zcmMgfHwgaW5kZXgsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgXCJkYXRhLW5zY3JpcHRcIjogXCJiZWZvcmVJbnRlcmFjdGl2ZVwiLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgfSkpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldER5bmFtaWNDaHVua3MoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgaXNEZXZlbG9wbWVudCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIGR5bmFtaWNJbXBvcnRzLm1hcCgoZmlsZSk9PntcbiAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhmaWxlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgYXN5bmM6ICFpc0RldmVsb3BtZW50ICYmIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFNjcmlwdHMoY29udGV4dCwgcHJvcHMsIGZpbGVzKSB7XG4gICAgdmFyIHJlZjtcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgYnVpbGRNYW5pZmVzdCAsIGlzRGV2ZWxvcG1lbnQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IG5vcm1hbFNjcmlwdHMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuanMnKVxuICAgICk7XG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gKHJlZiA9IGJ1aWxkTWFuaWZlc3QubG93UHJpb3JpdHlGaWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApO1xuICAgIHJldHVybiBbXG4gICAgICAgIC4uLm5vcm1hbFNjcmlwdHMsXG4gICAgICAgIC4uLmxvd1ByaW9yaXR5U2NyaXB0c1xuICAgIF0ubWFwKChmaWxlKT0+e1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5jbGFzcyBEb2N1bWVudDEgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHApPT57XG4gICAgICAgICAgICByZXR1cm4gKHByb3BzKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcHJvcHMpKVxuICAgICAgICAgICAgO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB7IGh0bWwgLCBoZWFkICB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2Uoe1xuICAgICAgICAgICAgZW5oYW5jZUFwcFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgLi4uKDAsIF9zZXJ2ZXIpLmRlZmF1bHQoKVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGhlYWQsXG4gICAgICAgICAgICBzdHlsZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbiwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LCBudWxsKSkpKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBEb2N1bWVudDE7XG5mdW5jdGlvbiBIdG1sKHByb3BzKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBsb2NhbGUgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF91dGlscy5IdG1sQ29udGV4dCk7XG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGxhbmc6IHByb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYW1wOiBpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgIH0pKSk7XG59XG5jbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgZ2V0Q3NzTGlua3MoZmlsZXMpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZHluYW1pY0ltcG9ydHMgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKT0+Zi5lbmRzV2l0aCgnLmNzcycpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNoYXJlZEZpbGVzID0gbmV3IFNldChmaWxlcy5zaGFyZWRGaWxlcyk7XG4gICAgICAgIC8vIFVubWFuYWdlZCBmaWxlcyBhcmUgQ1NTIGZpbGVzIHRoYXQgd2lsbCBiZSBoYW5kbGVkIGRpcmVjdGx5IGJ5IHRoZVxuICAgICAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgICAgICBsZXQgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoW10pO1xuICAgICAgICBsZXQgZHluYW1pY0Nzc0ZpbGVzID0gQXJyYXkuZnJvbShuZXcgU2V0KGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICApKSk7XG4gICAgICAgIGlmIChkeW5hbWljQ3NzRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IG5ldyBTZXQoY3NzRmlsZXMpO1xuICAgICAgICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcigoZik9PiEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChkeW5hbWljQ3NzRmlsZXMpO1xuICAgICAgICAgICAgY3NzRmlsZXMucHVzaCguLi5keW5hbWljQ3NzRmlsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjc3NMaW5rRWxlbWVudHMgPSBbXTtcbiAgICAgICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSk9PntcbiAgICAgICAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKTtcbiAgICAgICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUykge1xuICAgICAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGAke2ZpbGV9LXByZWxvYWRgLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICAgICAgYXM6IFwic3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzVW5tYW5hZ2VkRmlsZSA9IHVubWFuZ2VkRmlsZXMuaGFzKGZpbGUpO1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLWdcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgXCJkYXRhLW4tcFwiOiBpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUykge1xuICAgICAgICAgICAgY3NzTGlua0VsZW1lbnRzID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICAgICAgY29uc3QgeyBkeW5hbWljSW1wb3J0cyAsIGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XG4gICAgICAgICAgICBpZiAoIWZpbGUuZW5kc1dpdGgoJy5qcycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgaHJlZjogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pLy8gRmlsdGVyIG91dCBudWxsZWQgc2NyaXB0c1xuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIHNjcmlwdExvYWRlciAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgcHJlbG9hZEZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoJy5qcycpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuc3JjLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogZmlsZS5zcmMsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAuLi5wcmVsb2FkRmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInNjcmlwdFwiLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICksIFxuICAgICAgICBdO1xuICAgIH1cbiAgICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldFNjcmlwdHMoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsgc2NyaXB0TG9hZGVyICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBzY3JpcHRMb2FkZXJJdGVtcyA9IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZENoaWxkcmVuID0gW107XG4gICAgICAgIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBfc2NyaXB0LmRlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMuc3RyYXRlZ3kgPT09ICdiZWZvcmVJbnRlcmFjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlID0gKHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSB8fCBbXSkuY29uY2F0KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jaGlsZC5wcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChbXG4gICAgICAgICAgICAgICAgICAgICdsYXp5T25sb2FkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVySW50ZXJhY3RpdmUnXG4gICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhjaGlsZC5wcm9wcy5zdHJhdGVneSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWx0ZXJlZENoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18uc2NyaXB0TG9hZGVyID0gc2NyaXB0TG9hZGVySXRlbXM7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZENoaWxkcmVuO1xuICAgIH1cbiAgICBtYWtlU3R5bGVzaGVldEluZXJ0KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChub2RlLCAoYyk9PntcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydocmVmJ10gJiYgX2NvbnN0YW50cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoeyB1cmwgIH0pPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmMucHJvcHMgfHwge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddO1xuICAgICAgICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICAgICAgICAgIGMucHJvcHNbJ2NoaWxkcmVuJ10gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoYy5wcm9wc1snY2hpbGRyZW4nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdHlsZXMgLCBhbXBQYXRoICwgaW5BbXBNb2RlICwgaHlicmlkQW1wICwgY2Fub25pY2FsQmFzZSAsIF9fTkVYVF9EQVRBX18gLCBkYW5nZXJvdXNBc1BhdGggLCBoZWFkVGFncyAsIHVuc3RhYmxlX3J1bnRpbWVKUyAsIHVuc3RhYmxlX0pzUHJlbG9hZCAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlO1xuICAgICAgICBjb25zdCBkaXNhYmxlSnNQcmVsb2FkID0gdW5zdGFibGVfSnNQcmVsb2FkID09PSBmYWxzZSB8fCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmc7XG4gICAgICAgIHRoaXMuY29udGV4dC5kb2NDb21wb25lbnRzUmVuZGVyZWQuSGVhZCA9IHRydWU7XG4gICAgICAgIGxldCB7IGhlYWQgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGxldCBjc3NQcmVsb2FkcyA9IFtdO1xuICAgICAgICBsZXQgb3RoZXJIZWFkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgaWYgKGhlYWQpIHtcbiAgICAgICAgICAgIGhlYWQuZm9yRWFjaCgoYyk9PntcbiAgICAgICAgICAgICAgICBpZiAoYyAmJiBjLnR5cGUgPT09ICdsaW5rJyAmJiBjLnByb3BzWydyZWwnXSA9PT0gJ3ByZWxvYWQnICYmIGMucHJvcHNbJ2FzJ10gPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzUHJlbG9hZHMucHVzaChjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjICYmIG90aGVySGVhZEVsZW1lbnRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoZWFkID0gY3NzUHJlbG9hZHMuY29uY2F0KG90aGVySGVhZEVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCk9PntcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZiA9IGNoaWxkLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZlsnZGF0YS1yZWFjdC1oZWxtZXQnXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjE7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoaWxkLnR5cGUpID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLWRvY3VtZW50LXRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hpbGQudHlwZSkgPT09ICdtZXRhJyAmJiAoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gY2hpbGQucHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEubmFtZSkgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pIGNvbnNvbGUud2FybignV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJiAhaW5BbXBNb2RlKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pO1xuICAgICAgICBsZXQgaGFzQW1waHRtbFJlbCA9IGZhbHNlO1xuICAgICAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2U7XG4gICAgICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICAgICAgaGVhZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChoZWFkIHx8IFtdLCAoY2hpbGQpPT57XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUgLCBwcm9wcyAgfSA9IGNoaWxkO1xuICAgICAgICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICAgICAgICAgIGxldCBiYWRQcm9wID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdtZXRhJyAmJiBwcm9wcy5uYW1lID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgYmxvY2sgaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgdHlwZSBvZiB0ZXh0L2phdmFzY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEgfHwgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiYgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkUHJvcCA9ICc8c2NyaXB0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZFByb3AgKz0gJy8+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEZvdW5kIGNvbmZsaWN0aW5nIGFtcCB0YWcgXCIke2NoaWxkLnR5cGV9XCIgd2l0aCBjb25mbGljdGluZyBwcm9wICR7YmFkUHJvcH0gaW4gJHtfX05FWFRfREFUQV9fLnBhZ2V9LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jb25mbGljdGluZy1hbXAtdGFnYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgICAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICAgICAgY29uc3QgY3VyU3R5bGVzID0gQXJyYXkuaXNBcnJheShzdHlsZXMpID8gc3R5bGVzIDogW107XG4gICAgICAgIGlmIChpbkFtcE1vZGUgJiYgc3R5bGVzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgICBzdHlsZXMucHJvcHMgJiYgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsKT0+e1xuICAgICAgICAgICAgICAgIHZhciByZWYyLCByZWYzO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjIgPSBlbC5wcm9wcykgPT09IG51bGwgfHwgcmVmMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjMgPSByZWYyLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSA9PT0gbnVsbCB8fCByZWYzID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYzLl9faHRtbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgICAgIHN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCk9PntcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpPT5oYXNTdHlsZXMoZWwpICYmIGN1clN0eWxlcy5wdXNoKGVsKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LCB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLCBpbkFtcE1vZGUpO1xuICAgICAgICB2YXIgX25vbmNlLCBfbm9uY2UxO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgdGhpcy5wcm9wcyksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6IHRydWUsXG4gICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiBpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogaW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpKSwgY2hpbGRyZW4sIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1mb250LXByZWNvbm5lY3RcIlxuICAgICAgICB9KSwgaGVhZCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtaGVhZC1jb3VudFwiLFxuICAgICAgICAgICAgY29udGVudDogX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoaGVhZCB8fCBbXSkudG9TdHJpbmcoKVxuICAgICAgICB9KSwgaW5BbXBNb2RlICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgfSksICFoYXNDYW5vbmljYWxSZWwgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwiY2Fub25pY2FsXCIsXG4gICAgICAgICAgICBocmVmOiBjYW5vbmljYWxCYXNlICsgKDAsIF91dGlsczEpLmNsZWFuQW1wUGF0aChkYW5nZXJvdXNBc1BhdGgpXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICB9KSwgc3R5bGVzICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiYW1wLWN1c3RvbVwiOiBcIlwiLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGN1clN0eWxlcy5tYXAoKHN0eWxlKT0+c3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sXG4gICAgICAgICAgICAgICAgKS5qb2luKCcnKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpLnJlcGxhY2UoL1xcL1xcKkAgc291cmNlVVJMPS4qP1xcKlxcLy9nLCAnJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiYW1wLWJvaWxlcnBsYXRlXCI6IFwiXCIsXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1ib2lsZXJwbGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogXCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgIH0pKSwgIWluQW1wTW9kZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsICFoYXNBbXBodG1sUmVsICYmIGh5YnJpZEFtcCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgIHJlbDogXCJhbXBodG1sXCIsXG4gICAgICAgICAgICBocmVmOiBjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpXG4gICAgICAgIH0pLCAhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKSwgIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwge1xuICAgICAgICAgICAgXCJkYXRhLW4tY3NzXCI6IChfbm9uY2UgPSB0aGlzLnByb3BzLm5vbmNlKSAhPT0gbnVsbCAmJiBfbm9uY2UgIT09IHZvaWQgMCA/IF9ub25jZSA6ICcnXG4gICAgICAgIH0pLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfSU1BR0VTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWltYWdlLXByZWxvYWRcIlxuICAgICAgICB9KSwgIWRpc2FibGVSdW50aW1lSlMgJiYgIWRpc2FibGVKc1ByZWxvYWQgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiAhZGlzYWJsZUpzUHJlbG9hZCAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIHRoaXMuZ2V0Q3NzTGlua3MoZmlsZXMpLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uLWNzc1wiOiAoX25vbmNlMSA9IHRoaXMucHJvcHMubm9uY2UpICE9PSBudWxsICYmIF9ub25jZTEgIT09IHZvaWQgMCA/IF9ub25jZTEgOiAnJ1xuICAgICAgICB9KSwgdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGlkOiBcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiXG4gICAgICAgIH0pLCBzdHlsZXMgfHwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwge1xuICAgICAgICB9LCAuLi5oZWFkVGFncyB8fCBbXSkpKTtcbiAgICB9XG59XG5leHBvcnRzLkhlYWQgPSBIZWFkO1xuSGVhZC5jb250ZXh0VHlwZSA9IF91dGlscy5IdG1sQ29udGV4dDtcbmZ1bmN0aW9uIE1haW4oKSB7XG4gICAgY29uc3QgeyBpbkFtcE1vZGUgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgIH0gPSAoMCwgX3JlYWN0KS51c2VDb250ZXh0KF91dGlscy5IdG1sQ29udGV4dCk7XG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlO1xuICAgIGlmIChpbkFtcE1vZGUpIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIF9jb25zdGFudHMuQk9EWV9SRU5ERVJfVEFSR0VUKSk7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGlkOiBcIl9fbmV4dFwiXG4gICAgfSwgX2NvbnN0YW50cy5CT0RZX1JFTkRFUl9UQVJHRVQpKTtcbn1cbmNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50IHtcbiAgICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQcmVOZXh0U2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFByZU5leHRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcyk7XG4gICAgfVxuICAgIGdldFNjcmlwdHMoZmlsZXMpIHtcbiAgICAgICAgcmV0dXJuIGdldFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzLCBmaWxlcyk7XG4gICAgfVxuICAgIGdldFBvbHlmaWxsU2NyaXB0cygpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgeyBfX05FWFRfREFUQV9fICB9ID0gY29udGV4dDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2h0bWxlc2NhcGUpLmh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY2lyY3VsYXItc3RydWN0dXJlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgaW5BbXBNb2RlICwgYnVpbGRNYW5pZmVzdCAsIHVuc3RhYmxlX3J1bnRpbWVKUyAsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2U7XG4gICAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgICAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5wb2x5ZmlsbEZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsIFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IHRydWVcbiAgICAgICAgICAgIH0pLCBhbXBEZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pIGNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LCB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlLCBpbkFtcE1vZGUpO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA6IG51bGwsIGRpc2FibGVSdW50aW1lSlMgPyBudWxsIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGlkOiBcIl9fTkVYVF9EQVRBX19cIixcbiAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlTmV4dFNjcmlwdHMoKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV4dFNjcmlwdCA9IE5leHRTY3JpcHQ7XG5OZXh0U2NyaXB0LmNvbnRleHRUeXBlID0gX3V0aWxzLkh0bWxDb250ZXh0O1xuTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCA9ICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7XG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsIGFzUGF0aCkge1xuICAgIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2RvY3VtZW50LmpzLm1hcCIsImltcG9ydCB7IENvbG9yTW9kZVNjcmlwdCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50JztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2xpYi90aGVtZSc7XHJcblxyXG4vLyBEb2VzIF9kb2N1bWVudC5qcyBhZmZlY3QgdGhlIGJhc2UgaHRtbCBkb2N1bWVudCBvZiB0aGUgd2ViIGFwcGxpY2F0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgTmV4dERvY3VtZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SHRtbCBsYW5nPSdlbic+XHJcbiAgICAgICAgICAgICAgICA8SGVhZCAvPlxyXG4gICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ2xhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiaW5pdEhlYWRNYW5hZ2VyIiwiRE9NQXR0cmlidXRlTmFtZXMiLCJhY2NlcHRDaGFyc2V0IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsImh0dHBFcXVpdiIsIm5vTW9kdWxlIiwicmVhY3RFbGVtZW50VG9ET00iLCJ0eXBlIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJzZXRBdHRyaWJ1dGUiLCJjaGlsZHJlbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiaW5uZXJIVE1MIiwiX19odG1sIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJqb2luIiwidXBkYXRlRWxlbWVudHMiLCJoZWFkRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImhlYWRDb3VudEVsIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJlcnJvciIsImhlYWRDb3VudCIsIk51bWJlciIsImNvbnRlbnQiLCJvbGRUYWdzIiwiaSIsImoiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsInB1c2giLCJuZXdUYWdzIiwibWFwIiwiZmlsdGVyIiwibmV3VGFnIiwiayIsImxlbiIsImxlbmd0aCIsIm9sZFRhZyIsImlzRXF1YWxOb2RlIiwic3BsaWNlIiwiZm9yRWFjaCIsInQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJ0b1N0cmluZyIsInVwZGF0ZVByb21pc2UiLCJtb3VudGVkSW5zdGFuY2VzIiwiU2V0IiwidXBkYXRlSGVhZCIsImhlYWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwidGFncyIsImgiLCJocmVmIiwidGl0bGVDb21wb25lbnQiLCJ0aXRsZSIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiaW5pdFNjcmlwdExvYWRlciIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2hlYWRNYW5hZ2VyIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwiU2NyaXB0Q2FjaGUiLCJNYXAiLCJMb2FkQ2FjaGUiLCJpZ25vcmVQcm9wcyIsImxvYWRTY3JpcHQiLCJzcmMiLCJvbkxvYWQiLCJzdHJhdGVneSIsIm9uRXJyb3IiLCJjYWNoZUtleSIsImhhcyIsImFkZCIsImdldCIsImxvYWRQcm9taXNlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjYXRjaCIsInNldCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImFwcGVuZENoaWxkIiwiaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwidXBkYXRlU2NyaXB0cyIsInNjcmlwdHMiLCJnZXRJc1NzciIsInVzZUNvbnRleHQiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJiZWZvcmVJbnRlcmFjdGl2ZSIsIl9kZWZhdWx0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiSHRtbCIsIk1haW4iLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2NvbnN0YW50cyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMxIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX19lc01vZHVsZSIsIm5ld09iaiIsImRlc2MiLCJnZXREb2N1bWVudEZpbGVzIiwiYnVpbGRNYW5pZmVzdCIsInBhdGhuYW1lIiwiaW5BbXBNb2RlIiwic2hhcmVkRmlsZXMiLCJnZXRQYWdlRmlsZXMiLCJwYWdlRmlsZXMiLCJhbGxGaWxlcyIsImdldFBvbHlmaWxsU2NyaXB0cyIsImNvbnRleHQiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZGlzYWJsZU9wdGltaXplZExvYWRpbmciLCJwb2x5ZmlsbEZpbGVzIiwicG9seWZpbGwiLCJlbmRzV2l0aCIsImRlZmVyIiwibm9uY2UiLCJjcm9zc09yaWdpbiIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwiaW5kZXgiLCJzY3JpcHRQcm9wcyIsImFzc2lnbiIsImdldER5bmFtaWNDaHVua3MiLCJmaWxlcyIsImR5bmFtaWNJbXBvcnRzIiwiaXNEZXZlbG9wbWVudCIsImFzeW5jIiwiZW5jb2RlVVJJIiwiZ2V0U2NyaXB0cyIsInJlZiIsIm5vcm1hbFNjcmlwdHMiLCJsb3dQcmlvcml0eVNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwiRG9jdW1lbnQxIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZW5oYW5jZUFwcCIsIkFwcCIsImh0bWwiLCJyZW5kZXJQYWdlIiwicmVuZGVyIiwiSGVhZCIsIk5leHRTY3JpcHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJsb2NhbGUiLCJIdG1sQ29udGV4dCIsImxhbmciLCJhbXAiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJmcm9tIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJpc1NoYXJlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfQ1NTIiwicmVsIiwiYXMiLCJpc1VubWFuYWdlZEZpbGUiLCJfX05FWFRfT1BUSU1JWkVfRk9OVFMiLCJtYWtlU3R5bGVzaGVldEluZXJ0IiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJub2RlIiwiYyIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInNvbWUiLCJ1cmwiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsImlzUmVhY3RIZWxtZXQiLCJyZWYxIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiaGFzU3R5bGVzIiwicmVmMiIsInJlZjMiLCJfbm9uY2UiLCJfbm9uY2UxIiwiRnJhZ21lbnQiLCJjb3VudCIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJfX05FWFRfT1BUSU1JWkVfSU1BR0VTIiwiY29udGV4dFR5cGUiLCJCT0RZX1JFTkRFUl9UQVJHRVQiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImh0bWxFc2NhcGVKc29uU3RyaW5nIiwiZXJyIiwibWVzc2FnZSIsIkVycm9yIiwiYW1wRGV2RmlsZXMiLCJkZXZGaWxlcyIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIiwiQ29sb3JNb2RlU2NyaXB0IiwiTmV4dERvY3VtZW50IiwiRG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9