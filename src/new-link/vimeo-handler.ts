import axios from 'axios';
import { Bookmark } from '../store/bookmark/types';

const flickrApi: string = "https://www.flickr.com/services/rest/"
const flickrApiInformation: string = `${flickrApi}?method=flickr.photos.getInfo`

function parseURL(url: string): string {
    return url.split('/')[5];    
}

function getInformation(id: string) {
    return axios.get<Bookmark>(`${flickrApiInformation}&photo_id=${id}`)
}

async function getLink(url: string): Promise<Bookmark> {
    const id =  parseURL(url);
    return (await getInformation(id))['data'];
}

export {
    getLink
}