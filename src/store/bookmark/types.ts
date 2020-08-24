export const NEW_BOOKMARK = 'NEW_BOOKMARK'
export const ADD_TAG = 'ADD_TAG'

interface NewBookmarkAction {
    type: typeof NEW_BOOKMARK
    payload: Bookmark
}

interface AddTagAction {
    type: typeof ADD_TAG
    payload: {
        tag: string,
        index: number
    }
}

export type BookmarkActionTypes = NewBookmarkAction | AddTagAction

export interface Tag {
    name: string
}

export interface Bookmark {
    url: string
    title: string
    author: string
    date: Date
    height: number
    width: number
    duration: number // A picture bookmark will have a duration of 0
    tags: Array<Tag>
}

export interface BookmarkState {
    bookmarks: Bookmark[]
}