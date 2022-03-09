// const findMaxConsecutiveOnes = nums => nums.join('').split('0').sort((a, b) => b.length - a.length)[0].length

const findMaxConsecutiveOnes = nums => {
    let cur = 0
    let max = 0
    for (const num of nums) {
        num ? cur++ : cur = 0
        max = Math.max(cur, max)
    }
    return max
}



console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([0, 0, 0, 0]))
console.log(findMaxConsecutiveOnes([]))
console.log(findMaxConsecutiveOnes([0, 1, 1, 1, 1, 0]))
