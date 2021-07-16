// 枚举
// const restoreIpAddresses = s => {
//     if (s.length < 4 || s.length > 12) return []
//     const sliceIpAddress = scheme => {
//         const res = []
//         let start = 0
//         let end = 0
//         scheme.forEach(item => {
//             end += item
//             res.push(s.substring(start, end))
//             start = end
//         })
//         return res
//     }
//     const isRightIp = ip => {
//         if (ip[0] === '0') return ip.length === 1
//         return Number(ip) <= 255
//     }
//     const createSchemes = num => {
//         switch (num) {
//             case 4:
//                 return [[1, 1, 1, 1]]
//             case 5:
//                 return [
//                     [2, 1, 1, 1],
//                     [1, 2, 1, 1],
//                     [1, 1, 2, 1],
//                     [1, 1, 1, 2]
//                 ]
//             case 6:
//                 return [
//                     [3, 1, 1, 1],
//                     [1, 3, 1, 1],
//                     [1, 1, 3, 1],
//                     [1, 1, 1, 3],
//                     [1, 1, 2, 2],
//                     [1, 2, 1, 2],
//                     [1, 2, 2, 1],
//                     [2, 2, 1, 1],
//                     [2, 1, 2, 1],
//                     [2, 1, 1, 2]
//                 ]
//             case 7:
//                 return [
//                     [1, 2, 2, 2],
//                     [2, 1, 2, 2],
//                     [2, 2, 1, 2],
//                     [2, 2, 2, 1],
//                     [3, 2, 1, 1],
//                     [3, 1, 2, 1],
//                     [3, 1, 1, 2],
//                     [2, 3, 1, 1],
//                     [2, 1, 3, 1],
//                     [2, 1, 1, 3],
//                     [1, 1, 2, 3],
//                     [1, 1, 3, 2],
//                     [1, 2, 1, 3],
//                     [1, 2, 3, 1],
//                     [1, 3, 2, 1],
//                     [1, 3, 1, 2]
//                 ]
//             case 8:
//                 return [
//                     [2, 2, 2, 2],
//                     [3, 2, 2, 1],
//                     [3, 2, 1, 2],
//                     [3, 1, 2, 2],
//                     [2, 3, 1, 2],
//                     [2, 3, 2, 1],
//                     [2, 2, 1, 3],
//                     [2, 2, 3, 1],
//                     [2, 1, 2, 3],
//                     [2, 1, 3, 2],
//                     [1, 3, 2, 2],
//                     [1, 2, 3, 2],
//                     [1, 2, 2, 3],
//                     [3, 3, 1, 1],
//                     [3, 1, 3, 1],
//                     [3, 1, 1, 3],
//                     [1, 1, 3, 3],
//                     [1, 3, 1, 3],
//                     [1, 3, 3, 1]
//                 ]
//             case 9:
//                 return [
//                     [3, 2, 2, 2],
//                     [2, 3, 2, 2],
//                     [2, 2, 3, 2],
//                     [2, 2, 2, 3],
//                     [3, 3, 1, 2],
//                     [3, 3, 2, 1],
//                     [3, 2, 1, 3],
//                     [3, 2, 3, 1],
//                     [3, 1, 2, 3],
//                     [3, 1, 3, 2],
//                     [1, 3, 3, 2],
//                     [1, 3, 2, 3],
//                     [1, 2, 3, 3],
//                     [2, 3, 3, 1],
//                     [2, 3, 1, 3],
//                     [2, 1, 3, 3]
//                 ]
//             case 10:
//                 return [
//                     [3, 3, 2, 2],
//                     [3, 2, 3, 2],
//                     [3, 2, 2, 3],
//                     [2, 2, 3, 3],
//                     [2, 3, 2, 3],
//                     [2, 3, 3, 2],
//                     [3, 3, 3, 1],
//                     [3, 3, 1, 3],
//                     [3, 1, 3, 3],
//                     [1, 3, 3, 3]
//                 ]
//             case 11:
//                 return [
//                     [3, 3, 3, 2],
//                     [3, 3, 2, 3],
//                     [3, 2, 3, 3],
//                     [2, 3, 3, 3]
//                 ]
//             case 12:
//                 return [[3, 3, 3, 3]]
//         }
//     }
//     const schemes = createSchemes(s.length)
//     const result = []
//     schemes.forEach(scheme => {
//         const ipList = sliceIpAddress(scheme)
//         if (ipList.every(isRightIp)) {
//             result.push(ipList.join('.'))
//         }
//     })
//     return result
// }

// 回溯
const restoreIpAddresses = s => {
    if (s.length < 4 || s.length > 12) return []
    const result = []
    const helper = (list, sum) => {
        if (list.length > 4 || sum > s.length) return
        if (list.length === 4 && sum === s.length) {
            const ipList = []
            let flag = 0
            list.forEach(item => {
                ipList.push(s.substring(flag, flag + item))
                flag += item
            })
            if (ipList.every(ip => ip[0] === '0' ? ip.length === 1 : Number(ip) <= 255)) result.push(ipList.join('.'))
            return
        }
        helper([...list, 1], sum + 1)
        helper([...list, 2], sum + 2)
        helper([...list, 3], sum + 3)
    }
    helper([], 0)
    return result
}

console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('255255255255'))
