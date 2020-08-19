import { combineReducers, createStore } from 'redux';
import { linkReducer } from './links/reducers'
import { LinkState } from './links/types';

export interface RootState {
    link: LinkState
}

const store = createStore<RootState, any, any, any>(
    combineReducers({
        link: linkReducer
    })
);

export default store;

