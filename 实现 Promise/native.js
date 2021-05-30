const promise1 = new Promise((resolve, reject) => {
    // resolve('Success!');
    reject('fail')
});

promise1.then((value) => {
    console.log(value);
    // expected output: "Success!"
}).catch(reason => {
    console.log(reason)
})
