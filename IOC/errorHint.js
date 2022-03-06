var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var initTransferShowState = {
    unselectFromAcct: false,
    amountEmpty: false,
    unselectCcy: false
};
// IOC
var ErrorHandle = /** @class */ (function () {
    function ErrorHandle(initShowState) {
        this.copyShowState = __assign({}, initShowState);
        this.errorState = {
            showState: __assign({}, initShowState),
            hintList: []
        };
    }
    ErrorHandle.prototype.init = function () {
        this.errorState = {
            showState: __assign({}, this.copyShowState),
            hintList: []
        };
    };
    ErrorHandle.prototype.add = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        this.init();
        modules.forEach(function (module) {
            _this.errorState.showState[module.key] = module.condition;
            _this.errorState.hintList.push([_this.errorState.showState[module.key], module.id]);
        });
    };
    ErrorHandle.prototype.output = function () {
        return [this.errorState, Object.values(this.errorState.showState).includes(true)];
    };
    return ErrorHandle;
}());
var unselectFromAcct = {
    condition: true,
    id: 'unselect-from-acct',
    key: 'unselectFromAcct'
};
var amountEmpty = {
    condition: false,
    id: 'amount-empty',
    key: 'amountEmpty'
};
var unselectCcy = {
    condition: false,
    id: 'unselect-ccy',
    key: 'unselectCcy'
};
var errorHandle = new ErrorHandle(initTransferShowState);
errorHandle.add(unselectFromAcct, amountEmpty, unselectCcy);
var _a = errorHandle.output(), tmpErrorState = _a[0], result = _a[1];
console.log(tmpErrorState, result);
