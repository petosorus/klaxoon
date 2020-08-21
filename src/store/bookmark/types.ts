export const NEW_BOOKMARK = 'NEW_BOOKMARK'

interface NewBookmarkAction {
    type: typeof NEW_BOOKMARK
    payload: Bookmark
}

export type BookmarkActionTypes = NewBookmarkAction

export interface Bookmark {
    url: string
    title: string
    author: string
    date: Date
    height: number
    width: number
    duration: number // A picture bookmark will have a duration of 0
}

export interface BookmarkState {
    bookmarks: Bookmark[]
}