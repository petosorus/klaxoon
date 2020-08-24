import axios from 'axios';
import { Bookmark } from '../store/bookmark/types';
import { VimeoInformation } from '../types/vimeo/vimeo-information';

const vimeoApi: string = "https://api.vimeo.com/"
const vimeoApivideo: string = `${vimeoApi}/videos/`

function parseURL(url: string): string {
    return url.split('/')[3];
}

function getInformation(id: string) {
    return axios.get<VimeoInformation>(`${vimeoApivideo}/${id}`, {
        headers: {
            Authorization: 'Bearer ' + process.env.REACT_APP_VIMEO_API_KEY
        }
    })
}

async function getBookmark(url: string): Promise<Bookmark> {
    const id =  parseURL(url);
    const information = (await getInformation(id))['data'];

    return {
        title: information.name,
        author: information.user.name,
        url: information.link,
        date: new Date(information.release_time),
        height: information.height,
        width: information.width,
        duration: information.duration
    }
}

export {
    getBookmark
}