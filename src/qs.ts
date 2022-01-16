

const qs = {
    stringify: undefined
}

qs.stringify = function(obj: any): URLSearchParams {
    
    const keys = Object.keys(obj);
    const new_obj: any = {};
    for (let key of keys) {
        const value = obj[key];
        if (value) new_obj[key] = value;
    }
    return new URLSearchParams(new_obj);
}

export default qs;