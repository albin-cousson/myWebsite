import React from 'react';
import styles from '@/styles/experience.module.scss'

export default function Experience({refForNavigate}: {refForNavigate: any}) {
  return (
   <>
        <div ref={refForNavigate} className={styles.experienceContainer}>
            <div className={styles.spurgin}>
                <header>
                    <div>
                        <h3>Spurgin, Sélestat</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                04/2023 <br/>-<br/> 08/2023
                            </div>
                            <h4>
                                Développement d&rsquo;une solution pour effectuer des contrôles qualités dans les usines Spurgin.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.scalian}>
                <header>
                    <div>
                        <h3>Scalian, Bordeaux</h3>
                    </div>
                </header>
                <section>
                    <ul>
                        <li>
                            <div>
                                02/2023 <br/>-<br/> 04/2023
                            </div>
                            <h4>
                                Update de l&rsquo;interface de l&rsquo;app City Zen.
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
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
                                Développement d&rsquo;un order Management System (OMS) pour le groupe CoraFR.
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
                                Développement d&rsquo;une interface pour visualiser les catastrophes naturelles survenus dans le Grand Est.
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
                                Développement d&rsquo;une solution de mise en relation employeur / demandeur d&rsquo;emploi.
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
                                Développement d&rsquo;une application mobile pour suivre l'état d&rsquo;avancement de la désinfection de ses gants connectés. 
                            </h4>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
   </>
  );
}

