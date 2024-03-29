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

type Level = 'A' | 'B' | 'C' | 'D' | 'E'

type Kpi = {
    [key in Level]: (salary: number) => number
}

const kpi: Kpi = {
    'A': salary => salary * 1.2,
    'B': salary => salary * 1.1,
    'C': salary => salary,
    'D': salary => salary * 0.9,
    'E': salary => salary * 0.8
}

const getSalary = (level: Level, salary: number): number => kpi[level](salary)

console.log(getSalary('A', 20000))
console.log(getSalary('B', 10000))
console.log(getSalary('D', 9000))
