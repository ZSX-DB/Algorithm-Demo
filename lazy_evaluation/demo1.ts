// const createLazyFibonacci = function* () {
//     let prev = 0
//     let next = 1
//     while (true) {
//         yield prev
//         const temp = prev + next
//         prev = next
//         next = temp
//     }
// }
//
// const gen = createLazyFibonacci()
//
// for (let i = 0; i < 10; i++) {
//     console.log(gen.next().value)
// }
// const range = function* (from: number, to: number) {
//     for (let i = from; i < to; i++) {
//         yield i
//     }
// }
//
// const map = function* (flow, transform: (item: any) => any) {
//     for (const item of flow) {
//         yield transform(item)
//     }
// }
//
// const filter = function* (flow, condition: (item?: any) => boolean) {
//     for (const item of flow) {
//         if (condition(item)) {
//             yield item
//         }
//     }
// }
//
// const cease = function* (flow, condition: (item?: any) => boolean) {
//     for (const item of flow) {
//         yield item
//         if (condition(item)) {
//             break
//         }
//     }
// }
//
// const take = (flow, num: number) => {
//     let count = 0
//     const judge = (): boolean => {
//         count++
//         return count >= num
//     }
//     return cease(flow, judge)
// }
//
// class LazyEvaluation {
//     private iterator: Generator<number, void>
//
//     constructor() {
//         this.iterator = null
//     }
//
//     range(from: number, to: number) {
//         this.iterator = range(from, to)
//         return this
//     }
//
//     map(fn: (item: any) => any) {
//         this.iterator = map(this.iterator, fn)
//         return this
//     }
//
//     filter(fn: (item?: any) => boolean) {
//         this.iterator = filter(this.iterator, fn)
//         return this
//     }
//
//     take(num: number) {
//         this.iterator = take(this.iterator, num)
//         return this
//     }
//
//     [Symbol.iterator]() {
//         return this.iterator
//     }
// }
//
// const nums = new LazyEvaluation().range(0, 100).map(n => n * 10).filter(n => n % 3 === 1).take(3)
//
// for (const num of nums) {
//     console.log('===== result =====', num)
// >>>>>>> 454fe1c... update
// }
