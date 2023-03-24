import { useCallback, useEffect, useRef } from "react";

export const useHandleObserver = (
  setPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const ref = useRef(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage: number) => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px 0px 300px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (ref.current) observer.observe(ref.current);
  }, [handleObserver]);

  return { ref };
};
