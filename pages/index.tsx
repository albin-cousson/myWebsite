import React, { useRef, useState } from 'react';
import io from 'socket.io-client';

import styles from '@/styles/Home.module.css'

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
  const [messages, setMessages] = useState([] as any);

  const socket = io('192.168.128.4:8000');

  socket.on('SERVER_MSG', msg => {
    setNewMessage(msg);
  });

  function setNewMessage(msg: any[]) {
    setMessages([
      ...messages,
      msg[0],
      msg[1]
    ]);
  }

  function sendMessage(e: any) {
    e.preventDefault();
    const msg = {
      username: e.target.username.value,
      text: e.target.text.value
    };
    socket.emit('CLIENT_MSG', msg);
  }

  const welcome = useRef<HTMLElement>(null);
  const parallaxImage = useRef<HTMLElement>(null);
  const intro = useRef<HTMLElement>(null);
  const experience = useRef<HTMLElement>(null);
  const skills = useRef<HTMLElement>(null);
  const footer = useRef<HTMLElement>(null);

  const handleMenuClick = (refName: any) => {
    const ref = (refName === 'Bienvenue' ? welcome : (refName === 'Une image de moi' ? parallaxImage : (refName === 'Intro' ? intro : (refName === 'Mon parcours' ? experience : (refName === 'Mes compétences' ? skills : footer)))));
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={styles.topBar}>
        <Menu handleMenuClick={handleMenuClick} />
        <DownloadCvButton />
      </div>
      <Welcome refForNavigate={welcome} />
      <div style={{zIndex: 1000000}}>
        <div>
          <div className="messages">
            {messages.map((msg: any) => {
              return (
                <div key={msg.text}>{msg.username}: {msg.text}</div>
              )
            })}
          </div>
        </div>
        <form onSubmit={e => sendMessage(e)}>
          <div className="card-footer">
            <input id="username"
              type="text"
              placeholder="Username"
              className="form-control"
            />
            <br />
            <input id="text"
              type="text"
              placeholder="Your message"
              className="form-control"
            />
            <br />
            <button type="submit"
              className="btn btn-primary form-control">
              send
            </button>
          </div>
        </form>
      </div >
      <ParallaxImage refForNavigate={parallaxImage} />
      <Intro refForNavigate={intro} />
      <Experience refForNavigate={experience} />
      <Skills refForNavigate={skills} />
      <Footer refForNavigate={footer} />
    </>
  )
}