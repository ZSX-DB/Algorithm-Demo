// 需求：瀑布流，需要两列图片高度差最小，因此可转化成获取最接近 sum/2 的集合
const imgHeights = [11, 30, 33, 47, 62, 101, 82, 54, 28]

/**
 * 本质上是 01 背包问题
 * @param imgHeights {number[]}
 * @returns {number[]}
 */
const setColumnsByDP = imgHeights => {
    const halfSum = Math.floor(imgHeights.reduce((sum, imgHeight) => sum + imgHeight, 0) / 2)
    const len = imgHeights.length
    const dp = Array(halfSum + 1).fill(0)
    // flags 用于标记是否被选中
    const flags = new Array(len + 1).fill(0).map(_ => [])
    // 获取被选中的 imgHeight
    const getSelected = (i, j) => {
        const collect = []
        while (i--) {
            if (flags[i][j]) {
                collect.push(imgHeights[i])
                j -= imgHeights[i]
            }
        }
        return collect
    }
    imgHeights.forEach((imgHeight, idx) => {
        const flag = flags[idx]
        for (let i = halfSum; i >= imgHeight; i--) {
            if (dp[i] < dp[i - imgHeight] + imgHeight) {
                dp[i] = dp[i - imgHeight] + imgHeight
                flag[i] = true
            }
        }
    })
    return getSelected(len, halfSum)
}

console.log(setColumnsByDP(imgHeights))

