/**
 * 适配器模式
 * 将一个类（对象）的接口（方法或属性）转化成客户希望的另外一个接口（方法或属性）
 * 使得原本由于接口不兼容而不能一起工作的那些类（对象）可以正常协作。简单理解就是为兼容而生的 “转换器”。
 *
 * 模式特点
 * 1、新包装对象（适配器对象）实现对原对象接口的访问（接口名可不同）
 * 2、适配器对象不对请求数据做预处理，直接传入原对象接口处理
 * 3、适配器对象对外接口名统一，外部调用者可统一接口调用多对象方法
 *
 * 模式实现
 * 实现方式：在不改变原有对象接口的基础上，定义一个包装对象，新对象转接调用原有接口，使外部调用者可以正常使用。
 * -------------------------------------------------------------------------------------
 *
 * 适用场景
 * 1、跨浏览器兼容
 * 2、整合第三方SDK
 * 3、新老接口兼容
 *
 * 适配器模式的初衷是为了解决多对象（接口）兼容问题，
 * 如果存在多对象协同工作时，不方便直接修改原对象的基础上，可考虑用适配器封装，以便外部调用者统一使用。
 *
 * 优缺点
 * 优点：兼容性，保证外部可统一接口调用
 * 缺点：额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化）。
 *
 */

class Mp4Player {
    constructor() {
        this.type = 'mp4'
    }

    play(fileInfo) {
        if (fileInfo.type === this.type) {
            console.log(`开始播放mp4视频: ${fileInfo.name}`)
        } else {
            console.log('Mp4播放器不支持此格式')
        }
    }

}

class MkvPlayer {
    constructor() {
        this.type = 'mkv'
    }

    play(fileInfo) {
        if (fileInfo.type === this.type) {
            console.log(`开始播放mkv视频: ${fileInfo.name}`)
        } else {
            console.log('Mkv播放器不支持此格式')
        }
    }
}

class VideoPlayer {

    play(fileInfo) {
        switch (fileInfo.type) {
            case 'mp4':
                new Mp4Player().play(fileInfo)
                break
            case 'mkv':
                new MkvPlayer().play(fileInfo)
                break
            default:
                console.log('目前暂不支持此格式')
        }
    }

}

const movie1 = {
    type: 'mp4',
    name: '教父1'
}
const movie2 = {
    type: 'mkv',
    name: '黑客帝国'
}
const movie3 = {
    type: 'avi',
    name: '大闹天宫'
}


const mp4Player = new Mp4Player()
mp4Player.play(movie1)
mp4Player.play(movie2)

const mkvPlayer = new MkvPlayer()
mkvPlayer.play(movie1)
mkvPlayer.play(movie2)

const videoPlayer = new VideoPlayer()
videoPlayer.play(movie1)
videoPlayer.play(movie2)
videoPlayer.play(movie3)
