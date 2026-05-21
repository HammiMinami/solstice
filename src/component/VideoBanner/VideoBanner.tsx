"use client";
import React, { useState, useEffect } from 'react';
import styles from './VideoBanner.module.scss';

interface VideoBannerProps {
    videoUrl: string;
    backgroundImage?: string;
    ariaLabel?: string;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({
    videoUrl,
    backgroundImage,
    ariaLabel
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsClient(true);
    }, []);

    return (
        <section className="container-fluid px-0 my-3">
            <div className="px-0">
                <div className="justify-content-center">
                    <div className="col-12">
                        <div
                            className={`${styles.videoRatioWrapper} shadow-sm`}
                            style={isClient && isPlaying ? undefined : { backgroundImage: `url(${backgroundImage})` }}
                        >
                            {isClient && isPlaying ? (
                                <iframe
                                    src={videoUrl}
                                    title="Video playback player"
                                    style={{ border: 0 }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className={styles.videoFrame}
                                ></iframe>
                            ) : (
                                <div className={styles.videoOverlay}>
                                    <button
                                        type="button"
                                        className={styles.playButton}
                                        onClick={() => setIsPlaying(true)}
                                        aria-label={ariaLabel}
                                    >
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};