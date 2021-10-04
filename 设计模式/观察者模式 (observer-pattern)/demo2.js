class Store {
    constructor(initPrice) {
        this.observers = []
        this.price = initPrice
    }

    add(...observer) {
        this.observers.push(...observer)
    }

    setPrice(price) {
        this.price = price
    }

    getAssess() {
        this.observers.forEach(item => {
            item.setAssess(this.price)
        })
    }

}

class Customer {
    // max为可接受的最大价格
    constructor(name, max) {
        this.name = name
        this.max = max
    }

    setAssess(price) {
        this.max >= price ? console.log(`${this.name}可以消费`) : console.log(`${this.name}不能消费`)
    }
}

const store = new Store(9000)

const customA = new Customer('A', 8000)
const customB = new Customer('B', 12000)
const customC = new Customer('C', 40000)
store.add(customA, customB, customC)

store.getAssess()

store.setPrice(13000)
store.getAssess()


