// const useState = (initState) => {
//     let state = initState
//     const setState = (newState) => {
//         state = newState
//     }
//     return [state, setState]
// }

const useState = (initState) => {
    let state = {
        value: initState
    }
    const setState = (newState) => {
        state.value = newState
    }
    const {value} = state
    return [value, setState]
}

const [count, setCount] = useState(0)

console.log('count: ', count);

setCount(3)

console.log('count: ', count);

setCount(count + 2)

console.log('count: ', count);