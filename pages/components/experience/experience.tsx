import React, { useState, useEffect } from 'react';
import styles from '@/styles/experience/experience.module.scss';
import { experiences } from '@/data/experiences';
import type { Experience as ExperienceType } from '@/data/experiences';
import ExperiencePopup from './ExperiencePopup';

export default function Experience({ refForNavigate }: { refForNavigate: any }) {
  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  const rotate = isDesktop ? (mouse.x / window.innerWidth - 0.5) * 20 : 0;
  const translateX = isDesktop ? (mouse.x / window.innerWidth - 0.5) * 30 : 0;
  const translateY = isDesktop ? (mouse.y / window.innerHeight - 0.5) * 30 : 0;

  return (
    <>
      <div ref={refForNavigate} className={styles.experienceContainer}>
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`${styles[exp.id]} ${styles.experienceCard}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setSelectedExperience(exp)}
          >
            <header>
              <div>
                <h3>{exp.company}, {exp.location}</h3>
              </div>
            </header>
            <section>
              <ul>
                <li>
                    <div>
                        {exp.periodStart} <br/>-<br/> {exp.periodEnd}
                    </div>
                    <h4>{exp.shortDescription}</h4>
                </li>
              </ul>
            </section>
          </div>
        ))}
      </div>

      {isDesktop && (
        <div
          className={`${styles.explorer} ${hovered || !!selectedExperience ? styles.show : ''}`}
          style={{ transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)` }}
        >
          <img src="/mascotte/mascotte.png" alt="mascotte explorateur" />
        </div>
      )}

      <ExperiencePopup
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}