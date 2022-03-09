// const hammingWeight = n => n.toString(2).replace(/0/g, '').length
const hammingWeight = n => {
    let ret = 0
    while (n) {
        // n &= n - 1 每次会去掉低位的1 10110 -> 10100 -> 10000 -> 0
        n &= n - 1
        ret++
    }
    return ret
}


console.log(hammingWeight(11))
console.log(hammingWeight(4294967293))
