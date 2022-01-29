

let _localStorage: any = null;

// any = typeof window === 'undefined' ? {
//     getItem: (key): any => process.env[key],
//     setItem: (key, value): any => process.env[key] = value,
// } : localStorage
if (typeof window === "undefined") {
    process.env.__bloggrs__ = "{}"

    const getState = () => JSON.parse(process.env.__bloggrs__)
    const setState = (obj: any) => process.env.__bloggrs__ = JSON.stringify(obj);

    const getItem: any = (key: any) => getState()[key]
    const setItem: any = (key: any, value: any) => {
        const state = getState();
        state[key] = value;
        console.log("new" , process.env.__bloggrs__)
        setState(state);
    }

    _localStorage = { getItem, setItem }
} else _localStorage = localStorage;

export default _localStorage;
