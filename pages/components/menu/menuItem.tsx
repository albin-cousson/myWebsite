import * as React from "react";
import { motion } from "framer-motion";

import styles from "@/styles/menu.module.scss";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

type MenuItemProps = {
  handleMenuClick: (label: any) => void;
  label: any;
  icon: any;
};

export default function MenuItem({ handleMenuClick, label, icon }: MenuItemProps) {
  return (
    <motion.li
      className={styles.item}
      onClick={()=>handleMenuClick(label)}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconPlaceholder}>{<img src={icon} alt=""/>}</div>
      <div className={styles.textPlaceholder}>{label}</div>
    </motion.li>
  );
};
