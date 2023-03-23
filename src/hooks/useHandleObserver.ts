import { useCallback, useEffect, useRef } from "react";

export const UseHandleObserver = (setPage: any) => {

  const loader = useRef(null);

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage: number) => prevPage + 1);
    }
  }, []);

  useEffect(() => {

    const option = {
      root: null,
      rootMargin: "0px 0px 300px 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, option);


    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return { loader };
}