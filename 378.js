// const kthSmallest = (matrix, k) => matrix.flat(1).sort((a, b) => a - b)[k - 1]

// 因为都是排序好的数组，可以使用归并排序的思路
const kthSmallest = (matrix, k) => {

    const merge = (left, right) => {
        const res = []
        while (left.length && right.length) {
            res.push(left[0] <= right[0] ? left.shift() : right.shift())
        }
        res.push(...left, ...right)
        return res
    }

    while (matrix.length > 1){
        matrix.push(merge(matrix.shift(), matrix.shift()))
    }

    return matrix[0][k-1]

}

console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8))
console.log(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 9))
