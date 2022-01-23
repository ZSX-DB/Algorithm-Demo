/**
 * 发布订阅模式
 * 基于一个事件（主题）通道，希望接收通知的对象 Subscriber 通过自定义事件订阅主题，
 * 被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。
 *
 * 发布订阅模式与观察者模式的不同，“第三者” （事件中心）出现。目标对象并不直接通知观察者，而是通过事件中心来派发通知。
 *
 */

// 事件中心
let pubSub = {
    list: {},
    subscribe(key, fn) {   // 订阅
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    publish(key, ...arg) {  // 发布
        for(let fn of this.list[key]) {
            fn.call(this, ...arg);
        }
    },
    unSubscribe(key, fn) {     // 取消订阅
        let fnList = this.list[key];
        if (!fnList) return false;

        if (!fn) {
            // 不传入指定取消的订阅方法，则清空所有key下的订阅
            fnList && (fnList.length = 0);
        } else {
            fnList.forEach((item, index) => {
                if (item === fn) {
                    fnList.splice(index, 1);
                }
            })
        }
    }
}

// 订阅
pubSub.subscribe('onwork', time => {
    console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork', time => {
    console.log(`下班了：${time}`);
})
pubSub.subscribe('launch', time => {
    console.log(`吃饭了：${time}`);
})

// 发布
pubSub.publish('offwork', '18:00:00');
pubSub.publish('launch', '12:00:00');

// 取消订阅
pubSub.unSubscribe('onwork');
