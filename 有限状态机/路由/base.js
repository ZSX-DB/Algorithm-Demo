/**
 * spa
 * 单页面应用，每个页面是一个状态
 */

class SPA {
    constructor() {
        // 将每个页面看作一个状态
        this.currentPage = 'index'
        // path是必须的值
        this.router = [
            {
                path:'/',
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
                path: '*',
                component: '404'
            }
        ]
    }

    // select中转(根据路由选择跳转页面)，调度方法
    select(path){
        // 判断页面存不存在（假设页面存在）
        let isExist=0
        this.router.forEach(item=>{
            if(item.path===path){
                isExist=1
                item.redirect===undefined?this.currentPage=item.component:this.select(item.redirect)
            }
        })
        if(!isExist) {
            this.currentPage='404'
        }
    }

    // 输出页面信息
    logInfo(){
        console.log(`Now the page is ${this.currentPage}`)
    }

}

let owlSystem = new SPA()
owlSystem.select('/about')
owlSystem.logInfo()
owlSystem.select('/download')
owlSystem.logInfo()
owlSystem.select('/')
owlSystem.logInfo()