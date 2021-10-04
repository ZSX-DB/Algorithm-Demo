/**
 * 83、删除排序链表中的重复元素
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

const l1 = {
    val: 1,
    next: {
        val: 1,
        next: {val: 2, next: null}
    }
}

const l2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 4,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

const l3 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: null
        }
    }
}


// 利用list来判断是否有相同key
// const deleteDuplicates = head => {
//     const list = []
//     let tmp = head
//     if(tmp!==null) list.push(tmp.val)
//     while (tmp!==null && tmp.next){
//         if(!list.includes(tmp.next.val)){
//             list.push(tmp.next.val)
//             tmp = tmp.next
//         }else {
//             tmp.next = tmp.next.next
//         }
//     }
//     return head
// }

// 优化点: 题目为升序链表，判断后面节点val是否大于前面节点val即可
// const deleteDuplicates = head => {
//     let tmp = head
//     let val
//     if(tmp!==null) val = tmp.val
//     while (tmp){
//         if(tmp.next !== null&& tmp.next.val === val){
//             tmp.next = tmp.next.next
//         }else {
//             if(tmp.next) val = tmp.next.val
//             tmp=tmp.next
//         }
//     }
//     return head
// }


const deleteDuplicates = head => {
    let tmp = head
    while (tmp && tmp.next){
        tmp.val === tmp.next.val ? tmp.next = tmp.next.next : tmp = tmp.next
    }
    return head
}



console.log(deleteDuplicates(l1))
console.log(deleteDuplicates(l2))
console.log(deleteDuplicates(l3))