/**
 * 21、合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

const l1 = {
    val: 1,
    next: {
        val: 2,
        next: { val: 4, next: null },
    },
}

const l2 = {
    val: 1,
    next: {
        val: 3,
        next: { val: 4, next: null },
    },
}

const mergeTwoLists = (l1, l2) => {
    if(l1 === null){
        return l2
    }else if(l2 === null){
        return l1
    }else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
}

console.log(mergeTwoLists(l1, l2))