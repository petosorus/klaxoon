import { BookmarkState, BookmarkActionTypes, NEW_BOOKMARK } from "./types"

const initialState: BookmarkState = {
    bookmarks: []
}

export function bookmarkReducer(
    state = initialState,
    action: BookmarkActionTypes
): BookmarkState {
    if (action.type === NEW_BOOKMARK) {
        return {
            bookmarks: [...state.bookmarks, action.payload]
        }
    } else {
        return state
    }
}