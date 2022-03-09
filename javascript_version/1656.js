class OrderedStream {
    constructor(n) {
        this.list = new Array(n + 1)
        this.ptr = 1
    }

    insert(idKey, value) {
        this.list[idKey] = value
        if (this.list[this.ptr]) {
            const tmp = []
            while (this.list[this.ptr]){
                tmp.push(this.list[this.ptr++])
            }
            return tmp
        } else {
            return []
        }
    }
}

const os = new OrderedStream(5)
console.log(os.insert(3, "ccccc"))
console.log(os.insert(1, "aaaaa"))
console.log(os.insert(2, "bbbbb"))
console.log(os.insert(5, "eeeee"))
console.log(os.insert(4, "ddddd"))
