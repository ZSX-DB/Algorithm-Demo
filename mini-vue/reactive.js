var Deps = /** @class */ (function () {
    function Deps() {
        this.subscribers = new Set();
    }
    Deps.prototype.depend = function () {
        if (activeEffect) {
            this.subscribers.add(activeEffect);
        }
    };
    Deps.prototype.notify = function () {
        this.subscribers.forEach(function (effect) {
            effect();
        });
    };
    return Deps;
}());
var activeEffect = null;
var targetMap = new WeakMap();
var getDep = function (target, key) {
    var depsMap = targetMap.get(target);
    if (depsMap === undefined) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }
    var dep = depsMap.get(key);
    if (dep === undefined) {
        dep = new Deps();
        depsMap.set(key, dep);
    }
    return dep;
};
var reactiveHandler = {
    get: function (target, key, receiver) {
        var dep = getDep(target, key);
        dep.depend();
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        var dep = getDep(target, key);
        var result = Reflect.set(target, key, value, receiver);
        dep.notify();
        return result;
    }
};
var reactive = function (raw) {
    return new Proxy(raw, reactiveHandler);
};
var state = reactive({
    count: 0
});
var watchEffect = function (effect) {
    activeEffect = effect;
    effect();
    activeEffect = null;
};
watchEffect(function () {
    console.log('=====', state.count, 'count' in state, 'msg' in state);
});
state.count++;
