const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
    const getNum = (l: ListNode): bigint => {
        const nums: number[] = []
        let head: ListNode = l
        while (head !== null) {
            nums.push(head.val)
            head = head.next
        }
        return BigInt(nums.reverse().join(''))
    }
    const build = (num: bigint): ListNode => {
        const nums = String(num).split('').map(Number)
        let l: ListNode | null = null
        for (const num of nums) {
            l = new ListNode(num, l)
        }
        return l
    }
    return build(getNum(l1) + getNum(l2))
}
