import { LinkState, LinkActionTypes, NEW_LINK } from "./types";

const initialState: LinkState = {
    links: []
}

export function linkReducer(
    state = initialState,
    action: LinkActionTypes
): LinkState {
    if (action.type === NEW_LINK) {
        return {
            links: [...state.links, action.payload]
        }
    } else {
        return state
    }
}