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

/***/ "./pages/components/menu/menuToggle.tsx":
/*!**********************************************!*\
  !*** ./pages/components/menu/menuToggle.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuToggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/menu.module.scss */ \"./styles/menu.module.scss\");\n/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Path = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {\n        fill: \"transparent\",\n        strokeWidth: \"3\",\n        stroke: \"var(--default-color)\",\n        strokeLinecap: \"round\",\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n_c = Path;\nconst buttonShadow = {\n    open: {\n        boxShadow: \"rgb(0, 0, 0) 0px 0px 0px\",\n        transition: {\n            delay: 0\n        }\n    },\n    closed: {\n        boxShadow: \"rgb(0, 0, 0) 0px 0px 6px\",\n        transition: {\n            delay: 0.8\n        }\n    }\n};\nfunction MenuToggle(param) {\n    let { isOpen , toggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n        className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toggleButton),\n        initial: \"{ opacity: 0 }\",\n        animate: isOpen ? \"open\" : \"closed\",\n        onClick: toggle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"23\",\n            height: \"23\",\n            viewBox: \"-0.5 -1.5 23 23\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Path, {\n                    variants: {\n                        closed: {\n                            d: \"M 2 2.5 L 20 2.5\"\n                        },\n                        open: {\n                            d: \"M 3 18 L 20 2.5\"\n                        }\n                    },\n                    animate: isOpen ? \"open\" : \"closed\",\n                    d: \"M 2 2.5 L 20 2.5\",\n                    transition: {\n                        duration: 0.3\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Path, {\n                    d: \"M 2 9.423 L 20 9.423\",\n                    variants: {\n                        closed: {\n                            opacity: 1\n                        },\n                        open: {\n                            opacity: 0\n                        }\n                    },\n                    animate: isOpen ? \"open\" : \"closed\",\n                    opacity: isOpen ? 0 : 1,\n                    transition: {\n                        duration: 0.1\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Path, {\n                    variants: {\n                        closed: {\n                            d: \"M 2 16.346 L 20 16.346\"\n                        },\n                        open: {\n                            d: \"M 3 2.5 L 20 18\"\n                        }\n                    },\n                    animate: isOpen ? \"open\" : \"closed\",\n                    d: \"M 2 16.346 L 20 16.346\",\n                    transition: {\n                        duration: 0.3\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\menuToggle.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c1 = MenuToggle;\nvar _c, _c1;\n$RefreshReg$(_c, \"Path\");\n$RefreshReg$(_c1, \"MenuToggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21lbnUvbWVudVRvZ2dsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ2dDO0FBRWhCO0FBRS9DLE1BQU1HLE9BQU8sQ0FBQ0Msc0JBQ1osOERBQUNILHNEQUFXO1FBQ1ZLLE1BQUs7UUFDTEMsYUFBWTtRQUNaQyxRQUFPO1FBQ1BDLGVBQWM7UUFDYixHQUFHTCxLQUFLOzs7Ozs7S0FOUEQ7QUFVTixNQUFNTyxlQUFlO0lBQ25CQyxNQUFNO1FBQ0pDLFdBQVc7UUFBNEJDLFlBQVk7WUFDakRDLE9BQU87UUFDVDtJQUNGO0lBQ0FDLFFBQVE7UUFDTkgsV0FBVztRQUE0QkMsWUFBWTtZQUNqREMsT0FBTztRQUNUO0lBQ0Y7QUFDRjtBQU9lLFNBQVNFLFdBQVcsS0FBbUMsRUFBRTtRQUFyQyxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBbUIsR0FBbkM7SUFDakMscUJBQ0UsOERBQUNqQix3REFBYTtRQUNabUIsV0FBV2xCLDhFQUFtQjtRQUM5Qm9CLFNBQVM7UUFDVEMsU0FBU04sU0FBUyxTQUFTLFFBQVE7UUFDbkNPLFNBQVNOO2tCQUVULDRFQUFDTztZQUFJQyxPQUFNO1lBQUtDLFFBQU87WUFBS0MsU0FBUTs7OEJBQ2xDLDhEQUFDekI7b0JBQ0MwQixVQUFVO3dCQUNSZCxRQUFROzRCQUFFZSxHQUFHO3dCQUFtQjt3QkFDaENuQixNQUFNOzRCQUFFbUIsR0FBRzt3QkFBa0I7b0JBQy9CO29CQUNBUCxTQUFTTixTQUFTLFNBQVMsUUFBUTtvQkFDbkNhLEdBQUU7b0JBQ0ZqQixZQUFZO3dCQUFFa0IsVUFBVTtvQkFBSTs7Ozs7OzhCQUU5Qiw4REFBQzVCO29CQUNDMkIsR0FBRTtvQkFDRkQsVUFBVTt3QkFDUmQsUUFBUTs0QkFBRWlCLFNBQVM7d0JBQUU7d0JBQ3JCckIsTUFBTTs0QkFBRXFCLFNBQVM7d0JBQUU7b0JBQ3JCO29CQUNBVCxTQUFTTixTQUFTLFNBQVMsUUFBUTtvQkFDbkNlLFNBQVNmLFNBQVMsSUFBSSxDQUFDO29CQUN2QkosWUFBWTt3QkFBRWtCLFVBQVU7b0JBQUk7Ozs7Ozs4QkFFOUIsOERBQUM1QjtvQkFDQzBCLFVBQVU7d0JBQ1JkLFFBQVE7NEJBQUVlLEdBQUc7d0JBQXlCO3dCQUN0Q25CLE1BQU07NEJBQUVtQixHQUFHO3dCQUFrQjtvQkFDL0I7b0JBQ0FQLFNBQVNOLFNBQVMsU0FBUyxRQUFRO29CQUNuQ2EsR0FBRTtvQkFDRmpCLFlBQVk7d0JBQUVrQixVQUFVO29CQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QyxDQUFDO01BeEN1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tZW51L21lbnVUb2dnbGUudHN4PzdjZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uLCB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9tZW51Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBQYXRoID0gKHByb3BzOiBhbnkpID0+IChcclxuICA8bW90aW9uLnBhdGhcclxuICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICBzdHJva2VXaWR0aD1cIjNcIlxyXG4gICAgc3Ryb2tlPVwidmFyKC0tZGVmYXVsdC1jb2xvcilcIlxyXG4gICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pO1xyXG5cclxuY29uc3QgYnV0dG9uU2hhZG93ID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGJveFNoYWRvdzogXCJyZ2IoMCwgMCwgMCkgMHB4IDBweCAwcHhcIiwgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheTogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7XHJcbiAgICBib3hTaGFkb3c6IFwicmdiKDAsIDAsIDApIDBweCAwcHggNnB4XCIsIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXk6IDAuOFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnR5cGUgTWVudVRvZ2dsZVByb3BzID0ge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICB0b2dnbGU6ICgpID0+IHZvaWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51VG9nZ2xlKHsgaXNPcGVuLCB0b2dnbGUgfTogTWVudVRvZ2dsZVByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uYnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn1cclxuICAgICAgaW5pdGlhbD17XCJ7IG9wYWNpdHk6IDAgfVwifVxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZX1cclxuICAgID5cclxuICAgICAgPHN2ZyB3aWR0aD1cIjIzXCIgaGVpZ2h0PVwiMjNcIiB2aWV3Qm94PVwiLTAuNSAtMS41IDIzIDIzXCI+XHJcbiAgICAgICAgPFBhdGhcclxuICAgICAgICAgIHZhcmlhbnRzPXt7XHJcbiAgICAgICAgICAgIGNsb3NlZDogeyBkOiBcIk0gMiAyLjUgTCAyMCAyLjVcIiB9LFxyXG4gICAgICAgICAgICBvcGVuOiB7IGQ6IFwiTSAzIDE4IEwgMjAgMi41XCIgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgICAgIGQ9XCJNIDIgMi41IEwgMjAgMi41XCJcclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFBhdGhcclxuICAgICAgICAgIGQ9XCJNIDIgOS40MjMgTCAyMCA5LjQyM1wiXHJcbiAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICBjbG9zZWQ6IHsgb3BhY2l0eTogMSB9LFxyXG4gICAgICAgICAgICBvcGVuOiB7IG9wYWNpdHk6IDAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cclxuICAgICAgICAgIG9wYWNpdHk9e2lzT3BlbiA/IDAgOiAxfVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UGF0aFxyXG4gICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgY2xvc2VkOiB7IGQ6IFwiTSAyIDE2LjM0NiBMIDIwIDE2LjM0NlwiIH0sXHJcbiAgICAgICAgICAgIG9wZW46IHsgZDogXCJNIDMgMi41IEwgMjAgMThcIiB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxyXG4gICAgICAgICAgZD1cIk0gMiAxNi4zNDYgTCAyMCAxNi4zNDZcIlxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L21vdGlvbi5idXR0b24+XHJcbiAgKVxyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJzdHlsZXMiLCJQYXRoIiwicHJvcHMiLCJwYXRoIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwic3Ryb2tlTGluZWNhcCIsImJ1dHRvblNoYWRvdyIsIm9wZW4iLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJjbG9zZWQiLCJNZW51VG9nZ2xlIiwiaXNPcGVuIiwidG9nZ2xlIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidG9nZ2xlQnV0dG9uIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJvbkNsaWNrIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwidmFyaWFudHMiLCJkIiwiZHVyYXRpb24iLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/menu/menuToggle.tsx\n"));

/***/ })

});