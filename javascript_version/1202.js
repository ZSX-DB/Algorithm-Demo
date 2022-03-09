/**
 * 1202、交换字符串中的元素
 * 给你一个字符串s，以及该字符串中的一些「索引对」数组pairs，其中pairs[i] =[a, b]表示字符串中的两个索引（编号从 0 开始）。
 * 你可以 任意多次交换 在pairs中任意一对索引处的字符，返回在经过若干次交换后，s可以变成的按字典序最小的字符串。
 * 链接：https://leetcode-cn.com/problems/smallest-string-with-swaps/
 */

const smallestStringWithSwaps = (s, pairs) => {
    // 初始化并查集
    const fa = new Array(100010).fill(0)
    const sLen = s.length
    const pLen = pairs.length
    const init = n => {
        for (let i = 1; i <= n; i++) {
            fa[i] = i
        }
    }
    init(sLen)
    // 查询
    const find = i => fa[i] === i ? i : find(fa[i])
    const merge = (i, j) => {
        fa[find(i)] = find(j)
    }
    for (let i = 0; i < pLen; ++i) {
        const x = pairs[i][0], y = pairs[i][1]
        const ux = find(x), uy = find(y)
        if (ux ^ uy) merge(ux, uy)
    }
    const vec = new Array(sLen).fill(0).map(() => [])
    for (let i = 0; i < sLen; i++) {
        fa[i] = find(i)
        vec[fa[i]].push(s[i])
    }

    for (let i = 0; i < sLen; ++i) {
        if (vec[i].length > 0) vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt())
    }

    const p = new Array(sLen).fill(0)
    let ans = [];
    for (let i = 0; i < sLen; ++i) {
        ans.push('1');
    }

    for (let i = 0; i < sLen; ++i) {
        ans[i] = vec[fa[i]][p[fa[i]]]
        p[fa[i]]++
    }

    return ans.join('')

}

console.log(smallestStringWithSwaps('dcab', [[0,3],[1,2]]))

