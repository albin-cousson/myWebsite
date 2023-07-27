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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/skills.module.scss */ \"./styles/skills.module.scss\");\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/.pnpm/matter-js@0.19.0/node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { refForNavigate  } = param;\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [clientWidth, setClientWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const boxIsInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(canvasRef, {\n        once: true,\n        amount: 1\n    });\n    let Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().MouseConstraint), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Mouse), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies);\n    let engine = Engine.create({\n        enableSleeping: true\n    }), world = engine.world;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setClientWidth(document.documentElement.clientWidth - 30);\n        setClientHeight(document.documentElement.clientHeight - 60);\n        const handleResize = ()=>{\n            setClientWidth(document.documentElement.clientWidth - 30);\n            setClientHeight(document.documentElement.clientHeight - 60);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let render = Render.create({\n            engine: engine,\n            element: refForNavigate.current,\n            canvas: canvasRef.current,\n            options: {\n                width: clientWidth,\n                height: clientHeight,\n                background: \"rgba(0,0,0,0.5)\",\n                wireframes: false\n            }\n        });\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        Runner.run(runner, engine);\n        var offset = 25.5, options = {\n            isStatic: true,\n            render: {\n                fillStyle: \"#000\"\n            }\n        };\n        world.bodies = [];\n        // these static walls will not be rendered in this sprites example, see options\n        let bodies = [\n            Bodies.rectangle(clientWidth + offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(-offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(clientWidth / 2, -offset, clientWidth, 50.5, options),\n            Bodies.rectangle(clientWidth / 2, clientHeight + offset, clientWidth, 50.5, options)\n        ];\n        if (boxIsInView) {\n            bodies.push(Bodies.circle(clientWidth / 2 - 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/react.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/angular.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 75, 150, 58, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/vue.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }));\n        }\n        Composite.add(world, bodies);\n        // add mouse control\n        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: true,\n                    strokeStyle: \"#de1162\",\n                    lineWidth: 2\n                }\n            }\n        });\n        Composite.add(world, mouseConstraint);\n        // keep the mouse in sync with rendering\n        render.mouse = mouse;\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n        if (isMobile) {\n            mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n            mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n            mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            document.addEventListener(\"touchstart\", function(event) {\n                const canvas = canvasRef.current;\n                const canvasWidth = canvas.width; // largeur de votre canevas ou scène\n                const canvasHeight = canvas.height;\n                // Obtenez les coordonnées du premier point de contact tactile (touches[0])\n                const touch = event.touches[0];\n                const touchX = touch.pageX;\n                const touchY = touch.pageY;\n                // Convertissez les coordonnées en utilisant la dimension et la position de votre canevas ou scène\n                // Obtenez les décalages du canevas par rapport à la fenêtre\n                const canvasRect = canvas.getBoundingClientRect();\n                const canvasOffsetX = canvasRect.left + window.pageXOffset;\n                const canvasOffsetY = canvasRect.top + window.pageYOffset;\n                // Ajustez les coordonnées en utilisant la dimension et la position réelles du canvas\n                const convertedX = Math.ceil((touchX - canvasOffsetX) * (canvasWidth / canvasRect.width));\n                const convertedY = Math.ceil((touchY - canvasOffsetY) * (canvasHeight / canvasRect.height));\n                // Utilisez les coordonnées converties du point de contact tactile de manière similaire à l'événement de la souris\n                const clickedBodies = matter_js__WEBPACK_IMPORTED_MODULE_2___default().Query.point(bodies, {\n                    x: convertedX,\n                    y: convertedY\n                });\n                if (clickedBodies.length > 0) {\n                    mouseConstraint.mouse.element.addEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                    mouseConstraint.mouse.element.addEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                    mouseConstraint.mouse.element.addEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n                }\n            });\n            document.addEventListener(\"touchend\", function(event) {\n                mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            });\n        }\n    }, [\n        clientWidth,\n        clientHeight,\n        boxIsInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default().skillsContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: refForNavigate,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n                lineNumber: 186,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n            lineNumber: 185,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n        lineNumber: 184,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"CompzAFv25RfOSnreGDGZhG53gU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBY0ssTUFBTSxHQUFHLEdBQUc7b0JBQzNCdkMsZ0JBQWdCRCxLQUFLLENBQTRCeEIsT0FBTyxDQUFDSCxnQkFBZ0IsQ0FBQyxjQUFjLGdCQUFpQjJCLEtBQUssQ0FBNEJXLFNBQVM7b0JBQ25KVixnQkFBZ0JELEtBQUssQ0FBNEJ4QixPQUFPLENBQUNILGdCQUFnQixDQUFDLGFBQWEsZ0JBQWlCMkIsS0FBSyxDQUE0QlksU0FBUztvQkFDbEpYLGdCQUFnQkQsS0FBSyxDQUE0QnhCLE9BQU8sQ0FBQ0gsZ0JBQWdCLENBQUMsWUFBWSxnQkFBaUIyQixLQUFLLENBQTRCYSxPQUFPO2dCQUNsSixDQUFDO1lBQ0g7WUFFQTVDLFNBQVNJLGdCQUFnQixDQUFDLFlBQVksU0FBVXlDLEtBQUssRUFBRTtnQkFDcERiLGdCQUFnQkQsS0FBSyxDQUE0QnhCLE9BQU8sQ0FBQ0YsbUJBQW1CLENBQUMsY0FBYyxnQkFBaUIwQixLQUFLLENBQTRCVyxTQUFTO2dCQUN0SlYsZ0JBQWdCRCxLQUFLLENBQTRCeEIsT0FBTyxDQUFDRixtQkFBbUIsQ0FBQyxhQUFhLGdCQUFpQjBCLEtBQUssQ0FBNEJZLFNBQVM7Z0JBQ3JKWCxnQkFBZ0JELEtBQUssQ0FBNEJ4QixPQUFPLENBQUNGLG1CQUFtQixDQUFDLFlBQVksZ0JBQWlCMEIsS0FBSyxDQUE0QmEsT0FBTztZQUNySjtRQUNGLENBQUM7SUFFSCxHQUFHO1FBQUM5RDtRQUFhRTtRQUFjRTtLQUFZO0lBRTNDLHFCQUNFLDhEQUFDc0Y7UUFBSUMsV0FBV2pHLG1GQUFzQjtrQkFDcEMsNEVBQUNnRztZQUFJRyxLQUFLL0Y7c0JBQ1IsNEVBQUM2QjtnQkFBT2tFLEtBQUs5Rjs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO0dBdkx1QkY7O1FBTUZGLG9EQUFTQTs7O0tBTlBFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvc2tpbGxzLnRzeD85Y2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvc2tpbGxzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgTWF0dGVyIGZyb20gJ21hdHRlci1qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoeyByZWZGb3JOYXZpZ2F0ZSB9OiB7IHJlZkZvck5hdmlnYXRlOiBhbnkgfSkge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0IFtjbGllbnRXaWR0aCwgc2V0Q2xpZW50V2lkdGhdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY2xpZW50SGVpZ2h0LCBzZXRDbGllbnRIZWlnaHRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgYm94SXNJblZpZXcgPSB1c2VJblZpZXcoY2FudmFzUmVmLCB7IG9uY2U6IHRydWUsIGFtb3VudDogMSB9KVxyXG5cclxuICBsZXQgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcclxuICAgIFJlbmRlciA9IE1hdHRlci5SZW5kZXIsXHJcbiAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgTW91c2VDb25zdHJhaW50ID0gTWF0dGVyLk1vdXNlQ29uc3RyYWludCxcclxuICAgIE1vdXNlID0gTWF0dGVyLk1vdXNlLFxyXG4gICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZSxcclxuICAgIEJvZGllcyA9IE1hdHRlci5Cb2RpZXM7XHJcblxyXG4gIGxldCBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKHtcclxuICAgIGVuYWJsZVNsZWVwaW5nOiB0cnVlXHJcbiAgfSksXHJcbiAgICB3b3JsZCA9IGVuZ2luZS53b3JsZDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgICAgICAgIFxyXG4gICAgc2V0Q2xpZW50V2lkdGgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMzApO1xyXG4gICAgc2V0Q2xpZW50SGVpZ2h0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSA2MCk7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldENsaWVudFdpZHRoKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIDMwKTtcclxuICAgICAgc2V0Q2xpZW50SGVpZ2h0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLSA2MCk7XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFJlbmRlci5jcmVhdGUoe1xyXG4gICAgICBlbmdpbmU6IGVuZ2luZSxcclxuICAgICAgZWxlbWVudDogcmVmRm9yTmF2aWdhdGUuY3VycmVudCxcclxuICAgICAgY2FudmFzOiBjYW52YXNSZWYuY3VycmVudCxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIHdpZHRoOiBjbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGNsaWVudEhlaWdodCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgUmVuZGVyLnJ1bihyZW5kZXIpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBydW5uZXJcclxuICAgIHZhciBydW5uZXIgPSBSdW5uZXIuY3JlYXRlKCk7XHJcbiAgICBSdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcclxuXHJcbiAgICB2YXIgb2Zmc2V0ID0gMjUuNSxcclxuICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcclxuICAgICAgICByZW5kZXI6IHsgZmlsbFN0eWxlOiAnIzAwMCcgfVxyXG4gICAgICB9O1xyXG5cclxuICAgIHdvcmxkLmJvZGllcyA9IFtdO1xyXG5cclxuICAgIC8vIHRoZXNlIHN0YXRpYyB3YWxscyB3aWxsIG5vdCBiZSByZW5kZXJlZCBpbiB0aGlzIHNwcml0ZXMgZXhhbXBsZSwgc2VlIG9wdGlvbnNcclxuICAgIGxldCBib2RpZXMgPSBbXHJcbiAgICAgIEJvZGllcy5yZWN0YW5nbGUoY2xpZW50V2lkdGggKyBvZmZzZXQsIGNsaWVudEhlaWdodCAvIDIsIDUwLjUsIGNsaWVudEhlaWdodCwgb3B0aW9ucyksXHJcbiAgICAgIEJvZGllcy5yZWN0YW5nbGUoLW9mZnNldCwgY2xpZW50SGVpZ2h0IC8gMiwgNTAuNSwgY2xpZW50SGVpZ2h0LCBvcHRpb25zKSxcclxuICAgICAgQm9kaWVzLnJlY3RhbmdsZShjbGllbnRXaWR0aCAvIDIsIC1vZmZzZXQsIGNsaWVudFdpZHRoLCA1MC41LCBvcHRpb25zKSxcclxuICAgICAgQm9kaWVzLnJlY3RhbmdsZShjbGllbnRXaWR0aCAvIDIsIGNsaWVudEhlaWdodCArIG9mZnNldCwgY2xpZW50V2lkdGgsIDUwLjUsIG9wdGlvbnMpLFxyXG4gICAgXVxyXG5cclxuICAgIGlmIChib3hJc0luVmlldykge1xyXG4gICAgICBib2RpZXMucHVzaChcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiAtIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL3JlYWN0LnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHhTY2FsZTogMSxcclxuICAgICAgICAgICAgICB5U2NhbGU6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEJvZGllcy5jaXJjbGUoY2xpZW50V2lkdGggLyAyLCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2FuZ3VsYXIucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQm9kaWVzLmNpcmNsZShjbGllbnRXaWR0aCAvIDIgKyA3NSwgMTUwLCA1OCwge1xyXG4gICAgICAgICAgZnJpY3Rpb25BaXI6IDAuMDIsXHJcbiAgICAgICAgICByZXN0aXR1dGlvbjogMC42LFxyXG4gICAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIHNwcml0ZToge1xyXG4gICAgICAgICAgICAgIHRleHR1cmU6IFwiL3NraWxscy92dWUucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKHdvcmxkLCBib2RpZXMpXHJcblxyXG4gICAgLy8gYWRkIG1vdXNlIGNvbnRyb2xcclxuICAgIHZhciBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKSxcclxuICAgICAgbW91c2VDb25zdHJhaW50ID0gTW91c2VDb25zdHJhaW50LmNyZWF0ZShlbmdpbmUsIHtcclxuICAgICAgICBtb3VzZTogbW91c2UsXHJcbiAgICAgICAgY29uc3RyYWludDoge1xyXG4gICAgICAgICAgc3RpZmZuZXNzOiAwLjIsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3Ryb2tlU3R5bGU6ICcjZGUxMTYyJyxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBDb21wb3NpdGUuYWRkKHdvcmxkLCBtb3VzZUNvbnN0cmFpbnQpO1xyXG5cclxuICAgIC8vIGtlZXAgdGhlIG1vdXNlIGluIHN5bmMgd2l0aCByZW5kZXJpbmdcclxuICAgIHJlbmRlci5tb3VzZSA9IG1vdXNlO1xyXG5cclxuICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNld2hlZWwpO1xyXG4gICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNld2hlZWwpO1xyXG5cclxuICAgIGNvbnN0IGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpLm1hdGNoZXM7XHJcblxyXG4gICAgaWYgKGlzTW9iaWxlKSB7XHJcbiAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlZG93bik7XHJcbiAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vtb3ZlKTs7XHJcbiAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZXVwKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDsgLy8gbGFyZ2V1ciBkZSB2b3RyZSBjYW5ldmFzIG91IHNjw6huZVxyXG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIE9idGVuZXogbGVzIGNvb3Jkb25uw6llcyBkdSBwcmVtaWVyIHBvaW50IGRlIGNvbnRhY3QgdGFjdGlsZSAodG91Y2hlc1swXSlcclxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgY29uc3QgdG91Y2hYID0gdG91Y2gucGFnZVg7XHJcbiAgICAgICAgY29uc3QgdG91Y2hZID0gdG91Y2gucGFnZVk7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnRpc3NleiBsZXMgY29vcmRvbm7DqWVzIGVuIHV0aWxpc2FudCBsYSBkaW1lbnNpb24gZXQgbGEgcG9zaXRpb24gZGUgdm90cmUgY2FuZXZhcyBvdSBzY8OobmVcclxuICAgICAgICAvLyBPYnRlbmV6IGxlcyBkw6ljYWxhZ2VzIGR1IGNhbmV2YXMgcGFyIHJhcHBvcnQgw6AgbGEgZmVuw6p0cmVcclxuICAgICAgICBjb25zdCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc09mZnNldFggPSBjYW52YXNSZWN0LmxlZnQgKyB3aW5kb3cucGFnZVhPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgY2FudmFzT2Zmc2V0WSA9IGNhbnZhc1JlY3QudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBBanVzdGV6IGxlcyBjb29yZG9ubsOpZXMgZW4gdXRpbGlzYW50IGxhIGRpbWVuc2lvbiBldCBsYSBwb3NpdGlvbiByw6llbGxlcyBkdSBjYW52YXNcclxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRYID0gTWF0aC5jZWlsKCh0b3VjaFggLSBjYW52YXNPZmZzZXRYKSAqIChjYW52YXNXaWR0aCAvIGNhbnZhc1JlY3Qud2lkdGgpKVxyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFkgPSBNYXRoLmNlaWwoKHRvdWNoWSAtIGNhbnZhc09mZnNldFkpICogKGNhbnZhc0hlaWdodCAvIGNhbnZhc1JlY3QuaGVpZ2h0KSlcclxuXHJcbiAgICAgICAgLy8gVXRpbGlzZXogbGVzIGNvb3Jkb25uw6llcyBjb252ZXJ0aWVzIGR1IHBvaW50IGRlIGNvbnRhY3QgdGFjdGlsZSBkZSBtYW5pw6hyZSBzaW1pbGFpcmUgw6AgbCfDqXbDqW5lbWVudCBkZSBsYSBzb3VyaXNcclxuICAgICAgICBjb25zdCBjbGlja2VkQm9kaWVzID0gTWF0dGVyLlF1ZXJ5LnBvaW50KGJvZGllcywgeyB4OiBjb252ZXJ0ZWRYLCB5OiBjb252ZXJ0ZWRZIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2xpY2tlZEJvZGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZWRvd24pO1xyXG4gICAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZW1vdmUpOztcclxuICAgICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZXVwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vkb3duKTtcclxuICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlbW92ZSk7O1xyXG4gICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZXVwKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfSwgW2NsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQsIGJveElzSW5WaWV3XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpbGxzQ29udGFpbmVyfT5cclxuICAgICAgPGRpdiByZWY9e3JlZkZvck5hdmlnYXRlfT5cclxuICAgICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VJblZpZXciLCJNYXR0ZXIiLCJTa2lsbHMiLCJyZWZGb3JOYXZpZ2F0ZSIsImNhbnZhc1JlZiIsImNsaWVudFdpZHRoIiwic2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzZXRDbGllbnRIZWlnaHQiLCJib3hJc0luVmlldyIsIm9uY2UiLCJhbW91bnQiLCJFbmdpbmUiLCJSZW5kZXIiLCJSdW5uZXIiLCJNb3VzZUNvbnN0cmFpbnQiLCJNb3VzZSIsIkNvbXBvc2l0ZSIsIkJvZGllcyIsImVuZ2luZSIsImNyZWF0ZSIsImVuYWJsZVNsZWVwaW5nIiwid29ybGQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZWxlbWVudCIsImN1cnJlbnQiLCJjYW52YXMiLCJvcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInJ1biIsInJ1bm5lciIsIm9mZnNldCIsImlzU3RhdGljIiwiZmlsbFN0eWxlIiwiYm9kaWVzIiwicmVjdGFuZ2xlIiwicHVzaCIsImNpcmNsZSIsImZyaWN0aW9uQWlyIiwicmVzdGl0dXRpb24iLCJzcHJpdGUiLCJ0ZXh0dXJlIiwieFNjYWxlIiwieVNjYWxlIiwiYWRkIiwibW91c2UiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW91c2V3aGVlbCIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJtb3VzZWRvd24iLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwiZXZlbnQiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsInRvdWNoIiwidG91Y2hlcyIsInRvdWNoWCIsInBhZ2VYIiwidG91Y2hZIiwicGFnZVkiLCJjYW52YXNSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2FudmFzT2Zmc2V0WCIsImxlZnQiLCJwYWdlWE9mZnNldCIsImNhbnZhc09mZnNldFkiLCJ0b3AiLCJwYWdlWU9mZnNldCIsImNvbnZlcnRlZFgiLCJNYXRoIiwiY2VpbCIsImNvbnZlcnRlZFkiLCJjbGlja2VkQm9kaWVzIiwiUXVlcnkiLCJwb2ludCIsIngiLCJ5IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwic2tpbGxzQ29udGFpbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/skills.tsx\n"));

/***/ })

});