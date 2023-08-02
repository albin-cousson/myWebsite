exports.id = 252;
exports.ids = [252];
exports.modules = {

/***/ 7277:
/***/ ((module) => {

// Exports
module.exports = {
	"skillsContainer": "skills_skillsContainer__zk6ha"
};


/***/ }),

/***/ 7252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7277);
/* harmony import */ var _styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8438);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Skills({ refForNavigate  }) {
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [clientWidth, setClientWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [clientHeight, setClientHeight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const boxIsInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(canvasRef, {
        once: true,
        amount: 1
    });
    let Engine = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Runner), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().MouseConstraint), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Mouse), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Composite), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Bodies);
    let engine = Engine.create({
        enableSleeping: false
    }), world = engine.world;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setClientWidth(document.documentElement.clientWidth - 30);
        setClientHeight(document.documentElement.clientHeight - 60);
        const handleResize = ()=>{
            setClientWidth(document.documentElement.clientWidth - 30);
            setClientHeight(document.documentElement.clientHeight - 60);
        };
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let render = Render.create({
            engine: engine,
            element: refForNavigate.current,
            canvas: canvasRef.current,
            options: {
                width: clientWidth,
                height: clientHeight,
                background: "rgba(252, 255, 245,0.5)",
                wireframes: false
            }
        });
        Render.run(render);
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
        var offset = 25.5, options = {
            isStatic: true,
            render: {
                fillStyle: "#000"
            }
        };
        world.bodies = [];
        // these static walls will not be rendered in this sprites example, see options
        let bodies = [
            Bodies.rectangle(clientWidth + offset, clientHeight / 2, 50.5, clientHeight, options),
            Bodies.rectangle(-offset, clientHeight / 2, 50.5, clientHeight, options),
            Bodies.rectangle(clientWidth / 2, clientHeight + offset, clientWidth, 50.5, options)
        ];
        if (boxIsInView) {
            bodies.push(Bodies.circle(clientWidth / 2 - 40, -100, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/react.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 + 40, -100, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/angular.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 - 40, -220, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/vue.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 + 40, -220, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/express.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 - 40, -340, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/nest.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 + 40, -340, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/docker.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 - 40, -460, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/git.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }), Bodies.circle(clientWidth / 2 + 40, -460, 75, {
                frictionAir: 0.02,
                restitution: 0.6,
                render: {
                    sprite: {
                        texture: "/skills/jira.png",
                        xScale: 1,
                        yScale: 1
                    }
                }
            }));
            setTimeout(()=>{
                Composite.add(world, Bodies.rectangle(clientWidth / 2, -offset, clientWidth, 50.5, options));
            }, 2000);
        }
        Composite.add(world, bodies);
        // add mouse control
        var mouse = Mouse.create(render.canvas), mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: true,
                    strokeStyle: "#00a149",
                    lineWidth: 2
                }
            }
        });
        Composite.add(world, mouseConstraint);
        // keep the mouse in sync with rendering
        render.mouse = mouse;
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        if (isMobile) {
            mouseConstraint.mouse.element.removeEventListener("touchstart", mouseConstraint.mouse.mousedown);
            mouseConstraint.mouse.element.removeEventListener("touchmove", mouseConstraint.mouse.mousemove);
            mouseConstraint.mouse.element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);
            document.addEventListener("touchstart", function(event) {
                const canvas = canvasRef.current;
                const canvasWidth = canvas.width; // largeur de votre canevas ou scène
                const canvasHeight = canvas.height;
                // Obtenez les coordonnées du premier point de contact tactile (touches[0])
                const touch = event.touches[0];
                const touchX = touch.pageX;
                const touchY = touch.pageY;
                // Convertissez les coordonnées en utilisant la dimension et la position de votre canevas ou scène
                // Obtenez les décalages du canevas par rapport à la fenêtre
                const canvasRect = canvas.getBoundingClientRect();
                const canvasOffsetX = canvasRect.left + window.pageXOffset;
                const canvasOffsetY = canvasRect.top + window.pageYOffset;
                // Ajustez les coordonnées en utilisant la dimension et la position réelles du canvas
                const convertedX = Math.ceil((touchX - canvasOffsetX) * (canvasWidth / canvasRect.width));
                const convertedY = Math.ceil((touchY - canvasOffsetY) * (canvasHeight / canvasRect.height));
                // Utilisez les coordonnées converties du point de contact tactile de manière similaire à l'événement de la souris
                const clickedBodies = matter_js__WEBPACK_IMPORTED_MODULE_3___default().Query.point(bodies, {
                    x: convertedX,
                    y: convertedY
                });
                if (clickedBodies.length > 0) {
                    mouseConstraint.mouse.element.addEventListener("touchstart", mouseConstraint.mouse.mousedown);
                    mouseConstraint.mouse.element.addEventListener("touchmove", mouseConstraint.mouse.mousemove);
                    mouseConstraint.mouse.element.addEventListener("touchend", mouseConstraint.mouse.mouseup);
                }
            });
            document.addEventListener("touchend", function(event) {
                mouseConstraint.mouse.element.removeEventListener("touchstart", mouseConstraint.mouse.mousedown);
                mouseConstraint.mouse.element.removeEventListener("touchmove", mouseConstraint.mouse.mousemove);
                mouseConstraint.mouse.element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);
            });
        }
    }, [
        clientWidth,
        clientHeight,
        boxIsInView
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_skills_module_scss__WEBPACK_IMPORTED_MODULE_4___default().skillsContainer),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: refForNavigate,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                ref: canvasRef
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;