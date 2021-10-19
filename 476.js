/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => parseInt(num.toString(2).split('').map(ch => ch === '0' ? '1' : '0').join(''), 2)
