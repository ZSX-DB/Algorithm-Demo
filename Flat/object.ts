const getType = (value: any): 1 | 2 | 3 => {
    if (typeof value !== "object") {
        return 1
    } else if (value === null) {
        return 1
    } else if (Array.isArray(value)) {
        return value.length === 0 ? 1 : 2
    } else {
        return Object.values(value).length === 0 ? 1 : 3
    }
}

const flatObject1 = (nestedObj: Record<string, any>, prefix: string = ""): Record<string, any> => {
    const obj: Record<string, any> = {}
    for (const [key, value] of Object.entries(nestedObj)) {
        const type = getType(value)
        if (type === 1) {
            obj[`${prefix}${key}`] = value
        } else if (type === 2) {
            const items = value as Array<any>
            for (let i = 0; i < items.length; i++) {
                const item = items[i]
                const arrKey = `${prefix}${key}[${i}]`
                const itemType = getType(item)
                if (itemType === 1) {
                    obj[arrKey] = item
                } else {
                    const tempObj = {}
                    tempObj[arrKey] = item
                    Object.assign(obj, flatObject1(tempObj))
                }
            }
        } else if (type === 3) {
            Object.assign(obj, flatObject1(nestedObj[key], `${prefix}${key}.`))
        }
    }
    return obj
}

const flatObject2 = (nestedObj: Record<string, any>): Record<string, any> => {
    const obj: Record<string, any> = {}
    const helper = (key: string, value: any) => {
        const valueType = getType(value)
        if (valueType === 1) {
            obj[key] = value
        } else if (valueType === 2) {
            for (let i = 0; i < (value as Array<any>).length; i++) {
                helper(`${key}[${i}]`, value[i])
            }
        } else if (valueType === 3) {
            for (const [k, v] of Object.entries(value as object)) {
                helper(key === '' ? k : `${key}.${k}`, v)
            }
        }
    }
    helper('', nestedObj)
    return obj
}

const nestedObj = {
    a: 1,
    b: [1, 2, {c: true}],
    d: {e: 2, f: 3},
    g: null,
    h: {},
    i: []
}

console.log('flatObject1: ', flatObject1(nestedObj))
console.log('flatObject2: ', flatObject2(nestedObj))
