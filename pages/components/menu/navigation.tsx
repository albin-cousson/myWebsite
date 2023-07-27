import * as React from "react";
import { motion } from "framer-motion";
import MenuItem from "./menuItem";

import styles from "@/styles/menu.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Navigation({ handleMenuClick }: { handleMenuClick: any }) {
  return (
    <motion.ul className={styles.navigation} variants={variants}>
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/heart.png" label="Bienvenue" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/user.png" label="Une image de moi" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/interrogation.png" label="Intro" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/briefcase.png" label="Mon parcours" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/graduation-cap.png" label="Mes compétences" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/icons/comment.png" label="Contactez-moi" />
    </motion.ul>
  )
};

