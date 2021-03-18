/**
 * 工厂模式
 * 用一个变量来标识实例是否已经存在，如果存在，则直接返回已经创建好的实例，反之就创建一个对象。
 *
 */

const UserFactory = function (role) {

    function User() {
        this.name = '用户'
        this.viewPage = ['首页', '查询']
    }

    function Admin() {
        this.name = '管理员'
        this.viewPage = ['首页', '查询', '权限管理']
    }

    switch (role) {
        case 'admin': {
            return new Admin()
        }
        case 'user': {
            return new User()
        }
        default: {
            throw new Error('参数错误')
        }
    }

}

let admin = UserFactory('admin'),
    user = UserFactory('user')

console.log(admin.name, user.viewPage)

