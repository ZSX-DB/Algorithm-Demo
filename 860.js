// const lemonadeChange = bills => {
//     let wallet = []
//     for (const bill of bills) {
//         wallet.push(bill)
//         if (bill !== 5) {
//             let money = bill - 5
//             wallet = wallet.filter(balance => balance !== null).sort((a, b) => b - a)
//             for (const [idx, balance] of Object.entries(wallet)) {
//                 if (money < balance) continue
//                 if (money === 0) break
//                 money -= balance
//                 wallet[idx] = null
//             }
//             if (money !== 0) return false
//         }
//     }
//     return true
// }

// const lemonadeChange = bills => {
//     class Wallet {
//         constructor() {
//             this.balances = []
//         }
//
//         add(bill) {
//             this.balances.push(bill)
//         }
//
//         change(money) {
//             this.balances = this.balances
//                 .sort((a, b) => b - a)
//                 .map(balance => {
//                     if (money === 0 || money < balance) return balance
//                     if (money >= balance) {
//                         money -= balance
//                         return null
//                     }
//                 })
//                 .filter(balance => balance !== null)
//             return money
//         }
//
//     }
//
//     const wallet = new Wallet()
//     for (const bill of bills) {
//         wallet.add(bill)
//         if (bill !== 5) {
//             const surplusMoney = wallet.change(bill - 5)
//             if (surplusMoney > 0) return false
//         }
//
//     }
//
//     return true
// }

// 根据题意只会有 3 种面值，5、10、20，而 20 不可能用来支付，因此只需要统计 5 和 10 的总数即可
const lemonadeChange = bills => {
    let fives = 0
    let tens = 0
    for (const bill of bills) {
        switch (bill) {
            case 5:
                fives++
                break
            case 10:
                fives--
                if (fives < 0) return false
                tens++
                break
            default:
                let money = 15
                if (tens > 0) {
                    tens--
                    money = 5
                }
                fives -= (money / 5)
                if (fives < 0) return false
        }
    }
    return true
}

console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChange([5, 5, 10]))
console.log(lemonadeChange([10, 10]))
console.log(lemonadeChange([5, 5, 10, 10, 20]))
