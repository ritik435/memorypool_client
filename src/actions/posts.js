import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (err) {
        console.log("actions", err.message);
    }
}
// export const getPostBySearch = (searchQuery) => async (dispatch) => {
//     try {
//         const { data } = await api.fetchPostBySearch(searchQuery)
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log("post create error");
        console.log(error);
    }
};


export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};