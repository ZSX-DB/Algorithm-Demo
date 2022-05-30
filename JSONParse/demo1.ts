const numsSet: Set<string> = new Set<string>(['.', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

const parseObject = (text: string): Record<string, any> => {
    const obj = {}
    const keyStack = []
    for (let i = 1; i < text.length - 1; i++) {
        if (text[i] === '"') {
            const lastKeysNum = keyStack.length
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '"') {
                    flag--
                }
                j++
            }
            if (keyStack.length !== 0) {
                obj[keyStack.pop()] = text.slice(i + 1, j - 1)
            } else {
                keyStack.push(text.slice(i + 1, j - 1))
            }
            i = j
            const newKeysNum = keyStack.length
            if (newKeysNum > lastKeysNum) {
                let numStr = ''
                while (true) {
                    if (['"', '[', '{'].includes(text[j])) {
                        break
                    } else if (text[j] === 't') {
                        obj[keyStack.pop()] = true
                        break
                    } else if (text[j] === 'f') {
                        obj[keyStack.pop()] = false
                        break
                    } else if (text[j] === 'n') {
                        obj[keyStack.pop()] = null
                        break
                    } else if (numsSet.has(text[j])) {
                        for (let k = j; k < text.length; k++) {
                            if (numsSet.has(text[k])) {
                                numStr += text[k]
                            } else {
                                break
                            }
                        }
                        obj[keyStack.pop()] = Number(numStr)
                        break
                    }
                    j++
                }
            }
        } else if (text[i] === '[') {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '[') {
                    flag++
                } else if (text[j] === ']') {
                    flag--
                }
                j++
            }
            obj[keyStack.pop()] = parseArray(text.slice(i, j))
            i = j
        } else if (text[i] === '{') {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '{') {
                    flag++
                } else if (text[j] === '}') {
                    flag--
                }
                j++
            }
            obj[keyStack.pop()] = parseObject(text.slice(i, j))
            i = j
        }
    }
    return obj
}

const parseArray = (text: string): Array<any> => {
    const array = []
    for (let i = 1; i < text.length - 1; i++) {
        const ch = text[i]
        if (ch === 'n') {
            array.push(null)
            i += 4
        } else if (ch === 'f') {
            array.push(false)
            i += 5
        } else if (ch === 't') {
            array.push(true)
            i += 4
        } else if (ch === '"') {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '"') {
                    flag--
                }
                j++
            }
            array.push(text.slice(i + 1, j - 1))
            i = j
        } else if (ch === '{') {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '{') {
                    flag++
                } else if (text[j] === '}') {
                    flag--
                }
                j++
            }
            array.push(parseObject(text.slice(i, j)))
            i = j
        } else if (ch === '[') {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (text[j] === '[') {
                    flag++
                } else if (text[j] === ']') {
                    flag--
                }
                j++
            }
            array.push(parseArray(text.slice(i, j)))
            i = j
        } else if (numsSet.has(ch)) {
            let flag = 1
            let j = i + 1
            while (flag !== 0) {
                if (numsSet.has(text[j]) === false) {
                    flag--
                }
                j++
            }
            array.push(Number(text.slice(i, j - 1)))
            i = j
        }
    }
    return array
}

const parse1 = (text: string) => {
    text = text.trim()
    if (text[0] === '{') {
        return parseObject(text)
    } else if (text[0] === '[') {
        return parseArray(text)
    } else {
        throw new Error("This is error text")
    }
}

const text1 = '[null, true , "middle", 492.013, -4, false, {"bool": true}, {"str" : "str"}, [376, true, {"inline": null}]]'
const text2 = '{"name":"neo", "list": [3, 5, true, {"inlineNum": 3}, "str", ["inline"], false], "obj": {"child": true}}'
const text3 = `
{
  "firstName": "Liangxu",
  "lastName": "Yan",
  "age": 18,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "Guangzhou",
    "province": "Guangdong",
    "postalCode": "510655"
},
  "phoneNumber": [
{
  "type": "home",
  "number": "020 555-1234"
},
{
  "type": "company",
  "number": "020 555-4567"
}
],
  "gender": {
  "type": "male"
  }
}
`
console.log(parse1(text1))
console.log(parse1(text2))
console.log(parse1(text3))
