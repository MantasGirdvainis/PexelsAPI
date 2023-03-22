import { API_KEY } from '../shared/constants';
import { PexelsPictures } from '../../types/types';

const PER_PAGE_COUNT = 10

export const getPictures = async (page: number): Promise<PexelsPictures> => {

    const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=${PER_PAGE_COUNT}`, {
        headers: {
            Authorization: API_KEY
        }
    });

    const data = await response.json();

    return data;

};
