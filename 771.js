const numJewelsInStones = (jewels, stones) => {
    let count = 0
    for (const ch of stones) {
        if(jewels.includes(ch)){
            count++
        }
    }
    return count
}

console.log(numJewelsInStones('aA', 'aAAbbbb'))
