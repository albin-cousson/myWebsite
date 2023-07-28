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

/***/ "./pages/components/skills.tsx":
/*!*************************************!*\
  !*** ./pages/components/skills.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/skills.module.scss */ \"./styles/skills.module.scss\");\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/.pnpm/matter-js@0.19.0/node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { refForNavigate  } = param;\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [clientWidth, setClientWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const boxIsInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(canvasRef, {\n        once: true,\n        amount: 1\n    });\n    let Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().MouseConstraint), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Mouse), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies);\n    let engine = Engine.create({\n        enableSleeping: false\n    }), world = engine.world;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setClientWidth(document.documentElement.clientWidth - 30);\n        setClientHeight(document.documentElement.clientHeight - 60);\n        const handleResize = ()=>{\n            setClientWidth(document.documentElement.clientWidth - 30);\n            setClientHeight(document.documentElement.clientHeight - 60);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let render = Render.create({\n            engine: engine,\n            element: refForNavigate.current,\n            canvas: canvasRef.current,\n            options: {\n                width: clientWidth,\n                height: clientHeight,\n                background: \"rgba(252, 255, 245,0.5)\",\n                wireframes: false\n            }\n        });\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        Runner.run(runner, engine);\n        var offset = 25.5, options = {\n            isStatic: true,\n            render: {\n                fillStyle: \"#000\"\n            }\n        };\n        world.bodies = [];\n        // these static walls will not be rendered in this sprites example, see options\n        let bodies = [\n            Bodies.rectangle(clientWidth + offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(-offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(clientWidth / 2, clientHeight + offset, clientWidth, 50.5, options)\n        ];\n        if (boxIsInView) {\n            bodies.push(Bodies.circle(clientWidth / 2 - 25, -100, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/react.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 25, -100, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/angular.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 - 25, -220, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/vue.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 25, -220, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/express.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 - 25, -340, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/nest.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 25, -300, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/docker.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 - 25, -400, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/git.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 25, -400, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/jira.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }));\n            setTimeout(()=>{\n                Composite.add(world, Bodies.rectangle(clientWidth / 2, -offset, clientWidth, 50.5, options));\n            }, 5000);\n        }\n        Composite.add(world, bodies);\n        // add mouse control\n        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: true,\n                    strokeStyle: \"#00a149\",\n                    lineWidth: 2\n                }\n            }\n        });\n        Composite.add(world, mouseConstraint);\n        // keep the mouse in sync with rendering\n        render.mouse = mouse;\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n        if (isMobile) {\n            mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n            mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n            mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            document.addEventListener(\"touchstart\", function(event) {\n                const canvas = canvasRef.current;\n                const canvasWidth = canvas.width; // largeur de votre canevas ou scène\n                const canvasHeight = canvas.height;\n                // Obtenez les coordonnées du premier point de contact tactile (touches[0])\n                const touch = event.touches[0];\n                const touchX = touch.pageX;\n                const touchY = touch.pageY;\n                // Convertissez les coordonnées en utilisant la dimension et la position de votre canevas ou scène\n                // Obtenez les décalages du canevas par rapport à la fenêtre\n                const canvasRect = canvas.getBoundingClientRect();\n                const canvasOffsetX = canvasRect.left + window.pageXOffset;\n                const canvasOffsetY = canvasRect.top + window.pageYOffset;\n                // Ajustez les coordonnées en utilisant la dimension et la position réelles du canvas\n                const convertedX = Math.ceil((touchX - canvasOffsetX) * (canvasWidth / canvasRect.width));\n                const convertedY = Math.ceil((touchY - canvasOffsetY) * (canvasHeight / canvasRect.height));\n                // Utilisez les coordonnées converties du point de contact tactile de manière similaire à l'événement de la souris\n                const clickedBodies = matter_js__WEBPACK_IMPORTED_MODULE_2___default().Query.point(bodies, {\n                    x: convertedX,\n                    y: convertedY\n                });\n                if (clickedBodies.length > 0) {\n                    mouseConstraint.mouse.element.addEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                    mouseConstraint.mouse.element.addEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                    mouseConstraint.mouse.element.addEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n                }\n            });\n            document.addEventListener(\"touchend\", function(event) {\n                mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            });\n        }\n    }, [\n        clientWidth,\n        clientHeight,\n        boxIsInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default().skillsContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: refForNavigate,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n                lineNumber: 243,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n            lineNumber: 242,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n        lineNumber: 241,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"CompzAFv25RfOSnreGDGZhG53gU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDM0J2QyxnQkFBZ0JELEtBQUssQ0FBNEJ6QixPQUFPLENBQUNILGdCQUFnQixDQUFDLGNBQWMsZ0JBQWlCNEIsS0FBSyxDQUE0QlcsU0FBUztvQkFDbkpWLGdCQUFnQkQsS0FBSyxDQUE0QnpCLE9BQU8sQ0FBQ0gsZ0JBQWdCLENBQUMsYUFBYSxnQkFBaUI0QixLQUFLLENBQTRCWSxTQUFTO29CQUNsSlgsZ0JBQWdCRCxLQUFLLENBQTRCekIsT0FBTyxDQUFDSCxnQkFBZ0IsQ0FBQyxZQUFZLGdCQUFpQjRCLEtBQUssQ0FBNEJhLE9BQU87Z0JBQ2xKLENBQUM7WUFDSDtZQUVBN0MsU0FBU0ksZ0JBQWdCLENBQUMsWUFBWSxTQUFVMEMsS0FBSyxFQUFFO2dCQUNwRGIsZ0JBQWdCRCxLQUFLLENBQTRCekIsT0FBTyxDQUFDRixtQkFBbUIsQ0FBQyxjQUFjLGdCQUFpQjJCLEtBQUssQ0FBNEJXLFNBQVM7Z0JBQ3RKVixnQkFBZ0JELEtBQUssQ0FBNEJ6QixPQUFPLENBQUNGLG1CQUFtQixDQUFDLGFBQWEsZ0JBQWlCMkIsS0FBSyxDQUE0QlksU0FBUztnQkFDckpYLGdCQUFnQkQsS0FBSyxDQUE0QnpCLE9BQU8sQ0FBQ0YsbUJBQW1CLENBQUMsWUFBWSxnQkFBaUIyQixLQUFLLENBQTRCYSxPQUFPO1lBQ3JKO1FBQ0YsQ0FBQztJQUVILEdBQUc7UUFBQy9EO1FBQWFFO1FBQWNFO0tBQVk7SUFFM0MscUJBQ0UsOERBQUN1RjtRQUFJQyxXQUFXbEcsbUZBQXNCO2tCQUNwQyw0RUFBQ2lHO1lBQUlHLEtBQUtoRztzQkFDUiw0RUFBQzZCO2dCQUFPbUUsS0FBSy9GOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXJCLENBQUM7R0FoUHVCRjs7UUFNRkYsb0RBQVNBOzs7S0FOUEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9za2lsbHMudHN4PzljZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9za2lsbHMubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcbmltcG9ydCBNYXR0ZXIgZnJvbSAnbWF0dGVyLWpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7IHJlZkZvck5hdmlnYXRlIH06IHsgcmVmRm9yTmF2aWdhdGU6IGFueSB9KSB7XHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPGFueT4oKTtcclxuXHJcbiAgY29uc3QgW2NsaWVudFdpZHRoLCBzZXRDbGllbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjbGllbnRIZWlnaHQsIHNldENsaWVudEhlaWdodF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBib3hJc0luVmlldyA9IHVzZUluVmlldyhjYW52YXNSZWYsIHsgb25jZTogdHJ1ZSwgYW1vdW50OiAxIH0pXHJcblxyXG4gIGxldCBFbmdpbmUgPSBNYXR0ZXIuRW5naW5lLFxyXG4gICAgUmVuZGVyID0gTWF0dGVyLlJlbmRlcixcclxuICAgIFJ1bm5lciA9IE1hdHRlci5SdW5uZXIsXHJcbiAgICBNb3VzZUNvbnN0cmFpbnQgPSBNYXR0ZXIuTW91c2VDb25zdHJhaW50LFxyXG4gICAgTW91c2UgPSBNYXR0ZXIuTW91c2UsXHJcbiAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlLFxyXG4gICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcztcclxuXHJcbiAgbGV0IGVuZ2luZSA9IEVuZ2luZS5jcmVhdGUoe1xyXG4gICAgZW5hYmxlU2xlZXBpbmc6IGZhbHNlXHJcbiAgfSksXHJcbiAgICB3b3JsZCA9IGVuZ2luZS53b3JsZDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENsaWVudFdpZHRoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDMwKTtcclxuICAgIHNldENsaWVudEhlaWdodChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjApO1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRDbGllbnRXaWR0aChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAzMCk7XHJcbiAgICAgIHNldENsaWVudEhlaWdodChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNjApO1xyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCByZW5kZXIgPSBSZW5kZXIuY3JlYXRlKHtcclxuICAgICAgZW5naW5lOiBlbmdpbmUsXHJcbiAgICAgIGVsZW1lbnQ6IHJlZkZvck5hdmlnYXRlLmN1cnJlbnQsXHJcbiAgICAgIGNhbnZhczogY2FudmFzUmVmLmN1cnJlbnQsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICB3aWR0aDogY2xpZW50V2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBjbGllbnRIZWlnaHQsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMjUyLCAyNTUsIDI0NSwwLjUpJyxcclxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgUmVuZGVyLnJ1bihyZW5kZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBydW5uZXJcclxuICAgIHZhciBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XHJcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcclxuXHJcbiAgICB2YXIgb2Zmc2V0ID0gMjUuNSxcclxuICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcclxuICAgICAgICByZW5kZXI6IHsgZmlsbFN0eWxlOiAnIzAwMCcgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIHdvcmxkLmJvZGllcyA9IFtdO1xyXG5cclxuICAgIC8vIHRoZXNlIHN0YXRpYyB3YWxscyB3aWxsIG5vdCBiZSByZW5kZXJlZCBpbiB0aGlzIHNwcml0ZXMgZXhhbXBsZSwgc2VlIG9wdGlvbnNcclxuICAgIGxldCBib2RpZXMgPSBbXHJcbiAgICAgIEJvZGllcy5yZWN0YW5nbGUoY2xpZW50V2lkdGggKyBvZmZzZXQsIGNsaWVudEhlaWdodCAvIDIsIDUwLjUsIGNsaWVudEhlaWdodCwgb3B0aW9ucyksXHJcbiAgICAgIEJvZGllcy5yZWN0YW5nbGUoLW9mZnNldCwgY2xpZW50SGVpZ2h0IC8gMiwgNTAuNSwgY2xpZW50SGVpZ2h0LCBvcHRpb25zKSxcclxuICAgICAgQm9kaWVzLnJlY3RhbmdsZShjbGllbnRXaWR0aCAvIDIsIGNsaWVudEhlaWdodCArIG9mZnNldCwgY2xpZW50V2lkdGgsIDUwLjUsIG9wdGlvbnMpLFxyXG4gICAgXVxyXG5cclxuICAgIGlmIChib3hJc0luVmlldykge1xyXG4gICAgICBib2RpZXMucHVzaChcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiAtIDI1LCAtMTAwLCA3NSwge1xyXG4gICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDIsXHJcbiAgICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICAgIHRleHR1cmU6IFwiL3NraWxscy9yZWFjdC5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDI1LCAtMTAwLCA3NSwge1xyXG4gICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDIsXHJcbiAgICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICAgIHRleHR1cmU6IFwiL3NraWxscy9hbmd1bGFyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHhTY2FsZTogMSxcclxuICAgICAgICAgICAgICB5U2NhbGU6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEJvZGllcy5jaXJjbGUoY2xpZW50V2lkdGggLyAyIC0gMjUsIC0yMjAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL3Z1ZS5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDI1LCAtMjIwLCA3NSwge1xyXG4gICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDIsXHJcbiAgICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICAgIHRleHR1cmU6IFwiL3NraWxscy9leHByZXNzLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHhTY2FsZTogMSxcclxuICAgICAgICAgICAgICB5U2NhbGU6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEJvZGllcy5jaXJjbGUoY2xpZW50V2lkdGggLyAyIC0gMjUsIC0zNDAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL25lc3QucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQm9kaWVzLmNpcmNsZShjbGllbnRXaWR0aCAvIDIgKyAyNSwgLTMwMCwgNzUsIHtcclxuICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAyLFxyXG4gICAgICAgICAgcmVzdGl0dXRpb246IDAuNixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgICAgICB0ZXh0dXJlOiBcIi9za2lsbHMvZG9ja2VyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHhTY2FsZTogMSxcclxuICAgICAgICAgICAgICB5U2NhbGU6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEJvZGllcy5jaXJjbGUoY2xpZW50V2lkdGggLyAyIC0gMjUsIC00MDAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2dpdC5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDI1LCAtNDAwLCA3NSwge1xyXG4gICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDIsXHJcbiAgICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICAgIHRleHR1cmU6IFwiL3NraWxscy9qaXJhLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHhTY2FsZTogMSxcclxuICAgICAgICAgICAgICB5U2NhbGU6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIENvbXBvc2l0ZS5hZGQod29ybGQsIEJvZGllcy5yZWN0YW5nbGUoY2xpZW50V2lkdGggLyAyLCAtb2Zmc2V0LCBjbGllbnRXaWR0aCwgNTAuNSwgb3B0aW9ucykpXHJcbiAgICAgIH0sIDUwMDApXHJcbiAgICB9XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZCh3b3JsZCwgYm9kaWVzKVxyXG5cclxuICAgIC8vIGFkZCBtb3VzZSBjb250cm9sXHJcbiAgICB2YXIgbW91c2UgPSBNb3VzZS5jcmVhdGUocmVuZGVyLmNhbnZhcyksXHJcbiAgICAgIG1vdXNlQ29uc3RyYWludCA9IE1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLCB7XHJcbiAgICAgICAgbW91c2U6IG1vdXNlLFxyXG4gICAgICAgIGNvbnN0cmFpbnQ6IHtcclxuICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlOiAnIzAwYTE0OScsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgQ29tcG9zaXRlLmFkZCh3b3JsZCwgbW91c2VDb25zdHJhaW50KTtcclxuXHJcbiAgICAvLyBrZWVwIHRoZSBtb3VzZSBpbiBzeW5jIHdpdGggcmVuZGVyaW5nXHJcbiAgICByZW5kZXIubW91c2UgPSBtb3VzZTtcclxuXHJcbiAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZXdoZWVsKTtcclxuICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZXdoZWVsKTtcclxuXHJcbiAgICBjb25zdCBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKS5tYXRjaGVzO1xyXG5cclxuICAgIGlmIChpc01vYmlsZSkge1xyXG4gICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZWRvd24pO1xyXG4gICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlbW92ZSk7O1xyXG4gICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2V1cCk7XHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7IC8vIGxhcmdldXIgZGUgdm90cmUgY2FuZXZhcyBvdSBzY8OobmVcclxuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBPYnRlbmV6IGxlcyBjb29yZG9ubsOpZXMgZHUgcHJlbWllciBwb2ludCBkZSBjb250YWN0IHRhY3RpbGUgKHRvdWNoZXNbMF0pXHJcbiAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoWCA9IHRvdWNoLnBhZ2VYO1xyXG4gICAgICAgIGNvbnN0IHRvdWNoWSA9IHRvdWNoLnBhZ2VZO1xyXG5cclxuICAgICAgICAvLyBDb252ZXJ0aXNzZXogbGVzIGNvb3Jkb25uw6llcyBlbiB1dGlsaXNhbnQgbGEgZGltZW5zaW9uIGV0IGxhIHBvc2l0aW9uIGRlIHZvdHJlIGNhbmV2YXMgb3Ugc2PDqG5lXHJcbiAgICAgICAgLy8gT2J0ZW5leiBsZXMgZMOpY2FsYWdlcyBkdSBjYW5ldmFzIHBhciByYXBwb3J0IMOgIGxhIGZlbsOqdHJlXHJcbiAgICAgICAgY29uc3QgY2FudmFzUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBjYW52YXNPZmZzZXRYID0gY2FudmFzUmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc09mZnNldFkgPSBjYW52YXNSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gQWp1c3RleiBsZXMgY29vcmRvbm7DqWVzIGVuIHV0aWxpc2FudCBsYSBkaW1lbnNpb24gZXQgbGEgcG9zaXRpb24gcsOpZWxsZXMgZHUgY2FudmFzXHJcbiAgICAgICAgY29uc3QgY29udmVydGVkWCA9IE1hdGguY2VpbCgodG91Y2hYIC0gY2FudmFzT2Zmc2V0WCkgKiAoY2FudmFzV2lkdGggLyBjYW52YXNSZWN0LndpZHRoKSlcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRZID0gTWF0aC5jZWlsKCh0b3VjaFkgLSBjYW52YXNPZmZzZXRZKSAqIChjYW52YXNIZWlnaHQgLyBjYW52YXNSZWN0LmhlaWdodCkpXHJcblxyXG4gICAgICAgIC8vIFV0aWxpc2V6IGxlcyBjb29yZG9ubsOpZXMgY29udmVydGllcyBkdSBwb2ludCBkZSBjb250YWN0IHRhY3RpbGUgZGUgbWFuacOocmUgc2ltaWxhaXJlIMOgIGwnw6l2w6luZW1lbnQgZGUgbGEgc291cmlzXHJcbiAgICAgICAgY29uc3QgY2xpY2tlZEJvZGllcyA9IE1hdHRlci5RdWVyeS5wb2ludChib2RpZXMsIHsgeDogY29udmVydGVkWCwgeTogY29udmVydGVkWSB9KTtcclxuXHJcbiAgICAgICAgaWYgKGNsaWNrZWRCb2RpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vkb3duKTtcclxuICAgICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vtb3ZlKTs7XHJcbiAgICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2V1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlZG93bik7XHJcbiAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZW1vdmUpOztcclxuICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2V1cCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH0sIFtjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0LCBib3hJc0luVmlld10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc0NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgcmVmPXtyZWZGb3JOYXZpZ2F0ZX0+XHJcbiAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlSW5WaWV3IiwiTWF0dGVyIiwiU2tpbGxzIiwicmVmRm9yTmF2aWdhdGUiLCJjYW52YXNSZWYiLCJjbGllbnRXaWR0aCIsInNldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2V0Q2xpZW50SGVpZ2h0IiwiYm94SXNJblZpZXciLCJvbmNlIiwiYW1vdW50IiwiRW5naW5lIiwiUmVuZGVyIiwiUnVubmVyIiwiTW91c2VDb25zdHJhaW50IiwiTW91c2UiLCJDb21wb3NpdGUiLCJCb2RpZXMiLCJlbmdpbmUiLCJjcmVhdGUiLCJlbmFibGVTbGVlcGluZyIsIndvcmxkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImVsZW1lbnQiLCJjdXJyZW50IiwiY2FudmFzIiwib3B0aW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJydW4iLCJydW5uZXIiLCJvZmZzZXQiLCJpc1N0YXRpYyIsImZpbGxTdHlsZSIsImJvZGllcyIsInJlY3RhbmdsZSIsInB1c2giLCJjaXJjbGUiLCJmcmljdGlvbkFpciIsInJlc3RpdHV0aW9uIiwic3ByaXRlIiwidGV4dHVyZSIsInhTY2FsZSIsInlTY2FsZSIsInNldFRpbWVvdXQiLCJhZGQiLCJtb3VzZSIsIm1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJtb3VzZXdoZWVsIiwiaXNNb2JpbGUiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm1vdXNlZG93biIsIm1vdXNlbW92ZSIsIm1vdXNldXAiLCJldmVudCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwidG91Y2giLCJ0b3VjaGVzIiwidG91Y2hYIiwicGFnZVgiLCJ0b3VjaFkiLCJwYWdlWSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYW52YXNPZmZzZXRYIiwibGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2FudmFzT2Zmc2V0WSIsInRvcCIsInBhZ2VZT2Zmc2V0IiwiY29udmVydGVkWCIsIk1hdGgiLCJjZWlsIiwiY29udmVydGVkWSIsImNsaWNrZWRCb2RpZXMiLCJRdWVyeSIsInBvaW50IiwieCIsInkiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJza2lsbHNDb250YWluZXIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/skills.tsx\n"));

/***/ })

});