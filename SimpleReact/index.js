"use strict";
exports.__esModule = true;
var render = function (container, vNode) {
    var tag = vNode.tag, props = vNode.props, children = vNode.children;
    var el = document.createElement(tag);
    if (props !== undefined) {
        for (var _i = 0, _a = Object.entries(props); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (typeof value === "string") {
                el.setAttribute(key, value);
            }
            else {
                el.addEventListener(key, value);
            }
        }
    }
    if (Array.isArray(children)) {
        children.forEach(function (child) {
            render(el, child);
        });
    }
    else {
        el.textContent = String(children);
    }
    container.appendChild(el);
};
var update = function () {
    var app = document.querySelector('#app');
    app.innerHTML = '';
    render(app, createTree());
};
var useRef = function (initState) {
    var state = {
        value: initState
    };
    var setState = function (newState) {
        state.value = newState;
        update();
    };
    return [state, setState];
};
var _a = useRef(0), count = _a[0], setCount = _a[1];
var createTree = function () {
    return {
        tag: 'div',
        children: [
            {
                tag: 'h1',
                children: 'Title'
            },
            {
                tag: 'button',
                props: {
                    click: function () {
                        setCount(count.value + 1);
                    }
                },
                children: 'btn'
            },
            {
                tag: 'span',
                children: count.value
            }
        ]
    };
};
update();
