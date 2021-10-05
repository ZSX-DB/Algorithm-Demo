class BrowserHistory {
    private urls: string[]
    private index: number

    constructor(homepage: string) {
        this.urls = [homepage]
        this.index = 0
    }

    visit(url: string): void {
        this.urls = [...this.urls.slice(0, this.index + 1), url]
        this.index++
    }

    back(steps: number): string {
        if (this.index - steps >= 0) {
            this.index -= steps
        } else {
            this.index = 0
        }
        return this.urls[this.index]
    }

    forward(steps: number): string {
        if (this.index + steps < this.urls.length) {
            this.index += steps
        } else {
            this.index = this.urls.length - 1
        }
        return this.urls[this.index]
    }
}

const bh = new BrowserHistory('leetcode.com')
bh.visit('google.com')
bh.visit('facebook.com')
bh.visit('youtube.com')
console.log(bh.back(1))
console.log(bh.back(1))
console.log(bh.forward(1))
bh.visit('linkedin.com')
console.log(bh.forward(2))
console.log(bh.back(2))
console.log(bh.back(7))
