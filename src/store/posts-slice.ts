import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from ".";
import * as api from "../api";
import { Post, User } from "../api/schemas";

type PostsState = {
    user: User | null;
    items: Post[];
};

const initialState: PostsState = {
    user: null,
    items: [],
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.items = action.payload;
        },
    },
});

export const { setUser, setPosts } = postsSlice.actions;

export const fetchPosts =
    () => async (dispatch: AppDispatch, getState: () => RootState) => {
        const user = getState().posts.user;
        if (!user) {
            dispatch(setPosts([]));
        } else {
            const posts = await api.getPosts(user.id);
            dispatch(setPosts(posts));
        }
    };

export default postsSlice.reducer;
