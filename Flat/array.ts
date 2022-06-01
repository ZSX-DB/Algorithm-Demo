const list = [1, 2, 3, [11, 12], [false, true], [21, 22, [31, 32, [41, 42, [43, 44, [45]]]]], ['first', 'second', ['third']], [Symbol(4)]]

// 递归
const flatArray1 = (items: any[]): any[] => {
    const result = []
    items.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flatArray1(item))
        } else {
            result.push(item)
        }
    })
    return result
}

// 迭代
const flatArray2 = (items: any[]): any[] => {
    while (items.some(item => Array.isArray(item))) {
        items = [].concat(...items)
    }
    return items
}

const flatArray3 = (items: any[]): any[] => items.flat(Infinity)

const flatArray4 = (items: any[]): any[] => {
    let itemsDepth: number = 0
    const dfs = (items: any[], depth: number): void => {
        itemsDepth = Math.max(itemsDepth, depth)
        for (const item of items) {
            if (Array.isArray(item)) {
                dfs(item, depth + 1)
            }
        }
    }
    dfs(items, 0)
    return items.flat(itemsDepth)
}

console.log('flatArray1: ', flatArray1(list))
console.log('flatArray2: ', flatArray2(list))
console.log('flatArray3: ', flatArray3(list))
console.log('flatArray4: ', flatArray4(list))
