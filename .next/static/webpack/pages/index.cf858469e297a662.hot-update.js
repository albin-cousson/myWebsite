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

/***/ "./pages/components/downloadCvButton.tsx":
/*!***********************************************!*\
  !*** ./pages/components/downloadCvButton.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DownloadCvButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_downloadCvButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/downloadCvButton.module.scss */ \"./styles/downloadCvButton.module.scss\");\n/* harmony import */ var _styles_downloadCvButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_downloadCvButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction DownloadCvButton() {\n    _s();\n    const [cursorIsClick, setCursorIsClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();\n    const scaleY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)(scrollYProgress, {\n        stiffness: 100,\n        damping: 30,\n        restDelta: 0.001\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.a, {\n            className: (_styles_downloadCvButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().downloadCvButton),\n            href: \"/cv/cv_albin_cousson.pdf\",\n            download: true,\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"DL: CV\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\downloadCvButton.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/icons/inbox-inb.png\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\downloadCvButton.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\downloadCvButton.tsx\",\n            lineNumber: 19,\n            columnNumber: 8\n        }, this)\n    }, void 0, false);\n}\n_s(DownloadCvButton, \"RUNv0NHT/leZu37OGLPFwCd/9DA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = DownloadCvButton;\nvar _c;\n$RefreshReg$(_c, \"DownloadCvButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2Rvd25sb2FkQ3ZCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdUI7QUFFSDtBQUUzQyxTQUFTTSxtQkFBbUI7O0lBQ3pDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFeEQsTUFBTSxFQUFFUSxnQkFBZSxFQUFFLEdBQUdOLHdEQUFTQTtJQUVyQyxNQUFNTyxTQUFTTix3REFBU0EsQ0FBQ0ssaUJBQWlCO1FBQ3hDRSxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0lBRUEscUJBQ0U7a0JBQ0csNEVBQUNYLG1EQUFRO1lBQUNhLFdBQVdWLDhGQUF1QjtZQUFFWSxNQUFNO1lBQTRCQyxRQUFRO1lBQ3ZGQyxTQUFTO2dCQUFFQyxTQUFTO1lBQUU7WUFDdEJDLFNBQVM7Z0JBQUVELFNBQVM7WUFBRTs7OEJBRXRCLDhEQUFDRTs4QkFBRTs7Ozs7OzhCQUNILDhEQUFDQztvQkFBSUMsS0FBSTtvQkFBdUJDLEtBQUk7Ozs7Ozs7Ozs7Ozs7QUFLNUMsQ0FBQztHQXZCdUJuQjs7UUFHTUgsb0RBQVNBO1FBRXRCQyxvREFBU0E7OztLQUxGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL2Rvd25sb2FkQ3ZCdXR0b24udHN4PzI3MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL2Rvd25sb2FkQ3ZCdXR0b24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb3dubG9hZEN2QnV0dG9uKCkge1xyXG4gIGNvbnN0IFtjdXJzb3JJc0NsaWNrLCBzZXRDdXJzb3JJc0NsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCgpO1xyXG5cclxuICBjb25zdCBzY2FsZVkgPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzLCB7XHJcbiAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgIGRhbXBpbmc6IDMwLFxyXG4gICAgcmVzdERlbHRhOiAwLjAwMVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgIDxtb3Rpb24uYSBjbGFzc05hbWU9e3N0eWxlcy5kb3dubG9hZEN2QnV0dG9ufSBocmVmPXtcIi9jdi9jdl9hbGJpbl9jb3Vzc29uLnBkZlwifSBkb3dubG9hZFxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHA+REw6IENWPC9wPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2luYm94LWluYi5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgIDwvbW90aW9uLmE+XHJcbiAgICAgIHsvKiA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGVzdH0gc3R5bGU9e3sgc2NhbGVZIH19Lz4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwic3R5bGVzIiwiRG93bmxvYWRDdkJ1dHRvbiIsImN1cnNvcklzQ2xpY2siLCJzZXRDdXJzb3JJc0NsaWNrIiwic2Nyb2xsWVByb2dyZXNzIiwic2NhbGVZIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJlc3REZWx0YSIsImEiLCJjbGFzc05hbWUiLCJkb3dubG9hZEN2QnV0dG9uIiwiaHJlZiIsImRvd25sb2FkIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwicCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/downloadCvButton.tsx\n"));

/***/ })

});