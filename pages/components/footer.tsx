import React from 'react';
import styles from '@/styles/footer.module.scss'

export default function Footer({ refForNavigate, isScrollMiddle }: { refForNavigate: any, isScrollMiddle: any }) {
    return (
        <>
            <div ref={refForNavigate} className={styles.sectionFooterSpacer}></div>
            <div className={styles.footer} style={{
                zIndex: isScrollMiddle ? "0" : "-10"
            }}>
                <div className={styles.footerContent}>
                    <h2 className={styles.footerHeading}>✺ Let’s <br />collaborate</h2>
                    <div className={styles.footerContact}>
                        <a className={styles.footerContactMail} href="mailto:albincousson7@gmail.com">
                            albincousson7@gmail.com
                        </a>
                        <a className={styles.footerContactTel} href="tel:0615069837" >
                            06.15.06.98.37
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

