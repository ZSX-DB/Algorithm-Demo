/**
 * 代理模式
 * 为一个对象提供一个代用品或占位符，以便控制它的访问。
 *
 *模式特点
 * 1、代理对象可预先处理请求，再决定是否转交给本体；
 * 2、代理和本体对外显示接口保持一致性
 * 3、代理对象仅对本体做一次包装
 *
 * 模式细分
 * 1、虚拟代理（将开销大的运算延迟到需要时执行）
 * 2、缓存代理（为开销大的运算结果提供缓存）
 * 3、保护代理（黑白双簧，代理充当黑脸，拦截非分要求）
 * 4、防火墙代理（控制网络资源的访问）
 * 5、远程代理（为一个对象在不同的地址控件提供局部代表）
 * 6、智能引用代理（访问对象执行一些附加操作）
 * 7、写时复制代理（延迟对象复制过程，对象需要真正修改时才进行）
 *
 * JavaScript 中常用的代理模式为 “虚拟代理” 和 “缓存代理”。
 *
 */

// 例子：代理接听电话，实现拦截黑名单
let backPhoneList = ['189XXXXX140'];       // 黑名单列表
// 代理
function ProxyAcceptPhone(phone) {
    // 预处理
    console.log('电话正在接入...');
    if (backPhoneList.includes(phone)) {
        // 屏蔽
        console.log('屏蔽黑名单电话');
    } else {
        // 转接
        AcceptPhone.call(this, phone);
    }
}

// 本体
function AcceptPhone(phone) {
    console.log('接听电话:', phone);
}

// 外部调用代理
// ProxyAcceptPhone('189XXXXX140');
// ProxyAcceptPhone('189XXXXX141');


// --------------------------------------------------------------------------------------

function getTierErgodicValue(num) {
    for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            for(let k=0;k<1000;k++){
                num+=2
            }
        }
    }
    return num
}


//缓存代理函数
let proxyGetTierErgodicValue = (function () {
    let existNum = {}
    return function (num) {
        if (existNum[num] !== undefined) {
            return existNum[num]
        } else {
            return existNum[num] = getTierErgodicValue(num)
        }
    }
})()



// console.time('不使用代理')
// //计算了15次
// for(let i=0;i<15;i++){
//     console.log(getTierErgodicValue(3))
// }
// console.timeEnd('不使用代理')
//
// console.time('使用代理')
// //只耗费了计算一次的时间
// for (let i = 0; i < 15; i++) {
//     console.log(proxyGetTierErgodicValue(4))
// }
// console.timeEnd('使用代理')


// --------------------------------------------------------------------------------------

// ES6新增的Proxy代理对象的操作，具体的实现方式是在handler上定义对象自定义方法集合，以便预先管控对象的操作。

const handler={
    get(target,key){
        switch (key) {
            case 'name':{
                target[key]='张二三'
                return target[key]
            }
            case 'age':{
                target[key]=24
                return target[key]
            }
            default:{
                return target[key]
            }
        }
    },
    set(target,key,value){
        if(key==='score'){
            target[key]=value>80?'不错':'待提高'
        }else{
            target[key]=value
        }
    }
}

let me=new Proxy({},handler)

me.score=5

me.load='加载中'

console.log(me.name,me.age,me.load,me.score)




























