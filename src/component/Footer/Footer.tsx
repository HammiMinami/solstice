import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            <div className="container px-3 px-md-4">
                <div className="row justify-content-center text-center">
                    <div className={`col-12 ${styles.footerContent}`}>

                        <div className={`mb-4 ${styles.brandingBlock}`}>
                            <img src="/asset/footer-logo.svg" alt="Shea Homes Logo" />
                        </div>

                        <div className={`mb-4 d-flex align-items-start text-start text-md-center justify-content-md-center`}>

                            <p className={`m-0 ${styles.legalText}`}>
                                <span className={`me-2 d-inline-block mt-1 ${styles.homeIcon}`}>
                                    <img src="/asset/home-icon.svg" alt="Home Icon" />
                                </span>
                                This is not an offer for real estate for sale, nor solicitation of an offer to buy to residents of any state or province in which registration and other legal requirements have not been fulfilled. Pricing does not include options, elevation, or lot premiums, effective date of publication and subject to change without notice. All square footages and measurements are approximate and subject to change without notice. Features and plans subject to change without notice. Views not guaranteed and may change over time. Floor plans, maps and renderings are artist&apos;s conception based on preliminary information, not to scale and subject to change. Home pictured may not be actual home for sale or actual model home, but rather a representation of a similar model or elevation design. Models are not an indication of racial preference.<br /> Trademarks are property of their respective owners. Equal Housing Opportunity. Copyright &copy; {currentYear}, Shea Homes. All rights reserved. Powered by Milesbrand.
                            </p>
                        </div>

                        <div className={styles.accessibilityBlock}>
                            <p className={`m-0 ${styles.accessibilityText}`}>
                                Shea Homes is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards. We welcome your feedback on the accessibility of <a href="https://sheahomes.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>SheaHomes.com</a>. Please let us know if you encounter accessibility barriers by emailing <a href="mailto:info@sheahomes.com" className={styles.footerLink}>info@sheahomes.com</a>.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};