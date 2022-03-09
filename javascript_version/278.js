const solution = isBadVersion => n => {
    let left = 1
    let right = n
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (isBadVersion(mid)) {
            if (isBadVersion(mid - 1) === false) return mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}
