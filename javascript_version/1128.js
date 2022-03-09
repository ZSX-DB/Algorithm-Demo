const numEquivDominoPairs = dominoes => {
    let list = []
    let sum = 0
    dominoes.map(item => item[0] >= item[1] ? 10 * item[0] + item[1] : 10 * item[1] + item[0]).forEach(item => {
        list[item] ? list[item] += 1 : list[item] = 1
    })
    list.filter(item => item !== undefined && item !== 1).forEach(item=>{
        sum+=(item * (item - 1) / 2)
    })
    return sum
}

console.log(numEquivDominoPairs([[1, 2], [2, 1], [1, 2], [3, 4], [5, 6]]))
console.log(numEquivDominoPairs([[1, 2], [2, 1], [1, 2], [3, 4], [5, 6], [4, 3]]))
console.log(numEquivDominoPairs([]))
console.log(numEquivDominoPairs([[1, 2]]))
console.log(numEquivDominoPairs([[1, 2], [1, 3]]))
console.log(numEquivDominoPairs([[1, 2], [1, 3], [1, 4]]))
console.log(numEquivDominoPairs([[1, 2], [2, 1]]))
console.log(numEquivDominoPairs([[2,1],[5,4],[3,7],[6,2],[4,4],[1,8],[9,6],[5,3],[7,4],[1,9],[1,1],[6,6],[9,6],[1,3],[9,7],[4,7],[5,1],[6,5],[1,6],[6,1],[1,8],[7,2],[2,4],[1,6],[3,1],[3,9],[3,7],[9,1],[1,9],[8,9]]))
console.log(numEquivDominoPairs([[2, 4], [4, 2], [3, 3]]))