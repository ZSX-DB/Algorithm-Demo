/**
 * 策略模式
 * 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
 *
 * 模式特点
 * 1、策略类：算法封装成独立的函数/对象
 * 2、环境类：根据不同参数调用对应的策略函数/对象执行
 *
 * 模式实现
 * 实现方式：一个基于策略模式的程序至少由两部分组成
 * 第一个部分是一组策略类 Strategies（可变），策略类封装类具体的算法，并负责具体的计算过程。
 * 第二个部分是环境类 Context（不变）， Context 接收客户的请求，随后把请求委托给某一个策略类。
 * ---------------------------------------------------------------------------
 * 优点：
 * 利用组合、委托、多态的技术和思想，避免多重条件选择语句 if...else/switch...case；
 * 复用性更高，算法函数可在系统其它地方使用；
 * 支持设计模式 “开发-封闭原则“ ，算法封装在独立的 Strategy 中，易于维护和扩展；
 * 策略模式使用 “组合和委托” 来让 Context 拥有执行算法的能力，一种替换对象继承的可行方案
 *
 * 缺点：
 * 增加了许多策略类或对象（开发人员职能划分明确，人员成本有所增加）；
 * 必须了解各个 Strategy 的不同点，违反 “最少知识原则”
 *
 */

// 策略类（开发人员）
const Strategies = {
    "backend": task => {
        console.log('进行后端任务：', task)
    },
    "frontend": task => {
        console.log('进行前端任务：', task)
    },
    "testend"(task){
        console.log('进行测试任务：', task)
    }
};

//  环境类（开发组长）
const Context = function (type, task) {
    typeof Strategies[type] === 'function' && Strategies[type](task);
}

Context('backend', '优化服务器缓存');
Context('frontend', '优化首页加载速度');
Context('testend', '完成系统并发测试');


// 1、算法独立封装，任务分发；
// 2、复用性更好，不局限于 Context 调用；
// 3、代码阅读性提高。

console.log(Strategies)
