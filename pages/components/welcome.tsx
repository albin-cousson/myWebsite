import styles from '@/styles/welcome.module.scss'

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from 'react';

export default function Welcome({refForNavigate}: {refForNavigate: any}) {
  const [endAnimation, setEndAnimationt] = useState(0)

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
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}

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
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              scale: welcomeTextScale,
              opacity: welcomeTextOpacity,
            }}
          > 
            BIENVENUE<motion.br/> SUR LE<motion.br/> CURRICULUM VITÆ<motion.br/> D&apos;ALBIN
          </motion.h1>
        </div>
      </div>
    </>
  )
}
