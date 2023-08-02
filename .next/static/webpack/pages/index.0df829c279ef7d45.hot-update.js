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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/.pnpm/socket.io-client@4.7.1/node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu */ \"./pages/components/menu/menu.tsx\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.tsx\");\n/* harmony import */ var _components_parallaxImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parallaxImage */ \"./pages/components/parallaxImage.tsx\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skills */ \"./pages/components/skills.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intro */ \"./pages/components/intro.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer */ \"./pages/components/footer.tsx\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experience */ \"./pages/components/experience.tsx\");\n/* harmony import */ var _components_downloadCvButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/downloadCvButton */ \"./pages/components/downloadCvButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n/////////////////////////// @ COMPONENTS @ ///////////////////////////\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"192.168.128.4:8000\");\n    socket.on(\"SERVER_MSG\", (msg)=>{\n        setNewMessage(msg);\n    });\n    function setNewMessage(msg) {\n        setMessages([\n            ...messages,\n            msg[0],\n            msg[1]\n        ]);\n    }\n    function sendMessage(e) {\n        e.preventDefault();\n        const msg = {\n            username: e.target.username.value,\n            text: e.target.text.value\n        };\n        socket.emit(\"CLIENT_MSG\", msg);\n    }\n    const welcome = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const parallaxImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intro = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const skills = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = (refName)=>{\n        const ref = refName === \"Bienvenue\" ? welcome : refName === \"Une image de moi\" ? parallaxImage : refName === \"Intro\" ? intro : refName === \"Mon parcours\" ? experience : refName === \"Mes comp\\xe9tences\" ? skills : footer;\n        if (ref && ref.current) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().topBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleMenuClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_downloadCvButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                refForNavigate: welcome\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>sendMessage(e),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-footer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"username\",\n                            type: \"text\",\n                            placeholder: \"Username\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"text\",\n                            type: \"text\",\n                            placeholder: \"Your message\",\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary form-control\",\n                            children: \"send\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parallaxImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                refForNavigate: parallaxImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                refForNavigate: intro\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_experience__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                refForNavigate: experience\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skills__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                refForNavigate: skills\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                refForNavigate: footer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ymjbdu+rUJS6G1yY5aYDVhwi3CA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQCBDT01QT05FTlRTIEAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS9tZW51XCI7XHJcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL2NvbXBvbmVudHMvd2VsY29tZVwiO1xyXG5pbXBvcnQgUGFyYWxsYXhJbWFnZSBmcm9tIFwiLi9jb21wb25lbnRzL3BhcmFsbGF4SW1hZ2VcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiLi9jb21wb25lbnRzL3NraWxsc1wiO1xyXG5pbXBvcnQgSW50cm8gZnJvbSBcIi4vY29tcG9uZW50cy9pbnRyb1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gXCIuL2NvbXBvbmVudHMvZXhwZXJpZW5jZVwiO1xyXG5pbXBvcnQgRG93bmxvYWRDdkJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL2Rvd25sb2FkQ3ZCdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSBhcyBhbnkpO1xyXG5cclxuICBjb25zdCBzb2NrZXQgPSBpbygnMTkyLjE2OC4xMjguNDo4MDAwJyk7XHJcblxyXG4gIHNvY2tldC5vbignU0VSVkVSX01TRycsIG1zZyA9PiB7XHJcbiAgICBzZXROZXdNZXNzYWdlKG1zZyk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldE5ld01lc3NhZ2UobXNnOiBhbnlbXSkge1xyXG4gICAgc2V0TWVzc2FnZXMoW1xyXG4gICAgICAuLi5tZXNzYWdlcyxcclxuICAgICAgbXNnWzBdLFxyXG4gICAgICBtc2dbMV1cclxuICAgIF0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgbXNnID0ge1xyXG4gICAgICB1c2VybmFtZTogZS50YXJnZXQudXNlcm5hbWUudmFsdWUsXHJcbiAgICAgIHRleHQ6IGUudGFyZ2V0LnRleHQudmFsdWVcclxuICAgIH07XHJcbiAgICBzb2NrZXQuZW1pdCgnQ0xJRU5UX01TRycsIG1zZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWxjb21lID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwYXJhbGxheEltYWdlID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBpbnRybyA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3Qgc2tpbGxzID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBmb290ZXIgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAocmVmTmFtZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCByZWYgPSAocmVmTmFtZSA9PT0gJ0JpZW52ZW51ZScgPyB3ZWxjb21lIDogKHJlZk5hbWUgPT09ICdVbmUgaW1hZ2UgZGUgbW9pJyA/IHBhcmFsbGF4SW1hZ2UgOiAocmVmTmFtZSA9PT0gJ0ludHJvJyA/IGludHJvIDogKHJlZk5hbWUgPT09ICdNb24gcGFyY291cnMnID8gZXhwZXJpZW5jZSA6IChyZWZOYW1lID09PSAnTWVzIGNvbXDDqXRlbmNlcycgPyBza2lsbHMgOiBmb290ZXIpKSkpKTtcclxuICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wQmFyfT5cclxuICAgICAgICA8TWVudSBoYW5kbGVNZW51Q2xpY2s9e2hhbmRsZU1lbnVDbGlja30gLz5cclxuICAgICAgICA8RG93bmxvYWRDdkJ1dHRvbiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFdlbGNvbWUgcmVmRm9yTmF2aWdhdGU9e3dlbGNvbWV9IC8+XHJcbiAgICAgIFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICBzZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8UGFyYWxsYXhJbWFnZSByZWZGb3JOYXZpZ2F0ZT17cGFyYWxsYXhJbWFnZX0gLz5cclxuICAgICAgPEludHJvIHJlZkZvck5hdmlnYXRlPXtpbnRyb30gLz5cclxuICAgICAgPEV4cGVyaWVuY2UgcmVmRm9yTmF2aWdhdGU9e2V4cGVyaWVuY2V9IC8+XHJcbiAgICAgIDxTa2lsbHMgcmVmRm9yTmF2aWdhdGU9e3NraWxsc30gLz5cclxuICAgICAgPEZvb3RlciByZWZGb3JOYXZpZ2F0ZT17Zm9vdGVyfSAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbyIsInN0eWxlcyIsIk1lbnUiLCJXZWxjb21lIiwiUGFyYWxsYXhJbWFnZSIsIlNraWxscyIsIkludHJvIiwiRm9vdGVyIiwiRXhwZXJpZW5jZSIsIkRvd25sb2FkQ3ZCdXR0b24iLCJIb21lIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNvY2tldCIsIm9uIiwibXNnIiwic2V0TmV3TWVzc2FnZSIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJlbWl0Iiwid2VsY29tZSIsInBhcmFsbGF4SW1hZ2UiLCJpbnRybyIsImV4cGVyaWVuY2UiLCJza2lsbHMiLCJmb290ZXIiLCJoYW5kbGVNZW51Q2xpY2siLCJyZWZOYW1lIiwicmVmIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b3BCYXIiLCJyZWZGb3JOYXZpZ2F0ZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});