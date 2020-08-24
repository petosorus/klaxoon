import axios from 'axios';
import { FlickrSizes, FlickrSize } from '../types/flickr/flickr-sizes';
import { FlickrInformation } from '../types/flickr/flickr-information';
import { Bookmark } from '../store/bookmark/types';
import { find } from 'lodash';

const flickrApi: string = `https://www.flickr.com/services/rest/?format=json&nojsoncallback=?&api_key=${process.env.REACT_APP_FLICKR_API_KEY}`
const flickrApiSizes: string = `${flickrApi}&method=flickr.photos.getSizes`
const flickrApiInformation: string = `${flickrApi}&method=flickr.photos.getInfo`

function parseURL(url: string): string {
    return url.split('/')[5];    
}

function getSizes(id: string) {
    return axios.get(`${flickrApiSizes}&photo_id=${id}`)
}

function getInformation(id: string) {
    return axios.get<FlickrInformation>(`${flickrApiInformation}&photo_id=${id}`)
}

async function getBookmark(url: string): Promise<Bookmark> {
    const id =  parseURL(url);
    const sizes: FlickrSizes = (await getSizes(id))['data'];
    let retainedSize = find(sizes.sizes.size, (size: FlickrSize) => {
        return size["label"] === "Original"
    })
    if (retainedSize === undefined) {
        retainedSize = find(sizes.sizes.size, (size: FlickrSize) => {
            return size["label"] === "Large"
        })
        if (retainedSize === undefined) {
            throw new Error('No size information found')
        }
    } 

    const information: FlickrInformation = (await getInformation(id))['data'];
    
    return {
        title: information.photo.title._content,
        author: information.photo.owner.username,
        url: information.photo.urls.url[0]._content,
        date: new Date(parseInt(information.photo.dates.posted, 10) * 1000), // We get a timestamp in seconds, Date needs milliseconds
        height: retainedSize.height,
        width: retainedSize.width,
        duration: 0
    }
}

export {
    getBookmark
}