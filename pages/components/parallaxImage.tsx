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
          alt="Parallax Image"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  );
}
