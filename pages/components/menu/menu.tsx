import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, sync, useCycle } from "framer-motion";
import MenuToggle from "./menuToggle";
import Navigation from "./navigation";

import styles from "@/styles/menu.module.scss";

const nav = {
  open: () => ({
    display: "block",
  }),
  closed: {
    display: "none",
    transition: {
      delay: 2
    }
  }
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50px 50px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const dateVariant = {
  open: () => ({
    opacity: 1,
    transition: {
      delay: 0.5,
    }
  }),
  closed: {
    opacity: 0,
    
  }
};

export default function Menu({handleMenuClick}: {handleMenuClick: any}) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLElement | null>(null);
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      dimensions.current.width = containerRef.current.offsetWidth;
      dimensions.current.height = containerRef.current.offsetHeight;
    }
  }, [containerRef.current]);;

  return (
    <>
      <MenuToggle
        toggle={() => toggleOpen()}
        isOpen={isOpen}
      />
      <motion.nav
        className={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={nav}
        custom={dimensions.current.height}
        ref={containerRef}
      >
        <motion.div className={styles.background} variants={sidebar} >
          <motion.div 
            animate={isOpen ? "open" : "closed"}
            variants={dateVariant}
            >
            2023
          </motion.div>
        </motion.div>
        <div onClick={() => toggleOpen()}>
          <Navigation handleMenuClick={handleMenuClick}/>
        </div>
      </motion.nav>
    </>
  );
}