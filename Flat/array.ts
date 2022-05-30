const list = [1, 2, 3, [11, 12], [false, true], [21, 22, [31, 32, [41, 42, [43, 44, [45]]]]], ['first', 'second', ['third']], [Symbol(4)]]

// 递归
const flat1 = (items: any[]): any[] => {
    const result = []
    items.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flat1(item))
        } else {
            result.push(item)
        }
    })
    return result
}

// 迭代
const flat2 = (items: any[]): any[] => {
    while (items.some(item => Array.isArray(item))) {
        items = [].concat(...items)
    }
    return items
}

const flat3 = (items: any[]): any[] => items.flat(Infinity)

const flat4 = (items: any[]): any[] => {
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

console.log('flat1: ', flat1(list))
console.log('flat2: ', flat2(list))
console.log('flat3: ', flat3(list))
console.log('flat4: ', flat4(list))
