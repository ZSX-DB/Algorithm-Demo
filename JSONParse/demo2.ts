const isNumStr = (ch: string) => /[0-9]/.test(ch)

const parse = (text: string) => {
    let i: number = 0
    let ch: string = text[i]



    const next = (c?: string): void => {
        if (c) {
            if (text[i] === c) {
                i++
                ch = text[i]
            } else {
                throw new Error("Error in parsing. '" + c + "' is expected at " + i + ".")
            }
        } else {
            i++
            ch = text[i]
        }
    }

    const colon = () => {
        next(':')
    }

    const leftBrace = () => {
        next('{')
    }

    const rightBrace = () => {
        next('}')
    }

    const leftBracket = () => {
        next('[')
    }

    const rightBracket = () => {
        next(']')
    }

    const quote = () => {
        next('"')
    }

    const comma = () => {
        next(',')
    }

    const dot = () => {
        next('.')
    }

    const _null = () => {
        next('n')
        next('u')
        next('l')
        next('l')
    }

    const _true = () => {
        next('t')
        next('r')
        next('u')
        next('e')
    }

    const _false = () => {
        next('f')
        next('a')
        next('l')
        next('s')
        next('e')
    }

    const createSign = (): 1 | -1 => {
        if (ch === '+') {
            next()
            return 1
        } else if (ch === '-') {
            next()
            return -1
        }
        return 1
    }

    const createWord = (): string => {
        let word: string = ''
        while (ch !== '"') {
            word += ch
            next()
        }
        return word
    }

    const integer = (): number => {
        let parsed: string = ''
        while (isNumStr(ch)) {
            parsed += ch
            next()
        }
        return Number(parsed)
    }

    const decimals = (): number => {
        let parsed: string = '0.'
        while (isNumStr(ch)) {
            parsed += ch
            next()
        }
        return Number(parsed)
    }

    const _number = (): number => {
        let result: number = 0
        const sign = createSign()
        const int = integer()
        let dec = 0
        if (ch === '.') {
            dot()
            dec = decimals()
        }
        result += int
        if (dec) {
            result += dec
        }
        return sign * result
    }

    const space = () => {
        while (/\s/.test(ch)) {
            next()
        }
    }

    const _string = (): string => {
        quote()
        const word = createWord()
        quote()
        return word
    }

    const createKeyValue = (): Record<string, any> => {
        const key = _string()
        space()
        colon()
        space()
        const value = createElement()
        const singleObj = {}
        singleObj[key] = value
        return singleObj
    }

    const createKeyValues = (): Record<string, any> => {
        let obj = {}
        while (i < text.length) {
            obj = Object.assign(obj, createKeyValue())
            space()
            if (ch === ',') {
                comma()
            } else {
                break
            }
            space()
        }
        return obj
    }

    const _object = (): Record<string, any> => {
        leftBrace()
        space()
        const result = createKeyValues()
        space()
        rightBrace()
        return result
    }

    const _array = (): any[] => {
        leftBracket()
        space()
        const result = createElements()
        space()
        rightBracket()
        return result
    }

    const createElement = () => {
        if (ch === '"') {
            return _string()
        } else if (ch === '[') {
            return _array()
        } else if (ch === '{') {
            return _object()
        } else if (['+', '-'].includes(ch) || isNumStr(ch)) {
            return _number()
        } else if (ch === 't') {
            _true()
            return true
        } else if (ch === 'f') {
            _false()
            return false
        } else if (ch === 'n') {
            _null()
            return null
        } else {
            throw new Error("Error in parsing. '" + ch + "' is invalid as an element in array at " + i + ".")
        }
    }

    const createElements = () => {
        const elements = []
        while (['"', '[', '{', 't', 'f', 'n', '+', '-'].includes(ch) || isNumStr(ch)) {
            const element = createElement()
            elements.push(element)
            space()
            if (ch === ',') {
                comma()
            } else {
                break
            }
            space()
        }
        return elements
    }


    space()
    const result = createElement()
    space()

    return result
}

const text4 = '[null, true , "middle", 492.013, -4, false, {"bool": true}, {"str" : "str"}, [376, true, {"inline": null}]]'
const text5 = '{"name":"neo", "list": [3, 5, true, {"inlineNum": 3}, "str", ["inline"], false], "obj": {"child": true}}'
const text6 = `
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
console.log(parse(text4))
console.log(parse(text5))
console.log(parse(text6))

