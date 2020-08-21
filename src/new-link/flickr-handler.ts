import axios from 'axios';
import { FlickrSizes, FlickrSize } from '../types/flickr/flickr-sizes';
import { FlickrInformation } from '../types/flickr/flickr-information';
import { Link } from '../store/links/types';

const flickrApi: string = `https://www.flickr.com/services/rest/?format=json&api_key=${process.env.REACT_APP_FLICKR_API_KEY}`
const flickrApiSizes: string = `${flickrApi}&method=flickr.photos.getSizes`
const flickrApiInformation: string = `${flickrApi}&method=flickr.photos.getInfo`

function parseURL(url: string): string {
    return url.split('/')[5];    
}

function getSizes(id: string) {
    return axios.get<FlickrSizes>(`${flickrApiSizes}&photo_id=${id}`)
}

function getInformation(id: string) {
    return axios.get<FlickrInformation>(`${flickrApiInformation}&photo_id=${id}`)
}

async function getLink(url: string): Promise<Link> {
    const id =  parseURL(url);
    const sizes: FlickrSizes = (await getSizes(id))['data'];
    const originalSize: FlickrSize = find(sizes, (size: any) => {
        return size["Label"] === "Original"
    })
    const information: FlickrInformation = (await getInformation(id))['data'];

    return {
        title: information.title._content,
        author: information.owner.username,
        url: information.url._content,
        date: information.dates.posted,
        height: originalSize.height,
        width: originalSize.width
    }
}

export {
    getLink
}