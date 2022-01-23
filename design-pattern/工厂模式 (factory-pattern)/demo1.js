/**
 * 工厂模式
 * 用一个变量来标识实例是否已经存在，如果存在，则直接返回已经创建好的实例，反之就创建一个对象
 */

const UserFactory = role => {

    class User {
        constructor() {
            this.role = '用户'
            this.viewPage = ['首页', '查询']
        }

        check(){
            console.log('检查邮箱信息')
        }

    }

    class Admin {
        constructor() {
            this.role = '管理员'
            this.viewPage = ['首页', '查询', '权限管理']
        }

        publish(){
            console.log('邮件以发送，请注意查收')
        }
    }

    const roleTable = {
        'user': new User(),
        'admin': new Admin()
    }

    return roleTable[role]

}

const admin = UserFactory('admin')
const user = UserFactory('user')

admin.publish()
user.check()

