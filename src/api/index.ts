import axios from "axios";
import { User } from "./schemas";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_ADDRESS,
});

export async function getUsers(): Promise<User[]> {
    const response = await instance.get("/users");
    return response.data;
}
