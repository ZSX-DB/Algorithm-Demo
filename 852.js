// const peakIndexInMountainArray = arr => {
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) return i
//     }
// }

// const peakIndexInMountainArray = arr => arr.findIndex((item, idx) => idx > 0 && item > arr[idx + 1])

// const peakIndexInMountainArray = arr => arr.indexOf(Math.max(...arr))

// 二分查找
const peakIndexInMountainArray = arr => {
    let left = 1
    let right = arr.length - 2
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid
        arr[mid] > arr[mid - 1] ? left = mid + 1 : right = mid - 1
    }
}

console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([3, 4, 5, 1]))
