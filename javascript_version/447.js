/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = points => {
    let count = 0
    const getDistance = (p, q) => (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2
    for (const p of points) {
        const record = new Map()
        for (const q of points) {
            const dis = getDistance(p, q)
            if (record.has(dis)) {
                record.set(dis, record.get(dis) + 1)
            } else {
                record.set(dis, 1)
            }
        }
        for (const v of record.values()) {
            count += (v * (v - 1))
        }
    }
    return count
}
