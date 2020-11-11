/**
 * 空间换时间
 */

function fibonacci(n) {
    // 存放斐波那契数列的值
    let results=[0,1,1]

    const recursionFunc=n=>{
        // 当results[n]不存在的时候，才执行计算
        if(!results[n]){
            results[n]=recursionFunc(n-1)+recursionFunc(n-2)
        }
        return results[n]
    }

    return recursionFunc(n)

}

console.time('1')
console.log(fibonacci(40))
console.timeEnd('1')