/**
 * 路由状态机
 * 实现功能
 * - 正常匹配
 * - 重定向
 * - 404
 */

class RouterStateMachine {
    constructor(router) {
        this.currentPage = ''
        this.router = router
    }

    input(path) {
        this.currentPage = this.match(path)
    }

    match(path) {
        for (const item of this.router) {
            if (item.path === '*') return item.component
            if (item.path === path && item.component) return item.component
            if (item.path === path && item.redirect) return this.match(item.redirect)
        }
    }

    log() {
        console.log(`Current Page: ${this.currentPage}`)
    }

}

const router = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: 'login'
    },
    {
        path: '/about',
        component: 'about'
    },
    {
        path: '/hot',
        component: 'hot'
    },
    {
        // *必须设置在最后, 以实现全部匹配
        path: '*',
        component: '404'
    }
]

const rsm = new RouterStateMachine(router)

rsm.input('/')
rsm.log()

rsm.input('/none')
rsm.log()

rsm.input('/hot')
rsm.log()
