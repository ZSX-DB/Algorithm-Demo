/**
 * 命令模式
 * 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
 * -------------------------------------------------------------------------------------------------
 * 命令模式由三种角色构成：
 * 1、发布者 invoker（发出命令，调用命令对象，不知道如何执行与谁执行）；
 * 2、接收者 receiver (提供对应接口处理请求，不知道谁发起请求）；
 * 3、命令对象 command（接收命令，调用接收者对应接口处理发布者的请求）。
 * -------------------------------------------------------------------------------------------------
 * 应用场景
 * 1、不关注执行者，不关注执行过程；
 * 2、只要结果，支持撤销请求、延后处理、日志记录等。
 * -------------------------------------------------------------------------------------------------
 * 优点：
 * 1、发布者与接收者实现解耦；
 * 2、可扩展命令，对请求可进行排队或日志记录。（支持撤销，队列，宏命令等功能）。
 * -------------------------------------------------------------------------------------------------
 * 缺点：
 * 额外增加命令对象，非直接调用，存在一定开销。
 *
 */

//绩效发布-----发布者类
class Performance{
    constructor(soft) {
        this.soft=soft
    }

    invoke(type,score){
        this.soft.check(type,score)
    }

}

//考核软件-----命令对象类
class CheckSoft {
    constructor(person) {
        this.person=person;
    }

    check(type,score){

        switch (type) {
            case 'add':{
                this.person.add(score)
                break
            }
            case 'minus':{
                this.person.minus(score)
                break
            }
            case 'clear':{
                this.person.clear()
            }
        }

    }

}

//员工-----接收者类
class Person {

    constructor(name) {
        //初始绩效
        this.score=100
        this.name=name
    }

    add(score){
        this.score+=score
    }

    minus(score){
        this.score-=score
    }

    clear(){
        this.score=0
    }

}


let james=new Person('James')
let soft=new CheckSoft(james)
let performance=new Performance(soft)

performance.invoke('add',17)
console.log(`${james.name}增加了绩效，现在的绩效为${james.score}`)

performance.invoke('minus',42)
console.log(`${james.name}减少了绩效，现在的绩效为${james.score}`)

performance.invoke('clear')
console.log(`${james.name}清空了绩效，现在的绩效为${james.score}`)












