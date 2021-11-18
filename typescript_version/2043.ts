class Bank {
    private readonly balance: number[]

    constructor(balance: number[]) {
        this.balance = balance
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (account1 > this.balance.length || account2 > this.balance.length || money > this.balance[account1 - 1]) {
            return false
        }
        this.balance[account1 - 1] -= money
        this.balance[account2 - 1] += money
        return true
    }

    deposit(account: number, money: number): boolean {
        if (account > this.balance.length) {
            return false
        }
        this.balance[account - 1] += money
        return true
    }

    withdraw(account: number, money: number): boolean {
        if (account > this.balance.length || money > this.balance[account - 1]) {
            return false
        }
        this.balance[account - 1] -= money
        return true
    }
}

const bank = new Bank([10, 100, 20, 50, 30])
console.log(bank.withdraw(3, 10))
console.log(bank.transfer(5, 1, 20))
console.log(bank.deposit(5, 20))
console.log(bank.transfer(3, 4, 15))
console.log(bank.withdraw(10, 50))

