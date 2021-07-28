import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { User } from "../api/schemas";
import type { RootState, AppDispatch } from "./index";
import { fetchPosts, setUser } from "./posts-slice";
import { fetchUsers } from "./users-slice";

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
