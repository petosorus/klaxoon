import { BookmarkState, BookmarkActionTypes, NEW_BOOKMARK, ADD_TAG } from "./types";

const initialState: BookmarkState = {
    bookmarks: []
}

export function bookmarkReducer(
    state = initialState,
    action: BookmarkActionTypes
): BookmarkState {
    switch(action.type) {
        case NEW_BOOKMARK:
            return {
                bookmarks: [...state.bookmarks, action.payload]
            }
        case ADD_TAG:
            const bookmarks = state.bookmarks.slice()
            const bookmark = bookmarks[action.payload.index]
            bookmark.tags.push({
                name: action.payload.tag
            })
            return {
                bookmarks: bookmarks
            }
        default: 
            return state
    }
}