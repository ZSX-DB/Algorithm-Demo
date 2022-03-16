enum SQOperator {
    query,
    create,
    update,
    delete
}

type Book = {
    name: string
    author: string
}

type ExistBook = {
    id: number
} & Book

type BookOption = {
    command: SQOperator.query
} | {
    command: SQOperator.create
    book: Book
} | {
    command: SQOperator.update,
    book: ExistBook
} | {
    command: SQOperator.delete,
    id: number
}

// 针对 Book 表的 command
class BookCommand {
    private readonly command: SQOperator
    private readonly fns: Map<SQOperator, () => void>

    constructor(option: BookOption) {
        this.command = option.command
        this.fns = new Map<SQOperator, () => void>([
            [SQOperator.query, () => {
                console.log('Query operate')
            }],
            [SQOperator.create, () => {
                console.log('Create operate')
            }],
            [SQOperator.update, () => {
                console.log('Update operate')
            }],
            [SQOperator.delete, () => {
                console.log('Delete operate')
            }]
        ])
    }

    execute(): void {
        this.fns.get(this.command)()
    }
}

class BookInvoker {
    private readonly commands: BookCommand[]

    constructor() {
        this.commands = []
    }

    push(...commands: BookCommand[]) {
        this.commands.push(...commands)
    }

    execute() {
        this.commands.forEach(command => {
            command.execute()
        })
        this.clear()
    }

    private clear() {
        this.commands.length = 0
    }

}

const queryCommand = new BookCommand({command: SQOperator.query})
const createCommand = new BookCommand({command: SQOperator.create, book: {name: 'b1', author: 'a1'}})
const updateCommand = new BookCommand({command: SQOperator.update, book: {id: 3, name: 'b1', author: 'a1'}})
const deleteCommand = new BookCommand({command: SQOperator.delete, id: 4})

const bookInvoker = new BookInvoker()
bookInvoker.push(queryCommand, createCommand, updateCommand, deleteCommand)
bookInvoker.execute()


