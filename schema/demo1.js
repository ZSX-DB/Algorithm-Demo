var Type;
(function (Type) {
    Type["String"] = "string";
    Type["Number"] = "number";
    Type["Boolean"] = "boolean";
    Type["Null"] = "null";
    Type["Undefined"] = "undefined";
    Type["StringArray"] = "string_array";
    Type["NumberArray"] = "number_array";
    Type["BooleanArray"] = "boolean_array";
    Type["Date"] = "date";
})(Type || (Type = {}));
var createSchemaItem = function (type, defaultValue) { return ({ type: type, defaultValue: defaultValue }); };
var blogSchema = {
    blog_id: createSchemaItem(Type.Number, -1),
    title: createSchemaItem(Type.String, ''),
    body: createSchemaItem(Type.String, ''),
    is_official: createSchemaItem(Type.Boolean, false),
    like_num: createSchemaItem(Type.Number, 0),
    hate_num: createSchemaItem(Type.Number, 0),
    share_num: createSchemaItem(Type.Number, 0),
    tags: createSchemaItem(Type.StringArray, []),
    create_date: createSchemaItem(Type.Date, new Date())
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
// share_num 为 string 类型，与 type 不符合，因此使用 defaultValue
var blog1 = blogModel({ blog_id: 1, like_num: 33, share_num: '3' });
var blog2 = blogModel({ blog_id: 2, like_num: 18, hate_num: 3, tags: ['typescript', 'dom'] });
console.log(blog1);
console.log(blog2);
