interface Handler {
    setNext: (handler: Handler) => Handler
    read: (filename: string) => void
}

interface String {
    endsWith(searchString: string, endPosition?: number): boolean
}

abstract class BaseHandler implements Handler {

    private nextHandler: Handler

    protected abstract getExtension(): string

    protected abstract parse(filename: string): void

    setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler
    }

    read (filename: string): void {
        if(filename.endsWith(this.getExtension())) {
            this.parse(filename)
        } else if (this.nextHandler) {
            this.nextHandler.read(filename)
        } else {
            console.log("Does not support this kind of file")
        }
    }

}

class JPGHandler extends BaseHandler {

    protected getExtension(): string {
        return 'jpg'
    }

    protected parse(filename: string): void {
        console.log(`Parse the jpg file: ${filename}`)
    }

}

class MDHandler extends BaseHandler {

    protected getExtension(): string {
        return 'md'
    }

    protected parse(filename: string): void {
        console.log(`Parse the md file: ${filename}`)
    }

}

class ExeHandler extends BaseHandler {

    protected getExtension(): string {
        return 'exe'
    }

    protected parse(filename: string): void {
        console.log(`Parse the exe file: ${filename}`)
    }

}

const jpgHandler = new JPGHandler()
const mdHandler = new MDHandler()
const exeHandler = new ExeHandler()

jpgHandler.setNext(mdHandler).setNext(exeHandler)

jpgHandler.read("girl.jpg")
jpgHandler.read("learn.md")
jpgHandler.read("category.excel")
