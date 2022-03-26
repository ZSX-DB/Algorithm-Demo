interface CollectItem {
    restaurant: string
    idx: number
}

// const findRestaurant = (list1: string[], list2: string[]): string[] => {
//     let minIdx: number = Infinity
//     const collect: CollectItem[] = []
//     for (let idx1 = 0; idx1 < list1.length; idx1++) {
//         const restaurant = list1[idx1]
//         const idx2 = list2.indexOf(restaurant)
//         if (idx2 !== -1 && idx1 + idx2 <= minIdx) {
//             minIdx = idx1 + idx2
//             collect.push({restaurant, idx: minIdx})
//         }
//     }
//     return collect.filter(item => item.idx === minIdx).map(item => item.restaurant)
// }

const findRestaurant = (list1: string[], list2: string[]): string[] => {
    let minIdx: number = Infinity
    const collect: string[] = []
    const record: Map<string, number> = new Map<string, number>()
    list1.forEach((restaurant, index) => {
        record.set(restaurant, index)
    })
    for (let i = 0; i < list2.length; i++) {
        if (record.has(list2[i])) {
            const sum = (record.get(list2[i]) as number) + i
            if (sum > minIdx) {
                continue
            } else if (sum < minIdx) {
                minIdx = sum
                collect.length = 0
            }
            collect.push(list2[i])
        }
    }
    return collect
}
