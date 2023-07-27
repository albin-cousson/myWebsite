import React from 'react';
import styles from '@/styles/footer.module.scss'

import { useInView } from "framer-motion"

export default function Footer({refForNavigate}: {refForNavigate: any}) {
    const containerIsInView = useInView(refForNavigate)

    return (
        <>
            <div ref={refForNavigate} className={styles.sectionFooterSpacer}></div>
            <div className={styles.footer} style={{
                zIndex: containerIsInView ? "0" : "-10"
            }}>
                <div className={styles.footerContent}>
                    <h2 className={styles.footerHeading}>✺ Let’s <br />collaborate</h2>
                    <div className={styles.footerContact}>
                        <a href="mailto:albincousson@icloud.com">
                            albincousson@icloud.com
                        </a>
                        <p>
                            06.15.06.98.37
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

