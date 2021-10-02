var createSchemaItem = function (type, defaultValue) { return ({ type: type, defaultValue: defaultValue }); };
var blogSchema = {
    blog_id: createSchemaItem('number', -1),
    title: createSchemaItem('string', ''),
    body: createSchemaItem('string', ''),
    is_official: createSchemaItem('boolean', false),
    like_num: createSchemaItem('number', 0),
    hate_num: createSchemaItem('number', 0),
    share_num: createSchemaItem('number', 0),
    tags: createSchemaItem('string_array', []),
    create_date: createSchemaItem('date', new Date())
};
var createModel = function (schema) { return function (originData) {
    // @ts-ignore
    var keys = new Set(Object.keys(originData));
    var newData = {};
    for (var key in schema) {
        if (schema.hasOwnProperty(key) === false) {
            continue;
        }
        if (keys.has(key) && (typeof originData[key] === typeof schema[key].defaultValue)) {
            newData[key] = originData[key];
        }
        else {
            newData[key] = schema[key].defaultValue;
        }
    }
    return newData;
}; };
var blogModel = createModel(blogSchema);
var blog1 = blogModel({ blog_id: 1, like_num: 33, share_num: '3' });
var blog2 = blogModel({ blog_id: 2, like_num: 18, hate_num: 3, tags: ['typescript', 'dom'] });
console.log(blog1);
console.log(blog2);
