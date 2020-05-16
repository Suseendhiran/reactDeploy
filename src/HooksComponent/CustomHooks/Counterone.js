import React, { useState } from 'react'
import useCounter from './useCounter'

function Counterone() {

    const [count, increment, decrement, reset] = useCounter(10, 5)

    return (
        <div>
            Counter One - {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counterone
