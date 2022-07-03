import http, { get, post } from "../../fetch"

export const postlikes = ({ serverUrl, BlogId }: any) => ({
    createPostLike: async ({ PostId }: any): Promise<any> => {
        const endpoint = serverUrl + `/postlikes`
        const { data: { PostLike } }: any = await post(endpoint, { PostId }, {
            headers: {'Content-Type': 'application/json'},
        }) 
        return PostLike
    }
})
