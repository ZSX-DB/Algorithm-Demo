// const myAtoi = (s: string): number => {
//     const record: Set<string> = new Set<string>(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
//     const limitNum = (num: number): number => num >= 0 ? Math.min(num, 2 ** 31 - 1) : Math.max(num, -(2 ** 31))
//     s = s.trimLeft()
//     let n: string = ''
//     for (let i = 0; i < s.length; i++) {
//         const ch = s[i]
//         if (record.has(ch) || (i === 0 && ['+', '-'].includes(ch))) {
//             n += ch
//         } else {
//             break
//         }
//     }
//     return n.length === 0 || isNaN(Number(n)) ? 0 : limitNum(Number(n))
// }

const myAtoi = (s: string): number => {
    type State = 'start' | 'sign' | 'num' | 'end'

    class Automaton {
        private state: State
        private sign: 1 | -1
        private value: number
        private readonly nums: Set<string>
        private readonly changeMap: Map<State, [State, State, State, State]>

        constructor(s: string) {
            this.state = 'start'
            this.sign = 1
            this.value = 0
            this.nums = new Set<string>(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
            this.changeMap = new Map<State, [State, State, State, State]>([
                ['start', ['start', 'sign', 'num', 'end']],
                ['sign', ['end', 'end', 'num', 'end']],
                ['num', ['end', 'end', 'num', 'end']],
                ['end', ['end', 'end', 'end', 'end']]
            ])
            this.traverse(s)
        }

        getMapIndex(ch: string): 0 | 1 | 2 | 3 {
            if (ch === ' ') {
                return 0
            } else if (['+', '-'].includes(ch)) {
                return 1
            } else if (this.nums.has(ch)) {
                return 2
            } else {
                return 3
            }
        }

        transferState(ch: string): void {
            this.state = this.changeMap.get(this.state)[this.getMapIndex(ch)]
            if (this.state === 'num') {
                this.value = this.value * 10 + Number(ch)
                this.value = Math.abs(this.sign === 1 ? Math.min(2 ** 31 - 1, this.value) : Math.max(-(2 ** 31), -this.value))
            } else if (this.state === 'sign') {
                this.sign = ch === '+' ? 1 : -1
            }
        }

        traverse(s: string): void {
            for (const ch of s) {
                this.transferState(ch)
            }
        }

        output(): number {
            return this.value * this.sign
        }

    }

    return new Automaton(s).output()

}
