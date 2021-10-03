class Twitter {

    constructor() {
        this.tweet = new Map()
        this.followerMap = new Map()
        this.timeId = 1
    }

    postTweet(userId, tweetId) {
        this.timeId++
        const tweetItem = {
            tweetId,
            timeId: this.timeId
        }
        if (this.tweet.has(userId)) {
            this.tweet.set(userId, [...this.tweet.get(userId), tweetItem])
        } else {
            this.tweet.set(userId, [tweetItem])
        }
    }

    getNewsFeed(userId) {
        const collect = [...(this.tweet.get(userId) || [])]
        const follower = this.followerMap.get(userId) || []
        for (const followee of follower) {
            collect.push(...(this.tweet.get(followee) || []))
        }
        return collect
            .sort((x, y) => y.timeId - x.timeId)
            .slice(0, 10)
            .map(item => item.tweetId)
    }

    follow(followerId, followeeId) {
        if (this.followerMap.has(followerId)) {
            if (this.followerMap.get(followerId).includes(followeeId) === false) {
                this.followerMap.set(followerId, [...this.followerMap.get(followerId), followeeId])
            }
        } else {
            this.followerMap.set(followerId, [followeeId])
        }
    }

    unfollow(followerId, followeeId) {
        this.followerMap.set(followerId, (this.followerMap.get(followerId) || []).filter(item => item !== followeeId))
    }
}

const t = new Twitter()
t.postTweet(1, 5)
console.log(t.getNewsFeed(1))
t.follow(1, 2)
t.postTweet(2, 6)
console.log(t.getNewsFeed(1))
t.unfollow(1, 2)
console.log(t.getNewsFeed(1))
