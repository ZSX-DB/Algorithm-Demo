const guess = (num, pick = 2) => {
    if (pick > num) {
        return 1
    } else if (pick < num) {
        return -1
    } else {
        return 0
    }
}

const guessNumber = n => {
    let left = 1
    let right = n
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        switch (guess(mid)) {
            case -1:
                right = mid - 1
                break
            case 1:
                left = mid + 1
                break
            case 0:
                return mid
        }
    }
}

console.log(guessNumber(10))
