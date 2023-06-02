import React from 'react';
import styles from '@/styles/experience.module.scss'

export default function Experience({refForNavigate}: {refForNavigate: any}) {
  return (
   <>
        <div ref={refForNavigate} className={styles.experienceContainer}>
            <div className={styles.kbrw}>
                <header>
                    <div>
                        <h3>KBRW, Paris</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                02/2022 <br/>-<br/> 02/2023
                            </div>
                            <h4>
                                Développement de l&rsquo;OMS pour le groupe CoraFR.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.credo}>
                <header>
                    <div>
                        <h3>Credo, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                08/2021 <br/>-<br/> 02/2022
                            </div>
                            <h4>
                                Visualiser des catastrophes naturelles survenues dans le grand est.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.facilien}>
                <header>
                    <div>
                        <h3>Facilien, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                02/2021 <br/>-<br/> 08/2021
                            </div>
                            <h4>
                                Solution de mise en relation employeur / demandeur d&rsquo;emploie.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.spinaliDesign}>
                <header>
                    <div>
                        <h3>Spinali Design, Mulhouse</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                03/2020 <br/>-<br/> 02/2021
                            </div>
                            <h4>
                                Développement d&rsquo;une application mobile pour gants connectés test test  test  test  test  test 
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
   </>
  );
}

