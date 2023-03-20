import { useState, useRef, useCallback, useEffect } from "react";
import { PictureCard } from "./components/PictureCard/PictureCard";
import { useFetch } from "./hooks/useFetch";


function App() {

  const [page, setPage] = useState(1);
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
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <>
      <div>
        {list.map((item, i) => (
          <PictureCard key={i} url={item.src.medium} photographer={item.photographer} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </>

  )
};

export default App;
