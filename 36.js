// const isValidSudoku = board => {
//     const checkList = row => row.reduce((pre, cur) => pre.add(cur), new Set().add('.')).size - 1 === row.filter(item => item !== '.').length
//     if (board.some(item => checkList(item) === false)) return false
//     if (new Array(9).fill(0).map((_, idx) => board.map(item => item[idx])).some(item => checkList(item) === false)) return false
//     const list = [
//         [0, 3, 0, 3], [3, 6, 0, 3], [6, 9, 0, 3],
//         [0, 3, 3, 6], [3, 6, 3, 6], [6, 9, 3, 6],
//         [0, 3, 6, 9], [3, 6, 6, 9], [6, 9, 6, 9]
//     ]
//     for (const item of list) {
//         const tmp = []
//         for (let i = item[0]; i < item[1]; i++) {
//             for (let j = item[2]; j < item[3]; j++) {
//                 tmp.push(board[i][j])
//             }
//         }
//         if (checkList(tmp) === false) return false
//     }
//     return true
// }

const isValidSudoku = board => {
    const init = () => new Array(9).fill(0).map(_ => [])
    const rows = init()
    const cols = init()
    const boxes = init()
}

console.log(isValidSudoku([['5', '3', '.', '.', '7', '.', '.', '.', '.']
    , ['6', '.', '.', '1', '9', '5', '.', '.', '.']
    , ['.', '9', '8', '.', '.', '.', '.', '6', '.']
    , ['8', '.', '.', '.', '6', '.', '.', '.', '3']
    , ['4', '.', '.', '8', '.', '3', '.', '.', '1']
    , ['7', '.', '.', '.', '2', '.', '.', '.', '6']
    , ['.', '6', '.', '.', '.', '.', '2', '8', '.']
    , ['.', '.', '.', '4', '1', '9', '.', '.', '5']
    , ['.', '.', '.', '.', '8', '.', '.', '7', '9']]))
