import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Orbitron, Michroma, Gajraj_One, Bangers, Black_Ops_One } from 'next/font/google'

const inter = Michroma({ subsets: ['latin'], weight: ['400'], })

export default function App({ Component, pageProps }: AppProps) {
  const cursorRef = useRef<any>()

  const [cursorIsClick, setCursorIsClick] = useState(false);

  const cursorPos = (e: any) => {
    setCursorIsClick(false)
    if(cursorRef.current != null) {
      cursorRef.current.style.top = (e.pageY - 0) - window.scrollY + "px";
      cursorRef.current.style.left = e.pageX - 15 + "px";
    }
  }


  return (
    <main onMouseEnter={cursorPos} onMouseMove={cursorPos} className={inter.className} onMouseDown={()=>setCursorIsClick(true)} onMouseUp={()=>setCursorIsClick(false)}>
      {!cursorIsClick ? <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} ref={cursorRef} className={styles.persoCursor} src="/cursors/cursor.png" alt=""/> : <motion.img ref={cursorRef} className={styles.persoCursor} src="/cursors/cursorOnClick.png" alt=""/>}
      <Component {...pageProps} />
    </main>
  )
}
