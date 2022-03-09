/**
 * 941、有效的山脉数组
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
 * 1、A.length >= 3
 * 2、在 0 < i < A.length - 1 条件下，存在 i 使得: 
 *    A[0] < A[1] < ... A[i-1] < A[i]
 *    A[i] > A[i+1] > ... > A[A.length - 1]
 */

// function validMountainArray(A) {
//   if (A.length < 3) return false
//   const max = Math.max(...A)
//   const maxIndex = A.indexOf(max)
//   // 此时最大值在数组最前面或最后面, 不符合情况
//   if (maxIndex === 0 || maxIndex === A.length - 1) return false

//   const list1 = A.slice(0, maxIndex)
//   const list2 = A.slice(maxIndex, A.length).reverse()

//   // 功能: 检测数组是否递增
//   const progressive = (array) => {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] >= array[i + 1]) return false
//     }
//     return true
//   }
//   return progressive(list1) && progressive(list2)
// }


function validMountainArray(A) {
    const len = A.length
    let i = 0
  
    // 递增扫描
    while (i + 1 < len && A[i] < A[i + 1]) {
      i++
    }
  
    // 最高点不能是数组的第一个位置或最后一个位置
    if (i === 0 || i === len - 1) return false
    
    // 递减扫描
    while (i + 1 < len && A[i] > A[i + 1]) {
      i++
    }
  
    return i === len - 1
  }


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

validMountainArray(arr)

console.log(validMountainArray(arr))