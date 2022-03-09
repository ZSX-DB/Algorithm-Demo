const detectCapitalUse = word => {
    const isUpperList = arr => arr.every(ch => ch >= 65 && ch <= 90)
    const isLowerList = arr => arr.every(ch => ch >= 97 && ch <= 122)
    const list = new Array(word.length).fill(0).map((_, idx) => word.charCodeAt(idx))
    if (list[0] >= 65 && list[0] <= 90) {
        list.shift()
        return isUpperList(list) || isLowerList(list)
    } else {
        return isLowerList(list)
    }
}

console.log(detectCapitalUse('leetcode'))
