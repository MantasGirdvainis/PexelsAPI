import { useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { PictureCard } from "../../components/PictureCard/PictureCard";
import { useFetch } from "../../hooks/useFetch";
import { UseHandleObserver } from "../../hooks/useHandleObserver";


import styles from './PicturesListContainer.module.css';

export const PicturesListContainer = (): JSX.Element => {

  const [page, setPage] = useState<number>(1);
  const { loading, error, list } = useFetch(page);
  const { loader } = UseHandleObserver(setPage);

  return (
    <>
      <div className={styles.picturesListContainer}>
        {list.map((item, i) => (
          <PictureCard key={i} url={item.src.large} photographer={item.photographer} id={item.id} />
        ))}
      </div>
      <div ref={loader} />
      <div className={styles.status}>
        {loading && <Loader />}
        {error && <p className={styles.error}>Error!</p>}
      </div>
    </>
  )
};
