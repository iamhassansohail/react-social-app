// Actions Types
import * as Actions from './comments-action-types';
// Initial State
const initialState = {
    processing: false,
    error: false,
    comments: []
}
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

        case Actions.SET_COMMENTS:
            newState.comments = payload;
            break;

        default:
            break;
    }


    return newState;
}

export default reducer;