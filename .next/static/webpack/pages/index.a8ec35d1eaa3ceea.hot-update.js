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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu */ \"./pages/components/menu/menu.tsx\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.tsx\");\n/* harmony import */ var _components_parallaxImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parallaxImage */ \"./pages/components/parallaxImage.tsx\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills */ \"./pages/components/skills.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/intro */ \"./pages/components/intro.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer */ \"./pages/components/footer.tsx\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/experience */ \"./pages/components/experience.tsx\");\n/* harmony import */ var _components_downloadCvButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/downloadCvButton */ \"./pages/components/downloadCvButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n/////////////////////////// @ COMPONENTS @ ///////////////////////////\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const welcome = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const parallaxImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intro = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const skills = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = (refName)=>{\n        const ref = refName === \"Bienvenue\" ? welcome : refName === \"Une image de moi\" ? parallaxImage : refName === \"Intro\" ? intro : refName === \"Mon parcours\" ? experience : refName === \"Mes comp\\xe9tences\" ? skills : footer;\n        if (ref && ref.current) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"fixed\",\n                    zIndex: 100\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleMenuClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_downloadCvButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                refForNavigate: welcome\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parallaxImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                refForNavigate: parallaxImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                refForNavigate: intro\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_experience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                refForNavigate: experience\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                refForNavigate: skills\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                refForNavigate: footer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"jtDQAcmMM6G8iXF1tQCVE36PC8c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBSXRDLHNFQUFzRTtBQUM1QjtBQUNDO0FBQ1k7QUFDZDtBQUNGO0FBQ0U7QUFDUTtBQUNZO0FBRTlDLFNBQVNVLE9BQU87O0lBQzdCLE1BQU1DLFVBQVVWLDZDQUFNQSxDQUFjLElBQUk7SUFDeEMsTUFBTVcsZ0JBQWdCWCw2Q0FBTUEsQ0FBYyxJQUFJO0lBQzlDLE1BQU1ZLFFBQVFaLDZDQUFNQSxDQUFjLElBQUk7SUFDdEMsTUFBTWEsYUFBYWIsNkNBQU1BLENBQWMsSUFBSTtJQUMzQyxNQUFNYyxTQUFTZCw2Q0FBTUEsQ0FBYyxJQUFJO0lBQ3ZDLE1BQU1lLFNBQVNmLDZDQUFNQSxDQUFjLElBQUk7SUFFdkMsTUFBTWdCLGtCQUFrQixDQUFDQyxVQUFpQjtRQUN4QyxNQUFNQyxNQUFPRCxZQUFZLGNBQWNQLFVBQVdPLFlBQVkscUJBQXFCTixnQkFBaUJNLFlBQVksVUFBVUwsUUFBU0ssWUFBWSxpQkFBaUJKLGFBQWNJLFlBQVksdUJBQW9CSCxTQUFTQyxNQUFNO1FBQzdOLElBQUlHLE9BQU9BLElBQUlDLE9BQU8sRUFBRTtZQUN0QkQsSUFBSUMsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNsRCxDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxPQUFPO29CQUNWQyxVQUFTO29CQUNYQyxRQUFRO2dCQUFHOztrQ0FDVCw4REFBQ3hCLDZEQUFJQTt3QkFBQ2UsaUJBQWlCQTs7Ozs7O2tDQUN2Qiw4REFBQ1Isb0VBQWdCQTs7Ozs7Ozs7Ozs7MEJBRW5CLDhEQUFDTiwyREFBT0E7Z0JBQUN3QixnQkFBZ0JoQjs7Ozs7OzBCQUN6Qiw4REFBQ1AsaUVBQWFBO2dCQUFDdUIsZ0JBQWdCZjs7Ozs7OzBCQUMvQiw4REFBQ04seURBQUtBO2dCQUFDcUIsZ0JBQWdCZDs7Ozs7OzBCQUN2Qiw4REFBQ0wsOERBQVVBO2dCQUFDbUIsZ0JBQWdCYjs7Ozs7OzBCQUM1Qiw4REFBQ1QsMERBQU1BO2dCQUFDc0IsZ0JBQWdCWjs7Ozs7OzBCQUN4Qiw4REFBQ1IsMERBQU1BO2dCQUFDb0IsZ0JBQWdCWDs7Ozs7Ozs7QUFHOUIsQ0FBQztHQS9CdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBAIENPTVBPTkVOVFMgQCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51L21lbnVcIjtcclxuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vY29tcG9uZW50cy93ZWxjb21lXCI7XHJcbmltcG9ydCBQYXJhbGxheEltYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvcGFyYWxsYXhJbWFnZVwiO1xyXG5pbXBvcnQgU2tpbGxzIGZyb20gXCIuL2NvbXBvbmVudHMvc2tpbGxzXCI7XHJcbmltcG9ydCBJbnRybyBmcm9tIFwiLi9jb21wb25lbnRzL2ludHJvXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcclxuaW1wb3J0IEV4cGVyaWVuY2UgZnJvbSBcIi4vY29tcG9uZW50cy9leHBlcmllbmNlXCI7XHJcbmltcG9ydCBEb3dubG9hZEN2QnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvZG93bmxvYWRDdkJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB3ZWxjb21lID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwYXJhbGxheEltYWdlID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBpbnRybyA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3Qgc2tpbGxzID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBmb290ZXIgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAocmVmTmFtZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSAocmVmTmFtZSA9PT0gJ0JpZW52ZW51ZScgPyB3ZWxjb21lIDogKHJlZk5hbWUgPT09ICdVbmUgaW1hZ2UgZGUgbW9pJyA/IHBhcmFsbGF4SW1hZ2UgOiAocmVmTmFtZSA9PT0gJ0ludHJvJyA/IGludHJvIDogKHJlZk5hbWUgPT09ICdNb24gcGFyY291cnMnID8gZXhwZXJpZW5jZSA6IChyZWZOYW1lID09PSAnTWVzIGNvbXDDqXRlbmNlcycgPyBza2lsbHMgOiBmb290ZXIpKSkpKTtcclxuICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICBwb3NpdGlvbjpcImZpeGVkXCIsIFxyXG4gICAgICB6SW5kZXg6IDEwMH19PlxyXG4gICAgICAgIDxNZW51IGhhbmRsZU1lbnVDbGljaz17aGFuZGxlTWVudUNsaWNrfSAvPlxyXG4gICAgICAgIDxEb3dubG9hZEN2QnV0dG9uIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8V2VsY29tZSByZWZGb3JOYXZpZ2F0ZT17d2VsY29tZX0gLz5cclxuICAgICAgPFBhcmFsbGF4SW1hZ2UgcmVmRm9yTmF2aWdhdGU9e3BhcmFsbGF4SW1hZ2V9IC8+XHJcbiAgICAgIDxJbnRybyByZWZGb3JOYXZpZ2F0ZT17aW50cm99IC8+XHJcbiAgICAgIDxFeHBlcmllbmNlIHJlZkZvck5hdmlnYXRlPXtleHBlcmllbmNlfSAvPlxyXG4gICAgICA8U2tpbGxzIHJlZkZvck5hdmlnYXRlPXtza2lsbHN9IC8+XHJcbiAgICAgIDxGb290ZXIgcmVmRm9yTmF2aWdhdGU9e2Zvb3Rlcn0gLz5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIk1lbnUiLCJXZWxjb21lIiwiUGFyYWxsYXhJbWFnZSIsIlNraWxscyIsIkludHJvIiwiRm9vdGVyIiwiRXhwZXJpZW5jZSIsIkRvd25sb2FkQ3ZCdXR0b24iLCJIb21lIiwid2VsY29tZSIsInBhcmFsbGF4SW1hZ2UiLCJpbnRybyIsImV4cGVyaWVuY2UiLCJza2lsbHMiLCJmb290ZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJyZWZOYW1lIiwicmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwiekluZGV4IiwicmVmRm9yTmF2aWdhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});