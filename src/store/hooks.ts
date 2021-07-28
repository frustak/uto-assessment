import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Post, User } from "../api/schemas";
import { closeDialog, openDialog } from "./dialog-slice";
import type { RootState, AppDispatch } from "./index";
import { fetchPosts, setUser } from "./posts-slice";
import { fetchUsers } from "./users-slice";
import * as api from "../api";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchUsers = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
};

export const useGetUsers = () => {
    const users = useAppSelector((state) => state.users.items);
    return users;
};

export const useFetchPosts = () => {
    const dispatch = useAppDispatch();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    useEffect(() => {
        if (!selectedUser) return;
        dispatch(setUser(selectedUser));
        dispatch(fetchPosts());
    }, [dispatch, selectedUser]);

    return { selectedUser, setSelectedUser };
};

export const useGetPosts = () => {
    const posts = useAppSelector((state) => state.posts.items);
    return posts;
};

export const useGetUser = () => {
    const user = useAppSelector((state) => state.posts.user);
    return user;
};

export const useDialog = () => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector((state) => state.dialog.isOpen);
    const open = () => dispatch(openDialog());
    const close = () => dispatch(closeDialog());

    return { isOpen, open, close };
};

export const useEditPost = () => {
    const history = useHistory();
    const dialog = useDialog();

    const cancel = () => {
        history.goBack();
    };

    const save = async (post: Post) => {
        try {
            await api.updatePost(post);
            dialog.open();
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return { cancel, save };
};
