/**
 * 402、移除K位数字
 * 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
 * 链接：https://leetcode-cn.com/problems/remove-k-digits/
 */


function removeKdigits(num, k) {
  if (num.length === k) return '0'
  num = num.split('')
  // 记录删除次数
  let count = 0

  for (let i = 0; i < num.length; i++) {
    // 基于贪心策略,对于 A = 1axxx,B = 1bxxx,如果 a > b 则 A > B
    if (num[i] > num[i + 1]) {
      num.splice(i, 1)
      i = -1
      count++
      if (count === k) break
    }
  }

  // 如果k仍大于count, 则说明此时num为升序数组
  const diff = k - count
  if (diff > 0) num.length = num.length - diff

  const len = num.length
  for (let i = 0; i < len; i++) {
    if (num[i] !== '0') {
      break
    } else {
      num[i] = ''
    }
  }
  num = num.filter(item => item !== '').join('')
  return num || '0'

  // 转换为Number类型消除前置0再转换为String会导致Infinity bug
  // return String(Number(num.join('')))
}

console.log(removeKdigits('1432219', 5))
console.log(removeKdigits('12345', 2))
console.log(removeKdigits('10200', 1))
console.log(removeKdigits('4321', 2))
console.log(removeKdigits('5729', 3))
console.log(removeKdigits('5498527239', 4))
console.log('---------------------------')

function removeKdigitsFn(num, k) {
  const stk = []
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop()
      k -= 1
    }
    stk.push(digit)
  }

  for (; k > 0; --k) {
    stk.pop()
  }

  let ans = ''
  let isLeadingZero = true
  for (const digit of stk) {
    if (isLeadingZero && digit === '0') continue
    isLeadingZero = false
    ans += digit
  }
  return ans || '0'
}

console.log(removeKdigitsFn('1432219', 5))
console.log(removeKdigitsFn('12345', 2))
console.log(removeKdigitsFn('10200', 1))
console.log(removeKdigitsFn('4321', 2))
console.log(removeKdigitsFn('5729', 3))
console.log(removeKdigitsFn('5498527239', 4))
console.log('---------------------------')

function removeKdigitsFunc(num, k) {
  let len = num.length
  if (len > k) {
    for (let i = 0; k && i < len - 1; i++) {
      if (num[i] > num[i + 1]) {
        num = num.substring(0, i) + num.substring(i + 1)
        i -= 2
        len--
        k--
      }
    }
    if (k > 0)num = num.substring(0, num.length - k)
  } else {
    num = ''
  }
  return String(Number(num))
}

console.log(removeKdigitsFunc('1432219', 5))
console.log(removeKdigitsFunc('12345', 2))
console.log(removeKdigitsFunc('10200', 1))
console.log(removeKdigitsFunc('4321', 2))
console.log(removeKdigitsFunc('5729', 3))
console.log(removeKdigitsFunc('5498527239', 4))
