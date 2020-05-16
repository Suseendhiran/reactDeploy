import React, { useReducer } from 'react'

const InitialState = {
    firstCounter: 0,
    secondCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            {
                return { ...state, firstCounter: state.firstCounter + action.value }
            }
        case 'decrement':
            {
                return { ...state, firstCounter: state.firstCounter - action.value }
            }
        case 'increment2':
            {
                return { ...state, secondCounter: state.secondCounter + action.value }
            }
        case 'decrement2':
            {
                return { ...state, secondCounter: state.secondCounter - action.value }
            }
        case 'reset1':
            {
                return { ...state, firstCounter: InitialState.firstCounter }
            }
        case 'reset2':
            {
                return { ...state, secondCounter: InitialState.secondCounter }
            }
        default:
            {
                return state
            }

    }
}

function UseReducertwo() {

    const [Count, dispatch] = useReducer(reducer, InitialState)

    return (
        <div>
            Count 1 - {Count.firstCounter}

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'reset1' })}>Reset1</button>
            <div>
                Count 2 - {Count.secondCounter}
                <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>Increment 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 3 })}>Decrement 3</button>
                <button onClick={() => dispatch({ type: 'reset2' })}>Reset2</button>
            </div>
        </div>
    )
}

export default UseReducertwo
