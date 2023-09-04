import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useCycle } from "framer-motion";

import styles from "@/styles/menu.module.scss";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--default-color)"
    strokeLinecap="round"
    {...props}
  />
);

let notificationVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  let [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches)
    const verifyIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches)   
    }
    window.addEventListener("resize", verifyIsMobile);
    return () => window.removeEventListener("resize", verifyIsMobile);
  }, []);

  return (
    <motion.button
      className={styles.toggleButton}
      variants={notificationVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
      onClick={toggle}
    >
      {isMobile ?
        <svg width="24" height="24" viewBox="-0.5 -1.5 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 18 L 20 2.5" }
            }}
            animate={isOpen ? "open" : "closed"}
            d="M 2 2.5 L 20 2.5"
            transition={{ duration: 0.3 }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            animate={isOpen ? "open" : "closed"}
            opacity={isOpen ? 0 : 1}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 20 18" }
            }}
            animate={isOpen ? "open" : "closed"}
            d="M 2 16.346 L 20 16.346"
            transition={{ duration: 0.3 }}
          />
        </svg>
        : 
        <svg width="28" height="28" viewBox="-0.5 -1.5 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 18 L 20 2.5" }
            }}
            animate={isOpen ? "open" : "closed"}
            d="M 2 2.5 L 20 2.5"
            transition={{ duration: 0.3 }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            animate={isOpen ? "open" : "closed"}
            opacity={isOpen ? 0 : 1}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 20 18" }
            }}
            animate={isOpen ? "open" : "closed"}
            d="M 2 16.346 L 20 16.346"
            transition={{ duration: 0.3 }}
          />
        </svg>}
    </motion.button>
  )
};
