/**
 * 观察者模式
 * 定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
 *
 * 模式特征
 * 1、一个目标者对象 Subject，拥有方法：添加 / 删除 / 通知 Observer；
 * 2、多个观察者对象 Observer，拥有方法：接收 Subject 状态变更通知并处理；
 * 3、目标对象 Subject 状态变更时，通知所有 Observer。
 *
 *
 * 优势
 * 1、目标者与观察者，功能耦合度降低，专注自身功能逻辑；
 * 2、观察者被动接收更新，时间上解耦，实时接收目标者更新状态。
 * 不完美
 * 虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如 “筛选通知”，“指定主题事件通知” 。
 *
 */

//目标者类
class Subject {

    constructor() {
        //观察者列表
        this.observers = []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        const idx = this.observers.findIndex(item => item === observer)
        idx > -1 && this.observers.splice(idx, 1)
    }

    // 通知
    notify() {
        this.observers.forEach(item => {
            item.update()
        })
    }

    //不同岗位不同人员的工资通常不同，这体现了模式的缺点，定制化不够
    payWages() {
        for (const observer of this.observers) {
            observer.getWages(6000)
        }
    }

}

//观察者类
class Observer {
    constructor(name) {
        this.name = name
        this.account = 0
    }

    update() {
        console.log(`目标者通知更新---单位: ${this.name}`);
    }

    getWages(wages) {
        this.account += wages
        console.log(`单位: ${this.name}---账户余额: ${this.account}`)
    }

}

//实例化目标者
const subject = new Subject()

//实例化观察者
const obs1 = new Observer('前端开发者')
const obs2 = new Observer('后端开发者')
const obs3 = new Observer('测试人员')

//添加观察者
subject.add(obs1)
subject.add(obs2)
subject.add(obs3)

subject.notify()
subject.payWages()
subject.payWages()



