/**
 * Game
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * 1 potion  3
 * 4 5       trap
 * 7 monster 9
 *
 */

class Hero {
    constructor(position) {
        this.position = position
        // 使用引用类型可以修改hp
        this.info = {
            hp: 100
        }
        this.observers = []
        // 顺序为 top right bottom left
        this.location = {
            1: [1, 2, 4, 1],
            2: [2, 3, 5, 1],
            3: [3, 3, 6, 2],
            4: [1, 5, 7, 4],
            5: [2, 6, 8, 4],
            6: [3, 6, 9, 5],
            7: [4, 8, 7, 7],
            8: [5, 9, 8, 7],
            9: [6, 9, 9, 8]
        }
        this.orientation = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3
        }
    }

    add(...observer) {
        this.observers.push(...observer)
    }

    move(direction) {
        this.position = this.location[this.position][this.orientation[direction]]
        console.log(`Now hero is in ${this.position}`)
        this.notify()
    }

    notify() {
        this.observers.forEach(item => {
            item.update(this.position, this.info)
        })
    }

}

class Potion {
    constructor() {
        this.position = 2
        this.used = false
    }

    update(position, info) {
        if (this.position === position && this.used === false) {
            this.used = true
            info.hp += 30
        }
    }
}

class Trap {
    constructor() {
        this.position = 6
        this.used = false
    }

    update(position, info) {
        if (this.position === position && this.used === false) {
            this.used = true
            info.hp -= 60
        }
    }
}

class Monster {
    constructor() {
        this.position = 8
    }

    update(position, info) {
        if (this.position === position) {
            info.hp -= 10
        }
    }
}

const hero = new Hero(5)
const potion = new Potion()
const trap = new Trap()
const monster = new Monster()

hero.add(potion, trap, monster)

hero.move('left')
console.log(hero.info.hp)

hero.move('top')
console.log(hero.info.hp)

hero.move('top')
console.log(hero.info.hp)

hero.move('right')
console.log(hero.info.hp)

hero.move('right')
console.log(hero.info.hp)

hero.move('bottom')
console.log(hero.info.hp)

hero.move('bottom')
console.log(hero.info.hp)

hero.move('left')
console.log(hero.info.hp)

hero.move('bottom')
console.log(hero.info.hp)

hero.move('bottom')
console.log(hero.info.hp)
