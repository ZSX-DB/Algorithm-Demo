/**
 * 插入排序
 */

const list = [7, 5, 7, 13, 2, 9, 21, 99, 16, -3, 2]

const insertSort = list => {
    const remove = (list, i) => {
        list.splice(i, 1)
    }
    const len = list.length
    for (let i = 0; i < len; i++) {
        if (i >= 1) {
            if (list[i] < list[0]) {
                const tmp = list[i]
                remove(list, i)
                list.unshift(tmp)
            } else if (list[i] < list[i - 1]) {
                let tmpIndex = i - 1
                while (tmpIndex) {
                    if (list[i] >= list[tmpIndex]) {
                        const tmp = list[i]
                        remove(list, i)
                        list.splice(tmpIndex + 1, 0, tmp)
                        break
                    }
                    tmpIndex--
                }
            }
        }
    }
    return list
}

insertSort(list)
console.log(list)

const insertionSort = list => {
    const len = list.length
    let preIndex, current
    for (let i = 0; i < len; i++) {
        preIndex = i - 1
        current = list[i]
        while (preIndex >= 0 && list[preIndex] > current) {
            list[preIndex + 1] = list[preIndex]
            preIndex--
        }
        list[preIndex + 1] = current
    }
    return list
}

// insertionSort(list)
// console.log(list)
