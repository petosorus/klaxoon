import { Bookmark, NEW_BOOKMARK, BookmarkActionTypes } from './types'

export function createBookmark(newBookmark: Bookmark): BookmarkActionTypes {
    return {
        type: NEW_BOOKMARK,
        payload: newBookmark
    }
}