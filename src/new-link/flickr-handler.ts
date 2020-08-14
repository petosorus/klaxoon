import axios from 'axios';
import { FlickrSizes } from '../types/flickr/flickr-sizes';
import { FlickrInformation } from '../types/flickr/flickr-information';

const flickrApi: string = "https://www.flickr.com/services/rest/"
const flickrApiSizes: string = `${flickrApi}?method=flickr.photos.getSizes`
const flickrApiInformation: string = `${flickrApi}?method=flickr.photos.getInfo`

function parseURL(url: string): string {
    return url.split('/')[5];    
}

function getSizes(id: string) {
    return axios.get<FlickrSizes>(`${flickrApiSizes}&photo_id=${id}`)
}

function getInformation(id: string) {
    return axios.get<FlickrInformation>(`${flickrApiInformation}&photo_id=${id}`)
}

async function getLink(url: string) {
    const id =  parseURL(url);
    const sizes: FlickrSizes = (await getSizes(id))['data'];
    const information: FlickrInformation = (await getInformation(id))['data'];
}

export {
    getLink
}