// Redux
import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';
// Stores
import post from './Post/post-reducer';
import comments from './Comments/comment-reducer';

const reducer = combineReducers({
    post,
    mereComments: comments
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(
        applyMiddleware(thunk)
    )
);


export default store;