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
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 12h-6l-2 3h-4l-2-3H2" />
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
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


