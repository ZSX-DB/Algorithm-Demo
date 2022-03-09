const maximumElementAfterDecrementingAndRearranging = arr => {
    arr.sort((x, y) => x - y)
    if (arr[0] > 1) {
        arr[0] = 1
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue
        arr[i] = arr[i - 1] + 1
    }
    return arr[arr.length - 1]
}
