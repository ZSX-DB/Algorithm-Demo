// const findPoisonedDuration = (timeSeries, duration) => {
//     const list = timeSeries.reduce((total, ts) => {
//         total.push(ts, ts + duration)
//         return total
//     }, [])
//     let time = 0
//     for (let i = 0; i < list.length; i += 2) {
//         time += (list[i + 1] - list[i])
//     }
//     for (let i = 1; i < list.length; i += 2) {
//         if (list[i] > list[i + 1]) time -= (list[i] - list[i + 1])
//     }
//     return time
// }

const findPoisonedDuration = (timeSeries, duration) => {
    let time = 0
    for (let i = 0; i < timeSeries.length - 1; i++) {
        time += Math.min(timeSeries[i + 1] - timeSeries[i], duration)
    }
    return time + duration
}

console.log(findPoisonedDuration([1, 4], 4))
console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
