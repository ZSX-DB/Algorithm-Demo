// const frequencySort = s => [...s.split('').reduce((record, ch) => record.set(ch, (record.get(ch) || 0) + 1), new Map())]
//     .map(([ch, amount]) => new Array(amount).fill(ch).join(''))
//     .sort((x, y) => y.length - x.length)
//     .join('')


const frequencySort = s => {
    const records = [...s.split('').reduce((record, ch) => record.set(ch, (record.get(ch) || 0) + 1), new Map())]
    const maxHeap = []
    const swap = (i, j) => {
        [maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]
    }
    const down = idx => {
        let to = idx
        let left = idx * 2 + 1
        let right = idx * 2 + 2
        if (maxHeap[left] && maxHeap[to][1] < maxHeap[left][1]) to = left
        if (maxHeap[right] && maxHeap[to][1] < maxHeap[right][1]) to = right
        if (to !== idx) {
            swap(idx, to)
            down(to)
        }
    }
    const add = val => {
        maxHeap.push(val)
        for (let i = Math.floor(maxHeap.length / 2) - 1; i >= 0; i--) {
            down(i)
        }
    }
    for (const record of records) {
        add(record)
    }
    let str = ''
    let len = maxHeap.length
    while (len > 0) {
        const [ch, amount] = maxHeap[0]
        str += new Array(amount).fill(ch).join('')
        maxHeap[0] = ['empty', -Infinity]
        down(0)
        len--
    }
    return str
}

console.log(frequencySort('tree'))
console.log(frequencySort('cccaaa'))
