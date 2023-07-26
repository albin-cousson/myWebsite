import React from 'react';
import styles from '@/styles/intro.module.scss'

export default function Intro({ refForNavigate }: { refForNavigate: any }) {
    return (
        <div ref={refForNavigate} className={styles.introContainer}>
            <div>
            <div className={styles.intro}>
                <h1>
                    A PROPOS
                </h1>
                <h2>
                    Avec une <span className={styles.span}>expertise solide</span> en développement <span className={styles.span}>front-end</span> et <span className={styles.span}>back-end</span>, je suis là pour vous <span className={styles.span}>aider</span> à transformer votre <span className={styles.span}>vision</span> en <span className={styles.span}>réalité</span>. Passionné par la création de solutions <span className={styles.span}>innovantes</span> et <span className={styles.span}>sur mesure</span>, je suis prêt à travailler avec vous pour vous permettre de vous <span className={styles.span}>démarquer</span> dans votre secteur.
                </h2>
            </div>
            </div>
        </div>
    );
}