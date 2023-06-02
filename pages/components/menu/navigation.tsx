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
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/heart.png" label="Bienvenue" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/avatar.png" label="Une image de moi" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/glasses.png" label="Intro" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/share.png" label="Mon parcours" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/monitor.png" label="Mes compétences" />
      <MenuItem handleMenuClick={handleMenuClick} icon="/images/menuIcons/contact.png" label="Contactez-moi" />
    </motion.ul>
  )
};

