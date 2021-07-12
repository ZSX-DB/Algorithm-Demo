const hIndex = citations => {
    citations.sort((x, y) => x - y)
    let h = 0
    let i = citations.length - 1;
    while (i >= 0 && citations[i] > h) {
        h++
        i--
    }
    return h
}
