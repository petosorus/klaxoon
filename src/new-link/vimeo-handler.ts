import axios from 'axios';
import { VimeoLink } from '../store/links/types';

const flickrApi: string = "https://www.flickr.com/services/rest/"
const flickrApiInformation: string = `${flickrApi}?method=flickr.photos.getInfo`

function parseURL(url: string): string {
    return url.split('/')[5];    
}

function getInformation(id: string) {
    return axios.get<VimeoLink>(`${flickrApiInformation}&photo_id=${id}`)
}

async function getLink(url: string): Promise<VimeoLink> {
    const id =  parseURL(url);
    return (await getInformation(id))['data'];
}

export {
    getLink
}