/**
 * 依赖项注入（DI）是一种设计模式，在这种设计模式中，类会从外部源请求依赖项而不是创建它们
 * 依赖注入实现共享数据
 * 以 _ 开头的为私有变量
 */
class Service {
    private data: string

    constructor() {
        this.data = ''
    }

    setData(data: string): void {
        this.data = data
    }

    getData(): string {
        return this.data
    }

}

class Page1 {
    private service: Service

    constructor(service: Service) {
        this.service = service
    }

    setDataToService(data) {
        this.service.setData(data)
    }

    getDataFromService() {
        return this.service.getData()
    }

}

class Page2 {
    private service: Service

    constructor(service: Service) {
        this.service = service
    }

    setDataToService(data) {
        this.service.setData(data)
    }

    getDataFromService() {
        return this.service.getData()
    }

}

const service = new Service()
const p1 = new Page1(service)
const p2 = new Page2(service)

p1.setDataToService('neo')
console.log(p2.getDataFromService())
