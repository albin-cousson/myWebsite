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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu */ \"./pages/components/menu/menu.tsx\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.tsx\");\n/* harmony import */ var _components_parallaxImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parallaxImage */ \"./pages/components/parallaxImage.tsx\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/skills */ \"./pages/components/skills.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/intro */ \"./pages/components/intro.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer */ \"./pages/components/footer.tsx\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/experience */ \"./pages/components/experience.tsx\");\n/* harmony import */ var _components_downloadCvButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/downloadCvButton */ \"./pages/components/downloadCvButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n/////////////////////////// @ COMPONENTS @ ///////////////////////////\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const welcome = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const parallaxImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intro = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const skills = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = (refName)=>{\n        const ref = refName === \"Bienvenue\" ? welcome : refName === \"Une image de moi\" ? parallaxImage : refName === \"Intro\" ? intro : refName === \"Mon parcours\" ? experience : refName === \"Mes comp\\xe9tences\" ? skills : footer;\n        if (ref && ref.current) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        handleMenuClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_downloadCvButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                refForNavigate: welcome\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parallaxImage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                refForNavigate: parallaxImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                refForNavigate: intro\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_experience__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                refForNavigate: experience\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skills__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                refForNavigate: skills\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                refForNavigate: footer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"jtDQAcmMM6G8iXF1tQCVE36PC8c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBSXRDLHNFQUFzRTtBQUM1QjtBQUNDO0FBQ1k7QUFDZDtBQUNGO0FBQ0U7QUFDUTtBQUNZO0FBRTlDLFNBQVNVLE9BQU87O0lBQzdCLE1BQU1DLFVBQVVWLDZDQUFNQSxDQUFjLElBQUk7SUFDeEMsTUFBTVcsZ0JBQWdCWCw2Q0FBTUEsQ0FBYyxJQUFJO0lBQzlDLE1BQU1ZLFFBQVFaLDZDQUFNQSxDQUFjLElBQUk7SUFDdEMsTUFBTWEsYUFBYWIsNkNBQU1BLENBQWMsSUFBSTtJQUMzQyxNQUFNYyxTQUFTZCw2Q0FBTUEsQ0FBYyxJQUFJO0lBQ3ZDLE1BQU1lLFNBQVNmLDZDQUFNQSxDQUFjLElBQUk7SUFFdkMsTUFBTWdCLGtCQUFrQixDQUFDQyxVQUFpQjtRQUN4QyxNQUFNQyxNQUFPRCxZQUFZLGNBQWNQLFVBQVdPLFlBQVkscUJBQXFCTixnQkFBaUJNLFlBQVksVUFBVUwsUUFBU0ssWUFBWSxpQkFBaUJKLGFBQWNJLFlBQVksdUJBQW9CSCxTQUFTQyxNQUFNO1FBQzdOLElBQUlHLE9BQU9BLElBQUlDLE9BQU8sRUFBRTtZQUN0QkQsSUFBSUMsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNsRCxDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ3RCLDZEQUFJQTt3QkFBQ2UsaUJBQWlCQTs7Ozs7O2tDQUN2Qiw4REFBQ1Isb0VBQWdCQTs7Ozs7Ozs7Ozs7MEJBRW5CLDhEQUFDTiwyREFBT0E7Z0JBQUNzQixnQkFBZ0JkOzs7Ozs7MEJBQ3pCLDhEQUFDUCxpRUFBYUE7Z0JBQUNxQixnQkFBZ0JiOzs7Ozs7MEJBQy9CLDhEQUFDTix5REFBS0E7Z0JBQUNtQixnQkFBZ0JaOzs7Ozs7MEJBQ3ZCLDhEQUFDTCw4REFBVUE7Z0JBQUNpQixnQkFBZ0JYOzs7Ozs7MEJBQzVCLDhEQUFDVCwwREFBTUE7Z0JBQUNvQixnQkFBZ0JWOzs7Ozs7MEJBQ3hCLDhEQUFDUiwwREFBTUE7Z0JBQUNrQixnQkFBZ0JUOzs7Ozs7OztBQUc5QixDQUFDO0dBN0J1Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEAgQ09NUE9ORU5UUyBAIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUvbWVudVwiO1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi9jb21wb25lbnRzL3dlbGNvbWVcIjtcclxuaW1wb3J0IFBhcmFsbGF4SW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9wYXJhbGxheEltYWdlXCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4vY29tcG9uZW50cy9za2lsbHNcIjtcclxuaW1wb3J0IEludHJvIGZyb20gXCIuL2NvbXBvbmVudHMvaW50cm9cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi9jb21wb25lbnRzL2V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IERvd25sb2FkQ3ZCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9kb3dubG9hZEN2QnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHdlbGNvbWUgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHBhcmFsbGF4SW1hZ2UgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGludHJvID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBleHBlcmllbmNlID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBza2lsbHMgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGZvb3RlciA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lbnVDbGljayA9IChyZWZOYW1lOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHJlZiA9IChyZWZOYW1lID09PSAnQmllbnZlbnVlJyA/IHdlbGNvbWUgOiAocmVmTmFtZSA9PT0gJ1VuZSBpbWFnZSBkZSBtb2knID8gcGFyYWxsYXhJbWFnZSA6IChyZWZOYW1lID09PSAnSW50cm8nID8gaW50cm8gOiAocmVmTmFtZSA9PT0gJ01vbiBwYXJjb3VycycgPyBleHBlcmllbmNlIDogKHJlZk5hbWUgPT09ICdNZXMgY29tcMOpdGVuY2VzJyA/IHNraWxscyA6IGZvb3RlcikpKSkpO1xyXG4gICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xyXG4gICAgICByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgPE1lbnUgaGFuZGxlTWVudUNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9IC8+XHJcbiAgICAgICAgPERvd25sb2FkQ3ZCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxXZWxjb21lIHJlZkZvck5hdmlnYXRlPXt3ZWxjb21lfSAvPlxyXG4gICAgICA8UGFyYWxsYXhJbWFnZSByZWZGb3JOYXZpZ2F0ZT17cGFyYWxsYXhJbWFnZX0gLz5cclxuICAgICAgPEludHJvIHJlZkZvck5hdmlnYXRlPXtpbnRyb30gLz5cclxuICAgICAgPEV4cGVyaWVuY2UgcmVmRm9yTmF2aWdhdGU9e2V4cGVyaWVuY2V9IC8+XHJcbiAgICAgIDxTa2lsbHMgcmVmRm9yTmF2aWdhdGU9e3NraWxsc30gLz5cclxuICAgICAgPEZvb3RlciByZWZGb3JOYXZpZ2F0ZT17Zm9vdGVyfSAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiTWVudSIsIldlbGNvbWUiLCJQYXJhbGxheEltYWdlIiwiU2tpbGxzIiwiSW50cm8iLCJGb290ZXIiLCJFeHBlcmllbmNlIiwiRG93bmxvYWRDdkJ1dHRvbiIsIkhvbWUiLCJ3ZWxjb21lIiwicGFyYWxsYXhJbWFnZSIsImludHJvIiwiZXhwZXJpZW5jZSIsInNraWxscyIsImZvb3RlciIsImhhbmRsZU1lbnVDbGljayIsInJlZk5hbWUiLCJyZWYiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsInJlZkZvck5hdmlnYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});