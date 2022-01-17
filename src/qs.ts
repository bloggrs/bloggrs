

const qs = {
    stringify: undefined
}

qs.stringify = function(obj: any): string {
    const keys = Object.keys(obj);
    const new_obj: any = {};
    keys.forEach(key => {
        const value = obj[key];
        if (value) new_obj[key] = value;
    })
    return new URLSearchParams(new_obj).toString();
}

export default qs;