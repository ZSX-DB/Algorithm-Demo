const reverse = (x: number): number => {
    if (x >= 0) {
        const y = Number(x.toString().split('').reverse().join(''))
        return y > 2 ** 31 - 1 ? 0 : y
    }
    const y = Number((-x).toString().split('').reverse().join(''))
    return -y < -(2 ** 31) ? 0 : -y
}
