/**
 * 实现map功能函数
 * @param arr
 * @param fn
 * @returns {[]}
 */

const customMap = (arr, fn) => {
    const list = []
    for (const item of arr) {
        list.push(fn(item))
    }
    return list
}

const list = ['vue', 'react', 'angular']

console.log('customMap:', customMap(list, item => item.length))
console.log('customMap:', customMap(list, item => item.split('').reverse().join('')))

// 或者更改原型链
Array.prototype._map = function (fn) {
    const list = []
    for (const item of this) {
        list.push(fn(item))
    }
    return list
}

console.log('prototype:', list._map(item => item.length))
