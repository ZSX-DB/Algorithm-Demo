type ShowState = Record<string, boolean>

interface TransferShowState extends ShowState {
    unselectFromAcct: boolean
    amountEmpty: boolean
    unselectCcy: boolean
}

type HintList = [boolean, string][]

interface ErrorState<T extends ShowState> {
    showState: T
    hintList: HintList
}

const initTransferShowState: TransferShowState = {
    unselectFromAcct: false,
    amountEmpty: false,
    unselectCcy: false
}

interface HandleModule<T extends ShowState> {
    condition: boolean
    id: string
    key: keyof T
}


// IOC
class ErrorHandle<T extends ShowState> {
    private errorState: ErrorState<T>
    private readonly copyShowState: T

    constructor(initShowState: T) {
        this.copyShowState = {...initShowState}
        this.errorState = {
            showState: {...initShowState},
            hintList: []
        }
    }

    init() {
        this.errorState = {
            showState: {...this.copyShowState},
            hintList: []
        }
    }

    add(...modules: HandleModule<T>[]): void {
        this.init()
        modules.forEach(module => {
            this.errorState.showState[module.key] = module.condition as T[keyof T]
            this.errorState.hintList.push([this.errorState.showState[module.key], module.id])
        })
    }

    output(): [ErrorState<T>, boolean] {
        return [this.errorState, Object.values(this.errorState.showState).includes(true)]
    }

}

const unselectFromAcct: HandleModule<TransferShowState> = {
    condition: true,
    id: 'unselect-from-acct',
    key: 'unselectFromAcct'
}
const amountEmpty: HandleModule<TransferShowState> = {
    condition: false,
    id: 'amount-empty',
    key: 'amountEmpty'
}
const unselectCcy: HandleModule<TransferShowState> = {
    condition: false,
    id: 'unselect-ccy',
    key: 'unselectCcy'
}

const errorHandle = new ErrorHandle<TransferShowState>(initTransferShowState)
errorHandle.add(unselectFromAcct, amountEmpty, unselectCcy)
const [tmpErrorState, result] = errorHandle.output()
console.log(tmpErrorState, result)
