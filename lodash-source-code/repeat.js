/**
 * 根据原生js代码改进方法
 * @param str
 * @param count
 * @returns {string}
 * -----------------------------------------------------
 * Benchmark实测数据
 * repeatZero  --- 9,076,145
 * repeatOne   --- 65,762
 * repeatTwo   --- 124,089
 * repeatThree --- 3,891,697
 * repeatFour  --- 7,242,696
 * -----------------------------------------------------
 * repeatThree的实现思想与原生一致，执行效率差距在于函数调用的开销
 */
const str = 'Test'

// 原生方法
const repeatZero = (str, count) => str.repeat(count)


// 基础实现
const repeatOne = (str, count) => {
    let res = ''
    while (count > 0) {
        res += str
        count--
    }
    return res
}


// 优化，repeat(str, 6) === repeat(repeat(str, 3), 2)
// 执行效率是repeatOne的2倍左右
const repeatTwo = (str, count) => {
    let res = ''
    let num = Math.floor(count / 2)
    while (num > 0) {
        res += str
        num--
    }
    res = count % 2 ? `${res}${res}${str}` : `${res}${res}`
    return res
}


// 根据repeatTwo递归实现，本质上是多次执行了repeatTwo
const repeatThree = (str, count) => {
    if (count <= 1) return count ? str : ''
    const num = Math.floor(count / 2)
    const val = repeatThree(str, num)
    return count % 2 ? `${val}${val}${str}` : `${val}${val}`
}


// 根据原生js的方法实现，效率比原生略低
const repeatFour = (str, count) => {
    let res = ''
    while (count) {
        if (count % 2) res += str
        count = Math.floor(count / 2)
        if (count) str += str
    }
    return res
}

console.log('repeatZero-------', repeatZero(str, 1), repeatZero(str, 3))
console.log('repeatOne-------', repeatOne(str, 1), repeatOne(str, 3))
console.log('repeatTwo-------', repeatTwo(str, 1), repeatTwo(str, 3))
console.log('repeatThree-------', repeatThree(str, 1), repeatThree(str, 3))
console.log('repeatFour-------', repeatFour(str, 1), repeatFour(str, 3))


