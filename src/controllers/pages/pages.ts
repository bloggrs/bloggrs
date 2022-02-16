import http, { get } from "../../fetch"
import qs from "../../qs";

type PagesRequestOptions = {
    page: number;
    pageSize: number;
    status: string;
    query: string
}

export const pages = ({ serverUrl, BlogId }: any) => ({
    getPages: async (options: PagesRequestOptions={
        page: 1,
        pageSize: 3,
        status: undefined,
        query: undefined
    }): Promise<any> => {
        const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/blogs/${BlogId}/pages?${query}`
        console.log({query, endpoint, serverUrl, BlogId})
        const { data: { pages } } = await get<any>(endpoint) 
        return pages;
    },
    getPageBySlug: async ({ slug }: any={
        slug: undefined,
    }): Promise<any> => {
        const endpoint = serverUrl + `/blogs/${BlogId}/pages/${slug}`
        const { data: { page } } = await get<any>(endpoint) 
        return page;
    }
})