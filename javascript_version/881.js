const numRescueBoats = (people, limit) => {
    people.sort((x, y) => x - y)
    let count = 0
    let left = 0
    let right = people.length - 1
    while (left <= right) {
        const sum = people[left] + people[right]
        if (sum <= limit) {
            count++
            left++
            right--
        } else {
            right--
            count++
        }
    }
    return count
}

console.log(numRescueBoats([1, 2], 3))
console.log(numRescueBoats([11], 12))
console.log(numRescueBoats([3, 2, 2, 1], 3))
console.log(numRescueBoats([3, 2, 2, 1], 4))
console.log(numRescueBoats([3, 5, 3, 4], 5))
