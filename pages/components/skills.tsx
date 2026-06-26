import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/skills.module.scss'

import { useInView } from "framer-motion"
import Matter from 'matter-js';

const MATERIALS: Record<string, { core: string; rim: string; deep: string }> = {
  gold:      { core: '#f3d27a', rim: '#d4af37', deep: '#6b4e16' },
  turquoise: { core: '#7fe3d6', rim: '#3bb6a6', deep: '#134f49' },
  jade:      { core: '#4fd07e', rim: '#00a149', deep: '#0a3b22' },
  spondyle:  { core: '#e98a6b', rim: '#c0492f', deep: '#5c1c11' },
  obsidian:  { core: '#3a4a55', rim: '#1b2731', deep: '#05090c' },
};

function createCaveBackdrop(render: any, Matter: any) {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // canvas offscreen : on y peint le décor dans l'ordre normal (peintre)
  const off = document.createElement('canvas');
  const octx = off.getContext('2d')!;

  let motes: any[] = [];
  let W = 0, H = 0;

  const resize = () => {
    W = render.canvas.width;
    H = render.canvas.height;
    off.width = W;
    off.height = H;
    const count = Math.max(26, Math.round((W * H) / 28000));
    motes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.6 + Math.random() * 1.9,
      speed: 0.08 + Math.random() * 0.3,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.01,
      swayAmp: 4 + Math.random() * 12,
      baseAlpha: 0.12 + Math.random() * 0.4,
    }));
  };
  resize();

  const paintDecor = (t: number) => {
    octx.clearRect(0, 0, W, H);

    // 1. base : roche sombre et chaude
    const base = octx.createLinearGradient(0, 0, 0, H);
    base.addColorStop(0, '#050d09');
    base.addColorStop(1, '#0c1d14');
    octx.fillStyle = base;
    octx.fillRect(0, 0, W, H);

    // 2. soupçon de canopée verte en haut
    const green = octx.createRadialGradient(W * 0.5, -H * 0.15, 0, W * 0.5, -H * 0.15, H * 0.95);
    green.addColorStop(0, 'rgba(0, 161, 73, 0.12)');
    green.addColorStop(1, 'rgba(0, 161, 73, 0)');
    octx.fillStyle = green;
    octx.fillRect(0, 0, W, H);

    // 3. soleil inca "Inti" gravé, très discret, centré
    const cx = W / 2, cy = H / 2;
    const minWH = Math.min(W, H);
    octx.save();
    octx.translate(cx, cy);
    octx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
    octx.lineWidth = 1;
    const inner = minWH * 0.1, outer = minWH * 0.3;
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      octx.beginPath();
      octx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
      octx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
      octx.stroke();
    }
    [inner, inner * 0.6, outer].forEach((rr) => {
      octx.beginPath();
      octx.arc(0, 0, rr, 0, Math.PI * 2);
      octx.stroke();
    });
    octx.restore();

    // 4. lueur de trésor depuis le bas, pulsation lente
    const pulse = 0.16 + Math.sin(t * 0.0008) * 0.05;
    const gR = Math.max(W, H) * 0.8;
    const glow = octx.createRadialGradient(W / 2, H * 1.08, gR * 0.08, W / 2, H * 1.08, gR);
    glow.addColorStop(0, `rgba(212, 175, 55, ${pulse})`);
    glow.addColorStop(0.45, `rgba(212, 175, 55, ${pulse * 0.4})`);
    glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
    octx.fillStyle = glow;
    octx.fillRect(0, 0, W, H);

    // 5. poussière dorée flottante
    for (const m of motes) {
      if (!reduceMotion) {
        m.y -= m.speed;
        m.sway += m.swaySpeed;
        if (m.y < -6) { m.y = H + 6; m.x = Math.random() * W; }
      }
      const x = m.x + Math.sin(m.sway) * m.swayAmp;
      const twinkle = m.baseAlpha * (0.55 + 0.45 * Math.sin(t * 0.002 + m.sway));
      octx.beginPath();
      octx.arc(x, m.y, m.r, 0, Math.PI * 2);
      octx.fillStyle = `rgba(236, 208, 140, ${twinkle})`;
      octx.shadowColor = 'rgba(212, 175, 55, 0.85)';
      octx.shadowBlur = m.r * 3.5;
      octx.fill();
    }
    octx.shadowBlur = 0;

    // 6. vignettage
    const vig = octx.createRadialGradient(W / 2, H / 2, minWH * 0.32, W / 2, H / 2, Math.max(W, H) * 0.78);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, 'rgba(0,0,0,0.55)');
    octx.fillStyle = vig;
    octx.fillRect(0, 0, W, H);
  };

  const onAfter = () => {
    if (render.canvas.width !== W || render.canvas.height !== H) resize();

    paintDecor(performance.now());

    const ctx = render.context;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);                 // ignore toute transform de Matter
    ctx.globalCompositeOperation = 'destination-over';  // place le décor DERRIÈRE les boules
    ctx.drawImage(off, 0, 0);
    ctx.restore();
  };

  Matter.Events.on(render, 'afterRender', onAfter);

  // cleanup : à appeler pour détacher le rendu décor
  return () => Matter.Events.off(render, 'afterRender', onAfter);
}

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
        background: '#07140f',
        wireframes: false,
      }
    });

    Render.run(render);

    function createGemRenderer(render: any, Matter: any) {
      // dessine `text` le long d'un arc, centré en haut de la bille
      const drawArcText = (
        ctx: CanvasRenderingContext2D,
        text: string,
        radius: number,
      ) => {
        if (!text) return;
        const chars = text.toUpperCase().split('');
        // taille de police proportionnelle au rayon
        const fontSize = Math.max(10, radius * 0.32);
        ctx.font = `600 ${fontSize}px 'Cinzel', serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // le texte court sur un arc ; on calcule l'angle total occupé
        const arcRadius = radius * 0.66;            // rayon sur lequel court le texte
        const anglePerChar = (fontSize * 0.92) / arcRadius; // espacement angulaire
        const totalAngle = anglePerChar * (chars.length - 1);
        // -PI/2 = haut de la bille ; on centre le mot autour du sommet
        let angle = -Math.PI / 2 - totalAngle / 2;

        chars.forEach((ch) => {
          ctx.save();
          ctx.rotate(angle);
          ctx.translate(0, -arcRadius);  // monter jusqu'à l'arc
          // ombre creusée + texte doré clair = effet gravé
          ctx.fillStyle = 'rgba(0,0,0,0.45)';
          ctx.fillText(ch, 0, fontSize * 0.06);
          ctx.fillStyle = '#f3e3b0';
          ctx.fillText(ch, 0, 0);
          ctx.restore();
          angle += anglePerChar;
        });
      };

      const draw = () => {
        const ctx = render.context;
        const bodies = Matter.Composite.allBodies(render.engine.world);

        for (const body of bodies) {
          const mat = body.plugin?.material && MATERIALS[body.plugin.material];
          if (!mat || !body.circleRadius) continue;

          const { x, y } = body.position;
          const r = body.circleRadius;

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(body.angle); // tout tourne avec la bille : gemme ET texte gravé

          // 1. corps de la gemme : dégradé sphérique
          const grad = ctx.createRadialGradient(-r * 0.35, -r * 0.4, r * 0.1, 0, 0, r);
          grad.addColorStop(0, mat.core);
          grad.addColorStop(0.55, mat.rim);
          grad.addColorStop(1, mat.deep);
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // 2. liseré doré (sertissage)
          ctx.lineWidth = 2;
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.85)';
          ctx.stroke();

          // 3. texte gravé en arc (tourne avec la bille)
          drawArcText(ctx, body.label, r);

          // 4. reflet spéculaire par-dessus
          ctx.beginPath();
          ctx.ellipse(-r * 0.32, -r * 0.38, r * 0.34, r * 0.2, -0.6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.30)';
          ctx.fill();

          ctx.restore();
        }
      };

      Matter.Events.on(render, 'afterRender', draw);
      return () => Matter.Events.off(render, 'afterRender', draw);
    }
    
    const cleanupBackdrop = createCaveBackdrop(render, Matter);
    const cleanupGems = createGemRenderer(render, Matter);

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
          label: 'react',
            plugin: { material: 'turquoise' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 + 40, -100, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          label: 'angular',
            plugin: { material: 'spondyle'},
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 - 40, -220, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
           label: 'vue',
            plugin: { material: 'jade' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 + 40, -220, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
          label: 'express',
            plugin: { material: 'gold' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 - 40, -340, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
           label: 'nest',
            plugin: { material: 'spondyle' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 + 40, -340, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
           label: 'docker',
            plugin: { material: 'turquoise' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 - 40, -460, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
           label: 'git',
            plugin: { material: 'jade' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
        }),
        Bodies.circle(clientWidth / 2 + 40, -460, 75, {
          frictionAir: 0.02,
          restitution: 0.6,
           label: 'jira',
            plugin: { material: 'gold' },
            render: { visible: true } // on garde visible pour la physique, mais on retire le sprite
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
    const playText = "My favorite skills"; 

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

    return () => {
      cleanupBackdrop();
      cleanupGems();
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
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