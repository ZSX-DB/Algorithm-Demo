const add = x => {
    const sum = y => {
        x = x + y
        return sum
    }
    // toString() 方法返回一个表示该对象的字符串，下面重写了toString方法
    sum.toString = () => x
    // 返回一个函数
    return sum
}

add(3)(5)(7)


