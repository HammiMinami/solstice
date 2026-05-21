import React from 'react';
import styles from "./Collections.module.scss";

export interface CollectionItem {
    id: string | number;
    tagline: string;
    title: string;
    specs: {
        sqFt: string;
        beds: string;
        baths: string;
    };
    description: string;
    imageUrl: string;
    imageAlt: string;
}

interface CollectionsProps {
    collections: CollectionItem[];
}

export const Collections: React.FC<CollectionsProps> = ({ collections }) => {
    return (
        <section className={`container-fluid ${styles.collectionsSection}`}>

            <div className={`container mb-5 ${styles.collectionIntro}`}>
                <h2>Ranch Living, <br />In Rhythm With Nature. </h2>
                <h3>New Homes from the $700s</h3>
                <p>Welcome home to a quieter corner of Littleton.
                    Tucked along the High Line Canal, Solstice is a boutique community from Shea Homes, set within a natural landscape that feels both peaceful and connected.
                    With Chatfield Lake and the Front Range nearby, Solstice is a place where getting outside is part of the everyday, and where each season brings its own rhythm to life.</p>
            </div>

            <div className="container px-2 px-md-0 my-5">
                <div className="row g-4 justify-content-center">
                    {collections.map((item) => {
                        return (
                            <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                <div className={`h-100 d-flex flex-column ${styles.collectionRow}`}>

                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={item.imageUrl}
                                            alt={item.imageAlt}
                                            className="img-fluid w-100 h-100"
                                        />
                                    </div>

                                    <div className={`d-flex flex-column flex-grow-1 ${styles.contentCol}`}>
                                        <span className={`mb-1 ${styles.tagline}`}>
                                            {item.tagline}
                                        </span>
                                        <h2 className={`text-uppercase fw-normal mb-2 ${styles.title}`}>
                                            {item.title}
                                        </h2>

                                        <div className={`flex-wrap align-items-center gap-2 mb-3 ${styles.specsRow}`}>
                                            {item.specs.sqFt && (
                                                <>
                                                    <span>{item.specs.sqFt} Sq. Ft.</span>
                                                    <span className={styles.divider}> | </span>
                                                </>
                                            )}
                                            {item.specs.beds && (
                                                <>
                                                    <span>{item.specs.beds} Beds</span>
                                                    <span className={styles.divider}> | </span>
                                                </>
                                            )}
                                            {item.specs.baths && (<span>{item.specs.baths} Baths</span>)}
                                        </div>

                                        <p className={`mb-0 ${styles.description}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )

};