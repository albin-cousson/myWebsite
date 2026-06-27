import styles from '@/styles/welcome.module.scss'
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from 'react';

export default function Welcome({refForNavigate}: {refForNavigate: any}) {
  // 1 = fallback valide : au scroll=0 les transforms sortent la bonne valeur initiale
  const [endAnimation, setEndAnimationt] = useState(1)

  const { scrollYProgress } = useScroll()

  const welcomeImgWithBlurOpacity = useTransform(scrollYProgress, [0, endAnimation], [1, 0]);
  const welcomeImgWithoutBlurOpacity = useTransform(scrollYProgress, [0, endAnimation], [0, 1]);
  const welcomeTextScale = useTransform(scrollYProgress, [0, endAnimation], [1, 10]);
  const welcomeTextOpacity = useTransform(scrollYProgress, [0, endAnimation / 2, endAnimation], [1, 1, 0]);

  useEffect(() => {        
    const totalPageHeight = document.documentElement.scrollHeight / document.documentElement.clientHeight * 100;
    const remainingPageHeight = +totalPageHeight - 100;
    const percentageOfTotalPage = 100 / remainingPageHeight;    
    setEndAnimationt(percentageOfTotalPage)
  }, []); 
   
  return (    
    <>
      <div ref={refForNavigate} className={styles.welcomeContainer}>
        <div className={styles.welcomeMotionWrapper}>
          <motion.img className={styles.welcomeMotionImage} src="/background/welcomeBackground.png" alt="" 
            initial={{ opacity: 0 }}
            style={{
              zIndex: 1,
              opacity: welcomeImgWithoutBlurOpacity
            }}
          />
          <motion.img className={styles.welcomeMotionImage} src='/background/welcomeBlurBackground.png' alt="" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              zIndex: 2,
              opacity: welcomeImgWithBlurOpacity
            }}
          />
          <motion.h1 className={styles.welcomeMotionText}
            initial={{ opacity: 0, scale: 1}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.6 }}
            style={{
              scale: welcomeTextScale,
              opacity: welcomeTextOpacity,
            }}
          >
            BIENVENUE<br/> SUR LE<br/> CURRICULUM VITÆ<br/> D&apos;<span className={styles.highlight}>ALBIN</span>
          </motion.h1>
        </div>
      </div>
    </>
  )
}
