const isPerfectSquare = num => {
    let left = 1
    let right = num
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (mid ** 2 < num) {
            left = mid + 1
        } else if (mid ** 2 > num) {
            right = mid - 1
        } else {
            return true
        }
    }
    return false
}

console.log(isPerfectSquare(1))
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
