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
var combineReducers = function (reducers) {
    var keys = Object.keys(reducers);
    return function (state, action) {
        if (state === void 0) { state = {}; }
        var nextState = {};
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var reducer_1 = reducers[key];
            nextState[key] = reducer_1(state[key], action);
        }
        return nextState;
    };
};
var Store = /** @class */ (function () {
    function Store(reducer, initState) {
        var _this = this;
        this.getState = function () { return _this.state; };
        this.dispatch = function (action) {
            _this.state = _this.reducer(_this.state, action);
            for (var _i = 0, _a = _this.listeners; _i < _a.length; _i++) {
                var listener_1 = _a[_i];
                listener_1();
            }
        };
        this.reducer = reducer;
        this.state = initState;
        this.listeners = [];
    }
    Store.prototype.subscribe = function (listener) {
        this.listeners.push(listener);
    };
    Store.prototype.unsubscribe = function (listener) {
        this.listeners = this.listeners.filter(function (item) { return item !== listener; });
    };
    Store.prototype.applyMiddleware = function (middleware) {
        var next = this.dispatch;
        // 最小开放原则，只需要提供 getState 方法
        var simpleStore = {
            getState: this.getState
        };
        this.dispatch = middleware(simpleStore)(next);
    };
    Store.prototype.applyManyMiddleware = function () {
        var manyMiddleware = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            manyMiddleware[_i] = arguments[_i];
        }
        var simpleStore = {
            getState: this.getState
        };
        var next = this.dispatch;
        for (var _a = 0, manyMiddleware_1 = manyMiddleware; _a < manyMiddleware_1.length; _a++) {
            var middleware = manyMiddleware_1[_a];
            this.dispatch = middleware(simpleStore)(next);
            next = this.dispatch;
        }
    };
    return Store;
}());
var countReducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
var infoReducer = function (state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return __assign(__assign({}, state), { name: action === null || action === void 0 ? void 0 : action.name });
        case 'SET_DESCRIPTION':
            return __assign(__assign({}, state), { description: action === null || action === void 0 ? void 0 : action.description });
        default:
            return state;
    }
};
var reducer = combineReducers({
    count: countReducer,
    info: infoReducer
});
var initState = {
    count: 0,
    info: {
        name: '',
        description: ''
    }
};
var store = new Store(reducer, initState);
var listener = function () {
    console.log('subscribe', store.getState());
};
store.subscribe(listener);
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'SET_NAME',
    name: 'front_end'
});
store.dispatch({
    type: 'INCREMENT'
});
// 扩展中间件功能
var loggerMiddleware = function (store) { return function (next) { return function (action) {
    console.log('Call action', action.type);
    next(action);
}; }; };
var timestampMiddleware = function (store) { return function (next) { return function (action) {
    console.log('Call timer', new Date().getTime());
    next(action);
}; }; };
// 独立 store 作为参数是为了保证中间件的独立性
var contrastMiddleware = function (store) { return function (next) { return function (action) {
    console.log('previous', store.getState());
    next(action);
    console.log('next', store.getState());
}; }; };
// 取消订阅
store.unsubscribe(listener);
// 使用中间件
store.applyMiddleware(loggerMiddleware);
store.applyManyMiddleware(timestampMiddleware, contrastMiddleware);
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'SET_DESCRIPTION',
    description: 'this is the description'
});
