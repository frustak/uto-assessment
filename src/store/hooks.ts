import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";
import { fetchPosts } from "./posts-slice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useFetchPosts = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};
