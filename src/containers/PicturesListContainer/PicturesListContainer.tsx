import { useState, useRef, useCallback, useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { PictureCard } from "../../components/PictureCard/PictureCard";
import { useFetch } from "../../hooks/useFetch";

import styles from './PicturesListContainer.module.css';

export const PicturesListContainer = (): JSX.Element => {

  const [page, setPage] = useState<number>(1);
  const { loading, error, list } = useFetch(page);
  const loader = useRef(null);

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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
