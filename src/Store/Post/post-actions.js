// Action Types
import * as Actions from './post-action-types';
// Library
import axios from "axios";

// Get All Posts
export const getAllPost = () => {

    return ((dispatch) => {

        dispatch(_setProcessing(true));

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log("Res", res);

                dispatch(_setPost(res.data));
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
// Get Single Post
export const getPostById = (id) => {
    return ((dispatch) => {
        dispatch(_setProcessing(true));
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => {
                console.log("Res", res);

                dispatch(_setSinglePost(res.data));
                dispatch(_setError(false));
                dispatch(_setProcessing(false));

            })
            .catch(err => {
                console.error(err);


                dispatch(_setError(true));
                dispatch(_setProcessing(false));
            })


    })
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
const _setPost = (payload) => {
    return {
        type: Actions.SET_POSTS,
        payload
    }
}
const _setSinglePost = (payload) => {
    return {
        type: Actions.SET_SINGLE_POSTS,
        payload
    }
}