import { useState } from "react";

import styles from "./PictureCard.module.css";

type PictureCardProps = {
    photographer: string;
    url: string;
}

const PictureCard = ({ photographer, url }: PictureCardProps): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState(false);

    const onMouseAction = (show: boolean) => () => {
        setShowOverlay(show);
    };

    return (
        <div className={styles.container} onMouseEnter={onMouseAction(true)} onMouseLeave={onMouseAction(false)}>
            <img alt={`${photographer}-picture`} className={styles.image} loading='lazy' src={url} />
            <div className={styles.overlay}>
                {photographer}
            </div>
        </div>
    );
};

export { PictureCard };

