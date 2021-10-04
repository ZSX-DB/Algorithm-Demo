class Employee {
    constructor(id, importance, subordinates) {
        this.id = id
        this.importance = importance
        this.subordinates = subordinates
    }
}

let e1 = new Employee(1, 5, [2, 3])
let e2 = new Employee(2, 3, [])
let e3 = new Employee(3, 3, [])
let e4 = new Employee(1, 15, [2])
let e5 = new Employee(2, 10, [3])
let e6 = new Employee(3, 5, [])

// 递归
const GetImportance = (employees, id) => {
    const info = employees.find(item => item.id === id)
    let sum = info.importance
    info.subordinates.forEach(item => {
        sum += GetImportance(employees, item)
    })
    return sum
}


console.log(GetImportance([e1, e2, e3], 1))
console.log(GetImportance([e4, e5, e6], 1))