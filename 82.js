/**
 * 82、删除排序链表中的重复元素 II
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */


class ListNode{
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const l1 = {
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
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

const l2 = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: null
                }
            }
        }
    }
}


// 转换为数组再次转换为链表
// const deleteDuplicates = head => {
//
//     // 空链表判断
//     if(head === null) return null
//
//     let tmp = head
//     let list = []
//     while (tmp){
//         list.push(tmp.val)
//         tmp = tmp.next
//     }
//     let sameNum
//     // 由于链表为升序链表，因此数组也为升序数组
//     for(let i=0;i<list.length;i++){
//         if(list[i] === list[i+1]) sameNum = list[i]
//         if(list[i] === sameNum) list[i] = null
//     }
//     list = list.filter(item=> item !== null)
//
//     // 空链表判断
//     if(list.length === 0) return null
//
//     // 重新转换为链表
//     let res = new ListNode(list[0])
//     for(let i=1;i<list.length;i++){
//         let lTmp = res
//         while (lTmp.next){
//             lTmp = lTmp.next
//         }
//         lTmp.next = new ListNode(list[i])
//
//     }
//     return res
// }

// 递归
const deleteDuplicates = head => {
    if(head === null || head.next === null) return head
    if(head.val === head.next.val){
        while (head && head.next !== null && head.val === head.next.val ){
            head = head.next
        }
        return deleteDuplicates(head.next)
    }else {
        head.next = deleteDuplicates(head.next)
        return head
    }
}

console.log(deleteDuplicates(l1))
console.log(deleteDuplicates(l2))
console.log(deleteDuplicates(null))