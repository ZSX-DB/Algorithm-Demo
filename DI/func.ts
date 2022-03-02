type Service = {
    data: string
    getData: () => string
    setData: (data: string) => void
}

const service: Service = {
    data: '',
    getData() {
        return this.data
    },
    setData(data) {
        this.data = data
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

// 与类相比，核心是注入同一个实例
const p1 = new Page1(service)
const p2 = new Page2(service)
p1.setDataToService('neo')
console.log(p2.getDataFromService())
