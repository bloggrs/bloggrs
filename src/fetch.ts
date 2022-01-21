
export default async function http<T>(path: string, config: RequestInit): Promise<T> {
  // config.body = JSON.stringify({ aa: "dsadadsa"})
    const token = localStorage.getItem("bloggrs::token")
    const request = new Request(path, {
      ...config,
      headers: {
        ...(config.headers || {}),
        ...(token ? { "Authorization": "Bearer " + token } : {})
      }
    })
    console.log(request)
    const response = await fetch(request)
  
    if(!response.ok) {
      throw new Error(response.statusText);
    }
  
    // may error if there is no body, return empty array
    return response.json().catch(() => ({}))
  }
  
  export async function get<T>(path: string, config?: RequestInit): Promise<T> {
    const init = {method: 'get', ...config}
    return await http<T>(path, init)
  }
  
  export async function post<T, U>(path: string, body?: T, config?: RequestInit): Promise<U> {
    const init = {method: 'post', body: JSON.stringify(body), ...config}
    console.log({init,body})
    return await http<U>(path, init)
  }
  
  export async function put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
    const init = {method: 'put', body: JSON.stringify(body), ...config}
    return await http<U>(path, init)
  }
  


export type Todo = {
    userId: number
    id: string
    title: string
    completed: boolean
}
