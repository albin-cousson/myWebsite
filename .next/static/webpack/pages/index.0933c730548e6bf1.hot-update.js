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

/***/ "./pages/components/menu/navigation.tsx":
/*!**********************************************!*\
  !*** ./pages/components/menu/navigation.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuItem */ \"./pages/components/menu/menuItem.tsx\");\n/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/menu.module.scss */ \"./styles/menu.module.scss\");\n/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst variants = {\n    open: {\n        transition: {\n            staggerChildren: 0.07,\n            delayChildren: 0.2\n        }\n    },\n    closed: {\n        transition: {\n            staggerChildren: 0.05,\n            staggerDirection: -1\n        }\n    }\n};\nfunction Navigation(param) {\n    let { handleMenuClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.ul, {\n        className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navigation),\n        variants: variants,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/hearthb.png\",\n                label: \"Bienvenue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/userb.png\",\n                label: \"Une image de moi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/interrogationb.png\",\n                label: \"Intro\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/interrogationb.png\",\n                label: \"Mon parcours\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/\",\n                label: \"Mes comp\\xe9tences\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handleMenuClick: handleMenuClick,\n                icon: \"/icons/\",\n                label: \"Contactez-moi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\menu\\\\navigation.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21lbnUvbmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ0w7QUFFYTtBQUUvQyxNQUFNSSxXQUFXO0lBQ2ZDLE1BQU07UUFDSkMsWUFBWTtZQUFFQyxpQkFBaUI7WUFBTUMsZUFBZTtRQUFJO0lBQzFEO0lBQ0FDLFFBQVE7UUFDTkgsWUFBWTtZQUFFQyxpQkFBaUI7WUFBTUcsa0JBQWtCLENBQUM7UUFBRTtJQUM1RDtBQUNGO0FBRWUsU0FBU0MsV0FBVyxLQUE2QyxFQUFFO1FBQS9DLEVBQUVDLGdCQUFlLEVBQTRCLEdBQTdDO0lBQ2pDLHFCQUNFLDhEQUFDWCxvREFBUztRQUFDYSxXQUFXWCw0RUFBaUI7UUFBRUMsVUFBVUE7OzBCQUNqRCw4REFBQ0YsaURBQVFBO2dCQUFDVSxpQkFBaUJBO2dCQUFpQkksTUFBSztnQkFBcUJDLE9BQU07Ozs7OzswQkFDNUUsOERBQUNmLGlEQUFRQTtnQkFBQ1UsaUJBQWlCQTtnQkFBaUJJLE1BQUs7Z0JBQW1CQyxPQUFNOzs7Ozs7MEJBQzFFLDhEQUFDZixpREFBUUE7Z0JBQUNVLGlCQUFpQkE7Z0JBQWlCSSxNQUFLO2dCQUE0QkMsT0FBTTs7Ozs7OzBCQUNuRiw4REFBQ2YsaURBQVFBO2dCQUFDVSxpQkFBaUJBO2dCQUFpQkksTUFBSztnQkFBNEJDLE9BQU07Ozs7OzswQkFDbkYsOERBQUNmLGlEQUFRQTtnQkFBQ1UsaUJBQWlCQTtnQkFBaUJJLE1BQUs7Z0JBQVVDLE9BQU07Ozs7OzswQkFDakUsOERBQUNmLGlEQUFRQTtnQkFBQ1UsaUJBQWlCQTtnQkFBaUJJLE1BQUs7Z0JBQVVDLE9BQU07Ozs7Ozs7Ozs7OztBQUd2RSxDQUFDO0tBWHVCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL21lbnUvbmF2aWdhdGlvbi50c3g/OGM0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL21lbnVJdGVtXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9tZW51Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4wNywgZGVsYXlDaGlsZHJlbjogMC4yIH1cclxuICB9LFxyXG4gIGNsb3NlZDoge1xyXG4gICAgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMDUsIHN0YWdnZXJEaXJlY3Rpb246IC0xIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHsgaGFuZGxlTWVudUNsaWNrIH06IHsgaGFuZGxlTWVudUNsaWNrOiBhbnkgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLnVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259IHZhcmlhbnRzPXt2YXJpYW50c30+XHJcbiAgICAgIDxNZW51SXRlbSBoYW5kbGVNZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja30gaWNvbj1cIi9pY29ucy9oZWFydGhiLnBuZ1wiIGxhYmVsPVwiQmllbnZlbnVlXCIgLz5cclxuICAgICAgPE1lbnVJdGVtIGhhbmRsZU1lbnVDbGljaz17aGFuZGxlTWVudUNsaWNrfSBpY29uPVwiL2ljb25zL3VzZXJiLnBuZ1wiIGxhYmVsPVwiVW5lIGltYWdlIGRlIG1vaVwiIC8+XHJcbiAgICAgIDxNZW51SXRlbSBoYW5kbGVNZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja30gaWNvbj1cIi9pY29ucy9pbnRlcnJvZ2F0aW9uYi5wbmdcIiBsYWJlbD1cIkludHJvXCIgLz5cclxuICAgICAgPE1lbnVJdGVtIGhhbmRsZU1lbnVDbGljaz17aGFuZGxlTWVudUNsaWNrfSBpY29uPVwiL2ljb25zL2ludGVycm9nYXRpb25iLnBuZ1wiIGxhYmVsPVwiTW9uIHBhcmNvdXJzXCIgLz5cclxuICAgICAgPE1lbnVJdGVtIGhhbmRsZU1lbnVDbGljaz17aGFuZGxlTWVudUNsaWNrfSBpY29uPVwiL2ljb25zL1wiIGxhYmVsPVwiTWVzIGNvbXDDqXRlbmNlc1wiIC8+XHJcbiAgICAgIDxNZW51SXRlbSBoYW5kbGVNZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja30gaWNvbj1cIi9pY29ucy9cIiBsYWJlbD1cIkNvbnRhY3Rlei1tb2lcIiAvPlxyXG4gICAgPC9tb3Rpb24udWw+XHJcbiAgKVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiTWVudUl0ZW0iLCJzdHlsZXMiLCJ2YXJpYW50cyIsIm9wZW4iLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwiZGVsYXlDaGlsZHJlbiIsImNsb3NlZCIsInN0YWdnZXJEaXJlY3Rpb24iLCJOYXZpZ2F0aW9uIiwiaGFuZGxlTWVudUNsaWNrIiwidWwiLCJjbGFzc05hbWUiLCJuYXZpZ2F0aW9uIiwiaWNvbiIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/menu/navigation.tsx\n"));

/***/ })

});