import http, { get, post } from "../../fetch"

export const postcomments = ({ serverUrl, BlogId }: any) => ({
    createPostComment: async ({ PostId, content }: any): Promise<any> => {
        const endpoint = serverUrl + `/postcomments`
        const { data: { postcomment } }: any = await post(endpoint, { PostId, content }, {
            headers: {'Content-Type': 'application/json'},
        }) 
        return postcomment
    }
})
