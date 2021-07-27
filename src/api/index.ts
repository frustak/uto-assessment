import axios from "axios";
import { Post } from "./schemas";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_ADDRESS,
});

export async function getPosts(): Promise<Post[]> {
    const response = await instance.get("/posts");
    return response.data;
}

export async function updatePost(newPost: Post): Promise<Post> {
    const response = await instance.put(`/posts/${newPost.id}`, newPost);
    return response.data;
}
