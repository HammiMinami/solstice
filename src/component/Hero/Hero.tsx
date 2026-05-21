import React from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={`container-fluid px-0 ${styles.heroSection}`}>
            <div className="col g-0 d-flex">

                <div className="col-3 col-md-3">
                    <div className="row g-0">

                        <div className="col-12">
                            <div className={`d-flex align-items-center justify-content-center ${styles.imagePanel} ${styles.topLeft}`}>
                                <img src={"./asset/banner-logo.svg"} className={`img-fluid ${styles.logoIcon}`} />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className={`${styles.imagePanel} ${styles.bottomLeft}`}></div>
                        </div>

                    </div>
                </div>

                <div className={`col-9 col-md-9 ${styles.rightColumn}`}></div>

            </div>
        </section>
    );
};