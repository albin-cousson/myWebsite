import React, { useState, useEffect } from 'react';
import styles from '@/styles/experience.module.scss'

export default function Experience({refForNavigate}: {refForNavigate: any}) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  const rotate = isDesktop
    ? (mouse.x / window.innerWidth - 0.5) * 20
    : 0;

  const translateX = isDesktop
    ? (mouse.x / window.innerWidth - 0.5) * 30
    : 0;

  const translateY = isDesktop
    ? (mouse.y / window.innerHeight - 0.5) * 30
    : 0;

  return (
   <>
        <div ref={refForNavigate} className={styles.experienceContainer}>
            <div className={`${styles.spurgin} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>Spurgin, Sélestat</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2025 <br/>-<br/> 2026
                            </div>
                            <h4>
                                Développement d&rsquo;une solution pour effectuer des contrôles qualités dans les usines Spurgin.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={`${styles.scalian} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>Scalian, Bordeaux</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2024 <br/>-<br/> 2025
                            </div>
                            <h4>
                                Update de l&rsquo;interface de l&rsquo;app City Zen.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={`${styles.kbrw} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>KBRW, Paris</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2023 <br/>-<br/> 2024
                            </div>
                            <h4>
                                Développement d&rsquo;un Order Management System (OMS) pour le groupe CoraFR.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={`${styles.credo} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>Credo, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2022 <br/>-<br/> 2023
                            </div>
                            <h4>
                                Développement d&rsquo;une interface pour visualiser les catastrophes naturelles survenus dans le Grand Est.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={`${styles.facilien} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>Facilien, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2021 <br/>-<br/> 2022
                            </div>
                            <h4>
                                Développement d&rsquo;une solution de mise en relation employeur / demandeur d&rsquo;emploi.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={`${styles.spinaliDesign} ${styles.experienceCard}`} 
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <header>
                    <div>
                        <h3>Spinali Design, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                2020 <br/>-<br/> 2021
                            </div>
                            <h4>
                                Développement d&rsquo;une application mobile pour suivre la progression de la désinfection de ses gants connectés. 
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        {isDesktop && (
        <div
          className={`${styles.explorer} ${hovered ? styles.show : ''}`}
          style={{
            transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
          }}
        >
          <img src="/mascotte/mascotte.png" alt="mascotte explorateur" />
        </div>
      )}
   </>
  );
}



