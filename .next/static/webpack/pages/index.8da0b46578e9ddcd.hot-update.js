"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/parallaxImage.tsx":
/*!********************************************!*\
  !*** ./pages/components/parallaxImage.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParallaxImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/parallaxImage.module.scss */ \"./styles/parallaxImage.module.scss\");\n/* harmony import */ var _styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ParallaxImage(param) {\n    let { refForNavigate  } = param;\n    _s();\n    const [backgroundImage, setBackgroundImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n        const backgroundImage = isMobile ? \"/background/parallaxImageForSF.png\" : \"/background/parallaxImage.png\";\n        setBackgroundImage(backgroundImage);\n        console.log(backgroundImage);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: refForNavigate,\n            className: (_styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imageWrapper),\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\")\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\parallaxImage.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ParallaxImage, \"w1zn0ES8kmmV+mdMvbbuCA92gcE=\");\n_c = ParallaxImage;\nvar _c;\n$RefreshReg$(_c, \"ParallaxImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhcmFsbGF4SW1hZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUVXO0FBRXhDLFNBQVNJLGNBQWMsS0FBdUMsRUFBRTtRQUF6QyxFQUFDQyxlQUFjLEVBQXdCLEdBQXZDOztJQUNwQyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXZERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU8sV0FBV0MsT0FBT0MsVUFBVSxDQUFDLHNCQUFzQkMsT0FBTztRQUNoRSxNQUFNTCxrQkFBa0JFLFdBQVcsdUNBQXVDLCtCQUErQjtRQUN6R0QsbUJBQW1CRDtRQUNuQk0sUUFBUUMsR0FBRyxDQUFDUDtJQUVkLEdBQUcsRUFBRTtJQUVMLHFCQUNDO2tCQUNHLDRFQUFDUTtZQUFJQyxLQUFLVjtZQUFnQlcsV0FBV2IsdUZBQW1CO1lBQUVlLE9BQU87Z0JBQy9EWixpQkFBaUIsT0FBdUIsT0FBaEJBLGlCQUFnQjtZQUMxQzs7Ozs7OztBQUdOLENBQUM7R0FsQnVCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3BhcmFsbGF4SW1hZ2UudHN4PzBiZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvcGFyYWxsYXhJbWFnZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcmFsbGF4SW1hZ2Uoe3JlZkZvck5hdmlnYXRlfToge3JlZkZvck5hdmlnYXRlOiBhbnl9KSB7XHJcbiAgY29uc3QgW2JhY2tncm91bmRJbWFnZSwgc2V0QmFja2dyb3VuZEltYWdlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgXHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gaXNNb2JpbGUgPyAnL2JhY2tncm91bmQvcGFyYWxsYXhJbWFnZUZvclNGLnBuZycgOiAnL2JhY2tncm91bmQvcGFyYWxsYXhJbWFnZS5wbmcnO1xyXG4gICAgc2V0QmFja2dyb3VuZEltYWdlKGJhY2tncm91bmRJbWFnZSlcclxuICAgIGNvbnNvbGUubG9nKGJhY2tncm91bmRJbWFnZSk7XHJcbiAgICBcclxuICB9LCBbXSk7IFxyXG5cclxuICByZXR1cm4gKFxyXG4gICA8PlxyXG4gICAgICA8ZGl2IHJlZj17cmVmRm9yTmF2aWdhdGV9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlV3JhcHBlcn0gc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXHJcbiAgICAgIH19Lz5cclxuICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJQYXJhbGxheEltYWdlIiwicmVmRm9yTmF2aWdhdGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRCYWNrZ3JvdW5kSW1hZ2UiLCJpc01vYmlsZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImltYWdlV3JhcHBlciIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/parallaxImage.tsx\n"));

/***/ })

});