import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users-slice";
import postsReducer from "./posts-slice";
import dialogReducer from "./dialog-slice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        dialog: dialogReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
