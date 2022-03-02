/**
 * Inversion of control
 * Refer to the https://juejin.cn/post/6844903750843236366
 */

// 面向接口编程
interface Module {
    init: () => void
    run: () => void
    initByApp?: (app: App) => void
}

const autoplay: Module = {
    init: () => {
        console.log('Autoplay init')
    },
    run: () => {
        console.log('Autoplay run')
    }
}

const record: Module = {
    init: () => {
        console.log('Record init')
    },
    run: () => {
        console.log('Record run')
    }
}

const createMode: Module = {
    init: () => {
        console.log('CreateMode init')
    },
    run: () => {
        console.log('CreateMode run')
    },
    initByApp: (app: App) => {
        app.mode = {pending: "top"}
    }
}


class App {
    private readonly modules: Module[]
    public mode: {}

    constructor() {
        this.modules = []
        this.mode = {}
    }

    use(...modules: Module[]): App {
        this.modules.push(...modules)
        return this
    }

    init() {
        this.modules.forEach(module => {
            module.init()
            if (module.initByApp) {
                module.initByApp(this)
            }
        })
    }

    run() {
        this.modules.forEach(module => {
            module.run()
        })
    }

}

const app = new App()
app.use(autoplay, record, createMode).init()
app.run()
console.log(app.mode)
