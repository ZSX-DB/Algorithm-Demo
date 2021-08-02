/**
 * 2、两数相加
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 链接：https://leetcode-cn.com/problems/add-two-numbers/
 */

const addTwoNumbers = (l1, l2) => {
    const nums = []
    const root = {}
    let num = 0
    let cur = root
    while (l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + num
        nums.push(sum % 10)
        num = Math.floor(sum / 10)
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    if (num !== 0) {
        nums.push(num)
    }
    while (nums.length) {
        cur.val = nums.shift()
        cur.next = nums.length ? {} : null
        cur = cur.next
    }
    return root
}

const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}

const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}

const l3 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 9,
            next: null
        }
    }
}

const l4 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 9,
                next: null
            }
        }
    }
}

console.log(addTwoNumbers(l1, l2))
console.log(addTwoNumbers(l3, l4))

