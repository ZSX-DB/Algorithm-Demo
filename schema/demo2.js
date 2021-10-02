var createSchemaItem = function (type, defaultValue) { return ({ type: type, defaultValue: defaultValue }); };
console.log(createSchemaItem('number', 3));
console.log(createSchemaItem('string_array', ['typescript', 'dom']));
console.log(createSchemaItem('boolean', true));
