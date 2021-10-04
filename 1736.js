const maximumTime = time => {
    let hour = ''
    let second = ''
    if (time[0] === '?' && time[1] === '?') {
        hour = '23'
    } else if (time[0] !== '?' && time[1] === '?') {
        hour = time[0] === '2' ? '23' : `${time[0]}9`
    } else if (time[0] === '?' && time[1] !== '?') {
        hour = Number(time[1]) <= 3 ? `2${time[1]}` : `1${time[1]}`
    } else {
        hour = `${time[0]}${time[1]}`
    }

    if (time[3] === '?' && time[4] === '?') {
        second = '59'
    } else if (time[3] !== '?' && time[4] === '?') {
        second = `${time[3]}9`
    } else if (time[3] === '?' && time[4] !== '?') {
        second = `5${time[4]}`
    } else {
        second = `${time[3]}${time[4]}`
    }
    return `${hour}:${second}`
}

console.log(maximumTime('1?:5?'))
console.log(maximumTime('2?:5?'))
console.log(maximumTime('?3:5?'))
console.log(maximumTime('?4:5?'))
