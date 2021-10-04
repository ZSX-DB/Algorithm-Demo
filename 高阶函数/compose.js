// 使用reduce来实现函数组合
const compose = (...fn) => x => fn.reduce((v, f) => f(v), x)

const double = x => x * 2
const discount = x => x * 0.8
const coupon = x => x - 50

const finalPrice = compose(double, discount, coupon)
console.log('最终价格', finalPrice(100))

const list = ['vue', 'react', 'angular']
const getArrLen = arr => arr.map(item => item.length)
const addFive = arr => arr.map(item => item + 5)

const handleList = compose(getArrLen, addFive)
console.log('最终数组', handleList(list))
