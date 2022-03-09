const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
    const area = (ay2 - ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1)
    if (by2 < ay1 || by1 > ay2 || bx1 > ax2 || bx2 < ax1) return area
    return area - (Math.min(ax2, bx2) - Math.max(ax1, bx1)) * (Math.min(ay2, by2) - Math.max(ay1, by1))
}
