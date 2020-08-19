import { Link, NEW_LINK, LinkActionTypes } from './types'

export function createLink(newLink: Link): LinkActionTypes {
    return {
        type: NEW_LINK,
        payload: newLink
    }
}