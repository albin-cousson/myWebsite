exports.id = 256;
exports.ids = [256];
exports.modules = {

/***/ 7047:
/***/ ((module) => {

// Exports
module.exports = {
	"imageWrapper": "parallaxImage_imageWrapper__8RQHx"
};


/***/ }),

/***/ 2256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ParallaxImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7047);
/* harmony import */ var _styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2__);




function ParallaxImage({ refForNavigate  }) {
    const [backgroundImage, setBackgroundImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const backgroundImage = isMobile ? "/background/parallaxImageForSF.png" : "/background/parallaxImage.png";
        setBackgroundImage(backgroundImage);
        const setParallaxImageIfResizeWindow = ()=>{
            const isMobile = window.matchMedia("(max-width: 767px)").matches;
            const backgroundImage = isMobile ? "/background/parallaxImageForSF.png" : "/background/parallaxImage.png";
            setBackgroundImage(backgroundImage);
        };
        window.addEventListener("resize", setParallaxImageIfResizeWindow);
        return ()=>window.removeEventListener("resize", setParallaxImageIfResizeWindow);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: refForNavigate
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_parallaxImage_module_scss__WEBPACK_IMPORTED_MODULE_2___default().imageWrapper),
                style: {
                    backgroundImage: `url(${backgroundImage})`
                }
            })
        ]
    });
}


/***/ })

};
;