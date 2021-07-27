import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import * as api from "../api";
import { Post } from "../api/schemas";

type PostsState = {
    items: Post[];
};

const initialState: PostsState = {
    items: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.items = action.payload;
        },
    },
});

export const { setPosts } = postsSlice.actions;

export const fetchPosts = () => async (dispatch: AppDispatch) => {
    const posts = await api.getPosts();
    dispatch(setPosts(posts));
};

export default postsSlice.reducer;
