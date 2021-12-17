/**
 * Transfer params
 * @param tag
 * @param props
 * @param children
 */
var h = function (tag, props, children) { return ({
    tag: tag,
    props: props,
    children: children
}); };
/**
 * Mount
 * @param vNode
 * @param container
 */
var mount = function (vNode, container) {
    var tag = vNode.tag, props = vNode.props, children = vNode.children;
    var el = document.createElement(tag);
    vNode.el = el;
    if (props) {
        for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key.startsWith('on')) {
                el.addEventListener(key.slice(2).toLowerCase(), value);
            }
            else {
                el.setAttribute(key, value);
            }
        }
    }
    if (children) {
        if (typeof children === 'string') {
            el.textContent = children;
        }
        else {
            children.forEach(function (child) {
                mount(child, el);
            });
        }
    }
    container.appendChild(el);
};
/**
 * Patch vNode
 * @param vn1
 * @param vn2
 */
var patch = function (vn1, vn2) {
    var _a, _b;
    var el = vn1.el;
    vn2.el = el;
    if (vn1.tag === vn2.tag) {
        // patch props
        var oldProps = (_a = vn1.props) !== null && _a !== void 0 ? _a : {};
        var newProps = (_b = vn2.props) !== null && _b !== void 0 ? _b : {};
        for (var key in newProps) {
            var oldValue = oldProps[key];
            var newValue = newProps[key];
            if (newValue !== oldValue) {
                el.setAttribute(key, newValue);
            }
        }
        for (var key in oldProps) {
            if (!(key in newProps)) {
                el.removeAttribute(key);
            }
        }
        // patch children
        var oldChildren = vn1.children;
        var newChildren = vn2.children;
        if (typeof oldChildren === 'string' && typeof newChildren === 'string') {
            if (newChildren !== oldChildren) {
                el.textContent = newChildren;
            }
        }
        else if (typeof oldChildren === 'string' && typeof newChildren !== 'string') {
            el.innerHTML = '';
            newChildren.forEach(function (child) {
                mount(child, el);
            });
        }
        else if (typeof oldChildren !== 'string' && typeof newChildren === 'string') {
            el.textContent = newChildren;
        }
        else if (typeof oldChildren !== 'string' && typeof newChildren !== 'string') {
            // The most complex branch, all arrays
            var commonLength = Math.min(oldChildren.length, newChildren.length);
            for (var i = 0; i < commonLength; i++) {
                patch(oldChildren[i], newChildren[i]);
            }
            if (oldChildren.length > commonLength) {
                oldChildren.slice(commonLength).forEach(function (child) {
                    el.removeChild(child.el);
                });
            }
            else if (newChildren.length > commonLength) {
                newChildren.slice(commonLength).forEach(function (child) {
                    mount(child, el);
                });
            }
        }
    }
    else {
        // ...replace
    }
};
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
var watchEffect = function (effect) {
    activeEffect = effect;
    effect();
    activeEffect = null;
};
var App = {
    data: reactive({
        count: 0
    }),
    render: function () {
        return h('h1', {
            onClick: function () {
                App.data.count++;
            }
        }, String(App.data.count));
    }
};
var mountApp = function (component, container) {
    var isMounted = false;
    var prevVDom;
    watchEffect(function () {
        if (isMounted === false) {
            prevVDom = component.render();
            mount(prevVDom, container);
            isMounted = true;
        }
        else {
            var newVDom = component.render();
            patch(prevVDom, newVDom);
            prevVDom = newVDom;
        }
    });
};
mountApp(App, document.querySelector('#app'));
