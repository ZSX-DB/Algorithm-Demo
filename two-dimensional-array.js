/**
 * 二维数组
 */

// 二维数组形式
let tdIndexArr = [
    [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]
]


let tdArr = []

// 会报错: TypeError: Cannot set property '0' of undefined (无法确定一维数组内部的仍为数组)
// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         tdArr[i][j]=1
//     }
// }

console.log(tdArr)

let tempArr = []
for (let i = 0; i < 4; i++) {
    tempArr.push(i)
}

// for (let i = 0; i < 4; i++) {
//     tdArr.push(tempArr)
// }
// 更改某个值，第二个索引对应的值全部改变，这是因为全部引用了tempArr的内存地址
// tdArr[1][3]=7


// 深拷贝赋值
// for(let i=0;i<4;i++){
//     let newTempArr=[]
//     tempArr.forEach(item=>newTempArr.push(item))
//     tdArr.push(newTempArr)
// }

// 成功实现
// tdArr[2][2]=5

// console.log(tdArr)

// 更简便的方法
let newTdArr=[]

for(let i=0;i<4;i++){
    newTdArr[i]=[]
    for(let j=0;j<4;j++){
        newTdArr[i].push(j)
    }
}

newTdArr[0][1]=23
console.log(newTdArr)