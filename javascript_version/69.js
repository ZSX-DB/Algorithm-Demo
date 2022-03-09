const mySqrt = x => {
    let low = 0
    let high = x
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if(mid ** 2 > x){
            high = mid - 1
        }else if(mid ** 2 < x){
            low = mid + 1
        }else {
            return mid
        }
    }
    return high
}

console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(9))
