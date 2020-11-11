/**
 * 56、合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 链接：https://leetcode-cn.com/problems/merge-intervals/
 */

function merge(intervals) {

    // 二维数组排序
    const twoDSort = arr => {
        return arr.sort((a, b) => a[0] - b[0])
    }

    // 更改无效项
    const changeNoUse = arr => {
        let len = arr.length
        for (let i = 1; i < len; i++) {
            if (arr[i][0] === arr[i - 1][0]) {
                arr[i][1] > arr[i - 1][1] ? arr[i - 1][1] = arr[i][1] : arr[i][1] = arr[i - 1][1]
            }
        }
        return arr
    }

    // 去重(包含引用类型的视觉重复)
    const unique = arr => {
        let arr1 = [], arr2 = []
        arr.forEach(item => arr1.push(JSON.stringify(item)))
        arr1 = Array.from(new Set(arr1))
        arr1.forEach(item => arr2.push(JSON.parse(item)))
        return arr2
    }

    // 去除无效项，合并有效项
    const remove = arr => {
        let len = arr.length, deleteIndexArr = [], addArr = []
        for (let i = 1; i < len; i++) {
            if (arr[i][0] < arr[i - 1][1] && arr[i][1] < arr[i - 1][1]) {
                deleteIndexArr.push(i)
            } else if (arr[i][0] <= arr[i - 1][1] && arr[i][1] >= arr[i - 1][1]) {
                addArr.push([arr[i - 1][0], arr[i][1]])
                deleteIndexArr.push(i - 1, i)
            }
        }
        deleteIndexArr.forEach(item => arr[item] = null)
        return [...arr.filter(item=>item!==null),...addArr]
    }

    // 合并方法
    const compose=(...fns)=>x=>fns.reduceRight((v, f) => f(v), x)

    // 迭代
    const iteration=compose(twoDSort,remove)

    intervals=compose(unique,changeNoUse,twoDSort)(intervals)

    let len=intervals.length
    for(let i=0;i<len;i++){
        intervals=iteration(intervals)
    }

    return intervals

}


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 6], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 6], [2, 3], [8, 10], [15, 18]]))
console.log(merge([[1, 2], [3, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [0, 2], [3, 5]]))
console.log(merge([[2, 3], [5, 5], [2, 2], [3, 4], [3, 4]]))
console.log(merge([[0,0],[1,4]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))