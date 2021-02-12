/**
 * 贪心算法
 * 必须满足基于贪心算法的策略是最优策略
 */

// 求需要最少张数的纸币
const getLeastSheets = money => {

    //如果10元面额被11元面额替代，当值为15时，count为5，显然此时基于贪心算法的策略不是最优策略
    const amount = [100, 50, 20, 10, 5, 1]

    let count = 0
    const useList = []

    for (const a of amount) {

        if (a <= money) {
            const num = ((money - money % a) / a)
            count += num
            useList.push(...new Array(num).fill(a))
            money = money % a
        }
    }

    return [count, useList]

}

console.log(getLeastSheets(15))
console.log(getLeastSheets(74))
console.log(getLeastSheets(356))
