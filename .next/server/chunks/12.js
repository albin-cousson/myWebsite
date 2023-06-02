"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 12:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(866);
/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
        fill: "transparent",
        strokeWidth: "3",
        stroke: "#de1162",
        strokeLinecap: "round",
        ...props
    });
const buttonShadow = {
    open: {
        boxShadow: "rgb(0, 0, 0) 0px 0px 0px",
        transition: {
            delay: 0
        }
    },
    closed: {
        boxShadow: "rgb(0, 0, 0) 0px 0px 6px",
        transition: {
            delay: 0.8
        }
    }
};
function MenuToggle({ isOpen , toggle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
        className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().toggleButton),
        variants: buttonShadow,
        animate: isOpen ? "open" : "closed",
        onClick: toggle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "23",
            height: "23",
            viewBox: "-0.5 -1.5 23 23",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        closed: {
                            d: "M 2 2.5 L 20 2.5"
                        },
                        open: {
                            d: "M 3 16.5 L 17 2.5"
                        }
                    },
                    animate: isOpen ? "open" : "closed",
                    d: "M 2 2.5 L 20 2.5",
                    transition: {
                        duration: 0.3
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    d: "M 2 9.423 L 20 9.423",
                    variants: {
                        closed: {
                            opacity: 1
                        },
                        open: {
                            opacity: 0
                        }
                    },
                    animate: isOpen ? "open" : "closed",
                    opacity: isOpen ? 0 : 1,
                    transition: {
                        duration: 0.1
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                    variants: {
                        closed: {
                            d: "M 2 16.346 L 20 16.346"
                        },
                        open: {
                            d: "M 3 2.5 L 17 16.346"
                        }
                    },
                    animate: isOpen ? "open" : "closed",
                    d: "M 2 16.346 L 20 16.346",
                    transition: {
                        duration: 0.3
                    }
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;