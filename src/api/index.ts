import axios from "axios";
import { Post, User } from "./schemas";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_ADDRESS,
});

export async function getUsers(): Promise<User[]> {
    const response = await instance.get("/users");
    return response.data;
}

export async function getPosts(userId: number): Promise<Post[]> {
    const response = await instance.get(`/users/${userId}/posts`);
    return response.data;
}

export async function updatePost(post: Post): Promise<Post[]> {
    const response = await instance.put(`/posts/${post.id}`, post);
    return response.data;
}
