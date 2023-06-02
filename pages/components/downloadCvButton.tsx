import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

import styles from '@/styles/downloadCvButton.module.scss'

export default function DownloadCvButton() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
       <motion.a className={styles.downloadCvButton} href={"/cv/cv_albin_cousson.pdf"} download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p>DL: CV</p>
        <img src="/images/menuIcons/downloadBlack.png" alt=""/>
      </motion.a>
      {/* <motion.span className={styles.test} style={{ scaleY }}/> */}
    </>
  );
};


