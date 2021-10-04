const service = {
    _data: '',
    getData() {
        return this._data
    },
    setData(data) {
        this._data = data
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

// 与类相比，核心是注入同一个实例
const p1 = new Page1(service)
const p2 = new Page2(service)
p1.setDataToService('neo')
console.log(p2.getDataFromService())
