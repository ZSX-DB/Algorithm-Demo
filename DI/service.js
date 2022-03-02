/**
 * 依赖项注入（DI）是一种设计模式，在这种设计模式中，类会从外部源请求依赖项而不是创建它们
 * 依赖注入实现共享数据
 * 以 _ 开头的为私有变量
 */
var Service = /** @class */ (function () {
    function Service() {
        this.data = '';
    }
    Service.prototype.setData = function (data) {
        this.data = data;
    };
    Service.prototype.getData = function () {
        return this.data;
    };
    return Service;
}());
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
var service = new Service();
var p1 = new Page1(service);
var p2 = new Page2(service);
p1.setDataToService('neo');
console.log(p2.getDataFromService());
