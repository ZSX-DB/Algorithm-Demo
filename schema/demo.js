const blogSchema = {
    blog_id: {
        type: Number,
        default: -1
    },
    title: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: ''
    },
    is_personal: {
        type: Boolean,
        default: false
    },
    like_num: {
        type: Number,
        default: 0
    },
    hate_num: {
        type: Number,
        default: 0
    },
    tags: {
        type: Array,
        default: []
    },
    create_date: {
        type: Date,
        default: new Date()
    }
}

const createModel = schema => originData => {
    const keys = new Set(Object.keys(originData))
    const newData = {}
    for (const key in schema) {
        if (schema.hasOwnProperty(key) === false) {
            continue
        }
        if (keys.has(key)) {
            newData[key] = originData[key]
        } else {
            newData[key] = schema[key].default
        }
    }
    return newData
}

const blogModel = createModel(blogSchema)
const blog1 = blogModel({blog_id: 1, like_num: 33})
const blog2 = blogModel({blog_id: 2, like_num: 18, hate_num: 3, tags: ['typescript', 'dom']})
console.log(blog1)
console.log(blog2)
