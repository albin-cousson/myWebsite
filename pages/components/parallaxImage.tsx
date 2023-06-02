import React from 'react';
import { useEffect, useState } from 'react';

import styles from '@/styles/parallaxImage.module.scss'

export default function ParallaxImage({refForNavigate}: {refForNavigate: any}) {
  const [backgroundImage, setBackgroundImage] = useState("")
  
  useEffect(() => {    
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const backgroundImage = isMobile ? '/pictureOfMe/me&design.png' : '/pictureOfMe/me&planetDesign.png';
    setBackgroundImage(backgroundImage)
  }, []); 

  return (
   <>
      <div ref={refForNavigate} className={styles.imageWrapper} style={{
        backgroundImage: `url(/pictureOfMe/me&planetDesign.png)`,
      }}/>
   </>
  );
}

