class A {
    constructor() {
        this.list = []
    }

    size(){
        return this.list.length
    }

    insert(val){
        this.list.push(val)
        console.log(this.list.length, this.size())
    }

}

const a = new A()
a.insert(3)
a.insert(4)
a.insert(5)
const list = []
console.log(1 < list[2])
