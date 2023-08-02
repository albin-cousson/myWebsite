exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 6248:
/***/ ((module) => {

// Exports
module.exports = {
	"welcomeContainer": "welcome_welcomeContainer__utCh8",
	"welcomeMotionWrapper": "welcome_welcomeMotionWrapper__v9YiA",
	"welcomeMotionImage": "welcome_welcomeMotionImage__SYx7J",
	"welcomeMotionText": "welcome_welcomeMotionText__9IcYJ"
};


/***/ }),

/***/ 8582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Welcome)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6248);
/* harmony import */ var _styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Welcome({ refForNavigate  }) {
    const [endAnimation, setEndAnimationt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useScroll)();
    const welcomeImgWithBlurOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, [
        0,
        endAnimation
    ], [
        1,
        0
    ]);
    const welcomeImgWithoutBlurOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, [
        0,
        endAnimation
    ], [
        0,
        1
    ]);
    const welcomeTextScale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, [
        0,
        endAnimation
    ], [
        1,
        10
    ]);
    const welcomeTextOpacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(scrollYProgress, [
        0,
        endAnimation / 2,
        endAnimation
    ], [
        1,
        1,
        0
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const totalPageHeight = document.documentElement.scrollHeight / document.documentElement.clientHeight * 100;
        const remainingPageHeight = +totalPageHeight - 100;
        const percentageOfTotalPage = 100 / remainingPageHeight;
        setEndAnimationt(percentageOfTotalPage);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: refForNavigate,
            className: (_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcomeContainer),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcomeMotionWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {
                        className: (_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcomeMotionImage),
                        src: "/background/welcomeBackground.png",
                        alt: "",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1
                        },
                        style: {
                            zIndex: 1,
                            opacity: welcomeImgWithoutBlurOpacity
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {
                        className: (_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcomeMotionImage),
                        src: "/background/welcomeBlurBackground.png",
                        alt: "",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        style: {
                            zIndex: 2,
                            opacity: welcomeImgWithBlurOpacity
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                        className: (_styles_welcome_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcomeMotionText),
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        style: {
                            scale: welcomeTextScale,
                            opacity: welcomeTextOpacity
                        },
                        children: [
                            "Bienvenue",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.br, {}),
                            " sur le",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.br, {}),
                            " Curriculum vit\xe6",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.br, {}),
                            " d'Albin"
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;