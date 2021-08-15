/**
 * 依赖项注入（DI）是一种设计模式，在这种设计模式中，类会从外部源请求依赖项而不是创建它们
 * 依赖注入实现共享数据
 * 以 _ 开头的为私有变量
 */
class Service {
    constructor() {
        this._data = ''
    }

    setData(data) {
        this._data = data
    }

    getData(data) {
        return this._data
    }

}

class Page1 {
    constructor(service) {
        this._service = service
    }

    setDataToService(data) {
        this._service.setData(data)
    }

    getDataFromService() {
        return this._service.getData()
    }

}

class Page2 {
    constructor(service) {
        this._service = service
    }

    setDataToService(data) {
        this._service.setData(data)
    }

    getDataFromService() {
        return this._service.getData()
    }

}

const s = new Service()
const p1 = new Page1(s)
const p2 = new Page2(s)

p1.setDataToService('neo')
console.log(p2.getDataFromService())
