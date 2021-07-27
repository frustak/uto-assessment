import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import * as api from "../api";
import { User } from "../api/schemas";

type UsersState = {
    items: User[];
};

const initialState: UsersState = {
    items: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.items = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    const users = await api.getUsers();
    dispatch(setUsers(users));
};

export default usersSlice.reducer;
