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

// 定义一个全局对象，可满足两个特点：唯一和可全局访问
let globalObj = {};

// 使用全局变量会有以下问题：
//
// 1、命名空间污染（变量名冲突）
// 2、维护时不方便管控（容易不小心覆盖）

// 全局变量问题折中的应对方案：
//
// 1、使用命名空间
// 2、闭包封装私有变量（利用函数作用域）
// 3、ES6的 const/symbol

// 虽然全局变量可以实现单例，但因其自身的问题，不建议在实际项目中将其作为单例模式的应用，特别是中大型项目的应用中，全局变量的维护该是考虑的成本。

// let Singleton = function(name) {
//     this.name=name;
//     this.instance = null;
// }
//
// Singleton.prototype.getName=function () {
//     return this.name
// }
//
// Singleton.getInstance=function(name){
//     if(this.instance){
//         return this.instance
//     }
//     return this.instance=new Singleton(name)
// }
//
// let myName=Singleton.getInstance('张二三');
//
// console.log(myName.getName())

class Singleton {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    static getInstance(name) {
        if (!this.instance) {
            return this.instance = new Singleton(name)
        }
        return this.instance
    }

}

Singleton.instance=null;

let myName=Singleton.getInstance('张二三'),
    herName=Singleton.getInstance('一一');

console.log(myName.getName(),herName.getName())



// 适用场景
// “单例模式的特点，意图解决：维护一个全局实例对象。”
//
// 引用第三方库（多次引用只会使用一个库引用，如 jQuery）
// 弹窗（登录框，信息提升框）
// 购物车 (一个用户只有一个购物车)
// 全局态管理 store (Vuex / Redux)

class Cart {

    constructor(goods) {
        this.cart=[];
    }

    //获取购物车信息
    getCart(){
        return this.cart
    }

    //添加商品进购物车
    addToCart(goods){
        this.cart.push(goods)
    }

    //清空购物车
    clearCart(){
        this.cart.length=0;
    }

    static getInstance() {
        if (!this.instance) {
            return this.instance = new Cart()
        }
        return this.instance
    }

}

Cart.instance=null;

let myCart=Cart.getInstance();
myCart.addToCart('milk');
myCart.addToCart('beef');
myCart.clearCart()
console.log(myCart.getCart())















