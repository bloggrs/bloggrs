import http, { get, post } from "../../fetch"

export const blogcontacts = ({ serverUrl, BlogId }: any) => ({
    createBlogContact: async ({ 
        first_name, last_name, email, content
     }: any): Promise<any> => {
        const endpoint = serverUrl + `/blogcontacts`
        const { data: { blogcontact } }: any = await post(endpoint, { 
            first_name, last_name, email, content, BlogId
         }, {
            headers: {'Content-Type': 'application/json'},
        })
        return blogcontact
    }
});
