/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
const platesBetweenCandles = (s, queries) => {
    const record1 = s.split('').map((item, index) => item === '|' ? index : -1).filter(item => item !== -1)
    const record2 = [...record1].reverse()
    const len = record1.length
    return queries.map(query => {
        const startIndex = record1.findIndex(item => item >= query[0] && item < query[1])
        if (startIndex === -1) {
            return 0
        }
        const endIndex = record2.findIndex(item => item <= query[1] && item > query[0])
        if (endIndex === -1) {
            return 0
        }
        return record1[len - 1 - endIndex] - record1[startIndex] - (len - 1 - endIndex - startIndex)
    })
}
