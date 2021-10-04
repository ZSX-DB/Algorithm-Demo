const maxLength = arr => {
    let maxlength = 0
    const helper = (str, idx) => {
        if (idx < arr.length) {
            helper(str, idx + 1)
            helper(`${str}${arr[idx]}`, idx + 1)
        } else {
            if (str.split('').reduce((set, ch) => set.add(ch), new Set()).size === str.length) maxlength = Math.max(maxlength, str.length)
        }
    }
    helper('', 0)
    return maxlength
}

console.log(maxLength(['un', 'iq', 'ue']))
console.log(maxLength(['cha', 'r', 'act', 'ers']))
