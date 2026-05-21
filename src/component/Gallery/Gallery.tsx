import React from 'react';
import styles from './Gallery.module.scss';
import ContactLeadForm from '../ContactLeadForm/ContactLeadForm';

export interface GalleryImage {
    id: string | number;
    imageUrl: string;
    imageAlt: string;
}

interface GalleryProps {
    onButtonClick?: () => void;
    images: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({
    onButtonClick,
    images
}) => {
    return (
        <section className={`container-fluid px-0 ${styles.gallerySection}`}>
            <div className="container text-center my-5 px-3">
                <h2 className={`text-uppercase mb-3 ${styles.mainHeading}`}>
                    HOME SWEET HIGH LINE
                </h2>
                <p className={`mx-auto mt-5 mb-4 ${styles.leadParagraph}`}>
                    Perfectly situated near the southernmost point of the High Line Canal,<br />Solstice is a boutique community from Shea Homes®,<br />rooted in nature, home, and family.
                </p>
                <button
                    type="button"
                    onClick={onButtonClick}
                    className={`btn text-uppercase px-4 py-2 ${styles.ctaButton}`}
                >
                    DOWNLOAD BROCHURE
                </button>
            </div>

            <ContactLeadForm />

            <div className="container-fluid px-0 mt-5">
                <div className={`container row gx-1 gy-0 p-0 flex-nowrap ${styles.horizontalScrollRow}`}>
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className="col-8 col-sm-5 col-md-4 col-lg-3 p-0 flex-shrink-0"
                        >
                            <div className={styles.imageCard}>
                                <div className={styles.aspectRatioFiller}>
                                    <img
                                        src={img.imageUrl}
                                        alt={img.imageAlt}
                                        className={styles.galleryImg}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};