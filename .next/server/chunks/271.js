exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 866:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "menu_nav__vRUQg",
	"background": "menu_background__A_DKC",
	"toggleButton": "menu_toggleButton__tPYFN",
	"navigation": "menu_navigation__hpybq",
	"item": "menu_item__qsbVa",
	"iconPlaceholder": "menu_iconPlaceholder__IgCzB",
	"textPlaceholder": "menu_textPlaceholder__Tcd54",
	"refresh": "menu_refresh__slybs"
};


/***/ }),

/***/ 271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
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




const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};
function MenuItem({ handleMenuClick , label , icon  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
        className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
        onClick: ()=>handleMenuClick(label),
        variants: variants,
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.95
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().iconPlaceholder),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: icon,
                    alt: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().textPlaceholder),
                children: label
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;