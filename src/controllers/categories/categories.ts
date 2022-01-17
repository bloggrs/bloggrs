import http, { get } from "../../fetch"
import qs from "../../qs";

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
        const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/blogs/${BlogId}/categories?${query}`
        const { data: { categories } } = await get<any>(endpoint) 
        return categories;
    }
})