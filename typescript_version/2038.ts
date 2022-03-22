// const winnerOfGame = (colors: string): boolean => {
//     const getCount = (color: string): number => colors.split(color).filter(color => color.length > 2).map(color => color.length - 2).reduce((sum, num) => sum + num, 0)
//     const aliceCount: number = getCount('B')
//     const bobCount: number = getCount('A')
//     return aliceCount > bobCount
// }

const winnerOfGame = (colors: string): boolean => {
    const getCount = (color: string): number => colors.split(color).reduce<number>((sum, color) => sum + (color.length > 2 ? color.length - 2 : 0), 0)
    return getCount('B') > getCount('A')
}

// const winnerOfGame = (colors: string): boolean => {
//     let aliceCount: number = 0
//     let bobCount: number = 0
//     for (let i = 1; i < colors.length - 1; i++) {
//         if (colors[i] === colors[i - 1] && colors[i] === colors[i + 1]) {
//             colors[i] === 'A' ? aliceCount++ : bobCount++
//         }
//     }
//     return aliceCount > bobCount
// }
