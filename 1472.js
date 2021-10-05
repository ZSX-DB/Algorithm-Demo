class BrowserHistory {
    constructor(homepage) {
        this.urls = [homepage]
        this.index = 0
    }

    visit(url) {
        this.urls = [...this.urls.slice(0, this.index + 1), url]
        this.index++
    }

    back(steps) {
        if (this.index - steps >= 0) {
            this.index -= steps
        } else {
            this.index = 0
        }
        return this.urls[this.index]
    }

    forward(steps) {
        if (this.index + steps < this.urls.length) {
            this.index += steps
        } else {
            this.index = this.urls.length - 1
        }
        return this.urls[this.index]
    }
}
