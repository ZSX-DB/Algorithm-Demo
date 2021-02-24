const longestOnes = (A, K) => {
    let left = 0
    let right = 0
    let zeroCount = 0
    let max = 0

    while (right < A.length) {
        if (A[right] === 0) zeroCount++

        while (zeroCount > K) {
            if (A[left] === 0) zeroCount--
            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }

    return max

}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3))