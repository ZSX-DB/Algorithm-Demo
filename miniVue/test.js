const state = {
    value: 3
}

const component = {
    render () {
        return {
            my: state.value
        }
    }
}

const prev = component.render()

state.value = 7

const curr = component.render()

console.log(prev, curr);
