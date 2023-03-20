import { API_KEY } from '../shared/constants';
import { PexelsPictures } from '../../types/types';

const getPictures = async (page: number): Promise<PexelsPictures> => {

    const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=80`, {
        headers: {
            Authorization: API_KEY
        }
    });

    let data = await response.json();

    return data;

};

export { getPictures };
