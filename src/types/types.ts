export interface PexelsPictures {
    page: number;
    per_page: number;
    photos: PexelsPicture[];
};

export interface PexelsPicture {
    id: number;
    url: string;
    photographer: string;
    src: {
        large: string;
    }
};