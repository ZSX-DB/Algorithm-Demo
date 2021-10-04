// 内部变量使用 $
class History {
    constructor(options) {
        this.options = options
        this.$index = -1
        this.$record = []
    }

    pushSync(state) {
        this.$index++
        this.$record[this.$index] = JSON.stringify(state)
    }

    isLastIndex() {
        return this.$index === this.$record.length - 1
    }

    // undo 撤销回上一步操作, 对应 ctrl + z
    undo() {
        this.$index--
        return this
    }

    // redo 取消撤销, 用于恢复, 对应 ctrl + y
    redo() {
        if(this.$index !== this.$record.length - 1){
            this.$index++
        }
        return this
    }

    get() {
        return JSON.parse(this.$record[this.$index])
    }

}

const state = {a: 1, b: 2}
const history = new History()

history.pushSync(state)
console.log(history.get())

state.a = 3
history.pushSync(state)
console.log(history.get())

console.log('-------------------------------------')

console.log(history.undo().get())
console.log(history.redo().get())
console.log(history.get())

console.log('-------------------------------------')

history.pushSync({a: 7, b: 8})
console.log(history.get())
console.log(history.undo().get())
console.log(history.redo().get())
