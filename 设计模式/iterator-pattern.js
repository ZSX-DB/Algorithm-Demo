/**
 * 迭代器模式
 * 提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
 * 迭代器模式的核心，就是实现统一遍历接口。
 *
 * 模式特点
 * 1、为遍历不同数据结构的 “集合” 提供统一的接口；
 * 2、能遍历访问 “集合” 数据中的项，不关心项的数据结构
 *
 */

// 统一遍历接口实现
function each(arr, callback) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (callback(i, arr[i]) === false) {
            break
        }
    }
}

let arr = [1, 3, 5, 7, 9]

each(arr, function (index, value) {
    if (value > 7) {
        return false
    }
    console.log(index + '---' + value)
})
