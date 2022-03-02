var service = {
    data: '',
    getData: function () {
        return this.data;
    },
    setData: function (data) {
        this.data = data;
    }
};
var Page1 = /** @class */ (function () {
    function Page1(service) {
        this.service = service;
    }
    Page1.prototype.setDataToService = function (data) {
        this.service.setData(data);
    };
    Page1.prototype.getDataFromService = function () {
        return this.service.getData();
    };
    return Page1;
}());
var Page2 = /** @class */ (function () {
    function Page2(service) {
        this.service = service;
    }
    Page2.prototype.setDataToService = function (data) {
        this.service.setData(data);
    };
    Page2.prototype.getDataFromService = function () {
        return this.service.getData();
    };
    return Page2;
}());
// 与类相比，核心是注入同一个实例
var p1 = new Page1(service);
var p2 = new Page2(service);
p1.setDataToService('neo');
console.log(p2.getDataFromService());
