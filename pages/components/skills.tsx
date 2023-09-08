import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/skills.module.scss'

import { useInView } from "framer-motion"
import Matter from 'matter-js';

export default function Skills({ refForNavigate }: { refForNavigate: any }) {
  const canvasRef = useRef<any>();

  const playTextRef = useRef<any>();
  
  const [clientWidth, setClientWidth] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  const boxIsInView = useInView(canvasRef, { once: true, amount: 1 })

  let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

  let engine = Engine.create({
    enableSleeping: false
  }),
    world = engine.world;

  useEffect(() => {

    setClientWidth(document.documentElement.clientWidth - 30);
    setClientHeight(document.documentElement.clientHeight - 60);
    const handleResize = () => {
      setClientWidth(document.documentElement.clientWidth - 30);
      setClientHeight(document.documentElement.clientHeight - 60);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {

    let render = Render.create({
      engine: engine,
      element: refForNavigate.current,
      canvas: canvasRef.current,
      options: {
        width: clientWidth,
        height: clientHeight,
        background: 'rgba(252, 255, 245,0.5)',
        wireframes: false,
      }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    var offset = 25.5,
      options = {
        isStatic: true,
        render: { fillStyle: '#000' }
      };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    let bodies = [
      Bodies.rectangle(clientWidth + offset, clientHeight / 2, 50.5, clientHeight, options),
      Bodies.rectangle(-offset, clientHeight / 2, 50.5, clientHeight, options),
      Bodies.rectangle(clientWidth / 2, clientHeight + offset, clientWidth, 50.5, options),
    ]

    if (boxIsInView) {
      bodies.push(
        Bodies.circle(clientWidth / 2 - 40, -100, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/react.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 + 40, -100, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/angular.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 - 40, -220, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/vue.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 + 40, -220, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/express.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 - 40, -340, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/nest.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 + 40, -340, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/docker.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 - 40, -460, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/git.png",
              xScale: 1,
              yScale: 1
            }
          }
        }),
        Bodies.circle(clientWidth / 2 + 40, -460, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          render: {
            sprite: {
              texture: "/skills/jira.png",
              xScale: 1,
              yScale: 1
            }
          }
        })
      )
      setTimeout(() => {
        Composite.add(world, Bodies.rectangle(clientWidth / 2, -offset, clientWidth, 50.5, options))
      }, 2000)
    }

    Composite.add(world, bodies)

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: true,
            strokeStyle: '#00a149',
            lineWidth: 2
          }
        }
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("mousewheel", (mouseConstraint.mouse as { [key: string]: any }).mousewheel);
    (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as { [key: string]: any }).mousewheel);

    const isMobile = window.matchMedia('(max-width: 911px)').matches;

    if (isMobile) {
      (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchstart", (mouseConstraint.mouse as { [key: string]: any }).mousedown);
      (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchmove", (mouseConstraint.mouse as { [key: string]: any }).mousemove);;
      (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchend", (mouseConstraint.mouse as { [key: string]: any }).mouseup);

      document.addEventListener("touchstart", function (event) {
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
        const convertedX = Math.ceil((touchX - canvasOffsetX) * (canvasWidth / canvasRect.width))
        const convertedY = Math.ceil((touchY - canvasOffsetY) * (canvasHeight / canvasRect.height))

        // Utilisez les coordonnées converties du point de contact tactile de manière similaire à l'événement de la souris
        const clickedBodies = Matter.Query.point(bodies, { x: convertedX, y: convertedY });

        if (clickedBodies.length > 0) {
          (mouseConstraint.mouse as { [key: string]: any }).element.addEventListener("touchstart", (mouseConstraint.mouse as { [key: string]: any }).mousedown);
          (mouseConstraint.mouse as { [key: string]: any }).element.addEventListener("touchmove", (mouseConstraint.mouse as { [key: string]: any }).mousemove);;
          (mouseConstraint.mouse as { [key: string]: any }).element.addEventListener("touchend", (mouseConstraint.mouse as { [key: string]: any }).mouseup);
        }
      })

      document.addEventListener("touchend", function (event) {
        (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchstart", (mouseConstraint.mouse as { [key: string]: any }).mousedown);
        (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchmove", (mouseConstraint.mouse as { [key: string]: any }).mousemove);;
        (mouseConstraint.mouse as { [key: string]: any }).element.removeEventListener("touchend", (mouseConstraint.mouse as { [key: string]: any }).mouseup);
      })
    }

    const speed = 75;
    const playTextElement = playTextRef.current; 
    const playText = "PLAY !"; 

    const typeEffect = (element: HTMLElement, text: string, speed: number) => {
      let i = 0;
      element.innerHTML = '';

      const timer = setInterval(() => {
        if (i < text.length) {
          element.append(text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
          // Une fois l'effet de frappe initial terminé, commencez l'effet de frappe inverse
          setTimeout(() => {
            const reverseTimer = setInterval(() => {
              if (i >= 0) {
                element.innerHTML = text.substring(0, i);
                i--;
              } else {
                clearInterval(reverseTimer);
              }
            }, speed);
          }, 1000); // Attendez 1 seconde avant de commencer l'effet inverse (ajustez selon vos préférences)
        }
      }, speed);
    };
    
    if(boxIsInView) {
      typeEffect(playTextElement, playText, speed);
    }

  }, [clientWidth, clientHeight, boxIsInView])

  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.playText} ref={playTextRef}></h1>
      <div ref={refForNavigate}>
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};