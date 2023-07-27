import * as React from "react";
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

const buttonShadow = {
  open: {
    boxShadow: "rgb(0, 0, 0) 0px 0px 0px", transition: {
      delay: 0
    }
  },
  closed: {
    boxShadow: "rgb(0, 0, 0) 0px 0px 6px", transition: {
      delay: 0.8
    }
  }
};

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
  return (
    <motion.button
      className={styles.toggleButton}
      // variants={buttonShadow}
      animate={isOpen ? "open" : "closed"}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="-0.5 -1.5 23 23">
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
    </motion.button>
  )
};
