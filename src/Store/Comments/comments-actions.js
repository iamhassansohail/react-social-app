// Action Types
import * as Actions from './comments-action-types';
// Library
import axios from "axios";


// Get All Comments
export const getAllCommentsByPostId = (postId) => {
    return ((dispatch) => {
        dispatch(_setProcessing(true));

        axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .then(res => {

                console.log("All COmmenst Response" , res.data);

                dispatch(_setComments(res.data));
                dispatch(_setError(false));
                dispatch(_setProcessing(false));

            })
            .catch(err => {
                console.error(err);

                dispatch(_setError(true));
                dispatch(_setProcessing(false));

            });
    });
}



// Dispatch Actions
const _setProcessing = (payload) => {
    return {
        type: Actions.SET_PROCESSING,
        payload
    }
}
const _setError = (payload) => {
    return {
        type: Actions.SET_ERROR,
        payload
    }
}
const _setComments = (payload) => {
    return {
        type: Actions.SET_COMMENTS,
        payload
    }
}