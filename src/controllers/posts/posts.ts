import http, { get, post } from "../../fetch"
import qs from "../../qs";

type PostsRequestOptions = {
    page: number;
    pageSize: number;
    status: string;
    query: string;
    categories: string;
}

export const posts = ({ serverUrl, BlogId }: any) => ({
    getPost: async (PostId: any): Promise<any> => {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}`
        const { data: { post } } = await get<any>(endpoint) 
        return post;
    },
    getPostComments: async (PostId: any): Promise<any> => {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}/comments`
        const { data: { comments } } = await get<any>(endpoint) 
        return comments;
    },
    getPosts: async (options: PostsRequestOptions={
        page: 1,
        pageSize: 3,
        query: undefined,
        categories: undefined,
        status: undefined
    }): Promise<any> => {
        const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/blogs/${BlogId}/posts?${query}`
        const { data: { posts } } = await get<any>(endpoint) 
        return posts;
    },
    likePostHandler: async ({ PostId, action }: any): Promise<any> => {
        const endpoint = serverUrl + `/blogs/${BlogId}/posts/${PostId}/${action}`
        const { message }: any = await post(endpoint) 
        return message === "success"
    }
})