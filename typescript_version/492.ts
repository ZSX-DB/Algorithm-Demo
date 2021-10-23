const constructRectangle = (area: number): [number, number] => {
    let width = Math.floor(Math.sqrt(area))
    while (area % width !== 0) {
        width--
    }
    return [area / width, width]
}

console.log(constructRectangle(10))
console.log(constructRectangle(9))
console.log(constructRectangle(37))
