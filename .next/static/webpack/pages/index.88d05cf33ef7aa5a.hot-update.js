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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/.pnpm/socket.io-client@4.7.1/node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu */ \"./pages/components/menu/menu.tsx\");\n/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome */ \"./pages/components/welcome.tsx\");\n/* harmony import */ var _components_parallaxImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parallaxImage */ \"./pages/components/parallaxImage.tsx\");\n/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/skills */ \"./pages/components/skills.tsx\");\n/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intro */ \"./pages/components/intro.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer */ \"./pages/components/footer.tsx\");\n/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experience */ \"./pages/components/experience.tsx\");\n/* harmony import */ var _components_downloadCvButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/downloadCvButton */ \"./pages/components/downloadCvButton.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n/////////////////////////// @ COMPONENTS @ ///////////////////////////\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"192.168.128.4:8000\");\n    socket.on(\"SERVER_MSG\", (msg)=>{\n        setNewMessage(msg);\n    });\n    function setNewMessage(msg) {\n        setMessages([\n            ...messages,\n            msg[0],\n            msg[1]\n        ]);\n    }\n    function sendMessage(e) {\n        e.preventDefault();\n        const msg = {\n            username: e.target.username.value,\n            text: e.target.text.value\n        };\n        socket.emit(\"CLIENT_MSG\", msg);\n    }\n    const welcome = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const parallaxImage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intro = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const experience = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const skills = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const footer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMenuClick = (refName)=>{\n        const ref = refName === \"Bienvenue\" ? welcome : refName === \"Une image de moi\" ? parallaxImage : refName === \"Intro\" ? intro : refName === \"Mon parcours\" ? experience : refName === \"Mes comp\\xe9tences\" ? skills : footer;\n        if (ref && ref.current) {\n            ref.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().topBar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        handleMenuClick: handleMenuClick\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_downloadCvButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_welcome__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                refForNavigate: welcome\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    zIndex: 1000000\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"messages\",\n                            children: messages.map((msg)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        msg.username,\n                                        \": \",\n                                        msg.text\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>sendMessage(e),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card-footer\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"username\",\n                                    type: \"text\",\n                                    placeholder: \"Username\",\n                                    className: \"form-control\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"text\",\n                                    type: \"text\",\n                                    placeholder: \"Your message\",\n                                    className: \"form-control\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn btn-primary form-control\",\n                                    children: \"send\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_parallaxImage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                refForNavigate: parallaxImage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_intro__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                refForNavigate: intro\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_experience__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                refForNavigate: experience\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skills__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                refForNavigate: skills\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                refForNavigate: footer\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"ymjbdu+rUJS6G1yY5aYDVhwi3CA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2Q7QUFFVztBQUU3QyxzRUFBc0U7QUFDNUI7QUFDQztBQUNZO0FBQ2Q7QUFDRjtBQUNFO0FBQ1E7QUFDWTtBQUU5QyxTQUFTYSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNYyxTQUFTYiw0REFBRUEsQ0FBQztJQUVsQmEsT0FBT0MsRUFBRSxDQUFDLGNBQWNDLENBQUFBLE1BQU87UUFDN0JDLGNBQWNEO0lBQ2hCO0lBRUEsU0FBU0MsY0FBY0QsR0FBVSxFQUFFO1FBQ2pDSCxZQUFZO2VBQ1BEO1lBQ0hJLEdBQUcsQ0FBQyxFQUFFO1lBQ05BLEdBQUcsQ0FBQyxFQUFFO1NBQ1A7SUFDSDtJQUVBLFNBQVNFLFlBQVlDLENBQUMsRUFBRTtRQUN0QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNSixNQUFNO1lBQ1ZLLFVBQVVGLEVBQUVHLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLO1lBQ2pDQyxNQUFNTCxFQUFFRyxNQUFNLENBQUNFLElBQUksQ0FBQ0QsS0FBSztRQUMzQjtRQUNBVCxPQUFPVyxJQUFJLENBQUMsY0FBY1Q7SUFDNUI7SUFFQSxNQUFNVSxVQUFVM0IsNkNBQU1BLENBQWMsSUFBSTtJQUN4QyxNQUFNNEIsZ0JBQWdCNUIsNkNBQU1BLENBQWMsSUFBSTtJQUM5QyxNQUFNNkIsUUFBUTdCLDZDQUFNQSxDQUFjLElBQUk7SUFDdEMsTUFBTThCLGFBQWE5Qiw2Q0FBTUEsQ0FBYyxJQUFJO0lBQzNDLE1BQU0rQixTQUFTL0IsNkNBQU1BLENBQWMsSUFBSTtJQUN2QyxNQUFNZ0MsU0FBU2hDLDZDQUFNQSxDQUFjLElBQUk7SUFFdkMsTUFBTWlDLGtCQUFrQixDQUFDQyxVQUFpQjtRQUN4QyxNQUFNQyxNQUFPRCxZQUFZLGNBQWNQLFVBQVdPLFlBQVkscUJBQXFCTixnQkFBaUJNLFlBQVksVUFBVUwsUUFBU0ssWUFBWSxpQkFBaUJKLGFBQWNJLFlBQVksdUJBQW9CSCxTQUFTQyxNQUFNO1FBQzdOLElBQUlHLE9BQU9BLElBQUlDLE9BQU8sRUFBRTtZQUN0QkQsSUFBSUMsT0FBTyxDQUFDQyxjQUFjLENBQUM7Z0JBQUVDLFVBQVU7WUFBUztRQUNsRCxDQUFDO0lBQ0g7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFXckMsd0VBQWE7O2tDQUMzQiw4REFBQ0MsNkRBQUlBO3dCQUFDNkIsaUJBQWlCQTs7Ozs7O2tDQUN2Qiw4REFBQ3RCLHFFQUFnQkE7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ04sMkRBQU9BO2dCQUFDcUMsZ0JBQWdCZjs7Ozs7OzBCQUN6Qiw4REFBQ1k7Z0JBQUlJLE9BQU87b0JBQUNDLFFBQVE7Z0JBQU87O2tDQUMxQiw4REFBQ0w7a0NBQ0MsNEVBQUNBOzRCQUFJQyxXQUFVO3NDQUNaM0IsU0FBU2dDLEdBQUcsQ0FBQyxDQUFDNUIsTUFBYTtnQ0FDMUIscUJBQ0UsOERBQUNzQjs7d0NBQUt0QixJQUFJSyxRQUFRO3dDQUFDO3dDQUFHTCxJQUFJUSxJQUFJOzs7Ozs7OzRCQUVsQzs7Ozs7Ozs7Ozs7a0NBR0osOERBQUNxQjt3QkFBS0MsVUFBVTNCLENBQUFBLElBQUtELFlBQVlDO2tDQUMvQiw0RUFBQ21COzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1E7b0NBQU1DLElBQUc7b0NBQ1JDLE1BQUs7b0NBQ0xDLGFBQVk7b0NBQ1pYLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ1k7Ozs7OzhDQUNELDhEQUFDSjtvQ0FBTUMsSUFBRztvQ0FDUkMsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWlgsV0FBVTs7Ozs7OzhDQUVaLDhEQUFDWTs7Ozs7OENBQ0QsOERBQUNDO29DQUFPSCxNQUFLO29DQUNYVixXQUFVOzhDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTWpELDhEQUFDbEMsaUVBQWFBO2dCQUFDb0MsZ0JBQWdCZDs7Ozs7OzBCQUMvQiw4REFBQ3BCLHlEQUFLQTtnQkFBQ2tDLGdCQUFnQmI7Ozs7OzswQkFDdkIsOERBQUNuQiw4REFBVUE7Z0JBQUNnQyxnQkFBZ0JaOzs7Ozs7MEJBQzVCLDhEQUFDdkIsMERBQU1BO2dCQUFDbUMsZ0JBQWdCWDs7Ozs7OzBCQUN4Qiw4REFBQ3RCLDBEQUFNQTtnQkFBQ2lDLGdCQUFnQlY7Ozs7Ozs7O0FBRzlCLENBQUM7R0FyRnVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEAgQ09NUE9ORU5UUyBAIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUvbWVudVwiO1xyXG5pbXBvcnQgV2VsY29tZSBmcm9tIFwiLi9jb21wb25lbnRzL3dlbGNvbWVcIjtcclxuaW1wb3J0IFBhcmFsbGF4SW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9wYXJhbGxheEltYWdlXCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcIi4vY29tcG9uZW50cy9za2lsbHNcIjtcclxuaW1wb3J0IEludHJvIGZyb20gXCIuL2NvbXBvbmVudHMvaW50cm9cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiLi9jb21wb25lbnRzL2V4cGVyaWVuY2VcIjtcclxuaW1wb3J0IERvd25sb2FkQ3ZCdXR0b24gZnJvbSBcIi4vY29tcG9uZW50cy9kb3dubG9hZEN2QnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10gYXMgYW55KTtcclxuXHJcbiAgY29uc3Qgc29ja2V0ID0gaW8oJzE5Mi4xNjguMTI4LjQ6ODAwMCcpO1xyXG5cclxuICBzb2NrZXQub24oJ1NFUlZFUl9NU0cnLCBtc2cgPT4ge1xyXG4gICAgc2V0TmV3TWVzc2FnZShtc2cpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzZXROZXdNZXNzYWdlKG1zZzogYW55W10pIHtcclxuICAgIHNldE1lc3NhZ2VzKFtcclxuICAgICAgLi4ubWVzc2FnZXMsXHJcbiAgICAgIG1zZ1swXSxcclxuICAgICAgbXNnWzFdXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICB0ZXh0OiBlLnRhcmdldC50ZXh0LnZhbHVlXHJcbiAgICB9O1xyXG4gICAgc29ja2V0LmVtaXQoJ0NMSUVOVF9NU0cnLCBtc2cpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2VsY29tZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgcGFyYWxsYXhJbWFnZSA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgaW50cm8gPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGV4cGVyaWVuY2UgPSB1c2VSZWY8SFRNTEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHNraWxscyA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XHJcbiAgY29uc3QgZm9vdGVyID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKHJlZk5hbWU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgcmVmID0gKHJlZk5hbWUgPT09ICdCaWVudmVudWUnID8gd2VsY29tZSA6IChyZWZOYW1lID09PSAnVW5lIGltYWdlIGRlIG1vaScgPyBwYXJhbGxheEltYWdlIDogKHJlZk5hbWUgPT09ICdJbnRybycgPyBpbnRybyA6IChyZWZOYW1lID09PSAnTW9uIHBhcmNvdXJzJyA/IGV4cGVyaWVuY2UgOiAocmVmTmFtZSA9PT0gJ01lcyBjb21ww6l0ZW5jZXMnID8gc2tpbGxzIDogZm9vdGVyKSkpKSk7XHJcbiAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcEJhcn0+XHJcbiAgICAgICAgPE1lbnUgaGFuZGxlTWVudUNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9IC8+XHJcbiAgICAgICAgPERvd25sb2FkQ3ZCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxXZWxjb21lIHJlZkZvck5hdmlnYXRlPXt3ZWxjb21lfSAvPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7ekluZGV4OiAxMDAwMDAwfX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cclxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobXNnOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj57bXNnLnVzZXJuYW1lfToge21zZy50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17ZSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIHNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2ID5cclxuICAgICAgPFBhcmFsbGF4SW1hZ2UgcmVmRm9yTmF2aWdhdGU9e3BhcmFsbGF4SW1hZ2V9IC8+XHJcbiAgICAgIDxJbnRybyByZWZGb3JOYXZpZ2F0ZT17aW50cm99IC8+XHJcbiAgICAgIDxFeHBlcmllbmNlIHJlZkZvck5hdmlnYXRlPXtleHBlcmllbmNlfSAvPlxyXG4gICAgICA8U2tpbGxzIHJlZkZvck5hdmlnYXRlPXtza2lsbHN9IC8+XHJcbiAgICAgIDxGb290ZXIgcmVmRm9yTmF2aWdhdGU9e2Zvb3Rlcn0gLz5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW8iLCJzdHlsZXMiLCJNZW51IiwiV2VsY29tZSIsIlBhcmFsbGF4SW1hZ2UiLCJTa2lsbHMiLCJJbnRybyIsIkZvb3RlciIsIkV4cGVyaWVuY2UiLCJEb3dubG9hZEN2QnV0dG9uIiwiSG9tZSIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzb2NrZXQiLCJvbiIsIm1zZyIsInNldE5ld01lc3NhZ2UiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0IiwiZW1pdCIsIndlbGNvbWUiLCJwYXJhbGxheEltYWdlIiwiaW50cm8iLCJleHBlcmllbmNlIiwic2tpbGxzIiwiZm9vdGVyIiwiaGFuZGxlTWVudUNsaWNrIiwicmVmTmFtZSIsInJlZiIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9wQmFyIiwicmVmRm9yTmF2aWdhdGUiLCJzdHlsZSIsInpJbmRleCIsIm1hcCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});