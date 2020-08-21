export interface FlickrSizes {
    sizes: {
        size: Array<FlickrSize>
    }
}

export interface FlickrSize {
    label: string,
    width: number,
    height: number
}