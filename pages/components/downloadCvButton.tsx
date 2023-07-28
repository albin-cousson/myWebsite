import React, { useState } from 'react';
import { motion, useScroll } from "framer-motion";

import styles from '@/styles/downloadCvButton.module.scss'

export default function DownloadCvButton() {
  // const [buttonIsHover, setButtonIsHover] = useState(false);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className={styles.wrapperDownloadCvButton}>
        <motion.a className={styles.downloadCvButton} href={"/cv/cv_albin_cousson.pdf"} download
          // onMouseEnter={() => { setButtonIsHover(true) }}
          // onMouseLeave={() => { setButtonIsHover(false) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>DL: CV</p>
          {/* {buttonIsHover ? <img src="/icons/inbox-in.png" alt="" /> : <img src="/icons/inbox-inb.png" alt="" />} */}
          <img src="/icons/inbox-inb.png" alt="" />
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


