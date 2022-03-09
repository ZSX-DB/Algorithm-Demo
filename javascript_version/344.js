// const reverseString = s => s.reverse()

const reverseString = s => {
    let len = s.length - 1
    let idx = 0
    while (idx < Math.ceil(len / 2)) {
        [s[idx], s[len - idx]] = [s[len - idx], s[idx]]
        idx++
    }
    return s
}

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(['a', 'b', 'c', 'd', 'e', 'f']))
