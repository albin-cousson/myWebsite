import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

/////////////////////////// @ COMPONENTS @ ///////////////////////////
import Menu from "./components/menu/menu";
import Welcome from "./components/welcome";
import ParallaxImage from "./components/parallaxImage";
import Skills from "./components/skills";
import Intro from "./components/intro";
import Footer from "./components/footer";
import Experience from "./components/experience";
import DownloadCvButton from "./components/downloadCvButton";

export default function Home() {
  const welcome = useRef<HTMLElement>(null);
  const parallaxImage = useRef<HTMLElement>(null);
  const intro = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const skills = useRef<HTMLElement>(null);
  const footer = useRef<HTMLElement>(null);

  const [isScrollMiddle, setIsScrollMiddle] = useState(false);

  const handleMenuClick = (refName: any) => {
    const ref = (refName === 'Bienvenue' ? welcome : (refName === 'Une image de moi' ? parallaxImage : (refName === 'Intro' ? intro : (refName === 'Mon parcours' ? experience : (refName === 'Mes compétences' ? skills : footer)))));
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop >= (documentHeight / 2 - windowHeight)) {
      setIsScrollMiddle(true);
    } else {
      setIsScrollMiddle(false);
    }
  };

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.topBar}>
        <Menu handleMenuClick={handleMenuClick} />
        <DownloadCvButton />
      </div>
      <Welcome refForNavigate={welcome} />
      <ParallaxImage refForNavigate={parallaxImage} />
      <Intro refForNavigate={intro} />
      <Experience refForNavigate={experience} />
      <Skills refForNavigate={skills} />
      <Footer refForNavigate={footer} isScrollMiddle={isScrollMiddle} />
    </>
  );
}
