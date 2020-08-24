import { Bookmark, NEW_BOOKMARK, BookmarkActionTypes, ADD_TAG } from './types'

export function createBookmark(newBookmark: Bookmark): BookmarkActionTypes {
    return {
        type: NEW_BOOKMARK,
        payload: newBookmark
    }
}

export function addTag(tag: string, index: number): BookmarkActionTypes {
    return {
        type: ADD_TAG,
        payload: {
            tag: tag,
            index: index
        }
    }
}