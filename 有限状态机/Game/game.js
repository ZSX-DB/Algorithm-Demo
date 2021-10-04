/**
 * 根据用户按键输入更改角色状态
 * @param initialState
 * @param actions
 * @returns {string}
 */
const getFinalGameState = (initialState, actions = []) => {
    // 定义有限状态机及状态转移关系
    const FSM = {
        stand: {
            clickB: 'jump',
            down: 'crouch'
        },
        jump: {
            clickB: 'twiceJump'
        },
        twiceJump: {
            toFloor: 'stand'
        },
        crouch: {
            up: 'stand'
        }
    }

    let finalState = initialState

    for (const action of actions) {
        finalState = FSM[finalState][action]
        if (finalState === undefined) throw new Error(`Illegal operation, result in wrong action is ${action}`)
    }

    return finalState
}

console.log(getFinalGameState('stand'))
console.log(getFinalGameState('stand', ['clickB', 'clickB']))
console.log(getFinalGameState('twiceJump', ['toFloor', 'clickB']))
console.log(getFinalGameState('twiceJump', ['toFloor', 'down']))
console.log(getFinalGameState('crouch', ['up', 'clickB', 'clickB', 'toFloor']))

