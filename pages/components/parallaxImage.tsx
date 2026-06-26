import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import parallaxImage from '../../public/background/parallaxImage.png';
import parallaxImageForMobile from '../../public/background/parallaxImageForMobile.png';
import styles from '@/styles/parallaxImage.module.scss';

export default function ParallaxImage({ refForNavigate }: { refForNavigate: any }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    const verifyIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    };
    window.addEventListener('resize', verifyIsMobile);
    return () => window.removeEventListener('resize', verifyIsMobile);
  }, []);

  const getImageSource = () => {
    if (isMobile) {
      return parallaxImageForMobile;
    } else {
      return parallaxImage;
    }
  };

  return (
    <>
      <div ref={refForNavigate}></div>
      <div className={styles.imageWrapper}>
        <Image
          src={getImageSource()}
          alt="Photo de profil"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />

        <div className={styles.tint} aria-hidden="true" />
        <div className={styles.vignette} aria-hidden="true" />

        <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBL}`} aria-hidden="true" />
        <span className={`${styles.corner} ${styles.cornerBR}`} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Carnet d&rsquo;expédition — édition développeur</span>
          {/* 👇 remplace par ton nom et ton titre */}
          <h1 className={styles.name}>Albin Cousson</h1>
          <p className={styles.role}>Développeur Full-Stack</p>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Descendre dans la jungle</span>
          <div className={styles.scrollLine} />
        </div>
      </div>
    </>
  );
}