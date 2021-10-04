const compareVersion = (version1, version2) => {
    const v1 = version1.split('.').map(str => Number(str.replace(/^0+/g, '')))
    const v2 = version2.split('.').map(str => Number(str.replace(/^0+/g, '')))
    const l1 = v1.length
    const l2 = v2.length
    const ml = Math.max(l1, l2)
    v1.push(...Array(ml - l1).fill(0))
    v2.push(...Array(ml - l2).fill(0))
    for (let i = 0; i < ml; i++) {
        if (v1[i] > v2[i]) {
            return 1
        } else if (v2[i] > v1[i]) {
            return -1
        }
    }
    return 0
}
