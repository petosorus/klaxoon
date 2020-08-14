export interface FlickrSizes {
    size: Array<FlickrSize>
}

interface FlickrSize {
    label: string,
    width: number,
    height: number
}