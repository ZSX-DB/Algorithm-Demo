const countSegments = (s: string): number => s.split(' ').filter(word => word !== '').length

console.log(countSegments('Hello, my name is John'))
console.log(countSegments(''))
console.log(countSegments('Hi '))
console.log(countSegments(' Hi '))
console.log(countSegments(' Hi'))
