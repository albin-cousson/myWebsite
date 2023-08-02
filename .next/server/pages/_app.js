(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,481,272,182,283,179,328,695,362,949];
exports.modules = {

/***/ 2295:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Michroma_6d92eb', '__Michroma_Fallback_6d92eb'","fontWeight":400,"fontStyle":"normal"},
	"className": "__className_6d92eb"
};


/***/ }),

/***/ 1914:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"center": "Home_center__4BFgC",
	"logo": "Home_logo__27_tb",
	"thirteen": "Home_thirteen__cMI_k",
	"rotate": "Home_rotate____XsI",
	"content": "Home_content__Zy02X",
	"vercelLogo": "Home_vercelLogo__dtSk9",
	"topBar": "Home_topBar__e8y18",
	"persoCursor": "Home_persoCursor__of1C8",
	"topProgressBar": "Home_topProgressBar__e6uxR",
	"bottomProgressBar": "Home_bottomProgressBar__EwVMw"
};


/***/ }),

/***/ 7542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2295);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3862);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1914);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function App({ Component , pageProps  }) {
    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
    const [cursorIsClick, setCursorIsClick] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const cursorPos = (e)=>{
        setCursorIsClick(false);
        if (cursorRef.current != null) {
            cursorRef.current.style.top = e.pageY - 0 - window.scrollY + "px";
            cursorRef.current.style.left = e.pageX - 15 + "px";
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        onMouseEnter: cursorPos,
        onMouseMove: cursorPos,
        className: (next_font_google_target_css_path_pages_app_tsx_import_Michroma_arguments_subsets_latin_weight_400_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),
        onMouseDown: ()=>setCursorIsClick(true),
        onMouseUp: ()=>setCursorIsClick(false),
        children: [
            !cursorIsClick ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {
                ref: cursorRef,
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().persoCursor),
                src: "/cursors/cursor.png",
                alt: ""
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {
                ref: cursorRef,
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().persoCursor),
                src: "/cursors/cursorOnClick.png",
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3862:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7542));
module.exports = __webpack_exports__;

})();