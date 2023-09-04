import React, { useState } from 'react';
import { motion, useScroll } from "framer-motion";

import styles from '@/styles/downloadCvButton.module.scss'

export default function DownloadCvButton() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className={styles.wrapperDownloadCvButton}>
        <motion.a className={styles.downloadCvButton} href={"/cv/cv_albin_cousson.pdf"} download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>DL: CV</p>
          <img src="/icons/inbox.png" alt="" />
          <motion.div
            style={{
              scaleY: scrollYProgress
            }}
          />
        </motion.a>
      </div>
    </>
  );
};


