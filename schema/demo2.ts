type Type =
    'string'
    | 'number'
    | 'boolean'
    | 'null'
    | 'undefined'
    | 'string_array'
    | 'number_array'
    | 'boolean_array'
    | 'date'

type MatchType = {
    ['string']: string
    ['number']: number
    ['boolean']: boolean
    ['null']: null
    ['undefined']: undefined
    ['string_array']: string[]
    ['number_array']: number[]
    ['boolean_array']: boolean[]
    ['date']: Date
}

const createSchemaItem = <T extends Type>(type: T, defaultValue: MatchType[T]) => ({type, defaultValue})

type Schema = {
    [key: string]:
        { type: 'string', defaultValue: string } |
        { type: 'number', defaultValue: number } |
        { type: 'boolean', defaultValue: boolean } |
        { type: 'null', defaultValue: null } |
        { type: 'undefined', defaultValue: undefined } |
        { type: 'string_array', defaultValue: string[] } |
        { type: 'number_array', defaultValue: number[] } |
        { type: 'boolean_array', defaultValue: boolean[] } |
        { type: 'date', defaultValue: Date }
}

const blogSchema: Schema = {
    blog_id: createSchemaItem('number', -1),
    title: createSchemaItem('string', ''),
    body: createSchemaItem('string', ''),
    is_official: createSchemaItem('boolean', false),
    like_num: createSchemaItem('number', 0),
    hate_num: createSchemaItem('number', 0),
    share_num: createSchemaItem('number', 0),
    tags: createSchemaItem('string_array', []),
    create_date: createSchemaItem('date', new Date())
}

const createModel = (schema: Schema) => (originData: { [key: string]: any }) => {
    // @ts-ignore
    const keys = new Set(Object.keys(originData))
    const newData = {}
    for (const key in schema) {
        if (schema.hasOwnProperty(key) === false) {
            continue
        }
        if (keys.has(key) && (typeof originData[key] === typeof schema[key].defaultValue)) {
            newData[key] = originData[key]
        } else {
            newData[key] = schema[key].defaultValue
        }
    }
    return newData
}

const blogModel = createModel(blogSchema)
const blog1 = blogModel({blog_id: 1, like_num: 33, share_num: '3'})
const blog2 = blogModel({blog_id: 2, like_num: 18, hate_num: 3, tags: ['typescript', 'dom']})

console.log(blog1)
console.log(blog2)
