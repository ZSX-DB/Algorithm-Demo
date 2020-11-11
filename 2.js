/**
 * 2、两数相加
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 链接：https://leetcode-cn.com/problems/add-two-numbers/
 */





//这个方法基于数组
// function addTwoNumbers(l1, l2) {
//     let len1 = l1.length, len2 = l2.length, len = 0, temp = [];
//     if (len1 >= len2) {
//         len = len1;
//         for (let i = 0; i < (len1 - len2); i++) {
//             l2.unshift(0);
//         }
//     } else {
//         len = len2;
//         for (let i = 0; i < (len2 - len1); i++) {
//             l1.unshift(0);
//         }
//     }

//     for (let i = 0; i < len; i++) {
//         temp[i] = l1[i] + l2[i];
//     }
//     while (len > 0) {
//         if(temp[len-1]>=10){
//             temp[len-1]=temp[len-1]-10;
//             temp[len-2]=temp[len-2]+1;
//         }
//         len--;
//     }
//     return temp.join('').toString();
// }

// console.log(addTwoNumbers([2, 4, 3, 5], [5, 8, 4]));

// function addTwoNumbers(l1,l2){
//     let len=l1.length,temp=[];
//     for(let i=0;i<len;i++){
//         temp[i]=l1[i]+l2[i];
//     }
//     for(let i=0;i<len;i++){
//         if(temp[i]>=10){
//             temp[i]=temp[i]-10;
//             temp[i+1]=temp[i+1]+1;
//         }
//     }
//     return temp;
// }

// addTwoNumbers([2, 4, 3], [5, 6, 4])
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// function sum(node) {
//     let str='';
//     str = String(node.val) + str;
//     if(node.next != null) {
//         str = sum(node.next, str);
//     }
//     return str;
// }

// console.log(sum(3,5,4))

var addTwoNumbers = function(l1, l2) {
    let p1 = l1
    let p2 = l2
    let carry = 0
    const dummy = new ListNode()
    let pointer = dummy
    while (p1 || p2 || carry) {
      const num1 = p1 ? p1.val : 0
      const num2 = p2 ? p2.val : 0
      const sum = num1 + num2 + carry
      if (sum > 9) {
        pointer.next = new ListNode(sum % 10)
        carry = 1
      } else {
        pointer.next = new ListNode(sum)
        carry = 0
      }
      if (p1) p1 = p1.next
      if (p2) p2 = p2.next
      pointer = pointer.next
    }
    return dummy.next
  };


  console.log(addTwoNumbers([2,4,3],[5,6,4]));

