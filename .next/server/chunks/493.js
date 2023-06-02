"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(271);
/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(866);
/* harmony import */ var _styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _menuItem__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _menuItem__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
function Navigation({ handleMenuClick  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul, {
        className: (_styles_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navigation),
        variants: variants,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/heart.png",
                label: "Bienvenue"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/avatar.png",
                label: "Une image de moi"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/glasses.png",
                label: "Intro"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/share.png",
                label: "Mon parcours"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/monitor.png",
                label: "Mes comp\xe9tences"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handleMenuClick: handleMenuClick,
                icon: "/images/menuIcons/contact.png",
                label: "Contactez-moi"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;