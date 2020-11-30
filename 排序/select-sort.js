/**
 * 选择排序
 */

const list = [5, 7, 2, 9, 21, 16]

const selectSort = list => {
    const len = list.length
    for(let i=0;i<len;i++){
        let minIndex = i
        for(let j = i+1;j<len;j++){
            if(list[j]<list[minIndex]) minIndex = j
        }
        [list[i], list[minIndex]] = [list[minIndex], list[i]]
    }
    return list
}

console.log(selectSort(list))
