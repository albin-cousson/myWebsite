"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.tsx\",\"import\":\"Michroma\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"inter\"} */ \"./node_modules/.pnpm/next@13.2.1_react-dom@18.2.0_react@18.2.0_sass@1.62.1/node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.tsx\\\",\\\"import\\\":\\\"Michroma\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [cursorIsClick, setCursorIsClick] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const cursorPos = (e)=>{\n        setCursorIsClick(false);\n        if (cursorRef.current != null) {\n            cursorRef.current.style.top = e.pageY - 10 - window.scrollY + \"px\";\n            cursorRef.current.style.left = e.pageX - 15 + \"px\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        onMouseEnter: cursorPos,\n        onMouseMove: cursorPos,\n        className: (next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),\n        onMouseDown: ()=>setCursorIsClick(true),\n        onMouseUp: ()=>setCursorIsClick(false),\n        children: [\n            !cursorIsClick ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                ref: cursorRef,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().persoCursor),\n                src: \"/cursors/cursor.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.img, {\n                ref: cursorRef,\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().persoCursor),\n                src: \"/cursors/cursorOnClick.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 121\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\_app.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\_app.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"2vGKrOVM3xKxoB9KezRcUfxhiic=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9NQTtBQVB1QjtBQUNnQjtBQUVPO0FBQ2I7QUFLeEIsU0FBU0ssSUFBSSxLQUFrQyxFQUFFO1FBQXBDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEdBQWxDOztJQUMxQixNQUFNQyxZQUFZTCw2Q0FBTUE7SUFFeEIsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUV4RCxNQUFNUyxZQUFZLENBQUNDLElBQVc7UUFDNUJGLGlCQUFpQixLQUFLO1FBQ3RCLElBQUdGLFVBQVVLLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDNUJMLFVBQVVLLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLEdBQUcsRUFBR0MsS0FBSyxHQUFHLEtBQU1DLE9BQU9DLE9BQU8sR0FBRztZQUNoRVYsVUFBVUssT0FBTyxDQUFDQyxLQUFLLENBQUNLLElBQUksR0FBR1AsRUFBRVEsS0FBSyxHQUFHLEtBQUs7UUFDaEQsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLGNBQWNYO1FBQVdZLGFBQWFaO1FBQVdhLFdBQVd4Qix3S0FBZTtRQUFFeUIsYUFBYSxJQUFJZixpQkFBaUIsSUFBSTtRQUFHZ0IsV0FBVyxJQUFJaEIsaUJBQWlCLEtBQUs7O1lBQzlKLENBQUNELDhCQUFnQiw4REFBQ0wscURBQVU7Z0JBQUN3QixLQUFLcEI7Z0JBQVdnQixXQUFXdkIsNEVBQWtCO2dCQUFFNkIsS0FBSTtnQkFBc0JDLEtBQUk7Ozs7O3FDQUFPLDhEQUFDM0IscURBQVU7Z0JBQUN3QixLQUFLcEI7Z0JBQVdnQixXQUFXdkIsNEVBQWtCO2dCQUFFNkIsS0FBSTtnQkFBNkJDLEtBQUk7Ozs7O29CQUFJOzBCQUN0Tiw4REFBQ3pCO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QixDQUFDO0dBbkJ1QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IE9yYml0cm9uLCBNaWNocm9tYSwgR2FqcmFqX09uZSwgQmFuZ2VycywgQmxhY2tfT3BzX09uZSB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXHJcblxyXG5jb25zdCBpbnRlciA9IE1pY2hyb21hKHsgc3Vic2V0czogWydsYXRpbiddLCB3ZWlnaHQ6IFsnNDAwJ10sIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IGN1cnNvclJlZiA9IHVzZVJlZjxhbnk+KClcclxuXHJcbiAgY29uc3QgW2N1cnNvcklzQ2xpY2ssIHNldEN1cnNvcklzQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBjdXJzb3JQb3MgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRDdXJzb3JJc0NsaWNrKGZhbHNlKVxyXG4gICAgaWYoY3Vyc29yUmVmLmN1cnJlbnQgIT0gbnVsbCkge1xyXG4gICAgICBjdXJzb3JSZWYuY3VycmVudC5zdHlsZS50b3AgPSAoZS5wYWdlWSAtIDEwKSAtIHdpbmRvdy5zY3JvbGxZICsgXCJweFwiO1xyXG4gICAgICBjdXJzb3JSZWYuY3VycmVudC5zdHlsZS5sZWZ0ID0gZS5wYWdlWCAtIDE1ICsgXCJweFwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIG9uTW91c2VFbnRlcj17Y3Vyc29yUG9zfSBvbk1vdXNlTW92ZT17Y3Vyc29yUG9zfSBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0gb25Nb3VzZURvd249eygpPT5zZXRDdXJzb3JJc0NsaWNrKHRydWUpfSBvbk1vdXNlVXA9eygpPT5zZXRDdXJzb3JJc0NsaWNrKGZhbHNlKX0+XHJcbiAgICAgIHshY3Vyc29ySXNDbGljayA/IDxtb3Rpb24uaW1nIHJlZj17Y3Vyc29yUmVmfSBjbGFzc05hbWU9e3N0eWxlcy5wZXJzb0N1cnNvcn0gc3JjPVwiL2N1cnNvcnMvY3Vyc29yLnBuZ1wiIGFsdD1cIlwiLz4gOiA8bW90aW9uLmltZyByZWY9e2N1cnNvclJlZn0gY2xhc3NOYW1lPXtzdHlsZXMucGVyc29DdXJzb3J9IHNyYz1cIi9jdXJzb3JzL2N1cnNvck9uQ2xpY2sucG5nXCIgYWx0PVwiXCIvPn1cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9tYWluPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXIiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIm1vdGlvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnNvclJlZiIsImN1cnNvcklzQ2xpY2siLCJzZXRDdXJzb3JJc0NsaWNrIiwiY3Vyc29yUG9zIiwiZSIsImN1cnJlbnQiLCJzdHlsZSIsInRvcCIsInBhZ2VZIiwid2luZG93Iiwic2Nyb2xsWSIsImxlZnQiLCJwYWdlWCIsIm1haW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTW92ZSIsImNsYXNzTmFtZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiaW1nIiwicmVmIiwicGVyc29DdXJzb3IiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});