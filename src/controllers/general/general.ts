import http, { get } from "../../fetch"
import qs from "../../qs";


export const general = ({ serverUrl, BlogId }: any) => ({
    getBlogHeaderWidgetData: async (): Promise<any> => {
        const endpoint = serverUrl + `/blogs/${BlogId}/header-widget-data`
        const { data } = await get<any>(endpoint)
        return data;
    }
})