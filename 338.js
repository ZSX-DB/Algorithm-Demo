const countBits = num => new Array(num + 1).fill(0).map((item, idx) => {
    const str = idx.toString(2)
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') count++
    }
    return count
})

console.log(countBits(2))
console.log(countBits(5))
