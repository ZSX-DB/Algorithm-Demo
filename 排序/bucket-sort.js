/**
 * 桶排序
 * @param nums
 * @returns {*}
 */

// 桶排序是计数排序的升级版
const bucketSort = nums => {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    // bucketSize 通常为传参传入，以20设置一个桶，max 和 min 来设置桶的数量
    // max 和 min 的大概范围最好提前获取
    const bucketSize = 20
    const bucketCount = Math.ceil((max - min) / 20)
    const list = new Array(bucketCount).fill(0).map(()=>[])
    const res = []

    // 将数据分别对应到各自的桶里
    for (const num of nums) {
        list[Math.floor((num - min) / bucketSize)].push(num)
    }

    // 桶内还需要再排序，为了方便，使用了 sort 函数，实际应该采用其他方法
    list.forEach(item => {
        res.push(...item.sort((a, b) => a - b))
    })

    return res
}


console.log(bucketSort([47, 5, 7, 13, 2, 9, 21, 60, 99, 16, -6, -3, 2, 81, 17, 92, 18, 37]))
