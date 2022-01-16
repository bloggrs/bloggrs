import http, { get } from "../../fetch"

type CategoriesRequestOptions = {
    page: number;
    pageSize: number;
    status: string;
    query: string
}

export const categories = ({ serverUrl, BlogId }: any) => ({
    getCategories: async (options: CategoriesRequestOptions={
        page: 1,
        pageSize: 3,
        status: undefined,
        query: undefined
    }): Promise<any> => {
        const params: any = { ...options, BlogId };
        const query: any = new URLSearchParams(params);
        const endpoint = serverUrl + '/categories?' + query
        const categories = await get(endpoint)
        return categories;
    }
})