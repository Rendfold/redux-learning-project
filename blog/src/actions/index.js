import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_post';

export const HOST_API = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Rendfold'

export function fetchPosts () {
    const request = axios.get(`${HOST_API}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost (values) {
    const request = axios.post(`${HOST_API}/posts${API_KEY}`, values);

    return {
        type: CREATE_POSTS,
        payload: request
    };
}