import React from 'react';
import { useEffect, useState } from 'react';

import styles from '@/styles/parallaxImage.module.scss'

export default function ParallaxImage({refForNavigate}: {refForNavigate: any}) {
  const [backgroundImage, setBackgroundImage] = useState("")
  
  useEffect(() => {    
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const backgroundImage = isMobile ? '/background/parallaxImageForSF.png' : '/background/parallaxImage.png';
    setBackgroundImage(backgroundImage)    
    const setParallaxImageIfResizeWindow = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const backgroundImage = isMobile ? '/background/parallaxImageForSF.png' : '/background/parallaxImage.png';
      setBackgroundImage(backgroundImage)    
    }
    window.addEventListener("resize", setParallaxImageIfResizeWindow);
    return () => window.removeEventListener("resize", setParallaxImageIfResizeWindow);
  }, []); 

  return (
   <>
      <div ref={refForNavigate}></div>
      <div className={styles.imageWrapper} style={{
        backgroundImage: `url(${backgroundImage})`,
      }}/>
   </>
  );
}

