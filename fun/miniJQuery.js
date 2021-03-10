/**
 * return this 可以组成调用链
 * 利用调用链实现简单的 jQuery
 */
class ChainCalls {
    constructor(initial) {
        this.sum = initial
    }

    add(num) {
        this.sum += num
        return this
    }

    end(){
        return this.sum
    }

}

console.log(new ChainCalls(4).add(5).add(6).add(17).add(99).end())

class MiniJQuery {
    constructor(context) {
        // context instanceof HTMLElement 判断是否是dom节点
        this.node = context instanceof HTMLElement ? context : document.querySelector(context)
    }

    addClass(className) {
        this.node.classList.add(className)
        return this
    }

    removeClass(className) {
        this.node.classList.remove(className)
        return this
    }

    toggleClass(className) {
        const classList = this.node.classList
        classList.contains(className) ? classList.remove(className) : classList.add(className)
        return this
    }

    setStyle(styleRules) {
        for (const [key, val] of Object.entries(styleRules)) {
            this.node.style[key] = val
        }
        return this
    }

    hide() {
        this.node.style.display = 'none'
        return this.node
    }

    show() {
        this.node.style.display = ''
        return this.node
    }

    // 父子节点方法
    getChildren(idx) {
        return new MiniJQuery(this.node.children[idx])
    }

    getParent() {
        return new MiniJQuery(this.node.parentNode)
    }

    // event方法
    click(fn) {
        this.node.addEventListener('click', fn)
        return this
    }

}
