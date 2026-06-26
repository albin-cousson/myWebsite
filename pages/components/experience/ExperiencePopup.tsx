import { useEffect } from 'react';
import styles from '@/styles/experience/experiencePopup.module.scss';
import type { Experience } from '@/data/experiences';

interface ExperiencePopupProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperiencePopup({ experience, onClose }: ExperiencePopupProps) {
  useEffect(() => {
    if (!experience) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [experience, onClose]);

  if (!experience) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fermer">
          <span>×</span>
        </button>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Carnet d&rsquo;expédition</span>
          <h3 className={styles.company}>
            {experience.company}
            <span className={styles.location}>, {experience.location}</span>
          </h3>
          <p className={styles.title}>{experience.title}</p>
          <span className={styles.period}>{experience.periodStart} — {experience.periodEnd}</span>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        <p className={styles.intro}>{experience.fullDescription.intro}</p>

        <ul className={styles.responsibilities}>
          {experience.fullDescription.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className={styles.divider} aria-hidden="true" />

        <p className={styles.conclusion}>{experience.fullDescription.conclusion}</p>

        {experience.stack && (
          <>
            <span className={styles.stackLabel}>Équipement &amp; butin</span>
            <ul className={styles.stack}>
              {experience.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}