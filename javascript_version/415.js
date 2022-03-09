// const addStrings = (num1, num2) => String(BigInt(num1) + BigInt(num2))

const addStrings = (num1, num2) => {
    let i = num1.length - 1
    let j = num2.length - 1
    let overflow = 0
    let ans = []
    while (i >= 0 || j >= 0 || overflow !== 0) {
        const x = i >= 0 ? Number(num1[i]) : 0
        const y = j >= 0 ? Number(num2[j]) : 0
        const res = x + y + overflow
        ans.push(res % 10)
        overflow = Math.floor(res / 10)
        i--
        j--
    }
    return ans.reverse().join('')
}


console.log(addStrings('90', '10'))
console.log(addStrings('36043', '5582'))
console.log(addStrings('86043', '5582'))
console.log(addStrings('0', '5582'))
console.log(addStrings('909', '101'))
