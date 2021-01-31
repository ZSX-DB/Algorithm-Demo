const createZero = num => {
    let str = ''
    while (num){
        str+='0'
        num--
    }
    return str
}

console.log(createZero(0))
