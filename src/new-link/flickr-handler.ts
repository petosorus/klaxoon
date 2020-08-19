import axios from 'axios';
import { FlickrSizes } from '../types/flickr/flickr-sizes';
import { FlickrInformation } from '../types/flickr/flickr-information';
import { Link } from '../store/links/types';

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

async function getLink(url: string): Promise<Link> {
    const id =  parseURL(url);
    const sizes: FlickrSizes = (await getSizes(id))['data'];
    const information: FlickrInformation = (await getInformation(id))['data'];
    return {
        author: information.owner.username,
        date: information.dates.posted,
        title: information.title._content,
        url: information.url._content,
        height: 0,
        width: 0
    }
}

export {
    getLink
}