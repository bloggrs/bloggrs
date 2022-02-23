import http, { get } from "../../fetch"
import qs from "../../qs";

// type CategoriesRequestOptions = {
//     page: number;
//     pageSize: number;
//     status: string;
//     query: string
// }

export const auth = ({ serverUrl, BlogId }: any) => ({
    getAuth: async (options: any): Promise<any> => {
        // const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/auth`
        const { data: { user, token } } = await get<any>(endpoint);
        localStorage.setItem("bloggrs::token", token)
        return { user, token };
    }
})