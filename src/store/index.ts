import { combineReducers, createStore } from 'redux'
import { bookmarkReducer } from './bookmark/reducers'
import { BookmarkState } from './bookmark/types'

export interface RootState {
    bookmark: BookmarkState
}

const store = createStore<RootState, any, any, any>(
    combineReducers({
        bookmark: bookmarkReducer
    })
)

export default store

