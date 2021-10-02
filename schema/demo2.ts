type Type =
    'string'
    | 'number'
    | 'boolean'
    | 'null'
    | 'undefined'
    | 'string_array'
    | 'number_array'
    | 'boolean_array'

type MatchType = {
    ['string']: string
    ['number']: number
    ['boolean']: boolean
    ['null']: null
    ['undefined']: undefined
    ['string_array']: string[]
    ['number_array']: number[]
    ['boolean_array']: boolean[]
}

const createSchemaItem = <T extends Type>(type: T, defaultValue: MatchType[T]) => ({type, defaultValue})

console.log(createSchemaItem('number', 3))
console.log(createSchemaItem('string_array', ['typescript', 'dom']))
console.log(createSchemaItem('boolean', true))
