import { useState } from "react";
import { Button } from "../Button/Button";

import styles from "./PictureCard.module.css";

type PictureCardProps = {
    photographer: string;
    url: string;
    id: number;
};

const PictureCard = ({ photographer, url, id }: PictureCardProps): JSX.Element => {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);
    const [favouriteStatus, setFavouriteStatus] = useState<string | boolean>(localStorage.getItem(id.toString()) || false);

    const onMouseAction = (show: boolean) => () => {
        setShowOverlay(show);
    };

    const handleFavourite = () => {
        if (!favouriteStatus) {
            setFavouriteStatus((prev) => !prev);
            localStorage.setItem(id.toString(), id.toString());
        } else {
            setFavouriteStatus((prev) => !prev);
            localStorage.removeItem(id.toString());
        }
    };

    return (
        <div className={styles.container} onMouseEnter={onMouseAction(true)} onMouseLeave={onMouseAction(false)}>
            <img alt={`${photographer}-picture`} className={styles.image} loading='lazy' src={url} />
            <div className={showOverlay ? styles.mouseOn : styles.mouseOff}>
                <p>{photographer}</p>
                <hr className={styles.line} />
                <Button className={styles.button} onClick={handleFavourite}>
                    {favouriteStatus ? 'Unfavourite' : 'Favourite'}
                </Button>
            </div>
        </div>
    );
};

export { PictureCard };
