const rand7 = () => Math.ceil(Math.random() * 7)

// const rand10 = () => {
//     let flag = 7
//     while (flag === 7) {
//         flag = rand7()
//     }
//     while (true) {
//         const num = rand7()
//         if (num <= 5) return flag <= 3 ? num : 5 + num
//     }
// }

// 官方解法
const rand10 = () => {
    let row
    let col
    let flag = 41
    while (flag > 40) {
        row = rand7()
        col = rand7()
        flag = row + (col - 1) * 7
    }
    return 1 + (flag - 1) % 10
}

const createRand10List = n => new Array(n).fill(0).map(_ => rand10())

const verify = nums => {
    const counts = new Array(11).fill(0)
    for (const num of nums) {
        counts[num]++
    }
    counts.shift()
    return counts
}

console.log(verify(createRand10List(10000)))
