enum Type {
    String = 'string',
    Number = 'number',
    Boolean = 'boolean',
    Null = 'null',
    Undefined = 'undefined',
    StringArray = 'string_array',
    NumberArray = 'number_array',
    BooleanArray = 'boolean_array',
    Date = 'date'
}

type MatchReturn = {
    [Type.String]: { type: Type.String, defaultValue: string }
    [Type.Number]: { type: Type.Number, defaultValue: number }
    [Type.Boolean]: { type: Type.Boolean, defaultValue: boolean }
    [Type.Null]: { type: Type.Null, defaultValue: null }
    [Type.Undefined]: { type: Type.Undefined, defaultValue: undefined }
    [Type.StringArray]: { type: Type.StringArray, defaultValue: string[] }
    [Type.NumberArray]: { type: Type.NumberArray, defaultValue: number[] }
    [Type.BooleanArray]: { type: Type.BooleanArray, defaultValue: boolean[] }
    [Type.Date]: { type: Type.Date, defaultValue: Date }
}

const createSchemaItem: {
    (type: Type.String, defaultValue: string): MatchReturn[Type.String]
    (type: Type.Number, defaultValue: number): MatchReturn[Type.Number]
    (type: Type.Boolean, defaultValue: boolean): MatchReturn[Type.Boolean]
    (type: Type.Null, defaultValue: null): MatchReturn[Type.Null]
    (type: Type.Undefined, defaultValue: undefined): MatchReturn[Type.Undefined]
    (type: Type.StringArray, defaultValue: string[]): MatchReturn[Type.StringArray]
    (type: Type.NumberArray, defaultValue: number[]): MatchReturn[Type.NumberArray]
    (type: Type.BooleanArray, defaultValue: boolean[]): MatchReturn[Type.BooleanArray]
    (type: Type.Date, defaultValue: Date): MatchReturn[Type.Date]
} = (type, defaultValue) => ({type, defaultValue})

type Schema = {
    [key: string]: MatchReturn[Type]
}

const blogSchema: Schema = {
    blog_id: createSchemaItem(Type.Number, -1),
    title: createSchemaItem(Type.String, ''),
    body: createSchemaItem(Type.String, ''),
    is_official: createSchemaItem(Type.Boolean, false),
    like_num: createSchemaItem(Type.Number, 0),
    hate_num: createSchemaItem(Type.Number, 0),
    share_num: createSchemaItem(Type.Number, 0),
    tags: createSchemaItem(Type.StringArray, []),
    create_date: createSchemaItem(Type.Date, new Date())
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
// share_num 为 string 类型，与 type 不符合，因此使用 defaultValue
const blog1 = blogModel({blog_id: 1, like_num: 33, share_num: '3'})
const blog2 = blogModel({blog_id: 2, like_num: 18, hate_num: 3, tags: ['typescript', 'dom']})

console.log(blog1)
console.log(blog2)

