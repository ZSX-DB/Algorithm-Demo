const rand7 = () => Math.ceil(Math.random() * 7)

// flag === 1 和 2 的概率是一样的
const createRand10 = () => {
    let flag
    while (true) {
        const num = rand7()
        if (num !== 7) {
            flag = num <= 3 ? 1 : 2
            break
        }
    }
    while (true) {
        const num = rand7()
        if (num <= 5) return flag === 1 ? num : 5 + num
    }
}

const rand10 = n => new Array(n).fill(0).map(_ => createRand10())

const verify = nums => {
    const counts = new Array(11).fill(0)
    for (const num of nums) {
        counts[num]++
    }
    counts.shift()
    return counts
}

console.log(verify(rand10(10000)))
