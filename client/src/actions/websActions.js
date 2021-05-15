import axios from 'axios'
import { 
    FETCH_POSTS,
    ADD_POST 
}
from 
'../actions/types';

export const fetchPosts = () => async dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data
        }))
}

export const addPost = (formData) => async dispatch => {
    axios.post("https://jsonplaceholder.typicode.com/posts", formData)
    .then(res => dispatch({
        type: ADD_POST,
        payload: res.data
    }))
}