import { FETCH_POSTS, ADD_POST } from '../actions/types';


const initialState = {
    posts: [],
    post: {}
};

export default function(state = initialState, action) {
    const type = action.type;
    switch (type) {
        case FETCH_POSTS:
            return {
                ...state, 
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload,...state.posts]
            }
        default:
            return state;
    }
}