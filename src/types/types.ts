export interface PexelsPictures {
    page: number;
    per_page: number;
    photos: PexelsPicture[];
}

export interface PexelsPicture {
    url: string;
    photographer: string;
    src: {
        medium: string;
    }

}