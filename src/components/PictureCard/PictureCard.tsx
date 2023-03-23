import { useState } from "react";
import { Button } from "../Button/Button";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import styles from "./PictureCard.module.css";

type PictureCardProps = {
    photographer: string;
    url: string;
    id: number;
};

export const PictureCard = ({ photographer, url, id }: PictureCardProps): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

    const pictureId = id;
    const pictureValue = photographer;

    const { itemStatus, saveItem, removeItem } = useLocalStorage(pictureId, pictureValue);

    const onMouseAction = (show: boolean) => () => {
        setShowOverlay(show);
    };

    return (
        <div className={styles.container} onMouseEnter={onMouseAction(true)} onMouseLeave={onMouseAction(false)}>
            <img alt={`${photographer}-picture`} className={styles.image} loading='lazy' src={url} />
            <div className={showOverlay ? styles.actionLayer : [styles.actionLayer, styles.actionLayerHidden, ].join(' ')}>
                <p>{photographer}</p>
                <hr className={styles.line} />
                <Button className={styles.button} onClick={itemStatus ? removeItem : saveItem }>
                    {itemStatus ? 'Unfavourite' : 'Favourite'}
                </Button>
            </div>
        </div>
    );
};

