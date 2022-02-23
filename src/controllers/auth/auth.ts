import http, { get } from '../../fetch';
import qs from '../../qs';
import _localStorage from '../../localStorage';

// type CategoriesRequestOptions = {
//     page: number;
//     pageSize: number;
//     status: string;
//     query: string
// }

export const auth = ({ serverUrl, BlogId }: any) => ({
    getAuth: async (options: any): Promise<any> => {
        // const query: string = qs.stringify(options)
        const endpoint = serverUrl + `/auth`;
        const { data: { user, token } } = await get<any>(endpoint);
        _localStorage.setItem('bloggrs::token', token);
        _localStorage.setItem('bloggrs::user_id', user.id);
        return { user, token };
    },
    getUserId: () => {
        return _localStorage.getItem('bloggrs::user_id');
    }
});
