// const corpFlightBookings = (bookings, n) => {
//     const res = Array(n).fill(0)
//     for (let i = 0; i < bookings.length; i++) {
//         const [first, last, seats] = bookings[i]
//         for (let j = first - 1; j < last; j++) {
//             res[j] += seats
//         }
//     }
//     return res
// }

const corpFlightBookings = (bookings, n) => {
    const res = Array(n).fill(0)
    for (let i = 0; i < bookings.length; i++) {
        const [first, last, seats] = bookings[i]
        res[first - 1] += seats
        if (last < n) {
            res[last] -= seats
        }
    }
    for (let i = 1; i < n; i++) {
        res[i] += res[i - 1]
    }
    return res
}
