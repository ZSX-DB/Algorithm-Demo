// const numWaterBottles = (numBottles, numExchange) => {
//     let count = numBottles
//     let numEmpty = numBottles
//     while (numBottles > 0) {
//         const num = numEmpty % numExchange
//         numBottles = (numEmpty - num) / numExchange
//         count += numBottles
//         numEmpty = numBottles + num
//     }
//     return count
// }

const numWaterBottles = (numBottles, numExchange) => {
    let count = numBottles
    let empty = numBottles
    while (empty >= numExchange) {
        empty = empty - numExchange + 1
        count++
    }
    return count
}

// const numWaterBottles = (numBottles, numExchange) => Math.floor(numBottles >= numExchange ? (numBottles - numExchange) / (numExchange - 1) + 1 + numBottles : numBottles)

console.log(numWaterBottles(9, 3))
console.log(numWaterBottles(15, 4))
console.log(numWaterBottles(5, 5))
console.log(numWaterBottles(2, 3))
