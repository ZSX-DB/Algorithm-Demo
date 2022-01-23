/**
 * 单例模式
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
 *
 * 模式特点
 * 1、类只有一个实例
 * 2、全局可访问该实例
 * 3、自行实例化（主动实例化）
 * 4、可推迟初始化，即延迟执行（与静态类/对象的区别）
 *
 * 优点：适用于单一对象，只生成一个对象实例，避免频繁创建和销毁实例，减少内存占用。
 * 缺点：不适用动态扩展对象，或需创建多个相似对象的场景。
 */

class Cart {
    private static instance: Cart
    private cart: string[] = []

    getCart(): string[] {
        return this.cart
    }

    addToCart(goods: string) {
        this.cart.push(goods)
    }

    clearCart() {
        this.cart.length = 0
    }

    static getInstance(): Cart {
        if(this.instance === undefined) {
            this.instance = new Cart()
        }
        return this.instance
    }
}


const cart1 = Cart.getInstance()
cart1.addToCart("Beef")

const cart2 = Cart.getInstance()
cart2.addToCart("milk")

const cart3 = Cart.getInstance()
console.log(cart3.getCart())

