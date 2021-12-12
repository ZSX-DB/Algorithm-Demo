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
            el.setAttribute(key, value);
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
    // old
    var el = vn1.el;
    vn2.el = el;
    // const el2 = vn2.el as Element
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
var vDom1 = h('div', { "class": 'red' }, [
    h('span', null, 'hello')
]);
var vDom2 = h('div', { "class": 'green' }, [
    h('span', null, 'world')
]);
mount(vDom1, document.querySelector('#app'));
setTimeout(function () {
    patch(vDom1, vDom2);
}, 1000);
