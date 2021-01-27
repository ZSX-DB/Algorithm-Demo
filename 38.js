const countAndSay = n => {
    let base = '1'
    for (let i = 1; i < n; i++) {
        let list = [1, Number(base[0])]
        for (let j = 1; j < base.length; j++) {
            if (base[j] !== base[j - 1]) {
                list.push(1)
                list.push(Number(base[j]))
            }else {
                list[list.length - 2] += 1
            }
        }
        base = list.join('')
    }
    return base
}


console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
console.log(countAndSay(6))