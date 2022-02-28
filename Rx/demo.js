var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subscription = /** @class */ (function () {
    function Subscription() {
        this.teardowns = [];
    }
    Subscription.prototype.add = function (teardown) {
        this.teardowns.push(teardown);
    };
    Subscription.prototype.unsubscribe = function () {
        this.teardowns.forEach(function (teardown) {
            teardown();
        });
    };
    return Subscription;
}());
var Subscriber = /** @class */ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(observer) {
        var _this = _super.call(this) || this;
        _this.observer = observer;
        _this.isStopped = false;
        return _this;
    }
    Subscriber.prototype.next = function (val) {
        if (this.observer.next && this.isStopped === false) {
            this.observer.next(val);
        }
    };
    Subscriber.prototype.error = function (err) {
        var _a;
        this.isStopped = true;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.error(err);
    };
    Subscriber.prototype.complete = function () {
        var _a;
        this.isStopped = true;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.complete();
        this === null || this === void 0 ? void 0 : this.unsubscribe();
    };
    return Subscriber;
}(Subscription));
var Observable = /** @class */ (function () {
    function Observable(subscribeFn) {
        this.subscribeFn = subscribeFn;
    }
    Observable.prototype.subscribe = function (observer) {
        var subscriber = new Subscriber(observer);
        subscriber.add(this.subscribeFn(subscriber));
        return subscriber;
    };
    return Observable;
}());
var source = new Observable(function (observer) {
    var i = 0;
    var timer = setInterval(function () {
        observer.next(++i);
    }, 1000);
    return function () {
        clearInterval(timer);
    };
    // return {
    //     unsubscribe: () => {
    //         clearInterval(timer)
    //     }
    // }
    // return function unsubscribe() {
    //     clearInterval(timer);
    // };
});
var subscription = source.subscribe({
    next: function (v) {
        console.log(v);
    },
    error: function (err) { return console.error(err); },
    complete: function () { return console.log('complete'); }
});
setTimeout(function () {
    subscription.unsubscribe();
}, 4500);
