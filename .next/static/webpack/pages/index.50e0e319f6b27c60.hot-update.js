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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/skills.module.scss */ \"./styles/skills.module.scss\");\n/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/.pnpm/framer-motion@10.2.3_react-dom@18.2.0_react@18.2.0/node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! matter-js */ \"./node_modules/.pnpm/matter-js@0.19.0/node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { refForNavigate  } = param;\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [clientWidth, setClientWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const boxIsInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(canvasRef, {\n        once: true,\n        amount: 1\n    });\n    let Engine = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Runner), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().MouseConstraint), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Mouse), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Composite), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_2___default().Bodies);\n    let engine = Engine.create({\n        enableSleeping: false\n    }), world = engine.world;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setClientWidth(document.documentElement.clientWidth - 30);\n        setClientHeight(document.documentElement.clientHeight - 60);\n        const handleResize = ()=>{\n            setClientWidth(document.documentElement.clientWidth - 30);\n            setClientHeight(document.documentElement.clientHeight - 60);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let render = Render.create({\n            engine: engine,\n            element: refForNavigate.current,\n            canvas: canvasRef.current,\n            options: {\n                width: clientWidth,\n                height: clientHeight,\n                background: \"rgba(252, 255, 245,0.5)\",\n                wireframes: false\n            }\n        });\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        Runner.run(runner, engine);\n        Events.on(world, \"afterAdd\", function(event) {\n        // do something with event.object\n        });\n        var offset = 25.5, options = {\n            isStatic: true,\n            render: {\n                fillStyle: \"#000\"\n            }\n        };\n        world.bodies = [];\n        // these static walls will not be rendered in this sprites example, see options\n        let bodies = [\n            Bodies.rectangle(clientWidth + offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(-offset, clientHeight / 2, 50.5, clientHeight, options),\n            Bodies.rectangle(clientWidth / 2, -offset, clientWidth, 50.5, options),\n            Bodies.rectangle(clientWidth / 2, clientHeight + offset, clientWidth, 50.5, options)\n        ];\n        if (boxIsInView) {\n            bodies.push(Bodies.circle(clientWidth / 2 - 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/react.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/angular.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/vue.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 - 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/express.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/nest.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/docker.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/git.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }), Bodies.circle(clientWidth / 2 + 75, 150, 75, {\n                frictionAir: 0.02,\n                restitution: 0.6,\n                render: {\n                    sprite: {\n                        texture: \"/skills/jira.png\",\n                        xScale: 1,\n                        yScale: 1\n                    }\n                }\n            }));\n        }\n        Composite.add(world, bodies);\n        // add mouse control\n        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: true,\n                    strokeStyle: \"#00a149\",\n                    lineWidth: 2\n                }\n            }\n        });\n        Composite.add(world, mouseConstraint);\n        // keep the mouse in sync with rendering\n        render.mouse = mouse;\n        mouseConstraint.mouse.element.removeEventListener(\"mousewheel\", mouseConstraint.mouse.mousewheel);\n        mouseConstraint.mouse.element.removeEventListener(\"DOMMouseScroll\", mouseConstraint.mouse.mousewheel);\n        const isMobile = window.matchMedia(\"(max-width: 767px)\").matches;\n        if (isMobile) {\n            mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n            mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n            mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            document.addEventListener(\"touchstart\", function(event) {\n                const canvas = canvasRef.current;\n                const canvasWidth = canvas.width; // largeur de votre canevas ou scène\n                const canvasHeight = canvas.height;\n                // Obtenez les coordonnées du premier point de contact tactile (touches[0])\n                const touch = event.touches[0];\n                const touchX = touch.pageX;\n                const touchY = touch.pageY;\n                // Convertissez les coordonnées en utilisant la dimension et la position de votre canevas ou scène\n                // Obtenez les décalages du canevas par rapport à la fenêtre\n                const canvasRect = canvas.getBoundingClientRect();\n                const canvasOffsetX = canvasRect.left + window.pageXOffset;\n                const canvasOffsetY = canvasRect.top + window.pageYOffset;\n                // Ajustez les coordonnées en utilisant la dimension et la position réelles du canvas\n                const convertedX = Math.ceil((touchX - canvasOffsetX) * (canvasWidth / canvasRect.width));\n                const convertedY = Math.ceil((touchY - canvasOffsetY) * (canvasHeight / canvasRect.height));\n                // Utilisez les coordonnées converties du point de contact tactile de manière similaire à l'événement de la souris\n                const clickedBodies = matter_js__WEBPACK_IMPORTED_MODULE_2___default().Query.point(bodies, {\n                    x: convertedX,\n                    y: convertedY\n                });\n                if (clickedBodies.length > 0) {\n                    mouseConstraint.mouse.element.addEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                    mouseConstraint.mouse.element.addEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                    mouseConstraint.mouse.element.addEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n                }\n            });\n            document.addEventListener(\"touchend\", function(event) {\n                mouseConstraint.mouse.element.removeEventListener(\"touchstart\", mouseConstraint.mouse.mousedown);\n                mouseConstraint.mouse.element.removeEventListener(\"touchmove\", mouseConstraint.mouse.mousemove);\n                mouseConstraint.mouse.element.removeEventListener(\"touchend\", mouseConstraint.mouse.mouseup);\n            });\n        }\n    }, [\n        clientWidth,\n        clientHeight,\n        boxIsInView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default().skillsContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: refForNavigate,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n                lineNumber: 245,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n            lineNumber: 244,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\acousson\\\\Desktop\\\\workflow\\\\project\\\\myWebsite\\\\pages\\\\components\\\\skills.tsx\",\n        lineNumber: 243,\n        columnNumber: 5\n    }, this);\n}\n_s(Skills, \"CompzAFv25RfOSnreGDGZhG53gU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Skills;\nvar _c;\n$RefreshReg$(_c, \"Skills\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDSCxnQkFBZ0IsQ0FBQyxjQUFjLGdCQUFpQjhCLEtBQUssQ0FBNEJXLFNBQVM7b0JBQ25KVixnQkFBZ0JELEtBQUssQ0FBNEIzQixPQUFPLENBQUNILGdCQUFnQixDQUFDLGFBQWEsZ0JBQWlCOEIsS0FBSyxDQUE0QlksU0FBUztvQkFDbEpYLGdCQUFnQkQsS0FBSyxDQUE0QjNCLE9BQU8sQ0FBQ0gsZ0JBQWdCLENBQUMsWUFBWSxnQkFBaUI4QixLQUFLLENBQTRCYSxPQUFPO2dCQUNsSixDQUFDO1lBQ0g7WUFFQS9DLFNBQVNJLGdCQUFnQixDQUFDLFlBQVksU0FBVWUsS0FBSyxFQUFFO2dCQUNwRGdCLGdCQUFnQkQsS0FBSyxDQUE0QjNCLE9BQU8sQ0FBQ0YsbUJBQW1CLENBQUMsY0FBYyxnQkFBaUI2QixLQUFLLENBQTRCVyxTQUFTO2dCQUN0SlYsZ0JBQWdCRCxLQUFLLENBQTRCM0IsT0FBTyxDQUFDRixtQkFBbUIsQ0FBQyxhQUFhLGdCQUFpQjZCLEtBQUssQ0FBNEJZLFNBQVM7Z0JBQ3JKWCxnQkFBZ0JELEtBQUssQ0FBNEIzQixPQUFPLENBQUNGLG1CQUFtQixDQUFDLFlBQVksZ0JBQWlCNkIsS0FBSyxDQUE0QmEsT0FBTztZQUNySjtRQUNGLENBQUM7SUFFSCxHQUFHO1FBQUNqRTtRQUFhRTtRQUFjRTtLQUFZO0lBRTNDLHFCQUNFLDhEQUFDd0Y7UUFBSUMsV0FBV25HLG1GQUFzQjtrQkFDcEMsNEVBQUNrRztZQUFJRyxLQUFLakc7c0JBQ1IsNEVBQUM2QjtnQkFBT29FLEtBQUtoRzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO0dBbFB1QkY7O1FBTUZGLG9EQUFTQTs7O0tBTlBFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvc2tpbGxzLnRzeD85Y2U4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvc2tpbGxzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgTWF0dGVyIGZyb20gJ21hdHRlci1qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoeyByZWZGb3JOYXZpZ2F0ZSB9OiB7IHJlZkZvck5hdmlnYXRlOiBhbnkgfSkge1xyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxhbnk+KCk7XHJcblxyXG4gIGNvbnN0IFtjbGllbnRXaWR0aCwgc2V0Q2xpZW50V2lkdGhdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY2xpZW50SGVpZ2h0LCBzZXRDbGllbnRIZWlnaHRdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgYm94SXNJblZpZXcgPSB1c2VJblZpZXcoY2FudmFzUmVmLCB7IG9uY2U6IHRydWUsIGFtb3VudDogMSB9KVxyXG5cclxuICBsZXQgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcclxuICAgIFJlbmRlciA9IE1hdHRlci5SZW5kZXIsXHJcbiAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxyXG4gICAgTW91c2VDb25zdHJhaW50ID0gTWF0dGVyLk1vdXNlQ29uc3RyYWludCxcclxuICAgIE1vdXNlID0gTWF0dGVyLk1vdXNlLFxyXG4gICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZSxcclxuICAgIEJvZGllcyA9IE1hdHRlci5Cb2RpZXM7XHJcblxyXG4gIGxldCBlbmdpbmUgPSBFbmdpbmUuY3JlYXRlKHtcclxuICAgIGVuYWJsZVNsZWVwaW5nOiBmYWxzZVxyXG4gIH0pLFxyXG4gICAgd29ybGQgPSBlbmdpbmUud29ybGQ7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDbGllbnRXaWR0aChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSAzMCk7XHJcbiAgICBzZXRDbGllbnRIZWlnaHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIDYwKTtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0Q2xpZW50V2lkdGgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gMzApO1xyXG4gICAgICBzZXRDbGllbnRIZWlnaHQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAtIDYwKTtcclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XHJcbiAgICAgIGVuZ2luZTogZW5naW5lLFxyXG4gICAgICBlbGVtZW50OiByZWZGb3JOYXZpZ2F0ZS5jdXJyZW50LFxyXG4gICAgICBjYW52YXM6IGNhbnZhc1JlZi5jdXJyZW50LFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgd2lkdGg6IGNsaWVudFdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1MiwgMjU1LCAyNDUsMC41KScsXHJcbiAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIFJlbmRlci5ydW4ocmVuZGVyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgcnVubmVyXHJcbiAgICB2YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xyXG4gICAgUnVubmVyLnJ1bihydW5uZXIsIGVuZ2luZSk7XHJcblxyXG4gICAgRXZlbnRzLm9uKHdvcmxkLCAnYWZ0ZXJBZGQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBldmVudC5vYmplY3RcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBvZmZzZXQgPSAyNS41LFxyXG4gICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgIGlzU3RhdGljOiB0cnVlLFxyXG4gICAgICAgIHJlbmRlcjogeyBmaWxsU3R5bGU6ICcjMDAwJyB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgd29ybGQuYm9kaWVzID0gW107XHJcblxyXG4gICAgLy8gdGhlc2Ugc3RhdGljIHdhbGxzIHdpbGwgbm90IGJlIHJlbmRlcmVkIGluIHRoaXMgc3ByaXRlcyBleGFtcGxlLCBzZWUgb3B0aW9uc1xyXG4gICAgbGV0IGJvZGllcyA9IFtcclxuICAgICAgQm9kaWVzLnJlY3RhbmdsZShjbGllbnRXaWR0aCArIG9mZnNldCwgY2xpZW50SGVpZ2h0IC8gMiwgNTAuNSwgY2xpZW50SGVpZ2h0LCBvcHRpb25zKSxcclxuICAgICAgQm9kaWVzLnJlY3RhbmdsZSgtb2Zmc2V0LCBjbGllbnRIZWlnaHQgLyAyLCA1MC41LCBjbGllbnRIZWlnaHQsIG9wdGlvbnMpLFxyXG4gICAgICBCb2RpZXMucmVjdGFuZ2xlKGNsaWVudFdpZHRoIC8gMiwgLW9mZnNldCwgY2xpZW50V2lkdGgsIDUwLjUsIG9wdGlvbnMpLFxyXG4gICAgICBCb2RpZXMucmVjdGFuZ2xlKGNsaWVudFdpZHRoIC8gMiwgY2xpZW50SGVpZ2h0ICsgb2Zmc2V0LCBjbGllbnRXaWR0aCwgNTAuNSwgb3B0aW9ucyksXHJcbiAgICBdXHJcblxyXG4gICAgaWYgKGJveElzSW5WaWV3KSB7XHJcbiAgICAgIGJvZGllcy5wdXNoKFxyXG4gICAgICAgIEJvZGllcy5jaXJjbGUoY2xpZW50V2lkdGggLyAyIC0gNzUsIDE1MCwgNzUsIHtcclxuICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAyLFxyXG4gICAgICAgICAgcmVzdGl0dXRpb246IDAuNixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgICAgICB0ZXh0dXJlOiBcIi9za2lsbHMvcmVhY3QucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQm9kaWVzLmNpcmNsZShjbGllbnRXaWR0aCAvIDIsIDE1MCwgNzUsIHtcclxuICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAyLFxyXG4gICAgICAgICAgcmVzdGl0dXRpb246IDAuNixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgICAgICB0ZXh0dXJlOiBcIi9za2lsbHMvYW5ndWxhci5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL3Z1ZS5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiAtIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2V4cHJlc3MucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQm9kaWVzLmNpcmNsZShjbGllbnRXaWR0aCAvIDIsIDE1MCwgNzUsIHtcclxuICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAyLFxyXG4gICAgICAgICAgcmVzdGl0dXRpb246IDAuNixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBzcHJpdGU6IHtcclxuICAgICAgICAgICAgICB0ZXh0dXJlOiBcIi9za2lsbHMvbmVzdC5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2RvY2tlci5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2dpdC5wbmdcIixcclxuICAgICAgICAgICAgICB4U2NhbGU6IDEsXHJcbiAgICAgICAgICAgICAgeVNjYWxlOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCb2RpZXMuY2lyY2xlKGNsaWVudFdpZHRoIC8gMiArIDc1LCAxNTAsIDc1LCB7XHJcbiAgICAgICAgICBmcmljdGlvbkFpcjogMC4wMixcclxuICAgICAgICAgIHJlc3RpdHV0aW9uOiAwLjYsXHJcbiAgICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgc3ByaXRlOiB7XHJcbiAgICAgICAgICAgICAgdGV4dHVyZTogXCIvc2tpbGxzL2ppcmEucG5nXCIsXHJcbiAgICAgICAgICAgICAgeFNjYWxlOiAxLFxyXG4gICAgICAgICAgICAgIHlTY2FsZTogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQod29ybGQsIGJvZGllcylcclxuXHJcbiAgICAvLyBhZGQgbW91c2UgY29udHJvbFxyXG4gICAgdmFyIG1vdXNlID0gTW91c2UuY3JlYXRlKHJlbmRlci5jYW52YXMpLFxyXG4gICAgICBtb3VzZUNvbnN0cmFpbnQgPSBNb3VzZUNvbnN0cmFpbnQuY3JlYXRlKGVuZ2luZSwge1xyXG4gICAgICAgIG1vdXNlOiBtb3VzZSxcclxuICAgICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcclxuICAgICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHJva2VTdHlsZTogJyMwMGExNDknLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIENvbXBvc2l0ZS5hZGQod29ybGQsIG1vdXNlQ29uc3RyYWludCk7XHJcblxyXG4gICAgLy8ga2VlcCB0aGUgbW91c2UgaW4gc3luYyB3aXRoIHJlbmRlcmluZ1xyXG4gICAgcmVuZGVyLm1vdXNlID0gbW91c2U7XHJcblxyXG4gICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2V3aGVlbCk7XHJcbiAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTU1vdXNlU2Nyb2xsXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2V3aGVlbCk7XHJcblxyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJykubWF0Y2hlcztcclxuXHJcbiAgICBpZiAoaXNNb2JpbGUpIHtcclxuICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vkb3duKTtcclxuICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZW1vdmUpOztcclxuICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNldXApO1xyXG5cclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoOyAvLyBsYXJnZXVyIGRlIHZvdHJlIGNhbmV2YXMgb3Ugc2PDqG5lXHJcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gT2J0ZW5leiBsZXMgY29vcmRvbm7DqWVzIGR1IHByZW1pZXIgcG9pbnQgZGUgY29udGFjdCB0YWN0aWxlICh0b3VjaGVzWzBdKVxyXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcclxuICAgICAgICBjb25zdCB0b3VjaFggPSB0b3VjaC5wYWdlWDtcclxuICAgICAgICBjb25zdCB0b3VjaFkgPSB0b3VjaC5wYWdlWTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydGlzc2V6IGxlcyBjb29yZG9ubsOpZXMgZW4gdXRpbGlzYW50IGxhIGRpbWVuc2lvbiBldCBsYSBwb3NpdGlvbiBkZSB2b3RyZSBjYW5ldmFzIG91IHNjw6huZVxyXG4gICAgICAgIC8vIE9idGVuZXogbGVzIGTDqWNhbGFnZXMgZHUgY2FuZXZhcyBwYXIgcmFwcG9ydCDDoCBsYSBmZW7DqnRyZVxyXG4gICAgICAgIGNvbnN0IGNhbnZhc1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgY2FudmFzT2Zmc2V0WCA9IGNhbnZhc1JlY3QubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldDtcclxuICAgICAgICBjb25zdCBjYW52YXNPZmZzZXRZID0gY2FudmFzUmVjdC50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG4gICAgICAgIC8vIEFqdXN0ZXogbGVzIGNvb3Jkb25uw6llcyBlbiB1dGlsaXNhbnQgbGEgZGltZW5zaW9uIGV0IGxhIHBvc2l0aW9uIHLDqWVsbGVzIGR1IGNhbnZhc1xyXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFggPSBNYXRoLmNlaWwoKHRvdWNoWCAtIGNhbnZhc09mZnNldFgpICogKGNhbnZhc1dpZHRoIC8gY2FudmFzUmVjdC53aWR0aCkpXHJcbiAgICAgICAgY29uc3QgY29udmVydGVkWSA9IE1hdGguY2VpbCgodG91Y2hZIC0gY2FudmFzT2Zmc2V0WSkgKiAoY2FudmFzSGVpZ2h0IC8gY2FudmFzUmVjdC5oZWlnaHQpKVxyXG5cclxuICAgICAgICAvLyBVdGlsaXNleiBsZXMgY29vcmRvbm7DqWVzIGNvbnZlcnRpZXMgZHUgcG9pbnQgZGUgY29udGFjdCB0YWN0aWxlIGRlIG1hbmnDqHJlIHNpbWlsYWlyZSDDoCBsJ8OpdsOpbmVtZW50IGRlIGxhIHNvdXJpc1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRCb2RpZXMgPSBNYXR0ZXIuUXVlcnkucG9pbnQoYm9kaWVzLCB7IHg6IGNvbnZlcnRlZFgsIHk6IGNvbnZlcnRlZFkgfSk7XHJcblxyXG4gICAgICAgIGlmIChjbGlja2VkQm9kaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlZG93bik7XHJcbiAgICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNlbW92ZSk7O1xyXG4gICAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNldXApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5tb3VzZWRvd24pO1xyXG4gICAgICAgIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChtb3VzZUNvbnN0cmFpbnQubW91c2UgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSkubW91c2Vtb3ZlKTs7XHJcbiAgICAgICAgKG1vdXNlQ29uc3RyYWludC5tb3VzZSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAobW91c2VDb25zdHJhaW50Lm1vdXNlIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pLm1vdXNldXApO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9LCBbY2xpZW50V2lkdGgsIGNsaWVudEhlaWdodCwgYm94SXNJblZpZXddKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHNDb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHJlZj17cmVmRm9yTmF2aWdhdGV9PlxyXG4gICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZUluVmlldyIsIk1hdHRlciIsIlNraWxscyIsInJlZkZvck5hdmlnYXRlIiwiY2FudmFzUmVmIiwiY2xpZW50V2lkdGgiLCJzZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNldENsaWVudEhlaWdodCIsImJveElzSW5WaWV3Iiwib25jZSIsImFtb3VudCIsIkVuZ2luZSIsIlJlbmRlciIsIlJ1bm5lciIsIk1vdXNlQ29uc3RyYWludCIsIk1vdXNlIiwiQ29tcG9zaXRlIiwiQm9kaWVzIiwiZW5naW5lIiwiY3JlYXRlIiwiZW5hYmxlU2xlZXBpbmciLCJ3b3JsZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJlbGVtZW50IiwiY3VycmVudCIsImNhbnZhcyIsIm9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwicnVuIiwicnVubmVyIiwiRXZlbnRzIiwib24iLCJldmVudCIsIm9mZnNldCIsImlzU3RhdGljIiwiZmlsbFN0eWxlIiwiYm9kaWVzIiwicmVjdGFuZ2xlIiwicHVzaCIsImNpcmNsZSIsImZyaWN0aW9uQWlyIiwicmVzdGl0dXRpb24iLCJzcHJpdGUiLCJ0ZXh0dXJlIiwieFNjYWxlIiwieVNjYWxlIiwiYWRkIiwibW91c2UiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibW91c2V3aGVlbCIsImlzTW9iaWxlIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJtb3VzZWRvd24iLCJtb3VzZW1vdmUiLCJtb3VzZXVwIiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJ0b3VjaCIsInRvdWNoZXMiLCJ0b3VjaFgiLCJwYWdlWCIsInRvdWNoWSIsInBhZ2VZIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbnZhc09mZnNldFgiLCJsZWZ0IiwicGFnZVhPZmZzZXQiLCJjYW52YXNPZmZzZXRZIiwidG9wIiwicGFnZVlPZmZzZXQiLCJjb252ZXJ0ZWRYIiwiTWF0aCIsImNlaWwiLCJjb252ZXJ0ZWRZIiwiY2xpY2tlZEJvZGllcyIsIlF1ZXJ5IiwicG9pbnQiLCJ4IiwieSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInNraWxsc0NvbnRhaW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/skills.tsx\n"));

/***/ })

});