import { getPictures } from "../api/pictures/getPictures";
import { useState, useEffect, useCallback } from "react";
import { PexelsPicture } from "../types/types";

const useFetch = (page: number) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [list, setList] = useState<PexelsPicture[]>([]);


    const sendQuery = useCallback(async (page: any) => {
        try {
            setLoading(true);
            setError(false);
            const data = await getPictures(page);
            setList((prev) => [...prev, ...data.photos]);
            setLoading(false);
        } catch (err) {
            setError(err as boolean)
        }
    }, [page]);

    useEffect(() => {
        sendQuery(page);
    }, [page]);

    return { loading, error, list };

};

export { useFetch };