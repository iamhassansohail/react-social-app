// Action Types
import * as Actions from './post-action-types';
// Initial State
const initialState = {
    processing: false,
    error: false,
    allPost: [],
    singlePost: {}
};
// Reducer
const reducer = (state = initialState, action) => {

    const newState = {...state};
    const {type, payload} = action;

    switch (type) {

        case Actions.SET_PROCESSING:
            newState.processing = payload;
            break;

        case Actions.SET_ERROR:
            newState.error = payload;
            break;

        case Actions.SET_POSTS:
            newState.allPost = payload;
            break;

        case Actions.SET_SINGLE_POSTS:
            newState.singlePost = payload;
            break;

        default:
            break;

    }

    return newState;
}


export default reducer;