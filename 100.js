// const isSameTree = (p, q) => JSON.stringify(p) === JSON.stringify(q)

// dfs
// const isSameTree = (p, q) => {
//     if (p === null && q === null) return true
//     if (p === null || q === null) return false
//     return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }

// bfs
const isSameTree = (p, q) => {
    const queue = [{p, q}]
    while (queue.length) {
        const cur = queue.shift()
        if (cur.p === null && cur.q === null) continue
        if (cur.p === null || cur.q === null) return false
        if (cur.p.val !== cur.q.val) return false
        queue.push({
            p: cur.p.left,
            q: cur.q.left
        }, {
            p: cur.p.right,
            q: cur.q.right
        })
    }
    return true
}

const bt1 = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 7,
        left: null,
        right: null
    }
}

const bt2 = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 6,
        left: null,
        right: null
    }
}

const bt3 = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: null
}

const bt4 = {
    val: 1,
    left: null,
    right: {
        val: 1,
        left: null,
        right: null
    }
}



console.log(isSameTree(bt1, bt2))
console.log(isSameTree(bt3, bt4))


